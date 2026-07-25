<!-- lastmod 2022-08-02 -->
<!-- image -->

WIX

## www.maxim-ic.com

## GENERAL DESCRIPTION

The DS33Z44 design kit is an easy-to-use evaluation board for the DS33Z44 Ethernet transport-over-serial link device. The DS33Z44DK is intended to be used with a resource card for the serial link. The serial link resource cards are complete with transceivers, transformers, and network connections. Dallas' ChipView  software  is  provided  with  the  design  kit, giving  point-and-click  access  to  configuration  and status registers from a Windows ® -based PC. On-board LEDs indicate receive loss-of-signal, queue overflow, Ethernet link, Tx/Rx, and interrupt status.

Windows is a registered trademark of Microsoft Corp.

## ORDERING INFORMATION

| PART      | DESCRIPTION                                                        |
|-----------|--------------------------------------------------------------------|
| DS33Z44DK | DS33Z44 demo card, T3/E3, T1/E1 transceiver resource card included |

<!-- image -->

## DS33Z44DK

## Ethernet Transport Design Kit

## FEATURES

-  Demonstrates Key Functions of DS33Z44 Ethernet Transport Chipset
-  Includes Two Resource Cards: One with DS21458 T1/E1 SCT and one with DS3174 T3/E3 SCT, Transformers, BNC and RJ48 Network Connectors, and Termination
-  Provides Support for Hardware and Software Modes
-  On-Board MMC2107 Processor and ChipView Software Provide Point-and-Click Access to the DS33Z44 Register Set
-  All DS33Z44 Interface Pins are Easily Accessible for External Data Source/Sink
-  LEDs for Loss-of-Signal, Queue Overflow, Ethernet Link, Tx/Rx, and Interrupt Status
-  Easy-to-Read Silkscreen Labels Identify the Signals Associated with All Connectors, Jumpers, and LEDs

## DESIGN KIT CONTENTS

- DS33Z44DK Main Board
- Quad-Port Serial Card with DS3174 T3/E3 SCT
- Quad-Port Serial Card with DS21458 T1/E1 SCT
- CD\_ROM
- o ChipView Software and Manual
- o DS33Z44DK Data Sheet
- o Configuration Files

<!-- image -->

<!-- image -->

## TABLE OF CONTENTS

| GENERAL DESCRIPTION..........................................................................................................1                                                                                                                                                                                                    |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ORDERING INFORMATION .......................................................................................................1                                                                                                                                                                                                     |
| DESIGN KIT CONTENTS............................................................................................................1                                                                                                                                                                                                  |
| COMPONENT LIST.....................................................................................................................3                                                                                                                                                                                              |
| PC BOARD ERRATA................................................................................................................10                                                                                                                                                                                                 |
| FILE LOCATIONS.....................................................................................................................10                                                                                                                                                                                             |
| BASIC OPERATION..................................................................................................................11                                                                                                                                                                                               |
| POWERING UP THE DESIGN KIT ...............................................................................................................11 General............................................................................................................................................................... 11            |
| BASIC DS33Z44 INITIALIZATION (USED FOR ALL QUICK SETUPS) .............................................................11 Quick Setup #1 (Device Driver + CPLD Loopback) ........................................................................................... 11                                                            |
| Quick Setup #2 (DS3174 T3E3)......................................................................................................................... 12 Quick Setup #3 (DS21458 T1E1)....................................................................................................................... 12                  |
| CONFIGURATION SWITCHES AND JUMPERS......................................................................13                                                                                                                                                                                                                        |
| ADDRESS MAP (ALL CARDS) ................................................................................................15                                                                                                                                                                                                        |
| DS33Z44 INFORMATION..........................................................................................................15                                                                                                                                                                                                   |
| DS33Z44DK INFORMATION ....................................................................................................15                                                                                                                                                                                                      |
| TECHNICAL                                                                                                                                                                                                                                                                                                                         |
| SUPPORT............................................................................................................15                                                                                                                                                                                                             |
| DOCUMENT REVISION HISTORY ...........................................................................................15                                                                                                                                                                                                           |
| LIST OF FIGURES                                                                                                                                                                                                                                                                                                                   |
| Figure 1. System Floorplan.......................................................................................................................................... 8 Figure 2. DS3174 Resource Card Floorplan ............................................................................................................... 8 |
| 3. DS21458 Resource Card Floorplan ............................................................................................................. 9                                                                                                                                                                                |
| Figure                                                                                                                                                                                                                                                                                                                            |
| LIST OF TABLES Table 1. Component List (Decoupling Caps Not Shown)............................................................................................ 3                                                                                                                                                                  |
| Table 3. DS3174 Serial Reference Card Jumper Settings........................................................................................ 14 Table                                                                                                                                                                            |
| 4. Overview of Daughter Card Address Map................................................................................................... 15                                                                                                                                                                                    |

## COMPONENT LIST

Table 1 shows the component list for the DS33Z44 and DS33Z11/DS33Z41 design kits and resource cards. This BOM  contains  the  part  listing  for  five  boards.  These  boards  are  the  DS33Z11DK,  DS33Z44DK,  DS21458RC, DS3174RC, and DS2155-DS21348-DS3170RC. Each reference designator is only used once. For example, U18 only appears on the DS33Z11DK and is not used on any of the other boards. See Table 2.

Table 1. Component List (Decoupling Caps Not Shown)

| DESIGNATION                                                                              |   QTY | DESCRIPTION                                                            | SUPPLIER                | PART          |
|------------------------------------------------------------------------------------------|-------|------------------------------------------------------------------------|-------------------------|---------------|
| U18                                                                                      |     1 | ELITE 10/100 ETHERNET TRANSPORT OVER SERIAL LINK 14X14 CSBGA 169 PIN   | Dallas Semiconductor    | DS33Z11       |
| U20                                                                                      |     1 | 3.3V T1.E1.J1 QUAD TRANSCEIVER 0-70C 256P BGA                          | Dallas Semiconductor    | DS21458       |
| U22                                                                                      |     1 | QUAD 10/100 ETHERNET EXTENSION TO WAN 17X17 PBGA 256 PIN               | Dallas Semiconductor    | DS33Z44       |
| U23                                                                                      |     1 | DS3/E3 SCT, 11X11 CSBGA, 100 PIN                                       | Dallas Semiconductor    | DS3170        |
| U24                                                                                      |     1 | T1/E1/J1 XCVR 100P QFP 0-70C                                           | Dallas Semiconductor    | DS2156L       |
| U25                                                                                      |     1 | 3.3V LIU                                                               | Dallas Semiconductor    | DS21348       |
| UB08                                                                                     |     1 | QUAD TRIPLE DUAL SINGLE ATM PACKET PHYS FOR DS3 E3 STS1 0-70C 400P BGA | Dallas Semiconductor    | DS3184        |
| U01, U09                                                                                 |     2 | SOIC 8PIN STEP-UP DC-DC CONVERTER 0.5A LIMIT                           | Maxim                   | MAX1675EUA    |
| U07, U11                                                                                 |     2 | 8-Pin μ MAX/SOIC 1.8V or Adj                                           | Maxim                   | MAX1792EUA18  |
| U13, UB01                                                                                |     2 | MICROPROCESSOR VOLTAGE MONITOR, 2.93V RESET, 4PIN SOT143               | Maxim                   | MAX811SEUS-T  |
| U21, UB07                                                                                |     2 | Dual RS-232 transceivers with 3.3V/5V internal capacitors              | MAXIM                   | NA            |
| U31, UB06, UB11                                                                          |     3 | 8-Pin μ MAX/SOIC 2.5V or Adj                                           | Maxim                   | MAX1792EUA25  |
| C11, C13, C16, C25, C27, C31- C35, C37, C41, C47, CB10, CB63, CB114, CB128, CB164, CB496 |    19 | 1206 CERAM 10uF 10V 20%                                                | Panasonic               | ECJ-3YB1A106M |
| CB390, CB391, CB395, CB396                                                               |     4 | 1206 CERAM 0.1uF 25V 10%                                               | Panasonic               | ECJ-3VB1E104K |
| D01-D03, D05, DB03-DB05                                                                  |     7 | SCHOTTKY DIODE, 1 AMP 40 VOLT                                          | International Rectifier | 10BQ040       |
| DS01, DS07, DS10-DS12, DS17, DS20                                                        |     7 | LED, AMBER, SMD                                                        | Panasonic               | LN1451C       |
| DS02, DS03, DS09, DS14, DS15                                                             |     5 | L_LED, GREEN, SMD                                                      | Panasonic               | LN1351C       |
| DS04-DS06, DS08, DS13, DS16, DS18, DS27, DS28, DS35, DS37, DS38, DS40                    |    13 | LED, RED, SMD                                                          | Panasonic               | LN1251C       |
| DS19, DS43                                                                               |     2 | LED, GREEN, SMD                                                        | Panasonic               | LN1351C       |
| DS21-DS26, DS30, DS32- DS34, DS36, DS39, DS41, DS42, DS44-DS48                           |    19 | L_LED, RED, SMD                                                        | Panasonic               | LN1251C       |
| GND_TP01-GND_TP07, GND_TP09--GND_TP44, GND_TP46-GND_TP68, GND_TPB01-GND_TPB10            |    76 | STANDARD GROUND CLIP                                                   | KEYSTONE                | 4954          |
| H1-H8, H17-H19                                                                           |     8 | KIT, 4-40 HARDWARE, .50 NYLON STANDOFF AND NYLON HEX-NUT               | NA                      | Lab Stock     |

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

| DESIGNATION                                                                                                                                                                                                                                                                                                                                                                                                         |   QTY | DESCRIPTION                 | SUPPLIER   | PART            |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-----------------------------|------------|-----------------|
| R13-R15, R18-R20, R22, R23, R29, R30, RB01, RB03, RB07, RB09, RB15-RB17, RB30- RB32, RB34-RB38, RB41, RB44, RB47, RB48, RB50- RB52, B55, RB60, RB62, RB72, RB73, RB75, RB80, RB82                                                                                                                                                                                                                                   |    40 | RES 0603 5.1K Ohm 1/16W 5%  | Panasonic  | ERJ-3GEYJ512V   |
| R17, R21, R25-R28, R31, R55, R57-R59, R71, R74-R76, R83, R96-R102, R105, R106, R109, R111, R112, R115-R117, R120, R122-R126, R128, R133, R134, R140, R141, RB61, RB96, RB97, RB99, RB100, RB102-RB110, RB112, RB114-RB119, RB121, RB123-RB125, RB127, RB128, RB130, RB131, RB133, RB135-RB138, RB145, RB148, RB149, RB160, RB161, RB164, RB165, RB167-RB171, RB173-RB181, RB184, RB187, RB311, RB320, RB335, RB339, |   104 | RES 0603 30 Ohm 1/16W       | Panasonic  | ERJ-3GEYJ300V   |
| RB359 R171, R172, R174, R175, R190, R191, R240, R241                                                                                                                                                                                                                                                                                                                                                                |     8 | L_RES 0805 0.0 Ohm 1/10W 5% | Panasonic  | ERJ- 6GEY0R00V  |
| R198-R200, R210-R213, RB306, RB325, RB326                                                                                                                                                                                                                                                                                                                                                                           |    10 | RES 0603 332 Ohm 1/16W 1%   | Panasonic  | ERJ-3EKF3320V   |
| R201-R208, RB321-RB324, RB327-RB330                                                                                                                                                                                                                                                                                                                                                                                 |    16 | RES 1206 0 Ohm 1/8W 5%      | Panasonic  | ERJ- 8GEYJ0R00V |
| R239, RB349                                                                                                                                                                                                                                                                                                                                                                                                         |     2 | RES 0805 51.1 Ohm 1/10W 1%  | Panasonic  | ERJ-6ENF51R1V   |
| R24, R114, R197, RB14, RB33, RB40, RB42, RB43, RB49, RB53, RB54, RB57-RB59, RB71, RB77, RB78, RB152- RB156, RB221, RB234, RB251, RB284, RB304, RB331, RB332, RB342, RB344, RB350, RB354, RB360                                                                                                                                                                                                                      |    34 | L_RES 0603 330 Ohm 1/16W 5% | Panasonic  | ERJ-3GEYJ331V   |
| R242, R243, RB144, RB166, RB355-RB358, RB368-RB371                                                                                                                                                                                                                                                                                                                                                                  |    12 | RES 0603 51 Ohm 1/16W 5%    | Panasonic  | ERJ-3GEYJ510V   |
| R32, R70, R78, R161, R176, R194, R195, R237, R238,                                                                                                                                                                                                                                                                                                                                                                  |    13 | RES 0603 330 Ohm 1/16W 5%   | Panasonic  | ERJ-3GEYJ331V   |
| RB129, RB134, RB146, RB193 R33-R54, R60-R69, R72, R73, R131, R136, R143, R147, R150, R154, R158, R163, R166, R169, R173, R178- R189, R215-R228, RB89- RB95, RB101, RB188-RB191, RB196-RB199, RB202-RB205, RB210-RB213, RB216-RB219, RB223-RB226, RB230-RB233, RB239-RB242, RB244-RB249, RB252-RB260, RB265-RB268, RB270-RB282, RB289-RB297                                                                          |   152 | RES 0402 30 Ohm 1/16W 5%    | Panasonic  | ERJ-2GEJ300X    |
| R56, R90                                                                                                                                                                                                                                                                                                                                                                                                            |     2 | RES 0603 1.0M Ohm 1/16W 5%  | Panasonic  | ERJ-3GEYJ105V   |
| R77, RB159                                                                                                                                                                                                                                                                                                                                                                                                          |     2 | L_RES 1206 0 Ohm 1/8W 5%    | Panasonic  | ERJ- 8GEYJ0R00V |
| R80, R81, R84, R87, R89, R91- R93, R95, R108, R110, R118, R127, R152, R153, R196, R209, R214, R229-R236, RB200, RB237, RB238, RB263, RB264, RB286, RB287, RB300, RB301, RB333, RB364                                                                                                                                                                                                                                |    37 | RES 0603 10K Ohm 1/16W 5%   | Panasonic  | ERJ-3GEYJ103V   |

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

Figure 2. DS3174 Resource Card Floorplan

<!-- image -->

The DS3174 quad T3/E3 PC board floorplan is shown in Figure 2. Jumpers JP16, JP17, JP18, and JP19 are 3-pin jumpers used to tri-state/enable T3/E3 ports. With the board oriented as shown in Figure 2, the top 2 pins of each jumper would be connected to enable T3/E3 traffic.

A 2-pin jumper, JP24, has been added to allow loopback. When installed, the board is in loopback at the CPLD; all traffic sent by the DS33Z44 is then sent back to the Z44. Traffic sent by the DS3174 is ignored in CPLD loopback mode.

The quad T3/E3 board is intended to be connected to the DS33Z11 or DS33Z44 motherboards. The quad T3/E3 board  can  be  used  with  the  quad  T1/E1  board.  When  used  in  this  manner,  the  quad  T1/E1  board  is  stacked underneath the quad T3/E3 board. Jumpers on the T3/E3 board are then used to tri-state or enable individual ports on either board.

Figure 3 shows the DS21458 quad T1/E1 PC board floorplan. The current configuration is to populate oscillators for  MCLK1  with  a  2.048MHz  oscillator.  Testpoints  for  port  3  and  port  4  are  provided  on  the  WAN  card,  and testpoints for ports 1 and 2 are provided on the motherboard.

The quad T1/E1 board can be used with the quad T3/E3 board. When used in this manner, the quad T1/E1 board is  stacked  underneath the quad T3/E3 board. Jumpers on the T3/E3 board are then used to tri-state or enable individual ports on either board.

Figure 3. DS21458 Resource Card Floorplan

<!-- image -->

## PC BOARD ERRATA

- Silk  screen  for  the  serial  resource  card  has  VCC  and  ground  indicators  pointing  the  wrong  direction  for configuration switches SW27, SW28, and SW32. This should be corrected with an adhesive label.
- Signal descriptions for JTAG connector are incorrect on the Quad T1E1 card. This should be corrected with an adhesive label.
- In the PCB layout the transformer TX primary is on the wrong side (creating a 2:1 winding instead of a 1:2). This has been corrected in the schematic, the PCB / assembly has been modified to correct this.

## FILE LOCATIONS

This design kit relies upon several supporting files, which are provided on the CD and are available as a zip file from the Maxim website at www.maxim-ic.com/DS33Z44DK.

All locations are given relative to the top directory of the CD/zip file.

- DS33Z44 register definition files and configuration files:
- o .\cfg\_demo\_gui\DS33Z44\_cfg\_demo\_gui\DS33Z44.def
- o .\DS33Z44\_cfg\_demo\_gui\SU\_LI\_PORT4.def (def files for port 3, 2, 1 not shown)
- o .\DS33Z44\_cfg\_demo\_gui\basic\_config.mfg
- DS21458 register definition files and configuration files:
- o .\DS33Z44\_cfg\_demo\_gui\Qt1e1\_DS21458\DS21458RC.def
- o .\DS33Z44\_cfg\_demo\_gui\Qt1e1\_DS21458\DS21458RC\_FPGA.def
- o .\DS33Z44\_cfg\_demo\_gui\Qt1e1\_DS21458\e1\_gapclk\_crc4\_hdb3\_nocas.ini
- o .\DS33Z44\_cfg\_demo\_gui\Qt1e1\_DS21458\gapclk\_DS21458\_T1\_ESF\_LBO0.ini
- DS3174 register definition files and configuration files:
- o .\DS33Z44\_cfg\_demo\_gui\Qt3e3\_DS3184\ds3184\_evbrd\_reduced.def
- o ….. 14 other low level def files ….
- o .\DS33Z44\_cfg\_demo\_gui\Qt3e3\_DS3184\84\_t3\_sct\_needscoaxlb.mfg

## BASIC OPERATION

## Powering Up the Design Kit

- Attach resource card to main board.
- Connect  PCB  3.3V  and  GND  banana  plugs  to  power  supply.  At  power-up  the  system  should  draw approximately 1A.
- Set switches for software mode as described in Table 2 (short description follows).
- Top right bank: A2, A1, A0 in mid position, SCANTRI low
- Top left bank: All low, except for MODEC0, which is high.
- Bottom Bank: All high (AFCS, FULLDS, H1OS)

## General

- Upon power-up, the processor FPGA Status LEDs (DS19 green) will be lit. Interrupt LEDs (DS42 red) will not be lit. DS33Z44 Queue overflow LEDs (DS45, DS46, DS47, DS48 red) will not be lit. PHY LINK LED (DS02, DS03, DS14 green) should be lit if the Ethernet is connected.

Following are several basic system initializations.

## Basic DS33Z44 Initialization (Used for All Quick Setups)

This section covers four basic methods for configuring the Z44. Any one of these initializations can be used with the following Quick Setup examples:

