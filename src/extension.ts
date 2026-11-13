import * as vscode from 'vscode'
import { SemanticTokensProvider, RoleCompletionProvider, RoleHoverProvider, LEGEND } from './tree-sitter'
import {
  startPyProcess,
  stopPyProcess,
  restartPyProcess,
  buildServer,
  setOutputChannel,
  getDebugOutputChannel,
  getDiagnosticCollection,
  getBuildStatus,
  getServerInfo,
  getPythonPath,
  isLspRunning,
  onBuildStatusChanged,
  onServerStarted,
  onServerStopped,
  onLspStarted
} from './python'
import { LanguageToolChecker, GrammarCodeActionProvider } from './language-tool'
import { GrammarController } from './grammar'
import { PreviewManager } from './browser'
import { SparseTreeProvider, SparseTreeItem } from './sparse-tree'
import { FormatToolbar } from './toolbar'

const RST = { language: 'restructuredtext' }
const isRst = (doc: vscode.TextDocument) => doc.languageId === 'restructuredtext'

let hoverTimeout: NodeJS.Timeout | undefined

async function ignoreForwardedPort(port: number) {
  if (!vscode.env.remoteName || !vscode.workspace.workspaceFolders?.length)
    return
  try {
    const remoteConfig = vscode.workspace.getConfiguration('remote')
    const current = remoteConfig.get<Record<string, any>>('portsAttributes') || {}
    if (current[String(port)]?.onAutoForward === 'ignore')
      return
    const portsAttributes = { ...current, [String(port)]: { onAutoForward: 'ignore' } }
    await remoteConfig.update('portsAttributes', portsAttributes, vscode.ConfigurationTarget.Workspace)
  } catch (err) {
    console.error('Failed to update remote.portsAttributes:', err)
  }
}

