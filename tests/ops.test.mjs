import { test } from 'node:test'
import assert from 'node:assert/strict'
import { run, modelOf, outline } from './helper.mjs'
import {
  insertText, deleteBackward, deleteForward, insertParagraph, toggleInline, intoContent, addOption, tableStep, addLabel, removeSide, addTab, shiftItem
} from '../adoc_gui/web/ops.js'

const type = (marked, text) => run(marked, insertText, text)

test('typing inserts at the caret and replaces the selection', () => {
  assert.equal(type('Hello| world\n', ','), 'Hello,| world\n')
  assert.equal(type('Hello [big] world\n', 'small'), 'Hello small| world\n')
  assert.equal(type('a **bol|** b\n', 'd'), 'a **bold|** b\n')
})

test('typing on an empty line makes a paragraph of its own', () => {
  assert.equal(type('one\n\n|\n\ntwo\n', 'x'), 'one\n\nx|\n\ntwo\n')
  assert.equal(type('one\n|\ntwo\n', 'x'), 'one\n\nx|\n\ntwo\n')
  assert.equal(type('|', 'x'), 'x|\n')
  assert.equal(type('* one\n* |\n', 'x'), '* one\n* x|\n')
})

test('backspace removes the character before the caret', () => {
  assert.equal(run('Hello|\n', deleteBackward), 'Hell|\n')
  assert.equal(run('He[ll]o\n', deleteBackward), 'He|o\n')
  assert.equal(run('a 😀|\n', deleteBackward), 'a |\n')
  assert.equal(run('|Hello\n', deleteBackward), '|Hello\n')
})

test('backspace skips the hidden markup', () => {
  assert.equal(run('a **bold**| b\n', deleteBackward), 'a **bol|** b\n')
  assert.equal(run('one\n|two\n', deleteBackward), 'one|two\n')
})

test('backspace at the start of a paragraph joins it with the one before', () => {
  assert.equal(run('one\n\n|two\n', deleteBackward), 'one|two\n')
  assert.equal(run('Title\n=====\n\n|text\n', deleteBackward), 'Title\n=====\n\n|text\n')
  assert.equal(run('.. note::\n\n   One\n\n   |Two\n', deleteBackward), '.. note::\n\n   One|Two\n')
  assert.equal(run('before\n\n.. note::\n\n   text|\n\nafter\n', deleteForward), 'before\n\n.. note::\n\n   text|\n\nafter\n')
  assert.equal(run('.. note::\n\n   one\n\n   |two\n', deleteBackward), '.. note::\n\n   one|two\n')
  assert.equal(run('* one\n\n|text\n', deleteBackward), '* one\n\n|text\n')
})

test('backspace at the start of a list item takes it out of the list', () => {
  assert.equal(run('* one\n* |two\n', deleteBackward), '* one\n\n|two\n')
  assert.equal(run('* one\n* |\n', deleteBackward), '* one\n\n|\n')
})

test('delete removes the character after the caret', () => {
  assert.equal(run('He|llo\n', deleteForward), 'He|lo\n')
  assert.equal(run('a **bold|** b\n', deleteForward), 'a **bold|**b\n')
  assert.equal(run('one|\n\ntwo\n', deleteForward), 'one|two\n')
})

test('enter splits a paragraph', () => {
  assert.equal(run('one |two\n', insertParagraph), 'one\n\n|two\n')
  assert.equal(run('one|\n\nnext\n', insertParagraph), 'one\n\n|\n\nnext\n')
  assert.equal(run('one|\nnext\n', insertParagraph), 'one\n\n|next\n')
  assert.equal(run('one|\n', insertParagraph), 'one\n\n|\n')
  assert.equal(run('one|', insertParagraph), 'one\n\n|')
})

test('enter on an empty line adds nothing', () => {
  assert.equal(run('one\n\n|\n\nnext\n', insertParagraph), 'one\n\n|\n\nnext\n')
  assert.equal(run('one\n\n|\n', insertParagraph), 'one\n\n|\n')
  assert.equal(run('Title\n=====\n\n|\n\ntext\n', insertParagraph), 'Title\n=====\n\n|\n\ntext\n')
})

test('backspace on an empty line removes it', () => {
  assert.equal(run('one\n\n|\n\nnext\n', deleteBackward), 'one|\n\nnext\n')
  assert.equal(run('Title\n=====\n\n|\n\ntext\n', deleteBackward), 'Title|\n=====\n\ntext\n')
  assert.equal(run('Title\n=====\n\n|\n', deleteBackward), 'Title|\n=====\n')
  assert.equal(run('one\n\n|\n', deleteBackward), 'one|\n')
  assert.equal(run('* one\n\n|\n* two\n', deleteBackward), '* one|\n\n* two\n')
})

