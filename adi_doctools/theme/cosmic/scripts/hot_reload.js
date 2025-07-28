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
    let ol = this.$.breadcrumb.firstChild
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
  replace (dom, url, txt, push) {

    const parser = new DOMParser()
    const doc = parser.parseFromString(txt, 'text/html');

    const content = doc.querySelector('.documentwrapper .body');
    const localtoc = doc.querySelector('.localtoc nav');
    const related = doc.querySelector('.documentwrapper .related')

    if (!content || !localtoc) {
      console.warn("page: failed to get elements for ", url)
      return
    }

    let node = dom
    while (node && node !== this.$.toctree.$) {
      node.classList.add('current')
      node = node.parentElement
    }

    if (push) {
      history.pushState(url.href, '', url.href)
    }
    this.location_href = url.href

    this.parent.state.content_root = State.content_root(doc)
    this.$.content.$.innerHTML = content.innerHTML
    this.$.localtoc.$.innerHTML = localtoc.innerHTML
    this.$.related.$.innerHTML = related.innerHTML

    this.regen_breadcrumb(dom)
    this.parent.navigation.init()
    this.parent.page_actions.init()
    this.parent.content_actions.init()

    if (url.hash)
      document.querySelector(`${url.hash}`)?.scrollIntoView({ behavior: 'auto' })
    else
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })

    this.hot_links()
  }
  load (dom, pathname, push) {
    if (pathname === '#')
      return

    // FIXME: Should check if they exist, in case it is removed from extra
    this.parent.content_actions.deinit()
    this.parent.page_actions.deinit()
    this.parent.navigation.deinit()

    DOM.getAll('.current', this.$.toctree).forEach((elem) => {
      elem.classList.remove('current')
    })

    let url = new URL(pathname, location)
    const response = fetch(
      new Request(url)
    )
      .then(response => response)
      .then(response => response.text())
      .then(txt => this.replace(dom, url, txt, push))
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

    this.init_toctree ()
    this.hot_links()
    window.addEventListener('popstate', (ev) => {
      this.popstate(ev)
    })
  }
}
