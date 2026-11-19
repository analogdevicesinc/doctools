-- Markup edits for reStructuredText and MyST Markdown
--
-- Every function takes the source text and a selection, as 0-based byte
-- offsets { start, end } with an exclusive end, and returns
-- { range, text, selection }: replace 'range' with 'text', then select
-- 'selection'.

local M = {}

M.HEADING_CHARS = { '=', '-', '~', '^', '"' }
M.ADMONITIONS = { 'note', 'tip', 'important', 'warning', 'caution', 'attention' }
M.CODE_LANGUAGES = { 'bash', 'python', 'c', 'cpp', 'yaml', 'json', 'rst', 'text' }

local INLINE = {
  rst = {
    bold = { '**', '**' },
    italic = { '*', '*' },
    code = { '``', '``' },
    subscript = { ':sub:`', '`' },
    superscript = { ':sup:`', '`' },
  },
  myst = {
    bold = { '**', '**' },
    italic = { '*', '*' },
    code = { '`', '`' },
    subscript = { '{sub}`', '`' },
    superscript = { '{sup}`', '`' },
  },
}

local INDENT = '   '
local UNDERLINE_CHARS = '=-~^"\'`#*+_.:'

local function span(s, e)
  return { start = s, ['end'] = e }
end

local function order(sel)
  if sel.start <= sel['end'] then
    return span(sel.start, sel['end'])
  end
  return span(sel['end'], sel.start)
end

-- 0-based, exclusive end
local function slice(source, s, e)
  if s < 0 then
    s = 0
  end
  return source:sub(s + 1, e)
end

local function char_at(source, i)
  if i < 0 then
    return ''
  end
  return source:sub(i + 1, i + 1)
end

local function is_word(c)
  return c ~= '' and (c:match("[%w_'%-]") ~= nil or c:byte() >= 0x80)
end

local function is_space(c)
  return c ~= '' and c:match('%s') ~= nil
end

local function filled(line)
  return line:match('%S') ~= nil
end

local function word_at(source, offset)
  local s, e = offset, offset
  while s > 0 and is_word(char_at(source, s - 1)) do
    s = s - 1
  end
  while e < #source and is_word(char_at(source, e)) do
    e = e + 1
  end
  return span(s, e)
end

local function trim_span(source, sp)
  local s, e = sp.start, sp['end']
  while s < e and is_space(char_at(source, s)) do
    s = s + 1
  end
  while e > s and is_space(char_at(source, e - 1)) do
    e = e - 1
  end
  return span(s, e)
end

