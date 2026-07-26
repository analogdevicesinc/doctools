<!-- lastmod 2022-08-03 -->
## General Description

The MAX1997 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that provides voltages and features required for active-matrix thin-film transistor  (TFT)  liquid-crystal  displays.  The  EV  kit  contains  a  step-up  switching regulator, a positive threestage charge pump and linear regulator for the TFT gate-on supply, a negative three-stage charge pump and linear regulator for the TFT gate-off supply, a gamma reference, a low-voltage logic supply, and a high-current backplane buffer. The gate-on supply, gate-off  supply,  and  gamma reference supply can be sequenced in any power-up order.

The EV kit operates from a DC supply voltage of +2.7V to +5.5V. The step-up switching regulator is configured for  a  +9V  output  providing  up  to  250mA.  The  positive charge pump and regulator are configured for a +20V output using two charge-pump stages providing up to 10mA. The negative charge pump and regulator are configured for a -7V output using a single charge-pump stage providing up to 10mA. The gamma reference is configured for +8.6V providing up to 10mA. The lowvoltage logic linear-regulator is configured for +2.5V, providing up to 200mA. The backplane buffer is configured for +4.3V and can source or sink current peaks more than 300mA.

The MAX1997 EV kit demonstrates low-quiescent current and high efficiency (85%) for maximum battery life. The EV kit features overload protection for the input and all  outputs. Operation at 1.5MHz allows the use of tiny surface-mount components. The MAX1997 QFN package (0.8mm max) with low-profile external components allows this circuit to be less than 1.25mm high.

<!-- image -->

## Features

- ♦ +2.7V to +5.5V Input Range
- ♦ Output Voltages

+9V Output at 250mA

Step-Up Switching Regulator)

- +20V Output at 10mA (Positive Charge Pump and Linear Regulator)

-7V Output at 10mA (Negative Charge Pump and Linear Regulator)

+8.6V Output at 30mA (Gamma Reference Regulator)

+2.5V Output at 200mA from 2.7V to 3.6V Input (Low-Voltage Logic Supply)

+4.3V Output (±300mA Peak Backplane Buffer Output)

- ♦ Up to Three Positive and Three Negative ChargePump Stages
- ♦ More than -20V Linear-Regulated Output (Resistor Adjustable)
- ♦ More than +30V Linear-Regulated Output (with Additional Circuitry)
- ♦ Greater than 85% Efficiency (Step-Up Switching Regulator)
- ♦ 375kHz/750kHz/1.5MHz Selectable Step-Up Switching Frequency (Configured for 1.5MHz)
- ♦ Programmable Power-Up Sequencing and SoftStart for All Outputs
- ♦ Multilevel Protection

Output Undervoltage Protection Input Overcurrent Protection Input Switch Disconnects Step-Up Output from Input Source

- Selectable Fault-Delay Period
- ♦ Low-Profile Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE       |
|--------------|--------------|------------------|
| MAX1997EVKIT | 0°C to +70°C | 32 QFN 5mm × 5mm |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1997 Evaluation Kit

| DESIGNATION                            |   QTY | DESCRIPTION                                                                    |
|----------------------------------------|-------|--------------------------------------------------------------------------------|
| C1, C2, C3                             |     3 | 4.7µF ±20%, 16V X5R ceramic capacitors (1210) TDK C3225X5R1C475M-1.15          |
| C4, C15                                |     0 | Not installed, capacitor (1206)                                                |
| C5, C14                                |     2 | 10µF ±20%, 6.3V X5R ceramic capacitors (1206) TDK C3216X5R0J106M-0.85          |
| C6, C35, C39                           |     3 | 1000pF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H102K              |
| C7, C18                                |     2 | 0.01µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H103K              |
| C8, C11                                |     2 | 0.47µF ±10%, 16V X7R ceramic capacitors (0805) TDK C2012X7R1C474K-0.60         |
| C9                                     |     1 | 100µF ±20%, 16V aluminum electrolytic capacitor (6.3mm × 5mm) Sanyo 16MV100UAX |
| C10, C16, C34, C36, C37, C44, C45, C46 |     0 | Not installed, capacitor (0603)                                                |
| C12, C20-C27, C30, C31, C41, C42       |    13 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K               |
| C13                                    |     1 | 0.22µF ±10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A224K               |
| C17                                    |     1 | 2.2µF ±10%, 16V X5R ceramic capacitor (0805) TDK C2012X5R1C225KT-0.95          |
| C19, C43                               |     2 | 1µF ±10%, 10V X7R ceramic capacitors (0805) TDK C2012X7R1A105K-1.15            |
| C28, C29                               |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (1206) TDK C3216X7R1H104K-0.85          |
| C32                                    |     1 | 0.47µF ±10%, 25V X5R ceramic capacitor (1206) TDK C3216X5R1E474KT-0.90         |
| C33                                    |     1 | 1µF ±10%, 25V X7R ceramic capacitor (1206) TDK C3216X7R1E105K-1.15             |
| C38                                    |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0805) TDK C2012X7R1C104K-0.85           |

