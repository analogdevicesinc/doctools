import { test } from 'node:test'
import assert from 'node:assert/strict'
import { directiveSpec, takesOptions, optionSpec, optionHint, optionChoices, FLAG } from '../adoc_gui/web/directives.js'
import { modelOf } from './helper.mjs'

test('what a directive takes: an argument, options, content', () => {
  assert.deepEqual(directiveSpec('image'), { ...directiveSpec('image'), argument: 'path', content: false, card: false })
  assert.deepEqual(directiveSpec('note'), { ...directiveSpec('note'), argument: false, content: 'rst', card: true })
  assert.equal(directiveSpec('code-block').content, 'code')
  // Not known: an argument, any option, its content as it is written
  assert.deepEqual(directiveSpec('unknown'), { argument: 'argument', options: undefined, content: 'code', card: false })
  assert.equal(directiveSpec('toString').argument, 'argument')
  assert.equal(takesOptions('unknown'), true)
  assert.equal(takesOptions('figure'), true)
  assert.equal(takesOptions('tab-item'), false)
})

test('an option is a flag, takes a value, or one of a list', () => {
  assert.equal(optionSpec('code-block', 'linenos'), FLAG)
  assert.equal(optionHint('code-block', 'linenos'), '')
  assert.equal(optionHint('code-block', 'caption'), 'text')
  assert.equal(optionHint('figure', 'align'), 'left | center | right')
  assert.equal(optionHint('figure', 'other'), 'value')
  assert.equal(optionHint('unknown', 'other'), 'value')
})

test('the names and the values of the options are chosen', () => {
  const names = (...args) => optionChoices(...args).map(item => item.text)
  assert.deepEqual(names('clear-content', 'name'), ['side', 'break'])
  assert.deepEqual(optionChoices('clear-content', 'name')[1], { label: 'break', text: 'break', detail: 'flag' })
  // Not the ones it has, but for the one of the caret
  assert.deepEqual(names('clear-content', 'name', { used: ['side'] }), ['break'])
  assert.deepEqual(names('clear-content', 'name', { used: ['side', 'option'], option: 'option', typed: 'b' }), ['break'])
  assert.deepEqual(names('figure', 'name', { typed: 'fig' }), ['figwidth', 'figclass'])
  // Nothing when it is written, or not known
  assert.deepEqual(names('figure', 'name', { typed: 'alt' }), [])
  assert.deepEqual(names('unknown', 'name'), [])
  assert.deepEqual(names('video', 'value', { option: 'align' }), ['left', 'center', 'right'])
  assert.deepEqual(names('video', 'value', { option: 'align', typed: ' c' }), ['center'])
  assert.deepEqual(names('video', 'value', { option: 'align', typed: 'center' }), [])
  assert.deepEqual(names('figure', 'value', { option: 'width' }), [])
})

test('the options of a directive know what they are', () => {
  const directive = modelOf('.. code-block:: c\n   :linenos:\n   :caption:\n   :other: 1\n\n   x\n').root.children[0]
  const [linenos, caption, other] = directive.children.find(c => c.kind === 'options').children
  assert.equal(directive.takesOptions, true)
  assert.deepEqual([linenos.flag, linenos.hint], [true, undefined])
  assert.deepEqual([caption.flag, caption.hint, caption.empty], [undefined, 'text', true])
  assert.deepEqual([other.flag, other.hint], [undefined, 'value'])
  assert.equal(modelOf('.. tab-set::\n\n   .. tab-item:: A\n\n      x\n').root.children[0].takesOptions, false)
})
