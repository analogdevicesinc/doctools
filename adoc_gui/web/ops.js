// What the user does in the view, as edits of the source.
//
// Every function returns { start, end, text, caret } or undefined when there
// is nothing to do: replace source.slice(start, end) with text, then put the
// caret at the source offset 'caret'. a and b are the ends of the selection,
// as source offsets with a <= b.

import { leafAt, blockAt, ancestor, contentReach } from './model.js'
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

// Directives -------------------------------------------------------------------

const within = (block, parent) => {
  for (let at = block; at; at = at.parent)
    if (at === parent) return true
  return false
}

const hasContent = directive => directive.children.some(c => c.kind !== 'caption' && c.kind !== 'options')

// Go to the content of a directive: an empty line, indented, is added for it
// when there is none. The text is typed there.
export function openContent(model, directive, text = '') {
  const { source } = model
  if (hasContent(directive)) {
    const first = model.leaves.find(l => l.s >= directive.headEnd && within(l.block, directive))
    if (!first) return undefined
    // Source shown as-is starts with its indentation
    let caret = first.s
    while (first.kind === 'raw' && caret < first.e && source[caret] === ' ') caret++
    return { start: caret, end: caret, text: '', caret }
  }
  const indent = ' '.repeat(directive.s - lineStart(source, directive.s) + 3)
  const reach = contentReach(model, directive)
  if (reach > directive.headEnd && !text) return { start: reach, end: reach, text: '', caret: reach }
  const end = Math.max(reach, directive.headEnd)
  const after = lineEnd(source, end)
  const tail = after < source.length && !isBlank(lineOf(source, after + 1)) ? '\n' : ''
  const head = `\n\n${indent}${text}`
  return edit(directive.headEnd, end, head + tail, directive.headEnd + head.length)
}

// From the caption of a directive, go to its content, or to where it is
// written when there is none yet. undefined when the caret is not there.
export function intoContent(model, offset) {
  const owner = leafAt(model, offset)?.block
  if (owner?.kind !== 'caption' || !owner.parent.takesContent) return undefined
  return openContent(model, owner.parent)
}

// Options ----------------------------------------------------------------------

// A new option for a directive, after the ones it has. Its name is selected,
// to type the name over it.
export function addOption(model, directive) {
  const { source } = model
  const indent = ' '.repeat(directive.s - lineStart(source, directive.s) + 3)
  const at = directive.headEnd
  const name = 'option'
  const start = at + 1 + indent.length + 1
  return { start: at, end: at, text: `\n${indent}:${name}:`, anchor: start, caret: start + name.length }
}

// From the name of an option to its value: { caret }
function optionValue(model, offset) {
  const item = leafAt(model, offset)
  if (item?.kind !== 'name' || item.block.kind !== 'option') return undefined
  const value = item.block.inlines[item.block.inlines.length - 1]
  return { start: offset, end: offset, text: '', caret: value.e }
}

// A new label before a heading, its name is selected to type over it
export function addLabel(model, heading) {
  const { source } = model
  const at = lineStart(source, heading.s)
  const head = at > 0 && !isBlank(lineOf(source, at - 1)) ? '\n' : ''
  const name = 'label'
  const start = at + head.length + 4
  return { start: at, end: at, text: `${head}.. _${name}:\n\n`, anchor: start, caret: start + name.length }
}

function removeTarget(model, target) {
  const { source } = model
  const start = lineStart(source, target.s)
  let end = Math.min(lineEnd(source, target.e) + 1, source.length)
  // The empty line after it goes with it, unless it parts two blocks
  if (end < source.length && isBlank(lineOf(source, end)) && (start === 0 || isBlank(lineOf(source, start - 1))))
    end = Math.min(lineEnd(source, end) + 1, source.length)
  const next = model.leaves.find(l => l.s >= end && l.kind !== 'soft')
  return edit(start, end, '', next ? next.s - (end - start) : start)
}

// Remove a side element: an option or a label
export function removeSide(model, block) {
  if (block.kind === 'option') return removeOption(model, block)
  if (block.kind === 'target') return removeTarget(model, block)
  return undefined
}

function removeOption(model, option) {
  const { source } = model
  const start = lineStart(source, option.s)
  const previous = [...model.leaves].reverse().find(l => l.e < start && l.kind !== 'soft')
  return edit(start - 1, lineEnd(source, option.e), '', previous ? previous.e : start - 1)
}

// A new tab at the end of a tab set, the caret goes to its empty title
export function addTab(model, tabSet) {
  const { source } = model
  const items = tabSet.children.filter(c => c.kind === 'directive' && c.name === 'tab-item')
  const last = items[items.length - 1]
  const column = last
    ? last.s - lineStart(source, last.s)
    : tabSet.s - lineStart(source, tabSet.s) + 3
  const at = last ? lineEnd(source, Math.max(contentReach(model, last), last.e)) : tabSet.headEnd
  const head = `\n\n${' '.repeat(column)}.. tab-item::`
  const tail = lineEnd(source, at) < source.length && !isBlank(lineOf(source, at + 1)) ? '\n' : ''
  return edit(at, at, head + tail, at + head.length)
}

