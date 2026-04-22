<!-- lastmod 2023-08-03 -->
## TMC5130A-TA BOB Description

Document Revision V1.00 • 2021-Feb-01

## Module Top View

<!-- image -->

## Pin List

Left

Signal

|   1 | VCC_IO (3.3V or 5V)                  |   12 | VS (5-46V)                |
|-----|--------------------------------------|------|---------------------------|
|   2 | GND                                  |   13 | GND                       |
|   3 | CSN (active low)                     |   14 | OA1                       |
|   4 | SCK (up to 8MHz with ext. CLK)       |   15 | OA2                       |
|   5 | SDI (data in)                        |   16 | OB1                       |
|   6 | SDO (data out)                       |   17 | OB2                       |
|   7 | GND                                  |   18 | GND                       |
|   8 | CLK16 (pull to GND for internal CLK) |   19 | AIN_IREF (see data sheet) |
|   9 | DRV_ENN (active low)                 |   20 | ENCA (3.3V or 5V)         |
|  10 | REFL (3.3V or 5V)                    |   21 | ENCB (3.3V or 5V)         |
|  11 | REFR (3.3V or 5V)                    |   22 | ENCN (3.3V or 5V)         |

<!-- image -->

Right

Signal

## Features and additional Resources

- Supply voltage 5-46V, I phase,RMS up to 1.4A
- TMC5130A-TA stepper driver and controller
- Solder option to select between internal or external ramp generation (R1/R2)
- Use off-board electrolyte cap with your supply
- Con/uniFB01guration and control via SPI
- Board width 1.0", board height 1.1"
- Link to additional information and IC data sheet
- 2x11 pin 0.1" header rows for pins/connectors
- Link to evaluation kit

## Bill of Materials

Pcs.

MPN

Value

Footprint

Description

|   4 | MC0603F104M500CT   | 100nF              | 0603                | Cap, Multicomp    |
|-----|--------------------|--------------------|---------------------|-------------------|
|   1 | MC0603B223K500CT   | 22nF               | 0603                | Cap, Multicomp    |
|   1 | MC0603X474K160CT   | 470nF              | 0603                | Cap, Multicomp    |
|   1 | MC0603X475K100CT   | 4.7uF              | 0603                | Cap, Multicomp    |
|   4 | GRM31CC8YA106KA12L | 10uF,35V,10%       | 1206                | Cap, Murata       |
|   1 |                    | App-speci/uniFB01c | THT POL CAP, 2 pins | Optional ELKO     |
|   1 | LTST-C191TBKT-5A   | 20mA,2.8V,465nm    | 0603                | LED, Lite-On      |
|   1 | TMC5130A-TA        | TMC5130A-TA        | TQFP48,7x7,0.5      | cDriver, TRINAMIC |
|   2 | MCWR06X000 PTL     | 0R                 | R0603               | Res, Multicomp    |
|   1 | MC0063W060311K     | 1k                 | 0603                | Res, Multicomp    |
|   2 | ERJ-8BSFR15V       | 0.15R,0.5W,1%      | 1206                | SenseR, Panasonic |
|   1 | MC0063W060312R2    | 2R2,1%             | 0603                | Res, Multicomp    |

<!-- image -->

## BOB Schematics

## Mode Selection

<!-- image -->

- Soldering R1 / not R2 = Step/Direction interface active for use with external motion controller (STEP = REFL, DIR = REFR)
- Soldering R2 / not R1 = Internal ramp generator active with Trinamic's 6-point-ramp (default mode)

<!-- image -->

<!-- image -->