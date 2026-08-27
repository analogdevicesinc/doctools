<!-- lastmod 2022-08-02 -->
## MAX33040E Shield Evaluation Kit

## General Description

The MAX33040E shield evaluation kit (EV kit) is a fully assembled  and  tested  printed  circuit  board  (PCB)  that demonstrates  the  functionality  of  the  MAX33040E  controller  area  network  (CAN)  transceiver  with  ±40V  fault protection extended ±25V common-mode input range and ±40kV ESD human body model (HBM). The EV kit features a digital isolator, which is used as a level translator between the CAN transceiver and the controller interface.

## Features

- Easy Evaluation of the MAX33040E
- I/O Interface Compatibility from 1.71V to 5.5V
- Proven PCB Layout
- Mbed ™ /Arduino ®  Platform +
- Fully Assembled and Tested

## EV Kit Photo with Jumper and Test Point Positions

<!-- image -->

Arduino is a registered trademark of Arduino, LLC. Mbed is a trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

Evaluates: MAX33040E

## Quick Start

## Required Equipment

- MAX33040E shield EV kit
- 3.3V, 500mA DC power supply
- Signal/function generator that can generate 2.5MHz square wave signal
- Oscilloscope

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX33040E Shield Evaluation Kit

## Procedure

The  following procedure  can  be  used  to test the MAX33040E  shield  EV  kit  as  a  standalone  evaluation board.

- 1) Place the MAX33040E shield EV kit on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
- 2) Set all the jumpers to their default positions as shown in Table 1.
- 3) With +3.3V power supply disabled, connect the positive terminal to the VDD\_EXT test point and IOREF (pin 7 of P4).  Connect the negative terminal to the GND test point.
- 4) Connect the positive terminal of the function generator to the D1 (pin 2 of P2) and negative terminal to any GND test point on the shield. D1 is connected to MAX33040E's TXD pin through the digital isolator (U2).
- 5) Set function generator to the output a 2.5MHz square wave between 0V and 3.3V, and then enable function generator output.
- 6) Turn on the +3.3V DC power supply.
- 7) Connect an oscilloscope probe on D0 (pin 1 of P2) and verify the D0 output signal (RXD) matches the D1 input signal (TXD).

## Detailed Description of Hardware

The MAX33040E shield EV kit is a fully assembled and tested circuit board for evaluating the MAX33040E faultprotected high-speed CAN transceiver (U1) with ±40V of fault  protection. The EV kit  is designed to evaluate the MAX33040E alone or in a CAN system.  The MAX33040E shield EV kit enables Mbed or Arduino platform to communicate on a CAN bus, or it can be used as a standalone evaluation board.  The MAX14931 digital isolator is used as a level translator with a 1.71V to 5.5V supply range. Disconnect  jumper  JU15  to  apply  the  transmitter  input signal  directly  on  the  TXD  test  point.  Likewise,  disconnect jumper JU16 to measure the receiver output signal directly  on  the  RXD  test  point.  If  external  protection  is desired beyond the device's built-in protection, the EV kit also features footprints for TVS diodes (D1 and D2) that can be connected to the CANH and CANL lines using JU5 and JU6, respectively.

## Powering the Board

The MAX33040E shield EV kit requires two power supplies:  one  3V-3.6V  supply  for  the  MAX33040E  (U1) transceiver applied at the VDD\_EXT test point, and one 1.71V-5.5V supply for the microcontroller domain applied at the IOREF test point.  When the EV kit  board is used with  an  Arduino/Mbed  board,  the  power  supply  for  U1

## Evaluates: MAX33040E

can also come from the Arduino/Mbed board's 3.3V rail. Place the shunt on 2-3 position of JU11 to connect VDD to  the  VDD\_EXT  pin.  Place  the  shunt  of  JU11  on  1-2 position to connect VDD of U1 to the Arduino/Mbed 3.3V supply rail. In this scenario, IOREF is directly taken from the Arduino/Mbed header.

## On-Board Termination

A properly terminated CAN bus is terminated at each end with the characteristic impedance of the cable. For CAT5 or CAT6 cables, this is typically 120Ω on each end for a 60Ω load on the CAN driver. The MAX33040E shield EV kit  features  a  selectable  60Ω  load  and  a  60Ω-60Ω split termination  circuit  between  the  CANH  and  CANL  driver outputs.  The 60Ω-60Ω split termination has a footprint for a capacitor to reduce high-frequency noise and commonmode drift.  If the board is evaluated in a system and is connected at the end of the cable, then select the 120Ω (60Ω-60Ω  split)  termination.  The  termination  resistors on the MAX33040E shield EV kit changes to 60Ω with a 100pF load (using JU7 and JU8), to simulate a complete system load during evaluation.

## TXD and RXD Configuration

Digital channels for TXD and RXD are selected through JU1. It consists of three columns and 16 rows. The columns labeled TXD and RXD are connected to MAX33040E through the digital isolator (MAX14931FASE+ (U2)).  The middle  column  is  the  digital  I/O  pins,  D0  to  D15,  from the Arduino/Mbed header. This provides flexibility for the user to select different resources on the microcontroller to transmit and receive signals to and from the CAN transceiver. Table 2 shows the list of JU1 jumper options.

