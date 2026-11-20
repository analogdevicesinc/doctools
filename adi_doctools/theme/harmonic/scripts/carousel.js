"use strict";

import {DOM} from './dom.js'

/**
 * Enhancement for the .carousel directive:
 * slide indicators, keyboard navigation and active slide tracking.
 */
export class Carousel {
  constructor (app) {
    this.parent = app
    this.abort = null
    this.items = []

    this.construct()

    app.carousel = this
  }
  step (carousel) {
    let [a, b] = carousel.children
    return b ? (b.offsetLeft + b.offsetWidth / 2) - (a.offsetLeft + a.offsetWidth / 2) : 1
  }
  // The .8 matches the neighbor scale in the stylesheet
  stack (offset, width, center, gap) {
    let m = Math.abs(offset)
    let neighbor = center / 2 + gap + width * .8 / 2
    return Math.sign(offset) * (Math.min(m, 1) * neighbor + Math.max(m - 1, 0) * width * .15)
  }
  clamp (item, position) {
    return Math.max(0, Math.min(position, item.slides.length - 1))
  }
  render (item) {
    let {carousel, slides, dots, position} = item
    let step = this.step(carousel)
    carousel.scrollLeft = position * step
    item.expected = carousel.scrollLeft
    let layout = carousel.scrollLeft / step

    let i0 = Math.floor(position), i1 = Math.ceil(position)
    let center = slides[i0].offsetWidth +
      (slides[i1].offsetWidth - slides[i0].offsetWidth) * (position - i0)
    let gap = parseFloat(getComputedStyle(carousel).columnGap) || 0
    let active = Math.round(position)

    slides.forEach((slide, i) => {
      let o = i - position
      let offset = Math.max(-1, Math.min(1, o))
      let depth = Math.min(Math.abs(o), 4)
      let visual = this.stack(o, slide.offsetWidth, center, gap)
      slide.style.setProperty('--offset', offset.toFixed(3))
      slide.style.setProperty('--distance', Math.abs(offset).toFixed(3))
      slide.style.setProperty('--depth', depth.toFixed(3))
      slide.style.setProperty('--shift', (visual - (i - layout) * step).toFixed(1) + 'px')
      slide.style.zIndex = Math.round(100 - depth * 10)
      slide.classList.toggle('is-active', i === active)
    })
    ;[...dots.children].forEach((dot, i) => {
      dot.style.setProperty('--distance', Math.min(1, Math.abs(i - position)).toFixed(3))
    })
  }
  stop (item) {
    if (item.frame !== null)
      cancelAnimationFrame(item.frame)
    item.frame = null
  }
  animate (item) {
    if (item.frame !== null) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      item.position = item.target
      this.render(item)
      return
    }
    let last = performance.now()
    let tick = (now) => {
      let diff = item.target - item.position
      if (Math.abs(diff) < .001) {
        item.position = item.target
        item.frame = null
      } else {
        item.position += diff * (1 - Math.exp(-(now - last) / 70))
        item.frame = requestAnimationFrame(tick)
      }
      last = now
      this.render(item)
    }
    item.frame = requestAnimationFrame(tick)
  }
  go (item, index) {
    item.target = this.clamp(item, Math.round(index))
    this.animate(item)
  }
  attach (carousel, signal) {
    if (carousel.children.length < 2) return
    let slides = [...carousel.children].map((child) => {
      if (child.classList.contains('carousel-slide'))
        return child
      let slide = DOM.new('div', {className: 'carousel-slide'})
      child.before(slide)
      slide.append(child)
      return slide
    })

    let dots = DOM.new('div', {className: 'carousel-dots'})
    dots.setAttribute('aria-hidden', 'true')
    slides.forEach(() => {
      dots.append(DOM.new('span', {className: 'carousel-dot'}))
    })
    carousel.after(dots)

    carousel.tabIndex = 0
    carousel.setAttribute('role', 'region')
    carousel.setAttribute('aria-roledescription', 'carousel')
    carousel.classList.add('js')

    let item = {carousel, slides, dots, position: 0, target: 0, frame: null, expected: 0, wheel: null}
    this.items.push(item)

    carousel.addEventListener('keydown', (e) => {
      let dir = {ArrowLeft: -1, ArrowRight: 1}[e.key]
      if (!dir) return
      e.preventDefault()
      this.go(item, Math.round(item.target) + dir)
    }, {signal})

    carousel.addEventListener('wheel', (e) => {
      let dx = e.shiftKey && !e.deltaX ? e.deltaY : e.deltaX
      if (!e.shiftKey && Math.abs(dx) <= Math.abs(e.deltaY)) return
      e.preventDefault()
      let unit = [1, 16, carousel.clientWidth][e.deltaMode]
      item.target = this.clamp(item, item.target + dx * unit / this.step(carousel))
      this.animate(item)
      clearTimeout(item.wheel)
      item.wheel = setTimeout(() => this.go(item, item.target), 120)
    }, {signal, passive: false})

    let drag = null
    let dragged = false
    let selectable = (target) => target.closest('.is-active') && !target.closest('img')
    carousel.addEventListener('pointerdown', (e) => {
      dragged = false
      if (e.button !== 0 || (e.pointerType === 'mouse' && selectable(e.target))) return
      drag = {x: e.clientX, start: item.position, moved: false, t: e.timeStamp, v: 0}
    }, {signal})
    // Text selection begins on mousedown, before a drag can be detected
    carousel.addEventListener('mousedown', (e) => {
      if (e.button !== 0 || selectable(e.target)) return
      e.preventDefault()
      carousel.focus({preventScroll: true})
    }, {signal})
    carousel.addEventListener('pointermove', (e) => {
      if (!drag) return
      let dx = e.clientX - drag.x
      if (!drag.moved) {
        if (Math.abs(dx) < 5) return
        drag.moved = true
        carousel.setPointerCapture(e.pointerId)
        carousel.classList.add('is-dragging')
        this.stop(item)
      }
      let position = this.clamp(item, drag.start - dx / this.step(carousel))
      let dt = e.timeStamp - drag.t
      if (dt > 0)
        drag.v = (position - item.position) / dt
      drag.t = e.timeStamp
      item.position = item.target = position
      this.render(item)
    }, {signal})
    let drag_end = () => {
      if (!drag) return
      if (drag.moved) {
        dragged = true
        carousel.classList.remove('is-dragging')
        this.go(item, item.position + Math.max(-1, Math.min(1, drag.v * 150)))
      }
      drag = null
    }
    carousel.addEventListener('pointerup', drag_end, {signal})
    carousel.addEventListener('pointercancel', drag_end, {signal})
    carousel.addEventListener('dragstart', (e) => e.preventDefault(), {signal})

    // Capture phase runs before the zoom listeners on the images
    carousel.addEventListener('click', (e) => {
      let slide = slides.find(s => s.contains(e.target))
      if (!dragged && (!slide || slide.classList.contains('is-active'))) return
      e.preventDefault()
      e.stopPropagation()
      if (!dragged)
        this.go(item, slides.indexOf(slide))
      dragged = false
    }, {signal, capture: true})

    carousel.addEventListener('scroll', () => {
      if (Math.abs(carousel.scrollLeft - item.expected) < 1) return
      item.position = carousel.scrollLeft / this.step(carousel)
      this.go(item, item.position)
    }, {signal, passive: true})

    let render = () => this.render(item)
    carousel.addEventListener('load', render, {signal, capture: true})
    window.addEventListener('resize', render, {signal, passive: true})

    this.render(item)
  }
  construct () {
    this.init()
  }
  deinit () {
    if (this.abort)
      this.abort.abort()
    this.abort = null
    this.items.forEach((item) => {
      this.stop(item)
      clearTimeout(item.wheel)
    })
    this.items = []
    document.querySelectorAll('.body .carousel-dots').forEach(dots => dots.remove())
  }
  init () {
    this.deinit()
    this.abort = new AbortController()
    document.querySelectorAll('.body .carousel').forEach((carousel) => {
      this.attach(carousel, this.abort.signal)
    })
  }
}
