"use strict";

import {DOM} from './dom.js'
import {Toolbox} from './toolbox.js'

/* Update GUI based on resize event */
function handleResize (){
  navigation.portrait = window.innerHeight > window.innerWidth ? true : false
}
/* Handle navigation, theming */
class Navigation {
    constructor (){
    this.portrait = false
    this.isLocal = 'file:' == window.location.protocol
    this.currentTheme = localStorage.getItem('theme')

    let $ = this.$ = {}
    $.body = new DOM(DOM.get('body'))

    if (this.currentTheme === null)
      this.currentTheme = this.getOSTheme()
    $.body.classList.add('js-on')
    if (this.currentTheme !== this.getOSTheme())
      $.body.classList.add(this.currentTheme)

	$.changeTheme = new DOM('button', {
      className: this.currentTheme === 'dark' ? 'icon on' : 'icon',
      id:'theme',
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
    $.rightHeader = new DOM(DOM.get('.header #right span')).append([$.changeTheme])
  }
  /**
   * Init navigation.
   */
  init () {
    onresize = () => {handleResize()}
  }
  /**
   * Set items state.
   * @param state - True for open, false for closed.
   */
  setState (items, state) {
    console.log(items)
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
    console.log(window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light')
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'
  }
}

export let navigation = new Navigation()
