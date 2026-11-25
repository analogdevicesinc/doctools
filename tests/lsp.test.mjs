import { test } from 'node:test'
import assert from 'node:assert/strict'
import { completionAt, matching, roleQuestion } from '../adoc_gui/web/lsp.js'

const at = (prefix, suffix) => {
  const context = completionAt(prefix, suffix)
  return context && { request: context.request, partial: context.partial, skip: context.skip }
}

test('what is completed at the caret', () => {
  assert.deepEqual(at('See :'), { request: { completion: 'roles' }, partial: '', skip: 0 })
  assert.deepEqual(at(':re'), { request: { completion: 'roles' }, partial: 're', skip: 0 })
  assert.deepEqual(at('See :ref:`gui'), { request: { completion: 'local_targets', role: 'ref' }, partial: 'gui', skip: 0 })
  assert.deepEqual(at('See :ref:`gui', '` more'), { request: { completion: 'local_targets', role: 'ref' }, partial: 'gui', skip: 1 })
  assert.deepEqual(at(':doc:`the page <ref', '>`'), { request: { completion: 'local_targets', role: 'doc' }, partial: 'ref', skip: 2 })
  assert.deepEqual(at(':external+'), { request: { completion: 'inventory' }, partial: '', skip: 0 })
  assert.deepEqual(at(':external+sphinx:re'), { request: { completion: 'inventory_types', inventory: 'sphinx' }, partial: 're', skip: 0 })
  assert.deepEqual(at(':external+sphinx:ref:`au'),
    { request: { completion: 'inventory_targets', inventory: 'sphinx', role: 'ref' }, partial: 'au', skip: 0 })
  assert.deepEqual(at('See :py:fu'), { request: { completion: 'roles' }, partial: 'py:fu', skip: 0 })
  assert.deepEqual(at('See :py:func:`sphinx.app'), { request: { completion: 'local_targets', role: 'py:func' }, partial: 'sphinx.app', skip: 0 })
  assert.deepEqual(at('   .. no'), { request: { completion: 'directives' }, partial: 'no', skip: 0 })
  assert.equal(at('.. note::'), undefined)
  assert.equal(at('plain text'), undefined)
  assert.equal(at('a:b'), undefined)
  assert.equal(at(':ref:`guide` and'), undefined)
})

test('the entries are filtered by what is typed, and get their suffix', () => {
  const list = [{ name: 'numref' }, { name: 'ref' }, { name: 'regexp' }, { name: 'external+', partial: true }, { name: 'doc' }]
  const labels = prefix => matching(list, completionAt(prefix)).map(item => item.text)
  assert.deepEqual(labels(':re'), ['ref:`', 'regexp:`', 'numref:`'])
  assert.deepEqual(labels(':ex'), ['external+', 'regexp:`'])
  assert.deepEqual(labels(':zz'), [])
  const targets = matching([{ name: 'guide', display: 'Guide' }, { name: 'section-1' }], completionAt(':ref:`the <'))
  assert.deepEqual(targets.map(({ label, text, detail }) => ({ label, text, detail })), [
    { label: 'guide>`', text: 'guide>`', detail: 'Guide' }, { label: 'section-1>`', text: 'section-1>`', detail: '' }
  ])
  assert.deepEqual(matching([{ name: 'note' }], completionAt('.. n')).map(i => i.text), ['note::'])
})

test('the question about a role', () => {
  assert.deepEqual(roleQuestion(':ref:`guide`'), { role: 'ref', target: 'guide' })
  assert.deepEqual(roleQuestion(':doc:`The page </a/b>`'), { role: 'doc', title: 'The page', target: '/a/b' })
  assert.deepEqual(roleQuestion(':external+sphinx:ref:`x`'), { role: 'external+sphinx:ref', target: 'x' })
  assert.equal(roleQuestion('`plain`'), undefined)
})

test('the targets of a reference have a preview, a site does not', async () => {
  const { hasPreview, shortTarget } = await import('../adoc_gui/web/lsp.js')
  const list = [{ name: 'install', display: 'Installing', uri: 'install#install' }]
  const [local] = matching(list, completionAt('See :ref:`ins'))
  assert.deepEqual(local.preview, { role: 'ref', target: 'install' })
  assert.equal(local.uri, 'install#install')
  const [external] = matching(list, completionAt(':external+sphinx:ref:`a title <ins'))
  assert.deepEqual(external.preview, { role: 'external+sphinx:ref', target: 'install' })
  assert.equal(matching([{ name: 'ref' }], completionAt(':re'))[0].preview, undefined)

  assert.equal(hasPreview('ref', 'install#install'), true)
  assert.equal(hasPreview('external+sphinx:ref', 'https://www.sphinx-doc.org/a.html#b'), true)
  assert.equal(hasPreview('git-doctools', 'https://github.com/analogdevicesinc/doctools'), false)
  // Not built, found in the inventory of the published pages
  assert.equal(hasPreview('ref', 'https://example.com/doctools/install.html#install', 'doctools'), true)
  assert.equal(shortTarget('https://www.sphinx-doc.org/a.html#b'), 'sphinx-doc.org/a.html#b')
  assert.equal(shortTarget('install#install'), 'install#install')
})
