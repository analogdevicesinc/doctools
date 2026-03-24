import * as vscode from 'vscode'
import * as fs from 'fs'
import * as path from 'path'
import { Parser, Language, Node, Query } from 'web-tree-sitter'
import { lspSend } from './python'

// Directives whose body contains RST (recursive injection)
const RST_DIRECTIVES = new Set([
  'attention', 'caution', 'danger', 'error', 'hint', 'important', 'note', 'tip', 'warning', 'admonition',
  'line-block', 'parsed-literal', 'epigraph', 'highlights', 'pull-quote', 'compound', 'header', 'footer',
  'meta', 'replace', 'topic', 'sidebar', 'container', 'table', 'list-table', 'class', 'role',
  'restructuredtext-test-directive'
])

// Directives that inject other languages (skip for grammar checking)
const CODE_DIRECTIVES = new Set([
  'code', 'code-block', 'sourcecode', 'raw', 'math', 'csv-table', 'shell', 'include-template'
])

// Directives with file path arguments - skip arguments, but check content (caption) if present
const PATH_ARG_DIRECTIVES = new Set([
  'figure', 'image', 'include', 'literalinclude', 'toctree'
])

// Role types for LanguageTool processing
// Format roles: spellchecked (addText)
const FORMAT_ROLES = new Set(['red', 'green'])
// Literal roles: never checked (addMarkup)
const LITERAL_ROLES = new Set(['code'])

// Skip these node types entirely
const SKIP_NODE_TYPES = new Set([
  'literal_block', 'doctest_block', 'comment', 'line_block',
  'substitution_definition', 'footnote', 'citation',
  'target', 'directive_marker', 'field_list'
])

export interface TextSegment {
  type: 'text' | 'markup'
  content: string
  // Source position (in original document)
  srcStart: number
  srcEnd: number
  // Output position (in LanguageTool input)
  outStart?: number
  outEnd?: number
  // For markup: how to render in output
  // 'silent' = skip entirely (partial markup around text)
  // 'backticks' = output `content`
  // 'literal' = output the content as-is (e.g., URLs)
  renderMode?: 'silent' | 'backticks' | 'literal'
}

export interface LTMatch {
  message: string
  offset: number
  length: number
  replacements: string[]
  ruleId: string
  // Mapped back to source
  srcOffset?: number
  srcLength?: number
  matchedText?: string
}

export interface LTResult {
  error?: string
  message?: string
  matches?: LTMatch[]
}

export interface LTStatusResult {
  installed: boolean
  initialized: boolean
  language: string | null
}

interface LangConfig {
  parser: Parser
  lang: Language
}

const findChild = (node: Node, type: string): Node | null => {
  for (let i = 0; i < node.childCount; i++) {
    const child = node.child(i)
    if (child?.type === type) return child
  }
  return null
}

export class AnnotatedTextBuilder {
  private segments: TextSegment[] = []
  private langConfig: LangConfig | null = null

  setLangConfig(config: LangConfig) {
    this.langConfig = config
  }

  clear() {
    this.segments = []
  }

  addText(content: string, srcStart: number, srcEnd: number) {
    this.segments.push({ type: 'text', content, srcStart, srcEnd })
  }

  addMarkup(content: string, srcStart: number, srcEnd: number, renderMode: 'silent' | 'backticks' | 'literal' = 'silent') {
    this.segments.push({ type: 'markup', content, srcStart, srcEnd, renderMode })
  }

  getSegments(): TextSegment[] {
    return this.segments
  }

