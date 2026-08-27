<!-- lastmod 2022-08-03 -->
## MAX25301 Evaluation Kit

## General Description

The  MAX25301  evaluation  kit  (EV  kit)  evaluates  the MAX25301A/MAX25301B  IC  family  of  low  noise  linear regulators.  The  EV  kit  operates  over  an  input  range  of 1.7V to 5.5V, provides any output voltage range from 0.6V to 5.3V, and delivers up to 1A of current. The EV kit comes with the MAX25301BATB/V+ installed.

## Features

- Evaluates the MAX25301A/MAX25301B IC in a 10-pin (3mm x 3mm) TDFN
- 1.7V to 5.5V Input Range
- 0.6V to 5.3V Resistor-Configurable Output Voltage (MAX25301B, On Board with Output Set to 3.3V)
- 1.2V to 5.0V Jumper-Configurable Output Voltage (MAX25301A, with IC Replacement)
- Up to 1A Output Current
- Proven 2-Layer 1oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX25301 EV Kit Files

| FILE                       | DECRIPTION              |
|----------------------------|-------------------------|
| MAX25301 EV Kit BOM        | EV Kit Bill of Material |
| MAX25301 EV Kit PCB Layout | EV Kit Layout           |
| MAX25301 EV Kit Schematic  | EV Kit Schematic        |

<!-- image -->

Evaluates: MAX25301A/MAX25301B

## Quick Start

## Required Equipment

- MAX25301 EV kit
- 5.5V, 1A DC power supply
- Electronic load capable of 1A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. To verify board operation, follow the steps:

## Caution: Do not turn  on  power  supply  until  all  connections are completed.

- 1) Verify that jumpers JU101, SELA and SELB are in their default positions, as shown in Tables 1, 2, and 3.
- 2) Connect the 5.5V power supply between the IN and nearest GND terminal posts.
- 3) Connect the 1A electronic load between the OUT and nearest GND terminal posts.
- 4) Connect the DVM between the OUT and nearest GND terminal posts.
- 5) Turn on the power supply.
- 6) Enable the electronic load.
- 7) Verify that the voltage at the OUT terminal post is approximately 3.3V.

## MAX25301 Evaluation Kit

## Detailed Description of Hardware

The  MAX25301  EV  kit  evaluates  the  MAX25301A/ MAX25301B  IC  family.  The  MAX25301A/MAX25301B are low noise linear regulators that deliver 1A of output current with only 12uV RMS  of output noise from 10Hz to 100kHz. These regulators require only 100mV of input-tooutput headroom at full load.

The  MAX25301  EV  kit  operates  over  an  input  range  of 1.7V to 5.5V. The EV kit comes with the MAX25301BATB/ V+ installed and the output voltage is resistor configured to 3.3V and can deliver 1A of current. The output voltage on the MAX25301B can be reconfigured to other voltages from  0.6V  to  5.3V  by  replacing  feedback  resistors  R101 and R102. Refer to the MAX25301 IC data sheet for feedback resistor calculation.

## EN for the MAX25301A/MAX25301B

The EV kit provides a jumper JU101 to enable or disable the  MAX25301B  (or  the  MAX25301A  after  IC  replacement). See Table 1 for jumper setting of jumper JU101.

## GS for the MAX25301B

When  evaluating  the  MAX25301B,  the  Ground  Sense (GS)  pin  must  be  connected  to  ground  to  stabilize  the output  with  load.  The  EV  kit  provides  a  jumper  SELA  to connect the MAX25301B GS pin to ground. See Table 2 for jumper setting of jumper SELA.

## POK for the MAX25301B

The EV kit provides a test point to access the POK output signal from the MAX25301B. Remove shunt from jumper SELB  to  access  the  MAX25301B  POK  test  point.  See Table 3 for jumper setting of jumper SELB.

## Evaluates: MAX25301A/MAX25301B

## Table 1. EN on MAX25301A/MAX25301B (JU101)

| JU101 SHUNT POSITION   | DESCRIPTION        |
|------------------------|--------------------|
| 1-2*                   | Enabled. EN = IN   |
| 2-3                    | Disabled. EN = GND |

## Table 2. GS on MAX25301B (SELA)

| SELA SHUNT POSITION   | DESCRIPTION                                  |
|-----------------------|----------------------------------------------|
| 1-2                   | Not allowed (for MAX25301A output selection) |
| 2-3*                  | GS = GND                                     |

* Default position.

## Table 3. POK on MAX25301B (SELB)

| SELA SHUNT POSITION   | DESCRIPTION                                  |
|-----------------------|----------------------------------------------|
| 1-2                   | Not allowed (for MAX25301A output selection) |
| 2-3                   | Not allowed (for MAX25301A output selection) |
| Not Installed*        | Access signal at the POK test point          |

