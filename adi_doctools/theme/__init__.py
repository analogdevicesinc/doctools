from os import path, getenv

from lxml import etree
from lxml import html

from docutils import nodes
from sphinx.highlighting import PygmentsBridge
from sphinx.transforms.post_transforms import SphinxPostTransform

from .cosmic import cosmic_setup


def theme_config_setup(app):
    # Name of the repository that this doc belong to
    app.add_config_value('repository', None, 'env', [str])
    # Prefix paths with *repos/<repo>*
    app.add_config_value('monolithic', False, 'env', [bool])
    # Generate auxiliary metadata files
    app.add_config_value('export_metadata', False, 'env', [bool])
    # Hide topics from the toctree expect the current one
    app.add_config_value('filter_toctree', None, 'env', [bool])
    # Setup meta tag with target depth
    app.add_config_value('target_depth', None, 'env', [str])

    app.connect("config-inited", config_inited)
    app.connect("build-finished", build_finished)


setup = [
    cosmic_setup,
    theme_config_setup
]

names = ['cosmic', 'harmonic']


def config_inited(app, config):
    """
    Overwrite theme options with enviroment variables.
    Config values have higher precedance.
    Meant for value injection during CI.
    """
    if config.filter_toctree is None:
        ftoc = getenv("ADOC_FILTER_TOCTREE", default="0")
        config.filter_toctree = True if ftoc == "1" else False
    else:
        config.filter_toctree = config.filter_toctree == True

    target_depth = config.target_depth
    if config.target_depth is None:
        target_depth = getenv("ADOC_TARGET_DEPTH", default="0")
        try:
            target_depth = int(target_depth)
        except Exception as err:
            logger.warn(f"ADOC_TARGET_DEPTH '{target_depth}' is not an int.")
            target_depth = 0
    config.target_depth = path.join('..', *[".."]*target_depth)


def build_finished(app, exc):
    if app.builder.format == 'html' and not exc:
        if app.env.config.export_metadata:
            import json

            repos = {}
            for key in app.lut['repos']:
                repos[key] = {
                    'name': app.lut['repos'][key]['name'],
                    'visibility': app.lut['repos'][key]['visibility']
                }
                if 'topic' in app.lut['repos'][key]:
                    repos[key]['topic'] = app.lut['repos'][key]['topic']
            metadata = {'repotoc': repos}
            if app.lut['banner']['msg'] is not None:
                metadata['banner'] = app.lut['banner']
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
    repo, repos, depth = conf_vars
    root = etree.Element("root")
    home = "index.html"
    current = ''

    repository = {}
    topics = {}
    for key in repos:
        if repos[key]['visibility'] == 'public':
            if 'topic' in repos[key]:
                for k in repos[key]['topic']:
                    topics[f"{key}/{k}"] = repos[key]['topic'][k]
            else:
                repository[key] = repos[key]['name']

    repotoc = {**topics, **repository}
    for item in repotoc:
        href = path.join(content_root, depth, item, home)
        attrib = {}
        if repo is not None and item.startswith(repo):
            if '/' in item:
                sub = item[item.find('/')+1:]
                href = f"{content_root}{sub}/{home}"
                if pagename.startswith(sub):
                    attrib = {'class': 'current'}
                    current = item
            else:
                href = f"{content_root}{home}"
                attrib = {'class': 'current'}
                current = repo
        link = etree.Element("a", attrib={
            'href': href,
            **attrib
        })
        link.text = repotoc[item]
        root.append(link)

    return (etree.tostring(root, pretty_print=True, encoding='unicode'),
            current)


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

    conf_vars = (
        app.env.config.repository,
        app.lut['repos'],
        app.env.config.target_depth
    )

    lvl = [0]

    def get_topic(pagename):
        i = pagename.find('/')
        return pagename[0:i] if i != -1 else ''

    def filter_toctree(root, pagename):
        """
        Filter-out non-current topics/"toctrees-titles".
        Non-titled toctrees are squashed with the last toctree, e.g.
         toctrees                          |  visible
         1, 2, 3 (current)                 -> 1, 2, 3
         1 (current), 2 Info, 3, 4 User, 5 -> 1
         1, 2 Info, 3, 4 User (current), 5 -> 4, 5
         1, 2 Info, 3, 4 User, 5 (current) -> 4, 5
         1, 2 Info, 3, 4 User, 5           -> 1, 2, 3, 4, 5

        It is done like this because one reason to have multiple toctrees
        is to tweak the max depth option depending on the content,
        but still on the same topic.
        Only the System Level Documentation should have toctrees with captions.
        """
        body = root.find('./body')

        found = False
        #      Current, Elements
        tocs = [[False, []]]
        for e in body.getchildren():
            if e.tag == 'ul':
                if e.get("class") == "current":
                    tocs[-1][0] = True
                    found = True
            elif e.tag == 'p':
                tocs.append([False,[]])
            tocs[-1][1].append(e)

        # If page not on toctree, do not filter
        # e.g. /index.html, /search.html, orphan
        if not found:
            return

        for t in tocs:
            if t[0] == False:
                for e in t[1]:
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

    if toctree_html:
        parser = etree.HTMLParser()
        root = etree.fromstring(toctree_html, parser)

        if app.env.config.filter_toctree:
            filter_toctree(root, pagename)
        for ul in root.findall('./body/ul'):
            for li in ul.findall('./li[@class]'):
                iterate(li)

        toctree_html = etree.tostring(root, pretty_print=True, encoding='unicode')

    _repotoc_tree, _current = repotoc_tree(content_root, conf_vars, pagename)
    if conf_vars[0] in conf_vars[1]:
        name = conf_vars[1][conf_vars[0]]['name']
    else:
        # If repository entry is not in the lut.py, use the project entry
        name = app.env.config.project
    return (toctree_html, _repotoc_tree, name, _current)


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
