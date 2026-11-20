import { Parser, Language } from './vendor/web-tree-sitter.js'
import { buildModel, leafAt, blockAt } from './model.js'
import {
  applyEdit, insertText, deleteBackward, deleteForward, insertParagraph, toggleInline, tableStep, openContent, intoContent, addOption, addLabel, removeSide, addTab
} from './ops.js'
import {
  render, getSelection, setSelection, markActive, showDiagnostics, selectTab as showTab, setCodeHost, offsetOf
} from './view.js'
import { codeEdit, toSource, fromSource, sourceMarks, CODE_DIRECTIVES } from './code.js'
import { sourceEditor, CodeEditors } from './editors.js'
import { completionAt, matching, roleQuestion } from './lsp.js'
import { SparseSelection } from './sparse.js'
import { ContextMenu } from './contextmenu.js'
import { proseOf, sourceRange } from './grammar.js'
import { renderTree, foldersOf, ancestorsOf } from './nav.js'

const SAVE_DELAY_MS = 400
const POLL_MS = 1500
const HISTORY = 200

const view = document.getElementById('view')
const status = document.getElementById('status')
const title = document.getElementById('title')
const fileStatus = document.getElementById('file')
const toolbar = document.querySelector('.toolbar')
const docsButton = document.getElementById('toggle-docs')
const menu = document.getElementById('menu')
const tooltip = document.getElementById('tooltip')
const canvas = document.querySelector('.canvas')
const tree = document.getElementById('tree')
const frame = document.getElementById('frame')

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
  held: false,
  fileState: '',
  docs: { build: 'off', problem: null, url: null, page: null, revision: -1, diagnostics: [] },
  path: '',
  files: undefined,
  root: '',
  expanded: new Set(),
  sparse: new SparseSelection(),
  tab: 'source',
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
  if (edit) moveDiagnostics(before, edit)
}

// Until the next build, the warnings follow the lines that an edit moves
function moveDiagnostics(before, edit) {
  const count = text => text.split('\n').length - 1
  const delta = count(edit.text) - count(before.slice(edit.start, edit.end))
  if (!delta || !state.docs.diagnostics.length) return
  const row = count(before.slice(0, edit.start)) + 1
  state.docs.diagnostics = state.docs.diagnostics.map(item =>
    item.line > row ? { ...item, line: Math.max(item.line + delta, row) } : item)
}

function remember() {
  state.undo.push({ source: state.source, caret: { ...state.caret } })
  if (state.undo.length > HISTORY) state.undo.shift()
  state.redo = []
}

// An edit made in the view: { start, end, text, caret, anchor }
function commit(edit) {
  if (!edit) return
  // A heading made by typing its underline: see the input of the view
  const before = { source: state.source, caret: state.caret.focus }
  state.underlined = edit.underline && { marker: edit.underline, caret: edit.caret, before }
  remember()
  setSource(applyEdit(state.source, edit), edit)
  state.caret = { anchor: edit.anchor ?? edit.caret, focus: edit.caret }
  renderView(true)
  renderCode(true)
  changed()
}

function restore(from, to) {
  state.underlined = undefined
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
  codes.begin()
  render(view, state.model, caret)
  codes.end()
  showDiagnostics(view, state.model, state.docs.diagnostics)
}

