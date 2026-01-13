from typing import TypedDict, Tuple, Dict, List, Optional


class Banner(TypedDict):
    msg: Optional[str]  # None to disable banner
    a_href: str
    a_text: str


class Modules(TypedDict):
    javascript: Optional[List[str]]
    stylesheet: Optional[List[str]]


class Repo(TypedDict):
    pathname: str
    name: str
    longname: Optional[str]
    description: str
    category: str
    branch: str
    visibility: str
    topic: Optional[Dict[str, str]]
    extra: Optional[Tuple[str, List[str], bool]]
    parent: Optional[str]


class LUT(TypedDict):
    remote_ssh: str
    remote_https: str
    remote_doc: str
    remote_alt: str
    source_hostname: str
    source_hostname_raw: str
    repos: Dict[str, Repo]
    banner: Banner
    modules: Modules


remote_ssh = "git@github.com:analogdevicesinc/{}.git"
remote_https = "https://github.com/analogdevicesinc/{}.git"
remote_doc = "https://analogdevicesinc.github.io/"
remote_alt = "https://developer.analog.com/docs/"
source_hostname = "https://github.com/analogdevicesinc/{repository}/tree/{branch}/{pathname}"
source_hostname_raw = "https://raw.githubusercontent.com/analogdevicesinc/{repository}/refs/heads/{branch}/{pathname}"

repos = {
    'documentation': Repo(
        pathname='docs',
        name='System Level',
        description='User guides and tutorials for evaluation boards, software and hardware.',
        category='system-level',
        branch='main',
        visibility='public'
    ),
    'hdl': Repo(
        pathname='docs',
        extra=(
            # cwd      # cmd            # no_parallel
            "library", ["make", "all"], False
        ),
        name='HDL',
        description='HDL libraries and projects for reference designs and prototyping systems.',
        category='hdl',
        branch='main',
        visibility='public'
    ),
    'testbenches': Repo(
        pathname='docs',
        name='HDL Testbenches',
        description='HDL testbenches for reference designs and prototyping systems.',
        category='hdl',
        branch='main',
        visibility='public',
        parent='hdl'
    ),
    'linux': Repo(
        pathname='docs',
        name='Linux',
        description='Reduced Linux kernel documentation for staging or non-upstream drivers.',
        category='driver',
        branch='main',
        visibility='public'
    ),
    'adi-kuiper-gen': Repo(
        pathname='docs',
        name='Kuiper',
        description='A Debian-based Linux distribution designed for our hardware and evaluation boards.',
        category='os',
        branch='main',
        visibility='public'
    ),
    'pyadi-iio': Repo(
        pathname='doc/source',
        name='pyadi-iio',
        longname='Python interfaces for hardware with Industrial I/O drivers',
        description='Python abstraction layer for  IIO drivers.',
        category='library',
        branch='main',
        visibility='public'
    ),
    'pyadi-dt': Repo(
        pathname='doc/source',
        name='pyadi-dt',
        longname='Device tree management tools for hardware',
        description='Library and CLI for managing device trees components.',
        category='library',
        branch='main',
        visibility='public'
    ),
    'pyadi-jif': Repo(
        pathname='doc/source',
        name='pyadi-jif',
        longname='Python Configurator for ADI JESD204 Interface Framework (JIF)',
        description='Python interface for the ADI JESD Interface Framework.',
        category='tool',
        branch='main',
        visibility='public'
    ),
    'libiio': Repo(
        pathname='doc',
        name='libiio',
        description='Cross-platform library to access IIO devices.',
        category='library',
        branch='main',
        visibility='public'
    ),
    'no-OS': Repo(
        pathname='doc/sphinx/source',
        name='no-OS',
        description='Bare-metal software framework for drivers and applications.',
        category='driver',
        branch='main',
        visibility='public'
    ),
    'precision-converters-firmware': Repo(
        pathname='doc/sphinx',
        name='Precision Converters Firmware',
        description='Embedded firmware applications for precision converters on SDP-K1 and others.',
        category='library',
        branch='main',
        visibility='public'
    ),
    'PrecisionToolbox': Repo(
        pathname='docs/source',
        name='Precision Toolbox',
        description='Set of tools to interface precision converters within MATLAB and Simulink.',
        category='library',
        branch='main',
        visibility='public'
    ),
    'adi_ros2': Repo(
        pathname='src/adi_ros2/doc',
        name='ROS2',
        description='Robotics SDK with ROS 2 packages and tools in pre-configured container images.',
        category='toolkit',
        branch='humble',
        visibility='public'
    ),
    'scopy': Repo(
        pathname='docs',
        name='Scopy',
        description='Multi-functional software toolset with strong capabilities for signal analysis.',
        category='tool',
        branch='main',
        visibility='public'
    ),
    'doctools': Repo(
        pathname='docs',
        name='Doctools',
        description='Documentation guidelines, extensions, and tools.',
        category='tool',
        branch='main',
        visibility='public'
    ),
}

banner = Banner(
    msg=None,
    a_href='',
    a_text=''
)

"""
Allows to inject extra scripts and stylesheets on the hosted documentation.
The app.js looks the metadata.json and insert tags to load each module of the array.
All files must be (generated) at the theme static folder, to be copied over the
documentation build.
The advantage of this approach is that regardless of the tools' built doc version,
it will always fetch the latest and greatest.
See also: ci/rollup.config.app.mjs

To provide a slight speed boost, the JavaScript 'bets' that the metadata.json
contains extra.*.*, appending to the page before the metadata loads,
other items will be appended after metadata.json is fetched.
"""
modules = Modules(
    javascript=['extra.umd.js'],
    stylesheet=['extra.min.css']
)


def get_lut():
    # TODO dynamic lut fetch
    return LUT(remote_ssh=remote_ssh,
               remote_https=remote_https,
               remote_doc=remote_doc,
               remote_alt=remote_alt,
               source_hostname=source_hostname,
               source_hostname_raw=source_hostname_raw,
               repos=repos,
               banner=banner,
               modules=modules)
