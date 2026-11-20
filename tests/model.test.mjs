import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { modelOf, outline } from './helper.mjs'
import { leafAt, blockAt } from '../web/model.js'

const texts = model => model.leaves.map(l => `${l.kind}:${model.source.slice(l.s, l.e)}`)

// Every character that is not blank is shown in a leaf or is hidden markup
function assertCovered(source) {
  const model = modelOf(source)
  const covered = new Uint8Array(source.length)
  let last = 0
  for (const leaf of model.leaves) {
    assert.ok(leaf.s >= last, `leaves overlap at ${leaf.s}: ${JSON.stringify(source.slice(leaf.s, leaf.e))}`)
    assert.ok(leaf.e >= leaf.s)
    last = leaf.e
    covered.fill(1, leaf.s, leaf.e)
  }
  for (const [s, e] of model.hidden) covered.fill(1, s, e)
  for (let i = 0; i < source.length; i++)
    assert.ok(covered[i] || /\s/.test(source[i]), `lost ${JSON.stringify(source.slice(i, i + 20))} at ${i}`)
  return model
}

test('headings get their level from the adornments', () => {
  const model = modelOf('Title\n=====\n\nSub\n---\n\nSub 2\n-----\n\nOther\n=====\n')
  assert.equal(outline(model.root), 'document(heading1 heading2 heading2 heading1)')
  assert.deepEqual(texts(model), ['text:Title', 'text:Sub', 'text:Sub 2', 'text:Other'])
})

test('inline markup is hidden and its text is a leaf', () => {
  const source = 'Some *em* and **strong** ``lit`` text :ref:`a <b>` `link <http://x>`_.\n'
  const model = assertCovered(source)
  assert.deepEqual(texts(model), [
    'text:Some ', 'emphasis:em', 'text: and ', 'strong:strong', 'text: ', 'literal:lit', 'text: text ',
    'role:a', 'text: ', 'link:link', 'text:.'
  ])
  assert.equal(model.leaves.find(l => l.kind === 'role').role, 'ref')
})

test('roles and links show their title, or their target', () => {
  const source = ':doc:`page` `text`:sup: `plain` name_ `two words`_ `anon <http://x>`__ http://y.z |sub|\n'
  const model = assertCovered(source)
  assert.deepEqual(texts(model), [
    'role:page', 'text: ', 'role:text', 'text: ', 'role:plain', 'text: ', 'link:name', 'text: ',
    'link:two words', 'text: ', 'link:anon', 'text: ', 'link:http://y.z', 'text: ', 'markup:|sub|'
  ])
  assert.deepEqual(model.leaves.filter(l => l.kind === 'role').map(l => l.role), ['doc', 'sup', ''])
  assertCovered(':ref:`` and `` and `x <y>` and :a:`b <c`\n')
})

test('a line break inside a paragraph is a soft break', () => {
  const model = modelOf('* one\n  two\n')
  assert.deepEqual(model.leaves.map(l => l.kind), ['text', 'soft', 'text'])
  assert.equal(outline(model.root), 'document(list(item(paragraph)))')
})

test('typed spaces at the end of a line stay in the text', () => {
  const model = modelOf('word \n')
  assert.deepEqual(texts(model), ['text:word '])
  assert.equal(leafAt(model, 5).kind, 'text')
})

test('lists nest', () => {
  const model = modelOf('* one\n* two\n\n  para\n\n  #. nested\n')
  assert.equal(outline(model.root), 'document(list(item(paragraph) item(paragraph paragraph list(item(paragraph)))))')
  assert.equal(model.root.children[0].children[1].children[2].ordered, true)
})

test('admonition content is parsed as a document', () => {
  const source = 'Intro\n\n.. note::\n\n   First para\n   cont.\n\n   * item *one*\n\n   Second.\n\nAfter\n'
  const model = assertCovered(source)
  assert.equal(outline(model.root),
    'document(paragraph directive:note(raw paragraph list(item(paragraph)) paragraph) paragraph)')
  assert.ok(texts(model).includes('emphasis:one'))
  assert.ok(texts(model).includes('raw:.. note::'))
})

test('other directives show their source', () => {
  const source = '.. code-block:: bash\n   :linenos:\n\n   echo hi\n     ls\n\n.. image:: a.png\n   :width: 50%\n'
  const model = assertCovered(source)
  assert.equal(outline(model.root), 'document(directive:code-block(raw raw) directive:image(raw))')
  assert.deepEqual(texts(model), [
    'raw:.. code-block:: bash\n   :linenos:', 'raw:   echo hi\n     ls', 'raw:.. image:: a.png\n   :width: 50%'
  ])
})

test('a literal block follows its paragraph', () => {
  const model = assertCovered('Text::\n\n   literal\n   block\n\nAfter\n')
  assert.equal(outline(model.root), 'document(paragraph raw paragraph)')
  assert.deepEqual(texts(model), ['text:Text::', 'raw:   literal\n   block', 'text:After'])
})

test('what is not understood is kept as source', () => {
  const source = '.. _label:\n\n.. comment\n\nterm\n   definition\n\n:field: value\n\n+---+\n| a |\n+---+\n\n----\n\n| line\n'
  assertCovered(source)
})

test('broken markup loses nothing', () => {
  for (const source of ['abc **unclosed\n', '====\nbad title\n', '* \n', '.. note::\n', '``', ':ref:`x', '.. \n\n  x\n'])
    assertCovered(source)
})

test('the demo document loses nothing', () => {
  assertCovered(readFileSync(new URL('../demo.rst', import.meta.url), 'utf-8'))
})

test('blockAt finds the empty list item', () => {
  const model = modelOf('* one\n* \n* two\n')
  assert.equal(leafAt(model, 8), undefined)
  const block = blockAt(model, 8)
  assert.equal(block.kind, 'item')
  assert.equal(block.children.length, 0)
})
