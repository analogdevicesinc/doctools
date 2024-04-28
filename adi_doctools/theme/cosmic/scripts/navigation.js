"use strict";

import {DOM} from './dom.js'
import {Toolbox} from './toolbox.js'

/* Handle navigation, theming, search, shortcuts */
class Navigation {
  constructor () {
    this.portrait = false
    this.isLocal = 'file:' == window.location.protocol
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
    if (e.code === 'IntlRo' && !this.$.searchArea.classList.contains('on')) {
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
    if (!localStorage.getItem('ctrlPressed'))
      return

    if (e.code == 'ArrowLeft' && this.$.relatedPrev)
      location.href = this.$.relatedPrev.href
    else if (e.code == 'ArrowRight' && this.$.relatedNext)
      location.href = this.$.relatedNext.href
  }

  keyDown (e) {
    if (e.key == 'Control')
      localStorage.setItem('ctrlPressed', true)
  }

  keyUp (e) {
    switch (e.key) {
      case 'Control':
        localStorage.removeItem('ctrlPressed')
        break
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
    document.addEventListener('keydown', (e) => {this.keyDown(e)}, false);
    this.react()
  }
  /**
   * Updates elements in a reactive manner,
   * fetching from the main doctools/metadata.js,
   * that contain the most up-to-date metadata
   */
  react () {
    /* Get react elements */
    let $ = this.$
    $.repotocTreeOverlay = new DOM(DOM.get('.repotoc-tree.overlay root'))
    $.repotocTreeSidebar = new DOM(DOM.get('.sphinxsidebar .repotoc-tree root'))

    /* Fetch metadata */
    let metadata = `${this.contentRoot}../doctools/metadata.json`

    let promise = fetch(metadata, {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    promise.then((response) => {
      if (response.ok !== true) {
        let err = "navigation: unable to get metadata"
        if (location.hostname !== "analogdevicesinc.github.io")
          console.log(`${err} (expected for local and offline installs)`)
        else
          console.warn(err)
        return
      }

      return response.json()
    }).then((json) => {
      if (!json)
        return

      if ('repotoc' in json) {
        this.reactRepoToc(json['repotoc'])
      }
    })
  }
  reactRepoToc (obj) {
    let $ = this.$

    let home = "index.html"
    let links = []
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

          links.push(a.$)
        }
      } else {
        let a = new DOM('a', {
          'href': `${base}${home}`,
          'className': this.repo[0] === key ? 'current' : ''
        })
        a.innerText = value['name']
        links.push(a.$)
      }
    }

    if ($.repotocTreeOverlay.$)
      $.repotocTreeOverlay.removeChilds(),
      $.repotocTreeOverlay.append(links)
    if ($.repotocTreeSidebar.$)
      $.repotocTreeSidebar.removeChilds(),
      $.repotocTreeOverlay.append(links)
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
