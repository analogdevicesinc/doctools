"use strict";

import {DispatchEvent} from './event.js'
import {DOM} from './dom.js'
import {Toolbox} from './toolbox.js'

/**
 * Enhance content interactions.
 * The actions are:
 * * Copy button on code and shell blocks.
 * * Collections, groups of pages of the same category.
 */
export class ContentActions {
  constructor (app) {
    this.$ = {}
    this.parent = app
    this.callback = []

    if (typeof this.parent.fetch === 'object')
      this.parent.fetch.then(this.construct.bind(this))
    else
      this.construct()

    app.content_actions = this
    DispatchEvent("app:content_actions:constructed")
  }
  copy_button () {
    let body = new DOM(DOM.get('.bodywrapper .body'))
    let code_block = DOM.getAll('div.highlight pre', body.$)
    code_block.forEach((item) => {
      if (item.parentNode.parentNode.classList.contains('no-select'))
        return
      if (item.children.length === 2 &&
          item.children[1].classList.contains('c1'))
        return
      let text = item.textContent.replaceAll('\n', '')
      if (text.length > 20)
        text = text.slice(0, 20) + "..."
      let button = new DOM('button', {
        className: 'icon copy',
        title: `Copy "${text}"`,
      }).onclick(this, (item, e) => {
        navigator.clipboard.writeText(item.textContent)
          .then(() => {})
          .catch((err) => {
            console.error(err)
          })

      }, [item])
      item.insertAdjacentElement('afterend', button.$)
    })
  }
  init_collection_wrapper () {
    let tocwrapper = new DOM(DOM.get('.localtoc .tocwrapper'))
    let header = new DOM('div', {
      'className': 'header'
    })
    header.innerText = "Collections"
    this.$.collection = new DOM('div',
      {'className': 'collections'}
    ).append(header)

    tocwrapper.append(this.$.collection)
  }
  auto_collection_name (repo, path) {
    const repo_name = repo in  this.parent.state.metadata.repotoc ?
      this.parent.state.metadata.repotoc[repo].name : repo
    if (this.collection_pattern === undefined ||
       !(repo in this.collection_pattern))
      return `${repo_name} (${path})`

    for (const pattern in this.collection_pattern[repo]) {
      const regex = new RegExp(pattern)
      const basename = path.substring(path.lastIndexOf('/')+1)
      if (regex.test(path))
        return this.collection_pattern[repo][pattern]
          .replace("${repository}", repo_name)
          .replace("${basename}", basename)
          .replace("${path}", path)
    }

    return `${repo_name} ${path}`
  }
  add_collection_entry (ul, repo, entry, props) {
    const name = "name" in props ? props["name"] : this.auto_collection_name(repo, entry)
    const url = new URL(`${this.parent.state.metadata.remote_doc}${repo}/${entry}`)
    const m = new DOM('a', {'href': url, 'target': 'blank'})
    m.innerText = name
    ul.append(new DOM('li').append(m))
  }
  add_collection (name, obj) {
    if (!this.$.collection)
      this.init_collection_wrapper()

    const id = name.replace(" ", "-")
    let collection = new DOM('label', {
      'className': 'sub-header',
      'htmlFor': `collection-${id}`,
    })
    let input_collection = new DOM('input', {
      'className': 'collection-collapse',
      'type': 'checkbox',
      'id': `collection-${id}`,
    })
    input_collection.$.checked = true
    collection.innerText = name

    let ul = new DOM('ul')
    for (const repo in obj) {
      for (const page in obj[repo])
        this.add_collection_entry(ul, repo, page, obj[repo][page])
    }
    this.$.collection.append([
      new DOM('div', {'className': 'group'}).append([
        input_collection,
        collection,
        new DOM('span', {'className': 'span-ul'}).append(ul)
      ]),
    ])
  }
  load_collection () {
    const repo = this.parent.state.repository
    const obj = this.parent.state.collection
    if (!("collection" in obj))
      return
    if ("pattern" in obj)
      this.collection_pattern = obj["pattern"]
    let path = ""
    if (this.parent.state.offline)
      path = new URL("file://"+location.pathname).href
    else
      path = new URL(location.pathname, location.origin).href
    let base = new URL(this.parent.state.content_root, path).href

    for (const key in obj["collection"]) {
      if (!("include" in obj["collection"][key]) ||
          !(repo in obj["collection"][key]['include']))
        continue

      const pages = obj["collection"][key]['include'][repo]
      for (const page in pages) {
        const collection_base = new URL(page, base).href
        if (path.startsWith(collection_base)) {
          this.add_collection(key, obj["collection"][key]['include'])
          break
        }
      }
    }
  }
  deinit_collection () {
    this.collection_controller.abort()

    if (!this.$.collection)
      return

    this.$.collection.$.remove()
    delete this.$.collection
    delete this.collection_pattern
  }
  init_collection () {
    this.collection_controller = new AbortController();
    const signal = this.collection_controller.signal

    let state = this.parent.state
    const base_url = (state.subhost === '' || state.offline === true) ?
      new URL(`${state.metadata.remote_doc}documentation/`) :
      new URL('documentation/', new URL(state.subhost, location.origin))
    // Do you want to use single_hosted with same origin? use below:
    //const base_url =
    //  new URL(state.subhost + '/', location.origin)

    if (this.collection) {
      this.load_collection()
      return
    }
    const response = fetch(
      new Request(new URL('collection.json', base_url)),
      { signal }
    )
      .then(response => response)
      .then(response => {
        if (response.ok === true)
          return response.json()
        else if (response.status === 404)
          return {} // Don't try again if doesn't exist
        else
          throw new Error();
      })
      .then(obj => {
        this.parent.state.collection = obj
        this.callback.forEach(cb => cb())
        this.load_collection()
      })
      .catch(err => {})
  }
  construct () {
    this.init()
  }
  deinit () {
    this.deinit_collection()
  }
  init () {
    if (!document.querySelector('script[src*="_static/copybutton.js"]'))
      this.copy_button()
    else
      console.log('copy_button: sphinx-copy-button extension is present, skipping')
    this.init_collection()
  }
  /**
   * Append callbacks to call after collection.json is loaded.
   */
  then (callback) {
    if (this.parent.state.collection)
      callback()
    else
      this.callback.push(callback)
  }
}
