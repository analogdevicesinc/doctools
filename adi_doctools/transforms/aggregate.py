from os import environ

from sphinx import addnodes
from sphinx.transforms.post_transforms import SphinxTransform
from sphinx.util import docname_join, logging

logger = logging.getLogger(__name__)


class namespace_pending_xfer(SphinxTransform):
    """
    Patch pending xfer to have the format with local with higher precedence,
    if doesn't exist, try external:

        :ref:`hdl:user_guide`
    Rules:

    * Ref:
      - external: Patch all, to always try local first.
      - local: only if root path matches inventory list, creating "namespaces"
        per repository.

    * Doc:
      - external: Check if external would match current tree, if so, convert
        into local.
      - local: Check if matches current tree (only current inventory, if not,
        convert into external.

    This methodology allows to create custom documents having to patch only
    explicit references `.. _my-ref:`, while the xfer are resolved during build.
    """
    default_priority = 3

    def apply(self, **kwargs) -> None:
        inventories = self.env.config.intersphinx_mapping.keys()
        # Top-level folders can be labels of a repository, see monolithic_map
        label_map = self.env.config.monolithic_map
        fromdocname = self.env.docname

        def get_inventory(label):
            inventory = label_map.get(label, label)
            return inventory if inventory in inventories else None

        for node in self.document.findall(addnodes.pending_xref):
            if node['reftype'] == 'doc':
                refdoc = node.get('refdoc', fromdocname)
                if 'intersphinx' in node:
                    docname = node['inventory'] + '/' + node['reftarget'].strip('/')
                    if docname in self.env.found_docs:
                        # all_docs is filled at each doc read, after the Transforms,
                        # use found_docs instead.
                        node['reftarget'] = '/' + docname
                        del node['intersphinx']
                        del node['inventory']
                else:
                    target = node['reftarget']
                    if target.startswith('/'):
                        target = f"/{refdoc.split('/', 1)[0]}{target}"
                    docname = docname_join(refdoc, target)
                    if docname in self.env.found_docs:
                        node['reftarget'] = '/' + docname
                        continue
                    inventory = get_inventory(docname.split('/', 1)[0])
                    if inventory is None:
                        continue
                    node['intersphinx'] = True
                    node['inventory'] = inventory
                    node['reftarget'] = docname.partition('/')[2]
            else:
                if 'intersphinx' in node:
                    node['reftarget'] = node['inventory'] + ":" + node['reftarget']
                    del node['intersphinx']
                    del node['inventory']
                else:
                    inventory = get_inventory(node.get('refdoc',
                                                       fromdocname).split('/')[0])

                    if inventory and node['reftarget'].find(':') == -1:
                        node['reftarget'] = inventory + ":" + node['reftarget']


def setup(app):
    if "ADOC_CUSTOM_DOC" in environ:
        app.add_transform(namespace_pending_xfer)

    return {
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
