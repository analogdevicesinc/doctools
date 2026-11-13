const vscode = require('vscode')
const assert = require('assert')
const fs = require('fs')
const path = require('path')
const { execFileSync } = require('child_process')

const workspace = process.env.ADOC_E2E_WORKSPACE
const artifacts = process.env.ADOC_E2E_ARTIFACTS
const cdpPort = process.env.ADOC_E2E_CDP
const withLanguageTool = process.env.ADOC_E2E_LANGUAGETOOL !== '0'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const file = name => path.join(workspace, 'docs', name)

async function waitFor(label, fn, timeout = 30000, interval = 100) {
  const start = Date.now()
  let last
  while (Date.now() - start < timeout) {
    try {
      last = await fn()
      if (last)
        return last
    } catch (err) {
      last = err
    }
    await sleep(interval)
  }
  throw new Error(`timeout waiting for ${label} (last: ${last instanceof Error ? last.message : JSON.stringify(last)})`)
}

class Cdp {
  static async targets() {
    const response = await fetch(`http://127.0.0.1:${cdpPort}/json/list`)
    return response.json()
  }

  static async connect(match) {
    const target = await waitFor('cdp target', async () => (await Cdp.targets()).find(match), 15000)
    const cdp = new Cdp()
    cdp.socket = new WebSocket(target.webSocketDebuggerUrl)
    cdp.pending = new Map()
    cdp.nextId = 1
    cdp.socket.addEventListener('message', ev => {
      const msg = JSON.parse(ev.data)
      const entry = cdp.pending.get(msg.id)
      if (!entry)
        return
      cdp.pending.delete(msg.id)
      if (msg.error)
        entry.reject(new Error(msg.error.message))
      else
        entry.resolve(msg.result)
    })
    await new Promise((resolve, reject) => {
      cdp.socket.addEventListener('open', resolve)
      cdp.socket.addEventListener('error', () => reject(new Error('cdp connection failed')))
    })
    return cdp
  }

  send(method, params = {}) {
    const id = this.nextId++
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject })
      this.socket.send(JSON.stringify({ id, method, params }))
    })
  }

  async evaluate(expression) {
    const result = await this.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
    if (result.exceptionDetails)
      throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text)
    return result.result.value
  }

  close() {
    this.socket.close()
  }
}

async function screenshot(name) {
  try {
    const cdp = await Cdp.connect(t => t.type === 'page' && t.url.includes('workbench'))
    const { data } = await cdp.send('Page.captureScreenshot', { format: 'png' })
    fs.writeFileSync(path.join(artifacts, `${name}.png`), Buffer.from(data, 'base64'))
    cdp.close()
  } catch (err) {
    console.log(`screenshot ${name} failed: ${err.message}`)
  }
}

const PAGE_STATE = `(() => {
  const header = document.querySelector('header')
  const offset = header && ['fixed', 'sticky'].includes(getComputedStyle(header).position)
    ? Math.max(header.getBoundingClientRect().bottom, 0) : 0
  let line
  for (const elem of document.querySelectorAll('[class*="src-line-"]')) {
    if (elem.getClientRects().length && elem.getBoundingClientRect().top >= offset - 1) {
      line = Number(elem.className.match(/src-line-(\\d+)/)[1])
      break
    }
  }
  return {
    path: location.pathname,
    scrollY: Math.round(window.scrollY),
    maxScroll: document.documentElement.scrollHeight - window.innerHeight,
    line,
    sync: document.documentElement.classList.contains('editor-sync'),
    status: getComputedStyle(document.getElementById('dev_pool_status')).display,
    text: document.querySelector('.body')?.innerText.length
  }
})()`

async function pageCdp(origin) {
  return Cdp.connect(t => t.url.startsWith(origin) && t.type !== 'page')
}

const topLine = editor => editor.visibleRanges[0].start.line + 1

function revealPadding(editor) {
  const config = vscode.workspace.getConfiguration('editor', editor.document)
  if (!config.get('stickyScroll.enabled'))
    return config.get('cursorSurroundingLines')
  return Math.max(config.get('cursorSurroundingLines'), config.get('stickyScroll.maxLineCount'))
}

