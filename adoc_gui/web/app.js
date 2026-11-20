import { Parser, Language } from './vendor/web-tree-sitter.js'
import { buildModel, leafAt } from './model.js'
import {
  applyEdit, insertText, deleteBackward, deleteForward, insertParagraph, toggleInline, tableStep
} from './ops.js'
import { render, getSelection, setSelection, markActive, showDiagnostics } from './view.js'
import { completionAt, matching, roleQuestion } from './lsp.js'

const SAVE_DELAY_MS = 400
const POLL_MS = 1500
const HISTORY = 200

const view = document.getElementById('view')
const code = document.getElementById('code')
const backdrop = document.getElementById('backdrop')
const status = document.getElementById('status')
const title = document.getElementById('title')
const fileStatus = document.getElementById('file')
const toolbar = document.querySelector('.toolbar')
const docsButton = document.getElementById('toggle-docs')
const menu = document.getElementById('menu')
const tooltip = document.getElementById('tooltip')

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
  fileState: '',
  docs: { build: 'off', problem: null, url: null, revision: -1, diagnostics: [] },
  composing: undefined
}

// Source ----------------------------------------------------------------------

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

// Parse again, from scratch: with this grammar a tree that is updated with
// the edit and reused can differ from the tree of a fresh parse (seen in the
// content of directives), and a fresh parse of a document takes milliseconds.
function setSource(source, edit) {
  const before = state.source
  const tree = state.parser.parse(source)
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

// Render the page, with the warnings of the build
function paint(caret) {
  render(view, state.model, caret)
  showDiagnostics(view, state.model, state.docs.diagnostics)
}

function renderView(withCaret) {
  paint(withCaret ? state.caret.focus : undefined)
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
  if (/^(insertText|insertReplacementText|deleteContent)/.test(ev.inputType)) suggest()
  else closeMenu()
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

// What the toolbar and the keys do
const ACTIONS = {
  undo: () => restore(state.undo, state.redo),
  redo: () => restore(state.redo, state.undo),
  bold: () => format('bold'),
  italic: () => format('italic'),
  code: () => format('code')
}

function format(kind) {
  const { a, b } = selection()
  commit(toggleInline(state.model, a, b, kind))
}

// The buttons do not take the focus, so the selection of the page is kept
toolbar.addEventListener('mousedown', ev => ev.preventDefault())
toolbar.addEventListener('click', ev => {
  const action = ev.target.closest('[data-action]')?.dataset.action
  if (!action) return
  ACTIONS[action]()
  view.focus()
  renderToolbar()
})

const PRESSED = { bold: 'strong', italic: 'emphasis', code: 'literal' }

function renderToolbar() {
  const kind = leafAt(state.model, state.caret.focus)?.kind
  for (const button of toolbar.querySelectorAll('[data-action]')) {
    const action = button.dataset.action
    if (PRESSED[action]) button.setAttribute('aria-pressed', String(kind === PRESSED[action]))
    if (action === 'undo') button.disabled = !state.undo.length
    if (action === 'redo') button.disabled = !state.redo.length
  }
}

// The source pane and the structure can be shown or hidden
function toggle(button, name, shown) {
  const apply = value => {
    document.body.classList.toggle(name, name === 'no-source' ? !value : value)
    button.setAttribute('aria-pressed', String(value))
    try {
      localStorage.setItem(`doctools.${name}`, String(value))
    } catch { }
  }
  let stored = null
  try {
    stored = localStorage.getItem(`doctools.${name}`)
  } catch { }
  apply(stored === null ? shown : stored === 'true')
  button.addEventListener('click', () => apply(button.getAttribute('aria-pressed') !== 'true'))
}
toggle(document.getElementById('toggle-source'), 'no-source', true)
toggle(document.getElementById('toggle-inspect'), 'inspect', false)

// Tab moves between the cells of a table
function stepCell(step) {
  const result = tableStep(state.model, state.caret.focus, step)
  if (!result) return false
  if (result.text !== undefined) {
    commit(result)
  } else {
    state.caret = { anchor: result.caret, focus: result.caret }
    renderView(true)
    renderCode(true)
  }
  return true
}

view.addEventListener('keydown', ev => {
  if (menuKey(ev)) return
  if (ev.key === 'Tab' && !ev.ctrlKey && !ev.metaKey && !ev.altKey) {
    selection()
    if (stepCell(ev.shiftKey ? -1 : 1)) ev.preventDefault()
    return
  }
  if (!(ev.ctrlKey || ev.metaKey) || ev.altKey) return
  const key = ev.key.toLowerCase()
  if (key === 'z' && !ev.shiftKey) ACTIONS.undo()
  else if (key === 'y' || (key === 'z' && ev.shiftKey)) ACTIONS.redo()
  else if (key === 'b') ACTIONS.bold()
  else if (key === 'i') ACTIONS.italic()
  else if (key === 'e') ACTIONS.code()
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
  if (completion && (current.anchor !== current.focus || current.focus !== completion.caret)) closeMenu()
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
  const { lineStarts } = state.model
  for (const item of state.docs.diagnostics) {
    const row = Math.min(Math.max(item.line - 1, 0), lineStarts.length - 1)
    const e = row + 1 < lineStarts.length ? lineStarts[row + 1] - 1 : source.length
    if (e > lineStarts[row]) marks.push({ s: lineStarts[row], e, name: item.severity })
  }

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
  paint()
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
  renderToolbar()
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

// Documentation server: build, warnings, completion and hover -------------------

const PLAY = 'M8 5v14l11-7z'
const STOP = 'M6 6h12v12H6z'

const post = (path, body) => fetch(path, {
  method: 'POST', headers: { 'X-Doctools': '1' }, body: body === undefined ? '' : JSON.stringify(body)
}).then(response => response.json())

const ask = question => post('api/docs/ask', question).catch(() => ({ error: 'no answer' }))

function docsText() {
  const { problem, build, diagnostics } = state.docs
  if (problem) return `Docs: ${problem}`
  if (build === 'building') return 'Docs: building…'
  if (build !== 'ready') return ''
  const errors = diagnostics.filter(d => d.severity === 'error').length
  const warnings = diagnostics.length - errors
  const counts = [errors && `${errors} error${errors > 1 ? 's' : ''}`, warnings && `${warnings} warning${warnings > 1 ? 's' : ''}`]
    .filter(Boolean).join(', ')
  return `Docs: up to date${counts ? `, ${counts}` : ''}`
}

function setFileState(text) {
  if (text !== undefined) state.fileState = text
  fileStatus.textContent = [state.fileState, docsText()].filter(Boolean).join('  ·  ')
}

function renderDocs() {
  const { problem, build } = state.docs
  const running = build !== 'off'
  docsButton.disabled = Boolean(problem)
  docsButton.setAttribute('aria-pressed', String(running))
  docsButton.title = problem ?? (running ? 'Stop the documentation server' : 'Build the documentation')
  docsButton.querySelector('path').setAttribute('d', running ? STOP : PLAY)
  setFileState()
}

docsButton.addEventListener('click', async () => {
  const running = state.docs.build !== 'off'
  if (!running) {
    state.docs.build = 'building'
    renderDocs()
  }
  await post(running ? 'api/docs/stop' : 'api/docs/start').catch(() => {})
  pollDocs(true)
})

let docsTimer

async function pollDocs(once) {
  try {
    const docs = await (await fetch('api/docs', { headers: { 'X-Doctools': '1' } })).json()
    if (docs.revision !== state.docs.revision || docs.build !== state.docs.build) {
      state.docs = docs
      answers.clear()
      showDiagnostics(view, state.model, docs.diagnostics)
      renderBackdrop()
      renderDocs()
    }
  } catch { }
  if (once) return
  clearTimeout(docsTimer)
  docsTimer = setTimeout(pollDocs, 1000)
}

// Completion: a menu at the caret, while a role or a directive is typed
let completion
const answers = new Map()

function closeMenu() {
  completion = undefined
  menu.hidden = true
}

function renderMenu() {
  menu.replaceChildren(...completion.items.map((item, i) => {
    const el = document.createElement('div')
    el.className = 'menu-item'
    el.setAttribute('role', 'option')
    el.setAttribute('aria-selected', String(i === completion.index))
    el.dataset.index = i
    const label = document.createElement('span')
    label.textContent = item.label
    const detail = document.createElement('span')
    detail.className = 'detail'
    detail.textContent = item.detail
    el.append(label, detail)
    return el
  }))
  menu.hidden = false

  const selection = window.getSelection()
  const range = selection.rangeCount ? selection.getRangeAt(0) : undefined
  const rect = range?.getClientRects()[0] ?? selection.anchorNode?.parentElement?.getBoundingClientRect()
  if (rect) {
    const below = rect.bottom + 4 + menu.offsetHeight <= window.innerHeight
    menu.style.top = `${below ? rect.bottom + 4 : Math.max(rect.top - 4 - menu.offsetHeight, 0)}px`
    menu.style.left = `${Math.max(Math.min(rect.left, window.innerWidth - menu.offsetWidth - 8), 0)}px`
  }
  menu.querySelector('[aria-selected=true]')?.scrollIntoView({ block: 'nearest' })
}

async function suggest() {
  const { anchor, focus } = state.caret
  if (anchor !== focus || state.docs.build === 'off') return closeMenu()
  const { source } = state
  const lineStart = source.lastIndexOf('\n', focus - 1) + 1
  const lineEnd = source.indexOf('\n', focus)
  const context = completionAt(source.slice(lineStart, focus), source.slice(focus, lineEnd === -1 ? source.length : lineEnd))
  if (!context) return closeMenu()

  const key = JSON.stringify(context.request)
  if (!answers.has(key)) answers.set(key, ask(context.request))
  const answer = await answers.get(key)
  if (state.caret.focus !== focus || state.source !== source) return
  if (!Array.isArray(answer.list)) {
    answers.delete(key)
    return closeMenu()
  }
  const items = matching(answer.list, context)
  if (!items.length) return closeMenu()
  completion = { items, index: 0, caret: focus, start: focus - context.partial.length, end: focus + context.skip }
  renderMenu()
}

function accept(index = completion.index) {
  const item = completion.items[index]
  const { start, end } = completion
  closeMenu()
  commit({ start, end, text: item.text, caret: start + item.text.length })
  suggest()
}

// The keys of the menu, true when the key was for it
function menuKey(ev) {
  if (!completion || ev.ctrlKey || ev.metaKey || ev.altKey) return false
  const count = completion.items.length
  if (ev.key === 'ArrowDown') completion.index = (completion.index + 1) % count
  else if (ev.key === 'ArrowUp') completion.index = (completion.index + count - 1) % count
  else if (ev.key === 'Enter' || ev.key === 'Tab') accept()
  else if (ev.key === 'Escape') closeMenu()
  else return false
  ev.preventDefault()
  if (completion) renderMenu()
  return true
}

menu.addEventListener('mousedown', ev => {
  ev.preventDefault()
  const item = ev.target.closest('.menu-item')
  if (item && completion) accept(Number(item.dataset.index))
})
view.addEventListener('blur', closeMenu)

// Hover: what a role points to
let hoverTimer

view.addEventListener('mouseover', ev => {
  const el = ev.target.closest?.('.k-role')
  clearTimeout(hoverTimer)
  if (!el) tooltip.hidden = true
  if (!el || state.docs.build === 'off') return
  hoverTimer = setTimeout(async () => {
    const leaf = state.model.leaves.find(l => l.kind === 'role' && l.s === Number(el.dataset.s))
    const question = leaf && roleQuestion(state.source.slice(leaf.os, leaf.oe))
    if (!question) return
    const answer = await ask(question)
    if (!el.isConnected || !el.matches(':hover')) return
    tooltip.textContent = answer.error ?? [answer.title, answer.target].filter(Boolean).join('  →  ')
    tooltip.classList.toggle('error', Boolean(answer.error))
    tooltip.hidden = false
    const rect = el.getBoundingClientRect()
    tooltip.style.top = `${rect.bottom + 6}px`
    tooltip.style.left = `${Math.max(Math.min(rect.left, window.innerWidth - tooltip.offsetWidth - 8), 0)}px`
  }, 350)
})
view.addEventListener('mouseout', ev => {
  if (ev.target.closest?.('.k-role')) {
    clearTimeout(hoverTimer)
    tooltip.hidden = true
  }
})

// File --------------------------------------------------------------------------

const api = (options = {}) => fetch('api/file', { ...options, headers: { 'X-Doctools': '1', ...options.headers } })

let saveTimer

function changed() {
  state.dirty = true
  setFileState('Saving…')
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
      setFileState('Saved')
    }
  } catch (err) {
    setFileState(`Not saved: ${err.message}`)
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
        paint()
        renderCode(false)
        renderStatus()
        setFileState('Reloaded from the file')
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
  title.textContent = file.name
  title.title = file.path
  setFileState('Saved')
  renderView(false)
  renderCode(false)
  setTimeout(poll, POLL_MS)
  pollDocs()

  // For the tests and the console
  window.doctools = { state, view, code }
}

main().catch(err => {
  status.textContent = `Failed to start: ${err.message}`
  console.error(err)
})
