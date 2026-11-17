"use strict"

/**
 * Chat backends: v1/responses server, mock, and kapa.ai.
 */

const KAPA_PROXY = 'https://proxy.kapa.ai/proxy/query/v2'
const KAPA_INTEGRATION = '48c61e30-2cf1-4f06-82d4-f0736bd4040d'
const HCAPTCHA_SITE_KEY = '565487b2-a67c-4aac-bb92-3fb64732c7b8'
const STREAM_DELIMITER = '\u241e'
const CAPTCHA_TIMEOUT_MS = 30000

const WORDS = ('lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ' +
  'incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ' +
  'ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit ' +
  'voluptate velit esse cillum fugiat nulla pariatur').split(' ')
const rand = (a, b) => a + Math.floor(Math.random() * (b - a + 1))
const words = n => Array.from({length: n}, () => WORDS[rand(0, WORDS.length - 1)]).join(' ')
const F = '```'
const CONNECTION_ERROR = 'Connection error.'
const TOO_MANY_REQUESTS = 'Too many requests, please try again in a minute.'
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
const TOOL_ROUNDS = 4

const pageItem = page => ({
  type: 'message',
  role: 'developer',
  content: [
    `The user is reading "${page.title}", ${page.url}.`,
    'The page, as markdown:',
    page.markdown,
  ].join('\n\n'),
})

export function responsesStream (turns, onEvent, onEnd, {thinking, endpoint, model, page, tools = []} = {}) {
  const controller = new AbortController()
  const past = turns.slice(0, -1)
  const turn = turns[turns.length - 1]
  const pastEvents = past.flatMap(t => t.events)
  const previousId = pastEvents.findLast(e => e.type === 'thread')?.id
  const lastPage = pastEvents.findLast(e => e.type === 'page')
  const newPage = page && (!lastPage || lastPage.url !== page.url || lastPage.markdown !== page.markdown) ? page : null

  const userItem = t => ({type: 'message', role: 'user', content: t.user})
  const assistantItem = text => ({type: 'message', role: 'assistant', content: [{type: 'output_text', text}]})
  const turnItems = t => {
    const text = t.events.filter(e => e.type === 'text').map(e => e.delta).join('')
    return [
      ...t.events.filter(e => e.type === 'page').map(pageItem),
      userItem(t),
      ...(text ? [assistantItem(text)] : []),
    ]
  }
  const newItems = [...(newPage ? [pageItem(newPage)] : []), userItem(turn)]
  const toolDefs = tools.map(({name, description, parameters}) => ({type: 'function', name, description, parameters}))
  const post = (previous, input, last) => fetch(`${endpoint}/v1/responses`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      ...previous ? {previous_response_id: previous} : {},
      model,
      input,
      stream: true,
      reasoning: {effort: thinking ? 'medium' : 'none'},
      ...toolDefs.length ? {tools: toolDefs, tool_choice: last ? 'none' : 'auto'} : {},
    }),
    signal: controller.signal,
  })
  const request = async (previous, input, full, last) => {
    if (previous && !statelessServers.has(endpoint)) {
      const response = await post(previous, input, last)
      if (response.status !== 400)
        return response
      statelessServers.add(endpoint)
    }
    return post(undefined, full, last)
  }

  const consume = (line, round) => {
    if (!line.startsWith('data:'))
      return false
    const data = line.slice(5).trim()
    if (!data)
      return false
    const event = JSON.parse(data)
    switch (event.type) {
      case 'response.created':
        round.id = event.response.id
        break
      case 'response.reasoning_text.delta':
        onEvent({type: 'thinking', delta: event.delta})
        break
      case 'response.output_text.delta':
        round.text += event.delta
        onEvent({type: 'text', delta: event.delta})
        break
      case 'response.output_item.done':
        if (event.item.type === 'function_call') {
          const {call_id, name, arguments: args} = event.item
          round.calls.push({type: 'function_call', call_id, name, arguments: args})
        }
        break
      case 'response.completed':
        return true
      case 'response.failed':
      case 'response.incomplete':
      case 'error':
        throw new Error(JSON.stringify(event))
    }
    return false
  }

  const readRound = async response => {
    if (!response.ok)
      throw new Error(`HTTP ${response.status}: ${await response.text()}`)
    const round = {id: null, text: '', calls: []}
    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ''
    try {
      while (true) {
        const {value, done} = await reader.read()
        buffer += decoder.decode(value, {stream: !done})
        const lines = buffer.split('\n')
        buffer = lines.pop()
        if (lines.some(line => consume(line, round)))
          return round
        if (done) {
          consume(buffer, round)
          return round
        }
      }
    } finally {
      try {
        await reader.cancel()
      } catch {}
    }
  }

  const callTool = async call => {
    let input = {}
    try {
      input = JSON.parse(call.arguments || '{}')
    } catch {}
    onEvent({type: 'tool_call', id: call.call_id, name: call.name, input})
    const tool = tools.find(t => t.name === call.name)
    let result
    try {
      result = tool ? await tool.run(input, controller.signal) : {output: {error: `Unknown tool ${call.name}.`}}
    } catch (err) {
      if (controller.signal.aborted)
        throw err
      result = {output: {error: err.message}}
    }
    onEvent({type: 'tool_result', id: call.call_id, output: result.display ?? result.output})
    return {type: 'function_call_output', call_id: call.call_id, output: JSON.stringify(result.output)}
  }

  const run = async () => {
    let stopped = false
    try {
      let full = [...past.flatMap(turnItems), ...newItems]
      let previous = previousId
      let input = newItems
      let round
      for (let i = 0; ; i++) {
        const last = i === TOOL_ROUNDS
        round = await readRound(await request(previous, input, full, last))
        if (!round.calls.length || last)
          break
        const outputs = []
        for (const call of round.calls)
          outputs.push(await callTool(call))
        full = [...full, ...(round.text ? [assistantItem(round.text)] : []), ...round.calls, ...outputs]
        previous = round.id
        input = outputs
      }
      if (newPage)
        onEvent({type: 'page', ...newPage})
      if (round.id)
        onEvent({type: 'thread', id: round.id})
    } catch (err) {
      stopped = true
      if (!controller.signal.aborted) {
        console.warn('llm: v1-responses', err)
        onEvent({type: 'text', delta: `\n\n${CONNECTION_ERROR}`})
      }
    } finally {
      onEnd(stopped || controller.signal.aborted)
    }
  }
  run()
  return () => controller.abort()
}

