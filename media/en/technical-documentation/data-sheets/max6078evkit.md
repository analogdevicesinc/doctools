<!-- lastmod 2022-08-05 -->
## MAX6078 Evaluation Kit

## General Description

The MAX6078 evaluation kit (EV kit) is a fully assembled and tested circuit board for evaluating the MAX6078 family of low-power, low-noise, low-drift voltage references. The EV kit features footprints for both 6-bump WLP and 8-pin TDFN-EP surface-mount packages to evaluate  any  part in the reference family. These references operate from a single 2.3V to 5.5V supply and provide output options of 1.25V, 2.048V, 2.5V, 3.0V, 3.3V, 4.096V, and 5.0V.

The  EV  kit  comes  with  a  6-bump  WLP,  2.5V  output (MAX6078AMWT25+) installed on the U1 footprint, while the TDFN-EP U2 (MAX6078AMTA25+) is a future product. This EV kit can also be used to evaluate any devices in the MAX6078 family.

## MAX6078 EV Kit Photo

<!-- image -->

<!-- image -->

## Features

- 2.3V to 5.5V Input Supply Range
- Output Options: 1.25V, 2.048V, 2.5V, 3.0V, 3.3V, 4.096V, and 5.0V.
- Proven PCB Layout
- Fully Assembled and Tested
- Evaluate any Devices of the MAX6078 Family

Ordering Information appears at end of data sheet.

Evaluates: MAX6078A

## MAX6078 Evaluation Kit

## Quick Start

## Required Equipment

- MAX6078 EV kit
- +5V DC Power supply
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify  that  jumpers  J1,  J2,  J3,  and  J4  are  in  their default position, as shown in Table 1 and Table 2.
- 2) To  evaluate  U1: set  the  DC  power  supply  to  +5V. Connect the positive terminal to the IN1 test point and the negative terminal to GND test point.
- 3) Connect the voltmeter between OUTF1 and GND test point.
- 4) Turn on the DC power supply.
- 5) Verify that the voltmeter displays V OUTF1  = 2.5V.
- 6) To evaluate U2: repeat  step  2  to  step  5  above  for the U2 section. U2 (MAX6078AMTA25+) is a future product.

## Table 1. Jumper Description for U1

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                            |
|----------|------------------|--------------------------------------------------------|
| J1       | 2-1              | Connect EN1 to GND to Place U1 in Shutdown Mode (U1)   |
| J1       | 2-3*             | Connect EN1 to IN1 for Normal Operation (U1)           |
| J2       | Installed        | Connect C3 to NR Input (U1) for Output Noise Reduction |
| J2       | Not installed*   | C3 not connected to NR Input (U1)                      |

## General Description of Hardware

The MAX6078 EV kit demonstrates the MAX6078 family of very low-power, low-noise, low-drift voltage references in both available footprints: a 6-bump WLP and an 8-pin TDFN-EP package. The EV kit requires an input supply voltage range from 2.3V to +5.5V at the IN\_ pin for normal operation.

## EN Input

Drive the EN\_ pin high or connect to IN\_ to enable the MAX6078. Drive the EN\_ pin low or connect it to ground to disable the device. J1 (U1) and J3 (U2) are used for enabling or disabling the devices.

## Noise Reduction (NR) Input

The MAX6078 EV kit has jumpers available for evaluating the MAX6078's noise reduction feature. Install the jumper J2 (U1) and J4 (U2) to connect an external capacitor to the noise reduction input pins (NR) to use this feature.

## Table 2. Jumper Description for U2

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                            |
|----------|------------------|--------------------------------------------------------|
| J3       | 2-1              | Connect EN2 to GND to Place U2 in Shutdown Mode (U2)   |
| J3       | 2-3*             | Connect EN2 to IN2 for Normal Operation (U2)           |
| J4       | Installed        | Connect C8 to NR Input (U2) for Output Noise Reduction |
| J4       | Not installed*   | C8 not connected to NR Input (U2)                      |

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX6078EVKIT# | EV KIT |

