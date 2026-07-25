<!-- lastmod 2022-08-02 -->
## MAX14912 Peripheral Module

## General Description

The  MAX14912  peripheral  module  (MAX14912PMB) provides  the  hardware  to  evaluate  the  MAX14912  octal digital output driver. Refer to the MAX14912 IC data sheet for detailed information regarding operation of the IC.

The  module  can  be  used  in  various  ways;  Maxim  sells a  low-cost  USB2PMB1#,  USB2PMB2#,  or  USB2GPIO# adapter  board  that  uses  the  Munich  GUI  software  for communication through a USB cable. This is not included with this board. Alternatively, any microcontroller or FPGA with a 12-pin Pmod™-compatible connector can be used. Another option for the user is to wire-wrap a temporary connection from their system to the pins on connector X1.

The  Pmod  PCB  dimension  is  just  50mm  long  x  20mm wide,  with  the  width  determined  by  the  size  of  the  X3 connector.

## Contents

- MAX14912PMB# with the MAX14912

## MAX14912PMB

<!-- image -->

Pmod is a trademark of Digilent Inc.

## Features

- Easy Evaluation of the MAX14912
- High speed Push-Pull Digital Output
- High Side Switch option featuring SafeDemagnetization for Safe Turn Off of Unlimited Inductance
- Works with USB2PMB2# or USB2GPIO# Adapter and Munich GUI Software

Ordering Information appears at end of data sheet.

Evaluates: MAX14912

<!-- image -->

## MAX14912 Peripheral Module

## System Diagram

Figure 1. MAX14912PMB# Block Diagram

<!-- image -->

## Quick Start Guide

## Required Equipment

- MAX14912PMB#
- 24V DC supply (&gt;3A recommended) - not supplied
- USB2PMB2# (or USB2GPIO#) adapter with Munich GUI and micro-USB Cable - not supplied
- Windows ®  7, Windows 8.1 or Windows 10 PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV system software. Text in bold and underline refers to items from the Windows operating system.

## Procedure

If the USB2PMB1 or USB2PMB2 or USB2GPIO adapter is  used,  the  user  can  download  software  by  following the  steps  below  to  get  started.  In  this  description  the USB2PMB2 adapter is used:

- 1)  Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  Munich\_GUI  software, version 2.19 or later, Munich\_GUISetupV2.19.ZIP.
- 2)  Save  the  software  to  a  temporary  folder.  Unzip  the .ZIP  file  and  double-click  the  .EXE  file  to  run  the installer. A message box asking Do you want to allow the  following  program  to  make  changes  to  this computer? might appear. If so, click Yes .
- 3)  The installer includes the drivers for the hardware and software.  Follow  the  instructions  on  the  installer  and once complete, click Finish . The default location of the software is in the program files directory.
- 4)  Connect the MAX14912PMB# Pmod connector X1 to the connector on USB2PMB2#.
- 5)  Connect a 24V DC supply to MAX14912PMB# using barrel connector X2.
- 6)  Connect  the  USB2PMB2# to  the  PC  with  the  microUSB cable. Windows should automatically recognize the  device  and  display  a  message  near  the System Icon menu indicating that the hardware is ready to use.
- 7)  Once  the  hardware  is  ready  to  use,  launch  the software.  The  status  bar  in  the  GUI  should  display Disconnected in the bottom right-hand corner. Go to the Device tab to select the MAX14912PMB#.
- 8)  Click the button for each switch to set the corresponding output  on  (pin  in  high)  or  off  (pin  in  Low)  to  set  the MAX14912  outputs.  Note  that  this  board  configures MAX14912 to be in Push-Pull mode. MAX14912 can be programmed, such that each individual output can be either Push-Pull or High-Side mode. In High-Side mode, the MAX14912 features fast and safe demag.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX14912

│

## MAX14912 Peripheral Module

## Detailed Description of Software

## Connect to Hardware

The Device menu has options to search and connect to the hardware. Use the Scan Adapters option to search for  the  USB2PMB2  modules  connected  to  the  PC.  If modules are found, the serial numbers of the modules are listed  in  the USB2PMB2s menu  item.  Select  the  serial number in the USB2PMB2s list  to  connect the software to communicate with that module. The software can only communicate to one module at a time only.

