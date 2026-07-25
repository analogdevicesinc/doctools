<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX3964ETP evaluation kit (EV kit) is a fully assembled electrical demonstration kit providing easy evaluation of the MAX3964ETP. The EV kit enables testing of all MAX3964ETP functions.

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                              |
|-------------------------|-------|------------------------------------------|
| C1-C4, C8, C10, C20     |     7 | 0.1µF ± 5% ceramic capacitors (0402)     |
| C5                      |     1 | 0.027µF ± 5% ceramic capacitor (0603)    |
| C6, C26                 |     2 | 33µF ± 10% tantalum capacitors           |
| C7, C27                 |     2 | 3.3µF ± 5% ceramic capacitors (1206)     |
| J1-J6                   |     6 | SMA connectors, edge mount               |
| JU1                     |     1 | 3-pin + 1-pin header, 0.1in centers      |
| JU2, JU3                |     2 | 2-pin headers, 0.1in centers             |
| L1, L2                  |     2 | 1.2µH inductors Coilcraft 1206CS-122XJBC |
| R1                      |     1 | 1k Ω ± 5% resistor (0402)                |
| R2-R5, R9, R10          |     6 | Do not install                           |
| R6                      |     1 | 50k Ω potentiometer                      |
| R7                      |     1 | 500k Ω potentiometer                     |
| R8                      |     1 | 100k Ω ± 5% resistor (0402)              |
| R11, R12                |     2 | 84.5 Ω ± 1% resistors (0402)             |
| R24, R25                |     2 | 49.9 Ω ± 1% resistors (0402)             |
| R38                     |     1 | 0 Ω ± 5% resistor (0402)                 |
| TP1-TP11, VCC, GND, VEE |    14 | Test points Digi-Key 5000K-ND            |
| U1*                     |     1 | MAX3964ETP                               |
| Z27-Z30                 |     4 | 0 Ω ± 5% resistors (0402)                |
| None                    |     1 | MAX3964ETP EV kit circuit board, rev A   |
| None                    |     1 | MAX3964 data sheet                       |

* Note: U1 has an exposed pad, which requires it to be solder attached to the circuit board to ensure proper functionality of the part.

## Features

- ♦ Easy +3.0V to +5.5V Electrical Evaluation of the MAX3964ETP
- ♦ Fully Assembled and Tested
- ♦ Allows Testing of all Functions
- ♦ EV Kit Designed for 50 Ω Interfaces

## Ordering Information

| PART            | TEMP RANGE         | IC PACKAGE   |
|-----------------|--------------------|--------------|
| MAX3964ETPEVKIT | -40 ° C to +85 ° C | 20 QFN       |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-448-9411 | 843-448-1943 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Digi-Key   | 218-681-6674 | 218-681-3380 |
| Murata     | 770-436-1300 | 770-436-3030 |

Note: Please indicate that you are using the MAX3964ETP when ordering from these suppliers.

## Quick Start

- 1) Connect OUT+, OUT-, LOS+, and LOS- to a 50 Ω -terminated oscilloscope.
- 2) Connect a +2V power supply to VCC, a -1.0V to -3.5V power supply to VEE, and the power supply ground to GND.
- 3) Apply a differential input (2mVP-P to  1.5VP-P) between IN+ and IN-, at a data rate of 155Mbps.
- 4) Shunt jumper JU1 in its right-most position to enable R6 and R7.
- 5) Adjust the LOS threshold with R6 and R7.

## Description of Jumpers

## Setting the LOS Threshold Resistor

Jumper JU1 controls the resistor used to set the loss-ofsignal threshold. To use supplied potentiometers R6 and R7, shunt the right two pins of JU1. If a set resistor is required, solder a resistor to R9 or R10 and shunt the top two pins of JU1 (for R9), or the left two pins of JU1 (for R10).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX3964ETP Evaluation Kit

## Enabling Squelch Function

Jumper JU2 (SQUELCH) controls the squelch function. To enable squelch, short the jumper. To disable, leave unconnected.

## Description of Test Points

## Received Signal-Strength Indicator (RSSI)

Test point TP1 (RSSI) monitors the received signalstrength indicator. This pin is an analog voltage proportional to the input signal amplitude.

## Table 1. Output Terminations

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## LOS Threshold

Test point TP3 (VTH) monitors the output of the internal op amp that sets the LOS threshold voltage.

## MAX3964ETP Evaluation Kit

<!-- image -->

Figure 1. MAX3964ETP EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3964ETP Evaluation Kit

Figure 2. MAX3964ETP EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX3964ETP EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3964ETP Evaluation Kit

Figure 4. MAX3964ETP EV Kit PC Board Layout-Solder Side

<!-- image -->

<!-- image -->

Figure 5. MAX3964ETP EV Kit PC Board Layout-Ground Plane

Figure 6. MAX3964ETP EV Kit PC Board Layout-Power Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5