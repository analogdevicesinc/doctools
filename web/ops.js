// What the user does in the view, as edits of the source.
//
// Every function returns { start, end, text, caret } or undefined when there
// is nothing to do: replace source.slice(start, end) with text, then put the
// caret at the source offset 'caret'. a and b are the ends of the selection,
// as source offsets with a <= b.

import { leafAt, blockAt, ancestor } from './model.js'
import { writeTable } from './table.js'

const INLINE = { bold: '**', italic: '*', code: '``' }

export function applyEdit(source, edit) {
  return source.slice(0, edit.start) + edit.text + source.slice(edit.end)
}

const edit = (start, end, text, caret = start + text.length) => ({ start, end, text, caret })

const lineStart = (source, offset) => source.lastIndexOf('\n', offset - 1) + 1
const lineEnd = (source, offset) => {
  const at = source.indexOf('\n', offset)
  return at === -1 ? source.length : at
}
const isBlank = text => /^[ \t]*$/.test(text)
const lineOf = (source, offset) => source.slice(lineStart(source, offset), lineEnd(source, offset))

// Step over a whole character, not half of a surrogate pair
const before = (source, offset) => {
  const code = source.charCodeAt(offset - 1)
  return code >= 0xdc00 && code <= 0xdfff && offset >= 2 ? offset - 2 : offset - 1
}
const after = (source, offset) => {
  const code = source.charCodeAt(offset)
  return code >= 0xd800 && code <= 0xdbff && offset + 2 <= source.length ? offset + 2 : offset + 1
}

// Text typed where there is no text yet becomes a paragraph of its own
function insertBlock(source, offset, text) {
  const ls = lineStart(source, offset)
  const le = lineEnd(source, offset)
  if (!isBlank(source.slice(ls, le)))
    return edit(offset, offset, text)
  const head = ls > 0 && !isBlank(lineOf(source, ls - 1)) ? '\n' : ''
  const tail = le < source.length && !isBlank(lineOf(source, le + 1)) ? '\n' : ''
  const missing = le === source.length ? '\n' : ''
  return edit(offset, offset, head + text + tail + missing, offset + head.length + text.length)
}

function insertTextRaw(model, a, b, text) {
  const { source } = model
  if (a === b && !leafAt(model, a) && !blockAt(model, a).marker)
    return insertBlock(source, a, text)
  return edit(a, b, text)
}

const neighbour = (model, item, step) => model.leaves[model.leaves.indexOf(item) + step]

// The run of blank lines around an offset: [start, end), end is the start of
// the next line with text
function blankRun(source, offset) {
  let start = lineStart(source, offset)
  while (start > 0 && isBlank(lineOf(source, start - 1))) start = lineStart(source, start - 1)
  let end = lineEnd(source, offset)
  while (end < source.length && isBlank(lineOf(source, end + 1))) end = lineEnd(source, end + 1)
  return [start, Math.min(end + 1, source.length)]
}

const onBlankLine = (model, offset) =>
  !leafAt(model, offset) && !blockAt(model, offset).marker && isBlank(lineOf(model.source, offset))

// Take the item out of its list, its text stays as a paragraph
function unlist(source, item, caret) {
  const ls = lineStart(source, item.marker.s)
  const head = ls > 0 && !isBlank(lineOf(source, ls - 1)) ? '\n' : ''
  const first = item.children[0]
  const to = first ? first.s : Math.min(item.marker.e + 1, lineEnd(source, item.marker.e))
  return edit(ls, to, head, caret ?? ls + head.length)
}

function deleteBackwardRaw(model, a, b) {
  const { source } = model
  if (a !== b) return edit(a, b, '')
  if (a === 0) return undefined

  const item = leafAt(model, a)
  if (item && a > item.s)
    return edit(before(source, a), a, '')

  const owner = item ? item.block : blockAt(model, a)
  const listItem = ancestor(owner, 'item')
  const previous = item ? neighbour(model, item, -1) : [...model.leaves].reverse().find(l => l.e <= a)

  // Inside a block: remove the character before the hidden markup
  if (item && previous && previous.block === item.block) {
    if (previous.kind === 'soft') return edit(previous.s, previous.e, '')
    if (previous.e > previous.s) return edit(before(source, previous.e), previous.e, '', before(source, previous.e))
  }

  // At the start of a list item: the item becomes a paragraph
  if (listItem?.marker && (!listItem.children.length || listItem.children[0] === owner) &&
      (!item || !previous || previous.block !== item.block))
    return unlist(source, listItem)

  // On an empty line: remove it and go back to the end of the text before
  if (onBlankLine(model, a)) {
    const [start, end] = blankRun(source, a)
    const text = start === 0 || end === source.length ? '' : '\n'
    return edit(start, end, text, previous ? previous.e : 0)
  }

  // Join with the block before when only blank space is between them
  const from = previous ? previous.oe : 0
  if (isBlank(source.slice(from, a).replace(/\n/g, '')) && from < a)
    return edit(from, a, '')
  return undefined
}

