export type Syntax = 'rst' | 'myst'

export interface Span {
  start: number
  end: number
}

export interface FormatResult {
  range: Span
  text: string
  selection: Span
}

export type InlineKind = 'bold' | 'italic' | 'code' | 'subscript' | 'superscript'
export type ListKind = 'bullet' | 'numbered'

export const HEADING_CHARS = ['=', '-', '~', '^', '"']
export const ADMONITIONS = ['note', 'tip', 'important', 'warning', 'caution', 'attention']
export const CODE_LANGUAGES = ['bash', 'python', 'c', 'cpp', 'yaml', 'json', 'rst', 'text']

const INLINE: Record<Syntax, Record<InlineKind, [string, string]>> = {
  rst: {
    bold: ['**', '**'],
    italic: ['*', '*'],
    code: ['``', '``'],
    subscript: [':sub:`', '`'],
    superscript: [':sup:`', '`']
  },
  myst: {
    bold: ['**', '**'],
    italic: ['*', '*'],
    code: ['`', '`'],
    subscript: ['{sub}`', '`'],
    superscript: ['{sup}`', '`']
  }
}

const INDENT = '   '
const WORD = /[\p{L}\p{N}_'-]/u
const UNDERLINE = /^([=\-~^"'`#*+_.:])\1{2,}\s*$/
const BULLET = /^(\s*)[*+-]\s+/
const NUMBERED = /^(\s*)(?:#\.|\d+[.)])\s+/

const order = (span: Span): Span =>
  span.start <= span.end ? span : { start: span.end, end: span.start }

function wordAt(source: string, offset: number): Span {
  let start = offset
  let end = offset
  while (start > 0 && WORD.test(source[start - 1])) start--
  while (end < source.length && WORD.test(source[end])) end++
  return { start, end }
}

function trimSpan(source: string, span: Span): Span {
  let { start, end } = span
  while (start < end && /\s/.test(source[start])) start++
  while (end > start && /\s/.test(source[end - 1])) end--
  return { start, end }
}

function lineBlock(source: string, span: Span): Span {
  const start = source.lastIndexOf('\n', span.start - 1) + 1
  const last = span.end > span.start && source[span.end - 1] === '\n' ? span.end - 1 : span.end
  const next = source.indexOf('\n', last)
  return { start, end: next === -1 ? source.length : next }
}

function lineBefore(source: string, offset: number): Span | undefined {
  if (offset === 0)
    return undefined
  return lineBlock(source, { start: offset - 1, end: offset - 1 })
}

function lineAfter(source: string, offset: number): Span | undefined {
  if (offset >= source.length)
    return undefined
  return lineBlock(source, { start: offset + 1, end: offset + 1 })
}

const textOf = (source: string, span: Span | undefined) =>
  span ? source.slice(span.start, span.end) : ''

function isDoubled(source: string, span: Span, open: string, close: string): boolean {
  if (open !== '*' && open !== '`')
    return false
  return source[span.start - open.length - 1] === open || source[span.end + close.length] === close
}

export function toggleInline(source: string, selection: Span, syntax: Syntax, kind: InlineKind): FormatResult {
  const [open, close] = INLINE[syntax][kind]
  let span = order(selection)
  if (span.start === span.end)
    span = wordAt(source, span.start)
  span = trimSpan(source, span)
  const text = source.slice(span.start, span.end)

  if (text.length === 0) {
    const cursor = span.start + open.length
    return { range: span, text: open + close, selection: { start: cursor, end: cursor } }
  }

  if (text.length > open.length + close.length && text.startsWith(open) && text.endsWith(close) &&
      !(open === '*' && text.startsWith('**'))) {
    const inner = text.slice(open.length, text.length - close.length)
    return { range: span, text: inner, selection: { start: span.start, end: span.start + inner.length } }
  }

  if (source.slice(span.start - open.length, span.start) === open &&
      source.slice(span.end, span.end + close.length) === close &&
      !isDoubled(source, span, open, close)) {
    const range = { start: span.start - open.length, end: span.end + close.length }
    return { range, text, selection: { start: range.start, end: range.start + text.length } }
  }

  const start = span.start + open.length
  return { range: span, text: open + text + close, selection: { start, end: start + text.length } }
}

export function setHeading(source: string, selection: Span, syntax: Syntax, level: number): FormatResult {
  const cursor = order(selection).start
  let line = lineBlock(source, { start: cursor, end: cursor })

  if (syntax === 'myst') {
    const title = textOf(source, line).replace(/^\s*#{1,6}\s*/, '').trim() || 'Heading'
    const prefix = level > 0 ? `${'#'.repeat(level)} ` : ''
    return {
      range: line,
      text: prefix + title,
      selection: { start: line.start + prefix.length, end: line.start + prefix.length + title.length }
    }
  }

  const previous = lineBefore(source, line.start)
  if (UNDERLINE.test(textOf(source, line)) && previous && textOf(source, previous).trim() &&
      !UNDERLINE.test(textOf(source, previous)))
    line = previous

  const range = { ...line }
  const under = lineAfter(source, line.end)
  if (under && UNDERLINE.test(textOf(source, under))) {
    range.end = under.end
    const over = lineBefore(source, line.start)
    if (over && textOf(source, over).trim() === textOf(source, under).trim())
      range.start = over.start
  }

  const title = textOf(source, line).trim() || 'Heading'
  const char = HEADING_CHARS[Math.min(level, HEADING_CHARS.length) - 1]
  const text = level > 0 ? `${title}\n${char.repeat(Math.max(title.length, 3))}` : title
  return { range, text, selection: { start: range.start, end: range.start + title.length } }
}

function mapLines(source: string, selection: Span, map: (lines: string[]) => string[]): FormatResult {
  const range = lineBlock(source, order(selection))
  const text = map(source.slice(range.start, range.end).split('\n')).join('\n')
  return { range, text, selection: { start: range.start, end: range.start + text.length } }
}

export function toggleList(source: string, selection: Span, syntax: Syntax, kind: ListKind): FormatResult {
  const marker = kind === 'bullet' ? '* ' : syntax === 'rst' ? '#. ' : '1. '
  const own = kind === 'bullet' ? BULLET : NUMBERED
  const other = kind === 'bullet' ? NUMBERED : BULLET

  return mapLines(source, selection, lines => {
    const filled = lines.filter(l => l.trim())
    if (filled.length === 0)
      return [marker]
    if (filled.every(l => own.test(l)))
      return lines.map(l => l.replace(own, '$1'))
    return lines.map(l => {
      if (!l.trim() || own.test(l))
        return l
      const bare = l.replace(other, '$1')
      const indent = bare.match(/^\s*/)![0]
      return indent + marker + bare.slice(indent.length)
    })
  })
}

export function toggleQuote(source: string, selection: Span, syntax: Syntax): FormatResult {
  const prefix = syntax === 'rst' ? INDENT : '> '
  const quoted = syntax === 'rst' ? /^ {3}/ : /^>\s?/

  return mapLines(source, selection, lines => {
    const filled = lines.filter(l => l.trim())
    if (filled.length > 0 && filled.every(l => quoted.test(l)))
      return lines.map(l => l.replace(quoted, ''))
    return lines.map(l => l.trim() || lines.length === 1 ? prefix + l : l)
  })
}

export function insertLink(source: string, selection: Span, syntax: Syntax, url: string): FormatResult {
  let span = order(selection)
  if (span.start === span.end)
    span = wordAt(source, span.start)
  span = trimSpan(source, span)
  const label = source.slice(span.start, span.end) || url
  const text = syntax === 'rst' ? `\`${label} <${url}>\`__` : `[${label}](${url})`
  const start = span.start + 1
  return { range: span, text, selection: { start, end: start + label.length } }
}

export function insertRole(source: string, selection: Span, syntax: Syntax, role: string): FormatResult {
  const span = trimSpan(source, order(selection))
  const title = source.slice(span.start, span.end)
  const open = syntax === 'rst' ? `:${role}:\`` : `{${role}}\``
  const text = title ? `${open}${title} <` : open
  const cursor = span.start + text.length
  return { range: span, text, selection: { start: cursor, end: cursor } }
}

function block(source: string, range: Span, body: string, select?: [number, number]): FormatResult {
  const before = lineBefore(source, range.start)
  const after = lineAfter(source, range.end)
  const head = before && textOf(source, before).trim() ? '\n' : ''
  const tail = after && textOf(source, after).trim() ? '\n' : ''
  const start = range.start + head.length
  const selection = select
    ? { start: start + select[0], end: start + select[1] }
    : { start: start + body.length, end: start + body.length }
  return { range, text: head + body + tail, selection }
}

function insertBlock(source: string, selection: Span, body: string, select?: [number, number]): FormatResult {
  const line = lineBlock(source, { start: order(selection).end, end: order(selection).end })
  if (!textOf(source, line).trim())
    return block(source, line, body, select)

  const at = { start: line.end, end: line.end }
  const after = lineAfter(source, line.end)
  const tail = after && textOf(source, after).trim() ? '\n' : ''
  const start = at.start + 2
  const cursor = select
    ? { start: start + select[0], end: start + select[1] }
    : { start: start + body.length, end: start + body.length }
  return { range: at, text: `\n\n${body}${tail}`, selection: cursor }
}

function wrapBlock(
  source: string, selection: Span, syntax: Syntax, rst: string, myst: string, placeholder: string
): FormatResult {
  const range = lineBlock(source, order(selection))
  const lines = source.slice(range.start, range.end).split('\n')
  const empty = lines.every(l => !l.trim())
  const content = empty ? [placeholder] : lines

  if (syntax === 'myst') {
    const fence = content.some(l => l.includes('```')) ? '````' : '```'
    const head = `${fence}${myst}\n`
    const body = content.join('\n')
    return block(source, range, `${head}${body}\n${fence}`,
      empty ? [head.length, head.length + body.length] : undefined)
  }

  const head = `${rst}\n\n`
  const body = content.map(l => l.trim() ? INDENT + l : l).join('\n')
  return block(source, range, head + body,
    empty ? [head.length + INDENT.length, head.length + body.length] : undefined)
}

export function wrapCode(source: string, selection: Span, syntax: Syntax, language: string): FormatResult {
  return wrapBlock(source, selection, syntax, `.. code-block:: ${language}`.trimEnd(), language, 'code')
}

export function wrapAdmonition(source: string, selection: Span, syntax: Syntax, kind: string): FormatResult {
  return wrapBlock(source, selection, syntax, `.. ${kind}::`, `{${kind}}`, 'Text')
}

export function insertImage(source: string, selection: Span, syntax: Syntax, path: string): FormatResult {
  return insertBlock(source, selection, syntax === 'rst' ? `.. image:: ${path}` : `![](${path})`)
}

export function insertRule(source: string, selection: Span, syntax: Syntax): FormatResult {
  return insertBlock(source, selection, syntax === 'rst' ? '----' : '---')
}

export function insertTable(
  source: string, selection: Span, syntax: Syntax, rows: number, columns: number
): FormatResult {
  const headers = Array.from({ length: columns }, (_, i) => `Header ${i + 1}`)
  const first: [number, number] = [0, 0]
  let body: string

  if (syntax === 'rst') {
    const row = (cells: string[]) =>
      cells.map((cell, i) => `${INDENT}${i === 0 ? '* -' : '  -'}${cell ? ` ${cell}` : ''}`).join('\n')
    const head = `.. list-table::\n${INDENT}:header-rows: 1\n\n`
    const empty = Array.from({ length: columns }, () => '')
    body = head + [row(headers), ...Array.from({ length: rows }, () => row(empty))].join('\n')
    first[0] = head.length + INDENT.length + '* - '.length
  } else {
    const row = (cells: string[]) => `| ${cells.join(' | ')} |`
    const blank = headers.map(h => ' '.repeat(h.length))
    body = [row(headers), row(headers.map(h => '-'.repeat(h.length))),
      ...Array.from({ length: rows }, () => row(blank))].join('\n')
    first[0] = 2
  }
  first[1] = first[0] + headers[0].length
  return insertBlock(source, selection, body, first)
}

export function parseTableSize(value: string): { rows: number; columns: number } | undefined {
  const match = value.trim().match(/^(\d+)\s*[xX*,\s]\s*(\d+)$/)
  if (!match)
    return undefined
  const rows = Number(match[1])
  const columns = Number(match[2])
  if (rows < 1 || columns < 1 || rows > 50 || columns > 20)
    return undefined
  return { rows, columns }
}
