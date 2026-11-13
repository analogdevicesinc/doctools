# Doctools - VSCode/VSCodium Extension

> [!IMPORTANT]
> Doctools is not an official product of Analog Devices Inc. It is a collection
> of open-source tools bundled as an extension and is provided without support
> or warranty.

## Overview

A Visual Studio Code (VSCode/VSCodium) extension that provides language support
for reStructuredText (RST) documentation, powered by tree-sitter. This
extension offers intelligent editing capabilities for Sphinx documentation
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
- **Synchronized Preview**: The preview panel follows the active editor and locks its scroll position with the editor, in both directions.
- **Sparse Build**: Build only the folders you are working on.
- **Spell Check**: LanguageTool grammar and spell check, local by default.
- **Diagnostics**: Display build warnings and errors as diagnostics in the editor
- **Language Injection**: Syntax highlighting for embedded languages blocks (bash, YAML)

## Requirements

- **Python 3** with virtual environments.
- OpenJDK (Java): Optional, for **local** grammar correction.

For grammar correction with the Language Tool API, Java is not required.

Grammar correction is **local** by default, the text never leaves the machine.
The cloud mode sends the text of the documents to `api.languagetool.org` and
must be allowed once per workspace.

### Linux/Mac:

For **local** grammar correction, install OpenJDK from you package manager.

```
# Ubuntu
apt install openjdk-25-jdk
# Fedora
dnf install java-25-openjdk
# OpenSuse
zypper install java-25-openjdk
```

### Windows

It is highly recommended to install under [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install) and use the [store your files in the WSL file system](https://learn.microsoft.com/en-us/windows/wsl/filesystems#file-storage-and-performance-across-file-systems).
With [VSCodium](https://vscodium.com/), [Open Remote - WSL](https://open-vsx.org/extension/jeanp413/open-remote-wsl) allows to connect to WSL2.

If for **unknown reasons** you still want to use on native Windows, follow the guide below.

For grammar correction, install OpenJDK from the
[Microsoft distribution](https://learn.microsoft.com/en-us/java/openjdk/download)
([direct link](https://download.visualstudio.microsoft.com/download/pr/cc04eebf-9582-40aa-aaf7-3c60932ab808/1b08c9fae820c7030a2aca38ceb19666/microsoft-jdk-25.0.2-windows-x64.msi)).
Must re-open the IDE (not just reload the window).

## Python environment

The Python environment that provides `adi-doctools` is resolved in this order:

1. The `adi-doctools.pythonPath` setting: a Python interpreter, a virtual environment folder or the `adoc` executable.
2. `./.venv` (current workspace/open folder).
3. `adoc`, then `python3`, from `PATH`.

If none is found, `sphinx` and `adi-doctools` are installed (with user confirmation) at `./.venv`.
Do not open the sphinx source folder as the workspace folder, it may consider the venv files as source files.

## Quick start

- Install the extension.
- Open a repository with documentation.
- Open a `.rst` file to activate the extension.
- Click `yes` in the prompt to install the virtual enviroment, if `adi-doctools` is not already available.
- Use the `Explorer > Doctools Sparse Build` to select just some pages to build.

  - Drastically improves first time build time.

- Use the bottom panel `Docs` and `Spell Check` to configure the features.

  - `Docs`: Start/stop server, open preview.
  - `Spell Check`: Switch between local, cloud and off grammar correction.

## Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `adi-doctools.pythonPath` | | Python interpreter, virtual environment folder or `adoc` executable |
| `adi-doctools.port` | `8080` | Port of the documentation server, the next free port is used when busy |
| `adi-doctools.preview.scrollSync` | `true` | Lock the scroll position of the preview and the editor |
| `adi-doctools.preview.followEditor` | `true` | Show the page of the active editor in the preview |
| `adi-doctools.grammar.mode` | `local` | `local`, `api` (cloud) or `off` |
| `adi-doctools.grammar.language` | `en-US` | LanguageTool language code |
| `adi-doctools.grammar.disabledRules` | `[]` | LanguageTool rule IDs to disable |

## Development

```
npm install
npm run build      # bundle to dist/
npm run test:e2e   # end-to-end tests in VSCodium/VSCode (headless with Xvfb)
```

The end-to-end tests use `adoc` from `PATH`, or the Python set in `ADOC_PYTHON`.
Set `ADOC_E2E_LANGUAGETOOL=0` to skip the local spell check test (requires Java and `language_tool_python`).

## Alternative

[Esbonio](https://docs.esbon.io/en/latest/index.html) is an extensively developed Language Server Protocol and Visual Studio Code extension for sphinx.

The Doctools cli is generates Estobio pyproject.toml entry with (including [Sparse builds](https://analogdevicesinc.github.io/doctools/cli.html#serve-sparse)):
```
adoc serve --esbonio --sparse docs/learning | tee pyproject.toml
```

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
| [language_tool_python](https://github.com/jxmorris12/language_tool_python) | GPL-3.0 | Language Tool Python Wrapper |

## Documentation

For comprehensive documentation on the Doctools project, visit:

[analogdevicesinc.github.io/doctools](https://analogdevicesinc.github.io/doctools)
