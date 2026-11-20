// The folders of a sparse build: only what is selected is built

export class SparseSelection {
  constructor(paths = [], sep = '/') {
    this.paths = new Set(paths)
    this.sep = sep
  }

  get size() {
    return this.paths.size
  }

  toArray() {
    return [...this.paths].sort()
  }

  // 'all', 'some' or 'none'
  stateOf(path) {
    if (this.paths.has(path)) return 'all'
    for (const p of this.paths)
      if (path.startsWith(p + this.sep)) return 'all'
    const prefix = path + this.sep
    for (const p of this.paths)
      if (p.startsWith(prefix)) return 'some'
    return 'none'
  }

  // siblings(parent) gives the folders of a folder, to keep the siblings
  // when a folder inside a selected one is taken out
  toggle(path, siblings = () => []) {
    const prefix = path + this.sep
    const under = () => {
      for (const p of [...this.paths])
        if (p.startsWith(prefix)) this.paths.delete(p)
    }

    if (this.stateOf(path) !== 'all') {
      under()
      for (const p of [...this.paths])
        if (path.startsWith(p + this.sep)) this.paths.delete(p)
      this.paths.add(path)
      return
    }
    if (this.paths.delete(path)) {
      under()
      return
    }
    const ancestor = [...this.paths].find(p => path.startsWith(p + this.sep))
    if (!ancestor) return
    this.paths.delete(ancestor)
    let current = ancestor
    for (const part of path.slice(ancestor.length + this.sep.length).split(this.sep)) {
      const keep = current + this.sep + part
      for (const sibling of siblings(current))
        if (sibling !== keep) this.paths.add(sibling)
      current = keep
    }
  }
}
