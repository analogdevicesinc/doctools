<!-- lastmod 2022-08-03 -->
## General Description

The MAX1531 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that provides logic and bias power required for liquid crystal display (LCD) monitors. The EV kit contains a step-down switching regulator, a logic-supply linear regulator, a source-driver-supply linear regulator, a gamma-reference linear regulator, a two-stage positive charge pump and linear regulator for the TFT gate-on supply, and a one-stage negative charge pump and linear regulator  for  the  TFT  gate-off  supply.  The  source-driver supply, the gamma-reference supply, the gate-on supply, and the gate-off supply can be sequenced in any power-up order. The EV kit also includes a MAX1522 step-up switching regulator to provide a higher output voltage option for the source-driver supply and the gamma reference.

The EV kit produces the output voltages listed in the features column using a +10.5V to +24V input voltage range. The input range can be reduced to +9.5V if the included MAX1522 step-up regulator circuit is used. If lower output voltages are acceptable, the input range can be further reduced to +8V.

The EV kit features undervoltage protection for the input, overcurrent protection for the step-down switching regulator, and overload protection for the sourcedrive linear  regulator.  Operation  at  500kHz allows the use of small surface-mount components. The EV kit also evaluates the MAX1530.

## Component List

| DESIGNATION                              |   QTY | DESCRIPTION                                                       |
|------------------------------------------|-------|-------------------------------------------------------------------|
| C1, C4                                   |     2 | 1µF ± 10%, 25V X7R ceramic capacitors (0805) TDK C2012X7R1E105K   |
| C2, C23                                  |     0 | Not installed capacitors (0603)                                   |
| C3                                       |     1 | 4.7µF ± 10%, 25V X7R ceramic capacitor (1210) TDK C3225X7R1E475K  |
| C5, C6, C8, C11, C14, C15, C17, C18, C20 |     9 | 0.1µF ± 10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K |
| C7                                       |     1 | 22µF ± 20%, 6.3V X7R ceramic capacitor (1206) TDK C3216X7R0J226M  |

<!-- image -->

## Features

- ♦ Output Voltages (Input Range = +10.5V to +24V or +9.5V to +24V Using Included MAX1522 Circuit)
- +3.3V Output at 1.5A (Step-Down Switching Regulator)
- +2.5V Output at 500mA (Logic-Supply Regulator)
- +10V Output at 500mA (Source-Driver Supply Regulator)
- +9.7V Output at 50mA (Gamma-Reference Regulator)
- +25V Output at 25mA (Positive Charge Pump and Linear Regulator)
- -9V Output at 50mA (Negative Charge Pump and Linear Regulator)
- ♦ +8V to +24V Input Range (Reduced Output Voltages)
- ♦ Resistor-Adjustable Outputs
- ♦ 92% Efficiency (Step-Down Switching Regulator)
- ♦ 250kHz/500kHz Selectable Step-Down Switching Frequency
- ♦ Programmable Power-Up Sequencing
- ♦ Soft-Start for All Outputs
- ♦ Multilevel Protection
- Resistor-Adjustable Input Undervoltage Threshold

Output Undervoltage Shutdown

- Overcurrent Protection for One Linear Regulator
- Current Limit for the Step-Down Switching Regulator
- ♦ External Step-Up Switching Regulator (MAX1522) Included
- ♦ Also Evaluates the MAX1530 (IC Replacement Required)
- ♦ Low-Profile, Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE          |
|--------------|--------------|---------------------|
| MAX1531EVKIT | 0°C to +70°C | 32 TQFN (5mm x 5mm) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX1531 Evaluation Kit

