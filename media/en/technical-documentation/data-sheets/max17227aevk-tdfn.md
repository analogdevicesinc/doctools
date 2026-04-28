<!-- lastmod 2023-06-05 -->
## MAX17227A TDFN Evaluation Kit

## General Description

The MAX17227A TDFN evaluation kit (EV kit) evaluates the MAX17227A IC in a TDFN package. The MAX17227A is  a  nanoPower  boost  converter  with  2A  peak  inductor current  limit  and  has  True  Shutdown  mode.  The  EV  kit operates over an input range of 400mV to 5.5V, depending on load, with 0.88V typical startup with 3kΩ load. The EV kit provides resistor configurable output voltages from 2.3V  to  5.5V.  Refer  to  the  MAX17227A  IC  data  sheet for  output  voltage  settings.  The  EV  kit  comes  with  the MAX17227AATA+ installed.

## Features

- Evaluates the MAX17227A in an 8-pin TDFN
- 400mV to 5.5V Input Range
- 2.3V to 5.5V Configurable Output Voltage
- Up to 1A Output Current
- Proven 2-Layer 1oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX17227A TDFN EV Kit Files

| FILE                        | DECRIPTION              |
|-----------------------------|-------------------------|
| MAX17227ATDFN EV BOM        | EV Kit Bill of Material |
| MAX17227ATDFN EV PCB Layout | EV Kit Layout           |
| MAX17227ATDFN EV Schematic  | EV Kit Schematic        |

Ordering Information appears at end of data sheet.

Evaluates: MAX17227A

## Quick Start

## Required Equipment

- MAX17227A TDFN EV kit
- 3A DC power supply
- Electronic load capable of 1A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution: Do not turn on power supply until all connections are completed.

- 1) Verify that a shunt is installed on pins 1 and 2 of jumpers JU1 (EV kit enabled)
- 2) Verify that a shunt is installed on pins 1 and 3 of jumpers JU2 (OUT = 3V).
- 3) Connect the power supply between the IN and nearest GND terminal posts.
- 4) Connect the electronic load between the OUT and nearest GND terminal posts.
- 5) Connect the DVM between the OUT and nearest GND terminal posts.
- 6) Set the input power supply to 2.3V and turn on the power supply.
- 7) Set the electronic load to 1A and turn on the electronic load.
- 8) Verify that the voltage at the OUT terminal post is approximately 3V.

<!-- image -->

## MAX17227A TDFN Evaluation Kit

## Detailed Description of Hardware

The MAX17227A TDFN EV kit evaluates the MAX17227A in  a  TDFN  package.  The  MAX17227A  is  a  nanoPower boost  converter  with  2A  peak  inductor  current  limit  and has True Shutdown mode. The EV kit operates over an input  range  of  400mV  to  5.5V,  depending  on  load,  with 0.88V typical startup with 3kΩ load. The EV kit provides resistor-configurable  output  voltages  from  2.3V  to  5.5V. The EV kit comes with the MAX17227AATA+ installed.

## Table 1. EN (JU1)

| JU1 SHUNT POSITION   | DESCRIPTION                                                                                                                                            |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-2*                 | EN = IN. (EV kit enabled)                                                                                                                              |
| 2-3                  | EN = GND. (EV kit shutdown)                                                                                                                            |
| Not Installed        | EN is driven by an external TTL voltage source connected between the EN and GND test point ● EN = High. (EV kit enabled) ● EN = Low. (EV kit shutdown) |

## Table 2. Output Voltage Selection (JU2)

| JU2 SHUNT POSITION   | DESCRIPTION                                                                                                                                                        |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-2                  | OUT = 2.5V                                                                                                                                                         |
| 1-3*                 | OUT = 3.0V                                                                                                                                                         |
| 1-4                  | OUT = 4.0V                                                                                                                                                         |
| 1-5                  | OUT = 5.0V                                                                                                                                                         |
| Not Installed        | Output voltage is configured by resistor R1. Refer to the MAX17227 IC data sheet RSEL selection table to select the resistor value for the desired output voltage. |

## Component Supplier

| SUPPLIER    | WEBSITE        |
|-------------|----------------|
| Murata/TOKO | www.murata.com |

Note: Indicate that you are using the MAX17227A when contacting this component supplier.

## EN

The  MAX17227A  TDFN  EV  kit  provides  a  jumper  JU1 to  enable  or  disable  the  MAX17227A.  See  Table  1  for jumper JU1 settings.

## Output Voltage Selection

The MAX17227A TDFN EV kit provides a jumper JU2 to select the output voltage of the MAX17227A. See Table 2 for jumper JU2 settings.

## Spare Inductors

The MAX17227A TDFN EV kit provides spare inductors on  the  PCB's  bottom  side.  The  spare  inductors  can  be used to reconfigure the EV kit output current ratings.

Evaluates: MAX17227A

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX17227AEVK#TDFN | EV Kit |

# Denotes RoHS compliance.

│

## MAX17227A TDFN EV Kit Bill of Materials

