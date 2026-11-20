// The code of the code directives (code, code-block, sourcecode, shell), as
// the text that a code editor shows: the lines of the content without the
// indentation they share. Maps the positions of that text to the source and
// back, turns its edits into edits of the source, and colours code and source.

import { StringStream, modes } from './vendor/codemirror.js'
import { openContent } from './ops.js'

export const CODE_DIRECTIVES = new Set(['code', 'code-block', 'sourcecode', 'shell'])

// The names of a language in a code block, to the mode that colours it
const ALIASES = {
  bash: 'shell', sh: 'shell', zsh: 'shell', console: 'shell', shell: 'shell', 'shell-session': 'shell',
  py: 'python', python3: 'python', py3: 'python', ipython: 'python', pycon: 'python',
  h: 'c', 'c++': 'cpp', cxx: 'cpp', hpp: 'cpp',
  js: 'javascript', ts: 'typescript', yml: 'yaml', jsonc: 'json',
  sv: 'verilog', systemverilog: 'verilog', v: 'verilog',
  ini: 'properties', cfg: 'properties', conf: 'properties', kconfig: 'properties',
  patch: 'diff', docker: 'dockerfile', containerfile: 'dockerfile', html5: 'html', svg: 'xml', rs: 'rust'
}

const textOf = (model, block) => (block?.inlines ?? []).map(l => model.source.slice(l.s, l.e)).join('')

// The mode name of the code of a directive, undefined when it is not coloured
export function languageOf(model, directive) {
  if (directive.name === 'shell') return 'shell'
  const caption = directive.children.find(c => c.kind === 'caption')
  const name = caption?.empty ? '' : textOf(model, caption).trim().toLowerCase()
  const mode = ALIASES[name] ?? name
  return Object.hasOwn(modes, mode) ? mode : undefined
}

const rowOf = (model, offset) => {
  const starts = model.lineStarts
  let lo = 0, hi = starts.length - 1
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1
    if (starts[mid] <= offset) lo = mid
    else hi = mid - 1
  }
  return lo
}
const lineEndOf = (model, row) =>
  row + 1 < model.lineStarts.length ? model.lineStarts[row + 1] - 1 : model.source.length

// The code of a directive: { directive, block, row, indent, text }. row: the
// line of the source of the first line of the text; block: undefined when the
// directive has no content yet.
export function codeOf(model, directive) {
  const block = directive.children.find(c => c.kind === 'raw' && c.code)
  const { source } = model
  if (!block) {
    const column = directive.s - model.lineStarts[rowOf(model, directive.s)]
    return { directive, block, row: undefined, indent: column + 3, text: '' }
  }
  const lines = block.inlines.filter(l => l.kind === 'raw').map(l => source.slice(l.s, l.e))
  return { directive, block, row: rowOf(model, block.s), indent: block.indent, text: lines.join('\n') }
}

// The source offset of a line and column of the text
export function toSource(model, code, line, column) {
  const row = Math.min(code.row + line, model.lineStarts.length - 1)
  const start = model.lineStarts[row]
  const end = lineEndOf(model, row)
  let at = start
  while (at < end && at - start < code.indent && (model.source[at] === ' ' || model.source[at] === '\t')) at++
  return Math.min(at + column, end)
}

// The line and column of the text at a source offset, undefined when the
// offset is not in the code
export function fromSource(model, code, offset) {
  if (!code.block || offset < code.block.s || offset > code.block.e) return undefined
  const row = rowOf(model, offset)
  const line = row - code.row
  const start = toSource(model, code, line, 0)
  return { line, column: Math.max(offset - start, 0) }
}

// The smallest change from one text to another: { from, to, insert }
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
  let insert = after.slice(from, end)
  let removed = before.slice(from, to)
  // Whole lines go from the end of the line before, not from the start of a
  // line: there the indentation of the source comes first
  const ends = text => !text || text.endsWith('\n')
  if (from > 0 && before[from - 1] === '\n' && ends(insert) && ends(removed) && (insert || removed)) {
    from--
    to--
    insert = insert && '\n' + insert.slice(0, -1)
    removed = removed && '\n' + removed.slice(0, -1)
  }
  return { from, to, insert }
}

const positionOf = (text, offset) => {
  const before = text.slice(0, offset).split('\n')
  return { line: before.length - 1, column: before[before.length - 1].length }
}

