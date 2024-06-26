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
    path: str
    lib_path: str
    dependencies: Tuple[str]
    library_dependencies: Tuple[str]
    interfaces: Tuple[str]
    interfaces_tcl: Tuple[str]
    parameters: Tuple[str]


class Library(TypedDict):
    name: str
    vendor: Dict[str, LibraryVendor]
    generic: LibraryGeneric


class Carrier(TypedDict):
    xilinx: Tuple[str]
    intel: Tuple[str]
