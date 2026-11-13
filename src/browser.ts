import * as vscode from 'vscode'
import * as fs from 'fs'
import * as path from 'path'
import { randomBytes } from 'crypto'
import { ServerInfo } from './python'
import {
  editorToSourceLine,
  sourceLineToEditorTop,
  pagePathToDocnames,
  docnameToPagePath,
  sourceToDocname,
  docnameToSources
} from './scroll-map'

const EDITOR_ECHO_MS = 350
const PREVIEW_LEAD_MS = 500

export interface PreviewState {
  open: boolean
  connected: boolean
  pagePath: string | undefined
  source: string | undefined
  lastSentLine: number | undefined
  lastReceivedLine: number | undefined
}

export class PreviewManager implements vscode.Disposable {
  private panel: vscode.WebviewPanel | undefined
  private server: ServerInfo | undefined
  private origin: string | undefined
  private connected = false
  private pagePath: string | undefined
  private source: string | undefined
  private ignoreEditorUntil = 0
  private previewLeadsUntil = 0
  private lastSentLine: number | undefined
  private lastReceivedLine: number | undefined
  private disposables: vscode.Disposable[] = []

  constructor() {
    this.disposables.push(
      vscode.window.onDidChangeTextEditorVisibleRanges(e => this.onEditorScrolled(e.textEditor)),
      vscode.window.onDidChangeActiveTextEditor(editor => this.onActiveEditorChanged(editor)),
      vscode.window.onDidChangeVisibleTextEditors(() => this.syncFromEditor())
    )
  }

  dispose() {
    this.close()
    this.disposables.forEach(d => d.dispose())
  }

  getState(): PreviewState {
    return {
      open: this.panel !== undefined,
      connected: this.connected,
      pagePath: this.pagePath,
      source: this.source,
      lastSentLine: this.lastSentLine,
      lastReceivedLine: this.lastReceivedLine
    }
  }

  isOpen(): boolean {
    return this.panel !== undefined
  }

  getUrl(): string | undefined {
    return this.server?.url
  }

  setServer(server: ServerInfo | undefined) {
    this.server = server
  }

  async open(server?: ServerInfo) {
    if (server)
      this.server = server
    if (!this.server) {
      vscode.window.showInformationMessage('Doctools: start the server to open the preview.', 'Start Server')
        .then(choice => {
          if (choice === 'Start Server')
            vscode.commands.executeCommand('adi-doctools.start-server')
        })
      return
    }

    const url = await this.externalUrl(this.server.url, this.initialPagePath())
    this.origin = new URL(url).origin
    this.connected = false
    this.pagePath = undefined
    this.source = undefined

    if (!this.panel) {
      this.panel = vscode.window.createWebviewPanel(
        'doctoolsBrowser',
        'Doctools Sphinx Preview',
        { viewColumn: vscode.ViewColumn.Beside, preserveFocus: true },
        {
          enableScripts: true,
          retainContextWhenHidden: true
        }
      )
      this.panel.onDidDispose(() => {
        this.panel = undefined
        this.connected = false
        this.pagePath = undefined
        this.source = undefined
      })
      this.panel.webview.onDidReceiveMessage(msg => this.onMessage(msg))
    } else {
      this.panel.reveal(undefined, true)
    }

    this.panel.webview.html = getWebviewContent(url, this.origin)
  }

  close() {
    this.panel?.dispose()
    this.panel = undefined
    this.server = undefined
  }

  private config<T>(key: string, fallback: T): T {
    return vscode.workspace.getConfiguration('adi-doctools.preview').get<T>(key, fallback)
  }

  private async externalUrl(url: string, pagePath: string | undefined): Promise<string> {
    const local = new URL(url)
    if (pagePath)
      local.pathname = pagePath
    try {
      const external = await vscode.env.asExternalUri(vscode.Uri.parse(local.origin))
      const mapped = new URL(external.toString(true))
      local.protocol = mapped.protocol
      local.host = mapped.host
    } catch { }
    return local.toString()
  }

  private initialPagePath(): string | undefined {
    if (!this.config('followEditor', true))
      return undefined
    const editor = vscode.window.activeTextEditor
    return editor ? this.pagePathFor(editor.document) : undefined
  }

  private pagePathFor(document: vscode.TextDocument): string | undefined {
    if (!this.server || document.uri.scheme !== 'file')
      return undefined
    const { srcdir, builddir } = this.server
    const docname = sourceToDocname(path.relative(realpath(srcdir), realpath(document.uri.fsPath)))
    if (!docname)
      return undefined
    const pagePath = docnameToPagePath(docname)
    if (!fs.existsSync(path.join(builddir, pagePath, 'index.html')))
      return undefined
    return pagePath
  }

  private sourceFor(pagePath: string): string | undefined {
    const srcdir = this.server?.srcdir
    if (!srcdir)
      return undefined
    for (const docname of pagePathToDocnames(pagePath)) {
      for (const source of docnameToSources(docname)) {
        const file = path.join(srcdir, source)
        if (fs.existsSync(file))
          return realpath(file)
      }
    }
    return undefined
  }

