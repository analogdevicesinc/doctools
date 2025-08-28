.. description::

   Continuous deployment pipeline and instructions to set up a self-hosted
   GitHub Actions runner using Podman or Docker and systemd without root.

.. _ci:

Continuous integration
======================

Doctools has a continuous deployment integration pipeline that works as follows:

::

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

This approach allows having a single defined version on ``adi_doctools/__init__.py``,
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

Below are suggested instructions for setting up ``podman`` on a Linux environment,
if you wish to use it as your container engine. If you already use something else
like ``docker``, **keep it** and skip this section.

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

.. _podman sssd:

Network users & partitions
~~~~~~~~~~~~~~~~~~~~~~~~~~

Podman default configuration expects a local user to be able to create a user
namespace where multiple IDs are mapped and a compatible partition to use as
the storage location ``graphRoot``.

.. note::

   The ideal solution is to create a local **non-root** user and storage
   location. Podman processes should then be started under this user UID.

Network systems using solutions such as `SSSD <https://sssd.io/>`__ do not
append the user to the system (is not listed in ``/etc/subuid``), so automatic
user namespace is not possible. To be compatible with this configuration, a
single UID within a user space needs to be used, achieved with the
``ignore_chown_errors`` parameter.

Normally these systems also mount an network file system (nfs) as the home folder,
which is also not supported.
In this case, the ``graphRoot`` location needs to be set to somewhere else
(an easy test location is ``/tmp``).

This is an example of *~/.config/containers/storage.conf* to support such
environments:

.. code:: ini

   [storage]
   driver = "overlay"
   # Set to a path in a non-nfs partition
   graphRoot = "/tmp"

   [storage.options.overlay]
   # Single UID
   ignore_chown_errors = "true"

Ensure apply with ``podman system migrate`` and see the changed settings with
``podman info``.

An alternative mitigation for nfs is to create a xfs disk image and mount, but
since mount requires a root permission it is unlikely to be helpful for most
users:

.. code:: bash

   truncate -s 100g ~/.local/share/containers-xfs.img
   mkfs.xfs -m reflink=1  ~/.local/share/containers-xfs.img -m bigtime=1,inobtcount=1 -i nrext64=0
   sudo mount ~/.local/share/containers-xfs.img ~/.local/share/containers

.. _image-podman:

Build the container image
-------------------------

To build the container image, use your favorite container engine:

.. shell::

   $cd ~/doctools
   $alias container=podman # or docker, ...
   $container build --tag adi/doctools:latest ci

You may want to build the container in a host, where you have all your tools installed,
and then deploy to a server.
In this case, export the image and then import on the server:

.. shell::
   :show-user:
   :user: user
   :group: host

   ~/doctools
   $container save -o adi-doctools.tar adi/doctools:latest
   $scp adi-doctools.tar server:/tmp/

.. shell::
   :show-user:
   :user: admin
   :group: server

   /tmp
   $container load -i adi-doctools.tar

Or if you are feeling adventurous:

.. shell::
   :show-user:
   :user: user
   :group: host

   ~/doctools
   $container save adi/doctools:latest | ssh server "cat - | podman load"

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
:git-doctools:`this suggested bash method <ci/scripts/container-run.sh>`
to interactive login into an image, mounting the provided path, to run the steps
on the container, for example:

.. shell::

   ~/doctools
   $cr adi/doctools:latest .
   $python3.13 -m venv venv
   $source venv/bin/activate ; \
   $    pip3.13 install -e . ; \
   $    pip3.13 install pytest
   $cd tests ; pytest
   $exit

.. _podman-run:

Self-hosted runner
------------------

To host your `GitHub Actions Runner <https://github.com/actions/runner>`__,
set up your secrets:

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

.. collapsible:: Docker alternative

   ``docker`` does **not** have a built-in keyring, instead you pass directly
   to ``run`` command. :red:`Consider hardening strategies to mitigate risks`,
   like using other keyring software as below.

   .. shell::

      ~/doctools
      $docker run \
      $    --env public_doctools_org_repository=$(gpg --quiet --batch --decrypt /run/secrets/public_doctools_org_repository.gpg) \
      $    --env public_doctools_runner_token=$(gpg --quiet --batch --decrypt /run/secrets/public_doctools_runner_token.gpg) \
      $    --env runner_labels=v1,big_cpu \
      $    localhost/adi/doctools:latest

The environment variable runner_labels (comma-separated), set the runner labels.
If not provided on the Containerfile as ``ENV runner_labels=<labels,>`` or as argument
``--env runner_labels=<labels,>``, it defaults to ``v1``.
Most of the time, you want to use the Containerfile-set environment variable.

If you are in an environment as described in :ref:`podman sssd`, append these flags
to every ``podman run`` command:

* ``--user root``: due to ``ignore_chown_errors`` allowing a single user mapping,
  this user is root (0). Please note that this the container's root user and in
  most images is the only available user.
