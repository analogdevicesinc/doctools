"use strict";
import {DOM} from './dom.js'
import {Toolbox} from './toolbox.js'

/**
 * Updates dynamic  links, banners with content from metadata.json.
 */
export class Links {
  constructor (app) {
    this.$ = {}

    this.set_doms()
    this.parent = app

    let m = app.navigation.metadata
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

  update_repotoc (obj) {
    let $ = this.$

    let home = "index.html"
    let linksOverlay = [],
        linksSidebar = []
    for (const [key, value] of Object.entries(obj)) {
      if (!('name' in value))
        continue

      let base = key == this.parent.state.repository ?
                 this.parent.state.content_root :
                 `/${key}/`
      linksSidebar.push(new DOM('a', {
        'href': `${base}${home}`,
        'className': this.parent.state.repository === key ? 'current' : '',
        'innerText': value['name']
      }))
    }

    linksSidebar.forEach((elem) => {
      linksOverlay.push(elem.cloneNode(true))
    })

    if ($.repotocTreeOverlay.$)
      $.repotocTreeOverlay.removeChilds(),
      $.repotocTreeOverlay.append(linksOverlay)
    if ($.repotocTreeSidebar.$)
      $.repotocTreeSidebar.removeChilds(),
      $.repotocTreeSidebar.append(linksSidebar)
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
