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

    app.content_actions = this
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
  deinit () {
  }
  init () {
    if (!document.querySelector('script[src*="_static/copybutton.js"]'))
      this.copy_button()
    else
      console.log('copy_button: sphinx-copy-button extension is present, skipping')
  }
}
