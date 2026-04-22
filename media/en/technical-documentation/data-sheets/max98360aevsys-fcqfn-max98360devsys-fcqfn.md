<!-- lastmod 2023-12-20 -->
<!-- image -->

©

Click here to ask an associate for production status of specific part numbers.

## Evaluates: MAX98360A/MAX98360B/ MAX98360C/MAX98360D (FCQFN)

## General Description

The  MAX98360  evaluation  systems  (EV  systems)  are fully  assembled  and  tested  systems  that  evaluate  the MAX98360A/B/C/D  mono  Class  D  audio  amplifiers. The  EV  systems  consist  of  a  MAX98360  development board  (DEV  board),  Maxim's  Audio  Interface  Board  III (AUDINT3), and a USB cable.

It is recommended that the DEV board be evaluated with the AUDINT3 board, as an EV system. The MAX98360A and MAX98360C support the standard I 2 S interface, and the MAX98360B and MAX98360D support standard leftjustified mode. All of the MAX98360 variants support an 8-channel TDM digital audio interface.

The AUDINT3 board provides the USB-to-PCM interface, as  well  as  the  1.8V  V DDIO   supply  needed  to  evaluate the DEV board. The MAX98360 DEV board requires one additional supply input, 2.5V to 5.5V (V DD ), when evaluating using the AUDINT3 board. Figure 1 details the DEV board and the AUDINT3 board.

## MAX98360 Evaluation Systems

## Features

- 2.5V to 5.5V Single-Supply Operation
- I 2 S, Left-Justified, or TDM Input
- Five Selectable Gains (-3dB, +3dB, +6dB, +9dB, and +12dB)
- Audio Channel Select (Left, Right, and Mono Mix)
- Filterless Operation
- Low EMI
- Complete Hardware System with Easy Setup, No Tools or Special Software Required

## EV System Contents

- MAX98360 Development Board
- Audio Interface Board III
- Micro-USB Cable

Ordering Information appears at end of data sheet.

Figure 1. Simplified EV System Block Diagram

<!-- image -->

319-100630; Rev 1; 11/23

One  Analog  Way,  Wilmington,  MA  01887  U.S.A.    |      Tel:  781.329.4700      |      © 2023  Analog  Devices,  Inc.  All  rights  reserved. 2023 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX98360 Evaluation Systems

## Quick Start Guide

## Required Equipment

- MAX98360 EV system
- Audio Interface Board III
- 2.5V to 5.5V, 3A DC power supply
- Micro-USB cable
- 4Ω to 8Ω speaker
- USB audio source (e.g., Windows Media ®  Player or iTunes ® )
- User-supplied Windows ®  7 or Window 10 PC with available USB port

## Reference Material

- MAX98360 IC data sheet

## Procedure

The MAX98360 and AUDINT3 boards are fully assembled and  tested.  Follow  the  steps  below  to  set  up  the  EV system for device evaluation.

## AUDINT3 Board Setup

- 1) Connect the MAX98360 DEV board (two-row J1 connector) to the AUDINT3 board (three-row J1 connector). The bottom row of both J1 connectors should be lined up so the standoffs on the corners of the AUDINT3 and DEV board are level.
- 2) With the audio source disabled, connect the USB cable from your computer to the USB port (J2) on the AUDINT3 board. The AUDINT3 board provides the BCLK and LRCLK signals as well as the power for V DDIO , sourcing 1.8V to the DEV board through the J1 connector.

## Evaluates: MAX98360A/MAX98360B/ MAX98360C/MAX98360D (FCQFN)

- 3) The multi-color LED D1 blinks white. When the computer registers the AUDINT3 as a USB device, D1 changes to magenta and blinks slowly.

## DEV Board Setup

- 1) With all supplies unpowered, connect the 2.5V to 5.5V power supply across the VIN and GND binding posts.
- 2) Connect the micro speaker leads across the FOUTP and FOUTN binding posts.
- 3) Place the shunt on jumper J5 across pins V DD  and V IN .
- 4) Set the switch SW1 to the on position.

