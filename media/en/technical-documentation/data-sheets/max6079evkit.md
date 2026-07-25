<!-- lastmod 2022-08-03 -->
## MAX6079 Evaluation Kit

## General Description

The MAX6079  evaluation kit (EV kit) provides a proven  design  to  evaluate  the  MAX6079  low-noise precision ceramic voltage reference. The output voltage is set at 2.5V.

The  EV  kit  comes  installed  with  a  MAX6079ALA25+  in 8-pin ceramic Leadless Chip Carrier (LCC) package.

## Features

- Configurable for Precision Current Source
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX6079 EV Kit Photo

<!-- image -->

<!-- image -->

Evaluates: MAX6079

## Quick Start

## Required Equipment

- MAX6079 EV kit
- +5V DC power supply
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Set the DC power supply to +5V. Connect the positive terminal to the IN test point and the negative terminal to GNDF test point.
- 2) Connect  the  voltmeter  between  OUTF  and  GNDF test point.
- 3) Turn on the DC power supply.
- 4) Verify that the voltmeter displays 2.5V.

## General Description of Hardware

The MAX6079 EV kit demonstrates the MAX6079, a very low noise and low-drift voltage reference in a small 8-pin LCC package. The EV kit requires a +2.8V to +5.5V input supply voltage at the IN pin for normal operation.

## EN

Drive the EN pin high to enable the MAX6079. Drive the EN pin low to disable the device.

## MAX6079 EV Kit Bill of Materials

| ITEM   | REF_DES        |     |   QTY | MFG PART #                                                       | MANUFACTURER                  | VALUE         | DESCRIPTION                                                                                                                  |
|--------|----------------|-----|-------|------------------------------------------------------------------|-------------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------|
| 1      | C1, C2, C5     |     |     3 | C0603C104K5RAC; C1608X7R1H104K                                   | KEMET; TDK                    | 0.1µF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R;                                  |
| 2      | C3, C4         |     |     2 | C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K; EMK107B7105KA | KEMET/MURATA/ TDK/TAIYO YUDEN | 1µF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 16V; TOL = 10%; MODEL =; TG = -55°C TO +125°C; TC = X7R                            |
| 3      | X, EN, Q1C     |     |     3 | 5007                                                             | KEYSTONE                      | N/A           | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 4      | TP1, TP2, GNDS |     |     3 | 5006                                                             | KEYSTONE                      | N/A           | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 5      | IN, OUTF, OUTS |     |     3 | 5005                                                             | KEYSTONE                      | N/A           | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
| 6      | Q1             |     |     1 | MMBT3904                                                         | ON SEMICONDUCTOR              | MMBT3904      | TRANSISTOR, NPN, SOT-23, PD = 0.225W, IC = 0.2A, VCEO = 40V                                                                  |
| 7      | R1             |     |     1 | ERJ3EKF1003                                                      | PANASONIC                     | 100K          | RESISTOR; 0603; 100KΩ; 1%; 100PPM; 0.1W; THICK FILM                                                                          |
| 8      | R2, R3         |     |     2 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00                       | VISHAY DALE/ROHM/ PANASONIC   | 0             | RESISTOR; 0603; 0Ω; 0%; JUMPER; 0.10W; THICK FILM                                                                            |
| 9      | U1             |     |     1 | MAX6079ALA25+                                                    | MAXIM                         | MAX6079ALA25+ | EVKIT PART-IC; PACKAGE CODE: L8-1; PACKAGE OUTLINE DRAWING: 21-100203; PACKAGE LAND PATTERN: 90-100085                       |
| 10     | PCB            |     |     1 | MAX6079                                                          | MAXIM                         | PCB           | PCB:MAX6079                                                                                                                  |
| 11     | R4, R5         | DNP |     0 | N/A                                                              | N/A                           | OPEN          | PACKAGE OUTLINE 0603 RESISTOR                                                                                                |
| TOTAL  |                |     |    20 |                                                                  |                               |               |                                                                                                                              |

## Precision Current Source

To use the EV kit as a precision current source, remove the resistor at R3, install a 0Ω resistor at location R4, and connect the X test point to GNDF. Install an appropriate resistor at location R5 to determine the current by using the following equation.

<!-- formula-not-decoded -->

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX6079EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX6079 EV Kit Schematic

<!-- image -->

Evaluates: MAX6079

## MAX6079 EV Kit PCB Layout Diagrams

MAX6079 EV Kit-Top Silkscreen

<!-- image -->

MAX6079 EV Kit-Top Layer

<!-- image -->

Evaluates: MAX6079

MAX6079 EV Kit-Bottom Layer

<!-- image -->

MAX6079 EV Kit-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/18           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSlied  0a[iP ,nteJrated reserYes the riJht to chanJe the circXitr\ and sSeci¿cations ZithoXt notice at an\ tiPe

│

Evaluates: MAX6079