-- Map the editor view to source lines and source files to pages

local M = {}

local SOURCE_SUFFIXES = { '.rst', '.md' }

local function round(value)
  return math.floor(value + 0.5)
end

local function tail(view)
  local max_top = math.max(view.lines - view.visible, 0)
  local start = math.max(max_top - view.visible, 0)
  return max_top, start
end

-- view: { top = 0-based first visible line, visible = visible lines, lines = total }
function M.editor_to_source_line(view)
  local max_top, start = tail(view)
  local top = math.max(view.top, 0)
  if top <= start or max_top == start then
    return math.min(top, start) + 1
  end
  if top >= max_top then
    return math.max(view.lines, 1)
  end
  return start + (top - start) * (view.lines - start) / (max_top - start) + 1
end

function M.source_line_to_editor_top(line, view)
  local max_top, start = tail(view)
  local index = math.max(line - 1, 0)
  if index <= start or max_top == start then
    return round(math.min(index, start))
  end
  local top = start + (index - start) * (max_top - start) / (view.lines - start)
  return round(math.min(top, max_top))
end

local function url_decode(str)
  return (str:gsub('%%(%x%x)', function(hex)
    return string.char(tonumber(hex, 16))
  end))
end

function M.page_path_to_docnames(page_path)
  local name = url_decode(page_path:match('^[^?#]*'))
  name = name:gsub('/index%.html$', '/'):gsub('%.html$', ''):gsub('^/+', ''):gsub('/+$', '')
  if name == '' then
    return { 'index' }
  end
  return { name, name .. '/index' }
end

function M.docname_to_page_path(docname)
  local name = docname:gsub('\\', '/'):gsub('^/+', '')
  if name == 'index' then
    return '/'
  end
  if name:sub(-6) == '/index' then
    return '/' .. name:sub(1, -6)
  end
  return '/' .. name .. '/'
end

function M.source_to_docname(relative_path)
  local normalized = relative_path:gsub('\\', '/')
  if normalized:sub(1, 3) == '../' or normalized:sub(1, 1) == '/' then
    return nil
  end
  for _, suffix in ipairs(SOURCE_SUFFIXES) do
    if normalized:sub(-#suffix) == suffix then
      return normalized:sub(1, -#suffix - 1)
    end
  end
  return nil
end

function M.docname_to_sources(docname)
  local sources = {}
  for _, suffix in ipairs(SOURCE_SUFFIXES) do
    sources[#sources + 1] = docname .. suffix
  end
  return sources
end

return M
