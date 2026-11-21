// Show the model as editable HTML and map the caret between it and the source.
//
// The DOM is only a projection: it is never edited by the browser, every
// change goes through the source and the view is rendered again.

import { leafAt, blockAt } from './model.js'
import { CODE_DIRECTIVES } from './code.js'

// The address of an image of the page: src as written => URL
let imageUrl = src => src
export function setImageUrl(make) {
  imageUrl = make
}

// The directives that show an image: its path is their argument
const IMAGE_DIRECTIVES = new Set(['image', 'figure', 'svg'])

// The image of an image, a figure or a svg directive, as written: { src, width, align }
function imageOf(model, block) {
  const caption = block.children.find(c => c.kind === 'caption')
  const src = (caption?.inlines ?? []).map(l => model.source.slice(l.s, l.e)).join('').trim()
  const options = {}
  for (const option of block.children.find(c => c.kind === 'options')?.children ?? [])
    options[option.name] = (option.inlines ?? []).slice(1).map(l => model.source.slice(l.s, l.e)).join('').trim()
  return { src, width: options.width, scale: options.scale, align: options.align, alt: options.alt }
}

// The image, shown as it is built: not part of the text
function imageElement(model, block) {
  const { src, width, scale, align, alt } = imageOf(model, block)
  const box = document.createElement('div')
  box.className = 'figure-image'
  box.contentEditable = 'false'
  if (align) box.dataset.align = align
  if (!src) return box
  const img = document.createElement('img')
  img.alt = alt ?? ''
  img.loading = 'lazy'
  img.draggable = false
  if (width && /^\d+(\.\d+)?(px|%|em|rem)?$/.test(width)) img.style.width = /\d$/.test(width) ? `${width}px` : width
  else if (scale && /^\d+%?$/.test(scale)) img.style.width = `${parseInt(scale, 10)}%`
  img.addEventListener('error', () => {
    box.classList.add('missing')
    box.dataset.missing = `Image not found: ${src}`
  })
  img.src = imageUrl(src)
  box.append(img)
  return box
}

// Makes the element of the code of a code directive, from the one it had:
// (model, directive, old) => element
let codeHost
export function setCodeHost(make) {
  const before = codeHost
  codeHost = make
  return before
}

const TAGS = {
  document: 'div', paragraph: 'p', item: 'li', directive: 'div', quote: 'blockquote', raw: 'pre',
  table: 'table', row: 'tr', line: 'div', caption: 'div', target: 'span', options: 'div', option: 'div'
}

const UNBOXED = new Set(['table', 'list-table', 'tab-set', 'tab-item', 'rubric'])

// Blocks that can hold side elements: the labels before them
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
    el.textContent = leaf.newline ? '\n' : ' '
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

// Partial refresh ---------------------------------------------------------------
//
// The page is not made again on every edit. An element remembers what it was
// made from (its signature: the kind of the block and its source), and the
// elements of the blocks in it. On the next render:
//
// - a block with the same signature keeps its element, as it is: only the
//   offsets in the source, of the element and of what is in it, are updated;
// - a block that changed keeps its element too, when there is one of the same
//   kind: what is in it is made again, but for the blocks in it, which are
//   looked for among the ones it had, the same way.
//
// So an edit makes again the elements of the edited block and of the blocks
// around it, and leaves the rest of the page as it is.

const FLAGS = ['code', 'error', 'card', 'empty', 'flag', 'ordered', 'header', 'takesContent', 'takesOptions']

// What the element of a block is made from. The offsets are not part of it:
// the same block further in the source has the same element.
function signature(model, block, attached) {
  if (block.sig === undefined) {
    const { source } = model
    // Its text, which can go past the block: the spaces of an empty argument
    const leaves = (block.inlines ?? [])
      .map(l => `${l.kind}${l.role ?? ''}${l.bare ? 1 : 0}${l.newline ? 1 : 0}:${source.slice(l.s, l.e)}`).join('\u0001')
    block.sig = [block.kind, block.type, block.name ?? '', block.level ?? '', block.hint ?? '',
      FLAGS.map(flag => block[flag] ? 1 : 0).join('')].join('|') + '|' + source.slice(block.s, block.e) + '\u0002' + leaves
  }
  if (!attached.length) return block.sig
  return block.sig + attached.map(target => `\u0000${signature(model, target, [])}`).join('')
}

