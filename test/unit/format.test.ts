import { test } from 'node:test'
import * as assert from 'node:assert/strict'
import {
  FormatResult,
  Span,
  toggleInline,
  setHeading,
  toggleList,
  toggleQuote,
  insertLink,
  insertRole,
  wrapCode,
  wrapAdmonition,
  insertImage,
  insertRule,
  insertTable,
  parseTableSize
} from '../../src/format'

function parse(marked: string): { source: string; selection: Span } {
  const start = marked.indexOf('[')
  const end = marked.indexOf(']') - 1
  if (start === -1) {
    const cursor = marked.indexOf('|')
    return { source: marked.replace('|', ''), selection: { start: cursor, end: cursor } }
  }
  return { source: marked.replace('[', '').replace(']', ''), selection: { start, end } }
}

function run(marked: string, fn: (source: string, selection: Span) => FormatResult): string {
  const { source, selection } = parse(marked)
  const result = fn(source, selection)
  const output = source.slice(0, result.range.start) + result.text + source.slice(result.range.end)
  const { start, end } = result.selection
  if (start === end)
    return output.slice(0, start) + '|' + output.slice(start)
  return output.slice(0, start) + '[' + output.slice(start, end) + ']' + output.slice(end)
}

test('bold wraps the selection, the word under the cursor or nothing', () => {
  assert.equal(run('a [bold] word', (s, r) => toggleInline(s, r, 'rst', 'bold')), 'a **[bold]** word')
  assert.equal(run('a bo|ld word', (s, r) => toggleInline(s, r, 'rst', 'bold')), 'a **[bold]** word')
  assert.equal(run('a | word', (s, r) => toggleInline(s, r, 'rst', 'bold')), 'a **|** word')
  assert.equal(run('a[ bold ]word', (s, r) => toggleInline(s, r, 'rst', 'bold')), 'a **[bold]** word')
})

test('inline markup toggles off', () => {
  assert.equal(run('a **[bold]** word', (s, r) => toggleInline(s, r, 'rst', 'bold')), 'a [bold] word')
  assert.equal(run('a [**bold**] word', (s, r) => toggleInline(s, r, 'rst', 'bold')), 'a [bold] word')
  assert.equal(run('a **bo|ld** word', (s, r) => toggleInline(s, r, 'rst', 'bold')), 'a [bold] word')
  assert.equal(run('a *[it]* word', (s, r) => toggleInline(s, r, 'rst', 'italic')), 'a [it] word')
  assert.equal(run('a ``[code]`` word', (s, r) => toggleInline(s, r, 'rst', 'code')), 'a [code] word')
})

test('italic does not unwrap bold', () => {
  assert.equal(run('a **[bold]** word', (s, r) => toggleInline(s, r, 'rst', 'italic')), 'a ***[bold]*** word')
})

test('inline markup per syntax', () => {
  assert.equal(run('[x]', (s, r) => toggleInline(s, r, 'rst', 'code')), '``[x]``')
  assert.equal(run('[x]', (s, r) => toggleInline(s, r, 'myst', 'code')), '`[x]`')
  assert.equal(run('H[2]O', (s, r) => toggleInline(s, r, 'rst', 'subscript')), 'H:sub:`[2]`O')
  assert.equal(run('H[2]O', (s, r) => toggleInline(s, r, 'myst', 'subscript')), 'H{sub}`[2]`O')
  assert.equal(run('H:sub:`[2]`O', (s, r) => toggleInline(s, r, 'rst', 'subscript')), 'H[2]O')
})

test('rst headings add, replace and remove the underline', () => {
  assert.equal(run('Ti|tle\n\ntext', (s, r) => setHeading(s, r, 'rst', 1)), '[Title]\n=====\n\ntext')
  assert.equal(run('Ti|tle\n=====\n\ntext', (s, r) => setHeading(s, r, 'rst', 2)), '[Title]\n-----\n\ntext')
  assert.equal(run('Title\n==|===\n\ntext', (s, r) => setHeading(s, r, 'rst', 3)), '[Title]\n~~~~~\n\ntext')
  assert.equal(run('=====\nTi|tle\n=====\n', (s, r) => setHeading(s, r, 'rst', 4)), '[Title]\n^^^^^\n')
  assert.equal(run('Ti|tle\n-----\n\ntext', (s, r) => setHeading(s, r, 'rst', 0)), '[Title]\n\ntext')
  assert.equal(run('A longer title|\n---\n', (s, r) => setHeading(s, r, 'rst', 1)),
    '[A longer title]\n==============\n')
  assert.equal(run('before\n\n|\n', (s, r) => setHeading(s, r, 'rst', 1)), 'before\n\n[Heading]\n=======\n')
  assert.equal(run('Hi|', (s, r) => setHeading(s, r, 'rst', 1)), '[Hi]\n===')
  assert.equal(run('Ti|tle\n', (s, r) => setHeading(s, r, 'rst', 5)), '[Title]\n"""""\n')
})

test('myst headings', () => {
  assert.equal(run('Ti|tle', (s, r) => setHeading(s, r, 'myst', 2)), '## [Title]')
  assert.equal(run('### Ti|tle', (s, r) => setHeading(s, r, 'myst', 1)), '# [Title]')
  assert.equal(run('## Ti|tle', (s, r) => setHeading(s, r, 'myst', 0)), '[Title]')
  assert.equal(run('Ti|tle', (s, r) => setHeading(s, r, 'myst', 5)), '##### [Title]')
})

