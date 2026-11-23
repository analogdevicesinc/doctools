import { Parser, Language } from './vendor/web-tree-sitter.js'
import { buildModel, leafAt, blockAt } from './model.js'
import {
  applyEdit, withoutTrailing, insertText, deleteBackward, deleteForward, insertParagraph, toggleInline, tableStep, openContent, intoContent, addOption, addLabel, removeSide, addTab, shiftItem, removeDirective, leaveDirective, headingAt, setHeading, addDirective, addRole, addTable,
  linkAt, setLink, addSubstitution, addDefinition, unfinishedAt
} from './ops.js'
import {
  render, getSelection, setSelection, markActive, showDiagnostics, selectTab as showTab, setCodeHost, offsetOf, pointOf,
  setImageUrl, settleImages
} from './view.js'
import { codeEdit, toSource, fromSource, sourceMarks, CODE_DIRECTIVES } from './code.js'
import { sourceEditor, CodeEditors } from './editors.js'
import { completionAt, matching, roleQuestion, hasPreview, shortTarget } from './lsp.js'
import {
  orderRoles, filterRoles, filterLabel, roleOpen, searchTargets, referenceText, referenceQuestion, pageOf
} from './refs.js'
import { pickerGroups, templateOf, ABOUT, exampleOf } from './insert.js'
import { tutorial } from './tutorial.js'
import { linkOf, linkAddress, isAddress, namedTarget } from './links.js'
import { substitutionOf, substitutionNames } from './subs.js'
import { optionChoices, optionSpec, FLAG } from './directives.js'
import { SparseSelection } from './sparse.js'
import { ContextMenu } from './contextmenu.js'
import { proseOf, sourceRange } from './grammar.js'
import { lineChanges } from './gitdiff.js'
import { renderTree, foldersOf, ancestorsOf, askName, filePath, folderOf } from './nav.js'

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
const card = document.getElementById('card')
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
  if (withCaret && centred && written === 'source') {
    // The source is the one that is written in
    source.select(state.caret.anchor, state.caret.focus)
    source.view.focus()
  } else if (withCaret && !focusCode(state.caret.anchor, state.caret.focus)) {
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
  insertFromPaste: (m, a, b, e) => {
    const text = (e.dataTransfer?.getData('text/plain') ?? '').replace(/\r\n?/g, '\n')
    // An address pasted over text makes the text a link to it
    const picked = a < b && isAddress(text) ? linkAt(m, a, b) : undefined
    return picked && !picked.link && picked.text ? setLink(m, a, b, picked.text, text.trim()) : insertText(m, a, b, text)
  },
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
  if (/^(insertText|insertReplacementText|insertParagraph|insertLineBreak|deleteContent)/.test(ev.inputType)) suggest()
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
  code: () => format('code'),
  link: () => editLink()
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
  const add = ev.target.closest('[data-add]')
  if (add) return picker.hidden || pickerKind !== add.dataset.add ? showPicker(add) : hidePicker()
  const action = ev.target.closest('[data-action]')?.dataset.action
  if (!action) return
  ACTIONS[action]()
  if (action === 'link') return
  view.focus()
  renderToolbar()
})

// Text, or a heading and its level: of the block of the caret
const headingSelect = document.getElementById('heading-level')
headingSelect.addEventListener('change', () => {
  commit(setHeading(state.model, state.caret.focus, Number(headingSelect.value)))
  view.focus()
  renderToolbar()
})

function renderHeading() {
  const at = headingAt(state.model, state.caret.focus)
  headingSelect.disabled = !at
  headingSelect.value = String(Math.min(at?.level ?? 0, headingSelect.options.length - 1))
  // A level is the next one of the levels of the document, at most
  for (const option of headingSelect.options) option.disabled = Boolean(at) && Number(option.value) > at.max
}

// Add a directive, a role or a table: chosen below its button -------------------

const picker = document.getElementById('picker')
let pickerKind
let pickerIndex = 0

function hidePicker(focus = false) {
  if (picker.hidden) return
  picker.hidden = true
  for (const button of toolbar.querySelectorAll('[data-add]')) button.setAttribute('aria-expanded', 'false')
  if (focus) renderView(true)
}

function showPicker(button) {
  pickerKind = button.dataset.add
  for (const other of toolbar.querySelectorAll('[data-add]')) other.setAttribute('aria-expanded', String(other === button))
  picker.classList.toggle('table', pickerKind === 'table')
  picker.hidden = false
  if (pickerKind === 'table') renderTablePicker()
  else renderPicker(true)
  const rect = button.getBoundingClientRect()
  picker.style.top = `${rect.bottom + 6}px`
  picker.style.left = `${Math.max(Math.min(rect.left, window.innerWidth - picker.offsetWidth - 8), 8)}px`
}

// The names the project has, when the documentation server runs: the ones
// that are not known are listed too
function projectNames(kind) {
  if (state.docs.build === 'off') return Promise.resolve([])
  const key = JSON.stringify({ completion: kind === 'role' ? 'roles' : 'directives' })
  if (!answers.has(key)) answers.set(key, ask(JSON.parse(key)))
  return answers.get(key).then(answer => Array.isArray(answer.list) ? answer.list.map(entry => entry.name) : [])
}

// How many times each was opened: its example is another one each time
const pickerTurns = { directive: 0, role: 0 }

// 'Add block markup, like a note.', with its drawing
function pickerHead(kind) {
  const head = element('div', 'picker-head')
  const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  icon.setAttribute('viewBox', '0 0 48 48')
  icon.setAttribute('aria-hidden', 'true')
  icon.innerHTML = ABOUT[kind].icon
  const line = element('span')
  line.append(element('strong', '', ABOUT[kind].text), ` like ${exampleOf(kind, pickerTurns[kind]++)}.`)
  head.append(icon, line)
  return head
}

let pickerMore = []
function renderPicker(first = false) {
  let search = picker.querySelector('.picker-search')
  if (first || !search) {
    search = element('input', 'picker-search')
    search.type = 'search'
    search.spellcheck = false
    search.autocomplete = 'off'
    search.placeholder = pickerKind === 'role' ? 'Search the roles' : 'Search the directives'
    search.setAttribute('aria-label', search.placeholder)
    picker.replaceChildren(pickerHead(pickerKind), search, element('div', 'picker-list'))
    pickerIndex = 0
    pickerMore = []
    const kind = pickerKind
    projectNames(kind).then(names => {
      if (picker.hidden || pickerKind !== kind || !names.length) return
      pickerMore = names
      renderPicker()
    })
    search.focus()
  }
  const groups = pickerGroups(pickerKind, pickerMore, search.value, substitutionNames(state.source))
  const count = groups.reduce((n, group) => n + group.items.length, 0)
  pickerIndex = Math.max(Math.min(pickerIndex, count - 1), 0)
  let index = 0
  const nodes = groups.flatMap(group => {
    const grid = element('div', 'picker-group')
    for (const item of group.items) {
      const el = element('button', `picker-item${index === pickerIndex ? ' selected' : ''}`)
      el.type = 'button'
      el.dataset.name = item.name
      el.dataset.index = index++
      el.append(element('span', '', item.name))
      if (item.detail) el.append(element('span', 'detail', item.detail))
      grid.append(el)
    }
    return [element('div', 'picker-title', group.title), grid]
  })
  const list = picker.querySelector('.picker-list')
  list.replaceChildren(...(nodes.length ? nodes : [element('div', 'picker-empty', 'Nothing matches.')]))
  list.querySelector('.selected')?.scrollIntoView({ block: 'nearest' })
}

// What is chosen is written at the caret of the page
function pick(name) {
  const kind = pickerKind
  hidePicker()
  const { a, b } = selection()
  // '|name|': a substitution of the document; replace: a new one
  const edit = /^\|.+\|$/.test(name) ? addSubstitution(state.model, a, b, name.slice(1, -1))
    : kind === 'role' ? addRole(state.model, a, b, name)
      : name === 'replace' ? addDefinition(state.model, state.caret.focus)
        : addDirective(state.model, state.caret.focus, name, templateOf(name))
  if (!edit) return setFileState(kind === 'role' ? 'Select text in one line, or none, to add a role' : 'Put the caret in the page to add a directive')
  commit(edit)
  // What the role points to is completed
  if (kind === 'role' && !name.startsWith('|')) suggest()
}

picker.addEventListener('input', ev => {
  if (!ev.target.matches('.picker-search')) return
  pickerIndex = 0
  renderPicker()
})
picker.addEventListener('keydown', ev => {
  if (ev.key === 'Escape') {
    ev.preventDefault()
    return hidePicker(true)
  }
  if (pickerKind === 'table') return
  const items = [...picker.querySelectorAll('.picker-item')]
  if (ev.key === 'Enter') {
    ev.preventDefault()
    if (items[pickerIndex]) pick(items[pickerIndex].dataset.name)
  } else if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
    ev.preventDefault()
    if (!items.length) return
    pickerIndex = (pickerIndex + (ev.key === 'ArrowDown' ? 1 : items.length - 1)) % items.length
    renderPicker()
  }
})
// The search keeps the focus: a click chooses
picker.addEventListener('mousedown', ev => {
  if (!ev.target.closest('input')) ev.preventDefault()
})
picker.addEventListener('click', ev => {
  const item = ev.target.closest('.picker-item')
  if (item) pick(item.dataset.name)
})
document.addEventListener('mousedown', ev => {
  if (!picker.hidden && !picker.contains(ev.target) && !ev.target.closest?.('[data-add]')) hidePicker()
}, true)
window.addEventListener('resize', () => hidePicker())

