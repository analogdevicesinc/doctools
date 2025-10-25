"use strict";
import {DOM} from './dom.js'
import {Toolbox} from './toolbox.js'

/**
 * Updates dynamic links, banners with content from metadata.json.
 */
export class Links {
  constructor (app) {
    this.$ = {}

    this.$.show_repotoc = document.querySelector('#input-show-repotoc')
    this.$.show_repotoc.onchange = (ev) => { this.renew_index(ev) }
    this.set_doms()
    this.parent = app
    if (typeof this.parent.fetch === 'object')
      this.parent.fetch.then(this.construct.bind(this))
    else
      this.construct()
  }
  construct() {
    let m = this.parent.state.metadata
    if ('repotoc' in m)
      this.update_repotoc(m['repotoc'])
    if ('banner' in m)
      this.update_banner(m['banner'])
  }
  set_doms () {
    let $ = this.$

    $.repotocTreeOverlay = document.querySelector('.repotoc-tree.overlay')
    $.repotocTreeSidebar = document.querySelector('.sphinxsidebar .repotoc-tree')
    $.banner = DOM.new('div', {
      className: 'banner'
    })
    document.querySelector('body').prepend($.banner)
  }
  renew_index (ev) {
    this.$.linksSidebar.forEach((elem) => {
      elem.tabIndex = ev.target.checked ? 0 : -1
    })
    this.$.linksOverlay.forEach((elem) => {
      elem.tabIndex = ev.target.checked ? 0 : -1
    })
  }
  update_repotoc (obj) {
    let $ = this.$
    if (this.parent.state.standalone)
      return

    let prefix = this.parent.state.subhost === '' || this.parent.state.subhost === undefined ?
                 this.parent.state.metadata.remote_doc :
                 this.parent.state.subhost.startsWith('/docs') ? '/docs/' : '/'
    let home = "index.html"
    this.$.linksOverlay = []
    this.$.linksSidebar = []
    let self_link = this.parent.state.offline ?
                    this.parent.state.content_root :
                    new URL(this.parent.state.content_root, location.href)
    for (const [key, value] of Object.entries(obj)) {
      if (!('name' in value))
        continue

      let base = key == this.parent.state.repository ?
                 self_link : `${prefix}${key}/`
      let entry = DOM.new('a', {
        'href': `${base}${home}`,
        'className': this.parent.state.repository === key ? 'current' : '',
      })
      let name = DOM.new('div', {
        'innerText': value['name'],
        'className': 'title'
      })
      let desc = DOM.new('div', {
        'innerText': value['description'],
        'className': 'subtitle'
      })
      let spacer = DOM.new('div')
      entry.append(name)
      entry.append(desc)
      entry.append(spacer)
      this.$.linksSidebar.push(entry)
    }

    this.$.linksSidebar.forEach((elem) => {
      this.$.linksOverlay.push(elem.cloneNode(true))
    })

    let link_landing =  DOM.new('a', {
      'innerText': 'Landing page',
      'href': prefix,
      'className': 'landing-page'
    })
    if ($.repotocTreeOverlay) {
      DOM.removeChilds($.repotocTreeOverlay)
      let container = DOM.new('div', {
        'className': 'container'
      })
      let cards = DOM.new('div', {
        'className': 'cards'
      })
      this.$.linksOverlay.forEach((item) => {cards.append(item)})
      container.append(link_landing)
      container.append(cards)
      $.repotocTreeOverlay.append(container)
    }
    if ($.repotocTreeSidebar) {
      let container = DOM.new('div', {
        'className': 'container'
      })
      let cards = DOM.new('div', {
        'className': 'cards'
      })
      DOM.removeChilds($.repotocTreeSidebar)
      this.$.linksSidebar.forEach((item) => {cards.append(item)})
      container.append(link_landing.cloneNode(true))
      container.append(cards)
      $.repotocTreeSidebar.append(container)
    }

    let event = new Event('change');
    this.$.show_repotoc.dispatchEvent(event)
  }
  update_banner (obj) {
    let $ = this.$

    if ('msg' in obj)
      $.banner.append(DOM.new('span', {
        'innerText': obj['msg']
      }))

    if ('a_href' in obj && 'a_text' in obj)
      $.banner.append(DOM.new('a', {
        'href': obj['a_href'],
        'innerText': obj['a_text'],
        'target': '_blank'
      }))
  }
}
