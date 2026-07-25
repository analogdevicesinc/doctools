<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX3264 evaluation kit (EV kit) (data rate up to 1.25Gbps) evaluates the MAX3264/MAX3268 limiting amplifiers. The MAX3265 EV kit (data rate up to 2.5Gbps) evaluates the MAX3265/MAX3269 limiting amplifiers.

These EV kits allow easy programming of the loss-ofsignal (LOS) threshold and provide layout options for alternate termination configurations. The circuit includes space for a user-supplied preamplifier and photodiode pair mounted in a TO-46 can. Both EV kits have evaluation sites for a 16-pin TSSOP with electrical input, a 10-pin µMAX with electrical input, and a 10-pin µMAX with optical input (not installed). See Figure 1 for an overview of possible configurations.

## Component Suppliers

Note: Please indicate that you are using the MAX3264 or MAX3265 EV kit when contacting these component suppliers.

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-649-0690 | 803-626-3123 |
| Murata     | 814-237-1431 | 814-238-0490 |
| Sprague    | 516-435-1110 | 516-435-1824 |
| Zetex USA  | 516-543-7100 | 516-864-7630 |

Figure 1. Overview of Layout Topographies

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## Features

- ♦ Easy LOS Threshold Programming
- ♦ Allow Alternate Output Terminations
- ♦ Circuit Includes Space for TO-46 PIN-TIA Optical Input
- ♦ 1.25Gbps Data Rate (MAX3264EVKIT) 2.5Gbps Data Rate (MAX3265EVKIT)

## Ordering Information

| PART             | TEMP. RANGE   | IC PACKAGE                              |
|------------------|---------------|-----------------------------------------|
| MAX3264 EVKIT-SO | 0°C to +70°C  | 16 TSSOP* (MAX3264), 10 µMAX* (MAX3268) |
| MAX3265 EVKIT-SO | 0°C to +70°C  | 16 TSSOP* (MAX3265), 10 µMAX* (MAX3269) |

*Exposed pad packages

## MAX3264/MAX3265 Evaluation Kits

| DESIGNATION                              |   QTY | DESCRIPTION                                  |
|------------------------------------------|-------|----------------------------------------------|
| C1, C4, C6, C9-C11, C14-C17,C19, C30-C32 |    14 | 1000pF ±10%, 10V ceramic capacitors (0603)   |
| C2, C3, C7, C8, C12, C13                 |     6 | 0.01µF ±10%, 10V ceramic capacitors (0603)   |
| C5, C26, C27                             |     3 | 0.1µF ±10%, 10V ceramic capacitors           |
| C18, C20, C21, C28, C29, C33, C34        |     7 | Not installed                                |
| C22, C23                                 |     2 | 33µF ±10%, 16V tantalum caps AVX TAJC336K016 |
| C24, C25                                 |     2 | 2.2µF ±10%, 10V ceramic capacitors (1206)    |
| R1, R2                                   |     2 | 100 Ω ±1% resistors (0603)                   |
| R3, R12                                  |     2 | 50k Ω variable resistors                     |
| R4, R13                                  |     2 | 5k Ω variable resistors                      |
| R5, R8, R9, R15, R16, R17                |     6 | Not installed                                |
| R7, R14                                  |     2 | 330 Ω ±5% resistors (0603)                   |
| R10, R11                                 |     2 | 0 Ω resistors (0603)                         |

## Quick Start

## MAX3264/MAX3265 TSSOP Package

- 1) Install a shunt on J18 to apply power (J19, J20 open).
- 2) Install a shunt on terminals 1 and 2 of J22 to disable squelch.
- 3) Connect OUT+ and OUT- to a 50 Ω terminated oscilloscope.
- 4) Apply an input (10mVp-p to 1.2Vp-p) to J4 and J5.
- 5) Connect a +3.0V to +5.5V power supply to the VCC pad, then connect the power-supply ground to the GND pad.
- 6) Adjust the LOS threshold with R3 and R4.

## MAX3268/MAX3269 µMAX Package with Electrical Input

- 1) Install a shunt on J19 to apply power (J18, J20 open).
- 2) Apply an input (10mVp-p to 1.2Vp-p) to J7 and J8.

