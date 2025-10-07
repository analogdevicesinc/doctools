Changed files
=============

Get if files changed. Changed files list is written to changed_files. Writes to
both environment and output. $base_sha and $head_sha can be on the enviroment,
passed explicitely, or obtained through the github action context. The
resolution is equal to doctools/checkout@action, and the action can be added
right after.

Usage:

```
on: workflow_call
jobs:
  checks:
    runs-on: [self-hosted, repo-only]
    outputs:
      package: ${{ steps.state.outputs.package }}
      doc: ${{ steps.state.outputs.doc }}
      #ci: ${{ steps.state.outputs.ci }} suppressed

    steps:
    - uses: analogdevicesinc/doctools/changed-files@action
      id: state
      with:
        rules: |
          package:^adi_doctools/
          doc:^doc/
          ci:^.github/\|^ci/
```

Example

```
on:
  push:
    branches:
      - main
      - dev/*
  pull_request:

jobs:
  state:
    runs-on: [self-hosted, repo-only]
    outputs:
      changed: ${{ steps.state.outputs.changed_keys }}
    steps:
    - uses: analogdevicesinc/doctools/changed-files@action-debug
      id: state
      with:
        rules: |
          package:^adi_doctools/
          doc:^doc/
          ci:^.github/\|^ci/

  build-package:
    needs: [state]
    if: contains(needs.state.outputs.changed, 'pakage')
    uses: ./.github/workflows/build-package.yml
    secrets: inherit

  debug-state:
    runs-on: [self-hosted, repo-only]
    needs: [state]
    env:
      changed: ${{ needs.state.outputs.changed }}
    steps:
      - run: echo $changed
      - run: echo ${{ needs.state.outputs.changed }}

```
