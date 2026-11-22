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

`adoc serve --gui` does the same from Doctools, with the documentation server
started: `-d`, `--port` and `--sparse` are the ones of the server, the editor
takes port 8300 or the next free one.

It follows Harmonic, the design system of ADI, as the Doctools theme does: its
colours, and its fonts (Inter, Barlow, JetBrains Mono) when they are installed
or fetched for the theme (`ci/fetch-fonts.sh`).

The first time it is opened, a guide says what it does, in a few panels: the
page and its panels, the directives and the roles, the keys, the build and
the live view, the completion and the references, the grammar, the files and
the changes. The book in the top bar shows it again. The browser keeps that
it was seen.

The page has three parts:

- **Files**, at the left: the `.rst` files of the documentation. A click opens
  a file, what is not saved of the open one is saved first. The check box of a
  folder selects it for the sparse build, see below. The `+` at its top, and
  the right click on a file, a folder or the panel, make a new file: type its
  name in the tree, `.rst` is added, and `folder/name` makes the folder too;
  it starts with a title from its name. The right click on a file also
  renames it (`F2` for the open one), moves it (*Move to…*: type its path,
  or drag the file to a folder) and deletes it, once it is confirmed. `Enter`
  takes the name, `Escape` leaves it. The open file stays open when it is
  renamed or moved, with its history. A folder that a file leaves empty is
  removed.
- **Document**, in the middle: the rendered document. Type, press Enter and
  Backspace as in a word processor; `Ctrl+B`, `Ctrl+I` and `Ctrl+E` toggle
  bold, italic and literal; `Ctrl+Z` / `Ctrl+Y` undo and redo. The selector
  of the toolbar makes the line of the caret a heading of a level, or text
  again; a level cannot be skipped. *Directive*, *Role* and *Table*, in the
  toolbar, add one; a directive is block markup, a role is inline markup,
  which their icons and the line at the top of what they open say, with an
  example that changes each time:
  - *Directive*: the directives in groups (admonitions, images and media,
    code, tables, layout, structure, HDL), and the others of the project
    when the documentation server runs. The one chosen is added after the
    block of the caret, as a block of its own, in the list item or the
    directive the caret is in; type its argument, or its content. A tab set
    comes with a tab, a list table with a row of headers.
  - *Role*: the roles in groups (references, links, text), and the others
    of the project. The one chosen is written at the caret, around the text
    that is selected; what a reference points to is then completed.
  - *Table*: choose its size on the squares, columns by rows with the first
    row for the headers, and its kind, a list table or a grid table.

  Search in the first two, the arrows and `Enter` choose, `Escape` closes. The code of
  `code`, `code-block`, `sourcecode` and `shell` is edited in a code editor,
  coloured by its language; up from its first line and down from its last
  one leave it.
- **Side pane**, at the right, with two tabs:
  - *Source*: the `.rst` text, also editable, in a code editor (CodeMirror),
    coloured from the parsed document. The block of the caret and the last
    edit are highlighted.
  - *Live view*: the built page of the file, from the documentation server;
    the tab is there while the server runs.
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

The text typed in a paragraph is wrapped in the source to fewer than 80
columns, as the guidelines ask: the new line is indented as the text of the
paragraph (two spaces in a `*` item, three in a `#.` item or a directive),
and a role, a link or a literal is kept on one line. Only the line being
typed is wrapped, the lines that are already there are left as they are.

Changes are saved to the file as you type, and changes made to the file by
other programs are loaded. The page is as wide as it is read well when the
window allows, and only narrower to leave their place to the panels that are
shown. The files float at the left of the window and the
side pane at the right of the page; the cross in each hides it, and a button in its corner, below the
toolbar, shows it again. The top bar switches between the light and the dark
theme: as in the Doctools theme, the one of the system until another is
chosen.

On a phone, or in a window as narrow (1000 pixels or fewer), the files, the
page and the side pane are three screens, one at a time, chosen from a bar
at the bottom: *Files*, *Editor*, and the third one, named after the tab of
the side pane that is shown (*Source*, *Live view*, *References*, *Changes*).
Opening a file, or writing a reference, shows the page.

