-- Grammar and spell check with LanguageTool, through the Python backend

local util = require('adi-doctools.util')
local log = require('adi-doctools.log')
local config = require('adi-doctools.config')
local state = require('adi-doctools.state')
local server = require('adi-doctools.server')
local annotated = require('adi-doctools.annotated')

local M = {}

local DEBOUNCE_MS = 1000
local CHECK_TIMEOUT_MS = 10 * 60 * 1000
local VOCABULARY_DEPTH = 8
local VOCABULARY_EXCLUDE = { node_modules = true, ['.venv'] = true, venv = true, _build = true, build = true, ['.git'] = true }
local MODES = { ['local'] = true, cloud = true, off = true }

M.namespace = vim.api.nvim_create_namespace('adi-doctools.grammar')

local jobs = {}        -- bufnr -> { timer, running, rerun }
local reported = {}
local problem
local busy = 0
local vocabulary

local function refresh_status()
  pcall(vim.api.nvim_exec_autocmds, 'User', { pattern = 'DoctoolsStatus', modeline = false })
end

local function set_problem(value)
  if problem ~= value then
    problem = value
    refresh_status()
  end
end

local function is_rst(bufnr)
  return vim.api.nvim_buf_is_valid(bufnr) and vim.api.nvim_buf_is_loaded(bufnr)
    and vim.bo[bufnr].filetype == 'rst' and vim.bo[bufnr].buftype == ''
end

-- Options -------------------------------------------------------------------

-- 'local', 'cloud' or 'off'
function M.mode()
  local mode = state.get(server.workspace(), 'grammar_mode') or config.options.grammar.mode
  if mode == 'api' then
    mode = 'cloud'
  end
  return MODES[mode] and mode or 'local'
end

function M.disabled_rules()
  local rules = {}
  for _, rule in ipairs(config.options.grammar.disabled_rules or {}) do
    rules[rule] = true
  end
  for _, rule in ipairs(state.get(server.workspace(), 'disabled_rules', {})) do
    rules[rule] = true
  end
  return rules
end

local function options()
  local grammar = config.options.grammar
  return {
    mode = M.mode(),
    language = grammar.language ~= '' and grammar.language or 'en-US',
    username = grammar.api_username or '',
    api_key = grammar.api_key or '',
    disabled_rules = M.disabled_rules(),
  }
end

-- Vale vocabularies -----------------------------------------------------------

