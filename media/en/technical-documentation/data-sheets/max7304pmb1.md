<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX7304PMB1 Peripheral Module

## General Description

The  MAX7304PMB1  peripheral  module  provides  the necessary  hardware  to  interface  the  MAX7304  16-port GPIO  and  LED  driver  to  any  system  that  utilizes Pmod K -compatible  expansion  ports  configurable  for I 2 C  communication.  The  IC  features  16  GPIO  ports with  12  push-pull  GPIOs  and  four  open-drain  GPIOs configurable as PWM-controlled LED drivers. The device supports a 1.62V to 3.6V separate power supply for level translation.  Each  GPIO  can  be  programmed  to  one  of the two externally applied logic voltage levels. PORT12PORT15  can  also  be  configured  as  LED  drivers  that feature constant-current sinks and PWM intensity control with  the  internal  oscillator.  The  maximum  constantcurrent level for each open-drain LED port is 20mA. The intensity of the LED on each open-drain port can be individually adjusted through a 256-step PWM control. The port also features LED fading.

Refer to the MAX7304 IC data sheet for detailed information regarding operation of the IC.

Ordering Information appears at end of data sheet.

## Features

- S Four LED Driver Pins on PORT12-PORT15
- S 256-Step PWM Individual LED Intensity-Control Accuracy
- S Individual LED Blink Rates and Common LED Fade-In/Out Rates
- S Individually Programmable GPIOs to Two Logic Levels
- S 8-Channel Individual Programmable Level Translators
- S Configurable Edge-Triggered Port Interrupt
- S Jumper-Selectable I 2 C Address Setting
- S 6-Pin Pmod-Compatible Connector (I 2 C)
- S Secondary Header Allows Daisy-Chaining of Additional Modules on I 2 C Bus
- S Example Software Written in C for Portability
- S RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

## MAX7304PMB1 Peripheral Module

<!-- image -->

Pmod is a trademark of Digilent Inc.

## MAX7304PMB1 Peripheral Module

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                    |
|---------------|-------|--------------------------------------------------------------------------------|
| JP1           |     1 | 6-pin (2 x 3) straight male header                                             |
| LED1-LED4     |     4 | Red LEDs (1206)                                                                |
| R1, R2, R3    |     3 | 150 I Q 5% resistors (0603)                                                    |
| R4, R5        |     2 | 4.7k I Q 5% resistors (0603)                                                   |
| R6            |     1 | 10k I Q 5% resistor (0603)                                                     |
| U1            |     1 | 16-port, level-translating GPIO and LED driver (24 TQFN-EP*) Maxim MAX7304ETG+ |
| -             |     1 | Shorting jumper                                                                |
| -             |     1 | PCB: EPCB7304PM1                                                               |

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C1, C3        |     2 | 1 F F Q 10%, 10V X7R ceramic capacitors (0603) TDK C1608X7R1A105K         |
| C2            |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C104KA01D |
| J1            |     1 | 6-pin right-angle male header                                             |
| J2            |     1 | 18-pin (2 x 9) straight male header                                       |
| J3            |     1 | 8-pin (2 x 4) straight male header                                        |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX7304PMB1 when contacting these component suppliers.

## Detailed Description

## UART Interface

The MAX7304PMB1 peripheral module can interface to the host by plugging directly into a Pmod-compatible port (configured for I 2 C) through connector J1. See Table 1.

The J2 connector provides the connection to the pushpull and open-drain outputs. See Table 2.

The  J3  connector  allows  the  module  to  be  connected through  a  daisy-chain  from  another  I 2 C  module  and/or provide I 2 C and power connections to other I 2 C modules on the same bus. See Table 3.

Jumper JP1 provides the ability to set the I 2 C address. This is accomplished by connecting the AD0 pin to GND, VCC, SDA, or SCL. See Table 4.

## Software and FPGA Code

Example software and drivers are available that execute directly  without  modification  on  several  FPGA  development  boards  that  support  an  integrated  or  synthesized microprocessor. These boards include the Digilent Nexys  3,  Avnet  LX9,  and  Avnet  ZEDBoard,  although other platforms can be added over time. Maxim provides complete  Xilinx  ISE  projects  containing  HDL,  Platform Studio, and SDK projects. In addition, a synthesized bit stream,  ready  for  FPGA  download,  is  provided  for  the demonstration application.

## Table 1. Connector J1 (I 2 C Communication)

