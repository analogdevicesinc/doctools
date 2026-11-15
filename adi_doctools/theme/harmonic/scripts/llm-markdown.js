"use strict"

import {DOM} from './dom.js'

/**
 * Chat rendering: line stream, markdown and DOM helpers.
 *
 * Text is rendered a whole line at a time, so a line never changes kind or
 * height after it appears; its arrival is shown by an animation instead.
 * A renderer is a sink {line(raw), end()}.
 */

export function createLineStream (sink) {
  let buf = ''
  return {
    write (chunk) {
      const parts = chunk.replace(/\r/g, '').split('\n')
      for (let i = 0; i < parts.length; i++) {
        if (i > 0) {
          sink.line(buf)
          buf = ''
        }
        buf += parts[i]
      }
    },
    end () {
      if (buf)
        sink.line(buf)
      buf = ''
      sink.end()
    },
  }
}

/* Clean up even if the animation never ran (node not displayed). */
const ENTER_MAX_MS = 2000

/**
 * Play the CSS "enter" animation once. The class is removed afterwards, so it
 * does not replay when the node is re-inserted (switching sessions).
 */
export function animateIn (node) {
  const done = e => {
    if (e && e.target !== node)
      return
    node.classList.remove('enter')
    node.removeEventListener('animationend', done)
    clearTimeout(timer)
  }
  const timer = setTimeout(done, ENTER_MAX_MS)
  node.addEventListener('animationend', done)
  node.classList.add('enter')
  return node
}

/**
 * Show/hide a node with CSS transitions both ways, returns set(shown).
 * The hidden attribute would cut the leaving transition short, so it is only
 * applied once the leaving animations have finished.
 */
export function createPresence (node) {
  let shown = false
  let change = 0
  return function set (next) {
    if (next === shown)
      return
    shown = next
    const current = ++change
    if (shown) {
      if (node.hidden) {
        node.hidden = false
        delete node.dataset.shown
        void node.offsetWidth // commit the entering state, so the change transitions
      }
      node.dataset.shown = 'true'
    } else {
      node.dataset.shown = 'false'
      const leaving = node.getAnimations().map(animation => animation.finished)
      Promise.allSettled(leaving).then(() => {
        if (current === change)
          node.hidden = true
      })
    }
  }
}

/* One div per line, no interpretation. */
export function createPlainRenderer (root) {
  root.classList.add('plain')
  return {
    line (raw) {
      root.append(DOM.new('div', {className: 'line', textContent: raw, line: root.children.length}))
    },
    end () {},
  }
}

/*
 * Markdown, inline level.
 * One pass with an explicit stack of open marks, DOM nodes only, so the source
 * cannot inject markup. Supports \escapes, `code`, **strong**, __strong__,
 * *em*, _em_, ~~del~~, [text](url), ![alt](src) and <https://autolink>.
 */
