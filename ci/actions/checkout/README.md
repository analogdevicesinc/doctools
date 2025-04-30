Checkout
========

An alternative to https://github.com/actions/checkout with entrypoints for
https://github.com/nektos/act/ with https://github.com/containers/podman

Usage:

```
on: workflow_call
jobs:
  checks:
    runs-on: [self-hosted, v1]

    steps:
    - uses: analogdevicesinc/doctools/checkout@v1
```

Key-points:

* For pull-requests, rebase on base reference instead of awkward merge commit.
* Current checkout branch is always called ``trunk``
* Sets the ``fetch_depth``, ``base_sha``, ``head_sha`` and ``number_commits`` to
  ease running checkscripts.

When working locally, the user can set the following enviroment variables:

* ACT_DEPTH: The depth when fetching, overwrites depth
* ACT_HEAD: The head to fetch

At repository level, the owner shall change the local mountpoint from ``/mnt/repo`` to
something else by setting input ``act-mountpoint``.
A motivation maybe compatibility with a specific container, file structure.
