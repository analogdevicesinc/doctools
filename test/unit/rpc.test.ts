import { test } from 'node:test'
import * as assert from 'node:assert/strict'
import { RpcClient, Notification } from '../../src/rpc'

function setup() {
  const sent: any[] = []
  const notifications: Notification[] = []
  const text: string[] = []
  const client = new RpcClient(
    line => { sent.push(JSON.parse(line)) },
    n => notifications.push(n),
    line => text.push(line)
  )
  return { client, sent, notifications, text }
}

test('responses are matched by id regardless of order', async () => {
  const { client, sent } = setup()
  const a = client.request({ role: 'ref' })
  const b = client.request({ completion: 'roles' })
  assert.deepEqual(sent.map(s => s.id), [1, 2])
  client.handleLine(JSON.stringify({ id: 2, list: [] }))
  client.handleLine(JSON.stringify({ id: 1, target: 'x' }))
  assert.equal((await a).target, 'x')
  assert.deepEqual((await b).list, [])
  assert.equal(client.pendingCount, 0)
})

test('notifications and plain text do not resolve requests', async () => {
  const { client, notifications, text } = setup()
  const a = client.request({ n: 1 })
  client.handleLine(JSON.stringify({ jsonrpc: '2.0', method: 'build/started', params: { mode: 'incremental' } }))
  client.handleLine('plain text output')
  client.handleLine('42')
  client.handleLine('')
  assert.equal(client.pendingCount, 1)
  assert.equal(notifications[0].method, 'build/started')
  assert.deepEqual(text, ['plain text output', '42'])
  client.handleLine(JSON.stringify({ id: 1, ok: true }))
  assert.equal((await a).ok, true)
})

test('a late response to a timed out request is ignored', async () => {
  const { client } = setup()
  const a = client.request({ n: 1 }, 10)
  await assert.rejects(a, /timed out/)
  const b = client.request({ n: 2 })
  client.handleLine(JSON.stringify({ id: 1, value: 'late' }))
  assert.equal(client.pendingCount, 1)
  client.handleLine(JSON.stringify({ id: 2, value: 'second' }))
  assert.equal((await b).value, 'second')
})

test('close rejects pending and future requests', async () => {
  const { client } = setup()
  const a = client.request({ n: 1 })
  client.close(new Error('LSP process exited'))
  await assert.rejects(a, /exited/)
  await assert.rejects(client.request({ n: 2 }), /exited/)
})

test('a failing write rejects the request', async () => {
  const client = new RpcClient(() => { throw new Error('EPIPE') }, () => {})
  await assert.rejects(client.request({ n: 1 }), /EPIPE/)
  assert.equal(client.pendingCount, 0)
})

test('unknown responses are ignored', () => {
  const { client } = setup()
  const a = client.request({ n: 1 })
  client.handleLine(JSON.stringify({ id: 99, value: 1 }))
  client.handleLine(JSON.stringify({ value: 1 }))
  assert.equal(client.pendingCount, 1)
  client.close(new Error('closed'))
  a.catch(() => {})
})
