from __future__ import annotations

from typing import TYPE_CHECKING

import warnings
from docutils import nodes
from sphinx import addnodes
from sphinx.directives.other import TocTree
from sphinx.util.docutils import LoggingReporter
from sphinx.util import logging
from sphinx.environment import BuildEnvironment
from sphinx.environment.adapters import toctree as toctree_adapters
from sphinx.deprecation import RemovedInSphinx11Warning

if TYPE_CHECKING:
    from docutils.nodes import Node
    from sphinx.application import Sphinx
    from sphinx.builders import Builder

logger = logging.getLogger(__name__)


class directive_toctree_preview(TocTree):
    def run(self) -> list[Node]:
        result = super().run()

        if result:
            compound_node = result[0]
            for node in compound_node.findall(addnodes.toctree):
                node['include_description'] = True

        return result

def toctree_preview_setup(app: Sphinx) -> None:
    original_get_and_resolve = BuildEnvironment.get_and_resolve_doctree

    def resolve_toctree_preview(
        env: BuildEnvironment,
        docname: str,
        builder: Builder,
        toctree: addnodes.toctree,
        *,
        prune: bool = True,
        maxdepth: int = 0,
        titles_only: bool = False,
        collapse: bool = False,
        includehidden: bool = False,
        tags,
        ):
        """
        Alternative to _resolve_toctree with previews.
        Limitation: only displays the first depth.
        """
        bullet_list = nodes.bullet_list()
        bullet_list['classes'].append('toctree-preview')

        for title_, ref in toctree['entries']:
            title = env.titles[ref].astext()

            ref_doctree = original_get_and_resolve(
                env, ref, builder, tags=tags, prune_toctrees=prune
            )
            description = None
            for node in ref_doctree.findall(nodes.meta):
                if node['name'] == 'description':
                    description = node['content']
                    break

            list_item = nodes.list_item()
            title_para = nodes.paragraph()

            reference = nodes.reference('', '', internal=True)
            reference['refuri'] = builder.get_relative_uri(docname, ref)
            reference['anchorname'] = ''
            reference += nodes.Text(title)

            title_para += reference
            list_item += title_para

            if description:
                desc_para = nodes.paragraph(text=description)
                list_item += desc_para

            bullet_list += list_item

        toctree.replace_self(bullet_list)
        return

    def get_and_resolve_doctree_(
        self,
        docname: str,
        builder: Builder,
        *,
        tags,
        doctree: nodes.document | None = None,
        prune_toctrees: bool = True,
        includehidden: bool = False,
    ) -> nodes.document:
        """Read the doctree from the pickle, resolve cross-references and
        toctrees and return it.
        Adapted from: sphinx/enviroment/__init__.py@get_and_resolve_doctree
        """
        if tags is ...:
            warnings.warn(
                "'tags' will become a required keyword argument "
                'for global_toctree_for_doc() in Sphinx 11.0.',
                RemovedInSphinx11Warning,
                stacklevel=2,
            )
            tags = builder.tags

        if doctree is None:
            try:
                doctree = self._write_doc_doctree_cache.pop(docname)
                doctree.settings.env = self
                doctree.reporter = LoggingReporter(str(self.doc2path(docname)))
            except KeyError:
                doctree = self.get_doctree(docname)

        # resolve all pending cross-references
        self.apply_post_transforms(doctree, docname)

        # now, resolve all toctree nodes
        for toctreenode in doctree.findall(addnodes.toctree):
            # monkeypatch-ed this call
            if toctreenode.get('include_description', False):
                resolve_toctree_preview(
                    self,
                    docname,
                    builder,
                    toctreenode,
                    prune=prune_toctrees,
                    includehidden=includehidden,
                    tags=tags,
                )
                continue

            result = toctree_adapters._resolve_toctree(
                self,
                docname,
                builder,
                toctreenode,
                prune=prune_toctrees,
                includehidden=includehidden,
                tags=tags,
            )
            if result is None:
                toctreenode.parent.replace(toctreenode, [])
            else:
                toctreenode.replace_self(result)

        return doctree

    BuildEnvironment.get_and_resolve_doctree = get_and_resolve_doctree_

    app.add_directive('toctree-preview', directive_toctree_preview)
