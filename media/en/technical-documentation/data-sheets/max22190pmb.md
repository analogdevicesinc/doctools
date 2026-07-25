<!-- lastmod 2022-08-02 -->
## MAX22190PMB#

## General Description

The MAX22190 peripheral module provides the hardware to evaluate the MAX22190 Octal Industrial Digital Input. Refer  to  the  MAX22190  IC  data  sheet  for  detailed information  regarding  operation  of  the  IC.  The  module takes  advantage  of  the  features  in  the  MAX22190 allowing it to be powered from a single low voltage logic supply (3.0-5.5V) without the need for a 24V field supply. Note  that  this  module  provides  a  subset  of  the  MAX22190 features - for greater flexibility refer to the MAX22190 EV kit. The  module  can  be  used  in  various  ways;  the  device is  configured  by  SPI  interface.  Maxim  sells  low-cost USB2PMB1#,  USB2PMB2#,  and  USB2GPIO#  adapter boards that use the Munich GUI software for communication through  a  USB  cable  generating  SPI  communication with the MAX22190. This is not included with this board. Alternatively,  any  microcontroller  or  FPGA  with  a  12-pin Pmod™-compatible  connector  can  be  used.  Another option for the user is to wire-wrap a temporary connection from their system to the pins on connector X1. For these later two options the user needs to write their own control software.

The  Pmod  PCB  dimension  is  just  45mm  long  x  20mm wide, with the width determined by the size of the X1 and X2 connectors.

## MAX22190PMB# Photo

## Features

- Easy Evaluation of the MAX22190
- Powered from Single 3.0-5.5V Logic Supply, Without the Need for 24V Field Supply
- Configured for IEC 61131-2 Type 1 and Type 3 Sensor Inputs
- Proven PCB Layout
- Works with USB2PMB2# or USB2GPIO# Adapter and Munich GUI Software

## MAX22190PMB# EV Kit File

| FILE                     | DECRIPTION                                           |
|--------------------------|------------------------------------------------------|
| Munich_GUISetupV2.21.ZIP | Munich GUI Software for use with the USB2PMB adapter |

Ordering Information appears at end of data sheet.

<!-- image -->

Pmod is a trademark of Digilent Inc.

Evaluates: MAX22190

<!-- image -->

## MAX22190PMB#

## Quick Start

## Required Equipment

- MAX22190PMB#
- USB2PMB1# or USM2PMB2#, or USB2GPIO#
- 24V DC power supply or 24V digital signal generator
- PC with Windows XP, Windows 7, Windows 8.1, Windows 10 and a spare USB port
- Micro-USB cable
- Munich GUI v2.21 or higher

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underline refers to items from the Windows operating system.

## Procedure

The Pmod board is fully assembled and tested. Follow the steps below to verify board operation: If the USB2PMB1# or USB2PMB2# or USB2GPIO# adapter is used, the user can  download  software  by  following  the  steps  below  to get started. In this description the USB2PMB2# adapter is used:

- 1) Visit www.maximintegrated.com/ to download the latest version of the Munich\_GUI software, version 2.21 or later, Munich\_GUISetupV2.21.ZIP.
- 2) Save the software to a temporary folder. Unzip the .ZIP file and double-click the .EXE file to run the in -staller. A message box asking Do you want to allow the following program to make changes to this computer? might appear. If so, click Yes .
- 3) The installer includes the drivers for the hardware and software. Follow the instructions on the installer and once complete, click Finish . The default location of the software is in the program files directory.
- 4) Connect the MAX22190PMB# Pmod connector X1 to the connector on USB2PMB2#.
- 5) Connect the USB2PMB2# to the PC with the MicroUSB cable. The MAX22190PMB# is powered by USB. The READYB LED (yellow) and FAULTB LED (red) are on.

Evaluates: MAX22190

- 6) Once the hardware is ready to use, launch the Mu -nich software. The status bar in the GUI should dis -play Disconnected in the bottom right-hand corner. Go to the Device tab to select the MAX22190PMB . See Figure 3 .
- 7) Click the button Connect and observe that after clicking Connect button, the FAULTB LED (red) is off.
- 8) In the Sample box select Read Continuously . Munich GUI will constantly monitor digital inputs and show the logic level.
- 9) Turn on Wire Break detection on all Pins . Munich GUI will monitor if the inputs are connected to the sensor input cables. If nothing is connected to the X2 connector, all inputs are shown as low , and all Wire Break boxes are shown in red. See Figure 5 . On the MAX22190PMB# board, the READYB and FAULTB LEDs are both on.
- 10)  Connect the negative output of the DC voltage supply to X2 Pin 2. Connect the positive output of the DC voltage supply to X2 Pin 1. Set the DC voltage supply output to 24V, and then enable the output. Observe that LED1 (green) should be turned on, and the Munich GUI should show high on IN1, and IN1 Wire Break box should disappear. See Figure 6 . Note: X2 Pin 2, 4, 6, 8, 10, 12, 14, 16 (inside pins) are all connected to GND. X2 Pin 1, 3, 5, 7, 9, 11, 13, 15 (outside pins) are connected to IN1 - IN8 respectively. See MAX22190PMB# Schematics .
- 11)  Connect the positive output of the DC voltage supply to X2 Pin 3. Observe that LED2 (green) should be turned on, and the Munich GUI should show high on IN2, and IN2 Wire Break box should disappear. See Figure 7 .

