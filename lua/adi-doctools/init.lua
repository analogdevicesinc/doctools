local M = {}

local util = require('adi-doctools.util')
local config = require('adi-doctools.config')

local did_setup = false
local backend_requested = false

local function lazy(name)
  return setmetatable({}, {
    __index = function(_, key)
      return require('adi-doctools.' .. name)[key]
    end,
  })
end

local server = lazy('server')
local grammar = lazy('grammar')
local sparse = lazy('sparse')
local preview = lazy('preview')
local edit = lazy('edit')
local log = lazy('log')

function M.inspect()
  require('adi-doctools.rst').inspect()
end

function M.action()
  require('adi-doctools.rst').action()
end

-- Server ----------------------------------------------------------------------

function M.start()
  util.run(server.start)
end

function M.stop()
  util.run(server.stop)
end

function M.restart()
  util.run(server.restart)
end

-- Open the preview in the browser, starts the server when needed
function M.open_preview()
  util.run(function()
    if server.server_info() or server.start() then
      preview.open()
    end
  end)
end

function M.show_output()
  log.show()
end

-- The warnings of the build in the quickfix list
function M.show_diagnostics()
  local items = server.diagnostics()
  vim.fn.setqflist({}, ' ', { title = 'Doctools: Sphinx warnings', items = items })
  if #items == 0 then
    util.notify('no warnings from the build')
  else
    vim.cmd('botright copen')
  end
end

-- Spell check -------------------------------------------------------------------

function M.check_grammar()
  local bufnr = vim.api.nvim_get_current_buf()
  if vim.bo[bufnr].filetype ~= 'rst' then
    util.notify('open a reStructuredText file first', vim.log.levels.WARN)
    return
  end
  grammar.schedule(bufnr, 0)
end

-- mode: 'local', 'cloud' or 'off', asks when nil
function M.grammar_mode(mode)
  if mode and mode ~= '' then
    grammar.set_mode(mode)
  else
    grammar.pick_mode()
  end
end

-- Sparse build --------------------------------------------------------------------

function M.sparse(path)
  if path and path ~= '' then
    sparse.toggle(path)
  else
    sparse.open()
  end
end

-- Format ------------------------------------------------------------------------

-- kind: bold, italic, code, subscript, superscript, heading, bullet, numbered,
-- quote, link, reference, document, image, table, codeblock, admonition, rule
function M.format(kind, arg, opts)
  edit.run(kind, arg, opts)
end

-- Status ------------------------------------------------------------------------

-- Text for the status line
function M.status()
  if not did_setup then
    return ''
  end
  local count = sparse.count()
  local suffix = count > 0 and (' (sparse: %d)'):format(count) or ''
  local build = server.build_status()
  local docs
  if server.problem() and build == 'off' then
    docs = 'Docs: adoc not found'
  elseif build == 'building' then
    docs = 'Docs: Building...' .. suffix
  elseif build == 'ready' then
    docs = 'Docs: Up-to-date' .. suffix
  else
    docs = 'Docs: Stopped'
  end

  local g = grammar.status()
  local names = { ['local'] = 'Local', cloud = 'Cloud', off = 'Off' }
  local spell = 'Spell: ' .. names[g.mode] .. (g.busy and '...' or g.problem and ' (!)' or '')
  return docs .. ' | ' .. spell
end

