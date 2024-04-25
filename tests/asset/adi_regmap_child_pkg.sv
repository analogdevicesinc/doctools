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
/* Auto generated Register Map */
/* Apr 25 10:13:43 2024 */

package adi_regmap_child_pkg;
  import regmap_pkg::*;

  class adi_regmap_child #();

    /* Child (child) */
    class MOCK_0 #() extends register_base;
      field_base SECOND_F;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.SECOND_F = new("SECOND", 1, 1, RW, 'h0, this);
      endfunction: new
    endclass

    class MOCK_CHANn #() extends register_base;
      field_base CONFIGURE_F;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.CONFIGURE_F = new("CONFIGURE", 2, 0, RW, 'h7, this);
      endfunction: new
    endclass

    MOCK_0 #() MOCK_0_R;
    MOCK_CHANn #() MOCK_CHANn_R;

    function new();
      this.MOCK_0_R = new("MOCK_0", 'h40);
      this.MOCK_CHANn_R = new("MOCK_CHANn", 'h428);
    endfunction: new;

  endclass;
endpackage;
