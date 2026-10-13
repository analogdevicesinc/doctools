<!-- lastmod 2022-08-04 -->
## General Description

The MAX1972 evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX1970 family  of  dual  step-down regulators. The circuit operates from an input voltage of 2.6V to 5.5V, and delivers a minimum of 750mA on each output. The output voltages are programmable from 0.8V to VIN using external feedback resistors, or they can be preset to 3.3V or 1.8V for output 1, and 2.5V or 1.5V for output 2. The board has a MAX1972 installed, but it can also be used to  evaluate the MAX1970 and the MAX1971. The MAX1971 features a reset input (RSI), while the MAX1970/MAX1972 feature a power-fail output (PFO).

## Selector Guide

| PART       | POR DELAY TIME (TYP)   | RSI   | PFO   | FREQUENCY   |
|------------|------------------------|-------|-------|-------------|
| MAX1970EEE | 16.6ms                 | No    | Yes   | 1.4MHz      |
| MAX1971EEE | 175ms                  | Yes   | No    | 0.7MHz      |
| MAX1972EEE | 175ms                  | No    | Yes   | 1.4MHz      |

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE             |
|-------------|--------------|---------------------|
| Murata      | 770-436-1300 | www.murata.com      |
| Sumida      | 847-956-0666 | www.sumida.com      |
| Taiyo-Yuden | 408-573-4150 | www.taiyo-yuden.com |

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| C1            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (1206) Taiyo-Yuden JMK316BJ106ML  |
| C2, C3        |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Taiyo-Yuden EMK107BJ104KA |
| C4, C7        |     2 | 620pF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM39X7R621K050AD  |
| C5, C6        |     2 | 10µF ±20%, 4V X5R ceramic capacitors (0805) Taiyo-Yuden AMK212BJ106MG   |
| JU1, JU2, JU3 |     3 | 3-pin headers                                                           |

## MAXI

<!-- image -->

## Features

- ♦ Current-Mode, 1.4MHz Fixed-Frequency PWM Operation
- ♦ Dual-Output 180° Out-of-Phase Operation Reduces Input Ripple Current
- ♦ ±1% Output Accuracy Over Load, Line, and Temperature Ranges
- ♦ 750mA Guaranteed Output Current
- ♦ 2.6V to 5.5V Input
- ♦ Power-On Reset Output ( POR )
- ♦ Power-Fail Output (MAX1970 and MAX1972)
- ♦ Power-On Reset Input (MAX1971)
- ♦ Ultra-Compact Design with Small External Components
- ♦ Outputs Adjustable from 0.8V to VIN
- ♦ 1.8V/3.3V and 1.5V/2.5V Preset
- ♦ All Ceramic Capacitor Application
- ♦ Soft-Start Reduces Inrush Current
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX1972EVKIT | -40°C to +85°C | 16 QSOP      |

Note: To evaluate the MAX1970 or MAX1971, request free samples of these parts with the MAX1972EVKIT.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| L1, L2        |     2 | 4.7µH ± 30% , 0.9A, 80m Ω i nd uctor s S um i d a C D RH 3D 16- 4R7 |
| R1            |     1 | 10 Ω ±5% resistor (0603)                                            |
| R2, R3        |     2 | 100k Ω ±5% resistors (0603)                                         |
| R4            |     1 | 82k Ω ±5% resistor (0603)                                           |
| R5, R8        |     2 | 0 Ω resistors (0603)                                                |
| R6, R9, R10   |     0 | Not installed                                                       |
| R7            |     1 | 39k Ω ±5% resistor (0603)                                           |
| U1            |     1 | MAX1972EEE (16-pin QSOP)                                            |
| None          |     3 | Shunts                                                              |
| None          |     1 | MAX1972EVKIT PC board                                               |
| None          |     1 | MAX1970/MAX1971/MAX1972 data sheet                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX1972 Evaluation Kit

## Quick Start

The MAX1972 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Connect a voltmeter and load from OUT1 to GND, and another voltmeter and load from OUT2 to GND.
- 2) Verify the JU1 shunt is across pins 1 and 2.
- 3) Connect the input supply (preset to 2.6V to 5.5V) to the pads marked IN and GND.
- 4) Configure JU2 and JU3 for desired output voltages (see Table 1 and Table 2).
- 5) Turn on the power supply and verify the output voltages.

## Detailed Description

## Jumper Selection

## EN Function

JU1 is used to enable shutdown mode (see Table 3). For normal device operation, connect the JU1 shunt between pins 1 and 2. To place the part in shutdown mode, connect the JU1 shunt between pins 2 and 3. This turns off both outputs and reduces the input supply current to approximately 1µA.

## Preset Output Voltages

Each output can be set to one of two preset voltages. This is done by using JU2 and JU3. See Table 1 and Table 2 for the output voltages and corresponding jumper settings.

The installed compensation resistors (R4 and R7) are selected for VOUT1 = 3.3V and VOUT2 = 1.5V. For best performance, these need to be changed for different output  voltages.  Refer  to  the  MAX1970/MAX1971/ MAX1972 data sheet for details on selecting compensation components.

