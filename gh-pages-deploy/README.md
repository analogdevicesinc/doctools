GH Pages deploy
===============

Deploy a path to gh-pages.
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
    - uses: analogdevicesinc/doctools/gh-pages-deploy@action
      with:
        new_tag: ${{ inputs.new_tag }}
        tag: ${{ inputs.tag }}
        name: html

```

