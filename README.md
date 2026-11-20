# Doctools GUI

> [!IMPORTANT]
> Doctools is not an official product of Analog Devices Inc. It is a collection
> of open-source tools and is provided without support or warranty.

Edit reStructuredText in the browser, as the document and not as markup.

```
make vendor        # once: fetch the parser
pip install -e .   # in the environment of adi-doctools
adoc-gui doc.rst   # without a file: the index.rst of the current folder
```

The page has two panes, both editable and kept in sync:

- **Document**: the rendered document. Type, press Enter and Backspace as in a
  word processor; `Ctrl+B`, `Ctrl+I` and `Ctrl+E` toggle bold, italic and
  literal; `Ctrl+Z` / `Ctrl+Y` undo and redo.
- **Source**: the `.rst` text. The block of the caret and the last edit are
  highlighted.

Changes are saved to the file as you type, and changes made to the file by
other programs are loaded.

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
- `__main__.py` serves the page and reads and writes the one file, on
  `127.0.0.1` only; `docs.py` runs the backend of Doctools, the same process
  the editor extensions use.

## What is rendered

| Source | Shown as |
|--------|----------|
| Sections | Headings, the level follows the order of the adornments, which follow the length of the title |
| `.. _label:` | A chip in the margin, beside the block that follows. `+ label` beside a heading adds one |
| The arguments of a directive | A caption: the title of a table or of an admonition, the language of a code block |
| A directive without an argument or without content | Empty fields that say what goes there: type the argument, `Enter` goes to the content; `Backspace` in an emptied directive removes it |
| The options of a directive | Chips in the margin, beside the directive. The `+` below them adds one: type its name, then `:`, `Tab` or `Enter` for its value |
| Paragraphs, `*emphasis*`, `**strong**`, ` ``literal`` ` | Text, the markup is hidden |
| Bullet and enumerated lists | Lists, nested |
| `note`, `warning`, `tip`, ... | A card, the content is edited as a document |
| Roles | A chip with the name of the role and its title, or its target |
| Links | Their text |
| | The `−` at the left of a chip in the margin removes the label or the option |
| Grid tables, simple tables, `table` and `list-table` | Tables: type in the cells, `Tab` moves between them, `Enter` adds a row, `Backspace` in an empty row removes it |
| Tables with cells that span columns or rows, `csv-table` | Their source, in a box |
| Other directives | A box with their name, caption and options, the content as source |
| Literal blocks, comments, targets with a link, definition and field lists | Their source, in a box |

## Development

```
make test   # node --test, the model and the edits
```
