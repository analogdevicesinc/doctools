"use strict"

/**
 * Chat backends: v1/responses server and mock.
 */

const WORDS = ('lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ' +
  'incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ' +
  'ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit ' +
  'voluptate velit esse cillum fugiat nulla pariatur').split(' ')
const rand = (a, b) => a + Math.floor(Math.random() * (b - a + 1))
const words = n => Array.from({length: n}, () => WORDS[rand(0, WORDS.length - 1)]).join(' ')
const F = '```'
const CONNECTION_ERROR = 'Connection error.'
const DOT_SVG = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">' +
  '<circle cx="8" cy="8" r="6" fill="#1668b3"/></svg>').replace(/[()]/g, c => '%' + c.charCodeAt(0).toString(16))

const SITES = [
  {url: 'https://wiki.analog.com/resources/tools-software/linux-drivers', title: 'Linux Drivers - Analog Devices Wiki'},
  {url: 'https://analogdevicesinc.github.io/hdl/', title: 'HDL Reference Designs documentation'},
  {url: 'https://analogdevicesinc.github.io/pyadi-iio/', title: 'pyadi-iio: Device Specific Python Interfaces'},
  {url: 'https://example.com/lorem/ipsum', title: 'Lorem Ipsum - Example Domain'},
  {url: 'https://docs.kernel.org/iio/index.html', title: 'Industrial I/O - The Linux Kernel documentation'},
]

function loremSource (sites = []) {
  const links = sites.map(s => `[${s.title}](${s.url})`).join(', ')
  return [
    `# ${words(3)}`,
    '',
    `${words(8)} **${words(2)}** ${words(4)} *${words(2)}* ${words(3)} \`${words(1)}_x\` ${words(3)}`,
    `~~${words(2)}~~ ${words(5)} [${words(2)} **${words(1)}**](https://example.com/a_b) ${words(6)} ***${words(2)}*** snake_case_word.`,
    '',
    ...(sites.length ? [`${words(3)}: ${links}.`, ''] : []),
    `## ${words(2)}`,
    '',
    `- ${words(4)}`,
    `- ${words(3)} **${words(1)}**`,
    `  - ${words(3)}`,
    `    ${words(4)}`,
    `1. ${words(3)}`,
    `2. [x] ${words(3)}`,
    `3. [ ] ${words(3)}`,
    '',
    `| ${words(1)} | ${words(1)} | ${words(1)} |`,
    '|:---|:---:|---:|',
    ...Array.from({length: rand(2, 5)}, () => `| ${words(rand(1, 3))} | \`${words(1)}\` | ${rand(1, 9999)} |`),
    '',
    `> ${words(8)}`,
    `> > ${words(4)}`,
    '',
    F + 'js',
    `function ${words(1)}() {`,
    `  return "**not bold** | not a table"; // ${words(3)}`,
    '}',
    F,
    '',
    F + 'mermaid',
    'graph TD',
    '  A[User] --> B[Output]',
    '  B --> C{Stick?}',
    F,
    '',
    `${words(3)} ![dot](${DOT_SVG}) ${words(3)}, an inline image.`,
    '',
    '![Doctools hero](https://analogdevicesinc.github.io/doctools/_images/hero.svg "Doctools")',
    '',
    F + 'svg',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" width="240" height="60">',
    '  <rect x="2" y="2" width="236" height="56" rx="8" fill="none" stroke="#1668b3" stroke-width="2"/>',
    '  <circle cx="30" cy="30" r="12" fill="#1668b3"/>',
    '  <text x="54" y="36" font-family="sans-serif" font-size="16" fill="#1668b3">svg fence</text>',
    '</svg>',
    F,
    '',
    F + F + 'callout',
    `**Callout** ${words(4)} (markdown rendered by a nested renderer):`,
    '',
    `- ${words(3)}`,
    '',
    F + 'sh',
    `echo ${words(2)}`,
    F,
    F + F,
    '',
    '---',
    '',
    ...Array.from({length: rand(1, 3)}, () => [words(rand(15, 50)) + '.', '']).flat(),
    `Unclosed **marks stay literal, 2 * 3 * 4 too.`,
  ].join('\n')
}

function mockEvents () {
  const events = []
  const stream = (type, source) => {
    for (let i = 0; i < source.length;)
      events.push({wait: rand(10, 40), type, delta: source.slice(i, i += rand(1, 12))})
  }
  const sites = SITES.filter(() => Math.random() < 0.5)

  stream('thinking', `${words(rand(6, 14))} **${words(2)}**.\n\n- ${words(4)}\n- ${words(3)}\n`)
  sites.forEach((site, n) => {
    const id = 'call_' + n
    events.push({wait: 200, type: 'tool_call', id, name: 'read', input: {url: site.url}})
    events.push({wait: rand(400, 1200), type: 'tool_result', id, output: {title: site.title}})
    stream('thinking', `${words(rand(5, 20))}.\n`)
  })
  stream('text', loremSource(sites))
  events[0].wait = rand(800, 2500)
  return events
}

