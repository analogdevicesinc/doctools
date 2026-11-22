// The guide: a few panels that say what the editor does, shown once to who
// opens it for the first time, and again from the button of the top bar.

import { ABOUT } from './insert.js'

// The drawings use three colours, as the ones of the toolbar: the text
// (i-text), the markup (i-box, i-mark) and what is pointed at (i-name)
const line = (x, y, width, name = 'i-text', height = 4) =>
  `<rect class="${name}" x="${x}" y="${y}" width="${width}" height="${height}" rx="${height / 2}"/>`
const box = (x, y, width, height, rx = 6, name = 'i-box') =>
  `<rect class="${name}" x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}"/>`

// The panels: { title, text, icon }, the text as paragraphs; `code` is shown
// as code
export const SLIDES = [
  {
    title: 'Write the document, not the markup',
    text: [
      'The page in the middle is your document, as it will be read. Type in it as in a word processor: the reStructuredText is written for you, and saved as you type.',
      'The files are at the left. The source, the live view, the references and the changes are at the right.'
    ],
    icon: box(14, 16, 50, 88, 6, 'i-panel') + line(22, 28, 30) + line(22, 40, 24) + line(22, 52, 28) +
      box(74, 10, 96, 100) + line(84, 24, 52, 'i-mark', 7) + line(84, 42, 76) + line(84, 54, 70) + line(84, 66, 76) +
      line(84, 78, 40) + line(128, 76, 3, 'i-name', 9) +
      box(180, 16, 46, 88, 6, 'i-panel') + line(188, 28, 22, 'i-mark') + line(188, 40, 30) + line(188, 52, 26) + line(188, 64, 30)
  },
  {
    title: 'Blocks and inline: directives and roles',
    text: [
      'A directive is a block: a note, a figure, code, a table. Its name and its argument come first, its options below them, then its content.',
      'A role is inline, in the text: a reference, a link, keys to press. Add them with Directive, Role and Table in the toolbar.'
    ],
    icon: `<g transform="translate(34 24) scale(1.5)">${ABOUT.directive.icon}</g>` +
      `<g transform="translate(134 24) scale(1.5)">${ABOUT.role.icon}</g>`
  },
  {
    title: 'Headings, lists, and the keys',
    text: [
      'The selector of the toolbar makes a line a heading. `* ` or `#. ` starts a list, `Tab` nests an item. `Ctrl+B`, `Ctrl+I` and `Ctrl+E` are bold, italic and literal.',
      '`Enter` on the empty line at the end of a block leaves it; `Backspace` right after a block removes it. `Ctrl+Z` brings anything back.'
    ],
    icon: box(40, 10, 160, 100) + line(54, 24, 70, 'i-mark', 8) + line(54, 44, 120) + line(54, 56, 96) +
      `<circle class="i-mark" cx="58" cy="74" r="3"/><circle class="i-mark" cx="58" cy="88" r="3"/>` +
      line(68, 72, 84) + line(68, 86, 52) + line(124, 83, 3, 'i-name', 10)
  },
  {
    title: 'Build, and see the page',
    text: [
      'Build, at the top right, builds the documentation and builds it again as you type. The Live view tab shows the built page, and follows where you are.',
      'The warnings of the build are written below the block they are about.'
    ],
    icon: box(22, 40, 58, 40, 8, 'i-fill') + `<path class="i-on" d="M45 50v20l16-10z"/>` +
      `<path class="i-text" d="M90 58h22v-7l12 9-12 9v-7H90z"/>` +
      box(134, 14, 84, 92) + line(134, 14, 84, 'i-bar', 14) + line(144, 40, 50, 'i-mark', 6) + line(144, 54, 64) +
      line(144, 66, 56) + `<path class="i-name" d="M150 80l7 12h-14z"/>` + line(162, 84, 44, 'i-name', 3)
  },
  {
    title: 'Completion, and what a reference points to',
    text: [
      'While the documentation is built, type `:` for a role or `.. ` for a directive: a menu completes them, and their targets. The options of a directive are chosen the same way.',
      'A card shows what a reference points to, in the menu and on the pointer. The References tab lists everything that can be referenced: a click writes it.'
    ],
    icon: line(20, 22, 40) + box(66, 15, 58, 18, 9) + line(74, 22, 10, 'i-name') + line(88, 22, 28, 'i-mark') +
      line(127, 18, 3, 'i-name', 12) +
      box(66, 40, 76, 66, 6, 'i-panel') + box(70, 44, 68, 16, 4, 'i-sel') + line(76, 50, 40, 'i-mark') +
      line(76, 68, 48) + line(76, 82, 34) + line(76, 96, 44) +
      box(150, 40, 74, 54) + line(158, 50, 38, 'i-mark', 5) + line(158, 62, 58) + line(158, 72, 50) + line(158, 82, 30, 'i-name', 3)
  },
  {
    title: 'Spelling and grammar',
    text: [
      'The mistakes of the prose are underlined: red for the spelling, blue for the grammar. The right click on one shows its corrections.',
      'The selector at the left of the toolbar picks where it is checked: on this machine, by the LanguageTool service, or not at all.'
    ],
    icon: box(40, 10, 160, 100) + line(54, 26, 40) + line(100, 26, 34) + line(140, 26, 44) +
      `<path class="i-wavy i-red" d="M100 36q4-5 8 0t8 0 8 0 8 0"/>` +
      line(54, 52, 60) + line(120, 52, 30) + line(156, 52, 28) +
      `<path class="i-wavy i-blue" d="M54 62q4-5 8 0t8 0 8 0 8 0 8 0 8 0 8 0"/>` +
      box(96, 70, 92, 32, 5, 'i-panel') + line(104, 78, 46, 'i-mark') + line(104, 90, 62)
  },
  {
    title: 'Files, and what changed',
    text: [
      'The right click on a file renames, moves or deletes it; the `+` makes a new one. Check folders to build only those, which is faster.',
      'In a git repository, bars beside the page show what changed since the last commit. The Changes tab stages the changes and commits them.'
    ],
    icon: box(18, 14, 84, 92, 6, 'i-panel') + line(28, 28, 36, 'i-mark') + line(36, 42, 44) + line(36, 56, 38) +
      line(36, 70, 48) + line(88, 55, 6, 'i-name', 6) + line(88, 69, 6, 'i-green', 6) +
      box(116, 14, 100, 92) + line(128, 28, 60, 'i-mark', 6) + line(128, 44, 72) + line(128, 56, 64) +
      line(128, 68, 72) + line(128, 80, 46) + line(208, 42, 4, 'i-green', 30) + line(208, 78, 4, 'i-mark', 10)
  }
]

