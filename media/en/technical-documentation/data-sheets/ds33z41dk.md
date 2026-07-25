<!-- lastmod 2022-08-02 -->
<!-- image -->

WIX

## www.maxim-ic.com

## GENERAL DESCRIPTION

The DS33Z41 design kit is an easy-to-use evaluation board for the DS33Z41 Ethernet transport-over-serial link device. The DS33Z41DK is intended to be used with a resource card for the serial link. The serial link resource cards are complete with transceivers, transformers, and network connections. Dallas' ChipView  software  is  provided  with  the  design  kit, giving  point-and-click  access  to  configuration  and status registers from a Windows ® -based PC. On-board LEDs indicate receive loss-of-signal, queue overflow, Ethernet link, Tx/Rx, and interrupt status.

Windows is a registered trademark of Microsoft Corp.

## ORDERING INFORMATION

| PART      | DESCRIPTION                                                 |
|-----------|-------------------------------------------------------------|
| DS33Z41DK | DS33Z41 demo card, T1/E1 transceiver resource card included |

<!-- image -->

## DS33Z41DK

## Ethernet Transport Design Kit

## FEATURES

-  Demonstrates Key Functions of DS33Z41 Ethernet Transport Chipset
-  Includes Resource Card for DS21458 T1/E1 quad Transceiver with Transformers, RJ48 Network Connectors, and Termination
-  Provides Support for Hardware and Software Modes
-  On-Board MMC2107 Processor and ChipView Software Provide Point-and-Click Access to the DS33Z41 Register Set
-  All DS33Z41 Interface Pins are Easily Accessible for External Data Source/Sink
-  LEDs for Loss-of-Signal, Queue Overflow, Ethernet Link, Tx/Rx, and Interrupt Status
-  Easy-to-Read Silkscreen Labels Identify the Signals Associated with All Connectors, Jumpers, and LEDs

## DESIGN KIT CONTENTS

- DS33Z41DK Main Board
- CD\_ROM
- Quad-Port Serial Card with DS21458 T1/E1
- o ChipView Software and Manual
- o DS33Z41DK Data Sheet
- o Configuration Files

<!-- image -->

## TABLE OF CONTENTS

| GENERAL DESCRIPTION..........................................................................................................1                                                                                                                                                                                               |                                                                                                                   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| ORDERING INFORMATION .......................................................................................................1                                                                                                                                                                                                |                                                                                                                   |
| DESIGN KIT CONTENTS............................................................................................................1                                                                                                                                                                                             |                                                                                                                   |
| COMPONENT LIST.....................................................................................................................3                                                                                                                                                                                         |                                                                                                                   |
| PC BOARD ERRATA..................................................................................................................9                                                                                                                                                                                           |                                                                                                                   |
| FILE LOCATIONS.......................................................................................................................9                                                                                                                                                                                       |                                                                                                                   |
| BASIC OPERATION..................................................................................................................10                                                                                                                                                                                          |                                                                                                                   |
| POWERING UP THE DESIGN KIT                                                                                                                                                                                                                                                                                                   | ...............................................................................................................10 |
| General...............................................................................................................................................................                                                                                                                                                       | 10                                                                                                                |
| BASIC DS33Z41 INITIALIZATION (USED FOR ALL QUICK SETUPS) .............................................................10                                                                                                                                                                                                     |                                                                                                                   |
| Quick Setup #1 (Device Driver + DS21458 T1/E1)............................................................................................                                                                                                                                                                                   | 11                                                                                                                |
| Quick Setup #2 (DS21458 T1/E1, Register Based)...........................................................................................                                                                                                                                                                                    | 11 11                                                                                                             |
| Configuration Note: Using a Single System ....................................................................................................... Configuration Note: A Mixing Device Driver and Register-Based Modes..........................................................                                              | 11                                                                                                                |
| CONFIGURATION SWITCHES AND JUMPERS......................................................................12                                                                                                                                                                                                                   |                                                                                                                   |
| ADDRESS MAP (ALL CARDS) ................................................................................................14                                                                                                                                                                                                   |                                                                                                                   |
| QUAD T1/E1 RESOURCE CARD FPGA REGISTER MAP ............................................................................14                                                                                                                                                                                                    |                                                                                                                   |
| ID REGISTERS..........................................................................................................................14                                                                                                                                                                                     |                                                                                                                   |
| CONTROL REGISTERS.......................................................................................................................15                                                                                                                                                                                   |                                                                                                                   |
| DS33Z41 INFORMATION..........................................................................................................16                                                                                                                                                                                              |                                                                                                                   |
| DS33Z41DK INFORMATION ....................................................................................................16                                                                                                                                                                                                 |                                                                                                                   |
| TECHNICAL SUPPORT............................................................................................................16                                                                                                                                                                                              |                                                                                                                   |
| DOCUMENT REVISION HISTORY ...........................................................................................16                                                                                                                                                                                                      |                                                                                                                   |
| SCHEMATICS...........................................................................................................................17                                                                                                                                                                                      |                                                                                                                   |
| LIST OF FIGURES                                                                                                                                                                                                                                                                                                              | LIST OF FIGURES                                                                                                   |
| Figure 1. System Floorplan.......................................................................................................................................... Figure 2. DS21458 Resource Card Floorplan ............................................................................................................. | 8                                                                                                                 |
| 3. Schematic Hierarchy and Floorplan ...........................................................................................................                                                                                                                                                                             | 8                                                                                                                 |
| Figure                                                                                                                                                                                                                                                                                                                       | 17                                                                                                                |
| LIST OF TABLES                                                                                                                                                                                                                                                                                                               | LIST OF TABLES                                                                                                    |
| Table 1. Component List (Decoupling Caps Not Shown)............................................................................................                                                                                                                                                                              | 3                                                                                                                 |
| Table 2. Main Board PC Board Configuration ...........................................................................................................                                                                                                                                                                       | 12                                                                                                                |
| Table 3. Overview of Daughter Card Address Map...................................................................................................                                                                                                                                                                            | 14                                                                                                                |

## COMPONENT LIST

Table 1 shows the component list for the DS33Z44 and DS33Z11/DS33Z41 design kits and resource cards. This BOM  contains  the  part  listing  for  five  boards.  These  boards  are  the  DS33Z41DK,  DS33Z44DK,  DS21458RC, DS3174RC, and DS2155-DS21348-DS3170RC. Each reference designator is only used once. For example, U18 only appears on the DS33Z41DK and is not used on any of the other boards. See Table 2.

Table 1. Component List (Decoupling Caps Not Shown)

| DESIGNATION                                                                             |   QTY | DESCRIPTION                                                            | SUPPLIER                | PART          |
|-----------------------------------------------------------------------------------------|-------|------------------------------------------------------------------------|-------------------------|---------------|
| U18                                                                                     |     1 | ELITE 10/100 ETHERNET TRANSPORT OVER SERIAL LINK 14X14 CSBGA 169 PIN   | Dallas Semiconductor    | DS33Z41       |
| U20                                                                                     |     1 | 3.3V T1.E1.J1 QUAD TRANSCEIVER 0-70C 256P BGA                          | Dallas Semiconductor    | DS21458       |
| U22                                                                                     |     1 | QUAD 10/100 ETHERNET EXTENSION TO WAN 17X17 PBGA 256 PIN               | Dallas Semiconductor    | DS33Z44       |
| U23                                                                                     |     1 | DS3/E3 SCT, 11X11 CSBGA, 100 PIN                                       | Dallas Semiconductor    | DS3170        |
| U24                                                                                     |     1 | T1/E1/J1 XCVR 100P QFP 0-70C                                           | Dallas Semiconductor    | DS2156L       |
| U25                                                                                     |     1 | 3.3V LIU                                                               | Dallas Semiconductor    | DS21348       |
| UB08                                                                                    |     1 | QUAD TRIPLE DUAL SINGLE ATM PACKET PHYS FOR DS3 E3 STS1 0-70C 400P BGA | Dallas Semiconductor    | DS3184        |
| U01, U09                                                                                |     2 | SOIC 8PIN STEP-UP DC-DC CONVERTER 0.5A LIMIT                           | Maxim                   | MAX1675EUA    |
| U07, U11                                                                                |     2 | 8-Pin μ MAX/SOIC 1.8V or Adj                                           | Maxim                   | MAX1792EUA18  |
| U13, UB01                                                                               |     2 | MICROPROCESSOR VOLTAGE MONITOR, 2.93V RESET, 4PIN SOT143               | Maxim                   | MAX811SEUS-T  |
| U21, UB07                                                                               |     2 | Dual RS-232 transceivers with 3.3V/5V internal capacitors              | MAXIM                   | NA            |
| U31, UB06, UB11                                                                         |     3 | 8-Pin μ MAX/SOIC 2.5V or Adj                                           | Maxim                   | MAX1792EUA25  |
| C11, C13, C16, C25, C27, C31-C35, C37, C41, C47, CB10, CB63, CB114, CB128, CB164, CB496 |    19 | 1206 CERAM 10uF 10V 20%                                                | Panasonic               | ECJ-3YB1A106M |
| CB390, CB391, CB395, CB396                                                              |     4 | 1206 CERAM 0.1uF 25V 10%                                               | Panasonic               | ECJ-3VB1E104K |
| D01-D03, D05, DB03-DB05                                                                 |     7 | SCHOTTKY DIODE, 1 AMP 40 VOLT                                          | International Rectifier | 10BQ040       |
| DS01, DS07, DS10-DS12, DS17, DS20                                                       |     7 | LED, AMBER, SMD                                                        | Panasonic               | LN1451C       |
| DS02, DS03, DS09, DS14, DS15                                                            |     5 | L_LED, GREEN, SMD                                                      | Panasonic               | LN1351C       |
| DS04-DS06, DS08, DS13, DS16, DS18, DS27, DS28, DS35, DS37, DS38, DS40                   |    13 | LED, RED, SMD                                                          | Panasonic               | LN1251C       |
| DS19, DS43                                                                              |     2 | LED, GREEN, SMD                                                        | Panasonic               | LN1351C       |
| DS21-DS26, DS30, DS32- DS34, DS36, DS39, DS41, DS42, DS44-DS48                          |    19 | L_LED, RED, SMD                                                        | Panasonic               | LN1251C       |
| GND_TP01-GND_TP07, GND_TP09--GND_TP44, GND_TP46-GND_TP68, GND_TPB01-GND_TPB10           |    76 | STANDARD GROUND CLIP                                                   | KEYSTONE                | 4954          |
| H1-H8, H17-H19                                                                          |     8 | KIT, 4-40 HARDWARE, .50 NYLON STANDOFF AND NYLON HEX-NUT               | NA                      | Lab Stock     |

| DESIGNATION                                                                                     |   QTY | DESCRIPTION                                                                             | SUPPLIER           | PART           |
|-------------------------------------------------------------------------------------------------|-------|-----------------------------------------------------------------------------------------|--------------------|----------------|
| H9-H16                                                                                          |    16 | KIT, 4-40 HARDWARE, 1.12 NYLON STANDOFF AND NYLON HEX-NUT (1.12 STANDOFF PN = 4807K-ND) | NA                 | Lab Stock      |
| J01-J05                                                                                         |     5 | CONNECTOR, FASTJACK SINGLE, 8 PIN                                                       | Halo Electronics   | HFJ11-2450E    |
| J06, J41                                                                                        |     2 | 100 MIL 2*7 POS JUMPER                                                                  | NA                 | Lab Stock      |
| J07-J12                                                                                         |     6 | RECEPTACLE, SMD, 140 PIN, .8MM, 2 ROW VERTICAL                                          | AMP                | 5-179010-6     |
| J13-J22                                                                                         |    10 | L_TERMINAL STRIP, 10 PIN, DUAL ROW, VERT DO NOT POPLUATE                                | NA                 | Lab Stock      |
| J23, J29, J32, J38, J39, J43, J44, J47, JB07                                                    |     9 | L_TERMINAL STRIP, SHROUDED, 10 PIN, DUAL ROW, VERT                                      | 3M Electronics     | 2510-6002UB    |
| J24, J30, J31, J33                                                                              |     4 | 100 MIL 2 POS JUMPER                                                                    | NA                 | Lab Stock      |
| J25, J26, J45, J46                                                                              |     4 | TERMINAL STRIP, 10 PIN, DUAL ROW, VERT                                                  | NA                 | Lab Stock      |
| J27, J42                                                                                        |     2 | CONN 50 PIN, 2 ROW, POSTS VERT, MOTHERBOARD FOOTPRINT                                   | SAMTEC             | TSW-125-07-T-D |
| J28, J36                                                                                        |     2 | L_CONN, DB9 RA, LONG CASE                                                               | AMP                | 747459-1       |
| J48, J54, JB01                                                                                  |     3 | SOCKET, BANANA PLUG, HORIZONTAL, BLACK                                                  | Mouser Electronics | 164-6218       |
| J49-J52                                                                                         |     4 | CONNECTOR BNC 75 OHM VERTICAL 5PIN                                                      | Cambridge          | CP-BNCPC-004   |
| J53, JB02, JB08                                                                                 |     3 | SOCKET, BANANA PLUG, HORIZONTAL, RED                                                    | Mouser Electronics | 164-6219       |
| J55, JB11                                                                                       |     2 | L_RJ48 8 PIN SINGLE PORT CONNECTOR                                                      | MOLEX              | 15-43-8588     |
| J56-J59, J61, J63                                                                               |     6 | CONNECTOR BNC 75 OHM RA 5PIN                                                            | Trompetor          | UCBJR220       |
| J60, J62, J64, J65                                                                              |     4 | CONNECTOR BNC RA 5PIN                                                                   | Trompetor          | UCBJR220       |
| JB05, JB06, JB09, JB10, JB13, JB14                                                              |     6 | PLUG, SMD, 140 PIN, .8MM, 2 ROW VERTICAL                                                | AMP                | 179031-6       |
| JB12                                                                                            |     1 | RA RJ45 8PIN 4PORT JACK                                                                 | MOL                | 43223-8140     |
| JP01-JP19                                                                                       |    19 | 100 MIL 3 POS JUMPER                                                                    | NA                 | NA             |
| L01, L03-L08, LB01, LB02                                                                        |     9 | FERRITE 3A 100 OHM AT 100 MHZ 1206 SMD                                                  | Steward            | HI1206N101R-00 |
| L02, L09                                                                                        |     2 | INDUCTOR 22.0uH 2PIN SMT 20%                                                            | Coiltronics        | UP1B-220       |
| L10                                                                                             |     1 | XFMR 1-2CT XMIT, 1-1CT RCV, 40P WIDE SOIC                                               | Pulse              | T1068          |
| R01, R02, RB10, RB11, RB18, RB19, RB22, RB23, RB26, RB27                                        |    10 | RES 0603 54.9 Ohm 1/16W 1%                                                              | Panasonic          | ERJ-3EKF54R9V  |
| R03, R04, RB12, RB13, RB20, RB21, RB24, RB25, RB28, RB29                                        |    10 | RES 0603 49.9 Ohm 1/16W 1%                                                              | Panasonic          | ERJ-3EKF49R9V  |
| R05, R06, R08, R09, R11                                                                         |     5 | RES 0603 10.0K Ohm 1/16W 1% - Must be 1% tolerance                                      | Panasonic          | ERJ-3EKF1002V  |
| R07, R12, R16, R79, R160, R244, R248, R250, R251, R254, R255, RB126, RB143, RB147, RB150, RB157 |    16 | RES 0603 1.0K Ohm 1/16W 5%                                                              | Panasonic          | ERJ-3GEYJ102V  |
| R10, R107                                                                                       |     2 | RES 1206 5.6 Ohm 1/8W 5%                                                                | Panasonic          | ERJ- 8GEYJ5R6V |
| R132, R137, R142, R144, R156, RB194, RB208, RB227                                               |     8 | L_RES 0603 0 Ohm 1/16W 1%                                                               | AVX                | CJ10-000F      |

| DESIGNATION                                                                                                                                                                                                                                                                                                                                                                             |   QTY | DESCRIPTION                 | SUPPLIER   | PART            |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-----------------------------|------------|-----------------|
| R13-R15, R18-R20, R22, R23, R29, R30, RB01, RB03, RB07, RB09, RB15-RB17, RB30- RB32, RB34-RB38, RB41, RB44, RB47, RB48, RB50- RB52, B55, RB60, RB62, RB72, RB73, RB75, RB80, RB82                                                                                                                                                                                                       |    40 | RES 0603 5.1K Ohm 1/16W 5%  | Panasonic  | ERJ-3GEYJ512V   |
| R17, R21, R25-R28, R31, R55, R57-R59, R71, R74-R76, R83, R96-R102, R105, R106, R109, R111, R112, R115-R117, R120, R122-R126, R128, R133, R134, R140, R141, RB61, RB96, RB97, RB99, RB100, RB102-RB110, RB112, RB114-RB119, RB121, RB123-RB125, RB127, RB128, RB130, RB131, RB133, RB135-RB138, RB145, RB148, RB149, RB160, RB161, RB164, RB165, RB167-RB171, RB173-RB181, RB184, RB187, |   104 | RES 0603 30 Ohm 1/16W       | Panasonic  | ERJ-3GEYJ300V   |
| RB359 R171, R172, R174, R175, R190, R191, R240, R241                                                                                                                                                                                                                                                                                                                                    |     8 | L_RES 0805 0.0 Ohm 1/10W 5% | Panasonic  | ERJ- 6GEY0R00V  |
| R198-R200, R210-R213, RB306, RB325, RB326                                                                                                                                                                                                                                                                                                                                               |    10 | RES 0603 332 Ohm 1/16W 1%   | Panasonic  | ERJ-3EKF3320V   |
| R201-R208, RB321-RB324, RB327-RB330                                                                                                                                                                                                                                                                                                                                                     |    16 | RES 1206 0 Ohm 1/8W 5%      | Panasonic  | ERJ- 8GEYJ0R00V |
| R239, RB349                                                                                                                                                                                                                                                                                                                                                                             |     2 | RES 0805 51.1 Ohm 1/10W 1%  | Panasonic  | ERJ-6ENF51R1V   |
| R24, R114, R197, RB14, RB33, RB40, RB42, RB43, RB49, RB53, RB54, RB57-RB59, RB71, RB77, RB78, RB152- RB156, RB221, RB234, RB251, RB284, RB304, RB331, RB332, RB342, RB344, RB350, RB354, RB360                                                                                                                                                                                          |    34 | L_RES 0603 330 Ohm 1/16W 5% | Panasonic  | ERJ-3GEYJ331V   |
| R242, R243, RB144, RB166, RB355-RB358, RB368-RB371                                                                                                                                                                                                                                                                                                                                      |    12 | RES 0603 51 Ohm 1/16W 5%    | Panasonic  | ERJ-3GEYJ510V   |
| R32, R70, R78, R161, R176, R194, R195, R237, R238,                                                                                                                                                                                                                                                                                                                                      |    13 | RES 0603 330 Ohm 1/16W 5%   | Panasonic  | ERJ-3GEYJ331V   |
| RB129, RB134, RB146, RB193 R33-R54, R60-R69, R72, R73, R131, R136, R143, R147, R150, R154, R158, R163, R166, R169, R173, R178- R189, R215-R228, RB89- RB95, RB101, RB188-RB191, RB196-RB199, RB202-RB205, RB210-RB213, RB216-RB219, RB223-RB226, RB230-RB233, RB239-RB242, RB244-RB249, RB252-RB260, RB265-RB268, RB270-RB282, RB289-RB297                                              |   152 | RES 0402 30 Ohm 1/16W 5%    | Panasonic  | ERJ-2GEJ300X    |
| R56, R90                                                                                                                                                                                                                                                                                                                                                                                |     2 | RES 0603 1.0M Ohm 1/16W 5%  | Panasonic  | ERJ-3GEYJ105V   |
| R77, RB159                                                                                                                                                                                                                                                                                                                                                                              |     2 | L_RES 1206 0 Ohm 1/8W 5%    | Panasonic  | ERJ- 8GEYJ0R00V |
| R80, R81, R84, R87, R89, R91- R93, R95, R108, R110, R118, R127, R152, R153, R196, R209, R214, R229-R236, RB200, RB237, RB238, RB263, RB264, RB286, RB287, RB300,                                                                                                                                                                                                                        |    37 | RES 0603 10K Ohm 1/16W 5%   | Panasonic  | ERJ-3GEYJ103V   |

