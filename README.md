# Doctools GUI

> [!IMPORTANT]
> Doctools is not an official product of Analog Devices Inc. It is a collection
> of open-source tools and is provided without support or warranty.

Edit reStructuredText in the browser, as the document and not as markup.
It is an experiment: the look is on purpose not styled, every box shows the
tree-sitter node it comes from.

```
make vendor              # once: fetch the parser
python3 serve.py doc.rst # or: make run FILE=doc.rst
```

The page has two panes, both editable and kept in sync:

- **Document**: the rendered document. Type, press Enter and Backspace as in a
  word processor; `Ctrl+B`, `Ctrl+I` and `Ctrl+E` toggle bold, italic and
  literal; `Ctrl+Z` / `Ctrl+Y` undo and redo.
- **Source**: the `.rst` text. The block of the caret and the last edit are
  highlighted.

The status line shows the offset, the leaf and the tree-sitter node of the
caret, and the last edit. Changes are saved to the file as you type, and
changes made to the file by other programs are loaded.

## How it works

[tree-sitter](https://tree-sitter.github.io) with the
[tree-sitter-rst](https://github.com/stsewd/tree-sitter-rst) grammar parses
the source on every edit, incrementally, and gives a tree even when the markup
is broken.

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
- `serve.py` serves the page and reads and writes the one file, on
  `127.0.0.1` only.

## What is rendered

| Source | Shown as |
|--------|----------|
| Sections | Headings, the level follows the order of the adornments |
| Paragraphs, `*emphasis*`, `**strong**`, ` ``literal`` ` | Text, the markup is hidden |
| Bullet and enumerated lists | Lists, nested |
| `note`, `warning`, `tip`, ... | A box, the content is edited as a document |
| Roles and links | Their source, coloured |
| Other directives, literal blocks, comments, targets, definition and field lists, tables | Their source, in a box |

## Development

```
make test   # node --test, the model and the edits
```
