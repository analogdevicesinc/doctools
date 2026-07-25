<!-- lastmod 2022-08-02 -->
## General Description

The MAX3272 evaluation kit (EV kit) is fully assembled and tested to provide easy evaluation of the MAX3272 3.3V, 2.5Gbps low-power limiting amplifier. The EV kit also includes a calibration strip to enable accurate jitter and edge speed measurements.

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                |
|--------------------|-------|--------------------------------------------|
| C1                 |     1 | 33µF ± 10% tantalum capacitor              |
| C2                 |     1 | 2.2µF ± 10% tantalum capacitor             |
| C3, C16            |     2 | 0.1µF ± 10% ceramic capacitors (0402)      |
| C4-C7              |     4 | 1000pF ± 10% ceramic capacitors (0402)     |
| C8-C15, C17        |     9 | 0.01µF ± 10% ceramic capacitors (0402)     |
| R1, R2             |     2 | 4.75k Ω ± 1% resistors (0402)              |
| R3                 |     1 | 20k Ω potentiometer                        |
| R4                 |     1 | 2k Ω potentiometer                         |
| L1                 |     1 | 56nH inductor Coilcraft 0805CS-560XKBC     |
| U1                 |     1 | MAX3272EGP 20-QFN*                         |
| J1-J8              |     8 | SMA connectors, edge mount (round contact) |
| J9, J10, J11       |     3 | 1 × 3-pin headers (0.1in centers)          |
| J12, J13           |     2 | 1 × 2-pin headers (0.1in centers)          |
| J14, J15, TP1, TP2 |     4 | Test points                                |
| None               |     1 | MAX3272 evaluation circuit board, rev A    |
| None               |     1 | MAX3272 data sheet                         |

- ♦ Single +3.3V Power Supply
- ♦ Fully Assembled and Tested
- ♦ Includes Calibration Strip for Accurate Measurements
- ♦ EV Kit Designed for 50 Ω Interfaces
- ♦ Easy LOS Threshold Programming
- ♦ Easy Output Polarity Control

## Ordering Information

| PART         | TEMP RANGE         | IC PACKAGE   |
|--------------|--------------------|--------------|
| MAX3272EVKIT | -40 ° C to +85 ° C | 20 QFN       |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-448-9411 | 843-448-1943 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 814-237-1431 | 814-238-0490 |
| Venkel     | 800-950-8365 | 512-794-0087 |

Note: Please indicate that you are using the MAX3272 when ordering from these suppliers.

## Quick Start

- 1) Connect a shunt across pins 1 (VCC) and 2 of jumper J9 for no inversion in the output polarity.
- 2) Ensure that J13 is open.
- 3) Connect OUT+ and OUT- to a 50 Ω terminated oscilloscope.
- 4) Apply a differential input (15mVP-P to  1200mVP-P) between IN+ and IN-.
- 5) Connect a +3.3V power supply to J14 (VCC), then connect the power-supply ground to J15 (GND).
- 6) Adjust the LOS threshold with R3 and R4.
- 7) The output amplitude is approximately 750mV.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

1

## MAX3272 Evaluation Kit

## Detailed Description

## LOS Threshold Adjustment

Potentiometers R3 and R4 program the LOS assert threshold. Refer to the MAX3272 data sheet for details on setting the threshold.

## Setting the Offset Correction Capacitor

Jumper J10 sets the offset correction loop capacitor. Short pins 1 and 2 to set CAZ = 0.1µF; short pins 2 and 3 to disable the offset correction loop. Leave J10 unconnected for a higher cutoff frequency. Refer to the MAX3272 data sheet for details.

## Setting the Output Polarity

Jumper J9 sets the output polarity. Short pins 1 (VCC) and 2 for no signal inversion, or short pins 2 and 3 (GND) for an inversion in output polarity.

## Setting the Squelch Function

Jumper J11 controls the squelch function. To enable squelch, short pins 1 (VCC) and 2. To disable, short pins 2 and 3 (GND) or leave unconnected.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Setting the Output Current

Jumper J13 sets the output current level. For 16mA CML output current, leave this jumper open. For approximately 20mA, short the jumper.

## Setting the LOS Capacitor

Jumper J12 sets the LOS time constant capacitor. To connect a 0.01µF capacitor, short the jumper. For a shorter time constant (about 2µs), leave the jumper open.

## LOS Test Point

Test point 1 is used to probe the LOS voltage. This pin should indicate high ( ≥ 2.4V) when loss-of-signal is detected, and indicate low ( ≤ 0.4V) in normal operation.

## LOS Test Point

Test point 2 is used to probe the LOS voltage. This pin should indicate low ( ≤ 0.4V) when loss-of-signal is detected, and indicate high ( ≥ 2.4V) in normal operation.

<!-- image -->

## MAX3272 Evaluation Kit

<!-- image -->

Figure 1. MAX3272 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3272 Evaluation Kit

Figure 2. MAX3272 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 3. MAX3272 EV Kit PC Board Layout-Component Side

<!-- image -->

## MAX3272 Evaluation Kit

Figure 4. MAX3272 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3272 Evaluation Kit

Figure 5. MAX3272 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 6. MAX3272 EV Kit PC Board Layout-Power Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->