#!/usr/bin/env node
const fs = require('fs')
const os = require('os')
const net = require('net')
const path = require('path')
const { spawn, execFileSync } = require('child_process')
const { createFixture } = require('./fixture')

const root = path.resolve(__dirname, '..', '..')
const headed = process.argv.includes('--headed')
const keep = process.argv.includes('--keep')

function findElectron() {
  if (process.env.VSCODE_BIN)
    return process.env.VSCODE_BIN
  for (const name of ['codium', 'code']) {
    try {
      const cli = fs.realpathSync(execFileSync('which', [name], { encoding: 'utf-8' }).trim())
      const electron = path.join(path.dirname(cli), '..', name)
      if (fs.existsSync(electron))
        return electron
    } catch { }
  }
  throw new Error('codium/code not found, set VSCODE_BIN')
}

function freePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.once('error', reject)
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address()
      server.close(() => resolve(port))
    })
  })
}

async function startXvfb() {
  for (let display = 90; display < 120; display++) {
    if (fs.existsSync(`/tmp/.X11-unix/X${display}`))
      continue
    const proc = spawn('Xvfb', [`:${display}`, '-screen', '0', '1600x1000x24', '-nolisten', 'tcp'], { stdio: 'ignore' })
    await new Promise(resolve => setTimeout(resolve, 500))
    if (proc.exitCode === null)
      return { proc, display: `:${display}` }
  }
  throw new Error('could not start Xvfb')
}

async function main() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'adoc-e2e-'))
  const workspace = path.join(tmp, 'workspace')
  const artifacts = process.env.ADOC_E2E_ARTIFACTS || path.join(tmp, 'artifacts')
  const userData = path.join(tmp, 'user-data')
  fs.mkdirSync(artifacts, { recursive: true })
  createFixture(workspace)

  const settings = { 'adi-doctools.port': await freePort() }
  if (process.env.ADOC_PYTHON)
    settings['adi-doctools.pythonPath'] = process.env.ADOC_PYTHON
  fs.mkdirSync(path.join(workspace, '.vscode'), { recursive: true })
  fs.writeFileSync(path.join(workspace, '.vscode', 'settings.json'), JSON.stringify(settings, null, 2))

  fs.mkdirSync(path.join(userData, 'User'), { recursive: true })
  fs.writeFileSync(path.join(userData, 'User', 'settings.json'), JSON.stringify({
    'security.workspace.trust.enabled': false,
    'workbench.startupEditor': 'none',
    'window.restoreWindows': 'none',
    'update.mode': 'none',
    'extensions.autoUpdate': false,
    'editor.minimap.enabled': false,
    'editor.wordWrap': 'off',
    'editor.smoothScrolling': false
  }, null, 2))

  const xvfb = headed ? undefined : await startXvfb()
  const cdpPort = await freePort()
  const env = {
    ...process.env,
    ADOC_E2E_CDP: String(cdpPort),
    ADOC_E2E_ARTIFACTS: artifacts,
    ADOC_E2E_WORKSPACE: workspace
  }
  if (xvfb) {
    env.DISPLAY = xvfb.display
    delete env.WAYLAND_DISPLAY
  }
  delete env.ELECTRON_RUN_AS_NODE
  delete env.VSCODE_IPC_HOOK_CLI

  const args = [
    workspace,
    `--user-data-dir=${userData}`,
    `--extensions-dir=${path.join(tmp, 'extensions')}`,
    `--extensionDevelopmentPath=${root}`,
    `--extensionTestsPath=${path.join(__dirname, 'suite.js')}`,
    `--remote-debugging-port=${cdpPort}`,
    '--disable-workspace-trust',
    '--skip-welcome',
    '--skip-release-notes',
    '--disable-gpu',
    '--no-sandbox',
    '--new-window'
  ]

  console.log(`workspace: ${workspace}`)
  console.log(`artifacts: ${artifacts}`)
  const proc = spawn(findElectron(), args, { env, stdio: 'inherit' })
  const timeout = setTimeout(() => {
    console.error('e2e: timed out')
    proc.kill('SIGKILL')
  }, Number(process.env.ADOC_E2E_TIMEOUT || 600) * 1000)

  const code = await new Promise(resolve => proc.on('exit', (code, signal) => resolve(signal ? 1 : code)))
  clearTimeout(timeout)
  xvfb?.proc.kill()
  if (!keep && code === 0)
    fs.rmSync(tmp, { recursive: true, force: true })
  process.exit(code)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
