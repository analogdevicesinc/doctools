from __future__ import annotations

from typing import TYPE_CHECKING

from docutils import nodes
from sphinx import addnodes
from sphinx.directives.other import TocTree
from sphinx.util import logging
from .common import get_document_description

if TYPE_CHECKING:
    from docutils.nodes import Node
    from sphinx.application import Sphinx

logger = logging.getLogger(__name__)


class directive_toctree_preview(TocTree):
    """
    Creates a toctree, but adds a preview of the page.
    Note that it won't show sub-levels, only depth 1.
    """

    def run(self) -> list[Node]:
        result = super().run()

        if result:
            compound_node = result[0]
            for node in compound_node.findall(addnodes.toctree):
                node['include_description'] = True

        return result

def directive_toctree_preview_doctree_resolved(app, doctree, fromdocname):
    for toctreenode in doctree.findall(addnodes.toctree):
        if not toctreenode.get('include_description', False):
            continue

        bullet_list = nodes.bullet_list()
        bullet_list['classes'].append('toctree-preview')

        for title_, docname in toctreenode['entries']:
            title = app.env.titles[docname].astext()

            doctree = app.env.get_doctree(docname)
            # doctree_resolved may not have been yield for doctree yet,
            # so do the same call as the directive_description_doctree_resolved
            description = get_document_description(doctree)

            node_list_item = nodes.list_item()
            node_title = nodes.paragraph()

            ref = nodes.reference('', '', internal=True)
            ref['refuri'] = app.builder.get_relative_uri(
                fromdocname, docname
            )
            ref += nodes.Text(title)

            node_title += ref
            node_list_item += node_title

            if description:
                node_description = nodes.paragraph(text=description)
                node_list_item += node_description

            bullet_list += node_list_item

        # Replace pending resolve_toctree with early-resolved
        toctreenode.replace_self(bullet_list)


def toctree_preview_setup(app: Sphinx) -> None:
    app.add_directive('toctree-preview', directive_toctree_preview)

    app.connect('doctree-resolved', directive_toctree_preview_doctree_resolved)
