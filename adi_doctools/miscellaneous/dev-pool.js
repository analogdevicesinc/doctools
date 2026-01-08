/*
 * Serve watch mode, reload webpage on changes.
 * Browser agnostic alternative to the selenium mode.
 * This is an exceptional asset that gets inject to
 * the html regardless of the theme.
 */

/* Global variable to store timestamp and interval handler */
var pool_timestamp
var pool_interval
/* Keep track of last error to reduce log clutter */
var last_error_name
/* Check if reload condition was triggered by pooled changes */
var pool_preserve_scroll = false

/* Hooks to restore scroll postion */
window.onload = () => {
  /* Onload because we want to scroll down after all content that may push the
   * page down loads first */
  var scrollpos = localStorage.getItem('devpool_scroll_position');
  if (scrollpos) window.scrollTo({ top: scrollpos, left: 0, behavior: "instant" })
}
window.onbeforeunload = () => {
  if (pool_preserve_scroll === true)
    localStorage.setItem('devpool_scroll_position', window.scrollY)
  else
    localStorage.removeItem('devpool_scroll_position')
}
/**
 * Pool changes, return a text on success and true on error.
 */
class PoolChanges {
  constructor () {
    let $ = this.$ = {}

    this.status_dom()
  }
  /**
   * Do a Fetch request, the sent object is implicitly converted to text.
   * @param {string} url - URL to file.
  */
  static async do (url) {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(32000),
      cache: "no-store"
    })

    if (!response.ok)
      return Promise.reject(response)
    return await response.text()
  }
  /**
   * Get path to search for .dev-pool, e.g.
   * /.dev-pool
   * /repo/.dev-pool
   * /repo/v1.0.0/.dev-pool
   */
  static get_paths () {
    let filename = ".dev-pool"
    let urls = [`/${filename}`]
    let dom = document.querySelector('meta[name="repository"]')
    if (dom !== null) {
      urls.push(`/${dom.content}/${filename}`)

      let ver_dom = document.querySelector('meta[name="version"]')
      if (ver_dom !== null) {
        urls.push(`/${dom.content}/${ver_dom.content}/${filename}`)
      }
    }
    return urls
  }
  /**
   * Find .dev-pool, on first match, return url and content.
   */
  async search (urls) {
    if ('file:' == window.location.protocol)
      return [null, null]

    const do_fetch = async (url) => {
      try {
        const response = await fetch(url, {
          signal: AbortSignal.timeout(250),
          headers: {"no-wait": ""},
          cache: "no-store"
        })

        if (response.ok)
          return [url, await response.text()]
        else
          return [null, null]
      } catch (e) {
        if (e.name === "TimeoutError" || e.name === "AbortError")
          return await do_fetch(url)
        return [null, null]
      }
    }

    for (const url of urls) {
      const ret = await do_fetch(url)
      if (ret[0] !== null)
        return ret
    }

    return [null, null]
  }
  /**
   * Add visual feedback.
   */
  status_dom () {
    let elem = document.createElement('div')
    elem.id = "dev_pool_status"
    document.body.append(elem)

    let style = document.createElement('style')
    document.head.appendChild(style)

    let sheet = style.sheet

    sheet.insertRule(`
      @keyframes pulse {
        0% {
          transform: scale(1);
          opacity: .8;
        }
        50% {
          transform: scale(.75);
          opacity: .5;
        }
        100% {
          transform: scale(1);
          opacity: .8;
        }
      }
    `, 0)

    sheet.insertRule(`
      #dev_pool_status {
        align-items: center;
        position: fixed;
        display: flex;
        bottom: .75em;
        right: .75em;
        z-index: 20;
        background-color: rgba(125, 125, 125, 0.2);
        border: 1px solid rgba(125, 125, 125, 1);
        border-radius: 1em;
        padding: .25em .5em .25em .25em;
        backdrop-filter: blur(1em);
      }`, 0)

    sheet.insertRule(`
      #dev_pool_status:before {
        width: 1em;
        height: 1em;
        display: block;
        content: '';
        border-radius: 1em;
        border: 1px solid rgba(125, 125, 125, .5);
      }
    `, 0)

    sheet.insertRule(`
      #dev_pool_status.waiting_changes:before {
        animation: pulse 2s infinite;
        background: #92befc;
      }
    `, 0)

    sheet.insertRule(`
      #dev_pool_status.waiting_changes.degraded:before {
        background: #ae4410;
      }
    `, 0)

    sheet.insertRule(`
      #dev_pool_status.disconnected:before {
        background: #c81a28;
      }
    `, 0)

    sheet.insertRule(`
      #dev_pool_status:after {
        font-size: .8em;
        font-weight: bold;
        margin-left: .25em;
        display: block;
        content: '...';
      }
    `, 0)

    sheet.insertRule(`
      #dev_pool_status.waiting_changes:after {
        content: 'Watching changes';
      }
    `, 0)

    sheet.insertRule(`
      #dev_pool_status.waiting_changes.degraded:after {
        content: 'Degraded, still watching';
      }
    `, 0)

    sheet.insertRule(`
      #dev_pool_status.disconnected:after {
        content: 'Not watching changes';
      }
    `, 0)

    this.$.state = elem
  }
}

let pool_changes = new PoolChanges()
/*
 * Serve watch mode, reload webpage on changes.
 * Alternative to selenium.
 */
pool_changes.search(PoolChanges.get_paths()).then(obj => {
  const [url, obj_] = obj
  if (!url) {
    console.log("File .dev-pool is absent, pooling interface disabled.")
    pool_changes.$.state.classList.add('disconnected')
    return
  }
  do_pool = () => {
    PoolChanges.do(url).then(obj => {
      obj = obj.split("\n")
      if (obj[1] === "@timed-out") {
        setTimeout(do_pool, 500)
        return
      }
      if (this.pool_timestamp < Number(obj[0])) {
        url_ = new URL(url, location.origin)
        url_ = new URL(obj[1], url_)
        if (Object.hasOwn(window, 'app') &&
            Object.hasOwn(app, 'hot_reload') &&
            typeof app.hot_reload.load_href === "function") {
          if (obj[1] === "@code-changed")
            location.reload()
          else
            app.hot_reload.load_href(url_)
        } else {
          pool_preserve_scroll = true
          if (document.visibilityState === 'visible' && obj[1] !== "")
            location.href = url_
          else
            location.reload()
        }
      }
      pool_changes.$.state.classList.remove('degraded')
      setTimeout(do_pool, 500)
    }).catch(e => {
      if (e.statusText === "File not found") {
        console.error(`${e.statusText}: File ${url} was removed, pooling interface disabled.`)
        pool_changes.$.state.classList.remove('waiting_changes')
        pool_changes.$.state.classList.add('disconnected')
      } else {
        if (e.name !== last_error_name) {
          console.log(`${e.name}: Failed to fetch ${url}, but still trying.`)
          pool_changes.$.state.classList.add('degraded')
          last_error_name = e.name
        }
        setTimeout(do_pool, 500)
      }
    })
  }

  console.log(`File ${url} is present, pooling interface enabled.`)
  pool_changes.$.state.classList.add('waiting_changes')
  pool_timestamp = Number(obj_.split("\n")[0])
  setTimeout(do_pool, 500)
})
