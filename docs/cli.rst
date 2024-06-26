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

Two live update strategies are available:

* selenium: Page reloads through Firefox's API (default).
* pooling: The webpage pools timestamp changes on the ``.dev-pool`` file (fallback).

To launch a watched instance, do:

.. code::

   adoc author-mode --directory /path/to/docs

Where ``/path/to/docs`` is the path to the folder contain the Sphinx's ``Makefile``.

To also watch changes made to theme itself, use the ``--dev`` option, just make
sure to have Doctools as :ref:`development-install`.

For all options, do:

.. code::

   adoc author-mode --help

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
