-- Build the prose of a reStructuredText document for LanguageTool from the
-- tree-sitter tree, and map the offsets of the matches back to the source.
--
-- All the offsets are 0-based byte offsets with an exclusive end.

local M = {}

local function set(list)
  local s = {}
  for _, v in ipairs(list) do
    s[v] = true
  end
  return s
end

-- Directives whose body contains RST (recursive injection)
local RST_DIRECTIVES = set({
  'attention', 'caution', 'danger', 'error', 'hint', 'important', 'note', 'tip', 'warning', 'admonition',
  'line-block', 'parsed-literal', 'epigraph', 'highlights', 'pull-quote', 'compound', 'header', 'footer',
  'meta', 'replace', 'topic', 'sidebar', 'container', 'table', 'list-table', 'class', 'role',
  'restructuredtext-test-directive',
  -- Doctools
  'tab-set', 'tab-item', 'carousel', 'collapsible', 'card', 'grid', 'flex', 'video', 'svg', 'description',
  'hdl-parameters', 'hdl-interfaces', 'esd-warning',
})

-- Directives that inject other languages (skip for grammar checking)
local CODE_DIRECTIVES = set({
  'code', 'code-block', 'sourcecode', 'raw', 'math', 'csv-table', 'shell', 'include-template', 'collection',
})

-- Directives with file path arguments - skip arguments, but check content (caption) if present
local PATH_ARG_DIRECTIVES = set({ 'figure', 'image', 'include', 'literalinclude', 'toctree' })

-- Format roles: the content is checked
local FORMAT_ROLES = set({ 'red', 'green' })
-- Literal roles: never checked
local LITERAL_ROLES = set({ 'code' })

-- Skip these node types entirely
local SKIP_NODE_TYPES = set({
  'literal_block', 'doctest_block', 'comment', 'line_block',
  'substitution_definition', 'footnote', 'citation',
  'target', 'directive_marker', 'field_list',
})

local function bytes(node)
  local _, _, s, _, _, e = node:range(true)
  return s, e
end

local function text_of(node, src)
  local s, e = bytes(node)
  return src:sub(s + 1, e)
end

local function find_child(node, type_)
  for child in node:iter_children() do
    if child:type() == type_ then
      return child
    end
  end
  return nil
end

local Builder = {}
Builder.__index = Builder

function M.new()
  return setmetatable({ segments = {} }, Builder)
end

