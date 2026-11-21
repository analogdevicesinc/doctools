import { test } from 'node:test'
import assert from 'node:assert/strict'
import { run, modelOf, outline } from './helper.mjs'
import { addDirective, addRole, addTable, insertText } from '../adoc_gui/web/ops.js'
import { DIRECTIVE_GROUPS, ROLE_GROUPS, pickerGroups, templateOf } from '../adoc_gui/web/insert.js'
import { DIRECTIVES } from '../adoc_gui/web/directives.js'

const add = (name, lines) => (model, a) => addDirective(model, a, name, lines)
const role = name => (model, a, b) => addRole(model, a, b, name)

test('a directive is added after the block of the caret', () => {
  assert.equal(run('Pa|ra\n\nNext\n', add('note')), 'Para\n\n.. note::|\n\nNext\n')
  assert.equal(run('Pa|ra\nmore\nNext\n', add('note')), 'Para\nmore\nNext\n\n.. note::|\n')
  assert.equal(run('Para|', add('image')), 'Para\n\n.. image::|\n')
  // After a heading, with its underline
  assert.equal(run('Ti|tle\n=====\n\nText\n', add('note')), 'Title\n=====\n\n.. note::|\n\nText\n')
  // On an empty line
  assert.equal(run('One\n\n|\n\nTwo\n', add('note')), 'One\n\n.. note::|\n\nTwo\n')
  assert.equal(run('|', add('note')), '.. note::|\n')
  assert.equal(run('One\n|\nTwo\n', add('note')), 'One\n\n.. note::|\n\nTwo\n')
  // What is typed then is its argument, or its content
  const typed = (marked, text) => run(marked, insertText, text)
  assert.equal(typed('Para\n\n.. image::|\n', 'a.png'), 'Para\n\n.. image:: a.png|\n')
  assert.equal(typed('Para\n\n.. note::|\n', 'T'), 'Para\n\n.. note::\n\n   T|\n')
})

test('a directive is added in what the caret is in', () => {
  // In a list item, in a directive: indented as the block
  assert.equal(run('* one|\n* two\n', add('note')), '* one\n\n  .. note::|\n\n* two\n')
  assert.equal(run('.. note::\n\n   Te|xt\n\nAfter\n', add('tip')), '.. note::\n\n   Text\n\n   .. tip::|\n\nAfter\n')
  // From its argument, its options or its code: after the whole directive
  const after = '.. code-block:: py\n   :linenos:\n\n   print(1)\n\n.. note::|\n\nAfter\n'
  assert.equal(run('.. code-block:: p|y\n   :linenos:\n\n   print(1)\n\nAfter\n', add('note')), after)
  assert.equal(run('.. code-block:: py\n   :line|nos:\n\n   print(1)\n\nAfter\n', add('note')), after)
  assert.equal(run('.. code-block:: py\n   :linenos:\n\n   pri|nt(1)\n\nAfter\n', add('note')), after)
  // After a table, not in its cell
  const table = '===  ===\nA    B\n===  ===\n1    2\n===  ===\n'
  assert.equal(run(table.replace('1', '1|'), add('note')), `${table}\n.. note::|\n`)
})

test('a directive is added with what it is filled with', () => {
  assert.equal(run('Para|\n', add('tab-set', templateOf('tab-set'))),
    'Para\n\n.. tab-set::|\n\n   .. tab-item:: Tab\n\n      Text\n')
  assert.equal(run('* one|\n', add('list-table', templateOf('list-table'))),
    '* one\n\n  .. list-table::|\n     :header-rows: 1\n\n     * - Header\n       - Header\n     * - Cell\n       - Cell\n')
  assert.equal(templateOf('note'), undefined)
  assert.equal(templateOf('toString'), undefined)
})

test('a role is added at the caret, around the selection', () => {
  assert.equal(run('See | here\n', role('ref')), 'See :ref:`|` here\n')
  assert.equal(run('Press [Ctrl+C] now\n', role('kbd')), 'Press :kbd:`Ctrl+C|` now\n')
  // The start of a role, completed after it
  assert.equal(run('See |\n', role('external+')), 'See :external+|\n')
  assert.equal(run('See |\n', role('git+')), 'See :git+|\n')
  // Not around several lines
  assert.equal(run('[One\nTwo]\n', role('ref')), '[One\nTwo]\n')
})

test('the directives and the roles to choose from, in groups', () => {
  for (const [, names] of DIRECTIVE_GROUPS)
    for (const name of names) assert.ok(Object.hasOwn(DIRECTIVES, name), name)
  const all = DIRECTIVE_GROUPS.flatMap(([, names]) => names)
  assert.equal(new Set(all).size, all.length)
  const roles = ROLE_GROUPS.flatMap(([, list]) => list.map(([name]) => name))
  assert.equal(new Set(roles).size, roles.length)

  const titles = groups => groups.map(group => group.title)
  const names = groups => groups.flatMap(group => group.items.map(item => item.name))
  assert.deepEqual(titles(pickerGroups('directive')), DIRECTIVE_GROUPS.map(([title]) => title))
  assert.deepEqual(pickerGroups('directive')[1].items[0], { name: 'image', detail: 'path' })
  // The ones of the project that are not known, in a group of their own
  const more = pickerGroups('directive', ['note', 'my-directive', 'another'])
  assert.deepEqual(more[more.length - 1], {
    title: 'Others of the project', items: [{ name: 'another', detail: '' }, { name: 'my-directive', detail: '' }]
  })
  assert.deepEqual(names(pickerGroups('role', ['ref', 'git+hdl', 'git-hdl', 'external+sphinx', 'py:func'])).slice(-1), ['py:func'])
  // Searched by name, by what it is, or by its group
  assert.deepEqual(names(pickerGroups('directive', [], 'tab')), ['table', 'list-table', 'csv-table', 'tab-set'])
  assert.deepEqual(titles(pickerGroups('directive', [], 'admon')), ['Admonitions'])
  assert.deepEqual(names(pickerGroups('role', [], 'page')), ['doc'])
  assert.deepEqual(pickerGroups('role', [], 'nothing-like-this'), [])
})

test('a table is added, of rows and columns', () => {
  const table = (kind, rows, columns) => (model, a) => addTable(model, a, kind, rows, columns)
  const list = run('Para|\n\nNext\n', table('list', 2, 3))
  assert.equal(list, 'Para\n\n.. list-table::\n   :header-rows: 1\n\n   * - |\n     - \n     - \n   * - \n     - \n     - \n\nNext\n')
  const grid = run('Para|\n', table('grid', 3, 2))
  assert.equal(grid, ['Para', '',
    '+----------+----------+', '| |         |          |', '+==========+==========+',
    '|          |          |', '+----------+----------+', '|          |          |', '+----------+----------+', ''].join('\n'))
  // They are tables of that size, with a row of headers, to type in
  const shape = marked => {
    const found = []
    const walk = block => {
      if (block.kind === 'table') found.push([block.format, block.headers, block.children.length, block.children[0].children.length])
      for (const child of block.children ?? []) walk(child)
    }
    walk(modelOf(marked).root)
    return found
  }
  assert.deepEqual(shape(list.replace('- |', '- ')), [['list', 1, 2, 3]])
  assert.deepEqual(shape(grid.replace('| |         |', '|          |')), [['grid', 1, 3, 2]])
  assert.equal(run(list, insertText, 'A').includes('   * - A|\n'), true)
  // In a list item, indented as its text
  assert.equal(run('* one|\n', table('grid', 1, 1)), '* one\n\n  +----------+\n  | |         |\n  +----------+\n')
})
