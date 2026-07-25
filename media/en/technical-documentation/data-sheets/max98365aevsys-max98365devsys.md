<!-- lastmod 2022-08-04 -->
<!-- image -->

©

Click here to ask an associate for production status of specific part numbers.

## Evaluates: MAX98365A/MAX98365B/ MAX98365C/MAX98365D

## General Description

The  MAX98365  evaluation  system  (EV  system)  is  a fully  assembled  and  tested  system  that  evaluates  the MAX98365A/B/C/D  mono  Class-D  audio  amplifier.  The EV  system  consists  of  the  MAX98365  Development Board  (DEV  board),  Maxim's  Audio  Interface  Board  III (AUDINT3), and a USB cable.

It is recommended that the DEV board be evaluated with the AUDINT3 board, as an EV system. MAX98365A and MAX98365C  support  the  standard  I 2 S  interface,  and MAX98365B and MAX98365D support standard left-justified mode. All MAX98365 variants support an 8-channel TDM digital audio interface.

The AUDINT3  board  provides  a  USB-to-PCM  interface in addition to a 1.8V VDD supply needed to evaluate the DEV  board.  The  MAX98365  DEV  board  requires  one additional supply input, 3V to 14V (PVDD) when evaluating using the AUDINT3 board. Figure 1 details the DEV board and the AUDINT3 board.

## MAX98365 Evaluation Systems

## Features

- 3V to 14V Single-Supply Operation
- I 2 S, Left-Justified, or TDM Input
- Five Selectable Gains (9.5dB, 12.5dB, 15.5dB, 18.5dB, and 21.5dB)
- Audio Channel Select (Left, Right, and Mono Mix)
- Filter-Less Operation
- Low EMI
- Complete Hardware System with Easy Setup; No Tools or Special Software Required

## EV System Contents

- MAX98365 Development Board
- Audio Interface Board III
- Micro-USB Cable

Ordering Information appears at end of data sheet.

Figure 1. MAX98365 Evaluation System

<!-- image -->

319-100884; Rev 0; 2/22

owners.

One  Analog  Way,  Wilmington,  MA  01887  U.S.A.    |      Tel:  781.329.470      |      © 2022  Analog  Devices,  Inc.  All  rights  reserved. 2022 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective

## MAX98365 Evaluation Systems

## Quick Start Guide

## Required Equipment

- MAX98365 EV system
-  MAX98365 development board (DEV board)
- Audio Interface Board III (AUDINT3 board)
- Micro-USB cable
- DC power supply (3V to 14V, 3A)
- 4Ω to 8Ω speaker
- PC with Windows ®  7 or Windows 10 with available USB port
- USB audio source (e.g., Windows Media Player ®  or iTunes ® )

## Reference Material

- MAX98365 IC data sheet

## Procedure

The MAX98365 and AUDINT3 boards are fully assembled and tested. Follow the steps below to set up the EV system for device evaluation.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  evaluation  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## AUDINT3 Board Setup:

- 1) Connect the MAX98365 DEV board (3 row J1 connector) to the AUDINT3 board (3 row J1 connector). To avoid damage, it is important to make sure the connectors of the two boards are properly aligned. The bottom row of both J1 connectors should be lined up so the standoffs on the corners of the AUDINT3 and DEV board are level.
- 2) With the audio source disabled, connect the MicroUSB cable from your computer to the USB port (J2) on the AUDINT3 board. The AUDINT3 board provides the BCLK and LRCLK signals as well as the power for VDDIO, sourcing 1.8V to the DEV board through the J1 connector.

## Evaluates: MAX98365A/MAX98365B/

MAX98365C/MAX98365D

- 3) The multi-color LED D1 initially flashes blue, and then should change to slow flashing magenta when the computer successfully registers the AUDINT3 as a USB audio playback device.

## DEV Board Setup:

- 1) Connect the AUDINT3 VDD jumper. Place one shunt on jumper J13 across pins labeled 1.8V and VDD. This allows the AUDINT3 to provide 1.8V to the VDD pin on MAX98365.
- 2) Configure I 2 S channel jumper. Place triple shunt on jumper J5, DAI C for mono-mix. Remove any shunts from J4, J3, and J2.
- 3) Set the gain jumper. Place one shunt on jumper J7 for desired gain (can use 21dB for PVDD = 14V).
- 4) Enable the IC jumper. Place the shunt on jumper J6 across pins VDD and EN.
- 5) Connect the speaker. Connect the speaker leads across the FOUTP and FOUTN binding posts.
- 6) Connect PVDD. With the DC supply not powered, connect the 3V to 14V power supply across the PVDD and GND binding posts.

