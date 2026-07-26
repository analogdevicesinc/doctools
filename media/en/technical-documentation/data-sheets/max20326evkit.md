<!-- lastmod 2022-08-03 -->
## MAX20326 Evaluation Kit

## General Description

The MAX20326 evaluation kit (EV kit) provides a convenient way to evaluate the MAX20326 dual precision bus accelerator IC. The EV kit breaks out the pins of the IC to test points enabling easy application and probing of signals.

## Features

- Evaluates Communication Bus Acceleration
- Operates with I 2 C, MDIO, and 1-Wire ® Communication
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- EV kit board containing a MAX20326 IC

Ordering Information appears at end of data sheet.

1-Wire is a registered trademark of Maxim Integrated Products, Inc.

Evaluates: MAX20326

## Quick Start

## Required Equipment

- MAX20326 EV kit
- Power supply capable of supplying 1.4V to 5.5V
- Multimeter
- I 2 C, MDIO, or 1-Wire master and slave devices
- Oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Initiate read/write sequences between the master and slave devices.
- 2) Use the oscilloscope to view the low-to-high transitions of the communication line(s).
- 3) Verify that shunts are installed on jumpers JU5 and JU6 (see Table 1 for jumper settings).
- 4) Apply a bus voltage between 1.4V and 5.5V to V CC  to match the communication bus voltage.
- 5) Disconnect any pullup resistors on the communication lines  and connect the lines to TP1 (IOVCCA) and/or TP3 (IOVCCB).
- 6) Initiate read/write sequences between the master and slave devices.
- 7) Use the oscilloscope to view the low-to-high transitions of either line. Note that the rising waveform accelerates when the rising edge reaches approximately 0.5V.

<!-- image -->

## MAX20326 Evaluation Kit

## Detailed Description

The  MAX20326  EV  kit  provides  a  convenient  way  to evaluate  the  MAX20326  dual  precision  bus  accelerator IC.  The  IC  functions  as  an  accelerator  for  open-drain communication  lines,  with  two  available  channels.  This makes  it  ideal  for  I 2 C  and  1-Wire  buses  under  heavy capacitive load.

Table 1. Default Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION             |
|----------|------------------|-------------------------|
| JU1      | Installed        | Connects R1 to VL       |
| JU1      | Not installed*   | No connection to VL     |
| JU2      | Installed        | Connects R2 to VL       |
| JU2      | Not installed*   | No connection to VL     |
| JU3      | Installed        | Connects R1 to VCC      |
| JU3      | Not installed*   | No connection to VCC    |
| JU4      | Installed        | Connects R2 to VCC      |
| JU4      | Not installed*   | No connection to VCC    |
| JU5      | Installed*       | Connects TP1 to IOVCCA  |
| JU5      | Not installed    | No connection to IOVCCA |
| JU6      | Installed*       | Connects TP3 to IOVCCB  |
| JU6      | Not installed    | No connection to IOVCCB |

*Default position.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20326EVKIT# | EV Kit |

#Denotes RoHS compliant.

## Internal Pullup

The IC contains internal pullup resistors on the IOVCCA and  IOVCCB  lines  that  eliminate  the  need  for  external components.

Evaluates: MAX20326

│

## MAX20326 EV Kit Bill of Materials

| DESIGNATOR    | DNI/DNP*   |   QTY | VALUE               | MFG PART #          | MFG.                       | DESCRIPTION                                                                                                              |
|---------------|------------|-------|---------------------|---------------------|----------------------------|--------------------------------------------------------------------------------------------------------------------------|
| C1            | -          |     1 | 1UF                 | GRM188R60J105KA01   | MURATA                     | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R;              |
| C2, C3        | DNP        |     0 | OPEN                | N/A                 | N/A                        | PACKAGE OUTLINE 0805 NON-POLAR CAPACITOR                                                                                 |
| JU1-JU6       | -          |     6 | PEC02SAAN           | PEC02SAAN           | SULLINS                    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                |
| R1, R2        | DNP        |     0 | OPEN                | N/A                 | N/A                        | PACKAGE OUTLINE 0805 RESISTOR                                                                                            |
| SU1-SU6       | -          |     6 | STC02SYAN           | STC02SYAN           | SULLINS ELECTRONIC S CORP. | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL  |
| TP1, TP3      | -          |     2 | N/A                 | 5013                | KEYSTONE                   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| TP2, TP4, TP6 | -          |     3 | N/A                 | 5011                | KEYSTONE                   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
| TP5, TP7      | -          |     2 | N/A                 | 5010                | KEYSTONE                   | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                       |
| U1            | -          |     1 | -                   | MAX20326            | MAXIM                      | EVKIT PART-IC; DUAL PRECISION BUS ACCELERATOR; DFNFC 1.2MM X 1.2MM X 0.60MM                                              |
| -             | -          |     1 | PCB: MAX20326 EVKIT | PCB: MAX20326 EVKIT | MAXIM                      | PCB: MAX20326                                                                                                            |

TOTAL

22

*Note:

DNI = Do not install; DNP = Do not procure.

Evaluates: MAX20326

## MAX20326 EV Kit Schematic

<!-- image -->

## MAX20326 EV Kit PCB Layout Diagrams

MAX20326 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX20326 EV Kit PCB Layout -Top Layer

<!-- image -->

MAX20326 EV Kit PCB Layout -Bottom Layer

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX20326