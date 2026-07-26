<!-- lastmod 2022-08-03 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX4104 evaluation kit (EV kit) simplifies evaluation of  the  MAX4104 ultra-high-speed, low-noise, 880MHz amplifier. The EV kit circuit demonstrates the MAX4104 in  the  noninverting unity-gain configuration. RF-style connectors (SMA) and 50 Ω terminating resistors are included for test equipment compatibility.

The MAX4104 EV kit can also be used to evaluate the MAX4105, MAX4304, and MAX4305. Simply order a free sample of the appropriate part (MAX4105ESA, MAX4304ESA, or MAX4305ESA), replace the IC on the EV board, and change the gain-setting resistors for the desired  gain.  Refer  to  the  MAX4104/MAX4105/ MAX4304/MAX4305 data sheet for suggested resistor values.

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX4104EVKIT | -40°C to +85°C | 8 SO         |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| C1, C3        |     2 | 10µF, 10V, 20% tantalum capacitors AVX TAJB106M010 or Sprague 293D106X0010B |
| C2, C4        |     2 | 0.1µF 10% ceramic capacitors                                                |
| IN, OUT       |     2 | SMA connectors                                                              |
| R1, R2        |     2 | 49.9 Ω , 1% resistors                                                       |
| R F           |     1 | 22 Ω , 5% resistor                                                          |
| R G           |     0 | Open                                                                        |
| U1            |     1 | MAX4104ESA                                                                  |
| None          |     1 | MAX4104 PC board                                                            |
| None          |     1 | MAX4104/MAX4105/MAX4304/ MAX4305 data sheet                                 |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |
| Sprague    | 603-224-1961 | 603-224-1430 |

Note: Please indicate that you are using the MAX4104 when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 880MHz (typical) -3dB Bandwidth
- ' 100MHz 0.1dB Gain Flatness
- ' 2.1nV/ √ Hz Voltage Noise Density
- ' 400V/µs Slew Rate
- ' ±70mA Output Current Drive
- ' -88dBc SFDR (at 50MHz)
- ' Fully Assembled and Tested Surface-Mount Board

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX4104 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) The circuit requires supply voltages of ±3.5V to ±5.5V. For evaluation purposes, connect a +5V supply to the pad labeled VCC and a -5V supply to the pad labeled VEE. Connect the power-supply grounds to the pad marked GND.
- 2) Connect the output marked OUT to an oscilloscope through a terminated 50 Ω cable.
- 3) Turn on the power supply. Apply a signal of ±3.4V maximum to the SMA connector marked IN.
- 4) Verify the output signal on the oscilloscope. Note: when using a 50 Ω terminated oscilloscope input, the output amplitude observed on the oscilloscope will be half that on the input, due to the voltage divider formed by the 49.9 Ω back-terminating resistor (R2) and the oscilloscope input termination impedance.

## \_\_\_\_\_\_\_\_\_\_\_\_\_Layout Considerations

The MAX4104 EV kit layout has been optimized for high-speed signals and low distortion, with careful attention given to grounding, power-supply bypassing, and signal-path layout. The small, surface-mount, ceramic bypass capacitors C2 and C4 have been placed as close to the MAX4104 supply pins as possible.  A  continuous ground plane has been maintained under the IC, RF, and RG to reduce inductance to the signal return path. Capacitance at the inverting input pin has been minimized by reducing the feedbacktrace length and using 0805-size surface-mount feedback and gain-set resistors.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-865-8769.

Figure 1.  MAX4104 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

O

O

1.0"

Figure 3.  MAX4104 EV Kit PC Board Layout-Component Side

<!-- image -->

1.0"

Figure 4.  MAX4104 EV Kit PC Board Layout-Solder Side

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4104 Evaluation Kit

Figure 2.  MAX4104 EV Kit Component Placement GuideComponent Side

<!-- image -->

O

O

O

D

O

O

## MAX4104 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1998 Maxim Integrated Products