## Component List

| DESIGNATION                          |   QTY | DESCRIPTION                                                      |
|--------------------------------------|-------|------------------------------------------------------------------|
| C40                                  |     1 | 100pF ±10%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H101K  |
| D1                                   |     1 | 1.0A, 30V Schottky diode (S-flat) Toshiba CRS02                  |
| D2, D9                               |     2 | 200mA, 75V diodes (SOT23) Fairchild MMBD4148 (top mark 5H)       |
| D3-D8                                |     6 | 200mA, 25V dual Schottky diodes (SOT23) Fairchild BAT54S         |
| JU1, JU2                             |     2 | 2-pin headers                                                    |
| JU3, JU4, JU8, JU11, JU14            |     5 | 3-pin headers                                                    |
| JU5, JU6, JU7, JU9, JU10, JU12, JU13 |     7 | 4-pin headers                                                    |
| L1                                   |     1 | 3µH, 1.9A inductor Sumida CLS5D11HP-3R0NC                        |
| N1                                   |     1 | 1.9A, 30V N-channel MOSFET (3-pin SuperSOT) Fairchild FDN357N    |
| P1                                   |     1 | 2.4A, -20V P-channel MOSFET (3-pin SuperSOT) Fairchild FDN304P   |
| P2                                   |     0 | Not installed, MOSFET (µ8)                                       |
| Q1                                   |     1 | 3A, 25V PNP bipolar transistor (3-pin SuperSOT) Fairchild FSB749 |
| Q2, Q4                               |     2 | 200mA, 40V PNP bipolar transistors (SOT23) Fairchild MMBT3906    |
| Q3                                   |     1 | 200mA, 40V NPN bipolar transistor (SOT23) Fairchild MMBT3904     |
| R1, R9, R10, R13, R14, R15           |     6 | 1M Ω ±5% resistors (0805)                                        |
| R2                                   |     1 | 7.68k Ω ±1% resistor (0805)                                      |
| R3, R32-R37                          |     0 | Not installed, resistor (0805)                                   |
| R4                                   |     1 | 51.1k Ω ±1% resistor (0805)                                      |
| R5                                   |     1 | 1.21k Ω ±1% resistor (0805)                                      |
| R6, R27, R38, R39                    |     4 | 150k Ω ±1% resistors (0805)                                      |
| R7                                   |     1 | 10 Ω ±1% resistor (0805)                                         |
| R8                                   |     1 | 100k Ω ±1% resistor (0805)                                       |
| R11                                  |     1 | 523 Ω ±1% resistor (0805)                                        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component List (continued)

| DESIGNATION        |   QTY | DESCRIPTION                  |
|--------------------|-------|------------------------------|
| R12, R16           |     2 | 12.4k Ω ±1% resistors (0805) |
| R17, R19, R23      |     3 | 39.2k Ω ±1% resistors (0805) |
| R18                |     1 | 2.2k Ω ±5% resistor (0805)   |
| R20                |     1 | 118k Ω ±1% resistor (0805)   |
| R21, R22, R24, R30 |     4 | 20k Ω ±1% resistors (0805)   |
| R25, R26           |     2 | 6.8k Ω ±5% resistors (0805)  |
| R28                |     1 | 301k Ω ±1% resistor (0805)   |
| R29                |     1 | 24.3k Ω ±1% resistor (0805)  |
| R31                |     1 | 43.2k Ω ±1% resistor (0805)  |
| U1                 |     1 | MAX1997ETJ (32-pin QFN)      |
| None               |    14 | Shunts (JU1-JU14)            |
| None               |     1 | MAX1997 PC board             |