  // Build the text that will be sent to LanguageTool
  buildText(sourceText: string): string {
    let outPos = 0
    const parts: string[] = []
    let lastSrcEnd = 0

    for (const seg of this.segments) {
      // Insert whitespace/newlines that exist between segments in source
      if (seg.srcStart > lastSrcEnd) {
        const gap = sourceText.slice(lastSrcEnd, seg.srcStart)
        // Preserve newlines, collapse other whitespace to single space
        const hasNewline = gap.includes('\n')
        if (hasNewline) {
          const newlineCount = (gap.match(/\n/g) || []).length
          const whitespace = '\n'.repeat(newlineCount)
          parts.push(whitespace)
          outPos += whitespace.length
        } else if (/\s/.test(gap)) {
          // Any whitespace in gap - add single space
          parts.push(' ')
          outPos += 1
        }
      }

      if (seg.type === 'text') {
        seg.outStart = outPos
        parts.push(seg.content)
        outPos += seg.content.length
        seg.outEnd = outPos
      } else if (seg.renderMode === 'backticks') {
        // Backticks mode - wrap content in backticks
        seg.outStart = outPos
        const output = '`' + seg.content + '`'
        parts.push(output)
        outPos += output.length
        seg.outEnd = outPos
      } else if (seg.renderMode === 'literal') {
        // Literal mode - output content as-is
        seg.outStart = outPos
        parts.push(seg.content)
        outPos += seg.content.length
        seg.outEnd = outPos
      }
      // Silent mode (default) - skip entirely, no output

      lastSrcEnd = seg.srcEnd
    }

    return parts.join('')
  }

  // Map a position in LanguageTool output back to source position
  mapToSource(outOffset: number, outLength: number): { srcOffset: number; srcLength: number } | null {
    // Find the segment(s) that contain this range
    let srcStart: number | null = null
    let srcEnd: number | null = null

    for (const seg of this.segments) {
      if (seg.type !== 'text' || seg.outStart === undefined || seg.outEnd === undefined) continue

      // Check if this segment overlaps with the range
      if (seg.outStart <= outOffset && outOffset < seg.outEnd) {
        // Start is in this segment
        const offsetInSeg = outOffset - seg.outStart
        srcStart = seg.srcStart + offsetInSeg
      }

      const outEnd = outOffset + outLength
      if (seg.outStart < outEnd && outEnd <= seg.outEnd) {
        // End is in this segment
        const offsetInSeg = outEnd - seg.outStart
        srcEnd = seg.srcStart + offsetInSeg
      }

      // If range spans entire segment
      if (outOffset <= seg.outStart && seg.outEnd <= outEnd) {
        if (srcStart === null) srcStart = seg.srcStart
        srcEnd = seg.srcEnd
      }
    }

    if (srcStart !== null && srcEnd !== null) {
      return { srcOffset: srcStart, srcLength: srcEnd - srcStart }
    }

    return null
  }

  // Build annotated text from RST tree
  buildFromTree(tree: Node, sourceText: string) {
    this.clear()
    if (!this.langConfig) {
      throw new Error('Language config not set')
    }
    this.walkNode(this.langConfig, tree, sourceText)
  }