`Ctrl+C` in the terminal stops `adoc-gui`, with the documentation server and
LanguageTool. The page says so, and goes on, with what was typed meanwhile,
when `adoc-gui` is started again.

## Git

When the documentation is in a git repository, `adoc-gui` runs `git` to show
what changed since the last commit, as an editor gutter does:

- The branch, and whether the open file changed, after its state at the top.
- A letter beside the files that changed (`M`, `U` for a new file, ...), and a
  dot beside the folders that hold them.
- Bars at the right of the blocks of the page, and at the left of the lines
  of the source: green for added, blue for changed; a red mark where lines
  were removed. The pointer on a bar, of the page or of the source, opens
  its change, with *+ Stage*, or *− Unstage* when it is staged. *Discard*
  throws away a change that is not staged; undo brings it back.
- *Changes*, a tab of the side pane: the changes of the files, not staged
  and staged, as their lines. A click on a change stages it, or unstages it
  when it is staged; *Discard*, on the pointer, throws away a change that is
  not staged (undo brings it back, for the open file); `+` and `−` stage and unstage a whole file, a click
  on its name opens it.
- *Commit*, at the top of the *Changes* tab: it commits what is staged, and
  only that. The summary is the first line of the message, with
  its length (short is better, 50; at most 72), `Enter` goes to the body
  below it, `Ctrl+Enter` commits. *Sign off* adds the `Signed-off-by` line
  (`git commit -s`), on by default; the browser keeps the choice.

## Documentation server

The *Build* button at the top right builds the documentation with the server of
Doctools (`adoc serve`), in the background, and builds it again when the file
changes. `adoc-gui --serve` starts it right away. While it runs:

- The warnings and the errors of the build are shown below the block of their
  line, and on that line in the source.