Note: On connector X2, the GND pins are next to the input pins. When connect 24V to the input pins, care should be taken not to connect to the GND pins, in case a short is created on the board and voltage supply .

- 12) Repeat the step 11 to X2 Pin 5, 7, 9, 11, 13, 15 to verify the functionality of IN3, IN4, IN5, IN6, IN7 and IN8.

Figure 2. MAX22190PMB# with USB2PMB2# Adapter

<!-- image -->

## Detailed Description of Hardware

The MAX22190 is an IEC 61131-2 compliant, Industrial Digital Input (DI) device that translates eight, 24V digital industrial inputs to a serial bit stream which is read via SPI interface.  MAX22190PMB#  only  supports  sensors  that source current - refer to MAX22190 datasheet for details. The MAX22190 can be powered with a 24V 'Field Supply' or alternatively using a 3.0 - 5.5V supply connected to the VDD pin. This module takes advantage of this feature to avoid the need for an external 24V supply. The VDD24 pin must be left floating (not connected). For ease of use this module only supports a subset of the MAX22190 features - for greater flexibility refer to the MAX22190 EV kit.

The  MAX22190PMB#  hardware  provides  everything needed  to  quickly  evaluate  the  MAX22190  using  the 'PMOD'. An optional USB2PMB2# module can be used with  the  Munich  GUI  to  provide  the  USB-to-MAX22190 interface  to  control  the  MAX22190.  The  USB2PMB2# adapter  provides  a  3.3V  output  from  the  USB  interface providing VDD to MAX22190.

This  module  does  not  feature  galvanic  isolation.  If the  user  wishes  to  isolate  the  module,  then  select  the USB2GPIO# adapter and use it with the USB2GPIOISO# isolation module. Both modules work seamlessly with the Munich GUI.

If the user wishes to perform EMC Standard Compliance  tests,  such  as  IEC  61000-4-x,  refer  to the  MAX22190EVKIT#,  which  is  designed  to  support these  tests.  The  MAX22190PMB#  is  designed  for  easy prototyping  and  software  development  and  does  not include the external components such as TVS diodes.

## Input Channels

The MAX22190 has eight inputs which are configured to meet IEC 61131-2 Types 1, 3 Digital Inputs. Resistor R10 sets the input current limit and in conjunction with series input  resistors  R1  -  R8  provide  the  correct  voltage  and current trip points. Table 1 shows the pinout for connector X2. Each input channel has an associated LED (LED1 LED8) to provide a visual indication for the state of the digital input. Another feature of MAX22190 is the ability to detect wire-break condition at each input to help diagnose if a sensor wiring is faulty (disconnected). Resistor R9 is used to set the nominal 'break current' at 100µA.

## Diagnostic Features

The  MAX22190  has  many  built-in  diagnostic  features to  support  fault-tolerant  applications.  This  includes  wirebreak detection, voltage supply monitors, overtemperature monitors and CRC for the SPI interface communications.

FAULT is  an  open-drain  output  that  is  used  to  notify  the host processor of a fault. When enabled, FAULT goes low to indicate that one or more of the flags in the FAULT1 and FAULT2 registers have been set. Refer to the MAX22190 data sheet for further details of the fault conditions and flags.

The GUI will show Wire-Break if the button for wire-break detection is on. The FAULTB LED will be on when either a  POR  or  fault  condition  (wire-break),  is  detected.  The READYB LED should always be on, showing the device is  ready to use. The GUI also shows Over Temperature based on the fault ALRMT1 in the FAULT1 register; provid -ed the Temp Fault button is enabled, the GUI will indicate a  fault  condition  when  the  IC  die  temperature  exceeds 115°C. For details of other over temperature faults, refer to the MAX22190 data sheet and the MAX22190EVKIT#.

## SPI Interface

