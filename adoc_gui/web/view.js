// Show the model as editable HTML and map the caret between it and the source.
//
// The DOM is only a projection: it is never edited by the browser, every
// change goes through the source and the view is rendered again.

import { leafAt, blockAt } from './model.js'

const TAGS = {
  document: 'div', paragraph: 'p', item: 'li', directive: 'div', quote: 'blockquote', raw: 'pre',
  table: 'table', row: 'tr', line: 'div', caption: 'div', target: 'span', options: 'span', option: 'span'
}

// Blocks that can hold side elements: the labels before them and their options
const HOSTS = new Set(['heading', 'paragraph', 'directive'])

function tagOf(block) {
  if (block.kind === 'heading') return `h${Math.min(block.level, 6)}`
  if (block.kind === 'list') return block.ordered ? 'ol' : 'ul'
  if (block.kind === 'cell') return block.header ? 'th' : 'td'
  return TAGS[block.kind] ?? 'div'
}

function placeholder(offset) {
  const el = document.createElement('p')
  el.className = 'leaf placeholder'
  el.dataset.s = el.dataset.e = offset
  el.append(document.createElement('br'))
  return el
}

function renderLeaf(model, leaf) {
  const el = document.createElement('span')
  el.dataset.s = leaf.s
  el.dataset.e = leaf.e
  if (leaf.kind === 'soft') {
    el.className = 'soft'
    el.textContent = ' '
  } else {
    el.className = `leaf k-${leaf.kind}`
    if (leaf.bare) el.classList.add('bare')
    if (leaf.role) el.dataset.role = leaf.role
    el.textContent = model.source.slice(leaf.s, leaf.e)
    // An empty text still has to hold the caret: a zero-width space
    if (leaf.s === leaf.e) {
      el.textContent = '\u200b'
      el.dataset.empty = ''
    }
  }
  return el
}

// A button that is not part of the text
function button(name, title) {
  const el = document.createElement('span')
  el.className = name
  el.contentEditable = 'false'
  el.title = title
  return el
}

// attached: the labels before the block, shown at its side
function renderBlock(model, block, attached = []) {
  const el = document.createElement(tagOf(block))
  el.className = `block b-${block.kind}`
  for (const flag of ['code', 'error', 'card', 'empty'])
    if (block[flag]) el.classList.add(flag)
  el.dataset.kind = block.kind
  el.dataset.type = block.name ? `${block.type} ${block.name}` : block.type
  if (block.name) el.dataset.name = block.name
  if (block.kind === 'raw') el.dataset.raw = block.type
  if (block.hint) el.dataset.hint = block.hint
  el.dataset.s = block.s
  el.dataset.e = block.e
  el.block = block

  // The side elements come first, they are placed in the margin
  const sides = attached.map(target => renderBlock(model, target))
  const children = block.children ?? []
  if (block.kind === 'directive') {
    sides.push(...children.filter(c => c.kind === 'options').map(c => renderBlock(model, c)))
    sides.push(button('add-option', 'Add an option'))
  }
  if (block.kind === 'heading') sides.push(button('add-label', 'Add a label'))
  if (block.kind === 'option' || block.kind === 'target') el.append(button('remove-side', 'Remove'))
  if (sides.length) {
    const holder = document.createElement('span')
    holder.className = 'sides'
    holder.append(...sides)
    el.append(holder)
    el.classList.add('has-sides')
  }

  for (const leaf of block.inlines ?? [])
    el.append(renderLeaf(model, leaf))

  let labels = []
  children.forEach((child, i) => {
    if (block.kind === 'directive' && child.kind === 'options') return
    // A label goes to the side of the block that follows it
    if (child.kind === 'target') {
      const next = children.slice(i + 1).find(c => c.kind !== 'target')
      if (next && HOSTS.has(next.kind)) {
        labels.push(child)
        return
      }
    }
    el.append(renderBlock(model, child, labels))
    labels = []
  })

  // A directive without content: a place to click to write it
  if (block.kind === 'directive' && block.takesContent &&
      !children.some(c => c.kind !== 'caption' && c.kind !== 'options')) {
    const hint = document.createElement('div')
    hint.className = 'content-hint'
    hint.contentEditable = 'false'
    el.append(hint)
  }

  // An empty list item or cell still needs a place for the caret
  if ((block.kind === 'item' || block.kind === 'cell') && !block.children.length && block.marker) {
    const lineEnd = model.source.indexOf('\n', block.marker.e)
    const end = lineEnd === -1 ? model.source.length : lineEnd
    el.append(placeholder(Math.min(block.marker.e + 1, end)))
  }
  return el
}

// In the order of the source: the side elements are not where they are in it
const leafElements = root => [...root.querySelectorAll('.leaf, .soft')]
  .sort((a, b) => Number(a.dataset.s) - Number(b.dataset.s))

// caret: a source offset where the caret must be able to go, an empty
// paragraph is shown there when no text holds it
export function render(root, model, caret) {
  const doc = renderBlock(model, model.root)
  root.replaceChildren(doc)

  if (caret === undefined || leafAt(model, caret))
    return
  if (leafElements(root).some(el => el.classList.contains('placeholder') && Number(el.dataset.s) === caret))
    return

  let target = blockAt(model, caret)
  while (target.inlines && target.parent) target = target.parent
  const parent = [...root.querySelectorAll('.block')].find(el => el.block === target) ?? doc
  const next = [...parent.children].find(el => el.classList.contains('block') && Number(el.dataset.s) >= caret)
  parent.insertBefore(placeholder(caret), next ?? null)
}