test('enter in a heading starts a paragraph below it', () => {
  assert.equal(run('Ti|tle\n=====\n\ntext\n', insertParagraph), 'Title\n=====\n\n|\n\ntext\n')
  assert.equal(run('Title|\n=====\n', insertParagraph), 'Title\n=====\n\n|\n')
})

test('enter in a list makes a new item, and leaves the list from an empty one', () => {
  assert.equal(run('* one|\n* two\n', insertParagraph), '* one\n* |\n* two\n')
  assert.equal(run('* on|e\n', insertParagraph), '* on\n* |e\n')
  assert.equal(run('  #. one|\n', insertParagraph), '  #. one\n  #. |\n')
  assert.equal(run('1. one|\n', insertParagraph), '1. one\n2. |\n')
  assert.equal(run('* one\n* |\n', insertParagraph), '* one\n\n|\n')
  assert.equal(run('* one\n* |\n* two\n', insertParagraph), '* one\n\n|\n* two\n')
})

test('enter keeps the indentation of nested paragraphs and of code', () => {
  assert.equal(run('.. note::\n\n   one |two\n', insertParagraph), '.. note::\n\n   one\n\n   |two\n')
  assert.equal(run('.. code-block:: bash\n\n   echo hi|\n', insertParagraph), '.. code-block:: bash\n\n   echo hi\n   |\n')
})

test('the adornments of a heading follow its title', () => {
  assert.equal(type('Title|\n=====\n\ntext\n', ' two'), 'Title two|\n=========\n\ntext\n')
  assert.equal(run('Title|\n=====\n', deleteBackward), 'Titl|\n====\n')
  assert.equal(run('Ti[tl]e\n-----\n', deleteBackward), 'Ti|e\n---\n')
  assert.equal(type('=====\nTitle|\n=====\n', 's'), '======\nTitles|\n======\n')
  assert.equal(type('Caf|\n===\n', 'é'), 'Café|\n====\n')
  assert.equal(run('A [big] title\n===========\n', toggleInline, 'bold'), 'A **[big]** title\n===============\n')
  assert.equal(run('T|\n=\n', deleteBackward), '|\n=\n')
  assert.equal(type('one\n\nTitle\n=====\n\ntw|o\n', 'x'), 'one\n\nTitle\n=====\n\ntwx|o\n')
})

test('the caret has a place after the markup that ends a paragraph', () => {
  assert.equal(type('See :ref:`guide`|\n', ' and more'), 'See :ref:`guide` and more|\n')
  assert.equal(run('See :ref:`guide`|\n\nnext\n', insertParagraph), 'See :ref:`guide`\n\n|\n\nnext\n')
  assert.equal(run('a **bold**|\n', deleteBackward), 'a **bol|**\n')
  assert.equal(type('|**bold** a\n', 'x'), 'x|**bold** a\n')
  assert.equal(type('a **bold|**\n', 'er'), 'a **bolder|**\n')
})

test('a directive is filled: its argument, then enter for its content', () => {
  assert.equal(type('.. code-block::|\n', 'b'), '.. code-block:: b|\n')
  assert.equal(type('.. code-block:: b|\n', 'ash'), '.. code-block:: bash|\n')
  assert.equal(run('.. code-block:: bash|\n', insertParagraph), '.. code-block:: bash\n\n   |\n')
  assert.equal(type('.. code-block:: bash\n\n   |\n', 'ls'), '.. code-block:: bash\n\n   ls|\n')
  assert.equal(run('.. code-block::|\n', insertParagraph), '.. code-block::\n\n   |\n')
  assert.equal(run('.. code-block:: bash|\n   :linenos:\n\nnext\n', insertParagraph),
    '.. code-block:: bash\n   :linenos:\n\n   |\n\nnext\n')
  assert.equal(run('.. code-block:: ba|sh\n\n   ls\n', insertParagraph), '.. code-block:: bash\n\n   |ls\n')
  assert.equal(run('.. table:: Cap|tion\n   :width: 50%\n', insertParagraph), '.. table:: Caption\n   :width: 50%\n\n   |\n')
  assert.equal(run('.. image:: a.png|\n', insertParagraph), '.. image:: a.png|\n')
})

test('down from the argument goes to the content that is not written yet', () => {
  const down = (model, a) => intoContent(model, a)
  assert.equal(run('.. code-block:: c|\n', down), '.. code-block:: c\n\n   |\n')
  assert.equal(run('.. code-block::|\n\nnext\n', down), '.. code-block::\n\n   |\n\nnext\n')
  assert.equal(run('.. code-block:: c|\n\n   \n', down), '.. code-block:: c\n\n   |\n')
  assert.equal(run('.. code-block:: c|\n\n   x\n', down), '.. code-block:: c\n\n   |x\n')
  assert.equal(run('.. tab-set::\n\n   .. tab-item:: pi|p\n\n      .. shell::\n\n         $ ls\n', down),
    '.. tab-set::\n\n   .. tab-item:: pip\n\n      .. shell::\n\n         |$ ls\n')
  // The caret moves by itself when there is no place for content
  assert.equal(run('.. image:: a|\n', down), '.. image:: a|\n')
  assert.equal(run('Para|\n', down), 'Para|\n')
})

