GH Collect PR Comments
======================

Collect and output pull request comments for a specific ref.

This action resolves `ref` to a pull request, then retrieves all comments
from that pull request. `ref` follows the checkout action style and may be:

- a PR number, for example `123` or `pull/123`
- a branch name, for example `my-feature` or `owner:my-feature`
- a commit SHA

The action retrieves:

- Issue comments: top-level conversation comments on the PR.
- Review comments: inline code review comments, including the file path
  and line number.

The action outputs the path of the file containing all comments, as
well as a `comments_file` environment variable.

Usage:

```yaml
on:
  pull_request:

jobs:
  collect-comments:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: read

    steps:
    - uses: analogdevicesinc/doctools/gh-collect-comments@action
      id: get_comments

    - name: Display comments
      run: |
        cat "${{ steps.get_comments.outputs.comments_file }}"
```

With an explicit PR number from a separate workflow run:

```yaml
- uses: analogdevicesinc/doctools/gh-collect-comments@action
  id: get_comments
  with:
    ref: ${{ inputs.ref }}
    repository: ${{ github.repository }}

- name: Process comments
  run: |
    cat "$comments_file"
```
