GH collect annotations
======================

Collect and output annotations from GitHub check runs for a specific commit.

This action retrieves all annotations from GitHub Actions check runs associated
with a commit SHA and outputs them in GitHub Actions format. Duplicate
annotations (same path and message) are grouped together to reduce noise.

The action will infer the workflow run id if not provided, selecting the most
recent run. Annotations include the job name, in addition to the file path,
line number, and column number when available.

The action outputs the path of the file containing all annotations, as
well as `annotations_file` environment variable.

Usage:

```yaml
on:
  pull_request:

jobs:
  # previous jobs ...
  collect-annotations:
    runs-on: ubuntu-latest
    permissions:
      checks: read
      contents: read

    steps:
    - uses: analogdevicesinc/doctools/gh-collect-annotations@action
      id: get_annotations
      with:
        head-sha: ${{ github.event.pull_request.head.sha }}

    - name: Display annotations
      run: |
        cat "${{ steps.get_annotations.outputs.annotations_file }}"

```

With explicit run id:

```yaml
- uses: analogdevicesinc/doctools/gh-collect-annotations@action
  id: get_annotations
  with:
    head-sha: ${{ github.sha }}
    run-id: ${{ github.run_id }}
    repository: ${{ github.repository }}

- name: Process annotations
  run: |
    cat "$annotations_file"

```