1. Upon power-up, the on-board device driver provides a basic configuration for the DS33Z44 and attached serial cards. This enables traffic to pass from the Ethernet port to the serial port. Consult the device driver documentation for further details.  Device driver behavior is dependant upon jumper settings, which are detailed in Table 2.
2. Register-Based Configuration. Launch ChipView.exe and select Register View. When prompted for a definition file, pick the file named DS33Z44.def . After the definition file loads, go to the File menu and select File → Memory Config File → Load .MFG file. When prompted, select the file named 4Portsbasic\_config.mfg .
3. Hardware Mode. Set switches as described in the section for powering up the design kit, then change the following: HWMODE ← 3.3V, A0 ← 3.3VV, A1 ← 3.3V, A2 ← 0V. This sets the part for LSB first, scrambling off, HDLC encapsulated. At this point traffic will pass from the Ethernet port to the serial port. In this mode broadcast frames are not passed (i.e., ping).
4. EEPROM mode is available with the DK, but is beyond the scope of this manual.

## Quick Setup #1 (Device Driver + CPLD Loopback)

- On the serial resource card install jumper 24. Jumpers JP16-JP19 should be set high. This places the card in CPLD loopback and enables all four ports as described in Table 3.
- Complete the hardware configuration and one of the basic DS33Z44 configurations as described in the previous section.
- Using a patch cable, connect the Ethernet connector to an ordinary PC, or network test equipment. This should cause the link LED to turn on.
- At this point any packets sent to the DS33Z44 are echoed back. Incoming packets (i.e., ping) should cause the RX LED to blink, after which the TX LED should also blink.
- To interact with the device driver select from the drop down menu:
- Select Tools → Plugins → DS33Z44/11/41 Device Driver Demo
- Tools → Plugins → Load Plugins. When asked if DLLs have already registered select yes
- A new form called 'Zchip Configuration' pops up.
- Preload basic configuration for the GUI by selecting File → Load Settings (in the 'Zchip Configuration' form). Select the file named 'basic\_Config.eset'

## Quick Setup #2 (DS3174 T3E3)

- On the DS3174 serial resource card install jumper J24. Jumpers JP16-JP19 should be set high. This places the card in DS3174 mode and enables all four ports as described in Table 3.
- Complete the hardware configuration and one of the basic DS33Z44 configurations as previously described.
- Using a patch cable, connect the Ethernet connector to an ordinary PC, or network test equipment. This should cause the link LED to turn on.
- Launch ChipView.exe (or use existing session if it is already open) and select Register View . When prompted for a definition file, pick the file name ds3184\_evbrd\_reduced.def . After the definition file loads, go to the File menu and select File → Memory Config File → Load .MFG file. When prompted, select the file named 84\_t3\_sct\_needscoaxlb.mfg .
- Place a loopback connector at the DS3174 network side.
- At this point, any packets sent to the DS33Z44 are echoed back. Incoming packets (i.e., ping) should cause the RX LED to blink, after which the TX LED should also blink.

## Quick Setup #3 (DS21458 T1E1)

- Complete the hardware configuration and one of the basic DS33Z44 configurations as previously described.
- Using a patch cable, connect the Ethernet connector to an ordinary PC, or network test equipment. This should cause the link LED to turn on.
- Launch ChipView.exe (or use existing session if it is already open) and select Register View. When prompted for a definition file, pick the file named DS21458.def . After the definition file loads, go to the File menu and select File → Reg Ini File → Load Ini File. When prompted, pick the file named e1\_gapclk\_crc4\_hdb3\_nocas.ini .
- Place a loopback connector at the DS21458 network side; RLOS LED should go out.
- At this point any packets sent to the DS33Z44 are echoed back. Incoming packets (i.e. ping) should cause the RX LED to blink, after which the TX LED should also blink.

## CONFIGURATION SWITCHES AND JUMPERS

The DS33Z44DK has several configuration switches, banana plugs, oscillators, and jumpers. Table 2 provides a description of these signals, given in order of appearance on the PC board (going from left to right, top to bottom).

Table 2. Main Board PC Board Configuration

| SILKSCREEN REFERENCE               | FUNCTION                            | BASIC SETTING   | BASIC SETTING   | DESCRIPTION                                                                                                             |
|------------------------------------|-------------------------------------|-----------------|-----------------|-------------------------------------------------------------------------------------------------------------------------|
| SILKSCREEN REFERENCE               | FUNCTION                            | SW MODE         | HW MODE         | DESCRIPTION                                                                                                             |
| J25.9 + J25.10                     | Reserved                            | Not Installed   | -               | This jumper is not for use with the DS33Z44 design kit. Pin J25.10 has been removed to prevent accidental installation. |
| J25.7 + J25.8                      | Enable device driver                | User decision   | -               | When installed the device driver will configure the DS33Z44 and the Transceiver during power-up.                        |
| J25.5 + J25.6                      | Enable callbacks                    | User decision   | -               | When installed the driver will respond to interrupts.                                                                   |
| GROUND (banana plug)               | Power supply ground                 | -               | -               | System Ground. Always connected to power supply.                                                                        |
| VDD 3.3V (banana plug)             | Power supply VDD                    | -               | -               | System VDD. Always connected to power supply.                                                                           |
| OnCe                               | BDM                                 | -               | -               | Debug connector for processor                                                                                           |
| DCEDTES (3pos switch)              | DS33Z44 mode pin; DTE/DCE selection | Low             | Low             | Low for DTE                                                                                                             |
| RMIIMII (3pos switch)              | DS33Z44 mode pin                    | Low             | Low             | High for RMII, low for MII                                                                                              |
| CKPHA (3pos switch)                | DS33Z44 mode pin                    | Low             | Low             | SPI EEPROM hardware mode configuration switch                                                                           |
| MODEC0 (3pos switch)               | DS33Z44 mode pin                    | High            | Low             | Software mode selected                                                                                                  |
| MODEC1 (3pos switch)               | DS33Z44 mode pin                    | Low             | Low             | Software mode selected                                                                                                  |
| HWMODE (3pos switch)               | DS33Z44 mode pin                    | Low             | Low             | Hardware/software mode (software mode selected)                                                                         |
| SCANMO (3pos switch)               | DS33Z44 mode pin                    | Low             | Low             | Set low for normal operation                                                                                            |
| SCANTRI (3pos switch)              | DS33Z44 mode pin                    | Low             | Low             | Set low for normal operation                                                                                            |
| ….testpoints….                     | DS33Z44 testpoints                  | -               | -               | Processor bus, JTAG and LAN side testpoints for Zchip                                                                   |
| Z-RESET (button)                   | DS33Z44 reset                       | -               | -               | System reset                                                                                                            |
| A2, A1, A0 (3pos switches)         | DS33Z44/SPI pins                    | Mid position    | Mid position    | Address pin/EEPROM config switch. Set to mid position to allow connection to processor.                                 |
| SDRAM CLOCK                        | DS33Z44 SDRAM clock                 | Installed       | Installed       | 100MHz oscillator to drive SDRAM clock                                                                                  |
| MII CLOCK                          | PHY MII clock                       | Installed       | Installed       | 25MHz oscillator to drive SDRAM clock                                                                                   |
| spi_cs, spi_ck, spi_miso, spi_mosi | -                                   | -               | -               | SPI signals (for EEPROM memory)                                                                                         |
| ….testpoints…..                    | DS33Z44 testpoints                  | -               | -               | DS33Z44 serial port testpoints                                                                                          |
| AFCS (1 per port)                  | DS33Z44 mode pin                    | HW mode only    | High            | Set high to enable auto flow control.                                                                                   |

| SILKSCREEN               | FUNCTION                 | BASIC SETTING   | BASIC SETTING   | DESCRIPTION                                                                       |
|--------------------------|--------------------------|-----------------|-----------------|-----------------------------------------------------------------------------------|
| REFERENCE                |                          | SW MODE         | HW MODE         |                                                                                   |
| FULLDS (1 per port)      | DS33Z44 mode pin         | HW mode only    | High            | Set high to enable full duplex.                                                   |
| H10S (1 per port)        | DS33Z44 mode pin         | HW mode only    | High            | Set high to confg for 100Mb.                                                      |
| GROUND/VDD (banana plug) | Power supply ground/3.3V | -               | -               | Redundant connection to system power. Use plugs at either top or bottom of board. |
| VDD 3.3V (banana plug)   | Power supply VDD         | -               | -               | Redundant connection to system power. Use plugs at either top or bottom of board. |

## Table 3. DS3174 Serial Reference Card Jumper Settings

| JUMPER SETTINGS   | MODE                       | COMMENT                                                                                                                                                                      |
|-------------------|----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JP16              | Port 4 tri-state (at CPLD) | When the middle pin of this 3 position jumper is set to VCC, the CPLD passes traffic from the DS3174 to the DS33Z44. When the pin is set low, the CPLD tri-states this port. |
| JP17              | Port 2 tri-state (at CPLD) | When the middle pin of this 3 position jumper is set to VCC, the CPLD passes traffic from the DS3174 to the DS33Z44. When the pin is set low, the CPLD tri-states this port. |
| JP18              | Port 3 tri-state (at CPLD) | When the middle pin of this 3 position jumper is set to VCC, the CPLD passes traffic from the DS3174 to the DS33Z44. When the pin is set low, the CPLD tri-states this port. |
| JP19              | Port 1 tri-state (at CPLD) | When the middle pin of this 3 position jumper is set to VCC, the CPLD passes traffic from the DS3174 to the DS33Z44. When the pin is set low, the CPLD tri-states this port. |
| J243              | CPLD loopback              | CPLD loopback makes the following connections: Zrser ← Ztser, Ztden ← 3.3V, Zrden ← 3.3V, Ztclki ← OscY03, Zrclki ← OscY03                                                   |

## ADDRESS MAP (ALL CARDS)

Motorola resource card address space begins at 0x81000000. All offsets given below are relative to the beginning of the daughter card address space (shown previously).

Table 4. Overview of Daughter Card Address Map

| OFFSET           | DEVICE   | DESCRIPTION                                                                                                                                                                                                      |
|------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0X0000 to 0X0087 | FPGA     | Processor board identification                                                                                                                                                                                   |
| 0X1000 to 0X1FFF | DS33Z44  | DS33Z44. Uses CS_X1.                                                                                                                                                                                             |
| 0X2000 to 0X2FFF | DS21458  | T1E1 DS21458 resource card. Uses CS_X2.                                                                                                                                                                          |
| 0X4000 to 0X4010 | FPGA     | FPGA on DS21458 resource card. Used to facilitate IBO mode. Default configuration of FPGA is compatible with non-IBO mode functionality. The FPGA settings do not require modification for use with the DS33Z44. |
| 0X3000 to 0X3FFF | DS3174   | T3E3 resource card. Uses CS_X3.                                                                                                                                                                                  |

Registers in the DS33Z44, DS21458, and DS3174 can be easily modified using the ChipView host-based userinterface software with the definition files previously mentioned.

## DS33Z44 INFORMATION

For  more  information  about  the  DS33Z44,  consult  the  DS33Z44  data  sheet  available  on  our  website  at www.maxim-ic.com/DS33Z44.

## DS33Z44DK INFORMATION

For more information about the DS33Z44DK, including software downloads, consult the DS33Z44DK data sheet available on the our website at www.maxim-ic.com/DS33Z44DK.

## TECHNICAL SUPPORT

For additional technical support, go to www.maxim-ic.com/support.

## DOCUMENT REVISION HISTORY

|   REVISION DATE | DESCRIPTION                                                                  |
|-----------------|------------------------------------------------------------------------------|
|          032305 | Initial DS33Z44DK data sheet release.                                        |
|          042205 | Updated Basic DS33Z44 Initialization section; added step to Quick Setup #1 . |
|          051105 | Added new PC board errata.                                                   |
|          110106 | Updated schematics.                                                          |

## SCHEMATICS

The  DS33Z44DK  schematics  are  featured  in  the  following  pages.  As  this  is  a  hierarchal  schematic  some explanation is in order. The main board is composed of six hierarchal blocks: the processor block, the DS33Z44 block,  and  four  Ethernet  blocks  inside  the  DS33Z44  block,  which  is  a  nested  hierarchy  block.  Each  serial  card (DS21458 and DS3174) consists of a single hierarchy block, which connects to a 140-pin AV bus that snaps into the mainboard.

All signals inside a hierarchy block are local, with exception for VCC and ground. In-port and out-port connectors are used to allow signals inside a hierarchy block to become accessible as pins on the hierarchy blocks symbol. From here, blocks are wired together as if they were ordinary components. The system diagram is shown again below, with schematic page numbers given for each functional block.

This  system  contained  other  hierarchy  blocks  that  are  not  shown  (primarily  a  single-port  serial  card  and  the DS33Z11 mainboard). Due to this, page numbers will not be continuous and some gaps in numbering will be seen when referring to the total page count. However, page numbers inside any given hierarchy block will be continuous.

16 of 59

<!-- image -->

Maxim/Dallas Semiconductor cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim/Dallas Semiconductor product. No circuit patent licenses are implied. Maxim/Dallas Semiconductor reserves the right to change the circuitry and specifications without notice at any time.

1

2

3

4

5

6

7

8

20C8&lt;

Z44INT

INT

\_z44andlan\_dn

HIERARCHICAL BLOCK

D

25B2v

25C5v

Z44\_RSER&lt;4..1&gt;

20C6&lt;&gt;

20B3&lt;&gt;

25B5v

Z44\_TSER&lt;4..1&gt;

RSER&lt;4..1&gt;

25D2v

Z44\_RDEN&lt;4..1&gt;

TSER&lt;4..1&gt;

ADDR&lt;9..0&gt;

A\_DUT&lt;9..0&gt;

21B7&lt;

RDEN&lt;4..1&gt;

DAT&lt;7..0&gt;

D\_DUT&lt;7..0&gt;

21B7&lt;

22A1v

22B1v

22D5v

(PLUG)

PLUG

CONNECTOR

P1

(PLUG)

PLUG

CONNECTOR

P2

LEVEL

TOP

DS33Z44

D

25B7v

25D7v

20C8&lt;&gt;

Z44\_TDEN&lt;4..1&gt;

20B8&lt;&gt;

20B5&lt;&gt;

25B3v

Z44\_RCLK&lt;4..1&gt;

TDEN&lt;4..1&gt;

RD

RD\_DUT

21B7&lt;

22B6v

22B5v

JB10

JB14

25D3v

Z44\_TCLK&lt;4..1&gt;

RCLKI&lt;4..1&gt;

WR

WR\_DUT

21B7&lt;

22B6v TCLKI&lt;4..1&gt;

CS

CS\_X1

21C4&gt;

22B6v

VDD

21C4&gt;

ALE

1

CS\_X4

GND

3

2

71

22B6v

21B7&lt;

BTS\_DUT

HWMODE

PAGES 22-29

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

75

76

77

72

GND

GND

CS\_X5

21C4&gt;

21C7&lt;

21C7&lt;

INT3

INT4

1

22B7v

22B6v

21C7&lt;

20C8&lt;&gt;

20C3&lt;

21C4&gt;

INT2

RESET\_B

GND

3

2

71

4

GND

6

5

73

72

GND

INT5

INT2

Z44INT

21C7&lt;

20D1&gt;

10

79

V3\_3

20A1&gt;

20A5&lt;&gt;

20A8&lt;&gt;

20B5&lt;&gt;

20B8&lt;&gt;

20C5&lt;&gt;

20C8&lt;&gt;

20A1

25C5v

20D1&gt;

Z44\_TSER&lt;1&gt;

13

C

GND

14

15

16

22B6v

21B7&lt;

BIS1\_DUT

MODEC1

RESET\_B

RESET\_B

20C7&lt;&gt;

21C4&gt;

22B6v

11

12

81

82

80

GND

20C6&lt;&gt;

20B3&lt;&gt;

83

84

85

GND

25C6v

20A2&gt;

20D1&gt;

Z44\_TDEN&lt;1&gt;

SIG\_RETURN

GND

7

8

9

78

10

79

11

12

81

80

77

76

75

74

GND

V3\_3

13

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

25D2v

20D1&gt;

Z44\_TSER&lt;3&gt;

GND

26

94

95

GND

20C6&lt;&gt;

20B3&lt;&gt;

20A2&gt;

25B5v

20D1&gt;

Z44\_TSER&lt;2&gt;

SIG\_RETURN

GND

88

GND

25D6v

20D1&gt;

Z44\_TCLK&lt;1&gt;

GND

14

15

16

83

84

85

82

GND

Z44\_RSER&lt;1&gt;

25C7v

20D1&gt;

GND

Z44\_RDEN&lt;1&gt;

25C7v

20D1&gt;

89

90

V3\_3

20A1&gt;

20A5&lt;&gt;

20A8&lt;&gt;

20B5&lt;&gt;

20B8&lt;&gt;

20C5&lt;&gt;

20C8&lt;&gt;

20A1

GND

17

18

87

86

19

20

21

22

23

91

88

GND

Z44\_RCLK&lt;1&gt;

25D7v

20D1&gt;

C

89

90

V3\_3

20A1&gt;

20B8&lt;&gt;

20C5&lt;&gt;

20A5&lt;&gt;

20C8&lt;&gt;

20A8&lt;&gt;

20A1

20B5&lt;&gt;

24

92

25

93

27

25C2v

20D1&gt;

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

20D1&gt;

25D3v

25B6v

20D1&gt;

Z44\_TDEN&lt;2&gt;

GND

26

94

95

GND

27

31

100

99

25D2v

20D1&gt;

Z44\_TCLK&lt;3&gt;

GND

32

101

GND

Z44\_RDEN&lt;3&gt;

20D1&gt;

25C3v

25B6v

20D1&gt;

Z44\_TCLK&lt;2&gt;

33

34

B

35

36

104

102

103

V3\_3

Z44\_RCLK&lt;3&gt;

20A1&gt;

20D1&gt;

20A5&lt;&gt;

20A8&lt;&gt;

20B5&lt;&gt;

20B8&lt;&gt;

20C5&lt;&gt;

20C8&lt;&gt;

20A1

GND

30

28

29

98

96

97

GND

Z44\_RSER&lt;2&gt;

25B7v

20D1&gt;

31

100

99

GND

Z44\_RDEN&lt;2&gt;

25B7v

20D1&gt;

25D3v GND

32

33

101

102

34

35

25B2v

20D1&gt;

Z44\_TSER&lt;4&gt;

GND

42

41

GND

39

40

38

37

105

106

GND

109

107

108

GND

36

37

104

105

106

103

V3\_3

Z44\_RCLK&lt;2&gt;

25B7v

20D1&gt;

20A1&gt;

20B8&lt;&gt;

20C5&lt;&gt;

20A5&lt;&gt;

20C8&lt;&gt;

20A8&lt;&gt;

20A1

20B5&lt;&gt;

GND

GND

39

40

25B2v

20C6&lt;&gt;

20A2&gt;

