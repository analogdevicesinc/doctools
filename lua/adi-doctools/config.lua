local M = {}

M.defaults = {
  -- Folder of the repository, the parent of 'docs'. Detected when nil.
  root = nil,
  -- Port of the documentation server, the next free port is used when busy
  port = 8080,
  -- Start the Python backend when a reStructuredText buffer is opened
  auto_start = true,
  -- Attach the in-process language server (completion, hover, code actions)
  lsp = true,
  preview = {
    -- Lock the scroll position of the browser and the window of the file
    scroll_sync = true,
    -- Show the page of the current buffer in the browser
    follow_editor = true,
    -- Open the browser when the server starts
    auto_open = false,
    -- Address and port of the preview page, 0 picks a free port
    host = '127.0.0.1',
    port = 0,
  },
  grammar = {
    -- 'local', 'cloud' or 'off'
    mode = 'local',
    language = 'en-US',
    disabled_rules = {},
    api_username = '',
    api_key = '',
  },
  -- Roles resolved without the server, see lua/adi-doctools/rst/init.lua
  url_mappings = {
    adi = 'https://analog.com/',
    dokuwiki = 'https://wiki.analog.com/',
  },
  github_org = 'analogdevicesinc',
  roles = {},
}

M.options = vim.deepcopy(M.defaults)

function M.setup(opts)
  M.options = vim.tbl_deep_extend('force', vim.deepcopy(M.defaults), opts or {})
  return M.options
end

return M
