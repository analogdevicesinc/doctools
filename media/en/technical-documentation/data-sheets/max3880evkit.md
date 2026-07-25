<!-- lastmod 2022-08-02 -->
## General Description

The MAX3880 evaluation kit (EV kit) simplifies evaluation  of  the  MAX3880 2.488Gbps, SDH/SONET 1:16 deserializer with clock recovery. The EV kit requires only a single +3.3V supply and includes all the external components necessary to interface with 3.3V CML inputs and LVDS output logic. The board can be connected to the output of a limiting amplifier circuit (such as the MAX3866) and to the input of an LVDS device (such as an overhead termination circuit). A signal generator or stimulus system can be used with an oscilloscope to evaluate the MAX3880's basic functionality.

| DESIGNATION                                                                                                                                                                 |   QTY | DESCRIPTION                                              |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|----------------------------------------------------------|
| C1, C2, C3, C6, C8, C15, C16, C17                                                                                                                                           |     8 | 0.1µF, 25V min, 10% ceramic capaci- tors (0603)          |
| C4, C5, C7, C12, C13, C14, C19, C20, C21                                                                                                                                    |     9 | 100pF, 25V min, 10% ceramic capaci- tors (0603)          |
| C9                                                                                                                                                                          |     1 | 33µF ±10%, 10V min tantalum caps Sprague 293D336X0010C2  |
| C10                                                                                                                                                                         |     1 | 2.2µF ±10%, 10V min tantalum caps Sprague 293D225X0010A2 |
| C11                                                                                                                                                                         |     1 | Not installed                                            |
| C22                                                                                                                                                                         |     1 | 1µF, 25V min, 10% ceramic capacitor (0805)               |
| D1                                                                                                                                                                          |     1 | PC mount LED                                             |
| J1-J4                                                                                                                                                                       |     4 | SMA connectors (PC mount)                                |
| J5-J40                                                                                                                                                                      |    36 | SMB connectors (PC mount)                                |
| L1, L2, L3                                                                                                                                                                  |     3 | 56nH inductors Coilcraft 0805CS-560XKBC                  |
| R1                                                                                                                                                                          |     1 | 2k Ω variable resistor                                   |
| R2, R3                                                                                                                                                                      |     2 | 1k Ω , 1% resistors (0603)                               |
| R4                                                                                                                                                                          |     1 | 392 Ω , 1% resistor (0603)                               |
| R5, R6, R11, R13, R14, R16, R17, R19, R20, R22, R23, R25, R26, R28, R29, R31, R32, R34, R35, R37, R38, R40, R41, R43, R44, R46, R47, R49, R50, R51, R52, R54, R55, R57, R58 |    35 | Not installed                                            |

- ♦ Single +3.3V Supply
- ♦ Test Point for Monitoring Loss-of-Lock (LOL)
- ♦ Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3880EVKIT | -40°C to +85°C | 64 TQFP-EP   |

## Component List

| DESIGNATION                                                                        |   QTY | DESCRIPTION                                   |
|------------------------------------------------------------------------------------|-------|-----------------------------------------------|
| R7, R12, R15, R18, R21, R24, R27, R30, R33, R36, R39, R42, R45, R48, R53, R56, R59 |    17 | 100 Ω , 1% resistors                          |
| U1                                                                                 |     1 | MAX3880ECB (64-pin TQFP-EP)                   |
| GND, +3.3V                                                                         |     2 | Test points                                   |
| JH1, JH2                                                                           |     2 | Not installed                                 |
| JU1-JU5                                                                            |     5 | Not installed                                 |
| JU6, JU7                                                                           |     2 | Shunts                                        |
| JU6                                                                                |     1 | 3-pin header (0.1" centers)                   |
| JU7                                                                                |     1 | 2-pin headers (0.1" centers)                  |
| None                                                                               |     1 | MAX3880 evaluation kit circuit board (Rev. B) |
| None                                                                               |     1 | MAX3880 data sheet                            |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Sprague    | 603-224-1961 | 603-224-1430 |

Note: Please indicate that you are using the MAX3880 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

1

## MAX3880 Evaluation Kit

## Detailed Description

The MAX3880 EV kit simplifies evaluation of the MAX3880 1:16 deserializer with clock recovery. The EV kit operates from a single +3.3V supply and includes all the external components necessary to interface with 3.3V CML inputs and LVDS outputs.

## Connections

Input terminals for the differential 2.488Gbps serialdata input (SDI+, SDI-, SLBI+, SLBI-) are AC-coupled to  on-board SMA connectors. Limiting amplifiers with differential output swings between 50mVp-p and 800mVp-p can be connected directly to the SMA connectors. All LVDS outputs (PCLK+, PCLK-, PD\_+, PD\_-) are differentially terminated with 100 Ω resistors between complementary outputs. Each output can directly drive a high-impedance input oscilloscope (see Connecting  to  50 Ω Oscilloscope  Inputs  in  the Applications Information section). When driving an LVDS input that already includes 100 Ω differential  termination, remove the termination resistor corresponding to the appropriate LVDS output.

The synchronization input (SYNC+, SYNC-) is an LVDS input internally  terminated with 100 Ω differential  input resistance. Ensure that LVDS devices driving this input are not redundantly terminated. All signal inputs and outputs use coupled 50 Ω transmission lines. All output signal lines are of equal length to minimize propagation-delay skew.

## Setup

- 1) Select either the serial-data inputs, pins 2 and 3 of JU6 (SDI EN), or the system loopback inputs, pins 1 and 2 of JU6 (SLBI EN) with a 2-pin jumper.
- 2) Verify that the shunt across jumper JU7 is in place.
- 3) Connect the +3.3V power supply to the appropriate terminals marked on the EV kit and apply power.
- 4) Connect a 2.5Gbps NRZ data signal (&lt;800mVp-p differential) to the selected inputs with 50 Ω cables.
- 5) Connect the LVDS outputs to a high-impedance oscilloscope or refer to the Applications Information section.

