<!-- lastmod 2023-10-02 -->
<!-- image -->

Evaluates: MAX14916

## General Description

The MAX14916PMB (peripheral module board) provides the hardware to evaluate the MAX14916 Octal 1A / Quad 2A industrial  high-side  switch  with  diagnostics.  Refer  to the MAX14916 IC data sheet for detailed information on the operation of the IC. The module takes advantage of the features in the MAX14916, which allow each channel to independently be toggled on and off and continuously monitored for faults. Note the module provides a subset of the MAX14916 features. For greater flexibility, refer to the MAX14916 evaluation kit.

The  MAX14916PMB# has a 12-pin  Pmod™-compatible connector  for  serial  peripheral  interface  (SPI)  communication.  The  peripheral  module can be used in various ways; Analog Devices sells low-cost USB2PMB2# and  USB2GPIO#  adapter  boards  that  use  the  Munich GUI  software  for  SPI  communication  through  a  USB cable.  This is not included with this board but is available  from  Analog Devices or one  of its distributors. Alternatively, use any microcontroller or field programmable  gate  array (FPGA)  with  a  12-pin  Pmodcompatible connector for SPI communication.

The PCB dimension is 62mm long x 22.6mm wide, with the width determined by the size of the DO terminal block.

Ordering Information appears at end of data sheet.

Figure 1. MAX14916PMB# Board Photo

<!-- image -->

Pmod is a registered trademark of Digilent Inc.

©

## Features

- Easy Evaluation of the MAX14916
- Internal Clamps for Fast Inductive Load Demagnetization
- Individual Channel Fault Detection
- Supports Load Currents of up to 2.4A per Channel
- Works with USB2PMB2# or USB2GPIO# Adapter and Munich GUI Software
- Fully Assembled and Tested
- Proven PCB Layout
- RoHS Compliant

## Contents

- MAX14916PMB# with the MAX14916AFM+
- 24V DC (2.71A max.) power adapter

## MAX14916PMB EV Kit Files

| FILE                              | DESCRIPTION                                                         |
|-----------------------------------|---------------------------------------------------------------------|
| Munich GUISetupV2.26.exe or later | Munich GUI software for use with the USB2PMB2# or USB2GPIO# adapter |

## MAX14916PMB

31 9- 100958 ; Rev 0; 10 /22

One  Analog  Way,  Wilmington,  MA  0187  U.S.A.    |      Tel:  781.329.4700      |      © 2022  Analog  Devices,  Inc.  All  rights  reserved. 2022 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## Evaluates: MAX14916

Figure 2. MAX14916PMB# Block Diagram

<!-- image -->

## Quick Start

## Required Equipment

- MAX14916PMB#
- 24V DC power adapter
- USB2PMB2# or USB2GPIO# adapter board
- Micro-USB cable
- MS Windows-10 PC with a spare USB port
- Munich GUI v2.26 or higher

Note: In the following sections, software-related items are identified in bold . Text in bold refers to items directly from the  Munich  GUI  software.  Text  in bold  and  underline refers to items from the MS Windows operating system.

## Procedure

The MAX14916PMB# board is fully assembled and tested. Follow these steps to verify the board operation. If the USB2PMB2# or USB2GPIO# adapter is used, download the software by following these steps to get started. In this description, the USB2PMB2# adapter is used.

Windows is a registered trademark of Microsoft.

- 1) Visit www.maximintegrated.com to download the latest version of the Munich GUI software, version 2.26 or later.
- 2) Save the software to a temporary folder. Double-click the .exe file to run the installer. A message box ask -ing Do you want to allow the following program to make changes to this computer? appears. Click Yes .
- 3) The installer includes the drivers for the hardware and software. Follow the instructions on the installer, and once complete, click Finish .
- 4) The default location of the software is in the program files directory.
- 5) Connect the 24V DC power adapter to J2 of the MAX14916PMB# to power up the board. The VDDOK LED (DS9 - green) turns on.
- 6) Connect the MAX14916PMB# Pmod connector J1 to the Pmod connector on the USB2PMB2#.
- 7) Connect the USB2PMB2# to the PC with the MicroUSB cable.

│

## MAX14916PMB