| DESIGNATION    |   QTY | DESCRIPTION                                                                  |
|----------------|-------|------------------------------------------------------------------------------|
| C9             |     1 | 10µF ± 20%, 6.3V X5R ceramic capacitor (1206) TDK C3216X5R0J106M             |
| C10            |     1 | 470pF ± 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H471K             |
| C12, C19       |     2 | 0.47µF ± 10%, 16V X7R ceramic capacitors (0805) TDK C2012X7R1C474K           |
| C13, C25       |     2 | 4.7µF ± 10%, 16V X7R ceramic capacitors (1206) TDK C3216X7R1C475K            |
| C16            |     1 | 0.47µF ± 20%, 50V X7R ceramic capacitor (1210) TDK C3225X7R1H474M            |
| C21, C22       |     2 | 2.2µF ± 10%, 25V X7R ceramic capacitors (1206) TDK C3216X7R1E225K            |
| C24            |     1 | 10µF ± 20%, 25V X5R ceramic capacitor (1210) TDK C3225X5R1E106M              |
| C26            |     1 | 1µF ± 10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A105K               |
| D1, D6         |     2 | 100mA, 30V Schottky diodes (SOD- 523) Central Semiconductor CMOSH-3          |
| D2             |     1 | 1A, 30V Schottky diode (S-flat) Toshiba CRS02                                |
| D3, D4, D5     |     3 | 250mA, 100V dual diodes (SOT23) Central Semiconductor CMPD6001S              |
| D7             |     1 | 250mA, 75V high-speed silicon diode (SOD-523) Central Semiconductor CMOD4448 |
| JU1, JU12-JU16 |     6 | 3-pin headers                                                                |
| JU2, JU3       |     2 | 2-pin headers                                                                |
| JU4-JU7        |     4 | 3-way jumpers (4 pins)                                                       |
| JU8-JU11       |     4 | 4-way jumpers (5 pins)                                                       |

## Component List (continued)

| DESIGNATION       |   QTY | DESCRIPTION                                                                              |
|-------------------|-------|------------------------------------------------------------------------------------------|
| L1                |     1 | 10µH, 2.3A DC inductor Sumida CDR7D28MN-100                                              |
| L2                |     1 | 22µH, 0.90A DC inductor Sumida CDRH5D28-220                                              |
| N1                |     1 | 2.5A, 30V dual n-channel MOSFET (Super SOT-6) Fairchild Semiconductor FDC6561AN          |
| N2                |     1 | 5.2A, 30V n-channel MOSFET (Super SOT-6) Fairchild Semiconductor FDC633N                 |
| Q1, Q4            |     2 | 3A, 60V low-saturation pnp bipolar transistors (SOT-223) Fairchild Semiconductor NZT660A |
| Q2, Q3            |     2 | 200mA, 40V pnp bipolar transistors (SOT23) Central Semiconductor CMPT3906                |
| Q5, Q6            |     2 | 200mA, 40V npn bipolar transistors (SOT23) Central Semiconductor CMPT3904                |
| R1                |     1 | 17.8k Ω ± 1% resistor (0805)                                                             |
| R2, R23           |     2 | 10.7k Ω ± 1% resistors (0805)                                                            |
| R3                |     1 | 124k Ω ± 1% resistor (0805)                                                              |
| R4                |     1 | 20.0k Ω ± 1% resistor (0805)                                                             |
| R5, R6, R7, R11   |     4 | 100k Ω ± 5% resistors (0805)                                                             |
| R8, R17, R24, R27 |     4 | 6.8k Ω ± 5% resistors (0805)                                                             |
| R9, R10, R19, R32 |     4 | 10.0k Ω ± 1% resistors (0805)                                                            |
| R12               |     1 | 301k Ω ± 1% resistor (0805)                                                              |
| R13               |     1 | 221k Ω ± 1% resistor (0805)                                                              |
| R14               |     1 | 121k Ω ± 1% resistor (0805)                                                              |
| R15, R18          |     2 | 68.1k Ω ± 1% resistors (0805)                                                            |
| R16               |     1 | 43.2k Ω ± 1% resistor (0805)                                                             |
| R21               |     1 | 1.5k Ω ± 5% resistor (0805)                                                              |
| R22               |     1 | 75.0k Ω ± 1% resistor (0805)                                                             |
| R25               |     1 | 200k Ω ± 1% resistor (0805)                                                              |
| R26               |     1 | 10.5k Ω ± 1% resistor (0805)                                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                            |
|---------------|-------|--------------------------------------------------------|
| R28           |     1 | 90.9k Ω ± 1% resistor (0805)                           |
| R29           |     1 | 48.7k Ω ± 1% resistor (0805)                           |
| R30           |     1 | 1 Ω ± 5% resistor (0805)                               |
| R31           |     1 | 110k Ω ± 1% resistor (0805)                            |
| R33           |     1 | 0.050 Ω ± 1% resistor (1206) IRC LRC-LR 1206-01-R050-F |
| R34           |     0 | Not installed resistor (0805)                          |
| R35, R36      |     2 | 1.00 Ω ± 1% resistors (0805)                           |
| R37, R38      |     2 | 10 Ω ± 5% resistors (0805)                             |
| R39-R42       |     4 | 2.0k Ω ± 5% resistors (0805)                           |
| U1            |     1 | MAX1531ETJ (32-pin TQFN)                               |
| U2            |     1 | MAX1522EUT-T (6-pin SOT23)                             |
| None          |    16 | Shunts (see table for jumper settings)                 |
| None          |     1 | MAX1531 PC board                                       |