const span = el => ({ s: Number(el.dataset.s), e: Number(el.dataset.e) })

// The source offset of a DOM point (node, offset) inside the view
export function offsetOf(root, node, offset) {
  const holder = (node.nodeType === Node.TEXT_NODE ? node.parentElement : node).closest('.leaf, .soft')
  if (holder && root.contains(holder)) {
    const { s, e } = span(holder)
    if (holder.classList.contains('soft'))
      return offset === 0 ? s : e
    if ('empty' in holder.dataset)
      return s
    if (node.nodeType === Node.TEXT_NODE)
      return Math.min(s + offset, e)
    return offset === 0 ? s : e
  }

  // Between elements: the end of the text before the point when it is in the
  // same block, otherwise the start of the text after it
  const point = document.createRange()
  point.setStart(node, offset)
  let previous, next
  for (const el of leafElements(root)) {
    if (el.classList.contains('soft')) continue
    const range = document.createRange()
    range.selectNode(el)
    if (range.compareBoundaryPoints(Range.START_TO_START, point) >= 0) {
      next = el
      break
    }
    previous = el
  }
  const container = node.nodeType === Node.TEXT_NODE ? node.parentElement : node
  if (previous && (!next || previous.closest('.block') === container.closest('.block')))
    return span(previous).e
  if (next) return span(next).s
  return 0
}

// The DOM point of a source offset
export function pointOf(root, offset) {
  let found
  for (const el of leafElements(root)) {
    if (el.classList.contains('soft')) continue
    const { s, e } = span(el)
    if (s > offset) break
    if (offset <= e) {
      found = el
      if (offset > s) break
    }
  }
  if (!found) return undefined
  const text = found.firstChild
  if (!text || text.nodeType !== Node.TEXT_NODE)
    return { node: found, offset: 0 }
  if ('empty' in found.dataset)
    return { node: text, offset: 1 }
  return { node: text, offset: offset - span(found).s }
}

// The selection as source offsets, undefined when it is not in the view
export function getSelection(root) {
  const selection = window.getSelection()
  if (!selection.rangeCount || !root.contains(selection.anchorNode) || !root.contains(selection.focusNode))
    return undefined
  const anchor = offsetOf(root, selection.anchorNode, selection.anchorOffset)
  const focus = offsetOf(root, selection.focusNode, selection.focusOffset)
  return { anchor, focus, a: Math.min(anchor, focus), b: Math.max(anchor, focus) }
}

export function setSelection(root, anchor, focus = anchor) {
  const from = pointOf(root, anchor)
  const to = pointOf(root, focus)
  if (!from || !to) return false
  window.getSelection().setBaseAndExtent(from.node, from.offset, to.node, to.offset)
  const el = to.node.nodeType === Node.TEXT_NODE ? to.node.parentElement : to.node
  el.scrollIntoView({ block: 'nearest' })
  return true
}

// Outline the deepest block that holds a source offset
export function markActive(root, offset, scroll = false) {
  for (const el of root.querySelectorAll('.block.active'))
    el.classList.remove('active')
  let best
  for (const el of root.querySelectorAll('.block')) {
    const { s, e } = span(el)
    if (s <= offset && offset <= e && el.dataset.kind !== 'document')
      best = el
  }
  if (best) {
    best.classList.add('active')
    if (scroll) best.scrollIntoView({ block: 'nearest' })
  }
  return best
}

// Show the warnings of the build below the block of their line, as the
// virtual text of an editor. items: [{ line, message, severity }]
export function showDiagnostics(root, model, items) {
  for (const el of root.querySelectorAll('.diag')) el.remove()
  for (const el of root.querySelectorAll('.has-warning, .has-error')) el.classList.remove('has-warning', 'has-error')

  const blocks = [...root.querySelectorAll('.block')].filter(el => el.dataset.kind !== 'document')
  for (const item of items) {
    const { lineStarts, source } = model
    let offset = lineStarts[Math.min(Math.max(item.line - 1, 0), lineStarts.length - 1)]
    while (source[offset] === ' ' || source[offset] === '\t') offset++

    let host
    for (const el of blocks) {
      const { s, e } = span(el)
      if (s <= offset && offset <= e) host = el
    }
    host ??= blocks.find(el => span(el).s >= offset) ?? blocks[blocks.length - 1]
    if (!host) continue
    // Not inside a table, nor in the side elements
    for (let up = host; up && up !== root; up = up.parentElement)
      if (up.matches('table.block') || up.parentElement?.classList.contains('sides')) host = up.matches('table.block') ? up : up.parentElement.parentElement

    const note = document.createElement('div')
    note.className = `diag ${item.severity}`
    note.contentEditable = 'false'
    note.textContent = item.message
    host.classList.add(`has-${item.severity}`)
    if (host.tagName === 'LI') host.append(note)
    else host.after(note)
  }
}
