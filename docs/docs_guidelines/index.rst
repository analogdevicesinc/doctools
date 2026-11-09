.. _docs_guidelines:

Documentation guidelines
========================

The documentation is written in reStructuredText (reST) and built with Sphinx
and Doctools for HTML and PDF output. For installation and build commands,
see :ref:`install` and :ref:`cli`.

Sections marked :badge:`sphinx` work in any Sphinx documentation.
Sections marked :badge:`doctools` require ``adi_doctools``.
See :ref:`role` and :ref:`directive` for all Doctools roles and directives,
and :ref:`advanced-configuration` for configuration and extension development.

For the full core reference, see Sphinx's
:external+sphinx:doc:`Roles <usage/restructuredtext/roles>` and
:external+sphinx:doc:`Directives <usage/restructuredtext/directives>`, and the
:external+sphinx:doc:`reST primer <usage/restructuredtext/basics>`.

Writing a page
--------------

A ``.rst`` file is a reStructuredText document. In Sphinx, its source path
without the extension is its document name (*docname*):
``user-guide/setup.rst`` becomes ``user-guide/setup``. Document names are used in links and navigation.

A page has a title, paragraphs, and sections, for example:

.. code-block:: rst

   .. _board-setup:

   Board setup
   ===========

   Connect and configure the evaluation board.

   Prerequisites
   -------------

   * A USB cable.
   * The board's power supply.

   Procedure
   ---------

   #. Connect the cable.
   #. Apply power.

Headings
~~~~~~~~

Headings are marked by repeated characters. By convention, ``=`` is used
for titles and ``-`` for subtitles. The underline must be at least as long
as the source heading.
A heading creates a section and appears in the page's table of contents;
:external+sphinx:rst:dir:`rubric` creates a visual heading without a section.

Roles and directives
~~~~~~~~~~~~~~~~~~~~

A *role* applies to inline text: ``:kbd:`Control-C``` marks a keyboard
shortcut, and ``:ref:`board-setup``` creates a cross-reference.
A *directive* introduces a block, with this structure:

.. code-block:: rst

   .. code-block:: python
      :caption: Read a sample

      sample = read_adc()
      print(sample)

Here ``code-block`` is the directive, ``python`` is its argument,
``caption`` is an option, and the indented code is its content.
The available arguments, options, and content depend on the directive.
Doctools adds the roles and directives listed at :ref:`role` and :ref:`directive`.

Indentation and blank lines
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Indent directive options and content by three spaces. For lists, align
continuation paragraphs and nested blocks with the first character of the
item's text: two spaces for ``*``, three for ``#.``.
Keep a blank line before the content of a directive, between block elements,
and after a nested block before returning to the outer indentation:

.. code-block:: rst

   #. Configure the device.

      * Select the interface.
      * Set the sample rate:

        .. code-block:: bash
           :caption: Set the sample rate to 1 MSPS

           iio_attr -c ad4052 voltage0 sampling_frequency 1000000

Source line width
~~~~~~~~~~~~~~~~~

Wrap text to fewer than 80 columns, but keep URLs and reference roles on
one line. Preserve the language's own indentation inside code blocks,
offset by the directive's three spaces.

For **neovim**, you can visually select the block with ``Ctrl+V``, then wrap
with ``gq``.

For **vscode**, you can install
`Rewrap <https://marketplace.visualstudio.com/items?itemName=stkb.rewrap>`__,
select the block and wrap with ``Alt+Q``.

As a last resort, you can use the :code:`fold` command to break the lines of
imported text while respecting word-breaks:

.. code:: bash

   fold -sw 80 imported.txt > imported.rst

Do not apply it to reST directives, tables, or code.

Inline markup and roles :badge:`sphinx`
---------------------------------------

reST provides ``*italic*``, ``**bold**``, and double backticks for
``inline code``. Sphinx adds the following inline roles:

