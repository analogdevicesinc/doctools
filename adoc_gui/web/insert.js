// What the toolbar adds to the page: the directives and the roles, in
// groups, as they are shown to choose one.

import { DIRECTIVES, directiveSpec } from './directives.js'

// The directives, by what they are for: [group, names]
export const DIRECTIVE_GROUPS = [
  ['Admonitions', ['note', 'tip', 'important', 'warning', 'caution', 'danger', 'attention', 'error', 'hint', 'admonition']],
  ['Images and media', ['image', 'figure', 'svg', 'video', 'carousel']],
  ['Code', ['code-block', 'shell', 'literalinclude', 'math']],
  ['Tables', ['list-table', 'table', 'csv-table']],
  ['Layout', ['tab-set', 'collapsible', 'card', 'grid', 'flex', 'clear-content', 'topic', 'sidebar', 'rubric', 'rst-class']],
  ['Structure', ['toctree', 'contents', 'include', 'include-template', 'only', 'collection', 'epigraph']],
  ['HDL', ['hdl-parameters', 'hdl-interfaces', 'hdl-regmap', 'hdl-component-diagram', 'hdl-build-status', 'esd-warning']]
]

// The roles: [group, [name, what it is]]. A name that ends with '+' is the
// start of a role, completed after it: the inventory, the repository.
export const ROLE_GROUPS = [
  ['References', [
    ['ref', 'a label'], ['doc', 'a page'], ['numref', 'a numbered figure or table'], ['term', 'a term of a glossary'],
    ['download', 'a file to download'], ['external+', 'another documentation']
  ]],
  ['Links', [
    ['git+', 'a file of a repository'], ['downgit+', 'a folder to download'], ['adi', 'analog.com'],
    ['datasheet', 'a datasheet'], ['dokuwiki', 'the wiki'], ['ez', 'EngineerZone'], ['xilinx', 'AMD Xilinx'],
    ['intel', 'Intel'], ['mw', 'MathWorks'], ['digilent', 'Digilent'], ['digikey', 'DigiKey'],
    ['mouser', 'Mouser'], ['arrow', 'Arrow']
  ]],
  ['Text', [
    ['abbr', 'an abbreviation'], ['kbd', 'keys'], ['guilabel', 'a label of an interface'],
    ['menuselection', 'a menu'], ['file', 'a path'], ['command', 'a command'], ['samp', 'literal text'],
    ['math', 'a formula'], ['sub', 'subscript'], ['sup', 'superscript'],
    ['red', 'red text'], ['green', 'green text'], ['badge', 'a badge']
  ]]
]

// What a directive is filled with when it is added: its options and its
// content, as lines, indented as its content
const TEMPLATES = {
  'tab-set': ['', '.. tab-item:: Tab', '', '   Text'],
  'list-table': [':header-rows: 1', '', '* - Header', '  - Header', '* - Cell', '  - Cell'],
  toctree: ['']
}
export const templateOf = name => Object.hasOwn(TEMPLATES, name) ? TEMPLATES[name] : undefined

// What a directive takes, in a word, beside its name
function about(name) {
  const { argument, content } = directiveSpec(name)
  return argument && Object.hasOwn(DIRECTIVES, name) ? argument : content === false ? '' : ''
}

// The groups to choose from, with the ones of the project that are not
// known in a last group: [{ title, items: [{ name, detail }] }].
// kind: 'directive' or 'role'; more: the names the backend gives; query: what
// is searched, in the names and in what they are
export function pickerGroups(kind, more = [], query = '') {
  const groups = kind === 'directive'
    ? DIRECTIVE_GROUPS.map(([title, names]) => ({ title, items: names.map(name => ({ name, detail: about(name) })) }))
    : ROLE_GROUPS.map(([title, roles]) => ({ title, items: roles.map(([name, detail]) => ({ name, detail })) }))
  const known = new Set(groups.flatMap(group => group.items.map(item => item.name)))
  // A role that is the start of others is listed by its start
  const starts = [...known].filter(name => name.endsWith('+') || name.endsWith('-'))
  const others = [...new Set(more.map(String))]
    .filter(name => !known.has(name) && !starts.some(start => name.startsWith(start)) && !/^git-|^downgit-/.test(name))
    .sort((x, y) => x.localeCompare(y))
  if (others.length) groups.push({ title: 'Others of the project', items: others.map(name => ({ name, detail: '' })) })

  const words = query.toLowerCase().split(/\s+/).filter(Boolean)
  if (!words.length) return groups
  const rank = item => item.name.startsWith(words[0]) ? 0 : 1
  return groups.map(group => ({
    title: group.title,
    items: group.items
      .filter(item => words.every(word => `${item.name} ${item.detail} ${group.title}`.toLowerCase().includes(word)))
      .sort((x, y) => rank(x) - rank(y))
  })).filter(group => group.items.length)
}
