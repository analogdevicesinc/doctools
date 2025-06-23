"use strict";
import {DOM} from './dom.js'
import {Toolbox} from './toolbox.js'

/**
 * Shows page actions buttons to the right side of the title.
 * The actions are:
 * * An edit page button to open the page source code on the git hosting website.
 */
export class PageActions {
  constructor (app) {
    this.$ = {}

    this.parent = app
    this.page_source()
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

  draw_page_source (url, url_raw) {
    let container = new DOM('div', {
      'className': 'page-actions'
    })
    let edit_button = new DOM('a', {
      'className': 'edit-source',
      'title': 'See and edit this page source',
      'href': url,
      'target': 'blank'
    })
    edit_button.onclick(this, (self, url_raw, e) => {
      e.preventDefault()
      Toolbox.try_include(url_raw, self.$.href, true)
    }, [edit_button, url_raw])
    edit_button.onauxclick(this, (self, url_raw, e) => {
      e.preventDefault()
      Toolbox.try_include(url_raw, self.$.href, true)
    }, [edit_button, url_raw])
    container.append(edit_button.$)

    let doc = DOM.get('.bodywrapper .body-header')
    if (doc === null) {
      doc =  DOM.get('.bodywrapper .body')
      doc.insertAdjacentElement('afterbegin', container.$)
    } else {
      doc.insertAdjacentElement('beforeend', container.$)
    }
  }

  page_source () {
    let m = this.parent.state.metadata
    let r = this.parent.state.repository

    if (this.page_source_sanity(m, r))
      return

    if (this.page_source_ignore())
      return

    let page_source_suffix = () => {
      let dom = document.querySelector('meta[name="page_source_suffix"]')
      if (dom === null)
        return '.rst'
      return dom.content
    }
    let suffix = page_source_suffix()

    let format_tgt = (hostname) => {
      return hostname.replace('{repository}', r)
                              .replace('{branch}', m['repotoc'][r]['branch'])
                              .replace('{pathname}', m['repotoc'][r]['pathname'])
    }

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
    else
      pathname = pathname.concat(`index${suffix}`)

    tgt = tgt.concat('/', pathname)
    tgt_raw = tgt_raw.concat('/', pathname)

    this.draw_page_source(tgt, tgt_raw)
  }
}
