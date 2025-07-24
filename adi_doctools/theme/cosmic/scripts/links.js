"use strict";
import {DOM} from './dom.js'
import {Toolbox} from './toolbox.js'

/**
 * Updates dynamic  links, banners with content from metadata.json.
 */
export class Links {
  constructor (app) {
    this.$ = {}

    this.$.show_repotoc = new DOM(
      DOM.get('#input-show-repotoc')
    ).onchange(this, this.renew_index)
    this.set_doms()
    this.parent = app
    if (typeof this.parent.fetch === 'object')
      this.parent.fetch.then(this.init.bind(this))
    else
      this.init()
  }
  init () {
    let m = this.parent.state.metadata
    if ('repotoc' in m)
      this.update_repotoc(m['repotoc'])
    if ('banner' in m)
      this.update_banner(m['banner'])
  }
  set_doms () {
    let $ = this.$

    $.repotocTreeOverlay = new DOM(DOM.get('.repotoc-tree.overlay root'))
    $.repotocTreeSidebar = new DOM(DOM.get('.sphinxsidebar .repotoc-tree root'))
    $.banner = new DOM('div', {
      className: 'banner'
    })
    DOM.get('body').prepend($.banner.$)
  }
  renew_index (ev) {
    this.$.linksSidebar.forEach((elem) => {
      elem.$.tabIndex = ev.target.checked ? 0 : -1
    })
    this.$.linksOverlay.forEach((elem) => {
      elem.$.tabIndex = ev.target.checked ? 0 : -1
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
    for (const [key, value] of Object.entries(obj)) {
      if (!('name' in value))
        continue

      let base = key == this.parent.state.repository ?
                 this.parent.state.content_root :
                 `${prefix}${key}/`
      this.$.linksSidebar.push(new DOM('a', {
        'href': `${base}${home}`,
        'className': this.parent.state.repository === key ? 'current' : '',
        'innerText': value['name']
      }))
    }

    this.$.linksSidebar.forEach((elem) => {
      this.$.linksOverlay.push(elem.cloneNode(true))
    })

    if ($.repotocTreeOverlay.$)
      $.repotocTreeOverlay.removeChilds(),
      $.repotocTreeOverlay.append(this.$.linksOverlay)
    if ($.repotocTreeSidebar.$)
      $.repotocTreeSidebar.removeChilds(),
      $.repotocTreeSidebar.append(this.$.linksSidebar)

    let event = new Event('change');
    this.$.show_repotoc.$.dispatchEvent(event)
  }
  update_banner (obj) {
    let $ = this.$

    if ('msg' in obj)
      $.banner.append(new DOM('span', {
        'innerText': obj['msg']
      }))

    if ('a_href' in obj && 'a_text' in obj)
      $.banner.append(new DOM('a', {
        'href': obj['a_href'],
        'innerText': obj['a_text'],
        'target': '_blank'
      }))
  }
}
