<!-- lastmod 2022-08-03 -->
## MAX38902 Evaluation Kit

## General Description

The MAX38902 evaluation kit (EV kit) evaluates the  MAX38902A/B/C/D  IC  family  of  low  noise  linear regulators. The MAX38902 EV kit features two independent circuits to evaluate two different IC packages of the MAX38902A/B/C/D family. Both circuits on the EV kit operate over an input range of 1.7V to 5.5V, and  provide  any  output  voltage  range  of  0.6V  to  5.3V. The TDFN circuit evaluates the MAX38902A/B, while the wafer-level package (WLP) circuit evaluates the MAX38902C/D. Each circuit output on the EV kit delivers up to 500mA of current.

The  EV  kit  comes  with  the  MAX38902A-ATA+  and  the MAX38902C-ANT+ installed.

## Features

- Two Independent Circuits on One Board
- Evaluates the MAX38902A/B IC in an 8-pin (2mm x 2mm) TDFN
- Evaluates the MAX38902C/D IC in a 6-ball (1.45mm x 0.86mm) WLP
- 1.7V to 5.5V Input Range
- 1.2V to 5.0V Jumper Configurable Output Voltage (MAX38902A, On Board)
- 0.6V to 5.3V Resistor Configurable Output Voltage (MAX38902B, with IC Replacement)
- 0.6V to 5.3V Resistor Configurable Output Voltage (MAX38902C, On Board)
- 1.2V to 5.0V Factory-Preset Output Voltage (MAX38902D, with IC Replacement)
- Up to 500mA Output Current
- Proven 2-Layer 1-oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX38902A/B/C/D

## MAX38902 EV Kit Files

| FILE                                    | DESCRIPTION               |
|-----------------------------------------|---------------------------|
| MAX38902 EV BOM                         | EV Kit Bill of Material   |
| MAX38902 EV PCB Layout                  | EV Kit Layout             |
| MAX38902 EV Schematic                   | EV Kit Schematic          |
| MAX38902 EV Minimal Component Schematic | Minimal Component Circuit |

## Quick Start

## Required Equipment

- MAX38902 EV kit
- 5.5V, 1A DC power supply
- Electronic load capable of 500mA
- Digital voltmeter (DVM)

## Procedure Testing the (WLP) OUT1 Output Circuit

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution: Do not turn on power supply until all connections are completed.

- 1) Verify  that  jumper  JU1  is  in  its  default  position  as shown in Table 1.
- 2) Connect the 5.5V power supply between the IN1 and nearest GND1 terminal posts.
- 3) Connect  the  500mA  electronic  load  between  the OUT1 and nearest GND1 terminal posts.
- 4) Connect  the  DVM  between  the  OUT1  and  nearest GND1 terminal posts.
- 5) Turn on the power supply.
- 6) Enable the electronic load.
- 7) Verify that the voltage at the OUT1 terminal post is approximately 3.3V.

<!-- image -->

## MAX38902 Evaluation Kit

## Procedure Testing the (TDFN) OUT Output Circuit

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution: Do not turn on power supply until all connections are completed.

- 8) Verify  that  jumpers  JU101,  SELA  and  SELB  are  in their default positions, as shown in Table 2 and Table 3.
- 9) Connect the 5.5V power supply between the IN and nearest GND terminal posts.
- 10)  Connect the 500mA electronic load between the OUT and nearest GND terminal posts.
- 11)  Connect  the  DVM  between  the  OUT  and  nearest GND terminal posts.
- 12)  Turn on the power supply.
- 13)  Enable the electronic load.
- 14)  Verify  that  the  voltage  at  the  OUT  terminal  post  is approximately 5V.

## Detailed Description of Hardware

The MAX38902 EV kit evaluates the MAX38902A/B/C/D IC  family.  The  MAX38902A/B/C/D  are  low  noise  linear regulators that deliver 500mA of output current with only 12µVRMS of output noise from 10Hz to 100kHz. These regulators  require  only  100mV  of  input-to-output  headroom at full load.

## Table 1. EN on MAX38902C/D (JU1)

| JU1 SHUNT POSITION   | DESCRIPTION         |
|----------------------|---------------------|
| 1-2*                 | Enabled. EN = IN1   |
| 2-3                  | Disabled. EN = GND1 |

*Default Position

## Evaluates: MAX38902A/B/C/D

The MAX38902 EV kit features two independent circuits to evaluate two different IC packages of the MAX38902A/ B/C/D family. Both circuits on the EV kit operate over an input range of 1.7V to 5.5V. The TDFN circuit evaluates the  MAX38902A/B, while the  WLP circuit  evaluates  the MAX38902C/D. Each circuit output on the EV kit delivers up to 500mA of current.

