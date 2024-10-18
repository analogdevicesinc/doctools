from typing import Dict, Tuple

from datetime import datetime
from os import path

from ..__init__ import __version__
from ..typing.hdl import vendors, Library, Project

svpkg_fn_new0 = """
      function new(
        input string name,
        input int address);

        super.new(name, address);
"""

svpkg_fn_new1 = """\
      endfunction: new
"""

license_makefile = f"""\
####################################################################################
## Copyright (c) 2018 - {datetime.now().year} Analog Devices, Inc.
### SPDX short identifier: BSD-1-Clause
## Auto-generated v{__version__}, do not modify!
####################################################################################
"""

license_sv = f"""\
// ***************************************************************************
// ***************************************************************************
// Copyright 2014 - 2024 (c) Analog Devices, Inc. All rights reserved.
//
// In this HDL repository, there are many different and unique modules, consisting
// of various HDL (Verilog or VHDL) components. The individual modules are
// developed independently, and may be accompanied by separate and unique license
// terms.
//
// The user should read each of these license terms, and understand the
// freedoms and responsabilities that he or she has by using this source/core.
//
// This core is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
// A PARTICULAR PURPOSE.
//
// Redistribution and use of source or resulting binaries, with or without modification
// of this file, are permitted under one of the following two license terms:
//
//   1. The GNU General Public License version 2 as published by the
//      Free Software Foundation, which can be found in the top level directory
//      of this repository (LICENSE_GPL2), and also online at:
//      <https://www.gnu.org/licenses/old-licenses/gpl-2.0.html>
//
// OR
//
//   2. An ADI specific BSD license, which can be found in the top level directory
//      of this repository (LICENSE_ADIBSD), and also on-line at:
//      https://github.com/analogdevicesinc/hdl/blob/main/LICENSE_ADIBSD
//      This will allow to generate bit files and not release the source code,
//      as long as it attaches to an ADI device.
//
// ***************************************************************************
// ***************************************************************************
"""

def svpkg_regmap(f, regmap: Dict, key: str):
    f.write(f"    /* {regmap['title']} */\n")

    for reg in regmap['regmap']:
        # Skip unresolved
        if reg['import']:
            continue
        row = f"    class {reg['name']}_CLASS"
        reg_param_dec = []
        for reg_param in reg['parameters']:
            reg_param_dec.append("int " + reg_param)
            reg_param_dec.sort()
        if len(reg_param_dec):
            row += " #("
            row += ", ".join(reg_param_dec)
            row += ")"
        row += " extends register_base;""\n"
        f.write(row)

        for field in reg['fields']:
            if field['name'] != 'RESERVED' and not field['import']:
                row = f"      field_base {field['name']}_F;""\n"
                f.write(row)

        f.write(svpkg_fn_new0)
        for field in reg['fields']:
            if field['name'] != 'RESERVED' and not field['import']:
                row = f"        this.{field['name']}_F = "'new("'f"{field['name']}"
                bits = f"{field['bits'][0]}, {field['bits'][1]}"

                if field['default_long'] is None:
                    default = "'hXXXXXXXX"
                else:
                    default = field['default_long']
                    if type(default) is int:
                        default = hex(field['default_long']).replace("0x", "'h")

                row += '"'f", {bits}, {field['rw']}, {default}, this);""\n"
                f.write(row)

        f.write(svpkg_fn_new1)
        f.write("    endclass\n\n")


def svpkg_head(f, key: str, regmap: Dict):
    run_time = datetime.now().strftime('%b %d %H:%M:%S %Y')
    pkgname = f"adi_regmap_{key}_pkg"
    classname = f"adi_regmap_{key}"
    f.write(license_sv)
    f.write("/* Auto generated Register Map */\n")
    f.write(f"/* {run_time} v{__version__} */\n")
    f.write("\n")

    f.write(f"package {pkgname};\n")
    f.write("  import regmap_pkg::*;\n\n")
    f.write(f"  class {classname}")
    reg_param_dec = []
    for rm in regmap:
        for reg in regmap[rm]['regmap']:
            for reg_param in reg['parameters']:
                reg_param_dec.append("int " + reg_param)
    if len(reg_param_dec):
        reg_params_set = set(reg_param_dec)
        reg_param_dec = list(reg_params_set)
        reg_param_dec.sort()
    if len(reg_param_dec):
        f.write(f" #(")
        f.write(f", ".join(reg_param_dec))
        f.write(f")")
    f.write(f";\n\n")


