Shared composite GitHub Actions
===============================

Contains reusable and public GitHub Actions focused on performance.
This is the v1 release branch.

Use as follows:

```
on: workflow_call
jobs:
  checks:
    runs-on: [self-hosted, v1]

    steps:
    - uses: analogdevices/doctools/checkout@v1
```