- 8) Once the hardware is ready to use, launch the Munich GUI software. The status bar in the GUI should display Disconnected in the bottom right corner. To configure the MAX14916PMB#, go to the Device tab, select Industrial Digital , then select the MAX14916PMB . (See Figure 3)
- 9) The GUI should automatically detect the USB2PMB2# board serial number and show it in the USB2PMB Adapter dropdown menu. If no serial number is displayed, check the USB connection, and click Scan Adapters . Select the USB2PMB2# board serial number from the dropdown menu once it shows up.
- 10) Click Connect .
- 11) Connect CH1 (pin 7) and GND (pin 8) from the J3 connector to an oscilloscope or digital multimeter. The MAX14916PMB# is configured in HighImped -ance mode ( High-Z ) by default after power-up. Using the CH1 dropdown menu, turn on CH1 by setting the signal type from the default High-Z to Static High .

## Evaluates: MAX14916

Observe that STATUS LED (DS2 - green) is turned on and the output on the oscilloscope or digital multimeter reads 24V.

- 12) Observe that when the output channel is turned on and is shorted to GND, the Status LED turns off and the Fault LED (DS6 - red) toggles on and off as the output detects an overcurrent or overload fault. The Munich GUI's Channel Faults box indicates the channel in fault condition by turning the corresponding channel's status bar to red.
- 13) Monitoring for open-wire detection (with channel output ON and/or OFF) can be enabled in the Monitoring Setup Window of the Munich GUI. Channel Output connected to V DD  monitoring can also be enabled in the same window. When a fault is enabled in this window and detected on the MAX14916PMB# board, it displays in the Munich GUI's SPI Result Monitoring Window box and the fault LED for the channel turns ON.

Figure 3. MAX14916PMB# Software (Munich GUI Device Menu)

<!-- image -->

│

## MAX14916PMB

## Detailed Description of Hardware

The  MAX14916  is  a  high-speed,  Octal  1A  /  Quad  2A High-Side  Switch  with  a  maximum  of  250mΩ  on  resis -tance. The MAX14916PMB# is configured to be operated as a Quad 2A High-Side Switch. Each channel's output can be toggled independently, and the IC provides channel diagnostics through an SPI-compatible interface. The MAX14916 is specified for operation with a field  supply voltage of 24V typical and tolerant to 65V. The MAX14916PMB#  comes  with  a  standard  2.1mm  barrel connector as the main supply  connector. A  24V  (2.71A max)  DC  power  adapter  is included with the module for convenience. For ease of use, this module only supports a subset of the  MAX14916 features. For greater flexibility,  refer  to  the  MAX14916 evaluation kit.

The  MAX14916PMB#  hardware  provides  everything needed to evaluate the MAX14916 using the Pmod interface.  An  optional  USB2PMB2#  or  USB2GPIO#  adapter

Evaluates: MAX14916

can be used with the Munich GUI to provide the USB-toSPI  interface  to  communicate  with  the  MAX14916. The adapter  provides  a  3.3V  output  from  the  USB  interface providing a VL supply to the MAX14916.

The MAX14916PMB# does not feature galvanic isolation. To  isolate  the  module,  select  the  USB2GPIO#  adapter board and use it with the USB2GPIOISO# isolation module. Both modules work seamlessly with the Munich GUI.

## High-Side Switch Operation

The  MAX14916  has  eight  high-side  (HS)  switch  channels. The MAX14916PMB# connects two high-side switch channels in parallel to provide four output channels with a higher current delivery capability. The high-side switch current limit is 2.4A per channel when configured in this parallel orientation.

The  high-side  driver  has  120mΩ  (typ)  on-resistance  at 25ºC ambient temperature. For full details about the highside switch characteristics, refer to the MAX14916 IC data sheet.

Figure 4. MAX14916PMB# Connected in Munich GUI (Short-VDD and Global Faults Enabled)

<!-- image -->

│

## Pmod Style Connector

The  MAX14916PMB#  can  plug  directly  into  a  Pmodcompatible port through J1. Note the pin definitions are determined by the USB2PMB2# or USB2GPIO# adapter, and to use this board with own host, configure the microcontroller or FPGA to match the MAX14916PMB# J1 pinout. For more information on the MAX14916 SPI interface and control, refer to the MAX14916 IC data sheet. See the MAX14916PMB schematic for the J1 pinout.

## Power Supply

A  24V  DC  power  adapter,  SDI65-24-UDC-P5,  with  a maximum  of  2.71A  output  current  is  included  with  the MAX14916PMB# and must be connected to J2 for normal operation.  For  a  higher  total  load  current  on  the  output than the power adapter can provide, use own DC power supply. Note the MAX14916 is specified for operation with a  supply  voltage  up  to  36V  and  is  tolerant  to  65V.  The barrel connector J2 is rated up to 5A maximum. Do not operate beyond these maximum ratings.

## Light-Emitting Diodes (LEDs)

