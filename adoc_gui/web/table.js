// Grid and simple tables: the tree-sitter grammar does not parse them, they
// are read here from the lines of the paragraph, and written back aligned.
//
// A table is read as rows of cells, a cell as its lines. Each line is a range
// of the source: [s, e) is what is shown and edited, it includes the padding
// at the end so the caret has room.
//
// Only regular tables are read: no cell that spans columns or rows. Any other
// table is left to the caller, which shows it as source.

const MIN_WIDTH = 3

const GRID_BORDER = /^\+(?:-+\+)+$/
const GRID_RULE = /^\+(?:[-=]+\+)+$/
const SIMPLE_BORDER = /^=+(?: +=+)+$|^=+$/

// The lines of a block of text that starts at 'start': { s, e, text }, without
// the indentation of the block. undefined when a line is not indented enough.
function linesOf(source, start, end) {
  const indent = start - (source.lastIndexOf('\n', start - 1) + 1)
  const lines = []
  let at = start
  for (;;) {
    const newline = source.indexOf('\n', at)
    const e = newline === -1 || newline > end ? end : newline
    lines.push({ s: at, e, text: source.slice(at, e).replace(/[ \t]+$/, '') })
    if (newline === -1 || newline >= end) break
    const next = newline + 1
    if (source.slice(next, next + indent).trim() !== '' || next + indent > end) return undefined
    at = next + indent
  }
  return { lines, indent }
}

const positionsOf = (text, char) => [...text].flatMap((c, i) => c === char ? [i] : [])

function readGrid(lines) {
  const first = lines[0].text
  if (!GRID_BORDER.test(first) || lines.length < 3 || !GRID_BORDER.test(lines[lines.length - 1].text))
    return undefined
  const borders = positionsOf(first, '+')
  const rows = []
  let current
  let headers = 0

  for (const line of lines) {
    if (line.text.length !== first.length) return undefined
    if (line.text[0] === '+') {
      if (!GRID_RULE.test(line.text) || positionsOf(line.text, '+').join() !== borders.join()) return undefined
      const fill = line.text.replace(/\+/g, '')
      if (fill !== fill[0].repeat(fill.length)) return undefined
      if (fill[0] === '=') {
        if (headers || !rows.length) return undefined
        headers = rows.length
      }
      current = undefined
      continue
    }
    if (borders.some(i => line.text[i] !== '|')) return undefined
    if (!current) {
      current = borders.slice(1).map(() => ({ lines: [] }))
      rows.push(current)
    }
    borders.slice(1).forEach((border, column) => {
      const from = borders[column] + 1
      const s = line.text[from] === ' ' ? from + 1 : from
      const e = Math.max(line.text[border - 1] === ' ' ? border - 1 : border, s)
      current[column].lines.push({ s: line.s + s, e: line.s + e })
    })
  }
  return rows.length ? { format: 'grid', rows, headers } : undefined
}

function readSimple(lines) {
  const first = lines[0].text
  if (!SIMPLE_BORDER.test(first) || lines.length < 3 || lines[lines.length - 1].text !== first)
    return undefined
  const columns = [...first.matchAll(/=+/g)].map(m => ({ s: m.index, e: m.index + m[0].length }))
  const gap = columns.length > 1 ? columns[1].s - columns[0].e : 2
  const rows = []
  const hidden = []
  let headers = 0

  for (const line of lines.slice(1, -1)) {
    if (line.text === first) {
      if (headers || !rows.length) return undefined
      headers = rows.length
      continue
    }
    // Underlines of column spans, and text across the columns, are not read
    if (/^[-= ]+$/.test(line.text) || line.text === '') return undefined
    for (let c = 0; c + 1 < columns.length; c++)
      if (line.text.slice(columns[c].e, columns[c + 1].s).trim() !== '') return undefined

    const continuation = rows.length > 0 && line.text.slice(0, columns[0].e).trim() === ''
    if (!continuation) rows.push(columns.map(() => ({ lines: [] })))
    const row = rows[rows.length - 1]
    const length = line.e - line.s
    columns.forEach((column, c) => {
      const last = c === columns.length - 1
      let s = Math.min(column.s, length)
      const e = last ? Math.max(length, s) : Math.min(column.e, length)
      // '\' keeps a row whose first cell is empty
      if (c === 0 && !continuation && line.text.slice(s, e).trim() === '\\') {
        hidden.push([line.s + s, line.s + s + 1])
        s = Math.min(s + 2, e)
      }
      row[c].lines.push({ s: line.s + s, e: line.s + Math.max(e, s) })
    })
  }
  return rows.length ? { format: 'simple', rows, headers, gap, hidden } : undefined
}

// Read the table in source.slice(start, end):
// { format, rows: [[{ lines: [{ s, e }] }]], headers, indent, hidden }
export function readTable(source, start, end) {
  const block = linesOf(source, start, end)
  if (!block) return undefined
  const table = readGrid(block.lines) ?? readSimple(block.lines)
  if (table) {
    table.indent = block.indent
    table.hidden ??= []
  }
  return table
}

// The text of a table, from the text of the lines of its cells.
// rows: [[[line, ...], ...], ...]. Returns { text, offsets } where
// offsets[row][column][line] is where that line starts in the text.
export function writeTable(format, rows, { headers = 0, indent = 0, gap = 2 } = {}) {
  const columns = Math.max(...rows.map(row => row.length))
  const widths = Array.from({ length: columns }, (_, c) =>
    Math.max(MIN_WIDTH, ...rows.flatMap(row => (row[c] ?? ['']).map(line => line.length))))
  const prefix = ' '.repeat(indent)
  const out = []
  const offsets = []
  let length = 0
  const push = line => {
    const text = (out.length ? prefix : '') + line
    out.push(text)
    length += text.length + 1
  }
  const lineStart = () => length + (out.length ? indent : 0)

  if (format === 'grid') {
    const rule = char => '+' + widths.map(w => char.repeat(w + 2)).join('+') + '+'
    push(rule('-'))
    rows.forEach((row, r) => {
      const height = Math.max(1, ...row.map(cell => cell.length))
      offsets.push(row.map(() => []))
      for (let i = 0; i < height; i++) {
        const start = lineStart()
        let column = 0
        const cells = widths.map((w, c) => {
          offsets[r][c]?.push(start + column + 2)
          column += w + 3
          return ` ${(row[c]?.[i] ?? '').padEnd(w)} `
        })
        push('|' + cells.join('|') + '|')
      }
      push(rule(r + 1 === headers ? '=' : '-'))
    })
  } else {
    const space = ' '.repeat(gap)
    const border = widths.map(w => '='.repeat(w)).join(space)
    push(border)
    rows.forEach((row, r) => {
      const height = Math.max(1, ...row.map(cell => cell.length))
      offsets.push(row.map(() => []))
      for (let i = 0; i < height; i++) {
        const start = lineStart()
        let column = 0
        const cells = widths.map((w, c) => {
          let text = row[c]?.[i] ?? ''
          // An empty first cell would make the line a part of the row above
          const escape = c === 0 && i === 0 && text.trim() === '' ? '\\ ' : ''
          offsets[r][c]?.push(start + column + escape.length)
          column += w + gap
          return (escape + text).padEnd(w)
        })
        const line = cells.join(space).replace(/ +$/, '')
        push(line === '\\' ? '\\ ' : line)
      }
      if (r + 1 === headers) push(border)
    })
    push(border)
  }
  return { text: out.join('\n'), offsets }
}
