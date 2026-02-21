-- start treesitter for rst
vim.api.nvim_create_autocmd('FileType', {
  pattern = { 'rst' },
  callback = function()
    pcall(vim.treesitter.start)
  end,
})
