import * as vscode from 'vscode'
import * as readline from 'readline'
import * as fs from 'fs/promises'
import * as net from 'net'
import * as path from 'path'
import { spawn, ChildProcess } from 'child_process'
import {
  setOutputChannel as setInitOutputChannel,
  initializePython,
  installRequirements,
  pipInstall,
  InitResult
} from './python-init'
import { RpcClient, Notification } from './rpc'
import { parseWarningLine, stripAnsi, ParsedWarning } from './sphinx-warnings'

let py_process: ChildProcess | undefined
let rpc: RpcClient | undefined
let init: InitResult | undefined
let starting: Promise<boolean> | undefined
let stopping = false
let output: vscode.OutputChannel
let debugOutput: vscode.OutputChannel
let diagnosticCollection: vscode.DiagnosticCollection

const DEFAULT_PORT = 8080
const GRACEFUL_EXIT_MS = 3000

export interface ServerInfo {
  url: string
  port: number
  srcdir: string
  builddir: string
}

let serverInfo: ServerInfo | undefined

const fileDiagnostics = new Map<string, { uri: vscode.Uri; diagnostics: vscode.Diagnostic[] }>()
const buildDiagnostics = new Map<string, { uri: vscode.Uri; diagnostics: vscode.Diagnostic[] }>()
const canonicalPathCache = new Map<string, string>()
let buildMode: 'subprocess' | 'incremental' = 'subprocess'
let buildStartedAt = 0
let pendingDiagnostics: Promise<void> = Promise.resolve()
let lastPublishedAt = 0

async function getCanonicalPath(filePath: string): Promise<string> {
  const cached = canonicalPathCache.get(filePath)
  if (cached) return cached

  try {
    const canonical = await fs.realpath(filePath)
    canonicalPathCache.set(filePath, canonical)
    return canonical
  } catch {
    return filePath
  }
}

async function findMatchingDocumentUri(filePath: string): Promise<vscode.Uri> {
  const canonical = await getCanonicalPath(filePath)

  for (const doc of vscode.workspace.textDocuments) {
    if (doc.uri.scheme === 'file') {
      const docCanonical = await getCanonicalPath(doc.uri.fsPath)
      if (docCanonical === canonical) {
        return doc.uri
      }
    }
  }

  return vscode.Uri.file(filePath)
}

const lsp_message_type: Record<number, string> = {
  1: 'error',
  2: 'warning',
  3: 'info',
  4: 'log'
}

export type BuildStatus = 'off' | 'building' | 'ready'
let buildStatus: BuildStatus = 'off'
export const buildStatusEmitter = new vscode.EventEmitter<BuildStatus>()
export const onBuildStatusChanged = buildStatusEmitter.event

const serverStartedEmitter = new vscode.EventEmitter<ServerInfo>()
export const onServerStarted = serverStartedEmitter.event
const serverStoppedEmitter = new vscode.EventEmitter<void>()
export const onServerStopped = serverStoppedEmitter.event
const lspStartedEmitter = new vscode.EventEmitter<void>()
export const onLspStarted = lspStartedEmitter.event

let serverWaiters: ((started: boolean) => void)[] = []

function setBuildStatus(status: BuildStatus) {
  if (buildStatus === status) return
  buildStatus = status
  buildStatusEmitter.fire(status)
}

function settleServerWaiters(started: boolean) {
  const waiters = serverWaiters
  serverWaiters = []
  for (const waiter of waiters)
    waiter(started)
}

function serverStopped() {
  const wasRunning = serverInfo !== undefined || buildStatus !== 'off'
  serverInfo = undefined
  setBuildStatus('off')
  settleServerWaiters(false)
  if (wasRunning)
    serverStoppedEmitter.fire()
}

export function getBuildStatus(): BuildStatus {
  return buildStatus
}

export function getServerInfo(): ServerInfo | undefined {
  return serverInfo
}

export function isLspRunning(): boolean {
  return rpc !== undefined
}

