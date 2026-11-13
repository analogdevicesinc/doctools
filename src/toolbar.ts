import * as vscode from 'vscode'
import * as path from 'path'
import { randomBytes } from 'crypto'
import {
  Syntax,
  Span,
  FormatResult,
  InlineKind,
  HEADING_CHARS,
  ADMONITIONS,
  CODE_LANGUAGES,
  toggleInline,
  setHeading,
  toggleList,
  toggleQuote,
  insertLink,
  insertRole,
  wrapCode,
  wrapAdmonition,
  insertImage,
  insertRule,
  insertTable,
  parseTableSize
} from './format'

const SYNTAX: Record<string, Syntax> = {
  restructuredtext: 'rst',
  markdown: 'myst',
  myst: 'myst'
}

const IMAGE_FILTERS = { Images: ['svg', 'png', 'jpg', 'jpeg', 'gif', 'webp'] }

type Formatter = (source: string, selection: Span, syntax: Syntax) => FormatResult

const syntaxOf = (document: vscode.TextDocument): Syntax | undefined => SYNTAX[document.languageId]

export class FormatToolbar implements vscode.WebviewViewProvider, vscode.Disposable {
  static readonly viewType = 'adi-doctools.toolbar'

  private view: vscode.WebviewView | undefined
  private editor: vscode.TextEditor | undefined
  private disposables: vscode.Disposable[] = []

  constructor() {
    this.track(vscode.window.activeTextEditor)
    const command = (name: string, handler: (...args: any[]) => unknown) =>
      vscode.commands.registerCommand(`adi-doctools.format.${name}`, handler)
    const inline = (kind: InlineKind) =>
      command(kind, () => this.apply((s, r, syntax) => toggleInline(s, r, syntax, kind)))

    this.disposables.push(
      vscode.window.registerWebviewViewProvider(FormatToolbar.viewType, this),
      vscode.window.onDidChangeActiveTextEditor(editor => this.track(editor)),
      vscode.workspace.onDidCloseTextDocument(document => {
        if (this.editor?.document === document) {
          this.editor = undefined
          this.postState()
        }
      }),
      inline('bold'),
      inline('italic'),
      inline('code'),
      inline('subscript'),
      inline('superscript'),
      command('heading', (level?: number) => this.heading(level)),
      command('bulletList', () => this.apply((s, r, syntax) => toggleList(s, r, syntax, 'bullet'))),
      command('numberedList', () => this.apply((s, r, syntax) => toggleList(s, r, syntax, 'numbered'))),
      command('quote', () => this.apply(toggleQuote)),
      command('rule', () => this.apply(insertRule)),
      command('link', () => this.link()),
      command('reference', () => this.role('ref')),
      command('document', () => this.role('doc')),
      command('image', () => this.image()),
      command('codeBlock', (language?: string) => this.codeBlock(language)),
      command('admonition', (kind?: string) => this.admonition(kind)),
      command('table', () => this.table()),
      command('undo', () => this.history('undo')),
      command('redo', () => this.history('redo'))
    )
  }

  dispose() {
    this.disposables.forEach(d => d.dispose())
  }

  resolveWebviewView(view: vscode.WebviewView) {
    this.view = view
    view.webview.options = { enableScripts: true }
    view.webview.html = getToolbarHtml()
    view.webview.onDidReceiveMessage(msg => {
      if (msg?.type === 'ready')
        this.postState()
      else if (msg?.type === 'command' && typeof msg.command === 'string')
        vscode.commands.executeCommand(`adi-doctools.format.${msg.command}`, msg.argument)
    })
    view.onDidDispose(() => {
      this.view = undefined
    })
  }

  private track(editor: vscode.TextEditor | undefined) {
    if (!editor)
      return
    this.editor = syntaxOf(editor.document) ? editor : undefined
    this.postState()
  }

  private postState() {
    const syntax = this.editor && syntaxOf(this.editor.document)
    this.view?.webview.postMessage({
      type: 'state',
      syntax,
      file: this.editor ? path.basename(this.editor.document.fileName) : undefined
    })
  }

  private target(): vscode.TextEditor | undefined {
    const active = vscode.window.activeTextEditor
    if (active && syntaxOf(active.document))
      return active
    if (this.editor && vscode.window.visibleTextEditors.includes(this.editor))
      return this.editor
    vscode.window.showInformationMessage('Doctools: open a reStructuredText or MyST Markdown file to format.')
    return undefined
  }