// A paragraph of a panel: `code` in it is code
function paragraph(text) {
  const el = document.createElement('p')
  text.split('`').forEach((part, i) => {
    if (i % 2 === 0) return el.append(part)
    const code = document.createElement('code')
    code.textContent = part
    el.append(code)
  })
  return el
}

// The guide in a dialog: its panels side by side in a row that scrolls and
// snaps to one of them, so going to the next one slides it in, and a swipe
// does the same. The row is as high as its highest panel: what is below it
// does not move. Returns { open }, onClose is called when it is left.
export function tutorial(dialog, onClose = () => {}) {
  let index = 0
  const make = (tag, className, text) => {
    const el = document.createElement(tag)
    if (className) el.className = className
    if (text !== undefined) el.textContent = text
    return el
  }
  const track = make('div', 'tutorial-track')
  track.tabIndex = -1
  const slides = SLIDES.map((slide, i) => {
    const el = make('section', 'tutorial-slide')
    el.setAttribute('aria-label', `${i + 1} of ${SLIDES.length}`)
    const art = make('div', 'tutorial-art')
    art.innerHTML = `<svg viewBox="0 0 240 120" aria-hidden="true">${slide.icon}</svg>`
    const text = make('div', 'tutorial-text')
    text.append(...slide.text.map(paragraph))
    el.append(art, make('h2', 'tutorial-title', slide.title), text)
    return el
  })
  track.append(...slides)

  const back = make('button', 'text-button plain', 'Back')
  const next = make('button', 'build-button tutorial-next')
  const close = make('button', 'icon-button tutorial-close')
  for (const button of [back, next, close]) button.type = 'button'
  close.title = 'Close the guide'
  close.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>'
  const dots = make('div', 'tutorial-dots')
  const marks = SLIDES.map((slide, i) => {
    const dot = make('button', 'tutorial-dot')
    dot.type = 'button'
    dot.title = slide.title
    dot.setAttribute('aria-label', `${i + 1} of ${SLIDES.length}: ${slide.title}`)
    dot.addEventListener('click', () => go(i))
    return dot
  })
  dots.append(...marks)
  const foot = make('div', 'tutorial-foot')
  foot.append(back, dots, next)
  dialog.setAttribute('aria-label', 'Guide')
  dialog.replaceChildren(close, track, foot)

  // The dot of the panel that is seen: it follows the row as it scrolls
  const dot = at => marks.forEach((mark, i) => {
    if (i === at) mark.setAttribute('aria-current', 'step')
    else mark.removeAttribute('aria-current')
  })
  // The panel the guide is at, or is going to: what its buttons say
  const mark = at => {
    index = at
    slides.forEach((slide, i) => {
      slide.inert = i !== index
    })
    back.style.visibility = index ? 'visible' : 'hidden'
    next.textContent = index === SLIDES.length - 1 ? 'Start writing' : 'Next'
  }
  const nearest = () => Math.max(Math.min(Math.round(track.scrollLeft / Math.max(track.clientWidth, 1)), SLIDES.length - 1), 0)
  // Sliding to a panel that was asked for: the buttons already say it
  let sliding = false
  // Slide to a panel, at once when the motion is not wanted
  function go(at, smooth = true) {
    const target = Math.max(Math.min(at, SLIDES.length - 1), 0)
    const still = !smooth || matchMedia('(prefers-reduced-motion: reduce)').matches
    sliding = !still
    mark(target)
    track.scrollTo({ left: slides[target].offsetLeft - slides[0].offsetLeft, behavior: still ? 'instant' : 'smooth' })
    if (still) dot(target)
  }
  // The row scrolls, by itself or by hand: the dot is the one of the panel
  // that is nearest, all along; by hand, the buttons follow too
  track.addEventListener('scroll', () => {
    const at = nearest()
    dot(at)
    if (sliding) sliding = Math.abs(track.scrollLeft - index * track.clientWidth) >= 2
    else if (at !== index) mark(at)
  }, { passive: true })
  track.addEventListener('scrollend', () => {
    sliding = false
    if (nearest() !== index) mark(nearest())
  })
  // A hand on the row takes over
  for (const name of ['pointerdown', 'touchstart', 'wheel'])
    track.addEventListener(name, () => { sliding = false }, { passive: true })

  back.addEventListener('click', () => go(index - 1))
  next.addEventListener('click', () => index === SLIDES.length - 1 ? dialog.close() : go(index + 1))
  close.addEventListener('click', () => dialog.close())
  dialog.addEventListener('keydown', ev => {
    if (ev.key !== 'ArrowRight' && ev.key !== 'ArrowLeft') return
    ev.preventDefault()
    go(index + (ev.key === 'ArrowRight' ? 1 : -1))
  })
  // A click beside it leaves it
  dialog.addEventListener('click', ev => {
    if (ev.target === dialog) dialog.close()
  })
  dialog.addEventListener('close', () => onClose())

  return {
    open() {
      if (!dialog.open) dialog.showModal()
      go(0, false)
      next.focus()
    }
  }
}
