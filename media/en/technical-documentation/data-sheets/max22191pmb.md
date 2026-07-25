<!-- lastmod 2022-08-02 -->
## MAX22191PMB

## General Description

The MAX22191PMB# peripheral module provides the  hardware  to  evaluate  the  MAX22191  parasitically powered  digital  input.  Refer  to  the  MAX22191  IC  data sheet  for  detailed  information  regarding  operation  of the  IC.  The  PMB  features  two  circuits:  one  for  isolated parasitically  powered  circuit  (using  an  optoisolator)  and one for a 24V input signal with the circuit powered from a low-voltage logic supply.

The  module  can  be  used  in  various  ways.  Maxim  sells low-cost  USB2PMB1#,  USB2PMB2#,  and  USB2GPIO# adapter  boards  that  use  the  Munich  GUI  software  for communication through a USB cable. This is not included with this board. Alternatively, any microcontroller or FPGA with a 12-pin Pmod™-compatible connector can be used. Another option for the user is to wire-wrap a temporary connection from their system to the pins on connector X1. For these later two options the user needs to write their own control software.

The  Pmod  PCB  dimension  is  just  42mm  long  x  20mm wide,  with  the  width  determined  by  the  size  of  the  X1 connector.

Figure 1. MAX22191PMB# Board Photo

<!-- image -->

Pmod is a trademark of Digilent Inc.

## Features

- Easy Evaluation of the MAX22191
- Isolated, Paristically Powered and Logic-Powered Circuits for Easy Evaluation
- Proven PCB Layout
- Works with USB2PMB2# or USB2GPIO# Adapter and Munich GUI Software

## MAX22191PMB EV Kit Files

| FILE                     | DECRIPTION                                           |
|--------------------------|------------------------------------------------------|
| Munich_GUISetupV2.21.ZIP | Munich GUI Software for use with the USB2PMB adapter |

Ordering Information appears at end of data sheet.

Evaluates: MAX22191

<!-- image -->

## MAX22191PMB

## Quick Start

## Required Equipment

- MAX22191PMB#
- USB2PMB2# or USB2GPIO#
- 24V DC power supply or 24V digital signal generator
- Oscilloscope
- PC with Windows ®  XP, Windows 7, Windows 8.1, Windows 10 and a spare USB port
- Micro-USB cable
- Munich GUI

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV system software. Text in bold and underline refers to items from the Windows operating system.

## Procedure

The Pmod board is fully assembled and tested. Follow the steps below to verify board operation: If the USB2PMB1#, USB2PMB2#, or USB2GPIO# adapter is used, the user can  download  software  by  following  the  steps  below  to get started. In this description the USB2PMB2# adapter is used:

- 1) Visit www.maximintegrated.com /  to  download  the latest  version  of  the  Munich\_GUI  software,  version 2.21 or later, Munich\_GUISetupV2.21.ZIP.
- 2) Save the software to a temporary folder. Unzip the zip file  and  double-click  the  executable  (EXE)  file  to  run  the installer.  A  message  box  asking Do  you  want  to allow the following program to make changes to this computer? might appear. If so, click Yes .

Evaluates: MAX22191

- 3) The  installer  includes  the  drivers  for  the  hardware and software. Follow the instructions on the installer and once complete, click Finish . The default location of the software is in the program files directory.
- 4) Connect the MAX22191PMB# Pmod connector X1 to the connector on USB2PMB2#.
- 5) Connect the USB2PMB2# to the PC with the microUSB cable.
- 6) Once  the  hardware  is  ready  to  use,  launch  the Munich software. The status bar in the GUI should display Disconnected in  the  bottom  right-hand  corner. Go to the Device tab to select the MAX22191PMB . Click the button Connect and then in the Sample box select Read Continuously .
- 7) If  nothing  is  connected  to  Input  1  (X2)  and  Input  2 (X3), then both levels should be LOW /0V.
- 8) Connect the 24V DC supply to MAX22191PMB# on connector X2, this is Input 1 on the Isolated Parasitic Channel. Output 1 signal should flip and the Munich GUI should say HIGH for Input 1.
- 9) Connect  the  24V  DC  supply  to  MAX22191PMB# on connector X2, this is Input 2 on the logic voltage powered channel. Now the Output 2 signal should flip and the Munich GUI should say HIGH for Input 2.
- 10)  If Munich GUI is not available, you can also measure the logic voltage on connector X1, but USB2PMB2# and the USB-Cable are still needed to provide VL.
- 11)  Also  note  that  if  you're  manually  measuring  with  a Voltmeter,  Optocoupler  IC2  inverts  the  input  signal, so  Input  1  is  inverted  vs  the  24V  side,  while  Input 2  is  not  inverted.  Munich  GUI  shows  the  level    as provided on the 24V side.

