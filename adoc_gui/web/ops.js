// What the user does in the view, as edits of the source.
//
// Every function returns { start, end, text, caret } or undefined when there
// is nothing to do: replace source.slice(start, end) with text, then put the
// caret at the source offset 'caret'. a and b are the ends of the selection,
// as source offsets with a <= b.

import { leafAt, blockAt, ancestor, contentReach } from './model.js'
import { writeTable } from './table.js'
import { linkOf, linkText } from './links.js'
import { requiresArgument } from './directives.js'

const INLINE = { bold: '**', italic: '*', code: '``' }

// A text as it is saved: without the spaces at the end of its lines. The
// editor keeps them while it is typed in: the space before the next word,
// the place of the text of an empty cell.
export const withoutTrailing = text => text.replace(/[ \t]+(?=\n|$)/g, '')

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

// Whether the directive of the caret is still being written: it has no
// content yet, or not the argument it needs, or the caret is in its head
// with an argument or the value of an option to fill. A build of it would
// only warn about what is about to be written.
export function unfinishedAt(model, offset) {
  const item = leafAt(model, offset)
  const start = item?.block ?? blockAt(model, offset)
  const directive = start.kind === 'directive' ? start : ancestor(start, 'directive')
  if (!directive) return false
  if (directive.takesContent && !hasContent(directive)) return true
  const caption = directive.children.find(c => c.kind === 'caption')
  if (caption?.empty && requiresArgument(directive.name)) return true
  // In its head: its argument, its options
  const head = start === directive ? offset <= directive.headEnd : start.kind === 'caption' || Boolean(ancestor(start, 'options'))
  if (!head) return false
  const options = directive.children.find(c => c.kind === 'options')?.children ?? []
  return Boolean(caption?.empty) || options.some(option => option.kind === 'option' && option.empty && !option.flag)
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
  // Indented as the heading: a heading in a directive has its label in it
  const indent = lineOf(source, at).match(/^[ \t]*/)[0]
  const head = at > 0 && !isBlank(lineOf(source, at - 1)) ? '\n' : ''
  const name = 'label'
  const start = at + head.length + indent.length + 4
  return {
    start: at, end: at, text: `${head}${indent}.. _${name}:\n\n`, anchor: start, caret: start + name.length
  }
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

export function removeDirective(model, directive) {
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

// A new block after the block of the caret, as a block of its own, indented
// as it: in a list item, in a directive. On an empty line, there.
// make(indent): { text, caret }, the lines of the block, each indented, and
// where the caret goes in them.
function addBlock(model, offset, make) {
  const { source } = model
  const item = leafAt(model, offset)
  let anchor = item ? item.block : undefined
  // Not in a part of a block: after the whole of it
  const PARTS = new Set(['caption', 'options', 'option', 'line', 'cell', 'row'])
  while (anchor?.parent && (PARTS.has(anchor.kind) || PARTS.has(anchor.parent.kind) ||
    (anchor.parent.kind === 'directive' && (anchor.kind === 'table' || (anchor.kind === 'raw' && anchor.code)))))
    anchor = anchor.parent
  if (!anchor) {
    // On an empty line: there, with empty lines around it
    const ls = lineStart(source, offset)
    const le = lineEnd(source, offset)
    if (!isBlank(source.slice(ls, le))) return undefined
    const before = ls > 0 && !isBlank(lineOf(source, ls - 1)) ? '\n' : ''
    const after = le === source.length || !isBlank(lineOf(source, le + 1)) ? '\n' : ''
    const { text, caret } = make(source.slice(ls, le))
    return edit(ls, le, before + text + after, ls + before.length + caret)
  }
  const end = anchor.kind === 'directive' ? Math.max(contentReach(model, anchor), anchor.e) : anchor.e
  const at = lineEnd(source, Math.max(end - 1, anchor.s))
  const after = at === source.length || !isBlank(lineOf(source, at + 1)) ? '\n' : ''
  const { text, caret } = make(' '.repeat(anchor.s - lineStart(source, anchor.s)))
  return edit(at, at, `\n\n${text}${after}`, at + 2 + caret)
}

// A new directive after the block of the caret. lines: what it is filled
// with, its options and its content. The caret goes to its argument, or to
// where its content is written.
export function addDirective(model, offset, name, lines = []) {
  return addBlock(model, offset, indent => {
    const head = `${indent}.. ${name}::`
    return { text: head + lines.map(line => line ? `\n${indent}   ${line}` : '\n').join(''), caret: head.length }
  })
}

// A new table after the block of the caret, of rows and columns, with a row
// of headers: a 'list' table (the list-table directive) or a 'grid' table.
// The caret goes to its first cell.
export function addTable(model, offset, kind, rows, columns) {
  return addBlock(model, offset, indent => {
    if (kind === 'grid') {
      const width = 10
      const line = mark => `${indent}+${`${mark.repeat(width)}+`.repeat(columns)}`
      const cells = `${indent}|${`${' '.repeat(width)}|`.repeat(columns)}`
      // A table of one row has no header
      const lines = [line('-'), cells, line(rows > 1 ? '=' : '-')]
      for (let row = 1; row < rows; row++) lines.push(cells, line('-'))
      return { text: lines.join('\n'), caret: lines[0].length + 1 + indent.length + 2 }
    }
    const head = `${indent}.. list-table::\n${indent}   :header-rows: 1\n`
    // The space after the mark of an empty cell is where its text is typed
    const row = `\n${indent}   * - ${`\n${indent}     - `.repeat(columns - 1)}`
    return { text: head + row.repeat(rows), caret: head.length + `\n${indent}   * - `.length }
  })
}

// The link of the caret or of the selection, and the text it would have:
// { link, a, b, text }. link: the one the caret is in, or that is selected,
// undefined when a new one is made; a and b: what it replaces.
export function linkAt(model, a, b) {
  const { source } = model
  const leaf = model.leaves.find(l => l.kind === 'link' && l.os <= a && b <= l.oe && (a < l.oe || a === b))
  const link = linkOf(model, leaf)
  if (link) return { link, a: link.s, b: link.e, text: link.kind === 'address' ? '' : link.text }
  const selected = source.slice(a, b)
  if (selected.includes('\n') || selected.includes('`')) return undefined
  return { link: undefined, a, b, text: selected.trim() }
}

// Make the selection a link, or change the one of the caret: its text and
// its address. Without an address the link is text again. Only a link that
// holds its address is changed: the address of the others is written in
// another place of the document.
export function setLink(model, a, b, text, target) {
  const at = linkAt(model, a, b)
  if (!at || (at.link && at.link.kind !== 'embedded' && at.link.kind !== 'address')) return undefined
  const shown = text.replace(/\s+/g, ' ').trim()
  const address = target.replace(/\s+/g, '')
  if (!address) return at.link ? guard(model, edit(at.a, at.b, shown || at.link.text)) : undefined
  const written = linkText(shown, address, at.link ? at.link.anonymous : true)
  // The spaces of the selection stay around the link
  const picked = model.source.slice(at.a, at.b)
  const head = at.link ? '' : picked.match(/^\s*/)[0]
  const tail = at.link ? '' : picked.slice(head.length).match(/\s*$/)[0]
  // A link is parted from the letters around it, as inline markup must be
  const word = /[\p{L}\p{N}]/u
  const lead = !head && at.a > 0 && word.test(model.source[at.a - 1]) ? ' ' : ''
  const trail = !tail && word.test(model.source[at.b] ?? '') ? ' ' : ''
  return guard(model, edit(at.a, at.b, head + lead + written + trail + tail,
    at.a + head.length + lead.length + written.length))
}

// A substitution at the caret: '|name|', parted from the letters around it
export function addSubstitution(model, a, b, name) {
  const { source } = model
  const word = /[\p{L}\p{N}]/u
  const lead = a > 0 && word.test(source[a - 1]) ? ' ' : ''
  const trail = word.test(source[b] ?? '') ? ' ' : ''
  const written = `|${name}|`
  return guard(model, edit(a, b, lead + written + trail, a + lead.length + written.length))
}

// A new definition of a substitution, after the block of the caret: its
// name is selected, to type it
export function addDefinition(model, offset) {
  const name = 'name'
  const made = addBlock(model, offset, indent => ({ text: `${indent}.. |${name}| replace:: text`, caret: indent.length + 4 + name.length }))
  return made && { ...made, anchor: made.caret - name.length }
}

// A role at the caret, around the text that is selected: the caret goes in
// it, to write what it points to. A name that ends with '+' or '-' is the
// start of a role, which is completed after it.
export function addRole(model, a, b, name) {
  const { source } = model
  if (/[+-]$/.test(name)) return edit(a, b, `:${name}`)
  const selected = source.slice(a, b)
  if (selected.includes('\n') || selected.includes('`')) return undefined
  const text = `:${name}:\`${selected}\``
  return edit(a, b, text, a + text.length - 1)
}

// Leave a directive from the end of its content: an empty line after it, at
// its indentation, where the caret goes. The empty lines at the end of the
// content are not kept.
export function leaveDirective(model, directive) {
  const { source } = model
  const column = directive.s - lineStart(source, directive.s)
  const last = [...model.leaves].reverse().find(l => within(l.block, directive) && source.slice(l.s, l.e).trim() !== '')
  const from = lineEnd(source, last ? last.e : directive.headEnd)
  let to = from
  while (to < source.length && isBlank(lineOf(source, to + 1))) to = lineEnd(source, to + 1)
  return edit(from, to, `\n\n${' '.repeat(column)}\n`, from + 2 + column)
}

// The directive that ends right before the caret, when the caret is at the
// start of what follows it, or on the empty line after it: the blocks are
// one after the other, in the same block
function directiveBefore(model, a) {
  const { source } = model
  const item = leafAt(model, a)
  if (item ? a !== item.s : !isBlank(lineOf(source, a))) return undefined
  const owner = item ? item.block : blockAt(model, a)
  const previous = [...model.leaves].reverse().find(l => l.e <= a && l.kind !== 'soft' && l.block !== owner)
  if (!previous || source.slice(previous.e, a).trim() !== '') return undefined
  // The first text of its block, which is not in the directive
  if (item && model.leaves.some(l => l.block === owner && l.kind !== 'soft' && l.s < item.s)) return undefined
  let found
  for (let up = previous.block; up; up = up.parent)
    if (up.kind === 'directive' && !within(owner, up)) found = up
  if (!found) return undefined
  return found.parent === (item ? owner.parent : owner) ? found : undefined
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
    // In an empty list item or cell, right after its mark: the text comes
    // after a space, which is not kept in the file
    if (!item && owner.marker && a === owner.marker.e && (owner.kind === 'item' || owner.kind === 'cell') && !/^\s/.test(text))
      return edit(a, a, ` ${text}`)
    // The argument of a directive, the value of an option and the text of a
    // substitution come after a space
    if (item && item.s === item.e && owner.empty && ['caption', 'option', 'value', 'linerow'].includes(owner.kind))
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
  // It keeps the indentation of its list
  const head = (ls > 0 && !isBlank(lineOf(source, ls - 1)) ? '\n' : '') + source.slice(ls, item.marker.s)
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

  // In a line of a line block: a new line of the block, below it. On its
  // empty last line: out of the block, to an empty line after it
  if (owner.kind === 'linerow') {
    const rows = owner.parent.children
    const indent = ' '.repeat(owner.bar.s - lineStart(source, owner.bar.s))
    if (owner.empty && rows.length > 1 && rows[rows.length - 1] === owner) {
      const start = lineStart(source, owner.bar.s)
      const end = lineEnd(source, owner.bar.s)
      const tail = end < source.length && !isBlank(lineOf(source, end + 1)) ? '\n' : ''
      return edit(start, end, `\n${indent}${tail}`, start + 1 + indent.length)
    }
    return edit(a, b, `\n${indent}| `)
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
    // On the empty line at the end of the content of a directive: leave the
    // directive, the line goes to the indentation of the directive
    const outer = owner.kind === 'directive' ? owner : ancestor(owner, 'directive')
    if (outer && a > outer.headEnd && isBlank(lineOf(source, a))) {
      const column = outer.s - lineStart(source, outer.s)
      const start = lineStart(source, a)
      let next = lineEnd(source, a)
      while (next < source.length && isBlank(lineOf(source, next + 1))) next = lineEnd(source, next + 1)
      const follows = next < source.length ? lineOf(source, next + 1).match(/^[ \t]*/)[0].length : 0
      if (a - start > column && follows <= column)
        return edit(start, lineEnd(source, a), ' '.repeat(column))
    }
    // An empty line is already a paragraph break, there is nothing to add
    return undefined
  }

  // Split the paragraph, the new one keeps the indentation
  const indent = ' '.repeat(owner.s - lineStart(source, owner.s))
  // At its very start: an empty line before it, where the caret stays, to
  // write between it and what is before, a directive or another paragraph.
  // Empty lines are not shown: the paragraph only going down would not be seen.
  if (a === b && a === owner.s) return edit(a, a, `\n\n${indent}`, a)
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

// The adornments of the levels of the headings of the document, in the order
// they appear in: the character, with an 'o' before it when it is also above
// the title. A level that is not there yet takes the first character that is
// not used.
function adornmentOf(model, level) {
  const known = model.levels[level - 1]
  if (known) return known
  return [...UNDERLINES].find(mark => !model.levels.some(key => key.endsWith(mark)))
}

// What the block of the caret is, as a heading: { level, max, block }. level
// is 0 for text that can be a heading: a paragraph of one line of the
// document; max is the deepest level it can be given: one
// more than the heading before it, a level cannot be skipped.
// undefined for what cannot be a heading.
export function headingAt(model, offset) {
  const { source } = model
  const owner = leafAt(model, offset)?.block ?? blockAt(model, offset)
  const heading = ancestor(owner, 'heading')
  const block = heading?.marks?.length ? heading : owner
  const before = (block?.parent?.children ?? []).filter(other => other.kind === 'heading' && other.s < block.s).pop()
  const max = Math.min((before?.level ?? 0) + 1, model.levels.length + 1, UNDERLINES.size)
  if (block === heading) return { level: heading.level, max: Math.max(max, heading.level), block: heading }
  if (owner?.kind !== 'paragraph' || owner.parent?.kind !== 'document') return undefined
  const start = lineStart(source, owner.s)
  if (!isBlank(source.slice(start, owner.s)) || source.slice(owner.s, owner.e).includes('\n')) return undefined
  if (!source.slice(owner.s, lineEnd(source, owner.s)).trim()) return undefined
  return { level: 0, max, block: owner }
}

// Make the block of the caret a heading of a level, 0 makes a heading text
// again. The level is the one of the headings of the document that have the
// same adornment.
export function setHeading(model, offset, level) {
  const { source } = model
  const at = headingAt(model, offset)
  if (!at || level === at.level || level < 0 || level > at.max) return undefined
  const { block } = at
  const title = block.title ?? { s: block.s, e: lineEnd(source, block.s) }
  const marks = block.marks ?? []
  const start = lineStart(source, Math.min(title.s, ...marks.map(mark => mark.s)))
  const end = lineEnd(source, Math.max(title.e, ...marks.map(mark => mark.e)) - 1)
  const indent = source.slice(start, Math.min(title.s, ...marks.map(mark => mark.s)))
  const text = source.slice(title.s, lineEnd(source, title.s)).trimEnd()
  const caret = Math.min(Math.max(offset, title.s), title.s + text.length) - title.s

  // A blank line between it and what follows it
  const tail = end < source.length && !isBlank(lineOf(source, end + 1)) ? '\n' : ''
  if (level === 0) return edit(start, end, indent + text + tail, start + indent.length + caret)
  const key = adornmentOf(model, level)
  const line = indent + key[key.length - 1].repeat(Math.max([...text.trim()].length, 1))
  const head = key.length > 1 ? `${line}\n` : ''
  return edit(start, end, `${head}${indent}${text}\n${line}${tail}`, start + head.length + indent.length + caret)
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

// Nested lists ------------------------------------------------------------------

// The list item of the caret: the caret is in its text, not in a directive
// or a table that is in the item
function itemAt(model, offset) {
  for (let block = leafAt(model, offset)?.block ?? blockAt(model, offset); block; block = block.parent) {
    if (block.kind === 'item') return block.marker && offset >= block.marker.e ? block : undefined
    if (block.kind === 'directive' || block.kind === 'table' || block.kind === 'raw') return undefined
  }
  return undefined
}

// Tab and Shift+Tab in a list item: the item, with what is in
// it, goes one level in (into the item before it) or out (after the item it
// is in). A nested list is separated by an empty line from the text before
// it and from the outer list after it.
export function shiftItem(model, offset, step) {
  const item = itemAt(model, offset)
  if (!item) return undefined
  const { source, lineStarts } = model
  const lines = source.split('\n')
  const blank = i => lines[i].trim() === ''
  const indent = i => lines[i].match(/^[ \t]*/)[0].length
  const rowOf = at => {
    let row = 0
    while (row + 1 < lineStarts.length && lineStarts[row + 1] <= at) row++
    return row
  }
  // The lines that start a list item: { column of the marker, of the text }
  const items = new Map()
  const walk = block => {
    if (block.kind === 'item' && block.marker) {
      const row = rowOf(block.marker.s)
      const column = block.marker.s - lineStarts[row]
      const first = block.children[0]
      const text = first && rowOf(first.s) === row ? first.s - lineStarts[row] : block.marker.e - lineStarts[row] + 1
      items.set(row, { column, text })
    }
    for (const child of block.children ?? []) walk(child)
  }
  walk(model.root)

  const row = rowOf(item.marker.s)
  const { column, text } = items.get(row)
  const lastFilled = (from, to) => {
    let last = to
    while (last >= from && blank(last)) last--
    return last
  }
  // The item with what is in it: the lines after it that are indented more
  let end = row + 1
  while (end < lines.length && (blank(end) || indent(end) > column)) end++
  const last = lastFilled(row, end - 1)
  const before = lastFilled(0, row - 1)

  let target, delta, tight
  // The items after it in its list: they go in it, when it goes out
  let rest = []
  let after = last
  if (step > 0) {
    // In: into the item before it, at the same level
    let up = row - 1
    while (up >= 0 && (blank(up) || indent(up) > column)) up--
    const sibling = up >= 0 && indent(up) === column ? items.get(up) : undefined
    if (!sibling || sibling.column !== column) return undefined
    target = sibling.text
    delta = target - column
    // After the last item of the list that is in it already: no empty line
    let at = before
    while (at > up && indent(at) > target) at--
    tight = at > up && items.get(at)?.column === target
  } else {
    // Out: after the item it is in
    let up = row - 1
    while (up >= 0 && (blank(up) || indent(up) >= column)) up--
    const parent = up >= 0 ? items.get(up) : undefined
    if (!parent) return undefined
    target = parent.column
    delta = target - column
    let first = true
    for (let i = up + 1; i < row; i++) if (items.get(i)?.column === column) first = false
    // Right after the text of the item it was in: as the next item of its list
    let simple = true
    for (let i = up + 1, gap = false; i < row; i++) {
      if (blank(i)) gap = true
      else if (gap) simple = false
    }
    tight = first && simple
    let to = last + 1
    while (to < lines.length && (blank(to) || indent(to) >= column)) to++
    after = lastFilled(last, to - 1)
    const shift = text + delta - column
    rest = lines.slice(last + 1, after + 1)
    while (rest.length && rest[0].trim() === '') rest.shift()
    rest = rest.map(line => line.trim() === '' ? '' : shift >= 0 ? ' '.repeat(shift) + line : line.slice(Math.min(-shift, line.match(/^ */)[0].length)))
  }

  const moved = lines.slice(row, last + 1).map(line =>
    line.trim() === '' ? '' : delta >= 0 ? ' '.repeat(delta) + line : line.slice(-delta))
  let next = after + 1
  while (next < lines.length && blank(next)) next++
  const follows = next < lines.length
  // The item after it is the next item of its new list: no empty line
  const joins = follows && !rest.length && step < 0 && items.get(next)?.column === target

  const out = []
  if (!tight) out.push('')
  out.push(...moved)
  if (rest.length) out.push('', ...rest)
  if (follows && !joins) out.push('')

  const start = lineStarts[before + 1] ?? source.length
  const stop = follows ? lineStarts[next] : source.length
  const replacement = out.join('\n') + (follows || source.endsWith('\n') ? '\n' : '')
  // The caret stays where it is in the text
  const line = Math.min(rowOf(offset), last) - row
  let caret = start + (tight ? 0 : 1)
  for (let i = 0; i < line; i++) caret += moved[i].length + 1
  caret += Math.min(Math.max(offset - lineStarts[row + line] + delta, 0), moved[line].length)
  return { start, end: stop, text: replacement, caret }
}

// Wrapping ----------------------------------------------------------------------

// The text of the source is wrapped to fewer than 80 columns
export const WIDTH = 79

// A word that would be markup at the start of a line: a bullet, an
// enumerator, a directive or a comment, an adornment
const MARKUP_START = /^(?:[-*+•](?:\s|$)|#\.|\(?\w{1,3}[.)](?:\s|$)|\.\.(?:\s|$)|([=\-~^"'#+*:_`.])\1+(?:\s|$)|>>>|\|)/

// A typed line of a paragraph that gets longer than WIDTH is broken at a
// space before, as an editor with a text width does. The new line is
// indented as the text of the paragraph; roles, links and literals are kept
// on one line.
function wrap(model, change) {
  if (!change || change.text.includes('\n')) return change
  const owner = leafAt(model, change.start)?.block ?? blockAt(model, change.start)
  if (owner?.kind !== 'paragraph' || ancestor(owner, 'cell') || ancestor(owner, 'table')) return change

  let source = applyEdit(model.source, change)
  const delta = change.text.length - (change.end - change.start)
  const moved = offset => offset >= change.end ? offset + delta : offset
  const kept = model.leaves
    .filter(l => l.block === owner && (l.kind === 'role' || l.kind === 'link' || l.kind === 'literal'))
    .map(l => ({ s: moved(l.os), e: l.oe >= change.start ? l.oe + delta : l.oe }))
  const indent = ' '.repeat(owner.s - lineStart(model.source, owner.s))
  let caret = change.caret

  for (let step = 0; step < 8; step++) {
    const start = lineStart(source, caret)
    const end = lineEnd(source, caret)
    if (end - start <= WIDTH) break
    const lead = source.slice(start, end).match(/^\s*/)[0].length
    const breaks = []
    for (let at = start + lead + 1; at < end; at++) {
      if (source[at] !== ' ' || source[at - 1] === ' ') continue
      if (kept.some(span => span.s < at && at < span.e)) continue
      const rest = source.slice(at + 1, end).trimStart()
      if (!rest || MARKUP_START.test(rest)) continue
      breaks.push(at)
    }
    // The last place that fits, else the first one after
    const at = breaks.filter(b => b - start <= WIDTH).at(-1) ?? breaks[0]
    if (at === undefined) break
    let spaces = 1
    while (source[at + spaces] === ' ') spaces++
    const text = '\n' + indent
    source = source.slice(0, at) + text + source.slice(at + spaces)
    const shift = text.length - spaces
    if (caret > at) caret = Math.max(caret + shift, at + text.length)
    for (const span of kept) {
      if (span.s > at) span.s += shift
      if (span.e > at) span.e += shift
    }
  }
  if (source === applyEdit(model.source, change)) return change

  // As one edit of the source of the model
  const before = model.source
  let from = 0
  while (from < before.length && from < source.length && before[from] === source[from]) from++
  from = Math.min(from, change.start)
  let tail = 0
  while (tail < before.length - from && tail < source.length - from &&
    before[before.length - 1 - tail] === source[source.length - 1 - tail]) tail++
  tail = Math.min(tail, before.length - change.end)
  return { start: from, end: before.length - tail, text: source.slice(from, source.length - tail), caret }
}

export function insertText(model, a, b, text) {
  if (a === b && text.length === 1) {
    const heading = underline(model, a, text)
    if (heading) return heading
  }
  const owner = leafAt(model, a)?.block
  // Right after a role, a letter or a digit would undo the role: what ends
  // inline markup is followed by a space or by punctuation. The space is
  // written with it.
  if (a === b && /^[\p{L}\p{N}]/u.test(text) && /[`|_]/.test(model.source[a - 1] ?? '') &&
      model.leaves.some(l => ((l.kind === 'role' && !l.bare) || l.kind === 'substitution') && l.oe === a))
    text = ` ${text}`
  // The colon that ends the name of an option goes to its value
  if (text === ':' && a === b && owner?.kind === 'option') {
    const value = optionValue(model, a)
    if (value) return value
  }
  if (owner && ONE_LINE.has(owner.kind)) text = text.replace(/\s*\n\s*/g, ' ')
  return wrap(model, guard(model, adorn(model, insertTextRaw(model, a, b, text))))
}

// The first leaf of the content of a directive, when it is text right in
// the directive: a paragraph or code
function contentStart(model, directive) {
  const first = model.leaves.find(l => l.s >= directive.headEnd && within(l.block, directive) &&
    l.block.kind !== 'caption' && !ancestor(l.block, 'options'))
  if (!first || first.block.parent !== directive) return undefined
  return first.block.kind === 'paragraph' || first.block.kind === 'raw' ? first : undefined
}

// repeat: the key is held down
export function deleteBackward(model, a, b, { repeat = false } = {}) {
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
  // Between the quotes of a role with nothing left in it: both quotes go,
  // one alone would be left behind
  if (a === b && model.source[a - 1] === '`' && model.source[a] === '`' &&
      /(^|[\s([{<'"\-/])(:[\w+.-]+)+:`$/.test(model.source.slice(lineStart(model.source, a), a)))
    return guard(model, edit(a - 1, a + 1, '', a - 1))
  // At the start of a line of a line block: it joins the line before; the
  // only line of a block is a paragraph again
  if (a === b) {
    const row = leafAt(model, a)?.block
    if (row?.kind === 'linerow' && a === row.inlines[0].s) {
      const rows = row.parent.children
      const before = rows[rows.indexOf(row) - 1]
      if (before) {
        const end = before.inlines[before.inlines.length - 1].e
        return edit(end, a, before.empty && model.source[end - 1] !== ' ' ? ' ' : '', end + (before.empty && model.source[end - 1] !== ' ' ? 1 : 0))
      }
      return rows.length === 1 ? edit(row.bar.s, a, '') : undefined
    }
  }
  // The last character of the name of a substitution: all of it goes, its
  // bars would be left behind; its definition goes with its name
  if (a === b) {
    const item = leafAt(model, a)
    if (item && a === item.e && item.e - item.s === 1) {
      if (item.kind === 'substitution') return guard(model, edit(item.os, item.oe, ''))
      if (item.kind === 'name' && item.block.kind === 'substitution') {
        const start = lineStart(model.source, item.block.s)
        const end = Math.min(lineEnd(model.source, item.block.e) + 1, model.source.length)
        return edit(start, end, '', start)
      }
    }
  }
  if (a === b) {
    const item = leafAt(model, a)
    const directive = ancestor(item?.block ?? blockAt(model, a), 'directive')
    // In a directive with nothing in it: remove the directive
    if (directive && isBlankDirective(model, directive) &&
        (a <= directive.headEnd || (!item && isBlank(lineOf(model.source, a)))))
      return removeDirective(model, directive)
    // At the very start of the content of a directive: remove the directive,
    // with its content. Not while the key repeats: holding it to clear the
    // first line would take the rest away.
    if (directive && !repeat && item && a === item.s && contentStart(model, directive) === item)
      return removeDirective(model, directive)
    // Right after a directive: remove it, with its content; the caret stays
    // where it is. Not while the key repeats, as above.
    const before = repeat ? undefined : directiveBefore(model, a)
    if (before) {
      const removed = removeDirective(model, before)
      return { ...removed, caret: a - (removed.end - removed.start) }
    }
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
const ONE_LINE = new Set(['caption', 'option', 'target', 'substitution', 'value'])

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
