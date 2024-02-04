# ADI Doc Tools

[Analog Devices Inc.](http://www.analog.com/en/index.html)
central repository to host tooling for automated documentation builds.
It includes Sphinx extensions, themes, and tools for multiple repositories in
the organization.

All tools, directives and roles are documented in this repository documentation.

## Release install

Ensure pip is newer than 23.0 [1]:
```
pip install pip --upgrade
```
Install the documentation tools, which will fetch this repository release:
```
(cd docs ; pip install -r requirements.txt)
```
Build the documentation with Sphinx:
```
(cd docs ; make html)
```
The generated documentation will be available at `docs/_build/html`.

Use Author Mode to live update the page while editing:
```
adoc author-mode --d docs
```
See all options with
```
adoc author-mode --help
```
[1] There is a [known bug](https://github.com/pypa/setuptools/issues/3269)
with pip shipped with Ubuntu 22.04

## Development install

Development mode allows to edit the source code and apply the changes without
reinstalling.
Also extends Author Mode to watch changes on the webpage source code
(use `--dev`/`-r` option to enable this).

Before getting started, install `npm`.
It is required due to the web scripts (`js modules`) and style sheets (`sass`).

At this path, install the `npm` dependencies locally:
```
npm install rollup \
    @rollup/plugin-terser \
    rollup-plugin-scss \
    sass \
    --save-dev
```

Fetch third-party fonts:
```
./ci/fetch-fonts.sh
```

Finally, do a symbolic install of this repo:
```
pip install -e . --upgrade
```

### Why is the Python source code of this repo not watched?

Since a Python change would affect rebuilding the whole documentation,
those files are not watched by design.
Extensions at the doc itself are, however.

Alternatively, touch the source doc of the open page to rebuild only it
with the edited Python code.

## Removing

To remove, either release or development, do:
```
pip uninstall adi-doctools
```
