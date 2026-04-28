"use strict";

import {Versioned} from './versioned.js'
import {Toolbox} from './toolbox.js'
import {DOM} from './dom.js'

import * as LLM from './search-llm.js'
import * as Sphinx from './search-sphinx.js'

// Testing:
// - Populate: adoc doc2vector --docs path/to/$repo/gh-pages --version $version --output path/to/mock/$repo/$version --wasm /path/to/wasm
const INV_PREFIX = 'https://raw.githubusercontent.com/analogdevicesinc/doctools/refs/heads/vector/'

/**
 * Multi-backend search with LLM vector search (primary) and Sphinx keyword
 * search (fallback).
 *
 * When the embedding model or TurboQuant vectors are unavailable the system
 * automatically falls back to classic Sphinx search.  Both paths reuse the
 * passages.json file for result snippets and the grouped rendering UI.
 */
export class Search {
  constructor (app) {
    this.parent = app

    // Per-key index data
    //   backend === 'llm':    { tq, passages, compressedConcat, bytesPerVector, dim }
    //   backend === 'sphinx': { index (searchindex), passages (may be null) }
    this.indexData = {}
    this.indexBackend = {} // key → 'llm' | 'sphinx'
    this.index_state = {}
    this.key_prefix = {}
    this.versions_available = {}
    this.query_id = 0
    this._debounceTimer = null
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

  cancel_search () {
    this.$.searchArea.classList.remove('on')
    this.$.searchAreaBg.classList.remove('on')
    this.$.body.classList.remove('overflow-hidden')
    let url = new URL(location)
    url.searchParams.delete('q')
    url.searchParams.delete('r')
    history.replaceState({}, null, url)
  }

  /**
   * Resolve the remote doc URL and the inventory prefix for a key.
   * Returns [keyPrefix, invUrl, sphinxUrl]:
   *   keyPrefix  - base URL for building result links
   *   invUrl     - path to vector search assets (passages.json, .bin)
   *   sphinxUrl  - URL to the Sphinx searchindex.js
   */
  async get_searchindex (key, not_sub_hosted, version=null) {
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
      return [`${prefix}/`, path.length > 0 ? `${path}/` : ``]
    }

    return await Toolbox.fetch_each(`${prefix}/tags.json`).then((obj) => {
      const [base, path] = process(obj)
      this.key_prefix[key] = `${base}${path}`
      const invUrl = `${INV_PREFIX}${key}/${path}`
      const sphinxUrl = `${base}${path}searchindex.js`
      return { invUrl, sphinxUrl }
    })
  }