## Quick Start

The MAX1531 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

The MAX1531 EV kit operates with up to +24V inputs. However, due to external-component voltage stress limitations, default jumper configurations must be modified for  operation above +13.2V. See the Positive Charge Pump and Gate-On Linear Regulator Output Voltage (GON) sections.

## Recommended Equipment

- +10.5V to +13.2V, 2A DC power supply
- One voltmeter
- 1) Verify that a shunt is across pins 1 and 2 of jumpers JU1, JU10, and JU12.
- 2) Verify that there are no shunts across jumpers JU2 and JU3.

## MAX1531 Evaluation Kit

- 3) Verify that a shunt is across pins 1 and 3 of jumpers JU4, JU5, JU6, JU7, and JU8.
- 4) Verify that a shunt is across pins 1 and 5 of jumper JU9.
- 5) Verify that a shunt is across pins 1 and 4 of jumper JU11.
- 6) Verify that a shunt is across pins 2 and 3 of jumpers JU13, JU14, JU15, and JU16.
- 7) Connect the positive terminal of the input power supply to the PIN pad. Connect the negative terminal of the input power supply to the PGND pad.
- 8) Turn on the power supply and verify that the stepdown regulator output (VOUT) is +3.3V.
- 9) Verify  that  the  internal  5V  linear  regulator  output (VL) is +5V.
- 10) Verify  that  the  logic-supply  linear  regulator  output (VLOG) is +2.5V.
- 11) Verify that the source-driver-supply linear regulator output (VSRC) is +10V.
- 12) Verify  that  the  gamma-reference linear regulator output (VGAM) is +9.7V.
- 13) Verify that the gate-on linear regulator output (GON) is +25V.
- 14) Verify that the gate-off linear regulator output (GOFF) is -9V.

For instructions on selecting the feedback resistors for other output voltages, see the Output Voltage Selection section.

## Detailed Description

The MAX1531 EV kit contains a step-down switching regulator, a linear regulator for a low-voltage logic supply,  a  high-current  linear  regulator  for  a  source-driver supply, a linear regulator for a gamma reference, a twostage positive charge pump with a positive high-voltage linear regulator, and a one-stage negative charge pump with a negative linear regulator. The EV kit operates from a +10.5V and +24V DC power supply, which

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Fairchild             | 888-522-5372 | -            | www.fairchildsemi.com |
| IRC                   | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Sumida                | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| TDK                   | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Toshiba               | 949-455-2000 | 949-859-3963 | www.toshiba.com/taec  |

Note:

Indicate you are using the MAX1530/MAX1531 when contacting these manufacturers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1531 Evaluation Kit

can provide at least 2A. The step-down switching regulator's  switching frequency is jumper configurable between 250kHz and 500kHz. The adjustable input undervoltage protection (EN) protects the EV kit from undervoltage conditions. The step-up switching regulator and the source-drive regulator are protected against overloads.

The step-down switching regulator (VOUT) generates a +3.3V output and can provide at least 1.5A. The stepdown switching-regulator output voltage can be adjusted as low as +1.24V using different feedback resistors (see the Output Voltage Selection section).

The logic voltage supply (VLOG) is set to +2.5V using a linear  regulator  controller  and  an  external  pnp  bipolar pass transistor. This logic voltage supply can provide at least 500mA of current. The logic-voltage-supply linear regulator's output can be adjusted between +1.24V and its input supply, which is the step-down regulator's output voltage (see the Output Voltage Selection section).