.. list-table:: Common inline roles
   :header-rows: 1
   :widths: 25 40 35

   * - Use
     - Source
     - Result
   * - :external+sphinx:rst:role:`Command <command>`
     - ``:command:`make```
     - :command:`make`
   * - :external+sphinx:rst:role:`Program <program>`
     - ``:program:`python```
     - :program:`python`
   * - :external+sphinx:rst:role:`Path with a variable part <file>`
     - ``:file:`/sys/{device}/config```
     - :file:`/sys/{device}/config`
   * - :external+sphinx:rst:role:`Replaceable command argument <samp>`
     - ``:samp:`adoc serve -p {port}```
     - :samp:`adoc serve -p {port}`
   * - :external+sphinx:rst:role:`Keyboard shortcut <kbd>`
     - ``:kbd:`Control-C```
     - :kbd:`Control-C`
   * - :external+sphinx:rst:role:`UI label <guilabel>`
     - ``:guilabel:`Apply```
     - :guilabel:`Apply`
   * - :external+sphinx:rst:role:`Menu path <menuselection>`
     - ``:menuselection:`File --> Open```
     - :menuselection:`File --> Open`
   * - :external+sphinx:rst:role:`Abbreviation <abbr>`
     - ``:abbr:`ADC (analog-to-digital converter)```
     - :abbr:`ADC (analog-to-digital converter)`
   * - :external+sphinx:rst:role:`Inline code <code>`
     - ``:code:`value = 1```
     - :code:`value = 1`
   * - :external+sphinx:rst:role:`Inline mathematics <math>`
     - ``:math:`f_s = 1/T```
     - :math:`f_s = 1/T`

Other roles include :external+sphinx:rst:role:`dfn` for defining a term,
:external+sphinx:rst:role:`regexp` for a regular expression,
:external+sphinx:rst:role:`makevar` for a Make variable,
:external+sphinx:rst:role:`manpage` for a manual page, and
:external+sphinx:rst:role:`mimetype` or :external+sphinx:rst:role:`mailheader`
for protocol text. :external+sphinx:rst:role:`pep`,
:external+sphinx:rst:role:`rfc`, :external+sphinx:rst:role:`cve`, and
:external+sphinx:rst:role:`cwe` link to standards and security entries.

Inline :external+sphinx:rst:role:`code` is not syntax-highlighted by default.
Define a language role when needed:

.. code-block:: rst

   .. role:: python(code)
      :language: python

   Use :python:`len(samples)` to count samples.

The :external+sphinx:ref:`substitutions <default-substitutions>`
``|version|``, ``|release|``, and ``|today|`` come from Sphinx
configuration. Use ``version`` for the short version and ``release``
for the full release string.

.. _local_refs:

Links and references :badge:`sphinx`
------------------------------------

Use a URL for a web resource and ``ref`` for a labeled page, section, or
object.

External URLs
~~~~~~~~~~~~~

An ordinary web link has the form ```link text <https://example.com>`__``:

.. code-block:: rst

   Download the software from `Analog Devices <https://www.analog.com>`__.

For source-code links, prefer the Doctools :ref:`role git` roles rather than
hard-coding a GitHub URL. They support repository and revision selection.

Page references
~~~~~~~~~~~~~~~

Add a label above the page title:

.. code-block:: rst

   .. _board hardware-guide:

   Hardware guide
   ==============

Reference the label with ``ref``:

.. code-block:: rst

   See :ref:`board hardware-guide`.
   See :ref:`Hardware setup <board hardware-guide>`.
   See :ref:`docs_guidelines`.

Without explicit link text, Sphinx uses the page title.

Section references
~~~~~~~~~~~~~~~~~~

Put a label immediately before a section heading, separated by a blank line:

.. code-block:: rst

   .. _board-setup connections:

   Connections
   ~~~~~~~~~~~

   Connect the board's USB interface.

   See :ref:`board-setup connections`.
   See :ref:`Wiring the board <board-setup connections>`.