|   PIN | SIGNAL   | DESCRIPTION        |
|-------|----------|--------------------|
|     1 | N.C.     | Not connected      |
|     2 | INT      | Interrupt          |
|     3 | SCL      | I 2 C serial clock |
|     4 | SDA      | I 2 C serial data  |
|     5 | GND      | Ground             |
|     6 | VCC      | Power supply       |

The  software  project  (for  the  SDK)  contains  several source  files  intended  to  accelerate  customer  evaluation  and  design.  These  include  a  base  application (maximModules.c)  that  demonstrates  module  functionality  and  uses  an  API  interface  (maximDeviceSpecific Utilities.c)  to  set  and  access  Maxim  device  functions within a specific module.

The source code is written in standard ANSI C format, and all API documentation including theory/operation, register description,  and  function  prototypes  are  documented  in the API interface file (maximDeviceSpecificUtilities.h &amp; .c).

The  complete  software  kit  is  available  for  download  at www.maximintegrated.com . Quick start instructions are also available as a separate document.

## Table 2. Connector J2

|   PIN | SIGNAL   | DESCRIPTION                                                                                                                                          |
|-------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | P0       | Push-pull output 0                                                                                                                                   |
|     2 | P1       | Push-pull output 1                                                                                                                                   |
|     3 | P2       | Push-pull output 2                                                                                                                                   |
|     4 | P3       | Push-pull output 3                                                                                                                                   |
|     5 | P4       | Push-pull output 4                                                                                                                                   |
|     6 | P5       | Push-pull output 5                                                                                                                                   |
|     7 | P6       | Push-pull output 6                                                                                                                                   |
|     8 | P7       | Push-pull output 7                                                                                                                                   |
|     9 | P8       | Push-pull output 8                                                                                                                                   |
|    10 | P9       | Push-pull output 9                                                                                                                                   |
|    11 | P10      | Push-pull output 10                                                                                                                                  |
|    12 | P11      | Push-pull output 11                                                                                                                                  |
|    13 | P12      | Output 12 (open-drain output 1)                                                                                                                      |
|    14 | P13      | Output 13 (open-drain output 2)                                                                                                                      |
|    15 | P14      | Output 14 (open-drain output 3)                                                                                                                      |
|    16 | P15      | Output 15 (open-drain output 4)                                                                                                                      |
|    17 | VLA      | Optional: User-applied VCC (refer to the MAX7304 IC data sheet for min/ max limits before connecting external supply). If unused, leave unconnected. |
|    18 | GND      | Ground                                                                                                                                               |

## MAX7304PMB1 Peripheral Module

## Table 3.  Connector J3 (Daisy-Chain I 2 C)

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

## Table 4.  Jumper JP1

| PIN   | SIGNAL    | DESCRIPTION                                                       |
|-------|-----------|-------------------------------------------------------------------|
| -     | GND (AD0) | I 2 C address = 8'b0111 00 0x (x is 1 for read, x is 0 for write) |
| 1-2   | VCC (AD0) | I 2 C address = 8'b0111 01 0x (x is 1 for read, x is 0 for write) |
| 3-4   | SDA (AD0) | I 2 C address = 8'b0111 10 0x (x is 1 for read, x is 0 for write) |
| 5-6   | SCL (AD0) | I 2 C address = 8'b0111 11 0x (x is 1 for read, x is 0 for write) |

## MAX7304PMB1 Peripheral Module

Figure 1. MAX7304PMB1 Peripheral Module Schematic

<!-- image -->

## MAX7304PMB1 Peripheral Module

Figure 2. MAX7304PMB1 Peripheral Module Component Placement Guide-Component Side

<!-- image -->

<!-- image -->

Figure 3. MAX7304PMB1 Peripheral Module PCB LayoutComponent Side

<!-- image -->

Figure 4. MAX7304PMB1 Peripheral Module PCB LayoutInner Layer 1 (Ground)

## MAX7304PMB1 Peripheral Module

<!-- image -->

Figure 5. MAX7304PMB1 Peripheral Module PCB LayoutInner Layer 2 (Power)

<!-- image -->

Figure 6. MAX7304PMB1 Peripheral Module PCB LayoutSolder Side

<!-- image -->

Figure 7. MAX7304PMB1 Peripheral Module Component Placement Guide-Solder Side

## Ordering Information

| PART         | TYPE              |
|--------------|-------------------|
| MAX7304PMB1# | Peripheral Module |

# Denotes RoHS compliant.

## MAX7304PMB1 Peripheral Module

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/12            | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.