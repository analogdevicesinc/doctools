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

    $.repotocTreeOverlay = document.querySelector('.repotoc-tree.overlay root')
    $.repotocTreeSidebar = document.querySelector('.sphinxsidebar .repotoc-tree root')
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
      this.$.linksSidebar.push(DOM.new('a', {
        'href': `${base}${home}`,
        'className': this.parent.state.repository === key ? 'current' : '',
        'innerText': value['name']
      }))
    }

    this.$.linksSidebar.forEach((elem) => {
      this.$.linksOverlay.push(elem.cloneNode(true))
    })

    if ($.repotocTreeOverlay)
      DOM.removeChilds($.repotocTreeOverlay),
      this.$.linksOverlay.forEach((item) => {$.repotocTreeOverlay.append(item)})
    if ($.repotocTreeSidebar)
      DOM.removeChilds($.repotocTreeSidebar),
      this.$.linksSidebar.forEach((item) => {$.repotocTreeSidebar.append(item)})

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
