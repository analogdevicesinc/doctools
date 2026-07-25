<!-- lastmod 2022-08-03 -->
## MAX6279 Evaluation Kit

## General Description

The MAX6279 evaluation kit (EV kit) provides a proven design to evaluate the MAX6279 ceramic shunt voltage reference. The output voltage is set at 1.2V.

The  EV  kit  comes  installed  with  a  MAX6279ELA12+  in 8-pin ceramic leadless chip carrier (LCC) package.

## Features

- Wide Operating Current Range: 60µA to 15mA
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX6279 EV Kit Photo

<!-- image -->

<!-- image -->

Evaluates: MAX6279

## Quick Start

## Required Equipment

- MAX6279 EV kit
- +5V DC power supply
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Set the DC power supply to +5V. Connect the positive terminal to the VS test point and the negative terminal to GND test point.
- 2) Connect the voltmeter between V REF  and GND test point.
- 3) Turn on the DC power supply.
- 4) Verify that the voltmeter displays 1.225V.

## General Description of Hardware

The  MAX6279  EV  kit  demonstrates  the  MAX6279,  a precision,  two-terminal  shunt  mode,  bandgap  voltage reference  in  a  small  8-pin  LCC  package.  The  EV  kit requires  a  source  greater  than  1.225V  at  the  VS  test point and an operating current between 60µA and 15mA. Use  the  equation  below  to  stay  within  range  where R1=  1kΩ,  V S  =  applied  voltage  at  the  VS  test  point, VREF = 1.2V, and I LOAD  is the load at the V REF  pin.

<!-- formula-not-decoded -->

## MAX6279 EV Kit Bill of Materials

|   1 | C2       |     |   1 | C1608X7R1E104K080AA           | TDK                    | 0.1µF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 25V; TOL = 10%; MODEL = C SERIES; TG = -55°C TO +125°C; TC = X7R                |
|-----|----------|-----|-----|-------------------------------|------------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------|
|   2 | GND      |     |   1 | 5011                          | KEYSTONE               | N/A           | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|   3 | R1       |     |   1 | CRCW06031K00FK; ERJ-3EKF1001V | VISHAY DALE; PANASONIC | 1K            | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                           |
|   4 | U1       |     |   1 | MAX6279ELA12+                 | MAXIM                  | MAX6279ELA12+ | EVKIT PART-IC; RF38 DIE; PACKAGE CODE: L8-1; PACKAGE OUTLINE DRAWING: 21-100203; PACKAGE LAND PATTERN: 90-10085             |
|   5 | VS, VREF |     |   2 | 5010                          | KEYSTONE               | N/A           | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                          |
|   6 | PCB      |     |   1 | MAX6279                       | MAXIM                  | PCB           | PCB:MAX6279                                                                                                                 |
|   7 | C1       | DNP |   0 | N/A                           | N/A                    | OPEN          | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                    |

## MAX6279 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX6279

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX6279EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX6279 EV Kit PCB Layout Diagrams

MAX6279 EV PCB-Top Silkscreen

<!-- image -->

MAX6279 EV PCB-Top Layer

<!-- image -->

MAX6279 EV PCB-Bottom Layer

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/18           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VSHFL¿FDWLR

│

Evaluates: MAX6279