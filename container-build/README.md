Container Build
==============

A reusable action for building container images with SBOM generation and CVE
scanning. Supports podman and docker.

This action builds the container and generates artifacts.

Inputs
------

- `gh-token` (optional, default: `${{ github.token }}`): GitHub Token
- `image-name` (required): Image name, can be the repository name
- `containerfile` (required): Path to the Containerfile
- `sbom-cve` (optional, default: true): Generate SBOM and assert CVEs

Outputs
-------

- `image_archive`: Path to the built image archive (.tar file)
- `sbom_archive`: Path to SBOM archive (.zip file) containing SBOM and CVE reports
- `version`: Built version extracted from the project

Usage
-----

```yaml
jobs:
  build-container:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: write

    steps:
      - uses: actions/checkout@v5

      - uses: analogdevicesinc/doctools/container-build@action
        id: container_build
        with:
          image-name: adi/${{ github.event.repository.name }}
          containerfile: path/to/Containerfile

      - uses: analogdevicesinc/doctools/cloudsmith-upload-container@action
        with:
          path: ${{ steps.container_build.outputs.image_archive }}
          namespace: ${{ vars.CLOUDSMITH_NAMESPACE }}
          repository: ${{ vars.CLOUDSMITH_REPOSITORY_CONTAINERS }}
          api-key: ${{ secrets.CLOUDSMITH_API_KEY }}
          service-slug: ${{ secrets.CLOUDSMITH_SERVICE_SLUG_CONTAINERS }}

      - uses: analogdevicesinc/doctools/cloudsmith-upload-raw@action
        with:
          path: ${{ steps.container_build.outputs.sbom_archive }}
          version: ${{ steps.container_build.outputs.version }}
          namespace: ${{ vars.CLOUDSMITH_NAMESPACE }}
          repository: ${{ vars.CLOUDSMITH_REPOSITORY_CONTAINERS }}
          api-key: ${{ secrets.CLOUDSMITH_API_KEY }}
          service-slug: ${{ secrets.CLOUDSMITH_SERVICE_SLUG_CONTAINERS }}
```

Version
-------

The version in inferred from the locations, in order of precedence:

1. Python projects: `__version__` in `<package>/__init__.py`
2. Containerfile: `ENV runner_labels` environment variable with version tag:
   ```dockerfile
   ENV runner_labels=repo-only,v1.0.0
   ```

Scanning
--------

SBOM and CVE scanning is performed using Syft and Grype. The build will fail on
High severity CVEs.