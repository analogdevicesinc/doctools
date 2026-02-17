Installing
==========

How to do a release install, and a development install of Doctools.

Guaranteed to work with Python 3.8 or newer and distributions released on or after
20H1 (e.g., Ubuntu 20.04 LTS).

.. _release-install:

Release install
---------------

Ensure pip is newer than 23.0 [#f1]_:

.. shell::

   $pip install pip --upgrade

Install the documentation tools, which will fetch this repository release:

.. shell::

   $(cd docs ; pip install -r requirements.txt)

Test it building this documentation:

.. shell::

   $(cd docs ; make html)


.. [#f1] There is a `known bug <https://github.com/pypa/setuptools/issues/3269>`_
   with pip shipped with Ubuntu 22.04.


Using a Python virtual environment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Installing packages at user level through pip is not always recommended,
instead, consider using a Python virtual environment (``python3-venv`` on
ubuntu 22.04).

To create and activate the environment, do before the previous instructions:

.. shell::

   $python3 -m venv venv
   $source venv/bin/activate

Use ``deactivate`` to exit the virtual environment.

For next builds, just activate the virtual environment:

.. shell::

   $source venv/bin/activate

Release links and optional dependencies
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The release links are always:

- | https://github.com/analogdevicesinc/doctools/releases/download/latest/adi-doctools.tar.gz
  | latest (commit at tag bump).
- | https://github.com/analogdevicesinc/doctools/releases/download/pre-release/adi-doctools.tar.gz
  | pre-release (main head commit).
- | https://github.com/analogdevicesinc/doctools/releases/download/v0.4.32/adi-doctools.tar.gz
  | specific version.

Optional dependencies can be installed with:

.. code:: bash

   # test, cli, ...
   pip install 'adi_doctools[test] @ https://github.com/analogdevicesinc/doctools/releases/download/latest/adi-doctools.tar.gz'

.. _latex:

LaTeX support
~~~~~~~~~~~~~

Beyond the HTML harmonic theme, limited LaTeX support is available.
To build you will need, at least:

.. shell::

   $ zypper install \
       texlive-latexmk \
       texlive-collection-basic \
       texlive-collection-latex \
       texlive-collection-latexrecommended \
       texlive-collection-latexextra \
       texlive-collection-fontsrecommended \
       texlive-fncychap \
       gnu-free-fonts texlive-gnu-freefont texlive-gnu-freefont-fonts

Due to unicode support, ``latex_engine`` is set to ``xelatex`` internally if
the value is Sphinx default's ``pdflatex``. If ``latex_elements['fontpkg']`` is
not provided, a default is also set with unicode characters.

.. _development-install:

Development install
-------------------

Development install allows editing the source code and applying changes without
reinstalling.
Also extends :ref:`serve` to watch changes on the webpage source code
(use `--dev`/`-r` option to enable this).

.. _web-compiler:

Install the web compiler
~~~~~~~~~~~~~~~~~~~~~~~~

If you care about the web scripts (`js modules`) and style sheets (`sass`),
install ``node.js``, ``npm`` and the ``npm`` packages below, if not, read this
section's last paragraph.

.. note::

   If the ``npm`` provided by your package manager is too old and updating with
   ``npm install npm -g`` fails, consider installing with
   `NodeSource <https://github.com/nodesource/distributions>`_.

At the repository root, install the `npm` dependencies locally:

.. shell::

   $npm install rollup \
   $    @rollup/plugin-terser \
   $    sass \
   $    --save-dev

* rollup/plugin: Module bundler.
* @rollup/plugin-terser: Minified bundle with terser.
* sass: CSS stylesheets.

If you choose to not use ``npm``, you can obtain pre-built web-scripts from the
latest release.
For that, just run :ref:`serve` after the repository is installed and
confirm the prompt that will appear.

Fetch third-party resources
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Fetch third-party fonts:

.. shell::

   $./ci/fetch-fonts.sh

Install the repository
~~~~~~~~~~~~~~~~~~~~~~

Finally, do a symbolic installation of this repo:

.. shell::

   $pip install -e . --upgrade

.. caution::

   If using a python virtual environment for the *requirements.txt* packages,
   do this command with the virtual environment already activated.

   Mixing pip packages inside and outside the virtual environment will cause
   packages outside the environment to not have access to the packages inside
   of it, breaking most CLIs.

.. _removing:

Removing
--------

To remove, either release or development, do:

.. shell::

   $pip uninstall adi-doctools
