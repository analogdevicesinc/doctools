from .node import node_setup
from .common import common_setup
from .hdl import hdl_setup
from .system_top import system_top_setup

setup = [
    node_setup,
    common_setup,
    hdl_setup,
    system_top_setup
]
