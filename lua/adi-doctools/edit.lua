-- Apply the markup edits of format.lua to the current buffer

local util = require('adi-doctools.util')
local format = require('adi-doctools.format')

local M = {}

local VISUAL = { v = true, V = true, ['\22'] = true }

function M.syntax_of(bufnr)
  local ft = vim.bo[bufnr].filetype
  if ft == 'rst' then
    return 'rst'
  end
  if ft == 'markdown' or ft == 'myst' then
    return 'myst'
  end
  return nil
end

local function line_starts(lines)
  local starts, offset = {}, 0
  for i, line in ipairs(lines) do
    starts[i] = offset
    offset = offset + #line + 1
  end
  return starts
end

-- 0-based row and column of a byte offset
local function position_at(starts, offset)
  local row = #starts
  while row > 1 and starts[row] > offset do
    row = row - 1
  end
  return row - 1, offset - starts[row]
end

local function char_end(line, col)
  -- col: 0-based byte of the start of a character, returns the byte after it
  if col >= #line then
    return #line
  end
  return col + 1 + vim.str_utf_end(line, col + 1)
end

-- Buffer, lines and selection as byte offsets of the lines joined by '\n'
-- opts.visual: use the '< and '> marks, for a command with a range
local function capture(opts)
  local bufnr = vim.api.nvim_get_current_buf()
  local win = vim.api.nvim_get_current_win()
  local lines = vim.api.nvim_buf_get_lines(bufnr, 0, -1, false)
  local starts = line_starts(lines)
  local mode = vim.api.nvim_get_mode().mode
  local ctx = {
    bufnr = bufnr,
    win = win,
    lines = lines,
    tick = vim.api.nvim_buf_get_changedtick(bufnr),
    visual = false,
    insert = mode:sub(1, 1) == 'i',
  }

  local kind, first, last
  if VISUAL[mode] then
    kind, first, last = mode, vim.fn.getpos('v'), vim.fn.getpos('.')
  elseif opts and opts.visual then
    kind, first, last = vim.fn.visualmode(), vim.fn.getpos("'<"), vim.fn.getpos("'>")
  end

  if kind and kind ~= '' and first[2] > 0 and last[2] > 0 then
    if first[2] > last[2] or (first[2] == last[2] and first[3] > last[3]) then
      first, last = last, first
    end
    ctx.visual = true
    local r1, r2 = first[2], math.min(last[2], #lines)
    if kind == 'V' then
      ctx.selection = { start = starts[r1], ['end'] = starts[r2] + #lines[r2] }
    else
      local c1 = math.min(first[3] - 1, #lines[r1])
      local c2 = char_end(lines[r2], math.min(last[3] - 1, #lines[r2]))
      ctx.selection = { start = starts[r1] + c1, ['end'] = starts[r2] + c2 }
    end
  else
    local row, col = unpack(vim.api.nvim_win_get_cursor(win))
    local offset = starts[row] + math.min(col, #lines[row])
    ctx.selection = { start = offset, ['end'] = offset }
  end
  return ctx
end

local function leave_visual()
  if VISUAL[vim.api.nvim_get_mode().mode] then
    vim.cmd('normal! \27')
  end
end

-- Replace the range of the result and place the cursor or the selection
local function apply(ctx, formatter)
  local syntax = M.syntax_of(ctx.bufnr)
  if not syntax then
    return false
  end
  if not vim.api.nvim_buf_is_valid(ctx.bufnr) or vim.api.nvim_buf_get_changedtick(ctx.bufnr) ~= ctx.tick then
    util.notify('the buffer changed, the format was not applied', vim.log.levels.WARN)
    return false
  end

  local source = table.concat(ctx.lines, '\n')
  local result = formatter(source, ctx.selection, syntax)
  local starts = line_starts(ctx.lines)
  local r1, c1 = position_at(starts, result.range.start)
  local r2, c2 = position_at(starts, result.range['end'])

  leave_visual()
  vim.api.nvim_buf_set_text(ctx.bufnr, r1, c1, r2, c2, vim.split(result.text, '\n', { plain = true }))

  local lines = vim.api.nvim_buf_get_lines(ctx.bufnr, 0, -1, false)
  starts = line_starts(lines)
  local sr, sc = position_at(starts, result.selection.start)
  local er, ec = position_at(starts, result.selection['end'])
  if not vim.api.nvim_win_is_valid(ctx.win) or vim.api.nvim_win_get_buf(ctx.win) ~= ctx.bufnr then
    return true
  end
  vim.api.nvim_set_current_win(ctx.win)
  ctx.cursor = { er + 1, ec }

  if ctx.insert then
    vim.api.nvim_win_set_cursor(ctx.win, { er + 1, ec })
  elseif ctx.visual and result.selection.start ~= result.selection['end'] then
    vim.api.nvim_win_set_cursor(ctx.win, { sr + 1, sc })
    vim.cmd('normal! v')
    local last = ec > 0 and (ec - 1 + vim.str_utf_start(lines[er + 1], ec)) or 0
    vim.api.nvim_win_set_cursor(ctx.win, { er + 1, last })
  else
    vim.api.nvim_win_set_cursor(ctx.win, { sr + 1, sc })
  end
  return true
end

-- Enter insert mode at the cursor set by apply, and show the completion
local function insert_and_complete(ctx)
  if not ctx.cursor then
    return
  end
  local row, col = unpack(ctx.cursor)
  local line = vim.api.nvim_buf_get_lines(ctx.bufnr, row - 1, row, false)[1] or ''
  if not ctx.insert then
    -- In normal mode the cursor cannot be after the last character
    if col >= #line then
      vim.cmd('startinsert!')
    else
      vim.api.nvim_win_set_cursor(ctx.win, { row, col })
      vim.cmd('startinsert')
    end
  end
  vim.defer_fn(require('adi-doctools.lsp').retrigger, 30)
end

local function relative_path(from_dir, path)
  local from = vim.split(vim.fs.normalize(from_dir), '/', { trimempty = true })
  local to = vim.split(vim.fs.normalize(path), '/', { trimempty = true })
  local common = 0
  while common < #from and common < #to and from[common + 1] == to[common + 1] do
    common = common + 1
  end
  local parts = {}
  for _ = common + 1, #from do
    parts[#parts + 1] = '..'
  end
  for i = common + 1, #to do
    parts[#parts + 1] = to[i]
  end
  return table.concat(parts, '/')
end

local function inline(kind)
  return function(ctx)
    return apply(ctx, function(s, r, syntax)
      return format.toggle_inline(s, r, syntax, kind)
    end)
  end
end

local function list(kind)
  return function(ctx)
    return apply(ctx, function(s, r, syntax)
      return format.toggle_list(s, r, syntax, kind)
    end)
  end
end

local function role(name)
  return function(ctx)
    if apply(ctx, function(s, r, syntax)
      return format.insert_role(s, r, syntax, name)
    end) then
      ctx.visual = false
      insert_and_complete(ctx)
    end
  end
end

-- Each action runs in a coroutine: function(ctx, arg)
M.actions = {
  bold = inline('bold'),
  italic = inline('italic'),
  code = inline('code'),
  subscript = inline('subscript'),
  superscript = inline('superscript'),
  bullet = list('bullet'),
  numbered = list('numbered'),
  reference = role('ref'),
  document = role('doc'),

  heading = function(ctx, arg)
    local level = tonumber(arg)
    if not level then
      local labels = { 'Paragraph' }
      for i in ipairs(format.HEADING_CHARS) do
        labels[#labels + 1] = 'Heading ' .. i
      end
      local _, index = util.select(labels, { prompt = 'Heading level' })
      if not index then
        return
      end
      level = index - 1
    end
    level = math.min(math.max(math.floor(level), 0), #format.HEADING_CHARS)
    apply(ctx, function(s, r, syntax)
      return format.set_heading(s, r, syntax, level)
    end)
  end,

  quote = function(ctx)
    apply(ctx, format.toggle_quote)
  end,

  link = function(ctx, arg)
    local url = arg or util.input({ prompt = 'URL of the link: ', default = 'https://' })
    url = url and vim.trim(url) or ''
    if url == '' or url == 'https://' then
      return
    end
    if url:find('%s') then
      util.notify('enter a URL without spaces', vim.log.levels.WARN)
      return
    end
    apply(ctx, function(s, r, syntax)
      return format.insert_link(s, r, syntax, url)
    end)
  end,

  image = function(ctx, arg)
    local name = vim.api.nvim_buf_get_name(ctx.bufnr)
    local dir = name ~= '' and util.dirname(name) or vim.fn.getcwd()
    local path = arg or util.input({ prompt = 'Image: ', default = dir .. '/', completion = 'file' })
    path = path and vim.trim(path) or ''
    if path == '' or path == dir .. '/' then
      return
    end
    if util.is_absolute(path) or path:sub(1, 1) == '~' then
      path = relative_path(dir, vim.fn.fnamemodify(path, ':p'))
    end
    apply(ctx, function(s, r, syntax)
      return format.insert_image(s, r, syntax, path)
    end)
  end,

  table = function(ctx, arg)
    local value = arg or util.input({ prompt = 'Rows x columns, without the header row: ', default = '3x3' })
    if not value then
      return
    end
    local size = format.parse_table_size(value)
    if not size then
      util.notify('use rows x columns, e.g. 3x3', vim.log.levels.WARN)
      return
    end
    apply(ctx, function(s, r, syntax)
      return format.insert_table(s, r, syntax, size.rows, size.columns)
    end)
  end,

  codeblock = function(ctx, arg)
    local language = arg or util.select(format.CODE_LANGUAGES, { prompt = 'Code block language' })
    if not language then
      return
    end
    apply(ctx, function(s, r, syntax)
      return format.wrap_code(s, r, syntax, language)
    end)
  end,

  admonition = function(ctx, arg)
    local kind = arg or util.select(format.ADMONITIONS, { prompt = 'Admonition' })
    if not kind then
      return
    end
    if not vim.tbl_contains(format.ADMONITIONS, kind) then
      kind = 'note'
    end
    apply(ctx, function(s, r, syntax)
      return format.wrap_admonition(s, r, syntax, kind)
    end)
  end,

  rule = function(ctx)
    apply(ctx, format.insert_rule)
  end,
}

function M.kinds()
  local kinds = vim.tbl_keys(M.actions)
  table.sort(kinds)
  return kinds
end

-- kind: one of M.kinds(), arg: skips the prompt of the action
-- opts.visual: use the last visual selection
function M.run(kind, arg, opts)
  local action = M.actions[kind]
  if not action then
    util.notify(("unknown format '%s', use one of: %s"):format(tostring(kind), table.concat(M.kinds(), ', ')),
      vim.log.levels.ERROR)
    return
  end
  if not M.syntax_of(vim.api.nvim_get_current_buf()) then
    util.notify('open a reStructuredText or MyST Markdown file to format', vim.log.levels.WARN)
    return
  end
  local ctx = capture(opts)
  if arg == '' then
    arg = nil
  end
  util.run(function()
    action(ctx, arg)
  end)
end

return M
