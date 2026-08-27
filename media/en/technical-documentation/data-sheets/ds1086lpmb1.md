<!-- lastmod 2022-08-03 -->
<!-- image -->

## DS1086LPMB1 Peripheral Module

## General Description

The  DS1086LPMB1  peripheral  module  provides  the necessary  hardware  to  interface  the  DS1086L  3.3V spread-spectrum  EconOscillator K to  any  system  that utilizes Pmod K -compatible expansion ports configurable for  I 2 C  communication.  The  DS1086L  is  a  programmable clock generator that produces a spread-spectrum (dithered)  square-wave  output  of  frequencies  from 130kHz  to  66.6MHz.  The  selectable  dithered  output reduces radiated-emission peaks by dithering the frequency 0.5%, 1%, 2%, 4%, or 8%  below the programmed frequency. The DS1086L has a power-down mode and an output-enable control for power-sensitive applications.

Refer to the DS1086L IC data sheet for detailed information regarding operation of the IC.

## Features

- S User-Programmable 130kHz to 66.6MHz Square Wave
- S No External Timing Components Required
- S 6-Pin Pmod-Compatible Connector (I 2 C)
- S Example Software Written in C for Portability
- S Secondary Header Allows Daisy-Chaining of Additional Modules on the I 2 C Bus
- S Output Header Provides Access to Control Signals for External Circuitry
- S RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## DS1086LPMB1 Peripheral Module

<!-- image -->

EconOscillator is a trademark of Maxim Integrated Products, Inc.

Pmod is a trademark of Digilent Inc.

## DS1086LPMB1 Peripheral Module

## Component List

| DESIGNATION         |   QTY | DESCRIPTION                                                   |
|---------------------|-------|---------------------------------------------------------------|
| J3                  |     1 | 5-pin straight male header                                    |
| R1, R2, R8, R9, R10 |     5 | 4.7k I Q 5% resistors (0603)                                  |
| R3, R4, R5          |     3 | 1k I Q 5% resistors (0603)                                    |
| R6, R7              |     2 | 150k I Q 5% resistors (0603)                                  |
| U1                  |     1 | 3.3V spread-spectrum EconOscillator (8 F SOP) Maxim DS1086LU+ |
| -                   |     1 | PCB: EPCB1086L                                                |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the DS1086LPMB1 when contacting this component supplier.

## Detailed Description

## I 2 C Interface

The  DS1086LPMB1 peripheral module can interface  to the  host  in  one  of  two  ways.  It  can  plug  directly  into  a Pmod-compatible port (configured for I 2 C) through connector J1, or in this case, other I 2 C boards can attach to the same I 2 C bus through connector J2.

## I 2 C Interface (Daisy-Chaining Modules)

Alternatively, the peripheral module can connect to other I 2 C-based  Pmod  modules  using  a  4-conductor  ribbon cable connecting to the J2 connector. In this situation, pins 1-4 and 5-8 of J2 provide two connections to the I 2 C bus, allowing the module to be inserted into an I 2 C bus daisy-chain.

Connector J1 provides connection of the module to the Pmod host. The pin assignments and functions adhere to  the  Pmod  standard  recommended  by  Digilent.  See Table 1.

The  J2  connector  allows  the  module  to  be  connected through  a  daisy-chain  from  another  I 2 C  module  and/or provide I 2 C and power connections to other I 2 C modules on the same bus. See Table 2.

## Table 1. Connector J1 (I 2 C Communication)

|   PIN | SIGNAL   | DESCRIPTION                                                                                                                                           |
|-------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | PDN      | Power-down. When the pin is high, the output buffer is enabled. When the pin is low, the master oscillator is disabled (power-down mode).             |
|     2 | SPRD     | Dither enable. When the pin is high, the dither is enabled. When the pin is low, the dither is disabled.                                              |
|     3 | SCL      | I 2 C serial clock                                                                                                                                    |
|     4 | SDA      | I 2 C serial data                                                                                                                                     |
|     5 | GND      | Ground                                                                                                                                                |
|     6 | VCC      | Power supply                                                                                                                                          |
|     7 | OE       | Output enable. When the pin is high, the output buffer is enabled. When the pin is low, the output is disabled but the master oscillator is still on. |
|     8 | N.C.     | Not connected                                                                                                                                         |
|     9 | SCL      | I 2 C serial clock                                                                                                                                    |
|    10 | SDA      | I 2 C serial data                                                                                                                                     |
|    11 | GND      | Ground                                                                                                                                                |
|    12 | VCC      | Power supply                                                                                                                                          |

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| C1            |     1 | 0.01 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C103KA01D |
| C2            |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C104KA01D  |
| J1            |     1 | 12-pin (2 x 6) right-angle male header                                     |
| J2            |     1 | 8-pin (2 x 4) straight male header                                         |