const INLINE_MAX_DEPTH = 16
const INLINE_TAGS = {'**': 'strong', '__': 'strong', '*': 'em', '_': 'em', '~~': 'del'}
const PUNCT = /[!-\/:-@\[-`{-~]/
/* text with balanced brackets: in [[text](url)] the inner one is the link */
const LINK = /\[((?:[^\[\]\n]|\[[^\[\]\n]*\])*)\]\(([^()\s]+)(?:\s+"[^"]*")?\)/y
const AUTOLINK = /<(https?:\/\/[^\s<>]+)>/y
const SAFE_URL = /^(https?:|mailto:|#|\/|\.\.?\/)/i
const SAFE_IMAGE = /^(https?:|\/|\.\.?\/|data:image\/(png|jpeg|gif|webp|svg\+xml)[;,])/i

/**
 * Image of markdown, an <img>, so even an SVG runs no script and loads
 * nothing else. Unsafe sources keep the alt text only.
 */
export function createImage (src, alt, title) {
  if (!SAFE_IMAGE.test(src))
    return document.createTextNode(alt)
  const img = DOM.new('img', {className: 'image', src, alt, loading: 'lazy', referrerPolicy: 'no-referrer'})
  if (title)
    img.title = title
  return img
}

/**
 * Link of markdown, tool calls and the sources tray.
 * Same-origin links keep the current tab, so hot reload can take them over.
 */
export function createLink (url, label) {
  const a = DOM.new('a', {className: 'link', textContent: label ?? ''})
  if (!SAFE_URL.test(url))
    return a
  a.href = url
  try {
    const target = new URL(url, location.href)
    a.dataset.host = target.host
    if (target.origin !== location.origin) {
      a.target = '_blank'
      a.rel = 'noopener noreferrer'
    }
  } catch {}
  return a
}

/*
 * Marks left unclosed at the end of the line fall back to literal text.
 * href(url): the link target to use for a url of the source.
 */
function renderInline (parent, src, href) {
  const stack = [] // open marks: {el, mark, parent}
  let node = parent
  let text = ''
  let linkEnd = -1 // inside [text](url): index of "]"
  let linkResume = -1 // and of the char after ")"

  const flush = () => {
    if (text) {
      node.append(text)
      text = ''
    }
  }
  const push = (elem, mark) => {
    flush()
    node.append(elem)
    stack.push({el: elem, mark, parent: node})
    node = elem
  }
  const pop = keep => {
    flush()
    const f = stack.pop()
    node = f.parent
    if (!keep)
      f.el.replaceWith(f.mark, ...f.el.childNodes)
  }

  let i = 0
  while (i < src.length) {
    if (i === linkEnd) {
      // close everything up to and including the link
      for (;;) {
        const isLink = stack[stack.length - 1].mark === '['
        pop(isLink)
        if (isLink)
          break
      }
      i = linkResume
      linkEnd = -1
      continue
    }
    const end = linkEnd >= 0 ? linkEnd : src.length // nothing crosses a link's "]"
    const ch = src[i]

    if (ch === '\\' && i + 1 < end && PUNCT.test(src[i + 1])) {
      text += src[i + 1]
      i += 2
      continue
    }

    if (ch === '`') {
      let n = 1
      while (src[i + n] === '`')
        n++
      let close = -1
      for (let j = i + n; j < end;) {
        if (src[j] !== '`') {
          j++
          continue
        }
        let m = 1
        while (src[j + m] === '`')
          m++
        if (m === n) {
          close = j
          break
        }
        j += m
      }
      if (close < 0) {
        text += src.slice(i, i + n)
        i += n
        continue
      }
      flush()
      const code = src.slice(i + n, close).replace(/^ (.*\S.*) $/, '$1')
      node.append(DOM.new('code', {textContent: code}))
      i = close + n
      continue
    }

    if (ch === '!' && src[i + 1] === '[') {
      LINK.lastIndex = i + 1
      const m = LINK.exec(src)
      if (m && i + 1 + m[0].length <= end) {
        flush()
        const title = /\s+"([^"]*)"\)$/.exec(m[0])?.[1]
        node.append(createImage(href(m[2]), m[1], title))
        i += 1 + m[0].length
        continue
      }
    }

    if (ch === '[' && linkEnd < 0) {
      LINK.lastIndex = i
      const m = LINK.exec(src)
      if (m) {
        push(createLink(href(m[2])), '[')
        linkEnd = i + 1 + m[1].length
        linkResume = i + m[0].length
        i++
        continue
      }
    }

    if (ch === '<') {
      AUTOLINK.lastIndex = i
      const m = AUTOLINK.exec(src)
      if (m && i + m[0].length <= end) {
        flush()
        const url = href(m[1])
        node.append(createLink(url, url))
        i += m[0].length
        continue
      }
    }

    if (ch === '*' || ch === '_' || ch === '~') {
      let n = 1
      while (src[i + n] === ch)
        n++
      if (n > 3) {
        text += src.slice(i, i + n)
        i += n
        continue
      }
      let len = ch === '~' ? (n >= 2 ? 2 : 0) : Math.min(n, 2)
      const top = stack[stack.length - 1]
      if (top && top.mark[0] === ch && top.mark.length <= n)
        len = top.mark.length // "***" closes the inner mark first
      if (len) {
        const mark = ch.repeat(len)
        const prev = i > 0 ? src[i - 1] : ' '
        const next = i + len < end ? src[i + len] : ' '
        const intraword = ch === '_' // snake_case is not emphasis
        if (!/\s/.test(prev) && !(intraword && /\w/.test(next))) {
          let k = stack.length - 1
          while (k >= 0 && stack[k].mark !== mark && stack[k].mark !== '[')
            k--
          if (k >= 0 && stack[k].mark === mark) {
            while (stack.length - 1 > k)
              pop(false)
            pop(true)
            i += len
            continue
          }
        }
        if (!/\s/.test(next) && !(intraword && /\w/.test(prev)) &&
            stack.length < INLINE_MAX_DEPTH) {
          push(DOM.new(INLINE_TAGS[mark]), mark)
          i += len
          continue
        }
        text += mark
        i += len
        continue
      }
    }

    text += ch
    i++
  }
  while (stack.length)
    pop(false)
  flush()
}