## Quick Start

The MAX1997 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment

- 2.7V to 5.5V, 2A DC power supply
- One voltmeter

## Procedure

- 1) Verify  that  there  are  no  shunts  across  JU1,  JU2, JU3, JU8, JU11, and JU12.
- 2) Verify  that  a  shunt  is  across  pins  1  and  2  of  JU4, JU6, and JU9.
- 3) Verify  that  a  shunt  is  across  pins  1  and  3  of  JU7 and JU10.
- 4) Verify  that  a  shunt  is  across  pins  1  and  4  of  JU5 and JU13.
- 5) Verify that a shunt is across pins 2 and 3 of JU14.

## MAX1997 Evaluation Kit

- 6) Connect the positive terminal of the input power supply to the PIN pad. Connect the negative terminal of the input power supply to the PGND pad.
- 7) Turn on the power supply and verify that the stepup regulator output (VBST) is +9V.
- 8) Verify that the positive linear-regulator output (GON) is +20V.
- 9) Verify that the negative linear-regulator output (GOFF) is -7V.
- 10) Verify  that  the  logic  supply  linear-regulator  output (VLOG) is +2.5V.
- 11) Verify that the gamma reference linear-regulator output (VGAM) is +8.6V.
- 12) Verify that the high-current backplane buffer output (OUTB) is +4.3V.

For instructions on selecting the feedback resistors for other output voltages, see the Output Voltage Selection section .

## Detailed Description

The MAX1997 EV kit contains a step-up switching regulator,  a  positive  three-stage charge pump with positive high-voltage linear-regulator controller, a negative threestage charge pump with negative high-voltage linearregulator controller, a linear-regulator controller for gamma reference, a linear-regulator controller for lowvoltage logic supply, and a high-current backplane driver. The EV kit operates from a DC power supply between +2.7V and +5.5V, which can provide at least 2A. The circuit components are chosen for 1.5MHz. With different components, the switching frequency can be jumper selected between 375kHz, 750kHz, and 1.5MHz. The input and outputs of the EV kit are protected against output overloads. The EV kit features a shutdown mode to extend battery life.

As configured, the step-up switching-regulator (VBST) generates a +9V output and can provide at least 250mA from a 2.7V input. The step-up switching-regulator  output  voltage  can  be  adjusted  up  to  +13V  with

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| Fairchild  | 888-522-5372 | -            | www.fairchildsemi.com |
| Sanyo      | 619-661-6322 | 619-661-1055 | www.sanyovideo.com    |
| Sumida     | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Toshiba    | 949-455-2000 | 949-859-3963 | www.toshiba.com/taec  |

Note:

Please indicate that you are using the MAX1997 when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1997 Evaluation Kit

feedback resistors (see the Output Voltage Selection section).

As configured, the TFT gate-on supply (GON) uses two of  the  three  positive  charge-pump stages to generate approximately +25V and can provide greater than 10mA. The output is postregulated to +20V using a linear-regulator controller and an external PNP bipolar pass transistor. The positive linear-regulator's output can be adjusted between +1.25V and +25V or, with additional circuitry, to even higher voltages (see the Output Voltage Selection section). The first stage of the positive charge pump can be connected to the DC input source (INPUT) or the step-up switching regulator output (VBST).

As configured, the TFT gate-off supply (GOFF) uses one of the three negative charge-pump stages to generate approximately -7.6V and can provide greater than 10mA. The output is postregulated to -7V using a linear-regulator controller and an external NPN bipolar pass transistor. The negative linear-regulator's output can be adjusted between 0 and -22V (see the Output Voltage Selection section). The first stage of the negative  charge pump can be connected to the DC input source (INPUT) or the power ground (PGND).

