<!-- lastmod 2022-08-04 -->
<!-- image -->

Evaluates: MAX22007

## General Description

The  MAX22007  Peripheral  Module  (MAX22007PMB#) provides  the  hardware  to  evaluate  the  MAX22007  fourchannel  12-bit  configurable  analog  output.  Refer  to  the MAX22007 IC data sheet for detailed information regard -ing operation of the IC.

This module can be used in various ways, but it is primarily configured through SPI. Analog Devices sells low-cost USB2PMB2# and USB2GPIO# adapter boards that use the  Munich  GUI  software  for  communication  through  a USB cable. The adapter boards are not included with the MAX22007PMB# board. Alternatively, any microcontroller or  FPGA  with  a  12-pin  Pmod™-compatible  connector can be used with the SPI connection from the Pmod con -nector J1. Another option for the user is to wire-wrap a temporary connection from their system to the pins on the connector J1. For these later two options, the user needs to write their own control software. The board dimensions are 3.5' x 0.8' (8.69cm x 2.18cm).

Ordering Information appears at end of data sheet.

## MAX22007PMB# Photo

<!-- image -->

Pmod is a registered trademark of Digilent Inc.

## MAX22007 Peripheral Module

## Features

- Easy Evaluation of the MAX22007 Four-Channel Analog Output
- Two Accessible Modes:
- Analog Output-Voltage Mode (0 to +10V)
- Analog Output-Current Mode (0 to +20mA)
- Voltage up to +12.5V Overrange for Loads from 1kΩ to 1MΩ
- Current up to +24mA Overrange for Loads from 0 to 500Ω
- Automatic Load Impedance Detection
- No External Supply Needed
- High-Voltage Supply Rail Generated from USB Supply
- Works with USB2PMB2# and USB2GPIO# Adapters and Munich GUI Software
- Surge Protection up to ±1kV per IEC 61000-4-5
- ESD Protection up to ±6kV (Contact), ±8kV (Air-Gap) per IEC 61000-4-2
- Proven Design and PCB Layout
- RoHS Compliance

319-100880; Rev 0; 2/22

One  Analog  Way,  Wilmington,  MA  0187  U.S.A.    |      Tel:  781.329.4700      |      ©  2021  Analog  Devices,  Inc.  All  rights  reserved. © 2021 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX22007 Peripheral Module

## Quick Start

## Required Equipment

- MAX22007PMB# peripheral module
- USB2PMB2# or USB2GPIO# adapter board
- Windows 10 PC with a spare USB port
- Digital multimeter
- Micro-USB cable
- Munich GUI v2.24 or higher

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The MAX22007PMB board is fully assembled and tested. Follow  the  steps  below  to  verify  board  operation:  If  the USB2PMB2# or USB2GPIO# adapter is used, the user can  download  software  by  following  the  steps  below  to get started. In this description, the USB2PMB2# adapter is used:

- 1) Visit www.maximintegrated.com/ to download the latest version of the Munich GUI software, version 2.24 or later, Munich\_GUISetupV2.24.ZIP .
- 2) Save the software to a temporary folder. Unzip the .ZIP file and double-click the .EXE file to run the installer. A message box asking, Do you want to allow the following program to make changes to this computer? may appear. If so, click Yes .

Evaluates: MAX22007

- 3) The installer includes the drivers for the hardware and software. Follow the instructions on the installer and once complete, click Finish . The default location of the software is in the program files directory.
- 4) Connect the MAX22007PMB# Pmod connector J1 to the connector on USB2PMB2# (see Figure 1).
- 5) Connect the USB2PMB2# to the PC with the MicroUSB cable. The MAX22007PMB# is powered by the USB cable.
- 6) Once the hardware is ready to use, launch the Munich software. Go to the Device tab and click on Industrial Analog . Then select the MAX22007PMB - 4 Channel Building Automation Analog Out from the device list.
- 7) Under the USB2PMB Adapter module, select Scan Adapters and select the PMODxxxxxxA where the 'xxxxxx' represents a 6-digit serial number. Click Connect . The Status Bar on the bottom left of the GUI should read 'PMODxxxxxxA Connected (Munich 2)' . See Figure 3 for an example of the Munich GUI during operation.
- 8) On any of the four output channels, select '0-20mA' for current mode operation, or '0-10V' for voltage mode operation. A Blue LED turns on for Voltage Mode, and a green LED turns on for Current Mode.
- 9) Configure the Channel for the desired output voltage or current or observe the measured load impedance if using the automatic load detection via the Auto button.

