Cloudsmith Upload Raw
=====================

A reusable action for uploading artifacts to Cloudsmith as raw packages with version tracking.

Supports both API Key and OIDC authentication methods.

Inputs
------

- `gh-token` (optional, default: `${{ github.token }}`): GitHub Token
- `path` (required): Path to the artifact file
- `name` (optional): Artifact name. Defaults to the basename of `path`
- `version` (required): Artifact version
- `tags` (optional): Tags to add to artifact. Defaults to GitHub context tags (branch/PR refs)
- `namespace` (required): Cloudsmith namespace
- `repository` (required): Cloudsmith repository name
- `api-key` (optional): Cloudsmith API Key (for API key authentication)
- `service-slug` (optional): Cloudsmith Service Slug (for OIDC authentication)

Authentication
--------------

- OICD: Provide `namespace` and `service-slug`, higher precedence
- API Key: Provide `api-key`

If `CLOUDSMITH_API_KEY` environment variable is set, OIDC and API Key set are
skipped.

Usage
-----

### Upload SBOM archive from container-build

```yaml
jobs:
  build-and-upload:
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

      - uses: analogdevicesinc/doctools/cloudsmith-upload-raw@action
        with:
          path: ${{ steps.container_build.outputs.sbom_archive }}
          version: ${{ steps.container_build.outputs.version }}
          namespace: ${{ vars.CLOUDSMITH_NAMESPACE }}
          repository: ${{ vars.CLOUDSMITH_REPOSITORY_CONTAINERS }}
          api-key: ${{ secrets.CLOUDSMITH_API_KEY }}
          service-slug: ${{ secrets.CLOUDSMITH_SERVICE_SLUG_CONTAINERS }}
```

### Upload custom artifact

```yaml
jobs:
  upload:
    runs-on: ubuntu-latest
    permissions:
      id-token: write

    steps:
      - uses: analogdevicesinc/doctools/cloudsmith-upload-raw@action
        with:
          path: /path/to/artifact.zip
          name: my-artifact
          version: v1.0.0
          namespace: my-org
          repository: raw-files
          service-slug: ${{ secrets.CLOUDSMITH_SERVICE_SLUG }}
```

Tags
----

By default, the action generates tags based on GitHub context:
- For push events: `refs/heads/<branch>`, `on/push`
- For tag/release events: `refs/tags/<tag>`, `on/tag` or `on/release`
- For pull requests: `refs/pull/<id>/merge`, `refs/heads/<head_ref>`, `refs/base/<base_ref>`, `on/pull_request`

You can override this by providing custom `tags` input.

