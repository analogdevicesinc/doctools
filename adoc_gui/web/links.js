// The links of reStructuredText, as the page shows and edits them:
//
//     `text <address>`__   the address in the link, anonymous: two links can
//                          have the same text
//     `text <address>`_    the same, named: its text is a name of the document
//     https://...          an address as it is, a mail address too
//     `text`_  word_       named: the address is in '.. _text: address'
//     `text`__ word__      anonymous: the address is in the next '__ address'
//                          or '.. __: address' of the document
//
// A link that is added is of the first kind: it does not name anything, so
// it cannot clash with another one.

const EMBEDDED = /^`(?:([^`]*?)\s*)?<([^<>`]+)>`(__?)$/s
const QUOTED = /^`([^`]+)`(__?)$/s
const WORD = /^(.+?)(__?)$/s
const ADDRESS = /^(?:[a-z][a-z0-9+.-]*:\/\/\S+|mailto:\S+|www\.\S+)$/i
const MAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/

// What is an address by itself: it is a link as it is written
export const isAddress = text => ADDRESS.test(text.trim())

// A name as docutils compares them: case and spaces do not count
const nameOf = text => text.replace(/\s+/g, ' ').trim().toLowerCase()

// The targets of the document: { named: Map(name → { target, at }),
// anonymous: [{ target, at }] }, at: where its line starts
function targetsOf(source) {
  const named = new Map()
  const anonymous = []
  const pattern = /^[ \t]*(?:\.\. _(`[^`]+`|[^:\n]+|_):|(__))[ \t]+(\S.*)$/gm
  let match
  while ((match = pattern.exec(source)) !== null) {
    const found = { target: match[3].trim(), at: match.index }
    if (match[2] || match[1] === '_') anonymous.push(found)
    else if (!named.has(nameOf(match[1].replace(/`/g, '')))) named.set(nameOf(match[1].replace(/`/g, '')), found)
  }
  return { named, anonymous }
}

// The link of a leaf of the model:
// { kind, text, target, anonymous, s, e, at }
// kind: 'embedded', 'address', 'named' or 'anonymous'; s and e: the whole of
// it in the source; target: its address, undefined when the document does
// not give it; at: where the address is written, for the last two kinds
export function linkOf(model, leaf) {
  if (leaf?.kind !== 'link') return undefined
  const { source } = model
  const written = source.slice(leaf.os, leaf.oe)
  const base = { s: leaf.os, e: leaf.oe }
  const embedded = EMBEDDED.exec(written)
  if (embedded) {
    return {
      ...base, kind: 'embedded', text: (embedded[1] ?? '').replace(/\s+/g, ' ').trim(),
      target: embedded[2].replace(/\s+/g, ''), anonymous: embedded[3] === '__'
    }
  }
  const reference = QUOTED.exec(written) ?? (/__?$/.test(written) && !isAddress(written) && !MAIL.test(written) ? WORD.exec(written) : null)
  if (!reference) {
    const text = written.trim()
    return { ...base, kind: 'address', text, target: MAIL.test(text) ? `mailto:${text}` : text, anonymous: true }
  }
  const text = reference[1].replace(/\s+/g, ' ').trim()
  const targets = model.linkTargets ??= targetsOf(source)
  if (reference[2] === '_') return { ...base, kind: 'named', text, anonymous: false, ...pick(targets.named.get(nameOf(text))) }
  // The anonymous links and their targets go by their order in the document
  const order = model.leaves.filter(l => l.kind === 'link' && isAnonymousReference(source.slice(l.os, l.oe)))
  return { ...base, kind: 'anonymous', text, anonymous: true, ...pick(targets.anonymous[order.indexOf(leaf)]) }
}

// The address of a name of the document, as '|name|_' links to: { target, at }
export function namedTarget(model, name) {
  const targets = model.linkTargets ??= targetsOf(model.source)
  return pick(targets.named.get(nameOf(name)))
}

const pick = found => found ? { target: found.target, at: found.at } : {}
const isAnonymousReference = written => !EMBEDDED.test(written) && /__$/.test(written) && !isAddress(written)

// A link as it is written: the address alone when there is no other text
export function linkText(text, target, anonymous = true) {
  const address = target.replace(/\s+/g, '')
  const shown = text.replace(/\s+/g, ' ').replace(/[`<>]/g, '').trim()
  if (!shown || shown === address) return isAddress(address) ? address : `\`<${address}>\`${anonymous ? '__' : '_'}`
  return `\`${shown} <${address}>\`${anonymous ? '__' : '_'}`
}

// Where a link leads when it is opened: an address of the web, or a mail;
// undefined for a path, which is one of the built documentation
export function linkAddress(target) {
  const address = (target ?? '').trim()
  if (/^(https?:\/\/|mailto:)/i.test(address)) return address
  return /^www\./i.test(address) ? `https://${address}` : undefined
}
