.. _cli:

Command line interface
================================================================================

The Doctools bundles a command line interface called ``adoc`` meant to ease both
continuous integration and local builds of the documentation.

Below, it is briefly described each command, and it is worth noting that every
command supports the ``--help`` option for quick look up.

.. _author-mode:

Author Mode
--------------------------------------------------------------------------------

Watches the docs and source code to rebuild it on edit.

Two HTML live update strategies are available:

* selenium: Page reloads through Firefox's API (default).
* pooling: The webpage pools timestamp changes on the ``.dev-pool`` file (fallback).

To launch a watched instance, do:

.. shell::

   $adoc author-mode --directory /path/to/docs

Where ``/path/to/docs`` is the path to the folder contain the Sphinx's ``Makefile``.

To also watch changes made to theme itself, use the ``--dev`` option, just make
sure to have Doctools as :ref:`development-install`.

For PDF output, do:

.. shell::

   $adoc author-mode --directory /path/to/docs --builder pdf

Make sure to use an PDF viewer that watches the file timestamp
and automatically reloads, such as Gnome PDF (Evince).

All options can be listed with:

.. shell::

   $adoc author-mode --help

How can I rebuild the whole documentation within Author Mode?
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Run ``make clean`` in another tab, it will trigger a full rebuild.

Do **not** do ``make clean html`` since it will generate a build without the
proper Author Mode environment and live reload won't work properly.

Why is the output missing styling (CSS stylesheet)?
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

You probably did a :ref:`development-install` without :ref:`web-compiler`
and you are building directly (``make html``) instead of using Author Mode.

If you don't want to install ``npm``, use Author Mode and accept the prompt to
fetch the pre-built web-scripts from the latest release.

Why is the Python source code of this repo not watched?
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Since a Python scripts change would affect rebuilding the whole documentation,
those files are not watched by design even with the ``--dev`` option.
Extensions at the doc itself are, however.

Alternatively, touch the source doc of the open page to rebuild only it
with the edited Python code.

.. _custom-doc:

Custom Doc
--------------------------------------------------------------------------------

Generates custom documents with filtered content from all documentations of the
watched repositories (see :git-doctools:`adi_doctools/lut.py`).

For PDF output, `WeasyPrint <https://weasyprint.org/>`__ is used (ensure to install it).

To quick start, run the tool twice in an empty directly.

.. shell::

   $cd /tmp
   $adoc custom-doc --directory my_doc --builder pdf
    Configuration file doc.yaml not found, created template at:
    /tmp/my_doc/doc.yaml
    Update it with the desired sources and rerun the tool.
   $adoc custom-doc --directory my_doc --builder pdf
    [ build output ]

The *doc.yaml* file is a concise human readable markup file to set the desired
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

Aggregate
--------------------------------------------------------------------------------

.. tip::

   This feature is useful to batch build/test all tracked documentations.

Generates all documentations of the watched repositories
(see :git-doctools:`adi_doctools/lut.py`).

Two generation strategies are available:

* monolithic: patches all docs together into a single monolithic output (default).
* symbolic: generate each doc independently, just save them together (``--symbolic``).

For the monolithic output, do:

.. shell::

   $adoc aggregate --directory output

Some documentations depend on auto generated sections and extra features, use
the ``--extra`` option to enable those; it considers that the environment has all
the tools needed, for example, ``vivado`` is accessible for the HDL documentation.
See :git-doctools:`adi_doctools/cli/aggregate.py` to understand how the extra steps are
included, but in summary, they are just a sequence of bash commands wrapped on python.

For all options, do:

.. shell::

   $adoc aggregate --help

HDL Render
--------------------------------------------------------------------------------

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