// The blocks shown in the element of a block: at its side (the labels before
// it) and in it, each with the labels attached to it. A directive is its
// argument, its options, then its content, as in the source.
function plan(block, attached) {
  const children = block.children ?? []
  const directive = block.kind === 'directive'
  const coded = directive && Boolean(codeHost) && CODE_DIRECTIVES.has(block.name)
  const sides = attached.map(target => [target, []])

  const body = []
  let labels = []
  children.forEach((child, i) => {
    // The code is in an editor of its own
    if (coded && child.kind === 'raw' && child.code) return
    // A label goes to the side of the block that follows it
    if (child.kind === 'target') {
      const next = children.slice(i + 1).find(c => c.kind !== 'target')
      if (next && HOSTS.has(next.kind)) {
        labels.push(child)
        return
      }
    }
    body.push([child, labels])
    labels = []
  })
  return { sides, body, coded }
}

// For each part, the element to make it from: the one of the same block,
// else one of a block of the same kind, to change in place.
//
// The blocks before and after an edit are the same, in the same order: they
// are matched from both ends first, so equal blocks (the same example
// twice in a page) keep each its own element. What is left in the middle is
// matched by signature, then by kind.
function match(model, parts, olds) {
  const found = new Array(parts.length)
  if (!olds?.length) return found
  const sigs = parts.map(([block, attached]) => signature(model, block, attached))

  let head = 0
  while (head < parts.length && head < olds.length && olds[head].sig === sigs[head]) {
    found[head] = olds[head]
    head++
  }
  let tail = 0
  while (tail < parts.length - head && tail < olds.length - head &&
    olds[olds.length - 1 - tail].sig === sigs[parts.length - 1 - tail]) {
    found[parts.length - 1 - tail] = olds[olds.length - 1 - tail]
    tail++
  }
  const middle = olds.slice(head, olds.length - tail)
  if (!middle.length) return found
  const end = parts.length - tail

  const same = new Map()
  for (const el of middle) {
    if (!same.has(el.sig)) same.set(el.sig, [])
    same.get(el.sig).push(el)
  }
  const taken = new Set()
  for (let i = head; i < end; i++) {
    const el = same.get(sigs[i])?.shift()
    if (!el) continue
    found[i] = el
    taken.add(el)
  }
  const rest = middle.filter(el => !taken.has(el))
  for (let i = head; i < end && rest.length; i++) {
    if (found[i]) continue
    const block = parts[i][0]
    const at = rest.findIndex(el => el.block.kind === block.kind && el.block.name === block.name)
    if (at !== -1) found[i] = rest.splice(at, 1)[0]
  }
  return found
}

function setSpan(el, s, e) {
  if (el.dataset.s !== String(s)) el.dataset.s = s
  if (el.dataset.e !== String(e)) el.dataset.e = e
}

// Where the caret goes in an empty list item or cell
function emptyOffset(model, block) {
  const lineEnd = model.source.indexOf('\n', block.marker.e)
  return Math.min(block.marker.e + 1, lineEnd === -1 ? model.source.length : lineEnd)
}

// The children of an element become the nodes, in order: the ones that are
// already there are not moved
function sync(el, nodes) {
  const keep = new Set(nodes)
  for (const child of [...el.childNodes]) if (!keep.has(child)) child.remove()
  nodes.forEach((node, i) => {
    const current = el.childNodes[i]
    if (current !== node) el.insertBefore(node, current ?? null)
  })
}

