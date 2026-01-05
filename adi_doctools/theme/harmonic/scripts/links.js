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

    // remote_alt doesn't have the open-source landing page
    const _canonical = new URL(app.state.metadata.remote_alt).host === location.host ?
                       this.parent.state.metadata.remote_doc : prefix
    const _developer = this.parent.state.metadata.remote_alt
    let link_landing =  DOM.new('a', {
      'innerText': 'Open source home',
      'href': _canonical,
      'className': 'landing-page home'
    })
    let link_developer = DOM.new('a', {
      'innerText': 'Developer portal',
      'href': new URL('..', _developer),
      'target': '_blank',
      'className': 'landing-page ext-developer'
    })

    let cards_links = DOM.new('div', {
      'className': 'cards-links'
    })
    cards_links.append(link_landing, link_developer)
    if ($.repotocTreeOverlay) {
      DOM.removeChilds($.repotocTreeOverlay)
      let container = DOM.new('div', {
        'className': 'container'
      })
       let cards = DOM.new('div', {
      'className': 'cards'
      })
      this.$.linksOverlay.forEach((item) => {cards.append(item)})
      container.append(cards_links)
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
      container.append(cards_links.cloneNode(true))
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
