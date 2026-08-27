<!-- lastmod 2022-08-03 -->
## MAX40201 Evaluation Kit

## General Description

The MAX40201 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX40201  dual-channel,  highprecision, high-voltage, current-sense amplifier. This EV kit demonstrates the MAX40201 in an ultra-small, 1.3mm x 2mm, 8-bump wafer-level package (WLP).

The EV kit PCB comes with a MAX40201WAWA+ installed, which is the 200V/V gain version. Other gain options are available.  Contact  the  factory  for  the  pin-compatible MAX40201TAWA+ (G = 25V/V), MAX40201FAWA+ (G = 50V/V), and MAX40201HAWA+ (G = 100V/V).

## EV Kit Contents

- MAX40201 EV Kit Board

## Features

- Precision Real-Time Current Monitoring
- 0V to +76V Input Common-Mode Range
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX40201

## Quick Start

## Required Equipment

The following items are required for operation:

- MAX40201 EV kit
- +3.3V, 1A DC power supply
- +5V, 3A DC power supply
- An electronic load capable of sinking 3A (i.e., HP6060B)
- Two digital voltmeters

## Procedure

The  MAX40201  EV  kit  is  fully  assembled  and  tested. Follow  the  steps  below  to  verify  the  board  operation. Caution: Do not turn on power supply or the electronic load until all connections are made .

- 1) Connect the positive terminal of the +3.3V supply to the VDD test point and the negative terminal of the supply to the nearest GND test point.
- 2) Connect the positive terminal of the +5V supply to the VSENSE+ test point and the negative terminal of the supply to the nearest GND test point.
- 3) Set the electronic load to sink 250mA.
- 4) Connect the positive terminal of the electronic load to the VSENSE- test point and the negative terminal of the supply to the nearest GND test point.
- 5) Connect the first voltmeter between test points RS1+ and RS1- to measure V SENSE1 .
- 6) Connect the second voltmeter between VOUT1 and the nearest GND test points.
- 7) Turn on the power supplies.
- 8) Enable the electronic load.
- 9) Verify that the first voltmeter displays 12.5mV and the second voltmeter displays 2.5V.
- 10) Repeat the steps for the second current sense amplifier using the VSENSE2+ and VSENSE2- test points  as the inputs and VOUT2 test point as the output.

<!-- image -->

## Detailed Description of Hardware

The MAX40201 EV kit provides a proven design to evaluate the  MAX40201  high-side,  dual-channel,  current-sense amplifier, which offers precision accuracy specifications of input offset voltage (V OS ) less than 10µV (max) and gain error less than 0.1% (max).

## Applying the VRS+ Supply and the Load

The EV kit is installed with a MAX40201WAWA+, which has a 200V/V gain. The current-sense resistors (R SENSE ) value is 0.05Ω with ±0.5% tolerance. The V OUT for each channel given by:

<!-- formula-not-decoded -->

where A V is the gain and I LOAD  is the current load applied to the device. Normal operating V RS+  and V RS-  range is 0V to 76V.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40201EVKIT# | EV Kit |

#Denotes RoHS-compliant.

## Evaluates: MAX40201

## Measuring the Load Current

The load current is measured as a voltage drop (V SENSE ) across  an  external  sense  resistor.  This  voltage  is  then amplified  by  the  current-sense  amplifier  and  presented at its VOUT\_ pin. Like all differential amplifiers, the output voltage has two components of error (an offset error and a  gain  error).  The  offset  error  affects  accuracy  at  low currents  and  a  gain  error  affects  accuracy  at  large currents.  Both  errors  affect  accuracy  at  intermediate currents.  By  minimizing  both  offset  and  gain  errors, accuracy can be optimized over a wide dynamic range.

## MAX40201 EV Kit Bill of Materials

