from docutils import nodes

class node_base(nodes.Element, nodes.General):
    """
    Adapted from
    https://github.com/pradyunsg/sphinx-inline-tabs
    https://github.com/dgarcia360/sphinx-collapse
    """

    @staticmethod
    def visit(self, node):
        attributes = node.attributes.copy()

        attributes.pop("ids")
        attributes.pop("classes")
        attributes.pop("names")
        attributes.pop("dupnames")
        if 'backrefs' in attributes:
            # DEPRECATED: backrefs will be removed from docutils 2.0, not in
            # python 3.14
            attributes.pop("backrefs")

        text = self.starttag(node, node.tagname, **attributes)
        self.body.append(text.strip())

    @staticmethod
    def depart(self, node):
        if node.endtag:
            self.body.append(f"</{node.tagname}>")

    @staticmethod
    def default(self, node):
        pass

class node_div(node_base):
    # prefer nodes.container
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

class node_collection(node_base):
    """
    For now, the node is not written to the html page, but used to resolve
    metadata only.
    """
    tagname = 'div'
    endtag = 'true'

    @staticmethod
    def update_collection_env(builder, olduri, uri):
        builder.collection_image[olduri] = uri

    @staticmethod
    def depart(self, node):
        """
        Check if node has child image, if so,
        collect the uri to files.
        """
        for node_ in node:
            if isinstance(node_, nodes.image):
                oldrelfn, _ =  self.builder.env.relfn2path(
                    node['olduri'],
                    self.builder.current_docname
                )
                if node_['uri'].find('://') == -1:
                    relfn, _ =  self.builder.env.relfn2path(
                        node_['uri'],
                        self.builder.current_docname
                    )
                    if not relfn.startswith(self.builder.imagedir):
                        # likely image file not readable:
                        if node['olduri'] in self.builder.collection_image:
                            del self.builder.collection_image[node['olduri']]
                        continue
                else:
                    relfn = node_['uri']
                node_collection.update_collection_env(
                    self.builder, oldrelfn, relfn
                )
                break
        self.body.append(f"</{node.tagname}>")

def node_setup(app):
    for node in [node_div, node_input, node_label, node_icon, node_video, node_source, node_iframe, node_a, node_pre]:
        app.add_node(node,
            html =(node.visit, node.depart),
            latex=(node.default, node.default),
            text =(node.default, node.default))

    app.add_node(node_collection,
        html =(node.visit, node_collection.depart),
        latex=(node.default, node.default),
        text =(node.default, node.default))
