-- Preview page: a small HTTP server that hosts the documentation in a frame
-- and relays the messages between it and Neovim.
--
--   GET  /<token>/         the page
--   GET  /<token>/events   server-sent events, Neovim to the page
--   POST /<token>/msg      JSON, the page to Neovim

local util = require('adi-doctools.util')

local M = {}

local uv = util.uv
local KEEPALIVE_MS = 20000
local MAX_REQUEST = 64 * 1024

local PAGE = [[<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Doctools Preview</title>
  <style>
    html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
    iframe { border: none; width: 100%; height: 100%; }
    #status { display: none; font: 16px sans-serif; padding: 2em; }
    body.stopped iframe { display: none; }
    body.stopped #status { display: block; }
  </style>
</head>
<body class="stopped">
  <div id="status">Doctools: waiting for the documentation server...</div>
  <iframe id="viewer" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"></iframe>
  <script>
    const viewer = document.getElementById('viewer')
    const status = document.getElementById('status')
    const base = location.pathname.replace(/\/$/, '')
    let origin

    const send = adoc => {
      if (origin)
        viewer.contentWindow.postMessage({ adoc }, origin)
    }
    const stopped = text => {
      origin = undefined
      status.textContent = text
      document.body.classList.add('stopped')
      viewer.removeAttribute('src')
    }
    const load = (port, path) => {
      origin = `${location.protocol}//${location.hostname}:${port}`
      document.body.classList.remove('stopped')
      viewer.src = origin + (path || '/')
    }

    viewer.addEventListener('load', () => send({ type: 'host' }))
    window.addEventListener('message', ev => {
      if (ev.source !== viewer.contentWindow || ev.origin !== origin || !ev.data || !ev.data.adoc)
        return
      fetch(`${base}/msg`, { method: 'POST', body: JSON.stringify(ev.data.adoc) }).catch(() => {})
    })

    const events = new EventSource(`${base}/events`)
    events.onmessage = ev => {
      const msg = JSON.parse(ev.data)
      if (msg.type === 'load')
        load(msg.port, msg.path)
      else if (msg.type === 'stopped')
        stopped('Doctools: the documentation server is stopped.')
      else
        send(msg)
    }
    events.onerror = () => {
      if (events.readyState === EventSource.CLOSED)
        stopped('Doctools: the editor is gone, this page can be closed.')
    }
  </script>
</body>
</html>
]]

local Bridge = {}
Bridge.__index = Bridge