// A table: its size is chosen on squares, columns by rows, the first row is
// the one of the headers; and its kind, which the browser keeps
const TABLE_COLUMNS = 8
const TABLE_ROWS = 6
let tableKind = 'list'
try {
  if (localStorage.getItem('doctools.table') === 'grid') tableKind = 'grid'
} catch { }
function renderTablePicker() {
  const box = element('div', 'picker-table')
  const cells = element('div', 'picker-cells')
  const size = element('div', 'picker-size', 'Choose a size')
  const mark = (rows, columns) => {
    for (const cell of cells.children)
      cell.classList.toggle('on', Number(cell.dataset.row) <= rows && Number(cell.dataset.column) <= columns)
    size.textContent = rows ? `${columns} × ${rows}` : 'Choose a size'
  }
  for (let row = 1; row <= TABLE_ROWS; row++) {
    for (let column = 1; column <= TABLE_COLUMNS; column++) {
      const cell = element('button', `picker-cell${row === 1 ? ' header' : ''}`)
      cell.type = 'button'
      cell.dataset.row = row
      cell.dataset.column = column
      cell.setAttribute('aria-label', `${column} columns, ${row} rows`)
      cells.append(cell)
    }
  }
  cells.addEventListener('mouseover', ev => {
    const cell = ev.target.closest('.picker-cell')
    if (cell) mark(Number(cell.dataset.row), Number(cell.dataset.column))
  })
  cells.addEventListener('mouseleave', () => mark(0, 0))
  cells.addEventListener('click', ev => {
    const cell = ev.target.closest('.picker-cell')
    if (!cell) return
    hidePicker()
    const edit = addTable(state.model, state.caret.focus, tableKind, Number(cell.dataset.row), Number(cell.dataset.column))
    if (!edit) return setFileState('Put the caret in the page to add a table')
    commit(edit)
  })
  const kinds = element('div', 'picker-kinds')
  for (const [kind, label, title] of [['list', 'List table', 'The list-table directive: a list of rows'],
    ['grid', 'Grid table', 'A table drawn with + - |']]) {
    const button = element('button', '', label)
    button.type = 'button'
    button.title = title
    button.setAttribute('aria-pressed', String(kind === tableKind))
    button.addEventListener('click', () => {
      tableKind = kind
      try {
        localStorage.setItem('doctools.table', kind)
      } catch { }
      for (const other of kinds.children) other.setAttribute('aria-pressed', String(other === button))
    })
    kinds.append(button)
  }
  box.append(cells, size, kinds)
  picker.replaceChildren(box)
}

// A link: its text and its address, written below it -----------------------------

const linkEditor = document.getElementById('link-editor')

function hideLinkEditor(focus = false) {
  if (linkEditor.hidden) return
  linkEditor.hidden = true
  if (focus) renderView(true)
}

// The line of the source of an offset, from 1
const lineOf = offset => state.source.slice(0, offset).split('\n').length

// Open the editor of the link of the caret, or of a new one around the
// selection. at: the source offsets, the ones of the caret when not given
function editLink(at) {
  hidePicker()
  const { a, b } = at ?? selection()
  const found = linkAt(state.model, a, b)
  if (!found) return setFileState('Select text in one line, or none, to make a link')
  const { link } = found
  // The address of these is written elsewhere: it is shown, and gone to
  const elsewhere = link && (link.kind === 'named' || link.kind === 'anonymous')
  const field = (label, name, value, placeholder) => {
    const wrap = element('label', '', label)
    const input = document.createElement('input')
    input.name = name
    input.type = 'text'
    input.value = value
    input.placeholder = placeholder
    input.spellcheck = false
    input.autocomplete = 'off'
    wrap.append(input)
    return [wrap, input]
  }
  const [textField, text] = field('Text', 'text', found.text, 'What is read: the address when empty')
  const [targetField, target] = field('Address', 'target', link?.target ?? '', 'https://…')
  const actions = element('div', 'link-actions')
  const button = (className, label, run) => {
    const el = element('button', className, label)
    el.type = 'button'
    el.addEventListener('click', run)
    actions.append(el)
    return el
  }
  const nodes = [textField, targetField]
  const apply = (shown, address) => {
    const edit = setLink(state.model, a, b, shown, address)
    hideLinkEditor()
    if (edit) commit(edit)
    else renderView(true)
  }
  if (elsewhere) {
    text.readOnly = target.readOnly = true
    nodes.push(element('div', 'link-note', link.at === undefined
      ? `No address is written for this link: it needs a line “${link.kind === 'named' ? `.. _${link.text}: https://…` : '__ https://…'}”.`
      : `Its address is written at line ${lineOf(link.at)} of the document.`))
    if (link.at !== undefined) {
      button('text-button plain', 'Go to it', () => {
        hideLinkEditor()
        const offset = state.source.indexOf(link.target, link.at)
        state.caret = { anchor: offset, focus: offset }
        renderView(true)
        renderCode(true)
      })
    }
  } else if (link) {
    button('text-button plain link-remove', 'Remove the link', () => apply(text.value, ''))
  }
  const open = linkAddress(link?.target)
  if (open) button('text-button plain', 'Open ↗', () => window.open(open, '_blank', 'noopener'))
  // A new link can be a reference instead, to a label or a page of a
  // documentation: the references are shown, searched for the text; the one
  // that is clicked is written around the selection
  if (!link) {
    const references = button('text-button plain', 'References', () => {
      hideLinkEditor()
      state.caret = { anchor: a, focus: b }
      showSidePane(true)
      selectTab('references')
      setScreen('more')
      refsSearch.value = text.value.trim()
      renderReferences(0)
      refsSearch.focus()
      refsSearch.select()
    })
    references.title = state.docs.build === 'off'
      ? 'Build the documentation to list what can be referenced'
      : 'Link to a label or a page of a documentation instead'
    references.disabled = state.docs.build === 'off'
  }
  if (!elsewhere) {
    const done = element('button', 'build-button', link ? 'Apply' : 'Add the link')
    done.type = 'submit'
    actions.append(done)
  }
  nodes.push(actions)
  linkEditor.replaceChildren(...nodes)
  linkEditor.onsubmit = ev => {
    ev.preventDefault()
    if (elsewhere) return hideLinkEditor(true)
    if (!target.value.trim() && !link) return target.focus()
    apply(text.value, target.value)
  }

  // Below the link, or the caret
  const el = link && [...view.querySelectorAll('.k-link')].find(other => Number(other.dataset.s) >= link.s && Number(other.dataset.e) <= link.e)
  const range = window.getSelection().rangeCount && view.contains(window.getSelection().anchorNode)
    ? window.getSelection().getRangeAt(0) : undefined
  const rect = el?.getBoundingClientRect() ?? range?.getClientRects()[0] ?? range?.startContainer.parentElement?.getBoundingClientRect() ??
    toolbar.querySelector('[data-action=link]').getBoundingClientRect()
  linkEditor.hidden = false
  const below = rect.bottom + 8 + linkEditor.offsetHeight <= window.innerHeight - 8
  linkEditor.style.top = `${below ? rect.bottom + 8 : Math.max(rect.top - 8 - linkEditor.offsetHeight, 8)}px`
  linkEditor.style.left = `${Math.max(Math.min(rect.left, window.innerWidth - linkEditor.offsetWidth - 8), 8)}px`
  // What is missing: the text of a new link without one, else the address
  const first = elsewhere ? actions.querySelector('button') : !link && !found.text ? text : target
  first?.focus()
  if (first === target) target.select()
}
linkEditor.addEventListener('keydown', ev => {
  if (ev.key !== 'Escape') return
  ev.preventDefault()
  hideLinkEditor(true)
})
document.addEventListener('mousedown', ev => {
  if (!linkEditor.hidden && !linkEditor.contains(ev.target) && !ev.target.closest?.('[data-action=link]')) hideLinkEditor()
}, true)
window.addEventListener('resize', () => hideLinkEditor())

const PRESSED = { bold: 'strong', italic: 'emphasis', code: 'literal' }