function renderView(withCaret) {
  paint(withCaret ? state.caret.focus : undefined)
  if (withCaret && !focusCode(state.caret.anchor, state.caret.focus)) {
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

// The events of the code editors are theirs
const inCode = ev => Boolean(ev.target.closest?.('.cm-editor'))

view.addEventListener('beforeinput', ev => {
  if (inCode(ev)) return
  if (ev.inputType === 'insertCompositionText' || ev.isComposing)
    return
  ev.preventDefault()
  if (ev.inputType === 'historyUndo') return restore(state.undo, state.redo)
  if (ev.inputType === 'historyRedo') return restore(state.redo, state.undo)
  const handler = INPUT[ev.inputType]
  if (!handler) return
  const { a, b } = selection()
  // Right after a heading was made by typing its underline: the same
  // character again is the underline being typed out, it is already there;
  // another one means the line was text, as '- ' starting a list
  const made = state.underlined
  if (made && a === b && a === made.caret && ev.inputType === 'insertText' && state.source !== made.before.source) {
    if (ev.data === made.marker) return
    if (ev.data) {
      restore(state.undo, state.redo)
      state.redo = []
      const at = made.before.caret
      return commit(insertText(state.model, at, at, made.marker + ev.data))
    }
  }
  commit(handler(state.model, a, b, ev))
  if (/^(insertText|insertReplacementText|deleteContent)/.test(ev.inputType)) suggest()
  else closeMenu()
})

// Input methods edit the DOM themselves: take the result, then render again
view.addEventListener('compositionstart', ev => {
  if (inCode(ev)) return
  state.composing = selection()
})
view.addEventListener('compositionend', ev => {
  if (inCode(ev)) return
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
    document.body.classList.toggle(name, name.startsWith('no-') ? !value : value)
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
toggle(document.getElementById('toggle-nav'), 'no-nav', true)
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
  if (context.key(ev)) return
  if (inCode(ev) || menuKey(ev)) return
  // Down from the argument of a directive goes to its content, also when
  // there is none yet
  if (ev.key === 'ArrowDown' && !ev.shiftKey && !ev.ctrlKey && !ev.metaKey && !ev.altKey) {
    const { a, b } = selection()
    // The code is in its editor
    const owner = a === b ? leafAt(state.model, a)?.block : undefined
    const editor = owner?.kind === 'caption' && CODE_DIRECTIVES.has(owner.parent.name) && codes.of(owner.parent)
    if (editor) {
      ev.preventDefault()
      editor.view.focus()
      editor.view.dispatch({ selection: { anchor: 0 } })
      return
    }
    const edit = a === b ? intoContent(state.model, a) : undefined
    if (edit) {
      ev.preventDefault()
      commit(edit)
    }
    return
  }
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
    if (inCode(ev)) return
    const { a, b } = selection()
    if (a === b) return
    ev.clipboardData.setData('text/plain', state.source.slice(a, b))
    ev.preventDefault()
    if (name === 'cut') commit(deleteBackward(state.model, a, b))
  })
}
view.addEventListener('drop', ev => ev.preventDefault())

// A click on the empty content of a directive starts it
view.addEventListener('mousedown', ev => {
  if (inCode(ev)) return
  // A click on the title of a tab shows the tab
  const tab = ev.target.closest?.('.b-directive[data-name="tab-item"] > .b-caption')
  if (tab) showTab(view, tab.parentElement)

  const el = ev.target.closest?.('.content-hint, .add-option, .add-label, .remove-side, .add-tab')
  if (!el) return
  ev.preventDefault()
  view.focus()
  const block = el.closest('.block').block
  if (el.matches('.content-hint')) commit(openContent(state.model, block))
  else if (el.matches('.add-option')) commit(addOption(state.model, block))
  else if (el.matches('.add-label')) commit(addLabel(state.model, block))
  else if (el.matches('.add-tab')) commit(addTab(state.model, block))
  else commit(removeSide(state.model, block))
})

document.addEventListener('selectionchange', () => {
  if (document.activeElement !== view || state.composing) return
  const current = getSelection(view)
  if (!current) return
  state.caret = { anchor: current.anchor, focus: current.focus }
  if (state.underlined && (current.anchor !== current.focus || current.focus !== state.underlined.caret))
    state.underlined = undefined
  if (completion && (current.anchor !== current.focus || current.focus !== completion.caret)) closeMenu()
  flush()
  markActive(view, current.focus)
  renderCode(true)
  renderStatus()
})

// Code panel --------------------------------------------------------------------

const source = sourceEditor(document.getElementById('source'), {
  change(text, selection) {
    const edit = diff(state.source, text)
    remember()
    setSource(text, edit)
    state.caret = { anchor: selection.anchor, focus: selection.head }
    paint()
    markActive(view, selection.head, true)
    renderBackdrop()
    renderStatus()
    changed()
  },
  select(selection) {
    state.caret = { anchor: selection.anchor, focus: selection.head }
    markActive(view, selection.head, true)
    renderBackdrop()
    renderStatus()
  },
  undo: () => ACTIONS.undo(),
  redo: () => ACTIONS.redo()
})

// The colours of the source, made again when the source changes
let colours = { model: undefined, marks: [] }

// The marks of the source: its colours, the block of the caret, the last
// edit and the lines of the warnings
function renderBackdrop() {
  const { source: text, lastEdit, model } = state
  if (colours.model !== model) colours = { model, marks: sourceMarks(model) }
  const marks = [...colours.marks]
  const active = view.querySelector('.block.active')
  if (active) marks.push({ from: Number(active.dataset.s), to: Number(active.dataset.e), name: 'm-block' })
  if (lastEdit?.text) marks.push({ from: lastEdit.start, to: lastEdit.start + lastEdit.text.length, name: 'm-edit' })
  const { lineStarts } = model
  for (const item of state.docs.diagnostics) {
    const row = Math.min(Math.max(item.line - 1, 0), lineStarts.length - 1)
    marks.push({ from: lineStarts[row], to: lineStarts[row], line: true, name: `m-${item.severity}` })
  }
  if (text === source.view.state.doc.toString()) source.setMarks(marks)
}

// follow: move the caret of the code to the one of the view
function renderCode(follow) {
  source.setText(state.source)
  if (follow && !source.view.hasFocus && state.tab === 'source') {
    const { anchor, focus } = state.caret
    source.select(anchor, focus)
  }
  renderBackdrop()
}

// The code of the code directives ------------------------------------------------

const codes = new CodeEditors({
  change(editor, before, after) {
    const edit = codeEdit(editor.model, editor.code, before, after)
    if (!edit) return
    remember()
    setSource(applyEdit(state.source, edit), edit)
    // Moved to the page rendered again, the editor keeps its caret
    const { selection } = editor.view.state
    paint()
    keepCaret(editor, selection)
    codeCaret(editor)
    renderCode(true)
    changed()
  },
  select(editor) {
    codeCaret(editor)
    renderCode(true)
  },
  // Up from the first line, or down from the last one: the text before or after
  leave(editor, step) {
    const { block, directive } = editor.code
    const { leaves } = state.model
    let offset
    for (const l of leaves) {
      if (l.block === block) continue
      if (step < 0 && l.e <= (block?.s ?? directive.headEnd)) offset = Math.max(offset ?? l.e, l.e)
      if (step > 0 && l.s >= (block?.e ?? directive.headEnd)) offset = Math.min(offset ?? l.s, l.s)
    }
    if (offset === undefined) return
    state.caret = { anchor: offset, focus: offset }
    renderView(true)
    renderCode(true)
  },
  undo: () => ACTIONS.undo(),
  redo: () => ACTIONS.redo()
})
setCodeHost((model, directive) => codes.host(model, directive))

// The focus and the caret of an editor moved to the page rendered again: the
// browser lost its selection, it is written again
function keepCaret(editor, selection) {
  editor.view.focus()
  editor.view.dispatch({ selection: { anchor: selection.main.head === 0 ? Math.min(1, editor.view.state.doc.length) : 0 } })
  editor.view.dispatch({ selection })
}

// The caret of a code editor, as the caret of the source
function codeCaret(editor) {
  const { doc, selection } = editor.view.state
  const offset = pos => {
    const line = doc.lineAt(pos)
    return toSource(state.model, editor.code, line.number - 1, pos - line.from)
  }
  const { anchor, head } = selection.main
  state.caret = editor.code.block || doc.length
    ? { anchor: offset(anchor), focus: offset(head) }
    : { anchor: editor.code.directive.headEnd, focus: editor.code.directive.headEnd }
  markActive(view, state.caret.focus)
  renderStatus()
}

// Put the focus in the code editor of a caret: false when it is not in code
function focusCode(anchor, focus) {
  const editor = codes.at(focus)
  if (!editor) return false
  const { doc } = editor.view.state
  const pos = offset => {
    const at = fromSource(state.model, editor.code, offset)
    if (!at) return 0
    const line = doc.line(Math.min(at.line + 1, doc.lines))
    return Math.min(line.from + at.column, line.to)
  }
  editor.view.focus()
  editor.view.dispatch({ selection: { anchor: pos(anchor), head: pos(focus) }, scrollIntoView: true })
  return true
}

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
    const path = state.path
    const docs = await (await fetch(`api/docs?path=${encodeURIComponent(path)}`, { headers: { 'X-Doctools': '1' } })).json()
    if (path === state.path && (docs.revision !== state.docs.revision || docs.build !== state.docs.build ||
        docs.page !== state.docs.page || docs.diagnostics.length !== state.docs.diagnostics.length)) {
      if (docs.build === 'ready' && docs.revision !== state.docs.revision) builtAt = performance.now()
      state.docs = docs
      answers.clear()
      showDiagnostics(view, state.model, docs.diagnostics)
      renderBackdrop()
      renderDocs()
      renderPreview()
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
  flush()
}

// What can be completed at the caret, see completionAt
function contextAtCaret() {
  const { anchor, focus } = state.caret
  if (anchor !== focus) return undefined
  const { source } = state
  const lineStart = source.lastIndexOf('\n', focus - 1) + 1
  const lineEnd = source.indexOf('\n', focus)
  return completionAt(source.slice(lineStart, focus), source.slice(focus, lineEnd === -1 ? source.length : lineEnd))
}

// A role or a directive is being typed: the file is not saved meanwhile, a
// build of the half-written markup would only report it as an error
function completing() {
  if (state.docs.build === 'off' || document.activeElement !== view) return false
  return completion !== undefined || contextAtCaret() !== undefined
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
  const { focus } = state.caret
  const { source } = state
  const context = state.docs.build === 'off' ? undefined : contextAtCaret()
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
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') save(true)
})

