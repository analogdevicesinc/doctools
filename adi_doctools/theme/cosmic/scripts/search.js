"use strict";

import {DOM} from './dom.js'

export class UnifiedSearch {
  constructor (app) {
    this.parent = app

    this.ready = false

    let $ = this.$ = {}
    $.body = new DOM(DOM.get('body'))

    this.init()

    app.search = this
  }
  /**
   * Init search.
   */
  init () {
    // pointers:
    // _static/searchtools.js loadIndex  (not used)
    // searchindex.js calls UnifiedSearch.setIndex
    // TODO test loadIndex(url) with multiple url (extend UnifiedSearch._index instead ?)
    // UnifiedSearch.query does the search, with _performSearch as low level
    let searchtools_script = new URL(`${this.parent.state.content_root}_static/searchtools.js`,
                                     location)
    let language_data_script = new URL(`${this.parent.state.content_root}_static/language_data.js`,
                                       location)
    console.log(searchtools_script)
    this.$.searchtools = new DOM('script', {
      src: searchtools_script.href,
      async: true
    })
    this.$.language_data = new DOM('script', {
      src: language_data_script.href,
      async: true
    })
    this.$.searchtools.$.onload = () => {
      let search0 = new URL(`${this.parent.state.content_root}searchindex.js`,
                            location)
      Search.loadIndex(search0.href)
      this.ready = true

      Search.query = (query) => {
        const [searchQuery, searchTerms, excludedTerms, highlightTerms, objectTerms] = Search._parseQuery(query);
        const results = Search._performSearch(searchQuery, searchTerms, excludedTerms, highlightTerms, objectTerms);

        // for debugging
        //Search.lastresults = results.slice();  // a copy
        // console.info("search results:", Search.lastresults);

        // print the results
        console.log(results, results.length, searchTerms, highlightTerms);
      }
    }
    this.$.body.append([this.$.searchtools, this.$.language_data])

    console.log("hello from search")
  }
}