The source-driver supply (VSRC) is set to +10V using a linear  regulator  controller  and  an  external  pnp  bipolar pass transistor. This source-driver supply can provide at least 500mA of current. The source-drive linear regulator's output can be adjusted between +1.24V and its input voltage, which is either the EV kit input voltage (PIN) or the output of the MAX1522 step-up regulator, depending on jumper JU15 (see the Output Voltage Selection section).

The gamma reference (VGAM) is set to +9.7V using a linear regulator controller and an external pnp bipolar pass transistor. This gamma reference can provide at least 50mA of current. The gamma linear regulator's output can be adjusted between +1.24V and its input voltage, which is either the EV kit input voltage (PIN) or the output of the MAX1522 step-up regulator, depending on jumper JU14 (see the Output Voltage Selection section).

The TFT gate-on supply (GON) uses a two-stage positive charge pump to generate approximately +33V. The output is postregulated to +25V using a linear regulator controller  and  an  external  pnp  bipolar  pass  transistor and can provide at least 25mA. The positive linear regulator's output can be adjusted between +1.24V and its input, which depends on the EV kit's input voltage and the charge-pump configuration, jumpers JU12 and JU13 (see the Output Voltage Selection section).

The TFT gate-off supply (GOFF) uses a negative charge pump to generate approximately -11V. The output is postregulated to -9V using a linear regulator controller and an external npn bipolar pass transistor and can provide greater than 50mA. The negative linear regulator's output can be adjusted between 0V and its input volt- age, which is the output of the negative charge pump (see the Output Voltage Selection section).

The EV kit also features power-up sequencing. After EN and SEQ go high, the logic voltage supply (VLOG) softstarts.  The  gamma reference, the gate-on supply, the source-driver supply, and the gate-off supply can softstart in any sequence by setting the appropriate jumpers (see the Power-Up Sequencing section).

The EV kit includes a current-limit circuit for the stepdown switching regulator. The current-limit threshold is set by resistor-dividers R12, R13, and the RDS(on) of MOSFET N1 (refer to the MOSFET Selection and Current-Limit Setting section in the MAX1531 data sheet for further detail). The EV kit also includes current overload protection for the source-driver supply voltage. The MAX1531 will shut down if the source-driver supply exceeds a current threshold. The output current overload threshold is set by sense resistors R35 and R36 (refer  to  the Overcurrent Protection Block (CSH, CSL) section in the MAX1531 data sheet for further detail).

## Jumper Selection

## Enable (EN)

The MAX1531 features an enable (EN) pin that enables or  disables the MAX1531 and the EV kit's output. The EN pin can also be used with resistor-dividers R3 and R4 to set the lower limit of the input voltage range (refer to the On/Off Control (EN) section in the MAX1531 data sheet for further detail). The 3-pin jumper JU1 provides an option to enable, disable, or use the undervoltage threshold feature for the MAX1531 EV kit. Table 1 lists the selectable jumper options.

Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | EN PIN                                                | MAX1531 (U1) IC STATUS   |
|------------------|-------------------------------------------------------|--------------------------|
| None             | Connected to GND                                      | Disabled                 |
| 1-2 (Default)    | Connected to PIN through resistor- dividers R3 and R4 | Enabled when V PIN > 9V  |
| 2-3              | Connected to VL                                       | Enabled                  |

## Switching Frequency Selection (FREQ)

The MAX1531 EV kit features an option to choose the step-down switching regulator's operating frequency (JU2). Table 2 lists the selectable jumper options. The EV kit is configured for 500kHz operation. Optimum performance at 250kHz requires a larger inductor value (refer to the Inductor Selection section in the MAX1531 data sheet).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 2. Jumper JU2 Functions

| SHUNT LOCATION   | FREQ PIN                   | MAX1531 EV KIT FREQUENCY   |
|------------------|----------------------------|----------------------------|
| Installed        | Connected to GND           | Frequency = 250kHz         |
| None (Default)   | Connected to VL through R5 | Frequency = 500kHz         |

## Power-Up Sequencing (SEQ)

