export type Selection = 'all' | 'some' | 'none'

export class SparseSelection {
  readonly paths: Set<string>

  constructor(paths: Iterable<string> = [], private sep = '/') {
    this.paths = new Set(paths)
  }

  get size(): number {
    return this.paths.size
  }

  toArray(): string[] {
    return Array.from(this.paths)
  }

  stateOf(relativePath: string): Selection {
    if (this.paths.has(relativePath))
      return 'all'
    for (const p of this.paths) {
      if (relativePath.startsWith(p + this.sep))
        return 'all'
    }
    const prefix = relativePath + this.sep
    for (const p of this.paths) {
      if (p.startsWith(prefix))
        return 'some'
    }
    return 'none'
  }

  toggle(relativePath: string, siblings: (parent: string) => string[] = () => []) {
    const prefix = relativePath + this.sep
    if (this.stateOf(relativePath) !== 'all') {
      this.removeUnder(prefix)
      for (const p of this.toArray()) {
        if (relativePath.startsWith(p + this.sep))
          this.paths.delete(p)
      }
      this.paths.add(relativePath)
      return
    }

    if (this.paths.delete(relativePath)) {
      this.removeUnder(prefix)
      return
    }

    const ancestor = this.toArray().find(p => relativePath.startsWith(p + this.sep))
    if (!ancestor)
      return
    this.paths.delete(ancestor)
    let current = ancestor
    for (const part of relativePath.slice(ancestor.length + this.sep.length).split(this.sep)) {
      const keep = current + this.sep + part
      for (const sibling of siblings(current)) {
        if (sibling !== keep)
          this.paths.add(sibling)
      }
      current = keep
    }
  }

  prune(exists: (relativePath: string) => boolean): boolean {
    let changed = false
    for (const p of this.toArray()) {
      if (!exists(p)) {
        this.paths.delete(p)
        changed = true
      }
    }
    return changed
  }

  private removeUnder(prefix: string) {
    for (const p of this.toArray()) {
      if (p.startsWith(prefix))
        this.paths.delete(p)
    }
  }
}