test('options are added, filled and removed', () => {
  const add = model => addOption(model, model.root.children[0])
  assert.equal(run('.. code-block:: c|\n\n   x\n', add), '.. code-block:: c\n   :[option]:\n\n   x\n')
  assert.equal(run('.. table:: T|\n   :width: 5\n\n   x\n', add), '.. table:: T\n   :width: 5\n   :[option]:\n\n   x\n')
  assert.equal(run('.. note::|\n', add), '.. note::\n   :[option]:\n')
  // The name is typed over, then Enter or Tab go to the value
  let text = type('.. code-block:: c\n   :[option]:\n\n   x\n', 'linenos')
  assert.equal(text, '.. code-block:: c\n   :linenos|:\n\n   x\n')
  text = run(text, insertParagraph)
  assert.equal(text, '.. code-block:: c\n   :linenos:|\n\n   x\n')
  assert.equal(type(text, '5'), '.. code-block:: c\n   :linenos: 5|\n\n   x\n')
  const source = '.. code-block:: c\n   :linenos:\n\n   x\n'
  assert.equal(tableStep(modelOf(source), source.indexOf('linenos') + 2, 1).caret, source.indexOf('linenos:') + 8)
  // Removed with its name
  assert.equal(run('.. code-block:: c\n   :l|:\n\n   x\n', deleteBackward), '.. code-block:: c|\n\n   x\n')
  assert.equal(run('.. code-block:: c\n   :|linenos:\n\n   x\n', deleteBackward), '.. code-block:: c|\n\n   x\n')
  assert.equal(run('.. code-block:: c\n   :|width: 5\n\n   x\n', deleteBackward), '.. code-block:: c\n   :|width: 5\n\n   x\n')
  assert.equal(run('.. code-block:: c\n   :a: 1\n   :b|:\n\n   x\n', deleteBackward), '.. code-block:: c\n   :a: 1|\n\n   x\n')
  assert.equal(run('.. code-block:: c\n   :li|nenos:\n', deleteBackward), '.. code-block:: c\n   :l|nenos:\n')
})

test('a colon ends the name of an option and goes to its value', () => {
  assert.equal(type('.. code-block:: c\n   :linenos|:\n', ':'), '.. code-block:: c\n   :linenos:|\n')
  assert.equal(type('.. code-block:: c\n   :wid|th: 5\n', ':'), '.. code-block:: c\n   :width: 5|\n')
  assert.equal(type('.. code-block:: c\n   :width: 5|\n', ':'), '.. code-block:: c\n   :width: 5:|\n')
})

test('labels are added to a heading and side elements are removed', () => {
  const heading = model => model.root.children.find(b => b.kind === 'heading')
  const add = model => addLabel(model, heading(model))
  assert.equal(run('Ti|tle\n=====\n', add), '.. _[label]:\n\nTitle\n=====\n')
  assert.equal(run('Text\n\nTi|tle\n=====\n', add), 'Text\n\n.. _[label]:\n\nTitle\n=====\n')
  assert.equal(run('.. _a:\n\n=====\nTi|tle\n=====\n', add), '.. _a:\n\n.. _[label]:\n\n=====\nTitle\n=====\n')
  assert.equal(type('.. _[label]:\n\nTitle\n=====\n', 'intro'), '.. _intro|:\n\nTitle\n=====\n')

  const remove = kind => model => {
    const find = b => b.kind === kind ? b : (b.children ?? []).map(find).find(Boolean)
    return removeSide(model, find(model.root))
  }
  assert.equal(run('Text\n\n.. _a:\n\nTitle|\n=====\n', remove('target')), 'Text\n\n|Title\n=====\n')
  assert.equal(run('.. _a:\n.. _b:\n\nTitle|\n=====\n', remove('target')), '|.. _b:\n\nTitle\n=====\n'.replace('|.. _', '.. _|'))
  assert.equal(run('.. code-block:: c|\n   :linenos:\n   :b: 1\n\n   x\n', remove('option')), '.. code-block:: c|\n   :b: 1\n\n   x\n')
})

test('an adornment after a one-line paragraph makes it a heading', () => {
  assert.equal(type('Title\n\n|', '='), 'Title|\n=====\n')
  assert.equal(type('Intro\n\nTitle\n\n|\n\nNext\n', '-'), 'Intro\n\nTitle|\n-----\n\nNext\n')
  assert.equal(type('Intro\n\nTitle\n\n|\nNext\n', '~'), 'Intro\n\nTitle|\n~~~~~\n\nNext\n')
  // Not after a paragraph of several lines, nor in a directive, nor other text
  const plain = (marked, marker) => assert.ok(!type(marked, marker).includes(marker.repeat(2)), marked)
  plain('One\ntwo\n\n|', '=')
  plain('.. note::\n\n   Title\n\n   |', '=')
  plain('Title\n\n|', '.')
  plain('Title\n\n|', '*')
  plain('- Title\n\n|', '=')
})

