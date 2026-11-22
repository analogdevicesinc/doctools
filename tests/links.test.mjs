import { test } from 'node:test'
import assert from 'node:assert/strict'
import { run, modelOf } from './helper.mjs'
import { linkOf, linkText, linkAddress, isAddress } from '../adoc_gui/web/links.js'
import { setLink, linkAt } from '../adoc_gui/web/ops.js'

const links = source => {
  const model = modelOf(source)
  return model.leaves.filter(l => l.kind === 'link').map(l => {
    const { kind, text, target, anonymous } = linkOf(model, l)
    return [kind, text, target, anonymous]
  })
}

test('the links that hold their address, and the addresses', () => {
  assert.deepEqual(links('See `title <https://a.b/c>`_ and `two words <https://a.b>`__ here.\n'), [
    ['embedded', 'title', 'https://a.b/c', false], ['embedded', 'two words', 'https://a.b', true]])
  assert.deepEqual(links('`<https://only.url>`_ and `a <rel/path.html>`__\n'), [
    ['embedded', '', 'https://only.url', false], ['embedded', 'a', 'rel/path.html', true]])
  // An address broken on two lines is one address
  assert.deepEqual(links('`long title\n<https://a.b/\nc>`__\n'), [['embedded', 'long title', 'https://a.b/c', true]])
  assert.deepEqual(links('See https://www.docutils.org/docs/ref.html and mail@x.org.\n'), [
    ['address', 'https://www.docutils.org/docs/ref.html', 'https://www.docutils.org/docs/ref.html', true],
    ['address', 'mail@x.org', 'mailto:mail@x.org', true]])
})

test('the links whose address is elsewhere in the document', () => {
  const source = 'See `Named Ref`_ and word_ and `anon`__ and `in <https://in.org>`__ and anon__ and `none`_.\n\n' +
    '.. _named   ref: https://n.org\n.. _word: https://w.org\n\n__ https://anon.org\n.. __: https://anon2.org\n'
  assert.deepEqual(links(source), [
    ['named', 'Named Ref', 'https://n.org', false], ['named', 'word', 'https://w.org', false],
    // In their order: the one that holds its address does not take one
    ['anonymous', 'anon', 'https://anon.org', true], ['embedded', 'in', 'https://in.org', true],
    ['anonymous', 'anon', 'https://anon2.org', true], ['named', 'none', undefined, false]])
  const model = modelOf(source)
  const named = linkOf(model, model.leaves.find(l => l.kind === 'link'))
  assert.equal(source.slice(named.at, named.at + 14), '.. _named   re')
})

test('a link as it is written, and where it leads', () => {
  assert.equal(linkText('the site', 'https://a.b'), '`the site <https://a.b>`__')
  assert.equal(linkText('the site', 'https://a.b', false), '`the site <https://a.b>`_')
  assert.equal(linkText('', 'https://a.b'), 'https://a.b')
  assert.equal(linkText('https://a.b', ' https://a.b '), 'https://a.b')
  assert.equal(linkText('', 'path/page.html'), '`<path/page.html>`__')
  assert.equal(linkText('a `b` <c>', 'https://a.b'), '`a b c <https://a.b>`__')
  assert.equal(isAddress('https://a.b/c?d=e'), true)
  assert.equal(isAddress('not an address'), false)
  assert.equal(linkAddress('https://a.b'), 'https://a.b')
  assert.equal(linkAddress('www.a.b'), 'https://www.a.b')
  assert.equal(linkAddress('mailto:a@b.c'), 'mailto:a@b.c')
  assert.equal(linkAddress('path/page.html'), undefined)
  assert.equal(linkAddress(undefined), undefined)
})

test('a link is made, changed and removed', () => {
  const set = (text, target) => (model, a, b) => setLink(model, a, b, text, target)
  // Around the selection, anonymous: two links can have the same text
  assert.equal(run('See [the site] now\n', set('the site', 'https://a.b')), 'See `the site <https://a.b>`__| now\n')
  assert.equal(run('See | now\n', set('here', 'https://a.b')), 'See `here <https://a.b>`__| now\n')
  assert.equal(run('See | now\n', set('', 'https://a.b')), 'See https://a.b| now\n')
  assert.equal(run('See[ the site ]now\n', set('the site', 'https://a.b')), 'See `the site <https://a.b>`__| now\n')
  // Parted from the letters around it
  assert.equal(run('|Plain words\n', set('Docs', 'https://a.b')), '`Docs <https://a.b>`__| Plain words\n')
  assert.equal(run('Plain|, words\n', set('Docs', 'https://a.b')), 'Plain `Docs <https://a.b>`__|, words\n')
  assert.equal(run('a[b]c\n', set('b', 'https://a.b')), 'a `b <https://a.b>`__| c\n')
  // The one of the caret: its text, its address; it stays named when it is
  assert.equal(run('See `the s|ite <https://a.b>`_ now\n', set('a site', 'https://c.d')), 'See `a site <https://c.d>`_| now\n')
  assert.equal(run('See `the site <https://a.b>`__| now\n', set('the site', 'https://c.d')), 'See `the site <https://c.d>`__| now\n')
  assert.equal(run('See https://a.|b now\n', set('the site', 'https://a.b')), 'See `the site <https://a.b>`__| now\n')
  // Without an address it is text again
  assert.equal(run('See `the s|ite <https://a.b>`__ now\n', set('the site', '')), 'See the site| now\n')
  assert.equal(run('See | now\n', set('text', '')), 'See | now\n')
  // Not the ones whose address is elsewhere, nor over several lines
  assert.equal(run('See `na|med`_ now\n\n.. _named: https://a.b\n', set('x', 'https://c.d')), 'See `na|med`_ now\n\n.. _named: https://a.b\n')
  assert.equal(run('[One\nTwo]\n', set('x', 'https://c.d')), '[One\nTwo]\n')
  // What it starts from
  const at = marked => {
    const a = marked.indexOf('|')
    const found = linkAt(modelOf(marked.replace('|', '')), a, a)
    return [found.link?.kind, found.text]
  }
  assert.deepEqual(at('See `the s|ite <https://a.b>`_ now\n'), ['embedded', 'the site'])
  assert.deepEqual(at('See https://a.|b now\n'), ['address', ''])
  assert.deepEqual(at('See | now\n'), [undefined, ''])
})