The first reference takes its text from the heading; the second supplies its
own. Labels are global across the documentation, not scoped to a file.
Use a descriptive context and a lower-case, hyphen-separated topic, such as
``board-setup connections``, rather than a generic label like ``setup``.
Add labels to sections that other pages or repositories may need to link to.

Labels can also precede other content. For a target without a section title,
supply explicit link text in ``ref``.

.. attention::

   Do not break reference roles between lines!
   Even though Sphinx allows breaking lines inside the reference role,
   it makes pattern matching hard.

Numbered references
~~~~~~~~~~~~~~~~~~~

Use :external+sphinx:rst:role:`numref` for a numbered figure, table, or code
listing. The target needs a caption and a label or ``name``:

.. code-block:: rst

   .. figure:: schematic.svg
      :name: board-setup schematic
      :alt: ADC connected to the controller over SPI

      Board connections.

   See :numref:`board-setup schematic`.
   See :numref:`Wiring diagram %s <board-setup schematic>`.

Enable ``numfig = True`` in ``conf.py``. Numbering is global by default;
Doctools' ``numfig_per_doc = True`` restarts it for each document. See
:ref:`advanced numbering` for prefix formats and the interaction with numbered
toctrees. For equations, use the ``eq`` role described under :ref:`math`.

Lists :badge:`sphinx`
---------------------

Unordered lists use ``*`` or ``-`` and ordered lists ``#.``.

Child items must be aligned with the first letter of the parent item; that means,
2 spaces for unordered lists and 3 spaces for ordered lists, for example:

.. code-block:: rst

   #. Parent ordered item.

      * Child unordered item.

        #. Child ordered item.
        #. Child ordered item.

Renders as:

#. Parent numbered item.

   * Child unordered item.

     #. Child ordered item.
     #. Child ordered item.

Code :badge:`sphinx`
--------------------

Prefer :external+sphinx:rst:dir:`code-block` to ``code`` directives, because
code-blocks have more options, such as showing line numbers and emphasizing
lines.

For example,

.. code:: rst

   .. code-block:: python
      :linenos:
      :emphasize-lines: 2

      def hello_world():
          string = "Hello world"
          print(string)

Renders as:

.. code-block:: python
   :linenos:
   :emphasize-lines: 2

   def hello_world():
       string = "Hello world"
       print(string)

Preserve the original code indentation, just offset it by :green:`3 spaces`.

Use :external+sphinx:rst:dir:`literalinclude` to display code directly from
a source file:

.. code-block:: rst

   .. literalinclude:: examples/capture.py
      :language: python
      :caption: Capture samples
      :lines: 10-25

The path is relative to the document. For interactive command sessions with
prompts and output, see Doctools' :ref:`directive shell`.

Admonitions :badge:`sphinx`
---------------------------

Admonitions mark notes, tips, warnings, and other information:

.. code-block:: rst

   .. warning::

      Disconnect power before changing the jumpers.

   .. admonition:: Before you start

      Check the board revision.

   .. seealso::

      :ref:`Installation <install>`

.. _guide-version-notes:

Version history :badge:`sphinx`
--------------------------------

These directives record when a feature was added, changed, deprecated, or
removed. For deprecations and removals, name the replacement:

.. code-block:: rst

   .. version-added:: 1.23
      Added streaming capture.

   .. version-changed:: 1.24
      Capture now returns timestamps.

   .. version-deprecated:: 1.25
      Use streaming capture instead of polling.

   .. version-removed:: 2.0
      Polling was removed; use streaming capture.

See Sphinx's :external+sphinx:rst:dir:`version-added` for details.

Images :badge:`sphinx`
----------------------

For real photos, use the ``figure`` directive. It enables a link to open
the image (or *click-to-zoom* with JavaScript enabled). For PDF LaTeX builds,
it also properly aligns the figure in the page without relying on the image
width.