* ``--env RUNNER_ALLOW_RUNASROOT=1``: suppresses the GitHub Action runner "Must
  not run with sudo". Again, is the container's root.

.. _cluster-podman:

Self-hosted cluster
-------------------

To host a cluster of self-hosted runners, the recommended approach is to use
systemd services, instead of for example, container compose solutions.

Below is a suggested systemd service at *~/.config/systemd/user/container-public-doctools@.service*.

.. code:: systemd

   [Unit]
   Description=container public doctools ci %i
   Wants=network-online.target

   [Service]
   Restart=on-success
   ExecStart=/bin/podman run \
             --env name_label=%H-%i \
             --secret public_doctools_org_repository,type=env,target=org_repository \
             --secret public_doctools_runner_token,type=env,target=runner_token \
             --conmon-pidfile %t/%n-pid --cidfile %t/%n-cid \
             --label "io.containers.autoupdate=local" \
             --name=public_doctools_%i \
             --memory-swap=20g \
             --memory=16g \
             --cpus=4 \
             -d adi/doctools:latest top
   ExecStop=/bin/sh -c "/bin/podman stop -t 300 $(cat %t/%n-cid) && /bin/podman rm $(cat %t/%n-cid)"
   ExecStopPost=/bin/rm %t/%n-pid %t/%n-cid
   TimeoutStopSec=600
   Type=forking
   PIDFile=%t/%n-pid

   [Install]
   WantedBy=multi-user.target

.. collapsible:: Docker alternative

   .. code:: systemd

      [Unit]
      Description=container public doctools ci %i
      Requires=gpg-passphrase.service
      Wants=network-online.target
      After=docker.service

      [Service]
      Restart=on-success
      ExecStart=/bin/sh -c "/bin/docker run \
                --env name_label=%H-%i \
                --env org_repository=$(gpg --quiet --batch --decrypt /run/secrets/public_doctools_org_repository.gpg) \
                --env runner_token=$(gpg --quiet --batch --decrypt /run/secrets/public_doctools_runner_token.gpg) \
                --cidfile %t/%n-cid \
                --label "io.containers.autoupdate=local" \
                --name=public_doctools_%i \
                --memory-swap=20g \
                --memory=16g \
                --cpus=4 \
                --log-driver=journald \
                -d localhost/adi/doctools:latest top"
      RemainAfterExit=yes
      ExecStop=/bin/sh -c "/bin/docker stop -t 300 $(cat %t/%n-cid) && /bin/docker rm $(cat %t/%n-cid)"
      ExecStopPost=/bin/rm %t/%n-cid
      TimeoutStopSec=600
      Type=forking

      [Install]
      WantedBy=multi-user.target

Remember to ``systemctl --user daemon-reload`` after modifying.
With `autoupdate <https://docs.podman.io/en/latest/markdown/podman-auto-update.1.html>`__,
if the image-digest of the container and local storage differ,
the local image is considered to be newer and the systemd unit gets restarted.

Tune the limit flags for your needs.
The ``--cpus`` flag requires a kernel with ``CONFIG_CFS_BANDWIDTH`` enabled.
You can check with ``zgrep CONFIG_CFS_BANDWIDTH= /proc/config.gz``.

Instead of passing ``runner_token``, you can also pass a ``github_token`` to
generate the ``runner_token`` on demand. Using the ``github_token`` is the
recommended approach because during clean-up the original runner_token may have
expired already.

Alternatively, you can mount a FIFO to ``/var/run/secrets/runner_token`` to
generate a token just in time, without ever passing the github_token to the
container (scripts not provided).

However, please note, just like the GitHub Actions generated ``GITHUB_TOKEN``,
the path ``/run/secrets/runner_token`` can be read by workflows, while the
previous option is removed from the environment prior executing the GitHub
Actions runtime.

The order of precedence for authentication token is:

#. ``github_token``: environment variable.
#. ``runner_token``: plain text or FIFO at */run/secrets/runner_token*.
#. ``runner_token``: environment variable.

Please understand the security implications and ensure the token secrecy,
by for example, require manual approval for running workflows PRs from
third party sources and don't relax ``runner`` user permissions.

The required GitHub Fine-Grained token permission should be set as follows:

For `repository runner <https://docs.github.com/en/rest/actions/self-hosted-runners?apiVersion=2022-11-28#create-a-registration-token-for-a-repository--fine-grained-access-tokens>`_:

* ``administration:write``: "Administration" repository permissions (write).

For `org runner <https://docs.github.com/en/rest/actions/self-hosted-runners?apiVersion=2022-11-28#create-a-registration-token-for-an-organization>`__:

* ``organization_self_hosted_runners:write``: "Self-hosted runners" organization permissions (write).
* The user needs to be an org-level admin.

Then update the systemd service.

Enable and start the service

.. code:: shell

   systemctl --user enable container-public-doctools@0.service
   systemctl --user start container-public-doctools@0.service

.. attention::

   User services are terminated on logout, unless you define
   ``loginctl enable-linger <your-user>`` first.

