<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX5487PMB1 Peripheral Module

## General Description

The MAX5487PMB1 peripheral module provides the necessary  hardware  to  interface  the  MAX5487  dual  lineartaper  digital  potentiometer  to  any  system  that  utilizes Pmod K -compatible expansion ports configurable for SPI communication.  These  digital  potentiometers  function like mechanical potentiometers with a simple 3-wire SPI compatible interface that programs the wipers to any one of 256 tap positions. The terminals of each potentiometer are  available  at  the  output  connector  for  attachment  to external circuitry.

Refer to the MAX5487/MAX5488/MAX5489 IC data sheet for detailed information regarding operation of the IC.

## Features

- S Dual, 256-Tap, Linear-Taper 10k I Digital Potentiometers
- S Wiper Position Stored in Nonvolatile Memory (EEPROM) and Recalled on Power-Up or by an Interface Command
- S IC is Pin-Compatible with 50k I (MAX5488) and 100k I Versions (MAX5489)
- S Solder Links Allowing Configuration as Variable Resistors
- S 6-Pin Pmod-Compatible Connector (SPI)
- S Example Software Written in C for Portability
- S RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX5487PMB1 Peripheral Module

<!-- image -->

Pmod is a trademark of Digilent Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5487PMB1 Peripheral Module

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                    |
|---------------|-------|--------------------------------------------------------------------------------|
| R1, R2, R3    |     3 | 150 I Q 5% resistors (0603)                                                    |
| U1            |     1 | Dual, nonvolatile, 10k I digital potentiometer (16 TQFN-EP*) Maxim MAX5487ETE+ |
| -             |     1 | PCB: EPCB5487PM1                                                               |

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C1            |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C104KA01D |
| J1            |     1 | 6-pin right-angle male header                                             |
| J2            |     1 | 6-pin straight male header                                                |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX5487PMB1 when contacting this component supplier.

## Detailed Description

## SPI Interface

The MAX5487PMB1 peripheral module can plug directly into a Pmod-compatible port (configured for SPI) through connector J1. For information on the SPI protocol, refer to the MAX5487/MAX5488/MAX5489 IC data sheet.

J1  provides  connection  of  the  module  to  the  Pmod host.  The  pin  functions  and  pin  assignments  adhere to the  Pmod standard recommended by Digilent Inc. See Table 1.

Connector J2 provides connection to the potentiometers. See Table 2.

## Software and FPGA Code

Example software and drivers are available that execute directly  without  modification  on  several  FPGA  development  boards  that  support  an  integrated  or  synthesized microprocessor. These boards include the Digilent Nexys  3,  Avnet  LX9,  and  Avnet  ZEDBoard,  although other platforms can be added over time. Maxim provides complete  Xilinx  ISE  projects  containing  HDL,  Platform Studio, and SDK projects. In addition, a synthesized bit stream,  ready  for  FPGA  download,  is  provided  for  the demonstration application.

The  software  project  (for  the  SDK)  contains  several source  files  intended  to  accelerate  customer  evaluation  and  design.  These  include  a  base  application (maximModules.c)  that  demonstrates  module  functionality  and  uses  an  API  interface  (maximDeviceSpecific Utilities.c)  to  set  and  access  Maxim  device  functions within a specific module.

<!-- image -->

## Table 1. Connector J1 (SPI Communication)

|   PIN | SIGNAL   | DESCRIPTION                                                    |
|-------|----------|----------------------------------------------------------------|
|     1 | SS       | Chip enable. Must be asserted low to enable the SPI interface. |
|     2 | MOSI     | MAX5487 serial-data input                                      |
|     3 | N.C.     | Not connected                                                  |
|     4 | SCK      | MAX5487 serial-clock input                                     |
|     5 | GND      | Ground                                                         |
|     6 | VCC      | Power supply                                                   |

## Table 2. Connector J2 (SPI Communication)

|   PIN | SIGNAL   | DESCRIPTION                  |
|-------|----------|------------------------------|
|     1 | HA       | High terminal of resistor A  |
|     2 | WA       | Wiper terminal of resistor A |
|     3 | LA       | Low terminal of resistor A   |
|     4 | HB       | High terminal of resistor B  |
|     5 | WB       | Wiper terminal of resistor B |
|     6 | LB       | Low terminal of resistor B   |

The source code is written in standard ANSI C format, and all API documentation including theory/operation, register description,  and  function  prototypes  are  documented  in the API interface file (maximDeviceSpecificUtilities.h &amp; .c).

The  complete  software  kit  is  available  for  download  at www.maxim-ic.com .  Quick  start  instructions  are  also available as a separate document.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5487PMB1 Periphal Module

<!-- image -->

Figure 1. MAX5487PMB1 Peripheral Module Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5487PMB1 Peripheral Module

<!-- image -->

Figure 2. MAX5487PMB1 Peripheral Module Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX5487PMB1 Peripheral Module PCB Layout-Component Side

<!-- image -->

Figure 4. MAX5487PMB1 Peripheral Module PCB Layout-Inner Layer 1 (Ground)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5487PMB1 Peripheral Module

<!-- image -->

Figure 5. MAX5487PMB1 Peripheral Module PCB Layout-Inner Layer 2 (Power)

<!-- image -->

Figure 6. MAX5487PMB1 Peripheral Module PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX5487PMB1 Peripheral Module Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART         | TYPE              |
|--------------|-------------------|
| MAX5487PMB1# | Peripheral Module |

# Denotes RoHS compliant.

## MAX5487PMB1 Peripheral Module

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.