// A directive with nothing written in it, its options aside
const isBlankDirective = (model, directive) => model.leaves.every(l =>
  !within(l.block, directive) || ancestor(l.block, 'options') ||
  model.source.slice(l.s, l.e).trim() === '')

function removeDirective(model, directive) {
  const { source } = model
  let start = lineStart(source, directive.s)
  const reach = Math.max(contentReach(model, directive), directive.e)
  const end = Math.min(lineEnd(source, reach) + 1, source.length)
  // One of the empty lines around it goes with it
  if (start > 0 && isBlank(lineOf(source, start - 1)) && (end === source.length || isBlank(lineOf(source, end))))
    start = lineStart(source, start - 1)
  const previous = [...model.leaves].reverse().find(l => l.e <= start && l.kind !== 'soft')
  return edit(start, end, '', previous ? previous.e : start)
}

// The caret on an empty line below source shown as-is, such as code, and
// indented as it: what is typed there goes on with it
function continuesRaw(model, offset) {
  const { source } = model
  if (leafAt(model, offset) || !isBlank(lineOf(source, offset))) return undefined
  const previous = [...model.leaves].reverse().find(l => l.e <= offset)
  if (!previous || previous.kind !== 'raw' || !previous.block.code) return undefined
  if (source.slice(previous.e, offset).trim() !== '') return undefined
  const indent = lineOf(source, previous.s).match(/^[ \t]*/)[0].length
  return indent > 0 && offset - lineStart(source, offset) >= indent ? previous : undefined
}