The MAX22190 has an SPI-compatible interface used to read input data, read diagnostic data, and configure all of the registers. The interface can be operated in one of four modes as controlled by the strapping inputs M0 and M1. For this module M0 is tied high and M1 is tied low mean -ing  the  frame  length  is  16-bits,  CRC  mode  is  disabled, and Daisy Chain is not enabled. It is possible to change the  SPI  mode  by  reconfiguring  R11-R14  resistors,  see MAX22190PMB# Schematics .  If  the  user  changes  R11R14 settings, they cannot use Munich GUI anymore and will need to develop their own software to support other SPI  modes.  Please  refer  to  MAX22190  datasheet  for detailed information on all SPI modes of operation.

Note that this SPI interface has no galvanic isolation. If isolation is required for an end application, please refer to a companion product MAX14483 Digital Isolator which is optimized to support MAX22190.

## Table 1. MAX22190PMB# X2 Connector Pinout

| X2 PIN                     | CONNECTION   |
|----------------------------|--------------|
| 1                          | IN1          |
| 3                          | IN2          |
| 5                          | IN3          |
| 7                          | IN4          |
| 9                          | IN5          |
| 11                         | IN6          |
| 13                         | IN7          |
| 15                         | IN8          |
| 2, 4, 6, 8, 10, 12, 14, 16 | GND          |

## MAX22190PMB#

## PMOD Style Connector

The  MAX22190PMB#  can  plug  directly  into  a  Pmodcompatible port through X1. Note that the pin definitions are  determined by the USB2PMB2# adapter and, if the user wishes to use this board with their own host, they must  configure  the  microcontroller  or  FPGA  to  match MAX22190 signals. For more information on the interface and control, refer to the MAX22190 IC data sheet.

## Detailed Description of Software

For  easy  development  and  testing,  Maxim  provide  our Munich GUI which supports a number of different PMOD boards using low cost USB adapters also available from Maxim.  For  MAX22190PMB#  use  Munich  GUI  version 2.21 or later.

Evaluates: MAX22190

## Connect to Hardware

The Device menu has options to search and connect to the hardware (see Figure 3). Select MAX22190PMB. Use the Scan Adapters option  to  search  for  the  USB2PMB modules  connected  to  the  PC.  If  modules  are  found, the  serial  numbers  of  the  modules  are  listed  in  the USB2PMBs menu item. Select the serial number in the USB2PMBs list to connect the software to communicate with that module. The software can only communicate to one module at a time.  Select Connect and  notice  how status changes from Disconnected to Connected in the lower-right area of the GUI (see Figure 4 ).

Figure 3. MAX22190PMB# Software (Munich GUI Device Menu)

<!-- image -->

Figure 4. MAX22190PMB# connected in Munich GUI Device Wire Break Disabled

<!-- image -->

## Reading Input Channels

Select Read Continuously to make the GUI continuously monitor  digital  inputs  and  show  the  logic  level.  Turn  on Wire  Break  detection  on  all  input  Pins .  Munich  GUI will  monitor  if  the  inputs  are  connected  to  the  sensor input  cables.  If  nothing  is  connected  to  the  X2  connec-

tor,  all  inputs  are  shown  as Low ,  and  all Wire  Break boxes are shown in red (see Figure 5 ). At power-up the MAX22190PMB# board, the READYB and FAULTB LEDs are both on. FAULTB shows power-on-reset detected and should turn off after the first read operation.

Figure 5. MAX22190PMB# Software All Inputs Floating

<!-- image -->

Connect the negative output of the DC voltage supply to X2 Pin 2. Connect the positive output of the DC voltage supply  to  X2  Pin  1.  Set  the  DC  voltage  supply  output to 24V, and then enable the output. Observe that LED1

(green) should be turned on, and the Munich GUI should show High on  IN1,  and  IN1 Wire  Break box  should disappear (see Figure 6 ).

Figure 6. MAX22190PMB# Software IN1 High

<!-- image -->

## MAX22190PMB#

Connect the positive output of the DC voltage supply to X2 Pin 3. Observe that LED2 (green) should be turned on,

and the Munich GUI should show High on IN2, and IN2 Wire Break box should disappear (see Figure 7 ).

Figure 7. MAX22190PMB# Software IN2 High

<!-- image -->

## Ordering Information

| PART         | TYPE              |
|--------------|-------------------|
| MAX22190PMB# | Peripheral Module |

## MAX22190PMB# Bill of Materials

