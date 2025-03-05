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
/* Sep 06 11:19:22 2024 v0.3.40 */

package adi_regmap_child_pkg;
  import logger_pkg::*;
  import adi_api_pkg::*;

  class adi_regmap_child extends adi_regmap;

    /* Child (child) */
    class MOCK_0_CLASS extends register_base;
      field_base SECOND_F;

      function new(
        input string name,
        input int address,
        input adi_regmap parent = null);

        super.new(name, address, parent);

        this.SECOND_F = new("SECOND", 1, 1, RW, 'h0, this);

        this.initialization_done = 1;
      endfunction: new
    endclass: MOCK_0_CLASS

    class MOCK_CHANn_CLASS extends register_base;
      field_base CONFIGURE_F;

      function new(
        input string name,
        input int address,
        input adi_regmap parent = null);

        super.new(name, address, parent);

        this.CONFIGURE_F = new("CONFIGURE", 2, 0, RW, 'h7, this);

        this.initialization_done = 1;
      endfunction: new
    endclass: MOCK_CHANn_CLASS

    MOCK_0_CLASS MOCK_0_R;
    MOCK_CHANn_CLASS MOCK_CHANn_R [15:0];

    function new(
      input string name,
      input int address,
      input adi_api parent = null);

      super.new(name, address, parent);

      this.MOCK_0_R = new("MOCK_0", 'h40, this);
      for (int i=0; i<16; i++) begin
        this.MOCK_CHANn_R[i] = new($sformatf("MOCK_CHAN%0d", i), 'h428 + 'h2 * i * 4, this);
      end

      this.info($sformatf("Initialized"), ADI_VERBOSITY_HIGH);
    endfunction: new

  endclass: adi_regmap_child

endpackage: adi_regmap_child_pkg