-- Translate a Go regular expression to a very magic Vim pattern
local function to_vim_pattern(body)
  local out = {}
  local in_class = false
  local i = 1
  while i <= #body do
    local c = body:sub(i, i)
    local next_c = body:sub(i + 1, i + 1)
    if c == '\\' then
      if next_c == 'b' and not in_class then
        out[#out + 1] = '%(<|>)'
      else
        out[#out + 1] = c .. next_c
      end
      i = i + 1
    elseif in_class then
      in_class = c ~= ']'
      out[#out + 1] = c
    elseif c == '[' then
      in_class = true
      out[#out + 1] = c
      if next_c == '^' then
        out[#out + 1] = '^'
        i = i + 1
      end
      if body:sub(i + 1, i + 1) == ']' then
        out[#out + 1] = ']'
        i = i + 1
      end
    elseif c == '(' and body:sub(i + 1, i + 2) == '?:' then
      out[#out + 1] = '%('
      i = i + 2
    elseif ('=@~&<>%'):find(c, 1, true) then
      out[#out + 1] = '\\' .. c
    else
      out[#out + 1] = c
    end
    i = i + 1
  end
  return table.concat(out)
end

-- search: find the term in a text, otherwise match a whole word
local function vale_pattern(pattern, search)
  local insensitive = pattern:sub(1, 4) == '(?i)'
  local body = to_vim_pattern(insensitive and pattern:sub(5) or pattern)
  local source = '\\v' .. (insensitive and '\\c' or '\\C')
    .. (search and ('%(<|>)(' .. body .. ')%(<|>)') or ('^%(' .. body .. ')$'))
  if not pcall(vim.regex, source) then
    return nil
  end
  return source
end

M._vale_pattern = vale_pattern

local function read_patterns(file)
  local patterns = {}
  for _, line in ipairs(util.split_lines(util.read_file(file) or '')) do
    line = vim.trim(line)
    if line ~= '' and line:sub(1, 1) ~= '#' then
      patterns[#patterns + 1] = line
    end
  end
  return patterns
end

-- **/config/vocabularies/*/{accept,reject}.txt
local function load_vocabulary(root)
  local vocab = { accept = {}, reject = {} }
  local ok, iter = pcall(vim.fs.dir, root, {
    depth = VOCABULARY_DEPTH,
    skip = function(dir)
      return not VOCABULARY_EXCLUDE[util.basename(dir)]
    end,
  })
  if not ok then
    return vocab
  end
  for name, type_ in iter do
    local kind = type_ == 'file' and name:match('config/vocabularies/[^/]+/(%a+)%.txt$')
    if kind == 'accept' or kind == 'reject' then
      for _, original in ipairs(read_patterns(util.join(root, name))) do
        local pattern = vale_pattern(original, kind == 'reject')
        if pattern and kind == 'accept' then
          vocab.accept[#vocab.accept + 1] = vim.regex(pattern)
        elseif pattern then
          vocab.reject[#vocab.reject + 1] = { pattern = pattern, original = original }
        end
      end
    end
  end
  return vocab
end

local function get_vocabulary()
  if not vocabulary then
    vocabulary = load_vocabulary(server.workspace())
  end
  return vocabulary
end

function M.invalidate_vocabulary()
  vocabulary = nil
end

local function is_accepted(vocab, word)
  for _, regex in ipairs(vocab.accept) do
    if regex:match_str(word) then
      return true
    end
  end
  return false
end

local function find_rejected(vocab, text)
  local matches = {}
  for _, entry in ipairs(vocab.reject) do
    local start = 0
    while start <= #text do
      local found = vim.fn.matchstrpos(text, entry.pattern, start)
      local s, e = found[2], found[3]
      if s < 0 then
        break
      end
      if e > s then
        matches[#matches + 1] = { word = found[1], offset = s, length = e - s, pattern = entry.original }
      end
      start = e > s and e or e + 1
    end
  end
  return matches
end

M._find_rejected = function(patterns, text)
  local vocab = { accept = {}, reject = {} }
  for _, original in ipairs(patterns) do
    vocab.reject[#vocab.reject + 1] = { pattern = vale_pattern(original, true), original = original }
  end
  return find_rejected(vocab, text)
end

-- Check ---------------------------------------------------------------------

local function once(key)
  if reported[key] then
    return false
  end
  reported[key] = true
  return true
end

local function handle_error(err, message, mode)
  message = message or ''
  if err == 'not_installed' then
    local text = 'local spell check needs the Python package language_tool_python, in the environment of adoc'
    set_problem(text)
    if once(err) then
      util.notify(text .. '. Or turn it off with :Doctools grammar off', vim.log.levels.WARN)
    end
    return
  end

  local text
  local level = vim.log.levels.WARN
  if err == 'init_failed' and mode == 'local' then
    text = 'LanguageTool failed to start, make sure Java is installed.'
    level = vim.log.levels.ERROR
  elseif err == 'rate_limited' then
    text = 'LanguageTool API rate limit exceeded. Try again later or switch to the local mode.'
  elseif err == 'connection_error' then
    text = 'Could not connect to the LanguageTool API.'
  elseif err == 'api_error' then
    text = ('LanguageTool API error: %s. Consider switching to the local mode.'):format(message)
    level = vim.log.levels.ERROR
  end

  if text then
    set_problem(text)
    if once(err) then
      util.notify(text, level)
    end
  else
    set_problem(message ~= '' and message or tostring(err))
    log.append(('[grammar] %s %s'):format(tostring(err), message))
  end
end

local function line_starts(source)
  local starts = { 0 }
  local pos = 1
  while true do
    local nl = source:find('\n', pos, true)
    if not nl then
      break
    end
    starts[#starts + 1] = nl
    pos = nl + 1
  end
  return starts
end

-- 0-based line and column of a byte offset
local function position_at(starts, offset)
  local lo, hi = 1, #starts
  while lo < hi do
    local mid = math.floor((lo + hi + 1) / 2)
    if starts[mid] <= offset then
      lo = mid
    else
      hi = mid - 1
    end
  end
  return lo - 1, offset - starts[lo]
end

local function set_diagnostics(bufnr, source, matches)
  local starts = line_starts(source)
  local last = vim.api.nvim_buf_line_count(bufnr) - 1
  local diagnostics = {}
  for _, match in ipairs(matches) do
    local lnum, col = position_at(starts, match.src_offset)
    local end_lnum, end_col = position_at(starts, match.src_offset + match.src_length)
    if lnum <= last then
      diagnostics[#diagnostics + 1] = {
        lnum = lnum,
        col = col,
        end_lnum = math.min(end_lnum, last),
        end_col = end_col,
        message = match.message,
        severity = vim.diagnostic.severity.INFO,
        source = 'LanguageTool',
        code = match.rule,
        user_data = { replacements = match.replacements, rule = match.rule, matched_text = match.matched_text },
      }
    end
  end
  vim.diagnostic.set(M.namespace, bufnr, diagnostics)
end

local function clear(bufnr)
  if vim.api.nvim_buf_is_valid(bufnr) then
    vim.diagnostic.reset(M.namespace, bufnr)
  end
end

-- Map the matches of LanguageTool, on 'text', to the source
-- unit: 'codepoint' for the local LanguageTool, 'utf16' for the API
function M.map_matches(builder, source, text, result_matches, opts, vocab, unit)
  local mapped = {}
  for _, match in ipairs(result_matches or {}) do
    if not opts.disabled_rules[match.ruleId] then
      local offset, length = annotated.to_bytes(text, match.offset, match.length, unit)
      local src_offset, src_length = builder:map_to_source(offset, length)
      if src_offset then
        local matched_text = source:sub(src_offset + 1, src_offset + src_length)
        if not is_accepted(vocab, matched_text) then
          mapped[#mapped + 1] = {
            message = match.message,
            replacements = match.replacements or {},
            rule = match.ruleId,
            src_offset = src_offset,
            src_length = src_length,
            matched_text = matched_text,
          }
        end
      end
    end
  end

  for _, rejected in ipairs(find_rejected(vocab, text)) do
    local src_offset, src_length = builder:map_to_source(rejected.offset, rejected.length)
    if src_offset then
      mapped[#mapped + 1] = {
        message = ('"%s" is a rejected term'):format(rejected.word),
        replacements = {},
        rule = 'VALE_REJECT',
        src_offset = src_offset,
        src_length = src_length,
        matched_text = rejected.word,
      }
    end
  end
  return mapped
end

-- (async) Returns true to check again, when the buffer changed meanwhile
local function check(bufnr)
  local opts = options()
  if opts.mode == 'off' then
    clear(bufnr)
    return false
  end
  if not server.is_running() then
    set_problem('The Doctools Python environment is not running.')
    return false
  end

  local ok, parser = pcall(vim.treesitter.get_parser, bufnr, 'rst')
  if not ok or not parser then
    set_problem('The tree-sitter parser for rst is not installed.')
    return false
  end
  local tree = parser:parse()[1]
  if not tree then
    return false
  end

  local tick = vim.api.nvim_buf_get_changedtick(bufnr)
  local source = table.concat(vim.api.nvim_buf_get_lines(bufnr, 0, -1, false), '\n') .. '\n'
  local builder = annotated.new()
  builder:build_from_tree(tree:root(), source)
  local text = builder:build_text(source)

  if not text:find('%S') then
    clear(bufnr)
    return false
  end

  local result, err = server.request({
    languageTool = 'check',
    text = text,
    mode = opts.mode == 'cloud' and 'api' or opts.mode,
    language = opts.language,
    username = opts.mode == 'cloud' and opts.username or '',
    apiKey = opts.mode == 'cloud' and opts.api_key or '',
  }, CHECK_TIMEOUT_MS)

  if not vim.api.nvim_buf_is_valid(bufnr) then
    return false
  end
  if err then
    clear(bufnr)
    set_problem(tostring(err))
    return false
  end
  if vim.api.nvim_buf_get_changedtick(bufnr) ~= tick then
    return true
  end
  if result.error then
    clear(bufnr)
    handle_error(result.error, result.message, opts.mode)
    return false
  end

  local unit = opts.mode == 'local' and 'codepoint' or 'utf16'
  set_diagnostics(bufnr, source, M.map_matches(builder, source, text, result.matches, opts, get_vocabulary(), unit))
  set_problem(nil)
  return false
end

local function set_busy(delta)
  busy = busy + delta
  refresh_status()
end

local function run(bufnr, job)
  if not is_rst(bufnr) then
    return
  end
  if job.running then
    job.rerun = true
    return
  end

  job.running = true
  set_busy(1)
  util.run(function()
    local ok, retry = pcall(check, bufnr)
    if not ok then
      log.append('[grammar] check failed: ' .. tostring(retry))
      retry = false
    end
    return retry
  end, function(retry)
    job.running = false
    set_busy(-1)
    if (retry or job.rerun) and is_rst(bufnr) and jobs[bufnr] == job then
      job.rerun = false
      M.schedule(bufnr, retry and 0 or DEBOUNCE_MS)
    end
  end)
end

function M.schedule(bufnr, delay)
  bufnr = bufnr == 0 and vim.api.nvim_get_current_buf() or bufnr
  if not is_rst(bufnr) then
    return
  end
  local job = jobs[bufnr]
  if not job then
    job = { running = false, rerun = false, timer = util.debounce() }
    jobs[bufnr] = job
  end
  job.timer.start(delay or DEBOUNCE_MS, function()
    run(bufnr, job)
  end)
end

function M.forget(bufnr)
  local job = jobs[bufnr]
  if job then
    job.timer.stop()
  end
  jobs[bufnr] = nil
  clear(bufnr)
end

function M.has_results(bufnr)
  return #vim.diagnostic.get(bufnr, { namespace = M.namespace }) > 0
end

function M.check_visible()
  local seen = {}
  for _, win in ipairs(vim.api.nvim_list_wins()) do
    local bufnr = vim.api.nvim_win_get_buf(win)
    if not seen[bufnr] and is_rst(bufnr) then
      seen[bufnr] = true
      M.schedule(bufnr, 0)
    end
  end
end

function M.on_configuration_changed()
  problem = nil
  reported = {}
  refresh_status()
  if M.mode() == 'off' then
    for bufnr in pairs(jobs) do
      clear(bufnr)
    end
  end
  M.check_visible()
end

function M.on_backend_started()
  set_problem(nil)
  M.check_visible()
end

-- Commands --------------------------------------------------------------------

function M.set_mode(mode)
  if mode == 'api' then
    mode = 'cloud'
  end
  if not MODES[mode] then
    util.notify(("unknown spell check mode '%s', use local, cloud or off"):format(tostring(mode)), vim.log.levels.ERROR)
    return
  end
  state.set(server.workspace(), 'grammar_mode', mode)
  M.on_configuration_changed()
end

function M.pick_mode()
  local current = M.mode()
  local labels = {
    ['local'] = 'Local: use the local LanguageTool (requires Java), text stays on this machine',
    cloud = 'Cloud: send the text to api.languagetool.org (rate-limited)',
    off = 'Off: turn off the grammar check',
  }
  vim.ui.select({ 'local', 'cloud', 'off' }, {
    prompt = 'Doctools spell check mode',
    format_item = function(mode)
      return labels[mode] .. (mode == current and ' (current)' or '')
    end,
  }, function(mode)
    if mode and mode ~= current then
      M.set_mode(mode)
    end
  end)
end

function M.disable_rule(rule)
  local rules = vim.deepcopy(state.get(server.workspace(), 'disabled_rules', {}))
  if not vim.tbl_contains(rules, rule) then
    rules[#rules + 1] = rule
    state.set(server.workspace(), 'disabled_rules', rules)
    util.notify(('disabled rule "%s"'):format(rule))
  end
  M.check_visible()
end

-- { mode, busy, problem } for the status line
function M.status()
  local mode = M.mode()
  return { mode = mode, busy = busy > 0, problem = mode ~= 'off' and problem or nil }
end

return M
