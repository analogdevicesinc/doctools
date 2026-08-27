<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX4824PMB1 Peripheral Module

## General Description

The MAX4824PMB1 peripheral module provides the necessary hardware to interface the MAX4824 8-channel relay driver  to  any  system  that  utilizes  Pmod TM -compatible expansion ports configurable for  GPIO  communication. Each  independent  channel  in  the  IC  features  a  2.7 I (typ)  on-resistance  and  is  guaranteed  to  sink  70mA (min) of load current. A zener kickback-protection circuit significantly reduces recovery time in applications where switching speed is critical. When driving relays, a unique power-save  mode  allows  relay  current  to  be  reduced to  a  level  just  above  the  relay  hold-current  threshold. This  mode  keeps  the  relay  activated  while  significantly reducing the power consumption.

Refer to the MAX4824 IC data sheet for detailed information regarding operation of the IC.

## Features

- S Eight Independent Output Channels Capable of 70mA Sink Current
- S Guaranteed 5 I (max) R ON
- S Drive Eight Relays (or Other Loads) Independently
- S 4-Bit Parallel Interface (SPI Version of IC also Available)
- S 12-Pin Pmod-Compatible Connector (GPIO)
- S Example Software Written in C for Portability
- S RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX4824PMB1 Peripheral Module

<!-- image -->

Pmod is a trademark of Digilent Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4824PMB1 Peripheral Module

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                            |
|---------------|-------|--------------------------------------------------------|
| J1            |     1 | 12-pin (2 x 6) right-angle male header                 |
| J2            |     1 | 10-pin (2 x 5) straight male header                    |
| R1-R8         |     8 | 150 I Q 5% resistors (0603)                            |
| U1            |     1 | 8-channel relay driver (20 TQFN-EP*) Maxim MAX4824ETP+ |
| -             |     1 | PCB: EPCB4824PM1                                       |

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C1            |     1 | 1 F F Q 10%, 10V X7R ceramic capacitor (0603) TDK C1608X7R1A105K          |
| C2            |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C104KA01D |
| C3            |     1 | 2.2 F F Q 10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A225K/0.80   |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX4824PMB1 when contacting these component suppliers.

## Detailed Description

## GPIO Interface

The MAX4824PMB1 peripheral module can interface to the  host  by  plugging  directly  into  a  Pmod-compatible port (configured for GPIO) through connector J1.

J1 provides connection of the module to the Pmod host through an interface similar to the Pmod Type 1 standard recommended by Digilent, but incorporates a 12in connector with eight I/O pins. See Table 1.

The J2 connector provides the connection to the opendrain relay outputs. See Table 2.

## Software and FPGA Code

Example software and drivers are available that execute directly  without  modification  on  several  FPGA  development  boards,  which  support  an  integrated  or  synthesized microprocessor. These boards include the Digilent Nexys  3,  Avnet  LX9,  and  Avnet  ZEDBoard,  although other platforms can be added over time. Maxim provides complete  Xilinx  ISE  projects  containing  HDL,  Platform Studio, and SDK projects. In addition, a synthesized bit stream,  ready  for  FPGA  download,  is  provided  for  the demonstration application.

<!-- image -->

## Table 1. Connector J1 (GPIO Communication)

|   PIN | SIGNAL   | DESCRIPTION                                                                                                         |
|-------|----------|---------------------------------------------------------------------------------------------------------------------|
|     1 | CS       | Chip-select input. This active-low signal latches in the values of LVL and A2, A1, A0.                              |
|     2 | LVL      | Level input. When latched by CS , this signal determines whether a relay at a given address (A2, A1, A0) is active. |
|     3 | A1       | A1 input. Relay address bit 1.                                                                                      |
|     4 | A0       | A0 input. Relay address bit 0.                                                                                      |
|     5 | GND      | Ground                                                                                                              |
|     6 | VCC      | Power supply                                                                                                        |
|     7 | A2       | A2 input. Relay address bit 2.                                                                                      |
|     8 | RES      | Reset Input. This active-low pin sets all eight relays inactive.                                                    |
|     9 | SET      | Set Input. This active-low pin sets all eight relays active.                                                        |
|    10 | PSAVE    | Reduces coil current to relay hold-current threshold.                                                               |
|    11 | GND      | Ground                                                                                                              |
|    12 | VCC      | Power supply                                                                                                        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 2. Connector J2

|   PIN | SIGNAL   | DESCRIPTION         |
|-------|----------|---------------------|
|     1 | OUT3     | Open-drain output 1 |
|     2 | OUT2     | Open-drain output 2 |
|     3 | OUT4     | Open-drain output 3 |
|     4 | OUT1     | Open-drain output 4 |
|     5 | OUT5     | Open-drain output 5 |
|     6 | OUT8     | Open-drain output 6 |
|     7 | OUT6     | Open-drain output 7 |
|     8 | OUT7     | Open-drain output 8 |
|     9 | GND      | Ground              |
|    10 | VCC      | Power supply        |

## MAX4824PMB1 Peripheral Module

The  software  project  (for  the  SDK)  contains  several source  files  intended  to  accelerate  customer  evaluation  and  design.  These  include  a  base  application (maximModules.c)  that  demonstrates  module  functionality  and  uses  an  API  interface  (maximDeviceSpecific Utilities.c)  to  set  and  access  Maxim  device  functions within a specific module.

The source code is written in standard ANSI C format, and all API documentation including theory/operation, register description,  and  function  prototypes  are  documented  in the API interface file (maximDeviceSpecificUtilities.h &amp; .c).

The  complete  software  kit  is  available  for  download  at www.maxim-ic.com .  Quick  start  instructions  are  also available as a separate document.

<!-- image -->

Figure 1. MAX4824PMB1 Peripheral Module Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4824PMB1 Peripheral Module

<!-- image -->

Figure 2. MAX4824PMB1 Peripheral Module Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX4824PMB1 Peripheral Module PCB Layout-Component Side

<!-- image -->

Figure 4. MAX4824PMB1 Peripheral Module PCB Layout-Inner Layer 1 (Ground)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4824PMB1 Peripheral Module

<!-- image -->

Figure 5. MAX4824PMB1 Peripheral Module PCB Layout-Inner Layer 2 (Power)

<!-- image -->

Figure 6. MAX4824PMB1 Peripheral Module PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX4824PMB1 Peripheral Module Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART         | TYPE              |
|--------------|-------------------|
| MAX4824PMB1# | Peripheral Module |

# Denotes RoHS compliant.

## MAX4824PMB1 Peripheral Module

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.