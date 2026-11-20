import { Parser, Language } from './vendor/web-tree-sitter.js'
import { buildModel, leafAt } from './model.js'
import { applyEdit, insertText, deleteBackward, deleteForward, insertParagraph, toggleInline } from './ops.js'
import { render, getSelection, setSelection, markActive } from './view.js'

const SAVE_DELAY_MS = 400
const POLL_MS = 1500
const HISTORY = 200

const view = document.getElementById('view')
const code = document.getElementById('code')
const backdrop = document.getElementById('backdrop')
const status = document.getElementById('status')
const fileStatus = document.getElementById('file')

const state = {
  parser: undefined,
  tree: undefined,
  model: undefined,
  source: '',
  caret: { anchor: 0, focus: 0 },
  lastEdit: undefined,
  undo: [],
  redo: [],
  mtime: undefined,
  dirty: false,
  saving: false,
  composing: undefined
}

// Source ----------------------------------------------------------------------

function pointAt(source, index) {
  let row = 0
  let lineStart = 0
  for (let i = source.indexOf('\n'); i !== -1 && i < index; i = source.indexOf('\n', i + 1)) {
    row++
    lineStart = i + 1
  }
  return { row, column: index - lineStart }
}

// The smallest edit that turns one text into the other
function diff(before, after) {
  let start = 0
  const max = Math.min(before.length, after.length)
  while (start < max && before[start] === after[start]) start++
  let endBefore = before.length
  let endAfter = after.length
  while (endBefore > start && endAfter > start && before[endBefore - 1] === after[endAfter - 1]) {
    endBefore--
    endAfter--
  }
  return { start, end: endBefore, text: after.slice(start, endAfter) }
}

// Parse again, the tree-sitter tree is updated with the edit and reused
function setSource(source, edit) {
  const before = state.source
  if (state.tree && edit) {
    const newEnd = edit.start + edit.text.length
    state.tree.edit({
      startIndex: edit.start,
      oldEndIndex: edit.end,
      newEndIndex: newEnd,
      startPosition: pointAt(before, edit.start),
      oldEndPosition: pointAt(before, edit.end),
      newEndPosition: pointAt(source, newEnd)
    })
  }
  const tree = state.parser.parse(source, edit ? state.tree : null)
  state.tree?.delete()
  state.tree = tree
  state.source = source
  state.model = buildModel(state.parser, tree, source)
  state.lastEdit = edit && { start: edit.start, removed: before.slice(edit.start, edit.end), text: edit.text }
}

function remember() {
  state.undo.push({ source: state.source, caret: { ...state.caret } })
  if (state.undo.length > HISTORY) state.undo.shift()
  state.redo = []
}

// An edit made in the view: { start, end, text, caret, anchor }
function commit(edit) {
  if (!edit) return
  remember()
  setSource(applyEdit(state.source, edit), edit)
  state.caret = { anchor: edit.anchor ?? edit.caret, focus: edit.caret }
  renderView(true)
  renderCode(true)
  changed()
}

function restore(from, to) {
  const entry = from.pop()
  if (!entry) return
  to.push({ source: state.source, caret: { ...state.caret } })
  setSource(entry.source, diff(state.source, entry.source))
  state.caret = entry.caret
  renderView(true)
  renderCode(true)
  changed()
}

// View ------------------------------------------------------------------------

function renderView(withCaret) {
  render(view, state.model, withCaret ? state.caret.focus : undefined)
  if (withCaret) {
    view.focus()
    setSelection(view, state.caret.anchor, state.caret.focus)
  }
  markActive(view, state.caret.focus)
  renderStatus()
}

function selection() {
  const current = getSelection(view)
  if (current) state.caret = { anchor: current.anchor, focus: current.focus }
  const { anchor, focus } = state.caret
  return { a: Math.min(anchor, focus), b: Math.max(anchor, focus) }
}

