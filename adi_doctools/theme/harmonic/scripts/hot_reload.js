"use strict";

import { DispatchEvent } from './event.js'
import { Toolbox } from './toolbox.js'
import { State } from './state.js'
import { DOM } from './dom.js'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const BLOCKS = 'h1, h2, h3, h4, h5, h6, p, pre, pre > span, span.pre, a, ul, ol, dl, table, blockquote'
const own_text = node => DOM.getOwnText(node).replace(/\s+/g, " ").trim()

export class HotReload {
  constructor (app) {
    this.parent = app
    if (this.parent.state.offline === true)
      return
    this.href = location.href
    app.hot_reload = this
    let $ = this.$ = {}
    $.toctree = document.querySelector('.sphinxsidebar .toc-tree')
    $.documentwrapper = document.querySelector('.documentwrapper')
    $.bodywrapper = document.querySelector('.documentwrapper .bodywrapper')
    $.content = document.querySelector('.documentwrapper .body')
    $.localtoc = document.querySelector('.localtoc nav')
    $.tocwrapper = document.querySelector('.localtoc .tocwrapper')
    $.related = document.querySelector('.documentwrapper .related')
    $.breadcrumb = document.querySelector('.bodywrapper .body-header .breadcrumb')
    $.title = document.querySelector('head title')
    $.sidebarwrapper = document.querySelector('.sphinxsidebarwrapper')
    $.sidebar_logo = document.querySelector('.sphinxsidebarwrapper > a')
    $.header_logo = document.querySelector('header a#logo')

    this.toctree = new Map()
    this.js_script_current = new Set()
    this.js_script_memory = new Map()
    this.stylesheets = new Map()
    this.load_failed = false
    this.lock_load = false
    this.body_classes = this.get_body_classes(document)
    this.state_helper = Object.create(State.prototype)
    this.construct()
  }
  toc_get (href) {
    const url = new URL(href, this.href)
    return this.toctree.get(url.origin + url.pathname)
  }
  regen_breadcrumb (dom) {
    const arr = []
    if (dom.id !== "logo") {
      let node = dom.parentElement.parentElement
      while (node && node !== this.$.toctree) {
        node = node.parentElement
        if (node?.tagName === 'LI' && node.childNodes[1])
          arr.unshift(node.childNodes[1].childNodes[0])
      }
    }
    this.$.breadcrumb.classList.toggle('empty', arr.length === 0)
    this.$.breadcrumb.firstElementChild.replaceChildren(...arr.map(elem => {
      const li = DOM.new('li')
      li.append(DOM.new('a', {href: elem.href, innerText: elem.innerText}))
      return li
    }))
  }
  get_body_classes (doc) {
    return new Set([...doc.body.classList]
      .filter(name => !['js-on', 'dark', 'light'].includes(name)))
  }
  /**
   * Delegated, as repotoc and extras are generated after metadata.json.
   */
  delegate_link (ev) {
    if (ev.defaultPrevented || ev.button !== 0 ||
        ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey)
      return
    const elem = ev.target.closest('a[href]')
    if (!elem || (elem.target && elem.target !== '_self') || elem.hasAttribute('download'))
      return
    const url = new URL(elem.href)
    if (url.origin !== location.origin ||
        (/\.[^/]+$/.test(url.pathname) && !url.pathname.endsWith('.html')))
      return
    if (this.lock_load && location.href !== this.href) {
      ev.preventDefault()
      return
    }
    if (!this.toc_get(url) && !this.is_known_doc(url))
      return
    ev.preventDefault()
    this.load(elem.href, false)
  }
  landing_root () {
    return this.parent.state.subhost?.startsWith('/docs/') ? '/docs/' : '/'
  }
  is_known_repository (repository) {
    const repotoc = this.parent.state.metadata?.repotoc
    return !!repository && !!repotoc && Object.keys(repotoc).some(key =>
      key === repository || repotoc[key].alt === repository)
  }
  is_known_doc (url) {
    if (url.origin !== location.origin)
      return false
    if (url.pathname === this.landing_root())
      return !!this.parent.state.metadata?.repotoc
    const parts = url.pathname.split('/').filter(Boolean)
    return this.is_known_repository(parts[0] === 'docs' ? parts[1] : parts[0])
  }
  /**
   * Adds scripts is missing, or call to regen to the updated page.
   * Returns a promise if the script is new and must be loaded.
   */
  ensure_script (value, key) {
    if (!this.js_script_current.has(key))
      return
    const loaded = !value.isConnected && value.src ?
      new Promise(resolve => {
        value.addEventListener('load', resolve, {once: true})
        value.addEventListener('error', resolve, {once: true})
      }) : undefined
    document.head.append(value)

    if (/^https:\/\/cdn\.jsdelivr\.net\/npm\/mathjax@[^/]+\/(?:es5\/)?tex-mml-chtml\.js$/.test(key)) {
      // MathJax will apply on load, so only call if already loaded,
      // instead of having to wait if it to be loaded to call.
      if (typeof MathJax !== 'undefined')
        MathJax.typeset()
    } else if (/^https:\/\/cdn\.jsdelivr\.net\/npm\/mermaid@[^/]+\/dist\/mermaid\.esm\.min\.mjs$/.test(key)) {
      if (typeof Mermaid !== 'undefined')
        Mermaid.run()
      else
        import(key).then(m => {
          window.Mermaid = m.default
          Mermaid.run()
        })
    } else if (/^import mermaid from "https:\/\/cdn\.jsdelivr\.net\/npm\/mermaid@[^/]+\/dist\/mermaid\.esm\.min\.mjs";/.test(key)) {
      if (typeof runMermaid !== 'undefined') {
        runMermaid(true)
      } else {
        // Needs custom initialization, use one-shot setter
        Object.defineProperty(window, 'runMermaid', {
          configurable: true,
          set: f => {
            delete window.runMermaid
            window.runMermaid = f
            f(true)
          }
        })
      }
    }
    return loaded
  }
  /**
   * app.umd.js and app.min.css are identical in every build.
   */
  asset_key (href) {
    const url = new URL(href)
    url.searchParams.delete('v')
    if (/\/_static\/app\.(?:umd\.js|min\.css)$/.test(url.pathname))
      return url.pathname.substring(url.pathname.lastIndexOf('/'))
    return url.href
  }
  get_script_key (script, base = this.href) {
    if (!script.hasAttribute("src"))
      return script.innerHTML
    return this.asset_key(new URL(script.getAttribute('src'), base).href)
  }
  /**
   * Scripts already in memory cannot be removed, instead, rules per-script
   * exist to neutralize and re-apply when necessary.
   */
  sync_scripts (scripts, url) {
    const js_script = new Map([...scripts].map(script => [this.get_script_key(script, url), script]))
    this.js_script_current = new Set(js_script.keys())
    for (const [key, cache] of js_script) {
      if (this.js_script_memory.has(key))
        continue
      // Scripts from DOMParser are inert, and importNode copies that state.
      const script = document.createElement('script')
      for (const attr of cache.attributes)
        script.setAttribute(attr.name, attr.value)
      if (script.hasAttribute('src')) {
        script.src = new URL(script.getAttribute('src'), url).href
        script.async = cache.hasAttribute('async')
      }
      if (cache.innerHTML)
        script.innerHTML = cache.innerHTML
      this.js_script_memory.set(key, script)
    }
  }
  import_link (link, url) {
    const copy = document.importNode(link, true)
    copy.href = new URL(link.getAttribute('href'), url).href
    document.head.append(copy)
    return copy
  }
  sync_styles (doc, url) {
    const next = new Set()
    doc.head.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      const href = this.asset_key(new URL(link.getAttribute('href'), url).href)
      next.add(href)
      if (!this.stylesheets.has(href))
        this.stylesheets.set(href, this.import_link(link, url))
    })
    for (const [href, link] of this.stylesheets) {
      if (!next.has(href)) {
        link.remove()
        this.stylesheets.delete(href)
      }
    }
    document.head.querySelectorAll('link[rel="icon"]').forEach(link => link.remove())
    const icon = doc.head.querySelector('link[rel="icon"]')
    if (icon)
      this.import_link(icon, url)
  }
  /**
   * Replaces all meta tags with the new page meta tags.
   */
  sync_meta (doc) {
    document.head.querySelectorAll("meta").forEach(meta => meta.remove())
    doc.head.querySelectorAll("meta")
      .forEach(meta => document.head.append(document.importNode(meta, true)))
  }
  /**
   * Compensate scroll due to layout shifting (e.g. images loading)
   */
  scroll_compensate_layout (anchor) {
    let settle_timeout, raf
    const observer = new ResizeObserver(() => {
      clearTimeout(settle_timeout)
      cancelAnimationFrame(raf)
      anchor.scrollIntoView()
      settle_timeout = setTimeout(() => {
        raf = requestAnimationFrame(() => observer.disconnect())
      }, 750)
    })
    observer.observe(this.$.bodywrapper)
  }
  /**
   * Highlight changed doms.
   */
  highlight_change (old_texts, new_texts, doms) {
    const _apply = (elem, mod) => {
      elem.classList.add(`highlight-${mod}`)
      setTimeout(() => elem.classList.remove(`highlight-${mod}`), 3000)
    }
    const {added, modified, deleted} = Toolbox.LCS(old_texts, new_texts)
    for (const i of added)
      _apply(doms[i], 'added')
    for (const i of modified)
      _apply(doms[i], 'modified')
    for (const i of deleted) {
      /* Highlight neighbours */
      if (i >= 1 && doms.length > 2)
        _apply(doms[i - 1], 'deleted')
      if (i < doms.length)
        _apply(doms[i], 'deleted')
    }
    const idx = Math.min(...added, ...modified, ...deleted)
    if (idx !== Infinity)
      return doms[idx]
  }
  async probe_doc (doc, url) {
    const repository = doc.querySelector('meta[name="repository"]')?.content
    if (!this.is_known_repository(repository) ||
        !doc.querySelector('.sphinxsidebar .toc-tree, .sphinxsidebar .repotoc-tree') ||
        !doc.querySelector('.sphinxsidebarwrapper > a') ||
        !doc.querySelector('header a#logo') ||
        !doc.querySelector('.documentwrapper .body'))
      return false

    const root = new URL(State.content_root(doc), url)
    try {
      const response = await fetch(new URL('_toctree.html', root))
      if (response.ok)
        return {toctree: await response.text(), toctree_base: root}
    } catch {}
    // e.g. the landing page has no _toctree.html.
    const toctree = doc.querySelector('.sphinxsidebar .toc-tree')?.innerHTML
    if (toctree !== undefined)
      return {toctree, toctree_base: url}
  }
  set_toctree (html, base) {
    this.$.toctree.innerHTML = html
    this.$.toctree.querySelectorAll('a[href]').forEach(a => {
      a.href = new URL(a.getAttribute('href'), base).href
    })
    this.toctree.clear()
    this.init_toctree()
  }
  change_doc (doc, url, {toctree, toctree_base}) {
    this.sync_styles(doc, url)
    const sidebar = doc.querySelector('.sphinxsidebarwrapper > a')
    const logo = doc.querySelector('header a#logo')
    this.$.sidebar_logo.innerHTML = sidebar.innerHTML
    this.$.sidebar_logo.href = new URL(sidebar.getAttribute('href'), url).href
    this.$.sidebar_logo.id = sidebar.id
    this.$.header_logo.innerHTML = logo.innerHTML
    this.$.header_logo.href = new URL(logo.getAttribute('href'), url).href
    this.set_toctree(toctree, toctree_base)
    this.state_helper.init_state(this.parent.state, doc, url.href)
    this.body_classes.forEach(name => document.body.classList.remove(name))
    this.body_classes = this.get_body_classes(doc)
    this.body_classes.forEach(name => document.body.classList.add(name))
    this.parent.state.collection = undefined
    this.parent.state.tags = undefined
  }
  async replace (url, doc, track_changes = false, state = false) {
    const localtoc = doc.querySelector('.localtoc nav')
    const related = doc.querySelector('.documentwrapper .related')
    const content = doc.querySelector('.documentwrapper .body')
    const title = doc.querySelector('head title')

    if (!content || !localtoc || !title) {
      console.warn("page: failed to get elements for ", url)
      return false
    }

    const content_root = State.content_root(doc)
    const changed_build = new URL(this.parent.state.content_root, this.href).href !==
      new URL(content_root, url).href
    const next_doc = changed_build && await this.probe_doc(doc, url)
    if (changed_build) {
      if (!next_doc)
        return false
      this.$.sidebarwrapper.classList.add('fetch')
      if (!this.reduced_motion)
        await sleep(125)
    }
    if (this.pending_load && this.pending_load.state !== false)
      return true

    this.push_history(url, state)
    for (const key of Object.keys(this.parent).reverse()) {
      if ("deinit" in this.parent[key])
        this.parent[key].deinit()
    }
    DispatchEvent('app:hot_reload:page_unload')
    if (changed_build) {
      DispatchEvent('app:hot_reload:doc_unload')
      this.change_doc(doc, url, next_doc)
    }
    this.sync_scripts(doc.head.querySelectorAll('script'), url)
    this.sync_meta(doc)
    if (!changed_build)
      this.sync_styles(doc, url)
    DOM.getAll('.current', this.$.toctree).forEach(elem => elem.classList.remove('current'))
    document.documentElement.dataset.content_root = content_root
    const dom = this.toc_get(url) || this.$.header_logo

    if (dom.id !== "logo") for (let node = dom; node && node !== this.$.toctree; node = node.parentElement) {
      node.classList.add('current')
      if (node.firstElementChild?.type === "checkbox")
        node.firstElementChild.checked = true
    }
    dom.scrollIntoView({behavior: "smooth", block: "nearest", container: "all"})

    const old_texts = track_changes &&
      [...this.$.content.querySelectorAll(BLOCKS)].map(own_text)

    this.parent.state.content_root = content_root
    this.href = url.href
    this.$.content.innerHTML = content.innerHTML
    this.$.localtoc.innerHTML = localtoc.innerHTML

    let changed_dom
    if (track_changes && old_texts.length > 0) {
      const doms = [...this.$.content.querySelectorAll(BLOCKS)]
      changed_dom = this.highlight_change(old_texts, doms.map(own_text), doms)
    }
    this.$.related.innerHTML = related?.innerHTML || ''
    this.$.title.innerText = title.innerText

    this.regen_breadcrumb(dom)
    await Promise.all([...this.js_script_memory].map(([key, value]) => this.ensure_script(value, key)))
    if (changed_build) {
      this.parent.versioned.reset()
      this.parent.versioned.construct()
      this.parent.links.update_repotoc(this.parent.state.metadata.repotoc)
      DispatchEvent('app:hot_reload:doc_loaded')
    }
    for (const key in this.parent) {
      if ("init" in this.parent[key])
        this.parent[key].init()
    }
    this.clear_fetch()
    DispatchEvent('app:hot_reload:page_loaded')

    const scroll_to = (top, behavior = "instant") => window.scrollTo({top, left: 0, behavior})
    if (!this.reduced_motion && !track_changes)
      scroll_to(0)
    if (track_changes) {
      const rect = changed_dom?.getBoundingClientRect()
      if (rect && (rect.bottom < 0 || rect.top > window.innerHeight))
        changed_dom.scrollIntoView({behavior: 'auto', block: 'center'})
      else
        scroll_to(this.scrollY)
    } else if (url.hash && isNaN(this.scrollY)) {
      setTimeout(() => {
        const anchor = document.querySelector(url.hash)
        if (anchor) {
          anchor.scrollIntoView({behavior: 'auto'})
          this.scroll_compensate_layout(anchor)
        }
      }, this.reduced_motion ? 0 : 125)
    } else if (!isNaN(this.scrollY)) {
      scroll_to(this.scrollY)
      if (!this.reduced_motion)
        setTimeout(() => {
          scroll_to(this.scrollY, "auto")
          this.scrollY = undefined
        }, 125) /* Correction due to Z-transform */
      else
        this.scrollY = undefined
    }
    this.load_failed = false
    return true
  }
  clear_fetch () {
    for (const key of ['sidebarwrapper', 'bodywrapper', 'tocwrapper', 'loader'])
      this.$[key].classList.remove('fetch')
    this.$.content.style.minHeight = ""
  }
  push_history (url, state) {
    if (state !== false)
      history.replaceState(state, '', url.href)
    else if (location.href !== url.href)
      history.pushState({}, '', url.href)
  }
  load_pending () {
    const pending = this.pending_load
    this.pending_load = undefined
    if (pending === undefined)
      return
    const {href, state, track_changes} = pending
    const current = new URL(this.href)
    current.hash = ''
    if (!this.load_failed && state === false && !track_changes && href === current.href)
      return
    this.load(href, state, track_changes)
  }
  /**
   * track_changes forces fetching and replacing, even if is the same page.
   * state: popstate event state or false to store current state.
   */
  async load (pathname, state, track_changes = false) {
    if (pathname === '#')
      return
    if (this.lock_load === true) {
      if (state !== false || location.href === this.href)
        this.pending_load = {href: new URL(pathname, this.href).href, state, track_changes}
      return
    }

    const current_url = new URL(this.href)
    let request_url = new URL(pathname, current_url)
    const is_same_page = !this.load_failed &&
      current_url.origin === request_url.origin &&
      current_url.pathname === request_url.pathname &&
      current_url.search === request_url.search
    if (is_same_page && !track_changes) {
      const hash = request_url.hash || '#top-anchor'
      if (state === false)
        location.hash = hash
      else if (state?.scrollY !== undefined)
        window.scrollTo({top: state.scrollY, left: 0, behavior: 'instant'})
      else
        document.querySelector(hash)?.scrollIntoView()
      this.href = location.href
      return
    }

    this.reduced_motion = Toolbox.reducedMotion(is_same_page)
    this.scrollY = is_same_page ? window.scrollY : state?.scrollY
    this.close_repotoc()
    this.lock_load = true
    if (state === false)
      history.replaceState({scrollY: window.scrollY}, '')

    this.$.content.style.minHeight = this.$.content.getBoundingClientRect().height + "px"

    let loader_
    if (!is_same_page) {
      this.$.tocwrapper.classList.add('fetch')
      this.$.bodywrapper.classList.add('fetch')
      this.$.loader.classList.remove('fail')
      loader_ = setTimeout(() => this.$.loader.classList.add('fetch'), 500)
    }

    const fetch_url = new URL(request_url)
    if (track_changes)
      fetch_url.searchParams.append(Toolbox.UID(), '')
    const time_ = Date.now()
    try {
      const {url, doc, refreshed} = await this.fetch_page(fetch_url)
      if (!refreshed)
        url.search = request_url.search
      if (!url.hash)
        url.hash = request_url.hash
      request_url = url
      const timeout = this.reduced_motion ? 0 : 125 - (Date.now() - time_)
      if (timeout > 0)
        await sleep(timeout)
      if (!(await this.replace(request_url, doc, is_same_page, state)))
        throw Object.assign(new Error('Destination is not a supported documentation build'),
          {unsupported: true})
    } catch (error) {
      if (this.pending_load)
        return
      if (error.unsupported) {
        console.warn('hot_reload: falling back to navigation', error)
        location[state === false ? 'assign' : 'replace']((error.url || request_url).href)
        return
      }
      this.push_history(request_url, state)
      this.$.tocwrapper.classList.add('fetch')
      this.$.bodywrapper.classList.add('fetch')
      this.$.loader.classList.add('fail')
      this.load_failed = true
    } finally {
      clearTimeout(loader_)
      if (!this.load_failed)
        this.clear_fetch()
      this.lock_load = false
      this.load_pending()
    }
  }
  init_toctree () {
    const append_load = (dom, alt_dom = dom) => {
      // Make absolute and strip trailing #
      alt_dom.href = alt_dom.href.replace(/#$/, '')
      this.toctree.set(alt_dom.href, dom)
    }
    DOM.getAll('.reference.internal', this.$.toctree).forEach(dom => append_load(dom))
    const {header_logo, sidebar_logo} = this.$
    if (header_logo) {
      if (sidebar_logo)
        append_load(header_logo, sidebar_logo)
      append_load(header_logo)
    }
  }
  init_others () {
    for (const script of document.head.querySelectorAll('script')) {
      const key = this.get_script_key(script)
      this.js_script_current.add(key)
      this.js_script_memory.set(key, script)
    }
    document.head.querySelectorAll('link[rel="stylesheet"]:not([data-app-module])').forEach(link => {
      link.href = link.href
      this.stylesheets.set(this.asset_key(link.href), link)
    })
  }
  init_loader () {
    const loader = this.$.loader = DOM.new('div', {id: 'loader'})
    for (let j = 0; j < 2; j++) {
      const side = DOM.new('div', {className: `wave-spinner-${j}`})
      for (let i = 0; i < 7; i++) {
        const bar = DOM.new('span')
        bar.style.animationDelay = `${i * 0.1}s`
        side.append(bar)
      }
      loader.append(side)
    }
    loader.append(DOM.new('div', {className: 'text'}), DOM.new('div', {className: 'subtext'}))
    this.$.documentwrapper.append(loader)
  }
  popstate (ev) {
    if (this.toc_get(location.href) || this.is_known_doc(new URL(location.href)))
      this.load(location.href, ev.state)
    else // Fallback
      location.href = location.href
  }
  /**
   * Hot reload the toctree.
   */
  load_toctree (toctree_url, reselect) {
    const checked_names = [...DOM.getAll('input.toctree-collapse:checked', this.$.toctree)]
      .map(input => input.name)
    toctree_url.searchParams.append(Toolbox.UID(), '')
    return fetch(toctree_url)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        return response.text()
      })
      .then(txt => {
        this.set_toctree(txt, new URL(this.parent.state.content_root, this.href))
        checked_names.forEach(name => {
          const input = this.$.toctree.querySelector(`input[name="${name}"]`)
          if (input) input.checked = true
        })
        if (reselect)
          for (let node = this.toc_get(this.href); node && node !== this.$.toctree; node = node.parentElement)
            node.classList.add('current')
      })
      .catch(error => {
        console.warn("hot_reload: failed to fetch at load_toctree", error)
      })
  }
  /**
   * Expose load call to arbitrary consumers, like dev-pool.js.
   */
  load_href (url) {
    url.hash = ''
    if (this.toc_get(url))
      this.load(url.href, false, true)
    else
      location.href = url.href
  }
  close_repotoc () {
    const input = document.querySelector('#input-show-repotoc')
    if (!input?.checked)
      return
    input.checked = false
    input.dispatchEvent(new Event('change'))
  }
  /**
   * Honor one meta refresh redirect:
   * <meta http-equiv="refresh" content="0; url=main/">
   */
  async fetch_page (url, refresh = true) {
    const response = await fetch(url)
    if (!response.ok)
      throw new Error(`HTTP ${response.status}`)
    const doc = new DOMParser().parseFromString(await response.text(), 'text/html')
    const target = refresh && doc.querySelector('meta[http-equiv="refresh" i]')
      ?.content.split(/url=/i)[1]?.trim()
    if (!target)
      return {url: new URL(response.url), doc, refreshed: !refresh}
    const next = new URL(target, response.url)
    if (next.origin !== location.origin)
      throw Object.assign(new Error('Redirect to another origin'), {unsupported: true, url: next})
    return this.fetch_page(next, false)
  }
  /**
   * Hot load url, or fallback if it does not exist.
   */
  async navigate (url, fallback, new_tab = false) {
    if (new_tab)
      return Toolbox.try_redirect(url, fallback, true)
    try {
      const response = await fetch(new URL(url, location.href), {method: 'HEAD'})
      if (response.status !== 404)
        fallback = undefined
    } catch {}
    this.load(new URL(fallback || url, location.href).href, false)
    return false
  }
  construct () {
    if (this.$.related === null) {
      this.$.related = DOM.new('div', {className: 'related'})
      this.$.documentwrapper.append(this.$.related)
    }
    this.init_toctree()
    this.init_others()
    this.init_loader()
    document.addEventListener('click', ev => this.delegate_link(ev))
    onpopstate = ev => this.popstate(ev)

    const init = () => {
      DispatchEvent('app:hot_reload:doc_loaded')
      DispatchEvent('app:hot_reload:page_loaded')
    }
    if (document.readyState === 'complete')
      init()
    else
      addEventListener('load', init, {once: true})
  }
}
