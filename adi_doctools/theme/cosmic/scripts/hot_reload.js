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
    $.bodywrapper = new DOM(DOM.get('.documentwrapper .bodywrapper'))
    $.content = new DOM(DOM.get('.documentwrapper .body'))
    $.localtoc = new DOM(DOM.get('.localtoc nav'))
    $.related = new DOM(DOM.get('.documentwrapper .related'))
    $.breadcrumb = DOM.get('.bodywrapper .body-header .breadcrumb')

    this.toctree = new Map()
    this.location_href

    this.init()
  }
  regen_breadcrumb (dom) {
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
    let ol = this.$.breadcrumb.firstElementChild
    ol.innerHTML = ''
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
    while (node && node !== this.$.toctree.$) {
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
    this.parent.navigation.init()
    this.parent.page_actions.init()
    this.parent.content_actions.init()

    this.$.bodywrapper.classList.remove('fetch');
    this.$.localtoc.classList.remove('fetch');

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
       location.hash = request_url.hash === '' ? '#top-anchor': request_url.hash
       return
    }
    // Push even before fething, so in case of failure the user can easily
    // reload the page
    if (new_state)
      history.pushState(request_url.href, '', request_url.href)

    this.$.bodywrapper.classList.add('fetch');
    this.$.localtoc.classList.add('fetch');

    // FIXME: Should check if they exist, in case it is removed from extra,
    // Consider also creating a loading order stack, so we just iterate over.
    this.parent.content_actions.deinit()
    this.parent.page_actions.deinit()
    this.parent.navigation.deinit()

    DOM.getAll('.current', this.$.toctree).forEach((elem) => {
      elem.classList.remove('current')
    })

    const response = fetch(
      new Request(request_url)
    )
      .then(response => response)
      .then(response => response.text())
      .then(txt => this.replace(dom, request_url, txt))
      .catch(error => {
        // TODO "Ahhh, Technology."-styled user message
      })
  }
  init_toctree () {
    DOM.getAll('.reference.internal', this.$.toctree).forEach((elem) => {
      elem.href = elem.href.replace(/#$/, '') // Make absolute and strip trailling #
      this.toctree.set(elem.href, elem)

      elem.onclick = (ev) => {
        ev.preventDefault()
        this.load(elem, elem.href, true)
      }
    })
  }
  init_others () {
    let logo = DOM.get('.sphinxsidebarwrapper > a')
    logo.href = logo.href.replace(/#$/, '')
    logo = DOM.get('header a#logo')
    logo.href = logo.href.replace(/#$/, '')
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
  init () {
    this.location_href = location.href

    this.init_toctree()
    this.init_others()
    this.hot_links()
    onpopstate = (ev) => {this.popstate(ev)}
  }
}
