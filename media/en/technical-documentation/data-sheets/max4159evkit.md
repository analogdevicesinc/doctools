<!-- lastmod 2022-08-03 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX4159 evaluation kit (EV kit) simplifies evaluation of the MAX4159 two-channel, 350MHz video multiplexer (mux) amplifier. The EV kit circuit demonstrates the  MAX4159 in the noninverting unity-gain configuration.  RF  connectors  (SMA) and 50 Ω terminating resistors are included.

The EV kit comes with the MAX4159 installed. To evaluate  the  MAX4259,  simply  order  a  free  sample (MAX4259ESD),  replace  the  MAX4159  with  the MAX4259 on the EV board, and change the gainsetting  resistors  for  the  desired  gain.  The  MAX4259's minimum closed-loop gain is 2V/V (6db).

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| C1, C4        |     2 | 0.1µF, 10% ceramic capacitors                                               |
| C2, C3        |     2 | 10µF, 10V, 20% tantalum capacitors AVX TAJB106M010 or Sprague 293D106X0010B |
| IN0, IN1, OUT |     3 | SMA connectors                                                              |
| R1, R2, R3    |     3 | 49.9 Ω , 1% resistors                                                       |
| RF            |     1 | 430 Ω , 1% resistor                                                         |
| RG            |     0 | Open                                                                        |
| SW1           |     1 | DIP switch                                                                  |
| U1            |     1 | MAX4159ESD                                                                  |
| None          |     1 | MAX4159 data sheet                                                          |
| None          |     1 | MAX4159 PC board                                                            |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE          | FAX            |
|------------|----------------|----------------|
| AVX        | (803) 946-0690 | (803) 626-3123 |
| Sprague    | (603) 224-1961 | (603) 224-1430 |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 350MHz -3dB Bandwidth
- ' 100MHz 0.1dB Gain Flatness
- ' 700V/µs Slew Rate
- ' 0.01%/0.01° Differential Gain/Phase Error
- ' Directly Drives 50 Ω Cables
- ' Fully Assembled and Tested
- ' Low Power: 100mW
- ' 20ns Settling Time to 0.1%
- ' 20ns Channel-Switching Time

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE    | BOARD TYPE    |
|-----------------|----------------|---------------|
| MAX4159EVKIT-SO | -40°C to +85°C | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX4159 EV kit is fully assembled and tested. Follow these steps to verify board operation.

- 1) Set all switches on DIP switch SW1 to the logic-low (off) position.
- 2) Connect the power-supply grounds to the pad marked GND. Connect a +5V supply to the pad marked V+ and a -5V supply to the pad marked V-.
- 3) Connect the output marked OUT to a 50 Ω terminated oscilloscope input.
- 4) Turn on the power supply. Apply a signal of ±2.5V (max) to the SMA connector marked IN0.
- 5) Verify the output signal on the oscilloscope. The output amplitude will be half that on the input, due to the voltage divider formed by the 49.9 Ω back-terminating resistor (R3) and the oscilloscope input termination.

## MAX4159 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Evaluating the MAX4259

The MAX4159 EV kit can also be used  to evaluate the MAX4259. Simply replace the MAX4159 with the MAX4259 and change the gain-setting resistors for the desired gain (2V/V min). Refer to the Choosing Feedback  and  Gain  Resistors section  of  the MAX4158/MAX4159/MAX4258/MAX4259 data sheet for more information.

## Logic Controls

The MAX4159 EV kit has control logic for input channel address (A0), input latch enable (LE), and output enable ( EN) .  DIP  switch  SW1  provides simple manual control of these inputs by switching each input to V+ (logic inputs default low when the circuit is open). Table 1 lists the options available with SW1. An external controller can be used by connecting the controller to the appropriate user pad and opening the corresponding switch (SW1\_). A0, LE, and EN are TTL/CMOS-compatible logic-level inputs.

## Layout Considerations

The MAX4159 EV kit layout is optimized for high-speed signals and low distortion, with careful attention given to grounding, power-supply bypassing, and signal-path layout. The small, surface-mount, ceramic bypass capacitors (C1, C4) are located as close to the MAX4159 supply pins as possible. The ground plane has been removed around and under RF and RG to reduce stray capacitance. Removing the ground plane around the input SMA connectors reduces distortion.

## Table 1.  SW1 Settings

Figure 1.  MAX4159 EV Kit Schematic

| LOGIC   | SW1 SETTINGS              | SW1 SETTINGS                     |
|---------|---------------------------|----------------------------------|
| INPUTS  | LOGIC LOW                 | LOGIC HIGH                       |
| A0      | Input channel 0 selected  | Input channel 1 selected         |
| LE      | Input address transparent | Input address latched            |
| EN      | Output enabled            | Output disabled (high impedance) |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  MAX4159 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3.  MAX4159 EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4159 Evaluation Kit

Figure 4.  MAX4159 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5.  MAX4159 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600