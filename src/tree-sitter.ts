import * as fs from 'fs'
import * as path from 'path'
import * as vscode from 'vscode'
import { Parser, Language, Tree, Node, Query, QueryMatch } from 'web-tree-sitter'
import { lspSend } from './python'

const TOKEN_TYPES = [
  'namespace', 'class', 'enum', 'interface', 'struct', 'typeParameter',
  'type', 'parameter', 'variable', 'property', 'enumMember', 'decorator',
  'event', 'function', 'method', 'macro', 'label', 'comment', 'string',
  'keyword', 'number', 'regexp', 'operator',
]
const TOKEN_MODIFIERS = [
  'declaration', 'definition', 'readonly', 'static', 'deprecated',
  'abstract', 'async', 'modification', 'documentation', 'defaultLibrary',
]

export const LEGEND = new vscode.SemanticTokensLegend(TOKEN_TYPES, TOKEN_MODIFIERS)

interface LangConfig {
  parser: Parser
  lang: Language
  highlights: Query
  injections: Query
  locals: Query
}

type Role = {
  error?: string
  role?: string
  title?: string
  target?: string
}

const KNOWN_ROLES = ['adi', 'wiki', 'external+', 'git-']

type Token = { range: vscode.Range; type: string; mods: string[] }

const LANG_MAP: Record<string, string> = {
  bash: 'bash', sh: 'bash',
  yaml: 'yaml', yml: 'yaml',
  rst: 'rst', restructuredtext: 'rst'
}

const depsPath = (f: string) => path.join(__dirname, '..', 'deps', f)
const readQuery = (file: string) => fs.readFileSync(depsPath(file), 'utf-8')
  .split('\n')
  .filter(l => !l.trim().startsWith('; inherits') && !l.trim().startsWith('; extends'))
  .join('\n')

const findChild = (node: Node, type: string): Node | null => {
  for (let i = 0; i < node.childCount; i++) {
    const child = node.child(i)
    if (child?.type === type) return child
  }
  return null
}

