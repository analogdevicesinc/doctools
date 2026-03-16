import * as vscode from 'vscode'
import { SemanticTokensProvider, RoleCompletionProvider, RoleHoverProvider, LEGEND } from './tree-sitter'
import { startPyProcess, stopPyProcess, buildServer, setOutputChannel } from './python'

let output: vscode.OutputChannel
let provider: SemanticTokensProvider
let completionProvider: RoleCompletionProvider
let hoverProvider: RoleHoverProvider

export async function activate(ctx: vscode.ExtensionContext) {
  output = vscode.window.createOutputChannel("Doctools")
  setOutputChannel(output)
  provider = new SemanticTokensProvider()
  completionProvider = new RoleCompletionProvider()
  hoverProvider = new RoleHoverProvider(provider)

  ctx.subscriptions.push(
    output,
    vscode.languages.registerDocumentSemanticTokensProvider({ language: 'restructuredtext' }, provider, LEGEND),
    vscode.languages.registerCompletionItemProvider({ language: 'restructuredtext' }, completionProvider, ':', '`', '<'),
    vscode.languages.registerHoverProvider({ language: 'restructuredtext' }, hoverProvider),

    vscode.commands.registerCommand('adi-doctools.inspect', async () => {
      const ed = vscode.window.activeTextEditor
      if (!ed || ed.document.languageId !== 'restructuredtext') return

      const rst = await provider.init()
      const tree = rst.parser.parse(ed.document.getText())
      if (!tree) return

      const info = provider.getRoleAtCursor(tree, ed.selection.active)
      if (!info) {
        vscode.window.showInformationMessage('No role at cursor')
        return
      }

      const obj = await provider.resolveRole(info)
      if (obj)
        vscode.window.showInformationMessage(`target: ${obj.target}, title: ${obj.title}`)
      else
        vscode.window.showInformationMessage(`:${info.role}:\`${info.target}\``)
    }),

    vscode.commands.registerCommand('adi-doctools.action', async () => {
      const ed = vscode.window.activeTextEditor
      if (!ed || ed.document.languageId !== 'restructuredtext') return

      const rst = await provider.init()
      const tree = rst.parser.parse(ed.document.getText())
      const info = tree && provider.getRoleAtCursor(tree, ed.selection.active)
      if (!info) return

      const obj = await provider.resolveRole(info)
      if (obj?.target) // TODO: is url?
        vscode.env.openExternal(vscode.Uri.parse(obj.target))
    }),

    vscode.commands.registerCommand('adi-doctools.reload', () => {
      ctx.subscriptions.forEach(s => s.dispose())
      ctx.subscriptions.length = 0
      activate(ctx)
      vscode.window.showInformationMessage('Doctools reloaded')
    }),

    vscode.commands.registerCommand('adi-doctools.start-server', buildServer.start),
    vscode.commands.registerCommand('adi-doctools.stop-server', buildServer.stop)
  )

  await startPyProcess()
}

export function deactivate() {
  stopPyProcess()
}
