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
    $.toctree = new DOM(DOM.get('.sphinxsidebar .toc-tree'))
    $.documentwrapper = new DOM(DOM.get('.documentwrapper'))
    $.bodywrapper = new DOM(DOM.get('.documentwrapper .bodywrapper'))
    $.content = new DOM(DOM.get('.documentwrapper .body'))
    $.localtoc = new DOM(DOM.get('.localtoc nav'))
    $.tocwrapper = new DOM(DOM.get('.localtoc .tocwrapper'))
    $.related = new DOM(DOM.get('.documentwrapper .related'))
    $.breadcrumb = DOM.get('.bodywrapper .body-header .breadcrumb')

    this.toctree = new Map()
    this.js_script_current = new Set()
    this.js_script_memory = new Map()

    this.location_href
    this.lock_load = false
    this.reduced_motion

    this.construct()
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
    while (node && node !== this.$.toctree.$) {
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
      ol.appendChild(new DOM('li').append(
        new DOM('a', {
          'href': elem.href,
          'innerText': elem.innerText
        })
      ).$)
    })
  }
  hot_links () {
    let attach_load = (elem) => {
      let url = new URL(elem)
      url.hash = ''
      let dom = this.toctree.get(url.href)
      if (dom === undefined)
        return

      elem.onclick = (ev) => {
        ev.preventDefault()
        this.load(dom, elem.href, true)
      }
    }
    DOM.getAll('a[href]', this.$.related).forEach(attach_load)
    DOM.getAll('.reference.internal', this.$.content).forEach(attach_load)
    DOM.getAll('a[href]', this.$.breadcrumb).forEach(attach_load)
  }
  script_remove (url) {
    /* Nothing to do */
  }
  script_add (url) {
    const elem = this.js_script_memory.get(url)
    document.querySelector('head')?.append(elem)
    switch(url) {
      case "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js":
        // MathJax will apply on load, so only call if already loaded,
        // instead of having to wait if it to be loaded to call.
        if (typeof MathJax !== 'undefined')
          MathJax.typeset()
        // For reference only, if custom initialization was necessary
        //else
        //  elem.onload = () => { console.log("MathJax loaded") }
        break;
    }
  }
  normalize_src (src) {
    const url = new URL(src)
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
    this.parent.state.metadata.modules.javascript.forEach((item) => {
      js_script.set(new URL('_static/extra.umd.js', this.parent.fetch.base_url+'/').href)
    })
    for (let i = 0; i < scripts.length; i++) {
      js_script.set(this.normalize_src(scripts[i].src), scripts[i])
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
      for (const attr of js_script.get(item).attributes) {
        script.setAttribute(attr.name, attr.value);
      }
      this.js_script_memory.set(item, script)
    })

    return added
  }
  replace (dom, url, txt) {

    const parser = new DOMParser()
    const doc = parser.parseFromString(txt, 'text/html');

    const content = doc.querySelector('.documentwrapper .body');
    const localtoc = doc.querySelector('.localtoc nav');
    const related = doc.querySelector('.documentwrapper .related')
    const scripts = doc.querySelector('head')?.querySelectorAll('script') || []
    const added = this.sync_scripts(scripts)

    if (!content || !localtoc) {
      console.warn("page: failed to get elements for ", url)
      return
    }

    let child, node = dom
    if (dom.id !== "logo") while (node && node !== this.$.toctree.$) {
      // if li child is input
      node.classList.add('current')
      child = node.firstElementChild
      if (child !== null && child.type === "checkbox")
        child.checked = true
      node = node.parentElement
    }

    this.parent.state.content_root = State.content_root(doc)
    this.$.content.$.innerHTML = content.innerHTML
    this.$.localtoc.$.innerHTML = localtoc.innerHTML
    this.$.related.$.innerHTML = related.innerHTML

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
    if (url.hash)
      setTimeout(() => {
        document.querySelector(`${url.hash}`)
          ?.scrollIntoView({ behavior: 'auto' })
      }, this.reduced_motion ? 0 : 125)

    added.forEach((item) => {
      this.script_add(item)
    })

    this.hot_links()
    this.lock_load = false
  }
  load (dom, pathname, new_state) {
    if (pathname === '#' || this.lock_load === true)
      return

    this.reduced_motion = Toolbox.reducedMotion()

    let current_url = new URL(this.location_href)
    let request_url = new URL(pathname, current_url)
    this.location_href = request_url.href
    if (current_url.pathname === request_url.pathname &&
        current_url.origin === request_url.origin) {
      const hash = request_url.hash === '' ? '#top-anchor': request_url.hash
      if (new_state) {
        location.hash = hash
      } else {
        const dom_ = document.querySelector(hash)
        if (dom_)
          dom_.scrollIntoView()
        history.replaceState(null, "", hash)
      }
      return
    }
    this.lock_load = true
    // Push even before fetching, so in case of failure the user can easily
    // reload the page
    if (new_state)
      history.pushState(request_url.href, '', request_url.href)

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
        this.load(dom, dom.href, true)
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
        this.load(dom, alt_dom.href, true)
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
      const key = this.normalize_src(scripts[i].src)
      this.js_script_current.add(key)
      this.js_script_memory.set(key, scripts[i])
    }
  }
  init_loader() {
    let sides = []
    for (let j = 0; j < 2; j++) {
      const side = new DOM('div', {
        'className': `wave-spinner-${j}`
      });
      let bars = []
      for (let i = 0; i < 7; i++) {
        const bar = new DOM('span');
        bar.style.animationDelay = `${i * 0.1}s`;
        bars.push(bar);
      }
      side.append(bars)
      sides.push(side)
    }
    sides.push(new DOM('div', {
      'className': 'text'
    }))
    sides.push(new DOM('div', {
      'className': 'subtext'
    }))

    this.$.loader = new DOM('div', {
      'id': 'loader'
    }).append(sides)
    this.$.documentwrapper.append(this.$.loader)
  }
  popstate (ev) {
    let url = new URL(location.href)
    url.hash = ''
    let dom = this.toctree.get(url.href)
    if (dom !== undefined)
      this.load(dom, location.href, false)
    else // Fallback
      location.href = location.href
  }
  construct () {
    this.location_href = location.href

    this.init_toctree()
    this.init_others()
    this.init_loader()
    this.hot_links()
    onpopstate = (ev) => {this.popstate(ev)}
  }
}