| ITEM   | REF_DES             | DNI/DNP   |   QTY | MFG PART #                           | MANUFACTURER                          | VALUE          | DESCRIPTION                                                                                                                                                                                                                                       | COMMENTS   |
|--------|---------------------|-----------|-------|--------------------------------------|---------------------------------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C1, C2              | -         |     2 | GRM31CR71A226KE15; GCM31CR71A226KE01 | MURATA;MURATA                         | 22UF           | CAPACITOR; SMT (1206); CERAMIC CHIP; 22UF; 10V; TOL=10%; MODEL=CHIP MONOLITHIC CERAMIC CAPACITOR FOR GENERAL; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                    |            |
| 2      | EN, RSEL            | -         |     2 | 5002                                 | KEYSTONE                              | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                                                                                                                             |            |
| 3      | GND, GND2, IN, OUT1 | -         |     4 | 108-0740-001                         | EMERSON NETWORK POWER                 | 108-0740-001   | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                                                                                                                          |            |
| 4      | GND3, GND4          | -         |     2 | 5001                                 | KEYSTONE                              | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                                                                |            |
| 5      | JU1                 | -         |     1 | PEC03SAAN                            | SULLINS                               | PEC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                                                                                         |            |
| 6      | JU2                 | -         |     1 | PBC05SAAN                            | SULLINS ELECTRONICS CORP.             | PBC05SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65 DEGC TO +125 DEGC                                                                                                                                                                  |            |
| 7      | L1                  | -         |     1 | DFE18SAN1R0ME0                       | MURATA                                | 1UH            | INDUCTOR; SMT (0603); METAL; 1UH; 20%; 1.6A                                                                                                                                                                                                       |            |
| 8      | L1A                 | -         |     1 | DFE252012F-1R0M=P2; DFE252012F-1R0M  | MURATA;MURATA                         | 1UH            | INDUCTOR; SMT (1008); METAL; 1UH; 20%; 3.3A                                                                                                                                                                                                       |            |
| 9      | L1B                 | -         |     1 | DFE201612E-1R0M                      | MURATA                                | 1UH            | INDUCTOR; SMT (0806); WIREWOUND CHIP; 1UH; TOL=+/-20%; 2.9A                                                                                                                                                                                       |            |
| 10     | LX, OUT             | -         |     2 | 131-4353-00                          | TEKTRONICS                            | 131-4353-00    | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS;                                                                                                                                                                  |            |
| 11     | R2                  | -         |     1 | CRCW0603768KFK                       | VISHAY DALE                           | 768K           | RESISTOR; 0603; 768K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                                                                            |            |
| 12     | R3                  | -         |     1 | CRCW0603324KFK                       | VISHAY DALE                           | 324K           | RESISTOR; 0603; 324K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                                                           |            |
| 13     | R4                  | -         |     1 | CRCW060356K2FK; ERJ-3EKF5622         | VISHAY;PANASONIC                      | 56.2K          | RESISTOR; 0603; 56.2K OHM; 1%; 100PPM; 0.10W; METAL FILM                                                                                                                                                                                          |            |
| 14     | R5                  | -         |     1 | CRCW060310K0FK; ERJ-3EKF1002         | VISHAY DALE;PANASONIC                 | 10K            | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                                                                |            |
| 15     | R6                  | -         |     1 | ERJ-2GE0R00                          | PANASONIC                             |                | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                                                                            |            |
| 16     | SU1, SU2            | -         |     2 | S1100-B;SX1100-B; STC02SYAN          | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                                                                                           |            |
| 17     | U1                  | -         |     1 | MAX17227AATA+                        | MAXIM                                 | MAX17227AATA+  | EVKIT PART - IC; MAX17227AATA+; NANOPOWER FAMILY BOOST CONVERTERS WITH 2A PEAK INDUCTOR CURRENT; SHORT CIRCUIT PROTECTION; TRUE/PASS THROUGH SHUTDOWN MODE; PACKAGE OUTLINE DRAWING: 21-0168; LAND PATTERN NUMBER: 90-0065; PACKAGE CODE: T822+3C |            |
| 18     | PCB                 | -         |     1 | MAX17227ATDFN                        | MAXIM                                 | PCB            | PCB:MAX17227ATDFN                                                                                                                                                                                                                                 |            |
| 19     | MTH1-MTH4           | DNI       |     4 | SJ-5003(BLACK)                       | 3M ELECTRONIC SOLUTIONS DIVISION      | SJ-5003(BLACK) | BUMPER; BLACK-HEMISPHERICAL SHAPE EVKIT EH0231; 0.44D/0.2BH; RESILIENT ELASTOMER POLYURETHANE                                                                                                                                                     |            |
| 20     | R1                  | DNP       |     0 | N/A                                  | N/A                                   | OPEN           | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                                                                                                                  |            |
| TOTAL  |                     |           |    30 |                                      |                                       |                |                                                                                                                                                                                                                                                   |            |

Evaluates: MAX17227A

## MAX17227A TDFN EV Kit Schematics

<!-- image -->

│

Evaluates: MAX17227A

## MAX17227A TDFN EV Kit PCB Layout Diagrams

<!-- image -->

Silk Top

<!-- image -->

Top

Bottom

<!-- image -->

Silk Bottom

<!-- image -->

Evaluates: MAX17227A

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│