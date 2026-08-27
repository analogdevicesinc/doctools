<!-- lastmod 2022-08-02 -->
## MAX33012E Shield

## General Description

The  MAX33012E  Shield  is  a  fully  assembled  and  tested Printed  Circuit  Board  (PCB)  that  demonstrates  the functionality  of  the  MAX33012E,  a  high  ±65V  faultprotection, ±25V common mode input range, ±25kV ESD Human Body Model (HBM) controller area network (CAN) transceiver. The  Mbed/Arduino  shield  can  also  be  used as a standalone evaluation board. The shield features a digital isolator, which is used as a level translator between the CAN transceiver and the controller interface.

## Features

- Easy Evaluation of the MAX33012E
- I/O Interface Compatibility From 1.71V to 5.5V
- Proven PCB Layout
- Mbed/Arduino Platform Compatible
- Fully Assembled and Tested

## EV Kit Photo with Jumpers and Test Points Position

<!-- image -->

<!-- image -->

## Evaluates: MAX33011E/MAX33012E

## Quick Start

## Required Equipments

- MAX33012E Shield
- 5V, 500mA DC power supply
- Signal/function generator that can generate 2.5MHz square wave signal
- Oscilloscope

Ordering Information appears at end of data sheet.

## MAX33012E Shield

## Procedure

- 1) Place the MAX33012E Shield on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
- 2) Set all jumpers in their default position as shown in Table 1.
- 3) With +5V power supply disabled, connect the positive terminal to VDD\_EXT and IOREF test points. Connect the negative terminal to the GND test point.
- 4) Connect the positive terminal of the function generator to D1 pin of J6 and negative terminal to any GND test points on the shield.
- 5) Set function generator to output a 2.5MHz square wave between 0V and 5V, and then enable function generator output.
- 6) Turn on the +5V DC Power Supply.
- 7) Connect an oscilloscope probe on RXD test point and verify the RXD output signal matches the TXD input signal.

## Transmission Failure, Overcurrent and Overvoltage Fault Detection Procedure

In-order  to  test  the  fault  detection,  100  pulses  on  TXD are required to enable the fault detection circuitry. There are 3 different faults that can be tested. After each fault condition is applied, fault pin goes high. Send 16 pulses on TXD to observe the fault code on RXD. Additional 10 pulses on TXD are required to clear the Fault and another 100 pulses on TXD to enable fault detection again.

- Remove jumpers JU\_CANH and JU\_CANL. As the CAN Bus won't have any termination, MAX33012E will detect 'Transmission Failure' fault.
- Connect an oscilloscope probe on RXD test point and verify the RXD output signal shows fault code '110010'.
- Overcurrent Fault Detection: Connect a short wire between pin#2 of JU\_CANH and pin#2 of JU\_CANL. As the CANH and CANL lines are shorted to each other, MAX33012E will detect 'Overcurrent' fault.
- Verify that the RXD output signal shows fault code '101010'.
- Overvoltage Fault Detection: Remove the wire and follow setup instructions in Figure 1 of the MAX33012E data sheet to observe Overvoltage fault. For Overvoltage fault detection, recommended RCM value is 150Ω and VCM value is 30V.
- Verify that the RXD output signal shows fault code '100110'.

## Detailed Description of Hardware

The MAX33012E Shield is a fully assembled and tested circuit board for evaluating the MAX33012E fault-protected high-speed  CAN  transceiver  (U1)  with  ±65V  of  fault protection,  fault  detection  and  reporting.  The  Shield  is designed  to  evaluate  MAX33012E  alone  or  in  a  CAN system. The MAX33012E Shield enables Mbed or Arduino platform to communicate on a CAN bus. The MAX14932 digital isolator is used as a level translator with a 1.71V to 5.5V supply range.

## Powering the Board

The  MAX33012E  Shield  requires  one  power  supply  for 5V  operation.  The  power  supply  can  come  from  an  external supply  or  from  the  Arduino/Mbed  microcontroller's  5V supply. Shunt the JU1 VDD pin to VDD\_EXT pin option ( 2-3 default position) to select the external supply. Shunt JU1 VDD pin to 5V (1-2 position) to connect the Arduino/Mbed 5V supply to VDD.