// The menu of the right click -----------------------------------------------------

const context = new ContextMenu(document.getElementById('context'))

// The grammar of the texts checked, by text: a promise of the mistakes
const checked = new Map()

function checkGrammar(text) {
  if (!checked.has(text)) {
    if (checked.size > 200) checked.clear()
    checked.set(text, fetch('api/grammar', {
      method: 'POST', headers: { 'X-Doctools': '1', 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    }).then(r => r.json()).catch(() => ({ error: 'unreachable' })).then(answer => {
      if (answer.error) checked.delete(text)
      return answer
    }))
  }
  return checked.get(text)
}

// The block of prose of an offset: a paragraph, a heading, an item, a cell
function proseAt(offset) {
  const block = leafAt(state.model, offset)?.block ?? blockAt(state.model, offset)
  if (!block?.inlines || block.kind === 'raw' || block.kind === 'option' || block.kind === 'target') return undefined
  return block
}

// The grammar part of the menu: a mistake at the offset and what replaces it
function grammarItems(answer, prose, offset) {
  if (!answer) return [{ kind: 'note', label: 'Checking the grammar…' }]
  if (answer.error) return []
  const source = state.source
  for (const match of answer.matches ?? []) {
    const range = sourceRange(prose, match.offset, match.length)
    if (!range || offset < range.s || offset > range.e) continue
    const items = [{ kind: 'note', label: match.message }]
    for (const value of match.replacements.slice(0, 5)) {
      items.push({
        kind: 'suggestion', label: value || '(remove)',
        run: () => {
          if (state.source !== source) return
          commit(insertText(state.model, range.s, range.e, value))
        }
      })
    }
    if (!match.replacements.length) items.push({ kind: 'note', label: 'No suggestion' })
    return [...items, { kind: 'separator' }]
  }
  return []
}

function menuItems(a, b) {
  const model = state.model
  const items = [
    { label: 'Bold', keys: 'Ctrl+B', run: () => commit(toggleInline(state.model, a, b, 'bold')) },
    { label: 'Italic', keys: 'Ctrl+I', run: () => commit(toggleInline(state.model, a, b, 'italic')) },
    { label: 'Literal', keys: 'Ctrl+E', run: () => commit(toggleInline(state.model, a, b, 'code')) }
  ]

  // What can be added to the block there
  const block = blockAt(model, a)
  const heading = block?.kind === 'heading' ? block : block?.parent?.kind === 'heading' ? block.parent : undefined
  let directive
  for (let up = block; up; up = up.parent) if (up.kind === 'directive') { directive = up; break }
  const extra = []
  if (heading) extra.push({ label: 'Add a label', run: () => commit(addLabel(state.model, heading)) })
  if (directive) extra.push({ label: `Add an option to ${directive.name}`, run: () => commit(addOption(state.model, directive)) })
  let tabSet
  for (let up = block; up; up = up.parent) if (up.name === 'tab-set') { tabSet = up; break }
  if (tabSet) extra.push({ label: 'Add a tab', run: () => commit(addTab(state.model, tabSet)) })
  if (extra.length) items.push({ kind: 'separator' }, ...extra)

  items.push(
    { kind: 'separator' },
    { label: 'Undo', keys: 'Ctrl+Z', disabled: !state.undo.length, run: () => ACTIONS.undo() },
    { label: 'Redo', keys: 'Ctrl+Y', disabled: !state.redo.length, run: () => ACTIONS.redo() }
  )
  return items
}

view.addEventListener('contextmenu', ev => {
  // Shift and the right click: the menu of the browser
  if (ev.shiftKey || inCode(ev)) return
  ev.preventDefault()
  closeMenu()

  // A click outside the selection puts the caret there
  let { a, b } = selection()
  const keyboard = ev.button !== 2 && ev.clientX === 0 && ev.clientY === 0
  if (!keyboard) {
    const point = document.caretPositionFromPoint?.(ev.clientX, ev.clientY)
    const offset = point && view.contains(point.offsetNode) ? offsetOf(view, point.offsetNode, point.offset) : undefined
    if (offset !== undefined && (offset < a || offset > b || a === b)) {
      a = b = offset
      state.caret = { anchor: offset, focus: offset }
      setSelection(view, offset)
      markActive(view, offset)
      renderCode(true)
    }
  }
  let x = ev.clientX
  let y = ev.clientY
  if (keyboard) {
    const rect = window.getSelection().rangeCount ? window.getSelection().getRangeAt(0).getBoundingClientRect() : view.getBoundingClientRect()
    x = rect.left
    y = rect.bottom
  }

  const items = menuItems(a, b)
  const block = a === b ? proseAt(a) : undefined
  if (!block) return context.show(x, y, items)

  const prose = proseOf(state.model, block)
  if (!prose.text.trim()) return context.show(x, y, items)
  const source = state.source
  const pending = checkGrammar(prose.text)
  let answer
  context.show(x, y, [...grammarItems(answer, prose, a), ...items])
  pending.then(result => {
    answer = result
    if (context.open && state.source === source) context.update([...grammarItems(answer, prose, a), ...items])
  })
})

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

const api = (path, options = {}) => fetch(`api/file?path=${encodeURIComponent(path)}`,
  { ...options, headers: { 'X-Doctools': '1', ...options.headers } })

let saveTimer

function changed() {
  state.dirty = true
  setFileState('Saving…')
  clearTimeout(saveTimer)
  saveTimer = setTimeout(() => save(), SAVE_DELAY_MS)
}

// Save what was held back while a completion was taking place
function flush() {
  if (state.held && !completing()) changed()
}

// force: also while a completion is taking place
async function save(force) {
  if (!state.dirty) return
  if (state.saving) return changed()
  if (force !== true && completing()) {
    state.held = true
    return setFileState('Not saved while completing')
  }
  state.held = false
  state.saving = true
  const text = state.source
  const path = state.path
  try {
    const response = await api(path, { method: 'PUT', body: text })
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)
    if (path === state.path) state.mtime = (await response.json()).mtime
    if (path === state.path && state.source === text) {
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
      const path = state.path
      const file = await (await api(path)).json()
      if (path !== state.path) {
        // Another file was opened meanwhile
      } else if (file.mtime !== state.mtime && !state.dirty && file.text !== state.source) {
        remember()
        setSource(file.text, diff(state.source, file.text))
        paint()
        renderCode(false)
        renderStatus()
        setFileState('Reloaded from the file')
      }
      if (path === state.path) state.mtime = file.mtime
    }
  } catch { }
  setTimeout(poll, POLL_MS)
}

