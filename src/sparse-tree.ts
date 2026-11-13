import * as vscode from 'vscode'
import * as path from 'path'
import * as fs from 'fs'
import { SparseSelection } from './sparse-state'

const IGNORED_DIRS = new Set(['node_modules', 'venv', 'env'])
const isDocDir = (entry: fs.Dirent) =>
  entry.isDirectory() &&
  !entry.name.startsWith('.') &&
  !entry.name.startsWith('_') &&
  !IGNORED_DIRS.has(entry.name)

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

  private state = new SparseSelection([], path.sep)
  private containDocCache = new Map<string, Promise<boolean>>()

  private docsRoot: string | undefined
  private statusBarItem: vscode.StatusBarItem
  private context: vscode.ExtensionContext
  private onSparseChanged: (() => void) | undefined
  private sparseUpdateTimeout: NodeJS.Timeout | undefined
  private buildStatus: 'off' | 'building' | 'ready' = 'off'
  private setupNeeded = false
  private watcher: vscode.FileSystemWatcher | undefined
  private refreshTimeout: NodeJS.Timeout | undefined
  private cachedDirs: DirectoryItem[] | undefined
  private cachedTotalCount: number = 0
  private walkthroughShown: boolean = false

  constructor(context: vscode.ExtensionContext) {
    this.context = context
    this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100)
    this.statusBarItem.command = 'adi-doctools.server-menu'
    context.subscriptions.push(this.statusBarItem)

    this.loadState()
    this.updateStatusBar()
  }

  getBuildStatus(): 'off' | 'building' | 'ready' {
    return this.buildStatus
  }

  private loadState() {
    const saved = this.context.workspaceState.get<{
      paths: string[]
    }>('sparseState')

    if (saved?.paths) {
      this.state = new SparseSelection(saved.paths, path.sep)
    }
  }

  private saveState() {
    this.context.workspaceState.update('sparseState', {
      paths: this.state.toArray()
    })
  }

  setDocsRoot(docsRoot: string) {
    this.docsRoot = docsRoot

    this.watcher?.dispose()
    this.watcher = vscode.workspace.createFileSystemWatcher(
      new vscode.RelativePattern(docsRoot, '**/*.rst')
    )
    this.watcher.onDidCreate(() => this.debouncedRefresh())
    this.watcher.onDidDelete(() => this.debouncedRefresh())
    this.context.subscriptions.push(this.watcher)

    const root = docsRoot
    if (this.state.prune(p => fs.existsSync(path.join(root, p)))) {
      this.saveState()
      this.updateStatusBar()
    }

    this.invalidateCache()
    this.refresh()
  }

  private debouncedRefresh() {
    if (this.refreshTimeout) {
      clearTimeout(this.refreshTimeout)
    }
    this.refreshTimeout = setTimeout(() => {
      this.invalidateCache()
      this.refresh()
    }, 1000)
  }

  private invalidateCache() {
    this.cachedDirs = undefined
    this.containDocCache.clear()
  }

  private getSelectionState(relativePath: string): 'all' | 'some' | 'none' {
    return this.state.stateOf(relativePath)
  }

  setOnSparseChanged(handler: () => void) {
    this.onSparseChanged = handler
  }

  setSetupNeeded(needed: boolean) {
    this.setupNeeded = needed
    this.updateStatusBar()
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

  getSparsePaths(): string[] | null {
    return this.state.size > 0 ? this.state.toArray() : null
  }

  isSparseMode(): boolean {
    return this.state.size > 0
  }

  clear() {
    if (this.state.size === 0) return
    this.state = new SparseSelection([], path.sep)
    this.saveState()
    this.updateStatusBar()
    this.refresh()
    this.notifySparseChanged()
  }

  async togglePath(relativePath: string) {
    const siblings = new Map<string, string[]>()
    if (this.docsRoot) {
      const parts = relativePath.split(path.sep)
      for (let i = 1; i < parts.length; i++) {
        const parent = parts.slice(0, i).join(path.sep)
        const children = await this.getSubDirectories(path.join(this.docsRoot, parent), parent)
        siblings.set(parent, children.map(c => c.relativePath))
      }
    }
    this.state.toggle(relativePath, parent => siblings.get(parent) ?? [])

    this.saveState()
    this.updateStatusBar()
    this.refresh()
    this.notifySparseChanged()
  }

  private updateStatusBar() {
    const sparse = this.state.size > 0 ? ` (sparse: ${this.state.size})` : ''
    if (this.setupNeeded && this.buildStatus === 'off') {
      this.statusBarItem.text = '$(warning) Docs: Set up Python'
      this.statusBarItem.tooltip = 'No Python environment with adi-doctools was found, click to set it up'
      this.statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground')
      this.statusBarItem.show()
      return
    }
    switch (this.buildStatus) {
      case 'off':
        this.statusBarItem.text = '$(circle-slash) Docs: Stopped'
        this.statusBarItem.tooltip = 'Documentation server not running'
        this.statusBarItem.backgroundColor = undefined
        break
      case 'building':
        this.statusBarItem.text = `$(sync~spin) Docs: Building...${sparse}`
        this.statusBarItem.tooltip = 'Building the documentation'
        this.statusBarItem.backgroundColor = undefined
        break
      case 'ready':
        this.statusBarItem.text = `$(check) Docs: Up-to-date${sparse}`
        this.statusBarItem.tooltip = sparse
          ? `The documentation build is up-to-date, limited to: ${this.state.toArray().join(', ')}`
          : 'The documentation build is up-to-date.'
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

    if (this.cachedDirs) {
      return this.cachedDirs
    }

    const items: DirectoryItem[] = []
    const entries = await fs.promises.readdir(this.docsRoot, { withFileTypes: true })

    for (const entry of entries) {
      if (!isDocDir(entry)) continue

      const fullPath = path.join(this.docsRoot, entry.name)

      if (!await this.containDoc(fullPath)) continue

      const hasSubDirs = await this.hasSubDirectories(fullPath)

      items.push({
        name: entry.name,
        relativePath: entry.name,
        fullPath,
        isDirectory: true,
        children: hasSubDirs ? [] : undefined
      })
    }

    this.cachedDirs = items.sort((a, b) => a.name.localeCompare(b.name))

    this.cachedTotalCount = await this.countDocDirectories()

    if (!this.walkthroughShown && this.state.size === 0 && this.cachedTotalCount >= 100) {
      this.walkthroughShown = true
      const action = await vscode.window.showInformationMessage(
        `This docs has ${this.cachedTotalCount}+ pages, use Sparse build to build only the sections you're working on.`,
        'Show Sparse build',
        'Dismiss'
      )

      if (action === 'Show Sparse build') {
        vscode.commands.executeCommand('adi-doctools.sparse-tree.focus')
      }
    }

    return this.cachedDirs
  }

  private async countDocDirectories(): Promise<number> {
    if (!this.docsRoot) return 0

    let count = 0
    const countInDir = async (dirPath: string): Promise<void> => {
      try {
        const entries = await fs.promises.readdir(dirPath, { withFileTypes: true })

        for (const entry of entries) {
          if (!isDocDir(entry)) continue

          const fullPath = path.join(dirPath, entry.name)

          if (await this.containDoc(fullPath)) {
            count++
            if (count < 100) {
              await countInDir(fullPath)
            }
          }
        }
      } catch { }
    }

    await countInDir(this.docsRoot)
    return count
  }

  private async getSubDirectories(dirPath: string, parentRelative: string): Promise<DirectoryItem[]> {
    const items: DirectoryItem[] = []

    try {
      const entries = await fs.promises.readdir(dirPath, { withFileTypes: true })

      for (const entry of entries) {
        if (!isDocDir(entry)) continue

        const fullPath = path.join(dirPath, entry.name)

        if (!await this.containDoc(fullPath)) continue

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
      for (const entry of entries) {
        if (isDocDir(entry) && await this.containDoc(path.join(dirPath, entry.name)))
          return true
      }
      return false
    } catch {
      return false
    }
  }

  private containDoc(dirPath: string): Promise<boolean> {
    let cached = this.containDocCache.get(dirPath)
    if (!cached) {
      cached = this.scanForDoc(dirPath)
      this.containDocCache.set(dirPath, cached)
    }
    return cached
  }

  private async scanForDoc(dirPath: string): Promise<boolean> {
    try {
      const entries = await fs.promises.readdir(dirPath, { withFileTypes: true })

      const hasRstFiles = entries.some(e => e.isFile() && e.name.endsWith('.rst'))
      if (hasRstFiles) return true

      for (const entry of entries) {
        if (isDocDir(entry)) {
          const subPath = path.join(dirPath, entry.name)
          if (await this.containDoc(subPath)) {
            return true
          }
        }
      }

      return false
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
