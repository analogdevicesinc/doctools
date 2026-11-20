// The lines of a text that changed since the last commit, as the gutter of
// an editor shows them.

// { added, changed, deleted }: lists of line numbers (from 0) of the text;
// deleted: the lines after which lines were removed (-1: at the start)
export function lineChanges(head, text) {
  const a = head.split('\n')
  const b = text.split('\n')
  let start = 0
  while (start < a.length && start < b.length && a[start] === b[start]) start++
  let endA = a.length
  let endB = b.length
  while (endA > start && endB > start && a[endA - 1] === b[endB - 1]) {
    endA--
    endB--
  }
  const out = { added: [], changed: [], deleted: [] }
  const n = endA - start
  const m = endB - start
  if (!n && !m) return out

  // The pairs of lines that stay, by the longest common subsequence of the
  // middle; too long a middle is only changed lines
  let pairs = []
  if (n * m <= 4_000_000) {
    const width = m + 1
    const table = new Uint16Array((n + 1) * width)
    for (let i = n - 1; i >= 0; i--) {
      for (let j = m - 1; j >= 0; j--) {
        table[i * width + j] = a[start + i] === b[start + j]
          ? table[(i + 1) * width + j + 1] + 1
          : Math.max(table[(i + 1) * width + j], table[i * width + j + 1])
      }
    }
    for (let i = 0, j = 0; i < n && j < m;) {
      if (a[start + i] === b[start + j]) {
        pairs.push([i, j])
        i++
        j++
      } else if (table[(i + 1) * width + j] >= table[i * width + j + 1]) {
        i++
      } else {
        j++
      }
    }
  }
  pairs.push([n, m])

  // Between two kept lines: lines of the text only are added, lines of the
  // commit only were removed, both are changed lines
  let i = 0, j = 0
  for (const [pi, pj] of pairs) {
    const removed = pi - i
    const inserted = pj - j
    for (let k = 0; k < inserted; k++) {
      const line = start + j + k
      if (k < removed) out.changed.push(line)
      else out.added.push(line)
    }
    if (removed > inserted) out.deleted.push(start + j + inserted - 1)
    i = pi + 1
    j = pj + 1
  }
  return out
}
