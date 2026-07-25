<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX3664 evaluation kit (EV kit) simplifies evaluation of the MAX3664 transimpedance preamplifier. The MAX3664 is optimized for hybrid applications that place the preamplifier die in the same package with a photodetector. The EV kit uses a packaged version of the MAX3664 to simplify product evaluation. It allows both optical and electrical testing.

The MAX3664's input voltage is determined by internal circuitry. When the input is connected to a photodiode, the MAX3664's input voltage determines the reverse diode voltage. Electrical signal sources connected to the  input  must  be  AC  coupled.  AC coupling the input removes the signal's DC component. Many of the MAX3664's specifications are affected by the average DC input current, which is normally present when the input signal is derived from a photodiode. A current mirror and simple bias-tee are used to create a signal similar to that of a photodiode.

The MAX3664 EV kit has several mounting holes for inserting common photodiodes, allowing optical testing.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ¤ Single +3.3V Supply
- ¤ Differential Output Drives 100 Ω Load
- ¤ 590MHz Bandwidth
- ¤ Electrical or Optical Input
- ¤ Provision for User-Supplied Photodiode
- ¤ Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE    | BOARD TYPE    |
|-----------------|----------------|---------------|
| MAX3664EVKIT-SO | -40°C to +85°C | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER              | PHONE          | FAX            |
|-----------------------|----------------|----------------|
| AVX                   | (803) 946-0690 | (803) 626-3123 |
| Central Semiconductor | (516) 435-1110 | (516) 435-1824 |
| Zetex                 | (516) 543-7100 | (516) 864-7630 |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                    |
|---------------|-------|------------------------------------------------|
| C1, C9        |     2 | 33µF, 25V tantalum capacitors AVX TAJE336K025R |
| C2, C3, C8    |     3 | 0.01µF, 25V ceramic capacitors                 |
| C4, C5, C6    |     3 | 0.1µF, 25V ceramic capacitors                  |
| C7            |     1 | 390pF, 25V ceramic capacitor                   |
| R1            |     1 | 49.9 Ω , 1% resistor                           |
| R2, R3, R6    |     3 | 200 Ω , 5% resistors                           |
| R4            |     1 | 2k Ω , 5% resistor                             |
| R5            |     1 | 2k Ω , 1% resistor                             |
| R7            |     1 | 10k Ω potentiometer                            |
| R8            |     1 | 1k Ω , 5% resistor                             |
| L1            |     1 | 47µH inductor Panasonic ELJ-FA470KF2           |

| DESIGNATION   |   QTY | DESCRIPTION                                               |
|---------------|-------|-----------------------------------------------------------|
| L2, L3        |     2 | 4.7µH inductors Panasonic ELJ-FA4R7KF2                    |
| Q1, Q2        |     2 | PNP small-signal transistors Zetex BCX71KCT               |
| D2            |     1 | High-speed switching diode Central Semiconductor CMPD4448 |
| U1            |     1 | MAX3664ESA                                                |
| J1, J3, J4    |     3 | SMA connectors (PC edge mount) E.F. Johnson 142-0701-801  |
| JU1, JU2      |     2 | 2-pin headers                                             |
| None          |     2 | Shunts on JU1 and JU2                                     |
| None          |     1 | MAX3664 data sheet                                        |

1

## MAX3664 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

## Test Equipment Required

- Signal-source sine-wave generator or network analyzer with range to 650MHz
- Signal-source function generator with range to 1MHz
- Signal-source pattern generator
- Power supply capable of 3.6V, 35mA output with current limit
- Oscilloscope with at least 1GHz bandwidth
- Wideband noise meter or RF power meter
- 470MHz filter with linear phase response (example: Mini Circuits SBLP-467 filter)

Setup

- 1) Connect a 3.3V power supply to VCC1 and GND.
- 2) Remove the shunts from JU1 and JU2.
- 3) Connect VOUT+ and VOUT- to a dual-channel oscilloscope through terminated 50 Ω cables.
- 4) Apply a 100mVp-p, 311MHz square wave to VIN.
- 5) Observe each output of approximately 150mVp-p on the oscilloscope.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Connections, Adjustments, and Controls

## VCC1 Connection

This connection provides supply current for the MAX3664. Connect to 3.3V.

## VCC2 Connection

This connection provides supply current for the current mirror that adds the DC component to the input signal. Connect to 3.3V if used.

## J1-VIN Connection

A signal generator can be connected here. This input is terminated with 50 Ω to  ground and AC coupled to IN (MAX3664) through series resistors (2200 Ω ).  The  AC signal input current to the MAX3664 is VIN/2200 Ω .