## USB Audio Playback Test:

- 1) Enable the PVDD supply voltage (3V to 14V, 3A).
- 2) Open the Windows' Sound dialog and select the Playback tab. A Speakers item such as Figure 2 should be listed as an available playback device.
- 3) Verify that the Speakers item is set as the default device. Once this is done, the AUDINT3 board outputs PCM data to the DIN pin on the DEV board.
- 4) Adjust the audio source volume to a low level.
- 5) Enable the audio source and verify that audio is heard through the connected speaker. Adjust the audio source volume as needed.
- 6) Quick Start for USB Audio Playback is now complete.
- 7) For details on how to connect in a standalone mode to audio test equipment, such as Audio Precision, see the Detailed Description of Hardware section.

Figure 2. Playback Device

<!-- image -->

iTunes is a registered trademark of Apple Inc.

Windows is a registered trademark and registered service mark of Microsoft Corporation. Windows Media is a registered trademark and registered service mark of Microsoft Corporation.

│

## MAX98365 Evaluation Systems

## Detailed Description of Hardware

The  MAX98365  EV  system  is  designed  to  allow  for a  thorough  evaluation  of  the  MAX98365  digital  input Class-D audio amplifier IC. The EV system includes the MAX98365 Development Board (DEV board), the Audio Interface Board III (AUDINT3), and a micro-USB cable.

To simplify evaluation, the MAX98365 DEV board can be used  together  with  the AUDINT3  and  only  one  external power supply for PVDD. The AUDINT3 supplies 1.8V for VDD and a plug-and-play USB-to-I 2 S interface, allowing any  computer  to  become  a  48kHz  digital  audio  source. The  AUDINT3  board  provides  a  fast  and  easy-to-use method for exercising the main capabilities of the device with no additional audio equipment.

The AUDINT3 board automatically senses the MAX98365 DEV board and configures  its  LDO  regulators  to  power the  MAX98365  DEV  board's  VDD  pin  through  connector J1. The USB-to-PCM converter accepts a USB audio stream  from  a  USB  connected  computer  and  converts to  I 2 S  (MAX98365A/C)  or  left-justified  (MAX98365B/D) data stream, allowing for USB audio playback through the MAX98365  device.  The  AUDINT3  board  should  not  be used to deliver audio input when directly driving the DEV board's PCM interface with external audio test equipment. The digital audio interface (DAI) pins on the DEV board and AUDINT3 digital audio outputs are connected through the J1 header, creating a signal conflict. Disable all DAI signals  using  the  AUDINT3  software  if  using  external audio  stimuli.  However,  the  AUDINT3  can  still  provide VDD if an external power supply is not available.

For  maximum  flexibility,  the  MAX98365  DEV  board  can also be evaluated as a standalone board, with two external power supplies (PVDD and VDD), and the digital audio signal  is  driven  directly  by  specialized  audio  test  equip -ment (Audio Precision, etc.)

## Power Supplies

When evaluated as a standalone board, the MAX98365 DEV board requires two external power supplies: PVDD, which is the supply voltage for the main Class-D power stage, and VDD, which supplies low level system power to the IC.

The voltage applied to VDD determines the logic level of the EN pin when J6 is in the ENABLE position. The power supplies and their ranges are listed in Table 1. The external  supply  voltages  can  be  connected at the respective supply test-points and/or binding posts.

## Evaluates: MAX98365A/MAX98365B/ MAX98365C/MAX98365D

The AUDINT3 board, when properly connected to the DEV Board, senses, and automatically provides 1.8V to VDD of MAX98365 DEV Board through jumper J1, when active USB power is supplied. Note that with the AUDINT3 board connected, VDD is automatically provided, but an external PVDD is still required. If an external VDD is desired with AUDINT3 still connected to the DEV Board, jumper J13 (DEV board) can be used to disconnect the AUDINT3's 1.8V.  See Table 2 for the J13 jumper selection.

## Jumper Selection

## Shutdown Mode