The gamma reference (VGAM) is set to +8.6V using a linear-regulator  controller  and  an  external  PNP  bipolar pass transistor. This gamma reference can provide greater than 30mA of current. The gamma linear-regulator's  output  can  be  adjusted between +1.25V and VSRC (see the Output Voltage Selection section).  The step-up switching regulator provides power for the gamma reference through MOSFET N1, which is controlled by DRVA.

The logic voltage supply (VLOG) is set to +2.5V using a linear-regulator controller and an external PNP bipolar pass transistor. This logic voltage supply can provide greater than 200mA of current. The logic voltage supply linear-regulator's output can be adjusted between +1.25V and the input voltage (see the Output Voltage Selection section). Power for the low-voltage logic linear regulator can be provided by the DC input sources (PIN) or (INPUT).

Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN                                                  | MAX1997 EV KIT OUTPUT                     |
|------------------|-----------------------------------------------------------|-------------------------------------------|
| Installed        | Connected to GND                                          | Disabled                                  |
| None (default)   | Connected to IN through R9                                | Enabled                                   |
| None             | External controller connected to SHDN pad drives SHDN pin | Logic high = enabled Logic low = disabled |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

The ±300mA (peak) backplane buffer (OUTB) is set to +4.3V and uses a small 1µF output filter capacitor. The buffer is powered from the step-up switching regulator output (VSRC) and its output can be adjusted between 0V and VSRC (see the Output Voltage Selection section).

The EV kit also features power-up sequencing. After SHDN goes high and the input switch turns on, the logic  voltage  supply (VLOG) soft starts. When ONDC goes high, the step-up switching regulator soft starts and the gate-on supply, gate-off supply, and gamma buffer soft start in any sequence by setting the appropriate jumpers (see the Power-Up Sequencing section).

The EV kit includes input-current-overload protection that shuts the circuit down if the input current exceeds a  threshold  for  longer  than  the  fault-delay  period.  The fault-delay period is jumper selectable between 22ms, 44ms, and 87ms. The input-current-overload threshold is  set  by  resistor-dividers  R4,  R6,  and  R31,  R38,  and the RDS(ON) of MOSFET P1 or P2 (refer to the Setting the  Input  Overcurrent  Threshold section  in  the MAX1997 data sheet for further details). The EV kit also includes output undervoltage protection that shuts the circuit  down if  any  of  the  output  voltages  drop  below approximately 80% of its nominal value for longer than the fault-delay period.

## Jumper Selection

## Shutdown Mode ( SHDN )

The MAX1997 features a shutdown mode that reduces the  MAX1997 quiescent current to less than 1µA. The 2-pin jumper JU1 selects the shutdown mode. Table 1 lists the selectable jumper options.

Caution: Do not connect an external controller to the SHDN pad while a shunt is on JU1 since the external controller can be damaged.

## Step-Up Regulator Logic Control Input (ONDC)

The MAX1997 features a logic control input (ONDC) that can enable/disable the step-up regulator, the OUTB regulator, and the sequencing timing block. The 2-pin jumper JU2 selects the control input. Table 2 lists the selectable jumper options.

Table 2. Jumper JU2 Functions

| SHUNT LOCATION   | ONDC PIN                                                  | MAX1997 EV KIT OUTPUT                                                          |
|------------------|-----------------------------------------------------------|--------------------------------------------------------------------------------|
| Installed        | Connected to GND                                          | Disable the step-up regulator, OUTB regulator, and the sequencing timing block |
| None (default)   | Connected to IN through R10                               | Enable the step-up regulator, OUTB regulator, and the sequencing timing block  |
| None             | External controller connected to ONDC pad drives ONDC pin | Logic high = enabled, logic low = disabled                                     |

Table 3. Jumper JU3 Functions

| SHUNT LOCATION   | PFLT PIN         |   MAX1997 EV KIT FAULT-DELAY PERIOD (ms) |
|------------------|------------------|------------------------------------------|
| 1-2              | Connected to IN  |                                       87 |
| 2-3              | Connected to GND |                                       22 |
| None (default)   | Unconnected      |                                       44 |

Caution: Do not connect an external controller to the ONDC pad while a shunt is on JU2 since the external controller can be damaged.

## Fault-Delay Period Selection (PFLT)

The MAX1997 features an option to choose the faultdelay period. JU3 selects the fault-delay period for the MAX1997 EV kit. Table 3 lists the selectable jumper options.

