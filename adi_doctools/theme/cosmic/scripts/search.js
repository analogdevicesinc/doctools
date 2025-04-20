"use strict";

import {DOM} from './dom.js'

export class UnifiedSearch {
  constructor (app) {
    this.parent = app

    this.ready = false

    let $ = this.$ = {}
    $.body = new DOM(DOM.get('body'))

    this.init()

    this.indexes

    app.search = this
  }
  /**
   * Init search.
   */
  init () {
    // pointers:
    // _static/searchtools.js loadIndex  (not used)
    // searchindex.js calls Search.setIndex
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
    this.$.script_index = {}
    this.$.searchtools.$.onload = () => {
      let search0 = new URL(`${this.parent.state.content_root}searchindex.js`,
                            location)
      let search1 = new URL(`https://analogdevicesinc.github.io/hdl/searchindex.js`)
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

      Search.loadIndex = (url, tag) => {
        this.$.script_index[tag] = new DOM('script', {
          src: url,
          tag: tag,
          async: true
        })
        this.$.script_index[tag].$.onload = (e) => {

          console.log(e.target, e.target.dataset.tag)

        }
        this.$.body.append([this.$.script_index[tag]])
      }

      Search.setIndex = function (index, e) {
        console.log(index, this)
        //this.indexes.append = index;
        //if (Search._queued_query !== null) {
        //  const query = Search._queued_query;
        //  Search._queued_query = null;
        //  Search.query(query);
        //}
      }
      
      Search.loadIndex(search0.href, "doctools")
      Search.loadIndex(search1.href, "hdl")
    }
    this.$.body.append([this.$.searchtools, this.$.language_data])

    console.log("hello from search")
  }
}
