// Turn the tree-sitter tree of a reStructuredText source into the blocks and
// leaves that the view shows.
//
// A leaf is a piece of text the user edits: its text is exactly
// source.slice(leaf.s, leaf.e). The markup around the leaves (adornments,
// bullets, inline delimiters) is hidden and listed in model.hidden. What the
// model does not understand becomes a 'raw' leaf with the source as-is, so no
// content is ever dropped.

// Directives shown as a card
const CARD_DIRECTIVES = new Set([
  'attention', 'caution', 'danger', 'error', 'hint', 'important', 'note', 'tip', 'warning', 'admonition',
  'epigraph', 'highlights', 'pull-quote', 'compound', 'topic', 'sidebar', 'container'
])

// Directives without content
const NO_CONTENT = new Set([
  'image', 'include', 'literalinclude', 'contents', 'sectnum', 'index', 'only-doc', 'rst-class', 'clear-content', 'rubric'
])

// What the argument of a directive is, for the directives that take one
const ARGUMENT = {
  'code-block': 'language', code: 'language', sourcecode: 'language',
  image: 'path', figure: 'path', include: 'path', literalinclude: 'path',
  table: 'title', 'list-table': 'title', 'csv-table': 'title',
  admonition: 'title', topic: 'title', sidebar: 'title', 'tab-item': 'title',
  collapsible: 'title', card: 'title', collection: 'title', video: 'url', svg: 'path', 'rst-class': 'class', rubric: 'title'
}

// Directives whose content is reStructuredText
const RST_DIRECTIVES = new Set([
  ...CARD_DIRECTIVES, 'figure', 'tab-set', 'tab-item', 'carousel', 'collapsible', 'card', 'grid', 'flex',
  'video', 'svg', 'description', 'hdl-parameters', 'hdl-interfaces', 'esd-warning'
])

// Directives without an argument
const NO_ARGUMENT = new Set([
  'shell', 'tab-set', 'toctree', 'math', 'carousel', 'grid', 'flex', 'description', 'hdl-parameters',
  'hdl-interfaces', 'esd-warning', 'clear-content'
])

import { readTable } from './table.js'

const DELIMITED = { strong: 2, emphasis: 1, literal: 2 }
const TITLED = /^(\s*)(.+?)\s*<[^<>]+>\s*$/

export function lineStartsOf(source) {
  const starts = [0]
  for (let i = 0; i < source.length; i++)
    if (source[i] === '\n') starts.push(i + 1)
  return starts
}

