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

It prints the address of the page, to open in the browser: it does not open
it.

`adoc serve --gui` does the same from Doctools, with the documentation server
started: `-d`, `--port` and `--sparse` are the ones of the server, the editor
takes port 8300 or the next free one.

It follows Harmonic, the design system of ADI, as the Doctools theme does: its
colours, and its fonts (Inter, Barlow, JetBrains Mono) when they are installed
or fetched for the theme (`ci/fetch-fonts.sh`).

The arrows at the start of the tab of the source, or `F4`, swap the source and the page,
for who writes reStructuredText as it is: the source takes the middle, in the
place of the page, and the page takes the tab, which is named *Page* then.
The caret, or the selection, is where it was in the other one. Both can be
written in, the toolbar works on the one that is, and they scroll together. One
scrollbar, at the right edge of the window, is the one of both.
The browser keeps the choice.

*Fold text*, in the menu of the right click of the source, or `Alt+Q`, fills
again the lines of the paragraph of the caret, or of the paragraphs that are
selected, to fewer than 80 columns: the lines that are too long are broken,
the short ones are joined. The lines are indented as the text of their
paragraph is: by the three spaces of the content of a directive, by the
bullet or the enumerator of a list item. Only the paragraphs are folded:
the code, the tables, the options, the titles, the line blocks, the
definitions, the fields, the footnotes and the comments are as they are. A
role, a link or a literal is kept on one line, and no line starts with what
would be markup there. `Shift` and the right click show the menu of the
browser.

In the source, and in the code of a code directive, `Alt+Shift+Up` and
`Alt+Shift+Down` add a caret on the line above or below, at the same column:
what is typed is written at all of them, as for the rows of a table. `Escape`
leaves only the first.

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
    coloured from the parsed document. The block of the caret of the page and the
    last edit are highlighted, not the block that is written in the source. It scrolls with the document, in both directions.
  - *Live view*: the built page of the file, from the documentation server;
    the tab is there while the server runs.
    It scrolls with the document, in both directions, and a link followed in
    it opens the file of that page.

The right click opens a menu: bold, italic, literal, what
can be added there (a label to a heading, an option to a directive, a tab).
Shift and the right click opens the menu of the browser.

The spelling and grammar mistakes of the prose are underlined, red and blue,
from LanguageTool. The selector at the right of the toolbar picks where it
runs: *Local* (LanguageTool on this machine, needs Java; choosing it offers
to install it when it is not, `pip install language_tool_python`, which takes
about 2 minutes; the first check starts it and takes a few seconds), *Cloud* (the public service of
LanguageTool: the text is sent to languagetool.org, 20 checks a minute) or
*Off*. The pointer on one shows what it is and what corrects it, in a card;
the right click on one shows its
corrections, to choose one; a word can be added to the words that are not mistakes, kept by
the browser.

A check is work, for this machine when it runs here, so it is spared: only
what is shown of the page is checked, with about a screen around it, a
second and a half after the last change or once the scroll stops, one text
at a time with a rest between them, and not while the window is not looked
at. A text is checked once; a check that failed is asked again 30 seconds
later.

The text typed in a paragraph is wrapped in the source to fewer than 80
columns, as the guidelines ask: the new line is indented as the text of the
paragraph (two spaces in a `*` item, three in a `#.` item or a directive),
and a role, a link or a literal is kept on one line. Only the line being
typed is wrapped, the lines that are already there are left as they are.

Changes are saved to the file as you type, and changes made to the file by
other programs are loaded. The file is saved without spaces at the end of its
lines: the page keeps the ones it needs while it is typed in, the space
before the next word, and a file that still has some loses them before a
change of it is staged. The page is as wide as it is read well when the
window allows, and only narrower to leave their place to the panels that are
shown. The files float at the left of the window and the
side pane at the right of the page; the cross in each hides it, and a button in its corner, below the
toolbar, shows it again; for the side pane, a button for each of its tabs,
to go right to it. The top bar switches between the light and the dark
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
  `Tab` accept, `Escape` closes. It is the same in the source, at its caret,
  as are the options of a directive.
- The pointer over a role shows what it points to, in a card: where a role
  that makes an address leads, or that its target is not found. For a reference into a
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
the first build of a large documentation much faster. A large documentation,
of more than 150 pages, is not built whole without it being asked for: *Build*
then offers to choose the folders first, or to build all of it, and
`adoc-gui --serve` does not build at once, unless folders were chosen
before. *Build all* clears the
selection. The selection is kept by the browser, per documentation.