Use ``image`` for logos, symbols, and instances where you don't want the image
resized. Provide alternative text for both. For example:

.. code-block:: rst

   .. figure:: schematic.svg
      :alt: ADC connected to the controller over SPI
      :width: 80%
      :name: adc-connections

      Connections between the ADC and controller.

For diagrams, or any vector, prefer the SVG format for images, and save it as
*Optimized SVG* in `Inkscape <https://inkscape.org/>`__ to use less space.

Store them in a hierarchy; do not use ``images`` subdirectories. The idea is
to have simpler relative paths, for example:

.. code:: rst

   .. image:: ad2234_sdz_schematic.svg

Or even simpler ``schematic.svg``, if already in an ``ad2234`` directory.

Instead of overcomplicated paths like:

.. code:: rst

   .. image:: ../../project/images/ad2234_sdz/ad2234_sdz_schematic.svg

In general, this avoids dangling artifacts and keeps the documentation simple.

The following image classes are provided by Doctools:

* ``no-background`` removes the default white image background in dark mode.
* ``only-light`` and ``only-dark`` select theme-specific assets.
* ``only-print`` and ``only-screen`` select print versus screen presentation.

Set them with the directive's ``class`` option:

.. code-block:: rst

   .. image:: logo.svg
      :alt: Project logo
      :class: no-background

   .. image:: screenshot-light.png
      :alt: Capture window in the light theme
      :class: only-light

   .. image:: screenshot-dark.png
      :alt: Capture window in the dark theme
      :class: only-dark

For Git LFS setup, see :ref:`git-lfs`. :ref:`serve lfs` describes how local
previews fetch LFS-backed images.

Reusing content :badge:`sphinx`
--------------------------------

Use ``include`` to insert shared reST at a specific location. Unlike
``toctree``, it makes the included text part of the current document rather
than linking to a separate page:

.. code-block:: rst

   .. include:: ../common/support.rst

The path is relative to the including file. The included headings must fit
the surrounding hierarchy, and any labels must remain unique in the build.
Do not add an include-only fragment to a toctree as well. See
:ref:`advanced shared-hdl` for the shared HDL support and information sections.

Use ``literalinclude`` for displaying a file's source without parsing it,
and :external+sphinx:rst:role:`download` to offer the file itself:

.. code-block:: rst

   :download:`Download the sample data <sample/fruits.csv>`

.. _math:

Math :badge:`sphinx`
--------------------

Use :external+sphinx:rst:dir:`math` for a displayed equation and
:external+sphinx:rst:role:`math` inline. A labeled ``math`` block can be
referenced with ``:eq:`label```:

.. code-block:: rst

   .. math::
      :label: sample-period

      T = \frac{1}{f_s}

   The sample period follows :eq:`sample-period`.

.. _tables:

Tables :badge:`sphinx`
----------------------

Prefer list tables and imported CSV tables (using the file option), because
they are faster to create, easier to maintain, and the 80 column-width rule
can be respected with list tables.

Only use :external+sphinx:ref:`Grid Tables <rst-tables>` if strictly
necessary, since they are hard to update.

For side-by-side links or content, use :ref:`cards and grids <guide-layout>`
rather than tables.

List tables
~~~~~~~~~~~

Prefer `list-table <https://docutils.sourceforge.io/docs/ref/rst/directives.html#list-table>`__
for hand-maintained data. Each outer item is a row; each inner item is a cell.
Every row must contain the same number of cells. ``header-rows`` identifies column headers, ``stub-columns``
identifies row headers, and ``widths`` sets relative column widths:

.. code-block:: rst

   .. list-table:: Fruits
      :name: fruit-table
      :header-rows: 1
      :stub-columns: 1
      :widths: 25 75

      * - Fruit
        - Color
      * - Papaya
        - Orange inside, green to yellow outside.
      * - Rambutan
        - Red, with soft spines.

