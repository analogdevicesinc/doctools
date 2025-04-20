"use strict";

import {DOM} from './dom.js'

/** 
 * A fork of Sphinx search tools with multi doc support.
 */
export class UnifiedSearch {
  constructor (app) {
    this.parent = app

    this.index = {}
    this.index_state = {}

    let $ = this.$ = {}
    $.body = new DOM(DOM.get('body'))

    $.searchAreaBg = new DOM('div', {
      className:'search-area-bg'
    }).onclick(this, () => {
      DOM.switchState($.searchArea)
      DOM.switchState($.searchAreaBg)
    })
    $.searchArea = new DOM(DOM.get('.search-area'))
    $.searchAreaContainer = new DOM(DOM.get('.search-area > div'))
    $.searchForm = new DOM(DOM.get('form', $.searchAreaContainer))
    $.searchInput = new DOM(DOM.get('input', $.searchForm))
    $.searchTags = new DOM('span', {
      className: 'search-filter'
    });

    $.searchForm.$['action'] = DOM.get('link[rel="search"]').href
    $.body.append([$.searchAreaBg])

	  $.searchButton = new DOM('button', {
      id:'search',
      className:'icon',
      title:'Search (/)'
    }).onclick(this, () => {
      DOM.switchState($.searchArea)
      DOM.switchState($.searchAreaBg)
      $.searchInput.focus()
      $.searchInput.$.select()
    })

    this.parent.navigation.$.rightHeader.append([$.searchButton])

    this.init()

    app.search = this
  }
  checkToc (key, ev) {
    if (ev.target.checked) {
      if (this.index_state[key].requested === false) {
        let search_ = new URL(`${this.parent.state.metadata.remote_doc}${key}/searchindex.js`)
        this.loadIndex(search_.href, key)
        this.index_state[key].requested = true
      }
    }
    this.index_state[key].checked = ev.target.checked
    this.query(this.$.searchInput.$.value)
  }
  /* Search shortcut */
  search (e) {
    if ((e.code === 'IntlRo' || e.code === 'Slash')
        && !this.$.searchArea.classList.contains('on')) {
      DOM.switchState(this.$.searchArea)
      DOM.switchState(this.$.searchAreaBg)
      this.$.searchInput.focus()
      this.$.searchInput.$.select()
    } else if (e.code === 'Escape') {
      if (this.$.searchArea.classList.contains('on')) {
        DOM.switchState(this.$.searchArea)
        DOM.switchState(this.$.searchAreaBg)
      }
    }
  }
  /**
   * Load index of search sources.
   */
  loadIndex = (url, tag) => {
    const request = new Request(url)
    fetch (request)
      .then((response) => response.text())
      .then((text) => {
        try {
          if (text.substring(0, 16) != "Search.setIndex(" || text.substring(text.length-1) != ")")
            throw new Error(`Search index of tag '${tag}' is impropetly formatted`)
          this.index[tag] = JSON.parse(text.substring(16, text.length-1))
          this.index_state[tag].ready = true
          console.log(this.index[tag], url)
        } catch (error) {
          console.warn(error)
        } 
      })
  }
  /**
   * search for object names
   */
  performObjectSearch (object, objectTerms, searchOn) {
    const filenames = this.index[searchOn].filenames;
    const docNames = this.index[searchOn].docnames;
    const objects = this.index[searchOn].objects;
    const objNames = this.index[searchOn].objnames;
    const titles = this.index[searchOn].titles;

    const results = [];

    const objectSearchCallback = (prefix, match) => {
      const name = match[4]
      const fullname = (prefix ? prefix + "." : "") + name;
      const fullnameLower = fullname.toLowerCase();
      if (fullnameLower.indexOf(object) < 0) return;

      let score = 0;
      const parts = fullnameLower.split(".");

      // check for different match types: exact matches of full name or
      // "last name" (i.e. last dotted part)
      if (fullnameLower === object || parts.slice(-1)[0] === object)
        score += Scorer.objNameMatch;
      else if (parts.slice(-1)[0].indexOf(object) > -1)
        score += Scorer.objPartialMatch; // matches in last name

      const objName = objNames[match[1]][2];
      const title = titles[match[0]];

      // If more than one term searched for, we require other words to be
      // found in the name/title/description
      const otherTerms = new Set(objectTerms);
      otherTerms.delete(object);
      if (otherTerms.size > 0) {
        const haystack = `${prefix} ${name} ${objName} ${title}`.toLowerCase();
        if (
          [...otherTerms].some((otherTerm) => haystack.indexOf(otherTerm) < 0)
        )
          return;
      }

      let anchor = match[3];
      if (anchor === "") anchor = fullname;
      else if (anchor === "-") anchor = objNames[match[1]][1] + "-" + fullname;

      const descr = objName + _(", in ") + title;

      // add custom score for some objects according to scorer
      if (Scorer.objPrio.hasOwnProperty(match[2]))
        score += Scorer.objPrio[match[2]];
      else score += Scorer.objPrioDefault;

      results.push([
        docNames[match[0]],
        fullname,
        "#" + anchor,
        descr,
        score,
        filenames[match[0]],
        SearchResultKind.object,
      ]);
    };
    Object.keys(objects).forEach((prefix) =>
      objects[prefix].forEach((array) =>
        objectSearchCallback(prefix, array)
      )
    );
    return results;
  }
  /**
   * search for full-text terms in the index
   */
  performTermsSearch (searchTerms, excludedTerms, searchOn) {
    // prepare search
    const terms = this.index[searchOn].terms;
    const titleTerms = this.index[searchOn].titleterms;
    const filenames = this.index[searchOn].filenames;
    const docNames = this.index[searchOn].docnames;
    const titles = this.index[searchOn].titles;

    // Collect multiple result groups to be sorted separately and then ordered.
    // Each is an array of [docname, title, anchor, descr, score, filename, kind].
    const normalResults = []
    const nonMainIndexResults = []

    const scoreMap = new Map();
    const fileMap = new Map();

    // perform the search on the required terms
    searchTerms.forEach((word) => {
      const files = [];
      // find documents, if any, containing the query word in their text/title term indices
      // use Object.hasOwnProperty to avoid mismatching against prototype properties
      const arr = [
        { files: terms.hasOwnProperty(word) ? terms[word] : undefined, score: Scorer.term },
        { files: titleTerms.hasOwnProperty(word) ? titleTerms[word] : undefined, score: Scorer.title },
      ];
      // add support for partial matches
      if (word.length > 2) {
        const escapedWord = _escapeRegExp(word);
        if (!terms.hasOwnProperty(word)) {
          Object.keys(terms).forEach((term) => {
            if (term.match(escapedWord))
              arr.push({ files: terms[term], score: Scorer.partialTerm });
          });
        }
        if (!titleTerms.hasOwnProperty(word)) {
          Object.keys(titleTerms).forEach((term) => {
            if (term.match(escapedWord))
              arr.push({ files: titleTerms[term], score: Scorer.partialTitle });
          });
        }
      }

      // no match but word was a required one
      if (arr.every((record) => record.files === undefined)) return;

      // found search word in contents
      arr.forEach((record) => {
        if (record.files === undefined) return;

        let recordFiles = record.files;
        if (recordFiles.length === undefined) recordFiles = [recordFiles];
        files.push(...recordFiles);

        // set score for the word in each file
        recordFiles.forEach((file) => {
          if (!scoreMap.has(file)) scoreMap.set(file, new Map());
          const fileScores = scoreMap.get(file);
          fileScores.set(word, record.score);
        });
      });

      // create the mapping
      files.forEach((file) => {
        if (!fileMap.has(file)) fileMap.set(file, [word]);
        else if (fileMap.get(file).indexOf(word) === -1) fileMap.get(file).push(word);
      });
    });

    // now check if the files don't contain excluded terms
    const results = [];
    for (const [file, wordList] of fileMap) {
      // check if all requirements are matched

      // as search terms with length < 3 are discarded
      const filteredTermCount = [...searchTerms].filter(
        (term) => term.length > 2
      ).length;
      if (
        wordList.length !== searchTerms.size &&
        wordList.length !== filteredTermCount
      )
        continue;

      // ensure that none of the excluded terms is in the search result
      if (
        [...excludedTerms].some(
          (term) =>
            terms[term] === file ||
            titleTerms[term] === file ||
            (terms[term] || []).includes(file) ||
            (titleTerms[term] || []).includes(file)
        )
      )
        break;

      // select one (max) score for the file.
      const score = Math.max(...wordList.map((w) => scoreMap.get(file).get(w)));
      // add result to the result list
      results.push([
        docNames[file],
        titles[file],
        "",
        null,
        score,
        filenames[file],
        SearchResultKind.text,
      ]);
    }
    return results;
  }
  /**
   * Execute search (requires search index to be loaded)
   */
  _performSearch (query, searchTerms, excludedTerms, highlightTerms, objectTerms, searchOn) {
    const filenames = this.index[searchOn].filenames
    const docNames = this.index[searchOn].docnames
    const titles = this.index[searchOn].titles
    const allTitles = this.index[searchOn].alltitles
    const indexEntries = this.index[searchOn].indexentries

    // Collect multiple result groups to be sorted separately and then ordered.
    // Each is an array of [docname, title, anchor, descr, score, filename, kind].
    const normalResults = []
    const nonMainIndexResults = []

    //_removeChildren(document.getElementById("search-progress"));

    const queryLower = query.toLowerCase().trim();
    for (const [title, foundTitles] of Object.entries(allTitles)) {
      if (title.toLowerCase().trim().includes(queryLower) && (queryLower.length >= title.length/2)) {
        for (const [file, id] of foundTitles) {
          const score = Math.round(Scorer.title * queryLower.length / title.length)
          const boost = titles[file] === title ? 1 : 0  // add a boost for document titles
          normalResults.push([
            docNames[file],
            titles[file] !== title ? `${titles[file]} > ${title}` : title,
            id !== null ? "#" + id : "",
            null,
            score + boost,
            filenames[file],
            SearchResultKind.title,
          ]);
        }
      }
    }

    // search for explicit entries in index directives
    for (const [entry, foundEntries] of Object.entries(indexEntries)) {
      if (entry.includes(queryLower) && (queryLower.length >= entry.length/2)) {
        for (const [file, id, isMain] of foundEntries) {
          const score = Math.round(100 * queryLower.length / entry.length)
          const result = [
            docNames[file],
            titles[file],
            id ? "#" + id : "",
            null,
            score,
            filenames[file],
            SearchResultKind.index,
          ];
          if (isMain) {
            normalResults.push(result);
          } else {
            nonMainIndexResults.push(result);
          }
        }
      }
    }

    // lookup as object
    objectTerms.forEach((term) =>
      normalResults.push(...this.performObjectSearch(term, objectTerms, searchOn))
    );

    // lookup as search terms in fulltext
    normalResults.push(...this.performTermsSearch(searchTerms, excludedTerms, searchOn))

    // let the scorer override scores with a custom scoring function
    if (Scorer.score) {
      normalResults.forEach((item) => (item[4] = Scorer.score(item)))
      nonMainIndexResults.forEach((item) => (item[4] = Scorer.score(item)))
    }

    // Sort each group of results by score and then alphabetically by name.
    normalResults.sort(_orderResultsByScoreThenName)
    nonMainIndexResults.sort(_orderResultsByScoreThenName)

    // Combine the result groups in (reverse) order.
    // Non-main index entries are typically arbitrary cross-references,
    // so display them after other results.
    let results = [...nonMainIndexResults, ...normalResults]

    // remove duplicate search results
    // note the reversing of results, so that in the case of duplicates, the highest-scoring entry is kept
    let seen = new Set();
    results = results.reverse().reduce((acc, result) => {
      let resultStr = result.slice(0, 4).concat([result[5]]).map(v => String(v)).join(',')
      if (!seen.has(resultStr)) {
        acc.push(result);
        seen.add(resultStr);
      }
      return acc;
    }, []);

    return results.reverse();
  }
  query (query) {
    const [searchQuery, searchTerms, excludedTerms, highlightTerms, objectTerms] = this._parseQuery(query)
    const enabledTags = []
    for (const [key, value] of Object.entries(this.index_state)) {
      if (value.checked === true && this.index[key] !== undefined)
        enabledTags.push(key)
    }
    enabledTags.forEach((searchOn) => {
      const results = this._performSearch(searchQuery, searchTerms, excludedTerms, highlightTerms, objectTerms, searchOn)
      console.log(results, results.length, searchTerms, highlightTerms)
    })
  }
  _parseQuery (query) {
    // stem the search terms and add them to the correct list
    const stemmer = new Stemmer();
    const searchTerms = new Set();
    const excludedTerms = new Set();
    const highlightTerms = new Set();
    const objectTerms = new Set(splitQuery(query.toLowerCase().trim()));
    splitQuery(query.trim()).forEach((queryTerm) => {
      const queryTermLower = queryTerm.toLowerCase();

      // maybe skip this "word"
      // stopwords array is from language_data.js
      if (
        stopwords.indexOf(queryTermLower) !== -1 ||
        queryTerm.match(/^\d+$/)
      )
        return;

      // stem the word
      let word = stemmer.stemWord(queryTermLower);
      // select the correct list
      if (word[0] === "-") excludedTerms.add(word.substr(1));
      else {
        searchTerms.add(word);
        highlightTerms.add(queryTermLower);
      }
    });

    if (SPHINX_HIGHLIGHT_ENABLED) {  // set in sphinx_highlight.js
      localStorage.setItem("sphinx_highlight_terms", [...highlightTerms].join(" "))
    }

    return [query, searchTerms, excludedTerms, highlightTerms, objectTerms];
  }
  /**
   * Init search.
   */
  init () {
    // pointers:
    // _static/searchtools.js loadIndex  (not used)
    // searchindex.js calls Search.setIndex
    // TODO test loadIndex(url) with multiple url (extend Unifiedthis.index[enabledTags[0]] instead ?)
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
    this.$.searchtools.$.onload = () => { /* nothing todo */ }
    this.$.body.append([this.$.searchtools, this.$.language_data])

    for (const [key, value] of Object.entries(this.parent.state.metadata.repotoc)) {
      this.index_state[key] = {
        ready: false,
        requested: false,
        checked: false
      }
      this.$.searchTags.append([
        new DOM('span').append([
          new DOM('input', {
            id: `tag-${key}`,
            type: 'checkbox'
          }).onchange(this, this.checkToc, [key]),
          new DOM('label', {
            htmlFor: `tag-${key}`,
            innerText: value['name']
          })
        ])
      ])
    }
    this.$.searchAreaContainer.append(this.$.searchTags)
    this.$.searchInput.$.oninput = (e) => {this.query(e.target.value)}
  }
}
