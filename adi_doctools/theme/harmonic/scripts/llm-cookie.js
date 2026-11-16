"use strict"

/**
 * Cookie consent of the chat backends.
 */
const ONETRUST_HOST = 'developer.analog.com'
const FUNCTIONAL = 'C0003:1'

export function hasKapaConsent () {
  if (location.hostname !== ONETRUST_HOST)
    return true
  const cookie = document.cookie.split('; ').find(c => c.startsWith('OptanonConsent='))
  if (!cookie)
    return false
  const groups = new URLSearchParams(cookie.slice('OptanonConsent='.length)).get('groups')
  return groups?.split(',').includes(FUNCTIONAL) ?? false
}

let onGranted = null
let listening = false

export function requestKapaConsent (callback) {
  if (!listening) {
    listening = true
    window.addEventListener('OneTrustGroupsUpdated', () => {
      if (!onGranted || !hasKapaConsent())
        return
      const granted = onGranted
      onGranted = null
      granted()
    })
  }
  onGranted = callback
  window.OneTrust?.ToggleInfoDisplay?.()
}
