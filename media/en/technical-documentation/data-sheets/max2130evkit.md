<!-- lastmod 2022-08-02 -->
## General Description

The MAX2130 evaluation kit (EV kit) simplifies evaluation  of  the  MAX2130 broadband, high-dynamic range, two-output amplifier for digital TV tuner applications. The EV kit is fully assembled and tested, allowing simple evaluation of all device functions. All signal ports utilize  SMA connectors and 50 Ω -to-75 Ω impedance transformation networks, providing a convenient interface to 50 Ω RF test equipment.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                     |
|---------------|-------|-------------------------------------------------|
| C1            |     1 | 1000pF ceramic capacitor (0603)                 |
| C2, C3        |     2 | 47pF ceramic capacitors (0603)                  |
| C4-C7         |     4 | 0.1 µ F ceramic capacitors (0603)               |
| C9            |     1 | 10 µ F, 10V tantalum capacitor, AVX TAJB106M010 |
| C10           |     0 | Not installed                                   |
| L1            |     1 | Ferrite bead, Murata BLM11A221SG (0603)         |
| R1, R5, R7    |     3 | 43.2 Ω ± 1% resistors (0603)                    |
| R2, R4, R6    |     3 | 86.6 Ω ± 1% resistors (0603)                    |
| R3            |     1 | 15k Ω ± 1% resistor (0603)                      |

## Test Equipment Required

This section lists the test equipment required for evaluating the MAX2130:

- One power supply capable of providing 150mA of supply current at +5V.
- One HP8648C RF signal generator or equivalent (50 Ω )  sine-wave source capable of delivering at least +10dBm of output power from 44MHz to 878MHz.
- One HP8561E RF spectrum analyzer or equivalent high-sensitivity spectrum analyzer.
- Two 50 Ω SMA cables (RG-58A/U or equivalent).
- One 50 Ω SMA terminator
- Optional: digital multimeters (DMMs) to monitor DC supply voltage and supply current.

<!-- image -->

## Features

- ♦ Easy Evaluation of MAX2130
- ♦ All Critical Peripheral Components Included
- ♦ SMA Input and Output Signal Connectors
- ♦ 50 Ω -to-75 Ω Impedance Transformation Networks
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE        | IC PACKAGE   |
|--------------|--------------------|--------------|
| MAX2130EVKIT | -40 ° C to +85 ° C | 8 µ MAX-EP*  |

*Exposed Paddle

## Connections and Setup

- 1) DC Power Supply: Set the power-supply voltage to +5V. Turn the power supply off and connect it to the VCC and GND connections of the EV kit. If desired, place an ammeter in series with the power supply to measure supply current and a voltmeter in parallel with the VCC and GND connections to measure the supply voltage delivered to the device.
- 2) RF Signal Source: Set the signal generator to an RF frequency of 500MHz at an output power level of -14.3dBm. Turn the output of the signal generator off. Connect the signal generator to the IN port SMA connector using a 50 Ω SMA cable. Because the IN port of the MAX2130 is internally matched to 75 Ω , and the test equipment is a 50 Ω source, an external matching network converts the load seen by the signal generator to 50 Ω .  The  power loss of this impedance-matching network is approximately 5.7dB. The actual power delivered to the IN port of the MAX2130 is -14.3dBm - 5.7dBm = -20dBm.
- 3) Spectrum Analyzer: Connect the spectrum analyzer  to  the  OUT1  port  SMA connector using a 50 Ω SMA cable. Set the center frequency of the spectrum analyzer to 500MHz, the span to 1MHz, and the reference level to 0dBm. Because the MAX2130 is  intended to drive a 75 Ω load, a 75 Ω -to-50 Ω impedance-matching network is included between OUT1 of the MAX2130 and the OUT1 port of the EV kit. The power loss of this impedance-matching network is approximately 5.7dB.
- 4) 50 Ω Termination: Terminate the OUT2 port SMA connector with a 50 Ω terminator.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX2130 Evaluation Kit

## Analysis

Turn on the power supply and signal generator. The ammeter, if used, should read approximately 90mA. The gain of the IN-to-OUT1 path of the MAX2130 is typically  15.0dB. Applying -14.3dBm to the IN SMA connector, and taking into account the loss of the 50 Ω -to75 Ω matching networks, the spectrum analyzer should show an output power of approximately -10.7dBm at the OUT1 port of the EV kit.

POUT = PIN - match loss + gain - match loss

POUT = -14.3dBm - 5.7dB + 15.0dB - 5.7dB = -10.7dBm

Be sure to take into account cable losses when calculating power gain.

To evaluate the IN-to-OUT2 path gain, connect the spectrum analyzer to the OUT2 port SMA connector using a 50 Ω SMA cable and terminate the OUT1 port with the 50 Ω terminator.

The gain of the IN-to-OUT2 path of the MAX2130 is typically 8.7dB. Applying -14.3dBm to the IN SMA connector, and taking into account the loss of the 50 Ω -to-75 Ω matching networks, the spectrum analyzer should show an output power of approximately -17.0dBm at the OUT2 port of the EV kit.

POUT = PIN - match loss + gain - match loss

POUT = -14.3dBm - 5.7dB + 8.7dB - 5.7dB = -17.0dBm

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Once again, be sure to take into account cable losses when calculating power gain.

Adjust resistor R3 to trade off between the linearity and supply current. Please refer to the MAX2130 data sheet for more information.

## Layout and Bypassing

Good PC board layout is an essential aspect of RF circuit  design.  The  MAX2130 EV board can serve as a guide for layout of your board. Keep PC board trace lengths as short as possible to minimize parasitics and losses. Keep bypass capacitors as close to the device as possible with low-inductance connections to the ground plane.

<!-- image -->

## MAX2130 Evaluation Kit

<!-- image -->

Figure 1. MAX2130 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2130 Evaluation Kit

<!-- image -->

Figure 2. MAX2130 EV Kit Component Placement GuideComponent Side

Figure 3. MAX2130 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX2130 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4