## On-Board Termination

A  properly  terminated  CAN  bus  is  terminated  at  each end with the characteristic  impedance of the cable. For CAT5  or  CAT6  cables,  this  is  typically  120Ω  on  each end for a 60Ω load on the CAN driver. The MAX33012E shield features a selectable 60Ω load and a 60Ω-60Ω split termination  circuit  between  the  CANH  and  CANL  driver outputs. The 60Ω-60Ω split termination has a footprint for a capacitor to reduce high-frequency noise and common mode drift. If the board is evaluated in a system and is connected at the end of the cable, then select the 120Ω (60Ω-60Ω split) termination. To simulate a complete system without  connecting  to  another  CAN  transceiver,  change the termination resistors on the MAX33012E Shield to a 60Ω with optional footprint for a 100pF load.

## TXD and RXD Configuration

Digital channels for TXD and RXD are selected via JU8. It  consists of three columns, and 14 rows. The columns labeled  TXD  and  RXD  are  connected  to  MAX33012E through the digital isolator U2. The middle column is the digital I/O pins, D0 to D13. This provides flexibility for the user to select different resources on the microcontroller to transmit  and  receive  signals  to  and  from  the  CAN transceiver. Table 2 shows the list of JU8 jumper options.

## MAX33012E Shield

## DB9 Connector

The MAX33012E Shield has a DB9 connector to CANH and CANL (pins 7 and 6, respectively).

## Table 1. Table Jumper Settings

| JUMPER              | SHUNT POSITION   | DESCRIPTION                                                         |
|---------------------|------------------|---------------------------------------------------------------------|
| JU_CANH and JU_CANL | 1-2              | Connects 120.8Ω between CANH and CANL                               |
| JU_CANH and JU_CANL | 2-3*             | Connects 60.4Ω between CANH and CANL                                |
| JU_CANH and JU_CANL | Open             | No load is connected between CANH and CANL                          |
| JU1                 | 1-2              | Connects V DD to 5V supply                                          |
| JU1                 | 2-3*             | Connects V DD to VDD_EXT supply                                     |
| JU1                 | Open             | Disconnects V DD                                                    |
| JU8                 | -                | Refer to TXD and RXD Configuration in Table 2                       |
| JU9 JU10            | 1-2              | Connects STBY to D7 of J6                                           |
| JU9 JU10            | Open*            | Disconnects STBY from D7 of J6                                      |
| JU10 JU12           | 1-2*             | Connects TVS diode to CANL                                          |
| JU10 JU12           | Open             | Disconnects TVS diode from CANL                                     |
| JU12                | 1-2*             | Connects STBY to ground                                             |
| JU12                | 1-3              | Connects 26.1KΩ resistor between STBY and ground                    |
| JU12                | 1-4              | Connects STBY to the U2's OUTB2 pin used for Arduino/Mbed interface |
| JU12                | Open             | Internal pull up for standby mode                                   |
| JU15                | 1-2*             | Connects 15pF capacitor between receiver output and ground          |
|                     | Open             | Disconnects 15pF capacitor between receiver output and ground       |
| JU20                | 1-2*             | Connects TVS diode to CANH                                          |
| JU20                | Open             | Disconnects TVS diode from CANH                                     |
| J1                  | 1-2*             | Connects V DDB on U2 to V DD                                        |
| J1                  | Open             | Disconnects V DDB on U2 from V DD                                   |
| J2                  | 1-2*             | Connects FAULT to D2 pin of J6                                      |
| J2                  | Open             | Disconnects FAULT                                                   |

Note: '*' indicates default jumper state.

Evaluates: MAX33011E/MAX33012E

## SD Card

The  MAX33012E  Shield  has  a  SD  Card  socket.  The Micro SD card is connected to D10-D13 to interface with Arduino/Mbed board through SPI interface.

│

## MAX33012E Shield