## Phase Adjustment

Internal phase adjustment is available on the MAX3880 EV kit.  Phase  adjust  (PHADJ)  R1,  although  not required, can be used to shift the sampling edge of the recovered clock relative to the center of the data eye. Ensure JU7 is removed when adjusting PHADJ.

## Loss-of-Lock Monitor

Phase-locked loop (PLL) frequency lock conditions can be monitored at the high-impedance loss-of-lock (LOL) test point. A TTL high (LED off) indicates PLL frequency lock, while a TTL low (LED on) indicates a loss-of-lock condition. Note that the LOL circuitry will not detect a loss-of-power condition (refer to the MAX3880 data sheet).

## Layout Considerations

The MAX3880's performance can be greatly affected by circuit-board layout and design. Use good high-frequency design techniques, including minimizing ground inductances and using fixed-impedance transmission lines on the data and clock signals.

## Table 1. Jumpers and Test Points

| NAME   | TYPE       | DESCRIPTION                                                                                | NORMAL POSITION      |
|--------|------------|--------------------------------------------------------------------------------------------|----------------------|
| JU6    | 3-pin      | Selects between the ser- ial-data input and the system loopback func- tion of the MAX3880. | Shorted between 2, 3 |
| JU7    | 2-pin      | Disables PHADJ (R1)                                                                        | Shorted (disabled)   |
| LOL    | Test Point | Monitors LOL voltage level                                                                 | -                    |

## Applications Information

## Connecting LVDS Outputs to 50 Ω Oscilloscope Inputs

To monitor an LVDS signal on a 50 Ω input oscilloscope, remove the differential load resistor between the complementary outputs and AC couple each output to an oscilloscope input. For example, to observe the PD0 signal on a 50 Ω input instrument, remove resistor R15 from the EV board and place a capacitor or DC block in series with each output (PD0+ or PD0-) and the instrument input. Do not connect MAX3880 outputs directly to 50 Ω inputs or terminations to ground. Choose a coupling capacitor large enough in value to prevent pattern-dependent distortion of the output signal.

## Exposed Pad (EP) Package

The exposed pad 64-pin TQFP incorporates features that provide a very low thermal resistance path for heat removal from the integrated circuit-either to a printed circuit board or to an external heatsink. The MAX3880's exposed pad must be soldered directly to a ground plane with good thermal conductance.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3880 Evaluation Kit

Figure 1. MAX3880 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3880 Evaluation Kit

Figure 1. MAX3880 EV Kit Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3880 Evaluation Kit

<!-- image -->

Figure 1. MAX3880 EV Kit Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3880 Evaluation Kit

Figure 2. MAX3880 EV Kit Component Placement Guide-Component Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3880 Evaluation Kit

<!-- image -->

Figure 3. MAX3880 EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3880 Evaluation Kit

Figure 4. MAX3880 EV Kit PC Board Layout-Component Side

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3880 Evaluation Kit

<!-- image -->

Figure 5. MAX3880 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3880 Evaluation Kit

Figure 6. MAX3880 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3880 Evaluation Kit

Figure 7. MAX3880 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.