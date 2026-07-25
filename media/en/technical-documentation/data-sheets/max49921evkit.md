<!-- lastmod 2022-08-03 -->
## MAX49921 Evaluation Kit

## General Description

The MAX49921 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX49921  high  precision,  high voltage,  unidirectional  current-sense  amplifier.  This  EV kit demonstrates the MAX49921 in a small, 2mm x 3mm 8-pin TDFN package.

The  EV  kit  PCB  comes  with  a  MAX49921FATA/VY+ installed, which is the 50V/V gain version. The other gain option  available  is  the  pin-compatible  MAX49921TATA/ VY+ (G = 20V/V). Contact the factory for MAX49921TATA/ VY+ availability.

## EV Kit Contents

MAX49921 EV kit board

## Features

- Precision Real-Time Current Monitoring
- 0V to +70V Input Common-Mode Range
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX49921

## Quick Start

## Required Equipment

The following items are required for operation:

- MAX49921 EV kit
- DC PS1 (power supply 1 for the IC, 2.7V to 5.5V, 100mA)
- DC PS2 (power supply 2 for the common-mode input, up to 70V, 3A)
- ●
- Note that if the electronic load is not available, sense voltage across the RS+ and RS- test points.
- Electronic load (capable of sinking up to 3A and up to 70V) remove the R1 sense resistor, and directly apply a
- Two digital multimeters (DMMs)

## MAX49921 EV Kit Photo

<!-- image -->

<!-- image -->

## Procedure

## MAX49921 Evaluation

The MAX49921 EV kit is fully assembled and tested. Use the following steps to verify board operation.

## Caution:  Do  not  turn  on  power  supply  or  the  electronic load until all connections are made .

- 1) Set the PS1 to 5V and turn it off. Connect the posi -tive terminal of the PS1 to the VDD test point and the negative terminal of the supply to the nearest GND test point.
- 2) Set the PS2 to 12V (common-mode voltage) and turn it off. Connect the positive terminal of the PS2 to the VSENSE+ test point and the negative terminal of the PS2 to the nearest GND test point.
- 3) Set the electronic load to sink 1A. Note that the voltage at PS2 together with this 1A load develops approximately 50mV input voltage across the sense resistor (R1).
- 4) Connect the positive terminal of the electronic load to the VSENSE- test point and the negative terminal of the supply to the nearest GND test point.
- 5) Connect the first voltmeter between test points RS+ and RS- to measure VSENSE.
- 6) Connect the second voltmeter between VOUT and the nearest GND test points.
- 7) Enable the PS1 and then PS2 power supplies.
- 8) Enable the electronic load. Note that if the electronic load is not available, remove the R1 sense resistor, and directly apply a 50mV sense voltage across the RS+ and RS- test points.
- 9) Verify that the first voltmeter displays 50mV and the second voltmeter displays 2.5V.
- 10)  Disable the electronic load first, then turn off the PS2 and then PS1 last.

## Detailed Description of Hardware

The MAX49921 EV kit provides a proven design to evaluate the MAX49921 high-side, unidirectional current-sense amplifier, which offers precision accuracy specifications of input offset voltage (V OS ) of ±0.5μV (typ) and a gain error of ±0.05% (typ).

## Applying the VRS+ Supply and the Load

The  EV  kit  is  installed  with  a  MAX49921FATA/VY+, which has a 50V/V gain. The current-sense resistor R1 (R SENSE )  value  is  0.05Ω  with  ±0.5%  tolerance.  The VOUT can be estimate by:

<!-- formula-not-decoded -->

where A V  is the gain and I LOAD  is the current load applied to the device. Normal operating V RS+  and V RS-  range is 0V to 70V.

## Measuring the Load Current

The load current is measured as a voltage drop (V SENSE ) across  an  external  sense  resistor  (R1).  This  voltage  is then  amplified  by  the  current-sense  amplifier  and  presented at its V OUT  pin. Like all differential amplifiers, the output  voltage  has  two  components  of  error  (an  offset error and a gain error). The offset error affects accuracy at low currents and a gain error affects accuracy at large currents. Both errors affect accuracy of measurement at intermediate currents. By minimizing both offset and gain errors, accuracy can be optimized over a wide dynamic range.

## Ordering Information

| PART           | U1 (INSTALLED)   | TYPE   |
|----------------|------------------|--------|
| MAX49921EVKIT# | MAX49921FATA/VY+ | EV Kit |

#Denotes RoHS compliance.

## MAX49921 EV Kit Bill of Materials

