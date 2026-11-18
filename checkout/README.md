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
    - uses: analogdevicesinc/doctools/checkout@action
```

Key-points:

For references with a pull request:

* Rebase on base reference.
* Fixups are auto-squashed.

Sets `base_sha`, `head_sha` and `pr` (if a pull request is resolved).
For pull requests, `head_ref` is the short source branch name and `base_ref`
is the short target branch name.

You may pass a full git remote (git, ssh, https) to the `repository` input,
or just `org/repo` to expand to github url with the github token set.
