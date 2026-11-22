// What each directive takes, the three parts of
//
//     .. name:: argument
//        :option: value
//
//        content
//
// - argument: what the argument is, shown where it is typed; false when the
//   directive takes none.
// - options: the options it knows, by name; none when it takes no option. An
//   option is a FLAG (it is there or not, without a value), takes a value
//   (what the value is, shown where it is typed) or one of a list of values.
// - content: 'rst' (edited as a document), 'code' (shown as it is written),
//   'table' (a grid or a simple table) or false when it takes none.
// - card: shown as an admonition.
//
// A directive that is not here takes an argument, any option, and content
// shown as it is written: nothing of it is dropped.

export const FLAG = true

const NAMED = { class: 'classes', name: 'label' }
const ALIGN = ['left', 'center', 'right']
const IMAGE = {
  alt: 'text', width: 'length or %', height: 'length', scale: '%',
  align: ['left', 'center', 'right', 'top', 'middle', 'bottom'], target: 'address or label',
  loading: ['embed', 'link', 'lazy'], ...NAMED
}
const CODE = {
  caption: 'text', linenos: FLAG, 'lineno-start': 'number', 'emphasize-lines': 'lines: 1,3-5',
  dedent: 'number', force: FLAG, ...NAMED
}
const TABLE = { align: ALIGN, width: 'length or %', widths: 'auto, grid or numbers', ...NAMED }
const INCLUDE = {
  'start-line': 'number', 'end-line': 'number', 'start-after': 'text', 'end-before': 'text', literal: FLAG,
  code: 'language', 'number-lines': 'first line', encoding: 'name', 'tab-width': 'number', parser: 'name', ...NAMED
}

const admonition = { argument: false, options: NAMED, content: 'rst', card: true }
const quote = { argument: false, options: {}, content: 'rst', card: true }

export const DIRECTIVES = {
  // Admonitions
  attention: admonition, caution: admonition, danger: admonition, error: admonition, hint: admonition,
  important: admonition, note: admonition, tip: admonition, warning: admonition,
  admonition: { ...admonition, argument: 'title' },
  topic: { ...admonition, argument: 'title' },
  sidebar: { ...admonition, argument: 'title', options: { subtitle: 'text', ...NAMED } },
  epigraph: quote, highlights: quote, 'pull-quote': quote,
  compound: admonition,
  container: { ...admonition, options: { name: 'label' } },

  // Images
  image: { argument: 'path', options: IMAGE, content: false },
  figure: { argument: 'path', options: { ...IMAGE, align: ALIGN, figwidth: 'length or %', figclass: 'classes' }, content: 'rst' },
  svg: { argument: 'path', options: { align: ALIGN }, content: 'rst' },
  video: { argument: 'url', options: { align: ALIGN }, content: 'rst', card: true },

  // Code
  'code-block': { argument: 'language', options: CODE, content: 'code' },
  sourcecode: { argument: 'language', options: CODE, content: 'code' },
  code: { argument: 'language', options: { 'number-lines': 'first line', ...NAMED }, content: 'code' },
  shell: {
    argument: false, content: 'code',
    options: { user: 'name', group: 'name', caption: 'text', 'no-path': FLAG, 'show-user': FLAG }
  },
  math: { argument: false, options: { label: 'label', nowrap: FLAG, ...NAMED }, content: 'code' },
  literalinclude: {
    argument: 'path', content: false,
    options: {
      language: 'language', caption: 'text', linenos: FLAG, 'lineno-start': 'number', 'lineno-match': FLAG,
      'emphasize-lines': 'lines: 1,3-5', lines: 'lines: 1,3-5', 'start-after': 'text', 'start-at': 'text',
      'end-before': 'text', 'end-at': 'text', prepend: 'line', append: 'line', dedent: 'number',
      'tab-width': 'number', encoding: 'name', pyobject: 'object', diff: 'path', force: FLAG, ...NAMED
    }
  },

  // Tables
  table: { argument: 'title', options: TABLE, content: 'table' },
  'list-table': {
    argument: 'title', options: { 'header-rows': 'number', 'stub-columns': 'number', ...TABLE }, content: 'rst'
  },
  'csv-table': {
    argument: 'title', content: 'code',
    options: {
      header: 'cells', 'header-rows': 'number', 'stub-columns': 'number', file: 'path', url: 'address',
      delim: 'character', quote: 'character', escape: 'character', keepspace: FLAG, encoding: 'name', ...TABLE
    }
  },

  // Structure
  include: { argument: 'path', options: INCLUDE, content: false },
  'include-template': { argument: 'path', options: { file: 'path', ...INCLUDE }, content: 'code' },
  toctree: {
    argument: false, content: 'code',
    options: {
      maxdepth: 'number', caption: 'text', hidden: FLAG, titlesonly: FLAG, glob: FLAG, reversed: FLAG,
      includehidden: FLAG, numbered: 'depth, or nothing', name: 'label'
    }
  },
  contents: {
    argument: 'title', options: { depth: 'number', local: FLAG, backlinks: ['entry', 'top', 'none'], class: 'classes' },
    content: false
  },
  sectnum: { argument: false, options: { depth: 'number', prefix: 'text', suffix: 'text', start: 'number' }, content: false },
  index: { options: { name: 'label' }, content: false },
  rubric: { argument: 'title', options: { 'heading-level': '1 to 6', ...NAMED }, content: false },
  'rst-class': { argument: 'class', options: {}, content: false },
  only: { argument: 'condition', options: {}, content: 'rst' },
  'only-doc': { options: {}, content: false },

  // Doctools
  'tab-set': { argument: false, options: {}, content: 'rst' },
  'tab-item': { argument: 'title', options: {}, content: 'rst' },
  carousel: { argument: false, options: { class: 'classes' }, content: 'rst' },
  collapsible: { argument: 'title', options: {}, content: 'rst' },
  card: { argument: 'title', options: { ref: 'label' }, content: 'rst' },
  grid: { argument: false, options: { columns: 'number', widths: 'lengths', class: 'classes' }, content: 'rst' },
  flex: { argument: false, options: { class: 'classes' }, content: 'rst' },
  collection: { argument: 'title', options: { subtitle: 'text', image: 'path', label: 'label' }, content: 'code' },
  // The description of the page: written on its line, it has nothing below it
  description: { argument: 'description', options: {}, content: false },
  'clear-content': { argument: false, options: { side: ['left', 'right', 'both'], break: FLAG }, content: false },
  'esd-warning': { argument: false, options: {}, content: 'rst' },
  'hdl-parameters': { argument: false, options: { path: 'path' }, content: 'rst' },
  'hdl-interfaces': { argument: false, options: { path: 'path' }, content: 'rst' },
  'hdl-component-diagram': { argument: false, options: { path: 'path' } },
  'hdl-regmap': { argument: false, options: { name: 'name', 'no-type-info': FLAG } },
  'hdl-build-status': { argument: false, options: { file: 'path' } }
}

