Changed files
=============

Get if files changed. Changed files list is written to changed_files. Writes to
both environment and output. Assumes $base_sha and $head_sha are set already,
e.g. by the doctools/checkout@action.

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
