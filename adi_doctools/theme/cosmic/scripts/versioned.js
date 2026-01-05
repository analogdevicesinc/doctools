"use strict";
import {DOM} from './dom.js'
import {Toolbox} from './toolbox.js'

/**
 * Fetches the tags.json file and renders a dropdown.
 */
export class Versioned {
  constructor (app) {
    this.parent = app
    this.$ = {}

    this.tags
    this.prefix
    this.callback = []
    this.construct()

    app.versioned = this
  }

  fallback () {
    let version = this.parent.state.version
    let char = version.substr(0,1)

    if (version === "")
      return

    console.log("versioned: using hard-coded current version")
    if (char >= '0' && char <= '9')
      version = `v${version}`

    this.render({"": [version, ""]})
  }
  construct () {
    if (this.parent.state.offline) {
      let path = location.href
      this.prefix = new URL(app.state.content_root, path).href
      this.prefix = this.prefix.substring(0, this.prefix.length - 1)
      this.fallback()
      return
    }

    this.prefix = this.parent.state.subhost
    this.prefix = new URL(this.prefix, location.origin).href
    if (!this.prefix.endsWith('/'))
      this.prefix += '/'
    const response = fetch(
      new Request(new URL('tags.json', this.prefix))
    )
      .then(response => response)
      .then(response => response.json())
      .then(obj => this.init_tags(obj))
      .catch(error => {
        console.log("versioned: no tags.json and no current version")
        this.fallback()
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
        console.warn("versioned: expected array of strings, got ", obj)
        return true
      }
      return "string-array"
    } else if (Object.prototype.toString.call(obj) === '[object Object]') {
      /* Mode two: elaborated version */
      for (let key in obj) {
        if (!Array.isArray(obj[key])) {
          console.warn("versioned: expected array, got ", obj[key])
          return true
        } else if (obj[key].length !== 2) {
          console.warn(`versioned: expected two items, got ${obj[key].length}`, obj[key])
          return true
        }
      }
      return "fine-grained"
    }

    console.warn("versioned: expected object of arrays or array of strings, got ", obj)

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
      if (!key.startsWith('pull/') && !key.startsWith('staging/')) {
        obj_[key] = [obj_[key][0], "latest"]
        break
      }
    }

    for (const key in obj_) {
      if (key.startsWith('pull/'))
        obj_[key] = ['#'+ obj_[key][0].substring(5), "pull request"]
      else if (key.startsWith('staging/'))
        obj_[key] = [obj_[key][0], "branch"]
    }

    return obj_
  }
  get_class_labels (text) {
    if (text === '')
      return ''
    let labels = 'label'
    if (text === 'pull request')
      labels += ' pull_request'
    else if (text === 'unstable')
      labels += ' unstable'
    return labels
  }
  init_tags (obj) {
    this.tags = obj
    this.callback.forEach(cb => cb())
    this.render(obj)
  }
  /**
   * Create Tag/Version dropdown at the left sidebar.
   */
  render (obj) {
    let version = this.parent.state.version
    let path = this.parent.state.path
    let label = ''
    let mode = Versioned.assert(obj)
    if (mode === true)
      return
    else if (mode == "string-array")
      obj = Versioned.string_array_to_object(obj)

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
      console.warn(`versioned: current path ${path} is not in the tags.json. Hard-coded meta[name="version"] will be used.`, obj)
    }

    for (let key in obj) {
      let page = key.length > 0 ?
                 this.prefix + key + '/' :
                 this.prefix
      page += "index.html"
      let entry = DOM.new('button', {
        'alt_href': page
      })
      entry.addEventListener('mousedown', (ev) => {
        ev.preventDefault()
      })
      entry.addEventListener('mouseup', (ev) => {
        if (ev.which !== 1 && ev.which !== 2)
          return
        const new_tab = ev.which === 2

        const start = app.state.path.length > 0 ?
                      this.prefix + app.state.path + '/' :
                      this.prefix
        if (location.href.startsWith(start)) {
          const pathname = location.href.substring(start.length)
          let url = new URL(pathname, entry.dataset['alt_href'])
          url.hash = location.hash
          Toolbox.try_redirect(url, entry.dataset['alt_href'], new_tab)
        } else {
          if (new_tab)
            window.open(entry.dataset['alt_href'], '_blank').focus()
          else
            location.href = entry.dataset['alt_href']
        }
      })
      let entry_ = DOM.new('div')
      let label_ = DOM.new('div')
      entry_.innerText = obj[key][0]
      let label = DOM.new('span', {
        'className': this.get_class_labels(obj[key][1])
      })
      label.innerText = obj[key][1]
      label_.append(label)
      entry.append(entry_)
      entry.append(label_)
      container2.append(entry)
    }
    if (Object.keys(obj).length <= 1) {
      container2.classList.add('no-other')
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
      'className': this.get_class_labels(label)
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
  /**
   * Append callbacks to call after tags.json is loaded.
   */
  then (callback) {
    if (this.parent.state.version)
      callback()
    else
      this.callback.push(callback)
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
    if ((wiw - rect.right) < rect.left) {
      this.$.list.style.removeProperty('left')
      this.$.list.style.right = `${wiw - rect.right}px`
    } else {
      this.$.list.style.left = `${rect.left}px`
      this.$.list.style.removeProperty('right')
    }
    this.$.cancel.classList.add('on')
    this.$.list.classList.add('on')
  }
}
