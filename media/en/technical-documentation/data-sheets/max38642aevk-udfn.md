<!-- lastmod 2022-10-10 -->
## MAX38642A µDFN Evaluation Kit

## General Description

The  MAX38642A  evaluation  kit  (EV  kit)  evaluates  the MAX38642A,  an  ultra-low  quiescent  current  step-down DC-DC converter in the µDFN package. The EV kit operates over an input range of 1.8V to 5.5V, and provides resistorconfigurable output voltages from 1.0V to 3.3V. The EV kit delivers up to 350mA of current depending on the input voltage to the output voltage ratio.

The EV kit comes with the MAX38642AELT+ installed.

## Features

- Evaluates the MAX38642A in a 6-pin µDFN
- 1.8V to 5.5V Input Range
- 1.0V to 3.3V Configurable Output Voltage
- Up to 350mA Output Current
- Proven 2-Layer 1oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assemble and Tested

Ordering Information appears at end of data sheet.

## MAX38642A EV Kit Files

| FILE                          | DECRIPTION              |
|-------------------------------|-------------------------|
| MAX38642A µDFN EV BOM         | EV Kit Bill of Material |
| MAX38642A µ DFN EV PCB Layout | EV Kit Layout           |
| MAX38642A µ DFN EV Schematic  | EV Kit Schematic        |

<!-- image -->

Evaluates: MAX38642 A in µDFN

## Quick Start

## Required Equipment

- MAX38642A µDFN EV kit
- 5.5V, 3A DC power supply
- Electronic load capable of 350mA
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Verify that jumpers JU1 and JU2 are in their default positions, as shown in Table 1 and Table 2 .
- 2) Connect the 5.5V power supply between the IN and nearest GND terminal posts.
- 3) Connect the 350mA electronic load between the OUT and nearest GND terminal posts.
- 4) Connect the DVM between the OUT and nearest GND terminal posts.
- 5) Turn on the power supply.
- 6) Enable the electronic load.
- 7) Verify that the voltage at the OUT terminal post is 1.8V, within the device and the Output Voltage Selecting Resistor (RSEL)'s accuracy specifications.

## MAX38642A µDFN Evaluation Kit

## Detailed Description of Hardware

The MAX38642A EV kit evaluates the MAX38642A, an ultra-low  quiescent  current  step-down  DC-DC  converter in the µDFN package. The EV kit operates over an input range of 1.8V to 5.5V, and provides resistor-configurable output voltages from 1.0V to 3.3V. The EV kit delivers up to 350mA of current depending on the input voltage to the output voltage ratio.

The EV kit comes with the MAX38642AELT+ installed.

## EN

The MAX38642A µDFN EV kit provides a jumper JU1 to enable or disable the MAX38642A. Refer to Table 1 for jumper JU1 settings.

## Table 1. EN (JU1)

| SHUNT POSITION   | DESCRIPTION                                                    |
|------------------|----------------------------------------------------------------|
| 1-2*             | EV Kit Enabled                                                 |
| 1-3              | EV Kit Controlled by External (TTL) Source Connected to EXT_EN |
| 1-4              | EV Kit Disabled                                                |

## Component Suppliers

| SUPPLIER            | WEBSITE           |
|---------------------|-------------------|
| Murata              | www.murata.com    |
| Samsung Electronics | www.samsung.com   |
| Wurth Electronics   | www.we-online.com |

Note: Indicate that you are using the MAX38642A when contacting these component suppliers.

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX38642AEVK#uDFN | EV Kit |

# Denotes RoHS

## Evaluates: MAX38642 A in µDFN

## Output Voltage Selection

The MAX38642A µDFN EV kit provides a jumper JU2 to select the MAX38642A output voltage. Refer to Table 2 for jumper JU2 settings.

## Spare Inductor

The MAX38642A µDFN EV kit provides a spare inductor on  the  PCB's  bottom  side.  This  spare  inductor  can  be used to reconfigure the EV kit for a smaller solution size.

## Table 2. OUT (JU2)

| SHUNT POSITION   | DESCRIPTION                                                                                           |
|------------------|-------------------------------------------------------------------------------------------------------|
| 1-2              | OUT = 1.0V                                                                                            |
| 1-3              | OUT = 1.5V                                                                                            |
| 1-4*             | OUT = 1.8V                                                                                            |
| 1-5              | OUT = 3.3V                                                                                            |
| Not Installed    | Output Voltage can be configured to between 0.7V and 3.3V by resistor R1. Refer to the IC data sheet. |

## MAX38642A µDFN EV Kit Bill of Materials

