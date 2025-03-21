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
/* Auto generated Register Map */
/* Sep 05 16:39:34 2024 v0.3.39 */

package adi_regmap_parent_pkg;
  import logger_pkg::*;
  import adi_api_pkg::*;

  class adi_regmap_parent extends adi_regmap;

    /* Parent (parent) */
    class MOCK_0_CLASS extends register_base;
      field_base THIRD_F;
      field_base SECOND_F;
      field_base FIRST_F;

      function new(
        input string name,
        input int address,
        input adi_regmap parent = null);

        super.new(name, address, parent);

        this.THIRD_F = new("THIRD", 2, 2, RW, 'h0, this);
        this.SECOND_F = new("SECOND", 1, 1, RW, 'h0, this);
        this.FIRST_F = new("FIRST", 0, 0, RW, 'h0, this);

        this.initialization_done = 1;
      endfunction: new
    endclass: MOCK_0_CLASS

    class MOCK_CHANn_CLASS extends register_base;
      field_base FIRST_F;
      field_base SECOND_F;
      field_base THIRD_F;
      field_base CONFIGURE_F;

      function new(
        input string name,
        input int address,
        input int A,
        input int B,
        input int VAL1,
        input int VAL2,
        input int VAL3,
        input int VAL4,
        input adi_regmap parent = null);

        super.new(name, address, parent);

        this.FIRST_F = new("FIRST", 31, A, RO, VAL1, this);
        this.SECOND_F = new("SECOND", A-1, B, RO, VAL2+VAL1-VAL3, this);
        this.THIRD_F = new("THIRD", B-1, 3, RO, ($clog2(VAL3**9)-VAL4)*7**2, this);
        this.CONFIGURE_F = new("CONFIGURE", 2, 0, RW, 'h7, this);

        this.initialization_done = 1;
      endfunction: new
    endclass: MOCK_CHANn_CLASS

    class EXPAND_FIELDS_CLASS extends register_base;
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
        input int address,
        input adi_regmap parent = null);

        super.new(name, address, parent);

        this.CONFIGURE0_F = new("CONFIGURE0", 0, 0, RW, 'h0, this);
        this.CONFIGURE1_F = new("CONFIGURE1", 1, 1, RW, 'h0, this);
        this.CONFIGURE2_F = new("CONFIGURE2", 2, 2, RW, 'h0, this);
        this.CONFIGURE3_F = new("CONFIGURE3", 3, 3, RW, 'h0, this);
        this.CONFIGURE4_F = new("CONFIGURE4", 4, 4, RW, 'h0, this);
        this.CONFIGURE5_F = new("CONFIGURE5", 5, 5, RW, 'h0, this);
        this.CONFIGURE6_F = new("CONFIGURE6", 6, 6, RW, 'h0, this);
        this.CONFIGURE7_F = new("CONFIGURE7", 7, 7, RW, 'h0, this);

        this.initialization_done = 1;
      endfunction: new
    endclass: EXPAND_FIELDS_CLASS

    MOCK_0_CLASS MOCK_0_R;
    MOCK_CHANn_CLASS MOCK_CHANn_R [15:0];
    EXPAND_FIELDS_CLASS EXPAND_FIELDS_R;

    function new(
      input string name,
      input int address,
      input int A,
      input int B,
      input int VAL1,
      input int VAL2,
      input int VAL3,
      input int VAL4,
      input adi_api parent = null);

      super.new(name, address, parent);

      this.MOCK_0_R = new("MOCK_0", 'h40, this);
      for (int i=0; i<16; i++) begin
        this.MOCK_CHANn_R[i] = new($sformatf("MOCK_CHAN%0d", i), 'h428 + 'h2 * i * 4, A, B, VAL1, VAL2, VAL3, VAL4, this);
      end
      this.EXPAND_FIELDS_R = new("EXPAND_FIELDS", 'h80, this);

      this.info($sformatf("Initialized"), ADI_VERBOSITY_HIGH);
    endfunction: new

  endclass: adi_regmap_parent

endpackage: adi_regmap_parent_pkg
