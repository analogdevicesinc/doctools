"use strict";

import {Versioned} from './versioned.js'
import {Toolbox} from './toolbox.js'
import {DOM} from './dom.js'

/**
 * Simple result scoring code.
 */
if (typeof Scorer === "undefined") {
  var Scorer = {
    // Implement the following function to further tweak the score for each result
    // The function takes a result array [docname, title, anchor, descr, score, filename]
    // and returns the new score.
    /*
    score: result => {
      const [docname, title, anchor, descr, score, filename, kind] = result
      return score
    },
    */

    // query matches the full name of an object
    objNameMatch: 11,
    // or matches in the last dotted part of the object name
    objPartialMatch: 6,
    // Additive scores depending on the priority of the object
    objPrio: {
      0: 15, // used to be importantResults
      1: 5, // used to be objectResults
      2: -5, // used to be unimportantResults
    },
    //  Used when the priority is not in the mapping.
    objPrioDefault: 0,

    // query found in title
    title: 15,
    partialTitle: 7,
    // query found in terms
    term: 5,
    partialTerm: 2,
  };
}

/**
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
 */
const _escapeRegExp = (string) =>
  string.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string

/**
 * A fork of Sphinx search tools with multi doc support.
 */
export class Search {
  constructor (app) {
    this.parent = app

    this.index = {}
    this.index_state = {}
    this.key_prefix = {}
    this.versions_available = {}
    this.search_page = new URL(`${this.parent.state.content_root}search.html`, location).pathname

    let $ = this.$ = {}
    $.keyCheckbox = {}
    $.keyVersion = {}
    $.searchUL = {}
    $.searchLI = {}
    $.body = new DOM(DOM.get('body'))

    $.searchAreaBg = new DOM(DOM.get('.search-area-bg')) /* polyfill < v0.4.8 */
    if ($.searchAreaBg.$ === null) {
      $.searchAreaBg = new DOM('div', {
        className:'search-area-bg'
      })
      $.body.append([$.searchAreaBg])
    }
    $.searchAreaBg.onclick(this, this.cancel_search)

    $.searchArea = new DOM(DOM.get('.search-area'))
    $.searchForm = new DOM(DOM.get('form', $.searchArea))
    if (this.parent.state.offline) {
      $.searchForm.$.action = this.search_page
      $.searchForm.$.method = "get"
    } else
      $.searchForm.onevent("submit", this, (e) => {e.preventDefault()})
    $.searchFormButton = new DOM(DOM.get('button', $.searchForm))
      .onclick(this, this.cancel_search)
    $.searchInput = new DOM(DOM.get('input', $.searchForm))
    $.searchTags = new DOM('span', {
      className: 'search-filter',
      tabIndex: '-1',
    }).append([
      new DOM('div', {
        className: 'title',
        innerText: "Search on",
      }).append([
        new DOM('code', {
          className: "literal",
          innerText: "Ctrl +",
        }),
      ])
    ]);
    $.searchResults = new DOM('ul', {
      className: 'search-results',
      tabIndex: '-1',
    });
    $.searchContainer = new DOM('span', {
      className: 'search-container'
    }).onclick(this, (e) => {
      if (e.target === $.searchContainer.$)
        this.cancel_search()
    });

    if (!this.parent.state.offline)
      this.$.searchContainer.append(this.$.searchTags)
    this.$.searchContainer.append(this.$.searchResults)
    this.$.searchArea.append([this.$.searchContainer])
    $.searchForm.$['action'] = DOM.get('link[rel="search"]').href

    $.searchButton = new DOM(DOM.get('header button#search')) /* polyfill < v0.4.8 */
    if ($.searchButton.$ === null) {
	    $.searchButton = new DOM('button', {
        id:'search',
        className:'icon',
        title:'Search (/)'
      })
      this.parent.navigation.$.rightHeader.append([$.searchButton])
    }
    $.searchButton.onclick(this, () => {
      $.searchArea.classList.add('on')
      $.searchAreaBg.classList.add('on')
      $.searchInput.focus()
      $.searchInput.$.select()
      this.$.body.classList.add('overflow-hidden')
      this.set_default()
    })

    if (this.parent.state.offline)
      this.construct_offline()
    else if (typeof this.parent.fetch === 'object')
      this.parent.fetch.then(this.construct.bind(this))
    else
      this.construct()

    app.search = this
  }
  /**
   * Default split_query function. Can be overridden in ``sphinx.search`` with a
   * custom function per language (TODO look for split_query and allow injection).
   *
   * The regular expression works by splitting the string on consecutive characters
   * that are not Unicode letters, numbers, underscores, or emoji characters.
   * This is the same as ``\W+`` in Python, preserving the surrogate pair area.
   */
  split_query (query) {
     return query
        .split(/[^\p{Letter}\p{Number}_\p{Emoji_Presentation}]+/gu)
        .filter(term => term)
  }
  cancel_search () {
    this.$.searchArea.classList.remove('on')
    this.$.searchAreaBg.classList.remove('on')
    this.$.body.classList.remove('overflow-hidden')
    let url = new URL(location)
    url.searchParams.delete('q')
    url.searchParams.delete('r')
    history.replaceState({}, null, url);
  }
  /*
   * Helper function used by query() to order search results.
   * Each input is an array of [docname, title, anchor, descr, score, filename, kind].
   * Order the results by score (in opposite order of appearance, since the
   * `_displayNextItem` function uses pop() to retrieve items) and then alphabetically.
   */
   _orderResultsByScoreThenName = (a, b) => {
    const leftScore = a[4];
    const rightScore = b[4];
    if (leftScore === rightScore) {
      // same score: sort alphabetically
      const leftTitle = a[1].toLowerCase();
      const rightTitle = b[1].toLowerCase();
      if (leftTitle === rightTitle) return 0;
      return leftTitle > rightTitle ? -1 : 1; // inverted is intentional
    }
    return leftScore > rightScore ? 1 : -1;
  };
  async get_searchindex(key, not_sub_hosted, version=null) {
    const prefix = not_sub_hosted && key === "local" ?
                   location.origin : `${this.parent.state.metadata.remote_doc}${key}`
    let guess_default = (arr) => {
      let path
      if (arr.includes(""))
        path = ""
      else if(arr.includes("main"))
        path = "main"
      else if (arr.some(item => item.includes("adi_meta")))
        path = `${arr.find(item => item.includes("adi_meta"))}`
      else
        path = `${arr.at(0)}/`
      return path
    }
    let process = (obj) => {
      let path = ""
      if (!('error' in obj)) {
        let mode = Versioned.assert(obj['obj'])
        if (mode === true)
          return prefix

        if (mode == "fine-grained")
          this.versions_available[key] = obj['obj']
        else
          this.versions_available[key] = Versioned.string_array_to_object(obj['obj'])

        if (mode == "fine-grained")
          obj['obj'] = Versioned.object_to_string_array(obj['obj'])
        let arr = obj['obj']

        if (key in this.versions_available) {
          if (version in this.versions_available[key]) {
            path = version
            this.$.keyVersion[key].innerText = this.versions_available[key][version][0]
          } else {
            path = guess_default(arr)
            this.index_state[key].version = null
            this.$.keyVersion[key].innerText = this.versions_available[key][path][0]
          }
        } else {
          path = guess_default(arr)
          this.index_state[key].version = null
          this.$.keyVersion[key].innerText = "-"
        }
      } else {
          this.index_state[key].version = null
          this.$.keyVersion[key].innerText = "-"
      }
      return path.length > 0 ? `${prefix}/${path}/` : `${prefix}/`
    }

    return await Toolbox.fetch_each(`${prefix}/tags.json`).then((obj) => {
      this.key_prefix[key] = process(obj)

      return `${this.key_prefix[key]}searchindex.js`
    })
  }
  check_toc (key, ev) {
    if (ev.target.checked) {
      if (this.index_state[key].requested === false) {
        let not_sub_hosted = this.parent.state.subhost === '' || this.parent.state.subhost === undefined
        const selected_version = this.index_state[key].version
        this.get_searchindex(key, not_sub_hosted, selected_version)
          .then((url) => {
            let search_ = new URL(url)
            this.load_index(search_.href, key)
            this.index_state[key].requested = true
            this.$.keyCheckbox[key].classList.add('requested')
            this.$.keyCheckbox[key].classList.remove('failed')
            this.renew_search()
          })
        return
      } else {
        this.query(this.$.searchInput.$.value)
      }
    } else {
      this.get_tags_and_update_url(this.$.searchInput.$.value)
    }
    this.renew_search()
  }
  renew_search () {
    let searchUL_ = []
    for (const [key, value] of Object.entries(this.index_state)) {
      if (this.$.keyCheckbox[key].$.checked === true && this.index_state[key].ready === true) {
        if (!(key in this.$.searchUL)) {
          this.$.searchUL[key] = new DOM('ul')
          this.$.searchLI[key] = new DOM('li').append([
            new DOM('div', {
              innerText: this.$.keyCheckbox[key].$.name
            }),
            this.$.searchUL[key]
          ])
          searchUL_.push(this.$.searchLI[key])
        }
        this.$.searchLI[key].classList.add('on')
      } else {
        if (key in this.$.searchUL)
          this.$.searchLI[key].classList.remove('on')
      }
    }
    searchUL_.forEach((item) => {
      this.$.searchResults.$.insertAdjacentElement('afterbegin', item.$)
    })
  }
  set_default () {
    /* Return if filter initialized */
    for (const [key, value] of Object.entries(this.$.keyCheckbox)) {
      if (value.$.checked)
        return
    }
    /**
     * When writing the docs, it is a better user experience to be able to search
     * the local built docs.
     */
    let key = this.parent.state.subhost === '' || this.parent.state.subhost === undefined || this.parent.state.standalone ?
              'local' : this.parent.state.repository
    if (this.parent.state.version !== undefined)
        this.index_state[key].version = this.parent.state.path
    let event = new Event('change');
    if (!(key in this.$.keyCheckbox))
      return
    this.$.keyCheckbox[key].$.checked = true
    this.$.keyCheckbox[key].$.dispatchEvent(event)
  }
  /* Search shortcut */
  search_shortcut (e) {
    if (((e.code === 'IntlRo' || e.code === 'Slash') ||
         (e.code === 'KeyK' && (e.ctrlKey || e.altKey)))
        && !this.$.searchArea.classList.contains('on')) {
      this.$.searchArea.classList.add('on')
      this.$.searchAreaBg.classList.add('on')
      this.$.body.classList.add('overflow-hidden')
      this.$.searchInput.focus()
      this.$.searchInput.$.select()
      this.set_default()
    } else if (e.code === 'Escape') {
      if (this.$.searchArea.classList.contains('on')) {
        this.cancel_search()
      }
    }
  }
  /**
   * Load index of search sources.
   */
  load_index = (url, key) => {
    let onfailure = (error) => {
      console.warn(error)
      this.index_state[key].requested = false
      this.$.keyCheckbox[key].classList.remove('requested')
      this.$.keyCheckbox[key].classList.add('failed')
      this.$.keyCheckbox[key].$.checked = false
    }
    const request = new Request(url)
    fetch (request)
      .then((response) => response.text())
      .then((text) => {
        try {
          if (text.substring(0, 16) != "Search.setIndex(" || text.substring(text.length-1) != ")")
            throw new Error(`Search index of key '${key}' is impropetly formatted`)
          this.index[key] = JSON.parse(text.substring(16, text.length-1))
          this.index_state[key].ready = true
          this.$.keyCheckbox[key].classList.remove('requested')
          this.$.keyCheckbox[key].classList.add('ready')
          this.query(this.$.searchInput.$.value)
        } catch (error) {
          onfailure(error)
        }
      })
      .catch(onfailure)
  }
  /**
   * search for object names
   */
  perform_object_search (object, objectTerms, searchOn) {
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

      const descr = objName + ", in " + title;

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
        "object",
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
  perform_terms_search (searchTerms, excludedTerms, searchOn) {
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
        "text",
      ]);
    }
    return results;
  }
  /**
   * Execute search (requires search index to be loaded)
   */
  perform_search (query, searchTerms, excludedTerms, highlightTerms, objectTerms, searchOn) {
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
            "title",
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
            "index",
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
      normalResults.push(...this.perform_object_search(term, objectTerms, searchOn))
    );

    // lookup as search terms in fulltext
    normalResults.push(...this.perform_terms_search(searchTerms, excludedTerms, searchOn))

    // let the scorer override scores with a custom scoring function
    if (Scorer.score) {
      normalResults.forEach((item) => (item[4] = Scorer.score(item)))
      nonMainIndexResults.forEach((item) => (item[4] = Scorer.score(item)))
    }

    // Sort each group of results by score and then alphabetically by name.
    normalResults.sort(this._orderResultsByScoreThenName)
    nonMainIndexResults.sort(this._orderResultsByScoreThenName)

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
  get_tags_and_update_url (query) {
    const enabledTags = []
    for (const [key, value] of Object.entries(this.index_state)) {
      if (this.$.keyCheckbox[key].$.checked === true && this.index[key] !== undefined) {
        if (value['version'] === null)
          enabledTags.push(key)
        else
          enabledTags.push(`${key}@${value['version']}`)
      }
    }

    let url = new URL(location)
    if (query.length > 0) {
      url.searchParams.set('q', query)
      url.searchParams.set('r', enabledTags)
    } else {
      url.searchParams.delete('q')
      url.searchParams.delete('r')
    }
    history.replaceState({}, null, url);
    return enabledTags
  }
  html_to_text (text, anchor) {
    const htmlElement = new DOMParser().parseFromString(text, 'text/html');
    for (const removalQuery of [".headerlink", "script", "style"]) {
      htmlElement.querySelectorAll(removalQuery).forEach((el) => { el.remove() });
    }
    if (anchor) {
      const anchorContent = htmlElement.querySelector(`[role="main"] ${anchor}`);
      if (anchorContent)
        return anchorContent.textContent;

      console.warn(`Anchored content block '[role=main] ${anchor}' not found.`);
    }

    // if anchor not specified or not found, fall back to main content
    const docContent = htmlElement.querySelector('[role="main"]');
    if (docContent)
      return docContent.textContent;

    console.warn(`Anchored content block '[role=main] ${anchor}' not found.`);
    return "";
  }
  get_summary (data, keywords, anchor, p_) {
    const text = this.html_to_text(data, anchor);
    if (text === "")
      return

    const textLower = text.toLowerCase();
    const actualStartPosition = [...keywords]
      .map((k) => textLower.indexOf(k.toLowerCase()))
      .filter((i) => i > -1)
      .slice(-1)[0]
    const startWithContext = Math.max(actualStartPosition - 120, 0)

    const top = startWithContext === 0 ? "" : "..."
    const tail = startWithContext + 240 < text.length ? "..." : ""

    p_.$.textContent = top + text.substr(startWithContext, 240).trim() + tail
    p_.$.classList.remove('loading')
  }
  query (query) {
    /* language data not loaded yet */
    if (typeof Stemmer === "undefined")
      return

    const [searchQuery, searchTerms, excludedTerms, highlightTerms, objectTerms] = this.parse_query(query)
    this.renew_search()
    let enabledTags = this.get_tags_and_update_url(query)
    enabledTags.forEach((key) => {
      key = key.split('@')
      const results = this.perform_search(searchQuery, searchTerms, excludedTerms, highlightTerms, objectTerms, key[0])
      while (this.$.searchUL[key[0]].$.firstElementChild) {
        this.$.searchUL[key[0]].$.removeChild(this.$.searchUL[key[0]].$.lastChild)
      }

      let searchResults_ = []
      results.reverse()
      results.forEach((item) => {
        const [docName, title, anchor, descr, score, _filename, kind] = item;
        let href_ = `${this.key_prefix[key[0]]}${docName}.html${anchor}`
        let li_ = new DOM('li').append(
          new DOM('a', {
            href: href_,
            innerText: title,
          })
          //highlightTerms.forEach((term) => _highlightText(listItem, term, "highlighted"))
        )
        if (descr) {
          li_.append(
            new DOM('span', {
              innerText: `(${descr})`
            }
          ))
        } else {
          let p_ = new DOM('p', {
            className: 'context',
          })
          // Make cached snappier
          // To fully remove flickering it would be required to reuse the previous search DOMs.
          const loading_ = setTimeout(() => {
            p_.classList.add('loading')
          }, 50)
          li_.append(p_)
          fetch(href_)
            .then((response) => response.text())
            .then((data) => {
              if (data)
                this.get_summary(data, searchTerms, anchor, p_)
                //highlightTerms.forEach((term) => _highlightText(listItem, term, "highlighted"))
            })
            .finally(() => {
              clearTimeout(loading_)
            })
        }
        searchResults_.push(li_)
      })
      this.$.searchUL[key[0]].append(searchResults_)
      if (results.length === 0)
        this.$.searchLI[key[0]].classList.add('empty')
      else
        this.$.searchLI[key[0]].classList.remove('empty')
    })

  }
  parse_query (query) {
    // stem the search terms and add them to the correct list
    const stemmer = new Stemmer();
    const searchTerms = new Set();
    const excludedTerms = new Set();
    const highlightTerms = new Set();
    const objectTerms = new Set(this.split_query(query.toLowerCase().trim()));
    this.split_query(query.trim()).forEach((queryTerm) => {
      const queryTermLower = queryTerm.toLowerCase();

      // polyfill: starting from sphinx#13575, it is a Set
      if (stopwords instanceof Set) {
        // stopwords set is from language_data.js
        if (stopwords.has(queryTermLower) || queryTerm.match(/^\d+$/))
          return;
      } else {
        // stopwords array is from language_data.js
        if (
         stopwords.indexOf(queryTermLower) !== -1 ||
         queryTerm.match(/^\d+$/)
        )
          return;
      }

      // stem the word
      let word = stemmer.stemWord(queryTermLower);
      // select the correct list
      if (word[0] === "-") excludedTerms.add(word.substr(1));
      else {
        searchTerms.add(word);
        highlightTerms.add(queryTermLower);
      }
    });

    localStorage.setItem("sphinx_highlight_terms", [...highlightTerms].join(" "))

    return [query, searchTerms, excludedTerms, highlightTerms, objectTerms];
  }
  select_filter_tags (e) {
    if (!this.$.searchArea.classList.contains('on') ||
        !this.$.searchTags.classList.contains('on'))
      return
    Object.values(this.$.keyCheckbox).forEach(checkbox => {
      if (checkbox.$.dataset['shortcut'] == e.key) {
        e.preventDefault()
        let event = new Event('change');
        checkbox.$.checked = !checkbox.$.checked
        checkbox.$.dispatchEvent(event)
      }
    })
  }
  keyup (e) {
    switch (e.code) {
      case 'IntlRo':
      case 'Slash':
      case 'Escape':
      case 'KeyK':
        this.search_shortcut(e)
        break
      case 'ControlLeft':
      case 'ControlRight':
        this.$.searchTags.classList.remove('on')
        break
    }
  }
  keydown (e) {
    switch (e.code) {
      case 'IntlRo':
      case 'Slash':
        e.preventDefault()
        break
      case 'KeyK':
        if (e.ctrlKey && e.altKey)
          e.preventDefault()
        break
      case 'ControlLeft':
      case 'ControlRight':
        this.$.searchTags.classList.add('on')
        break
    }
    this.select_filter_tags(e)
  }
  focus (e) {
    // Resolve keyDown not captured due to browser Ctrl shortcut
    if (this.$.searchTags.classList.contains('on'))
        this.$.searchTags.classList.remove('on')
  }
  include_item (key, name, shortcut) {
    this.index_state[key] = {
      ready: false,
      requested: false
    }

    let input_ = new DOM('input', {
      id: `tag-${key}`,
      type: 'checkbox',
      name: name,
      shortcut: shortcut,
    }).onchange(this, this.check_toc, [key])

    let version_button = new DOM('button', {
      className: 'version-filter',
      title: 'Select version to search',
      innerText: '...'
    })
    version_button.onclick(this, (key, e) => {
      this.show_version_dropdown(key, version_button)
    }, [key])

    this.$.searchTags.append([
      new DOM('span', {
        className: 'search-entry'
      }).append([
        input_,
        new DOM('label', {
          htmlFor: `tag-${key}`,
        }).append([
          new DOM('span', {
            innerText: shortcut,
            className: 'checkbox',
          }),
          new DOM('span', {
            innerText: name,
          }),
        ]),
        version_button
      ])
    ])
    this.$.keyVersion[key] = version_button
    this.$.keyCheckbox[key] = input_
  }
  get_class_labels (text) {
    if (text === '')
      return ''
    let labels = 'label'
    if (text === 'pull request')
      labels += ' pull_request'
    else if (text === 'unstable')
      labels += ' unstable'
    return labels
  }
  /**
   * Show version dropdown for a specific search entry
   */
  show_version_dropdown(key, version_button, ev) {
    let obj = this.versions_available[key]
    if (!obj) {
      console.warn(`No versions available for key: ${key}`)
      obj = {}
    }

    this.clean_versions_dropdown()

    let i = Object.keys(obj).length > 10 ? 4 : 2
    let cols = " auto".repeat(i)
    this.$.list.style = `grid-template-columns:${cols}`
    if (Object.keys(obj).length <= 1)
      this.$.list.classList.add('no-other')
    else
      this.$.list.classList.remove('no-other')

    for (let version in obj) {
      let entry = DOM.new('button', {
        'version': version
      })
      entry.addEventListener('mousedown', (ev) => {
        ev.preventDefault()
      })
      entry.addEventListener('mouseup', (ev) => {
        if (ev.which !== 1 && ev.which !== 2)
          return

        ev.preventDefault()
        this.select_version(key, version)
      })
      let entry_ = DOM.new('div')
      let label_ = DOM.new('div')
      entry_.innerText = obj[version][0]
      let label = DOM.new('span', {
        'className': this.get_class_labels(obj[version][1])
      })
      label.innerText = obj[version][1]
      label_.append(label)
      entry.append(entry_)
      entry.append(label_)
      this.$.list.append(entry)
    }

    this.show(version_button.$, true)
  }
  /**
   * Deinit version in dropdowns
   */
  clean_versions_dropdown() {
    while (this.$.list.firstElementChild) {
      this.$.list.removeChild(this.$.list.lastChild)
    }
  }
  /**
   * Select a version for a specific search entry
   */
  async select_version(key, version) {
    this.index_state[key].version = version

    const version_label = version === "" ? "main" : this.versions_available[key][version][0]

    if (this.$.keyCheckbox[key].$.checked && this.index_state[key].ready) {
      this.index_state[key].ready = false
      this.index_state[key].requested = false
      this.$.keyCheckbox[key].classList.remove('ready')
      this.$.keyCheckbox[key].classList.add('requested')

      let not_sub_hosted = this.parent.state.subhost === '' || this.parent.state.subhost === undefined
      this.get_searchindex(key, not_sub_hosted, version)
        .then((url) => {
          let search_ = new URL(url)
          this.load_index(search_.href, key)
          this.index_state[key].requested = true
          this.$.keyCheckbox[key].classList.remove('failed')
          this.renew_search()
        })
        .catch((error) => {
          console.warn(`Failed to load search index for ${key} version ${version}:`, error)
          this.index_state[key].requested = false
          this.$.keyCheckbox[key].classList.remove('requested')
          this.$.keyCheckbox[key].classList.add('failed')
        })
    }

    this.show(undefined, false)
  }
  show (dom, show) {
    if (!show) {
      this.$.cancel.classList.remove('on')
      this.$.list.classList.remove('on')
      return
    }

    let rect = dom.getBoundingClientRect()
    let wiw = window.innerWidth
    let wih = window.innerHeight
    if ((wih - rect.bottom) < rect.top) {
      this.$.list.style.removeProperty('top')
      this.$.list.style.bottom = `${wih - rect.bottom + 1.5*16}px`
    } else {
      this.$.list.style.removeProperty('bottom')
      this.$.list.style.top = `${rect.top + 1.5*16}px`
    }
    if ((wiw - rect.right) < rect.left) {
      this.$.list.style.removeProperty('left')
      this.$.list.style.right = `${wiw - rect.right}px`
    } else {
      this.$.list.style.left = `${rect.left}px`
      this.$.list.style.removeProperty('right')
    }
    this.$.cancel.classList.add('on')
    this.$.list.classList.add('on')
  }
  /**
   * Create Tag/Version dropdown to be re-used.
   */
  render () {
    let body = DOM.get('body')

    let container2 = DOM.new('div', {
      'className': 'version-dropdown-list',
    })

    let cancel_dropdown = DOM.new('dev', {
      'id': 'cancel-area-show-version-dropdown'
    })
    body.append(cancel_dropdown)
    body.append(container2)

    addEventListener("resize", (ev) => { this.show(undefined, false) })
    cancel_dropdown.onclick = (ev) => {this.show(undefined, false) }

    this.$.list = container2
    this.$.cancel = cancel_dropdown
  }
  /**
   * Construct offline search.
   */
  construct_offline () {
    window.SPHINX_HIGHLIGHT_ENABLED = false
    window.DOCUMENTATION_OPTIONS = {}
    window.DOCUMENTATION_OPTIONS.FILE_SUFFIX=".html"
    window.DOCUMENTATION_OPTIONS.LINK_SUFFIX=".html"
    document.querySelector('.documentwrapper .body')?.append(DOM.new("div", {'id': 'search-results'}))
    if (this.search_page === location.pathname) {
      ['doctools.js', 'language_data.js', 'searchtools.js', 'english-stemmer.js']
        .forEach((item) => {
        const script = document.createElement("script");
        script.src = new URL(`${this.parent.state.content_root}_static/${item}`, location)
        document.querySelector('head')?.append(script)
      })
      const script = document.createElement("script");
      script.src = new URL(`${this.parent.state.content_root}searchindex.js`, location)
      document.querySelector('head')?.append(script)
    }
  }
  /**
   * Construct search.
   */
  construct () {
    let alphanumeric = Toolbox.get_alphanumeric()
    // Remove common text-manipulation shortcuts
    const drop_ = ['a', 'c', 'f']
    drop_.forEach(letter => {
	alphanumeric.splice(alphanumeric.indexOf(letter), 1);
    })
    let language_data_script = new URL(`${this.parent.state.content_root}_static/language_data.js`,
                                       location)
    this.$.language_data = new DOM('script', {
      src: language_data_script.href,
      async: true
    }).onevent("load", this, (e) => {
      this.$.searchForm.$.action = ""
    })
    this.$.body.append([this.$.language_data])

    if (!this.parent.state.standalone)
      for (const [key, value] of Object.entries(this.parent.state.metadata.repotoc)) {
        this.include_item(key, value['name'], alphanumeric.shift())
      }
    let is_hosted_landing_page = this.parent.state.metadata.remote_doc === location.href
    let not_subhosted = (this.parent.state.subhost === '' || this.parent.state.subhost === undefined) && !is_hosted_landing_page

    if (not_subhosted || this.parent.state.standalone) {
      let name = this.parent.state.repository in this.parent.state.metadata.repotoc ?
                 this.parent.state.metadata.repotoc[this.parent.state.repository]['name'] :
                 this.parent.state.repository
      let label = this.parent.state.standalone ? '' : ' (local build)'
      this.include_item("local", `${name}${label}`, alphanumeric.shift())
    }

    this.$.searchInput.$.oninput = (e) => {this.query(e.target.value)}

    let url = new URL(location)
    let q = url.searchParams.get('q')
    let r = url.searchParams.get('r')
    if (q !== null) {
      if (r !== null) {
        r = r.split(',')
        r.forEach((key) => {
          key = key.split('@')
          let event = new Event('change');
          if (key[0] in this.$.keyCheckbox) {
            this.$.keyCheckbox[key[0]].$.checked = true
            if (key.length === 2)
              this.index_state[key[0]].version = key[1]
            else
              this.index_state[key[0]].version = null
            this.$.keyCheckbox[key[0]].$.dispatchEvent(event)
          }
        })
      }
      this.$.searchInput.$.value = q
      let event = new Event('click');
      this.$.searchButton.$.dispatchEvent(event)
    }

    document.addEventListener('keyup', (e) => {this.keyup(e)}, false);
    document.addEventListener('keydown', (e) => {this.keydown(e)}, false);
    document.addEventListener("focus", (e) => {this.focus(e)})

    this.render()
  }
}
