"use strict"

import {DOM} from './dom.js'
import {HTMLToMarkdown} from './html2md.js'
import {animateIn, createPresence, createLink, createLineStream,
        createPlainRenderer, createMarkdownRenderer} from './llm-markdown.js'
import {responsesStream, mockStream, kapaStream} from './llm-stream.js'
import {hasKapaConsent, requestKapaConsent} from './llm-cookie.js'

/**
 * AI assistant chat.
 * A composer floats at the bottom of the page and opens the chat when focused.
 * From $screen-1 up, both sit on the localtoc column, below on the full width.
 */

/* Below $screen-0 the chat covers the page, so a page change closes it. */
const SCREEN_0 = '(max-width: 40em)'
const STORE_KEY = 'llm:sessions'
const BACKEND_KEY = 'llm:backend'
const BACKENDS = {'v1-responses': responsesStream, 'mock': mockStream, 'kapa': kapaStream}
const KAPA_HOSTS = ['developer.analog.com', 'analogdevicesinc.github.io']

/* Replies how to set one, see LLM.backend(). */
const noBackend = name => (turns, onEvent, onEnd) => {
  onEvent({type: 'text', delta: name ? 'Unknown backend, verify settings.' :
    `No backend set, use the llm:backend on the localStorage: ${Object.keys(BACKENDS).map(n => `\`${n}\``).join(', ')}.`})
  onEnd(true)
  return () => {}
}

const PAGE_MAX = 50000

function currentPage () {
  const body = document.querySelector('.documentwrapper .body')
  const markdown = body ? new HTMLToMarkdown(location.href).convert(body) : ''
  return {title: document.title, url: location.href, markdown: markdown.slice(0, PAGE_MAX)}
}

let state = null // app.state, for the metadata

/**
 * A docs URL as on this site.
 * The replies link both the canonical remote_doc and the remote_alt mirror,
 * which renames some repositories (repotoc .alt); both are dirhtml, where
 * page/index.html is page/.
 */
function docUrl (href) {
  let url
  try {
    url = new URL(href, location.href)
  } catch {
    return href
  }
  const metadata = state.metadata
  if (!metadata?.repotoc || !metadata.remote_doc || !metadata.remote_alt)
    return url.href
  const repotoc = metadata.repotoc
  const full = url.origin + url.pathname
  const base = [metadata.remote_alt, metadata.remote_doc].find(b => full.startsWith(b))
  if (!base)
    return url.href
  const [name, ...rest] = full.slice(base.length).split('/')
  const repo = Object.keys(repotoc).find(k => k === name || repotoc[k].alt === name)
  if (!repo)
    return url.href
  const path = rest.join('/').replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '/')
  const alt = location.hostname === new URL(metadata.remote_alt).hostname
  const target = alt ? new URL(`${repotoc[repo].alt || repo}/${path}`, metadata.remote_alt) :
                       new URL(`${repo}/${path}`, metadata.remote_doc)
  target.search = url.search
  target.hash = url.hash
  return target.href
}

const STORE_VERSION = 1
const TITLE_MAX = 60

const SUGGESTION_FIRST = 'What is on this page?'
const SUGGESTIONS = [
  'What is libiio?',
  'How do I build a HDL design?',
  'How do I build the Linux kernel?',
  'What is Kuiper Linux?',
  'How do I stream data?',
  'How do I add a device tree overlay?',
  'Do I need a Linux or no-OS driver?',
  'Where do I report an issue?',
  'What is JESD204?',
]
const SUGGESTIONS_SHOWN = 2

function sample (items, n) {
  const pool = [...items]
  for (let i = 0; i < Math.min(n, pool.length); i++) {
    const j = i + Math.floor(Math.random() * (pool.length - i))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool.slice(0, n)
}

/* Button named by its tooltip. */
function createButton (className, label, tags) {
  return DOM.new('button', {className, type: 'button', title: label, ariaLabel: label, ...tags})
}

function setLabel (button, label) {
  button.title = button.ariaLabel = label
}

/**
 * Keep the scroller at the bottom while linked; scrolling up unlinks it, and
 * scrolling back down to the bottom, or a fling, links it again.
 */
function createBottomStick (scroller, observed, onStuck) {
  const STICK_MARGIN = 12 // px
  const FLING_WINDOW = 120 // ms
  const FLING_MIN_PX = 200 // px, or FLING_VIEW_FRACTION of the viewport
  const FLING_VIEW_FRACTION = 0.5
  const LEAVE_MS = 300 // ms, after an upward gesture, before it may link again
  const SLIDE_MS = 70 // ms, time constant, settles in about four

  let stuck = true
  const setStuck = next => {
    if (next === stuck)
      return
    stuck = next
    onStuck(stuck)
  }
  let lastTop = scroller.scrollTop
  let samples = [] // recent downward scrolls while unlinked
  let holding = false // touch on the scroller, or mouse down on its scrollbar
  let leaving = 0

  const distance = () => scroller.scrollHeight - scroller.clientHeight - scroller.scrollTop

  /* jump: go to the bottom at once, instead of the CSS scroll-behavior */
  const pin = jump => {
    if (!stuck || holding)
      return
    scroller.scrollTo({top: scroller.scrollHeight, behavior: jump ? 'instant' : 'auto'})
    lastTop = scroller.scrollTop
  }

  const isFling = top => {
    const now = performance.now()
    samples.push({t: now, top})
    while (now - samples[0].t > FLING_WINDOW)
      samples.shift()
    return top - samples[0].top >= Math.max(FLING_MIN_PX, scroller.clientHeight * FLING_VIEW_FRACTION)
  }

  scroller.addEventListener('scroll', () => {
    const top = scroller.scrollTop
    const dist = distance()
    const up = top < lastTop
    const down = top > lastTop
    const was = stuck
    lastTop = top

    const mayLink = !leaving
    if (mayLink && (dist <= 1 || (down && dist <= STICK_MARGIN)))
      setStuck(true)
    else if (up)
      setStuck(false)
    else if (mayLink && down && !stuck && isFling(top))
      setStuck(true)

    if (stuck || up)
      samples = []
    if (stuck && !was)
      pin()
  }, {passive: true})

  /*
   * A smooth follow in flight hides a small upward move from the scroll
   * handler, so an upward gesture unlinks directly.
   * force: even at the very top, where nothing would link it again later.
   */
  const unlink = (force = false) => {
    if (!stuck || (!force && scroller.scrollTop <= 0))
      return
    setStuck(false)
    samples = []
    scroller.scrollTo({top: scroller.scrollTop, behavior: 'instant'})
    lastTop = scroller.scrollTop
    clearTimeout(leaving)
    leaving = setTimeout(() => {
      leaving = 0
      if (distance() <= 1) {
        setStuck(true)
        pin()
      }
    }, LEAVE_MS)
  }
  const hold = on => () => {
    if (holding === on)
      return
    holding = on
    if (!on)
      pin()
  }
  scroller.addEventListener('wheel', e => {
    if (e.deltaY < 0)
      unlink()
  }, {passive: true})
  scroller.addEventListener('keydown', e => {
    if (e.target === scroller && ['ArrowUp', 'PageUp', 'Home'].includes(e.key))
      unlink()
  })
  scroller.addEventListener('touchstart', hold(true), {passive: true})
  scroller.addEventListener('touchend', hold(false))
  scroller.addEventListener('touchcancel', hold(false))
  scroller.addEventListener('mousedown', e => {
    if (e.target === scroller)
      hold(true)()
  })
  window.addEventListener('mouseup', hold(false))

  /* Slide the grown in */
  const reduced_motion = window.matchMedia('(prefers-reduced-motion: reduce)')
  let height = scroller.clientHeight
  let jumped = false
  let offset = 0
  let frame = 0
  let before = 0
  const shift = () => {
    scroller.style.transform = offset ? `translateY(${Math.round(offset)}px)` : ''
  }
  const ease = now => {
    offset *= Math.exp((before - now) / SLIDE_MS)
    before = now
    if (offset < 0.5)
      offset = 0
    shift()
    frame = offset ? requestAnimationFrame(ease) : 0
  }
  const slide = () => {
    const grown = scroller.clientHeight - height
    height = scroller.clientHeight
    if (grown <= 0 || jumped || !stuck || reduced_motion.matches)
      return
    offset += grown
    shift()
    if (!frame) {
      before = performance.now()
      frame = requestAnimationFrame(ease)
    }
  }

  /*
   * Content growth, collapsibles and resizes all resize one of the two.
   * When the scroller itself resized, jump, so the bottom does not drift.
   */
  const ro = new ResizeObserver(entries => {
    const resized = entries.some(entry => entry.target === scroller)
    if (resized)
      slide()
    pin(resized)
  })
  ro.observe(scroller)
  ro.observe(observed)

  return {
    stick (jump) {
      setStuck(true)
      pin(jump)
      if (!jump)
        return
      offset = 0
      shift()
      jumped = true
      requestAnimationFrame(() => requestAnimationFrame(() => { jumped = false }))
    },
    unlink () {
      unlink(true)
    }
  }
}

/*
 * Session DOM:
 * thread > session > turn > msg[data-role] > msg-body > part[data-part]
 * The user message has a text part, the output has activities and text parts,
 * in arrival order. An activity holds thinking and tool parts.
 */
function createMessage (turn, role) {
  const root = DOM.new('article', {className: 'msg', state: 'streaming'})
  root.dataset.role = role
  const body = DOM.new('div', {className: 'msg-body'})
  root.append(DOM.new('div', {className: 'msg-role', textContent: role}), body)
  turn.append(root)
  return {
    el: root,
    body,
    end (state = 'done') {
      root.dataset.state = state
    }
  }
}

/* Streamed text, rendered line by line by renderer(root, options). */
function createStreamPart (parent, kind, renderer, options) {
  const root = DOM.new('div', {className: 'part', state: 'streaming'})
  root.dataset.part = kind
  parent.append(root)
  const stream = createLineStream(renderer(root, options))
  return {
    kind,
    write: chunk => stream.write(chunk),
    end () {
      stream.end()
      root.dataset.state = 'done'
    }
  }
}

function createUserMessage (turn, text) {
  const msg = createMessage(turn, 'user')
  const part = createStreamPart(msg.body, 'text', createPlainRenderer)
  part.write(text)
  part.end()
  msg.end()
  return msg
}

const TOOL_VIEWS = {
  read: {
    running: 'Reading',
    done: 'Read',
    target: (input, output) => createLink(docUrl(input.url), output?.title || docUrl(input.url)),
  },
}
const DEFAULT_TOOL_VIEW = {running: 'Calling', done: 'Called', target: () => null}

function createToolPart (parent, call) {
  const view = Object.hasOwn(TOOL_VIEWS, call.name) ? TOOL_VIEWS[call.name] : DEFAULT_TOOL_VIEW
  const root = DOM.new('div', {className: 'part', tool: call.name, state: 'running'})
  root.dataset.part = 'tool'
  parent.append(root)
  const render = (state, output) => {
    root.dataset.state = state
    const verb = DOM.new('span', {
      className: 'tool-verb',
      textContent: state === 'done' ? view.done : view.running
    })
    root.replaceChildren(verb, ' ', view.target(call.input, output) || call.name)
  }
  render('running')
  return {
    result (output) {
      render('done', output)
    },
    abort () {
      if (root.dataset.state === 'running')
        root.dataset.state = 'aborted'
    }
  }
}

/** Collapsible with the thinking and tool calls. */
function createActivity (parent) {
  const root = DOM.new('div', {className: 'activity', state: 'active'})
  const status = DOM.new('button', {className: 'activity-status', type: 'button', ariaExpanded: 'false'})
  const wrap = DOM.new('div', {className: 'activity-wrap'})
  const body = DOM.new('div', {className: 'activity-body'})
  wrap.append(body)
  root.append(status, wrap)
  parent.append(root)
  const toggle = open => {
    status.ariaExpanded = String(open)
    wrap.inert = !open
  }
  toggle(false)
  status.addEventListener('click', () => toggle(status.ariaExpanded !== 'true'))
  let tools = 0
  const render = () => {
    const active = root.dataset.state === 'active'
    const called = tools ? `, called ${tools} tool${tools === 1 ? '' : 's'}` : ''
    status.textContent = (active ? 'Thinking' : 'Thought') + called + (active ? '...' : '')
  }
  render()
  return {
    body,
    toolCalled () {
      tools++
      render()
    },
    finish () {
      root.dataset.state = 'done'
      toggle(false)
      render()
    }
  }
}

/**
 * Output message, consumes the stream events.
 * live: streaming.
 */
function createOutputMessage (turn, sources, live) {
  const msg = createMessage(turn, 'output')

  const working = DOM.new('div', {className: 'msg-working', role: 'status', textContent: 'Thinking...'})
  msg.el.append(working)
  msg.el.dataset.state = 'pending'
  const started = () => {
    if (msg.el.dataset.state !== 'pending')
      return
    working.remove()
    msg.el.dataset.state = 'streaming'
  }

  const calls = new Map() // id: {call, part}
  let activity = null
  let current = null // streaming thinking or text part

  const closeCurrent = () => {
    if (!current)
      return
    current.end()
    current = null
  }
  const closeActivity = () => {
    if (!activity)
      return
    closeCurrent()
    activity.finish()
    activity = null
  }
  const openActivity = () => {
    if (!activity) {
      closeCurrent()
      activity = createActivity(msg.body)
    }
    return activity
  }
  const streamInto = (parent, kind) => {
    if (!current || current.kind !== kind) {
      closeCurrent()
      const onLink = kind === 'text' ? (url, title) => sources.cite(url, title) : undefined
      current = createStreamPart(parent, kind, createMarkdownRenderer, {reveal: live, onLink, href: docUrl})
    }
    return current
  }

  return {
    el: msg.el,
    handle (ev) {
      started()
      switch (ev.type) {
        case 'thinking':
          streamInto(openActivity().body, 'thinking').write(ev.delta)
          break
        case 'tool_call': {
          const a = openActivity()
          closeCurrent()
          calls.set(ev.id, {call: ev, part: createToolPart(a.body, ev)})
          a.toolCalled()
          if (ev.name === 'read')
            sources.add(ev.input.url)
          break
        }
        case 'tool_result': {
          const entry = calls.get(ev.id)
          if (!entry)
            break
          entry.part.result(ev.output)
          if (entry.call.name === 'read' && ev.output.title)
            sources.setTitle(entry.call.input.url, ev.output.title)
          break
        }
        case 'text':
          closeActivity()
          streamInto(msg.body, 'text').write(ev.delta)
          break
        case 'source':
          sources.cite(ev.url, sourceTitle(ev.title))
          break
      }
    },
    end (stopped) {
      started()
      closeCurrent()
      closeActivity()
      calls.forEach(entry => entry.part.abort())
      msg.end(stopped ? 'stopped' : 'done')
    }
  }
}

/* kapa.ai titles are "page|section", the section may be empty. */
const sourceTitle = title => (title || '').split('|').map(s => s.trim()).filter(Boolean).join(' - ')

/* Pages read or cited by a session, deduplicated, as on this site. */
function createSources (onChange) {
  const byUrl = new Map()
  const key = url => docUrl(url).replace(/#.*$/, '')
  const list = () => Array.from(byUrl.values())
  return {
    list,
    add (url) {
      const s = byUrl.get(key(url)) || {url: key(url), title: '', count: 0}
      s.count++
      byUrl.set(key(url), s)
      onChange(list())
    },
    setTitle (url, title) {
      const s = byUrl.get(key(url))
      if (!s)
        return
      s.title = title
      onChange(list())
    },
    /* A link on the reply, does not count as read. */
    cite (url, title) {
      const s = byUrl.get(key(url))
      if (s && (s.title || !title))
        return
      if (s)
        s.title = title
      else
        byUrl.set(key(url), {url: key(url), title, count: 0})
      onChange(list())
    }
  }
}

/**
 * Popup with a sources list.
 * The button has a dot while there are sources not seen on the popup yet.
 */
function createTray (tray, button) {
  const empty = DOM.new('p', {className: 'tray-empty', textContent: 'No pages read yet.'})
  const list = DOM.new('ul', {className: 'tray-list'})
  tray.append(empty, list)
  const show = createPresence(tray)
  let open = false
  let seen = 0

  const toggle = next => {
    open = next
    show(open)
    button.ariaExpanded = String(open)
    if (open) {
      seen = list.children.length
      button.dataset.unseen = false
    }
  }
  button.addEventListener('click', () => toggle(!open))

  return {
    get open () {
      return open
    },
    close () {
      toggle(false)
    },
    /* reset: another session's list, already seen */
    render (items, reset = false) {
      if (reset || open)
        seen = items.length
      button.dataset.unseen = items.length > seen
      setLabel(button, `Sources (${items.length})`)
      empty.hidden = items.length > 0
      list.replaceChildren(...items.map(s => {
        const li = DOM.new('li', {className: 'tray-item'})
        li.append(createLink(s.url, s.title || s.url))
        if (s.count > 1)
          li.append(' ', DOM.new('span', {className: 'tray-count', textContent: `x${s.count}`}))
        return li
      }))
    }
  }
}

/**
 * Sessions, persisted on localStorage as:
 * * session: {id, title, turns: [turn]}
 * * turn: {user, events: [event], state: 'streaming' | 'done' | 'stopped'}
 * The DOM is always produced by feeding the events to createOutputMessage,
 * live or on restore.
 */
function createSessionStore (key) {
  const validEvent = e => e && typeof e.type === 'string'
  const validTurn = t => t && typeof t.user === 'string' &&
                         Array.isArray(t.events) && t.events.every(validEvent)
  const validSession = s => s && typeof s.id === 'string' && typeof s.title === 'string' &&
                            Array.isArray(s.turns) && s.turns.every(validTurn)
  const blank = () => ({id: DOM.UID(), title: '', turns: []})

  let sessions = []
  let activeId = null
  try {
    const data = JSON.parse(localStorage.getItem(key))
    if (data && data.version === STORE_VERSION && Array.isArray(data.sessions)) {
      const seen = new Set()
      sessions = data.sessions.filter(s => validSession(s) && !seen.has(s.id) && seen.add(s.id))
      activeId = data.activeId
    }
  } catch (err) {
    console.warn('llm: sessions not restored', err)
  }
  if (!sessions.length)
    sessions.push(blank())
  if (!sessions.some(s => s.id === activeId))
    activeId = sessions[sessions.length - 1].id

  return {
    get sessions () {
      return sessions
    },
    get activeId () {
      return activeId
    },
    get active () {
      return sessions.find(s => s.id === activeId)
    },
    setActive (id) {
      if (sessions.some(s => s.id === id))
        activeId = id
    },
    create () {
      const s = blank()
      sessions.push(s)
      return s
    },
    /* Always leaves one session, and a valid active one. */
    remove (id) {
      const i = sessions.findIndex(s => s.id === id)
      if (i < 0)
        return
      sessions.splice(i, 1)
      if (!sessions.length)
        sessions.push(blank())
      if (activeId === id)
        activeId = sessions[Math.min(i, sessions.length - 1)].id
    },
    save () {
      try {
        localStorage.setItem(key, JSON.stringify({version: STORE_VERSION, activeId, sessions}))
      } catch (err) {
        console.warn('llm: sessions not saved', err)
      }
    }
  }
}

/* Merge consecutive deltas. */
function recordEvent (turn, ev) {
  const last = turn.events[turn.events.length - 1]
  if (ev.delta != null && last && last.type === ev.type)
    last.delta += ev.delta
  else
    turn.events.push({...ev})
}

/**
 * One session's DOM and live stream, built by replaying the stored turns.
 * Keeps working while detached, so a reply goes on in a background tab.
 * hooks.onSources(items): the sources list changed.
 * hooks.onState(): a turn started or ended.
 * hooks.stream(): the backend for the next reply.
 */
function createSessionView (session, hooks) {
  const root = DOM.new('div', {className: 'session'})
  const sources = createSources(hooks.onSources)
  let abort = null // set while a reply is streaming

  const addTurn = (turn, live) => {
    const container = DOM.new('div', {className: 'turn'})
    root.append(container)
    const user = createUserMessage(container, turn.user)
    const output = createOutputMessage(container, sources, live)
    if (live) {
      animateIn(user.el)
      animateIn(output.el)
    }
    return output
  }

  for (const turn of session.turns) {
    if (turn.state !== 'done')
      turn.state = 'stopped' // the page went away mid-stream
    const output = addTurn(turn)
    try {
      turn.events.forEach(output.handle)
    } catch (err) {
      console.error('llm: turn not fully restored', err)
    }
    output.end(turn.state === 'stopped')
  }

  return {
    el: root,
    sources,
    get streaming () {
      return abort !== null
    },
    send (text) {
      const turn = {user: text, events: [], state: 'streaming'}
      session.turns.push(turn)
      if (!session.title)
        session.title = text.replace(/\s+/g, ' ').slice(0, TITLE_MAX)
      const output = addTurn(turn, true)
      const onEvent = ev => {
        recordEvent(turn, ev)
        output.handle(ev)
      }
      let ended = false
      const onEnd = stopped => {
        ended = true
        turn.state = stopped ? 'stopped' : 'done'
        output.end(stopped)
        abort = null
        hooks.onState()
      }
      const stop = hooks.stream()(session.turns, onEvent, onEnd)
      if (!ended) {
        abort = stop
        hooks.onState()
      }
    },
    stop () {
      if (abort)
        abort()
    }
  }
}

/**
 * Visible area to CSS variables.
 * With an on-screen keyboard, the layout viewport may not resize, and fixed
 * boxes would slide out of view or under the keyboard.
 */
function trackVisualViewport (root) {
  const vv = window.visualViewport
  if (!vv)
    return
  const update = () => {
    if (vv.scale > 1.01)
      return // pinch-zoomed
    const layoutHeight = document.documentElement.clientHeight
    root.style.setProperty('--vv-top', vv.offsetTop + 'px')
    root.style.setProperty('--vv-bottom', Math.max(0, layoutHeight - vv.offsetTop - vv.height) + 'px')
    root.style.setProperty('--vv-height', vv.height + 'px')
  }
  vv.addEventListener('resize', update)
  vv.addEventListener('scroll', update)
  update()
}

/**
 * Textarea as tall as its content, capped by the CSS max-height.
 * Returns resize(), to call after changing the value from code.
 */
function createAutosize (textarea) {
  let width = -1
  const resize = () => {
    const max = parseFloat(getComputedStyle(textarea).maxHeight)
    const border = textarea.offsetHeight - textarea.clientHeight
    textarea.style.height = 'auto'
    const wanted = textarea.scrollHeight + border
    textarea.style.height = wanted + 'px'
    textarea.style.overflowY = wanted > max ? 'auto' : 'hidden'
  }
  textarea.addEventListener('input', resize)
  // a new width re-wraps the text, ignore our own height changes
  new ResizeObserver(() => {
    if (textarea.clientWidth === width)
      return
    width = textarea.clientWidth
    resize()
  }).observe(textarea)
  return resize
}

/* Element height as a CSS variable. */
function trackHeight (element, root, name) {
  new ResizeObserver(() => {
    root.style.setProperty(name, element.getBoundingClientRect().height + 'px')
  }).observe(element)
}

export class LLM {
  constructor (app) {
    this.parent = app
    app.llm = this
    state = app.state
    this.open = false
    this.expanded = false
    this.effort = false
    this.views = new Map() // session id: view
    this.construct()
    // the links are rebuilt for this site once the metadata is in
    if (!app.state.metadata)
      app.fetch.then(() => this.rebuild())
  }
  /* Views built again from the sessions, except the ones streaming. */
  rebuild () {
    for (const [id, view] of this.views) {
      if (!view.streaming)
        this.views.delete(id)
    }
    this.activate(this.store.activeId)
  }
  /**
   * Backend for the next reply, as {name, arg}, from the llm:backend on the
   * localStorage as "<name>[:<arg>]", e.g. "mock" or "v1-responses:127.0.0.1:8200".
   */
  backend () {
    let value = KAPA_HOSTS.includes(location.hostname) ? 'kapa' : ''
    value = localStorage.getItem(BACKEND_KEY) || value
    const i = value.indexOf(':')
    return i < 0 ? {name: value, arg: ''} : {name: value.slice(0, i), arg: value.slice(i + 1)}
  }
  has_consent () {
    return this.backend().name !== 'kapa' || hasKapaConsent()
  }
  stream () {
    const {name, arg} = this.backend()
    const backend = Object.hasOwn(BACKENDS, name) ? BACKENDS[name] : noBackend(name)
    return (turns, onEvent, onEnd) => backend(turns, onEvent, onEnd, {thinking: this.effort, arg, page: currentPage()})
  }
  set_effort (effort) {
    this.effort = effort
    this.$.effort.ariaPressed = String(effort)
  }
  is_active (session) {
    return session.id === this.store.activeId
  }
  view_of (session) {
    let view = this.views.get(session.id)
    if (!view) {
      view = createSessionView(session, {
        onSources: items => {
          if (this.is_active(session))
            this.tray.render(items)
        },
        onState: () => {
          this.store.save()
          this.refresh()
        },
        stream: () => this.stream(),
      })
      this.views.set(session.id, view)
    }
    return view
  }
  new_tab (session) {
    const view = this.views.get(session.id)
    const title = session.title || 'New chat'
    const active = this.is_active(session)
    const tab = DOM.new('div', {
      className: 'tab',
      session: session.id,
      active,
      state: view?.streaming ? 'streaming' : 'idle',
    })
    tab.append(
      DOM.new('button', {
        className: 'tab-select',
        type: 'button',
        role: 'tab',
        ariaSelected: String(active),
        action: 'select',
        title,
        textContent: title,
      }),
      createButton('tab-close', 'Close session', {action: 'close'})
    )
    return tab
  }
  /* Tabs, send button and empty state, from the current state. */
  refresh () {
    const store = this.store
    const started = store.sessions.filter(s => s.turns.length)
    const empty = store.active.turns.length === 0
    this.$.new_session.dataset.active = empty
    this.$.new_session.ariaPressed = String(empty)
    this.$.new_session.hidden = !started.length
    this.$.tabs.replaceChildren(...started.map(session => this.new_tab(session)))
    const streaming = this.view_of(store.active).streaming
    this.$.send.dataset.streaming = streaming
    setLabel(this.$.send, streaming ? 'Stop' : 'Send')
    this.show_placeholder(empty)
  }
  scroll_tab () {
    this.$.tabs.querySelector('[data-active="true"]')
      ?.scrollIntoView({block: 'nearest', inline: 'nearest'})
  }
  activate (id) {
    this.store.setActive(id)
    this.store.save()
    const view = this.view_of(this.store.active)
    this.$.thread.replaceChildren(view.el)
    this.tray.render(view.sources.list(), true)
    this.refresh()
    this.scroll_tab()
    this.stick.stick(true)
  }
  set_open (open) {
    if (open === this.open)
      return
    this.open = open
    if (this.expanded)
      this.animate_resize()
    this.show_chat(open)
    this.sync_cancel()
    if (open) {
      this.stick.stick(true) // a hidden scroller loses its position
      this.scroll_tab()
    } else {
      this.tray.close() // it covers the composer
      this.$.input.blur() // so the next focus opens it again
      this.$.input.value = ''
      this.autosize()
    }
  }
  /* From $screen-1 up, the full screen instead of the localtoc column. */
  set_expanded (expanded, save = false) {
    this.expanded = expanded
    if (save)
      this.parent.domain.update_settings(s => { (s.llm ??= {}).panel = {...s.llm.panel, expanded} })
    this.animate_resize()
    this.$.chat.dataset.expanded = expanded
    this.sync_cancel()
    this.$.expand.ariaPressed = String(expanded)
    setLabel(this.$.expand, expanded ? 'Collapse' : 'Expand')
  }
  animate_resize () {
    clearTimeout(this.resizing)
    this.$.chat.dataset.resizing = ''
    this.resizing = setTimeout(() => delete this.$.chat.dataset.resizing, 20)
  }
  /* The full screen background, only when open and expanded. */
  sync_cancel () {
    this.$.cancel.classList.toggle('on', this.open && this.expanded)
  }
  /* Reuse an empty session instead of piling them up. */
  new_session () {
    const empty = this.store.sessions.find(s => !s.turns.length)
    this.shuffle_suggestions()
    this.activate((empty || this.store.create()).id)
    this.$.input.focus()
  }
  close_session (id) {
    this.views.get(id)?.stop()
    this.views.delete(id)
    this.store.remove(id)
    this.activate(this.store.activeId)
  }
  /* One reply at a time, what was typed stays on the composer. */
  send_message (text = this.$.input.value.trim()) {
    this.set_open(true)
    const view = this.view_of(this.store.active)
    if (view.streaming || !text)
      return
    this.$.input.value = ''
    this.autosize()
    view.send(text)
    this.stick.stick()
  }
  escape () {
    if (this.tray.open)
      this.tray.close()
    else
      this.set_open(false)
  }
  /**
   * Hot reload, before the page changes.
   * Below $screen-0 and expanded the chat covers the page, so close it
   */
  deinit () {
    if (window.matchMedia(SCREEN_0).matches)
      this.set_open(false)
    else if (this.expanded)
      this.set_expanded(false)
  }
  new_chat () {
    const $ = this.$
    $.chat = DOM.new('section', {className: 'chat', hidden: true})
    $.tabs = DOM.new('div', {className: 'chat-tabs', role: 'tablist', ariaLabel: 'Sessions'})
    $.new_session = createButton('chat-new', 'New session')
    $.sources = createButton('chat-sources', 'Sources (0)', {ariaExpanded: 'false'})
    $.expand = createButton('chat-expand', 'Expand', {ariaPressed: 'false'})
    $.close = createButton('chat-close', 'Close chat')
    $.tray = DOM.new('div', {className: 'chat-tray', id: 'chat-tray', hidden: true})
    $.sources.setAttribute('aria-controls', $.tray.id)
    $.placeholder = this.new_placeholder()
    $.thread = DOM.new('div', {className: 'chat-thread'})
    $.log = DOM.new('div', {className: 'chat-log', role: 'log', tabIndex: 0})
    $.log.append($.thread)

    const header = DOM.new('header', {className: 'chat-header'})
    const actions = DOM.new('div', {className: 'chat-header-actions'})
    actions.append($.sources, $.expand, $.close)
    header.append($.tabs, $.new_session, actions)
    $.panel = DOM.new('div', {className: 'chat-panel'})
    $.panel.append($.log)
    $.chat.append(header, $.tray, $.panel, $.placeholder)
  }
  new_placeholder () {
    const placeholder = DOM.new('div', {className: 'chat-placeholder', hidden: true})
    const greeting = DOM.new('div', {className: 'chat-greeting'})
    greeting.append(DOM.new('p', {className: 'chat-greeting-title', textContent: "Here to help, let's begin?"}))
    this.$.suggestions = DOM.new('div', {className: 'chat-suggestions'})
    this.$.suggestions.addEventListener('click', e => {
      const card = e.target.closest('.chat-suggestion')
      if (card)
        this.send_message(card.textContent)
    })
    this.shuffle_suggestions()
    placeholder.append(greeting, this.$.suggestions)
    return placeholder
  }
  shuffle_suggestions () {
    const picks = [SUGGESTION_FIRST, ...sample(SUGGESTIONS, SUGGESTIONS_SHOWN)]
    this.$.suggestions.replaceChildren(...picks.map(text =>
      DOM.new('button', {className: 'chat-suggestion', type: 'button', textContent: text})))
  }
  new_composer () {
    const $ = this.$
    $.composer = DOM.new('form', {className: 'chat-composer'})
    $.input = DOM.new('textarea', {
      className: 'chat-input',
      rows: 1,
      placeholder: 'Ask the docs',
      ariaLabel: 'Ask the docs',
    })
    $.effort = createButton('chat-effort', 'Think deeper, slower', {
      ariaPressed: 'false',
      textContent: 'Effort',
    })
    $.send = createButton('chat-send', 'Send', {type: 'submit'})
    $.field = DOM.new('div', {className: 'chat-field'})
    $.field.append($.input)
    const actions = DOM.new('div', {className: 'chat-actions'})
    actions.append($.effort, $.send)
    $.composer.append($.field, actions)
  }
  construct () {
    const $ = this.$ = {}
    this.new_chat()
    this.new_composer()
    $.cancel = DOM.new('div', {id: 'cancel-area-llm-fullscreen'})
    document.body.append($.cancel, $.chat, $.composer)

    const root = document.documentElement
    this.stick = createBottomStick($.log, $.thread, stuck => { $.panel.dataset.fade = !stuck })
    trackVisualViewport(root)
    trackHeight($.composer, root, '--chat-composer-height')
    this.autosize = createAutosize($.input)
    this.show_chat = createPresence($.chat)
    this.show_placeholder = createPresence($.placeholder)
    this.tray = createTray($.tray, $.sources)
    this.store = createSessionStore(STORE_KEY)

    $.tabs.addEventListener('click', e => {
      const button = e.target.closest('[data-action]')
      if (!button)
        return
      const id = button.closest('.tab').dataset.session
      if (button.dataset.action === 'close')
        this.close_session(id)
      else if (id !== this.store.activeId) // re-showing would drop its scroll position
        this.activate(id)
    })
    $.new_session.addEventListener('click', () => this.new_session())
    // opening the thinking is reading it, do not scroll it away
    $.thread.addEventListener('click', e => {
      if (e.target.closest('.activity-status'))
        this.stick.unlink()
    })
    $.composer.addEventListener('submit', e => {
      e.preventDefault()
      const view = this.view_of(this.store.active)
      if (view.streaming)
        view.stop()
      else
        this.send_message()
    })
    $.input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
        e.preventDefault()
        this.send_message()
      }
    })
    $.input.addEventListener('focus', () => {
      if (this.has_consent()) {
        this.set_open(true)
      } else {
        $.input.blur() // so the next focus asks again
        requestKapaConsent(() => $.input.focus())
      }
    })
    // the whole field, icon and padding included, opens the chat
    $.field.addEventListener('click', e => {
      if (e.target !== $.input)
        $.input.focus()
    })
    $.expand.addEventListener('click', () => this.set_expanded(!this.expanded, true))
    $.effort.addEventListener('click', () => this.set_effort(!this.effort))
    $.close.addEventListener('click', () => this.set_open(false))
    $.cancel.addEventListener('click', () => this.set_open(false))
    const own_key = e => {
      if (e.key !== 'Escape')
        e.stopPropagation()
    }
    for (const node of [$.chat, $.composer]) {
      node.addEventListener('keydown', own_key)
      node.addEventListener('keyup', own_key)
    }
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this.open)
        this.escape()
    })
    document.addEventListener('keydown', e => {
      if (e.code !== 'KeyI' || !e.ctrlKey || e.altKey || e.shiftKey || e.metaKey)
        return
      e.preventDefault()
      e.stopPropagation()
      if (this.open)
        this.set_open(false)
      else
        $.input.focus()
    }, {capture: true})
    this.set_expanded(this.parent.domain.get_settings().llm?.panel?.expanded === true)
    window.addEventListener('app:search:opened', () => this.set_open(false))
    window.addEventListener('pagehide', () => this.store.save())

    this.activate(this.store.activeId)
  }
}
