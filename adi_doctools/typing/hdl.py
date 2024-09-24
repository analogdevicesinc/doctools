from typing import TypedDict, Optional, Tuple, Dict

vendors = ("xilinx", "intel")


class IntfPort(TypedDict):
    direction: str
    width: int
    name: str
    domain: Optional[str]
    default: Optional[int]


class Intf(TypedDict):
    description: Optional[str]
    name: str
    ports: Tuple[IntfPort]


class LibraryGeneric(TypedDict):
    dependencies: Tuple[str]


class LibraryVendor(TypedDict):
    dependencies: Tuple[str]
    library_dependencies: Tuple[str]
    interfaces: Tuple[str]
    interfaces_tcl: Tuple[str]
    parameters: Optional[Tuple[Tuple[str, str]]]


class Library(TypedDict):
    """
    __key__: xilinx/some_ip
    name: adi_jesd204_glue, axi_spi_engine
    """
    name: str
    vendor: Dict[str, LibraryVendor]
    generic: LibraryGeneric


class Carrier(TypedDict):
    xilinx: Tuple[str]
    intel: Tuple[str]


class Project(TypedDict):
    """
    __key__: some_project/carrier, some_project
    name: some_project_carrier, some_project
    lib_deps: my_ip, framework/framework_core
    m_deps: some_constr.xdc
    """
    name: str
    vendor: str
    lib_deps: Tuple[str]
    m_deps: Tuple[str]
