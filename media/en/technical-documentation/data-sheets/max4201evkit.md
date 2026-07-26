<!-- lastmod 2022-08-05 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX4201 evaluation kit (EV kit) simplifies evaluation  of  the  MAX4201 ultra-high-speed, low-power, lownoise, open-loop buffer. The EV kit circuit demonstrates the  MAX4201 in the noninverting unity-gain configuration.  RF-style  connectors (SMA) and 50 W terminating resistors are included for test equipment compatibility.

This EV kit can also be used to evaluate the MAX4200 and MAX4202 (contact Maxim for free samples). Note that the MAX4201 has an internal 50 W output termination resistor, and the MAX4202 has an internal 75 W output termination resistor, while the MAX4200 has no i nternal output termination resistor (refer to the MAX4200-MAX4205 data sheet for more information).

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| C1, C3        |     2 | 10µF, 10V, 20% tantalum capacitors AVX TAJB106M010 or Sprague 293D106X0010B |
| C2, C4        |     2 | 0.1µF, 10% ceramic capacitors                                               |
| IN, OUT       |     2 | SMA connectors                                                              |
| R1            |     1 | 49.9 W , 1% resistor                                                        |
| R2            |     1 | 0 W resistor                                                                |
| U1            |     1 | MAX4201ESA                                                                  |
| None          |     1 | MAX4201 PC board                                                            |
| None          |     1 | MAX4200-MAX4205 data sheet                                                  |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE          | FAX            |
|------------|----------------|----------------|
| AVX        | (803) 946-0690 | (803) 626-3123 |
| SPRAGUE    | (603) 224-1961 | (603) 224-1430 |

Note: Please indicate that you are using the MAX4201 when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 780MHz -3dB Bandwidth
- ' 280MHz 0.1dB Gain Flatness
- ' 2.1nV/ Hz Voltage Noise Density
- ' 0.8pA/ Hz Current Noise Density
- ' 4200V/µs Slew Rate
- ' Excellent Capacitive-Load-Driving Capability
- ' Fully Assembled and Tested Surface-Mount Board

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX4201EVKIT | -40°C to +85°C | 8 SO         |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX4201 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) The circuit requires supply voltages of ±4.0V to ±5.5V. For evaluation purposes, connect a +5V supply to the pad labeled VCC and a -5V supply to the pad labeled VEE. Connect the power-supply grounds to the pad marked GND.
- 2) Connect the output marked OUT to an oscilloscope through a terminated 50 W cable.
- 3) Turn on the power supply. Apply a signal of ±3.3V maximum to the SMA connector marked IN+.
- 4) Verify the output signal on the oscilloscope. (Note: When using a 50 W terminated oscilloscope input, the output amplitude observed on the oscilloscope will be half that on the input. This is due to the voltage divider formed by the internal 50 W back-terminating resistor and the oscilloscope input termination impedance.)

1

## MAX4201 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Layout Considerations

The MAX4201 EV kit layout has been optimized for high-speed signals and low distortion with careful attention  given to grounding, power-supply bypassing, and signal-path layout. The small, surface-mount, ceramic bypass capacitors (C2, C4) have been placed as close to the MAX4201 supply pins as possible. A continuous ground plane has been maintained under the IC to reduce inductance to the signal return path.

When using the MAX4200, replace R2 with an appropriate terminating resistor.

Figure 1.  MAX4201 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  MAX4201 EV Kit Component Placement Guide

<!-- image -->

Figure 4.  MAX4201 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3.  MAX4201 EV Kit PC Board Layout-Component Side

<!-- image -->

## Evaluates:  MAX4201

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1998 Maxim Integrated Products