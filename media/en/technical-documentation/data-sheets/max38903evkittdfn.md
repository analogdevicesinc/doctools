<!-- lastmod 2022-10-10 -->
## MAX38903 TDFN Evaluation Kit

## General Description

The  MAX38903 TDFN  evaluation  kit  (EV  kit)  evaluates the MAX38903A/MAX38903B IC family of low noise linear regulators.  The  EV  kit  operates  over  an  input  range  of 1.7V to 5.5V and provides any output voltage range from 0.6V to 5.3V, and delivers up to 1A of current. The EV kit comes with the MAX38903BATB+ installed.

## Features

- Evaluates the MAX38903A/MAX38903B IC in a 10-pin (3mm x 3mm) TDFN
- 1.7V to 5.5V Input Range
- 0.6V to 5.3V Resistor Configurable Output Voltage (MAX38903B, On Board with Output Set to 3.3V)
- 1.2V to 5.0V Jumper Configurable Output Voltage (MAX38903A, with IC Replacement)
- Up to 1A Output Current
- Proven 2-Layer 1 oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX38903 TDFN EV Kit Files

| FILE                            | DECRIPTION              |
|---------------------------------|-------------------------|
| MAX38903 TDFN EV Kit BOM        | EV Kit Bill of Material |
| MAX38903 TDFN EV Kit PCB Layout | EV Kit Layout           |
| MAX38903 TDFN EV Kit Schematic  | EV Kit Schematic        |

<!-- image -->

Evaluates: MAX38903A/MAX38903B

## Quick Start

## Required Equipment

- MAX38903 TDFN EV kit
- 5.5V, 1A DC power supply
- Electronic load capable of 1A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution: Do not turn  on  power  supply  until  all  connections are completed.

- 1) Verify that jumpers JU101, SELA and SELB are in their default positions, as shown in Tables 1, 2, and 3.
- 2) Connect the 5.5V power supply between the IN and nearest GND terminal posts.
- 3) Connect the 1A electronic load between the OUT and nearest GND terminal posts.
- 4) Connect the DVM between the OUT and nearest GND terminal posts.
- 5) Turn on the power supply.
- 6) Enable the electronic load.
- 7) Verify that the voltage at the OUT terminal post is approximately 3.3V.

## MAX38903 TDFN Evaluation Kit

## Detailed Description of Hardware

The MAX38903 TDFN EV kit evaluates the MAX38903A/ MAX38903B  IC  family.  The  MAX38903A/MAX38903B are low noise linear regulators that deliver 1A of output current with only 12uV RMS  of output noise from 10Hz to 100kHz. These regulators require only 100mV of input-tooutput headroom at full load.

The MAX38903 TDFN EV kit operates over an input range of 1.7V to 5.5V. The EV Kit comes with the MAX38903BATB + installed and the output voltage is resistor configured to 3.3V and can deliver 1A of current. The output voltage on the  MAX38903B  can  be  reconfigured  to  other  voltages from  0.6V  to  5.3V  by  replacing  feedback  resistors  R101 and R102. Refer to the MAX38903 IC data sheet for feedback resistor calculation.

## EN for the MAX38903A/B

The EV kit provides a jumper JU101 to enable or disable the  MAX38903B  (or  the  MAX38903A  after  IC  replacement). Refer to Table 1 for jumper setting of jumper JU101.

## GS for the MAX38903B

When evaluating the MAX38903B, the Ground Sense (GS) pin  must  be  connected  to  ground  to  stabilize  the  output with  load.  The  EV  kit  provides  a  jumper  SELA  to  connect the MAX38903B GS pin to ground. Refer to Table 2 for jumper setting of jumper SELA.

## POK for the MAX38903B

The EV kit provides a test point to access the POK output signal from the MAX38903B. Remove shunt from jumper SELB to access the MAX38903B POK test point. Refer to Table 3 for jumper setting of jumper SELB.

## Evaluates: MAX38903A/MAX38903B

## Table 1. EN on MAX38903A/B (JU101)

| JU101 SHUNT POSITION   | DESCRIPTION        |
|------------------------|--------------------|
| 1-2*                   | Enabled. EN = IN   |
| 2-3                    | Disabled. EN = GND |

## Table 2. GS on MAX38903B (SELA)

| SELA SHUNT POSITION   | DESCRIPTION                                  |
|-----------------------|----------------------------------------------|
| 1-2                   | Not allowed (for MAX38903A output selection) |
| 2-3*                  | GS = GND                                     |

## Table 3. POK on MAX38903B (SELB)

| SELA SHUNT POSITION   | DESCRIPTION                                  |
|-----------------------|----------------------------------------------|
| 1-2                   | Not allowed (for MAX38903A output selection) |
| 2-3                   | Not allowed (for MAX38903A output selection) |
| Not Installed*        | Access signal at the POK test point          |

│

## MAX38903 TDFN Evaluation Kit

## Evaluating the MAX38903A

The  EV  kit  can  evaluate  the  MAX38903A  after  IC  (U1) replacement.  When  evaluating  the  MAX38903A,  modify the EV kit with the steps listed below:

- 1) Replace U1 with the MAX38903AATB+.
- 2) Replace R101 with a 0Ω resistor.
- 3) Remove R102.
- 4) Refer to Table 4 to configure the MAX38903A output voltage using jumpers SELA and SELB.

## Table 4. SELA and SELB on MAX38903A (SELA, SELB)

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
| Samsung Electro-Mechanics America. Inc. | www.samsungsem.com |

Note:

Indicate that you are using the MAX38903A/B when contacting these component suppliers.

## Ordering Information

| PART               | TYPE   |
|--------------------|--------|
| MAX38903EVKIT#TDFN | EV Kit |

# Denotes RoHS

## Evaluates: MAX38903A/MAX38903B

## Output Selection (SELA and SELB) for the MAX38903A

The EV kit provides a set of jumpers SELA and SELB to configure the output voltage of the MAX38903A, after IC (U1) replacement. Refer to Table 4 for jumper setting of jumpers SELA and SELB.

│

## MAX38903 TDFN EV Kit Bill of Materials

| ITEM     | REF_DES                  | DNI/DNP   | QTY      | MFG PART #                                     | MANUFACTURER              | VALUE         | DESCRIPTION                                                                                                             | COMMENTS           |
|----------|--------------------------|-----------|----------|------------------------------------------------|---------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------|--------------------|
| 1        | C101                     | -         | 1        | C0603C473K5RAC; GCM188R71H473K; GRM188R71H473K | KEMET;MURATA; MURATA      | 0.047UF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.047UF; 50V; TOL=10%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=                    |                    |
| 2        | C102, C103               | -         | 2        | CL10B106MQ8NRN                                 | SAMSUNG ELECTRONICS       | 10UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; MODEL=CL SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R             |                    |
| 3        | GND, IN, OUT             | -         | 3        | 108-0740-001                                   | EMERSON NETWORK POWER     | 108-0740-001  | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                |                    |
| 4        | GND_PAD, IN_PAD, OUT_PAD | -         | 3        | 9020 BUSS                                      | WEICO WIRE                | MAXIMPAD      | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                |                    |
| 5        | JU101, SELA, SELB        | -         | 3        | PEC03SAAN                                      | SULLINS                   | PEC03SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                               |                    |
| 6        | POK                      | -         | 1        | 5002                                           | KEYSTONE                  | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                   |                    |
| 7        | R101                     | -         | 1        | CRCW0603909KFK                                 | VISHAY DALE               | 909K          | RESISTOR; 0603; 909K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                  |                    |
| 8        | R102                     | -         | 1        | ERJ-3EKF2003                                   | PANASONIC                 | 200K          | RESISTOR; 0603; 200K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                  |                    |
| 9        | R103                     | -         | 1        | CRCW0603100KFK                                 | VISHAY DALE               | 100K          | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                                     |                    |
| 10       | SU1-SU3                  | -         | 3        | STC02SYAN                                      | SULLINS ELECTRONICS CORP. | STC02SYAN     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL |                    |
| 11       | TP1, TP6                 | -         | 2        | 131-4353-00                                    | TEKTRONICS                | 131-4353-00   | CONNECTOR;WIREMOUNT; CIRCUITBOARDTESTPOINTMINIAT UREPROBE;STRAIGHT;4PINS                                                | (TP1:IN) (TP6:OUT) |
| 12       | TP_GND                   | -         | 1        | 5001                                           | KEYSTONE                  | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      |                    |
| 13       | TP_OUT                   | -         | 1        | 5000                                           | KEYSTONE                  | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |                    |
| 14       | U1                       | -         | 1        | MAX38903BATB+                                  | MAXIM                     | MAX38903BATB+ | EVKIT PART-IC; PACKAGE CODE: T1033+1C; PACKAGE OUTLINE NUMBER: 21-0137                                                  |                    |
| 15       | PCB                      | -         | 1        | MAX38903TDFN                                   | MAXIM                     | PCB           | PCB:MAX38903TDFN                                                                                                        | -                  |
| 16       | C104                     | DNP       | 0        | N/A                                            | N/A                       | OPEN          | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                |                    |
| 17       | R104                     | DNP       | 0        | N/A                                            | N/A                       | OPEN          | PACKAGE OUTLINE 0603 RESISTOR                                                                                           |                    |
| 18       | R105                     | DNP       | 0        | N/A                                            | N/A                       | SHORT         | PACKAGE OUTLINE 0603 RESISTOR                                                                                           |                    |
| TOTAL 25 | TOTAL 25                 | TOTAL 25  | TOTAL 25 | TOTAL 25                                       | TOTAL 25                  | TOTAL 25      | TOTAL 25                                                                                                                | TOTAL 25           |

## MAX38903 TDFN EV Kit Schematic

<!-- image -->

│

## MAX38903 TDFN EV Kit PCB Layout Diagrams

<!-- image -->

MAX38903 EV Kit-Top Silkscreen

MAX38903 EV Kit-Top

<!-- image -->

MAX38903 EV Kit-Bottom

<!-- image -->

│

## MAX38903 TDFN Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/18           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. Ma[iP Integrated reserves the right to change the circuitr\ and specifications without notice at an\ tiPe.

│

Evaluates: MAX38903A/MAX38903B