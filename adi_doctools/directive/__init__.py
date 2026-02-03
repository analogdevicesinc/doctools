from .node import node_setup
from .common import common_setup
from .hdl import hdl_setup
from .system_top import system_top_setup
from .toctree_preview import toctree_preview_setup
from .tabs import tabs_setup

setup = [
    node_setup,
    common_setup,
    hdl_setup,
    system_top_setup,
    toctree_preview_setup,
    tabs_setup,
]
