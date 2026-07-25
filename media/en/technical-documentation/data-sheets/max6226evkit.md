<!-- lastmod 2022-08-04 -->
<!-- image -->

Evaluates: MAX6226

## General Description

The MAX6226 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX6226  low-noise  precision ceramic  voltage  reference.  The  output  voltage  is  set  at 2.5V.

The  EV  kit  comes  installed  with  a  MAX6226ALA25+  in 8-pin ceramic Leadless Chip Carrier (LCC) package. To evaluate other output voltage options, replace the U1 IC preinstalled with the desired part.

## Features

- Configurable for Precision Current Source
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX6226 EV Kit Photo

<!-- image -->

## MAX6226 Evaluation Kit

## Quick Start

## Required Equipment

- MAX6226 EV kit
- +5V DC power supply
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Set the DC power supply to +5V. Connect the positive terminal to the IN test point and the negative terminal to GND test point.
- 2) Connect  the  voltmeter  between  OUTF  and  GND test point.
- 3) Turn on the DC power supply.
- 4) Verify that the voltmeter displays 2.5V.

319-100293; Rev 1; 11/21

## General Description of Hardware

The MAX6226 EV kit demonstrates the MAX6226, a very low noise and low-drift voltage reference in a small 8-pin LCC  package.  The  EV  kit  requires  a  +2.7V  to  +12.6V input supply voltage at the IN pin for normal operation.

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX6226EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX6226 EV Kit Bill of Materials

| ITEM   | REF_DES        |     |   QTY | MFG PART #                                                                                                                               | MANUFACTURER                                                                          | VALUE                                                  | DESCRIPTION                                                                                                            |
|--------|----------------|-----|-------|------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|--------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| 1      | C1, C2, C5     |     |     3 | C0603C104K5RAC;C1608X7R1H104K; ECJ-1VB1H104K;GRM188R71H104KA93; CGJ3E2X7R1H104K080AA; C1608X7R1H104K080AA; CL10B104KB8NNN;CL10B104KB8NFN | KEMET;TDK;PANASONIC; MURATA; TDK; TDK; SAMSUNG ELECTRO-MECHANICS; SAMSUNG ELECTRONICS | 0.1UF                                                  | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                            |
| 2      | C3, C4         |     |     2 | C0603C105K4RAC;GRM188R71C105KA12; C1608X7R1C105K080AC;EMK107B7105KA; GCM188R71C105KA64; CGA3E1X7R1C105K080AC;0603YC105KAT2A              | KEMET;MURATA;TDK; TAIYO YUDEN; MURATA;TDK;AVX                                         | 1UF                                                    | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                       |
| 3      | GND, TP1, TP2  |     |     3 | 5006                                                                                                                                     | KEYSTONE                                                                              | N/A                                                    | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 4      | IN, OUTF, OUTS |     |     3 | 5005                                                                                                                                     | KEYSTONE                                                                              | N/A                                                    | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
| 5      | Q1             |     |     1 | MMBT3904LT3G                                                                                                                             | ON SEMICONDUCTOR                                                                      | MMBT3904                                               | TRANSISTOR, NPN, SOT-23, PD=0.225W, IC=0.2A, VCEO=40V                                                                  |
| 6      | Q1C, X         |     |     2 | 5007                                                                                                                                     | KEYSTONE                                                                              | N/A                                                    | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 7      | R3             |     |     1 | CRCW06030000ZS;MCR03EZPJ000; ERJ-3GEY0R00                                                                                                | VISHAY DALE;ROHM; PANASONIC                                                           | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                 |
| 8      | U1             |     |     1 | MAX6226ALA25+                                                                                                                            | MAXIM                                                                                 | MAX6226ALA25+                                          | IC; VREF; ULTRA-HIGH-PRECISION; ULTRA-LOW-NOISE; SERIES VOLTAGE REFERENCE VOLTAGE REFERENCE; LCC7                      |
| 9      | PCB            |     |     1 | MAX6226                                                                                                                                  | MAXIM                                                                                 | PCB                                                    | PCB:MAX6226                                                                                                            |
| 10     | R4, R5         | DNP |     0 | N/A                                                                                                                                      | N/A                                                                                   | OPEN                                                   | PACKAGE OUTLINE 0603 RESISTOR                                                                                          |
| TOTAL  |                |     |    17 |                                                                                                                                          |                                                                                       |                                                        |                                                                                                                        |

## Precision Current Source

To use the EV kit as a precision current source, remove the resistor at R3, install a 0Ω resistor at location R4, and connect  the  X  test  point  to  GND.  Install  an  appropriate resistor at location R5 to determine the current by using the following equation.

<!-- formula-not-decoded -->

## MAX6226 EV Kit Schematic (*)

(*) Pin 8 (I.C.) should not be connected to anything for best performance, so it is not shown in the schematic. Pin 8 must be clear of any mechanical and electrical contact. Neither copper nor solder/paste mask must be placed underneath its land pattern. The absence of mechanical contact eliminates the possibility of paddle induced stress to the die. The absence of electrical contact eliminates the possibility of any ground current redistribution.

<!-- image -->

## MAX6226 EV Kit PCB Layouts

MAX6226 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX6226 EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX6226

MAX6226 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX6226 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX6226 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                             | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 12/18           | Initial release                                                                                                                         | -               |
|                 1 | 11/21           | Updated General Description , EV Kit Photo , MAX6226 EV Kit Bill of Materials MAX6226 EV Kit Schematic , and MAX6226 EV Kit PCB Layouts | 1-4             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX6226