Table 2. Table TXD and RXD Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION         |
|----------|------------------|---------------------|
| JU8      | 1-2              | Connects TXD to D0  |
| JU8      | 4-5*             | Connects TXD to D1  |
| JU8      | 7-8              | Connects TXD to D2  |
| JU8      | 10-11            | Connects TXD to D3  |
| JU8      | 13-14            | Connects TXD to D4  |
| JU8      | 16-17            | Connects TXD to D5  |
| JU8      | 19-20            | Connects TXD to D6  |
| JU8      | 22-23            | Connects TXD to D7  |
| JU8      | 25-26            | Connects TXD to D8  |
| JU8      | 28-29            | Connects TXD to D9  |
| JU8      | 31-32            | Connects TXD to D10 |
| JU8      | 34-35            | Connects TXD to D11 |
| JU8      | 37-38            | Connects TXD to D12 |
| JU8      | 40-41            | Connects TXD to D13 |

Note: '*' Indicates default jumper state.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX33012ESHLD# | Shield |

Evaluates: MAX33011E/MAX33012E

| JUMPER   | SHUNT POSITION   | DESCRIPTION         |
|----------|------------------|---------------------|
| JU8      | 2-3*             | Connects RXD to D0  |
| JU8      | 5-6              | Connects RXD to D1  |
| JU8      | 8-9              | Connects RXD to D2  |
| JU8      | 11-12            | Connects RXD to D3  |
| JU8      | 14-15            | Connects RXD to D4  |
| JU8      | 17-18            | Connects RXD to D5  |
| JU8      | 20-21            | Connects RXD to D6  |
| JU8      | 23-24            | Connects RXD to D7  |
| JU8      | 26-27            | Connects RXD to D8  |
| JU8      | 29-30            | Connects RXD to D9  |
| JU8      | 32-33            | Connects RXD to D10 |
| JU8      | 35-36            | Connects RXD to D11 |
| JU8      | 38-39            | Connects RXD to D12 |
| JU8      | 41-42            | Connects RXD to D13 |

│

## MAX33012E Shield Bill of Materials