## Test

- 1) Enable the supply voltages across each of the supply pins.
- 2) Open the Windows Sound dialog and select the Playback tab. A Speakers item similar to Figure 2 should be listed as an available playback device.
- 3) Verify that the Speakers item is set as the default device. Once this is done, the AUDINT3 board outputs PCM data to the DIN pin on the DEV board.
- 4) Adjust the audio source volume to a low level.
- 5) Enable the audio source and verify that audio is heard through the connected speaker. Adjust the audio source volume as needed.
- 6) Quick start of the evaluation software is complete.

Figure 2. Playback Device

<!-- image -->

iTunes is a registered trademark of Apple Inc

Windows is a registered trademark and registered service mark of Microsoft Corporation. Windows Media is a registered trademark and registered service mark of Microsoft Corporation.

│

## MAX98360 Evaluation Systems

## Detailed Description of Hardware

The MAX98360 EV system is designed to allow for a thorough  evaluation  of  the  MAX98360  digital  input  Class  D audio amplifier IC. The EV system includes the MAX98360 development board (DEV board), Maxim's Audio Interface Board III (AUDINT3), and a Micro-USB cable.

The MAX98360 DEV board can be evaluated as a standalone board that is driven directly by audio test equipment. To simplify the evaluation, the DEV board can be evaluated with  the  AUDINT3  board,  which  allows  any  computer to  become  a  digital  audio  source.  The AUDINT3  board provides  on-board  LDO  regulators  and  a  USB-to-PCM interface to provide an easy-to-use method for exercising the  capabilities  of  the  device  with  no  additional  audio equipment.

The  AUDINT3  LDO  regulators  power  the  MAX98360 DEV  board's  V DDIO   pin  through  connector  J1.  The USB-to-PCM  converter  accepts  a  USB  audio  stream from a USB connected computer and converts that into an  I 2 S  (MAX98360A/C)  or  left-justified  (MAX98360B/ MAX98360D) data stream, allowing for USB audio playback through the MAX98360 device. Do not use the AUDINT3 board while directly driving the DEV board's PCM interface with external audio test equipment since the digital audio interface (DAI) pins for the DEV board and AUDINT3 are connected through the J1 header.

## Power Supplies

The MAX98360 DEV board requires two external power supplies  when  evaluated  as  a  stand-alone  board.  The VDD  supply  provides  system  power  to  the  MAX98360 IC. This voltage can be applied externally at the VIN and GND PCB pads, or 5V can be provided from the AUDINT3 board. See Table 2 for the J5 jumper selection. The 5V supply from the AUDINT3 board should be used only for functionality tests and should not be used when driving a speaker load due to the low current limit of the on-board 5V supply.

The voltage applied to the V DDIO  test point determines the logic level of the EN pin when SW1 is in the on position. The power supplies and their ranges are listed in Table 1. The  external  supply  voltages  can  be  connected  at  the respective supply test-points and/or binding posts.

## Evaluates: MAX98360A/MAX98360B/ MAX98360C/MAX98360D (FCQFN)

When using the AUDINT3 board, the AUDINT3's on-board LDO regulator independently powers V DDIO  on the DEV board. This power is routed to the DEV board through the J1 connector. See the Digital Audio Interface section.

## Jumper Selection Shutdown Mode

The DEV board includes switch SW1 to facilitate a device enable. The device features a low-power shutdown mode that is activated by setting SW1 in the 'OFF' position. To exit shutdown mode, set SW1 to the 'ON' position. When the PCM master is disabled and SW1 is in the 'ON' position, the device is in standby mode. Enabling the PCM interface while SW1 is in the 'ON' position puts the device in active playback mode, and the device output begins switching.

## Table 1. Power Supplies

| POWER SUPPLY   | RANGE (V)   |
|----------------|-------------|
| V DD           | 2.5 to 5.5  |
| V DDIO         | 1.2 to V DD |

## Table 2. J5 Jumper Selection (VDD) Supplies

