"use strict";

/** Load the AI assistant. */
export class LLM {
  constructor (app) {
    this.parent = app
    this.script = undefined
    app.llm = this

    if (location.hostname === 'developer.analog.com')
      window.addEventListener('OneTrustGroupsUpdated', () => this.construct())
    this.construct()
  }

  has_functional_consent () {
    if (location.hostname === 'developer.analog.com') {
      let cookie = document.cookie.split('; ').find(cookie =>
        cookie.startsWith('OptanonConsent=')
      )
      if (!cookie) return false

      let params = new URLSearchParams(cookie.slice('OptanonConsent='.length))
      return params.get('groups')?.split(',').includes('C0003:1') ?? false
    }

    return false
  }

  navigate_link (ev) {
    const hot_reload = this.parent.hot_reload
    if (!hot_reload || ev.defaultPrevented || ev.button !== 0 ||
        ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey)
      return

    const path = ev.composedPath()
    if (!path.some(node => node.id === 'kapa-widget-container'))
      return
    const link = path.find(node => node.matches?.('a[href]'))
    if (!link || link.hasAttribute('download') ||
        (link.target && !['_self', '_blank'].includes(link.target)))
      return

    const url = new URL(link.href)
    if (url.origin !== location.origin ||
        (/\.[^/]+$/.test(url.pathname) && !url.pathname.endsWith('.html')))
      return
    if (!hot_reload.toc_get(url) && !hot_reload.is_known_doc?.(url))
      return

    ev.preventDefault()
    window.Kapa?.close?.()
    hot_reload.load(link.href, false)
  }

  construct () {
    if (this.script || !this.has_functional_consent())
      return

    const accentColor = '#1668b3'
    let script = document.createElement('script')
    script.id = 'kapa-widget-script'
    script.async = true
    script.src = 'https://widget.kapa.ai/kapa-widget.bundle.js'
    script.dataset.websiteId = '48c61e30-2cf1-4f06-82d4-f0736bd4040d'
    script.dataset.projectName = 'ADI Developer'
    script.dataset.projectColor = accentColor
    script.dataset.projectLogo = 'https://developer.analog.com/docs/system-level/_static/icon.svg'
    script.dataset.botProtectionMechanism = 'hcaptcha'
    script.dataset.modalTitle = 'LLM Assistant'
    script.dataset.modalDisclaimer = 'Answers are AI-generated with access to developer documentation.'
    script.dataset.buttonBgColor = '#FFFFFF'
    script.dataset.buttonHoverBgColor = '#FFFFFF'
    script.dataset.buttonAnimationEnabled = 'false'
    script.dataset.buttonHoverAnimationEnabled = 'false'
    script.dataset.buttonTextColor = accentColor
    script.dataset.modalHeaderBgColor = '#FFFFFF'
    script.dataset.modalTitleColor = accentColor
    script.dataset.mcpEnabled = 'true'
    script.dataset.mcpServerUrl = 'https://analog.mcp.kapa.ai'
    document.addEventListener('click', ev => this.navigate_link(ev), {capture: true})
    document.head.appendChild(script)
    this.script = script
  }
}
