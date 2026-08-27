<!-- lastmod 2022-08-02 -->
## MAX14880 Evaluation Kit

## General Description

The MAX14880 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the functionality of the MAX14880 isolated CAN transceiver. The EV kit operates from a single 3.3V supply and features an on-board isolated power supply to power the secondary side of the circuit.

The MAX14880EVKIT may also be used to evaluate the MAX14878 and the MAX14879.

## Features

- Operates from a Single 3.3V Supply
- Terminal Block Connectors for Easy RS-485/RS-422 Evaluation
- 5000V RMS  Isolation for 60s
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX14880 EV kit
- 3.3V, 500mA DC power supply
- Signal/function generator
- Oscilloscope

## Evaluates: MAX14878/MAX14879/ MAX14880

## Startup Procedure

The EV kit is fully assembled and tested.  Follow the steps below to verify board operation.

- 1) Set the DC power supply to 3.3V.
- 2) Connect the DC power supply to the 3.3V test point (TP4). Connect the ground terminal to the GND testpoint (TP5).
- 3) Ensure that the jumpers are in their default positions (see Table 1).
- 4) Turn on the power supply.
- 5) Connect the oscilloscope to the CANH and CANL test points  (TP2 and TP10).
- 6) Set the signal/function generator to output a 500kHz 0-to-3.3V square wave.
- 7) Connect the signal/function generator to the TXD test point (TP1).
- 8) Verify that the CANH and CANL outputs switch as the signal toggles.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX14880 Evaluation Kit

## Detailed Description of Hardware

The  MAX14880  EV  kit  is  a  fully  assembled  and  tested circuit board for evaluating the MAX14880 isolated CAN transceiver (U1). The EV kit is powered from a single 3.3V power supply.

## External Power Supply

The  power  on  the  EV  kit  is  derived  from  a  single  3.3V source. Connect an external supply to the +3.3V test point (TP4) to supply the 3.3V to the logic-side (A) of the circuit. The  on-board  MAX258  transformer  driver  and  external transformer, T1, generate an isolated supply for powering the isolated side (B) of the board. The MAX1818 generates a regulated 5V for the B-side of the board.

To  use  an  external  supply  on  the  isolated  side  of  the board, remove the shunt on the J6 jumper and apply the voltage to the +5V test point (TP9).

Table 1. Jumper Table (J1-J10)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                 |
|----------|------------------|-----------------------------------------------------------------------------------------------------------------------------|
| J1       | Open*            | STB input is connected to GND. MAX14880 operates normally.                                                                  |
| J1       | Closed           | STB input is connected to 5V. MAX14880 is in standby mode.                                                                  |
| J3       | 1-2              | MAX258 circuit is disabled. Connect 5V to ISO_V5 test point (TP9).                                                          |
| J3       | 2-3*             | MAX258 circuit is enabled.                                                                                                  |
| J4       | Open             | External protection diodes are not connected to CANH.                                                                       |
| J4       | Closed*          | External protection diodes are connected to CANH.                                                                           |
| J5       | Open             | External protection diodes are not connected to CANL.                                                                       |
| J5       | Closed*          | External protection diodes are connected to CANL.                                                                           |
| J6       | Open             | VDDB is not powered by the on-board isolated power circuit.                                                                 |
| J6       | Closed*          | VDDB is powered by the on-board isolated power circuit.                                                                     |
| J8       | Open             | On-board termination is not connected to CANH. Open J8 and J9 to disabled on- board termination between CANH and CANL.      |
| J8       | Closed*          | On-board termination is connected between CANH and CANL                                                                     |
| J9       | Open             | Split termination capacitance is connected to GND                                                                           |
| J9       | Closed*          | Split termination capacitor is not connected to GND. pen J8 and J9 to disabled on- board termination between CANH and CANL. |
| J10      | Open             | The MAX258 transformer driver is powered by the VDDAsupply.                                                                 |
| J10      | Closed*          | The MAX258 transformer driver is not powered by the VDDAsupply.                                                             |

*Default position.

## Evaluates: MAX14878/MAX14879/ MAX14880

