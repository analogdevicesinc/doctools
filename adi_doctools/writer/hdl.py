from typing import Dict

from datetime import datetime
from os import path

from ..__init__ import __version__
from ..typing.hdl import Library, Project

license_makefile = f"""\
####################################################################################
## Copyright (c) 2018-{datetime.now().year} Analog Devices, Inc.
### SPDX short identifier: BSD-1-Clause
## Auto-generated v{__version__}, do not modify!
####################################################################################
"""

license_sv = """\
// ***************************************************************************
// ***************************************************************************
// Copyright (C) 2014-2025 Analog Devices, Inc. All rights reserved.
//
// In this HDL repository, there are many different and unique modules, consisting
// of various HDL (Verilog or VHDL) components. The individual modules are
// developed independently, and may be accompanied by separate and unique license
// terms.
//
// The user should read each of these license terms, and understand the
// freedoms and responsibilities that he or she has by using this source/core.
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
        row += " extends register_base;""\n"
        f.write(row)

        for field in reg['fields']:
            if field['name'] != 'RESERVED' and not field['import']:
                row = f"      field_base {field['name']}_F;""\n"
                f.write(row)

        f.write("\n      function new(\n")
        f.write("        input string name,\n")
        f.write("        input int address,\n")
        reg_param_dec = []
        for reg_param in reg['parameters']:
            reg_param_dec.append(reg_param)
        if len(reg_param_dec):
            reg_params_set = set(reg_param_dec)
            reg_param_dec = list(reg_params_set)
            reg_param_dec.sort()
            for reg_param in reg_param_dec:
                f.write(f"        input int {reg_param},\n")
        f.write("        input adi_regmap parent = null);\n\n")
        f.write("        super.new(name, address, parent);\n\n")
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

        row = "\n        this.initialization_done = 1;""\n"
        f.write(row)

        f.write("      endfunction: new\n")
        row = f"    endclass: {reg['name']}_CLASS\n\n"
        f.write(row)


def svpkg_head(f, key: str, regmap: Dict):
    run_time = datetime.now().strftime('%b %d %H:%M:%S %Y')
    pkgname = f"adi_regmap_{key}_pkg"
    classname = f"adi_regmap_{key}"
    f.write(license_sv)
    f.write("/* Auto generated Register Map */\n")
    f.write(f"/* {run_time} v{__version__} */\n")
    f.write("\n")

    f.write(f"package {pkgname};\n")
    f.write("  import logger_pkg::*;\n")
    f.write("  import adi_api_pkg::*;\n\n")
    f.write(f"  class {classname} extends adi_regmap")
    f.write(";\n\n")


def svpkg_reg_decl(f, regmap: Dict):
    for reg in regmap['regmap']:
        if reg['where'] is not None:
            number_of_instances = reg['where'][1]-1
            row = f"    {reg['name']}_CLASS"
            row += f" {reg['name']}_R [{number_of_instances}:0];\n"
            f.write(row)
        else:
            row = f"    {reg['name']}_CLASS"
            row += f" {reg['name']}_R;\n"
            f.write(row)


def svpkg_reg_inst(f, regmap: Dict):
    for reg in regmap['regmap']:
        if reg['where'] is not None:
            number_of_instances = reg['where'][1]
            f.write(f"      for (int i=0; i<{number_of_instances}; i++) begin\n")
            split_name = reg['name'].split('n')
            reg['address'] = (reg['address'] + reg['addr_incr'] * 0) * 4
            addr = hex(reg['address']).replace("0x", "'h")
            row = f"        this.{reg['name']}_R[i] = new("
            row += f"$sformatf(\"{split_name[0]}%0d{split_name[1]}\", i)"
            row += f", {addr} + 'h{reg['addr_incr']} * i * 4"
            reg_param_dec = []

            for reg_param in reg['parameters']:
                reg_param_dec.append(reg_param)
            if len(reg_param_dec):
                reg_params_set = set(reg_param_dec)
                reg_param_dec = list(reg_params_set)
                reg_param_dec.sort()
                row += ", "
                row += ", ".join(reg_param_dec)

            row += ", this);\n"
            f.write(row)
            f.write("      end\n")
        else:
            reg['address'] = reg['address'] * 4
            addr = hex(reg['address']).replace("0x", "'h")
            row = f"      this.{reg['name']}_R = new("
            row += '"' + reg['name'] + '"'
            row += f", {addr}"
            reg_param_dec = []
            for reg_param in reg['parameters']:
                reg_param_dec.append(reg_param)
            if len(reg_param_dec):
                reg_params_set = set(reg_param_dec)
                reg_param_dec = list(reg_params_set)
                reg_param_dec.sort()
                row += ", "
                row += ", ".join(reg_param_dec)
            row += ", this);\n"
            f.write(row)


def svpkg_footer(f, key: str, regmap: Dict):
    pkgname = f"adi_regmap_{key}_pkg"
    classname = f"adi_regmap_{key}"
    f.write(f"  endclass: {classname}\n\n")
    f.write(f"endpackage: {pkgname}\n")


def write_hdl_regmap_pkg(
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

    f.write("\n    function new(\n")
    f.write("      input string name,\n")
    f.write("      input int address,\n")
    reg_param_dec = []
    for rm in regmap:
        for reg in regmap[rm]['regmap']:
            for reg_param in reg['parameters']:
                reg_param_dec.append(reg_param)
    if len(reg_param_dec):
        reg_params_set = set(reg_param_dec)
        reg_param_dec = list(reg_params_set)
        reg_param_dec.sort()
        for reg_param in reg_param_dec:
            f.write(f"      input int {reg_param},\n")
    f.write("      input adi_api parent = null);\n\n")
    f.write("      super.new(name, address, parent);\n\n")
    for rm in regmap:
        svpkg_reg_inst(f, regmap[rm])
    f.write("\n")
    f.write("      this.info($sformatf(\"Initialized\"), ADI_VERBOSITY_HIGH);\n")
    f.write("    endfunction: new\n\n")

    svpkg_footer(f, key, rm)

    f.close()


def write_hdl_regmap_definitions(
    path_: str,
    regmap: Dict,
    key: str
) -> None:
    reg_param_dec = []
    for rm in regmap:
        for reg in regmap[rm]['regmap']:
            for reg_param in reg['parameters']:
                reg_param_dec.append(reg_param)
    if len(reg_param_dec):
        reg_params_set = set(reg_param_dec)
        reg_param_dec = list(reg_params_set)
        reg_param_dec.sort()
        separator = ', \\\n'

        fname = f"adi_regmap_{key}_definitions.svh"
        file = path.join(path_, fname)
        f = open(file, "w")

        run_time = datetime.now().strftime('%b %d %H:%M:%S %Y')
        pkgname = f"adi_regmap_{key}_pkg"
        f.write(license_sv)
        f.write("/* Auto generated Register Map */\n")
        f.write(f"/* {run_time} v{__version__} */\n")
        f.write("\n")

        f.write("`timescale 1ns/1ps\n\n")
        f.write(f"`ifndef _{pkgname.upper()}_DEFINITIONS_SVH_\n")
        f.write(f"`define _{pkgname.upper()}_DEFINITIONS_SVH_\n\n")

        f.write("// Help build VIP Interface parameters name\n")

        reg_param_dec_import = reg_param_dec.copy()
        for i, reg_param in enumerate(reg_param_dec_import):
            reg_param_dec_import[i] = f"  n``.inst.{reg_param}"
        row = separator.join(reg_param_dec_import)
        f.write(f"`define {pkgname.upper()}_PARAM_IMPORT(n)")
        f.write(f"{row}\n\n")

        for i, reg_param in enumerate(reg_param_dec):
            reg_param_dec[i] = f"  {reg_param}"
        row = separator.join(reg_param_dec)
        f.write(f"`define {pkgname.upper()}_PARAM_DECL int")
        f.write(f"{row}\n\n")

        f.write(f"`define {pkgname.upper()}_PARAM_ORDER")
        f.write(f"{row}\n\n")

        f.write("`endif\n")

        f.close()


def write_hdl_regmap(
    path_: str,
    regmap: Dict,
    key: str
) -> None:
    write_hdl_regmap_pkg(path_, regmap, key)
    write_hdl_regmap_definitions(path_, regmap, key)


def regmap_test_program(
    path_: str,
    regmap: Dict
) -> None:
    fname = "test_program.sv"
    file = path.join(path_, fname)
    f = open(file, "w")

    f.write("`include \"utils.svh\"\n\n")
    f.write("import logger_pkg::*;\n")

    for m in regmap:
        row = "import adi_regmap_" + m + "_pkg::*;\n"
        f.write(row)

    f.write("\nmodule test_program;\n\n")

    for m in regmap:
        row = "  adi_regmap_" + m + " "

        row += "adi_regmap_" + m + "_rm;\n"
        f.write(row)

    f.write("\n  initial begin\n\n")

    f.write("\n    setLoggerVerbosity(ADI_VERBOSITY_NONE);\n\n")

    for m in regmap:
        row = "    adi_regmap_" + m + "_rm = new(\"" + m + "\""
        row += ", 0"
        reg_param_dec = []
        for k in regmap[m]['subregmap']:
            for reg in regmap[m]['subregmap'][k]['regmap']:
                for reg_param in reg['parameters']:
                    reg_param_dec.append(reg_param)
        if len(reg_param_dec):
            reg_params_set = set(reg_param_dec)
            reg_param_dec = list(reg_params_set)
            reg_param_dec.sort()
            reg_param_t0 = []
            for conv in reg_param_dec:
                reg_param_t0.append("0")
            row += ", "
            row += ", ".join(reg_param_t0)
        row += ");\n"
        f.write(row)

    f.write("\n    $finish();\n\n")
    f.write("  end\n\n")
    f.write("endmodule\n")

    f.close()


def regmap_bash_script(
    path_: str,
    regmap: Dict
) -> None:
    fname = "test_program"
    file = path.join(path_, fname)
    f = open(file, "w")

    f.write("#!/bin/bash\n\n")

    f.write("SOURCE=\"utils.svh \"\n")
    f.write("SOURCE+=\"logger_pkg.sv \"\n")
    f.write("SOURCE+=\"adi_common_pkg.sv \"\n")
    f.write("SOURCE+=\"adi_environment_pkg.sv \"\n")
    f.write("SOURCE+=\"adi_vip_pkg.sv \"\n")
    f.write("SOURCE+=\"axi_definitions.svh \"\n")
    f.write("SOURCE+=\"m_axi_sequencer.sv \"\n")
    f.write("SOURCE+=\"adi_api_pkg.sv \"\n")

    for m in regmap:
        row = "SOURCE+=\"adi_regmap_" + m + "_pkg.sv \"\n"
        f.write(row)

    f.write("SOURCE+=\"test_program.sv\"\n\n")

    f.write("cp ../utilities/utils.svh .\n")
    f.write("cp ../utilities/logger_pkg.sv .\n")
    f.write("cp ../utilities/adi_common_pkg.sv .\n")
    f.write("cp ../utilities/adi_environment_pkg.sv .\n")
    f.write("cp ../utilities/adi_api_pkg.sv .\n")
    f.write("cp ../utilities/adi_vip_pkg.sv .\n")
    f.write("cp ../vip/amd/axi/m_axi_sequencer.sv .\n")
    f.write("cp ../vip/amd/axi/axi_definitions.svh .\n")
    f.write("source ../../scripts/run_unit_tb.sh")

    f.close()


def write_hdl_regmap_test(
    path_: str,
    regmap: Dict
) -> None:
    regmap_test_program(path_, regmap)
    regmap_bash_script(path_, regmap)


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