export async function activate(ctx: vscode.ExtensionContext) {
  const output = vscode.window.createOutputChannel("Doctools")
  const log: string[] = []
  const appendLine = output.appendLine.bind(output)
  output.appendLine = (line: string) => {
    log.push(line)
    if (log.length > 500) log.shift()
    appendLine(line)
  }
  setOutputChannel(output)

  const provider = new SemanticTokensProvider()
  const completionProvider = new RoleCompletionProvider()
  const hoverProvider = new RoleHoverProvider(provider)
  const grammarDiagnostics = vscode.languages.createDiagnosticCollection('grammar')
  const grammarChecker = new LanguageToolChecker(grammarDiagnostics)
  const grammar = new GrammarController(ctx, provider, grammarChecker)
  const preview = new PreviewManager()
  const sparseTreeProvider = new SparseTreeProvider(ctx)

  const workspaceFolder = vscode.workspace.workspaceFolders?.[0]
  if (workspaceFolder) {
    sparseTreeProvider.setDocsRoot(workspaceFolder.uri.fsPath)
  }

  buildServer.setSparsePathsGetter(() => sparseTreeProvider.getSparsePaths())
  sparseTreeProvider.setOnSparseChanged(() => buildServer.updateSparse())

  const treeView = vscode.window.createTreeView('adi-doctools.sparse-tree', {
    treeDataProvider: sparseTreeProvider,
    manageCheckboxStateManually: true
  })

  const checkboxHandler = treeView.onDidChangeCheckboxState(async e => {
    for (const [item] of e.items) {
      if (item instanceof SparseTreeItem && item.itemType === 'directory') {
        await sparseTreeProvider.togglePath(item.relativePath)
      }
    }
  })

  const showServerMenu = async () => {
    const isRunning = getBuildStatus() !== 'off'

    const options = isRunning
      ? [
          {
            label: '$(globe) Open Preview',
            description: 'Open the documentation in a panel',
            action: 'preview'
          },
          {
            label: '$(link-external) Open in Browser',
            description: 'Open the documentation in the default browser',
            action: 'browser'
          },
          {
            label: '$(refresh) Restart Server',
            description: 'Restart the documentation server',
            action: 'restart'
          },
          {
            label: '$(debug-stop) Stop Server',
            description: 'Stop the documentation server',
            action: 'stop'
          },
          {
            label: '$(output) Show Output',
            description: 'Show the build log',
            action: 'output'
          }
        ]
      : [
          {
            label: '$(play) Start Server',
            description: 'Start the documentation server',
            action: 'start'
          },
          {
            label: '$(output) Show Output',
            description: 'Show the build log',
            action: 'output'
          }
        ]

    const selected = await vscode.window.showQuickPick(options, {
      placeHolder: isRunning ? 'The service is currently running' : 'The service is currently stopped',
      title: 'Doctools Sphinx Server'
    })

    switch (selected?.action) {
      case 'start':
        await buildServer.start()
        break
      case 'stop':
        await buildServer.stop()
        break
      case 'restart':
        await buildServer.restart()
        break
      case 'preview':
        await preview.open(getServerInfo())
        break
      case 'browser':
        await vscode.commands.executeCommand('adi-doctools.open-in-browser')
        break
      case 'output':
        output.show()
        break
    }
  }

  ctx.subscriptions.push(
    output,
    getDebugOutputChannel(),
    getDiagnosticCollection(),
    grammarDiagnostics,
    grammarChecker,
    grammar,
    preview,
    provider,
    new FormatToolbar(),
    vscode.commands.registerCommand('adi-doctools.show-toolbar', () =>
      vscode.commands.executeCommand(`${FormatToolbar.viewType}.focus`)),
    vscode.languages.registerDocumentSemanticTokensProvider(RST, provider, LEGEND),
    vscode.languages.registerCompletionItemProvider(RST, completionProvider, ':', '`', '<', '+', '.', ' '),
    vscode.languages.registerHoverProvider(RST, hoverProvider),
    vscode.languages.registerCodeActionsProvider(
      RST,
      new GrammarCodeActionProvider(),
      { providedCodeActionKinds: GrammarCodeActionProvider.providedCodeActionKinds }
    ),

    onBuildStatusChanged((status) => {
      sparseTreeProvider.setBuildStatus(status)
      if (status === 'ready')
        preview.onBuildCompleted()
    }),
    onServerStarted((info) => {
      ignoreForwardedPort(info.port)
      preview.open(info)
    }),
    onServerStopped(() => preview.close()),
    onLspStarted(() => grammar.onBackendStarted()),

    vscode.window.onDidChangeTextEditorSelection((e) => {
      if (!isRst(e.textEditor.document)) return
      if (e.kind === vscode.TextEditorSelectionChangeKind.Mouse) return
      if (!getServerInfo()) return

      if (hoverTimeout) clearTimeout(hoverTimeout)
      hoverTimeout = setTimeout(async () => {
        if (vscode.window.activeTextEditor !== e.textEditor) return
        const tree = await provider.getTree(e.textEditor.document)
        const info = tree && provider.getRoleAtCursor(tree, e.textEditor.selection.active)
        if (info) {
          vscode.commands.executeCommand('editor.action.showHover')
        }
      }, 300)
    }),

    vscode.workspace.onDidSaveTextDocument((doc) => grammar.schedule(doc, 0)),
    vscode.workspace.onDidChangeTextDocument((e) => {
      if (e.contentChanges.length > 0)
        grammar.schedule(e.document)
    }),
    vscode.workspace.onDidOpenTextDocument((doc) => grammar.schedule(doc, 0)),
    vscode.workspace.onDidCloseTextDocument((doc) => {
      grammar.forget(doc)
      provider.releaseTree(doc)
    }),
    vscode.window.onDidChangeActiveTextEditor((editor) => {
      if (editor && vscode.languages.getDiagnostics(editor.document.uri).every(d => d.source !== 'LanguageTool'))
        grammar.schedule(editor.document, 0)
    }),

    vscode.workspace.onDidChangeConfiguration(async (e) => {
      if (e.affectsConfiguration('adi-doctools.grammar'))
        grammar.onConfigurationChanged()
      if (e.affectsConfiguration('adi-doctools.pythonPath')) {
        const wasRunning = getBuildStatus() !== 'off'
        if (await restartPyProcess() && wasRunning)
          await buildServer.start()
      }
    }),

    vscode.commands.registerCommand('adi-doctools.start-server', () => buildServer.start()),
    vscode.commands.registerCommand('adi-doctools.stop-server', () => buildServer.stop()),
    vscode.commands.registerCommand('adi-doctools.restart-server', () => buildServer.restart()),
    vscode.commands.registerCommand('adi-doctools.server-menu', showServerMenu),
    vscode.commands.registerCommand('adi-doctools.show-output', () => output.show()),
    vscode.commands.registerCommand('adi-doctools.open-preview', async () => {
      if (getServerInfo() || await buildServer.start())
        await preview.open(getServerInfo())
    }),
    vscode.commands.registerCommand('adi-doctools.open-in-browser', async () => {
      const url = getServerInfo()?.url
      if (!url) {
        vscode.window.showInformationMessage('Doctools: the server is not running.')
        return
      }
      await vscode.env.openExternal(await vscode.env.asExternalUri(vscode.Uri.parse(url)))
    }),
    vscode.commands.registerCommand('adi-doctools.clear-sparse', () => sparseTreeProvider.clear()),
    vscode.commands.registerCommand('adi-doctools.check-grammar', () => {
      const editor = vscode.window.activeTextEditor
      if (!editor || !isRst(editor.document)) {
        vscode.window.showWarningMessage('Open a reStructuredText file first')
        return
      }
      grammar.schedule(editor.document, 0)
    }),
    vscode.commands.registerCommand('adi-doctools.disable-grammar-rule', (ruleId: string) => grammar.disableRule(ruleId)),
    vscode.commands.registerCommand('adi-doctools.cycle-grammar-mode', () => grammar.pickMode()),

    treeView,
    checkboxHandler,
  )

  const api = {
    preview: () => preview.getState(),
    buildStatus: () => getBuildStatus(),
    serverInfo: () => getServerInfo(),
    pythonPath: () => getPythonPath(),
    lspRunning: () => isLspRunning(),
    grammarMode: () => grammar.effectiveMode(),
    log: () => [...log],
    sparsePaths: () => sparseTreeProvider.getSparsePaths(),
    toggleSparse: (relativePath: string) => sparseTreeProvider.togglePath(relativePath)
  }

  startPyProcess().then(() => grammar.checkVisible())

  return api
}

export function deactivate() {
  if (hoverTimeout) clearTimeout(hoverTimeout)
  return stopPyProcess()
}
