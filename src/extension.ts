import * as vscode from 'vscode'
import { SemanticTokensProvider, LEGEND } from './tree-sitter'
import { start_py_process, stop_py_process, setOutputChannel } from './python'

let output: vscode.OutputChannel
let provider: SemanticTokensProvider

export async function activate(ctx: vscode.ExtensionContext) {
  output = vscode.window.createOutputChannel("Doctools")
  setOutputChannel(output)
  provider = new SemanticTokensProvider()

  ctx.subscriptions.push(
    output,
    vscode.languages.registerDocumentSemanticTokensProvider({ language: 'restructuredtext' }, provider, LEGEND),

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

      const url = provider.resolveRoleUrl(info.role, info.target)
      vscode.window.showInformationMessage(url ? `URL: ${url}` : `:${info.role}:\`${info.target}\``)
    }),

    vscode.commands.registerCommand('adi-doctools.action', async () => {
      const ed = vscode.window.activeTextEditor
      if (!ed || ed.document.languageId !== 'restructuredtext') return

      const rst = await provider.init()
      const tree = rst.parser.parse(ed.document.getText())
      const info = tree && provider.getRoleAtCursor(tree, ed.selection.active)
      if (!info) return

      const url = provider.resolveRoleUrl(info.role, info.target)
      if (url) vscode.env.openExternal(vscode.Uri.parse(url))
    }),

    vscode.commands.registerCommand('adi-doctools.reload', () => {
      ctx.subscriptions.forEach(s => s.dispose())
      ctx.subscriptions.length = 0
      activate(ctx)
      vscode.window.showInformationMessage('Doctools reloaded')
    }),

    vscode.commands.registerCommand('adi-doctools.init-server', () => {
      start_py_process()
    })
  )

  await vscode.commands.executeCommand('adi-doctools.init-server')
}

export function deactivate() {
  stop_py_process()
}