async function reveal(editor, line) {
  const target = line - 1 + (line > 1 ? revealPadding(editor) : 0)
  editor.revealRange(new vscode.Range(target, 0, target, 0), vscode.TextEditorRevealType.AtTop)
  await waitFor(`editor at line ${line}`, () => topLine(editor) === line, 5000)
}

const tests = []
const test = (name, fn) => tests.push({ name, fn })
const ctx = {}

test('activates and starts the python backend', async () => {
  const document = await vscode.workspace.openTextDocument(file('guide/index.rst'))
  ctx.editor = await vscode.window.showTextDocument(document, vscode.ViewColumn.One)
  const extension = vscode.extensions.getExtension('gastmaier.adi-doctools')
  assert.ok(extension, 'extension not found')
  ctx.api = await extension.activate()
  await waitFor('python backend', () => ctx.api.lspRunning(), 30000)
  console.log(`    python: ${ctx.api.pythonPath()}`)
  assert.equal(ctx.api.buildStatus(), 'off')
})

test('a missing environment does not block the server start', async () => {
  const config = vscode.workspace.getConfiguration('adi-doctools')
  const original = config.inspect('pythonPath').workspaceValue
  try {
    await config.update('pythonPath', path.join(workspace, 'no-such-python'), vscode.ConfigurationTarget.Workspace)
    await waitFor('setup needed', () => ctx.api.setupNeeded() && !ctx.api.lspRunning(), 15000)
    const workbench = await Cdp.connect(t => t.type === 'page' && t.url.includes('workbench'))
    const status = await workbench.evaluate(`[...document.querySelectorAll('.statusbar-item')].map(i => i.innerText).join('|')`)
    workbench.close()
    assert.match(status, /Docs: Set up Python/)
    await screenshot('00-setup-needed')

    for (let attempt = 0; attempt < 2; attempt++) {
      const start = vscode.commands.executeCommand('adi-doctools.start-server')
      assert.equal(await Promise.race([start, sleep(5000).then(() => 'hang')]), false)
    }
    assert.equal(ctx.api.buildStatus(), 'off')
  } finally {
    await config.update('pythonPath', original, vscode.ConfigurationTarget.Workspace)
  }
  await waitFor('backend restarted', () => ctx.api.lspRunning() && !ctx.api.setupNeeded(), 30000)
  const workbench = await Cdp.connect(t => t.type === 'page' && t.url.includes('workbench'))
  await waitFor('status restored', async () =>
    /Docs: Stopped/.test(await workbench.evaluate(`[...document.querySelectorAll('.statusbar-item')].map(i => i.innerText).join('|')`)), 5000)
  workbench.close()
})

test('spell check defaults to local', async () => {
  const config = vscode.workspace.getConfiguration('adi-doctools.grammar')
  assert.equal(config.inspect('mode').defaultValue, 'local')
  assert.equal(config.get('mode'), 'local')
  assert.equal(ctx.api.grammarMode(), 'local')
})

test('cloud spell check needs consent', async () => {
  const config = vscode.workspace.getConfiguration('adi-doctools.grammar')
  await config.update('mode', 'api', vscode.ConfigurationTarget.Workspace)
  await sleep(500)
  assert.equal(ctx.api.grammarMode(), 'local')
  await config.update('mode', 'bogus', vscode.ConfigurationTarget.Workspace)
  await sleep(200)
  assert.equal(ctx.api.grammarMode(), 'local')
  await config.update('mode', undefined, vscode.ConfigurationTarget.Workspace)
  await sleep(200)
  assert.equal(ctx.api.grammarMode(), 'local')
})

test('semantic tokens are provided', async () => {
  const tokens = await vscode.commands.executeCommand(
    'vscode.provideDocumentSemanticTokens', ctx.editor.document.uri)
  assert.ok(tokens && tokens.data.length > 100, 'no semantic tokens')
})

