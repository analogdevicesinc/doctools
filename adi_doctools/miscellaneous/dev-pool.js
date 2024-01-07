/*
 * Author Mode, reload webpage on changes.
 * Browser agnostic alternative to the selenium mode.
 * This is an exceptional asset that gets inject to
 * the html regardless of the theme.
 */

/* Global variable to store timestamp and interval handler */
var poolTimestamp;
var poolInterval;

/**
 * Pool changes, return a text on success and true on error.
 */
class PoolChanges {
  /**
   * Do a Fetch request, the sent object is implicitly converted to text.
   * @param {string} url - URL to file.
  */
  static async do (url){
    const response = await fetch(url)

    if (!response.ok)
      throw new Error(response.status)
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
      if (this.poolTimestamp < Number(obj))
        location.reload()
    }).catch(e => {
        console.error("File .dev-pool was removed, pooling interface disabled.")
        clearInterval(this.poolInterval)
    })
  }, 1000)
}).catch(e => {
  console.log("File .dev-pool is absent, pooling interface disabled.")
})