const INPUT = {
  insertText: (m, a, b, e) => insertText(m, a, b, e.data ?? ''),
  insertReplacementText: (m, a, b, e) => insertText(m, a, b, e.data ?? e.dataTransfer?.getData('text/plain') ?? ''),
  insertFromPaste: (m, a, b, e) => insertText(m, a, b, (e.dataTransfer?.getData('text/plain') ?? '').replace(/\r\n?/g, '\n')),
  insertFromDrop: () => undefined,
  insertParagraph: (m, a, b) => insertParagraph(m, a, b),
  insertLineBreak: (m, a, b) => insertParagraph(m, a, b),
  deleteContentBackward: (m, a, b) => deleteBackward(m, a, b),
  deleteContentForward: (m, a, b) => deleteForward(m, a, b),
  deleteByCut: (m, a, b) => deleteBackward(m, a, b),
  deleteWordBackward: (m, a, b) => deleteBackward(m, a, b),
  deleteWordForward: (m, a, b) => deleteForward(m, a, b),
  formatBold: (m, a, b) => toggleInline(m, a, b, 'bold'),
  formatItalic: (m, a, b) => toggleInline(m, a, b, 'italic')
}

view.addEventListener('beforeinput', ev => {
  if (ev.inputType === 'insertCompositionText' || ev.isComposing)
    return
  ev.preventDefault()
  if (ev.inputType === 'historyUndo') return restore(state.undo, state.redo)
  if (ev.inputType === 'historyRedo') return restore(state.redo, state.undo)
  const handler = INPUT[ev.inputType]
  if (!handler) return
  const { a, b } = selection()
  commit(handler(state.model, a, b, ev))
})

// Input methods edit the DOM themselves: take the result, then render again
view.addEventListener('compositionstart', () => {
  state.composing = selection()
})
view.addEventListener('compositionend', ev => {
  const { a, b } = state.composing ?? selection()
  state.composing = undefined
  const edit = ev.data ? insertText(state.model, a, b, ev.data) : undefined
  if (edit) commit(edit)
  else renderView(true)
})

view.addEventListener('keydown', ev => {
  if (!(ev.ctrlKey || ev.metaKey) || ev.altKey) return
  const key = ev.key.toLowerCase()
  const { a, b } = selection()
  if (key === 'z' && !ev.shiftKey) restore(state.undo, state.redo)
  else if (key === 'y' || (key === 'z' && ev.shiftKey)) restore(state.redo, state.undo)
  else if (key === 'b') commit(toggleInline(state.model, a, b, 'bold'))
  else if (key === 'i') commit(toggleInline(state.model, a, b, 'italic'))
  else if (key === 'e') commit(toggleInline(state.model, a, b, 'code'))
  else return
  ev.preventDefault()
})

// Copy and cut the source of the selection, so the markup is kept
for (const name of ['copy', 'cut']) {
  view.addEventListener(name, ev => {
    const { a, b } = selection()
    if (a === b) return
    ev.clipboardData.setData('text/plain', state.source.slice(a, b))
    ev.preventDefault()
    if (name === 'cut') commit(deleteBackward(state.model, a, b))
  })
}
view.addEventListener('drop', ev => ev.preventDefault())

document.addEventListener('selectionchange', () => {
  if (document.activeElement !== view || state.composing) return
  const current = getSelection(view)
  if (!current) return
  state.caret = { anchor: current.anchor, focus: current.focus }
  markActive(view, current.focus)
  renderCode(true)
  renderStatus()
})

// Code panel --------------------------------------------------------------------

const escapeHtml = text => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Marks behind the text of the code: the block of the caret and the last edit
function renderBackdrop() {
  const { source, lastEdit } = state
  const active = view.querySelector('.block.active')
  const marks = []
  if (active) marks.push({ s: Number(active.dataset.s), e: Number(active.dataset.e), name: 'block' })
  if (lastEdit?.text) marks.push({ s: lastEdit.start, e: lastEdit.start + lastEdit.text.length, name: 'edit' })

  const cuts = [...new Set([0, source.length, ...marks.flatMap(m => [m.s, m.e])])]
    .filter(i => i >= 0 && i <= source.length).sort((x, y) => x - y)
  let html = ''
  for (let i = 0; i + 1 < cuts.length; i++) {
    const names = marks.filter(m => m.s <= cuts[i] && cuts[i + 1] <= m.e).map(m => m.name)
    const text = escapeHtml(source.slice(cuts[i], cuts[i + 1]))
    html += names.length ? `<mark class="${names.join(' ')}">${text}</mark>` : text
  }
  backdrop.innerHTML = html + '\n'
  backdrop.scrollTop = code.scrollTop
  backdrop.scrollLeft = code.scrollLeft
}

