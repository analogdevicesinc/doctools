export type Notification = { method: string; params?: any }

interface Pending {
  resolve: (value: any) => void
  reject: (reason: Error) => void
  timer?: NodeJS.Timeout
}

export class RpcClient {
  private nextId = 1
  private pending = new Map<number, Pending>()
  private closed: Error | undefined

  constructor(
    private write: (line: string) => void,
    private onNotification: (notification: Notification) => void,
    private onText: (line: string) => void = () => {},
    private trace: (direction: 'send' | 'recv', line: string) => void = () => {}
  ) {}

  get pendingCount(): number {
    return this.pending.size
  }

  request<T = any>(msg: object, timeoutMs = 20000): Promise<T> {
    if (this.closed)
      return Promise.reject(this.closed)

    const id = this.nextId++
    return new Promise<T>((resolve, reject) => {
      const entry: Pending = { resolve, reject }
      if (timeoutMs > 0) {
        entry.timer = setTimeout(() => {
          this.pending.delete(id)
          reject(new Error(`Request timed out after ${timeoutMs} ms`))
        }, timeoutMs)
      }
      this.pending.set(id, entry)
      const line = JSON.stringify({ id, ...msg })
      this.trace('send', line)
      try {
        this.write(line + '\n')
      } catch (err) {
        this.settle(id, entry)
        reject(err instanceof Error ? err : new Error(String(err)))
      }
    })
  }

  handleLine(line: string) {
    if (!line.trim())
      return

    let parsed: any
    try {
      parsed = JSON.parse(line)
    } catch {
      this.onText(line)
      return
    }
    if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
      this.onText(line)
      return
    }

    if (typeof parsed.method === 'string') {
      this.onNotification(parsed)
      return
    }

    this.trace('recv', line)
    const entry = this.pending.get(parsed.id)
    if (!entry)
      return
    this.settle(parsed.id, entry)
    entry.resolve(parsed)
  }

  close(reason: Error) {
    this.closed = reason
    for (const [id, entry] of [...this.pending]) {
      this.settle(id, entry)
      entry.reject(reason)
    }
  }

  private settle(id: number, entry: Pending) {
    if (entry.timer)
      clearTimeout(entry.timer)
    this.pending.delete(id)
  }
}
