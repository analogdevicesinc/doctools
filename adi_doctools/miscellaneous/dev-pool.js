/*
 * Author Mode, reload webpage on changes.
 * Browser agnostic alternative to the selenium mode.
 * This is an exceptional asset that gets inject to
 * the html regardless of the theme.
 */

/* Global variable to store timestamp and interval handler */
var poolTimestamp
var poolInterval
/* Keep track of last error to reduce log clutter */
var lastErrorName

/**
 * Pool changes, return a text on success and true on error.
 */
class PoolChanges {
  /**
   * Do a Fetch request, the sent object is implicitly converted to text.
   * @param {string} url - URL to file.
  */
  static async do (url){
    const response = await fetch(url, {
      signal: AbortSignal.timeout(250),
      cache: "no-store"
    })

    if (!response.ok)
      return Promise.reject(response)
    return await response.text()
  }
}

/*
 * Author Mode, reload webpage on changes.
 * Alternative to selenium.
 */
PoolChanges.do('/.dev-pool').then(obj => {
  console.log("File .dev-pool is present, pooling interface enabled.")
  poolTimestamp = Number(obj)
  poolInterval = setInterval(() => {
    PoolChanges.do('/.dev-pool').then(obj => {
      if (this.poolTimestamp < Number(obj)) {
        location.reload()
      }
    }).catch(e => {
      if (e.statusText === "File not found") {
        console.error(`${e.statusText}: File .dev-pool was removed, pooling interface disabled.`)
        clearInterval(this.poolInterval)
      } else {
        if (e.name !== lastErrorName) {
          console.log(`${e.name}: Failed to fetch .dev-pool, but still trying.`)
          lastErrorName = e.name
        }
      }
    })
  }, 500)
}).catch(e => {
  console.log("File .dev-pool is absent, pooling interface disabled.")
})