function deleteForwardRaw(model, a, b) {
  const { source } = model
  if (a !== b) return edit(a, b, '')
  if (a >= source.length) return undefined

  const item = leafAt(model, a)
  if (item && a < item.e)
    return edit(a, after(source, a), '', a)

  const next = item ? neighbour(model, item, 1) : model.leaves.find(l => l.s >= a)
  if (!next) return undefined
  if (item && next.block === item.block) {
    if (next.kind === 'soft') return edit(next.s, next.e, '', a)
    if (next.e > next.s) return edit(next.s, after(source, next.s), '', a)
  }
  if (isBlank(source.slice(a, next.os).replace(/\n/g, '')) && a < next.os)
    return edit(a, next.os, '', a)
  return undefined
}

function nextMarker(marker) {
  const number = marker.match(/^(\d+)([.)])$/)
  return number ? `${Number(number[1]) + 1}${number[2]}` : marker
}

// Enter
function insertParagraphRaw(model, a, b) {
  const { source } = model
  const item = leafAt(model, a)
  const owner = item ? item.block : blockAt(model, a)

  // In a heading: start a paragraph below it
  const heading = ancestor(owner, 'heading')
  if (heading) {
    const at = lineEnd(source, Math.max(heading.e - 1, heading.s))
    const blank = at === source.length || isBlank(lineOf(source, at + 1))
    return blank ? edit(at, at, '\n\n', at + 2) : edit(at, at, '\n\n\n', at + 2)
  }

  // In source shown as-is: a new line with the same indentation
  if (owner.kind === 'raw') {
    const indent = lineOf(source, a).match(/^[ \t]*/)[0]
    const keep = Math.min(indent.length, a - lineStart(source, a))
    return edit(a, b, '\n' + indent.slice(0, keep))
  }

  // In a list item: a new item, or leave the list from an empty item
  const listItem = ancestor(owner, 'item')
  if (listItem?.marker) {
    if (!listItem.children.length) {
      const ls = lineStart(source, listItem.marker.s)
      const le = lineEnd(source, listItem.marker.s)
      const head = ls > 0 && !isBlank(lineOf(source, ls - 1)) ? '\n' : ''
      return edit(ls, le, head, ls + head.length)
    }
    if (listItem.children[0] === owner) {
      const ls = lineStart(source, listItem.marker.s)
      const indent = source.slice(ls, listItem.marker.s)
      const marker = nextMarker(source.slice(listItem.marker.s, listItem.marker.e))
      return edit(a, b, `\n${indent}${marker} `)
    }
  }

  // An empty line is already a paragraph break, there is nothing to add
  if (!item)
    return undefined

  // Split the paragraph, the new one keeps the indentation
  const indent = ' '.repeat(owner.s - lineStart(source, owner.s))
  let from = a
  while (from > owner.s && (source[from - 1] === ' ' || source[from - 1] === '\t')) from--
  let to = b
  while (to < source.length && (source[to] === ' ' || source[to] === '\t')) to++
  if (to < owner.e && source[to] === '\n') {
    // At a line break inside the paragraph: the next line starts the new one
    to++
    while (to < owner.e && (source[to] === ' ' || source[to] === '\t')) to++
  }
  if (to >= owner.e) {
    // At the end: an empty line to type in
    const le = lineEnd(source, b)
    const blank = le === source.length || isBlank(lineOf(source, le + 1))
    const text = `\n\n${indent}` + (blank ? '' : '\n')
    return edit(from, le, text, from + 2 + indent.length)
  }
  return edit(from, to, `\n\n${indent}`)
}

