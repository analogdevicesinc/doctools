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
  ['Structure', ['toctree', 'contents', 'description', 'include', 'include-template', 'only', 'collection', 'epigraph']],
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

// What a directive and a role are, said at the top of what to choose from:
// a directive is a block, a role is in the line. The example changes each
// time it is shown.
export const ABOUT = {
  directive: {
    text: 'Add block markup,',
    examples: ['a note', 'a figure', 'a code block', 'a table', 'a set of tabs', 'a warning', 'a table of contents'],
    // Lines of text, and a block between them: its name, its content
    icon: `<rect class="i-text" x="6" y="5" width="36" height="3" rx="1.5"/>
<rect class="i-text" x="6" y="40" width="24" height="3" rx="1.5"/>
<rect class="i-box" x="6" y="13" width="36" height="22" rx="4"/>
<rect class="i-name" x="11" y="18" width="11" height="3.5" rx="1.75"/>
<rect class="i-mark" x="11" y="25" width="26" height="2.5" rx="1.25"/>
<rect class="i-mark" x="11" y="29.5" width="17" height="2.5" rx="1.25"/>`
  },
  role: {
    text: 'Add inline markup,',
    examples: ['a reference', 'a link to a page', 'keys to press', 'a formula', 'a link to a repository', 'an abbreviation'],
    // Lines of text, and a chip in one of them: its name, what it points to
    icon: `<rect class="i-text" x="6" y="9" width="36" height="3" rx="1.5"/>
<rect class="i-text" x="6" y="36" width="26" height="3" rx="1.5"/>
<rect class="i-text" x="6" y="22.5" width="8" height="3" rx="1.5"/>
<rect class="i-box" x="17" y="17.5" width="25" height="13" rx="6.5"/>
<rect class="i-name" x="21.5" y="22.25" width="5" height="3.5" rx="1.75"/>
<rect class="i-mark" x="28.5" y="22.5" width="9.5" height="3" rx="1.5"/>`
  }
}

// The example of a kind, another one each time: 0, 1, 2, ... give them in turn
export const exampleOf = (kind, turn) => ABOUT[kind].examples[turn % ABOUT[kind].examples.length]

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
// substitutions: the ones of the document, [{ name, detail }], listed with
// the roles: they are inline too
export function pickerGroups(kind, more = [], query = '', substitutions = []) {
  const groups = kind === 'directive'
    ? DIRECTIVE_GROUPS.map(([title, names]) => ({ title, items: names.map(name => ({ name, detail: about(name) })) }))
    : ROLE_GROUPS.map(([title, roles]) => ({ title, items: roles.map(([name, detail]) => ({ name, detail })) }))
  if (kind === 'directive') {
    groups.find(group => group.title === 'Structure').items.push({ name: 'replace', detail: 'a substitution: |name| is replaced by a text' })
  } else if (substitutions.length) {
    groups.push({
      title: 'Substitutions',
      items: substitutions.map(({ name, detail }) => ({ name: `|${name}|`, detail, substitution: name }))
    })
  }
  const known = new Set(groups.flatMap(group => group.items.map(item => item.name)))
  // A role that is the start of others is listed by its start
  const starts = [...known].filter(name => name.endsWith('+') || name.endsWith('-'))
  const others = [...new Set(more.map(String))]
    .filter(name => name !== 'replace' && !known.has(name) && !starts.some(start => name.startsWith(start)) && !/^git-|^downgit-/.test(name))
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