// Show a file of the server: { path, absolute, name, mtime, text }
function show(file) {
  state.path = file.path
  state.mtime = file.mtime
  state.undo = []
  state.redo = []
  state.caret = { anchor: 0, focus: 0 }
  state.dirty = false
  state.held = false
  state.docs = { ...state.docs, diagnostics: [], page: null }
  setSource(file.text)
  state.lastEdit = undefined
  document.title = `${file.name} - Doctools`
  title.textContent = file.path
  title.title = file.absolute
  history.replaceState(null, '', `#${encodeURIComponent(file.path)}`)
  setFileState('Saved')
  closeMenu()
  renderView(false)
  renderCode(false)
  canvas.scrollTop = 0
  for (const folder of ancestorsOf(file.path)) state.expanded.add(folder)
  drawTree()
  pollDocs(true)
}

// Open another file, what is not saved of this one is saved first
async function openFile(path) {
  if (path === state.path) return
  clearTimeout(saveTimer)
  await save(true)
  const response = await api(path)
  if (!response.ok) return setFileState(`Cannot open ${path}`)
  show(await response.json())
}

// Files and sparse build ------------------------------------------------------

function drawTree() {
  if (!state.files) return
  renderTree(tree, state.files, { current: state.path, expanded: state.expanded, selection: state.sparse })
  const count = state.sparse.size
  document.getElementById('sparse-state').textContent = count
    ? `Building ${count} folder${count > 1 ? 's' : ''}`
    : 'Files'
  document.getElementById('sparse-clear').hidden = !count
}