.. list-table:: Fruits
   :name: fruit-table
   :header-rows: 1
   :stub-columns: 1
   :widths: 25 75

   * - Fruit
     - Color
   * - Papaya
     - Orange inside, green to yellow outside.
   * - Rambutan
     - Red, with soft spines.

Cells can contain inline roles, references, paragraphs, and lists; indent
nested content under the cell's text. A list table cannot span cells.

CSV tables
~~~~~~~~~~

Use `csv-table <https://docutils.sourceforge.io/docs/ref/rst/directives.html#csv-table>`__
for imported or generated data.
``file`` is relative to the source document; ``header-rows: 1`` uses the file's
first row as headings:

.. code-block:: rst

   .. csv-table:: Fruits from a file
      :file: sample/fruits.csv
      :header-rows: 1
      :widths: 25 75

.. csv-table:: Fruits from a file
   :file: sample/fruits.csv
   :header-rows: 1
   :widths: 25 75

:download:`Download the CSV <sample/fruits.csv>`. For inline CSV, use
``header`` to supply column names separately:

.. code-block:: rst

   .. csv-table:: Fruits
      :header: "Fruit", "Color"

      "Papaya", "Orange, yellow"
      "Rambutan", "Red"

Quote cells containing commas and double embedded quotation marks according
to CSV rules. Options such as ``delim`` and ``encoding`` handle other inputs.

Simple and grid tables
~~~~~~~~~~~~~~~~~~~~~~

:external+sphinx:ref:`Simple tables <rst-tables>` work for short text. Blank
lines separate multiline rows; empty first-column cells need special care.
Use list tables for longer content:

.. code-block:: rst

   ========  ==============
   Fruit     Color
   ========  ==============
   Papaya    Orange, yellow
   Rambutan  Red
   ========  ==============

Grid tables support multiline cells and row/column spans. The ``=`` border
separates the header from the body. Use
`table <https://docutils.sourceforge.io/docs/ref/rst/directives.html#table>`__
to add a caption, name, and widths:

.. code-block:: rst

   .. table:: Fruits
      :name: grid-fruits
      :widths: 25 75

      +----------+----------------+
      | Fruit    | Color          |
      +==========+================+
      | Papaya   | Orange, yellow |
      +----------+----------------+
      | Rambutan | Red            |
      +----------+----------------+

See :external+sphinx:ref:`Grid tables <rst-tables>` for the full syntax.

HTML, PDF, and long tables
~~~~~~~~~~~~~~~~~~~~~~~~~~

* Give tables a caption and a header row; do not simulate headers with bold
  text alone. Use ``name`` and ``numref`` when numbering is enabled.
* Relative ``widths`` do not guarantee identical HTML and PDF wrapping.
* For multipage PDF tables, add ``:class: longtable``. Sphinx's
  :external+sphinx:rst:dir:`tabularcolumns` sets LaTeX column specifications
  for the next table; it does not control HTML widths.
* A table row cannot span PDF pages. Split rows that are too tall to fit.
* Do not use ``raw:: html`` tables for normal documentation: they disappear
  from PDF and text output.

For example, a LaTeX-specific width override for an imported long table is:

.. code-block:: rst

   .. tabularcolumns:: |p{2cm}|p{9cm}|

   .. csv-table:: Fruit catalog
      :file: sample/fruits.csv
      :header-rows: 1
      :widths: 20 80
      :class: longtable

To tune styling, the following classes are available:

* **bold-header**: Make the header bold.
* **bold-first-column**: Make the first column bold.

.. _guide-layout:

Grids, card, flex, tabs, collapsible :badge:`doctools`
------------------------------------------------------

Use :ref:`directive grid`, :ref:`directive card`, :ref:`directive flex`,
:ref:`directive tabs`, :ref:`directive collapsible` to organize content.
For example using cards:

