<!-- lastmod 2022-08-02 -->
## MAX14882 Evaluation Kit

## General Description

The MAX14882 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the functionality of the MAX14882 isolated controller area network (CAN) transceiver. The EV kit operates from a single 3.3V supply and features an on-board isolated power supply to power the secondary side of the circuit.

## Features

- Operates from a Single 3.3V Supply
- Terminal Block Connectors for Easy RS-485/RS-422 Evaluation
- 5000V RMS  Isolation for 60s
- Fully Assembled and Tested

Evaluates: MAX14882

## Quick Start

## Required Equipment

- MAX14882 EV kit
- 3.3V, 500mA DC power supply
- Signal/function generator
- Oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

- 1) Set the DC power supply to 3.3V.
- 2) Connect the DC power supply to the 3.3V test point (T15). Connect the ground terminal to the GND testpoint (T14).
- 3) Ensure that the jumpers are in their default positions (see Table 1).
- 4) Turn on the power supply.
- 5) Connect the oscilloscope to the CANH and CANL test points (T12 and T13).
- 6) Set the signal/function generator to output a 500kHz 0-to-3.3V square wave.
- 7) Connect the signal/function generator to the TXD test point (T7).
- 8) Verify that the CANH and CANL outputs switch as the signal toggles.

Ordering Information appears at end of data sheet.

<!-- image -->

## Detailed Description of Hardware

The  MAX14882  EV  kit  is  a  fully  assembled  and  tested circuit board for evaluating the MAX14882 isolated CAN transceiver (U1). The EV kit is powered from a single 3.3V power supply.

## External Power Supply

The  power  on  the  EV  kit  is  derived  from  a  single  3.3V source.  Connect  an  external  supply  to  the  +3.3V  test point (T15) to supply the 3.3V to the logic-side (A) of the circuit.  The  MAX14882  drives  the  on-board  transformer 1CT:2.4CT to generate the supply voltage needed on the isolated side of the transceiver.

## Table 1. Jumper Table (J1-J5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                 |
|----------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2*             | V LDO is connected to the output of the transformer circuit.                                                                                                                |
| J1       | 2-3              | V LDO is connected to ground. Connect an external 5V to V DDB to power the iso- lated side of the MAX14882.                                                                 |
| J2       | 1-2              | POL is connected to V DDA .                                                                                                                                                 |
| J2       | 2-3*             | POL is connected to GNDA.                                                                                                                                                   |
| J3       | Open             | On-board termination network is not connected to CANH. Open jumpers J3 and J4 to disable on-board termination between CANH and CANL.                                        |
| J3       | Closed*          | On-board termination network is connected between CANH and CANL. Close J4 to enable split termination with the capacitor to GNDB. Open J4 for resistive termina- tion only. |
| J4       | Open             | Split termination capacitor is not connected to GNDB. Open J3 and J4 to disable the on-board termination between CANH and CANL.                                             |
| J4       | Closed*          | Split termination capacitor is conneced to the GNDB.                                                                                                                        |
| J5       | 1-2              | TXD is connected to V DDA .                                                                                                                                                 |
| J5       | 2-3*             | TXD is connected to GNDA.                                                                                                                                                   |

*Default position.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14882EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX14882

To  use  an  external  supply  on  the  isolated  side  of  the board, remove the shunt on the J1 jumper and apply the voltage to the V LDO  test point (T8).

## Evaluating the Isolated CAN Interface

The  MAX14882  EV  kit  includes  test  points  to  access CANH (T12) and CANL (T13) for easy evaluation. To verify operation in a CAN system, connect the transceiver to the network using the P3 terminal block and use the TXD (T7) and RXD (T4) test points, or the P2 jumper pad, to connect the device to a logic controller.

│

## MAX14882 EV Kit Bill of Materials

