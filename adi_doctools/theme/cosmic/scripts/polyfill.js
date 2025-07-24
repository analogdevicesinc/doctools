"use strict";

/**
 * Polyfill context for older versions.
 */
export class Polyfill {
  constructor (app) {
    /* polyfill < v0.4.11 */
    if (Object.hasOwn(app.state, 'sub_hosted')) {
      app.state.subhost = app.state.sub_hosted === true ? `/${app.state.repository}` : ''
      delete app.state.sub_hosted
    }
    /* polyfill < v0.4.17 */
    if (!Object.hasOwn(app.state, 'standalone'))
        app.state.standalone =  document.querySelector('meta[name="standalone"]') ? true : false
  }
}
