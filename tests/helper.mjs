import { fileURLToPath } from 'node:url'
import { Parser, Language } from '../adoc_gui/web/vendor/web-tree-sitter.js'
import { buildModel } from '../adoc_gui/web/model.js'
import { applyEdit } from '../adoc_gui/web/ops.js'

const vendor = name => fileURLToPath(new URL(`../adoc_gui/web/vendor/${name}`, import.meta.url))

await Parser.init()
const language = await Language.load(vendor('tree-sitter-rst.wasm'))
export const parser = new Parser()
parser.setLanguage(language)

export function modelOf(source) {
  const tree = parser.parse(source)
  try {
    return buildModel(parser, tree, source)
  } finally {
    tree.delete()
  }
}

// '|' marks the caret, '[' and ']' the ends of a selection
export function parse(marked) {
  const start = marked.indexOf('[')
  if (start === -1) {
    const caret = marked.indexOf('|')
    return { source: marked.replace('|', ''), a: caret, b: caret }
  }
  return { source: marked.replace('[', '').replace(']', ''), a: start, b: marked.indexOf(']') - 1 }
}

// Run an operation on marked text, returns the marked result
export function run(marked, op, ...args) {
  const { source, a, b } = parse(marked)
  const edit = op(modelOf(source), a, b, ...args)
  if (!edit) return marked
  const out = applyEdit(source, edit)
  if (edit.anchor !== undefined && edit.anchor !== edit.caret)
    return out.slice(0, edit.anchor) + '[' + out.slice(edit.anchor, edit.caret) + ']' + out.slice(edit.caret)
  return out.slice(0, edit.caret) + '|' + out.slice(edit.caret)
}

// The blocks as a compact outline, to compare shapes
export function outline(block) {
  const name = block.kind + (block.level ? block.level : '') + (block.name ? `:${block.name}` : '')
  if (block.children) return `${name}(${block.children.map(outline).join(' ')})`
  return name
}
