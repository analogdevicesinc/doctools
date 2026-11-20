// The CodeMirror editors: the source pane, and the code of the code
// directives in the page.

import {
  EditorView, EditorState, keymap, drawSelection, Decoration, StateField, StateEffect, Annotation, Compartment,
  defaultKeymap, indentWithTab, indentUnit, placeholder
} from './vendor/codemirror.js'
import { codeOf, codeTokens, languageOf } from './code.js'

// A change made by the program, not by the user
const outside = Annotation.define()

// The smallest change from one text to another
function change(before, after) {
  let from = 0
  const max = Math.min(before.length, after.length)
  while (from < max && before[from] === after[from]) from++
  let to = before.length
  let end = after.length
  while (to > from && end > from && before[to - 1] === after[end - 1]) {
    to--
    end--
  }
  return { from, to, insert: after.slice(from, end) }
}

// Set the text without telling the listeners
function setText(view, text) {
  const before = view.state.doc.toString()
  if (before !== text) view.dispatch({ changes: change(before, text), annotations: outside.of(true) })
}

// marks: [{ from, to, name, line }], line: the class goes to the whole line
function decorations(marks, length) {
  const ranges = []
  for (const m of marks) {
    if (m.from < 0 || m.to > length || m.from > m.to) continue
    if (m.line) ranges.push(Decoration.line({ class: m.name }).range(m.from))
    else if (m.to > m.from) ranges.push(Decoration.mark({ class: m.name }).range(m.from, m.to))
  }
  return Decoration.set(ranges, true)
}

// Decorations set from outside, and kept in place through the edits until
// they are set again
function markField() {
  const set = StateEffect.define()
  const field = StateField.define({
    create: () => Decoration.none,
    update(value, tr) {
      for (const effect of tr.effects) if (effect.is(set)) return effect.value
      return tr.docChanged ? value.map(tr.changes) : value
    },
    provide: f => EditorView.decorations.from(f)
  })
  return { set, field }
}

// The colours of the code in a language
function highlight(language) {
  const build = state => decorations(codeTokens(state.doc.toString(), language), state.doc.length)
  return StateField.define({
    create: build,
    update: (value, tr) => tr.docChanged ? build(tr.state) : value,
    provide: f => EditorView.decorations.from(f)
  })
}

const historyKeys = ({ undo, redo }) => [
  { key: 'Mod-z', run: () => (undo(), true), preventDefault: true },
  { key: 'Mod-y', run: () => (redo(), true), preventDefault: true },
  { key: 'Mod-Shift-z', run: () => (redo(), true), preventDefault: true }
]

// Whether a position is shown in the scrolled area of the editor
function visible(view, pos) {
  const coords = view.coordsAtPos(pos)
  if (!coords) return false
  const box = view.scrollDOM.getBoundingClientRect()
  return coords.top >= box.top && coords.bottom <= box.bottom
}

// The source pane. on: { change(text), select({ anchor, head }), undo, redo }
export function sourceEditor(parent, on) {
  const marks = markField()
  const view = new EditorView({
    parent,
    state: EditorState.create({
      extensions: [
        keymap.of([...historyKeys(on), indentWithTab, ...defaultKeymap]),
        drawSelection(),
        indentUnit.of('   '),
        marks.field,
        EditorView.contentAttributes.of({ spellcheck: 'false', 'aria-label': 'Source' }),
        EditorView.updateListener.of(update => {
          if (update.transactions.some(tr => tr.annotation(outside))) return
          if (update.docChanged) on.change(update.state.doc.toString(), update.state.selection.main)
          else if (update.selectionSet && update.view.hasFocus) on.select(update.state.selection.main)
        }),
        EditorView.domEventHandlers({ focus: (ev, view) => on.select(view.state.selection.main) })
      ]
    })
  })
  return {
    view,
    setText: text => setText(view, text),
    setMarks: list => view.dispatch({ effects: marks.set.of(decorations(list, view.state.doc.length)) }),
    // Move the caret there, and scroll to it when it is not shown
    select(anchor, head) {
      const length = view.state.doc.length
      anchor = Math.min(anchor, length)
      head = Math.min(head, length)
      const effects = visible(view, head) ? [] : [EditorView.scrollIntoView(head, { y: 'center' })]
      view.dispatch({ selection: { anchor, head }, effects, annotations: outside.of(true) })
    }
  }
}

