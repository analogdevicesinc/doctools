Installing
================================================================================

Below is described how to do a release install and a development install of Doctools.

Guarantee to work with Python newer than 3.8 and distros released on or after 20H1
(e.g. Ubuntu 20.04 LTS).

.. _release-install:

Release install
--------------------------------------------------------------------------------

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
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Installing packages at user level through pip is not always recommended, instead,
consider using a Python virtual environment (``python3-venv`` on ubuntu 22.04).

To create and activate the environment, do before the previous instructions:

.. shell::

   $python3 -m venv ./venv
   $source ./venv/bin/activate

Use ``deactivate`` to exit the virtual environment.

For next builds, just activate the virtual environment:

.. shell::

   $source ./venv/bin/activate

.. _development-install:

Development install
--------------------------------------------------------------------------------

Development install allows to edit the source code and apply the changes without
reinstalling.
Also extends Author Mode to watch changes on the webpage source code
(use `--dev`/`-r` option to enable this).

.. _web-compiler:

Install the web compiler
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you care about the web scripts (`js modules`) and style sheets (`sass`),
install ``npm`` and the ``npm`` packages below, if not, read this section's
last paragraph.

.. note::

   If the ``npm`` provided by your package manager is too old and updating with
   ``npm install npm -g`` fails, consider installing with
   `NodeSource <https://github.com/nodesource/distributions>`_.

At the repository root, install the `npm` dependencies locally:

.. shell::

   $npm install rollup \
   $    @rollup/plugin-terser \
   $    rollup-plugin-scss \
   $    sass \
   $    --save-dev

If you choose to not use ``npm``, you can obtain pre-built web-scripts from the
latest release.
For that, just run :ref:`author-mode` after the repository is installed and
confirm the prompt that will appear.

Fetch third-party resources
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Fetch third-party fonts:

.. shell::

   $./ci/fetch-fonts.sh

Install the repository
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Finally, do a symbolic install of this repo:

.. shell::

   $pip install -e . --upgrade

.. _removing:

Removing
--------------------------------------------------------------------------------

To remove, either release or development, do:

.. shell::

   $pip uninstall adi-doctools
