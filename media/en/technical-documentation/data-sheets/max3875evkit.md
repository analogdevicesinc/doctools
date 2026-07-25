<!-- lastmod 2022-08-02 -->
## General Description

The MAX3875 evaluation kit (EV kit) simplifies evaluation  of  the  MAX3875, a 2.5Gbps clock-recovery and data-retiming IC. The EV kit enables testing of all MAX3875 functions. SMA connectors are provided for the differential  PECL-compatible data and clock outputs, as well as system loopback functions.

The differential data and clock outputs have 50 Ω attenuators on-board to allow direct connection to a highspeed oscilloscope.

The MAX3875 EV kit comes configured for +3.3V operation and consumes approximately 220mA.

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' SMA Connections for All System I/Os
- ' Test Point for Monitoring Loss-of-Lock (LOL)
- ' Single +3.3V Power-Supply Operation
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3875EVKIT | -40°C to +85°C | 5mm 32 TQFP  |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION                                          |   QTY | DESCRIPTION                              |
|------------------------------------------------------|-------|------------------------------------------|
| C1, C2, C3, C5-C10, C13, C14, C15, C21-C26, C29, C30 |    20 | 0.1µF, 25V min ceramic capaci- tors      |
| C11                                                  |     1 | Open                                     |
| C12                                                  |     1 | 1µF, 10V min X7R ceramic capacitor       |
| C19                                                  |     1 | 33µF, ±20%, 10V min tantalum capacitor   |
| C20                                                  |     1 | 2.2µF, 25V min ceramic capaci- tor       |
| U1                                                   |     1 | MAX3875EHJ (5mm 32-pin TQFP)             |
| L1, L2, L3                                           |     3 | 56nH inductors Coilcraft* 0805HS-560TKBC |
| R1                                                   |     1 | 392 Ω , 1% resistor                      |
| R7, R11, R15, R19                                    |     4 | 24 Ω , 5% resistors                      |
| R8, R12, R16, R20                                    |     4 | 27 Ω , 5% resistors                      |

| DESIGNATION                                          |   QTY | DESCRIPTION                 |
|------------------------------------------------------|-------|-----------------------------|
| R9, R13, R17, R21                                    |     4 | 130 Ω , 1% resistors        |
| R10, R14, R18, R22                                   |     4 | 220 Ω , 5% resistors        |
| R25, R28                                             |     1 | 10k Ω , 5% resistors        |
| R26                                                  |     1 | 10k Ω variable resistor     |
| LOL , GND, +3.3V                                     |     3 | Test points                 |
| JP2                                                  |     1 | 2-pin header (0.1" centers) |
| JP10                                                 |     1 | 3-pin header (0.1" centers) |
| JP2, JP10                                            |     2 | Shunts                      |
| SDI+, SDI-, SLBI+, SLBI-, SCLKO+, SCLKO-, SDO+, SDO- |     8 | Edge-mount SMA connectors   |
| D1                                                   |     1 | Red LED                     |
| None                                                 |     1 | MAX3875 evaluation kit      |
| None                                                 |     1 | MAX3875 data sheet          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

## MAX3875 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX3875 EV kit is fully assembled and factory tested. It enables testing of all MAX3875 functions.

## Test Equipment Required

- +3.3V power supply with 300mA current capability
- Signal-source, 2.5Gbps minimum capability
- Jitter analyzer capable of 2.5Gbps performance
- Oscilloscope with at least 3GHz performance

## Connections

The serial data inputs (SDI+, SDI-) have on-board ACcoupling capacitors. All of the MAX3875 data and clock outputs (SDO+, SDO-, SCLKO+, SCLKO-) are terminated on-board with 50 Ω ,  PECL, 2X attenuators. Configured in this way, these outputs can be directly connected to the 50 Ω inputs of a high-speed oscilloscope for analysis.

## Setup

- 1) Select either the serial data inputs, pins 2 and 3 of JP10 (SDI EN), or the system loopback inputs, pins 1 and 2 of JP10 (SLBI EN), with jumper JP10.
- 2) Verify that the shunt across jumper JP2 is in place.
- 3) Connect the +3.3V power supply to the appropriate terminals marked on the EV kit and apply power.
- 4) Connect a 2.5Gbps PRBS NRZ signal to the selected inputs with 50 Ω cables.
- 5) Connect the outputs to a 50 Ω high-speed oscilloscope.

Jitter  analysis  and  product  performance can also be observed by appropriately interfacing the EV kit with a bit-error-rate tester (BERT) and a jitter analyzer.

## Interfacing with ECL Test Equipment

Not all jitter analyzers and bit-error-rate testers can easily interface with the EV kit's PECL output signal levels. If  your  test  equipment  requires  standard ECL levels, then bias tees are required (Figure 1). For example, if using an HP BERT, you must :

- 1) Remove the data and clock output attenuators for those signal lines you intend to observe. For example,  if  you  intend  to  observe  SDO+,  then  open  R9 and R10, and short R7 and R8.
- 2) Use a 50 Ω bias tee to bias the MAX3875's outputs.

One adjustment is available on the MAX3875 EV kit. PHADJ R26, although not required, can be used to shift the sampling edge of the recovered clock relative to the center of the data eye. (Be sure to remove jumper JP2 if you intend to adjust PHADJ.) PLL frequency lock condi- tions can be monitored at the high-impedance LOL test point. A TTL high (LED off) indicates PLL frequency lock while a TTL low (LED on) indicates a loss-of-lock condition. Note that the LOL circuitry will not detect a loss-ofpower condition (refer to the MAX3875 data sheet).

## Layout Considerations

The MAX3875's performance can be greatly affected by circuit board layout and design. Use good high-frequency design techniques, including minimizing ground inductances and using fixed-impedance transmission lines on the data and clock signals.

Figure 1. ECL Interface to Test Equipment

<!-- image -->

## Table 1. Jumpers and Test Points

| NAME   | TYPE       | DESCRIPTION                                                                                                                      | NORMAL POSITION    |
|--------|------------|----------------------------------------------------------------------------------------------------------------------------------|--------------------|
| JP2    | 2-Pin      | Disables the Phase Adjustment (R26)                                                                                              | Shorted (disabled) |
| JP10   | 3-Pin      | Used to select between the serial data input (labeled SDI EN) and the system loopback function (labeled SLBI EN) of the MAX3875. | -                  |
| LOL    | Test Point | Used to monitor LOL voltage level                                                                                                | -                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  MAX3875 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX3875 Evaluation Kit

<!-- image -->

Figure 3.  MAX3875 EV Kit Component Placement Guide

Figure 4.  MAX3875 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5.  MAX3875 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 6.  MAX3875 EV Kit PC Board Layout-Ground Plane

<!-- image -->

## MAX3875 Evaluation Kit

Figure 7.  MAX3875 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3875 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600