<!-- lastmod 2022-08-03 -->
## MAX25300 Evaluation Kit

## General Description

The  MAX25300  evaluation  kit  (EV  kit)  evaluates  the MAX25300A/MAX25300B  IC  family  of  low  noise  linear regulators. The MAX25300 EV kit features two independent circuits to evaluate two different IC packages. The TDFN  circuit  evaluates  the  MAX25300A/MAX25300B. Both circuits  on  the  EV  kit  operate  over  an  input  range of  1.7V  to  5.5V,  and  provide  any  output  voltage  range of  0.6V  to  5.3V.  Each  circuit  output  on  the  EV  kit  delivers up to 500mA of current. The EV kit comes with the MAX25300AATA/V+ installed.

## Features

- Two Independent Circuits on One Board
- Evaluates the MAX25300A/MAX25300B IC in an 8-pin (2mm x 2mm) TDFN
- 1.7V to 5.5V Input Range
- 1.2V to 5.0V Jumper-Configurable Output Voltage (MAX25300A, On Board)
- 0.6V to 5.3V Resistor-Configurable Output Voltage (MAX25300B, with IC Replacement)
- Up to 500mA Output Current
- Proven 2-Layer 1oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX25300 EV Kit Files

| FILE                                    | DESCRIPTION               |
|-----------------------------------------|---------------------------|
| MAX25300 EV BOM                         | EV Kit Bill of Material   |
| MAX25300 EV PCB Layout                  | EV Kit Layout             |
| MAX25300 EV Schematic                   | EV Kit Schematic          |
| MAX25300 EV Minimal Component Schematic | Minimal Component Circuit |

Evaluates: MAX25300A/MAX25300B

## Quick Start

## Required Equipment

- MAX25300 EV kit
- 5.5V, 1A DC power supply
- Electronic load capable of 500mA
- Digital voltmeter (DVM)

## Procedure Testing the (TDFN) OUT Output Circuit

The EV kit is fully assembled and tested. To verify board operation, follow the steps:

## Caution: Do not turn on power supply until all connections are completed.

- 1) Verify  that  jumpers  JU101,  SELA  and  SELB  are  in their default positions, as shown in Table 1 and Table 2.
- 2) Connect the 5.5V power supply between the IN and nearest GND terminal posts.
- 3) Connect the 500mA electronic load between the OUT and nearest GND terminal posts.
- 4) Connect  the  DVM  between  the  OUT  and  nearest GND terminal posts.
- 5) Turn on the power supply.
- 6) Enable the electronic load.
- 7) Verify  that  the  voltage  at  the  OUT  terminal  post  is approximately 5V.

Ordering Information appears at end of data sheet.

<!-- image -->

## Detailed Description of Hardware

The MAX25300  EV  kit evaluates the  MAX25300A/ MAX25300B IC family. The MAX25300A/MAX25300B are low  noise  linear  regulators  that  deliver  500mA  of  output current  with  only  12µV RMS   of  output  noise  from  10Hz  to 100kHz. These regulators require only 100mV of input-tooutput headroom at full load.

The MAX25300 EV kit features two independent circuits to evaluate two different IC packages of the MAX25300A/ MAX25300B family. Both  circuits  on  the  EV  kit  operate over  an  input  range  of  1.7V  to  5.5V.  The  TDFN  circuit evaluates the MAX25300A/MAX25300B. Each circuit output on the EV kit delivers up to 500mA of current.

The MAX25300 (TDFN) circuit on the EV kit comes with the  MAX25300AATA/V+ installed. The output is jumperconfigurable between 1.2V and 5.0V (Table 2), and can deliver 500mA of current.

## EN for the MAX25300A/MAX25300B (TDFN) Circuit

The  MAX25300A/MAX25300B  (TDFN)  circuit  on  the EV kit provide a jumper JU101 to enable or disable the MAX25300A (or the MAX25300B after IC replacement). See Table 1 for jumper setting of jumper JU101.

## Table 1. EN on MAX25300A/MAX25300B (JU101)

| JU1 SHUNT POSITION   | DESCRIPTION        |
|----------------------|--------------------|
| 1-2*                 | Enabled. EN = IN   |
| 2-3                  | Disabled. EN = GND |