  private walkNode(cfg: LangConfig, node: Node, sourceText: string) {
    const srcStart = node.startIndex
    const srcEnd = node.endIndex

    // Skip nodes that should not be grammar checked
    if (SKIP_NODE_TYPES.has(node.type)) {
      this.addMarkup(node.text, srcStart, srcEnd, 'silent')
      return
    }

    // Handle directives
    if (node.type === 'directive') {
      this.walkDirective(cfg, node, sourceText)
      return
    }

    // Handle interpreted_text (roles)
    if (node.type === 'interpreted_text') {
      this.walkRole(node)
      return
    }

    // Handle references (inline links)
    if (node.type === 'reference') {
      this.walkReference(node)
      return
    }

    // Handle standalone hyperlinks - output the URL as-is
    if (node.type === 'standalone_hyperlink') {
      this.addMarkup(node.text, srcStart, srcEnd, 'literal')
      return
    }

    // Handle inline literals (``text``) - output content in single backticks
    if (node.type === 'literal') {
      const content = node.text.replace(/^``|``$/g, '')
      this.addMarkup(content, srcStart, srcEnd, 'backticks')
      return
    }

    // Handle emphasis (*text*) and strong (**text**) - output text content directly
    if (node.type === 'emphasis') {
      const content = node.text.replace(/^\*|\*$/g, '')
      this.addMarkup(content, srcStart, srcEnd, 'literal')
      return
    }

    if (node.type === 'strong') {
      const content = node.text.replace(/^\*\*|\*\*$/g, '')
      this.addMarkup(content, srcStart, srcEnd, 'literal')
      return
    }

    // Leaf text nodes
    if (node.type === 'text') {
      this.addText(node.text, srcStart, srcEnd)
      return
    }

    // Container nodes - recurse
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i)
      if (child) this.walkNode(cfg, child, sourceText)
    }
  }

  private walkDirective(cfg: LangConfig, node: Node, sourceText: string) {
    const nameNode = findChild(node, 'type')
    const directiveName = nameNode?.text || 'unknown'
    const srcStart = node.startIndex
    const srcEnd = node.endIndex

    // Code directives - skip entirely
    if (CODE_DIRECTIVES.has(directiveName)) {
      this.addMarkup(node.text, srcStart, srcEnd, 'silent')
      return
    }

    // Path argument directives (figure, image, etc.) - skip args/options, check content only
    if (PATH_ARG_DIRECTIVES.has(directiveName)) {
      const bodyNode = findChild(node, 'body')
      if (bodyNode) {
        const contentNode = findChild(bodyNode, 'content')
        if (contentNode) {
          // Skip everything before content
          this.addMarkup(sourceText.slice(srcStart, contentNode.startIndex), srcStart, contentNode.startIndex)
          // Parse content as RST
          const injTree = cfg.parser.parse(contentNode.text)
          if (injTree) {
            this.walkInjectedTree(cfg, injTree.rootNode, contentNode.startIndex, sourceText)
          }
        } else {
          // No content node, skip the whole directive
          this.addMarkup(node.text, srcStart, srcEnd, 'silent')
        }
      } else {
        this.addMarkup(node.text, srcStart, srcEnd, 'silent')
      }
      return
    }

    // RST directives - add directive marker as markup, recurse into body
    if (RST_DIRECTIVES.has(directiveName)) {
      const bodyNode = findChild(node, 'body')
      if (bodyNode) {
        // Add directive marker as markup
        this.addMarkup(sourceText.slice(srcStart, bodyNode.startIndex), srcStart, bodyNode.startIndex)

        // Parse and process body content as RST
        const contentNode = findChild(bodyNode, 'content') || bodyNode
        const injTree = cfg.parser.parse(contentNode.text)
        if (injTree) {
          // Walk the injected tree, but adjust source positions
          this.walkInjectedTree(cfg, injTree.rootNode, contentNode.startIndex, sourceText)
        }
      }
      return
    }

    // Unknown directive - skip (standalone)
    this.addMarkup(node.text, srcStart, srcEnd, 'silent')
  }

  private walkInjectedTree(cfg: LangConfig, node: Node, baseOffset: number, sourceText: string) {
    const srcStart = baseOffset + node.startIndex
    const srcEnd = baseOffset + node.endIndex

    if (SKIP_NODE_TYPES.has(node.type)) {
      this.addMarkup(node.text, srcStart, srcEnd, 'silent')
      return
    }

    if (node.type === 'directive') {
      // For nested directives, recalculate positions
      const nameNode = findChild(node, 'type')
      const directiveName = nameNode?.text || 'unknown'

      if (CODE_DIRECTIVES.has(directiveName)) {
        this.addMarkup(node.text, srcStart, srcEnd, 'silent')
        return
      }

      if (PATH_ARG_DIRECTIVES.has(directiveName)) {
        const bodyNode = findChild(node, 'body')
        if (bodyNode) {
          const contentNode = findChild(bodyNode, 'content')
          if (contentNode) {
            this.addMarkup(node.text.slice(0, contentNode.startIndex - node.startIndex), srcStart, baseOffset + contentNode.startIndex)
            const injTree = cfg.parser.parse(contentNode.text)
            if (injTree) {
              this.walkInjectedTree(cfg, injTree.rootNode, baseOffset + contentNode.startIndex, sourceText)
            }
          } else {
            this.addMarkup(node.text, srcStart, srcEnd, 'silent')
          }
        } else {
          this.addMarkup(node.text, srcStart, srcEnd, 'silent')
        }
        return
      }

      if (RST_DIRECTIVES.has(directiveName)) {
        const bodyNode = findChild(node, 'body')
        if (bodyNode) {
          // Directive marker is partial (not standalone)
          this.addMarkup(node.text.slice(0, bodyNode.startIndex - node.startIndex), srcStart, baseOffset + bodyNode.startIndex)
          const contentNode = findChild(bodyNode, 'content') || bodyNode
          const injTree = cfg.parser.parse(contentNode.text)
          if (injTree) {
            this.walkInjectedTree(cfg, injTree.rootNode, baseOffset + contentNode.startIndex, sourceText)
          }
        }
        return
      }

      this.addMarkup(node.text, srcStart, srcEnd, 'silent')
      return
    }

    if (node.type === 'interpreted_text') {
      this.walkRoleWithOffset(node, baseOffset)
      return
    }

    if (node.type === 'reference') {
      this.walkReferenceWithOffset(node, baseOffset)
      return
    }

    if (node.type === 'standalone_hyperlink') {
      this.addMarkup(node.text, srcStart, srcEnd, 'literal')
      return
    }

    if (node.type === 'literal') {
      const content = node.text.replace(/^``|``$/g, '')
      this.addMarkup(content, srcStart, srcEnd, 'backticks')
      return
    }

    if (node.type === 'emphasis') {
      const content = node.text.replace(/^\*|\*$/g, '')
      this.addMarkup(content, srcStart, srcEnd, 'literal')
      return
    }

    if (node.type === 'strong') {
      const content = node.text.replace(/^\*\*|\*\*$/g, '')
      this.addMarkup(content, srcStart, srcEnd, 'literal')
      return
    }

    if (node.type === 'text') {
      this.addText(node.text, srcStart, srcEnd)
      return
    }

    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i)
      if (child) this.walkInjectedTree(cfg, child, baseOffset, sourceText)
    }
  }

  private walkRole(node: Node) {
    this.walkRoleWithOffset(node, 0)
  }

  private walkRoleWithOffset(node: Node, baseOffset: number) {
    const roleNode = findChild(node, 'role')
    const innerNode = findChild(node, 'interpreted_text')
    const srcStart = baseOffset + node.startIndex
    const srcEnd = baseOffset + node.endIndex

    if (!roleNode || !innerNode) {
      this.addMarkup(node.text, srcStart, srcEnd, 'silent')
      return
    }

    const roleMatch = roleNode.text.match(/^:(\S+):$/)
    const contentMatch = innerNode.text.match(/^`([^`]+)`$/)

    if (!roleMatch || !contentMatch) {
      this.addMarkup(node.text, srcStart, srcEnd, 'silent')
      return
    }

    const roleName = roleMatch[1]
    const content = contentMatch[1]
    const innerStart = baseOffset + innerNode.startIndex

    // Literal roles - output content in backticks
    if (LITERAL_ROLES.has(roleName)) {
      this.addMarkup(content, srcStart, srcEnd, 'backticks')
      return
    }

    // Format roles - content is spellchecked (partial markup)
    if (FORMAT_ROLES.has(roleName)) {
      this.addMarkup(roleNode.text + '`', srcStart, innerStart + 1)
      this.addText(content, innerStart + 1, innerStart + 1 + content.length)
      this.addMarkup('`', srcEnd - 1, srcEnd)
      return
    }

    // Reference roles
    const titleMatch = content.match(/^\s*(.+?)\s*<\s*(.+?)\s*>\s*$/)

    if (titleMatch) {
      // Has title - partial markup
      const title = titleMatch[1]
      const titleStartInContent = content.indexOf(title)
      const titleStart = innerStart + 1 + titleStartInContent
      const titleEnd = titleStart + title.length

      this.addMarkup(node.text.slice(0, innerNode.startIndex - node.startIndex + 1 + titleStartInContent), srcStart, titleStart)
      this.addText(title, titleStart, titleEnd)
      this.addMarkup(node.text.slice(innerNode.startIndex - node.startIndex + 1 + titleStartInContent + title.length), titleEnd, srcEnd)
    } else {
      // No title - output target in backticks
      this.addMarkup(content, srcStart, srcEnd, 'backticks')
    }
  }

  private walkReference(node: Node) {
    this.walkReferenceWithOffset(node, 0)
  }

  private walkReferenceWithOffset(node: Node, baseOffset: number) {
    const srcStart = baseOffset + node.startIndex
    const srcEnd = baseOffset + node.endIndex

    const titleMatch = node.text.match(/^`\s*(.+?)\s*<([^>]+)>`(_+)$/)

    if (titleMatch) {
      // Has title - partial markup
      const [, title, , ] = titleMatch
      const titleStartInNode = node.text.indexOf(title)
      const titleStart = srcStart + titleStartInNode
      const titleEnd = titleStart + title.length

      this.addMarkup(node.text.slice(0, titleStartInNode), srcStart, titleStart)
      this.addText(title, titleStart, titleEnd)
      this.addMarkup(node.text.slice(titleStartInNode + title.length), titleEnd, srcEnd)
    } else {
      // No title - standalone markup
      this.addMarkup(node.text, srcStart, srcEnd, 'silent')
    }
  }
}

