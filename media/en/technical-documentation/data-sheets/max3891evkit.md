<!-- lastmod 2022-08-02 -->
## General Description

The MAX3891 evaluation kit (EV kit) is an assembled surface-mount demonstration board that provides easy evaluation of the MAX3891 2.5Gbps, 16:1 serializer with clock synthesis and single-ended, low-voltage PECL inputs.

The MAX3891 EV kit is optimized for +3.3V operation. Total current consumption at 3.3V is 570mA. The EV kit provides PECL terminations and controlled 50 Ω impedances on all input and output data lines.

| DESIGNATION                     |   QTY | DESCRIPTION                                                   |
|---------------------------------|-------|---------------------------------------------------------------|
| C1-C6, C8-C11, C13-C32, C34-C37 |    34 | 0.1µF ± 10%, 10V min ceramic capacitors (0603)                |
| C7                              |     1 | 0.33µF ± 10%, 25V min ceramic capacitor (0603)                |
| C12                             |     1 | 33µF ± 10%, 10V min tantalum capacitor Sprague 293D336X0010C2 |
| J1-J6                           |     6 | SMA connectors (side mount)                                   |
| J7-J24, J27, J28                |    20 | SMB connectors (PC mount)                                     |
| J25, J26                        |     2 | SMA connectors (PC mount)                                     |
| JU1, JU3-JU9                    |     8 | 2-pin headers (0.1in centers)                                 |
| L1-L5                           |     5 | 56nH inductors Coilcraft 0805CS-560XKBC                       |
| R1, R2                          |     2 | 49.9 Ω ± 1% resistors (0402)                                  |
| R3                              |     1 | 10k Ω ± 1% resistor (0402)                                    |
| R4, R8, R12, R16, R28, R29      |     6 | 27.4 Ω ± 1% resistors (0402)                                  |
| R5, R9, R13, R17, R24, R25      |     6 | 24.3 Ω ± 1% resistors (0402)                                  |
| R6, R10, R14, R18, R89, R93     |     6 | 221 Ω ±1% resistors (0402)                                    |

<!-- image -->

## Features

- ♦ +3.3V Single Supply
- ♦ Selectable Reference Clock Frequencies (155.52MHz, 51.84MHz, 77.76MHz, 38.88MHz)
- ♦ Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP. RANGE        | IC PACKAGE   |
|--------------|--------------------|--------------|
| MAX3891EVKIT | -40 ° C to +85 ° C | 64 TQFP-EP*  |

## Component List

| DESIGNATION                                                                                                                     |   QTY | DESCRIPTION                  |
|---------------------------------------------------------------------------------------------------------------------------------|-------|------------------------------|
| R7, R11, R15, R19, R20, R26, R30, R32, R33, R34, R36, R38, R42, R46, R50, R54, R58, R62, R66, R70, R74, R78, R81, R85, R91, R95 |    26 | 130 Ω ± 1% resistors (0402)  |
| R21, R27, R31, R35, R37, R39, R40, R41, R43, R47, R51, R55, R59, R63, R67, R71, R75, R79, R83, R87                              |    20 | 82.5 Ω ± 1% resistors (0402) |
| R22, R23                                                                                                                        |     2 | 20k Ω ± 1% resistors (0402)  |
| U1                                                                                                                              |     1 | MAX3891ECB (64-pin TQFP-EP)  |
| VCC, GND                                                                                                                        |     2 | Test points                  |
| None                                                                                                                            |     8 | Shunts                       |
| None                                                                                                                            |     1 | MAX3891 EV kit circuit board |
| None                                                                                                                            |     1 | MAX3891 data sheet           |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Sprague    | 207-324-4140 | 603-224-1430 |

Note: Please indicate you are using the MAX3891 when contacting the suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX3891 Evaluation Kit

## Detailed Description

The MAX3891 EV kit contains all components needed to simplify the evaluation of the MAX3891 16:1 serializer. The completely assembled and factory-tested EV kit operates from a single +3.3V supply and includes all external components necessary to interface with standard 50 Ω test  equipment. On-board termination and AC coupling is provided for the MAX3891's singleended LV PECL parallel data inputs. The differential LV PECL serial data outputs are also terminated on-board with resistive networks optimized for forward and reverse 50 Ω termination. The evaluation kit also provides AC coupling and 50 Ω terminations for the CML system loopback outputs. Control functions and operating parameters are programmed with jumpers. The reference clock rate is programmed with JU3-JU5, the PLL loop filter capacitor can be shorted by shorting JU6, and the system loopback outputs can be selected for diagnostic testing by setting JU1 appropriately.

## Layout Considerations

All  differential  signal  outputs  are  of  equal  length  and use coupled 50 Ω transmission lines so that propagation delay skew is minimized. The on-board impedance matching resistive networks provided for the PECL outputs allow easy interface of the EV kit to standard test equipment with 50 Ω terminations to ground. These minimum loss pads are optimized for both forward and reverse 50 Ω impedance and attenuate the MAX3891's output signal by 0.46V/V (6dB). SMA connectors are provided for all high-speed differential outputs (SDI±, SLBI±, and SCLKO±) and for the differential reference clock input (RCLK±). SMB connectors are provided for the single-ended input data signals (PDI\_) parallel input clock (PCLKI±) and parallel output clock (PCLKO±)

