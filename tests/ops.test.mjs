import { test } from 'node:test'
import assert from 'node:assert/strict'
import { run } from './helper.mjs'
import { insertText, deleteBackward, deleteForward, insertParagraph, toggleInline } from '../web/ops.js'

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
  assert.equal(run('.. note::\n\n   |text\n', deleteBackward), '.. note::\n\n   |text\n')
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

test('captions, options and labels stay on one line', () => {
  assert.equal(run('.. table:: Cap|tion\n   :width: 50%\n', insertParagraph), '.. table:: Cap|tion\n   :width: 50%\n')
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