*Default position.

Table 2. SELA and SELB on MAX25300A (SELA, SELB)

| SELA           | SELA            | SELB           | SELB            | OUTPUT   |
|----------------|-----------------|----------------|-----------------|----------|
| SHUNT POSITION | SELA CONNECTION | SHUNT POSITION | SELB CONNECTION | VOLTAGE  |
| Not Installed  | Hi-Z            | 1-2            | IN              | 1.2      |
| 1-2            | IN              | Not Installed  | Hi-Z            | 1.5      |
| Not Installed  | Hi-Z            | 2-3            | GND             | 1.8      |
| Not Installed  | Hi-Z            | Not Installed  | Hi-Z            | 2.5      |
| 2-3            | GND             | 2-3            | GND             | 3.0      |
| 2-3            | GND             | 1-2            | IN              | 3.1      |
| 2-3            | GND             | Not Installed  | Hi-Z            | 3.3      |
| 1-2            | IN              | 2-3            | GND             | 4.0      |
| 1-2*           | IN              | 1-2*           | IN              | 5.0      |

*Default position.

## Output Selection (SELA and SELB) for the MAX25300A/MAX25300B (TDFN) Circuit

The MAX25300A/MAX25300B (TDFN) circuit on the EV kit provide a set of jumpers SELA and SELB to configure the  output  voltage  of  the  MAX25300A.  See  Table  2  for jumper setting of jumpers SELA and SELB.

## Evaluating the MAX25300B

The MAX25300A/MAX25300B (TDFN) circuit can evaluate the MAX25300B after IC (U101) replacement. When evaluating  the  MAX25300B,  modify  the  EV  kit  with  the following steps:

- 1) Replace U101 with the MAX25300BATA/V+.
- 2) Install  feedback  resistors  R101  and  R102  to  obtain the  desired  output  voltage  between  0.6V  and  5.3V. Refer to the MAX25300 IC data for feedback resistor calculations.
- 3) Install  a  shunt  on  jumper  SELA  pins  2  and  3 (GS = GND).
- 4) Remove shunt from jumper SELB. POK is accessible on the POK test point.
- 5) Install a 100kΩ resistor on R103. POK open-drain is pulled up through resistor R103. When the regulator output reaches its regulation, POK goes low.

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25300EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX25300A/MAX25300B

## Component Suppliers

| SUPPLIER                                | WEBSITE            |
|-----------------------------------------|--------------------|
| Murata/TOKO                             | www.murata.com     |
| TDK                                     | www.tdk.com        |
| Samsung Electro-Mechanics America, Inc. | www.samsungsem.com |

Note: Indicate that you are using the MAX25300A/MAX25300B when contacting these component suppliers.

│

## MAX25300 EV Kit Bill of Materials