## DS1086LPMB1 Peripheral Module

## External Control Signals

The  IC  implements  pins  to  control  output  enable  (OE), power-down  (PDN),  and  dither  enable  (SPRD).  These pins  can  be  controlled  either  by  the  host  (through  the Pmod  connector)  or  by  external  circuitry  through  the 5-pin  output  connector.  In  cases  where  one  or  more of  these signals is driven from an external source, 1k I resistors  R3,  R4,  and  R5  limit  the  current  to/from  the host. However, this also increases the apparent load to the external driving source. If the external source is incapable of driving this load (1k I || 4.7k I ), the signal(s) from the  host  should  either  be  put  into  three-state  (open)  or resistors R3, R4, and/or R5 should be removed.

The J3 connector provides the output signal as well as external inputs to the control signals. Note that the control lines from the host (SPRD, PND , OE) must either be three-stated or the external control signals must be able to drive the additional load. See Table 3.

## Software and FPGA Code

Example software and drivers are available that execute directly  without  modification  on  several  FPGA  development  boards  that  support  an  integrated  or  synthesized microprocessor. These boards include the Digilent Nexys  3,  Avnet  LX9,  and  Avnet  ZEDBoard,  although other platforms can be added over time. Maxim provides complete  Xilinx  ISE  projects  containing  HDL,  Platform

## Table 2. Connector J2 (I 2 C Expansion)

|   PIN | SIGNAL   | DESCRIPTION        |
|-------|----------|--------------------|
|     1 | SCL      | I 2 C serial clock |
|     2 | SDA      | I 2 C serial data  |
|     3 | GND      | Ground             |
|     4 | VCC      | Power supply       |
|     5 | SCL      | I 2 C serial clock |
|     6 | SDA      | I 2 C serial data  |
|     7 | GND      | Ground             |
|     8 | VCC      | Power supply       |

Studio, and SDK projects. In addition, a synthesized bit stream,  ready  for  FPGA  download,  is  provided  for  the demonstration application.

The  software  project  (for  the  SDK)  contains  several source  files  intended  to  accelerate  customer  evaluation  and  design.  These  include  a  base  application (maximModules.c)  that  demonstrates  module  functionality  and  uses  an  API  interface  (maximDeviceSpecific Utilities.c)  to  set  and  access  Maxim  device  functions within a specific module.

The source code is written in standard ANSI C format, and all API documentation including theory/operation, register description,  and  function  prototypes  are  documented  in the API interface file (maximDeviceSpecificUtilities.h &amp; .c).

The  complete  software  kit  is  available  for  download www.maximintegrated.com. Quick start instructions are also available as a separate document.

## Table 3. Connector J3 (External Interface)

|   PIN | SIGNAL   | DESCRIPTION                                                                                                                                           |
|-------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | OUT      | Oscillator output. The output frequency is set by the OFFSET, DAC, and prescaler registers.                                                           |
|     2 | GND      | Ground                                                                                                                                                |
|     3 | SPRD     | Dither enable. When the pin is high, the dither is enabled. When the pin is low, the dither is disabled.                                              |
|     4 | PDN      | Power-down. When the pin is high, the output buffer is enabled. When the pin is low, the master oscillator is disabled (power-down mode).             |
|     5 | OE       | Output enable. When the pin is high, the output buffer is enabled. When the pin is low, the output is disabled but the master oscillator is still on. |

## DS1086LPMB1 Periphal Module

Figure 1. DS1086LPMB11 Peripheral Module Schematic

<!-- image -->

## DS1086LPMB1 Peripheral Module

<!-- image -->

Figure 2. DS1086LPMB11 Peripheral Module Component Placement Guide-Component Side

Figure 3. DS1086LPMB11 Peripheral Module PCB Layout-Component Side

<!-- image -->

Figure 4. DS1086LPMB11 Peripheral Module PCB Layout-Inner Layer 1 (Ground)

<!-- image -->

## DS1086LPMB1 Peripheral Module

<!-- image -->

Figure 5. DS1086LPMB11 Peripheral Module PCB Layout-Inner Layer 2 (Power)

Figure 6. DS1086LPMB11 Peripheral Module PCB Layout-Solder Side

<!-- image -->

Figure 7. DS1086LPMB11 Peripheral Module Component Placement Guide-Solder Side

<!-- image -->

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| DS1086LPMB1# | Module |

# Denotes RoHS compliant.

## DS1086LPMB1 Peripheral Module

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/12            | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.