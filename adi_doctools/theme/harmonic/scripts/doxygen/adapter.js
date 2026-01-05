"use strict";

export class Adapter {
  constructor (app) {
    this.parent = app

    this.html = document.documentElement
    this.observer = null

    this.construct()
  }

  sync () {
    if (document.documentElement.classList.contains('dark-mode')) {
      document.body.classList.add('dark')
      document.body.classList.remove('light')
      return
    }

    if (document.documentElement.classList.contains('light-mode')) {
      document.body.classList.add('light')
      document.body.classList.remove('dark')
    }
  }

  watch () {
    this.observer = new MutationObserver(mutations => {
      for (const m of mutations) {
        if (m.type === 'attributes' && m.attributeName === 'class') {
          this.sync()
        }
      }
    })

    this.observer.observe(this.html, {
      attributes: true,
      attributeFilter: ['class'],
    })
  }

  construct () {
    this.sync()
    this.watch()
  }
}

