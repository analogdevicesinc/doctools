# Doctools - Neovim Plugin

> [!IMPORTANT]
> Doctools is not an official product of Analog Devices Inc. It is a collection
> of open-source tools and is provided without support or warranty.

## Overview

A Neovim plugin for reStructuredText (RST) documentation of Sphinx projects.
It talks to the Sphinx Python object directly, through the same backend as the
[VSCode extension](https://github.com/analogdevicesinc/doctools/tree/vscode)
(`python -m adi_doctools.lsp`), so custom roles and directives are supported.

## Key Features

- **Live Server**: build the changes on save and reload the page in the browser.
- **Synchronized Preview**: the browser follows the current buffer and locks its
  scroll position with the window, in both directions.
- **Sparse Build**: build only the folders you are working on.
- **Diagnostics**: the warnings and errors of the build as diagnostics, and in
  the quickfix list.
- **Completion**: roles (`:ref:`, `:doc:`, ...), directives (`.. note::`, ...),
  local and external references (`:external+inv:ref:`, ...).
- **Hover and go to definition** of the role under the cursor.
- **Spell Check**: LanguageTool grammar and spell check, local or cloud, with
  quick fixes as code actions and Vale vocabularies.
- **Format**: bold, italic, headings, lists, links, references, images, tables,
  code blocks and admonitions, for reStructuredText and MyST Markdown.
- **Language Injection**: highlight of the `shell` and `include-template`
  directives.
- **Roles without the server**: `:DInspect` and `:DAction` for `:adi:`,
  `:dokuwiki:`, `:git-<repo>:` and your own roles.

Completion, hover, definition and code actions are provided by an in-process
language server, so they work with the built-in LSP client (`K`, `gd`, `gra`,
`vim.lsp.completion`) and with any completion plugin.

## Requirements

- Neovim 0.10 or newer.
- The tree-sitter parser for `rst` (`:TSInstall rst` with
  [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)), for
  the hover, the definition and the spell check.
- `adoc` on `PATH`: `pip install adi-doctools`, 0.5.3 or newer, and
  `language_tool_python` for the local grammar correction.
- OpenJDK (Java): optional, for the **local** grammar correction.

Grammar correction is **local** by default, the text never leaves the machine.
The cloud mode sends the text of the documents to `api.languagetool.org`.

## Install

With [lazy.nvim](https://github.com/folke/lazy.nvim):

```lua
{
  'analogdevicesinc/doctools',
  branch = 'nvim',
  ft = { 'rst', 'markdown' },
  config = function()
    require('adi-doctools').setup()
  end,
}
```

## Python environment

The `adoc` executable of `adi-doctools` must be on `PATH` when Neovim starts,
e.g. with its virtual environment activated. The plugin does not install it.

The workspace is the `root` option, otherwise the current directory or the
repository of the buffer, the first that has a `conf.py` at a common location
(`docs/conf.py`, `doc/source/conf.py`, ...).

## Quick start

- Open a `.rst` file of a repository with documentation, the Python backend
  starts in the background.
- `:Doctools start` builds the documentation and starts the server.
- `:Doctools preview` opens the preview in the browser.
- `:Doctools sparse` selects just some folders to build, it drastically
  improves the first build time.

## Commands

| Command | Description |
|---------|-------------|
| `:Doctools start` / `stop` / `restart` | Control the documentation server |
| `:Doctools preview` | Open the preview in the browser |
| `:Doctools sparse [folder]` | Open the sparse build tree (`c` clears the selection), or toggle a folder |
| `:Doctools diagnostics` | The warnings of the build in the quickfix list |
| `:Doctools output` | Show the build log |
| `:Doctools status` | Show the status |
| `:Doctools grammar [local\|cloud\|off]` | Select the spell check mode |
| `:Doctools check` | Check the grammar of the buffer now |
| `:Doctools format {kind} [value]` | Format the selection, see below |
| `:DInspect` / `:DAction` | Show / open the target of the role under the cursor |

The spell check mode, the disabled rules and the sparse
selection are kept per workspace, in `stdpath('state')/adi-doctools`.

## Format

`:Doctools format {kind}` writes the markup for the visual selection, or the
word under the cursor. The actions toggle: applying bold to bold text removes
it. `{kind}` is one of:

`bold`, `italic`, `code`, `subscript`, `superscript`, `heading [0-5]`,
`bullet`, `numbered`, `quote`, `link [url]`, `reference`, `document`,
`image [path]`, `table [3x3]`, `codeblock [language]`, `admonition [kind]`,
`rule`.

`reference` and `document` insert a `:ref:` / `:doc:` role and open the list of
targets (requires the server to be running).

Each kind has a `<Plug>(doctools-{kind})` mapping for the normal, visual and
insert modes, none is mapped by default:

```lua
vim.api.nvim_create_autocmd('FileType', {
  pattern = { 'rst', 'markdown' },
  callback = function(args)
    local map = function(keys, kind)
      vim.keymap.set({ 'n', 'x' }, keys, ('<Plug>(doctools-%s)'):format(kind), { buffer = args.buf })
    end
    map('<localleader>b', 'bold')
    map('<localleader>i', 'italic')
    map('<localleader>h', 'heading')
    map('<localleader>l', 'link')
  end,
})
```

## Options

The defaults:

```lua
require('adi-doctools').setup({
  root = nil,          -- folder of the repository, detected when nil
  port = 8080,         -- port of the server, the next free port is used when busy
  auto_start = true,   -- start the Python backend when a rst buffer is opened
  lsp = true,          -- completion, hover, definition and code actions
  preview = {
    scroll_sync = true,    -- lock the scroll position of the browser and the window
    follow_editor = true,  -- show the page of the current buffer in the browser
    auto_open = false,     -- open the browser when the server starts
    host = '127.0.0.1',    -- address and port of the preview page,
    port = 0,              -- 0 picks a free port
  },
  grammar = {
    mode = 'local',        -- 'local', 'cloud' or 'off'
    language = 'en-US',    -- LanguageTool language code
    disabled_rules = {},   -- LanguageTool rule IDs to disable
    api_username = '',
    api_key = '',
  },
  -- Roles resolved without the server
  url_mappings = { adi = 'https://analog.com/', dokuwiki = 'https://wiki.analog.com/' },
  github_org = 'analogdevicesinc',
  roles = {},
})
```

`require('adi-doctools').status()` returns a text for the status line, e.g.
`Docs: Up-to-date (sparse: 2) | Spell: Local`. The `User DoctoolsStatus` event
is triggered when it changes.

Over SSH, forward the port of the server and a fixed `preview.port` to see the
preview in the local browser.

## Documentation

For comprehensive documentation on the Doctools project, visit:

[analogdevicesinc.github.io/doctools](https://analogdevicesinc.github.io/doctools)
