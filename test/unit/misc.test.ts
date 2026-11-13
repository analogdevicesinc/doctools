import { test } from 'node:test'
import * as assert from 'node:assert/strict'
import { parseWarningLine, stripAnsi } from '../../src/sphinx-warnings'
import { compareVersions } from '../../src/version'
import { SparseSelection } from '../../src/sparse-state'

test('parse sphinx warnings', () => {
  assert.deepEqual(
    parseWarningLine("/docs/reference/index.rst:9: WARNING: undefined label: 'x' [ref.ref]"),
    { file: '/docs/reference/index.rst', line: 9, message: "undefined label: 'x' [ref.ref]", severity: 'warning' }
  )
  assert.deepEqual(
    parseWarningLine('/docs/a.rst:3: ERROR: Unknown directive type "foo".'),
    { file: '/docs/a.rst', line: 3, message: 'Unknown directive type "foo".', severity: 'error' }
  )
  assert.deepEqual(
    parseWarningLine("/docs/a.rst: WARNING: document isn't included in any toctree"),
    { file: '/docs/a.rst', line: 1, message: "document isn't included in any toctree", severity: 'warning' }
  )
  assert.deepEqual(
    parseWarningLine('/src/mod.py:docstring of mod.func:4: WARNING: Unexpected indentation.'),
    { file: '/src/mod.py', line: 4, message: 'Unexpected indentation.', severity: 'warning' }
  )
  assert.deepEqual(
    parseWarningLine('\x1b[91m/docs/a.rst:7: WARNING: colored\x1b[39;49;00m'),
    { file: '/docs/a.rst', line: 7, message: 'colored', severity: 'warning' }
  )
  assert.deepEqual(
    parseWarningLine('C:\\docs\\a.rst:7: WARNING: windows'),
    { file: 'C:\\docs\\a.rst', line: 7, message: 'windows', severity: 'warning' }
  )
  assert.equal(parseWarningLine('building [html]: targets for 3 source files'), null)
  assert.equal(parseWarningLine('WARNING: no file'), null)
})

test('strip ansi', () => {
  assert.equal(stripAnsi('\x1b[31mred\x1b[0m'), 'red')
})

test('compare versions', () => {
  assert.equal(compareVersions('0.4.40', '0.4.43'), -1)
  assert.equal(compareVersions('0.5.2', '0.4.43'), 1)
  assert.equal(compareVersions('1.0', '1.0.0'), 0)
  assert.equal(compareVersions('0.4.40', '0.4.40.dev1'), 0)
  assert.equal(compareVersions('0.5.0rc1', '0.5.0'), 0)
})

test('sparse selection states', () => {
  const s = new SparseSelection(['docs/guide'])
  assert.equal(s.stateOf('docs/guide'), 'all')
  assert.equal(s.stateOf('docs/guide/sub'), 'all')
  assert.equal(s.stateOf('docs'), 'some')
  assert.equal(s.stateOf('docs/reference'), 'none')
  assert.equal(s.stateOf('docs/guide2'), 'none')
})

test('sparse toggle replaces overlapping selections', () => {
  const s = new SparseSelection(['docs/guide/sub', 'docs/reference'])
  s.toggle('docs/guide')
  assert.deepEqual(s.toArray().sort(), ['docs/guide', 'docs/reference'])
  s.toggle('docs')
  assert.deepEqual(s.toArray(), ['docs'])
  s.toggle('docs')
  assert.deepEqual(s.toArray(), [])
})

test('sparse toggle of a child of a selected folder keeps its siblings', () => {
  const tree: Record<string, string[]> = {
    'docs': ['docs/guide', 'docs/reference', 'docs/tools'],
    'docs/guide': ['docs/guide/a', 'docs/guide/b']
  }
  const s = new SparseSelection(['docs'])
  s.toggle('docs/guide/a', parent => tree[parent] ?? [])
  assert.deepEqual(s.toArray().sort(), ['docs/guide/b', 'docs/reference', 'docs/tools'])
  assert.equal(s.stateOf('docs/guide/a'), 'none')
  assert.equal(s.stateOf('docs/guide'), 'some')
})

test('sparse prune removes missing paths', () => {
  const s = new SparseSelection(['docs/guide', 'docs/gone'])
  assert.equal(s.prune(p => p !== 'docs/gone'), true)
  assert.deepEqual(s.toArray(), ['docs/guide'])
  assert.equal(s.prune(() => true), false)
})

test('sparse selection with windows separators', () => {
  const s = new SparseSelection(['docs\\guide'], '\\')
  assert.equal(s.stateOf('docs\\guide\\sub'), 'all')
  assert.equal(s.stateOf('docs'), 'some')
})
