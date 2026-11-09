.. _advanced-configuration:

Advanced configuration
======================

Configuration, extension development, and theme internals.
For writing pages, see :ref:`docs_guidelines`; for building and
publishing, see :ref:`cli` and :ref:`deploy-versioned`.

.. _extension-third-party:

Third-party extensions
----------------------

Repositories have the freedom to choose the third-party extensions they want to
include in their documentation.
They are listed in the *requirements.txt* file, and are installed with:

.. code-block:: bash

   pip install -r requirements.txt

Register the extensions in ``conf.py``.

The recommendation is to avoid using extensions that render content on the
client-side using JavaScript, because this requires:

* Fetching third-party scripts from someone else's server most of the time.
* Patching or replacing the renderer to export to other formats, such as PDF.
* Managing these added scripts to ensure they apply on hot reload.

Support custom JavaScript in hot reload
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Hot reload replaces page content without reloading the browser document.
Scripts that only initialize on ``DOMContentLoaded`` will not automatically
process the replacement content.

See :git-doctools:`adi_doctools/theme/harmonic/scripts/hot_reload.js`:
``sync_scripts`` tracks page scripts and ``ensure_script`` handles loading
and reinitialization. Existing MathJax and Mermaid integrations illustrate
how to rerender content when their scripts have already loaded.

For example, for MathJax, that is simply calling the global method
``MathJax.typeset()`` to process the new page if it includes the script.

For a new integration:

* Initialize both on the first page and after content is replaced.
* Release listeners, observers, and generated DOM before leaving the page.
* Make repeated initialization safe: do not duplicate controls or listeners.
* Test links and browser back/forward within a page, between builds, and
  between repositories, including pages without the extension.
* Provide a build-time alternative for content needed in PDF or text output.

Theme modules can use the ``app:hot_reload:page_unload`` and
``app:hot_reload:page_loaded`` events.

.. _extension-repository:

Repository-specific extensions
------------------------------

Add repository-specific directives and roles under ``ext/``, and load them
from ``conf.py``:

.. code-block:: python

   import os
   import sys

   sys.path.insert(0, os.path.abspath('ext'))
   extensions = [
       'adi_doctools',
       'ext_repo_name',
   ]

Create the *ext/ext_repo_name.py* and implement your custom directives/roles.
Replace *repo_name* with your repository name.

.. tip::

   If you think your extension could be useful for other repositories, consider
   migrating it to Doctools source code.

Supporting custom documents
~~~~~~~~~~~~~~~~~~~~~~~~~~~

If the extension relies on files at the repository (like XML files), and/or
uses either ``env.found_docs`` or docnames to manage cache, check if
``env.config.monolithic`` exists and is true.

If yes, prefix:

* File paths with the relative path from the custom doc to the repository
  (always ``../<repository>``, e.g. ``../hdl``).
* Docnames with the repository name (e.g. ``hdl/``).

This ensures compatibility with :ref:`custom-doc`.
Custom doc copies the original source directory to
``env.srcdir/<repository>`` to avoid page conflicts when aggregating.

For example, if the normal documentation source is
``repo_name/doc/sphinx/source`` and the artifact is
``repo_name/builds/info.xml``:

.. code-block:: python

   from os import path

   if getattr(env.config, 'monolithic', False):
       repo_root = path.join(env.srcdir, '..', 'repo_name')
   else:
       repo_root = path.join(env.srcdir, '..', '..', '..')

   artifact_path = path.abspath(path.join(repo_root, 'builds', 'info.xml'))

The relative path to the repository root depends on its documentation source
directory. In a combined build, the first document-name component identifies
the repository. Prefix cached document names with it:

.. code-block:: python

   prefix = 'repo_name' if getattr(env.config, 'monolithic', False) else '.'
   docname = path.join(prefix, 'tutorial', 'index')

For intermediary files, for example a SQLite database, it is recommended
to anchor to ``outdir/../managed``:

.. code-block:: python

   managed_dir = path.abspath(
       path.join(env.app.builder.outdir, '..', 'managed'))
   sql_path = path.join(managed_dir, 'my_repo.sqlite')

.. _version:

Documentation version configuration
-----------------------------------

To avoid having the version set in multiple places or having to tweak
``conf.py`` to obtain it from somewhere else, continuous integration can set
the environment variable ``ADOC_DOC_VERSION`` to set the version value.

The ``version`` value on ``conf.py`` has lower precedence, and will be
overwritten if ``ADOC_DOC_VERSION`` is set.

The CI, in general, should set ``ADOC_DOC_VERSION`` as the current checkout
branch or tag (e.g. ``main``, ``v1.0.0``). For GitHub Actions, that can be
``${{ github.ref_name }}``:

.. code-block:: yaml

   env:
     ADOC_DOC_VERSION: ${{ github.ref_name }}

Quick cheat sheet for ``github.ref_name`` values on event:

* push branch: ``main``, ``dev``, ...
* push tag: ``v2.2.2``, ``new-feature``, ...
* pull_request: ``1234/merge``, ``23/merge``, ...

If both the environment variable and ``version`` on ``conf.py`` are unset,
it defaults to an empty string.

This documentation-build version is separate from feature history recorded
using :ref:`version directives <guide-version-notes>`. For deployment layouts
and the ``tags.json`` formats, see :ref:`deploy-versioned`.

Advanced cross-repository references
------------------------------------

