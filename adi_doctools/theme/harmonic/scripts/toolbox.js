"use strict";

export {Toolbox}

/**
 * Provides useful generic functions.
 */
class Toolbox {
  /**
   * Get random char.
   */
  static randomChar () {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }
 /**
  * Generate a unique identifier.
  */
  static UID () {
    return this.randomChar() + (+new Date).toString(36) + Math.random().toString(36).substring(3)
  }
 /**
  * Generate a small non-timed identifier.
  */
  static SID () {
    return this.randomChar() + (Math.random()).toString(36).substring(3,8)
  }
  /**
   * Return param from url search parami, if unset, return the default.
   * @param {string} _param - Parameter to search in the array.
   * @return Requested parameter.
   */
  static fromUrl (_param) {
    let param = new URLSearchParams(document.location.search)
    return param.get(_param) == null ?
      this.urlDefaults(_param) : this.urlValidParams(_param, param.get(_param))
  }
  /**
   * Default url parameters values if not set
   * @param {string} _param - Parameter to return the default.
   * @return Default parameter.
   */
  static urlDefaults (_param) {
    switch (_param) {
      case 'theme':
        return 'light'
    }
  }
  /**
   * Valid parameters, if a invalid is passed, will return the default.
   */
  static urlValidParams (_param, value) {
    switch (_param) {
      case 'theme':
        return ['dark', 'light'].includes(value) ? value : this.urlDefaults(_param)
    }
  }
  static cleanPathname (_pathname) {
    return _pathname.replace(/([^:]\/)\/+/g, "$1").replace(/[^:]\.\//g, "$1")
  }
  /**
   * Get the depth of a path name.
   */
  static getDepth (_pathname) {
    return (_pathname.match(/\//g)||[]).length
  }
  /*
   * Check if link exists, if not, redirect to second option.
   */
  static async try_redirect (url, fallback_url, new_tab) {
    let url_
    try {
      const response = await fetch(url, {
        method: 'HEAD'
      })

      if (response.status === 404)
        url_ = fallback_url
      else
        url_ = url
    } catch (e) {
      url_ = fallback_url
    }
    if (!url_)
      return true
    if (new_tab)
      window.open(url_, '_blank').focus()
    else
      location.href = url_
    return false
  }
  /*
   * Check if the raw content is only a include directive.
   * If yes, resolve its path and redirect to it.
   */
  static async try_include (url_raw, url, new_tab) {
    let fallback = (error) => {
      if (new_tab)
        window.open(url, '_blank').focus()
      else
        location.href = url
    }
    const request = new Request(url_raw)
    await fetch (request)
      .then(
        (response) => {
          if (!response.ok)
            throw new Error(response.status)
          return response.text()
        })
      .then((text) => {
        text = text.replace(/\n+$/, "")
        if (text.startsWith(".. include:: ") && text.split(/\n/).length == 1) {
          text = text.substring(13)
          if (new_tab)
            window.open(new URL(text, url).href, '_blank').focus()
          else
            location.href = new URL(text, url).href
        } else {
          fallback()
        }
      })
      .catch(fallback)
    return
  }
  /*
   * Try to fetch every item in array.
   */
  static async fetch_each (urls) {
    if (!Array.isArray(urls))
      urls = [urls]

    for (let url of urls) {
      try {
        const request = new Request(url)
        const response = await fetch(request)

        if (response.ok === true)
          return {'obj': await response.json(), 'url': url}
        else if (response.status !== 404)
          return {'error': response, 'url': url}
      } catch (error) {
        return {'error': error, 'url': url}
      }
    }
    return {'error': `No url returned a valid JSON, urls: ${urls}`}
  }
  /*
   * Return alphanumeric sequence. Can be us used for shortcuts.
   */
  static get_alphanumeric () {
    const numbers = [...Array(9).keys(), -1].map(n => (n + 1).toString())
    const alphabet = [...Array(26).keys()].map(n => String.fromCharCode(97 + n))
    return numbers.concat(alphabet)
  }
  /*
   * Lazy method to await condition,
   * useful for:
   *   await waitUntil(() => this.parent.state.metadata !== undefined)
   * When testing parts of extra.js temporally under app.js
   */
  static waitUntil = (condition, checkInterval=100) => {
    return new Promise(resolve => {
      let interval = setInterval(() => {
        if (!condition()) return;
        clearInterval(interval);
        resolve();
      }, checkInterval)
    })
  }
  static reducedMotion = () => {
    return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches == true
  }
}
