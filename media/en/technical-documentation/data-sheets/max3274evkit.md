<!-- lastmod 2022-08-02 -->
## General Description

The MAX3274 evaluation kit (EV kit) simplifies evaluation of the MAX3274 limiting amplifier. The EV kit allows quick threshold level selections, provides appropriate impedance matching circuitry, and includes calibration circuits.  The  MAX3274 EV kit is fully assembled and tested.

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                                                    |
|--------------------------|-------|----------------------------------------------------------------|
| C1, C4                   |     2 | 33µF ± 10%, 10V min tantalum capacitors (case B)               |
| C2, C5-C15               |    12 | 0.1µF ± 10%, 10V min ceramic capacitors (0402)                 |
| C3                       |     1 | 0.1µF ± 10%, 10V min ceramic capacitor (0603)                  |
| J1-J8                    |     8 | SMA connectors, edge mount, tab centers EFJohnson 142-0701-851 |
| JU1-JU4, JU6, JU7        |     6 | 2-pin headers, 0.1in centers                                   |
| JU1-JU4, JU6, JU7        |     6 | Shunts                                                         |
| L1                       |     1 | 4.7µH inductor Coilcraft 1008CT-040XKBC (1008)                 |
| R1, R2, R6, R8           |     4 | 4.7k Ω ± 5% resistors (0402)                                   |
| R3                       |     1 | 1.5k Ω ± 1% resistor (0402)                                    |
| R4                       |     1 | 681 Ω ± 1% resistor (0402)                                     |
| R5                       |     2 | 401 Ω ± 1% resistor (0402)                                     |
| R9, R10                  |     2 | Open                                                           |
| TP1, TP2, GND, VCC, VLOS |     5 | Test points Digi-Key 5000K-ND                                  |
| U1                       |     1 | MAX3274UGE (MAX3274EVKIT)                                      |
| None                     |     1 | MAX3274, rev B, EV kit circuit board                           |
| None                     |     1 | MAX3274 data sheet                                             |

<!-- image -->

## Features

- ♦ Test Points for Easy Monitoring of LOS and LOS
- ♦ Separate Pullup Supply (VLOS) Pin for LOS and LOS Outputs
- ♦ Jumpers Allow Quick Selection for Loss-of-Signal Threshold Level, Squelch, and Bandwidth

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX3274EVKIT | 0°C to +85°C | 16 QFN       |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 770-436-1300 | 770-436-3030 |
| Venkel     | 800-950-8365 | 512-794-0087 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX3274 Evaluation Kit

## Quick Start

- 1) Connect OUT+ and OUT- to a 50 Ω terminated oscilloscope.
- 2) Connect IN+ and IN- to a 500mVP-P, 2.125Gbps differential data stream.
- 3) Remove jumper JU6 to disable squelch.
- 4) Connect shunt at jumper JU7 to use VCC as the pullup supply for LOS and LOS outputs.
- 5) Connect shunt at jumper JU4 for 2.125Gbps operation.
- 6) Connect a +3.3V power supply to the VCC pad, and then connect the power-supply ground to the GND pad.
- 7) Observe a limited signal at the output (~1.1VP-P differential for the MAX3274).

## Detailed Description

The MAX3274 dual-rate limiting amplifier is designed to accept a differential signal from a 100 Ω differential output transimpedance preamplifier. In order for output data to be valid, incoming data must be above the threshold voltage set by placing a shunt at jumper JU1, JU2, or JU3. LOS and LOS are open-collector outputs and indicate whether the input data stream voltage is below the threshold voltage. The EV kit supplies the required pullup resistors for LOS and LOS .  Placing  a shunt at jumper JU6 enables squelch and disables output if incoming data voltage is below the threshold level. The shunt can be removed from jumper JU7 if the user wants to interface the LOS and LOS pins with a voltage different from VCC. With a shunt at jumper JU4, the input filter  is  disabled  and  the  chip  is  ready  to  accept data at 2.125Gbps. To evaluate the chip at 1.0625Gbps, remove the shunt at jumper JU4.

## Calibration Strip

The calibration strip can be used to calibrate out the effects of the circuit board, such as connectors, in critical measurements such as deterministic jitter and rise/fall times.

## Table 1. Jumpers

| NAME          | FUNCTION                                                                           |
|---------------|------------------------------------------------------------------------------------|
| JU1, JU2, JU3 | Select loss-of-signal threshold level                                              |
| JU4           | Selects input bandwidth, open for 1.0625Gbps and closed for 2.125Gbps              |
| JU6           | Closed to enable squelch, opened to disable squelch                                |
| JU7           | When using an external pullup supply for LOS and LOS other than VCC, remove jumper |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3274 Evaluation Kit

Figure 1. MAX3274 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3274 Evaluation Kit

Figure 2. MAX3274 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3. MAX3274 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX3274 EV Kit PC Board Layout-Power Plane

<!-- image -->

## MAX3274 Evaluation Kit

Figure 4. MAX3274 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 6. MAX3274 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5