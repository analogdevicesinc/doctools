"use strict";

import { DispatchEvent } from './event.js'
import { Toolbox } from './toolbox.js'
import { State } from './state.js'
import { DOM } from './dom.js'

export class HotReload {
  constructor (app) {
    this.parent = app
    if (this.parent.state.offline === true)
      return
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
    this.body_classes = this.get_body_classes(document)

    this.location_href
    this.lock_load = false
    this.reduced_motion
    this.scrollY = undefined

    this.state_helper = Object.create(State.prototype)
    this.construct()

    app.hot_reload = this
  }
  regen_breadcrumb (dom) {
    let ol = this.$.breadcrumb.firstElementChild
    ol.innerHTML = ''

    if (dom.id === "logo") {
      this.$.breadcrumb.classList.add('empty')
      return
    }

    let node = dom.parentElement.parentElement
    let arr = []
    while (node && node !== this.$.toctree) {
      node = node.parentElement
      if (node && node.tagName == 'LI') {
        if (node.childNodes[1]) {
          let elem = node.childNodes[1].childNodes[0]
          arr.push(elem)
        }
      }
    }
    if (arr.length === 0)
      this.$.breadcrumb.classList.add('empty')
    else
      this.$.breadcrumb.classList.remove('empty')
    arr.reverse().forEach((elem) => {
      const li = DOM.new('li')
      li.append(DOM.new('a', {
        'href': elem.href,
        'innerText': elem.innerText
      }))
      ol.appendChild(li)
    })
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
    url.hash = ''
    const dom = this.toctree.get(url.href)
    if (dom === undefined && !this.is_known_doc(url))
      return
    ev.preventDefault()
    this.load(dom || this.$.header_logo, elem.href, false)
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
  remove_script (key) {
    /* Nothing to do */
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
    document.querySelector('head').append(value)

    if (key.startsWith("https://")) {
      if (new RegExp("^https://cdn\\.jsdelivr\\.net/npm/mathjax@[^/]+/(?:es5/)?tex-mml-chtml\\.js$").test(key)) {
        // MathJax will apply on load, so only call if already loaded,
        // instead of having to wait if it to be loaded to call.
        if (typeof MathJax !== 'undefined')
          MathJax.typeset()
        // For reference only, if custom initialization was necessary
        //else
        //  value.onload = () => { console.log("MathJax loaded") }
      } else if (new RegExp("^https://cdn\\.jsdelivr\\.net/npm/mermaid@[^/]+/dist/mermaid\\.esm\\.min\\.mjs$").test(key)) {
        if (typeof Mermaid !== 'undefined')
          Mermaid.run()
        else
          import(key).then(m => {
            window.Mermaid = m.default
            Mermaid.run()
          })
      }
    } else {
      if (new RegExp("^import mermaid from \"https://cdn\\.jsdelivr\\.net/npm/mermaid@[^/]+/dist/mermaid\\.esm\\.min\\.mjs\";").test(key)) {
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
  get_script_key (script, base = this.location_href) {
    if (!script.hasAttribute("src"))
      return script.innerHTML

    return this.asset_key(new URL(script.getAttribute('src'), base).href)
  }
  /**
   * Synchronize added and removed scripts
   * Scripts already in memory cannot be removed, so maintain the head is for
   * cleanness. Instead, rules per-script exist to neutralize and re-apply when
   * necessary
   */
  sync_scripts (scripts) {
    let js_script = new Map()
    for (let i = 0; i < scripts.length; i++) {
      js_script.set(this.get_script_key(scripts[i]), scripts[i])
    }
    const added = [...js_script.keys()].filter(k => !this.js_script_current.has(k));
    const removed = [...this.js_script_current.keys()].filter(k => !js_script.has(k));

    removed.forEach((item) => { this.remove_script(item) })

    this.js_script_current = new Set(js_script.keys())

    added.forEach((item) => {
      if (this.js_script_memory.has(item))
        return
      // Scripts from DOMParser are inert, and importNode copies that state.
      const script = document.createElement('script')
      const cache = js_script.get(item)
      for (const attr of cache.attributes)
        script.setAttribute(attr.name, attr.value)
      if (script.hasAttribute('src'))
        script.src = new URL(script.getAttribute('src'), this.location_href).href
      if (cache.innerHTML)
        script.innerHTML = cache.innerHTML
      this.js_script_memory.set(item, script)
    })
  }
  sync_styles (doc) {
    const next = new Map()
    doc.head.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      const href = this.asset_key(new URL(link.getAttribute('href'), this.location_href).href)
      next.set(href, link)
      if (!this.stylesheets.has(href)) {
        const copy = document.importNode(link, true)
        copy.href = new URL(link.getAttribute('href'), this.location_href).href
        document.head.append(copy)
        this.stylesheets.set(href, copy)
      }
    })
    for (const [href, link] of this.stylesheets) {
      if (!next.has(href)) {
        link.remove()
        this.stylesheets.delete(href)
      }
    }
    document.head.querySelectorAll('link[rel="icon"]').forEach(link => link.remove())
    const icon = doc.head.querySelector('link[rel="icon"]')
    if (icon) {
      const copy = document.importNode(icon, true)
      copy.href = new URL(icon.getAttribute('href'), this.location_href).href
      document.head.append(copy)
    }
  }
  /**
   * Replaces all meta tags with the new page meta tags.
   */
  sync_meta (doc) {
    document.head.querySelectorAll("meta")
      .forEach(meta => meta.remove())
    doc.head.querySelectorAll("meta")
      .forEach(meta => document.head.appendChild(document.importNode(meta, true)))
  }
  /**
   * Compensate scroll due to layout shifting (e.g. images loading)
   */
  scroll_compensate_layout(anchor) {
    let settle_timeout, raf

    const observer = new ResizeObserver(() => {
      clearTimeout(settle_timeout)

      cancelAnimationFrame(raf)
      anchor.scrollIntoView()

      settle_timeout = setTimeout(() => {
        raf = requestAnimationFrame(() => {
          observer.disconnect()
        })
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
      setTimeout(() => {
        elem.classList.remove(`highlight-${mod}`)
      }, 3000)
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
        !doc.querySelector('.documentwrapper .body'))
      return false

    const root = new URL(State.content_root(doc), url)
    let toctree, toctree_base = root
    try {
      const response = await fetch(new URL('_toctree.html', root))
      if (response.ok)
        toctree = await response.text()
    } catch (error) {}
    // e.g. the landing page has no _toctree.html.
    if (toctree === undefined) {
      toctree = doc.querySelector('.sphinxsidebar .toc-tree')?.innerHTML
      toctree_base = url
    }
    if (toctree !== undefined)
      return {toctree, toctree_base}
  }
  change_doc (doc, url, {toctree, toctree_base}) {
    this.sync_styles(doc)
    const sidebar = doc.querySelector('.sphinxsidebarwrapper > a')
    const logo = doc.querySelector('header a#logo')
    this.$.sidebar_logo.innerHTML = sidebar.innerHTML
    this.$.sidebar_logo.href = new URL(sidebar.getAttribute('href'), url).href
    this.$.sidebar_logo.id = sidebar.id
    this.$.header_logo.innerHTML = logo.innerHTML
    this.$.header_logo.href = new URL(logo.getAttribute('href'), url).href
    this.$.toctree.innerHTML = toctree
    this.$.toctree.querySelectorAll('a[href]').forEach(a => {
      a.href = new URL(a.getAttribute('href'), toctree_base).href
    })
    this.toctree.clear()
    this.init_toctree()
    this.state_helper.init_state(this.parent.state, doc, url.href)
    this.body_classes.forEach(name => document.body.classList.remove(name))
    this.body_classes = this.get_body_classes(doc)
    this.body_classes.forEach(name => document.body.classList.add(name))
    this.parent.state.collection = undefined
    this.parent.state.tags = undefined
  }
  async replace (dom, url, txt, track_changes = false) {

    const parser = new DOMParser()
    const doc = parser.parseFromString(txt, 'text/html');

    const localtoc = doc.querySelector('.localtoc nav');
    const related = doc.querySelector('.documentwrapper .related')
    const content = doc.querySelector('.documentwrapper .body');
    const scripts = doc.head.querySelectorAll('script') || []
    const title = doc.querySelector('head title')

    if (!content || !localtoc || !title) {
      console.warn("page: failed to get elements for ", url)
      return false
    }

    const old_root = new URL(this.parent.state.content_root, this.previous_href)
    const new_root = new URL(State.content_root(doc), url)
    const changed_build = old_root.href !== new_root.href
    const next_doc = changed_build && await this.probe_doc(doc, url)
    if (changed_build && !next_doc)
      return false
    DispatchEvent('app:hot_reload:page_unload')
    if (changed_build) {
      DispatchEvent('app:hot_reload:doc_unload')
      this.$.sidebarwrapper.classList.add('fetch')
      if (!this.reduced_motion)
        await new Promise(resolve => setTimeout(resolve, 125))
      this.change_doc(doc, url, next_doc)
    }
    this.sync_scripts(scripts)
    this.sync_meta(doc)
    if (!changed_build)
      this.sync_styles(doc)
    document.documentElement.dataset.content_root = State.content_root(doc)
    dom = this.toctree.get(new URL(url.pathname, url.origin).href) ||
      (changed_build ? this.$.header_logo : dom)

    let child, node = dom
    if (dom.id !== "logo") while (node && node !== this.$.toctree) {
      // if li child is input
      node.classList.add('current')
      child = node.firstElementChild
      if (child !== null && child.type === "checkbox")
        child.checked = true
      node = node.parentElement
    }
    dom.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      container: "all"
    });

    const block_selector = 'h1, h2, h3, h4, h5, h6, p, pre, pre > span, span.pre, a, ul, ol, dl, table, blockquote'
    let old_texts, new_texts, doms
    let changed_dom
    if (track_changes)
      old_texts = Array.from(this.$.content.querySelectorAll(block_selector))
        .map(n => DOM.getOwnText(n).replace(/\s+/g, " ").trim());

    this.parent.state.content_root = State.content_root(doc)
    this.$.content.innerHTML = content.innerHTML
    this.$.localtoc.innerHTML = localtoc.innerHTML

    if (track_changes) {
      let doms = Array.from(this.$.content.querySelectorAll(block_selector))
      new_texts = doms
        .map(n => DOM.getOwnText(n).replace(/\s+/g, " ").trim());
      if (old_texts.length > 0)
        changed_dom = this.highlight_change(old_texts, new_texts, doms)
    }
    this.$.related.innerHTML = related?.innerHTML || ''
    this.$.title.innerText = title.innerText

    this.regen_breadcrumb(dom)
    const loaded = []
    this.js_script_memory.forEach((value, key) => loaded.push(this.ensure_script(value, key)))
    await Promise.all(loaded)
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
    this.$.sidebarwrapper.classList.remove('fetch')
    this.$.bodywrapper.classList.remove('fetch')
    this.$.tocwrapper.classList.remove('fetch')
    this.$.loader.classList.remove('fetch')
    DispatchEvent('app:hot_reload:page_loaded')

    if (!this.reduced_motion && !track_changes)
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    if (track_changes) {
      if (changed_dom) {
        const rect = changed_dom.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight)
          changed_dom.scrollIntoView({ behavior: 'auto', block: 'center' })
        else {
          window.scrollTo({ top: this.scrollY, left: 0, behavior: "instant" })
        }
      } else {
        window.scrollTo({ top: this.scrollY, left: 0, behavior: "instant" })
      }
    } else if (url.hash && isNaN(this.scrollY)) {
      setTimeout(() => {
        let anchor = document.querySelector(`${url.hash}`)
        if (anchor) {
          anchor.scrollIntoView({ behavior: 'auto' })
          this.scroll_compensate_layout(anchor)
        }
      }, this.reduced_motion ? 0 : 125)
    } else if (!isNaN(this.scrollY)) {
      window.scrollTo({ top: this.scrollY, left: 0, behavior: "instant" })
      if (!this.reduced_motion)
        setTimeout(() => {
          window.scrollTo({ top: this.scrollY, left: 0, behavior: "auto" })
          this.scrollY = undefined
        }, 125) /* Correction due to Z-transform */
      else
        this.scrollY = undefined
    }
    this.$.content.style.minHeight = ""

    this.lock_load = false
    this.load_failed = false
    return true
  }
  /**
   * track_changes forces fetching and replacing, even if is the same page.
   * state: popstate event state or false to store current state.
   */
  load (dom, pathname, state, track_changes = false) {
    if (pathname === '#' || this.lock_load === true)
      return

    this.reduced_motion = Toolbox.reducedMotion(track_changes && location.href === pathname)

    let current_url = new URL(this.location_href)
    let request_url = new URL(pathname, current_url)
    let is_same_page = false
    if (!this.load_failed &&
        current_url.pathname === request_url.pathname &&
        current_url.origin === request_url.origin) {
      is_same_page = true
      if (!track_changes) {
        const hash = request_url.hash === '' ? '#top-anchor': request_url.hash
        if (state === false) {
          location.hash = hash
        } else {
          const dom_ = document.querySelector(hash)
          if (dom_)
            dom_.scrollIntoView()
          history.replaceState({}, "", hash)
        }
        return
      } else {
        this.scrollY = window.scrollY
      }
    }
    this.close_repotoc()
    this.lock_load = true
    const previous_href = this.location_href
    this.previous_href = previous_href
    this.location_href = request_url.href
    if (state === false) {
      if (current_url.pathname !== request_url.pathname) {
        /* If visiting a new page, store last scroll position */
        const new_state = {
          scrollY: window.scrollY
        }
        history.replaceState(new_state, "", current_url)
      }
      history.pushState({}, '', request_url.href)
    } else if (state !== null) {
      if (Object.hasOwn(state, 'scrollY'))
        this.scrollY = state.scrollY
    }

    this.$.content.style.minHeight = this.$.content.getBoundingClientRect().height + "px"

    let loader_
    if (!track_changes || !is_same_page) {
      this.$.tocwrapper.classList.add('fetch')
      this.$.bodywrapper.classList.add('fetch')
      loader_= setTimeout(() => {
        this.$.loader.classList.add('fetch')
      }, 500)
      if (this.$.loader.classList.contains('fail')) {
        this.$.loader.classList.add('fetch')
        this.$.loader.classList.remove('fail')
      }
    }

    setTimeout(() =>  {
      const keys = Object.keys(this.parent).reverse()
      keys.forEach(key => {
        if ("deinit" in this.parent[key])
          this.parent[key].deinit()
      })
    }, this.reduced_motion ? 0 : 120)

    DOM.getAll('.current', this.$.toctree).forEach((elem) => {
      elem.classList.remove('current')
    })

    const target_url = new URL(request_url)
    if (track_changes)
      request_url.searchParams.append(Toolbox.UID(), '')
    const time_ = Date.now()
    const response = fetch(
      new Request(request_url)
    )
      .then(async response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        // e.g. /doctools -> /doctools/
        const final_url = new URL(response.url || request_url.href)
        final_url.search = target_url.search
        final_url.hash = target_url.hash
        if (final_url.href !== target_url.href) {
          request_url = final_url
          this.location_href = final_url.href
          history.replaceState(history.state, '', final_url.href)
        }
        return response.text()
      })
      .then(async txt => {
        const timeout = Math.max(0, this.reduced_motion ? 0 : 125 - (Date.now() - time_))
        if (timeout) await new Promise(resolve => setTimeout(resolve, timeout))
        if (!(await this.replace(dom, request_url, txt, is_same_page ? track_changes : false))) {
          const error = new Error('Destination is not a supported documentation build')
          error.unsupported = true
          throw error
        }
      })
      .catch(error => {
        if (error.unsupported) {
          console.warn('hot_reload: falling back to navigation', error)
          this.location_href = previous_href
          this.lock_load = false
          location.replace(request_url.href)
          return
        }
        this.$.tocwrapper.classList.add('fetch')
        this.$.bodywrapper.classList.add('fetch')
        this.$.loader.classList.add('fail')
        // Retrying the same URL is not a same-page jump.
        this.load_failed = true
        this.lock_load = false
      })
      .finally(() => {
        if (loader_ !== undefined)
          clearTimeout(loader_)
      })
  }
  init_toctree () {
    const append_load = (dom, alt_dom) => {
      if (alt_dom === undefined)
        alt_dom = dom
      // Make absolute and strip trailing #
      alt_dom.href = alt_dom.href.replace(/#$/, '')
      this.toctree.set(alt_dom.href, dom)

      alt_dom.onclick = (ev) => {
        ev.preventDefault()
        this.load(dom, alt_dom.href, false, false)
      }
    }
    DOM.getAll('.reference.internal', this.$.toctree)
      .forEach(dom => append_load(dom))
    const alt_dom = DOM.get('.sphinxsidebarwrapper > a')
    const dom = DOM.get('header a#logo')
    if (dom && alt_dom) append_load(dom, alt_dom)
    if (dom) append_load(dom)
  }
  init_others () {
    // Map scripts
    const scripts = document.querySelector('head')?.querySelectorAll('script') || []
    for (let i = 0; i < scripts.length; i++) {
      const key = this.get_script_key(scripts[i])

      this.js_script_current.add(key)
      this.js_script_memory.set(key, scripts[i])
    }
    document.head.querySelectorAll('link[rel="stylesheet"]:not([data-app-module])').forEach(link => {
      this.stylesheets.set(this.asset_key(link.href), link)
    })
  }
  init_loader() {
    let sides = []
    for (let j = 0; j < 2; j++) {
      const side = DOM.new('div', {
        'className': `wave-spinner-${j}`
      });
      let bars = []
      for (let i = 0; i < 7; i++) {
        const bar = DOM.new('span');
        bar.style.animationDelay = `${i * 0.1}s`;
        bars.push(bar);
      }
      bars.forEach((node) => { side.append(node) })
      sides.push(side)
    }
    sides.push(DOM.new('div', {
      'className': 'text'
    }))
    sides.push(DOM.new('div', {
      'className': 'subtext'
    }))

    this.$.loader = DOM.new('div', {
      'id': 'loader'
    })
    sides.forEach((node) => { this.$.loader.append(node) })
    this.$.documentwrapper.append(this.$.loader)
  }
  popstate (ev) {
    let url = new URL(location.href)
    url.hash = ''
    let dom = this.toctree.get(url.href)
    if (dom !== undefined || this.is_known_doc(url))
      this.load(dom || this.$.header_logo, location.href, ev.state, false)
    else // Fallback
      location.href = location.href
  }
  /**
   * Hot reload the toctree.
   */
  load_toctree (toctree_url, reselect) {
    const checked_names = new Set()
    DOM.getAll('input.toctree-collapse:checked', this.$.toctree).forEach(input => {
      checked_names.add(input.name)
    })

    toctree_url.searchParams.append(Toolbox.UID(), '')
    return fetch(
      new Request(toctree_url)
    )
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        return response.text()
      })
      .then(txt => {
        this.$.toctree.innerHTML = txt

        const content_root = this.parent.state.content_root
        DOM.getAll('a[href]', this.$.toctree).forEach(a => {
          a.href = new URL(a.getAttribute('href'), new URL(content_root, this.location_href)).href
        })

        this.toctree.clear()
        this.init_toctree()

        checked_names.forEach(name => {
          const input = this.$.toctree.querySelector(`input[name="${name}"]`)
          if (input) input.checked = true
        })

        if (reselect) {
          let current_url = new URL(this.location_href)
          current_url.hash = ''
          let node = this.toctree.get(current_url.href)
          if (node) {
            while (node && node !== this.$.toctree) {
              node.classList.add('current')
              node = node.parentElement
            }
          }
        }
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
    let dom = this.toctree.get(url.href)
    if (dom !== undefined)
      this.load(dom, url.href, false, true)
    else {
      location.href = url.href
    }
  }
  close_repotoc () {
    const input = document.querySelector('#input-show-repotoc')
    if (!input.checked)
      return
    input.checked = false
    input.dispatchEvent(new Event('change'))
  }
  /**
   * Hot load url, or fallback if it does not exist.
   */
  async navigate (url, fallback, new_tab = false) {
    if (new_tab)
      return Toolbox.try_redirect(url, fallback, true)
    let target = new URL(url, location.href)
    try {
      const response = await fetch(target, { method: 'HEAD' })
      if (response.status === 404 && fallback)
        target = new URL(fallback, location.href)
    } catch (error) {
      if (fallback)
        target = new URL(fallback, location.href)
    }
    this.load(this.toctree.get(new URL(target.pathname, target.origin).href) || this.$.header_logo,
      target.href, false)
    return false
  }
  /**
   * If some of the elements are missing in the page,
   * create
   */
  ensure_dom () {
    if (this.$.related === null) {
      this.$.related = DOM.new('div', {
        className: 'related'
      })
      this.$.documentwrapper.insertAdjacentElement('beforeend', this.$.related)
    }
  }
  construct () {
    this.location_href = location.href

    this.ensure_dom()
    this.init_toctree()
    this.init_others()
    this.init_loader()
    document.addEventListener('click', ev => this.delegate_link(ev))
    onpopstate = (ev) => {this.popstate(ev)}

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