The  MAX14916PMB# comes with  a  4  x  2  LED  matrix, providing four green LEDs indicating per-channel input or output status, and four red LEDs indicating per channel fault conditions. See Table 1 for a full list of each channel's corresponding status and fault LEDs. If a fault LED is turned on for a channel, the corresponding status LED is always turned off. This mitigates false information about the status of the affected channel.

Field supply (V DD ) diagnostic faults are provided through the VDDOK LED  (DS9  -  green).  The  Munich  GUI  provides  limited  access  to  the  diagnostic  features  of  the MAX14916. To explore the full diagnostic capabilities of the MAX14916, refer to the MAX14916 evaluation kit.

## Transient Immunity Protection

No external surge suppression is needed on OUT\_ pins as they are protected against ±1kV surge pulses per IEC 61000-4-5. Connect a TVS diode between V DD  and GND to  clamp  positive  surge  pulses  on  the  OUT\_  and  V DD pins. The MAX14916PMB# outputs are protected against ±1kV surge transients with TVS diode D1, SMBJ36A, connected between V DD  and GND.

## Addressable SPI

## Figure 5. Digital Output Operation Mode Configuration

The MAX14916 supports addressable SPI, allowing direct communication  with  up  to  four  MAX14916  devices.  By default,  the  MAX14916PMB#  is  configured  as  address 00, with A1 = 0 and A0 = 0. It is possible to change the SPI address using the provided resistor footprints by connecting A1 and A0 to VL or GND using the pads provided at R10 and R11. Note that if the SPI address is changed from  the  default  value,  it  no  longer  works  with  the  provided  Munich  GUI  software  and  the  user  must  develop own software to support the new SPI address. For more information on SPI device address selection, refer to the MAX14916 IC data sheet.

## Table 1. MAX14916PMB# LED Channel Assignments

|   CHANNEL NUMBER | STATUS LED (GREEN)   | FAULT LED (RED)   |
|------------------|----------------------|-------------------|
|                1 | DS2                  | DS6               |
|                2 | DS4                  | DS8               |
|                3 | DS1                  | DS5               |
|                4 | DS3                  | DS7               |

## Evaluates: MAX14916

Figure 5. Digital Output Operation Mode Configuration

<!-- image -->

## Detailed Description of Software

For  easy  development  and  testing,  Analog  Devices provides  the  Munich  GUI  to  communicate  with  the MAX14916PMB#.  The  Munich  GUI  supports  many different  Pmod  boards  using  low-cost  USB  adapters, USB2PMB2# or USB2GPIO#, also available from Analog Devices.

## Connection to Hardware

The Device menu has options to select peripheral modules (see Figure 3). In this case, select

Industrial Digital ,  then select the MAX14916PMB .  Use the Scan Adapters option to search for the USB2PMB2# or USB2GPIO# modules connected to the PC if the GUI does  not  automatically  find  the  Pmod  adapters.  If  the adapters  are  found,  the  serial  number  of  the  adapters are  listed  in  the USB2PMB Adapter dropdown.  Select the  serial  number  of  the  adapter  for  the  Munich  GUI  to communicate with. The software can only communicate to one module at a time. Select Connect and notice how the status changes from Disconnected to Connected in the lower-right area of the GUI. The Short-V DD per channel  monitoring  is  automatically  enabled,  and  all Global Faults are Low , if the Munich GUI successfully communicates with the MAX14916PMB# (see Figure 4).

## Pulse Mode

Drive a pulse signal for each output channel and configure its ON and OFF time by selecting Pulses (Ton/Toff) from the dropdown menu, as shown in Figure 7. To configure the ON and OFF time, first set up the Ton for each channel, and then adjust Toff only for one channel. The cycle is automatically equalized so that the pulse periods on all channels configured in pulse mode are the same. Different cycle lengths between different output channels are not supported, and the total time (Ton + Toff) should be less than 1000ms. Once the appropriate Ton and Toff values are entered, click the Run button  to  activate  the pulse output.

## MAX14916PMB

## High-Side Switch Operation

All  channels  of  the  MAX14916PMB#  are  configured  in High-Impedance  mode  by  default  after  power  up.  The CH1 to CH4 dropdown menus allow to configure all four high-side  switch  channels.  The  output  channels  can  be driven to High-Z , Static High ,  or Pulses (Ton/Toff) ,  as shown in Figure 5. When configured to Static High , the channel switch is turned on, and the CH\_ output is pulled to V DD . The pulse mode is discussed in the Pulse Mode section.

## Diagnostic Features

