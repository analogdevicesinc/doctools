from __future__ import annotations

import logging
import re
from glob import glob
from os import chdir, getcwd, path, walk

from ..parser.hdl import (
    expand_hdl_regmap,
    parse_hdl_interfaces,
    parse_hdl_library,
    parse_hdl_project,
    parse_hdl_regmap,
    parse_hdl_vendor,
    resolve_hdl_library,
    resolve_hdl_project,
    resolve_hdl_regmap,
)
from ..typing.hdl import Carrier, Library, Project, vendors
from ..writer.hdl import (
    write_hdl_library_makefile,
    write_hdl_project_makefile,
    write_hdl_regmap,
    write_hdl_regmap_test,
)
from .argument_parser import get_arguments_hdl_gen
from .aux_git import get_git_top_level

logger = logging.getLogger(__name__)

def hdl_gen():
    """
    Generate HDL auxiliary files.

    These files are:
    Library and projects makefiles,
    SystemVerilog Register Map classes.

    Run from any path at hdl, including hdl/testbenches.
    """
    args = get_arguments_hdl_gen()

    hdldir = get_git_top_level(args.input)
    if not hdldir:
        return

    hdldir = hdldir.replace('/testbenches', '')
    call_dir = getcwd()
    chdir(hdldir)

    if not path.isfile('LICENSE_ADIJESD204'):
        logger.info("'LICENSE_ADIJESD204' not found,"
                    " are you sure this is the HDL repo?")
        return

    if not (has_tb := path.isdir('testbenches')):
        logger.info("'testbenches' not found, tb files will be skipped.")

    if not args.no_makefile:
        project, library = makefile_pre()

    if not args.no_regmap:
        regmap = regmap_pre()

    if not args.no_makefile and not args.no_write:
        makefile_post(library, project)

    if has_tb and not args.no_regmap and not args.no_write:
        regmap_post(regmap)

    chdir(call_dir)


def makefile_pre() -> tuple[dict[str, Project], dict[str, Library]]:
    # Generate HDL carrier dictionary
    carrier = Carrier()
    for v in vendors:
        file_ = path.join('projects', 'scripts', f"adi_project_{v}.tcl")
        carrier[v], msg = parse_hdl_vendor(file_)
        for m in msg:
            print(f"{file_}: {m}")

    # TODO do something with the parsed carriers,
    # like get/validate library and project dicts

    # Generate HDL Library dictionary
    types = ['*_ip.tcl', '*_hw.tcl']
    files = {}
    library = {}
    project = {}
    interfaces_ip_files = []
    for v in vendors:
        files[v] = []
    for typ, v in zip(types, vendors):
        glob_ = path.join('library', '**', typ)
        files[v].extend(glob(glob_, recursive=True))

    for v in files:  # noqa: PLC0206
        for f in files[v]:
            if 'interfaces_ip.tcl' in f:
                files[v].remove(f)
                interfaces_ip_files.append(f)

    # Generate the HDL interfaces dictionary
    interfaces_ip = {}
    for f in interfaces_ip_files:
        interfaces_ip[path.dirname(f)] = parse_hdl_interfaces(f)

    intf_key_file = {}
    for f, intf_list in interfaces_ip.items():
        for k in intf_list:
            intf_key_file[k['name']] = f

    # Generate the HDL library dictionary
    # A folder may contain variants of the lib per vendor
    for typ, v in zip(types, files):
        for f in files[v]:
            lib_, path_, ip_name = parse_hdl_library(f)
            if lib_:
                if path_ not in library:
                    library[path_] = Library(
                        name=ip_name,
                        vendor={},
                        generic={}
                    )
                library[path_]['vendor'][v] = lib_

    for key in library:
        resolve_hdl_library(library, key, intf_key_file)

    # Generate HDL Project dictionary
    # A folder contains only one project/vendor
    types = ['system_bd.tcl', 'system_qsys.tcl']
    files = {}
    for v in vendors:
        files[v] = []
    for typ, v in zip(types, vendors):
        glob_ = path.join('projects', '**', typ)
        files[v].extend(glob(glob_, recursive=True))

    for typ, v in zip(types, files):
        for f in files[v]:
            prj_, path_ = parse_hdl_project(f)
            if prj_:
                prj_['vendor'] = v
                project[path_] = prj_
    for key, prj_val in project.items():
        resolve_hdl_project(prj_val, library)

    return project, library


def makefile_post(
        library: dict[str, Library],
        project: dict[str, Project]
    ) -> None:
    for key in library:
        write_hdl_library_makefile(library, key)

    for key in project:
        write_hdl_project_makefile(project, key)


def regmap_pre() -> dict:
    """
    Generate HDL Register Map dictionary
    """
    rm = {}
    regdir = path.join('docs', 'regmap')
    for (dirpath, dirnames, filenames) in walk(regdir):
        for file in filenames:
            file_ = path.join(dirpath, file)
            m = re.search("adi_regmap_(\\w+)\\.txt", file)
            if not bool(m):
                continue

            reg_name = m.group(1)
            ctime = path.getctime(file_)
            rm[reg_name] = parse_hdl_regmap(ctime, file_)
    resolve_hdl_regmap(rm)
    expand_hdl_regmap(rm)
    return rm


def regmap_post(rm: dict) -> None:
    f_ = path.join('testbenches', 'library', 'regmaps')
    for m in rm:
        write_hdl_regmap(f_, rm[m]['subregmap'], m)
    write_hdl_regmap_test(f_, rm)
