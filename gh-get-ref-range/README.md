# GH Get Ref Range

Resolves a Git reference to head and base commit SHAs.
Ref can be branches, tags, SHA, and pull request numbers (123, pull/123,
pull/123/head).

## Usage

```yaml
- uses: analogdevicesinc/doctools/gh-get-ref-range@action
  id: refs
  with:
    ref: ${{ github.event.inputs.ref }}

- run: |
    echo "Head SHA: ${{ steps.refs.outputs.head_sha }}"
    echo "Base SHA: ${{ steps.refs.outputs.base_sha }}"
```

The action also sets environment variables (`head_sha`, `base_sha`) for
convenience in subsequent steps.
