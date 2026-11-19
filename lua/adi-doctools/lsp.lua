-- In-process language server: completion, hover, definition and code actions
-- for reStructuredText, answered by the Python backend. It makes the features
-- available to the built-in LSP client and to any completion plugin.

local util = require('adi-doctools.util')
local server = require('adi-doctools.server')

local M = {}

M.name = 'adi-doctools'

local RETRIGGER = 'adi-doctools.retrigger'
local DISABLE_RULE = 'adi-doctools.disable-rule'

local KIND = { Module = 9, Keyword = 14, Snippet = 15, Reference = 18 }
local TRIGGER_CHARACTERS = { ':', '`', '<', '+', '.', ' ' }

-- Roles and targets -----------------------------------------------------------

local function srcdir()
  local info = server.server_info()
  return info and info.srcdir or util.join(server.workspace(), 'docs')
end

-- { file = path, anchor = id } for a docname, { url = url } for a link
function M.target_location(target)
  target = tostring(target)
  if target:match('^https?://') then
    return { url = target }
  end
  local docname, anchor = target:match('^([^#]*)#?(.*)$')
  for _, ext in ipairs({ '.rst', '.md' }) do
    local file = util.join(srcdir(), docname .. ext)
    if util.is_file(file) then
      return { file = file, anchor = anchor ~= '' and anchor or nil }
    end
  end
  return nil
end

-- 0-based line of the label of a :ref: target, 0 when not found
local function label_line(file, label)
  local content = util.read_file(file)
  if not content then
    return 0
  end
  local wanted = label:lower():gsub('%s+', ' ')
  local lnum = 0
  for line in (content .. '\n'):gmatch('(.-)\r?\n') do
    local name = line:match('^%s*%.%.%s+_`?(.-)`?:%s*$')
    if name and name:lower():gsub('%s+', ' ') == wanted then
      return lnum
    end
    lnum = lnum + 1
  end
  return 0
end

-- The docname of a :doc: target: from the root with a leading slash,
-- otherwise relative to the document
local function doc_target(target, bufnr)
  if target:sub(1, 1) == '/' then
    return (target:gsub('^/+', ''))
  end
  local name = bufnr and vim.api.nvim_buf_get_name(bufnr) or ''
  local dir = name ~= '' and util.relative(util.realpath(srcdir()), util.dirname(util.realpath(name)))
  if not dir or dir == '' then
    return target
  end
  return vim.fs.normalize(dir .. '/' .. target)
end

-- info: { role, title, target, bufnr }
-- callback(resolved): { target, title } or { error }, nil when it cannot be
-- resolved because the server is not running
function M.resolve_role(info, callback)
  if not server.is_running() or not server.server_info() then
    callback(nil)
    return
  end
  local target = info.role == 'doc' and doc_target(info.target, info.bufnr) or info.target
  server.request_cb({ role = info.role, target = target, title = info.title }, function(err, result)
    if err or type(result) ~= 'table' or not (result.target or result.error) then
      callback(nil)
    else
      callback(result)
    end
  end)
end

-- Completion ------------------------------------------------------------------

local function list_request(msg, callback)
  server.request_cb(msg, function(err, result)
    if err or type(result) ~= 'table' or result.error or type(result.list) ~= 'table' then
      callback({})
    else
      callback(result.list)
    end
  end)
end

local function range_of(pos, before, after)
  return {
    start = { line = pos.line, character = pos.character - before },
    ['end'] = { line = pos.line, character = pos.character + after },
  }
end

-- name: what is typed to find the item, text: what is inserted
-- suffixed: show the inserted text, e.g. 'ref:`' as 'external+'
local function item(name, kind, text, range, suffixed)
  return {
    label = suffixed and text or name,
    kind = kind,
    filterText = name,
    sortText = name,
    insertTextFormat = 1,
    textEdit = { range = range, newText = text },
  }
end

local function with_retrigger(entry)
  entry.command = { title = 'Suggest', command = RETRIGGER }
  return entry
end

local function skip_of(suffix, ...)
  for _, closing in ipairs({ ... }) do
    if vim.startswith(suffix, closing) then
      return #closing
    end
  end
  return 0
