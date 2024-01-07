"use strict";

import {DOM} from './dom.js'
import {Toolbox} from './toolbox.js'

/* Update GUI based on resize event */
function handleResize (){
  navigation.portrait = window.innerHeight > window.innerWidth ? true : false
}
/* Handle navigation, specially the hamburguer menu */
class Navigation {
  constructor (){
    this.portrait = false
    this.isLocal = 'file:' == window.location.protocol
    this.prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)")
    this.currentTheme = localStorage.getItem('theme')

    let $ = this.$ = {}
    $.body = new DOM(DOM.get('body'))
    $.header = new DOM(DOM.get('header'))
    $.nav = new DOM(DOM.get('.sphinxsidebar'))
    $.toctree = new DOM(DOM.get('.sphinxsidebarwrapper'))
    $.nav.id = "panel"

    if (this.currentTheme === null)
        this.currentTheme = this.prefersDarkTheme.matches ? 'dark' : 'light'
    $.body.classList.add(
        this.currentTheme === 'dark' ? 'dark' : 'light',
        "js-on"
    )

    $.showSidebar = new DOM('button', {id:"show-sidebar"}).onclick(this, () => {
      DOM.switchState(this.$.nav)
      DOM.switchState(this.$.showSidebar)
    })
    $.showOnThisPage = new DOM('button', {id:"show-on-this-page"}).onclick(this, () => {
      // TODO show on this page sidebar
      //DOM.switchState(this.$.nav)
      DOM.switchState(this.$.showOnThisPage)
    })
    $.changeTheme = new DOM('button', {
        className: this.currentTheme === 'dark' ? 'icon on' : 'icon',
        id:'theme',
      }).onclick(this, () => {
        $.body.classList.remove(this.currentTheme)
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark'
        localStorage.setItem('theme', this.currentTheme)
        $.body.classList.add(this.currentTheme)
      })

    $.header.append([$.showSidebar, $.showOnThisPage, $.changeTheme])
  }
  /**
   * Init navigation.
   */
  init () {
    onresize = () => {handleResize()}
  }
}

export let navigation = new Navigation()
