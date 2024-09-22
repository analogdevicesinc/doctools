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

.. code::

   adoc author-mode --directory /path/to/docs

Where ``/path/to/docs`` is the path to the folder contain the Sphinx's ``Makefile``.

To also watch changes made to theme itself, use the ``--dev`` option, just make
sure to have Doctools as :ref:`development-install`.

For PDF output, do:

.. code::

   adoc author-mode --directory /path/to/docs --builder pdf

Make sure to use an PDF viewer that watches the file timestamp
and automatically reloads, such as Gnome PDF (Evince).

All options can be listed with:

.. code::

   adoc author-mode --help

How can I rebuild the whole documentation within Author Mode?
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Run ``make clean`` in another tab and then touch any file.

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

Aggregate
--------------------------------------------------------------------------------

.. warning::

   This feature is under elaboration.

Generates all documentations of the watched repositories, which currently are:

* :git-documentation:`/`
* :git-hdl:`/`
* :git-no-os:`/`
* :git-pyadi-iio:`/`
* :git-doctools:`/`

Two generation strategies are available:

* monolithic: patches all docs together into a single monolithic output (default).
* symbolic: generate each doc independently, just save them together (``--symbolic``).

For the monolithic output, do:

.. code::

   adoc aggregate --directory output

Some documentations depend on auto generated sections and extra features, use
the ``--extra`` option to enable those; it considers that the environment has all
the tools needed, for example, ``vivado`` is accessible for the HDL documentation.
See :git-doctools:`adi_doctools/cli/aggregate.py` to understand how the extra steps are
included, but in summary, they are just a sequence of bash commands wrapped on python.

For all options, do:

.. code::

   adoc aggregate --help

HDL Render
--------------------------------------------------------------------------------

Exposes the HDL component diagram generator as a CLI.
It converts IP-XACT files into SVGs.

To generate and open the diagram, provide the path containing the IP-XACT and use
the ``--open`` option:

.. code::

   adoc hdl-render --input PATH --open

For example:

.. code::

   adoc hdl-render --input hdl/library/axi_dmac --open

For all options, do:

.. code::

   adoc hdl-render --help
