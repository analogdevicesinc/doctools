// The references explorer: what can be referenced, in the documentation of
// the project and in the ones of its inventories, and the role written for
// one of them.

// The roles to choose from, from the types of the backend ([{ name, count }]):
// ref first, it is the one to prefer, then doc, then the others by name
const PREFERRED = ['ref', 'doc']
export function orderRoles(types) {
  const rank = type => {
    const at = PREFERRED.indexOf(type.name)
    return at === -1 ? PREFERRED.length : at
  }
  return [...types].sort((x, y) => rank(x) - rank(y) || String(x.name).localeCompare(String(y.name)))
}

// The roles shown, of the ones of a documentation: the ones of the filter,
// all of them when the filter is empty
export function filterRoles(types, filter) {
  const ordered = orderRoles(types)
  return filter.size ? ordered.filter(type => filter.has(type.name)) : ordered
}

// What the button of the filter says
export function filterLabel(filter) {
  const names = orderRoles([...filter].map(name => ({ name }))).map(type => type.name)
  if (!names.length) return 'All types'
  return names.length <= 2 ? names.join(', ') : `${names.length} types`
}

// Whether the targets of a role are shown: the ones of ref are, until they
// are closed; the ones of the others are not, until they are opened
export const roleOpen = (toggled, documentation, role) => toggled.has(`${documentation}|${role}`) !== (role === 'ref')

// The page of a target of the project, from its uri 'page#id'. None for an
// address: a target that is not built, found in the published pages.
export const pageOf = uri => /^[a-z][\w+.-]*:\/\//i.test(String(uri ?? '')) ? '' : String(uri ?? '').split('#')[0]

// The targets that match what is searched, in their name, their title or
// their page: all the words, the ones whose name or title starts with the
// search first
export function searchTargets(list, query) {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean)
  if (!words.length) return list
  const first = words.join(' ')
  const starts = []
  const others = []
  for (const entry of list) {
    const name = String(entry.name).toLowerCase()
    const title = String(entry.display ?? '').toLowerCase()
    const all = `${name} ${title} ${String(entry.uri ?? '').toLowerCase()}`
    if (!words.every(word => all.includes(word))) continue
    ;(name.startsWith(first) || title.startsWith(first) ? starts : others).push(entry)
  }
  return [...starts, ...others]
}

// The role written for a target: of an inventory when one is given, with the
// selected text as its title when there is one.
// A page of the project is given from the top of the documentation: a
// relative one would be looked for from the folder of the file.
export function referenceText(inventory, role, name, title = '') {
  const prefix = inventory ? `external+${inventory}:` : ''
  const target = !inventory && role === 'doc' && !name.startsWith('/') ? `/${name}` : name
  const shown = title.replace(/\s+/g, ' ').trim().replace(/[`<>]/g, '')
  return shown ? `:${prefix}${role}:\`${shown} <${target}>\`` : `:${prefix}${role}:\`${target}\``
}

// The question of the preview of a target. A page of the project is named
// from the top of the documentation, as in referenceText.
export const referenceQuestion = (inventory, role, name) =>
  ({ role: inventory ? `external+${inventory}:${role}` : role, target: !inventory && role === 'doc' ? `/${name}` : String(name) })