.. code-block:: rst

   .. grid::
      :columns: 2

      .. card:: Custom roles
         :ref: role

         Links, colors, and badges.

      .. card:: Custom directives
         :ref: directive

         Layout, shell sessions, and media.

Renders as:

.. grid::
   :columns: 2

   .. card:: Custom roles
      :ref: role

      Links, colors, and badges.

   .. card:: Custom directives
      :ref: directive

      Layout, shell sessions, and media.

Navigation and page order :badge:`sphinx`
-----------------------------------------

:external+sphinx:rst:dir:`toctree` connects pages into the documentation
hierarchy. Adding a file alone does not put it in the sidebar or give it a
place in PDF output: add it to the toctree of its parent page.

Entries are source document names without extensions, relative to the
containing file. Sphinx uses each page's title unless you supply an alias:

.. code-block:: rst

   .. toctree::
      :maxdepth: 2
      :caption: The following user guides are available:

      hardware-guide
      Software setup <software-guide>

Use ``maxdepth`` to limit displayed section levels, ``titlesonly`` for page
titles alone, and ``numbered`` on a top-level tree for section numbering.
``glob`` matches document names; ``hidden`` records hierarchy without an in-page
list. :external+sphinx:ref:`contents <rst-directives>` instead creates a list of
headings in the current page; it does not connect documents.

Placement in HTML and PDF
~~~~~~~~~~~~~~~~~~~~~~~~~

The placement of a ``toctree`` within a page determines where content is
injected when generating a PDF.

A recommended usage looks like:

.. code:: rst

   My evaluation board
   ===================

   User guides
   -----------

   To simplify and speed up bring-up, a ... .
   They describe how ... .

   .. toctree::
      :caption: The user-guides are provided at:

      hardware_guide
      software_guide

   Help and support
   ----------------

   ...

In HTML output, this renders as:

.. code:: markdown

   # My evaluation board

   ## User guides

   To simplify and speed up bring-up, a ... .
   They describe how ... .
   The user-guides are provided at:

   * Hardware Guide
   * Software Guide

   ## Help and support

   ...

For PDF output, the caption ``The user-guides are provided at:`` is
intentionally not rendered. This allows the caption to contextualize the list
visually in HTML, and not on the PDF, where no list is rendered, but the actual
sections.

.. code:: markdown

   # My evaluation board

   ## User guides

   ### Hardware Guide

   <Hardware guide content>

   ### Software Guide

   <Software guide content>

   ## Help and support

   ...

A common but :red:`incorrect` usage is placing a hidden ``toctree`` away from
its related section:

.. code:: rst

   My evaluation board
   ===================

   Help and support
   ----------------

   To get help ...

   .. toctree::
      :hidden:

      hardware_guide
      software_guide

In PDF output, this results in the user guides added **under** an
:red:`unrelated` section:

.. code:: markdown

   # My evaluation board

   ## Help and support

   To get help ...

   ### Hardware Guide

   <Hardware guide content>

   ### Software Guide

   <Software guide content>

Captions and previews
~~~~~~~~~~~~~~~~~~~~~

Captions on top-level ``toctree`` entries also appear in the sidebar. Use them
to group related documentation areas logically—such as ``Software``,
``Tutorials``, ``API Usage``, or ``Contributing``, rather than as explanatory
phrases like ``Tutorials are provided at:``.

You can think of top-level ``toctree`` captions as book volumes. For example,
the :git-documentation:`/` uses them to organize areas like evaluation boards,
university programs, and Linux drivers.

``toctree-preview`` :badge:`doctools` adds page descriptions below the
links, using the :ref:`description` directive. Only the first level is
shown, regardless of ``maxdepth``.

It is useful when you have a list of projects and want to provide a quick
overview.

To tune styling, the following class is available:

* ``grid``: Turns each top-level table of contents item into a card, displaying
  up to three columns instead of a long list.

.. code-block:: rst

   .. toctree::
      :class: grid
      :maxdepth: 1

      hardware-guide
      software-guide

