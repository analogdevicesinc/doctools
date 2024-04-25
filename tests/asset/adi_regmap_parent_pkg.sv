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

package adi_regmap_parent_pkg;
  import regmap_pkg::*;

  class adi_regmap_parent #();

    /* Parent (parent) */
    class MOCK_0 #() extends register_base;
      field_base THIRD_F;
      field_base SECOND_F;
      field_base FIRST_F;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.THIRD_F = new("THIRD", 2, 2, RW, 'h0, this);
        this.SECOND_F = new("SECOND", 1, 1, RW, 'h0, this);
        this.FIRST_F = new("FIRST", 0, 0, RW, 'h0, this);
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
    MOCK_CHANn #() MOCK_CHAN0_R;
    MOCK_CHANn #() MOCK_CHAN1_R;
    MOCK_CHANn #() MOCK_CHAN2_R;
    MOCK_CHANn #() MOCK_CHAN3_R;
    MOCK_CHANn #() MOCK_CHAN4_R;
    MOCK_CHANn #() MOCK_CHAN5_R;
    MOCK_CHANn #() MOCK_CHAN6_R;
    MOCK_CHANn #() MOCK_CHAN7_R;
    MOCK_CHANn #() MOCK_CHAN8_R;
    MOCK_CHANn #() MOCK_CHAN9_R;
    MOCK_CHANn #() MOCK_CHAN10_R;
    MOCK_CHANn #() MOCK_CHAN11_R;
    MOCK_CHANn #() MOCK_CHAN12_R;
    MOCK_CHANn #() MOCK_CHAN13_R;
    MOCK_CHANn #() MOCK_CHAN14_R;
    MOCK_CHANn #() MOCK_CHAN15_R;

    function new();
      this.MOCK_0_R = new("MOCK_0", 'h40);
      this.MOCK_CHAN0_R = new("MOCK_CHAN0", 'h428);
      this.MOCK_CHAN1_R = new("MOCK_CHAN1", 'h430);
      this.MOCK_CHAN2_R = new("MOCK_CHAN2", 'h438);
      this.MOCK_CHAN3_R = new("MOCK_CHAN3", 'h440);
      this.MOCK_CHAN4_R = new("MOCK_CHAN4", 'h448);
      this.MOCK_CHAN5_R = new("MOCK_CHAN5", 'h450);
      this.MOCK_CHAN6_R = new("MOCK_CHAN6", 'h458);
      this.MOCK_CHAN7_R = new("MOCK_CHAN7", 'h460);
      this.MOCK_CHAN8_R = new("MOCK_CHAN8", 'h468);
      this.MOCK_CHAN9_R = new("MOCK_CHAN9", 'h470);
      this.MOCK_CHAN10_R = new("MOCK_CHAN10", 'h478);
      this.MOCK_CHAN11_R = new("MOCK_CHAN11", 'h480);
      this.MOCK_CHAN12_R = new("MOCK_CHAN12", 'h488);
      this.MOCK_CHAN13_R = new("MOCK_CHAN13", 'h490);
      this.MOCK_CHAN14_R = new("MOCK_CHAN14", 'h498);
      this.MOCK_CHAN15_R = new("MOCK_CHAN15", 'h4a0);
    endfunction: new;

  endclass;
endpackage;
