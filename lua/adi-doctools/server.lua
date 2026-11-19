-- The Python backend (python -m adi_doctools.lsp), the documentation server
-- it runs, and the diagnostics of the Sphinx build
--
-- The functions marked (async) must be called in a coroutine, see util.run.

local util = require('adi-doctools.util')
local log = require('adi-doctools.log')
local config = require('adi-doctools.config')
local python = require('adi-doctools.python')
local warnings = require('adi-doctools.warnings')
local Rpc = require('adi-doctools.rpc')

local M = {}

local uv = util.uv

local DEFAULT_PORT = 8080
local GRACEFUL_EXIT_MS = 3000
local LSP_MESSAGE_TYPE = { 'error', 'warning', 'info', 'log' }

M.namespace = vim.api.nvim_create_namespace('adi-doctools.sphinx')

local proc            -- vim.SystemObj of the backend
local rpc             -- Rpc client of the backend
local init            -- { python, workspace, version }
local starting        -- callbacks waiting for the backend to start
local stopping = false
local workspace
local server_info     -- { url, port, srcdir, builddir }
local build_status = 'off' -- 'off', 'building' or 'ready'
local problem         -- why the backend cannot start, e.g. adoc is not on PATH
local server_waiters = {}
local listeners = {}
local exit_waiters = {}

local file_diagnostics = {}
local build_diagnostics = {}
local build_mode = 'subprocess'
local build_started_at = 0
local last_published_at = 0

-- Events: status(build_status), server_started(info), server_stopped(),
-- backend_started(), backend_stopped(), build_completed()
function M.on(event, fn)
  listeners[event] = listeners[event] or {}
  table.insert(listeners[event], fn)
end

local function emit(event, ...)
  for _, fn in ipairs(listeners[event] or {}) do
    local ok, err = pcall(fn, ...)
    if not ok then
      log.append(('[error] %s listener: %s'):format(event, err))
    end
  end
  pcall(vim.api.nvim_exec_autocmds, 'User', { pattern = 'DoctoolsStatus', modeline = false })
end

function M.build_status()
  return build_status
end

function M.server_info()
  return server_info
end

function M.is_running()
  return rpc ~= nil
end

function M.python_path()
  return init and init.python
end

-- Why the backend cannot start, nil when it can
function M.problem()
  return problem
end

function M.workspace()
  if not workspace then
    workspace = python.find_workspace()
  end
  return workspace
end

-- Only for the tests, and before the backend starts
function M.set_workspace(path)
  workspace = path
end

local function now_ms()
  local sec, usec = uv.gettimeofday()
  return sec * 1000 + usec / 1000
end

local function set_build_status(status)
  if build_status ~= status then
    build_status = status
    emit('status', status)
  end
end

local function settle_server_waiters(started)
  local waiters = server_waiters
  server_waiters = {}
  for _, waiter in ipairs(waiters) do
    waiter(started)
  end
end

local function server_stopped()
  local was_running = server_info ~= nil or build_status ~= 'off'
  server_info = nil
  set_build_status('off')
  settle_server_waiters(false)
  if was_running then
    emit('server_stopped')
  end
end

-- Diagnostics ---------------------------------------------------------------

local function buffer_of(path)
  local bufnr = vim.fn.bufnr(path)
  if bufnr ~= -1 and vim.api.nvim_buf_is_loaded(bufnr) then
    return bufnr
  end
  for _, buf in ipairs(vim.api.nvim_list_bufs()) do
    if vim.api.nvim_buf_is_loaded(buf) and vim.bo[buf].buftype == '' then
      local name = vim.api.nvim_buf_get_name(buf)
      if name ~= '' and util.realpath(name) == path then
        return buf
      end
    end
  end
  return nil
end

local function show(path, bufnr)
  bufnr = bufnr or buffer_of(path)
  if not bufnr then
    return
  end
  local entries = file_diagnostics[path]
  if not entries then
    vim.diagnostic.reset(M.namespace, bufnr)
    return
  end
  local last = vim.api.nvim_buf_line_count(bufnr) - 1
  local diagnostics = {}
  for _, entry in ipairs(entries) do
    local lnum = math.min(entry.lnum, last)
    local text = vim.api.nvim_buf_get_lines(bufnr, lnum, lnum + 1, false)[1] or ''
    diagnostics[#diagnostics + 1] = {
      lnum = lnum,
      col = #text:match('^%s*'),
      end_lnum = lnum,
      end_col = #text,
      message = entry.message,
      severity = entry.severity,
      source = 'Sphinx',
    }
  end
  vim.diagnostic.set(M.namespace, bufnr, diagnostics)