// follow: move the caret of the code to the one of the view
function renderCode(follow) {
  if (code.value !== state.source)
    code.value = state.source
  if (follow && document.activeElement !== code) {
    const { anchor, focus } = state.caret
    code.setSelectionRange(Math.min(anchor, focus), Math.max(anchor, focus))
    const line = state.source.slice(0, focus).split('\n').length - 1
    const height = parseFloat(getComputedStyle(code).lineHeight) || 18
    const top = line * height
    if (top < code.scrollTop || top > code.scrollTop + code.clientHeight - 2 * height)
      code.scrollTop = Math.max(top - code.clientHeight / 2, 0)
  }
  renderBackdrop()
}

code.addEventListener('input', () => {
  const edit = diff(state.source, code.value)
  remember()
  setSource(code.value, edit)
  state.caret = { anchor: code.selectionStart, focus: code.selectionStart }
  render(view, state.model)
  markActive(view, code.selectionStart, true)
  renderBackdrop()
  renderStatus()
  changed()
})

for (const name of ['keyup', 'click', 'focus']) {
  code.addEventListener(name, () => {
    if (document.activeElement !== code) return
    state.caret = { anchor: code.selectionStart, focus: code.selectionEnd }
    markActive(view, code.selectionStart, true)
    renderBackdrop()
    renderStatus()
  })
}
code.addEventListener('scroll', () => {
  backdrop.scrollTop = code.scrollTop
  backdrop.scrollLeft = code.scrollLeft
})

// Status ------------------------------------------------------------------------

function renderStatus() {
  const offset = state.caret.focus
  const path = []
  for (let node = state.tree?.rootNode.descendantForIndex(Math.max(Math.min(offset, state.source.length) - 1, 0));
    node; node = node.parent)
    path.unshift(node.type)
  const leaf = leafAt(state.model, offset)
  const edit = state.lastEdit
  status.textContent = [
    `offset ${offset}`,
    leaf ? `leaf ${leaf.kind} [${leaf.s}, ${leaf.e}]` : 'no leaf',
    `tree: ${path.join(' > ')}`,
    edit ? `last edit @${edit.start} -${JSON.stringify(edit.removed)} +${JSON.stringify(edit.text)}` : ''
  ].filter(Boolean).join('   |   ')
}

// File --------------------------------------------------------------------------

const api = (options = {}) => fetch('api/file', { ...options, headers: { 'X-Doctools': '1', ...options.headers } })

let saveTimer

function changed() {
  state.dirty = true
  fileStatus.textContent = `${state.path} (modified)`
  clearTimeout(saveTimer)
  saveTimer = setTimeout(save, SAVE_DELAY_MS)
}

async function save() {
  if (state.saving) return changed()
  state.saving = true
  const text = state.source
  try {
    const response = await api({ method: 'PUT', body: text })
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)
    state.mtime = (await response.json()).mtime
    if (state.source === text) {
      state.dirty = false
      fileStatus.textContent = `${state.path} (saved)`
    }
  } catch (err) {
    fileStatus.textContent = `${state.path} (not saved: ${err.message})`
  } finally {
    state.saving = false
  }
}

// Take the changes made to the file by other programs
async function poll() {
  try {
    if (!state.dirty && !state.saving) {
      const file = await (await api()).json()
      if (file.mtime !== state.mtime && !state.dirty && file.text !== state.source) {
        remember()
        setSource(file.text, diff(state.source, file.text))
        render(view, state.model)
        renderCode(false)
        renderStatus()
        fileStatus.textContent = `${state.path} (reloaded)`
      }
      state.mtime = file.mtime
    }
  } catch { }
  setTimeout(poll, POLL_MS)
}

async function main() {
  await Parser.init()
  const language = await Language.load(new URL('./vendor/tree-sitter-rst.wasm', import.meta.url).href)
  state.parser = new Parser()
  state.parser.setLanguage(language)

  const file = await (await api()).json()
  state.path = file.path
  state.mtime = file.mtime
  setSource(file.text)
  document.title = `${file.name} - Doctools`
  fileStatus.textContent = file.path
  renderView(false)
  renderCode(false)
  setTimeout(poll, POLL_MS)

  // For the tests and the console
  window.doctools = { state, view, code }
}

main().catch(err => {
  status.textContent = `Failed to start: ${err.message}`
  console.error(err)
})
