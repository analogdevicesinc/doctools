import * as vscode from 'vscode'
import * as readline from 'readline'
import { spawn, ChildProcess } from 'child_process'
import {
  setOutputChannel as setInitOutputChannel,
  initializePython,
  installRequirements
} from './python-init'

let py_process: ChildProcess | undefined
let output: vscode.OutputChannel
let lineReader: readline.Interface | undefined

const lsp_message_type: Record<number, string> = {
  1: 'error',
  2: 'warning',
  3: 'info',
  4: 'log'
}

let pendingResolve: ((value: any) => void) | null = null
let pendingReject: ((reason: any) => void) | null = null

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
      break
    }
    case 'build/output': {
      output.appendLine(params.line)
      break
    }
    case 'build/completed': {
      output.appendLine(`---- Done ----`)
      break
    }
    case 'server/started': {
      const url = vscode.Uri.parse(params.url, true)
      output.appendLine(`[server] Running on ${params.url}`)
      vscode.window.showInformationMessage(
        `Server running on ${params.url}`,
        'Open Preview', 'Open in Browser'
      ).then(choice => {
        if (choice === 'Open Preview') {
          vscode.commands.executeCommand('simpleBrowser.api.open', url.toString(), {
            viewColumn: vscode.ViewColumn.Beside,
            preserveFocus: true
          })
        } else if (choice === 'Open in Browser') {
          vscode.env.openExternal(url)
        }
      })
      break
    }
    case 'server/stopped': {
      output.appendLine(`[server] Stopped`)
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
      output.appendLine(`[recv] ${line}`)
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
    output.appendLine(`[send] ${json}`)

    pendingResolve = resolve
    pendingReject = reject
    py_process!.stdin!.write(json + '\n')
  })
}

export class buildServer {
  constructor () {}

  static async start (): Promise<any> {
    lspSend({ 'server': 'start' })
  }

  static async stop (): Promise<any> {
    lspSend({ 'server': 'stop' })
  }
}

export function setOutputChannel(channel: vscode.OutputChannel) {
  output = channel
  setInitOutputChannel(channel)
}

export async function startPyProcess() {
  const init = await initializePython()
  if (!init) return

  await startLspProcess(init.pythonPath, init.workspacePath, init.requirementsPath)
}

async function startLspProcess(pythonPath: string, workspacePath: string, requirementsPath: string | null) {
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
  })

  lineReader = readline.createInterface({
    input: proc.stdout!,
    crlfDelay: Infinity
  })
  lineReader.on('line', handleLine)

  py_process = proc
  output.appendLine("LSP process started")

  const startServerChoice = await vscode.window.showInformationMessage(
    'Start the Doctools Sphinx server (adoc serve)?',
    'Yes', 'No'
  )

  if (startServerChoice === 'Yes') {
    await buildServer.start()
  } else {
    vscode.window.showInformationMessage('Use "Doctools: Start Server" command to start anytime')
  }
}

export function stopPyProcess() {
  py_process?.kill()
}
