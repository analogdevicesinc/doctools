<!-- lastmod 2022-08-02 -->
## MAX14878EVKIT# Evaluation Kit

## General Description

The  MAX14878EVKIT#  evaluation  kit  (EV  kit)  is  a  fully assembled  and  tested  PCB  that  demonstrates  the  functionality of the MAX14878AWA+ isolated CAN transceiver. The EV kit operates from a single 3.3V supply and features an on-board isolated power supply to power the secondary side of the circuit.

## Features

- Operates from a Single 3.3V Supply
- Terminal Block Connector for Easy CAN Evaluation
- 3500VRMS Isolation for 60s
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX14878EVKIT# EV kit
- 3.3V, 500mA DC power supply
- Signal/function generator
- Oscilloscope

## Startup Procedure

The EV kit is fully assembled and tested.  Follow the steps below to verify board operation.

- 1) Set the DC power supply to 3.3V.
- 2) Connect the DC power supply to the V DDA  test point (TP3). Connect the ground terminal to the GNDA test point (TP4).
- 3) Ensure that the jumpers are in their default positions (see Table 1).
- 4) Turn on the power supply.
- 5) Connect the oscilloscope to the CANH and CANL test points  (TP8 and TP9).
- 6) Set the signal/function generator to output a 500kHz 0V-to-3.3V square wave.
- 7) Connect the signal/function generator to the TXD test point (TP2).
- 8) Verify that the CANH and CANL outputs switch as the signal toggles.

Ordering Information appears at end of data sheet.

<!-- image -->

Evaluates: MAX14878

(MAX14878AWA+)

## Detailed Description of Hardware

The MAX14878EVKIT#  EV kit is a fully assembled and tested circuit board for evaluating the MAX14878 isolated CAN transceiver (U1). The EV kit is powered from a single 3.3V power supply.

## External Power Supply

The  power  on  the  EV  kit  is  derived  from  a  single  3.3V source. Connect an external supply to the V DDA  test point (TP3) to supply the 3.3V to the logic-side (A) of the circuit. The  on-board  MAX258  transformer  driver  and  external transformer (T1) generate an isolated supply for powering the isolated side (B) of the board. The MAX8881 generates a regulated 5V for the B-side of the board.

To  use  an  external  supply  on  the  isolated  side  of  the board, remove the shunt on the J5 jumper and apply the voltage to the V DDB  test point (TP6).

## Table 1. Jumper Table (J1-J10)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                              |
|----------|------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| J3       | Open             | On-board termination is not connected to CANH. Open J3 and J6 to disable the on-board termination between CANH and CANL.                 |
| J3       | Closed*          | On-board termination is connected between CANH and CANL.                                                                                 |
| J5       | Open             | V DDB is not powered by the on-board isolated power circuit.                                                                             |
| J5       | Closed*          | V DDB is powered by the on-board isolated power circuit.                                                                                 |
| J6       | Open             | Split termination capacitor is not connected to CANH and CANL. Open J3 and J6 to disable the on-board termination between CANH and CANL. |
| J6       | Closed*          | Split termination capacitance is connected to between CANH/CANL and GND.                                                                 |

*Default position.

## Evaluates: MAX14878 (MAX14878AWA+)

## Evaluating the Isolated CAN Interface

The MAX14878EVKIT# EV kit includes test points to access CANH (TP8) and CANL (TP9) for easy evaluation. To verify operation in a CAN system, connect the transceiver to  the  network  using  the  J2  terminal  block  and  use  the TXD and RXD test points (TP1 and TP2, respectively) to connect the board to a logic controller.

## External Protection

For  harsh  industrial  environments,  external  protection might be necessary to protect the CAN transceiver during normal operation. The MAX14878EVKIT# EV kit includes pads for additional on-board protection that can be used when  evaluating  the  device  in  a  CAN  network.  Solder diodes to the D3 and D4 TVS diode pads to add additional protection on the CANH and CANL lines when needed.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14878EVKIT# | EV Kit |

#Denotes RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.t

│

## MAX14878EVKIT# EV Kit Bill of Materials