export function buildModel(parser, tree, source) {
  const lineStarts = lineStartsOf(source)
  const leaves = []
  const hidden = []
  const levels = []

  const rowOf = index => {
    let lo = 0, hi = lineStarts.length - 1
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1
      if (lineStarts[mid] <= index) lo = mid
      else hi = mid - 1
    }
    return lo
  }
  const pointOf = index => {
    const row = rowOf(index)
    return { row, column: index - lineStarts[row] }
  }
  const lineStart = index => lineStarts[rowOf(index)]
  const lineEnd = index => {
    const row = rowOf(index)
    return row + 1 < lineStarts.length ? lineStarts[row + 1] - 1 : source.length
  }

  const block = (kind, node, parent, extra = {}) =>
    ({ kind, type: node.type, s: node.startIndex, e: node.endIndex, parent, ...extra })

  const leaf = (owner, kind, s, e, os = s, oe = e, extra = {}) => {
    const item = { kind, s, e, os, oe, block: owner, ...extra }
    if (os < s) hidden.push([os, s])
    if (e < oe) hidden.push([e, oe])
    leaves.push(item)
    return item
  }

  // Text between the styled nodes, a line break inside it shows as a space
  const plain = (owner, out, a, b) => {
    const pattern = /\n[ \t]*/g
    let at = a
    let match
    const text = source.slice(a, b)
    while ((match = pattern.exec(text)) !== null) {
      const s = a + match.index
      if (s > at) out.push(leaf(owner, 'text', at, s))
      const soft = { kind: 'soft', s, e: s + match[0].length, os: s, oe: s + match[0].length, block: owner }
      hidden.push([soft.s, soft.e])
      leaves.push(soft)
      out.push(soft)
      at = soft.e
    }
    if (b > at) out.push(leaf(owner, 'text', at, b))
  }

  // The text shown for a role or a link: the title of 'title <target>', else
  // all of it. from and to are the ends of the text between the delimiters.
  const labelled = (owner, kind, node, from, to, extra) => {
    const s = node.startIndex, e = node.endIndex
    if (to <= from) return leaf(owner, kind, s, e, s, e, { ...extra, bare: true })
    const titled = TITLED.exec(source.slice(from, to))
    if (!titled) return leaf(owner, kind, from, to, s, e, extra)
    const start = from + titled[1].length
    return leaf(owner, kind, start, start + titled[2].length, s, e, extra)
  }

  // The leaf of a node of inline markup
  const inline = (owner, node) => {
    const s = node.startIndex, e = node.endIndex
    const text = source.slice(s, e)
    const width = DELIMITED[node.type]
    if (width && e - s > 2 * width)
      return leaf(owner, node.type, s + width, e - width, s, e)

    if (node.type === 'interpreted_text') {
      const content = node.children.find(c => c.type === 'interpreted_text')
      const role = node.children.find(c => c.type === 'role')
      const name = role ? source.slice(role.startIndex, role.endIndex).replace(/^:|:$/g, '') : ''
      if (content && content.endIndex - content.startIndex >= 2)
        return labelled(owner, 'role', node, content.startIndex + 1, content.endIndex - 1, { role: name })
      return leaf(owner, 'role', s, e, s, e, { role: name, bare: true })
    }

    if (node.type === 'reference') {
      const quoted = /^`([^`]+)`__?$/.exec(text)
      if (quoted) return labelled(owner, 'link', node, s + 1, s + 1 + quoted[1].length)
      const word = /^(.+?)__?$/.exec(text)
      if (word && !text.startsWith('`')) return leaf(owner, 'link', s, s + word[1].length, s, e)
      return leaf(owner, 'link', s, e, s, e, { bare: true })
    }

    if (node.type === 'standalone_hyperlink')
      return leaf(owner, 'link', s, e)
    return leaf(owner, 'markup', s, e)
  }

  // The leaves of a node with inline content, from 'from' up to 'to'
  const inlines = (owner, children, from, to) => {
    // Typed spaces at the end of the line belong to the text
    let end = to
    while (end < source.length && (source[end] === ' ' || source[end] === '\t')) end++
    if (end < source.length && source[end] !== '\n') end = to

    const out = []
    let at = from
    for (const child of children) {
      if (!child.isNamed || child.startIndex < at || child.endIndex > to) continue
      plain(owner, out, at, child.startIndex)
      out.push(inline(owner, child))
      at = child.endIndex
    }
    plain(owner, out, at, end)
    owner.e = Math.max(owner.e, end)

    // Hidden markup at the start or the end: an empty text gives the caret
    // a place outside of it
    const first = out[0]
    if (first && first.os < first.s) out.unshift(leaf(owner, 'text', from, from))
    const last = out[out.length - 1]
    if (last && last.kind !== 'soft' && last.oe > last.e && last.oe === end) out.push(leaf(owner, 'text', end, end))
    return out
  }

  const raw = (node, parent, s = node.startIndex, to = node.endIndex, extra = {}) => {
    // Typed spaces at the end of the line belong to the text
    let e = to
    while (e < source.length && (source[e] === ' ' || source[e] === '\t')) e++
    if (e < source.length && source[e] !== '\n') e = to
    const b = { kind: 'raw', type: node.type, s, e, parent, ...extra }
    b.inlines = [leaf(b, 'raw', s, e)]
    return b
  }

  // Text shown as it is written, as code: a leaf per line, without the
  // indentation that all its lines share
  const code = (node, parent, to = node.endIndex) => {
    const s = lineStart(node.startIndex)
    let e = to
    while (e < source.length && (source[e] === ' ' || source[e] === '\t')) e++
    if (e < source.length && source[e] !== '\n') e = to

    const lines = []
    for (let at = s; at <= e; at = lineEnd(at) + 1) {
      lines.push({ s: at, e: Math.min(lineEnd(at), e) })
      if (lineEnd(at) >= e) break
    }
    const indentOf = line => source.slice(line.s, line.e).match(/^[ \t]*/)[0].length
    const filled = lines.filter(line => source.slice(line.s, line.e).trim() !== '')
    const indent = Math.min(...filled.map(indentOf))

    const b = { kind: 'raw', type: node.type, s, e, parent, code: true, indent }
    b.inlines = []
    let hiddenFrom = s
    lines.forEach((line, i) => {
      const start = Math.min(line.s + indent, line.e)
      if (i === 0) {
        if (start > s) hidden.push([s, start])
      } else {
        const soft = { kind: 'soft', newline: true, s: hiddenFrom, e: start, os: hiddenFrom, oe: start, block: b }
        hidden.push([soft.s, soft.e])
        leaves.push(soft)
        b.inlines.push(soft)
      }
      b.inlines.push(leaf(b, 'raw', start, line.e))
      hiddenFrom = line.e
    })
    return b
  }

  const heading = (node, parent) => {
    const title = node.children.find(c => c.type === 'title')
    if (!title) return raw(node, parent, undefined, undefined, { error: true })
    const marks = node.children.filter(c => c.type === 'adornment')
    for (const mark of marks) hidden.push([mark.startIndex, mark.endIndex])
    const key = (marks.length > 1 ? 'o' : '') + (marks[0] ? source[marks[0].startIndex] : '')
    if (!levels.includes(key)) levels.push(key)
    const b = block('heading', node, parent, { level: levels.indexOf(key) + 1 })
    b.title = { s: title.startIndex, e: title.endIndex }
    b.marks = marks.map(mark => ({ s: mark.startIndex, e: mark.endIndex }))
    b.inlines = inlines(b, title.children, title.startIndex, title.endIndex)
    return b
  }

  // The leaves of one line of text that the grammar leaves as it is, such as
  // a line of a table cell: its inline markup is parsed
  const textLine = (kind, range, parent) => {
    const b = { kind, type: kind, s: range.s, e: range.e, parent }
    let children = []
    let subtree
    if (/[*`:_|]/.test(source.slice(range.s, range.e))) {
      subtree = parser.parse(source, null, {
        includedRanges: [{
          startIndex: range.s, endIndex: range.e, startPosition: pointOf(range.s), endPosition: pointOf(range.e)
        }]
      })
      const first = subtree?.rootNode.children[0]
      if (first?.type === 'paragraph') children = first.children
    }
    b.inlines = inlines(b, children, range.s, range.e)
    subtree?.delete()
    b.e = range.e
    if (!b.inlines.length) b.inlines = [leaf(b, 'text', range.s, range.e)]
    return b
  }

  // A grid or simple table, read from the lines of a paragraph
  const textTable = (node, parent) => {
    const read = readTable(source, node.startIndex, node.endIndex)
    if (!read) return undefined
    hidden.push([node.startIndex, node.endIndex], ...read.hidden)
    const b = block('table', node, parent, {
      format: read.format, headers: read.headers, indent: read.indent, gap: read.gap
    })
    b.children = read.rows.map((cells, r) => {
      const row = { kind: 'row', type: 'row', parent: b, header: r < read.headers }
      row.children = cells.map(cell => {
        const c = { kind: 'cell', type: 'cell', parent: row, header: row.header }
        c.children = cell.lines.map(range => textLine('line', range, c))
        c.s = c.children[0].s
        c.e = c.children[c.children.length - 1].e
        return c
      })
      row.s = Math.min(...row.children.map(c => c.s))
      row.e = Math.max(...row.children.map(c => c.e))
      return row
    })
    return b
  }

  // The list of lists of a list-table directive, as a table
  const listTable = (kids, parent, head) => {
    const outer = kids.length === 1 && kids[0].kind === 'list' ? kids[0] : undefined
    if (!outer || !outer.children.length) return undefined
    if (!outer.children.every(item => item.children.length === 1 && item.children[0].kind === 'list'))
      return undefined
    const headers = Number(/:header-rows:\s*(\d+)/.exec(head)?.[1] ?? 0)
    const b = { kind: 'table', type: 'list-table', format: 'list', s: outer.s, e: outer.e, parent, headers }
    b.children = outer.children.map((item, r) => {
      const row = { kind: 'row', type: 'row', s: item.s, e: item.e, parent: b, marker: item.marker, header: r < headers }
      row.children = item.children[0].children.map(inner => {
        const c = { kind: 'cell', type: 'cell', s: inner.s, e: inner.e, parent: row, marker: inner.marker, header: row.header }
        c.children = inner.children
        for (const child of c.children) child.parent = c
        return c
      })
      return row
    })
    return b
  }

  const paragraph = (node, parent) => {
    if (/^(\+-|=)/.test(source.slice(node.startIndex, node.startIndex + 2))) {
      const table = textTable(node, parent)
      if (table) return [table]
      // A table that is not read is shown as it is written
      if (/^(\+-[-+]*|=+( +=+)*)$/.test(source.slice(node.startIndex, lineEnd(node.startIndex))))
        return [code(node, parent)]
    }
    const literal = node.children.find(c => c.type === 'literal_block')
    const end = literal ? node.children[node.children.indexOf(literal) - 1].endIndex : node.endIndex
    const b = block('paragraph', node, parent)
    b.e = end
    b.inlines = inlines(b, node.children.filter(c => c !== literal), node.startIndex, end)
    if (!literal) return [b]
    return [b, code(literal, parent)]
  }

  const list = (node, parent) => {
    const b = block('list', node, parent, { ordered: node.type === 'enumerated_list' })
    b.children = node.children.filter(c => c.type === 'list_item').map(itemNode => {
      const item = block('item', itemNode, b)
      const bullet = itemNode.children.find(c => c.type === 'bullet')
      const body = itemNode.children.find(c => c.type === 'body')
      if (bullet) {
        item.marker = { s: bullet.startIndex, e: bullet.endIndex }
        hidden.push([bullet.startIndex, bullet.endIndex])
      }
      item.children = body ? blocks(body.children, item) : []
      return item
    })
    return b
  }

  // Parse the content of a directive as a document: only the text after the
  // indentation of each line is given to the parser, so the offsets of the
  // nodes are the ones of the source.
  const nested = (content, parent) => {
    const indent = content.startIndex - lineStart(content.startIndex)
    const ranges = []
    for (let row = rowOf(content.startIndex); row <= rowOf(content.endIndex); row++) {
      const s = Math.min(lineStarts[row] + indent, lineEnd(lineStarts[row]))
      const e = Math.min(lineEnd(lineStarts[row]) + 1, content.endIndex)
      if (e > s)
        ranges.push({ startIndex: s, endIndex: e, startPosition: pointOf(s), endPosition: pointOf(e) })
    }
    const subtree = parser.parse(source, null, { includedRanges: ranges })
    if (!subtree) return []
    try {
      return blocks(subtree.rootNode.children, parent)
    } finally {
      subtree.delete()
    }
  }

  // ':name: value' of a directive
  const option = (field, parent) => {
    const name = field.children.find(c => c.type === 'field_name')
    const value = field.children.find(c => c.type === 'field_body')
    if (!name) return raw(field, parent)
    const b = block('option', field, parent, { name: source.slice(name.startIndex, name.endIndex) })
    b.inlines = [leaf(b, 'name', name.startIndex, name.endIndex, field.startIndex, value ? value.startIndex : field.endIndex)]
    if (value) {
      b.inlines.push(leaf(b, 'text', value.startIndex, value.endIndex))
    } else {
      // An empty value, to type it in
      b.inlines.push(leaf(b, 'text', field.endIndex, field.endIndex))
      b.empty = true
    }
    return b
  }

  // '.. name:: arguments', then the options and the content. The name is
  // hidden, the arguments are the caption.
  const directive = (node, parent) => {
    const type = node.children.find(c => c.type === 'type')
    const colons = node.children.find(c => c.type === '::')
    if (!type || !colons) return raw(node, parent)
    const name = source.slice(type.startIndex, type.endIndex)
    const body = node.children.find(c => c.type === 'body')
    const parts = body?.children ?? []
    const args = parts.find(c => c.type === 'arguments')
    const options = parts.find(c => c.type === 'options')
    const content = parts.find(c => c.type === 'content')
    const b = block('directive', node, parent, { name, card: CARD_DIRECTIVES.has(name) })
    hidden.push([node.startIndex, colons.endIndex])
    b.children = []

    // Where the content starts when there is none yet: the end of the head
    const head = options ?? args ?? colons
    b.headEnd = lineEnd(head.endIndex)
    b.takesContent = !NO_CONTENT.has(name)

    if (args) {
      b.children.push(textLine('caption', { s: args.startIndex, e: args.endIndex }, b))
    } else if (ARGUMENT[name] || (!b.card && !NO_ARGUMENT.has(name))) {
      // An empty caption, to type the argument in
      const slot = textLine('caption', { s: colons.endIndex, e: colons.endIndex }, b)
      slot.empty = true
      b.children.push(slot)
    }
    if (b.children[0]) b.children[0].hint = ARGUMENT[name] ?? 'argument'
    if (options) {
      const list = block('options', options, b)
      list.children = options.children.filter(c => c.endIndex > c.startIndex).map(c =>
        c.type === 'field' ? option(c, list) : raw(c, list))
      b.children.push(list)
    }
    for (const part of parts)
      if (part !== args && part !== options && part !== content && part.endIndex > part.startIndex)
        b.children.push(raw(part, b))
    if (!content) return b

    if (name === 'table') {
      // The content is a grid or a simple table
      const table = textTable(content, b)
      b.children.push(table ?? code(content, b))
    } else if (name === 'list-table') {
      const kids = nested(content, b)
      const head = options ? source.slice(options.startIndex, options.endIndex) : ''
      const table = listTable(kids, b, head)
      b.children.push(...(table ? [table] : kids))
    } else if (RST_DIRECTIVES.has(name)) {
      b.children.push(...nested(content, b))
    } else {
      b.children.push(code(content, b))
    }
    return b
  }

  // '.. _label:', the label is shown
  const target = (node, parent) => {
    const name = node.children.find(c => c.type === 'name')
    const text = name ? source.slice(name.startIndex, name.endIndex) : ''
    if (!name || node.children.some(c => c.isNamed && c !== name) || !/^_.+:$/.test(text))
      return raw(node, parent)
    const b = block('target', node, parent)
    b.inlines = [leaf(b, 'label', name.startIndex + 1, name.endIndex - 1, node.startIndex, name.endIndex)]
    return b
  }

  // Text of one line that is not a paragraph for the grammar, shown as one
  const textBlock = (node, parent, extra = {}) => {
    const b = block('paragraph', node, parent, extra)
    b.inlines = inlines(b, [], node.startIndex, node.endIndex)
    return b
  }

  const oneLine = node => !source.slice(node.startIndex, node.endIndex).includes('\n')

  const convert = (node, parent) => {
    // Markup that is being typed is often an error for a moment: it is shown
    // as the text it is, only a larger broken part is shown as source
    if (node.isError || node.isMissing)
      return [oneLine(node) ? textBlock(node, parent, { error: true }) : raw(node, parent, undefined, undefined, { error: true })]
    switch (node.type) {
      case 'section': return [heading(node, parent)]
      case 'paragraph': return paragraph(node, parent)
      case 'bullet_list':
      case 'enumerated_list': return [list(node, parent)]
      case 'directive': return [directive(node, parent)]
      case 'target': return [target(node, parent)]
      // From the start of its line: the first line keeps its indentation
      case 'literal_block':
        return [code(node, parent)]
      // ':name:' alone on its line, as while a role is typed
      case 'field_list':
        return [oneLine(node) && /^:[^:\s]+:$/.test(source.slice(node.startIndex, node.endIndex))
          ? textBlock(node, parent) : raw(node, parent)]
      case 'block_quote': {
        const b = block('quote', node, parent)
        b.children = blocks(node.children, b)
        return [b]
      }
      default: return [raw(node, parent)]
    }
  }

  function blocks(nodes, parent) {
    const list = nodes.filter(n => n.endIndex > n.startIndex)
    const out = []
    for (let i = 0; i < list.length; i++) {
      const node = list[i]
      const next = list[i + 1]
      // An error followed by a paragraph on its line, as ':ref:`' at the
      // start of a line: one paragraph
      if (node.isError && next?.type === 'paragraph' &&
          !source.slice(node.startIndex, next.startIndex).includes('\n')) {
        const [first, ...rest] = paragraph(next, parent)
        if (first.kind === 'paragraph') {
          first.inlines = [...inlines(first, [], node.startIndex, next.startIndex), ...first.inlines]
          first.s = node.startIndex
          first.error = true
          out.push(first, ...rest)
          i++
          continue
        }
      }
      // '::' alone on its line only says that a literal block follows
      if (node.type === '::' && next?.type === 'literal_block') {
        hidden.push([node.startIndex, node.endIndex])
        continue
      }
      out.push(...convert(node, parent))
    }
    return out
  }

  const root = { kind: 'document', type: 'document', s: 0, e: source.length, parent: null }
  root.children = blocks(tree.rootNode.children, root)
  leaves.sort((a, b) => a.s - b.s)
  return { root, leaves, hidden, source, lineStarts }
}

