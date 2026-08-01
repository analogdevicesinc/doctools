GH Upload Pages Artifact
========================

Deploy a site as github-pages artifact and to github-pages-archieve branch under git lfs.
The artifact is consumed by actions/deploy-pages@v5.
Is protected against forks.

On push, adds artifact to root ./, if new_tag is true, add to ./<tag> as well.
On pull_request, adds to ./pull/<id>

Important: if the workflow runs in other branches, filter the branches as in the example below.
If not, it will write to root and create tags (if new_tag == true) as well!


Usage:

```

on:
  push:
    branches:
      - main
      - dev
      - dev/*

  pull_request:

jobs:
  deploy-gh-pages:
    runs-on: [self-hosted, v1]
    permissions:
      contents: write
    if: ${{ github.ref == 'refs/heads/main' || startsWith(github.ref, 'refs/pull/') }}

    steps:
    - uses: analogdevicesinc/doctools/gh-upload-pages-artifact@action
      with:
        new_tag: ${{ inputs.new_tag }}
        tag: ${{ inputs.tag }}
        path: .

  deploy-gh-pages:
    runs-on: ubuntu-latest
    needs: [build-doc]
    concurrency:
      group: gh-pages
    permissions:
      pages: write
      id-token: write
    if: ${{ github.ref == 'refs/heads/main' || startsWith(github.ref, 'refs/pull/') }}
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
    - uses: actions/deploy-pages@v5
      id: deployment
```

The `inputs.path` allow to deploy to a different path (`mkdir -p` behaviour).
Please, be cautious when combining with `inputs.tag`, e.g., `path: dev`,
`new_tag: true`,  `tag: v1.0`, will store the doc to `dev/` ("unstable dev")
and `dev/v1.0` ("stable dev"). The path input can be helpful when your
repository has multiple 'packages', or you just want to publish a development
version from a branch, without a pull request.
