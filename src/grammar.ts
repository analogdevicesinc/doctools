import * as vscode from 'vscode'
import { LanguageToolChecker, GrammarMode, GrammarOptions } from './language-tool'
import { SemanticTokensProvider } from './tree-sitter'
import { isLspRunning, installPythonPackage, getPythonPath } from './python'

const CONSENT_KEY = 'grammar.cloudConsent'
const DEBOUNCE_MS = 1000
const BUSY_INDICATOR_MS = 400

const isRst = (doc: vscode.TextDocument) => doc.languageId === 'restructuredtext'

interface Job {
  timer?: NodeJS.Timeout
  running: boolean
  rerun: boolean
}

export class GrammarController implements vscode.Disposable {
  private statusBarItem: vscode.StatusBarItem
  private jobs = new Map<string, Job>()
  private reported = new Set<string>()
  private problem: string | undefined
  private busy = 0
  private busyTimer: NodeJS.Timeout | undefined
  private cloudPrompted = false
  private consentPrompt: Promise<boolean> | undefined
  private installPrompted = false

  constructor(
    private ctx: vscode.ExtensionContext,
    private provider: SemanticTokensProvider,
    private checker: LanguageToolChecker
  ) {
    this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 99)
    this.statusBarItem.command = 'adi-doctools.cycle-grammar-mode'
    this.updateStatusBar()
    this.statusBarItem.show()
  }

  dispose() {
    for (const job of this.jobs.values())
      if (job.timer) clearTimeout(job.timer)
    this.jobs.clear()
    if (this.busyTimer) clearTimeout(this.busyTimer)
    this.statusBarItem.dispose()
  }

  private config() {
    return vscode.workspace.getConfiguration('adi-doctools.grammar')
  }

  configuredMode(): GrammarMode {
    const mode = this.config().get<string>('mode', 'local')
    return mode === 'off' || mode === 'api' ? mode : 'local'
  }

  hasCloudConsent(): boolean {
    return this.ctx.workspaceState.get<boolean>(CONSENT_KEY, false)
  }

  effectiveMode(): GrammarMode {
    const mode = this.configuredMode()
    if (mode === 'api' && !this.hasCloudConsent())
      return 'local'
    return mode
  }

  private requestCloudConsent(modal: boolean): Promise<boolean> {
    if (this.hasCloudConsent()) return Promise.resolve(true)
    if (!this.consentPrompt) {
      const message = 'Doctools: cloud spell check sends the text of your documents to api.languagetool.org.'
      const detail = 'Allow it for this workspace? Otherwise the local LanguageTool is used.'
      const prompt = modal
        ? vscode.window.showWarningMessage(message, { modal: true, detail }, 'Allow Cloud')
        : vscode.window.showWarningMessage(`${message} ${detail}`, 'Allow Cloud', 'Use Local')
      this.consentPrompt = Promise.resolve(prompt).then(async choice => {
        const allowed = choice === 'Allow Cloud'
        if (allowed)
          await this.ctx.workspaceState.update(CONSENT_KEY, true)
        this.consentPrompt = undefined
        if (allowed && !modal)
          this.onConfigurationChanged()
        return allowed
      })
    }
    return this.consentPrompt
  }

  private options(): GrammarOptions {
    const config = this.config()
    if (this.configuredMode() === 'api' && !this.hasCloudConsent() && !this.cloudPrompted) {
      this.cloudPrompted = true
      this.requestCloudConsent(false)
    }
    return {
      mode: this.effectiveMode(),
      language: config.get<string>('language', 'en-US') || 'en-US',
      username: config.get<string>('apiUsername', ''),
      apiKey: config.get<string>('apiKey', ''),
      disabledRules: [...(config.get<string[]>('disabledRules', []) || [])]
    }
  }

  async setMode(mode: GrammarMode) {
    if (mode === 'api' && !await this.requestCloudConsent(true))
      return
    const target = vscode.workspace.workspaceFolders?.length
      ? vscode.ConfigurationTarget.Workspace
      : vscode.ConfigurationTarget.Global
    await this.config().update('mode', mode, target)
    this.onConfigurationChanged()
  }

  async revokeCloudConsent() {
    await this.ctx.workspaceState.update(CONSENT_KEY, undefined)
    this.cloudPrompted = false
    this.onConfigurationChanged()
  }

  async pickMode() {
    const currentMode = this.effectiveMode()
    const options: (vscode.QuickPickItem & { value: GrammarMode })[] = [
      {
        label: '$(desktop-download) Local',
        description: 'Use the local LanguageTool (requires Java), text stays on this machine',
        value: 'local'
      },
      {
        label: '$(cloud) Cloud',
        description: 'Send text to the LanguageTool API (rate-limited)',
        value: 'api'
      },
      {
        label: '$(circle-slash) Off',
        description: 'Turn off grammar check',
        value: 'off'
      }
    ]
    for (const option of options) {
      if (option.value === currentMode)
        option.detail = 'Current'
    }

    const selected = await vscode.window.showQuickPick(options, {
      placeHolder: 'Select grammar check provider',
      title: 'Grammar Check Mode'
    })

    if (selected && selected.value !== currentMode)
      await this.setMode(selected.value)
  }

  async disableRule(ruleId: string) {
    const config = this.config()
    const disabledRules = [...(config.get<string[]>('disabledRules', []) || [])]
    if (disabledRules.includes(ruleId)) return
    disabledRules.push(ruleId)
    const target = vscode.workspace.workspaceFolders?.length
      ? vscode.ConfigurationTarget.Workspace
      : vscode.ConfigurationTarget.Global
    await config.update('disabledRules', disabledRules, target)
    vscode.window.showInformationMessage(`Disabled rule "${ruleId}"`)
  }

  onConfigurationChanged() {
    this.problem = undefined
    this.reported.clear()
    this.updateStatusBar()
    this.checkVisible()
  }

  onBackendStarted() {
    this.problem = undefined
    this.updateStatusBar()
    this.checkVisible()
  }

  checkVisible() {
    const seen = new Set<string>()
    for (const editor of vscode.window.visibleTextEditors) {
      const key = editor.document.uri.toString()
      if (isRst(editor.document) && !seen.has(key)) {
        seen.add(key)
        this.schedule(editor.document, 0)
      }
    }
  }

  schedule(doc: vscode.TextDocument, delay = DEBOUNCE_MS) {
    if (!isRst(doc)) return
    const key = doc.uri.toString()
    const job = this.jobs.get(key) ?? { running: false, rerun: false }
    this.jobs.set(key, job)
    if (job.timer) clearTimeout(job.timer)
    job.timer = setTimeout(() => {
      job.timer = undefined
      this.run(doc, job)
    }, delay)
  }

  forget(doc: vscode.TextDocument) {
    const key = doc.uri.toString()
    const job = this.jobs.get(key)
    if (job?.timer) clearTimeout(job.timer)
    this.jobs.delete(key)
    this.checker.clear(doc.uri)
  }

  private async run(doc: vscode.TextDocument, job: Job) {
    if (doc.isClosed) return
    if (job.running) {
      job.rerun = true
      return
    }

    job.running = true
    this.setBusy(1)
    let retry = false
    try {
      retry = await this.check(doc)
    } catch (err) {
      console.error('Grammar check failed:', err)
    } finally {
      job.running = false
      this.setBusy(-1)
    }

    if ((retry || job.rerun) && !doc.isClosed && this.jobs.get(doc.uri.toString()) === job) {
      job.rerun = false
      this.schedule(doc, retry ? 0 : DEBOUNCE_MS)
    }
  }

  private async check(doc: vscode.TextDocument): Promise<boolean> {
    const options = this.options()
    if (options.mode === 'off') {
      this.checker.clear(doc.uri)
      return false
    }
    if (!isLspRunning()) {
      this.setProblem('The Doctools Python environment is not running.')
      return false
    }

    const rst = await this.provider.init()
    this.checker.setLangConfig({ parser: rst.parser, lang: rst.lang })
    const tree = await this.provider.getTree(doc)
    if (!tree) return false

    const outcome = await this.checker.check(doc, tree.rootNode, options)
    if (outcome.status === 'stale')
      return true
    if (outcome.status === 'error') {
      this.checker.clear(doc.uri)
      return this.handleError(outcome.error || '', outcome.message || '', options.mode)
    }
    this.setProblem(undefined)
    return false
  }

  private setBusy(delta: number) {
    this.busy += delta
    if (this.busy > 0 && !this.busyTimer) {
      this.busyTimer = setTimeout(() => {
        this.busyTimer = undefined
        this.updateStatusBar()
      }, BUSY_INDICATOR_MS)
    } else if (this.busy === 0) {
      if (this.busyTimer) clearTimeout(this.busyTimer)
      this.busyTimer = undefined
      this.updateStatusBar()
    }
  }

  private setProblem(problem: string | undefined) {
    if (this.problem === problem) return
    this.problem = problem
    this.updateStatusBar()
  }

  private once(key: string): boolean {
    if (this.reported.has(key)) return false
    this.reported.add(key)
    return true
  }

  private async promptInstall() {
    const choice = await vscode.window.showInformationMessage(
      `Doctools: local spell check needs the Python package language_tool_python. Install it into ${getPythonPath()}?`,
      'Install', 'Turn Off'
    )
    if (choice === 'Install' && await installPythonPackage('language_tool_python')) {
      this.setProblem(undefined)
      this.checkVisible()
    } else if (choice === 'Turn Off') {
      await this.setMode('off')
    }
  }

  private handleError(error: string, message: string, mode: GrammarMode): boolean {
    if (error === 'not_installed') {
      this.setProblem('The Python package language_tool_python is not installed.')
      if (!this.installPrompted) {
        this.installPrompted = true
        this.promptInstall()
      }
      return false
    }

    if (error === 'init_failed' && mode === 'local') {
      this.setProblem('LanguageTool failed to start, make sure Java is installed.')
      if (this.once(error))
        vscode.window.showErrorMessage(
          `LanguageTool initialization failed: ${message}. Make sure Java is installed.`
        )
    } else if (error === 'rate_limited') {
      this.setProblem('LanguageTool API rate limit exceeded.')
      if (this.once(error))
        vscode.window.showWarningMessage(
          'LanguageTool API rate limit exceeded. Try again later or switch to local mode.'
        )
    } else if (error === 'connection_error') {
      this.setProblem('Could not connect to the LanguageTool API.')
      if (this.once(error))
        vscode.window.showWarningMessage('Could not connect to LanguageTool API.')
    } else if (error === 'api_error') {
      this.setProblem(`LanguageTool API error: ${message}`)
      if (this.once(error))
        vscode.window.showErrorMessage(
          `LanguageTool API error: ${message}. Consider switching to local mode.`
        )
    } else {
      this.setProblem(message || error)
      console.error('LanguageTool error:', error, message)
    }
    return false
  }

  private updateStatusBar() {
    const configured = this.configuredMode()
    const mode = this.effectiveMode()
    const icon = this.busy > 0 && !this.busyTimer ? '$(sync~spin)' : this.problem && mode !== 'off' ? '$(warning)' : '$(book)'
    const tooltip = new vscode.MarkdownString()

    switch (mode) {
      case 'off':
        this.statusBarItem.text = `${icon} Spell Check: Off`
        tooltip.appendText('Grammar checking is off.')
        break
      case 'local':
        this.statusBarItem.text = `${icon} Spell Check: Local`
        tooltip.appendText('Grammar checking using the local LanguageTool, text stays on this machine.')
        if (configured === 'api')
          tooltip.appendText('\n\nCloud mode is configured but not allowed for this workspace.')
        break
      case 'api':
        this.statusBarItem.text = `${icon} Spell Check: Cloud`
        tooltip.appendText('Grammar checking using the LanguageTool API, text is sent to api.languagetool.org.')
        break
    }
    if (this.problem && mode !== 'off')
      tooltip.appendText(`\n\n${this.problem}`)
    this.statusBarItem.tooltip = tooltip
  }
}