| DESIGNATION                                                                                                                                                                                                                                                                                                                                                                       |   QTY | DESCRIPTION                                                   | SUPPLIER               | PART                |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|---------------------------------------------------------------|------------------------|---------------------|
| R85, R88, R94, R104, R113, RB02, RB04-RB06, RB08, RB39, RB45, RB46, RB56, RB63-RB70, RB76, RB83, RB98, RB183, RB185, RB192, RB209, RB228, RB302, RB303, RB305, RB338, RB340, RB341, RB346-RB348, RB351-RB353, RB361-RB363, RB365-RB367                                                                                                                                            |    48 | RES 0603 2.0K Ohm 1/16W 5%                                    | Panasonic              | ERJ-3GEYJ202V       |
| R86, R103, R119, R121, R129, R130, R135, R138, R139, R145, R146, R149, R151, R157, R162, R164, R167, R168, R170, R177, R192, R193, R245-R247, R249, R252, R253, R256, R257, RB74, RB79, RB132, RB139-RB141, RB151, RB162, RB163, RB172, RB182, RB186, RB206, RB207, RB214, RB215, RB220, RB222, RB229, RB235, RB236, RB243, RB250, RB261, RB262, RB269, RB308-RB310, RB343, RB345 |    61 | L_RES 0603 10K Ohm 1/16W 5%                                   | Panasonic              | ERJ-3GEYJ103V       |
| RB201, RB285                                                                                                                                                                                                                                                                                                                                                                      |     2 | RES 0805 330 Ohm 1/10W 5%                                     | Panasonic              | ERJ-6GEYJ331V       |
| RB283                                                                                                                                                                                                                                                                                                                                                                             |     1 | RES 0603 10K Ohm 1/10W 5% - SEE SPECIAL INSTRUCTIONS          | Panasonic              | 603_ERJ- 3GEYJ103V  |
| RB298, RB299, RB312-RB319, RB336, RB337                                                                                                                                                                                                                                                                                                                                           |    12 | RES 0805 61.9 Ohm 1/10W 1%                                    | Panasonic              | ERJ-6ENF61R9V       |
| RB81, RB84-RB88, RB111, RB113, RB120, RB122                                                                                                                                                                                                                                                                                                                                       |    10 | RES 0603 DO NOT POPULATE                                      | NA                     | NA                  |
| SW01-SW05, SW08-SW21, SW24-SW26, SW29-SW31, SW33-SW44                                                                                                                                                                                                                                                                                                                             |    37 | L_SWITCH, SP3T SLIDE, 4PIN TH                                 | Tyco                   | 3-1437575-3         |
| SW06, SW22                                                                                                                                                                                                                                                                                                                                                                        |     2 | L_SWITH 8POS 16PIN DIP LOW PROFILE                            | AMP                    | 435668-7            |
| SW07, SW23                                                                                                                                                                                                                                                                                                                                                                        |     2 | SWITCH MOM 4PIN SINGLE POLE                                   | Panasonic              | EVQPAE04M           |
| SW27, SW28, SW32                                                                                                                                                                                                                                                                                                                                                                  |     3 | L_DIPSWITCH, 10 POS                                           | AMP                    | 435668-9            |
| T01, T03                                                                                                                                                                                                                                                                                                                                                                          |     2 | XFMR 16P SMT                                                  | Pulse                  | TX1099              |
| T02, TB01                                                                                                                                                                                                                                                                                                                                                                         |     2 | XFMR, OCTAL T3/E3, 1 TO 2, SMT 32 PIN                         | Pulse                  | T3049               |
| TP01-TP78, TPB01, TPB02                                                                                                                                                                                                                                                                                                                                                           |    80 | TESTPOINT, 1 PLATED HOLE, DO NOT STUFF                        | NA                     | NA                  |
| U02-U06                                                                                                                                                                                                                                                                                                                                                                           |     5 | IC, DsPHYTER11-SINGLE 10/100 ETHERNET TRANSCEIVER, 65 PIN LLP | National Semiconductor | DP83847ALQA5 6A     |
| U08, U12, U29                                                                                                                                                                                                                                                                                                                                                                     |     3 | 1MBit Flash based config mem                                  | Avnet                  | XCF01SV020C         |
| U10                                                                                                                                                                                                                                                                                                                                                                               |     1 | XILINX SPARTAN xc200 2.5V FPGA,256 PIN BGA                    | Xilinx                 | XC2S200- 5FG256C    |
| U14, U26, U30, UB05                                                                                                                                                                                                                                                                                                                                                               |     4 | CYPRESS SRAM, LAB STOCK                                       | NA                     | NA                  |
| U15, U19                                                                                                                                                                                                                                                                                                                                                                          |     2 | mmc2107 processor                                             | Motorola               | MMC2107             |
| U16, U27                                                                                                                                                                                                                                                                                                                                                                          |     2 | XILINX SPARTAN 2.5V FPGA,256 PIN BGA                          | Xilinx                 | XC2S50- 5FG256C     |
| U17, U28, U32                                                                                                                                                                                                                                                                                                                                                                     |     3 | 10 pin res pack, 10K ohm                                      | NA                     | NA                  |
| UB02, UB03, UB04                                                                                                                                                                                                                                                                                                                                                                  |     3 | 100 PIN CPLD                                                  | XILINX                 | XC95144XL- 10TQ100C |
| UB09, UB10                                                                                                                                                                                                                                                                                                                                                                        |     2 | SYNCHRONOUS DRAM, 1MEGX32X4 BANKS, TSOP 86 PIN                | Micron                 | MT48LC4M32B2 TG-7   |

| DESIGNATION                         |   QTY | DESCRIPTION                                                               | SUPPLIER   | PART               |
|-------------------------------------|-------|---------------------------------------------------------------------------|------------|--------------------|
| UX01-UX12, UXB02-UXB04, UXB06-UXB08 |    18 | HIGH SPEED BUFFER                                                         | Fairchild  | NC7SZ86            |
| UXB01, UXB05                        |     2 | HIGH SPEED INVERTER                                                       | Fairchild  | NC7SZ86            |
| X01, X02                            |     2 | XTAL LOW PROFILE 8.0MHZ                                                   | ECL        | EC1-8.000M         |
| Y01, Y09                            |     2 | OSCILLATOR, CRYSTAL CLOCK, 3.3V - 25.000 MHZ, Low Jitter required for PHY | SaRonix    | NTH089AA3- 25.000  |
| Y02, Y13                            |     2 | SPI SERIAL EEPROM 16K 8 PIN DIP 2.7V NEEDS SOCKET                         | Atmel      | AT25160A-10PI- 2.7 |
| Y03                                 |     1 | OSCILLATOR, CRYSTAL CLOCK, 3.3V - 2.048 MHZ                               | SaRonix    | NTH039A3- 2.0480   |
| Y05, Y06                            |     2 | OSCILLATOR, CRYSTAL CLOCK, 3.3V - 100.000 MHZ                             | SaRonix    | NTH089A3- 100.0000 |
| Y07                                 |     1 | OSCILLATOR, CRYSTAL CLOCK, 3.3V - 44.736 MHZ                              | SaRonix    | NTH089AA3- 44.736  |
| Y08                                 |     1 | OSCILLATOR, CRYSTAL CLOCK, 5.0V - 44.736 MHZ                              | SaRonix    | NTH089AA- 44.736   |
| YB02                                |     1 | L_OSCILLATOR, CRYSTAL CLOCK, 3.3V - 2.048 MHZ                             | SaRonix    | NTH039A3- 2.0480   |

Figure 1. System Floorplan

<!-- image -->

Figure 2 shows the DS21458 quad T1/E1 PC board floorplan. The current configuration is to populate oscillators for  MCLK1  with  a  8.192MHz  oscillator.  Testpoints  for  port  3  and  port  4  are  provided  on  the  WAN  card,  and testpoints for ports 1 and 2 are provided on the motherboard.

Figure 2. DS21458 Resource Card Floorplan

<!-- image -->

## PC BOARD ERRATA

- Silkscreen  for  JTAG  connector  signal  descriptions  is  incorrect  on  the  quad  T1/E1  card.  This  should  be corrected with an adhesive label.

## FILE LOCATIONS

This design kit relies upon several supporting files, which are provided on the CD and are available as a zip file from the Maxim website at www.maxim-ic.com/DS33Z41DK.

All locations are given relative to the top directory of the CD/zip file.

- DS33Z41 register definition files and configuration files:
- o .\cfg\_demo\_gui\DS33Z41\_cfg\_demo\_gui\DS33Z41.def
- o .\DS33Z41\_cfg\_demo\_gui\SU\_LI\_PORT1.def
- o .\DS33Z41\_cfg\_demo\_gui\z41\_basic.mfg
- DS21458 register definition files and configuration files:
- o .\DS33Z41\_cfg\_demo\_gui\Qt1e1\_DS21458\DS21458RC\_FPGA.def
- o .\DS33Z41\_cfg\_demo\_gui\Qt1e1\_DS21458\DS21458RC.def
- o .\DS33Z41\_cfg\_demo\_gui\Qt1e1\_DS21458\T1\_IBO\_ LoopTime.ini
- o .\DS33Z41\_cfg\_demo\_gui\Qt1e1\_DS21458\T1\_IBO\_ SourceTime.ini
- o .\DS33Z41\_cfg\_demo\_gui\Qt1e1\_DS21458\E1\_CRC\_HDB3\_IBO\_ SourceTime.ini
- o .\DS33Z41\_cfg\_demo\_gui\Qt1e1\_DS21458\E1\_CRC\_HDB3\_IBO\_ LoopTime.ini

## BASIC OPERATION

## Powering Up the Design Kit

- Attach DS21458 resource card to main board.
- Connect  PCB  3.3V  and  GND  banana  plugs  to  power  supply.  At  power-up  the  system  should  draw approximately 1A.
- Set switches for software mode as described in Table 2 (short description follows).
- Top right bank: A2, A1, A0 in mid position, SCANTRI low
- Top left bank: All low, except for MODEC0, which is high.
- Bottom Bank: All high (AFCS, FULLDS, H1OS)

## General

- Upon power-up, the processor FPGA Status LEDs (DS43 green) will be lit. Interrupt LEDs (DS44 red) will not be lit. DS33Z11 Queue overflow LEDs (DS39 red) will not be lit. PHY LINK LED (DS06 green) should be lit if the Ethernet is connected.

Following are several basic system initializations.  These initializations assume that there are two boards present (DS33Z41 and / or DS33R41).  A note is provided below to assist with using a system that only contains one board.

## Basic DS33Z41 Initialization (Used for All Quick Setups)

This section covers four basic methods for configuring the DS33Z41. Any one of these initializations can be used with the following Quick Setup examples:

1. Upon power-up, the on-board device driver provides a basic configuration for the DS33Z41 and attached serial cards. This enables traffic to pass from the Ethernet port to the serial port. Consult the device driver documentation for further details.  Device driver behavior is dependant upon jumper settings, which are detailed in Table 2.
2. Launch ChipView.exe and select Register View. When prompted for a definition file, pick the file named DS33Z41.def . Following this load the definition file named DS21458RC\_FPGA.def
3. Hardware Mode is not available with this DK
4. EEPROM mode is not available with this DK.
5. Ethernet Traffic generation and analysis:
- a. Using a patch cable, connect the Ethernet connector to an ordinary PC, or network test equipment. This should cause the link LED to turn on.
- b. Although ping is mentioned it is *not* recommended.  The ping command goes through the computers TCPIP stack, and will sometimes will not be sent out the PCs network connector (i.e. if the PCs ARP cache is out of date).  Additionally ping requires two PCs, as a PC can not ping itself (a local ping gets sent to 'localhost' instead of out the connector).  With that said - ping is still a valuable test once the prototyping stage is complete.
- c. Generation and capture of arbitrary (raw) packets can be accomplished using CommView.  A timelimited demo is available at the website www.tamos.com/products/commview.
- d. Ethereal is an excellent (and free) packet capture utility. Download is available at www.ethereal.com.
- e. Adding additional Ethernet ports to a PC is rather simple when a USB-to-Ethernet adapter is used. This allows for end-to-end testing using a single PC.  When using two adapters the PC will have a different IP address for each adapter.  Test equipment will allow selection of either adapter. Operating system based network traffic will be sent out the default adapter, usually this is the adapter that has recently had connection to a real network.

## Quick Setup #1 (Device Driver + DS21458 T1/E1)

- Select TCLK source for the DS21458 resource card.  If this is the only DS33Z41 in the system (i.e. used in loopback) then select TCLK=MCLK. From Table 2, this requires that the J45.3+J45.4 jumper is not installed.  If this is the second DS33Z41 in the system select TCLK=RCLK, which requires that J45.3+J45.4 jumper is installed.  Note: The TCLK source settings can be changed using the driver interface, which is described below.
- Complete the hardware configuration and one of the basic DS33Z41 configurations as described in the previous section.
- At this point any packets sent to the DS33Z41 are sent out the T1/E1 ports. Incoming Ethernet packets should cause the RX LED to blink, transmitted packets cause the TX LED should also blink.
- Launch ChipView.exe, select Register View
- Tools → Plugins → Load Plugins.   When asked if DLLs have already registered select yes
- To interact with the device driver go to ChipView and select from the drop down menu:
- Select Tools → Plugins → DS33Z41/11/41 Device Driver Demo
- Preload basic configuration for the GUI by selecting File → Load Settings (in the 'Zchip Configuration' form). Select the file named 'basic\_Config.eset'
- A new form called 'Zchip Configuration' appears

## Quick Setup #2 (DS21458 T1/E1, Register Based)

1. Disable device drivers and callbacks - remove all jumpers from J45 header.  Press the reset button, or cycle power on the board to restore the system to its power-on state.
2. Configure the DS33Z41.  After the definition files load, go to the File menu and select File → Memory Config File → Load .MFG file. When prompted, select the file named z41\_basic.mfg .
3. Set the DS2148 serial card for IBO mode.  Using the menu marked 'Def File Selection' switch to the DS21458RC\_FPGA def file.  Set the register MO+CLK to 0x47.
4. Configure the DS21458.  Go to the File menu and select File → Register INI File → Load .INI file. When prompted, select either the file named T1\_IBO\_ SourceTime.ini (TCLK=MCLK) or T1\_IBO\_ LoopTime.ini (TCLK=RCLK).  Set one board to be the source of network timing (TCLK=MCLK), and one board to follow the timing source (TCLK=RCLK).  The RLOS LEDs should go out when this step is complete for both boards.
5. Additional setup (for both boards):
- Switch to the DS33Z41 def file and set the following:
- Set GL.IMUXC register to 0x00 then to 0x82 (both systems)
- Set the GL.IMUXCN register to 0x0F (both systems)
- Check GL.IMUXSS register.  They should be 0xFF on both systems
- The system should now be configured to pass Ethernet traffic into one system and out of the other.
- Return to GL.IMUXCN and set the bits RXE and SENDE

## Configuration Note: Using a Single System

The DS33Z41 is intended for use in a system with a DS33Z41 at each end. However, the system may be tested with only a single DS33Z41 system. This configuration requires that the DS21458 serial link is in loopback, either internal loopback or hardware loopback may be used. In this configuration any packets sent to the Ethernet side will be echoed back. In this configuration the setting for DS21458 TCLK=MCLK should be used (see Table 2) and steps intended for the 'second' system may be ignored.

## Configuration Note: A Mixing Device Driver and Register-Based Modes

Quick setup #1 discuses device driver based operation.  Quick setup #2 discusses register based operation. To some extent both modes may be used simultaneously to gain insight to device configuration. For example:

- In register view click 'Read All'  this causes all registers to be read, changed registers turn green.
- Switch back to register view and click 'Read All'.  Newly changed registers will turn green, showing which registers changed as a result of settings selected in the device driver GUI
- Switch to the device driver GUI, select one of the forms, make changes, and click 'send configuration'

A second type of device driver/register-based configuration is to power the board with the device drivers enabled, and then remove the jumpers that enable the device drivers. This allows for a fast initial configuration.

## CONFIGURATION SWITCHES AND JUMPERS

The DS33Z41DK has several configuration switches, banana plugs, oscillators, and jumpers. Table 2 provides a description of these signals, given in order of appearance on the PC board (going from left to right, top to bottom).

Table 2. Main Board PC Board Configuration

| SILKSCREEN REFERENCE       | FUNCTION                            | BASIC SETTING   | BASIC SETTING   | DESCRIPTION                                                                                                                                                                                                                 |
|----------------------------|-------------------------------------|-----------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                            |                                     | SW MODE         | HW MODE         |                                                                                                                                                                                                                             |
| J45.9 + J45.10             | Reserved                            | Not installed   | -               | This jumper is not for use with the DS33Z41 design kit. Pin J25.10 has been removed to prevent accidental installation                                                                                                      |
| J45.7 + J45.8              | Enable device driver                | User decision   | -               | When installed the device driver will configure the DS33Z41 and the Transceiver during power-up.                                                                                                                            |
| J45.5 + J45.6              | Enable callbacks                    | User decision   | -               | When installed the driver will respond to interrupts                                                                                                                                                                        |
| J45.3 + J45.4              | Select TCLK source                  | User decision   | -               | When installed the driver will configure DS21458 TCLK to be sourced from DS21458 RCLK. When not installed DS21458 scaled MCLK is used. This setting is only applied at reset. If only one board is used select TCLK = MCLK. |
| GROUND (banana plug)       | Power supply ground                 | -               | -               | System Ground. Always connected to power supply.                                                                                                                                                                            |
| VDD 3.3V (banana plug)     | Power supply VDD                    | -               | -               | System VDD. Always connected to power supply.                                                                                                                                                                               |
| OnCe                       | BDM                                 | -               | -               | Debug connector for processor                                                                                                                                                                                               |
| DCEDTES (3pos switch)      | DS33Z41 mode pin; DTE/DCE selection | LOW             | LOW             | Low for DTE                                                                                                                                                                                                                 |
| RMIIMII (3pos switch)      | DS33Z41 mode pin                    | LOW             | LOW             | High for RMII, low for MII                                                                                                                                                                                                  |
| CKPHA (3pos switch)        | DS33Z41 mode pin                    | LOW             | LOW             | SPI EEPROM hardware mode configuration switch                                                                                                                                                                               |
| MODEC0 (3pos switch)       | DS33Z41 mode pin                    | HIGH            | LOW             | Software mode selected                                                                                                                                                                                                      |
| MODEC1 (3pos switch)       | DS33Z41 mode pin                    | LOW             | LOW             | Software mode selected                                                                                                                                                                                                      |
| HWMODE (3pos switch)       | DS33Z41 mode pin                    | LOW             | LOW             | Hardware/software mode (software mode selected)                                                                                                                                                                             |
| SCANMO (3pos switch)       | DS33Z41 mode pin                    | LOW             | LOW             | Set low for normal operation                                                                                                                                                                                                |
| SCANTRI (3pos switch)      | DS33Z41 mode pin                    | LOW             | LOW             | Set low for normal operation                                                                                                                                                                                                |
| ….testpoints….             | DS33Z41 testpoints                  | -               | -               | Processor bus, JTAG and LAN side testpoints for Zchip                                                                                                                                                                       |
| Z-RESET (button)           | DS33Z41 reset                       | -               | -               | System reset                                                                                                                                                                                                                |
| A2, A1, A0 (3pos switches) | DS33Z41/SPI pins                    | Mid position    | Mid position    | Address pin/EEPROM config switch. Set to mid position to allow connection to processor.                                                                                                                                     |
| SDRAM CLOCK                | DS33Z41 SDRAM clock                 | Installed       | Installed       | 100MHz oscillator to drive SDRAM clock                                                                                                                                                                                      |
| MII CLOCK                  | PHY MII clock                       | Installed       | Installed       | 25MHz oscillator to drive SDRAM clock                                                                                                                                                                                       |

