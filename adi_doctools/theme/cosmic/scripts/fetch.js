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
    if (this.parent.state.offline === true) {
      console.log("fetch: dynamic features are not available in offline mode")
      return
    } else if (this.parent.state.sub_hosted === false) {
      console.log("fetch: dynamic features are not available for single repository doc")
      return
    }

    Toolbox.cache_check(this.parent.state, '/doctools/metadata.json', 24,
                        (obj) => {this.init_metadata(obj)})
  }
  /**
   * Attach metadata to this and call to inject extra modules.
   */
  init_metadata (obj) {
    this.parent.state.metadata = obj

    if ('modules' in obj)
      this.load_modules(obj['modules'])
  }
  /**
   * Inject any JavaScript and CSS StyleSheet listed on the metadata.
   * The advantage is to load the latest and greatest scripts, regardless
   * of the tools' built doc version.
   */
  load_modules (obj) {
    if ('javascript' in obj) {
      obj['javascript'].forEach((elem) => {
        let script = new DOM('script', {
          'src': `/doctools/_static/${elem}`
        });
        this.$.head.append(script)
      })
    }
    if ('stylesheet' in obj) {
      obj['stylesheet'].forEach((elem) => {
        let style = new DOM('link', {
          'rel': 'stylesheet',
          'type': 'text/css',
          'href': `/doctools/_static/${elem}`
        });
        this.$.head.append(style)
      })
    }
  }
}
