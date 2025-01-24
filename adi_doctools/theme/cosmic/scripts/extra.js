/*
 * Template of extra module that could be added
 * to lut.py and ci/rollup.config.app.mjs
 *
 * This is not compiled!
 */

import { search } from './search.js'

export default function Extra (){
  /**
   * Attach extra modules here.
   */
   app.search = search
   app.search.init()
}

Extra()
