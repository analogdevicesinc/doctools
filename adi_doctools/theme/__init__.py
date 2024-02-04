import os

from lxml import etree
from lxml import html

from pygments.formatters import HtmlFormatter
from pygments.style import Style
from pygments.token import Text
from sphinx.highlighting import PygmentsBridge

from .adi_common import adi_common_setup

dft_url_documentation  = ''

subdomains = [
    # url_path           name
    ['documentation',    "System Level"],
    ['hdl',              "HDL"],
    ['no-os',            "no-OS"],
]

def theme_config_setup(app):
    app.add_config_value('url_documentation', dft_url_documentation, 'env')

setup = [
    adi_common_setup,
    theme_config_setup
]

names = ['adi-common']

def subdomain_tree(app):
    root = etree.Element("root")
    for sd in subdomains:
        link = etree.Element("a", attrib = {
            'href': f"{app.config.url_documentation}/{sd[0]}"
        })
        link.text = sd[1]
        root.append(link)
    return etree.tostring(root, pretty_print=True, encoding='unicode')

def navigation_tree(app, toctree_html):
    """
    Add collapsible sections to the navigation tree.
    Adapted from
    https://github.com/pradyunsg/furo/blob/main/src/furo/navigation.py
    Parse html similar to directive/hdl_parser.py:parse_hdl_component.
    Uses checkbox~label trick, similar to directive/common.py:directive_base:collapsible.
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
            tag = '-'.join(map(str,lvl))
            _input = html.Element('input', attrib = {
                'class':'toctree-collapse',
                'type':'checkbox',
                'name':f"toctree-collapse-{tag}",
                'id':f"toctree-collapse-{tag}"
            })
            _class = elem.get("class")
            if _class is not None and 'current' in _class:
                _input.set('checked')
            label = etree.Element("label", attrib = {
                'for':f"toctree-collapse-{tag}"
            })
            label.text = ''

            for a in elem.findall('./a'):
                elem.remove(a)

            div = etree.Element("div", attrib = {
                'class':'collapse'
            })
            icon = etree.Element("div", attrib = {
                'class':'icon'
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
    _subdomain_tree = subdomain_tree(app)
    return (_sidebar_tree, _subdomain_tree)

def get_pygments_theme(app):
    if app.config.pygments_style is None:
        app.config.pygments_style = 'friendly'
    app.env.pygments_theme = {
        "light": PygmentsBridge("html", app.config.pygments_style).formatter_args["style"],
        "dark": PygmentsBridge("html", "native").formatter_args["style"],
    }

def write_pygments_css(app):
    light_formatter = PygmentsBridge.html_formatter(style=app.env.pygments_theme["light"])
    dark_formatter = PygmentsBridge.html_formatter(style=app.env.pygments_theme["dark"])

    def get_styles(formatter, *, prefix):
        for line in formatter.get_linenos_style_defs():
            yield f"{prefix} {line}"
        yield from formatter.get_background_style_defs(prefix)
        yield from formatter.get_token_style_defs(prefix)

    lines = []

    lines.append("@media (prefers-color-scheme: light) {")
    lines.extend(get_styles(light_formatter, prefix="body:not(.dark) .highlight"))
    lines.extend(get_styles(dark_formatter, prefix="body.dark .highlight"))
    lines.append("}")

    lines.append("@media (prefers-color-scheme: dark) {")
    lines.extend(get_styles(light_formatter, prefix="body.light .highlight"))
    lines.extend(get_styles(dark_formatter, prefix="body:not(.light) .highlight"))
    lines.append("}")

    with open(
        os.path.join(app.builder.outdir, "_static", "pygments.css"),
        "w",
        encoding="utf-8",
    ) as f:
        f.write("\n".join(lines))
