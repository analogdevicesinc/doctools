"use strict";
import {DOM} from './dom.js'
import {Toolbox, Channel} from './toolbox.js'
import {HTMLToMarkdown} from './html2md.js'

/**
 * Shows page actions buttons to the right side of the title.
 * The actions are:
 * * An edit page button to open the page source code on the git hosting website.
 * * An copy as markdown button
 * * Resolve stub pages
 * * Save page, with the bookmarks listed above the local toc
 */
export class PageActions {
  constructor (app) {
    this.$ = {}

    this.with_page_source = false
    this.parent = app
    this.channel = new Channel('bookmarks')
    if (typeof this.parent.fetch === 'object')
      this.parent.fetch.then(this.construct.bind(this))
    else
      this.construct()

    this.parent.versioned.then(this.handler_stub.bind(this))
    this.md_converter = new HTMLToMarkdown(location.href)

    app.page_actions = this
  }

  page_source_sanity (m, r) {
    if (!m.hasOwnProperty('source_hostname')) {
      console.warn("edit_source: 'source_hostname' missing from the metadata", m)
      return true
    }

    // 'Patched' docs report an alt name at app.state.repository, e.g.
    // kuiper -> adi-kuiper-system-level-pro-adi-13-final
    // Resolve it back to the canonical key
    if (new URL(this.parent.state.metadata.remote_alt).hostname == location.hostname) {
      const canonical = Object.keys(m['repotoc']).find(
        k => m['repotoc'][k].alt === r
      )
      if (canonical)
        r = canonical
    }

    if (!m['repotoc'].hasOwnProperty(r)) {
      // The repo may not have been added yet
      console.warn(`edit_source: repository '${r}' not in the metadata`)
      return true
    }

    if (!m['repotoc'][r].hasOwnProperty('pathname')) {
      console.warn(`edit_source: 'pathname' missing from entry '${r}'`)
      return true
    }

    if (!m['repotoc'][r].hasOwnProperty('branch')) {
      console.warn(`edit_source: 'branch' missing from entry '${r}'`)
      return true
    }

    this.repository = r
    return false
  }
  /*
   * Don't show page source button on some pages.
   */
  page_source_ignore () {
    /* Search page */
    if (document.querySelector("#search-documentation") !== null)
      return true

    return false
  }
  copy_markdown () {
    const selector = '.documentwrapper .body'
    const element = DOM.get(selector)
    if (!element) {
      console.warn(`page_actions: got null for selector '${selector}'`)
      return
    }

    this.md_converter.baseUrl = location.href
    const md = this.md_converter.convert(element)
    navigator.clipboard.writeText(md)
      .then(() => {
        this.$.copy_button.classList.add(`success`)
        setTimeout(() => {
          this.$.copy_button.classList.remove(`success`)
        }, 1000)
      })
      .catch((err) => {
        console.error(err)
      })
  }
  get_bookmarks () {
    try {
      return JSON.parse(localStorage.getItem('bookmarks')) || []
    } catch {
      return []
    }
  }
  set_bookmarks (bookmarks) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    this.channel.post(bookmarks)
    this.update_bookmarks(bookmarks)
  }
  current_page () {
    let path
    if (this.parent.state.offline)
      path = new URL("file://"+location.pathname).href
    else
      path = new URL(location.pathname, location.origin).href
    const base = new URL(this.parent.state.content_root, path).href
    const h1 = document.querySelector('.body h1')
    return {
      repo: this.repository,
      version: this.parent.state.path || '',
      path: path.substring(base.length).replace(/(^|\/)index\.html$/, '$1'),
      title: h1 ? [...h1.childNodes]
        .filter(n => !n.classList?.contains('headerlink'))
        .map(n => n.textContent).join('').trim() : document.title,
    }
  }
  same_bookmark (a, b) {
    return a.repo === b.repo && (a.version || '') === (b.version || '') &&
      a.path === b.path
  }
  is_current (entry) {
    return this.same_bookmark(entry, this.current_page())
  }
  toggle_bookmark () {
    const bookmarks = this.get_bookmarks()
    if (bookmarks.some(e => this.is_current(e)))
      this.set_bookmarks(bookmarks.filter(e => !this.is_current(e)))
    else
      this.set_bookmarks([...bookmarks, this.current_page()])
  }
  remove_bookmark (entry) {
    this.set_bookmarks(this.get_bookmarks().filter(e => !this.same_bookmark(e, entry)))
  }
  bookmark_url (entry) {
    const metadata = this.parent.state.metadata
    const use_alt = new URL(metadata.remote_alt).hostname === location.hostname
    const repository = use_alt ? metadata.repotoc[entry.repo]?.alt || entry.repo : entry.repo
    const base = use_alt ? metadata.remote_alt : metadata.remote_doc
    const version = entry.version ? `${entry.version}/` : ''
    return new URL(`${repository}/${version}${entry.path}`, base)
  }
  draw_bookmarks () {
    const tocwrapper = DOM.get('.localtoc .tocwrapper')
    if (!tocwrapper || !this.parent.state.metadata)
      return

    const input = DOM.new('input', {
      'className': 'collection-collapse',
      'type': 'checkbox',
      'id': 'bookmarks-collapse',
    })
    input.checked = this.bookmarks_open === true
    const label = DOM.new('label', {
      'className': 'header',
      'htmlFor': 'bookmarks-collapse',
      'innerText': 'Bookmarks',
    })
    this.$.bookmarks_list = DOM.new('ul')
    const span = DOM.new('span', {'className': 'span-ul'})
    span.append(this.$.bookmarks_list)
    const content = DOM.new('div', {'className': 'content'})
    content.append(input, label, span)

    this.$.bookmarks = DOM.new('div', {'className': 'bookmarks'})
    this.$.bookmarks.append(content)
    tocwrapper.prepend(this.$.bookmarks)
  }
  draw_bookmarks_list (bookmarks) {
    const repotoc = this.parent.state.metadata.repotoc
    this.$.bookmarks_list.replaceChildren(...bookmarks.map(entry => {
      const name = repotoc[entry.repo]?.name || entry.repo
      const a = DOM.new('a', {
        'href': this.bookmark_url(entry),
        'innerText': [name, ...(entry.version || '').split('/'),
          entry.path === '' ? '' : entry.title].filter(Boolean).join(' / '),
      })
      if (this.is_current(entry))
        a.classList.add('current')
      const remove = DOM.new('button', {'className': 'remove', 'title': 'Remove bookmark'})
      remove.addEventListener('click', () => this.remove_bookmark(entry))
      const li = DOM.new('li')
      li.append(a, remove)
      return li
    }))
    this.$.bookmarks.classList.toggle('empty', bookmarks.length === 0)
    if (bookmarks.length === 0)
      this.$.bookmarks.querySelector('.collection-collapse').checked = false
  }
  update_bookmarks (bookmarks = this.get_bookmarks()) {
    if (!this.$.bookmarks)
      this.draw_bookmarks()
    if (this.$.bookmarks)
      this.draw_bookmarks_list(bookmarks)

    const on = bookmarks.some(e => this.is_current(e))
    this.$.save_button.classList.toggle('on', on)
    this.$.save_button.setAttribute('aria-pressed', on)
    this.$.save_button.title = on ? 'Remove bookmark' : 'Save this page'
  }
  draw_page_source () {
    this.$.container = DOM.new('div', {
      'className': 'page-actions'
    })

    this.$.save_button = DOM.new('button', {
      'className': 'save',
    })
    this.$.save_button.addEventListener('click', (ev) => { this.toggle_bookmark() })

    this.$.copy_button = DOM.new('button', {
      'className': 'copy-as-markdown',
      'title': 'Copy this page as markdown'
    })
    this.$.copy_button.addEventListener('click', (ev) => { this.copy_markdown() })

    this.$.edit_button = DOM.new('button', {
      'className': 'edit-source',
      'title': 'See and edit this page source'
    })
    this.$.edit_button.addEventListener('mousedown', (ev) => {
      ev.preventDefault()
    })
    this.$.edit_button.addEventListener('mouseup', (ev) => {
      if (ev.which !== 1 && ev.which !== 2)
        return
      this.open_page_source()
    })
    this.$.edit_button.addEventListener('keypress', (ev) => {
      if (event.key !== "Enter")
        return
      this.open_page_source()
    })

    this.$.container.append(this.$.copy_button)
    this.$.container.append(this.$.edit_button)
    this.$.container.append(this.$.save_button)
  }
  async open_page_source () {
    const branch = await this.resolve_pull()
    const candidates = this.edit_button_candidates.map(
      (candidate) => candidate.map((url) => url.replace('{branch}', branch))
    )

    Toolbox.try_include(candidates, candidates[0][1], true)
  }
  async resolve_pull () {
    let pull = this.parent.state.path.match(/^pull\/(\d+)$/)
    if (!pull)
      return this.parent.state.metadata.repotoc[this.repository].branch
    try {
      const response = await fetch(`https://api.github.com/repos/analogdevicesinc/${this.repository}/pulls/${pull[1]}`)
      if (!response.ok)
        throw response.status
      return (await response.json()).head.ref
    } catch (error) {
      console.warn(`edit_source: failed to get pull request ${pull[1]}`, error)
      return this.parent.state.metadata.repotoc[this.repository].branch
    }
  }
  init_page_source () {
    this.with_page_source =
      !this.page_source_sanity(this.parent.state.metadata, this.parent.state.repository) &&
      !this.page_source_ignore()
    if (!this.with_page_source)
      return

    let doc = DOM.get('.bodywrapper .body-header .breadcrumb')
    if (doc === null || doc.classList.contains('empty')) {
      doc =  DOM.get('.bodywrapper .body')
      doc.insertAdjacentElement('afterbegin', this.$.container)
    } else {
      doc.parentElement.insertAdjacentElement('beforeend', this.$.container)
    }

    let m = this.parent.state.metadata
    let r = this.repository

    let format_tgt = (hostname) => {
      return hostname.replace('{repository}', r)
                              .replace('{pathname}', m['repotoc'][r]['pathname'])
    }

    let page_source_suffix = () => {
      let dom = document.querySelector('meta[name="page_source_suffix"]')
      if (dom === null)
        return '.rst'
      return dom.content
    }
    let suffix = page_source_suffix()

    let tgt = format_tgt(m.source_hostname)
    let tgt_raw = format_tgt(m.source_hostname_raw)
    let path = ""
    if (this.parent.state.offline)
      path = new URL("file://"+location.pathname).href
    else
      path = new URL(location.pathname, location.origin).href

    let base = new URL(this.parent.state.content_root, path).href
    let pathname = path.substring(base.length)

    if (pathname.endsWith('.html'))
      pathname = pathname.replace(/\.html$/i, suffix)
    else if (pathname.endsWith('/') || pathname === "")
      pathname = pathname.concat(`index${suffix}`)
    else
      pathname = pathname.concat(suffix)

    const flat_pathname = pathname.endsWith(`/index${suffix}`) ?
      pathname.substring(0, pathname.length - `/index${suffix}`.length) + suffix :
      undefined

    this.edit_button_candidates = [[tgt_raw.concat('/', pathname), tgt.concat('/', pathname)]]
    if (flat_pathname)
      this.edit_button_candidates.push([tgt_raw.concat('/', flat_pathname),
                                        tgt.concat('/', flat_pathname)])
  }
  deinit_page_source () {
    if (!this.with_page_source)
      return

    this.edit_button_candidates = undefined
    this.$.container.remove()
  }
  handler_stub () {
    if (!this.parent.versioned.tags)
      return
    let dom = document.querySelector('meta[name="stub"]')
    if (!dom || dom.content === '')
      return

    const start = app.state.path.length > 0 ?
                  this.parent.versioned.prefix + app.state.path + '/' :
                  this.parent.versioned.prefix

    if (!location.href.startsWith(start))
      return

    const pathname = location.href.substring(start.length)
    let url = new URL(pathname, this.parent.versioned.prefix + dom.content + '/')
    if (url.href === location.href) {
      console.warn(`page_actions: stub cadidate '${dom.content}' references itself`)
      return
    }
    let await_ = async () => {
      if (await Toolbox.try_redirect(url, undefined, false))
        console.log(`page_actions: stub candidate '${dom.content}' does not exist`)
    }
    await_()
  }
  construct () {
    this.draw_page_source()
    this.channel.on(bookmarks => this.update_bookmarks(bookmarks))
    this.init()
  }
  init () {
    this.init_page_source()
    this.update_bookmarks()
    this.handler_stub()
  }
  deinit () {
    this.deinit_page_source()
    this.bookmarks_open = this.$.bookmarks?.querySelector('.collection-collapse').checked
    this.$.bookmarks?.remove()
    delete this.$.bookmarks
    delete this.$.bookmarks_list
  }
}
