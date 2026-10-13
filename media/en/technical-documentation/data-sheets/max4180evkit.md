<!-- lastmod 2022-08-03 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX4180 evaluation kit (EV kit) simplifies evaluation  of  the  MAX4180 low-power, current-feedback amplifier. The EV kit circuit demonstrates the MAX4180 in  the  noninverting,  gain-of-two  configuration  in  either single- or dual-supply mode. RF-style SMA connectors and 50 Ω terminating resistors are included for test equipment compatibility.

The MAX4180 EV kit uses a PC board design optimized for  high-frequency amplifiers. This board can also be used to evaluate the MAX4181 and other Maxim amplifiers that share the same pinout.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| C1, C2        |     2 | 0.1µF, 10% ceramic capacitors                                               |
| C3, C4        |     2 | 10µF, 10V, 20% tantalum capacitors AVX TAJB106M010 or Sprague 293D106X0010B |
| IN, OUT       |     2 | SMA connectors                                                              |
| JU1           |     1 | 3-pin header                                                                |
| R1, R2        |     2 | 49.9 Ω , 1% resistors                                                       |
| RF            |     1 | 680 Ω , 5% resistor                                                         |
| RG            |     1 | 680 Ω , 5% resistor                                                         |
| U1            |     1 | MAX4180ESA                                                                  |
| None          |     1 | Shunt for JU1                                                               |
| None          |     1 | Single SO-8 HF amp PC board                                                 |
| None          |     1 | MAX4180 data sheet                                                          |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE          | FAX            |
|------------|----------------|----------------|
| AVX        | (803) 946-0690 | (803) 626-3123 |
| Sprague    | (603) 224-1961 | (603) 224-1430 |

Note: Please indicate that you are using the MAX4180 when contacting these component suppliers.

## MAXIM

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 190MHz -3dB Bandwidth (RL = 100 Ω )
- ' 400V/µs Slew Rate
- ' Single +5V or Dual ±5V Supply Operation
- ' Adjustable Gain
- ' High-Impedance Shutdown Mode
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE    | BOARD TYPE    |
|-----------------|----------------|---------------|
| MAX4180EVKIT-SO | -40°C to +85°C | Surface Mount |

Note: To evaluate the MAX4181, request a MAX4181ESA free sample.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX4180 EV kit is fully assembled and tested. Follow these steps to verify board operation.

- 1) For dual-supply operation, connect a +5V supply to the pad labeled VCC. Connect a -5V supply to the pad labeled VEE. Connect power-supply ground to the pad labeled GND.
- 2) Verify that the shunt is across pins 1 and 2 of jumper JU1.
- 3) Connect the output labeled OUT to an oscilloscope input.
- 4) Turn on the power supply. Apply a ±1.0V signal to the SMA connector labeled IN. The 100 Ω load (chosen for ease of evaluation) limits the output voltage range. Wider output voltage swings are achievable with lighter loads. See the MAX4180 data sheet.
- 5) Verify the output signal on the oscilloscope.

1

## MAX4180 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Supply Voltage

The MAX4180 EV kit can be used in either single- or dual-supply mode. Power-supply filter capacitors (C1, C3) can be eliminated in your final single-supply design.

## Shutdown Control

The MAX4180 provides a shutdown pin ( SHDN )  to enable or disable the output. Table 1 lists the options available for the shutdown control jumper, JU1. An external controller may be used by removing the shunt on JU1 completely and connecting the external controller to the pad labeled SHDN . SHDN is a TTL/CMOS logic-level input.

## Table 1.  Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | OUTPUT   |
|------------------|------------------|----------|
| 1 and 2          | Connected to VCC | Enabled  |
| 2 and 3          | Connected to GND | Disabled |

## Voltage-Gain Adjustment

The MAX4180 gain can be set by changing the feedback (RF) and gain-set (RG) resistors. Refer to the MAX4180 data sheet for recommended values. The MAX4180 is compensated for applications with a closed-loop gain of +2 (6dB) or greater. For applications requiring a closed-loop gain of +1 (0dB), replace the MAX4180 with a MAX4181 and change RG and RF as outlined in Table 1 of the MAX4180 data sheet.

## Layout Considerations

The PC board layout has been optimized for highspeed signals and low distortion, with careful attention given to grounding, power-supply bypassing, and signal-path layout. The small, surface-mount, ceramic bypass capacitors (C1, C2) have been placed as close to  the  amplifier's  supply  pins  as  possible.  The  ground plane has been removed around and under the amplifier  to  reduce  stray  capacitance. Capacitance at the inverting input pins has been minimized by reducing the length and width of the input and feedback traces and by using 0805-size feedback and gain-set resistors.

Figure 1. MAX4180 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 2.  MAX4180 EV Kit Component Placement GuideComponent Side

Figure 3.  MAX4180 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.  MAX4180 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4180 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1997 Maxim Integrated Products