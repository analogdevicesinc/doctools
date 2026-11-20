// The files of the documentation, as a tree: a file is opened with a click,
// the check box of a folder selects it for the sparse build.

const CHECKS = { all: 'true', some: 'mixed', none: 'false' }

function row(className, path, depth) {
  const el = document.createElement('div')
  el.className = `tree-row ${className}`
  el.dataset.path = path
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
