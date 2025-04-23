Depth
=====

Sets the FETCH_DEPTH variable, to be passed to GitHub's checkout action.
Meant to be used with GitHub default behaviour:
* pr: merge commit
* push: new commits

Usage:

```
on: workflow_call
jobs:
  checks:
    runs-on: [self-hosted, v1]

    steps:
    - uses: analogdevicesinc/doctools/range@v1
    - uses: actions/checkout@v4
      with:
        fetch-depth: ${{ env.FETCH_DEPTH }}
```