Evaluates: MAX14912

## Setting MAX14912 Outputs

Each of the eight outputs are set as on or off by moving the  corresponding  button  for  the  specific  channel.  Click the button for each switch to set the corresponding output on (pin in high) or off (pin in low) to set the MAX14912 outputs. When the output is on, the Green LED for that output is illuminated. If there is a fault, such as open load or undervoltage, the RED LED for that output is illuminated.

Figure 2. MAX14912PMB# connected to USB2PMB2#

<!-- image -->

Figure 3. MAX14912PMB# Software (Munich GUI Tab)

<!-- image -->

│

## Detailed Description of Hardware

The MAX14912PMB hardware provides everything needed to evaluate the MAX14912 using the SPI serial interface, and  includes the MAX14912,  a  terminal  for the 8 external  loads,  and  a  24V  DC  power  connector.  An optional USB2PMB2 module can be used with the Munich GUI to provide the USB-to-MAX14912 interface to control the MAX14912. The USB2PMB2# adapter provide a 3.3V input from the USB interface providing V L  to MAX14912. Note an external 24V DC supply is required even if used with the USB2PMB2# and a USB cable.

## Pmod Style Connector

The  MAX14912PMB#  can  plug  directly  into  a  Pmodcompatible port through X1. Note the pin definitions are SPI,  and  the  user  must  configure  the  microcontroller  or FPGA to match MAX14912 signals. For more information on  the  interface  and  control,  refer  to  the  MAX41912  IC data  sheet.  See MAX14912PMB  Schematic for  the  X1 pinout.

## Ordering Information

| PART         | TYPE              |
|--------------|-------------------|
| MAX14912PMB# | Peripheral Module |

#Denotes RoHS compliant.

## External Supply

An external 24V DC supply is required to be connected to X2. The rating of this supply must be aligned to the load connected to X3.

## LEDs

The  4  x  4  LED  driver  crossbar  matrix  offers  a  pinoptimized configuration for driving 16 LEDs. Per-channel output  status  and  the  fault  conditions  are  indicated  by individual LEDs, 8 Green LEDs for status and 8 Red LEDs for faults. If a FAULT LED is turned on for an output, the corresponding  STATUS  LED  is  always  turned  off.  This mitigates false information about the status of the affected OUT\_ pin.

## External Loads

An  output  connector  is  provided  for  each  output  along with a GROUND signal. See MAX14912PMB Schematic for the X3 pinout.

│

Evaluates: MAX14912

## MAX14912 Peripheral Module

## MAX14912PMB EV Kit Bill of Materials