The MAX38902 (TDFN) circuit on the EV Kit comes with the MAX38902A-ATA+ installed and the output is jumper configurable between 1.2V and 5.0V (Table 3), and can deliver 500mA of current.

The MAX38902 (WLP) circuit on the EV kit comes with the MAX38902C-ANT+ installed and the output is resistor configured to 3.3V, and can deliver 500mA of current. The output voltage on the MAX38902C can be reconfigured to other voltages from 0.6V to 5.3V by replacing feedback resistors  R1  and  R2.  Refer  to  the MAX38902  IC  data sheet for feedback resistor calculation.

## EN for the MAX38902C/D (WLP) Circuit

The MAX38902C/D (WLP) circuit on the EV kit provide a jumper JU1 to enable or disable the MAX38902C (or the MAX38902D after IC replacement). Refer to Table 1 for jumper setting of jumper JU1.

## EN for the MAX38902A/B (TDFN) Circuit

The MAX38902A/B (TDFN) circuit on the EV kit provide a jumper JU101 to enable or disable the MAX38902A (or the MAX38902B after IC replacement). Refer to Table 2 for jumper setting of jumper JU101.

## Table 2. EN on MAX38902A/B (JU101)

| JU1 SHUNT POSITION   | DESCRIPTION        |
|----------------------|--------------------|
| 1-2*                 | Enabled. EN = IN   |
| 2-3                  | Disabled. EN = GND |

*Default Position

│

## MAX38902 Evaluation Kit

## Output Selection (SELA and SELB) for the MAX38902A/B (TDFN) Circuit

The MAX38902A/B (TDFN) circuit on the EV kit provide a set of jumpers SELA and SELB to configure the output voltage of the MAX38902A. Refer to Table 3 for jumper setting of jumpers SELA and SELB.

## Evaluating the MAX38902B

The  MAX38902A/B  (TDFN)  circuit  can  evaluate  the MAX38902B after IC (U101) replacement. When evaluating  the  MAX38902B,  modify  the  EV  Kit  with  the steps listed below:

- 1) Replace U101 with the MAX38902B-ATA+.
- 2) Install  feedback  resistors  R101  and  R102  to  obtain the  desired  output  voltage  between  0.6V  and  5.3V (Refer to the MAX38902 IC data for feedback resistor calculations).
- 3) Install  a  shunt  on  jumper  SELA  pins  2  and  3 (GS = GND).
- 4) Remove shunt from jumper SELB. POK is accessible on the POK test point.
- 5) Install  a  100kΩ  resistor  on  R103. POK open-drain is  pulled  up  via  resistor  R103  (When  the  regulator output reaches its regulation, POK goes low).

## Evaluating the MAX38902D

The  MAX38902C/D  (WLP)  circuit  can  evaluate  the MAX38902D after IC (U1) replacement. The MAX38902D can  be  factory  trimmed  to  any  voltage  between  0.7V and  5.3V  in  50mV  steps.  Contact  the  factory  to  order the  MAX38902D  with  the  desired  factory-preset  output voltages.

## Table 3. SELA and SELB on MAX38902A (SELA, SELB)

| SELA           | SELA            | SELB           | SELB            | OUTPUT VOLTAGE   |
|----------------|-----------------|----------------|-----------------|------------------|
| SHUNT POSITION | SELA CONNECTION | SHUNT POSITION | SELB CONNECTION | OUTPUT VOLTAGE   |
| Not Installed  | Hi-Z            | 1-2            | IN              | 1.2              |
| 1-2            | IN              | Not Installed  | Hi-Z            | 1.5              |
| Not Installed  | Hi-Z            | 2-3            | GND             | 1.8              |
| Not Installed  | Hi-Z            | Not Installed  | Hi-Z            | 2.5              |
| 2-3            | GND             | 2-3            | GND             | 3.0              |
| 2-3            | GND             | 1-2            | IN              | 3.1              |
| 2-3            | GND             | Not Installed  | Hi-Z            | 3.3              |
| 1-2            | IN              | 2-3            | GND             | 4.0              |
| 1-2*           | IN              | 1-2*           | IN              | 5.0              |

*Default Position

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX38902EVKIT# | EV Kit |

#Denotes RoHS compliant.

## Component Suppliers

| SUPPLIER                                | WEBSITE            |
|-----------------------------------------|--------------------|
| Murata/TOKO                             | www.murata.com     |
| TDK                                     | www.tdk.com        |
| Samsung Electro-Mechanics America. Inc. | www.samsungsem.com |

Note: Indicate that you are using the MAX38902A/B/C/D when contacting these component suppliers.

│

