from typing import Tuple, List
from types import ModuleType

import subprocess
from docutils import nodes
from docutils.utils import Reporter
from docutils.nodes import Node, system_message
from sphinx.util import logging
from sphinx.util.docutils import SphinxRole, CustomReSTDispatcher
from sphinx.util.typing import RoleFunction

logger = logging.getLogger(__name__)

# Default values
dft_url_dokuwiki = 'https://wiki.analog.com'
dft_url_ez = 'https://ez.analog.com'
dft_url_mw = 'https://www.mathworks.com'
dft_url_git_gui = 'https://github.com/analogdevicesinc/{repo}/tree'
dft_url_git_raw = 'https://raw.githubusercontent.com/analogdevicesinc/{repo}'
dft_url_git_other = 'https://github.com/analogdevicesinc/{repo}/{other}'
dft_url_adi = 'https://www.analog.com'
dft_url_xilinx = 'https://www.xilinx.com'
dft_url_intel = 'https://www.intel.com'

git_repos = {
    # case insensitive            url_path                     name
    'hdl':                       ['hdl',                       "HDL"],
    'testbenches':               ['testbenches',               "Testbenches"],
    'linux':                     ['linux',                     "Linux"],
    'no-os':                     ['no-OS',                     "no-OS"],
    'libiio':                    ['libiio',                    "libiio"],
    'scopy':                     ['scopy',                     "Scopy"],
    'iio-oscilloscope':          ['iio-oscilloscope',          "IIO Oscilloscope"],
    'doctools':                  ['doctools',                  "Doctools"],
    'documentation':             ['documentation',             "System Level Documentation"],
    'pyadi-iio':                 ['pyadi-iio',                 "PyADI-IIO"],
    'meta-adi':                  ['meta-adi',                  "META-ADI"],
    'wiki-scripts':              ['wiki-scripts',              "Wiki Scripts"],
    'linux_image_adi-scripts':   ['linux_image_ADI-scripts',   "ADI Scripts for Linux images"],
    'highspeedconvertertoolbox': ['HighSpeedConverterToolbox', "High Speed Converter Toolbox"],
    'transceivertoolbox':        ['TransceiverToolbox',        "Transceiver Toolbox"]
}
vendors = ['xilinx', 'intel', 'mw']


def get_url_config(name, inliner):
    app = inliner.document.settings.env.app
    return getattr(app.config, "url_"+name)


def get_outer_inner(text):
    """
    Extract 'outer <inner>' fields.
    """
    pos = text.find('<')
    if pos != -1 and text[len(text)-1] == '>':
        return (text[0:pos].strip(), text[pos+1:-1])
    else:
        return (None, text)


def color(class_name):
    def role(name, rawtext, text, lineno, inliner, options={}, content=[]):
        node = nodes.inline(text=text, classes=[class_name])
        return [node], []

    return role


def datasheet():
    def role(name, rawtext, text, lineno, inliner, options={}, content=[]):
        # DEPRECATED
        logger.warning("The datasheet role has been deprecated, use the adi role "
                       "instead.",
                       location=(inliner.document.settings.env.docname, lineno))
        return [], []

    return role


def dokuwiki():
    def role(name, rawtext, text, lineno, inliner, options={}, content=[]):
        text, path = get_outer_inner(text)
        if text is None:
            text = path[path.rfind('/')+1:]
        if len(path) > 0 and path[0] == '/':
            path = path[1:]
        url = get_url_config('dokuwiki', inliner) + '/' + path
        node = nodes.reference(rawtext, text, refuri=url, **options)
        return [node], []

    return role


def ez():
    def role(name, rawtext, text, lineno, inliner, options={}, content=[]):
        text, path = get_outer_inner(text)
        if path == '/':
            path = ''
        url = get_url_config('ez', inliner) + '/' + path
        if text is None:
            text = "EngineerZone"
        node = nodes.reference(rawtext, text, refuri=url,
                               classes=['icon', 'ez'], **options)
        return [node], []

    return role


def get_default_brach(repo, inliner):
    """
    Get default branch for each repo.
    If it is not known, returns 'main'
    """
    app = inliner.document.settings.env.app
    if repo in app.lut['repos']:
        return app.lut['repos'][repo]['branch']
    else:
        return 'main'

class GitRoleDispatcher(CustomReSTDispatcher):
    """Custom dispatcher for git role.

    This enables :git-***: roles on parsing reST document.
    """

    def role(
        self, role_name: str, language_module: ModuleType, lineno: int, reporter: Reporter,
    ) -> Tuple[RoleFunction, List[system_message]]:
        if len(role_name) > 4 and role_name.startswith(('git-')):
            return GitRole(role_name), []
        else:
            return super().role(role_name, language_module, lineno, reporter)


