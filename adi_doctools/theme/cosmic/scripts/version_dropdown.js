"use strict";
import {DOM} from './dom.js'
import {Toolbox} from './toolbox.js'

/**
 * Fetches the tags.json file and renders a dropdown.
 */
export class VersionDropdown{
  constructor (app) {
    this.$ = {}

    this.parent = app
    this.fetch_tags()
  }

  fetch_tags () {
    Toolbox.cache_check(this.parent.state,
                        `/${this.parent.state.repository}/tags.json`, 2,
                        (obj) => {this.render(obj)})
  }
  /**
   * Assert if tags.json is valid
   */
  assert (obj) {
    if (Object.prototype.toString.call(obj) !== '[object Object]') {
        console.warn("version_dropdown: expected object of arrays, got ", obj)
      return true
    }

    for (let key in obj) {
      if (!Array.isArray(obj[key])) {
        console.warn("version_dropdown: expected array, got ", obj[key])
        return true
      } else if (obj[key].length !== 2) {
        console.warn(`version_dropdown: expected two items, got ${obj[key].length}`, obj[key])
        return true
      }
    }

    return false
  }
  /**
   * Create Tag/Version dropdown at the left sidebar.
   */
  render (obj) {
    let version = this.parent.state.version
    let label = ''
    if (this.assert(obj) === true)
      return

    let toc_tree = DOM.get('.sphinxsidebarwrapper .toc-tree')
    let nav_bar = DOM.get('header #right .reverse')
    let body = DOM.get('body')

    let i = Object.keys(obj).length > 10 ? 4 : 2
    let cols = " auto".repeat(i)
    let container2 = new DOM('div', {
      'className': 'version-dropdown-list',
      'style': `grid-template-columns:${cols}`
    })

    if (obj.hasOwnProperty(version)) {
      label = obj[version][1]
      version = obj[version][0]
    }

    for (let key in obj) {
      let entry = new DOM('a', {
        'href': `/${this.parent.state.repository}/${key}`
      })
      let entry_ = new DOM('div')
      let label_ = new DOM('div')
      entry_.innerText = obj[key][0]
      let label = new DOM('span', {
        'className': obj[key][1] === '' ? "" : "label"
      })
      label.innerText = obj[key][1]
      label_.append(label)
      entry.append(entry_)
      entry.append(label_)
      container2.append(entry)
    }
    let cancel_dropdown = new DOM('dev', {
      'id': 'cancel-area-show-version-dropdown'
    })
    body.append(cancel_dropdown.$)
    body.append(container2.$)

    let container = new DOM('div', {
      'className': 'version-dropdown',
    })
    container.innerText = version
    let label_ = new DOM('span', {
      'className': label === '' ? "" : "label"
    })
    label_.innerText = label
    container.append(label_)

    toc_tree.insertAdjacentElement('afterbegin', container.$)
    let container3 = new DOM(container.$.cloneNode(true))

    container.onclick(this, this.show, [true])
    container3.onclick(this, this.show, [true])
    cancel_dropdown.onclick(this, this.show, [true])
    nav_bar.append(container3.$)

    this.$.list = container2
    this.$.cancel= cancel_dropdown
  }
  show (d) {
    DOM.switchState(this.$.cancel)
    DOM.switchState(this.$.list)
  }
}