end

local function clear_diagnostics()
  file_diagnostics = {}
  build_diagnostics = {}
  vim.diagnostic.reset(M.namespace)
  util.clear_realpath_cache()
end

local function add_diagnostic(warning)
  local file = warning.file
  if not util.is_absolute(file) and server_info then
    file = util.join(server_info.srcdir, file)
  end
  file = util.realpath(file)
  build_diagnostics[file] = build_diagnostics[file] or {}
  table.insert(build_diagnostics[file], {
    lnum = math.max(warning.line - 1, 0),
    message = warning.message,
    severity = warning.severity == 'error' and vim.diagnostic.severity.ERROR or vim.diagnostic.severity.WARN,
  })
end

local function publish_diagnostics(mode, started_at)
  if mode == 'incremental' then
    -- Only the modified files were read again, keep the warnings of the others
    for path in pairs(vim.deepcopy(file_diagnostics)) do
      if not build_diagnostics[path] then
        local stat = uv.fs_stat(path)
        local modified = not stat or (stat.mtime.sec * 1000 + stat.mtime.nsec / 1e6) > last_published_at
        if modified then
          file_diagnostics[path] = nil
          show(path)
        end
      end
    end
  end
  for path, entries in pairs(build_diagnostics) do
    file_diagnostics[path] = entries
    show(path)
  end
  build_diagnostics = {}
  last_published_at = started_at
end

-- All the warnings of the build, also of the files that are not open
function M.diagnostics()
  local items = {}
  for path, entries in pairs(file_diagnostics) do
    for _, entry in ipairs(entries) do
      items[#items + 1] = {
        filename = path,
        lnum = entry.lnum + 1,
        col = 1,
        text = entry.message,
        type = entry.severity == vim.diagnostic.severity.ERROR and 'E' or 'W',
      }
    end
  end
  table.sort(items, function(a, b)
    if a.filename ~= b.filename then
      return a.filename < b.filename
    end
    return a.lnum < b.lnum
  end)
  return items
end

function M.show_buffer_diagnostics(bufnr)
  local name = vim.api.nvim_buf_get_name(bufnr)
  if name == '' or vim.bo[bufnr].buftype ~= '' or next(file_diagnostics) == nil then
    return
  end
  local path = util.realpath(name)
  if file_diagnostics[path] then
    show(path, bufnr)
  end
end

-- Notifications of the backend ----------------------------------------------

local function handle_notification(parsed)
  local method, params = parsed.method, parsed.params or {}

  if method == 'window/logMessage' then
    local level = LSP_MESSAGE_TYPE[params.type] or 'log'
    log.append(('[%s] %s'):format(level, warnings.strip_ansi(tostring(params.message))))
  elseif method == 'build/started' then
    log.append(('-- Building -- (%s)'):format(params.mode))
    build_mode = params.mode == 'incremental' and 'incremental' or 'subprocess'
    build_started_at = now_ms()
    build_diagnostics = {}
    if build_mode == 'subprocess' then
      clear_diagnostics()
    end
    set_build_status('building')
  elseif method == 'build/output' then
    local line = tostring(params.line)
    log.append(line)
    local warning = warnings.parse(line)
    if warning then
      add_diagnostic(warning)
    end
  elseif method == 'build/completed' then
    log.append('---- Done ----')
    publish_diagnostics(build_mode, build_started_at)
    if server_info then
      set_build_status('ready')
    end
    emit('build_completed')
  elseif method == 'server/started' then
    server_info = {
      url = params.url,
      port = params.port,
      srcdir = params.srcdir,
      builddir = params.builddir,
    }
    log.append('[server] Running on ' .. tostring(params.url))
    set_build_status('ready')
    settle_server_waiters(true)
    emit('server_started', server_info)
  elseif method == 'server/stopped' then
    log.append(params.failed and '[server] Failed' or '[server] Stopped')
    server_stopped()
  else
    log.append(('[notification] %s: %s'):format(method, vim.json.encode(params)))
  end
