import * as vscode from 'vscode'
import * as readline from 'readline'
import { spawn, ChildProcess } from 'child_process'
import {
  setOutputChannel as setInitOutputChannel,
  initializePython,
  installRequirements
} from './python-init'
import { openBrowserPanel, closeBrowserPanel } from './browser'

let py_process: ChildProcess | undefined
let output: vscode.OutputChannel
let debugOutput: vscode.OutputChannel
let lineReader: readline.Interface | undefined
let diagnosticCollection: vscode.DiagnosticCollection

function stripAnsi(str: string): string {
  return str.replace(/\x1B\[[0-9;]*[a-zA-Z]/g, '')
            .replace(/\[9\dm/g, '')
            .replace(/\[39;49;00m/g, '')
}

// Sphinx warning patterns
// file:line: WARNING: message or file:line: ERROR: message
const WARNING_PATTERN = /^(.+?):(\d+):\s*(WARNING|ERROR):\s*(.+)$/
const WARNING_NO_LINE_PATTERN = /^(.+?):\s*(WARNING|ERROR):\s*(.+)$/

interface ParsedWarning {
  file: string
  line: number
  message: string
  severity: vscode.DiagnosticSeverity
}

function parseWarningLine(line: string): ParsedWarning | null {
  const cleaned = stripAnsi(line).trim()

  let match = cleaned.match(WARNING_PATTERN)
  if (match) {
    return {
      file: match[1],
      line: parseInt(match[2], 10),
      message: match[4],
      severity: match[3] === 'ERROR'
        ? vscode.DiagnosticSeverity.Error
        : vscode.DiagnosticSeverity.Warning
    }
  }

  match = cleaned.match(WARNING_NO_LINE_PATTERN)
  if (match) {
    return {
      file: match[1],
      line: 1,
      message: match[3],
      severity: match[2] === 'ERROR'
        ? vscode.DiagnosticSeverity.Error
        : vscode.DiagnosticSeverity.Warning
    }
  }

  return null
}

const fileDiagnostics = new Map<string, vscode.Diagnostic[]>()

const lsp_message_type: Record<number, string> = {
  1: 'error',
  2: 'warning',
  3: 'info',
  4: 'log'
}

let pendingResolve: ((value: any) => void) | null = null
let pendingReject: ((reason: any) => void) | null = null
let serverStartResolve: (() => void) | null = null

export type BuildStatus = 'off' | 'building' | 'ready'
export const buildStatusEmitter = new vscode.EventEmitter<BuildStatus>()
export const onBuildStatusChanged = buildStatusEmitter.event

function handleNotification(parsed: any) {
  const { method, params } = parsed

  switch (method) {
    case 'window/logMessage': {
      const level = lsp_message_type[params.type] || 'LOG'
      output.appendLine(`[${level}] ${params.message}`)
      break
    }
    case 'build/started': {
      output.appendLine(`-- Building -- (${params.mode})`)
      clearDiagnostics()
      buildStatusEmitter.fire('building')
      break
    }
    case 'build/output': {
      output.appendLine(params.line)
      const warning = parseWarningLine(params.line)
      if (warning) {
        debugOutput.appendLine(`[diagnostic] ${warning.file}:${warning.line} - ${warning.message}`)
        addDiagnostic(warning)
      }
      break
    }
    case 'build/completed': {
      output.appendLine(`---- Done ----`)
      const count = Array.from(fileDiagnostics.values()).reduce((sum, arr) => sum + arr.length, 0)
      buildStatusEmitter.fire('ready')
      break
    }
    case 'server/started': {
      if (serverStartResolve) {
        serverStartResolve()
        serverStartResolve = null
      }
      output.appendLine(`[server] Running on ${params.url}`)
      vscode.window.showInformationMessage(`Server running on ${params.url}`)
      openBrowserPanel(params.url)
      buildStatusEmitter.fire('ready')
      break
    }
    case 'server/stopped': {
      output.appendLine(`[server] Stopped`)
      closeBrowserPanel()
      buildStatusEmitter.fire('off')
      break
    }
    default:
      output.appendLine(`[notification] ${method}: ${JSON.stringify(params)}`)
  }
}

function handleLine(line: string) {
  try {
    const parsed = JSON.parse(line)

    if (parsed.method) {
      handleNotification(parsed)
      return
    }

    if (pendingResolve) {
      debugOutput.appendLine(`[recv] ${line}`)
      pendingResolve(parsed)
      pendingResolve = null
      pendingReject = null
    }
  } catch (err) {
    output.appendLine(line)
  }
}

export async function lspSend(msg: object): Promise<any> {
  if (!py_process || !py_process.stdin || !lineReader) {
    throw new Error('LSP process not running')
  }

  return new Promise((resolve, reject) => {
    const json = JSON.stringify(msg)
    debugOutput.appendLine(`[send] ${json}`)

    pendingResolve = resolve
    pendingReject = reject
    py_process!.stdin!.write(json + '\n')
  })
}

export class buildServer {
  private static sparsePathsGetter: (() => string[] | null) | null = null

  static setSparsePathsGetter(getter: () => string[] | null) {
    buildServer.sparsePathsGetter = getter
  }

  static async start (): Promise<void> {
    const sparse = buildServer.sparsePathsGetter?.() ?? null
    const result = await lspSend({ 'server': 'start', 'sparse': sparse })
    if (result?.return === 'already_running') {
      return
    }

    await vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: `Building documentation...`,
      cancellable: false
    }, async () => {
      return new Promise<void>((resolve) => {
        serverStartResolve = resolve
      })
    })
  }

  static async stop (): Promise<void> {
    lspSend({ 'server': 'stop' })
  }

  static async updateSparse (): Promise<void> {
    const sparse = buildServer.sparsePathsGetter?.() ?? null
    await lspSend({ 'server': 'update_sparse', 'sparse': sparse })
  }
}

export function setOutputChannel(channel: vscode.OutputChannel) {
  output = channel
  debugOutput = vscode.window.createOutputChannel("Doctools Debug")
  diagnosticCollection = vscode.languages.createDiagnosticCollection("doctools")
  setInitOutputChannel(channel)
}

export function getDebugOutputChannel(): vscode.OutputChannel {
  return debugOutput
}

export function getDiagnosticCollection(): vscode.DiagnosticCollection {
  return diagnosticCollection
}

function addDiagnostic(warning: ParsedWarning) {
  const uri = vscode.Uri.file(warning.file)
  const line = Math.max(0, warning.line - 1)
  const range = new vscode.Range(line, 0, line, 1000)
  const diagnostic = new vscode.Diagnostic(range, warning.message, warning.severity)
  diagnostic.source = 'Sphinx'

  const existing = fileDiagnostics.get(warning.file) || []
  existing.push(diagnostic)
  fileDiagnostics.set(warning.file, existing)
  diagnosticCollection.set(uri, existing)
}

function clearDiagnostics() {
  fileDiagnostics.clear()
  diagnosticCollection.clear()
}

export async function startPyProcess(autoStartServer: boolean = false) {
  const init = await initializePython()
  if (!init) return

  await startLspProcess(init.pythonPath, init.workspacePath, init.requirementsPath, autoStartServer)
}

async function startLspProcess(pythonPath: string, workspacePath: string, requirementsPath: string | null, autoStartServer: boolean = false) {
  output.appendLine(`Starting LSP with ${pythonPath}`)

  const proc = spawn(pythonPath, ['-m', 'adi_doctools.lsp'], {
    cwd: workspacePath,
    env: { ...process.env }
  })

  proc.on('error', (err: any) => {
    output.appendLine(err.message)
    vscode.window.showErrorMessage('Failed to start python3')
  })

  proc.stderr.on('data', async (data) => {
    const msg = data.toString().trim()
    if (!msg) return

    if (msg.includes('ModuleNotFoundError')) {
      output.appendLine(msg)
      proc.kill()

      const match = msg.match(/No module named '([^']+)'/)
      const moduleName = match ? match[1] : 'unknown'

      if (requirementsPath) {
        const installChoice = await vscode.window.showErrorMessage(
          `Missing Python module '${moduleName}'. Install dependencies?`,
          'Yes', 'No'
        )

        if (installChoice === 'Yes') {
          const success = await installRequirements(pythonPath, requirementsPath, false)
          if (success) {
            await startLspProcess(pythonPath, workspacePath, requirementsPath)
          }
        }
      } else {
        vscode.window.showErrorMessage(`Missing module '${moduleName}' and no requirements.txt found`)
      }
      return
    }

    for (const line of msg.split('\n')) {
      try {
        const log = JSON.parse(line)
        const level = log.level || 'LOG'
        output.appendLine(`[${level}] ${log.message}`)
      } catch {
        output.appendLine(line)
      }
    }
  })

  proc.on('exit', (code) => {
    output.appendLine(`LSP exited with code ${code}`)
    lineReader = undefined
    py_process = undefined
    buildStatusEmitter.fire('off')
  })

  lineReader = readline.createInterface({
    input: proc.stdout!,
    crlfDelay: Infinity
  })
  lineReader.on('line', handleLine)

  py_process = proc
  output.appendLine("LSP process started")

  if (autoStartServer) {
    output.show(true)
    await buildServer.start()
  } else {
    const currentProc = proc
    vscode.window.showInformationMessage(
      'Start the Doctools Sphinx server (adoc serve)?',
      'Yes', 'No'
    ).then(choice => {
      if (py_process !== currentProc) return

      if (choice === 'Yes') {
        output.show(true)
        buildServer.start()
      }
    })
  }
}

export function stopPyProcess() {
  py_process?.kill()
}
