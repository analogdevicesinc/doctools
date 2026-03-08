import * as vscode from 'vscode'
import { SemanticTokensProvider, LEGEND } from './tree-sitter'
import { startPyProcess, stopPyProcess, setOutputChannel } from './python'

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

    vscode.commands.registerCommand('adi-doctools.init-server', () => {
      startPyProcess()
    })
  )

  await vscode.commands.executeCommand('adi-doctools.init-server')
}

export function deactivate() {
  stopPyProcess()
}
