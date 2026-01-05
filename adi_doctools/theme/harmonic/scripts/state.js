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
  standalone: undefined
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
  repository () {
    let dom = document.querySelector('meta[name="repository"]')
    return dom ? dom.content : ''
  }
  /**
   * Get meta[name="version"] of doc, e.g.
   * main, v0.2.2, staging/new_feature
   * This is the hard-coded value and may be outdated,
   * so inhering from path has higher precedence.
   * Should only be used as a fallback.
   */
  version () {
    let dom = document.querySelector('meta[name="version"]')
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
  subhost (content_root, repository) {
    let doc_root   = new URL(content_root, location).href,
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
  subhost_offline (content_root, repository) {
    let doc_root = new URL(content_root, location).href
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
  path (content_root, subhost) {
    let url = new URL(content_root, location).href,
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
  path_offline (content_root, subhost) {
    if (subhost === undefined)
      return undefined
    let url = new URL(content_root, location).href,
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
  standalone () {
    return document.querySelector('meta[name="standalone"]') ? true : false
  }
  /**
   * Init app state object.
   */
  init_state (state) {
    state.repository = this.repository()
    state.version = this.version()
    state.offline = 'file:' == window.location.protocol
    state.theme = localStorage.getItem('theme')
    state.content_root = State.content_root(document)
    if (!state.offline) {
      state.subhost = this.subhost(state.content_root, state.repository)
      state.path = this.path(state.content_root, state.subhost)
    } else {
      state.subhost = this.subhost_offline(state.content_root, state.repository)
      state.path = this.path_offline(state.content_root, state.subhost)
    }
    state.reloaded = this.reloaded()
    state.standalone = this.standalone()
  }
}