2

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                                     |
|-------------------------|-------|-------------------------------------------------|
| L1, L2                  |     2 | Ferrite beads Murata BLM21A102S (0603)          |
| L3                      |     1 | Not installed                                   |
| J2-J5, J7, J8, J10, J11 |     8 | SMA connectors (edge mount)                     |
| J6, J18-J20             |     4 | 2-pin headers (0.1in centers)                   |
| J13, J14                |       | Not placed                                      |
| J22                     |     1 | 3-pin header (0.1in centers)                    |
| D1, D2                  |     2 | Red LEDs                                        |
| D3                      |     1 | Not installed                                   |
| U1                      |     1 | MAX3264CUE (MAX3264EVKIT)                       |
| U1                      |     1 | MAX3265CUE (MAX3265EVKIT)                       |
| U2                      |     1 | MAX3268CUB (MAX3264EVKIT)                       |
| U2                      |     1 | MAX3269CUB (MAX3265EVKIT)                       |
| U3                      |       | Not installed                                   |
| None                    |     3 | Shunts for J6, J22, and J18 or J19 or J20       |
| None                    |     1 | MAX3264 or MAX3265 EV kit circuit board, Rev. B |
| None                    |     1 | MAX3264/MAX3265/MAX3268/ MAX3269 data sheet     |

- 3) Connect OUT+ and OUT- to a 50 Ω terminated oscilloscope.
- 4) Apply 2V to VCC, ground to GND, and a -1.0V to -3.5V power supply to VEE.
- 5) Adjust the LOS threshold with R12 and R13.

## Detailed Description

## LOS Voltage Threshold Adjustment

Potentiometers R3, R4, R12, and R13 adjust the VTH voltage, which programs the LOS threshold. Refer to the MAX3264/MAX3265/MAX3268/MAX3269 data sheet for details.

## CML Output Buffer

The MAX3264/MAX3265 CML output circuits provide high tolerance to impedance mismatches and inductive connectors. The output current can be set for either of two levels. When the LEVEL pin is left unconnected (J6 open), the output current is approximately 16mA. Connecting the LEVEL pin to ground (J6 closed) sets the output current to approximately 20mA.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3264/MAX3265 Evaluation Kits

<!-- image -->

Figure 2. MAX3264/MAX3265 EV Kits Schematic (TSSOP Package)

<!-- image -->

Figure 3. MAX3264/MAX3265 EV Kits Schematic (µMAX Package with Electrical Input)

<!-- image -->

Figure 4. MAX3264/MAX3265 EV Kits Schematic (µMAX Package with Optical Input)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3264/MAX3265 Evaluation Kits

## Table 1.  Jumpers and Potentiometers

| NAME           | FUNCTION                                       |
|----------------|------------------------------------------------|
| J18            | Applies power to U1                            |
| J19            | Applies power to U2                            |
| J20            | Applies power to U3                            |
| J22 (Pins 1-2) | Disables squelch                               |
| J22 (Pins 2-3) | Enables squelch                                |
| R3, R4         | Adjusts LOS threshold of U1 (0 Ω is clockwise) |
| R12, R13       | Adjusts LOS threshold of U2 (0 Ω is clockwise) |

| NAME   | FUNCTION                                           |
|--------|----------------------------------------------------|
| SP1    | Solder jumper for alternate terminations (Table 3) |
| SP2    | Solder jumper for alternate terminations (Table 3) |
| SP3    | Solder jumper for alternate terminations (Table 2) |
| SP4    | Solder jumper for alternate terminations (Table 2) |
| SP7    | Normally shorted                                   |

## Table 2. Output Terminations for Electrical Input (U2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3264/MAX3265 Evaluation Kits

Table 2. Output Terminations for Electrical Input (U2) (continued)

<!-- image -->

Table 3. Output Terminations for Optical Input (U3)

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluate: MAX3264/MAX3265/MAX3268/MAX3269

## MAX3264/MAX3265 Evaluation Kits

Figure 5.  MAX3264/MAX3265 EV Kits Component Placement Guide

<!-- image -->

Figure 6.  MAX3264/MAX3265 EV Kits PC Board LayoutComponent Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3264/MAX3265 Evaluation Kits

Figure 7.  MAX3264/MAX3265 EV Kits PC Board LayoutSolder Side

<!-- image -->

<!-- image -->

Figure 8.  MAX3264/MAX3265 EV Kits PC Board LayoutPower Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluate: MAX3264/MAX3265/MAX3268/MAX3269

## MAX3264/MAX3265 Evaluation Kits

Figure 9.  MAX3264/MAX3265 EV Kits PC Board Layout-GND Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600