let hcaptcha = null
const captchaToken = signal => {
  if (!hcaptcha) {
    hcaptcha = new Promise((resolve, reject) => {
      const onload = `hcaptcha_${Math.random().toString(36).slice(2)}`
      window[onload] = () => {
        const container = document.createElement('div')
        container.hidden = true
        document.body.append(container)
        resolve(window.hcaptcha.render(container, {sitekey: HCAPTCHA_SITE_KEY, size: 'invisible'}))
      }
      const script = document.createElement('script')
      script.src = `https://js.hcaptcha.com/1/api.js?render=explicit&recaptchacompat=off&onload=${onload}`
      script.async = true
      script.onerror = () => {
        hcaptcha = null
        reject(new Error('hCaptcha did not load'))
      }
      document.head.append(script)
    })
  }
  return hcaptcha.then(widget => new Promise((resolve, reject) => {
    if (signal.aborted)
      return reject(signal.reason)
    const give_up = err => {
      clearTimeout(timer)
      window.hcaptcha.close(widget)
      reject(err)
    }
    const timer = setTimeout(() => give_up(new Error('the bot check timed out')), CAPTCHA_TIMEOUT_MS)
    signal.addEventListener('abort', () => give_up(signal.reason), {once: true})
    window.hcaptcha.reset(widget)
    window.hcaptcha.execute(widget, {async: true}).then(({response}) => {
      clearTimeout(timer)
      resolve(response)
    }, give_up)
  }))
}

export function kapaStream (turns, onEvent, onEnd, {thinking} = {}) {
  const controller = new AbortController()
  const turn = turns[turns.length - 1]
  const thread = turns.slice(0, -1).flatMap(t => t.events)
    .findLast(e => e.type === 'thread')?.id
  const fail = reason => onEvent({type: 'text', delta: `\n\n${reason}`})

  const consume = chunk => {
    const {type, content} = chunk
    switch (type) {
      case 'partial_answer':
        onEvent({type: 'text', delta: content.text})
        break
      case 'relevant_sources':
        for (const s of content.relevant_sources)
          onEvent({type: 'source', url: s.source_url, title: s.title})
        break
      case 'agent_activity_update':
        if (content.status === 'started')
          onEvent({type: 'tool_call', id: content.id, name: content.name, input: {}})
        else
          onEvent({type: 'tool_result', id: content.id, output: {summary: content.summary}})
        break
      case 'identifiers':
        onEvent({type: 'thread', id: content.thread_id})
        break
      case 'error':
        throw new Error(content.reason)
    }
  }

  const run = async () => {
    let stopped = false
    let reader
    try {
      const token = await captchaToken(controller.signal)
      const url = thread ? `${KAPA_PROXY}/thread/${encodeURIComponent(thread)}/chat/stream/` :
                           `${KAPA_PROXY}/chat/stream/`
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-HCAPTCHA-TOKEN': token,
          'X-WEBSITE-ID': KAPA_INTEGRATION,
        },
        body: JSON.stringify({
          query: turn.user,
          mode: thinking ? 'deep_thinking' : 'default',
          user: {},
          metadata: {origin_url: location.origin + location.pathname},
          ...thread ? {thread_id: thread} : {},
        }),
        signal: controller.signal,
      })
      if (!response.ok)
        throw new Error(response.status === 429 ? TOO_MANY_REQUESTS : `HTTP ${response.status}`)
      reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      while (true) {
        const {value, done} = await reader.read()
        buffer += decoder.decode(value, {stream: !done})
        const chunks = buffer.split(STREAM_DELIMITER)
        buffer = chunks.pop()
        for (const chunk of chunks)
          consume(JSON.parse(chunk).chunk)
        if (done)
          break
      }
    } catch (err) {
      stopped = true
      if (!controller.signal.aborted) {
        console.warn('llm: kapa', err)
        fail(err.message === TOO_MANY_REQUESTS ? TOO_MANY_REQUESTS : CONNECTION_ERROR)
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
