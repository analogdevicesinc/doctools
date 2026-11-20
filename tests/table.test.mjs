import { test } from 'node:test'
import assert from 'node:assert/strict'
import { modelOf, outline } from './helper.mjs'
import { readTable, writeTable } from '../adoc_gui/web/table.js'
import { insertText, deleteBackward, deleteForward, insertParagraph, toggleInline, tableStep, applyEdit } from '../adoc_gui/web/ops.js'

const GRID = [
  '+-----+-------+',
  '| A   | B     |',
  '+=====+=======+',
  '| one | two   |',
  '+-----+-------+',
  '| x   | *y* z |',
  '+-----+-------+',
  ''
].join('\n')

const SIMPLE = ['===  ===', 'A    B', '===  ===', 'one  two', 'x    y', '===  ===', ''].join('\n')

const LIST = [
  '.. list-table:: Title',
  '   :header-rows: 1',
  '',
  '   * - A',
  '     - B',
  '   * - one',
  '     - **two**',
  ''
].join('\n')

const findTable = block => block.kind === 'table' ? block : (block.children ?? []).map(findTable).find(Boolean)

const cells = model => findTable(model.root).children.map(row => row.children.map(cell =>
  model.leaves.filter(l => {
    for (let b = l.block; b; b = b.parent) if (b === cell) return true
    return false
  }).map(l => model.source.slice(l.s, l.e).trim()).join('')))

// Offset of a text in the source
const pos = (source, text, shift = 0) => source.indexOf(text) + shift

// Run an operation, the result has '¦' at the caret, or '«' and '»' around
// the selection. The source is returned as it is when nothing is done.
function run(source, a, b, op, ...args) {
  const edit = op(modelOf(source), a, b, ...args)
  if (!edit) return source
  const out = applyEdit(source, edit)
  if (edit.anchor !== undefined && edit.anchor !== edit.caret)
    return out.slice(0, edit.anchor) + '«' + out.slice(edit.anchor, edit.caret) + '»' + out.slice(edit.caret)
  return out.slice(0, edit.caret) + '¦' + out.slice(edit.caret)
}

const type = (source, offset, text) => run(source, offset, offset, insertText, text)
const lines = (...all) => all.join('\n') + '\n'

test('grid tables are read', () => {
  const model = modelOf(GRID)
  assert.equal(outline(model.root),
    'document(table(row(cell(line) cell(line)) row(cell(line) cell(line)) row(cell(line) cell(line))))')
  assert.deepEqual(cells(model), [['A', 'B'], ['one', 'two'], ['x', 'yz']])
  const table = model.root.children[0]
  assert.equal(table.format, 'grid')
  assert.deepEqual(table.children.map(r => r.header), [true, false, false])
  assert.ok(model.leaves.some(l => l.kind === 'emphasis' && model.source.slice(l.s, l.e) === 'y'))
})

test('simple tables are read', () => {
  const model = modelOf(SIMPLE)
  assert.deepEqual(cells(model), [['A', 'B'], ['one', 'two'], ['x', 'y']])
  assert.equal(model.root.children[0].format, 'simple')
  assert.deepEqual(model.root.children[0].children.map(r => r.header), [true, false, false])
})

test('list tables are read', () => {
  const model = modelOf(LIST)
  assert.equal(outline(model.root),
    'document(directive:list-table(caption options(option:header-rows) ' +
    'table(row(cell(paragraph) cell(paragraph)) row(cell(paragraph) cell(paragraph)))))')
  assert.deepEqual(cells(model), [['A', 'B'], ['one', 'two']])
  assert.deepEqual(findTable(model.root).children.map(r => r.header), [true, false])
})

test('cells with several lines and tables inside other blocks', () => {
  const source = '* item\n\n  +-----+-----+\n  | a   | b   |\n  | a2  |     |\n  +-----+-----+\n'
  const model = modelOf(source)
  assert.equal(outline(model.root), 'document(list(item(paragraph table(row(cell(line line) cell(line line))))))')
  assert.deepEqual(cells(model), [['aa2', 'b']])
  const at = pos(source, 'a2', 2)
  assert.equal(type(source, at, '345'),
    '* item\n\n  +-------+-----+\n  | a     | b   |\n  | a2345¦ |     |\n  +-------+-----+\n')
})