test('a typed line longer than 79 columns is wrapped, indented as its text', () => {
  const words = n => Array.from({ length: n }, (_, i) => `w${i}`).join(' ')
  const long = words(26)
  // Fits in 79: not wrapped; one more character: wrapped at the last space
  const at = (marked, text) => type(marked, text).split('\n')
  const lines = at(`${long.slice(0, 78)}|\n`, 'x')
  assert.ok(lines.every(line => line.replace('|', '').length <= 79), lines.join('\n'))
  assert.equal(at(`${long.slice(0, 77)}|\n`, 'x').length, 2)
  const wrapped = at(`${long}|\n`, 'x')
  assert.equal(wrapped.length, 3)
  assert.ok(wrapped[0].length <= 79)
  assert.ok(wrapped[1].endsWith('x|'))
  // The caret follows its word to the new line
  assert.ok(!wrapped[0].includes('|'))

  // In an enumerated item: three spaces; in a bullet item: two; in a directive: three
  const item = at(`#. ${long}|\n`, 'x')
  assert.ok(item[1].startsWith('   w') && !item[1].startsWith('    '), item.join('\n'))
  const bullet = at(`* ${long}|\n`, 'x')
  assert.ok(bullet[1].startsWith('  w') && !bullet[1].startsWith('   '), bullet.join('\n'))
  const nested = at(`#. One\n\n   * ${long}|\n`, 'x')
  assert.ok(nested[3].startsWith('     w') && !nested[3].startsWith('      '), nested.join('\n'))
  const note = at(`.. note::\n\n   ${long}|\n`, 'x')
  assert.ok(note[3].startsWith('   w') && !note[3].startsWith('    '), note.join('\n'))

  // Typed in the middle of the line: the end of the line goes down
  const middle = type(`${words(5)} |${words(25)}\n`, 'x')
  assert.ok(middle.split('\n')[0].length <= 79 && middle.split('\n')[0].includes('x|'), middle)
})

test('roles, links and literals are not broken, nor a new line made markup', () => {
  const role = ':ref:`the guide of the installation <install>`'
  const text = `${'a '.repeat(28)}${role} more|\n`
  const lines = type(text, 'x').split('\n')
  assert.ok(lines.some(line => line.includes(role)), lines.join('\n'))
  const literal = `${'a '.repeat(30)}\`\`some long literal text\`\` end|\n`
  assert.ok(type(literal, 'x').includes('``some long literal text``'))
  // A line would start with '- ': broken before
  const dash = `${'a '.repeat(37)}b - c d|\n`
  for (const line of type(dash, 'x').split('\n').slice(1)) assert.ok(!/^\s*- /.test(line), line)
  // Headings and options are not wrapped
  assert.ok(!type(`${'T '.repeat(40)}|\n${'='.repeat(80)}\n`, 'x').split('\n')[0].endsWith(' '))
})

test('tab in a list item nests it, shift+tab takes it out', () => {
  const shift = (marked, step) => run(marked, (model, a) => shiftItem(model, a, step))
  const flat = '- Some thing\n- |Some thing\n- Some thing\n'
  const nested = '- Some thing\n\n  - |Some thing\n\n- Some thing\n'
  assert.equal(shift(flat, 1), nested)
  assert.equal(shift(nested, -1), flat)
  // Not the first item, nor an item that is not in another
  assert.equal(shift('- |a\n- b\n', 1), '- |a\n- b\n')
  assert.equal(shift('- a\n- |b\n', -1), '- a\n- |b\n')
  // From anywhere in the item, the caret stays in its text
  assert.equal(shift('- a\n- b|\n', 1), '- a\n\n  - b|\n')
  assert.equal(shift('- a\n- one\n  tw|o\n- c\n', 1), '- a\n\n  - one\n    tw|o\n\n- c\n')
  assert.equal(shift('- a\n\n  - one\n    tw|o\n\n- c\n', -1), '- a\n- one\n  tw|o\n- c\n')
  // Not from a directive that is in the item
  const inside = '- a\n- b\n\n  .. note::\n\n     Te|xt\n'
  assert.equal(shift(inside, 1), inside)

  const deep = [
    '-  ADI Kuiper Linux = a distribution with extra',
    '   goodies:',
    '',
    '   -  All drivers',
    '   -  Boot files for designs',
    '      targeting platforms, including:',
    '',
    '      -  Data acquisition boards',
    '      -  |Xilinx platforms: ZedBoard',
    '         and more',
    '      -  Intel/Altera platforms',
    '',
    '   -  LibIIO',
    ''
  ].join('\n')
  const deeper = deep.replace('      -  |Xilinx platforms: ZedBoard\n         and more\n',
    '\n         -  |Xilinx platforms: ZedBoard\n            and more\n\n')
  assert.equal(shift(deep, 1), deeper)
  assert.equal(shift(deeper, -1), deep)
  // The next one joins the nested list, without an empty line
  const two = shift(deeper.replace('|', '').replace('-  Intel', '-  |Intel'), 1)
  assert.ok(two.includes('         -  Xilinx platforms: ZedBoard\n            and more\n         -  |Intel/Altera platforms\n\n   -  LibIIO'), two)
  // Out of the middle of a list: the items after it go in it
  assert.equal(shift('- a\n\n  - b\n  - |c\n  - d\n\n- e\n', -1), '- a\n\n  - b\n\n- |c\n\n  - d\n\n- e\n')
  // Enumerated: the text is three columns in
  assert.equal(shift('#. a\n#. |b\n', 1), '#. a\n\n   #. |b\n')
  // In a directive
  assert.equal(shift('.. note::\n\n   * a\n   * |b\n', 1), '.. note::\n\n   * a\n\n     * |b\n')
})

