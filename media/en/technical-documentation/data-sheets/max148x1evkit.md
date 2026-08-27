<!-- lastmod 2022-08-02 -->
## MAX148X1 Evaluation Kit

## General Description

The MAX148X1 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the functionality of the MAX14852 isolated RS-485/RS-422 transceiver. The EV kit operates from a single 3.3V supply and features an onboard isolated power supply to power the secondary-side of the circuit.

The MAX148X1 EV kit may also be used to evaluate the MAX14854, MAX14856, and the MAX14858.

## Features

- Operates From a Single 3.3V Supply
- Terminal Block Connectors for Easy RS-485/RS-422 Evaluation
- Up to 5000V RMS  Isolation for 60s
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX148X1 EV kit
- 3.3V, 1A DC power supply
- Signal/function generator
- Oscilloscope

Ordering Information appears at end of data sheet.

Evaluates: MAX14852/MAX14854/

MAX14856/MAX14858

## Startup Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

- 1) Set the DC power supply to 3.3V and connect the DC power supply between the EV kits V DDA  and GNDA connectors.
- 2) Ensure that all jumpers are in their default positions (see Table 1).
- 3) Turn on the power supply.
- 4) Set the signal/function generator to output a 100kHz 0-to-3V square wave. NOTE: Set the signal/function generator to operate with a high-impedance load. If needed, the R1 pad is available to add a 50Ω impedance to ground.
- 5) Connect the signal/function generator to the TXD test point.
- 6) Using the oscilloscope, verify that the Y and Z outputs switch as the signal toggles.

<!-- image -->

## Detailed Description of Hardware

The EV kit is a fully assembled and tested circuit board for  evaluating  the  MAX14852  isolated  RS-485/RS-422 transceiver (U2). The EV kit has been designed to allow for  evaluating  the  MAX14852  alone  or  in  a  standard RS-485 configuration. The EV kit is powered from a single 3.3V power supply.

## Powering the Board

The  power  on  the  EV  kit  is  derived  from  a  single  3.3V source. Connect an external supply from GNDA to either the V DDA  test point or P1 connector to supply the 3.3V to the logic-side (A) of the circuit.

An on-board MAX258 transformer driver (U1) and external transformer (TX1) generate an isolated supply for powering the (B) isolated side of the board. To disable the MAX258 circuit, connect jumper J1 to 2-3. To disconnect the output of the transformer circuit from the MAX14852 LDO input, remove the shunt on J5.

## Evaluating the Isolated RS-485 Interface

## Driver and Receiver Enable Selection

The  EV  kit  features  three  jumpers  (J2,  J3,  and  J4)  to enable/disable  the  driver  and  receiver  outputs.  Set  J2 to 2-3 to enable the receiver. Set J3 to 1-2 to enable the driver. To actively control both enables, remove J2 and J3 and close J4, which connects DE and RE together.

## Loopback Configuration

The  MAX14852  features  one  drive  channel  and  one receive channel. Driver outputs are Y and Z and receiver inputs are A and B. To configure the device for loopback testing,  close  J7  and  J8  to  connect  B  to  Z  and A  to  Y , respectively.

## Evaluates: MAX14852/MAX14854/ MAX14856/MAX14858

## Resistors R2 - R4 Configuration

For  end-of-the-line  transceivers,  close  J9  to  connect a  120Ω  termination  resistor  (R6)  between  the A  and  B RS-485 receiver inputs on the MAX14852.

Close  J6  to  connect  a  120Ω  termination  resistor  (R3) between the Y and Z driver outputs.

Pullup and pulldown resistors are generally used on the receiver inputs to guarantee a known state in the event that  all  nodes  on  the  bus  are  in  receive  mode,  or  the cable becomes disconnected. The exact value for these resistors will vary with the application. R2 and R4 pads are provided for pullup and pulldown resistors on the Y and Z lines.  R5 and R7 pads provide for pullup and pulldown resistors  on  the  A  and  B  lines,  if  needed.  The  use  of any  of  these  resistors  is  purely  optional.  Note  that  the MAX14852 features true fail-safe receiver inputs, which ensures  that  RXD  is  high  when  the  receiver  inputs  are shorted, open, or connected to an idle bus.

## MAX148X1 Evaluation Kit

