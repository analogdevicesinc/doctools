import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { modelOf, outline } from './helper.mjs'
import { leafAt, blockAt } from '../adoc_gui/web/model.js'

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
    'text:', 'role:page', 'text: ', 'role:text', 'text: ', 'role:plain', 'text: ', 'link:name', 'text: ',
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
    'document(paragraph directive:note(paragraph list(item(paragraph)) paragraph) paragraph)')
  assert.ok(texts(model).includes('emphasis:one'))
  assert.equal(model.root.children[1].card, true)
})

test('other directives show their source', () => {
  const source = '.. code-block:: bash\n   :linenos:\n\n   echo hi\n     ls\n\n.. image:: a.png\n   :width: 50%\n'
  const model = assertCovered(source)
  assert.equal(outline(model.root),
    'document(directive:code-block(caption options(option:linenos) raw) directive:image(caption options(option:width)))')
  assert.deepEqual(texts(model), [
    'text:bash', 'name:linenos', 'text:', 'raw:echo hi', 'soft:\n   ', 'raw:  ls', 'text:a.png', 'name:width', 'text:50%'
  ])
})

test('the arguments of a directive are its caption, with inline markup', () => {
  const model = assertCovered('.. admonition:: A *custom* title\n\n   text\n\n.. contents::\n\n.. figure:: a.png\n\n   Legend\n')
  assert.equal(outline(model.root),
    'document(directive:admonition(caption paragraph) directive:contents(caption) directive:figure(caption paragraph))')
  assert.deepEqual(texts(model), ['text:A ', 'emphasis:custom', 'text: title', 'text:text', 'text:', 'text:a.png', 'text:Legend'])
})

test('a table directive holds a table, its caption and its options', () => {
  const source = '.. table:: Table caption\n  :width: 65%\n  :align: center\n\n  +---+---+\n  | a | b |\n  +===+===+\n  | c | d |\n  +---+---+\n'
  const model = assertCovered(source)
  assert.equal(outline(model.root), 'document(directive:table(caption options(option:width option:align) ' +
    'table(row(cell(line) cell(line)) row(cell(line) cell(line)))))')
  const table = model.root.children[0].children[2]
  assert.equal(table.format, 'grid')
  assert.equal(table.indent, 2)
  assert.equal(outline(modelOf('.. table::\n\n   not a table\n').root), 'document(directive:table(caption raw))')
})

test('a directive without an argument has an empty caption to type it in', () => {
  const model = modelOf('.. code-block::\n\n   ls\n\n.. note::\n\n   text\n\n.. image::\n')
  assert.equal(outline(model.root),
    'document(directive:code-block(caption raw) directive:note(paragraph) directive:image(caption))')
  const [code, note, image] = model.root.children
  assert.deepEqual([code.children[0].empty, code.children[0].hint], [true, 'language'])
  assert.equal(image.children[0].hint, 'path')
  assert.deepEqual([code.takesContent, note.takesContent, image.takesContent], [true, true, false])
  const slot = model.leaves.find(l => l.block === code.children[0])
  assert.deepEqual([slot.s, slot.e], [15, 15])
})

test('a comment that is being typed holds the caret after its space', () => {
  const model = modelOf('.. \n')
  assert.deepEqual(texts(model), ['raw:.. '])
  assert.equal(leafAt(model, 3).kind, 'raw')
})

test('a tab set holds tabs, their content is parsed', () => {
  const source = readFileSync(new URL('./install.rst', import.meta.url), 'utf-8')
  const model = assertCovered(source)
  const sets = model.root.children.filter(b => b.name === 'tab-set')
  assert.equal(sets.length, 2)
  assert.equal(outline(sets[0]),
    'directive:tab-set(directive:tab-item(caption directive:shell(raw)) ' +
    'directive:tab-item(caption directive:shell(raw)) directive:tab-item(caption directive:shell(raw)))')
  const titles = sets[0].children.map(tab => source.slice(tab.children[0].s, tab.children[0].e))
  assert.deepEqual(titles, ['pip', 'pipx', 'uvx'])
  // The code is shown without the indentation of the nested directives
  const code = model.leaves.find(l => l.kind === 'raw' && source.slice(l.s, l.e).includes('pipx install adi-doctools'))
  assert.equal(source.slice(code.s, code.e), '$ pipx install adi-doctools')
  const lines = model.leaves.filter(l => l.block === sets[0].children[0].children[1].children[0] && l.kind === 'raw')
  assert.deepEqual(lines.map(l => source.slice(l.s, l.e).slice(0, 12)),
    ['$ python3 -m', '$ source ven', '# Ensure pip', '$ pip instal', '$ pip instal'])
  // No argument to type for the set nor for the shell
  assert.equal(sets[0].children.some(c => c.kind === 'caption'), false)
})

test('the content of only is parsed, its argument is the condition', () => {
  const model = assertCovered('.. only:: html\n\n   Some **text**.\n')
  assert.equal(outline(model.root), 'document(directive:only(caption paragraph))')
  assert.equal(model.root.children[0].children[0].hint, 'condition')
  assert.ok(texts(model).includes('strong:text'))
})