  private async focus(editor: vscode.TextEditor): Promise<vscode.TextEditor> {
    return vscode.window.showTextDocument(editor.document, { viewColumn: editor.viewColumn })
  }

  private async apply(formatter: Formatter): Promise<boolean> {
    const target = this.target()
    const syntax = target && syntaxOf(target.document)
    if (!target || !syntax)
      return false

    const editor = await this.focus(target)
    const document = editor.document
    const selection = {
      start: document.offsetAt(editor.selection.start),
      end: document.offsetAt(editor.selection.end)
    }
    const result = formatter(document.getText(), selection, syntax)
    const range = new vscode.Range(document.positionAt(result.range.start), document.positionAt(result.range.end))
    if (!await editor.edit(edit => edit.replace(range, result.text)))
      return false

    editor.selection = new vscode.Selection(
      document.positionAt(result.selection.start),
      document.positionAt(result.selection.end)
    )
    editor.revealRange(editor.selection, vscode.TextEditorRevealType.InCenterIfOutsideViewport)
    return true
  }

  private async heading(level?: number) {
    if (level === undefined) {
      const picked = await vscode.window.showQuickPick(
        ['Paragraph', ...HEADING_CHARS.map((_, i) => `Heading ${i + 1}`)].map((label, index) => ({ label, index })),
        { title: 'Heading', placeHolder: 'Select the heading level' }
      )
      if (!picked)
        return
      level = picked.index
    }
    const value = Math.min(Math.max(Number(level) || 0, 0), HEADING_CHARS.length)
    await this.apply((s, r, syntax) => setHeading(s, r, syntax, value))
  }

  private async link() {
    if (!this.target())
      return
    const url = await vscode.window.showInputBox({
      title: 'Insert Link',
      prompt: 'URL of the link',
      placeHolder: 'https://',
      validateInput: value => value.trim() && !/\s/.test(value.trim()) ? undefined : 'Enter a URL without spaces'
    })
    if (url)
      await this.apply((s, r, syntax) => insertLink(s, r, syntax, url.trim()))
  }

  private async role(name: string) {
    if (await this.apply((s, r, syntax) => insertRole(s, r, syntax, name)))
      await vscode.commands.executeCommand('editor.action.triggerSuggest')
  }

  private async image() {
    const target = this.target()
    if (!target)
      return
    const directory = path.dirname(target.document.uri.fsPath)
    const picked = await vscode.window.showOpenDialog({
      title: 'Insert Image',
      defaultUri: vscode.Uri.file(directory),
      canSelectMany: false,
      filters: IMAGE_FILTERS
    })
    if (!picked?.length)
      return
    const relative = path.relative(directory, picked[0].fsPath).split(path.sep).join('/')
    await this.apply((s, r, syntax) => insertImage(s, r, syntax, relative))
  }

  private async codeBlock(language?: string) {
    if (language === undefined) {
      if (!this.target())
        return
      language = await vscode.window.showQuickPick(CODE_LANGUAGES, {
        title: 'Code Block',
        placeHolder: 'Select the language'
      })
      if (language === undefined)
        return
    }
    const value = String(language)
    await this.apply((s, r, syntax) => wrapCode(s, r, syntax, value))
  }

  private async admonition(kind?: string) {
    if (kind === undefined) {
      if (!this.target())
        return
      kind = await vscode.window.showQuickPick(ADMONITIONS, {
        title: 'Admonition',
        placeHolder: 'Select the admonition'
      })
      if (kind === undefined)
        return
    }
    const value = ADMONITIONS.includes(String(kind)) ? String(kind) : 'note'
    await this.apply((s, r, syntax) => wrapAdmonition(s, r, syntax, value))
  }

  private async table() {
    if (!this.target())
      return
    const value = await vscode.window.showInputBox({
      title: 'Insert Table',
      prompt: 'Rows x columns, without the header row',
      value: '3x3',
      validateInput: input => parseTableSize(input) ? undefined : 'Use rows x columns, e.g. 3x3'
    })
    const size = value && parseTableSize(value)
    if (size)
      await this.apply((s, r, syntax) => insertTable(s, r, syntax, size.rows, size.columns))
  }

