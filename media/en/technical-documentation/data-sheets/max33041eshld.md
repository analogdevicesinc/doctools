<!-- lastmod 2022-08-04 -->
## MAX33041E Shield

## General Description

The MAX33041E shield is a fully assembled and tested printed  circuit  board  (PCB)  that  demonstrates  the  functionality of the MAX33041E controller area network (CAN) transceiver  with  ±40V  fault  protection,  extended  ±25V common-mode input range, and ±40kV ESD Human Body Model (HBM). The shield features a digital isolator, which is used as a level translator between the CAN transceiver and the controller interface.

## Features

- Easy Evaluation of the MAX33041E
- I/O Interface Compatibility from 1.71V to 5.5V
- Proven PCB Layout
- Mbed™/Arduino ®  Platform Compatible
- Fully Assembled and Tested

## EV Kit Photo with Jumper and Test Point positions

<!-- image -->

Arduino is a registered trademark of Arduino, LLC.

Mbed is a trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

Evaluates: MAX33041E

## Quick Start

## Required Equipment

- MAX33041E shield
- 3.3V, 500mA DC power supply
- Signal/function generator that can generate 2.5MHz square wave signal
- Oscilloscope

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX33041E Shield

## Procedure

The  following procedure  can  be  used  to test the MAX33041E shield as a standalone evaluation board.

- 1) Place the MAX33041E shield on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
- 2) Set all the jumpers to their default positions as shown in Table 1.
- 3) With +3.3V power supply disabled, connect the positive terminal to the VDD\_EXT test point and IOREF (pin 7 of P4). Connect the negative terminal to the GND test point.
- 4) Connect the positive terminal of the function generator to D1 (pin 2 of P2) and negative terminal to any GND test point on the shield. D1 is connected to MAX33041E's TXD pin through the digital isolator (U2).
- 5) Set function generator to the output a 2.5MHz square wave between 0V and 3.3V, and then enable function generator output.
- 6) Turn on the +3.3V DC power supply.
- 7) Connect an oscilloscope probe on D0 (pin 1 of P2) and verify the D0 output signal (RXD) matches the D1 input signal (TXD).

## Detailed Description of Hardware

The MAX33041E shield is a fully assembled and tested circuit  board  for  evaluating  the  MAX33041E  fault-protected  high-speed  CAN  transceiver  (U1)  with  ±40V  of fault  protection.  The  shield  is  designed  to  evaluate  the MAX33041E alone or in a CAN system. The MAX33041E shield  enables  Mbed  or  Arduino  platform  to  communicate on a CAN bus, or it can be used as a standalone evaluation board. The MAX14931 digital isolator is used as a level translator with a 1.71V to 5.5V supply range. Disconnect  jumper  JU15  to  apply  the  transmitter  input signal directly on the TXD test point. Likewise, disconnect the  jumper  JU16  to  measure  the  receiver  output  signal directly  on  the  RXD  test  point.  If  external  protection  is desired beyond the device's built-in protection, the shield also features footprints for TVS diodes (D1 and D2) that can be connected to the CANH and CANL lines using JU5 and JU6, respectively.

## Powering the Board

The  MAX33041E  shield  requires  two  power  supplies: one 3V-3.6V supply for the MAX33041E (U1) transceiver applied at the VDD\_EXT test point, and one 1.71V-5.5V supply  for  the  microcontroller  domain  applied  at  the IOREF test point. When the shield board is used with an Arduino/Mbed board, the power supply for U1 can also come  from  the  Arduino/Mbed  board's  3.3V  rail.  Place the shunt on 2-3 position of JU11 to connect VDD to the VDD\_EXT pin.  Place the shunt of JU11 on 1-2 position to connect VDD of U1 to the Arduino/Mbed 3.3V supply rail. In this scenario, IOREF is directly taken from the Arduino/ Mbed header.

## On-Board Termination

A properly terminated CAN bus is terminated at each end with the characteristic impedance of the cable. For CAT5 or  CAT6  cables,  this  is  typically  120Ω  on  each  end  for a  60Ω load on the CAN driver. The MAX33041E shield features  a  selectable  60Ω  load  and  a  60Ω-60Ω  split termination  circuit  between  the  CANH  and  CANL  driver outputs. The 60Ω-60Ω split termination has a footprint for a capacitor to reduce high-frequency noise and commonmode drift. If the board is evaluated in a system and is connected at the end of the cable, then select the 120Ω (60Ω-60Ω split) termination. The termination resistors on the MAX33041E shield should be changed to 60Ω with a 100pF load (using JU7 and JU8) to simulate a complete system load during evaluation.

## TXD and RXD Configuration

