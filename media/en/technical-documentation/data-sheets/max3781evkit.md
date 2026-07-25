<!-- lastmod 2022-08-02 -->
## General Description

The MAX3781 evaluation kit (EV kit) is an assembled demonstration board that provides easy evaluation of the MAX3781 multiplexer/buffer. The MAX3781 EV kit provides 100 Ω differential output terminations onboard, simplifying termination of unused outputs.

## Component List

| DESIGNATION         |   QTY | DESCRIPTION                                        |
|---------------------|-------|----------------------------------------------------|
| C1 - C24, C27 - C30 |    28 | 0.1µF ± 10%, 25V min ceramic capacitors (0603)     |
| C25                 |     1 | 33µF tantalum capacitor (C)                        |
| C26                 |     1 | 2.2µF ± 10%, 25V min tantalum capacitor (B)        |
| R1, R2, R3          |     3 | 1k Ω ± 1% resistors (0603)                         |
| R4 - R9             |     6 | 100 Ω ± 1% resistors (0603)                        |
| L1                  |     1 | 4.7nH inductor TOKOLL1608-FH4N7K                   |
| U1                  |     1 | MAX3781UCM 48-pin TQFP-EP                          |
| J1-J24              |    24 | SMA connectors (PC mount) EFJohnson 142-0701-301   |
| JU1, JU2, JU3       |     3 | 2-pin headers (0.1in centers) Digi-Key S1012-36-ND |
| JU1, JU2, JU3       |     3 | Shunts Digi-Key S9000-ND                           |
| VCC, GND            |     2 | Test points Digi-Key 5000-ND                       |
| None                |     1 | MAX3781EV kit circuit board, rev A                 |
| None                |     1 | MAX3781 data sheet                                 |

<!-- image -->

Features

- ♦ Fully Assembled and Tested
- ♦ +3.3V Operation
- ♦ On-Board Output Termination
- ♦ Easy Selection of Operating Modes

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX3781EVKIT | 0°C to +85°C | 48 TQFP-EP*  |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |
| TOKO       | 800-745-8656 | 847-699-7864 |

Note: Please indicate that you are using the MAX3781 when contacting these component suppliers.

## Quick Start

- 1) Apply +3.3V to the VCC pin. Connect power-supply ground to the GND pin.
- 2)  Shunt jumpers JU1 (SELA), JU2 (PD), and JU3 (SELB). Refer to Table 1 in the MAX3781 data sheet for other configurations.
- 3) Apply up to 2.75Gbps differential data to LI2A± (J17 and J18).
- 4) Remove R9 (differential termination resistor) from the evaluation board.
- 5) Connect SOA± (J23 and J24) to a high-speed 50 Ω oscilloscope.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX3781 Evaluation Kit

## Detailed Description

## Connecting CML Outputs to 50 Ω Oscilloscopes

CML outputs have a common-mode voltage near VCC. To avoid changing this optimum common-mode voltage, all CML outputs are AC-coupled on-board with 0.1µF capacitors. The CML outputs should not be connected directly through 50 Ω to ground.

## Terminating Unused Outputs

The MAX3781 EV kit has 100 Ω differential  resistors placed across all outputs. These resistors must be removed before connecting the outputs to a 50 Ω oscilloscope. For best performance, keep all outputs terminated, either to a 50 Ω measurement device or to the 100 Ω differential resistor.

## Control Lines

Jumpers JU1, JU2, and JU3 are provided to set the operating mode of the MAX3781. Shorting these jumpers pulls the corresponding TTL control line to a logical  zero.  All  TTL  control  lines  are  internally  pulled high through 15k Ω resistors. See Table 1 for more information regarding setting operating modes.

## Exposed-Pad Package

The exposed paddle (EP) 48-pin TQFP has features that provide a very low thermal resistance path for heat removal from the IC. The paddle is electrical ground on the MAX3781 and should be soldered to the circuit board for proper thermal and electrical performance.

## Table 1. Operating Modes

|   SEL_ |   PD | LO1_   | LO2_   | SO_   |
|--------|------|--------|--------|-------|
|      0 |    0 | SI_    | SI_    | LI2_  |
|      0 |    1 | -      | SI_    | LI2_  |
|      1 |    0 | SI_    | SI_    | LI1_  |
|      1 |    1 | SI_    | -      | LI1_  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3781 Evaluation Kit

<!-- image -->

Figure 1. MAX3781 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3781 Evaluation Kit

Figure 2. MAX3781 EV Kit Component Placement Guide-Component Side

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3. MAX3781 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX3781 EV Kit PC Board Layout-Power Plane

<!-- image -->

## MAX3781 Evaluation Kit

Figure 4. MAX3781 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 6. MAX3781 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5