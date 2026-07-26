<!-- lastmod 2022-08-05 -->
## MAX40002-MAX40005 Evaluation Kits

## General Description

The  MAX40002-MAX40005 evaluation kits (EV kits)  are fully  assembled  and  tested  PC  boards  that  evaluate the MAX40002ANS02-MAX40005ANS02 single comparators.  The  MAX40002ANS02-MAX40005ANS02 operate from a V CC  supply between 1.7V to 5.5V, come with  an  internal  reference  voltage  of  0.2V,  and  have  a wide 0.1V to 5.5V input voltage (IN) range. These EV kits demonstrate the MAX40002ANS02-MAX40005ANS02 in an  ultra-small,  0.76mm  x  0.76mm,  4-bump  wafer-level package (WLP) with 0.35mm bump spacing.

These EV kits are configured to evaluate all  devices  in the  MAX40002-MAX40005/MAX40012-MAX40015  family that have a 4-bump wafer-level package (WLP). To evaluate  other  WLP  devices  in  this  MAX40002-MAX40005/ MAX40012-MAX40015  family  other  than  what  is  preinstalled,  replace  the  U1  IC  with  the  desired  part  (see Ordering Information for details).

## Features

- 0.1V to 5.5V Input Voltage Range
- 1.7V to 5.5V External Reference Range (MAX40002ANS─MAX40005ANS)
- 1.7V to 5.5V V CC  Range with Internal Reference (MAX40002ANS\_ \_─MAX40005ANS\_ \_)
- 0.2V, 0.5V, 0.9V, and 1.222V Internal Reference Options Available
- Evaluates 4-Bump WLP Package
- Fully Assembled and Tested

Ordering Information appears at the end of the data sheet.

Evaluates: MAX40002-MAX40005

MAX40012-MAX40015

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- Three +5V DC power supplies (V CC /REF, IN, and V PU )
- One digital multimeter (DMM)

## Procedure

The MAX40002-MAX40005 EV kits are fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect the positive terminal of a DC power supply to the V CC  pad and the ground terminal to the GND pad.
- 2) Connect the positive terminal of a DC power supply to the V PU  pad and the ground terminal to the GND pad (MAX40002/MAX40003/MAX40012/MAX40013 only).
- 3) Connect the positive terminal of a DC power supply to the IN pad and the ground terminal to the GND pad.
- 4) Turn on the V CC  power supply and set it to the desired level.
- 5) Turn on the V PU  power supply and set it to the desired level (MAX40002/MAX40003/MAX40012/ MAX40013 only).
- 6) Turn on the IN power supply and set it to the desired level.
- 7) Monitor the output using a DMM at the OUT pad, and study its response to varying voltage at IN (see Table 1 for more information).

<!-- image -->

## MAX40002-MAX40005 Evaluation Kits

Evaluates: MAX40002-MAX40005

MAX40012-MAX40015

Table 1. How Devices Behave Under Various Input Voltage Conditions

| PART                                  | V REF    | INPUT POLARITY   | INPUT VOLTAGE CONDITIONS   | ACTION AT OUTPUT   |
|---------------------------------------|----------|------------------|----------------------------|--------------------|
| MAX40002, MAX40004 MAX40012, MAX40014 | External | Noninverting     | V IN > V REF               | Output goes high   |
| MAX40002, MAX40004 MAX40012, MAX40014 | External | Noninverting     | V IN < V REF               | Output goes low    |
| MAX40003, MAX40005 MAX40013, MAX40015 | External | Inverting        | V IN > V REF               | Output goes low    |
| MAX40003, MAX40005 MAX40013, MAX40015 | External | Inverting        | V IN < V REF               | Output goes high   |
| MAX40002, MAX40004 MAX40012, MAX40014 | Internal | Noninverting     | V IN > V REF _INT          | Output goes high   |
| MAX40002, MAX40004 MAX40012, MAX40014 | Internal | Noninverting     | V IN < V REF _INT          | Output goes low    |
| MAX40003, MAX40005                    | Internal | Inverting        | V IN > V REF _INT          | Output goes low    |
| MAX40013, MAX40015                    | Internal | Inverting        | V IN < V REF _INT          | Output goes high   |

## Detailed Description of Hardware

The MAX40002-MAX40005 EV kits are fully assembled and  tested  PC  boards  that  evaluate  the  4-bump  WLP MAX40002ANS02-MAX40005ANS02 comparators.

## VCC/REF Supply Selection

The V CC /REF pad on the EV kit is used to either supply a 1.7V to 5.5V V CC  voltage (internal reference devices) or a 1.7V to 5.5V external reference voltage to the IC. Refer to the  MAX40002-MAX40005  and  MAX40012-MAX40015 data sheets for more information.