Supply power is routed to the MAX3891 through five separate, independently filtered voltage supplies: VCCDIG, VCCO, VCCPLL, VCCVCO, and VCCPECL.

## Table 1. Jumpers, Test Points, and Connections

| NAME          | TYPE           | DESCRIPTION                                   | NORMAL POSITION   |
|---------------|----------------|-----------------------------------------------|-------------------|
| JU1           | Two-pin header | Used to enable/disable the SLBO outputs.      | Shorted           |
| JU3, JU4, JU5 | Two-pin header | Used to program the reference clock frequency | See Table 2       |
| JU6           | Two-pin header | Used to short the filter (FIL ± ) pins        | Open              |

Care must be taken when designing power-supply filtering  as  the  VCCVCO supply is most susceptible to power-supply noise. Noise on the VCO supply causes the VCO to generate phase noise, which could degrade the  MAX3891's jitter performance. Inductive filtering is recommended for the VCO supply. Noise on the VCCO supply is effectively rejected; however, because of the external PECL biasing, significant noise is coupled back onto the VCCO supply pin. Ideally, this supply should be isolated from all the others. At the least, isolate  the  VCCO supply from the VCCVCO supply. The single-ended PECL inputs could be affected by noise on the VCCPECL supply. Since PECL signal swings are much larger than the expected supply noise, the PECL inputs require relatively simple filtering. Decoupling capacitors placed close to the IC should be adequate in  most cases. The VCCPLL and VCCDIG supplies power the rest of the IC. These supplies have moderate supply noise rejection and contribute moderately to total supply-induced noise. In most cases, VCCPLL and VCCDIG can also be decoupled with capacitors placed close to the IC.

## Jumpers and Test Points

The MAX3891 EV kit provides jumpers to allow easy configuration of the MAX3891's mode of operation. Table 1 gives a brief description of the MAX3891's jumper functions. The SOS jumper, JU1, configures the data output path. For normal operation, short pins 1 and 2 of JU1 to disable the SLBO outputs. For system loopback diagnostic testing, remove the shunt from JU1 to enable the system loopback outputs.

The MAX3891 has the ability to use multiple reference clock frequencies. Use the CLKSET jumpers JU2, JU3, and JU4 to program the MAX3891's reference clock i nput  for  38.88MHz,  51.84MHz,  77.76MHz,  or 155.52MHz (Table 2). For example, remove the shunts from JU3 and JU5 and short pins 1 and 2 of JU4 for operation using a 51.84MHz reference clock.

Table 2. CLKSET Jumper Functions

|   f RCLK (MHz) | JU3              | JU4                       | JU5                 |
|----------------|------------------|---------------------------|---------------------|
|         155.52 | Shorted (to VCC) | Open                      | Open                |
|          77.76 | Open             | Open                      | Open                |
|          51.84 | Open             | Shorted (20k Ω to ground) | Open                |
|          38.88 | Open             | Open                      | Shorted (to ground) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Quick Start

The MAX3891 allows the use of multiple reference clock frequencies. Be sure to set the clockset jumpers appropriately for your reference clock frequency. The following procedure sets up the EV kit for a 155.52MHz reference clock.

- 1) Verify that the shunts are in place on 2-pin headers JU1 and JU3. JU1 will disable the SLBO outputs and JU3 will select the input reference clock frequency of 155.52MHz.
- 2) Verify that the shunts are removed from 2-pin headers JU4, JU5, and JU6.
- 3) Connect the differential output of your reference clock through 50 Ω cables to the differential RCLK± inputs.
- 4) Connect your single-ended signal source outputs through 50 Ω cables to the parallel data (PDI\_) inputs. If 16 separate 155.52MHz signal generators are not available, tie the unused parallel data inputs to either a PECL high or PECL low. To tie an input to a PECL high, remove the 130 Ω PECL biasing resistor. To tie an input to a PECL low, reverse positions of the PECL input biasing resistors.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3891 Evaluation Kit

- 5) Connect the differential parallel input clock through 50 Ω cables to the PCLKI± inputs.
- 6) Connect the serial data and clock outputs through 50 Ω cables to a 50 Ω oscilloscope (minimum 3GHz bandwidth) or test equipment.
- 7) Power up the EV kit with a 3.3V supply and check the signal at the output.

## Exposed Pad Package

The exposed pad (EP) 64-pin TQFP incorporates features that provide a very low thermal-resistance path for heat removal from the IC-either to a PC board or to an external heat sink. The MAX3891's EP must be soldered directly to a ground plane with good thermal conductance.

## MAX3891 Evaluation Kit

Figure1. MAX3891 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure1. MAX3891 EV Kit Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3891 Evaluation Kit

Figure 2. MAX3891 EV Kit Component Placement Guide

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3891 Evaluation Kit

<!-- image -->

Figure 3. MAX3891 EV Kit PC Board Layout -Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3891 Evaluation Kit

Figure 4. MAX3891 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3891 Evaluation Kit

Figure 5. MAX3891 EV Kit PC Board Layout-Power Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9