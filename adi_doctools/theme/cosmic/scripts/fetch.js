"use strict";

import {DispatchEvent} from './event.js'
import {Toolbox} from './toolbox.js'
import {DOM} from './dom.js'

export class Fetch {
  constructor (app) {
    let $ = this.$ = {}
    $.head = document.querySelector('head')

    this.parent = app
    this.callback = []
    this.base_url

    this.construct()

    app.fetch = this
    DispatchEvent("app:fetch:constructed")
  }
  /**
   * Updates elements in a reactive manner,
   * fetching from the main hosted doctools.
   * Fetches metadata.json, extra.umd.js, extra.umd.css
   * After metadata.json is fetched, its file list are also
   * fetched, if any.
   * Depending on the context, the origin changes:
   * - sub_hosted & ip_addr: same origin
   * - sub_hosted & domain: same origin
   * - single_hosted | offline: remote origin
   * That means, sub_hosted locally can be used to mock a
   * full domain deploy, while single_hosted and offline,
   * mostly used by user and doc writers, relies on the remote
   * source.
   */
  construct () {
    let state = this.parent.state
    const base_url = (state.subhost === '' || state.offline === true) ?
      new URL('https://analogdevicesinc.github.io/doctools/') :
      new URL('doctools/', new URL(state.subhost, location.origin))
    // Do you want to use single_hosted with same origin? use below:
    //const base_url =
    //  new URL(state.subhost + '/', location.origin)
    // Testing offline? use
    //const base_url =
    //  new URL('http://127.0.0.1:8000/')

    const response = fetch(
      new Request(new URL('metadata.json', base_url))
    )
      .then(response => response)
      .then(response => {
        if (response.ok === true)
          return response.json()
        else
          throw new Error();
      })
      .then(obj => this.init_metadata(obj, base_url))
      .catch(err => {})

    let script = DOM.new('script', {
      'src': new URL('_static/extra.umd.js', base_url)
    });
    this.$.head.append(script)
    let style = DOM.new('link', {
      'rel': 'stylesheet',
      'type': 'text/css',
      'href': new URL('_static/extra.min.css', base_url)
    });
    this.$.head.append(style)

    this.base_url = base_url
  }
  /**
   * Append callbacks to call after metadata.json is loaded.
   */
  then (callback) {
    if (this.parent.state.metadata)
      callback()
    else
      this.callback.push(callback)
  }
  /**
   * Attach metadata to this and call to inject extra modules.
   */
  init_metadata (obj, url) {
    this.parent.state.metadata = obj
    this.callback.forEach(cb => cb())

    if ('modules' in obj)
      this.load_modules(obj['modules'], url)
  }
  /**
   * Inject any JavaScript and CSS StyleSheet listed on the metadata.
   * The advantage is to load the latest and greatest scripts, regardless
   * of the tools' built doc version.
   */
  load_modules (obj, url) {
    if (!(url instanceof URL)) {
      console.warn("Expected URL, got ", url)
      return
    }
    if (!url.pathname.endsWith('/'))
      url.pathname += '/'
    url = new URL('_static', url)

    if ('javascript' in obj) {
      obj['javascript'].forEach((elem) => {
        if (elem === 'extra.umd.js')
          return
        let script = DOM.new('script', {
          'src': new URL(elem, url)
        });
        this.$.head.append(script)
      })
    }
    if ('stylesheet' in obj) {
      obj['stylesheet'].forEach((elem) => {
        if (elem === 'extra.min.css')
          return
        let style = DOM.new('link', {
          'rel': 'stylesheet',
          'type': 'text/css',
          'href': new URL(elem, url)
        });
        this.$.head.append(style)
      })
    }
  }
}