The DEV Board includes header J6 for device enable. The MAX98365 device features a low-power shutdown mode that  is  activated  by  setting  J6  shunt  in  the  'DISABLE' position.  To  exit  shutdown  mode,  place  J6  shunt  to  the 'ENABLE'  position.  When  the  PCM  master  is  disabled and  J6  is  in  the  'ENABLE'  position,  the  device  is  in standby  mode.  Enabling  the  PCM  interface  while  J6  is in the 'ENABLE' position puts the device in active playback mode, and the device output begins switching. See Table 3 for reference.

## Table 1. Power Supplies

| POWER SUPPLY   | RANGE (V)   |
|----------------|-------------|
| VDD            | 1.71 to 5.5 |
| PVDD           | 3 to 14     |

## Table 2. J13 Jumper Selection (VDD) Supplies

| SHUNT POSITION   | INPUT VOLTAGE (VDD)                                                   |
|------------------|-----------------------------------------------------------------------|
| 1-2              | VDD supplied by AUDINT3 board con- nected to J1 header                |
| OPEN             | User-supplied external power supply applied at VDD and GND test posts |

## Table 3. Jumper Configuration

| HEADER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| J6       | EN to VDD        | Normal operation |
| J6       | EN to GND        | Shutdown         |

## MAX98365 Evaluation Systems

## Gain and Channel Selection (I 2 S/Left-Justified Mode)

The  MAX98365's  GAIN\_SLOT  pin  is  connected  to  the center pin (pin 1) of the J7 header. When operating the device in I 2 S or left-justified mode, shunting pin 1 to the adjacent  pins  of  the  J7  header  controls  the  PCM  gain. Table 4 shows the available gain settings in I 2 S and leftjustified modes.

In I 2 S and left-justified modes, channel selection is controlled by placing three shunts across the DAI configuration headers J3, J4, or J5. Each of the DAI configuration headers represent one valid mapping of the DAI pins to the PCM input signals. See Table 5 for the valid jumper settings for the DAI configuration headers. Only one DAI configuration may be used at a time. Figure 3 shows the shunt positions used for DAI configuration A.

## Channel Selection (TDM Mode)

In TDM mode, the MAX98365 has a fixed gain of 21.5dB and the GAIN\_SLOT pin becomes repurposed for TDM channel  selection.  The  MAX98365  accepts  8-channel TDM data  with  either  16-bit  or  32-bit  data.  The  GAIN\_ SLOT pin and DAI configuration are used to select which of the 8 channels of TDM data the part responds to, as shown in Table 6.

## Table 4. J7 Jumper Selection (GAIN\_SLOT)

|   GAIN (dB) | J7 SHUNT POSITION   | GAIN_SLOT                                  |
|-------------|---------------------|--------------------------------------------|
|        21.5 | 1-5                 | Connected to GND                           |
|        18.5 | Not Installed       | Unconnected                                |
|        15.5 | 1-3                 | Connected to VDD                           |
|        12.5 | 1-2                 | Connected to VDD through 100kΩ resistor R1 |
|         9.5 | 1-4                 | Connected to GND through 100kΩ resistor R2 |

## Table 5. J3-J5 Header Selection (DAI Configuration)

Figure 3. DAI Configuration A (Left-Channel for I 2 S/LeftJustified Operation)

| I 2 S/LJ CHANNEL            | SHUNT HEADER   | DAI CONFIGURATION   |
|-----------------------------|----------------|---------------------|
| Left                        | J3             | A                   |
| Right                       | J4             | B                   |
| Mono-mix (Left/2 + Right/2) | J5             | C                   |

<!-- image -->

│

## MAX98365 Evaluation Systems

## DAI Header

The DAI header J2 provides access to MAX98365's PCM bus (BCLK, LRCLK, and DIN). This DAI header facilitates evaluation  with  audio  equipment  I/O.  See  Table  7  for the pinout of the DAI header. Figure 4 shows a close-up image of the MAX98365 DAI interface header (J2) to be used if connecting external DAI inputs, such as those provided by Audio Precision or other audio test equipment.

## Speaker Output

The MAX98365 audio output is routed to the FOUTP and FOUTN connections on the DEV board. The DEV board is, by default, assembled to allow the MAX98365 output to connect directly to a speaker load without the need for filtering.

## EMI Filter