function insertTextRaw(model, a, b, text) {
  const { source } = model
  if (a === b) {
    const item = leafAt(model, a)
    const owner = item ? item.block : blockAt(model, a)
    // The argument of a directive, and the value of an option, come after a space
    if (item && item.s === item.e && owner.empty && (owner.kind === 'caption' || owner.kind === 'option'))
      return edit(a, a, (source[a - 1] === ' ' ? '' : ' ') + text)
    // In a directive without a caption nor content: the text is its content
    if (!item && owner.kind === 'directive' && !hasContent(owner) && a <= owner.headEnd)
      return openContent(model, owner, text)
    // On an empty line of code: the text is indented as the code
    if (item?.kind === 'raw' && owner.code && item.s === item.e) {
      const missing = owner.indent - (a - lineStart(source, a))
      if (missing > 0) return edit(a, a, ' '.repeat(missing) + text)
    }
    if (!item && continuesRaw(model, a))
      return edit(a, a, text)
    if (!item && !owner.marker)
      return insertBlock(source, a, text)
  }
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

// Two paragraphs next to each other can be joined
const joins = (first, second) =>
  first !== second && first.kind === 'paragraph' && second.kind === 'paragraph' && first.parent === second.parent

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

  // Join with the paragraph before, in the same container
  if (previous && joins(previous.block, owner) && isBlank(source.slice(previous.oe, a).replace(/\n/g, '')))
    return edit(previous.oe, a, '')
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
  if (item && joins(item.block, next.block) && isBlank(source.slice(a, next.os).replace(/\n/g, '')))
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

  if (!item) {
    // On an empty line of code: leave the code, the line is not indented anymore
    if (continuesRaw(model, a)) {
      const start = lineStart(source, a)
      return edit(start, lineEnd(source, a), '', start)
    }
    // After the line of a directive: go to its content
    if (owner.kind === 'directive' && a <= owner.headEnd) return openContent(model, owner)
    // An empty line is already a paragraph break, there is nothing to add
    return undefined
  }

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

// Headings --------------------------------------------------------------------

// An edit of the title of a heading also makes its adornments as long as
// the new title
function adorn(model, change) {
  if (!change) return change
  const { source } = model
  const heading = ancestor(leafAt(model, change.start)?.block ?? blockAt(model, change.start), 'heading')
  if (!heading?.marks?.length) return change
  const titleEnd = lineEnd(source, heading.title.s)
  if (change.start < heading.title.s || change.end > titleEnd || change.text.includes('\n')) return change

  const title = source.slice(heading.title.s, change.start) + change.text + source.slice(change.end, titleEnd)
  const width = Math.max([...title.trim()].length, 1)
  const pieces = [
    ...heading.marks.map(mark => ({ s: mark.s, e: mark.e, text: source[mark.s].repeat(width) })),
    { s: change.start, e: change.end, text: change.text, change: true }
  ].sort((x, y) => x.s - y.s)

  const start = Math.min(heading.s, pieces[0].s)
  const end = Math.max(heading.e, pieces[pieces.length - 1].e)
  let text = ''
  let at = start
  let shift = 0
  for (const piece of pieces) {
    text += source.slice(at, piece.s) + piece.text
    at = piece.e
    // What is before the title moves the caret
    if (!piece.change && piece.s < change.start) shift += piece.text.length - (piece.e - piece.s)
  }
  text += source.slice(at, end)
  const result = { start, end, text, caret: change.caret + shift }
  if (change.anchor !== undefined) result.anchor = change.anchor + shift
  return result
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
  if (step > 0) {
    const value = optionValue(model, offset)
    if (value) return { caret: value.caret }
  }
  const at = cellAt(model, offset)
  if (!at) return undefined
  const cells = at.table.children.flatMap(row => row.children)
  const next = cells[cells.indexOf(at.cell) + step]
  if (next) return { caret: cellStart(model, next) }
  return step > 0 ? insertRow(model, at) : { caret: offset }
}

// The adornments typed on the empty line after a one-line paragraph make it a
// heading: 'Title', Enter, '=' is 'Title\n=====\n'
export const UNDERLINES = new Set(['=', '-', '~', '^', '"', "'", '#', '+'])

function underline(model, offset, marker) {
  const { source } = model
  if (!UNDERLINES.has(marker) || !isBlank(lineOf(source, offset))) return undefined
  // The line before is blank, and the one before it is the paragraph
  const blank = lineStart(source, offset) - 1
  if (blank < 1 || !isBlank(lineOf(source, blank))) return undefined
  const titleEnd = blank - 1
  const paragraph = blockAt(model, Math.max(titleEnd - 1, 0))
  if (paragraph?.kind !== 'paragraph' || paragraph.parent?.kind !== 'document') return undefined
  const title = source.slice(paragraph.s, titleEnd)
  if (paragraph.s !== lineStart(source, paragraph.s) || !title.trim() || title.includes('\n')) return undefined
  if (lineEnd(source, paragraph.s) !== titleEnd) return undefined

  const end = lineEnd(source, offset)
  const rest = source.slice(end)
  // A blank line between the heading and what follows it
  const tail = !rest ? '\n' : /^\n[ \t]*\S/.test(rest) ? '\n' : ''
  const text = `\n${marker.repeat([...title.trim()].length)}${tail}`
  return { ...edit(titleEnd, end, text, titleEnd), underline: marker }
}

export function insertText(model, a, b, text) {
  if (a === b && text.length === 1) {
    const heading = underline(model, a, text)
    if (heading) return heading
  }
  const owner = leafAt(model, a)?.block
  // The colon that ends the name of an option goes to its value
  if (text === ':' && a === b && owner?.kind === 'option') {
    const value = optionValue(model, a)
    if (value) return value
  }
  if (owner && ONE_LINE.has(owner.kind)) text = text.replace(/\s*\n\s*/g, ' ')
  return guard(model, adorn(model, insertTextRaw(model, a, b, text)))
}

export function deleteBackward(model, a, b) {
  // An option goes with its name: with the last character of the name, or
  // at the start of the name when it has no value
  if (a === b) {
    const item = leafAt(model, a)
    if (item?.kind === 'name' && item.block.kind === 'option') {
      const option = item.block
      if ((a === item.e && item.e - item.s === 1) || (a === item.s && option.empty)) return removeOption(model, option)
      if (a === item.s) return undefined
    }
  }
  // In the head of a directive with nothing in it: remove the directive
  if (a === b) {
    const directive = ancestor(leafAt(model, a)?.block ?? blockAt(model, a), 'directive')
    if (directive && a <= directive.headEnd && isBlankDirective(model, directive))
      return removeDirective(model, directive)
  }
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
  return guard(model, adorn(model, deleteBackwardRaw(model, a, b)))
}

export function deleteForward(model, a, b) {
  const at = a === b ? cellAt(model, a) : undefined
  if (at) {
    const item = leafAt(model, a)
    if (!item || (a === item.e && model.leaves[model.leaves.indexOf(item) + 1]?.block !== item.block))
      return undefined
  }
  return guard(model, adorn(model, deleteForwardRaw(model, a, b)))
}

// Blocks that hold one line: a caption, an option, a label
const ONE_LINE = new Set(['caption', 'option', 'target'])

export function insertParagraph(model, a, b) {
  const owner = leafAt(model, a)?.block
  // From the caption of a directive, Enter goes to its content
  if (owner?.kind === 'caption' && owner.parent.takesContent) return openContent(model, owner.parent)
  if (owner?.kind === 'option') return optionValue(model, a)
  if (owner && ONE_LINE.has(owner.kind)) return undefined
  const at = cellAt(model, a)
  if (at) return a === b || cellAt(model, b)?.cell === at.cell ? insertRow(model, at) : undefined
  return guard(model, insertParagraphRaw(model, a, b))
}

export function toggleInline(model, a, b, kind) {
  return guard(model, adorn(model, toggleInlineRaw(model, a, b, kind)))
}