test('enter on the empty line at the end of a directive leaves it', () => {
  let text = run('.. note::\n\n   Text|\n\nAfter\n', insertParagraph)
  assert.equal(text, '.. note::\n\n   Text\n\n   |\n\nAfter\n')
  text = run(text, insertParagraph)
  assert.equal(text, '.. note::\n\n   Text\n\n|\n\nAfter\n')
  // To the directive it is in
  text = run('.. tab-item:: a\n\n   .. note::\n\n      Text\n\n      |\n', insertParagraph)
  assert.equal(text, '.. tab-item:: a\n\n   .. note::\n\n      Text\n\n   |\n')
  assert.equal(run(text, insertParagraph), '.. tab-item:: a\n\n   .. note::\n\n      Text\n\n|\n')
  // Not from the middle of its content
  const middle = '.. note::\n\n   One\n\n   |\n\n   Two\n'
  assert.equal(run(middle, insertParagraph), middle)
})

test('backspace at the start of the content removes the directive', () => {
  assert.equal(run('Before\n\n.. note::\n\n   |Text\n   more\n\nAfter\n', deleteBackward), 'Before|\n\nAfter\n')
  assert.equal(run('Before\n\n.. note::\n\n   |\n\nAfter\n', deleteBackward), 'Before|\n\nAfter\n')
  assert.equal(run('Before\n\n.. collection:: T\n\n   |hdl:\n     - x\n\nAfter\n', deleteBackward), 'Before|\n\nAfter\n')
  // The one of the caret, not the ones around it
  assert.equal(run('.. tab-item:: a\n\n   One\n\n   .. note::\n\n      |Text\n', deleteBackward), '.. tab-item:: a\n\n   One|\n')
  // Not while the key repeats, nor from the second paragraph, nor from a list
  const held = 'Before\n\n.. note::\n\n   |Text\n'
  assert.equal(run(held, (m, a, b) => deleteBackward(m, a, b, { repeat: true })), held)
  assert.equal(run('.. note::\n\n   One\n\n   |Two\n', deleteBackward), '.. note::\n\n   One|Two\n')
  assert.equal(run('.. note::\n\n   * |a\n', deleteBackward), '.. note::\n\n   |a\n')
})

test('a label added to an indented heading is indented as it', () => {
  const source = '.. only:: html\n\n   Text.\n\n   Documentation\n   -------------\n'
  const model = modelOf(source)
  const find = block => block.kind === 'heading' ? block : (block.children ?? []).map(find).find(Boolean)
  const edit = addLabel(model, find(model.root))
  const out = source.slice(0, edit.start) + edit.text + source.slice(edit.end)
  assert.equal(out, '.. only:: html\n\n   Text.\n\n   .. _label:\n\n   Documentation\n   -------------\n')
  assert.equal(out.slice(edit.anchor, edit.caret), 'label')
  assert.equal(outline(modelOf(out).root).includes('target'), true)
})