| ITEM   | REF_DES                                                   | DNI/DNP   |   QTY | MFG PART #                                                                                                                                 | MANUFACTURER                                                                     | VALUE         | DESCRIPTION                                                                                                             |
|--------|-----------------------------------------------------------|-----------|-------|--------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------|
| 1      | C1                                                        | -         |     1 | C0603C104K4RAC; GCM188R71C104KA37; C1608X7R1C104K; GRM188R71C104KA01; C0603X7R160-104KNE; VJ0603Y104KXJCW1BC; 0603YC104KAT4A; 885012206046 | KEMET;MURATA;TDK; MURATA; VENKEL LTD; VISHAY DALE;AVX; WURTH ELECTRONICS INC;TDK | 0.1UF         | CAP; SMT (0603); 0.1UF; 10%; 16V;X7R; CERAMIC;                                                                          |
| 2      | C2                                                        | -         |     1 | 0805YC475KAT2A; GCM21BR71C475KA73; CGA4J3X7R1C475K125AE; GRM21BR71C475KE51                                                                 | AVX;MURATA;TDK; MURATA                                                           | 4.7UF         | CAP; SMT (0805); 4.7UF; 10%; 16V;X7R; CERAMIC                                                                           |
| 3      | GND, TP1-TP4                                              | -         |     5 | 5011                                                                                                                                       | KEYSTONE                                                                         | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 4      | R1, R2                                                    | -         |     2 | LVK12R050DE                                                                                                                                | OHMITE MFG CO.                                                                   | 0.05          | RESISTOR; 1206; 0.05 OHM; 0.5%; 50PPM; 0.5W; METAL FILM                                                                 |
| 5      | RS1+, RS1-, RS2+, RS2-                                    | -         |     4 | 5000                                                                                                                                       | KEYSTONE                                                                         | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |
| 6      | SPACER1-SPACER4                                           | -         |     4 | 9032                                                                                                                                       | KEYSTONE                                                                         | 9032          | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                               |
| 7      | U1                                                        | -         |     1 | MAX40201WAWA+                                                                                                                              | MAXIM                                                                            | MAX40201WAWA+ | IC; AMP; DUAL-CHANNEL; 0V TO 76V CURRENT-SENSE AMPLIFIER; 200V/V; WLP8                                                  |
| 8      | VDD, VOUT1, VOUT2, VSENSE1+, VSENSE1-, VSENSE2+, VSENSE2- | -         |     7 | 5010                                                                                                                                       | KEYSTONE                                                                         | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                   |
| 9      | PCB                                                       | -         |     1 | MAX40201                                                                                                                                   | MAXIM                                                                            | PCB           | PCB:MAX40201                                                                                                            |
| 10     | C3-C8                                                     | DNP       |     0 | C1206C102K1RAC                                                                                                                             | KEMET                                                                            | 1000PF        | CAP; SMT (1206); 1000PF; 10%; 100V; X7R; CERAMIC                                                                        |
| 11     | C9, C10                                                   | DNP       |     0 | C0603C181K5GAC                                                                                                                             | KEMET                                                                            | 180PF         | CAP; SMT (0603); 180PF; 10%; 50V; C0G; CERAMIC                                                                          |
| 12     | R3-R8                                                     | DNP       |     0 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00; CR0603AJ/-000ELF                                                                               | VISHAY;ROHM SEMICONDUCTOR; PANASONIC;BOURNS                                      |               | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                           |
| TOTAL  |                                                           | 26        |       |                                                                                                                                            |                                                                                  |               |                                                                                                                         |

Evaluates: MAX40201

## MAX40201 EV Kit Schematic

<!-- image -->

│

## MAX40201 EV Kit PCB Layouts

MAX40201 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX40201 EV Kit PCB Layout-Top

<!-- image -->

MAX40201 EV Kit PCB Layout-Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                      | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 2/17            | Initial release                                                                                                                  | -               |
|                 1 | 10/20           | Updated General Description , Procedure, and Detailed Description of Hardware sections, replaced BOM, schematic, and PCB Layouts | 1-4             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,nteJrated reserves the riJht to chanJe the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX40201