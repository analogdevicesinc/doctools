<!-- lastmod 2022-08-03 -->
## General Description

The MAX4213 evaluation kit (EV kit) simplifies evaluation of the MAX4213 high-speed, single-supply amplifier with Rail-to-Rail ® outputs. The EV kit circuit demonstrates the MAX4213 in the noninverting unity-gain configuration, in either single or dual-supply mode.

This EV kit may also be used to evaluate the MAX4215 high-speed, rail-to-rail buffer. Contact Maxim to order a free sample.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| U1            |     1 | MAX4213ESA                                                                  |
| C1, C2        |     2 | 0.1µF, 10% ceramic capacitors                                               |
| C3, C4        |     2 | 10µF, 10V, 20% tantalum capacitors AVX TAJB106M010 or Sprague 293D106X0010B |
| R1, R2        |     2 | 49.9 Ω , 1% resistors                                                       |
| R3            |     0 | Short (PC trace)                                                            |
| R F           |     1 | 24 Ω , 5% resistor                                                          |
| R G           |     0 | Open                                                                        |
| IN, OUT       |     2 | SMA connectors                                                              |
| None          |     1 | MAX4213 EV kit PC board                                                     |
| None          |     1 | MAX4213 data sheet                                                          |

## Component Suppliers

| SUPPLIER*   | PHONE          | FAX            |
|-------------|----------------|----------------|
| AVX         | (803) 946-0690 | (803) 626-3123 |
| Sprague     | (603) 224-1961 | (603) 224-1430 |

Rail-to-Rail is a registered trademark of Nippon Motorola Ltd.

<!-- image -->

Features

- ' 300MHz -3dB Bandwidth
- ' 600V/µs Slew Rate
- ' Single 3.3V/5V Operation
- ' Rail-to-Rail Outputs
- ' Fully Assembled and Tested

## Ordering Information

| PART            | TEMP. RANGE    | BOARD TYPE    |
|-----------------|----------------|---------------|
| MAX4213EVKIT-SO | -40°C to +85°C | Surface Mount |

Note: To evaluate the MAX4215, request a MAX4215ESA free sample.

## Quick Start

The MAX4213 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) For single-supply operation, connect a +5V power supply to the pad marked VCC. Connect the powersupply ground to the VEE and GND pads.
- 2) Verify that a shunt is across pins 1 and 2 of JU1.
- 3) Connect the output marked OUT to an oscilloscope input.
- 4) Turn on the power supply. Apply a +0.5V to +2.75V signal to the SMA connector marked IN.
- 5) Verify the output signal on the oscilloscope.

Note: If  you  use a 50 Ω terminated oscilloscope input, the  output  amplitude observed will be half that of the input, due to the voltage divider formed by the 49.9 Ω back-terminating resistor (R1) and the oscilloscope input termination.

1

## MAX4213 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Supply Voltage

The MAX4213 EV kit can be used in either single or dual-supply mode. Negative power-supply filter capacitors C1 and C3 can be eliminated in your final singlesupply design.

## Enable Control

The MAX4213 provides an enable pin (EN) to enable or disable the output. Table 1 lists the options available for the enable/disable control jumper JU1. You can use an external controller by removing the shunt on JU1 completely and connecting the external controller to the pad labeled EN. EN is a TTL/CMOS logic-level input.

## Table 1.  Jumper JU1 Functions

| SHUNT LOCATION   | ENABLE PIN        | MAX4213 OUTPUT   |
|------------------|-------------------|------------------|
| 1 and 2          | Connected to V CC | Enabled          |
| 2 and 3          | Connected to GND  | Disabled         |

## Enable Logic-Low Input Current

Under certain conditions, the logic-low input current can increase. The MAX4213 EV kit provides a resistor location (R3) to limit the logic-low input current. A 10k Ω resistor value is recommended. R3 is normally shorted by a PC board trace between its pads. Be sure to cut this  shorting  trace  before  installing  a  resistor.  Refer  to the Enable Input and Disabled Output section of the MAX4212/MAX4213/MAX4216/MAX4218/MAX4220 data sheet for further details.

## Layout Considerations

The MAX4213 EV kit layout has been optimized for high-speed signals and low distortion, with careful attention given to grounding, power-supply bypassing, and signal-path layout. The small, surface-mount, ceramic bypass capacitors C1 and C2 have been placed as close to the MAX4213 supply pins as possible. The ground plane has been removed around and under the MAX4213 to reduce stray capacitance. Capacitance at the inverting input pin has been minimized by reducing the length and width of the input and feedback traces, and by using 0805-size surfacemount feedback and gain-set resistors.

Figure 1.  MAX4213 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  MAX4213 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3.  MAX4213 EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4213 Evaluation Kit

Figure 4.  MAX4213 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5.  MAX4213 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->