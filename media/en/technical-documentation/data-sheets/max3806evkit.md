<!-- lastmod 2022-08-02 -->
## General Description

The MAX3806 evaluation kit (EV kit) is an assembled and tested demonstration board that simplifies evaluation of the MAX3806 receiver for optical distance measurement. The input can be configured to evaluate the receiver with and without a photodiode. The board is powered by a +5V supply and an optional +12V supply can be used for  photodiode  reverse  bias.  Simple  2-pin  jumpers  set the operational modes. SMA connectors at the input and output provide an easy interface to test equipment.

<!-- image -->

## MAX3806 Evaluation Kit

## Features

- S Powered by +5V Supply
- S Input Configurable for Electrical and Optical Evaluation
- S Selectable +5V or +12V Photodiode Reverse Bias
- S 2-Pin Jumpers Set Operational Modes
- S SMA Connectors for Input and Output

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX3806EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                    |
|---------------|-------|----------------------------------------------------------------|
| C1            |     1 | 33µF ±10% tantalum capacitor (C case) Nichicon F931C336MCC     |
| C2, C4, C5    |     3 | 0.1µF ±10% ceramic capacitors (0603)                           |
| C3, C6        |     2 | 0.01µF ±10% ceramic capacitors (0603)                          |
| C7            |     1 | 2pF ±0.25pF ceramic capacitor (0603)                           |
| C8            |     1 | 1µF ±10% ceramic capacitor (0603)                              |
| D1            |     0 | Photodiode (not installed)                                     |
| J1, J2, J5    |     3 | Test points Keystone 5000                                      |
| J3, J4        |     2 | SMA connectors, edge-mount, round contact Johnson 142-0701-801 |
| JU1, JU2, JU3 |     3 | 1 x 2-pin headers (0.1in centers) Sullins PEC36SAAN            |

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| JU4           |     1 | 1 x 3-pin headers (0.1in centers) Sullins PEC36SAAN                       |
| L1            |     1 | Inductor (1210) Panasonic ELJ-PA470KF                                     |
| L2            |     1 | Shielded power inductor API Delevan, Inc.SDS680R-225M                     |
| R1            |     1 | 49.9ω ±1% resistor (0603)                                                 |
| R2            |     1 | 24.9kω ±1% resistor (0603)                                                |
| R3            |     1 | 499ω ±1% resistor (0603)                                                  |
| R4            |     1 | 2kω ±1% resistor (0603)                                                   |
| TP1-TP5       |     5 | Test points Keystone 5000                                                 |
| U1            |     1 | Receiver for optical distance measurement (12 TQFN-EP*) Maxim MAX3806GTC+ |
| -             |     4 | Shunts for JU1-JU4 Sullins SSC02SYAN                                      |
| -             |     1 | PCB: MAX3806 EVKIT+ REV A                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX3806 Evaluation Kit

## Quick Start

## Electrical Evaluation

- 1)     Remove bias inductor L2. This inductor is used only for optical evaluations.
- 2)     Reinstall C7 and R2, if removed previously for optical evaluation.
- 3)     Verify  jumpers  are  installed  on  JU1  (DIS)  and  JU2 (GAIN). This enables the receiver and sets the gain to 60k I .
- 4)     Remove jumper from JU3 (ATT). This sets the internal attenuator to 0dB.
- 5)     Connect  a  +5V  supply  to  J1  (+5V\_VCC)  and  J2 (GND). Set the supply current limit to 20mA.
- 6)     Connect an electrical pulse generator to the receiver input (SMA J3). Set the pulse amplitude = 258mVP (this  converts  to  10µAP  through  on-board  series 25k I resistor), width = 60ns, and period = 8µs.
- 7)     Connect  the  receiver  output  (SMA  J4)  to  a  scope. Verify the scope input is set to high impedance. The output  pulse  amplitude  should  be  approximately 600mVP.

## Optical Evaluation

