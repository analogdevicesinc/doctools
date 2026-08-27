<!-- lastmod 2022-08-02 -->
## MAX149X1 Evaluation Kit

## General Description

The MAX149X1 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the functionality of the MAX14938 isolated  RS-485/Profibus™  transceiver.  The EV kit operates from a single 3.3V supply and features an on-board isolated power supply to power the secondaryside of the circuit.

The MAX149X1 EV kit can also be used to evaluate the MAX14939,  MAX14941,  MAX14942,  MAX14945,  and MAX14948.

## Features

- Operates From a Single 3.3V Supply
- Terminal Block Connectors for Easy RS-485/Profibus Evaluation
- 2750V RMS  Isolation for 60s
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX149X1 EV kit
- 3.3V, 1A DC power supply
- Signal/function generator
- Oscilloscope

Ordering Information appears at end of data sheet.

The  PROFIBUS-DP  logo  is  a  registered  trademark  of PROFIBUS and PROFINET International (PI).

Evaluates: MAX14938/MAX14939/

MAX14941/MAX14942/

MAX14945/MAX14948

## Startup Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

- 1) Set the DC power supply to 3.3V and connect the DC power supply between the EV kits V DDA  and GNDA connectors.
- 2) Ensure that all jumpers are in their default positions (see Table 1).
- 3) Turn on the power supply.
- 4) Set the signal/function generator to output a 100kHz 0-to-3V square wave. NOTE: Set the signal/function generator to operate with a high-impedance load. If needed, the R1 pad is available to add a 50Ω impedance to ground.
- 5) Connect the signal/function generator to the TXD test point.
- 6) Using the oscilloscope, verify that the A and B outputs switch as the signal toggles.

<!-- image -->

## MAX149X1 Evaluation Kit

## Detailed Description of Hardware

The EV kit is a fully assembled and tested circuit board for  evaluating  the  MAX14938  isolated  RS-485/Profibus transceiver (U2). The EV kit has been designed to allow for  evaluating  the  MAX14938  alone  or  in  a  standard RS-485 configuration. The EV kit is powered from a single 3.3V power supply.

## Powering the Board

The  power  on  the  EV  kit  is  derived  from  a  single  3.3V source. Connect an external supply from GNDA to either the V DDA  test point or P1 connector to supply the 3.3V to the logic-side (A) of the circuit.

An on-board MAX258 transformer driver (U1) and external transformer (TX1) generate an isolated supply for powering the (B) isolated-side of the board. To disable the MAX258 circuit, connect jumper J1 to 2-3. To disconnect the output of the transformer circuit from the MAX14938 LDO input, remove the shunt on J5.

## Table 1. Jumper Table (J1-J6)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                   |
|----------|------------------|-----------------------------------------------------------------------------------------------|
| J1       | 1-2              | MAX258 transformer driver is disabled.                                                        |
| J1       | 2-3*             | MAX258 transformer driver is enabled.                                                         |
| J2       | 1-2*             | RE is high. The RS-485 receiver is disabled.                                                  |
| J2       | 2-3              | RE is low. The RS-485 receiver is enabled.                                                    |
| J3       | 1-2*             | DE is high. The RS-485 driver outputs are enabled.                                            |
| J3       | 2-3              | DE is low. The RS-485 driver outputs are disabled.                                            |
| J4       | Open*            | DE and RE are not connected together.                                                         |
| J4       | Closed           | DE and RE are connected together.                                                             |
| J5       | Open             | Output of the transformer circuit is not connected to VLDO.                                   |
| J5       | Closed*          | Output of the transformer circuit is connected to VLDO and powers the B-side of the MAX14938. |

*Default position.

Evaluates: MAX14938/MAX14939/

MAX14941/MAX14942/

MAX14945/MAX14948

## Evaluating the Isolated RS-485 Interface Driver and Receiver Enable Selection

The  EV  kit  features  three  jumpers  (J2,  J3,  and  J4)  to enable/disable  the  driver  and  receiver  outputs.  Set  J2 to 2-3 to enable the receiver. Set J3 to 1-2 to enable the driver. To actively control both enables, open J2 and J3 and close J4, which connects DE and RE together.

## Resistors R2-R4 Configuration

For  end-of-the-line  transceivers,  close  J6  to  connect  a 120Ω resistor (R3) between the A and B RS-485 I/Os  on the MAX14938.

Pullup and pulldown resistors are generally used on the receiver inputs to guarantee a known state in the event that  all  nodes  on  the  bus  are  in  receive  mode,  or  the cable becomes disconnected. The exact value for these resistors will vary with the application. Pads are provided for pullup (R2) and pulldown (R4) resistors for the A-B lines, although the use of these resistors is purely optional. Note that the MAX14938 features true fail-safe receiver inputs, which ensures that RXD is high when the receiver inputs are shorted, open, or connected to an idle bus.

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX149X1EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX14938/MAX14939/

MAX14941/MAX14942/

MAX14945/MAX14948

## MAX149X1 Evaluation Kit

## MAX149X1 Bill of Materials

