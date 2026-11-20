# Doctools GUI

> [!IMPORTANT]
> Doctools is not an official product of Analog Devices Inc. It is a collection
> of open-source tools and is provided without support or warranty.

Edit reStructuredText in the browser, as the document and not as markup.

```
make vendor        # once: fetch the parser, build CodeMirror (needs npm)
pip install -e .   # in the environment of adi-doctools
adoc-gui doc.rst   # without a file: the index.rst of the current folder
```

The page has three parts:

- **Files**, at the left: the `.rst` files of the documentation. A click opens
  a file, what is not saved of the open one is saved first. The check box of a
  folder selects it for the sparse build, see below.
- **Document**, in the middle: the rendered document. Type, press Enter and
  Backspace as in a word processor; `Ctrl+B`, `Ctrl+I` and `Ctrl+E` toggle
  bold, italic and literal; `Ctrl+Z` / `Ctrl+Y` undo and redo. The code of
  `code`, `code-block`, `sourcecode` and `shell` is edited in a code editor,
  coloured by its language; up from its first line and down from its last
  one leave it.
- **Side pane**, at the right, with two tabs:
  - *Source*: the `.rst` text, also editable, in a code editor (CodeMirror),
    coloured from the parsed document. The block of the caret and the last
    edit are highlighted.
  - *Live view*: the built page of the file, from the documentation server.
    It scrolls with the document, in both directions, and a link followed in
    it opens the file of that page.

The right click opens a menu: bold, italic, literal, what
can be added there (a label to a heading, an option to a directive, a tab).
Shift and the right click opens the menu of the browser.

The spelling and grammar mistakes of the prose are underlined, red and blue,
from LanguageTool. The selector at the right of the toolbar picks where it
runs: *Local* (`pip install language_tool_python`, needs Java; the first
check starts it and takes a few seconds), *Cloud* (the public service of
LanguageTool: the text is sent to languagetool.org, 20 checks a minute) or
*Off*. The right click on one shows its
corrections; a word can be added to the words that are not mistakes, kept by
the browser.

Changes are saved to the file as you type, and changes made to the file by
other programs are loaded. The buttons of the top bar hide the files and the
side pane, and switch between the light and the dark theme: as in the Doctools
theme, the one of the system until another is chosen.

## Documentation server

The play button at the top right builds the documentation with the server of
Doctools (`adoc serve`), in the background, and builds it again when the file
changes. `adoc-gui --serve` starts it right away. While it runs:

- The warnings and the errors of the build are shown below the block of their
  line, and on that line in the source.
- A menu completes the roles, the directives and their targets while they are
  typed: `:`, `` :ref:` ``, `:external+`, `.. `. The arrows select, `Enter` or
  `Tab` accept, `Escape` closes.
- The pointer over a role shows what it points to.
- The live view shows the page of the file.

**Sparse build**: check folders in the files to build only those, which makes
the first build of a large documentation much faster. *Build all* clears the
selection. The selection is kept by the browser, per documentation.

The file is not saved, and so not built, while a role or a directive is being
completed: the half-written markup would only be reported as an error. It is
saved once the completion is accepted, or when the caret or the focus leaves
it.

It needs a `conf.py` at a common location (`docs/conf.py`, ...) in the
repository of the file, or in a folder above the file.

## Structure

The other buttons at the top right hide the source, and show the structure: every
block is outlined with the tree-sitter node it comes from, and a status line
shows the offset, the leaf and the node of the caret, and the last edit.

## How it works

The code is in `adoc_gui/`.

[tree-sitter](https://tree-sitter.github.io) with the
[tree-sitter-rst](https://github.com/stsewd/tree-sitter-rst) grammar parses
the source on every edit and gives a tree even when the markup is broken. The
whole document is parsed each time, which takes milliseconds: with this grammar
a tree that is updated incrementally can differ from a fresh one.

- `web/model.js` turns the tree into blocks and *leaves*. A leaf is a piece of
  text shown as-is, `source.slice(leaf.s, leaf.e)`; the markup around it is
  hidden. What is not understood is a leaf with its source, so nothing is ever
  dropped.
- `web/view.js` shows the model as HTML and maps the caret between the page
  and the source offsets.
- `web/ops.js` turns what the user does (typing, Enter, Backspace, bold) into
  an edit of the source.
- `web/app.js` wires them: the browser never edits the page itself, every
  input becomes a source edit, then the page is rendered again from the new
  tree.
- `web/lsp.js` finds what to complete at the caret.
- `web/nav.js` shows the files and `web/sparse.js` holds the selection of the
  sparse build.
- `__main__.py` serves the page and reads and writes the `.rst` files of the
  documentation, on `127.0.0.1` only; `docs.py` runs the backend of Doctools, the same process
  the editor extensions use.

## What is rendered

| Source | Shown as |
|--------|----------|
| Sections | Headings, the level follows the order of the adornments, which follow the length of the title. A line of text, `Enter`, then `=`, `-`, `~`, `^`, `"`, `'`, `#` or `+` makes it a heading; typing the rest of the underline does nothing, another character (`- ` for a list) makes it text again |
| `.. _label:` | A chip in the margin, beside the block that follows. `+ label` beside a heading adds one |
| The arguments of a directive | A caption: the title of a table or of an admonition, the language of a code block |
| A directive without an argument or without content | Empty fields that say what goes there: type the argument, `Enter` goes to the content; `Backspace` in an emptied directive removes it |
| The options of a directive | Chips in the margin, beside the directive. The `+` below them adds one: type its name, then `:`, `Tab` or `Enter` for its value |
| Paragraphs, `*emphasis*`, `**strong**`, ` ``literal`` ` | Text, the markup is hidden |
| Bullet and enumerated lists | Lists, nested |
| `note`, `warning`, `tip`, ... | A card, the content is edited as a document |
| `tab-set` and `tab-item` | Tabs: a click on a title shows its tab, the title and the content are edited in place; `+` adds a tab, an emptied tab is removed with `Backspace` |
| Roles | A chip with the name of the role and its title, or its target |
| Links | Their text |
| | The `−` at the left of a chip in the margin removes the label or the option |
| Grid tables, simple tables, `table` and `list-table` | Tables: type in the cells, `Tab` moves between them, `Enter` adds a row, `Backspace` in an empty row removes it |
| Tables with cells that span columns or rows, `csv-table` | Their source, in a box |
| `code`, `code-block`, `sourcecode`, `shell` | A code editor, coloured by the language of the argument; the indentation of the source is not shown, and is added to what is written |
| `carousel`, `collapsible`, `card`, `grid`, `flex`, `figure`, `video`, ... | A box with their name, caption and options, the content is edited as a document |
| `rst-class` | A box with its name and the class to type, no content |
| `rubric` | A heading that is not a section: its title, of the size of its `:heading-level:` |
| Other directives | A box with their name, caption and options, the content as source |
| Literal blocks | Their text as it is written; the `::` alone on its line is hidden |
| Comments, targets with a link, definition and field lists | Their source, in a box |

## Development

```
make test   # node --test, the model and the edits
```
