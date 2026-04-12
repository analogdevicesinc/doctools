GH pull request comment
=======================

Create a pull request comment, or update if already exists.

**Do not** loosely add `permissions: pull-requests: write` to preceding and generic jobs.

Usage:

```yaml
on:
  pull_request:

jobs:
  # previous jobs ...

  add-comment:
    runs-on: ubuntu-latest
    needs: other_job
    permissions:
      pull-requests: write

    steps:
      - uses: analogdevicesinc/doctools/pr-comment@action
        with:
          pr: ${{ needs.other_job.outputs.pr }}
          body: ${{ needs.other_job.outputs.comment }}
```