Digital channels for TXD and RXD are selected through JU1.  It consists of three columns and 16 rows. The columns labeled TXD and RXD are connected to MAX33041E through the digital isolator (MAX14931FASE+ (U2)). The middle  column  is  the  digital  I/O  pins,  D0  to  D15,  from the Arduino/Mbed header. This provides flexibility for the user to select different resources on the microcontroller to transmit and receive signals to and from the CAN transceiver. Table 2 shows the list of JU1 jumper options.

## DB9 Connector

The MAX33041E shield has a DB9 connector to CANH and CANL (pins 7 and 2, respectively).

The  MAX33041E  shield  allows  multiple  points  of  connection to the MAX33041E transceiver. The shield board can  be  placed  on  a  Arduino/Mbed-compatible  board  to connect  all  the  digital  pins  (TXD,  RXD,  STBY,  SHDN) through the P1 and P2 headers. These signals can also be connected directly at their respective test points on the board, bypassing the digital isolator (U2). The CANH and CANL signals are connected to a terminal block (JU13) to easily connect to a twisted pair cable. These signals are also routed to a DB9 connector (CANH and CANL on pins 7 and 2, respectively). Alternately, the CANH and CANL test points can be used.

## SD Card

The MAX33041E shield has a microSD card socket for easy use in OBD applications. The microSD card is connected  to  D10-D13  to  interface  with  the  Arduino/Mbed board through the SPI interface.

## MAX33041E Shield

Table 1. Default Jumper Settings

| JUMPER      | SHUNT POSITION   | DESCRIPTION                                                     |
|-------------|------------------|-----------------------------------------------------------------|
| JU1         | -                | Refer to Table 2                                                |
| JU5         | 1-2              | Connects TVS diode (optional, not populated) to CANH            |
| JU5         | Open*            | Disconnects TVS diode (optional, not populated) from CANH       |
| JU6         | 1-2              | Connects TVS diode (optional, not populated) to CANL            |
| JU6         | Open*            | Disconnects TVS diode (optional, not populated) to CANL         |
| JU7 and JU8 | 1-2              | Connects 120Ω between CANH and CANL                             |
| JU7 and JU8 | 2-3*             | Connects 60Ω between CANH and CANL                              |
| JU7 and JU8 | Open             | No load is connected between CANH and CANL                      |
| JU9         | 1-2*             | Connects SHDN to D7 of P2                                       |
| JU9         | Open             | Disconnects SHDN from D7 of P2                                  |
| JU10        | 1-2*             | Connects STBY to D6 of P2                                       |
| JU10        | Open             | Disconnects STBY from D6 of P2                                  |
| JU11        | 1-2              | VDD is shorted to 3.3V supply                                   |
| JU11        | 2-3*             | VDD is shorted to VDD_EXT supply                                |
| JU11        | Open             | VDD is open                                                     |
| JU12        | 1-2*             | Connects STBY to ground                                         |
| JU12        | 1-3              | Connects STBY to a 39.2kΩ resistor to ground                    |
| JU12        | 1-4              | Connects STBY to U2's OUTB1 pin used for Arduino/Mbed interface |
| JU12        | Open             | Internal pull up for standby mode                               |
| JU14        | 1-2*             | Connects SHDN to U2                                             |
| JU14        | Open             | Disconnects SHDN from U2                                        |
| JU15 JU16   | 1-2*             | Connects TXD to U2                                              |
| JU15 JU16   | Open             | Disconnects TXD from U2                                         |
|             | 1-2*             | Connects RXD to U2                                              |
|             | Open             | Disconnects RXD from U2                                         |
| JU17        | 1-2*             | Connects STBY to JU12                                           |
| JU17        | Open             | Disconnects STBY from JU12                                      |
| JU18        | 1-2*             | Connects CANH to JU5 and JU7                                    |
| JU18        | Open             | Disconnects CANH from JU5 and JU7                               |
| JU19        | 1-2*             | Connects CANL to JU6 and JU8                                    |
| JU19        | Open             | Disconnects CANL from JU6 and JU8                               |
| JU20        | 1-2*             | Connects VDD pin of U1 to VDD supply rail                       |
| JU20        | Open             | Disconnects VDD pin of U1 to VDD supply rail                    |

*Indicates default jumper state.

Evaluates: MAX33041E

