import * as fs from 'fs'
import * as path from 'path'
import * as vscode from 'vscode'
import * as readline from 'readline'
import { spawn, ChildProcess } from 'child_process'

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
      output.appendLine(`[server] Running on ${params.url}`)
      vscode.window.showInformationMessage(`Server running on ${params.url}`)
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
}

async function ensureVenv(): Promise<string> {
  const workspace = vscode.workspace.workspaceFolders?.[0]
  if (!workspace) {
    throw new Error('No workspace folder open')
  }

  const venvPath = path.join(workspace.uri.fsPath, '.venv')
  const pythonPath = path.join(venvPath, 'bin', 'python')

  if (fs.existsSync(pythonPath)) {
    output.appendLine(`Using existing venv: ${pythonPath}`)
    return pythonPath
  }

  return new Promise((resolve, reject) => {
    const proc = spawn('python3', ['-m', 'venv', venvPath])

    proc.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Failed to create venv (exit code ${code})`))
        return
      }

      output.appendLine(`Created venv: ${pythonPath}`)
      resolve(pythonPath)
    })
  })
}

export async function startPyProcess() {
  const workspace = vscode.workspace.workspaceFolders?.[0]
  if (!workspace) {
    throw new Error('No workspace folder open')
  }
  output.appendLine(`Starting py process`)

  const python = await ensureVenv()
  output.appendLine(`With ${python}`)

  const proc = spawn(python, ['-m', 'adi_doctools.lsp'], {
    cwd: workspace.uri.fsPath,
    env: {
      ...process.env
    }
  })

  proc.on('error', (err: any) => {
    output.appendLine(err.message)
    vscode.window.showErrorMessage('Failed to start python3')
  })

  proc.stderr.on('data', (data) => {
    const msg = data.toString().trim()
    if (!msg) return

    if (msg.includes('ModuleNotFoundError') && msg.includes('adi_doctools')) {
      vscode.window.showErrorMessage('"adi-doctools" is not installed')
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
  })

  lineReader = readline.createInterface({
    input: proc.stdout!,
    crlfDelay: Infinity
  })
  lineReader.on('line', handleLine)

  py_process = proc
  output.appendLine("LSP server started")
}

export function stopPyProcess() {
  py_process?.kill()
}