export function mockStream (turns, onEvent, onEnd, {thinking} = {}) {
  const events = mockEvents().filter(e => thinking || e.type !== 'thinking')
  let i = 0
  let timer = null
  const next = () => {
    if (i >= events.length)
      return onEnd(false)
    timer = setTimeout(() => {
      const {wait, ...event} = events[i++]
      onEvent(event)
      next()
    }, events[i].wait)
  }
  next()
  return () => {
    clearTimeout(timer)
    onEnd(true)
  }
}

const statelessServers = new Set()

const pageItem = page => ({
  type: 'message',
  role: 'developer',
  content: [
    `The user is reading "${page.title}", ${page.url}.`,
    'The page, as markdown:',
    page.markdown,
  ].join('\n\n'),
})

export function responsesStream (turns, onEvent, onEnd, {thinking, arg, page} = {}) {
  const controller = new AbortController()
  const m = /^(.+):(\d+)$/.exec(arg || '')
  if (!m) {
    onEvent({type: 'text', delta: 'No server set, use the llm:backend "v1-responses:<addr>:<port>".'})
    onEnd(true)
    return () => {}
  }
  const endpoint = `http://${m[1]}:${m[2]}/v1/responses`
  const past = turns.slice(0, -1)
  const turn = turns[turns.length - 1]
  const pastEvents = past.flatMap(t => t.events)
  const previousId = pastEvents.findLast(e => e.type === 'thread')?.id
  const lastPage = pastEvents.findLast(e => e.type === 'page')
  const newPage = page && (!lastPage || lastPage.url !== page.url || lastPage.markdown !== page.markdown) ? page : null

  const userItem = t => ({type: 'message', role: 'user', content: t.user})
  const turnItems = t => {
    const text = t.events.filter(e => e.type === 'text').map(e => e.delta).join('')
    return [
      ...t.events.filter(e => e.type === 'page').map(pageItem),
      userItem(t),
      ...(text ? [{type: 'message', role: 'assistant', content: [{type: 'output_text', text}]}] : []),
    ]
  }
  const newItems = [...(newPage ? [pageItem(newPage)] : []), userItem(turn)]
  const request = stateful => fetch(endpoint, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      ...stateful ? {previous_response_id: previousId} : {},
      input: stateful ? newItems : [...past.flatMap(turnItems), ...newItems],
      stream: true,
      reasoning: {effort: thinking ? 'medium' : 'none'},
    }),
    signal: controller.signal,
  })
  let responseId

  const consume = line => {
    if (!line.startsWith('data:'))
      return false
    const data = line.slice(5).trim()
    if (!data)
      return false
    const event = JSON.parse(data)
    switch (event.type) {
      case 'response.created':
        responseId = event.response.id
        break
      case 'response.reasoning_text.delta':
        onEvent({type: 'thinking', delta: event.delta})
        break
      case 'response.output_text.delta':
        onEvent({type: 'text', delta: event.delta})
        break
      case 'response.completed':
        if (newPage)
          onEvent({type: 'page', ...newPage})
        if (responseId)
          onEvent({type: 'thread', id: responseId})
        return true
      case 'response.failed':
      case 'response.incomplete':
      case 'error':
        throw new Error(JSON.stringify(event))
    }
    return false
  }

  const run = async () => {
    let stopped = false
    let reader
    try {
      const stateful = previousId && !statelessServers.has(endpoint)
      let response = await request(stateful)
      if (stateful && response.status === 400) {
        statelessServers.add(endpoint)
        response = await request(false)
      }
      if (!response.ok)
        throw new Error(`HTTP ${response.status}: ${await response.text()}`)
      reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      while (true) {
        const {value, done} = await reader.read()
        buffer += decoder.decode(value, {stream: !done})
        const lines = buffer.split('\n')
        buffer = lines.pop()
        for (const line of lines) {
          if (consume(line))
            return
        }
        if (done) {
          consume(buffer)
          break
        }
      }
    } catch (err) {
      stopped = true
      if (!controller.signal.aborted) {
        console.warn('llm: v1-responses', err)
        onEvent({type: 'text', delta: `\n\n${CONNECTION_ERROR}`})
      }
    } finally {
      if (reader) {
        try {
          await reader.cancel()
        } catch {}
      }
      onEnd(stopped || controller.signal.aborted)
    }
  }
  run()
  return () => controller.abort()
}
