<!-- lastmod 2022-10-10 -->
## MAX38640 WLP Evaluation Kit

## General Description

The  MAX38640  evaluation  kit  (EV  kit)  evaluates  the MAX38640/1/2/3  A/B  IC  family  of  ultra-low  quiescent current  step-down  DC-DC  converters  in  the  wafer-level package  (WLP)  .  The  EV  kit  operates  over  an  input range of 1.8V to 5.5V, and provides resistor-configurable output  voltages  from  0.7V  to  3.3V.  The  EV  kit  delivers up to 175mA/350mA/700mA of current depending on the input voltage to the output voltage ratio.

The EV kit comes with the MAX38640AENT+ installed.

## Features

- Evaluates the MAX38640/1/2/3 A/B IC Family in a 6-pin WLP
- 1.8V to 5.5V Input Range
- 0.7V to 3.3V Configurable Output Voltage
- Up to 175mA/350mA/700mA Output Current
- Proven 2-Layer 1oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assemble and Tested

Ordering Information appears at end of data sheet.

## MAX38640 EV Kit Files

| FILE                                        | DECRIPTION                |
|---------------------------------------------|---------------------------|
| MAX38640 WLP EV BOM                         | EV Kit Bill of Material   |
| MAX38640 WLP EV PCB Layout                  | EV Kit Layout             |
| MAX38640 WLP EV Schematic                   | EV Kit Schematic          |
| MAX38640 WLP EV Minimal Component Schematic | Minimal Component Circuit |

<!-- image -->

Evaluates: MAX38640/1/2/3 A/B in WLP

## Quick Start

## Required Equipment

- MAX38640 WLP EV kit
- 5.5V, 3A DC power supply
- Electronic load capable of 250mA
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Verify that jumpers JU1 and JU2 are in their default positions, as shown in Table 1 and Table 2 .
- 2) Connect the 5.5V power supply between the IN and nearest GND terminal posts.
- 3) Connect the 250mA electronic load between the OUT and nearest GND terminal posts.
- 4) Connect the DVM between the OUT and nearest GND terminal posts.
- 5) Turn on the power supply.
- 6) Enable the electronic load.
- 7) Verify that the voltage at the OUT terminal post is approximately 1.8V.

## MAX38640 WLP Evaluation Kit

## Detailed Description of Hardware

The MAX38640 EV kit evaluates the MAX38640/1/2/3 A/B IC family of ultra-low quiescent current step-down DC-DC converters in the WLP. The EV kit operates over an input range of 1.8V to 5.5V, and provides resistor-configurable output  voltages  from  0.7V  to  3.3V.  The  EV  kit  delivers up to 175mA/350mA/700mA of current depending on the input voltage to the output voltage ratio.

The EV kit comes with the MAX38640AENT+ installed.

## EN

The  MAX38640  WLP  EV  kit  provides  a  jumper  JU1  to enable  or  disable  the  MAX38640.  Refer  to  Table  1 for jumper JU1 settings.

## Table 1. EN (JU1)

| SHUNT POSITION   | DESCRIPTION                                                    |
|------------------|----------------------------------------------------------------|
| 1-2*             | EV Kit Enabled                                                 |
| 1-3              | EV Kit Controlled by External (TTL) Source Connected to EXT_EN |
| 1-4              | EV Kit Disabled                                                |

## Component Suppliers

| SUPPLIER             | WEBSITE                     |
|----------------------|-----------------------------|
| Cal Chip Electronics | www.calchipelectronics.com/ |
| Samsung Electronics  | www.samsung.com             |
| Wurth Electronics    | www.we-online.com           |

Note: Indicate that you are using the MAX38640/1/2/3 A/B when contacting these component suppliers.

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX38640EVKIT#WLP | EV Kit |

# Denotes RoHS-compliant device

## Evaluates: MAX38640/1/2/3 A/B in WLP

## RSEL

