export interface EditorView {
  top: number
  visible: number
  lines: number
}

const tail = (view: EditorView) => {
  const maxTop = Math.max(view.lines - view.visible, 0)
  const start = Math.max(maxTop - view.visible, 0)
  return { maxTop, start }
}

export function editorToSourceLine(view: EditorView): number {
  const { maxTop, start } = tail(view)
  const top = Math.max(view.top, 0)
  if (top <= start || maxTop === start)
    return Math.min(top, start) + 1
  if (top >= maxTop)
    return Math.max(view.lines, 1)
  return start + (top - start) * (view.lines - start) / (maxTop - start) + 1
}

export function sourceLineToEditorTop(line: number, view: Omit<EditorView, 'top'>): number {
  const { maxTop, start } = tail({ ...view, top: 0 })
  const index = Math.max(line - 1, 0)
  if (index <= start || maxTop === start)
    return Math.round(Math.min(index, start))
  const top = start + (index - start) * (maxTop - start) / (view.lines - start)
  return Math.round(Math.min(top, maxTop))
}

const SOURCE_SUFFIXES = ['.rst', '.md']

export function pagePathToDocnames(pagePath: string): string[] {
  let name = decodeURIComponent(pagePath.split(/[?#]/)[0])
    .replace(/\/index\.html$/, '/')
    .replace(/\.html$/, '')
    .replace(/^\/+|\/+$/g, '')
  if (name === '')
    return ['index']
  return [name, `${name}/index`]
}

export function docnameToPagePath(docname: string): string {
  const name = docname.replace(/\\/g, '/').replace(/^\/+/, '')
  if (name === 'index')
    return '/'
  if (name.endsWith('/index'))
    return `/${name.slice(0, -'index'.length)}`
  return `/${name}/`
}

export function sourceToDocname(relativePath: string): string | undefined {
  const normalized = relativePath.replace(/\\/g, '/')
  if (normalized.startsWith('../') || normalized.startsWith('/'))
    return undefined
  const suffix = SOURCE_SUFFIXES.find(s => normalized.endsWith(s))
  return suffix ? normalized.slice(0, -suffix.length) : undefined
}

export function docnameToSources(docname: string): string[] {
  return SOURCE_SUFFIXES.map(s => docname + s)
}
