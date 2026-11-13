import * as fs from 'fs'
import * as path from 'path'
import * as vscode from 'vscode'
import { spawn, execFile } from 'child_process'
import { compareVersions } from './version'

export const MIN_DOCTOOLS_VERSION = '0.5.3'

let output: vscode.OutputChannel

const isWindows = process.platform === 'win32'
const SYSTEM_PYTHON = isWindows ? 'python' : 'python3'

export function setOutputChannel(channel: vscode.OutputChannel) {
  output = channel
}

const isSupported = (version: string) => compareVersions(version, MIN_DOCTOOLS_VERSION) >= 0

export function findConfPy(workspacePath: string): string | null {
  const candidates = [
    'conf.py',
    'docs/conf.py',
    'doc/conf.py',
    'docs/source/conf.py',
    'doc/source/conf.py',
    'doc/sphinx/source/conf.py',
    'docs/sphinx/source/conf.py',
    'source/conf.py'
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

function venvPython(venvPath: string): string {
  if (isWindows)
    return path.join(venvPath, 'Scripts', 'python.exe')
  return path.join(venvPath, 'bin', 'python3')
}

export function getVenvPythonPath(workspacePath: string): string {
  return venvPython(path.join(workspacePath, '.venv'))
}

export function venvExists(workspacePath: string): boolean {
  return fs.existsSync(getVenvPythonPath(workspacePath))
}

function run(command: string, args: string[], timeout = 15000): Promise<string | null> {
  return new Promise((resolve) => {
    execFile(command, args, { encoding: 'utf-8', timeout, windowsHide: true }, (err, stdout) => {
      resolve(err ? null : stdout.trim())
    })
  })
}

export async function createVenv(workspacePath: string): Promise<boolean> {
  const venvPath = path.join(workspacePath, '.venv')

  return new Promise((resolve) => {
    output.appendLine(`Creating venv at ${venvPath}...`)
    const proc = spawn(SYSTEM_PYTHON, ['-m', 'venv', venvPath])

    proc.stdout.on('data', (data) => output.appendLine(data.toString().trimEnd()))
    proc.stderr.on('data', (data) => output.appendLine(data.toString().trimEnd()))

    proc.on('error', (err) => {
      output.appendLine(`Failed to run ${SYSTEM_PYTHON}: ${err.message}`)
      resolve(false)
    })

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

export function getDoctoolsVersion(pythonPath: string): Promise<string | null> {
  return run(pythonPath, ['-c', 'import adi_doctools; print(adi_doctools.__version__)'])
}

export { compareVersions }

function expandHome(p: string): string {
  if (p === '~' || p.startsWith('~/') || p.startsWith('~\\'))
    return path.join(process.env.HOME || process.env.USERPROFILE || '', p.slice(1))
  return p
}

function siblingPython(dir: string): string | null {
  const names = isWindows ? ['python.exe'] : ['python3', 'python']
  for (const name of names) {
    const candidate = path.join(dir, name)
    if (fs.existsSync(candidate))
      return candidate
  }
  return null
}

function shebangPython(script: string): string | null {
  try {
    const fd = fs.openSync(script, 'r')
    const buffer = Buffer.alloc(512)
    const length = fs.readSync(fd, buffer, 0, buffer.length, 0)
    fs.closeSync(fd)
    const match = buffer.subarray(0, length).toString('utf-8').match(/^#!\s*(\S*python[^\s]*)/)
    return match && fs.existsSync(match[1]) ? match[1] : null
  } catch {
    return null
  }
}

function findOnPath(name: string): string | null {
  const extensions = isWindows ? (process.env.PATHEXT || '.EXE;.CMD;.BAT').split(';') : ['']
  for (const dir of (process.env.PATH || '').split(path.delimiter)) {
    if (!dir) continue
    for (const ext of extensions) {
      const candidate = path.join(dir, name + ext)
      try {
        if (fs.statSync(candidate).isFile())
          return candidate
      } catch { }
    }
  }
  return null
}

export function resolveConfiguredPython(configured: string, workspacePath: string): string | null {
  let resolved = expandHome(configured.trim().replace(/\$\{workspaceFolder\}/g, workspacePath))
  if (!resolved)
    return null
  if (!path.isAbsolute(resolved))
    resolved = /[\\/]/.test(resolved) ? path.resolve(workspacePath, resolved) : (findOnPath(resolved) || resolved)

  let stat: fs.Stats
  try {
    stat = fs.statSync(resolved)
  } catch {
    return null
  }

  if (stat.isDirectory()) {
    const python = venvPython(resolved)
    return fs.existsSync(python) ? python : siblingPython(resolved)
  }
  if (/^(adoc|adi-doctools)(\.exe)?$/i.test(path.basename(resolved)))
    return siblingPython(path.dirname(resolved)) || shebangPython(resolved)
  return resolved
}

function pathCandidates(): string[] {
  const candidates: string[] = []
  const adoc = findOnPath('adoc')
  if (adoc) {
    const python = siblingPython(path.dirname(adoc)) || shebangPython(adoc)
    if (python) candidates.push(python)
  }
  const python = findOnPath(SYSTEM_PYTHON)
  if (python) candidates.push(python)
  return candidates
}

async function ensurePip(pythonPath: string): Promise<void> {
  if (await run(pythonPath, ['-m', 'pip', '--version']) !== null)
    return
  await run(pythonPath, ['-m', 'ensurepip', '--upgrade'], 120000)
}

export async function pipInstall(pythonPath: string, args: string[], title: string): Promise<boolean> {
  await ensurePip(pythonPath)

  const fullArgs = ['-m', 'pip', 'install', ...args]

  return vscode.window.withProgress({
    location: vscode.ProgressLocation.Notification,
    title,
    cancellable: true
  }, async (progress, token) => {
    return new Promise<boolean>((resolve) => {
      output.appendLine(`Running: ${pythonPath} ${fullArgs.join(' ')}`)
      const proc = spawn(pythonPath, fullArgs)
      token.onCancellationRequested(() => proc.kill())

      const report = (data: Buffer) => {
        const text = data.toString().trim()
        if (!text) return
        output.appendLine(text)
        progress.report({ message: text.split('\n').pop()!.slice(0, 80) })
      }

      proc.stdout.on('data', report)
      proc.stderr.on('data', report)

      proc.on('error', (err) => {
        output.appendLine(`Failed to run pip: ${err.message}`)
        resolve(false)
      })

      proc.on('close', async (code) => {
        if (code === 0) {
          resolve(true)
          return
        }
        resolve(false)
        if (token.isCancellationRequested) {
          output.appendLine('pip install cancelled')
          return
        }
        output.appendLine(`pip install failed (exit code ${code})`)
        const choice = await vscode.window.showErrorMessage(
          'Failed to install dependencies',
          'Show Output'
        )
        if (choice === 'Show Output') {
          output.show()
        }
      })
    })
  })
}

export async function installRequirements(pythonPath: string, requirementsPath: string | null, upgrade: boolean): Promise<boolean> {
  if (requirementsPath) {
    const title = upgrade ? 'Upgrading dependencies...' : 'Installing dependencies...'
    if (!await pipInstall(pythonPath, ['-r', requirementsPath, '--upgrade'], title))
      return false
    output.appendLine(`Requirements installed successfully`)
  }

  return installDoctools(pythonPath, upgrade)
}

export async function installDoctools(pythonPath: string, upgrade: boolean): Promise<boolean> {
  const title = upgrade ? 'Upgrading adi-doctools...' : 'Installing adi-doctools...'
  const requirement = `adi-doctools>=${MIN_DOCTOOLS_VERSION}`
  const args = upgrade
    ? [requirement, 'language_tool_python', '--upgrade']
    : [requirement, 'language_tool_python']
  const success = await pipInstall(pythonPath, args, title)

  if (success) {
    output.appendLine(`adi-doctools installed successfully`)
  }

  return success
}

export interface InitResult {
  pythonPath: string
  workspacePath: string
  requirementsPath: string | null
  managed: boolean
  version: string | null
  setting: string
}

export type SetupPrompt = 'none' | 'notify' | 'modal'

async function ask<T extends string>(show: () => Thenable<T | undefined>): Promise<T | undefined> {
  try {
    return await show()
  } catch (err: any) {
    output.appendLine(`Prompt failed: ${err?.message ?? err}`)
    return undefined
  }
}

export const SETUP_COMMAND = 'adi-doctools.setup-python'

const settingsTarget = () => vscode.workspace.workspaceFolders?.length
  ? vscode.ConfigurationTarget.Workspace
  : vscode.ConfigurationTarget.Global

function notifySetup(message: string) {
  vscode.window.showWarningMessage(message, 'Set Up...').then(choice => {
    if (choice === 'Set Up...')
      vscode.commands.executeCommand(SETUP_COMMAND)
  })
}

async function selectPython(workspacePath: string, requirementsPath: string | null): Promise<InitResult | null> {
  const picked = await vscode.window.showOpenDialog({
    title: `Select a Python interpreter or the adoc executable (adi-doctools ${MIN_DOCTOOLS_VERSION} or newer)`,
    openLabel: 'Use for Doctools',
    canSelectFiles: true,
    canSelectFolders: false,
    canSelectMany: false,
    defaultUri: vscode.Uri.file(workspacePath)
  })
  if (!picked?.length)
    return null

  const selected = picked[0].fsPath
  const pythonPath = resolveConfiguredPython(selected, workspacePath)
  const version = pythonPath && await getDoctoolsVersion(pythonPath)
  if (!pythonPath || !version || !isSupported(version)) {
    const reason = version
      ? `provides adi-doctools ${version}, ${MIN_DOCTOOLS_VERSION} or newer is required`
      : 'does not provide adi-doctools'
    output.appendLine(`Selected ${selected} ${reason}`)
    vscode.window.showErrorMessage(`Doctools: ${path.basename(selected)} ${reason}.`)
    return null
  }

  await vscode.workspace.getConfiguration('adi-doctools').update('pythonPath', selected, settingsTarget())
  output.appendLine(`Using selected Python ${pythonPath} (adi_doctools ${version})`)
  return { pythonPath, workspacePath, requirementsPath, managed: false, version, setting: selected }
}

async function createManagedVenv(
  workspacePath: string, requirementsPath: string | null, hasVenv: boolean, venvVersion: string | null
): Promise<InitResult | null> {
  const venvPath = getVenvPythonPath(workspacePath)
  if (!hasVenv && !await createVenv(workspacePath)) {
    vscode.window.showErrorMessage('Failed to create virtual environment')
    return null
  }

  output.show(true)
  if (!await installRequirements(venvPath, requirementsPath, venvVersion !== null))
    return null

  const version = await getDoctoolsVersion(venvPath)
  if (!version || !isSupported(version)) {
    vscode.window.showErrorMessage(version
      ? `adi-doctools ${version} was installed, but ${MIN_DOCTOOLS_VERSION} or newer is required`
      : 'adi-doctools could not be imported after the installation')
    return null
  }
  return { pythonPath: venvPath, workspacePath, requirementsPath, managed: true, version, setting: '' }
}

export async function initializePython(prompt: SetupPrompt): Promise<InitResult | null> {
  const workspace = vscode.workspace.workspaceFolders?.[0]
  if (!workspace) {
    output.appendLine('No workspace folder open, the documentation server is disabled')
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

  const configured = vscode.workspace.getConfiguration('adi-doctools').get<string>('pythonPath', '').trim()
  if (configured) {
    const pythonPath = resolveConfiguredPython(configured, workspacePath)
    const version = pythonPath && await getDoctoolsVersion(pythonPath)
    if (pythonPath && version && isSupported(version)) {
      output.appendLine(`Using configured Python ${pythonPath} (adi_doctools ${version})`)
      return { pythonPath, workspacePath, requirementsPath, managed: false, version, setting: configured }
    }

    const reason = version
      ? `provides adi-doctools ${version}, ${MIN_DOCTOOLS_VERSION} or newer is required`
      : 'does not provide adi-doctools'
    output.appendLine(`Configured adi-doctools.pythonPath '${configured}' ${reason}`)
    const message = `Doctools: the configured Python '${configured}' ${reason}.`
    if (prompt === 'notify')
      notifySetup(message)
    if (prompt !== 'modal')
      return null

    const choice = await ask(() => vscode.window.showErrorMessage(message, { modal: true }, 'Select Python', 'Open Settings'))
    if (choice === 'Select Python')
      return selectPython(workspacePath, requirementsPath)
    if (choice === 'Open Settings')
      vscode.commands.executeCommand('workbench.action.openSettings', 'adi-doctools.pythonPath')
    return null
  }

  const venvPath = getVenvPythonPath(workspacePath)
  const hasVenv = venvExists(workspacePath)
  const venvVersion = hasVenv ? await getDoctoolsVersion(venvPath) : null
  if (venvVersion && isSupported(venvVersion)) {
    output.appendLine(`Using ${venvPath} (adi_doctools ${venvVersion})`)
    return { pythonPath: venvPath, workspacePath, requirementsPath, managed: true, version: venvVersion, setting: '' }
  }

  for (const pythonPath of pathCandidates()) {
    const version = await getDoctoolsVersion(pythonPath)
    if (version && isSupported(version)) {
      output.appendLine(`Using ${pythonPath} from PATH (adi_doctools ${version})`)
      return { pythonPath, workspacePath, requirementsPath, managed: false, version, setting: '' }
    }
    if (version)
      output.appendLine(`Skipping ${pythonPath}: adi_doctools ${version} is older than ${MIN_DOCTOOLS_VERSION}`)
  }

  output.appendLine(venvVersion
    ? `adi_doctools ${venvVersion} in .venv is older than ${MIN_DOCTOOLS_VERSION}`
    : 'Doctools (adi-doctools) is not installed')

  const source = requirementsPath ? path.basename(requirementsPath) : 'PyPI'
  if (prompt === 'notify')
    notifySetup(venvVersion
      ? `Doctools: adi-doctools ${venvVersion} in .venv is older than ${MIN_DOCTOOLS_VERSION}.`
      : `Doctools: no Python environment with adi-doctools ${MIN_DOCTOOLS_VERSION} or newer found.`)
  if (prompt !== 'modal')
    return null

  const create = venvVersion ? 'Upgrade .venv' : hasVenv ? 'Install into .venv' : 'Create .venv'
  const choice = await ask(() => vscode.window.showInformationMessage(
    venvVersion
      ? `adi-doctools ${venvVersion} in .venv is older than the required ${MIN_DOCTOOLS_VERSION}.`
      : `Doctools needs a Python environment with adi-doctools ${MIN_DOCTOOLS_VERSION} or newer.`,
    {
      modal: true,
      detail: `${create}: installs from ${source} into ${path.join(workspacePath, '.venv')}.\n` +
        'Select Python: use an existing interpreter, virtual environment or adoc executable.'
    },
    create, 'Select Python'
  ))

  if (choice === 'Select Python')
    return selectPython(workspacePath, requirementsPath)
  if (choice !== create) {
    output.appendLine('Skipped environment setup')
    return null
  }
  return createManagedVenv(workspacePath, requirementsPath, hasVenv, venvVersion)
}
