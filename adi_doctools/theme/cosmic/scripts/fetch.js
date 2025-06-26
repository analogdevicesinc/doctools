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
    if (Object.hasOwn(this.parent.state, 'sub_hosted')) {
      if (this.parent.state.offline === false)
        // REVISIT: To save 56ms, infer docs from hostname
        urls.unshift('/docs/doctools/metadata.json', '/doctools/metadata.json', '/metadata.json')
    } else {
      if (this.parent.state.offline === false) {
        urls.unshift(new URL(`${this.parent.state.subhost}/../doctools/metadata.json`, location).href)
        urls.unshift('/metadata.json')
      }
    }
    Toolbox.fetch_each(urls).then((obj) => {
      if ('error' in obj) {
        console.error(`Failed to fetch resource, due to:`, obj['error'])
        return
      }
      this.init_metadata(obj['obj'], obj['url'])
    })
  }
  /**
   * Attach metadata to this and call to inject extra modules.
   */
  init_metadata (obj, url) {
    this.parent.state.metadata = obj

    if ('modules' in obj)
      this.load_modules(obj['modules'], url)
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

    if (!url.startsWith("https://") && !url.startsWith("http://"))
      url = new URL(url, location.origin)
    url = new URL('.', url)

    let url_ = `${url}_static/`

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