test('lists toggle on, off and between kinds', () => {
  assert.equal(run('[one\ntwo]', (s, r) => toggleList(s, r, 'rst', 'bullet')), '[* one\n* two]')
  assert.equal(run('[* one\n* two]', (s, r) => toggleList(s, r, 'rst', 'bullet')), '[one\ntwo]')
  assert.equal(run('[* one\n* two]', (s, r) => toggleList(s, r, 'rst', 'numbered')), '[#. one\n#. two]')
  assert.equal(run('[one\ntwo]', (s, r) => toggleList(s, r, 'myst', 'numbered')), '[1. one\n1. two]')
  assert.equal(run('  on|e', (s, r) => toggleList(s, r, 'rst', 'bullet')), '[  * one]')
  assert.equal(run('[one\n\ntwo]', (s, r) => toggleList(s, r, 'rst', 'bullet')), '[* one\n\n* two]')
  assert.equal(run('a\n[one\n]b', (s, r) => toggleList(s, r, 'rst', 'bullet')), 'a\n[* one]\nb')
})

test('quote', () => {
  assert.equal(run('[one\ntwo]', (s, r) => toggleQuote(s, r, 'rst')), '[   one\n   two]')
  assert.equal(run('[   one\n   two]', (s, r) => toggleQuote(s, r, 'rst')), '[one\ntwo]')
  assert.equal(run('on|e', (s, r) => toggleQuote(s, r, 'myst')), '[> one]')
  assert.equal(run('> on|e', (s, r) => toggleQuote(s, r, 'myst')), '[one]')
})

test('links', () => {
  assert.equal(run('see [the docs] here', (s, r) => insertLink(s, r, 'rst', 'https://a.b')),
    'see `[the docs] <https://a.b>`__ here')
  assert.equal(run('see [the docs] here', (s, r) => insertLink(s, r, 'myst', 'https://a.b')),
    'see [[the docs]](https://a.b) here')
  assert.equal(run('see | here', (s, r) => insertLink(s, r, 'rst', 'https://a.b')),
    'see `[https://a.b] <https://a.b>`__ here')
})

test('roles', () => {
  assert.equal(run('see |', (s, r) => insertRole(s, r, 'rst', 'ref')), 'see :ref:`|')
  assert.equal(run('see [the page]', (s, r) => insertRole(s, r, 'rst', 'doc')), 'see :doc:`the page <|')
  assert.equal(run('see |', (s, r) => insertRole(s, r, 'myst', 'ref')), 'see {ref}`|')
})

test('code blocks wrap the selected lines', () => {
  assert.equal(run('text\n[ls -la\necho hi]\nmore', (s, r) => wrapCode(s, r, 'rst', 'bash')),
    'text\n\n.. code-block:: bash\n\n   ls -la\n   echo hi|\n\nmore')
  assert.equal(run('text\n\n[ls -la]\n\nmore', (s, r) => wrapCode(s, r, 'myst', 'bash')),
    'text\n\n```bash\nls -la\n```|\n\nmore')
  assert.equal(run('text\n\n|', (s, r) => wrapCode(s, r, 'rst', 'python')),
    'text\n\n.. code-block:: python\n\n   [code]')
  assert.equal(run('|', (s, r) => wrapCode(s, r, 'rst', '')), '.. code-block::\n\n   [code]')
})

test('admonitions', () => {
  assert.equal(run('[Be careful.]', (s, r) => wrapAdmonition(s, r, 'rst', 'warning')),
    '.. warning::\n\n   Be careful.|')
  assert.equal(run('|', (s, r) => wrapAdmonition(s, r, 'myst', 'note')), '```{note}\n[Text]\n```')
})

test('block inserts keep blank lines around', () => {
  assert.equal(run('text|\nmore', (s, r) => insertImage(s, r, 'rst', 'img/a.svg')),
    'text\n\n.. image:: img/a.svg|\n\nmore')
  assert.equal(run('text\n\n|\n\nmore', (s, r) => insertImage(s, r, 'myst', 'img/a.svg')),
    'text\n\n![](img/a.svg)|\n\nmore')
  assert.equal(run('text\n|', (s, r) => insertRule(s, r, 'rst')), 'text\n\n----|')
})

test('tables', () => {
  assert.equal(run('|', (s, r) => insertTable(s, r, 'rst', 1, 2)), [
    '.. list-table::',
    '   :header-rows: 1',
    '',
    '   * - [Header 1]',
    '     - Header 2',
    '   * -',
    '     -'
  ].join('\n'))
  assert.equal(run('|', (s, r) => insertTable(s, r, 'myst', 1, 2)), [
    '| [Header 1] | Header 2 |',
    '| -------- | -------- |',
    '|          |          |'
  ].join('\n'))
})

test('table size', () => {
  assert.deepEqual(parseTableSize('3x2'), { rows: 3, columns: 2 })
  assert.deepEqual(parseTableSize(' 4 X 5 '), { rows: 4, columns: 5 })
  assert.deepEqual(parseTableSize('2, 3'), { rows: 2, columns: 3 })
  assert.equal(parseTableSize('0x2'), undefined)
  assert.equal(parseTableSize('abc'), undefined)
  assert.equal(parseTableSize('3x99'), undefined)
})
