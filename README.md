# Analog Devices Doctools

[Analog Devices Inc.](http://www.analog.com/en/index.html)
central repository to host tooling for automated documentation builds.
It includes Sphinx extensions, themes, and tools for multiple repositories in
the organization.

All tools, directives and roles are documented in this repository documentation.

Guarantee to work with Python newer than 3.8 and distros released on or after 20H1
(e.g. Ubuntu 20.04 LTS).

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
The generated documentation will be available at `docs/_build/html` and it
provides information about the `adoc` command line tool and general documentation
guidelines.

In summary, the `author-mode` allows to live reload the documentation when editing
the docs, and `aggregate` to generate an aggregated documentation of the multiple
repositories.

[1] There is a [known bug](https://github.com/pypa/setuptools/issues/3269)
with pip shipped with Ubuntu 22.04

### Using a Python virtual environment

Installing packages at user level through pip is not always recommended, instead,
consider using a Python virtual environment (``python3-venv`` on ubuntu 22.04).
To create and activate the environment, do before the previous instructions:
```
python3 -m venv ./venv
source ./venv/bin/activate
```
Use ``deactivate`` to exit the virtual environment.

For next builds, just activate the virtual environment:
```
source ./venv/bin/activate
```

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