test('tables with spans are shown as source', () => {
  for (const source of [
    '+-----+-----+\n| a         |\n+-----+-----+\n| b   | c   |\n+-----+-----+\n',
    '=====  =====\nA      B\n------------\nspan\n=====  =====\n',
    '===  ===\ntoo long\n===  ===\n'
  ]) {
    const model = modelOf(source)
    assert.equal(outline(model.root), 'document(raw)')
    assert.equal(model.source.slice(model.leaves[0].s, model.leaves[0].e), source.trimEnd())
  }
})

test('a written table is read back the same', () => {
  const rows = [[['A'], ['B']], [['one'], ['two', 'more']], [[''], ['y']]]
  for (const format of ['grid', 'simple']) {
    const { text, offsets } = writeTable(format, rows, { headers: 1, indent: 0 })
    const read = readTable(text, 0, text.length)
    assert.equal(read.format, format)
    assert.equal(read.headers, 1)
    const texts = read.rows.map(r => r.map(c => c.lines.map(l => text.slice(l.s, l.e).trim())))
    assert.deepEqual(texts, [[['A'], ['B']], [['one', ''], ['two', 'more']], [[''], ['y']]], text)
    assert.equal(text.slice(offsets[1][1][1], offsets[1][1][1] + 4), 'more')
    assert.equal(text.slice(offsets[2][1][0], offsets[2][1][0] + 1), 'y')
  }
})

test('typing in a cell keeps the grid aligned', () => {
  assert.equal(type(GRID, pos(GRID, 'one', 3), ' and more'), lines(
    '+--------------+-------+',
    '| A            | B     |',
    '+==============+=======+',
    '| one and more¦ | two   |',
    '+--------------+-------+',
    '| x            | *y* z |',
    '+--------------+-------+'))
  assert.equal(type(GRID, pos(GRID, 'two', 3), ' '), GRID.replace('two   |', 'two ¦  |'))
  assert.equal(type(GRID, pos(GRID, 'x ', 2), 'q'), GRID.replace('| x   |', '| x q¦ |'))
  // In an empty cell the text starts at the left, wherever the caret was
  const empty = GRID.replace('two  ', '     ')
  assert.equal(type(empty, pos(empty, '| one |', 10), 'n'), empty.replace('| one |      ', '| one | n¦    '))
})

test('typing in a cell keeps the simple table aligned', () => {
  assert.equal(type(SIMPLE, pos(SIMPLE, 'one', 3), ' more'),
    lines('========  ===', 'A         B', '========  ===', 'one more¦  two', 'x         y', '========  ==='))
  assert.equal(type(SIMPLE, pos(SIMPLE, 'two', 3), 'four'),
    lines('===  =======', 'A    B', '===  =======', 'one  twofour¦', 'x    y', '===  ======='))
})

test('an emptied first cell of a simple table keeps its row', () => {
  const source = lines('===  ===', 'a    b', 'c    d', '===  ===')
  const at = pos(source, 'c', 1)
  const emptied = run(source, at, at, deleteBackward)
  assert.equal(emptied, lines('===  ===', 'a    b', '\\ ¦   d', '===  ==='))
  const plain = emptied.replace('¦', '')
  assert.deepEqual(cells(modelOf(plain)), [['a', 'b'], ['', 'd']])
  assert.equal(type(plain, emptied.indexOf('¦'), 'z'), lines('===  ===', 'a    b', 'z¦    d', '===  ==='))
})

test('deleting in a cell shrinks the table, cells are not joined', () => {
  const wide = GRID.replace('two   |', 'twoooo|')
  let at = pos(wide, 'twoooo', 6)
  assert.equal(run(wide, at, at, deleteBackward), wide.replace('twoooo|', 'twooo¦ |'))
  const widest = lines('+--------+', '| abcdef |', '+--------+', '| x      |', '+--------+')
  at = pos(widest, 'abcdef', 6)
  assert.equal(run(widest, at, at, deleteBackward), lines('+-------+', '| abcde¦ |', '+-------+', '| x     |', '+-------+'))
  at = pos(GRID, 'two')
  assert.equal(run(GRID, at, at, deleteBackward), GRID)
  at = pos(GRID, 'one', 5)
  assert.equal(run(GRID, at, at, deleteForward), GRID)
  at = pos(GRID, 'one', 1)
  assert.equal(run(GRID, at, at, deleteForward), GRID.replace('| one |', '| o¦e  |'))
  at = pos(LIST, 'one')
  assert.equal(run(LIST, at, at, deleteBackward), LIST)
  at = pos(SIMPLE, 'two')
  assert.equal(run(SIMPLE, at, at, deleteBackward), SIMPLE)
})

