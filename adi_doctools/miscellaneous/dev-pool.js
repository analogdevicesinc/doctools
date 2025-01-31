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
      signal: AbortSignal.timeout(250),
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
    for (const url of urls) {
      try {
        const response = await fetch(url, {
          signal: AbortSignal.timeout(250),
          cache: "no-store"
        })

        if (response.ok)
          return [url, await response.text()]
      } catch (e) {}
    }

    return [null, null]
  }
}
/*
 * Serve watch mode, reload webpage on changes.
 * Alternative to selenium.
 */
PoolChanges.search(PoolChanges.get_paths()).then(obj => {
  const [url, timestamp] = obj

  if (!url) {
    console.log("File .dev-pool is absent, pooling interface disabled.")
    return
  }

  console.log(`File ${url} is present, pooling interface enabled.`)
  pool_timestamp = Number(timestamp)
  pool_interval = setInterval(() => {
    PoolChanges.do(url).then(obj => {
      if (this.pool_timestamp < Number(obj)) {
        location.reload()
      }
    }).catch(e => {
      if (e.statusText === "File not found") {
        console.error(`${e.statusText}: File ${url} was removed, pooling interface disabled.`)
        clearInterval(this.pool_interval)
      } else {
        if (e.name !== last_error_name) {
          console.log(`${e.name}: Failed to fetch ${url}, but still trying.`)
          last_error_name = e.name
        }
      }
    })
  }, 500)
})