Figure 2. MAX22191PMB# with USB2PMB2# Adapter

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

│

## Detailed Description of Hardware

The  MAX22191  can  be  powered  parasitically  from  the 24V  digital  input  signal.  The  MAX22191PMB#  has  two circuits to demonstrate the two most common ways to use this  device:  one  for  isolated  parasitically  powered  circuit (using an opto-isolator) and one for a 24V input signal with the  circuit  powered  from  a  low-voltage  logic  supply.  The MAX22191PMB# hardware provides everything needed to evaluate the MAX22191 using the Pmod interface with a USB adapter for easy control with a Windows based GUI. An  optional  USB2PMB2#  module  can  be  used  with  the Munich  GUI  to  provide  the  USB-to-MAX22191  interface to read the MAX22191 in either circuit. The USB2PMB2# adapter  provides  a  3.3V  input  from  the  USB  interface providing VL to MAX22191.

The MAX22191 is an IEC 61131-2 compliant, industrial digital input (DI) device that translates a 24V digital industrial input to a 2.4mA (typ) current for driving optical isolators. Depending upon how the sensor is connected, each input can sink or source current-refer to MAX22191 datasheet for examples showing this.

## Isolated Parasitic Channel

To  power  the  device  (IC1)  parasitically,  the  VCC  pin  is connected to GND and power is derived from the signal on  the  IN  pin  of  connector  X2.  By  deriving  operating power  from  the  input  signal,  it  eliminates  the  need  for an external field-side power supply. The output from IC1 drives  the  anode  of  the  diode  in  the  opto-isolator  (IC2)

## Evaluates: MAX22191

and the output of the opto connects to pin 3 (signal L\_DI1) of connector X1 allowing the sensor input state to be read using software. Note that in this circuit the opto-isolator inverts  the  input  signal,  but  the  Munich  GUI  reports  the true sensor level. The 'logic-side' of the opto is powered from VL on connector X1, which is derived from the USB power supply.

## Low-Voltage Logic Supply Channel

To  power  the  device  (IC3)  from  a  local  or  'logic'  power supply, VCC is connected to VL on connector X1 which is  derived  from  the  USB  power  supply.  When  VCC  is powered,  the  output  (OUT)  changes  from  a  current source to a CMOS output and the propagation delay from IN to OUT is reduced. The output of IC3 connects to pin 1 (signal L\_DI2) of connector X1 allowing the sensor input state  to  be  read  using  software.  Note  that  this  channel has no galvanic isolation. If isolation is required for an end application  an  external  digital  isolator  such  MAX12930 could be used.

## Pmod Style Connector

The  MAX22191PMB#  can  plug  directly  into  a  Pmodcompatible  port  through  X1.  Note  the  pin  definitions are  determined  by  the  USB2PMB2# adapter, and if the user  wishes  to  use  this  board  with  their  own  host  they must  configure  the  microcontroller  or  FPGA  to  match MAX22191PMB#  signals.  For  more  information  on  the interface  and  control,  refer  to  the  MAX22191  IC  data sheet. See Figure 5 for the X1 pinout.

Figure 3. Input 1-Isolated Parasitic Channel

<!-- image -->

│

Figure 4. Input 2-VL Powered Channel

<!-- image -->

Figure 5. X1 Connector Pin Out

<!-- image -->

## MAX22191PMB

## Detailed Description of Software

For  easy  development and testing,  Maxim provides our Munich  GUI  that  supports  a  number  of  different  Pmod boards using low-cost USB adapters also available from Maxim.  For  MAX22191PMB#,  use  Munich  GUI  version 2.21 or later.