// kind: bold, italic or code. Wraps the selection, or removes the markup
// when the selection is exactly the text of a leaf of that kind.
function toggleInlineRaw(model, a, b, kind) {
  const { source } = model
  const mark = INLINE[kind]
  const names = { bold: 'strong', italic: 'emphasis', code: 'literal' }
  const item = leafAt(model, b)
  if (item && item.kind === names[kind] && (a === b || (a === item.s && b === item.e))) {
    const text = source.slice(item.s, item.e)
    return { start: item.os, end: item.oe, text, caret: item.os + (b - item.s), anchor: a === b ? undefined : item.os }
  }
  if (a === b) return undefined
  let from = a, to = b
  while (from < to && /\s/.test(source[from])) from++
  while (to > from && /\s/.test(source[to - 1])) to--
  if (from === to || source.slice(from, to).includes('\n')) return undefined
  const text = mark + source.slice(from, to) + mark
  return { start: from, end: to, text, caret: to + mark.length, anchor: from + mark.length }
}

// Tables ----------------------------------------------------------------------

function tablesOf(model) {
  if (!model.tables) {
    model.tables = []
    const walk = b => {
      if (b.kind === 'table') model.tables.push(b)
      for (const child of b.children ?? []) walk(child)
    }
    walk(model.root)
  }
  return model.tables
}

// The cell of the caret: { table, row, cell, line, r, c, i }
function cellAt(model, offset) {
  const item = leafAt(model, offset)
  const owner = item ? item.block : blockAt(model, offset)
  const cell = ancestor(owner, 'cell')
  if (!cell) return undefined
  const row = cell.parent
  const table = row.parent
  const line = ancestor(owner, 'line')
  return {
    table, row, cell, line,
    r: table.children.indexOf(row), c: row.children.indexOf(cell), i: line ? cell.children.indexOf(line) : 0
  }
}

// Where the caret goes in a cell
function cellStart(model, cell) {
  const first = model.leaves.find(l => l.kind !== 'soft' && l.s >= cell.s && l.e <= cell.e && ancestor(l.block, 'cell') === cell)
  if (first) return first.s
  const end = lineEnd(model.source, cell.marker.e)
  return Math.min(cell.marker.e + 1, end)
}

const isEmptyRow = (model, row) =>
  model.leaves.every(l => ancestor(l.block, 'row') !== row || model.source.slice(l.s, l.e).trim() === '')

// The text of the lines of the cells of a grid or simple table
const textOf = (model, table) => table.children.map(row =>
  row.children.map(cell => cell.children.map(line => model.source.slice(line.s, line.e).replace(/\s+$/, ''))))

// Write a grid or simple table again. at: [row, column, line, offset in the line]
function rewrite(model, table, rows, at, headers = table.headers) {
  const { text, offsets } = writeTable(table.format, rows, { headers, indent: table.indent, gap: table.gap })
  const caret = table.s + offsets[at[0]][at[1]][at[2]] + at[3]
  return { start: table.s, end: table.e, text, caret }
}

// An edit that touches a grid or simple table is made on the text of one
// cell and the table is written again, so it stays aligned. An edit that
// would break the table is dropped.
function guard(model, change) {
  if (!change) return change
  for (const table of tablesOf(model)) {
    if (table.format === 'list') continue
    const inside = offset => offset >= table.s && offset <= table.e
    if (!inside(change.start) && !inside(change.end) && !(change.start < table.s && change.end > table.e)) continue
    if (change.start <= table.s && change.end >= table.e && change.end > change.start) continue

    const at = cellAt(model, change.start)
    const line = at?.line
    if (!line || at.table !== table || change.start < line.s || change.end > line.e) return undefined

    const before = model.source.slice(line.s, line.e)
    // A cell line holds one line of text
    const inserted = change.text.replace(/\s*\n\s*/g, ' ')
    const shorter = change.text.length - inserted.length
    let text = before.slice(0, change.start - line.s) + inserted + before.slice(change.end - line.s)
    const columnOf = offset => offset - line.s - (offset >= change.start + change.text.length ? shorter : 0)
    let caret = columnOf(change.caret)
    let anchor = change.anchor === undefined ? undefined : columnOf(change.anchor)
    if (before.trim() === '') {
      const lead = text.length - text.trimStart().length
      text = text.slice(lead)
      caret = Math.max(caret - lead, 0)
      if (anchor !== undefined) anchor = Math.max(anchor - lead, 0)
    }
    // The space just typed at the end is kept until more is typed
    text = text.slice(0, Math.max(text.trimEnd().length, Math.min(caret, text.length)))

    const rows = textOf(model, table)
    rows[at.r][at.c][at.i] = text
    const result = rewrite(model, table, rows, [at.r, at.c, at.i, caret])
    if (anchor !== undefined) result.anchor = result.caret - caret + anchor
    return result
  }
  return change
}

