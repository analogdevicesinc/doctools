// The files of the documentation, as a tree: a file is opened with a click,
// the check box of a folder selects it for the sparse build.

const CHECKS = { all: 'true', some: 'mixed', none: 'false' }

function row(className, path, depth) {
  const el = document.createElement('div')
  el.className = `tree-row ${className}`
  el.dataset.path = path
  el.dataset.depth = depth
  el.style.paddingLeft = `${8 + depth * 16}px`
  return el
}

function span(className, text = '') {
  const el = document.createElement('span')
  el.className = className
  el.textContent = text
  return el
}

// tree: { name, path, dirs, files } of the server
// current: the path of the open file, expanded: the Set of the open folders,
// selection: the SparseSelection, changes: { path: state } of git
export function renderTree(container, tree, { current, expanded, selection, changes = {} }) {
  // The folders with a change in them
  const changed = new Set()
  for (const path of Object.keys(changes))
    for (const folder of ancestorsOf(path)) changed.add(folder)

  const rows = []

  const walk = (node, depth) => {
    for (const dir of node.dirs) {
      const open = expanded.has(dir.path)
      const el = row('dir', dir.path, depth)
      el.setAttribute('aria-expanded', String(open))
      const check = span('check')
      check.setAttribute('role', 'checkbox')
      check.setAttribute('aria-checked', CHECKS[selection.stateOf(dir.path)])
      check.title = 'Build only the selected folders'
      el.append(span('twisty'), check, span('name', dir.name))
      if (changed.has(dir.path)) el.append(span('git-dot'))
      rows.push(el)
      if (open) walk(dir, depth + 1)
    }
    for (const file of node.files) {
      const el = row('file', file.path, depth)
      // Dragged to a folder to move it there
      el.draggable = true
      if (file.path === current) el.classList.add('current')
      el.append(span('name', file.name))
      const change = changes[file.path]
      if (change) {
        el.classList.add(`git-${change}`)
        const mark = span('git-mark', { untracked: 'U', added: 'A', modified: 'M', deleted: 'D', renamed: 'R', conflict: '!' }[change] ?? 'M')
        mark.title = change
        el.append(mark)
      }
      rows.push(el)
    }
  }

  walk(tree, 0)
  container.replaceChildren(...rows)
}

// Ask for the name of a file, in the tree: in the row of a file, in place
// of its name, or in a new row below the row of a folder (at the top of the
// tree without one). Resolves to what was typed, undefined when it was left
// with Escape or without a change.
// value: what is there to change, select: [from, to] of what is selected
export function askName(container, { row: host, folder, value = '', select, placeholder = '' }) {
  const input = document.createElement('input')
  input.className = 'tree-input'
  input.type = 'text'
  input.spellcheck = false
  input.autocomplete = 'off'
  input.value = value
  input.placeholder = placeholder
  input.setAttribute('aria-label', 'File name')

  let line, hidden
  if (host) {
    hidden = host.querySelector('.name')
    hidden.hidden = true
    hidden.after(input)
    host.classList.add('naming')
    host.draggable = false
  } else {
    line = row('file naming', '', folder ? Number(folder.dataset.depth) + 1 : 0)
    line.append(input)
    if (folder) folder.after(line)
    else container.prepend(line)
  }
  input.focus()
  if (select) input.setSelectionRange(select[0], select[1])
  input.scrollIntoView({ block: 'nearest' })

  return new Promise(resolve => {
    let done = false
    const finish = answer => {
      if (done) return
      done = true
      line?.remove()
      if (host) {
        input.remove()
        hidden.hidden = false
        host.classList.remove('naming')
        host.draggable = true
      }
      const typed = answer?.trim()
      resolve(typed && typed !== value ? typed : undefined)
    }
    input.addEventListener('keydown', ev => {
      ev.stopPropagation()
      if (ev.key === 'Enter') finish(input.value)
      else if (ev.key === 'Escape') finish()
    })
    // Leaving it keeps what was typed, as in a file manager
    input.addEventListener('blur', () => finish(input.value))
    for (const name of ['click', 'mousedown', 'dblclick', 'contextmenu'])
      input.addEventListener(name, ev => ev.stopPropagation())
  })
}

// The path of a file from what was typed for it: in a folder, with .rst
// when it is not there
export function filePath(folder, typed) {
  const name = typed.trim().replace(/\\/g, '/').replace(/^\/+|\/+$/g, '')
  if (!name) return undefined
  const path = folder ? `${folder}/${name}` : name
  return /\.rst$/i.test(path) ? path : `${path}.rst`
}

// The folder of a file
export const folderOf = path => path.split('/').slice(0, -1).join('/')

// The folders of a folder, for SparseSelection.toggle
export function foldersOf(tree, path) {
  let node = tree
  if (path) {
    for (const part of path.split('/')) {
      node = node?.dirs.find(dir => dir.name === part)
      if (!node) return []
    }
  }
  return node.dirs.map(dir => dir.path)
}

// The folders above a file
export function ancestorsOf(path) {
  const parts = path.split('/').slice(0, -1)
  return parts.map((_, i) => parts.slice(0, i + 1).join('/'))
}