| ITEM   | REF_DES      | DNI/DNP   |   QTY | MFG PART #                           | MANUFACTURER              | VALUE             | DESCRIPTION                                                                                                                                           | COMMENTS   |
|--------|--------------|-----------|-------|--------------------------------------|---------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C9, C11, C13 | -         |     3 | CC0603KRX7R0BB104                    | YAGEO                     | 0.1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                           |            |
| 2      | C10, C14     | -         |     2 | C2012X7S2A105K125; GRJ21BC72A105KE11 | TDK;MURATA                | 1UF               | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                                                             |            |
| 3      | C12          | -         |     1 | UMK107AB7105KA                       | TAIYO YUDEN               | 1UF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                              |            |
| 4      | FAULTB       | -         |     1 | LTST-C193KRKT-2A                     | LITE-ON ELECTRONICS INC.  | LTST-C193KRKT-2A  | DIODE; LED; EXTRA THIN; EXTRA BRIGHT; RED; SMT (0603); VF=2.2V; IF=0.002A                                                                             |            |
| 5      | LED1-LED8    | -         |     8 | LTST-C193KGKT-5A                     | LITE-ON ELECTRONICS INC.  | LTST-C193KGKT-5A  | DIODE; LED; STANDARD; YELLOW-GREEN; SMT (0603); PIV=1.9V; IF=0.005A; -55 DEGC TO +85 DEGC                                                             |            |
| 6      | R1-R8        | -         |     8 | CRCW12061K50FKEAHP                   | VISHAY DALE               | 1.5K              | RES; SMT (1206); 1.5K; 1%; +/-100PPM/DEGC; 0.75W                                                                                                      |            |
| 7      | R9           | -         |     1 | ERJ-2RKF2402X                        | PANASONIC                 | 24K               | RESISTOR; 0402; 24K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                |            |
| 8      | R10          | -         |     1 | ERJ-2RKF7501                         | PANASONIC                 | 7.5K              | RESISTOR; 0402; 7.5K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                |            |
| 9      | R11, R13     | -         |     2 | ERJ-2GE0R00X                         | PANASONIC                 |                   | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                |            |
| 10     | R15, R16     | -         |     2 | ERJ-2RKF1002                         | PANASONIC                 | 10K               | RESISTOR; 0402; 10K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                |            |
| 11     | R17-R23      | -         |     7 | ERJ-2GEJ220X                         | PANASONIC                 |                   | 22 RESISTOR; 0402; 22 OHM; 5%; 200PPM; 0.10W; METAL FILM                                                                                              |            |
| 12     | READYB       | -         |     1 | LTST-C193KSKT-5A                     | LITE-ON ELECTRONICS INC.  | LTST-C193KSKT-5A  | DIODE; LED; YELLOW; SMT (0603); VF=2V; IF=0.005A                                                                                                      |            |
| 13     | U1           | -         |     1 | MAX22190ATJ+                         | MAXIM INTEGRATED          | MAX22190ATJ+      | EVKIT PART-IC; OCTAL INDUSTRIAL DIGITAL INPUT WITH DIAGNOSTICS; PACKAGE OUTLINE: 21-0140; PACKAGE CODE: T3255+6; LAND PATTERN NO.: 90-0603; TQFN32-EP |            |
| 14     | X1           | -         |     1 | TSW-106-08-S-D-RA                    | SAMTEC                    | TSW-106-08-S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS;                                                                                             |            |
| 15     | X2           | -         |     1 | PBC08DAAN                            | SULLINS ELECTRONICS CORP. | PBC08DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65 DEGC TO +125 DEGC                                                                     |            |
| 16     | PCB          | -         |     1 | MAX22190PMB_DEMO_A                   | MAXIM                     | PCB               | PCB:MAX22190PMB_DEMO_A                                                                                                                                | -          |
| 17     | C1-C8        | DNP       |     0 | GCM155R72A102KA37                    | MURATA                    | 1000PF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                    |            |
| 18     | R12, R14     | DNP       |     0 | ERJ-2GE0R00X                         | PANASONIC                 |                   | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                |            |
| TOTAL  | TOTAL        | 41        |    41 | 41                                   | 41                        | 41                | 41                                                                                                                                                    | 41         |

Evaluates: MAX22190

## MAX22190PMB# Schematics

<!-- image -->

## MAX22190PMB# PCB Layout Diagrams

<!-- image -->

MAX22190PMB#-Top Silkscreen

MAX22190PMB#-Top

<!-- image -->

MAX22190PMB#-Internal 2

<!-- image -->

## Evaluates: MAX22190

<!-- image -->

MAX22190PMB#-Internal 3

MAX22190PMB#-Bottom

<!-- image -->

MAX22190PMB#-Bottom Silkscreen

<!-- image -->

## MAX22190PMB#

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/18            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

©

Evaluates: MAX22190