// CodeActionProvider for grammar fix suggestions
export class GrammarCodeActionProvider implements vscode.CodeActionProvider {
  static readonly providedCodeActionKinds = [vscode.CodeActionKind.QuickFix]

  provideCodeActions(
    document: vscode.TextDocument,
    range: vscode.Range,
    context: vscode.CodeActionContext
  ): vscode.CodeAction[] {
    const actions: vscode.CodeAction[] = []

    for (const diagnostic of context.diagnostics) {
      if (diagnostic.source !== 'LanguageTool') continue

      const replacements = (diagnostic as any).replacements as string[] | undefined
      const ruleId = diagnostic.code as string | undefined

      // Add replacement suggestions
      if (replacements && replacements.length > 0) {
        for (const replacement of replacements) {
          const action = new vscode.CodeAction(
            `Replace with "${replacement}"`,
            vscode.CodeActionKind.QuickFix
          )
          action.edit = new vscode.WorkspaceEdit()
          action.edit.replace(document.uri, diagnostic.range, replacement)
          action.diagnostics = [diagnostic]
          action.isPreferred = replacements.indexOf(replacement) === 0
          actions.push(action)
        }
      }

      // Add "Disable rule" action
      if (ruleId) {
        const disableRule = new vscode.CodeAction(
          `Disable rule "${ruleId}"`,
          vscode.CodeActionKind.QuickFix
        )
        disableRule.command = {
          command: 'adi-doctools.disable-grammar-rule',
          title: 'Disable rule',
          arguments: [ruleId]
        }
        disableRule.diagnostics = [diagnostic]
        actions.push(disableRule)
      }
    }

    return actions
  }
}

