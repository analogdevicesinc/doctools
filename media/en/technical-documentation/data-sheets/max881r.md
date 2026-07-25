<!-- lastmod 2022-10-10 -->
<!-- image -->

<!-- image -->

## Low-Noise Bias Supply in µMAX with Power-OK for GaAsFET PA

## General Description

The MAX881R low-noise, inverting power supply is designed for biasing GaAsFET power amplifiers in portable wireless applications. This device is a chargepump inverter followed by a negative linear regulator. The input voltage range is 2.5V to 5.5V. The output is preset at -2.0V or can be set, using two resistors, to any voltage from -0.5V to (-VIN + 0.6V). It can deliver up to 4mA. The internal linear regulator also filters the output to 1mVp-p ripple and noise.

Other features include a power-OK ( POK ) output that signals when the negative voltage is within 7.5% of its set point. It  protects the GaAsFET by not allowing power to be applied to the GaAsFET's drain until it is properly biased. The signal can be routed either to a microcontroller  or  directly  to  a  switch  at  the  GaAsFET  drain.  The MAX881R is available in a 10-pin µMAX package.

## Applications

Cell Phones

Wireless Modems

PCS Phones

Two-Way Pagers

PHS Phones

Mobile Radios

Wireless Handsets

Wireless Computers

## Typical Operating Circuit

<!-- image -->

Features

- ♦ Small µMAX Package
- ♦ 1mVp-p Output Voltage Ripple and Noise
- ♦ Power-OK Signal to Control GaAsFET Drain Switch
- ♦ 0.05µA Logic-Controlled Shutdown
- ♦ 1ms Guaranteed Startup
- ♦ 2.5V to 5.5V Input
- ♦ -0.5V to (-VIN + 0.6V) Output at up to 4mA
- ♦ Operates with One 4.7µF and Three 0.22µF Capacitors (no inductors needed)

## Ordering Information

| PART       | TEMP RANGE     | PIN-PACKAGE   |
|------------|----------------|---------------|
| MAX881REUB | -40°C to +85°C | 10 µMAX       |

## Pin Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## Low-Noise Bias Supply in µMAX with Power-OK for GaAsFET PA

## ABSOLUTE MAXIMUM RATINGS

IN to GND.................................................................-0.3V to +6V

SHDN

to GND...........................................................-0.3V to +6V

POK

to GND ...........................................................-0.3V to +12V

C1+ to GND.................................................-0.3V to (V IN + 0.3V)

C1-, NEGOUT, OUT, FB to GND ....................-6V to (VIN + 0.3V)

Continuous Power Dissipation (TA = +70°C)

10-Pin µMAX (derate 5.6mW/°C above +70°C)...........444mW

Operating Temperature Range ...........................-40°C to +85°C

Junction Temperature......................................................+150°C

Storage Temperature Range.............................-65°C to +165°C

Lead Temperature (soldering, 10s) .................................+300°C

Note 1: The output may be shorted to NEGOUT or GND if the package power dissipation is not exceeded. Typical short-circuit current is 35mA.

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(Circuit of Figure 3, VIN = +3.6V, FB = GND, RL = ∞ , SHDN = IN, TA = -40°C to +85°C , unless otherwise noted. Typical values are at TA = +25°C.) (Note 2)