test('format commands and toolbar edit the document', async () => {
  const document = await vscode.workspace.openTextDocument(file('guide/sub/page.rst'))
  const editor = await vscode.window.showTextDocument(document, vscode.ViewColumn.One)
  const select = text => {
    const offset = document.getText().indexOf(text)
    editor.selection = new vscode.Selection(document.positionAt(offset), document.positionAt(offset + text.length))
  }

  select('sentence')
  await vscode.commands.executeCommand('adi-doctools.format.bold')
  assert.ok(document.getText().includes('an **sentence** with'))
  assert.equal(document.getText(editor.selection), 'sentence')
  await vscode.commands.executeCommand('adi-doctools.format.bold')
  assert.ok(document.getText().includes('an sentence with'))

  select('Sub page')
  await vscode.commands.executeCommand('adi-doctools.format.heading', 2)
  assert.ok(document.getText().startsWith('Sub page\n--------\n'))
  await vscode.commands.executeCommand('adi-doctools.format.heading', 1)
  assert.ok(document.getText().startsWith('Sub page\n========\n'))

  select('See :ref:`guide`.')
  await vscode.commands.executeCommand('adi-doctools.format.admonition', 'tip')
  assert.ok(document.getText().includes('.. tip::\n\n   See :ref:`guide`.'))

  await vscode.commands.executeCommand('adi-doctools.show-toolbar')
  const frame = `document.querySelector('iframe')?.contentDocument`
  const toolbar = await waitFor('toolbar webview', async () => {
    for (const target of await Cdp.targets()) {
      if (!target.url.startsWith('vscode-webview://') || !target.webSocketDebuggerUrl)
        continue
      const cdp = await Cdp.connect(t => t.id === target.id)
      if (await cdp.evaluate(`!!${frame}?.querySelector('[data-command="italic"]')`))
        return cdp
      cdp.close()
    }
  }, 15000, 250)
  await waitFor('toolbar enabled', () =>
    toolbar.evaluate(`!${frame}.querySelector('[data-command="italic"]').disabled`), 5000)
  const status = await toolbar.evaluate(`${frame}.getElementById('status').textContent`)
  assert.match(status, /page\.rst .* reStructuredText/)
  await screenshot('00-toolbar')

  select('mistake')
  await toolbar.evaluate(`${frame}.querySelector('[data-command="italic"]').click()`)
  await waitFor('italic from the toolbar', () => document.getText().includes('speling *mistake*.'), 5000)
  await waitFor('focus back in the editor', () => vscode.window.activeTextEditor?.document === document, 5000)

  await toolbar.evaluate(`(() => {
    const select = ${frame}.querySelector('select[data-command="codeBlock"]')
    select.value = 'python'
    select.dispatchEvent(new Event('change'))
  })()`)
  await waitFor('code block from the toolbar', () =>
    document.getText().includes('.. code-block:: python\n\n   speling *mistake*.') ||
    document.getText().includes('.. code-block:: python\n\n   This is an sentence'), 5000)
  toolbar.close()

  await vscode.commands.executeCommand('workbench.action.files.revert')
  assert.ok(!document.isDirty)
  ctx.editor = await vscode.window.showTextDocument(ctx.editor.document, vscode.ViewColumn.One)
})

if (withLanguageTool) {
  test('local spell check reports and fixes mistakes', async () => {
    const document = await vscode.workspace.openTextDocument(file('guide/sub/page.rst'))
    const editor = await vscode.window.showTextDocument(document, vscode.ViewColumn.One)
    const grammar = () => vscode.languages.getDiagnostics(document.uri).filter(d => d.source === 'LanguageTool')
    const diagnostics = await waitFor('grammar diagnostics', () => grammar().length > 0 && grammar(), 300000, 500)
    const words = diagnostics.map(d => document.getText(d.range))
    console.log(`    matches: ${JSON.stringify(words)}`)
    assert.ok(words.includes('speling'), 'misspelling not reported')
    assert.ok(!words.some(w => w.includes('ehco') || w.includes('wrongg')), 'code block was checked')

    const speling = diagnostics.find(d => document.getText(d.range) === 'speling')
    const actions = await vscode.commands.executeCommand(
      'vscode.executeCodeActionProvider', document.uri, speling.range)
    const fix = actions.find(a => a.title === 'Replace with "spelling"')
    assert.ok(fix, `no quick fix: ${actions.map(a => a.title)}`)
    await vscode.workspace.applyEdit(fix.edit)
    await waitFor('diagnostic removed', () =>
      !grammar().some(d => document.getText(d.range) === 'speling') &&
      document.getText().includes('spelling mistake'), 60000, 250)

    await editor.edit(edit => edit.insert(new vscode.Position(3, 0), 'Anothr typo. '))
    await waitFor('diagnostic follows edits', () =>
      grammar().some(d => document.getText(d.range) === 'Anothr'), 60000, 250)
    await vscode.commands.executeCommand('workbench.action.files.revert')
    await vscode.commands.executeCommand('workbench.action.closeActiveEditor')
    ctx.editor = await vscode.window.showTextDocument(ctx.editor.document, vscode.ViewColumn.One)
  })
}

