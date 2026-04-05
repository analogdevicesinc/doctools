"use strict";

import {Versioned} from './versioned.js'
import {Toolbox} from './toolbox.js'
import {DOM} from './dom.js'

// Testing:
// - Populate: adoc doc2vector --docs path/to/$repo/gh-pages --version $version --output vector-search/mock/$repo/$version
// - Run server: node vector-search/serve.mjs 3000
const INV_PREFIX = 'http://localhost:3000/'
//const INV_PREFIX = 'https://raw.githubusercontent.com/analogdevicesinc/doctools/refs/heads/vector/'

const POOL_SIZE     = 30     // candidate passages considered before grouping
const MAX_ENTRIES   = 4      // max section entries per page group
const HEADING_BOOST = 0.02   // boost for hierarchy (breadcrumb + section headings)
const TERM_BOOST    = 0.05   // per query term found in hierarchy
const TITLE_BOOST   = 0.04   // extra per term found in the section's own heading ('User Guide')

/**
 * Vector search replacement for Sphinx keyword search.
 * Uses TurboQuant WASM + all-MiniLM-L6-v2 (via @xenova/transformers).
 */
export class Search {
  constructor (app) {
    this.parent = app

    // Per-key loaded vector data
    this.indexData = {} // key → {tq, passages, compressedConcat, bytesPerVector, dim}
    this.index_state = {}
    this.key_prefix = {}
    this.versions_available = {}
    this.search_page = new URL(`${this.parent.state.content_root}search.html`, location).pathname

    this._tqClassPromise = null // Promise<TurboQuant class>
    this.embedder = null
    this.embedderLoading = false
    this.pendingQuery = null    // query deferred until embedder is ready

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
   * Lazy load turboquant-wasm
   * Uses Function constructor to bypass rollup's import() transform. TODO use proper external
   */
  _getTurboQuantClass () {
    if (!this._tqClassPromise) {
      const url = new URL(
        `${this.parent.state.content_root}_static/turboquant-wasm.js`, // TODO review how to deploy
        location
      ).href
      const imp = new Function('u', 'return import(u)')
      this._tqClassPromise = imp(url).then(m => m.TurboQuant)
    }
    return this._tqClassPromise
  }

  /**
   * Lazily load @xenova/transformers and initialise all-MiniLM-L6-v2.
   * Runs a deferred query if one was queued.
   */
  async initEmbedder () {
    if (this.embedder || this.embedderLoading) return
    this.embedderLoading = true
    try {
      const imp = new Function('u', 'return import(u)')
      const { pipeline, env } = await imp(`${INV_PREFIX}node_modules/@xenova/transformers/dist/transformers.js`)
      env.allowLocalModels = false // no /models
      env.backends.onnx.wasm.wasmPaths = `${INV_PREFIX}node_modules/@xenova/transformers/dist/`
      this.embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2')
      if (this.pendingQuery) {
        const q = this.pendingQuery
        this.pendingQuery = null
        this.query(q)
      }
    } catch (err) {
      console.error('Vector search: failed to load embedding model:', err)
    } finally {
      this.embedderLoading = false
    }
  }

  async embedQuery (text) {
    const out = await this.embedder([text], { pooling: 'mean', normalize: true })
    return new Float32Array(out.data)
  }

  parseTqvHeader (buffer) {
    const view = new DataView(buffer)
    const magic = new Uint8Array(buffer, 0, 4)
    if (magic[0] !== 0x54 || magic[1] !== 0x51 || magic[2] !== 0x56 || magic[3] !== 0x00)
      throw new Error('Invalid vector db magic')
    return {
      numVectors:     view.getUint32(5, true),
      dim:            view.getUint16(9, true),
      seed:           view.getUint32(11, true),
      bytesPerVector: view.getUint16(15, true),
    }
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
   * Returns the remote doc URL the given key and optional version.
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
      return `${INV_PREFIX}inv/${key}/${path}`
    })
  }

  check_toc (key, ev) {
    if (ev.target.checked) {
      if (this.index_state[key].requested === false) {
        let not_sub_hosted = this.parent.state.subhost === '' || this.parent.state.subhost === undefined
        const selected_version = this.index_state[key].version
        this.get_searchindex(key, not_sub_hosted, selected_version)
          .then((url) => {
            console.log(url)
            this.load_index(url, key)
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
   * Load compressed.tqv + passages.json for key, init TurboQuant instance.
   * Called after get_searchindex() resolves.
   */
  load_index = async (url, key) => {
    const onfailure = (error) => {
      console.warn('load_index:', error)
      this.index_state[key].requested = false
      this.$.keyCheckbox[key].classList.remove('requested')
      this.$.keyCheckbox[key].classList.add('failed')
      this.$.keyCheckbox[key].$.checked = false
    }
    const url_passages = `${url}passages.json`
    const url_vec = `${url}embeddings-minilml6-dim384.bin`
    try {
      const [TurboQuant, response_passages, response_vec] = await Promise.all([
        this._getTurboQuantClass(),
        fetch(new Request(url_passages)),
        fetch(new Request(url_vec)),
      ])

      if (!response_passages.ok) throw new Error(`fetch ${url_passages} failed`)
      if (!response_vec.ok)      throw new Error(`fetch ${response_vec.status} failed`)

      const passages = await response_passages.json()
      const tqvBuf   = await response_vec.arrayBuffer()
      const hdr      = this.parseTqvHeader(tqvBuf)
      const compressedConcat = new Uint8Array(tqvBuf, 17, hdr.numVectors * hdr.bytesPerVector)
      const tq = await TurboQuant.init({ dim: hdr.dim, seed: hdr.seed })

      this.indexData[key] = { tq, passages, compressedConcat, bytesPerVector: hdr.bytesPerVector, dim: hdr.dim }
      this.index_state[key].ready = true
      this.$.keyCheckbox[key].classList.remove('requested')
      this.$.keyCheckbox[key].classList.add('ready')

      this.initEmbedder()

      this.query(this.$.searchInput.$.value)
    } catch (error) {
      onfailure(error)
    }
  }

  _headingMatchScore (queryTerms, passage) {
    const hierarchy = ((passage.hierarchy || []).join(' ')).toLowerCase()
    const heading = (passage.hierarchy[passage.hierarchy.length - 1] || '').toLowerCase()

    let score = 0
    for (const t of queryTerms) {
      if (hierarchy.includes(t)) {
        score += TERM_BOOST
        if (heading.includes(t)) score += TITLE_BOOST
      }
    }
    return score
  }

  _vector_search (queryVec, queryText, key) {
    const data = this.indexData[key]
    const scores = data.tq.dotBatch(queryVec, data.compressedConcat, data.bytesPerVector)
    const queryTerms = queryText.toLowerCase().split(/\s+/).filter(t => t.length > 1)

    for (let i = 0; i < scores.length; i++) {
      const p = data.passages[i]
      const bDepth = p.hierarchy ? p.hierarchy.length : 0
      scores[i] += HEADING_BOOST / (1 + bDepth)
      if (queryTerms.length > 0)
        scores[i] += this._headingMatchScore(queryTerms, p)
    }

    const indices = Array.from({ length: scores.length }, (_, i) => i)
    indices.sort((a, b) => scores[b] - scores[a])
    return { pool: indices.slice(0, POOL_SIZE), scores }
  }

  _url_page (url) {
    const i = url.indexOf('#')
    return i === -1 ? url : url.slice(0, i)
  }

  _build_page_index (passages) {
    const idx = new Map()
    for (let i = 0; i < passages.length; i++) {
      const base = this._url_page(passages[i].url)
      if (!idx.has(base)) idx.set(base, [])
      idx.get(base).push(i)
    }
    return idx
  }

  _group_results(pool, scores, passages) {
    const groups = pool.reduce((acc, idx) => {
      const item = passages[idx]
      const key = `${item.hierarchy[0]} / ${item.hierarchy[1]}` || item.hierarchy[0] || 'General'

      if (!acc[key])
        acc[key] = []

      acc[key].push({ idx: idx, score: scores[idx] })

      return acc
    }, {})

    const sorted_groups = Object.entries(groups)
      .map(([name, entries]) => {
        const rank = entries
          .filter(m => m.score > 0.4)
          .reduce((sum, m) => sum + m.score, 0);

        return { name, entries, rank }
      })
      .sort((a, b) => b.rank - a.rank)

    return sorted_groups
  }

  _entry_label (passage, slice) {
    const h = passage.hierarchy || []
    if (h.length <= 1) return h[0] || ''
    return h.slice(slice).join(' / ')
  }

  _render_group (key, group, passages) {
    let li = new DOM('li', { className: 'group' })

    if (group.entries.length == 1) {
      const p = passages[group.entries[0].idx]
      let link = new DOM('a', {
        className: 'group-title',
        innerText: this._entry_label(p, 1),
        href: `${this.key_prefix[key]}${p.url}`
      })
      link.append(new DOM('span', {
        innerText: p.text || ''
      }))
      li.append(link)
      return li
    }

    let link = new DOM('div', {
      className: 'group-title',
      innerText: group.name
    })
    li.append(link)

    for (const e of group.entries.slice(0,5)) {
      const p = passages[e.idx]
      let link_ = new DOM('a', {
        className: 'entry',
        innerText: this._entry_label(p, 2),
        href: `${this.key_prefix[key]}${p.url}`
      })
      link_.append(new DOM('span', {
        innerText: p.text || ''
      }))
      li.append(link_)
    }
    return li
  }

  _render_results (key, groups, passages) {
    const ul = this.$.searchUL[key]
    // Clear previous results
    while (ul.$.firstElementChild)
      ul.$.removeChild(ul.$.lastChild)

    if (groups.length === 0) {
      this.$.searchLI[key].classList.add('empty')
      return
    }
    this.$.searchLI[key].classList.remove('empty')

    const items = groups.map(group => {
      return this._render_group(key, group, passages)
    })
    ul.append(items)
  }

  async query (query) {
    this.get_tags_and_update_url(query)
    this.renew_search()

    if (!query.trim()) return

    const enabledKeys = Object.keys(this.index_state).filter(
      key => this.$.keyCheckbox[key]?.$.checked &&
             this.index_state[key].ready &&
             this.indexData[key]
    )
    if (enabledKeys.length === 0) return

    // Queue and show placeholder if embedder is not ready
    if (!this.embedder) {
      if (!this.embedderLoading) this.initEmbedder()
      this.pendingQuery = query
      for (const key of enabledKeys) {
        const ul = this.$.searchUL[key]
        while (ul.$.firstElementChild) ul.$.removeChild(ul.$.lastChild)
        const li = new DOM('li')
        li.append(new DOM('span', { className: 'loading' }))
        ul.append([li])
      }
      return
    }

    try {
      const queryVec = await this.embedQuery(query)
      for (const key of enabledKeys) {
        const data = this.indexData[key]
        const { pool, scores } = this._vector_search(queryVec, query, key)
        const groups = this._group_results(pool, scores, data.passages)
        this._render_results(key, groups, data.passages)
      }
    } catch (err) {
      console.error('Vector search query error:', err)
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
        .then((url) => {
          this.load_index(url, key)
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
   * Construct online search: register all repos from metadata + local build.
   */
  construct () {
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