Start with :ref:`inter-refs`. Doctools' ``interref_uri`` configuration or
``ADOC_INTERREF_URI`` environment variable changes the base documentation URL
(default: ``https://analogdevicesinc.github.io/``).

With ``interref_local = True``, Doctools also looks for documentation sources
in neighboring repository checkouts. Their paths are resolved using
:git-doctools:`adi_doctools/lut.py`.

.. _private-org-ref:

Private repositories
~~~~~~~~~~~~~~~~~~~~

Configure private inventories separately:

.. code-block:: python

   interref_private_repos = ['krabby-patty-recipe', 'x-files/v1.1']

Authentication uses ``GITHUB_TOKEN`` or ``git credential fill``. Do not put
credentials into documentation sources.

Inspecting an inventory
~~~~~~~~~~~~~~~~~~~~~~~

To list the targets available in an external inventory:

.. code-block:: bash

   python -m sphinx.ext.intersphinx \
     https://analogdevicesinc.github.io/hdl/objects.inv

Use the explicit ``:external+inventory:ref:`` form for compatibility with
Sphinx 7. Sphinx 8 also supports inventory-qualified ``:ref:`` targets;
:ref:`adoc <cli>` adapts references when assembling custom documents.

.. _advanced numbering:

Numbering configuration
~~~~~~~~~~~~~~~~~~~~~~~

Enable figure, table, and code-listing references with ``numfig = True`` in
``conf.py``. Customize their prefixes with ``numfig_format``:

.. code-block:: python

   numfig = True
   numfig_format = {
       'figure': 'Figure %s',
       'table': 'Table %s',
       'code-block': 'Listing %s',
       'section': 'Section %s',
   }

.. tip::

   By default enumeration is global. If the
   :external+sphinx:rst:dir:`toctree` is not ``numbered`` to divide the pages
   into numbered sections (e.g. *Figure 3.4.4*), numbering continues across
   pages.

   To have the numbering reset at every page, add ``numfig_per_doc = True``
   to *conf.py*.

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

   git lfs track '*.jpg'

Or edit ``.gitattributes`` directly.

For publishing LFS-backed assets, see :ref:`deploy`.

.. _guide-wiki-import:

Importing from DokuWiki
-----------------------

The old wiki uses `DokuWiki <https://www.dokuwiki.org/dokuwiki>`__.
Use the following command to import a DokuWiki page (old *wiki.analog.com*):

.. code-block:: bash

   pandoc imported.txt -f dokuwiki -t rst --columns=80 \
     --list-tables -s -o imported.rst

The ``--list-tables`` parameter requires *pandoc-types* >= 1.23, included
in any recent `Pandoc release <https://github.com/jgm/pandoc/releases>`__;
if it is not an option, remove it and export in the *grid* table format
(see :ref:`tables` for more information).

After converting, update it to conform with :ref:`docs_guidelines`, and
make sure to use our directives and roles, for example, the :ref:`role git`.

To speed things up, combine with wget:

.. code-block:: bash

   wikifile=resources/eval/user-guides/adrv9009/adrv9009
   wget -O - "https://wiki.analog.com/$wikifile?do=export_raw" --no-verbose | \
     pandoc -f dokuwiki -t rst --columns=80 --list-tables -s -o output.rst

Also, consider recording macros in your favorite text editor to automate
repetitive steps.

There is also the
`DokuWiki to Sphinx (bash.sh) <https://gist.github.com/gastmaier/9d9c8281dc3c8551991a857cdb2692cc>`__
to further help importing.

.. _advanced shared-hdl:

Shared HDL sections
-------------------

The **More information** and **Support** sections in the HDL project
documentation are separate files at
``hdl/projects/common/more_information.rst`` and
``hdl/projects/common/support.rst``.

They are inserted like this:

.. code-block:: rst

   .. include:: ../common/more_information.rst

   .. include:: ../common/support.rst

And will be rendered as sections of the page. Paths are relative to the
including source file. These files have no page labels and are not included
in a toctree as standalone pages.

Dynamic theme elements
----------------------

Dynamic elements refer to sections of the documentation that are updated using
dynamically loaded metadata, scripts, and styles (modules).

The dynamic elements implemented:

* ``doctools/metadata.json``:

  - The navigation bar at the top (``repotoc`` entry).
  - A banner at the top (``banner`` entry).

The metadata/modules files are generated when ``core_repo`` is true in
``conf.py``. The metadata also contains the list of extra scripts and styles.

The JavaScript fetches ``metadata.json`` from the Doctools deployment.
For documentation hosted under a shared path, this is
``{origin}{subhost}doctools/metadata.json``. Standalone and offline builds
use ``https://analogdevicesinc.github.io/doctools/metadata.json``.
See :git-doctools:`adi_doctools/theme/harmonic/scripts/fetch.js` for URL
resolution.

To add new JavaScript modules and CSS styles:

* Update :git-doctools:`ci/rollup.config.app.mjs`.
* Add the list of modules to :git-doctools:`adi_doctools/lut.py`.

The generated modules are published in ``_static``, alongside the base
``app.umd.js`` and ``app.min.css``. Loading modules from the Doctools deployment
allows them to be updated across documentation releases without rebuilding
each release.

Example use cases/suggestions:

* A search module that follows the natural evolution of the documentation.
* A unified footer across releases, using DOM manipulation by a
  ``footer.umd.js`` module.

For theme development, use :ref:`serve` with ``-r`` to watch JavaScript,
styles, and documentation together. Different ports are different origins;
check the ports if cross-origin requests fail.
