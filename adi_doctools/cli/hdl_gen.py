from typing import Dict, Tuple

import click
import re
from os import path, walk, chdir, getcwd
from glob import glob

from ..typing.hdl import vendors, Library, Carrier, Project
from ..parser.hdl import parse_hdl_regmap
from ..parser.hdl import resolve_hdl_regmap
from ..parser.hdl import expand_hdl_regmap
from ..parser.hdl import parse_hdl_vendor
from ..parser.hdl import parse_hdl_library
from ..parser.hdl import resolve_hdl_library
from ..parser.hdl import parse_hdl_project
from ..parser.hdl import resolve_hdl_project
from ..parser.hdl import parse_hdl_interfaces
from ..writer.hdl import write_hdl_regmap
from ..writer.hdl import write_hdl_regmap_test
from ..writer.hdl import write_hdl_library_makefile
from ..writer.hdl import write_hdl_project_makefile
from .aux_git import get_git_top_level


@click.command()
@click.option(
    '--input',
    '-i',
    'input_',
    is_flag=False,
    type=click.Path(exists=True),
    default='.',
    help="Path to any folder in the HDL repo."
)
@click.option(
    '--no-regmap',
    is_flag=True,
    default=False,
    help="Disable SystemVerilog RegisterMap generation, also disables RegMap parsing."
)
@click.option(
    '--no-makefile',
    is_flag=True,
    default=False,
    help="Disable Makefile generation, also disables Library, Project and Carrier parsing."
)
@click.option(
    '--no-write',
    is_flag=True,
    default=False,
    help="Disable file generation, useful to run only the parsing."
)
def hdl_gen(input_, no_regmap, no_makefile, no_write):
    """
    Generate HDL auxiliary files.

    These files are:
    Library and projects makefiles,
    SystemVerilog Register Map classes.

    Run from any path at hdl, including hdl/testbenches.
    """
    hdldir = get_git_top_level(input_)
    if not hdldir:
        return

    hdldir = hdldir.replace('/testbenches', '')
    call_dir = getcwd()
    chdir(hdldir)

    if not path.isfile('LICENSE_ADIJESD204'):
        click.echo("'LICENSE_ADIJESD204' not found,"
                   " are you sure this is the HDL repo?")
        return

    if not (has_tb := path.isdir('testbenches')):
        click.echo("'testbenches' not found, tb files will be skipped.")

    if not no_makefile:
        project, library = makefile_pre()

    if not no_regmap:
        regmap = regmap_pre()

    if not no_makefile and not no_write:
        makefile_post(library, project)

    if has_tb and not no_regmap and not no_write:
        regmap_post(regmap)

    chdir(call_dir)


def makefile_pre() -> Tuple[Dict[str, Project], Dict[str, Library]]:
    # Generate HDL carrier dictionary
    carrier = Carrier()
    for v in vendors:
        file_ = path.join('projects', 'scripts', f"adi_project_{v}.tcl")
        carrier[v], msg = parse_hdl_vendor(file_)
        for m in msg:
            click.echo(f"{file_}: {m}")

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

    for v in files:
        for f in files[v]:
            if 'interfaces_ip.tcl' in f:
                files[v].remove(f)
                interfaces_ip_files.append(f)

    # Generate the HDL interfaces dictionary
    interfaces_ip = {}
    for f in interfaces_ip_files:
        interfaces_ip[path.dirname(f)] = parse_hdl_interfaces(f)

    intf_key_file = {}
    for f in interfaces_ip:
        for k in interfaces_ip[f]:
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
    for key in project:
        resolve_hdl_project(project[key], library)

    return project, library


def makefile_post(
        library: Dict[str, Library],
        project: Dict[str, Project]
    ) -> None:
    for key in library:
        write_hdl_library_makefile(library, key)

    for key in project:
        write_hdl_project_makefile(project, key)


def regmap_pre() -> Dict:
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


def regmap_post(rm: Dict) -> None:
    f_ = path.join('testbenches', 'library', 'regmaps')
    for m in rm:
        write_hdl_regmap(f_, rm[m]['subregmap'], m)
    write_hdl_regmap_test(f_, rm)