local function line_block(source, sp)
  local s = sp.start
  while s > 0 and char_at(source, s - 1) ~= '\n' do
    s = s - 1
  end
  local last = sp['end']
  if sp['end'] > sp.start and char_at(source, sp['end'] - 1) == '\n' then
    last = sp['end'] - 1
  end
  local nl = source:find('\n', last + 1, true)
  return span(s, nl and nl - 1 or #source)
end

local function line_before(source, offset)
  if offset == 0 then
    return nil
  end
  return line_block(source, span(offset - 1, offset - 1))
end

local function line_after(source, offset)
  if offset >= #source then
    return nil
  end
  return line_block(source, span(offset + 1, offset + 1))
end

local function text_of(source, sp)
  return sp and slice(source, sp.start, sp['end']) or ''
end

local function is_underline(line)
  local c = line:sub(1, 1)
  if c == '' or not UNDERLINE_CHARS:find(c, 1, true) then
    return false
  end
  local run = 1
  while line:sub(run + 1, run + 1) == c do
    run = run + 1
  end
  return run >= 3 and line:sub(run + 1):match('^%s*$') ~= nil
end

-- Remove the list marker, nil when the line has none
local function strip_bullet(line)
  local indent, rest = line:match('^(%s*)[*+%-]%s+(.*)$')
  if indent then
    return indent .. rest
  end
end

local function strip_numbered(line)
  local indent, rest = line:match('^(%s*)#%.%s+(.*)$')
  if not indent then
    indent, rest = line:match('^(%s*)%d+[.)]%s+(.*)$')
  end
  if indent then
    return indent .. rest
  end
end

local function is_doubled(source, sp, open, close)
  if open ~= '*' and open ~= '`' then
    return false
  end
  return char_at(source, sp.start - #open - 1) == open or char_at(source, sp['end'] + #close) == close
end

local function result(range, text, s, e)
  return { range = range, text = text, selection = span(s, e) }
end

-- kind: bold, italic, code, subscript, superscript
function M.toggle_inline(source, selection, syntax, kind)
  local open, close = unpack(INLINE[syntax][kind])
  local sp = order(selection)
  if sp.start == sp['end'] then
    sp = word_at(source, sp.start)
  end
  sp = trim_span(source, sp)
  local text = text_of(source, sp)

  if #text == 0 then
    local cursor = sp.start + #open
    return result(sp, open .. close, cursor, cursor)
  end

  if #text > #open + #close and text:sub(1, #open) == open and text:sub(-#close) == close
      and not (open == '*' and text:sub(1, 2) == '**') then
    local inner = text:sub(#open + 1, #text - #close)
    return result(sp, inner, sp.start, sp.start + #inner)
  end

  if sp.start >= #open and slice(source, sp.start - #open, sp.start) == open
      and slice(source, sp['end'], sp['end'] + #close) == close
      and not is_doubled(source, sp, open, close) then
    local range = span(sp.start - #open, sp['end'] + #close)
    return result(range, text, range.start, range.start + #text)
  end

  local s = sp.start + #open
  return result(sp, open .. text .. close, s, s + #text)
end

-- level: 0 removes the heading
function M.set_heading(source, selection, syntax, level)
  local cursor = order(selection).start
  local line = line_block(source, span(cursor, cursor))

  if syntax == 'myst' then
    local title = vim.trim((text_of(source, line):gsub('^%s*#+%s*', '')))
    if title == '' then
      title = 'Heading'
    end
    local prefix = level > 0 and (('#'):rep(level) .. ' ') or ''
    return result(line, prefix .. title, line.start + #prefix, line.start + #prefix + #title)
  end

  local previous = line_before(source, line.start)
  if is_underline(text_of(source, line)) and previous and filled(text_of(source, previous))
      and not is_underline(text_of(source, previous)) then
    line = previous
  end

  local range = span(line.start, line['end'])
  local under = line_after(source, line['end'])
  if under and is_underline(text_of(source, under)) then
    range['end'] = under['end']
    local over = line_before(source, line.start)
    if over and vim.trim(text_of(source, over)) == vim.trim(text_of(source, under)) then
      range.start = over.start
    end
  end

  local title = vim.trim(text_of(source, line))
  if title == '' then
    title = 'Heading'
  end
  local text = title
  if level > 0 then
    local char = M.HEADING_CHARS[math.min(level, #M.HEADING_CHARS)]
    text = title .. '\n' .. char:rep(math.max(vim.fn.strchars(title), 3))
  end
  return result(range, text, range.start, range.start + #title)
end

local function map_lines(source, selection, map)
  local range = line_block(source, order(selection))
  local lines = vim.split(text_of(source, range), '\n', { plain = true })
  local text = table.concat(map(lines), '\n')
  return result(range, text, range.start, range.start + #text)
end

-- kind: bullet, numbered
function M.toggle_list(source, selection, syntax, kind)
  local marker = kind == 'bullet' and '* ' or syntax == 'rst' and '#. ' or '1. '
  local own = kind == 'bullet' and strip_bullet or strip_numbered
  local other = kind == 'bullet' and strip_numbered or strip_bullet

  return map_lines(source, selection, function(lines)
    local any, all = false, true
    for _, l in ipairs(lines) do
      if filled(l) then
        any = true
        all = all and own(l) ~= nil
      end
    end
    if not any then
      return { marker }
    end
    local out = {}
    for i, l in ipairs(lines) do
      if all then
        out[i] = own(l) or l
      elseif not filled(l) or own(l) then
        out[i] = l
      else
        local bare = other(l) or l
        local indent = bare:match('^%s*')
        out[i] = indent .. marker .. bare:sub(#indent + 1)
      end
    end
    return out
  end)
end

function M.toggle_quote(source, selection, syntax)
  local prefix = syntax == 'rst' and INDENT or '> '
  local quoted = syntax == 'rst' and '^   ' or '^>%s?'

  return map_lines(source, selection, function(lines)
    local any, all = false, true
    for _, l in ipairs(lines) do
      if filled(l) then
        any = true
        all = all and l:find(quoted) ~= nil
      end
    end
    local out = {}
    for i, l in ipairs(lines) do
      if any and all then
        out[i] = (l:gsub(quoted, '', 1))
      elseif filled(l) or #lines == 1 then
        out[i] = prefix .. l
      else
        out[i] = l
      end
    end
    return out
  end)
end

function M.insert_link(source, selection, syntax, url)
  local sp = order(selection)
  if sp.start == sp['end'] then
    sp = word_at(source, sp.start)
  end
  sp = trim_span(source, sp)
  local label = text_of(source, sp)
  if label == '' then
    label = url
  end
  local text = syntax == 'rst' and ('`%s <%s>`__'):format(label, url) or ('[%s](%s)'):format(label, url)
  local s = sp.start + 1
  return result(sp, text, s, s + #label)
end

function M.insert_role(source, selection, syntax, role)
  local sp = trim_span(source, order(selection))
  local title = text_of(source, sp)
  local open = syntax == 'rst' and (':%s:`'):format(role) or ('{%s}`'):format(role)
  local text = title ~= '' and (open .. title .. ' <') or open
  local cursor = sp.start + #text
  return result(sp, text, cursor, cursor)
end

local function block(source, range, body, select)
  local before = line_before(source, range.start)
  local after = line_after(source, range['end'])
  local head = before and filled(text_of(source, before)) and '\n' or ''
  local tail = after and filled(text_of(source, after)) and '\n' or ''
  local s = range.start + #head
  if select then
    return result(range, head .. body .. tail, s + select[1], s + select[2])
  end
  return result(range, head .. body .. tail, s + #body, s + #body)
end

local function insert_block(source, selection, body, select)
  local at = order(selection)['end']
  local line = line_block(source, span(at, at))
  if not filled(text_of(source, line)) then
    return block(source, line, body, select)
  end

  local range = span(line['end'], line['end'])
  local after = line_after(source, line['end'])
  local tail = after and filled(text_of(source, after)) and '\n' or ''
  local s = range.start + 2
  if select then
    return result(range, '\n\n' .. body .. tail, s + select[1], s + select[2])
  end
  return result(range, '\n\n' .. body .. tail, s + #body, s + #body)
end

local function wrap_block(source, selection, syntax, rst, myst, placeholder)
  local range = line_block(source, order(selection))
  local lines = vim.split(text_of(source, range), '\n', { plain = true })
  local empty = true
  for _, l in ipairs(lines) do
    empty = empty and not filled(l)
  end
  local content = empty and { placeholder } or lines

  if syntax == 'myst' then
    local fence = '```'
    for _, l in ipairs(content) do
      if l:find('```', 1, true) then
        fence = '````'
      end
    end
    local head = fence .. myst .. '\n'
    local body = table.concat(content, '\n')
    return block(source, range, head .. body .. '\n' .. fence,
      empty and { #head, #head + #body } or nil)
  end

  local head = rst .. '\n\n'
  local indented = {}
  for i, l in ipairs(content) do
    indented[i] = filled(l) and (INDENT .. l) or l
  end
  local body = table.concat(indented, '\n')
  return block(source, range, head .. body,
    empty and { #head + #INDENT, #head + #body } or nil)
end

function M.wrap_code(source, selection, syntax, language)
  local rst = vim.trim('.. code-block:: ' .. language)
  return wrap_block(source, selection, syntax, rst, language, 'code')
end

function M.wrap_admonition(source, selection, syntax, kind)
  return wrap_block(source, selection, syntax, '.. ' .. kind .. '::', '{' .. kind .. '}', 'Text')
end

function M.insert_image(source, selection, syntax, path)
  return insert_block(source, selection, syntax == 'rst' and ('.. image:: ' .. path) or ('![](' .. path .. ')'))
end

function M.insert_rule(source, selection, syntax)
  return insert_block(source, selection, syntax == 'rst' and '----' or '---')
end

function M.insert_table(source, selection, syntax, rows, columns)
  local headers = {}
  for i = 1, columns do
    headers[i] = 'Header ' .. i
  end
  local first = { 0, 0 }
  local body

  if syntax == 'rst' then
    local function row(cells)
      local out = {}
      for i, cell in ipairs(cells) do
        out[i] = INDENT .. (i == 1 and '* -' or '  -') .. (cell ~= '' and (' ' .. cell) or '')
      end
      return table.concat(out, '\n')
    end
    local head = '.. list-table::\n' .. INDENT .. ':header-rows: 1\n\n'
    local empty = {}
    for i = 1, columns do
      empty[i] = ''
    end
    local all = { row(headers) }
    for _ = 1, rows do
      all[#all + 1] = row(empty)
    end
    body = head .. table.concat(all, '\n')
    first[1] = #head + #INDENT + #'* - '
  else
    local function row(cells)
      return '| ' .. table.concat(cells, ' | ') .. ' |'
    end
    local rule, blank = {}, {}
    for i, h in ipairs(headers) do
      rule[i] = ('-'):rep(#h)
      blank[i] = (' '):rep(#h)
    end
    local all = { row(headers), row(rule) }
    for _ = 1, rows do
      all[#all + 1] = row(blank)
    end
    body = table.concat(all, '\n')
    first[1] = 2
  end
  first[2] = first[1] + #headers[1]
  return insert_block(source, selection, body, first)
end

function M.parse_table_size(value)
  local rows, columns = vim.trim(value):match('^(%d+)%s*[xX*,%s]%s*(%d+)$')
  rows, columns = tonumber(rows), tonumber(columns)
  if not rows or rows < 1 or columns < 1 or rows > 50 or columns > 20 then
    return nil
  end
  return { rows = rows, columns = columns }
end

return M
