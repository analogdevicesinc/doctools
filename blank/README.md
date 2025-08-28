Blank
=====

An alternative to https://github.com/actions/checkout that leaves checkout in an orphan branch without commits.

Usage:

```
on: workflow_call
jobs:
  checks:
    runs-on: [self-hosted, v1]

    steps:
    - uses: analogdevicesinc/doctools/blank@action
```
