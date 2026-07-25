<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX3266 and MAX3267 evaluation kits (EV kits) simplify evaluation of the MAX3266 and MAX3267 transimpedance preamplifiers.

The EV kits include a circuit that emulates the highspeed, zero-to-peak current input signal that would be produced by a photodiode. The kit also includes a calibration circuit that allows accurate bandwidth measurements.

The MAX3266 and MAX3267 EV kits are fully assembled and tested.

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                                            |
|--------------------------|-------|--------------------------------------------------------|
| C1, C2, C4, C7, C10, C11 |     6 | 1000pF, 10% ceramic capacitors                         |
| C3, C5, C6, C12-C17      |     9 | 0.1µF, 25V min, 10% ceramic capacitors                 |
| C8, C9                   |     2 | 33µF ±10%, 25V min tantalum capacitors AVX TAJE336K025 |
| J1-J5                    |     5 | SMA connectors (Edge Mount)                            |
| J11-J14                  |     4 | Open                                                   |
| JU1, JU2                 |     2 | 2-pin headers (0.1" centers)                           |
| None                     |     2 | Shunts for JU1, JU2                                    |
| L1, L2                   |     2 | Ferrite beads Murata BLM11A601S                        |
| R1, R2, R9, R10          |     4 | See Table 1                                            |
| R3, R11                  |     2 | 49.9 Ω , 1% resistors                                  |
| R4, R12                  |     2 | 1k Ω , 5% resistors                                    |
| R5                       |     1 | 1k Ω potentiometer                                     |
| R6, R8                   |     2 | 10k Ω , 5% resistors                                   |
| R7                       |     1 | 10k Ω potentiometer                                    |
| U1                       |     1 | MAX3266CSA or MAX3267CSA (8-pin SO)                    |
| U2                       |     1 | CMPT3906 PNP transistor                                |
| U3                       |     1 | MAX400CSA (8-pin SO)                                   |
| U4                       |     0 | User-supplied optical module                           |
| U5                       |     0 | User-supplied optical module                           |
| VCC, +15V, GND           |     3 | Test points                                            |
| None                     |     1 | MAX3266/MAX3267 evaluation kit (rev. b) circuit board  |
| None                     |     1 | MAX3266/MAX3267 data sheet                             |

Features

- ♦ Fully Assembled and Tested
- ♦ Includes Photodiode Emulation Circuit
- ♦ Calibration Circuit for Accurate Bandwidth Measurements

## Ordering Information

| PART             | TEMP. RANGE   | IC PACKAGE   |
|------------------|---------------|--------------|
| MAX3266 EVKIT-SO | 0°C to +70°C  | 8 SO         |
| MAX3267 EVKIT-SO | 0°C to +70°C  | 8 SO         |

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          |
|-----------------------|--------------|--------------|
| AVX                   | 843-444-2863 | 843-626-3123 |
| Central Semiconductor | 516-435-1110 | 516-435-1824 |
| Murata                | 415-964-6321 | 415-964-8165 |
| Zetex                 | 516-543-7100 | 516-864-7630 |

Note: Please indicate that you are using the MAX3266/MAX3267 when contacting these component suppliers.

## Quick Start

- 1) Connect a signal source to INPUT. Set the signal amplitude to 50mVp-p (this may require some attenuation between the source and the MAX3266 EV kit.) The signal should have data rate between 500Mbps and 1250Mbps.
- 2) Connect OUT+ and OUT- to the 50 Ω inputs of a high-speed oscilloscope.
- 3) Remove shunts from jumpers JU1 and JU2.
- 4) Connect a +3.3V supply to the VCC terminal and ground to the GND terminal.
- 5) The differential signal at the oscilloscope should be between 50mVp-p and 100mVp-p.

## Detailed Description

The MAX3266 is designed to accept a DC-coupled input from a high-speed photodiode, with an amplitude of 10µA to 1mA zero-to-peak. Unfortunately, high-speed current sources are not common laboratory equipment. Also, because the MAX3266 provides a DC bias for the photodiode, it cannot be DC coupled to signal sources.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX3266/MAX3267 Evaluation Kits