## DB9 Connector

The MAX33040E shield EV kit has a DB9 connector to CANH and CANL (pins 7 and 2, respectively).

The MAX33040E shield EV kit allows multiple points of connection  to  the  MAX33040E  transceiver.  The  EV  kit board  can  be  placed  on  a  Arduino/Mbed-  compatible board to  connect  all  the  digital  pins  (TXD,  RXD,  STBY, SHDN) through the P1 and P2 headers. These signals can  also  be  connected  directly  at  their  respective  test points  on  the  board,  bypassing  the  digital  isolator  (U2). The  CANH,  CANL  signals  are  connected  to  a  terminal block  (JU13)  to  easily  connect  to  a  twisted  pair  cable. These signals are also routed to a DB9 connector (CANH and CANL on pins 7 and 2, respectively). Alternately, the CANH and CANL test points can be used.w

## SD Card

The MAX33040E shield EV kit has a microSD card socket for  easy  use  in  OBD  applications. The  microSD  card  is connected to D10-D13 to interface with the Arduino/Mbed board through the SPI interface.

│

## Table 1. Jumper Settings

| JUMPER      | SHUNT POSITION   | DESCRIPTION                                                     |
|-------------|------------------|-----------------------------------------------------------------|
| JU1         | -                | See Table 2                                                     |
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
| JU12        | Open             | Internal pullup for standby mode                                |
| JU14        | 1-2*             | Connects SHDN to U2                                             |
| JU14        | Open             | Disconnects SHDN from U2                                        |
| JU15        | 1-2*             | Connects TXD to U2                                              |
|             | Open             | Disconnects TXD from U2                                         |
| JU16        | 1-2*             | Connects RXD to U2                                              |
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

Evaluates: MAX33040E

## Table 2. TXD and RXD Jumper Setting

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
| MAX33040ESHLD# | Shield |

#Denotes RoHS compliance.

Evaluates: MAX33040E

## MAX33040E Shield EV Kit Bill of Materials

