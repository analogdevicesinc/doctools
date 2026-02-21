-- Custom RST utilities for tree-sitter-rst
-- Generic interface for custom roles and directives

local M = {}

-- Default configuration
M.config = {
  url_mappings = {
    adi = 'https://analog.com/',
    dokuwiki = 'https://wiki.analog.com/',
  },
  github_org = 'analogdevicesinc',  -- default org for :git-<repo>:
}

-- Role registry: define inspect and action
-- inspect: returns echo chunks {{text, hl}, ...} or string
-- action: function to execute, nil means "No action available"
M.roles = {
  test = {
    inspect = function(title, target)
      return {
        { 'The value of ', 'Normal' },
        { '`test`', 'Special' },
        { ' is ', 'Normal' },
        { '`' .. target .. '`', 'String' },
      }
    end,
  },
  adi = {
    inspect = function(title, target)
      local url = M.config.url_mappings.adi .. target
      return { { 'URL: ', 'Normal' }, { url, 'String' } }
    end,
    action = function(title, target)
      local url = M.config.url_mappings.adi.. target
      vim.notify('Opening: ' .. url, vim.log.levels.INFO)
      vim.fn.jobstart({ 'xdg-open', url }, { detach = true })
    end,
  },
  dokuwiki = {
    inspect = function(title, target)
      local url = M.config.url_mappings.dokuwiki .. target
      return { { 'URL: ', 'Normal' }, { url, 'String' } }
    end,
    action = function(title, target)
      local url = M.config.url_mappings.dokuwiki..target
      vim.notify('Opening: ' .. url, vim.log.levels.INFO)
      vim.fn.jobstart({ 'xdg-open', url }, { detach = true })
    end,
  },
}

-- Resolve role: returns {inspect, action} or nil
-- Handles exact matches and patterns like git-<repo>
local function resolve_role(role, title, target)
  -- Exact match first
  if M.roles[role] then
    return M.roles[role], nil
  end

  -- Pattern: git-<repo> -> github.com/org/repo/...
  -- `releases+` -> github.com/org/repo/releases
  -- `path/to/file.c` -> github.com/org/repo/tree/main/path/to/file.c
  -- `dev:path/to/file.c` -> github.com/org/repo/tree/dev/path/to/file.c
  local repo = role:match('^git%-(.+)$')
  if repo then
    local pathname
    if target:sub(-1) == '+' then
      pathname = '/' .. target:sub(1, -2)
    else
      local branch, path = target:match('^([^:]+):(.+)$')
      if not branch then
        branch = 'main'
        path = target
      end
      pathname = '/tree/' .. branch .. '/' .. path
    end
    local url = 'https://github.com/' .. M.config.github_org .. '/' .. repo .. pathname
    return {
      inspect = function() return { { 'URL: ', 'Normal' }, { url, 'String' } } end,
      action = function()
        vim.notify('Opening: ' .. url, vim.log.levels.INFO)
        vim.fn.jobstart({ 'xdg-open', url }, { detach = true })
      end,
    }, repo
  end

  return nil, nil
end

-- Setup: merge user config and roles
function M.setup(opts)
  if opts then
    if opts.url_mappings then
      M.config.url_mappings = vim.tbl_extend('force', M.config.url_mappings, opts.url_mappings)
    end
    if opts.roles then
      M.roles = vim.tbl_extend('force', M.roles, opts.roles)
    end
  end
end

-- Get role node at cursor
local function get_role_at_cursor()
  local bufnr = vim.api.nvim_get_current_buf()
  local row, col = unpack(vim.api.nvim_win_get_cursor(0))
  row = row - 1

  local ok, parser = pcall(vim.treesitter.get_parser, bufnr, 'rst')
  if not ok or not parser then return nil end

  local tree = parser:parse()[1]
  if not tree then return nil end

  local node = tree:root():named_descendant_for_range(row, col, row, col)
  while node and node:type() ~= 'interpreted_text' do
    node = node:parent()
  end
  if not node then return nil end

  local role, content, title, target
  for child in node:iter_children() do
    local t = child:type()
    if t == 'role' then
      role = vim.treesitter.get_node_text(child, bufnr):match('^:?([^:]+):?$')
    elseif t:match('interpreted_text') then
      content = vim.treesitter.get_node_text(child, bufnr):match('^`([^`]+)`$')
      title, target = content:match('^%s*(.-)%s*<%s*(.-)%s*>%s*$')
      if target then
        if title == '' then title = nil end
      else
        target = content
      end
    end
  end
  return role, title, target
end

-- Inspect handler
function M.inspect()
  local role, title, target = get_role_at_cursor()
  if not role or not target then
    vim.notify('No role at cursor', vim.log.levels.WARN)
    return
  end

  local def = resolve_role(role, title, target)
  if def and def.inspect then
    local result = def.inspect (title, target)
    if type(result) == 'string' then
      vim.notify(result, vim.log.levels.INFO)
    else
      vim.api.nvim_echo(result, true, {})
    end
  else
    vim.notify(':' .. role .. ': `' .. target .. '`', vim.log.levels.INFO)
  end
end

-- Action handler
function M.action()
  local role, title, target = get_role_at_cursor()
  if not role or not target then
    vim.cmd('normal! gx')
    return
  end

  local def = resolve_role(role, title, target)
  if def and def.action then
    def.action(title, target)
  elseif def then
    vim.notify('No action available for ' ..  role, vim.log.levels.INFO)
  else
    vim.cmd('normal! gx')
  end
end

return M