What is in the folders that are not built is still referenced: as the build
does, the editor finds it in the inventory of the published pages of the
repository, the one that `repository` of `conf.py` names. It is merged into
what the project has: a `:ref:`, a `:doc:` or another reference to it is
found, with its title and its text read from the published page, and it is
offered when a role is completed and in *References*, as if all was built.

The file is not saved, and so not built, while a role or a directive is being
completed, nor while the directive of the caret is not finished: a note
without its content yet, an image without its path, an option without its
value. The half-written markup would only be reported as an error, as
"Content block expected". It is saved once the completion is accepted, the
directive has what it needs, or the caret or the focus leaves it; and in any
case when nothing is typed for half a minute.

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
- `web/links.js` reads the links, of all their kinds, and writes them; `web/subs.js` reads the substitutions.
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
| Paragraphs, `*emphasis*`, `**strong**`, ` ``literal`` ` | Text, the markup is hidden. The markup that is closed is the last one that opens, after a space and before a letter: in ``The ``sun is very ``pretty`` `` the literal is `pretty`, as it was typed, and the first mark is text; reStructuredText takes all from the first mark, so that mark is to be closed, or removed |
| Substitutions | `\|name\|` in the text: its name, between its bars; `\|name\|_` is a link too. The pointer on one shows what takes its place, from `.. \|name\| replace:: text` in the file, or that nothing in the file says it. The definition is a line of the page: the name, and the text that takes its place, with its inline markup. *Role* in the toolbar lists the substitutions of the file, *Directive* has `replace` to define one. The other substitutions (an image, a date, a character) are shown as their source |
| Line blocks | The lines that start with `\| `: each is a line of the page, their breaks are kept, and the spaces after the bar are its indentation. `Enter` makes a line, and leaves the block from its empty last line; `Backspace` at the start of a line joins it to the one before |
| Bullet and enumerated lists | Lists, nested. `Tab` in an item puts it in the item before it, `Shift+Tab` takes it out, with the empty lines a nested list needs |
| `note`, `warning`, `tip`, ..., `video` | A card, the content is edited as a document; `video` shows its address and its caption |
| `tab-set` and `tab-item` | Tabs: a click on a title shows its tab, the title and the content are edited in place; `+` adds a tab, an emptied tab is removed with `Backspace` |
| Roles | A chip with the name of the role and its title, or its target. A letter or a digit typed right after a role is parted from it by a space, which the role needs to be one. `Backspace` in a role with nothing left in it removes its two quotes, then its name |
| Links | Their text: `` `text <address>`_ ``, `` `text <address>`__ ``, an address as it is, and the links whose address is elsewhere in the document (`` `text`_ `` with `.. _text: address`, `` `text`__ `` with the next `__ address`). The pointer on one shows where it leads, `Ctrl` and a click open it. *Link* in the toolbar, `Ctrl+K` or the right click change its text and its address, below it, or remove it; with text selected they make it a link, as an address pasted over it does. *References*, for a new link, shows the references instead, searched for its text: the one that is clicked is written around the selection. A new link is anonymous (`__`): its text does not name anything, so two links can have the same one. For a link whose address is elsewhere, the address is shown, with where it is written and a button to go there |
| | The `−` at the left of a label removes it |
| Grid tables, simple tables, `table` and `list-table` | Tables: type in the cells, `Tab` moves between them, `Enter` adds a row, `Backspace` in an empty row removes it |
| Tables with cells that span columns or rows, `csv-table` | Their source, in a box |
| `code`, `code-block`, `sourcecode`, `shell` | A code editor, coloured by the language of the argument; the indentation of the source is not shown, and is added to what is written |
| `carousel`, `collapsible`, `card`, `grid`, `flex`, `figure`, `video`, `only`, ... | A box with their name, caption and options, the content is edited as a document |
| `rst-class`, `description` | A box with its name and the class, or the description of the page, to type, no content |
| `image`, `figure`, `svg` | The image, below its path, with its `:width:`, `:scale:` and `:align:`; the path is relative to the file, or to the folder of `conf.py` when it starts with `/`. The drawing of `svg` is shown as an image: its links and its effects are the ones of the built page. While its path is written the image is left as it is, and looked for once the caret leaves the path; one that is not found is said once, by the build when it runs |
| `rubric` | A heading that is not a section: its title, of the size of its `:heading-level:` |
| Other directives | A box with their name, caption and options, the content as source |
| Literal blocks | Their text as it is written; the `::` alone on its line is hidden |
| Comments, targets with a link, definition and field lists | Their source, in a box |

## Development

```
make test   # node --test, the model and the edits; unittest, the previews
```
