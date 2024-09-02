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


class LUT(TypedDict):
    remote: str
    repos: Dict[str, Repo]
    banner: Banner


remote = "git@github.com:analogdevicesinc/{}.git"

repos = {
    'documentation': Repo(
        doc_folder='docs',
        name='System Level',
        branch='main',
        visibility='public',
        topic={
            'eval': 'Evaluation Boards',
            'university': 'University Program',
        }
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
    'pyadi-iio': Repo(
        doc_folder='doc',
        name='Hardware Python Interfaces',
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
    return LUT(remote=remote,
               repos=repos,
               banner=banner)