## Evaluating the Isolated CAN Interface

The  MAX14880  EV  kit  includes  test  points  to  access CANH (TP2) and CANL (TP10) for easy evaluation. To verify operation in a CAN system, connect the transceiver to the network using the J7 terminal block and use the test points (TP1 and TP3) or the J2 jumper pad to connect the device to a logic controller.

## External Protection

For  harsh  industrial  environments,  external  protection may be necessary to protect the CAN transceiver during normal  operation.  The  MAX14880  EV  kit  includes  onboard  protection  that  can  be  used  when  evaluating  the device in a CAN network. Close the J4 and J5 jumpers to connect the protection diodes to the CANH and CANL lines.

│

## MAX14880 EV Kit Bill of Materials

|   ITEM | REF_DES     | DNI/DNP   |   QTY | MFG PART #                                                                           | MANUFACTURER                                              | VALUE                                                        | DESCRIPTION                                                                                              |
|--------|-------------|-----------|-------|--------------------------------------------------------------------------------------|-----------------------------------------------------------|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
|      1 | C1, C6      | -         |     2 | C0603C104K5RAC; C1608X7R1H104K                                                       | KEMET; TDK                                                | 0.1UF                                                        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;              |
|      2 | C2          | -         |     1 | GRM188R71A105K; C0603X7R100-105; C1608X7R1A105K080A C; LMK107B7105KA; CL10B105KP8NFN | MURATA; VENKEL LTD; TDK; TAIYO YUDEN; SAMSUNG ELECTRONICS | 1UF                                                          | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                |
|      3 | C3          | -         |     1 | C0805C473J1RAC                                                                       | KEMET                                                     | 0.047UF                                                      | CAPACITOR; SMT; 0805; CERAMIC; 0.047uF;100V; 5%; X7R; -55degC to + 125degC                               |
|      4 | C5, C7      | -         |     2 | C1608X5R1A106K                                                                       | TDK                                                       | 10UF                                                         | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R         |
|      5 | C8          | -         |     1 | GRM188R61A335KE15; C1608X5R1A335K                                                    | MURATA/TDK                                                | 3.3UF                                                        | CAPACITOR; SMT (0603); CERAMIC CHIP; 3.3UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R        |
|      6 | D1, D2      | -         |     2 | SMAJ30A                                                                              | LITTELFUSE                                                | 30V                                                          | DIODE; TVS; SMA (DO-214AC); VRM=30V; IF=8.3A                                                             |
|      7 | D3-D6       | -         |     4 | 1N4001                                                                               | N/A                                                       | 1N4001                                                       | DIODE, RECTIFIER, DO-41, PIV=50V, If(ave)=1A, Vf=1.1V@If=1A                                              |
|      8 | D7, D8      | -         |     2 | B230A-13-F                                                                           | DIODES INCORPORATED                                       | B230A-13-F                                                   | DIODE; SCH; SMA; PIV=30V; IF=2.0A                                                                        |
|      9 | J1, J8, J10 | -         |     3 | PBC02SAAN                                                                            | SULLINS ELECTRONICS CORP.                                 | PBC02SAAN                                                    | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;             |
|     10 | J3          | -         |     1 | PCC03SAAN                                                                            | SULLINS                                                   | PCC03SAAN                                                    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                 |
|     11 | J4-J6, J9   | -         |     4 | PCC02SAAN                                                                            | SULLINS                                                   | PCC02SAAN                                                    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                 |
|     12 | J7          | -         |     1 | OSTTC042162                                                                          | ON-SHORE TECHNOLOGY INC                                   | OSTTC042162                                                  | CONNECTOR; FEMALE; THROUGH HOLE; TERMINAL BLOCK ONE PIECE WIRE PROTECTOR; COLOR BLUE; RIGHT ANGLE; 4PINS |
|     13 | R1, R2      | -         |     2 | CRCW060360R4FK                                                                       | VISHAY DALE                                               | 60.4 RESISTOR; 0603; 60.4 OHM; 1%; 100PPM; 0.10W; THICK FILM | 60.4 RESISTOR; 0603; 60.4 OHM; 1%; 100PPM; 0.10W; THICK FILM                                             |
|     14 | R3          | -         |     1 | CRCW060310K0FK; ERJ-3EKF1002                                                         | VISHAY DALE; PANASONIC                                    | 10K                                                          | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                       |
|     15 | R5          | -         |     1 | CRCW06030000ZS; MCR03EZPJ000; ERJ- 3GEY0R00                                          | VISHAY DALE/ROHM/PANASONIC                                | 0                                                            | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                     |
|     16 | R6          | -         |     1 | ERJ-3EKF1473V                                                                        | PANASONIC                                                 | 147K                                                         | RESISTOR; 0603; 147K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                  |

