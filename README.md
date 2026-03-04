# Analog Devices Doctools - VS Codium Extension

Sphinx roles and directives support using tree-sitter.

## Commands

| Command                         | Keybinding     | Description                        |
|---------------------------------|----------------|------------------------------------|
| `Doctools: Inspect Role`        | `Ctrl+Shift+I` | Show info about the role at cursor |
| `Doctools: Execute Role Action` | `Ctrl+Shift+O` | Open URL or execute role action    |
| `Doctools: Reload`              | -              | Reload the extension               |

## Building & Installing

```bash
make all
```

## Configuration

```json
{
  "adi-doctools.urlMappings": {
    "adi": "https://analog.com/",
    "dokuwiki": "https://wiki.analog.com/"
  },
  "adi-doctools.githubOrg": "analogdevicesinc"
}
```

## Uses

This extension combines these great sources:

- [tree-sitter/tree-sitter](https://github.com/tree-sitter/tree-sitter) (core engine)
- [AlecGhost/tree-sitter-vscode](https://github.com/AlecGhost/tree-sitter-vscode) (how to extension, Apache-2.0)
- [nvim-treesitter/nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) (grammars and wasm source map)
- [stsewd/tree-sitter-rst](https://github.com/stsewd/tree-sitter-rst) (rst wasm)
- [tree-sitter/tree-sitter-bash](https://github.com/tree-sitter/tree-sitter-bash) (bash wasm)
- [tree-sitter-grammars/tree-sitter-yaml](https://github.com/tree-sitter-grammars/tree-sitter-yaml) (yaml wasm)