# Denotes RoHS compliant.

│

## MAX6078 EV Kit Bill of Materials

|   ITEM | REF_DES            | DNI/DNP   | QTY   | MFG PART #                                                                           | MANUFACTURER                           | VALUE          | DESCRIPTION                                                                                                                    |
|--------|--------------------|-----------|-------|--------------------------------------------------------------------------------------|----------------------------------------|----------------|--------------------------------------------------------------------------------------------------------------------------------|
|      1 | C1, C6             | -         | 2     | GRM188R71E105KA12; CGA3E1X7R1E105K; TMK107B7105KA; 06033C105KAT2A; GCM188R71E105KA64 | MURATA;TDK; TAIYO YUDEN; AVX;MURATA    | 1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                       |
|      2 | C2, C4, C7, C9     | -         | 4     | C1608X7R1E104K080AA                                                                  | TDK                                    | 0.1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 25V; TOL = 10%; MODEL = C SERIES; TG = -55°C TO +125°C; TC = X7R                   |
|      3 | C3, C8             | -         | 2     | GRM188R71E103KA01                                                                    | MURATA                                 | 0.01UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01µF; 25V; TOL = 10%; TG = -55°C TO +125°C                                              |
|      4 | EN1, EN2, IN1, IN2 | -         | 4     | 5010                                                                                 | KEYSTONE                               | N/A            | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                    |
|      5 | GND1-GND6          | -         | 6     | 5011                                                                                 | KEYSTONE                               | N/A            | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|      6 | J1, J3             | -         | 2     | PEC03SAAN                                                                            | SULLINS                                | PEC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                      |
|      7 | J2, J4             | -         | 2     | PEC02SAAN                                                                            | SULLINS                                | PEC02SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                      |
|      8 | MH1-MH4            | -         | 4     | 9032                                                                                 | KEYSTONE                               | 9032           | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                      |
|      9 | OUTF1, OUTF2       | -         | 2     | 5013                                                                                 | KEYSTONE                               | N/A            | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     10 | OUTS1, OUTS2       | -         | 2     | 5012                                                                                 | KEYSTONE                               | N/A            | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|     11 | R1, R2             | -         | 2     | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00                                           | VISHAY DALE;ROHM; PANASONIC            | 0              | RESISTOR; 0603; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM                                                                            |
|     12 | SU1, SU2           | -         | 2     | S1100-B;SX1100-B; STC02SYAN                                                          | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B       | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN; BLACK; INSULATION = PBT;PHOSPHOR BRONZE CONTACT = GOLD PLATED                  |
|     13 | U1                 | -         | 1     | MAX6078AMWT25+                                                                       | MAXIM                                  | MAX6078AMWT25+ | EVKIT PART-IC; MAX6078AMWT25+; PACKAGE OUTLINE DRAWING: 21-100365; PACKAGE LAND PATTERN: USE APPLICATION NOTE 1981             |
|     14 | U2                 | *         | *     | MAX6078AMTA25+                                                                       | MAXIM                                  | MAX6078AMTA25+ | EVKIT PART-IC; MAX6078AMTA25+; PACKAGE OUTLINE DRAWING: 21-0174; PACKAGE LAND PATTERN: 90-0091                                 |
|     15 | PCB                | -         | 1     | MAX6078                                                                              | MAXIM                                  | PCB            | PCB:MAX6078                                                                                                                    |
|     16 | C5, C10            | DNP       | 0     | GRM21BR71C475KA73; 0805YC475KAT2A                                                    | MURATA;AVX                             | 4.7UF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7µF; 16V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C TO +125°C; TC = X7R                 |

TOTAL

*U2 is a future product.

37

Evaluates: MAX6078A

## MAX6078 EV Kit Schematic

<!-- image -->

## MAX6078 EV Kit PCB Layout Diagrams

MAX6078 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX6078 EV Kit PCB Layout-Top View

<!-- image -->

MAX6078 EV Kit PCB Layout-Bottom View

<!-- image -->

MAX6078 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX6078A