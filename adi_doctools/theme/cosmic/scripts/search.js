"use strict";

import {DOM} from './dom.js'

export class Search {
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
    // searchindex.js calls Search.setIndex
    // TODO test loadIndex(url) with multiple url (extend Search._index instead ?)
    // Search.query does the search, with _performSearch as low level
    this.$.fuzzysort = new DOM('script', {
      src:'https://cdn.jsdelivr.net/npm/fuzzysort@3.1.0/fuzzysort.min.js',
      async: true
    })
    this.$.fuzzysort.$.onload = () => {
      console.log("hi", fuzzysort)
      const mystuff = [{file: 'Apple.cpp', bana:"hello"}, {file: 'Banana.cpp'}]
      const results = fuzzysort.go('a', mystuff, {key: 'file'})
      console.log(results, this)

      this.ready = true
    }
    this.$.body.append([this.$.fuzzysort])

    console.log("hello from search")
  }
}
