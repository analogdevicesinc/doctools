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

For `workflow_dispatch` events, you must provide the `base-sha` and `head-sha`
inputs to define the commit range. This does not apply to other event types.
`base-sha` as `<sha>~` for easy copy and paste from a pull request is supported.