  check_toc (key, ev) {
    if (ev.target.checked) {
      if (this.index_state[key].requested === false) {
        let not_sub_hosted = this.parent.state.subhost === '' || this.parent.state.subhost === undefined
        const selected_version = this.index_state[key].version
        this.get_searchindex(key, not_sub_hosted, selected_version)
          .then((urls) => {
            this.load_index(urls, key)
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
      if (this.$.list.classList.contains('on'))
        this._show_version_dropdown(undefined, false)
      else if (this.$.searchArea.classList.contains('on')) {
        this.cancel_search()
      }
    }
  }

  /**
   * Load search index for a key.
   *
   * Tries the LLM vector backend first (passages.json + embeddings .bin).
   * On failure, falls back to Sphinx searchindex.js (+ passages.json for
   * richer snippets if available).
   */
  load_index = async ({invUrl, sphinxUrl}, key) => {
    const onfailure = (error) => {
      console.warn('load_index:', error)
      this.index_state[key].requested = false
      this.$.keyCheckbox[key].classList.remove('requested')
      this.$.keyCheckbox[key].classList.add('failed')
      this.$.keyCheckbox[key].$.checked = false
    }

    // Main: LLM search (.bin)
    const base_url = this.parent.fetch.base_url
    //const base_url = `${this.parent.state.metadata.remote_doc}doctools/`
    const data = await LLM.loadVectorIndex(invUrl, new URL('_static/', base_url))
    if (data) {
      this.indexData[key] = data
      this.indexBackend[key] = 'llm'
      this.index_state[key].ready = true
      this.$.keyCheckbox[key].classList.remove('requested')
      this.$.keyCheckbox[key].classList.add('ready')

      // Load Sphinx index in background for interim results while embedder downloads
      Sphinx.load_sphinx_index(sphinxUrl).then((index) => {
        if (index) {
          this.indexData[key].sphinxIndex = index
          // If embedder still loading and there's a pending query, show Sphinx results now
          if (!LLM.isEmbedderReady() && this.$.searchInput.$.value.trim())
            this.query(this.$.searchInput.$.value)
        }
      }).catch(() => {})

      LLM.initEmbedder((q) => this.query(q))

      this.query(this.$.searchInput.$.value)
      return
    }

    console.warn(`'${key}' does not contain llm .bin`)

    // Fallback: Sphinx (searchindex.js)
    let passages = null
    try {
      const resp = await fetch(new Request(`${invUrl}passages.json`))
      if (resp.ok) passages = await resp.json()
    } catch (_) { /* passages not available */ }

    const index = await Sphinx.load_sphinx_index(sphinxUrl)
    if (!index) {
      onfailure(new Error(`searchindex.js unavailable for '${key}'`))
      return
    }

    this.indexData[key] = { index, passages }
    this.indexBackend[key] = 'sphinx'
    this.index_state[key].ready = true
    this.$.keyCheckbox[key].classList.remove('requested')
    this.$.keyCheckbox[key].classList.add('ready')

    this.query(this.$.searchInput.$.value)
  }

  _entry_label (passage, slice) {
    const h = passage.hierarchy || []
    if (h.length <= 1) return h[0] || ''
    return h.slice(slice).join(' / ')
  }

  html_to_text (text, anchor) {
    const htmlElement = new DOMParser().parseFromString(text, 'text/html');
    for (const removalQuery of [".headerlink", "script", "style"])
      htmlElement.querySelectorAll(removalQuery).forEach((el) => { el.remove() });
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

    p_.textContent = top + text.substr(startWithContext, 240).trim() + tail
    p_.classList.remove('loading')
  }

  _fetch_snippet (url, searchTerms, spanEl) {
    const hashIdx = url.indexOf('#')
    const urlPage = hashIdx === -1 ? url : url.slice(0, hashIdx)
    const anchor = hashIdx === -1 ? '' : url.slice(hashIdx)
    const loading_ = setTimeout(() => { spanEl.classList.add('loading') }, 50)
    fetch(urlPage)
      .then((response) => response.text())
      .then((data) => { if (data) this.get_summary(data, searchTerms, anchor, spanEl) })
      .finally(() => { clearTimeout(loading_) })
  }

  _render_group (key, group, items, searchTerms = null) {
    const get_passage = Array.isArray(items)
      ? (idx) => items[idx]
      : (idx) => ({ text: items.text[idx], url: items.url[idx], hierarchy: items.hierarchy[idx] })

    let li = new DOM('li', { className: 'group' })

    const p = get_passage(group.entries[0].idx)
    let link = new DOM('a', {
      className: 'group-title',
      innerText: this._entry_label(p, 1),
      href: `${this.key_prefix[key]}${p.url}`
    })
    const span = new DOM('span', { innerText: p.text || '' })
    link.append(span)
    if (!p.text && searchTerms)
      this._fetch_snippet(`${this.key_prefix[key]}${p.url}`, searchTerms, span.$)
    li.append(link)

    for (const e of group.entries.slice(1, 6)) {
      const p = get_passage(e.idx)
      let link_ = new DOM('a', {
        className: 'entry',
        innerText: this._entry_label(p, 2),
        href: `${this.key_prefix[key]}${p.url}`
      })
      const span = new DOM('span', { innerText: p.text || '' })
      link_.append(span)
      if (!p.text && searchTerms)
        this._fetch_snippet(`${this.key_prefix[key]}${p.url}`, searchTerms, span.$)
      li.append(link_)
    }
    return li
  }

  _render_results (key, groups, items, searchTerms = null) {
    const ul = this.$.searchUL[key]
    while (ul.$.firstElementChild)
      ul.$.removeChild(ul.$.lastChild)

    if (groups.length === 0) {
      this.$.searchLI[key].classList.add('empty')
      return
    }
    this.$.searchLI[key].classList.remove('empty')

    const rendered = groups.map(group => {
      return this._render_group(key, group, items, searchTerms)
    })
    ul.append(rendered)
  }

  /**
   * Wait short pause before triggering search.
   */
  query_debounced (query, delay = 20) {
    clearTimeout(this._debounceTimer)
    this._debounceTimer = setTimeout(() => this.query(query), delay)
  }

  async query (query) {
    // Search id to cancel previous, not-yet-completed searches.
    const id = ++this.query_id

    this.get_tags_and_update_url(query)
    this.renew_search()

    if (!query.trim()) return

    const enabledKeys = Object.keys(this.index_state).filter(
      key => this.$.keyCheckbox[key]?.$.checked &&
             this.index_state[key].ready &&
             this.indexData[key]
    )
    if (enabledKeys.length === 0) return

    for (const key of enabledKeys) {
      if (id !== this.query_id) return

      const backend = this.indexBackend[key]

      if (backend === 'llm') {
        if (!LLM.isEmbedderReady()) {
          if (!LLM.isEmbedderLoading())
            LLM.initEmbedder((q) => this.query(q))
          LLM.setPendingQuery(query)

          // Use Sphinx results while embedder is downloading
          const sphinxIndex = this.indexData[key].sphinxIndex
          if (sphinxIndex && typeof Stemmer !== "undefined") {
            const [searchQuery, searchTerms, excludedTerms, highlightTerms, objectTerms] =
              Sphinx.parse_query(query)
            const results = Sphinx.perform_search(
              searchQuery, searchTerms, excludedTerms, highlightTerms, objectTerms, sphinxIndex
            )
            const passages = this.indexData[key].passages
            const { groups, items } = Sphinx.sphinx_results_to_groups(results, passages)
            this._render_results(key, groups, items, passages ? null : searchTerms)
          } else {
            const ul = this.$.searchUL[key]
            while (ul.$.firstElementChild) ul.$.removeChild(ul.$.lastChild)
            const li = new DOM('li')
            li.append(new DOM('span', { className: 'loading' }))
            ul.append([li])
          }
          continue
        }

        try {
          const data = this.indexData[key]
          const queryVec = await LLM.embedQuery(query)
          if (id !== this.query_id) return
          const { pool, scores } = LLM.vector_search(queryVec, query, data)
          const groups = LLM.group_results(pool, scores, data.passages, data.url_to_idx)
          this._render_results(key, groups, data.passages)
        } catch (err) {
          console.error('Vector search query error:', err)
        }

      } else if (backend === 'sphinx') {
        if (typeof Stemmer === "undefined") continue

        const data = this.indexData[key]
        const [searchQuery, searchTerms, excludedTerms, highlightTerms, objectTerms] =
          Sphinx.parse_query(query)
        const results = Sphinx.perform_search(
          searchQuery, searchTerms, excludedTerms, highlightTerms, objectTerms, data.index
        )
        const { groups, items } = Sphinx.sphinx_results_to_groups(results, data.passages)
        this._render_results(key, groups, items, data.passages ? null : searchTerms)
      }
    }
  }

  get_tags_and_update_url (query) {
    const enabledTags = []
    for (const [key, value] of Object.entries(this.index_state)) {
      if (this.$.keyCheckbox[key].$.checked === true && this.indexData[key] !== undefined) {
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
  show_version_dropdown (key, version_button, ev) {
    let obj = this.versions_available[key]
    if (!obj) {
      console.warn(`No versions available for key: ${key}`)
      obj = {}
    }

    this.clean_versions_dropdown()

    let i = Object.keys(obj).length > 10 ? 2 : 1
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
      entry.addEventListener('keydown', (ev) => {
        if (event.key !== "Enter")
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

    this.$.list.firstChild?.focus()
    this._show_version_dropdown(version_button.$, true)
  }

  /**
   * Deinit version in dropdowns
   */
  clean_versions_dropdown () {
    while (this.$.list.firstElementChild) {
      this.$.list.removeChild(this.$.list.lastChild)
    }
  }

  /**
   * Select a version for a specific search entry
   */
  async select_version (key, version) {
    this.index_state[key].version = version

    if (this.$.keyCheckbox[key].$.checked && this.index_state[key].ready) {
      this.index_state[key].ready = false
      this.index_state[key].requested = false
      this.$.keyCheckbox[key].classList.remove('ready')
      this.$.keyCheckbox[key].classList.add('requested')

      let not_sub_hosted = this.parent.state.subhost === '' || this.parent.state.subhost === undefined
      this.get_searchindex(key, not_sub_hosted, version)
        .then((urls) => {
          this.load_index(urls, key)
          this.index_state[key].requested = true
          this.$.keyCheckbox[key].classList.remove('failed')
          this.renew_search()
        })
        .catch((error) => {
          console.warn(`Failed to load search index for '${key}' version '${version}':`, error)
          this.index_state[key].requested = false
          this.$.keyCheckbox[key].classList.remove('requested')
          this.$.keyCheckbox[key].classList.add('failed')
        })
    }

    this.$.searchInput.focus()
    this._show_version_dropdown(undefined, false)
  }

  _show_version_dropdown (dom, show) {
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
   * Create version-dropdown overlay (reused across open/close cycles).
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

    addEventListener("resize", (ev) => { this._show_version_dropdown(undefined, false) })
    cancel_dropdown.onclick = (ev) => { this._show_version_dropdown(undefined, false) }

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
    let language_data_script = new URL(`${this.parent.state.content_root}_static/language_data.js`,
                                       location)
    this.$.language_data = new DOM('script', {
      src: language_data_script.href,
      async: true
    }).onevent("load", this, (e) => {
      this.$.searchForm.$.action = ""
    })
    this.$.body.append([this.$.language_data])

    let alphanumeric = Toolbox.get_alphanumeric()
    // Remove common text-manipulation shortcuts
    const drop_ = ['a', 'c', 'f']
    drop_.forEach(letter => {
	    alphanumeric.splice(alphanumeric.indexOf(letter), 1);
    })

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

    this.$.searchInput.$.oninput = (e) => {this.query_debounced(e.target.value)}

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
