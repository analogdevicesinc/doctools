import * as vscode from 'vscode'
import { SemanticTokensProvider, RoleCompletionProvider, RoleHoverProvider, LEGEND } from './tree-sitter'
import { startPyProcess, stopPyProcess, buildServer, setOutputChannel, getDebugOutputChannel, getDiagnosticCollection } from './python'

let output: vscode.OutputChannel
let provider: SemanticTokensProvider
let completionProvider: RoleCompletionProvider
let hoverProvider: RoleHoverProvider
let hoverTimeout: NodeJS.Timeout | undefined

export async function activate(ctx: vscode.ExtensionContext) {
  output = vscode.window.createOutputChannel("Doctools")
  setOutputChannel(output)
  provider = new SemanticTokensProvider()
  completionProvider = new RoleCompletionProvider()
  hoverProvider = new RoleHoverProvider(provider)

  ctx.subscriptions.push(
    output,
    getDebugOutputChannel(),
    getDiagnosticCollection(),
    vscode.languages.registerDocumentSemanticTokensProvider({ language: 'restructuredtext' }, provider, LEGEND),
    vscode.languages.registerCompletionItemProvider({ language: 'restructuredtext' }, completionProvider, ':', '`', '<', '+', '.', ' '),
    vscode.languages.registerHoverProvider({ language: 'restructuredtext' }, hoverProvider),

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

    vscode.commands.registerCommand('adi-doctools.start-server', buildServer.start),
    vscode.commands.registerCommand('adi-doctools.stop-server', buildServer.stop)
  )

  await startPyProcess()
}

export function deactivate() {
  stopPyProcess()
}
