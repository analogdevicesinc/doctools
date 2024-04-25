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
      field_base THIRD;
      field_base SECOND;
      field_base FIRST;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.THIRD = new("THIRD", 2, 2, RW, 'h0, this);
        this.SECOND = new("SECOND", 1, 1, RW, 'h0, this);
        this.FIRST = new("FIRST", 0, 0, RW, 'h0, this);
      endfunction: new
    endclass

    class MOCK_CHAN0 #() extends register_base;
      field_base RESERVED;
      field_base CONFIGURE;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.RESERVED = new("RESERVED", 31, 3, RO, 'h0, this);
        this.CONFIGURE = new("CONFIGURE", 2, 0, RW, 'h7, this);
      endfunction: new
    endclass

    class MOCK_CHAN1 #() extends register_base;
      field_base RESERVED;
      field_base CONFIGURE;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.RESERVED = new("RESERVED", 31, 3, RO, 'h0, this);
        this.CONFIGURE = new("CONFIGURE", 2, 0, RW, 'h7, this);
      endfunction: new
    endclass

    class MOCK_CHAN2 #() extends register_base;
      field_base RESERVED;
      field_base CONFIGURE;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.RESERVED = new("RESERVED", 31, 3, RO, 'h0, this);
        this.CONFIGURE = new("CONFIGURE", 2, 0, RW, 'h7, this);
      endfunction: new
    endclass

    class MOCK_CHAN3 #() extends register_base;
      field_base RESERVED;
      field_base CONFIGURE;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.RESERVED = new("RESERVED", 31, 3, RO, 'h0, this);
        this.CONFIGURE = new("CONFIGURE", 2, 0, RW, 'h7, this);
      endfunction: new
    endclass

    class MOCK_CHAN4 #() extends register_base;
      field_base RESERVED;
      field_base CONFIGURE;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.RESERVED = new("RESERVED", 31, 3, RO, 'h0, this);
        this.CONFIGURE = new("CONFIGURE", 2, 0, RW, 'h7, this);
      endfunction: new
    endclass

    class MOCK_CHAN5 #() extends register_base;
      field_base RESERVED;
      field_base CONFIGURE;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.RESERVED = new("RESERVED", 31, 3, RO, 'h0, this);
        this.CONFIGURE = new("CONFIGURE", 2, 0, RW, 'h7, this);
      endfunction: new
    endclass

    class MOCK_CHAN6 #() extends register_base;
      field_base RESERVED;
      field_base CONFIGURE;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.RESERVED = new("RESERVED", 31, 3, RO, 'h0, this);
        this.CONFIGURE = new("CONFIGURE", 2, 0, RW, 'h7, this);
      endfunction: new
    endclass

    class MOCK_CHAN7 #() extends register_base;
      field_base RESERVED;
      field_base CONFIGURE;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.RESERVED = new("RESERVED", 31, 3, RO, 'h0, this);
        this.CONFIGURE = new("CONFIGURE", 2, 0, RW, 'h7, this);
      endfunction: new
    endclass

    class MOCK_CHAN8 #() extends register_base;
      field_base RESERVED;
      field_base CONFIGURE;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.RESERVED = new("RESERVED", 31, 3, RO, 'h0, this);
        this.CONFIGURE = new("CONFIGURE", 2, 0, RW, 'h7, this);
      endfunction: new
    endclass

    class MOCK_CHAN9 #() extends register_base;
      field_base RESERVED;
      field_base CONFIGURE;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.RESERVED = new("RESERVED", 31, 3, RO, 'h0, this);
        this.CONFIGURE = new("CONFIGURE", 2, 0, RW, 'h7, this);
      endfunction: new
    endclass

    class MOCK_CHAN10 #() extends register_base;
      field_base RESERVED;
      field_base CONFIGURE;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.RESERVED = new("RESERVED", 31, 3, RO, 'h0, this);
        this.CONFIGURE = new("CONFIGURE", 2, 0, RW, 'h7, this);
      endfunction: new
    endclass

    class MOCK_CHAN11 #() extends register_base;
      field_base RESERVED;
      field_base CONFIGURE;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.RESERVED = new("RESERVED", 31, 3, RO, 'h0, this);
        this.CONFIGURE = new("CONFIGURE", 2, 0, RW, 'h7, this);
      endfunction: new
    endclass

    class MOCK_CHAN12 #() extends register_base;
      field_base RESERVED;
      field_base CONFIGURE;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.RESERVED = new("RESERVED", 31, 3, RO, 'h0, this);
        this.CONFIGURE = new("CONFIGURE", 2, 0, RW, 'h7, this);
      endfunction: new
    endclass

    class MOCK_CHAN13 #() extends register_base;
      field_base RESERVED;
      field_base CONFIGURE;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.RESERVED = new("RESERVED", 31, 3, RO, 'h0, this);
        this.CONFIGURE = new("CONFIGURE", 2, 0, RW, 'h7, this);
      endfunction: new
    endclass

    class MOCK_CHAN14 #() extends register_base;
      field_base RESERVED;
      field_base CONFIGURE;

      function new(
        input string name,
        input int address);

        super.new(name, address);
        this.RESERVED = new("RESERVED", 31, 3, RO, 'h0, this);
        this.CONFIGURE = new("CONFIGURE", 2, 0, RW, 'h7, this);
      endfunction: new
    endclass

    MOCK_0 #() MOCK_0_R;
    MOCK_CHAN0 #() MOCK_CHAN0_R;
    MOCK_CHAN1 #() MOCK_CHAN1_R;
    MOCK_CHAN2 #() MOCK_CHAN2_R;
    MOCK_CHAN3 #() MOCK_CHAN3_R;
    MOCK_CHAN4 #() MOCK_CHAN4_R;
    MOCK_CHAN5 #() MOCK_CHAN5_R;
    MOCK_CHAN6 #() MOCK_CHAN6_R;
    MOCK_CHAN7 #() MOCK_CHAN7_R;
    MOCK_CHAN8 #() MOCK_CHAN8_R;
    MOCK_CHAN9 #() MOCK_CHAN9_R;
    MOCK_CHAN10 #() MOCK_CHAN10_R;
    MOCK_CHAN11 #() MOCK_CHAN11_R;
    MOCK_CHAN12 #() MOCK_CHAN12_R;
    MOCK_CHAN13 #() MOCK_CHAN13_R;
    MOCK_CHAN14 #() MOCK_CHAN14_R;

    function new();
        this.MOCK_0_R = new("MOCK_0", 'h10);
        this.MOCK_CHAN0_R = new("MOCK_CHAN0", 'h0);
        this.MOCK_CHAN1_R = new("MOCK_CHAN1", 'h16);
        this.MOCK_CHAN2_R = new("MOCK_CHAN2", 'h2c);
        this.MOCK_CHAN3_R = new("MOCK_CHAN3", 'h42);
        this.MOCK_CHAN4_R = new("MOCK_CHAN4", 'h58);
        this.MOCK_CHAN5_R = new("MOCK_CHAN5", 'h6e);
        this.MOCK_CHAN6_R = new("MOCK_CHAN6", 'h84);
        this.MOCK_CHAN7_R = new("MOCK_CHAN7", 'h9a);
        this.MOCK_CHAN8_R = new("MOCK_CHAN8", 'hb0);
        this.MOCK_CHAN9_R = new("MOCK_CHAN9", 'hc6);
        this.MOCK_CHAN10_R = new("MOCK_CHAN10", 'hdc);
        this.MOCK_CHAN11_R = new("MOCK_CHAN11", 'hf2);
        this.MOCK_CHAN12_R = new("MOCK_CHAN12", 'h108);
        this.MOCK_CHAN13_R = new("MOCK_CHAN13", 'h11e);
        this.MOCK_CHAN14_R = new("MOCK_CHAN14", 'h134);
    endfunction: new;

  endclass;
endpackage;
