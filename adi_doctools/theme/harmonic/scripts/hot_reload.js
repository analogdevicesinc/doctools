"use strict";

import {Toolbox} from './toolbox.js'
import {State} from './state.js'
import {DOM} from './dom.js'

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

    this.toctree = new Map()
    this.js_script_current = new Set()
    this.js_script_memory = new Map()

    this.location_href
    this.lock_load = false
    this.reduced_motion
    this.scrollY = undefined

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
      if (node.tagName == 'LI') {
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
  hot_links () {
    let attach_load = (elem) => {
      if (elem.constructor.name !== 'HTMLAnchorElement')
        return
      let url = new URL(elem)
      url.hash = ''
      let dom = this.toctree.get(url.href)
      if (dom === undefined)
        return

      elem.onclick = (ev) => {
        ev.preventDefault()
        this.load(dom, elem.href, false, false)
      }
    }
    document.querySelectorAll('a[href]', this.$.related).forEach(attach_load)
    document.querySelectorAll('.reference.internal', this.$.content).forEach(attach_load)
    document.querySelectorAll('a[href]', this.$.breadcrumb).forEach(attach_load)
  }
  script_remove (key) {
    /* Nothing to do */
  }
  script_add (key) {
    const elem = this.js_script_memory.get(key)
    document.querySelector('head')?.append(elem)

    if (!key.startsWith("https://"))
      return

    if (new RegExp("^https://cdn\\.jsdelivr\\.net/npm/mathjax@[^/]+/(?:es5/)?tex-mml-chtml\\.js$").test(key)) {
      // MathJax will apply on load, so only call if already loaded,
      // instead of having to wait if it to be loaded to call.
      if (typeof MathJax !== 'undefined')
        MathJax.typeset()
      // For reference only, if custom initialization was necessary
      //else
      //  elem.onload = () => { console.log("MathJax loaded") }
    } else if (new RegExp("^https://cdn\\.jsdelivr\\.net/npm/mermaid@[^/]+/dist/mermaid\\.esm\\.min\\.mjs$").test(key)) {
      if (typeof Mermaid !== 'undefined')
        Mermaid.run()
      else
        import(key).then(m => {
          window.Mermaid = m.default
          Mermaid.run()
        })
    }
  }
  get_script_key (script) {
    if (!script.hasAttribute("src"))
      return script.innerHTML

    const url = new URL(script.src)
    url.searchParams.delete("v")
    return url.href
  }
  /**
   * Synchronize added and removed scripts
   * Scripts already in memory cannot be removed, so maintain the head is for
   * cleanness. Instead, rules per-script exist to neutralize and re-apply when
   * necessary
   */
  sync_scripts (scripts) {
    let js_script = new Map()
    // Append metadata extra scripts, for proper filtering
    if (this.parent.state.metadata) {
      this.parent.state.metadata.modules.javascript.forEach((item) => {
        js_script.set(new URL('_static/extra.umd.js', this.parent.fetch.base_url).href)
      })
    }
    for (let i = 0; i < scripts.length; i++) {
      js_script.set(this.get_script_key(scripts[i]), scripts[i])
    }
    const added = [...js_script.keys()].filter(k => !this.js_script_current.has(k));
    const removed = [...this.js_script_current.keys()].filter(k => !js_script.has(k));

    /* Sync */
    removed.forEach((item) => {
      this.script_remove(item)
    })

    this.js_script_current = new Set(js_script.keys())

    added.forEach((item) => {
      // already in memory
      if (this.js_script_memory.has(item))
        return
      // Prepare script element
      const script = document.createElement("script");
      const cache = js_script.get(item)
      for (const attr of cache.attributes) {
        script.setAttribute(attr.name, attr.value);
      }
      if (cache.innerHTML)
        script.innerHTML = cache.innerHTML
      this.js_script_memory.set(item, script)
    })

    return added
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
  replace (dom, url, txt) {

    const parser = new DOMParser()
    const doc = parser.parseFromString(txt, 'text/html');

    const localtoc = doc.querySelector('.localtoc nav');
    const related = doc.querySelector('.documentwrapper .related')
    const content = doc.querySelector('.documentwrapper .body');
    const scripts = doc.head.querySelectorAll('script') || []
    const title = doc.querySelector('head title')

    const added = this.sync_scripts(scripts)
    this.sync_meta(doc)

    if (!content || !localtoc) {
      console.warn("page: failed to get elements for ", url)
      return
    }

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

    this.parent.state.content_root = State.content_root(doc)
    this.$.content.innerHTML = content.innerHTML
    this.$.localtoc.innerHTML = localtoc.innerHTML
    this.$.related.innerHTML = related.innerHTML
    this.$.title.innerText = title.innerText

    this.regen_breadcrumb(dom)
    for (const key in this.parent) {
      if ("init" in this.parent[key])
        this.parent[key].init()
    }
    this.$.bodywrapper.classList.remove('fetch')
    this.$.tocwrapper.classList.remove('fetch')
    this.$.loader.classList.remove('fetch')

    if (!this.reduced_motion)
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    if (url.hash && isNaN(this.scrollY)) {
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

    added.forEach((item) => {
      this.script_add(item)
    })

    this.hot_links()
    this.lock_load = false
  }
  /**
   * Force forces refetching and replacing, even if is the same page.
   * state: popstate event state or false to store current state.
   */
  load (dom, pathname, state, force) {
    if (pathname === '#' || this.lock_load === true)
      return

    this.reduced_motion = Toolbox.reducedMotion()

    let current_url = new URL(this.location_href)
    let request_url = new URL(pathname, current_url)
    this.location_href = request_url.href
    if (current_url.pathname === request_url.pathname &&
        current_url.origin === request_url.origin) {
      if (force) {
        this.scrollY = window.scrollY
      } else {
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
      }
    }
    this.lock_load = true
    // Push even before fetching, so in case of failure the user can easily
    // reload the page
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

    this.$.tocwrapper.classList.add('fetch')
    this.$.bodywrapper.classList.add('fetch')
    const loader_= setTimeout(() => {
      this.$.loader.classList.add('fetch')
    }, 500)
    if (this.$.loader.classList.contains('fail')) {
      this.$.loader.classList.add('fetch')
      this.$.loader.classList.remove('fail')
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

    if (force)
      request_url.searchParams.append(Toolbox.UID(), '')
    const time_ = Date.now()
    const response = fetch(
      new Request(request_url)
    )
      .then(response => response)
      .then(response => response.text())
      .then(txt => {
        const timeout = this.reduced_motion ? 0 : 125 - (Date.now() - time_)
        const body_= setTimeout(() => {
          this.replace(dom, request_url, txt)
        }, timeout)
      })
      .catch(error => {
        this.$.loader.classList.add('fail')
      })
      .finally(() => {
        clearTimeout(loader_)
      })
  }
  init_toctree () {
    const append_load = (dom) => {
      // Make absolute and strip trailling #
      dom.href = dom.href.replace(/#$/, '')
      this.toctree.set(dom.href, dom)

      dom.onclick = (ev) => {
        ev.preventDefault()
        this.load(dom, dom.href, false, false)
      }
    }
    DOM.getAll('.reference.internal', this.$.toctree)
      .forEach(dom => append_load(dom))
  }
  init_others () {
    const append_load = (dom, alt_dom) => {
      // Make absolute and strip trailing #
      alt_dom.href = alt_dom.href.replace(/#$/, '')

      alt_dom.onclick = (ev) => {
        ev.preventDefault()
        this.load(dom, alt_dom.href, false, false)
      }
    }
    const dom = DOM.get('header a#logo')
    append_load(dom, dom)
    const alt_dom = DOM.get('.sphinxsidebarwrapper > a')
    append_load(dom, alt_dom)
    this.toctree.set(dom.href, dom)

    // Map scripts
    const scripts = document.querySelector('head')?.querySelectorAll('script') || []
    for (let i = 0; i < scripts.length; i++) {
      const key = this.get_script_key(scripts[i])

      this.js_script_current.add(key)
      this.js_script_memory.set(key, scripts[i])
    }
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
    if (dom !== undefined)
      this.load(dom, location.href, ev.state, false)
    else // Fallback
      location.href = location.href
  }
  /**
   * Expose load call to arbitrary consumers, like dev-pool.js.
   */
  load_href (url) {
    url.hash = ''
    let dom = this.toctree.get(url.href)
    if (dom !== undefined)
      this.load(dom, url.href, false, true)
    else // Fallback
      location.href = location.href
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
      this.$.documentwrapper.insertAdjacentElement('beforeend', $.related)
    }
  }
  construct () {
    this.location_href = location.href

    this.ensure_dom()
    this.init_toctree()
    this.init_others()
    this.init_loader()
    this.hot_links()
    onpopstate = (ev) => {this.popstate(ev)}
  }
}
