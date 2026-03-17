# Analog Devices Doctools - Visual Studio Code Extension

## Overview

A Visual Studio Code extension that provides language support for
reStructuredText (RST) documentation, powered by tree-sitter.
This extension offers intelligent editing capabilities for Sphinx documentation
projects, with support for custom roles and directives by interfacing with the
Sphinx Python object directly.

## Key Features

- **Tree-sitter Syntax Highlighting**: Fast, accurate syntax highlighting for reStructuredText files using tree-sitter parsing
- **Smart Hover Information**: Display detailed information about roles and directives on mouse or keyboard cursor hover
- **Intelligent Auto-completion**:
  - Roles (`:ref:`, `:doc:`, ...)
  - Directives (`.. note::`, `.. figure::`, ...)
  - Local and external references (`:doc:`, `:external+inv:ref:`, ...)
- **Live Server**: Automatically build changes on save, and see the changes highlighted in the browser.
- **Diagnostics**: Display build warnings and errors as diagnostics in the editor
- **Language Injection**: Syntax highlighting for embedded languages blocks (bash, YAML)

## Requirements

- **Python 3** with virtual environments.

`sphinx`, `adi-doctools` are installed automatically (with user confirmation) at ./.venv (current workspace/open folder).
Do not open the sphinx source folder as the workspace folder, it may consider the venv files as source files.

## Commands

| Command                    | Description                        |
|----------------------------|------------------------------------|
| `Doctools: Start Server`   | Start Doctools Sphinx server       |
| `Doctools: Stop Server`    | Stop Doctools Sphinx server        |

## Third Party Sources

This extension proudly integrates the following open source projects:

| Component | License | Description |
|-----------|---------|-------------|
| [tree-sitter/tree-sitter](https://github.com/tree-sitter/tree-sitter) | MIT | Core parsing engine |
| [AlecGhost/tree-sitter-vscode](https://github.com/AlecGhost/tree-sitter-vscode) | Apache-2.0 | VSCode integration reference |
| [nvim-treesitter/nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) | Apache-2.0 | Tree-sitter grammars and queries |
| [stsewd/tree-sitter-rst](https://github.com/stsewd/tree-sitter-rst) | MIT | reStructuredText grammar |
| [tree-sitter/tree-sitter-bash](https://github.com/tree-sitter/tree-sitter-bash) | MIT | Bash grammar |
| [tree-sitter-grammars/tree-sitter-yaml](https://github.com/tree-sitter-grammars/tree-sitter-yaml) | MIT | YAML grammar |
| [web-tree-sitter](https://github.com/tree-sitter/tree-sitter/tree/master/lib/binding_web) | MIT | WebAssembly bindings |

## Documentation

For comprehensive documentation on the Analog Devices Doctools project, visit:

[analogdevicesinc.github.io/doctools](https://analogdevicesinc.github.io/doctools)
