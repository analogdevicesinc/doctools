.. _packaging:

Packaging pipeline
==================

Doctools has a continuous deployment integration pipeline that works as follows:

.. code::

                      ┌──────────────────┐
                   ┌─►│Build Doc Latest  ├─┐
                   │  └──────────────────┘ │
                   │                       │
   ┌─────────────┐ │  ┌────────────────┐   │  ┌──────────────┐
   │Build Package├─┼─►│Build Doc on Min├───┼─►│Deploy Package│
   └─────────────┘ │  └────────────────┘   │  └──────────────┘
                   │                       │
                   │  ┌──────────┐         │
                   ├─►│Custom Doc├─────────┤
                   │  └──────────┘         │
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
* *Custom Doc*: calls :ref:`custom-doc` to check if the CLI tool succeeds in
  generating a full custom PDF document.
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

.. _act:

Running the continuous integration locally
------------------------------------------

At its core, the workflows are straight forward, roughly they do:

The ``Tests`` step:

.. shell::

   $cd tests ; pytest

``Build Doc *``:

.. shell::

   $cd docs ; make html

But at a specific minimum and maximum supported environment version.

``Custom Doc``:

.. shell::

   $mkdir /tmp/test-pdf ; cd $_
   /tmp/test-pdf
   $adoc custom-doc ; adoc custom-doc

Doing the relevant step on host covers most issues that the CI would catch.

Still, the doctools CI is compatible with `act <https://github.com/nektos/act/>`__,
a CLI written in go that allows to run GitHub actions on the host inside containers:

.. shell::

   $act --remote-name public
    INFO[0000] Using docker host 'unix:///run/user/1000//podman/podman.sock',
               and daemon socket 'unix:///run/user/1000//podman/podman.sock'
    INFO[0000] Start server on http://10.44.3.54:34567
    [build-package/build-package.yml/build] ⭐ Run Set up job
    [...]

Update ``public`` with your preferred origin name.
Additional arguments are added from the :git-doctools:`.actrc` on invoke.

To run a specific workflow, use ``-W``, e.g.:

.. shell::

   $act --remote-name public \
   $    -W .github/workflows/build-package.yml


.. _act-podman:

Configuring act with podman and wsl2
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Below are suggested instructions for setting up ``ack`` with ``podman`` on a
Linux system running under WSL2.

Adjust to your preference as needed, and skip the steps marked in :green:`green`
if not using WSL2.

:green:`Ensure cgroup v2 on wsl2's .wslconfig:`

::

   [wsl2]
   kernelCommandLine = cgroup_no_v1=all systemd.unified_cgroup_hierarchy=1

:green:`Restart wsl2.`

Enable podman service for your user.

.. shell::

   $systemctl enable --now --user podman.socket
   $systemctl start --user podman.socket

Set the ``DOCKER_HOST`` variable on your *~/.bashrc*:

.. code-block:: bash

   export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/podman/podman.sock

Fetch ``ack`` binary into an executable path:

.. shell::

   $cd ~/.local/bin/
   $curl --proto '=https' --tlsv1.2 -sSf \
   $    https://raw.githubusercontent.com/nektos/act/master/install.sh | \
   $    sudo bash
   $act --version
    act version 0.2.74

