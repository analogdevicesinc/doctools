from typing import Dict

from datetime import datetime
from os import path

svpkg_fn_new0 = """
      function new(
        input string name,
        input int address);

        super.new(name, address);
"""

svpkg_fn_new1 = """\
      endfunction: new
"""


def svpkg_regmap(f, regmap: Dict, key: str):
    f.write(f"    /* {regmap['title']} */\n")

    for reg in regmap['regmap']:
        row = f"    class {reg['name']}"
        reg_dep_dec = []
        for reg_dep in reg['dependencies']:
            reg_dep_dec.append("int " + reg_dep)
            reg_dep_dec.sort()
        if len(reg_dep_dec):
            row += " #("
            row += ", ".join(reg_dep_dec)
            row += ")"
        row += " extends register_base;""\n"
        f.write(row)

        for field in reg['fields']:
            if field['name'] != 'RESERVED':
                row = f"      field_base {field['name']}_F;""\n"
                f.write(row)

        f.write(svpkg_fn_new0)
        for field in reg['fields']:
            if field['name'] != 'RESERVED':
                row = f"        this.{field['name']}_F = "'new("'f"{field['name']}"
                bits = f"{field['bits'][0]}, {field['bits'][1]}"

                if field['default'] is None:
                    default = "'hXXXXXXXX"
                else:
                    default = field['default']
                    if type(default) is int:
                        default = hex(field['default']).replace("0x", "'h")
                    else:
                        if "0xX" not in default:
                            default = default.replace("``", "")
                            default = default.replace("log2", "$clog2")
                            default = default.replace("min", "`MIN")
                            default = default.replace("max", "`MAX")
                            default = default.replace("^", "**")

                row += '"'f", {bits}, {field['rw']}, {default}, this);""\n"
                f.write(row)

        f.write(svpkg_fn_new1)
        f.write("    endclass\n\n")


def svpkg_head(f, key: str, regmap: Dict):
    run_time = datetime.now().strftime('%b %d %H:%M:%S %Y')
    pkgname = f"adi_regmap_{key}_pkg"
    classname = f"adi_regmap_{key}"
    f.write("""\
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
""")
    f.write("/* Auto generated Register Map */\n")
    f.write(f"/* {run_time} */\n")
    f.write("\n")

    f.write(f"package {pkgname};\n")
    f.write("  import regmap_pkg::*;\n\n")
    f.write(f"  class {classname}")
    reg_dep_dec = []
    for rm in regmap:
        for reg in regmap[rm]['regmap']:
            for reg_dep in reg['dependencies']:
                reg_dep_dec.append("int " + reg_dep)
    if len(reg_dep_dec):
        reg_deps_set = set(reg_dep_dec)
        reg_dep_dec = list(reg_deps_set)
        reg_dep_dec.sort()
    if len(reg_dep_dec):
        f.write(f" #(")
        f.write(f", ".join(reg_dep_dec))
        f.write(f")")
    f.write(f";\n\n")


def svpkg_reg_decl(f, regmap: Dict):
    for reg in regmap['regmap']:
        if reg['where'] is not None:
            for n in range(*reg['where']):
                reg_ = reg.copy()
                reg_['name'] = reg_['name'].replace('n', str(n))
                row = f"    {reg['name']}"
                if len(reg['dependencies']):
                    row += " #("
                    row += ", ".join(reg['dependencies'])
                    row += ")"
                row += f" {reg_['name']}_R;\n"
                f.write(row)
        else:
            row = f"    {reg['name']}"
            if len(reg['dependencies']):
                row += " #("
                row += ", ".join(reg['dependencies'])
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


def write_hdl_regmap(path_: str, regmap: Dict, key: str):
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