| 10UF CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S 1.0UF CAPACITOR; SMT (0805); CERAMIC; 1UF; 35V; TOL=10%; MODEL=GMK SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO   | +125 DEGC; TC=X7S; AUTO CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22UF; 50V; TOL=20%; MODEL=Y5V;   | TG=-55 DEGC TO +125 DEGC; TC=+ CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 100V; TOL=5%; MODEL=MULTILAYER CERAMIC CHIP CAPACITOR; TC=NPO DIODE; LED; SML-P1 SERIES; ULTRA COMPACT HIGH BRIGHTNESS LED; GREEN;   | SMT (0402); VF=2.2V; IF=0.02A DIODE; LED; SML-P1 SERIES; ULTRA COMPACT HIGH BRIGHTNESS LED; RED; SMT (0402); VF=2V; IF=0.02A   | IC; SWTC; OCTAL HIGH-SPEED; HIGH-SIDE SWITCH/PUSH-PULL DRIVER; EP   | 470 RESISTOR, 0603, 470 OHM, 1%, 100PPM, 0.10W, THICK FILM   | CONNECTOR; THROUGH HOLE; POST TERMINAL STRIP ASSEMBLY; RIGHT ANGLE; 12PINS; NOTE: ALTERNATE PIN NUMBERING CONNECTOR; MALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65 DEGC TO +125 DEGC   | PCB:MAX14912PMB_DEMO_B DESCRIPTION                  | DESCRIPTION BOX;SMALL BROWN 9 3/16X7X1 1/4 - PACKOUT ESD BAG;BAG;STATIC SHIELD ZIP 4inX6in;W/ESD LOGO - PACKOUT PINK FOAM;FOAM;ANTI-STATIC PE 12inX12inX5MM - PACKOUT   | SML-P12UT MAX14912AKN+ TQFN56- INDUCTOR; SMT; FERRITE BOBBIN CORE; 47UH; TOL=+/-20%; 0.56A RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM TSW-106-08-S-D-   | VALUE DESCRIPTION   |                              |            |                                                    | WEB INSTRUCTIONS FOR MAXIM DATA SHEET           |          |                                                    |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|------------------------------|------------|----------------------------------------------------|-------------------------------------------------|----------|----------------------------------------------------|
| TAIYO YUDEN                                                                                                                                                                                                                                                                          | 10UF                                                                                                                                                                                        | TDK;MURATA YAGEO MURATA                                                                                                                                                                                          |                                                                                                                                |                                                                     | ROHM                                                         | 0.1UF COILCRAFT 47UH VISHAY DALE; PANASONIC                                                                                                                                                                                                                    | VISHAY DALE; YAGEO PHICOMP 1K ELECTRONICS           | 0.22UF 0.01UF SAMTEC RA INC. PJ-202AH SULLINS N/A                                                                                                                       | SML-P12PT ROHM MAXIM                                                                                                                                             |                     | CORP. PBC08DAAN MAXIM PCB    | MFG VALUE  |                                                    | MFG N/A                                         | N/A PCB) | VALUE N/A N/A N/A N/A                              |
| C3225X7S1H106K250AB GMK212B7105KG                                                                                                                                                                                                                                                    | GCM21BC71C106KE35                                                                                                                                                                           |                                                                                                                                                                                                                  | CC0603KRX7R0BB104                                                                                                              | GRM188F51H224ZA01D                                                  |                                                              | CRCW0603470RFK;ERJ- 3EKF4700                                                                                                                                                                                                                                   | CGA3EANP02A103J080AC CRCW04021K00FK; RC0402FR-071KL | SML-P12PT TSW-106-08-S-D-RA EVINSERT                                                                                                                                    | SML-P12UT 10-MAX14912AKN-T MAX14912AKN+ LPS4018-473MR                                                                                                            |                     | PBC08DAAN MAX14912PMB_DEMO_B | MFG PART # | MFG PART # 88-00711-SML on PCB and will be shipped | 87-02162-00                                     |          | 85-MAXKIT-PNK with                                 |
| 20-0010U-BA76 20-0001U-Z5                                                                                                                                                                                                                                                            | 20-0010U-BA19 CGA4J1X7S1C106K125;                                                                                                                                                           |                                                                                                                                                                                                                  | 20-00U01-M3                                                                                                                    |                                                                     |                                                              | 50-0047U-S10 80-0470R-24                                                                                                                                                                                                                                       | 20-000U1-01 20-00U22-91 80-0001K-23                 | 01- TSW10608SDRA12P- 17 01-PJ202AH3P-27 PJ-202AH 01-PBC08DAAN16P- EVINSERT                                                                                              | 30-SMLP12PT-00 30-SMLP12UT-00                                                                                                                                    |                     | 21 N/A                       | MAXINV     |                                                    | purchased parts but not assembled PURCHASE(DNP) | MAXINV   | PACKOUT_BOX 88-00711-SML 87-02162-00 85-MAXKIT-PNK |

Evaluates: MAX14912

## MAX14912PMB Schematic

<!-- image -->

Evaluates: MAX14912

## MAX14912PMB PCB Layout Diagram

MAX14912PMB# PCB Layout-Top Silkscreen

<!-- image -->

Evaluates: MAX14912

│

## MAX14912 Peripheral Module

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS VKRZQ LQ WKH (OHFWULFDO &amp;KDUDFWHULVWLFV WDEOH DUH JXDUDQWHHG Other parametric values quoted in this data sheet are provided for guidance.

│

Evaluates: MAX14912