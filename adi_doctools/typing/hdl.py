from __future__ import annotations

from typing import TypedDict

vendors = ("xilinx", "intel")


class IntfPort(TypedDict):
    direction: str
    width: int
    name: str
    domain: str | None
    default: int | None


class Intf(TypedDict):
    description: str | None
    name: str
    ports: tuple[IntfPort]


class LibraryGeneric(TypedDict):
    dependencies: tuple[str]


class LibraryVendor(TypedDict):
    dependencies: tuple[str]
    library_dependencies: tuple[str]
    interfaces: tuple[str]
    interfaces_tcl: tuple[str]
    parameters: tuple[tuple[str, str]] | None


class Library(TypedDict):
    """
    __key__: xilinx/some_ip
    name: adi_jesd204_glue, axi_spi_engine
    """
    name: str
    vendor: dict[str, LibraryVendor]
    generic: LibraryGeneric


class Carrier(TypedDict):
    xilinx: tuple[str]
    intel: tuple[str]


class Project(TypedDict):
    """
    __key__: some_project/carrier, some_project
    name: some_project_carrier, some_project
    lib_deps: my_ip, framework/framework_core
    m_deps: some_constr.xdc
    """
    name: str
    vendor: str
    lib_deps: tuple[str]
    m_deps: tuple[str]
