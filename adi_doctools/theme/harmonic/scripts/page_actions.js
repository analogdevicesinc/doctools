"use strict";
import {DOM} from './dom.js'
import {Toolbox} from './toolbox.js'

/**
 * Shows page actions buttons to the right side of the title.
 * The actions are:
 * * An edit page button to open the page source code on the git hosting website.
 * * Resolve stub pages
 */
export class PageActions {
  constructor (app) {
    this.$ = {}

    this.with_page_source = false
    this.parent = app
    if (typeof this.parent.fetch === 'object')
      this.parent.fetch.then(this.construct.bind(this))
    else
      this.construct()

    this.parent.versioned.then(this.handler_stub.bind(this))

    app.page_actions = this
  }

  page_source_sanity (m, r) {
    if (!m.hasOwnProperty('source_hostname')) {
      console.warn("edit_source: 'source_hostname' missing from the metadata", m)
      return true
    }

    if (!m['repotoc'].hasOwnProperty(r)) {
      // The repo may not have been added yet
      console.warn(`edit_source: repository '${r}' not in the metadata`)
      return true
    }

    if (!m['repotoc'][r].hasOwnProperty('pathname')) {
      console.warn(`edit_source: 'pathname' missing from entry '${r}'`)
      return true
    }

    if (!m['repotoc'][r].hasOwnProperty('branch')) {
      console.warn(`edit_source: 'branch' missing from entry '${r}'`)
      return true
    }
  }
  /*
   * Don't show page source button on some pages.
   */
  page_source_ignore () {
    /* Search page */
    if (document.querySelector("#search-documentation") !== null)
      return true

    return false
  }
  draw_page_source () {
    this.$.container = DOM.new('div', {
      'className': 'page-actions'
    })
    this.$.edit_button = DOM.new('button', {
      'className': 'edit-source',
      'title': 'See and edit this page source'
    })

    this.$.edit_button.addEventListener('mousedown', (ev) => {
      ev.preventDefault()
    })
    this.$.edit_button.addEventListener('mouseup', (ev) => {
      if (ev.which !== 1 && ev.which !== 2)
        return
      Toolbox.try_include(
        this.edit_button_tgt_raw,
        this.$.edit_button.alt_href,
        true
      )
    })
    this.$.container.append(this.$.edit_button)
  }
  preinit_page_source () {
    let m = this.parent.state.metadata
    let r = this.parent.state.repository

    if (this.page_source_sanity(m, r))
      return

    if (this.page_source_ignore())
      return

    this.draw_page_source()
    this.with_page_source = true
  }
  init_page_source () {
    if (!this.with_page_source)
      return

    let doc = DOM.get('.bodywrapper .body-header .breadcrumb')
    if (doc === null || doc.classList.contains('empty')) {
      doc =  DOM.get('.bodywrapper .body')
      doc.insertAdjacentElement('afterbegin', this.$.container)
    } else {
      doc.parentElement.insertAdjacentElement('beforeend', this.$.container)
    }

    let m = this.parent.state.metadata
    let r = this.parent.state.repository

    let format_tgt = (hostname) => {
      return hostname.replace('{repository}', r)
                              .replace('{branch}', m['repotoc'][r]['branch'])
                              .replace('{pathname}', m['repotoc'][r]['pathname'])
    }

    let page_source_suffix = () => {
      let dom = document.querySelector('meta[name="page_source_suffix"]')
      if (dom === null)
        return '.rst'
      return dom.content
    }
    let suffix = page_source_suffix()

    let tgt = format_tgt(m.source_hostname)
    let tgt_raw = format_tgt(m.source_hostname_raw)
    let path = ""
    if (this.parent.state.offline)
      path = new URL("file://"+location.pathname).href
    else
      path = new URL(location.pathname, location.origin).href

    let base = new URL(this.parent.state.content_root, path).href
    let pathname = path.substring(base.length)

    if (pathname.endsWith('.html'))
      pathname = pathname.replace(/\.html$/i, suffix)
    else if (pathname.endsWith('/') || pathname === "")
      pathname = pathname.concat(`index${suffix}`)
    else
      pathname = pathname.concat(suffix)

    tgt = tgt.concat('/', pathname)
    tgt_raw = tgt_raw.concat('/', pathname)

    this.$.edit_button.alt_href = tgt
    this.edit_button_tgt_raw = tgt_raw
  }
  deinit_page_source () {
    if (!this.with_page_source)
      return

    this.edit_button_tgt_raw = undefined
  }
  handler_stub () {
    if (!this.parent.versioned.tags)
      return
    let dom = document.querySelector('meta[name="stub"]')
    if (!dom || dom.content === '')
      return

    const start = app.state.path.length > 0 ?
                  this.parent.versioned.prefix + app.state.path + '/' :
                  this.parent.versioned.prefix

    if (!location.href.startsWith(start))
      return

    const pathname = location.href.substring(start.length)
    let url = new URL(pathname, this.parent.versioned.prefix + dom.content + '/')
    if (url.href === location.href) {
      console.warn(`page_actions: stub cadidate '${dom.content}' references itself`)
      return
    }
    let await_ = async () => {
      if (await Toolbox.try_redirect(url, undefined, false))
        console.log(`page_actions: stub candidate '${dom.content}' does not exist`)
    }
    await_()
  }
  construct () {
    this.preinit_page_source()
    this.init()
  }
  init () {
    this.init_page_source()
    this.handler_stub()
  }
  deinit () {
    this.deinit_page_source()
  }
}
