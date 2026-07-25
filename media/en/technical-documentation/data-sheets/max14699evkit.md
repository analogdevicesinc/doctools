<!-- lastmod 2022-08-03 -->
## MAX14699 Evaluation Kit

## General Description

The MAX14699 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX14699 high-accuracy, surge-protected overvoltage protector device.  The  EV  kit  comes  with  the  MAX14699EWC+ installed.

## Features

- 2.1V to 28V Operating Voltage Range
- ACOK LED Reading
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- EV Kit Board Containing a MAX14699

Ordering Information appears at end of data sheet.

Evaluates: MAX14699

## Quick Start

## Required Equipment

- MAX14699 EV kit
- 15V power supply
- Multimeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect 5V on IN. Verify OUT is 5V and LED1 is on.
- 2) Install shunt on JU1. The OUT voltage goes down.
- 3) Remove shunt on JU1. OUT is 5V.
- 4) Increase IN voltage. Verify OUT voltage follows IN voltage.
- 5) The switch turns off, OUT voltage goes down, and LED1 turns off when IN voltage goes up to about 13.75V.

## Detailed Description

The  MAX14699  EV  kit  is  a  fully  assembled  and  tested circuit board demonstrating the MAX14699 high accuracy, surge protected overvoltage protector device in a 12-bump wafer-level package (WLP).

## LED Indicator

The EV kit features LED1 that indicates ACOK is asserted.

## Enable Pin

Use  jumper  JU1  and  JU2  to  set EN pin  connection. (Table 1)

## OVLO

Use  jumper  JU3  to  choose  OVLO  pin  connection. (Table 2)

## Digital Voltage

Use  jumper  JU4  to  power  digital  voltage  from  V IN . (Table 3)

<!-- image -->

## Table 1. JU1, JU2 Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                |
|----------|------------------|--------------------------------------------|
| JU1      | Installed        | EN is pulled up.                           |
| JU1      | Not installed*   | EN is pulled down.                         |
| JU2      | Installed        | EN is connected to TP8 (external control). |
| JU2      | Not installed*   | EN is not connected to TP8.                |

## Table 2. JU3 Jumper Setting

| JUMPER   | SHUNT POSITION           | DESCRIPTION                                                                                                                                      |
|----------|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| JU3      | Installed* Not installed | OVLO is connected to ground. Internal OVLO threshold is used. OVLO is connected to external resistor divider. Adjustable OVLO threshold is used. |

## Table 3. JU4 Jumper Setting

| JUMPER   | SHUNT POSITION           | DESCRIPTION                                                                                                             |
|----------|--------------------------|-------------------------------------------------------------------------------------------------------------------------|
| JU4      | Installed* Not installed | U2 is powered from V IN . U2 is not powered from V IN . Please disconnect U2 from V IN when testing high/surge voltage. |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14699EVKIT# | EVKIT  |

Evaluates: MAX14699

│

## MAX14699 Evaluation Kit

## MAX14699 EV Kit Bill of Materials

Evaluates: MAX14699

