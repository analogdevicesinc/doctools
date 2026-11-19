-- Preview in the browser: follows the current buffer and locks the scroll
-- position with the window of the file, in both directions

local util = require('adi-doctools.util')
local log = require('adi-doctools.log')
local config = require('adi-doctools.config')
local server = require('adi-doctools.server')
local map = require('adi-doctools.scroll_map')
local Bridge = require('adi-doctools.bridge')

local M = {}

local EDITOR_ECHO_MS = 350
local PREVIEW_LEAD_MS = 500
local REBUILD_REDIRECT_MS = 5000

local bridge
local connected = false
local page_path
local source
local ignore_editor_until = 0
local preview_leads_until = 0
local last_sent_line
local last_received_line
local build_completed_at = 0

local function option(key)
  return config.options.preview[key]
end

function M.state()
  return {
    open = bridge ~= nil and bridge:client_count() > 0,
    connected = connected,
    page_path = page_path,
    source = source,
    last_sent_line = last_sent_line,
    last_received_line = last_received_line,
    url = bridge and bridge:url() or nil,
  }
end

local function is_built(path)
  local info = server.server_info()
  return info ~= nil and util.is_file(util.join(info.builddir, (path:gsub('^/+', '')), 'index.html'))
end

local function file_of(bufnr)
  if not vim.api.nvim_buf_is_valid(bufnr) or vim.bo[bufnr].buftype ~= '' then
    return nil
  end
  local name = vim.api.nvim_buf_get_name(bufnr)
  if name == '' then
    return nil
  end
  return util.realpath(name)
end

local function page_path_for(bufnr)
  local info = server.server_info()
  local file = file_of(bufnr)
  if not info or not file then
    return nil
  end
  local relative = util.relative(util.realpath(info.srcdir), file)
  local docname = relative and map.source_to_docname(relative)
  if not docname then
    return nil
  end
  local path = map.docname_to_page_path(docname)
  return is_built(path) and path or nil
end

local function source_for(path)
  local info = server.server_info()
  if not info then
    return nil
  end
  for _, docname in ipairs(map.page_path_to_docnames(path)) do
    for _, candidate in ipairs(map.docname_to_sources(docname)) do
      local file = util.join(info.srcdir, candidate)
      if util.is_file(file) then
        return util.realpath(file)
      end
    end
  end
  return nil
end

-- Window of the previewed file: the current one, then any of the tab page
local function window_for(file)
  if not file then
    return nil
  end
  local current = vim.api.nvim_get_current_win()
  if file_of(vim.api.nvim_win_get_buf(current)) == file then
    return current
  end
  for _, win in ipairs(vim.api.nvim_tabpage_list_wins(0)) do
    if file_of(vim.api.nvim_win_get_buf(win)) == file then
      return win
    end
  end
  return nil
end

local function post(msg)
  if bridge and connected then
    bridge:send(msg)
  end
end

local function editor_view(win)
  local top = vim.fn.line('w0', win)
  local bottom = vim.fn.line('w$', win)
  if top == 0 then
    return nil
  end
  return {
    top = top - 1,
    visible = math.max(bottom - top + 1, 1),
    lines = vim.api.nvim_buf_line_count(vim.api.nvim_win_get_buf(win)),
  }
end

local function send_editor_position(win)
  if not option('scroll_sync') then
    return
  end
  local view = editor_view(win)
  if not view then
    return
  end
  last_sent_line = map.editor_to_source_line(view)
  post({ type = 'scroll', line = last_sent_line, lines = view.lines })
end

local function sync_from_editor()
  local win = window_for(source)
  if win then
    send_editor_position(win)
  end
end

local function on_editor_scrolled()
  if not connected then
    return
  end
  local win = window_for(source)
  if not win then
    return
  end
  local now = util.now()
  if now < ignore_editor_until or now < preview_leads_until then
    return
  end
  send_editor_position(win)
end

local function scroll_window(win, top, view)
  vim.api.nvim_win_call(win, function()
    local scrolloff = vim.wo[win].scrolloff
    if scrolloff < 0 then
      scrolloff = vim.o.scrolloff
    end
    scrolloff = math.min(scrolloff, math.floor((view.visible - 1) / 2))
    local cursor = vim.api.nvim_win_get_cursor(win)
    local first = top + 1 + (top > 0 and scrolloff or 0)
    local last = math.max(top + view.visible - scrolloff, first)
    local lnum = math.min(math.max(cursor[1], first), last, view.lines)
    vim.fn.winrestview({ topline = top + 1, lnum = lnum })
  end)