/*
 * Markdown, block level, a per-line state machine.
 * DOM: root.md > .block[data-block] > .line[data-kind], one .line per source line.
 *
 * Each line is classified from its text and the last block, then rendered once.
 * The exception is a table header row, re-rendered when the delimiter row arrives.
 * Blocks are flat: quotes and lists carry a depth instead of nesting.
 * Not supported: setext headings, indented code, tables without a leading "|",
 * blocks nested inside list items and quotes.
 */
const MD_MAX_DEPTH = 3 // custom blocks rendering markdown
const MAX_INDENT_DEPTH = 8

/**
 * Custom fenced blocks, ```<name>.
 * The factory gets the block's view element and a ctx, and returns
 * {line(raw), end()}, or null to fall back to a plain code block.
 * ctx.info: text after the fence name.
 * ctx.depth: nesting depth of the renderer.
 * ctx.renderMarkdown(container): a line stream, or null when too deep.
 */
const customBlocks = {
  mermaid (view) {
    const source = []
    const show = state => {
      view.textContent = `[mermaid ${state}] ${source.length} source line(s)`
    }
    show('receiving')
    return {
      line (raw) {
        source.push(raw)
        show('receiving')
      },
      end () {
        show('complete, mermaid.render(source) goes here')
      },
    }
  },
  /* As an image, see createImage(). */
  svg (view) {
    const source = []
    view.textContent = '[svg] receiving'
    return {
      line (raw) {
        source.push(raw)
      },
      end () {
        const src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source.join('\n'))
        view.replaceChildren(createImage(src, 'SVG image'))
      },
    }
  },
  callout (view, ctx) {
    const md = ctx.renderMarkdown(view)
    return md && {line: raw => md.write(raw + '\n'), end: () => md.end()}
  },
}

/**
 * Line kinds: the block it belongs to, its element, whether it may join the
 * previous block of that type, whether it shows its raw text, and whether it
 * is syntax only (kept in the DOM, never displayed).
 */
const LINE_KINDS = {
  'paragraph':   {block: 'paragraph', tag: 'span', join: true},
  'heading':     {block: 'heading'},
  'hr':          {block: 'hr', tag: 'hr'},
  'blank':       {block: 'blank', join: true},
  'quote':       {block: 'quote', join: true},
  'list-item':   {block: 'list', join: true},
  'list-cont':   {block: 'list', join: true},
  'table-row':   {block: 'table', tag: 'tr', join: true},
  'table-delim': {block: 'table', tag: 'tr', join: true, raw: true, syntax: true},
  'fence-open':  {block: 'code', raw: true, syntax: true},
  'code':        {block: 'code', join: true, raw: true},
  'fence-close': {block: 'code', join: true, raw: true, syntax: true},
}

