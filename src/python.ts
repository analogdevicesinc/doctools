import * as fs from 'fs'
import * as path from 'path'
import * as vscode from 'vscode'
import * as readline from 'readline'
import { spawn, ChildProcess } from 'child_process'

let py_process: ChildProcess | undefined
let output: vscode.OutputChannel
let lineReader: readline.Interface | undefined

export async function lspSend(msg: object): Promise<any> {
  if (!py_process || !py_process.stdin || !lineReader) {
    throw new Error('LSP process not running')
  }

  return new Promise((resolve, reject) => {
    const json = JSON.stringify(msg)
    output.appendLine(`[send] ${json}`)

    const handler = (line: string) => {
      output.appendLine(`[recv] ${line}`)
      try {
        const response = JSON.parse(line)
        resolve(response)
      } catch (err) {
        reject(new Error(`Invalid JSON response: ${line}`))
      }
      lineReader!.off('line', handler)
    }

    lineReader!.once('line', handler)
    py_process!.stdin!.write(json + '\n')
  })
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
  output.appendLine(`Starting py process`)

  const python = await ensureVenv()
  output.appendLine(`With ${python}`)

  const proc = spawn(python, ['-m', 'adi_doctools.lsp'])

  proc.on('error', (err: any) => {
    output.appendLine(err.message)
    vscode.window.showErrorMessage('Failed to start python3')
  })

  proc.stderr.on('data', (data) => {
    const msg = data.toString()
    output.appendLine(`[stderr] ${msg}`)

    if (msg.includes('ModuleNotFoundError') && msg.includes('adi_doctools')) {
      vscode.window.showErrorMessage(
        '"adi-doctools" is not installed'
      )
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

  py_process = proc
  output.appendLine("LSP server started")
}

export function stopPyProcess() {
  py_process?.kill()
}
