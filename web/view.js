// Show the model as editable HTML and map the caret between it and the source.
//
// The DOM is only a projection: it is never edited by the browser, every
// change goes through the source and the view is rendered again.

import { leafAt, blockAt } from './model.js'

const TAGS = {
  document: 'div', paragraph: 'p', item: 'li', directive: 'div', quote: 'blockquote', raw: 'pre',
  table: 'table', row: 'tr', line: 'div'
}

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
  }
  return el
}

function renderBlock(model, block) {
  const el = document.createElement(tagOf(block))
  el.className = `block b-${block.kind}`
  for (const flag of ['head', 'code', 'error', 'rst', 'bare'])
    if (block[flag]) el.classList.add(flag)
  el.dataset.kind = block.kind
  el.dataset.type = block.name ? `${block.type} ${block.name}` : block.type
  if (block.name) el.dataset.name = block.name
  if (block.kind === 'raw') el.dataset.raw = block.type
  el.dataset.s = block.s
  el.dataset.e = block.e
  el.block = block

  for (const leaf of block.inlines ?? [])
    el.append(renderLeaf(model, leaf))
  for (const child of block.children ?? [])
    el.append(renderBlock(model, child))

  // An empty list item or cell still needs a place for the caret
  if ((block.kind === 'item' || block.kind === 'cell') && !block.children.length && block.marker) {
    const lineEnd = model.source.indexOf('\n', block.marker.e)
    const end = lineEnd === -1 ? model.source.length : lineEnd
    el.append(placeholder(Math.min(block.marker.e + 1, end)))
  }
  return el
}

const leafElements = root => [...root.querySelectorAll('.leaf, .soft')]

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
