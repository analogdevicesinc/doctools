import * as fs from 'fs'
import * as path from 'path'
import * as vscode from 'vscode'
import { spawn, execSync } from 'child_process'

let output: vscode.OutputChannel

export function setOutputChannel(channel: vscode.OutputChannel) {
  output = channel
}

export function getExtensionVersion(): string {
  const ext = vscode.extensions.getExtension('analogdevicesinc.adi-doctools')
  return ext?.packageJSON?.version || '0.0.0'
}

export function findConfPy(workspacePath: string): string | null {
  const candidates = [
    'docs/conf.py',
    'doc/conf.py',
    'docs/source/conf.py',
    'doc/source/conf.py',
    'doc/sphinx/source/conf.py',
    'docs/sphinx/source/conf.py',
    'source/conf.py',
    'conf.py'
  ]

  for (const candidate of candidates) {
    const fullPath = path.join(workspacePath, candidate)
    if (fs.existsSync(fullPath)) {
      return fullPath
    }
  }

  return null
}

export function findRequirements(workspacePath: string, confPyPath: string | null): string | null {
  const searchPaths: string[] = []

  if (confPyPath) {
    searchPaths.push(path.dirname(confPyPath))
  }

  searchPaths.push(workspacePath)

  const names = ['requirements_doc.txt', 'requirements.txt']

  for (const searchPath of searchPaths) {
    for (const name of names) {
      const fullPath = path.join(searchPath, name)
      if (fs.existsSync(fullPath)) {
        return fullPath
      }
    }
  }

  return null
}

export function getVenvPythonPath(workspacePath: string): string {
  return path.join(workspacePath, '.venv', 'bin', 'python')
}

export function venvExists(workspacePath: string): boolean {
  return fs.existsSync(getVenvPythonPath(workspacePath))
}

export async function createVenv(workspacePath: string): Promise<boolean> {
  const venvPath = path.join(workspacePath, '.venv')

  return new Promise((resolve) => {
    output.appendLine(`Creating venv at ${venvPath}...`)
    const proc = spawn('python3', ['-m', 'venv', venvPath])

    proc.stdout.on('data', (data) => output.appendLine(data.toString()))
    proc.stderr.on('data', (data) => output.appendLine(data.toString()))

    proc.on('close', (code) => {
      if (code === 0) {
        output.appendLine(`Venv created successfully`)
        resolve(true)
      } else {
        output.appendLine(`Failed to create venv (exit code ${code})`)
        resolve(false)
      }
    })
  })
}

export function getDoctoolsVersion(pythonPath: string): string | null {
  try {
    const result = execSync(
      `${pythonPath} -c "import adi_doctools; print(adi_doctools.__version__)"`,
      { encoding: 'utf-8', timeout: 10000 }
    ).trim()
    return result
  } catch {
    return null
  }
}

export function compareVersions(v1: string, v2: string): number {
  const parts1 = v1.split('.').map(Number)
  const parts2 = v2.split('.').map(Number)

  for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
    const p1 = parts1[i] || 0
    const p2 = parts2[i] || 0
    if (p1 > p2) return 1
    if (p1 < p2) return -1
  }
  return 0
}

async function ensurePip(pythonPath: string): Promise<void> {
  return new Promise((resolve) => {
    const proc = spawn(pythonPath, ['-m', 'ensurepip', '--upgrade'])
    proc.on('close', () => resolve())
    proc.on('error', () => resolve())
  })
}

async function pipInstall(pythonPath: string, args: string[], title: string): Promise<boolean> {
  await ensurePip(pythonPath)

  const fullArgs = ['-m', 'pip', 'install', ...args]

  output.show(true)

  return vscode.window.withProgress({
    location: vscode.ProgressLocation.Notification,
    title,
    cancellable: false
  }, async (progress) => {
    return new Promise<boolean>((resolve) => {
      output.appendLine(`Running: ${pythonPath} ${fullArgs.join(' ')}`)
      const proc = spawn(pythonPath, fullArgs)

      let lineCount = 0
      const updateProgress = () => {
        lineCount++
        progress.report({ increment: Math.max(1, 10 - Math.floor(lineCount / 5)) })
      }

      proc.stdout.on('data', (data) => {
        output.appendLine(data.toString().trim())
        updateProgress()
      })
      proc.stderr.on('data', (data) => {
        output.appendLine(data.toString().trim())
        updateProgress()
      })

      proc.on('close', async (code) => {
        if (code === 0) {
          resolve(true)
        } else {
          output.appendLine(`pip install failed (exit code ${code})`)
          const choice = await vscode.window.showErrorMessage(
            'Failed to install dependencies',
            'Show Output'
          )
          if (choice === 'Show Output') {
            output.show()
          }
          resolve(false)
        }
      })
    })
  })
}