## MAX38902 EV Kit Bill of Materials

|   ITEM |   QTY | REF DES                                          | VAR STATUS   | MAXINV              | MFG PART #                                              | MANUFACTURER                         | VALUE          | DESCRIPTION                                                                                                                                                                           |
|--------|-------|--------------------------------------------------|--------------|---------------------|---------------------------------------------------------|--------------------------------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |     2 | C1, C101                                         | Pref         | 20-00U01-77         | C1608C0G1H103J; CGA3E2C0G1H103J080AD; GRM1885C1H103JA01 | TDK; MURATA                          | 0.01µF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01µF; 50V; TOL = 5%; TG = -55°C to +125°C; TC = C0G                                                                                            |
|      2 |     4 | C2, C3, C102, C103                               | Pref         | 20-004U7-R1         | GMC10X7R475K6R3NT; CL10B475KQ8NQNC                      | CAL-CHIP ELECTRONIC INC./ SAMSUNG EL | 4.7µF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7µF; 6.3V; TOL = 10%; MODEL = TG = -55°C TO +125°C; TC = X7R; NOT RECOMMENDED FOR NEW DESIGN-USE 20-004u7-16                                   |
|      3 |     8 | IN, GND, IN1, OUT, GND1, OUT1, GND_OUT, GND1_OUT | Pref         | 02-15142-00         | 1514-2                                                  | KEYSTONE                             | 1514-2         | TERMINAL; TURRET; PIN DIA = 0.090IN; TOTAL LENGTH = 0.105IN; BOARD HOLE = 0.098IN; BRASS; TIN PLATING; RECOMMENDED FOR BOARD THICKNESS = 0.062IN                                      |
|      4 |     4 | JU1, JU101, SELECTA, SELECTB                     | Pref         | 01-PEC03SAAN3P-21   | PEC03SAAN                                               | SULLINS                              | PEC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                             |
|      5 |     1 | POK                                              | Pref         | 02-TPMINI5002-00    | 5002                                                    | KEYSTONE                             | N/A            | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; NOT FOR COLD TEST                                                         |
|      6 |     1 | R1                                               | Pref         | 80-0909K-AA4        | CRCW0603909KFK                                          | VISHAY DALE                          | 909K           | RESISTOR; 0603; 909K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                 |
|      7 |     1 | R2                                               | Pref         | 80-0200K-24         | CRCW06032003FK                                          | VISHAY DALE                          | 200K           | RESISTOR; 0603; 200K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                   |
|      8 |     1 | R101                                             | Pref         | 80-0000R-AA6        | CRCW06030000Z0                                          | VISHAY DALE                          | 0              | RESISTOR; 0603; 0Ω; 0%; JUMPER; 0.1W; THICK FILM                                                                                                                                      |
|      9 |     4 | SU1-SU4                                          | Pref         | 02-JMPFSTC02SYAN-00 | STC02SYAN                                               | SULLINS ELECTRONICS CORP.            | STC02SYAN      | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.256IN; BLACK; INSULATION = PBT CONTACT = PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                                                         |
|     10 |     4 | TP3, TP4, TP5, TP6                               | Pref         | 01-131435300-10     | 131-4353-00                                             | TEKTRONICS                           | 131-4353-00    | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                                                                                       |
|     11 |     2 | TP_GND, TP_GND1                                  | Pref         | 02-TPMINI5001-00    | 5001                                                    | KEYSTONE                             | N/A            | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST |
|     12 |     2 | TP_OUT, TP_OUT1                                  | Pref         | 02-TPMINI5000-00    | 5000                                                    | KEYSTONE                             | N/A            | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST   |
|     13 |     1 | U1                                               | Pref         | 00-SAMPLE-01        | MAX38902C-ANT+                                          | MAXIM                                | MAX38902C-ANT+ | EVKIT PART - IC; MAX38902C-ANT+; WLP6; PACKAGE OUTLINE DEVICE: 21-100055; PKG. CODE: N60C1+1                                                                                          |
|     14 |     1 | U101                                             | Pref         | 00-SAMPLE-02        | MAX38902A-ATA+                                          | MAXIM                                | MAX38902A-ATA+ | EVKIT PART - IC; MAX38902A-ATA+; PACKAGE OUTLINE DEVICE: 21-0168; PACKAGE CODE XXXX                                                                                                   |
|     15 |     1 | PCB                                              | -            | EPCB                | MAX                                                     | MAXIM                                | PCB            | PCB:MAX                                                                                                                                                                               |

TOTAL

37

DO NOT PURCHASE(DNP)