// The same text, but for the spaces at the end of the lines and the empty
// lines at the end: those of the editor are not in the content
const same = (a, b) => {
  const clean = text => text.split('\n').map(line => line.trimEnd()).join('\n').trimEnd()
  return clean(a) === clean(b)
}

// The code editors of the page, one by code directive, in the order of the
// page: they are kept while the page is rendered again, so they keep their
// caret and their focus.
// on: { change(editor, before, after), select(editor), leave(editor, step), undo, redo }
export class CodeEditors {
  constructor(on) {
    this.on = on
    this.list = new Set()
    this.used = new Set()
  }

  begin() {
    this.used = new Set()
  }

  // The element of the code of a directive. old: the element it had, kept
  // with its editor
  host(model, directive, old) {
    const code = codeOf(model, directive)
    const el = old?.editor && this.list.has(old.editor) ? old : document.createElement('div')
    let editor = el.editor
    if (!editor) {
      editor = el.editor = this.create()
      this.list.add(editor)
      el.className = 'block b-raw code code-editor'
      el.contentEditable = 'false'
      el.dataset.kind = 'raw'
      el.append(editor.view.dom)
      editor.host = el
    }
    this.used.add(editor)
    editor.model = model
    editor.code = code
    const language = languageOf(model, directive)
    if (language !== editor.language) {
      editor.language = language
      editor.view.dispatch({ effects: editor.colours.reconfigure(language ? highlight(language) : []) })
    }
    if (!same(editor.view.state.doc.toString(), code.text)) setText(editor.view, code.text)

    const s = String(code.block?.s ?? directive.headEnd)
    const e = String(code.block?.e ?? directive.headEnd)
    const type = code.block?.type ?? 'content'
    if (el.dataset.type !== type) el.dataset.type = type
    if (el.dataset.s !== s) el.dataset.s = s
    if (el.dataset.e !== e) el.dataset.e = e
    el.block = code.block
    return el
  }

  // The editors of the code that is gone are dropped
  end() {
    for (const editor of this.list) {
      if (this.used.has(editor)) continue
      editor.view.destroy()
      this.list.delete(editor)
    }
  }

  create() {
    const editor = { colours: new Compartment(), language: undefined }
    const at = view => {
      const { head } = view.state.selection.main
      return { line: view.state.doc.lineAt(head), doc: view.state.doc, empty: view.state.selection.main.empty }
    }
    const { on } = this
    editor.view = new EditorView({
      state: EditorState.create({
        extensions: [
          keymap.of([
            ...historyKeys(on),
            { key: 'ArrowUp', run: view => at(view).line.number === 1 && (on.leave(editor, -1), true) },
            { key: 'ArrowDown', run: view => at(view).line.number === at(view).doc.lines && (on.leave(editor, 1), true) },
            { key: 'Backspace', run: view => view.state.doc.length === 0 && (on.leave(editor, -1), true) },
            indentWithTab,
            ...defaultKeymap
          ]),
          drawSelection(),
          placeholder('code'),
          editor.colours.of([]),
          EditorView.contentAttributes.of({ spellcheck: 'false', 'aria-label': 'Code' }),
          EditorView.updateListener.of(update => {
            if (update.transactions.some(tr => tr.annotation(outside))) return
            // After the update: the page is rendered again, with this editor
            if (update.docChanged) {
              const before = update.startState.doc.toString()
              const after = update.state.doc.toString()
              queueMicrotask(() => on.change(editor, before, after))
            } else if (update.selectionSet && update.view.hasFocus) {
              queueMicrotask(() => on.select(editor))
            }
          }),
          EditorView.domEventHandlers({ focus: () => on.select(editor) })
        ]
      })
    })
    return editor
  }

  // The editor of the code that holds a source offset
  at(offset) {
    return [...this.list].find(({ code: { block } }) => block && block.s <= offset && offset <= block.e)
  }

  of(directive) {
    return [...this.list].find(editor => editor.code.directive === directive)
  }
}
