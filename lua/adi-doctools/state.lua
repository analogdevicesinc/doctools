-- Settings kept per workspace: sparse selection, spell check mode and rules

local util = require('adi-doctools.util')

local M = {}

local cache = {}

local function file_of(workspace)
  local dir = util.join(vim.fn.stdpath('state'), 'adi-doctools')
  return util.join(dir, vim.fn.sha256(workspace):sub(1, 16) .. '.json')
end

local function load(workspace)
  if cache[workspace] then
    return cache[workspace]
  end
  local data = {}
  local content = util.read_file(file_of(workspace))
  if content then
    local ok, decoded = pcall(vim.json.decode, content, { luanil = { object = true, array = true } })
    if ok and type(decoded) == 'table' then
      data = decoded
    end
  end
  cache[workspace] = data
  return data
end

function M.get(workspace, key, fallback)
  if not workspace then
    return fallback
  end
  local value = load(workspace)[key]
  if value == nil then
    return fallback
  end
  return value
end

function M.set(workspace, key, value)
  if not workspace then
    return
  end
  local data = load(workspace)
  data[key] = value
  data.workspace = workspace
  util.write_file(file_of(workspace), vim.json.encode(data))
end

return M
