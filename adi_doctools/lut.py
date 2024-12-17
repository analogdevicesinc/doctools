from typing import TypedDict, Tuple, Dict, List, Optional


class Banner(TypedDict):
    msg: Optional[str]  # None to disable banner
    a_href: str
    a_text: str


class Repo(TypedDict):
    doc_folder: str
    name: str
    branch: str
    visibility: str
    topic: Optional[Dict[str, str]]
    extra: Optional[Tuple[str, List[str], bool]]
    parent: Optional[str]


class LUT(TypedDict):
    remote_ssh: str
    remote_https: str
    repos: Dict[str, Repo]
    banner: Banner


remote_ssh = "git@github.com:analogdevicesinc/{}.git"
remote_https = "https://github.com/analogdevicesinc/{}.git"
remote_doc = "https://analogdevicesinc.github.io/"

repos = {
    'documentation': Repo(
        doc_folder='docs',
        name='System Level',
        branch='main',
        visibility='public'
    ),
    'hdl': Repo(
        doc_folder='docs',
        extra=(
            # cwd      # cmd            # no_parallel
            "library", ["make", "all"], False
        ),
        name='HDL',
        branch='main',
        visibility='public'
    ),
    'testbenches': Repo(
        doc_folder='docs',
        name='HDL Testbenches',
        branch='main',
        visibility='public',
        parent='hdl'
    ),
    'pyadi-iio': Repo(
        doc_folder='doc',
        name='Hardware Python Interfaces',
        branch='main',
        visibility='public'
    ),
    'libiio': Repo(
        doc_folder='doc',
        name='libiio',
        branch='main',
        visibility='public'
    ),
    'no-OS': Repo(
        doc_folder='doc/sphinx/source',
        name='no-OS',
        branch='main',
        visibility='public'
    ),
    'precision-converters-firmware': Repo(
        doc_folder='doc/sphinx',
        name='Precision Converters Firmware',
        branch='main',
        visibility='public'
    ),
    'PrecisionToolbox': Repo(
        doc_folder='docs',
        name='Precision Toolbox',
        branch='main',
        visibility='public'
    ),
    'scopy': Repo(
        doc_folder='docs',
        name='Scopy',
        branch='dev',
        visibility='public'
    ),
    'doctools': Repo(
        doc_folder='docs',
        name='Doctools',
        branch='main',
        visibility='public'
    ),
}

banner = Banner(
    msg=None,
    a_href='',
    a_text=''
)


def get_lut():
    # TODO dynamic lut fetch
    return LUT(remote_ssh=remote_ssh,
               remote_https=remote_https,
               repos=repos,
               banner=banner)
