-- Find the workspace and the Python of the 'adoc' executable on PATH
--
-- M.initialize runs a process and must be called in a coroutine, see util.run.

local util = require('adi-doctools.util')
local log = require('adi-doctools.log')
local config = require('adi-doctools.config')
local version = require('adi-doctools.version')

local M = {}

M.MIN_DOCTOOLS_VERSION = '0.5.3'

local CONF_CANDIDATES = {
  'conf.py',
  'docs/conf.py',
  'doc/conf.py',
  'docs/source/conf.py',
  'doc/source/conf.py',
  'doc/sphinx/source/conf.py',
  'docs/sphinx/source/conf.py',
  'source/conf.py',
}

function M.find_conf_py(workspace)
  for _, candidate in ipairs(CONF_CANDIDATES) do
    local full = util.join(workspace, candidate)
    if util.is_file(full) then
      return full
    end
  end
  return nil
end

-- The folder that plays the role of the workspace: the configured root, the
-- current directory or the repository of the buffer, the first with a conf.py
function M.find_workspace(bufnr)
  local root = config.options.root
  if type(root) == 'function' then
    root = root(bufnr)
  end
  if root and root ~= '' then
    return util.realpath((vim.fn.fnamemodify(vim.fn.expand(root), ':p'):gsub('[\\/]$', '')))
  end

  local cwd = util.realpath(vim.fn.getcwd())
  if M.find_conf_py(cwd) then
    return cwd
  end

  local name = vim.api.nvim_buf_get_name(bufnr or 0)
  if name ~= '' and vim.bo[bufnr or 0].buftype == '' then
    local file = util.realpath(name)
    local git = vim.fs.find('.git', { path = util.dirname(file), upward = true })[1]
    if git and M.find_conf_py(util.dirname(git)) then
      return util.dirname(git)
    end
    for dir in vim.fs.parents(file) do
      if M.find_conf_py(dir) then
        return dir
      end
    end
  end
  return cwd
end

local function sibling_python(dir)
  for _, name in ipairs(util.is_windows and { 'python.exe' } or { 'python3', 'python' }) do
    local candidate = util.join(dir, name)
    if util.exists(candidate) then
      return candidate
    end
  end
  return nil
end

local function shebang_python(script)
  local fd = io.open(script, 'rb')
  if not fd then
    return nil
  end
  local head = fd:read(512) or ''
  fd:close()
  local python = head:match('^#!%s*(%S*python%S*)')
  if python and util.exists(python) then
    return python
  end
  return nil
end

-- The Python interpreter that runs the 'adoc' of PATH: adoc, python
function M.find_adoc()
  local adoc = vim.fn.exepath('adoc')
  if adoc == '' then
    return nil, nil
  end
  return adoc, sibling_python(util.dirname(adoc)) or shebang_python(adoc)
end

local function doctools_version(python)
  local result = util.system({ python, '-c', 'import adi_doctools; print(adi_doctools.__version__)' },
    { text = true, timeout = 15000 })
  local v = result.code == 0 and vim.trim(result.stdout or '') or ''
  return v ~= '' and v or nil
end

-- (async) Returns { python, workspace, version }, or nil and the problem
function M.initialize(workspace)
  log.append('Initializing doctools for workspace: ' .. workspace)
  local conf_py = M.find_conf_py(workspace)
  log.append(conf_py and ('Found conf.py: ' .. conf_py) or 'No conf.py found in common locations')

  local adoc, python = M.find_adoc()
  local problem
  if not adoc then
    problem = 'adoc is not on PATH, install adi-doctools or activate its environment'
  elseif not python then
    problem = ('could not find the Python of %s'):format(adoc)
  else
    local v = doctools_version(python)
    if not v then
      problem = ('%s does not provide adi-doctools'):format(python)
    elseif version.compare(v, M.MIN_DOCTOOLS_VERSION) < 0 then
      problem = ('adi-doctools %s is older than the required %s'):format(v, M.MIN_DOCTOOLS_VERSION)
    else
      log.append(('Using %s (adi_doctools %s)'):format(python, v))
      return { python = python, workspace = workspace, version = v }
    end
  end

  log.append(problem)
  return nil, problem
end

return M
