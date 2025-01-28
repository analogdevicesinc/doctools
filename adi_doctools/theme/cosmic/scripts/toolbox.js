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
   *
   */
  static cache_check (state, fetch_url, hours, callback) {
    let json = localStorage.getItem(fetch_url)
    if (json !== null)
      json = JSON.parse(json)

    let cache_timeout = new Date(0)
    cache_timeout.setHours(hours)
    if (state.reloaded === true || json === null || json['timestamp'] + cache_timeout.valueOf() < Date.now()) {
      fetch(fetch_url, {
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

        json = {'obj': obj}
        json['timestamp'] = Date.now()
        callback(obj)
        localStorage.setItem(fetch_url, JSON.stringify(json))
      }).catch((e) => {
        console.error(`Failed to resolve ${fetch_url}, due to:`, e)
        return
      })
    } else {
      callback(json['obj'])
    }
  }
}