When long speaker cables are used with the MAX98365 output  (exceeding  ≈12in  (30  cm)),  a  ferrite  bead  plus capacitor filter can be installed to prevent excessive EMI radiation. Although it is best to choose filter components based  on  EMI  test  results,  the  combination  of  100pF capacitors (C8, C9) and ferrite beads (L1, L2) generally work  well.  Before  adding  the  filters  to  the  design,  first remove the small PCB traces shorting the pads of L1 and L2 (see the MAX98365 DEV Board PCB Schematic and the MAX98365 DEV Board PCB Layout diagrams).

## Table 6. TDM Mode Channel Selection

|   TDM CHANNEL | J4 SHUNT POSITION   | DAI CONFIGURATION   |
|---------------|---------------------|---------------------|
|             0 | 1-5                 | A                   |
|             1 | 1-3                 | A                   |
|             2 | Open                | A                   |
|             3 | 1-3                 | B                   |
|             4 | 1-5                 | B                   |
|             5 | 1-5                 | C                   |
|             6 | Open                | C                   |
|             7 | 1-3                 | C                   |

## Table 7. DAI Header (J2)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |     1 |     2 | BCLK     |
| GND      |     3 |     4 | LRCLK    |
| GND      |     5 |     6 | DIN      |

## Evaluates: MAX98365A/MAX98365B/ MAX98365C/MAX98365D

Figure 4. MAX98365 DAI Interface Headers (PCM)

<!-- image -->

│

## MAX98365 Evaluation Systems

## Audio Interface Board III

Maxim's Audio Interface Board III (AUDINT3) facilitates the evaluation of the DEV board by providing a set of features that  can  be  used  to  exercise  the  capabilities  of  the  DEV board without the need for additional audio equipment. The main components of the AUDINT3 board are its LDO supply voltages and its USB-to-PCM interface. The supply voltages allow the DEV board to be evaluated with minimal amount of external supplies. The USB-to-PCM converter allows any computer to be used as an audio source for the DEV board's digital audio PCM interface.

The  MAX98365  DEV  board  connects  to  the  AUDINT3 board through connector J1. The physical connections made between the  DEV board and AUDINT3 board are listed in Table 8.

## Table 8. AUDINT3 Connector (J1)

| SIGNAL   |   PIN | SIGNAL   |   PIN | SIGNAL   |   PIN |
|----------|-------|----------|-------|----------|-------|
| -        |     1 | MCLK     |     2 | GND      |     3 |
| BCLK2    |     4 | BCLK1    |     5 | GPIO1    |     6 |
| LRCLK2   |     7 | LRCLK1   |     8 | GPIO2    |     9 |
| DAC2     |    10 | DAC1     |    11 | GPIO3    |    12 |
| ADC2     |    13 | ADC1     |    14 | GPIO4    |    15 |
| -        |    16 | ID       |    17 | 3.3V     |    18 |
| AVDD     |    19 | DVDD     |    20 | GND      |    21 |
| HPVD     |    22 | VDDIO    |    23 | GND      |    24 |
| GND      |    25 | SDA      |    26 | 5V       |    27 |
| -        |    28 | SCL      |    29 | 5V       |    30 |
| GND      |    31 | IRQ      |    32 | RST      |    33 |
| -        |    34 | -        |    35 | -        |    36 |
| GND      |    37 | -        |    38 | -        |    39 |

## Evaluates: MAX98365A/MAX98365B/ MAX98365C/MAX98365D

## USB Audio Input

To use the USB streaming feature of the AUDINT3 board, ensure that the AUDINT3 board is connected to the DEV board, then connect the USB cable from your computer to the USB connector J2 on the AUDINT3 board. Configure the desired audio signal inputs using the Audio Controls panel  of  the AUDINT3  interface  software  (Figure  5). As described  earlier,  a  computer  can  be  used  to  supply audio  inputs  over  USB  interface  in  several  selectable formats,  found  under  the  DAI  mode  drop-down  menu. The AUDINT3 board can also generate test signal tones of  various  type,  frequency,  and  amplitude  as  shown  in Figure 6.

Figure 5. AUDINT3 Configured for Computer Audio Input Over USB

<!-- image -->

Figure 6. AUDINT3 Configured for a -12dBFS 1kHz Sine Input Using Internal Signal Generator

<!-- image -->

## Ordering Information

#Denotes RoHS compliant.