| SHUNT POSITION   | INPUT VOLTAGE (VDD)                                              |
|------------------|------------------------------------------------------------------|
| 1-2              | V DD supplied by AUDINT3 board con- nected to J1 header          |
| 2-3              | User-supplied external power supply ap- plied at the VIN PCB pad |

## Table 3. Jumper Configuration

| HEADER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| SW1      | EN to DVDDIO     | Normal operation |
| SW1      | EN to GND        | Shutdown         |

## MAX98360 Evaluation Systems

## Gain and Channel Selection (I 2 S/Left-Justified Mode)

The  MAX98360's  GAIN\_SLOT  pin  is  connected  to  the center pin (pin 1) of the J4 header. When operating the device in I 2 S or left-justified mode, shunting pin 1 to the adjacent  pins  of  the  J4  header  controls  the  PCM  gain. Table 3 shows the available gain settings in I 2 S and leftjustified modes.

In I 2 S  and  left-justified  modes,  channel  selection  is controlled by placing three shunts across the DAI configuration headers J6, J7, or J8. Each of the DAI configuration headers represent one valid mapping of the DAI pins to the PCM input signals. See Table 4 for the valid jumper settings for the DAI configuration headers. Only one DAI configuration can be used at a time. Figure 3 shows the shunt positions used for DAI Configuration A.

## Channel Selection (TDM Mode)

In TDM mode, the MAX98360 has a fixed gain of 12dB and the GAIN\_SLOT pin becomes repurposed for TDM channel  selection.  The  MAX98360  accepts  8-channel TDM data  with  either  16-bit  or  32-bit  data.  The  GAIN\_ SLOT pin and DAI configuration are used to select which of the 8 channels of TDM data the part responds to, as shown in Table 6.

## Table 4. J4 Jumper Selection (GAIN\_SLOT)

| J4 SHUNT POSITION   | GAIN_SLOT                                   | GAIN   |
|---------------------|---------------------------------------------|--------|
| 1-2                 | Connected to V DD through 100kΩ resistor R1 | +3dB   |
| 1-3                 | Connected to V DD                           | +6dB   |
| 1-4                 | Connected to GND through 100kΩ resistor R2  | -3dB   |
| 1-5                 | Connected to GND                            | +12dB  |
| Not Installed       | Unconnected                                 | +9dB   |

## Table 5. J6-J8 Header Selection (DAI Configuration)

| DAI CONFIGURATION   | SHUNT HEADER   | I2S/LJ CHANNEL   |
|---------------------|----------------|------------------|
| A                   | J6             | Left             |
| B                   | J7             | Right            |
| C                   | J8             | Monomix          |

## Evaluates: MAX98360A/MAX98360B/ MAX98360C/MAX98360D (FCQFN)

## Digital Audio Interface

The MAX98360 digital audio interface (DAI) is routed to interface  header  J3  as  well  as  the AUDINT3  connector J1.  The  interface  headers  provide  easy  access  to  the device's  PCM  bus  and  the  AUDINT3  connector  allows for USB audio to be streamed onto the DEV board. See USB Audio Input for details on USB audio streaming and Table 8 for the AUDINT3 connector J1 pinout.

Figure 3. DAI Configuration A (Left Channel for I 2 S/LeftJustified Operation)

<!-- image -->

## Table 6. TDM Mode Channel Selection

|   TDM CHAN- NEL | J4 SHUNT PO- SITION   | DAI CONFIGURATION   |
|-----------------|-----------------------|---------------------|
|               0 | 1-5                   | A                   |
|               1 | 1-3                   | A                   |
|               2 | Open                  | A                   |
|               3 | 1-3                   | B                   |
|               4 | 1-5                   | B                   |
|               5 | 1-5                   | C                   |
|               6 | Open                  | C                   |
|               7 | 1-3                   | C                   |

## Table 7. DAI Header (J3)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |     1 |     2 | BCLK     |
| GND      |     3 |     4 | LRCLK    |
| GND      |     5 |     6 | DIN      |

│

## MAX98360 Evaluation Systems

