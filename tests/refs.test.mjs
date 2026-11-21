import { test } from 'node:test'
import assert from 'node:assert/strict'
import { orderRoles, searchTargets, referenceText, referenceQuestion, pageOf } from '../adoc_gui/web/refs.js'

test('ref is the first role, then doc', () => {
  const names = types => orderRoles(types.map(name => ({ name }))).map(type => type.name)
  assert.deepEqual(names(['term', 'doc', 'py:func', 'ref', 'confval']), ['ref', 'doc', 'confval', 'py:func', 'term'])
  assert.deepEqual(names(['doc', 'term']), ['doc', 'term'])
})

test('the targets are searched by name, title and page', () => {
  const list = [
    { name: 'deploy-local', display: 'Local', uri: 'deploy#deploy-local' },
    { name: 'install', display: 'Installing', uri: 'install#install' },
    { name: 'local-install', display: 'A local install', uri: 'install#local-install' },
    { name: 42 }
  ]
  const names = query => searchTargets(list, query).map(entry => entry.name)
  assert.deepEqual(names(''), ['deploy-local', 'install', 'local-install', 42])
  assert.deepEqual(names('local'), ['deploy-local', 'local-install'])
  assert.deepEqual(names('Install'), ['install', 'local-install'])
  assert.deepEqual(names('install local'), ['local-install'])
  assert.deepEqual(names('deploy'), ['deploy-local'])
  assert.deepEqual(names('nothing'), [])
  assert.equal(pageOf('deploy#deploy-local'), 'deploy')
})

test('the role written for a target', () => {
  assert.equal(referenceText('', 'ref', 'install'), ':ref:`install`')
  assert.equal(referenceText('', 'ref', 'install', 'how to\n  install'), ':ref:`how to install <install>`')
  assert.equal(referenceText('sphinx', 'ref', 'any-role'), ':external+sphinx:ref:`any-role`')
  assert.equal(referenceText('sphinx', 'py:func', 'a.b', 'the `b`'), ':external+sphinx:py:func:`the b <a.b>`')
  // A page of the project, from the top of the documentation
  assert.equal(referenceText('', 'doc', 'guide/install'), ':doc:`/guide/install`')
  assert.equal(referenceText('sphinx', 'doc', 'usage/index'), ':external+sphinx:doc:`usage/index`')
  assert.deepEqual(referenceQuestion('sphinx', 'ref', 'any-role'), { role: 'external+sphinx:ref', target: 'any-role' })
  assert.deepEqual(referenceQuestion('', 'doc', 'install'), { role: 'doc', target: 'install' })
})

test('the types shown, and the ones that are open', async () => {
  const { filterRoles, filterLabel, roleOpen } = await import('../adoc_gui/web/refs.js')
  const types = ['term', 'doc', 'ref'].map(name => ({ name }))
  const names = filter => filterRoles(types, new Set(filter)).map(type => type.name)
  assert.deepEqual(names([]), ['ref', 'doc', 'term'])
  assert.deepEqual(names(['term', 'ref', 'py:func']), ['ref', 'term'])
  assert.equal(filterLabel(new Set()), 'All types')
  assert.equal(filterLabel(new Set(['doc', 'ref'])), 'ref, doc')
  assert.equal(filterLabel(new Set(['doc', 'ref', 'term'])), '3 types')
  // ref is open until it is closed, the others closed until they are opened
  assert.equal(roleOpen(new Set(), '', 'ref'), true)
  assert.equal(roleOpen(new Set(), 'sphinx', 'doc'), false)
  assert.equal(roleOpen(new Set(['|ref', 'sphinx|doc']), '', 'ref'), false)
  assert.equal(roleOpen(new Set(['|ref', 'sphinx|doc']), 'sphinx', 'doc'), true)
  assert.equal(roleOpen(new Set(['|ref']), 'sphinx', 'ref'), true)
})
