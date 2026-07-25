<!-- lastmod 2022-08-02 -->
## MAX148X2 Evaluation Kit

## General Description

The MAX148X2 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the functionality of the MAX14855 isolated RS-485/RS-422 transceiver. The EV kit  operates  from  a  single  3.3V  supply  and  features  an on-board isolated power supply to power the secondary side of the circuit.

The MAX148X2EVKIT may also be used to evaluate the MAX14853, MAX14857, and MAX14859.

## Features

- Operates from a Single 3.3V Supply
- Terminal Block Connectors for Easy RS-485/RS-422 Evaluation
- 2750V RMS  Isolation for 60s
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX148X2EVKIT
- 3.3V, 1A DC power supply
- Signal/function generator
- Oscilloscope

Evaluates: MAX14853/MAX14855/

MAX14857/MAX14859

## Startup Procedure

The EV kit is fully assembled and tested.  Follow the steps below to verify board operation.

- 1) Set the DC power supply to 3.3V and connect the DC power supply between the EV kit's V DDA  and GNDA connectors.
- 2) Ensure that J2 and J3 are in their default positions (see Table 1).
- 3) Turn on the power supply.
- 4) Set the signal/function generator to output a 1MHz 0-to-3V square wave. NOTE: Set the signal/function generator to operate with a high-impedance load. If the function generator does not have that option, the R1 pad is available to add a 50Ω impedance to ground.
- 5) Connect the signal/function generator to the TXD test point.
- 6) Verify that the Y and Z outputs switch as the signal toggles.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX148X2 Evaluation Kit

## Detailed Description of Hardware

The MAX148X2 EV kit is a fully  assembled  and  tested circuit  board  for  evaluating  the  MAX14855  isolated RS-485/RS-422  transceiver  (U1).  The  EV  kit  has  been designed to allow for evaluating the MAX14855 alone or in a standard RS-485 configuration. The EV kit is powered from a single 3.3V power supply.

## External Power Supply

The  power  on  the  EV  kit  is  derived  from  a  single  3.3V source.  Connect  an  external  supply  to  the  V DDA   test point or the P1 connector to supply the 3.3V to the logicside (A) of the circuit. The integrated push-pull transformer driver and external transformer, TX1, generate an isolated supply for powering the isolated side (B) of the board.

## Evaluating the Isolated RS-485/RS-422 Interface Driver and Receiver Enable Selection

The MAX148X2 EV kit features three jumpers (J1, J2, and J3) to enable/disable the driver and receiver outputs. Set J1 to 2-3 to enable the receiver. Set J2 to 1-2 to enable the  driver.  To  actively  control  both  enables,  remove  J1 and J2 and close J3, which connects DE and RE together.

## Table 1. Jumper Table (J1-J7)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                   |
|----------|------------------|---------------------------------------------------------------|
| J1       | 1-2              | Receiver is disabled. RXD is high impedance.                  |
| J1       | 2-3*             | Receiver is enabled. RXD is active.                           |
| J2       | 1-2*             | Driver is enabled.                                            |
| J2       | 2-3              | Driver is disabled.                                           |
| J3       | Open*            | DE and RE are not connected together.                         |
| J3       | Closed           | DE and RE are connected together.                             |
| J4       | Open*            | Y and Z are not connected through the on-board 120Ω resistor. |
| J4       | Closed           | Connects the on-board 120Ω resistor between Y and Z.          |
| J5       | Open*            | Z is not connected to B.                                      |
| J5       | Closed           | Z is connected to B (loopback mode).                          |
| J6       | Open*            | Y is not connected to A.                                      |
| J6       | Closed           | Y is connected to A (loopback mode).                          |
| J7       | Open*            | A and B are not connected through the on-board 120Ω resistor. |
| J7       | Closed           | Connects the on-board 120Ω resistor between A and B.          |

*Default position.

## Evaluates: MAX14853/MAX14855/ MAX14857/MAX14859

## Resistors R2-R4 Configuration

For  end-of-the-line  transceivers,  close  J4  and/or  J7  to connect a 120Ω termination resistor (R3) between the Y and Z driver outputs and/or (R6) the A and B inputs on the MAX14855.

