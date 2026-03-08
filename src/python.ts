import * as fs from 'fs'
import * as path from 'path'
import * as vscode from 'vscode'
import { spawn, ChildProcess } from 'child_process'

let py_process: ChildProcess | undefined
let output: vscode.OutputChannel

export function setOutputChannel(channel: vscode.OutputChannel) {
  output = channel
}

async function ensure_venv(): Promise<string> {
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

export async function start_py_process() {
  output.appendLine(`Starting py process`)

  const python = await ensure_venv()
  output.appendLine(`With ${python}`)

  const proc = spawn(python, ['-m', 'adi_doctools.lsp'])

  proc.on('error', (err: any) => {
    output.appendLine(err.message)
    vscode.window.showErrorMessage('Failed to start python3')
  })

  proc.stderr.on('data', (data) => {
    const msg = data.toString()
    output.appendLine(msg)

    if (msg.includes('ModuleNotFoundError') && msg.includes('adi_doctools')) {
      vscode.window.showErrorMessage(
        '"adi-doctools" is not installed'
      )
    }
  })

  proc.stdout.on('data', (data) => {
    output.appendLine(data.toString())
  })

  proc.on('exit', (code) => {
    output.appendLine(`LSP exited with code ${code}`)
  })

  py_process = proc
  output.appendLine("LSP server started")
}

export function stop_py_process() {
  py_process?.kill()
}