end

-- Requests ------------------------------------------------------------------

-- callback(err, response)
function M.request_cb(msg, callback, timeout_ms)
  if not rpc then
    callback('The Python backend is not running')
    return
  end
  rpc:request(msg, callback, timeout_ms)
end

-- (async) Returns response, err
function M.request(msg, timeout_ms)
  local err, response = util.await(function(cb)
    M.request_cb(msg, cb, timeout_ms)
  end)
  return response, err
end

-- Backend process -----------------------------------------------------------

local function line_reader(on_line)
  local pending = ''
  return function(_, data)
    if not data then
      if pending ~= '' then
        local rest = pending
        pending = ''
        vim.schedule(function()
          on_line(rest)
        end)
      end
      return
    end
    pending = pending .. data
    local lines = {}
    while true do
      local nl = pending:find('\n', 1, true)
      if not nl then
        break
      end
      lines[#lines + 1] = pending:sub(1, nl - 1):gsub('\r$', '')
      pending = pending:sub(nl + 1)
    end
    if #lines > 0 then
      vim.schedule(function()
        for _, line in ipairs(lines) do
          on_line(line)
        end
      end)
    end
  end
end

local start_backend

-- callback(started)
start_backend = function(result, callback)
  log.append('Starting the backend with ' .. result.python)

  local missing_module
  local client
  local own

  local function on_stderr(line)
    if line == '' or line:find("'adi_doctools.lsp' is a package and cannot be directly executed", 1, true) then
      return
    end
    local module_name = line:find('ModuleNotFoundError', 1, true) and line:match("No module named '([^']+)'")
    if module_name and not vim.startswith(module_name, 'adi_doctools.lsp.') then
      missing_module = module_name
    end
    local ok, entry = pcall(vim.json.decode, line)
    if ok and type(entry) == 'table' then
      log.append(('[%s] %s'):format(entry.level or 'LOG', tostring(entry.message)))
    else
      log.append(warnings.strip_ansi(line))
    end
  end

  local function on_exit(result_)
    local signal = result_.signal ~= 0 and result_.signal or nil
    log.append(signal and ('Backend exited with signal ' .. signal) or ('Backend exited with code ' .. result_.code))
    local intentional = stopping or proc ~= own
    client:close('The Python backend exited')
    if proc == own then
      proc = nil
      rpc = nil
      server_stopped()
      emit('backend_stopped')
    end
    local waiter = exit_waiters[own]
    exit_waiters[own] = nil
    if waiter then
      waiter()
    end
    if missing_module then
      util.notify(("the Python module '%s' is missing, install it in the environment of adoc")
        :format(missing_module), vim.log.levels.ERROR)
    elseif not intentional then
      util.notify('the Python backend exited unexpectedly, see :Doctools output', vim.log.levels.WARN)
    end
  end

  local ok, obj = pcall(vim.system, { result.python, '-m', 'adi_doctools.lsp' }, {
    cwd = result.workspace,
    env = { PYTHONUNBUFFERED = '1' },
    stdin = true,
    text = true,
    stdout = line_reader(function(line)
      client:handle_line(line)
    end),
    stderr = line_reader(on_stderr),
  }, vim.schedule_wrap(on_exit))

  if not ok then
    log.append(tostring(obj))
    util.notify('failed to start ' .. result.python, vim.log.levels.ERROR)
    callback(false)
    return
  end

  own = obj
  client = Rpc.new(function(line)
    obj:write(line)
  end, handle_notification, function(line)
    log.append(warnings.strip_ansi(line))
  end)

  proc = obj
  rpc = client
  log.append('Backend started')
  emit('backend_started')
  callback(true)
end

-- (async) Returns true when the backend is running
function M.start_process()
  if rpc then
    return true
  end
  if starting then
    return util.await(function(cb)
      table.insert(starting, cb)
    end)
  end

  starting = {}
  local started = false
  local result
  result, problem = python.initialize(M.workspace())
  if result then
    init = result
    started = util.await(function(cb)
      start_backend(result, cb)
    end)
  else
    util.notify(problem, vim.log.levels.WARN)
  end
  emit('problem', problem)

  local waiters = starting
  starting = nil
  for _, waiter in ipairs(waiters) do
    waiter(started)
  end
  return started
end

-- (async)
function M.stop_process()
  local own = proc
  if not own then
    return
  end

  proc = nil
  if rpc then
    rpc:close('The Python backend stopped')
  end
  rpc = nil
  server_stopped()
  emit('backend_stopped')

  util.await(function(cb)
    local timer = uv.new_timer()
    exit_waiters[own] = function()
      timer:stop()
      timer:close()
      cb()
    end
    timer:start(GRACEFUL_EXIT_MS, 0, function()
      pcall(own.kill, own, 'sigterm')
    end)
    if not pcall(own.write, own, nil) then
      pcall(own.kill, own, 'sigterm')
    end
  end)
end

-- Stop the backend without waiting for long, when Neovim exits
function M.shutdown()
  local own = proc
  if not own then
    return
  end
  stopping = true
  proc = nil
  rpc = nil
  pcall(own.write, own, nil)
  pcall(own.wait, own, 1500)
end

-- Documentation server ------------------------------------------------------

local sparse_paths_getter

function M.set_sparse_paths_getter(getter)
  sparse_paths_getter = getter
end

local function sparse_paths()
  return sparse_paths_getter and sparse_paths_getter() or nil
end

local function is_port_free(port)
  local tcp = uv.new_tcp()
  local ok = pcall(function()
    assert(tcp:bind('0.0.0.0', port))
    assert(tcp:listen(1, function() end))
  end)
  tcp:close()
  return ok
end

local function pick_port()
  local configured = tonumber(config.options.port) or DEFAULT_PORT
  local first = (configured > 0 and configured < 65536 and configured % 1 == 0) and configured or DEFAULT_PORT
  for port = first, math.min(first + 19, 65535) do
    if is_port_free(port) then
      if port ~= first then
        log.append(('[server] Port %d is in use, using %d'):format(first, port))
      end
      return port
    end
  end
  return first
end

local function server_failure(message)
  util.notify(message .. ', see :Doctools output', vim.log.levels.ERROR)
end

-- (async) Returns true when the server is running
function M.start()
  if not rpc and not M.start_process() then
    return false
  end
  if server_info then
    return true
  end
  if #server_waiters > 0 then
    return util.await(function(cb)
      table.insert(server_waiters, cb)
    end)
  end

  local sparse = sparse_paths()
  local started, on_started
  table.insert(server_waiters, function(value)
    started = value
    if on_started then
      on_started(value)
    end
  end)

  local result, err = M.request({ server = 'start', sparse = sparse or vim.NIL, port = pick_port() })
  if err then
    settle_server_waiters(false)
    server_failure('failed to start the server: ' .. tostring(err))
    return false
  end
  if result['return'] == 'already_running' then
    settle_server_waiters(server_info ~= nil)
    return true
  end
  if result['return'] ~= 'success' then
    settle_server_waiters(false)
    server_failure('failed to start the documentation server')
    return false
  end

  if started == nil then
    set_build_status('building')
    util.notify(sparse and 'building the documentation (sparse)...' or 'building the documentation...')
    started = util.await(function(cb)
      on_started = cb
    end)
  end

  if started then
    util.notify('the documentation is served at ' .. server_info.url:gsub('%?.*$', ''))
  elseif not stopping then
    server_failure('the documentation server failed to start')
  end
  return started
end

-- (async)
function M.stop()
  if not rpc then
    return
  end
  stopping = true
  local _, err = M.request({ server = 'stop' }, 30000)
  if err then
    log.append('[server] Stop failed: ' .. tostring(err))
  end
  stopping = false
  server_stopped()
end

-- (async)
function M.restart()
  M.stop()
  return M.start()
end

-- (async)
function M.update_sparse()
  if not rpc or build_status == 'off' then
    return
  end
  local _, err = M.request({ server = 'update_sparse', sparse = sparse_paths() or vim.NIL })
  if err then
    log.append('[server] Sparse update failed: ' .. tostring(err))
  end
end

return M