20D1&gt;

Z44\_TCLK&lt;4&gt;

25B2v

20D1&gt;

Z44\_TDEN&lt;4&gt;

SIG\_RETURN

GND

46

45

44

43

111

110

112

GND

Z44\_RSER&lt;4&gt;

20D1&gt;

25B3v

114

47

115

113

V3\_3

Z44\_RDEN&lt;4&gt;

20A1&gt;

20D1&gt;

20A5&lt;&gt;

20A8&lt;&gt;

20B5&lt;&gt;

20B8&lt;&gt;

20C5&lt;&gt;

20C8&lt;&gt;

20A1

GND

42

41

38

107

108

GND

B

109

110

111

GND

43

112

48

20A8&lt;&gt;

FPGAGCLK1\_NU

GND

GND

52

51

50

49

120

54

55

53

123

121

117

116

118

GND

Z44\_RCLK&lt;4&gt;

20D1&gt;

25B3v

GND

45

46

44

113

114

47

115

V3\_3

20A1&gt;

20B8&lt;&gt;

20C5&lt;&gt;

20A5&lt;&gt;

20C8&lt;&gt;

20A8&lt;&gt;

20A1

20B5&lt;&gt;

119

GND

49

50

122

V3\_3

0

GND

56

57

58

59

60

A

GND

1

3

XD&lt;7..0&gt;

5

GND

62

61

63

132

7

GND

66

64

65

134

133

131

130

129

128

127

126

125

124

GND

21A5&gt;

21A5&gt;

TDO\_NU

TCK\_NU

GND

GND

52

54

53

55

123

51

48

120

119

118

117

116

GND

GND

121

FPGAGCLK1\_NU

20A3&lt;&gt;

122

GND

GND

OSC1\_NU

3

5

GND

56

58

57

59

GND

67

135

136

GND

2

4

XD&lt;7..0&gt;

21B4&gt;

20A3

XA&lt;15..0&gt;

6

8

10

21B4&gt;

20A8

GND

62

63

60

61

64

132

131

130

129

128

127

126

125

124

V3\_3

TDI\_NU

TMS\_NU

21A6&gt;

20A1&gt;

21A6&gt;

20B8&lt;&gt;

0

20A5&lt;&gt;

20C5&lt;&gt;

20A8&lt;&gt;

20A1

20C8&lt;&gt;

20B5&lt;&gt;

GND

2

GND

4

A

20C6&lt;&gt;

20B3&lt;&gt;

SIG\_RETURN

21B4&gt;

RW\_X

GND

68

69

70

140

138

137

CS\_X2

6

21C4&gt;

139

V3\_3

WR\_X

CS\_X3

20A1&gt;

20A5&lt;&gt;

20A8&lt;&gt;

20B5&lt;&gt;

20B8&lt;&gt;

20C5&lt;&gt;

20C8&lt;&gt;

20A1

GND

66

65

134

67

135

133

GND

7

9

XA&lt;15..0&gt;

136

21C4&gt;

21B4&gt;

OSC3\_NU

GND

68

70

69

140

139

138

137

V3\_3

11

OSC2\_NU

OSC4\_NU

20A1

20A1&gt;

20C5&lt;&gt;

20A5&lt;&gt;

20B5&lt;&gt;

20C8&lt;&gt;

20B8&lt;&gt;

20A8&lt;&gt;

V3\_3

20A1&gt;

20A5&lt;&gt;

20A8&lt;&gt;

20B5&lt;&gt;

20B8&lt;&gt;

20C5&lt;&gt;

20C8&lt;&gt;

20A1

1

25B3v

22B6v

21B7&lt;

BIS0\_DUT

MODEC0

V3\_3

GND

DATE:

DS33Z11/41/44DK01A0

TITLE:

R.C.

WAN

FOR

CONNECTORS

MOTHERBOARD

09/16/2004

1/2(BLOCK)

PAGE:

20/71(TOTAL)

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

PARENT BLOCK: \_ztopdn\_\

BLOCK NAME: \_z44top\_dn.

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

I1

42B3v

20D3&lt;

CS\_X1

CS\_X1

HIERARCHICAL BLOCK

INT2

INT2

20C7&lt;&gt;

20C8&lt;&gt;

38B7v

42B3v

20A5&lt;&gt;

CS\_X2

CS\_X2

INT3

INT3

20C7&lt;&gt;

38B7v

C

42A4v

20A5&lt;&gt;

CS\_X3

CS\_X3

INT4

INT4

20C7&lt;&gt;

38B7v

C

42A4v

20C3&lt;&gt;

CS\_X4

CS\_X4

INT5

INT5

20C8&lt;&gt;

39D4v

42A4v

20C5&lt;&gt;

CS\_X5

CS\_X5

\_motprocrescard\_dn

38-44

PAGES

38A5v

20C3&lt;

20C7&lt;&gt;

RESET\_B

RESET\_B

RD\_DUT

RD\_DUT

20D3&lt;

42C3v WR\_DUT

WR\_DUT

20D3&lt;

42C3v D\_DUT&lt;7..0&gt;

D\_DUT&lt;7..0&gt;

20D3&lt;

42D5v

42B3v

20A3&lt;&gt;

RW\_X

RW\_X

A\_DUT&lt;11..0&gt;

A\_DUT&lt;11..0&gt;

20D3&lt;

42A5v

42A6v

42B3v

20A5&lt;&gt;

WR\_X

WR

BIS0\_DUT

BIS0\_DUT

20C1&gt;

42C3v

B

42C7v

20A8

20A6

XA&lt;15..0&gt;

42B3v

20A5

20A3

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

20C1&gt;

BTS\_DUT

20C1&gt;

42C3v

B

42C3v

44A7v

20A7&lt;&gt;

44A7v

20A7&lt;&gt;

44A7v

20A8&lt;&gt;

44A7v

20A8&lt;&gt;

TDO\_NU

TCK\_NU

TDI\_NU

TMS\_NU

A

A

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

2/2(BLOCK)

PAGE:

21/71(TOTAL)

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

22A5&lt;&gt;

22A5&lt;&gt;

22A5&lt;&gt;

22A5&lt;&gt;

22A5&lt;&gt;

D

JTRST

JTCLK

JTDO

JTDI

JTMS

D

E6

D4

E5

E4

F7

JTRST

JTCLK

JTDO

JTDI

JTMS

JTAG

MII/RMII

REF\_CLK

MDC

REF\_CLKO

MDIO

C15

TPB02

REF\_CLK

28A4&lt;

B15

RB181

REF\_CLKO

F11

TP34

R99

F10

TPB01

1

RB161

MDC

26B3&gt;

MDIO

27B6&gt;

26B6&gt;

27B3&gt;

26B3&gt;

27B6&gt;

26B6&gt;

27B3&gt;

22B2&lt;&gt;

ZADDR0

A1

A&lt;0&gt;

22B2&lt;&gt;

ZADDR1

B1

A&lt;1&gt;

1

22A2&lt;&gt;

ZADDR2

A2

A&lt;2&gt;

3

B2

A&lt;3&gt;

1

V3\_3

2.7V

4

C2

A&lt;4&gt;

5

A3

A&lt;5&gt;

SBA&lt;0&gt;

R8

RB230

SD\_BA0

24B4&lt;

Y02

6

B3

7

C3

A&lt;6&gt;

A&lt;7&gt;

U22

SBA&lt;1&gt;

R9

RB246

SD\_BA1

24B4&lt;

10K

RB74

10K

RB79

8

3

VCC

SI

5

ZMOSI

22C4&lt;&gt;

ADDR&lt;9..0&gt;

WP*

SO

2

ZMISO

22C4&lt;&gt;

22B1&lt;

20D3^

IN

8

9

A4

B4

A&lt;8&gt;

A&lt;9&gt;

7

HOLD*

SCK

6

ZSPISCK

22B4&lt;&gt;

0

ZMOSI

A5

22C2&lt;

4

GND

CS*

1

ZSPICS

22A6&gt;

1

ZMISO

A6

22C2&gt;

22C4&lt;

AT25160A\_U

2

ZSPISCK

A7

22C2&lt;

3

B5

D&lt;3&gt;

4

B6

D&lt;4&gt;

D&lt;0&gt;/MOSI

D&lt;1&gt;/MISO

D&lt;2&gt;/SPICK

DS33Z44\_U1

SDRAM CONTROL

SDMASK&lt;0&gt;

SDMASK&lt;1&gt;

SYSCLKI

SDCLKO

SDCS*

SDMASK&lt;3&gt;

SDMASK&lt;2&gt;

T8

R166

SD\_DQM0

24C4&lt;

C

M7

RB239

SD\_DQM1

24C4&lt;

T11

R147

SD\_DQM2

24C4&lt;

N11

RB217

SD\_DQM3

24C4&lt;

P8

R158

SD\_CS

24C4&lt;

T7

RB226

SD\_CLKO

24C3&lt;

T15

SD\_CLKI

28D5&lt;

5

B7

D&lt;5&gt;

SRAS*

P15

RB219

SD\_RAS

24C4&lt;

C

20D3^

IN

V3\_3

SW04

6

C5

D&lt;6&gt;

MICRO PORT/SPI MASTER PORT

SCAS*

N7

R163

SD\_CAS

24C4&lt;

SWE*

R7

RB282

SD\_WE

24C4&lt;

B

0

4

20D3^

IO

ZADDR0

22D4&lt;

DAT&lt;7..0&gt;

7

C6

D&lt;7&gt;

CKPHA

MODE

SCAN

ENABLE

SCAN

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

OHM

30

UNMARKED RESISTORS ARE

B

ADDR&lt;9..0&gt;

1

4

SP3T

SW18

SP3T

SW08

ZADDR1

22C4&lt;

F6

E8

E7

C4

A15

D7

D6

D5

D8

E2

E1

E13

D1

D3

2

ZADDR2

22C4&lt;

CKPHA

SCANMOD

4

SP3T

28B4&lt;

28C4&lt;

SCANEN

28B4&lt;

RMIIMIIS

28C4&lt;

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

28D2&lt;

OUT

OUT

OUT

IN

IN

22C2&lt;

IN

OUT

J32

20C2^

20C2^

20C2^

20D3^

20D3^

20D3^

22A6&lt;&gt;

TCK\_NU

2

2

1

1

JTCLK

22D6&lt;

28D4&lt;

28D2&lt;

28D4&lt;

20D2^

A

A

TMS\_NU

4

4

3

3

JTMS

22D6&lt;

TDI\_NU

6

6

5

5

JTDO

22D6&lt;&gt;

V3\_3

TDO\_NU

8

8

7

7

JTDI

22D6&lt;

NC7SZ86\_U

10

10

9

9

JTRST

22D6&lt;

20D2^

22A7&gt;

INT

1

BUFFER

UXB07

4

2

RED

RB332

V3\_3

1

2

1

330

DATE:

DS33Z11/41/44DK01A0

TITLE:

DS42

09/16/2004

CONN\_10P

1/8(BLOCK)

PAGE:

22/71(TOTAL)

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

V1\_8ZCHIP

29A4&lt;&gt;

23B4&lt;

29B6&lt;

V3\_3

D

G12

F13

E14

K12

M14

L13

N3

P2

A14

M4

F4

E3

D2

C1

H10

H9

H8

H7

H6

H5

H4

H3

G10

G9

G8

G7

D

0

RB249

R4

1

RB267

P5

SDATA&lt;0&gt;

1.8VDD13

1.8VDD12

1.8VDD11

1.8VDD10

1.8VDD9

1.8VDD8

1.8VDD7

1.8VDD6

1.8VDD5

1.8VDD4

1.8VDD3

1.8VDD2

1.8VDD1

1.8VDD0

3.3VDD15

3.3VDD14

3.3VDD13

3.3VDD12

3.3VDD11

3.3VDD10

3.3VDD9

3.3VDD8

3.3VDD7

3.3VDD6

3.3VDD5

3.3VDD4

2

R173

T4

SDATA&lt;1&gt;

V3\_3

3.3VDD3

G6

SDATA&lt;2&gt;

3.3VDD2

G5

3

RB280

4

RB268

R5

T5

SDATA&lt;3&gt;

SDATA&lt;4&gt;

10UF

CB115

10UF

CB202

10UF

CB495

10UF

CB361

10UF

CB492

10UF

CB402

10UF

CB446

10UF

CB335

10UF

CB469

0.1UF

1

0.1UF

CB421

1

0.1UF

CB301

1

0.1UF

CB423

1

0.1UF

CB323

1

CB298

0.1UF

1

0.1UF

CB315

1

0.1UF

CB312

1

0.1UF

CB47

1

0.1UF

CB240

1

0.1UF

C184

1

CB289

470UF

1

CB26

3.3VDD1

G4

3.3VDD0

G3

6

R169

R6

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

SDA&lt;0&gt;

R10

R150

0

5

RB265

T6

SDATA&lt;5&gt;

C

7

RB281

P7

SDATA&lt;7&gt;

SDA&lt;1&gt;

T10

RB196

1

8

RB248

N6

SDATA&lt;8&gt;

9

RB241

P6

SDATA&lt;9&gt;

I182

NA

DS33Z44

SDA&lt;2&gt;

SDA&lt;3&gt;

R11

RB190

2

C

10

RB213

M6

11

RB242

M3

SDATA&lt;10&gt;

12

RB247

M5

SDATA&lt;11&gt;

U22

SDA&lt;4&gt;

P11

RB223

3

SDA&lt;5&gt;

M9

RB216

4

N9

RB205

5

SD\_A&lt;11..0&gt;

24A3&gt;

SDATA&lt;12&gt;

DS33Z44\_U1

SDA&lt;6&gt;

N10

RB224

6

SDA&lt;7&gt;

M8

RB231

7

13

RB233

N4

SDATA&lt;13&gt;

14

RB240

N5

SDATA&lt;14&gt;

SDRAM CONTROL

SDA&lt;8&gt;

15

RB279

P4

SDATA&lt;15&gt;

16

RB197

R12

SDATA&lt;16&gt;

PWR/GND

SDA&lt;9&gt;

N8

RB232

8

SDA&lt;10&gt;

P9

RB225

9

P10

RB266

10

17

R143

N12

B

18

RB189

P12

SDATA&lt;17&gt;

SDATA&lt;18&gt;

V1\_8ZCHIP

29A4&lt;&gt;

23D4&lt;

29B6&lt;

SDA&lt;11&gt;

T9

R154

11

NC1

F3

TP51

1

B

19

RB198

T13

20

RB202

T12

SDATA&lt;19&gt;

SDATA&lt;20&gt;

21

R136

T14

SDATA&lt;21&gt;

470UF

1

CB211

0.1UF

1

0.1UF

CB387

1

0.1UF

CB247

1

CB255

0.1UF

1

0.1UF

CB256

1

0.1UF

CB178

1

0.1UF

CB246

1

0.1UF

CB227

1

0.1UF

CB177

1

0.1UF

CB386

1

0.1UF

C102

1

0.1UF

CB162

1

10UF

CB400

C90

10UF

CB408

10UF

CB417

10UF

C101

10UF

C88

10UF

C89

10UF

CB381

NC2

NC3

F8

TP52

F9

TP50

1

1

NC4

G1

TP49

1

22

R131

R13

SDATA&lt;22&gt;

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

23

RB188

R14

SDATA&lt;23&gt;

24

RB204

P14

SDATA&lt;24&gt;

VSS1

J4

VSS0

J3

25

RB199

P13

26

RB203

N15

SDATA&lt;25&gt;

SDATA&lt;26&gt;

SDATA&lt;27&gt;

SDATA&lt;28&gt;

SDATA&lt;29&gt;

SDATA&lt;30&gt;

SDATA&lt;31&gt;

VSS24

VSS23

VSS22

VSS21

VSS20

VSS19

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

VSS2

J5

VSS3

J6

OHM

30

UNMARKED RESISTORS ARE

N13

M13

L12

M12

M11

L9

L8

L7

L6

L5

L4

L3

K10

K9

K8

K7

K6

M10

L10

K4

K3

J10

J9

J8

J7

K5

A

SD\_DQ&lt;31..0&gt;

24D7

RB212

RB191

RB211

RB210

RB218

BLACK

B

J48

A

1

2

A

CONN\_BANANA\_2P

27

28

29

31

UNMARKED RESISTORS ARE 30 OHMS

RED

DATE:

DS33Z11/41/44DK01A0

TITLE:

J53

A

09/16/2004

B

1

2

V3\_3

2/8(BLOCK)

PAGE:

23/71(TOTAL)

SCULLY

STEVE

ENGINEER:

CONN\_BANANA\_2P

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

23A2

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

22B8&lt;

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

22C8&lt;

SD\_CS

20

CS*

DQ&lt;5&gt;

10

5

22B8&lt;

SD\_WE

17

WE*

DQ&lt;6&gt;

11

6

C

22B8&lt;

SD\_CAS

18

CAS*

DQ&lt;7&gt;

13

7

C

22B8&lt;

SD\_RAS

19

RAS*

DQ&lt;8&gt;

74

8

22C8&lt;

SD\_DQM0

16

DQM&lt;0&gt;

DQ&lt;9&gt;

76

9

22C8&lt;

SD\_DQM1

71

DQM&lt;1&gt;

DQ&lt;10&gt;

77

10

22C8&lt;

SD\_DQM2

28

DQM&lt;2&gt;

DQ&lt;11&gt;

79

11

22C8&lt;

SD\_DQM3

59

DQM&lt;3&gt;

DQ&lt;12&gt;

80

12

22C8&lt;

SD\_BA0

22

BA&lt;0&gt;

UB09

DQ&lt;13&gt;

DQ&lt;14&gt;

82

13

83

14

22C8&lt;

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

23C8

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

3/8(BLOCK)

PAGE:

24/71(TOTAL)

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

