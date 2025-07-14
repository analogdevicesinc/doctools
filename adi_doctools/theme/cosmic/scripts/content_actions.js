"use strict";
import {DOM} from './dom.js'
import {Toolbox} from './toolbox.js'

/**
 * Enhance content interactions.
 * The actions are:
 * * Copy button on code and shell blocks.
 */
export class ContentActions {
  constructor (app) {
    this.$ = {}
    this.parent = app
    this.init()
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
    console.log(code_block)
  }
  unused () {
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
  init () {
    if (!document.querySelector('script[src*="_static/copybutton.js"]'))
      this.copy_button()
    else
      console.log('copy_button: sphinx-copy-button extension is present, skipping')
  }
}
