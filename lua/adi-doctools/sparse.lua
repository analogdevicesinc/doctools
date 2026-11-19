-- Sparse build: build only the selected folders, picked from a tree

local util = require('adi-doctools.util')
local state = require('adi-doctools.state')
local server = require('adi-doctools.server')
local Selection = require('adi-doctools.sparse_state')

local M = {}

local IGNORED_DIRS = { node_modules = true, venv = true, env = true }
local HELP = '" <CR> toggle  l/h open/close  c clear  R refresh  q quit'
local MARKS = { all = '[x]', some = '[-]', none = '[ ]' }

local selection
local contain_doc_cache = {}
local children_cache = {}
local update_timer = util.debounce()

local ui = { bufnr = nil, expanded = {}, rows = {} }
local namespace = vim.api.nvim_create_namespace('adi-doctools.sparse')

local function root()
  return server.workspace()
end

local function is_doc_dir(name, type_)
  return type_ == 'directory' and name:sub(1, 1) ~= '.' and name:sub(1, 1) ~= '_' and not IGNORED_DIRS[name]
end

local function entries(dir)
  local list = {}
  local ok, iter = pcall(vim.fs.dir, dir)
  if ok then
    for name, type_ in iter do
      if type_ == 'link' then
        local stat = util.stat(util.join(dir, name))
        type_ = stat and stat.type or type_
      end
      list[#list + 1] = { name = name, type = type_ }
    end
  end
  return list
end

local function contain_doc(dir)
  local cached = contain_doc_cache[dir]
  if cached ~= nil then
    return cached
  end
  contain_doc_cache[dir] = false
  local found = false
  local list = entries(dir)
  for _, entry in ipairs(list) do
    if entry.type == 'file' and entry.name:sub(-4) == '.rst' then
      found = true
      break
    end
  end
  if not found then
    for _, entry in ipairs(list) do
      if is_doc_dir(entry.name, entry.type) and contain_doc(util.join(dir, entry.name)) then
        found = true
        break
      end
    end
  end
  contain_doc_cache[dir] = found
  return found
end

-- Relative paths of the folders with documentation in a folder
local function children(relative)
  local cached = children_cache[relative]
  if cached then
    return cached
  end
  local dir = relative == '' and root() or util.join(root(), relative)
  local list = {}
  for _, entry in ipairs(entries(dir)) do
    if is_doc_dir(entry.name, entry.type) and contain_doc(util.join(dir, entry.name)) then
      list[#list + 1] = relative == '' and entry.name or (relative .. util.sep .. entry.name)
    end
  end
  table.sort(list)
  children_cache[relative] = list
  return list
end

local function get_selection()
  if not selection then
    selection = Selection.new(state.get(root(), 'sparse', {}), util.sep)
    if selection:prune(function(p)
      return util.exists(util.join(root(), p))
    end) then
      state.set(root(), 'sparse', selection:to_array())
    end
  end
  return selection
end

local function save()
  state.set(root(), 'sparse', get_selection():to_array())
  pcall(vim.api.nvim_exec_autocmds, 'User', { pattern = 'DoctoolsStatus', modeline = false })
end

local function notify_changed()
  update_timer.start(300, function()
    util.run(server.update_sparse)
  end)
end

-- The selected folders, nil for a full build
function M.paths()
  local s = get_selection()
  if s:size() == 0 then
    return nil
  end
  return s:to_array()
end

function M.count()
  return get_selection():size()
end

function M.state_of(relative)
  return get_selection():state_of(relative)
end

local render

function M.toggle(relative)
  relative = relative:gsub('[\\/]+$', '')
  get_selection():toggle(relative, children)
  save()
  render()
  notify_changed()
end

function M.clear()
  if get_selection():size() == 0 then
    return
  end
  selection = Selection.new({}, util.sep)
  save()
  render()
  notify_changed()
end

function M.refresh()
  contain_doc_cache = {}
  children_cache = {}
  render()
end

-- Tree buffer -----------------------------------------------------------------

local function valid()
  return ui.bufnr ~= nil and vim.api.nvim_buf_is_valid(ui.bufnr)
end

render = function()
  if not valid() then
    return
  end
  local lines = { HELP }
  local rows = {}

  local function add(relative, depth)
    local kids = children(relative)
    local open = ui.expanded[relative]
    local fold = #kids == 0 and ' ' or open and 'v' or '>'
    lines[#lines + 1] = ('%s%s %s %s/'):format(('  '):rep(depth), fold, MARKS[M.state_of(relative)], util.basename(relative))
    rows[#lines] = { path = relative, has_children = #kids > 0 }
    if open then
      for _, kid in ipairs(kids) do
        add(kid, depth + 1)
      end
    end
  end

  local top = children('')
  for _, relative in ipairs(top) do
    add(relative, 0)
  end
  if #top == 0 then
    lines[#lines + 1] = 'No folder with .rst files in ' .. root()
  end

  ui.rows = rows
  vim.bo[ui.bufnr].modifiable = true
  vim.api.nvim_buf_set_lines(ui.bufnr, 0, -1, false, lines)
  vim.bo[ui.bufnr].modifiable = false

  vim.api.nvim_buf_clear_namespace(ui.bufnr, namespace, 0, -1)
  vim.api.nvim_buf_set_extmark(ui.bufnr, namespace, 0, 0, { end_col = #HELP, hl_group = 'Comment' })
  for lnum, row in pairs(rows) do
    local mark = M.state_of(row.path)
    if mark ~= 'none' then
      local s = lines[lnum]:find('[', 1, true)
      vim.api.nvim_buf_set_extmark(ui.bufnr, namespace, lnum - 1, s - 1, {
        end_col = s + 2,
        hl_group = mark == 'all' and 'String' or 'WarningMsg',
      })
    end
  end
end

local function current_row()
  return ui.rows[vim.api.nvim_win_get_cursor(0)[1]]
end

local function set_expanded(value)
  local row = current_row()
  if not row then
    return
  end
  if value == false and not ui.expanded[row.path] then
    -- Go to the parent folder
    local parent = row.path:match('^(.*)[\\/][^\\/]+$')
    for lnum, other in pairs(ui.rows) do
      if other.path == parent then
        vim.api.nvim_win_set_cursor(0, { lnum, 0 })
      end
    end
    return
  end
  if row.has_children then
    ui.expanded[row.path] = value or nil
    render()
  end
end

function M.open()
  if valid() then
    local win = vim.fn.win_findbuf(ui.bufnr)[1]
    if win then
      vim.api.nvim_set_current_win(win)
      return
    end
  else
    ui.bufnr = vim.api.nvim_create_buf(false, true)
    local buf = ui.bufnr
    vim.api.nvim_buf_set_name(buf, 'doctools://sparse')
    vim.bo[buf].buftype = 'nofile'
    vim.bo[buf].bufhidden = 'hide'
    vim.bo[buf].swapfile = false
    vim.bo[buf].filetype = 'doctools-sparse'

    local function map(keys, fn)
      for _, key in ipairs(keys) do
        vim.keymap.set('n', key, fn, { buffer = buf, nowait = true, silent = true })
      end
    end
    map({ '<CR>', '<Space>', 'x' }, function()
      local row = current_row()
      if row then
        M.toggle(row.path)
      end
    end)
    map({ 'l', 'o', '<Right>' }, function()
      set_expanded(true)
    end)
    map({ 'h', '<Left>' }, function()
      set_expanded(false)
    end)
    map({ 'c' }, M.clear)
    map({ 'R' }, M.refresh)
    map({ 'q' }, '<Cmd>close<CR>')

    -- Show the selected folders
    for _, path in ipairs(get_selection():to_array()) do
      local parent = path:match('^(.*)[\\/][^\\/]+$')
      while parent do
        ui.expanded[parent] = true
        parent = parent:match('^(.*)[\\/][^\\/]+$')
      end
    end
  end

  vim.cmd('topleft 36vsplit')
  vim.api.nvim_win_set_buf(0, ui.bufnr)
  vim.wo[0].number = false
  vim.wo[0].relativenumber = false
  vim.wo[0].wrap = false
  vim.wo[0].winfixwidth = true
  vim.wo[0].cursorline = true
  render()
  pcall(vim.api.nvim_win_set_cursor, 0, { 2, 0 })
end

-- Only for the tests
function M._reset()
  selection = nil
  contain_doc_cache = {}
  children_cache = {}
end

return M