- 1)     Remove C7 and R2.
- 2)     Reinstall bias inductor L2, if removed previously for electrical evaluation.
- 3)     Install  photodiode  D1  (not  included  with  EV  kit). The board layout accommodates through-hole and surface-mount photodiodes.
- 4)     Verify  jumpers  are  installed  on  JU1  (DIS)  and  JU2 (GAIN). This enables the receiver and sets the gain to 60k I .
- 5)     Remove jumper from JU3 (ATT). This sets the internal attenuator to 0dB.
- 6)     Connect  a  +5V  supply  to  J1  (+5V\_VCC)  and  J2 (GND). Set the supply current limit to 20mA.
- 7)     Move jumper to left side of JU4 (side labeled +12V).
- 8)     Connect a +12V supply to J5 (+12V\_PD\_BIAS). Set the supply current limit to 5mA.
- 9)     Set  up  an  optical pulse generator with peak amplitude = 10µW, width = 60ns, and period = 8µs. Use an  optical-to-electrical  (O/E)  converter  and  scope to verify the transmitter pulse shape and amplitude.
- 10)   Mount the EV kit in a fixture or place in a clamp and align the laser source to the photodiode.
- 11)   Connect  the  receiver  output  (SMA  J4)  to  a  scope. Verify the scope input is set to high impedance. The pulse should appear on the scope. The pulse shape and amplitude depend on multiple factors including distance and alignment to the laser source, photodiode reverse bias voltage, capacitance and responsivity of the photodiode, and scope bandwidth.

## Detailed Description

The MAX3806 EV kit is a simple board for evaluating the functionality and performance of the MAX3806 receiver. The input is configured for electrical evaluation using a passive network that emulates the response of a photodiode. A few components can be removed and a photodiode installed for optical evaluation (see the Quick Start section and Figures 1 and 2). Photodiode reverse bias is selected using a 3-pin jumper to be +5V (main board supply) or +12V, which requires a second supply. Twopin jumpers set the operating modes for gain, attenuation, and output disable (see Table 1). Input and output SMA connectors provide an easy interface to 50 I test equipment such as a pulse generator, network analyzer, spectrum analyzer, and scope.

## Photodiode Emulation

The  input  is  configured  for  electrical  evaluation  after removing bias inductor L2. The input has an on-board 50ω  termination  and  is  AC-coupled  to  the  receiver. There is a series resistor to transform voltage pulses to current pulses and a shunt capacitor connected directly at the input pin to help emulate the photodiode junction capacitance.  This  network  provides  an  electrical  interface to the IC that is similar, but not exactly the same, as a photodiode.

The input current is calculated as:

<!-- formula-not-decoded -->

VIN = source voltage terminated into 50 I

RIN = series resistor (R2) + MAX3806 input impedance

Note that the MAX3806 input impedance changes with the GAIN setting. See Table 2.

For  example,  with  GAIN  =  60k I and  ATTENUATION =  0dB, a 258mVP input voltage generates a 10µAP input current. The resulting MAX3806 output would be approximately 600mVP  (10µA  x  60k I )  when  terminated  into  a  highimpedance (2k I or greater) load.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Table 1. Jumper Settings

| COMPONENT   | NAME                     | FUNCTION                                                                                                                                                                                                                                                                                                                                                  |
|-------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1         | DIS                      | Enables/disables output OPEN = output disabled SHORT = output enabled                                                                                                                                                                                                                                                                                     |
| JU2         | GAIN                     | Selects transimpedance (gain) OPEN = 30kω gain SHORT = 60kω gain                                                                                                                                                                                                                                                                                          |
| JU3         | ATT                      | Enables/disables internal attenuator OPEN = 0dB attenuation SHORT = 14dB attenuation                                                                                                                                                                                                                                                                      |
| JU4         | PHOTO DIODE REVERSE BIAS | Selects photodiode reverse bias voltage. Setting important only when photodiode is connected. Set jumper to right side to connect photodiode cathode to +5V provided from main supply. Set jumper to left side to connect photodiode cathode to +12V provided from +12V_PD_BIAS supply. The +12V_PD_BIAS supply can be set to any voltage less than +16V. |

## Table 2. MAX3806 Input Impedance

|   GAIN (k ω ) | JUMPER JU2 SETTING   |   INPUT IMPEDANCE ( ω ) |
|---------------|----------------------|-------------------------|
|            60 | SHORT                |                     800 |
|            30 | OPEN                 |                     300 |

The  25k I series  resistor  (R2)  limits  the  input  current range. Lower value resistors can be used to test larger input  currents,  but  the  currents  should  be  limited  to 2mAP to ensure the receiver input is not damaged.

## Photodiode Installation

The  input  can  be  configured  for  optical  evaluation  by installing  a  photodiode  D1  and  removing  C7  and  R2. The  connections  to  the  photodiode  are  through-holes with large plating on the top layer to accommodate both through-hole and surface-mount photodiodes. Note that the  ground  plane  under  the  input  network  has  been removed  to  minimize  capacitance.  The  EV  kit  can  be mounted in a fixture  or  placed  in  a  clamp  to  align  the laser source to the photodiode.