* Default position.

│

## MAX25301 Evaluation Kit

## Evaluating the MAX25301A

The  EV  kit  can  evaluate  the  MAX25301A  after  IC  (U1) replacement.  When  evaluating  the  MAX25301A,  modify the EV kit with the following steps:

- 1) Replace U1 with the MAX25301AATB/V+.
- 2) Replace R101 with a 0Ω resistor.
- 3) Remove R102.
- 4) See Table 4 to configure the MAX25301A output voltage using jumpers SELA and SELB.

## Table 4. SELA and SELB on MAX25301A (SELA, SELB)

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

## Component Suppliers

| SUPPLIER                                | WEBSITE            |
|-----------------------------------------|--------------------|
| Murata/TOKO                             | www.murata.com     |
| TDK                                     | www.tdk.com        |
| Samsung Electro-Mechanics America, Inc. | www.samsungsem.com |

Note:

Indicate that you are using the MAX25301A/MAX25301B when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25301EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX25301A/MAX25301B

## Output Selection (SELA and SELB) for the MAX25301A

The EV kit provides a set of jumpers SELA and SELB to configure the output voltage of the MAX25301A, after IC (U1) replacement. See Table 4 for jumper setting of jumpers SELA and SELB.

│

## MAX25301 EV Kit Bill of Materials

