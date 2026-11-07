.. _docs_guidelines:

Documentation guidelines
========================

The documentation is written in reStructuredText (reST) and built with Sphinx
and Doctools. This page explains how to write pages, add links, code, images,
and tables, and organize the navigation.

Sections marked :badge:`sphinx` work in any Sphinx documentation.
Sections marked :badge:`doctools` require ``adi_doctools``.
See :doc:`roles` and :doc:`directives` for all Doctools roles and directives,
and :doc:`advanced` for configuration and extension development.

For the full upstream reference, see Sphinx's
:external+sphinx:doc:`Roles <usage/restructuredtext/roles>` and
:external+sphinx:doc:`Directives <usage/restructuredtext/directives>`, and the
:external+sphinx:doc:`reST primer <usage/restructuredtext/basics>`.

Writing a page
--------------

Start with a title and a short paragraph saying what the page is about.
Split the content into sections, and use numbered lists for step-by-step
instructions, for example:

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

Use a consistent heading hierarchy within each file; do not skip levels.
Underline headings with at least as many characters as the source title.
Wrap prose to fewer than 80 columns. Do not wrap inside a reference role or
a URL. Code examples should retain their language's own indentation.

For directives, lists, the indentation rule of
thumb is to align with the content to the previous line, never indent less than
the marker, for example ``.. note::`` 3 spaces, ``#. Step`` 3 spaces, ``* Item`` 2 spaces.
Leave a blank line between the directive options and its content, as well as a blank line
to close the content block:

.. code-block:: rst

   #. Configure the device.

      * Select the interface.
      * Set the sample rate:

        .. code-block:: bash
           :caption: Set the sample rate to 1 MSPS

           iio_attr -c ad4052 voltage0 sampling_frequency 1000000

Inline markup and roles :badge:`sphinx`
------------------------------------------------

Roles format a short piece of text inside a paragraph, with the syntax
``:role:`content```; see Sphinx's
:external+sphinx:doc:`roles reference <usage/restructuredtext/roles>`. Plain
reST also provides ``*italic*``, ``**bold**``, and double backticks for
``inline code``.

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
---------------------------------------------

Use references instead of hard-coded HTML URLs for content in the same
project. Sphinx checks them and reports missing targets. See
:external+sphinx:doc:`Cross-references <usage/referencing>`.

.. code-block:: rst

   .. _device-configuration:

   Device configuration
   --------------------

   See :ref:`device-configuration`.
   See :ref:`Configure the device <device-configuration>`.
   Read :doc:`Installation <../install>`.
   Visit `Analog Devices <https://www.analog.com/>`__.

* :external+sphinx:rst:role:`ref` points to a label, normally placed immediately
  before a heading. Labels are unique throughout the project; use descriptive
  lower-case names.
* :external+sphinx:rst:role:`doc` points to a source document **without** its
  extension. Relative paths start at the current document; ``/`` starts at the
  source root.
* :external+sphinx:rst:role:`download` links a downloadable source file, for
  example ``:download:`Fruit list <sample/fruits.csv>```.
* :external+sphinx:rst:role:`numref` links numbered figures, tables, and code
  listings with captions and names. Enable ``numfig = True`` in ``conf.py``
  first; see :ref:`advanced-configuration` for numbering configuration.

For example, :ref:`tables` links to a section, :doc:`../install` links to a
page, and :download:`the sample CSV <sample/fruits.csv>` downloads a file.

For API documentation, use domain roles such as ``py:func``, ``py:class``,
``c:func``, or ``cpp:class`` with objects documented by that domain. Prefer a
specific role to ``any`` when the target type is known. Prefix ``~`` in
supported object roles to shorten the displayed qualified name; prefix ``!``
to suppress linking. See :external+sphinx:doc:`Domains <usage/domains/index>`.

Glossaries and documented options
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Use :external+sphinx:rst:role:`term` for :external+sphinx:rst:dir:`glossary`
entries and :external+sphinx:rst:role:`option` or
:external+sphinx:rst:role:`envvar` for documented command-line options or
environment variables. These roles link to matching directives, not to arbitrary
strings:

.. code-block:: rst

   .. glossary::

      sample rate
         Number of measurements acquired per second.

   See :term:`sample rate`.

   .. program:: capture

   .. option:: --rate HZ

      Select the sample rate.

   Run :program:`capture` with :option:`--rate`.

.. _inter-refs:

External Sphinx references :badge:`sphinx`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:external+sphinx:ref:`Intersphinx <ext-intersphinx>` resolves references against
another project's inventory. Enable ``sphinx.ext.intersphinx`` in ``conf.py``
and add a mapping:

.. code-block:: python

   intersphinx_mapping = {
       'sphinx': ('https://www.sphinx-doc.org/en/master', None),
   }

Use the inventory name explicitly to avoid ambiguous targets:

.. code-block:: rst

   :external+sphinx:rst:dir:`code-block`
   :external+sphinx:doc:`Roles <usage/restructuredtext/roles>`