test('tabs are added, filled and removed', () => {
  const add = model => addTab(model, model.root.children.find(b => b.name === 'tab-set'))
  const tabs = '.. tab-set::\n\n   .. tab-item:: pip|\n\n      one\n'
  assert.equal(run(tabs, add), '.. tab-set::\n\n   .. tab-item:: pip\n\n      one\n\n   .. tab-item::|\n')
  assert.equal(run(tabs + '\nAfter\n', add),
    '.. tab-set::\n\n   .. tab-item:: pip\n\n      one\n\n   .. tab-item::|\n\nAfter\n')
  assert.equal(run('.. tab-set::|\n', add), '.. tab-set::\n\n   .. tab-item::|\n')
  // The title, then the content
  let text = type('.. tab-set::\n\n   .. tab-item::|\n', 'uv')
  assert.equal(text, '.. tab-set::\n\n   .. tab-item:: uv|\n')
  text = run(text, insertParagraph)
  assert.equal(text, '.. tab-set::\n\n   .. tab-item:: uv\n\n      |\n')
  text = type(text, 'Text')
  assert.equal(text, '.. tab-set::\n\n   .. tab-item:: uv\n\n      Text|\n')
  // A new tab left empty, and an emptied tab, are removed
  assert.equal(run('.. tab-set::\n\n   .. tab-item:: a\n\n      x\n\n   .. tab-item::|\n', deleteBackward),
    '.. tab-set::\n\n   .. tab-item:: a\n\n      x|\n')
  assert.equal(run('.. tab-set::\n\n   .. tab-item:: a\n\n      x\n\n   .. tab-item:: |\n', deleteBackward),
    '.. tab-set::\n\n   .. tab-item:: a\n\n      x|\n')
})

test('code is edited without the indentation its lines share', () => {
  const code = '.. tab-set::\n\n   .. tab-item:: a\n\n      .. shell::\n\n         $ one|\n         $ two\n'
  assert.equal(type(code, '1'), code.replace('one|', 'one1|'))
  assert.equal(run(code, insertParagraph), code.replace('one|', 'one\n         |'))
  assert.equal(run(code.replace('one|', 'one').replace('$ two', '|$ two'), deleteBackward), code.replace('one|\n         ', 'one|'))
  assert.equal(run(code, deleteForward), code.replace('one|\n         ', 'one|'))
  // An empty line of the code
  const gap = '.. code-block:: c\n\n   a\n|\n   b\n'
  assert.equal(type(gap, 'x'), '.. code-block:: c\n\n   a\n   x|\n   b\n')
})

test('an emptied directive is removed with backspace', () => {
  // The content, then the empty line of the content, then the argument
  assert.equal(run('a\n\n.. code-block:: bash\n\n   l|\n\nb\n', deleteBackward), 'a\n\n.. code-block:: bash\n\n   |\n\nb\n')
  assert.equal(run('a\n\n.. code-block:: bash\n\n   |\n\nb\n', deleteBackward), 'a\n\n.. code-block:: bash|\n\nb\n')
  assert.equal(run('a\n\n.. code-block:: b|\n\nb\n', deleteBackward), 'a\n\n.. code-block:: |\n\nb\n')
  assert.equal(run('a\n\n.. code-block:: |\n\nb\n', deleteBackward), 'a|\n\nb\n')
  assert.equal(run('a\n\n.. code-block::|\n\nb\n', deleteBackward), 'a|\n\nb\n')
  assert.equal(run('a\n\n.. note::|\n\nb\n', deleteBackward), 'a|\n\nb\n')
  assert.equal(run('.. note::|\n', deleteBackward), '|')
  assert.equal(run('a\n\n.. code-block::|\n   :linenos:\n\n   \n\nb\n', deleteBackward), 'a|\n\nb\n')
  // Not while something is written in it
  assert.equal(run('.. code-block::|\n\n   ls\n', deleteBackward), '.. code-block::|\n\n   ls\n')
  assert.equal(run('.. note::\n\n   One\n\n   |Two\n', deleteBackward), '.. note::\n\n   One|Two\n')
})

test('typing a directive from an empty line', () => {
  let text = 'Para\n\n|\n'
  for (const char of '.. code-block::') text = type(text, char)
  assert.equal(text, 'Para\n\n.. code-block::|\n')
  text = type(type(text, 'c'), 'pp')
  assert.equal(text, 'Para\n\n.. code-block:: cpp|\n')
  text = run(text, insertParagraph)
  text = type(text, 'int a;')
  assert.equal(text, 'Para\n\n.. code-block:: cpp\n\n   int a;|\n')
})

test('code goes on after enter, and enter on its empty line leaves it', () => {
  let text = '.. code-block:: py\n\n   print(1)|\n\nAfter\n'
  text = run(text, insertParagraph)
  assert.equal(text, '.. code-block:: py\n\n   print(1)\n   |\n\nAfter\n')
  assert.equal(type(text, 'x'), '.. code-block:: py\n\n   print(1)\n   x|\n\nAfter\n')
  text = run(text, insertParagraph)
  assert.equal(text, '.. code-block:: py\n\n   print(1)\n|\n\nAfter\n')
  assert.equal(type(text, 'P'), '.. code-block:: py\n\n   print(1)\n\nP|\n\nAfter\n')
  assert.equal(run('.. code-block:: py\n\n   print(1)\n   |\n\nAfter\n', deleteBackward),
    '.. code-block:: py\n\n   print(1)|\n\nAfter\n')
  assert.equal(type('Text::\n\n   literal\n   |\n', 'x'), 'Text::\n\n   literal\n   x|\n')
})

