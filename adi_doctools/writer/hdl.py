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
        row = f"    class {reg['name']} #() extends register_base;""\n"
        f.write(row)

        for field in reg['fields']:
            row = f"      field_base {field['name']};""\n"
            f.write(row)

        f.write(svpkg_fn_new0)
        for field in reg['fields']:
            row = f"        this.{field['name']} = "'new("'f"{field['name']}"
            bits = field['bits']
            bits = ', '.join(bits.split(':') if ':' in bits else [bits, bits])
            default = field['default']
            if default.startswith('``'):
                # TODO implement parameter replacement
                default = "'hXX"
            else:
                default = field['default'].replace("0x", "'h")
            row += '"'f", {bits}, {field['rw']}, {default}, this);""\n"
            f.write(row)

        f.write(svpkg_fn_new1)
        f.write("    endclass\n\n")

    for reg in regmap['regmap']:
        row = f"    {reg['name']} #() {reg['name']}_R;\n"
        f.write(row)

    f.write("\n    function new();\n")
    for reg in regmap['regmap']:
        addr = hex(reg['address']).replace("0x", "'h")
        row = f"        this.{reg['name']}_R = new("
        row += '"' + reg['name'] + '"'
        row += f", {addr});\n"
        f.write(row)
    f.write("    endfunction: new;\n\n")


def svpkg_head(f, key: str):
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
    f.write(f"  class {classname} #();\n\n")


def svpkg_footer(f):
    f.write("  endclass;\n")
    f.write("endpackage;\n")


def write_hdl_regmap(path_: str, regmap: Dict, key: str):
    fname = f"adi_regmap_{key}_pkg.sv"
    file = path.join(path_, fname)
    f = open(file, "w")
    svpkg_head(f, key)
    for rm in regmap:
        svpkg_regmap(f, regmap[rm], rm)
    svpkg_footer(f)

    f.close()