For section-level styling such as ``hero``, see :ref:`theme rst-class`.
For whole-page metadata such as ``body-class``, see :ref:`theme metadata`.

.. _inter-refs:

External references :badge:`sphinx`
-----------------------------------

:external+sphinx:ref:`Intersphinx <ext-intersphinx>` resolves
references to other Sphinx builds. Each configured build supplies an
``objects.inv`` inventory of its labels, pages, and other reference targets.
The inventory name selects which documentation to search:

.. code-block:: rst

   :external+hdl:ref:`spi_engine control-interface`
   :external+hdl:ref:`Control interface <spi_engine control-interface>`

These are the external equivalents of local ``ref`` links.
Other reference types, such as ``term``, ``envvar``, and ``numref``,
can also use inventories. Check build warnings for unresolved targets.
To inspect the labels and document names available in an inventory:

.. code-block:: bash

   python3 -m sphinx.ext.intersphinx \
     https://analogdevicesinc.github.io/hdl/objects.inv

Use the explicit ``external+inventory`` form rather than the older
``ref-inventory`` shorthand. Sphinx 8 also accepts inventory-qualified
targets such as ``:ref:`hdl:label```, allowing local references to take
precedence. Use the explicit form for repositories that still need Sphinx 7;
:ref:`adoc <cli>` adapts references when assembling custom documents.

.. _in-org-ref:

In-organization references :badge:`doctools`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Doctools configures inventories for organization repositories through
``interref_repos`` in ``conf.py``:

.. code-block:: python

   interref_repos = ['hdl', 'no-OS', 'pyadi-iio/main']

A suffix such as ``/main`` selects a build below that repository's root.
For example, ``pyadi-iio/main`` selects its ``main/`` documentation.
Use the same mechanism for a published version such as ``/v1.1``; see
:ref:`deploy-versioned`.

The base URL defaults to ``https://analogdevicesinc.github.io/``.
Override it with ``interref_uri`` in ``conf.py`` or the
``ADOC_INTERREF_URI`` environment variable; a local path such as ``../../``
can also be used.

With ``interref_local = True``, Doctools additionally looks for local
documentation alongside the current repository, for example:

.. code-block:: text

   /data/work
   ├── my-repo-0/doc/sources
   ├── my-repo-1/docs
   └── my-repo-2/doc

Repository source paths are resolved through :git-doctools:`adi_doctools/lut.py`.
For private inventories and authentication, see :ref:`private-org-ref`.
For a target with a different URL layout, configure an explicit mapping as
described below.

.. _out-org-ref:

Third-party references :badge:`sphinx`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Enable ``sphinx.ext.intersphinx`` in ``extensions`` and add an entry to
``intersphinx_mapping`` in ``conf.py``. Each entry pairs an inventory
name with the documentation base URL and the inventory location; ``None``
uses ``objects.inv`` under that URL:

.. code-block:: python

   intersphinx_mapping = {
       'sphinx': ('https://www.sphinx-doc.org/en/master', None),
   }

For example, this mapping makes
``:external+sphinx:ref:`rst-primer``` available.
The same mechanism works for an organization repository with a custom URL
or a build not covered by ``interref_repos``.

Before publishing
-----------------

* Preview with :ref:`serve` and fix build warnings, including missing
  references, invalid syntax, and unlisted pages.
* Check that example commands work, and that images have alt text.
* Use :external+sphinx:rst:dir:`only` (e.g. ``only:: html`` or ``only:: latex``)
  only when the HTML and PDF really need different content.
* Extension setup, custom JavaScript, version configuration, wiki imports,
  and repository-specific quirks are described in :ref:`advanced-configuration`.

Reference and advanced guide
----------------------------

.. toctree::
   :caption: The following sections describe Doctools custom tools and advanced usage:
   :maxdepth: 1

   roles
   directives
   advanced