|   ITEM |   QTY | REF DES                                                                            | VAR STATUS   | MAXINV           | MFG PART #                             | MANUFACTURER    | VALUE   | DESCRIPTION                                                                                                                   |
|--------|-------|------------------------------------------------------------------------------------|--------------|------------------|----------------------------------------|-----------------|---------|-------------------------------------------------------------------------------------------------------------------------------|
|      1 |     8 | TP_IN, TP_IN1, TP1_OUT, TP1_OUT1, TP_GND_IN, TP_GND1_IN, TP1_GND_OUT, TP1_GND1_OUT | DNP          | 02-TPMINI5002-00 | 5002                                   | KEYSTONE        | N/A     | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; NOT FOR COLD TEST |
|      2 |     0 | C1                                                                                 | DNP          | 20-00U01-R0      | C1608C0G1E103J                         | TDK             | 0.01UF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01µF; 25V; TOL = 5%; MODEL=; TG = -55°C TO +125°C; TC = C0G                            |
|      3 |     0 | C2                                                                                 | DNP          | 20-004U7-18      | C1608X5R1C475K080AC                    | TDK/TAIYO YUDEN | 4.7µF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7µF; 16V; TOL = 10%; MODEL=; TG = -55°C TO +85°C; TC = X5R                             |
|      4 |     0 | C2                                                                                 | DNP          | 20-004U7-A66     | GRM188C71A475KE11; C1608X7S1A475K080AC | MURATA; TDK     | 4.7µF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7µF; 10V; TOL = 10%; TG = -55°C TO +125°C; TC = X7S                                    |
|      5 |     2 | C4, C104                                                                           | DNP          | N/A              | N/A                                    | N/A             | OPEN    | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR - EVKIT                                                                              |
|      6 |     2 | R3, R105                                                                           | DNP          | N/A              | N/A                                    | N/A             | SHORT   | PACKAGE OUTLINE 0603 RESISTOR - EVKIT                                                                                         |
|      7 |     3 | R102-R104                                                                          | DNP          | N/A              | N/A                                    | N/A             | OPEN    | PACKAGE OUTLINE 0603 RESISTOR - EVKIT                                                                                         |

TOTAL

15

PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)

|   ITEM |   QTY | REF DES     | VAR STATUS   | MAXINV        | MFG PART #     | MANUFACTURER                     | VALUE          | DESCRIPTION                                                                                   |
|--------|-------|-------------|--------------|---------------|----------------|----------------------------------|----------------|-----------------------------------------------------------------------------------------------|
|      1 |     1 | PACKOUT_BOX | Pref         | 88-00711-SML  | 88-00711-SML   | N/A                              | ?              | BOX;SMALL BROWN 9 3/16X7X1 1/4 - PACKOUT                                                      |
|      2 |     1 | PACKOUT_BOX | Pref         | 87-02162-00   | 87-02162-00    | N/A                              | ?              | ESD BAG;BAG;STATIC SHIELD ZIP 4inX6in;W/ESD LOGO - PACKOUT                                    |
|      3 |     1 | PACKOUT_BOX | Pref         | 85-MAXKIT-PNK | 85-MAXKIT-PNK  | N/A                              | ?              | PINK FOAM;FOAM;ANTI-STATIC PE 12inX12inX5MM - PACKOUT                                         |
|      4 |     1 | PACKOUT_BOX | Pref         | EVINSERT      | EVINSERT       | N/A                              | ?              | WEB INSTRUCTIONS FOR MAXIM DATA SHEET                                                         |
|      5 |     1 | PACKOUT_BOX | Pref         | 85-84003-006  | 85-84003-006   | N/A                              | ?              | LABEL(EV KIT BOX) - PACKOUT                                                                   |
|      6 |     4 | BUMP1-BUMP4 | DNI          | 02-SJ5003-00  | SJ-5003(BLACK) | 3M ELECTRONIC SOLUTIONS DIVISION | SJ-5003(BLACK) | BUMPER; BLACK-HEMISPHERICAL SHAPE EVKIT EH0231; 0.44D/0.2BH; RESILIENT ELASTOMER POLYURETHANE |

TOTAL

9

-

## MAX38902 EV Kit Schematic

<!-- image -->

## MAX38902 EV Kit PCB Layout Diagrams

MAX38902 EV Kit-Top Silkscreen

<!-- image -->

MAX38902 EV Kit-Top View

<!-- image -->

MAX38902 EV Kit-Bottom View

<!-- image -->

MAX38902 EV Kit-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/17           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSlieG. 0a[iP InteJrateG reserYes tKe riJKt to FKanJe tKe FirFXitr\ anG sSeFi¿Fations ZitKoXt notiFe at an\ tiPe.

<!-- image -->

│

Evaluates: MAX38902A/B/C/D