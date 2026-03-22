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

type Token = { range: vscode.Range; type: string; mods: string[] }

type AnnotatedSegment = {
  type: 'text' | 'markup'
  text: string
  reason?: string
  // Position tracking for whitespace reconstruction
  startRow?: number
  startCol?: number
  endRow?: number
  endCol?: number
}

const LANG_MAP: Record<string, string> = {
  bash: 'bash', sh: 'bash',
  yaml: 'yaml', yml: 'yaml',
  rst: 'rst', restructuredtext: 'rst'
}

// These constants are also in language-tool.ts for the checker
// Keep here for inspect commands
const RST_DIRECTIVES = new Set([
  'attention', 'caution', 'danger', 'error', 'hint', 'important', 'note', 'tip', 'warning', 'admonition',
  'line-block', 'parsed-literal', 'epigraph', 'highlights', 'pull-quote', 'compound', 'header', 'footer',
  'meta', 'replace', 'topic', 'sidebar', 'container', 'table', 'list-table', 'class', 'role',
  'restructuredtext-test-directive'
])

const CODE_DIRECTIVES = new Set([
  'code', 'code-block', 'sourcecode', 'raw', 'math', 'csv-table', 'shell', 'include-template'
])

const PATH_ARG_DIRECTIVES = new Set([
  'figure', 'image', 'include', 'literalinclude', 'toctree'
])