| SILKSCREEN REFERENCE               | FUNCTION                 | BASIC SETTING   | BASIC SETTING   | DESCRIPTION                                                                       |
|------------------------------------|--------------------------|-----------------|-----------------|-----------------------------------------------------------------------------------|
|                                    |                          | SW MODE         | HW MODE         |                                                                                   |
| spi_cs, spi_ck, spi_miso, spi_mosi | -                        | -               | -               | SPI signals (for EEPROM memory)                                                   |
| ….testpoints…..                    | DS33Z41 testpoints       | -               | -               | DS33Z41 serial port testpoints                                                    |
| AFCS (1 per port)                  | DS33Z41 mode pin         | HW mode only    | HIGH            | Set high to enable auto flow control.                                             |
| FULLDS (1 per port)                | DS33Z41 mode pin         | HW mode only    | HIGH            | Set high to enable full duplex.                                                   |
| H10S (1 per port)                  | DS33Z41 mode pin         | HW mode only    | HIGH            | Set high to confg for 100Mb.                                                      |
| GROUND/VDD (banana plug)           | Power supply ground/3.3V | -               | -               | Redundant connection to system power. Use plugs at either top or bottom of board. |
| VDD 3.3V (banana plug)             | Power supply VDD         | -               | -               | Redundant connection to system power. Use plugs at either top or bottom of board. |

## ADDRESS MAP (ALL CARDS)

Motorola resource card address space begins at 0x81000000. All offsets given below are relative to the beginning of the daughter card address space (shown previously).

Table 3. Overview of Daughter Card Address Map

| OFFSET           | DEVICE   | DESCRIPTION                                                                                                                                                                                                                                     |
|------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0X0000 to 0X0087 | FPGA     | Processor board identification                                                                                                                                                                                                                  |
| 0X1000 to 0X1FFF | DS33Z41  | DS33Z41. Uses CS_X1.                                                                                                                                                                                                                            |
| 0X2000 to 0X2FFF | DS21458  | T1/E1 DS21458 resource card. Uses CS_X2.                                                                                                                                                                                                        |
| 0X4000 to 0X4010 | FPGA     | FPGA on DS21458 resource card. Used to facilitate IBO mode. Default configuration of FPGA is compatible with non-IBO mode functionality. The FPGA settings will require modification for use with the DS33Z41 when device drivers are disabled. |

Registers  in  the  DS33Z41  and  DS21458  can  be  easily  modified  using  the  ChipView  host-based  user-interface software with the definition files previously mentioned.

## Quad T1/E1 Resource Card FPGA Register Map

Table 4. Quad T1/E1 Processor Card FPGA Register Map

| OFFSET   | REGISTER NAME   | TYPE      | DESCRIPTION                  |
|----------|-----------------|-----------|------------------------------|
| 0X4000   | Rev             | Read only | FPGA Rev                     |
| 0X4001   | delay_line1     | Control   | Line 1 number of frame delay |
| 0X4002   | delay_line2     | Control   | Line 2 number of frame delay |
| 0X4003   | delay_line3     | Control   | Line 3 number of frame delay |
| 0X4004   | delay_line4     | Control   | Line 4 number of frame delay |
| 0X4005   | MO+CLK          | Control   | Mode and clock ctrl          |
| 0X4006   | UNUSED          | Control   | Unused / test                |
| 0X4007   | UNUSED          | Control   | Unused / test                |

## ID REGISTERS

REV: FPGA REV (Offset=0X4000)

FPGA Rev is read only, showing the current FPGA revision

## CONTROL REGISTERS

Register Name:

delay\_line1, delay\_line2, delay\_line3, delay\_line4

Register Description:

DS33Z41 frame delay

Register Offset:

0X4001, 0X4002, 0X4003, 0X4004

| Bit #   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
|---------|-----|-----|-----|-----|-----|-----|-----|-----|
| Name    | -   | -   | B5  | B4  | B3  | B2  | B1  | B0  |
| Default | -   | -   | -   | -   | 0   | 0   | 0   | 0   |

Bits 5 to 0: B5 to B0. Number of frame delay for a given line.

Register Name:

MO+CLK

Register Description:

DS33ZXY Mode and Clock Settings

Register Offset:

0X4005

| Bit #   | 7   | 6   | 5   | 4       | 3       | 2         | 1           | 0        |
|---------|-----|-----|-----|---------|---------|-----------|-------------|----------|
| Name    | LB  | MC  | IR  | tgapclk | rgapclk | comm_tclk | common_rclk | z41_mode |
| Default | 0   | -   | -   | 1       | 1       | 0         | 0           | 0        |

## Bit 7:  LB

0 = Normal operation, traffic goes from the Z chip through the FPGA and to the DS21458.

1 = Loopback, Z chip rser is driven by Z chip tser. Clocks, and frame sync for Z41, are still driven by DS21458.

## Bit 6: INVERT\_RCLKh

0 = Do not invert RCLK.

1 = Invert RCLK.

## Bit 5: MclkHiBpclkLow

0 = Use BPCLK for clock signals below.

1 = Use MCLK for clock signals below.

This signal drives the following clocks: TCLK (when bit for common\_tclk is set); RCLK (when bit for common\_rclk is set); TSYSCLK and RSYSCLK (when bit for Z41\_mode is set).

## Bit 4: TGAPCLK

0 = Drive internal TGAPCLKx signal with TCLKx.

1 = Drive internal TGAPCLKx signal with TGAPCLK pin.

## Bit 3: RGAPCLK

0 = Drive internal RGAPCLKx signal with RCLKx.

1 = Drive internal RGAPCLKx signal with RGAPCLK pin.

## Bit 2: Common TCLK

0 = Drive TCLKx with internal  TGAPCLKx signal (see bit 4)

1 = Drive Z chip TCLKx with BPCLK

## Bit 1: Common RCLK

0 = Drive RCLKx with internal RGAPCLKx signal (see bit 3).

1 = Drive Z chip RCLKx with BPCLK.

## Bit 0: Z41 Mode

0 = Not in Z41 mode.

1 = In Z41 mode.

## DS33Z41 INFORMATION

For  more  information  about  the  DS33Z41,  consult  the  DS33Z41  data  sheet  available  on  our  website  at www.maxim-ic.com/DS33Z41.

## DS33Z41DK INFORMATION

For more information about the DS33Z41DK, including software downloads, consult the DS33Z41DK data sheet available on the our website at www.maxim-ic.com/DS33Z41DK.

## TECHNICAL SUPPORT

For additional technical support, go to www.maxim-ic.com/support.

## DOCUMENT REVISION HISTORY

|   REVISION DATE | DESCRIPTION                           |
|-----------------|---------------------------------------|
|          051505 | Initial DS33Z41DK data sheet release. |
|          080706 | Updated Table 2.                      |
|          110106 | Updated schematics.                   |

## SCHEMATICS

The  DS33Z41DK  schematics  are  featured  in  the  following  pages.  As  this  is  a  hierarchal  schematic  some explanation is in order. The main board is composed of six hierarchal blocks: the processor block, the DS33Z41 block,  and  four  Ethernet  blocks  inside  the  DS33Z41  block,  which  is  a  nested  hierarchy  block.  The  DS21458 consists of a single hierarchy block, which connects to a 140-pin AV bus that snaps into the mainboard.

All signals inside a hierarchy block are local, with exception for VCC and ground. In-port and out-port connectors are used to allow signals inside a hierarchy block to become accessible as pins on the hierarchy blocks symbol. From here, blocks are wired together as if they were ordinary components. The system diagram is shown again below, with schematic page numbers given for each functional block.

This system contained other hierarchy blocks that are not shown (primarily a single-port serial card, T3E3 serial card and the DS33Z44 mainboard). Due to this, page numbers will not be continuous and some gaps in numbering will be seen when referring to the total page count. However, page numbers inside any given hierarchy block will be continuous.

Figure 3. Schematic Hierarchy and Floorplan

<!-- image -->

17 of 44

Maxim/Dallas Semiconductor cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim/Dallas Semiconductor product. No circuit patent licenses are implied. Maxim/Dallas Semiconductor reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA 94086 408-737-7600

@\_ZTOP\_LIB\.\_ZTOPDN\_\(SCH\_1):PAGE1\_I5@\_ZTOP\_LIB\.\_Z11TOP\_DN\(SCH\_1):PAGE1

CR-3 :

1

2

3

4

5

6

7

8

HIERARCHICAL BLOCK

4D8

3D8

4D8&gt;

3C8&lt;&gt;

3C5&lt;&gt;

3B8&lt;&gt;

3B5&lt;&gt;

3A8&lt;&gt;

3A5&lt;&gt;

V3\_3

V3\_3

ADDR&lt;9..0&gt;

A\_DUT&lt;9..0&gt;

4C6&lt;

5A1v

5B1v

5C4v

GND

DAT&lt;7..0&gt;

D\_DUT&lt;7..0&gt;

4C6&lt;

D

\_z11andlan\_dn PAGES 5-10

CS

CS\_X1

4D3&gt;

RD

RD\_DUT

4C5&lt;

5B4v

5A6v

LEVEL

TOP

DS33Z11/Z41

D

5A5v

4D5&lt;

3C8&lt;&gt;

3C7&lt;&gt;

5A6v

INT2

INT

WR

WR\_DUT

4C5&lt;

5A5v RESET\_B

RESET\_B

3C7&lt;&gt;

4C3&gt;

5A5v

PLUG

CONNECTOR (PLUG)

P1

PLUG

CONNECTOR (PLUG)

P2

Z41RSYNC

Z41RSYNC

3C6&lt;&gt;

4B5&lt;

5A5v

BTS\_DUT

HWMODE

Z41TSYNC

Z41TSYNC

3C6&lt;&gt;

6A6v

6A6v

JB09

JB13

4C5&lt;

5A5v

BIS0\_DUT

4B5&lt;

5A5v

BIS1\_DUT

MODEC0

MODEC1

TDEN

RDEN

TSER

RSER

TCLKI

RCLKI

4C3&gt;

ALE

1

CS\_X4

GND

3

2

71

GND

6

5

4

73

74

5C5v

3C8&lt;&gt;

5C4v

3C6&lt;&gt;

3C6&lt;&gt;

5D5v

3C6&lt;&gt;

5C5v

Z44\_TDEN&lt;1&gt;

Z44\_RDEN&lt;1&gt;

Z44\_TSER&lt;1&gt;

Z44\_RSER&lt;1&gt;

Z44\_TCLK&lt;1&gt;

Z44\_RCLK&lt;1&gt;

GND

GND

7

8

9

10

78

77

76

75

72

GND

GND

CS\_X5

4C3&gt;

4D5&lt;

4C5&lt;

INT3

INT4

1

5A6v

4D5&lt;

5A5v

3D1&gt;

3C8&lt;&gt;

3D3&lt;

4C3&gt;

INT2

RESET\_B

GND

3

2

71

GND

6

5

4

73

74

V3\_3

3A5&lt;&gt;

3A8&lt;&gt;

3B5&lt;&gt;

3B8&lt;&gt;

3C5&lt;&gt;

3C8&lt;&gt;

3D8&gt;

4D8&gt;

3D8

4D8

79

5D5v

3C1&gt;

Z44\_TSER&lt;1&gt;

11

12

81

80

14

13

15

16

83

84

85

82

GND

3B7&lt;&gt;

3A3&lt;&gt;

GND

5C4v

3A1&gt;

3C1&gt;

Z44\_TDEN&lt;1&gt;

SIG\_RETURN

GND

7

8

9

78

77

10

79

11

12

81

80

76

75

72

GND

GND

INT5

INT2

4C5&lt;

3C7&lt;&gt;

4D5&lt;

3D1&gt;

5A6v V3\_3

Z44\_RSER&lt;1&gt;

3C1&gt;

GND

17

18

87

86

19

GND

20

21

22

23

91

24

92

25

93

Z44\_TSER&lt;3&gt;

GND

26

94

95

GND

3C7&lt;&gt;

3A3&lt;&gt;

3A1&gt;

Z44\_TSER&lt;2&gt;

SIG\_RETURN

GND

88

GND

5C5v

3C2&gt;

Z44\_TCLK&lt;1&gt;

6A6v

6A6v

3D3&lt;

3D3&lt;

Z41TSYNC

Z41RSYNC

GND

14

13

15

16

83

84

85

82

GND

Z44\_RDEN&lt;1&gt;

5C5v

C

3C1&gt;

5C5v GND

Z44\_RCLK&lt;1&gt;

3C2&gt;

5C5v

89

90

V3\_3

3A5&lt;&gt;

3A8&lt;&gt;

3B5&lt;&gt;

3B8&lt;&gt;

3C5&lt;&gt;

3C8&lt;&gt;

3D8&gt;

4D8&gt;

3D8

4D8

GND

17

18

87

19

20

21

22

23

91

88

86

GND

89

90

V3\_3

3D8

3A5&lt;&gt;

24

92

25

93

27

Z44\_TDEN&lt;3&gt;

GND

28

29

30

98

96

97

GND

Z44\_RSER&lt;3&gt;

Z44\_TDEN&lt;2&gt;

GND

26

94

GND

3B8&lt;&gt;

4D8

3A8&lt;&gt;

3C5&lt;&gt;

3B5&lt;&gt;

3C8&lt;&gt;

3D8&gt;

4D8&gt;

Z44\_RSER&lt;2&gt;

95

27

31

B

Z44\_TCLK&lt;3&gt;

GND

32

101

100

99

GND

33

34

35

36

104

102

103

V3\_3

Z44\_RDEN&lt;3&gt;

Z44\_TCLK&lt;2&gt;

Z44\_RCLK&lt;3&gt;

3A5&lt;&gt;

4D8&gt;

3D8

4D8

3A8&lt;&gt;

3B5&lt;&gt;

3B8&lt;&gt;

3C5&lt;&gt;

3C8&lt;&gt;

3D8&gt;

GND

30

28

29

98

96

97

GND

Z44\_RDEN&lt;2&gt;

31

100

99

GND

32

101

GND

Z44\_RCLK&lt;2&gt;

33

34

GND

39

38

37

105

106

107

GND

40

Z44\_TSER&lt;4&gt;

GND

42

41

110

111

43

112

3C7&lt;&gt;

3B7&lt;&gt;

3A1&gt;

Z44\_TCLK&lt;4&gt;

SIG\_RETURN

GND

46

45

Z44\_TDEN&lt;4&gt;

44

114

115

47

48

49

50

GND

GND

52

51

120

118

116

113

GND

Z44\_RSER&lt;4&gt;

GND

39

38

109

108

GND

35

36

104

102

103

V3\_3

4D8

3A5&lt;&gt;

3B8&lt;&gt;

3A8&lt;&gt;

3C5&lt;&gt;

3B5&lt;&gt;

3C8&lt;&gt;

3D8&gt;

4D8&gt;

B

3D8

37

105

106

107

GND

40

V3\_3

Z44\_RDEN&lt;4&gt;

3A5&lt;&gt;

4D8&gt;

3D8

4D8

3A8&lt;&gt;

3B5&lt;&gt;

3B8&lt;&gt;

3C5&lt;&gt;

3C8&lt;&gt;

3D8&gt;

GND

42

41

110

109

111

43

112

117

GND

Z44\_RCLK&lt;4&gt;

GND

46

45

44

113

GND

114

47

48

115

V3\_3

3D8

3A5&lt;&gt;

3B8&lt;&gt;

4D8

3A8&lt;&gt;

3C5&lt;&gt;

3B5&lt;&gt;

3C8&lt;&gt;

3D8&gt;

4D8&gt;

116

117

119

121

GND

49

53

54

123

122

55

0

GND

56

57

58

59

60

1

XD&lt;7..0&gt;

5

3

GND

62

61

7

GND

66

65

64

63

132

133

134

131

130

129

128

127

126

125

124

GND

4B4&gt;

4B4&gt;

TDO\_NU

TCK\_NU

GND

GND

52

55

54

53

123

51

50

120

119

121

GND

122

GND

OSC1\_NU

3

5

GND

56

60

GND

2

4

XD&lt;7..0&gt;

4B2&gt;

3A4

XA&lt;15..0&gt;

6

8

10

4B2&gt;

3A8

GND

62

64

63

61

132

133

3C7&lt;&gt;

3B7&lt;&gt;

3A3&lt;&gt;

SIG\_RETURN

GND

4C3&gt;

RW\_X

GND

68

69

70

140

139

WR\_X

67

135

136

137

GND

CS\_X2

138

V3\_3

6

4D3&gt;

CS\_X3

3A5&lt;&gt;

4C3&gt;

3A8&lt;&gt;

3B5&lt;&gt;

3B8&lt;&gt;

3C5&lt;&gt;

3C8&lt;&gt;

3D8&gt;

4D8&gt;

3D8

4D8

GND

66

65

134

59

131

GND

7

9

XA&lt;15..0&gt;

58

57

130

129

128

127

126

125

124

GND

TDI\_NU

V3\_3

TMS\_NU

4B4&gt;

3B8&lt;&gt;

3A5&lt;&gt;

4B4&gt;

3D8&gt;

0

2

3A8&lt;&gt;

3B5&lt;&gt;

4D8&gt;

3C5&lt;&gt;

3C8&lt;&gt;

3D8

4D8

A

GND

4

67

135

136

4C3&gt;

OSC3\_NU

GND

68

70

69

140

139

138

V3\_3

OSC2\_NU

3C5&lt;&gt;

3A5&lt;&gt;

OSC4\_NU

3B5&lt;&gt;

3C8&lt;&gt;

3D8&gt;

4D8&gt;

3B8&lt;&gt;

3D8

4D8

3A8&lt;&gt;

137

GND

11

V3\_3

3A5&lt;&gt;

3A8&lt;&gt;

3B5&lt;&gt;

3B8&lt;&gt;

3C5&lt;&gt;

3C8&lt;&gt;

3D8&gt;

4D8&gt;

3D8

4D8

1

118

GND

108

GND

VDD

C

A

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

1/2(BLOCK)

PAGE:

3/71(TOTAL)

SCULLY

STEVE

ENGINEER:

MOTHERBOARD CONNECTORS FOR WAN R.C.

1

2

3

4

5

6

7

8

PARENT BLOCK: \_ztopdn\_\

BLOCK NAME: \_z11top\_dn.

1