The EV kit features adjustable power-up sequencing for several of the linear regulators. After the MAX1531's EN pin goes high, the internal VL linear regulator starts up and the step-down switching regulator soft-starts. When the step-down regulator reaches regulation, the logic-voltage-supply linear regulator (VLOG) and the sequence block that controls the other four linear regulators  are  simultaneously  enabled. The logic regulator soft-starts  immediately but the sequence block starts only if SEQ is high. SEQ is controlled by JU3.

Each linear regulator soft-starts individually when it is enabled. After SEQ goes high, the ONL2 to ONL5 pins each source current into C11, which controls the overall time for startup. Resistors R14, R15, and R16 determine the startup spacing between the respective regulator and JU8 to JU11 determine the startup order. Each regulator starts after SEQ is high and its ONL\_ pin

Table 4. ONL2 Setting (JU4 and JU8)

| JU4 SHUNT LOCATION   | JU8 SHUNT LOCATION   | ONL2 PIN                    | SEQUENCING MODE                                                                                                                                        |
|----------------------|----------------------|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-2                  | Don't Care           | Connected to VL through R39 | Gamma linear regulator enabled immediately if JU3 is removed (SEQ = high) and step-down switching regulator soft-start is finished. Sequence not used. |
| 1-4                  | Don't Care           | Connected to GND            | Gamma linear regulator disabled.                                                                                                                       |
| 1-3 (Default)        | 1-2                  | Connected to R14            | Gamma linear regulator soft-starts about 6ms after sequence block enabled.                                                                             |
| 1-3 (Default)        | 1-3 (Default)        | Connected to R15            | Gamma linear regulator soft-starts about 9ms after sequence block enabled.                                                                             |
| 1-3 (Default)        | 1-4                  | Connected to R16            | Gamma linear regulator soft-starts about 12ms after sequence block enabled.                                                                            |
| 1-3 (Default)        | 1-5                  | Connected to C11            | Gamma linear regulator soft-starts about 15ms after sequence block enabled.                                                                            |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1531 Evaluation Kit

Table 3. Jumper JU3 Function

| SHUNT LOCATION   | SEQ PIN                    | MAX1531 STATE                                                                                                                                                                                                        |
|------------------|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Installed        | Connected to GND           | Sequence block disabled. VSRC, VGAM, GON, and GOFF disabled, regardless of ONL2 to ONL5 voltage levels.                                                                                                              |
| None (Default)   | Connected to VL through R6 | Sequence block enabled. Each ONL_ sources 2µA. VGAM soft-starts when ONL2 reaches 1.24V. GON soft-starts when ONL3 reaches 1.24V. VSRC soft-starts when ONL4 reaches 1.24V. GOFF soft-starts when ONL5 reaches 1.24V |

exceeds 1.24V. JU4 to JU7 enable immediate startup of their respective regulator after the step-down regulator  reaches regulation and SEQ is high, without additional  delay.  (See  the Power-Up Sequencing section.) See Tables 3 through 7 for configuring the jumpers.

## MAX1531 Evaluation Kit

## Table 5. ONL3 Setting (JU5 and JU9)

| JU5 SHUNT LOCATION   | JU9 SHUNT LOCATION   | ONL3 PIN                    | SEQUENCING MODE                                                                                                                                      |
|----------------------|----------------------|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-2                  | Don't Care           | Connected to VL through R40 | GON linear regulator enabled immediately if JU3 is removed (SEQ = high) and step-down switching regulator soft-start is finished. Sequence not used. |
| 1-4                  | Don't Care           | Connected to GND            | GON linear regulator disabled.                                                                                                                       |
| 1-3 (Default)        | 1-2                  | Connected to R14            | GON linear regulator soft-starts about 6ms after sequence block enabled.                                                                             |
| 1-3 (Default)        | 1-3                  | Connected to R15            | GON linear regulator soft-starts about 9ms after sequence block enabled.                                                                             |
| 1-3 (Default)        | 1-4                  | Connected to R16            | GON linear regulator soft-starts about 12ms after sequence block enabled.                                                                            |
| 1-3 (Default)        | 1-5 (Default)        | Connected to C11            | GON linear regulator soft-starts about 15ms after sequence block enabled.                                                                            |

