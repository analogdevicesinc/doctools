"use strict";
import {DOM} from './dom.js'
import {Toolbox} from './toolbox.js'

/**
 * Fetches the tags.json file and renders a dropdown.
 */
export class VersionDropdown {
  constructor (app) {
    this.$ = {}

    this.parent = app
    /* polyfill < v0.4.11 */
    let prefix = ''
    if (Object.hasOwn(this.parent.state, 'sub_hosted'))
      this.prefix = this.parent.state.sub_hosted === true ?
                   `/${this.parent.state.repository}` : ''
    else
      this.prefix = this.parent.state.subhost

    this.init()
  }

  init() {
    if (this.parent.state.offline)
      return

    Toolbox.fetch_each(`${this.prefix}/tags.json`).then((obj) => {
      if ('error' in obj) {
        console.error(`Failed to fetch resource, due to:`, obj['error'])
        return
      }
      this.render(obj['obj'])
    })
  }
  /**
   * Assert if tags.json is valid
   */
  assert (obj) {
    let assert_string = (arr) => {
      return arr.every(item => typeof item === "string")
    }

    if (Array.isArray(obj)) {
      /* Mode one: simple array of versions */
      if (!assert_string(obj)) {
        console.warn("version_dropdown: expected array of strings, got ", obj)
        return true
      }
      return "string-array"
    } else if (Object.prototype.toString.call(obj) === '[object Object]') {
      /* Mode two: elaborated version */
      for (let key in obj) {
        if (!Array.isArray(obj[key])) {
          console.warn("version_dropdown: expected array, got ", obj[key])
          return true
        } else if (obj[key].length !== 2) {
          console.warn(`version_dropdown: expected two items, got ${obj[key].length}`, obj[key])
          return true
        }
      }
      return "fine-grained"
    }

    console.warn("version_dropdown: expected object of arrays or array of strings, got ", obj)

    return true
  }
  /**
   * Convert string array of versions into object.
   */
  string_array_to_object (obj) {
    let obj_ = {}

    obj.forEach((item) => {
      obj_[item] = [item, ""]
    })

    if ("" in obj_)
      obj_[""] = ["main", "unstable"]

    for (const key in obj_) {
      obj_[key] = [obj_[key][0], "latest"]
      break
    }

    return obj_
  }
  /**
   * Create Tag/Version dropdown at the left sidebar.
   */
  render (obj) {
    let version = this.parent.state.version
    let path = this.parent.state.path
    let label = ''
    let mode = this.assert(obj)
    if (mode === true)
      return
    else if (mode == "string-array")
      obj = this.string_array_to_object(obj)

    let toc_tree = DOM.get('.sphinxsidebarwrapper .toc-tree')
    let nav_bar = DOM.get('header #right .reverse')
    let body = DOM.get('body')

    let i = Object.keys(obj).length > 10 ? 4 : 2
    let cols = " auto".repeat(i)
    let container2 = new DOM('div', {
      'className': 'version-dropdown-list',
      'style': `grid-template-columns:${cols}`
    })

    if (obj.hasOwnProperty(path)) {
      label = obj[path][1]
      version = obj[path][0]
    } else {
      console.warn(`version_dropdown: current path ${path} is not in the tags.json. Hard-coded meta[name="version"] will be used.`, obj)
    }

    for (let key in obj) {
      let entry = new DOM('a', {
        'href': key.length > 0 ?
                  `${this.prefix}/${key}` :
                  `${this.prefix !== '' ? this.prefix : '/.'}`
      })
      let handle = (self, new_tab, e) => {
        e.preventDefault()
        let start = app.state.path.length > 0 ?
                      `${this.prefix}/${app.state.path}` :
                      `${this.prefix}`
        if (location.pathname.startsWith(start)) {
          let pathname = location.pathname.substring(start.length + 1)

          if (self.$.href.slice(-1) !== '/')
            pathname = '/' + pathname
          let url = new URL(self.$.href + pathname)
          url.hash = location.hash
          Toolbox.try_redirect(url, self.$.href, new_tab)
        } else {
          if (new_tab)
            window.open(self.$.url, '_blank').focus()
          else
            location.href = self.$.url
        }
      }
      entry.onclick (this, handle, [entry, false])
      entry.onauxclick (this, handle, [entry, true])
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
      'title': 'Change version'
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
