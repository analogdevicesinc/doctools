-- Line based JSON requests matched by id, with notifications

local uv = vim.uv or vim.loop

local Client = {}
Client.__index = Client

-- write(line), on_notification(msg), on_text(line), trace(direction, line)
function Client.new(write, on_notification, on_text, trace)
  return setmetatable({
    write = write,
    on_notification = on_notification,
    on_text = on_text or function() end,
    trace = trace or function() end,
    next_id = 1,
    pending = {},
    closed = nil,
  }, Client)
end

function Client:pending_count()
  return vim.tbl_count(self.pending)
end

function Client:settle(id)
  local entry = self.pending[id]
  if not entry then
    return nil
  end
  if entry.timer then
    entry.timer:stop()
    entry.timer:close()
  end
  self.pending[id] = nil
  return entry
end

-- callback(err, response)
function Client:request(msg, callback, timeout_ms)
  if self.closed then
    callback(self.closed)
    return
  end
  timeout_ms = timeout_ms or 20000

  local id = self.next_id
  self.next_id = id + 1
  local entry = { callback = callback }
  if timeout_ms > 0 then
    entry.timer = uv.new_timer()
    entry.timer:start(timeout_ms, 0, vim.schedule_wrap(function()
      if self:settle(id) then
        callback(('Request timed out after %d ms'):format(timeout_ms))
      end
    end))
  end
  self.pending[id] = entry

  local line = vim.json.encode(vim.tbl_extend('force', { id = id }, msg))
  self.trace('send', line)
  local ok, err = pcall(self.write, line .. '\n')
  if not ok then
    self:settle(id)
    callback(tostring(err))
  end
end

function Client:handle_line(line)
  if vim.trim(line) == '' then
    return
  end

  local ok, parsed = pcall(vim.json.decode, line, { luanil = { object = true, array = true } })
  if not ok or type(parsed) ~= 'table' or vim.islist(parsed) and next(parsed) ~= nil then
    self.on_text(line)
    return
  end

  if type(parsed.method) == 'string' then
    self.on_notification(parsed)
    return
  end

  self.trace('recv', line)
  local entry = parsed.id ~= nil and self:settle(parsed.id)
  if entry then
    entry.callback(nil, parsed)
  end
end

function Client:close(reason)
  self.closed = reason or 'closed'
  for _, id in ipairs(vim.tbl_keys(self.pending)) do
    local entry = self:settle(id)
    if entry then
      entry.callback(self.closed)
    end
  end
end

return Client