// What a directive takes: { argument, options, content, card }. options is
// undefined when any option can be given.
export function directiveSpec(name) {
  const spec = Object.hasOwn(DIRECTIVES, name) ? DIRECTIVES[name] : {}
  return {
    argument: spec.argument ?? 'argument',
    options: spec.options,
    content: spec.content ?? 'code',
    card: spec.card ?? false
  }
}

// Whether options can be given to a directive
export function takesOptions(name) {
  const { options } = directiveSpec(name)
  return !options || Object.keys(options).length > 0
}

// What an option of a directive is: FLAG, what its value is, or the values
// to choose from; undefined when it is not known
export function optionSpec(directive, option) {
  const { options } = directiveSpec(directive)
  return options && Object.hasOwn(options, option) ? options[option] : undefined
}

// What is shown where the value of an option is typed
export function optionHint(directive, option) {
  const spec = optionSpec(directive, option)
  if (spec === FLAG) return ''
  if (Array.isArray(spec)) return spec.join(' | ')
  return spec ?? 'value'
}

// What to choose from where the caret is in an option: its name, among the
// options the directive does not have yet, or its value when it is one of a
// list. used: the names of the options of the directive, typed: what is
// written before the caret. [{ label, text, detail }]
export function optionChoices(directive, part, { option, used = [], typed = '' } = {}) {
  const { options } = directiveSpec(directive)
  if (!options) return []
  const start = typed.trim().toLowerCase()
  const pick = (names, detail) => {
    const found = names.filter(name => name.startsWith(start))
    // Nothing to choose when it is already written
    if (found.length === 1 && found[0] === start) return []
    return found.map(name => ({ label: name, text: name, detail: detail(name) }))
  }
  if (part === 'value') {
    const spec = optionSpec(directive, option)
    return Array.isArray(spec) ? pick(spec, () => '') : []
  }
  const free = Object.keys(options).filter(name => name === option || !used.includes(name))
  return pick(free, name => options[name] === FLAG ? 'flag' : optionHint(directive, name))
}
