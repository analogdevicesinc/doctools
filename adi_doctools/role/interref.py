"""
Extends intersphinx.
"""
from typing import List, Tuple, Dict, Optional, Any

from os import path, getenv
from packaging.version import Version
from sphinx.__init__ import __version__ as sphinx_version
from sphinx.util.osutil import SEP

from ..lut import repos, remote_doc

# For deprecation handling
from sphinx.util import logging
from sphinx.util.docutils import CustomReSTDispatcher
from sphinx.ext.intersphinx import IntersphinxRole
from types import ModuleType
from docutils.nodes import Node, system_message
from docutils.utils import Reporter
from sphinx.application import Sphinx
from sphinx.util.typing import RoleFunction
from .common import get_outer_inner

DEPRECATED_REF_MINUS = False

logger = logging.getLogger(__name__)

dft_interref_uri = remote_doc

def interref_repos_apply(app):
    """
    Applies interref_repos into intersphinx_mapping.
    Expands the repository name into targets, with the main one being:
    interref_uri + repo, e.g.
        docs.app.com/my-repo
    If interref_local is True, add
    a secondary relative to the current doc considering the target repo
    is alongside the current doc, e.g.
    - /data/my-repo-0/docs
      /data/my-repo-1/doc/sphinx/source
    Useful for when simultaneously editing multiple docs.
    """
    if app.config.interref_uri is None:
        app.config.interref_uri = getenv("ADOC_INTERREF_URI",
                                         default=dft_interref_uri)

    def repo_apply_(r):
        if r in repos:
            d_ = (f'..{SEP}' * (repos[r]['doc_folder'].count(SEP)+1) or f'..{SEP}')
            if 'parent' in repos[r] and repos[r]['parent'] is not None:
                d_ += f'..{SEP}'
            return d_ + f'..{SEP}'

    if 'interref_repos' in app.config:
        t_ = None
        if 'repository' in app.config and app.config.interref_local:
            t_ = repo_apply_(app.config.repository)
        for r in app.config.interref_repos:
            if t_ is not None and r in repos:
                t__ = path.join(t_, r, repos[r]['doc_folder'], '_build',
                                'html', 'objects.inv')
                t__ = path.abspath(t__)
                t__ = (t__, None)
            else:
                t__ = None
            app.config.intersphinx_mapping[r] = (app.config.interref_uri+r, t__)

# DEPRECATED START
class InterrefDispatcher(CustomReSTDispatcher):
    """Custom dispatcher for ref role.

    This enables :ref-***: roles on parsing reST document.
    """

    def role(
        self, role_name: str, language_module: ModuleType, lineno: int, reporter: Reporter,
    ) -> Tuple[RoleFunction, List[system_message]]:
        if len(role_name) > 4 and role_name.startswith(('ref-')):
            return InterrefRole(role_name), []
        else:
            return super().role(role_name, language_module, lineno, reporter)


class InterrefRole(IntersphinxRole):
    """
    Just IntersphinxRole but with a gorgeous deprecated warning (maybe).
    """

    def run(self) -> Tuple[List[Node], List[system_message]]:
        assert self.name == self.orig_name.lower()
        inventory, name_suffix = self.get_inventory_and_name_suffix(self.orig_name)
        text, ref_ = get_outer_inner(self.text)
        if text is not None:
            to_ = f":external+{inventory}:ref:`{text} <{ref_}>`"
        else:
            to_ = f":external+{inventory}:ref:`{ref_}`"
        message = (f"References 'ref-*' are deprecated,\n"
                   f"  update {self.rawtext} "
                   f"to {to_} ")
        if DEPRECATED_REF_MINUS == True:
            logger.warning(message,
                           location=(self.env.docname, self.lineno))
        else:
            logger.info(message,
                        location=(self.env.docname, self.lineno))

        return super().run()

    def get_inventory_and_name_suffix(self, name: str) -> Tuple[Optional[str], str]:
        assert name.startswith('ref'), name
        # must have an explicit inventory name, i.e,
        # :ref-inv:role:        or
        # :ref-inv:domain:role: or
        # :ref-inv:             (defaults to ref)
        suffix = name[4:]
        if name[3] == '-':
            if ':' not in suffix:
                return suffix, 'ref'
            else:
                inv_name, suffix = suffix.split(':', 1)
                return inv_name, suffix
        else:
            msg = f'Malformed :ref-: role name: {name}'
            raise ValueError(msg)


def install_dispatcher(app: Sphinx, docname: str, source: List[str]) -> None:
    """Enable InterrefDispatcher.

    .. note:: The installed dispatcher will be uninstalled on disabling sphinx_domain
              automatically.
    """
    dispatcher = InterrefDispatcher()
    dispatcher.enable()


# DEPRECATED END
def interref_setup(app: Sphinx) -> Dict[str, Any]:
    app.add_config_value('interref_repos', [], 'env')
    app.add_config_value('interref_uri', None, 'env')
    app.add_config_value('interref_local', False, 'env')

    if not isinstance(app.config.interref_repos, list):
        logger.warning(f"Config 'interref_repos' must be a list.")
        app.config.interref_repos = []

    if Version(sphinx_version) < Version("7.3.0"):
        # Prior to Sphinx 7.3.x, config values were default during setup,
        # so we cannot enable on demand.
        enable_intersphinx = True
    elif len(app.config.interref_repos) > 0:
        enable_intersphinx = True
    else:
        enable_intersphinx = False

    if enable_intersphinx:
        app.setup_extension('sphinx.ext.intersphinx')
        if (len(app.config.intersphinx_disabled_reftypes) == 1 and
            app.config.intersphinx_disabled_reftypes[0] =='std:doc'):
            app.config.intersphinx_disabled_reftypes = ["*"]
            logger.info("adi_doctools: "
                        "Changed intersphinx_disabled_reftypes value from "
                        "'std:doc' to '*' to avoid refs linking to wrong docs")

    app.connect('source-read', install_dispatcher) # DEPRECATED
