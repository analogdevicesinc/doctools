"use strict";
import {DOM} from './dom.js'
import {Toolbox} from './toolbox.js'

/**
 * Fetches the tags.json file and renders a dropdown.
 */
export class VersionDropdown {
  constructor (app) {
    this.parent = app
    if (this.parent.state.offline)
      return
    this.$ = {}

    this.prefix = this.parent.state.subhost
    this.prefix = new URL(this.prefix, location.origin).href
    if (this.prefix.endsWith('/'))
      this.prefix = this.prefix.slice(0, -1)
    this.construct()
  }

  construct () {
    const response = fetch(
      new Request(new URL('tags.json', this.prefix+'/'))
    )
      .then(response => response)
      .then(response => response.json())
      .then(obj => this.render(obj))
      .catch(error => {
        console.log("version_dropdown: no tags.json to fill dropdown")
      })
  }
  /**
   * Assert if tags.json is valid
   */
  static assert (obj) {
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
   * Convert object into strig array.
   */
  static object_to_string_array (obj) {
    let obj_ = []

    for (const key in obj) {
      obj_.push(key)
    }

    return obj_
  }
  /**
   * Convert string array of versions into object.
   */
  static string_array_to_object (obj) {
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
    let mode = VersionDropdown.assert(obj)
    if (mode === true)
      return
    else if (mode == "string-array")
      obj = VersionDropdown.string_array_to_object(obj)

    let toc_tree = DOM.get('.sphinxsidebarwrapper .toc-tree')
    let nav_bar = DOM.get('header #right .reverse')
    let body = DOM.get('body')

    let i = Object.keys(obj).length > 10 ? 4 : 2
    let cols = " auto".repeat(i)
    let container2 = DOM.new('div', {
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
      let entry = DOM.new('button', {
        'alt_href': key.length > 0 ?
                    this.prefix+'/'+key :
                    this.prefix
      })
      entry.addEventListener('mousedown', (ev) => {
        ev.preventDefault()
      })
      entry.addEventListener('mouseup', (ev) => {
        if (ev.which !== 1 && ev.which !== 2)
          return
        const new_tab = ev.which === 2

        let start = app.state.path.length > 0 ?
                      this.prefix+'/'+app.state.path :
                      this.prefix
        if (location.href.startsWith(start)) {
          let pathname = location.href.substring(start.length + 1)
          if (entry.dataset['alt_href'].slice(-1) !== '/')
            pathname = '/' + pathname
          let url = new URL(entry.dataset['alt_href'] + pathname)
          url.hash = location.hash
          Toolbox.try_redirect(url, entry.dataset['alt_href'], new_tab)
        } else {_
          if (new_tab)
            window.open(entry.url, '_blank').focus()
          else
            location.href = entry.url
        }
      })
      let entry_ = DOM.new('div')
      let label_ = DOM.new('div')
      entry_.innerText = obj[key][0]
      let label = DOM.new('span', {
        'className': obj[key][1] === '' ? "" : "label"
      })
      label.innerText = obj[key][1]
      label_.append(label)
      entry.append(entry_)
      entry.append(label_)
      container2.append(entry)
    }
    let cancel_dropdown = DOM.new('dev', {
      'id': 'cancel-area-show-version-dropdown'
    })
    body.append(cancel_dropdown)
    body.append(container2)

    let container = DOM.new('div', {
      'className': 'version-dropdown',
      'title': 'Change version'
    })
    container.innerText = version
    let label_ = DOM.new('span', {
      'className': label === '' ? "" : "label"
    })
    label_.innerText = label
    container.append(label_)

    toc_tree.insertAdjacentElement('afterbegin', container)
    let container3 = container.cloneNode(true)

    container.onclick = (ev) => { this.show(container, true) }
    container3.onclick = (ev) => { this.show(container3, true) }
    cancel_dropdown.onclick = (ev) => {this.show(undefined, false) }
    onresize = (ev) => { this.show(undefined, false) }
    nav_bar.append(container3)

    this.$.list = container2
    this.$.cancel= cancel_dropdown
  }
  show (dom, show) {
    if (!show) {
      this.$.cancel.classList.remove('on')
      this.$.list.classList.remove('on')
      return
    }

    let rect = dom.getBoundingClientRect()
    let wiw = window.innerWidth
    this.$.list.style.top = `${rect.top + 2.5*16}px`
    if ((wiw - rect.right) < rect.left)
      this.$.list.style.right = `${wiw - rect.right}px`
    else
      this.$.list.style.left = `${rect.left}px`
    this.$.cancel.classList.add('on')
    this.$.list.classList.add('on')
  }
}
