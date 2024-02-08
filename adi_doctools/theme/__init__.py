import os

from lxml import etree
from lxml import html

from docutils import nodes
from sphinx.highlighting import PygmentsBridge
from sphinx.transforms.post_transforms import SphinxPostTransform

from .cosmic import cosmic_setup

subdomains = [
    # url_path           name
    ['documentation',    "System Level"],
    ['hdl',              "HDL"],
    ['no-os',            "no-OS"],
    ['pyadi-iio',        "pyadi-iio"],
]


def theme_config_setup(app):
    app.add_config_value('repository', None, 'env')


setup = [
    cosmic_setup,
    theme_config_setup
]

names = ['cosmic']


def subdomain_tree(content_root, repo):
    """
    Create the subdomain tree linking to other repos documentations.
    From the 'repository' config value, a 'current' class is added to
    the link targeting the current doc.
    The links are functional with at least 1 level of depth, for example:
    docs.example.com/hdl -> ../no-os -> docs.example.com/no-os
    docs.example.com/v0.1/hdl -> ../no-os -> docs.example.com/v0.1/no-os
    While something with 0 depth is improper:
    hdl-docs.example.com -> ../no-os -XXX-> hdl-docs.example.com/no-os
    """
    root = etree.Element("root")
    home = "index.html"
    for sd in subdomains:
        if sd[0] == repo:
            link = etree.Element("a", attrib={
                'href': f"{content_root}{home}",
                'class': 'current'
            })
        else:
            link = etree.Element("a", attrib={
                'href': f"{content_root}../{sd[0]}/{home}",
            })
        link.text = sd[1]
        root.append(link)
    return etree.tostring(root, pretty_print=True, encoding='unicode')


def navigation_tree(toctree_html, content_root, repo):
    """
    Add collapsible sections to the navigation tree.
    Adapted from
    https://github.com/pradyunsg/furo/blob/main/src/furo/navigation.py
    Parse html similar to directive/hdl_parser.py:parse_hdl_component.
    Uses checkbox~label trick, similar to
    directive/common.py:directive_base:collapsible.
    Add elements, similar to toos/hdl_render.py:hdl_component.py
    """
    if not toctree_html:
        return toctree_html

    parser = etree.HTMLParser()
    root = etree.fromstring(toctree_html, parser)

    lvl = [0]

    def iterate(elem):
        for ul in elem.findall('./ul'):
            lvl[-1] += 1
            tag = '-'.join(map(str, lvl))
            _input = html.Element('input', attrib={
                'class': 'toctree-collapse',
                'type': 'checkbox',
                'name': f"toctree-collapse-{tag}",
                'id': f"toctree-collapse-{tag}"
            })
            _class = elem.get("class")
            if _class is not None and 'current' in _class:
                _input.set('checked')
            label = etree.Element("label", attrib={
                'for': f"toctree-collapse-{tag}"
            })
            label.text = ''

            for a in elem.findall('./a'):
                elem.remove(a)

            div = etree.Element("div", attrib={
                'class': 'collapse'
            })
            icon = etree.Element("div", attrib={
                'class': 'icon'
            })
            icon.text = ''
            label.append(icon)
            div.append(a)
            div.append(label)
            elem.insert(0, div)
            elem.insert(0, _input)
            lvl.append(0)
            for li in ul.findall('./li[@class]'):
                iterate(li)
            lvl.pop()

    for ul in root.findall('./body/ul'):
        for li in ul.findall('./li[@class]'):
            iterate(li)

    _sidebar_tree = etree.tostring(root, pretty_print=True, encoding='unicode')
    _subdomain_tree = subdomain_tree(content_root, repo)
    return (_sidebar_tree, _subdomain_tree)


def get_pygments_theme(app):
    if app.config.pygments_style is None:
        app.config.pygments_style = 'friendly'
    light_ = app.config.pygments_style
    app.env.pygments_theme = {
        "light": PygmentsBridge("html", light_).formatter_args["style"],
        "dark": PygmentsBridge("html", "native").formatter_args["style"],
    }


def write_pygments_css(app):
    light_formatter = PygmentsBridge.html_formatter(
            style=app.env.pygments_theme["light"])
    dark_formatter = PygmentsBridge.html_formatter(
            style=app.env.pygments_theme["dark"])

    def get_styles(formatter, *, prefix):
        for line in formatter.get_linenos_style_defs():
            yield f"{prefix} {line}"
        yield from formatter.get_background_style_defs(prefix)
        yield from formatter.get_token_style_defs(prefix)

    lines = []

    lines.append("@media (prefers-color-scheme: light) {")
    lines.extend(get_styles(light_formatter,
                            prefix="body:not(.dark) .highlight"))
    lines.extend(get_styles(dark_formatter,
                            prefix="body.dark .highlight"))
    lines.append("}")

    lines.append("@media (prefers-color-scheme: dark) {")
    lines.extend(get_styles(light_formatter,
                            prefix="body.light .highlight"))
    lines.extend(get_styles(dark_formatter,
                            prefix="body:not(.light) .highlight"))
    lines.append("}")

    with open(
        os.path.join(app.builder.outdir, "_static", "pygments.css"),
        "w",
        encoding="utf-8",
    ) as f:
        f.write("\n".join(lines))


class wrap_elements(SphinxPostTransform):
    """A Sphinx post-transform that wraps table and div.math in a container.

    This makes it possible to handle these overflowing the content-width,
    which is necessary in a responsive theme.
    from: https://github.com/pradyunsg/furo/blob/main/src/furo/__init__.py
    """

    formats = ("html",)
    default_priority = 500

    def run(self, **kwargs) -> None:
        """Perform the post-transform on `self.document`."""
        if self.env.config.html_theme not in names:
            return

        get_nodes = (
            self.document.findall  # docutils 0.18+
            if hasattr(self.document, "findall")
            else self.document.traverse  # docutils <= 0.17.x
        )
        for node in list(get_nodes(nodes.table)):
            new_node = nodes.container(classes=["table-wrapper"])
            new_node.update_all_atts(node)
            node.parent.replace(node, new_node)
            new_node.append(node)

        for node in list(get_nodes(nodes.math_block)):
            new_node = nodes.container(classes=["math-wrapper"])
            new_node.update_all_atts(node)
            node.parent.replace(node, new_node)
            new_node.append(node)
