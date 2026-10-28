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
    this.annotations = null
    this.penEnabled = false
    this.stroke = null
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
    this.pinching = false
    this.startDistance = 0
    this.startScale = 1
    this.lastTouchX = 0
    this.lastTouchY = 0
    this.touchStartedOutside = false
    this.pagePinching = false
    this.attached = new WeakSet()

    this._onKey = (e) => { if (e.key === 'Escape') this.close() }
    this._onMove = (e) => { this.onMove(e) }
    this._onDown = (e) => { this.onDown(e) }
    this._onUp = (e) => { this.onUp(e) }
    this._onWheel = (e) => { this.onWheel(e) }
    this._onWheelBlock = (e) => { if (this.overlay) e.preventDefault() }
    this._onTouchStart = (e) => { this.onTouchStart(e) }
    this._onTouchMove = (e) => { this.onTouchMove(e) }
    this._onTouchEnd = (e) => { this.onTouchEnd(e) }
    this._onPagePinchMove = (e) => { this.onPagePinchMove(e) }
    this._onPagePinchEnd = (e) => { this.onPagePinchEnd(e) }

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
  open (img, options = {}) {
    if (this.overlay) return
    this.srcImg = img

    let rect = img.getBoundingClientRect()

    this.overlay = DOM.new('div', {
      className: 'zoom-overlay'
    })

    let btn = DOM.new('button', {
      className: 'zoom-close',
      type: 'button',
      title: 'Close image'
    })
    btn.setAttribute('aria-label', 'Close image')
    btn.onclick = () => { this.close() }

    let pen = DOM.new('button', {
      className: 'zoom-pen',
      type: 'button',
      title: 'Red pen'
    })
    pen.setAttribute('aria-label', 'Red pen')
    pen.setAttribute('aria-pressed', 'false')
    pen.onclick = () => {
      this.penEnabled = !this.penEnabled
      this.stroke = null
      pen.setAttribute('aria-pressed', String(this.penEnabled))
      this.overlay.classList.toggle('is-pen', this.penEnabled)
    }
    this.penEnabled = false
    this.stroke = null
    this.didDrag = false
    this.annotations = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    this.annotations.classList.add('zoom-annotations')
    this.annotations.setAttribute('aria-hidden', 'true')
    this.annotations.setAttribute('preserveAspectRatio', 'none')

    this.clone = DOM.new('img')
    this.clone.src = img.currentSrc || img.src
    this.clone.alt = img.alt
    this.clone.classList = img.classList

    this.scale = 1; this.tx = 0; this.ty = 0
    this.touchStartedOutside = false

    this.setRect(this.clone, rect)
    this.setRect(this.annotations, rect)

    this.overlay.append(this.clone, this.annotations, btn, pen)
    this.overlay.addEventListener('click', (e) => {
      if (!this.didDrag && e.target === this.overlay) this.close()
    })
    this.overlay.addEventListener('mousedown', this._onDown)
    this.overlay.addEventListener('wheel', this._onWheel, {passive: false})
    this.overlay.addEventListener('touchstart', this._onTouchStart, {passive: false})
    this.overlay.addEventListener('touchmove', this._onTouchMove, {passive: false})
    this.overlay.addEventListener('touchend', this._onTouchEnd)
    this.overlay.addEventListener('touchcancel', this._onTouchEnd)

    document.addEventListener('mousemove', this._onMove)
    document.addEventListener('mouseup', this._onUp)
    document.addEventListener('wheel', this._onWheelBlock, {passive: false, capture: true})

    document.body.append(this.overlay)

    this.clone.offsetHeight

    this.clone.style.transition = options.instant ? 'none' : 'left .3s, top .3s, width .3s, height .3s'
    this.annotations.style.transition = this.clone.style.transition
    this.overlay.classList.add('is-visible')
    let openRect = options.instant ? rect : this.centerRect(img)
    this.annotations.setAttribute('viewBox', `0 0 ${openRect.width} ${openRect.height}`)
    this.setRect(this.clone, openRect)
    this.setRect(this.annotations, openRect)
    this.srcImg.style.opacity = 0

    document.addEventListener('keydown', this._onKey)
  }
  close () {
    if (!this.overlay) return

    this.overlay.removeEventListener('mousedown', this._onDown)
    this.overlay.removeEventListener('wheel', this._onWheel)
    this.overlay.removeEventListener('touchstart', this._onTouchStart)
    this.overlay.removeEventListener('touchmove', this._onTouchMove)
    this.overlay.removeEventListener('touchend', this._onTouchEnd)
    this.overlay.removeEventListener('touchcancel', this._onTouchEnd)
    document.removeEventListener('keydown', this._onKey)
    document.removeEventListener('mousemove', this._onMove)
    document.removeEventListener('mouseup', this._onUp)
    document.removeEventListener('touchmove', this._onPagePinchMove, {capture: true})
    document.removeEventListener('touchend', this._onPagePinchEnd, {capture: true})
    document.removeEventListener('touchcancel', this._onPagePinchEnd, {capture: true})
    this.pagePinching = false

    this.stroke = null
    this.annotations.style.display = 'none'
    this.dragging = false
    this.pinching = false
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

    let didFinish = false
    let finishClose = () => {
      if (didFinish) return
      didFinish = true
      document.removeEventListener('wheel', this._onWheelBlock, {capture: true})
      if (this.overlay) {
        this.srcImg.style.opacity = 1
        this.overlay.remove()
        this.overlay = null
        this.clone = null
        this.annotations = null
        this.srcImg = null
      }
    }

    this.overlay.addEventListener('transitionend', finishClose, {once: true})
    setTimeout(finishClose, 350)
  }
  isPastCloseRegion () {
    let vw = window.innerWidth, vh = window.innerHeight
    let cx = vw / 2, cy = vh / 2
    let rect = this.clone.getBoundingClientRect()

    // Close once the image no longer overlaps the central region
    return rect.right < cx || rect.left > cx ||
      rect.bottom < cy || rect.top > cy
  }
  applyTransform () {
    let transform = 'translate(' + this.tx + 'px,' + this.ty + 'px) scale(' + this.scale + ')'
    this.clone.style.transform = transform
    this.annotations.style.transition = 'none'
    this.annotations.style.transform = transform
  }
  annotationPoint (x, y) {
    let rect = this.clone.getBoundingClientRect()
    if (!rect.width || !rect.height) return null
    let viewBox = this.annotations.viewBox.baseVal
    return {
      x: (x - rect.left) * viewBox.width / rect.width,
      y: (y - rect.top) * viewBox.height / rect.height
    }
  }
  startStroke (x, y) {
    let rect = this.clone.getBoundingClientRect()
    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) return
    let point = this.annotationPoint(x, y)
    if (!point) return
    this.stroke = document.createElementNS('http://www.w3.org/2000/svg', 'polyline')
    this.annotations.append(this.stroke)
    this.extendStroke(x, y)
    this.extendStroke(x, y)
    this.didDrag = true
  }
  extendStroke (x, y) {
    if (!this.stroke) return
    let point = this.annotationPoint(x, y)
    if (!point) return
    let svgPoint = this.annotations.createSVGPoint()
    svgPoint.x = point.x; svgPoint.y = point.y
    this.stroke.points.appendItem(svgPoint)
  }
  onWheel (e) {
    e.preventDefault()
    this.stroke = null
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

    this.tx += (1 - realD) * ax
    this.ty += (1 - realD) * ay
    this.scale = newScale
    this.applyTransform()

    if (this.scale < 1)
      this.close()
  }
  touchDistance (e) {
    return Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    )
  }
  touchMidpoint (e) {
    return {
      x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
      y: (e.touches[0].clientY + e.touches[1].clientY) / 2
    }
  }
  startTouchPan (touch) {
    this.pinching = false
    this.dragging = true
    this.clone.style.transition = 'none'
    this.startX = touch.clientX; this.startY = touch.clientY
    this.startTx = this.tx; this.startTy = this.ty
    this.overlay.classList.add('is-dragging')
  }
  openFromPagePinch (img, e) {
    e.preventDefault()
    this.open(img, {instant: true})
    if (!this.clone) return

    this.pagePinching = true
    this.startTouchPinch(e)
    document.addEventListener('touchmove', this._onPagePinchMove, {passive: false, capture: true})
    document.addEventListener('touchend', this._onPagePinchEnd, {capture: true})
    document.addEventListener('touchcancel', this._onPagePinchEnd, {capture: true})
  }
  onPagePinchMove (e) {
    if (!this.pagePinching) return
    this.onTouchMove(e)
  }
  onPagePinchEnd (e) {
    if (!this.pagePinching) return
    this.onTouchEnd(e)
    if (e.touches.length === 0) {
      this.pagePinching = false
      document.removeEventListener('touchmove', this._onPagePinchMove, {capture: true})
      document.removeEventListener('touchend', this._onPagePinchEnd, {capture: true})
      document.removeEventListener('touchcancel', this._onPagePinchEnd, {capture: true})
    }
  }
  startTouchPinch (e) {
    let mid = this.touchMidpoint(e)
    this.pinching = true
    this.dragging = false
    this.didDrag = true
    this.clone.style.transition = 'none'
    this.startDistance = this.touchDistance(e)
    this.startScale = this.scale
    this.lastTouchX = mid.x
    this.lastTouchY = mid.y
    this.overlay.classList.add('is-dragging')
  }
  onTouchStart (e) {
    if (!this.clone || e.target.closest('.zoom-close, .zoom-pen')) return
    this.touchStartedOutside = e.target === this.overlay
    if (e.touches.length === 2) {
      this.stroke = null
      e.preventDefault()
      this.touchStartedOutside = false
      this.startTouchPinch(e)
    } else if (e.touches.length === 1) {
      e.preventDefault()
      this.didDrag = false
      if (this.penEnabled) {
        this.touchStartedOutside = false
        this.startStroke(e.touches[0].clientX, e.touches[0].clientY)
      } else {
        this.startTouchPan(e.touches[0])
      }
    }
  }
  onTouchMove (e) {
    if (!this.clone) return

    if (e.touches.length === 2) {
      e.preventDefault()
      if (!this.pinching)
        this.startTouchPinch(e)

      let mid = this.touchMidpoint(e)
      let currentDistance = this.touchDistance(e)
      let scale = e.scale ? this.startScale * e.scale :
        this.startScale * (currentDistance / this.startDistance)
      let newScale = Math.min(Math.max(scale, 0.5), 10)
      let realD = newScale / this.scale

      let rect = this.clone.getBoundingClientRect()
      let ox = rect.left + rect.width / 2
      let oy = rect.top + rect.height / 2
      let cx = mid.x - ox
      let cy = mid.y - oy

      this.tx += (1 - realD) * cx + (mid.x - this.lastTouchX)
      this.ty += (1 - realD) * cy + (mid.y - this.lastTouchY)
      this.scale = newScale
      this.lastTouchX = mid.x
      this.lastTouchY = mid.y
      this.didDrag = true
      this.applyTransform()
    } else if (e.touches.length === 1 && this.stroke) {
      e.preventDefault()
      this.extendStroke(e.touches[0].clientX, e.touches[0].clientY)
    } else if (e.touches.length === 1 && this.dragging) {
      e.preventDefault()
      this.tx = this.startTx + (e.touches[0].clientX - this.startX)
      this.ty = this.startTy + (e.touches[0].clientY - this.startY)
      this.didDrag = Math.abs(this.tx - this.startTx) > 3 || Math.abs(this.ty - this.startTy) > 3
      this.applyTransform()
    }
  }
  onTouchEnd (e) {
    if (!this.clone) return

    if (this.stroke) {
      this.stroke = null
      this.touchStartedOutside = false
      return
    }
    let wasPinching = this.pinching
    if (wasPinching && this.scale < 1) {
      e.preventDefault()
      this.close()
      return
    }

    if (e.touches.length === 1) {
      e.preventDefault()
      this.pinching = false
      this.dragging = false
      this.overlay.classList.remove('is-dragging')
      if (this.penEnabled) {
        if (e.type !== 'touchcancel')
          this.startStroke(e.touches[0].clientX, e.touches[0].clientY)
      } else {
        this.startTouchPan(e.touches[0])
      }
      return
    }
    if (e.touches.length === 0) {
      let closeFromTap = this.touchStartedOutside && !this.didDrag
      let closeFromDrag = this.dragging && this.didDrag && this.isPastCloseRegion()
      this.touchStartedOutside = false
      this.pinching = false
      this.dragging = false
      this.overlay.classList.remove('is-dragging')
      if (closeFromTap || closeFromDrag)
        this.close()
    }
  }
  onDown (e) {
    if (e.button !== 0 || e.target.closest('.zoom-close, .zoom-pen')) return
    if (this.penEnabled) {
      e.preventDefault()
      this.didDrag = false
      this.startStroke(e.clientX, e.clientY)
      return
    }
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
    if (this.stroke) {
      this.extendStroke(e.clientX, e.clientY)
      return
    }
    if (!this.dragging) return
    this.tx = this.startTx + (e.clientX - this.startX)
    this.ty = this.startTy + (e.clientY - this.startY)
    this.applyTransform()
  }
  onUp (e) {
    if (this.stroke) {
      this.extendStroke(e.clientX, e.clientY)
      this.stroke = null
      return
    }
    if (!this.overlay || !this.overlay.classList.contains('is-dragging'))
      return
    let dx = Math.abs(this.tx - this.startTx)
    let dy = Math.abs(this.ty - this.startTy)
    this.didDrag = dx > 3 || dy > 3
    let closeFromDrag = this.didDrag && this.isPastCloseRegion()
    this.dragging = false
    if (this.clone) this.overlay.classList.remove('is-dragging')
    if (closeFromDrag)
      this.close()
  }
  attach () {
    let body = DOM.get('.bodywrapper .body')
    if (!body) return
    DOM.getAll('img', body).forEach((img) => {
      let target = img.closest('a')
      if (target === null)
        target = img
      if (this.attached.has(target)) return
      this.attached.add(target)
      target.addEventListener('click', (e) => {
        e.preventDefault()
        this.open(img)
      })
      target.addEventListener('touchstart', (e) => {
        if (!this.overlay && e.touches.length === 2)
          this.openFromPagePinch(img, e)
      }, {passive: false})
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