class GitRole(SphinxRole):
    """
    Create links to git upstream.
    Prefers knowns repositories, but will generate for other repositories
    with a info note
    """
    message = ("Repository '{repo}' is not tracked and has no metadata, "
               "considering informing the adi_doctools maintainers.")
    def __init__(self, orig_name: str) -> None:
        self.orig_name = orig_name

    def run(self) -> Tuple[List[Node], List[system_message]]:
        assert self.name == self.orig_name.lower()
        assert self.name.startswith('git-')
        repo = self.name[4:]
        text, path = get_outer_inner(self.text)

        if repo not in git_repos:
            logger.info(self.message.format(repo=repo),
                        location=(self.env.docname, self.lineno))
            alt_name = repo
            repo = self.orig_name[4:]
        else:
            alt_name = git_repos[repo][1]
            repo = git_repos[repo][0]

        pos = path.find('+')
        if path[0:pos] == "raw":
            type_ = "raw"
            path = path[pos+1:]
        elif path[0:pos] == "gui":
            type_ = "gui"
            path = path[pos+1:]
        elif pos == len(path)-1:
            type_ = path[:-1]
            path = ''
        else:
            type_ = "gui"

        if type_ in ['raw', 'gui']:
            pos = path.find(':')
            if pos in [0, -1]:
                branch = get_default_brach(repo, self.inliner)
            else:
                branch = path[0:pos]
            path = path[pos+1:]
            if text is None:
                if path == '/' or path == '':
                    text = "ADI " + alt_name + " repository"
                    if branch != 'main':
                        text += "'s branch " + branch
                else:
                    text = path
            if path == '/':
                path = ''

            url = get_url_config('git_'+type_, self.inliner).format(repo=repo)
            url = url + '/' + branch + '/' + path
        else:
            if text is None:
                    text = "ADI " + alt_name + " repository " + f"({type_})"
            url = get_url_config('git_other', self.inliner).format(repo=repo, other=type_)

        node = nodes.reference(self.rawtext, text, refuri=url,
                               classes=['icon', 'git'], **self.options)
        return [node], []


def adi():
    def role(name, rawtext, text, lineno, inliner, options={}, content=[]):
        name, adi_id = get_outer_inner(text)
        if name is None:
            name = adi_id
        url = get_url_config('adi', inliner) + '/' + adi_id
        node = nodes.reference(rawtext, name, refuri=url,
                               classes=['icon', 'adi'], **options)
        return [node], []

    return role


def vendor(vendor_name):
    def role(name, rawtext, text, lineno, inliner, options={}, content=[]):
        text, path = get_outer_inner(text)
        if text is None:
            text = path[path.rfind('/')+1:]
        url = get_url_config(vendor_name, inliner) + '/' + path
        node = nodes.reference(rawtext, text, refuri=url, **options)
        return [node], []

    return role

def install_dispatcher(app, docname: str, source: List[str]) -> None:
    """Enable GitRoleDispatcher.

    .. note:: The installed dispatcher will be uninstalled on disabling sphinx_domain
              automatically.
    """
    dispatcher = GitRoleDispatcher()
    dispatcher.enable()

def common_setup(app):
    app.add_role("red",             color('red'))
    app.add_role("green",           color('green'))
    app.add_role("datasheet",       datasheet())
    app.add_role("ez",              ez())
    app.add_role("adi",             adi())
    app.add_role("dokuwiki",            dokuwiki())
    app.add_role("dokuwiki+deprecated", dokuwiki())
    for name in vendors:
        app.add_role(name,          vendor(name))

    app.add_config_value('url_dokuwiki',  dft_url_dokuwiki,  'env')
    app.add_config_value('url_ez',        dft_url_ez,        'env')
    app.add_config_value('url_mw',        dft_url_mw,        'env')
    app.add_config_value('url_git_gui',   dft_url_git_gui,   'env')
    app.add_config_value('url_git_raw',   dft_url_git_raw,   'env')
    app.add_config_value('url_git_other', dft_url_git_other, 'env')
    app.add_config_value('url_adi',       dft_url_adi,       'env')
    app.add_config_value('url_xilinx',    dft_url_xilinx,    'env')
    app.add_config_value('url_intel',     dft_url_intel,     'env')

    app.connect('source-read', install_dispatcher)