export function getPythonPath(): string | undefined {
  return init?.pythonPath
}

function handleNotification(parsed: Notification) {
  const { method, params = {} } = parsed

  switch (method) {
    case 'window/logMessage': {
      const level = lsp_message_type[params.type] || 'log'
      output.appendLine(`[${level}] ${stripAnsi(String(params.message))}`)
      break
    }
    case 'build/started': {
      output.appendLine(`-- Building -- (${params.mode})`)
      buildMode = params.mode === 'incremental' ? 'incremental' : 'subprocess'
      buildStartedAt = Date.now()
      buildDiagnostics.clear()
      if (buildMode === 'subprocess')
        clearDiagnostics()
      setBuildStatus('building')
      break
    }
    case 'build/output': {
      const line = String(params.line)
      output.appendLine(line)
      const warning = parseWarningLine(line)
      if (warning) {
        debugOutput.appendLine(`[diagnostic] ${warning.file}:${warning.line} - ${warning.message}`)
        pendingDiagnostics = pendingDiagnostics.then(() => addDiagnostic(warning)).catch(() => {})
      }
      break
    }
    case 'build/completed': {
      output.appendLine(`---- Done ----`)
      const mode = buildMode
      const startedAt = buildStartedAt
      pendingDiagnostics = pendingDiagnostics.then(() => publishDiagnostics(mode, startedAt)).catch(() => {})
      if (serverInfo)
        setBuildStatus('ready')
      break
    }
    case 'server/started': {
      serverInfo = {
        url: params.url,
        port: params.port,
        srcdir: params.srcdir,
        builddir: params.builddir
      }
      output.appendLine(`[server] Running on ${params.url}`)
      setBuildStatus('ready')
      settleServerWaiters(true)
      serverStartedEmitter.fire(serverInfo)
      break
    }
    case 'server/stopped': {
      output.appendLine(params.failed ? `[server] Failed` : `[server] Stopped`)
      serverStopped()
      break
    }
    default:
      output.appendLine(`[notification] ${method}: ${JSON.stringify(params)}`)
  }
}

export async function lspSend(msg: object, timeoutMs?: number): Promise<any> {
  if (!rpc)
    throw new Error('LSP process not running')
  return rpc.request(msg, timeoutMs)
}

function isPortFree(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const server = net.createServer()
    server.once('error', () => resolve(false))
    server.once('listening', () => server.close(() => resolve(true)))
    server.listen(port)
  })
}

async function pickPort(): Promise<number> {
  const configured = vscode.workspace.getConfiguration('adi-doctools').get<number>('port', DEFAULT_PORT)
  const first = Number.isInteger(configured) && configured > 0 && configured < 65536 ? configured : DEFAULT_PORT
  for (let port = first; port < Math.min(first + 20, 65536); port++) {
    if (await isPortFree(port)) {
      if (port !== first)
        output.appendLine(`[server] Port ${first} is in use, using ${port}`)
      return port
    }
  }
  return first
}

async function showServerFailure(message: string) {
  const choice = await vscode.window.showErrorMessage(message, 'Show Output')
  if (choice === 'Show Output')
    output.show()
}

export class buildServer {
  private static sparsePathsGetter: (() => string[] | null) | null = null

  static setSparsePathsGetter(getter: () => string[] | null) {
    buildServer.sparsePathsGetter = getter
  }