## Table 1. Jumper Table (J1-J9)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                       |
|----------|------------------|---------------------------------------------------------------------------------------------------|
| J1       | 1-2              | MAX258 transformer driver is disabled.                                                            |
| J1       | 2-3*             | MAX258 transformer driver is enabled.                                                             |
| J2       | 1-2*             | RE is high. The RS-485 receiver is disabled.                                                      |
| J2       | 2-3              | RE is low. The RS-485 receiver is enabled.                                                        |
| J3       | 1-2*             | DE is high. The RS-485 driver outputs are enabled.                                                |
| J3       | 2-3              | DE is low. The RS-485 driver outputs are disabled.                                                |
| J4       | Open*            | DE and RE are not connected together.                                                             |
| J4       | Closed           | DE and RE are connected together.                                                                 |
| J5       | Open             | The output of the transformer circuit is not connected to VLDO.                                   |
| J5       | Closed*          | The output of the transformer circuit is connected to VLDO and powers the B-side of the MAX14852. |
| J6       | Open*            | Y and Z are connected through the on-board 120Ω termination resistor.                             |
| J6       | Closed           | Y and Z are not connected through the on-board termination resistor.                              |
| J7       | Open*            | B is not connected to Z.                                                                          |
| J7       | Closed           | B is connected to Z.                                                                              |
| J8       | Open*            | A is not connected to Y.                                                                          |
| J8       | Closed           | A is connected to Y.                                                                              |
| J9       | Open*            | A and B are connected through the on-board 120Ω termination resistor.                             |
| J9       | Closed           | A and B are not connected through the on-board termination resistor.                              |

Evaluates: MAX14852/MAX14854/

MAX14856/MAX14858

│

## Component Information, PCB Layout and Schematic

See the following links for component information, PCB layout diagrams, and schematic.

