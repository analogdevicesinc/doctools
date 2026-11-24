"use strict";
import {DOM} from './dom.js'

const adi = 'https://www.analog.com/en/'
const columns = [
  ['About Analog Devices', [
    ['Analog.com', 'https://www.analog.com'],
    ['EngineerZone', 'https://ez.analog.com/'],
    ['Signals +', `${adi}signals.html`],
    ['Analog Dialogue', `${adi}resources/analog-dialogue.html`],
  ]],
  ['Find Help', [
    ['Support', `${adi}support.html`],
    ['EngineerZone', 'https://ez.analog.com/'],
    ['Resources', `${adi}resources.html`],
  ]],
]
const legal = [
  ['Legal and Risk', `${adi}who-we-are/legal-and-risk-oversight.html`],
  ['Accessibility', `${adi}who-we-are/legal-and-risk-oversight/accessibility-statement.html`],
  ['Privacy Policy', `${adi}who-we-are/legal-and-risk-oversight/data-privacy/privacy-policy.html`],
  ['Privacy Settings', `${adi}lp/001/privacy-settings.html`],
]

const link = ([innerText, href], className = '') => DOM.new('a', {innerText, href, className})
const nav = (className, label, items) => {
  const el = DOM.new('nav', {className})
  el.setAttribute('aria-label', label)
  el.append(...items)
  return el
}

export class Footer {
  constructor (app) {
    const footer = document.querySelector('body > footer')
    if (!footer || app.state.standalone)
      return
    app.footer = this

    const text = [...footer.childNodes].find(n => n.nodeType === Node.TEXT_NODE && n.data.includes('Made with'))
    const credits = []
    if (text) {
      text.data = text.data.slice(text.data.indexOf('Made with'))
      for (let n = text; n; n = n.nextSibling)
        credits.push(n)
    }

    const logo = link(['', 'https://developer.analog.com/'], 'logo')
    logo.setAttribute('aria-label', 'ADI Developer')
    const join = DOM.new('div', {className: 'column'})
    join.append(
      DOM.new('div', {className: 'title', innerText: 'myAnalog'}),
      DOM.new('p', {innerText: 'Interested in the latest news and articles about ADI products, design tools, training, and events?'}),
      link(['Go to myAnalog', 'https://my.analog.com/'], 'button')
    )
    const main = DOM.new('div', {className: 'main'})
    main.append(logo, ...columns.map(([title, links]) => nav('column', title, [
      DOM.new('div', {className: 'title', innerText: title}), ...links.map(l => link(l))
    ])), join)

    const copyright = DOM.new('p', {
      innerText: `©${new Date().getFullYear()} Analog Devices, Inc. All Rights Reserved`
    })
    if (credits.length)
      copyright.append(' | ', ...credits)
    const bottom = DOM.new('div', {className: 'bottom'})
    bottom.append(nav('legal', 'Legal', legal.map(l => link(l))), copyright)

    footer.replaceChildren(main, bottom)
    footer.classList.add('portal')
    this.inset(footer)
  }

  inset (footer) {
    const update = () => requestAnimationFrame(() => {
      const px = Math.max(0, innerHeight - footer.getBoundingClientRect().top)
      document.documentElement.style.setProperty('--footer-inset', `${Math.round(px)}px`)
    })
    addEventListener('scroll', update, {passive: true})
    addEventListener('resize', update, {passive: true})
    new ResizeObserver(update).observe(document.body)
  }
}