end

local function on_preview_scrolled(line, path)
  if not option('scroll_sync') or path ~= page_path then
    return
  end
  local win = window_for(source)
  local view = win and editor_view(win)
  if not view then
    return
  end

  last_received_line = line
  local now = util.now()
  preview_leads_until = now + PREVIEW_LEAD_MS
  local top = map.source_line_to_editor_top(line, view)
  if top == view.top then
    return
  end
  ignore_editor_until = now + EDITOR_ECHO_MS
  scroll_window(win, top, view)
end

-- A full rebuild reloads the page at the index, go back to the previous page
local function restore_after_rebuild(previous, current)
  if not previous or previous == current or map.page_path_to_docnames(current)[1] ~= 'index' then
    return false
  end
  if util.now() - build_completed_at > REBUILD_REDIRECT_MS or not is_built(previous) then
    return false
  end
  if page_path_for(vim.api.nvim_get_current_buf()) == current then
    return false
  end
  build_completed_at = 0
  post({ type = 'navigate', path = previous })
  return true
end

local function on_message(msg)
  if type(msg.type) ~= 'string' then
    return
  end
  if msg.type == 'ready' then
    local previous = page_path
    connected = true
    page_path = tostring(msg.path)
    if restore_after_rebuild(previous, page_path) then
      return
    end
    source = source_for(page_path)
    preview_leads_until = 0
    sync_from_editor()
  elseif msg.type == 'scroll' and type(msg.line) == 'number' then
    on_preview_scrolled(msg.line, tostring(msg.path))
  end
end

local function initial_page_path()
  if not option('follow_editor') then
    return nil
  end
  return page_path_for(vim.api.nvim_get_current_buf())
end

local function load_message()
  local info = server.server_info()
  if not info then
    return { type = 'stopped' }
  end
  return { type = 'load', port = info.port, path = initial_page_path() or page_path or '/' }
end

local function reset()
  connected = false
  page_path = nil
  source = nil
end

local function ensure_bridge()
  if bridge then
    return bridge
  end
  local err
  bridge, err = Bridge.start({
    host = option('host'),
    port = option('port'),
    on_connect = function(send)
      send(load_message())
    end,
    on_message = on_message,
    on_clients_changed = function(count)
      if count == 0 then
        reset()
      end
    end,
  })
  if not bridge then
    util.notify('failed to start the preview page: ' .. tostring(err), vim.log.levels.ERROR)
    return nil
  end
  log.append('[preview] Page at ' .. bridge:url())
  return bridge
end

-- Open the preview in the browser, or show the current buffer when it is open
function M.open()
  if not server.server_info() then
    util.notify('start the server to open the preview, :Doctools start')
    return false
  end
  if not ensure_bridge() then
    return false
  end
  if bridge:client_count() > 0 then
    local path = initial_page_path()
    if path and path ~= page_path then
      post({ type = 'navigate', path = path })
    end
    util.notify('the preview is open at ' .. bridge:url())
    return true
  end
  local url = bridge:url()
  local ok, _, err = pcall(vim.ui.open, url)
  if not ok or err then
    util.notify('open ' .. url .. ' in the browser')
  end
  return true
end

function M.url()
  return bridge and bridge:url() or nil
end

function M.close()
  if bridge then
    bridge:stop()
    bridge = nil
  end
  reset()
end

local function on_buffer_entered(bufnr)
  if not connected then
    return
  end
  local file = file_of(bufnr)
  if not file then
    return
  end
  if file == source then
    send_editor_position(vim.api.nvim_get_current_win())
    return
  end
  if not option('follow_editor') then
    return
  end
  local path = page_path_for(bufnr)
  if path and path ~= page_path then
    post({ type = 'navigate', path = path })
  end
end

function M.setup(group)
  vim.api.nvim_create_autocmd('WinScrolled', {
    group = group,
    callback = on_editor_scrolled,
  })
  vim.api.nvim_create_autocmd({ 'BufEnter', 'WinEnter' }, {
    group = group,
    callback = function()
      on_buffer_entered(vim.api.nvim_get_current_buf())
    end,
  })

  server.on('build_completed', function()
    build_completed_at = util.now()
  end)
  server.on('server_started', function()
    if bridge and bridge:client_count() > 0 then
      reset()
      bridge:send(load_message())
    elseif option('auto_open') then
      M.open()
    end
  end)
  server.on('server_stopped', function()
    reset()
    if bridge then
      bridge:send({ type = 'stopped' })
    end
  end)
end

return M