|   ITEM | REF_DES               | DNI/DNP   |   QTY | MFGPART #                                                          | MANUFACTURER                | VALUE         | DESCRIPTION                                                                                                                |
|--------|-----------------------|-----------|-------|--------------------------------------------------------------------|-----------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------|
|      1 | C1, C4, C7            | -         |     3 | 8.85E+11                                                           | WURTH ELECTRONICS INC       | 0.1UF         | CAP; SMT (0603); 0.1UF; 10%; 25V; X7R; CERAMIC CHIP                                                                        |
|      2 | C2, C6, C8            | -         |     3 | GRM188R71E105KA12D; CGA3E1X7R1E105K; TMK107B7105KA; 06033C105KAT2A | MURATA;TDK;TAIYO YUDEN;AVX  | 1UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                   |
|      3 | C3, C5                | -         |     2 | GRM21BR61E106K; C2012X5R1E106K125AB; C2012X5R1E106K                | MURATA;TDK;TDK              | 10UF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X5R                          |
|      4 | C9                    | -         |     1 | C0603C470J5GAC; 06035A470JAT2A                                     | KEMET;AVX                   | 47PF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 47PF; 50V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                           |
|      5 | D1, D2                | -         |     2 | MBR0520                                                            | MICRO COMMERCIAL COMPONENTS | MBR0520       | DIODE; SCH; SCHOTTKY RECTIFIER; SMT (SOD-123); PIV=20V; IF=0.5A; -55 DEGC TO +150 DEGC                                     |
|      6 | J1, J2, J5            | -         |     3 | 61300311121                                                        | WURTH ELECTRONICS INC       | 61300311121   | CONNECTOR; MALE; THROUGH HOLE; 2.54MM PIN HEADER; STRAIGHT; 3PINS                                                          |
|      7 | J3, J4                | -         |     2 | PBC02SAAN                                                          | SULLINS ELECTRONICS CORP.   | PBC02SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                  |
|      8 | P3                    | -         |     1 | 1935187                                                            | PHOENIX CONTACT             | 1935187       | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 4PINS                                                     |
|      9 | R2, R3                | -         |     2 | CRCW080560R4FK                                                     | VISHAY DALE                 | 60.4          | RESISTOR; 0805; 60.4 OHM; 1%; 100PPM; 0.125W; THICK FILM                                                                   |
|     10 | T2, T3, T10, T11, T14 | -         |     5 | 5011                                                               | N/A                         | 5011          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;    |
|     11 | T4, T6, T7, T12, T13  | -         |     5 | 5014                                                               | N/A                         | 5014          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
|     12 | T8, T9, T15           | -         |     3 | 5010                                                               | N/A                         | 5010          | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE                                                                          |
|     13 | TX1                   | -         |     1 | TGMR-1464V6LF                                                      | HALO ELECTRONICS, INC       | TGMR-1464V6LF | TRANSFORMER; SMT; 1:2.4; POWER TRANSFORMER; DRAFT DATASHEET ONLY                                                           |
|     14 | U1                    | -         |     1 | MAX14882AWE+                                                       | MAXIM                       | MAX14882AWE+  | EVKIT PART-IC; RV57; PACKAGE OUTLINE DRAWING: 21-0042; LAND PATTERN DRAWING: 90-0107; PACKAGE CODE: W16+10; WSOIC16 300MIL |
|     15 | PCB                   | -         |     1 | MAX14882                                                           | MAXIM                       | PCB           | PCB:MAX14882                                                                                                               |
|     16 | C10                   | DNP       |     0 | B32620A0472J                                                       | EPCOS                       | 4700PF        | CAPACITOR; THROUGH HOLE-RADIAL LEAD; POLYPROPYLENE; 4700pF; 1000V; TOL=5%; TG=-55degC TO +105degC                          |
|     17 | P2                    | DNP       |     0 | PBC06SAAN                                                          | SULLINS ELECTRONICS CORP.   | PBC06SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                           |
|     18 | R1                    | DNP       |     0 | CRCW060349R9FK                                                     | VISHAY DALE                 | 49.9          | RESISTOR; 0603; 49.9 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                    |

TOTAL

35

## MAX14882 EV Kit Schematic

<!-- image -->

## MAX14882 EV Kit PCB Layout Diagrams

MAX14882 EV Kit-Top Silkscreen

<!-- image -->

MAX14882 EV Kit-Internal

<!-- image -->

Evaluates: MAX14882

MAX14882 EV Kit-Top

<!-- image -->

MAX14882 EV Kit-Internal 3

<!-- image -->

│

## MAX14882 EV Kit PCB Layout Diagrams (continued)

MAX14882 EV Kit-Bottom Silkscreen

<!-- image -->

MAX14882 EV Kit-Bottom

<!-- image -->

## MAX14882 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX14882