|       | D   | C                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | B                        | A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                         | 25/71(TOTAL)                                       |     |
|-------|-----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|----------------------------------------------------|-----|
| 1 2   | U22 | PORT3 PIN N2 RCLKI<3> RXDV<3> RX_CRS<3> RX_ERR<3> COL_DET<3> FULLDS<3> TX_CLK<3> RSER<3> RDEN<3> RXD0<3> RXD1<3> RXD2<3> RXD3<3> 30 30 TXD3<3> 30 TX_EN<3> RB169 RB170 J12 J13 J14 G15 N1 P1 G16 E15 H14 H12 H11 G11 M15 K11 N2 27C5> 27C5> 27C5> 27C5> 27D8< 27D5> 27D5> 27D5> 27D5> 27D8< 27C8< DS33Z44_U1 PORT RCLKI TCLKI TDEN/TBSYNC TSER RXDV RX_CRS/CRS_DV RX_ERR COL_DET TXD1 TXD0 TXD3 TXD2 TX_EN RX_CLK TX_CLK QOVF H10S RSER RDEN/RBSYNC RXD0 RXD1 RXD2 RXD3 IN IN IN | TCLKI<4> U22 20D2^ R1 IN | RCLKI<4> TDEN<4> RXDV<4> RX_CRS<4> RX_ERR<4> COL_DET<4> RX_CLK<4> TX_CLK<4> QOVF<4> H10S<4> RSER<4> RDEN<4> RXD0<4> RXD1<4> RXD2<4> RXD3<4> 30 TSER<4> 30 TXD0<4> 30 TXD1<4> 30 TXD2<4> 30 TXD3<4> 30 TX_EN<4> RB320 R126 RB171 RB167 RB168 R124 20D2^ 20D2^ C14 B14 C13 B13 T1 T2 B12 A8 A16 A13 G13 D16 E16 B16 C16 F16 D14 F14 D15 R2 R3 T3 27C2> 27C2> 27D2> 27D4< 29C8<> 29A4< 27D4< 27D4< 27D4< 27D4< 27C4< PORT RCLKI TCLKI TDEN/TBSYNC TSER RXDV RX_CRS/CRS_DV RX_ERR COL_DET TXD1 TXD0 TXD3 TXD2 TX_EN RX_CLK TX_CLK QOVF H10S RSER RDEN/RBSYNC RXD0 RXD1 RXD2 RXD3 IO OUT | AFCS<4> C12 29A4< AFCS                                  | STEVE SCULLY 09/16/2004 4/8(BLOCK) PAGE: ENGINEER: | 1 2 |
| 3 4   | U22 | PORT3 PIN N2 RCLKI<3> RXDV<3> RX_CRS<3> RX_ERR<3> COL_DET<3> FULLDS<3> TX_CLK<3> RSER<3> RDEN<3> RXD0<3> RXD1<3> RXD2<3> RXD3<3> 30 30 TXD3<3> 30 TX_EN<3> RB169 RB170 J12 J13 J14 G15 N1 P1 G16 E15 H14 H12 H11 G11 M15 K11 N2 27C5> 27C5> 27C5> 27C5> 27D8< 27D5> 27D5> 27D5> 27D5> 27D8< 27C8< DS33Z44_U1 PORT RCLKI TCLKI TDEN/TBSYNC TSER RXDV RX_CRS/CRS_DV RX_ERR COL_DET TXD1 TXD0 TXD3 TXD2 TX_EN RX_CLK TX_CLK QOVF H10S RSER RDEN/RBSYNC RXD0 RXD1 RXD2 RXD3 IN IN IN | TCLKI<4> U22 20D2^ R1 IN | PORT4 PIN T3 DS33Z44_U1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | FULLDS<4> A12 29B4< FULLDS                              | STEVE SCULLY 09/16/2004 4/8(BLOCK) PAGE: ENGINEER: | 3   |
|       | U22 | TX_EN<1> TXD3<1> TXD2<1> 30 30 30 26C8< 26D8< 26D8<                                                                                                                                                                                                                                                                                                                                                                                                                              | TCLKI<4> U22 20D2^ R1 IN | RX_CLK<2> QOVF<2> TX_EN<2> TXD3<2> TXD2<2> TXD1<2> TXD0<2> TSER<2> 30 30 30 30 30 20D2^ 20D2^ 20D2^ 20D2^ 20D2^ 20D2^ 27C2> 27C2> 27D2> 27D2> 27D2> 27D2> 26D2> 29D8<> 26C5< 26D5< 26D5< 26D5< 26D5< IO IN OUT IN IN IN                                                                                                                                                                                                                                                                                                                                                             | H10S<2> AFCS<2> J16 L11 29A2< 29B2<                     | STEVE SCULLY 09/16/2004 4/8(BLOCK) PAGE: ENGINEER: | 4   |
| 5 6 7 | U22 | R96 R115 R98 E10 D9 E9 TXD3 TXD2 TX_EN                                                                                                                                                                                                                                                                                                                                                                                                                                           | TCLKI<4> U22 20D2^ R1 IN | TX_CLK<2> TCLKI<2> TDEN<2> 30 RB339 RB164 RB165 RB180 RB121 RB179 TP60 TP62 TP61 C8 M16 L16 L14 L15 N14 R15 R16 J2 K2 J1 26D5< TCLKI TSER TXD1 TXD0 TXD3 TXD2 TX_EN TX_CLK QOVF                                                                                                                                                                                                                                                                                                                                                                                                     | H10S AFCS                                               |                                                    | 5 6 |
| 8     | U22 | RXD3<1> RXD2<1> RXDV<1> E11 D11 D10 26D5> 26D5> 26C5> RXDV RXD2 RXD3                                                                                                                                                                                                                                                                                                                                                                                                             | TCLKI<4> U22 20D2^ R1 IN | PORT2 PIN L2 RXDV<2> RX_CRS<2> RX_ERR<2> RXD0<2> RXD1<2> RXD2<2> RXD3<2> RCLKI<2> RSER<2> RDEN<2> TP54 TP56 TP55 20D2^ 20D2^ 20D2^ K16 H15 K14 K13 L1 K1 T16 N16 K15 L2 26C2> 26C2> 26C2> 26D2> 26D2> 26D2> 26D2> DS33Z44_U1 PORT RCLKI TDEN/TBSYNC RXDV RX_CRS/CRS_DV RX_ERR RX_CLK RSER RDEN/RBSYNC RXD0 RXD1 RXD2 RXD3 IN IN IN                                                                                                                                                                                                                                                  | COL_DET<2> FULLDS<2> J15 P16 26C2> 29B2< COL_DET FULLDS | 8                                                  | 7   |

1

2

3

4

5

6

7

8

HIERARCHICAL BLOCK

HIERARCHICAL BLOCK

D

32A7v

25B8&lt;

RXD0&lt;2&gt;

RXD0

TXD0

TXD0&lt;2&gt;

25B5&lt;

32A5v

30A7v

25C8&lt;

RXD0&lt;1&gt;

RXD0

TXD0

TXD0&lt;1&gt;

25C5&lt;

30A5v

D

32A7v

25A8&lt;

RXD1&lt;2&gt;

RXD1

TXD1

TXD1&lt;2&gt;

25A5&lt;

32A5v

30A7v

25C8&lt;

RXD1&lt;1&gt;

RXD1

TXD1

TXD1&lt;1&gt;

25C5&lt;

30A5v

32A7v

25A8&lt;

RXD2&lt;2&gt;

RXD2

TXD2

TXD2&lt;2&gt;

25A5&lt;

32A5v

30A7v

25C8&lt;

RXD2&lt;1&gt;

RXD2

TXD2

TXD2&lt;1&gt;

25C5&lt;

30A5v

32A7v

25A8&lt;

RXD3&lt;2&gt;

RXD3

\_mii\_wan\_dn

TXD3

TXD3&lt;2&gt;

25A5&lt;

32A5v

30A7v

25C8&lt;

RXD3&lt;1&gt;

RXD3

\_mii\_wan\_dn

TXD3

TXD3&lt;1&gt;

25C5&lt;

30A5v

32A7v

25A5&lt;&gt;

RX\_CLK&lt;2&gt;

RX\_CLK

32-33

PAGES

TX\_CLK

TX\_CLK&lt;2&gt;

25A5&lt;&gt;

32A5v

30A7v

25C5&lt;&gt;

RX\_CLK&lt;1&gt;

RX\_CLK

30-31

PAGES

TX\_CLK

TX\_CLK&lt;1&gt;

25C5&lt;&gt;

30A5v

32A7v

25A8&lt;

RX\_CRS&lt;2&gt;

RX\_CRS

TX\_EN

TX\_EN&lt;2&gt;

25A5&lt;

32A5v

30A7v

25C8&lt;

RX\_CRS&lt;1&gt;

RX\_CRS

TX\_EN

TX\_EN&lt;1&gt;

25C5&lt;

30A5v

32A7v

25A8&lt;

RX\_ERR&lt;2&gt;

RX\_ERR

30A7v

25C8&lt;

RX\_ERR&lt;1&gt;

RX\_ERR

32A7v

25A8&lt;

RXDV&lt;2&gt;

RXDV

30A7v

25C8&lt;

RXDV&lt;1&gt;

RXDV

32A7v

25A8&lt;

COL\_DET&lt;2&gt;

COL\_DET

LED\_DPLX\_ADD0

LED\_DPLX\_A0&lt;2&gt;

26B4&lt;

32C5v

30A7v

25C8&lt;

COL\_DET&lt;1&gt;

COL\_DET

LED\_DPLX\_ADD0

LED\_DPLX\_A0&lt;1&gt;

LED\_COL\_ADD1

LED\_COL\_A1&lt;2&gt;

26B4&lt;

32C5v

LED\_COL\_ADD1

LED\_COL\_A1&lt;1&gt;

C

LED\_GDLINK\_ADD2

LED\_GDLINK\_A2&lt;2&gt;

26A4&lt;&gt;

32C5v

LED\_GDLINK\_ADD2

LED\_GDLINK\_A2&lt;1&gt;

C

LED\_TX\_ADD3

LED\_TX\_A3&lt;2&gt;

26A4&lt;&gt;

32C5v

LED\_TX\_ADD3

LED\_TX\_A3&lt;1&gt;

MII\_CLK

MDC

MDIO

RESET\_B

LED\_RX\_ADD4

LED\_RX\_A4&lt;2&gt;

26A4&lt;&gt;

32C5v

MII\_CLK

MDC

MDIO

RESET\_B

LED\_RX\_ADD4

LED\_RX\_A4&lt;1&gt;

32C7v

30C7v

26B7&lt;

22A6&lt;

20C3^

27C7&gt;

30C5v

32C5v

22C8&lt;

27B6&gt;

27B3&gt;

26B6&gt;

32C7v

30C5v

28A4&lt;

32C5v

22C8&lt;

27B3&gt;

27C3&gt;

26B6&gt;

27B6&gt;

MII\_CLK&lt;2&gt;

MDC

MDIO

RESET\_B

30C5v

32C5v

22C8&lt;

27B6&gt;

27B3&gt;

30C7v 26B3&gt;

30C5v

28A4&lt;

32C5v

27B3&gt;

22C8&lt;

27B6&gt;

26B3&gt;

MII\_CLK&lt;1&gt;

MDC

MDIO

RESET\_B

IN

B

B

R22

LED\_DPLX\_A0&lt;2&gt;

26C5&lt;

32C5v

V3\_3

RB75

LED\_DPLX\_A0&lt;1&gt;

26C8&lt;

30C5v

5.1K

RB80

5.1K

LED\_COL\_A1&lt;1&gt;

26C8&lt;

30C5v

5.1K

V3\_3

R18

LED\_COL\_A1&lt;2&gt;

26C5&lt;

32C5v

5.1K

RB34

LED\_GDLINK\_A2&lt;2&gt;

26C5&lt;

32C5v

R19

26C8&lt;

LED\_GDLINK\_A2&lt;1&gt;

30C5v

100O100MZH

5.1K

RB33

2

DS02

1

5.1K

RB58

2

DS09

1

L01

V3\_3

330

330

1

2

GREEN

GREEN

A

0.1UF

1

C04

10UF

CB02

10UF

CB01

10UF

CB03

100O100MZH

A

2

1

LB02

2

RB15

LED\_TX\_A3&lt;2&gt;

26C5&lt;

32C5v

R13

LED\_TX\_A3&lt;1&gt;

26C8&lt;

30C5v

PHY

FOR

CHASSIS GND

5.1K

RB14

2

DS01

1

5.1K

RB49

2

DS07

1

CHASSIS

330

330

AMBER

AMBER

R14

LED\_RX\_A4&lt;2&gt;

26C5&lt;

32C5v

R23

LED\_RX\_A4&lt;1&gt;

26C8&lt;

30C5v DATE:

DS33Z11/41/44DK01A0

TITLE:

RB42

5.1K

09/16/2004

330

2

DS05

1

RB71

5.1K

DS13

2

1

330

5/8(BLOCK)

PAGE:

26/71(TOTAL)

STEVE SCULLY

ENGINEER:

RED

RED

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

HIERARCHICAL BLOCK

HIERARCHICAL BLOCK

D

34A7v

25B4&lt;

RXD0&lt;4&gt;

RXD0

TXD0

TXD0&lt;4&gt;

25B1&lt;

34A5v

36A7v

25C4&lt;

RXD0&lt;3&gt;

RXD0

TXD0

TXD0&lt;3&gt;

25C1&lt;

36A5v

D

34A7v

25B4&lt;

RXD1&lt;4&gt;

RXD1

TXD1

TXD1&lt;4&gt;

25B1&lt;

34A5v

36A7v

25C4&lt;

RXD1&lt;3&gt;

RXD1

TXD1

TXD1&lt;3&gt;

25C1&lt;

36A5v

34A7v

25A4&lt;

RXD2&lt;4&gt;

RXD2

TXD2

TXD2&lt;4&gt;

25A1&lt;

34A5v

36A7v

25C4&lt;

RXD2&lt;3&gt;

RXD2

TXD2

TXD2&lt;3&gt;

25C1&lt;

36A5v

34A7v

25A4&lt;

RXD3&lt;4&gt;

RXD3

\_mii\_wan\_dn

TXD3

TXD3&lt;4&gt;

25A1&lt;

34A5v

36A7v

25C4&lt;

RXD3&lt;3&gt;

RXD3

\_mii\_wan\_dn

TXD3

TXD3&lt;3&gt;

25C1&lt;

36A5v

34A7v

25A1&lt;&gt;

RX\_CLK&lt;4&gt;

RX\_CLK

34-35

PAGES

TX\_CLK

TX\_CLK&lt;4&gt;

25A1&lt;&gt;

34A5v

36A7v

25C1&lt;&gt;

RX\_CLK&lt;3&gt;

RX\_CLK

36-37

PAGES

TX\_CLK

TX\_CLK&lt;3&gt;

25C1&lt;&gt;

36A5v

34A7v

25A4&lt;

RX\_CRS&lt;4&gt;

RX\_CRS

TX\_EN

TX\_EN&lt;4&gt;

25A1&lt;

34A5v

36A7v

25C4&lt;

RX\_CRS&lt;3&gt;

RX\_CRS

TX\_EN

TX\_EN&lt;3&gt;

25C1&lt;

36A5v

34A7v

25A4&lt;

RX\_ERR&lt;4&gt;

RX\_ERR

36A7v

25C4&lt;

RX\_ERR&lt;3&gt;

RX\_ERR

34A7v

25A4&lt;

RXDV&lt;4&gt;

RXDV

36A7v

25C4&lt;

RXDV&lt;3&gt;

RXDV

34A7v

25A4&lt;

COL\_DET&lt;4&gt;

COL\_DET

LED\_DPLX\_ADD0

LED\_DPLX\_A0&lt;4&gt;

27B4&lt;

34C5v

36A7v

25C4&lt;

COL\_DET&lt;3&gt;

COL\_DET

LED\_DPLX\_ADD0

LED\_DPLX\_A0&lt;3&gt;

36C5v

27B8&lt;

LED\_COL\_ADD1

LED\_COL\_A1&lt;4&gt;

27B4&lt;

34C5v

LED\_COL\_ADD1

LED\_COL\_A1&lt;3&gt;

36C5v

27B8&lt;

C

LED\_GDLINK\_ADD2

LED\_GDLINK\_A2&lt;4&gt;

27A4&lt;&gt;

34C5v

LED\_GDLINK\_ADD2

LED\_GDLINK\_A2&lt;3&gt;

LED\_TX\_ADD3

LED\_TX\_A3&lt;4&gt;

27A4&lt;&gt;

34C5v

LED\_TX\_ADD3

LED\_TX\_A3&lt;3&gt;

C

MII\_CLK

MDC

MDIO

RESET\_B

LED\_RX\_ADD4

LED\_RX\_A4&lt;4&gt;

27A4&lt;&gt;

34C5v

MII\_CLK

MDC

MDIO

RESET\_B

LED\_RX\_ADD4

LED\_RX\_A4&lt;3&gt;

34C7v

36C7v

26B7&lt;

22A6&lt;

20C3^

27C7&gt;

36C5v

34C5v

22C8&lt;

27B6&gt;

26B6&gt;

26B3&gt;

34C7v

36C5v

28A4&lt;

34C5v

22C8&lt;

26B6&gt;

27B6&gt;

26B3&gt;

26B3&gt;

MII\_CLK&lt;4&gt;

MDC

MDIO

36C5v

34C5v

22C8&lt;

27B3&gt;

26B6&gt;

26B3&gt;

36C7v

36C5v

28A4&lt;

34C5v

26B6&gt;

22C8&lt;

27B3&gt;

26B3&gt;

MII\_CLK&lt;3&gt;

MDC

MDIO

RESET\_B

RESET\_B

B

B

V3\_3

RB82

R30

LED\_DPLX\_A0&lt;4&gt;

27C5&lt;

34C5v

V3\_3

RB51

5.1K

LED\_DPLX\_A0&lt;3&gt;

27C8&lt;

36C5v LED\_COL\_A1&lt;3&gt;

27C8&lt;

36C5v

5.1K

R29

LED\_COL\_A1&lt;4&gt;

27C5&lt;

34C5v

5.1K

5.1K

V3\_3

RB73

LED\_GDLINK\_A2&lt;4&gt;

27C5&lt;

34C5v

5.1K

RB32

27C8&lt;

LED\_GDLINK\_A2&lt;3&gt;

36C5v RB40

2

DS03

1

5.1K

R24

330

1

GREEN

2

330

DS14

GREEN

A

A

R20

LED\_TX\_A3&lt;4&gt;

27C5&lt;

34C5v

5.1K

RB77

5.1K

RB59

2

DS10

1

330

2

DS12

1

AMBER

RB62

LED\_TX\_A3&lt;3&gt;

27C8&lt;

36C5v

330

AMBER

R15

LED\_RX\_A4&lt;4&gt;

27C5&lt;

34C5v RB43

5.1K

RB36

LED\_RX\_A4&lt;3&gt;

27C8&lt;

36C5v DATE:

DS33Z11/41/44DK01A0

TITLE:

RB53

5.1K

2

DS08

1

330

2

DS04

1

RED

09/16/2004

6/8(BLOCK)

PAGE:

27/71(TOTAL)

STEVE SCULLY

ENGINEER:

330

RED

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

V3\_3

V3\_3

1

SW02

1

SW21

100.000MHZ\_3.3V

GND

MODEC0TRI

3

2

2

RB06

1

MODEC0

22A6&gt;

20C2^

HWMODETRI

3

2

2

RB98

1

HWMODE

22A6&gt;

20C2^

Y05

4

2.0K

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

BUFFER

1

SW09

1

SW01

22B8&lt;

SD\_CLKI

R111

4

UXB03

1

R112

30

30

OSC100MHZ

5

OUT

GND

4

DCEDTESTRI

3

2

2

RB56

1

DCEDTES

22A6&lt;

MODEC1TRI

3

2

2

RB02

1

