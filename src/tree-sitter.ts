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
  injections?: Query
  locals?: Query
}

type Role = {
  error?: string
  role?: string
  title?: string
  target?: string
}

const KNOWN_ROLES = ['adi', 'wiki']

const depsPath = (f: string) => path.join(__dirname, '..', 'deps', f)

function findChild(node: Node, type: string): Node | null {
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
    await this.loadLang('bash', 'tree-sitter-bash.wasm', 'bash-highlights.scm')
    await this.loadLang('yaml', 'tree-sitter-yaml.wasm', 'yaml-highlights.scm')
  }

  private async loadLang(name: string, wasm: string, highlights: string, injections?:string[], locals?:string[]) {
    const parser = new Parser()
    const lang = await Language.load(depsPath(wasm))
    parser.setLanguage(lang)

    const readQuery = (file: string) => fs.readFileSync(depsPath(file), 'utf-8')
      .split('\n').filter(l => !l.trim().startsWith('; inherits') && !l.trim().startsWith('; extends')).join('\n')

    const hQuery = new Query(lang, readQuery(highlights))
    const iQuery = injections ? new Query(lang, injections.map(readQuery).join('\n')) : undefined
    const lQuery = locals ? new Query(lang, locals.map(readQuery).join('\n')) : undefined

    this.langs.set(name, { parser, lang, highlights: hQuery, injections: iQuery, locals: lQuery })
  }

  async provideDocumentSemanticTokens(doc: vscode.TextDocument): Promise<vscode.SemanticTokens> {
    const rst = await this.init()
    const tokens = await this.getTokens(rst, doc.getText(), 0, 0)
    const builder = new vscode.SemanticTokensBuilder(LEGEND)
    for (const t of tokens) {
      if (TOKEN_TYPES.includes(t.type)) {
        builder.push(t.range, t.type, t.mods.filter(m => TOKEN_MODIFIERS.includes(m)))
      }
    }
    return builder.build()
  }

  private async getTokens(cfg: LangConfig, text: string, rowOff: number, colOff: number) {
    const tree = cfg.parser.parse(text)
    if (!tree) return []

    let tokens = this.extractTokens(cfg.highlights.matches(tree.rootNode), rowOff, colOff)

    if (cfg.injections) {
      for (const m of cfg.injections.matches(tree.rootNode)) {
        const cap = m.captures.find(c => c.name === 'injection.content')
        if (!cap) continue

        const props = (m as any).setProperties || (cap as any).setProperties || {}
        const langMap: Record<string, string> = { bash: 'bash', sh: 'bash', yaml: 'yaml', yml: 'yaml' }
        const injLang = langMap[props['injection.language'] as string]
        const target = injLang && this.langs.get(injLang)
        if (!target) continue

        const node = cap.node
        const injTokens = await this.getTokens(target, node.text, node.startPosition.row, node.startPosition.column)
        const range = new vscode.Range(
          node.startPosition.row, node.startPosition.column,
          node.endPosition.row, node.endPosition.column
        )
        tokens = tokens.filter(t => !range.contains(t.range)).concat(injTokens)
      }
    }
    return tokens
  }

  private extractTokens(matches: QueryMatch[], rowOff: number, colOff: number) {
    const tokens: { range: vscode.Range; type: string; mods: string[] }[] = []
    for (const m of matches) {
      for (const c of m.captures) {
        if (c.name.startsWith('_') || c.name.startsWith('injection.')) continue

        const [type, ...mods] = c.name.split('.')
        const sr = c.node.startPosition.row + rowOff
        const sc = c.node.startPosition.row === 0 ? c.node.startPosition.column + colOff : c.node.startPosition.column
        const er = c.node.endPosition.row + rowOff
        const ec = c.node.endPosition.row === 0 ? c.node.endPosition.column + colOff : c.node.endPosition.column

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
    let node: Node | null = tree.rootNode.descendantForPosition({
      row: pos.line,
      column: pos.character,
    })

    while (node && node.type !== 'interpreted_text') node = node.parent
    if (!node) return null

    let role = findChild(node, 'role')
    if (!role && node.parent?.type === 'interpreted_text') {
      node = node.parent
      role = findChild(node, 'role')
    }
    if (!role) return null

    const roleMatch = role.text.match(/^:([^:]+):$/)
    if (!roleMatch) return null

    const inner = findChild(node, 'interpreted_text')
    const contentMatch = inner?.text.match(/^`([^`]+)`$/)
    if (!contentMatch) return null

    const content = contentMatch[1]
    const titleMatch = content.match(/^\s*(.+?)\s*<\s*(.+?)\s*>\s*$/)
    return {
      role: roleMatch[1],
      title: titleMatch?.[1],
      target: titleMatch ? titleMatch[2] : content,
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
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position
  ): vscode.CompletionItem[] {
    const linePrefix = document.lineAt(position).text.substring(0, position.character)

    // Only trigger if we just typed ':'
    if (!linePrefix.endsWith(':')) {
      return []
    }

    return KNOWN_ROLES.map(role => {
      const item = new vscode.CompletionItem(role, vscode.CompletionItemKind.Keyword)
      item.insertText = `${role}:\``
      item.detail = `Role: ${role}`
      return item
    })
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