## DAI Header

The DAI header (J3) provides access to the MAX98360 PCM  bus  (BCLK,  LRCLK,  and  DIN).  This  DAI  header facilitates evaluation with audio equipment I/O. See Table 8  for  the  pinout  of  the  DAI  header  and  Figure  4  for  an illustration of how the MAX98360 DAI interface is routed through the DAI headers from the AUDINT3 connector.

## Speaker Output

The MAX98360 audio output is routed to the FOUTP and FOUTN connections on the DEV board. The DEV board is, by default, assembled to allow the MAX98360 output to connect directly to a speaker load without the need for filtering.

## Table 8. AUDINT3 Connector (J1)

| SIGNAL*   |   PIN* | SIGNAL   |   PIN | SIGNAL   |   PIN |
|-----------|--------|----------|-------|----------|-------|
| -         |      1 | MCLK     |     2 | GND      |     3 |
| BCLK2     |      4 | BCLK1    |     5 | GPIO1    |     6 |
| LRCLK2    |      7 | LRCLK1   |     8 | GPIO2    |     9 |
| DAC2      |     10 | DAC1     |    11 | GPIO3    |    12 |
| ADC2      |     13 | ADC1     |    14 | GPIO4    |    15 |
| -         |     16 | ID       |    17 | 3.3V     |    18 |
| AVDD      |     19 | DVDD     |    20 | GND      |    21 |
| HPVD      |     22 | VDDIO    |    23 | GND      |    24 |
| GND       |     25 | SDA      |    26 | 5V       |    27 |
| -         |     28 | SCL      |    29 | 5V       |    30 |
| GND       |     31 | IRQ      |    32 | RST      |    33 |
| -         |     34 | -        |    35 | -        |    36 |
| GND       |     37 | -        |    38 | -        |    39 |

Figure 4. MAX98360 DAI Interface Headers (PCM)

<!-- image -->

## Evaluates: MAX98360A/MAX98360B/ MAX98360C/MAX98360D (FCQFN)

## EMI Filter

When long speaker cables are used with the MAX98360 output (exceeding approximately 12in), a ferrite bead plus capacitor filter can be installed to prevent excessive EMI radiation. Although it is best to choose filter components based  on  EMI  test  results,  the  combination  of  100pF capacitors (C3, C4) and ferrite beads (FB1, FB2) generally work  well.  Before  adding  the  filters  to  the  design,  first remove the small PCB traces shorting the pads of FB1 and FB2 (see the MAX98360 EV System PCB Schematic and the MAX98360 EV System PCB Layout Diagrams ).

## MAX98360 Evaluation Systems

## Audio Interface Board III

Maxim's Audio Interface board III (AUDINT3 board) facilitates the  evaluation  of  the  DEV  board  by  providing  a  set  of features  that  can  be  used  to  exercise  the  capabilities  of the  DEV  board  without  the  need  for  additional  audio equipment.  The  main  components  of  the  AUDINT3 board  are  the  LDO  supply  voltages  and  the  USB-to-PCM interfaces. The supply voltages allow the DEV board to be evaluated with minimal amount of external supplies. The USB-to-PCM converter allows any computer to be used as an audio source for the DEV board's digital audio PCM interface.

## Ordering Information

| PART                 | TYPE                       |
|----------------------|----------------------------|
| MAX98360AEVSYS#FCQFN | Complete Evaluation System |
| MAX98360BEVSYS#FCQFN | Complete Evaluation System |
| MAX98360CEVSYS#FCQFN | Complete Evaluation System |
| MAX98360DEVSYS#FCQFN | Complete Evaluation System |

#Denotes RoHS compliant.

## Evaluates: MAX98360A/MAX98360B/ MAX98360C/MAX98360D (FCQFN)

The  MAX98360  DEV  board  connects  to  the  AUDINT3 board  through  connector  J1.  The  physical  connections made between the DEV board and AUDINT3 board are listed in Table 8.

## USB Audio Input