const store = (name, value) => {
  try {
    localStorage.setItem(`doctools.${name}:${state.root}`, JSON.stringify(value))
  } catch { }
}
const stored = name => {
  try {
    return JSON.parse(localStorage.getItem(`doctools.${name}:${state.root}`) ?? 'null')
  } catch {
    return null
  }
}

let sparseTimer

// Tell the server what to build, it builds again when it is running
function sparseChanged() {
  store('sparse', state.sparse.toArray())
  drawTree()
  clearTimeout(sparseTimer)
  sparseTimer = setTimeout(() => post('api/docs/sparse', { paths: state.sparse.toArray() }).catch(() => {}), 300)
}

tree.addEventListener('click', ev => {
  const row = ev.target.closest('.tree-row')
  if (!row) return
  const { path } = row.dataset
  if (row.classList.contains('file')) return openFile(path)
  if (ev.target.closest('.check')) {
    state.sparse.toggle(path, parent => foldersOf(state.files, parent))
    return sparseChanged()
  }
  if (state.expanded.has(path)) state.expanded.delete(path)
  else state.expanded.add(path)
  store('expanded', [...state.expanded])
  drawTree()
})

document.getElementById('sparse-clear').addEventListener('click', () => {
  state.sparse = new SparseSelection()
  sparseChanged()
})