| ITEM                                 | QTY                                  | REF DES                                       | VAR STATUS                           | MAXINV                               | MFG PART #                                                   | MANUFACTURER                                     | VALUE                                | DESCRIPTION                                                                                                                                                                                                                               | COMMENTS                             |
|--------------------------------------|--------------------------------------|-----------------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------------------------------|--------------------------------------------------|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| 1                                    | 1                                    | C101                                          | Pref                                 | 20-00U01-77                          | C1608C0G1H103J080AA; CGA3E2C0G1H103J080AD; GRM1885C1H103JA01 | TDK;TDK;MURATA                                   | 0.01UF                               | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; TG=-55 DEGC to +125 DEGC; TC=C0G                                                                                                                                                |                                      |
| 2                                    | 2                                    | C102, C103                                    | Pref                                 | 20-004U7-R1                          | GMC10X7R475K6R3NT; CL10B475KQ8NQN; JMK107BB7475KA            | CAL-CHIP ELECTRONIC INC.; SAMSUNG EL;TAIYO YUDEN | 4.7UF                                | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 6.3V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R; NOT RECOMMENDED FOR NEW DESIGN-USE 20-004u7-16                                                                                       |                                      |
| 3                                    | 4                                    | GND, GND_OUT, IN, OUT                         | Pref                                 | 02-15142-00                          | 1514-2                                                       | KEYSTONE                                         | 1514-2                               | TERMINAL; TURRET; PIN DIA=0.090IN; TOTAL LENGTH=0.105IN; BOARD HOLE=0.098IN; BRASS; TIN PLATING; RECOMMENDED FOR BOARD THICKNESS=0.062IN                                                                                                  |                                      |
| 4                                    | 3                                    | JU101, SELECTA, SELECTB                       | Pref                                 | 01-PEC03SAAN3P-21                    | PEC03SAAN                                                    | SULLINS                                          | PEC03SAAN                            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                                                                                 |                                      |
| 5                                    | 5                                    | POK, TP1_GND_OUT, TP1_OUT, TP_GND_IN, TP_IN   | Pref                                 | 02-TPMINI5002-00                     |                                                              | 5002 KEYSTONE                                    | N/A                                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; NOT FOR COLD TEST ;NOTE: SET TO OBSOLETE DUE TO CORRECTION IN STEP MODEL COLOR                                                      |                                      |
| 6                                    | 1                                    | R101                                          | Pref                                 | 80-0000R-AA6                         | CRCW06030000Z0                                               | VISHAY DALE                                      |                                      | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                                                                                                                                     |                                      |
| 7                                    | 4                                    | SU1-SU4                                       | Pref                                 | 02-JMPFSTC02SYAN-00                  | STC02SYAN                                                    | SULLINS ELECTRONICS CORP.                        | STC02SYAN                            | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL; NOTE: SET TO OBSOLETE USE MAXINV NO 02-JMPFS1100B-00                                                             |                                      |
| 8                                    | 2                                    | TP3, TP6                                      | Pref                                 | 01-131435300-10                      | 131-4353-00                                                  | TEKTRONICS                                       | 131-4353-00                          | CONNECTOR;WIREMOUNT; CIRCUITBOARDTESTPOINTMINIATUREPROBE;STRAIGHT;4PINS                                                                                                                                                                   | (TP3:IN) (TP6:OUT)                   |
| 9                                    | 1                                    | TP_GND                                        | Pref                                 | 02-TPMINI5001-00                     | 5001                                                         | KEYSTONE                                         | N/A                                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST;NOTE: SET TO OBSOLETE DUE TO CORRECTION IN STEP MODEL COLOR |                                      |
| 10                                   | 1                                    | TP_OUT                                        | Pref                                 | 02-TPMINI5000-00                     |                                                              | 5000 KEYSTONE                                    | N/A                                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST;NOTE: SET TO OBSOLETE DUE TO CORRECTION IN STEP MODEL COLOR   |                                      |
| 11                                   | 1                                    | U101                                          | Pref                                 | 00-SAMPLE-02                         | MAX25300AATA/V+                                              | MAXIM                                            | MAX25300AATA/V+                      | EVKIT PART-IC; MAX25300AATA/V+; 2 MICROVOLTLOW NOISE 500 MILLIAMPERE LDO LINEAR REGULATORS; PACKAGE OUTLINE DRAWING: 21-0168; LAND                                                                                                        |                                      |
| 12                                   | 1                                    | PCB                                           | -                                    | EPCB25300                            |                                                              |                                                  | PCB                                  | PATTERN DRAWING: 90-0065                                                                                                                                                                                                                  | -                                    |
| MAX25300 MAXIM PCB:MAX25300 TOTAL 26 | MAX25300 MAXIM PCB:MAX25300 TOTAL 26 | MAX25300 MAXIM PCB:MAX25300 TOTAL 26          | MAX25300 MAXIM PCB:MAX25300 TOTAL 26 | MAX25300 MAXIM PCB:MAX25300 TOTAL 26 | MAX25300 MAXIM PCB:MAX25300 TOTAL 26                         | MAX25300 MAXIM PCB:MAX25300 TOTAL 26             | MAX25300 MAXIM PCB:MAX25300 TOTAL 26 | MAX25300 MAXIM PCB:MAX25300 TOTAL 26                                                                                                                                                                                                      | MAX25300 MAXIM PCB:MAX25300 TOTAL 26 |
| DO NOT ITEM                          | QTY                                  | PURCHASE(DNP) REF DES                         | Var Status                           | MAXINV                               | MFG PART #                                                   | MANUFACTURER                                     | VALUE                                | DESCRIPTION                                                                                                                                                                                                                               | COMMENTS                             |
| 1                                    | 1                                    | C1                                            | DNP                                  | 20-00U01-77                          | C1608C0G1H103J080AA; CGA3E2C0G1H103J080AD; GRM1885C1H103JA01 | TDK;TDK;MURATA                                   | 0.01UF                               | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; TG=-55 DEGC to +125 DEGC; TC=C0G                                                                                                                                                |                                      |
| 2                                    | 2                                    | C2, C3                                        | DNP                                  | 20-004U7-R1                          | GMC10X7R475K6R3NT; CL10B475KQ8NQN; JMK107BB7475KA            | CAL-CHIP ELECTRONIC INC.; SAMSUNG EL;TAIYO YUDEN | 4.7UF                                | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 6.3V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R; NOT RECOMMENDED FOR NEW DESIGN-USE 20- 004u7-16                                                                                      |                                      |
| 3                                    | 2                                    | C4, C104                                      | DNP                                  | N/A                                  | N/A                                                          | N/A                                              | OPEN                                 | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR - EVKIT                                                                                                                                                                                          |                                      |
| 4                                    | 4                                    | GND1, GND1_OUT, IN1, OUT1                     | DNP                                  | 02-15142-00                          | 1514-2                                                       | KEYSTONE                                         | 1514-2                               | TERMINAL; TURRET; PIN DIA=0.090IN; TOTAL LENGTH=0.105IN; BOARD HOLE=0.098IN; BRASS; TIN PLATING; RECOMMENDED FOR BOARD THICKNESS=0.062IN                                                                                                  |                                      |
| 5                                    | 1                                    | JU1                                           | DNP                                  | 01-PEC03SAAN3P-21                    | PEC03SAAN                                                    | SULLINS                                          | PEC03SAAN                            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                                                                                 |                                      |
| 6                                    | 1                                    | R1                                            | DNP                                  | 80-0909K-AA4                         | CRCW0603909KFK                                               | VISHAY DALE                                      | 909K                                 | RESISTOR; 0603; 909K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                                                                    |                                      |
| 7                                    | 1                                    | R2                                            | DNP                                  | 80-0200K-24                          | CRCW06032003FK                                               | VISHAY DALE                                      | 200K                                 | RESISTOR; 0603; 200K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                                                       |                                      |
| 8                                    | 2                                    | R3, R105                                      | DNP                                  | N/A                                  | N/A                                                          | N/A                                              | SHORT                                | PACKAGE OUTLINE 0603 RESISTOR - EVKIT                                                                                                                                                                                                     |                                      |
| 9                                    | 4                                    | TP1_GND1_OUT, TP1_OUT1,                       | TP_GDNP                              | 02-TPMINI5002-00                     |                                                              | 5002 KEYSTONE                                    | N/A                                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; NOT FOR COLD TEST ;NOTE: SET TO OBSOLETE DUE TO CORRECTION IN STEP MODEL COLOR                                                      |                                      |
| 10                                   | 1                                    | TP4                                           | DNP                                  | 01-131435300-10                      | 131-4353-00                                                  | TEKTRONICS                                       | 131-4353-00                          | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                                                                                                                                           | IN1                                  |
| 11                                   | 1                                    | TP5                                           | DNP                                  | 01-131435300-10                      | 131-4353-00                                                  | TEKTRONICS                                       | 131-4353-00                          | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                                                                                                                                           | OUT1                                 |
| 12                                   | 1                                    | TP_GND1                                       | DNP                                  | 02-TPMINI5001-00                     |                                                              | 5001 KEYSTONE                                    | N/A                                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST;NOTE: SET TO OBSOLETE DUE TO CORRECTION IN STEP MODEL COLOR |                                      |
| 13                                   | 1                                    | TP_OUT1                                       | DNP                                  | 02-TPMINI5000-00                     |                                                              | 5000 KEYSTONE                                    | N/A                                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST;NOTE: SET TO OBSOLETE DUE TO CORRECTION IN STEP MODEL COLOR   |                                      |
| 14                                   | 1                                    | U1                                            | DNP                                  | N/A                                  | MAX38902C-ANT+                                               | MAXIM                                            | MAX38902C-ANT+                       | EVKIT PART - IC; MAX38902C-ANT+; WLP6; PACKAGE OUTLINE DEVICE: 21-100055; PKG. CODE: N60C1+1                                                                                                                                              |                                      |
| 15                                   | 3                                    | R102-R104                                     | DNP                                  | N/A                                  | N/A                                                          | N/A                                              | OPEN                                 | PACKAGE OUTLINE 0603 RESISTOR - EVKIT                                                                                                                                                                                                     |                                      |
| TOTAL 26                             | TOTAL 26                             | TOTAL 26                                      | TOTAL 26                             | TOTAL 26                             | TOTAL 26                                                     | TOTAL 26                                         | TOTAL 26                             | TOTAL 26                                                                                                                                                                                                                                  | TOTAL 26                             |
| PACKOUT ITEM                         | (These QTY                           | are purchased parts but not assembled REF DES | on PCB and will Var Status           | be shipped with PCB) MAXINV          | MFG PART #                                                   | MANUFACTURER                                     | VALUE                                | DESCRIPTION                                                                                                                                                                                                                               | COMMENTS                             |
| 1                                    | 1                                    | PACKOUT_BOX                                   | Pref                                 | 88-00711-SML                         | 88-00711-SML                                                 | N/A                                              | N/A                                  | BOX;SMALL BROWN 9 3/16X7X1 1/4 - PACKOUT                                                                                                                                                                                                  |                                      |
| 2                                    | 1                                    | PACKOUT_BOX                                   | Pref                                 | 87-02162-00                          | 87-02162-00                                                  | N/A                                              | N/A                                  | ESD BAG;BAG;STATIC SHIELD ZIP 4inX6in;W/ESD LOGO - PACKOUT                                                                                                                                                                                |                                      |
| 3                                    | 1                                    | PACKOUT_BOX                                   | Pref                                 | 85-MAXKIT-PNK                        | 85-MAXKIT-PNK                                                | N/A                                              | N/A                                  | PINK FOAM;FOAM;ANTI-STATIC PE 12inX12inX5MM - PACKOUT                                                                                                                                                                                     |                                      |
| 4                                    | 1                                    | PACKOUT_BOX                                   | Pref                                 | EVINSERT                             | EVINSERT                                                     | N/A                                              | N/A                                  | WEB INSTRUCTIONS FOR MAXIM DATA SHEET                                                                                                                                                                                                     |                                      |
| 5                                    | 1                                    | PACKOUT_BOX                                   | Pref                                 | 85-84003-006                         | 85-84003-006                                                 | N/A                                              | N/A                                  | LABEL(EV KIT BOX) - PACKOUT                                                                                                                                                                                                               | PACKOUT (INSTALL AFTER TEST)         |
| 6                                    | 4                                    | BUMP1-BUMP4                                   | DNI                                  | 02-SJ5003-00                         | SJ-5003(BLACK)                                               | 3M ELECTRONIC SOLUTIONS DIVISION                 | SJ-5003(BLACK)                       | BUMPER; BLACK-HEMISPHERICAL SHAPE EVKIT EH0231; 0.44D/0.2BH; RESILIENT ELASTOMER POLYURETHANE                                                                                                                                             |                                      |

## MAX25300 EV Kit Schematic

<!-- image -->

│

## MAX25300 EV Kit PCB Layout Diagrams

MAX25300 EV Kit-Top Silkscreen

<!-- image -->

MAX25300 EV Kit-Top View

<!-- image -->

MAX25300 EV Kit-Bottom View

<!-- image -->

MAX25300 EV Kit-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/20            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSlieG. 0a[iP InteJrateG reserYes tKe riJKt to FKanJe tKe FirFXitr\ anG sSeFi¿Fations ZitKoXt notiFe at an\ tiPe.

<!-- image -->

│

Evaluates: MAX25300A/MAX25300B