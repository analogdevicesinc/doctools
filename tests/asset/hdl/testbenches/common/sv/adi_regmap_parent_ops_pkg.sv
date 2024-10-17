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
/* Sep 06 11:19:22 2024 v0.3.40 */

package adi_regmap_parent_ops_pkg;
  import regmap_pkg::*;

  class adi_regmap_parent_ops;

    /* Parent OPS (parent ops) */
    class MOCK_0_CLASS extends register_base;
      field_base FOURTH_F;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.FOURTH_F = new("FOURTH", 4, 4, RW, 'h0, this);
      endfunction: new
    endclass

    class MOCK_1_CLASS extends register_base;
      field_base CONFIGURE0_F;
      field_base CONFIGURE1_F;
      field_base CONFIGURE2_F;
      field_base CONFIGURE3_F;
      field_base CONFIGURE4_F;
      field_base CONFIGURE5_F;
      field_base CONFIGURE6_F;
      field_base CONFIGURE7_F;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.CONFIGURE0_F = new("CONFIGURE0", 0, 0, RW, 'h0, this);
        this.CONFIGURE1_F = new("CONFIGURE1", 1, 1, RW, 'h0, this);
        this.CONFIGURE2_F = new("CONFIGURE2", 2, 2, RW, 'h0, this);
        this.CONFIGURE3_F = new("CONFIGURE3", 3, 3, RW, 'h0, this);
        this.CONFIGURE4_F = new("CONFIGURE4", 4, 4, RW, 'h0, this);
        this.CONFIGURE5_F = new("CONFIGURE5", 5, 5, RW, 'h0, this);
        this.CONFIGURE6_F = new("CONFIGURE6", 6, 6, RW, 'h0, this);
        this.CONFIGURE7_F = new("CONFIGURE7", 7, 7, RW, 'h0, this);
      endfunction: new
    endclass

    MOCK_0_CLASS MOCK_0_R;
    MOCK_1_CLASS MOCK_1_R;

    function new();
      this.MOCK_0_R = new("MOCK_0", 'h40);
      this.MOCK_1_R = new("MOCK_1", 'h80);
    endfunction: new;

  endclass;
endpackage;