const FORMAT_ROLES = new Set(['red', 'green'])
const LITERAL_ROLES = new Set(['code'])

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

  async inspectTree(text: string): Promise<string> {
    const rst = await this.init()
    const tree = rst.parser.parse(text)
    if (!tree) return '(empty tree)'

    const lines: string[] = []
    this.walkTreeForLanguageTool(rst, tree.rootNode, 0, lines)
    return lines.join('\n')
  }

  private walkTreeForLanguageTool(cfg: LangConfig, node: Node, depth: number, lines: string[]): void {
    const indent = '  '.repeat(depth)
    const pos = `${node.startPosition.row}:${node.startPosition.column}`

    // Skip nodes that should not be grammar checked
    if (this.shouldSkipNode(node)) {
      lines.push(`${indent}[SKIP] ${node.type} @${pos}`)
      return
    }

    // Handle directives specially
    if (node.type === 'directive') {
      this.walkDirective(cfg, node, depth, lines)
      return
    }

    // Handle interpreted_text (roles)
    if (node.type === 'interpreted_text') {
      this.walkRole(node, depth, lines)
      return
    }

    // Handle references (inline links)
    if (node.type === 'reference') {
      this.walkReference(node, depth, lines)
      return
    }

    // Handle standalone hyperlinks (bare URLs)
    if (node.type === 'standalone_hyperlink') {
      lines.push(`${indent}[SKIP] standalone_hyperlink @${pos}`)
      return
    }

    // Leaf text nodes - actual text content
    if (this.isLeafTextNode(node)) {
      const preview = node.text.length > 60 ? node.text.slice(0, 60) + '...' : node.text
      const escaped = preview.replace(/\n/g, '\\n')
      lines.push(`${indent}[TEXT] ${node.type} @${pos}: "${escaped}"`)
      return
    }

    // Inline markup (emphasis, strong) - show and recurse
    if (this.isInlineMarkup(node)) {
      lines.push(`${indent}${node.type} @${pos}`)
      for (let i = 0; i < node.childCount; i++) {
        const child = node.child(i)
        if (child) this.walkTreeForLanguageTool(cfg, child, depth + 1, lines)
      }
      return
    }

    // Container nodes (paragraph, section, title, etc.) - recurse into children
    lines.push(`${indent}${node.type} @${pos}`)
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i)
      if (child) this.walkTreeForLanguageTool(cfg, child, depth + 1, lines)
    }
  }

  private shouldSkipNode(node: Node): boolean {
    const skipTypes = new Set([
      'literal_block', 'doctest_block', 'comment', 'line_block',
      'substitution_definition', 'footnote', 'citation',
      'target', 'directive_marker', 'field_list'
    ])
    return skipTypes.has(node.type)
  }

  private isLeafTextNode(node: Node): boolean {
    // Only actual text nodes are leaves - containers like paragraph have children
    return node.type === 'text'
  }

  private isInlineMarkup(node: Node): boolean {
    // Inline nodes that contain text and should recurse
    return node.type === 'emphasis' || node.type === 'strong'
  }

  private walkDirective(cfg: LangConfig, node: Node, depth: number, lines: string[]): void {
    const indent = '  '.repeat(depth)
    const pos = `${node.startPosition.row}:${node.startPosition.column}`

    const nameNode = findChild(node, 'type')
    const directiveName = nameNode?.text || 'unknown'

    // Check if directive injects code (skip entirely)
    if (CODE_DIRECTIVES.has(directiveName)) {
      lines.push(`${indent}[SKIP] directive::${directiveName} @${pos} (code injection)`)
      return
    }

    // Path argument directives - skip args, check content only
    if (PATH_ARG_DIRECTIVES.has(directiveName)) {
      const bodyNode = findChild(node, 'body')
      if (bodyNode) {
        const contentNode = findChild(bodyNode, 'content')
        if (contentNode) {
          lines.push(`${indent}directive::${directiveName} @${pos} (path arg, content only)`)
          const injTree = cfg.parser.parse(contentNode.text)
          if (injTree) {
            this.walkTreeForLanguageTool(cfg, injTree.rootNode, depth + 1, lines)
          }
        } else {
          lines.push(`${indent}[SKIP] directive::${directiveName} @${pos} (path arg, no content)`)
        }
      } else {
        lines.push(`${indent}[SKIP] directive::${directiveName} @${pos} (path arg, no body)`)
      }
      return
    }

    // Check if directive contains nested RST
    if (RST_DIRECTIVES.has(directiveName)) {
      lines.push(`${indent}directive::${directiveName} @${pos} (nested RST)`)

      const bodyNode = findChild(node, 'body')
      if (bodyNode) {
        // Find content node (may be directly body or nested content)
        const contentNode = findChild(bodyNode, 'content') || bodyNode
        if (contentNode) {
          // Parse content as RST and recurse
          const injTree = cfg.parser.parse(contentNode.text)
          if (injTree) {
            this.walkTreeForLanguageTool(cfg, injTree.rootNode, depth + 1, lines)
          }
        }
      }
      return
    }

    // Unknown directive - show but don't recurse into body
    lines.push(`${indent}[SKIP] directive::${directiveName} @${pos} (unknown)`)
  }

  private walkRole(node: Node, depth: number, lines: string[]): void {
    const indent = '  '.repeat(depth)
    const pos = `${node.startPosition.row}:${node.startPosition.column}`

    const roleNode = findChild(node, 'role')
    const innerNode = findChild(node, 'interpreted_text')

    if (!roleNode || !innerNode) {
      lines.push(`${indent}[SKIP] interpreted_text @${pos} (malformed)`)
      return
    }

    const roleMatch = roleNode.text.match(/^:(\S+):$/)
    const contentMatch = innerNode.text.match(/^`([^`]+)`$/)

    if (!roleMatch || !contentMatch) {
      lines.push(`${indent}[SKIP] interpreted_text @${pos} (parse error)`)
      return
    }

    const roleName = roleMatch[1]
    const content = contentMatch[1]

    // Check for title <target> pattern
    const titleMatch = content.match(/^\s*(.+?)\s*<\s*(.+?)\s*>\s*$/)

    if (titleMatch) {
      // Has custom title - only check the title, skip target
      const title = titleMatch[1]
      lines.push(`${indent}[TEXT] :${roleName}: @${pos}: "${title}" (title only, target skipped)`)
    } else {
      // No title - this is a reference target, skip entirely
      lines.push(`${indent}[SKIP] :${roleName}: @${pos}: "${content}" (reference target)`)
    }
  }

  private walkReference(node: Node, depth: number, lines: string[]): void {
    const indent = '  '.repeat(depth)
    const pos = `${node.startPosition.row}:${node.startPosition.column}`

    // Reference text is like `title <url>`__ or `title <url>`_
    // Extract title from the pattern
    const titleMatch = node.text.match(/^`\s*(.+?)\s*<[^>]+>`_*$/)

    if (titleMatch) {
      const title = titleMatch[1]
      lines.push(`${indent}[TEXT] reference @${pos}: "${title}" (title only, target skipped)`)
    } else {
      // Fallback - might be a simple reference without URL
      lines.push(`${indent}[SKIP] reference @${pos}`)
    }
  }

  // ========== Inspect Language (AnnotatedTextBuilder simulation) ==========

  async inspectLanguage(text: string): Promise<string> {
    const rst = await this.init()
    const tree = rst.parser.parse(text)
    if (!tree) return '(empty tree)'

    const segments: AnnotatedSegment[] = []
    this.buildAnnotatedText(rst, tree.rootNode, segments)

    return this.formatAnnotatedOutput(segments)
  }

  private buildAnnotatedText(cfg: LangConfig, node: Node, segments: AnnotatedSegment[], rowOff = 0, colOff = 0): void {
    const startRow = node.startPosition.row + rowOff
    const startCol = node.startPosition.row === 0 ? node.startPosition.column + colOff : node.startPosition.column
    const endRow = node.endPosition.row + rowOff
    const endCol = node.endPosition.row === 0 ? node.endPosition.column + colOff : node.endPosition.column

    // Skip nodes that should not be grammar checked
    if (this.shouldSkipNode(node)) {
      segments.push({ type: 'markup', text: node.text, reason: node.type, startRow, startCol, endRow, endCol })
      return
    }

    // Handle directives specially
    if (node.type === 'directive') {
      this.buildDirectiveAnnotation(cfg, node, segments, rowOff, colOff)
      return
    }

    // Handle interpreted_text (roles)
    if (node.type === 'interpreted_text') {
      this.buildRoleAnnotation(node, segments, rowOff, colOff)
      return
    }

    // Handle references (inline links)
    if (node.type === 'reference') {
      this.buildReferenceAnnotation(node, segments, rowOff, colOff)
      return
    }

    // Handle standalone hyperlinks (bare URLs)
    if (node.type === 'standalone_hyperlink') {
      segments.push({ type: 'markup', text: node.text, reason: 'url', startRow, startCol, endRow, endCol })
      return
    }

    // Leaf text nodes - actual text content
    if (this.isLeafTextNode(node)) {
      segments.push({ type: 'text', text: node.text, startRow, startCol, endRow, endCol })
      return
    }

    // Container nodes - recurse into children
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i)
      if (child) this.buildAnnotatedText(cfg, child, segments, rowOff, colOff)
    }
  }

  private buildDirectiveAnnotation(cfg: LangConfig, node: Node, segments: AnnotatedSegment[], rowOff: number, colOff: number): void {
    const nameNode = findChild(node, 'type')
    const directiveName = nameNode?.text || 'unknown'

    const startRow = node.startPosition.row + rowOff
    const startCol = node.startPosition.row === 0 ? node.startPosition.column + colOff : node.startPosition.column
    const endRow = node.endPosition.row + rowOff
    const endCol = node.endPosition.row === 0 ? node.endPosition.column + colOff : node.endPosition.column

    // Code directives - skip entirely
    if (CODE_DIRECTIVES.has(directiveName)) {
      segments.push({ type: 'markup', text: node.text, reason: `directive::${directiveName}`, startRow, startCol, endRow, endCol })
      return
    }

    // RST directives - add directive marker as markup, recurse into body
    if (RST_DIRECTIVES.has(directiveName)) {
      // Add ".. directive::" part as markup
      const bodyNode = findChild(node, 'body')
      if (bodyNode) {
        const markerEnd = bodyNode.startIndex - node.startIndex
        const marker = node.text.slice(0, markerEnd)
        const bodyStartRow = bodyNode.startPosition.row + rowOff
        const bodyStartCol = bodyNode.startPosition.row === 0 ? bodyNode.startPosition.column + colOff : bodyNode.startPosition.column
        segments.push({ type: 'markup', text: marker, reason: `directive::${directiveName}`, startRow, startCol, endRow: bodyStartRow, endCol: bodyStartCol })

        // Parse and process body content as RST
        const contentNode = findChild(bodyNode, 'content') || bodyNode
        const contentRowOff = contentNode.startPosition.row + rowOff
        const contentColOff = contentNode.startPosition.row === 0 ? contentNode.startPosition.column + colOff : contentNode.startPosition.column
        const injTree = cfg.parser.parse(contentNode.text)
        if (injTree) {
          this.buildAnnotatedText(cfg, injTree.rootNode, segments, contentRowOff, contentColOff)
        }
      }
      return
    }

    // Unknown directive - skip
    segments.push({ type: 'markup', text: node.text, reason: `directive::${directiveName}`, startRow, startCol, endRow, endCol })
  }

  private buildRoleAnnotation(node: Node, segments: AnnotatedSegment[], rowOff: number, colOff: number): void {
    const roleNode = findChild(node, 'role')
    const innerNode = findChild(node, 'interpreted_text')

    const startRow = node.startPosition.row + rowOff
    const startCol = node.startPosition.row === 0 ? node.startPosition.column + colOff : node.startPosition.column
    const endRow = node.endPosition.row + rowOff
    const endCol = node.endPosition.row === 0 ? node.endPosition.column + colOff : node.endPosition.column

    if (!roleNode || !innerNode) {
      segments.push({ type: 'markup', text: node.text, reason: 'malformed role', startRow, startCol, endRow, endCol })
      return
    }

    const roleMatch = roleNode.text.match(/^:(\S+):$/)
    const contentMatch = innerNode.text.match(/^`([^`]+)`$/)

    if (!roleMatch || !contentMatch) {
      segments.push({ type: 'markup', text: node.text, reason: 'parse error', startRow, startCol, endRow, endCol })
      return
    }

    const roleName = roleMatch[1]
    const content = contentMatch[1]

    // Calculate inner content position (after the opening backtick)
    const innerStartCol = innerNode.startPosition.row === 0
      ? innerNode.startPosition.column + colOff + 1  // +1 for backtick
      : innerNode.startPosition.column + 1
    const innerStartRow = innerNode.startPosition.row + rowOff

    // Check role type
    if (LITERAL_ROLES.has(roleName)) {
      // Literal roles - never checked (full markup)
      segments.push({ type: 'markup', text: node.text, reason: `literal role :${roleName}:`, startRow, startCol, endRow, endCol })
      return
    }

    if (FORMAT_ROLES.has(roleName)) {
      // Format roles - content is spellchecked
      // Add role markers as markup, content as text
      segments.push({ type: 'markup', text: `:${roleName}:\``, reason: `format role :${roleName}:`, startRow, startCol, endRow: innerStartRow, endCol: innerStartCol })
      segments.push({ type: 'text', text: content, startRow: innerStartRow, startCol: innerStartCol, endRow, endCol: endCol - 1 })
      segments.push({ type: 'markup', text: '`', reason: 'role end', startRow: endRow, startCol: endCol - 1, endRow, endCol })
      return
    }

    // Reference roles (default)
    const titleMatch = content.match(/^\s*(.+?)\s*<\s*(.+?)\s*>\s*$/)

    if (titleMatch) {
      // Has custom title - only check the title
      const title = titleMatch[1]
      const titleEnd = innerStartCol + content.indexOf('<') - 1
      segments.push({ type: 'markup', text: `:${roleName}:\``, reason: `ref role :${roleName}:`, startRow, startCol, endRow: innerStartRow, endCol: innerStartCol })
      segments.push({ type: 'text', text: title, startRow: innerStartRow, startCol: innerStartCol, endRow: innerStartRow, endCol: titleEnd })
      segments.push({ type: 'markup', text: ` <${titleMatch[2]}>\``, reason: 'ref target', startRow: innerStartRow, startCol: titleEnd, endRow, endCol })
    } else {
      // No title - skip entirely (reference target)
      segments.push({ type: 'markup', text: node.text, reason: `ref target :${roleName}:`, startRow, startCol, endRow, endCol })
    }
  }

  private buildReferenceAnnotation(node: Node, segments: AnnotatedSegment[], rowOff: number, colOff: number): void {
    const startRow = node.startPosition.row + rowOff
    const startCol = node.startPosition.row === 0 ? node.startPosition.column + colOff : node.startPosition.column
    const endRow = node.endPosition.row + rowOff
    const endCol = node.endPosition.row === 0 ? node.endPosition.column + colOff : node.endPosition.column

    const titleMatch = node.text.match(/^`\s*(.+?)\s*<([^>]+)>`(_+)$/)

    if (titleMatch) {
      const [, title, url, underscores] = titleMatch
      const titleStart = startCol + 1  // after backtick
      const titleEnd = titleStart + title.length
      segments.push({ type: 'markup', text: '`', reason: 'link start', startRow, startCol, endRow: startRow, endCol: titleStart })
      segments.push({ type: 'text', text: title, startRow, startCol: titleStart, endRow: startRow, endCol: titleEnd })
      segments.push({ type: 'markup', text: ` <${url}>\`${underscores}`, reason: 'link target', startRow, startCol: titleEnd, endRow, endCol })
    } else {
      // Fallback - skip entire reference
      segments.push({ type: 'markup', text: node.text, reason: 'reference', startRow, startCol, endRow, endCol })
    }
  }

  private formatAnnotatedOutput(segments: AnnotatedSegment[]): string {
    const lines: string[] = []

    lines.push('=== AnnotatedTextBuilder Output ===')
    lines.push('TEXT segments are sent to LanguageTool (addText)')
    lines.push('MARKUP segments are skipped (addMarkup)')
    lines.push('===================================\n')

    // Show segments with boundaries
    lines.push('--- Segments ---')
    for (const seg of segments) {
      const escaped = seg.text.replace(/\n/g, '\\n').replace(/\r/g, '\\r')
      const preview = escaped.length > 70 ? escaped.slice(0, 70) + '...' : escaped
      const pos = seg.startRow !== undefined ? ` @${seg.startRow}:${seg.startCol}` : ''
      if (seg.type === 'text') {
        lines.push(`[TEXT]   "${preview}"${pos}`)
      } else {
        lines.push(`[MARKUP] "${preview}" (${seg.reason})${pos}`)
      }
    }

    // Show reconstructed text (what LanguageTool sees) with whitespace preservation
    lines.push('\n--- LanguageTool Input (TEXT only, with spacing) ---')
    const ltText = this.reconstructTextWithSpacing(segments)
    lines.push(ltText || '(empty)')

    return lines.join('\n')
  }

  private reconstructTextWithSpacing(segments: AnnotatedSegment[]): string {
    const textSegments = segments.filter(s => s.type === 'text' && s.startRow !== undefined)
    if (textSegments.length === 0) return ''

    const result: string[] = []
    let lastRow = textSegments[0].startRow!
    let lastCol = textSegments[0].startCol!

    for (const seg of textSegments) {
      const row = seg.startRow!
      const col = seg.startCol!

      // Insert newlines for row changes
      if (row > lastRow) {
        result.push('\n'.repeat(row - lastRow))
        lastCol = 0
      }

      // Insert spaces for column gaps on same row
      if (col > lastCol) {
        result.push(' ')
      }

      result.push(seg.text)
      lastRow = seg.endRow ?? row
      lastCol = seg.endCol ?? (col + seg.text.length)
    }

    return result.join('')
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
    const externalRoleMatch = linePrefix.match(/:external\+([^\s:]+):(\w*)$/)
    if (externalRoleMatch) {
      const [, inv, partial] = externalRoleMatch
      const skip = suffix.startsWith(':`') ? 2 : suffix.startsWith(':') ? 1 : 0
      return this.getInvetoryTypes(inv, partial, position, skip)
    }

    // :external+[cursor] - complete intersphinx inventory
    const externalProjMatch = linePrefix.match(/:external\+(\S*)$/)
    if (externalProjMatch) {
      const [, partial] = externalProjMatch
      const skip = suffix.startsWith(':') ? 1 : 0
      return this.getInventories(partial, position, skip)
    }

    // :[cursor] - complete role name
    if (linePrefix.endsWith(':') &&
        (linePrefix.length === 1 || /\s/.test(linePrefix[linePrefix.length - 2]))) {
      return this.getRoles()
    }

    // .. [cursor] - complete directive name
    const directiveMatch = linePrefix.match(/^\s*\.\.\s+(\w*)$/)
    if (directiveMatch) {
      const [, partial] = directiveMatch
      return await this.getDirectives(partial, position)
    }

    return []
  }

  private async getRoles(): Promise<vscode.CompletionItem[]> {
    try {
      const result = await lspSend({ completion: 'roles' })
      if (result.error || !result.list) return []

      return result.list.map((r: any) => {
        const item = new vscode.CompletionItem(r.name, vscode.CompletionItemKind.Keyword)
        if (r.partial) {
          item.insertText = r.name
        } else {
          item.insertText = `${r.name}:\``
        }
        if (r.domain) item.detail = r.domain
        item.command = { command: 'editor.action.triggerSuggest', title: '' }
        return item
      })
    } catch {
      return []
    }
  }

  private async getDirectives(partial: string, pos: vscode.Position): Promise<vscode.CompletionItem[]> {
    const range = new vscode.Range(pos.translate(0, -partial.length), pos)
    try {
      const result = await lspSend({ completion: 'directives' })
      if (result.error || !result.list) return []

      return result.list.map((d: any) => {
        const item = new vscode.CompletionItem(d.name, vscode.CompletionItemKind.Snippet)
        item.insertText = d.name + '::'
        item.range = range
        if (d.domain) item.detail = d.domain
        return item
      })
    } catch {
      return []
    }
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
    const externalMatch = role.match(/^external\+([^\s:]+):(\S+)$/)
    if (externalMatch) {
      const [, inv, roleType] = externalMatch
      try {
        const result = await lspSend({ completion: 'inventory_targets', inventory: inv, role: roleType })
        if (result.error || !result.list) return []
        return this.buildTargetCompletions(result.list, range, suffix)
      } catch {
        return []
      }
    }

    try {
      const result = await lspSend({ completion: 'local_targets', role })
      if (result.error || !result.list) return []
      return this.buildTargetCompletions(result.list, range, suffix)
    } catch {
      return []
    }
  }

  private buildTargetCompletions(list: any[], range: vscode.Range, suffix: string): vscode.CompletionItem[] {
    return list.map((t: any) => {
      const item = new vscode.CompletionItem(t.name, vscode.CompletionItemKind.Reference)
      item.insertText = t.name + suffix
      item.range = range
      if (t.display) item.detail = t.display
      if (t.uri) {
        const uri = docnameToFileUri(t.uri)
        const md = new vscode.MarkdownString(`[${t.uri}](${uri})`)
        item.documentation = md
      }
      return item
    })
  }
}
const docnameToFileUri = (target: string): string => {
  if (target.startsWith('http://') || target.startsWith('https://'))
    return target

  const workspace = vscode.workspace.workspaceFolders?.[0]
  if (!workspace) return target

  const [docname, _] = target.split('#')
  const docsDir = path.join(workspace.uri.fsPath, 'docs')

  for (const ext of ['.rst', '.md']) {
    const filePath = path.join(docsDir, docname + ext)
    if (fs.existsSync(filePath)) {
      return `file://${filePath}`
    }
  }
  return target
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
        const fileUri = docnameToFileUri(resolved.target)
        md.appendMarkdown(`**Target:** [${resolved.target}](${fileUri})`)
      }
    } else {
      md.appendMarkdown(`**Error:** ${resolved.error}\n`)
    }

    return new vscode.Hover(md)
  }
}
