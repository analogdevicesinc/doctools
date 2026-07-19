"use strict";

import {DispatchEvent} from './event.js'
import {DOM} from './dom.js'

/**
 * Show domain and cookie consent popups.
 * The actions are:
 * * Development documentation warning.
 * * Fork documentation warning.
 * * Analytics cookies consent.
 */
export class Domain {
  constructor (app) {
    this.$ = {}
    this.parent = app

    if (typeof this.parent.fetch === 'object')
      this.parent.fetch.then(this.construct.bind(this))
    else
      this.construct()

    app.domain = this
    DispatchEvent("app:domain:constructed")
  }
  get_settings () {
    let settings = {}
    // Testing? comment-out below
    try {
      settings = JSON.parse(localStorage.getItem('user_settings')) || {}
    } catch (err) {
      settings = {}
    }
    if (!("domain" in settings))
      settings.domain = {}
    if (!("cookies" in settings))
      settings.cookies = {}
    return settings
  }
  set_settings (settings) {
    localStorage.setItem('user_settings', JSON.stringify(settings))
  }
  update_settings (callback) {
    let settings = this.get_settings()
    callback(settings)
    this.set_settings(settings)
  }
  init_container () {
    if (this.$.container)
      return

    this.$.container = new DOM('div', {
      'className': 'domain-popups',
    })
    document.body.appendChild(this.$.container.$)
  }
  remove_popup (popup) {
    if (this.$.container.$.classList.contains('removing'))
      return

    this.$.container.$.classList.add('removing')
    setTimeout(() => {
      popup.$.remove()
      if (this.$.container.$.children.length === 0)
        this.deinit()
      else
        this.$.container.$.classList.remove('removing')
    }, 250)
  }
  destination_url () {
    const state = this.parent.state
    const current = new URL(location.href)
    let path = ""
    if (state.offline)
      path = new URL("file://"+location.pathname).href
    else
      path = new URL(location.pathname, location.origin).href
    let base = new URL(state.content_root, path).href
    let pathname = path.substring(base.length)

    const destination = new URL(
      `${state.repository}/${pathname}`,
      state.metadata.remote_alt
    )
    destination.search = current.search
    destination.hash = current.hash
    return destination.href
  }
  make_popup (className, message, actions) {
    this.init_container()

    let popup = new DOM('div', {
      'className': `domain-popup ${className}`,
    })
    let content = new DOM('p')
    content.innerText = message

    let action_wrapper = new DOM('div', {
      'className': 'actions',
    })
    action_wrapper.append(actions)
    popup.append([content, action_wrapper])
    this.$.container.append(popup)
    return popup
  }
  make_domain_warning (type, message, setting) {
    let destination = this.destination_url()
    let ignore = new DOM('button')
    ignore.innerText = 'Ignore'
    let go = new DOM('a', {
      'href': destination,
    })
    go.innerText = `View on ${new URL(this.parent.state.metadata.remote_alt).hostname}`

    let popup = this.make_popup(`domain-${type}`, message, [ignore, go])
    ignore.onclick(this, (popup, setting) => {
      this.update_settings((settings) => {
        settings.domain[setting] = true
      })
      this.remove_popup(popup)
    }, [popup, setting])
  }
  init_domain_warning () {
    const metadata = this.parent.state.metadata
    if (!metadata)
      return

    const remote_doc = new URL(metadata.remote_doc)
    const remote_alt = new URL(metadata.remote_alt)
    const settings = this.get_settings()

    if (location.hostname === remote_doc.hostname) {
      if (settings.domain.ignore_dev === true)
        return
      this.make_domain_warning(
        'dev',
        'Development version of the documentation!',
        'ignore_dev'
      )
    } else if (location.hostname !== remote_alt.hostname) {
      if (settings.domain.ignore_fork === true)
        return
      this.make_domain_warning(
        'fork',
        'Unoficial fork of the documentation!',
        'ignore_fork'
      )
    }
  }
  init_cookie_consent () {
    const settings = this.get_settings()
    if (settings.cookies.allow !== undefined)
      return

    let no = new DOM('button')
    no.innerText = 'No'
    let yes = new DOM('button')
    yes.innerText = 'Yes'

    let popup = this.make_popup(
      'cookies',
      'Allow analytics cookies?',
      [no, yes]
    )

    no.onclick(this, (popup) => {
      this.update_settings((settings) => {
        settings.cookies.allow = false
      })
      this.remove_popup(popup)
    }, [popup])
    yes.onclick(this, (popup) => {
      this.update_settings((settings) => {
        settings.cookies.allow = true
      })
      this.remove_popup(popup)
    }, [popup])
  }
  construct () {
    this.init()
  }
  deinit () {
    if (!this.$.container)
      return

    this.$.container.$.remove()
    delete this.$.container
  }
  init () {
    this.init_cookie_consent()
    this.init_domain_warning()
  }
}
