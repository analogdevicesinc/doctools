Installing
================================================================================

Below is described how to do a release install and a development install of Doctools.

.. _release-install:

Release install
--------------------------------------------------------------------------------

Ensure pip is newer than 23.0 [#f1]_:

.. code::

   pip install pip --upgrade

Install the documentation tools, which will fetch this repository release:

.. code::

   (cd docs ; pip install -r requirements.txt)

Test it building this documentation:

.. code::

   (cd docs ; make html)


.. [#f1] There is a `known bug <https://github.com/pypa/setuptools/issues/3269>`_
   with pip shipped with Ubuntu 22.04.

.. _development-install:

Development install
--------------------------------------------------------------------------------

Development install allows to edit the source code and apply the changes without
reinstalling.
Also extends Author Mode to watch changes on the webpage source code
(use `--dev`/`-r` option to enable this).

Before getting started, install `npm`.
It is required due to the web scripts (`js modules`) and style sheets (`sass`).

At the repository root, install the `npm` dependencies locally:

.. code::

   npm install rollup \
       @rollup/plugin-terser \
       rollup-plugin-scss \
       sass \
       --save-dev


Fetch third-party fonts:

.. code::

   ./ci/fetch-fonts.sh


Finally, do a symbolic install of this repo:

.. code::

   pip install -e . --upgrade

.. _removing:

Removing
--------------------------------------------------------------------------------

To remove, either release or development, do:

.. code::

   pip uninstall adi-doctools