To  utilize  the  USB  streaming  feature  of  the  AUDINT3 board,  connect  the  USB  cables  from  your  computer  to the USB connector J2 on the AUDINT3 board and ensure that the AUDINT3 board is connected to the DEV board.

## MAX98360 Evaluation Systems

## Evaluates: MAX98360A/MAX98360B/ MAX98360C/MAX98360D (FCQFN)

## MAX98360 EV System DEV Board Bill of Materials

|   ITEM | REF_DES                                           | DNI/DNP   |   QTY | MFG PART #                                                            | MANUFACTURER                          | VALUE                      | DESCRIPTION                                                                                                                                                                               | COMMENTS   |
|--------|---------------------------------------------------|-----------|-------|-----------------------------------------------------------------------|---------------------------------------|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | BCLK, DIN, EN, LRCLK                              | -         |     4 | 5003                                                                  | KEYSTONE                              | N/A                        | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                       |            |
|      2 | C1                                                | -         |     1 | GRM155R61A106ME44; GRM155R61A106ME11; 0402ZD106MAT2A; CL05A106MP5NUNC | MURATA;MURATA;AVX;SAMSUNG             | 10UF                       | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                  |            |
|      3 | C2                                                | -         |     1 | GRM033R61C104K; C0603X5R1C104K030BC                                   | MURATA;TDK                            | 0.1UF                      | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                               |            |
|      4 | FOUTN, FOUTP, GND, VIN                            | -         |     4 | 111-2223-001                                                          | EMERSON NETWORK POWER                 | 111-2223-001               | MACHINE SCREW; THUMBSCREW; BANANA; 1/4-32IN; 11/32IN; NICKEL PLATED BRASS                                                                                                                 |            |
|      5 | FOUTN_PAD, FOUTP_PAD, GND_PAD1, GND_PAD2, VIN_PAD | -         |     5 | 9020 BUSS                                                             | WEICO WIRE                            | MAXIMPAD                   | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                                  |            |
|      6 | GND_TP1                                           | -         |     1 | 5011                                                                  | KEYSTONE                              | N/A                        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                   |            |
|      7 | GND_TP2-GND_TP4                                   | -         |     3 | 5001                                                                  | KEYSTONE                              | N/A                        | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                        |            |
|      8 | J1                                                | -         |     1 | TSW-113-08-S-D-RA                                                     | SAMTEC                                | TSW-113-08-S-D-RA          | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 26PINS                                                                                                                                  |            |
|      9 | J3, J6-J8                                         | -         |     4 | PEC03DAAN                                                             | SULLINS ELECTRONICS CORP.             | PEC03DAAN                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 6PINS; -65 DEGC TO +125 DEGC                                                                                                  |            |
|     10 | J4                                                | -         |     1 | TSW-105-07-L-S                                                        | SAMTEC                                | TSW-105-07-L-S             | EVKIT PART-CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 5PINS                                                                                                               |            |
|     11 | J5                                                | -         |     1 | PEC03SAAN                                                             | SULLINS                               | PEC03SAAN                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                                 |            |
|     12 | J9-J12                                            | -         |     4 | 91772A108; PHILLIPS-PAN_4-40X3/8IN; PMSSS4400038PH; 9901              | GENERIC PART                          | N/A                        | MACHINE SCREW; PHILLIPS; PAN; 4-40; 3/8IN; 18-8 STAINLESS STEEL                                                                                                                           |            |
|     13 | J9-J12                                            | -         |     4 | MCH_SO_F_HEX_4-40X1/2                                                 | GENERIC PART                          | N/A                        | STANDOFF; FEMALE-THREADED; HEX; 4-40; 1/2IN; ALUMINUM                                                                                                                                     |            |
|     14 | OUTN, OUTP                                        | -         |     2 | 5002                                                                  | KEYSTONE                              | N/A                        | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                                                                     |            |
|     15 | R1, R2                                            | -         |     2 | RC0603JR-07100KL                                                      | YAGEO                                 | 100K                       | RESISTOR; 0603; 100K OHM; 5%; 100PPM; 0.1W; THICK FILM                                                                                                                                    |            |
|     16 | R3                                                | -         |     1 | CRCW06032K0FK;ERJ-3EKF2001                                            | VISHAY DALE;PANASONIC                 | 2K                         | RESISTOR, 0603, 2K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                                                                     |            |
|     17 | R7-R9                                             | -         |     3 | ERJ-2GE0R00                                                           | PANASONIC                             |                            | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                    |            |
|     18 | R18                                               | -         |     1 | ERJ-2RKF1802                                                          | PANASONIC                             | 18K                        | RESISTOR; 0402; 18K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                     |            |
|     19 | SU1                                               | -         |     1 | C33-GAG1-2X3-G                                                        | VALCON                                | C33-GAG1-2X3-G             | CONNECTOR; FEMALE; 2.54MM MULTI-POSITION JUMPER LINK; WIREMOUNT; 6PINS                                                                                                                    |            |
|     20 | SU2, SU3                                          | -         |     2 | S1100-B;SX1100-B;STC02SYAN                                            | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B                   | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                                   |            |
|     21 | SW1                                               | -         |     1 | CL-SB-12B-01T;CL-SB-12B-01                                            | NIDEC COPAL ELECTRONICS CORP          | CL-SB-12B-01T;CL-SB-12B-01 | SWITCH; SPDT; SMT; 12V; 0.2A; CL-SB SERIES; SLIDE SWITCH; RCOIL=0.07 OHM; RINSULATION=100MOHM                                                                                             |            |
|     22 | U1                                                | -         |     1 | MAX98360                                                              | MAXIM                                 | MAX98360                   | EVKIT PART - IC; MAX98360; TINY; LOW-COST; PCM INPUT CLASS-D AMPLIFIER WITH CLASS-AB PERFORMANCE; FC2QFN10; PACKAGE CODE: F102A2F+1; PACKAGE OUTLINE: 21- 100376; LAND PATTERN: 90-100123 |            |
|     23 | VDDIO                                             | -         |     1 | 5010                                                                  | KEYSTONE                              | N/A                        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                                     |            |
|     24 | PCB                                               | -         |     1 | MAX98360_FC2QFN_APPS_A                                                | MAXIM                                 | PCB                        | PCB:MAX98360_FC2QFN_APPS_A -                                                                                                                                                              |            |
|     25 | C3, C4, C8-C12                                    | DNP       |     0 | N/A                                                                   | N/A                                   | OPEN                       | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                                                                                                                  |            |
|     26 | FB1, FB2                                          | DNP       |     0 | RC1608J000CS                                                          | SAMSUNG ELECTRONICS                   |                            | 0 RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                                                                                    |            |