  private async history(command: 'undo' | 'redo') {
    const target = this.target()
    if (!target)
      return
    await this.focus(target)
    await vscode.commands.executeCommand(command)
  }
}

const icon = (body: string) =>
  `<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`

const ICONS = {
  bullet: icon('<circle cx="2.5" cy="4" r="1" fill="currentColor" stroke="none"/><circle cx="2.5" cy="8" r="1" fill="currentColor" stroke="none"/><circle cx="2.5" cy="12" r="1" fill="currentColor" stroke="none"/><path d="M6 4h8M6 8h8M6 12h8"/>'),
  numbered: icon('<path d="M6.5 4h7.5M6.5 8h7.5M6.5 12h7.5"/><text x="0.5" y="5.6" font-size="4.6" fill="currentColor" stroke="none">1</text><text x="0.5" y="9.6" font-size="4.6" fill="currentColor" stroke="none">2</text><text x="0.5" y="13.6" font-size="4.6" fill="currentColor" stroke="none">3</text>'),
  quote: icon('<path d="M2.5 3v10M6 5h8M6 8h8M6 11h5"/>'),
  rule: icon('<path d="M1.5 8h13"/><path d="M4 4h8M4 12h8" opacity=".35"/>'),
  link: icon('<path d="M6.8 9.2a2.8 2.8 0 0 0 4 0l2-2a2.8 2.8 0 0 0-4-4l-.8.8"/><path d="M9.2 6.8a2.8 2.8 0 0 0-4 0l-2 2a2.8 2.8 0 0 0 4 4l.8-.8"/>'),
  reference: icon('<path d="M3 2.5h7l3 3v8H3z"/><path d="M5.5 9h5M8.5 7l2 2-2 2"/>'),
  document: icon('<path d="M3.5 1.5h6l3 3v10h-9z"/><path d="M9.5 1.5v3h3M5.5 8h5M5.5 11h5"/>'),
  image: icon('<rect x="1.5" y="2.5" width="13" height="11" rx="1"/><circle cx="5.2" cy="6" r="1.2"/><path d="M2 12l3.8-3.6 2.6 2.4 2.4-2.2 3.2 3"/>'),
  code: icon('<path d="M5.5 4.5L2 8l3.5 3.5M10.5 4.5L14 8l-3.5 3.5"/>'),
  block: icon('<rect x="1.5" y="2.5" width="13" height="11" rx="1"/><path d="M6 6L4 8l2 2M10 6l2 2-2 2"/>'),
  table: icon('<rect x="1.5" y="2.5" width="13" height="11" rx="1"/><path d="M1.5 6.2h13M1.5 9.8h13M6 2.5v11M10.5 2.5v11"/>'),
  undo: icon('<path d="M5 3.5L2 6.5l3 3"/><path d="M2.5 6.5h7a4 4 0 0 1 0 8H7"/>'),
  redo: icon('<path d="M11 3.5l3 3-3 3"/><path d="M13.5 6.5h-7a4 4 0 0 0 0 8H9"/>')
}

function getToolbarHtml(): string {
  const nonce = randomBytes(16).toString('base64')
  const button = (command: string, title: string, content: string, argument?: string) =>
    `<button type="button" data-command="${command}"${argument ? ` data-argument="${argument}"` : ''} title="${title}" aria-label="${title}">${content}</button>`
  const option = (value: string | number, label: string) => `<option value="${value}">${label}</option>`
  const capitalize = (value: string) => value[0].toUpperCase() + value.slice(1)

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Security-Policy"
        content="default-src 'none'; style-src 'nonce-${nonce}'; script-src 'nonce-${nonce}'">
  <style nonce="${nonce}">
    body {
      margin: 0;
      padding: 6px 8px;
      color: var(--vscode-foreground);
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
    }
    #toolbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 4px 0;
    }
    .group {
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 0 6px;
      border-right: 1px solid var(--vscode-widget-border, var(--vscode-panel-border, rgba(128, 128, 128, .35)));
    }
    .group:first-child {
      padding-left: 0;
    }
    .group:last-of-type {
      border-right: none;
    }
    button, select {
      height: 26px;
      color: inherit;
      font: inherit;
      border: 1px solid transparent;
      border-radius: 4px;
      background: transparent;
    }
    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 28px;
      padding: 0 5px;
      cursor: pointer;
    }
    button:hover:not(:disabled), select:hover:not(:disabled) {
      background: var(--vscode-toolbar-hoverBackground, rgba(128, 128, 128, .2));
    }
    button:active:not(:disabled) {
      background: var(--vscode-toolbar-activeBackground, rgba(128, 128, 128, .3));
    }
    button:focus-visible, select:focus-visible {
      outline: 1px solid var(--vscode-focusBorder);
      outline-offset: -1px;
    }
    button:disabled, select:disabled {
      opacity: .4;
      cursor: default;
    }
    select {
      padding: 0 4px;
      background: var(--vscode-dropdown-background);
      color: var(--vscode-dropdown-foreground);
      border-color: var(--vscode-dropdown-border, transparent);
    }
    .bold { font-weight: 700; }
    .italic { font-style: italic; font-family: serif; font-size: 1.1em; }
    .mono { font-family: var(--vscode-editor-font-family, monospace); font-size: .85em; }
    sub, sup { font-size: .65em; }
    #status {
      flex-basis: 100%;
      padding-top: 2px;
      opacity: .7;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  </style>
