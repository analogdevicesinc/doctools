.. _advanced-configuration:

Advanced configuration
======================

Configuration, extension development, and theme internals.
For writing pages, see :ref:`docs_guidelines`; for building and
publishing, see :ref:`cli` and :ref:`deploy-versioned`.

.. _extension-third-party:

Third-party extensions
----------------------

List Python dependencies in the documentation's ``requirements.txt`` and
register their Sphinx extensions in ``conf.py``:

.. code-block:: bash

   pip install -r requirements.txt

Prefer extensions that render during the build. Client-side renderers may
fetch scripts from third parties, need separate PDF fallbacks, and require
integration with hot reload. Check both HTML and non-HTML output before
adopting one. Features provided by third-party extensions are not necessarily
available in other repositories using Doctools.

Support custom JavaScript in hot reload
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Hot reload replaces page content without reloading the browser document.
Scripts that only initialize on ``DOMContentLoaded`` will not automatically
process the replacement content.

See :git-doctools:`adi_doctools/theme/harmonic/scripts/hot_reload.js`:
``sync_scripts`` tracks page scripts and ``ensure_script`` handles loading
and reinitialization. Existing MathJax and Mermaid integrations illustrate
how to rerender content when their scripts have already loaded.

For a new integration:

* Initialize both on the first page and after content is replaced.
* Release listeners, observers, and generated DOM before leaving the page.
* Make repeated initialization safe: do not duplicate controls or listeners.
* Test links and browser back/forward within a page, between builds, and
  between repositories, including pages without the extension.
* Provide a build-time alternative for content needed in PDF or text output.

Theme modules can use the ``app:hot_reload:page_unload`` and
``app:hot_reload:page_loaded`` events. Do not assume a browser page load
occurs on each navigation.

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

Implement the extension in ``ext/ext_repo_name.py``. If it would benefit
multiple repositories, consider contributing it to Doctools instead.

Supporting custom documents
~~~~~~~~~~~~~~~~~~~~~~~~~~~

:ref:`Custom documents <custom-doc>` combine multiple repositories.
When ``getattr(env.config, 'monolithic', False)`` is true, source files are
copied under ``<source-root>/<repository>/`` to avoid document-name clashes.
Extensions that read repository artifacts or cache document names must account
for this layout.

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

These paths are repository-specific; check the normal source directory rather
than copying the example unchanged. For extensions shared by repositories,
the first document-name component identifies the repository in a combined
build. Prefix cached document names accordingly:

.. code-block:: python

   prefix = 'repo_name' if getattr(env.config, 'monolithic', False) else '.'
   docname = path.join(prefix, 'tutorial', 'index')

Store intermediate data outside the generated HTML, for example:

.. code-block:: python

   managed_dir = path.abspath(
       path.join(env.app.builder.outdir, '..', 'managed'))
   sql_path = path.join(managed_dir, 'my_repo.sqlite')

.. _version:

Documentation version configuration
-----------------------------------

Doctools uses ``ADOC_DOC_VERSION`` from the environment in preference to
``version`` in ``conf.py``. If neither is set, the version is empty.
CI should set it from the branch or tag being documented, for example:

.. code-block:: yaml

   env:
     ADOC_DOC_VERSION: ${{ github.ref_name }}

On a branch push this is a branch name; on a tag push it is a tag name;
on a pull request it is typically ``123/merge``. Choose the PR head branch
explicitly if that is the name you want displayed.

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

Numbered top-level toctrees also influence numbering. Doctools supports
``numfig_per_doc = True`` to restart numbering for each document.

.. _git-lfs:

Git Large File Storage
----------------------

Use Git LFS for large assets where the repository's policy requires it:

.. code-block:: bash

   apt install git-lfs
   git lfs install --skip-smudge
   git lfs track '*.jpg'

Commit the resulting ``.gitattributes``. For publishing LFS-backed assets,
see :doc:`../deploy`.

.. _guide-wiki-import:

Importing from DokuWiki
-----------------------

Convert the old wiki's raw markup with Pandoc, then review the result against
:ref:`docs_guidelines` and replace links with :ref:`role git` where suitable:

.. code-block:: bash

   pandoc imported.txt -f dokuwiki -t rst --columns=80 \
     --list-tables -s -o imported.rst

The ``--list-tables`` option requires pandoc-types >= 1.23; omit it for older
versions and review the resulting grid tables. You can fetch raw wiki text
and convert it in one step:

.. code-block:: bash

   wikifile=resources/eval/user-guides/adrv9009/adrv9009
   wget -O - "https://wiki.analog.com/$wikifile?do=export_raw" --no-verbose | \
     pandoc -f dokuwiki -t rst --columns=80 --list-tables -s -o output.rst

The `DokuWiki conversion helper
<https://gist.github.com/gastmaier/9d9c8281dc3c8551991a857cdb2692cc>`__ can also
help with repetitive imports.

Shared HDL sections
-------------------

HDL pages reuse common content through ``include`` rather than linking to
standalone pages without reference labels:

.. code-block:: rst

   .. include:: ../common/more_information.rst

   .. include:: ../common/support.rst

Paths are relative to the including source file. These insert the sections
at the directive's location.

Dynamic theme elements
----------------------

The core Doctools build (``core_repo = True``) generates ``metadata.json``
containing repository navigation (``repotoc``), an optional banner, and the
extra module list. See :git-doctools:`adi_doctools/theme/__init__.py` and
:git-doctools:`adi_doctools/theme/harmonic/scripts/fetch.js` for generation
and URL resolution.

To add theme modules, update :git-doctools:`ci/rollup.config.app.mjs` and
:git-doctools:`adi_doctools/lut.py`. Match the output asset directory used by
the existing bundle and ensure its scripts and styles are copied to the
published ``_static`` directory. Test deployed assets as well as local builds.

For theme development, use :ref:`serve` with ``-r`` to watch JavaScript,
styles, and documentation together. If cross-origin requests fail, check
origins and ports rather than assuming requests to different ports share an
origin.
