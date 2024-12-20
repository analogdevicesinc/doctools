from typing import Any
from os import path, getenv
from packaging.version import Version
from docutils import nodes

from sphinx.util.osutil import SEP
from sphinx.transforms import SphinxTransform

from .theme import (navigation_tree, get_pygments_theme,
                    write_pygments_css, wrap_elements)
from .theme import setup as theme_setup, names as theme_names
from .directive import setup as directive_setup
from .role import setup as role_setup
from .lut import get_lut
from .role.interref import interref_repos_apply
from .monkeypatch import monkeypatch_figure_numbers

__version__ = "0.3.54"


def get_navigation_tree(app, context, pagename):
    # The navigation tree, generated from the sphinx-provided ToC tree.
    if "toctree" in context:
        toctree = context["toctree"]
        toctree_html = toctree(
            collapse=False,
            titles_only=True,
            maxdepth=-1,
            includehidden=True,
        )
    else:
        toctree_html = ""

    from packaging.version import Version
    from sphinx import __version__ as __sphinx_version__

    if Version(__sphinx_version__) < Version('7.2.0'):
        from urllib.parse import quote

        url = quote(pagename)
        context['content_root'] = (f'..{SEP}' * url.count(SEP)) or f'.{SEP}'

    return navigation_tree(app, toctree_html,
                           context['content_root'], pagename)


def html_page_context(app, pagename, templatename, context, doctree):
    ret = get_navigation_tree(app, context, pagename)
    (context["toc_tree"],
     context["repotoc_tree"],
     context["repotoc_current_name"],
     context["repotoc_current"]) = ret
    context["global_root"] = path.join(context["content_root"],
                                       app.env.config.target_depth) + SEP


def config_inited(app, config):

    if config.numfig_per_doc:
        monkeypatch_figure_numbers()

    app.lut = get_lut()

    interref_repos_apply(app)

    # Inject version value, config entry has higher precedence
    if 'version' not in config:
        doc_version = getenv("ADOC_DOC_VERSION", default="")
        try:
            doc_version = str(Version(doc_version))
        except Exception as err:
            pass
        config.version = doc_version
    # Parameter to enable PDF output tweaks
    config.media_print = True if getenv("ADOC_MEDIA_PRINT") is not None else False

def builder_inited(app):
    if app.builder.format == 'html':
        # Add include regardless of theme.
        if getenv("ADOC_DEVPOOL") is not None:
            app.add_js_file("dev-pool.js", priority=500, defer="")

        # Add bundled JavaScript if current theme is from this extension.
        if app.env.config.html_theme in theme_names:
            app.add_js_file("app.umd.js", priority=500, defer="")
            app.config.html_permalinks_icon = ""
            get_pygments_theme(app)
        else:
            app.add_css_file("third-party.css", priority=500, defer="")


def build_finished(app, exc):
    """
    Injects assets.
    It's the last resort, prefer adding the files to the theme static folder,
    since they are auto copied to _assets by sphinx.
    It is used for:
    * Add the Author Mode's pooling mode's JavaScript.
    * Add directive/role CSS for third party themes.
    * ESD Warning SVG
    """
    def copy_asset(app, uri):
        from sphinx.util.fileutil import copy_asset_file

        src_uri = path.join(path.dirname(__file__), 'miscellaneous', uri)
        build_uri = path.join(app.builder.outdir, '_static', uri)
        copy_asset_file(src_uri, build_uri)

    if app.builder.format == 'html' and not exc:
        if getenv("ADOC_DEVPOOL") is not None:
            copy_asset(app, "dev-pool.js")

        if app.env.config.html_theme not in theme_names:
            copy_asset(app, "third-party.css")
        else:
            write_pygments_css(app)

        copy_asset(app, "esd-warning.svg")


class unique_ids(SphinxTransform):
    """
    Suffix IDs/anchors to make them unique, e.g.
    {overview, features, ..., overview} ->
    {overview, features, ..., overview-1}
    """
    default_priority = 500
    used_ids = set()

    def apply(self, **kwargs: Any) -> None:
        if self.app.builder.name != "singlehtml":
            return

        def make_unique_id(node, id_):
            """
            A node contains multiple ids, the first is the title
            text converted to ID, then, if present, the label
            e.g.:
              .. _documentation+a label:

              My header
              ---------

            becomes:
              ["my-header", "documentation-a-label"]

            The first is the one is the one we worry about collision
            """
            counter = 1
            id__ = id_
            while id__ in self.used_ids:
                id__ = f"{id_}-{counter}"
                counter += 1
            self.used_ids.add(id__)
            node['ids'][0] = id__

        # findall (Docutils >= 0.18.1) returns an iterator,
        # and deprecates traverse (returns a list).
        # Sphinx 7.1.2 requires Docutils >= 0.18.1
        for node in self.document.findall():
            if (not isinstance(node, nodes.Text) and
                'ids' in node and node['ids']):
                make_unique_id(node, node['ids'][0])


def setup(app):
    for setup in theme_setup:
        setup(app)
    for setup in directive_setup:
        setup(app)
    for setup in role_setup:
        setup(app)

    app.add_transform(unique_ids)
    app.add_post_transform(wrap_elements)

    app.connect("config-inited", config_inited)
    app.connect("builder-inited", builder_inited)
    app.connect("html-page-context", html_page_context)
    app.connect("build-finished", build_finished)

    app.add_config_value('numfig_per_doc', False, 'env', [str])

    return {
        "parallel_read_safe": True,
        "parallel_write_safe": True,
        "version": __version__,
    }