  static async start (): Promise<boolean> {
    if (!rpc && !await startPyProcess())
      return false
    if (serverInfo)
      return true
    if (serverWaiters.length > 0)
      return new Promise<boolean>(resolve => serverWaiters.push(resolve))

    const sparse = buildServer.sparsePathsGetter?.() ?? null
    const started = new Promise<boolean>(resolve => serverWaiters.push(resolve))
    let result: any
    try {
      result = await lspSend({ 'server': 'start', 'sparse': sparse, 'port': await pickPort() })
    } catch (err: any) {
      settleServerWaiters(false)
      showServerFailure(`Doctools: failed to start the server: ${err.message}`)
      return false
    }
    if (result?.return === 'already_running') {
      settleServerWaiters(serverInfo !== undefined)
      return true
    }
    if (result?.return !== 'success') {
      settleServerWaiters(false)
      showServerFailure('Doctools: failed to start the documentation server.')
      return false
    }

    if (serverWaiters.length > 0)
      setBuildStatus('building')

    const ok = await vscode.window.withProgress({
      location: vscode.ProgressLocation.Window,
      title: sparse ? 'Building documentation (sparse)...' : 'Building documentation...',
      cancellable: false
    }, () => started)

    if (!ok && !stopping)
      showServerFailure('Doctools: the documentation server failed to start.')
    return ok
  }

  static async stop (): Promise<void> {
    if (!rpc) return
    stopping = true
    try {
      await lspSend({ 'server': 'stop' }, 30000)
    } catch (err: any) {
      output.appendLine(`[server] Stop failed: ${err.message}`)
    } finally {
      stopping = false
    }
    serverStopped()
  }

  static async restart (): Promise<boolean> {
    await buildServer.stop()
    return buildServer.start()
  }