| COMMENTS     |                                                                                             |                                                                                  |                                                                                           |                                                                                         |                                            |                                                                          |                                                    |                                                       |                                                      |                                                              |                                                                                                                         |                                                                                                                |                                                    |                                                                                                                         |                                                                                                                          |                                                                                            |                                                                           |                                          |                               |                                   |
|--------------|---------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|--------------------------------------------|--------------------------------------------------------------------------|----------------------------------------------------|-------------------------------------------------------|------------------------------------------------------|--------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|------------------------------------------|-------------------------------|-----------------------------------|
| DESCRIPTION  | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; | CAPACITOR; SMT (3528); TANTALUM CHIP; 4.7UF; 35V; TOL=20%; TG=-55 DEGC TO +125 DEGC; AUTO | CAPACITOR; SMT (3216); TANTALUM CHIP; 10UF; 10V; TOL=20% CONNECTOR; MALE; THROUGH HOLE; | BERGSTIK BREAKAWAY HEADER; STRAIGHT; 2PINS | DIODE; LED; SMT (1206); PIV=2.6V; IF=0.025A; -30 DEGC TO +85 DEGC; GREEN | RESISTOR; 0805; 1M; 1%; 100PPM; 0.125W; THICK FILM | RESISTOR; 0805; 0 OHM; 5%; JUMPER; 0.125W; THICK FILM | RESISTOR; 0805; 100K; 1%; 100PPM; 0.125W; THICK FILM | RESISTOR; 0805; 1K; 1%; 100PPM; 0.125W; THICK FILM           | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL | CONNECTOR; FEMALE; THROUGH HOLE; 0.3MM PITCH BEAU EUROSTYLE FIXED MOUNT PCB TERMINAL BLOCK; RIGHT ANGLE; 2PINS | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE; | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; | EVKIT PART-IC; PROT; HIGH ACCURACY; SURGE-PROTECTED OVERVOLTAGE PROTECTOR; WLP12 1.98X1.28 | LD1086DT33 IC; VREG; 1.5A FIXED LOW DROP POSITIVE VOLTAGE REGULATOR; DPAK | PACKAGE OUTLINE 0805 NON-POLAR CAPACITOR | PACKAGE OUTLINE 0805 RESISTOR | PCB Board:MAX14699 EVALUATION KIT |
| VALUE        | 1000PF                                                                                      | 1UF                                                                              | 4.7UF                                                                                     | 10UF                                                                                    | 68001-202HLF                               | LG N971-KN-1                                                             | 1M                                                 | 0                                                     | 100K                                                 | 1K                                                           | STC02SYAN                                                                                                               | 393570002                                                                                                      | N/A                                                | N/A                                                                                                                     |                                                                                                                          | N/A                                                                                        | MAX14699EWC+                                                              | OPEN                                     | OPEN                          | PCB                               |
| MANUFACTURER | AVX                                                                                         | KEMET; MURATA; AVX                                                               | AVX                                                                                       | AVX; KEMET                                                                              | FCICONNECT                                 | OSRAM                                                                    | VISHAY DALE/YAGEO PHICOMP                          | YAGEO PHYCOMP                                         | VISHAY DALE/KOA SPEER/PANASONIC                      | VISHAY DALE; PANASONIC; ROHM; YAGEO                          | SULLINS ELECTRONICS CORP.                                                                                               | MOLEX                                                                                                          | KEYSTONE                                           | KEYSTONE                                                                                                                | KEYSTONE                                                                                                                 | MAXIM                                                                                      | ST MICROELECTRONICS                                                       | N/A                                      | N/A                           | MAXIM                             |
| MFG PART #   | 06035C102KAT2A                                                                              | C0603C105K3PAC; GRM188R61E105KA12; 06033D105KAT2A                                | 1 TAJB475M035RNJ                                                                          | TPSA106M010R0900; T491A106M010AT                                                        | 68001-202HLF                               | LG N971-KN-1                                                             | CRCW08051M00FK; RC0805FR-071ML                     | RC0805JR-070RL                                        | CRCW0805100KFK; RK73H2ATTD1003; ERJ-6ENF1003V        | CRCW08051K00FK; ERJ-6ENF1001V; MCR10EZHF1001; RC0805FR-071KL | STC02SYAN                                                                                                               | 393570002                                                                                                      | 5010                                               | 5011                                                                                                                    | 5013                                                                                                                     | MAX14699EWC+                                                                               | LD1086DT33                                                                | N/A                                      | N/A MAX14699                  |                                   |
| QTY          | 1                                                                                           | 1                                                                                |                                                                                           | 1                                                                                       | 4                                          | 1                                                                        | 1                                                  | 1                                                     | 1                                                    | 1                                                            | 4                                                                                                                       | 2                                                                                                              | 5                                                  | 3                                                                                                                       | 3                                                                                                                        | 1                                                                                          | 1                                                                         | 0                                        | 0                             | 1 33                              |
| DNI/DNP      | -                                                                                           | -                                                                                | -                                                                                         | -                                                                                       | -                                          | -                                                                        | -                                                  | -                                                     | -                                                    | -                                                            | -                                                                                                                       | -                                                                                                              | -                                                  | -                                                                                                                       | -                                                                                                                        | -                                                                                          | -                                                                         | DNP                                      | DNP                           | -                                 |
| REF_DES      | C1                                                                                          | C2                                                                               | C3                                                                                        | C4                                                                                      | JU1-JU4                                    | LED1                                                                     | R1                                                 | R3                                                    | R4                                                   | R5                                                           | SU1-SU4                                                                                                                 | TB1, TB2                                                                                                       | TP1, TP3, TP8, TP10, TP11                          | TP2, TP4, TP9                                                                                                           | TP5-TP7                                                                                                                  | U1                                                                                         | U2                                                                        | C7                                       | R2                            | PCB                               |
| ITEM         | 1                                                                                           | 2                                                                                | 3                                                                                         | 4                                                                                       | 5                                          | 6                                                                        | 7                                                  | 8                                                     | 9                                                    | 10                                                           | 11                                                                                                                      | 12                                                                                                             | 13                                                 | 14                                                                                                                      | 15                                                                                                                       | 16                                                                                         | 17                                                                        | 18                                       | 19 20                         | TOTAL                             |

## MAX14699 EV Kit Schematic

<!-- image -->

## MAX14699 EV Kit PCB Layout Diagrams

MAX14699 EV Kit-Top Silkscreen

<!-- image -->

MAX14699 EV Kit-Top

<!-- image -->

MAX14699 EV Kit-Layer 2 GND

<!-- image -->

│

## MAX14699 EV Kit PCB Layout Diagrams (continued)

MAX14699 EV Kit-Layer 3 Power

<!-- image -->

MAX14699 EV Kit-Bottom

<!-- image -->

## MAX14699 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/16           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX14699