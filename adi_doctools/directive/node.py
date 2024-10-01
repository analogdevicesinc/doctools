from docutils import nodes

class node_base(nodes.Element, nodes.General):
    """
    Adapted from
    https://github.com/pradyunsg/sphinx-inline-tabs
    https://github.com/dgarcia360/sphinx-collapse
    """

    @staticmethod
    def visit(translator, node):
        attributes = node.attributes.copy()

        attributes.pop("ids")
        attributes.pop("classes")
        attributes.pop("names")
        attributes.pop("dupnames")
        attributes.pop("backrefs")

        text = translator.starttag(node, node.tagname, **attributes)
        translator.body.append(text.strip())

    @staticmethod
    def depart(translator, node):
        if node.endtag:
            translator.body.append(f"</{node.tagname}>")

    @staticmethod
    def default(translator, node):
        pass

class node_div(node_base):
    tagname = 'div'
    endtag = 'true'

class node_input(node_base):
    tagname = 'input'
    endtag = 'false'

class node_label(node_base):
    tagname = 'label'
    endtag = 'true'

class node_icon(node_base):
    tagname = 'div'
    endtag = 'false'

class node_video(node_base):
    tagname = 'video'
    endtag = 'true'

class node_source(node_base):
    tagname = 'source'
    endtag = 'false'

class node_iframe(node_base):
    tagname = 'iframe'
    endtag = 'false'

class node_a(node_base):
    tagname = 'a'
    endtag = 'true'

class node_pre(node_base):
    tagname = 'pre'
    endtag = 'true'

def node_setup(app):
    for node in [node_div, node_input, node_label, node_icon, node_video, node_source, node_iframe, node_a, node_pre]:
        app.add_node(node,
                html =(node.visit, node.depart),
                latex=(node.visit, node.depart),
                text =(node.visit, node.depart))
