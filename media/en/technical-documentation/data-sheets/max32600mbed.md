<!-- lastmod 2022-08-03 -->
## MAX3260MBED

## General Description

The MAX32600MBED provides a convenient platform for evaluating  the  capabilities  of  the  MAX32600  microcontroller.  The  MAX32600MBED  also  provides  a  complete, functional  system  ideal  for  developing  and  debugging applications.

The MAX32600MBED includes a MAX32600 Cortex ® -M3 microcontroller, prototyping area with adjacent access to precision analog front end (AFE) connections, I/O access through Arduino™-compatible connectors, additional I/O access through 100mil x 100mil headers, USB interface, and other general-purpose I/O devices.

## Kit Contents

- MAX32600MBED board with MAX32600 microcontroller
- USB Standard-A to Micro-B adapter cable (for connecting on-board HDK to a PC)
- Quick Start Guide

## Block Diagram

<!-- image -->

Cortex is a registered trademark of ARM Limited.

Arduino is a registered trademark of Arduino, LLC.

ARM is a registered trademark and registered service mark of ARM Limited.

mbed is a registered trademark of ARM Limited.

## ARM  mbed Enabled Development Platform

## Benefits and Features

- On-Board ARM ®  mbed™ Hardware Development Kit (HDK) Interface Provides Quick Connection to Toolchains
- Arduino-Compatible Connectors Provide Connectivity to Existing Component Boards
- Prototyping Area Allows Construction of User Circuits in Close Proximity to Precision AFE I/O
- General-Purpose Pushbutton Switches and LEDs Allow for On-Board Tactile and Visual Interaction
- Serial Peripheral Interface (SPI) and Inter-Integrated Circuit (I 2 C) Connectivity on a 2 x 6 Header Provide Connectivity to Existing Evaluation Modules
- USB Micro-B Connection to MAX32600 USB Device Controller Provides 12Mbps User Data Channel

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX32600MBED

## Detailed Description

The MAX32600MBED board is general purpose in nature. However, the ability to access the majority of I/O signals allow  for  easy  evaluation  of  the  MAX32600.  This  section describes each major function or component on the MAX32600MBED.

## Board Power

The MAX32600MBED can be powered by either of the USB  Micro-B  connectors  or  an  external  source:  VIN, V5.0, or V3.3.

## HDK USB Supply

Power supplied from the HDK USB connector, CN2, shall be limited to 500mA. Only the HDK USB connector, CN2, powers the HDK circuitry. This supply is regulated to supply the HDK\_V3.3 rail and is also connected to the V5.0 rail through a forward biased diode. From the V5.0 rail, it is regulated to supply V3.3.

## MAX32600 USB Device Interface Supply

Power supplied from the MAX32600 USB device interface connector, CN1 is limited to 500mA. This supply is connected to the V5.0 rail  through  a  forward  biased  diode. From the V5.0 rail, it is regulated to supply V3.3.

## External Supply VIN

Power  supplied  from  the  VIN,  J4  pin  8,  is  regulated  to supply the V5.0 rail. The voltage input range for this input is 5V to 12V DC.

## External Supplies V5.0 and V3.3

Power supplied by V5.0, J4 pin 5, is connected directly to the V5.0 rail. Likewise, power supplied by V3.3, J4 pin 4, is connected directly to the V3.3 rail.

## Current Monitoring

Jumper  JP4  provides  a  convenient  current  monitoring point for V3.3.

## Pushbuttons

Two pushbuttons are available for application use: SW2 and  SW3  are  connected  to  port  pins  P6.4  and  P6.5, respectively.  Pushbuttons  are  normally  open;  therefore, provide a logic 0 when depressed. Firmware defines the action taken on switch closure.

Pushbutton SW4 provides a power-on reset function for the MAX32600 by asserting the RSTN input.

## USB

The  MAX32600  provides  an  integrated  USB2.0  Fullspeed  interface  (12Mbps).  This  interface  is  accessed through the USB Micro-B connector, CN1.

## LEDs

Four  LEDs  are  available  for  application  use:  D4  (yellow), D5 (red), D6 (blue) and D7 (green) are connected to  MAX32620  GPIO  pins  P7.0,  P7.1,  P6.7,  and  P6.6, respectively. LED GPIOs should be configured as opendrain  due  to  3.3V  LED  source  voltages. An  LED  illuminates when the appropriate GPIO pin is driven low.

Two  power  supply  status  LEDs,  D9  and  D10,  are  connected to supply rails V3.3 and V5.0, respectively.

## Prototyping Area

An area for adding customer-specific circuitry is provided. This matrix is on 100mil spacing and is usable for solder or  wire-wrap  construction.  Power  and  ground  rails  are conveniently located above and below this area.

## Component List, Schematic, PCB

See  the  following  links  for  component,  schematic,  and PCB information:

- MAX32600MBED BOM
- MAX32600MBED Schematic
- MAX32600MBED PCB Layout

## Reference Material

