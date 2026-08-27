<!-- lastmod 2022-08-02 -->
## MAX2202X Evaluation Kit

## General Description

The  MAX2202XEVKIT#  evaluation  kit  (EV  kit)  is  a  fully assembled  and  tested  PCB  that  demonstrates  the  functionality  of  the  MAX22028  isolated  RS-485  transceiver with AutoDirection. The EV kit operates from a single 3.3V supply and features an on-board isolated power supply to power the secondary side of the circuit.

The MAX2202X EV kit ships with the MAX22028 installed. The board can also be used to evaluate the MAX22025MAX22027 and the MAX22025F-MAX22028F.

## Features

- Operates from a Single 3.3V Supply
- Terminal Block Connector for Easy RS-485 Evaluation
- 3500VRMS Isolation for 60s
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX2202X EV kit
- 3.3V, 500mA DC power supply
- Signal/function generator
- Oscilloscope

## Evaluates: MAX22025 - MAX22028/ MAX22025F - MAX22028F

## Startup Procedure

The EV kit is fully assembled and tested.  Follow the steps below to verify board operation.

- 1) Set the DC power supply to 3.3V.
- 2) Connect the DC power supply to the V DDA  test point (TP1). Connect the ground terminal to the GNDA test point (TP2).
- 3) Ensure that the jumpers are in their default positions (see Table 1).
- 4) Turn on the power supply.
- 5) Connect the oscilloscope to the A and B test points (TP7 and TP6, respectively).
- 6) Set the signal/function generator to output a 100kHz 0V-to-3.3V square wave.
- 7) Connect the signal/function generator to the TXD test point (TP4).
- 8) Verify that the A and B outputs switch as the signal toggles.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX2202X Evaluation Kit

## Detailed Description of Hardware

The MAX2202X EV kit is a fully assembled and tested circuit board for evaluating the MAX2202X isolated RS-485 transceiver with AutoDirection control. The EV kit is powered from a single 3.3V power supply.

## Powering the MAX2202X EV Kit

The  power  on  the  EV  kit  is  derived  from  a  single  3.3V source. Connect an external supply to the V DDA  test point (TP1) to supply the 3.3V to the logic-side (A-side) of the circuit. The on-board MAX258 (U3) transformer driver and external  transformer  (T1)  generate  an  isolated  supply for  powering the isolated side (B-side) of the board. The MAX8881 (U4) generates a regulated 5V for the B-side of the board.

To  use  an  external  supply  on  the  isolated  side  of  the board, remove the shunt on the J3 jumper and apply the voltage to the V DDB  test point (TP8).

## Table 1. Jumper Table

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                  |
|----------|------------------|--------------------------------------------------------------|
| J2       | Open             | On-board termination is not connected between A and B.       |
| J2       | Closed*          | On-board termination is connected between A and B.           |
| J3       | Open             | V DDB is not powered by the on-board isolated power circuit. |
| J3       | Closed*          | V DDB is powered by the on-board isolated power circuit.     |

*Default position.

## Evaluates: MAX22025-MAX22028/ MAX22025F-MAX22028F

## Evaluating the Isolated RS-485 Interface

The MAX2202X EV kit includes test points to access A (TP7) and B (TP6) for easy evaluation. To verify operation in a RS-485 system, connect the transceiver to the network using the J1 terminal block and use the TXD and RXD test points (TP4 and TP5, respectively) to connect the  board  to  a  logic  controller. Alternatively,  connect  an external controller to drive TXD using the J7 SMA connector and connect the controller to RXD using the J6 SMA connector.

## External Protection

For  harsh  industrial  environments,  external  protection might be necessary to protect the RS-485 transceiver during high voltage transient events. The MAX2202X EV kit includes pads for additional on-board protection that can be used when evaluating the device in a RS-485 network. Solder a diode to the U2 pad to add additional protection on the A and B lines when needed.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX2202XEVKIT# | EV Kit |

#Denotes RoHS-compliance.

│

## MAX2202XEVKIT# EV Kit Bill of Materials

