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
    hot_reload.load(link.href, false)
  }

  sync_theme () {
    const classes = document.body.classList
    const scheme = classes.contains('dark') ? 'dark' :
      classes.contains('light') ? 'light' :
      this.os_theme.matches ? 'dark' : 'light'
    const dark = scheme === 'dark'
    const background = dark ? '#101820' : '#FFFFFF'
    const foreground = dark ? '#FFFFFF' : '#1668b3'
    const config = {
      'data-color-scheme': scheme,
      'data-modal-header-bg-color': background,
      'data-modal-title-color': foreground,
    }
    if (this.logo_svg) {
      const color = scheme === 'dark' ? '#FFFFFF' : '#1668b3'
      const svg = this.logo_svg.replace('fill="currentColor"', `fill="${color}"`)
      config['data-project-logo'] = `data:image/svg+xml,${encodeURIComponent(svg)}`
    }
    if (this.script.dataset.colorScheme === scheme &&
        (!this.logo_svg || this.script.dataset.projectLogo === config['data-project-logo']))
      return

    for (const [name, value] of Object.entries(config))
      this.script.setAttribute(name, value)
    window.Kapa?.updateConfig?.(config)
  }

  async load_logo () {
    const response = await fetch(this.script.dataset.projectLogo)
    this.logo_svg = await response.text()
    this.sync_theme()
  }

  watch_theme () {
    this.os_theme = window.matchMedia('(prefers-color-scheme: dark)')
    this.sync_theme()
    this.theme_observer = new MutationObserver(() => this.sync_theme())
    this.theme_observer.observe(document.body, {attributes: true, attributeFilter: ['class']})
    this.os_theme.addEventListener('change', () => this.sync_theme())
  }

  create_launcher () {
    const button = document.createElement('button')
    button.id = 'ask-ai'
    button.className = 'icon'
    button.type = 'button'
    button.title = 'Ask AI'
    button.setAttribute('aria-label', 'Ask AI')
    button.setAttribute('aria-expanded', 'false')
    button.setAttribute('aria-controls', 'kapa-modal-content')
    window.Kapa('onModalOpen', () => button.setAttribute('aria-expanded', 'true'))
    window.Kapa('onModalClose', () => button.setAttribute('aria-expanded', 'false'))
    button.addEventListener('click', () => {
      if (button.getAttribute('aria-expanded') === 'true')
        window.Kapa.close()
      else
        window.Kapa.open()
    })
    document.querySelector('header #search').after(button)
  }

  style_sidebar () {
    const root = document.getElementById('kapa-widget-container').shadowRoot
    const style = document.createElement('style')
    style.textContent = `
      .mantine-Modal-inner {
        left: var(--llm-sidebar-left, 0px) !important;
        right: auto !important;
        width: var(--llm-sidebar-width, 100vw) !important;
        padding: 0 !important;
      }
      .mantine-Modal-content {
        box-shadow: none !important;
        flex: 0 0 100% !important;
        width: 100% !important;
        max-width: 100% !important;
      }
      .mantine-Modal-close {
        display: var(--llm-close-display, inline-flex) !important;
      }
      .mantine-Modal-header [role="button"][aria-expanded] .mantine-Text-root {
        text-wrap: nowrap;
        font-size: .8em !important;
      }
      .mantine-Modal-header {
        box-sizing: border-box;
        height: 3.5rem !important;
        min-height: 3.5rem !important;
        max-height: 3.5rem !important;
      }
    `
    root.appendChild(style)
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
    script.dataset.projectLogo = 'https://cdn.jsdelivr.net/npm/remixicon@4.9.1/icons/Logos/bard-line.svg'
    script.dataset.botProtectionMechanism = 'hcaptcha'
    script.dataset.viewMode = 'sidebar'
    script.dataset.modalWithOverlay = 'false'
    script.dataset.modalLockScroll = 'false'
    script.dataset.modalFullScreenOnMobile = 'false'
    script.dataset.modalTitle = 'AI Assistant'
    script.dataset.modalTransition = 'slide-left'
    script.dataset.modalTransitionDuration = '150'
    script.dataset.modalDisclaimer = 'Answers are AI-generated with access to developer documentation.'
    script.dataset.buttonHide = 'true'
    script.dataset.modalHeaderBgColor = '#FFFFFF'
    script.dataset.modalTitleColor = accentColor
    script.dataset.mcpEnabled = 'true'
    script.dataset.mcpServerUrl = 'https://analog.mcp.kapa.ai'
    script.addEventListener('load', () => {
      this.create_launcher()
      this.style_sidebar()
    }, {once: true})
    document.addEventListener('click', ev => this.navigate_link(ev), {capture: true})
    this.script = script
    this.watch_theme()
    this.load_logo()
    document.head.appendChild(script)
  }
}
