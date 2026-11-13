import * as vscode from 'vscode'
import * as fs from 'fs/promises'
import { Parser, Language, Node } from 'web-tree-sitter'
import { lspSend } from './python'
import { AnnotatedTextBuilder, LTMatch, LTResult, codePointToUtf16 } from './annotated-text'

export { AnnotatedTextBuilder, LTMatch, LTResult }

export type GrammarMode = 'off' | 'local' | 'api'

export interface GrammarOptions {
  mode: GrammarMode
  language: string
  username: string
  apiKey: string
  disabledRules: string[]
}

export interface CheckOutcome {
  status: 'ok' | 'stale' | 'error'
  error?: string
  message?: string
  matches?: LTMatch[]
}

interface LangConfig {
  parser: Parser
  lang: Language
}

const CHECK_TIMEOUT_MS = 10 * 60 * 1000
const VOCABULARY_GLOB = '**/config/vocabularies/*/{accept,reject}.txt'
const VOCABULARY_EXCLUDE = '**/{node_modules,.venv,venv,_build,build,.git}/**'

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

      if (ruleId && ruleId !== 'VALE_REJECT') {
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

interface ValeVocabulary {
  accept: RegExp[]
  reject: { pattern: RegExp; original: string }[]
}

function valePattern(pattern: string, search: boolean): RegExp | null {
  try {
    const insensitive = pattern.startsWith('(?i)')
    const body = insensitive ? pattern.slice(4) : pattern
    const flags = (search ? 'g' : '') + (insensitive ? 'i' : '')
    return new RegExp(search ? `\\b(${body})\\b` : `^${body}$`, flags)
  } catch {
    return null
  }
}

async function readPatterns(file: vscode.Uri): Promise<string[]> {
  try {
    const content = await fs.readFile(file.fsPath, 'utf-8')
    return content.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'))
  } catch {
    return []
  }
}

async function loadValeVocabulary(): Promise<ValeVocabulary> {
  const vocabulary: ValeVocabulary = { accept: [], reject: [] }

  try {
    for (const file of await vscode.workspace.findFiles(VOCABULARY_GLOB, VOCABULARY_EXCLUDE)) {
      const accept = file.path.endsWith('/accept.txt')
      for (const original of await readPatterns(file)) {
        const pattern = valePattern(original, !accept)
        if (!pattern) continue
        if (accept) vocabulary.accept.push(pattern)
        else vocabulary.reject.push({ pattern, original })
      }
    }
  } catch (err) {
    console.error('Failed to load Vale vocabularies:', err)
  }

  return vocabulary
}

interface RejectMatch {
  word: string
  offset: number
  length: number
  pattern: string
}

function findRejectedWords(vocabulary: ValeVocabulary, text: string): RejectMatch[] {
  const matches: RejectMatch[] = []

  for (const { pattern, original } of vocabulary.reject) {
    pattern.lastIndex = 0
    let match
    while ((match = pattern.exec(text)) !== null) {
      if (match[0].length === 0) {
        pattern.lastIndex++
        continue
      }
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

export class LanguageToolChecker implements vscode.Disposable {
  private langConfig: LangConfig | undefined
  private vocabulary: Promise<ValeVocabulary> | undefined
  private watcher: vscode.FileSystemWatcher

  constructor(private diagnosticCollection: vscode.DiagnosticCollection) {
    this.watcher = vscode.workspace.createFileSystemWatcher(VOCABULARY_GLOB)
    const invalidate = () => { this.vocabulary = undefined }
    this.watcher.onDidChange(invalidate)
    this.watcher.onDidCreate(invalidate)
    this.watcher.onDidDelete(invalidate)
  }

  dispose() {
    this.watcher.dispose()
  }

  setLangConfig(config: LangConfig) {
    this.langConfig = config
  }

  clear(uri: vscode.Uri) {
    this.diagnosticCollection.delete(uri)
  }

  private getVocabulary(): Promise<ValeVocabulary> {
    if (!this.vocabulary)
      this.vocabulary = loadValeVocabulary()
    return this.vocabulary
  }

  async check(document: vscode.TextDocument, tree: Node, options: GrammarOptions): Promise<CheckOutcome> {
    if (options.mode === 'off') {
      this.clear(document.uri)
      return { status: 'ok', matches: [] }
    }

    const version = document.version
    const sourceText = document.getText()

    if (!this.langConfig)
      return { status: 'error', error: 'unavailable', message: 'Parser not initialized' }
    const mapper = new AnnotatedTextBuilder()
    mapper.setLangConfig(this.langConfig)
    mapper.buildFromTree(tree, sourceText)
    const text = mapper.buildText(sourceText)

    if (!text.trim()) {
      this.clear(document.uri)
      return { status: 'ok', matches: [] }
    }

    let result: LTResult
    try {
      result = await lspSend({
        languageTool: 'check',
        text: text,
        mode: options.mode,
        language: options.language,
        username: options.mode === 'api' ? options.username : '',
        apiKey: options.mode === 'api' ? options.apiKey : ''
      }, CHECK_TIMEOUT_MS)
    } catch (err: any) {
      return { status: 'error', error: 'unavailable', message: err?.message }
    }

    if (document.isClosed || document.version !== version)
      return { status: 'stale' }

    if (result.error)
      return { status: 'error', error: result.error, message: result.message || '' }

    const vocabulary = await this.getVocabulary()
    const disabledRules = new Set(options.disabledRules)
    const mappedMatches: LTMatch[] = []

    for (const match of result.matches || []) {
      if (disabledRules.has(match.ruleId)) continue

      const { offset, length } = options.mode === 'local'
        ? codePointToUtf16(text, match.offset, match.length)
        : match
      const mapped = mapper.mapToSource(offset, length)
      if (!mapped) continue

      const matchedText = sourceText.slice(mapped.srcOffset, mapped.srcOffset + mapped.srcLength)
      if (vocabulary.accept.some(p => p.test(matchedText))) continue

      mappedMatches.push({
        ...match,
        srcOffset: mapped.srcOffset,
        srcLength: mapped.srcLength,
        matchedText
      })
    }

    for (const rejected of findRejectedWords(vocabulary, text)) {
      const mapped = mapper.mapToSource(rejected.offset, rejected.length)
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

    this.updateDiagnostics(document, mappedMatches)
    return { status: 'ok', matches: mappedMatches }
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
        (diagnostic as any).replacements = match.replacements
      }

      if (match.matchedText) {
        (diagnostic as any).matchedText = match.matchedText
      }

      diagnostics.push(diagnostic)
    }

    this.diagnosticCollection.set(document.uri, diagnostics)
  }
}
