from docutils import nodes
from sphinx.environment.collectors.toctree import TocTreeCollector
from sphinx.builders.singlehtml import SingleFileHTMLBuilder
from sphinx.writers.html5 import HTML5Translator


def monkeypatch_figure_numbers():
    """
    Reset reference counting per page, even when the toctree is not numbered.
    If the toctree is numbered, the offset should resolve as 0.
    """
    old_assign_figure_numbers = TocTreeCollector.assign_figure_numbers

    def assign_figure_numbers(self, env):
        _ = old_assign_figure_numbers(self, env)
        for entry in env.toc_fignumbers:
            for type_ in  env.toc_fignumbers[entry]:
                if len(env.toc_fignumbers[entry][type_]) > 0:
                    offset = env.toc_fignumbers[entry][type_][next(iter(env.toc_fignumbers[entry][type_]))][-1] - 1
                    for id_ in env.toc_fignumbers[entry][type_]:
                        tuple_ = list(env.toc_fignumbers[entry][type_][id_])
                        tuple_[-1] = tuple_[-1]-offset
                        env.toc_fignumbers[entry][type_][id_] = tuple(tuple_)
        # Since we are exactly setting figure numbers per page,
        # old_fignumbers won't fignumbers
        # and we can discard rewrite_needed
        return []

    TocTreeCollector.assign_figure_numbers = assign_figure_numbers


def monkeypatch_singlehtml_builder():
    """
    Patch SingleFileHTMLBuilder to ensure fully qualified refids.
    Appends docname to refids and ids using format /<docname>/#<id>.

    This compensates for the loss of the pathname section of the href
    that ensures uniqueness in the html builder. Without this, sections
    with identical titles across different documents would have colliding IDs.

    Starting from Sphinx version v8.2.0, commit c93723b803
    while all ids beyond page id remain as #my-anchor,
    all href on the localtoc are prefixed by the original doc name, e.g.
      #document-documentation/some-page#evaluation-board-software
    This patch also resolves this issue.

    From: https://github.com/sphinx-doc/sphinx/pull/13739/files

    Revisit: If merged, drop
    """
    old_assemble_doctree = SingleFileHTMLBuilder.assemble_doctree

    def ensure_fully_qualified_refids(builder, tree):
        """
        Append docname to refids and ids using format /<docname>/#<id>.
        Compensates for loss of the pathname section of the href, that
        ensures uniqueness in the html builder.
        """
        for node in tree.findall(nodes.Element):
            assert node.document is not None
            if 'refid' in node or 'ids' in node:
                docname = builder.env.path2doc(node.document['source'])
                if 'refid' in node:
                    node['refid'] = f'/{docname}/#{node["refid"]}'
                if 'ids' in node:
                    node['ids'] = [f'/{docname}/#{id}' for id in node['ids']]

    def assemble_doctree(self):
        tree = old_assemble_doctree(self)
        ensure_fully_qualified_refids(self, tree)
        return tree

    def get_target_uri(self, docname, typ=None):
        if docname in self.env.all_docs:
            # all references are on the same page...
            return f'#/{docname}/'
        else:
            # chances are this is a html_additional_page
            return docname + self.out_suffix

    SingleFileHTMLBuilder.assemble_doctree = assemble_doctree
    SingleFileHTMLBuilder.get_target_uri = get_target_uri

    # Monkeypatch HTML5 writer to generate correct document anchors

    def visit_start_of_file(self, node):
        # Only occurs in the single-file builder
        self.docnames.append(node['docname'])
        # Changed from: '<span id="document-%s"></span>'
        # To match new format: '/<docname>/' instead of 'document-<docname>'
        self.body.append('<span id="/%s/"></span>' % node['docname'])

    HTML5Translator.visit_start_of_file = visit_start_of_file
