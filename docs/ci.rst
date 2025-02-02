.. _ci:

Continuous integration
================================================================================

Doctools package pipeline
--------------------------------------------------------------------------------

Doctools has a continuous deployment integration pipeline that works as follows:

.. code::

                      ┌──────────────────┐
                   ┌─►│Build Doc & Deploy├─┐
                   │  └──────────────────┘ │
                   │                       │
   ┌─────────────┐ │  ┌────────────────┐   │  ┌──────────────┐
   │Build Package├─┼─►│Build Doc on Min├───┼─►│Deploy Package│
   └─────────────┘ │  └────────────────┘   │  └──────────────┘
                   │                       │
                   │  ┌─────┐              │
                   └─►│Tests├──────────────┘
                      └─────┘

The Build Package step "compiles" JavaScript and SASS, fetches third-party
assets and licenses and generates the Python package.

Then, in the middle-stage, two parallel runs are launched:

* *Build Doc Latest*: uses the latest stable dependencies releases to
  generate this documentation, and store as an artifact.
* *Build Doc on Min*: uses the minimum requirements dependencies to generate
  this documentation, but the output is discarded.
* *Tests*: run tests using ``pytest``, in special, methods that are not called
  during the *Build Doc \** pipelines.

Both of them are set to fail-on-warning during the documentation generation.

Finally, the Deploy Package:

* Grabs the version and checks if the tag version already exists:

  * If so, set to update the symbolic ``pre-release`` release.
  * If not, set to update the symbolic ``latest`` and ``pre-relase`` release.

* Still if a new version:

  * Create the git tag and push to origin.
  * Create the tagged release.
  * Upload the artifact to the tagged release.

* Upload the artifact to the symbolic release (``pre-release``, ``latest``).

* Finally, the *Build Doc Latest* artifact is downloaded and deployed to the
  branch ``gh-pages``

By design, the live page on *github.io* follows the pre-release/latest commit-ish;
properly versioned live documentation should be managed by an external system
that watches the git tags (e.g.
`readthedocs <https://github.com/readthedocs/readthedocs.org>`_).

This approach allows to have a single defined version on ``adi_doctools/__init__.py``,
and have the tags created and releases created/updated without much fuzz.

The philosophy is to have ``latest`` updated on tag increment and first
successful run, and ``pre-relese`` updated on successful run without tag change.
These releases exist to provide a pointer to the latest/pre-release packages, e.g.
`releases/download/latest/adi-doctools.tar.gz <https://github.com/analogdevicesinc/doctools/releases/download/latest/adi-doctools.tar.gz>`_.

Non-handled corner-cases mitigations:

* Release ``pre-release`` and ``latest`` must exist prior the first run.
* Branch ``gh-pages`` must exist with at least one commit.

Documentation build and deployment
--------------------------------------------------------------------------------

Doctools is developed to work offline, in a local server, as a rolling release
(e.g. on GitHub Page)s and versioned in a dedicated server (with orchestration).

.. _ci-local:

Local
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For offline and local server, a ``make html`` suffice to generate the
documentation.

To serve the build in a local server, Python built-in server can be used:

.. shell::

   $python -m http.server -d /path/to/docs/_build/html

Or with hot reload using :ref:`serve`:

.. shell::

   $adoc serve -d /path/to/docs

.. _ci-rolling-release:

Rolling release
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For a rolling release, a workflow file is used.

With GitHub Actions, the following workflow file is recommended:

