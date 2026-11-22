// The substitutions of a document: '|name|' in the text is replaced by what
// '.. |name| replace:: text' says, or by an image, a date, a character.
// '|name|_' is also a link, to the address of the name.

// The ones that Sphinx gives to every document
export const BUILT_IN = { release: 'the release of the project', version: 'the version of the project', today: 'the date of the build' }

// The definitions of the document: Map(name → { kind, text, at }), kind: the
// directive (replace, image, ...), at: where its line starts
export function substitutionsOf(source) {
  const found = new Map()
  const pattern = /^[ \t]*\.\. \|([^|\n]+)\| ([\w-]+)::[ \t]*(.*)$/gm
  let match
  while ((match = pattern.exec(source)) !== null)
    if (!found.has(match[1])) found.set(match[1], { kind: match[2], text: match[3].trim(), at: match.index })
  return found
}

// What a name is replaced by: { kind, text, at }, or { kind: 'sphinx', text }
// for the ones of Sphinx; undefined when the document does not say. Names
// are looked for as they are written, then without their case.
export function substitutionOf(source, name) {
  const all = substitutionsOf(source)
  const found = all.get(name) ?? [...all].find(([other]) => other.toLowerCase() === name.toLowerCase())?.[1]
  if (found) return found
  return Object.hasOwn(BUILT_IN, name) ? { kind: 'sphinx', text: BUILT_IN[name] } : undefined
}

// The names to choose from, the ones of the document first: [{ name, detail }]
export function substitutionNames(source) {
  const own = [...substitutionsOf(source)].map(([name, { kind, text }]) =>
    ({ name, detail: kind === 'replace' ? text : `${kind} ${text}`.trim() }))
  const given = Object.entries(BUILT_IN).filter(([name]) => !own.some(item => item.name === name))
    .map(([name, detail]) => ({ name, detail }))
  return [...own, ...given]
}