</head>
<body>
  <div id="toolbar" role="toolbar" aria-label="Formatting">
    <div class="group">
      ${button('undo', 'Undo', ICONS.undo)}
      ${button('redo', 'Redo', ICONS.redo)}
    </div>
    <div class="group">
      <select data-command="heading" title="Heading" aria-label="Heading">
        <option value="" selected disabled hidden>Heading</option>
        ${option(0, 'Paragraph')}
        ${HEADING_CHARS.map((_, i) => option(i + 1, `Heading ${i + 1}`)).join('\n        ')}
      </select>
    </div>
    <div class="group">
      ${button('bold', 'Bold', '<span class="bold">B</span>')}
      ${button('italic', 'Italic', '<span class="italic">I</span>')}
      ${button('code', 'Inline code', ICONS.code)}
      ${button('subscript', 'Subscript', 'X<sub>2</sub>')}
      ${button('superscript', 'Superscript', 'X<sup>2</sup>')}
    </div>
    <div class="group">
      ${button('bulletList', 'Bullet list', ICONS.bullet)}
      ${button('numberedList', 'Numbered list', ICONS.numbered)}
      ${button('quote', 'Block quote', ICONS.quote)}
    </div>
    <div class="group">
      ${button('link', 'Link to a URL', ICONS.link)}
      ${button('reference', 'Reference to a labeled section', ICONS.reference)}
      ${button('document', 'Reference to another page', ICONS.document)}
      ${button('image', 'Image', ICONS.image)}
    </div>
    <div class="group">
      ${button('table', 'Table', ICONS.table)}
      <select data-command="codeBlock" title="Code block" aria-label="Code block">
        <option value="" selected disabled hidden>Code</option>
        ${CODE_LANGUAGES.map(l => option(l, l)).join('\n        ')}
      </select>
      <select data-command="admonition" title="Admonition" aria-label="Admonition">
        <option value="" selected disabled hidden>Note</option>
        ${ADMONITIONS.map(a => option(a, capitalize(a))).join('\n        ')}
      </select>
      ${button('rule', 'Horizontal rule', ICONS.rule)}
    </div>
    <span id="status"></span>
  </div>
  <script nonce="${nonce}">
    const vscode = acquireVsCodeApi()
    const controls = [...document.querySelectorAll('[data-command]')]
    const status = document.getElementById('status')
    const names = { rst: 'reStructuredText', myst: 'MyST Markdown' }

    for (const control of controls) {
      if (control.tagName === 'SELECT') {
        control.addEventListener('change', () => {
          vscode.postMessage({ type: 'command', command: control.dataset.command, argument: control.value })
          control.selectedIndex = 0
        })
      } else {
        control.addEventListener('mousedown', ev => ev.preventDefault())
        control.addEventListener('click', () =>
          vscode.postMessage({ type: 'command', command: control.dataset.command, argument: control.dataset.argument }))
      }
    }

    window.addEventListener('message', ev => {
      if (ev.data?.type !== 'state')
        return
      for (const control of controls)
        control.disabled = !ev.data.syntax
      status.textContent = ev.data.syntax
        ? ev.data.file + ' \\u2014 ' + names[ev.data.syntax]
        : 'Open a .rst or .md file'
    })

    vscode.postMessage({ type: 'ready' })
  </script>
</body>
</html>`
}
