<!-- lastmod 2022-08-02 -->
## MAX149X2 Evaluation Kit

## General Description

The MAX149X2 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the functionality of the MAX14943 isolated RS-485/PROFIBUS transceiver. The EV kit operates from a single 3.3V supply and features an on-board isolated power supply to power the secondaryside of the circuit.

The  MAX149X2  EV  kit  comes  with  the  MAX14943GWE+ installed, but can also be used to evaluate the pin-compatible MAX14940, MAX14946, and MAX14949 ICs.

## Features

- Operates from a Single 3.3V Supply
- Terminal Block Connectors for Easy RS-485/ PROFIBUS Evaluation
- 5000V RMS  Isolation for 60s
- Fully Assembled and Tested
- Proven PCB Layout

Ordering Information appears at end of data sheet.

## Table 1. Jumper Settings (J1-J6)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                   |
|----------|------------------|---------------------------------------------------------------|
| J1       | 1-2              | Receiver is disabled. RXD is high impedance.                  |
| J1       | 2-3*             | Receiver is enabled. RXD is active.                           |
| J2       | 1-2*             | Driver is enabled. DEM is high.                               |
| J2       | 2-3              | Driver is disabled. DEM is low.                               |
| J3       | Open*            | DE and RE are not connected together.                         |
| J3       | Closed           | DE and RE are connected together.                             |
| J4       | Open*            | A and B are not connected through the on-board 120Ω resistor. |
| J4       | Closed           | Connects the on-board 120Ω resistor between A and B.          |

*Default position.

Evaluates: MAX14940/MAX14943/

MAX14946/MAX14949

## Quick Start

## Required Equipment

- MAX149X2 EV kit
- 3.3V, 1A DC power supply
- Signal/function generator
- Oscilloscope

## Startup Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Set the DC power supply to 3.3V and connect the DC power supply between the EV kits VDDA and GNDA connectors of the EV kit.
- 2) Ensure that J2 and J3 are in their default positions (see Table 1).
- 3) Turn on the power supply.
- 4) Set the signal/function generator to output a 100kHz 0 to 3V square wave. Note: Set the signal/function generator to operate with a high-impedance load. If needed, the R1 pad is available to add a 50Ω impedance to ground.
- 5) Connect the signal/function generator to the TXD test point.
- 6) Verify that the A and B outputs switch as the signal toggles.

<!-- image -->

## MAX149X2 Evaluation Kit

## Detailed Description of Hardware

The MAX149X2 EV kit is a fully assembled and tested circuit board  for  evaluating  the  MAX14943  isolated  RS-485/ Profibus transceiver (U1). The EV kit has been designed to  allow  for  evaluating  the  IC  alone  or  in  a  standard RS-485 configuration. The EV kit is powered from a single 3.3V power supply.

## External Power Supply

The  power  on  the  EV  kit  is  derived  from  a  single  3.3V source. Connect an external supply from GNDA to either the VDDA test point or P1 connector to supply the 3.3V to the logic side (A) of the circuit. The integrated push-pull transformer driver and external transformer (TX1) generate an  isolated  supply  for  powering  the  (B)  isolated  side  of the board.

## Evaluating the Isolated RS-485 Interface

## Driver and Receiver Enable Selection

The  EV  kit  features  three  jumpers  (J1,  J2,  and  J3)  to enable/disable  the  driver  and  receiver  outputs.  Set  J1 to 2-3 to enable the receiver. Set J2 to 1-2 to enable the driver. To actively control both enables, remove J1 and J2 and close J3, which connects DE and RE together.

## Table 2. Transformer Selection

| MANUFACTURER/PART NUMBER   | TURNS RATIO   |   ISOLATION VOLTAGE (V RMS ) | A-SIDE SUPPLY (V)   | CAN BE USED WITH MAXIM PART NUMBERS   |
|----------------------------|---------------|------------------------------|---------------------|---------------------------------------|
| HALO TGMS-1440V6LF         | 1CT: 1.33CT   |                         2750 | 5V                  | MAX14940, MAX14946                    |
| HALO TGMS-1464V6LF         | 1CT:2.4CT     |                         2750 | 3.3V                | MAX14940, MAX14946                    |
| HALO TGMR-1440V6LF         | 1CT:1.33CT    |                         5000 | 5V                  | MAX14943, MAX14949                    |
| HALO TGMR-1464V6LF         | 1CT:2.4CT     |                         5000 | 3.3V                | MAX14943, MAX14949                    |
| WURTH 750315226            | 1CT:1.3CT     |                         2750 | 5V                  | MAX14940, MAX14946                    |
| WURTH 750315228            | 1CT: 2CT      |                         2750 | 3.3V                | MAX14940, MAX14946                    |
| WURTH 750315230            | 1CT:1.3CT     |                         5000 | 5V                  | MAX14943, MAX14949                    |
| WURTH 750315232            | 1CT: 2CT      |                         5000 | 3.3V                | MAX14943, MAX14949                    |