## Table 6. ONL4 Setting (JU6 and JU10)

| JU6 SHUNT LOCATION   | JU10 SHUNT LOCATION   | ONL4 PIN                    | SEQUENCING MODE                                                                                                                                       |
|----------------------|-----------------------|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-2                  | Don't Care            | Connected to VL through R41 | VSRC linear regulator enabled immediately if JU3 is removed (SEQ = high) and step-down switching regulator soft-start is finished. Sequence not used. |
| 1-4                  | Don't Care            | Connected to GND            | VSRC linear regulator disabled.                                                                                                                       |
| 1-3 (Default)        | 1-2 (Default)         | Connected to R14            | VSRC linear regulator soft-starts about 6ms after sequence block enabled.                                                                             |
| 1-3 (Default)        | 1-3                   | Connected to R15            | VSRC linear regulator soft-starts about 9ms after sequence block enabled.                                                                             |
| 1-3 (Default)        | 1-4                   | Connected to R16            | VSRC linear regulator soft-starts about 12ms after sequence block enabled.                                                                            |
| 1-3 (Default)        | 1-5                   | Connected to C11            | VSRC linear regulator soft-starts about 15ms after sequence block enabled.                                                                            |

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 7. ONL5 Setting (JU7 and JU11)

| JU7 SHUNT LOCATION   | JU11 SHUNT LOCATION   | ONL5 PIN                    | SEQUENCING MODE                                                                                                                                       |
|----------------------|-----------------------|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-2                  | Don't Care            | Connected to VL through R42 | GOFF linear regulator enabled immediately if JU3 is removed (SEQ = high) and step-down switching regulator soft-start is finished. Sequence not used. |
| 1-4                  | Don't Care            | Connected to GND            | GOFF linear regulator disabled.                                                                                                                       |
| 1-3 (Default)        | 1-2                   | Connected to R14            | GOFF linear regulator soft-starts about 6ms after sequence block enabled.                                                                             |
| 1-3 (Default)        | 1-3                   | Connected to R15            | GOFF linear regulator soft-starts about 9ms after sequence block enabled.                                                                             |
| 1-3 (Default)        | 1-4 (Default)         | Connected to R16            | GOFF linear regulator soft-starts about 12ms after sequence block enabled.                                                                            |
| 1-3 (Default)        | 1-5                   | Connected to C11            | GOFF linear regulator soft-starts about 15ms after sequence block enabled.                                                                            |

## Positive Charge Pump

The positive charge pump of the MAX1531 EV kit powers the GON linear regulator and features an option to cascade up to two charge-pump stages. The charge pump's first stage can be connected to PIN or VOUT, and the charge pump's second stage can be connected to PIN or the previous stage. Jumpers JU12 and JU13 configure the number of stages and select the voltage source for the positive charge pump on the MAX1531 EV kit. Tables 8 and 9 list the jumper options. The default configuration of the positive charge pump of  the  MAX1531 EV kit is a two-stage charge pump

powered from PIN as indicated in Tables 8 and 9.

Since the positive charge pump powers the GON linear regulator, ensure that the combination of the chargepump configuration and the input voltage range (PIN) does not over stress the GON linear regulator's external pass transistor. The VCEO maximum rating of the MMBT3904 used on this EV kit is 40V. If the input voltage (PIN) exceeds +13.2V, either reconfigure the charge pump (using JU12 and JU13) as a two-stage charge pump from VOUT or a one-stage charge pump from PIN, as appropriate, or select a higher-voltagerated transistor for Q3. Also, if higher charge-pump voltages are required, ensure that Q6 and C15 are not over stressed. Refer to the Charge Pumps section of the MAX1531 data sheet for more information on selecting a charge-pump configuration.

<!-- image -->

Table 8. Jumper JU12 Functions

| SHUNT LOCATION   | 1ST STAGE POSITIVE CHARGE PUMP   | OPERATING MODE                                            |
|------------------|----------------------------------|-----------------------------------------------------------|
| 1-2 (Default)    | Connected to PIN                 | First stage of a two-stage charge pump connected to PIN.  |
| 2-3              | Connected to VOUT                | First stage of a two-stage charge pump connected to VOUT. |
| None             | Not used                         | The first stage is not used for one-stage charge pumps.   |