| PARAMETER                       | SYMBOL   | CONDITIONS                                                 |                                                            | MIN           | TYP           | MAX    | UNITS     |
|---------------------------------|----------|------------------------------------------------------------|------------------------------------------------------------|---------------|---------------|--------|-----------|
| Supply Voltage Range            | V IN     |                                                            |                                                            | 2.5           |               | 5.5    | V         |
| Preset Output Voltage           | V OUT    | V IN ≥ 2.7V, I OUT = 0 to 4mA                              | V IN ≥ 2.7V, I OUT = 0 to 4mA                              | -2.1          | -2.0          | -1.9   | V         |
| Adjustable Output Voltage Range | V OUT    | V IN ≥ 2.5V, I OUT = 0 to 4mA                              | V IN ≥ 2.5V, I OUT = 0 to 4mA                              | -(V IN - 0.6) | -(V IN - 0.6) | -0.5   | V         |
| FB Voltage                      | V FB     | V IN ≥ 2.5V, I OUT = 0 to 4mA                              | T A = +25°C                                                | -0.515        | -0.5          | -0.485 | V         |
| FB Voltage                      | V FB     | V IN ≥ 2.5V, I OUT = 0 to 4mA                              | T A = 0°C to +85°C                                         | -0.525        |               | -0.475 | V         |
| FB Voltage                      | V FB     | V IN ≥ 2.5V, I OUT = 0 to 4mA                              | T A = -40°C to +85°C                                       | -0.535        |               | -0.465 | V         |
| FB Input Current                |          | V FB = -0.5V                                               | V FB = -0.5V                                               |               | -10           | -100   | nA        |
| Supply Current (Note 3)         | I Q      |                                                            |                                                            |               | 500           | 950    | µA        |
| Shutdown Supply Current         | I SHUT   | SHDN = GND                                                 | SHDN = GND                                                 |               | 0.05          | 1      | µA        |
| Output Load Regulation          |          | V IN ≥ 2.7V, I OUT = 0 to 4mA                              | V IN ≥ 2.7V, I OUT = 0 to 4mA                              |               | 2             | 6      | mV/mA     |
| Output Ripple                   |          | I OUT = 4mA, circuit of Figure 3b                          | I OUT = 4mA, circuit of Figure 3b                          |               | 1             |        | mVp-p     |
| Oscillator Frequency            | f OSC    |                                                            |                                                            | 80            | 100           | 120    | kHz       |
| POK Threshold                   |          | FB = OUT                                                   | FB = OUT                                                   | 90            | 92.5          | 95     | %of V OUT |
| POK Output Level                |          | V IN ≥ 2.5V, sinking 1mA                                   | V IN ≥ 2.5V, sinking 1mA                                   |               |               | 100    | mV        |
| POK Off Leakage Current         |          | V POK = 11V                                                | V POK = 11V                                                |               |               | 1      | µA        |
| SHDN Input High Voltage         | V IH     | V IN = 5.5V                                                | V IN = 5.5V                                                | 2.2           |               |        | V         |
| SHDN Input Low Voltage          | V IL     | V IN = 2.5V                                                | V IN = 2.5V                                                |               |               | 0.35   | V         |
| SHDN Input Current              | I SHDN   | Connected to IN or GND                                     | Connected to IN or GND                                     |               |               | ±1     | µA        |
| SHDN Input Capacitance          | C IN     |                                                            |                                                            | 10            | 10            |        | pF        |
| Startup Time                    | t START  | V IN = 3V, R L = 500 Ω , V SHDN = 0 to V IN , POK goes low | V IN = 3V, R L = 500 Ω , V SHDN = 0 to V IN , POK goes low |               |               | 1      | ms        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Low-Noise Bias Supply in µMAX with Power-OK for GaAsFET PA

Typical Operating Characteristics

3

(Circuit of Figure 3, VIN = 3.6V, TA = +25°C, unless otherwise noted.)

<!-- image -->

## Low-Noise Bias Supply in µMAX with Power-OK for GaAsFET PA

## Typical Operating Characteristics (continued)

(Circuit of Figure 3, VIN = 3.6V, TA = +25°C, unless otherwise noted.)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Low-Noise Bias Supply in µMAX with Power-OK for GaAsFET PA

## Pin Description

|   PIN | NAME   | FUNCTION                                                                                                                                                                                                 |
|-------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | C1+    | Positive Terminal for C1                                                                                                                                                                                 |
|     2 | C1-    | Negative Terminal for C1                                                                                                                                                                                 |
|     3 | NEGOUT | Negative Output Voltage (unregulated)                                                                                                                                                                    |
|     4 | POK    | Active-Low, Open-Drain Power-OK Output. Goes low when OUT reaches 92.5% of its set value.                                                                                                                |
|     5 | SHDN   | Active-Low, Logic-Level Shutdown Input. Connect to IN for normal operation. Do not leave this pin unconnected.                                                                                           |
|     6 | FB     | Dual-Mode™ Feedback Input. When FB is connected to GND, the output is preset to -2V. To select other voltages, connect FB to an external resistor-divider (Figure 4). Do not leave this pin unconnected. |
|     7 | OUT    | Regulated Negative Output Voltage                                                                                                                                                                        |
|     8 | GND    | Ground                                                                                                                                                                                                   |
|     9 | N.C.   | No Connection. Not internally connected.                                                                                                                                                                 |
|    10 | IN     | Positive Power-Supply Input                                                                                                                                                                              |

Dual Mode is a trademark of Maxim Integrated Products.

<!-- image -->

Figure 1. Functional Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Low-Noise Bias Supply in µMAX with Power-OK for GaAsFET PA

Figure 2. Using the POK Function

<!-- image -->

## Detailed Description

The MAX881R, a low-noise, inverting, regulated chargepump power supply, is designed for biasing GaAsFET devices such as power-amplifier modules in cellular handsets.

The applied input voltage (VIN) is inverted to a negative voltage at NEGOUT by a capacitive charge pump. This voltage is regulated by an internal linear regulator at OUT (Figure 1). With FB connected to GND, VOUT is regulated at -2V. Alternatively, use a voltage-divider at FB to adjust the output voltage between -0.5V and -(VIN -  0.6V)  (see  the  section Setting the Output Voltage ). The internal linear regulator reduces the ripple noise induced by the charge-pump inverter to 1mVp-p at OUT (circuit of Figure 3b). In addition, the excellent AC rejection of the linear regulator attenuates noise from the incoming supply.

## Power-OK Signal

The MAX881R has an active-low, open-drain, power-OK ( POK ) output. This output goes low when OUT reaches 92.5% of the regulated output voltage. POK can be used to drive the gate of a P-MOSFET that switches power to the GaAsFET power amplifier (Figure 2), thereby ensuring that the power amplifier is not powered before the required negative bias voltage is present.

