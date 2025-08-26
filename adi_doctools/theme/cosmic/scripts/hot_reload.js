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
    this.location_href

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
  replace (dom, url, txt) {

    const parser = new DOMParser()
    const doc = parser.parseFromString(txt, 'text/html');

    const content = doc.querySelector('.documentwrapper .body');
    const localtoc = doc.querySelector('.localtoc nav');
    const related = doc.querySelector('.documentwrapper .related')

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

    if (url.hash)
      document.querySelector(`${url.hash}`)?.scrollIntoView({ behavior: 'auto' })
    else
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })

    this.hot_links()
  }
  load (dom, pathname, new_state) {
    if (pathname === '#')
      return

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
    // Push even before fething, so in case of failure the user can easily
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
    }, 120)

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
        const timeout = 125 - (Date.now() - time_)
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
      // Make absolute and strip trailling #
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
