"use strict";

import {Toolbox} from './toolbox.js'
import {DOM} from './dom.js'

export class Fetch {
  constructor (app) {
    let $ = this.$ = {}
    $.head = new DOM(DOM.get('head'))

    this.parent = app

    this.init()
  }
  /**
   * Updates elements in a reactive manner,
   * fetching from the main doctools/metadata.js,
   * that contain the most up-to-date metadata
   */
  init () {
    let urls = [
      'https://analogdevicesinc.github.io/doctools/metadata.json'
    ]
    if (this.parent.state.offline === false)
      urls.unshift('/metadata.json', '/doctools/metadata.json')
    Toolbox.cache_check(this.parent.state,
                        urls, 24, (obj) => {this.init_metadata(obj)})
  }
  /**
   * Attach metadata to this and call to inject extra modules.
   */
  init_metadata (obj) {
    this.parent.state.metadata = obj['obj']

    if ('modules' in obj['obj'])
      this.load_modules(obj['obj']['modules'], obj['url'])
  }
  /**
   * Inject any JavaScript and CSS StyleSheet listed on the metadata.
   * The advantage is to load the latest and greatest scripts, regardless
   * of the tools' built doc version.
   */
  load_modules (obj, url) {
    if (typeof url !== 'string') {
      console.warn("Expected string with url, got ", url)
      return
    }

    if (url.startsWith("https://") || url.startsWith("http://"))
      url = new URL(url).origin
    else if (this.parent.state.offline === true)
      url = `${this.parent.state.metadata.remote_doc}/doctools`
    else
      url = ""

    let url_ = this.parent.state.sub_hosted === false ?
       `${url}/_static/` : `${url}/doctools/_static/`

    if ('javascript' in obj) {
      obj['javascript'].forEach((elem) => {
        let script = new DOM('script', {
          'src': `${url_}${elem}`
        });
        this.$.head.append(script)
      })
    }
    if ('stylesheet' in obj) {
      obj['stylesheet'].forEach((elem) => {
        let style = new DOM('link', {
          'rel': 'stylesheet',
          'type': 'text/css',
          'href': `${url_}${elem}`
        });
        this.$.head.append(style)
      })
    }
  }
}