test('typing after an empty directive fills it', () => {
  assert.equal(type('.. note::|\n', 'T'), '.. note::\n\n   T|\n')
  assert.equal(type('.. note::|\n\nnext\n', 'T'), '.. note::\n\n   T|\n\nnext\n')
  assert.equal(type('.. note::|\nnext\n', 'T'), '.. note::\n\n   T|\n\nnext\n')
  assert.equal(type('* a\n\n  .. tip::|\n', 'T'), '* a\n\n  .. tip::\n\n     T|\n')
  assert.equal(run('.. note::|\n', insertParagraph), '.. note::\n\n   |\n')
  assert.equal(type('.. image::|\n', 'a'), '.. image:: a|\n')
  assert.equal(type('.. image:: |\n', 'a'), '.. image:: a |\n'.replace('a |', 'a|'))
  assert.equal(type('.. note::\n\n   T|\n', 'x'), '.. note::\n\n   Tx|\n')
})

test('typing a role at the start of a line', () => {
  let text = '|'
  for (const char of ':ref:`guide`') text = type(text, char)
  assert.equal(text, ':ref:`guide`|\n')
  text = 'Para\n\n|\n'
  for (const char of ':ref:`gu') text = type(text, char)
  assert.equal(text, 'Para\n\n:ref:`gu|\n')
  assert.equal(run(text, deleteBackward), 'Para\n\n:ref:`g|\n')
  assert.equal(run(':ref:|`gu\n', deleteBackward), ':ref|`gu\n')
})

test('captions, options and labels stay on one line', () => {
  assert.equal(run('.. table:: Caption\n   :width: 5|0%\n', insertParagraph), '.. table:: Caption\n   :width: 5|0%\n')
  assert.equal(run('.. _la|bel:\n\nTitle\n=====\n', insertParagraph), '.. _la|bel:\n\nTitle\n=====\n')
  assert.equal(run('.. _label|:\n\nTitle\n=====\n', insertText, '-x'), '.. _label-x|:\n\nTitle\n=====\n')
  assert.equal(run('.. table:: Caption\n   :width: 50|%\n', insertText, '0'), '.. table:: Caption\n   :width: 500|%\n')
  assert.equal(run('.. table:: |Caption\n', deleteBackward), '.. table:: |Caption\n')
})

test('bold wraps the selection and unwraps it', () => {
  assert.equal(run('a [word] b\n', toggleInline, 'bold'), 'a **[word]** b\n')
  assert.equal(run('a **[word]** b\n', toggleInline, 'bold'), 'a [word] b\n')
  assert.equal(run('a **wo|rd** b\n', toggleInline, 'bold'), 'a wo|rd b\n')
  assert.equal(run('a [word] b\n', toggleInline, 'italic'), 'a *[word]* b\n')
  assert.equal(run('a [word] b\n', toggleInline, 'code'), 'a ``[word]`` b\n')
  assert.equal(run('a | b\n', toggleInline, 'bold'), 'a | b\n')
})

test('the level of a heading is set, text is made a heading and back', async () => {
  const { headingAt, setHeading } = await import('../adoc_gui/web/ops.js')
  const set = level => (model, a) => setHeading(model, a, level)
  const at = marked => {
    const found = headingAt(modelOf(marked.replace('|', '')), marked.indexOf('|'))
    return found && [found.level, found.max]
  }
  const doc = 'Title\n=====\n\nSub\n---\n\n'
  // Text takes the adornment of the level, a new level a new one
  assert.equal(run(`${doc}Te|xt\n`, set(2)), `${doc}Te|xt\n----\n`)
  assert.equal(run(`${doc}Te|xt\n`, set(1)), `${doc}Te|xt\n====\n`)
  assert.equal(run(`${doc}Te|xt\n`, set(3)), `${doc}Te|xt\n~~~~\n`)
  assert.equal(run('Te|xt\nmore\n', set(1)), 'Te|xt\nmore\n')
  assert.equal(run('Te|xt\n', set(1)), 'Te|xt\n====\n')
  // An empty line parts it from what follows
  assert.equal(run(`${doc}Te|xt\n\nMore\n`, set(2)), `${doc}Te|xt\n----\n\nMore\n`)
  // A heading changes its level, with the line above it when the level has one
  assert.equal(run('Title\n=====\n\nSu|b\n---\n', set(1)), 'Title\n=====\n\nSu|b\n===\n')
  assert.equal(run('=====\nTitle\n=====\n\nSub\n---\n\nTe|xt\n', set(1)), '=====\nTitle\n=====\n\nSub\n---\n\n====\nTe|xt\n====\n')
  assert.equal(run('A\n=\n\n=====\nTit|le\n=====\n', set(1)), 'A\n=\n\nTit|le\n=====\n')
  // The first heading is the first level
  assert.equal(run('=====\nTit|le\n=====\n\nSub\n---\n', set(2)), '=====\nTit|le\n=====\n\nSub\n---\n')
  // Back to text
  assert.equal(run('Title\n=====\n\nSu|b\n---\nText\n', set(0)), 'Title\n=====\n\nSu|b\n\nText\n')
  assert.equal(run('=====\nTit|le\n=====\n', set(0)), 'Tit|le\n')
  // The same level, or one that would skip a level: nothing
  assert.equal(run(`${doc}Te|xt\n`, set(4)), `${doc}Te|xt\n`)
  assert.equal(run('Title\n=====\n\nSu|b\n---\n', set(2)), 'Title\n=====\n\nSu|b\n---\n')
  // What can be a heading, and how deep
  assert.deepEqual(at('Te|xt\n'), [0, 1])
  assert.deepEqual(at(`${doc}Te|xt\n`), [0, 3])
  assert.deepEqual(at('Title\n=====\n\nTe|xt\n\nSub\n---\n'), [0, 2])
  assert.deepEqual(at('Title\n=====\n\nSu|b\n---\n'), [2, 2])
  assert.equal(at('* Te|xt\n'), undefined)
  assert.equal(at('.. note::\n\n   Te|xt\n'), undefined)
  assert.equal(at('Te|xt\nmore\n'), undefined)
})