| ITEM                 | QTY               | REF DES                         | VAR STATUS           | MAXINV              | MFG PART #                                                                         | MANUFACTURER                       | VALUE           | DESCRIPTION                                                                                                                                                                                                                             | COMMENTS           |
|----------------------|-------------------|---------------------------------|----------------------|---------------------|------------------------------------------------------------------------------------|------------------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| 1                    | 1                 | C101                            | Pref                 | 20-0U047-91         | C0603C473K5RAC; GRM188R71H473KA61; GCM188R71H473KA55; CGA3E2X7R1H473K080AA         | KEMET;MURATA;MURATA;TDK            | 0.047UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.047UF; 50V; TOL=10%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                                 |                    |
| 2                    | 2                 | C102, C103                      | Pref                 | 20-0010U-R1A        | CL10B106MQ8NRN                                                                     | SAMSUNG ELECTRONICS                | 10UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; MODEL=CL SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                             |                    |
| 3                    | 3                 | GND, IN, OUT                    | Pref                 | 01-10807400011P-80  | 108-0740-001                                                                       | EMERSON NETWORK POWER              | 108-0740-001    | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                                                                                                                |                    |
| 4                    | 3                 | GND_PAD, IN_PAD, OUT_PAD        | Pref                 | 01-9020BUSS20AWG-00 | 9020 BUSS                                                                          | WEICO WIRE                         | MAXIMPAD        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                                                                                |                    |
| 5                    | 3                 | JU101, SELA, SELB               | Pref                 | 01-PEC03SAAN3P-21   | PEC03SAAN                                                                          | SULLINS                            | PEC03SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                                                                               |                    |
| 6                    | 1                 | POK                             | Pref                 | 02-TPMINI5002-00    |                                                                                    | 5002 KEYSTONE                      | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; NOT FOR COLD TEST ;NOTE: SET TO OBSOLETE DUE TO CORRECTION IN STEP MODEL COLOR                                                    |                    |
| 7                    | 1                 | R101                            | Pref                 | 80-0909K-AA4        | CRCW0603909KFK                                                                     | VISHAY DALE                        | 909K            | RESISTOR; 0603; 909K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                                                                  |                    |
| 8                    | 1                 | R102                            | Pref                 | 80-0200K-AA4        | ERJ-3EKF2003                                                                       | PANASONIC                          | 200K            | RESISTOR; 0603; 200K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                                                                  |                    |
| 9                    | 1                 | R103                            | Pref                 | 80-0100K-24         | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE;YAGEO;YAGEO; PANASONIC | 100K            | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                                                     |                    |
| 10                   | 3                 | SU1-SU3                         | Pref                 | 02-JMPFSTC02SYAN-00 | STC02SYAN                                                                          | SULLINS ELECTRONICS CORP.          | STC02SYAN       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL; NOTE: SET TO OBSOLETE USE MAXINV NO 02- JMPFS1100B-00                                                          |                    |
| 11                   | 2                 | TP1, TP6                        | Pref                 | 01-131435300-10     | 131-4353-00                                                                        | TEKTRONICS                         | 131-4353-00     | CONNECTOR;WIREMOUNT; CIRCUITBOARDTESTPOINTMINIATURE PROBE;STRAIGHT;4PINS TEST POINT; PIN DIA=0.1IN; TOTAL                                                                                                                               | (TP1:IN) (TP6:OUT) |
| 12                   | 1                 | TP_GND                          | Pref                 | 02-TPMINI5001-00    |                                                                                    | 5001 KEYSTONE                      | N/A             | LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST;NOTE: SET TO OBSOLETE DUE TO CORRECTION IN STEP MODEL COLOR                                |                    |
| 13                   | 1                 | TP_OUT                          | Pref                 | 02-TPMINI5000-00    |                                                                                    | 5000 KEYSTONE                      | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST;NOTE: SET TO OBSOLETE DUE TO CORRECTION IN STEP MODEL COLOR |                    |
| 14                   | 1                 | U1                              | Pref                 | 00-SAMPLE-01        | MAX25301BATB/V+                                                                    | MAXIM                              | MAX25301BATB/V+ | EVKIT PART-IC; MAX25301BATB/V+; 1 AMPERE AUTOMOTIVE LOW NOISE LDO LINEAR REGULATORS; PACKAGE OUTLINE DRAWING: 21-0137; LAND PATTERN DRAWING: 90-0003                                                                                    |                    |
| 15                   | 1                 | PCB                             | -                    | EPCB25301           | MAX25301                                                                           | MAXIM                              | PCB             | PCB:MAX25301                                                                                                                                                                                                                            | -                  |
| T ITEM               | PURCHASE(DNP) QTY | REF DES                         | VAR STATUS           | MAXINV              | MFG PART #                                                                         | MANUFACTURER                       | VALUE           | DESCRIPTION                                                                                                                                                                                                                             | COMMENTS           |
| 1                    | 1                 | C104                            | DNP                  | N/A                 | N/A                                                                                | N/A                                | OPEN            | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR - EVKIT                                                                                                                                                                                        |                    |
| 2                    | 1                 | R104                            | DNP                  | N/A                 | N/A                                                                                | N/A                                | OPEN            | PACKAGE OUTLINE 0603 RESISTOR - EVKIT                                                                                                                                                                                                   |                    |
| 3                    | 1                 | R105                            | DNP                  | N/A                 | N/A                                                                                | N/A                                | SHORT           | PACKAGE OUTLINE 0603 RESISTOR - EVKIT                                                                                                                                                                                                   |                    |
| TOTAL 3              | TOTAL 3           | TOTAL 3                         | TOTAL 3              | TOTAL 3             | TOTAL 3                                                                            | TOTAL 3                            | TOTAL 3         | TOTAL 3                                                                                                                                                                                                                                 | TOTAL 3            |
| t not assembled ITEM | on QTY            | PCB and will be shipped REF DES | with PCB) VAR STATUS | MAXINV              | MFG PART #                                                                         | MANUFACTURER                       | VALUE           | DESCRIPTION                                                                                                                                                                                                                             | COMMENTS           |
| 1                    | 1                 | PACKOUT_BOX                     | Pref                 | 88-00711-SML        | 88-00711-SML                                                                       | N/A                                | N/A             | BOX;SMALL BROWN 9 3/16X7X1 1/4 - PACKOUT                                                                                                                                                                                                |                    |
| 2                    | 1                 | PACKOUT_BOX                     | Pref                 | 87-02162-00         | 87-02162-00                                                                        | N/A                                | N/A             | ESD BAG;BAG;STATIC SHIELD ZIP 4inX6in;W/ESD LOGO - PACKOUT                                                                                                                                                                              |                    |
| 3                    | 1                 | PACKOUT_BOX                     | Pref                 | 85-MAXKIT-PNK       | 85-MAXKIT-PNK                                                                      | N/A                                | N/A             | PINK FOAM;FOAM;ANTI-STATIC PE 12inX12inX5MM - PACKOUT                                                                                                                                                                                   |                    |
| 4                    | 1                 | PACKOUT_BOX                     | Pref                 | EVINSERT            | EVINSERT                                                                           | N/A                                | N/A             | WEB INSTRUCTIONS FOR MAXIM DATA SHEET                                                                                                                                                                                                   |                    |
| 5 TOTAL              | 1 5               | PACKOUT_BOX                     | Pref                 | 85-84003-006        | 85-84003-006                                                                       | N/A                                | N/A             | LABEL(EV KIT BOX) - PACKOUT                                                                                                                                                                                                             |                    |

## MAX25301 EV Kit Schematic

<!-- image -->

│

## MAX25301 EV Kit PCB Layout Diagrams

MAX25301 EV Kit-Top Silkscreen

<!-- image -->

MAX25301 EV Kit-Top

<!-- image -->

MAX25301 EV Kit-Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. Ma[iP Integrated reserves the right to change the circuitr\ and specifications without notice at an\ tiPe.

<!-- image -->

│

Evaluates: MAX25301A/MAX25301B