import { Parser, Language } from './vendor/web-tree-sitter.js'
import { buildModel, leafAt, blockAt } from './model.js'
import {
  applyEdit, insertText, deleteBackward, deleteForward, insertParagraph, toggleInline, tableStep, openContent, intoContent, addOption, addLabel, removeSide, addTab, shiftItem, removeDirective
} from './ops.js'
import {
  render, getSelection, setSelection, markActive, showDiagnostics, selectTab as showTab, setCodeHost, offsetOf, pointOf,
  setImageUrl
} from './view.js'
import { codeEdit, toSource, fromSource, sourceMarks, CODE_DIRECTIVES } from './code.js'
import { sourceEditor, CodeEditors } from './editors.js'
import { completionAt, matching, roleQuestion } from './lsp.js'
import { SparseSelection } from './sparse.js'
import { ContextMenu } from './contextmenu.js'
import { proseOf, sourceRange } from './grammar.js'
import { lineChanges } from './gitdiff.js'
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
  // What git knows: { available, branch, files, head }, head: the text of
  // the open file in the last commit
  git: { available: false, branch: null, files: {}, head: null },
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
  showMistakes()
  showGitMarks()
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
  deleteContentBackward: (m, a, b) => deleteBackward(m, a, b, { repeat: held }),
  deleteContentForward: (m, a, b) => deleteForward(m, a, b),
  deleteByCut: (m, a, b) => deleteBackward(m, a, b),
  deleteWordBackward: (m, a, b) => deleteBackward(m, a, b),
  deleteWordForward: (m, a, b) => deleteForward(m, a, b),
  formatBold: (m, a, b) => toggleInline(m, a, b, 'bold'),
  formatItalic: (m, a, b) => toggleInline(m, a, b, 'italic')
}

// Backspace is held down: see deleteBackward
let held = false

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
toolbar.addEventListener('mousedown', ev => {
  if (!ev.target.closest('select')) ev.preventDefault()
})
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

// A panel is hidden with the button in it, and shown with the one that is
// in its place when it is hidden
function panel(name, open, close) {
  const apply = shown => {
    document.body.classList.toggle(name, !shown)
    try {
      localStorage.setItem(`doctools.${name}`, String(shown))
    } catch { }
  }
  let stored = null
  try {
    stored = localStorage.getItem(`doctools.${name}`)
  } catch { }
  apply(stored !== 'false')
  open.addEventListener('click', () => apply(true))
  close.addEventListener('click', () => apply(false))
  return apply
}
panel('no-nav', document.getElementById('open-nav'), document.getElementById('close-nav'))
const showSidePane = panel('no-source', document.getElementById('open-source'), document.getElementById('close-source'))

// The structure can be shown or hidden
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
toggle(document.getElementById('toggle-inspect'), 'inspect', false)

