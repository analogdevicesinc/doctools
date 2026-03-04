import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { Parser, Language, Tree, Node, Query, QueryMatch } from 'web-tree-sitter';

const TOKEN_TYPES = [
  'namespace', 'class', 'enum', 'interface', 'struct', 'typeParameter',
  'type', 'parameter', 'variable', 'property', 'enumMember', 'decorator',
  'event', 'function', 'method', 'macro', 'label', 'comment', 'string',
  'keyword', 'number', 'regexp', 'operator',
];
const TOKEN_MODIFIERS = [
  'declaration', 'definition', 'readonly', 'static', 'deprecated',
  'abstract', 'async', 'modification', 'documentation', 'defaultLibrary',
];
const LEGEND = new vscode.SemanticTokensLegend(TOKEN_TYPES, TOKEN_MODIFIERS);

interface LangConfig {
  parser: Parser;
  lang: Language;
  highlights: Query;
  injections?: Query;
}

const resPath = (f: string) => path.join(__dirname, '..', 'deps', f);

function getConfig() {
  const c = vscode.workspace.getConfiguration('adi-doctools');
  return {
    urlMappings: c.get<Record<string, string>>('urlMappings', {
      adi: 'https://analog.com/',
      dokuwiki: 'https://wiki.analog.com/',
    }),
    githubOrg: c.get<string>('githubOrg', 'analogdevicesinc'),
  };
}

function findChild(node: Node, type: string): Node | null {
  for (let i = 0; i < node.childCount; i++) {
    const child = node.child(i);
    if (child?.type === type) return child;
  }
  return null;
}

// AST: (interpreted_text (role) (interpreted_text))
function getRoleAtCursor(tree: Tree, pos: vscode.Position) {
  let node: Node | null = tree.rootNode.descendantForPosition({
    row: pos.line,
    column: pos.character,
  });

  while (node && node.type !== 'interpreted_text') node = node.parent;
  if (!node) return null;

  let role = findChild(node, 'role');
  if (!role && node.parent?.type === 'interpreted_text') {
    node = node.parent;
    role = findChild(node, 'role');
  }
  if (!role) return null;

  const roleMatch = role.text.match(/^:([^:]+):$/);
  if (!roleMatch) return null;

  const inner = findChild(node, 'interpreted_text');
  const contentMatch = inner?.text.match(/^`([^`]+)`$/);
  if (!contentMatch) return null;

  const content = contentMatch[1];
  const titleMatch = content.match(/^\s*(.+?)\s*<\s*(.+?)\s*>\s*$/);
  return {
    role: roleMatch[1],
    title: titleMatch?.[1],
    target: titleMatch ? titleMatch[2] : content,
  };
}

function resolveRoleUrl(role: string, target: string): string | null {
  const cfg = getConfig();

  if (cfg.urlMappings[role]) {
    return cfg.urlMappings[role] + target;
  }

  const repo = role.match(/^git-(.+)$/)?.[1];
  if (repo) {
    if (target.endsWith('+')) {
      return `https://github.com/${cfg.githubOrg}/${repo}/${target.slice(0, -1)}`;
    }
    const [, branch, file] = target.match(/^([^:]+):(.+)$/) || [, 'main', target];
    return `https://github.com/${cfg.githubOrg}/${repo}/tree/${branch}/${file}`;
  }

  return null;
}

class SemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
  private langs = new Map<string, LangConfig>();
  private initPromise?: Promise<void>;

  async init(): Promise<LangConfig> {
    if (!this.initPromise) {
      this.initPromise = this.doInit();
    }
    await this.initPromise;
    return this.langs.get('rst')!;
  }

  private async doInit() {
    await Parser.init({
      locateFile: (name: string) => path.join(__dirname, name),
    });
    await this.loadLang('rst', 'tree-sitter-rst.wasm', 'rst-highlights.scm', 'rst-injections.scm');
    await this.loadLang('bash', 'tree-sitter-bash.wasm', 'bash-highlights.scm');
    await this.loadLang('yaml', 'tree-sitter-yaml.wasm', 'yaml-highlights.scm');
  }

  private async loadLang(name: string, wasm: string, highlights: string, injections?: string) {
    const parser = new Parser();
    const lang = await Language.load(resPath(wasm));
    parser.setLanguage(lang);

    const hText = fs.readFileSync(resPath(highlights), 'utf-8')
      .split('\n').filter(l => !l.trim().startsWith('; inherits')).join('\n');
    const hQuery = new Query(lang, hText);

    let iQuery: Query | undefined;
    if (injections) {
      const iPath = resPath(injections);
      if (fs.existsSync(iPath)) {
        const iText = fs.readFileSync(iPath, 'utf-8')
          .split('\n').filter(l => !l.includes('; extends')).join('\n');
        try { iQuery = new Query(lang, iText); } catch {}
      }
    }

    this.langs.set(name, { parser, lang, highlights: hQuery, injections: iQuery });
  }

  async provideDocumentSemanticTokens(doc: vscode.TextDocument): Promise<vscode.SemanticTokens> {
    const rst = await this.init();
    const tokens = await this.getTokens(rst, doc.getText(), 0, 0);
    const builder = new vscode.SemanticTokensBuilder(LEGEND);
    for (const t of tokens) {
      if (TOKEN_TYPES.includes(t.type)) {
        builder.push(t.range, t.type, t.mods.filter(m => TOKEN_MODIFIERS.includes(m)));
      }
    }
    return builder.build();
  }

  private async getTokens(cfg: LangConfig, text: string, rowOff: number, colOff: number) {
    const tree = cfg.parser.parse(text);
    if (!tree) return [];

    let tokens = this.extractTokens(cfg.highlights.matches(tree.rootNode), rowOff, colOff);

    if (cfg.injections) {
      for (const m of cfg.injections.matches(tree.rootNode)) {
        const cap = m.captures.find(c => c.name === 'injection.content');
        if (!cap) continue;

        const props = (m as any).setProperties || (cap as any).setProperties || {};
        const langMap: Record<string, string> = { bash: 'bash', sh: 'bash', yaml: 'yaml', yml: 'yaml' };
        const injLang = langMap[props['injection.language'] as string];
        const target = injLang && this.langs.get(injLang);
        if (!target) continue;

        const node = cap.node;
        const injTokens = await this.getTokens(target, node.text, node.startPosition.row, node.startPosition.column);
        const range = new vscode.Range(
          node.startPosition.row, node.startPosition.column,
          node.endPosition.row, node.endPosition.column
        );
        tokens = tokens.filter(t => !range.contains(t.range)).concat(injTokens);
      }
    }
    return tokens;
  }

  private extractTokens(matches: QueryMatch[], rowOff: number, colOff: number) {
    const tokens: { range: vscode.Range; type: string; mods: string[] }[] = [];
    for (const m of matches) {
      for (const c of m.captures) {
        if (c.name.startsWith('_') || c.name.startsWith('injection.')) continue;

        const [type, ...mods] = c.name.split('.');
        const sr = c.node.startPosition.row + rowOff;
        const sc = c.node.startPosition.row === 0 ? c.node.startPosition.column + colOff : c.node.startPosition.column;
        const er = c.node.endPosition.row + rowOff;
        const ec = c.node.endPosition.row === 0 ? c.node.endPosition.column + colOff : c.node.endPosition.column;

        if (sr === er) {
          tokens.push({ range: new vscode.Range(sr, sc, er, ec), type, mods });
        } else {
          tokens.push({ range: new vscode.Range(sr, sc, sr, 100000), type, mods });
          for (let l = sr + 1; l < er; l++) {
            tokens.push({ range: new vscode.Range(l, 0, l, 100000), type, mods });
          }
          tokens.push({ range: new vscode.Range(er, 0, er, ec), type, mods });
        }
      }
    }
    return tokens;
  }
}

let provider: SemanticTokensProvider;

export async function activate(ctx: vscode.ExtensionContext) {
  provider = new SemanticTokensProvider();

  ctx.subscriptions.push(
    vscode.languages.registerDocumentSemanticTokensProvider({ language: 'restructuredtext' }, provider, LEGEND),

    vscode.commands.registerCommand('adi-doctools.inspect', async () => {
      const ed = vscode.window.activeTextEditor;
      if (!ed || ed.document.languageId !== 'restructuredtext') return;

      const rst = await provider.init();
      const tree = rst.parser.parse(ed.document.getText());
      if (!tree) return;

      const info = getRoleAtCursor(tree, ed.selection.active);
      if (!info) {
        vscode.window.showInformationMessage('No role at cursor');
        return;
      }

      const url = resolveRoleUrl(info.role, info.target);
      vscode.window.showInformationMessage(url ? `URL: ${url}` : `:${info.role}:\`${info.target}\``);
    }),

    vscode.commands.registerCommand('adi-doctools.action', async () => {
      const ed = vscode.window.activeTextEditor;
      if (!ed || ed.document.languageId !== 'restructuredtext') return;

      const rst = await provider.init();
      const tree = rst.parser.parse(ed.document.getText());
      const info = tree && getRoleAtCursor(tree, ed.selection.active);
      if (!info) return;

      const url = resolveRoleUrl(info.role, info.target);
      if (url) vscode.env.openExternal(vscode.Uri.parse(url));
    }),

    vscode.commands.registerCommand('adi-doctools.reload', () => {
      ctx.subscriptions.forEach(s => s.dispose());
      ctx.subscriptions.length = 0;
      activate(ctx);
      vscode.window.showInformationMessage('Doctools reloaded');
    })
  );
}

export function deactivate() {}
