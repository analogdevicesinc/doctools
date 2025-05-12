Checkout
========

An alternative to https://github.com/actions/checkout that flattens pr merge commits.

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

