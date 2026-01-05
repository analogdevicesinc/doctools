"use strict";

import {DOM} from './dom.js'

/* Handle navigation, theming, search, shortcuts */
export class Navigation {
  constructor (app) {
    this.parent = app

    this.portrait = false
    this.scrollSpy = {
      localtoc: new Map(),
      currentLocaltoc: undefined
    }

    let $ = this.$ = {}
    $.body = new DOM(DOM.get('body'))
    $.content = new DOM(DOM.get('.documentwrapper .body'))
    $.localtoc = new DOM(DOM.get('.tocwrapper > nav'))

    if (this.parent.state.theme === null)
      this.parent.state.theme = this.os_theme()
    $.body.classList.add('js-on')
    if (this.parent.state.theme !== this.os_theme())
      $.body.classList.add(this.parent.state.theme)

	  $.changeTheme = new DOM('button', {
      className: this.parent.state.theme === 'dark' ? 'icon on' : 'icon',
      id:'theme',
      title:'Switch theme'
    }).onclick(this, () => {
      $.body.classList.remove(this.parent.state.theme)
      this.parent.state.theme = this.parent.state.theme === 'dark' ? 'light' : 'dark'
      if (this.os_theme() == this.parent.state.theme)
        localStorage.removeItem('theme')
      else {
        localStorage.setItem('theme', this.parent.state.theme)
        $.body.classList.add(this.parent.state.theme)
      }
    })

    $.preserve_scroll = {}
    $.preserve_scroll['sphinxsidebarwrapper'] = new DOM(DOM.get('.sphinxsidebarwrapper'))

    $.rightHeader = new DOM(DOM.get('header #right span.reverse')).append([$.changeTheme])

    $.related = new DOM(DOM.get('.related'))

    this.construct()

    app.navigation = this
  }
  /*
   * Initiates scroll spy elements.
   */
  init_scroll_spy () {
    if (this.$.localtoc.$ !== null) {
      this.prepareLocaltocMap()
    }
  }
  /*
   * De-init scroll spy elements.
   */
  deinit_scroll_spy () {
    this.scrollSpy.localtoc.clear()
    this.scrollSpy.currentLocaltoc = undefined
  }
  /*
   * Prepare map for localtoc elements to be used by the scroll spy.
   */
  prepareLocaltocMap (){
    let key = ""
    let lt = this.scrollSpy.localtoc
    DOM.getAll('.reference.internal', this.$.localtoc).forEach((elem) => {
      key = elem.getAttribute("href").substring(1)
      lt.set(key, [elem, undefined])
    })

    let entries = []
    // references
    for (let i = 0; i < 7; i++) {
      entries.push(...DOM.getAll(`section > h${i}`, this.$.content))
    }
    // doc links from singlehtml
    entries.push(...Array.from(
      DOM.getAll('div.toctree-wrapper.compound > span', this.$.content)))
    // Sort entries in distance to the top
    entries = entries.sort((a, b) => a.getBoundingClientRect().y - b.getBoundingClientRect().y)
    entries.forEach((elem) => {
      key = elem.id || elem.parentNode.id
      if (lt.has(key)) {
        lt.set(key, [lt.get(key)[0], elem])
      }
    })
    // Remove not found entries
    lt.forEach((value, key, map) => {
      if (value[1] === undefined)
        map.delete(key)
    })
  }
  /* Update GUI based on resize event */
  handleResize () {
    const em = 16,
          ss = [40, 65, 80, 105],
          iw = window.innerWidth

    this.portrait = window.innerHeight > window.innerWidth ? true : false

    this.previous_size = this.current_size
    for (let i = 0; i < ss.length; i++) {
      if (iw < (ss[i] * em))
        break
      this.current_size = i
    }
    if (this.previous_size === this.current_size)
      return

    if (this.current_size === 3 || this.previous_size === 3) {
      let event = new Event('change');
      this.$.show_localtoc.$.checked = iw < (ss[3] * em) ? false : true;
      this.$.show_localtoc.$.dispatchEvent(event)
    }
  }
  /* Update GUI based on scroll event */
  handleScroll () {
    if (this.$.localtoc.$ !== null) {
      // Highlight localtoc entry
      let key_neg, key_pos, key, dist
      let dist_pos = Number.MAX_SAFE_INTEGER
      let dist_neg = Number.MIN_SAFE_INTEGER
      let lt = this.scrollSpy.localtoc
      lt.forEach((value, key_, map) => {
        dist = value[1].getBoundingClientRect().y
        if (dist <= 0) {
          if (dist > dist_neg) {
            dist_neg = dist
            key_neg  = key_
          }
        } else {
          if (dist < dist_pos) {
            dist_pos = dist
            key_pos  = key_
          }
        }
      })
      if (dist_pos < 5*16)
        key = key_pos
      else
        key = key_neg

      let clt_key = this.scrollSpy.currentLocaltoc
      if (clt_key !== undefined && key !== clt_key)
        lt.get(clt_key)[0].classList.remove("current")
      if (key !== undefined && key !== clt_key) {
        lt.get(key)[0].classList.add("current")
        this.scrollSpy.currentLocaltoc = key
      }
    }
  }
  /* Related shortcut */
  related (e) {
    if (!e.altKey || !e.shiftKey)
      return
    e.preventDefault()

    /* Try to anchor to same section */
    let anchor = (e.ctrlKey && location.hash.length > 0) ? location.hash : ""

    let dom
    if ((e.code == 'ArrowLeft' || e.code == 'KeyA'))
      dom = DOM.get('.prev', this.$.related)
    else if ((e.code == 'ArrowRight' || e.code == 'KeyD'))
      dom = DOM.get('.next', this.$.related)
    if (!dom)
      return

    if (anchor !== "") {
      let href_ = new URL(dom.href)
      href_.hash = anchor
      dom.href = href_
    }
    dom.dispatchEvent(new Event('click'))
  }
  keyup (e) {
    switch (e.code) {
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'KeyA':
      case 'KeyD':
        this.related(e)
        break
    }
  }
  keydown (e) {
    if (!e.altKey || !e.shiftKey)
      return
    switch (e.code) {
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'KeyA':
      case 'KeyD':
        if (e.altKey && e.shiftKey)
          e.preventDefault()
        return
    }
  }
  /**
   * Get OS Theme
   */
  os_theme () {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'
  }
  /*
   * Save current scroll position of DOM elements, to restore after load.
   */
  scroll_save () {
    let positions = {}

    for (const [key, dom] of Object.entries(this.$.preserve_scroll)) {
      positions[key] = dom.$.scrollTop
    }

    localStorage.setItem("scroll_position", JSON.stringify(positions))
  }
  /*
   * Restore previous scroll position of DOM elements.
   */
  scroll_restore (e) {
    let positions = localStorage.getItem("scroll_position")
    if (!positions)
      return

    positions = JSON.parse(positions)
    for (const [key, value] of Object.entries(positions)) {
      if (key in this.$.preserve_scroll)
        this.$.preserve_scroll[key].$.scrollTop = value
    }
  }
  renew_index(nodes, ev) {
    nodes.forEach(node => {
      node.tabIndex = ev.target.checked ? 0 : -1;
    })
  }
  /**
   * When elements are not visible, it is ideal to make them
   * not tab selectable.
   * Add listeners to check changes and update the tab index accordingly.
   */
  check_to_tabindex () {
    let $ = this.$
    $.show_localtoc = new DOM(
      DOM.get('#input-show-localtoc')
    ).onchange(this, this.renew_index, [$.localtoc.$.querySelectorAll('a')])
    let event = new Event('change');
    $.show_localtoc.$.dispatchEvent(event)
  }
  /**
   * Pre-init navigation.
   */
  construct () {
    onresize = () => {this.handleResize()}
    onscroll = () => {this.handleScroll()}
    document.addEventListener('keyup', (e) => {this.keyup(e)}, false);
    document.addEventListener('keydown', (e) => {this.keydown(e)}, false);

    this.check_to_tabindex();
    this.handleResize()
    this.scroll_restore();
    addEventListener('beforeunload', (e) => {this.scroll_save(e)}, false);

    this.init()
  }
  /**
   * Init navigation.
   */
  init () {
    this.init_scroll_spy()
  }
  /**
   * De-init navigation.
   */
  deinit () {
    this.deinit_scroll_spy()
  }
}
