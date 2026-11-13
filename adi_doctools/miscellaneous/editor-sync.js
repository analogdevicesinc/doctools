(() => {
  if (window.parent === window)
    return

  const MARKER = /(?:^|\s)src-line-(\d+)(?:\s|$)/
  const INPUT_EVENTS = ['wheel', 'touchstart', 'touchmove', 'keydown', 'pointerdown', 'pointermove']
  let host
  let lines = 0
  let editor_line
  let ignore_until = 0
  let input_until = 0
  let frame = 0

  const post = (type, obj = {}) =>
    window.parent.postMessage({adoc: {type, path: location.pathname, ...obj}}, host)

  const offset = () => {
    const header = document.querySelector('header')
    if (!header || !['fixed', 'sticky'].includes(getComputedStyle(header).position))
      return 0
    return Math.max(header.getBoundingClientRect().bottom, 0)
  }

  const hide_status = () => {
    if (document.getElementById('editor-sync-style'))
      return
    const style = document.createElement('style')
    style.id = 'editor-sync-style'
    style.textContent = '#dev_pool_status { display: none !important; }'
    document.head.append(style)
  }

  const max_scroll = () =>
    Math.max(document.documentElement.scrollHeight - window.innerHeight, 0)

  const points = () => {
    const arr = [{line: 1, top: 0}]
    for (const elem of document.querySelectorAll('[class*="src-line-"]')) {
      const match = elem.className.match?.(MARKER)
      if (!match || elem.getClientRects().length === 0)
        continue
      const line = Number(match[1])
      const top = elem.getBoundingClientRect().top + window.scrollY
      const last = arr[arr.length - 1]
      if (line > last.line && top >= last.top)
        arr.push({line, top})
    }
    const last = arr[arr.length - 1]
    const end = max_scroll() + offset()
    if (lines > last.line && end > last.top)
      arr.push({line: lines, top: end})
    return arr
  }

  const interpolate = (arr, value, from, to) => {
    let i = 1
    while (i < arr.length - 1 && arr[i][from] <= value)
      i++
    const a = arr[i - 1]
    const b = arr[i] ?? a
    if (b[from] === a[from])
      return a[to]
    const t = Math.min(Math.max((value - a[from]) / (b[from] - a[from]), 0), 1)
    return a[to] + t * (b[to] - a[to])
  }

  const scroll_to_line = line => {
    editor_line = line
    const arr = points()
    if (arr.length < 2)
      return
    const top = Math.min(Math.max(interpolate(arr, line, 'line', 'top') - offset(), 0), max_scroll())
    ignore_until = Date.now() + 250
    if (Math.abs(top - window.scrollY) >= 1)
      window.scrollTo({top, left: 0, behavior: 'instant'})
  }

  const report_scroll = () => {
    frame = 0
    const arr = points()
    if (arr.length < 2)
      return
    const y = window.scrollY
    const line = y <= 0 ? 1
      : y >= max_scroll() - 1 && lines ? lines
      : interpolate(arr, y + offset(), 'top', 'line')
    post('scroll', {line})
  }

  const navigate = path => {
    const url = new URL(path, location.origin)
    if (url.pathname === location.pathname)
      return
    if (typeof window.app?.hot_reload?.load === 'function')
      app.hot_reload.load(url.href, false)
    else
      location.href = url.href
  }

  const handlers = {
    scroll: msg => {
      lines = msg.lines ?? lines
      scroll_to_line(msg.line)
    },
    navigate: msg => navigate(msg.path),
  }

  window.addEventListener('message', ev => {
    const msg = ev.data?.adoc
    if (ev.source !== window.parent || !msg)
      return
    if (msg.type === 'host') {
      host = ev.origin
      document.documentElement.classList.add('editor-sync')
      hide_status()
      post('ready')
      return
    }
    if (host === ev.origin)
      handlers[msg.type]?.(msg)
  })

  for (const name of INPUT_EVENTS)
    window.addEventListener(name, ev => {
      if (name !== 'pointermove' || ev.buttons)
        input_until = Date.now() + 1000
    }, {passive: true, capture: true})

  window.addEventListener('scroll', () => {
    const now = Date.now()
    if (!host || now < ignore_until || now > input_until || frame)
      return
    frame = requestAnimationFrame(report_scroll)
  }, {passive: true})

  window.addEventListener('app:hot_reload:page_unload', () => {
    ignore_until = Date.now() + 1000
  })

  window.addEventListener('app:hot_reload:page_loaded', () => {
    if (!host)
      return
    ignore_until = Date.now() + 500
    post('ready')
  })

  window.addEventListener('load', () => {
    if (host && editor_line !== undefined)
      scroll_to_line(editor_line)
  })
})()