export async function installRequirements(pythonPath: string, requirementsPath: string, upgrade: boolean): Promise<boolean> {
  const title = upgrade ? 'Upgrading dependencies...' : 'Installing dependencies...'
  const success = await pipInstall(pythonPath, ['-r', requirementsPath, '--upgrade'], title)

  if (success) {
    output.appendLine(`Requirements installed successfully`)
    await installDoctools(pythonPath, upgrade)
  }

  return success
}

export async function installDoctools(pythonPath: string, upgrade: boolean): Promise<boolean> {
  const installedVersion = getDoctoolsVersion(pythonPath)

  if (installedVersion && !upgrade) {
    output.appendLine(`adi-doctools already installed (${installedVersion})`)
    return true
  }

  const title = upgrade ? 'Upgrading adi-doctools...' : 'Installing adi-doctools...'
  const args = upgrade ? ['adi-doctools', '--upgrade'] : ['adi-doctools']
  const success = await pipInstall(pythonPath, args, title)

  if (success) {
    output.appendLine(`adi-doctools installed successfully`)
  }

  return success
}

export interface InitResult {
  pythonPath: string
  workspacePath: string
  requirementsPath: string
}

export async function initializePython(): Promise<InitResult | null> {
  const workspace = vscode.workspace.workspaceFolders?.[0]
  if (!workspace) {
    vscode.window.showErrorMessage('No workspace folder open')
    return null
  }

  const workspacePath = workspace.uri.fsPath
  output.appendLine(`Initializing doctools for workspace: ${workspacePath}`)

  const confPyPath = findConfPy(workspacePath)
  if (confPyPath) {
    output.appendLine(`Found conf.py: ${confPyPath}`)
  } else {
    output.appendLine(`No conf.py found in common locations`)
  }

  const requirementsPath = findRequirements(workspacePath, confPyPath)
  if (requirementsPath) {
    output.appendLine(`Found requirements: ${requirementsPath}`)
  }

  const pythonPath = getVenvPythonPath(workspacePath)

  if (!requirementsPath) {
    vscode.window.showWarningMessage('No requirements file (requirements.txt or requirements_doc.txt) found')
    return null
  }

  if (!venvExists(workspacePath)) {
    const setupChoice = await vscode.window.showInformationMessage(
      `No Python environment found. Create venv and install dependencies from ${path.basename(requirementsPath)}?`,
      'Yes', 'No'
    )

    if (setupChoice !== 'Yes') {
      output.appendLine('Skipped environment setup')
      return null
    }

    const created = await createVenv(workspacePath)
    if (!created) {
      vscode.window.showErrorMessage('Failed to create virtual environment')
      return null
    }

    await installRequirements(pythonPath, requirementsPath, false)
  } else {
    const installedVersion = getDoctoolsVersion(pythonPath)

    if (!installedVersion) {
      output.appendLine("Doctools (adi-doctools) is not installed")

      const installChoice = await vscode.window.showInformationMessage(
        `Doctools (adi-doctools) is not installed, install from ${path.basename(requirementsPath)}?`,
        'Yes', 'No'
      )

      if (installChoice === 'Yes') {
        await installRequirements(pythonPath, requirementsPath, false)
      } else {
        return null
      }
    } else {
      const extVersion = getExtensionVersion()
      output.appendLine(`adi_doctools version: ${installedVersion}`)
      output.appendLine(`Extension version: ${extVersion}`)

      if (compareVersions(extVersion, installedVersion) > 0) {
        const upgradeChoice = await vscode.window.showInformationMessage(
          `Extension version (${extVersion}) > adi-doctools (${installedVersion}), upgrade dependencies?`,
          'Yes', 'No'
        )

        if (upgradeChoice === 'Yes') {
          await installRequirements(pythonPath, requirementsPath, true)
        }
      }
    }
  }

  return { pythonPath, workspacePath, requirementsPath }
}
