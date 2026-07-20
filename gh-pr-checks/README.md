GH pull request checks
======================

Use Checks API to 'attach' a workflow run to a pull request.

This is useful for `workflow_dispatch` or other workflows that run outside the
pull request event but should still appear in the pull request checks list.

When `conclusion` is empty, the action creates an `in_progress` check run.
When `conclusion` is set, the action completes the existing check run, using
`check-run-id` when provided.

Usage:

```yaml
on:
  workflow_dispatch:
    inputs:
      ref:
        description: "The branch, tag, SHA, or PR number to attach to"
        required: false
        type: string

jobs:
  pr-check-pending:
    runs-on: ubuntu-latest
    permissions:
      checks: write
      pull-requests: read

    outputs:
      pr: ${{ steps.check.outputs.pr }}
      check_run_id: ${{ steps.check.outputs.check_run_id }}

    steps:
      - uses: analogdevicesinc/doctools/gh-pr-checks@action
        id: check
        with:
          ref: ${{ inputs.ref }}
          name: My check

  work:
    runs-on: ubuntu-latest
    needs: pr-check-pending

    steps:
      - run: |
          echo "do work"

  pr-check-conclusion:
    runs-on: ubuntu-latest
    needs:
      - pr-check-pending
      - work
    if: always()
    permissions:
      checks: write
      pull-requests: read

    steps:
      - uses: analogdevicesinc/doctools/gh-pr-checks@action
        with:
          ref: ${{ needs.pr-check-pending.outputs.pr }}
          name: My check
          conclusion: ${{ needs.work.result }}
          check-run-id: ${{ needs.pr-check-pending.outputs.check_run_id }}
```

Inputs:

- `ref`: branch, tag, SHA, PR number, or `pull/<number>` to resolve.
- `name`: check run name.
- `conclusion`: empty for pending; otherwise the check conclusion to set.
- `check-run-id`: existing check run ID to complete.
- `repository`: repository in `org/repo` format. Defaults to the current repository.
- `github-token`: token used for GitHub API calls. Defaults to `github.token`.
- `run-id`: workflow run ID used for the default details URL and external ID.
- `details-url`: explicit URL for the workflow run link. Defaults to
  `${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}`.

Outputs:

- `pr`: resolved pull request number.
- `head_sha`: pull request head SHA.
- `check_run_id`: created or updated check run ID.