test('a directive is left from the end of its content, to an empty line after it', async () => {
  const { leaveDirective } = await import('../adoc_gui/web/ops.js')
  const leave = model => leaveDirective(model, model.root.children[0])
  assert.equal(run('.. code-block:: py\n\n   print(1)|\n\nAfter\n', leave), '.. code-block:: py\n\n   print(1)\n\n|\n\nAfter\n')
  // The empty lines at the end of the code are not kept
  assert.equal(run('.. code-block:: py\n\n   print(1)|\n\n\n', leave), '.. code-block:: py\n\n   print(1)\n\n|\n')
  assert.equal(run('.. code-block:: py\n\n   print(1)|\n   \nAfter\n', leave), '.. code-block:: py\n\n   print(1)\n\n|\n\nAfter\n')
  assert.equal(run('.. code-block:: py\n\n   print(1)|', leave), '.. code-block:: py\n\n   print(1)\n\n|\n')
  // To the directive it is in
  const inner = model => leaveDirective(model, model.root.children[0].children[0])
  assert.equal(run('.. note::\n\n   .. shell::\n\n      $ls|\n\n   More\n', inner), '.. note::\n\n   .. shell::\n\n      $ls\n\n   |\n\n   More\n')
  // What is typed there is a paragraph after the directive
  assert.equal(type('.. code-block:: py\n\n   print(1)\n\n|\n\nAfter\n', 'x'), '.. code-block:: py\n\n   print(1)\n\nx|\n\nAfter\n')
})

test('backspace right after a directive removes the directive', () => {
  assert.equal(run('Before\n\n.. note::\n\n   Text\n\n|After\n', deleteBackward), 'Before\n\n|After\n')
  assert.equal(run('.. code-block:: py\n   :linenos:\n\n   print(1)\n\n|After\n', deleteBackward), '\n|After\n')
  assert.equal(run('Before\n\n.. image:: a.png\n   :width: 5\n\n|After\n', deleteBackward), 'Before\n\n|After\n')
  // On the empty line after it, as after leaving it
  assert.equal(run('Before\n\n.. code-block:: py\n\n   print(1)\n\n|\n\nAfter\n', deleteBackward), 'Before\n\n|\n\nAfter\n')
  // With what is in it
  assert.equal(run('.. note::\n\n   .. shell::\n\n      $ls\n\n|After\n', deleteBackward), '\n|After\n')
  // In a directive: the one before, not the one around
  assert.equal(run('.. note::\n\n   .. shell::\n\n      $ls\n\n   |More\n', deleteBackward), '.. note::\n\n   |More\n')
  // Not while the key is held down, nor from further in the text
  const held = (model, a, b) => deleteBackward(model, a, b, { repeat: true })
  assert.notEqual(run('Before\n\n.. note::\n\n   Text\n\n|After\n', held), 'Before\n\n|After\n')
  assert.equal(run('.. note::\n\n   Text\n\nA|fter\n', deleteBackward), '.. note::\n\n   Text\n\n|fter\n')
  assert.equal(run('.. note::\n\n   Text\n\n*a* |b\n', deleteBackward), '.. note::\n\n   Text\n\n*a*|b\n')
  // Not across a list: the item after the one of the directive
  const list = '* one\n\n  .. note::\n\n     Text\n\n* |two\n'
  assert.notEqual(run(list, deleteBackward), '* one\n\n* |two\n')
  // A paragraph after a paragraph is as before
  assert.equal(run('One\n\n|Two\n', deleteBackward), 'One|Two\n')
})