Figure 1. MAX22007PMB# Connected to a USB2PMB2# Adapter

<!-- image -->

## MAX22007 Peripheral Module

## Detailed Description of Hardware

The  MAX22007PMB#  provides  everything  needed  to evaluate  the  MAX22007  four-channel  analog  output.  It can be programmed via SPI through the onboard Pmod connector, and it can be set into Voltage Mode (0 to 10V) or Current Mode (0 to 20mA). The Pmod connector can also  be  plugged  into  a  standard  Pmod  header  on  an FPGA or microcontroller board for configuration of the IC over SPI.

## Power Supplies

The  MAX22007PMB#  comes  with  an  onboard  Boost Converter  circuit  based  on  the  MAX17291ATA+  (U1) to  generate  the  high-voltage  rail  HVDD  (14V)  for  the MAX22007 from the 3.3V supply passed into the Pmod connector,  so  no  external  24V  supply  is  required.  It also  has  an  onboard  negative  charge  pump  using  the MAX881REUB+  (U3).  This  applies  the  -2V  HVSS  rail to allow the MAX22007 to bring its linear range down to zero.

## Surge Protection

Suppressor  diodes  D2,  D4,  D6,  and  D8  are  connected between the outputs and GND to clamp ±1kV surge tran -sients on the outputs as per IEC 61000-4-5.

## Pmod-Style Connector

The  MAX22007PMB#  can  plug  directly  into  a  Pmodcompatible port through connector J1. The user can plug the  Pmod  connector  into  a  compatible  USB2PMB2# adapter  or  utilize  the  SPI  connection  from  the  Pmod  to a microcontroller or FPGA. For more information on the interface  and  control,  refer  to  the  MAX22007  IC  data sheet. See the Pmod pinout in Figure 2 to assist with wiring an SPI connection.

Figure 2. Pmod Pinout for the MAX22007PMB#

<!-- image -->

## SPI Interface

The MAX22007PMB# uses an SPI-compatible interface. Without a USB2PMB2# adapter, the user must configure the microcontroller or FPGA to match the MAX22007PMB# SPI signals. For more information about the SPI features of the MAX22007, refer to the MAX22007 IC data sheet.

## Detailed Description of Software

## Connect to Hardware

The  Munich  GUI Device menu  has  options  to  search for and connect to different peripheral modules. Use the Scan  Adapters option  to  search  for  the  USB2PMB2# modules  connected  to  the  PC.  If  modules  are  found, the  serial  number  of  the  modules  are  listed  under  the 'USB2PMB Adapter' dropdown  box.  Select  the  serial number in the list to connect the software to communicate with  that  module,  and  then  click  the 'Connect' button. The software can only communicate to one module at a time.

## Voltage Output

Each output channel ( CH1-CH4 ) is capable of outputting 0  to  10V  (20%  overrange)  in  voltage  mode,  depending on how it is configured by the GUI software. A Blue LED is  located  next  to  each  channel  and  turns  on  when  the channel is configured for ' 0-10V ' output. The MAX22007 is also capable of up to 12.5V over-ranging for loads from 1kΩ to 1MΩ.

## Current Output

Each output channel ( CH1-CH4 ) is capable of outputting 0 to 20mA (20% overrange) in current mode, depending on  how  it  is  configured  by  the  GUI  software.  A  Green LED is located next to each channel and turns on when the  channel  is  configured  for  ' 0-20mA '  output.  The MAX22007 is also capable of up to 24mA overranging for loads up to 500Ω.

## Automatic Load Detection

Each channel is capable of automatically detecting and estimating a load impedance and entering voltage mode or  current  mode  accordingly.  This  feature  can  be  used by  clicking  the Auto button  in  the  GUI  for  the  desired channel. The  channel  selects  current  mode  for  loads  &lt; 500Ω, and it selects voltage mode for loads &gt; 500Ω. The green LED next to the channel turns on to indicate cur -rent mode, or the blue LED next to the channel turns on to indicate voltage mode.

## MAX22007 Peripheral Module

## Munich GUI Software

Figure 3. Munich GUI Software

<!-- image -->

## Factory Calibration

The MAX22007 is factory-calibrated to ensure accurate output given valid input data. The measurements shown in  Table  1 are  some  example  measurements  taken in  the  MAX22007PMB#'s  linear  voltage  output  range, from  0  to  10V.  The  values  were  configured  by  Munich GUI  and  measured  using  a  6.5-digit  digital  multimeter (HP34401A). The  data  meet  the  specifications  given  in the MAX22007 data sheet for Gain and Offset Error within ±0.2% at +25°C.