The  MAX14916PMB#  takes  advantage  of  the  built-in diagnostic features of the MAX14916 and provides basic fault  monitoring  using  the  Munich  GUI.  To  explore  the full diagnostic capabilities of the MAX14916, refer to the MAX14916 evaluation kit.

Evaluates: MAX14916

Six global faults are provided on SDO in each SPI cycle and are displayed in the Monitoring section in the Munich GUI,  which  include  short-to-V DD   ( SHTVDD ),  open-wire detection  in  on-state  ( OWOnF ),  open-wire  detection  in off-state ( OWOffF ),  overcurrent limit ( OvrCurr ),  channel overload ( OvldF ),  and  the  global  diagnostic  ( GLOBLF ). The  global  fault  bit  ( GLOBLF )  is  the  logical  OR  of  the ComErr, SupplyErr,  and ThrmShutd  bits  in  the  Interrupt and  GlobalErr  registers.  Also  enable  or  disable  perchannel open wire detection ( OW CH1 to OW CH4 ) and per-channel  short-to-VDD  monitoring  ( Short-VDD  CH1 to Short-VDD CH4 ),  as shown in Figure 6. Refer to the MAX14916  IC  data  sheet  for  more  details  on  the  perchannel and global diag-nostics features.

Figure 6. Diagnostic Features

<!-- image -->

│

## Evaluates: MAX14916

Figure 7. Pulse Generation

<!-- image -->

## Ordering Information

# Denotes RoHS compliance.

<!-- image -->

| PART         | TYPE              |
|--------------|-------------------|
| MAX14916PMB# | Peripheral Module |

## MAX14916PMB Bill of Materials