// The edit of the source that turns the text of the code from before to
// after, undefined when nothing changes
export function codeEdit(model, code, before, after) {
  if (before === after) return undefined
  const indent = ' '.repeat(code.indent)
  // Each new line is indented as the code, the empty ones are left empty
  const indented = (text, first) => text.split('\n')
    .map((line, i) => (i === 0 && !first) || !line ? line : indent + line).join('\n')

  if (!code.block) {
    if (!after.trim()) return undefined
    return openContent(model, code.directive, indented(after, false))
  }
  // Nothing left: the content goes
  if (!after.trim()) {
    const end = toSource(model, code, positionOf(before, before.length).line, Infinity)
    return { start: code.directive.headEnd, end, text: '', caret: code.directive.headEnd }
  }

  const { from, to, insert } = change(before, after)
  const a = positionOf(before, from)
  const b = positionOf(before, to)
  const start = toSource(model, code, a.line, a.column)
  const end = toSource(model, code, b.line, b.column)
  // Text written on an empty line of the source is indented first
  const row = model.lineStarts[rowOf(model, start)]
  const missing = Math.max(code.indent - (start - row), 0)
  const first = insert.split('\n')[0]
  const pad = first && missing && !model.source.slice(row, start).trim() ? ' '.repeat(missing) : ''
  const text = pad + indented(insert, false)
  return { start, end, text, caret: start + text.length }
}

// Colours ------------------------------------------------------------------------

// The coloured pieces of a code: [{ from, to, name }], name: the classes
export function codeTokens(text, language) {
  const mode = modes[language]
  if (!mode) return []
  const state = mode.startState ? mode.startState(2) : {}
  const out = []
  let at = 0
  for (const line of text.split('\n')) {
    if (!line) {
      mode.blankLine?.(state, 2)
    } else {
      const stream = new StringStream(line, 4, 2)
      let steps = 0
      while (!stream.eol() && steps++ < 10000) {
        let style
        try {
          style = mode.token(stream, state)
        } catch {
          stream.skipToEnd()
        }
        if (stream.pos === stream.start) stream.next()
        if (style) {
          const name = style.split(' ').map(t => `t-${t}`).join(' ')
          const last = out[out.length - 1]
          if (last?.name === name && last.to === at + stream.start) last.to = at + stream.pos
          else out.push({ from: at + stream.start, to: at + stream.pos, name })
        }
        stream.start = stream.pos
      }
    }
    at += line.length + 1
  }
  return out
}

const LEAVES = {
  strong: 't-strong', emphasis: 't-emphasis', literal: 't-literal', role: 't-role', link: 't-link',
  name: 't-field', label: 't-label'
}

// The coloured pieces of a source, from its model: [{ from, to, name }]
export function sourceMarks(model) {
  const { source } = model
  const marks = model.hidden.map(([from, to]) => ({ from, to, name: 't-markup' }))
  const walk = block => {
    if (block.kind === 'directive') {
      const head = `.. ${block.name}::`
      if (source.startsWith(head, block.s))
        marks.push({ from: block.s, to: block.s + head.length, name: 't-directive' })
      if (CODE_DIRECTIVES.has(block.name)) {
        const code = codeOf(model, block)
        const language = languageOf(model, block)
        if (code.block && language) {
          for (const token of codeTokens(code.text, language)) {
            const a = positionOf(code.text, token.from)
            const b = positionOf(code.text, token.to)
            marks.push({
              from: toSource(model, code, a.line, a.column), to: toSource(model, code, b.line, b.column), name: token.name
            })
          }
        }
      }
    }
    if (block.kind === 'raw' && block.type === 'comment')
      marks.push({ from: block.s, to: block.e, name: 't-comment' })
    for (const leaf of block.inlines ?? []) {
      const name = block.kind === 'heading' ? 't-heading' : block.kind === 'caption' ? 't-argument' : LEAVES[leaf.kind]
      if (name && leaf.e > leaf.s) marks.push({ from: leaf.s, to: leaf.e, name })
    }
    for (const child of block.children ?? []) walk(child)
  }
  walk(model.root)
  return marks.filter(m => m.to > m.from).sort((x, y) => x.from - y.from || y.to - x.to)
}