## Transient Response

Transient response is most easily measured using a 50 I pulse generator and a high-impedance scope. For electrical  evaluation,  the  voltage  source  is  set  to  obtain  the desired input current and the output voltage is measured at  SMA  J4  or  test  points  TP4  and  TP5.  Make  sure  the scope is set for high impedance. If a probe is used, make the ground loop as short as possible. For optical evaluation, the laser source is set to obtain the desired input current for a given photodiode responsivity. The output is measured the same way as the electrical evaluation.

<!-- image -->

## Bandwidth Measurement

Bandwidth is most easily measured electrically using a network  analyzer  and  the  photodiode  emulation  circuit at  the  receiver  input.  The  network  analyzer  should  be calibrated at a power level ≤ -6dBm to keep the receiver in the linear range. The peak-to-peak input current with GAIN = 60k I is calculated as:

<!-- formula-not-decoded -->

where PIN(dBm) is the network analyzer power level in dBm and RIN is the series resistor (R2) + MAX3806 input impedance.

For  example,  with  PIN  =  -6dBm,  GAIN  =  60k I ,  and RIN = 25.8k I , the input current is 12µAP-P.

Note that the gain is lower than expected because the MAX3806  output  is  driving  the  network  analyzer  50 I input instead of a high-impedance load. Also note that the MAX3806 output impedance changes with ATT setting. See Table 3. The load does not affect bandwidth, but the gain with a 50 I load is needed to calculate inputreferred noise.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX3806 Evaluation Kit

## MAX3806 Evaluation Kit

## Table 3. MAX3806 Output Impedance

|   ATT (dB) | JUMPER JU3 SETTING   |   OUTPUT IMPEDANCE ( ω ) |
|------------|----------------------|--------------------------|
|          0 | OPEN                 |                       51 |
|         14 | SHORT                |                      114 |

Bandwidth can also be measured using a photodiode, but it should be noted that the photodiode capacitance limits the bandwidth of the receiver.

## Noise Measurement

Noise is most easily measured using a spectrum analyzer, such as the Agilent E4402B, that can measure channel  power  within  a  defined  frequency  band.  The  measured channel power is converted to voltage and divided by the receiver gain to obtain input-referred noise current. Note that the receiver gain is lower than expected because  the  MAX3806  output  is  driving  the  spectrum analyzer  50 I input  instead  of  a  high-impedance  load. Gain for the noise calculation should be obtained using a network analyzer before starting the noise measurement.

The receiver gain using a 50 I load is calculated as:

<!-- formula-not-decoded -->

where S21(dB) is the receiver gain in dB measured using a network analyzer and RIN is the series resistor (R2) + MAX3806 input impedance. Typically the gain is taken at  a  frequency  within  the  flat  portion  of  the  frequency response (i.e., 5MHz).

For  noise  measurements  without  a  photodiode,  the input  AC-coupling  capacitor  C3  must  be  removed  to isolate the receiver input. The trace between C3 and the receiver  input  creates  approximately  0.6pF  of  capacitance. Capacitor C7 then presents a known capacitance to the input. For noise measurements with a photodiode installed, R2 and C7 must be removed.

The input-referred noise is calculated as:

<!-- formula-not-decoded -->

where POUT(dBm) is the measured channel power with no input signal applied and INOISE has units nARMS.

For example, with settings of GAIN = 60k I and ATT = 0dB, the  measured  gain  at  5MHz  using  a  network  analyzer  (50 I load)  would  be  approximately  30k I .  Using 30k I gain  and  -54.5dBm  of  measured  channel  power (f &lt; 100MHz), results in 14nARMS input-referred noise.

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3806 Evaluation Kit

Figure 1. MAX3806 EV Kit Schematic-Electrical Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX3806 Evaluation Kit

Figure 2. MAX3806 EV Kit Schematic-Optical Configuration

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3806 Evaluation Kit

<!-- image -->

Figure 3. MAX3806 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX3806 Evaluation Kit

Figure 4. MAX3806 EV Kit PCB Layout-Component Side

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3806 Evaluation Kit

<!-- image -->

Figure 5. MAX3806 EV Kit PCB Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX3806 Evaluation Kit

Figure 6. MAX3806 EV Kit PCB Layout-Power Plane

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3806 Evaluation Kit

Figure 7. MAX3806 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.