## Table 2. TXD and RXD Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION         |
|----------|------------------|---------------------|
| JU1      | 1-2              | Connects TXD to D0  |
|          | 4-5*             | Connects TXD to D1  |
|          | 7-8              | Connects TXD to D2  |
|          | 10-11            | Connects TXD to D3  |
|          | 13-14            | Connects TXD to D4  |
|          | 16-17            | Connects TXD to D5  |
|          | 19-20            | Connects TXD to D6  |
|          | 22-23            | Connects TXD to D7  |
|          | 25-26            | Connects TXD to D8  |
|          | 28-29            | Connects TXD to D9  |
|          | 31-32            | Connects TXD to D10 |
|          | 34-35            | Connects TXD to D11 |
|          | 37-38            | Connects TXD to D12 |
|          | 40-41            | Connects TXD to D13 |
|          | 43-44            | Connects TXD to D14 |
|          | 46-47            | Connects TXD to D15 |
|          | 2-3*             | Connects RXD to D0  |
|          | 5-6              | Connects RXD to D1  |
|          | 8-9              | Connects RXD to D2  |
|          | 11-12            | Connects RXD to D3  |
|          | 14-15            | Connects RXD to D4  |
|          | 17-18            | Connects RXD to D5  |
|          | 20-21            | Connects RXD to D6  |
|          | 23-24            | Connects RXD to D7  |
|          | 26-27            | Connects RXD to D8  |
|          | 29-30            | Connects RXD to D9  |
|          | 32-33            | Connects RXD to D10 |
|          | 35-36            | Connects RXD to D11 |
|          | 38-39            | Connects RXD to D12 |
|          | 41-42            | Connects RXD to D13 |
|          | 44-45            | Connects RXD to D14 |
|          | 47-48            | Connects RXD to D15 |

*Indicates default jumper state.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX33041ESHLD# | Shield |

#Denotes RoHS compliance.

Evaluates: MAX33041E

## MAX33041E Shield

## MAX33041E Shield Bill of Materials

|   ITEM |   QTY | REF DES                          | MFG PART #                                                                                                      | DESCRIPTION                                                                                                             | MANUFACTURER                                               | STATUS   | VALUE                   |
|--------|-------|----------------------------------|-----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|----------|-------------------------|
|      1 |     3 | C1-C3                            | C0402C104J4RAC; GCM155R71C104JA55                                                                               | CAPACITOR; SMT (0402); ERAMIC CHIP; 0.1UF; 16V; TOL=5%; MODEL=; TG=- 55 DEGC TO +125 DEGC; TC=X7R                       | KEMET; MURATA                                              |          | 0.1UF                   |
|      2 |     1 | C4                               | C0402X7R160- 103JNP; X7R0402CTT; 0402YC103JAT2A                                                                 | CAPACITOR; SMT; 0402; CERAMIC; 0.01uF; 16V; 5%; X7R;-55degC to + 125degC; 0 +/-15% degC MAX.                            | VENKEL LTD;KOA SPEER ELECTRONICS INC;AVX                   |          | 0.01UF                  |
|      3 |     1 | C6                               | C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050BA; CGA2B2C0G1H101J050BA | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                               | KEMET; NIC COMPONENTS CORP.; YAGEO PHICOMP; MURATA;TDK;TDK |          | 100PF                   |
|      4 |     2 | C7, C8                           | GRM21BR61A106KE19; ECJ-2FB1A106; CL21A106KPCLQNC; GRM219R61A106KE44                                             | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=- 55 DEGC TO +85 DEGC; TC=X5R                       | MURATA;PANASONIC; SAMSUNG ELECTRONICS; MURATA              |          | 10UF                    |
|      5 |     6 | CANH, CANL, RXD, SHDN, STBY, TXD | 5012                                                                                                            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; | KEYSTONE                                                   |          | N/A                     |
|      6 |     1 | J3                               | 502570-0893;5025700893                                                                                          | CONNECTOR; FEMALE; SMT; MICROSD CARD CONNECTOR; RIGHT ANGLE; 10PINS                                                     | MOLEX;MOLEX                                                |          | 502570-0893; 5025700893 |
|      7 |     1 | J7                               | 182-009-113R531                                                                                                 | CONNECTOR; MALE; THROUGH HOLE; D-SUBMINIATURE CONNECTOR; RIGHTANGLE; 9PINS                                              | NORCOMP                                                    |          | 182-009-113R531         |
|      8 |     1 | JU1                              | TSW-116-07-T-T                                                                                                  | CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; STRAIGHT; 48PINS                                                 | SAMTEC                                                     |          | TSW-116-07-T-T          |
|      9 |    11 | JU5, JU6, JU9, JU10, JU14-JU20   | PBC02SAAN                                                                                                       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                               | SULLINS ELECTRONICS CORP.                                  |          | PBC02SAAN               |
|     10 |     2 | JU7, JU8                         | PBC03SAAN                                                                                                       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                        | SULLINS                                                    |          | PBC03SAAN               |

│

Evaluates: MAX33041E

## MAX33041E Shield

## MAX33041E Shield Bill of Materials (continued)