local function respond(socket, status, headers, body)
  body = body or ''
  local lines = { 'HTTP/1.1 ' .. status }
  for name, value in pairs(headers or {}) do
    lines[#lines + 1] = name .. ': ' .. value
  end
  lines[#lines + 1] = 'Content-Length: ' .. #body
  lines[#lines + 1] = 'Connection: close'
  socket:write(table.concat(lines, '\r\n') .. '\r\n\r\n' .. body, function()
    if not socket:is_closing() then
      socket:close()
    end
  end)
end

function Bridge:remove(socket)
  for i, client in ipairs(self.clients) do
    if client == socket then
      table.remove(self.clients, i)
      vim.schedule(function()
        self.on_clients_changed(#self.clients)
      end)
      break
    end
  end
  if not socket:is_closing() then
    socket:close()
  end
end

function Bridge:handle(socket, method, path, body)
  local prefix = '/' .. self.token
  path = path:match('^[^?#]*')

  if method == 'GET' and (path == prefix or path == prefix .. '/') then
    respond(socket, '200 OK', { ['Content-Type'] = 'text/html; charset=utf-8', ['Cache-Control'] = 'no-store' }, PAGE)
  elseif method == 'GET' and path == prefix .. '/events' then
    socket:write('HTTP/1.1 200 OK\r\nContent-Type: text/event-stream\r\nCache-Control: no-store\r\n'
      .. 'Connection: keep-alive\r\n\r\n: connected\n\n')
    table.insert(self.clients, socket)
    vim.schedule(function()
      self.on_connect(function(msg)
        self:send_to(socket, msg)
      end)
      self.on_clients_changed(#self.clients)
    end)
    return true
  elseif method == 'POST' and path == prefix .. '/msg' then
    local ok, msg = pcall(vim.json.decode, body, { luanil = { object = true, array = true } })
    respond(socket, '204 No Content')
    if ok and type(msg) == 'table' then
      vim.schedule(function()
        self.on_message(msg)
      end)
    end
  else
    respond(socket, '404 Not Found', { ['Content-Type'] = 'text/plain' }, 'Not found')
  end
  return false
end

function Bridge:accept()
  local socket = uv.new_tcp()
  self.server:accept(socket)
  local buffer = ''
  local streaming = false

  socket:read_start(function(err, chunk)
    if err or not chunk then
      self:remove(socket)
      return
    end
    if streaming then
      return
    end
    buffer = buffer .. chunk
    if #buffer > MAX_REQUEST then
      self:remove(socket)
      return
    end
    local head_end = buffer:find('\r\n\r\n', 1, true)
    if not head_end then
      return
    end
    local head = buffer:sub(1, head_end - 1)
    local method, path = head:match('^(%u+) (%S+) HTTP/%d')
    if not method then
      self:remove(socket)
      return
    end
    local length = tonumber(head:lower():match('\r\ncontent%-length:%s*(%d+)')) or 0
    local body = buffer:sub(head_end + 4)
    if #body < length then
      return
    end
    streaming = self:handle(socket, method, path, body:sub(1, length))
    buffer = ''
  end)
end

function Bridge:send_to(socket, msg)
  if socket:is_closing() then
    return
  end
  socket:write('data: ' .. vim.json.encode(msg) .. '\n\n', function(err)
    if err then
      self:remove(socket)
    end
  end)
end

-- Send a message to every open page
function Bridge:send(msg)
  for _, socket in ipairs(vim.list_slice(self.clients)) do
    self:send_to(socket, msg)
  end
end

function Bridge:client_count()
  return #self.clients
end

function Bridge:url()
  local host = self.host == '0.0.0.0' and '127.0.0.1' or self.host
  return ('http://%s:%d/%s/'):format(host, self.port, self.token)
end

function Bridge:stop()
  self.keepalive:stop()
  self.keepalive:close()
  for _, socket in ipairs(vim.list_slice(self.clients)) do
    if not socket:is_closing() then
      socket:close()
    end
  end
  self.clients = {}
  if not self.server:is_closing() then
    self.server:close()
  end
end

-- opts: host, port (0 picks a free one),
--   on_connect(send): a page connected, send(msg) reaches only that page
--   on_message(msg): a message of the documentation frame
--   on_clients_changed(count)
-- Returns the bridge, or nil and an error
function M.start(opts)
  local self = setmetatable({
    host = opts.host or '127.0.0.1',
    clients = {},
    on_connect = opts.on_connect or function() end,
    on_message = opts.on_message or function() end,
    on_clients_changed = opts.on_clients_changed or function() end,
  }, Bridge)

  local token = {}
  local random = uv.random(12)
  for i = 1, #random do
    token[i] = ('%02x'):format(random:byte(i))
  end
  self.token = table.concat(token)

  self.server = uv.new_tcp()
  local ok, err = pcall(function()
    assert(self.server:bind(self.host, opts.port or 0))
    assert(self.server:listen(16, function(listen_err)
      if not listen_err then
        self:accept()
      end
    end))
  end)
  if not ok then
    self.server:close()
    return nil, tostring(err)
  end
  self.port = self.server:getsockname().port

  self.keepalive = uv.new_timer()
  self.keepalive:start(KEEPALIVE_MS, KEEPALIVE_MS, function()
    for _, socket in ipairs(vim.list_slice(self.clients)) do
      if not socket:is_closing() then
        socket:write(': keepalive\n\n', function(write_err)
          if write_err then
            self:remove(socket)
          end
        end)
      end
    end
  end)

  return self
end

return M
