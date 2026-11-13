from docutils import nodes

MARKER = 'src-line-'

block_nodes = (
    nodes.Titular,
    nodes.paragraph,
    nodes.list_item,
    nodes.term,
    nodes.literal_block,
    nodes.table,
    nodes.figure,
    nodes.image,
    nodes.Admonition,
    nodes.block_quote,
    nodes.line_block,
    nodes.rubric,
    nodes.transition,
)


def mark_source_lines(app, doctree, docname):
    if not app.config.source_line_markers or app.builder.format != 'html':
        return

    source = str(app.env.doc2path(docname))
    last = 0
    for node in doctree.findall(nodes.Element):
        if node.__module__ != 'docutils.nodes' or not isinstance(node, block_nodes):
            continue
        line = node.line or 0
        if line <= last or str(node.source) != source:
            continue
        if isinstance(node, nodes.title) and isinstance(node.parent, nodes.section):
            line = max(line - 1, 1)
        node['classes'].append(f"{MARKER}{line}")
        last = line


def setup(app):
    app.add_config_value('source_line_markers', False, 'html', [bool])
    app.connect("doctree-resolved", mark_source_lines)