test('server starts, reports sphinx warnings and opens the preview', async () => {
  const started = vscode.commands.executeCommand('adi-doctools.start-server')
  await waitFor('building status', () => ctx.api.buildStatus() !== 'off', 10000)
  assert.equal(await started, true)
  assert.equal(ctx.api.buildStatus(), 'ready')
  ctx.server = ctx.api.serverInfo()
  ctx.origin = new URL(ctx.server.url).origin
  assert.equal(ctx.server.srcdir, fs.realpathSync(path.join(workspace, 'docs')))

  const uri = vscode.Uri.file(file('reference/index.rst'))
  const warnings = await waitFor('sphinx diagnostics', () => {
    const list = vscode.languages.getDiagnostics(uri).filter(d => d.source === 'Sphinx')
    return list.length > 0 && list
  }, 10000)
  assert.match(warnings[0].message, /undefined label/)
  assert.equal(warnings[0].range.start.line, 5)

  await waitFor('preview connected', () => ctx.api.preview().connected, 20000)
  assert.equal(ctx.api.preview().pagePath, '/guide/')
  assert.equal(ctx.api.preview().source, fs.realpathSync(file('guide/index.rst')))
  assert.equal(vscode.window.activeTextEditor, ctx.editor, 'preview stole the focus')
  ctx.page = await pageCdp(ctx.origin)
  const state = await ctx.page.evaluate(PAGE_STATE)
  assert.equal(state.sync, true)
  assert.equal(state.status, 'none')
  await screenshot('01-preview')
})

test('starting twice is harmless', async () => {
  assert.equal(await vscode.commands.executeCommand('adi-doctools.start-server'), true)
  assert.equal(ctx.api.buildStatus(), 'ready')
})

