Shared composite GitHub Actions
===============================

Contains reusable and public GitHub Actions focused on performance.
This is the development/rolling release branch!

For stable, use the tagged versions, for example:

```
on: workflow_call
jobs:
  checks:
    runs-on: [self-hosted, v1]

    steps:
    - uses: analogdevicesinc/doctools/checkout@v1
```

Instead of `analogdevicesinc/doctools/ci/actions/checkout@main`.
