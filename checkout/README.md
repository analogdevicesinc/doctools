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

* Fixups are auto-squashed, as an alternative to force pushing.
* For pull-requests, rebase on base reference instead of awkward merge commit.
* Current checkout branch is always called `trunk`
* Sets the `fetch_depth`, `base_sha`, `head_sha` and `ahead_by` to
  ease running check scripts.

You may provide `base-sha` and `head-sha` inputs to define the commit range.
Those will take precedence over any event type.

If you don't pass `head-sha` and event type is not `pull_request` or `push`,
`head_sha` is set to the current HEAD SHA at the remote default branch.

You may pass a full git remote (git, ssh, https) to the `repository` input,
or just `org/repo` to expand to github url with the github token set.
