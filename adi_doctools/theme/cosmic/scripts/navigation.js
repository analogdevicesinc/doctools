"use strict";

import {DOM} from './dom.js'
import {Toolbox} from './toolbox.js'

/* Handle navigation, theming, search, shortcuts */
class Navigation {
  constructor () {
    this.portrait = false
    this.offline = 'file:' == window.location.protocol
    this.currentTheme = localStorage.getItem('theme')
    this.contentRoot = this.getContentRoot()
    this.globalRoot = this.getGlobalRoot()
    this.scrollSpy = {
      localtoc: new Map(),
      currentLocaltoc: undefined
    }

    let metaRepo = document.querySelector('meta[name="repo"]')
    this.repo = metaRepo ? metaRepo.content.split('/') : ['']

    let $ = this.$ = {}
    $.body = new DOM(DOM.get('body'))
    $.content = new DOM(DOM.get('.body section'))
    $.localtoc = new DOM(DOM.get('.tocwrapper > nav > ul > li'))
    this.initScrollSpy()

    if (this.currentTheme === null)
      this.currentTheme = this.getOSTheme()
    $.body.classList.add('js-on')
    if (this.currentTheme !== this.getOSTheme())
      $.body.classList.add(this.currentTheme)

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
	  $.changeTheme = new DOM('button', {
      className: this.currentTheme === 'dark' ? 'icon on' : 'icon',
      id:'theme',
      title:'Switch theme'
    }).onclick(this, () => {
      $.body.classList.remove(this.currentTheme)
      this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark'
      if (this.getOSTheme() == this.currentTheme)
        localStorage.removeItem('theme')
      else {
        localStorage.setItem('theme', this.currentTheme)
        $.body.classList.add(this.currentTheme)
      }
    })

    $.searchAreaBg = new DOM('div', {
      className:'search-area-bg'
    }).onclick(this, () => {
      DOM.switchState($.searchArea)
      DOM.switchState($.searchAreaBg)
    })
    $.searchArea = new DOM(DOM.get('.search-area'))
    $.searchForm = new DOM(DOM.get('form', $.searchArea))
    $.searchInput = new DOM(DOM.get('input', $.searchForm))
    $.searchForm.$['action'] = DOM.get('link[rel="search"]').href
    $.body.append([$.searchAreaBg])

    $.rightHeader = new DOM(DOM.get('header #right span.reverse')).append([$.changeTheme, $.searchButton])

    $.relatedNext = DOM.get('.related .next')
    $.relatedPrev = DOM.get('.related .prev')
  }
  /*
   * Initates scroll spy elements.
   */
  initScrollSpy () {
    if (this.$.localtoc.$ !== null) {
      this.prepareLocaltocMap()
    }
  }
  /*
   * Prepare map for localtoc elements to be used by the scroll spy.
   */
  prepareLocaltocMap (){
    let key = ""
    let lt = this.scrollSpy.localtoc
    let i = 0
    DOM.getAll('.reference.internal', this.$.localtoc).forEach((elem) => {
      key = `${i}_${elem.textContent}`
      lt.set(key, [elem, undefined])
      i += 1
    })

    let entries = []
    for (let i = 0; i < 7; i++) {
      entries.push(...DOM.getAll(`section > h${i}`, this.$.content))
    }
    // Sort entries in distance to the top
    entries = entries.sort((a, b) => a.getBoundingClientRect().y - b.getBoundingClientRect().y)
    i = 0
    entries.forEach((elem) => {
      key = elem.textContent
      key = `${i}_${key}`
      if (lt.has(key)) {
        lt.set(key, [lt.get(key)[0], elem])
        i += 1
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
    this.portrait = window.innerHeight > window.innerWidth ? true : false
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

      if (key !== undefined) {
        let clt_key = this.scrollSpy.currentLocaltoc
        if (key !== clt_key) {
          lt.get(key)[0].classList.add("current")
          if (clt_key !== undefined) {
            lt.get(clt_key)[0].classList.remove("current")
          }
          this.scrollSpy.currentLocaltoc = key
        }
      }
    }
  }
  /*
   * Get relative path to the root
   * Dual fallback to support multiple Sphinx versions.
   */
  getContentRoot () {
    let content_root
    let dom = new DOM(DOM.get('script#documentation_options'))
    if (dom.$ !== null)
      content_root = dom.$.dataset['url_root'];
    if (content_root == undefined)
      content_root = DOM.get('html').dataset['content_root']
    if (content_root == undefined) {
      dom =  new DOM(DOM.get('.repotoc-tree .current'))
      if (dom.$ !== null)
        content_root = dom.$.getAttribute('href').replace('index.html', '')
    }
    if (content_root == undefined) {
      console.warn("Failed to get content root.")
      content_root = ''
    }
    return content_root
  }
  /*
   * Get relative path to the global root
   */
  getGlobalRoot () {
    return document.querySelector('meta[name="global_root"]').content
  }
  /* Search shortcut */
  search (e) {
    if (e.key === '/' && !this.$.searchArea.classList.contains('on')) {
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
  /* Related shortcut */
  related (e) {
    if (!e.altKey || !e.shiftKey)
      return

    /* Try to anchor to same section */
    let anchor = (e.ctrlKey && location.href.split('#').length > 1) ?
                 `#${location.href.split('#')[1]}` : ""

    if (e.code == 'ArrowLeft' && this.$.relatedPrev)
      location.href = this.$.relatedPrev.href + anchor
    else if (e.code == 'ArrowRight' && this.$.relatedNext)
      location.href = this.$.relatedNext.href + anchor
  }

  keyUp (e) {
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowRight':
        this.related(e)
        break
      case '/':
        this.search(e)
    }

    if (e.code === 'Escape')
      this.search(e)
  }
  /**
   * Init navigation.
   */
  init () {
    onresize = () => {this.handleResize()}
    onscroll = () => {this.handleScroll()}
    document.addEventListener('keyup', (e) => {this.keyUp(e)}, false);
    this.dynamic()
  }
  /**
   * Updates elements in a reactive manner,
   * fetching from the main doctools/metadata.js,
   * that contain the most up-to-date metadata
   */
  dynamic () {
    if (this.offline) {
      console.log("navigation: dynamic features are not available in offline mode")
      return
    }

    /* Get dynamic elements */
    let $ = this.$
    $.repotocTreeOverlay = new DOM(DOM.get('.repotoc-tree.overlay root'))
    $.repotocTreeSidebar = new DOM(DOM.get('.sphinxsidebar .repotoc-tree root'))
    $.banner = new DOM(DOM.get('.banner'))

    let resolveJSON = (j) => {
        if ('repotoc' in j)
          this.dynamicRepoToc(j['repotoc'])
        if ('banner' in j)
          this.dynamicBanner(j['banner'])
    }

    /* Fetch metadata */
    let json = localStorage.getItem('metadata')
    if (json !== null)
      json = JSON.parse(json)

    let unix_day = new Date(0)
    unix_day.setHours(3)
    if (json === null || json['timestamp'] + unix_day.valueOf() < Date.now()) {
      let metadata = `${this.globalRoot}doctools/metadata.json`

      fetch(metadata, {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response.ok !== true) {
          return
        }

        return response.json()
      }).then((obj) => {
        if (!obj)
          return

        resolveJSON(obj)
        obj['timestamp'] = Date.now()
        localStorage.setItem('metadata', JSON.stringify(obj))
      }).catch((e) => {
        return
      })
    } else {
      resolveJSON(json)
    }
  }

  dynamicRepoToc (obj) {
    let $ = this.$

    let home = "index.html"
    let linksOverlay = [],
        linksSidebar = []
    for (const [key, value] of Object.entries(obj)) {
      if (!('name' in value))
        continue

      let base = key == this.repo[0] ?
                 this.contentRoot :
                 `${this.globalRoot}${key}/`
      if ('topic' in value) {
        for (const [key_, value_] of Object.entries(value['topic'])) {
          if (typeof(value_) !== "string")
            continue

          let a = new DOM('a', {
            'href': `${base}${key_}/${home}`,
            'className': this.repo.join('/') === `${key}/${key_}` ? 'current' : ''
          })
          a.innerText = value_

          linksSidebar.push(a)
        }
      } else {
        linksSidebar.push(new DOM('a', {
          'href': `${base}${home}`,
          'className': this.repo[0] === key ? 'current' : '',
          'innerText': value['name']
        }))
      }
    }

    linksSidebar.forEach((elem) => {
      linksOverlay.push(elem.cloneNode(true))
    })

    if ($.repotocTreeOverlay.$)
      $.repotocTreeOverlay.removeChilds(),
      $.repotocTreeOverlay.append(linksOverlay)
    if ($.repotocTreeSidebar.$)
      $.repotocTreeSidebar.removeChilds(),
      $.repotocTreeSidebar.append(linksSidebar)
  }

  dynamicBanner (obj) {
    let $ = this.$

    if ('msg' in obj)
      $.banner.append(new DOM('span', {
        'innerText': obj['msg']
      }))

    if ('a_href' in obj && 'a_text' in obj)
      $.banner.append(new DOM('a', {
        'href': obj['a_href'],
        'innerText': obj['a_text'],
        'target': '_blank'
      }))
  }
  /**
   * Set items state.
   * @param state - True for open, false for closed.
   */
  setState (items, state) {
    items.forEach((elem) => {
      if (state) {
        elem.classList.add('on')
      } else {
        elem.classList.remove('on')
      }
    })
  }
  /**
   * Get OS Theme
   */
  getOSTheme () {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'
  }
}

export let navigation = new Navigation()