## Switching Frequency Selection (FREQ)

The MAX1997 features an option to choose the switching frequency. JU4 selects the switching frequency for the MAX1997 EV kit. Table 4 lists the selectable jumper options. The EV kit is configured for 1.5MHz operation. Optimum performance at other frequencies requires a

Table 5. Jumper JU5 Functions

| SHUNT LOCATION   | ONN PIN                     | OPERATING MODE                                                   |
|------------------|-----------------------------|------------------------------------------------------------------|
| 1-2              | Connected to VREF           | Gate-off linear-regulator controller power-up at V CT > VREF     |
| 1-3              | Connected to 2/3 VREF       | Gate-off linear-regulator controller power-up at V CT > 2/3 VREF |
| 1-4 (default)    | Connected to 1/3 VREF       | Gate-off linear-regulator controller power-up at V CT > 1/3 VREF |
| None             | Connected to IN through R15 | Gate-off linear-regulator controller disabled                    |

## Table 6. Jumper JU6 Functions

| SHUNT LOCATION   | ONP PIN                     | OPERATING MODE                                                  |
|------------------|-----------------------------|-----------------------------------------------------------------|
| 1-2 (default)    | Connected to VREF           | Gate-on linear-regulator controller power-up at V CT > VREF     |
| 1-3              | Connected to 2/3 VREF       | Gate-on linear-regulator controller power-up at V CT > 2/3 VREF |
| 1-4              | Connected to 1/3 VREF       | Gate-on linear-regulator controller power-up at V CT > 1/3 VREF |
| None             | Connected to IN through R14 | Gate-on linear-regulator controller disabled                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 4. Jumper JU4 Functions

| SHUNT LOCATION   | FREQ PIN         | MAX1997 EV KIT FREQUENCY   |
|------------------|------------------|----------------------------|
| 1-2 (default)    | Connected to IN  | 1.5MHz                     |
| 2-3              | Connected to GND | 375kHz                     |
| None             | Unconnected      | 750kHz                     |

larger inductor value (refer to the Inductor Selection section in the MAX1997 data sheet).

## Power-Up Sequencing

The MAX1997 EV kit features an option to reconfigure the power-up sequence for the gate-on linear regulator, the gate-off linear regulator, and the gamma linear regulator in any order. After ONDC goes high, the capacitor at the CT pin is charged by an internal 5µA current source. Each regulator is enabled when VCT exceeds the regulator's ON\_ input. JU5, JU6, and JU7 connect the ON\_ inputs to one of four selected levels, allowing flexible configuration of the sequence order. Note that while the gate-on supply can be enabled any time after ONDC goes high, its startup is delayed until

## MAX1997 Evaluation Kit

## MAX1997 Evaluation Kit

## Table 7. Jumper JU7 Functions

| SHUNT LOCATION   | ON2 PIN                     | OPERATING MODE                                                                        |
|------------------|-----------------------------|---------------------------------------------------------------------------------------|
| 1-2              | Connected to VREF           | Gamma linear-regulator controller power-up and VSRC switch enabled at V CT > VREF     |
| 1-3 (Default)    | Connected to 2/3 VREF       | Gamma linear-regulator controller power-up and VSRC switch enabled at V CT > 2/3 VREF |
| 1-4              | Connected to 1/3 VREF       | Gamma linear-regulator controller power-up and VSRC switch enabled at V CT > 1/3 VREF |
| None             | Connected to IN through R13 | Gamma linear-regulator controller and VSRC switch disabled                            |

## Table 8. Jumper JU8 Functions

| SHUNT LOCATION   | FIRST STAGE POSITIVE CHARGE PUMP   | OPERATING MODE                                              |
|------------------|------------------------------------|-------------------------------------------------------------|
| 1-2              | Connected to VBST                  | First stage of a three-stage charge pump connected to VBST  |
| 2-3              | Connected to INPUT                 | First stage of a three-stage charge pump connected to INPUT |
| None (default)   | Not used                           | Not used for one-stage or two-stage charge pumps            |

## Table 9. Jumper JU9 Functions

