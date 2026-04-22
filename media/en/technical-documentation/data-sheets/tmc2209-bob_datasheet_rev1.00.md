<!-- lastmod 2023-08-03 -->
## TMC2209 BOB

Document Revision V1.00 • 2021-Feb-04

## Module Top View

<!-- image -->

## Pin List

Left

## Schematics

Signal

Right

Signal

|   1 | +VCC_IO   |   11 | +VM                |
|-----|-----------|------|--------------------|
|   2 | GND       |   12 | GND                |
|   3 | UART_RX   |   13 | B1 (Motor Phase B) |
|   4 | UART_TX   |   14 | B2 (Motor Phase B) |
|   5 | VREF      |   15 | A1 (Motor Phase A) |
|   6 | GND       |   16 | A2 (Motor Phase A) |
|   7 | CLK16     |   17 | GND                |
|   8 | ENN       |   18 | MS1                |
|   9 | STEP      |   19 | MS2                |
|  10 | DIR       |   20 | SPREAD             |
|  21 | INDEX     |   22 | DIAG               |

## Features and additional Resources

- Supply voltage 5-28V
- TMC2209-LA stepper motor driver
- I phase up to 1.5A RMS
- Sensorless stall detection StallGuard™4
- Quiet operation with StealthChop™
- Con/uniFB01guration and extended diagnostics via UART
- Board width 1.0", board height 1.0"
- Control via Step&amp;Dir interface
- 2x10 pin 0.1" header rows for pins/connectors · Link to additional information and IC data sheet

## Bill of Materials

Pcs.

Value

Footprint

Description

|   1 | R0603/1R1/1%   | 0603        | Resistor                      |
|-----|----------------|-------------|-------------------------------|
|   1 | R0603/100k/1%  | 0603        | Resistor                      |
|   2 | R0603/1k/1%    | 0603        | Resistor                      |
|   1 | R0603/220R/1%  | 0603        | Resistor                      |
|   1 | 1uF, 50V       | 0603        | Capacitor                     |
|   2 | 10uF, 50V      | 1210        | Capacitor                     |
|   2 | R2010/1W/0R12  | 2010        | Resistor                      |
|   1 | 2u2/50V        | 0603        | Capacitor                     |
|   1 | 22nF/50V       | 0805        | Capacitor                     |
|   4 | 100nF, 50V     | 0603        | Capacitor                     |
|   1 | blue/0603      | 0603        | LED                           |
|   1 | white/0603     | 0603        | LED                           |
|   1 | TMC2209-LA     | QFN28,5x5mm | Trinamic Stepper Motor Driver |

&gt;

<!-- image -->

©2021 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany Terms of delivery and rights to technical change reserved. Download newest version at www.trinamic.com

<!-- image -->

<!-- image -->