These render as :external+sphinx:rst:dir:`code-block` and
:external+sphinx:doc:`Roles <usage/restructuredtext/roles>`. Use ``ref`` for
external labels, ``doc`` for pages, and domain roles for documented objects.
If the target does not exist in the other project, the build shows a warning.

.. _out-org-ref:

Third-party inventories
+++++++++++++++++++++++

Add other projects to ``intersphinx_mapping`` in the same way, using their
published documentation URL and inventory name. Prefer inventories to URLs
containing theme-specific HTML anchors.

.. _in-org-ref:

ADI repository references :badge:`doctools`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Doctools can configure organization inventories from repository names:

.. code-block:: python

   interref_repos = ['hdl', 'no-OS', 'pyadi-iio/main']

The suffix selects a deployed build. For example, a reference into HDL is
``:external+hdl:ref:`spi_engine control-interface```; use the actual label
exported by the target repository. Private inventories and local checkouts
are covered in :ref:`advanced-configuration`.

For source-code links rather than documentation references, use
:ref:`the Git role <role git>`:
``:git-doctools:`docs/docs_guidelines/index.rst```. See :doc:`roles` for ADI,
EngineerZone, vendor, and supplier links.

Code and reusable content :badge:`sphinx`
--------------------------------------------------

Use :external+sphinx:rst:dir:`code-block` for multiline code. Useful options are
``linenos``, ``emphasize-lines``, ``caption``, and ``name``:

.. code-block:: rst

   .. code-block:: python
      :caption: Read one sample
      :name: read-sample-example
      :linenos:
      :emphasize-lines: 2

      def read_sample(device):
          return device.read()

Use :external+sphinx:rst:dir:`literalinclude` to display maintained source files
instead of copying them into prose. Paths are relative to the current source
document. Select excerpts with ``lines``, ``start-after``, or ``end-before``;
choose syntax highlighting with ``language``:

.. code-block:: rst

   .. literalinclude:: sample/fruits.csv
      :language: text
      :caption: Fruit data
      :lines: 1-3

Use `include <docutils-include_>`__ when the file contains reST that should be
*parsed*, not shown as code. Store reusable fragments with a non-``.rst`` suffix
(e.g. ``.inc``) so they are not also built as standalone pages.

For command sessions with prompts, working directories, and output, use the
Doctools :doc:`shell directive <directives>` rather than manually formatting
prompts in code blocks.

Notes and warnings :badge:`sphinx`
-------------------------------------------

Use :external+sphinx:rst:dir:`note` for context, :external+sphinx:rst:dir:`tip`
or :external+sphinx:rst:dir:`hint` for advice,
:external+sphinx:rst:dir:`important` for required information, and
:external+sphinx:rst:dir:`warning`, :external+sphinx:rst:dir:`caution`, or
:external+sphinx:rst:dir:`danger` for risks.
:external+sphinx:rst:dir:`attention` and :external+sphinx:rst:dir:`error` are
also available; :external+sphinx:rst:dir:`admonition` takes a custom title and
:external+sphinx:rst:dir:`seealso` lists related pages. Avoid putting ordinary
explanatory text into callouts.

.. code-block:: rst

   .. warning::

      Disconnect power before changing the jumpers.

   .. admonition:: Before you start

      Check the board revision.

   .. seealso::

      :doc:`Installation <../install>`

For a short visual heading without a new section, use
:external+sphinx:rst:dir:`rubric`. Use real
section headings when the content should appear in navigation.

.. _guide-version-notes:

Version history :badge:`sphinx`
----------------------------------------

Use these directives to record changes to a feature. Explain what changed and,
for deprecations and removals, what to use instead:

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

Images and mathematics :badge:`sphinx`
-----------------------------------------------

Use `figure <docutils-figure_>`__ when an image needs a caption or a numbered
reference; use `image <docutils-image_>`__ for an uncaptioned logo or
illustration. Provide alternative text and prefer SVG for diagrams:

.. code-block:: rst

   .. figure:: schematic.svg
      :alt: ADC connected to the controller over SPI
      :width: 80%
      :name: adc-connections

      Connections between the ADC and controller.

Keep assets next to the page or under a relevant topic rather than adding
long chains of ``../../`` paths. Doctools' ``no-background`` class removes
an image's default white background in dark mode. ``only-light`` and
``only-dark`` select theme-specific assets; ``only-print`` and ``only-screen``
select print versus screen presentation.

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
-------------------------------

Use tables for data organized in rows and columns. To place links or content
side by side, use :ref:`cards and grids <guide-layout>` instead.
All the table types below are built-in; the Doctools CSS classes at the end
are optional.

List tables
~~~~~~~~~~~

Prefer `list-table <docutils-list-table_>`__ for hand-maintained data. Each
outer item is a row; each inner item is a cell. Every row must contain the same
number of cells. ``header-rows`` identifies column headers, ``stub-columns``
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

