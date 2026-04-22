<!-- lastmod 2023-08-03 -->
## TMC5160 BOB Description

Document Revision V1.10 • 2021-Feb-01

## Module Top View

<!-- image -->

## Pin List

Left

Signal

|   1 | VCC_IO (3.3V or 5V)                  |   12 | VS (9-36V)              |
|-----|--------------------------------------|------|-------------------------|
|   2 | GND                                  |   13 | GND                     |
|   3 | CSN (active low)                     |   14 | B2 (Motor Phase B)      |
|   4 | SCK (up to 6MHz with external CLK    |   15 | B1 (Motor Phase B)      |
|   5 | SDI (data in)                        |   16 | A2 (Motor Phase A)      |
|   6 | SDO (data out)                       |   17 | A1 (Motor Phase A)      |
|   7 | GND                                  |   18 | GND                     |
|   8 | CLK16 (pull to GND for internal CLK) |   19 | DIAGO (Diagnosis out)   |
|   9 | DRV_ENN (active low)                 |   20 | ENCA (Incremental Enc.) |
|  10 | REFL (Left End Stop)                 |   21 | ENCB (Incremental Enc.) |
|  11 | REFR (Right End Stop)                |   22 | ENCN (Incremental Enc.) |

<!-- image -->

Right

Signal

## Features and additional Resources

- Supply voltage 9-36V (limited by the MOSFETs)
- TMC5160-TA stepper controller
- I phase,RMS 2.8A continuous / 3.1A peak
- S/D mode selectable via solder option
- Con/uniFB01guration &amp; Control via SPI
- Use with optional lowESR ELCO, ca. 150uF
- 2x11 pin 0.1" header rows for pins/connectors
- Board width 1.5", board height 1.1"
- Link to additional information and IC data sheet
- Link to evaluation kit

## Bill of Materials

Pcs.

MPN

|   4 | MC0603F104M500CT    | 100nF            | 0603           | Cap, Multicomp   |
|-----|---------------------|------------------|----------------|------------------|
|   2 | GRM188R61E225KA12D  | 2u2              | 0603           | Cap, Murata      |
|   1 | MC0603X474K160CT    | 470nF            | 0603           | Cap, Multicomp   |
|   1 | MC0603B223K500CT    | 22nF             | 0603           | Cap, Multicomp   |
|   2 | GRM31CR61H106MA12L  | 10uF,50V,10%     | 1206           | Cap, Murata      |
|   4 | GCM188R71H224KA64D  | 220nF            | 0603           | Cap, Murata      |
|   2 | C1608X7R1H474K080AC | 470nF, 50V       | 603            | Cap, TDK         |
|   1 | EEU-FR1H151B        | 150uF,50V,lowESR | THT            | ELCO, Panasonic  |
|   1 | LTST-C191TBKT-5A    | 20mA,2.8V,465nm  | 0603           | LED, Lite-On     |
|   1 | TMC5160-TA          | TMC5160-TA       | TQFP48-EP, 7x7 | TRINAMIC         |
|   4 | AO4882              | AO4882           | SOP-8L         | FET, Alpha&Omega |
|   1 | MCWR06X000PTL       | 0R               | 0603           | Res, Multicomp   |
|   8 | MCWR06X22R0FTLV     | 22R, 100mW, 1%   | 0603           | Res, Multicomp   |
|   4 | MCSR06X47R0FTL      | 47R, 1%          | 0603           | Res, Multicomp   |
|   2 | ERJ-8BWFR075V       | 0R075, 1W, 1%    | 1206           | Res, Panasonic   |
|   1 | MC0063W060312R2     | 2R2, 1%          | 0603           | Res, Multicomp   |
|   1 | MC0063W060311K      | 1k               | 0603           | Res, Multicomp   |

Footprint

Description

<!-- image -->

Value

## BOB Schematics

P3

<!-- image -->

## Mode Selection

- Soldering R1 / not R2 = Step/Direction interface active for use with external motion controller (STEP = REFL, DIR = REFR)
- Soldering R2 / not R1 = Internal ramp generator active with Trinamic's 6-point-ramp (default mode)

<!-- image -->

<!-- image -->