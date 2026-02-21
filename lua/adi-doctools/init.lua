local M = {}

function M.setup(opts)
  require('adi-doctools.rst').setup(opts)
end

function M.setup_keymaps()
  require('adi-doctools.rst').setup_keymaps()
end

return M