// The theme, as the Doctools theme does: the system one until another is
// chosen; choosing the one of the system again forgets the choice
const systemDark = matchMedia('(prefers-color-scheme: dark)')
const systemTheme = () => systemDark.matches ? 'dark' : 'light'
function chosenTheme() {
  try {
    return localStorage.getItem('theme')
  } catch {
    return null
  }
}
const applyTheme = theme => document.documentElement.classList.toggle('dark', theme === 'dark')
document.getElementById('toggle-theme').addEventListener('click', () => {
  const theme = (chosenTheme() ?? systemTheme()) === 'dark' ? 'light' : 'dark'
  try {
    if (theme === systemTheme()) localStorage.removeItem('theme')
    else localStorage.setItem('theme', theme)
  } catch { }
  applyTheme(theme)
})
systemDark.addEventListener('change', () => applyTheme(chosenTheme() ?? systemTheme()))

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
  if (ev.key === 'Backspace') held = ev.repeat
  // Tab: the next cell of a table, or the value of an option; in a list
  // item, the item goes in or out. It never leaves the page.
  if (ev.key === 'Tab' && !ev.ctrlKey && !ev.metaKey && !ev.altKey) {
    ev.preventDefault()
    const { a, b } = selection()
    const step = ev.shiftKey ? -1 : 1
    if (!stepCell(step) && a === b) commit(shiftItem(state.model, a, step))
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
  for (const [rows, name] of gitRows()) {
    for (const row of rows) {
      const at = row < 0 ? 0 : row
      if (at < lineStarts.length) marks.push({ from: lineStarts[at], to: lineStarts[at], line: true, name })
    }
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
  // Backspace at the very start of the code: the directive goes, with its code
  remove(editor) {
    commit(removeDirective(state.model, editor.code.directive))
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
setCodeHost((model, directive, old) => codes.host(model, directive, old))
// The images of the page: from the server, relative to the open file
setImageUrl(src => /^(https?:)?\/\//.test(src) || src.startsWith('data:')
  ? src
  : `api/asset?from=${encodeURIComponent(state.path)}&src=${encodeURIComponent(src)}`)

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

// Git ---------------------------------------------------------------------------

let gitTimer
const loadGitSoon = () => {
  clearTimeout(gitTimer)
  gitTimer = setTimeout(loadGit, 300)
}

async function loadGit() {
  try {
    const path = state.path
    const answer = await (await fetch(`api/git?path=${encodeURIComponent(path)}`, { headers: { 'X-Doctools': '1' } })).json()
    if (path !== state.path) return
    state.git = {
      available: Boolean(answer.available), branch: answer.branch ?? null, files: answer.files ?? {},
      head: answer.head ?? null, staged: Boolean(answer.staged)
    }
  } catch {
    return
  }
  gitCache = undefined
  await loadHunks()
  drawTree()
  setFileState()
  renderBackdrop()
  showGitMarks()
  // Only what is staged is committed
  document.getElementById('commit-do').disabled = !state.git.staged
  document.getElementById('commit-title').textContent = state.git.staged ? 'Commit the staged changes' : 'Stage changes to commit them'
  document.querySelector('.tab[data-tab=changes]').hidden = !state.git.available
  if (state.tab === 'changes') loadChanges()
}

// The changes of the files, not staged and staged: a click on a change
// stages it, or unstages it
const changesPane = document.getElementById('changes')
const changesList = document.getElementById('changes-list')
let changesRun = 0

async function loadChanges() {
  const run = ++changesRun
  let answer
  try {
    answer = await (await fetch('api/git/changes', { headers: { 'X-Doctools': '1' } })).json()
  } catch {
    return
  }
  if (run !== changesRun) return
  renderChanges(answer)
}

function element(tag, className, text) {
  const el = document.createElement(tag)
  if (className) el.className = className
  if (text !== undefined) el.textContent = text
  return el
}

function renderChanges({ unstaged = [], staged = [], untracked = [] }) {
  const top = changesPane.scrollTop
  const section = (title, files, isStaged) => {
    const count = files.reduce((n, f) => n + Math.max(f.hunks?.length ?? 1, 1), 0)
    const box = element('section', 'changes-group')
    const head = element('div', 'changes-head')
    head.append(element('span', 'changes-title', `${title}${count ? ` (${count})` : ''}`))
    if (files.length) {
      const all = element('button', 'text-button plain', isStaged ? 'Unstage all' : 'Stage all')
      all.type = 'button'
      all.dataset.all = isStaged ? 'staged' : 'unstaged'
      head.append(all)
    }
    box.append(head)
    if (!files.length) box.append(element('p', 'changes-empty', isStaged ? 'Nothing staged.' : 'No change.'))
    for (const file of files) {
      const el = element('div', 'changes-file')
      const name = element('div', 'changes-name')
      const link = element('button', 'changes-path', file.path)
      link.type = 'button'
      link.dataset.open = file.path
      link.title = 'Open the file'
      name.append(link)
      if (file.untracked) name.append(element('span', 'changes-new', 'new'))
      const whole = element('button', 'icon-button changes-whole', isStaged ? '−' : '+')
      whole.type = 'button'
      whole.title = isStaged ? 'Unstage the file' : 'Stage the file'
      Object.assign(whole.dataset, { path: file.path, staged: String(isStaged) })
      name.append(whole)
      el.append(name)
      ;(file.hunks ?? []).forEach((hunk, i) => {
        const block = element('div', 'changes-hunk')
        Object.assign(block.dataset, { path: file.path, hunk: String(i), header: hunk.header, staged: String(isStaged) })
        block.title = isStaged ? 'Click to unstage this change' : 'Click to stage this change'
        const range = hunk.header.match(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@\s?(.*)$/)
        const at = element('div', 'changes-at')
        at.append(element('span', 'changes-where', range ? `line ${range[1]}${range[3] ? `  ${range[3]}` : ''}` : hunk.header))
        // A change that is not staged can be thrown away; undo brings it back
        if (!isStaged) {
          const discard = element('button', 'changes-discard', 'Discard')
          discard.type = 'button'
          discard.title = 'Throw this change away (undo brings it back, for the open file)'
          at.append(discard)
        }
        block.append(at)
        const pre = element('pre', 'changes-lines')
        for (const line of hunk.lines) {
          const kind = line[0] === '+' ? 'add' : line[0] === '-' ? 'del' : 'ctx'
          pre.append(element('span', `changes-line ${kind}`, line.slice(1) || ' '))
        }
        block.append(pre)
        el.append(block)
      })
      box.append(el)
    }
    return box
  }
  const notStaged = [...unstaged, ...untracked.map(path => ({ path, untracked: true, hunks: [] }))]
  changesList.replaceChildren(section('Staged', staged, true), section('Changes', notStaged, false))
  changesPane.scrollTop = top
}

async function stage(body) {
  // What is typed is in the file first
  await save(true)
  const answer = await post('api/git/stage', body).catch(() => ({ error: 'adoc-gui is not running' }))
  if (answer.error) setFileState(answer.error.split('\n')[0])
  loadGit()
  loadChanges()
}

changesList.addEventListener('click', async ev => {
  const open = ev.target.closest('[data-open]')
  if (open) return openFile(open.dataset.open)
  const all = ev.target.closest('[data-all]')
  if (all) {
    const staged = all.dataset.all === 'staged'
    const paths = [...changesList.querySelectorAll(`.changes-whole[data-staged="${staged}"]`)].map(el => el.dataset.path)
    await save(true)
    for (const path of paths) await post('api/git/stage', { path, staged }).catch(() => {})
    loadGit()
    return loadChanges()
  }
  const discard = ev.target.closest('.changes-discard')
  if (discard) {
    const hunk = discard.closest('.changes-hunk')
    hunk.classList.add('busy')
    return discardChange({ path: hunk.dataset.path, hunk: Number(hunk.dataset.hunk), header: hunk.dataset.header })
  }
  const whole = ev.target.closest('.changes-whole')
  if (whole) return stage({ path: whole.dataset.path, staged: whole.dataset.staged === 'true' })
  const hunk = ev.target.closest('.changes-hunk')
  if (hunk && !window.getSelection().toString()) {
    hunk.classList.add('busy')
    stage({ path: hunk.dataset.path, hunk: Number(hunk.dataset.hunk), header: hunk.dataset.header, staged: hunk.dataset.staged === 'true' })
  }
})

// The changes of the open file as git has them, to stage them from the page:
// [{ staged, index, header, lines, start, end }], start and end: its lines in
// the file, from 1
let hunks = []
async function loadHunks() {
  let answer
  try {
    answer = await (await fetch('api/git/changes', { headers: { 'X-Doctools': '1' } })).json()
  } catch {
    return
  }
  const of = (files, staged) => (files ?? []).filter(f => f.path === state.path).flatMap(f => f.hunks.map((hunk, index) => {
    const range = hunk.header.match(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@/)
    const start = range ? Number(range[1]) : 0
    const count = range && range[2] !== undefined ? Number(range[2]) : 1
    return { staged, index, header: hunk.header, lines: hunk.lines, start, end: start + Math.max(count, 1) - 1 }
  }))
  hunks = [...of(answer.unstaged, false), ...of(answer.staged, true)]
}

// The lines that changed, kept until the source or the commit changes
let gitCache
function gitChanges() {
  const { head } = state.git
  if (head === null || head === undefined) return undefined
  if (gitCache?.source !== state.source || gitCache?.head !== head)
    gitCache = { source: state.source, head, changes: lineChanges(head, state.source) }
  return gitCache.changes
}

// [rows, the class of their lines in the source]
function gitRows() {
  const changes = gitChanges()
  if (!changes) return []
  return [[changes.added, 'm-git-added'], [changes.changed, 'm-git-changed'], [changes.deleted.map(row => row + 1), 'm-git-deleted']]
}

// The bars at the right of the page, beside the blocks that changed
const gitLayer = document.createElement('div')
gitLayer.className = 'git-marks'
gitLayer.setAttribute('aria-hidden', 'true')
canvas.append(gitLayer)

function showGitMarks() {
  const changes = gitChanges()
  if (!changes || (!changes.added.length && !changes.changed.length && !changes.deleted.length)) {
    hidePeek(false)
    return gitLayer.replaceChildren()
  }
  const { lineStarts } = state.model
  const kinds = new Map()
  for (const row of changes.added) kinds.set(row, 'added')
  for (const row of changes.changed) kinds.set(row, 'changed')
  const deleted = new Set(changes.deleted.map(row => row + 1))

  // The innermost blocks that hold a line, one bar by block
  const blocks = [...view.querySelectorAll('.block')].filter(el => el.dataset.kind !== 'document' && el.getClientRects().length)
  const spans = blocks.map(el => ({ el, s: Number(el.dataset.s), e: Number(el.dataset.e) }))
  const rowOf = offset => {
    let lo = 0, hi = lineStarts.length - 1
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1
      if (lineStarts[mid] <= offset) lo = mid
      else hi = mid - 1
    }
    return lo
  }
  const marks = new Map()
  const holder = row => {
    const at = lineStarts[Math.min(row, lineStarts.length - 1)]
    let best
    for (const span of spans) {
      if (span.s <= at + 200 && span.e >= at && rowOf(span.s) <= row && rowOf(span.e) >= row)
        if (!best || (span.e - span.s) < (best.e - best.s)) best = span
    }
    if (best) return best
    // A line between blocks: the block after it
    return spans.find(span => span.s >= at)
  }
  const markOf = el => {
    if (!marks.has(el)) marks.set(el, { kinds: new Set(), rows: [] })
    return marks.get(el)
  }
  for (const [row, kind] of kinds) {
    const span = holder(row)
    if (!span) continue
    const mark = markOf(span.el)
    mark.kinds.add(kind)
    mark.rows.push(row)
  }
  for (const row of deleted) {
    const span = holder(row)
    if (!span) continue
    const mark = markOf(span.el)
    mark.deleted = true
    mark.rows.push(row)
  }

  const base = canvas.getBoundingClientRect()
  // At the right of the page, inside its edge
  const left = view.getBoundingClientRect().right - base.left + canvas.scrollLeft - 9
  gitLayer.replaceChildren(...[...marks].map(([el, mark]) => {
    const rect = el.getBoundingClientRect()
    const bar = document.createElement('div')
    const kind = mark.kinds.has('changed') || mark.kinds.size > 1 ? 'changed' : mark.kinds.has('added') ? 'added' : 'deleted'
    bar.className = `git-bar ${kind}`
    bar.style.left = `${left}px`
    bar.style.top = `${rect.top - base.top + canvas.scrollTop}px`
    bar.style.height = `${kind === 'deleted' ? 0 : rect.height}px`
    bar.dataset.from = Math.min(...mark.rows) + 1
    bar.dataset.to = Math.max(...mark.rows) + 1
    return bar
  }))
}

// On the pointer, a bar opens to the change it is part of, to stage it, or
// unstage it: the bars of the page, and the ones of the lines of the source
const peek = document.createElement('div')
peek.className = 'git-peek'
let peekTimer
let peekHunk
let peekKey

// from, to: the lines of the file, from 1
function hunkAt(from, to) {
  // A removed line is between two lines: the change ends or starts there
  return hunks.find(h => !h.staged && h.start <= to + 1 && h.end >= from - 1) ??
    hunks.find(h => h.staged && h.start <= to + 1 && h.end >= from - 1)
}

// anchor: the rectangle of the bar on the screen; side: where the change
// opens, 'left' of the bar (the page) or 'right' of it (the source)
function showPeek(from, to, anchor, side) {
  keepPeek()
  const hunk = hunkAt(from, to)
  const key = `${side}:${hunk ? `${hunk.staged}:${hunk.index}` : from}`
  if (key === peekKey && peek.isConnected) return
  peekKey = key
  peekHunk = hunk
  peek.replaceChildren()
  const head = element('div', 'git-peek-head')
  if (!hunk) {
    head.append(element('span', 'git-peek-at', state.dirty ? 'Not saved yet' : 'Changed since the last commit'))
    peek.append(head)
  } else {
    head.append(element('span', 'git-peek-at', `line ${hunk.start}${hunk.staged ? ' · staged' : ''}`))
    const actions = element('span', 'git-peek-actions')
    // A change that is not staged can be thrown away; undo brings it back
    if (!hunk.staged) {
      const discard = element('button', 'text-button plain git-peek-discard', 'Discard')
      discard.type = 'button'
      discard.title = 'Throw this change away (undo brings it back)'
      actions.append(discard)
    }
    const button = element('button', `text-button git-peek-do${hunk.staged ? ' plain' : ''}`, hunk.staged ? '− Unstage' : '+ Stage')
    button.type = 'button'
    actions.append(button)
    head.append(actions)
    const pre = element('pre', 'changes-lines')
    for (const line of hunk.lines) {
      const kind = line[0] === '+' ? 'add' : line[0] === '-' ? 'del' : 'ctx'
      pre.append(element('span', `changes-line ${kind}`, line.slice(1) || ' '))
    }
    peek.append(head, pre)
  }
  // The page: at the left of its bar, beside the block; the source: below
  // the line, in the room that is left at its right
  const room = side === 'left' ? anchor.left - 14 : window.innerWidth - anchor.left - 14
  const width = Math.min(520, Math.max(room, 280), window.innerWidth - 16)
  peek.style.width = `${width}px`
  document.body.append(peek)
  peek.classList.add('open')
  const left = side === 'left' ? anchor.left - 6 - width : anchor.left
  const top = side === 'left' ? anchor.top : anchor.bottom + 2
  peek.style.left = `${Math.min(Math.max(left, 8), window.innerWidth - width - 8)}px`
  peek.style.top = `${Math.max(Math.min(top, window.innerHeight - peek.offsetHeight - 8), 8)}px`
}

function hidePeek(later = true) {
  const hide = () => {
    peekTimer = undefined
    peek.classList.remove('open')
    peek.remove()
    peekHunk = undefined
    peekKey = undefined
  }
  if (!later) {
    clearTimeout(peekTimer)
    return hide()
  }
  // Once: the pointer that goes on moving does not keep it open
  if (peekTimer === undefined && peek.isConnected) peekTimer = setTimeout(hide, 250)
}

function keepPeek() {
  clearTimeout(peekTimer)
  peekTimer = undefined
}

// The bars of the page
gitLayer.addEventListener('mouseover', ev => {
  const bar = ev.target.closest('.git-bar')
  if (bar) showPeek(Number(bar.dataset.from), Number(bar.dataset.to), bar.getBoundingClientRect(), 'left')
})
gitLayer.addEventListener('mouseout', ev => {
  if (!peek.contains(ev.relatedTarget) && !ev.relatedTarget?.closest?.('.git-bar')) hidePeek()
})

// The bars of the lines of the source: the space at the left of a line
const sourceDom = source.view.dom
sourceDom.addEventListener('mousemove', ev => {
  const line = ev.target.closest?.('.cm-line')
  const marked = line && /\bm-git-(added|changed|deleted)\b/.test(line.className)
  const rect = line?.getBoundingClientRect()
  if (!marked || ev.clientX > rect.left + 12) {
    if (peekKey?.startsWith('right:')) hidePeek()
    return
  }
  const number = source.view.state.doc.lineAt(source.view.posAtDOM(line)).number
  showPeek(number, number, { left: rect.left, right: rect.left + 4, top: rect.top, bottom: rect.bottom }, 'right')
})
sourceDom.addEventListener('mouseleave', ev => {
  if (!peek.contains(ev.relatedTarget)) hidePeek()
})
peek.addEventListener('mouseenter', keepPeek)
peek.addEventListener('mouseleave', ev => {
  if (!ev.relatedTarget?.closest?.('.git-bar')) hidePeek()
})
canvas.addEventListener('scroll', () => hidePeek(false), { passive: true })
source.view.scrollDOM.addEventListener('scroll', () => hidePeek(false), { passive: true })
peek.addEventListener('mousedown', ev => ev.preventDefault())
peek.addEventListener('click', async ev => {
  if (!peekHunk) return
  if (ev.target.closest('.git-peek-discard')) {
    const { index, header } = peekHunk
    hidePeek(false)
    return discardChange({ path: state.path, hunk: index, header })
  }
  if (!ev.target.closest('.git-peek-do')) return
  const { index, header, staged } = peekHunk
  hidePeek(false)
  await stage({ path: state.path, hunk: index, header, staged })
})

// Throw a change away, in the file: the page takes the file again, and the
// change can be had back with undo
async function discardChange(body) {
  await save(true)
  const answer = await post('api/git/stage', { ...body, discard: true }).catch(() => ({ error: 'adoc-gui is not running' }))
  if (answer.error) return setFileState(answer.error.split('\n')[0])
  const path = state.path
  const file = await (await api(path)).json().catch(() => undefined)
  if (file && path === state.path && file.text !== state.source) {
    remember()
    setSource(file.text, diff(state.source, file.text))
    state.mtime = file.mtime
    state.dirty = false
    const caret = Math.min(state.caret.focus, file.text.length)
    state.caret = { anchor: caret, focus: caret }
    paint()
    renderCode(false)
    renderStatus()
    setFileState('Change discarded, undo brings it back')
  }
  loadGit()
  if (state.tab === 'changes') loadChanges()
}
new ResizeObserver(() => showGitMarks()).observe(view)

// Commit the open file, with a message
const commitBox = document.getElementById('commit-box')
const commitSubject = document.getElementById('commit-subject')
const commitMessage = document.getElementById('commit-message')
const commitProblem = document.getElementById('commit-problem')
const commitSignoff = document.getElementById('commit-signoff')
const commitCount = document.getElementById('commit-count')
try {
  commitSignoff.checked = localStorage.getItem('doctools.signoff') !== 'false'
} catch {
  commitSignoff.checked = true
}
commitSignoff.addEventListener('change', () => {
  try {
    localStorage.setItem('doctools.signoff', String(commitSignoff.checked))
  } catch { }
})

// The length of the summary: short is better, past 72 it is too long
function countSubject() {
  const length = [...commitSubject.value].length
  commitCount.textContent = length ? String(length) : ''
  commitCount.className = length > 72 ? 'long' : length > 50 ? 'warn' : ''
}
commitSubject.addEventListener('input', countSubject)
// Enter in the summary goes to the body, a line pasted in it is split
commitSubject.addEventListener('keydown', ev => {
  if (ev.key === 'Enter' && (ev.ctrlKey || ev.metaKey)) commitBox.requestSubmit()
  else if (ev.key === 'Enter') {
    ev.preventDefault()
    commitMessage.focus()
  }
})
commitSubject.addEventListener('paste', ev => {
  const text = ev.clipboardData?.getData('text/plain') ?? ''
  if (!text.includes('\n')) return
  ev.preventDefault()
  const [first, ...rest] = text.replace(/\r\n?/g, '\n').split('\n')
  commitSubject.value = first
  commitMessage.value = rest.join('\n').replace(/^\n+/, '')
  countSubject()
})

commitMessage.addEventListener('keydown', ev => {
  if (ev.key === 'Enter' && (ev.ctrlKey || ev.metaKey)) commitBox.requestSubmit()
})
commitBox.addEventListener('submit', async ev => {
  ev.preventDefault()
  const subject = commitSubject.value.trim()
  const body = commitMessage.value.replace(/\s+$/, '')
  if (!subject) {
    commitProblem.textContent = 'Write a summary'
    commitSubject.focus()
    return
  }
  if (!state.git.staged) {
    commitProblem.textContent = 'Nothing is staged'
    return
  }
  const message = body.trim() ? `${subject}\n\n${body}` : subject
  commitProblem.textContent = 'Committing…'
  // What is typed is in the file first
  await save(true)
  const answer = await post('api/git/commit', { message, signoff: commitSignoff.checked })
    .catch(() => ({ error: 'adoc-gui is not running' }))
  if (answer.error) {
    commitProblem.textContent = answer.error.split('\n')[0]
    return
  }
  commitSubject.value = ''
  commitMessage.value = ''
  commitProblem.textContent = ''
  countSubject()
  setFileState(`Committed ${answer.output}`)
  loadGit()
  if (state.tab === 'changes') loadChanges()
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

// The branch, and what happened to the open file since the last commit
function gitText() {
  const { available, branch, files } = state.git
  if (!available) return ''
  const change = files[state.path]
  return [branch, change && change !== 'modified' ? change : change && 'changed'].filter(Boolean).join(', ')
}

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

// The server of the editor does not answer
let offline = false

function setFileState(text) {
  if (text !== undefined) state.fileState = text
  // adoc-gui was stopped: nothing is saved until it runs again
  fileStatus.classList.toggle('offline', offline)
  fileStatus.textContent = offline
    ? 'adoc-gui is not running: the changes are not saved. Start it again, this page will go on.'
    : [state.fileState, gitText(), docsText()].filter(Boolean).join('  ·  ')
}

let wasRunning = false

function renderDocs() {
  const { problem, build } = state.docs
  const running = build !== 'off'
  docsButton.disabled = Boolean(problem)
  docsButton.setAttribute('aria-pressed', String(running))
  docsButton.title = problem ?? (running ? 'Stop the documentation server' : 'Build the documentation')
  docsButton.querySelector('path').setAttribute('d', running ? STOP : PLAY)
  document.getElementById('docs-label').textContent = running ? 'Stop' : 'Build'
  // The live view is there while the server runs, and is shown when it starts
  document.querySelector('.tab[data-tab=preview]').hidden = !running
  if (running && !wasRunning) {
    showSidePane(true)
    selectTab('preview')
  } else if (!running && state.tab === 'preview') {
    selectTab('source', false)
  }
  wasRunning = running
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
    if (offline) {
      offline = false
      setFileState()
      if (state.dirty) save(true)
    }
  } catch {
    if (!offline) {
      offline = true
      state.docs = { ...state.docs, build: 'off', url: null }
      renderDocs()
      renderPreview()
    }
  }
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

// The grammar of the texts checked, by text: a promise of the mistakes, and
// the answers that came
const checked = new Map()
const answered = new Map()
// false once LanguageTool is known not to work here
let grammarWorks = true
// Where the grammar is checked: 'local', 'cloud' or 'off'; the checks of
// another mode are dropped
const grammarSelect = document.getElementById('grammar')
let grammarMode = 'local'
let grammarRun = 0
try {
  grammarMode = ['local', 'cloud', 'off'].includes(localStorage.getItem('doctools.grammar'))
    ? localStorage.getItem('doctools.grammar') : 'local'
} catch { }
grammarSelect.value = grammarMode

function setGrammarMode(mode) {
  grammarMode = mode
  grammarRun++
  grammarWorks = true
  checked.clear()
  answered.clear()
  grammarProblem('')
  try {
    localStorage.setItem('doctools.grammar', mode)
  } catch { }
  showMistakes()
}
grammarSelect.addEventListener('change', () => setGrammarMode(grammarSelect.value))

// What keeps the grammar from being checked, in the title of the selector
function grammarProblem(message) {
  const label = grammarSelect.parentElement
  label.classList.toggle('problem', Boolean(message))
  label.title = message ? `LanguageTool: ${message}` : 'Check the spelling and the grammar with LanguageTool'
}

// Rules that only add noise in documentation
const IGNORED_RULES = new Set(['WHITESPACE_RULE', 'EN_QUOTES', 'UPPERCASE_SENTENCE_START', 'DASH_RULE'])

function checkGrammar(text) {
  if (grammarMode === 'off') return Promise.resolve({ error: 'off' })
  const run = grammarRun
  if (!checked.has(text)) {
    if (checked.size > 2000) {
      checked.clear()
      answered.clear()
    }
    checked.set(text, fetch('api/grammar', {
      method: 'POST', headers: { 'X-Doctools': '1', 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, mode: grammarMode })
    }).then(r => r.json()).catch(() => ({ error: 'unreachable' })).then(answer => {
      if (run !== grammarRun) return { error: 'off' }
      if (answer.error) {
        checked.delete(text)
        // What is not worth trying again
        if (!['unreachable', 'check_failed', 'the backend did not answer', 'rate_limited'].includes(answer.error)) {
          grammarWorks = false
          grammarProblem(answer.message ?? answer.error)
        }
      } else {
        answer.matches = (answer.matches ?? []).filter(m => !IGNORED_RULES.has(m.ruleId))
        answered.set(text, answer)
      }
      return answer
    }))
  }
  return checked.get(text)
}

// A spelling mistake: the category is an id locally (TYPOS), a name in the
// cloud (Possible Typo)
const isSpelling = match => /typo/i.test(match.category ?? '') || /MORFOLOGIK|SPELL/.test(match.ruleId ?? '')

// The words that are not mistakes, kept by the browser
let words = new Set()
try {
  words = new Set(JSON.parse(localStorage.getItem('doctools.words') ?? '[]'))
} catch { }

const known = (prose, match) =>
  isSpelling(match) && words.has(prose.text.slice(match.offset, match.offset + match.length))

function addWord(word) {
  words.add(word)
  try {
    localStorage.setItem('doctools.words', JSON.stringify([...words]))
  } catch { }
  showMistakes()
}

// The captions that are prose: titles
const TITLED = new Set([
  'rubric', 'admonition', 'topic', 'sidebar', 'tab-item', 'collapsible', 'card', 'table', 'list-table', 'csv-table'
])

// The blocks of prose of the document
function proseBlocks(model) {
  const out = []
  const walk = block => {
    if (block.inlines && (block.kind === 'paragraph' || block.kind === 'heading' ||
        (block.kind === 'caption' && TITLED.has(block.parent?.name))))
      out.push(block)
    for (const child of block.children ?? []) walk(child)
  }
  walk(model.root)
  return out
}

// Underline the mistakes found in the prose, and check what is not checked
// yet once the typing stops
let scanTimer
function showMistakes() {
  if (!CSS.highlights) return
  if (grammarMode === 'off') {
    CSS.highlights.delete('spelling')
    CSS.highlights.delete('grammar')
    return
  }
  if (!grammarWorks) return
  const spelling = new Highlight()
  const grammar = new Highlight()
  const waiting = []
  for (const block of proseBlocks(state.model)) {
    const prose = proseOf(state.model, block)
    if (!prose.text.trim()) continue
    const answer = answered.get(prose.text)
    if (!answer) {
      if (!checked.has(prose.text)) waiting.push(prose.text)
      continue
    }
    for (const match of answer.matches) {
      if (known(prose, match)) continue
      const range = sourceRange(prose, match.offset, match.length)
      const from = range && pointOf(view, range.s)
      const to = range && pointOf(view, range.e)
      if (!from || !to) continue
      const dom = document.createRange()
      dom.setStart(from.node, from.offset)
      dom.setEnd(to.node, to.offset)
      ;(isSpelling(match) ? spelling : grammar).add(dom)
    }
  }
  CSS.highlights.set('spelling', spelling)
  CSS.highlights.set('grammar', grammar)
  clearTimeout(scanTimer)
  if (waiting.length) scanTimer = setTimeout(() => scan(waiting), 800)
}

// One check at a time: LanguageTool answers them in turn
let scanning = false
async function scan(texts) {
  if (scanning || !grammarWorks || grammarMode === 'off') return
  scanning = true
  const run = grammarRun
  try {
    for (const text of texts) {
      if (!grammarWorks || run !== grammarRun) break
      const source = state.source
      const answer = await checkGrammar(text)
      if (state.source === source) showMistakes()
      // The public service takes 20 checks a minute
      if (grammarMode === 'cloud') await new Promise(resolve => setTimeout(resolve, answer.error === 'rate_limited' ? 30000 : 3000))
    }
  } finally {
    scanning = false
  }
  showMistakes()
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
    if (!range || offset < range.s || offset > range.e || known(prose, match)) continue
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
    if (isSpelling(match)) {
      const word = prose.text.slice(match.offset, match.offset + match.length)
      items.push({ label: `Add “${word}” to the words`, run: () => addWord(word) })
    }
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
  const block = a === b && grammarMode !== 'off' ? proseAt(a) : undefined
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
    loadGitSoon()
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
  loadGit()
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
  renderTree(tree, state.files, {
    current: state.path, expanded: state.expanded, selection: state.sparse, changes: state.git.files
  })
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
window.addEventListener('focus', () => {
  loadTree()
  loadGit()
})

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

// Tabs of the side pane. remember: the user chose it
function selectTab(name, remember = true) {
  state.tab = name
  for (const tab of document.querySelectorAll('.tab'))
    tab.setAttribute('aria-selected', String(tab.dataset.tab === name))
  document.getElementById('source').hidden = name !== 'source'
  document.getElementById('preview').hidden = name !== 'preview'
  document.getElementById('changes').hidden = name !== 'changes'
  if (name === 'changes') loadChanges()
  try {
    if (remember) localStorage.setItem('doctools.tab', name)
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
  selectTab('source', false)
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
