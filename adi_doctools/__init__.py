from os import path, getenv
from packaging.version import Version

from sphinx.util.osutil import SEP
from sphinx import __version__ as __sphinx_version__

from .theme import (navigation_tree, get_pygments_theme,
                    write_pygments_css, wrap_elements)
from .theme import setup as theme_setup, names as theme_names
from .directive import setup as directive_setup
from .role import setup as role_setup
from .lut import get_lut
from .role.interref import interref_repos_apply, interref_repos_assert
from .monkeypatch import monkeypatch_figure_numbers, monkeypatch_singlehtml_builder
from .transforms import setup as transforms_setup

__version__ = "0.4.32"


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

    metadata = app.env.metadata[pagename]
    body_class = metadata.get('body-class', '')
    if app.builder.name == 'singlehtml':
        body_class = (body_class + " singlehtml").strip()
    context['body_class'] = body_class


def config_inited(app, config):
    """
    Called only when adi_doctools is present in the extensions list.
    Can be used to adjust features when using other themes.
    Is required for manipulating config values in some cases.
    """
    app.lut = get_lut()
    interref_repos_apply(config)

    return

def builder_inited(app):
    config = app.config

    if config.numfig_per_doc:
        monkeypatch_figure_numbers()

    if (Version(__sphinx_version__) >= Version("8.2.0") and
        app.builder.name == 'singlehtml'):
        monkeypatch_singlehtml_builder()

    if not hasattr(app, 'lut'):
        app.lut = get_lut()
    interref_repos_assert(config)

    # Inject version value, environment entry has higher precedence
    doc_version = getenv("ADOC_DOC_VERSION", default=None)
    if doc_version is not None:
        try:
            doc_version = 'v'+str(Version(doc_version))
        except Exception:
            pass
        config.version = doc_version
    # Parameter to enable PDF output tweaks
    config.media_print = True if getenv("ADOC_MEDIA_PRINT") is not None else False
    config.no_collections = True if getenv("ADOC_NO_COLLECTIONS") is not None else False

    # Default repository as project if not provided
    if config.repository is None:
        config.repository = config.project

    if app.builder.format == 'html':
        # Add include regardless of theme.
        if getenv("ADOC_DEVPOOL") is not None:
            app.add_js_file("dev-pool.js", priority=500, loading_method="async")

        theme_path = path.join(path.dirname(__file__), 'theme', 'harmonic')
        app.config.html_static_path.append(path.join(theme_path, 'static_common'))
        if app.env.config.core_repo:
            app.config.html_static_path.append(
                path.join(path.dirname(__file__), 'theme', 'harmonic', 'static_core')
            )
        # Add bundled JavaScript if current theme is from this extension.
        if app.env.config.html_theme in theme_names:
            app.add_js_file("app.umd.js", priority=500, loading_method="async")
            app.config.html_permalinks_icon = ""
            get_pygments_theme(app)
        else:
            app.add_css_file("third-party.css", priority=500)


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


def setup(app):
    for setup in theme_setup:
        setup(app)
    for setup in directive_setup:
        setup(app)
    for setup in role_setup:
        setup(app)
    for setup in transforms_setup:
        setup(app)

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
