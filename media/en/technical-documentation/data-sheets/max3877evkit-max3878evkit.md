<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX3877/MAX3878 evaluation kits (EV kits) simplify evaluation of the MAX3877/MAX3878 2.5Gbps clock-recovery and data-retiming ICs. These EV kits enable testing of all MAX3877 and MAX3878 functions. SMA connectors are provided for the differential inputs and outputs.

The MAX3877 has CML outputs and the MAX3878 has PECL outputs. Both the MAX3877 and MAX3878 EV kits come complete with on-board output structures to allow direct connection to 50 Ω oscilloscopes and test equipment.

| DESIGNATION                        |   QTY | DESCRIPTION                                                                 |
|------------------------------------|-------|-----------------------------------------------------------------------------|
| C1-C10, C12-C16, C21-C26, C29, C30 |    23 | 0.1 µ F ± 10% ceramic capacitors (0603)                                     |
| C11                                |     1 | 1 µ F ± 10% ceramic capacitor (1206)                                        |
| C17, C18, C27, C28                 |     4 | 0.1 µ Fcapacitors (0603) (MAX3877EVKIT) 0 Ω resistors (0603) (MAX3878EVKIT) |
| C19                                |     1 | 33 µ F ± 20%, 10V min tantalum capacitor                                    |
| C20                                |     1 | 2.2 µ F ± 10% ceramic capacitor (1206)                                      |
| R1, R2                             |     2 | 392 Ω ± 1% resistors (0603)                                                 |
| R3, R5                             |     2 | 10k Ω variable resistors Digi-Key 3296W-103-ND                              |
| R4, R6                             |     2 | 3.6k Ω ± 5% resistors (0603)                                                |
| R7, R11, R15, R19                  |     4 | 0 Ω resistors (0402) (MAX3877EVKIT) 24 Ω resistors (0402) (MAX3878EVKIT)    |
| R8, R12, R16, R20                  |     4 | 0 Ω resistors (0402) (MAX3877EVKIT) 27 Ω resistors (0402) (MAX3878EVKIT)    |
| R9, R13, R17, R21                  |     4 | Open (MAX3877EVKIT) 130 Ω resistors (0402) (MAX3878EVKIT)                   |
| R10, R14, R18, R22                 |     4 | Open (MAX3877EVKIT) 220 Ω resistors (0402) (MAX3878EVKIT)                   |
| L1, L2, L3, L4                     |     4 | 56nH inductors Coilcraft 0805HS-560TKBC                                     |

## Component List

| DESIGNATION         |   QTY | DESCRIPTION                                                          |
|---------------------|-------|----------------------------------------------------------------------|
| U1                  |     1 | MAX3877EHJ (5mm 32-pin TQFP-EP) (MAX3878EVKIT)                       |
| U1                  |     1 | MAX3878EHJ (5mm 32-pin TQFP-EP) (MAX3878EVKIT)                       |
| D1                  |     1 | Red LED                                                              |
| D2                  |     1 | Green LED                                                            |
| TP1,TP2             |     2 | Test points                                                          |
| JP1, JP4            |     2 | 2-pin headers (0.1in centers)                                        |
| JP2, JP5, JP6, JP10 |     4 | 3-pin headers (0.1in centers)                                        |
| JP2, JP5, JP6, JP10 |     4 | Shunts                                                               |
| JP7                 |     1 | Not installed                                                        |
| J1-J8               |     8 | SMA connectors (edge-mount) Johnson 142-0701-801 or Digi-Key J502-ND |
| J9, J10             |     2 | V CC , GND                                                           |
| None                |     1 | MAX3877/MAX3878 EV kit circuit board, Rev C                          |
| None                |     1 | MAX3877/MAX3878 data sheet                                           |
| None                |     1 | MAX3877/MAX3878 EV kit data sheet                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## Features

