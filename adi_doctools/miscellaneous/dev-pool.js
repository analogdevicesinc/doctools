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
  static async search (urls) {
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
}
/*
 * Serve watch mode, reload webpage on changes.
 * Alternative to selenium.
 */
PoolChanges.search(PoolChanges.get_paths()).then(obj => {
  const [url, obj_] = obj
  if (!url) {
    console.log("File .dev-pool is absent, pooling interface disabled.")
    return
  }
  do_pool = () => {
    PoolChanges.do(url).then(obj => {
      obj = obj.split("\n")
      if (this.pool_timestamp < Number(obj[0])) {
        url_ = new URL(url, location.origin)
        url_ = new URL(obj[1], url_)
        pool_preserve_scroll = true
        if (document.visibilityState === 'visible' && obj[1] !== "")
          location.href = url_
        else
          location.reload()
      }
      setTimeout(do_pool, 500)
    }).catch(e => {
      if (e.statusText === "File not found") {
        console.error(`${e.statusText}: File ${url} was removed, pooling interface disabled.`)
      } else {
        if (e.name !== last_error_name) {
          console.log(`${e.name}: Failed to fetch ${url}, but still trying.`)
          last_error_name = e.name
        }
        setTimeout(do_pool, 500)
      }
    })
  }

  console.log(`File ${url} is present, pooling interface enabled.`)
  pool_timestamp = Number(obj_.split("\n")[0])
  setTimeout(do_pool, 500)
})
