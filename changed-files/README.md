Changed files
=============

Get if files changed. Changed files list is written to changed_files. Writes to
both environment and output. $base_sha and $head_sha can be on the enviroment,
passed explicitely, or obtained through the github action context. The
resolution is equal to doctools/checkout@action, and the action can be added
right after.

Output:

- all_changed_files: rule grouped list of changed files
- changed_keys: comma separated list of rules that matches (`packages`, `doc`, ...)

`changed_keys` can be used to skip jobs (e.g, no doc changes -> skip doc job).

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
      changed_keys: ${{ steps.state.outputs.changed_keys }}
    steps:
    - uses: analogdevicesinc/doctools/changed-files@action
      id: state
      with:
        rules: |
          package:^adi_doctools/
          doc:^doc/
          ci:^.github/\|^ci/

  build-package:
    needs: [state]
    # Skip if no changes to ./adi_doctools/ (rule package)
    if: contains(needs.state.outputs.changed_keys, 'package')
    uses: ./.github/workflows/build-package.yml
    secrets: inherit

  debug-state:
    runs-on: ubuntu-latest
    needs: [state]
    env:
      changed_keys: ${{ needs.state.outputs.changed_keys }}
    steps:
      - run: echo $changed_keys
      - run: echo ${{ needs.state.outputs.changed_keys }}

```