// The leaf that holds the caret at a source offset. At a boundary between two
// leaves the one that ends there wins, so the caret stays where the user typed.
export function leafAt(model, offset) {
  let found
  for (const item of model.leaves) {
    if (item.s > offset) break
    if (item.kind !== 'soft' && offset <= item.e) {
      if (offset > item.s) return item
      found ??= item
    }
  }
  return found
}

// The end of the empty lines after a directive that are indented as its
// content: the place of the content that is not written yet
export function contentReach(model, directive) {
  const { source } = model
  const column = directive.s - (source.lastIndexOf('\n', directive.s - 1) + 1)
  let reach = directive.e
  let at = source.indexOf('\n', directive.e)
  while (at !== -1) {
    const next = source.indexOf('\n', at + 1)
    const line = source.slice(at + 1, next === -1 ? source.length : next)
    if (line.trim() !== '') break
    if (line.length > column) reach = at + 1 + line.length
    at = next
  }
  return reach
}

// The deepest block whose lines contain the offset
export function blockAt(model, offset) {
  const { source } = model
  const reach = b => {
    if (b.kind === 'directive') return Math.max(contentReach(model, b), b.e)
    let e = b.e
    while (e < source.length && (source[e] === ' ' || source[e] === '\t')) e++
    return e
  }
  let current = model.root
  for (;;) {
    const next = (current.children ?? []).find(c => c.s <= offset && offset <= reach(c))
    if (!next) return current
    current = next
  }
}

export function ancestor(b, kind) {
  for (let at = b; at; at = at.parent)
    if (at.kind === kind) return at
  return undefined
}