function M.show_status()
  local lines = { M.status() }
  local info = server.server_info()
  lines[#lines + 1] = 'Workspace: ' .. server.workspace()
  lines[#lines + 1] = 'Python: ' .. (server.python_path() or server.problem() or 'not started')
  if info then
    lines[#lines + 1] = 'Server: ' .. info.url
  end
  if preview.url() then
    lines[#lines + 1] = 'Preview: ' .. preview.url()
  end
  local paths = sparse.paths()
  if paths then
    lines[#lines + 1] = 'Sparse: ' .. table.concat(paths, ', ')
  end
  local g = grammar.status()
  if g.problem then
    lines[#lines + 1] = 'Spell check: ' .. g.problem
  end
  vim.notify(table.concat(lines, '\n'), vim.log.levels.INFO)
end

-- Commands ----------------------------------------------------------------------

local subcommands = {
  start = { run = M.start, desc = 'Start the documentation server' },
  stop = { run = M.stop, desc = 'Stop the documentation server' },
  restart = { run = M.restart, desc = 'Restart the documentation server' },
  preview = { run = M.open_preview, desc = 'Open the preview in the browser' },
  output = { run = M.show_output, desc = 'Show the build log' },
  diagnostics = { run = M.show_diagnostics, desc = 'Show the build warnings in the quickfix list' },
  status = { run = M.show_status, desc = 'Show the status' },
  check = { run = M.check_grammar, desc = 'Check the grammar of the buffer' },
  grammar = {
    run = function(args)
      M.grammar_mode(args[1])
    end,
    complete = function()
      return { 'local', 'cloud', 'off' }
    end,
    desc = 'Select the spell check mode',
  },
  sparse = {
    run = function(args)
      M.sparse(args[1])
    end,
    complete = function(lead)
      local root = server.workspace()
      local found = vim.fn.getcompletion(root .. '/' .. lead, 'dir')
      return vim.tbl_map(function(dir)
        return (dir:sub(#root + 2):gsub('[\\/]$', ''))
      end, found)
    end,
    desc = 'Select the folders of the sparse build',
  },
  format = {
    run = function(args, opts)
      M.format(args[1], args[2] and table.concat(args, ' ', 2) or nil, { visual = opts.range > 0 })
    end,
    complete = function()
      return edit.kinds()
    end,
    desc = 'Format the selection',
  },
}

local function complete_command(lead, line)
  local words = vim.split(line, '%s+')
  if #words <= 2 then
    local names = vim.tbl_keys(subcommands)
    table.sort(names)
    return vim.tbl_filter(function(name)
      return vim.startswith(name, lead)
    end, names)
  end
  local sub = subcommands[words[2]]
  if sub and sub.complete and #words == 3 then
    return vim.tbl_filter(function(name)
      return vim.startswith(name, lead)
    end, sub.complete(lead))
  end
  return {}
end

function M.create_commands()
  vim.api.nvim_create_user_command('DInspect', M.inspect, {})
  vim.api.nvim_create_user_command('DAction', M.action, {})

  vim.api.nvim_create_user_command('Doctools', function(opts)
    local name = opts.fargs[1]
    local sub = subcommands[name or '']
    if not sub then
      local names = vim.tbl_keys(subcommands)
      table.sort(names)
      local lines = {}
      for _, key in ipairs(names) do
        lines[#lines + 1] = ('  %-13s %s'):format(key, subcommands[key].desc)
      end
      vim.notify((name and ("Doctools: unknown command '%s'\n"):format(name) or 'Doctools commands:\n')
        .. table.concat(lines, '\n'), name and vim.log.levels.ERROR or vim.log.levels.INFO)
      return
    end
    sub.run(vim.list_slice(opts.fargs, 2), opts)
  end, { nargs = '*', range = true, complete = complete_command, desc = 'Doctools' })

  for _, kind in ipairs({ 'bold', 'italic', 'code', 'subscript', 'superscript', 'heading', 'bullet', 'numbered',
    'quote', 'link', 'reference', 'document', 'image', 'table', 'codeblock', 'admonition', 'rule' }) do
    vim.keymap.set({ 'n', 'x', 'i' }, ('<Plug>(doctools-%s)'):format(kind), function()
      M.format(kind)
    end, { desc = 'Doctools: format ' .. kind })
  end
end

-- Buffers -----------------------------------------------------------------------

local function start_backend()
  if backend_requested or not config.options.auto_start then
    return
  end
  backend_requested = true
  util.run(function()
    server.start_process()
  end)
end

local function on_rst_buffer(bufnr)
  if vim.bo[bufnr].buftype ~= '' then
    return
  end
  if config.options.lsp then
    require('adi-doctools.lsp').attach(bufnr)
  end
  start_backend()
  grammar.schedule(bufnr, 0)
  server.show_buffer_diagnostics(bufnr)
end

local function create_autocmds()
  local group = vim.api.nvim_create_augroup('adi-doctools', { clear = true })
  local function is_rst(bufnr)
    return vim.bo[bufnr].filetype == 'rst'
  end

  vim.api.nvim_create_autocmd('FileType', {
    group = group,
    pattern = 'rst',
    callback = function(args)
      on_rst_buffer(args.buf)
    end,
  })
  vim.api.nvim_create_autocmd({ 'TextChanged', 'TextChangedI', 'TextChangedP' }, {
    group = group,
    callback = function(args)
      if is_rst(args.buf) then
        grammar.schedule(args.buf)
      end
    end,
  })
  vim.api.nvim_create_autocmd('BufWritePost', {
    group = group,
    callback = function(args)
      if args.file:match('config/vocabularies/[^/]+/%a+%.txt$') then
        grammar.invalidate_vocabulary()
        grammar.check_visible()
      elseif is_rst(args.buf) then
        grammar.schedule(args.buf, 0)
      end
    end,
  })
  vim.api.nvim_create_autocmd('BufWinEnter', {
    group = group,
    callback = function(args)
      if is_rst(args.buf) then
        if not grammar.has_results(args.buf) then
          grammar.schedule(args.buf, 0)
        end
        server.show_buffer_diagnostics(args.buf)
      end
    end,
  })
  vim.api.nvim_create_autocmd({ 'BufDelete', 'BufWipeout' }, {
    group = group,
    callback = function(args)
      grammar.forget(args.buf)
    end,
  })
  vim.api.nvim_create_autocmd('VimLeavePre', {
    group = group,
    callback = function()
      preview.close()
      server.shutdown()
    end,
  })

  preview.setup(group)
end

function M.setup(opts)
  config.setup(opts)
  require('adi-doctools.rst').setup(config.options)
  M.create_commands()

  if did_setup then
    return
  end
  did_setup = true

  require('adi-doctools.lsp').setup()
  server.set_sparse_paths_getter(sparse.paths)
  server.on('backend_started', function()
    grammar.on_backend_started()
  end)
  create_autocmds()
  vim.api.nvim_create_autocmd('User', {
    group = 'adi-doctools',
    pattern = 'DoctoolsStatus',
    callback = vim.schedule_wrap(function()
      vim.cmd('redrawstatus')
    end),
  })

  -- Buffers opened before the setup, e.g. when the plugin is lazy loaded
  for _, bufnr in ipairs(vim.api.nvim_list_bufs()) do
    if vim.api.nvim_buf_is_loaded(bufnr) and vim.bo[bufnr].filetype == 'rst' then
      on_rst_buffer(bufnr)
    end
  end
end

return M