| ITEM     | REF_DES                   | DNI/DNP   | QTY      | MFG PART #                                                                                                     | MANUFACTURER                              | VALUE          | DESCRIPTION                                                                                                                                       |
|----------|---------------------------|-----------|----------|----------------------------------------------------------------------------------------------------------------|-------------------------------------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| 1        | C1, C6, C9-C11            | -         | 5        | GRM188R61C106MA73                                                                                              | MURATA                                    | 10UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 16V; TOL=20%; MODEL=GRM SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                                        |
| 2        | C2, C5                    | -         | 2        | C0402C104J4RAC; GCM155R71C104JA55                                                                              | KEMET;MURATA                              | 0.1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                 |
| 3        | C7                        | -         | 1        | C1005X7R1H473K; CGA2B3X7R1H473K050BB; GCM155R71H473KE02                                                        | TDK;TDK;MURATA                            | 0.047UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.047UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                              |
| 4        | C8                        | -         | 1        | C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K080AC; EMK107B7105KA; GCM188R71C105KA64; CGA3E1X7R1C105K080AC | KEMET;MURATA; TDK;TAIYO YUDEN; MURATA;TDK | 1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                  |
| 5        | D1, D2                    | -         | 2        | B230A-13-F                                                                                                     | DIODES INCORPORATED                       | B230A-13-F     | DIODE; SCH; SMT (DO-214AA); PIV=100V; IF=2A; -65 DEGC TO +150 DEGC                                                                                |
| 6        | J2                        | -         | 1        | OSTTC042162                                                                                                    | ON-SHORE TECHNOLOGY INC                   | OSTTC042162    | CONNECTOR; FEMALE; THROUGH HOLE; TERMINAL BLOCK ONE PIECE WIRE PROTECTOR; COLOR BLUE; RIGHT ANGLE; 4PINS                                          |
| 7        | J3, J5, J6                | -         | 3        | TSW-102-23-G-S                                                                                                 | SAMTEC                                    | TSW-102-23-G-S | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +125 DEGC                                                                       |
| 8        | MH1-MH4                   | -         | 4        | 9032                                                                                                           | KEYSTONE                                  | 9032           | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                         |
| 9        | R2, R3                    | -         | 2        | CRCW060360R4FK                                                                                                 | VISHAY DALE                               | 60.4           | RESISTOR; 0603; 60.4 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                           |
| 10       | R4                        | -         | 1        | RC0402JR-070RL; CR0402-16W-000RJT                                                                              | YAGEO PHYCOMP; VENKEL LTD.                | 0              | RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                                             |
| 11       | R6                        | -         | 1        | CRCW060310K0FK; ERJ-3EKF1002                                                                                   | VISHAY DALE; PANASONIC                    | 10K            | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                |
| 12       | T1                        | -         | 1        | TGMR-H560V8LF                                                                                                  | HALO ELECTRONICS INC                      | TGMR-H560V8LF  | TRANSFORMER; SMT; 1:1:2:2; ISOLATION MODULE                                                                                                       |
| 13       | TP1, TP2, TP8, TP9        | -         | 4        | 5014                                                                                                           | KEYSTONE                                  | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                          |
| 14       | TP3, TP6                  | -         | 2        | 5010                                                                                                           | KEYSTONE                                  | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                             |
| 15       | TP4, TP5, TP7, TP10, TP11 | -         | 5        | 5011                                                                                                           | KEYSTONE                                  | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                           |
| 16       | U1                        | -         | 1        | MAX14878AWA+                                                                                                   | MAXIM                                     | MAX14878AWA+   | EVKIT PART - IC; TXRX; 4KV ISOLATED CAN TRANSCEIVERS; WSOIC8; PACKAGE CODE: W8MS+1; PACKAGE OUTLINE NUMBER: 21-0262 ;LAND PATTERN NUMBER: 90-0258 |
| 17       | U2                        | -         | 1        | MAX258ATA+                                                                                                     | MAXIM                                     | MAX258ATA+     | IC; DRV; 0.5A; PUSH-PULL TRANSFORMER DRIVER FOR ISOLATED POWER SUPPLY; TDFN8-EP 2X3                                                               |
| 18       | U3                        | -         | 1        | MAX8881EUT50+                                                                                                  | MAXIM                                     | MAX8881EUT50   | IC; VREG; ULTRA-LOW-IQ, LOW-DROPOUT LINEAR REGULATORS WITH POK; SOT23-6                                                                           |
| 19       | PCB                       | -         | 1        | MAX14878                                                                                                       | MAXIM                                     | PCB            | PCB:MAX14878                                                                                                                                      |
| 20       | C3                        | DNP       | 0        | VJ2220Y332KXUSTX1                                                                                              | VISHAY VITRAMON                           | 3300PF         | CAP; SMT (2220); 3300PF; 10%; 250V; X7R; CERAMIC CHIP                                                                                             |
| 21       | C4                        | DNP       | 0        | GA352QR7GF102KW01                                                                                              | MURATA                                    | 1000PF         | CAP; SMT (2211); 1000PF; 10%; 250V; X7R; CERAMIC CHIP                                                                                             |
| 22       | D3, D4                    | DNP       | 0        | LCDA24C-1.TCT                                                                                                  | SEMTECH                                   | 24V            | DIODE; TVS; SMT (SOT-143); VRM=24V; IPP=10A                                                                                                       |
| 23       | J1                        | DNP       | 0        | TSW-104-23-G-S                                                                                                 | SAMTEC                                    | TSW-104-23-G-S | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 4PINS                                                                                              |
| 24       | R1                        | DNP       | 0        | CRCW12100000Z0                                                                                                 | VISHAY DALE                               | 0              | RESISTOR; 1210; 0 OHM; 0%; JUMPER; 0.5W; THICK FILM                                                                                               |
| TOTAL 39 | TOTAL 39                  | TOTAL 39  | TOTAL 39 | TOTAL 39                                                                                                       | TOTAL 39                                  | TOTAL 39       | TOTAL 39                                                                                                                                          |

Evaluates: MAX14878

(MAX14878AWA+)

## MAX14878EVKIT# EV Kit Schematic

<!-- image -->

## MAX14878EVKIT# Evaluation Kit

## MAX14878EVKIT# EV Kit PCB Layout Diagrams

<!-- image -->

MAX14878EVKIT# EV Kit-Top Silkscreen

<!-- image -->

MAX14878EVKIT# EV Kit-Bottom

MAX14878EVKIT# EV Kit-Top

<!-- image -->

MAX14878EVKIT# EV Kit-Bottom Silkscreen

<!-- image -->

│

Evaluates: MAX14878

(MAX14878AWA+)

## MAX14878EVKIT# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION       | PAGES CHANGED   |
|-------------------|-----------------|-------------------|-----------------|
|                 0 | 11/19           | Initial release   | -               |
|                .1 |                 | Updated the title | 1-6             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX14878

(MAX14878AWA+)