function Builder:add_text(content, src_start, src_end)
  self.segments[#self.segments + 1] = { type = 'text', content = content, src_start = src_start, src_end = src_end }
end

-- mode: 'silent' skips the markup, 'backticks' outputs `content` and
-- 'literal' outputs the content as-is
function Builder:add_markup(content, src_start, src_end, mode)
  self.segments[#self.segments + 1] = {
    type = 'markup', content = content, src_start = src_start, src_end = src_end, mode = mode or 'silent',
  }
end

-- The text to send to LanguageTool
function Builder:build_text(source)
  local out_pos = 0
  local parts = {}
  local last_src_end = 0

  local function push(str)
    parts[#parts + 1] = str
    out_pos = out_pos + #str
  end

  for _, seg in ipairs(self.segments) do
    -- Keep the newlines between the segments, collapse other whitespace
    if seg.src_start > last_src_end then
      local gap = source:sub(last_src_end + 1, seg.src_start)
      local _, newlines = gap:gsub('\n', '')
      if newlines > 0 then
        push(('\n'):rep(newlines))
      elseif gap:find('%s') then
        push(' ')
      end
    end

    local output
    if seg.type == 'text' or seg.mode == 'literal' then
      output = seg.content
    elseif seg.mode == 'backticks' then
      output = '`' .. seg.content .. '`'
    end
    if output then
      seg.out_start = out_pos
      push(output)
      seg.out_end = out_pos
    end

    last_src_end = seg.src_end
  end

  return table.concat(parts)
end

-- Map a range of the LanguageTool text to the source: offset, length or nil
function Builder:map_to_source(out_offset, out_length)
  local src_start, src_end
  local out_end = out_offset + out_length

  for _, seg in ipairs(self.segments) do
    if seg.type == 'text' and seg.out_start then
      if seg.out_start <= out_offset and out_offset < seg.out_end then
        src_start = seg.src_start + (out_offset - seg.out_start)
      end
      if seg.out_start < out_end and out_end <= seg.out_end then
        src_end = seg.src_start + (out_end - seg.out_start)
      end
      if out_offset <= seg.out_start and seg.out_end <= out_end then
        src_start = src_start or seg.src_start
        src_end = seg.src_end
      end
    end
  end

  if src_start and src_end then
    return src_start, src_end - src_start
  end
  return nil
end

function Builder:walk_injected(content_node, src, base)
  local content = text_of(content_node, src)
  local ok, parser = pcall(vim.treesitter.get_string_parser, content, 'rst')
  if not ok or not parser then
    return
  end
  local tree = parser:parse()[1]
  if tree then
    self:walk(tree:root(), content, base + (bytes(content_node)))
  end
end

function Builder:walk_directive(node, src, base)
  local type_node = find_child(node, 'type')
  local name = type_node and text_of(type_node, src) or 'unknown'
  local s, e = bytes(node)
  local body = find_child(node, 'body')

  if PATH_ARG_DIRECTIVES[name] and not CODE_DIRECTIVES[name] then
    local content = body and find_child(body, 'content')
    if content then
      local cs = bytes(content)
      self:add_markup(src:sub(s + 1, cs), base + s, base + cs)
      self:walk_injected(content, src, base)
      return
    end
  elseif RST_DIRECTIVES[name] and not CODE_DIRECTIVES[name] then
    if body then
      local bs = bytes(body)
      self:add_markup(src:sub(s + 1, bs), base + s, base + bs)
      self:walk_injected(find_child(body, 'content') or body, src, base)
    end
    return
  end

  self:add_markup(src:sub(s + 1, e), base + s, base + e)
end

function Builder:walk_role(node, src, base)
  local role_node = find_child(node, 'role')
  local inner_node = find_child(node, 'interpreted_text')
  local s, e = bytes(node)
  local text = src:sub(s + 1, e)

  local role = role_node and text_of(role_node, src):match('^:(%S+):$')
  local content = inner_node and text_of(inner_node, src):match('^`([^`]+)`$')
  if not role or not content then
    self:add_markup(text, base + s, base + e)
    return
  end

  local inner_start = bytes(inner_node)

  if LITERAL_ROLES[role] then
    self:add_markup(content, base + s, base + e, 'backticks')
    return
  end

  if FORMAT_ROLES[role] then
    self:add_markup(text_of(role_node, src) .. '`', base + s, base + inner_start + 1)
    self:add_text(content, base + inner_start + 1, base + inner_start + 1 + #content)
    self:add_markup('`', base + e - 1, base + e)
    return
  end

  -- Reference roles: check the title, not the target
  local title, target = content:match('^%s*(.-)%s*<%s*(.-)%s*>%s*$')
  if title and title ~= '' and target ~= '' then
    local title_start = inner_start + 1 + (content:find(title, 1, true) - 1)
    local title_end = title_start + #title
    self:add_markup(src:sub(s + 1, title_start), base + s, base + title_start)
    self:add_text(title, base + title_start, base + title_end)
    self:add_markup(src:sub(title_end + 1, e), base + title_end, base + e)
  else
    self:add_markup(content, base + s, base + e, 'backticks')
  end
end

function Builder:walk_reference(node, src, base)
  local s, e = bytes(node)
  local text = src:sub(s + 1, e)
  local title = text:match('^`%s*(.-)%s*<[^>]+>`_+$')

  if title and title ~= '' then
    local title_start = s + (text:find(title, 1, true) - 1)
    local title_end = title_start + #title
    self:add_markup(src:sub(s + 1, title_start), base + s, base + title_start)
    self:add_text(title, base + title_start, base + title_end)
    self:add_markup(src:sub(title_end + 1, e), base + title_end, base + e)
  else
    self:add_markup(text, base + s, base + e)
  end
end

function Builder:walk(node, src, base)
  local type_ = node:type()
  local s, e = bytes(node)
  local text = src:sub(s + 1, e)

  if SKIP_NODE_TYPES[type_] then
    self:add_markup(text, base + s, base + e)
  elseif type_ == 'directive' then
    self:walk_directive(node, src, base)
  elseif type_ == 'interpreted_text' then
    self:walk_role(node, src, base)
  elseif type_ == 'reference' then
    self:walk_reference(node, src, base)
  elseif type_ == 'standalone_hyperlink' then
    self:add_markup(text, base + s, base + e, 'literal')
  elseif type_ == 'literal' then
    self:add_markup((text:gsub('^``', ''):gsub('``$', '')), base + s, base + e, 'backticks')
  elseif type_ == 'emphasis' then
    self:add_markup((text:gsub('^%*', ''):gsub('%*$', '')), base + s, base + e, 'literal')
  elseif type_ == 'strong' then
    self:add_markup((text:gsub('^%*%*', ''):gsub('%*%*$', '')), base + s, base + e, 'literal')
  elseif type_ == 'text' then
    self:add_text(text, base + s, base + e)
  else
    for child in node:iter_children() do
      self:walk(child, src, base)
    end
  end
end

-- root: the root node of the rst tree of 'source'
function Builder:build_from_tree(root, source)
  self.segments = {}
  self:walk(root, source, 0)
end

-- Convert an offset and length in code points ('codepoint') or UTF-16 code
-- units ('utf16') to bytes
function M.to_bytes(text, offset, length, unit)
  if not text:find('[\128-\255]') then
    return offset, length
  end

  local units = 0
  local start
  local i, n = 1, #text
  while i <= n do
    if units == offset and not start then
      start = i - 1
    end
    if start and units >= offset + length then
      return start, i - 1 - start
    end
    local b = text:byte(i)
    local size = b < 0x80 and 1 or b < 0xE0 and 2 or b < 0xF0 and 3 or 4
    units = units + ((unit == 'utf16' and size == 4) and 2 or 1)
    i = i + size
  end
  start = start or n
  return start, n - start
end

return M