// A new row below the one of the caret
function insertRow(model, at) {
  const { source } = model
  const { table, row } = at
  if (table.format !== 'list') {
    const rows = textOf(model, table)
    rows.splice(at.r + 1, 0, row.children.map(() => ['']))
    return rewrite(model, table, rows, [at.r + 1, 0, 0, 0])
  }
  const indent = source.slice(lineStart(source, row.marker.s), row.marker.s)
  const outer = source.slice(row.marker.s, row.marker.e)
  const inner = source.slice(row.children[0].marker.s, row.children[0].marker.e)
  const pad = ' '.repeat(outer.length + 1)
  const lines = row.children.map((_, c) => `${indent}${c === 0 ? outer + ' ' : pad}${inner} `)
  const end = lineEnd(source, Math.max(row.e - 1, row.s))
  return edit(end, end, '\n' + lines.join('\n'), end + 1 + lines[0].length)
}

// Remove the row of the caret, the caret goes to the end of the row above
function deleteRow(model, at) {
  const { source } = model
  const { table, row } = at
  if (table.children.length < 2) return undefined
  const above = table.children[at.r - 1]
  if (table.format !== 'list') {
    const rows = textOf(model, table)
    rows.splice(at.r, 1)
    const headers = at.r < table.headers ? table.headers - 1 : table.headers
    if (!above) return rewrite(model, table, rows, [0, 0, 0, 0], headers)
    const c = above.children.length - 1
    const i = rows[at.r - 1][c].length - 1
    return rewrite(model, table, rows, [at.r - 1, c, i, rows[at.r - 1][c][i].length], headers)
  }
  const start = lineStart(source, row.marker.s)
  const end = Math.min(lineEnd(source, Math.max(row.e - 1, row.s)) + 1, source.length)
  const previous = [...model.leaves].reverse().find(l => l.e <= start && l.kind !== 'soft')
  if (!above) return edit(start, end, '', start + (cellStart(model, row.children[0]) - start))
  return edit(start, end, '', previous ? previous.e : start)
}

// Tab and Shift+Tab: the next or previous cell, a new row after the last one.
// Returns { caret } or an edit, undefined when the caret is not in a table.
export function tableStep(model, offset, step) {
  const at = cellAt(model, offset)
  if (!at) return undefined
  const cells = at.table.children.flatMap(row => row.children)
  const next = cells[cells.indexOf(at.cell) + step]
  if (next) return { caret: cellStart(model, next) }
  return step > 0 ? insertRow(model, at) : { caret: offset }
}

export function insertText(model, a, b, text) {
  return guard(model, insertTextRaw(model, a, b, text))
}

export function deleteBackward(model, a, b) {
  const at = a === b ? cellAt(model, a) : undefined
  if (at) {
    // At the start of an empty row: remove the row
    if (a === cellStart(model, at.row.children[0]) && isEmptyRow(model, at.row))
      return deleteRow(model, at)
    // The cells are not joined
    const item = leafAt(model, a)
    if (!item || (a === item.s && model.leaves[model.leaves.indexOf(item) - 1]?.block !== item.block))
      return undefined
  }
  return guard(model, deleteBackwardRaw(model, a, b))
}

export function deleteForward(model, a, b) {
  const at = a === b ? cellAt(model, a) : undefined
  if (at) {
    const item = leafAt(model, a)
    if (!item || (a === item.e && model.leaves[model.leaves.indexOf(item) + 1]?.block !== item.block))
      return undefined
  }
  return guard(model, deleteForwardRaw(model, a, b))
}

export function insertParagraph(model, a, b) {
  const at = cellAt(model, a)
  if (at) return a === b || cellAt(model, b)?.cell === at.cell ? insertRow(model, at) : undefined
  return guard(model, insertParagraphRaw(model, a, b))
}

export function toggleInline(model, a, b, kind) {
  return guard(model, toggleInlineRaw(model, a, b, kind))
}
