"use strict"

import {DOM} from './dom.js'

const isIP = host => /^(?:\d{1,3}\.){3}\d{1,3}$/.test(host) || host.includes(':')

const endpointLabel = endpoint => {
  const url = new URL(endpoint)
  return url.host + url.pathname.replace(/\/$/, '')
}

const baseUrl = value => {
  const url = new URL(/^[a-z][a-z0-9+.-]*:/i.test(value) ? value : `https://${value}`)
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash)
    throw new Error('unsupported URL')
  url.pathname = url.pathname.replace(/\/(v1(\/responses)?\/?)?$/, '')
  return url.href.replace(/\/$/, '')
}

export function createModelSelector (domain) {
  const builtins = [
    ...location.hostname === 'developer.analog.com' ? [{id: 'kapa', name: 'Kapa'}] : [],
    ...isIP(location.hostname) ? [{id: 'mock', name: 'Mock'}] : [],
  ]
  const settings = () => domain.get_settings().llm || {}
  const models = () => [...builtins, ...(settings().models || [])]
  const selected = () => models().find(m => m.id === (settings().model ?? builtins[0]?.id))
  const button = DOM.new('button', {className: 'chat-model', type: 'button', title: 'Model', ariaExpanded: 'false', ariaHasPopup: 'dialog'})
  const popup = DOM.new('div', {className: 'chat-model-popup', role: 'dialog', ariaLabel: 'Model'})
  const cancel = DOM.new('div', {className: 'chat-model-cancel', hidden: true})
  const list = DOM.new('div', {className: 'chat-model-list'})
  const add = DOM.new('button', {className: 'chat-model-add', type: 'button', textContent: 'Add model gateway'})
  const editor = DOM.new('form', {className: 'chat-model-editor', hidden: true})
  const input = DOM.new('input', {type: 'text', inputMode: 'url', placeholder: 'Responses API URL', ariaLabel: 'Model server URL', autocomplete: 'url', spellcheck: false})
  const set = DOM.new('button', {className: 'chat-model-set', type: 'submit', title: 'Set'})
  editor.append(input, set)
  const divider = DOM.new('span', {className: 'chat-model-divider', role: 'separator'})
  popup.append(list, divider, add, editor)
  document.body.append(cancel, popup)
  let editing = null

  const close = () => {
    popup.classList.remove('on')
    cancel.hidden = true
    button.ariaExpanded = 'false'
  }
  const closeEditor = () => {
    editor.hidden = true
    add.hidden = false
    editing = null
  }
  const edit = endpoint => {
    editing = endpoint
    input.value = endpoint || ''
    input.ariaInvalid = 'false'
    add.hidden = true
    editor.hidden = false
    input.focus()
    input.select()
  }
  const select = model => {
    domain.update_settings(s => { (s.llm ||= {}).model = model.id })
    render()
    close()
    button.focus()
  }
  const remove = endpoint => {
    domain.update_settings(s => {
      const llm = s.llm ||= {}
      llm.models = (llm.models || []).filter(m => m.endpoint !== endpoint)
      if (llm.model?.startsWith(`${endpoint}#`))
        delete llm.model
    })
    render()
    ;(list.querySelector('.chat-model-option') || add).focus()
  }
  const action = (className, text, onClick) => {
    const el = DOM.new('button', {className: `chat-model-action ${className}`, type: 'button', title: text})
    el.addEventListener('click', onClick)
    return el
  }
  const option = (model, active) => {
    const el = DOM.new('button', {
      className: 'chat-model-option',
      type: 'button',
      ariaPressed: String(active),
      textContent: model.name,
    })
    el.addEventListener('click', () => select(model))
    return el
  }
  const group = (endpoint, entries, active) => {
    const name = endpoint ? endpointLabel(endpoint) : 'Built-in'
    const el = DOM.new('div', {className: 'chat-model-group', role: 'group', ariaLabel: name})
    const header = DOM.new('div', {className: 'chat-model-provider'})
    header.append(DOM.new('span', {className: 'chat-model-provider-name', textContent: name}))
    if (endpoint)
      header.append(
        action('chat-model-edit', `Edit ${name}`, () => edit(endpoint)),
        action('chat-model-remove', `Remove ${name}`, () => remove(endpoint)),
      )
    el.append(header, ...entries.map(model => option(model, model.id === active?.id)))
    return el
  }
  const render = () => {
    const active = selected()
    button.textContent = active?.name || 'Model'
    button.dataset.empty = !active
    const groups = new Map()
    for (const model of models())
      groups.set(model.endpoint || '', [...groups.get(model.endpoint || '') || [], model])
    list.hidden = divider.hidden = !groups.size
    list.replaceChildren(...[...groups].map(([endpoint, entries]) => group(endpoint, entries, active)))
  }
  const open = (configure = false) => {
    render()
    closeEditor()
    cancel.hidden = false
    const rect = button.getBoundingClientRect()
    popup.style.bottom = `${window.innerHeight - rect.top + 8}px`
    popup.style.left = `${Math.max(8, Math.min(rect.left, window.innerWidth - popup.offsetWidth - 8))}px`
    popup.style.maxHeight = `min(${Math.max(0, rect.top - 16)}px, 24rem)`
    popup.classList.add('on')
    button.ariaExpanded = 'true'
    if (configure || !models().length)
      edit(null)
    else
      (list.querySelector('[aria-pressed="true"]') || list.querySelector('.chat-model-option') || add).focus()
  }
  editor.addEventListener('submit', async e => {
    e.preventDefault()
    set.disabled = input.disabled = true
    set.ariaBusy = 'true'
    set.title = 'Checking'
    input.ariaInvalid = 'false'
    try {
      const url = input.value = baseUrl(input.value.trim())
      const response = await fetch(`${url}/v1/models`, {signal: AbortSignal.timeout(10000)})
      const data = response.ok ? await response.json() : {}
      const names = [...new Set((Array.isArray(data.data) ? data.data : [])
        .map(m => m.id).filter(id => typeof id === 'string' && id.trim()))]
      if (!names.length)
        throw new Error('no models')
      domain.update_settings(s => {
        const llm = s.llm ||= {}
        const entries = names.map(name => ({id: `${url}#${name}`, name, endpoint: url}))
        llm.models = [...(llm.models || []).filter(m => m.endpoint !== url && m.endpoint !== editing), ...entries]
        llm.model = entries[0].id
      })
      closeEditor()
      render()
      list.querySelector('[aria-pressed="true"]')?.focus()
    } catch {
      input.ariaInvalid = 'true'
    }
    set.disabled = input.disabled = false
    set.ariaBusy = 'false'
    set.title = 'Set'
    if (!editor.hidden)
      input.focus()
  })
  input.addEventListener('input', () => { input.ariaInvalid = 'false' })
  add.addEventListener('click', () => edit(null))
  button.addEventListener('click', () => popup.classList.contains('on') ? close() : open())
  cancel.addEventListener('click', close)
  popup.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      e.preventDefault()
      e.stopPropagation()
      if (!editor.hidden && models().length) {
        closeEditor()
        ;(list.querySelector('[aria-pressed="true"]') || add).focus()
      } else {
        close()
        button.focus()
      }
    } else if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && e.target !== input) {
      const items = [...popup.querySelectorAll('.chat-model-option, .chat-model-action, .chat-model-add')]
        .filter(el => el.offsetParent)
      const i = items.indexOf(document.activeElement)
      items[(i + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length]?.focus()
      e.preventDefault()
    }
  })
  window.addEventListener('resize', close)
  render()
  return {button, popup, selected, open, close}
}
