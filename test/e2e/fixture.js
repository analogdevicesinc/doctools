const fs = require('fs')
const path = require('path')

const WORDS = ('the quick brown fox jumps over a lazy dog while signal clocks drive converters ' +
  'and buffers hold samples for later processing by firmware').split(' ')

function generator(seed) {
  let state = seed
  return () => {
    state = (state * 1103515245 + 12345) & 0x7fffffff
    return state
  }
}

function paragraph(next, count, width = 78) {
  const words = Array.from({ length: count }, () => WORDS[next() % WORDS.length])
  words[0] = words[0][0].toUpperCase() + words[0].slice(1)
  const lines = ['']
  for (const word of words) {
    const line = lines[lines.length - 1]
    if (line.length + word.length + 1 > width)
      lines.push(word)
    else
      lines[lines.length - 1] = line ? `${line} ${word}` : word
  }
  lines[lines.length - 1] += '.'
  return lines
}

function guide() {
  const next = generator(1)
  const out = ['.. _guide:', '', 'Guide', '=====', '', ...paragraph(next, 40), '']
  for (let s = 1; s <= 14; s++) {
    out.push(`.. _section-${s}:`, '', `Section ${s}`, '-'.repeat(20), '', ...paragraph(next, 60), '')
    out.push('.. note::', '', `   ${paragraph(next, 10).join(' ')}`, '')
    out.push(`* ${paragraph(next, 6).join(' ')}`, `* ${paragraph(next, 6).join(' ')}`,
      '* See :ref:`guide` and :doc:`/reference/index`.', '')
    out.push('.. code-block:: bash', '', `   echo section ${s}`, '   ls -la', '')
    out.push(...paragraph(next, 80), '')
  }
  out.push('.. toctree::', '', '   sub/page', '')
  return out.join('\n')
}

const FILES = {
  'docs/conf.py': [
    "repository = 'fixture'",
    "project = 'Fixture'",
    "copyright = '2026, Fixture'",
    "author = 'Fixture'",
    "version = '0.1'",
    "language = 'en'",
    "extensions = ['adi_doctools']",
    "exclude_patterns = ['_build']",
    "source_suffix = '.rst'",
    "html_theme = 'harmonic'",
    ''
  ].join('\n'),
  'docs/index.rst': [
    'Fixture', '=======', '', 'Welcome to the fixture documentation.', '',
    '.. toctree::', '', '   guide/index', '   reference/index', ''
  ].join('\n'),
  'docs/guide/index.rst': guide(),
  'docs/guide/sub/page.rst': [
    'Sub page', '========', '', 'This is an sentence with a speling mistake.', '',
    '.. code-block:: bash', '', '   ehco wrongg', '',
    'See :ref:`guide`.', ''
  ].join('\n'),
  'docs/reference/index.rst': [
    'Reference', '=========', '', 'Reference text.', '',
    'A broken :ref:`does-not-exist` reference.', ''
  ].join('\n')
}

exports.createFixture = (root) => {
  for (const [name, content] of Object.entries(FILES)) {
    const file = path.join(root, name)
    fs.mkdirSync(path.dirname(file), { recursive: true })
    fs.writeFileSync(file, content)
  }
}
