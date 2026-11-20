import test from 'node:test'
import assert from 'node:assert/strict'
import { modelOf } from './helper.mjs'
import { proseOf, sourceRange } from '../adoc_gui/web/grammar.js'

const source = 'This are a **bold** test with ``code``\nand :ref:`a <b>` here.\n'
const model = modelOf(source)
const prose = proseOf(model, model.root.children[0])
const range = word => {
  const at = prose.text.indexOf(word)
  const r = sourceRange(prose, at, word.length)
  return r && source.slice(r.s, r.e)
}

test('the prose of a block is its text, without markup', () => {
  assert.equal(prose.text, 'This are a bold test with code and a here.')
})

test('a mistake in the prose maps to the source', () => {
  assert.equal(range('are'), 'are')
  assert.equal(range('bold'), 'bold')
  assert.equal(range('code and'), undefined)
  assert.equal(range('with code'), undefined)
  assert.equal(range('a bold'), undefined)
  // Across the end of a line: the newline is in the range
  assert.equal(range('test with'), 'test with')
  const model2 = modelOf('one two\nthree four\n')
  const prose2 = proseOf(model2, model2.root.children[0])
  const r = sourceRange(prose2, prose2.text.indexOf('two three'), 9)
  assert.equal(model2.source.slice(r.s, r.e), 'two\nthree')
})