| PART            | TYPE                                                             |
|-----------------|------------------------------------------------------------------|
| MAX98365AEVSYS# | Complete I 2 S evaluation system with no volume ramping          |
| MAX98365BEVSYS# | Complete left-justified evaluation system with no volume ramping |
| MAX98365CEVSYS# | Complete I 2 S evaluation system with volume ramping             |
| MAX98365DEVSYS# | Complete left-justified evaluation system with volume ramping    |

## MAX98365 Evaluation Systems

## MAX98365 DEV Board Bill of Materials

| ITEM   |   QTY | REF DES                            | MFG PART #                                               | MANUFACTURER                          | VALUE             | DESCRIPTION                                                                                                                                                                        |
|--------|-------|------------------------------------|----------------------------------------------------------|---------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      |     1 | C4                                 | GMC10X5R106K25NT                                         | CAL-CHIP ELECTRONIC INC               | 10UF              | CAP; SMT (0603); 10UF; 10%; 25V; X5R; CERAMIC ;NOTE:SPECIAL ORDER ONLY                                                                                                             |
| 2      |     1 | C5                                 | C1005X5R1V105K050BC                                      | TDK                                   | 1UF               | CAP; SMT (0402); 1UF; 10%; 35V; X5R; CERAMIC                                                                                                                                       |
| 3      |     1 | C6                                 | CL05A105KO5NNN                                           | SAMSUNG                               | 1UF               | CAP; SMT (0402); 1UF; 10%; 16V; X5R; CERAMIC                                                                                                                                       |
| 4      |     1 | C7                                 | EEE-FPE101XAP                                            | PANASONIC                             | 100UF             | CAP; SMT (CASE_D8); 100UF; 20%; 25V; ALUMINUM-ELECTROLYTIC ;NOTE:PURCHASE DIRECT FROM THE MANUFACTURER                                                                             |
| 5      |     1 | C12                                | CL21B106KOQNNN; GRM21BZ71C106KE15; GMC21X7R106K16NT      | SAMSUNG;MURATA;CAL-CHIP               | 10UF              | CAP; SMT (0805); 10UF; 10%; 16V; X7R; CERAMIC                                                                                                                                      |
| 6      |     1 | J1                                 | TSW-113-08-G-T-RA                                        | SAMTEC                                | TSW-113-08-G-T-RA | EVKIT PART; CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; RIGHT ANGLE; 39PINS; MODIFY PIN NUMBERING ARRANGEMENT                                                           |
| 7      |     4 | J2-J5                              | PEC03DAAN                                                | SULLINS ELECTRONICS CORP.             | PEC03DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 6PINS; -65 DEGC TO +125 DEGC                                                                                           |
| 8      |     1 | J6                                 | PCC03SAAN                                                | SULLINS                               | PCC03SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                           |
| 9      |     1 | J7                                 | TSW-105-07-L-S                                           | SAMTEC                                | TSW-105-07-L-S    | EVKIT PART-CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 5PINS                                                                                                        |
| 10     |     5 | J8, J9, J12, J14, J15              | 9020 BUSS                                                | WEICO WIRE                            | MAXIMPAD          | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE- S; 20AWG                                                                                          |
| 11     |     1 | J13                                | PCC02SAAN                                                | SULLINS                               | PCC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                           |
| 12     |     4 | MTH1-MTH4                          | 91772A108; PHILLIPS-PAN_4-40X3/8IN; PMSSS4400038PH; 9901 | GENERIC PART                          | N/A               | MACHINE SCREW; PHILLIPS; PAN; 4-40; 3/8IN; 18-8 STAINLESS STEEL; NOTE: SET TO OBSOLETE FOR PART NUMBER CORRECTION. KINDLY REFER TO PART NUMBER 91772A108;9901                      |
| 13     |     4 | MTH1-MTH4                          | MCH_SO_F_HEX_4-40X1/2                                    | GENERIC PART                          | N/A               | STANDOFF; FEMALE-THREADED; HEX; 4-40; 1/2IN; ALUMINUM                                                                                                                              |
| 14     |     1 | R1                                 | ERJ-2RKF1782                                             | PANASONIC                             | 17.8K             | RES; SMT (0402); 17.8K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                |
| 15     |     5 | R2-R5, R7                          | ERJ-2GE0R00                                              | PANASONIC                             | 0                 | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                        |
| 16     |     2 | R8, R9                             | CRCW0402100KFK; RC0402FR-07100KL                         | VISHAY;YAGEO                          | 100K              | RES; SMT (0402); 100K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                 |
| 17     |     1 | SU1                                | C33-GAG1-2X3-G                                           | VALCON                                | C33-GAG1-2X3-G    | CONNECTOR; FEMALE; 2.54MM MULTI-POSITION JUMPER LINK; WIREMOUNT; 6PINS                                                                                                             |
| 18     |     2 | SU2, SU4                           | S1100-B;SX1100-B; STC02SYAN                              | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B          | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                            |
| 19     |     1 | SU3                                | M7687-05                                                 | HARWIN                                | M7687-05          | CONNECTOR; FEMALE; CLOSED-BOX JUMPER SOCKET WITH HANDLE; BLUE; STRAIGHT; 2PINS                                                                                                     |
| 20     |     4 | TP1, TP6, TP7, TP16                | 5011                                                     | KEYSTONE                              | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
| 21     |     3 | TP2-TP4                            | 5008                                                     | KEYSTONE                              | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
| 22     |     2 | TP5, TP8                           | 5009                                                     | KEYSTONE                              | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
| 23     |     4 | TP9, TP10, TP13, TP14 111-2223-001 |                                                          | EMERSON NETWORK POWER                 | 111-2223-001      | MACHINE SCREW; THUMBSCREW; BANANA; 1/4-32IN; 11/32IN; NICKEL PLATED BRASS                                                                                                          |
| 24     |     2 | TP11, TP12                         | 5007                                                     | KEYSTONE                              | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST  |
| 25     |     1 | TP15                               | 5010                                                     | KEYSTONE                              | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL; NOT FOR COLD TEST                                                            |
| 26     |     1 | U1                                 | MAX98365A                                                | MAXIM                                 | MAX98365A         | EVKIT PART - IC; MAX98365; WLP9; PACKAGE CODE: W121D1+1; PACKAGE OUTLINE: 21- 100536                                                                                               |
| 27     |     1 | PCB                                | MAX98365A_WLP_APPS_P1                                    | MAXIM                                 | PCB               | PCB:MAX98365A_WLP_APPS_P1                                                                                                                                                          |
| TOTAL  |    56 |                                    |                                                          |                                       |                   |                                                                                                                                                                                    |

| DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)                                 |
|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------------------------------------|
| ITEM                   | QTY                    | REF DES                | MFG PART #             | MANUFACTURER           | VALUE                  | DESCRIPTION                                          |
| 1                      | 7                      | C1-C3, C8-C11          | N/A                    | N/A                    | OPEN                   | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR - EVKIT     |
| 2                      | 2                      | L1, L2                 | RC1608J000CS           | SAMSUNG ELECTRONICS    | 0                      | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM |
| 3                      | 1                      | R6                     | ERJ-2GE0R00            | PANASONIC              | 0                      | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W          |
| TOTAL                  | 10                     |                        |                        |                        |                        |                                                      |

| PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   |
|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| ITEM                                                                                        | QTY                                                                                         | REF DES                                                                                     | MFG PART #                                                                                  | MANUFACTURER                                                                                | VALUE                                                                                       | DESCRIPTION                                                                                 |
| TOTAL                                                                                       | 0                                                                                           |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |

## MAX98365 Evaluation Systems

## MAX98365 DEV Board PCB Schematic

<!-- image -->

## MAX98365 Evaluation Systems

## MAX98365 DEV Board PCB Layout

MAX98365A DEV Board-Top Side

<!-- image -->

MAX98365A DEV Board-Bottom Side

<!-- image -->

## Evaluates: MAX98365A/MAX98365B/ MAX98365C/MAX98365D

MAX98365A DEV Board-Top Silkscreen

<!-- image -->

MAX98365A DEV Board-Top

<!-- image -->

│

## MAX98365 Evaluation Systems

## MAX98365 DEV Board PCB Layout (continued)

<!-- image -->

MAX98365A DEV Board-Inner 1

<!-- image -->

MAX98365A DEV Board-Inner 2

MAX98365A DEV Board-Bottom

<!-- image -->

MAX98365A DEV Board-Bottom Silkscreen

<!-- image -->

│

## MAX98365 Evaluation Systems

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX98365A/MAX98365B/

MAX98365C/MAX98365D