// The element of a block that did not change: only where it is in the source
function refresh(model, el, block, attached) {
  const inlines = block.inlines ?? []
  const { sides, body, coded } = plan(block, attached)
  const parts = [...sides, ...body]
  if (parts.length !== el.made.length || inlines.length !== el.leaves.length) {
    el.sig = undefined
    return renderBlock(model, block, attached, el)
  }
  el.block = block
  setSpan(el, block.s, block.e)
  inlines.forEach((leaf, i) => setSpan(el.leaves[i], leaf.s, leaf.e))
  parts.forEach(([child, labels], i) => {
    const made = renderBlock(model, child, labels, el.made[i])
    if (made === el.made[i]) return
    el.made[i].replaceWith(made)
    el.made[i] = made
  })
  if (coded) codeHost(model, block, el.code)
  if (el.place) setSpan(el.place, emptyOffset(model, block), emptyOffset(model, block))
  return el
}

// attached: the labels before the block, shown at its side
// old: the element of the block, or of a block of its kind, from the render
// before
function renderBlock(model, block, attached = [], old) {
  const sig = signature(model, block, attached)
  if (old && old.sig === sig) return refresh(model, old, block, attached)

  const { sides, body, coded } = plan(block, attached)
  const parts = [...sides, ...body]
  const olds = match(model, parts, old?.made)
  const made = parts.map(([child, labels], i) => renderBlock(model, child, labels, olds[i]))

  const tag = tagOf(block)
  const el = old && old.localName === tag ? old : document.createElement(tag)
  if (el === old) for (const name of el.getAttributeNames()) el.removeAttribute(name)
  el.className = `block b-${block.kind}`
  for (const flag of ['code', 'error', 'card', 'empty', 'flag'])
    if (block[flag]) el.classList.add(flag)
  el.dataset.kind = block.kind
  el.dataset.type = block.name ? `${block.type} ${block.name}` : block.type
  if (block.name) el.dataset.name = block.name
  // A directive that is not rendered as something of its own: a box with its name
  if (block.kind === 'directive' && !block.card && !UNBOXED.has(block.name)) el.classList.add('boxed')
  if (block.kind === 'raw') el.dataset.raw = block.type
  // A rubric is a heading that is not a section: of the level of its option
  if (block.name === 'rubric') {
    const level = block.children.find(c => c.kind === 'options')?.children
      .find(o => o.name === 'heading-level')?.inlines.slice(1).map(l => model.source.slice(l.s, l.e)).join('')
    el.dataset.level = /^[1-6]$/.test(level?.trim() ?? '') ? level.trim() : ''
  }
  if (block.hint) el.dataset.hint = block.hint
  el.dataset.s = block.s
  el.dataset.e = block.e
  el.block = block
  el.sig = sig
  el.made = made
  el.place = undefined

  const nodes = []
  if (block.kind === 'option' || block.kind === 'target') nodes.push(button('remove-side', 'Remove'))

  // The side elements come first, they are placed in the margin
  const aside = made.slice(0, sides.length)
  if (block.kind === 'heading') aside.push(button('add-label', 'Add a label'))
  if (aside.length) {
    const holder = document.createElement('span')
    holder.className = 'sides'
    holder.append(...aside)
    nodes.push(holder)
    el.classList.add('has-sides')
  }

  el.leaves = (block.inlines ?? []).map(leaf => renderLeaf(model, leaf))
  const inner = made.slice(sides.length)
  if (block.kind === 'directive') {
    // The head of the directive: its argument, then its options
    const head = inner.filter(child => child.block?.kind === 'caption' || child.block?.kind === 'options').length
    const after = []
    if (block.takesOptions) after.push(button('add-option', 'Add an option'))
    // The image of an image, a figure or a svg: after its path and its options
    if (IMAGE_DIRECTIVES.has(block.name)) after.push(imageElement(model, block))
    inner.splice(head, 0, ...after)
  }
  nodes.push(...el.leaves, ...inner)

  if (block.kind === 'directive' && block.name === 'tab-set') nodes.push(button('add-tab', 'Add a tab'))

  // The code is in an editor of its own
  el.code = coded ? codeHost(model, block, old?.code) : undefined
  if (el.code) {
    nodes.push(el.code)
  } else if (block.kind === 'directive' && block.takesContent && !body.some(([c]) => c.kind !== 'caption')) {
    // A directive without content: a place to click to write it
    const hint = document.createElement('div')
    hint.className = 'content-hint'
    hint.contentEditable = 'false'
    nodes.push(hint)
  }

  // An empty list item or cell still needs a place for the caret
  if ((block.kind === 'item' || block.kind === 'cell') && !block.children.length && block.marker) {
    el.place = placeholder(emptyOffset(model, block))
    nodes.push(el.place)
  }
  sync(el, nodes)
  return el
}

