<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX5825PMB1 Peripheral Module

## General Description

The MAX5825PMB1 peripheral module provides the necessary hardware to interface the MAX5825 8-channel DAC to any system that utilizes Pmod K -compatible expansion ports configurable for I 2 C communication. The IC features eight  independent  12-bit  accurate  internally  buffered voltage-output  DAC  channels.  The  IC  also  features  an internal  reference  that  is  selectable  between  2.048V, 2.500V,  and  4.096V  (4.096V  reference  operation  is  not supported with a standard 3.3V Pmod-port power supply).

## Features

- S Eight High-Accuracy DAC Channels
- S 12-Bit Accuracy without Adjustment
- S Precision Voltage Reference Internal to the IC
- S Provision for Optional External Reference Input
- S Jumper-Selectable I 2 C Address Setting
- S 6-Pin Pmod-Compatible Connector (I 2 C)
- S Secondary Header Allows Daisy-Chaining of Additional Modules on the I 2 C Bus
- S Example Software Written in C for Portability
- S RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX5825PMB1 Peripheral Module

<!-- image -->

Pmod is a trademark of Digilent Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5825PMB1 Peripheral Module

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| J2            |     1 | 8-pin (2 x 4) straight male header                               |
| J3            |     1 | 14-pin (2 x 7) straight male header                              |
| JP1, JP2      |     2 | 3-pin straight male headers                                      |
| R1-R4         |     4 | 150 I Q 5% resistors (0603)                                      |
| R5-R9         |     5 | 4.7k I Q 5% resistors (0603)                                     |
| R10           |     0 | Not installed, 100k I resistor (0603)                            |
| U1            |     1 | Octal-channel, 12-bit buffered DAC (20 TSSOP) Maxim MAX5825AAUP+ |
| -             |     2 | Shorting jumpers                                                 |
| -             |     1 | PCB: EPCB5825PM1                                                 |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX5825PMB1 when contacting these component suppliers.

## Detailed Description

## I 2 C Interface

The MAX5825PMB1 peripheral module can interface to the  host  in  one  of  two  ways.  It  can  plug  directly  into  a Pmod-compatible port (configured for I 2 C) through connector J1, or in this case, other I 2 C boards can attach to the same I 2 C bus through connector J2.

## I 2 C Interface (Daisy-Chaining Modules)

Alternatively, the peripheral module can connect to other I 2 C-based  Pmod  modules  using  a  4-conductor  ribbon cable connecting to the J2 connector. In this situation, pins 1-4 and 5-8 on J2 provide two connections to the I 2 C  bus, allowing the module to be inserted into an I 2 C bus daisy-chain.

Connector J1 provides connection of the module to the Pmod host. The pin assignments and functions adhere to  the  Pmod  standard  recommended  by  Digilent.  See Table 1.

The  J2  connector  allows  the  module  to  be  connected through  a  daisy-chain  from  another  I 2 C  module  and/or provide I 2 C and power connections to other I 2 C modules on the same bus. See Table 2.

<!-- image -->

## Table 1. Connector J1 (I 2 C Communication)

|   PIN | SIGNAL   | DESCRIPTION                                                                   |
|-------|----------|-------------------------------------------------------------------------------|
|     1 | LDAC     | Active-low asynchronous DAC load input                                        |
|     2 | IRQ      | Active-low open-drain interrupt output. IRQ low indicates a watchdog timeout. |
|     3 | SCL      | I 2 C serial clock                                                            |
|     4 | SDA      | I 2 C serial data                                                             |
|     5 | GND      | Ground                                                                        |
|     6 | VDD      | Power supply                                                                  |

## Table 2. Connector J2 (I 2 C Expansion)

|   PIN | SIGNAL   | DESCRIPTION                               |
|-------|----------|-------------------------------------------|
|     1 | SCL      | I 2 C serial clock                        |
|     2 | SDA      | I 2 C serial data                         |
|     3 | GND      | Ground                                    |
|     4 | VDD      | Power supply                              |
|     5 | SCL      | 2-wire serial clock. Same as pin 1 above. |
|     6 | SDA      | 2-wire serial data. Same as pin 2 above.  |
|     7 | GND      | Ground                                    |
|     8 | VDD      | Power supply                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| C1            |     1 | 10 F F Q 10%, 10V X5R ceramic capacitor (0603) TDK C2012X5R1A106K/1.25     |
| C2            |     1 | 2.2 F F Q 10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A225K/0.80    |
| C3, C4        |     2 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104KA01D |
| F1            |     1 | 4.7 F F EMI filter (3-terminal capacitor) Murata NFM21PC475B1A3D           |
| J1            |     1 | 6-pin right-angle male header                                              |

## MAX5825PMB1 Peripheral Module

## I 2 C Addressing Options

The  I 2 C  slave  address  for  the  IC  can  be  one  of  nine different  values,  depending  on  the  settings  on  jumpers JP1  and  JP2.  Table  3  lists  the  settings  of  those  jumpers and the corresponding values of the slave address A[3:0].  Refer  to  the  MAX5823/MAX5824/MAX5825  IC data sheet for more information.

## External Control Signals

