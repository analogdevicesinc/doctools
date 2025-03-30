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
  static async try_redirect (url, fallback_url) {
    try {
      const response = await fetch(url, {
        method: 'HEAD'
      })

      if (response.status === 404)
        location.href = fallback_url
      else
        location.href = url
    } catch (e) {
      location.href = fallback_url
    }
    return
  }
  /*
   * Try to fetch every item in array.
   */
  static async fetch_each (urls) {
    for (let url of urls) {
      try {
        const response = await fetch(url, {
          method: 'Get',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (response.ok === true)
          return {'obj': await response.json(), 'url': url};
        else if (response.status !== 404)
          return {'error': response, 'url': url}
      } catch (e) {
        return {'error': e, 'url': url}
      }
    }

    return {'error': `No url returned a valid JSON, urls: ${urls}`}
  }
  static cache_check (state, fetch_url, hours, callback) {
    if (!Array.isArray(fetch_url))
      fetch_url = [fetch_url]

    let cache_key = fetch_url[0]
    let json = localStorage.getItem(cache_key)
    if (json !== null)
      json = JSON.parse(json)

    let cache_timeout = new Date(0)
    cache_timeout.setHours(hours)
    if (state.reloaded === true || json === null || json['timestamp'] + cache_timeout.valueOf() < Date.now()) {
      Toolbox.fetch_each(fetch_url).then((json) => {
        if ('error' in json) {
          console.error(`Failed to fetch resource, due to:`, json['error'])
          return
        }

        json['timestamp'] = Date.now()
        callback(json)
        localStorage.setItem(cache_key, JSON.stringify(json))
      })
    } else {
      callback(json)
    }
  }
}
