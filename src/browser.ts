import * as vscode from 'vscode'

let panel: vscode.WebviewPanel | undefined
let currentUrl: string | undefined

export function openBrowserPanel(url?: string) {
  if (url)
    currentUrl = url

  if (!currentUrl)
    return

  if (panel) {
    panel.webview.html = getWebviewContent(currentUrl)
    panel.reveal(vscode.ViewColumn.Beside, true)
    return
  }

  panel = vscode.window.createWebviewPanel(
    'doctoolsBrowser',
    'Sphinx Preview',
    { viewColumn: vscode.ViewColumn.Beside, preserveFocus: true },
    {
      enableScripts: true,
      retainContextWhenHidden: true
    }
  )

  panel.webview.html = getWebviewContent(currentUrl)

  panel.onDidDispose(() => {
    panel = undefined
  })
}

export function closeBrowserPanel() {
  if (panel) {
    panel.dispose()
    panel = undefined
  }
  currentUrl = undefined
}

export function isBrowserPanelOpen(): boolean {
  return panel !== undefined
}

function getWebviewContent(url: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
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
  <iframe src="${url}" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"></iframe>
</body>
</html>`
}