end

local function target_items(list, range, closing)
  local items = {}
  for _, t in ipairs(list) do
    local entry = item(t.name, KIND.Reference, t.name .. closing, range)
    if t.display then
      entry.detail = tostring(t.display)
    end
    if t.uri then
      entry.documentation = tostring(t.uri)
    end
    items[#items + 1] = entry
  end
  return items
end

local function role_targets(role, partial, pos, skip, closing, callback)
  local range = range_of(pos, #partial, skip)
  local inventory, role_type = role:match('^external%+([^%s:]+):(%S+)$')
  local msg = inventory
    and { completion = 'inventory_targets', inventory = inventory, role = role_type }
    or { completion = 'local_targets', role = role }
  list_request(msg, function(list)
    callback(target_items(list, range, closing))
  end)
end

local function complete(params, callback)
  local bufnr = vim.uri_to_bufnr(params.textDocument.uri)
  local pos = params.position
  local line = vim.api.nvim_buf_get_lines(bufnr, pos.line, pos.line + 1, false)[1] or ''
  local prefix = line:sub(1, pos.character)
  local suffix = line:sub(pos.character + 1)

  local function reply(items)
    callback({ isIncomplete = false, items = items })
  end

  -- :role:`title <[cursor] - complete the target
  local role, partial = prefix:match(':(%S+):`[^`]*<([^>]*)$')
  if role then
    return role_targets(role, partial, pos, skip_of(suffix, '>`', '>'), '>`', reply)
  end

  -- :role:`[cursor] - complete the target
  role, partial = prefix:match(':(%S+):`([^`]*)$')
  if role then
    return role_targets(role, partial, pos, skip_of(suffix, '`'), '`', reply)
  end

  -- :external+inv:[cursor] - complete the intersphinx role
  local inventory
  inventory, partial = prefix:match(':external%+([^%s:]+):([%w_]*)$')
  if inventory then
    local range = range_of(pos, #partial, skip_of(suffix, ':`', ':'))
    return list_request({ completion = 'inventory_types', inventory = inventory }, function(list)
      local items = {}
      for _, r in ipairs(list) do
        local entry = with_retrigger(item(r.name, KIND.Keyword, r.name .. ':`', range, true))
        entry.detail = r.domain ~= 'std' and r.domain or nil
        if r.objtype or r.count then
          entry.documentation = ('Type: %s\nEntries: %s'):format(r.objtype or '-', r.count or '-')
        end
        items[#items + 1] = entry
      end
      reply(items)
    end)
  end

  -- :external+[cursor] - complete the intersphinx inventory
  partial = prefix:match(':external%+(%S*)$')
  if partial then
    local range = range_of(pos, #partial, skip_of(suffix, ':'))
    return list_request({ completion = 'inventory' }, function(list)
      local items = {}
      for _, inv in ipairs(list) do
        local entry = with_retrigger(item(inv.name, KIND.Module, inv.name .. ':', range, true))
        if inv.project then
          entry.detail = vim.trim(('%s %s'):format(inv.project, inv.version or ''))
        end
        if inv.uri then
          entry.documentation = tostring(inv.uri)
        end
        items[#items + 1] = entry
      end
      reply(items)
    end)
  end

  -- :[cursor] - complete the role name
  partial = prefix:match('^:([%w_+%-]*)$') or prefix:match('%s:([%w_+%-]*)$')
  if partial then
    local range = range_of(pos, #partial, 0)
    return list_request({ completion = 'roles' }, function(list)
      local items = {}
      for _, r in ipairs(list) do
        local entry = with_retrigger(item(r.name, KIND.Keyword, r.partial and r.name or (r.name .. ':`'), range, true))
        if r.domain then
          entry.detail = r.domain
        end
        items[#items + 1] = entry
      end
      reply(items)
    end)
  end

  -- .. [cursor] - complete the directive name
  partial = prefix:match('^%s*%.%.%s+([%w_:%-]*)$')
  if partial and partial:sub(-2) ~= '::' then
    local range = range_of(pos, #partial, 0)
    return list_request({ completion = 'directives' }, function(list)
      local items = {}
      for _, d in ipairs(list) do
        local entry = item(d.name, KIND.Snippet, d.name .. '::', range, true)
        if d.domain then
          entry.detail = d.domain
        end
        items[#items + 1] = entry
      end
      reply(items)
    end)
  end

  reply({})
end

-- Hover and definition --------------------------------------------------------

local function role_at(params)
  local bufnr = vim.uri_to_bufnr(params.textDocument.uri)
  local role, title, target = require('adi-doctools.rst').role_at(bufnr, params.position.line, params.position.character)
  if not role then
    return nil
  end
  return { role = role, title = title, target = target, bufnr = bufnr }
end

local function markdown(lines)
  return { contents = { kind = 'markdown', value = table.concat(lines, '\n\n') } }
end

local function hover(params, callback)
  local info = role_at(params)
  if not info then
    return callback(nil)
  end

  M.resolve_role(info, function(resolved)
    local lines = { ('**Role:** `%s`'):format(info.role) }
    if not resolved then
      local def = require('adi-doctools.rst').resolve_role(info.role, info.title, info.target)
      if def and def.url then
        lines[#lines + 1] = '**Target:** ' .. def.url
      else
        lines[#lines + 1] = 'Start the server with `:Doctools start` to resolve the targets.'
      end
    elseif resolved.error then
      lines = { '**Error:** ' .. tostring(resolved.error) }
    else
      if resolved.title then
        lines[#lines + 1] = '**Title:** ' .. tostring(resolved.title)
      end
      lines[#lines + 1] = '**Target:** ' .. tostring(resolved.target)
      local location = M.target_location(resolved.target)
      if location and location.file then
        lines[#lines + 1] = '**File:** ' .. (util.relative(server.workspace(), location.file) or location.file)
      end
    end
    callback(markdown(lines))
  end)
end

local function definition(params, callback)
  local info = role_at(params)
  if not info then
    return callback(nil)
  end
  M.resolve_role(info, function(resolved)
    local location = resolved and resolved.target and M.target_location(resolved.target)
    if not location or not location.file then
      return callback(nil)
    end
    local line = info.role == 'ref' and label_line(location.file, info.target) or 0
    callback({
      uri = vim.uri_from_fname(location.file),
      range = { start = { line = line, character = 0 }, ['end'] = { line = line, character = 0 } },
    })
  end)
end

-- Code actions ----------------------------------------------------------------

local function before_or_equal(l1, c1, l2, c2)
  return l1 < l2 or (l1 == l2 and c1 <= c2)
end

local function code_action(params, callback)
  local grammar = require('adi-doctools.grammar')
  local bufnr = vim.uri_to_bufnr(params.textDocument.uri)
  local range = params.range
  local actions = {}

  for _, d in ipairs(vim.diagnostic.get(bufnr, { namespace = grammar.namespace })) do
    local overlaps = before_or_equal(d.lnum, d.col, range['end'].line, range['end'].character)
      and before_or_equal(range.start.line, range.start.character, d.end_lnum, d.end_col)
    local data = d.user_data or {}
    if overlaps then
      local edit_range = {
        start = { line = d.lnum, character = d.col },
        ['end'] = { line = d.end_lnum, character = d.end_col },
      }
      for i, replacement in ipairs(data.replacements or {}) do
        actions[#actions + 1] = {
          title = ('Replace with "%s"'):format(replacement),
          kind = 'quickfix',
          isPreferred = i == 1,
          edit = { changes = { [params.textDocument.uri] = { { range = edit_range, newText = replacement } } } },
        }
      end
      if data.rule and data.rule ~= 'VALE_REJECT' then
        actions[#actions + 1] = {
          title = ('Disable rule "%s"'):format(data.rule),
          kind = 'quickfix',
          command = { title = 'Disable rule', command = DISABLE_RULE, arguments = { data.rule } },
        }
      end
    end
  end

  callback(actions)
end

-- Server ----------------------------------------------------------------------

local handlers = {
  ['initialize'] = function(_, callback)
    callback({
      capabilities = {
        positionEncoding = 'utf-8',
        textDocumentSync = { openClose = false, change = 0 },
        completionProvider = { triggerCharacters = TRIGGER_CHARACTERS, resolveProvider = false },
        hoverProvider = true,
        definitionProvider = true,
        codeActionProvider = { codeActionKinds = { 'quickfix' } },
        executeCommandProvider = { commands = { RETRIGGER, DISABLE_RULE } },
      },
      serverInfo = { name = M.name },
    })
  end,
  ['shutdown'] = function(_, callback)
    callback(nil)
  end,
  ['textDocument/completion'] = complete,
  ['textDocument/hover'] = hover,
  ['textDocument/definition'] = definition,
  ['textDocument/codeAction'] = code_action,
  ['workspace/executeCommand'] = function(_, callback)
    callback(nil)
  end,
}

local function create_server(dispatchers)
  local closing = false
  local next_id = 0
  local srv = {}

  function srv.request(method, params, callback, notify_reply_callback)
    next_id = next_id + 1
    local id = next_id
    local handler = handlers[method]
    local function reply(result, err)
      callback(err, result)
      if notify_reply_callback then
        notify_reply_callback(id)
      end
    end
    if not handler then
      reply(nil, { code = -32601, message = 'Method not found: ' .. method })
      return true, id
    end
    local ok, err = pcall(handler, params or {}, reply)
    if not ok then
      reply(nil, { code = -32603, message = tostring(err) })
    end
    return true, id
  end

  function srv.notify(method)
    if method == 'exit' and not closing then
      closing = true
      dispatchers.on_exit(0, 0)
    end
    return true
  end

  function srv.is_closing()
    return closing
  end

  function srv.terminate()
    if not closing then
      closing = true
      dispatchers.on_exit(0, 0)
    end
  end

  return srv
end

-- blink.cmp closes its menu a moment after the accepted item is applied, a
-- show request before that is dropped: ask until the menu is open
local function show_blink(attempt)
  local blink = require('blink.cmp')
  local cursor = vim.api.nvim_win_get_cursor(0)
  if not blink.is_visible() then
    pcall(blink.show)
  end
  if attempt >= 5 then
    return
  end
  vim.defer_fn(function()
    local now = vim.api.nvim_win_get_cursor(0)
    if vim.api.nvim_get_mode().mode:sub(1, 1) == 'i' and now[1] == cursor[1] and now[2] == cursor[2]
        and not blink.is_visible() then
      show_blink(attempt + 1)
    end
  end, 60)
end

-- Show the completion again, after an item that leads to another list
local function retrigger()
  -- The built-in completion keeps the LSP item in v:completed_item. A plugin
  -- can be loaded without being the one that shows the list.
  local data = type(vim.v.completed_item) == 'table' and vim.v.completed_item.user_data
  local native = type(data) == 'table' and type(data.nvim) == 'table' and data.nvim.lsp ~= nil
  vim.schedule(function()
    if vim.api.nvim_get_mode().mode:sub(1, 1) ~= 'i' then
      return
    end
    if native and vim.lsp.completion and (vim.lsp.completion.get or vim.lsp.completion.trigger) then
      pcall(vim.lsp.completion.get or vim.lsp.completion.trigger)
    elseif package.loaded['blink.cmp'] then
      show_blink(1)
    elseif package.loaded['cmp'] then
      pcall(require('cmp').complete)
    elseif vim.lsp.completion and (vim.lsp.completion.get or vim.lsp.completion.trigger) then
      pcall(vim.lsp.completion.get or vim.lsp.completion.trigger)
    else
      vim.api.nvim_feedkeys(vim.api.nvim_replace_termcodes('<C-x><C-o>', true, false, true), 'n', false)
    end
  end)
end

M.retrigger = retrigger

function M.setup()
  vim.lsp.commands[RETRIGGER] = retrigger
  vim.lsp.commands[DISABLE_RULE] = function(command)
    require('adi-doctools.grammar').disable_rule(command.arguments[1])
  end
end

function M.attach(bufnr)
  return vim.lsp.start({
    name = M.name,
    cmd = create_server,
    root_dir = server.workspace(),
  }, { bufnr = bufnr })
end

return M