| SHUNT LOCATION   | SECOND STAGE POSITIVE CHARGE PUMP              | OPERATING MODE                                            |
|------------------|------------------------------------------------|-----------------------------------------------------------|
| 1-2 (default)    | Connected to VBST                              | First stage of a two-stage charge pump connected to VBST  |
| 1-3              | Connected to previous stage charge-pump output | Second stage of a three-stage charge pump                 |
| 1-4              | Connected to INPUT                             | First stage of a two-stage charge pump connected to INPUT |
| None             | Not used                                       | Not used for one-stage charge pumps                       |

## Table 10. Jumper JU10 Functions

| SHUNT LOCATION   | THIRD STAGE POSITIVE CHARGE PUMP               | OPERATING MODE                                       |
|------------------|------------------------------------------------|------------------------------------------------------|
| 1-2              | Connected to VBST                              | One-stage charge pump connected to VBST              |
| 1-3 (default)    | Connected to previous stage charge-pump output | Last stage of a two-stage or three-stage charge pump |
| 1-4              | Connected to INPUT                             | One-stage charge pump connected to INPUT             |

the  end of the step-up switching regulator's soft-start. Tables 5, 6, and 7 list the jumper options.

## Positive Charge Pump

The positive charge pump of the MAX1997 EV kit features an option to cascade up to three stages of charge pumps. Each charge-pump stage can be connected to INPUT, VBST, or the previous stage. JU8, JU9, and JU10 configure the number of stages and select the voltage source for the positive charge pump on the MAX1997 EV kit. Tables 8, 9, and 10 list the jumper options. The default configuration of the positive charge pump of the MAX1997 EV kit is a two-stage charge pump powered from VBST as indicated in Tables 9 and 10. Refer to the Charge Pumps section of the MAX1997 data sheet for information on selecting a charge-pump configuration.

## Negative Charge Pump

The negative charge pump of the MAX1997 EV kit features an option to cascade up to three stages of charge pumps.  Each charge pump stage can be connected to INPUT, PGND, or the previous stage. JU11, JU12, and JU13 configure the number of stages and select the voltage source for the negative charge pump on the MAX1997 EV kit. Tables 11, 12, and 13 list the jumper

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Table 11. Jumper JU11 Functions

| SHUNT LOCATION   | FIRST STAGE NEGATIVE CHARGE PUMP   | OPERATING MODE                                             |
|------------------|------------------------------------|------------------------------------------------------------|
| 1-2              | Connected to INPUT                 | First stage of a three-stage chargepump connected to INPUT |
| 2-3              | Connected to PGND                  | First stage of a three-stage chargepump connected toPGND   |
| None (default)   | Not used                           | Not used for one-stage or two-stage charge pump            |

## Table 12. Jumper JU12 Functions

| SHUNT LOCATION   | SECOND STAGE NEGATIVE CHARGE PUMP              | OPERATING MODE                                            |
|------------------|------------------------------------------------|-----------------------------------------------------------|
| 1-2              | Connected to INPUT                             | First stage of a two-stage charge pump connected to INPUT |
| 1-3              | Connected to previous stage charge-pump output | Second stage of a three-stage charge pump                 |
| 1-4              | Connected to PGND                              | First stage of a two-stage charge pump connected to PGND  |
| None (default)   | Not used                                       | Not used for one-stage charge pump                        |

## Table 13. Jumper JU13 Functions

| SHUNT LOCATION   | THIRD STAGE NEGATIVE CHARGE PUMP               | OPERATING MODE                                       |
|------------------|------------------------------------------------|------------------------------------------------------|
| 1-2              | Connected to INPUT                             | One-stage charge pump connected to INPUT             |
| 1-3              | Connected to previous stage charge-pump output | Last stage of a two-stage or three-stage charge pump |
| 1-4 (default)    | Connected to PGND                              | One-stage charge pump connected to PGND              |

options. The default configuration of the negative charge pump of the MAX1997 EV kit is a one-stage charge pump powered from PGND as indicated in Table 13. Refer to the Charge Pumps section of the MAX1997 data sheet for information on selecting a charge-pump configuration.

## Power Source for the VLOG LinearRegulator Controller

The MAX1997 EV kit features an option to choose the power source of the logic supply linear regulator. JU14 selects the power source. Table 14 lists the selectable jumper options.

