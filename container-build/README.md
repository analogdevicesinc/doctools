Container Build
==============

A reusable action for building container images and uploading them to Cloudsmith.
Supports podman and docker.

Usage
-----

```
on:
  workflow_call:
    inputs:
      repository:
        required: true
        type: string
      ref:
        required: true
        type: string
      containerfile:
        required: true
        type: string

jobs:
  build-container:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: write
    steps:
      - uses: actions/checkout@v5
        with:
          repository: ${{ inputs.organization }}/${{ inputs.repository }}
          ref: ${{ inputs.ref }}


      - uses: analogdevicesinc/doctools/action/container-build@main
        with:
          organization: ${{ github.repository_owner }}
          repository: ${{ inputs.repository }}
          ref: ${{ inputs.ref }}
          containerfile: ${{ inputs.containerfile }}
          cloudsmith-namespace: ${{ vars.CLOUDSMITH_NAMESPACE }}
          cloudsmith-repository: ${{ vars.CLOUDSMITH_REPOSITORY_CONTAINERS }}
          cloudsmith-service-slug: ${{ secrets.CLOUDSMITH_SERVICE_SLUG }}
```

Notes
-----

The Containerfile must contain a `runner_labels` environment variable with version tag:
```dockerfile
ENV runner_labels=repo-only,v1
```