Use `csv-table <docutils-csv-table_>`__ for imported or generated data.
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
Prefer list tables once editing becomes awkward:

.. code-block:: rst

   ========  ==============
   Fruit     Color
   ========  ==============
   Papaya    Orange, yellow
   Rambutan  Red
   ========  ==============

Grid tables support multiline cells and row/column spans. Draw every border
carefully; the ``=`` separator marks the header boundary. Use
`table <docutils-table_>`__ to
add a caption, name, and widths:

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
* Keep cells concise and avoid very wide tables. Relative ``widths`` are
  layout hints, not a guarantee of identical HTML and PDF wrapping.
* For multipage PDF tables, add ``:class: longtable``. Sphinx's
  :external+sphinx:rst:dir:`tabularcolumns` sets LaTeX column specifications
  for the next table; it does not control HTML widths.
* Avoid enormous cells with nested blocks: a single table row may not fit
  on a PDF page. Split the data into smaller tables when necessary.
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

The Doctools theme also provides ``bold-header`` and ``bold-first-column``
classes, e.g. ``:class: bold-header bold-first-column``. These change visual
emphasis, not table semantics. See the
`Tables with Sphinx
<https://tables-with-sphinx.readthedocs.io/en/latest/>`__ for HTML/PDF
comparisons; its examples use an older Sphinx release, so check
current Sphinx options before copying builder-specific workarounds.

.. _guide-layout:

Cards, grids, and tabs :badge:`doctools`
---------------------------------------------

Use cards for navigation, not for tabular data. Doctools provides its own
``grid``, ``flex``, and ``card`` directives; they do not require sphinx-design
and do not share all of that extension's options. Card targets use reference
labels:

.. code-block:: rst

   .. grid::
      :columns: 2

      .. card:: Custom roles
         :ref: role

         Links, colors, and badges.

      .. card:: Custom directives
         :ref: directive

         Layout, shell sessions, and media.

.. grid::
   :columns: 2

   .. card:: Custom roles
      :ref: role

      Links, colors, and badges.

   .. card:: Custom directives
      :ref: directive

      Layout, shell sessions, and media.

``grid`` chooses columns; ``flex`` lets content flow. Both adapt to narrow
screens. Use ``collapsible`` for optional details and ``tab-set`` with
``tab-item`` for alternatives, like Linux and Windows instructions. Do not
put required steps inside a collapsed block.
For syntax and rendered examples, see :doc:`directives`.

Navigation and page order :badge:`sphinx`
--------------------------------------------------

:external+sphinx:rst:dir:`toctree` connects pages into the documentation
hierarchy. Entries are source document names without extensions, relative to the
containing file:

.. code-block:: rst

   .. toctree::
      :maxdepth: 2
      :caption: The following user guides are available:

      hardware-guide
      Software setup <software-guide>

Use ``maxdepth`` to limit displayed section levels, ``titlesonly`` for page
titles alone, and ``numbered`` on a top-level tree for section numbering.
``glob`` matches document names; ``hidden`` records hierarchy without an in-page
list. `contents <docutils-contents_>`__ instead creates a list of
headings in the current page; it does not connect documents.

Place a toctree in the section where its documents belong. In PDF its entries
become content **at that location**, including for hidden trees. Do not put
user-guide documents under an unrelated "Help and support" heading.
The ``caption`` is hidden on PDF output, use it to briefly describe the HTML
pages available (while on a PDF, the sections immediately follow on the next
pages).

Doctools' ``toctree-preview`` adds page descriptions below the first-level
links, using the :ref:`description` directive. This is a
:badge:`doctools` enhancement.

Before publishing
-----------------

* Preview with :ref:`serve` and check the build warnings for missing
  references, invalid syntax, unlisted pages, among others.
* Check that example commands work, and that images have alt text.
* Use :external+sphinx:rst:dir:`only` (e.g. ``only:: html`` or ``only:: latex``)
  only when the HTML and PDF really need different content.
* Extension setup, custom JavaScript, version configuration, wiki imports,
  and repository-specific quirks are described in :ref:`advanced-configuration`.

Reference and advanced guide
----------------------------

.. toctree::
   :caption: The following section describe Doctools custom tools and advanced usage:
   :maxdepth: 1

   roles
   directives
   advanced

.. _docutils-csv-table: https://docutils.sourceforge.io/docs/ref/rst/directives.html#csv-table
.. _docutils-figure: https://docutils.sourceforge.io/docs/ref/rst/directives.html#figure
.. _docutils-image: https://docutils.sourceforge.io/docs/ref/rst/directives.html#image
.. _docutils-include: https://docutils.sourceforge.io/docs/ref/rst/directives.html#include
.. _docutils-list-table: https://docutils.sourceforge.io/docs/ref/rst/directives.html#list-table
.. _docutils-table: https://docutils.sourceforge.io/docs/ref/rst/directives.html#table
.. _docutils-contents: https://docutils.sourceforge.io/docs/ref/rst/directives.html#contents
