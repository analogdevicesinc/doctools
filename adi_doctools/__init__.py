import os

from .theme import setup as theme_setup, names as theme_names
from .theme import navigation_tree
from .directive import setup as directive_setup
from .role import setup as role_setup

__version__ = "0.2.2"

dft_is_system_top = False

def get_navigation_tree(context):
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

    return navigation_tree(toctree_html)

def html_page_context(app, pagename, templatename, context, doctree):
    # TODO see https://github.com/sphinx-doc/sphinx/pull/11415
    # and how it would affect a serviceworker.js
    #if "css_files" in context:
        #    print(context["css_files"])
    #
    #if "scripts" in context:
    #    print(context["scripts"])

    context["navigation_tree"] = get_navigation_tree(context);

    return

def builder_inited(app):
    if app.builder.format == 'html':
        # Add include regarless of theme.
        if os.getenv("ADOC_DEVPOOL") is not None:
            app.add_js_file("dev-pool.js", priority=500, defer="")
        # Add bundled JavaScript if current theme is from this extension.
        if app.env.config.html_theme in theme_names:
            app.add_js_file("app.umd.js", priority=500, defer="")
        else:
            app.add_css_file("third-party.css", priority=500, defer="")

def build_finished(app, exc):
    """
    Injects assets.
    It's a last resort solution, prefer adding the files to the theme static folder,
    since they are auto copied to _assets by sphinx.
    It is used for:
    * Add the Author Mode's pooling mode's JavaScript.
    * Add directive/role CSS for third party themes.
    * ESD Warning SVG
    """
    def copy_asset(app, uri):
        from sphinx.util.fileutil import copy_asset_file

        src_uri = os.path.join(os.path.dirname(__file__), f"miscellaneous/{uri}")
        build_uri = os.path.join(app.builder.outdir, '_static', uri)
        copy_asset_file(src_uri, build_uri)

    if app.builder.format == 'html' and not exc:
        if os.getenv("ADOC_DEVPOOL") is not None:
            copy_asset(app, "dev-pool.js")

        if app.env.config.html_theme not in theme_names:
            copy_asset(app, "third-party.css")

        copy_asset(app, "esd-warning.svg")

def setup(app):
    for setup in theme_setup:
        setup(app)
    for setup in directive_setup:
        setup(app)
    for setup in role_setup:
        setup(app)

    app.add_config_value('is_system_top', dft_is_system_top, 'env')

    app.connect("html-page-context", html_page_context)
    app.connect("builder-inited", builder_inited)
    app.connect("build-finished", build_finished)

    return {
        "parallel_read_safe": True,
        "parallel_write_safe": True,
        "version": __version__,
    }
