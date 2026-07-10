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
    this.didDrag = false
    this.startX = 0
    this.startY = 0
    this.startTx = 0
    this.startTy = 0

    this._onKey = (e) => { if (e.key === 'Escape') this.close() }
    this._onMove = (e) => { this.onMove(e) }
    this._onDown = (e) => { this.onDown(e) }
    this._onUp = (e) => { this.onUp(e) }
    this._onWheel = (e) => { this.onWheel(e) }

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
      if (!this.didDrag) this.close()
    })
    this.overlay.addEventListener('mousedown', this._onDown)
    this.overlay.addEventListener('wheel', this._onWheel, {passive: false})

    document.addEventListener('mousemove', this._onMove)
    document.addEventListener('mouseup', this._onUp)

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

    this.overlay.removeEventListener('mousedown', this._onDown)
    this.overlay.removeEventListener('wheel', this._onWheel)
    document.removeEventListener('keydown', this._onKey)
    document.removeEventListener('mousemove', this._onMove)
    document.removeEventListener('mouseup', this._onUp)

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
  }
  clampTranslation () {
    let pad = 64
    let vw = window.innerWidth, vh = window.innerHeight
    let bl = parseFloat(this.clone.style.left)
    let bt = parseFloat(this.clone.style.top)
    let bw = parseFloat(this.clone.style.width)
    let bh = parseFloat(this.clone.style.height)
    let s = this.scale

    // Rendered image edges given current tx/ty
    let imgL = bl + this.tx + bw * (1 - s) / 2
    let imgT = bt + this.ty + bh * (1 - s) / 2
    let imgR = imgL + bw * s
    let imgB = imgT + bh * s

    // Image rect must overlap the padded viewport
    if (imgR < pad)      this.tx += pad - imgR
    if (imgL > vw - pad) this.tx -= imgL - (vw - pad)
    if (imgB < pad)      this.ty += pad - imgB
    if (imgT > vh - pad) this.ty -= imgT - (vh - pad)
  }
  applyTransform () {
    this.clampTranslation()
    this.clone.style.transform =
      'translate(' + this.tx + 'px,' + this.ty + 'px) scale(' + this.scale + ')'
  }
  onWheel (e) {
    e.preventDefault()
    this.clone.style.transition = 'none'
    let d = e.deltaY > 0 ? 0.9 : 1.1
    let newScale = Math.min(Math.max(this.scale * d, 0.5), 10)
    let realD = newScale / this.scale

    // Cursor position relative to the element's transform origin (center)
    let rect = this.clone.getBoundingClientRect()
    let ox = rect.left + rect.width / 2
    let oy = rect.top + rect.height / 2
    let cx = e.clientX - ox
    let cy = e.clientY - oy

    // Blend: full cursor-anchored zoom when pointer is on the image,
    // fading to center-anchored zoom as the pointer moves away
    let hw = rect.width / 2, hh = rect.height / 2
    let fx = hw > 0 ? Math.max(0, 1 - Math.abs(cx) / hw) : 0
    let fy = hh > 0 ? Math.max(0, 1 - Math.abs(cy) / hh) : 0
    let f = fx * fy
    let ax = cx * f, ay = cy * f

    this.tx = ax + realD * (this.tx - ax)
    this.ty = ay + realD * (this.ty - ay)
    this.scale = newScale
    this.applyTransform()
  }
  onDown (e) {
    if (e.button !== 0) return
    if (this.overlay.classList.contains('is-dragging'))
      return
    e.preventDefault()
    this.didDrag = false
    this.dragging = true
    this.clone.style.transition = 'none'
    this.startX = e.clientX; this.startY = e.clientY
    this.startTx = this.tx; this.startTy = this.ty
    this.overlay.classList.add('is-dragging')
  }
  onMove (e) {
    if (!this.dragging) return
    this.tx = this.startTx + (e.clientX - this.startX)
    this.ty = this.startTy + (e.clientY - this.startY)
    this.applyTransform()
  }
  onUp (e) {
    if (!this.overlay.classList.contains('is-dragging'))
      return
    let dx = Math.abs(this.tx - this.startTx)
    let dy = Math.abs(this.ty - this.startTy)
    this.didDrag = dx > 3 || dy > 3
    this.dragging = false
    if (this.clone) this.overlay.classList.remove('is-dragging')
  }
  attach () {
    let body = DOM.get('.bodywrapper .body')
    if (!body) return
    DOM.getAll('img', body).forEach((img) => {
      let target = img.closest('a')
      if (target === null)
        target = img
      target.addEventListener('click', (e) => {
        e.preventDefault()
        this.open(img)
      })
    })
  }
  construct () {
    this.attach()
  }
  deinit () {
    this.close()
  }
  init () {
    this.attach()
  }
}
