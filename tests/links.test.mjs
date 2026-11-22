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

test('the substitutions of a document, and what is typed in them', async () => {
  const { substitutionOf, substitutionNames } = await import('../adoc_gui/web/subs.js')
  const { addSubstitution, addDefinition, insertText, deleteBackward, insertParagraph, applyEdit } = await import('../adoc_gui/web/ops.js')
  const { namedTarget } = await import('../adoc_gui/web/links.js')
  const { outline } = await import('./helper.mjs')
  const source = 'Yes, |reST| is long. Try |Python|_ and |logo|.\n\n.. |reST| replace:: reStructuredText\n' +
    '.. |Python| replace:: Python, *the* best\n.. _Python: https://www.python.org/\n.. |logo| image:: logo.png\n'
  const model = modelOf(source)
  assert.equal(outline(model.root), 'document(paragraph substitution:reST(value) substitution:Python(value) raw raw)')
  assert.deepEqual(model.leaves.filter(l => l.kind === 'substitution').map(l => [source.slice(l.s, l.e), l.linked]),
    [['reST', false], ['Python', true], ['logo', false]])
  // The text that takes its place has its inline markup
  assert.deepEqual(model.leaves.filter(l => l.block.kind === 'value').map(l => `${l.kind}:${source.slice(l.s, l.e)}`),
    ['text:reStructuredText', 'text:Python, ', 'emphasis:the', 'text: best'])
  assert.deepEqual(substitutionOf(source, 'reST'), { kind: 'replace', text: 'reStructuredText', at: source.indexOf('.. |reST|') })
  assert.equal(substitutionOf(source, 'rest').text, 'reStructuredText')
  assert.equal(substitutionOf(source, 'logo').kind, 'image')
  assert.equal(substitutionOf(source, 'release').kind, 'sphinx')
  assert.equal(substitutionOf(source, 'nope'), undefined)
  assert.equal(namedTarget(model, 'Python').target, 'https://www.python.org/')
  assert.deepEqual(substitutionNames(source).map(item => item.name), ['reST', 'Python', 'logo', 'release', 'version', 'today'])

  // '^' is the caret: the bars are part of the text here
  const at = (marked, op, ...args) => {
    const a = marked.indexOf('^')
    const text = marked.replace('^', '')
    const edit = op(modelOf(text), a, a, ...args)
    if (!edit) return marked
    const out = applyEdit(text, edit)
    return out.slice(0, edit.caret) + '^' + out.slice(edit.caret)
  }
  assert.equal(at('.. |reS^T| replace:: x\n', insertText, 'u'), '.. |reSu^T| replace:: x\n')
  assert.equal(at('.. |e| replace::^\n', insertText, 'x'), '.. |e| replace:: x^\n')
  assert.equal(at('.. |e| replace:: te^xt\n', insertParagraph), '.. |e| replace:: te^xt\n')
  assert.equal(at('See |reS^T| now\n', insertText, 'x'), 'See |reSx^T| now\n')
  // Parted from the letter after it, removed with its last character
  assert.equal(at('See |r|^ now\n', insertText, 'a'), 'See |r| a^ now\n')
  assert.equal(at('See |r|_^ now\n', insertText, 'a'), 'See |r|_ a^ now\n')
  assert.equal(at('See |r^| now\n', deleteBackward), 'See ^ now\n')
  assert.equal(at('Text\n\n.. |r^| replace:: x\n.. |s| replace:: y\n', deleteBackward), 'Text\n\n^.. |s| replace:: y\n')
  // Added at the caret, and defined after the block
  assert.equal(at('See ^now\n', (m, a, b) => addSubstitution(m, a, b, 'reST')), 'See |reST|^ now\n')
  const made = addDefinition(modelOf('Text\n'), 2)
  const out = applyEdit('Text\n', made)
  assert.equal(out, 'Text\n\n.. |name| replace:: text\n')
  assert.equal(out.slice(made.anchor, made.caret), 'name')
})
