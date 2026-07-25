<!-- lastmod 2022-08-02 -->
## General Description

The MAX3783 evaluation kit (EV kit) is an assembled demonstration board that provides easy evaluation of the MAX3783 multiplexer/buffer. The MAX3783 EV kit provides 100 Ω differential output terminations onboard, simplifying termination of unused outputs.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| C1-C40        |    40 | 0.1µF ±10% ceramic capacitors (0402) Murata GRM36X5R104K010AD |
| C41           |     1 | 33µF ±10% tantalum capacitor (C) AVX TAJC336K010              |
| C42           |     1 | 2.2µF ±10% tantalum capacitor (C) AVX TAJC225K035             |
| J1-J28        |    28 | SMA connectors (edge-mount)                                   |
| J29, J30      |     2 | Test points                                                   |
| JU1-JU6       |     6 | 1 × 2-pin headers (0.1in centers)                             |
| L1            |     1 | 47nH inductor (0805) Coilcraft 0805CS-470XKBC                 |
| R1-R6         |     6 | 1k Ω ±1% resistors (0603)                                     |
| R7-R13        |     7 | 100 Ω ±1% resistors (0603)                                    |
| U1            |     1 | MAX3783UCM 48-pin TQFP-EP (exposed pad)                       |
| None          |     6 | Shunts                                                        |
| None          |     1 | MAX3783 evaluation board                                      |
| None          |     1 | MAX3783 data sheet                                            |

<!-- image -->

## Features

- ♦ Fully Assembled and Tested
- ♦ Single +3.3V Power-Supply Operation
- ♦ Termination of Unused Outputs Provided OnBoard
- ♦ Easy Selection of Operating Modes

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX3783EVKIT | 0°C to +85°C  | 48 TQFP-EP*  |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 814-237-1431 | 814-238-0490 |

## Quick Start

- 1) Remove R12 (differential termination resistor) from the evaluation board. Note: Be sure to clean flux residue thoroughly.
- 2) Apply +3.3V to the VCC pin (J29). Connect powersupply ground to the GND pin (J30).
- 3) Shunt jumper JU5 (SELA). Refer to Table 1 for other configurations.
- 4) Apply up to 3.125Gbps differential data to LI2A± (J17 and J18).
- 5) Connect SOA± (J23 and J24) to a high-speed 50 Ω oscilloscope.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX3783 Evaluation Kit

## Detailed Description

## Connecting CML Outputs to 50 Ω Oscilloscopes

CML outputs have a common-mode voltage near VCC, which is incompatible with oscilloscopes terminated in 50 Ω to  ground. To avoid interfering with the commonmode voltage, all MAX3783 CML outputs are AC-coupled on-board with 0.1µF capacitors. The CML outputs should not be connected directly through 50 Ω to ground.

## Terminating Unused Outputs

The MAX3783 EV kit has 100 Ω differential  resistors placed across all outputs. These resistors must be removed before connecting the outputs to a 50 Ω oscilloscope. For best performance, keep all outputs terminated, either to a 50 Ω measurement device or to the 100 Ω differential resistor.

## Control Lines

Jumpers JU1-JU6 are provided to set the operating mode of the MAX3783. Shorting these jumpers pulls the corresponding TTL control line to a logical zero. All TTL control lines are internally pulled high through 15k Ω resistors. See Table 1 to set operating modes.

## Exposed Pad (EP) Package

The exposed pad 48-pin TQFP-EP provides a very low thermal-resistance path for heat removal from the IC. The pad is also electrical ground on the MAX3783 and must be soldered to the circuit board for proper thermal and electrical performance.

## Table 1. Operating Modes

|   SEL_ | SO_   |
|--------|-------|
|      0 | LI2_  |
|      1 | LI1_  |

|   LB_ | LO_   |
|-------|-------|
|     0 | LI_   |
|     1 | SI_   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3783 Evaluation Kit

Figure 1. MAX3783 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3783 Evaluation Kit

Figure 2. MAX3783 EV Kit Component Placement Guide-Component Side

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3. MAX3783 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX3783 EV Kit PC Board Layout-Power Plane

<!-- image -->

## MAX3783 Evaluation Kit

Figure 4. MAX3783 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 6. MAX3783 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5