Table 9. Jumper JU13 Functions

| SHUNT LOCATION   | 2ND STAGE POSITIVE CHARGE PUMP                 | OPERATING MODE                          |
|------------------|------------------------------------------------|-----------------------------------------|
| 1-2              | Connected to PIN                               | One-stage charge pump connected to PIN. |
| 2-3 (Default)    | Connected to previous stage charge-pump output | Last stage of a two-stage charge pump.  |
| None             | Not used                                       | Charge pump not used.                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1531 Evaluation Kit

## MAX1531 Evaluation Kit

## VGAM Power Supply

The power supply for the VGAM linear regulator can be connected to PIN or STEP\_UP. PIN is the input voltage for  the  EV  kit.  STEP\_UP  is  the  output  of  the  MAX1522 step-up switching regulator circuit on the EV kit. Jumper JU14 selects the power supply for the VGAM linear  regulator  on  the  MAX1531 EV kit. Table 10 lists the jumper options.

## Table 10. Jumper JU14 Functions

| SHUNT LOCATION   | VGAM POWER SUPPLY    | OPERATING MODE                                                  |
|------------------|----------------------|-----------------------------------------------------------------|
| 1-2              | Connected to STEP_UP | VGAM powered from the output of the MAX1522 step- up regulator. |
| 2-3 (Default)    | Connected to PIN     | VGAM powered from PIN.                                          |
| None             | Not used             | VGAM not used.                                                  |

## VSRC Power Supply

The power supply for the VSRC linear regulator can be connected to PIN or STEP\_UP. PIN is the input voltage for  the  EV  kit.  STEP\_UP  is  the  output  of  the  MAX1522 step-up switching regulator circuit on the EV kit. Jumper JU15 selects the power supply for the VSRC linear  regulator  on  the  MAX1531 EV kit. Table 11 lists the jumper options.

Table 11. Jumper JU15 Functions

| SHUNT LOCATION   | VSRC POWER SUPPLY    | OPERATING MODE                                                  |
|------------------|----------------------|-----------------------------------------------------------------|
| 1-2              | Connected to STEP_UP | VSRC powered from the output of the MAX1522 step- up regulator. |
| 2-3 (Default)    | Connected to PIN     | VSRC powered from PIN.                                          |
| None             | Not used             | VSRC not used.                                                  |

## The MAX1522 Step-Up Circuit

The MAX1531 EV kit includes a MAX1522 step-up switching regulator. This regulator is not generally needed, but is provided as a convenience for applications  where the input voltage (PIN) can be less than VSRC. If the step-up is needed, enable the MAX1522

## Table 12. Jumper JU16 Functions

| SHUNT LOCATION   | MAX1522 SHDN PIN   | MAX1522 OPERATING MODE   |
|------------------|--------------------|--------------------------|
| 1-2              | Connected to VOUT  | Enabled                  |
| 2-3 (Default)    | Connected to GND   | Disabled                 |

using JU16 and set JU14 and JU15 so that VGAM and VSRC use the step-up's output.

## Output Voltage Selection

## Step-Down Switching-Regulator Output Voltage (VOUT)

The MAX1531 EV kit's step-down switching-regulator output (VOUT) is set to +3.3V by feedback resistors R1 and R2. To generate output voltages other than +3.3V (from +1.24V up to 0.6 x VPIN), select different external voltage-divider resistors (R1, R2). Output capacitor C7 is rated to +6.3V. To set the output voltage greater than +6.3V, use a higher-voltage-rated capacitor. Refer to the Main  Step-Down  Regulator  Output  Voltage Selection section in the MAX1531 data sheet for instructions on selecting the resistors.

## Logic-Voltage-Supply Linear Regulator Output Voltage (VLOG)

The MAX1531 EV kit's logic-voltage-supply linear regulator output (VLOG) is set to +2.5V by feedback resistors  R9  and R10. To generate output voltages other than +2.5V (from +1.24V up to VOUT) select different external voltage-divider resistors (R9, R10). Output capacitor C9 is rated to +6.3V. To set the output voltage greater than +6.3V, use a higher-voltage-rated capacitor. Refer to the Linear-Regulator Controllers Output Voltage Selection section in the MAX1531 data sheet for instructions on selecting the resistors.

