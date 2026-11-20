import test from 'node:test'
import assert from 'node:assert/strict'
import { modelOf } from './helper.mjs'
import { applyEdit } from '../adoc_gui/web/ops.js'
import { codeOf, codeEdit, toSource, fromSource, languageOf, codeTokens, sourceMarks } from '../adoc_gui/web/code.js'

const directive = (model, name) => {
  const find = block => block.name === name ? block : (block.children ?? []).map(find).find(Boolean)
  return find(model.root)
}

// Edit the text of the first directive 'name' of a source: the new source
function write(source, name, change) {
  const model = modelOf(source)
  const code = codeOf(model, directive(model, name))
  const edit = codeEdit(model, code, code.text, change(code.text))
  return edit ? applyEdit(source, edit) : source
}

const nested = '.. tab-set::\n\n   .. tab-item:: pip\n\n      .. shell::\n\n         $ one\n           two\n\n         $ three\n\nAfter\n'

test('the code is the content without the indentation its lines share', () => {
  const model = modelOf(nested)
  const code = codeOf(model, directive(model, 'shell'))
  assert.equal(code.text, '$ one\n  two\n\n$ three')
  assert.equal(code.indent, 9)
  const offset = nested.indexOf('two')
  assert.equal(toSource(model, code, 1, 2), offset)
  assert.deepEqual(fromSource(model, code, offset), { line: 1, column: 2 })
  assert.deepEqual(fromSource(model, code, nested.indexOf('three')), { line: 3, column: 2 })
  assert.equal(fromSource(model, code, nested.indexOf('After')), undefined)
})

test('edits of the code are written indented in the source', () => {
  assert.equal(write(nested, 'shell', t => t.replace('one', 'one!')), nested.replace('one', 'one!'))
  // A new line, an empty one, and text on an empty line
  assert.equal(write(nested, 'shell', t => t.replace('two', 'two\n$ four')),
    nested.replace('two', 'two\n         $ four'))
  assert.equal(write(nested, 'shell', t => t.replace('two', 'two\n')), nested.replace('two', 'two\n'))
  assert.equal(write(nested, 'shell', t => t.replace('two\n\n', 'two\nx\n')),
    nested.replace('two\n\n', 'two\n         x\n'))
  assert.equal(write(nested, 'shell', t => t + '\n$ end'), nested.replace('$ three', '$ three\n         $ end'))
  assert.equal(write(nested, 'shell', t => t.replace('two\n\n', 'two\n')), nested.replace('two\n\n', 'two\n'))
  assert.equal(write(nested, 'shell', t => t.replace('$ three', 'x$ three')), nested.replace('$ three', 'x$ three'))
  assert.equal(write(nested, 'shell', t => t.replace('$ three', '$ x\n$ three')), nested.replace('$ three', '$ x\n         $ three'))
  // Joined lines
  assert.equal(write(nested, 'shell', t => t.replace('one\n  two', 'one two')), nested.replace('one\n           two', 'one two'))
})

test('the content of a code directive is written and removed', () => {
  const empty = '.. code-block:: c\n\nAfter\n'
  assert.equal(write(empty, 'code-block', () => 'int a;\nint b;'), '.. code-block:: c\n\n   int a;\n   int b;\n\nAfter\n')
  assert.equal(write('.. code-block:: c\n\n   int a;\n', 'code-block', () => ''), '.. code-block:: c\n')
})

test('the language of the code is its argument', () => {
  const model = modelOf('.. code-block:: bash\n\n   ls\n\n.. code:: Python\n\n   a\n\n.. code-block:: none\n\n   a\n\n.. shell::\n\n   $ ls\n')
  const names = model.root.children.map(d => languageOf(model, d))
  assert.deepEqual(names, ['shell', 'python', undefined, 'shell'])
  const tokens = codeTokens('# comment\nif x:\n  print("hi")', 'python').map(t => t.name)
  assert.ok(tokens.includes('t-comment') && tokens.includes('t-keyword') && tokens.includes('t-string'), tokens.join(' '))
})

test('the source is coloured from its model', () => {
  const source = 'Title\n=====\n\nSome **bold** and :ref:`a`.\n\n.. code-block:: python\n\n   import os\n'
  const marks = sourceMarks(modelOf(source))
  const named = name => marks.filter(m => m.name.includes(name)).map(m => source.slice(m.from, m.to))
  assert.deepEqual(named('t-heading'), ['Title'])
  assert.deepEqual(named('t-strong'), ['bold'])
  assert.deepEqual(named('t-directive'), ['.. code-block::'])
  assert.deepEqual(named('t-argument'), ['python'])
  assert.deepEqual(named('t-keyword'), ['import'])
})