// Vale vocabulary loading
interface ValeVocabulary {
  accept: RegExp[]
  reject: { pattern: RegExp; original: string }[]
  lastLoaded: number
}

let valeVocabulary: ValeVocabulary | null = null
const VALE_CACHE_TTL = 30000 // 30 seconds

function expandValePattern(pattern: string): RegExp | null {
  try {
    // Check for case-insensitive flag
    let flags = ''
    let regexStr = pattern

    if (pattern.startsWith('(?i)')) {
      flags = 'i'
      regexStr = pattern.slice(4)
    }

    // Escape special regex chars except those Vale uses
    // Vale patterns can use: (s)?, [Aa], etc.
    // We need to make it match the whole word
    return new RegExp(`^${regexStr}$`, flags)
  } catch {
    return null
  }
}

function expandValePatternForSearch(pattern: string): RegExp | null {
  try {
    // Check for case-insensitive flag
    let flags = 'g'
    let regexStr = pattern

    if (pattern.startsWith('(?i)')) {
      flags = 'gi'
      regexStr = pattern.slice(4)
    }

    // Word boundary search
    return new RegExp(`\\b(${regexStr})\\b`, flags)
  } catch {
    return null
  }
}

async function loadValeVocabulariesAsync(): Promise<{ accept: RegExp[]; reject: { pattern: RegExp; original: string }[] }> {
  const accept: RegExp[] = []
  const reject: { pattern: RegExp; original: string }[] = []

  try {
    // Find all accept.txt and reject.txt files matching the pattern
    const acceptFiles = await vscode.workspace.findFiles('**/config/vocabularies/*/accept.txt')
    const rejectFiles = await vscode.workspace.findFiles('**/config/vocabularies/*/reject.txt')

    for (const file of acceptFiles) {
      try {
        const content = fs.readFileSync(file.fsPath, 'utf-8')
        for (const line of content.split('\n')) {
          const trimmed = line.trim()
          if (!trimmed || trimmed.startsWith('#')) continue

          const regex = expandValePattern(trimmed)
          if (regex) accept.push(regex)
        }
      } catch {
        // Skip unreadable files
      }
    }

    for (const file of rejectFiles) {
      try {
        const content = fs.readFileSync(file.fsPath, 'utf-8')
        for (const line of content.split('\n')) {
          const trimmed = line.trim()
          if (!trimmed || trimmed.startsWith('#')) continue

          const regex = expandValePatternForSearch(trimmed)
          if (regex) reject.push({ pattern: regex, original: trimmed })
        }
      } catch {
        // Skip unreadable files
      }
    }
  } catch (err) {
    console.error('Failed to load Vale vocabularies:', err)
  }

  return { accept, reject }
}