test('hover resolves roles', async () => {
  const document = ctx.editor.document
  const offset = document.getText().indexOf(':ref:`guide`')
  const hovers = await vscode.commands.executeCommand(
    'vscode.executeHoverProvider', document.uri, document.positionAt(offset + 8))
  const text = hovers.flatMap(h => h.contents).map(c => c.value ?? c).join('\n')
  assert.match(text, /guide\/index#guide/)
})

test('completion lists references', async () => {
  const document = ctx.editor.document
  const offset = document.getText().indexOf(':ref:`guide`')
  const list = await vscode.commands.executeCommand(
    'vscode.executeCompletionItemProvider', document.uri, document.positionAt(offset + 6))
  const labels = list.items.map(i => i.label.label ?? i.label)
  assert.ok(labels.includes('section-3'), `labels: ${labels.slice(0, 10)}`)
})

test('editor scroll moves the preview', async () => {
  for (const line of [120, 260, 40]) {
    await reveal(ctx.editor, line)
    const state = await waitFor(`preview near line ${line}`, async () => {
      const state = await ctx.page.evaluate(PAGE_STATE)
      return Math.abs(state.line - line) <= 12 && state
    }, 5000)
    console.log(`    editor ${line} -> preview line ${state.line}, scrollY ${state.scrollY}`)
  }
  await screenshot('02-editor-to-preview')

  await reveal(ctx.editor, 1)
  await waitFor('preview at top', async () => (await ctx.page.evaluate(PAGE_STATE)).scrollY === 0, 5000)

  const last = ctx.editor.document.lineCount
  ctx.editor.revealRange(new vscode.Range(last - 1, 0, last - 1, 0), vscode.TextEditorRevealType.AtTop)
  await waitFor('preview at bottom', async () => {
    const state = await ctx.page.evaluate(PAGE_STATE)
    return state.maxScroll - state.scrollY <= 2
  }, 5000)
  await reveal(ctx.editor, 1)
  await waitFor('preview back at top', async () => (await ctx.page.evaluate(PAGE_STATE)).scrollY === 0, 5000)
})

test('preview scroll moves the editor', async () => {
  await ctx.page.evaluate(`(() => {
    const tick = () => { window.e2e_frame = requestAnimationFrame(tick) }
    tick()
  })()`)
  await sleep(600)
  const wheel = deltaY => ctx.page.send('Input.dispatchMouseEvent', {
    type: 'mouseWheel', x: 150, y: 300, deltaX: 0, deltaY
  })
  for (let i = 0; i < 12; i++) {
    await wheel(250)
    await sleep(40)
  }
  const state = await waitFor('preview scrolled by wheel', async () => {
    const state = await ctx.page.evaluate(PAGE_STATE)
    return state.scrollY > 1000 && state
  }, 5000)
  await waitFor(`editor near line ${state.line}`, () => Math.abs(topLine(ctx.editor) - state.line) <= 12, 5000)
  console.log(`    preview line ${state.line} -> editor ${topLine(ctx.editor)}`)
  await sleep(700)
  const settled = await ctx.page.evaluate(PAGE_STATE)
  assert.equal(settled.scrollY, state.scrollY, 'preview was moved back by the editor')
  await screenshot('03-preview-to-editor')

  for (let i = 0; i < 40; i++) {
    await wheel(-400)
    await sleep(20)
  }
  await waitFor('editor back at top', () => topLine(ctx.editor) === 1, 5000)
  await ctx.page.evaluate('cancelAnimationFrame(window.e2e_frame)')
})

test('scroll sync can be disabled', async () => {
  const config = vscode.workspace.getConfiguration('adi-doctools.preview')
  await config.update('scrollSync', false, vscode.ConfigurationTarget.Workspace)
  await sleep(700)
  const before = await ctx.page.evaluate(PAGE_STATE)
  await reveal(ctx.editor, 200)
  await sleep(500)
  assert.equal((await ctx.page.evaluate(PAGE_STATE)).scrollY, before.scrollY)
  await config.update('scrollSync', undefined, vscode.ConfigurationTarget.Workspace)
  await reveal(ctx.editor, 201)
  await waitFor('preview synced again', async () =>
    Math.abs((await ctx.page.evaluate(PAGE_STATE)).line - 201) <= 12, 5000)
})

test('edits rebuild and keep the preview in place', async () => {
  await reveal(ctx.editor, 150)
  await waitFor('preview near line 150', async () =>
    Math.abs((await ctx.page.evaluate(PAGE_STATE)).line - 150) <= 12, 5000)
  const before = await ctx.page.evaluate(PAGE_STATE)
  const target = ctx.editor.document.lineAt(156).text.trim() ? 156 : 157
  await ctx.editor.edit(edit => edit.insert(new vscode.Position(target, 0), 'Edited marker sentence. '))
  await ctx.editor.document.save()
  await waitFor('hot reload', () =>
    ctx.page.evaluate(`document.querySelector('.body').innerText.includes('Edited marker sentence')`), 30000, 250)
  await sleep(1500)
  const after = await ctx.page.evaluate(PAGE_STATE)
  console.log(`    preview scrollY ${before.scrollY} -> ${after.scrollY}, editor top ${topLine(ctx.editor)}`)
  assert.ok(Math.abs(after.scrollY - before.scrollY) <= 40, 'preview jumped after the rebuild')
  assert.equal(topLine(ctx.editor), 150, 'editor jumped after the rebuild')
  assert.equal(ctx.api.buildStatus(), 'ready')
  await screenshot('04-after-edit')
})

test('preview follows the active editor', async () => {
  const document = await vscode.workspace.openTextDocument(file('guide/sub/page.rst'))
  await vscode.window.showTextDocument(document, vscode.ViewColumn.One)
  await waitFor('preview navigated', () => ctx.api.preview().pagePath === '/guide/sub/page/', 10000)
  assert.equal((await ctx.page.evaluate(PAGE_STATE)).path, '/guide/sub/page/')

  ctx.editor = await vscode.window.showTextDocument(ctx.editor.document, vscode.ViewColumn.One)
  await waitFor('preview navigated back', () => ctx.api.preview().pagePath === '/guide/', 10000)
  await reveal(ctx.editor, 100)
  await waitFor('preview synced after navigation', async () =>
    Math.abs((await ctx.page.evaluate(PAGE_STATE)).line - 100) <= 12, 5000)
})

test('sparse selection rebuilds only the selected folder', async () => {
  const uri = vscode.Uri.file(file('reference/index.rst'))
  const sphinx = () => vscode.languages.getDiagnostics(uri).filter(d => d.source === 'Sphinx')
  assert.ok(sphinx().length > 0)
  const page = ctx.api.preview().pagePath
  const onPage = async () =>
    ctx.api.preview().pagePath === page && (await ctx.page.evaluate(PAGE_STATE)).path === page
  await ctx.api.toggleSparse(path.join('docs', 'guide'))
  assert.deepEqual(ctx.api.sparsePaths(), [path.join('docs', 'guide')])
  await waitFor('sparse rebuild', () => sphinx().length === 0 && ctx.api.buildStatus() === 'ready', 60000, 250)
  await waitFor('preview reconnected', () => ctx.api.preview().connected, 10000)
  await sleep(2500)
  await waitFor('preview kept the page after the sparse rebuild', onPage, 5000)
  await screenshot('05-sparse')

  await ctx.api.toggleSparse(path.join('docs', 'guide'))
  assert.equal(ctx.api.sparsePaths(), null)
  await waitFor('full rebuild', () => sphinx().length > 0 && ctx.api.buildStatus() === 'ready', 60000, 250)
  await sleep(2500)
  await waitFor('preview kept the page after the full rebuild', onPage, 5000)
})

test('backend crash is recovered by starting the server again', async () => {
  const children = execFileSync('pgrep', ['-P', String(process.pid), '-f', 'adi_doctools.lsp'], { encoding: 'utf-8' })
    .trim().split('\n').filter(Boolean)
  assert.equal(children.length, 1, `python processes: ${children}`)
  let orphans = []
  try {
    orphans = execFileSync('pgrep', ['-P', children[0]], { encoding: 'utf-8' }).trim().split('\n').filter(Boolean)
  } catch { }
  process.kill(Number(children[0]), 'SIGKILL')
  for (const pid of orphans) {
    try {
      process.kill(Number(pid), 'SIGTERM')
    } catch { }
  }
  await waitFor('backend exit', () => !ctx.api.lspRunning(), 10000)
  assert.equal(ctx.api.buildStatus(), 'off')
  await waitFor('preview closed', () => !ctx.api.preview().open, 5000)

  assert.equal(await vscode.commands.executeCommand('adi-doctools.start-server'), true)
  assert.equal(ctx.api.buildStatus(), 'ready')
  await waitFor('preview connected', () => ctx.api.preview().connected, 20000)
  ctx.page.close()
  ctx.page = await pageCdp(new URL(ctx.api.serverInfo().url).origin)
})

test('server stops and closes the preview', async () => {
  await vscode.commands.executeCommand('adi-doctools.stop-server')
  assert.equal(ctx.api.buildStatus(), 'off')
  assert.equal(ctx.api.preview().open, false)
  assert.equal(ctx.api.serverInfo(), undefined)
  ctx.page.close()
  await screenshot('06-stopped')
})

exports.run = async () => {
  const only = process.env.ADOC_E2E_ONLY
  let failed = 0
  for (const { name, fn } of tests) {
    if (only && !name.includes(only))
      continue
    const start = Date.now()
    try {
      await fn()
      console.log(`  ok   ${name} (${Date.now() - start} ms)`)
    } catch (err) {
      failed++
      console.log(`  FAIL ${name} (${Date.now() - start} ms)\n${err.stack}`)
      console.log(`    log:\n${(ctx.api?.log() ?? []).slice(-25).map(l => `      ${l}`).join('\n')}`)
      await screenshot(`fail-${name.replace(/\W+/g, '-')}`)
      if (!process.env.ADOC_E2E_CONTINUE)
        break
    }
  }
  if (failed)
    throw new Error(`${failed} test(s) failed`)
}