| ITEM REF_DES          | DNI/DNP QTY   | MFGPART#                                                                                                                     | MANUFACTURER                                | VALUE          | DESCRIPTION                                                                                                                                                                                        |
|-----------------------|---------------|------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 C1, C4, C7          | -             | 3 C0603C105K4RAC;GRM188R71C105KA12;C1608X7R1C105K080AC;EMK 107B7105KA;GCM188R71C105KA64;CGA3E1X7R1C105K080AC;0603YC 105KAT2A | KEMET;MURATA;TDK;TAIYO YUDEN;MURATA;TDK;AVX | 1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                   |
| 2 C2,                 | C3 -          | 2 CC0603KRX7R0BB104;GRM188R72A104KA35;GCJ188R72A104KA01;H MK107B7104KA;06031C104KAT2A;GRM188R72A104K                         | YAGEO;MURATA;MURATA;TAIYO YUDEN;AVX;MURATA  | 0.1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                        |
| 3 C6, C8-C11          | -             | 5 GRM188R61C106MA73                                                                                                          | MURATA                                      | 10UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 16V; TOL=20%; MODEL=GRM SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                         |
| 4 D1, D2              | -             | 2 B230A-13-F                                                                                                                 | DIODES INCORPORATED                         | B230A-13-F     | DIODE; SCH; SMT (DO-214AA); PIV=100V; IF=2A; -65 DEGC TO +150 DEGC                                                                                                                                 |
| 5 J1                  | -             | 1                                                                                                                            | 1935187 PHOENIX CONTACT                     | 1935187        | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 4PINS                                                                                                                             |
| 6 J2, J3              | -             | 2 TSW-102-23-G-S                                                                                                             | SAMTEC                                      | TSW-102-23-G-S | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +125 DEGC                                                                                                                        |
| 7 J6, J7              | -             | 2 142-0701-851                                                                                                               | JOHNSON COMPONENTS                          | 142-0701-851   | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                                                                                                        |
| 8 MH1-MH4             | -             | 4                                                                                                                            | 9032 KEYSTONE                               |                | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                                     |
| 9 R3, R5              | -             | 2 CRCW0603510RJN                                                                                                             | VISHAY DALE                                 |                | 510 RESISTOR; 0603; 510 OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                                                                         |
| 10 R4                 | -             | 1 CRCW0805120RFK                                                                                                             | VISHAY DALE                                 | 120            | RESISTOR; 0805; 120 OHM; 1%; 100PPM; 0.125W; THICK FILM                                                                                                                                            |
| 11 R6                 | -             | 1 CRCW25120000Z0EGHP                                                                                                         | VISHAY DRALORIC                             | 0              | RES; SMT (2512); 0; JUMPER; 1.5W                                                                                                                                                                   |
| 12 R7                 | -             | 1 RC0402JR-070RL; CR0402-16W-000RJT                                                                                          | YAGEO PHYCOMP;VENKEL LTD.                   | 0              | RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                                                                                              |
| 13 R8                 | -             | 1 CRCW060310K0FK;ERJ-3EKF1002                                                                                                | VISHAY DALE;PANASONIC                       | 10K            | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                 |
| 14 SU1, SU2           | -             | 2 QPC02SXGN-RC                                                                                                               | SULLINS ELECTRONICS CORP.                   | QPC02SXGN-RC   | CONNECTOR; FEMALE; 0.100IN CC; OPEN TOP; JUMPER; STRAIGHT; 2PINS                                                                                                                                   |
| 15 T1                 | -             | 1 TGMR-H560V8LF                                                                                                              | HALO ELECTRONICS INC                        | TGMR-H560V8LF  | TRANSFORMER; SMT; 1:1:2:2; ISOLATION MODULE                                                                                                                                                        |
| 16 TP1, TP8           | -             | 2                                                                                                                            | 5010 KEYSTONE                               | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                                              |
| 17 TP2, TP3, TP9-TP14 | -             | 8                                                                                                                            | 5011 KEYSTONE                               | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                            |
| 18 TP4-TP7            | -             | 4                                                                                                                            | 5014 KEYSTONE                               | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                           |
| 19 U1                 | -             | 1 MAX22028AWA+                                                                                                               | MAXIM                                       | MAX22028       | EVKIT PART - IC; MAX22028AWA+; COMPACT; ISOLATED HALF-DUPLEX RS-485/RS-422 TRANSCEIVERS WITH AUTO-DIRECTION; PACKAGE OUTLINE DRAWING: 21-0262; PACKAGE CODE: W8MS+1; PACKAGE LAND PATTERN: 90-0258 |
| 20 U2                 | -             | 1 SM712.TCT                                                                                                                  | SEMTECH                                     | SM712.TCT      | IC; PROT; ASYMMETRICAL TVS DIODE FOR EXTENDED COMMON-MODERS-485; SOT23-3                                                                                                                           |
| 21 U3                 | -             | 1 MAX258ATA+                                                                                                                 | MAXIM                                       | MAX258ATA+     | IC; DRV; 0.5A; PUSH-PULL TRANSFORMER DRIVER FOR ISOLATEDPOWER SUPPLY; TDFN8-EP 2X3                                                                                                                 |
| 22 U4                 | -             | 1 MAX8881EUT50+                                                                                                              | MAXIM                                       | MAX8881EUT50+  | IC; VREG; ULTRA-LOW-IQ, LOW-DROPOUT LINEAR REGULATORS WITH POK; SOT23-6                                                                                                                            |
| 23 PCB                | - DNP         | 1 MAX2202X 0 2220Y2K00104KXTWS2                                                                                              | MAXIM SYFER TECHNOLOGY                      | PCB            | CAP; SMT (2220); 0.1UF; 10%; 2000V; X7R; CERAMIC CHIP                                                                                                                                              |
| 24 C5 25 R1, R2       | DNP           | 0 CRCW080549R9FK;ERJ-6ENF49R9                                                                                                | VISHAY DALE;PANASONIC                       | 0.1UF          | PCB:MAX2202X                                                                                                                                                                                       |
|                       |               |                                                                                                                              |                                             | 49.9           | RESISTOR; 0805; 49.9 OHM; 1%; 100PPM; 0.125W; THICK FILM                                                                                                                                           |
| TOTAL                 |               | 49                                                                                                                           |                                             |                |                                                                                                                                                                                                    |

## MAX2202XEVKIT# EV Kit Schematic

<!-- image -->

## MAX2202X Evaluation Kit

MAX2202XEVKIT# EV Kit-Top Silkscreen

<!-- image -->

MAX2202XEVKIT# EV Kit-Layer 2

<!-- image -->

## Evaluates: MAX22025-MAX22028/ MAX22025F-MAX22028F

MAX2202XEVKIT# EV Kit-Top Layer

<!-- image -->

MAX2202XEVKIT# EV Kit-Layer 3

<!-- image -->

│

## MAX2202XEVKIT# EV Kit PCB Layout Diagrams (continued)

MAX2202XEVKIT# EV Kit-Bottom Layer

<!-- image -->

MAX2202XEVKIT# EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX2202X Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                              | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------|-----------------|
|                 0 | 9/19            | Initial release                                                                          | -               |
|                 1 | 11/19           | Updated the General Description section and replaced the Bill of Materials and Schematic | 1, 3-4          |
|                 2 | 5/20            | Updated the General Description section and parts evaluated in the title                 | 1-7             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VSHFL¿FDWLR

<!-- image -->

│

Evaluates: MAX22025-MAX22028/

MAX22025F-MAX22028F