| ITEM   | REF_DES                     | DNI/DNP QTY   |    | MFG PART #                                                                                                                             | MANUFACTURER                                                                    | VALUE            | DESCRIPTION                                                                                                                                                                      |
|--------|-----------------------------|---------------|----|----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | C1                          | -             |  1 | C0603C104K4RAC;GCM188R71C104KA37; C1608X7R1C104K;GRM188R71C104KA01; C0603X7R160-104KNE;VJ0603Y104KXJCW1BC; 0603YC104KAT4A;885012206046 | KEMET;MURATA;TDK; MURATA; VENKEL LTD;VISHAY DALE;AVX; WURTH ELECTRONICS INC;TDK | 0.1UF            | CAP; SMT (0603); 0.1UF; 10%; 16V; X7R; CERAMIC;                                                                                                                                  |
| 2      | C2                          | -             |  1 | GRM21BR71C475KA73;0805YC475KAT2A; GCM21BR71C475KA73;CGA4J3X7R1C475K125AE                                                               | MURATA;AVX;MURATA;TDK                                                           | 4.7UF            | CAP; SMT (0805); 4.7UF; 10%; 16V; X7R; CERAMIC                                                                                                                                   |
| 3      | GND, TP2-TP4                | -             |  4 | 5011                                                                                                                                   | KEYSTONE                                                                        | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                          |
| 4      | MTH1-MTH4                   | -             |  4 | 9032                                                                                                                                   | KEYSTONE                                                                        | 9032             | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                        |
| 5      | R1                          | -             |  1 | LVK12R050DE                                                                                                                            | OHMITE MFGCO.                                                                   | 0.05             | RESISTOR; 1206; 0.05 OHM; 0.5%; 50PPM; 0.5W; METAL FILM                                                                                                                          |
| 6      | RS+, RS-                    | -             |  2 | 5000                                                                                                                                   | KEYSTONE                                                                        | N/A              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                 |
| 7      | U1                          | -             |  1 | MAX49921FATA/VY+                                                                                                                       | MAXIM                                                                           | MAX49921FATA/VY+ | EVKIT PART - IC; OZ93; MAX49921FATA/VY+; BI- AND UNIDIRECTIONAL; -0.1V TO 70V CURRENT-SENSE AMPLIFIERS; PACKAGE OUTLINE: 21-100417; PACKAGE LAND PATTERN DRAWING: 90-0091; TDFN8 |
| 8      | VDD, VOUT, VSENSE+, VSENSE- | -             |  4 | 5010                                                                                                                                   | KEYSTONE                                                                        | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                            |
| 9      | PCB                         | -             |  1 | MAX49921                                                                                                                               | MAXIM                                                                           | PCB              | PCB:MAX49921                                                                                                                                                                     |
| 10     | C3, C4, C7                  | DNP           |  0 | C1206C102K1RAC                                                                                                                         | KEMET                                                                           | 1000PF           | CAP; SMT (1206); 1000PF; 10%; 100V; X7R; CERAMIC                                                                                                                                 |
| 11     | C9                          | DNP           |  0 | C0603C181K5GAC                                                                                                                         | KEMET                                                                           | 180PF            | CAP; SMT (0603); 180PF; 10%; 50V; C0G; CERAMIC                                                                                                                                   |
| 12     | R3, R4, R7                  | DNP           |  0 | CRCW06030000ZS;MCR03EZPJ000; ERJ-3GEY0R00;CR0603AJ/-000ELF                                                                             | VISHAY;ROHM SEMICONDUCTOR; PANASONIC;BOURNS                                     |                  | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                    |
| TOTAL  |                             |               | 19 |                                                                                                                                        |                                                                                 |                  |                                                                                                                                                                                  |

Evaluates: MAX49921

## MAX49921 EV Kit Schematic

<!-- image -->

│

## MAX49921 EV Kit PCB Layout

MAX49921 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX49921 EV Kit PCB Layout-Top

<!-- image -->

Evaluates: MAX49921

MAX49921 EV Kit PCB Layout-Bottom

<!-- image -->

MAX49921 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX49921 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                        | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/20            | Initial release                                                                                                    | -               |
|                 1 | 11/20           | Removed references to MAX49920                                                                                     | 1-6             |
|                 2 | 1/21            | Updated EV kit photo, MAX49921 EV Kit Bill of Materials, MAX49921 EV Kit Schematic, and MAX49921 EV Kit PCB Layout | 1, 3-5          |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX49921