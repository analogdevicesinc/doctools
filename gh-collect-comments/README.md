GH Collect PR Comments
======================

Collect and output pull request comments for a specific commit.

This action resolves a commit SHA to its associated pull request, then
retrieves all comments from that pull request:

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

With an explicit SHA from a separate workflow run:

```yaml
- uses: analogdevicesinc/doctools/gh-collect-comments@action
  id: get_comments
  with:
    head-sha: ${{ env.head_sha }}
    repository: ${{ github.repository }}

- name: Process comments
  run: |
    cat "$comments_file"
```