The IC implements pins that allow asynchronously updating  of  all  DAC  channels  simultaneously  ( LDAC )  and simultaneously clearing all DAC channels to their default state  ( CLR ).  The CLR pin  is  only  available  through  the external J3 connector. The LDAC signal is available from either the Pmod connector (J1) or the external connector (J3). The default source for LDAC is the Pmod connector (J1). To control LDAC from the external connector (J3), modify the solder link on the back of the board (labeled LK1).  The  user  is  cautioned  to  ensure  that  only  one source for this signal is selected at any given time.

The J3 connector provides the DAC output voltages and the external control inputs. See Table 4.

## Reset State (M/ Z Pin)

The IC features a pin-selectable DAC reset state using the  M/ Z input.  Upon  a  power-on  reset,  all  CODE  and DAC data registers are reset to zero scale (M/ Z = GND) or midscale (M/ Z = VDD). The board is shipped with R11 installed  (0 I )  and  R10  not  installed,  which  sets  M/ Z to GND. To change to M/ Z = VDD, remove R11 and install a suitable pullup resistor for R10. Refer to the MAX5823/ MAX5824/MAX5825 IC data sheet for more information.

## Table 3. I 2 C Slave Address LSBs

| JP1 (ADDR1)   | JP2 (ADDR0)   |   A3 |   A2 |   A1 |   A0 |
|---------------|---------------|------|------|------|------|
| 1-2 (VDD)     | 1-2 (VDD)     |    1 |    1 |    1 |    1 |
| 1-2 (VDD)     | Open          |    1 |    1 |    1 |    0 |
| 1-2 (VDD)     | 2-3 (GND)     |    1 |    1 |    0 |    0 |
| Open          | 1-2 (VDD)     |    1 |    0 |    1 |    1 |
| Open          | Open          |    1 |    0 |    1 |    0 |
| Open          | 2-3 (GND)     |    1 |    0 |    0 |    0 |
| 2-3 (GND)     | 1-2 (VDD)     |    0 |    0 |    1 |    1 |
| 2-3 (GND)     | Open          |    0 |    0 |    1 |    0 |
| 2-3 (GND)     | 2-3 (GND)     |    0 |    0 |    0 |    0 |

<!-- image -->

## Software and FPGA Code

Example software and drivers are available that execute directly  without  modification  on  several  FPGA  development  boards  that  support  an  integrated  or  synthesized microprocessor. These boards include the Digilent Nexys  3,  Avnet  LX9,  and  Avnet  ZEDBoard,  although other platforms can be added over time. Maxim provides complete  Xilinx  ISE  projects  containing  HDL,  Platform Studio, and SDK projects. In addition, a synthesized bit stream,  ready  for  FPGA  download,  is  provided  for  the demonstration application.

The  software  project  (for  the  SDK)  contains  several source  files  intended  to  accelerate  customer  evaluation  and  design.  These  include  a  base  application (maximModules.c)  that  demonstrates  module  functionality  and  uses  an  API  interface  (maximDeviceSpecific Utilities.c)  to  set  and  access  Maxim  device  functions within a specific module.

The source code is written in standard ANSI C format, and all API documentation including theory/operation, register description,  and  function  prototypes  are  documented  in the API interface file (maximDeviceSpecificUtilities.h &amp; .c).

The  complete  software  kit  is  available  for  download  at www.maxim-ic.com . Quick  start  instructions  are  also available as a separate document.

## Table 4. Connector J3 (External Interface)

|   PIN | SIGNAL   | DESCRIPTION                             |
|-------|----------|-----------------------------------------|
|     1 | VDD      | Supply voltage                          |
|     2 | LDACEXT  | Active-low asynchronous DAC load input  |
|     3 | GND      | Ground                                  |
|     4 | CLR      | Active-low asynchronous DAC clear input |
|     5 | DAC7     | DAC channel 7 voltage output            |
|     6 | DAC6     | DAC channel 6 voltage output            |
|     7 | DAC5     | DAC channel 5 voltage output            |
|     8 | DAC4     | DAC channel 4 voltage output            |
|     9 | DAC3     | DAC channel 3 voltage output            |
|    10 | DAC2     | DAC channel 2 voltage output            |
|    11 | DAC1     | DAC channel 1 voltage output            |
|    12 | DAC0     | DAC channel 0 voltage output            |
|    13 | REF      | Reference voltage input/output          |
|    14 | GND      | Ground                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5825PMB1 Peripheral Module

<!-- image -->

Figure 1. MAX5825PMB11 Peripheral Module Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5825PMB1 Peripheral Module

<!-- image -->

Figure 2. MAX5825PMB11 Peripheral Module Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX5825PMB11 Peripheral Module PCB Layout-Component Side

<!-- image -->

Figure 4. MAX5825PMB11 Peripheral Module PCB Layout-Inner Layer 1 (Ground)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5825PMB1 Peripheral Module

<!-- image -->

Figure 5. MAX5825PMB11 Peripheral Module PCB Layout-Inner Layer 2 (Power)

<!-- image -->

Figure 6. MAX5825PMB11 Peripheral Module PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX5825PMB11 Peripheral Module Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART         | TYPE              |
|--------------|-------------------|
| MAX5825PMB1# | Peripheral Module |

# Denotes RoHS compliant.

## MAX5825PMB1 Peripheral Module

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8