## Ordering Information

| PART*          | U1 IC (INSTALLED)   |   V REF (V) | TYPE   | SWAP U1 IC TO EVALUATE   |
|----------------|---------------------|-------------|--------|--------------------------|
| MAX40002EVKIT# | MAX40002ANS02+      |         0.2 | EV Kit | MAX40012                 |
| MAX40003EVKIT# | MAX40003ANS02+      |         0.2 | EV Kit | MAX40013                 |
| MAX40004EVKIT# | MAX40004ANS02+      |         0.2 | EV Kit | MAX40014                 |
| MAX40005EVKIT# | MAX40005ANS02+      |         0.2 | EV Kit | MAX40015                 |

# Denotes RoHS-compliant

## VPU Pad

The V PU   pad  on  the  EV  kit  is  used  to  connect  a  pullup supply  voltage  up  to  5.5V  for  the  open-drain  output devices  (MAX40002/MAX40003/MAX40012/MAX40013) for  proper  operation.  Remove  R1  and  eliminate  V PU   if evaluating  the  push-pull  output  devices  (MAX40004/ MAX40005/MAX40014/MAX40015).

│

## MAX40002-MAX40005 EV Kit Bill of Materials*

| ITEM   | REF_DES           | DNI/ DNP   |   QTY | MFG PART #                          | MFCTR               | VALUE         | DESCRIPTION                                                                                                            |
|--------|-------------------|------------|-------|-------------------------------------|---------------------|---------------|------------------------------------------------------------------------------------------------------------------------|
| 1      | C1                | -          |     1 | GRM21BR71A475KA7 3; LMK212B7475KG-T | MURATA/TAI YO YUDEN | 4.7UF         | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 10V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R           |
| 2      | C2, C4            | -          |     2 | C1608X7R1E104K080 AA                | TDK                 | 0.1UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R             |
| 3      | GND, TP1, TP2     | -          |     3 | 5006                                | KEYSTONE            | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 4      | IN, OUT, VCC, VPU | -          |     4 | 5005                                | KEYSTONE            | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
| 5      | U1                | -          |     1 | MAX40004ANS+                        | MAXIM               | MAX4000 4ANS+ | EVKIT PART-IC; COMP; 600NA; 4- BUMP ULTRA-TINY COMPARATOR; PACKAGE OUTLINE: 21-100103; PACKAGE CODE: N40C0+1; WLP4     |
| 6      | C3                | DNP        |     0 | C1608X7R1E104K080 AA                | TDK                 | 0.1UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R             |
| 7      | R1, R2            | DNP        |     0 | ERA-3ARB104                         | PANASONIC           | 100K          | RESISTOR; 0603; 100K OHM; 0.1%; 10PPM; 0.1W; THIN FILM                                                                 |
| 8      | PCB               | -          |     1 | MAX40004                            | MAXIM               | PCB           | PCB Board:MAX40004 EVALUATION KIT                                                                                      |
| TOTAL  |                   |            |    12 |                                     |                     |               |                                                                                                                        |

*Specified for the MAX40004. For other variants, change U1 to the desired device. All other components are the same.

Evaluates: MAX40002-MAX40005

MAX40012-MAX40015

MAX40002-MAX40005 EV Kit-Top Silkscreen

Evaluates: MAX40002-MAX40005

MAX40012-MAX40015

## MAX40002-MAX40005 EV Kit PCB Layout Diagrams*

<!-- image -->

<!-- image -->

MAX40002-MAX40005 EV Kit-Bottom

MAX40002-MAX40005 EV Kit-Top

<!-- image -->

MAX40002-MAX40005 EV Kit-Bottom Silkscreen

<!-- image -->

*Specified for the MAX40004. For other variants, change U1 to the desired device. All other components are the same.

│

## MAX40002-MAX40005 EV Kit Schematic*

*Specified for the MAX40004. For other variants, change U1 to the desired device. All other components are the same.

<!-- image -->

│

Evaluates: MAX40002-MAX40005

MAX40012-MAX40015

## MAX40002-MAX40005 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                        | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------|-----------------|
|                 0 | 1/17            | Initial release                                    | -               |
|                 1 | 2/20            | Added MAX40012-MAX40015 part numbers to data sheet | 1-6             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSlied  Ma[iP ,ntegrated reserves the right to change the circuitr\ and sSecifications Zithout notice at an\ tiPe

<!-- image -->

│

Evaluates: MAX40002-MAX40005

MAX40012-MAX40015