async function loadTree() {
  try {
    const answer = await (await fetch('api/tree', { headers: { 'X-Doctools': '1' } })).json()
    const first = !state.files
    state.files = answer.tree
    state.root = answer.root
    if (first) {
      state.expanded = new Set([...(stored('expanded') ?? []), ...ancestorsOf(state.path)])
      state.sparse = new SparseSelection(stored('sparse') ?? [])
      if (state.sparse.size) post('api/docs/sparse', { paths: state.sparse.toArray() }).catch(() => {})
    }
    drawTree()
  } catch { }
}
window.addEventListener('focus', loadTree)

// Live view ---------------------------------------------------------------------

const originOf = () => state.docs.url ? new URL(state.docs.url).origin : undefined
let previewReady = false

function renderPreview() {
  const { url, page, build, problem } = state.docs
  const empty = document.getElementById('preview-empty')
  const shown = state.tab === 'preview'
  const target = url && page ? originOf() + page : undefined
  frame.hidden = !target
  empty.hidden = Boolean(target)
  document.getElementById('preview-start').hidden = Boolean(problem) || build !== 'off'
  document.getElementById('preview-text').textContent = problem
    ?? (build === 'off' ? 'The live view shows the built page of this file.'
      : build === 'building' && !url ? 'Building the documentation…'
        : 'This file is not a page of the documentation.')
  if (!shown) return
  if (!target) {
    frame.removeAttribute('src')
    delete frame.dataset.src
    previewReady = false
  } else if (frame.dataset.src !== target) {
    previewReady = false
    frame.dataset.src = target
    frame.src = target
  }
}

// The page of the server follows the editor, through its editor-sync script
const toFrame = message => {
  if (originOf() && frame.contentWindow) frame.contentWindow.postMessage({ adoc: message }, originOf())
}

// The source line at the top of the page of the editor
function topLine() {
  const top = canvas.getBoundingClientRect().top + 8
  const { lineStarts } = state.model
  const lineOf = offset => {
    let row = 0
    while (row + 1 < lineStarts.length && lineStarts[row + 1] <= offset) row++
    return row + 1
  }
  for (const el of view.querySelectorAll('.b-document > .block')) {
    const rect = el.getBoundingClientRect()
    if (rect.bottom <= top) continue
    const first = lineOf(Number(el.dataset.s))
    const last = lineOf(Number(el.dataset.e))
    const inside = rect.height > 0 ? Math.min(Math.max((top - rect.top) / rect.height, 0), 1) : 0
    return first + inside * (last - first + 1)
  }
  return lineStarts.length
}

let followUntil = 0

function syncPreview() {
  if (state.tab !== 'preview' || !previewReady || performance.now() < followUntil) return
  toFrame({ type: 'scroll', line: canvas.scrollTop <= 0 ? 1 : topLine(), lines: state.model.lineStarts.length })
}

