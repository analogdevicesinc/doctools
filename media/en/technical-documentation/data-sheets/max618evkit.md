<!-- lastmod 2022-08-04 -->
## General Description

The MAX618 evaluation kit (EV kit) is a constant-frequency, PWM, step-up switching regulator with an internal 2A, 28V n-channel MOSFET. The EV kit accepts a +3V to VOUT input and converts it to a 12V output for currents up to 500mA. Conversion efficiency is greater than 90%. The EV kit operates at 250kHz, allowing the use of small external components.

The MAX618 EV kit is a fully assembled and tested surface-mount circuit board.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                        |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 68µF, 20V low-ESR tantalum caps AVX TPSE686M020R0150 or Sprague 593D686X0020E2W                                    |
| C3            |     1 | 0.1µF ceramic capacitor                                                                                            |
| C4            |     1 | 4.7µF, 10V X5R ceramic capacitor Taiyo Yuden LMK316BJ475ML                                                         |
| C5            |     1 | 0.047µF ceramic capacitor                                                                                          |
| C6, C7        |     2 | 1µF, 25V X5R ceramic capacitors Taiyo Yuden TMK316BJ105KL                                                          |
| C8            |     1 | 68pF ceramic capacitor                                                                                             |
| D1            |     1 | 2A Schottky diode SGS-Thomson STPS2L25U, Nihon EC21QS03L, or Central Semiconductor CMSH2-40M                       |
| L1            |     1 | 15µH power inductor Sumida CDRH6D38-150 (shielded), Sumida CR75-150 (unshielded), or Sumida CDH74-150 (unshielded) |
| R1            |     1 | 715k Ω ±1% resistor                                                                                                |
| R2            |     1 | 100k Ω ±1% resistor                                                                                                |
| U1            |     1 | MAX618EEE                                                                                                          |
| JU1           |     1 | 3-pin header                                                                                                       |
| None          |     1 | Shunt                                                                                                              |
| None          |     1 | MAX618 PC board                                                                                                    |
| None          |     1 | MAX618 data sheet                                                                                                  |

<!-- image -->

Features

- ' +3V to VOUT Input Voltage Range
- ' 12V or Adjustable Output Voltage
- ' Up to 500mA Output Current
- ' Internal 2A, 28V MOSFET Switch
- ' 3µA Shutdown Current
- ' 250kHz Switching Frequency
- ' Surface-Mount Components
- ' Fully Assembled and Tested

## Ordering Information

| PART        | TEMP. RANGE   | IC PACKAGE   |
|-------------|---------------|--------------|
| MAX618EVKIT | 0°C to +70°C  | 16 QSOP      |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX618 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +5V supply to the VIN pad. Connect ground to the GND pad.
- 2) Connect a voltmeter and load, if any, to the VOUT pad.
- 3) Place the shunt across JU1 pins 2 and 3.
- 4) Turn on the power supply to the board and verify that the output voltage is 12V.
- 5) For other output voltages, refer to the Output Voltage Selection section in the MAX618 data sheet for  instructions  on  selecting  feedback  resistors  R1 and R2, inductor L1, output capacitor C2, and compensation capacitors C5 and C8. Note: Input (C1) and output (C2) capacitors are rated at 20V.

## Jumper Selection

The 3-pin header JU1 selects shutdown mode. Table 1 lists the selectable jumper options in shutdown mode.

## Table 1. Jumper JU1 Shutdown Function

| SHUNT LOCATION   | SHDN PIN         | MAX618 OUTPUT                         |
|------------------|------------------|---------------------------------------|
| 1 & 2            | Connected to GND | Shutdown mode, V OUT = V IN - V DIODE |
| 2 & 3            | Connected to VL  | MAX618 enabled, V OUT = 12V           |

1

Figure 1. MAX618 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX618 Evaluation Kit

<!-- image -->

Figure 2. MAX618 EV Kit-Component Placement Guide

Figure 3. MAX618 EV Kit PC Board Layout-Component Side

<!-- image -->

<!-- image -->

Figure 4. MAX618 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX618 Evaluation Kit

NOTES

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

4

## MAX618 Evaluation Kit

## NOTES

5

## MAX618 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1999 Maxim Integrated Products