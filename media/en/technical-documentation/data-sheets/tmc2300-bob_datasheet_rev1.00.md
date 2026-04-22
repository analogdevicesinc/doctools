<!-- lastmod 2023-08-03 -->
## TMC2300 BOB

Document Revision V1.00 • 2021-Feb-03

## Module Top View

<!-- image -->

## Pin List

Left

|   1 | +VCC_IO   |   11 | +VBAT               |
|-----|-----------|------|---------------------|
|   2 | GND       |   12 | GND                 |
|   3 | MS1_AD0   |   13 | OA2 (Motor Phase A) |
|   4 | MS2_AD1   |   14 | OA1 (Motor Phase A) |
|   5 | UART_TX   |   15 | OB1 (Motor Phase B) |
|   6 | UART_RX   |   16 | OB2 (Motor Phase B) |
|   7 | GND       |   17 | GND                 |
|   8 | EN        |   18 | DIAG                |
|   9 | DIR       |   19 | GND                 |
|  10 | STEP      |   20 | MODE                |

## Schematics

## Features and additional Resources

- Supply voltage 2-11V DC, 2.0A coil current (peak)
- TMC2300 low voltage stepper motor driver
- Step/Dir Interface with 2, 4, 8, 16 or 32 microstep pin setting
- StealthChop2™silent motor operation
- SmoothRunning 256microstepsMicroPlyer™interpolation
- StallGuard4™in StealthChop mode
- Choice of QFN, TQFP and HTSSOP packages
- Integrated Pulse Generator for standalone motion
- Board width 1.0", board height 1.0"
- Link to additional information and IC data sheet
- 2x10 pin 0.1" header rows for pins/connectors

## Bill of Materials

Pcs.

Value

Footprint

Description

|   2 | R0603/300R/1%    | 0603        | Resistor                      |
|-----|------------------|-------------|-------------------------------|
|   1 | R0603/1K/1%      | 0603        | Resistor                      |
|   2 | R1206/0R150/0.5W | 1206        | Resistor                      |
|   1 | 10uF/25V/0805    | 0805        | Capacitor                     |
|   3 | 100nF/25V/0603   | 0603        | Capacitor                     |
|   1 | blue/0603        | 0603        | LED                           |
|   1 | white/0603       | 0603        | LED                           |
|   1 | TMC2300-LA       | QFN20,3x3mm | Trinamic Stepper Motor Driver |

<!-- image -->

GND

GND

©2021 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany Terms of delivery and rights to technical change reserved. Download newest version at www.trinamic.com

<!-- image -->

<!-- image -->

Signal

Right

Signal