| ITEM        | REF_DES                          | DNI/DNP   | QTY   | MFG PART #                                                                                                      | MANUFACTURER                                               | VALUE                  | DESCRIPTION                                                                                                                                                                                                 |
|-------------|----------------------------------|-----------|-------|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1           | C1-C3                            | -         | 3     | C0402C104J4RAC; GCM155R71C104JA55                                                                               | KEMET;MURATA                                               | 0.1UF                  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                           |
| 2           | C4                               | -         | 1     | C0402X7R160-103JNP; X7R0402CTT; 0402YC103JAT2A                                                                  | VENKEL LTD; KOA SPEER ELECTRONICS INC; AVX                 | 0.01UF                 | CAPACITOR; SMT; 0402; CERAMIC; 0.01uF; 16V; 5%; X7R; -55degC to + 125degC; 0 +/-15% degC MAX.                                                                                                               |
| 3           | C6                               | -         | 1     | C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050BA; CGA2B2C0G1H101J050BA | KEMET; NIC COMPONENTS CORP.; YAGEO PHICOMP;MURATA; TDK;TDK | 100PF                  | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                                                   |
| 4           | C7, C8                           | -         | 2     | GRM21BR61A106KE19; ECJ-2FB1A106; CL21A106KPCLQNC; GRM219R61A106KE44                                             | MURATA;PANASONIC; SAMSUNG ELECTRONICS; MURATA              | 10UF                   | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                            |
| 5           | CANH, CANL, RXD, SHDN, STBY, TXD | -         | 6     | 5012                                                                                                            | KEYSTONE                                                   | N/A                    | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                     |
| 6           | J3                               | -         | 1     | 502570-0893;5025700893                                                                                          | MOLEX;MOLEX                                                | 502570-0893;5025700893 | CONNECTOR; FEMALE; SMT; MICROSD CARD CONNECTOR; RIGHT ANGLE; 10PINS                                                                                                                                         |
| 7           | J7                               | -         | 1     | 182-009-113R531                                                                                                 | NORCOMP                                                    | 182-009-113R531        | CONNECTOR; MALE; THROUGH HOLE; D-SUBMINIATURE CONNECTOR; RIGHT ANGLE; 9PINS                                                                                                                                 |
| 8           | JU1                              | -         | 1     | TSW-116-07-T-T                                                                                                  | SAMTEC                                                     | TSW-116-07-T-T         | CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; STRAIGHT; 48PINS                                                                                                                                     |
| 9           | JU5, JU6, JU9, JU10, JU14-JU20   | -         | 11    | PBC02SAAN                                                                                                       | SULLINS ELECTRONICS CORP.                                  | PBC02SAAN              | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                                                                   |
| 10          | JU7, JU8                         | -         | 2     | PBC03SAAN                                                                                                       | SULLINS                                                    | PBC03SAAN              | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                                                                                            |
| 11          | JU11                             | -         | 1     | PCC03SAAN                                                                                                       | SULLINS                                                    | PCC03SAAN              | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                                                    |
| 12          | JU12                             | -         | 1     | TSW-104-07-L-S                                                                                                  | SAMTEC                                                     | TSW-104-07-L-S         | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                                                                                                                           |
| 13          | JU13                             | -         | 1     | OSTTA024163                                                                                                     | ON-SHORE TECHNOLOGY INC.                                   | OSTTA024163            | CONNECTOR; FEMALE; THROUGH HOLE; 5.08MM TERM BLOCK CONNECTOR; STRAIGHT; 2PINS; -30 DEGC TO +105 DEGC                                                                                                        |
| 14          | P1                               | -         | 1     | SSQ-110-24-G-S                                                                                                  | SAMTEC                                                     | SSQ-110-24-G-S         | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 10PINS ;                                                                                                                                |
| 15          | P2, P4                           | -         | 2     | SSQ-108-24-G-S                                                                                                  | SAMTEC                                                     | SSQ-108-24-G-S         | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 8PINS ;                                                                                                                                 |
| 16          | P3                               | -         | 1     | SSQ-106-24-G-S                                                                                                  | SAMTEC                                                     | SSQ-106-24-G-S         | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 6PINS ;                                                                                                                                 |
| 17          | R2, R3                           | -         | 2     | CRCW060360R4FK                                                                                                  | VISHAY DALE                                                | 60.4                   | RESISTOR; 0603; 60.4 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                     |
| 18          | R4                               | -         | 1     | CRCW121060R4FKEAHP                                                                                              | VISHAY DRALORIC                                            | 60.4                   | RES; SMT (1210); 60.4R; 1%; +/-100PPM/DEGK; 0.75W                                                                                                                                                           |
| 19          | R5                               | -         | 1     | ERJ-2RKF3922                                                                                                    | PANASONIC                                                  | 39.2K                  | RESISTOR; 0402; 39.2K OHM; 1%; 100PPM; 0.10W; METAL FILM                                                                                                                                                    |
| 20          | R6, R8, R10, R12                 | -         | 4     | CRCW04021K80FK; RC0402FR-071K8L                                                                                 | VISHAY DALE; YAGEO PHICOMP                                 | 1.8K                   | RESISTOR, 0402, 1.8K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                                   |
| 21          | R7, R9, R11, R13                 | -         | 4     | CRCW04023K30FK                                                                                                  | VISHAY DALE                                                | 3.3K                   | RESISTOR, 0402, 3.3K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                                   |
| 22          | TP8, TP9                         | -         | 2     | 5011                                                                                                            | KEYSTONE                                                   | N/A                    | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                     |
| 23          | U1                               | -         | 1     | MAX33040EAKA+                                                                                                   | MAXIM                                                      | MAX33040EAKA+          | EVKIT PART - IC; MAX33040EAKA+; +3.3V; 5MBPS CAN TRANSCEIVER WITH +/-40V FAULT PROTECTION; +/-25VCMR AND +/-25KV ESD; PACKAGE OUTLINE DRAWING: 21-0078; PACKAGE CODE: K8CN+2; LAND PATTERN DRAWING: 90-0176 |
| 24          | U2                               | -         | 1     | MAX14931FASE+                                                                                                   | MAXIM                                                      | MAX14931FASE+          | IC; DISO; 3/1 CHANNEL; 150MBPS; DEFAULT LOW; 2.75KVRMS DIGITAL ISOLATOR; NSOIC16 150MIL                                                                                                                     |
| 25 26       | VDD_EXT PCB                      | - -       | 1 1   | 5010 MAX33040ESHIELD                                                                                            | KEYSTONE MAXIM                                             | N/A PCB                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL; PCB:MAX33040ESHIELD                                                                                   |
|             |                                  | DNP       | 0     | C1005X7R1E473K050BC; GRM155R71E473K;                                                                            |                                                            |                        |                                                                                                                                                                                                             |
| 27          | C5                               |           | 0     | GCM155R71E473KA55                                                                                               | TDK;MURATA;MURATA                                          | 0.047UF                | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.047UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC                                                                                                                        |
| 28 29 TOTAL | D1, D2 R1                        | DNP DNP   | 0     | SM15T30CA N/A 54                                                                                                | ST MICROELECTRONICS N/A                                    | 25.6V OPEN             | DIODE; TVS; SMC (DO-214AB); VRM=25.6V; IPP=36A RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                             |

Evaluates: MAX33040E

## MAX33040E Shield EV Kit Schematics

<!-- image -->

## MAX33040E Shield EV Kit PCB Layouts

MAX33040E Shield Component Placement Guide-Top Silkscreen

<!-- image -->

MAX33040E Shield PCB Layout-Bottom

<!-- image -->

MAX33040E Shield PCB Layout-Top

<!-- image -->

MAX33040E Shield Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitry and speci¿cations without notice at any time.

│

Evaluates: MAX33040E