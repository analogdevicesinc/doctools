import * as vscode from 'vscode'
import * as path from 'path'
import * as fs from 'fs'

export interface SparseState {
  paths: Set<string>
}

interface DirectoryItem {
  name: string
  relativePath: string
  fullPath: string
  isDirectory: boolean
  children?: DirectoryItem[]
}

export class SparseTreeProvider implements vscode.TreeDataProvider<SparseTreeItem> {
  private _onDidChangeTreeData = new vscode.EventEmitter<SparseTreeItem | undefined>()
  readonly onDidChangeTreeData = this._onDidChangeTreeData.event

  private state: SparseState = {
    paths: new Set()
  }

  private docsRoot: string | undefined
  private statusBarItem: vscode.StatusBarItem
  private context: vscode.ExtensionContext
  private onSparseChanged: (() => void) | undefined
  private sparseUpdateTimeout: NodeJS.Timeout | undefined
  private buildStatus: 'off' | 'building' | 'ready' = 'off'
  private watcher: vscode.FileSystemWatcher | undefined

  constructor(context: vscode.ExtensionContext) {
    this.context = context
    this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100)
    context.subscriptions.push(this.statusBarItem)

    this.loadState()
    this.updateStatusBar()
  }

  private loadState() {
    const saved = this.context.workspaceState.get<{
      paths: string[]
    }>('sparseState')

    if (saved) {
      this.state.paths = new Set(saved.paths)
    }
  }

  private saveState() {
    this.context.workspaceState.update('sparseState', {
      paths: Array.from(this.state.paths)
    })
  }

  setDocsRoot(docsRoot: string) {
    this.docsRoot = docsRoot

    this.watcher?.dispose()
    this.watcher = vscode.workspace.createFileSystemWatcher(
      new vscode.RelativePattern(docsRoot, '**/')
    )
    this.watcher.onDidCreate(() => this.refresh())
    this.watcher.onDidDelete(() => this.refresh())
    this.context.subscriptions.push(this.watcher)

    this.refresh()
  }

  private getSelectionState(relativePath: string): 'all' | 'some' | 'none' {
    if (this.state.paths.has(relativePath)) {
      return 'all'
    }
    for (const p of this.state.paths) {
      if (relativePath.startsWith(p + path.sep)) {
        return 'all'
      }
    }
    const prefix = relativePath + path.sep
    for (const p of this.state.paths) {
      if (p.startsWith(prefix)) {
        return 'some'
      }
    }
    return 'none'
  }

  setOnSparseChanged(handler: () => void) {
    this.onSparseChanged = handler
  }

  setBuildStatus(status: 'off' | 'building' | 'ready') {
    this.buildStatus = status
    this.updateStatusBar()
  }

  private notifySparseChanged() {
    if (this.sparseUpdateTimeout) {
      clearTimeout(this.sparseUpdateTimeout)
    }
    this.sparseUpdateTimeout = setTimeout(() => {
      this.onSparseChanged?.()
    }, 300)
  }

  getState(): SparseState {
    return this.state
  }

  getSparsePaths(): string[] | null {
    return this.state.paths.size > 0 ? Array.from(this.state.paths) : null
  }

  isSparseMode(): boolean {
    return this.state.paths.size > 0
  }

  togglePath(relativePath: string) {
    const currentState = this.getSelectionState(relativePath)

    if (currentState === 'all') {
      this.state.paths.delete(relativePath)
      const prefix = relativePath + path.sep
      for (const p of Array.from(this.state.paths)) {
        if (p.startsWith(prefix)) {
          this.state.paths.delete(p)
        }
      }
    } else {
      const prefix = relativePath + path.sep
      for (const p of Array.from(this.state.paths)) {
        if (p.startsWith(prefix) || relativePath.startsWith(p + path.sep)) {
          this.state.paths.delete(p)
        }
      }
      this.state.paths.add(relativePath)
    }

    this.saveState()
    this.updateStatusBar()
    this.refresh()
    this.notifySparseChanged()
  }

  private updateStatusBar() {
    switch (this.buildStatus) {
      case 'off':
        this.statusBarItem.text = '$(circle-slash) Stopped'
        this.statusBarItem.tooltip = 'Documentation server not running'
        this.statusBarItem.backgroundColor = undefined
        break
      case 'building':
        this.statusBarItem.text = '$(sync~spin) Building...'
        this.statusBarItem.tooltip = 'Building the documentation'
        this.statusBarItem.backgroundColor = undefined
        break
      case 'ready':
        this.statusBarItem.text = '$(check) Up-to-date'
        this.statusBarItem.tooltip = 'The documentation build is up-to-date.'
        this.statusBarItem.backgroundColor = undefined
        break
    }
    this.statusBarItem.show()
  }

  refresh() {
    this._onDidChangeTreeData.fire(undefined)
  }

  getTreeItem(element: SparseTreeItem): vscode.TreeItem {
    return element
  }

  async getChildren(element?: SparseTreeItem): Promise<SparseTreeItem[]> {
    if (!this.docsRoot) {
      return [new SparseTreeItem(
        'No docs folder detected',
        '',
        vscode.TreeItemCollapsibleState.None,
        'info'
      )]
    }

    if (!element) {
      const items: SparseTreeItem[] = []

      const dirs = await this.getTopLevelDirectories()
      for (const dir of dirs) {
        const selState = this.getSelectionState(dir.relativePath)
        const item = new SparseTreeItem(
          dir.name,
          dir.relativePath,
          dir.children !== undefined
            ? vscode.TreeItemCollapsibleState.Collapsed
            : vscode.TreeItemCollapsibleState.None,
          'directory'
        )
        item.checkboxState = selState === 'all'
          ? vscode.TreeItemCheckboxState.Checked
          : vscode.TreeItemCheckboxState.Unchecked
        item.description = selState === 'some' ? 'some' : ''
        item.command = {
          command: 'revealInExplorer',
          title: 'Reveal in Explorer',
          arguments: [vscode.Uri.file(dir.fullPath)]
        }
        items.push(item)
      }

      return items
    }

    if (element.itemType === 'directory' && element.relativePath) {
      const fullPath = path.join(this.docsRoot, element.relativePath)
      const children = await this.getSubDirectories(fullPath, element.relativePath)
      return children.map(child => {
        const selState = this.getSelectionState(child.relativePath)
        const item = new SparseTreeItem(
          child.name,
          child.relativePath,
          child.children !== undefined
            ? vscode.TreeItemCollapsibleState.Collapsed
            : vscode.TreeItemCollapsibleState.None,
          'directory'
        )
        item.checkboxState = selState === 'all'
          ? vscode.TreeItemCheckboxState.Checked
          : vscode.TreeItemCheckboxState.Unchecked
        item.description = selState === 'some' ? 'some' : ''
        item.command = {
          command: 'revealInExplorer',
          title: 'Reveal in Explorer',
          arguments: [vscode.Uri.file(child.fullPath)]
        }
        return item
      })
    }

    return []
  }

  private async getTopLevelDirectories(): Promise<DirectoryItem[]> {
    if (!this.docsRoot) return []

    const items: DirectoryItem[] = []
    const entries = await fs.promises.readdir(this.docsRoot, { withFileTypes: true })

    for (const entry of entries) {
      if (!entry.isDirectory()) continue
      if (entry.name.startsWith('.') || entry.name.startsWith('_')) continue
      if (entry.name === 'node_modules') continue

      const fullPath = path.join(this.docsRoot, entry.name)
      const hasSubDirs = await this.hasSubDirectories(fullPath)

      items.push({
        name: entry.name,
        relativePath: entry.name,
        fullPath,
        isDirectory: true,
        children: hasSubDirs ? [] : undefined
      })
    }

    return items.sort((a, b) => a.name.localeCompare(b.name))
  }

  private async getSubDirectories(dirPath: string, parentRelative: string): Promise<DirectoryItem[]> {
    const items: DirectoryItem[] = []

    try {
      const entries = await fs.promises.readdir(dirPath, { withFileTypes: true })

      for (const entry of entries) {
        if (!entry.isDirectory()) continue
        if (entry.name.startsWith('.') || entry.name.startsWith('_')) continue

        const fullPath = path.join(dirPath, entry.name)
        const relativePath = path.join(parentRelative, entry.name)
        const hasSubDirs = await this.hasSubDirectories(fullPath)

        items.push({
          name: entry.name,
          relativePath,
          fullPath,
          isDirectory: true,
          children: hasSubDirs ? [] : undefined
        })
      }
    } catch { }

    return items.sort((a, b) => a.name.localeCompare(b.name))
  }

  private async hasSubDirectories(dirPath: string): Promise<boolean> {
    try {
      const entries = await fs.promises.readdir(dirPath, { withFileTypes: true })
      return entries.some(e =>
        e.isDirectory() &&
        !e.name.startsWith('.') &&
        !e.name.startsWith('_')
      )
    } catch {
      return false
    }
  }
}

export class SparseTreeItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly relativePath: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly itemType: 'directory' | 'toggle' | 'action' | 'separator' | 'info'
  ) {
    super(label, collapsibleState)
    this.contextValue = itemType
  }
}
