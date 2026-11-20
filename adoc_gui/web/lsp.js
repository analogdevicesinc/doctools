// What to complete at the caret, from the text of the line before it, and
// what the role under the pointer is. The answers come from the Doctools
// backend, which knows the roles, the directives and the targets of the
// project.

const LIMIT = 50

// The completion at the end of 'prefix', 'suffix' is the rest of the line:
// { request, partial, skip, item } or undefined. request is the question for
// the backend, partial the text already typed, skip the characters after the
// caret that the completion replaces, item(entry) the text to insert.
export function completionAt(prefix, suffix = '') {
  const skipOf = (...closings) => closings.find(c => suffix.startsWith(c))?.length ?? 0
  const targets = (role, partial, skip, closing) => {
    const external = /^external\+([^\s:]+):(\S+)$/.exec(role)
    return {
      request: external
        ? { completion: 'inventory_targets', inventory: external[1], role: external[2] }
        : { completion: 'local_targets', role },
      partial,
      skip,
      item: entry => entry.name + closing
    }
  }

  // :role:`title <[caret]
  let match = /:(\S+):`[^`]*<([^>]*)$/.exec(prefix)
  if (match) return targets(match[1], match[2], skipOf('>`', '>'), '>`')

  // :role:`[caret]
  match = /:(\S+):`([^`]*)$/.exec(prefix)
  if (match) return targets(match[1], match[2], skipOf('`'), '`')

  // :external+inventory:[caret]
  match = /:external\+([^\s:]+):(\w*)$/.exec(prefix)
  if (match) {
    return {
      request: { completion: 'inventory_types', inventory: match[1] },
      partial: match[2],
      skip: skipOf(':`', ':'),
      item: entry => entry.name + ':`'
    }
  }

  // :external+[caret]
  match = /:external\+(\S*)$/.exec(prefix)
  if (match)
    return { request: { completion: 'inventory' }, partial: match[1], skip: skipOf(':'), item: entry => entry.name + ':' }

  // :[caret]
  match = /(?:^|\s):([\w+-]*)$/.exec(prefix)
  if (match) {
    return {
      request: { completion: 'roles' },
      partial: match[1],
      skip: 0,
      item: entry => entry.partial ? entry.name : entry.name + ':`'
    }
  }

  // .. [caret]
  match = /^\s*\.\.\s+([\w:-]*)$/.exec(prefix)
  if (match && !match[1].endsWith('::'))
    return { request: { completion: 'directives' }, partial: match[1], skip: 0, item: entry => entry.name + '::' }

  return undefined
}

// The entries that match what is typed, the ones that start with it first:
// [{ label, text, detail }]
export function matching(list, context) {
  const typed = context.partial.toLowerCase()
  const starts = []
  const contains = []
  for (const entry of list) {
    const name = String(entry.name).toLowerCase()
    const at = name.indexOf(typed)
    if (at === -1) continue
    const text = context.item(entry)
    const detail = entry.display ?? entry.project ?? entry.domain ?? ''
    ;(at === 0 ? starts : contains).push({ label: text, text, detail: String(detail ?? '') })
  }
  return [...starts, ...contains].slice(0, LIMIT)
}

// The question for the backend about the role written as 'source'
export function roleQuestion(source) {
  const match = /^:([^`\s]+):`([^`]+)`$/.exec(source)
  if (!match) return undefined
  const titled = /^\s*(.+?)\s*<\s*([^<>]+?)\s*>\s*$/.exec(match[2])
  return titled
    ? { role: match[1], title: titled[1], target: titled[2] }
    : { role: match[1], target: match[2].trim() }
}