Table 14. Jumper JU14 Functions

| SHUNT LOCATION   | VLOG POWER SOURCE   |
|------------------|---------------------|
| 1-2              | Connected to PIN    |
| 2-3 (default)    | Connected to INPUT  |
| None*            | Unconnected         |

<!-- image -->

## Output Voltage Selection

## Step-Up Switching-Regulator Output Voltage

The MAX1997 EV kit's step-up switching-regulator output (VBST) is set to +9V by feedback resistors R2 and R5. To generate output voltages other than +9V (up to +13V), select different external voltage-divider resistors (R2, R5). The output capacitors (C1, C2, and C3) are rated to +10V. To set the output voltage greater than +10V, use higher voltage-rated capacitors. Refer to the Main Step-Up Regulator, Output Voltage Selection section  in  the  MAX1997 data sheet for instructions on selecting the resistors.

## Gate-On Linear-Regulator Output Voltage

The MAX1997 EV kit's positive linear-regulator output (GON) is set to +20V by feedback resistors R28 and R30. To generate output voltages other than +20V (+1.25V to +25V), select different external voltagedivider resistors (R28, R30) and adjust the charge-pump input source and number of stages accordingly. The MAX1997 EV kit is not configured for charge-pump outputs greater than +28V. If linear regulator inputs greater than +28V or linear-regulator outputs greater than +25V

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1997 Evaluation Kit

## MAX1997 Evaluation Kit

are needed, an NPN transistor must be added to the circuit to protect the DRVP pin (refer to the MAX1997 data sheet,  Figure  4).  Refer  to  the Linear-Regulator Controllers, Output Voltage Selection section in the MAX1997 data sheet for instructions on selecting the resistors.

## Gate-Off Linear-Regulator Output Voltage

The MAX1997 EV kit's negative linear-regulator output (GOFF) is set to -7V by feedback resistors R27 and R29. To generate output voltages other than -7V (0 to -22V), select different external voltage-divider resistors (R27, R29) and adjust the charge-pump input source and number of stages accordingly. Note that the MAX1997 EV kit is not configured for charge-pump output voltages below -22V. Refer to the Linear-Regulator Controllers, Output Voltage Selection section in the MAX1997 data sheet for instructions on selecting the resistors.

## Gamma Linear-Regulator Output Voltage

The MAX1997 EV kit's gamma linear-regulator output (VGAM) is set to +8.6V by feedback resistors R20 and R22. To generate output voltages other than +8.6V (+1.25V to VSRC), select different external voltage-divider resistors (R20, R22) and an appropriate input voltage source. Refer to the Linear-Regulator Controllers, Output Voltage Selection section in the MAX1997 data sheet for instructions on selecting the resistors.

## Logic Voltage Supply Linear-Regulator Output Voltage

The MAX1997 EV kit's logic voltage supply linear-regulator output (VLOG) is set to +2.5V by feedback resistors  R12  and R16. To generate output voltages other than +2.5V (from +1.25 up to the input voltage), select different  external  voltage-divider  resistors  (R12,  R16). Refer to the Linear-Regulator Controllers, Output Voltage Selection section in the MAX1997 data sheet for instructions on selecting the resistors.

## High-Current Backplane Buffer Output Voltage

Resistors R21 and R24 set the MAX1997 EV kit's highcurrent backplane buffered output (OUTB) to a fixed ratio  of  the  gamma linear-regulator's output (VGAM). When VGAM is +8.6V, OUTB is +4.3V. To set OUTB to a different ratio of VGAM, select different external voltage-divider resistors (R21, R24). Refer to the VCOM Buffer,  Buffer  Output  Voltage section in the MAX1997 data sheet for instructions on selecting the resistors.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1997 Evaluation Kit

<!-- image -->

Figure 1. MAX1997 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1997 Evaluation Kit

Figure 1. MAX1997 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 2. MAX1997 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1997 EV Kit PC Board Layout-GND Layer 2

<!-- image -->

## MAX1997 Evaluation Kit

Figure 3. MAX1997 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1997 EV Kit PC Board Layout-GND Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1997 Evaluation Kit

Figure 6. MAX1997 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

12