2

3

4

5

6

7

8

V3\_3

4D8

3D8

3D8&gt;

3C8&lt;&gt;

3C5&lt;&gt;

3B8&lt;&gt;

3B5&lt;&gt;

3A8&lt;&gt;

3A5&lt;&gt;

V3\_3

GND

D

D

I47

17B3v

3D3&lt;

CS\_X1

CS\_X1

INT2

INT2

3C7&lt;&gt;

3C8&lt;&gt;

3D1&gt;

13B7v

17B3v

3A5&lt;&gt;

CS\_X2

CS\_X2

INT3

INT3

3C7&lt;&gt;

13B7v

17A4v

3A5&lt;&gt;

CS\_X3

CS\_X3

13-19

PAGES

INT4

INT4

3C7&lt;&gt;

13B7v

17A4v

3C4&lt;&gt;

CS\_X4

CS\_X4

INT5

INT5

3C8&lt;&gt;

14D4v

17A4v

3C5&lt;&gt;

CS\_X5

CS\_X5

\_motprocrescard\_dn

C

13A5v

3D3&lt;

3C7&lt;&gt;

RESET\_B

RESET\_B

RD\_DUT

RD\_DUT

3D3&lt;

17C3v

C

WR\_DUT

WR\_DUT

3D3&lt;

17C3v D\_DUT&lt;7..0&gt;

D\_DUT&lt;7..0&gt;

3D3&lt;

17D5v

17B3v

3A4&lt;&gt;

RW\_X

RW\_X

A\_DUT&lt;11..0&gt;

A\_DUT&lt;11..0&gt;

3D3&lt;

17A5v

17A6v

17B3v

3A5&lt;&gt;

WR\_X

WR

BIS0\_DUT

BIS0\_DUT

3C1&gt;

17C3v

17C7v

3A8

3A7

XA&lt;15..0&gt;

17B3v

3A6

3A4

XD&lt;7..0&gt;

XA&lt;15..0&gt;

XD&lt;7..0&gt;

TDO\_NU

TCK\_NU

TDI\_NU

TMS\_NU

BIS1\_DUT

BTS\_DUT

BIS1\_DUT

3C1&gt;

17C3v BTS\_DUT

3D1&gt;

17C3v

B

19A7v

3A7&lt;&gt;

19A7v

3A8&lt;&gt;

19A7v

3A8&lt;&gt;

TDO\_NU

TCK\_NU

TDI\_NU

TMS\_NU

B

A

A

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

2/2(BLOCK)

PAGE:

4/71(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

DS33Z11/Z41

3C2^

3C2^

3C2^

3C2^

3C2^

3C2^

D

IO

IN

OUT

IN

IN

IN

D

TDEN

RDEN

30

TSER

RB359

RSER

TCLKI

RCLKI

5A3&lt;&gt;

5A3&lt;&gt;

5A3&lt;&gt;

5A3&lt;&gt;

5A3&lt;&gt;

RED

2

1

DS39

R197

TP53

4

BUFFER

UXB06

1

TP74

330

LED+TP

C7

1

1

TP75

1

TP77

1

TP78

1

TP71

1

TP72

JTRST

JTCLK

JTDO

JTDI

JTMS

F5

H2

F2

H1

F1

G2

E6

D4

E5

E4

F7

NC7SZ86\_U

V3\_3

2.7V

C

Y13

5B2&lt;&gt;

ZADDR0

A1

A&lt;0&gt;

5B2&lt;&gt;

ZADDR1

B1

A&lt;1&gt;

10K

RB343

10K

RB345

8

3

VCC

SI

5

ZMOSI

5B4&lt;&gt;

5A2&lt;&gt;

ZADDR2

A2

A&lt;2&gt;

QOVF

TDEN/TBSYNC

RDEN/RBSYNC

TSER

IO

RSER

TCLKI

RCLKI

JTRST

JTCLK

JTDO

JTDI

JTMS

REF\_CLK

D13

TP36

REF\_CLK

8A1&lt;

LINE

JTAG

REF\_CLKO

E13

RX\_CRS/CRS\_DV

C8

30

RX\_CRS&lt;1&gt;

8C3&gt;

WP*

SO

2

ZMISO

5B4&lt;&gt;

3

B2

A&lt;3&gt;

RX\_ERR

B12

RX\_ERR&lt;1&gt;

8C3&gt;

7

HOLD*

SCK

6

ZSPISCK

5B4&lt;&gt;

4

C2

A&lt;4&gt;

RX\_CLK

A10

RX\_CLK&lt;1&gt;

8C3&gt;

RB174

TP35

REF\_CLKO

C

4

GND

CS*

1

ZSPICS

5A5&gt;

5

A3

A&lt;5&gt;

6

B3

7

C3

A&lt;6&gt;

A&lt;7&gt;

U18

PORTS

(INPUT)

RXD&lt;0&gt;

RXD&lt;2&gt;

RXD&lt;3&gt;

RXD&lt;1&gt;

B11

RXD0&lt;1&gt;

8D3&gt;

C11

RXD1&lt;1&gt;

8C3&gt;

D11

RXD2&lt;1&gt;

8C3&gt;

A11

RXD3&lt;1&gt;

8C3&gt;

5B2&lt;

3D2^

AT25160A\_U

ADDR&lt;9..0&gt;

5B1&lt;

3D2^

IN

8

9

A4

B4

A&lt;8&gt;

B

0

ZADDR0

5C3&lt;

1

ZMISO

A6

5C2&gt;

3

2

ZSPISCK

A7

5C2&lt;

D&lt;2&gt;/SPICK

IN

V3\_3

SW24

0

ZMOSI

A5

5C2&lt;

D&lt;1&gt;/MISO

D&lt;0&gt;/MOSI

A&lt;9&gt;

DS33Z11\_U3

MII/RMII

(OUTPUT)

RXDV

D10

RXDV&lt;1&gt;

8C3&gt;

TX\_CLK

A8

TX\_CLK&lt;1&gt;

8C5&lt;

TXD&lt;0&gt;

TXD&lt;1&gt;

TXD&lt;2&gt;

TXD&lt;3&gt;

B9

RB177

TXD0&lt;1&gt;

8D5&lt;

C9

RB178

30

TXD1&lt;1&gt;

D9

30

R55

TXD2&lt;1&gt;

8C5&lt;

8C5&lt;

B

E9

RB175

VALUE=30

TXD3&lt;1&gt;

8C5&lt;

ADDR&lt;9..0&gt;

1

4

4

6

C5

D&lt;6&gt;

MICRO PORT/SPI MASTER PORT

MDC

C12

MDIO

C13

R74

30

MDIO

8B4&gt;

B5

D&lt;3&gt;

SP3T

SW25

4

B6

D&lt;4&gt;

TX\_EN

E10

VALUE=30

RB176

TX\_EN&lt;1&gt;

8C5&lt;

ZADDR1

5C3&lt;

5

B7

D&lt;5&gt;

COL\_DET

B13

30

COL\_DET&lt;1&gt;

8C3&gt;

RB173

MDC

8B4&gt;

SP3T

7

C6

D&lt;7&gt;

CKPHA

SCAN/MODE

SCAN/EN

AFCS

H10S

FULLDS

RMIIMIIS

DCEDTES

MODEC&lt;1&gt;

MODEC&lt;0&gt;

HWMODE

RST*

WR*/RW*

RD*/DS*

SPI\_CS*

CS*

INT*

SW26

3D2^

IO

DAT&lt;7..0&gt;

J29

30

2

ZADDR2

5C3&lt;

4

SP3T

F6

E8

E7

C10

B10

A9

C4

A13

D7

D6

D5

D8

E2

E1

B8

C1

F3

TCK\_NU

2

2

1

1

JTCLK

TMS\_NU

A

TDI\_NU

4

4

3

3

JTMS

6

6

5

5

JTDO

5D5&lt;

5D5&lt;

5D5&lt;&gt;

V3\_3

TDO\_NU

8

8

7

7

JTDI

5D5&lt;

CKPHA

SCANMOD

SCANEN

AFCS

H10S

10

10

9

9

JTRST

5D5&lt;

9B4&lt;

9B2&lt;

9B4&lt;

9C2&lt;

9C4&lt;

FULLDS

9C2&lt;

RMIIMIIS

9C4&lt;

DCEDTES

MODEC1

MODEC0

HWMODE

RESET\_B

WR

RD

ZSPICS

CS

INT

A

9D2&lt;

OUT

OUT

OUT

3D2^

IN

IN

5C2&lt;

IN

OUT

CONN\_10P

3C1^

3C1^

3D1^

8B4&lt;

3D2^

3D2^

3D2^

5A6&lt;&gt;

DS44

DATE:

DS33Z11/41/44DK01A0

TITLE:

9D4&lt;

9D2&lt;

9D4&lt;

3D1^

NC7SZ86\_U

BUFFER

RED

3D1^

5A6&gt;

INT

1

4

UXB08

2

1

RB342

V3\_3

09/16/2004

1/6(BLOCK)

PAGE:

5/71(TOTAL)

STEVE SCULLY

ENGINEER:

MODULE TO PROC

HW MODE PINS ARE OUTPUTS FROM Z

PROC (FPGA) AUTOMATICALY IMPLEMENTS BUS MODE

330

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

V3\_3

V1\_8ZCHIP

10B4&lt;&gt;

6B5&lt;

10A4&lt;

D

L12

M13

D12

E12

E11

F10

L3

K4

J4

F4

E3

D2

D3

H10

H9

H8

H7

H6

H5

G10

G9

G8

G7

G6

G5

D

0

R185

M1

1

RB259

L2

SDATA&lt;0&gt;

SDATA&lt;1&gt;

12VDD1.8

11VDD1.8

10VDD1.8

9VDD1.8

8VDD1.8

7VDD1.8

6VDD1.8

5VDD1.8

4VDD1.8

3VDD1.8

2VDD1.8

1VDD1.8

0VDD1.8

11VDD3.3

10VDD3.3

9VDD3.3

8VDD3.3

7VDD3.3

6VDD3.3

5VDD3.3

4VDD3.3

3VDD3.3

2VDD3.3

1VDD3.3

0VDD3.3

SBA&lt;0&gt;

M6

RB277

SD\_BA0

7B4&lt;

2

R184

N1

SDATA&lt;2&gt;

V3\_3

SBA&lt;1&gt;

N7

RB254

SD\_BA1

7B4&lt;

3

R183

M2

SDATA&lt;3&gt;

4

RB258

N2

5

RB257

N4

SDATA&lt;4&gt;

SDATA&lt;5&gt;

10UF

CB382

10UF

CB419

10UF

CB418

10UF

CB224

10UF

CB354

10UF

CB175

0.1UF

1

0.1UF

CB141

1

0.1UF

CB186

1

0.1UF

CB170

1

0.1UF

CB136

1

CB430

0.1UF

1

0.1UF

CB153

1

0.1UF

CB129

1

0.1UF

CB159

1

0.1UF

CB173

1

0.1UF

CB249

1

CB235

470UF

1

CB351

SDA&lt;0&gt;

N9

R187

0

SDA&lt;1&gt;

SDA&lt;2&gt;

N10

RB252

1

L11

RB270

2

6

RB245

N3

SDATA&lt;6&gt;

2

2

2

2

2

2

2

2

2

2

2

2

SDA&lt;3&gt;

K11

RB272

3

7

R182

L4

SDATA&lt;7&gt;

C

8

R223

J3

9

R224

M3

SDATA&lt;8&gt;

SDATA&lt;9&gt;

I228

10

R225

H3

SDATA&lt;10&gt;

NA

DS33Z11

SDA&lt;5&gt;

L8

RB276

5

SD\_A&lt;11..0&gt;

7A3&gt;

11

R226

J1

SDATA&lt;11&gt;

U18

SDA&lt;6&gt;

L9

RB275

6

SDA&lt;7&gt;

L5

R220

7

12

RB297

J2

13

R227

K1

SDATA&lt;12&gt;

SDATA&lt;13&gt;

DS33Z11\_U3

SDA&lt;8&gt;

SDA&lt;9&gt;

M5

R221

8

M7

R222

9

SDA&lt;4&gt;

L7

RB294

4

C

14

RB260

K2

15

R228

L1

SDATA&lt;14&gt;

16

R181

M12

SDATA&lt;15&gt;

SDRAM CONTROLLER SYSTEM

SDA&lt;11&gt;

N8

RB253

11

SDATA&lt;16&gt;

PWR/GND

SDMASK&lt;0&gt;

N6

RB255

SD\_DQM0

7C4&lt;

SDA&lt;10&gt;

M8

R188

10

17

R186

H11

SDATA&lt;17&gt;

V1\_8ZCHIP

10B4&lt;&gt;

6D4&lt;

10A4&lt;

SDMASK&lt;1&gt;

G4

RB296

SD\_DQM1

7C4&lt;

18

RB273

M11

B

19

R180

N13

20

R179

N11

SDATA&lt;18&gt;

21

RB271

L13

SDATA&lt;21&gt;

SDATA&lt;20&gt;

SDATA&lt;19&gt;

470UF

1

CB428

0.1UF

1

0.1UF

CB303

1

0.1UF

CB226

1

CB214

0.1UF

1

0.1UF

CB434

1

0.1UF

CB213

1

0.1UF

CB437

1

0.1UF

CB281

1

0.1UF

CB244

1

0.1UF

CB451

1

0.1UF

CB425

1

0.1UF

CB452

1

10UF

CB413

CB433

10UF

CB432

10UF

CB183

10UF

CB426

10UF

CB182

10UF

CB252

SDMASK&lt;3&gt;

SDMASK&lt;2&gt;

M10

RB274

SD\_DQM2

7C4&lt;

M9

R219

SD\_DQM3

7C4&lt;

B

SDCS*

L6

R189

SD\_CS

7C4&lt;

2

2

2

2

2

2

2

2

2

2

2

2

2

SDCLKO

N5

RB256

SD\_CLKO

7C3&lt;

22

RB244

N12

SDATA&lt;22&gt;

23

R178

K13

SDATA&lt;23&gt;

SYSCLKI

G13

SD\_CLKI

9D5&lt;

24

R215

J13

SDATA&lt;24&gt;

SRAS*

K6

RB293

SD\_RAS

7C4&lt;

SCAS*

H4

RB295

SD\_CAS

7C4&lt;

25

R216

J12

26

R217

H13

SDATA&lt;25&gt;

SDATA&lt;26&gt;

SDATA&lt;27&gt;

SDATA&lt;28&gt;

SDATA&lt;29&gt;

SDATA&lt;30&gt;

SDATA&lt;31&gt;

VSS18

VSS17

VSS16

VSS15

VSS14

VSS13

VSS12

VSS11

VSS10

VSS9

VSS8

VSS7

VSS6

VSS5

VSS4

VSS3

VSS2

VSS1

VSS0

NC3

NC2

NC1

DELAYED

OHM RESISTOR

BE

SD\_CLKO MAY

NC\_PINF9

OHM COAX

REMOVING 0

BY

AND CONNECTING

JUMPERS WITH 75

SWE*

M4

RB278

SD\_WE

7C4&lt;

H12

G12

F11

G11

L10

A12

F13

F12

K12

J10

K9

J9

K8

J8

K7

J7

J11

J6

K5

J5

F8

K10

K3

D1

G3

G1

F9

TP46

A

SD\_DQ&lt;31..0&gt;

7D7

Z41RSYNC

RB290

RB289

RB291

RB292

R218

Z41TSYNC

TP70

TP69

1

1

1

IN

IN

3D2^

3D2^

A

UNMARKED RESISTORS ARE 30 OHMS

27

28

29

30

31

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

2/6(BLOCK)

PAGE:

6/71(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

D

V3\_3

SD\_DQ&lt;31..0&gt;

6A2

0

1

3

9

35

41

49

55

75

81

1

15

29

43

2

4

SYSCLKO

Z11

FROM

V3\_3

6B8&lt;

SD\_CLKO

68

CLK

VDDQ1

VDDQ2

VDDQ3

VDDQ4

VDDQ5

VDDQ6

VDDQ7

VDDQ8

VDD1

VDD2

VDD3

VDD4

DQ&lt;0&gt;

DQ&lt;1&gt;

DQ&lt;2&gt;

5

2

DQ&lt;3&gt;

7

3

67

CKE

DQ&lt;4&gt;

8

4

6B8&lt;

SD\_CS

20

CS*

DQ&lt;5&gt;

10

5

6A8&lt;

SD\_WE

17

WE*

DQ&lt;6&gt;

11

6

C

6B8&lt;

SD\_CAS

18

CAS*

DQ&lt;7&gt;

13

7

C

6B8&lt;

SD\_RAS

19

RAS*

DQ&lt;8&gt;

74

8

6B8&lt;

SD\_DQM0

16

DQM&lt;0&gt;

DQ&lt;9&gt;

76

9

6B8&lt;

SD\_DQM1

71

DQM&lt;1&gt;

DQ&lt;10&gt;

77

10

6B8&lt;

SD\_DQM2

28

DQM&lt;2&gt;

DQ&lt;11&gt;

79

11

6B8&lt;

SD\_DQM3

59

DQM&lt;3&gt;

DQ&lt;12&gt;

80

12

6D7&lt;

SD\_BA0

22

BA&lt;0&gt;

UB10

DQ&lt;13&gt;

DQ&lt;14&gt;

82

13

83

14

6C7&lt;

SD\_BA1

23

BA&lt;1&gt;

MT48LC4M32B2\_TSOP\_U

DQ&lt;15&gt;

85

15

0

25

B

2

1

26

A&lt;0&gt;

A&lt;1&gt;

SYNCHRONOUS DRAM

DQ&lt;16&gt;

DQ&lt;17&gt;

31

16

33

17

4 BANKS

32 X

MEG X

1

MT48LC4M32B2 -

DQ&lt;18&gt;

34

18

27

A&lt;2&gt;

DQ&lt;19&gt;

36

19

B

3

60

A&lt;3&gt;

DQ&lt;20&gt;

37

20

4

61

A&lt;4&gt;

DQ&lt;21&gt;

39

21

5

62

A&lt;5&gt;

DQ&lt;22&gt;

40

22

6

63

A&lt;6&gt;

DQ&lt;23&gt;

42

23

7

64

A&lt;7&gt;

DQ&lt;24&gt;

45

24

8

65

A&lt;8&gt;

DQ&lt;25&gt;

47

25

9

66

A&lt;9&gt;

DQ&lt;26&gt;

48

26

6C8

SD\_A&lt;11..0&gt;

10

11

24

A&lt;10&gt;

DQ&lt;27&gt;

50

27

21

A&lt;11&gt;

DQ&lt;28&gt;

51

28

A

VSSQ1

VSSQ2

VSSQ3

VSSQ4

VSSQ5

VSSQ6

VSSQ7

VSSQ8

VSS1

VSS2

VSS3

VSS4

DQ&lt;31&gt;

DQ&lt;30&gt;

DQ&lt;29&gt;

53

29

A

6

12

32

38

46

52

78

84

44

58

72

86

56

54

31

30

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

3/6(BLOCK)

PAGE:

7/71(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

D

11A7v

5C7&lt;

RXD0&lt;1&gt;

RXD0

TXD0

TXD0&lt;1&gt;

5B7&lt;

11A5v

11A7v

5C7&lt;

RXD1&lt;1&gt;

RXD1

TXD1

TXD1&lt;1&gt;

5B7&lt;

11A5v

11A7v

5B7&lt;

RXD2&lt;1&gt;

RXD2

TXD2

TXD2&lt;1&gt;

5B7&lt;

11A5v

11A7v

5B7&lt;

RXD3&lt;1&gt;

RXD3

\_mii\_wan\_dn

HIERARCHICAL BLOCK

TXD3

TXD3&lt;1&gt;

5B7&lt;

11A5v PAGES 11-12

11A7v

5C7&lt;&gt;

RX\_CLK&lt;1&gt;

RX\_CLK

TX\_CLK

TX\_CLK&lt;1&gt;

5B7&lt;&gt;

11A5v

11A7v

5C7&lt;

RX\_CRS&lt;1&gt;

RX\_CRS

TX\_EN

TX\_EN&lt;1&gt;

5B8&lt;

11A5v

C

C

11A7v

5C7&lt;

RX\_ERR&lt;1&gt;

RX\_ERR

11A7v

5B7&lt;

RXDV&lt;1&gt;

RXDV

11A7v

5B7&lt;

COL\_DET&lt;1&gt;

COL\_DET

LED\_DPLX\_ADD0

LED\_DPLX\_A0&lt;1&gt;

8B8&lt;

11C5v LED\_COL\_ADD1

LED\_COL\_A1&lt;1&gt;

8B8&lt;

11C5v LED\_GDLINK\_ADD2

LED\_GDLINK\_A2&lt;1&gt;

8A8&lt;&gt;

11C5v LED\_TX\_ADD3

LED\_TX\_A3&lt;1&gt;

8A8&lt;&gt;

11C5v MII\_CLK

MDC

MDIO

RESET\_B

LED\_RX\_ADD4

LED\_RX\_A4&lt;1&gt;

8A8&lt;&gt;

11C5v

B

RESET\_B

V3\_3

RB44

LED\_DPLX\_A0&lt;1&gt;

8C6&lt;

11C5v

B

11C7v

8A1&lt;

11C5v

5B7&lt;

5B7&lt;

11C5v

MII\_CLK

MDC

MDIO

IN

5.1K

RB48

LED\_COL\_A1&lt;1&gt;

8C6&lt;

11C5v

5.1K

3D2^

5A5&lt;

RB72

8C6&lt;

11C5v

LED\_GDLINK\_A2&lt;1&gt;

25.000MHZ\_3.3V

11C7v

GREEN

5.1K

RB78

330

2

DS15

1

V3\_3

Y09

OSC

A

8

VCC

1

1

I69

100O100MZH

A

L04

11C7v

8B3&gt;

MII\_CLK

R140

5

OUT

GND

4

0.1UF

1

C10

10UF

CB04

10UF

CB05

I70

100O100MZH

AMBER

RB57

5.1K

330

2

DS11

1

1

2

V3\_3

RB60

LED\_TX\_A3&lt;1&gt;

8B6&lt;

11C5v

30

5C7&lt;&gt;

REF\_CLK

R133

30

2

1

LB01

2

RB47

DATE:

DS33Z11/41/44DK01A0

TITLE:

PHY

FOR

CHASSIS GND

RED

RB54

5.1K

LED\_RX\_A4&lt;1&gt;

8B6&lt;

11C5v

330

2

DS06

1

09/16/2004

CHASSIS

4/6(BLOCK)

PAGE:

8/71(TOTAL)

STEVE SCULLY

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

V3\_3

V3\_3

1

SW14

1

SW12

100.000MHZ\_3.3V

MODEC0TRI

3

2

2

RB67

1

MODEC0

4

2.0K

HIGH

5A5&gt;

3C1^

HWMODETRI

3

2

2

RB65

1

HWMODE

LOW

5A5&gt;

3D1^

Y06

4

2.0K

D

SP3T

SP3T

V3\_3

8

VCC

1

1

OSC

D

NC7SZ86\_U

1

SW17

1

SW13

6B8&lt;

SD\_CLKI

R120

4

UXB04

1

R128

DCEDTESTRI

3

2

2

RB70

1

DCEDTES

LOW

5A5&lt;

MODEC1TRI

3

2

2

RB66

1

MODEC1

LOW

5A5&gt;

3C1^

30

30

OSC100MHZ

5

OUT

GND

4

4

2.0K

4

2.0K

SP3T

SP3T

1

SW43

1

SW16

FULLDSTRI

3

2

2

RB366

1

FULLDS

4

2.0K

HIGH

5A5&lt;

RMIIMIISTRI

3

2

2

RB69

1

RMIIMIIS

LOW

5A5&lt;

4

2.0K

C

SP3T

SP3T

C

1

SW44

1

SW42

AFCSTRI

3

2

2

RB367

1

AFCS

LOW

5A4&lt;

H10STRI

3

2

2

RB365

1

H10S

HIGH

5A4&lt;

4

2.0K

4

2.0K

SP3T

SP3T

1

SW11

1

SW10

SCANMODTRI

3

2

2

RB64

1

SCANMOD

LOW

5A4&lt;

SCANENTRI

3

2

2

RB63

1

SCANEN

LOW

5A4&lt;

4

2.0K

4

2.0K

SP3T

SP3T

B

SIGNAME\_TRI DOES NOT

ANYWHERE

NETLIST)

PCB

CONNECT

(HELPS

CKPHATRI

1

SW15

B

3

2

2

RB68

1

CKPHA

4

2.0K

LOW

5A4&lt;

SP3T

MODE (SHOWN BELOW SIGNAL) RESULTS IN:

MOTOROLA NON-MUX, MII, FULL DUPLEX, 100 MBIT, AUTO-FLOW CONTROL

A

A

Z11

FOR

SWITCHES

CONFIG

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

5/6(BLOCK)

PAGE:

9/71(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

D

C

C

U07

10A4&lt;

6D4&lt;

6B5&lt;

V1\_8ZCHIP

2

2

2

2

8

MAX1792

OUT

IN

V3\_3

1

B

1UF

CB131

1

1UF

CB139

1UF

C46

10UF

CB110

7

6

OUT

IN

2

SET

RST

3

1

1

5

GND

SHDN

4

1UF

CB102

1UF

C38

1UF

C45

1UF

C70

1

1

1

2

B

1

2

2

2

1

A

I38

BLACK

BLACK

A

V1\_8ZCHIP

10B4&lt;&gt;

6B5&lt;

6D4&lt;

V3\_3

J54

A

B

1

2

1

2

A

JB01

B

V3\_3

0.1UF

1

0.1UF

CB181

1

0.1UF

CB436

1

CB454

0.1UF

1

0.1UF

CB453

1

0.1UF

CB304

1

0.1UF

CB280

1

0.1UF

CB435

1

0.1UF

CB455

1

CB450

0.1UF

1

0.1UF

CB253

1

0.1UF

CB234

1

CB456

0.1UF

1

0.1UF

CB217

1

0.1UF

CB192

1

0.1UF

CB345

1

0.1UF

CB225

1

0.1UF

CB344

1

CB355

I39

CONN\_BANANA\_2P

RED

CONN\_BANANA\_2P

RED

JB08

A

2

2

2

2

2

2

2

2

2

2

2

2

2

2

2

2

2

2

B

1

2

1

DATE:

DS33Z11/41/44DK01A0

TITLE:

CONN\_BANANA\_2P

2

A

JB02

B

CONN\_BANANA\_2P

09/16/2004

6/6(BLOCK)

PAGE:

10/71(TOTAL)

STEVE SCULLY

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

V3\_3

AN\_V3\_3

D

D

63

59

57

14

56

28

34

13

12

9

8

5

4

VDD3

VDD2

VDD1

VDD/ANA\_VDD

VDD/IO\_VDD2

VDD/IO\_VDD1

RESERVED9

RESERVED8

RESERVED7

RESERVED6

RESERVED5

RESERVED4

RESERVED3

PIN

AND RBIAS MUST

PLACED CLOSE TO

C1

BE

COMPONETS FOR

8B4^

IN

IO

MDC

30

R109

25

MDC

MDIO

24

MDIO

RESERVED2

2

IO

LED\_DPLX\_ADD0

23

LED\_DPLX/PHYAD0

RESERVED1

1

C1PIN

0.1UF

1

C30

10UF

1

C32

2

2

C

DP83847

TO

ATTACHED

BE

LEDS NEED TO

MODULE DUE

OUTSIDE OF

IO

LED\_COL\_ADD1

22

STRAP ADAPTING OPTION OF

IO

LED\_GDLINK\_ADD2

21

LED\_COL/PHYAD1

IO

IO

LED\_TX\_ADD3

20

LED\_GDLNK/PHYAD2

U04

C1

42

LED\_TX/PHYAD3

DP83847\_U1

RBIAS

3

RBIAS

R08

LED\_RX\_ADD4

19

LED\_RX/PHYAD4

CONTROL

X1

RESET*

49

MII\_CLK

10.0K

IN

8B4^

46

RESET\_B

IN

8B4^

C

TP03

18

LED\_SPEED

X2

48

1

AN\_EN

RB55

17

AN\_EN

AN1

RB52

5.1K

16

AN\_1

RESERVED10

44

AN0

RB07

5.1K

15

AN\_0

RESERVED11

47

5.1K

V3\_3

3

3

3

JP14

2

JP15

2

JP09

2

GND5

GND4

GND3

GND2

GND1

RESERVED18

RESERVED17

RESERVED16

RESERVED15

RESERVED14

RESERVED13

RESERVED12

1

1

1

65

64

62

60

58

61

55

54

53

52

51

50

B

B

100O100MZH

J13

J14

AN\_V3\_3

1

L03

V3\_3

12C8&lt;

8C5^

IN

TXD3

2

2

1

1

TX\_CLK

OUT

12C4&lt;

8C5^

OUT

RXDV

2

2

1

1

A

0.1UF

CB39

2

0.1UF

CB41

2

10UF

C16

10UF

1

CB63

10UF

CB497

10UF

CB96

0.1UF

1

C198

0.1UF

CB238

0.1UF

1

CB194

0.1UF

1

0.1UF

CB93

1

0.1UF

CB239

1

C207

12C8&lt;

8C5^

V3\_3

IN

TXD2

4

4

3

3

12C5&lt;

6

6

5

5

12B5&lt;

8C3^

2

2

2

2

12C8&lt;

8D5^

IN

TXD0

10

10

9

9

TX\_EN

8C3^

8C3^

OUT

RX\_CRS

IN

12C8&lt;

12C6&lt;&gt;

OUT

OUT

COL\_DET

4

RX\_ERR

6

4

3

3

RXD0

RXD1

OUT

OUT

8D3^

12B8&lt;

V3\_3

8C3^

12B8&lt;

8

6

5

5

8

7

7

8C5^

OUT

RX\_CLK

10

10

9

9

RXD2

RXD3

OUT

OUT

8C3^

12B8&lt;

8C3^

12B8&lt;

2

2

2

2

2

1

1

1

1

A

12C8&lt;

8C5^

IN

TXD1

8

8

7

7

CONN\_10P

CONN\_10P

NOTE:

PLACEMENT

DATE:

DS33Z11/41/44DK01A0

TITLE:

PLACEMENT SHOULD ALLOW

CONNECTORS.

BETWEEN

0.2

ALLOW USE OF A DIFFERENT PHY CARD IF DESIRED.

TESTPOINTS (SHOWN ABOVE) MUST BE PLACED THE SAME FOR EACH PORT TO

09/16/2004

ON Z44 CARD ALL 4 PORTS MUST BE PLACED WITH EQUAL SPACING AND A COMMON CENTER LINE

1/2(BLOCK)

PAGE:

11/71(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

D

SYM\_1

U04

J04

C06

.1UF

DP83847\_U1

9

SH1

NC7SZ86\_U

BUFFER

C

CHASSIS

J1

P4

4

54.9

C08

30

P1

1

RD\_P

R01

RB110

4

UX03

1

R129 2

10K

RX\_ERR

RXDV

33

PORT

RX\_ER/PAUSE\_EN*

TX\_ER

35

C

31

RX\_DV

TX\_EN

37

TX\_EN

P2

2

RD\_N

R02

J2

54.9

.1UF

RX\_CLK

RB88

32

RX\_CLK

TXD&lt;0&gt;

38

TXD0

P3

3

TD\_P

R03

V3\_3

TX\_CLK

DNP

RB87

36

TX\_CLK

TXD&lt;1&gt;

39

TXD1

DNP

J3

P5

5

49.9

NC7SZ86\_U

BUFFER

RX\_CRS

RB109

4

UX04

1

COL\_DET

30

R71

43

COL

R31

45

CRS/LED\_CFG*

TXD&lt;2&gt;

40

TXD2

TXD&lt;3&gt;

41

TXD3

P6

6

TD\_N

R04

49.9

30

30

RXD&lt;0&gt;

30

R134

RXD0

J6

.1UF

C138

RXD&lt;1&gt;

29

30

R75

RXD1

J4,5

RXD&lt;2&gt;

27

30

R141

RXD2

J7,8

P8

8

RXD&lt;3&gt;

26

30

R76

RXD3

30

B

10

SH2

TD\_P

10

TD+

RD+

7

RD\_P

B

CHASSIS

TD\_N

11

TD-

RD-

6

RD\_N

CONN\_HFJ11\_2450\_U

CHASSIS

XFRM CENTER TAP

CAPS FOR

SHOULD BE PLACED CLOSE TO XFRM

PHY

PLACED CLOSE TO

SHOULD BE

RESISTORS FOR TD+-/RD+-

A

A

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

2/2(BLOCK)

PAGE:

12/71(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

.1UF

C67

0.0

R77

2

FLASH\_VPP

VRH

TEA

TA

RCON

OE

RW

TQFP

NA

NA

TQFP

2

1

VDDSYN

D

1

V3\_3

MMC2107

9

19

33

45

65

77

129

141

123

103

74

115

87

112

113

92

102

99

97

95

59

VDD1

VDD2

VDD3

VDD4

VDD5

VDD6

VDD7

VDD8

VDDSYN

VDDH

VDDF

VDDA

VPP

VRL

VRH

VSTBY

TEA*

TA*

SHS*

OE*

RW

I51

U15

2107\_TDO

ONCE\_TDI

PQA0

PQA1

PQA3

PQA4

PQB0

PQB1

PQB2

PQB3

EB0

EB1

EB2

135

133

111

110

109

108

107

106

105

104

101

100

98

EB3

TIM\_16H\_8L

U15

MMC2107

I69

96

88

22

116

A22

21

117

A21

D31

144

20

119

A20

D30

1

31

30

TDO

TDI

PQA0

PQA1

PQA3

PQA4

PQB0

PQB1

PQB2

PQB3

EB0*

EB1*

EB2*

EB3*

INT6*

C

19

121

18

122

A19

A18

MMC2107

D29

D28

2

29

CSE1

3

28

CSE0

60

62

CSE1

CSE0

ICOC23

52

ICOC23

C

ICOC22

53

ICOC22

17

131

16

132

A17

A16

PORT

D27

D26

4

27

TC2

67

5

26

TC1

78

TC2

TC1

MMC2107

ICOC21

15

134

A15

D25

7

25

CS3

81

14

136

A14

D24

10

24

CS2

13

137

A13

D23

12

23

CS1

83

CS3*

85

CS2*

CONTROL

ICOC20

54

ICOC21

ICOC13

55

ICOC20

56

ICOC13

CS1*

ICOC12

57

ICOC12

12

139

A12

D22

15

22

CS0

86

CS0*

ICOC11

58

ICOC11

11

6

A11

D21

16

21

RESET\_B

118

RESET*

ICOC10

61

10

11

A10

D20

17

20

CPUCLK\_OUT

128

CLKOUT

TEST

63

TEST

I68

GND

ICOC10

9

13

A9

D19

20

19

PROC\_RESET\_OUT

B

8

14

A8

D18

21

18

SCK

120

93

RSTOUT*

TXD2

66

SCI2\_OUT

SCK

RXD2

68

SCI2\_IN

7

23

A7

D17

22

17

ONCE\_DE\_B

143

DE*

TXD1

69

SCI1\_OUT

B

RXD1

70

SCI1\_IN

6

24

A6

D16

25

16

SS

94

SS*

TMS

TRST*

TCLK

EXTAL

XTAL

MISO

MOSI

YC0

INT0*

INT1*

INT2*

INT3*

INT4

INT5*

INT7*

5

26

A5

D15

27

4

28

A4

D14

30

15

14

3

29

A3

D13

31

2

47

A2

D12

34

13

12

138

142

130

125

124

91

90

80

71

72

75

79

82

84

89

PA&lt;22..0&gt;

1

0

49

A1

D11

35

11

50

A0

VSS1

VSS2

VSS3

VSS4

VSS5

VSS6

VSS7

VSS8

VSSSYN

VSSF

VSSA

D0

D1

D2

D3

D4

D5

D6

D7

D8

D9

D10

8

18

32

44

64

76

127

140

126

73

114

51

48

46

43

42

41

40

39

38

37

36

SOT143

2.93V

MAX811SEUS-T

A

I70

ONCE\_TMS

ONCE\_TRST\_B

ONCE\_TCLK

OSC\_MCU

XTAL

MISO

MOSI

YCO

INT2

TIM\_STATUS

RUN\_KIT\_USR

INT4

INT3

USER\_LED2

USER\_LED1

A

PD&lt;31..0&gt;

0

1

2

3

4

5

6

7

8

9

10

U13

I64

V3\_3

4

MAX811\_U

VCC

MR*

3

SW23

4

1

PROCESSOR RESOURCE CARD

MMC2107

RESET\_B

2

RESET*

GND

1

3

2

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

1/7(BLOCK)

PAGE:

13/71(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

PARENT BLOCK: \_z11top\_dn\

BLOCK NAME: \_motprocrescard\_dn.

1

2

3

4

5

6

7

8

V3\_3

V3\_3

1

1

2

RESET CONFIGURATION

2

I65

DS20

1.0K

R79

1

I69

1.0K

R07

1.0K

R248

1.0K

R255

SW06

V5\_0

1.0K

R12

2

1.0K

1

1.0K

R16

R254

2

1

2

2

1

1.0K

2

R160

1

V3\_3

R230

1

PD&lt;26&gt;

D

2

D

V3\_3

AMBER

2

1

R83

FLASH\_VPP

16

30

15

POS

8

SWITCH

1

2

BTS\_OBSXI

0L\_SMT0805\_10PCT

ECJ-2VB1C104K

14

13

3

4

BIS1OBSXI

2

R152

2

10K

R235

1

1

1

10K

R236

2

PD&lt;17&gt;

MODE

MASTER

PD&lt;16&gt;

BIS0OBSXI

1

2

RCON

2

10K

R233

2

1

PD&lt;21&gt;

DRIVE

FULL

.1UF

C12

12

5

INT3

11

6

1

10

7

INT4

10K

USERFPGA2

2

10K

R232

1

9

8

INT5

2

10K

R231

1

PD&lt;23&gt;

PLL

W/

XTAL

PD&lt;22&gt;

10K

R234

INTERNAL

2

1

PD&lt;28&gt;

ENABLE

FLASH

C

10K

C

R196

2

1

PD&lt;19&gt;

10K

FOR

10K LOAD TO GND

SET

INTERNAL

10.5K LOAD TO V3V

EXT

BOOT

WHEN

2

R229

BOOT

BOOT

D18 HAS A

10K

D18 HAS A

1

PD&lt;18&gt;

INTERN/EXTERN

V3\_3

V3\_3

B

CS0

OE

EB1

CY62128V

CY62128V

CS0

OE

EB0

NA

CY62128V

CY62128V

B

16

22

30

24

29

1

32

I18

U26

NA

16

22

30

24

29

1

32

I54

U30

23

19

IO7

GND

CE1*

CE2

OE*

WE*

N\_C

VCC

A16

9

A15

12

17

20

21

21

14

22

18

IO6

IO5

CY62128V

A14

25

16

31

19

15

IO4

A13

11

15

30

19

IO7

GND

CE1*

CE2

OE*

WE*

N\_C

VCC

A16

5

17

18

20

IO3

A12

26

14

29

21

17

17

IO2

A11

10

13

28

18

IO6

16

13

IO1

A10

28

12

27

15

IO5

CY62128V

A14

25

15

IO0

A9

27

11

26

17

IO4

A13

3

14

A0

A1

A2

A3

A4

A5

A6

A7

A8

31

10

25

14

IO3

A12

26

13

20

IO2

A11

4

12

9

24

13

IO1

A10

31

11

IO0

A9

27

10

A15

2

16

A

A0

A1

A2

A3

A4

A5

A6

A7

A8

28

9

A

PD&lt;23..16&gt;

23

2

3

4

5

6

7

8

PD&lt;31..24&gt;

23

12

11

10

9

8

7

6

RESET AND CHIP CONFIGURATION

1

2

3

4

5

6

7

8

PA&lt;17..1&gt;

1

2

3

4

5

6

7

8

PA&lt;17..1&gt;

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

2/7(BLOCK)

PAGE:

14/71(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

V3\_3

1

10K

2

10K

R80

D

2

R81

1

NA

I1

BUT DO NOT POPULATE

CON14P

PLACE PADS FOR CAP

1.0M

R56

1

CON14P

J06

OSC\_MCU

I47

X01

1

8.0MHZ

D

2

CON14P

2

1

ONCE\_TDI

2

4

3

2107\_TDO

6

5

ONCE\_TCLK

XTAL

KEY

ALIGN

8

7

ONCE\_TMS

10

9

RESET\_B

V3\_3

ONCE\_DE\_B

12

11

ONCE\_TRST\_B

14

13

2

C

10K

R209

V5\_0

C

1

I11

1

U01

MAX1675

2

LBI

LX

FB

OUT

8

7

68UF

1

3

LBO*

GND

6

C52

330

RB134

1UF

CB113

10UF

C27

10UF

C33

1UF

C44

20

MAX3233E

R2IN

R2OUT

1

2

1

1

1

2

1

19

18

T2OUT

INVALID*

2

GND

T2IN

3

NA

MAX3233E

MAX3233E

2

2

2

1

2

I31

V3\_3

U21

4

REF

SHDN

5

17

V-

T1IN

4

SCI1\_OUT

1

16

C2-

FORCEON

5

B

.1UF

C03

2

2

C26

68UF

22.0UH

2

I13

15

L02

14

C2+

R1OUT

6

SCI1\_IN

B

13

12

C1-

T1OUT

7

PRT1\_OUT

C1+

R1IN

8

PRT1\_IN

V+2

VCC

9

1

11

V+1

FORCEOFF*

10

1

V3\_3

SMT1206\_5PCT

ERJ-8GEYJ5R6V

VDDSYN

R10

1

2

2

2

1

5.6

2

1

2

2

V3\_3

1UF

C56

1UF

CB488

1UF

CB490

1UF

CB28

1UF

C40

1UF

C14

1UF

C21

1UF

C07

1UF

C02

2

1

1

2

1

1

1

2

1

2

1

1

A

10K

R87

10K

R95

1

2

I35

J28

10K

R110

2

A

JTAG CONFIGURATION

6

7

F

A

1

G

B

2

PRT1\_OUT

8

H

C

3

PRT1\_IN

ONCETDO

PIN

MMC2107

PIN

ONCETDI

9

J

D

4

E

5

DATE:

DS33Z11/41/44DK01A0

TITLE:

...FPGA+FLASH...

TDI

09/16/2004

3/7(BLOCK)

PAGE:

15/71(TOTAL)

SCULLY

STEVE

ENGINEER:

CONN\_DB9P

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

D

SCI2\_OUT

SCI2\_IN

TEA

TA

EB1

EB0

CS2

CS1

CS0

RW

OE

5

4

2

2

1

1

4

4

3

3

J45

R176

L15

K13

C5

L16

D5

E10

F12

E6

J13

H14

E7

A8

D8

B9

B5

A7

F14

A14

C11

D6

C13

B13

C9

3

6

6

5

5

RED

DS38

RED

2

1

1

2

TIM\_INTERUPT\_IND

IO22\_1

IO21\_1

IO20\_1

IO19\_1

IO18\_1

IO17\_1

IO16\_1

IO15\_1

IO14\_1

IO13\_1

IO12\_1

IO11\_1

IO10\_1

IO9\_1\VREF

IO8\_1

IO7\_1

IO6\_1

IO5\_1

IO4\_1\VREF

IO3\_1

IO2\_1\WRITE*

IO1\_1\CS*

GCK2

SPARE\_B&lt;5..0&gt;

CONN\_10P

2

8

8

7

7

1

10

10

9

9

330

R32

C

RED

2

1

2

1

USER\_LED1

TIM\_INTERUPT

H16

IO2\_1\IRDY

H15

IO2\_2\VREF

1

BANK

GCK3

B8

5

C

DS16

RED

330

G16

IO3\_2\D3

IO1\_0

L12

4

DS18

RED

R70

H13

IO4\_2

IO2\_0\VREF

B7

3

RED

2

1

1

2

USER\_LED2

PROC\_RESET\_OUT

R16

F15

IO5\_2

IO3\_0

K12

2

330

E16

IO6\_2\D2

IO4\_0

J14

1

IO7\_2\D1

IO5\_0

M13

P16

IO8\_2

L13

IO9\_2

2

U27

IO6\_0

IO7\_0\VREF

B6

B4

F13

D7

CFG\_DIN

D14

IO10\_2\VREF

IO12\_2\(DIN,D0)

IO11\_2

BANK

XC2S50\_BGA

BANK

IO8\_0

IO10\_0

IO9\_0

G13

E14

31

A9

30

B

C15

IO13\_2\(DOUT,BUSY)

0

IO11\_0

D12

29

B

16

A10

IO14\_2

IO12\_0

B10

28

1

15

A11

IO15\_2

IO13\_0

E13

27

330

R237

14

13

C12

IO16\_2

IO14\_0

A3

26

F16

IO17\_2

IO15\_0

G15

25

V3\_3

2

1

2

DS43

12

E15

IO18\_2

IO16\_0

B11

24

GREEN

11

A13

IO19\_2

IO17\_0

A5

23

10

C16

IO20\_2

IO18\_0

A4

22

9

D16

IO21\_2

IO19\_0

A6

21

8

B12

IO22\_2

3

BANK

IO20\_0

B3

20

7

C8

IO23\_2

6

D9

IO24\_2

A

PA&lt;16..0&gt;

IO23\_3

IO22\_3

IO21\_3

IO20\_3

IO19\_3

IO18\_3

IO17\_3

IO16\_3

IO15\_3

IO14\_3

IO13\_3\TRDY

IO12\_3

IO11\_3\D4

IO10\_3\VREF

IO9\_3

IO8\_3\D5

IO7\_3\D6

IO6\_3

IO5\_3

IO4\_3\VREF

IO3\_3

IO2\_3\D7

IO1\_3\INIT*

A

D10

G14

D11

B16

A12

E11

M15

M14

G12

T15

J15

K15

J16

K16

K14

M16

N16

C10

C7

L14

C6

N14

N15

X\_INIT

5

4

3

2

1

0

16

17

18

19

PD&lt;31..16&gt;

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

4/7(BLOCK)

PAGE:

16/71(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

I34

CONN\_THRU-HOLE

D\_DUT&lt;7..0&gt;

SPARE\_A&lt;10..1&gt;

NA

0

1

2

3

4

5

6

7

1

2

3

4

5

6

7

8

9

NA

J46

5

2

2

1

1

10

D

D

4

4

4

3

3

9

3

6

6

5

5

8

2

M4

R7

L3

C2

N9

F1

P11

M6

N5

R13

CPUCLK\_OUT

N11

P8

P13

F2

T14

P12

T11

T4

E4

R8

1

8

8

7

7

7

10

10

9

9

6

IO19\_5

IO18\_5

IO17\_5

IO16\_5

IO15\_5

IO14\_5

IO13\_5

IO12\_5

IO11\_5

IO10\_5

IO9\_5

IO8\_5\VREF

IO7\_5

IO6\_5

IO5\_5

IO4\_5

IO3\_5

IO2\_5\VREF

IO1\_5

GCK1

CONN\_10P

J2

IO1\_6\TRDY

GCK0

N8

10

H1

J1

IO2\_6

IO3\_6

5

BANK

IO2\_4

R9

IO1\_4

H4

ALE\_DUT

C

WR\_DUT

J3

IO4\_6\VREF

IO3\_4\VREF

P9

P6

IO5\_6

IO4\_4

T10

C

RD\_DUT

M11

IO6\_6

IO5\_4

R6

11

MODE

BUS

BTS\_DUT

K1

IO7\_6

IO6\_4

T7

10

CS\_X2)

AT

(DUT

DETECTION

BIS1\_DUT

M3

BIS0\_DUT

P5

IO8\_6

IO9\_6

I46

U27

IO7\_4

IO8\_4

R5

9

M2

8

N1

IO10\_6\VREF

6

R1

RW\_X

L1

CS\_X1

N6

IO11\_6

IO12\_6

IO13\_6

BANK

XC2S50\_BGA

BANK

IO9\_4\VREF

IO11\_4

IO10\_4

T12

7

T6

6

XA&lt;11..0&gt;

M1

5

4

IO12\_4

T5

4

WR

L4

IO14\_6

IO13\_4

N2

3

CS\_X2

G2

IO15\_6

IO14\_4

P1

2

B

7

F4

IO16\_6

IO15\_4

T3

1

B

6

F5

IO17\_6

IO16\_4

T2

0

5

G5

IO18\_6

IO17\_4

R10

4

G4

IO19\_6

IO18\_4

T13

XD&lt;7..0&gt;

3

2

H2

IO20\_6

IO19\_4

N12

K3

IO21\_6

IO20\_4

B1

1

P7

IO22\_6

7

BANK

IO21\_4

N10

0

T8

IO23\_6

IO22\_4

L2

RW ALSO FUNCTIONS AS ALT\_RD\_DS

WE ALSO FUNCTIONS AS ALT\_WR\_RW

IO23\_7

IO22\_7

IO21\_7

IO20\_7

IO19\_7

IO18\_7

IO17\_7

IO16\_7

IO15\_7

IO14\_7

IO13\_7

IO12\_7\IRDY

IO11\_7

IO10\_7

IO9\_7\VREF

IO8\_7

IO7\_7

IO6\_7

IO5\_7

IO4\_7

IO3\_7\VREF

IO2\_7

IO1\_7

A

N7

M7

L5

K5

R12

J4

E2

F3

D2

E3

A2

G1

K2

M10

H3

G3

K4

E1

D1

R11

C1

P10

T9

A

CS\_X3

CS\_X4

CS\_X5

CS\_X6

ALE

0

1

2

3

4

5

6

7

8

9

10

11

USERFPGA2

INT5

A\_DUT&lt;11..0&gt;

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

5/7(BLOCK)

PAGE:

17/71(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

D

V3\_3

MBVER

J42

2

2

2

2

CONN\_50P\_T1E1

10K

R252

10K

R253

10K

R256

10K

R257

1

A\_DUT&lt;11..0&gt;

11

10

9

8

2

A11

GND1

1

4

A10

GND2

3

6

A9

GND3

5

8

10

A8

GND4

7

C

INT5

USER1

9

0

1

1

1

4C5^

18C6&lt;&gt;

17A6&lt;&gt;

C

4C5^

4D5^

18C6&lt;&gt;

14C3&lt;&gt;

14C3&lt;&gt;

13A7&lt;&gt;

INT5

INT4

18C6&lt;&gt;

14D3&lt;&gt;

13A7&lt;&gt;

4D5^

18C6&lt;&gt;

13A7&lt;&gt;

INT3

IN

INT2

IN

IN

IN

INT5

19B1&lt;

18A7&lt;

4C3^

15C3&lt;&gt;

13B5&lt;&gt;

13A4&gt;

OUT

RESET\_B

INT4

12

INT4

USER2

11

1

INT3

14

INT3

USER3

13

2

4B5^

4C5^

17C3&lt;&gt;

17C3&lt;&gt;

BTS\_DUT

BIS0\_DUT

4B5^

17C3&lt;&gt;

BIS1\_DUT

IN

IN

INT2

16

INT2

USER4

15

IN

CS\_X1

18

CS1

USER5

17

4B4^

4B4^

19A6&lt;&gt;

4B4^

4B4^

19A6&lt;&gt;

19A6&lt;&gt;

OUT

TDO\_NU

TCK\_NU

19A6&lt;&gt;

TDI\_NU

TMS\_NU

IN

IN

CS\_X6

IN

CS\_X5

20

CS6

USER6

19

22

CS5

USER7

21

4C3^

18B6&lt;&gt;

4C3^

18B6&lt;&gt;

17A4&lt;&gt;

4D3^

18B6&lt;&gt;

17A4&lt;&gt;

17B3&lt;&gt;

OUT

4D3^

18B6&lt;&gt;

17B3&lt;&gt;

OUT

4C3^

18B6&lt;&gt;

B

4C3^

17A4&lt;&gt;

4C3^

17B3&lt;&gt;

OUT

OUT

17B3&lt;&gt;

OUT

OUT

CS\_X3

CS\_X5

CS\_X4

CS\_X4

CS\_X1

CS\_X2

CS\_X3

24

CS4

USER8

23

3

6

5

4

7

A\_DUT&lt;11..0&gt;

4C3^

18A6&lt;&gt;

4C5^

18A6&lt;&gt;

17C3&lt;&gt;

OUT

RW\_X

7

30

AD7

USER11

29

B

WR

CS\_X2

26

CS3

USER9

25

28

CS2

USER10

27

18C6

18B7

17C3&lt;&gt;

OUT

17A6

4C5^

OUT

WR\_DUT

OUT

RD\_DUT

6

32

AD6

USER12

31

OUT

IO

XA&lt;15..0&gt;

IO

D\_DUT&lt;7..0&gt;

4B3^

A\_DUT&lt;11..0&gt;

17B7

5

34

AD5

USER13

33

SS

XD&lt;7..0&gt;

4

36

AD4

USER14

35

SCK

3

38

AD3

USER15

37

MISO

D\_DUT&lt;7..0&gt;

2

40

AD2

USER16

39

MOSI

V3\_3

1

42

AD1

3.3V1

41

0

44

AD0

3.3V2

43

WR\_DUT

46

WR

USER17

45

RESET\_B

RD\_DUT

48

RD

5V1

47

ALE\_DUT

50

ALE

5V2

49

A

A

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

6/7(BLOCK)

PAGE:

18/71(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

P14

P3

N13

N4

M12

M5

E12

E5

D13

D4

C14

C3

D

D

VCCINT12

VCCINT11

VCCINT10

VCCINT9

VCCINT8

VCCINT7

VCCINT6

VCCINT5

VCCINT4

VCCINT3

VCCINT2

VCCINT1

V2\_5XI

U31

1

8

MAX1792

OUT

IN

1

V3\_3

1

1

1

1UF

CB383

1UF

C143

1UF

C181

10UF

C153

7

6

OUT

IN

2

SET

RST

3

2

2

2

2

5

GND

SHDN

4

1

1

2

2

V3\_3

V3\_3

U29

C

XI\_TMS

D3

TMS

1UF

CB412

1UF

CB485

1UF

CB69

1UF

CB49

VCCO1

VCCO2

E8

F8

20

19

VCCJ

D0

1

CFG\_DIN

C

VCCO

DNC1

2

JTD\_SPART\_TDI

A15

TDI

2

2

1

1

VCCO3

E9

ONCE\_TCLK

C4

TCK

VCCO4

F9

JTD\_FLASH\_TDO

18

17

VCCINT

CLK

3

CCLK

JTD\_SPART2FLASH

B14

TDO

U27

VCCO5

VCCO6

H11

H12

16

TDO

TDI

4

JTD\_SPART2FLASH

RESET\_B

2

R161

330

1

P15

XRST

PROGRAM*

XC2S50\_BGA

VCCO7

J11

15

DNC3

TMS

5

XI\_TMS

VCCO8

J12

14

DNC4

TCK

6

ONCE\_TCLK

N3

M0

DONE

R14

DONE

CONTROL

VCCO9

VCCO10

L9

13

DNC5

CF*

7

XRST

M9

12

CEO*

OE/RST*

8

X\_INIT

2

RB333

1

V2\_5XI

V3\_3

P2

M1

VCCO11

L8

11

DNC6

DNC2

9

10K

GND

CE*

10

DONE

B

R3

M2

VCCO12

M8

V3\_3

VCCO13

J5

XILINX\_XCF01S

B

D15

CCLK

CCLK

R4

NC2

2

2

VCCO14

J6

P4

NC1

.1UF

C210

2

.1UF

C211

1

.1UF

CB265

2

.1UF

C212

2

.1UF

CB121

1

.1UF

CB320

2

.1UF

CB80

.1UF

CB122

1

1UF

CB467

1UF

CB271

VCCO15

VCCO16

H5

H6

2

1

1

1

2

1

2

1

1

1

2

V3\_3

1

10K

R214

A

GND36

GND35

GND34

GND33

GND32

GND31

GND30

GND29

GND28

GND27

GND26

GND25

GND24

GND23

GND22

GND21

GND20

GND19

GND18

GND17

GND16

GND15

GND14

GND13

GND12

GND11

GND10

GND9

GND8

GND7

GND6

GND5

GND4

GND3

GND2

GND1

J44

2

A

T16

T1

R15

R2

L11

L10

L7

L6

K11

K10

K9

K8

K7

K6

J10

J9

J8

J7

H10

H9

H8

H7

G11

G10

G9

G8

G7

G6

F11

F10

F7

F6

B15

B2

A16

A1

TCK\_NU

2

2

1

1

ONCE\_TCLK

TMS\_NU

4

4

3

3

XI\_TMS

TDI\_NU

6

6

5

5

JTD\_SPART\_TDI

DATE:

DS33Z11/41/44DK01A0

TITLE:

V3\_3

TDO\_NU

8

8

7

7

JTD\_FLASH\_TDO

10

10

9

9

09/16/2004

7/7(BLOCK)

PAGE:

19/71(TOTAL)

SCULLY

STEVE

ENGINEER:

CONN\_10P

1

2

3

4

5

6

7

8

@\_ZTOP\_LIB\.\_ZTOPDN\_\(SCH\_1):PAGE1\_I11@\_ZTOP\_LIB\.\_WAN4Z44\_DN\(SCH\_1):PAGE1\_I1@\_ZTOP\_LIB\.\_QUADTE1WAN\_DN\(SCH\_1):PAGE1

CR-46 :

1

2

3

4

5

6

7

8

DS21458 WAN INTERFACE BLOCK

I73

2.048MHZ\_3.3V

YB02

V3\_3

OSC

8

VCC

1

1

D

D

V3\_3

46C7&lt;

MCLK

RB160

5

OUT

GND

4

30

53B6&lt;&gt;

MCLK2FPGA

30

RB184

L16

L15

F2

F1

B11

A11

T6

R6

T8

A9

J16

H1

N14

M14

L14

F3

E3

D3

C13

C12

C11

P6

P5

P4

55A7

55A5

ADDR&lt;9..0&gt;

54C7

IN

0

H2

A&lt;0&gt;

JTRST

K14

TVDD42

TVDD41

TVDD32

TVDD31

TVDD22

TVDD21

TVDD12

TVDD11

RVDD4

RVDD3

RVDD2

RVDD1

DVDD43

DVDD42

DVDD41

DVDD33

DVDD32

DVDD31

DVDD23

DVDD22

DVDD21

DVDD13

DVDD12

DVDD11

1

E10

A&lt;1&gt;

V3\_3

JTMS

J15

XI\_TMS

52A7&lt;&gt;

52C8&lt;&gt;

52C1&lt;

2

H3

A&lt;2&gt;

JTCLK

K16

ONCE\_TCLK

52A7&lt;&gt;

52C8&lt;&gt;

52C1&lt;

C

3

G4

4

N7

A&lt;3&gt;

A&lt;4&gt;

10UF

CB112

10UF

CB340

10UF

CB151

10UF

C103

10UF

CB154

10UF

CB126

10UF

CB236

10UF

C48

10UF

C42

JTDI

JTDO

C10

JTD\_FLASH\_TDO

52C6&lt;&gt;

C

K13

JTDO458

52A7&lt;&gt;

5

B9

A&lt;5&gt;

INT*

H5

WAN\_INT

OUT

46A4&lt;&gt;

55D5&gt;

6

T7

A&lt;6&gt;

7

G2

A&lt;7&gt;/ALE\_AS

V3\_3

V3\_3

LIUC

D9

LIUC

51D7&lt;

8

H6

9

J11

A&lt;8&gt;

A&lt;9&gt;

0.1UF

1

CB220

0.1UF

1

0.1UF

CB200

CB127 2

0.1UF

CB155 2

U20

0.1UF

CB205 2

0.1UF

1

55A4

55A2

54C3

IO

DAT&lt;7..0&gt;

0

P8

AD&lt;0&gt;

2

2

1

1

DS21458\_U

1

CB138

0.1UF

1

CB204

0.1UF

CB120 2

0.1UF

1

0.1UF

CB156

1

0.1UF

CB160

1

0.1UF

CB161

1

0.1UF

CB144

1

CB179

MCLK2

J12

RCLKI

RNEGI

H9

H10

2

2

1

2

2

2

2

2

RPOSI

G8

MCLK1

H4

MCLK

46D7&lt;

1

D10

AD&lt;1&gt;

2

N8

AD&lt;2&gt;

TEST1

J14

B

3

P7

AD&lt;3&gt;

CONTROL

TEST2

J13

TSTRST

K15

RESET\_AH

IN

46A1&lt;&gt;

B

4

M7

AD&lt;4&gt;

5

R7

AD&lt;5&gt;

CS*

M8

CS

IN

55A4&lt;

6

G1

AD&lt;6&gt;

RD*

A10

RD

IN

54C7&lt;&gt;

55A2&lt;&gt;

7

G3

AD&lt;7&gt;

WR*

C9

WR

IN

54C7&lt;&gt;

55A3&lt;&gt;

51C7&lt;

BTS

B10

BTS

DVSS11

N4

51B7&lt;

MUX

R8

MUX

DVSS12

N5

51C7&lt;

ESIBRD

H8

ESIBRD

DVSS13

N6

51C7&lt;

ESIBR0

J8

ESIBS&lt;0&gt;

DVSS21

D11

51C7&lt;

ESIBR1

J9

ESIBS&lt;1&gt;

DVSS22

D12

DVSS23

D13

A

I41

NA

NC3

NC2

NC1

TVSS42

TVSS41

TVSS32

TVSS31

TVSS22

TVSS21

TVSS12

TVSS11

RVSS43

RVSS42

RVSS41

RVSS33

RVSS32

RVSS31

RVSS23

RVSS22

RVSS21

RVSS13

RVSS12

RVSS11

DVSS43

DVSS42

DVSS41

DVSS33

DVSS32

DVSS31

A

NC7SZ86

NC7SZ86\_U

46B7&lt;

RESET\_AH

4

UXB05

1

RESET\_B

55D6&lt;&gt;

52B1&lt;

E9

P3

K9

M16

M15

E2

E1

B12

A12

T5

R5

T9

T13

T12

A4

A8

A5

D16

H16

E16

M1

J1

N1

N13

M13

L13

F4

E4

D4

INVERTER

I38

DATE:

DS33Z11/41/44DK01A0

TITLE:

I37

NA

NC7SZ86

09/16/2004

PAGE:

46/71(TOTAL)

SCULLY

STEVE

ENGINEER:

55D5&gt;

46C7&gt;

WAN\_INT

1

NC7SZ86\_U

BUFFER

UX11

4

DS25

RED

V3\_3

2

1

2

R114

1

330

1

2

3

4

5

6

7

8

1/10(BLOCK)

PARENT BLOCK: \_wan4z44\_dn\

BLOCK NAME: \_quadte1wan\_dn.

1

2

3

4

5

6

7

8

PIN F16

PORT2\_RRING =

L1

PIN

PORT1\_RRING =

D

D

U20

U20

DS21458\_U

DS21458\_U

49B5&lt;

TRING2

A13

B13

TRINGA

TRINGB

PORT

RRING

F16

RRING2

49A5&lt;

49D8&lt;

TRING1

R4

T4

TRINGA

TRINGB

PORT

RRING

L1

RRING1

49C8&lt;

49C5&lt;

TTIP2

A14

TTIPA

RTIP

G16

RTIP2

49A5&lt;

49D8&lt;

TTIP1

R3

TTIPA

RTIP

K1

RTIP1

49C8&lt;

B14

TTIPB

T3

TTIPB

C

53A2&lt;&gt;

IN

TCLK2

G12

TCLK

RCLK

F10

RCLK2

OUT

53B7&lt;&gt;

53B2&lt;&gt;

IN

TCLK1

L5

TCLK

RCLK

K8

RCLK1

OUT

53B7&lt;&gt;

C

A15

TCLKO

RCLKO

C14

T2

TCLKO

RCLKO

R1

F12

TCLKI

L6

TCLKI

F11

TLINK

RLINK

C15

K7

TLINK

RLINK

P2

B15

TNEGO

RNEGO

H11

T1

TNEGO

RNEGO

J2

E12

TNEGI

M5

TNEGI

A16

TPOSO

RPOSO

H12

R2

TPOSO

RPOSO

J6

F13

TPOSI

L4

TPOSI

53B2&lt;&gt;

IN

TSER2

G9

TSER

RSER

H14

RSER2

OUT

53A7&lt;&gt;

53C2&lt;

53B2&lt;&gt;

IN

TSER1

M6

TSER

RSER

J4

RSER1

OUT

53A7&lt;&gt;

53C2&lt;

E11

TSIG

RSIG

G15

L7

TSIG

RSIG

K2

E13

TCHBLK

RCHBLK

G10

N2

TCHBLK

RCHBLK

K3

53A2&lt;&gt;

IO

TGAPCLK2

D15

TCHCLK

RCHCLK

G11

RGAPCLK2

IN

53B7&lt;&gt;

53A2&lt;&gt;

IO

TGAPCLK1

J7

TCHCLK

RCHCLK

L2

RGAPCLK1

IN

53B7&lt;&gt;

B

B

C16

TLCLK

RLCLK

F15

P1

TLCLK

RLCLK

M2

53D4&lt;&gt;

TSYNC2

B16

TSYNC

RSYNC

E14

RSYNC2

53D5&lt;&gt;

53D4&lt;&gt;

TSYNC1

N3

TSYNC

RSYNC

K6

RSYNC1

53D5&lt;&gt;

53D4&lt;&gt;

TSSYNC2

D14

TSSYNC

RMSYNC

G13

53D5&lt;&gt;

TSSYNC1

M4

TSSYNC

RMSYNC

M3

53D7&lt;

TSYSCLK2

J10

TSYSCLK

RSYSCLK

H15

RSYSCLK2

53D7&lt;

53D7&lt;

TSYSCLK1

H7

TSYSCLK

RSYSCLK

J3

RSYSCLK1

53D7&lt;

H13

BPCLK

RSIGF

F14

53C6&lt;&gt;

BPCLK1

J5

BPCLK

RSIGF

L3

RFSYNC

G14

RFSYNC

K4

RLOS/LOTC

E15

RLOS2

51A6&lt;&gt;

RLOS/LOTC

K5

RLOS1

51A6&lt;&gt;

A

A

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

2/10(BLOCK)

PAGE:

47/71(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

T11

PIN

PORT4\_RRING =

PIN A6

PORT3\_RRING =

D

U20

U20

DS21458\_U

DS21458\_U

50B5&lt;

TRING4

N15

N16

TRINGA

TRINGB

PORT

RRING

T11

RRING4

50A5&lt;

50D8&lt;

TRING3

D1

D2

TRINGA

TRINGB

PORT

RRING

A6

RRING3

50C8&lt;

50C5&lt;

TTIP4

P15

TTIPA

RTIP

T10

RTIP4

50A5&lt;

50D8&lt;

TTIP3

C1

TTIPA

RTIP

A7

RTIP3

50C8&lt;

C

P16

TTIPB

C2

TTIPB

C

53A2&lt;&gt;

IN

TCLK4

L9

TCLK

RCLK

K12

RCLK4

OUT

53B7&lt;&gt;

53A2&lt;&gt;

IN

TCLK3

F6

TCLK

RCLK

G5

B2

TCLKO

RCLKO

A2

RCLK3

OUT

53B7&lt;&gt;

R16

TCLKO

RCLKO

P14

L11

TCLKI

F7

TCLKI

L12

TLINK

RLINK

T15

G7

TLINK

RLINK

C3

T16

TNEGO

RNEGO

P10

A1

TNEGO

RNEGO

F8

M12

TNEGI

E5

TNEGI

R15

TPOSO

RPOSO

N10

B1

TPOSO

RPOSO

F9

L10

TPOSI

D5

TPOSI

53B2&lt;&gt;

IN

TSER4

K10

TSER

RSER

P9

RSER4

OUT

53A7&lt;&gt;

53C2&lt;

53B2&lt;&gt;

IN

TSER3

G6

TSER

RSER

C8

RSER3

OUT

53A7&lt;&gt;

53C2&lt;

K11

TSIG

RSIG

R10

F5

TSIG

RSIG

B7

B

R13

TCHBLK

RCHBLK

R11

C5

TCHBLK

RCHBLK

C7

B

53A2&lt;&gt;

IO

TGAPCLK4

P13

TCHCLK

RCHCLK

M9

RGAPCLK4

IN

53B7&lt;&gt;

53A2&lt;&gt;

IO

TGAPCLK3

B4

TCHCLK

RCHCLK

D7

RGAPCLK3

IN

53B7&lt;&gt;

T14

TLCLK

RLCLK

R12

C4

TLCLK

RLCLK

B6

53D4&lt;&gt;

TSYNC4

R14

TSYNC

RSYNC

N12

RSYNC4

53D4&lt;&gt;

53D4&lt;&gt;

TSYNC3

B3

TSYNC

RSYNC

B5

RSYNC3

53D4&lt;&gt;

53D4&lt;&gt;

TSSYNC4

M11

TSSYNC

RMSYNC

M10

53D4&lt;&gt;

TSSYNC3

A3

TSSYNC

RMSYNC

E6

53C7&lt;

TSYSCLK4

L8

TSYSCLK

RSYSCLK

R9

RSYSCLK4

53D7&lt;

53C7&lt;

TSYSCLK3

D8

TSYSCLK

RSYSCLK

B8

RSYSCLK3

53D7&lt;

N9

BPCLK

RSIGF

N11

E8

BPCLK

RSIGF

E7

RFSYNC

P11

RFSYNC

C6

RLOS/LOTC

P12

RLOS4

51A6&lt;&gt;

RLOS/LOTC

D6

RLOS3

51A6&lt;&gt;

A

A

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

3/10(BLOCK)

PAGE:

48/71(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

C176

35

XMIT

6

1

2

2

R208

1

TTIP1

34

1UF

0

33

L10

7

I11

2

R207

1

TRING1

D

I13

RJ45\_4PORT

0

D

JB12

8

C8

C7

7

6

C6

C5

5

4

C4

C3

3

2

C2

C1

1

C

RJ45

C

8

RCV

32

2

RB328

1

RTIP1

9

0

10

25

XMIT

16

1

2

2

R204

1

TTIP2

23

L10

I2

17

2

R203

1

TRING2

47C2&gt;

I14

L10

31

2

RB327

1

RRING1

47C2&gt;

RB316

61.9

2

RB317

61.9

2

C173

0

1

1

24

1UF

0

I25

0

RJ45\_4PORT

JB12

8

A8

0.1UF

CB395

2

B

1

B

A7

7

6

A6

A5

5

4

A4

A3

3

2

A2

A1

1

RJ45

18

RCV

22

2

RB322

1

RTIP2

47C4&lt;

19

0

A

20

I26

L10

21

2

RB321

1

RRING2

47C4&lt;

A

0

1

1

RB312

61.9

2

RB313

61.9

2

1

DATE:

DS33Z11/41/44DK01A0

TITLE:

0.1UF

CB390

2

09/16/2004

4/10(BLOCK)

PAGE:

49/71(TOTAL)

SCULLY

STEVE

ENGINEER:

THE SCHEMATIC,

BEEN CORRECTED IN

ACCOMMODATE THIS.

BEEN MODIFIED TO

THIS HAS

PRIMARY.

ASSEMBLY HAS

/

TX

PCB

THE

AS

THE

THE PCB LAYOUT INCORRECTLY USES PINS 38-40, 33-35, 28-30 AND 23-25

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

C175

40

XMIT

1

1

2

2

R202

1

TTIP3

39

1UF

0

38

L10

2

I24

2

R201

1

TRING3

0

D

D

I19

RJ45\_4PORT

JB12

8

D8

D7

7

6

D6

D5

5

4

D4

D3

3

2

D2

D1

1

C

RJ45

C

3

RCV

37

2

RB330

1

RTIP3

4

0

5

30

XMIT

11

1

2

2

R206

1

TTIP4

28

L10

I7

12

2

R205

1

TRING4

48C1&gt;

I25

L10

36

2

RB329

1

RRING3

48C1&gt;

RB318

61.9

2

RB319

61.9

2

0

C174

0

1

1

29

1UF

0

I8

RJ45\_4PORT

JB12

8

B8

1

0.1UF

CB396

2

B

B7

7

B

6

B6

B5

5

4

B4

B3

3

2

B2

B1

1

RJ45

13

RCV

27

2

RB324

1

RTIP4

48C4&lt;

14

0

A

15

I9

L10

26

2

RB323

1

RRING4

48C4&lt;

A

0

1

1

RB314

61.9

2

RB315

61.9

2

1

DATE:

DS33Z11/41/44DK01A0

TITLE:

0.1UF

CB391

2

09/16/2004

THE PCB LAYOUT INCORRECTLY USES PINS 38-40, 33-35, 28-30 AND 23-25

5/10(BLOCK)

PAGE:

50/71(TOTAL)

SCULLY

STEVE

ENGINEER:

THE SCHEMATIC,

BEEN CORRECTED IN

ACCOMMODATE THIS.

BEEN MODIFIED TO

THIS HAS

PRIMARY.

ASSEMBLY HAS

/

TX

PCB

THE

THE

AS

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

V3\_3

D

ALL UNMARKED BIAS RESISTORS ARE 10K

2

RB185

1

LIUC

46C7&lt;

2.0K

2

RB209

1

ESIBRD

46A2&lt;&gt;

2.0K

2

RB192

1

ESIBR0

46A2&lt;&gt;

2.0K

C

C

2

RB228

1

ESIBR1

46A2&lt;&gt;

2.0K

MOT

2

2.0K

RB183

1

BTS

46A2&lt;

NOTMUX

2

2.0K

RB303

1

MUX

46A2&lt;

B

B

DS30

47A8&gt;

RLOS1

1

2

2

RB221

1

330

DS32

47A4&gt;

RLOS2

1

2

2

RB234

1

330

A

DS33

48A8&gt;

RLOS3

1

2

2

RB251

1

A

330

DS34

48A4&gt;

RLOS4

1

2

2

RB284

1

330

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

6/10(BLOCK)

PAGE:

51/71(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

V3\_3

P14

P3

N13

N4

M12

M5

E12

E5

D13

D4

C14

C3

0.1UF

1

0.1UF

C135

1

0.1UF

C85

1

CB245

D

D

VCCINT12

VCCINT11

VCCINT10

VCCINT9

VCCINT8

VCCINT7

VCCINT6

VCCINT5

VCCINT4

VCCINT3

VCCINT2

VCCINT1

0.1UF

1

0.1UF

C108

1

0.1UF

CB134

1

CB168

0.1UF

1

0.1UF

CB150

1

0.1UF

CB190

1

CB257

2

2

2

52B8&lt;

V2\_5XI

UB06

2

2

2

2

2

2

1

8

MAX1792

OUT

IN

1

V3\_3

1

1

1

1UF

CB274

1UF

CB230

1UF

C86

10UF

C114

7

6

OUT

IN

2

SET

RST

3

2

2

2

2

5

GND

SHDN

4

2

2

2

2

V3\_3

V3\_3

U08

C

XI\_TMS

D3

TMS

1UF

CB66

1UF

CB65

1UF

C23

1UF

C22

VCCO1

VCCO2

E8

F8

20

19

VCCJ

D0

1

CFG\_DIN

53B2&lt;&gt;

C

VCCO

DNC1

2

JTD\_SPART\_TDI

A15

TDI

1

1

1

1

VCCO3

E9

ONCE\_TCLK

C4

TCK

VCCO4

F9

46C7&lt;

JTD\_FLASH\_TDO

18

17

VCCINT

CLK

3

CCLK

52B1&lt;&gt;

JTD\_SPART2FLASH

B14

TDO

U10

VCCO5

VCCO6

H11

H12

16

TDO

TDI

4

JTD\_SPART2FLASH

RB129

RESET\_B

2

330

1

P15

XRST

PROGRAM*

D15

52B8&lt;&gt;

XC2S50\_BGA

VCCO7

J11

15

DNC3

TMS

5

VCCO8

J12

14

DNC4

TCK

6

XI\_TMS

ONCE\_TCLK

52C1&lt;

52A7&lt;&gt;

46C7&lt;

52B8&lt;&gt;

DONE

R14

DONE

N3

M0

CONTROL

VCCO9

VCCO10

L9

13

DNC5

CF*

7

XRST

52C1&lt;

52A7&lt;&gt;

46C7&lt;

52B1&lt;

M9

12

CEO*

OE/RST*

8

X\_INIT

1

R84

2

V2\_5XI

V3\_3

P2

M1

VCCO11

L8

11

DNC6

DNC2

9

10K

GND

CE*

10

DONE

52B1&lt;&gt;

B

R3

M2

VCCO12

M8

V3\_3

VCCO13

J5

XILINX\_XCF01S

B

CCLK

52C8&lt;&gt;

CCLK

R4

NC2

2

2

VCCO14

J6

P4

NC1

0.1UF

1

0.1UF

C125

1

0.1UF

C142

1

C123

0.1UF

1

CB62

.1UF

C192 2

.1UF

CB269

1

.1UF

CB338 2

.1UF

CB278 2

.1UF

CB337 1

.1UF

CB216

2

.1UF

CB135 2

.1UF

CB275 1

1UF

C188

1UF

C77

VCCO15

H5

VCCO16

H6

1

1

1

2

1

2

1

1

2

2

2

2

1

2

JB07

V3\_3

2

2

1

1

A

GND36

GND35

GND34

GND33

GND32

GND31

GND30

GND29

GND28

GND27

GND26

GND25

GND24

GND23

GND22

GND21

GND20

GND19

GND18

GND17

GND16

GND15

GND14

GND13

GND12

GND11

GND10

GND9

GND8

GND7

GND6

GND5

GND4

GND3

GND2

GND1

52C1&lt;

JTD\_SPART\_TDI

6

6

5

5

TDI\_NU

52C1&lt;

46C7&lt;

52C8&lt;&gt;

ONCE\_TCLK

8

8

7

7

TCK\_NU

46C7&gt;

JTDO458

4

4

3

3

TDO\_NU

A

T16

T1

R15

R2

L11

L10

L7

L6

K11

K10

K9

K8

K7

K6

J10

J9

J8

J7

H10

H9

H8

H7

G11

G10

G9

G8

G7

G6

F11

F10

F7

F6

B15

B2

A16

A1

52C1&lt;

46C7&lt;

52C8&lt;&gt;

XI\_TMS

10

10

9

9

TMS\_NU

CONN\_10P

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

7/10(BLOCK)

PAGE:

52/71(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

RSYSCLK1

47B8&lt;

RSYSCLK

RSYSCLK2

D

RSYSCLK3

47B4&lt;

D

48B8&lt;

48B1&lt;&gt;

48B5&lt;&gt;

47B2&lt;&gt;

47B6&lt;&gt;

48B1&lt;

48B4&lt;&gt;

48B5&lt;

48B8&lt;&gt;

47B2&lt;

47B4&lt;&gt;

47B6&lt;

47B8&lt;&gt;

RSYSCLK4

48B4&lt;

TSYNC4

TSYNC3

TSYNC2

TSYNC1

TSSYNC4

RSYNC4

TSSYNC3

RSYNC3

TSSYNC2

RSYNC2

TSSYNC1

RSYNC1

TSYSCLK

TSYSCLK1

47B6&lt;

TSYSCLK2

47B2&lt;

TSYSCLK3

48B5&lt;

A9

E10

A10

D10

B10

A12

D11

A13

B12

D12

C12

A8

D9

B9

C10

A11

B11

E11

C11

A14

C13

B13

C9

TSYSCLK4

48B1&lt;

C

IBO MODE

IMUX)

(IMPLEMENTS

TSER PULLDNS USED IN

IO22\_1

IO21\_1

IO20\_1

IO19\_1

IO18\_1

IO17\_1

IO16\_1

IO15\_1

IO14\_1

IO13\_1

IO12\_1

IO11\_1

IO10\_1

IO9\_1\VREF

IO8\_1

IO7\_1

IO6\_1

IO5\_1

IO4\_1\VREF

IO3\_1

IO2\_1\WRITE*

IO1\_1\CS*

GCK2

C

RSER1

47B8&gt;

53A7&lt;&gt;

H16

IO2\_1\IRDY

RSER2

47B4&gt;

2.0K

2.0K

2.0K

2.0K

RSER3

RSER4

48B8&gt;

53A7&lt;&gt;

G16

H15

IO2\_2\VREF

1

BANK

GCK3

B8

BPCLK1

47B6&gt;

IO3\_2\D3

IO1\_0

A7

48B4&gt;

53A7&lt;&gt;

H13

IO4\_2

IO2\_0\VREF

B7

53A7&lt;&gt;

G13

IO5\_2

IO3\_0

C7

R94

R104

R113

R88

F15

IO6\_2\D2

IO4\_0

B6

TP32

SPARE\_TP1

E16

IO7\_2\D1

IO5\_0

A5

MCLK2FPGA

46D7&lt;

1

TP30

SPARE\_TP2

F14

IO8\_2

D16

IO9\_2

2

U10

IO6\_0

IO7\_0\VREF

C6

B4

1

F13

B

52C8&lt;&gt;

47B5&lt;

TSER1

E13

CFG\_DIN

D14

IO10\_2\VREF

IO12\_2\(DIN,D0)

IO11\_2

BANK

XC2S50\_BGA

BANK

IO8\_0

IO10\_0

IO9\_0

A3

RGAPCLK1

47B8&lt;

B3

RGAPCLK2

D8

RGAPCLK3

47B4&lt;

48B8&lt;

B

C15

IO13\_2\(DOUT,BUSY)

0

IO11\_0

A6

RGAPCLK4

48B4&lt;

47B1&lt;

TSER2

H14

IO14\_2

IO12\_0

C8

RCLK1

47C8&gt;

48B5&lt;

TSER3

J13

IO15\_2

IO13\_0

D7

RCLK2

47C4&gt;

48B1&lt;

TSER4

G14

IO16\_2

IO14\_0

E7

RCLK3

48C8&gt;

47C5&lt;

TCLK1

G15

IO17\_2

IO15\_0

B5

RCLK4

48C4&gt;

47C1&lt;

TCLK2

G12

IO18\_2

IO16\_0

D6

RSER1

47B8&gt;

53C2&lt;

48C5&lt;

TCLK3

F16

IO19\_2

IO17\_0

A4

RSER2

47B4&gt;

53C2&lt;

48C1&lt;

TCLK4

F12

IO20\_2

IO18\_0

E6

RSER3

48B8&gt;

53C2&lt;

47B5&lt;&gt;

TGAPCLK1

E15

IO21\_2

IO19\_0

D5

RSER4

48B4&gt;

53C2&lt;

47B1&lt;&gt;

TGAPCLK2

E14

IO22\_2

3

BANK

IO20\_0

C5

A

48B5&lt;&gt;

TGAPCLK3

C16

IO23\_2

48B1&lt;&gt;

TGAPCLK4

B16

IO24\_2

IO23\_3

IO22\_3

IO21\_3

IO20\_3

IO19\_3

IO18\_3

IO17\_3

IO16\_3

IO15\_3

IO14\_3

IO13\_3\TRDY

IO12\_3

IO11\_3\D4

IO10\_3\VREF

IO9\_3

IO8\_3\D5

IO7\_3\D6

IO6\_3

IO5\_3

IO4\_3\VREF

IO3\_3

IO2\_3\D7

IO1\_3\INIT*

A

J14

K12

L15

K13

L16

L12

M15

M14

R16

T15

J15

K15

J16

K16

K14

M16

N16

L13

P16

L14

M13

N14

N15

DATE:

DS33Z11/41/44DK01A0

TITLE:

X\_INIT

09/16/2004

8/10(BLOCK)

PAGE:

53/71(TOTAL)

SCULLY

STEVE

ENGINEER:

52B8&lt;&gt;

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

D

K3

R7

P7

T6

N7

K2

M6

J4

M3

N5

M4

P8

M7

R6

P6

R5

N6

T4

L5

R8

IO19\_5

IO18\_5

IO17\_5

IO16\_5

IO15\_5

IO14\_5

IO13\_5

IO12\_5

IO11\_5

IO10\_5

IO9\_5

IO8\_5\VREF

IO7\_5

IO6\_5

IO5\_5

IO4\_5

IO3\_5

IO2\_5\VREF

IO1\_5

GCK1

J2

IO1\_6\TRDY

GCK0

N8

7

H1

DAT&lt;7..0&gt;

6

55A2

55A4

46B1&lt;&gt;

J1

IO2\_6

IO3\_6

5

BANK

IO2\_4

R9

1

IO1\_4

N9

2

5

J3

IO4\_6\VREF

IO3\_4\VREF

P9

C

4

L1

IO5\_6

IO4\_4

K5

CS\_X4

0

55D2&lt;&gt;

ADDR&lt;9..0&gt;

46C2&lt;

55A5

55A7

3

L2

IO6\_6

IO5\_4

R11

2

K4

IO7\_6

IO6\_4

M11

R47

30

R48

30

Z41TSYNC

55C6&lt;&gt;

C

Z41RSYNC

55C6&lt;&gt;

1

L3

IO8\_6

IO7\_4

N2

WR

55A3&lt;&gt;

46B7&lt;

0

L4

IO9\_6

U10

IO8\_4

N11

RD

55A2&lt;&gt;

46B7&lt;

N1

IO10\_6\VREF

6

55C4&lt;&gt;

Z44\_RSER&lt;3&gt;

OBS\_RSER&lt;3&gt;

30

R43

TP29

T11

R1

55B1&lt;&gt;

55B4&lt;&gt;

Z44\_RCLK&lt;3&gt;

Z44\_TCLK&lt;3&gt;

OBS\_RCLK&lt;3&gt;

30

R42

TP27

T7

IO11\_6

IO12\_6

IO13\_6

BANK

XC2S50\_BGA

BANK

IO9\_4\VREF

IO11\_4

IO10\_4

T12

R13

P13

4

IO12\_4

T9

R50

30

R51

30

Z44\_TDEN&lt;1&gt;

55C6&lt;&gt;

T5

IO14\_6

IO13\_4

M10

55C4&lt;&gt;

Z44\_RDEN&lt;3&gt;

30

RB94

OBS\_TCLK&lt;3&gt;

TP15

1

B

55C1&lt;&gt;

Z44\_TDEN&lt;3&gt;

30

RB101

OBS\_RDEN&lt;3&gt;

TP16

T10

IO15\_6

IO14\_4

R10

R49

30

Z44\_RDEN&lt;1&gt;

55C8&lt;&gt;

R53

30

Z44\_TCLK&lt;1&gt;

55C6&lt;&gt;

Z44\_RCLK&lt;1&gt;

Z44\_TSER&lt;1&gt;

55C8&lt;&gt;

55D6&lt;&gt;

30

R44

OBS\_TDEN&lt;3&gt;

TP28

T8

IO16\_6

IO15\_4

P10

1

K1

IO17\_6

IO16\_4

R12

R54

30

Z44\_RSER&lt;1&gt;

55D8&lt;&gt;

55B4&lt;&gt;

Z44\_RSER&lt;4&gt;

OBS\_RSER&lt;4&gt;

30

R41

TP26

P5

IO18\_6

IO17\_4

P11

M2

IO19\_6

IO18\_4

T13

R45

30

55B1&lt;&gt;

55B4&lt;&gt;

Z44\_RCLK&lt;4&gt;

OBS\_RCLK&lt;4&gt;

55B4&lt;&gt;

Z44\_TCLK&lt;4&gt;

30

R39

TP24

P1

IO20\_6

IO19\_4

N12

R72

30

Z44\_TDEN&lt;2&gt;

55C6&lt;&gt;

Z44\_RDEN&lt;4&gt;

30

RB93

OBS\_TCLK&lt;4&gt;

TP12

M1

IO21\_6

IO20\_4

P12

R52

30

Z44\_RDEN&lt;2&gt;

55C8&lt;&gt;

55B1&lt;&gt;

Z44\_TDEN&lt;4&gt;

30

RB92

1

OBS\_RDEN&lt;4&gt;

TP25

T3

IO22\_6

7

BANK

IO21\_4

N10

R46

30

Z44\_TCLK&lt;2&gt;

55C6&lt;&gt;

Z44\_RCLK&lt;2&gt;

Z44\_TSER&lt;2&gt;

55C8&lt;&gt;

55C6&lt;&gt;

IO22\_4

T14

R73

30

Z44\_RSER&lt;2&gt;

55C8&lt;&gt;

30

R40

OBS\_TDEN&lt;4&gt;

TP13

T2

IO23\_6

55B1&lt;&gt;

Z44\_TSER&lt;4&gt;

TP14

1

55C1&lt;&gt;

Z44\_TSER&lt;3&gt;

TP17

1

1

1

1

B

1

1

1

1

IO23\_7

IO22\_7

IO21\_7

IO20\_7

IO19\_7

IO18\_7

IO17\_7

IO16\_7

IO15\_7

IO14\_7

IO13\_7

IO12\_7\IRDY

IO11\_7

IO10\_7

IO9\_7\VREF

IO8\_7

IO7\_7

IO6\_7

IO5\_7

IO4\_7

IO3\_7\VREF

IO2\_7

IO1\_7

A

H4

H2

G2

F5

F4

F1

E2

F3

D2

E3

A2

G1

G5

G4

H3

G3

F2

55B2&lt;&gt;

T3ENH\_T1ENLPRT4

E1

55C2&lt;&gt;

T3ENH\_T1ENLPRT3

D1

55C6&lt;&gt;

T3ENH\_T1ENLPRT2

E4

55D6&lt;&gt;

T3ENH\_T1ENLPRT1

C1

B1

C2

T3ENH\_T1ENLPRT1

54A6&lt;&gt;

55D6&lt;&gt;

A

T3ENH\_T1ENLPRT2

54A5&lt;&gt;

55C6&lt;&gt;

T3ENH\_T1ENLPRT3

54A5&lt;&gt;

55C2&lt;&gt;

T3ENH\_T1ENLPRT4

54A5&lt;&gt;

55B2&lt;&gt;

2.0K

2.0K

2.0K

2.0K

DATE:

DS33Z11/41/44DK01A0

TITLE:

RB46

RB45

RB05

RB04

09/16/2004

9/10(BLOCK)

PAGE:

54/71(TOTAL)

SCULLY

STEVE

ENGINEER:

54A8&lt;

54A8&lt;

54A8&lt;

54A8&lt;

PORTS ARE ENABLED BY DEFAULT ON T1 BRD, AND ARE DISABLED USING JUMPERS ON T3 BRD

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

V3\_3

CONNECTOR (RECEPTICAL)

RECEPTACLE

P1

RECEPTACLE

V3\_3

CONNECTOR (RECEPTICAL)

P2

GND

J09

J12

VDD

D

D

54C7&lt;&gt;

ALE

1

CS\_X4

GND

3

2

71

GND

6

5

4

73

74

GND

7

8

9

78

77

76

75

72

GND

46C7&gt;

46A4&lt;&gt;

WAN\_INT

I28

INT3

1

52B1&lt;

55D7&lt;&gt;

46A2&lt;&gt;

INT2

RESET\_B

GND

3

2

71

10

79

11

12

81

80

V3\_3

54A8&lt;

54A6&lt;&gt;

54B8&lt;&gt;

Z44\_TSER&lt;1&gt;

T3ENH\_T1ENLPRT1

GND

6

5

4

73

74

GND

14

13

15

16

83

84

85

82

GND

55C6&lt;&gt;

55B2&lt;&gt;

55A1&gt;

54B8&lt;

Z44\_TDEN&lt;1&gt;

SIG\_RETURN

GND

7

8

9

78

75

72

GND

GND

INT5

INT2

55D6&lt;&gt;

76

77

10

79

11

12

81

80

V3\_3

Z44\_RSER&lt;1&gt;

54B8&lt;

GND

17

18

87

19

C

GND

20

21

22

23

91

24

92

54A8&lt;

54A5&lt;&gt;

54B1&lt;&gt;

Z44\_TSER&lt;3&gt;

GND

26

T3ENH\_T1ENLPRT3

25

93

94

GND

55C6&lt;&gt;

55B2&lt;&gt;

55A1&gt;

54B8&lt;&gt;

Z44\_TSER&lt;2&gt;

89

88

86

GND

54C7&lt;

54C7&lt;

GND

54B8&lt;

Z44\_TCLK&lt;1&gt;

Z41RSYNC

Z41TSYNC

GND

14

13

15

16

83

84

85

82

GND

Z44\_RDEN&lt;1&gt;

54B8&lt;

GND

Z44\_RCLK&lt;1&gt;

54B8&lt;

90

V3\_3

54A8&lt;

54A5&lt;&gt;

T3ENH\_T1ENLPRT2

GND

17

18

87

86

19

SIG\_RETURN

GND

20

21

22

23

91

24

92

25

93

95

54B1&lt;

Z44\_TDEN&lt;3&gt;

GND

28

29

30

31

27

97

96

GND

Z44\_RSER&lt;3&gt;

54B1&lt;

54B8&lt;

Z44\_TDEN&lt;2&gt;

GND

26

94

95

90

88

GND

89

V3\_3

GND

Z44\_RSER&lt;2&gt;

54A8&lt;

27

99

98

100

GND

Z44\_RDEN&lt;3&gt;

54B1&lt;

54B8&lt;

Z44\_TCLK&lt;2&gt;

GND

28

29

30

98

96

97

GND

Z44\_RDEN&lt;2&gt;

54B8&lt;

31

100

99

54B1&lt;

Z44\_TCLK&lt;3&gt;

GND

32

33

34

103

101

102

V3\_3

Z44\_RCLK&lt;3&gt;

54B1&lt;

GND

32

101

GND

Z44\_RCLK&lt;2&gt;

54B8&lt;

33

34

36

35

37

104

105

106

54A8&lt;

54A5&lt;&gt;

54B1&lt;&gt;

T3ENH\_T1ENLPRT4

Z44\_TSER&lt;4&gt;

GND

39

40

38

107

GND

35

36

104

103

102

V3\_3

37

105

106

GND

108

GND

GND

39

40

GND

42

41

111

110

54A1&lt;

Z44\_TDEN&lt;4&gt;

55C6&lt;&gt;

55A1&gt;

54B1&lt;

Z44\_TCLK&lt;4&gt;

SIG\_RETURN

GND

45

46

44

43

112

113

GND

Z44\_RSER&lt;4&gt;

54B1&lt;

GND

42

41

38

107

108

GND

110

111

43

112

114

47

115

V3\_3

Z44\_RDEN&lt;4&gt;

54B1&lt;

GND

45

46

44

113

GND

114

47

115

V3\_3

B

48

49

50

GND

GND

52

53

54

55

123

51

120

118

116

117

GND

Z44\_RCLK&lt;4&gt;

54B1&lt;

48

121

119

GND

122

124

0

GND

56

58

57

59

DAT&lt;7..0&gt;

1

55A4

46B1&lt;&gt;

54C3

60

3

GND

63

62

61

46B7&lt;

54C7&lt;&gt;

RD

GND

66

65

64

133

134

132

131

GND

2

4

67

135

136

GND

70

69

68

140

WR

139

138

137

GND

CS\_X2

I29

6

CS

46B7&lt;

GND

66

DAT&lt;7..0&gt;

46B1&lt;&gt;

54C3

55A2

6

8

GND

62

61

63

130

129

128

GND

OSC1\_NU

55A7

54C7

46C2&lt;

ADDR&lt;9..0&gt;

3

5

GND

56

57

58

59

60

132

64

65

134

133

131

130

129

125

GND

52A8&lt;&gt;

52A8&lt;&gt;

TDO\_NU

TCK\_NU

GND

GND

52

51

49

50

120

118

117

116

GND

119

GND

121

53

54

123

122

55

128

127

126

125

V3\_3

TMS\_NU

TDI\_NU

52A8&lt;&gt;

52A8&lt;&gt;

GND

4

124

GND

126

127

V3\_3

1

GND

7

9

OSC3\_NU

CS\_X3

54C7&lt;&gt;

46B7&lt;

GND

70

69

68

140

67

135

136

137

GND

54C7

46C2&lt;

55A5

V3\_3

138

139

OSC2\_NU

OSC4\_NU

A

V3\_3

109

109

GND

CS\_X5

C

B

0

2

ADDR&lt;9..0&gt;

5

7

A

NOTE 3184 IS ON CS3 WHILE 21455 IS ON CS2/CS4

SIG\_RETURN

I27

GND

WAN R.C. CONNECTOR TO MOTHERBOARD

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

10/10(BLOCK)

PAGE:

55/71(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8