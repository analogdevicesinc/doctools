"""
Extends intersphinx.
"""
from __future__ import annotations

import posixpath
import subprocess
from functools import lru_cache
from os import environ, getenv, path
from typing import Any

from packaging.version import Version
from sphinx.__init__ import __version__ as __sphinx_version__
from sphinx.application import Sphinx

# For deprecation handling
from sphinx.util import logging
from sphinx.util.osutil import SEP

from ..lut import remote_doc, repos, source_internal_org
from ..monkeypatch import monkeypatch_requests_auth

logger = logging.getLogger(__name__)

dft_interref_uri = remote_doc


def interref_repos_apply(config):
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
    if config.interref_uri is None:
        config.interref_uri = getenv("ADOC_INTERREF_URI",
                                     default=dft_interref_uri)

    def repo_apply_(r):
        if r in repos:
            d_ = (f'..{SEP}'*(repos[r]['pathname'].count(SEP)+1) or f'..{SEP}')
            if 'parent' in repos[r] and repos[r]['parent'] is not None:
                d_ += f'..{SEP}'
            return d_ + f'..{SEP}'

    t_ = None
    if 'repository' in config and config.interref_local:
        t_ = repo_apply_(config.repository)
    for r in config.interref_repos:
        r_ = r.split('/')[0]
        if t_ is not None and r_ in repos:
            t__ = path.join(t_, r, repos[r_]['pathname'], '_build',
                            'html', 'objects.inv')
            t__ = path.abspath(t__)
            t__ = (t__, None)
        else:
            t__ = None
        config.intersphinx_mapping[r_] = (config.interref_uri+r, t__)
    config.interref_repos = []  # Consumed


@lru_cache(maxsize=None)
def get_github_token(org: str) -> str | None:
    """
    GITHUB_TOKEN, or the git credential for https://github.com/<org>.
    """
    if token := getenv('GITHUB_TOKEN'):
        return token
    env = {**environ, 'GIT_TERMINAL_PROMPT': '0', 'GIT_ASKPASS': '',
           'SSH_ASKPASS': '', 'GCM_INTERACTIVE': 'never'}
    ret = subprocess.run(['git', 'credential', 'fill'], env=env, text=True,
                         input=f'protocol=https\nhost=github.com\npath={org}\n\n',
                         capture_output=True, check=False)
    cred = dict(ln.split('=', 1) for ln in ret.stdout.splitlines() if '=' in ln)
    if not (token := cred.get('password')):
        logger.warning(f"interref: no token for {org}, set GITHUB_TOKEN or a "
                       "git credential.")
    return token


def interref_private_repos_apply(config):
    """
    Applies interref_private_repos into intersphinx_mapping, e.g. 'repo/v1':
        https://org.github.io/repo/v1
        https://raw.githubusercontent.com/org/repo/refs/heads/gh-pages/v1/objects.inv
    intersphinx fetches and caches the inventory, with the token added.
    """
    if not config.interref_private_repos:
        return

    org = source_internal_org
    raw = f'https://raw.githubusercontent.com/{org}/'
    monkeypatch_requests_auth(raw, lambda: get_github_token(org))
    for r in config.interref_private_repos:
        r = r.strip('/')
        repo, _, subpath = r.partition('/')
        inv = posixpath.join(f'{raw}{repo}/refs/heads/gh-pages', subpath,
                             'objects.inv')
        config.intersphinx_mapping[repo] = (f'https://{org}.github.io/{r}', inv)
    config.interref_private_repos = []  # Consumed


def interref_repos_assert(config):
    if len(config.interref_repos) or len(config.interref_private_repos):
        logger.warning("interref_repos or interref_private_repos is present "
                       "in config but never applied."
                       " Is adi_doctools in the extension list?")


def interref_setup(app: Sphinx) -> dict[str, Any]:
    app.add_config_value('interref_repos', [], 'env')
    app.add_config_value('interref_uri', None, 'env')
    app.add_config_value('interref_local', False, 'env')
    app.add_config_value('interref_private_repos', [], 'env')

    for c in ['interref_repos', 'interref_private_repos']:
        if not isinstance(getattr(app.config, c), list):
            logger.warning(f"Config '{c}' must be a list.")
            setattr(app.config, c, [])

    if Version(__sphinx_version__) < Version("7.3.0"):
        # Prior to Sphinx 7.3.x, config values were default during setup,
        # so we cannot enable on demand.
        auto_enable_intersphinx = True
    elif (len(app.config.interref_repos) > 0 or
          len(app.config.interref_private_repos) > 0):
        auto_enable_intersphinx = True
    else:
        auto_enable_intersphinx = False

    if auto_enable_intersphinx:
        app.setup_extension('sphinx.ext.intersphinx')
        if (len(app.config.intersphinx_disabled_reftypes) == 1 and
           app.config.intersphinx_disabled_reftypes[0] == 'std:doc'):
            app.config.intersphinx_disabled_reftypes = ["*"]
            logger.info("adi_doctools: "
                        "Changed intersphinx_disabled_reftypes value from "
                        "'std:doc' to '*' to avoid refs linking to wrong docs")
