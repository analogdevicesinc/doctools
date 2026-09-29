"use strict";

/**
 * repository: from html meta tag
 * version: v0.0.1, main, staging/new_feature
 * offline: if no webserver, direct file://
 * theme: dark/light
 * content_root: relative path to reach the current doc root page
 * subhost: "/docs/$repository", "/$repository" (github.io), "" (single doc), "file://..." (offline)
 * path: "v0.0.1", "", "prs/staging/new_feature"
 * reloaded: page was reloaded
 * metadata: metadata.json, fetched later by fetch.js, if state allows
 * collection: collection.json, fetched later by content_actions.js, if state allows
 * tags: tags.json, fetched later by extra version_dropdown.js
 * standalone: isolated doc, disable multi-repo integrations
 * landing_page: is the landing page
 */
const state = {
  repository: undefined,
  version: undefined,
  offline: undefined,
  theme: undefined,
  content_root: undefined,
  subhost: undefined,
  path: undefined,
  reloaded: undefined,
  metadata: undefined,
  collection: undefined,
  tags: undefined,
  standalone: undefined,
  landing_page: undefined
}

/**
 * Creates the common state of the documentation.
 */
export class State {
  constructor (app) {
    this.init_state(state)

    this.parent = app
    app.state = state
  }
  /**
   * Get repository name, e.g.
   * doctools, hdl, pyadi-iio
   */
  repository (doc = document) {
    let dom = doc.querySelector('meta[name="repository"]')
    return dom ? dom.content : ''
  }
  /**
   * Get meta[name="version"] of doc, e.g.
   * main, v0.2.2, staging/new_feature
   * This is the hard-coded value and may be outdated,
   * so inhering from path has higher precedence.
   * Should only be used as a fallback.
   */
  version (doc = document) {
    let dom = doc.querySelector('meta[name="version"]')
    if (dom === null)
      return ""

    return dom.content
  }
  /**
   * Get relative path to the root.
   * Dual fallback to support multiple Sphinx versions.
   */
  static content_root (doc) {
    let content_root
    let dom = doc.querySelector('script#documentation_options')
    if (dom !== null)
      content_root = dom.dataset['url_root'];
    if (content_root == undefined)
      content_root = doc.documentElement.dataset["content_root"]
    if (content_root == undefined) {
      dom =  doc.querySelector('.repotoc-tree .current')
      if (dom !== null)
        content_root = dom.getAttribute('href').replace('index.html', '')
    }
    if (content_root == undefined) {
      console.warn("Failed to get content root.")
      content_root = ''
    }
    return content_root
  }
  /**
   * Checks if doc is in a path beyond the server root,
   * e.g.
   * /docs/doctools, /docs/doctools/v0.2.2 -> /docs/doctools
   * /doctools, /doctools/v0.2.2 -> /doctools
   * / , /v0.2.2 -> (empty)
   * For correctness, the html meta repository tag must match the url repository.
   */
  subhost (content_root, repository, url = location.href) {
    let doc_root   = new URL(content_root, url).href,
        no_docs    = new URL(repository, location.origin).href,
        under_docs = new URL(`docs/${repository}`, location.origin).href
    if (doc_root.startsWith(under_docs))
      return `/docs/${repository}`
    else if (doc_root.startsWith(no_docs))
      return `/${repository}`
    else
      return ''
  }
  /**
   * Get absolute path to doc,
   * e.g.
   * file://../docs/doctools, file://../docs/doctools/v0.2.2 -> file://../docs/doctools
   * For correctness, the html meta repository tag must match the url repository.
   */
  subhost_offline (content_root, repository, url = location.href) {
    let doc_root = new URL(content_root, url).href
    let index = doc_root.search("/_build/html")
    if (index !== -1)
      return doc_root.substring(0, index + "/_build/html".length)
    index = doc_root.search(repository)
    if (index !== -1)
      return doc_root.substring(0, index + repository.length)
    return undefined
  }
  /**
   * Extract path of versioned version, without repository name
   * /doctools -> ""
   * / -> ""
   * /docs/doctools/v1.1.1 -> "v1.1.1"
   * /doctools/v1.1.1 -> "v1.1.1"
   * /v1.1.1 -> "v1.1.1"
   */
  path (content_root, subhost, page_url = location.href) {
    let url = new URL(content_root, page_url).href,
        org = new URL(subhost, location.origin).href
    if (!url.startsWith(org))
      return ""
    else
      return url.replace(org, "").replace(/^\/|\/$/g, "")
  }
  /**
   * Extract path of versioned version, without repository name
   * file://../doctools -> ""
   * file://../doctools/v1.1.1 -> "v1.1.1"
   */
  path_offline (content_root, subhost, page_url = location.href) {
    if (subhost === undefined)
      return undefined
    let url = new URL(content_root, page_url).href,
        org = subhost
    if (!url.startsWith(org))
      return ""
    else
      return url.replace(org, "").replace(/^\/|\/$/g, "")
  }
  /**
   * Detects if the page was reloaded by the user.
   * This information is to use to force reload of cached content.
   */
  reloaded () {
    if (!window.performance)
      return false

    return performance.navigation.type === performance.navigation.TYPE_RELOAD
  }
  /**
   * Disable integrations.
   */
  standalone (doc = document) {
    return doc.querySelector('meta[name="standalone"]') ? true : false
  }
  /**
   * Detect if is a landing page.
   */
  landing_page (doc = document) {
    return doc.querySelector('meta[name="landing_page"]') ? true : false
  }
  /**
   * Init app state object.
   */
  init_state (state, doc = document, url = location.href) {
    state.repository = this.repository(doc)
    state.version = this.version(doc)
    state.offline = 'file:' == window.location.protocol
    state.theme = localStorage.getItem('theme')
    state.content_root = State.content_root(doc)
    if (!state.offline) {
      state.subhost = this.subhost(state.content_root, state.repository, url)
      state.path = this.path(state.content_root, state.subhost, url)
    } else {
      state.subhost = this.subhost_offline(state.content_root, state.repository, url)
      state.path = this.path_offline(state.content_root, state.subhost, url)
    }
    state.reloaded = this.reloaded()
    state.standalone = this.standalone(doc)
    state.landing_page = this.landing_page(doc)
  }
}