- MAX148X1 EV BOM
- MAX148X1 EV PCB
- MAX148X1 EV Schematic

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX148X1EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX148X1 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are imSlied. 0a[im ,ntegrated reserYes the right to change the circuitr\ and sSeci¿cations without notice at an\ time.

│

Evaluates: MAX14852/MAX14854/

MAX14856/MAX14858

TITLE:

Bill

of

Materials

DESIGN:

max148x1\_evkit\_a

| ITEM                                                                                                       | REF_DES                                                                                                    | DNI                                                                                                        | QTY                                                                                                        | MFG PART #                                                                                                 | MANUFACTURER                                                                                               | VALUE                                                                                                      | DESCRIPTION                                                                                                                 |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| 1 C1, C3, C6, C8 - 4 CGA3E1X7R1E105K MURATA 1UF SERIES; TG= - 55 DEGC TO +125 DEGC; TC=X7R C0603C104K4RAC; | 1 C1, C3, C6, C8 - 4 CGA3E1X7R1E105K MURATA 1UF SERIES; TG= - 55 DEGC TO +125 DEGC; TC=X7R C0603C104K4RAC; | 1 C1, C3, C6, C8 - 4 CGA3E1X7R1E105K MURATA 1UF SERIES; TG= - 55 DEGC TO +125 DEGC; TC=X7R C0603C104K4RAC; | 1 C1, C3, C6, C8 - 4 CGA3E1X7R1E105K MURATA 1UF SERIES; TG= - 55 DEGC TO +125 DEGC; TC=X7R C0603C104K4RAC; | 1 C1, C3, C6, C8 - 4 CGA3E1X7R1E105K MURATA 1UF SERIES; TG= - 55 DEGC TO +125 DEGC; TC=X7R C0603C104K4RAC; | 1 C1, C3, C6, C8 - 4 CGA3E1X7R1E105K MURATA 1UF SERIES; TG= - 55 DEGC TO +125 DEGC; TC=X7R C0603C104K4RAC; | 1 C1, C3, C6, C8 - 4 CGA3E1X7R1E105K MURATA 1UF SERIES; TG= - 55 DEGC TO +125 DEGC; TC=X7R C0603C104K4RAC; | 1 C1, C3, C6, C8 - 4 CGA3E1X7R1E105K MURATA 1UF SERIES; TG= - 55 DEGC TO +125 DEGC; TC=X7R C0603C104K4RAC;                  |
|                                                                                                            | 2 C2, C7                                                                                                   | -                                                                                                          |                                                                                                            | 2 GCM188R71C104KA37; C1608X7R1C104K; GRM188R71C104K; C0603X7R160 - 104KNE                                  | KEMET/MURATA/T DK/VENKEL LTD.                                                                              | 0.1UF                                                                                                      | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG= - 55 DEGC TO +125 DEGC; TC=X7R;                               |
| 3 C4,                                                                                                      | C10                                                                                                        | -                                                                                                          | 2                                                                                                          | GRM21BR61E106K; C2012X5R1E106K125AB; C2012X5R1E106K                                                        | MURATA/TDK                                                                                                 | 10UF                                                                                                       | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 25V; TOL=10%; MODEL=; TG= - 55 DEGC TO +125 DEGC; TC=X5R                         |
| 4                                                                                                          | C5                                                                                                         | -                                                                                                          | 1                                                                                                          | C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K                                                          | KEMET/MURATA/ TDK                                                                                          | 0.1UF                                                                                                      | CAPACITOR; SMT; 0603; CERAMIC; 0.1uF; 25V; 10%; X7R; - 55degC to + 125degC; +/ - 15% from - 55degC to +125degC;             |
| 5                                                                                                          | D1, D2                                                                                                     | -                                                                                                          | 2                                                                                                          | MBR0520                                                                                                    | GENERIC PART                                                                                               | MBR0520                                                                                                    | DIODE; SCH; SCHOTTKY RECTIFIER; SMT (SOD - 123); PIV=20V; IF=0.5A; - 55 DEGC TO +150 DEGC                                   |
| 6                                                                                                          | J1 - J3                                                                                                    | -                                                                                                          | 3                                                                                                          | PEC03SAAN                                                                                                  | SULLINS                                                                                                    | PEC03SAAN                                                                                                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                   |
| 7                                                                                                          | J4 - J9                                                                                                    | -                                                                                                          | 6                                                                                                          | PEC02SAAN                                                                                                  | SULLINS                                                                                                    | PEC02SAAN                                                                                                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                   |
| 8                                                                                                          | P1                                                                                                         | -                                                                                                          | 1                                                                                                          | 1935161                                                                                                    | PHOENIX CONTACT                                                                                            | 1935161                                                                                                    | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 2PINS                                                      |
| 9                                                                                                          | P2, P3                                                                                                     | -                                                                                                          | 2                                                                                                          | 1935200                                                                                                    | PHOENIX CONTACT                                                                                            | 1935200                                                                                                    | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 6PINS                                                      |
| 10                                                                                                         | R3, R6                                                                                                     | -                                                                                                          | 2                                                                                                          | CRCW0603120RJN                                                                                             | VISHAY DALE                                                                                                |                                                                                                            | 120 RESISTOR; 0603; 120 OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                  |
| 11                                                                                                         | SU1 - SU4                                                                                                  | -                                                                                                          | 4                                                                                                          | STC02SYAN                                                                                                  | SULLINS ELECTRONICS                                                                                        | CORP. STC02SYAN                                                                                            | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL     |
| 12                                                                                                         | T1, T9, T10                                                                                                | -                                                                                                          | 3                                                                                                          |                                                                                                            | 5010 ?                                                                                                     | 5010                                                                                                       | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE                                                                           |
| 13                                                                                                         | T2, T3, T11, T12                                                                                           | -                                                                                                          | 4                                                                                                          | 5011                                                                                                       | ?                                                                                                          | 5011                                                                                                       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;     |
| 14                                                                                                         | T4 - T8, T13 - T16                                                                                         | -                                                                                                          | 9                                                                                                          | 5014                                                                                                       | ?                                                                                                          | 5014                                                                                                       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;    |
| 15                                                                                                         | TX1                                                                                                        | -                                                                                                          | 1                                                                                                          | TGMS - 1455V6LF                                                                                            | HALO ELECTRONICS, INC                                                                                      | TGMS - 1455V6LF                                                                                            | TRANSFORMER; SMT; 1:1.5; POWER TRANSFORMER; DRAFT DATASHEET ONLY                                                            |
| 16                                                                                                         | U1                                                                                                         | -                                                                                                          | 1                                                                                                          | MAX258ATA+                                                                                                 | MAXIM                                                                                                      | MAX258ATA+                                                                                                 | IC; DRV; 0.5A; PUSH - PULL TRANSFORMER DRIVER FOR ISOLATED POWER SUPPLY; TDFN8 - EP 2X3                                     |
| 17                                                                                                         | U2                                                                                                         | -                                                                                                          | 1                                                                                                          | MAX14852GWE+                                                                                               | MAXIM                                                                                                      | MAX14852                                                                                                   | EVKIT PART - IC; PACKAGE CODE: W16M+10; OUTLINE DRAWING NO.: 21 - 0042; LAND PATTERN DRAWING NO.: 90 - 0107; WSOIC16 300MIL |
| 18                                                                                                         | R1, R2, R4, R5, R7                                                                                         | DNP                                                                                                        | 5                                                                                                          | N/A                                                                                                        | N/A                                                                                                        | OPEN                                                                                                       | PACKAGE OUTLINE 0603 RESISTOR - EVKIT                                                                                       |
| TOTAL 53                                                                                                   | TOTAL 53                                                                                                   | TOTAL 53                                                                                                   | TOTAL 53                                                                                                   | TOTAL 53                                                                                                   | TOTAL 53                                                                                                   | TOTAL 53                                                                                                   | TOTAL 53                                                                                                                    |

<!-- image -->

<!-- image -->

## TOP SILKSCREEN

TOP

<!-- image -->

<!-- image -->

<!-- image -->

## INTERNAL 2

<!-- image -->

<!-- image -->

## INTERNAL 3

BOTTOM

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## BOTTOM SILKSCREEN

VDDA

VDDA

T1

P1

P2

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

IN

RXD

RE

TXD

DE

SBA

<!-- image -->