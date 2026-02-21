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

-- Role registry: define info (for <leader>rr) and action (for gx)
-- info: returns echo chunks {{text, hl}, ...} or string
-- action: function to execute, nil means "No action available"
M.roles = {
  test = {
    info = function(content)
      return {
        { 'The value of ', 'Normal' },
        { '`test`', 'Special' },
        { ' is ', 'Normal' },
        { '`' .. content .. '`', 'String' },
      }
    end,
  },
  adi = {
    info = function(content)
      local url = M.config.url_mappings.adi .. content
      return { { 'URL: ', 'Normal' }, { url, 'String' } }
    end,
    action = function(content)
      local url = M.config.url_mappings.adi.. content
      vim.notify('Opening: ' .. url, vim.log.levels.INFO)
      vim.fn.jobstart({ 'xdg-open', url }, { detach = true })
    end,
  },
  dokuwiki = {
    info = function(content)
      local url = M.config.url_mappings.dokuwiki .. content
      return { { 'URL: ', 'Normal' }, { url, 'String' } }
    end,
    action = function(content)
      local url = M.config.url_mappings.dokuwiki.. content
      vim.notify('Opening: ' .. url, vim.log.levels.INFO)
      vim.fn.jobstart({ 'xdg-open', url }, { detach = true })
    end,
  },
}

-- Resolve role: returns {info, action} or nil
-- Handles exact matches and patterns like git-<repo>
local function resolve_role(role, content)
  -- Exact match first
  if M.roles[role] then
    return M.roles[role], nil
  end

  -- Pattern: git-<repo> -> github.com/org/repo/path
  local repo = role:match('^git%-(.+)$')
  if repo then
    local url = 'https://github.com/' .. M.config.github_org .. '/' .. repo .. '/tree/main/' .. content
    return {
      info = function() return { { 'URL: ', 'Normal' }, { url, 'String' } } end,
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

  local role, content
  for child in node:iter_children() do
    local t = child:type()
    if t == 'role' then
      role = vim.treesitter.get_node_text(child, bufnr):match('^:?([^:]+):?$')
    elseif t:match('interpreted_text') then
      content = vim.treesitter.get_node_text(child, bufnr):match('^`([^`]+)`$')
    end
  end
  return role, content
end

-- Info handler (<leader>rr)
function M.info()
  local role, content = get_role_at_cursor()
  if not role or not content then
    vim.notify('No role at cursor', vim.log.levels.WARN)
    return
  end

  local def = resolve_role(role, content)
  if def and def.info then
    local result = def.info(content)
    if type(result) == 'string' then
      vim.notify(result, vim.log.levels.INFO)
    else
      vim.api.nvim_echo(result, true, {})
    end
  else
    vim.notify(':' .. role .. ': `' .. content .. '`', vim.log.levels.INFO)
  end
end

-- Action handler (gx)
function M.action()
  local role, content = get_role_at_cursor()
  if not role or not content then
    vim.cmd('normal! gx')
    return
  end

  local def = resolve_role(role, content)
  if def and def.action then
    def.action(content)
  elseif def then
    vim.notify('No action available', vim.log.levels.INFO)
  else
    vim.cmd('normal! gx')
  end
end

-- Setup keymaps
function M.setup_keymaps()
  vim.api.nvim_create_autocmd('FileType', {
    pattern = 'rst',
    callback = function()
      local opts = { buffer = true, silent = true }
      vim.keymap.set('n', '<leader>rr', M.info, vim.tbl_extend('force', opts, { desc = 'RST: Role info' }))
      vim.keymap.set('n', 'gx', M.action, vim.tbl_extend('force', opts, { desc = 'RST: Role action' }))
    end,
  })
end

return M