To allow characterization without a photodiode, the MAX3266 EV kit provides a simple circuit that emulates a photodiode using common voltage output signal sources.

The connector at INPUT is terminated with 50 Ω to ground. This voltage is then AC coupled to a resistance in  series  with  the  MAX3266's  input,  creating  an  input current.  U2 and U3 form a simple DC current source that is used to apply a DC current to the input signal.

The values of the series resistive elements, R1 and R2, have been carefully selected not to change the bandwidth of the transimpedance amplifier. Surface-mount resistors have parasitic capacitance that reduces their impedance at frequencies above 1GHz. The user should carefully evaluate any changes to R1 and R2 using the calibration network provided on the EV kit. Table 1 shows the recommended resistor values.

## Photodiode Emulation

The following procedure can be used to emulate the high-speed current signal generated by a photodiode:

- 1) Select the desired optical power (PAVG in dBm) and extinction ratio (re).
- 2) Calculate the average current (IAVG), and adjust R7 and R5 to obtain it.

<!-- formula-not-decoded -->

( ρ = photodiode responsivity in A/W)

- 3) Calculate the AC signal current, and adjust the signal generator to obtain it.

<!-- formula-not-decoded -->

For example:

- 1) Emulate a signal with an average power of -20dBm and an extinction ratio of 10.
- 2) -20dBm optical power will produce 10µA of average input current (assume photodiode responsivity of 1A/W). Install a current meter at JU1. Adjust R7 and R5 until the current is 10µA.
- 3) The signal amplitude is 2PAVG(re - 1) / (re + 1) = 16µA. To generate this current through the 1500 Ω input resistors, set the signal source to produce an output level of 16µA ✕ 1500 Ω = 24mVp-p.

## Noise Measurement

Remove R2 before attempting noise measurements to minimize input capacitance. With R2 removed the total capacitance at the IN pin is approximately 0.5pF. Refer to  the Layout Considerations section in the MAX3266/ MAX3267 data sheet for more information.

Table 1.  Recommended Resistor Values

| EVALUATION KIT   | R1, R9        | R2, R10                                         |
|------------------|---------------|-------------------------------------------------|
| MAX3266EVKIT-SO  | 1000 Ω (0603) | 510 Ω (0603)                                    |
| MAX3267EVKIT-SO  | 200 Ω (0402)  | 1020 Ω (composed of two 510 Ω (0402) resistors) |

Table 2.  Connections, Adjustments, and Control

| CONTROL    | DESCRIPTION                                                                                                                         |
|------------|-------------------------------------------------------------------------------------------------------------------------------------|
| VCC        | Supply Voltage Connection (3.0 to 5.5V, 100mA current limit)                                                                        |
| +15V       | Supply Voltage Connection for Photodiode Emulator Circuit (+15V, 25mA)                                                              |
| GND        | Connection for Ground                                                                                                               |
| JU1        | When shunted, the photodiode emulation circuit is active. This is a convenient location to measure the emulated photodiode current. |
| JU2        | Test Pin. Shunting JU2 disables the MAX3266/MAX3267 DC cancellation amplifier.                                                      |
| R5         | Potentiometer. Fine adjustment of the DC current input.                                                                             |
| R7         | Potentiometer. Coarse adjustment of the DC current input.                                                                           |
| OUT+, OUT- | Connections for the MAX3266/MAX3267 Output Signal                                                                                   |
| INPUT      | Input Connection for a Signal Generator                                                                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3266/MAX3267 Evaluation Kits

Figure 1.  MAX3266/MAX3267 EV Kits Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Evaluate:  MAX3266/MAX3267

## MAX3266/MAX3267 Evaluation Kits

<!-- image -->

Figure 2.  MAX3266 EV Kit Component Placement Guide

Figure 3. MAX3266 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX3266 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 5. MAX3266 EV Kit PC Board Layout-Power Plane

<!-- image -->

Figure 6. MAX3266 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5