.. code:: yaml

   on:
     push:
       branches:
         - main
     pull_request:

   jobs:
     build-doc:
       runs-on: ubuntu-latest

       steps:
       - uses: actions/checkout@v4
       - uses: actions/setup-python@v5
         with:
           python-version: "3.x"

       - name: Install pip packages
         working-directory: docs
         run: |
           pip install pip --upgrade
           pip install -r requirements.txt

       - name: Build doc
         working-directory: docs
         run: |
           make html SPHINXOPTS='-W --keep-going'

       - name: Store the generated doc
         uses: actions/upload-artifact@v4
         with:
           name: html
           path: docs/_build/html

     deploy-doc:
       runs-on: ubuntu-latest
       needs: build-doc
       if: github.ref == 'refs/heads/main'

       steps:
       - run: |
           git config --global user.name "${{ github.event.head_commit.committer.name }}"
           git config --global user.email "${{ github.event.head_commit.committer.email }}"

       - uses: actions/checkout@v4
       - name: Create gh-pages branch
         run: >
           git ls-remote --exit-code --heads origin refs/heads/gh-pages ||
           (
             git reset --hard ;
             git clean -fdx ;
             git checkout --orphan gh-pages ;
             git reset --hard;
             git commit -m "empty" --allow-empty ;
             git push origin gh-pages:gh-pages
           )

       - uses: actions/checkout@v4
         with:
           ref: 'gh-pages'

       - name: Empty gh-pages
         run: |
           git rm -r . --quiet || true

       - uses: actions/download-artifact@v4
         with:
           name: html

       - name: Patch doc build
         run: |
           rm -r _sources
           touch .nojekyll

       - name: Commit gh-pages
         run: |
           git add . >> /dev/null
           git commit -m "deploy: ${GITHUB_SHA}" --allow-empty

       - name: Push to gh-pages
         run: |
           git push origin gh-pages:gh-pages

With the Sphinx ``-W`` flag, Sphinx exits with an error if any warning is logged,
and ``--keep-going`` continues the build even if a warning is logged, to provide
a complete log for analysis.

The ``deploy-doc`` job only runs when push/merged to main.

.. attention::

   ``GITHUB_SHA`` on ``pull_request`` is the pre-commit and not the head commit,
   please be aware of GitHub events values if implementing something else.

The *requirements.txt* file should contain:

.. code::

   sphinx
   https://github.com/analogdevicesinc/doctools/releases/download/latest/adi-doctools.tar.gz

.. _ci-versioned:

Versioned
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The live versioned version requires additional orchestration than the
:ref:`ci-rolling-release`.

The versions are described in ``tags.json`` file on the root path
that can take two formats, one simpler with a plain string array and other
fine-grained to allow full control.

String array form
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

But first, store each version in separated folders in the root path, e.g.
``v1.1``, ``v2.2``, ``main``, ``dev``.

The simple ``tags.json`` is a plain array with each version/path on the
and generate a ``tags.json``, e.g. ``["v1.1", "v2.2", "main", "dev", ""]``
(a empty string means there is a built doc on the root and will be named
``main (unstable)``).
The first tag will be labeled with ``latest``.

.. tip::

   See this repo's :git-doctools:`.github/workflows/deploy.yml` for a suggestion on
   how to implement it.

This ``tags.json`` format can be obtained with:

.. shell::

   # Search for every doc's objects.inv store the paths as JSON.
   $find . -name objects.inv -exec sh -c 'dirname {}' ';' | \
   $    cut -c 3- | \
   $    sort -r | \
   $    jq --raw-input . | \
   $    jq --slurp . > tags.json

Fine-grained form
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The more elaborated option takes the following format:

.. code:: json

   {
     "path": ["name", "label"],
     // ...
   }

For example:

.. code:: json

   {
     "main": ["main", "unstable"],
     "v2.0.0": ["v2.0.0", "pre-release"],
     "v1.2.1": ["v1.2.1", "latest"],
     "v1.2.0": ["v1.2.0", ""],
     "v1.1.7": ["v1.1.7", ""],
     "prs/staging/new-feature": ["new-feature", "experimental"]
   }

Notice how the "name" and "label" for path ``prs/staging/new-feature``
was used to provide a more concise but clearer name to this entry.

Further notes
+++++++++++++

I don't want a doc at the root
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If the root does not contain any built doc, add a redirect HTML file pointing
to the main/stable version:

.. code::

   <!DOCTYPE html>
   <html>
     <head>
       <meta http-equiv="refresh" content="0; url=main/index.html" />
     </head>
   </html>

How do I cross-reference a specific version?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

For :ref:`in-org-ref`, the doc shall target a specific version by suffixing
the target the version on the ``interref_repos`` variable, e.g.
``interref_repos = ['pyadi-iio/dev', 'other-repo/v1.1']``.

What happened to ``ADOC_TARGET_DEPTH``?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Previously there was also a ``ADOC_TARGET_DEPTH`` enviroment variables
to create full relative links between versions, but this was deprecated
by instead just using the root ``/`` for those links, e.g.
``/doctools/v1.0.0`` instead of ``../../../doctools/v1.0.0`` from
``doctools/v2.0.0/some/page.html``.

This has the side effect of requiring to repository docs to be hosted right
at the root.