def svpkg_reg_decl(f, regmap: Dict):
    for reg in regmap['regmap']:
        if reg['where'] is not None:
            for n in range(*reg['where']):
                reg_ = reg.copy()
                reg_['name'] = reg_['name'].replace('n', str(n))
                row = f"    {reg['name']}_CLASS"
                if len(reg['parameters']):
                    row += " #("
                    row += ", ".join(reg['parameters'])
                    row += ")"
                row += f" {reg_['name']}_R;\n"
                f.write(row)
        else:
            row = f"    {reg['name']}_CLASS"
            if len(reg['parameters']):
                row += " #("
                row += ", ".join(reg['parameters'])
                row += ")"
            row += f" {reg['name']}_R;\n"
            f.write(row)


def svpkg_reg_inst(f, regmap: Dict):
    for reg in regmap['regmap']:
        if reg['where'] is not None:
            for n in range(*reg['where']):
                reg_ = reg.copy()
                reg_['name'] = reg_['name'].replace('n', str(n))
                reg_['address'] = (reg_['address'] + reg_['addr_incr'] * n) * 4
                addr = hex(reg_['address']).replace("0x", "'h")
                row = f"      this.{reg_['name']}_R = new("
                row += '"' + reg_['name'] + '"'
                row += f", {addr});\n"
                f.write(row)
        else:
            reg['address'] = reg['address'] * 4
            addr = hex(reg['address']).replace("0x", "'h")
            row = f"      this.{reg['name']}_R = new("
            row += '"' + reg['name'] + '"'
            row += f", {addr});\n"
            f.write(row)


def svpkg_footer(f):
    f.write("  endclass;\n")
    f.write("endpackage;\n")


def write_hdl_regmap(
    path_: str,
    regmap: Dict,
    key: str
) -> None:
    fname = f"adi_regmap_{key}_pkg.sv"
    file = path.join(path_, fname)
    f = open(file, "w")
    svpkg_head(f, key, regmap)

    for rm in regmap:
        svpkg_regmap(f, regmap[rm], rm)

    for rm in regmap:
        svpkg_reg_decl(f, regmap[rm])

    f.write("\n    function new();\n")
    for rm in regmap:
        svpkg_reg_inst(f, regmap[rm])
    f.write("    endfunction: new;\n\n")

    svpkg_footer(f)

    f.close()


def write_hdl_library_makefile(
    libraries: Dict[str, Library],
    path_: str
) -> None:
    library = libraries[path_]
    fname = "Makefile"
    file = path.join('library', path_, fname)
    f = open(file, "w")
    f.write(license_makefile)
    f.write("\n")
    f.write(f"LIBRARY_NAME := {library['name']}\n")
    f.write("\n")
    for d in library['generic']['dependencies']:
        f.write(f"GENERIC_DEPS += {d}\n")
    f.write("\n")
    for v in library['vendor']:
        r = library['vendor'][v]
        for d in r['dependencies']:
            f.write(f"{v.upper()}_DEPS += {d}\n")
        if len(r['dependencies']) > 0:
            f.write("\n")

        for x in r['interfaces']:
            f.write(f"{v.upper()}_DEPS += {x}\n")
        if len(r['interfaces']) > 0:
            f.write("\n")

        for d in r['library_dependencies']:
            f.write(f"{v.upper()}_LIB_DEPS += {d}\n")
        if len(r['library_dependencies']) > 0:
            f.write("\n")

        for x in r['interfaces_tcl']:
            f.write(f"{v.upper()}_INTERFACE_DEPS += {x}\n")
        if len(r['interfaces_tcl']) > 0:
            f.write("\n")

    p_ = path.join('scripts', 'library.mk')
    p_ = path.relpath(p_, path_)
    f.write(f"include {p_}\n")
    f.close()


def write_hdl_project_makefile(
    project: Dict[str, Project],
    path_: str
) -> None:
    project = project[path_]
    fname = "Makefile"
    file = path.join('projects', path_, fname)
    f = open(file, "w")
    f.write(license_makefile)
    f.write("\n")
    f.write(f"PROJECT_NAME := {project['name']}\n")
    f.write("\n")
    for d in project['m_deps']:
        f.write(f"M_DEPS += {d}\n")
    f.write("\n")
    for d in project['lib_deps']:
        f.write(f"LIB_DEPS += {d}\n")
    f.write("\n")
    p_ = f"scripts/project-{project['vendor']}.mk"
    p_ = path.relpath(p_, path_)
    f.write(f"include {p_}\n")
    f.close()
