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
  collection () {
    let tocwrapper = new DOM(DOM.get('.localtoc .tocwrapper'))
    let header = new DOM('div', {
      'className': 'header'
    })
    header.innerText = "Collections"
    let container = new DOM('div').append(header)

    let collection0 = new DOM('div', {
      'className': 'subheader'
    })
    let mocks_ = ['User Guide', 'HDL project', 'Linux driver', 'no-OS driver']
    let mocks = []
    mocks_.forEach(item => {
      const m = new DOM('a', {'href': '#'})
      m.innerText = item
      mocks.push(new DOM('li').append(m))
    })
    collection0.innerText = "AD-APARD32690-SL"
    container.append([
      new DOM('div', {'className': 'group'}).append([
        collection0,
        new DOM('ul').append(mocks)
      ]),
    ])

    let collection1 = new DOM('div', {
      'className': 'subheader'
    })
    mocks_ = ['User Guide', 'HDL project', 'no-OS driver']
    mocks = []
    mocks_.forEach(item => {
      const m = new DOM('a', {'href': '#'})
      m.innerText = item
      mocks.push(new DOM('li').append(m))
    })
    collection1.innerText = "AD-LORE-INPSUM"
    container.append([
      new DOM('div', {'className': 'group'}).append([
        collection1,
        new DOM('ul').append(mocks)
      ]),
    ])

    tocwrapper.append(container)
  }
  deinit () {
  }
  init () {
    if (!document.querySelector('script[src*="_static/copybutton.js"]'))
      this.copy_button()
    else
      console.log('copy_button: sphinx-copy-button extension is present, skipping')
    this.collection()
  }
}