## J3-VOUT-, J4-VOUT+ Connection

These are the MAX3664 outputs. These connectors are AC coupled to the MAX3664, and connect directly to test equipment with 50 Ω or more input impedance.

## Jumper JU1

This jumper is in series with the current mirror that adds DC component to the input signal. This is a convenient place to measure the DC input current.

## Jumper JU2

This jumper grounds the MAX3664's COMP pin. The DC cancellation loop is disabled when COMP is grounded.

## Potentiometer R7

This potentiometer controls the amount of DC current added to the input signal.

## Measurement Information

## AC Measurement

When making AC measurements, place a shunt on JU1 after  setting  the  DC  signal  current.  Wires  attached  to this jumper add noise to the signal.

## DC Measurement

For most DC measurements, place a shunt on JU2 to disable the DC cancellation loop. Measure output offset with JU2 open.

## Low-Frequency Cutoff Measurement

The low-frequency cutoff changes with average input current (refer to the MAX3664 data sheet, Typical Operating Characteristics). When measuring lowfrequency cutoff, consider the capacitors in the MAX3664's signal path. When driving a 50 Ω load, capacitors C5 and C6 have a lowpass cutoff of approximately 16kHz. Capacitor C4, driving the 2200 Ω input, has a 720Hz lowpass cutoff.

When measuring cutoff frequencies below 50kHz, use a high-impedance oscilloscope to measure the output voltage. With a 1M Ω input,  output  capacitors  C5  and C6 produce a 1.6Hz cutoff frequency, which is low enough not to interfere with the measurement.

## Noise Measurement

Remove R5 before attempting noise measurements to minimize input capacitance. With R5 removed the total capacitance at the IN pin is 1.1pF. Refer to the Designing a Low-Capacitance Input  section in the MAX3664 data sheet. Connect an output to a wideband noise meter or a sensitive RF power meter to measure i nput-referred noise. With 50 Ω output load, the MAX3664's single-ended gain is about 3000 Ω (this can be measured more accurately with an AC gain measurement). Use a filter on the output to limit high-frequency noise.

When using an RF power meter, convert the power measurement to input current noise with the following relation:

<!-- image -->

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Photodiode Emulation

Use the following relations to simulate a photodiode input with a signal generator and the current mirror (Figure 1):

PAVE = average power = (P1 + P0) / 2 (assuming 50% average duty cycle)

re = extinction ratio = P1 / P0

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Input current is related to optical power by the photodiode responsivity ( r ),  as  shown  in  the  following  equations:

<!-- formula-not-decoded -->

For example, follow these steps to emulate a signal with an average power of -20dBm and an extinction ratio of 10:

- 1) -20dBm optical power will produce 10µA of average input current (assume photodiode responsivity of 1A/W). Install a current meter at JU1. Adjust R7 until current is 10µA.
- 2) The signal amplitude is 2PAVE(re - 1) / (re + 1) = 16.3µA. To generate this current through the 2200 Ω input resistors, set the signal source to produce an output level of 16.3µA x 2200 Ω = 36mVp-p.

## Using a Photodiode

- 1) Remove resistor R5 before installing your photodiode in holes provided at location D1.
- 2) Connect the photodiode anode to IN (pin 2) on the MAX3664.
- 3) Connect the photodiode cathode to the junction of C8 and R8.
- 4) Connect the photodiode case ground to INREF1 and INREF2.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3664 Evaluation Kit

## Supply Current

Supply current, as specified in the MAX3664 data sheet, is the current flowing into VCC1 pad. Current flowing into VCC2 pad powers the current mirror only.

Figure 1.  Optical Power Definitions

<!-- image -->

## Layout Considerations

The EV kit layout has been developed for packaged MAX3664s. The following considerations were taken into account on the evaluation board.

50 Ω controlled impedance traces are used for the VOUT+ and VOUT- signal paths. Power and ground planes are relieved beneath the MAX3664 IN pin to reduce input capacitance.

## MAX3664 Evaluation Kit

Figure 2.  MAX3664 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3664 Evaluation Kit

<!-- image -->

Figure 3.  MAX3664 EV Kit Component Placement GuideComponent Side

Figure 4.  MAX3664 EV Kit PC Board Layout-Component Side

<!-- image -->

<!-- image -->

Figure 5.  MAX3664 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3664 Evaluation Kit

Figure 6.  MAX3664 EV Kit PC Board Layout-Power Plane

<!-- image -->

Figure 7.  MAX3664 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3664 Evaluation Kit

## NOTES

7

## MAX3664 Evaluation Kit

NOTES

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

8

© 1999 Maxim Integrated Products