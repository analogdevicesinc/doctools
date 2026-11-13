import { test, before } from 'node:test'
import * as assert from 'node:assert/strict'
import * as path from 'node:path'
import { Parser, Language } from 'web-tree-sitter'
import { AnnotatedTextBuilder, codePointToUtf16 } from '../../src/annotated-text'

const root = path.join(__dirname, '..', '..', '..')
let parser: Parser
let lang: Language

before(async () => {
  await Parser.init()
  lang = await Language.load(path.join(root, 'deps', 'tree-sitter-rst.wasm'))
  parser = new Parser()
  parser.setLanguage(lang)
})

function build(source: string) {
  const builder = new AnnotatedTextBuilder()
  builder.setLangConfig({ parser, lang })
  const tree = parser.parse(source)!
  builder.buildFromTree(tree.rootNode, source)
  const text = builder.buildText(source)
  tree.delete()
  return { builder, text }
}

function sourceOf(source: string, word: string) {
  const { builder, text } = build(source)
  const offset = text.indexOf(word)
  assert.notEqual(offset, -1, `'${word}' not in '${text}'`)
  const mapped = builder.mapToSource(offset, word.length)
  assert.ok(mapped, `'${word}' not mapped`)
  return source.slice(mapped.srcOffset, mapped.srcOffset + mapped.srcLength)
}

test('plain paragraphs map back to the source', () => {
  const source = 'Title\n=====\n\nThis is an sentence with a speling mistake.\n'
  assert.equal(sourceOf(source, 'speling'), 'speling')
  assert.equal(sourceOf(source, 'an sentence'), 'an sentence')
})

test('code is not checked', () => {
  const source = 'Text before.\n\n.. code-block:: bash\n\n   ehco wrongg\n\nText after with ``inlne`` literal.\n'
  const { text } = build(source)
  assert.ok(!text.includes('wrongg'))
  assert.ok(text.includes('`inlne`'))
  assert.ok(text.includes('Text after'))
})

test('admonition content is checked at the right offset', () => {
  const source = 'Intro.\n\n.. note::\n\n   A speling mistake in a note.\n\nOutro.\n'
  const { builder, text } = build(source)
  const offset = text.indexOf('speling')
  const mapped = builder.mapToSource(offset, 'speling'.length)!
  assert.equal(mapped.srcOffset, source.indexOf('speling'))
})

test('role titles are checked and targets are not', () => {
  const source = 'See :ref:`the speling guide <guide-target>` and :doc:`some/docname`.\n'
  const { text } = build(source)
  assert.ok(text.includes('the speling guide'))
  assert.ok(!text.includes('guide-target'))
  assert.equal(sourceOf(source, 'speling'), 'speling')
})

test('figure captions are checked and paths are not', () => {
  const source = '.. figure:: imgs/some_pathh.svg\n   :width: 50%\n\n   A captoin here.\n'
  const { text } = build(source)
  assert.ok(!text.includes('some_pathh'))
  assert.ok(text.includes('captoin'))
  assert.equal(sourceOf(source, 'captoin'), 'captoin')
})

test('code point offsets are converted to utf-16', () => {
  assert.deepEqual(codePointToUtf16('plain text', 6, 4), { offset: 6, length: 4 })
  const text = 'a \u{1F600} speling \u{1F600} end'
  const converted = codePointToUtf16(text, 4, 7)
  assert.equal(text.slice(converted.offset, converted.offset + converted.length), 'speling')
  const last = codePointToUtf16(text, 14, 3)
  assert.equal(text.slice(last.offset, last.offset + last.length), 'end')
})
