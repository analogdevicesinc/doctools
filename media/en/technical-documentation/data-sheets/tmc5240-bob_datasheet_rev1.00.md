<!-- lastmod 2023-08-03 -->
A

## TMC5240-BOB

Document Revision V1.00 • 2022-SEP-21

## Module Top/Bottom View

<!-- image -->

Pin

Left Header

Right Header

## Pin List

| 1   | +VCC_IO   | +VM                |
|-----|-----------|--------------------|
| 2   | GND       | GND                |
| 3   | SPI_CSn   | A2 (Motor Phase A) |
| 4   | SPI_SCK   | A1 (Motor Phase A) |
| 5   | SPI_MOSI  | B2 (Motor Phase B) |
| 6   | SPI_MISO  | B1 (Motor Phase B) |
| 7   | GND       | GND                |
| 8   | CLK       | AIN (1.25V max.) C |
| 9   | DRV_ENn   | OV                 |
| 10  | SLEEPn    | ENCA               |
| 11  | REFL      | ENCB               |
| 12  | REFR      | ENCN               |
| TP  | DIAG0     | DIAG1              |

## Schematics

<!-- image -->

<!-- image -->

## Features and additional Resources

- Supply voltage 4.5-36V
- TMC5240 stepper motor driver &amp; controller
- I phase up to 2.0A RMS
- StealthChop2™ silent PWM mode
- Flexible wave table and phase shift
- StallGuard4™ sensorless motor load detection
- 2x12 pin 0.1" header rows for pins/connectors
- Board width 1.0", board height 1.2"
- Link to additional information and IC data sheet

## Bill of Materials

Pcs.

Value

|   1 | 1k/1%        | 0603    | Resistor                      |
|-----|--------------|---------|-------------------------------|
|   2 | 4k7/1%       | 0603    | Resistor                      |
|   1 | 12k/1%       | 0603    | Resistor                      |
|   1 | 1uF, 16V     | 0603    | Capacitor                     |
|   2 | 1uF, 50V     | 0603    | Capacitor                     |
|   1 | 2u2, 6.3V    | 0603    | Capacitor                     |
|   1 | 22nF, 50V    | 0603    | Capacitor                     |
|   1 | 100nF, 16V E | 0603    | Capacitor F                   |
|   2 | 100nF, 50V   | 0603    | Capacitor                     |
|   1 | blue/0603    | 0603    | LED                           |
|   1 | TMC5240      | TSSOP38 | Trinamic Stepper Motor Driver |

D

<!-- image -->

<!-- image -->

<!-- image -->

OPEN SOURCE

Designed by:

Approved by:

Schematic title:

Fiducials

FID201

1 mm

FID100

FID202

1 mm

FID100

FID203

1 mm

FID100

Footprint

Description

G

Revision:

5

4

3

2

1