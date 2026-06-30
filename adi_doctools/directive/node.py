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

        align = attributes.pop("align", None)
        if align:
            node['classes'].append('align-%s' % align)

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

class node_video_screen(node_base):
    """Wraps screen-only video content; suppressed entirely in LaTeX."""
    tagname = 'div'
    endtag = 'true'

    @staticmethod
    def visit_latex(self, node):
        raise nodes.SkipNode

class node_video_print(node_base):
    """Wraps print-only video content; renders as an admonition in LaTeX."""
    tagname = 'div'
    endtag = 'true'

    @staticmethod
    def visit_latex(self, node):
        self.body.append('\n\\begin{sphinxadmonition}{note}{Video:}')
        self.no_latex_floats += 1

    @staticmethod
    def depart_latex(self, node):
        self.body.append('\\end{sphinxadmonition}\n')
        self.no_latex_floats -= 1

class node_clear_content(node_base):
    tagname = 'div'
    endtag = 'true'

    @staticmethod
    def visit_latex(self, node):
        if 'break-after' in node.get('classes', []):
            self.body.append('\n\\clearpage\n')
        else:
            self.body.append('\n\\par\n')
        raise nodes.SkipNode

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
    def visit_latex(self, node):
        raise nodes.SkipNode

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

    app.add_node(node_video_screen,
        html =(node_video_screen.visit, node_video_screen.depart),
        latex=(node_video_screen.visit_latex, node_video_screen.default),
        text =(node_video_screen.default, node_video_screen.default))

    app.add_node(node_video_print,
        html =(node_video_print.visit, node_video_print.depart),
        latex=(node_video_print.visit_latex, node_video_print.depart_latex),
        text =(node_video_print.default, node_video_print.default))

    app.add_node(node_clear_content,
        html =(node_clear_content.visit, node_clear_content.depart),
        latex=(node_clear_content.visit_latex, node.default),
        text =(node.default, node.default))

    app.add_node(node_collection,
        html =(node.visit, node_collection.depart),
        latex=(node_collection.visit_latex, node.default),
        text =(node.default, node.default))