MODEC1

22A6&gt;

20C2^

4

2.0K

4

2.0K

SP3T

SP3T

1

SW05

RMIIMIISTRI

3

2

2

RB39

1

RMIIMIIS

22A6&lt;

4

2.0K

C

1

SP3T

SW19

C

SCANMODTRI

3

2

2

RB76

1

SCANMOD

22A5&lt;

4

2.0K

SP3T

1

SW20

SCANENTRI

3

2

2

RB83

1

SCANEN

22A5&lt;

4

2.0K

SP3T

B

SIGNAME\_TRI DOES NOT

NETLIST)

PCB

ANYWHERE

CONNECT

(HELPS

CKPHATRI

1

SW03

B

3

2

2

RB08

1

CKPHA

22A5&lt;

4

2.0K

SP3T

A

25.000MHZ\_3.3V

A

V3\_3

Y01

OSC

8

VCC

1

1

26B6&gt;

MII\_CLK&lt;1&gt;

R25

26B2&gt;

MII\_CLK&lt;2&gt;

30

R17

5

OUT

GND

4

DATE:

DS33Z11/41/44DK01A0

TITLE:

27B6&gt;

MII\_CLK&lt;3&gt;

30

R100

09/16/2004

27B2&gt;

MII\_CLK&lt;4&gt;

30

RB61

7/8(BLOCK)

PAGE:

28/71(TOTAL)

SCULLY

STEVE

ENGINEER:

22D8&lt;&gt;

REF\_CLK

30

R116

30

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

SW30

FULLDSTRI&lt;1&gt;

3

2

2

RB341

1

FULLDS&lt;1&gt;

25C8&lt;

V3\_3

RED

2

1

DS45

RB344

D

SP3T

FULLDSTRI&lt;3&gt;

3

2

RB353

1

SW31

4

SP3T

2.0K

FULLDS&lt;3&gt;

25C4&lt;

330

TP67

QOVF&lt;1&gt;

25C5&gt;

D

4

2.0K

1

SW38

RED

2

1

DS46

RB350

1

SW37

330

TP68

QOVF&lt;2&gt;

25A5&gt;

AFCSTRI&lt;1&gt;

3

2

2

RB338

1

AFCS&lt;1&gt;

25B5&lt;

4

2.0K

SP3T

AFCSTRI&lt;3&gt;

3

2

RB351

2.0K

AFCS&lt;3&gt;

25C1&lt;

RED

2

1

330

RB354 DS47

TP73

QOVF&lt;3&gt;

25C1&gt;

1

SW29

4

SP3T

H10STRI&lt;1&gt;

3

2

2

RB340

4

2.0K

1

H10S&lt;1&gt;

25C5&lt;

1

SW36

RED

2

1

330

RB360 DS48

TP76

QOVF&lt;4&gt;

25A1&gt;

C

C

SP3T

H10STRI&lt;3&gt;

3

2

RB352

2.0K

H10S&lt;3&gt;

25C1&lt;

4

SP3T

V3\_3

1

SW35

RB348

FULLDSTRI&lt;2&gt;

3

2

2

1

FULLDS&lt;2&gt;

25A8&lt;

4

2.0K

V3\_3

B

SP3T

1

SW40

V3\_3

B

FULLDSTRI&lt;4&gt;

3

2

2

RB363

4

2.0K

1

FULLDS&lt;4&gt;

25A4&lt;

V1\_8ZCHIP

29A4&lt;&gt;

23B4&lt;

23D4&lt;

1

SW34

RB347

1

AFCS&lt;2&gt;

25A5&lt;

AFCSTRI&lt;2&gt;

3

2

2

4

2.0K

SP3T

0.1UF

1

CB368

0.1UF

1

0.1UF

CB380

1

CB261

0.1UF

1

CB366

0.1UF

1

0.1UF

CB231

1

0.1UF

CB367

1

0.1UF

CB248

1

0.1UF

CB228

1

CB254

0.1UF

1

CB15

0.1UF

1

0.1UF

CB279

1

CB411

0.1UF

1

CB439

0.1UF

1

0.1UF

CB241

1

0.1UF

CB358

1

0.1UF

CB185

1

C213

0.1UF

1

C214

SP3T

1

SW41

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

1

SW33

AFCSTRI&lt;4&gt;

3

2

2

RB362

1

AFCS&lt;4&gt;

25A1&lt;

4

2.0K

H10STRI&lt;2&gt;

3

2

2

RB346

1

H10S&lt;2&gt;

25A5&lt;

4

2.0K

SP3T

SP3T

1

SW39

A

H10STRI&lt;4&gt;

3

2

2

RB361

1

H10S&lt;4&gt;

25A1&lt;

U11

A

4

2.0K

SP3T

29B6&lt;

23D4&lt;

23B4&lt;

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

1UF

CB176

1UF

C80

1UF

C51

10UF

CB133

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

1

5

GND

SHDN

4

1UF

CB184

1UF

CB13

1UF

C64

1UF

CB468

1

1

1

2

1

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

2

2

2

1

8/8(BLOCK)

PAGE:

29/71(TOTAL)

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

26C6^

IN

IO

MDC

30

R101

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

CB104

10UF

1

C41

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

U02

C1

42

LED\_TX/PHYAD3

DP83847\_U1

RBIAS

3

RBIAS

R06

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

26C6^

46

RESET\_B

IN

26C7^

C

TP02

18

LED\_SPEED

X2

48

1

AN\_EN

RB37

17

AN\_EN

AN1

RB30

5.1K

16

AN\_1

RESERVED10

44

AN0

RB09

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

JP12

2

JP07

2

JP01

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

J15

J16

AN\_V3\_3

1

L08

V3\_3

31C8&lt;

26D8^

IN

TXD3

2

2

1

1

TX\_CLK

OUT

A

0.1UF

CB73

2

0.1UF

CB81

2

10UF

C25

10UF

1

CB10

10UF

CB87

10UF

CB292

0.1UF

1

CB40

0.1UF

CB72

0.1UF

1

C18

0.1UF

1

0.1UF

CB291

1

0.1UF

CB284

1

CB221

31C8&lt;

26D8^

V3\_3

IN

TXD2

4

4

3

3

31C5&lt;

31C4&lt;

26D8^

OUT

RXDV

2

2

1

1

6

6

5

5

31B5&lt;

26C6^

31C8&lt;

26D8^

IN

TXD1

8

8

7

7

26C6^

26C6^

OUT

RX\_CRS

2

2

2

2

31C8&lt;

26D8^

IN

TXD0

10

10

9

9

TX\_EN

IN

31C6&lt;&gt;

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

26D6^

31B8&lt;

V3\_3

26D6^

31B8&lt;

8

6

5

5

8

7

7

26C8^

31C8&lt;

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

26D6^

31B8&lt;

26D6^

31B8&lt;

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

30/71(TOTAL)

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

U02

J01

CB32

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

CB60

30

P1

1

RD\_P

RB22

RB105

4

UX05

1

2

10K

RB139

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

RB23

J2

54.9

.1UF

RX\_CLK

RB84

32

RX\_CLK

TXD&lt;0&gt;

38

TXD0

P3

3

TD\_P

RB24

V3\_3

TX\_CLK

DNP

RB113

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

RB119

4

UX10

1

COL\_DET

30

RB135

43

COL

RB127

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

RB25

49.9

30

30

RXD&lt;0&gt;

30

RB100

RXD0

J6

.1UF

CB299

RXD&lt;1&gt;

29

30

RB112

RXD1

J4,5

RXD&lt;2&gt;

27

30

RB125

RXD2

J7,8

P8

8

RXD&lt;3&gt;

26

30

R106

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

31/71(TOTAL)

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

26C3^

IN

IO

MDC

30

R117

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

CB103

10UF

1

C37

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

U05

C1

42

LED\_TX/PHYAD3

DP83847\_U1

RBIAS

3

RBIAS

R05

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

26C3^

46

RESET\_B

IN

26C3^

C

TP04

18

LED\_SPEED

X2

48

1

AN\_EN

RB38

17

AN\_EN

AN1

RB31

5.1K

16

AN\_1

RESERVED10

44

AN0

RB16

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

JP11

2

JP06

2

JP03

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

J19

J20

AN\_V3\_3

1

L06

V3\_3

33C8&lt;

26D4^

IN

TXD3

2

2

1

1

TX\_CLK

OUT

A

0.1UF

CB57

2

0.1UF

CB46

2

10UF

C13

10UF

1

CB496

10UF

CB125

10UF

CB174

0.1UF

1

CB476

0.1UF

CB473

0.1UF

1

C209

0.1UF

1

0.1UF

CB88

1

0.1UF

CB91

1

CB209

33C8&lt;

26D4^

V3\_3

IN

TXD2

4

4

3

3

33C5&lt;

33C4&lt;

26D4^

OUT

RXDV

2

2

1

1

6

6

5

5

33B5&lt;

26C2^

33C8&lt;

26D4^

IN

TXD1

8

8

7

7

26C2^

26C2^

OUT

RX\_CRS

2

2

2

2

33C8&lt;

26D4^

IN

TXD0

10

10

9

9

TX\_EN

IN

33C6&lt;&gt;

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

26D2^

33B8&lt;

V3\_3

26D2^

33B8&lt;

8

6

5

5

8

7

7

26C4^

33C8&lt;

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

26D2^

33B8&lt;

26D2^

33B8&lt;

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

32/71(TOTAL)

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

U05

J05

CB25

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

C05

30

P1

1

RD\_P

RB26

RB103

4

UX07

1

2

10K

RB132

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

RB27

J2

54.9

.1UF

RX\_CLK

RB85

32

RX\_CLK

TXD&lt;0&gt;

38

TXD0

P3

3

TD\_P

RB28

V3\_3

TX\_CLK

DNP

RB122

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

R28

4

UX02

1

COL\_DET

30

R21

43

COL

RB131

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

RB29

49.9

30

30

RXD&lt;0&gt;

30

RB97

RXD0

J6

.1UF

CB282

RXD&lt;1&gt;

29

30

RB108

RXD1

J4,5

RXD&lt;2&gt;

27

30

RB116

RXD2

J7,8

P8

8

RXD&lt;3&gt;

26

30

R27

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

33/71(TOTAL)

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

27C3^

IN

IO

MDC

30

R102

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

CB101

10UF

1

C35

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

U06

C1

42

LED\_TX/PHYAD3

DP83847\_U1

RBIAS

3

RBIAS

R09

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

27C3^

46

RESET\_B

IN

27C3^

C

TP01

18

LED\_SPEED

X2

48

1

AN\_EN

RB41

17

AN\_EN

AN1

RB35

5.1K

16

AN\_1

RESERVED10

44

AN0

RB17

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

JP13

2

JP08

2

JP04

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

J21

J22

AN\_V3\_3

1

L05

V3\_3

35C8&lt;

27D4^

IN

TXD3

2

2

1

1

TX\_CLK

OUT

A

0.1UF

CB51

2

0.1UF

CB38

2

10UF

C11

10UF

1

CB128

10UF

CB64

10UF

CB357

0.1UF

1

CB283

0.1UF

CB196

0.1UF

1

CB474

0.1UF

1

0.1UF

CB74

1

0.1UF

CB71

1

CB167

35C8&lt;

27D4^

V3\_3

IN

TXD2

4

4

3

3

35C5&lt;

35C4&lt;

27D4^

OUT

RXDV

2

2

1

1

6

6

5

5

35B5&lt;

27C2^

35C8&lt;

27D4^

IN

TXD1

8

8

7

7

27C2^

27C2^

OUT

RX\_CRS

2

2

2

2

35C8&lt;

27D4^

IN

TXD0

10

10

9

9

TX\_EN

IN

35C6&lt;&gt;

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

27D2^

35B8&lt;

V3\_3

27D2^

35B8&lt;

8

6

5

5

8

7

7

27C4^

35C8&lt;

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

27D2^

35B8&lt;

27D2^

35B8&lt;

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

34/71(TOTAL)

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

U06

J03

CB29

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

CB34

30

P1

1

RD\_P

RB19

RB104

4

UX08

1

2

10K

RB140

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

RB18

J2

54.9

.1UF

RX\_CLK

RB86

32

RX\_CLK

TXD&lt;0&gt;

38

TXD0

P3

3

TD\_P

RB20

V3\_3

TX\_CLK

DNP

RB120

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

RB115

4

UX09

1

COL\_DET

30

RB133

43

COL

RB123

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

RB21

49.9

30

30

RXD&lt;0&gt;

30

RB128

RXD0

J6

.1UF

C106

RXD&lt;1&gt;

29

30

R125

RXD1

J4,5

RXD&lt;2&gt;

27

30

RB137

RXD2

J7,8

P8

8

RXD&lt;3&gt;

26

30

RB138

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

35/71(TOTAL)

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

27C6^

IN

IO

MDC

30

R26

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

C28

10UF

1

C34

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

U03

C1

42

LED\_TX/PHYAD3

DP83847\_U1

RBIAS

3

RBIAS

R11

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

27C6^

46

RESET\_B

IN

27C7^

C

TP05

18

LED\_SPEED

X2

48

1

AN\_EN

RB01

17

AN\_EN

AN1

RB03

5.1K

16

AN\_1

RESERVED10

44

AN0

RB50

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

JP10

2

JP05

2

JP02

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

J17

J18

AN\_V3\_3

1

L07

V3\_3

37C8&lt;

27D8^

IN

TXD3

2

2

1

1

TX\_CLK

OUT

A

0.1UF

CB77

2

0.1UF

CB83

2

10UF

C31

10UF

1

CB164

10UF

CB470

10UF

CB20

0.1UF

1

CB76

0.1UF

C29

0.1UF

1

C24

0.1UF

1

0.1UF

C17

1

0.1UF

CB326

1

CB325

37C8&lt;

27D8^

V3\_3

IN

TXD2

4

4

3

3

37C5&lt;

37C4&lt;

27D8^

OUT

RXDV

2

2

1

1

6

6

5

5

37B5&lt;

27C6^

37C8&lt;

27D8^

IN

TXD1

8

8

7

7

27C6^

27C6^

OUT

RX\_CRS

2

2

2

2

37C8&lt;

27D8^

IN

TXD0

10

10

9

9

TX\_EN

IN

37C6&lt;&gt;

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

27D6^

37B8&lt;

V3\_3

27D6^

37B8&lt;

8

6

5

5

8

7

7

27C8^

37C8&lt;

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

27D6^

37B8&lt;

27D6^

37B8&lt;

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

36/71(TOTAL)

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

U03

J02

C09

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

CB33

30

P1

1

RD\_P

RB10

RB99

4

UX06

1

2

10K

RB141

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

RB11

J2

54.9

.1UF

RX\_CLK

RB81

32

RX\_CLK

TXD&lt;0&gt;

38

TXD0

P3

3

TD\_P

RB12

V3\_3

TX\_CLK

DNP

RB111

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

RB117

4

UX01

1

COL\_DET

30

RB136

43

COL

RB124

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

RB13

49.9

30

30

RXD&lt;0&gt;

30

RB96

RXD0

J6

.1UF

C112

RXD&lt;1&gt;

29

30

RB107

RXD1

J4,5

RXD&lt;2&gt;

27

30

RB114

RXD2

J7,8

P8

8

RXD&lt;3&gt;

26

30

RB130

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

37/71(TOTAL)

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

1

D

.1UF

C87

2

0.0

VDDSYN

RB159

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

U19

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

U19

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

UB01

I64

V3\_3

4

MAX811\_U

VCC

MR*

3

SW07

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

38/71(TOTAL)

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

PARENT BLOCK: \_z44top\_dn\

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

DS17

1.0K

RB126

1

I69

1.0K

RB143

1.0K

R251

1.0K

R250

SW22

V5\_0

1.0K

2

1

RB147

2

1.0K

1

1.0K

RB150

R244

2

2

1

1.0K

2

RB157

1

V3\_3

R93

1

PD&lt;26&gt;

D

2

D

V3\_3

AMBER

2

1

RB118

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

R153

2

10K

RB238

1

1

1

10K

RB300

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

RB301

2

1

PD&lt;21&gt;

DRIVE

FULL

.1UF

CB149

12

11

5

INT3

1

10

7

6

INT4

10K

USERFPGA2

2

10K

RB263

1

9

8

INT5

2

10K

R92

1

PD&lt;23&gt;

PLL

W/

XTAL

PD&lt;22&gt;

10K

R127

INTERNAL

2

1

PD&lt;28&gt;

ENABLE

FLASH

C

10K

C

RB264

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

RB237

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

I54

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

U14

NA

16

22

30

24

29

1

32

UB05

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

28

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

31

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

39/71(TOTAL)

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

R118

2

10K

R108

D

2

1

NA

I1

BUT DO NOT POPULATE

CON14P

PLACE PADS FOR CAP

1.0M

R90

1

CON14P

J41

OSC\_MCU

I47

X02

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

R91

V5\_0

C

1

I11

1

U09

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

2

2

2

1

2

I31

MAX3233E

MAX3233E

NA

V3\_3

UB07

3

LBO*

GND

6

C36

330

R78

1UF

C39

10UF

CB114

10UF

C47

1UF

C43

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

CB148

2

2

C104

68UF

22.0UH

2

I13

15

L09

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

R107

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

CB199

1UF

CB484

1UF

CB466

1UF

CB262

1UF

CB35

1UF

C84

1UF

C83

1UF

C91

1UF

C118

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

10K

RB200

10K

RB286

1

2

I35

J36

10K

RB287

2

A

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

40/71(TOTAL)

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

J25

RB193

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

DS27

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

R194

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

DS37

RED

330

G16

IO3\_2\D3

IO1\_0

L12

4

DS40

RED

R195

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

U16

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

RB146

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

DS19

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

41/71(TOTAL)

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

J26

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

U16

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

42/71(TOTAL)

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

J27

2

2

2

2

CONN\_50P\_T1E1

10K

R247

10K

R245

10K

R246

10K

R249

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

21C7^

43C6&lt;&gt;

42A6&lt;&gt;

C

21C7^

21C7^

43C6&lt;&gt;

39C3&lt;&gt;

39C3&lt;&gt;

38A7&lt;&gt;

INT5

INT4

43C6&lt;&gt;

39D3&lt;&gt;

38A7&lt;&gt;

21C7^

43C6&lt;&gt;

38A7&lt;&gt;

INT3

IN

INT2

IN

IN

IN

INT5

44B1&lt;

43A7&lt;

21C5^

40C3&lt;&gt;

38B5&lt;&gt;

38A4&gt;

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

21B7^

21B7^

42C3&lt;&gt;

42C3&lt;&gt;

BTS\_DUT

BIS0\_DUT

21B7^

42C3&lt;&gt;

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

21B6^

21B6^

44A6&lt;&gt;

21B6^

21B6^

44A6&lt;&gt;

44A6&lt;&gt;

OUT

TDO\_NU

TCK\_NU

44A6&lt;&gt;

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

21C5^

43B6&lt;&gt;

21C5^

43B6&lt;&gt;

42A4&lt;&gt;

21C5^

43B6&lt;&gt;

42A4&lt;&gt;

42B3&lt;&gt;

OUT

21C5^

43B6&lt;&gt;

42B3&lt;&gt;

OUT

21C5^

43B6&lt;&gt;

B

21B5^

42A4&lt;&gt;

21B5^

42B3&lt;&gt;

OUT

OUT

42B3&lt;&gt;

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

21B5^

43A6&lt;&gt;

21B7^

43A6&lt;&gt;

42C3&lt;&gt;

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

43C6

43B7

42A6

42C3&lt;&gt;

OUT

21B7^

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

21B5^

A\_DUT&lt;11..0&gt;

42B7

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

43/71(TOTAL)

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

UB11

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

CB489

1UF

CB187

1UF

CB171

10UF

CB157

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

U12

C

XI\_TMS

D3

TMS

1UF

CB316

1UF

CB457

1UF

CB295

1UF

CB100

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

U16

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

R238

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

RB364

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

CB78

2

.1UF

CB373

1

.1UF

CB409

2

.1UF

CB378

2

.1UF

CB353

1

.1UF

CB375

2

.1UF

CB352

2

.1UF

CB372

1

1UF

CB195

1UF

CB270

VCCO15

VCCO16

H5

H6

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

R89

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

J43

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

44/71(TOTAL)

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

1

2

3

4

5

6

7

8

J39

INTERFACE BLOCK

DS3184 WAN

63B6&lt;&gt;

63B7&lt;&gt;

62B6&lt;&gt;

TCK\_NU

2

1

62B7&lt;&gt;

TMS\_NU

4

4

3

3

JTCLK

RB250

V3\_3

56C7&lt;

10K

63B7&lt;&gt;

62B7&lt;&gt;

TDI\_NU

6

6

5

5

JTDI

56C7&lt;

10K

JTMS

RB309

61D2&lt;

60D2&lt;

56C7&lt;

61C2&lt;

60C2&lt;

D

V3\_3

63B6&lt;&gt;

62B6&lt;&gt;

TDO\_NU

8

8

7

7

JTDOCPLD

61C2&lt;

D

10

10

9

9

JTRST

RB308

56C7&lt;

10K

N15

P14

P13

P15

R14

R13

R15

N6

W1

N7

P6

N8

P7

R6

P8

R7

A2

R8

F6

F8

F7

G6

G8

G7

H6

H8

H7

CONN\_10P

63A7

63A6

62A7

62A6

IN

ADDR&lt;10..0&gt;

VDD27

VDD26

VDD25

VDD24

VDD23

VDD22

VDD21

VDD20

VDD19

VDD18

VDD17

VDD16

VDD15

VDD14

VDD13

VDD12

VDD11

VDD10

VDD9

VDD8

VDD7

VDD6

VDD5

VDD4

VDD3

VDD2

VDD1

1

0

H1

2

3

H2

E1

A&lt;0&gt;/BSWAP

G2

A&lt;1&gt;

JTCLK

A&lt;2&gt;

4

5

E2

6

7

V3\_3

9

8

H3

D2

A&lt;3&gt;

JTMS

F3

A&lt;4&gt;

JTDI

JTDO

JTRST*

E4

F4

JTCLK

J3

G4

JTDI

JTDO84

JTMS

56D8&lt;&gt;

56D8&lt;&gt;

60D2&lt;

61D2&lt;

60C2&lt;

61C2&lt;

JTRST

56D8&lt;&gt;

60C2&lt;

56D8&lt;&gt;

G3

E3

A&lt;5&gt;

A&lt;6&gt;

C

0.0

R142

10

N2

D3

A&lt;7&gt;

TSCLK

C3

A&lt;8&gt;

TPRTY

J20

A&lt;9&gt;

TEN

A17

CLKB

V3\_3

56B8&lt;&gt;

56B4&lt;

60B1&lt;

A&lt;10&gt;

TSOX

A19

ALE

TEOP

W16

TSX

V15

63A5

63A3

62A5

62A3

IO

DAT&lt;7..0&gt;

1

0

2

P1

U1

P2

D&lt;0&gt;

TERR

Y16

Y17

C

V3\_3

6

4

5

3

U2

T2

D&lt;1&gt;

TMOD&lt;0&gt;

W2

D&lt;2&gt;

D&lt;3&gt;

R151

RB222

7

P3

N3

D&lt;4&gt;

T3

D&lt;5&gt;

UB08

TMOD&lt;1&gt;

B17

RADR&lt;0&gt;

B18

D&lt;6&gt;

D&lt;7&gt;

RB186

R146

U3

D&lt;8&gt;

DS3184

RADR&lt;1&gt;

R20

RADR&lt;3&gt;

RADR&lt;2&gt;

R19

R18

RADR&lt;4&gt;

T20

T19

V3

RES

10K

SHOWN FOR

VALUE NOT

R135

RB229

R4

N4

D&lt;9&gt;

D&lt;10&gt;

CS*

R121

RB206

J5

T4

P4

D&lt;11&gt;

D&lt;14&gt;

D&lt;12&gt;

D&lt;13&gt;

CONTROL

RD*

L3

MODE

WR*

K3

K4

WIDTH

D&lt;15&gt;

TEST*

L5

K17

D20

TDXA&lt;1&gt;/TPXA

HIZ*

E19

TDXA&lt;2&gt;

RST*

M3

R3

2

B16

10K

0.0

0.0

0.0

R144

CS

B1

RD

WR

IN

62A5&lt;

63A5&lt;

IN

62A3&gt;

63A3&gt;

IN

63A4&lt;&gt;

62A4&lt;&gt;

V3\_3

RB227

R156

RB283

V3\_3

GND

RESET\_B

B

K16

D19

TDXA&lt;3&gt;

CLKA

TDXA&lt;4&gt;

TSPA

CLKB

K1

CLKC

L1

L2

CLKA

CLKB

60B1&lt;

IN

63D6&lt;&gt;

62D6&lt;&gt;

56B4&lt;

56C7&lt;

60B1&lt;

B

K19

K20

RPRTY*

F19

RDXA1/RPXA

RSOX

V3\_3

E20

F18

RDXA&lt;2&gt;

REOP

L17

RDXA&lt;3&gt;

RVAL

L16

RDXA&lt;4&gt;

RERR

K18

RMOD&lt;1&gt;

60B1&lt;

56C7&lt;

56B8&lt;&gt;

CLKB

G18

M20

REN*

RSCLK

RDY*

INT*

K2

RMOD&lt;0&gt;

L18

L19

L4

T3\_INT

OUT

56A6&lt;&gt;

62D5&gt;

63D5&gt;

J19

VSS35

VSS34

VSS33

VSS32

VSS31

VSS30

VSS29

VSS28

VSS27

VSS26

VSS25

VSS24

VSS23

VSS22

VSS21

VSS20

VSS19

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

M13

N12

N11

Y1

P10

P9

P11

R9

P12

R10

R12

R11

L8

L10

L9

M8

M10

M9

N9

A1

N10

J6

K6

J7

K7

L7

L6

M6

J8

M7

J9

K8

J10

K9

K10

A

A

DS41

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

63D5&gt;

62D5&gt;

56B8&gt;

T3\_INT

TP66

NC7SZ86\_U

UX12

RED

RB331

V3\_3

4

1

330

1/8(BLOCK)

PAGE:

56/71(TOTAL)

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

PARENT BLOCK: \_wan4z44\_dn\

BLOCK NAME: \_quadte3wan\_dn.

1

2

3

4

5

6

7

8

D

UB08

UB08

D

DS3184

PORT3=PINA12

DS3184

PORT1=PINB8

C11

C14

TLCLK

59C8&lt;

59C4&lt;

59A8&lt;

59A4&lt;

57C5&gt;

57A5&gt;

59C8&lt;

59C4&lt;

59A8&lt;

59A4&lt;

57C5&gt;

57A5&gt;

57A2&gt;

57A2&gt;

TE3\_TXN&lt;4..1&gt;

TE3\_TXP&lt;4..1&gt;

3

E12

3

E11

B6

A6

B14

TPOS

PORT

RLCLK

TXP

TNEG

RPOS

TXN

TOHCLK

RXP

RXN

RNEG

A15

B5

A5

3

B15

3

TE3\_RXN&lt;4..1&gt;

TE3\_RXP&lt;4..1&gt;

59B8&lt;

57A4&lt;

57C8&lt;

59D8&lt;

59D4&lt;

57A8&lt;

59B4&lt;

TE3\_TXN&lt;4..1&gt;

TE3\_TXP&lt;4..1&gt;

1

C7

1

C8

J1

J2

D4

C4

A12

A8

TLCLK

PORT

RLCLK

TPOS

TNEG

RPOS

RNEG

TXP

TXN

RXP

RXN

B3

A3

F2

F1

1

1

TE3\_RXP&lt;4..1&gt;

TE3\_RXN&lt;4..1&gt;

57A4&lt;

59B8&lt;

57A8&lt;

59D4&lt;

57C5&lt;

59D8&lt;

59B4&lt;

57A4&lt;

B8

E10

TOHSOF

E13

ROH

61B4&gt;

60B4&gt;

57C5&gt;

57A5&gt;

61B3&gt;

61A3&gt;

60B3&gt;

60A3&gt;

57C5&gt;

57A5&gt;

57A1&gt;

57A1&gt;

OUT

OUT

TE3\_TCLK&lt;4..1&gt;

TE3\_TGAPCLK&lt;4..1&gt;

3

3

C

61C4&gt;

61B4&gt;

60B4&gt;

57C5&gt;

57A5&gt;

61B4&gt;

60B4&gt;

57C5&gt;

57A5&gt;

57A1&gt;

61B3&gt;

60B3&gt;

57C5&gt;

57A5&gt;

57A1&gt;

57A1&gt;

OUT

OUT

TE3\_RSER&lt;4..1&gt;

OUT

TE3\_RCLK&lt;4..1&gt;

TE3\_RGAPCLK&lt;4..1&gt;

3

3

3

B12

B11

A11

C10

C12

D14

ROHCLK

A13

ROHSOF

TOH

TOHEN

E14

D11

D5

D10

TOHCLK

TOHSOF

B10

TCLKO

TSOFO

TCLKI

A14

TPDENO

TSOFI

TPDAT

RSER

TPDENI

RCLKO

RPDAT

RSOFO

TSER

RPDENI

B13

D13

A10

C13

3

TE3\_TSER&lt;4..1&gt;

IN

61B3&gt;

60B3&gt;

57C2&gt;

57A5&gt;

57A1&gt;

OUT

OUT

TE3\_RSER&lt;4..1&gt;

TE3\_RCLK&lt;4..1&gt;

TE3\_RGAPCLK&lt;4..1&gt;

1

1

1

E8

D12

61B4&gt;

60B3&gt;

60B4&gt;

57C2&gt;

57A5&gt;

60A3&gt;

57C2&gt;

57A5&gt;

61B3&gt;

57A1&gt;

61A3&gt;

57A1&gt;

OUT

TE3\_TCLK&lt;4..1&gt;

TE3\_TGAPCLK&lt;4..1&gt;

1

1

B9

A7

B2

ROH

D7

ROHCLK

ROHSOF

TOH

TOHEN

E5

D8

59D8&lt;

59D4&lt;

59B8&lt;

59B4&lt;

A9

TCLKO

TSOFO

TCLKI

B4

TPDENO

E9

D9

TPDAT

TSOFI

RSER

TPDENI

RCLKO

RPDAT

RSOFO

TSER

RPDENI

D6

C5

C9

E6

1

TE3\_TSER&lt;4..1&gt;

IN

60B4&gt;

57C5&lt;

61B4&gt;

57A4&lt;

57A8&lt;

C

B7

OUT

OUT

57C5&lt;

57A8&lt;

B

B

UB08

UB08

DS3184

PORT2=PINW8

DS3184

PORT4=PINY12

V4

Y8

TLCLK

59C4&lt;

59A8&lt;

59A4&lt;

57C5&gt;

59A8&lt;

59A4&lt;

57C5&gt;

59C8&lt;

57C2&gt;

57C2&gt;

57A5&gt;

59C8&lt;

57A5&gt;

TE3\_TXP&lt;4..1&gt;

TE3\_TXN&lt;4..1&gt;

2

2

V7

M1

U4

TPOS

PORT

RLCLK

M2

TNEG

V8

TXP

RPOS

TXN

TOHCLK

RXP

RXN

RNEG

W3

R1

R2

2

Y3

2

TE3\_RXN&lt;4..1&gt;

TE3\_RXP&lt;4..1&gt;

59A4&lt;

59A4&lt;

57C5&gt;

59C8&lt;

57C2&gt;

59C8&lt;

57C5&gt;

57C2&gt;

59C4&lt;

59C4&lt;

57A2&gt;

59A8&lt;

57A2&gt;

59A8&lt;

TE3\_TXN&lt;4..1&gt;

TE3\_TXP&lt;4..1&gt;

4

T12

4

T11

W6

Y6

W14

V11

V14

TLCLK

TPOS

PORT

RLCLK

TNEG

TXP

RPOS

TXN

TOHCLK

RXP

RXN

RNEG

Y15

W5

Y5

4

W15

4

TE3\_RXN&lt;4..1&gt;

TE3\_RXP&lt;4..1&gt;

57A4&lt;

59B8&lt;

59B8&lt;

57A4&lt;

57C5&lt;

59D4&lt;

57C8&lt;

59D8&lt;

59B4&lt;

57C5&lt;

59D4&lt;

57C8&lt;

59D8&lt;

59B4&lt;

Y12

U10

TOHSOF

U5

ROH

61B4&gt;

60B4&gt;

57C5&gt;

57C2&gt;

60B3&gt;

60A3&gt;

57C5&gt;

57C2&gt;

61B3&gt;

57A5&gt;

57A5&gt;

61A3&gt;

OUT

OUT

TE3\_TCLK&lt;4..1&gt;

TE3\_TGAPCLK&lt;4..1&gt;

2

A

60B4&gt;

61B4&gt;

57C5&gt;

57C2&gt;

60B4&gt;

57C5&gt;

57A5&gt;

57C2&gt;

61B3&gt;

60B3&gt;

57C5&gt;

57C2&gt;

57A5&gt;

61B4&gt;

61C4&gt;

57A5&gt;

OUT

OUT

TE3\_RSER&lt;4..1&gt;

OUT

TE3\_RCLK&lt;4..1&gt;

TE3\_RGAPCLK&lt;4..1&gt;

2

2

2

T8

W9

2

Y9

Y2

ROHCLK

TOH

TOHEN

T5

U8

T13

T10

TOHSOF

ROH

61B4&gt;

60B4&gt;

57C5&gt;

57C2&gt;

U7

Y7

ROHSOF

TCLKO

TSOFO

TCLKI

W4

TPDENO

T9

U9

TPDAT

TSOFI

RSER

TPDENI

RCLKO

RPDAT

RSOFO

TSER

RPDENI

U6

V5

W7

61B3&gt;

61A3&gt;

60B3&gt;

60A3&gt;

57C5&gt;

57C2&gt;

57A1&gt;

57A1&gt;

OUT

OUT

TE3\_TCLK&lt;4..1&gt;

TE3\_TGAPCLK&lt;4..1&gt;

4

V9

T6

2

TE3\_TSER&lt;4..1&gt;

IN

61C4&gt;

60B4&gt;

57C2&gt;

61B4&gt;

57C5&gt;

61B3&gt;

60B3&gt;

57C5&gt;

57C2&gt;

57A1&gt;

57A1&gt;

OUT

OUT

TE3\_RSER&lt;4..1&gt;

OUT

TE3\_RCLK&lt;4..1&gt;

TE3\_RGAPCLK&lt;4..1&gt;

4

4

4

W12

W11

Y11

V10

4

W10

U14

ROHCLK

Y13

V12

ROHSOF

TOH

TOHEN

T14

U11

TCLKO

TSOFO

TCLKI

Y14

TPDENO

TSOFI

TPDAT

RSER

TPDENI

RCLKO

RPDAT

RSOFO

TSER

RPDENI

W13

U13

Y10

V13

4

TE3\_TSER&lt;4..1&gt;

IN

60B4&gt;

57C5&lt;

61B4&gt;

57C8&lt;

57A4&lt;

A

U12

W8

59C4&lt;

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

2/8(BLOCK)

PAGE:

57/71(TOTAL)

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

K5

V6

N5

C6

G1

T7

N1

E7

J4

Y4

T1

A4

D1

B20

F14

F13

F15

G14

G13

G15

H14

H13

H15

N13

Y19

N14

AVDDC

AVDDJ4

AVDDJ3

AVDDJ2

AVDDJ1

AVDDT4

AVDDT3

AVDDT2

AVDDT1

AVDDR4

AVDDR3

AVDDR2

AVDDR1

VDD40

VDD39

VDD38

VDD37

VDD36

VDD35

VDD34

VDD33

VDD32

VDD31

VDD30

VDD29

VDD28

L20

M19

M18

RDATA&lt;0&gt;

RDATA&lt;1&gt;

N20

RDATA&lt;2&gt;

C

P20

N19

RDATA&lt;3&gt;

TADR&lt;0&gt;

N18

RDATA&lt;4&gt;

TADR&lt;1&gt;

TADR&lt;2&gt;

A16

RDATA&lt;5&gt;

TADR&lt;3&gt;

E15

P19

RDATA&lt;6&gt;

TADR&lt;4&gt;

D15

C15

C

P18

RDATA&lt;7&gt;

P17

RDATA&lt;8&gt;

N17

RDATA&lt;9&gt;

TDATA&lt;0&gt;

M17

RDATA&lt;10&gt;

TDATA&lt;1&gt;

R16

RDATA&lt;11&gt;

TDATA&lt;2&gt;

P16

RDATA&lt;12&gt;

TDATA&lt;3&gt;

TDATA&lt;4&gt;

U19

V19

N16

M16

H20

RDATA&lt;13&gt;

RDATA&lt;14&gt;

RDATA&lt;15&gt;

UB08

TDATA&lt;5&gt;

TDATA&lt;6&gt;

TDATA&lt;7&gt;

TDATA&lt;8&gt;

U18

TDATA&lt;9&gt;

B19

C20

G20

H19

RDATA&lt;16&gt;

G19

E18

RDATA&lt;17&gt;

RDATA&lt;18&gt;

RDATA&lt;19&gt;

DS3184

TDATA&lt;10&gt;

TDATA&lt;11&gt;

TDATA&lt;12&gt;

W19

V17

W18

J18

RDATA&lt;20&gt;

H18

RDATA&lt;21&gt;

TDATA&lt;13&gt;

TDATA&lt;14&gt;

W17

Y18

J17

H17

G17

RDATA&lt;22&gt;

RDATA&lt;23&gt;

RDATA&lt;24&gt;

I/O PORT

DATA &amp;

TDATA&lt;15&gt;

TDATA&lt;16&gt;

TDATA&lt;17&gt;

F17

RDATA&lt;25&gt;

B

H16

E17

J16

RDATA&lt;26&gt;

RDATA&lt;27&gt;

TDATA&lt;18&gt;

RDATA&lt;28&gt;

TDATA&lt;19&gt;

TDATA&lt;20&gt;

C17

TDATA&lt;21&gt;

C18

C16

G16

F16

RDATA&lt;29&gt;

RDATA&lt;31&gt;

RDATA&lt;30&gt;

TDATA&lt;22&gt;

TDATA&lt;23&gt;

RED

2

1

RB153 DS21

1

TP37

GPIO1

58B3&lt;&gt;

58B2&lt;&gt;

58B2&lt;&gt;

58A2&lt;&gt;

58A2&lt;&gt;

GPIO3

GPIO2

GPIO4

C2

GPIO1

R5

G5

F5

GPIO&lt;1&gt;

TDATA&lt;24&gt;

GPIO&lt;2&gt;

TDATA&lt;25&gt;

P5

C1

GPIO&lt;3&gt;

TDATA&lt;26&gt;

GPIO&lt;4&gt;

TDATA&lt;27&gt;

GPIO&lt;5&gt;

TDATA&lt;28&gt;

V1

GPIO&lt;6&gt;

TDATA&lt;29&gt;

V2

GPIO&lt;7&gt;

TDATA&lt;30&gt;

TDATA&lt;31&gt;

U15

T15

GPIO&lt;8&gt;

U16

U17

D18

D17

C19

F20

E16

D16

B

T17

T16

R17

V16

W20

V18

V20

T18

U20

A18

330

RED

2

1

RB155 DS22

1

TP38

GPIO2

58B3&lt;&gt;

330

RED

2

1

RB154 DS23

1

TP39

GPIO3

58B3&lt;&gt;

NC&lt;3&gt;

NC&lt;2&gt;

H4

NC&lt;1&gt;

NC&lt;0&gt;

VSS68

VSS67

VSS66

VSS65

VSS64

VSS63

VSS62

VSS61

VSS60

VSS59

VSS58

VSS57

VSS56

VSS55

VSS54

VSS53

VSS52

VSS51

VSS50

VSS49

VSS48

VSS47

VSS46

VSS45

VSS44

VSS43

VSS42

VSS41

VSS40

VSS39

VSS38

VSS37

VSS36

330

RED

2

1

RB152 DS24

1

TP40

GPIO4

58B3&lt;&gt;

H5

0.0

2

0.0

2

M5

2

0.0

M4

2

0.0

H9

A20

H10

F9

F11

F10

F12

G10

G9

G11

H11

G12

H12

J12

J11

J13

K12

K11

K13

J14

Y20

J15

K15

K14

L14

M14

L15

M15

L12

L11

L13

M12

M11

330

A

PINS UNUSED????

NC

R132

1

R137

1

RB194

RB208

1

1

A

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

3/8(BLOCK)

PAGE:

58/71(TOTAL)

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

VERT

OHM

75

VERT

OHM

75

CONN\_BNC\_5P

CONN\_BNC\_5P

TB01

5

28

2

1

TE3\_RXP&lt;4..1&gt;

J49

1

3

TB01

30

2

3

TE3\_RXP&lt;4..1&gt;

57A4&lt;

57A8&lt;

57C5&lt;

57C8&lt;

59B4&lt;

59B8&lt;

59D8&lt;

J50

1

RREF1

332

R211

D

RREF3

332

R210

5

3

4

2

5

3

4

2

D

2

51

RB355

4

2:1

29

1

3

TE3\_RXN&lt;4..1&gt;

57A4&lt;

57A8&lt;

57C5&lt;

57C8&lt;

59B4&lt;

59B8&lt;

59D8&lt;

2

51

RB356

6

2:1

27

1

1

TE3\_RXN&lt;4..1&gt;

1

1

RA

OHM

75

RA

OHM

75

CONN\_BNC\_5P

CONN\_BNC\_5P

1

TREF3

1

TB01

32

2

332

RB306

3

TE3\_TXP&lt;4..1&gt;

57A2&gt;

57A5&gt;

57C2&gt;

57C5&gt;

59A4&lt;

59A8&lt;

59C8&lt;

TREF1

J57

1

7

TB01

26

2

1

TE3\_TXP&lt;4..1&gt;

59A4&lt;

57C2&gt;

57A5&gt;

57A2&gt;

J56

59C4&lt;

C

5

3

4

2

5

3

4

2

332

R198

59A8&lt;

57C5&gt;

59C4&lt;

C

31

1

3

TE3\_TXN&lt;4..1&gt;

57A2&gt;

57A5&gt;

57C2&gt;

57C5&gt;

59A4&lt;

59A8&lt;

59C8&lt;

2

51

RB371

8

2:1

25

1

1

TE3\_TXN&lt;4..1&gt;

59A4&lt;

57C2&gt;

57A5&gt;

57A2&gt;

2

51

RB370

2

2:1

59A8&lt;

57C5&gt;

1

1

VERT

OHM

75

VERT

OHM

75

CONN\_BNC\_5P

CONN\_BNC\_5P

TB01

11

22

2

2

TE3\_RXP&lt;4..1&gt;

59B4&lt;

59D8&lt;

57C5&lt;

57A4&lt;

57A8&lt;

B

B

J52

1

13

TB01

20

2

4

TE3\_RXP&lt;4..1&gt;

57A4&lt;

57A8&lt;

57C5&lt;

57C8&lt;

59B8&lt;

59D4&lt;

59D8&lt;

J51

1

RREF2

332

R212

59D4&lt;

57C8&lt;

59D8&lt;

RREF4

332

R213

5

3

4

2

5

3

4

2

21

1

2

TE3\_RXN&lt;4..1&gt;

59B4&lt;

57C5&lt;

57A8&lt;

57A4&lt;

2

51

RB357

14

2:1

19

1

4

TE3\_RXN&lt;4..1&gt;

57A4&lt;

57A8&lt;

57C5&lt;

57C8&lt;

59B8&lt;

59D4&lt;

59D8&lt;

2

51

RB358

12

2:1

59D4&lt;

57C8&lt;

1

1

RA

OHM

75

RA

OHM

75

CONN\_BNC\_5P

J58

1

A

CONN\_BNC\_5P

J59

1

15

TB01

18

2

4

TE3\_TXP&lt;4..1&gt;

57A2&gt;

57A5&gt;

57C2&gt;

57C5&gt;

59A8&lt;

59C4&lt;

59C8&lt;

5

3

4

TREF2

9

TB01

24

2

2

TE3\_TXP&lt;4..1&gt;

59C8&lt;

59A4&lt;

57C2&gt;

A

57A5&gt;

57A2&gt;

2

332

R199

59C4&lt;

57C5&gt;

59C8&lt;

2

51

RB369

5

3

4

TREF4

2

332

R200

16

17

1

4

TE3\_TXN&lt;4..1&gt;

57A2&gt;

57A5&gt;

57C2&gt;

57C5&gt;

59A8&lt;

59C4&lt;

59C8&lt;

2

51

RB368

10

2:1

23

1

2

TE3\_TXN&lt;4..1&gt;

59A4&lt;

57C2&gt;

57A5&gt;

57A2&gt;

1

2:1

59C4&lt;

57C5&gt;

DATE:

DS33Z11/41/44DK01A0

TITLE:

1

09/16/2004

4/8(BLOCK)

PAGE:

59/71(TOTAL)

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

63C6&lt;&gt;

63C8&lt;&gt;

63C6&lt;&gt;

63C8&lt;&gt;

63D6&lt;&gt;

63D8&lt;&gt;

63C6&lt;&gt;

63C8&lt;&gt;

63C6&lt;&gt;

63C8&lt;&gt;

63C6&lt;&gt;

63C8&lt;&gt;

D

XILINX\_CPLD

V3\_3

62C6&lt;&gt;

62C8&lt;&gt;

62C6&lt;&gt;

62C8&lt;&gt;

62D6&lt;&gt;

62D8&lt;&gt;

62C6&lt;&gt;

62C8&lt;&gt;

62C6&lt;&gt;

62C8&lt;&gt;

62C6&lt;&gt;

62C8&lt;&gt;

D

UB03

XILINX\_XC9572XL

61D2&lt;

56C7&lt;

56D8&lt;&gt;

JTCLK

48

TCK

2.5V\_3.3V1

56C7&lt;&gt;

JTDO84

45

TDI

2.5V\_3.3V2

26

38

Z44\_TDEN&lt;1&gt;

Z44\_RDEN&lt;1&gt;

Z44\_TCLK&lt;1&gt;

Z44\_RCLK&lt;1&gt;

Z44\_TSER&lt;1&gt;

Z44\_RSER&lt;1&gt;

Z44\_TDEN&lt;2&gt;

Z44\_RDEN&lt;2&gt;

Z44\_TCLK&lt;2&gt;

Z44\_RCLK&lt;2&gt;

Z44\_TSER&lt;2&gt;

Z44\_RSER&lt;2&gt;

61C2&lt;

JTDT\_NEXTCPLD

61C2&lt;

56C7&lt;

56D8&lt;&gt;

JTMS

83

47

TDO

2.5V\_3.3V3

51

TMS

2.5V\_3.3V4

88

30

30

30

30

30

30

30

30

30

30

3.3V1

5

R67

R68

R65

R66

R69

R62

R63

R60

R61

R64

NC&lt;8-0&gt;

3.3V2

3.3V3

57

98

23

22

6

4

12

9

8

3

13

97

11

10

20

18

28

25

29

C

GND1

GND2

GND3

GND4

GND5

GND6

GND7

GND8

V3\_3

14

27

IO19

IO20

GCK2

GCK1

CONNECTIONS

Z44

IO72

1

T3ENH\_T1ENLPRT2

60A8&lt;&gt;

62C6&lt;&gt;

63C6&lt;&gt;

2

J24

1

JMP\_2

21

31

44

62

69

75

84

100

2.0K

R85

TP31

LOOPBACK\_CTRL

SPARE\_TP1

1

15

IO21

GCK3

XILINX\_XC9572XL

IO71

IO70

99

T3ENH\_T1ENLPRT1

60A8&lt;&gt;

62D6&lt;&gt;

63D6&lt;&gt;

96

61C3&lt;&gt;

17

IO22

XILINX\_CPLD

IO69

95

IO18

IO17

IO16

IO15

IO14

IO13

IO12

IO11

IO10

IO9

IO8

IO7

IO6

IO5

IO4

IO3

IO2

IO1

C

44.736MHZ\_5.0V

61B4&gt;

60B4&gt;

57C5&gt;

57C2&gt;

57A5&gt;

61C4&gt;

57A1&gt;

TE3\_RCLK&lt;4..1&gt;

2

60

30

IO23

IO24

UB04

IO68

94

IO67

93

V3\_3

Y08

61B4&gt;

60B4&gt;

57C5&gt;

57C2&gt;

57A5&gt;

57A1&gt;

TE3\_RSER&lt;4..1&gt;

2

72

IO25

IO66

92

OSC

60B3&gt;

57C5&gt;

57C2&gt;

57A5&gt;

61B3&gt;

57A1&gt;

TE3\_RGAPCLK&lt;4..1&gt;

2

70

IO26

IO65

91

8

VCC

1

61B4&gt;

60B4&gt;

57C5&gt;

57C2&gt;

57A5&gt;

57A1&gt;

TE3\_TCLK&lt;4..1&gt;

2

64

IO27

IO64

90

57C8&lt;

57C5&lt;

57A8&lt;

57A4&lt;

61B4&gt;

60B4&gt;

TE3\_TSER&lt;4..1&gt;

2

68

IO28

IO63

89

B

61B7&lt;&gt;

60B7&lt;&gt;

OSC\_A

RB145

5

OUT

GND

4

60A3&gt;

57C5&gt;

57C2&gt;

61B3&gt;

57A5&gt;

61A3&gt;

57A1&gt;

TE3\_TGAPCLK&lt;4..1&gt;

2

74

IO29

IO62

85

OSC\_A

61B7&lt;&gt;

60B1&lt;

B

30

56B4&lt;

56C7&lt;

56B8&lt;&gt;

CLKB

30

61B4&gt;

60B4&gt;

57C5&gt;

57C2&gt;

57A5&gt;

61C4&gt;

57A1&gt;

TE3\_RCLK&lt;4..1&gt;

4

65

IO31

IO60

87

RB149

40

IO30

IO61

86

56B8&lt;

CLKA

RB148

61B4&gt;

60B4&gt;

57C5&gt;

57C2&gt;

57A5&gt;

57A1&gt;

TE3\_RSER&lt;4..1&gt;

4

54

IO32

IO59

82

30

61B3&gt;

60B3&gt;

57C5&gt;

57C2&gt;

57A5&gt;

57A1&gt;

TE3\_RGAPCLK&lt;4..1&gt;

4

55

IO33

IO58

81

61B4&gt;

60B4&gt;

57C5&gt;

57C2&gt;

57A5&gt;

57A1&gt;

TE3\_TCLK&lt;4..1&gt;

4

63

IO34

IO57

79

57C8&lt;

57C5&lt;

57A8&lt;

57A4&lt;

61B4&gt;

60B4&gt;

TE3\_TSER&lt;4..1&gt;

4

58

IO35

IO56

78

61B3&gt;

61A3&gt;

60B3&gt;

57C5&gt;

57C2&gt;

57A5&gt;

57A1&gt;

TE3\_TGAPCLK&lt;4..1&gt;

4

56

IO36

IO55

77

IO37

IO38

IO39

IO40

IO41

IO42

IO43

IO44

IO45

IO46

IO47

IO48

IO49

IO50

IO51

IO52

IO53

IO54

32

33

35

36

59

37

61

39

41

42

66

67

49

50

71

52

53

76

V3\_3

A

A

3

JMP\_3

63D6&lt;&gt;

62D6&lt;&gt;

60C8&lt;&gt;

T3ENH\_T1ENLPRT1

3

JMP\_3

JP19

63C6&lt;&gt;

62C6&lt;&gt;

60C8&lt;&gt;

T3ENH\_T1ENLPRT2

JP17

DATE:

DS33Z11/41/44DK01A0

TITLE:

PORTS ARE ENABLED BY DEFAULT ON T1 BRD

09/16/2004

AND ARE DISABLED USING JUMPERS ON T3 BRD

5/8(BLOCK)

PAGE:

60/71(TOTAL)

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

63C2&lt;&gt;

63B2&lt;&gt;

D

XILINX\_CPLD

UB04

XILINX\_XC9572XL

V3\_3

Z44\_TDEN&lt;3&gt;

Z44\_RDEN&lt;3&gt;

Z44\_TCLK&lt;3&gt;

60C2&lt;

JTDT\_NEXTCPLD

45

TDI

60D2&lt;

56C7&lt;

56D8&lt;&gt;

JTCLK

48

TCK

2.5V\_3.3V1

26

30

30

30

30

2.5V\_3.3V2

38

R37

RB89

R38

Z44\_RCLK&lt;3&gt;

RB90

62C2&lt;&gt;

Z44\_TSER&lt;3&gt;

Z44\_RSER&lt;3&gt;

30

R36

Z44\_TDEN&lt;4&gt;

Z44\_RDEN&lt;4&gt;

Z44\_TCLK&lt;4&gt;

R34

RB95

R33

Z44\_RCLK&lt;4&gt;

30

30

30

30

RB91

62B2&lt;&gt;

Z44\_TSER&lt;4&gt;

Z44\_RSER&lt;4&gt;

30

R35

D

56D8&lt;&gt;

JTDOCPLD

83

TDO

2.5V\_3.3V3

51

60C2&lt;

56C7&lt;

56D8&lt;&gt;

JTMS

47

TMS

2.5V\_3.3V4

3.3V1

88

5

1

TP10

1

TP22

1

TP11

1

TP23

1

TP09

1

TP21

1

TP07

1

TP19

1

TP06

1

TP18

1

TP08

1

TP20

NC&lt;8-0&gt;

3.3V2

57

23

22

3

1

97

95

6

4

15

12

99

10

14

13

17

18

8

3.3V3

98

C

GND1

GND2

GND3

GND4

GND5

GND6

GND7

GND8

I79

TINYTESTPOINT

21

31

44

62

69

75

84

100

NA

20

27

IO19

IO20

GCK2

GCK1

CONNECTIONS

Z44

IO72

25

T3ENH\_T1ENLPRT4

61A8&lt;&gt;

62B2&lt;&gt;

63B2&lt;&gt;

C

NA

TP33

SPARE\_TP3

1

16

IO21

GCK3

XILINX\_XC9572XL

IO71

IO70

28

T3ENH\_T1ENLPRT3

61A8&lt;&gt;

62C2&lt;&gt;

63C2&lt;&gt;

96

IO18

IO17

IO16

IO15

IO14

IO13

IO12

IO11

IO10

IO9

IO8

IO7

IO6

IO5

IO4

IO3

IO2

IO1

60C4&lt;&gt;

LOOPBACK\_CTRL

29

IO22

XILINX\_CPLD

IO69

87

30

61B4&gt;

60B4&gt;

57C5&gt;

57C2&gt;

57A5&gt;

57A1&gt;

TE3\_RCLK&lt;4..1&gt;

1

61

IO23

IO24

UB03

IO68

94

IO67

93

61B4&gt;

60B4&gt;

57C5&gt;

57C2&gt;

57A5&gt;

57A1&gt;

TE3\_RSER&lt;4..1&gt;

1

33

IO25

IO66

92

61B3&gt;

60B3&gt;

57C5&gt;

57C2&gt;

57A5&gt;

57A1&gt;

TE3\_RGAPCLK&lt;4..1&gt;

1

39

IO26

IO65

91

61B4&gt;

60B4&gt;

57C5&gt;

57C2&gt;

57A5&gt;

57A1&gt;

TE3\_TCLK&lt;4..1&gt;

1

60

IO27

IO64

90

57C8&lt;

57C5&lt;

57A8&lt;

57A4&lt;

61B4&gt;

60B4&gt;

TE3\_TSER&lt;4..1&gt;

1

42

IO28

IO63

89

61A3&gt;

60B3&gt;

60A3&gt;

57C5&gt;

57C2&gt;

57A5&gt;

57A1&gt;

TE3\_TGAPCLK&lt;4..1&gt;

1

74

IO29

IO62

85

OSC\_A

60B7&lt;&gt;

60B1&lt;

B

40

IO30

IO61

86

B

61C4&gt;

60B4&gt;

57C5&gt;

57C2&gt;

57A5&gt;

57A1&gt;

TE3\_RCLK&lt;4..1&gt;

3

54

IO31

IO60

9

61B4&gt;

60B4&gt;

57C5&gt;

57C2&gt;

57A5&gt;

57A1&gt;

TE3\_RSER&lt;4..1&gt;

3

72

IO32

IO59

82

61B3&gt;

60B3&gt;

57C5&gt;

57C2&gt;

57A5&gt;

57A1&gt;

TE3\_RGAPCLK&lt;4..1&gt;

3

71

IO33

IO58

81

61B4&gt;

60B4&gt;

57C5&gt;

57C2&gt;

57A5&gt;

57A1&gt;

TE3\_TCLK&lt;4..1&gt;

3

50

IO34

IO57

79

57C8&lt;

57C5&lt;

57A8&lt;

57A4&lt;

61B4&gt;

60B4&gt;

TE3\_TSER&lt;4..1&gt;

3

70

IO35

IO56

78

61B3&gt;

60B3&gt;

60A3&gt;

57C5&gt;

57C2&gt;

57A5&gt;

57A1&gt;

TE3\_TGAPCLK&lt;4..1&gt;

3

36

IO36

IO55

77

IO37

IO38

IO39

IO40

IO41

IO42

IO43

IO44

IO45

IO46

IO47

IO48

IO49

IO50

IO51

IO52

IO53

IO54

32

55

56

58

59

35

37

63

64

65

66

67

68

41

49

52

53

76

V3\_3

A

A

3

JMP\_3

63C2&lt;&gt;

62C2&lt;&gt;

61C8&lt;&gt;

T3ENH\_T1ENLPRT3

3

JMP\_3

JP18

63B2&lt;&gt;

62B2&lt;&gt;

61C8&lt;&gt;

T3ENH\_T1ENLPRT4

JP16

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

6/8(BLOCK)

PAGE:

61/71(TOTAL)

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

V3\_3

RECEPTACLE

CONNECTOR (RECEPTICAL)

P1

CONNECTOR (RECEPTICAL)

P2

RECEPTACLE

GND

J07

J10

D

VDD

D

63D3&lt;&gt;

63D3&lt;&gt;

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

75

76

77

72

GND

63D5&gt;

56B8&gt;

56A6&lt;&gt;

T3\_INT

GND

CS\_X5

63D4&lt;&gt;

63D6&lt;&gt;

I36

INT3

INT4

63D6&lt;&gt;

1

63D7&lt;&gt;

63D6&lt;&gt;

56B8&lt;

62D7&lt;&gt;

63D6&lt;&gt;

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

63D6&lt;&gt;

60C8&lt;&gt;

60A8&lt;&gt;

63D6&lt;&gt;

60D6&lt;&gt;

Z44\_TSER&lt;1&gt;

T3ENH\_T1ENLPRT1

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

10

79

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

GND

60D5&lt;

63C6&lt;&gt;

Z44\_TDEN&lt;1&gt;

11

12

81

80

V3\_3

Z44\_RSER&lt;1&gt;

SIG\_RETURN

63D8&lt;&gt;

60D6&lt;

GND

17

18

87

86

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

63C2&lt;&gt;

61C8&lt;&gt;

61A8&lt;&gt;

T3ENH\_T1ENLPRT3

25

93

63C2&lt;&gt;

61D6&lt;&gt;

Z44\_TSER&lt;3&gt;

GND

26

94

GND

63C8&lt;&gt;

63C6&lt;&gt;

63B3&lt;&gt;

63A1&gt;

62C8&lt;&gt;

62B3&lt;&gt;

62A1&gt;

63C6&lt;&gt;

60D7&lt;&gt;

Z44\_TSER&lt;2&gt;

63C6&lt;&gt;

60C8&lt;&gt;

60A8&lt;&gt;

T3ENH\_T1ENLPRT2

GND

17

18

88

GND

60D5&lt;

63C6&lt;&gt;

Z44\_TCLK&lt;1&gt;

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

62A1&gt;

Z44\_RDEN&lt;1&gt;

63C6&lt;&gt;

63C8&lt;&gt;

63C8&lt;&gt;

62B3&lt;&gt;

62C6&lt;&gt;

63A1&gt;

63B3&lt;&gt;

60D5&lt;

GND

Z44\_RCLK&lt;1&gt;

63C8&lt;&gt;

60D5&lt;

87

86

19

SIG\_RETURN

GND

20

21

89

88

GND

22

23

91

25

24

92

61D5&lt;

63C2&lt;&gt;

Z44\_TDEN&lt;3&gt;

GND

28

29

30

27

97

98

95

96

GND

Z44\_RSER&lt;3&gt;

63C5&lt;&gt;

61D6&lt;

60D6&lt;

63C6&lt;&gt;

Z44\_TDEN&lt;2&gt;

GND

26

94

93

90

V3\_3

GND

Z44\_RSER&lt;2&gt;

63C8&lt;&gt;

60D7&lt;

95

27

31

100

99

61D5&lt;

63C2&lt;&gt;

Z44\_TCLK&lt;3&gt;

GND

32

101

GND

Z44\_RDEN&lt;3&gt;

63C5&lt;&gt;

61D5&lt;

60D6&lt;

63C6&lt;&gt;

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

63C8&lt;&gt;

60D6&lt;

31

100

99

33

34

35

36

104

102

103

V3\_3

Z44\_RCLK&lt;3&gt;

63C5&lt;&gt;

61D5&lt;

GND

32

101

GND

Z44\_RCLK&lt;2&gt;

63C8&lt;&gt;

60D6&lt;

33

34

37

105

106

63B2&lt;&gt;

63B2&lt;&gt;

61C8&lt;&gt;

61A8&lt;&gt;

61D7&lt;&gt;

T3ENH\_T1ENLPRT4

Z44\_TSER&lt;4&gt;

GND

39

40

GND

42

41

38

107

GND

109

108

GND

35

36

104

102

103

V3\_3

37

105

GND

39

40

111

110

43

112

B

61D6&lt;

63B2&lt;&gt;

Z44\_TDEN&lt;4&gt;

63C8&lt;&gt;

63C6&lt;&gt;

63B3&lt;&gt;

63A1&gt;

62C8&lt;&gt;

62C6&lt;&gt;

62A1&gt;

61D6&lt;

63B2&lt;&gt;

Z44\_TCLK&lt;4&gt;

SIG\_RETURN

GND

45

46

44

113

GND

Z44\_RSER&lt;4&gt;

63B5&lt;&gt;

61D7&lt;

GND

42

41

38

106

GND

107

108

GND

110

109

111

43

112

47

115

114

V3\_3

Z44\_RDEN&lt;4&gt;

63B5&lt;&gt;

61D6&lt;

44

48

49

50

62B7&lt;&gt;

FPGAGCLK1\_NU

GND

GND

52

54

51

120

119

118

117

116

GND

Z44\_RCLK&lt;4&gt;

63B5&lt;&gt;

61D6&lt;

GND

45

46

114

115

47

53

123

122

121

GND

49

50

0

GND

56

58

57

59

1

DAT&lt;7..0&gt;

5

3

GND

62

63

60

61

7

GND

66

65

64

132

133

134

131

GND

2

4

DAT&lt;7..0&gt;

56C3&lt;&gt;

62A3

63A3

63A5

ADDR&lt;10..0&gt;

6

8

GND

62

63

60

61

64

132

130

129

128

55

127

126

125

124

GND

63B6&lt;&gt;

63B6&lt;&gt;

56D6&lt;&gt;

56D7&lt;&gt;

TDO\_NU

TCK\_NU

GND

GND

52

54

53

55

123

51

48

120

118

116

113

GND

V3\_3

B

117

GND

119

121

GND

FPGAGCLK1\_NU

62B3&lt;&gt;

122

GND

OSC1\_NU

63A4&lt;&gt;

3

5

GND

56

58

57

59

131

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

56D6&lt;&gt;

56D6&lt;&gt;

63B7&lt;&gt;

63B7&lt;&gt;

GND

4

63A7

63A6

133

10

GND

66

65

134

GND

56D4&lt;

7

62A6

ADDR&lt;10..0&gt;

9

67

135

136

GND

70

69

68

140

139

67

135

136

137

GND

CS\_X2

6

138

V3\_3

63A4&lt;&gt;

WR

CS\_X3

CS

63A4&lt;&gt;

63A4&lt;&gt;

56B7&lt;

63A5&lt;

63A6&lt;&gt;

OSC3\_NU

GND

70

69

68

140

139

138

V3\_3

OSC2\_NU

OSC4\_NU

63A7&lt;&gt;

63A7&lt;&gt;

A

137

GND

56B8&lt;

V3\_3

1

89

90

V3\_3

76

75

72

GND

GND

INT5

INT2

63D7&lt;&gt;

62D6&lt;&gt;

63D6&lt;&gt;

63D7&lt;&gt;

C

0

2

A

56B8&lt;

63A3&gt;

RD

RW

63A3&lt;&gt;

63A1&gt;

63C8&lt;&gt;

62C8&lt;&gt;

63C6&lt;&gt;

62C6&lt;&gt;

63B3&lt;&gt;

62B3&lt;&gt;

SIG\_RETURN

I35

GND

NOTE 3184 IS ON CS3 WHILE 21455 IS ON CS2/CS4

WAN R.C. CONNECTOR TO MOTHERBOARD

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

7/8(BLOCK)

PAGE:

62/71(TOTAL)

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

I8

PLUG

V3\_3

I15

V3\_3

CONNECTOR (PLUG)

P1

I25

PLUG

CONNECTOR (PLUG)

P2

GND

I17

JB05

PLUG STYLE CONNECTORS GO ON BOTTOM OF T3E3 WAN CARD

DS21458 CONNECTS TO MOTHERBOARD BY STACKING ONTO T3E3 BRD

JB06

D

VDD

D

62D3&lt;&gt;

62D3&lt;&gt;

ALE

1

2

1

CS\_X4

GND

3

4

5

3

2

71

GND

7

6

8

GND

9

10

7

6

5

4

73

74

75

8

11

9

12

11

10

78

77

76

77

72

75

74

76

GND

63D7&lt;&gt;

62D7&lt;&gt;

56B8&lt;

62D6&lt;&gt;

62D6&lt;&gt;

INT2

GND

3

71

72

73

GND

CS\_X5

62D4&lt;&gt;

62D6&lt;&gt;

I14

INT3

INT4

62D6&lt;&gt;

1

2

1

4

5

3

2

71

79

13

14

GND

15

16

14

13

12

81

15

83

17

GND

18

16

84

19

20

17

85

18

87

86

C

GND

21

19

22

20

23

62C2&lt;&gt;

62C2&lt;&gt;

61C8&lt;&gt;

61A8&lt;&gt;

T3ENH\_T1ENLPRT3

24

25

26

24

21

89

22

23

91

92

61D6&lt;&gt;

Z44\_TSER&lt;3&gt;

61D5&lt;

62C2&lt;&gt;

Z44\_TDEN&lt;3&gt;

GND

27

25

93

28

26

94

27

95

61D5&lt;

62C2&lt;&gt;

Z44\_TCLK&lt;3&gt;

GND

30

29

31

30

28

29

98

97

GND

32

33

31

34

32

101

33

35

36

37

35

34

36

104

102

103

V3\_3

100

99

99

96

98

95

90

88

87

86

88

GND

18

82

84

83

85

GND

60D5&lt;

62C6&lt;&gt;

Z44\_TCLK&lt;1&gt;

80

79

78

80

V3\_3

62D6&lt;&gt;

60C8&lt;&gt;

60A8&lt;&gt;

81

82

GND

62D6&lt;&gt;

60D6&lt;&gt;

Z44\_TSER&lt;1&gt;

T3ENH\_T1ENLPRT1

RESET\_B

GND

7

6

8

9

60D5&lt;

62C6&lt;&gt;

Z44\_TDEN&lt;1&gt;

10

7

6

5

4

73

74

75

72

72

73

74

INT5

GND

75

INT2

62D7&lt;&gt;

62D6&lt;&gt;

62D7&lt;&gt;

63D6&lt;&gt;

71

GND

8

9

11

12

13

11

10

78

76

77

79

77

12

14

15

16

GND

14

17

19

20

17

16

15

13

81

83

84

85

91

89

90

V3\_3

62C6&lt;&gt;

60C8&lt;&gt;

60A8&lt;&gt;

T3ENH\_T1ENLPRT2

GND

92

93

94

GND

63C8&lt;&gt;

63B3&lt;&gt;

63A1&gt;

62C8&lt;&gt;

62C6&lt;&gt;

62B3&lt;&gt;

62A1&gt;

62C6&lt;&gt;

60D7&lt;&gt;

Z44\_TSER&lt;2&gt;

SIG\_RETURN

GND

21

19

22

20

23

24

25

24

23

22

21

18

87

88

86

87

89

88

86

82

85

83

80

79

80

78

V3\_3

Z44\_RSER&lt;1&gt;

SIG\_RETURN

62D8&lt;&gt;

81

82

GND

62A1&gt;

60D6&lt;

63B3&lt;&gt;

Z44\_RDEN&lt;1&gt;

63C6&lt;&gt;

62B3&lt;&gt;

62C6&lt;&gt;

62C8&lt;&gt;

63A1&gt;

62C8&lt;&gt;

60D5&lt;

84

GND

Z44\_RCLK&lt;1&gt;

62C8&lt;&gt;

60D5&lt;

GND

92

96

97

GND

Z44\_RSER&lt;3&gt;

62C5&lt;&gt;

61D6&lt;

60D6&lt;

62C6&lt;&gt;

Z44\_TDEN&lt;2&gt;

100

101

GND

Z44\_RDEN&lt;3&gt;

62C5&lt;&gt;

61D5&lt;

60D6&lt;

62C6&lt;&gt;

Z44\_TCLK&lt;2&gt;

GND

26

27

25

28

26

93

94

27

95

GND

30

29

31

30

29

28

97

32

38

62B2&lt;&gt;

62B2&lt;&gt;

61C8&lt;&gt;

61A8&lt;&gt;

61D7&lt;&gt;

T3ENH\_T1ENLPRT4

Z44\_TSER&lt;4&gt;

GND

39

B

61D6&lt;

62B2&lt;&gt;

Z44\_TDEN&lt;4&gt;

GND

41

40

39

38

37

105

106

42

40

43

42

41

110

109

107

108

107

106

104

105

GND

GND

33

31

34

32

33

101

35

108

109

GND

36

37

35

34

36

GND

38

39

111

110

63C8&lt;&gt;

63C6&lt;&gt;

63A1&gt;

62C8&lt;&gt;

62C6&lt;&gt;

62B3&lt;&gt;

62A1&gt;

61D6&lt;

62B2&lt;&gt;

Z44\_TCLK&lt;4&gt;

SIG\_RETURN

GND

44

45

46

47

48

46

45

44

43

112

113

111

112

113

GND

Z44\_RSER&lt;4&gt;

62B5&lt;&gt;

61D7&lt;

40

GND

41

39

38

37

104

105

106

103

102

V3\_3

104

103

100

99

98

99

96

98

95

91

90

93

92

94

GND

Z44\_RSER&lt;2&gt;

62C8&lt;&gt;

60D7&lt;

91

89

90

V3\_3

96

97

GND

Z44\_RDEN&lt;2&gt;

62C8&lt;&gt;

60D6&lt;

GND

100

101

Z44\_RCLK&lt;2&gt;

62C8&lt;&gt;

60D6&lt;

102

105

GND

42

40

114

49

50

GND

51

48

52

50

53

GND

54

55

52

49

51

120

53

54

56

GND

57

58

59

56

0

60

1

61

58

57

59

62

3

DAT&lt;7..0&gt;

5

GND

63

60

64

62

61

63

65

7

GND

66

67

66

64

132

65

134

133

131

GND

130

132

133

134

2

129

131

128

130

55

123

126

127

129

128

GND

OSC1\_NU

62A4&lt;&gt;

3

125

127

124

126

125

122

124

121

123

122

GND

62B6&lt;&gt;

62B6&lt;&gt;

56D6&lt;&gt;

56D7&lt;&gt;

TDO\_NU

TCK\_NU

GND

54

55

47

115

116

114

115

V3\_3

Z44\_RDEN&lt;4&gt;

62B5&lt;&gt;

61D6&lt;

43

42

41

110

109

107

108

107

108

109

GND

111

110

44

45

117

119

121

118

120

119

116

117

118

GND

Z44\_RCLK&lt;4&gt;

62B5&lt;&gt;

61D6&lt;

GND

46

47

45

48

46

44

43

112

113

111

112

GND

113

114

GND

49

50

51

48

49

52

50

53

52

51

120

GND

54

56

V3\_3

1

GND

57

58

59

56

5

60

6

61

58

57

59

62

GND

69

A

56B8&lt;

62A3&gt;

RD

I6

RW

62A3&lt;&gt;

70

70

68

69

68

67

135

136

137

GND

139

140

138

140

138

135

136

137

CS\_X2

4

DAT&lt;7..0&gt;

56C3&lt;&gt;

62A3

62A5

63A3

ADDR&lt;10..0&gt;

8

10

GND

63

60

64

62

63

61

65

GND

66

67

66

65

64

132

133

139

V3\_3

6

WR

CS\_X3

62A4&lt;&gt;

I13

62A4&lt;&gt;

CS

62A4&lt;&gt;

56B7&lt;

62A5&lt;

62A6&lt;&gt;

OSC3\_NU

GND

70

69

70

68

69

68

67

135

136

139

140

138

140

137

139

137

138

V3\_3

OSC2\_NU

OSC4\_NU

62A7&lt;&gt;

62A7&lt;&gt;

A

134

136

131

134

130

132

129

131

133

GND

128

130

55

53

123

126

127

129

128

GND

0

2

4

125

127

124

126

125

V3\_3

TMS\_NU

122

124

121

123

122

GND

TDI\_NU

56D6&lt;&gt;

56D6&lt;&gt;

62B7&lt;&gt;

62B7&lt;&gt;

47

115

116

114

V3\_3

115

117

118

GND

119

121

119

120

GND

118

117

116

B

62A7

62A6

63A6

56D4&lt;

7

ADDR&lt;10..0&gt;

135

GND

9

56B8&lt;

106

76

102

103

Z44\_RCLK&lt;3&gt;

62C5&lt;&gt;

61D5&lt;

62D5&gt;

56B8&gt;

56A6&lt;&gt;

T3\_INT

GND

C

62C8&lt;&gt;

63C8&lt;&gt;

62C6&lt;&gt;

63C6&lt;&gt;

62B3&lt;&gt;

62A1&gt;

63B3&lt;&gt;

SIG\_RETURN

I7

GND

NOTE 3184 IS ON CS3 WHILE 21455 IS ON CS2/CS4

WAN R.C. CONNECTOR TO MOTHERBOARD

DATE:

DS33Z11/41/44DK01A0

TITLE:

09/16/2004

8/8(BLOCK)

PAGE:

63/71(TOTAL)

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