## Ordering Information

| PART         | TYPE              |
|--------------|-------------------|
| MAX22007PMB# | Peripheral Module |

# Denotes RoHS compliance.

Evaluates: MAX22007

## Table 1. Measured Voltages from Munich GUI and Factory-Calibrated MAX22007PMB#

|   GUI VOLTAGE (V) |   MEASURED VOLTAGE (V) |
|-------------------|------------------------|
|             0.000 |                0.00165 |
|             2.000 |                 1.9990 |
|             4.000 |                 3.9999 |
|             6.000 |                 6.0008 |
|             8.000 |                 8.0054 |
|            10.000 |                10.0065 |
|            10.500 |                10.5060 |

## MAX22007 Peripheral Module

## MAX22007PMB# Bill of Materials

| ITEM   | REF_DES                            |   QTY | MFG PART #                                                                                               | MANUFACTURER                                      | VALUE             | DESCRIPTION                                                                                                                      | COMMENTS   |
|--------|------------------------------------|-------|----------------------------------------------------------------------------------------------------------|---------------------------------------------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C1, C2                             |     2 | C1210C156K8PAC                                                                                           | KEMET                                             | 15UF              | CAP; SMT (1210); 15UF; 10%; 10V; X5R; CERAMIC                                                                                    |            |
| 2      | C3-C5                              |     3 | GRM32ER71J106MA12                                                                                        | MURATA                                            | 10UF              | CAP; SMT (1210); 10UF; 20%; 63V; X7R; NO DATA                                                                                    |            |
| 3      | C6, C8, C10, C12                   |     4 | C1005C0G1H471J050BA                                                                                      | TDK                                               | 470PF             | CAP; SMT (0402); 470PF; 5%; 50V; C0G; CERAMIC                                                                                    |            |
| 4      | C7, C9, C11, C13                   |     4 | C0402C240J5GAC                                                                                           | KEMET                                             | 24PF              | CAP; SMT (0402); 24PF; 5%; 50V; C0G; CERAMIC                                                                                     |            |
| 5      | C14                                |     1 | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB                             | MURATA;TDK;TAIYO YUDEN;TDK                        | 0.1UF             | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                                   |            |
| 6      | C15                                |     1 | GRM188R6YA106MA73                                                                                        | MURATA                                            | 10UF              | CAP; SMT (0603); 10UF; 20%; 35V; X5R; CERAMIC                                                                                    |            |
| 7      | C16-C20, C22                       |     6 | C0402C105K8PAC; CC0402KRX5R6BB105                                                                        | KEMET;YAGEO                                       | 1UF               | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                                                     |            |
| 8      | C21                                |     1 | C0603C475K8PAC; LMK107BJ475KA; CGB3B1X5R1A475K; C1608X5R1A475K080AC; CL10A475KP8NNN; C1608X5R1A475K080AE | KEMET;TAIYO YUDEN;TDK;TDK;SAMSUNG ELECTRONICS;TDK | 4.7UF             | CAP; SMT (0603); 4.7UF; 10%; 10V; X5R; CERAMIC                                                                                   |            |
| 9      | CONN1                              |     1 | 250-408                                                                                                  | WAGO                                              | 250-408           | CONNECTOR; FEMALE; THROUGH HOLE; COMPACT TERMINAL STRIP WITH PUSH BUTTON; STRAIGHT; 8PINS                                        |            |
| 10     | D1, D3, D5, D7                     |     4 | BAT46WJ                                                                                                  | NXP                                               | BAT46WJ,115       | DIODE; SCH; SMT (SOD-323F); PIV=100V; IF=0.25A                                                                                   |            |
| 11     | D2, D4, D6, D8                     |     4 | SMM4F33A                                                                                                 | ST MICROELECTRONICS                               | 33V               | DIODE; TVS; SMT (DO-216AA); VRM=33V; IPP=7A                                                                                      |            |
| 12     | D13-D16                            |     4 | APT1608LVBC/D                                                                                            | KINGBRIGHT                                        | APT1608LVBC/D     | DIODE; LED; BLUE WATER CLEAR; BLUE; SMT (0603); VF=2.65V; IF=0.002A                                                              |            |
| 13     | D17-D20                            |     4 | APT1608LZGCK                                                                                             | KINGBRIGHT                                        | APT1608LZGCK      | DIODE; LED; GREEN WATER CLEAR; GREEN; SMT (0603); VF=2.65V; IF=0.002A                                                            |            |
| 14     | J1                                 |     1 | TSW-106-08-S-D-RA                                                                                        | SAMTEC                                            | TSW-106-08-S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS;                                                                        |            |
| 15     | L1                                 |     1 | ASPI-1040HI-100M                                                                                         | ABRACON                                           | 10UH              | INDUCTOR; SMT; WIREWOUND CHIP; 10UH; TOL=+/- 20%; 7.5A                                                                           |            |
| 16     | R1                                 |     1 | CRCW06034023FK; ERJ-3EKF4023                                                                             | VISHAY;PANASONIC                                  | 402K              | RES; SMT (0603); 402K; 1%; +/-100PPM/DEGC; 0.1000W                                                                               |            |
| 17     | R2                                 |     1 | CRCW06034M02FK                                                                                           | VISHAY                                            | 4.02M             | RES; SMT (0603); 4.02M; 1%; +/-100PPM/DEGC; 0.1000W                                                                              |            |
| 18     | R3, R7, R11, R15                   |     4 | ERJ-2RKF3902X; CRCW040239K0FK                                                                            | PANASONIC;VISHAY DALE                             | 39K               | RES; SMT (0402); 39K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                |            |
| 19     | R4, R5, R8, R9, R12, R13, R16, R17 |     8 | CRCW04024K99FK                                                                                           | VISHAY DALE                                       | 4.99K             | RES; SMT (0402); 4.99K; 1%; +/-100PPM/DEGC; 0.0630W                                                                              |            |
| 20     | R6, R10, R14, R18                  |     4 | ERJ-2RKF49R9                                                                                             | PANASONIC                                         |                   | 49.9 RES; SMT (0402); 49.9; 1%; +/-100PPM/DEGC; 0.1000W                                                                          |            |
| 21     | R19-R22                            |     4 | CRCW0402750RFK                                                                                           | VISHAY DALE                                       |                   | 750 RES; SMT (0402); 750; 1%; +/-100PPM/DEGC; 0.0630W                                                                            |            |
| 22     | R23-R26                            |     4 | CRCW0402910RFK                                                                                           | VISHAY                                            |                   | 910 RES; SMT (0402); 910; 1%; +/-100PPM/DEGK; 0.0630W                                                                            |            |
| 23     | U1                                 |     1 | MAX17291ATA+                                                                                             | MAXIM                                             | MAX17291ATA+      | EVKIT PART-IC; MAX17291ATA+; HIGH-VOLTAGE MICROPOWER BOOST CONVERTER; PACKAGE OUTLINE: 21-0168; PACKAGE CODE: T822+3C; TDFN8- EP |            |
| 24     | U2                                 |     1 | MAX22007ETN+                                                                                             | MAXIM                                             | MAX22007ETN+      | IC; DAC; FOUR-CHANNEL 12-BIT CONFIGURABLE ANALOG OUTPUT WITH INTEGRATED VOLTAGE REFERENCE; TQFN56-EP                             |            |
| 25     | U3                                 |     1 | MAX881REUB+                                                                                              | MAXIM                                             | MAX881REUB+       | IC; ASW; LOW-NOISE BIAS SUPPLY WITH POWER-OK FOR GAASFET PA; UMAX10                                                              |            |
| 26     | PCB                                |     1 | MAX22007PMB_APPS_B                                                                                       | MAXIM                                             |                   | -                                                                                                                                |            |
| TOTAL  |                                    |    71 |                                                                                                          |                                                   | PCB               | PCB:MAX22007PMB_APPS_B                                                                                                           |            |

Evaluates: MAX22007

## MAX22007 Peripheral Module

## MAX22007PMB# Schematic

<!-- image -->

Evaluates: MAX22007

## MAX22007 Peripheral Module

## MAX22007PMB# PCB Layouts

<!-- image -->

MAX22007PMB# PCB Layout-Top Silkscreen

MAX22007PMB# PCB Layout-Top

<!-- image -->

MAX22007PMB# PCB Layout-Layer 2

<!-- image -->

Evaluates: MAX22007

## MAX22007 Peripheral Module

## MAX22007PMB# PCB Layouts (continued)

<!-- image -->

MAX22007PMB# PCB Layout-Layer 3

MAX22007PMB# PCB Layout-Bottom

<!-- image -->

MAX22007PMB# PCB Layout-Bottom Silkscreen

<!-- image -->

Evaluates: MAX22007

## MAX22007 Peripheral Module

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

Evaluates: MAX22007