<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX5216PMB1 Peripheral Module

## General Description

The MAX5216PMB1 peripheral module provides the necessary hardware to interface the MAX5216 16-bit DAC to any  system  that  utilizes  Pmod K -compatible  expansion ports  configurable  for  SPI  communication.  The  IC  is  a single-channel, low-power, buffered voltage-output DAC. The reference voltage for the DAC is provided by a 2.5V output version of the MAX6029 voltage reference (0.15% initial accuracy, 30ppm/°C). Digital noise is minimized by having SPI input buffers powered down after completion of each serial input frame.

Refer to the MAX5216 IC data sheet for detailed information regarding operation of the IC.

Ordering Information appears at end of data sheet.

## Features

- S High-Accuracy 16-Bit DAC with On-Board Precision Voltage Reference
- S Low Gain and Offset Errors
- S Buffered Voltage Output Directly Drives 10k I Loads
- S Optional External Voltage Reference (Jumper Selectable)
- S 6-Pin Pmod-Compatible Connector (SPI)
- S Example Software Written in C for Portability
- S RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

## MAX5216PMB1 Peripheral Module

<!-- image -->

Pmod is a trademark of Digilent Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5216PMB1 Peripheral Module

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| J2            |     1 | 4-pin straight male header                                             |
| JP1           |     1 | 3-pin straight male header                                             |
| R1, R2, R3    |     3 | 150 I Q 5% resistors (0603)                                            |
| R4            |     1 | 4.7k I Q 5% resistor (0603)                                            |
| U1            |     1 | 16-bit buffered single DAC (8 F MAX M ) Maxim MAX5216GUA+              |
| U2            |     1 | Ultra-precision series voltage reference (5 SOT23) Maxim MAX6029EUK25+ |
| -             |     1 | Shorting jumper                                                        |
| -             |     1 | PCB: EPCB5216PM1                                                       |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX5216PMB1 when contacting these component suppliers.

## Detailed Description

## SPI Interface

The MAX5216PMB1 peripheral module can plug directly into a Pmod-compatible port (configured for SPI) through connector J1. For information on the SPI protocol, refer to the MAX5214/MAX5216 IC data sheet.

J1 provides connection of the module to the Pmod host. See Table 1.

Connector J2 provides connection to the IC pins.

Jumper JP1 allows the user to select between reference voltages for the DAC IC (see Table 3).

## Reference Voltage

The MAX5216PMB1  peripheral  module  contains  a MAX6029 precision voltage reference for the REF input of the IC. The MAX6029 outputs a 2.5V reference.

## Software and FPGA code

Example software and drivers are available that execute directly  without  modification  on  several  FPGA  development  boards  that  support  an  integrated  or  synthesized microprocessor. These boards include the Digilent

µMAX is a registered trademark of Maxim Integrated Products, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 1. Connector J1 (2-Wire Communication)

|   PIN | SIGNAL   | DESCRIPTION                                          |
|-------|----------|------------------------------------------------------|
|     1 | SS       | Chip enable. Assert low to enable the SPI interface. |
|     2 | MOSI     | MAX5216 serial-data input                            |
|     3 | N.C.     | Not connected                                        |
|     4 | SCK      | MAX5216 serial-clock input                           |
|     5 | GND      | Ground                                               |
|     6 | VCC      | Power supply                                         |

## Table 2. Connector J2

|   PIN | SIGNAL   | DESCRIPTION                                                                                                                   |
|-------|----------|-------------------------------------------------------------------------------------------------------------------------------|
|     1 | DACOUT   | Buffered DAC output                                                                                                           |
|     2 | CLR      | Active-low asynchronous digital-clear input. Drive low to clear contents of the DAC registers and set the DAC output to zero. |
|     3 | VREFIN   | DAC reference voltage input                                                                                                   |
|     4 | GND      | Ground                                                                                                                        |

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| C1            |     1 | 10 F F Q 10%, 10V X5R ceramic capacitor (0603) TDK C2012X5R1A106K/1.25     |
| C2            |     1 | 1 F F Q 10%, 10V X7R ceramic capacitor (0603) TDK C1608X7R1A105K           |
| C3, C4, C5    |     3 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104KA01D |
| F1            |     1 | 4.7 F F EMI filter (3-terminal capacitor) Murata NFM21PC475B1A3D           |
| J1            |     1 | 6-pin right-angle male header                                              |

## MAX5216PMB1 Peripheral Module

Nexys  3,  Avnet  LX9,  and  Avnet  ZEDBoard,  although other platforms can be added over time. Maxim provides complete  Xilinx  ISE  projects  containing  HDL,  Platform Studio, and SDK projects. In addition, a synthesized bit stream,  ready  for  FPGA  download,  is  provided  for  the demonstration application.

## Table 3. Jumper JP1 (Reference Voltage Selection)

| PINS   | SELECTION                                               |
|--------|---------------------------------------------------------|
| 2-1    | REF provided by on-board MAX6029EUK25 voltage reference |
| 2-3    | REF provided by user through pin 3 of connector J2      |

The software project (for the SDK) contains several source files intended to accelerate customer evaluation and design. These  include  a  base  application  (maximModules.c)  that demonstrates  module  functionality  and  uses  an  API  interface  (maximDeviceSpecificUtilities.c)  to  set  and  access Maxim device functions within a specific module.

The source code is written in standard ANSI C format, and all API documentation including theory/operation, register description,  and  function  prototypes  are  documented  in the API interface file (maximDeviceSpecificUtilities.h &amp; .c).

The  complete  software  kit  is  available  for  download www.maxim-ic.com .  Quick  start  instructions  are  also available as a separate document.

<!-- image -->

Figure 1. MAX5216PMB1 Peripheral Module Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5216PMB1 Peripheral Module

<!-- image -->

Figure 2. MAX5216PMB1 Peripheral Module Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX5216PMB1 Peripheral Module PCB Layout-Component Side

<!-- image -->

Figure 4. MAX5216PMB1 Peripheral Module PCB Layout-Inner Layer 1 (Ground)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5216PMB1 Peripheral Module

<!-- image -->

Figure 5. MAX5216PMB1 Peripheral Module PCB Layout-Inner Layer 2 (Power)

<!-- image -->

Figure 6. MAX5216PMB1 Peripheral Module PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX5216PMB1 Peripheral Module Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART         | TYPE              |
|--------------|-------------------|
| MAX5216PMB1# | Peripheral Module |

# Denotes RoHS compliant.

## MAX5216PMB1 Peripheral Module

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.