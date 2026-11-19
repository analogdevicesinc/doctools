-- Build and backend log, shown with :Doctools output

local M = {}

local MAX_LINES = 5000
local BUF_NAME = 'doctools://output'

local lines = {}
local bufnr

local function valid()
  return bufnr ~= nil and vim.api.nvim_buf_is_valid(bufnr)
end

local function follow()
  local last = vim.api.nvim_buf_line_count(bufnr)
  for _, win in ipairs(vim.fn.win_findbuf(bufnr)) do
    if win ~= vim.api.nvim_get_current_win() then
      pcall(vim.api.nvim_win_set_cursor, win, { last, 0 })
    end
  end
end

local function write(new)
  if not valid() then
    return
  end
  vim.bo[bufnr].modifiable = true
  local empty = vim.api.nvim_buf_line_count(bufnr) == 1 and vim.api.nvim_buf_get_lines(bufnr, 0, 1, false)[1] == ''
  vim.api.nvim_buf_set_lines(bufnr, empty and 0 or -1, -1, false, new)
  local extra = vim.api.nvim_buf_line_count(bufnr) - MAX_LINES
  if extra > 0 then
    vim.api.nvim_buf_set_lines(bufnr, 0, extra, false, {})
  end
  vim.bo[bufnr].modifiable = false
  follow()
end

function M.append(text)
  local new = vim.split(tostring(text), '\n', { plain = true })
  for _, line in ipairs(new) do
    lines[#lines + 1] = line
  end
  while #lines > MAX_LINES do
    table.remove(lines, 1)
  end
  if vim.in_fast_event() then
    vim.schedule(function()
      write(new)
    end)
  else
    write(new)
  end
end

function M.lines()
  return lines
end

function M.show()
  if not valid() then
    bufnr = vim.api.nvim_create_buf(false, true)
    vim.api.nvim_buf_set_name(bufnr, BUF_NAME)
    vim.bo[bufnr].buftype = 'nofile'
    vim.bo[bufnr].bufhidden = 'hide'
    vim.bo[bufnr].swapfile = false
    vim.bo[bufnr].filetype = 'doctools-output'
    vim.api.nvim_buf_set_lines(bufnr, 0, -1, false, lines)
    vim.bo[bufnr].modifiable = false
    vim.keymap.set('n', 'q', '<Cmd>close<CR>', { buffer = bufnr, nowait = true })
  end
  local win = vim.fn.win_findbuf(bufnr)[1]
  if win then
    vim.api.nvim_set_current_win(win)
  else
    vim.cmd('botright 12split')
    vim.api.nvim_win_set_buf(0, bufnr)
    vim.wo[0].wrap = false
    vim.wo[0].number = false
    vim.wo[0].relativenumber = false
  end
  vim.api.nvim_win_set_cursor(0, { vim.api.nvim_buf_line_count(bufnr), 0 })
end

return M