## Gamma-Reference Linear Regulator Output Voltage (VGAM)

The MAX1531 EV kit's gamma-reference linear regulator output (VGAM) is set to +9.7V by feedback resistors R18 and R19. To generate output voltages other than +9.7V (from +1.24V up to its input voltage) select different external voltage-divider resistors (R18, R19). Output capacitor C12 is rated to +16V. To set the output voltage greater than +16V, use a higher-voltage-rated capacitor. Refer to the Linear-Regulator Controllers Output Voltage Selection section in the MAX1531 data sheet for instructions on selecting the resistors.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Gate-On Linear Regulator Output Voltage (GON)

The MAX1531 EV kit's gate-on linear regulator output (GON) is set to +25V by feedback resistors R25 and R26. To generate output voltages other than +25V (from +1.24V up to the linear regulator's input, which is the output of the positive charge pump), select different external voltage-divider resistors (R25, R26). Take care not to exceed either the pnp pass transistor's VCEO rating (40V) or the output capacitor's (C16) +50V rating.

Before GON is enabled, Q3 is off and the positive charge pump's full output voltage is present across Q3. If the input voltage (PIN) exceeds 13.2V, do not power the EV kit with the charge pump configured as a twostage charge pump powered from PIN, as Q3's 40V rating will be exceeded. Configure JU12 and JU13 for a two-stage charge pump powered from VOUT or as a one-stage charge pump powered from PIN, whichever is appropriate. Alternatively, select a different transistor for  Q3 and possibly Q6, which must withstand the same voltage, minus VPIN. If VPIN exceeds +20V, even a one-stage charge pump will exceed +40V, so either change Q3 or disable the charge pump entirely and power the linear regulator directly from PIN, whichever is appropriate.

Refer to the Linear-Regulator Controllers Output Voltage Selection section in the MAX1531 data sheet for instruction on selecting the voltage-divider resistors. Also, refer to the Charge Pumps section for more information about configuring the positive charge pump.

<!-- image -->

## MAX1531 Evaluation Kit

## Source-Supply Linear Regulator Output Voltage (VSRC)

The MAX1531 EV kit's source-supply linear regulator output (VSRC) is set to +10V by feedback resistors R22 and R23. To generate output voltages other than +10V (from +1.24V up to its input voltage) select different external voltage-divider resistors (R22, R23). Output capacitor C13 is rated to +16V. To set the output voltage greater than +16V, use a higher-voltage-rated capacitor. Refer to the Linear-Regulator Controllers Output Voltage Selection section in the MAX1531 data sheet for instructions on selecting the resistors.

## Gate-Off Linear Regulator Output Voltage (GOFF)

The MAX1531 EV kit's negative linear regulator output (GOFF) is set to -9V by feedback resistors R28 and R29. To generate output voltages other than -9V (0V down to its input voltage), select different external voltage-divider resistors (R28, R29). Output capacitor C19 is rated to -16V. To set the output voltage below -16V, use a higher-voltage-rated capacitor. Refer to the Linear-Regulator Controllers Output Voltage Selection and Charge Pumps sections in the MAX1531 data sheet for instructions on selecting the resistors.

## Evaluating the MAX1530

The MAX1531 EV kit can also evaluate the MAX1530. To  evaluate  the  MAX1530,  replace  U1  with  the MAX1530. Refer to the MAX1530/MAX1531 data sheets for additional information.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1531 Evaluation Kit

Figure 1. MAX1531 EV Kit Schematic-Sheet 1 of 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1531 Evaluation Kit

<!-- image -->

Figure 2. MAX1531 EV Kit Schematic-Sheet 2 of 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1531 Evaluation Kit

<!-- image -->

Figure 3. MAX1531 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 5. MAX1531 EV Kit PC Board Layout-GND Layer 2

Figure 4. MAX1531 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 6. MAX1531 EV Kit PC Board Layout-VCC Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1531 Evaluation Kit

Figure 7. MAX1531 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

13