│

## Evaluates: MAX14940/MAX14943/ MAX14946/MAX14949

## Resistors R2 - R4 Configuration

For  end-of-the-line  transceivers,  close  J4  to  connect  a 120Ω resistor (R3) between the A and B RS-485 I/Os  on the IC.

Pullup and pulldown resistors are generally used on the receiver inputs to guarantee a known state in the event that  all  nodes  on  the  bus  are  in  receive  mode,  or  the cable becomes disconnected. The exact value for these resistors varies with the application. Pads are provided for pullup (R2) and pulldown (R4) resistors for the A-B lines, although the use of these resistors is purely optional. Note that the MAX14943 features true fail-safe receiver inputs that  ensure  RXD  is  high  when  the  receiver  inputs  are shorted, open, or connected to an idle bus.

## Selecting a Transformer

Table 2 is a list of transformers designed to operate with the device family. Select the transformer that best meets the performance requirements of the end application. All transformers in Table 2 can be used on the EV kit.

## Component List, PCB Layout, and Schematic

See the following links for component information, PCB layout diagrams, and schematics:

- MAX149X2 EV BOM
- MAX149X2 EV PCB Layout
- MAX149X2 EV Schematic

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX149X2EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX149X2 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserves the right to change the circuitr\ and speci¿cations without notice at an\ time.

│

Evaluates: MAX14940/MAX14943/

MAX14946/MAX14949

D

C

B

A

8

VDDA

VDDA

T1

P1

P2

8

1

2

1

3

2

4

6

5

T2

GNDA

T3

IN

IN

IN

IN

RXD

RE

TXD

DE

7

7

RXD

T4

RE

T5

DE

T6

TXD

T7

VDDA

J1

1

3

VDDA

J2

1

3

2

2

J3

6

6

VDDA

C1

0.1UF

RXD

RE

DE

TXD

R1

OPEN

C2

1UF

IN

IN

IN

IN

VDDA

C3

10UF

2

1

4

5

6

7

8

3

5

TX1

TGMR-1464V6LF

1

6

6

1

2

2

5

5

3

4

3

4

U1

MAX14943GWE+

TD2

VLDO

TD1

VDDA

RXD

RE

DE

TXD

GNDA

VDDB

A

B

DEM

GNDB

GNDB

GNDB

5

11

16

12

13

10

14

9

15

D1

D2

C4

0.1UF

4

C5

10UF

VLDO

C6

1UF

IN

IN

IN

4

A

B

DEM

C7

0.1UF

VDDB

C8

1UF

3

VDDB

3

R2

OPEN

J4

R3

120

R4

OPEN

2

VDDB

1

3

2

4

6

5

T13

GNDB

T14

PROJECT TITLE:

MAX149X2 EVKIT

DRAWING TITLE:

SIZE

\_

B B

HARDWARE NUMBER:

ENGINEER:

2

A

B

DEM

P3

VLDO

VDDB

IN

IN

IN

VLDO

T8

VDDB

T9

A

B

T11

DEM

T12

T10

DRAWN BY:

TEMPLATE REV:

1.5

1

1

DATE:

04/08/2015

REV:

A

SHEET 2 OF 2

D

C

B

A

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

| TITLE: Bill of Materials   |
|----------------------------|
| DATE: 04/08/2015           |
| DESIGN: max149x2_evkit_a   |