  private editorFor(source: string | undefined): vscode.TextEditor | undefined {
    if (!source)
      return undefined
    const matches = (editor: vscode.TextEditor) =>
      editor.document.uri.scheme === 'file' && realpath(editor.document.uri.fsPath) === source
    const active = vscode.window.activeTextEditor
    if (active && matches(active))
      return active
    return vscode.window.visibleTextEditors.find(matches)
  }

  private post(msg: object) {
    if (this.panel && this.connected)
      this.panel.webview.postMessage(msg)
  }

  private onMessage(msg: any) {
    if (!msg || typeof msg.type !== 'string')
      return

    if (msg.type === 'ready') {
      this.connected = true
      this.pagePath = String(msg.path)
      this.source = this.sourceFor(this.pagePath)
      this.previewLeadsUntil = 0
      this.syncFromEditor()
      return
    }

    if (msg.type === 'scroll' && typeof msg.line === 'number')
      this.onPreviewScrolled(msg.line, String(msg.path))
  }

  private editorView(editor: vscode.TextEditor) {
    const ranges = editor.visibleRanges
    if (ranges.length === 0)
      return undefined
    const visible = ranges.reduce((sum, r) => sum + r.end.line - r.start.line + 1, 0)
    return { top: ranges[0].start.line, visible, lines: editor.document.lineCount }
  }

  private syncFromEditor() {
    const editor = this.editorFor(this.source)
    if (editor)
      this.sendEditorPosition(editor)
  }

  private sendEditorPosition(editor: vscode.TextEditor) {
    if (!this.config('scrollSync', true))
      return
    const view = this.editorView(editor)
    if (!view)
      return
    this.lastSentLine = editorToSourceLine(view)
    this.post({ type: 'scroll', line: this.lastSentLine, lines: view.lines })
  }

  private onEditorScrolled(editor: vscode.TextEditor) {
    if (!this.connected || editor !== this.editorFor(this.source))
      return
    const now = Date.now()
    if (now < this.ignoreEditorUntil || now < this.previewLeadsUntil)
      return
    this.sendEditorPosition(editor)
  }

  private onPreviewScrolled(line: number, pagePath: string) {
    if (!this.config('scrollSync', true) || pagePath !== this.pagePath)
      return
    const editor = this.editorFor(this.source)
    const view = editor && this.editorView(editor)
    if (!editor || !view)
      return

    this.lastReceivedLine = line
    const now = Date.now()
    this.previewLeadsUntil = now + PREVIEW_LEAD_MS
    const top = sourceLineToEditorTop(line, view)
    if (top === view.top)
      return
    this.ignoreEditorUntil = now + EDITOR_ECHO_MS
    const target = Math.min(top + revealPadding(editor.document), editor.document.lineCount - 1)
    editor.revealRange(new vscode.Range(target, 0, target, 0), vscode.TextEditorRevealType.AtTop)
  }

  private onActiveEditorChanged(editor: vscode.TextEditor | undefined) {
    if (!editor || !this.connected)
      return
    const source = editor.document.uri.scheme === 'file' ? realpath(editor.document.uri.fsPath) : undefined
    if (source === this.source) {
      this.sendEditorPosition(editor)
      return
    }
    if (!this.config('followEditor', true))
      return
    const pagePath = this.pagePathFor(editor.document)
    if (pagePath && pagePath !== this.pagePath)
      this.post({ type: 'navigate', path: pagePath })
  }
}

function revealPadding(document: vscode.TextDocument): number {
  const config = vscode.workspace.getConfiguration('editor', document)
  const surrounding = config.get<number>('cursorSurroundingLines', 0)
  if (!config.get<boolean>('stickyScroll.enabled', true))
    return surrounding
  return Math.max(surrounding, config.get<number>('stickyScroll.maxLineCount', 5))
}

const realpathCache = new Map<string, string>()

function realpath(file: string): string {
  let resolved = realpathCache.get(file)
  if (resolved === undefined) {
    try {
      resolved = fs.realpathSync(file)
    } catch {
      return file
    }
    realpathCache.set(file, resolved)
  }
  return resolved
}

function getWebviewContent(url: string, origin: string): string {
  const nonce = randomBytes(16).toString('base64')
  const attr = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Security-Policy"
        content="default-src 'none'; style-src 'nonce-${nonce}'; script-src 'nonce-${nonce}'; frame-src ${attr(origin)}/">
  <style nonce="${nonce}">
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    iframe {
      border: none;
      width: 100%;
      height: 100%;
    }
  </style>
</head>
<body>
  <iframe id="viewer" src="${attr(url)}" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"></iframe>
  <script nonce="${nonce}">
    const vscode = acquireVsCodeApi()
    const viewer = document.getElementById('viewer')
    const origin = ${JSON.stringify(origin)}
    const send = adoc => viewer.contentWindow.postMessage({ adoc }, origin)
    viewer.addEventListener('load', () => send({ type: 'host' }))
    window.addEventListener('message', ev => {
      if (ev.source === viewer.contentWindow) {
        if (ev.origin === origin && ev.data && ev.data.adoc)
          vscode.postMessage(ev.data.adoc)
      } else if (ev.origin === window.origin) {
        send(ev.data)
      }
    })
  </script>
</body>
</html>`
}
