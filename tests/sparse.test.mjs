import { test } from 'node:test'
import assert from 'node:assert/strict'
import { SparseSelection } from '../adoc_gui/web/sparse.js'

test('selection states', () => {
  const s = new SparseSelection(['docs/guide'])
  assert.equal(s.stateOf('docs/guide'), 'all')
  assert.equal(s.stateOf('docs/guide/sub'), 'all')
  assert.equal(s.stateOf('docs'), 'some')
  assert.equal(s.stateOf('docs/reference'), 'none')
  assert.equal(s.stateOf('docs/guide2'), 'none')
})

test('toggle replaces overlapping selections', () => {
  const s = new SparseSelection(['docs/guide/sub', 'docs/reference'])
  s.toggle('docs/guide')
  assert.deepEqual(s.toArray(), ['docs/guide', 'docs/reference'])
  s.toggle('docs')
  assert.deepEqual(s.toArray(), ['docs'])
  s.toggle('docs')
  assert.deepEqual(s.toArray(), [])
})

test('taking a folder out of a selected one keeps its siblings', () => {
  const tree = { docs: ['docs/guide', 'docs/reference', 'docs/tools'], 'docs/guide': ['docs/guide/a', 'docs/guide/b'] }
  const s = new SparseSelection(['docs'])
  s.toggle('docs/guide/a', parent => tree[parent] ?? [])
  assert.deepEqual(s.toArray(), ['docs/guide/b', 'docs/reference', 'docs/tools'])
  assert.equal(s.stateOf('docs/guide/a'), 'none')
  assert.equal(s.stateOf('docs/guide'), 'some')
})

test('the path of a file from what is typed for it', async () => {
  const { filePath, folderOf } = await import('../adoc_gui/web/nav.js')
  assert.equal(filePath('', 'page'), 'page.rst')
  assert.equal(filePath('guide', 'page.rst'), 'guide/page.rst')
  assert.equal(filePath('guide', ' sub/page '), 'guide/sub/page.rst')
  assert.equal(filePath('', '/a\\b.RST/'), 'a/b.RST')
  assert.equal(filePath('guide', '  '), undefined)
  assert.equal(folderOf('guide/sub/page.rst'), 'guide/sub')
  assert.equal(folderOf('page.rst'), '')
})
