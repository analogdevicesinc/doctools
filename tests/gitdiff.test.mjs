import { test } from 'node:test'
import assert from 'node:assert/strict'
import { lineChanges } from '../adoc_gui/web/gitdiff.js'

test('the lines that changed since the commit', () => {
  const head = 'a\nb\nc\nd\n'
  assert.deepEqual(lineChanges(head, head), { added: [], changed: [], deleted: [] })
  assert.deepEqual(lineChanges(head, 'a\nB\nc\nd\n'), { added: [], changed: [1], deleted: [] })
  assert.deepEqual(lineChanges(head, 'a\nb\nnew\nc\nd\n'), { added: [2], changed: [], deleted: [] })
  assert.deepEqual(lineChanges(head, 'a\nc\nd\n'), { added: [], changed: [], deleted: [0] })
  assert.deepEqual(lineChanges(head, 'b\nc\nd\n'), { added: [], changed: [], deleted: [-1] })
  assert.deepEqual(lineChanges(head, 'a\nX\nY\nZ\nd\n'), { added: [3], changed: [1, 2], deleted: [] })
  assert.deepEqual(lineChanges('', 'x\n'), { added: [0], changed: [], deleted: [] })
})
