<!-- lastmod 2022-08-02 -->
## General Description

The MAX3665 evaluation kit (EV kit) simplifies evaluation of the MAX3665 transimpedance preamplifier. The EV kit includes a circuit that emulates the zero-to-peak current input signal that would be produced by a photodiode. It also includes a calibration circuit that allows accurate bandwidth measurements.

The MAX3665 EV kit is fully assembled and tested.

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                                      |
|--------------------------|-------|--------------------------------------------------|
| C1, C2, C4, C7, C10, C11 |     6 | 1000pF ±10%, 25V min ceramic capacitors          |
| C3, C5, C6, C12-C16      |     8 | 0.1µF 10%, 10V min ceramic caps                  |
| C8, C9                   |     2 | 33µF ±10%, 16V min tantalum caps AVX TAJC336K016 |
| C17, C20, C23            |     3 | 5pF ±0.1pF, 50V capacitors                       |
| C18, C19, C21            |     3 | 4pF ±0.1pF, 50V capacitors                       |
| J1-J5                    |     5 | SMA connectors (edge mount)                      |
| J11-J14                  |     4 | Open                                             |
| JU1, JU2                 |     2 | 2-pin headers (0.1in centers)                    |
| L1, L2                   |     2 | Ferrite beads Murata BLM11HA601S                 |
| L3-L8                    |     6 | 22nH ±5% inductors                               |
| R1, R9                   |     2 | 2k Ω ±1% resistors                               |
| R2, R4, R10, R12         |     4 | 1k Ω ±1% resistors                               |
| R3, R11                  |     2 | 49.9 Ω ±5% resistors                             |
| R5                       |     1 | 1k Ω potentiometer                               |
| R6, R8                   |     2 | 10k Ω ±5% resistors                              |
| R7                       |     1 | 10k Ω potentiometer                              |
| U1                       |     1 | MAX3665EUA (8-pin µMAX)                          |
| U2                       |     1 | CMPT3906 PNP transistor                          |
| U3                       |     1 | MAX400CSA (8-pin SO)                             |
| U4, U5                   |     0 | User-supplied optical modules                    |
| VCC, +15V, GND           |     3 | Test points                                      |
| None                     |     2 | Shunts for JU1, JU2                              |
| None                     |     1 | MAX3665 evaluation kit (rev B) circuit board     |
| None                     |     1 | MAX3665 data sheet                               |

<!-- image -->

Features

- ♦ Fully Assembled and Tested
- ♦ Includes Photodiode Emulation Circuit
- ♦ Calibration Circuit for Accurate Bandwidth Measurements

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3665EVKIT | -40°C to +85°C | 8 µMAX       |

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          |
|-----------------------|--------------|--------------|
| AVX                   | 843-444-2863 | 843-626-3123 |
| Central Semiconductor | 516-435-1110 | 516-435-1824 |
| Murata                | 770-684-7821 | -            |
| Zetex                 | 516-543-7100 | 516-864-7630 |

Note: Please indicate that you are using the MAX3665 when contacting these component suppliers.

## Quick Start

- 1) Connect a signal source to INPUT. Set the signal amplitude to 50mVp-p (this may require some attenuation between the source and the MAX3665 EV kit). The signal should have a data rate up to 622Mbps.
- 2) Connect OUT+ and OUT- to the 50 Ω inputs of a high-speed oscilloscope.
- 3) Remove shunts from jumpers JU1 and JU2.
- 4) Connect a +3.3V or +5.0V supply to the VCC terminal and ground to the GND terminal.
- 5) The differential signal at the oscilloscope should be between 100mVp-p and 150mVp-p.

## Detailed Description

The MAX3665 is designed to accept a DC-coupled input from a photodiode with an amplitude up to 450µA peak-to-peak. Because the MAX3665 provides a DC bias for the photodiode, it cannot be DC-coupled to signal sources. To allow characterization without a photodiode, the MAX3665 EV kit provides a simple circuit that emulates a photodiode using common voltage output signal sources.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## MAX3665 Evaluation Kit

The connector at INPUT is terminated with 50 Ω to ground. This voltage is then AC-coupled to a resistance in series with the MAX3665's input, creating an input current. U2 and U3 form a simple DC current source that is used to apply a DC offset to the input signal.

The values of the series resistive elements, R1 and R2, have been carefully selected so as not to change the bandwidth of the transimpedance amplifier. Surfacemount resistors have parasitic capacitance that reduces their  impedance at frequencies above 1GHz. The user should carefully evaluate any changes to R1 and R2 using the calibration network provided on the EV kit.

## Photodiode Emulation

The following procedure can be used to emulate the high-speed current signal generated by a photodiode:

- 1) Select the desired optical power (PAVG in dBm) and extinction ratio (re).
- 2) Calculate the average current (IAVE in Amps) as follows, and adjust R7 and R5 to obtain it:

<!-- formula-not-decoded -->

- 3) Calculate the AC signal current (IINPUT in Amps) as follows, and adjust the signal generator to obtain it:

<!-- formula-not-decoded -->

For example:

- 1) Emulate a signal with an average power of -20dBm and an extinction ratio of 10.
- 2) -20dBm optical power will produce 10µA of average input current (assume photodiode responsivity of 1A/W). Install a current meter at JU1. Adjust R7 and R5 until the current is 10µA.
- 3) The signal amplitude is IAVG(re -  1)  /  (r e + 1) = 16µA. To generate this current through the 3000 Ω input resistors, set the signal source to produce an output level of 16µA · 3000 Ω = 48mVp-p.

## Noise Measurement

Remove R2 before attempting noise measurements to minimize input capacitance. With R2 removed, the total capacitance at the IN pin is approximately 0.5pF. Refer to the MAX3665 data sheet for more information.

where ρ = photodiode responsivity in A/W.

## Table 1.  Connections, Adjustments, and Control

| CONTROL    | DESCRIPTION                                                                                                                         |
|------------|-------------------------------------------------------------------------------------------------------------------------------------|
| VCC        | Supply Voltage Connection (+3.3V or +5V, 100mA current limit)                                                                       |
| +15V       | Supply Voltage Connection for Photodiode Emulator Circuit (+15V, 25mA)                                                              |
| GND        | Connection for Ground                                                                                                               |
| JU1        | When shunted, the photodiode emulation circuit is active. This is a convenient location to measure the emulated photodiode current. |
| JU2        | Test Pin. Shunting JU2 disables the MAX3665 DC cancellation amplifier.                                                              |
| R5         | Potentiometer. Fine adjustment of the DC current input.                                                                             |
| R7         | Potentiometer. Coarse adjustment of the DC current input.                                                                           |
| OUT+, OUT- | Connections for the MAX3665 Output Signal                                                                                           |
| INPUT      | Input Connection for a Signal Generator                                                                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3665 Evaluation Kit

Figure 1. MAX3665 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3665 Evaluation Kit

Figure 2. MAX3665 EV Kit Component Placement Guide

<!-- image -->

Figure 3. MAX3665 EV Kit PC Board Layout-Component Side

<!-- image -->

4

Figure 4. MAX3665 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 5. MAX3665 EV Kit PC Board Layout-Power Plane

<!-- image -->

## MAX3665 Evaluation Kit

Figure 6. MAX3665 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3665 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 2000 Maxim Integrated Products