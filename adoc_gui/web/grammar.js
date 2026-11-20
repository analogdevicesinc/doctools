// The prose of a block, as the text a grammar checker reads, and the way
// back from a place in that text to the source.

// The leaves that are prose; the others are read, so the sentence holds, but
// their mistakes are not shown: code, roles, names
const PROSE = new Set(['text', 'strong', 'emphasis', 'link'])

// { text, pieces: [{ from, to, s, e, leaf }] }: from and to in the text, s
// and e in the source
export function proseOf(model, block) {
  let text = ''
  const pieces = []
  for (const leaf of block.inlines ?? []) {
    const value = leaf.kind === 'soft' ? ' ' : model.source.slice(leaf.s, leaf.e)
    pieces.push({ from: text.length, to: text.length + value.length, s: leaf.s, e: leaf.e, leaf })
    text += value
  }
  return { text, pieces }
}

// The source range of a piece of the text, undefined when it is not prose
// only, or when it crosses markup that is hidden
export function sourceRange(prose, offset, length) {
  const end = offset + length
  const touched = prose.pieces.filter(p => p.to > offset && p.from < end)
  if (!touched.length) return undefined
  for (const [i, piece] of touched.entries()) {
    const { kind } = piece.leaf
    if (kind === 'soft') {
      if (i === 0 || i === touched.length - 1) return undefined
    } else if (!PROSE.has(kind) || (touched.length > 1 && kind !== 'text')) {
      return undefined
    }
    if (i > 0 && touched[i - 1].e !== piece.s) return undefined
  }
  const first = touched[0]
  const last = touched[touched.length - 1]
  return { s: first.s + (offset - first.from), e: last.s + (end - last.from) }
}
