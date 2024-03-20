from os import path

from lxml import etree
from lxml import html

from docutils import nodes
from sphinx.highlighting import PygmentsBridge
from sphinx.transforms.post_transforms import SphinxPostTransform

from .cosmic import cosmic_setup


def theme_config_setup(app):
    app.add_config_value('repository', None, 'env')
    app.add_config_value('monolithic', False, 'env')
    app.add_config_value('doctools_export_metadata', False, 'env')

    app.connect("build-finished", build_finished)


setup = [
    cosmic_setup,
    theme_config_setup
]

names = ['cosmic']


def build_finished(app, exc):
    if app.builder.format == 'html' and not exc:
        if app.env.config.doctools_export_metadata:
            import json

            repos = {}
            for key in app.lut:
                repos[key] = {
                    'name': app.lut[key]['name'],
                    'visibility': app.lut[key]['visibility']
                }
                if 'topic' in app.lut[key]:
                    repos[key]['topic'] = app.lut[key]['topic']
            metadata = {'repotoc': repos}
            file = path.join(app.builder.outdir, 'metadata.json')
            with open(file, 'w') as f:
                json.dump(metadata, f, indent=4)


def repotoc_tree(content_root, conf_vars, pagename):
    """
    Create the repotoc tree linking to other repos documentations.
    From the 'repository' config value, a 'current' class is added to
    the link targeting the current doc.
    The links are functional with at least 1 level of depth, for example:
    docs.example.com/hdl -> ../no-OS -> docs.example.com/no-OS
    docs.example.com/v0.1/hdl -> ../no-OS -> docs.example.com/v0.1/no-OS
    While something with 0 depth is improper:
    hdl-docs.example.com -> ../no-OS -XXX-> hdl-docs.example.com/no-OS
    """
    repo, lut = conf_vars
    root = etree.Element("root")
    home = "index.html"
    depth = '../'

    repository = {}
    topics = {}
    for key in lut:
        if lut[key]['visibility'] == 'public':
            if 'topic' in lut[key]:
                for k in lut[key]['topic']:
                    topics[f"{key}/{k}"] = lut[key]['topic'][k]
            else:
                repository[key] = lut[key]['name']

    repotoc = {**topics, **repository}
    for item in repotoc:
        href = f"{content_root}{depth}{item}/{home}"
        attrib = {}
        if repo is not None and item.startswith(repo):
            if '/' in item:
                sub = item[item.find('/')+1:]
                href = f"{content_root}{sub}/{home}"
                if pagename.startswith(sub):
                    attrib = {'class': 'current'}
            else:
                href = f"{content_root}{home}"
                attrib = {'class': 'current'}
        link = etree.Element("a", attrib={
            'href': href,
            **attrib
        })
        link.text = repotoc[item]
        root.append(link)
    return etree.tostring(root, pretty_print=True, encoding='unicode')


def navigation_tree(app, toctree_html, content_root, pagename):
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

    conf_vars = (
        app.env.config.repository,
        app.lut
    )

    lvl = [0]

    def get_topic(pagename):
        i = pagename.find('/')
        return pagename[0:i] if i != -1 else ''

    def filter_tree(root, conf_vars, pagename):
        repo, lut = conf_vars
        # Keep unchanged for standalone pages (e.g. /index.html, /search.html)
        repository = {}
        topics = {}
        for key in lut:
            if lut[key]['visibility'] == 'public':
                if 'topic' in lut[key]:
                    topics.update(lut[key]['topic'])
                else:
                    repository[key] = lut[key]['name']
        repotoc = {**topics, **repository}
        if repo not in repotoc:
            return

        # Pop toctrees that are not from the current repo
        title = repotoc[repo]
        body = root.find('./body')
        txt = ''
        for e in body.getchildren():
            if e.tag == 'p':
                span = e.find('./span')
                if span is not None:
                    txt = span.text
                body.remove(e)
            elif txt != title:
                body.remove(e)

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

    repo = app.env.config.repository
    if repo in app.lut and "topic" in app.lut[repo]:
        conf_vars_ = (get_topic(pagename), *conf_vars[1:])
        filter_tree(root, conf_vars_, pagename)

    for ul in root.findall('./body/ul'):
        for li in ul.findall('./li[@class]'):
            iterate(li)

    _toc_tree = etree.tostring(root, pretty_print=True, encoding='unicode')
    _repotoc_tree = repotoc_tree(content_root, conf_vars, pagename)
    return (_toc_tree, _repotoc_tree)


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
        path.join(app.builder.outdir, "_static", "pygments.css"),
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
