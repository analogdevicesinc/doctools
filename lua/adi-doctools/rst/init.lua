-- Custom RST utilities for tree-sitter-rst
-- Generic interface for custom roles and directives

local config = require('adi-doctools.config')

local M = {}

local function open_url(url)
  vim.notify('Opening: ' .. url, vim.log.levels.INFO)
  if vim.ui.open then
    vim.ui.open(url)
  else
    vim.fn.jobstart({ 'xdg-open', url }, { detach = true })
  end
end

M.open_url = open_url

local function url_role(key)
  return {
    url = function(_, target)
      return config.options.url_mappings[key] .. target
    end,
  }
end

-- Role registry, resolved without the documentation server.
-- url: function(title, target) returning the URL, provides inspect and action
-- inspect: returns echo chunks {{text, hl}, ...} or string
-- action: function to execute, nil means "No action available"
M.roles = {
  test = {
    inspect = function(_, target)
      return {
        { 'The value of ', 'Normal' },
        { '`test`', 'Special' },
        { ' is ', 'Normal' },
        { '`' .. target .. '`', 'String' },
      }
    end,
  },
  adi = url_role('adi'),
  dokuwiki = url_role('dokuwiki'),
}

local function complete(def, title, target)
  if def.url then
    local url = def.url(title, target)
    return {
      url = url,
      inspect = def.inspect or function()
        return { { 'URL: ', 'Normal' }, { url, 'String' } }
      end,
      action = def.action or function()
        open_url(url)
      end,
    }
  end
  return def
end

-- Resolve role: returns {inspect, action, url} or nil
-- Handles exact matches and patterns like git-<repo>
function M.resolve_role(role, title, target)
  -- Exact match first
  if M.roles[role] then
    return complete(M.roles[role], title, target), nil
  end

  -- Pattern: git-<repo> -> github.com/org/repo/...
  -- `releases+` -> github.com/org/repo/releases
  -- `path/to/file.c` -> github.com/org/repo/tree/main/path/to/file.c
  -- `dev:path/to/file.c` -> github.com/org/repo/tree/dev/path/to/file.c
  local variant, repo = role:match('^(git)%-([^%s]+)$')
  if not variant then
    variant, repo = role:match('^(downgit)%-([^%s]+)$')
  end
  if repo then
    local org = config.options.github_org
    local pos = target:find('+', 1, true)
    local type_ = 'gui'

    if pos then
      local prefix = target:sub(1, pos - 1)
      if prefix == 'raw' then
        type_ = 'raw'
        target = target:sub(pos + 1)
      elseif prefix == 'gui' then
        type_ = 'gui'
        target = target:sub(pos + 1)
      elseif pos == #target then
        type_ = prefix
        target = ''
      end
    end

    if target == '/' then
      target = ''
    end

    local url

    if type_ == 'raw' or type_ == 'gui' then
      local branch, file = target:match('^([^:]+):(.*)$')
      if not branch then
        branch = 'main'
        file = target
      end

      local down_prefix = (variant == 'downgit') and 'https://analogdevicesinc.github.io/DownGit/#/home?url=' or ''

      if type_ == 'gui' then
        url = down_prefix .. 'https://github.com/' .. org .. '/' .. repo .. '/tree/' .. branch .. '/' .. file
      else
        url = down_prefix .. 'https://raw.githubusercontent.com/' .. org .. '/' .. repo .. '/' .. branch .. '/' .. file
      end
    else
      url = 'https://github.com/' .. org .. '/' .. repo .. '/' .. type_
    end

    return complete({
      url = function()
        return url
      end,
    }), repo
  end

  return nil, nil
end

-- Setup: merge the user roles
function M.setup(opts)
  if opts and opts.roles then
    M.roles = vim.tbl_extend('force', M.roles, opts.roles)
  end
end

local function parse_role(node, bufnr)
  local role, title, target
  for child in node:iter_children() do
    local t = child:type()
    if t == 'role' then
      role = vim.treesitter.get_node_text(child, bufnr):match('^:?(%S-):?$')
    elseif t:match('interpreted_text') then
      local content = vim.treesitter.get_node_text(child, bufnr):match('^`([^`]+)`$')
      if not content then
        return nil
      end
      title, target = content:match('^%s*(.-)%s*<%s*(.-)%s*>%s*$')
      if target and target ~= '' then
        if title == '' then
          title = nil
        end
      else
        title, target = nil, content
      end
    end
  end
  if not role or role == '' or not target then
    return nil
  end
  return role, title, target
end

-- Role at a 0-based position, also inside the directives with rst content.
-- Returns role, title, target
function M.role_at(bufnr, row, col)
  bufnr = bufnr == 0 and vim.api.nvim_get_current_buf() or bufnr
  local ok, parser = pcall(vim.treesitter.get_parser, bufnr, 'rst')
  if not ok or not parser then
    return nil
  end
  parser:parse(true)

  local node = parser:named_node_for_range({ row, col, row, col }, { ignore_injections = false })
  while node and node:type() ~= 'interpreted_text' do
    node = node:parent()
  end
  if not node then
    return nil
  end
  local parent = node:parent()
  if parent and parent:type() == 'interpreted_text' then
    node = parent
  end
  return parse_role(node, bufnr)
end

local function role_at_cursor()
  local row, col = unpack(vim.api.nvim_win_get_cursor(0))
  return M.role_at(vim.api.nvim_get_current_buf(), row - 1, col)
end

-- Inspect handler
function M.inspect()
  local role, title, target = role_at_cursor()
  if not role or not target then
    vim.notify('No role at cursor', vim.log.levels.WARN)
    return
  end

  local def = M.resolve_role(role, title, target)
  if def and def.inspect then
    local result = def.inspect(title, target)
    if type(result) == 'string' then
      vim.notify(result, vim.log.levels.INFO)
    else
      vim.api.nvim_echo(result, true, {})
    end
    return
  end

  require('adi-doctools.lsp').resolve_role({
    role = role, title = title, target = target, bufnr = vim.api.nvim_get_current_buf(),
  }, function(resolved)
    if resolved and resolved.error then
      vim.notify(resolved.error, vim.log.levels.WARN)
    elseif resolved and resolved.target then
      vim.api.nvim_echo({
        { ':' .. role .. ': ', 'Special' },
        { resolved.title and (tostring(resolved.title) .. ' ') or '', 'Normal' },
        { tostring(resolved.target), 'String' },
      }, true, {})
    else
      vim.notify(':' .. role .. ': `' .. target .. '`', vim.log.levels.INFO)
    end
  end)
end

-- Action handler
function M.action()
  local role, title, target = role_at_cursor()
  if not role or not target then
    vim.cmd('normal! gx')
    return
  end

  local def = M.resolve_role(role, title, target)
  if def and def.action then
    def.action(title, target)
    return
  end

  require('adi-doctools.lsp').resolve_role({
    role = role, title = title, target = target, bufnr = vim.api.nvim_get_current_buf(),
  }, function(resolved)
    local location = resolved and resolved.target and require('adi-doctools.lsp').target_location(resolved.target)
    if not resolved then
      vim.cmd('normal! gx')
    elseif not location then
      vim.notify(resolved.error or ('No action available for ' .. role), vim.log.levels.INFO)
    elseif location.file then
      vim.cmd.edit(vim.fn.fnameescape(location.file))
      if role == 'ref' then
        vim.fn.search([[^\s*\.\.\s\+_\V]] .. vim.fn.escape(target, '\\') .. ':', 'w')
      end
    else
      open_url(location.url)
    end
  end)
end

return M
