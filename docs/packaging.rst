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

.. _conf-podman:

Configure podman
----------------

Below are suggested instructions for setting up ``podman`` on a Linux environment.

Adjust to your preference as needed, and skip the steps marked in :green:`green`
if not using WSL2.

Install ``podman`` from your package manager.

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

.. _image-podman:

Build the container image
-------------------------

To build the container image, use your favorite container engine:

.. shell::

   $cd ~/doctools
   $podman build --tag adi/doctools:latest ci

.. _interactive-run:

Interactive run
---------------

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

You can use the :ref:`container image <image-podman>` with
`this suggested bash method <https://gist.github.com/gastmaier/53077a7b8d07a6640358b7c005d797f8>`__
to interactive login into an image, mounting the provided path, to run the steps
on the container, for example:

.. shell::

   ~/doctools
   $pdr adi/doctools:latest .
   $python3.13 -m venv venv
   $source venv/bin/activate ; \
   $    pip3.13 install -e . ; \
   $    pip3.13 install pytest
   $cd tests ; pytest
   $exit

.. _act:

Full local run
--------------

To have a full continuous integration mock-run `act <https://github.com/nektos/act/>`__
can be used.
``act`` is a CLI written in go that allows to run GitHub actions.

Assuming you have the tools necessary already installed (a general guide
is provided :ref:`here <conf-podman>`  and already :ref:`built the image <image-podman>`.
Install ``act`` binary into an executable path:

.. shell::

   $cd ~/.local
   $curl --proto '=https' --tlsv1.2 -sSf \
   $    https://raw.githubusercontent.com/nektos/act/master/install.sh | \
   $    sudo bash
   $act --version
    act version 0.2.74

Now, run your continuous integration:

.. shell::

   ~/doctools
   $act --remote-name private
    INFO[0000] Using docker host 'unix:///run/user/1000//podman/podman.sock',
               and daemon socket 'unix:///run/user/1000//podman/podman.sock'
    INFO[0000] Start server on http://10.44.3.54:34567
    [build/build-doc.yml/build] ⭐ Run Set up job
    [...]

Update ``private`` with your preferred origin name (does nothing beyond suppressing warnings).

.. caution::

   Even with ``pull_request`` event type, no rebasing is done on the mock run.
   Rebase on your side before running ``act``.

Additional arguments are added from the :git-doctools:`.actrc` on invoke.

To run a specific workflow, use ``-W``, e.g.:

.. shell::

   ~/doctools
   $act --remote-name public \
   $    -W .github/workflows/build-doc.yml

By default, it will run on the checks on the top 5 commits, to set other value,
set ``ACT_DETPH`` on *.env*
e.g. 4 commits:

.. shell::

   $echo ACT_DETPH=$(git rev-list --count @~4..@) > .env
   $act pull_request --remote-name public

.. tip::

   Edit ``rev-list`` to use a base commit sha to evaluate the depth.

You can also provide a ``head`` variable to filter out ``wip`` commits, for example:

.. shell::

   $head=$(git rev-parse @~5)
   $echo ACT_HEAD=$head > .env
   $echo ACT_DETPH=$(git rev-list --count $head~5..$head) >> .env
   $act pull_request --remote-name public

.. _podman-run:

Self-hosted runner
------------------

To host your `GitHub Actions Runner <https://github.com/actions/runner>`__,
set-up your secrets:

.. shell::

   # e.g. analogdevicesinc/doctools
   $printf ORG_REPOSITORY | podman secret create public_doctools_org_repository -
   # e.g. MyVerYSecRunnerToken
   $printf RUNNER_TOKEN | podman secret create public_doctools_runner_token -

The runner token is obtained from the GUI at ``github.com/<org>/<repository>/settings/actions/runners/new``.

If ``github_token`` from :ref:`cluster-podman` is set, the runner_token
is ignored and a new one is requested.

.. shell::

   ~/doctools
   $podman run \
   $    --secret public_doctools_org_repository,type=env,target=org_repository \
   $    --secret public_doctools_runner_token,type=env,target=runner_token \
   $    --env runner_labels=v1,big_cpu \
   $    adi/doctools:latest

The environment variable runner_labels (comma-separated), set the runner labels.
If not provided on the Containerfile as ``ENV runner_labels=<labels,>`` or as argument
``--env runner_labels=<labels,>``, it defaults to ``v1``.
Most of the times, you want to use the Containerfile-set environment variable.

.. _cluster-podman:

Self-hosted cluster
-------------------

To host a cluster of self-hosted runners, the recommended approach is to use
systemd services, instead of for example, podman-compose.

Below is a suggested systemd service at *~/.config/systemd/user/podman-public-doctools@.service*.

::

   [Unit]
   Description=Podman public doctools ci %i
   Wants=network-online.target
   After=network-online.target

   [Service]
   Restart=on-failure
   ExecStartPre=/usr/bin/rm -f /%t/%n-pid /%t/%n-cid
   ExecStart=/usr/bin/podman run \
             --env name_label=%i \
             --secret public_doctools_org_repository,type=env,target=org_repository \
             --secret public_doctools_runner_token,type=env,target=runner_token \
             --conmon-pidfile /%t/%n-pid --cidfile /%t/%n-cid \
             --label "io.containers.autoupdate=local" \
             --memory-swap=20g \
             --memory=16g \
             --cpus=4 \
             -d adi/doctools:latest top
   ExecStop=/usr/bin/sh -c "/usr/bin/podman rm -f `cat /%t/%n-cid`"
   TimeoutStopSec=600
   Type=forking
   PIDFile=/%t/%n-pid

   [Install]
   WantedBy=multi-user.target

Remember to ``systemctl --user daemon-reload`` after modifying.
With `autoupdate <https://docs.podman.io/en/latest/markdown/podman-auto-update.1.html>`__,
if the image digest of the container and local storage differ,
the local image is considered to be newer and the systemd unit gets restarted.

Instead of passing runner_token, you can also pass a github_token to generate
the runner_token on demand.
Using the github_token is the recommended approach because during clean-up the original
runner_token may have expired already.

Tune the limit flags for your needs.
The ``--cpus`` flag requires a kernel with ``CONFIG_CFS_BANDWIDTH`` enabled.
You can check with ``zgrep CONFIG_CFS_BANDWIDTH= /proc/config.gz``.

.. shell::

   # e.g. MyVerYSecRetToken
   $printf GITHUB_TOKEN | podman secret create public_doctools_github_token -

Alternatively, you can also mount the ``runner_token`` into
``/run/secrets/runner_token`` and have it read when necessary.
However, please note, just like the GitHub Actions generated ``GITHUB_TOKEN``,
the path ``/run/secrets/runner_token`` can be read by workflows,
while the previous option is removed from the environment prior executing
the GitHub Actions runtime.

The order of precedence for authentication token is:

#. ``github_token``: environment variable.
#. ``runner_token``: plain text at */run/secrets/runner_token*.
#. ``runner_token``: environment variable.

Please understand the security implications and ensure the token secrecy,
by for example, require manual approval for running workflows PRs from
third party sources and don't relax ``runner`` user permissions.

The required GitHub Fine-Grained token permission should be set as follows:

For `repository runner <https://docs.github.com/en/rest/actions/self-hosted-runners?apiVersion=2022-11-28#create-a-registration-token-for-a-repository--fine-grained-access-tokens>`_:

* ``administration:write``: "Administration" repository permissions (write).

For `org runner <https://docs.github.com/en/rest/actions/self-hosted-runners?apiVersion=2022-11-28#create-a-registration-token-for-an-organization>`__:

* ``organization_self_hosted_runners:write``: "Self-hosted runners" organization permissions (write).
* The user needs to be a org-level admin.

Then update the systemd service.

Enable and start the service

.. code:: shell

   systemctl --user enable podman-public-doctools@0.service
   systemctl --user start podman-public-doctools@0.service

.. attention::

   User services are terminated on logout, unless you define
   ``loginctl enable-linger <your-user>`` first.

