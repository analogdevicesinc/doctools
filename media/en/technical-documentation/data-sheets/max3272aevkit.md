<!-- lastmod 2022-08-02 -->
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## \_\_\_\_\_\_\_ General Description

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

The MAX3272A evaluation kit (EV Kit) is fully assembled and tested to provide easy evaluation of the MAX3272A +3.3V, 2.5Gbps low power limiting amplifier.  The EV Kit also includes a calibration strip for accurate measurements.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component List

| DESIGNATION        |   QTY | DESCRIPTION                               |
|--------------------|-------|-------------------------------------------|
| C1                 |     1 | 33 µ F ± 10% tantalum capacitor           |
| C2                 |     1 | 2.2 µ F ± 10% tantalum capacitor          |
| C3, C16            |     2 | 0.1 µ F ± 10% ceramic capacitors (0402)   |
| C4 - C7            |     4 | 1000pF ± 10% ceramic capacitors (0402)    |
| C8 - C15, C17      |     9 | 0.01 µ F ± 10% ceramic capacitors (0402)  |
| R1, R2             |     2 | 4.75k Ω resistors ± 1% (0402)             |
| R3                 |     1 | 20k Ω potentiometer                       |
| R4                 |     1 | 2k Ω potentiometer                        |
| L1                 |     1 | 56nH inductor Coilcraft 0805CS-560XKBC    |
| U1                 |     1 | MAX3272AEGP 20-QFN*                       |
| J1 - J8            |     8 | SMA connectors edge mount (round contact) |
| J9, J10, J11       |     3 | 1X3 pin headers (0.1' centers)            |
| J12, J13           |     2 | 1X2 pin headers (0.1' centers)            |
| J14, J15, TP1, TP2 |     4 | Test points                               |
| None               |     1 | MAX3272A evaluation circuit board, rev A  |
| None               |     1 | MAX3272 / MAX3272A data sheet             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

- ♦ Single +3.3V Power Supply
- ♦ Fully Assembled and Tested
- ♦ Includes Calibration Strip for Accurate Measurements
- ♦ EV Kit Designed for 50 Ω Interfaces
- ♦ Easy LOS Threshold Programming
- ♦ Easy Output Polarity Control

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Ordering Information

| PART          | TEMP RANGE         | IC PACKAGE   |
|---------------|--------------------|--------------|
| MAX3272AEVKIT | -40 ° C to +85 ° C | 20 QFN       |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-448-9411 | 843-448-1943 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 814-237-1431 | 814-238-0490 |
| Venkel     | 800-950-8365 | 512-794-0087 |

Note: Please indicate that you are using the MAX3272A when ordering from these suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Quick Start

- 1) Connect  a  shunt  across  pins  1  (VCC)  and  2  of jumper J9 for no inversion in the output polarity.
- 2) Ensure that J13 is open.
- 3) Connect  OUT+  and  OUT-  to  a  50 Ω terminated oscilloscope.
- 4) Apply  a  differential  input  (15mVP-P  to  1200mVP-P) between IN+ and IN-.
- 5) Connect a +3.3V power supply to J14  (VCC),  then connect the power supply ground to J15 (GND).
- 6) Adjust the LOS threshold with R3 and R4.
- 7) The output amplitude is approximately 750mVP-P.

1

## MAX3272A Evaluation Kit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ \_\_\_

## Detailed Description

## LOS Threshold Adjustment

Potentiometers  R3  and  R4  program  the  LOS  assert threshold.  Refer  to  the  MAX3272  /  MAX3272A  Data Sheet for details on setting the threshold.

## Setting the Offset Correction Capacitor

Jumper  J10  sets  the  offset  correction  loop  capacitor. Short pins 1 and 2 to set CAZ=0.1 µ F; short pins 2 and 3 to disable the offset correction loop. Leave J10 unconnected for a  higher cutoff  frequency.  Refer  to  the MAX3272 / MAX3272A Data Sheet for details.

## Setting the Output Polarity

Jumper J9  sets  the  output  polarity.  Short  pins  1  (VCC) and  2  for  no  signal  inversion,  and  short  pins  2  and  3 (GND) for an inversion in output polarity.

## Setting the Squelch Function

Jumper  J11  controls  the  squelch  function.  To  enable squelch, short pins 1 (VCC) and 2. To disable, short pins 2 and 3 (GND) or leave unconnected.

## Setting the Output Current

Jumper J13 sets the output current level. For 16mA CML output current, leave this jumper open. For approximately 20mA, short the jumper.

## Setting the LOS Capacitor

Jumper J12 sets the LOS Time Constant Capacitor. To connect  a  0.01 µ F  capacitor,  short  the  jumper.  For  a shorter time constant (about 2 µ s), leave the jumper open.

## LOS Test Point

Test Point 1 is used to probe the LOS voltage. This pin should  indicate  high  ( ≥ 2.4V)  when  loss  of  signal  is detected, and indicate low ( ≤ 0.4V) in normal operation.

## LOS Test Point

Test Point 2 is used to probe the LOS voltage. This pin should  indicate low ( ≤ 0.4V) when  loss  of signal is detected, and indicate high ( ≥ 2.4V) in normal operation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3272A Evaluation Kit

Figure 1. MAX3272A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3272A Evaluation Kit

Figure 2. MAX3272A EV Kit Component Placement Guide - Component Side

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3.  MAX3272A EV Kit PC Board Layout Component Side

<!-- image -->

## MAX3272A Evaluation Kit

Figure 4. MAX3272A EV Kit PC Board Layout Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3272A Evaluation Kit

Figure 5. MAX3272A EV Kit PC Board Layout Ground Plane

<!-- image -->

Figure 6.  MAX3272A EV Kit PC Board Layout Power Plane

<!-- image -->

Maxim makes no warranty, representation or guarantee regarding the suitability of its products for any particular purpose, nor does Maxim assume any liability arising out of the application or use of any product or circuit and specifically disclaims any and all liability, including without limitation consequential or incidental damages.  'Typical' parameters can and do vary in different applications.  All operation parameters, including 'typicals' must be validated for each customer application by customer's technical experts.  Maxim products are not designed, intended or authorized for use as components in systems intended for surgical implant into the body, or other applications intended to support or sustain life, or for any other application in which the failure of the Maxim product could create a situation where personal injury or death may occur.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_