## MAX14880 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES       | DNI/DNP   |   QTY | MFG PART #                            | MANUFACTURER              | VALUE          | DESCRIPTION                                                                                                              |
|--------|---------------|-----------|-------|---------------------------------------|---------------------------|----------------|--------------------------------------------------------------------------------------------------------------------------|
|     17 | R7            | -         |     1 | CRCW060347K0FK                        | VISHAY DALE               | 47K            | RESISTOR; 0603; 47K; 1%; 100PPM; 0.10W; THICK FILM                                                                       |
|     18 | T1            | -         |     1 | 750315228                             | WURTH ELECTRONICS INC     | 750315228      | TRANSFORMER; SMT; 2:1; VERY LOW LEAKAGE INDUCTANCE; ROUNDED SELF-SHIELDING CORE;                                         |
|     19 | TP1-TP3, TP10 | -         |     4 | 5014                                  | KEYSTONE                  | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     20 | TP4, TP9      | -         |     2 | 5010                                  | KEYSTONE                  | N/A            | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                       |
|     21 | TP5-TP8       | -         |     4 | 5011                                  | KEYSTONE                  | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|     22 | U1            | -         |     1 | MAX14880AWE+                          | MAXIM                     | MAX14880AWE+   | EVKIT PART - IC; TXRX; 5KV ISOLATED CAN TRANSCEIVER WITH +/- 8KV CONTACT ESD PROTECTION; WSOIC16                         |
|     23 | U2            | -         |     1 | MAX258ATA+                            | MAXIM                     | MAX258ATA+     | IC; DRV; 0.5A; PUSH-PULL TRANSFORMER DRIVER FOR ISOLATED POWER SUPPLY; TDFN8-EP 2X3                                      |
|     24 | U3            | -         |     1 | MAX1818EUT50+                         | MAXIM                     | MAX1818EUT50 + | IC; VREG; 0.5A LOW-DROPOUT LINEAR REGULATOR; SOT23-6                                                                     |
|     25 | PCB           | -         |     1 | MAX14880                              | MAXIM                     | PCB            | PCB:MAX14880                                                                                                             |
|     26 | C4            | DNP       |     0 | B32620A0472J                          | EPCOS                     | 4700PF         | CAPACITOR; THROUGH HOLE-RADIAL LEAD; POLYPROPYLENE; 4700pF; 1000V; TOL=5%; TG=- 55degC TO +105degC                       |
|     27 | C9            | DNP       |     0 | C1608X5R1E106M080A C; CL10A106MA8NRNC | TDK/SAMSUNG ELECTRONICS   | 10UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                 |
|     28 | J2            | DNP       |     0 | PBC04SAAN                             | SULLINS ELECTRONICS CORP. | PBC04SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS; -65 DEGC TO +125 DEGC                                         |

TOTAL

45

## MAX14880 EV Kit PCB Layout Diagrams

<!-- image -->

MAX14880 EV Kit-Top Silkscreen

<!-- image -->

MAX14880 EV Kit-Bottom Silkscreen

MAX14880 EV Kit-Top

<!-- image -->

MAX14880 EV Kit-Bottom

<!-- image -->

│

## MAX14880 EV Kit PCB Layout Diagrams

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14880EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX14878/MAX14879/

MAX14880

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/17            | Initial release | -               |

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX14878/MAX14879/