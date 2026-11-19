-- Small helpers: coroutine based async, timers and paths

local M = {}

local uv = vim.uv or vim.loop

M.uv = uv
M.is_windows = uv.os_uname().sysname:find('Windows') ~= nil
M.sep = M.is_windows and '\\' or '/'

local function report(co, err)
  vim.schedule(function()
    vim.notify('Doctools: ' .. debug.traceback(co, tostring(err)), vim.log.levels.ERROR)
  end)
end

-- Run fn as a coroutine, on_done is called with its return values
function M.run(fn, on_done)
  local co
  co = coroutine.create(function()
    local result = vim.F.pack_len(fn())
    if on_done then
      on_done(vim.F.unpack_len(result))
    end
  end)
  local ok, err = coroutine.resume(co)
  if not ok then
    report(co, err)
  end
end

-- Suspend the running coroutine until the callback passed to starter is called
function M.await(starter)
  local co = coroutine.running()
  assert(co, 'await called outside of a coroutine')
  local done, waiting, result = false, false, nil
  starter(function(...)
    if done then
      return
    end
    done = true
    result = vim.F.pack_len(...)
    if waiting then
      local ok, err = coroutine.resume(co)
      if not ok then
        report(co, err)
      end
    end
  end)
  if not done then
    waiting = true
    coroutine.yield()
  end
  return vim.F.unpack_len(result)
end

function M.system(cmd, opts)
  return M.await(function(cb)
    local ok, err = pcall(vim.system, cmd, opts or { text = true }, vim.schedule_wrap(cb))
    if not ok then
      cb({ code = -1, signal = 0, stdout = '', stderr = tostring(err) })
    end
  end)
end

function M.select(items, opts)
  return M.await(function(cb)
    vim.ui.select(items, opts or {}, vim.schedule_wrap(cb))
  end)
end

function M.input(opts)
  return M.await(function(cb)
    vim.ui.input(opts or {}, vim.schedule_wrap(cb))
  end)
end

function M.sleep(ms)
  M.await(function(cb)
    vim.defer_fn(cb, ms)
  end)
end

function M.now()
  return uv.now()
end

-- Restartable one-shot timer
function M.debounce()
  local timer
  local self = {}
  function self.stop()
    if timer then
      timer:stop()
      timer:close()
      timer = nil
    end
  end
  function self.start(ms, fn)
    self.stop()
    timer = uv.new_timer()
    local own = timer
    timer:start(ms, 0, vim.schedule_wrap(function()
      if timer ~= own then
        return
      end
      self.stop()
      fn()
    end))
  end
  function self.active()
    return timer ~= nil
  end
  return self
end

function M.join(...)
  local parts = { ... }
  local out = parts[1]
  for i = 2, #parts do
    if out == '' or out:sub(-1) == '/' or out:sub(-1) == M.sep then
      out = out .. parts[i]
    else
      out = out .. M.sep .. parts[i]
    end
  end
  return out
end

function M.dirname(path)
  return vim.fn.fnamemodify(path, ':h')
end

function M.basename(path)
  return vim.fn.fnamemodify(path, ':t')
end

function M.is_absolute(path)
  return path:sub(1, 1) == '/' or path:match('^%a:[\\/]') ~= nil or path:sub(1, 2) == '\\\\'
end

function M.stat(path)
  return uv.fs_stat(path)
end

function M.is_file(path)
  local stat = uv.fs_stat(path)
  return stat ~= nil and stat.type == 'file'
end

function M.is_dir(path)
  local stat = uv.fs_stat(path)
  return stat ~= nil and stat.type == 'directory'
end

function M.exists(path)
  return uv.fs_stat(path) ~= nil
end

local realpath_cache = {}

function M.realpath(path)
  local cached = realpath_cache[path]
  if cached then
    return cached
  end
  local resolved = uv.fs_realpath(path)
  if not resolved then
    return path
  end
  realpath_cache[path] = resolved
  return resolved
end

function M.clear_realpath_cache()
  realpath_cache = {}
end

-- Path of 'path' relative to 'base', nil when it is outside
function M.relative(base, path)
  if path == base then
    return ''
  end
  local prefix = base
  if prefix:sub(-1) ~= '/' and prefix:sub(-1) ~= M.sep then
    prefix = prefix .. M.sep
  end
  if path:sub(1, #prefix) == prefix then
    return path:sub(#prefix + 1)
  end
  return nil
end

function M.read_file(path)
  local fd = io.open(path, 'rb')
  if not fd then
    return nil
  end
  local content = fd:read('*a')
  fd:close()
  return content
end

function M.write_file(path, content)
  vim.fn.mkdir(M.dirname(path), 'p')
  local fd = io.open(path, 'wb')
  if not fd then
    return false
  end
  fd:write(content)
  fd:close()
  return true
end

function M.split_lines(text)
  return vim.split(text, '\n', { plain = true })
end

function M.notify(message, level)
  vim.schedule(function()
    vim.notify('Doctools: ' .. message, level or vim.log.levels.INFO)
  end)
end

return M
