.. _docs_guidelines:

Documentation guidelines
========================

A brief set-of-rules for the documentation.

.. note::
   The old wiki uses `dokuwiki <https://www.dokuwiki.org/dokuwiki>`_. When
   importing text from there, consider the automated options that are provided
   in this page to convert it to reST.

Importing from DokuWiki to Sphinx
---------------------------------

Use the following command to import a DokuWiki page (old *wiki.analog.com*):

.. code:: bash

   pandoc imported.txt -f dokuwiki -t rst --columns=80 -s -o imported.rst --list-tables

The :code:`list-tables` parameter requires *pandoc-types* >= 1.23, included in any
recent `pandoc release <https://github.com/jgm/pandoc/releases>`__;
if it is not an option, you shall remove it and export in the *grid* table
format (see :ref:`tables` for more information).

After converting, update it to better conform with the guidelines below, and
make sure to use our directives and roles, for example, the :ref:`role git`.

To speed thing up, combine with wget:

.. code:: bash

   wikifile=resources/eval/user-guides/adrv9009/adrv9009
   outfile=output.rst

   wget -O - https://wiki.analog.com/$wikifile?do=export_raw --no-verbose | \
     pandoc -f dokuwiki -t rst --columns=80 -s -o $outfile --list-tables

Also, consider recording macros in your favorite text editor to automate
repetitive steps.

There is also the
`DokuWiki to Sphinx (bash.sh) <https://gist.github.com/gastmaier/9d9c8281dc3c8551991a857cdb2692cc>`__
to further help importing.

Directives and roles
--------------------

Sphinx allows expanding functionality beyond the defaults directives and roles
by loading extensions. Doctools implements custom directives and roles for common
features, but :ref:`third-party extensions <extension-third-party>` can also be used.

.. toctree::
   :caption: Doctools extended directives and roles are provided at:
   :titlesonly:

   directives
   roles

.. _extension-third-party:

Third-party directives and roles
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Repositories have the freedom to choose the third-party extensions they want to
include in their documentation.
They are listed on the *requirements.tst* file, and are installed with:

.. code:: bash

   pip install -r requirements.txt

The recommendation is to avoid using extensions that render content on the
client-side using JavaScript, because it requires:

* Fetching third-party scripts at someone-else server most of the time; and
* Makes exporting to other formats (like pdf) harder, because it is then necessary to
  patch and replace with another non-JavaScript renderer.
* Requires managing these added scripts to ensure they apply on hot reload.

Support custom JavaScript in hot reload
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Hot reload is a feature that reloads only parts of a webpage, allowing super
fast content-loading, cool animations, and a better user experience.

However, for third-party client-side JavaScript, it is necessary to map the
added globals to hot reload module.

On :git-doctools:`adi_doctools/theme/harmonic/scripts/hot_reload.js`, extend the
``script_remove`` and ``script_add`` to include hooks for your particular added
script.

For example, for MathJax, that is simply calling the global method
``MathJax.typeset()`` to process the new page (hot reload) if the page includes
the script.

Here is a template:

.. code:: javascript

   export class HotReload {
     // ...
     script_remove (url) {
       switch(url) {
         case "https://example.com/npm/my_script.js":
           if (typeof MyScript !== 'undefined')
             // If there is a clean-up/deinit method, call it
             // to try to keep memory usage in check.
             MyScript.cleanup()
           break;
         // ...
       }
     }
     script_add (url) {
       // Get templated script node.
       const elem = this.js_script_memory.get(url)
       // Append to page to init loading.
       document.querySelector('head')?.append(elem)
       switch(url) {
         case "https://example.com/npm/my_script.js":
           if (typeof MyScript !== 'undefined')
             // On hot reload, already loaded, retrigger init.
             // You need to check the script documentation for
             // the exact methods names, calls.
             MyScript.init()
           else
             // On hot reload, first load, do
             elem.onload = () => {
               console.log("MyScript loaded!")
               // Do other things, if necessary, but in general those scripts
               // already do their thing on load.
             }
           break;
         // ...
       }
     }

.. _extension-repository:

Repository-specific extensions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Extensions with repository-specific functionalities can be added to the repository
source code.

At *conf.py*, add:

.. code:: python

   import os
   import sys
   sys.path.insert(0, os.path.abspath(os.path.join('.', 'ext'))

   extensions = [
        ...
        "ext_repo_name"
   ]

Create the *ext/ext_repo_name.py* and implement your custom directives/roles.
Replace *repo_name* with your repository name.

.. tip::

   If you think your extension could be useful for other repositories, consider
   migrating it to Doctools source code.

If the extension relies on files at the repository (like XML files), and/or
uses either env.found_docs or docnames to manage cache,
check if ``env.config.monolithic`` exists and is true.

If yes, prefix:

* The path to files with the relative path from the custom doc to the
  repository (always `../<repository>` (e.g.,`../hdl`)); and
* Doc-names with the repository name (e.g., `hdl/`).

This ensures compatibility with :ref:`custom-doc`.

Here is a practical example:

* Metadata to be parsed is at ``repo_name/builds/info.xml``
* The sphinx source dir ``env.srcdir`` values are:

 * Original doc (per repo): ``repo_name/doc/sphinx/source``
 * Custom doc (always): ``_build``.

So, if it is necessary to check ``env.config.monolithic`` to correct infer the
target file path, for example:

.. code:: python

   if hasattr(env.config, 'monolithic') and env.config.monolithic:
        repo_path = path.join(env.srcdir, '..', 'repo_name')
   else:
        repo_path = path.join(env.srcdir, '..', '..', '..')

   artifact_path = path.abspath(path.join(repo_root, 'builds', 'info.xml'))

This is necessary because Sphinx has no way of knowing the repository root
(without invoking a git shell), so hard-coding a relative path is necessary.

.. note::

   If the extensions are reused by multiple repositories, infer the repository
   name from the first level (``my_repo/``) of the docname
   (``my_repo/tutorial/index``).

Custom doc copies
``env.srcdir(original)`` to ``env.srcdir(custom)/repo_name``
to avoid page conflicts when aggregating.
So, sometimes it is necessary to prefix docnames with the repository name:

.. code:: python

   if hasattr(env.config, 'monolithic') and env.config.monolithic:
        prefix = "repo_name"
   else:
        prefix = "."

   _somedoc = path.join(prefix, _somedoc)

For intermediary files, for example a SQLite database, it is recommended
to anchor to ``outdir/../managed``:

.. code:: python

   dest_dir = path.abspath(path.join(env.app.builder.outdir, pardir, 'managed'))
   sql_path = (dest_dir, "my_repo.sqlite")

Indentation matters
-------------------

Directives are indented with :green:`3 spaces`. At code directives, the code
keeps its original indentation (e.g. 2 spaces for Verilog code, tabs for C
code), but is offset by 3 spaces at the beginning of every line, to instruct
Sphinx the beginning and end of the code directive.

This offset tells Sphinx where the code directive starts and ends, Even though
*wonky* offset may work, the end-result is frequently worse.

The rule of thumb is to always align the next line with the first word of the previous line,
like this:

.. code:: rst

   #. Parent ordered item.

      * Child unordered item.

        #. Child ordered item.
        #. Child ordered item.

   .. code::

      void main()
      {
      	printf("Hello world");
      }

Renders as:

#. Parent ordered item.

   * Child unordered item.

     #. Child ordered item.
     #. Child ordered item.

.. code::

   void main()
   {
   	printf("Hello world");
   }

Table of contents
-----------------

The Table of Contents (ToC) are created with the ``toctree`` directive, content
added to to it are included to the navigations bars and table of contents.

The basic structure of a ``toctree`` is:

.. code:: rst

   .. toctree::
      :maxdepth: <depth>

      Custom title <path/to/page>

For pages where the title is already short and clear (like library pages), the
page name is taken directly from the file itself:

.. code:: rst

   .. toctree::

      library/axi_dmac/index
      library/spi_engine/index

For longer titles (common in project documentation), override the visible label
using a shorter alias:

.. code:: rst

   .. toctree::

      AD7616-SDZ <projects/ad7616_sdz/index>

This ensures that "AD7616-SDZ" is shown in the navigation instead of the full
title defined in the page, such as "AD7616-SDZ HDL project".

Position matters
~~~~~~~~~~~~~~~~

The placement of a ``toctree`` within a page determines where content is
injected when generating a PDF.

A recommended usage looks like:

.. code:: rst

   My evaluation board
   ===================

   User guides
   -----------

   To simplify speed-up bring-up, a ... .
   They describe how ... .

   .. toctree::
      :caption: The user-guides are provided at:

      hardware_guide
      software_guide

   Help and support
   ----------------

   ...

In HTML output, this renders as:

.. code:: rst

   # My evaluation board

   ## User guides

   To simplify speed-up bring-up, a ... .
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


Top-level caption
~~~~~~~~~~~~~~~~~

Captions on top-level ``toctree`` entries also appear in the sidebar. Use them
to group related documentation areas logically—such as ``Software``,
``Tutorials``, ``API Usage``, or ``Contributing``, rather than as explanatory
phrases like ``Tutorials are provided at:``.

You can think of top-level ``toctree`` captions as book volumes. For example,
the :git-documentation:`/` uses them to organize areas like evaluation boards,
university programs, and Linux drivers.

Filtering multiple topics
~~~~~~~~~~~~~~~~~~~~~~~~~

For large documentation sets with multiple topic areas, it can be useful to
filter navigation entries dynamically. This can be enabled via:

* Setting the environment variable ``ADOC_FILTER_TOCTREE=1``.
* Or, setting ``filter_toctree`` in ``conf.py`` (this takes precedence).

This mechanism is meant to be used alongside the ``topic`` metadata defined in
``lut.py`` so that top-level links remain consistent across topics.

With preview
~~~~~~~~~~~~

Doctools extends ``toctree`` with a ``toctree-preview``, that adds a
description of the page right below the link. Only the first level is shown,
even if ``maxdepth`` is set. Internally it uses the result of the
:ref:`description` directive.

It is useful when you have a list of projects and wants to provide a quick
overview.

.. _version:

Versioning
----------

To avoid having the version set in multiple places or having to tweak ``conf.py``
to obtain it from somewhere else, continuous integration can set the environment
variable ``ADOC_DOC_VERSION`` to set the version value.

The ``version`` value on ``conf.py`` has lower precedence, and
will be overwritten if ``ADOC_DOC_VERSION`` is set.

The CI, in general, should set ``ADOC_DOC_VERSION`` as the current checkout branch
in the pipeline (e.g. ``main``, ``v1.0.0``), for GitHub Actions, that can be
``${{ github.ref_name}}`` [#f1]_.

.. tip::

   If creating a branch or PR output, consider using GitHub short reference
   ``${{ github.ref_name }}``.

If both environment variable and ``version`` on ``conf.py`` are unset, it defaults
to an empty string.

.. [#f1] Quick cheat sheet for ``gihtub.ref_name`` values on event:

         * push branch: ``main``, ``dev``, ...
         * push tag: ``v2.2.2``, ``new-feature``, ...
         * pull_request: ``1234/merge``, ``23/merge``, ...

Exporting to PDF
----------------

The whole documentation can be exported to a PDF document for a more compact
format using either rs2pdf or WeasyPrint.
This is done by setting the environment variable called
``ADOC_MEDIA_PRINT`` (the value does not matter) and building the documentation.

For rst2pdf, add ``rst2pdf`` to *conf.py* ``extensions`` list,
install ``rst2pdf``, ``svglib`` (svg support) and ``matplotlib`` (LaTeX formulas)
from pip and use:

.. shell::

   ~/some_repository/docs
   sphinx-build -b pdf . _build/pdfbuild

In the output folder, you’ll find a PDF document named after the repository
(e.g. Doctools.pdf). This document includes an auto-generated cover, followed by
the remaining pages. Note that an HTML build of the documentation is not
required for the PDF build.

.. warning::

   The environment variable ``ADOC_MEDIA_PRINT`` should be unset when building
   the HTML pages of documentation. If not set, some components of the pages
   may not render properly.

For WeasyPrint, install ``weasyprint``, and ``matplotlib`` (LaTeX formulas)
from pip and use with :ref:`serve`:

.. shell::

   ~/some_repository/docs
   $adoc serve --directory . --builder pdf

The advantage of WeasyPrint is that the design styles (CSS stylesheet) is
respected.

Inner working
~~~~~~~~~~~~~

Internally, ``ADOC_MEDIA_PRINT`` variable is set to ``app.config.media_print``
and should be used in scenarios where it is explicitly needed to compile the
content in a different manner than for the **hosted** html.
For example, to render content during build that would instead be rendered with
third-party JavaScript libraries in the user browser.

Still, another approach is to patch the generated html, like is done at
:git-doctools:`adi_doctools/cli/aux_print.py` for :ref:`serve` and
:ref:`custom-doc` with pdf builders.

.. _local_refs:

Local references
----------------

References to labels have the format :code:`:ref:\`context topic\``, e.g.
:code:`:ref:\`role git\`` renders as :ref:`role git`.

Labels are created for any content with the syntax
(dot-dot underscore<label>two-dots):

.. code:: rst

   .. _context topic:

.. hint::

   Add labels to any content that may be linked, locally or
   :ref:`externally <inter-refs>`.

References to docs have the format :code:`:doc:\`path/to/doc\``, e.g.
:code:`:doc:\`docs_guidelines\`` for *docs_guidelines.rst*.

.. attention::

   Do not break reference roles between lines!
   Even though Sphinx allows breaking line inside the reference role,
   it makes pattern matching hard.

Prefer hyphen separation ``-`` over underline ``_`` for the "title" section,
and always lower case,
for example
``my_code control-interface`` instead of ``MY_CODE Control_Interface``.

Numbered references
~~~~~~~~~~~~~~~~~~~

References can be numbered by using :external+sphinx:rst:role:`numref`, for
example, "*see Figure 1*".

To use this feature, enable on the *conf.py*:

.. code-block:: python

   numfig = True

To customize the format, set ``numfig_format``:

.. code-block:: python

   numfig_format = {'figure': 'Figure %s',
                    'table': 'Table %s',
                    'code-block': 'Listing %s',
                    'section': 'Section %s'}

.. tip::

   By default enumeration is global, so if the
   :external+sphinx:rst:dir:`toctree` is not ``numbered`` to divide the pages
   in numbered sections (e.g. *Figure 3.4.4*), the numbering will "propagate"
   across page which may be counter-intuitive.

   To have the numbering reset at every page, add ``numfig_per_doc = True`` to
   *conf.py*.

.. _inter-refs:

External references
-------------------

External references to other Sphinx documentation are created using the built-in
``sphinx.ext.intersphinx`` extension.

To set up **in-organization** references read the :ref:`section below <in-org-ref>`,
and for **third-party** docs, the section :ref:`that follows <out-org-ref>`.

| For either, to create a reference to a **label**, use:
| :code:`:external+inv:ref:\`label\``, where ``inv`` is a mapped source,
  for example, :code:`:external+hdl:ref:\`spi_engine control-interface\``.

| To create a reference to a **doc**, use:
| :code:`:external+inv:doc:\`label\``, where ``inv`` is a mapped source,
  for example, :code:`:external+hdl:doc:\`library/spi_engine/index\``.

As the other roles, it is possible to customize the text, e.g.
:code:`:external+hdl:ref:\`Custom text <spi_engine control-interface>\``.

.. tip::

    Pay attention to the log output, since
    warnings is thrown for each reference not found.

External references work with any kind of references, such as
*ref*, *doc*, *envvar*, *token*, *term*, *numref* and *keyword*.

| For references to **labels** it is possible to use the short form:
| :code:`:ref-inv:\`label\`` (equivalent to :code:`:external+inv:ref:\`label\``),
  but is discouraged.

.. note::

   Sphinx 8 allows the syntax :code:`:ref:\`<inv>:label\``,
   which allows local references to have higher precedence than external
   refs, useful for generating custom docs like user guides.
   However, since some users may require Sphinx 7, use the former syntax,
   and let :ref:`adoc <cli>` patch it when necessary.

To show all links of an InterSphinx mapping file, use the built-in tool:

.. code:: bash

   python3 -m sphinx.ext.intersphinx https://analogdevicesinc.github.io/hdl/objects.inv

.. _in-org-ref:

In organization reference
~~~~~~~~~~~~~~~~~~~~~~~~~

To create references to Sphinx docs inside the organization add the repositories
of interest to the `conf.py` file with the following format:

.. code:: python

   interref_repos = [external...]

For example:

.. code:: python

   interref_repos = ['hdl', 'no-OS', 'pyadi-iio/main']

Notice that in the example ``main`` suffixes ``pyadi-iio``, this means that will
look for the build at path ``main`` of this repo instead of at root.
This can be used to target a specific version, if the target repository stores
multiple, for example, ``v1.1``, more about that :ref:`deploy-versioned`.

.. tip::

   For even more freedom, you can set up with an explicit path as
   an :ref:`out-org-ref`.

It is possible to customize the target URL with the ``interref_uri`` config or
``ADOC_INTERREF_URI`` environment variables.
The default value is *https://analogdevicesinc.github.io/* and can be set to a
local path like *../../*.

Beyond the main target dictated by *interref_uri*,
by setting the config ``interref_local`` as true, a secondary target is inferred
foreseeing a local copy of the target external documentation alongside the
current repository:

.. code::

   /data/work
   ├─my-repo-0/doc/sources
   │
   ├─my-repo-1/docs
   │
   └─my-repo-2/doc

The correct relative paths are resolved looking into the ``lut.py``.

.. _out-org-ref:

Outside organization Sphinx reference
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To create references to third-party Sphinx documentations, add the mappings to
the `conf.py` file with the following format:

.. code:: python

   intersphinx_mapping = {
       '<name>': ('<path/to/external>', None)
   }

For example:

.. code:: python

   intersphinx_mapping = {
       'sphinx': ('https://www.sphinx-doc.org/en/master', None)
   }

Text width
----------

Each line must be less than **80** columns wide. This visually ensures while
writing that the paragraphs are concise and well structured.

For **neovim**, you can visual select the block ``Ctrl+V`` then wrap with
``gq``.

For **vscode**, you can install
`Rewrap <https://marketplace.visualstudio.com/items?itemName=stkb.rewrap>`__,
select the block and wrap with ``Alt+Q``.

As a last resort, youcan use the :code:`fold` command to break the lines of the
imported text while respecting word-breaks:

.. code:: bash

   cat imported.txt | fold -sw 80 > imported.rst

The header divider "``---``" shall be either 80 characters wide or end at the
title character, that means, this is also valid:

.. code::

   My title
   ========

.. _tables:

Tables
------

Prefer
`list-tables <https://docutils.sourceforge.io/docs/ref/rst/directives.html#list-table>`__
and imported
`csv-tables <https://docutils.sourceforge.io/docs/ref/rst/directives.html#csv-table-1>`__
(using the file option), because they are faster to create, easier to maintain
and the 80 column-width rule can be respected with list-tables.

Only use :external+sphinx:ref:`Grid Tables <rst-tables>` if strictly necessary,
since they are hard to update.

To tune styling, the following classes are available:

* *bold-header*: Make the header bold.
* *bold-first-column*: Make the first column bold.

Lists
-----

Unordered lists use ``*`` or ``-`` and ordered lists ``#.``.

Child items must be aligned with the first letter of the parent item, that means,
2 spaces for unordered list and 3 spaces for ordered lists, for example:

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

Code
----

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

Preserve the original code identation, just offset it by :green:`3 spaces`.

Images
------

Prefer the SVG format for images, and save it as *Optimized SVG* in
`inkscape <https://inkscape.org/>`_ to use less space.

Store them in a hierarchy, do not use ``images`` subdirectories. The idea is to
have simpler relative paths, for example, e.g.:

.. code:: rst

   .. image:: ad2234_sdz_schematic.svg

Or even simpler ``schematic.svg``, if already in a ``ad2234`` directory.

Instead of overcomplicated paths like:

.. code:: rst

   .. image:: ../../project/images/ad2234_sdz/ad2234_sdz_schematic.svg

In general, this avoids dangling artifacts and keeps the documentation simple.

.. _git-lfs:

Git Large File Storage
----------------------

Where applicable, Git Large File Storage (LFS) is used to replace large files
with text pointers inside Git, reducing cloning time.

To setup, install from your package manager and init:

.. code:: bash

   apt install git-lfs
   git lfs install --skip-smudge

The files that will use Git LFS are tracked at ``.gitattributes``, to add new
files use a pattern at the repo root, for example:

.. code:: bash

   git lfs track *.jpg

Or edit ``.gitattributes`` directly.

Common sections
---------------

HDL common sections
~~~~~~~~~~~~~~~~~~~

The **More information** and **Support** sections that are present in
the HDL project documentation, are actually separate pages inserted as links.
They're located at *hdl/projects/common/more_information.rst* and */support.rst*,
and cannot be referenced here because they don't have an ID at the beginning
of the page, so not to have warnings when the documentation is rendered that
they're not included in any toctree.

They are inserted like this:

.. code-block::

   .. include:: ../common/more_information.rst

   .. include:: ../common/support.rst

And will be rendered as sections of the page.

Dynamic elements
----------------

Dynamic elements refer to sections of the documentation that are updated using
dynamically loaded metadata, scripts, and styles (modules).

The dynamic elements implemented:

* ``doctools/metadata.json``:

   - The navigation bar at the top (``repotoc`` entry).
   - A banner at the top (``banner`` entry).

The metadata/modules files are generated when ``core_repo`` is true in the
``conf.py``.
From the JavaScript side, it fetches first
``{content_root}[../versioned]/../doctools/[versioned]/metadata.json``,
which contains the basic metadata and the list of the extra scripts and styles.

.. note::

   Path ``version`` is present and set if ``latest`` exists at
   ``{content_root}/../doctools`` and the stored version can be extracted.

.. tip::

   To keep the documentation lean, the metadata file is cached on localStorage
   and is only fetched again after the threshold time expires.

To add new JavaScript modules and CSS styles:

* Update :git-doctools:`ci/rollup.config.app.mjs`.
* Add the list of modules to :git-doctools:`adi_doctools/lut.py`.

The rollup should always output to the ``static`` directory, the same as the
base ``app.umd.js`` and ``app.min.css``.

Example use cases/suggestions:

* An ever improving ``search.umd.js``, that follows the natural evolution of the doc (in progress).
* A unified footer across releases, using DOM manipulation by a ``footer.umd.js``.

Known issues
~~~~~~~~~~~~

* On Firefox on Windows, fetch requests can only happen to the same port (8000 -> 8000),
  so :ref:`serve` daemon must be on port 8000
