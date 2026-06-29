"use strict";

import {DOM} from './dom.js'

/**
 * Image zoom for Sphinx images, elements:
 * - .body figure>a>img
 * - .body a.image-reference>img).
 */
export class Zoom {
  constructor (app) {
    this.parent = app
    this.overlay = null
    this.clone = null
    this.srcImg = null
    this.scale = 1
    this.tx = 0
    this.ty = 0
    this.dragging = false
    this.startX = 0
    this.startY = 0
    this.startTx = 0
    this.startTy = 0

    this._onKey = (e) => { if (e.key === 'Escape') this.close() }
    this._onMove = (e) => { this.onMove(e) }
    this._onUp = () => { this.onUp() }

    this.construct()

    app.zoom = this
  }
  centerRect (img) {
    let vw = window.innerWidth, vh = window.innerHeight
    let pad = 0.9
    let nat = img.naturalWidth / img.naturalHeight
    let w, h
    if (nat > vw * pad / (vh * pad)) {
      w = vw * pad; h = w / nat
    } else {
      h = vh * pad; w = h * nat
    }
    return {
      left: (vw - w) / 2,
      top: (vh - h) / 2,
      width: w,
      height: h
    }
  }
  setRect (el, r) {
    el.style.left = r.left + 'px'
    el.style.top = r.top + 'px'
    el.style.width = r.width + 'px'
    el.style.height = r.height + 'px'
  }
  open (img) {
    if (this.overlay) return
    this.srcImg = img

    let rect = img.getBoundingClientRect()

    this.overlay = DOM.new('div', {
      className: 'zoom-overlay'
    })

    let btn = DOM.new('button', {
      className: 'zoom-close',
      innerHTML: '&#x2715;'
    })
    btn.onclick = () => { this.close() }

    this.clone = DOM.new('img')
    this.clone.src = img.currentSrc || img.src
    this.clone.alt = img.alt

    this.scale = 1; this.tx = 0; this.ty = 0

    this.setRect(this.clone, rect)

    this.overlay.append(btn, this.clone)
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close()
    })
    this.clone.addEventListener('mousedown', (e) => { this.onDown(e) })
    this.clone.addEventListener('wheel', (e) => { this.onWheel(e) }, {passive: false})

    document.body.append(this.overlay)

    this.clone.offsetHeight

    this.clone.style.transition = 'left .3s, top .3s, width .3s, height .3s'
    this.overlay.classList.add('is-visible')
    this.setRect(this.clone, this.centerRect(img))
    this.srcImg.style.opacity = 0

    document.addEventListener('keydown', this._onKey)
  }
  close () {
    if (!this.overlay) return

    let cur = this.clone.getBoundingClientRect()
    let dest = this.srcImg.getBoundingClientRect()

    this.clone.style.transition = 'none'
    this.clone.style.transform = ''
    this.setRect(this.clone, cur)
    this.scale = 1; this.tx = 0; this.ty = 0

    this.clone.offsetHeight

    this.clone.style.transition = 'left .3s, top .3s, width .3s, height .3s'
    this.setRect(this.clone, dest)

    this.overlay.classList.remove('is-visible')
    this.overlay.addEventListener('transitionend', () => {
      if (this.overlay) {
        this.srcImg.style.opacity = 1
        this.overlay.remove()
        this.overlay = null
        this.clone = null
        this.srcImg = null
      }
    }, {once: true})
    document.removeEventListener('keydown', this._onKey)
    document.removeEventListener('mousemove', this._onMove)
    document.removeEventListener('mouseup', this._onUp)
  }
  applyTransform () {
    this.clone.style.transform =
      'translate(' + this.tx + 'px,' + this.ty + 'px) scale(' + this.scale + ')'
  }
  onWheel (e) {
    e.preventDefault()
    this.clone.style.transition = 'none'
    let d = e.deltaY > 0 ? 0.9 : 1.1
    this.scale = Math.min(Math.max(this.scale * d, 0.5), 10)
    this.applyTransform()
  }
  onDown (e) {
    if (e.button !== 0) return
    e.preventDefault()
    this.dragging = true
    this.clone.style.transition = 'none'
    this.startX = e.clientX; this.startY = e.clientY
    this.startTx = this.tx; this.startTy = this.ty
    this.clone.classList.add('is-dragging')
    document.addEventListener('mousemove', this._onMove)
    document.addEventListener('mouseup', this._onUp)
  }
  onMove (e) {
    if (!this.dragging) return
    this.tx = this.startTx + (e.clientX - this.startX)
    this.ty = this.startTy + (e.clientY - this.startY)
    this.applyTransform()
  }
  onUp () {
    this.dragging = false
    if (this.clone) this.clone.classList.remove('is-dragging')
    document.removeEventListener('mousemove', this._onMove)
    document.removeEventListener('mouseup', this._onUp)
  }
  attach () {
    let body = DOM.get('.bodywrapper .body')
    if (!body) return
    DOM.getAll('a.image-reference img', body).forEach((img) => {
      let a = img.closest('a')
      a.addEventListener('click', (e) => {
        e.preventDefault()
        this.open(img)
      })
    })
  }
  construct () {
    this.init()
  }
  deinit () {
    this.close()
  }
  init () {
    this.attach()
  }
}
