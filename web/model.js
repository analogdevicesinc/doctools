// Turn the tree-sitter tree of a reStructuredText source into the blocks and
// leaves that the view shows.
//
// A leaf is a piece of text the user edits: its text is exactly
// source.slice(leaf.s, leaf.e). The markup around the leaves (adornments,
// bullets, inline delimiters) is hidden and listed in model.hidden. What the
// model does not understand becomes a 'raw' leaf with the source as-is, so no
// content is ever dropped.

// Directives whose content is reStructuredText
const RST_DIRECTIVES = new Set([
  'attention', 'caution', 'danger', 'error', 'hint', 'important', 'note', 'tip', 'warning', 'admonition',
  'epigraph', 'highlights', 'pull-quote', 'compound', 'topic', 'sidebar', 'container'
])

import { readTable } from './table.js'

const DELIMITED = { strong: 2, emphasis: 1, literal: 2 }
const INLINE_KIND = {
  interpreted_text: 'role',
  reference: 'link',
  standalone_hyperlink: 'link'
}

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

  const leaf = (owner, kind, s, e, os = s, oe = e) => {
    const item = { kind, s, e, os, oe, block: owner }
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
      const width = DELIMITED[child.type]
      const s = child.startIndex, e = child.endIndex
      if (width && e - s > 2 * width)
        out.push(leaf(owner, child.type, s + width, e - width, s, e))
      else
        out.push(leaf(owner, INLINE_KIND[child.type] ?? 'markup', s, e))
      at = e
    }
    plain(owner, out, at, end)
    owner.e = Math.max(owner.e, end)
    return out
  }

  const raw = (node, parent, s = node.startIndex, e = node.endIndex, extra = {}) => {
    const b = { kind: 'raw', type: node.type, s, e, parent, ...extra }
    b.inlines = [leaf(b, 'raw', s, e)]
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
    b.inlines = inlines(b, title.children, title.startIndex, title.endIndex)
    return b
  }

  // The leaves of one line of a table cell, its inline markup is parsed
  const cellLine = (range, parent) => {
    const b = { kind: 'line', type: 'line', s: range.s, e: range.e, parent }
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
        c.children = cell.lines.map(range => cellLine(range, c))
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
        return [raw(node, parent, undefined, undefined, { code: true })]
    }
    const literal = node.children.find(c => c.type === 'literal_block')
    const end = literal ? node.children[node.children.indexOf(literal) - 1].endIndex : node.endIndex
    const b = block('paragraph', node, parent)
    b.e = end
    b.inlines = inlines(b, node.children.filter(c => c !== literal), node.startIndex, end)
    if (!literal) return [b]
    return [b, raw(literal, parent, lineStart(literal.startIndex), literal.endIndex, { code: true })]
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

  const directive = (node, parent) => {
    const name = node.children.find(c => c.type === 'type')?.text ?? ''
    const body = node.children.find(c => c.type === 'body')
    const content = body?.children.find(c => c.type === 'content')
    const b = block('directive', node, parent, { name, rst: RST_DIRECTIVES.has(name) })

    let headEnd = node.endIndex
    if (content) {
      const before = body.children[body.children.indexOf(content) - 1]
      headEnd = before ? before.endIndex : node.children.find(c => c.type === '::')?.endIndex ?? body.startIndex
    }
    b.children = [raw(node, b, node.startIndex, headEnd, { head: true })]
    if (content && name === 'list-table') {
      const kids = nested(content, b)
      const table = listTable(kids, b, source.slice(node.startIndex, headEnd))
      b.children.push(...(table ? [table] : kids))
    } else if (content && b.rst)
      b.children.push(...nested(content, b))
    else if (content)
      b.children.push(raw(content, b, lineStart(content.startIndex), content.endIndex, { code: true }))
    return b
  }

  const convert = (node, parent) => {
    if (node.isError || node.isMissing)
      return [raw(node, parent, undefined, undefined, { error: true })]
    switch (node.type) {
      case 'section': return [heading(node, parent)]
      case 'paragraph': return paragraph(node, parent)
      case 'bullet_list':
      case 'enumerated_list': return [list(node, parent)]
      case 'directive': return [directive(node, parent)]
      case 'block_quote': {
        const b = block('quote', node, parent)
        b.children = blocks(node.children, b)
        return [b]
      }
      default: return [raw(node, parent)]
    }
  }

  function blocks(nodes, parent) {
    return nodes.filter(n => n.endIndex > n.startIndex).flatMap(n => convert(n, parent))
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

// The deepest block whose lines contain the offset
export function blockAt(model, offset) {
  const { source } = model
  const reach = b => {
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