The  MAX38640  WLP  EV  kit  provides  a  jumper  JU2 to  configure  the  RSEL  pin  of  the  MAX38640.  Refer  to Table 2 for jumper JU2 settings.

## Spare Inductors

The MAX38640 WLP EV kit provides spare inductors on the PCB's bottom side. The spare inductors can be used to reconfigure the EV kit output current ratings.

## Evaluating the other MAX38640/1/2/3 A/B

The MAX38640 WLP EV kit can be modified to evaluate the  other  WLP  ICs  in  the  MAX38640/1/2/3  A/B  family. To  evaluate  the  other  WLP  ICs  in  the  MAX3864x  A/B family,  replace  U1  with  the  desired  IC  and  refer  to  the MAX38640/1/2/3 A/B IC data sheet for additional detail.

## Table 2. RSEL (JU2)

| SHUNT POSITION   | DESCRIPTION   |
|------------------|---------------|
| 1-2              | OUT = 0.7V    |
| 1-3              | OUT = 1.0V    |
| 1-4*             | OUT = 1.8V    |
| 1-5              | OUT = 3.3V    |

│

## MAX38640 WLP EV Kit Bill of Materials

| ITEM   | REF_DES     | DNI/DNP   |   QTY | MFG PART #                                              | MANUFACTURER              | VALUE         | DESCRIPTION                                                                                                         | COMMENTS   |
|--------|-------------|-----------|-------|---------------------------------------------------------|---------------------------|---------------|---------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C1          | -         |     1 | C1608X5R1A106K                                          | TDK                       | 10UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                    |            |
| 2      | C2          | -         |     1 | CL10A226KQ8NRN                                          | SAMSUNG                   | 22UF          | CAP; SMT (0603); 22UF; 10%; 6.3V; X5R; CERAMIC CHIP                                                                 |            |
| 3      | EXT_EN, TP5 | -         |     2 |                                                         | 5002 KEYSTONE             | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;               |            |
| 4      | GND         | -         |     1 | 5001                                                    | KEYSTONE                  | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |            |
| 5      | IN, J1-J3   | -         |     4 | 1514-2                                                  | KEYSTONE                  | 1514-2        | TERMINAL; TURRET; PIN DIA=0.090IN; TOTAL LENGTH=0.105IN; BOARD HOLE=0.098IN; BRASS; TIN PLATING;                    |            |
| 6      | JU1         | -         |     1 | PEC04SAAN                                               | SULLINS ELECTRONICS CORP. | PEC04SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                           |            |
| 7      | JU2         | -         |     1 | PBC05SAAN                                               | SULLINS ELECTRONICS CORP. | PBC05SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65 DEGC TO +125 DEGC                                    |            |
| 8      | L1          | -         |     1 | 1285AS-H-2R2M                                           | TOKO                      | 2.2UH         | INDUCTOR; SMT (2016); METAL ALLOY CHIP; 2.2UH; TOL=+/-20%; 1.4A                                                     |            |
| 9      | L1A         | -         |     1 | 74479887247A                                            | WURTH ELECTRONICS INC.    | 4.7UH         | INDUCTOR; SMT (1008); SHIELDED; 4.7UH; 20%; 1.00A                                                                   |            |
| 10     | L1B         | -         |     1 | 74479276222                                             | WURTH ELECTRONICS INC.    | 2.2UH         | INDUCTOR; SMT (0806); MOLDED CHIP; 2.2UH; 30%; 1.40A                                                                |            |
| 11     | L1C         | -         |     1 | 74479976215                                             | WURTH ELECTRONICS INC.    | 1.5UH         | INDUCTOR; SMT (0806); SHIELDED; 1.5UH; 20%; 1.60A                                                                   |            |
| 12     | L1D         | -         |     1 | 74479876210                                             | WURTH ELECTRONICS INC.    | 1UH           | INDUCTOR; SMT (0806); SHIELDED; 1UH; 20%; 1.50A                                                                     |            |
| 13     | L1E         | -         |     1 | 74479262210                                             | WURTH ELECTRONICS INC     | 1UH           | INDUCTOR; SMT (0603); MOLDED CHIP; 1UH; TOL=+/-20%; 1.2A                                                            |            |
| 14     | L1F         | -         |     1 | 74479776233A                                            | WURTH ELECTRONICS INC     | 3.3UH         | EVKIT PART- COUPLED INDUCTOR; SMT; SHIELDED; 3.3UH; +/- 20%; 1.25A; COMBINATION OF 2520; 2016; AND 0603             |            |
| 15     | LX, OUT     | -         |     2 | 131-4353-00                                             | TEKTRONICS                | 131-4353-00   | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                     |            |
| 16     | R1, R2      | -         |     2 | ERJ-2GE0R00X                                            | PANASONIC                 |               | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                              |            |
| 17     | R3          | -         |     1 | CRCW060366K5FK; ERJ-3EKF6652V                           | VISHAY DALE;PANASONIC     | 66.5K         | RESISTOR; 0603; 66.5K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                            |            |
| 18     | R4          | -         |     1 | CRCW0603191KFK                                          | VISHAY DALE               | 191K          | RESISTOR; 0603; 191K OHM; 1%; 100PPM; 0.10W; METAL FILM                                                             |            |
| 19     | R5          | -         |     1 | MCR03EZPFX2002; ERJ-3EKF2002; CR0603-FX-2002ELF         | ROHM;PANASONIC; BOURNS    | 20K           | RESISTOR; 0603; 20K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                              |            |
| 20     | R6          | -         |     1 | CRCW060356K2FK                                          | VISHAY DALE               | 56.2K         | RESISTOR; 0603; 56.2K OHM; 1%; 100PPM; 0.10W; METAL FILM                                                            |            |
| 21     | R7          | -         |     1 | CRCW06030000Z0                                          | VISHAY DALE               |               | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                               |            |
| 22     | SU1, SU2    | -         |     2 | S1100-B;SX1100-B                                        | KYCON;KYCON               | SX1100-B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED             |            |
| 23     | U1          | -         |     1 | MAX38640AENT+                                           | MAXIM                     | MAX38640AENT+ | EVKIT PART - IC; TINY 300NANO-AMP NANOPOWER BUCK CONVERTER; PACKAGE OUTLINE: 21-100128; PACKAGE CODE: N60E1+1; WLP6 |            |
| 24     | PCB         | -         |     1 | MAX38640WLP                                             | MAXIM                     | PCB           | PCB:MAX38640WLP                                                                                                     |            |
| 25     | C3          | DNP       |     0 | 25SVPF100M                                              | PANASONIC                 | 100UF         | CAP; SMT (CASE_E7); 100UF; 20%; 25V; ALUMINUM-ORGANIC                                                               |            |
| 26     | C4          | DNP       |     0 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA | MURATA;MURATA;TDK         | 0.1UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                    |            |
| 27     | L2          | DNP       |     0 | 74479776233A                                            | WURTH ELECTRONICS INC     | 3.3UH         | EVKIT PART- COUPLED INDUCTOR; SMT; SHIELDED; 3.3UH; +/- 20%; 1.25A; COMBINATION OF 2520; 2016; AND 0603             |            |
| 28     | TP1-TP4     | DNP       |     0 |                                                         | 5002 KEYSTONE             | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;               |            |
| TOTAL  |             |           |    31 |                                                         |                           |               |                                                                                                                     |            |

## MAX38640 WLP EV Kit Schematic

<!-- image -->

## MAX38640 WLP EV Kit PCB Layout Diagrams

<!-- image -->

MAX38640 WLP EV Kit-Top Silkscreen

<!-- image -->

MAX38640 WLP EV Kit-Top

MAX38640 WLP EV Kit-Bottom

<!-- image -->

MAX38640 WLP EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX38640 WLP Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/18           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX38640/1/2/3 A/B in WLP