| ITEM REF_DES        | DNI   | QTY MFG PART #                                                                          | MANUFACTURER                  | VALUE          | DESCRIPTION                                                                                                              | COMMENTS   |
|---------------------|-------|-----------------------------------------------------------------------------------------|-------------------------------|----------------|--------------------------------------------------------------------------------------------------------------------------|------------|
| 1 C1, C3, C6, C8    | -     | 4 GRM188R71E105KA12D; CGA3E1X7R1E105K                                                   | MURATA                        | 1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R               |            |
| 2 C2, C7            | -     | 2 C0603C104K4RAC; GCM188R71C104KA37; C1608X7R1C104K; GRM188R71C104K; C0603X7R160-104KNE | KEMET/MURATA/TDK/ VENKEL LTD. | 0.1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                              |            |
| 3 C4, C9            | -     | 2 GRM21BR61E106K; C2012X5R1E106K125AB; C2012X5R1E106K                                   | MURATA/TDK                    | 10UF           | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X5R                        |            |
| 4 C5                | -     | 1 C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K                                     | KEMET/MURATA/TDK              | 0.1UF          | CAPACITOR; SMT; 0603; CERAMIC; 0.1uF; 25V; 10%; X7R; -55degC to + 125degC; +/-15% from -55degC to +125degC;              |            |
| 5 D1, D2            | -     | 2 MBR0520                                                                               | GENERIC PART                  | MBR0520        | DIODE; SCH; SCHOTTKY RECTIFIER; SMT (SOD-123); PIV=20V; IF=0.5A; -55 DEGC TO +150 DEGC                                   |            |
| 6 J1-J3             | -     | 3 PEC03SAAN                                                                             | SULLINS                       | PEC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                |            |
| 7 J4-J6             | -     | 3 PEC02SAAN                                                                             | SULLINS                       | PEC02SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                |            |
| 8 P1                | -     | 1                                                                                       | 1935161 PHOENIX CONTACT       | 1935161        | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 2PINS                                                   |            |
| 9 P2, P3            | -     | 2                                                                                       | 1935200 PHOENIX CONTACT       | 1935200        | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 6PINS                                                   |            |
| 10 R3               | -     | 1 CRCW0603120RJN                                                                        | VISHAY DALE                   | 120            | RESISTOR; 0603; 120 OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                   |            |
| 11 SU1-SU4          |       | 4 STC02SYAN                                                                             | SULLINS ELECTRONICS CORP.     | STC02SYAN      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL  |            |
| 12 T1, T9, T10      | - -   | 3                                                                                       | 5010 ?                        | 5010           | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE                                                                        |            |
| 13 T2-T6, T11-T13   | -     | 8                                                                                       | 5014 ?                        | 5014           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 14 T7, T8, T14, T15 | -     | 4                                                                                       | 5011 ?                        | 5011           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |            |
| 15 TX1              | -     | 1 TGMS-1464V6LF                                                                         | HALO ELECTRONICS, INC         | TGMS- 1464V6LF | TRANSFORMER; SMT; 1:2.4; POWER TRANSFORMER; DRAFT DATASHEET ONLY                                                         |            |
| 16 U1               | -     | 1 MAX258ATA+                                                                            | MAXIM                         | MAX258ATA +    | IC; DRV; 0.5A; PUSH-PULL TRANSFORMER DRIVER FOR ISOLATED POWER SUPPLY; TDFN8-EP 2X3                                      |            |
| 17 U2               | -     | 1 MAX14938GWE+                                                                          | MAXIM                         | MAX14938       | EVKIT PART-IC; PACKAGE CODE: W16M+10; OUTLINE DRAWING NO.: 21-0042; LAND PATTERN DRAWING NO.: 90-0107; WSOIC16 300MIL    |            |
| 18 R1, R2, R4       | DNP   | 3 N/A                                                                                   | N/A                           | OPEN           | PACKAGE OUTLINE 0603 RESISTOR - EVKIT                                                                                    |            |

Evaluates: MAX14938/MAX14939/

MAX14941/MAX14942/

MAX14945/MAX14948

## MAX149X1 Evaluation Kit

## MAX149X1 Schematics

<!-- image -->

│

Evaluates: MAX14938/MAX14939/

MAX14941/MAX14942/

MAX14945/MAX14948

## MAX149X1 Evaluation Kit

## MAX149X1 PCB Layout

<!-- image -->

<!-- image -->

│

Evaluates: MAX14938/MAX14939/

MAX14941/MAX14942/

MAX14945/MAX14948

## MAX149X1 Evaluation Kit

## MAX149X1 PCB Layout (continued)

<!-- image -->

<!-- image -->

│

Evaluates: MAX14938/MAX14939/

MAX14941/MAX14942/

MAX14945/MAX14948

## MAX149X1 Evaluation Kit

## MAX149X1 PCB Layout (continued)

<!-- image -->

<!-- image -->

│

Evaluates: MAX14938/MAX14939/

MAX14941/MAX14942/

MAX14945/MAX14948

## MAX149X1 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                 | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------|-----------------|
|                 0 | 2/16            | Initial release             | -               |
|                 1 | 7/16            | Added MAX14939 and MAX14948 | 1-9             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSOied  0a[iP InteJrated reserYes the riJht to FhanJe the FirFXitr\ and sSeFi¿Fations withoXt notiFe at an\ tiPe

│

Evaluates: MAX14938/MAX14939/

MAX14941/MAX14942/

MAX14945/MAX14948