|   ITEM |   QTY | REF DES          | MFG PART #                      | DESCRIPTION                                                                                                             | MANUFACTURER               | STATUS   | VALUE          |
|--------|-------|------------------|---------------------------------|-------------------------------------------------------------------------------------------------------------------------|----------------------------|----------|----------------|
|     11 |     1 | JU11             | PCC03SAAN                       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                | SULLINS                    |          | PCC03SAAN      |
|     12 |     1 | JU12             | TSW-104-07-L-S                  | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                                       | SAMTEC                     |          | TSW-104-07-L-S |
|     13 |     1 | JU13             | OSTTA024163                     | CONNECTOR; FEMALE; THROUGH HOLE; 5.08MM TERM BLOCK CONNECTOR; STRAIGHT; 2PINS; -30 DEGC TO +105 DEGC                    | ON-SHORE TECHNOLOGY INC.   |          | OSTTA024163    |
|     14 |     1 | P1               | SSQ-110-24-G-S                  | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 10PINS ;                                            | SAMTEC                     |          | SSQ-110-24-G-S |
|     15 |     2 | P2, P4           | SSQ-108-24-G-S                  | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 8PINS ;                                             | SAMTEC                     |          | SSQ-108-24-G-S |
|     16 |     1 | P3               | SSQ-106-24-G-S                  | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 6PINS ;                                             | SAMTEC                     |          | SSQ-106-24-G-S |
|     17 |     2 | R2, R3           | CRCW060360R4FK                  | RESISTOR; 0603; 60.4 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                 | VISHAY DALE                |          | 60.4           |
|     18 |     1 | R4               | CRCW121060R4FKEAHP              | RES; SMT (1210); 60.4R; 1%; +/-100PPM/DEGK; 0.75W                                                                       | VISHAY DRALORIC            |          | 60.4           |
|     19 |     1 | R5               | ERJ-2RKF3922                    | RESISTOR; 0402; 39.2K OHM; 1%; 100PPM; 0.10W; METAL FILM                                                                | PANASONIC                  |          | 39.2K          |
|     20 |     4 | R6, R8, R10, R12 | CRCW04021K80FK; RC0402FR-071K8L | RESISTOR, 0402, 1.8K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                               | VISHAY DALE; YAGEO PHICOMP |          | 1.8K           |
|     21 |     4 | R7, R9, R11, R13 | CRCW04023K30FK                  | RESISTOR, 0402, 3.3K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                               | VISHAY DALE                |          | 3.3K           |
|     22 |     2 | TP8, TP9         | 5011                            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; | KEYSTONE                   |          | N/A            |

│

Evaluates: MAX33041E

## MAX33041E Shield Bill of Materials (continued)

|   ITEM |   QTY | REF DES   | MFG PART #                                             | DESCRIPTION                                                                                                                                                                                               | MANUFACTURER        | STATUS   | VALUE         |
|--------|-------|-----------|--------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|----------|---------------|
|     23 |     1 | U1        | MAX33041EASA+                                          | EVKIT PART - IC; MAX33041EASA+; +3.3V; 5MBPS CAN TRANSCEIVER WITH +/-40V FAULT PROTECTION; +/-25VCMR AND +/-40KV ESD; PACKAGE OUTLINE DRAWING: 21-0041; PACKAGE CODE: S8+4; LAND PATTERN DRAWING: 90-0096 | MAXIM               |          | MAX33041EASA+ |
|     24 |     1 | U2        | MAX14931FASE+                                          | IC; DISO; 3/1 CHANNEL; 150MBPS; DEFAULT LOW; 2.75KVRMS DIGITAL ISOLATOR; NSOIC16 150MIL                                                                                                                   | MAXIM               |          | MAX14931FASE+ |
|     25 |     1 | VDD_EXT   | 5010                                                   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                                                     | KEYSTONE            |          | N/A           |
|     26 |     1 | PCB       | MAX33041ESHIELD                                        | PCB:MAX33041ESHIELD                                                                                                                                                                                       | MAXIM               |          | PCB           |
|     27 |     0 | C5        | C1005X7R1E473K050BC; GRM155R71E473K; GCM155R71E473KA55 | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.047UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC                                                                                                                      | TDK;MURATA; MURATA  | DNP      | 0.047UF       |
|     28 |     0 | D1, D2    | SM15T30CA                                              | DIODE; TVS; SMC (DO- 214AB); VRM=25.6V; IPP=36A                                                                                                                                                           | ST MICROELECTRONICS | DNP      | 25.6V         |
|     29 |     0 | R1        | N/A                                                    | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                                                                          | N/A                 | DNP      | OPEN          |

│

Evaluates: MAX33041E

## MAX33041E Shield Schematics

<!-- image -->

Evaluates: MAX33041E

## MAX33041E Shield PCB Layouts

MAX33041E Shield PCB Layout-Top Silkscreen

<!-- image -->

MAX33041E Shield PCB Layout-Top

<!-- image -->

│

## MAX33041E Shield PCB Layouts (continued)

MAX33041E Shield PCB Layout-Bottom

<!-- image -->

MAX33041E Shield PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX33041E Shield

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitry and speci¿cations without notice at any time.

│

Evaluates: MAX33041E