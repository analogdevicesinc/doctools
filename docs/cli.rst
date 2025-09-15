.. description::

   "Serve" launches a live doc server, "custom doc" generates a custom html or
   pdf, with only the content that matters, and "aggregate" builds all docs at
   once.

.. _cli:

Command line interface
======================

The Doctools bundles a command line interface called ``adoc`` meant to ease both
continuous integration and local builds of the documentation.

Below, it is briefly described each command, and it is worth noting that every
command supports the ``--help`` option for quick look up.

.. _serve:

Serve
-----

Watches the docs and source code to rebuild it on edit.
Similar to ``mkdocs serve``, ``webpack serve``, ``npm run start``, ``hugo server``,
and so on.

Two HTML live update strategies are available:

* pooling: The webpage pools timestamp changes on the ``.dev-pool`` file (default).
* selenium: Page reloads through Firefox's API (optional).

To launch a watched instance, do:

.. shell::

   $cd /path/to/docs
   $adoc serve

Where ``/path/to/docs`` is the path to the folder contain the Sphinx's ``Makefile``.

To also watch changes made to theme itself, use the ``--dev`` option, just make
sure to have Doctools as :ref:`development-install`.

For PDF output, do:

.. shell::

   /path/to/docs
   $adoc serve --builder pdf

Make sure to use an PDF viewer that watches the file timestamp
and automatically reloads, such as Gnome PDF (Evince).

.. tip::

   The PDF's table of contents depth is set by the top index page's
   ``maxdepth`` property of the toctree.

All options can be listed with:

.. shell::

   $adoc serve --help

.. _serve lfs:

Git LFS integration
+++++++++++++++++++

Serve detects if a repository uses `Git Large File Storage <https://git-lfs.com>`__
to fetch (smudge) the watched binaries on demand.

This enables users to clone a repo with ``git lfs install --skip-smudge``
and only fetch, on demand, the binary resources they are working on,
significantly reducing clone time and bandwidth usage.

.. caution::

   ``GIT_LFS_SKIP_SMUDGE=1`` and ``--skip-smudge`` are not identical!

   .. shell::
      :no-path:

      # Still fetches with either set.
      $git lfs pull -I pointer_file
      # Only fetches with --skip-smudge, skipped with GIT_LFS_SKIP_SMUDGE=1
      $git lfs smudge < pointer_file > /tmp/file.png

The per-file fetch is triggered by a GET request, such as when opening the
local server page in a browser, or by touching the watched source file.

The HTML GET request triggers a fetch for all Git LFS rules on the
*.gitattributes* file, while a "touch" only works on file types that are
also watched by the server.

If neither the GET request nor the touch file to fetch is suitable,
it is possible to pull the file directly with:

.. code-block:: bash

   git lfs pull public -I file_basename

Be mindful of the ``file_basename``, e.g. *my_image.jpg*,
full paths like *path/to/my_image.jpg* will silently fail.

How can I rebuild the whole documentation within Serve?
+++++++++++++++++++++++++++++++++++++++++++++++++++++++

Run ``make clean`` in another tab, it will trigger a full rebuild.

Do **not** do ``make clean html`` since it will generate a build without the
proper Serve environment and live reload won't work properly.

Why is the output missing styling (CSS stylesheet)?
+++++++++++++++++++++++++++++++++++++++++++++++++++

You probably did a :ref:`development-install` without :ref:`web-compiler`
and you are building directly (``make html``) instead of using Serve.

If you don't want to install ``npm``, use Serve and accept the prompt to
fetch the pre-built web-scripts from the latest release.

Why is the Python source code of this repo not watched?
+++++++++++++++++++++++++++++++++++++++++++++++++++++++

Since a Python scripts change would affect rebuilding the whole documentation,
those files are not watched by design even with the ``--dev`` option.
Extensions at the doc itself are, however.

Alternatively, touch the source doc of the open page to rebuild only it
with the edited Python code.

.. _author-mode:

Why was Author Mode renamed to Serve?
+++++++++++++++++++++++++++++++++++++

Solely to match other tools like ``mkdocs serve``, ``webpack serve``,
``npm run start``, ``hugo server``.

.. _custom-doc:

Custom Doc
----------

Generates custom documents with filtered content from all documentations of the
watched repositories (see :git-doctools:`adi_doctools/lut.py`).

For PDF output, `WeasyPrint <https://weasyprint.org/>`__ is used (ensure to install it).

To quick start, run the tool twice in an empty directly.

.. shell::

   $cd /tmp/my_doc
   $adoc custom-doc
    Configuration file doc.yaml not found, created template at:
    /tmp/my_doc/doc.yaml
    Update it with the desired sources and rerun the tool.
   $adoc custom-doc --builder pdf
    [ build output ]

The *doc.yaml* file is a concise human-readable markup file to set the desired
content and some other options.
Running the tool in a directory without the *doc.yaml* will instantiate a template
and return.
If the necessary repositories are not found, the tool will clone for you.

