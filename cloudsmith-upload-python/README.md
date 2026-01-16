Cloudsmith Upload Python
========================

A reusable action for uploading python packages to Cloudsmith as PyPi packages.

Supports both API Key and OIDC authentication methods.

Inputs
------

- `gh-token` (optional, default: `${{ github.token }}`): GitHub Token
- `path` (required): Path to the pypi archive
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
skipped. Single space `' '` `service-slug` is considered empty, to allow
overwriting organization-level secrets.

Usage
-----

```yaml
jobs:
  upload:
    runs-on: ubuntu-latest
    permissions:
      id-token: write

    steps:
      - uses: analogdevicesinc/doctools/cloudsmith-upload-container@action
        with:
          path: /path/to/dist/image.tar.gz
          namespace: my-org
          repository: python-things
          service-slug: ${{ secrets.CLOUDSMITH_SERVICE_SLUG }}
```

Tags
----

By default, the action generates tags based on GitHub context:
- For push events: `refs/heads/<branch>`, `on/push`
- For tag/release events: `refs/tags/<tag>`, `on/tag` or `on/release`
- For pull requests: `refs/pull/<id>/merge`, `refs/heads/<head_ref>`, `refs/base/<base_ref>`, `on/pull_request`

You can override this by providing custom `tags` input.

