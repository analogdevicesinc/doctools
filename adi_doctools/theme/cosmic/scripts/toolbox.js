"use strict";

export {Toolbox}

/**
 * Provides useful generic functions.
 */
class Toolbox {
 /**
  * Generate a unique identifier.
  */
  static UID (){
    return this.randomChar() + (+new Date).toString(36) + Math.random().toString(36).substring(3)
  }
 /**
  * Generate a small non-timed identifier.
  */
  static SID (){
    return this.randomChar() + (Math.random()).toString(36).substring(3,8)
  }
  /**
   * Return param from url search parami, if unset, return the default.
   * @param {string} _param - Parameter to search in the array.
   * @return Requested parameter.
   */
  static fromUrl (_param){
    let param = new URLSearchParams(document.location.search)
    return param.get(_param) == null ?
      this.urlDefaults(_param) : this.urlValidParams(_param, param.get(_param))
  }
  /**
   * Default url parameters values if not set
   * @param {string} _param - Parameter to return the default.
   * @return Default parameter.
   */
  static urlDefaults (_param){
    switch (_param) {
      case 'theme':
        return 'light'
    }
  }
  /**
   * Valid parameters, if a invalid is passed, will return the default.
   */
  static urlValidParams (_param, value){
    switch (_param) {
      case 'theme':
        return ['dark', 'light'].includes(value) ? value : this.urlDefaults(_param)
    }
  }
}