## MAX98360 Evaluation Systems

## MAX98360 EV System PCB Schematic

<!-- image -->

## MAX98360 Evaluation Systems

## MAX98360 EV System PCB Layout Diagrams

<!-- image -->

MAX98360 EV System-Top Silkscreen

<!-- image -->

MAX98360 EV System-Top

MAX98360 EV System-Inner 1

<!-- image -->

MAX98360 EV System-Inner 2

<!-- image -->

## Evaluates: MAX98360A/MAX98360B/ MAX98360C/MAX98360D (FCQFN)

│

## MAX98360 Evaluation Systems

## Evaluates: MAX98360A/MAX98360B/ MAX98360C/MAX98360D (FCQFN)

## MAX98360 EV System PCB Layout Diagrams (continued)

MAX98360 EV System-Bottom

<!-- image -->

MAX98360 EV System-Bottom Silkscreen

<!-- image -->

│

## MAX98360 Evaluation Systems

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                  | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------|-----------------|
|                 0 | 11/20           | Initial release                                                                              | -               |
|                 1 | 11/23           | Updated MAX98360 EV System PCB Schematic and MAX98360 EV System PCB Layout Diagrams sections | 8 - 10          |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

## Evaluates: MAX98360A/MAX98360B/ MAX98360C/MAX98360D (FCQFN)