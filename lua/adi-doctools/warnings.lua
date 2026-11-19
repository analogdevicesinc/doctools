-- Parse the warnings of the Sphinx build output

local M = {}

local LEVELS = { WARNING = 'warning', ERROR = 'error', CRITICAL = 'error', SEVERE = 'error' }

function M.strip_ansi(str)
  str = str:gsub('\27%[[0-9;]*%a', '')
  str = str:gsub('%[9%dm', '')
  str = str:gsub('%[39;49;00m', '')
  return str
end

-- Find the first ': LEVEL: ' and split the line around it
local function split(line)
  local best
  for level in pairs(LEVELS) do
    local s, e = line:find(':%s*' .. level .. ':%s*')
    if s and s > 1 and (not best or s < best.s) then
      best = { s = s, e = e, level = level }
    end
  end
  if not best then
    return nil
  end
  return line:sub(1, best.s - 1), best.level, line:sub(best.e + 1)
end

function M.parse(line)
  local cleaned = vim.trim(M.strip_ansi(line))
  local location, level, message = split(cleaned)
  if not location or message == '' then
    return nil
  end

  local file, lnum = location:match('^(.-):docstring of [^:]+:(%d+)$')
  if not file then
    file, lnum = location:match('^(.+):(%d+)$')
  end
  if file and file ~= '' then
    return { file = file, line = tonumber(lnum), message = message, severity = LEVELS[level] }
  end
  return { file = location, line = 1, message = message, severity = LEVELS[level] }
end

return M
