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
    this.generation = 0
    addEventListener('resize', () => { this.show(undefined, false) })
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
  /**
   * Remove dropdowns and ignore pending tags.json responses.
   */
  reset () {
    this.generation++
    this.show(undefined, false)
    this.$.lists?.forEach(node => node.remove())
    this.$.cancel?.remove()
    this.$.dropdowns?.forEach(node => node.remove())
    this.$ = {}
    this.tags = undefined
  }
  construct () {
    const generation = this.generation
    if (this.parent.state.offline) {
      let path = location.href
      this.prefix = new URL(this.parent.state.content_root, path).href
      this.prefix = this.prefix.substring(0, this.prefix.length - 1)
      this.fallback()
      return
    }

    if (this.parent.state.landing_page)
      return

    this.prefix = this.parent.state.subhost
    this.prefix = new URL(this.prefix, location.origin).href
    if (!this.prefix.endsWith('/'))
      this.prefix += '/'
    const response = fetch(
      new Request(new URL('tags.json', this.prefix), { cache: 'no-store' })
    )
      .then(response => response)
      .then(response => response.json())
      .then(obj => {
        if (generation === this.generation)
          this.init_tags(obj)
      })
      .catch(error => {
        if (generation !== this.generation)
          return
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
      /* Mode three: versions containing packages. */
      const record = value => Object.prototype.toString.call(value) === '[object Object]'
      if (Object.values(obj).some(record)) {
        for (const [id, version] of Object.entries(obj)) {
          if (!id || id.startsWith('/') || id.endsWith('/') ||
              !record(version) || typeof version.label !== 'string' ||
              !record(version.packages) || !Object.keys(version.packages).length)
            return true
          for (const [pkg, entry] of Object.entries(version.packages)) {
            if (!pkg || pkg.includes('/') || (typeof entry !== 'string' &&
                !(Array.isArray(entry) && entry.length === 2 && assert_string(entry))))
              return true
          }
        }
        return 'packages'
      }
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
   * Got to a version, tries current docname and anchor
   */
  select_version(entry, new_tab) {
    this.show(undefined, false)
    const start = this.parent.state.path.length > 0 ?
                  this.prefix + this.parent.state.path + '/' :
                  this.prefix
    if (location.href.startsWith(start)) {
      const pathname = location.href.substring(start.length)
      let url = new URL(pathname, entry.dataset['alt_href'])
      url.hash = location.hash
      if (this.parent.hot_reload?.navigate)
        this.parent.hot_reload.navigate(url, entry.dataset['alt_href'], new_tab)
      else
        Toolbox.try_redirect(url, entry.dataset['alt_href'], new_tab)
    } else {
      if (new_tab)
        window.open(entry.dataset['alt_href'], '_blank').focus()
      else if (this.parent.hot_reload?.navigate)
        this.parent.hot_reload.navigate(entry.dataset['alt_href'])
      else
        location.href = entry.dataset['alt_href']
    }
  }
  /**
   * Flatten package form into fine-grained form
   * The package label has precedence over the version label.
   */
  static packages_to_object (obj) {
    let obj_ = {}
    for (const [id, version] of Object.entries(obj)) {
      for (const [pkg, entry] of Object.entries(version.packages)) {
        const [name, label] = Versioned.package_entry(pkg, entry)
        obj_[`${id}/${pkg}`] = [`${id} > ${name}`, label || version.label]
      }
    }
    return obj_
  }
  /**
   * Normalize a package value, "label" or ["Alt Name", "label"],
   * into [name, label].
   */
  static package_entry (pkg, entry) {
    return Array.isArray(entry) ? entry : [pkg, entry]
  }
  /** Package builds. */
  static package_menus (obj, path) {
    for (const [id, version] of Object.entries(obj)) {
      for (const pkg of Object.keys(version.packages)) {
        if (`${id}/${pkg}` !== path)
          continue
        const versions = Object.fromEntries(Object.entries(obj)
          .filter(([, value]) => Object.hasOwn(value.packages, pkg))
          .map(([key, value]) => [`${key}/${pkg}`, [key, value.label]]))
        const packages = Object.fromEntries(Object.entries(version.packages)
          .map(([key, entry]) => [`${id}/${key}`, Versioned.package_entry(key, entry)]))
        return {versions, packages}
      }
    }
  }
  render (obj) {
    const mode = Versioned.assert(obj)
    if (mode === true)
      return
    if (mode === 'packages') {
      const menus = Versioned.package_menus(obj, this.parent.state.path)
      if (!menus) {
        console.warn('versioned: current package path is not in tags.json')
        this.fallback()
        return
      }
      this.render_dropdown(menus.versions)
      this.render_dropdown(menus.packages, true)
    } else {
      this.render_dropdown(mode === 'string-array' ?
        Versioned.string_array_to_object(obj) : obj)
    }
  }
  /** Create version/package dropdowns in the sidebar and header. */
  render_dropdown (obj, packages = false) {
    let version = this.parent.state.version
    let path = this.parent.state.path
    let label = ''

    let toc_tree = DOM.get('.sphinxsidebarwrapper .toc-tree')
    let nav_bar = DOM.get('header #right .reverse')
    let body = DOM.get('body')

    let i = Object.keys(obj).length > 10 ? 2 : 1
    let cols = " auto".repeat(i)
    let container2 = DOM.new('div', {
      'className': 'version-dropdown-list',
      'style': `grid-template-columns:${cols}`
    })

    if (Object.hasOwn(obj, path)) {
      label = obj[path][1]
      version = obj[path][0]
    } else {
      console.warn(`versioned: current path ${path} is not in the tags.json. Hard-coded meta[name="version"] will be used.`, obj)
    }

    for (let key in obj) {
      let page = key.length > 0 ?
                 this.prefix + key + '/' :
                 this.prefix
      let entry = DOM.new('button', {
        'alt_href': page
      })
      entry.addEventListener('mousedown', (ev) => {
        ev.preventDefault()
      })
      entry.addEventListener('mouseup', (ev) => {
        if (ev.which !== 1 && ev.which !== 2)
          return

        if (packages)
          this.select_package(entry, ev.which === 2)
        else
          this.select_version(entry, ev.which === 2)
      })
      entry.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter') {
          if (packages)
            this.select_package(entry, false)
          else
            this.select_version(entry, false)
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

    if (!packages && Object.keys(obj).length <= 1) {
      container2.classList.add('no-other')
    }
    let cancel_dropdown = this.$.cancel || DOM.new('div', {
      'id': 'cancel-area-show-version-dropdown'
    })
    body.append(cancel_dropdown)
    body.append(container2)

    let container = DOM.new('div', {
      'className': `version-dropdown${packages ? ' package-dropdown' : ''}`,
      'title': packages ? 'Select package' : 'Change version',
      'tabIndex': '0'
    })
    container.innerText = version
    let label_ = DOM.new('span', {
      'className': this.get_class_labels(label)
    })
    label_.innerText = label
    container.append(label_)

    if (!this.$.groups) {
      this.$.groups = [toc_tree, nav_bar].map(parent => {
        const group = DOM.new('div', {className: 'version-dropdown-group'})
        parent === toc_tree ? parent.prepend(group) : parent.append(group)
        return group
      })
    }
    this.$.groups[0].append(container)
    let container3 = container.cloneNode(true)

    container.addEventListener('keypress', (ev) => {
      if (ev.key === 'Enter')
        this.show(container, true, container2)
    })
    container.onclick = (ev) => { this.show(container, true, container2) }
    container3.addEventListener('keypress', (ev) => {
      if (ev.key === 'Enter')
        this.show(container3, true, container2)
    })
    container3.onclick = (ev) => { this.show(container3, true, container2) }
    cancel_dropdown.onclick = (ev) => {this.show(undefined, false) }
    this.$.groups[1].append(container3)

    this.$.lists = [...(this.$.lists || []), container2]
    this.$.cancel = cancel_dropdown
    this.$.dropdowns = this.$.groups
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
  select_package (entry, new_tab) {
    this.show(undefined, false)
    const url = entry.dataset['alt_href']
    if (new_tab)
      window.open(url, '_blank')
    else if (this.parent.hot_reload?.navigate)
      this.parent.hot_reload.navigate(url)
    else
      location.href = url
  }
  show (dom, show, list) {
    this.$.cancel?.classList.remove('on')
    this.$.lists?.forEach(node => node.classList.remove('on'))
    if (!show)
      return
    this.$.list = list

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
    this.$.list.firstChild?.focus()
  }
}