| ITEM     | REF_DES                       | DNI/DNP   | QTY   | MFG PART #                                                                                      | MANUFACTURER                                             | VALUE                  | DESCRIPTION                                                                                                                                                                                                                                     | COMMENTS   |
|----------|-------------------------------|-----------|-------|-------------------------------------------------------------------------------------------------|----------------------------------------------------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1        | C1                            | -         | 1     | CL21B106KPQNNN; LMK212AB7106KG; C0805X106K8RACAUTO                                              | SAMSUNG;TAIYO YUDEN;KEMET                                | 10UF                   | CAP; SMT (0805); 10UF; 10%; 10V; X7R; CERAMIC CHIP                                                                                                                                                                                              |            |
| 2        | C2, C3, C5                    | -         | 3     | C0402C104J4RAC; GCM155R71C104JA55                                                               | KEMET;MURATA                                             | 0.1UF                  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                                               |            |
| 3        | C7                            | -         | 1     | C1005X7R1E473K050BC; GRM155R71E473K; GCM155R71E473KA55                                          | TDK;MURATA;MURATA                                        | 0.047UF                | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.047UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC                                                                                                                                                            |            |
| 4        | C10                           | -         | 1     | C0402C0G500-150JNP; GRM1555C1H150JA01; GCM1555C1H150JA16                                        | VENKEL LTD.;MURATA;MURATA                                | 15PF                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 15PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                                                                                        |            |
| 5        | CANH, CANL                    | -         | 2     | 5012                                                                                            | KEYSTONE                                                 | N/A                    | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                                                         |            |
| 6        | D1, D2                        | -         | 2     | SM15T30CA                                                                                       | ST MICROELECTRONICS                                      | 25.6V                  | DIODE; TVS; SMC (DO-214AB); VRM=25.6V; IPP=36A                                                                                                                                                                                                  |            |
| 7        | DS1                           | -         | 1     | APT1608CGCK                                                                                     | KINGBRIGHT                                               | APT1608CGCK            | DIODE; LED; STANDARD; GREEN; SMT (0603); PIV=2.1V; IF=0.02A; -40 DEGC TO +85 DEGC                                                                                                                                                               |            |
| 8        | DS2                           | -         | 1     | APT1608LSECK/J3-PRV                                                                             | KINGBRIGHT                                               | APT1608LSECK/J3-PRV    | DIODE; LED; HYPER RED WATER CLEAR; RED; SMT (0603); VF=1.8V; IF=0.002A                                                                                                                                                                          |            |
| 9        | DS3                           | -         | 1     | APT1608LVBC/D                                                                                   | KINGBRIGHT                                               | APT1608LVBC/D          | DIODE; LED; BLUE WATER CLEAR; BLUE; SMT (0603); VF=2.65V; IF=0.002A                                                                                                                                                                             |            |
| 10       | FLT, RXD, TXD                 | -         | 3     | 5002                                                                                            | KEYSTONE                                                 | N/A                    | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                                                                                                                           |            |
| 11       | IOREF                         | -         | 1     | 5000                                                                                            | KEYSTONE                                                 | N/A                    | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                                                                |            |
| 12       | J1, J2, JU9, JU10, JU15, JU20 | -         | 6     | PCC02SAAN                                                                                       | SULLINS                                                  | PCC02SAAN              | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                                                                                        |            |
| 13       | J3, J6                        | -         | 2     | SSQ-108-24-G-S                                                                                  | SAMTEC                                                   | SSQ-108-24-G-S         | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 8PINS ;                                                                                                                                                                     |            |
| 14       | J4                            | -         | 1     | SSQ-106-24-G-S                                                                                  | SAMTEC                                                   | SSQ-106-24-G-S         | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 6PINS ;                                                                                                                                                                     |            |
| 15       | J5                            | -         | 1     | SSQ-110-24-G-S                                                                                  | SAMTEC                                                   | SSQ-110-24-G-S         | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 10PINS ;                                                                                                                                                                    |            |
| 16       | J7                            | -         | 1     | 182-009-113R531                                                                                 | NORCOMP                                                  | 182-009-113R531        | CONNECTOR; MALE; THROUGH HOLE; D-SUBMINIATURE CONNECTOR; RIGHT ANGLE; 9PINS                                                                                                                                                                     |            |
| 17       | J14                           | -         | 1     | 502570-0893;5025700893                                                                          | MOLEX;MOLEX                                              | 502570-0893;5025700893 | CONNECTOR; FEMALE; SMT; MICROSD CARD CONNECTOR; RIGHT ANGLE; 10PINS                                                                                                                                                                             |            |
| 18       | JU1                           | -         | 1     | PCC03SAAN                                                                                       | SULLINS                                                  | PCC03SAAN              | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                                                                                        |            |
| 19       | JU8                           | -         | 1     | TSW-113-07-T-T                                                                                  | SAMTEC                                                   | TSW-113-07-T-T         | CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; STRAIGHT; 39PINS ;                                                                                                                                                                       |            |
| 20       | JU12                          | -         | 1     | TSW-104-07-L-S                                                                                  | SAMTEC                                                   | TSW-104-07-L-S         | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                                                                                                                                                               |            |
| 21       | JU13                          | -         | 1     | OSTTA024163                                                                                     | ON-SHORE TECHNOLOGY INC.                                 | OSTTA024163            | CONNECTOR; FEMALE; THROUGH HOLE; 5.08MM TERM BLOCK CONNECTOR; STRAIGHT; 2PINS; -30 DEGC TO +105 DEGC                                                                                                                                            |            |
| 22       | JU_CANH, JU_CANL              | -         | 2     | PBC03SAAN                                                                                       | SULLINS                                                  | PBC03SAAN              | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                                                                                                                                |            |
| 23       | R1-R3                         | -         | 3     | CRCW0201300RFK                                                                                  | VISHAY DALE                                              |                        | 300 RES; SMT (0201); 300; 1%; +/-100PPM/DEGK; 0.05W                                                                                                                                                                                             |            |
| 24       | R4                            | -         | 1     | CRCW040226K1FK                                                                                  | VISHAY DALE                                              | 26.1K                  | RESISTOR; 0402; 26.1K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                                                                                       |            |
| 25       | R5, R6                        | -         | 2     | CRCW060360R4FK                                                                                  | VISHAY DALE                                              |                        | 60.4 RESISTOR; 0603; 60.4 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                                                    |            |
| 26       | R7                            | -         | 1     | CRCW121060R4FKEAHP                                                                              | VISHAY DRALORIC                                          |                        | 60.4 RES; SMT (1210); 60.4R; 1%; +/-100PPM/DEGK; 0.75W                                                                                                                                                                                          |            |
| 27       | R8, R10, R12, R16             | -         | 4     | CRCW04021K80FK; RC0402FR-071K8L                                                                 | VISHAY DALE;YAGEO PHICOMP                                | 1.8K                   | RESISTOR, 0402, 1.8K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                                                                       |            |
| 28       | R9, R11, R13, R14             | -         | 4     | CRCW04023K30FK                                                                                  | VISHAY DALE                                              | 3.3K                   | RESISTOR, 0402, 3.3K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                                                                       |            |
| 29       | R17                           | -         | 1     | CRCW0201100KFK                                                                                  | VISHAY DALE                                              | 100K                   | RESISTOR; 0201; 100K OHM; 1%; 100PPM; 0.05W; THICK FILM                                                                                                                                                                                         |            |
| 30       | R18-R20                       | -         | 3     | RC0201JR-070RL                                                                                  | YAGEO                                                    |                        | 0 RESISTOR; 0201; 0 OHM; 0%; JUMPER; 0.05W; THICK FILM                                                                                                                                                                                          |            |
| 31       | TP17, TP19                    | -         | 2     | 5011                                                                                            | KEYSTONE                                                 | N/A                    | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                                                         |            |
| 32       | U1                            | -         | 1     | MAX33012EASA+                                                                                   | MAXIM                                                    | MAX33012EASA+          | EVKIT PART - IC; TXRX; +5V; 5MBPS CAN TRANSCEIVER WITH +/-65V FAULT PROTECTION FAULT DETECTION AND REPORTING; +/-30V CMR AND +/-25KV ESD PROTECTION; PACKAGE OUTLINE DRAWING: 21-0041; LAND PATTERN NUMBER: 90-0096; PACKAGE CODE: S8+4; NSOIC8 |            |
| 33       | U2                            | -         | 1     | MAX14932CASE+                                                                                   | MAXIM                                                    | MAX14932CASE+          | IC; DISO; 4-CHANNEL; 2.75KVRMS DIGITAL ISOLATOR; NSOIC16                                                                                                                                                                                        |            |
| 34       | VDD_EXT                       | -         | 1     |                                                                                                 | 5010 KEYSTONE                                            | N/A                    | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                                                                                           |            |
| 35       | PCB                           | -         | 1     | MAX33012ESHIELD                                                                                 | MAXIM                                                    | PCB                    | PCB:MAX33012ESHIELD                                                                                                                                                                                                                             | -          |
| 36       | C8                            | DNP       | 0     | NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050BA; CGA2B2C0G1H101J050BA | KEMET;NIC COMPONENTS CORP.; YAGEO PHICOMP;MURATA;TDK;TDK | 100PF                  | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                                                                                       |            |
| 37 TOTAL | R15                           | DNP       | 0 60  | N/A                                                                                             | N/A                                                      | OPEN                   | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                                                                                                                |            |

## MAX33012E Shield Schematic

<!-- image -->

## MAX33012E Shield PCB Layout Diagrams

MAX33012E Shield-Top Silkscreen

<!-- image -->

MAX33012E Shield-Top

<!-- image -->

MAX33012E Shield-Internal 2

<!-- image -->

MAX33012E Shield-Internal 3

<!-- image -->

│

## MAX33012E Shield PCB Layout Diagrams (continued)

MAX33012E Shield-Bottom

<!-- image -->

MAX33012E Shield-Bottom Silkscreen

<!-- image -->

│

## MAX33012E Shield

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 11/19           | Initial release          | -               |
|                 1 | 4/21            | Added MAX33011E to title | All             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX33011E/MAX33012E