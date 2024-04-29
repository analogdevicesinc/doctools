"use strict";

import {DOM} from './dom.js'
import {Toolbox} from './toolbox.js'

/* Handle navigation, theming, search, shortcuts */
class Navigation {
  constructor () {
    this.portrait = false
    this.offline = 'file:' == window.location.protocol
    this.currentTheme = localStorage.getItem('theme')
    this.ctrlPressed = localStorage.getItem('ctrlPressed')
    this.contentRoot = DOM.get('html').dataset['content_root']

    let metaRepo = document.querySelector('meta[name="repo"]')
    this.repo = metaRepo ? metaRepo.content.split('/') : ['']

    let $ = this.$ = {}
    $.body = new DOM(DOM.get('body'))

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
      $.searchBox.focus()
      $.searchBox.$.select()
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
    $.searchArea = new DOM(DOM.get('form.search-area'))
    $.searchBox = new DOM(DOM.get('form.search-area input'))
    $.searchArea.$['action'] = DOM.get('link[rel="search"]').href
    $.body.append([$.searchAreaBg])

    $.rightHeader = new DOM(DOM.get('header #right span.reverse')).append([$.changeTheme, $.searchButton])

    $.relatedNext = DOM.get('.related .next')
    $.relatedPrev = DOM.get('.related .prev')
  }
  /* Update GUI based on resize event */
  handleResize () {
    this.portrait = window.innerHeight > window.innerWidth ? true : false
  }
  /* Search shortcut */
  search (e) {
    if (e.key === '/' && !this.$.searchArea.classList.contains('on')) {
      DOM.switchState(this.$.searchArea)
      DOM.switchState(this.$.searchAreaBg)
      this.$.searchBox.focus()
      this.$.searchBox.$.select()
    } else if (e.code === 'Escape') {
      if (this.$.searchArea.classList.contains('on')) {
        DOM.switchState(this.$.searchArea)
        DOM.switchState(this.$.searchAreaBg)
      }
    }
  }
  /* Related shortcut */
  related (e) {
    if (!e.ctrlKey)
      return

    if (e.code == 'ArrowLeft' && this.$.relatedPrev)
      location.href = this.$.relatedPrev.href
    else if (e.code == 'ArrowRight' && this.$.relatedNext)
      location.href = this.$.relatedNext.href
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
    document.addEventListener('keyup', (e) => {this.keyUp(e)}, false);
    this.dynamic()
  }
  /**
   * Updates elements in a reactive manner,
   * fetching from the main doctools/metadata.js,
   * that contain the most up-to-date metadata
   * TODO consider versioned depth
   */
  dynamic () {
    if (this.offline)
      console.log("navigation: dynamic features are not available in offline mode")
      return

    /* Get dynamic elements */
    let $ = this.$
    $.repotocTreeOverlay = new DOM(DOM.get('.repotoc-tree.overlay root'))
    $.repotocTreeSidebar = new DOM(DOM.get('.sphinxsidebar .repotoc-tree root'))

    /* Fetch metadata */
    let metadata = `${this.contentRoot}../doctools/metadata.json`

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
    }).then((json) => {
      if (!json)
        return

      if ('repotoc' in json) {
        this.dynamicRepoToc(json['repotoc'])
      }
    }).catch((e) => {
      return
    })
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
                 `${this.contentRoot}` :
                 `${this.contentRoot}../${key}/`
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
        let a = new DOM('a', {
          'href': `${base}${home}`,
          'className': this.repo[0] === key ? 'current' : ''
        })
        a.innerText = value['name']
        linksSidebar.push(a)
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
