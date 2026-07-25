<!-- lastmod 2022-08-02 -->
## General Description

The MAX3640 evaluation kit (EV kit) is an assembled surface-mount demonstration board that provides easy evaluation of the MAX3640 622Mbps low-voltage differential signal (LVDS), dual 4:2 asynchronous crosspoint switch. The board includes an extra transmission line for characterization purposes.

The MAX3640 EV kit operates from a single +3.3V power supply and includes all external components necessary to interface with the LVDS inputs and outputs.

The LVDS inputs (DIA1-DIA4 and DIB1-DIB4) are internally terminated with 100 Ω differential  input  resistance and therefore require no external termination. Ensure that  LVDS devices driving these inputs are not redundantly terminated. The LVDS outputs (DOA1-DOA4 and DOB1-DOB4) require a differential termination of 100 Ω between the complementary outputs.

## Connecting LVDS Outputs to 50 Ω Oscilloscope Inputs

To monitor LVDS signals with 50 Ω oscilloscope inputs, leave the coupling capacitors in series with the outputs and remove the differential load resistors (see R1-R8 in the Component List ). If you are observing only one output with a 50 Ω probe, balance the other output with a 50 Ω terminator to ground.

## Connecting LVDS Outputs to HighImpedance Oscilloscope Inputs

To monitor LVDS signals with high-impedance oscilloscope inputs, be sure the 100 Ω differential load resistors  between the differential outputs are installed (see R1-R8 in the Component List) .

## Layout Consideration

All  relative  input  and  output  data  lines  have  equal lengths to minimize channel-to-channel skew. The transmission lines all have 100 Ω differential characteristic impedance between the complementary signal lines.

## Jumpers

Jumpers JU1-JU4 allow the SEL1-SEL4 pins to be attached to VCC or GND. These pins set up the allocation  of  the  input  channels to the output channels. Jumpers JU6, JU7, and JU8 allow IN\_SEL, ENA, and ENB to be attached to VCC or GND. Refer to Table 1 in the MAX3640 data sheet for more information on these pins.

- ♦ +3.3V Single Supply
- ♦ Includes Transmission Line for Characterization
- ♦ Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP. RANGE      | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX3640EVKIT | 0 ° C to +85 ° C | 48 TQFP      |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |
| Digi-Key   | 218-681-6674 | 218-681-3380 |
| Murata     | 814-237-1431 | 814-238-0490 |

Note: Please indicate that you are using the MAX3640 when contacting these component suppliers.

## Component List

| DESIGNATION              | QTY   | DESCRIPTION                                         |
|--------------------------|-------|-----------------------------------------------------|
| C1 - C20                 | 20    | 0.01 µ F ± 10%, 16V min X7R type ceramic capacitors |
| C21, C22                 | 2     | 10 µ F ± 10%, 16V min tantalum capacitors           |
| J1-J4, J9-J24            | -     | Not installed                                       |
| J5 - J8, J25 - J32       | 12    | SMA connectors, PC mount Digi-Key J500-ND           |
| J33, J34                 | 2     | Test points Digi-Key 5000K-ND                       |
| JU1 - JU4, JU6, JU7, JU8 | 7     | 1 × 3 headers (0.1in centers) Digi-Key S1012-36-ND  |
| R1 - R8                  | 8     | 100 Ω ± 1% resistors (0603)                         |
| R9 - R15                 | 7     | 1k Ω± 5% resistors (0603)                           |
| U1                       | 1     | MAX3640UCM (48-pin TQFP)                            |
| None                     | 1     | MAX3640 data sheet                                  |
| None                     | 1     | MAX3640 EV kit data sheet                           |
| None                     | 1     | MAX3640 PC board (Rev B)                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For free samples and the latest literature, visit www.maxim-ic.com or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

<!-- image -->

## Features

## MAX3640 Evaluation Kit

Figure 1. MAX3640 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3640 Evaluation Kit

<!-- image -->

Figure 2. MAX3640 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3640 Evaluation Kit

Figure 3. MAX3640 EV Kit PC Board Layout-Component Side

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3640 Evaluation Kit

<!-- image -->

Figure 4. MAX3640 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3640 Evaluation Kit

Figure 5. MAX3640 EV Kit PC Board Layout-Power Plane

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3640 Evaluation Kit

<!-- image -->

Figure 6. MAX3640 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3640 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 2000 Maxim Integrated Products