  static async updateSparse (): Promise<void> {
    if (!rpc || buildStatus === 'off') return
    const sparse = buildServer.sparsePathsGetter?.() ?? null
    try {
      await lspSend({ 'server': 'update_sparse', 'sparse': sparse })
    } catch (err: any) {
      output.appendLine(`[server] Sparse update failed: ${err.message}`)
    }
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

function toDiagnostic(warning: ParsedWarning): vscode.Diagnostic {
  const line = Math.max(0, warning.line - 1)
  const range = new vscode.Range(line, 0, line, 1000)
  const diagnostic = new vscode.Diagnostic(
    range,
    warning.message,
    warning.severity === 'error' ? vscode.DiagnosticSeverity.Error : vscode.DiagnosticSeverity.Warning
  )
  diagnostic.source = 'Sphinx'
  return diagnostic
}

async function addDiagnostic(warning: ParsedWarning) {
  const file = path.isAbsolute(warning.file) || !serverInfo
    ? warning.file
    : path.join(serverInfo.srcdir, warning.file)
  const uri = await findMatchingDocumentUri(file)
  const uriKey = uri.toString()

  const entry = buildDiagnostics.get(uriKey) || { uri, diagnostics: [] }
  entry.diagnostics.push(toDiagnostic(warning))
  buildDiagnostics.set(uriKey, entry)
}

async function publishDiagnostics(mode: 'subprocess' | 'incremental', startedAt: number) {
  if (mode === 'incremental') {
    for (const [key, entry] of [...fileDiagnostics]) {
      if (buildDiagnostics.has(key)) continue
      let modified = true
      try {
        modified = (await fs.stat(entry.uri.fsPath)).mtimeMs > lastPublishedAt
      } catch { }
      if (modified) {
        fileDiagnostics.delete(key)
        diagnosticCollection.delete(entry.uri)
      }
    }
  }
  for (const [key, entry] of buildDiagnostics) {
    fileDiagnostics.set(key, entry)
    diagnosticCollection.set(entry.uri, entry.diagnostics)
  }
  buildDiagnostics.clear()
  lastPublishedAt = startedAt
}

function clearDiagnostics() {
  fileDiagnostics.clear()
  buildDiagnostics.clear()
  diagnosticCollection.clear()
  canonicalPathCache.clear()
}

export async function startPyProcess(interactive = true): Promise<boolean> {
  if (rpc) return true
  if (starting) return starting

  starting = (async () => {
    const result = await initializePython(interactive)
    if (!result) return false
    init = result
    return startLspProcess(result)
  })()

  try {
    return await starting
  } finally {
    starting = undefined
  }
}

export async function restartPyProcess(): Promise<boolean> {
  await stopPyProcess()
  return startPyProcess()
}

export async function installPythonPackage(name: string): Promise<boolean> {
  if (!init) return false
  return pipInstall(init.pythonPath, [name], `Installing ${name}...`)
}

async function handleMissingModule(result: InitResult, moduleName: string) {
  const installChoice = await vscode.window.showErrorMessage(
    `Missing Python module '${moduleName}'. Install dependencies?`,
    'Yes', 'No'
  )
  if (installChoice !== 'Yes') return

  if (await installRequirements(result.pythonPath, result.requirementsPath, false))
    await startLspProcess(result)
}

function startLspProcess(result: InitResult): Promise<boolean> {
  const { pythonPath, workspacePath } = result
  output.appendLine(`Starting LSP with ${pythonPath}`)

  return new Promise<boolean>((resolve) => {
    const proc = spawn(pythonPath, ['-m', 'adi_doctools.lsp'], {
      cwd: workspacePath,
      env: { ...process.env, PYTHONUNBUFFERED: '1' }
    })

    const client = new RpcClient(
      (line) => { proc.stdin.write(line) },
      handleNotification,
      (line) => output.appendLine(stripAnsi(line)),
      (direction, line) => debugOutput.appendLine(`[${direction}] ${line.slice(0, 2000)}`)
    )

    let missingModule: string | undefined
    let settled = false
    const settle = (value: boolean) => {
      if (settled) return
      settled = true
      resolve(value)
    }

    proc.on('error', (err: any) => {
      output.appendLine(err.message)
      vscode.window.showErrorMessage(`Doctools: failed to start ${pythonPath}`)
      client.close(new Error('LSP process failed to start'))
      settle(false)
    })

    proc.stdin.on('error', () => {})

    proc.stderr.on('data', (data) => {
      const msg = data.toString().trim()
      if (!msg) return

      const match = msg.includes('ModuleNotFoundError') && msg.match(/No module named '([^']+)'/)
      if (match && !match[1].startsWith('adi_doctools.lsp.'))
        missingModule = match[1]

      for (const line of msg.split('\n')) {
        if (line.includes("'adi_doctools.lsp' is a package and cannot be directly executed"))
          continue
        try {
          const log = JSON.parse(line)
          const level = log.level || 'LOG'
          output.appendLine(`[${level}] ${log.message}`)
        } catch {
          output.appendLine(stripAnsi(line))
        }
      }
    })

    proc.on('exit', (code, signal) => {
      output.appendLine(`LSP exited with ${signal ? `signal ${signal}` : `code ${code}`}`)
      const intentional = stopping || py_process !== proc
      client.close(new Error('LSP process exited'))
      if (py_process === proc) {
        py_process = undefined
        rpc = undefined
        serverStopped()
      }
      settle(false)

      if (missingModule)
        handleMissingModule(result, missingModule)
      else if (!intentional)
        vscode.window.showWarningMessage('Doctools: the Python process exited unexpectedly.', 'Restart', 'Show Output')
          .then(choice => {
            if (choice === 'Restart') startPyProcess()
            else if (choice === 'Show Output') output.show()
          })
    })

    const lineReader = readline.createInterface({
      input: proc.stdout!,
      crlfDelay: Infinity
    })
    lineReader.on('line', (line) => client.handleLine(line))

    proc.on('spawn', () => {
      py_process = proc
      rpc = client
      output.appendLine("LSP process started")
      lspStartedEmitter.fire()
      settle(true)
    })
  })
}

export function stopPyProcess(): Promise<void> {
  const proc = py_process
  if (!proc) return Promise.resolve()

  py_process = undefined
  rpc?.close(new Error('LSP process stopped'))
  rpc = undefined
  serverStopped()

  return new Promise<void>((resolve) => {
    const timer = setTimeout(() => proc.kill(), GRACEFUL_EXIT_MS)
    proc.once('exit', () => {
      clearTimeout(timer)
      resolve()
    })
    try {
      proc.stdin?.end()
    } catch {
      proc.kill()
    }
  })
}
