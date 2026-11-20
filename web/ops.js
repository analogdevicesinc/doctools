// What the user does in the view, as edits of the source.
//
// Every function returns { start, end, text, caret } or undefined when there
// is nothing to do: replace source.slice(start, end) with text, then put the
// caret at the source offset 'caret'. a and b are the ends of the selection,
// as source offsets with a <= b.

import { leafAt, blockAt, ancestor } from './model.js'

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

export function insertText(model, a, b, text) {
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

export function deleteBackward(model, a, b) {
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

export function deleteForward(model, a, b) {
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
export function insertParagraph(model, a, b) {
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
export function toggleInline(model, a, b, kind) {
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
