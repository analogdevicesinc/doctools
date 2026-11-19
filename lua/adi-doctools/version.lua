local M = {}

local function parse(version)
  local parts = {}
  for part in (version .. '.'):gmatch('([^.]*)%.') do
    parts[#parts + 1] = tonumber(part:match('^%d+')) or 0
  end
  return parts
end

function M.compare(v1, v2)
  local a, b = parse(v1), parse(v2)
  for i = 1, math.max(#a, #b) do
    local x, y = a[i] or 0, b[i] or 0
    if x > y then
      return 1
    elseif x < y then
      return -1
    end
  end
  return 0
end

return M