- MAX32600 Data Sheet
- MAX32600 User Guide
- [MAX32600MBED mbed Platform Page](https://developer.mbed.org/platforms/MAX32600mbed/)

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX32600MBED# | EV Kit |

# DenotesRoHS compliant.

## ARM mbed Enabled Development Platform

## MAX3260MBED

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/15           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values  min and max limits shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

## ARM  mbed Enabled Development Platform

Rev 0; 10/15

MAX32600 MBED EVKIT BILL OF MATERIALS

| Item # Quantity Designator                                | Footprint                     | Comment                 | Manufacture Name                         | Part Number                      | Description                                                                | Vendor Vendor Part Number                      |
|-----------------------------------------------------------|-------------------------------|-------------------------|------------------------------------------|----------------------------------|----------------------------------------------------------------------------|------------------------------------------------|
| 1 6 C1, C3, C16, C17, C41, C47                            | 0.1uF                         |                         | Samsung Electro-Mechanics America, Inc   | CL10B104KO8NNNC                  | CAP CER 0.1UF 16V 10% X7R 0603                                             | Digikey 1276-1005-2-ND                         |
| 2 1 C2                                                    | CAP0603-3D CAP0603-3D         | 30pF                    | Samsung Electro-Mechanics America, Inc   | CL10C300JB8NNNC                  | CAP CER 30PF 50V 5% NP0 0603                                               | Digieky 1276-1021-1-ND                         |
| 3 4 C4, C5, C18, C19                                      | CAP0603-3D                    | 27pF                    | Samsung Electro-Mechanics America, Inc   | CL10C270JB8NNNC                  | CAP CER 27PF 50V 5% NP0 0603                                               | Digikey 1276-1086-2-ND                         |
| 4 11 C6, C11, C22, C23, C24, C25, C29, C30, C34, C36, C37 | CAP0402-3D                    | 1.0uF                   | Samsung Electro-Mechanics America, Inc   | CL05A105KQ5NNNC                  | CAP CER 1UF 6.3V 10% X5R 0402                                              | Digikey 1276-1010-2-ND                         |
| 5 7 C7, C9, C10, C13, C14, C20, C31                       | CAP0402-3D                    | 0.1uF                   | Samsung Electro-Mechanics America, Inc   | CL05A104KQ5NNNC                  | CAP CER 0.1UF 6.3V 10% X5R 0402                                            | Digikey 1276-1442-2-ND                         |
| 6 1 C8                                                    | CAP0402-3D                    | 0.01uF                  | Samsung Electro-Mechanics America, Inc   | CL10B103KB8NCNC                  | CAP CER 10000PF 16V 10% X7R 0402                                           | Digikey 1276-1051-2-ND                         |
| 7 3 C12, C43, C48                                         | CAP0805-3D                    | 10uF                    | TDK Corporation                          | C2012X5R1A106K125AB              | CAP CER 10UF 10V 10% X5R 0805                                              | Digikey 445-7660-2-ND                          |
| 8 1 C15                                                   | CAP0603-3D                    | 330pF                   | Murata Electronics North America         | GRM1885C1H331JA01D               | CAP CER 330PF 50V 5% NP0 0603                                              | Digikey 490-1439-1-ND                          |
| 7 C21, C26, C27, C28, C32, C33, C35                       | CAP0603-3D                    | 4.7uF                   | Samsung Electro-Mechanics America, Inc   | CL10B475KQ8NQNC                  | CAP CER 4.7UF 6.3V 10% X7R 0603                                            | Digikey 1276-2087-2-ND                         |
| 9 10 2 C38, C44                                           | CAP0805-3D                    | 22uF                    | TDK Corporation                          | C2012X5R1C226M085AC              | CAP CER 22UF 16V 20% X5R 0805                                              | Digikey 445-14374-1-ND                         |
| 11 2 C39, C45                                             | CAP0603-3D                    | 0.01uF                  | Samsung Electro-Mechanics America, Inc   | CL10B103KB8NCNC                  | CAP CER 10000PF 50V 10% X7R 0603                                           | Digikey 1276-1921-2-ND                         |
| 12 2 C40, C46                                             | CAP0805-3D                    | 2.2uF                   | Murata Electronics North America         | GRM21BF51C225ZA01L               | CAP CER 2.2UF 16V Y5V 0805                                                 | Digikey 490-1741-1-ND                          |
| 13 1 C42                                                  | CAP0805-3D                    | 4.7uF                   | Samsung Electro-Mechanics America, Inc   | CL21A475KPFNNNE                  | CAP CER 4.7UF 10V 10% X5R 0805                                             | Digikey 1276-1259-2-ND                         |
| 14 2 CN1, CN2                                             | USBMICROB-3D                  | Micro USB               | FCI                                      | 10103594-0001LF                  | USB MICRO BTOPMOUNT                                                        | Digikey 609-4050-1-ND                          |
| 15 4 D1, D4, D9, D10                                      | 0603LED-3DRED                 | RED                     | Lite-On Inc                              | LTST-C193KRKT-5A                 | LED RED RECT CLEAR 0603                                                    | Digikey 160-1830-1-ND                          |
| 16 2 D2, D5                                               | 0603LED-3DBLUE                | BLUE                    | OSRAM Opto Semiconductors Inc            | LB Q39G-L2N2-35-1                | LED CHIPLED BLUE 470NM 0603SMD                                             | Digikey 475-2816-1-ND                          |
| 17 2 D3, D6                                               | 0603LED-3DGREEN               | GREEN                   | Dialight                                 | 598-8081-107F                    | LED INGAN GREEN CLEAR 0603SMD                                              | Digikey 350-2036-1-ND                          |
| 18 1 D7                                                   | 0603LED-3DORANGE              | YELLOW                  | Wurth Electronics Inc                    | 150060YS75000                    | WL-SMCW SMDCHIP LED WATERCLEAR 120mcd                                      | Digikey 732-4981-1-ND                          |
| 19 2 D8, D11                                              | DIODE2223-3D                  | ES1B-E3/5AT             | Vishay Semiconductor Diodes Division     | ES1B-E3/5AT                      | DIODE UFAST 100V 1A DO214AC                                                | Digikey ES1B-E3/5ATGICT-ND                     |
| 20 2 FB1, FB2                                             | 0805FB-3D                     | BLM21PG221SN1D          | Murata Electronics North America         | BLM21PG221SN1D                   | FERRITE CHIP 220 OHM0805                                                   | Digikey 490-1054-1-ND                          |
| 21 1 J3                                                   | SIP10                         | CON10                   | Sullins Connector Solutions              | PPPC101LFBN-RC                   | CONN HEADER FMALE 10POS .1" GOLD                                           | Digikey S7043-ND                               |
| 22 2 J4, J6                                               | SIP8                          | CON8                    | Sullins Connector Solutions              | PPPC081LFBN-RC                   | CONN HEADER FEMALE 8POS .1" GOLD                                           | Digikey S7041-ND                               |
| 23 1 J5                                                   | SIP6                          | CON6                    | Sullins Connector Solutions              | PPPC061LFBN-RC                   | CONN HEADER FEMALE 6POS .1" GOLD                                           | Digikey S7039-ND                               |
| 24 1 J11                                                  | DIH10X2                       | PORT2&3                 | FCI                                      | 68602-220HLF                     | CONN HEADER 20POS .100 STR 15AU                                            | Digikey 609-3375-ND                            |
| 25 2 J7                                                   | SIP2                          |                         |                                          |                                  |                                                                            |                                                |
| 26 3 J13, J15, J16                                        | DIH8X2                        | PORT5,PORT1&4           | FCI                                      | 68602-216HLF                     | CONN HEADER 16POS .100 STR 15AU                                            | Mouser "609-3374-ND" "649-68602-216HLF"        |
| 27 1 J17                                                  | DIH6X2                        | PORT0                   | Sullins Connector Solutions              | PPPC062LJBN-RC                   | CONN FEMALE 12POSDL .1" R/A GOLD                                           | Digikey S5559-ND                               |
| 28 1 J18                                                  | DIH3x2                        | PORT6                   | FCI                                      | 68602-206HLF                     | CONN HEADER 6POS .100 STR 15AU                                             | Digikey 609-3370-ND                            |
| 29 2 JP3, JP4                                             | lengths SIP2                  | JUMPER                  | Sullins Connector Solutions              | PBC36SAAN                        | CONN HEADER .100 SINGL STR 36POS                                           | Digikey S1011E-36-ND                           |
| 30 1 Q1                                                   | 16001-3D                      | 2N7002                  | NXP Semiconductors                       | 2N7002BK,215                     | MOSFET N-CH 60V 350MA SOT23                                                | Digikey 568-5981-1-ND                          |
| 31 1 Q2                                                   | SOT523-3D                     | MMBT3904                | Diodes Incorporated                      | MMBT3904T-7-F                    | TRANS NPN 40V 0.2A SOT523                                                  | Digikey MMBT3904T-FDICT-ND                     |
| 32 1 R1                                                   | 0603-3D                       | 20k                     | Rohm Semiconductor                       | MCR03ERTF2002                    | RES SMD20K OHM1%1/10W 0603                                                 | Digikey RHM20.0KCFTR-ND                        |
| 33 2 R2, R4                                               | 0603-3D                       | 500k                    | Vishay Dale                              | CRCW0603499KFKEA                 | RES SMD499K OHM1%1/10W 0603                                                | Digikey 541-499KHTR-ND                         |
| 34 5 R3, R12, R21, R26,                                   | 0603-3D                       | 1K                      | Yageo                                    | RC0603FR-071KL                   | RES SMD1K OHM1%1/10W 0603                                                  | Digikey 311-1.00KHRTR-ND                       |
| R27 35 2 R5, R14                                          | 0603-3D                       | 1.5K                    | Panasonic Electronic Components          | ERJ-3EKF1501V                    | RES SMD1.5K OHM1%1/10W 0603                                                | Digikey P1.50KHTR-ND                           |
| 36 8 R6, R9, R10, R16, R17, R19, R23, R24                 | 0603-3D                       | 10K                     | Panasonic Electronic Components          | ERJ-3EKF1002V                    | RES SMD10K OHM1%1/10W 0603 RES SMD68OHM1%1/10W0603                         | Digikey P10.0KHTR-ND                           |
| 37 1 R7                                                   | 0603-3D                       | 68 ohm                  | Samsung Electro-Mechanics America, Inc   | RC1608F680CS                     |                                                                            | Digikey 1276-4550-1-ND                         |
| 38 3 R8, R30, R31                                         | 0603-3D                       | 100 ohm                 | Samsung Electro-Mechanics America, Inc   | RC1608F101CS                     | RES SMD100OHM1%1/10W 0603 RES SMD4.7K OHM1%1/10W 0603                      | Digikey 1276-3482-2-ND Digikey RHM4.70KCFTR-ND |
| 39 1 R11                                                  | 0603-3D 0603-3D               | 4.7K 4.02K              | Rohm Semiconductor                       | MCR03ERTF4701                    | RES SMD4.02K OHM0.5% 1/10W                                                 | Digikey 311-4.02KDCT-ND                        |
| 40 1 R18                                                  | 0402-3D                       | DNI                     | Yageo N/A                                | RT0603DRD074K02L N/A             | N/A                                                                        | N/A N/A                                        |
| 41 1 R25 42 1 R13, R15, R20, R22, R25                     | 0603-3D                       | DNI                     | N/A                                      | N/A                              | N/A                                                                        | N/A N/A                                        |
| 43 2 R28, R29                                             | 0603-3D                       | 10 ohm                  | Panasonic Electronic Components          | ERJ-3EKF10R0V                    | RES SMD10OHM1%1/10W0603                                                    | Digikey P10.0HTR-ND                            |
| 44 2 R33, R35                                             |                               |                         |                                          |                                  |                                                                            |                                                |
|                                                           | 0603-3D                       | 0Ohm                    | Panasonic Electronic Components          | ERJ-3GEY0R00V                    | RES SMD0.0OHMJUMPER1/10W                                                   | Digikey P0.0GTR-ND                             |
| 45 2 RT1, RT2                                             | 1206POLYFUSE-3D               | PTC Fuse                | Bourns Inc.                              | MF-NSMF012-2                     | PTC RESETTABLE .12A 30V 1206                                               | Digikey MF-NSMF012-2CT-ND                      |
| 46 1 SW1                                                  | SIP2                          | DNI                     | N/A                                      | N/A                              | N/A                                                                        | N/A N/A                                        |
| 47 3 SW2, SW3, SW4                                        | RESET11-3D                    | PUSH                    | C&K Components                           | KSR221GLFS                       | SWITCH TACTILE SPST-NO 0.05A 32V                                           | Digikey 401-1703-1-ND                          |
| 48 1 U1                                                   | BGA121 8x8mm 0.65p SOT23-5-3D | MAX32550 NC7SZ32        | Maxim Integrated Fairchild Semiconductor | MAX32550                         | Secure Cortex-M3 Flash Microcontroller IC GATE OR 1CH 2-INP SOT-23-5       | N/A N/A Digikey NC7SZ32M5XCT-ND                |
| 49 1 U2 50 1 U3                                           | VFSOP8                        | SN74LVC3G34             | Texas Instruments                        | NC7SZ32M5X                       | IC BUFFER TRPL NON-INV US8                                                 | Digikey 296-13286-1-ND                         |
|                                                           |                               |                         |                                          | SN74LVC3G34DCUR                  |                                                                            |                                                |
| 51 1 U4                                                   | TSSOP20                       | SN74LVC541A             | Texas Instruments                        | SN74LVC541ADBR                   | IC BUFF/DVR TRI-ST 8BIT 20SSOP                                             | Digikey 296-8518-1-ND                          |
| 52 1 U5                                                   | WASPBGA192 TDFN8 3MM.65T      | MAX32600 MAX16910CATA8+ | Maxim Integrated                         | MAX32600                         | Secure Sensor Measurement Microcontroller                                  | N/A N/A                                        |
| 53 1 U6 54 2 U7, U9                                       | SOT23-5-3D                    | MAX8887EZK33+T          | Maxim Integrated                         | MAX16910CATA8/V+                 | Linear Regulator 3V/5V/ADJ 200mA LDO 300mA Linear Regulator 3.3v version   | N/A N/A                                        |
|                                                           |                               |                         | Maxim Integrated                         | MAX8887EZK33+                    |                                                                            | N/A N/A                                        |
| 55 2 U8, U10 56 2 X1, X3                                  | sot23-6-3D CRYSTAL-ABS07      | MAX3207EAUT+ 32.768KHz  | Maxim Integrated Abracon LLC             | MAX3207EAUT+ ABS07-32.768KHZ-6-T | Dual High-Speed Differential ESD-Protection IC CRYSTAL 32.768KHZ 6.0PF SMD | N/A N/A Digikey 535-11898-1-ND                 |
| 57 1 X2                                                   | CRYSTAL-ABM3X                 | 12 MHz                  | Abracon LLC                              | ABM3B-12.000MHZ-B2-T             | CRYSTAL 12MHZ 18PF SMD                                                     | Digikey 535-9116-1-ND                          |
| 58 1 X4                                                   |                               | 24MHz                   | Abracon LLC                              | ABM7-24.000MHZ-D2Y-T             | CRYSTAL 24MHZ 18PF SMD                                                     | Digikey 535-9845-1-ND                          |

<!-- image -->

COA2COA1

GND

COTP5

TP5

PITP501

PITP501

TP

COTP6

TP6

PITP601

PITP601

TP

COTP7

TP7

PITP701

PITP701

TP

COTP8

TP8

PITP801

PITP801

CN1V+

NLCN1V0

NLUSB DM

USB DM

NLUSB DP

USB DP

NLGND

GND

TP

CN1

COCN1

MAX32600 USB

8

PICN108

PICN109

PICN1013

PICN1014

PICN1015

6

9

13

14

15

PICN108

PICN109

PICN1013

PICN1014

PICN1015

6

S

S

S

S

7

6

PICN107

PICN106

10

PICN106

PICN107

Bottom layer probe pads

GND\_EARTH1

COCN2

CN2

HDK USB

8

PICN208

9

PICN2015 6

PICN209

PICN2013

PICN2014

15

13

14

PICN208

PICN209

PICN2013

PICN2014

PICN2015 6

S

S

S

S

7

6

PICN207

COTP9

TP9

PITP901

PITP901

TP

COTP10

TP10

PITP1001

PITP1001

TP

COTP11

TP11

PITP1101

PITP1101

TP

COTP12

TP12

PITP1201

NLCN2V0

CN2V+

NLHDK0USB0DM

HDK\_USB\_DM

NLHDK0USB0DP

HDK\_USB\_DP

GND

PITP1201

TP

PICN206

10

PICN206

PICN207

Bottom layer probe pads

GND\_EARTH

1

2

VCC

COC20

PIC20

2

PIC20

2

C20

0.1uF

GND

PIC2401

PIC2401

COC23

C23

1.0uF

5

PIU805

PIU805

GND

COC22

PIC2

PIC2

02

02

GND

COFB1

FB1

PIFB101

PIFB102

PIFB101

PIFB102

CORT1

RT1

BLM21PG221SN1D

PTC Fuse MF-NSMF012-2

COU8

U8

6

1

PIU806

PIU806

PIU801

PIU801

PIU804

4

PIU804

3

I/O1

I/O2

PIU803

PIU803

MAX3207EAUT+

COFB2

FB2

PIFB201

PIFB202

PIFB202

PIFB201

RT2

CORT2

BLM21PG221SN1D

PTC Fuse MF-NSMF012-2

COU10

U10

CN2V+

PICN201

PICN201

PIRT202

PIRT202

HDK\_USB\_DM

3

PICN202

PICN202

HDK\_USB\_DP

4

PICN203

PICN203

PICN204

PICN204

PICN205

5

V+

D-

D+

V- PICN205

11

PICN201

PICN2012

12

PICN201

PICN2012

PIR2902

PIR2902

PICN2010

PICN2010

6

1

PIU1006

PIU1006

PIU1001

PIU1001

PIU1004

4

I/O1

VCC

3

I/O2

PIU1004

GND

PIU1003

PIU1003

MAX3207EAUT+T

C22

1.0uF

PIU802

PIU802

2

1

2

PIRT101

PIRT101

t

CN1V+

PIRT102

PIRT102

USB DM

PICN101

PICN101

PICN102

PICN102

PICN103

3

USB DP

PICN103

4

5

PICN104

PICN104

PICN105

PICN105

V+

D-

D+

V-

11

PICN101

12

PICN1012

PICN1012

PICN1010

PICN1010

PICN101

PIR2802

PIR2802

COR28

R28

10

PIR2801

PIR2801

R29

COR29

10

PIR2901

PIR2901

PIRT201

PIRT201

t

PIC2

PIC2

01

01

PIC2301

PIC2301

PIC2302

PIC2302

V3.3

PIC20

PIC20

1

1

5

2

PIU1005

PIU1005

PIU1002

PIU1002

COC24

C24

PIC2402

PIC2402

1.0uF

PIC3101

PIC3101

PIC3102

PIC3102

C21

COC21

PIC2102

PIC2102

4.7uF

NLVLCD

VLCD

NLVLCD1

VLCD1

NLVLCD2

VLCD2

NLVLCDADJ

VLCDADJ

PIC2501

PIC2501

COC25

C25

PIC2502

PIC2502

1.0uF

NLVBUS

VBUS

COC31

C31

0.1uF

COD8

D8

PID802

PID801

PID801

PID802

ES1B-E3/5AT

VBUS

PIC4101

PIC4101

COC41

PIC4102

PIC4102

C41

0.1uF

GND

HDK\_VBUS

D11

COD11

PID1102

PID1101

PID1102

PID1101

ES1B-E3/5AT

COC47

C47

0.1uF

PIC4701

PIC4701

PIC4702

PIC4702

PIC2101

PIC2101

PIC3201

PIC3201

L10

U5B

COU5B

PIU50L10

PIU50L10

V9

VDD

PIU50V9

PIU50V9

V6

PIU50V6

PIU50V6

V5

PIU50V5

PIU50V5

U5

T5

PIU50U5

PIU50U5

PIU50T5

PIU50T5

T7

PIU50T7

PIU50T7

COC32

C32

PIC3202

PIC3202

4.7uF

CPU POWER

VDDA3

VRTC

VLCD

VLCD1

VLCD2

VLCD ADJ

VBUS (USB)

MAX32600

VIN

GND

COC44

C44

22uF

VDDA3ADC

VDDA3DAC

VDDA3REF

VREFADC

VREFDAC

VREFADJ

VREG18

VREG18

VDDB (USB)

VDDIO

VDDIO

COU6

U6

PIU601

IN

1

2

PIU601

PIU602

PIU602

3

PIU603

PIU603

7

EP

1

3

ENABLE

SET

GND

PIU50L9

L9

PIU50L9

M3

PIU50M3

PIU50M3

C8

PIU50C8

PIU50C8

H8

PIU50H8

PIU50H8

K8

PIU50K8

PIU50K8

J8

PIU50J8

PIU50J8

H9

PIU50H9

PIU50H9

K11

PIU50K11

PIU50K11

L11

PIU50L11

PIU50L11

T8

PIU50T8

VDDB

PIU50T8

PIU50H11

H11

VDDIO

PIU50H11

NLVDDIO

J11

PIC3

01

PIC3

01

PIC3

02

PIC3

02

NLVDDB

PIC2601

PIC2601

PIC2602

PIC2602

COC33

C33

4.7uF

GND

OUT

8

PIU608

PIU608

SETOV

RESET

PIU607

PIU607

PIU60EP

EP

TIMEOUT

PIU60EP

MAX16910CATA8+

COU9

U9

PIU901

VIN

PIU901

PIU903

SHDN

PIU903

PIU902

GND

BP

PIU902

PIU904

PIU905

5

PIU905

4

PIU904

MAX8887EZK33+T

2

OUT

6

PIU606

PIU606

4

5

PIU604

PIU604

PIU605

PIU605

COC45

C45

0.01uF

PIU50J11

PIU50J11

PIC4

PIC4

PIC4

PIC4

01

01

02

02

NLVDDA3

VDDA3

NLVREFADC

VREFADC

NLVREFDAC

VREFDAC

NLVREFADJ

VREFADJ

PIR2501

PIR2502

COR25

R25

PIR2502

PIR2501

NLVREG18

VREG18

DNI 0 ohm

COC26

C26

4.7uF

PIC3401

PIC3401

PIC3402

PIC3402

PIC4502

PIC4502

PIC4501

PIC4501

PIC4601

PIC4601

PIC4602

PIC4602

PIC2701

PIC2701

PIC2702

PIC2702

COC34

C34

1.0uF

V5.0

PIC4201

PIC4201

COC42

C42

PIC4202

PIC4202

4.7uF

HDK\_V3.3

PIC4801

PIC4801

COC46

C46

2.2uF

COC48

C48

10uF

PIC4802

PIC4802

GND

COC27

C27

4.7uF

PIC3501

PIC3501

PIC3502

PIC3502

PID10 2

PID10 2

PID10

PID10

1

1

PIR2602

PIR2602

PIR2601

PIR2601

COR26

R26

1K

PIC2801

PIC2801

PIC2802

PIC2802

COC35

C35

4.7uF

COD10

D10

V5.0 LED

COC28

C28

4.7uF

PIC3601

PIC3601

PIC3602

PIC3602

COC36

C36

1.0uF

PIC3801

PIC3801

COC38

C38

22uF

PIC3802

PIC3802

PIC2901

PIC2901

PIC2902

PIC2902

COC29

C29

1.0uF

PIC3701

PIC3701

PIC3702

PIC3702

COU7

U7

1

3

VIN

PIU701

PIU701

PIU703

PIU703

2

C37

COC37

1.0uF

OUT

SHDN

PIU702

GND

BP

PIU704

PIU702

PIU704

MAX8887EZK33+T

PIC30

PIC30

PIC30

PIC30

1

1

2

2

COC30

C30

1.0uF

5

PIU705

PIU705

4

PIC3902

PIC3902

PIC3901

PIC3901

COC39

C39

0.01uF

PIC40

PIC40

PIC40

PIC40

1

1

2

2

COC40

C40

2.2uF

PIC4301

PIC4301

PIC4302

PIC4302

COJP4

JP4

SHUNT

PIJP401

PIJP402

PIJP401

PIJP402

COC43

C43

10uF

V3.3

PID902

PID902

PID901

PID901

PIR2702

PIR2702

COD9

D9

V3.3 LED

COR27

R27

1K

PIR2701

PIR2701

GND

GND

CPU GROUN

COU5C

U5C

A14

B14

PIU50A14

VSS

PIU50A14

PIU50B14

PIU50B14

C16

PIU50C16

PIU50C16

J9

PIU50J9

PIU50J9

J10

PIU50J10

PIU50J10

J16

K9

PIU50J16

PIU50J16

PIU50K9

PIU50K9

K10

PIU50K10

PIU50K10

T13

PIU50T13

PIU50T13

T16

PIU50T16

PIU50T16

U7

V7

PIU50U7

PIU50U7

PIU50V7

PIU50V7

H10

PIU50H10

PIU50H10

F1

F2

PIU50F1

PIU50F1

PIU50F2

PIU50F2

F3

G2

PIU50F3

PIU50F3

PIU50G2

PIU50G2

H2

PIU50H2

PIU50H2

J1

J2

PIU50J1

PIU50J1

PIU50J2

PIU50J2

J3

K2

PIU50J3

PIU50J3

PIU50K2

PIU50K2

L2

PIU50L2

PIU50L2

M1

M2

PIU50M1

PIU50M1

PIU50M2

PIU50M2

N2

P2

PIU50N2

PIU50N2

PIU50P2

PIU50P2

PIU50R1

R1

PIU50R1

R2

R3

PIU50R2

PIU50R2

PIU50R3

PIU50R3

T2

T3

PIU50T2

PIU50T2

PIU50T3

PIU50T3

PIU50T4

T4

PIU50T4

U2

U4

PIU50U2

PIU50U2

PIU50U4

PIU50U4

V2

V4

PIU50V2

PIU50V2

PIU50V4

PIU50V4

A2

A4

PIU50A2

PIU50A2

PIU50A4

PIU50A4

A8

A12

PIU50A8

PIU50A8

PIU50A12

PIU50A12

PIU50B2

B2

B4

PIU50B2

PIU50B4

PIU50B4

PIU50B5

B5

B6

PIU50B5

PIU50B6

PIU50B6

PIU50B7

B7

B8

PIU50B7

PIU50B8

PIU50B8

B9

B10

PIU50B9

PIU50B9

PIU50B10

PIU50B10

PIU50B11

B11

B12

PIU50B11

PIU50B12

PIU50B12

PIU50C2

C2

C3

PIU50C2

PIU50C3

PIU50C3

PIU50C4

C4

C12

PIU50C4

PIU50C12

PIU50C12

PIU50D2

D2

E2

PIU50D2

PIU50E2

PIU50E2

L8

VSS

VSS

VSS

VSS

VSS

VSS

VSS

VSS

VSS

VSS

VSS

VSS USB

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS ADC

VSS DAC

VSS DAC

VSS DAC

VSS DAC

VSS DAC

VSS DAC

VSS DAC

VSS DAC

VSS DAC

VSS DAC

VSS DAC

VSS DAC

VSS DAC

VSS DAC

VSS DAC

VSS DAC

VSS DAC

VSS DAC

VSS DAC

VSS DAC

PIU50L8

VSS REF

PIU50L8

MAX32600

GND

NLRSTN

R8

COR8

PIR801

RSTN

COR2

R2

500k

PIR201

PIR201

PIR401

PIR401

COR4

R4

500k

PIR802

PIR802

PIR801

100

PIR202

PIR202

PIR402

PIR402

NLTDO

TDO

NLP730TX1

P73\_TX1

NLVDDIO

VDDIO

1

3

U3

COU3

PIU301

1A

PIU301

PIU303

PIU303

6

4

2A

3A

COC1

PIC102

C1

0.1uF

PIC102

GND

VCC

PIU308

PIU308

1Y

2Y

8

7

PIU307

PIU307

5

PIU305

PIU306

PIU305

PIU306

PIU304

3Y

GND

PIU302

PIU302

PIU304

SN74LVC3G34

COU4

U4

SN74LVC541A

20

NLTSEL

TSEL

18

PIU4018

PIU4018

NLP720RX1

P72\_RX1

Q1

NLTCK

TCK

NLTMS

TMS

NLTDI

TDI

NLSRSTN

SRSTN

PIU4017

17

16

PIU4017

PIU4016

PIU4016

PIU4015

15

14

PIU4015

PIU4014

PIU4014

PIU4013

13

12

PIU4013

PIU4012

PIU4012

11

PIU4011

PIU4011

Q2

Q3

Q4

Q5

Q6

Q7

Q8

PIU4020

PIU4020

VCC

GND

PIU4010

10

PIU4010

GND

D1

D2

D3

D4

D5

D6

D7

D8

E1

E2

B\_TDO

NLB0TDO

NLB0RXD

B\_RXD

NLB0VDDIO

B\_VDDIO

PIC301

PIC301

COC3

C3

PIC302

PIC302

GND

2

B\_TSEL

NLB0TSEL

3

4

PIU403

PIU403

PIU404

PIU404

PIU405

5

6

PIU405

PIU406

PIU406

PIU407

7

8

PIU407

PIU408

PIU408

9

PIU409

PIU409

1

19

PIU401

PIU401

PIU4019

PIU4019

PIU402

PIU402

NLB0TXD

B\_TXD

NLB0TCK

B\_TCK

NLB0TMS

B\_TMS

NLB0RSTN

B\_RSTN

NLB0TDI

B\_TDI

NLB0SRSTN

B\_SRSTN

3

D

PIQ103

PIQ103

S

2

PIQ102

PIQ102

0.1uF

2

BUFFERS

HDK\_V3.3

PIC101

PIC101

V3.3

PIR10

PIR10

2

2

R10

COR10

10K

COQ1

Q1

2N7002

COR11

R11

4.7K

G1

PIR10

PIR10

PIR1

PIQ101

PIQ101

PIR1

PIR1

PIR1

1

1

01

01

02

02

NLBUFF0ENABLE

BUFF\_ENABLE

HDK\_VBUS

VREF IN -&gt;

HDK\_V3.3

1

HDK\_V3.3

5

PIU205

PIU205

PIU201

PIU201

2

PIU202

PIU202

COJ1

J1

NLHDK0V303

PIJ101

HDK\_TMS

1

PIJ101

NLHDK0TMS

PIJ102

PIJ102

NLGND

GND

NLHDK0TCK

GND

Y

PIU203

3

PIU203

GND

10

PIJ1010

PIJ1010

9

8

7

U2

COU2

NC7SZ32

4

PIU204

PIU204

HDK\_RSTIN

HDK\_TRSTN

HDK\_TDI

PIJ109

PIJ109

PIJ108

PIJ108

PIJ107

PIJ107

PIJ103

PIJ103

HDK\_TCK

PIJ104

PIJ104

2

3

4

PIJ105

5

6

PIJ106

PIJ106

HDK\_TDO

PIJ105

TAG CONNECT ARM FOOTPRINT

HDK\_V3.3

HDK\_RSTIN

NLHDK0RSTIN

TP13

TP14

COTP13

COTP14

PITP1301

PITP1301

TP

HDK\_TMS

PITP1401

PITP1401

TP

COTP15

TP15

PITP1501

PITP1501

TP

GND

NLHDK0TRSTN

HDK\_TRSTN

TP16

COTP16

PITP1601

PITP1601

TP

COTP17

TP17

PITP1701

PITP1701

TP

HDK\_TCK

NLHDK0TDI

HDK\_TDI

COTP18

TP18

PITP1801

PITP1801

TP

COTP19

TP19

PITP1901

HDK\_TDO

NLHDK0TDO

COTP20

TP20

PITP2001

PITP2001

PITP1901

TP

TP

Bottom layer probe pads

A

VCC

B

GND

PIC201

PIC201

COC2

C2

PIC202

30pF

PIR701

PIC202

PIR701

COR7

R7

68 ohm

PIR702

PIR702

HDK\_V3.3

PIR902

PIR902

COR9

R9

10K

PIR901

PIR901

COC4

C4

PIC402

PIC402

PIC401

PIC401

27pF

PIX202

PIX204

PIX202 4

COC5

C5

PIC502

PIC502

PIC501

PIC501

27pF

COJ7

J7

1

PIJ701

PIJ701

2

PIJ702

PIJ702

CON2

PIX102

PIX102

PIX101

PIX101

PIX203

PIX203

PIX201

PIX201

NLRX0

RX0

NLTX0

TX0

B\_RXD

B\_TXD

BUFF\_ENABLE

B\_TMS

B\_TCK

B\_RSTN

B\_TDI

B\_TSEL

B\_TDO

B\_SRSTN

HDK\_TDI

HDK\_TDO

HDK\_TMS

HDK\_TCK

HDK\_TRSTN

NLHDK032KIN

HDK\_32KIN

COX1

X1

32.768KHz

NLHDK032KOUT

HDK\_32KOUT

NLHDK0HFXIN

HDK\_HFXIN

COX2

X2

12 MHz

NLHDK0HFXOUT

HDK\_HFXOUT

HDK\_RSTIN

NLHDK0USB0DM

HDK\_USB\_DM

NLHDK0USB0DP

HDK\_USB\_DP

HDK\_V3.3

PIC1401

C14

COC14

PIC1401

PIC1402

PIC1402

0.1uF

GND

E4

U1

COU1

PIU10E4

PIU10E4

E5

P0.0/KBD0

PIU10E5

PIU10E5

E6

PIU10E6

PIU10E6

E7

F7

PIU10E7

PIU10E7

PIU10F7

PIU10F7

G7

PIU10G7

PIU10G7

G6

PIU10G6

PIU10G6

G5

PIU10G5

PIU10G5

E2

B4

PIU10E2

PIU10E2

PIU10B4

PIU10B4

C4

PIU10C4

PIU10C4

B3

PIU10B3

PIU10B3

C3

PIU10C3

PIU10C3

C2

C1

PIU10C2

PIU10C2

PIU10C1

PIU10C1

A1

A6

PIU10A1

PIU10A1

PIU10A6

PIU10A6

A3

PIU10A3

PIU10A3

B7

A7

PIU10B7

PIU10B7

PIU10A7

PIU10A7

A2

F5

PIU10A2

PIU10A2

PIU10F5

PIU10F5

C7

PIU10C7

PIU10C7

A8

A9

PIU10A8

PIU10A8

PIU10A9

PIU10A9

B8

A10

PIU10B8

PIU10B8

PIU10A10

PIU10A10

B9

PIU10B9

PIU10B9

A11

C9

PIU10A11

PIU10A11

PIU10C9

PIU10C9

B10

C8

PIU10B10

PIU10B10

PIU10C8

PIU10C8

B11

D9

PIU10B11

PIU10B11

PIU10D9

PIU10D9

C10

E9

PIU10C10

PIU10C10

PIU10E9

PIU10E9

PIU10C11

C11

PIU10C11

F9

PIU10F9

PIU10F9

B1

PIU10B1

PIU10B1

B2

PIU10B2

PIU10B2

C6

PIU10C6

PIU10C6

C5

H8

PIU10C5

PIU10C5

PIU10H8

PIU10H8

PIU10H9

H9

PIU10H9

A4

A5

PIU10A4

PIU10A4

PIU10A5

PIU10A5

G2

F2

PIU10G2

PIU10G2

PIU10F2

PIU10F2

PIU10G1

G1

F1

PIU10G1

PIU10F1

PIU10F1

L1

K1

PIU10L1

PIU10L1

PIU10K1

PIU10K1

PIU10J2

J2

H2

PIU10J2

PIU10H2

PIU10H2

PIU10J1

J1

H1

PIU10J1

PIU10H1

PIU10H1

L2

J4

PIU10L2

PIU10L2

PIU10J4

PIU10J4

PIU10K3

K3

F6

PIU10K3

PIU10F6

PIU10F6

PIU10J3

J3

L3

PIU10J3

PIU10L3

PIU10L3

H3

K2

PIU10H3

PIU10H3

PIU10K2

H7

PIU10K2

P0.1/KBD1

P0.2/KBD2

P0.3/KBD3

P0.4/KBD4

P0.5/KBD5

P0.6/KBD6

P0.7/KBD7

P0.8/RXD0

P0.9/TXD0

P0.10/RTS0/SC\_C4\_BYP

P0.11/CTS0/SC\_C8\_BYP

P0.12/RXD1

P0.13/TXD1

P0.14/RTS1

P0.15/CTS1

P0.16/MISO0

P0.17/MOSI0

P0.18/SCLK0

P0.19/SSEL0\_0

P0.20/SSEL0\_1

P0.21/SSEL0\_2/SC\_IO\_BYP

P0.22/SSEL0\_3/SC\_RST\_BYP

P0.23/SDA

P0.24/SCL

P0.25/MISO1

P0.26/MOSI1

P0.27/SCLK1

P0.28/SSEL1\_0

P0.29/SSEL1\_1

P0.30/SSEL1\_2/TCLK2

P0.31/SSEL1\_3/TCLK3

P2.0/VBUS\_DET

P2.1/TDI

P2.2/TDO

P2.3/TMS

P2.4/TCK

P2.5/JTRST

32K IN

32K OUT

HFXIN

HFXOUT

RSTIN

RSTOUT

USB DM

USB DP

DAC 0

ADC VREF

ADC 1

ADC 0

MCR 1N

MCR 1P

MCR 2N

MCR 2P

MCR 3N

MCR 3P

SC CLK

SC C8

SC C4

SC IO

SC RST

SC DETECT

SC VDDA

SC VCC

PIU10H7

PIU10H7

SC GND

MAX32550

## HDK IO SECTION

P1.0/TCLK0/SC\_DETECT\_BYP

P1.1/TCLK1/SC\_CLK\_BYP

P1.2/LCD\_DATA0/LCD CLK

P1.3/LCD\_DATA1/LCD HSYNC

P1.4/LCD\_DATA2/LCD VSYNC

P1.5/LCD\_DATA3/LCD VDEN

P1.6/LCD\_DATA4/LCD GREEN0

P1.7/LCD\_DATA5/LCD GREEN1

P1.8/LCD\_DATA6/LCD GREEN2

P1.9/LCD\_DATA7/LCD GREEN3

P1.10/LCD\_EN/LCD GREEN4

P1.11/LCD\_RS/LCD GREEN5

P1.12//LCD\_RW/LCD GREEN6

P1.13/MISO2/LCD GREEN7

P1.14/LCD BLUE0

P1.15/LCD BLUE1

P1.16/LCD BLUE2

P1.17/LCD BLUE3

P1.18/LCD BLUE4

P1.19/SSEL2\_2/LCD BLUE5

P1.20/SSEL2\_0/LCD BLUE6

P1.21/MOSI2/LCD BLUE7

P1.22/LCD RED0

P1.23/LCD RED1

P1.24/LCD RED2

P1.25/LCD RED3

P1.26/LCD RED4

P1.27/SSEL2\_3/LCD RED5

P1.28/SSEL2\_1/LCD RED6

P1.29/SCLK2/LCD RED7

P1.30/LCD PWREN

P1.31/LCD LEND

EXTS0 IN

EXTS0 OUT

EXTS1 IN

EXTS1 OUT

EXTS2 IN

EXTS2 OUT

EXTS3 IN

EXTS3 OUT

EXTS4 IN

EXTS4 OUT

EXTS5 IN

EXTS5 OUT

VMAIN

VBAT

VDDA

VDD

VDD

VDD

REG 1

REG 2

VSS

VSS

VSS

GNDA

E10

PIU10E10

PIU10E10

D11

PIU10D11

PIU10D11

F10

PIU10F10

PIU10F10

D10

G9

PIU10D10

PIU10D10

PIU10G9

PIU10G9

E11

PIU10E11

PIU10E11

G10

F11

PIU10G10

PIU10G10

PIU10F11

PIU10F11

G11

PIU10G11

PIU10G11

H10

PIU10H10

PIU10H10

H11

PIU10H11

PIU10H11

J11

J9

PIU10J11

PIU10J11

PIU10J9

PIU10J9

K11

PIU10K11

PIU10K11

J10

K10

PIU10J10

PIU10J10

PIU10K10

PIU10K10

L11

J8

PIU10L11

PIU10L11

PIU10J8

PIU10J8

L10

PIU10L10

PIU10L10

K8

K9

PIU10K8

PIU10K8

PIU10K9

PIU10K9

L8

PIU10L8

PIU10L8

L9

J7

PIU10L9

PIU10L9

PIU10J7

PIU10J7

L7

L6

PIU10L7

PIU10L7

PIU10L6

PIU10L6

PIU10K5

PIU10K5

K5

L5

J6

PIU10L5

PIU10L5

PIU10J6

PIU10J6

K4

J5

PIU10K4

PIU10K4

PIU10J5

PIU10J5

PIU10L4

L4

PIU10L4

G8

D5

PIU10G8

PIU10G8

PIU10D5

PIU10D5

F3

F8

PIU10F3

PIU10F3

PIU10F8

PIU10F8

D4

D7

PIU10D4

PIU10D4

PIU10D7

PIU10D7

D6

G3

PIU10D6

PIU10D6

PIU10G3

PIU10G3

E8

PIU10E8

PIU10E8

F4

PIU10F4

PIU10F4

H5

D2

PIU10H5

PIU10H5

PIU10D2

PIU10D2

D1

E1

PIU10D1

PIU10D1

PIU10E1

PIU10E1

G4

PIU10G4

PIU10G4

B5

D3

PIU10B5

PIU10B5

PIU10D3

PIU10D3

PIU10H6

H6

PIU10H6

B6

K7

PIU10B6

PIU10B6

PIU10K7

PIU10K7

D8

E3

PIU10D8

PIU10D8

PIU10E3

PIU10E3

PIU10K6

K6

H4

PIU10K6

PIU10H4

PIU10H4

B\_VDDIO

NLPUSHBTN

PUSHBTN

NLLED0RED0MSD

LED\_RED\_MSD

NLLED0BLUE0SERIAL

LED\_BLUE\_SERIAL

NLLED0GREEN0DAP

LED\_GREEN\_DAP

HDK\_V3.3

PIC601

PIC601

PIC701

PIC701

COC6

C6

C7

COC7

PIC602

PIC702

1.0uF

0.1uF

PIC602

PIC702

NLHDK0REG18

HDK\_REG18

PIC10

1

PIC1

01

PIC10

1

PIC1

01

COC10

C10

0.1uF

COC11

C11

1.0uF

PIC10

PIC10

2

2

PIC1

PIC1

02

02

HDK\_V3.3

PIR102

PIR102

COR1

R1

20k

PIC1201

PIC1201

PIC1202

PIC1202

PIR101

PIR101

COR3

R3

PIR301

PIR301

1K

COR5

R5

PIR501

PIR501

1.5k

COR6

R6

PIR601

PIR601

SW1

COSW1

PISW101

PISW101

PGM

PID101

PIR302

PID101

PIR302

PID201

PIR502

GND

HDK\_V3.3

COD1

PID102

PID102

D1

MSD (RED)

COD2

PID202

PID202

D2

PID201

PIR502

PID301

PIR602

PID301

PIR602

10K

HDK\_V3.3

HDK\_V3.3

PIC801

PIC901

PIC801

PIC901

COC8

C8

PIC802

0.01uF

PIC802

HDK\_V3.3

PIC1301

PIC1301

COC12

C12

10uF

COC13

C13

0.1uF

C9

COC9

PIC902

0.1uF

PIC902

COTP1

PITP101

PITP101

PITP201

PITP201

PITP301

PITP301

PITP401

PITP401

GND

TP1

GND

COTP2

TP2

GND

COTP3

TP3

GND

TP4

COTP4

GND

COD3

D3

PID302

PID302

SERIAL (BLUE

DAP (GREEN)

PIC1302

PIC1302

PISW102

PISW102