## Connect to Hardware

The Device menu has options to search and connect to the hardware (see Figure 6). Select MAX22191PMB . Use the Scan Adapters option to search for the USB2PMB2 modules  connected  to  the  PC.  If  modules  are  found, Evaluates: MAX22191

the  serial  numbers  of  the  modules  are  listed  in  the USB2PMB2s menu item. Select the serial number in the USB2PMB2s list to connect the software to communicate with that module. The software can only communicate to one module at a time.  Select Connect and  notice  how status  changes  from  Disconnected  to  Connected  in  the lower-right corner of the GUI.

## Reading Input Channels

Select Read Continuously to make the GUI continuously poll the two input channels. When an input channel goes high the GUI show this change of state.

Figure 6. MAX22191PMB# Software (Munich GUI Device Menu)

<!-- image -->

│

Figure 7a. MAX22191PMB# Software (Munich GUI-Both Inputs Low)

<!-- image -->

Figure 7b. MAX22191PMB# Software (Munich GUI-Input 2 High)

<!-- image -->

## Ordering Information

| PART         | TYPE              |
|--------------|-------------------|
| MAX22191PMB# | Peripheral Module |

## MAX22191PMB# EV Kit Bill of Materials

|   ITEM | REF_DES   |   QTY | MFG PART #         | MANUFACTURER                 | VALUE             | DESCRIPTION                                                                                                                 |
|--------|-----------|-------|--------------------|------------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------|
|      1 | C1, C2    |     2 | C0402C104J4RAC     | KEMET                        | 0.1UF             | CAPACITOR; SMT; 0402; CERAMIC; 0.1uF; 16V; 5%; X7R; -55°C to + 125°C; 0 ± 15% degC MAX.                                     |
|      2 | D1, D2    |     2 | SMAJ33CA           | VISHAY GENERAL SEMICONDUCTOR | 33V               | DIODE; TVS; SMA (DO-214AC); VRM = 33V; IPP = 7.5A                                                                           |
|      3 | IC1, IC3  |     2 | MAX22191AUT+       | MAXIM                        | MAX22191AUT+      | EVKIT PART-IC; PARASITICALLY POWERED TYPE 3 DIGITAL INPUT; PACKAGE DWG NO.: 21-0058; PACKAGE LAND PATTERN: 90-0175; SOT23-6 |
|      4 | IC2       |     1 | ACPL-064L-500E     | AVAGO TECHNOLOGIES           | ACPL-064L-500E    | IC; OPTO; ULTRA LOW POWER 10MBD DIGITAL CMOS OPTOCOUPLER; NSOIC8                                                            |
|      5 | R1, R2    |     2 | ERJ-2RKF4022       | PANASONIC                    | 40.2K             | RESISTOR; 0402; 40.2K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                                      |
|      6 | X1        |     1 | TSW-106-08-S-D-RA  | SAMTEC                       | TSW-106-08-S-D-RA | CONNECTOR; THROUGH HOLE; POST TERMINAL STRIP ASSEMBLY; RIGHT ANGLE; 12PINS;                                                 |
|      7 | X2, X3    |     2 | 282834-2           | TE CONNECTIVITY              | 282834-2          | CONNECTOR; FEMALE; THROUGH HOLE; 2.54MM PITCH; SIDE WIRE ENTRY STACKING TERMINAL BLOCK ; STRAIGHT; 2PINS; -40°C TO + 105°C  |
|      8 | PCB       |     1 | MAX22191PMB_DEMO_A | MAXIM                        | PCB               | PCB:MAX22191PMB_DEMO_A                                                                                                      |

TOTAL

13

Evaluates: MAX22191

## MAX22191PMB# EV Kit Schematic

<!-- image -->

## MAX22191PMB# EV Kit PCB Layout Diagrams

<!-- image -->

MAX22191PMB# EV Kit Component Placement Guide-Top Silkscreen

MAX22191PMB# EV Kit PCB Layout-Top Layer

<!-- image -->

MAX22191PMB# EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX22191PMB

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/18            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,ntegrated reserYes the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX22191