- ♦ SMA Connections for All High-Speed I/Os
- ♦ Test Points for Monitoring LOL and LOS
- ♦ Single +3.3V Power-Supply Operation
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP. RANGE    | IC PACKAGE   |
|---------------|----------------|--------------|
| MAX3877 EVKIT | -40°C to +85°C | 32 TQFP-EP*  |
| MAX3878 EVKIT | -40°C to +85°C | 32 TQFP-EP*  |

## MAX3877/MAX3878 Evaluation Kits

## Detailed Description

These EV kits are fully assembled and factory tested. They enable testing of all chip functions.

## Test Equipment Required

- +3.3V power supply with 300mA current capability
- Signal source, 2.5Gbps minimum capability
- Jitter analyzer capable of 2.5Gbps performance
- Oscilloscope with at least 3GHz performance

## Connections

The serial data inputs (SDI±, SLBI±) have on-board AC-coupling capacitors. All of the outputs (SDO±, SCLKO±) are terminated to allow direct connection to 50 Ω oscilloscopes or test equipment.

## Quick Start

- 1) Verify that there is a shunt across the SDI ENABLE side of jumper JP10.
- 2) Verify that there is a shunt across the REF DISABLE side of jumper JP6.
- 3) Verify that there is a shunt across the PHADJ DISABLE side of jumper JP2.
- 4) Verify that there is a shunt across the THADJ DISABLE side of jumper JP5.
- 5) Connect +3.3V and ground to the appropriate terminals of the EV kit.
- 6) Connect a 2.5Gbps PRBS NRZ signal to the SDI± inputs with 50 Ω cables.
- 7) Connect the outputs to a 50 Ω high-speed oscilloscope.

Table 1. Jumpers, Controls and Test Points

| NAME   | TYPE          | DESCRIPTION                                                    | NORMAL POSITION   |
|--------|---------------|----------------------------------------------------------------|-------------------|
| JP1    | 2-Pin Header  | Short to disable DC-offset/pulse-width distortion cancellation | Open (Enabled)    |
| JP2    | 3-Pin Header  | Disable/Enable phase adjust function                           | PHADJ DISABLE     |
| JP4    | 2-Pin Header  | Short to disable PLL filter                                    | Open (Enabled)    |
| JP5    | 3-Pin Header  | Disable/Enable threshold adjust function                       | VTH DISABLE       |
| JP6    | 3-Pin Header  | Select between SDI and SLBI. Refer to data sheet.              | REF DISABLE       |
| JP10   | 3-Pin Header  | Select between SDI and SLBI. Refer to data sheet.              | SDI ENABLE        |
| TP1    | Test Point    | LOL test point                                                 |                  |
| TP2    | Test Point    | LOS test point                                                 |                  |
| R3     | Potentiometer | Used to adjust PHADJ control voltage                           |                  |
| R5     | Potentiometer | Used to adjust THADJ control voltage                           |                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Jitter  analysis  and  product  performance can also be observed by appropriately interfacing the EV kit with a bit-error-rate tester (BERT) and a jitter analyzer.

## MAX3877 EV Kit Output Terminations

The MAX3877 EV kit has on-board AC-coupling capacitors  to  allow  direct  connection  of  the  EV  kit  outputs  to 50 Ω equipment.

## MAX3878 EV Kit Output Terminations

The MAX3878 EV kit has on-board termination networks on all high-speed outputs (SDO±, SCLKO±) to interface PECL outputs directly to 50 Ω oscilloscopes or test equipment. The on-board interfaces perform the level shifting and attenuation required to interface PECL outputs to 50 Ω loads. The attenuation from the network is about 6dB, or half of the voltage swing.

## MAX3877/MAX3878 Evaluation Kits

<!-- image -->

Figure 1. MAX3877 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3877/MAX3878 Evaluation Kits

Figure 2. MAX3878 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3877/MAX3878 Evaluation Kits

Figure 3. MAX3877/MAX3878 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3877/MAX3878 Evaluation Kits

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->