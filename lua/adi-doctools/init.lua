local M = {}

function M.inspect()
  require('adi-doctools.rst').inspect()
end

function M.action()
  require('adi-doctools.rst').action()
end

function M.create_commands(opts)
  opts = opts or {}

  vim.api.nvim_create_user_command(
    'DInspect',
    M.inspect,
    {}
  )

  vim.api.nvim_create_user_command(
    'DAction',
    M.action,
    {}
  )
end

function M.setup(opts)
  M.create_commands(opts)
  require('adi-doctools.rst').setup(opts)
end

return M