- A menu completes the roles, the directives and their targets while they are
  typed: `:`, `` :ref:` ``, `:external+`, `.. `. The arrows select, `Enter` or
  `Tab` accept, `Escape` closes.
- The pointer over a role shows what it points to. For a reference into a
  documentation, the one of the project (`:ref:`, `:doc:`, ...) or the one of
  an inventory (`:external+`), a card shows the title of its target, the
  first text of it, and where it is; the same card is beside the menu, for
  the target that is selected. The text is read from the built page, of the
  documentation server or of the other documentation, after the card is
  shown: only its text, the page itself is not loaded.
- The live view shows the page of the file.
- *References*, a tab of the side pane, lists what can be referenced, as a
  tree: this documentation and each of its inventories, their types (the
  roles), and the references of a type. `ref` comes first and is open, it
  is the one to prefer, then `doc`, then the others. A documentation that is
  closed is not read nor searched, as the inventories are at first: open the
  ones to look in. Search by name, title or page: the types open on what
  matches. The selector beside the search picks the types that are shown,
  one or several. The pointer on a reference shows its card; a click writes
  its role at the caret of the page (`` :ref:`label` ``,
  `` :external+sphinx:ref:`label` ``), with the text that is selected there
  as its title. A page of the project is written from the top of the
  documentation (`` :doc:`/folder/page` ``). The browser keeps what is open
  and the types.

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
  and the source offsets. The page is refreshed in part: the element of a
  block is kept while the source of the block is the same, only its offsets
  are updated, so an edit makes again the elements of the edited block and
  leaves the rest of the page, and its code editors, as they are.
- `web/ops.js` turns what the user does (typing, Enter, Backspace, bold) into
  an edit of the source.
- `web/app.js` wires them: the browser never edits the page itself, every
  input becomes a source edit, then the page is rendered again from the new
  tree.
- `web/directives.js` says what each directive takes: its argument, its
  options (a flag, a value, or one of a list of values) and its content.
- `web/insert.js` holds the directives and the roles the toolbar adds, in
  their groups.
- `web/tutorial.js` is the guide: its panels and their drawings.
- `web/lsp.js` finds what to complete at the caret, `web/refs.js` orders and
  searches the references and writes their role.
- `web/nav.js` shows the files and `web/sparse.js` holds the selection of the
  sparse build.
- `git.py` runs `git`: the branch, the state of the files, the text of the
  open file in the last commit, the changes and their staging (`git apply
  --cached` of one change), and the commit.
- `__main__.py` serves the page and reads and writes the `.rst` files of the
  documentation, on `127.0.0.1` only; `docs.py` runs the backend of Doctools, the same process
  the editor extensions use; `preview.py` reads the title and the first text
  of the target of a reference from its page. Only the pages the backend
  resolves a reference to are read. `files.py` makes, moves and deletes the
  `.rst` files, below the folder of the documentation only.

## What is rendered

| Source | Shown as |
|--------|----------|
| Sections | Headings, the level follows the order of the adornments, which follow the length of the title. A line of text, `Enter`, then `=`, `-`, `~`, `^`, `"`, `'`, `#` or `+` makes it a heading; typing the rest of the underline does nothing, another character (`- ` for a list) makes it text again |
| `.. _label:` | A chip in the margin, beside the block that follows. `+ label` beside a heading adds one |
| The arguments of a directive | A caption: the title of a table or of an admonition, the language of a code block |
| A directive without an argument or without content | Empty fields that say what goes there: type the argument, `Enter` goes to the content; `Backspace` in an emptied directive removes it |
| Leaving and removing a directive | `Enter` on the empty line at the end of its content leaves it, to the directive around it or to the document: of any directive, the code of a code editor too. `Backspace` at the very start of its content, or right after the directive (at the start of what follows it, or on the empty line after it), removes it with its content, but not while the key is held down; undo brings it back |
| A directive | Always in the order of the source, whatever it is in: its name and its argument, its options below them, then its content |
| The options of a directive | One a line, below the name and the argument of the directive: the name, then the value; a flag has no value. `+ option`, in the corner of the directive, adds one: choose its name from the ones the directive takes, or type it, then `:`, `Tab` or `Enter` for its value, which is chosen too when it is one of a list (`:align:`). The `−` at its end removes it |
| Paragraphs, `*emphasis*`, `**strong**`, ` ``literal`` ` | Text, the markup is hidden |
| Bullet and enumerated lists | Lists, nested. `Tab` in an item puts it in the item before it, `Shift+Tab` takes it out, with the empty lines a nested list needs |
| `note`, `warning`, `tip`, ..., `video` | A card, the content is edited as a document; `video` shows its address and its caption |
| `tab-set` and `tab-item` | Tabs: a click on a title shows its tab, the title and the content are edited in place; `+` adds a tab, an emptied tab is removed with `Backspace` |
| Roles | A chip with the name of the role and its title, or its target |
| Links | Their text |
| | The `−` at the left of a label removes it |
| Grid tables, simple tables, `table` and `list-table` | Tables: type in the cells, `Tab` moves between them, `Enter` adds a row, `Backspace` in an empty row removes it |
| Tables with cells that span columns or rows, `csv-table` | Their source, in a box |
| `code`, `code-block`, `sourcecode`, `shell` | A code editor, coloured by the language of the argument; the indentation of the source is not shown, and is added to what is written |
| `carousel`, `collapsible`, `card`, `grid`, `flex`, `figure`, `video`, `only`, ... | A box with their name, caption and options, the content is edited as a document |
| `rst-class` | A box with its name and the class to type, no content |
| `image`, `figure`, `svg` | The image, below its path, with its `:width:`, `:scale:` and `:align:`; the path is relative to the file, or to the folder of `conf.py` when it starts with `/`. The drawing of `svg` is shown as an image: its links and its effects are the ones of the built page |
| `rubric` | A heading that is not a section: its title, of the size of its `:heading-level:` |
| Other directives | A box with their name, caption and options, the content as source |
| Literal blocks | Their text as it is written; the `::` alone on its line is hidden |
| Comments, targets with a link, definition and field lists | Their source, in a box |

## Development

```
make test   # node --test, the model and the edits; unittest, the previews
```
