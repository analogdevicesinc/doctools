GH Pages remove path
====================

Removes a path from gh-pages, mostly useful for pull_requests.
Is protected against forks.

Usage:

```
on:
  pull_request:
    types: [closed]

jobs:
  clean-gh-pages:
    runs-on: [self-hosted, v1]
    permissions:
      contents: write

    steps:
    - uses: analogdevicesinc/doctools/gh-pages-rm-path@action
      with:
        path: pull/${{ github.event.number }}
```