export class SemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
  private langs = new Map<string, LangConfig>()
  private initPromise?: Promise<void>

  async init(): Promise<LangConfig> {
    if (!this.initPromise) {
      this.initPromise = this.doInit()
    }
    await this.initPromise
    return this.langs.get('rst')!
  }

  private async doInit() {
    await Parser.init({
      locateFile: (name: string) => path.join(__dirname, name),
    })
    await this.loadLang('rst', 'tree-sitter-rst.wasm', 'rst-highlights.scm', ['rst-injections.scm', 'rst-injections-doctools.scm'], ['rst-locals.scm'])
    await this.loadLang('bash', 'tree-sitter-bash.wasm', 'bash-highlights.scm', [], [])
    await this.loadLang('yaml', 'tree-sitter-yaml.wasm', 'yaml-highlights.scm', [], [])
  }

  private async loadLang(name: string, wasm: string, highlights: string, injections: string[], locals: string[]) {
    const parser = new Parser()
    const lang = await Language.load(depsPath(wasm))
    parser.setLanguage(lang)

    this.langs.set(name, {
      parser, lang,
      highlights: new Query(lang, readQuery(highlights)),
      injections: new Query(lang, injections.map(readQuery).join('\n')),
      locals: new Query(lang, locals.map(readQuery).join('\n'))
    })
  }

  async provideDocumentSemanticTokens(doc: vscode.TextDocument): Promise<vscode.SemanticTokens> {
    const rst = await this.init()
    const tokens = await this.getTokens(rst, doc.getText(), 0, 0)
    const deduped = this.deduplicateTokens(tokens)

    const builder = new vscode.SemanticTokensBuilder(LEGEND)
    for (const t of deduped) {
      builder.push(t.range, t.type, t.mods.filter(m => TOKEN_MODIFIERS.includes(m)))
    }
    return builder.build()
  }

  private deduplicateTokens(tokens: Token[]): Token[] {
    const sorted = tokens
      .filter(t => TOKEN_TYPES.includes(t.type))
      .sort((a, b) => a.range.start.line - b.range.start.line || a.range.start.character - b.range.start.character)

    const deduped: Token[] = []
    for (const t of sorted) {
      const last = deduped[deduped.length - 1]
      if (!last || !last.range.intersection(t.range)) deduped.push(t)
    }
    return deduped
  }

  private async getTokens(cfg: LangConfig, text: string, rowOff: number, colOff: number): Promise<Token[]> {
    const tree = cfg.parser.parse(text)
    if (!tree) return []

    let tokens = this.extractTokens(cfg.highlights.matches(tree.rootNode), rowOff, colOff)

    for (const m of cfg.injections.matches(tree.rootNode)) {
      const cap = m.captures.find(c => c.name === 'injection.content')
      if (!cap) continue

      const props = (m as any).setProperties || (cap as any).setProperties || {}
      const injLang = LANG_MAP[props['injection.language'] as string]
      const target = injLang && this.langs.get(injLang)
      if (!target) continue

      const { node } = cap
      const nodeRow = node.startPosition.row + rowOff
      const nodeCol = node.startPosition.row === 0 ? node.startPosition.column + colOff : node.startPosition.column
      const injTokens = await this.getTokens(target, node.text, nodeRow, nodeCol)
      const range = new vscode.Range(nodeRow, nodeCol, node.endPosition.row + rowOff,
        node.endPosition.row === 0 ? node.endPosition.column + colOff : node.endPosition.column)
      tokens = tokens.filter(t => !range.contains(t.range)).concat(injTokens)
    }
    return tokens
  }

  private extractTokens(matches: QueryMatch[], rowOff: number, colOff: number): Token[] {
    const tokens: Token[] = []
    for (const m of matches) {
      for (const c of m.captures) {
        if (c.name.startsWith('_') || c.name.startsWith('injection.')) continue

        const [type, ...mods] = c.name.split('.')
        const { node } = c
        const sr = node.startPosition.row + rowOff
        const sc = node.startPosition.row === 0 ? node.startPosition.column + colOff : node.startPosition.column
        const er = node.endPosition.row + rowOff
        const ec = node.endPosition.row === 0 ? node.endPosition.column + colOff : node.endPosition.column

        if (sr === er) {
          tokens.push({ range: new vscode.Range(sr, sc, er, ec), type, mods })
        } else {
          tokens.push({ range: new vscode.Range(sr, sc, sr, 100000), type, mods })
          for (let l = sr + 1; l < er; l++) {
            tokens.push({ range: new vscode.Range(l, 0, l, 100000), type, mods })
          }
          tokens.push({ range: new vscode.Range(er, 0, er, ec), type, mods })
        }
      }
    }
    return tokens
  }

  getRoleAtCursor(tree: Tree, pos: vscode.Position) {
    const cfg = this.langs.get('rst')
    if (!cfg) return null
    return this.findRoleWithInjections(cfg, tree, pos, 0, 0)
  }

  private findRoleWithInjections(cfg: LangConfig, tree: Tree, pos: vscode.Position, rowOff: number, colOff: number): ReturnType<typeof this.findRoleInTree> {
    for (const m of cfg.injections.matches(tree.rootNode)) {
      const cap = m.captures.find(c => c.name === 'injection.content')
      if (!cap) continue

      const props = (m as any).setProperties || {}
      if (props['injection.language'] !== 'rst') continue

      const { node } = cap
      const absRow = node.startPosition.row + rowOff
      const absCol = node.startPosition.row === 0 ? node.startPosition.column + colOff : node.startPosition.column
      const absEndRow = node.endPosition.row + rowOff
      const absEndCol = node.endPosition.row === 0 ? node.endPosition.column + colOff : node.endPosition.column
      const range = new vscode.Range(absRow, absCol, absEndRow, absEndCol)

      if (range.contains(pos)) {
        const injTree = cfg.parser.parse(node.text)
        if (!injTree) continue

        return this.findRoleWithInjections(cfg, injTree, pos, absRow, absCol)
      }
    }

    const relPos = {
      row: pos.line - rowOff,
      column: pos.line === rowOff ? pos.character - colOff : pos.character
    }
    return this.findRoleInTree(tree, relPos)
  }

  private findRoleInTree(tree: Tree, pos: { row: number, column: number }) {
    let node: Node | null = tree.rootNode.descendantForPosition(pos)
    while (node && node.type !== 'interpreted_text') node = node.parent
    if (!node) return null

    if (node.parent?.type === 'interpreted_text') node = node.parent
    const role = findChild(node, 'role')
    const inner = findChild(node, 'interpreted_text')
    if (!role || !inner) return null

    const roleMatch = role.text.match(/^:(\S+):$/)
    const contentMatch = inner.text.match(/^`([^`]+)`$/)
    if (!roleMatch || !contentMatch) return null

    const content = contentMatch[1]
    const titleMatch = content.match(/^\s*(.+?)\s*<\s*(.+?)\s*>\s*$/)
    return {
      role: roleMatch[1],
      title: titleMatch?.[1],
      target: titleMatch?.[2] ?? content,
    }
  }

  async resolveRole(info: object): Promise<Role | undefined> {
    try {
      const role = await lspSend(info)
      if (role?.target || role?.error)
        return role
    } catch (err) {
      console.error('LSP communication error:', err)
    }
    return
  }
}

export class RoleCompletionProvider implements vscode.CompletionItemProvider {
  async provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position
  ): Promise<vscode.CompletionItem[]> {
    const line = document.lineAt(position).text
    const linePrefix = line.substring(0, position.character)
    const suffix = line.substring(position.character)

    // :role:`title <[cursor] - complete target
    const roleTitleMatch = linePrefix.match(/:(\S+):`[^`]*<([^>]*)$/)
    if (roleTitleMatch) {
      const [, role, partial] = roleTitleMatch
      const skip = suffix.startsWith('>`') ? 2 : suffix.startsWith('>') ? 1 : 0
      return this.getRoleCompletions(role, partial, position, skip, '>`')
    }

    // :role:`[cursor] - complete target (user may do a title)
    const roleContentMatch = linePrefix.match(/:(\S+):`([^`]*)$/)
    if (roleContentMatch) {
      const [, role, partial] = roleContentMatch
      const skip = suffix.startsWith('`') ? 1 : 0
      return this.getRoleCompletions(role, partial, position, skip, '`')
    }

    // :external+inv:[cursor] - complete intersphinx role
    const externalRoleMatch = linePrefix.match(/:external\+(\w+):(\w*)$/)
    if (externalRoleMatch) {
      const [, inv, partial] = externalRoleMatch
      const skip = suffix.startsWith(':`') ? 2 : suffix.startsWith(':') ? 1 : 0
      return this.getInvetoryTypes(inv, partial, position, skip)
    }

    // :external+[cursor] - complete intersphinx inventory
    const externalProjMatch = linePrefix.match(/:external\+(\w*)$/)
    if (externalProjMatch) {
      const [, partial] = externalProjMatch
      const skip = suffix.startsWith(':') ? 1 : 0
      return this.getInventories(partial, position, skip)
    }

    // :[cursor] - complete role name
    if (linePrefix.endsWith(':') &&
        (linePrefix.length === 1 || /\s/.test(linePrefix[linePrefix.length - 2]))) {
      return KNOWN_ROLES.map(role => {
        const item = new vscode.CompletionItem(role, vscode.CompletionItemKind.Keyword)
        if (role.endsWith('+') || role.endsWith('-'))
          item.insertText = role
        else
          item.insertText = `${role}:\``
        item.command = { command: 'editor.action.triggerSuggest', title: '' }
        return item
      })
    }

    // .. [cursor] - complete directive name
    const directiveMatch = linePrefix.match(/^\s*\.\.\s+(\w*)$/)
    if (directiveMatch) {
      const [, partial] = directiveMatch
      return this.getDirectives(partial, position)
    }

    return []
  }

  private getDirectives(partial: string, pos: vscode.Position): vscode.CompletionItem[] {
    const directives = ['note', 'warning']
    const range = new vscode.Range(pos.translate(0, -partial.length), pos)
    return directives.map(d => {
      const item = new vscode.CompletionItem(d, vscode.CompletionItemKind.Snippet)
      item.insertText = d + '::'
      item.range = range
      return item
    })
  }

  private async getInventories(partial: string, pos: vscode.Position, skip: number): Promise<vscode.CompletionItem[]> {
    const range = new vscode.Range(pos.translate(0, -partial.length), pos.translate(0, skip))
    try {
      const result = await lspSend({ completion: 'inventory' })
      if (result.error || !result.list) return []

      return result.list.map((inv: any) => {
        const item = new vscode.CompletionItem(inv.name, vscode.CompletionItemKind.Module)
        item.insertText = inv.name + ':'
        item.range = range
        item.detail = inv.project ? `${inv.project} ${inv.version || ''}`.trim() : undefined
        if (inv.uri || inv.types?.length) {
          const md = new vscode.MarkdownString()
          if (inv.uri) md.appendMarkdown(`**URI:** ${inv.uri}\n\n`)
          if (inv.types?.length) md.appendMarkdown(`**Types:** \`${inv.types.join('`, `')}\``)
          item.documentation = md
        }
        item.command = { command: 'editor.action.triggerSuggest', title: '' }
        return item
      })
    } catch {
      return []
    }
  }

  private async getInvetoryTypes(inv: string, partial: string, pos: vscode.Position, skip: number): Promise<vscode.CompletionItem[]> {
    const range = new vscode.Range(pos.translate(0, -partial.length), pos.translate(0, skip))
    try {
      const result = await lspSend({ completion: 'inventory_types', inventory: inv })
      if (result.error || !result.list) return []

      return result.list.map((r: any) => {
        const item = new vscode.CompletionItem(r.name, vscode.CompletionItemKind.Function)
        item.insertText = r.name + ':`'
        item.range = range
        item.detail = r.domain !== 'std' ? r.domain : undefined
        if (r.count || r.objtype) {
          const md = new vscode.MarkdownString()
          if (r.objtype) md.appendMarkdown(`**Type:** \`${r.objtype}\`\n\n`)
          if (r.count) md.appendMarkdown(`**Entries:** ${r.count}`)
          item.documentation = md
        }
        item.command = { command: 'editor.action.triggerSuggest', title: '' }
        return item
      })
    } catch {
      return []
    }
  }

  private async getRoleCompletions(role: string, partial: string, pos: vscode.Position, skip: number, suffix: string): Promise<vscode.CompletionItem[]> {
    const range = new vscode.Range(pos.translate(0, -partial.length), pos.translate(0, skip))

    // :external+inv:role:`target` - fetch from intersphinx
    const externalMatch = role.match(/^external\+(\w+):(\w+)$/)
    if (externalMatch) {
      const [, inv, roleType] = externalMatch
      try {
        const result = await lspSend({ completion: 'inventory_targets', inventory: inv, role: roleType })
        if (result.error || !result.list) return []

        return result.list.map((t: any) => {
          const item = new vscode.CompletionItem(t.name, vscode.CompletionItemKind.Reference)
          item.insertText = t.name + suffix
          item.range = range
          if (t.display) item.detail = t.display
          if (t.uri) {
            item.documentation = new vscode.MarkdownString(`[${t.uri}](${t.uri})`)
          }
          return item
        })
      } catch {
        return []
      }
    }

    // Other roles - mock for now
    const suggestions = this.fetchSuggestions(role)
    return suggestions.map(s => {
      const item = new vscode.CompletionItem(s, vscode.CompletionItemKind.Reference)
      item.insertText = s + suffix
      item.range = range
      return item
    })
  }

  private fetchSuggestions(_role: string): string[] {
    return ['apple', 'banana']
  }
}

export class RoleHoverProvider implements vscode.HoverProvider {
  constructor(private provider: SemanticTokensProvider) {}

  async provideHover(
    document: vscode.TextDocument,
    position: vscode.Position
  ): Promise<vscode.Hover | undefined> {
    const rst = await this.provider.init()
    const tree = rst.parser.parse(document.getText())
    if (!tree) return

    const info = this.provider.getRoleAtCursor(tree, position)
    if (!info) return

    const resolved = await this.provider.resolveRole(info)
    if (!resolved) return

    const md = new vscode.MarkdownString()
    if (!resolved?.error) {
      md.appendMarkdown(`**Role:** \`${info.role}\`\n\n`)
      if (resolved.title) {
        md.appendMarkdown(`**Title:** ${resolved.title}\n\n`)
      }
      if (resolved.target) {
        md.appendMarkdown(`**Target:** ${resolved.target}`)
      }
    } else {
      md.appendMarkdown(`**Error:** ${resolved.error}\n`)
    }

    return new vscode.Hover(md)
  }
}