|   ITEM | QTY REF DES        | MFG PART #                                                                            | MANUFACTURER                  | VALUE                                                      | DESCRIPTION                                                                                                                                                     |
|--------|--------------------|---------------------------------------------------------------------------------------|-------------------------------|------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 | 2 C1, C7           | C0603C104K4RAC; GCM188R71C104KA37; C1608X7R1C104K; GRM188R71C104K; C0603X7R160-104KNE | KEMET/MURATA/T DK/VENKEL LTD. | 0.1UF                                                      | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; NOT RECOMMENDED FOR NEW DESIGN USE 20-000u1-01                      |
|      2 | 3 C2, C6, C8       | GRM188R71E105KA12D; CGA3E1X7R1E105K                                                   | MURATA                        | 1UF                                                        | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                      |
|      3 | 2 C3, C5           | GRM21BR61E106K; C2012X5R1E106K125AB; C2012X5R1E106K                                   | MURATA/TDK                    | 10UF                                                       | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X5R                                                               |
|      4 | 1 C4               | C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K                                     | KEMET/MURATA/T DK             | 0.1UF                                                      | CAPACITOR; SMT; 0603; CERAMIC; 0.1uF; 25V; 10%; X7R; -55degC to + 125degC; +/-15% from - 55degC to +125degC; NOT RECOMMENDED FOR NEW DESIGN USE - 20-000u1-01   |
|      5 | 2 D1, D2           | MBR0520                                                                               | GENERIC PART                  | MBR0520                                                    | DIODE; SCH; SCHOTTKY RECTIFIER; SMT (SOD- 123); PIV=20V; IF=0.5A; -55 DEGC TO +150 DEGC                                                                         |
|      6 | 2 J1, J2           | PEC03SAAN                                                                             | SULLINS                       | PEC03SAAN                                                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                       |
|      7 | 2 J3, J4           | PEC02SAAN                                                                             | SULLINS                       | PEC02SAAN                                                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                       |
|      8 | 1 P1               | 1935161                                                                               | PHOENIX CONTACT               | 1935161                                                    | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 2PINS                                                                                          |
|      9 | 2 P2, P3           | 1935200                                                                               | PHOENIX CONTACT               | 1935200                                                    | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 6PINS                                                                                          |
|     10 | 1 R3               | CRCW0603120RJN                                                                        | VISHAY DALE                   | 120                                                        | RESISTOR; 0603; 120 OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                                          |
|     11 | 2 SU1, SU2         | STC02SYAN                                                                             | SULLINS ELECTRONICS CORP.     | STC02SYAN                                                  | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                                         |
|     12 | 3 T1, T8, T9       | 5010                                                                                  | ?                             | 5010 TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE     | 5010 TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE                                                                                                          |
|     13 | 4 T2, T3, T13, T14 | 5011                                                                                  | ?                             | 5011                                                       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN |
|     14 | 7 T4-T7, T10-T12   |                                                                                       |                               | LENGTH=0.445IN; BOARD HOLE=0.063IN;                        | LENGTH=0.445IN; BOARD HOLE=0.063IN;                                                                                                                             |
|        |                    | 5014 ?                                                                                | 5014 ?                        | 5014 PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN | 5014 PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN                                                                                                      |
|     15 | 1 TX1              | TGMR-1464V6LF                                                                         | HALO ELECTRONICS, INC         | TGMR- 1464V6LF                                             | TRANSFORMER; SMT; 1:2.4; POWER TRANSFORMER; DRAFT DATASHEET ONLY                                                                                                |

| 16                   | 1                    | U1                   | MAX14943GWE+         | MAXIM                | MAX14943G WE+        | EVKIT PART-IC; PACKAGE CODE: W16M-9; OUTLINE DRAWING NO.: 21-0042; LAND PATTERN DRAWING NO.: 90-0107; WSOIC16 300MIL   |
|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|------------------------------------------------------------------------------------------------------------------------|
| 17                   | 1                    |                      | MAX149x2             | MAXIM                | PCB                  | PCB: MAX149x2                                                                                                          |
| TOTAL                | 37                   |                      |                      |                      |                      |                                                                                                                        |
| DO NOT PURCHASE(DNP) | DO NOT PURCHASE(DNP) | DO NOT PURCHASE(DNP) | DO NOT PURCHASE(DNP) | DO NOT PURCHASE(DNP) | DO NOT PURCHASE(DNP) | DO NOT PURCHASE(DNP)                                                                                                   |
| ITEM                 | QTY                  | REF DES              | MFG PART #           | MANUFACTURER         | VALUE                | DESCRIPTION                                                                                                            |
| 1                    | 3                    | R1, R2, R4           | N/A                  | N/A                  | OPEN                 | PACKAGE OUTLINE 0603 RESISTOR - EVKIT                                                                                  |
| TOTAL                | 3                    |                      |                      |                      |                      |                                                                                                                        |