| ITEM   | REF_DES   | DNI/DNP   |   QTY | MFG PART #                                     | MANUFACTURER                          | VALUE         | DESCRIPTION                                                                                                                                     | COMMENTS   |
|--------|-----------|-----------|-------|------------------------------------------------|---------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C1-C3     | -         |     3 | CL10A226KQ8NRN                                 | SAMSUNG                               | 22UF          | CAP; SMT (0603); 22UF; 10%; 6.3V; X5R; CERAMIC CHIP                                                                                             |            |
| 2      | C5        | -         |     1 | 25SVPF100M                                     | PANASONIC                             | 100UF         | CAP; SMT (CASE_E7); 100UF; 20%; 25V; ALUMINUM-ORGANIC                                                                                           |            |
| 3      | J1-J4     | -         |     4 | 1514-2                                         | KEYSTONE                              | 1514-2        | TERMINAL; TURRET; PIN DIA=0.090IN; TOTAL LENGTH=0.105IN; BOARD HOLE=0.098IN; BRASS; TIN PLATING;                                                |            |
| 4      | JU1       | -         |     1 | PEC04SAAN                                      | SULLINS ELECTRONICS CORP.             | PEC04SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                                       |            |
| 5      | JU2       | -         |     1 | PBC05SAAN                                      | SULLINS ELECTRONICS CORP.             | PBC05SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65 DEGC TO +125 DEGC                                                                |            |
| 6      | L1        | -         |     1 | 74437324022                                    | WURTH ELECTRONICS INC                 | 2.2UH         | INDUCTOR; SMT; SHIELDED; 2.2UH; 20%; 3.25A                                                                                                      |            |
| 7      | L1A       | -         |     1 | DFE201612E-2R2M                                | MURATA                                | 2.2UH         | INDUCTOR; SMT (0806); WIREWOUND CHIP; 2.2UH; TOL=+/- 20%; 1.8A                                                                                  |            |
| 8      | R2        | -         |     1 | CRCW0603191KFK                                 | VISHAYDALE                            | 191K          | RESISTOR; 0603; 191K OHM; 1%; 100PPM; 0.10W; METAL FILM                                                                                         |            |
| 9      | R3        | -         |     1 | ERJ-3EKF6343                                   | PANASONIC                             | 634K          | RES; SMT (0603); 634K; 1%; +/-100PPM/DEGC; 0.1W                                                                                                 |            |
| 10     | R4        | -         |     1 | CRCW060320K0FK                                 | VISHAYDALE                            | 20K           | RESISTOR; 0603; 20K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                           |            |
| 11     | R5        | -         |     1 | ERJ-3EKF5622                                   | PANASONIC                             | 56.2K         | RESISTOR; 0603; 56.2K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                         |            |
| 12     | R6        | -         |     1 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH  |               | 0 RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                                          |            |
| 13     | SU1, SU2  | -         |     2 | S1100-B;SX1100-B; STC02SYAN                    | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                         |            |
| 14     | TP5       | -         |     1 | 5002                                           | KEYSTONE                              | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                           |            |
| 15     | TP6, TP7  | -         |     2 | 5001                                           | KEYSTONE                              | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                              |            |
| 16     | U1        | -         |     1 | MAX38642AELT+                                  | MAXIM                                 | MAX38642AELT+ | EVKIT PART - IC; TINY 300NANO-AMPNANOPOWER BUCK CONVERTER; PACKAGE OUTLINE: 21-0164; PACKAGE CODE: L622+1C; PACKAGE LAND PATTERN: 90-0004; DFN6 |            |
| 17     | PCB       | -         |     1 | MAX38642AUDFN                                  | MAXIM                                 | PCB           | PCB:MAX38642AUDFN                                                                                                                               |            |
| 18     | MH1-MH4   | DNP       |     0 | 9032                                           | KEYSTONE                              | 9032          | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                       |            |
| 19     | R1        | DNP       |     0 | CRCW06030000Z0                                 | VISHAYDALE                            |               | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                                           |            |
| 20     | C4        | DNP       |     0 | N/A                                            | N/A                                   | OPEN          | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                                        |            |
| TOTAL  |           |           |    24 |                                                |                                       |               |                                                                                                                                                 |            |

## MAX38642A µDFN EV Kit Schematic

<!-- image -->

## MAX38642A µDFN EV Kit PCB Layout Diagrams

<!-- image -->

MAX38642A µDFN EV Kit-Top Silkscreen

<!-- image -->

MAX38642A µDFN EV Kit-Top

MAX38642A µDFN EV Kit-Bottom

<!-- image -->

MAX38642A µDFN EV Kit-Bottom Silkscreen

<!-- image -->

## MAX38642A µDFN Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                 | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------|-----------------|
|                 0 | 4/19            | Initial release             | -               |
|                 1 | 7/19            | Updated title of data sheet | 1-6             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX38642 A in µDFN