## Table 1. JU2 Functions

| SHUNT LOCATION   | FBSEL1 PIN    | OUT1                    |
|------------------|---------------|-------------------------|
| 1, 2             | V CC          | 3.3V                    |
| 2, 3             | GND           | 1.8V                    |
| None             | Not Connected | Adjustable 0.8V to V IN |

## Table 2. JU3 Functions

| SHUNT LOCATION   | FBSEL2 PIN    | OUT2                    |
|------------------|---------------|-------------------------|
| 1, 2             | V CC          | 2.5V                    |
| 2, 3             | GND           | 1.5V                    |
| None             | Not Connected | Adjustable 1.2V to V IN |

## Table 3. JU1 Functions

| SHUNT LOCATION   | FBSEL3 PIN   | OUT3     |
|------------------|--------------|----------|
| 1, 2             | V CC         | Enabled  |
| 2, 3             | GND          | Shutdown |

## Adjusting the Output Voltage

In addition to two preset output voltages, OUT1 can be set to any voltage between 0.8V and VIN, and OUT2 can bet set to any voltage between 1.2V and VIN. For output voltages greater than 3.3V, change the output capacitors (C5 and C6) to higher-voltage-rated capacitors such as Taiyo-Yuden JMK316BJ106ML (10µF, 6.3V).

Use the following procedure to set the voltage of OUT1 from 1.2V to VIN:

- 1) Remove the shunt from JU2.
- 2) Remove R5.
- 3) Select a resistor value for R6 from 10k Ω to 30k Ω .
- 4) Calculate a resistor value for R5 from:

<!-- formula-not-decoded -->

- 5) Install the selected resistors R5 and R6.

Use the following procedure to set the voltage of OUT2 from 1.2V to VIN:

- 1) Remove the shunt from JU3.
- 2) Remove R8.
- 3) Select a resistor value for R9 from 10k Ω to 30k Ω .
- 4) Calculate a resistor value for R8 from:

<!-- formula-not-decoded -->

- 5) Install the selected resistors R8 and R9.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

If VOUT2 &gt; 1.2V, then VOUT1 can be set to a voltage as low as 0.8V. Use the following procedure to set VOUT1:

- 1) Remove the shunt from JU2.
- 2) Remove R6 (if installed).
- 3) Remove R5.
- 4) Make sure that VOUT2 is set to a value greater than 1.2V (either using a voltage preset or a resistordivider).
- 5) Select R5 and R10 so the current is about 100µA flowing through R5 and R10:

<!-- formula-not-decoded -->

- 6) Calculate a resistor value for R5 from:

<!-- formula-not-decoded -->

- 7) Install the selected resistors R5 and R10.

The installed compensation resistors (R4 and R7) are selected for VOUT1 = 3.3V and VOUT2 = 1.5V. For best performance, these need to be changed for different output voltages. Refer to the MAX1970/MAX1971/ MAX1972 data sheet for details on selecting compensation components.

## Evaluating Power-On Reset ( POR )

POR is  an  output  that  provides  a  delayed  signal  after the outputs reach 92% of their regulated voltages after startup. Refer to the MAX1970/MAX1971/MAX1972 data sheet for details of this feature. A POR pad is provided on the evaluation kit so that this feature can be tested.

## Evaluating Power-Fail Output (MAX1970/MAX1972)

Power-fail output (PFO) is a feature of the MAX1970 and MAX1972.  PFO is an output that is typically used to  indicate  that  the  IC's  input  voltage  has  dropped below  3.94V.  Refer  to  the  MAX1970/MAX1971/ MAX1972 data sheet for details of this feature.

Note: The RSI/PFO pad is used for RSI when the MAX1971 is installed. With the MAX1970 or MAX1972 installed, the RSI/PFO pad is used for PFO.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1972 Evaluation Kit

## Evaluating the MAX1970 or MAX1971

Although the MAX1972 evaluation kit is assembled with the MAX1972, it can also be used to evaluate the MAX1970 and the MAX1971. Free samples of these parts can be obtained from Maxim. To evaluate the MAX1970/MAX1971,  first  carefully  remove  the MAX1972,  and  replace  it  with  the  MAX1970  or MAX1971. For the MAX1971 only, remove R3. Use Figure 2 to locate these pads.

Since the MAX1971 operates at 700kHz, external components may need to be optimized. Refer to the MAX1970/MAX1971/MAX1972 data sheet for details on selecting these components.

## Evaluating Reset Input (MAX1971)

Reset input (RSI) is an input available only on the MAX1971. To evaluate the MAX1971, first follow the procedure given in the Evaluating the MAX1970 or MAX1971 section. This input is normally held low. A positive pulse on the RSI/PFO pad causes the POR function to reset.

Note: The RSI/PFO pad is used for RSI when the MAX1971 is installed. With the MAX1970 or MAX1972 installed, the RSI/PFO pad is used for PFO.

## MAX1972 Evaluation Kit

Figure 1. MAX1972 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX1972 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1972 Evaluation Kit

Figure 3. MAX1972 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1972 Evaluation Kit

Figure 4. MAX1972 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->