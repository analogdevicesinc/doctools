import * as vscode from 'vscode'
import { SemanticTokensProvider, RoleCompletionProvider, RoleHoverProvider, LEGEND } from './tree-sitter'
import { startPyProcess, stopPyProcess, buildServer, setOutputChannel, getDebugOutputChannel, getDiagnosticCollection, onBuildStatusChanged } from './python'
import { LanguageToolChecker, GrammarCodeActionProvider } from './language-tool'
import { openBrowserPanel } from './browser'
import { SparseTreeProvider, SparseTreeItem } from './sparse-tree'

let output: vscode.OutputChannel
let provider: SemanticTokensProvider
let completionProvider: RoleCompletionProvider
let hoverProvider: RoleHoverProvider
let grammarChecker: LanguageToolChecker
let grammarDiagnostics: vscode.DiagnosticCollection
let hoverTimeout: NodeJS.Timeout | undefined
let checkTimeout: NodeJS.Timeout | undefined
let sparseTreeProvider: SparseTreeProvider

export async function activate(ctx: vscode.ExtensionContext) {
  const remoteConfig = vscode.workspace.getConfiguration('remote')
  const portsAttributes = remoteConfig.get<Record<string, unknown>>('portsAttributes') || {}
  if (!portsAttributes['8080'] || (portsAttributes['8080'] as any).onAutoForward !== 'ignore') {
    portsAttributes['8080'] = { onAutoForward: 'ignore' }
    await remoteConfig.update('portsAttributes', portsAttributes, vscode.ConfigurationTarget.Workspace)
  }

  output = vscode.window.createOutputChannel("Doctools")
  setOutputChannel(output)
  provider = new SemanticTokensProvider()
  completionProvider = new RoleCompletionProvider()
  hoverProvider = new RoleHoverProvider(provider)
  grammarDiagnostics = vscode.languages.createDiagnosticCollection('grammar')
  grammarChecker = new LanguageToolChecker(grammarDiagnostics)

  sparseTreeProvider = new SparseTreeProvider(ctx)

  const workspaceFolder = vscode.workspace.workspaceFolders?.[0]
  if (workspaceFolder) {
    sparseTreeProvider.setDocsRoot(workspaceFolder.uri.fsPath)
  }

  buildServer.setSparsePathsGetter(() => sparseTreeProvider.getSparsePaths())
  sparseTreeProvider.setOnSparseChanged(() => buildServer.updateSparse())
  onBuildStatusChanged((status) => sparseTreeProvider.setBuildStatus(status))

  const treeView = vscode.window.createTreeView('adi-doctools.sparse-tree', {
    treeDataProvider: sparseTreeProvider,
    manageCheckboxStateManually: true
  })

  const checkboxHandler = treeView.onDidChangeCheckboxState(e => {
    for (const [item] of e.items) {
      if (item instanceof SparseTreeItem && item.itemType === 'directory') {
        sparseTreeProvider.togglePath(item.relativePath)
      }
    }
  })

  ctx.subscriptions.push(
    output,
    getDebugOutputChannel(),
    getDiagnosticCollection(),
    grammarDiagnostics,
    vscode.languages.registerDocumentSemanticTokensProvider({ language: 'restructuredtext' }, provider, LEGEND),
    vscode.languages.registerCompletionItemProvider({ language: 'restructuredtext' }, completionProvider, ':', '`', '<', '+', '.', ' '),
    vscode.languages.registerHoverProvider({ language: 'restructuredtext' }, hoverProvider),
    vscode.languages.registerCodeActionsProvider(
      { language: 'restructuredtext' },
      new GrammarCodeActionProvider(),
      { providedCodeActionKinds: GrammarCodeActionProvider.providedCodeActionKinds }
    ),

    vscode.window.onDidChangeTextEditorSelection(async (e) => {
      if (e.textEditor.document.languageId !== 'restructuredtext') return
      if (e.kind === vscode.TextEditorSelectionChangeKind.Mouse) return

      if (hoverTimeout) clearTimeout(hoverTimeout)
      hoverTimeout = setTimeout(async () => {
        const rst = await provider.init()
        const tree = rst.parser.parse(e.textEditor.document.getText())
        const info = tree && provider.getRoleAtCursor(tree, e.selections[0].active)
        if (info) {
          vscode.commands.executeCommand('editor.action.showHover')
        }
      }, 300)
    }),

    // Auto-check grammar on document save
    vscode.workspace.onDidSaveTextDocument(async (doc) => {
      if (doc.languageId !== 'restructuredtext') return
      await checkGrammar(doc)
    }),

    // Debounced grammar check on document change
    vscode.workspace.onDidChangeTextDocument(async (e) => {
      if (e.document.languageId !== 'restructuredtext') return
      if (checkTimeout) clearTimeout(checkTimeout)
      checkTimeout = setTimeout(() => checkGrammar(e.document), 1000)
    }),

    vscode.window.onDidChangeActiveTextEditor(async (editor) => {
      if (!editor || editor.document.languageId !== 'restructuredtext') return
      await checkGrammar(editor.document)
    }),

    vscode.commands.registerCommand('adi-doctools.start-server', buildServer.start),
    vscode.commands.registerCommand('adi-doctools.stop-server', buildServer.stop),
    vscode.commands.registerCommand('adi-doctools.open-preview', openBrowserPanel),
    vscode.commands.registerCommand('adi-doctools.check-grammar', async () => {
      const editor = vscode.window.activeTextEditor
      if (!editor || editor.document.languageId !== 'restructuredtext') {
        vscode.window.showWarningMessage('Open a reStructuredText file first')
        return
      }
      await checkGrammar(editor.document)
    }),
    vscode.commands.registerCommand('adi-doctools.disable-grammar-rule', async (ruleId: string) => {
      const config = vscode.workspace.getConfiguration('adi-doctools.grammar')
      const disabledRules = config.get<string[]>('disabledRules', []) || []
      if (!disabledRules.includes(ruleId)) {
        disabledRules.push(ruleId)
        await config.update('disabledRules', disabledRules, vscode.ConfigurationTarget.Workspace)
        vscode.window.showInformationMessage(`Disabled rule "${ruleId}"`)
        // Re-check current document
        const editor = vscode.window.activeTextEditor
        if (editor?.document.languageId === 'restructuredtext') {
          await checkGrammar(editor.document)
        }
      }
    }),

    treeView,
    checkboxHandler,
  )

  await startPyProcess()

  const activeEditor = vscode.window.activeTextEditor
  if (activeEditor && activeEditor.document.languageId === 'restructuredtext') {
    await checkGrammar(activeEditor.document)
  }
}

async function checkGrammar(doc: vscode.TextDocument) {
  try {
    const rst = await provider.init()
    grammarChecker.setLangConfig({ parser: rst.parser, lang: rst.lang })
    const tree = rst.parser.parse(doc.getText())
    if (tree) {
      await grammarChecker.check(doc, tree.rootNode)
    }
  } catch (err) {
    console.error('Grammar check failed:', err)
  }
}

export function deactivate() {
  stopPyProcess()
}
