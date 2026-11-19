-- Selection of the folders of a sparse build

local Selection = {}
Selection.__index = Selection

local function starts_with(str, prefix)
  return str:sub(1, #prefix) == prefix
end

function Selection.new(paths, sep)
  local self = setmetatable({ paths = {}, sep = sep or '/' }, Selection)
  for _, p in ipairs(paths or {}) do
    self.paths[p] = true
  end
  return self
end

function Selection:size()
  return vim.tbl_count(self.paths)
end

function Selection:to_array()
  local arr = vim.tbl_keys(self.paths)
  table.sort(arr)
  return arr
end

-- 'all', 'some' or 'none'
function Selection:state_of(relative_path)
  if self.paths[relative_path] then
    return 'all'
  end
  for p in pairs(self.paths) do
    if starts_with(relative_path, p .. self.sep) then
      return 'all'
    end
  end
  local prefix = relative_path .. self.sep
  for p in pairs(self.paths) do
    if starts_with(p, prefix) then
      return 'some'
    end
  end
  return 'none'
end

function Selection:remove_under(prefix)
  for _, p in ipairs(self:to_array()) do
    if starts_with(p, prefix) then
      self.paths[p] = nil
    end
  end
end

-- siblings(parent) returns the children of a folder, used to keep the
-- siblings when a child of a selected folder is removed
function Selection:toggle(relative_path, siblings)
  siblings = siblings or function()
    return {}
  end
  local prefix = relative_path .. self.sep

  if self:state_of(relative_path) ~= 'all' then
    self:remove_under(prefix)
    for _, p in ipairs(self:to_array()) do
      if starts_with(relative_path, p .. self.sep) then
        self.paths[p] = nil
      end
    end
    self.paths[relative_path] = true
    return
  end

  if self.paths[relative_path] then
    self.paths[relative_path] = nil
    self:remove_under(prefix)
    return
  end

  local ancestor
  for _, p in ipairs(self:to_array()) do
    if starts_with(relative_path, p .. self.sep) then
      ancestor = p
      break
    end
  end
  if not ancestor then
    return
  end
  self.paths[ancestor] = nil
  local current = ancestor
  local rest = relative_path:sub(#ancestor + #self.sep + 1)
  for _, part in ipairs(vim.split(rest, self.sep, { plain = true })) do
    local keep = current .. self.sep .. part
    for _, sibling in ipairs(siblings(current)) do
      if sibling ~= keep then
        self.paths[sibling] = true
      end
    end
    current = keep
  end
end

function Selection:prune(exists)
  local changed = false
  for _, p in ipairs(self:to_array()) do
    if not exists(p) then
      self.paths[p] = nil
      changed = true
    end
  end
  return changed
end

return Selection