// In the order of the source: the side elements are not where they are in it
// The tab shown of each tab set, by the position of the set in the document
const tabChoice = new Map()

const isTab = el => el.dataset?.name === 'tab-item'
const tabsOf = set => [...set.children].filter(isTab)

// Show a tab, and the tabs it is in
export function selectTab(root, tab) {
  for (let el = tab; el && el !== root; el = el.parentElement) {
    if (!isTab(el)) continue
    const set = el.parentElement
    const tabs = tabsOf(set)
    tabs.forEach(other => other.classList.toggle('selected', other === el))
    tabChoice.set(Number(set.dataset.tabs), tabs.indexOf(el))
  }
}

// One tab of each set is shown: the one of the caret, else the one chosen before
function showTabs(root, model, caret) {
  root.querySelectorAll('.b-directive[data-name="tab-set"]').forEach((set, n) => {
    set.dataset.tabs = n
    const tabs = tabsOf(set)
    const index = Math.min(tabChoice.get(n) ?? 0, tabs.length - 1)
    tabs.forEach((tab, i) => tab.classList.toggle('selected', i === index))
  })
  if (caret === undefined) return
  for (let block = blockAt(model, caret); block; block = block.parent) {
    if (block.name !== 'tab-item') continue
    const el = [...root.querySelectorAll('.b-directive[data-name="tab-item"]')].find(tab => tab.block === block)
    if (el) selectTab(root, el)
  }
}

// The elements of the leaves, in the order of the source: kept until the
// next render
let leafCache
function leafElements(root) {
  if (leafCache?.root !== root) {
    leafCache = {
      root,
      list: [...root.querySelectorAll('.leaf, .soft')].sort((a, b) => Number(a.dataset.s) - Number(b.dataset.s))
    }
  }
  return leafCache.list
}

// caret: a source offset where the caret must be able to go, an empty
// paragraph is shown there when no text holds it
export function render(root, model, caret) {
  leafCache = undefined
  for (const el of root.querySelectorAll('.caret-place')) el.remove()
  const before = root.firstElementChild
  const doc = renderBlock(model, model.root, [], before?.made ? before : undefined)
  if (doc !== before || root.childNodes.length !== 1) root.replaceChildren(doc)
  showTabs(root, model, caret)

  if (caret === undefined || leafAt(model, caret))
    return
  if (leafElements(root).some(el => el.classList.contains('placeholder') && Number(el.dataset.s) === caret))
    return

  let target = blockAt(model, caret)
  while (target.inlines && target.parent) target = target.parent
  const parent = [...root.querySelectorAll('.block')].find(el => el.block === target) ?? doc
  const next = [...parent.children].find(el => el.classList.contains('block') && Number(el.dataset.s) >= caret)
  const place = placeholder(caret)
  place.classList.add('caret-place')
  parent.insertBefore(place, next ?? null)
  leafCache = undefined
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
    // Its tab is shown
    const tab = best.closest('.b-directive[data-name="tab-item"]:not(.selected)')
    if (tab) selectTab(root, best)
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
