<!-- lastmod 2022-08-05 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX4223 evaluation kit (EV kit) simplifies evaluation  of  the  1GHz,  low-power MAX4223 current-feedback amplifier. The EV kit circuit demonstrates the MAX4223 in the noninverting unity-gain configuration. RF-style connectors (SMA) and 50 Ω terminating resistors are included for test equipment compatibility.

The MAX4223 EV kit uses a PC board design optimized for  high-frequency amplifiers. This board can also be used to evaluate the MAX4224 and other Maxim amplifiers that share the same pinout .

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| C1, C2        |     2 | 0.1µF, 10% ceramic capacitors                                               |
| C3, C4        |     2 | 10µF, 10V, 20% tantalum capacitors AVX TAJB106M010 or Sprague 293D106X0010B |
| R1, R2        |     2 | 49.9 Ω , 1% resistors                                                       |
| RF            |     1 | 560 Ω , 5% resistor                                                         |
| RG            |     0 | Open                                                                        |
| IN, OUT       |     2 | SMA connectors                                                              |
| U1            |     1 | MAX4223ESA                                                                  |
| JU1           |     1 | 3-pin header                                                                |
| None          |     1 | Shunt for JU1                                                               |
| None          |     1 | PC board                                                                    |
| None          |     1 | MAX4223 data sheet                                                          |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE          | FAX            |
|------------|----------------|----------------|
| AVX        | (803) 946-0690 | (803) 626-3123 |
| Sprague    | (603) 224-1961 | (603) 224-1430 |

Note: Please indicate that you are using the MAX4223 when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 1GHz -3dB Bandwidth
- ' 300MHz 0.1dB Gain Flatness
- ' 1100V/µs Slew Rate
- ' ±5V Supply Operation
- ' Optional Adjustable Gain
- ' High-Impedance Shutdown Mode
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE    | BOARD TYPE    |
|-----------------|----------------|---------------|
| MAX4223EVKIT-SO | -40°C to +85°C | Surface Mount |

Note: To evaluate the MAX4224, request a MAX4224ESA free sample.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX4223 EV kit is fully assembled and tested. Follow these steps to verify board operation.

- 1) The circuit requires supply voltages of ±2.85V to ±5.5V. For evaluation purposes, connect a +5V supply to the pad labeled VCC and a -5V supply to the pad labeled VEE. Connect the power-supply ground to the pad labeled GND.
- 2) Verify that the shunt is across pins 1 and 2 of jumper JU1.
- 3) Connect the output labeled OUT to an oscilloscope input.  For  best  performance, terminate the output with a 50 Ω load.
- 4) Turn on the power supply. Apply a signal of ±2.5V maximum to the SMA connector labeled IN.
- 5) Verify the output signal on the oscilloscope.

Note: When using a 50 Ω -terminated oscilloscope input, the output amplitude observed will be half that of the input,  due  to  the  voltage  divider  formed  by  the  49.9 Ω back-terminating resistor (R1) and the oscilloscope input termination impedance.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## MAX4223 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Shutdown Control

The MAX4223 provides a shutdown pin ( SHDN )  to enable or disable the output. Table 1 lists the options available for the shutdown control jumper, JU1. To use an external controller, remove the shunt on JU1 completely  and  connect the external controller to the pad labeled SHDN . SHDN is a TTL/CMOS logic-level input.

## Table 1.  Jumper JU1 Functions

| SHUNT LOCATION   | MAX4223 SHDN PIN   | MAX4223 OUTPUT   |
|------------------|--------------------|------------------|
| 1 & 2            | Connected to V CC  | Enabled          |
| 2 & 3            | Connected to GND   | Disabled         |

## Voltage Gain Adjustment

The MAX4223 is optimized for applications requiring a gain of +1 (0dB) or greater. Its gain can be set by changing the feedback (RF) and gain-set (RG) resistors.  For  improved performance at a gain of +2 (6dB) or greater, replace the MAX4223 with a free sample of the MAX4224. Refer to the MAX4223-MAX4228 data sheet for recommended feedback-resistor values.

## Layout Considerations

The PC board layout has been optimized for highspeed signals and low distortion, with careful attention given to grounding, power-supply bypassing, and signal-path layout. The small, surface-mount, ceramic bypass capacitors (C1 and C2) have been placed as close to the amplifier's supply pins as possible. The ground plane has been removed around and under the amplifier to reduce stray capacitance. Capacitance at the inverting input pins has been minimized by reducing the length and width of the input and feedback traces, and by using 0805-size surface-mount feedback and gain-set resistors.

Figure 1.  MAX4223 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4223 Evaluation Kit

<!-- image -->

Figure 2.  MAX4223 EV Kit Component Placement Guide

Figure 3.  MAX4223 EV Kit PC Board Layout-Component Side

<!-- image -->

<!-- image -->

Figure 4.  MAX4223 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4223 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600