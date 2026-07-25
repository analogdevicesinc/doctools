<!-- lastmod 2022-08-03 -->
<!-- image -->

## DS3231MPMB1 Peripheral Module

## General Description

The DS3231MPMB1 peripheral module provides the necessary hardware to interface the DS3231M real-time clock (RTC)  to  any  system  that  utilizes  Pmod K -compatible expansion  ports  configurable  for  I 2 C  communication. The  IC  is  a  low-cost  and  extremely  accurate  I²C  RTC. The  device  incorporates  a  battery  input  and  maintains accurate timekeeping when main power to the device is interrupted.  The  integration  of  the  microelectromechanical  systems  (MEMS)  resonator  enhances  the  long-term accuracy of the device and reduces the piece-part count in  a  manufacturing  line.  The  device  is  available  in  the same footprint as the popular DS3231 RTC.

Refer to the DS3231M IC data sheet for detailed information regarding operation of the IC.

## Features

- S High Accuracy Time-of-Day and Date (±5ppm) from -40°C to +85°C
- S 32.768kHz Square-Wave Output
- S Digital Temp Sensor with ±3 N C Accuracy
- S 6-Pin Pmod-Compatible Connector (I 2 C)
- S Example Software Written in C for Portability
- S Secondary Header Allows Daisy-Chaining of Additional Modules on the I 2 C Bus
- S RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## DS3231MPMB1 Peripheral Module

<!-- image -->

Pmod is a trademark of Digilent Inc.

## DS3231MPMB1 Peripheral Module

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                           |
|---------------|-------|-------------------------------------------------------|
| J1            |     1 | 6-pin right-angle male header                         |
| J2            |     1 | 8-pin (2 x 4) straight male header                    |
| R1-R4         |     4 | 150 I Q 5% resistors (0603)                           |
| R5-R8         |     4 | 4.7k I Q 5% resistors (0603)                          |
| U1            |     1 | Q 5ppm, I 2 C real-time clock (8 SO) Maxim MAX3231MZ+ |
| -             |     1 | PCB: EPCB3231PM1                                      |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the DS3231MPMB1 when contacting these component suppliers.

## Detailed Description

## I 2 C Interface

The DS3231MPMB1 peripheral module can interface to the  host  in  one  of  two  ways.  It  can  plug  directly  into  a Pmod-compatible port (configured for I 2 C) through connector J1, or in this case, other I 2 C boards can attach to the same I 2 C bus through connector J2.

## I 2 C Interface (Daisy-Chaining Modules)

Alternatively, the peripheral module can connect to other I 2 C-based  Pmod  modules  using  a  4-conductor  ribbon cable connecting to the J2 connector. In this situation, pins 1-4 and 5-8 of J2 provide two connections to the I 2 C bus, allowing the module to be inserted into an I 2 C bus daisy-chain.

Connector  J1  provides  connection  of  the  module  to the  Pmod host. The pin functions and pin assignments adhere to the Pmod standard recommended by Digilent. See Table 1.

The  J2  connector  allows  the  module  to  be  connected through  a  daisy-chain  from  another  I 2 C  module  and/or provide I 2 C and power connections to other I 2 C modules on the same bus. See Table 2.

## Battery Backup

The  peripheral  module  contains  a  battery  holder  for  a lithium coin cell battery. The battery allows the IC to retain settings and time in the event of main power loss.

Note: A battery MUST be present for the DS3231MPMB1 to operate properly.

## Table 1. Connector J1 (I 2 C Communication)

|   PIN | SIGNAL   | DESCRIPTION                                                                                                                                                                                                                  |
|-------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | RST      | Active-low reset. This pin is an open- drain input/output. It is pulled low if VCC falls below threshold. This output is combined with a debounced pushbutton input function that can be activated to cause a reset request. |
|     2 | INT /SQW | Active-low interrupt or 1Hz square-wave output. Interrupt function is activated when alarm occurs.                                                                                                                           |
|     3 | SCL      | I 2 C serial clock                                                                                                                                                                                                           |
|     4 | SDA      | I 2 C serial data                                                                                                                                                                                                            |
|     5 | GND      | Ground                                                                                                                                                                                                                       |
|     6 | VCC      | Power supply                                                                                                                                                                                                                 |

## Table 2. Connector J2 (I 2 C Expansion)

|   PIN | SIGNAL   | DESCRIPTION                               |
|-------|----------|-------------------------------------------|
|     1 | SCL      | I 2 C serial clock                        |
|     2 | SDA      | I 2 C serial data                         |
|     3 | GND      | Ground                                    |
|     4 | VCC      | Power supply                              |
|     5 | SCL      | 2-wire serial clock (same as pin 1 above) |
|     6 | SDA      | 2-wire serial data (same as pin 2 above)  |
|     7 | GND      | Ground                                    |
|     8 | VCC      | Power supply                              |

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| BAT1          |     1 | Battery holder Memory Protection Devices BH401                            |
| C1            |     1 | 1 F F Q 10%, 10V X7R ceramic capacitor (0603) TDK C1608X7R1A105K          |
| C2            |     1 | 0.1 F F Q 10%, 10V X74 ceramic capacitor (0603) Murata GRM188R71C104KA01D |

## DS3231MPMB1 Periphal Module

## Software and FPGA Code

Example software and drivers are available that execute directly  without  modification  on  several  FPGA  development  boards  tha  support  an  integrated  or  synthesized microprocessor. These boards include the Digilent Nexys  3,  Avnet  LX9,  and  Avnet  ZEDBoard,  although other platforms can be added over time. Maxim provides complete  Xilinx  ISE  projects  containing  HDL,  Platform Studio, and SDK projects. In addition, a synthesized bit stream,  ready  for  FPGA  download,  is  provided  for  the demonstration application.

The  software  project  (for  the  SDK)  contains  several source  files  intended  to  accelerate  customer  evalu- ation  and  design.  These  include  a  base  application (maximModules.c)  that  demonstrates  module  functionality  and  uses  an  API  interface  (maximDeviceSpecific Utilities.c)  to  set  and  access  Maxim  device  functions within a specific module.

The source code is written in standard ANSI C format, and all  API documentation including theory/operation, register description, and function prototypes are documented in  the  API  interface  file  (maximDeviceSpecificUtilities.h &amp; .c).

The  complete  software  kit  is  available  for  download  at www.maximintegrated.com . Quick start instructions are also available as a separate document.

Figure 1. DS3231MPMB1 Peripheral Module Schematic

<!-- image -->

## DS3231MPMB1 Peripheral Module

<!-- image -->

Figure 2. DS3231MPMB1 Peripheral Module Component Placement Guide-Component Side

Figure 3. DS3231MPMB1 Peripheral Module PCB Layout-Component Side

<!-- image -->

Figure 4. DS3231MPMB1 Peripheral Module PCB Layout-Inner Layer 1 (Power)

<!-- image -->

## DS3231MPMB1 Peripheral Module

<!-- image -->

Figure 5. DS3231MPMB1 Peripheral Module PCB Layout-Inner Layer 2 (Ground)

Figure 6. DS3231MPMB1 Peripheral Module PCB Layout-Solder Side

<!-- image -->

Figure 7. DS3231MPMB1 Peripheral Module Component Placement Guide-Solder Side

<!-- image -->

## Ordering Information

| PART         | TYPE              |
|--------------|-------------------|
| DS3231MPMB1# | Peripheral Module |

# Denotes RoHS compliant.

## DS3231MPMB1 Peripheral Module

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/12            | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.