test('a selection across cells is not edited', () => {
  const a = pos(GRID, 'one')
  const b = pos(GRID, 'two', 2)
  assert.equal(run(GRID, a, b, deleteBackward), GRID)
  assert.equal(run(GRID, a, b, insertText, 'x'), GRID)
  assert.equal(run(GRID, 0, GRID.length, deleteBackward), '¦')
})

test('bold in a cell', () => {
  const a = pos(GRID, 'two')
  assert.equal(run(GRID, a, a + 3, toggleInline, 'bold'), lines(
    '+-----+---------+',
    '| A   | B       |',
    '+=====+=========+',
    '| one | **«two»** |',
    '+-----+---------+',
    '| x   | *y* z   |',
    '+-----+---------+'))
  const bold = GRID.replace('two   |', '**two** |').replace(/-------\+\n/g, '---------+\n')
    .replace('=======+', '=========+').replace('B     |', 'B       |').replace('*y* z |', '*y* z   |')
  const b = pos(bold, 'two')
  assert.equal(run(bold, b, b + 3, toggleInline, 'bold'), GRID.replace('two', '«two»'))
})

test('pasted lines stay in the cell', () => {
  assert.equal(type(GRID, pos(GRID, 'x ', 1), ' a\n  b'), GRID.replace('| x   |', '| x a b¦ |')
    .replace(/\+-----\+/g, '+-------+').replace('+=====+', '+=======+').replace('| A   |', '| A     |').replace('| one |', '| one   |'))
})

test('enter adds a row', () => {
  let at = pos(GRID, 'one', 1)
  assert.equal(run(GRID, at, at, insertParagraph), lines(
    '+-----+-------+', '| A   | B     |', '+=====+=======+', '| one | two   |', '+-----+-------+',
    '| ¦    |       |', '+-----+-------+', '| x   | *y* z |', '+-----+-------+'))
  at = pos(SIMPLE, 'x', 1)
  assert.equal(run(SIMPLE, at, at, insertParagraph),
    lines('===  ===', 'A    B', '===  ===', 'one  two', 'x    y', '\\ ¦', '===  ==='))
  at = pos(LIST, 'one', 1)
  assert.equal(run(LIST, at, at, insertParagraph), LIST + '   * - ¦\n     - \n')
})

test('backspace in an empty row removes it', () => {
  for (const source of [GRID, SIMPLE, LIST]) {
    const at = pos(source, 'one', 1)
    const added = run(source, at, at, insertParagraph)
    const caret = added.indexOf('¦')
    const removed = run(added.replace('¦', ''), caret, caret, deleteBackward)
    assert.equal(removed.replace('¦', ''), source, removed)
    assert.ok(/two\**¦/.test(removed), removed)
  }
})

test('tab goes to the next cell and adds a row after the last', () => {
  const step = (source, offset, dir) => tableStep(modelOf(source), offset, dir)
  assert.equal(step(GRID, pos(GRID, 'one', 1), 1).caret, pos(GRID, 'two'))
  assert.equal(step(GRID, pos(GRID, 'two', 1), -1).caret, pos(GRID, 'one'))
  assert.equal(step(LIST, pos(LIST, 'A'), 1).caret, pos(LIST, 'B'))
  assert.equal(step('text\n', 2, 1), undefined)
  const last = step(GRID, pos(GRID, '*y*', 1), 1)
  const after = applyEdit(GRID, last)
  assert.equal(after.split('\n').length, GRID.split('\n').length + 2)
  assert.equal(after.slice(last.caret - 2, last.caret + 4), '|     ')
})

test('tables lose nothing', () => {
  for (const source of [GRID, SIMPLE, LIST, '+--+\n| |\n', '=== ===\n', '.. list-table::\n\n   * - a\n   * b\n']) {
    const model = modelOf(source)
    const covered = new Uint8Array(source.length)
    for (const leaf of model.leaves) covered.fill(1, leaf.s, leaf.e)
    for (const [s, e] of model.hidden) covered.fill(1, s, e)
    for (let i = 0; i < source.length; i++)
      assert.ok(covered[i] || /\s/.test(source[i]), `lost ${JSON.stringify(source.slice(i, i + 10))}`)
  }
})