let vocabLoadPromise: Promise<void> | null = null

async function ensureValeVocabulary(): Promise<ValeVocabulary> {
  const now = Date.now()

  if (valeVocabulary && (now - valeVocabulary.lastLoaded) < VALE_CACHE_TTL) {
    return valeVocabulary
  }

  // Avoid concurrent loads
  if (!vocabLoadPromise) {
    vocabLoadPromise = (async () => {
      const { accept, reject } = await loadValeVocabulariesAsync()
      valeVocabulary = { accept, reject, lastLoaded: Date.now() }
      vocabLoadPromise = null
    })()
  }

  await vocabLoadPromise
  return valeVocabulary!
}

async function isWordAllowed(word: string): Promise<boolean> {
  const vocab = await ensureValeVocabulary()
  return vocab.accept.some(p => p.test(word))
}

interface RejectMatch {
  word: string
  offset: number
  length: number
  pattern: string
}

async function findRejectedWords(text: string): Promise<RejectMatch[]> {
  const vocab = await ensureValeVocabulary()
  const matches: RejectMatch[] = []

  for (const { pattern, original } of vocab.reject) {
    // Reset lastIndex for global regex
    pattern.lastIndex = 0
    let match
    while ((match = pattern.exec(text)) !== null) {
      matches.push({
        word: match[1] || match[0],
        offset: match.index,
        length: match[0].length,
        pattern: original
      })
    }
  }

  return matches
}

// LanguageTool checker that uses the Python backend
export class LanguageToolChecker {
  private builder = new AnnotatedTextBuilder()
  private diagnosticCollection: vscode.DiagnosticCollection
  private lastCheckedUri: vscode.Uri | undefined

  constructor(diagnosticCollection: vscode.DiagnosticCollection) {
    this.diagnosticCollection = diagnosticCollection
  }

  setLangConfig(config: LangConfig) {
    this.builder.setLangConfig(config)
  }