In general, you can first clone and checkout your current work and then run the tool,
to build the doc with your own changes.

Some documentations depend on auto generated sections and extra features, use
the ``--extra`` option to enable those; it considers that the environment has all
the tools needed, for example, ``vivado`` is accessible for the HDL documentation.
See :git-doctools:`adi_doctools/cli/custom-doc.py` to understand how the extra steps are
included, but in summary, they are just a sequence of bash commands wrapped on python.

For all options, do:

.. shell::

   $adoc custom-doc --help

Here is a minimal *doc.yaml*:

.. code-block:: yaml

   project: Custom user guide
   description: Subtitle of the user guide

   include:
     - documentation/software/libiio/cli.rst

   custom:
     - custom-pages/index.rst

   entry-point:
     - caption: My custom index
       files:
         - custom-pages/index.rst

   config:
       documentation:
         branch: "my-branch"

   extensions:
      - sphinx.ext.duration

The ``include`` option contains the list of files to include in the custom
document, with the first level of the path the label (normally the repository
name).

During generation, the tool will resolve the hierarchy of the included docs,
adding pages until the repository top-level page is reached.
This may result in unwanted content being added and empty "category" sections.

To resolve that, it is possible to create custom top-level toctrees with the
``entry-point`` option.
In summary, this:

.. code:: yaml

   entry-point:
     - caption: HDL design
       files:
         - some/custom/intro.rst
         - hdl/some/project.rst

Resolves at *index.rst* into:

.. code:: reST

   .. toctree::
      :caption: HDL design

      some/custom/intro
      hdl/some/project

Additional configuration can be added to the ``config`` option:

* ``repository``: Sets the repository to clone, if unset, is inferred as the
  label name. Useful when using the same repository multiple times for
  different branches.
* ``branch``: Clone the repository from a specific branch, overwrite "main".
  If the repository is already present, this option has no effect.
* ``extra``: Do steps that require extra software, for example, some vendor SDK.

The option ``extensions`` allow appending extra Sphinx extensions, beyond the
automatically imported from the sourced documentations.

Just like :ref:`serve`, Custom doc also has :ref:`serve lfs`.
The current limitation is that only copied images (from the sphinx's "copying images..."
step) are looked for lfs pointers, so artifacts from other steps are missed, such as
from the download directive.

Working with multiple docs
++++++++++++++++++++++++++

Suppose you edited and tested multiple docs together, it could be useful
helpful to try a local inventory file first, to check references before publication.

Having this in mind, if you build the edited documentation first, and then execute
``custom-doc``, it will consider the local inventory *objects.inv* also.

Here is a example of auto-resolved *intersphinx_mapping* by ``custom-doc``, at the
*_build/conf.py*:

.. code:: py

   # -- External docs configuration ----------------------------------------------

   intersphinx_mapping = {
       # Docs locally edited and referenced
       'hdl':
           ('https://analogdevicesinc.github.io/hdl',
            ('/path/to/my_project/hdl/docs/_build/html/objects.inv', None)),
       'documentation':
           ('https://analogdevicesinc.github.io/documentation',
            ('/path/to/my_project/documentation/docs/_build/html/objects.inv', None)),
       # Doc not locally edited, but referenced
       'scopy':
           ('https://analogdevicesinc.github.io/scopy', None),
   }

Learn more about the core of this behavior at
:external+sphinx:mod:`sphinx.ext.intersphinx`'s ``intersphinx_mapping``.

For a single doc, without ``custom-doc``, there is also ``interref_local`` described
at :ref:`in-org-ref`.

Aggregate
---------

.. tip::

   This feature is useful to batch build/test all tracked documentations.

Generates all documentations of the watched repositories
(see :git-doctools:`adi_doctools/lut.py`).

Two generation strategies are available:

* monolithic: patches all docs together into a single monolithic output (default).
* symbolic: generate each doc independently, just save them together (``--symbolic``).

For the monolithic output, do:

.. shell::

   /tmp/all-docs
   $adoc aggregate

Some documentations depend on auto generated sections and extra features, use
the ``--extra`` option to enable those; it considers that the environment has all
the tools needed, for example, ``vivado`` is accessible for the HDL documentation.
See :git-doctools:`adi_doctools/cli/aggregate.py` to understand how the extra steps are
included, but in summary, they are just a sequence of bash commands wrapped on python.

For all options, do:

.. shell::

   $adoc aggregate --help

HDL Render
----------

Exposes the HDL component diagram generator as a CLI.
It converts IP-XACT files into SVGs.

To generate and open the diagram, provide the path containing the IP-XACT and use
the ``--open`` option:

.. shell::

   $adoc hdl-render --input PATH --open

For example:

.. shell::

   $adoc hdl-render --input hdl/library/axi_dmac --open

For all options, do:

.. shell::

   $adoc hdl-render --help