Use a 50k Ω or  larger  pull-up  resistor  to  signal  a  logic high when POK goes high impedance.

## Shutdown Mode

The MAX881R features a shutdown mode that reduces supply current to less than 1µA over temperature. SHDN is  an  active-low,  logic-level  input.  Start-up  time  coming out of shutdown mode is typically 0.5ms. OUT and NEGOUT are switched to GND in shutdown mode.

Figure 3a. Standard Application Circuit for Minimum Capacitor Values

<!-- image -->

Figure 3b. Standard Application Circuit for Minimum Output Noise

<!-- image -->

## Applications Information

## Setting the Output Voltage

Select either a fixed or adjustable output for the MAX881R. Connect FB to GND for a fixed -2V output (Figure 3). Select an alternative output voltage by connecting FB to the midpoint of a resistor-divider from OUT to GND (Figure 4). When operating under full load (4mA), the voltage at IN should be at least 0.6V higher than the absolute voltage required at OUT. Note that the minimum input voltage required for operation is 2.5V, regardless of the desired output voltage. Choose R1 to be between 100k Ω and 400k Ω and calculate R2. For greater accuracy, use resistors with 1% or better tolerance.

R2 = R1 (2 x |VOUT| - 1)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Low-Noise Bias Supply in µMAX with Power-OK for GaAsFET PA

Figure 4. Adjustable Output Configuration

<!-- image -->

## Capacitors

Use capacitors with a low effective series resistance (ESR) to maintain a low dropout voltage (VIN - |VOUT|). The overall dropout voltage is a function of the output resistance of the charge pump and the voltage drop across the linear regulator (N-channel pass transistor). At the 100kHz charge-pump switching frequency, output resistance is a function of the value of C1 and the ESR of C1 and C2. Therefore, increasing C1 and minimizing the ESR of the charge-pump capacitors minimizes dropout voltage.

The output resistance of the entire circuit (in dropout) is approximately:

<!-- formula-not-decoded -->

Where R(linear regulator) (the  output  impedance of the linear regulator) is approximately 2 Ω and RO (the resistance of the internal switches) is typically 10 Ω .  When TRANSISTOR COUNT: 413

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

regulating, the output resistance of the circuit is simply the linear-regulator load regulation (2mV/mA).

C1, C2, and C3 should be 0.22µF capacitors with less than 0.4 Ω ESR. C4 should be a 4.7µF capacitor with less than 0.1 Ω ESR. Larger capacitor values can be used (C1 = C2 = C3 = 1µF, C4 = 10µF) to reduce output noise and ripple (1mVp-p), at the expense of cost and board space. All capacitors should be either ceramic or surface-mount chip tantalum (Figures 3a and 3b).

## Layout and Grounding

Good layout is important for good noise performance. To optimize the layout:

- 1) Mount all components as close together as possible.
- 2) Keep traces short to minimize parasitic inductance and capacitance, especially connections to FB.
- 3) Use a ground plane.

## Noise and Ripple Measurement

Accurately measuring the output noise and ripple is a challenge. Slight momentary differences in ground potential between the circuit and the oscilloscope (which result from the charge pump's switching action) cause ground currents in the probes' wires, inducing sharp voltage spikes. For best results, measure directly across the output capacitor (C4). Do not use the ground lead of the probe; instead, remove the probe's tip  cover and touch the ground ring on the probe directly to C4's ground terminal. This direct connection gives the most accurate noise and ripple measurement.

## Chip Information

## Low-Noise Bias Supply in µMAX with Power-OK for GaAsFET PA

## Package Information

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information, go to www.maxim-ic.com/packages .)

|     | INCHES     | INCHES     | MILLIMETERS   | MILLIMETERS   |
|-----|------------|------------|---------------|---------------|
| DIM | MIN        | MAX        | MIN           | MAX           |
| A   | -          | 0.043      | -             | 1.10          |
| A1  | 0.002      | 0.006      | 0.05          | 0.15          |
| A2  | 0.030      | 0.037      | 0.75          | 0.95          |
| D1  | 0.116      | 0.120      | 2.95          | 3.05          |
| D2  | 0.114      | 0.118      | 2.89          | 3.00          |
| E1  | 0.116      | 0.120      | 2.95          | 3.05          |
| E2  | 0.114      | 0.118      | 2.89          | 3.00          |
| H   | 0.187      | 0.199      | 4.75          | 5.05          |
| L   | 0.0157     | 0.0275     | 0.40          | 0.70          |
| L1  | 0.037 REF  | 0.037 REF  | 0.940 REF     | 0.940 REF     |
| b   | 0.007      | 0.0106     | 0.177         | 0.270         |
| e   | 0.0197 BSC | 0.0197 BSC | 0.500 BSC     | 0.500 BSC     |
| c   | 0.0035     | 0.0078     | 0.090         | 0.200         |
| S   | 0.0196 REF | 0.0196 REF | 0.498 REF     | 0.498 REF     |
| α   | 0°         | 6°         | 0°            | 6°            |

10LUMAX.EPS

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

<!-- image -->