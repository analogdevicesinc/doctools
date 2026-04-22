<!-- lastmod 2023-09-04 -->
## TMC4361A-LA BOB Description

Document Revision V1.00 · 2017-Oct-19

## Module Top View

<!-- image -->

## Pin List

<!-- image -->

## Features and additional Resources

- TMC4361A-LA stepper motor servo controller with S-shaped ramps
- Supply voltage 3.3V or 5V
- Con/uniFB01guration and control via SPI and Step/Direction
- SPI or Step and Direction output
- Reference switch and synchronization signal inputs
- Encoder interface for closed loop control
- Board width 1.0", board height 1.5"
- 2x15 pin 0.1" header rows for pins/connectors
- Link to additional information and IC Datasheet
- Link to Evaluation Kit

## Bill of Materials

|   Pcs. | MPN              | Value           | Footprint     | Description          |
|--------|------------------|-----------------|---------------|----------------------|
|      5 | MC0603B104K160CT | 100nF/16V/10%   | 0603          | Cap, Multicomp       |
|      1 | LTST-C191TBKT-5A | 20mA,2.8V,465nm | 0603          | LED, Lite-On         |
|      1 | TMC4361A-LA      | TMC4361A-LA     | QFN40,6x6,0.5 | Controller, TRINAMIC |
|      1 | MC0063W060311K   | 1k              | 0603          | Res, Multicomp       |

<!-- image -->

|   Left | Signal   |   Right | Signal   |
|--------|----------|---------|----------|
|      1 | VCC      |      16 | INTR     |
|      2 | GND      |      17 | TARGET_R |
|      3 | CLK      |      18 | CSN_DRV  |
|      4 | NRST     |      19 | SCK_DRV  |
|      5 | CSN      |      20 | SDO_DRV  |
|      6 | SCK      |      21 | SDI_DRV  |
|      7 | SDI      |      22 | STPOUT   |
|      8 | SDO      |      23 | DIROUT   |
|      9 | HOME_REF |      24 | ANEG     |
|     10 | STOPR    |      25 | A        |
|     11 | STOPL    |      26 | BNEG     |
|     12 | NFREEZE  |      27 | B        |
|     13 | START    |      28 | NNEG     |
|     14 | STPIN    |      29 | N        |
|     15 | DIRIN    |      30 | GND      |

## BOB Schematics

<!-- image -->

<!-- image -->