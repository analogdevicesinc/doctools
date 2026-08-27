<!-- lastmod 2022-08-03 -->
## General Description

The MAX3814 evaluation kit (EV kit) simplifies evaluation of the MAX3814 TMDS equalizer/driver. This EV kit allows for quick testing of the MAX3814 with either a DVI or HDMI environment. The MAX3814 EV kit is fully assembled and tested.

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX3814EVKIT | 0 ° C to +70 ° C | 32 TQFP      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                 |
|---------------|-------|-------------------------------------------------------------|
| C1-C6, C11    |     7 | 0.1µF chip capacitors (0603)                                |
| C7            |     1 | 0.47µF chip capacitor (0603)                                |
| C8            |     1 | 10µF chip capacitor (0603)                                  |
| C9            |     1 | 1000pF chip capacitor (0603)                                |
| C10           |     1 | 22µF capacitor (0805)                                       |
| C12           |     1 | 100µF capacitor (1210)                                      |
| J1, J2        |     2 | HDMI connectors Molex 500284-1927                           |
| J3            |     1 | Power jack, 2.1mm CUI PJ-002A                               |
| J4, J5        |     2 | Test points Digi-Key 5000K-ND                               |
| JU1, JU2, JU3 |     3 | Jumper block, 3 pins 0.1in spacing                          |
| L1            |     1 | 3.3µH inductor Coilcraft MSS5131-332MX                      |
| R1-R4, R7-R10 |     8 | 200 , ±1% chip resistors (0603)                             |
| R5, R11       |     2 | 0 , ±1% chip resistor (0603)                                |
| R6, R12       |     2 | (open)                                                      |
| R13           |     1 | 100 ± 1% chip resistor (0603)                               |
| R14           |     1 | 10k ± 1% chip resistor (0603)                               |
| U1, U4        |     2 | MAX3814CHJ+                                                 |
| U2, U3        |     2 | DVI connector Molex 74320-1000                              |
| U5            |     1 | MAX1556ETB                                                  |
| U6            |     1 | MAX6346XR46-T                                               |
| U7            |     1 | 5V wall plug switching power supply CUI DPS050200UPS-P5P-SZ |
| -             |     1 | MAX3814 DVI/HDMI+ Equalizer Rev A Evaluation Board          |

<!-- image -->

## MAX3814 Evaluation Kit

Features

- ♦ Fully Assembled and Tested
- ♦ Includes AC-Powered Battery Eliminator

## Quick Start

- 1) Connect the 'wall plug power supply (U7)' to the power jack J3. Jumper JU3 to connect the board supply to the wall plug supply (WWART).
- 2) For DVI use, connect the input cable/board to the DVI input and connect a DVI monitor or DVI receiver  to  the  MAX3814 EV kit output. Change jumper JU1 to enable DVI equalizer. Jumper JU2 can remain disabled. The default setting is LEVEL = 1 with 200 Ω back terminations.
- 3) For HDMI use, connect the cable or board to the HDMI input and connect a monitor or receiver to the HDMI output. Change jumper JU2 to enable the HDMI equalizer. The default setting is LEVEL = 1 with 200 Ω back terminations.

## Other Adjustments

- 1) To choose the lower power (LEVEL = 0) setting without the 200 Ω back termination resistors, remove resistors R1, R2, R3, R4, and R5 for DVI channel. Install a 0 Ω resistor for R6. For the HDMI channel, remove R7, R8, R9, R10, and R11. Install a 0 Ω resistor for R12.
- 2) To use a separate 3.3V supply, move the supply select jumper (JU2) to the 'EXT' position. Then connect the 3.3V supply VCC to J4 (3.3V) and ground to J5 (GND). See Figure 2.

## Scope Measurements

The DVI and HDMI connectors make it difficult to make electrical measurements with an oscilloscope that has SMA connectors. To make such measurements with the MAX3814 EV kit, adapter boards can be purchased from Tektronix. The part numbers are DVI-TPA-R-DI for the DVI socket and HDMI-TPA-P for the HDMI socket. You can also contact Maxim's Customer Applications Group for the MAX3814 to get adapter board layouts.

## Table 1. Adjustment and Control Descriptions (See Quick Start First)

| NAME   | FUNCTION                                                                   |
|--------|----------------------------------------------------------------------------|
| JU3    | Selects external power supply or wall plug switching power supply (WWART). |
| JU1    | Selects enable/disable for DVI channel.                                    |
| JU2    | Selects enable/disable for HDMI channel.                                   |

## MAX3814 Evaluation Kit

Figure 1. MAX3814 Customer Board Electrical Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3814 Evaluation Kit

<!-- image -->

Figure 2. MAX3814 Evaluation Kit Assembly

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3814 Evaluation Kit

Figure 3. MAX3814 Evaluation Kit Component Placement

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3814 Evaluation Kit

Figure 4. MAX3814 Evaluation Kit Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3814 Evaluation Kit

Figure 5. MAX3814 Evaluation Kit Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3814 Evaluation Kit

<!-- image -->

Figure 6. MAX3814 Evaluation Kit Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3814 Evaluation Kit

Figure 7. MAX3814 Evaluation Kit Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8