function renderToolbar() {
  renderHeading()
  const kind = leafAt(state.model, state.caret.focus)?.kind
  for (const button of toolbar.querySelectorAll('[data-action]')) {
    const action = button.dataset.action
    if (action === 'link') button.setAttribute('aria-pressed', String(kind === 'link'))
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
const showFiles = panel('no-nav', document.getElementById('open-nav'), document.getElementById('close-nav'))
const showSidePane = panel('no-source', document.getElementById('open-source'), document.getElementById('close-source'))

// On a narrow screen the files, the page and the side pane are three screens:
// one is shown, chosen from the bar at the bottom. The third one is named
// after the tab of the side pane.
const bottomBar = document.querySelector('.bottom-bar')
const narrow = matchMedia('(max-width: 1000px)')
const MORE = {
  source: ['Source', 'M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z'],
  preview: ['Live view', 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'],
  references: ['References', 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'],
  changes: ['Changes', 'M16.9 11a5 5 0 0 0-9.8 0H2v2h5.1a5 5 0 0 0 9.8 0H22v-2h-5.1zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z']
}
function setScreen(name) {
  document.body.dataset.screen = name
  for (const button of bottomBar.querySelectorAll('button')) {
    if (button.dataset.screen === name) button.setAttribute('aria-current', 'page')
    else button.removeAttribute('aria-current')
  }
  if (!narrow.matches) return
  // What is shown again takes its size
  if (name === 'more') {
    renderPreview()
    if (state.tab === 'source') renderCode(true)
  }
  if (name === 'editor' && state.model) showGitMarks()
}
// The side pane, when it is hidden: a button for each of its tabs that is
// there, which shows the pane on that tab
const openTabs = document.getElementById('open-source')
for (const [name, [label, icon]] of Object.entries(MORE)) {
  const button = element('button', 'icon-button')
  button.type = 'button'
  button.dataset.openTab = name
  button.title = `Show the ${label.toLowerCase()}`
  button.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${icon}"/></svg>`
  openTabs.append(button)
}
openTabs.addEventListener('click', ev => {
  const button = ev.target.closest('[data-open-tab]')
  if (button) selectTab(button.dataset.openTab)
})
function renderOpenTabs() {
  for (const button of openTabs.children)
    button.hidden = document.querySelector(`.tab[data-tab=${button.dataset.openTab}]`).hidden
}
// The tabs come and go: with the documentation server, with git
new MutationObserver(renderOpenTabs).observe(document.querySelector('.tabs'), { attributes: true, attributeFilter: ['hidden'], subtree: true })

function renderMore() {
  const [label, icon] = MORE[state.tab] ?? MORE.source
  document.getElementById('more-label').textContent = centred && label === MORE.source[0] ? 'Page' : label
  document.getElementById('more-icon').setAttribute('d', icon)
  renderOpenTabs()
}
bottomBar.addEventListener('click', ev => {
  const button = ev.target.closest('button')
  if (button) setScreen(button.dataset.screen)
})
setScreen('editor')

// The guide: shown once, to who opens the editor for the first time, and
// from its button
const guide = tutorial(document.getElementById('tutorial'), () => {
  try {
    localStorage.setItem('doctools.tutorial', 'viewed')
  } catch { }
  view.focus()
})
document.getElementById('open-tutorial').addEventListener('click', () => guide.open())
function firstVisit() {
  try {
    if (localStorage.getItem('doctools.tutorial') !== 'viewed') guide.open()
  } catch { }
}

// The source and the page, swapped: the source in the middle, to be written
// in, and the page in the side pane, in the tab of the source, which has
// its name then. The caret is where it was in the other one.
let centred = false
// The one of the two that was written in last
let written = 'page'
const centerButton = document.getElementById('toggle-center')
const centerSource = document.getElementById('center-source')
const sourcePanel = document.getElementById('source')
const sourceHome = { parent: sourcePanel.parentElement, next: sourcePanel.nextElementSibling }
function setCentre(inSource, withCaret = true) {
  if (centred === inSource) return
  centred = inSource
  try {
    localStorage.setItem('doctools.center', inSource ? 'source' : 'page')
  } catch { }
  const line = inSource ? (canvas.scrollTop <= 0 ? 1 : topLine()) : centerSource.scrollTop <= 0 ? 1 : sourceTopLine()
  document.body.classList.toggle('source-center', inSource)
  document.getElementById('swap-name').textContent = inSource ? 'Page' : 'Source'
  openTabs.querySelector('[data-open-tab=source]').title = inSource ? 'Show the page' : 'Show the source'
  if (inSource) {
    centerSource.append(sourcePanel)
    sourceHome.parent.insertBefore(canvas, sourceHome.next)
  } else {
    centerSource.before(canvas)
    sourceHome.parent.insertBefore(sourcePanel, sourceHome.next)
  }
  centerSource.hidden = !inSource
  selectTab(state.tab, false)
  source.view.requestMeasure()
  if (state.model) showGitMarks()
  // The one in the middle shows what the other one did
  requestAnimationFrame(() => {
    if (inSource) scrollSourceTo(line)
    else if (line > 1) scrollToLine(line)
  })
  if (!withCaret) return
  written = inSource ? 'source' : 'page'
  if (inSource) {
    const { anchor, focus } = state.caret
    source.select(anchor, focus)
    source.view.focus()
  } else {
    renderView(true)
  }
}
centerButton.addEventListener('click', () => setCentre(!centred))
document.addEventListener('focusin', ev => {
  if (view.contains(ev.target)) written = 'page'
  else if (sourcePanel.contains(ev.target)) written = 'source'
})

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
    if (stepCell(step)) suggest()
    else if (a === b) commit(shiftItem(state.model, a, step))
    return
  }
  if (!(ev.ctrlKey || ev.metaKey) || ev.altKey) return
  const key = ev.key.toLowerCase()
  if (key === 'z' && !ev.shiftKey) ACTIONS.undo()
  else if (key === 'y' || (key === 'z' && ev.shiftKey)) ACTIONS.redo()
  else if (key === 'b') ACTIONS.bold()
  else if (key === 'i') ACTIONS.italic()
  else if (key === 'e') ACTIONS.code()
  else if (key === 'k') ACTIONS.link()
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
  else if (el.matches('.add-option')) newOption(block)
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
  if (completion && (current.anchor !== completion.anchor || current.focus !== completion.caret)) closeMenu()
  flush()
  markActive(view, current.focus)
  // An image whose path was being written is shown once the caret left it
  settleImages(view, current.focus)
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
  // The block of the caret of the page: not of the one that is in the source
  const active = !source.view.hasFocus && view.querySelector('.block.active')
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
  if (follow && !source.view.hasFocus && (centred || state.tab === 'source')) {
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
  // Enter on the empty line at the end of the code: out of the directive, on
  // an empty line after it
  exit(editor) {
    commit(leaveDirective(state.model, editor.code.directive))
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

// What git knows is asked for the open file, and shown once all of it is
// there: only the last answer counts, and never one for another file
let gitRun = 0
async function loadGit() {
  clearTimeout(gitTimer)
  const run = ++gitRun
  const path = state.path
  let answer, changes
  try {
    answer = await (await fetch(`api/git?path=${encodeURIComponent(path)}`, { headers: { 'X-Doctools': '1' } })).json()
    if (run !== gitRun || path !== state.path) return
    changes = await loadHunks(path)
  } catch {
    return
  }
  if (run !== gitRun || path !== state.path) return
  state.git = {
    available: Boolean(answer.available), branch: answer.branch ?? null, files: answer.files ?? {},
    head: answer.head ?? null, staged: Boolean(answer.staged)
  }
  hunks = changes ?? hunks
  gitCache = undefined
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
  if (open) return openFile(open.dataset.open).then(() => setScreen('editor'))
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
async function loadHunks(path) {
  let answer
  try {
    answer = await (await fetch('api/git/changes', { headers: { 'X-Doctools': '1' } })).json()
  } catch {
    return undefined
  }
  const of = (files, staged) => (files ?? []).filter(f => f.path === path).flatMap(f => f.hunks.map((hunk, index) => {
    const range = hunk.header.match(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@/)
    const start = range ? Number(range[1]) : 0
    const count = range && range[2] !== undefined ? Number(range[2]) : 1
    return { staged, index, header: hunk.header, lines: hunk.lines, start, end: start + Math.max(count, 1) - 1 }
  }))
  return [...of(answer.unstaged, false), ...of(answer.staged, true)]
}

// The lines that changed, kept until the source or the commit changes
let gitCache
function gitChanges() {
  const { head } = state.git
  if (head === null || head === undefined) return undefined
  if (gitCache?.source !== state.source || gitCache?.head !== head)
    // As the file is saved: the spaces at the end of the lines are not changes
    gitCache = { source: state.source, head, changes: lineChanges(head, withoutTrailing(state.source)) }
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

  // From the layout, not from the screen: the pane can be on its way in,
  // scaled, when this is asked
  const within = el => {
    let left = 0, top = 0
    for (let at = el; at && at !== canvas; at = at.offsetParent) {
      left += at.offsetLeft
      top += at.offsetTop
    }
    return { left, top }
  }
  // Inside the edge of the page that is away from the other pane: the right
  // one in the middle, the left one in the side pane
  const page = within(view)
  const left = centred ? page.left + 6 : page.left + view.offsetWidth - 9
  gitLayer.replaceChildren(...[...marks].map(([el, mark]) => {
    const rect = { top: within(el).top, height: el.offsetHeight }
    const bar = document.createElement('div')
    const kind = mark.kinds.has('changed') || mark.kinds.size > 1 ? 'changed' : mark.kinds.has('added') ? 'added' : 'deleted'
    bar.className = `git-bar ${kind}`
    bar.style.left = `${left}px`
    bar.style.top = `${rect.top}px`
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
  if (bar) showPeek(Number(bar.dataset.from), Number(bar.dataset.to), bar.getBoundingClientRect(), centred ? 'right' : 'left')
})
gitLayer.addEventListener('mouseout', ev => {
  if (!peek.contains(ev.relatedTarget) && !ev.relatedTarget?.closest?.('.git-bar')) hidePeek()
})

// The bars of the lines of the source: the space at the left of a line, or
// at its right in the middle
const sourceDom = source.view.dom
sourceDom.addEventListener('mousemove', ev => {
  const line = ev.target.closest?.('.cm-line')
  const marked = line && /\bm-git-(added|changed|deleted)\b/.test(line.className)
  const rect = line?.getBoundingClientRect()
  if (!marked || (centred ? ev.clientX < rect.right - 12 : ev.clientX > rect.left + 12)) {
    if (peekKey?.startsWith(centred ? 'left:' : 'right:')) hidePeek()
    return
  }
  const number = source.view.state.doc.lineAt(source.view.posAtDOM(line)).number
  if (centred) showPeek(number, number, { left: rect.right - 4, right: rect.right, top: rect.top, bottom: rect.bottom }, 'left')
  else showPeek(number, number, { left: rect.left, right: rect.left + 4, top: rect.top, bottom: rect.bottom }, 'right')
})
sourceDom.addEventListener('mouseleave', ev => {
  if (!peek.contains(ev.relatedTarget)) hidePeek()
})
peek.addEventListener('mouseenter', keepPeek)
peek.addEventListener('mouseleave', ev => {
  if (!ev.relatedTarget?.closest?.('.git-bar')) hidePeek()
})
canvas.addEventListener('scroll', () => {
  hidePeek(false)
  // The card of a role stays where the role was
  if (cardOf && cardOf !== menu) hideCard()
}, { passive: true })
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

function docsText() {
  const { problem, build, diagnostics } = state.docs
  if (problem) return `Docs: ${problem}`
  if (build === 'building') return 'Docs: building...'
  if (build !== 'ready') return ''
  const errors = diagnostics.filter(d => d.severity === 'error').length
  const warnings = diagnostics.length - errors
  const counts = [errors && `${errors} error${errors > 1 ? 's' : ''}`, warnings && `${warnings} warning${warnings > 1 ? 's' : ''}`]
    .filter(Boolean).join(', ')
  return `Docs: up to date${counts ? `, ${counts}` : ''}`
}

// The server of the editor does not answer
let offline = false

// The line below the name of the file: what is wrong, or what to do, when
// there is something to say, and the state of the build. On one line.
function setFileState(text) {
  if (text !== undefined) state.fileState = text
  // adoc-gui was stopped: nothing is saved until it runs again
  fileStatus.classList.toggle('offline', offline)
  fileStatus.textContent = offline
    ? 'adoc-gui is not running: the changes are not saved'
    : [state.fileState, docsText()].filter(Boolean).join(' - ')
  fileStatus.title = offline ? 'Start adoc-gui again: this page will go on, with what was typed' : fileStatus.textContent
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
  document.querySelector('.tab[data-tab=references]').hidden = !running
  if (running && !wasRunning) {
    showSidePane(true)
    selectTab('preview')
  } else if (!running && (state.tab === 'preview' || state.tab === 'references')) {
    selectTab('source', false)
  }
  wasRunning = running
  setFileState()
}

async function buildDocs(start) {
  hideLarge()
  if (start) {
    document.body.classList.remove('choosing')
    drawTree()
    state.docs.build = 'building'
    renderDocs()
  }
  await post(start ? 'api/docs/start' : 'api/docs/stop').catch(() => {})
  pollDocs(true)
}

// A large documentation takes long to build whole: the folders to build are
// chosen first, in the files, unless all of it is asked for
const largeDocs = document.getElementById('large-docs')
function hideLarge() {
  largeDocs.hidden = true
}
function showLarge() {
  const actions = element('div', 'link-actions')
  const choose = element('button', 'build-button', 'Choose the folders')
  const all = element('button', 'text-button plain', 'Build all of it')
  for (const button of [choose, all]) button.type = 'button'
  choose.addEventListener('click', () => {
    hideLarge()
    // The files, with the boxes of their folders: then Build
    document.body.classList.add('choosing')
    showFiles(true)
    setScreen('files')
    drawTree()
  })
  all.addEventListener('click', () => buildDocs(true))
  actions.append(choose, all)
  largeDocs.replaceChildren(
    element('strong', '', 'A large documentation'),
    element('p', '', `It has ${state.docs.pages} pages: building all of them takes a while, each time. ` +
      'Check the folders you work on in the files, and only those are built.'),
    actions)
  largeDocs.hidden = false
  const rect = docsButton.getBoundingClientRect()
  largeDocs.style.top = `${rect.bottom + 8}px`
  largeDocs.style.left = `${Math.max(Math.min(rect.right - largeDocs.offsetWidth, window.innerWidth - largeDocs.offsetWidth - 8), 8)}px`
  choose.focus()
}
largeDocs.addEventListener('keydown', ev => {
  if (ev.key === 'Escape') hideLarge()
})
document.addEventListener('mousedown', ev => {
  if (!largeDocs.hidden && !largeDocs.contains(ev.target) && !docsButton.contains(ev.target)) hideLarge()
}, true)

docsButton.addEventListener('click', () => {
  const running = state.docs.build !== 'off'
  if (!largeDocs.hidden) return hideLarge()
  // All of a large documentation is not built without it being asked for
  if (!running && state.docs.large && !state.sparse.size) return showLarge()
  buildDocs(!running)
})

let docsTimer

async function pollDocs(once) {
  try {
    const path = state.path
    const docs = await (await fetch(`api/docs?path=${encodeURIComponent(path)}`, { headers: { 'X-Doctools': '1' } })).json()
    if (path === state.path && (docs.revision !== state.docs.revision || docs.build !== state.docs.build ||
        docs.page !== state.docs.page || docs.diagnostics.length !== state.docs.diagnostics.length)) {
      if (docs.build === 'ready' && docs.revision !== state.docs.revision) builtAt = performance.now()
      // The build asked for when the editor started waits for the folders
      const waits = docs.held && !state.docs.held && docs.build === 'off'
      state.docs = docs
      if (waits && !state.sparse.size) showLarge()
      answers.clear()
      previews.clear()
      if (docs.build === 'ready') refreshReferences()
      // Another run of the server can be of another configuration
      if (docs.build === 'off') refsData.clear()
      // A build can have made the images that were not found
      if (docs.build === 'ready') settleImages(view, document.activeElement === view ? state.caret.focus : undefined, true)
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
  if (cardOf === menu) hideCard()
  flush()
}

// What a reference points to: its title, the first text of its target and
// where it is, in a card. The text is read from the page of the target, which
// takes a moment: the card is shown with what is known, and filled when the
// text comes.
const previews = new Map()
function previewOf(question) {
  const key = JSON.stringify(question)
  if (!previews.has(key)) {
    previews.set(key, post('api/docs/preview', question).catch(() => ({ error: 'no answer' })).then(answer => {
      // Asked again when it failed
      if (answer.error) previews.delete(key)
      return answer
    }))
  }
  return previews.get(key)
}

// What the card is shown for: the menu or the element of a role
let cardOf
let cardRun = 0
let cardTimer

function hideCard() {
  clearTimeout(cardTimer)
  cardRun++
  cardOf = undefined
  card.hidden = true
}

// known: { title, target, text, page } as far as it is known, waiting: the
// text is on its way
function fillCard(known, waiting) {
  const part = (name, text) => {
    const el = document.createElement('div')
    el.className = name
    el.textContent = text
    return el
  }
  // What it is of: a mistake of the spelling or of the grammar, an error
  card.className = `preview-card${known.kind ? ` card-${known.kind}` : ''}`
  const nodes = [part('preview-title', known.title || known.heading || shortTarget(known.target))]
  if (known.text) {
    nodes.push(part('preview-text', known.text))
  } else if (waiting) {
    const wait = part('preview-wait', '')
    wait.append(document.createElement('span'), document.createElement('span'))
    nodes.push(wait)
  }
  const where = part('preview-where', '')
  if (known.page) {
    // The title of the page, without the name of the documentation after it
    const page = document.createElement('span')
    page.className = 'preview-page'
    page.textContent = known.page.split(' — ')[0]
    if (page.textContent !== nodes[0].textContent) where.append(page)
  }
  if (known.target && shortTarget(known.target) !== nodes[0].textContent) {
    const target = document.createElement('span')
    target.textContent = shortTarget(known.target)
    where.append(target)
  }
  if (known.note) {
    const note = document.createElement('span')
    note.className = 'preview-note'
    note.textContent = known.note
    where.append(note)
  }
  if (where.childNodes.length) nodes.push(where)
  card.replaceChildren(...nodes)
}

// Show the card for 'owner' (the menu or the element of a role), placed by
// place(): first with what is known, then with the text of the target
function showCard(owner, known, question, place) {
  const run = ++cardRun
  cardOf = owner
  const show = (data, waiting) => {
    fillCard(data, waiting)
    card.hidden = false
    place()
  }
  if (!question) return show(known, false)
  let answered = false
  // A text that is already there, or comes at once, is shown without the wait
  cardTimer = setTimeout(() => {
    if (run === cardRun && !answered) show(known, true)
  }, 120)
  previewOf(question).then(answer => {
    answered = true
    if (run !== cardRun) return
    if (answer.error) return known.title || known.target ? show(known, false) : hideCard()
    show({ ...known, ...Object.fromEntries(Object.entries(answer).filter(([, value]) => value)) }, false)
  })
}

// Beside the menu: at its right, or at its left when there is no room
function placeCardAtMenu() {
  const rect = menu.getBoundingClientRect()
  const right = rect.right + 6 + card.offsetWidth <= window.innerWidth - 8
  card.style.left = `${right ? rect.right + 6 : Math.max(rect.left - 6 - card.offsetWidth, 8)}px`
  card.style.top = `${Math.max(Math.min(rect.top, window.innerHeight - card.offsetHeight - 8), 8)}px`
}

// The card of the entry of the menu that is selected, once the selection rests
let menuCardTimer
function showMenuCard() {
  clearTimeout(menuCardTimer)
  const item = completion?.items[completion.index]
  if (!item?.preview) {
    if (cardOf === menu) hideCard()
    return
  }
  menuCardTimer = setTimeout(() => {
    if (completion?.items[completion.index] !== item) return
    showCard(menu, { title: item.detail, target: item.uri }, item.preview, placeCardAtMenu)
  }, cardOf === menu ? 140 : 320)
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

// A role or a directive is being typed, or the directive of the caret is
// not finished, as a note without its content yet: the file is not saved
// meanwhile, a build of the half-written markup would only warn about what
// is about to be written. It is saved once the caret is out of it, or the
// page loses the focus, or nothing is typed for a while.
function completing() {
  if (state.docs.build === 'off' || document.activeElement !== view) return false
  return completion !== undefined || contextAtCaret() !== undefined || unfinishedAt(state.model, state.caret.focus)
}
const HELD_MS = 30000
let heldTimer

// The option of the caret, when the caret is in its name or in its value,
// or when one of them is selected: what the directive takes is chosen from
// a menu, without the documentation server. { items, start, end }
function optionAtCaret() {
  const { anchor, focus } = state.caret
  const { source, model } = state
  const leaf = leafAt(model, focus)
  const option = leaf?.block
  if (option?.kind !== 'option' || option.parent?.kind !== 'options') return undefined
  const a = Math.min(anchor, focus), b = Math.max(anchor, focus)
  const none = { items: [] }
  if (a < leaf.s || b > leaf.e || (a !== b && (a !== leaf.s || b !== leaf.e))) return none
  const directive = option.parent.parent.name
  const typed = a === b ? source.slice(leaf.s, focus) : ''

  if (leaf.kind !== 'name') {
    const gap = source[leaf.s - 1] === ' ' ? '' : ' '
    const items = optionChoices(directive, 'value', { option: option.name, typed })
      .map(item => ({ ...item, text: gap + item.text }))
    return { items, start: leaf.s, end: leaf.e }
  }
  const used = option.parent.children.filter(other => other.kind === 'option').map(other => other.name)
  const value = option.inlines[option.inlines.length - 1]
  const items = optionChoices(directive, 'name', { option: option.name, used, typed }).map(item => {
    // A flag is all there is to it, the caret goes to the value of the others
    const end = leaf.s + item.text.length
    const caret = optionSpec(directive, item.text) === FLAG ? end : value.e + end - leaf.e
    return { ...item, caret }
  })
  return { items, start: leaf.s, end: leaf.e }
}

// A new option of a directive: its name is chosen or typed
function newOption(directive) {
  commit(addOption(state.model, directive))
  suggest()
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
  showMenuCard()
}

async function suggest() {
  const { anchor, focus } = state.caret
  const { source } = state
  const option = optionAtCaret()
  if (option) {
    if (!option.items.length) return closeMenu()
    completion = { ...option, index: 0, anchor, caret: focus }
    return renderMenu()
  }
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
  completion = {
    items, index: 0, anchor: focus, caret: focus, start: focus - context.partial.length, end: focus + context.skip
  }
  renderMenu()
}

function accept(index = completion.index) {
  const item = completion.items[index]
  const { start, end } = completion
  closeMenu()
  commit({ start, end, text: item.text, caret: item.caret ?? start + item.text.length })
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
view.addEventListener('blur', () => settleImages(view, undefined))
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
grammarSelect.addEventListener('change', () => {
  setGrammarMode(grammarSelect.value)
  hideInstall()
  // On this machine: LanguageTool is installed when it is not, once it is
  // agreed to
  if (grammarSelect.value === 'local') offerInstall()
})

// LanguageTool is not installed for the check on this machine: it can be,
// which takes a while, and is asked first
const grammarInstall = document.getElementById('grammar-install')
let installTimer
function hideInstall() {
  clearTimeout(installTimer)
  grammarInstall.hidden = true
}
function showInstall(title, text, buttons = []) {
  const actions = element('div', 'link-actions')
  for (const [label, className, run] of buttons) {
    const button = element('button', className, label)
    button.type = 'button'
    button.addEventListener('click', run)
    actions.append(button)
  }
  grammarInstall.replaceChildren(element('strong', '', title), element('p', '', text), ...(buttons.length ? [actions] : []))
  grammarInstall.hidden = false
  const rect = grammarSelect.parentElement.getBoundingClientRect()
  grammarInstall.style.top = `${rect.bottom + 8}px`
  grammarInstall.style.left = `${Math.max(Math.min(rect.left, window.innerWidth - grammarInstall.offsetWidth - 8), 8)}px`
  actions.querySelector('button')?.focus()
}
const installState = start => fetch('api/grammar/install', {
  method: 'POST', headers: { 'X-Doctools': '1' }, body: start ? '{"install":true}' : ''
}).then(r => r.json()).catch(() => ({ state: 'failed', message: 'adoc-gui is not running' }))

async function offerInstall() {
  const run = grammarRun
  const probe = await post('api/grammar', { text: 'Check.', mode: 'local' }).catch(() => ({}))
  if (run !== grammarRun || probe.error !== 'not_installed') return
  showInstall('Install LanguageTool?',
    'The check on this machine needs LanguageTool, which is not installed. Installing it takes about 2 minutes; it needs Java to run.', [
      ['Install', 'build-button', () => followInstall(true)],
      ['Not now', 'text-button plain', hideInstall]
    ])
}
async function followInstall(start) {
  const answer = await installState(start)
  if (answer.state === 'installing') {
    showInstall('Installing LanguageTool...', 'It takes about 2 minutes. You can go on writing meanwhile.')
    installTimer = setTimeout(() => followInstall(false), 2000)
  } else if (answer.state === 'done') {
    hideInstall()
    // Checked again, with it: its first check starts it
    if (grammarMode === 'local') setGrammarMode('local')
  } else {
    showInstall('LanguageTool was not installed', answer.message || 'pip did not say why.',
      [['Close', 'text-button plain', hideInstall]])
  }
}
grammarInstall.addEventListener('keydown', ev => {
  if (ev.key === 'Escape') hideInstall()
})

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
// The mistakes that are underlined: { dom, match, spelling }, dom: their text
// in the page
let mistakes = []
function showMistakes() {
  if (mistakes.includes(cardOf)) hideCard()
  mistakes = []
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
      mistakes.push({ dom, match, spelling: isSpelling(match) })
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
  if (directive?.takesOptions) extra.push({ label: `Add an option to ${directive.name}`, run: () => newOption(directive) })
  let tabSet
  for (let up = block; up; up = up.parent) if (up.name === 'tab-set') { tabSet = up; break }
  if (tabSet) extra.push({ label: 'Add a tab', run: () => commit(addTab(state.model, tabSet)) })
  if (extra.length) items.push({ kind: 'separator' }, ...extra)

  // The link there: changed, opened, removed; or a new one
  const found = linkAt(model, a, b)
  if (found) {
    const { link } = found
    const open = linkAddress(link?.target)
    const own = link && (link.kind === 'embedded' || link.kind === 'address')
    items.push({ kind: 'separator' },
      { label: link ? 'Edit the link…' : 'Add a link…', keys: 'Ctrl+K', run: () => editLink({ a, b }) })
    if (open) items.push({ label: 'Open the link', keys: 'Ctrl+click', run: () => window.open(open, '_blank', 'noopener') })
    if (own) items.push({ label: 'Remove the link', run: () => commit(setLink(state.model, a, b, link.kind === 'address' ? link.target : link.text, '')) })
  }
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
  if (!el && cardOf?.classList?.contains('k-role')) hideCard()
  if (!el || state.docs.build === 'off') return
  hoverTimer = setTimeout(async () => {
    const leaf = state.model.leaves.find(l => l.kind === 'role' && l.s === Number(el.dataset.s))
    const question = leaf && roleQuestion(state.source.slice(leaf.os, leaf.oe))
    if (!question) return
    const answer = await ask(question)
    if (!el.isConnected || !el.matches(':hover')) return
    // Below the role, or above it when there is no room
    const place = box => () => {
      const rect = el.getBoundingClientRect()
      const below = rect.bottom + 6 + box.offsetHeight <= window.innerHeight - 8
      box.style.top = `${below ? rect.bottom + 6 : Math.max(rect.top - 6 - box.offsetHeight, 8)}px`
      box.style.left = `${Math.max(Math.min(rect.left, window.innerWidth - box.offsetWidth - 8), 0)}px`
    }
    if (answer.error)
      return showCard(el, { kind: 'error', title: 'Not found', text: answer.error, page: `:${question.role}:` }, undefined, place(card))
    // A role that makes an address: where it leads
    if (!hasPreview(question.role, answer.target))
      return showCard(el, { title: answer.title, target: answer.target, page: `:${question.role}:` }, undefined, place(card))
    // A reference into a documentation: the text of its target comes after
    showCard(el, { title: answer.title, target: answer.target }, question, place(card))
  }, 350)
})
view.addEventListener('mouseout', ev => {
  const el = ev.target.closest?.('.k-role')
  if (el) {
    clearTimeout(hoverTimer)
    if (cardOf === el) hideCard()
  }
})

// Hover: where a link leads; Ctrl and a click open it
let linkTimer
const linkOfElement = el => {
  const leaf = state.model.leaves.find(l => l.kind === 'link' && l.s === Number(el.dataset.s) && l.e === Number(el.dataset.e))
  return linkOf(state.model, leaf)
}
view.addEventListener('mouseover', ev => {
  const el = ev.target.closest?.('.k-link')
  clearTimeout(linkTimer)
  if (!el && cardOf?.classList?.contains('k-link')) hideCard()
  if (!el || !linkEditor.hidden) return
  linkTimer = setTimeout(() => {
    const link = el.isConnected && el.matches(':hover') ? linkOfElement(el) : undefined
    if (!link) return
    const place = () => {
      const rect = el.getBoundingClientRect()
      const below = rect.bottom + 6 + card.offsetHeight <= window.innerHeight - 8
      card.style.top = `${below ? rect.bottom + 6 : Math.max(rect.top - 6 - card.offsetHeight, 8)}px`
      card.style.left = `${Math.max(Math.min(rect.left, window.innerWidth - card.offsetWidth - 8), 0)}px`
    }
    if (!link.target) {
      return showCard(el, {
        kind: 'error', title: 'No address',
        text: link.kind === 'named' ? `Nothing in the document is named “${link.text}”.` : 'The document has no address left for this link.'
      }, undefined, place)
    }
    const how = linkAddress(link.target) ? 'Ctrl+click to open  ·  Ctrl+K to edit' : 'Ctrl+K to edit'
    showCard(el, {
      title: link.kind === 'address' ? shortTarget(link.target) : link.text || shortTarget(link.target),
      target: link.target,
      note: link.at === undefined ? how : `line ${lineOf(link.at)}  ·  ${how}`
    }, undefined, place)
  }, 350)
})
view.addEventListener('mouseout', ev => {
  const el = ev.target.closest?.('.k-link')
  if (!el) return
  clearTimeout(linkTimer)
  if (cardOf === el) hideCard()
})
view.addEventListener('click', ev => {
  const el = (ev.ctrlKey || ev.metaKey) && ev.target.closest?.('.k-link')
  const open = el && linkAddress(linkOfElement(el)?.target)
  if (!open) return
  ev.preventDefault()
  window.open(open, '_blank', 'noopener')
})

// Hover: what a substitution is replaced by, and where it leads when it is
// a link too
let substitutionTimer
const substitutionLink = el => el.classList.contains('linked')
  ? namedTarget(state.model, el.textContent) : {}
view.addEventListener('mouseover', ev => {
  const el = ev.target.closest?.('.k-substitution')
  clearTimeout(substitutionTimer)
  if (!el && cardOf?.classList?.contains('k-substitution')) hideCard()
  if (!el) return
  substitutionTimer = setTimeout(() => {
    if (!el.isConnected || !el.matches(':hover')) return
    const name = el.textContent
    const found = substitutionOf(state.source, name)
    const link = substitutionLink(el)
    const place = () => {
      const rect = el.getBoundingClientRect()
      const below = rect.bottom + 6 + card.offsetHeight <= window.innerHeight - 8
      card.style.top = `${below ? rect.bottom + 6 : Math.max(rect.top - 6 - card.offsetHeight, 8)}px`
      card.style.left = `${Math.max(Math.min(rect.left, window.innerWidth - card.offsetWidth - 8), 0)}px`
    }
    if (!found) {
      return showCard(el, {
        kind: 'error', title: `|${name}|`,
        text: 'Not defined in this file. It can be in the configuration of the documentation, else it needs a line “.. |name| replace:: text”.'
      }, undefined, place)
    }
    const notes = []
    if (found.at !== undefined) notes.push(`line ${lineOf(found.at)}`)
    if (found.kind === 'sphinx') notes.push('given by Sphinx')
    if (el.classList.contains('linked')) notes.push(link.target ? (linkAddress(link.target) ? 'Ctrl+click to open' : 'a link') : 'a link, with no address in this file')
    showCard(el, {
      title: `|${name}|`,
      text: found.kind === 'replace' || found.kind === 'sphinx' ? found.text : `${found.kind}: ${found.text}`,
      target: link.target,
      note: notes.join('  ·  ')
    }, undefined, place)
  }, 350)
})
view.addEventListener('mouseout', ev => {
  const el = ev.target.closest?.('.k-substitution')
  if (!el) return
  clearTimeout(substitutionTimer)
  if (cardOf === el) hideCard()
})
view.addEventListener('click', ev => {
  const el = (ev.ctrlKey || ev.metaKey) && ev.target.closest?.('.k-substitution.linked')
  const open = el && linkAddress(substitutionLink(el).target)
  if (!open) return
  ev.preventDefault()
  window.open(open, '_blank', 'noopener')
})

// Hover: a mistake of the prose, what it is and what corrects it. The
// underlines are not elements: the mistake is the one whose text is under
// the pointer, once the pointer rests.
let mistakeTimer
const mistakeAt = (x, y) => mistakes.find(({ dom }) =>
  [...dom.getClientRects()].some(r => x >= r.left - 1 && x <= r.right + 1 && y >= r.top && y <= r.bottom + 2))
view.addEventListener('mousemove', ev => {
  clearTimeout(mistakeTimer)
  const shown = mistakes.includes(cardOf) ? cardOf : undefined
  if (ev.buttons || ev.target.closest?.('.k-role, .k-link, .k-substitution, .cm-editor')) return shown && hideCard()
  const found = mistakeAt(ev.clientX, ev.clientY)
  if (found === shown) return
  if (shown) hideCard()
  if (!found || (cardOf && cardOf !== menu)) return
  mistakeTimer = setTimeout(() => {
    if (!mistakes.includes(found) || context.open) return
    const { match, spelling, dom } = found
    const fixes = match.replacements.slice(0, 5).map(value => value || '(remove)')
    showCard(found, {
      kind: spelling ? 'spelling' : 'grammar',
      title: spelling ? 'Spelling' : 'Grammar',
      text: match.message,
      note: fixes.length ? `${fixes.join('  ·  ')}  —  right click to correct` : 'No suggestion'
    }, undefined, () => {
      const rects = dom.getClientRects()
      const rect = [...rects].find(r => ev.clientY >= r.top && ev.clientY <= r.bottom + 2) ?? rects[0]
      if (!rect) return hideCard()
      const below = rect.bottom + 6 + card.offsetHeight <= window.innerHeight - 8
      card.style.top = `${below ? rect.bottom + 6 : Math.max(rect.top - 6 - card.offsetHeight, 8)}px`
      card.style.left = `${Math.max(Math.min(rect.left, window.innerWidth - card.offsetWidth - 8), 8)}px`
    })
  }, 350)
})
// The menu of the right click takes its place
document.addEventListener('contextmenu', () => {
  clearTimeout(mistakeTimer)
  if (cardOf && cardOf !== menu) hideCard()
}, true)
view.addEventListener('mouseleave', () => {
  clearTimeout(mistakeTimer)
  if (mistakes.includes(cardOf)) hideCard()
})

// File --------------------------------------------------------------------------

const api = (path, options = {}) => fetch(`api/file?path=${encodeURIComponent(path)}`,
  { ...options, headers: { 'X-Doctools': '1', ...options.headers } })

let saveTimer

function changed() {
  state.dirty = true
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
  clearTimeout(heldTimer)
  if (force !== true && completing()) {
    state.held = true
    // Not for ever: what is typed is kept
    heldTimer = setTimeout(() => save(true), HELD_MS)
    return
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
      // What was said about it no longer holds
      setFileState('')
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
      } else if (file.mtime !== state.mtime && !state.dirty && file.text !== withoutTrailing(state.source)) {
        remember()
        setSource(file.text, diff(state.source, file.text))
        paint()
        renderCode(false)
        renderStatus()
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
  // The last commit of the file before is not the one of this file: no
  // changes are shown until git answers for it
  gitRun++
  state.git = { ...state.git, head: null }
  hunks = []
  gitCache = undefined
  setSource(file.text)
  state.lastEdit = undefined
  document.title = `${file.name} - Doctools`
  title.textContent = file.path
  title.title = file.absolute
  history.replaceState(null, '', `#${encodeURIComponent(file.path)}`)
  setFileState('')
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
  // Not while a name is typed in it
  if (!state.files || naming) return
  renderTree(tree, state.files, {
    current: state.path, expanded: state.expanded, selection: state.sparse, changes: state.git.files
  })
  const count = state.sparse.size
  const choosing = document.body.classList.contains('choosing') && state.docs.build === 'off'
  document.getElementById('sparse-state').textContent = count
    ? `${choosing ? '' : 'Building '}${count} folder${count > 1 ? 's' : ''}${choosing ? ' to build' : ''}`
    : choosing ? 'Check the folders' : 'Files'
  document.getElementById('sparse-clear').hidden = !count || choosing
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

// New, rename, move, delete: the files of the tree ------------------------------

// A name is being typed in the tree
let naming = false

const rowOf = path => [...tree.querySelectorAll('.tree-row')].find(row => row.dataset.path === path)

async function typeName(options) {
  naming = true
  try {
    return await askName(tree, options)
  } finally {
    naming = false
    drawTree()
  }
}

// Make, move or delete a file: what is not saved is saved first. The answer
// of the server, undefined when it could not be done, which is said at the top.
async function changeFiles(body) {
  clearTimeout(saveTimer)
  await save(true)
  const answer = await post('api/files', body).catch(() => ({ error: 'adoc-gui is not running' }))
  if (answer.error) {
    setFileState(answer.error)
    return undefined
  }
  await loadTree()
  return answer
}

// A new file in a folder, '' for the top one: its name is typed, and it is opened
async function newFile(folder = '') {
  if (naming) return
  if (folder && !state.expanded.has(folder)) {
    state.expanded.add(folder)
    store('expanded', [...state.expanded])
    drawTree()
  }
  const typed = await typeName({ folder: folder ? rowOf(folder) : undefined, placeholder: 'name.rst' })
  const path = typed && filePath(folder, typed)
  if (!path) return
  const answer = await changeFiles({ action: 'new', path })
  if (answer) await openFile(answer.path).then(() => setScreen('editor'))
}

// Rename a file, or move it: to is its new path. The open file stays open,
// with its history.
async function moveFile(path, to) {
  if (!to || to === path) return
  const answer = await changeFiles({ action: 'move', path, to })
  if (!answer) return
  if (path === state.path) {
    state.path = answer.path
    state.mtime = answer.mtime
    document.title = `${answer.name} - Doctools`
    title.textContent = answer.path
    title.title = answer.absolute
    history.replaceState(null, '', `#${encodeURIComponent(answer.path)}`)
    pollDocs(true)
  }
  for (const folder of ancestorsOf(answer.path)) state.expanded.add(folder)
  store('expanded', [...state.expanded])
  drawTree()
  loadGit()
}

// Rename: the name is typed in the row, without its folder. whole: the
// path is typed, to move the file to another folder, made when it is not there.
async function renameFile(path, whole = false) {
  const row = rowOf(path)
  if (!row || naming) return
  const folder = folderOf(path)
  const value = whole ? path : path.slice(folder ? folder.length + 1 : 0)
  // The name is selected, without .rst
  const select = [whole && folder ? folder.length + 1 : 0, value.length - '.rst'.length]
  const typed = await typeName({ row, value, select })
  if (typed) await moveFile(path, filePath(whole ? '' : folder, typed))
}

async function deleteFile(path) {
  const answer = await changeFiles({ action: 'delete', path })
  if (!answer) return
  if (path !== state.path) return loadGit()
  // The open file is gone: another one is shown
  state.dirty = false
  if (answer.open) {
    const response = await api(answer.open)
    if (response.ok) return show(await response.json())
  }
  setFileState('No file left to show')
}

document.getElementById('new-file').addEventListener('click', () => newFile(folderOf(state.path)))

// The menu of a file, of a folder, or of the tree
tree.addEventListener('contextmenu', ev => {
  if (ev.shiftKey || ev.target.closest('.tree-input')) return
  ev.preventDefault()
  const row = ev.target.closest('.tree-row')
  const path = row?.dataset.path ?? ''
  const { clientX: x, clientY: y } = ev
  if (!row || row.classList.contains('dir')) {
    return context.show(x, y, [{ label: path ? `New file in ${path}` : 'New file', run: () => newFile(path) }])
  }
  const name = path.slice(path.lastIndexOf('/') + 1)
  const items = [
    { label: 'New file', run: () => newFile(folderOf(path)) },
    { kind: 'separator' },
    { label: 'Rename', keys: 'F2', run: () => renameFile(path) },
    { label: 'Move to…', run: () => renameFile(path, true) },
    { kind: 'separator' },
    {
      label: 'Delete',
      kind: 'danger',
      // Asked again, where the pointer is: a deleted file does not come back
      run: () => context.show(x, y, [
        { kind: 'note', label: `Delete ${name}? It cannot be undone${state.git.available ? ', but for what is committed' : ''}.` },
        { label: `Delete ${name}`, kind: 'danger', run: () => deleteFile(path) },
        { label: 'Keep it', run: () => {} }
      ])
    }
  ]
  context.show(x, y, items)
})

// The keys of the menu when it is not the one of the page, and F2 on the
// open file
document.addEventListener('keydown', ev => {
  if (context.open && !view.contains(ev.target)) return void context.key(ev)
  if (ev.key === 'F4' && !ev.ctrlKey && !ev.altKey && !ev.metaKey) {
    ev.preventDefault()
    return setCentre(!centred)
  }
  if (ev.key === 'F2' && !ev.target.closest?.('input, textarea, select')) {
    ev.preventDefault()
    renameFile(state.path)
  }
})

// A file dragged to a folder, or to the tree for the top folder, moves there
let dragged
const dropTarget = ev => {
  if (!dragged) return undefined
  const row = ev.target.closest?.('.tree-row')
  const folder = !row ? '' : row.classList.contains('dir') ? row.dataset.path : folderOf(row.dataset.path)
  return folder === folderOf(dragged) ? undefined : { folder, el: folder ? rowOf(folder) : tree }
}
const clearDrop = () => {
  for (const el of [tree, ...tree.querySelectorAll('.drop')]) el.classList.remove('drop')
}
tree.addEventListener('dragstart', ev => {
  const row = ev.target.closest?.('.tree-row.file')
  if (!row || naming) return ev.preventDefault()
  dragged = row.dataset.path
  row.classList.add('dragged')
  ev.dataTransfer.effectAllowed = 'move'
  ev.dataTransfer.setData('text/plain', dragged)
})
tree.addEventListener('dragover', ev => {
  const target = dropTarget(ev)
  clearDrop()
  if (!target) return
  ev.preventDefault()
  ev.dataTransfer.dropEffect = 'move'
  target.el?.classList.add('drop')
})
tree.addEventListener('dragleave', ev => {
  if (!tree.contains(ev.relatedTarget)) clearDrop()
})
tree.addEventListener('drop', ev => {
  const target = dropTarget(ev)
  clearDrop()
  if (!target) return
  ev.preventDefault()
  const path = dragged
  moveFile(path, filePath(target.folder, path.slice(path.lastIndexOf('/') + 1)))
})
tree.addEventListener('dragend', () => {
  dragged = undefined
  clearDrop()
  tree.querySelector('.dragged')?.classList.remove('dragged')
})

tree.addEventListener('click', ev => {
  const row = ev.target.closest('.tree-row')
  if (!row || row.classList.contains('naming')) return
  const { path } = row.dataset
  if (row.classList.contains('file')) return openFile(path).then(() => setScreen('editor'))
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
      if (state.sparse.size) post('api/docs/sparse', { paths: state.sparse.toArray(), restored: true }).catch(() => {})
    }
    drawTree()
  } catch { }
}
window.addEventListener('focus', () => {
  loadTree()
  loadGitSoon()
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
    frame.dataset.src = target
    if (followed === page) {
      // The live view went there by itself, by a link: it shows the page
      followed = undefined
      previewReady = true
    } else {
      previewReady = false
      frame.src = target
    }
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
  const line = centred ? (sourceScroller().scrollTop <= 0 ? 1 : sourceTopLine()) : canvas.scrollTop <= 0 ? 1 : topLine()
  toFrame({ type: 'scroll', line, lines: state.model.lineStarts.length })
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
    } else if (performance.now() - builtAt < REBUILD_RESET_MS && document.activeElement !== frame) {
      // A full build loads the first page again: go back to the page of the
      // file. Not when the live view has the focus: a link was clicked in
      // it, which a build that was just done must not undo.
      toFrame({ type: 'navigate', path: page })
    } else {
      // A link was followed in the live view: open the file of that page.
      // The live view is already on it: it is not loaded again.
      previewReady = false
      const path = sourceOf(message.path)
      if (path) {
        followed = message.path
        openFile(path)
      }
    }
  } else if (message.type === 'scroll' && typeof message.line === 'number' && message.path === page) {
    if (centred) scrollSourceTo(message.line)
    if (pageShown()) scrollToLine(message.line)
  }
})

const REBUILD_RESET_MS = 5000
let builtAt = 0
// The page a link of the live view led to, until its file is the open one
let followed

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

// The source and the page scroll together: the line at the top of the one
// that is scrolled is brought to the top of the other. What is scrolled
// here does not send the other back.
let sourceUntil = 0
const sourceShown = () => (centred || state.tab === 'source') && source.view.dom.offsetParent !== null
const pageShown = () => canvas.offsetParent !== null

// Bring a line of the source, with how far in it, to the top of the source
function scrollSourceTo(line) {
  const editor = source.view
  const number = Math.min(Math.max(Math.floor(line), 1), editor.state.doc.lines)
  const block = editor.lineBlockAt(editor.state.doc.line(number).from)
  // The top of the page is the top of the source
  const move = line <= 1 ? -sourceScroller().scrollTop
    : Math.round(editor.documentTop + block.top + (line - number) * block.height - sourceTop())
  if (Math.abs(move) < 1) return
  sourceUntil = performance.now() + 300
  sourceScroller().scrollTop += move
}

// What scrolls the source: its editor, or what is around it in the middle,
// where it is as the page is. And where its first line shown is, there
// below the bar of the tools.
const sourceScroller = () => centred ? centerSource : source.view.scrollDOM
const sourceTop = () => sourceScroller().getBoundingClientRect().top + (centred ? 60 : 0)

// The line of the source at the top of the source pane, with how far in it
function sourceTopLine() {
  const editor = source.view
  const top = sourceTop() - editor.documentTop
  const block = editor.lineBlockAtHeight(top)
  const line = editor.state.doc.lineAt(block.from).number
  return line + (block.height > 0 ? Math.min(Math.max((top - block.top) / block.height, 0), 1) : 0)
}

function syncSource() {
  if (!sourceShown() || performance.now() < followUntil) return
  scrollSourceTo(canvas.scrollTop <= 0 ? 1 : topLine())
}

let sourceFrame = 0
const sourceScrolled = () => {
  if (sourceFrame || !sourceShown() || performance.now() < sourceUntil) return
  sourceFrame = requestAnimationFrame(() => {
    sourceFrame = 0
    if (performance.now() < sourceUntil) return
    // In the middle: the live view follows it
    if (centred) syncPreview()
    if (!pageShown()) return
    // The top of the source is the top of the page
    if (sourceScroller().scrollTop <= 0) {
      followUntil = performance.now() + 400
      canvas.scrollTop = 0
    } else {
      scrollToLine(sourceTopLine())
    }
  })
}
source.view.scrollDOM.addEventListener('scroll', sourceScrolled, { passive: true })
centerSource.addEventListener('scroll', sourceScrolled, { passive: true })

// The bar of the page and of the source, which scroll together: it shows,
// and moves, the one in the middle, and the other one follows
const scrollBar = document.getElementById('scroll')
const scrollThumb = scrollBar.firstElementChild
const scrolled = () => {
  const list = centred ? [centerSource, canvas] : [canvas, source.view.scrollDOM]
  return list.find(el => el.offsetParent !== null)
}
function renderScroll() {
  const el = scrolled()
  const range = el ? el.scrollHeight - el.clientHeight : 0
  scrollBar.hidden = range <= 0
  if (range <= 0) return
  const box = el.getBoundingClientRect()
  // The one in the middle goes under the bar of the tools
  const top = el.closest('.side') ? box.top : box.top + 56
  const track = box.bottom - top
  const size = Math.max(24, track * el.clientHeight / el.scrollHeight)
  scrollBar.style.top = `${top}px`
  scrollBar.style.height = `${track}px`
  scrollThumb.style.height = `${size}px`
  scrollThumb.style.top = `${(track - size) * el.scrollTop / range}px`
}
scrollBar.addEventListener('pointerdown', ev => {
  const el = scrolled()
  if (!el) return
  ev.preventDefault()
  const range = el.scrollHeight - el.clientHeight
  const free = scrollBar.clientHeight - scrollThumb.offsetHeight
  const box = scrollThumb.getBoundingClientRect()
  // Out of the thumb: its middle comes to the pointer
  const grip = ev.clientY >= box.top && ev.clientY <= box.bottom ? ev.clientY - box.top : box.height / 2
  const move = at => {
    const y = at.clientY - scrollBar.getBoundingClientRect().top - grip
    el.scrollTop = free > 0 ? range * Math.min(Math.max(y / free, 0), 1) : 0
  }
  move(ev)
  scrollBar.classList.add('dragged')
  scrollBar.setPointerCapture(ev.pointerId)
  const end = () => {
    scrollBar.classList.remove('dragged')
    scrollBar.removeEventListener('pointermove', move)
    scrollBar.removeEventListener('pointerup', end)
    scrollBar.removeEventListener('pointercancel', end)
  }
  scrollBar.addEventListener('pointermove', move)
  scrollBar.addEventListener('pointerup', end)
  scrollBar.addEventListener('pointercancel', end)
})
scrollBar.addEventListener('wheel', ev => {
  const el = scrolled()
  if (el) el.scrollTop += ev.deltaY
}, { passive: true })
let barFrame = 0
const scrollSoon = () => {
  barFrame ||= requestAnimationFrame(() => {
    barFrame = 0
    renderScroll()
  })
}
canvas.addEventListener('scroll', scrollSoon, { passive: true })
source.view.scrollDOM.addEventListener('scroll', scrollSoon, { passive: true })
centerSource.addEventListener('scroll', scrollSoon, { passive: true })
window.addEventListener('resize', scrollSoon)
// What they hold, and the place they have, change
const sizes = new ResizeObserver(scrollSoon)
for (const el of [view, canvas, centerSource, source.view.contentDOM, source.view.scrollDOM]) sizes.observe(el)

let scrollFrame = 0
canvas.addEventListener('scroll', () => {
  if (scrollFrame) return
  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = 0
    syncPreview()
    syncSource()
  })
}, { passive: true })

document.getElementById('preview-start').addEventListener('click', () => docsButton.click())

// Tabs of the side pane. remember: the user chose it
function selectTab(name, remember = true) {
  state.tab = name
  renderMore()
  for (const tab of document.querySelectorAll('.tab'))
    tab.setAttribute('aria-selected', String(tab.dataset.tab === name))
  // The tab of the source is the one of the page when they are swapped
  sourcePanel.hidden = !centred && name !== 'source'
  canvas.hidden = centred && name !== 'source'
  document.getElementById('preview').hidden = name !== 'preview'
  document.getElementById('changes').hidden = name !== 'changes'
  document.getElementById('references').hidden = name !== 'references'
  if (name === 'changes') loadChanges()
  if (name === 'references') loadReferences()
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

// References: what can be referenced, of the project and of its inventories ----
//
// One list: a documentation (the one of the project, then its inventories),
// its types, their references. What is closed is not asked for nor searched:
// an inventory can hold thousands of references.

const refsSearch = document.getElementById('refs-search')
const refsFilter = document.getElementById('refs-filter')
const refsTypes = document.getElementById('refs-types')
const refsList = document.getElementById('refs-list')
// The references shown of a type, at most: the search narrows them
const REFS_SHOWN = 150

// What is open, and the types shown: kept by the browser.
// open: the documentations, '' is the one of the project; toggled: the types
// that are not as they are at first, see roleOpen; filter: the types shown,
// all when empty
const refsState = { open: new Set(['']), toggled: new Set(), filter: new Set() }
try {
  const kept = JSON.parse(localStorage.getItem('doctools.references') ?? 'null')
  if (kept) for (const key of ['open', 'toggled', 'filter']) if (Array.isArray(kept[key])) refsState[key] = new Set(kept[key])
} catch { }
function keepReferences() {
  try {
    localStorage.setItem('doctools.references', JSON.stringify({
      open: [...refsState.open], toggled: [...refsState.toggled], filter: [...refsState.filter]
    }))
  } catch { }
}

// The answers of the backend, by question: undefined while it is waited for,
// a list, or { error }. They are kept: an inventory does not change while
// the server runs, and what the project holds is asked again after a build,
// see refreshReferences.
const refsData = new Map()

// An answer when it is there, asked for otherwise: the list is shown again
// when it comes
function refsAnswer(request) {
  const key = JSON.stringify(request)
  if (refsData.has(key)) return refsData.get(key)
  refsData.set(key, undefined)
  ask(request).then(answer => {
    if (!refsData.has(key)) return
    if (Array.isArray(answer.list)) refsData.set(key, answer.list)
    else if (state.docs.build === 'ready') refsData.set(key, { error: answer.error ?? 'No answer' })
    // Not built yet: it stays waited for, and is asked again with the build
    else return
    if (state.tab === 'references') renderReferences()
  })
  return undefined
}

const typesRequest = inventory => inventory ? { completion: 'inventory_types', inventory } : { completion: 'local_types' }
const targetsRequest = (inventory, role) =>
  inventory ? { completion: 'inventory_targets', inventory, role } : { completion: 'local_targets', role }

function loadReferences() {
  renderReferences()
}

// After a build: what the project holds may have changed, a label added or
// a page renamed. It is asked again behind what is shown, which changes only
// when the answer does. The inventories are as they were read, they are not
// asked again; what failed or was not there yet is.
function refreshReferences() {
  for (const [key, before] of [...refsData]) {
    const request = JSON.parse(key)
    if (Array.isArray(before) && !String(request.completion).startsWith('local_')) continue
    ask(request).then(answer => {
      if (!refsData.has(key)) return
      const after = Array.isArray(answer.list) ? answer.list
        // What was there is better than an answer that failed
        : Array.isArray(before) ? before : { error: answer.error ?? 'No answer' }
      if (JSON.stringify(after) === JSON.stringify(refsData.get(key))) return
      refsData.set(key, after)
      if (state.tab === 'references') renderReferences()
    })
  }
}

// The rows of the list are kept from one render to the next when they say
// the same: only what changed is touched, and the list stays where it is
function keepRows(nodes) {
  const before = new Map()
  for (const el of refsList.children) if (el.key !== undefined && !before.has(el.key)) before.set(el.key, el)
  const rows = nodes.map(node => {
    const kept = before.get(node.key)
    if (!kept) return node
    before.delete(node.key)
    kept.reference = node.reference
    return kept
  })
  const keep = new Set(rows)
  for (const el of [...refsList.children]) if (!keep.has(el)) el.remove()
  rows.forEach((row, i) => {
    if (refsList.children[i] !== row) refsList.insertBefore(row, refsList.children[i] ?? null)
  })
}

function refsRow(className, label, count, open) {
  const row = element('button', className)
  row.type = 'button'
  row.setAttribute('role', 'treeitem')
  row.setAttribute('aria-expanded', String(open))
  row.append(element('span', 'refs-label', label))
  if (count !== undefined) row.append(element('span', 'refs-count', String(count)))
  return row
}

function renderReferences(top = refsList.scrollTop) {
  const query = refsSearch.value.trim()
  const inventories = refsAnswer({ completion: 'inventory' })
  const documentations = [{ name: '', label: 'This documentation' },
    ...(Array.isArray(inventories) ? inventories : []).map(inventory =>
      ({ name: inventory.name, label: inventory.project ? `${inventory.name} · ${inventory.project}` : inventory.name }))]

  const nodes = []
  const known = new Map()
  for (const documentation of documentations) {
    const open = refsState.open.has(documentation.name)
    const head = refsRow('refs-doc', documentation.label, undefined, open)
    head.dataset.doc = documentation.name
    nodes.push(head)
    if (!open) continue

    const types = refsAnswer(typesRequest(documentation.name))
    if (!Array.isArray(types)) {
      // Asked for: it is shown when it comes
      if (types) nodes.push(element('div', 'refs-line error', types.error))
      continue
    }
    for (const type of types) known.set(type.name, type)
    const shown = filterRoles(types, refsState.filter)
    let rows = 0
    for (const type of shown) {
      // With a search, the types are open on what matches
      const expanded = query ? true : roleOpen(refsState.toggled, documentation.name, type.name)
      const list = expanded ? refsAnswer(targetsRequest(documentation.name, type.name)) : undefined
      const matches = Array.isArray(list) ? searchTargets(list, query) : undefined
      if (query && matches && !matches.length) continue
      const row = refsRow('refs-type', type.name, matches && query ? `${matches.length} of ${type.count}` : type.count, expanded)
      row.dataset.doc = documentation.name
      row.dataset.role = type.name
      nodes.push(row)
      rows++
      if (!expanded) continue
      if (!matches) {
        if (list) nodes.push(element('div', 'refs-line error', list.error))
        continue
      }
      for (const entry of matches.slice(0, REFS_SHOWN)) {
        const item = element('button', 'refs-item')
        item.type = 'button'
        item.setAttribute('role', 'treeitem')
        item.reference = { inventory: documentation.name, role: type.name, entry }
        // The page of a reference of the project, after its name
        const page = documentation.name ? '' : pageOf(entry.uri)
        item.append(element('span', 'refs-title', entry.display || String(entry.name)),
          element('span', 'refs-name', page && page !== String(entry.name) ? `${entry.name}  ·  ${page}` : String(entry.name)))
        nodes.push(item)
      }
      if (matches.length > REFS_SHOWN)
        nodes.push(element('div', 'refs-line', `${matches.length - REFS_SHOWN} more: search to see them.`))
    }
    if (!rows) nodes.push(element('div', 'refs-line', query ? 'No reference matches.' : 'Nothing of these types.'))
  }
  // What a row says: its kind, where it is in the tree, and its text
  for (const node of nodes) {
    const { inventory, role } = node.reference ?? {}
    node.key = [node.className, node.dataset.doc ?? inventory ?? '', node.dataset.role ?? role ?? '',
      node.getAttribute('aria-expanded') ?? '', node.textContent].join('\u0000')
  }
  keepRows(nodes)
  if (refsList.scrollTop !== top) refsList.scrollTop = top

  refsTypesKnown = orderRoles([...known.values()])
  refsFilter.textContent = filterLabel(refsState.filter)
  refsFilter.classList.toggle('some', refsState.filter.size > 0)
}

// The search waits for the typing to rest: it reads the references of all
// the types that are shown
let refsSearchTimer
refsSearch.addEventListener('input', () => {
  clearTimeout(refsSearchTimer)
  refsSearchTimer = setTimeout(() => renderReferences(0), 180)
})

// The types to show: the ones of the documentations that are open
let refsTypesKnown = []
function renderTypes() {
  const line = (label, checked, className) => {
    const el = element('label', className)
    const box = document.createElement('input')
    box.type = 'checkbox'
    box.checked = checked
    el.append(box, document.createTextNode(label))
    return [el, box]
  }
  const [all, allBox] = line('All types', !refsState.filter.size, 'refs-all')
  allBox.addEventListener('change', () => {
    refsState.filter.clear()
    changedTypes()
  })
  // The ones that were chosen stay, also when their documentation is closed
  const names = orderRoles([...new Set([...refsTypesKnown.map(type => type.name), ...refsState.filter])].map(name => ({ name })))
  refsTypes.replaceChildren(all, ...names.map(({ name }) => {
    const [el, box] = line(name, refsState.filter.has(name))
    box.addEventListener('change', () => {
      if (box.checked) refsState.filter.add(name)
      else refsState.filter.delete(name)
      changedTypes()
    })
    return el
  }))
}
function changedTypes() {
  keepReferences()
  renderTypes()
  renderReferences(0)
}
function showTypes(shown) {
  refsTypes.hidden = !shown
  refsFilter.setAttribute('aria-expanded', String(shown))
  if (shown) renderTypes()
}
refsFilter.addEventListener('click', () => showTypes(refsTypes.hidden))
document.addEventListener('mousedown', ev => {
  if (!refsTypes.hidden && !refsTypes.contains(ev.target) && !refsFilter.contains(ev.target)) showTypes(false)
})
refsTypes.addEventListener('keydown', ev => {
  if (ev.key === 'Escape') {
    showTypes(false)
    refsFilter.focus()
  }
})

// A click writes the role at the caret of the page; the text that is selected
// there, in one block, is its title
refsList.addEventListener('mousedown', ev => ev.preventDefault())
refsList.addEventListener('click', ev => {
  // A documentation or a type opens and closes
  const node = ev.target.closest('.refs-doc, .refs-type')
  if (node) {
    const { doc, role } = node.dataset
    const [set, key] = role === undefined ? [refsState.open, doc] : [refsState.toggled, `${doc}|${role}`]
    if (set.has(key)) set.delete(key)
    else set.add(key)
    keepReferences()
    return renderReferences()
  }
  const reference = ev.target.closest('.refs-item')?.reference
  if (!reference) return
  const { inventory, role, entry } = reference
  const { a, b } = selection()
  const one = a < b && leafAt(state.model, a)?.block === leafAt(state.model, b)?.block
  const selected = one ? state.model.leaves.filter(l => l.kind !== 'soft' && l.e > a && l.s < b)
    .map(l => state.source.slice(Math.max(l.s, a), Math.min(l.e, b))).join(' ') : ''
  if (a < b && !one) return setFileState('Select text in one paragraph, or none, to write a reference')
  hideCard()
  // It is written in the page: the page is shown
  setScreen('editor')
  commit(insertText(state.model, a, b, referenceText(inventory, role, String(entry.name), selected)))
})

// What a reference points to, beside the panel, on the pointer
let refsTimer
refsList.addEventListener('mouseover', ev => {
  const row = ev.target.closest('.refs-item')
  if (row === cardOf) return
  clearTimeout(refsTimer)
  if (cardOf?.classList?.contains('refs-item')) hideCard()
  if (!row) return
  refsTimer = setTimeout(() => {
    if (!row.isConnected || !row.matches(':hover')) return
    const { inventory, role, entry } = row.reference
    showCard(row, { title: entry.display, target: entry.uri }, referenceQuestion(inventory, role, entry.name), () => {
      const rect = row.getBoundingClientRect()
      const pane = document.getElementById('source-pane').getBoundingClientRect()
      const left = pane.left - 8 - card.offsetWidth
      card.style.left = `${left >= 8 ? left : Math.min(rect.left + 24, window.innerWidth - card.offsetWidth - 8)}px`
      const top = left >= 8 ? rect.top : rect.bottom + 4
      card.style.top = `${Math.max(Math.min(top, window.innerHeight - card.offsetHeight - 8), 8)}px`
    })
  }, 350)
})
refsList.addEventListener('mouseleave', () => {
  clearTimeout(refsTimer)
  if (cardOf?.classList?.contains('refs-item')) hideCard()
})
refsList.addEventListener('scroll', () => {
  if (cardOf?.classList?.contains('refs-item')) hideCard()
}, { passive: true })

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
  try {
    if (localStorage.getItem('doctools.center') === 'source') setCentre(true, false)
  } catch { }
  firstVisit()
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