/* A pipe in inline code or link text does not split the cell. */
function splitTableRow (raw) {
  let s = raw.trim()
  if (s[0] === '|')
    s = s.slice(1)
  const cells = []
  let cur = ''
  let code = false
  let brackets = 0
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (ch === '\\' && s[i + 1] === '|') {
      cur += '|'
      i++
      continue
    }
    if (ch === '`')
      code = !code
    else if (!code && ch === '[')
      brackets++
    else if (!code && ch === ']' && brackets)
      brackets--
    if (ch === '|' && !code && !brackets) {
      cells.push(cur)
      cur = ''
    } else {
      cur += ch
    }
  }
  if (cur.trim())
    cells.push(cur) // row still streaming, or no trailing pipe
  return cells
}

/**
 * reveal: animate each line in as it arrives, for live streams.
 * depth: nesting level, for renderers created by custom blocks.
 * onLink(url, label): for each link rendered.
 * href(url): the link target to use for a url of the source.
 */
export function createMarkdownRenderer (root, {reveal = false, depth = 0, onLink, href = url => url} = {}) {
  root.classList.add('md')
  let last = null // the block of the previous line
  let lineCount = 0

  function classify (raw) {
    if (last && last.type === 'code' && !last.closed) {
      const m = /^ {0,3}(`{3,}|~{3,})\s*$/.exec(raw)
      const closes = m && m[1][0] === last.fence.char && m[1].length >= last.fence.len
      return {kind: closes ? 'fence-close' : 'code'}
    }
    if (!raw.trim())
      return {kind: 'blank'}

    let m
    if ((m = /^ {0,3}(`{3,}|~{3,})\s*([^\s`]*)/.exec(raw)) &&
        !(m[1][0] === '`' && raw.includes('`', m[0].length))) {
      return {
        kind: 'fence-open',
        fence: {char: m[1][0], len: m[1].length},
        lang: m[2].toLowerCase(),
        info: raw.slice(m[0].length).trim(),
      }
    }
    if ((m = /^ {0,3}(#{1,6})(?:\s+(.*))?$/.exec(raw))) {
      const level = m[1].length
      return {kind: 'heading', tag: 'h' + level, text: (m[2] || '').replace(/\s+#+\s*$/, '')}
    }
    if (/^ {0,3}([-*_])(?: *\1){2,} *$/.test(raw))
      return {kind: 'hr'}

    if (/^ {0,3}\|/.test(raw)) {
      const cells = splitTableRow(raw)
      const delim = last && last.type === 'table' && last.lines.length === 1 &&
                    /[-:]/.test(raw) && cells.every(c => /^\s*:?-*:?\s*$/.test(c))
      return {kind: delim ? 'table-delim' : 'table-row', cells}
    }
    if ((m = /^ {0,3}((?:>\s?)+)(.*)$/.exec(raw))) {
      const level = Math.min(m[1].replace(/\s/g, '').length - 1, MAX_INDENT_DEPTH)
      return {kind: 'quote', depth: level, text: m[2]}
    }
    if ((m = /^(\s*)([-*+]|\d{1,9}[.)])(?:\s+(.*))?$/.exec(raw))) {
      let text = m[3] || ''
      let marker = /\d/.test(m[2]) ? m[2] : '•'
      const task = /^\[([ xX])\]\s+/.exec(text)
      if (task) {
        marker = task[1] === ' ' ? '☐' : '☑'
        text = text.slice(task[0].length)
      }
      const level = Math.min(m[1].length >> 1, MAX_INDENT_DEPTH)
      return {kind: 'list-item', depth: level, marker, text}
    }
    if (last && last.type === 'list' && (m = /^(\s{2,})\S/.exec(raw))) {
      const level = Math.min((m[1].length >> 1) - 1, MAX_INDENT_DEPTH)
      return {kind: 'list-cont', depth: level, marker: '', text: raw.trim()}
    }
    return {
      kind: 'paragraph',
      text: raw.trim().replace(/\\$/, ''),
      hardBreak: /( {2,}|\\)$/.test(raw),
    }
  }

  function createBlock (type) {
    const tag = type === 'paragraph' ? 'p' : 'div'
    const block = {type, lines: [], el: DOM.new(tag, {className: 'block', block: type})}
    block.host = block.el // where line elements go
    if (type === 'table') {
      const table = DOM.new('table')
      block.host = DOM.new('tbody')
      table.append(block.host)
      block.el.append(table)
    } else if (type === 'code') {
      block.host = DOM.new('pre', {className: 'block-source'})
      block.view = DOM.new('div', {className: 'block-view'}) // output of custom blocks
      block.el.append(block.host, block.view)
    }
    root.append(block.el)
    return block
  }

  function renderLine (line) {
    const {el: elem, cls, block} = line
    elem.replaceChildren()
    if (cls.depth != null)
      elem.style.setProperty('--depth', cls.depth)
    if (cls.marker != null)
      elem.dataset.marker = cls.marker
    if (cls.kind === 'table-row') {
      const header = block.header && line.index === 0
      cls.cells.forEach((cell, c) => {
        const td = DOM.new(header ? 'th' : 'td')
        if (block.align && block.align[c])
          td.style.textAlign = block.align[c]
        renderInline(td, cell.trim(), href)
        elem.append(td)
      })
    } else if (cls.text != null) {
      renderInline(elem, cls.text, href)
      if (cls.hardBreak)
        elem.append(DOM.new('br'))
    } else if (LINE_KINDS[cls.kind].raw) {
      elem.textContent = line.raw
    }
  }

  function startCustom (block, cls) {
    if (!Object.hasOwn(customBlocks, cls.lang))
      return
    const ctx = {
      info: cls.info,
      depth,
      renderMarkdown (container) {
        if (depth >= MD_MAX_DEPTH)
          return null
        return createLineStream(createMarkdownRenderer(container, {reveal, depth: depth + 1, onLink, href}))
      },
    }
    try {
      block.custom = customBlocks[cls.lang](block.view, ctx) || null
    } catch (err) {
      console.error('custom block', cls.lang, err)
      block.custom = null
    }
    if (block.custom)
      block.el.dataset.custom = cls.lang
  }

  function custom (block, method, arg) {
    if (!block.custom)
      return
    try {
      block.custom[method](arg)
    } catch (err) {
      console.error('custom block', block.lang, err)
      block.custom = null
    }
  }

  function closeCode (block, terminated) {
    block.closed = true
    block.el.dataset.state = terminated ? 'closed' : 'unterminated'
    custom(block, 'end')
  }

  function addLine (raw) {
    const cls = classify(raw)
    const def = LINE_KINDS[cls.kind]
    const block = def.join && last && last.type === def.block ? last : createBlock(def.block)
    const line = {
      el: DOM.new(cls.tag || def.tag || 'div', {className: 'line', line: lineCount++, kind: cls.kind}),
      cls,
      raw,
      block,
      index: block.lines.length,
    }
    renderLine(line)
    if (onLink) {
      for (const a of line.el.querySelectorAll('a.link[href]'))
        onLink(a.href, a.textContent === a.getAttribute('href') ? '' : a.textContent)
    }
    block.host.append(line.el)
    block.lines.push(line)
    last = block
    if (reveal && !def.syntax)
      animateIn(line.el)

    switch (cls.kind) {
      case 'fence-open':
        block.fence = cls.fence
        block.lang = cls.lang
        block.el.dataset.lang = cls.lang
        block.el.dataset.state = 'open'
        startCustom(block, cls)
        break
      case 'code':
        custom(block, 'line', raw)
        break
      case 'fence-close':
        closeCode(block, true)
        break
      case 'table-delim':
        block.header = true
        block.align = cls.cells.map(c => {
          const s = c.trim()
          const l = s.startsWith(':')
          const r = s.endsWith(':')
          return l && r ? 'center' : r ? 'right' : l ? 'left' : ''
        })
        renderLine(block.lines[0]) // promote the first row to header
        break
    }
  }

  return {
    line: addLine,
    end () {
      if (last && last.type === 'code' && !last.closed)
        closeCode(last, false)
    },
  }
}