Pullup and pulldown resistors are generally used on the receiver inputs to guarantee a known state in the event that all nodes on the bus are in receive mode, or the cable becomes disconnected. The exact value for these resistors will vary with the application. Pads are provided for pullup (R2,  R5)  and  pulldown  (R4,  R7)  resistors,  although  the use  of  these  resistors  is  purely  optional.  Note  that  the MAX14855 features true fail-safe receiver inputs, which ensures  that  RXD  is  high  when  the  receiver  inputs  are shorted, open, or connected to an idle bus.

## Selecting a Transformer

Table  2  is  a  list  of  transformers  designed  to  operate with  the  MAX14855  family.  Select  the  transformer  that best  meets  the  performance  requirements  of  the  end application. All transformers in Table 2 can be used on the MAX148X2 EV kit.

│

Table 2. Transformer Selection

| MANUFACTURER/PART NUMBER   | TURNS RATIO   |   ISOLATION VOLTAGE (V RMS ) | A-SIDE SUPPLY (V)   | CAN BE USED WITH MAXIM PART NUMBERS   |
|----------------------------|---------------|------------------------------|---------------------|---------------------------------------|
| HALO TGMS-1455V6LF         | 1CT: 1.5CT    |                         2750 | 3.3V                | MAX14853, MAX14855                    |
| HALO TGMS-1450V6LF         | 1CT:1CT       |                         2750 | 5V                  | MAX14853, MAX14855                    |
| HALO TGMR-1455V6LF         | 1CT:1.5CT     |                         5000 | 3.3V                | MAX14857,MAX14859                     |
| HALO TGMR-1450V6LF         | 1CT:1CT       |                         5000 | 5V                  | MAX14857,MAX14859                     |
| WURTH 750315227            | 1CT:1.7CT     |                         2750 | 3.3V                | MAX14853, MAX14855                    |
| WURTH 750315225            | 1CT:1.1CT     |                         2750 | 5V                  | MAX14853, MAX14855                    |
| WURTH 750315231            | 1CT:1.7CT     |                         5000 | 3.3V                | MAX14857,MAX14859                     |
| WURTH 750315229            | 1CT:1.1CT     |                         5000 | 5V                  | MAX14857,MAX14859                     |

## Component Information, PCB Layout, and Schematic

See the following links for component information, PCB layout diagrams, and schematic:

- MAX148X2 EV BOM
- MAX148X2 EV PCB Layout
- MAX148X2 EV Schematic

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX148X2EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX148X2 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                  | PAGES CHANGED   |
|-------------------|-----------------|------------------------------|-----------------|
|                 0 | 3/15            | Initial release              | -               |
|                 1 | 2/16            | Removed MAX14859 part number | 1, 3            |
|                 2 | 7/16            | Added MAX14859 part number   | 1, 3            |

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are imSOied. 0a[im ,ntegrated reserYes the right to change the circuitr\ and sSeci¿cations without notice at an\ time.

│

Evaluates: MAX14853/MAX14855/

MAX14857/MAX14859

TITLE:

Bill

of

Materials

DATE:

02/04/2015

DESIGN:

max148x2\_evkit\_a

## Revision\_Type : PRODUCTION

| ITEM QTY   | REF DES             | Var Status   | MAXINV                  | MFG PART #         | MANUFACTURER              | VALUE                                                                          | DESCRIPTION                                                                                                                                                          |
|------------|---------------------|--------------|-------------------------|--------------------|---------------------------|--------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | 2 C1,C7             | Pref         | 20 - 000U1 - 11         | C0603C104K4RAC     | KEMET                     | 0.1UF                                                                          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; MODEL=; TG= - 55 DEGC TO +125 DEGC; TC=X7R; NOT RECOMMENDED FOR NEW DESIGN USE 20 - 000u1 - 01             |
| 2          | 3 C2,C6,C8          | Pref         | 20 - 0001U - P6         | GRM188R71E105KA12D | MURATA                    | 1UF                                                                            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG= - 55 DEGC TO +125 DEGC; TC=X7R                                                         |
| 3          | 2 C3,C5             | Pref         | 20 - 0010U - E6         | GRM21BR61E106K     | MURATA                    | 10UF                                                                           | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 25V; TOL=10%; MODEL=; TG= 55 DEGC TO +125 DEGC; TC=X5R                                                                    |
| 4          | 1 C4                | Pref         | 20 - 000U1 - 03         | C0603C104K3RAC     | KEMET                     | 0.1UF                                                                          | CAPACITOR; SMT; 0603; CERAMIC; 0.1uF; 25V; 10%; X7R; - 55degC to + 125degC; +/ - 15% from - 55degC to +125degC; NOT RECOMMENDED FOR NEW DESIGN USE - 20 - 000u1 - 01 |
| 5          | 2 D1,D2             | Pref         | 30 - MBR0520 - 00       | MBR0520            |                           | MBR0520                                                                        | DIODE; SCH; SCHOTTKY RECTIFIER; SMT (SOD - 123); PIV=20V; IF=0.5A; - 55 DEGC TO +150 DEGC                                                                            |
| 6          | 2 J1,J2             | Pref         | 01 - PEC03SAAN3P - 21   | PEC03SAAN          | SULLINS                   | PEC03SAAN                                                                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; - 65 DEGC TO +125 DEGC                                                                                    |
| 7          | 5 J3 - J7           | Pref         | 01 - PEC02SAAN2P - 21   | PEC02SAAN          | SULLINS                   | PEC02SAAN                                                                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; - 65 DEGC TO +125 DEGC                                                                                    |
| 8          | 1 P1                | Pref         | 01 - 19351612P - 25     | 1935161            | PHOENIX CONTACT           | 1935161                                                                        | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 2PINS                                                                                               |
| 9          | 2 P2,P3             | Pref         | 01 - 19352006P - 25     |                    | 1935200 PHOENIX CONTACT   | 1935200 CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 6PINS | 1935200 CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 6PINS                                                                                       |
| 10         | 2 R3,R6             | Pref         | 80 - 0120R - 53         |                    |                           | 120 RESISTOR; 0603; 120 OHM; 5%; 200PPM; 0.10W; THICK FILM                     | 120 RESISTOR; 0603; 120 OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                                           |
| 11         | 2 SU1,SU2           | Pref         | 02 - JMPFSTC02SYAN - 00 | STC02SYAN          | SULLINS ELECTRONICS CORP. | STC02SYAN                                                                      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                                              |
| 12         | 3 T1,T8,T9          | Pref         | 02 - TPMINI5010 - 00    |                    | 5010 Keystone             | 5010                                                                           | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE                                                                                                                    |
| 13         | 4 T2,T3,T10,T11     | Pref         | 02 - TPMINI5011 - 00    |                    | 5011 Keystone             | 5011                                                                           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN      |
| 14         | 8 T4 - T7,T12 - T15 | Pref         | 02 - TPMINI5014 - 00    |                    | 5014 Keystone             | 5014                                                                           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN     |
| 15         | 1 TX1               | Pref         | 12 - TGMS1455V6LF - 09  | TGMS - 1455V6LF    | HALO ELECTRONICS, INC     | TGMS - 1455V6LF                                                                | TRANSFORMER; SMT; 1:1.5; POWER TRANSFORMER; DRAFT DATASHEET ONLY                                                                                                     |
| 16         | 1 U1                | Pref         | MAX14855                | MAX14855           | MAXIM                     | MAX14855                                                                       | EVKIT PART - IC; PACKAGE CODE: W16M+10; OUTLINE DRAWING NO.: 21 - 0042; LAND PATTERN DRAWING NO.: 90 - 0107; WSOIC16 300MIL                                          |
| 17         | 1                   | Pref         | EPCB148X2               | EPCB148X2          | MAXIM                     | PCB                                                                            | PCB: EPCB148X2                                                                                                                                                       |
| TOTAL      | 42                  |              |                         |                    |                           |                                                                                |                                                                                                                                                                      |

| DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)                  | DO NOT PURCHASE(DNP)   |
|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|---------------------------------------|------------------------|
| ITEM                   | REF DES                | Var Status             | MAXINV                 | MFG PART #             | MANUFACTURER           | VALUE                  | DESCRIPTION                           |                        |
|                        | 5 R1,R2,R4,R5,R 7      | DNP                    | N/A                    | N/A                    | N/A                    | OPEN                   | PACKAGE OUTLINE 0603 RESISTOR - EVKIT |                        |
| TOTAL                  | 5                      |                        |                        |                        |                        |                        |                                       |                        |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

P1

P2

<!-- image -->