| NOTE: DNI --> DO NOT INSTALL (PACKOUT); DNP --> DO NOT PROCURE   | NOTE: DNI --> DO NOT INSTALL (PACKOUT); DNP --> DO NOT PROCURE   | NOTE: DNI --> DO NOT INSTALL (PACKOUT); DNP --> DO NOT PROCURE   | NOTE: DNI --> DO NOT INSTALL (PACKOUT); DNP --> DO NOT PROCURE                      | NOTE: DNI --> DO NOT INSTALL (PACKOUT); DNP --> DO NOT PROCURE   | NOTE: DNI --> DO NOT INSTALL (PACKOUT); DNP --> DO NOT PROCURE   | NOTE: DNI --> DO NOT INSTALL (PACKOUT); DNP --> DO NOT PROCURE                                  |
|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|-------------------------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| ITEM                                                             | REF_DES                                                          | QTY                                                              | MFG PART #                                                                          | MANUFACTURER                                                     | VALUE                                                            | DESCRIPTION                                                                                     |
| 1                                                                | C1                                                               | 1                                                                | C3225X7S1H106K250AB; CGA6P3X7S1H106K250AB; GCM32EC71H106K; CGA6P3X7S1H106K250AE     | TDK;TDK;MURATA;TDK                                               | 10µF                                                             | CAP; SMT (1210); 10µF; 10%; 50V; X7S; CERAMIC                                                   |
| 2                                                                | C2                                                               | 1                                                                | GMK107B7104KAH                                                                      | TAIYO YUDEN                                                      | 0.1µF                                                            | CAP; SMT (0603); 0.1µF; 10%; 35V; X7R; CERAMIC                                                  |
| 3                                                                | C3                                                               | 1                                                                | GRM155R62A104KE14                                                                   | MURATA                                                           | 0.1µF                                                            | CAP; SMT (0402); 0.1µF; 10%; 100V; X5R; CERAMIC                                                 |
| 4                                                                | C4                                                               | 1                                                                | CGA4J1X7S1C106K125; GCM21BC71C106KE35                                               | TDK;MURATA                                                       | 10µF                                                             | CAP; SMT (0805); 10µF; 10%; 16V; X7S; CERAMIC                                                   |
| 5                                                                | C5, C6                                                           | 2                                                                | UMK107AB7105KA; CC0603KRX7R9BB105                                                   | TAIYO YUDEN;YAGEO                                                | 1µF                                                              | CAP; SMT (0603); 1µF; 10%; 50V; X7R; CERAMIC                                                    |
| 6                                                                | C7                                                               | 1                                                                | CC0603KRX7R0BB104; GRM188R72A104KA35; HMK107B7104KA; 06031C104KAT2A; GRM188R72A104K | YAGEO;MURATA;TAIYO YUDEN;AVX;MURATA                              | 0.1µF                                                            | CAP; SMT (0603); 0.1µF; 10%; 100V; X7R; CERAMIC                                                 |
| 7                                                                | C8-C11                                                           | 4                                                                | CGA3EANP02A103J080AC                                                                | TDK                                                              | 0.01µF                                                           | CAP; SMT (0603); 0.01µF; 5%; 100V; C0G; CERAMIC                                                 |
| 8                                                                | D1                                                               | 1                                                                | SMBJ36A-E3                                                                          | VISHAY GENERAL SEMICONDUCTOR                                     | 36V                                                              | DIODE; TVS; SMB (DO-214AA); VRM = 36V; IPP = 10.3A                                              |
| 9                                                                | DS1-DS4, DS9                                                     | 5                                                                | LGL29K-F2J1-24-Z                                                                    | OSRAM                                                            | LGL29K-F2J1-24-Z                                                 | DIODE; LED; SMARTLED; GREEN; SMT; PIV = 1.7V; IF =0.02A                                         |
| 10                                                               | DS5-DS8                                                          | 4                                                                | LS L29K-G1J2-1-Z                                                                    | OSRAM                                                            | LS L29K-G1J2-1-Z                                                 | DIODE; LED; SMART; RED; SMT (0603); PIV = 1.8V; IF =0.02A; -40 DEGC TO +100 DEGC                |
| 11                                                               | J1                                                               | 1                                                                | TSW-106-08-S-D-RA                                                                   | SAMTEC                                                           | TSW-106-08-S-D-RA                                                | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12 PINS;                                      |
| 12                                                               | J2                                                               | 1                                                                | PJ-202AH                                                                            | CUI INC.                                                         | PJ-202AH                                                         | CONNECTOR; MALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS                                |
| 13                                                               | J3                                                               | 1                                                                | 250-408                                                                             | WAGO                                                             | 250-408                                                          | CONNECTOR; FEMALE; THROUGH HOLE; COMPACT TERMINAL STRIP WITH PUSH BUTTON; STRAIGHT; 8 PINS      |
| 14                                                               | R1, R2                                                           | 2                                                                | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0                       | VISHAY;PANASONIC; YAGEO;STACKPOLE                                | 10K                                                              | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                               |
| 15                                                               | R3                                                               | 1                                                                | CRCW0603162KFK                                                                      | VISHAY DALE                                                      | 162K                                                             | RES; SMT (0603); 162K; 1%; +/-100PPM/DEGC; 0.1000W                                              |
| 16                                                               | R4-R6, R12, R13                                                  | 5                                                                | CRCW06031K50FK                                                                      | VISHAY DALE                                                      | 1.5K                                                             | RES; SMT (0603); 1.5K; 1%; +/-100PPM/DEGC; 0.1000W                                              |
| 17                                                               | R7-R11                                                           | 5                                                                | ERJ-2GEJ102                                                                         | PANASONIC                                                        | 1K                                                               | RES; SMT (0402); 1K; 5%; +/-200PPM/DEGC; 0.1000W                                                |
| 18                                                               | R14-R17                                                          | 4                                                                | CRCW0603499KFK; ERJ-3EKF4993; RC0603FR-07499KL                                      | VISHAY DALE;PANASONIC; YAGEO                                     | 499K                                                             | RES; SMT (0603); 499K; 1%; +/-100PPM/DEGC; 0.1000W                                              |
| 19                                                               | U1                                                               | 1                                                                | MAX14916AFM+                                                                        | MAXIM                                                            | MAX14916AFM+                                                     | IC; HSSWTCH; COMPACT INDUSTRIAL OCTAL 1A/QUAD 2A; HIGH-SIDE SWITCH WITH DIAGNOSTICS; FCQFN48-EP |
| 20                                                               | PCB                                                              | 1                                                                | MAX14916PMB                                                                         | MAXIM                                                            | PCB                                                              | PCB:MAX14916PMB                                                                                 |
| TOTAL                                                            |                                                                  | 43                                                               |                                                                                     |                                                                  |                                                                  |                                                                                                 |

Evaluates: MAX14916

## MAX14906PMB Schematic

<!-- image -->

## Evaluates: MAX14916

## MAX14916PMB

## MAX14916PMB# PCB Layouts

<!-- image -->

MAX14916PMB-Silk Top

MAX14916PMB-Top

<!-- image -->

MAX14916PMB-Layer2

<!-- image -->

## Evaluates: MAX14916

<!-- image -->

MAX14916PMB-Layer3

MAX14916PMB-Botoom

<!-- image -->

MAX14916PMB-Silk Bottom

<!-- image -->

│

## MAX14916PMB

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10 /22          | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX14916