  async check(document: vscode.TextDocument, tree: Node): Promise<LTMatch[]> {
    // Check if grammar checking is enabled
    const config = vscode.workspace.getConfiguration('adi-doctools.grammar')
    if (!config.get<boolean>('enabled', true)) {
      this.diagnosticCollection.delete(document.uri)
      return []
    }

    const mode = config.get<string>('mode', 'api')
    const apiUsername = config.get<string>('apiUsername', '')
    const apiKey = config.get<string>('apiKey', '')
    const language = 'en-US'  // Default language

    const sourceText = document.getText()

    // Build annotated text
    this.builder.buildFromTree(tree, sourceText)
    const text = this.builder.buildText(sourceText)

    if (!text.trim()) {
      this.diagnosticCollection.delete(document.uri)
      return []
    }

    // Get filter settings
    const disabledRules = new Set(config.get<string[]>('disabledRules', []) || [])

    try {
      // Send to Python backend
      const result: LTResult = await lspSend({
        languageTool: 'check',
        text: text,
        mode: mode,
        language: language,
        username: apiUsername,
        apiKey: apiKey
      })

      // Handle errors with user-friendly prompts
      if (result.error) {
        await this.handleError(result.error, result.message || '', mode)
        return []
      }

      // Map matches back to source positions and filter
      const mappedMatches: LTMatch[] = []
      for (const match of result.matches || []) {
        // Filter by disabled rules
        if (disabledRules.has(match.ruleId)) continue

        const mapped = this.builder.mapToSource(match.offset, match.length)
        if (mapped) {
          // Get the matched text from source
          const matchedText = sourceText.slice(mapped.srcOffset, mapped.srcOffset + mapped.srcLength)

          // Filter by Vale vocabulary patterns
          if (await isWordAllowed(matchedText)) continue

          mappedMatches.push({
            ...match,
            srcOffset: mapped.srcOffset,
            srcLength: mapped.srcLength,
            matchedText
          })
        }
      }

      // Find rejected words in the text sent to LanguageTool
      const rejectedWords = await findRejectedWords(text)
      for (const rejected of rejectedWords) {
        const mapped = this.builder.mapToSource(rejected.offset, rejected.length)
        if (mapped) {
          mappedMatches.push({
            message: `"${rejected.word}" is a rejected term`,
            offset: rejected.offset,
            length: rejected.length,
            replacements: [],
            ruleId: 'VALE_REJECT',
            srcOffset: mapped.srcOffset,
            srcLength: mapped.srcLength,
            matchedText: rejected.word
          })
        }
      }

      // Update diagnostics
      this.updateDiagnostics(document, mappedMatches)

      return mappedMatches
    } catch (err) {
      console.error('LanguageTool check failed:', err)
      return []
    }
  }

  private updateDiagnostics(document: vscode.TextDocument, matches: LTMatch[]) {
    const diagnostics: vscode.Diagnostic[] = []

    for (const match of matches) {
      if (match.srcOffset === undefined || match.srcLength === undefined) continue

      const startPos = document.positionAt(match.srcOffset)
      const endPos = document.positionAt(match.srcOffset + match.srcLength)
      const range = new vscode.Range(startPos, endPos)

      const diagnostic = new vscode.Diagnostic(
        range,
        match.message,
        vscode.DiagnosticSeverity.Information
      )
      diagnostic.source = 'LanguageTool'
      diagnostic.code = match.ruleId

      if (match.replacements && match.replacements.length > 0) {
        // Store replacements for quick fix
        (diagnostic as any).replacements = match.replacements
      }

      if (match.matchedText) {
        (diagnostic as any).matchedText = match.matchedText
      }

      diagnostics.push(diagnostic)
    }

    if (this.lastCheckedUri && this.lastCheckedUri.toString() !== document.uri.toString())
      this.diagnosticCollection.delete(this.lastCheckedUri)

    this.diagnosticCollection.set(document.uri, diagnostics)
    this.lastCheckedUri = document.uri
  }

  private async handleError(error: string, message: string, mode: string) {
    if (error === 'init_failed' && mode === 'local') {
      vscode.window.showErrorMessage(
        `LanguageTool initialization failed: ${message}. Make sure Java is installed.`
      )
    } else if (error === 'rate_limited') {
      vscode.window.showWarningMessage(
        'LanguageTool API rate limit exceeded. Try again later or switch to local mode.'
      )
    } else if (error === 'connection_error') {
      vscode.window.showWarningMessage('Could not connect to LanguageTool API.')
    } else if (error === 'api_error') {
      vscode.window.showErrorMessage(
        `LanguageTool API error: ${message}. Consider switching to local mode.`
      )
    } else {
      console.error('LanguageTool error:', error, message)
    }
  }
}