test('a rubric has a title and no content', () => {
  const model = assertCovered('.. rubric:: **Doctools**: docs\n   :heading-level: 1\n\nText\n')
  assert.equal(outline(model.root), 'document(directive:rubric(caption options(option:heading-level)) paragraph)')
  assert.equal(model.root.children[0].takesContent, false)
  assert.deepEqual(texts(model).slice(0, 3), ['text:', 'strong:Doctools', 'text:: docs'])
})

test('rst-class has a class and no content', () => {
  const model = assertCovered('.. rst-class:: some-class\n\nText\n')
  assert.equal(outline(model.root), 'document(directive:rst-class(caption) paragraph)')
  const directive = model.root.children[0]
  assert.equal(directive.takesContent, false)
  assert.equal(directive.children[0].hint, 'class')
  assert.deepEqual(texts(model), ['text:some-class', 'text:Text'])
  assert.equal(modelOf('.. rst-class::\n').root.children[0].children[0].empty, true)
})

test('the content of the doctools directives is parsed', () => {
  const source = [
    '.. carousel::', '', '   .. figure:: a.png', '', '      A *caption*.', '', '   .. image:: b.png', '',
    '.. collapsible:: More', '', '   Hidden text.', '',
    '.. collection:: Title', '', '   hdl:', '     - projects/x', ''
  ].join('\n')
  const model = assertCovered(source)
  assert.equal(outline(model.root), 'document(' +
    'directive:carousel(directive:figure(caption paragraph) directive:image(caption)) ' +
    'directive:collapsible(caption paragraph) directive:collection(caption raw))')
  assert.ok(texts(model).includes('emphasis:caption'))
})

test('a target shows its label', () => {
  const model = assertCovered('.. _a label:\n\nTitle\n=====\n\n.. _ext: http://x.y\n\n.. _`quoted`:\n')
  assert.equal(outline(model.root), 'document(target heading1 raw target)')
  assert.deepEqual(texts(model), ['label:a label', 'text:Title', 'raw:.. _ext: http://x.y', 'label:`quoted`'])
})

test('a literal block follows its paragraph', () => {
  const model = assertCovered('Text::\n\n   literal\n   block\n\nAfter\n')
  assert.equal(outline(model.root), 'document(paragraph raw paragraph)')
  assert.deepEqual(texts(model), ['text:Text::', 'raw:literal', 'soft:\n   ', 'raw:block', 'text:After'])
})

test('a literal block after "::" alone keeps its indentation', () => {
  const source = 'As follows:\n\n::\n\n         top\n   left  box\n\nAfter\n'
  const model = assertCovered(source)
  assert.equal(outline(model.root), 'document(paragraph raw paragraph)')
  // The first line keeps what it is indented more than the others
  assert.deepEqual(texts(model), ['text:As follows:', 'raw:      top', 'soft:\n   ', 'raw:left  box', 'text:After'])
  assert.deepEqual(texts(assertCovered('::\n\n   a\n\n     b\n')), ['raw:a', 'soft:\n', 'raw:', 'soft:\n   ', 'raw:  b'])
  assert.equal(model.root.children[1].code, true)
  // Without a block after it, it is text
  assert.ok(texts(assertCovered('::\n')).join('').includes('::'))
})

test('what is not understood is kept as source', () => {
  const source = '.. _label:\n\n.. comment\n\nterm\n   definition\n\n:field: value\n\n+---+\n| a |\n+---+\n\n----\n\n| line\n'
  assertCovered(source)
})

test('broken markup loses nothing', () => {
  for (const source of ['abc **unclosed\n', '====\nbad title\n', '* \n', '.. note::\n', '``', ':ref:`x', '.. \n\n  x\n'])
    assertCovered(source)
})

test('markup that is being typed stays a paragraph', () => {
  const kinds = source => {
    const model = assertCovered(source)
    return outline(model.root) + ' ' + texts(model).join('|')
  }
  assert.equal(kinds(':ref:'), 'document(paragraph) text::ref:')
  assert.equal(kinds(':ref:`'), 'document(paragraph) text::ref:|text:`')
  assert.equal(kinds(':ref:`gu'), 'document(paragraph) text::ref:|text:`gu')
  assert.equal(kinds('Para\n\n:ref:`gu\n\nNext\n'), 'document(paragraph paragraph paragraph) text:Para|text::ref:|text:`gu|text:Next')
  assert.equal(kinds(':ref:`guide`'), 'document(paragraph) text:|role:guide|text:')
  assert.equal(kinds('.. note::\n\n   :ref:`\n'), 'document(directive:note(paragraph)) text::ref:|text:`')
  assert.equal(kinds(':orphan:\n\nText\n'), 'document(paragraph paragraph) text::orphan:|text:Text')
  assert.equal(kinds(':field: value\n'), 'document(raw) raw::field: value')
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