frame.addEventListener('load', () => toFrame({ type: 'host' }))
window.addEventListener('message', ev => {
  if (ev.source !== frame.contentWindow || ev.origin !== originOf() || !ev.data?.adoc) return
  const message = ev.data.adoc
  const { page } = state.docs
  if (message.type === 'ready') {
    if (message.path === page) {
      previewReady = true
      syncPreview()
    } else if (performance.now() - builtAt < REBUILD_RESET_MS) {
      // A full build loads the first page again: go back to the page of the file
      toFrame({ type: 'navigate', path: page })
    } else {
      // A link was followed in the live view: open the file of that page
      previewReady = false
      const path = sourceOf(message.path)
      if (path) openFile(path)
    }
  } else if (message.type === 'scroll' && typeof message.line === 'number' && message.path === page) {
    scrollToLine(message.line)
  }
})

const REBUILD_RESET_MS = 5000
let builtAt = 0

// The file of a page of the documentation, when it is one of the tree
function sourceOf(page) {
  const { sources } = state.docs
  if (sources === null || sources === undefined || !state.files) return undefined
  const name = decodeURIComponent(page.split(/[?#]/)[0]).replace(/\/index\.html$/, '/').replace(/^\/+|\/+$/g, '')
  const prefix = sources === '.' || sources === '' ? '' : `${sources}/`
  const candidates = name === '' ? ['index.rst'] : [`${name}.rst`, `${name}/index.rst`]
  const has = path => {
    let node = state.files
    const parts = path.split('/')
    for (const part of parts.slice(0, -1)) {
      node = node.dirs.find(dir => dir.name === part)
      if (!node) return false
    }
    return node.files.some(file => file.path === path)
  }
  return candidates.map(candidate => prefix + candidate).find(has)
}

// The live view was scrolled: show the same line at the top of the editor
function scrollToLine(line) {
  const { lineStarts } = state.model
  const lineOf = offset => {
    let row = 0
    while (row + 1 < lineStarts.length && lineStarts[row + 1] <= offset) row++
    return row + 1
  }
  const top = canvas.getBoundingClientRect().top
  let target
  for (const el of view.querySelectorAll('.b-document > .block')) {
    const first = lineOf(Number(el.dataset.s))
    const last = lineOf(Number(el.dataset.e))
    const rect = el.getBoundingClientRect()
    if (line < first) {
      target ??= rect.top
      break
    }
    const inside = Math.min(Math.max((line - first) / (last - first + 1), 0), 1)
    target = rect.top + inside * rect.height
    if (line <= last) break
  }
  if (target === undefined) return
  followUntil = performance.now() + 400
  canvas.scrollTop += target - top - 8
}

let scrollFrame = 0
canvas.addEventListener('scroll', () => {
  if (scrollFrame) return
  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = 0
    syncPreview()
  })
}, { passive: true })

document.getElementById('preview-start').addEventListener('click', () => docsButton.click())

// Tabs of the side pane
function selectTab(name) {
  state.tab = name
  for (const tab of document.querySelectorAll('.tab'))
    tab.setAttribute('aria-selected', String(tab.dataset.tab === name))
  document.getElementById('source').hidden = name !== 'source'
  document.getElementById('preview').hidden = name !== 'preview'
  try {
    localStorage.setItem('doctools.tab', name)
  } catch { }
  renderPreview()
  if (name === 'source') renderCode(true)
}
document.querySelector('.tabs').addEventListener('click', ev => {
  const tab = ev.target.closest('.tab')
  if (tab) selectTab(tab.dataset.tab)
})

async function main() {
  await Parser.init()
  const language = await Language.load(new URL('./vendor/tree-sitter-rst.wasm', import.meta.url).href)
  state.parser = new Parser()
  state.parser.setLanguage(language)

  // The file of the address, else the one the server was started with
  let response = await api(decodeURIComponent(location.hash.slice(1)))
  if (!response.ok) response = await api('')
  setSource('')
  show(await response.json())
  let tab = 'source'
  try {
    tab = localStorage.getItem('doctools.tab') === 'preview' ? 'preview' : 'source'
  } catch { }
  selectTab(tab)
  await loadTree()
  setTimeout(poll, POLL_MS)
  pollDocs()

  // For the tests and the console
  window.doctools = { state, view, code: source.view, codes, openFile, preview: () => ({ ready: previewReady }) }
}

main().catch(err => {
  status.textContent = `Failed to start: ${err.message}`
  console.error(err)
})
