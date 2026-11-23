// The menu of the right click: a list of actions at the pointer.
//
// items: [{ label, keys, run, disabled, kind }], kind: 'separator', 'note'
// (a line of text), 'suggestion' (a replacement, in bold) or 'danger' (what
// cannot be undone)

export class ContextMenu {
  constructor(el) {
    this.el = el
    this.items = []
    this.index = -1
    this.onClose = undefined
    el.addEventListener('mousedown', ev => ev.preventDefault())
    el.addEventListener('click', ev => {
      const row = ev.target.closest('.context-item')
      if (row) this.choose(Number(row.dataset.index))
    })
    el.addEventListener('mousemove', ev => {
      const row = ev.target.closest('.context-item')
      if (row && Number(row.dataset.index) !== this.index) {
        this.index = Number(row.dataset.index)
        this.paint()
      }
    })
    document.addEventListener('mousedown', ev => {
      if (!this.el.hidden && !this.el.contains(ev.target)) this.close()
    }, true)
    window.addEventListener('blur', () => this.close())
    window.addEventListener('resize', () => this.close())
    // But the scroll of what the click itself moved: the caret it placed is
    // followed by the other pane
    document.addEventListener('scroll', () => {
      if (performance.now() - this.shown > 400) this.close()
    }, true)
  }

  get open() {
    return !this.el.hidden
  }

  show(x, y, items, onClose) {
    this.x = x
    this.y = y
    this.onClose = onClose
    this.index = -1
    this.shown = performance.now()
    this.el.hidden = false
    this.update(items)
  }

  // New items, as a check that was waited for gives its answer
  update(items) {
    if (this.el.hidden) return
    this.items = items
    this.paint()
    const { offsetWidth: width, offsetHeight: height } = this.el
    this.el.style.left = `${Math.max(Math.min(this.x, window.innerWidth - width - 8), 8)}px`
    // Below the pointer, else above it, else as low as it fits
    let top = this.y
    if (top + height > window.innerHeight - 8) top = this.y - height >= 8 ? this.y - height : window.innerHeight - height - 8
    this.el.style.top = `${Math.max(top, 8)}px`
  }

  paint() {
    this.el.replaceChildren(...this.items.map((item, i) => {
      const row = document.createElement('div')
      if (item.kind === 'separator') {
        row.className = 'context-separator'
        row.setAttribute('role', 'separator')
        return row
      }
      if (item.kind === 'note') {
        row.className = 'context-note'
        row.textContent = item.label
        return row
      }
      row.className = 'context-item'
      if (item.kind === 'suggestion') row.classList.add('suggestion')
      if (item.kind === 'danger') row.classList.add('danger')
      row.setAttribute('role', 'menuitem')
      row.dataset.index = i
      if (item.disabled) row.setAttribute('aria-disabled', 'true')
      if (i === this.index) row.classList.add('selected')
      const label = document.createElement('span')
      label.textContent = item.label
      row.append(label)
      if (item.keys) {
        const keys = document.createElement('span')
        keys.className = 'keys'
        keys.textContent = item.keys
        row.append(keys)
      }
      return row
    }))
  }

  choose(index) {
    const item = this.items[index]
    if (!item?.run || item.disabled) return
    this.close()
    item.run()
  }

  close() {
    if (this.el.hidden) return
    this.el.hidden = true
    const done = this.onClose
    this.onClose = undefined
    done?.()
  }

  // The keys while it is open: true when the key was for the menu
  key(ev) {
    if (this.el.hidden) return false
    const usable = this.items.map((item, i) => item.run && !item.disabled ? i : -1).filter(i => i >= 0)
    const at = usable.indexOf(this.index)
    if (ev.key === 'ArrowDown') this.index = usable[(at + 1) % usable.length]
    else if (ev.key === 'ArrowUp') this.index = usable[at <= 0 ? usable.length - 1 : at - 1]
    else if (ev.key === 'Enter' || ev.key === ' ') {
      if (this.index >= 0) this.choose(this.index)
    } else if (ev.key === 'Escape' || ev.key === 'Tab') this.close()
    else return false
    ev.preventDefault()
    ev.stopPropagation()
    if (!this.el.hidden) this.paint()
    return true
  }
}
