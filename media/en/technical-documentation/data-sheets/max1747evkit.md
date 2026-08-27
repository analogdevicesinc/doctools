<!-- lastmod 2022-08-03 -->
## General Description

The MAX1747 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains three charge-pump regulators. The first one is a highcurrent step-up DC-DC converter and is configured for a +5V output that provides up to 200mA of current. The other two charge pumps are low-current charge pumps that generate positive and negative voltages. A +3.0VDC to +3.6VDC source can be utilized to power the EV kit input.

The low-current negative charge-pump circuit is configured for a -7V output; the low-current positive chargepump circuit is configured for a +12V output. Both circuits  provide  up  to  20mA  of  current.  The  high-current step-up DC-DC converter or the EV kit's input source can be used to power either or both charge pumps.

The MAX1747 EV kit demonstrates an inductorless and low profile (1.1mm max) solution. Operation up to 1.23MHz allows the use of tiny surface-mount components and provides fast transient response.

| DESIGNATION                 |   QTY | DESCRIPTION                                                         |
|-----------------------------|-------|---------------------------------------------------------------------|
| C1, C2, C3, C17             |     4 | 4.7µF, 6.3V X7R ceramic capacitors (1210) Taiyo Yuden LMK325BJ475MD |
| C5, C7, C20, C21, C22       |     5 | 1µF, 16V X5R ceramic capacitors (1206) Murata GRM42-6X5R105K016     |
| C6, C8, C14                 |     3 | 0.47µF, 25V X7R ceramic capacitors (1206) Murata GRM42-6X7R474K025  |
| C9, C11, C12, C15, C16, C19 |     6 | 0.1µF, 16V X7R ceramic capacitors (0603) Taiyo Yuden EMK107BJ104KA  |
| C10                         |     1 | 1500pF, 50V X7R ceramic capacitor (0603) Taiyo Yuden UMK107BJ152KZ  |
| C13                         |     1 | 0.22µF, 10V X7R ceramic capacitor (0603) Taiyo Yuden LMK107BJ224KA  |
| C4, C18                     |     0 | Not installed (1210)                                                |

<!-- image -->

## Features

- ♦ Low-Profile Solution, 1.1mm max Height
- ♦ Three Charge-Pump Regulators +5V Output at 200mA +12V Output at 20mA -7V Output at 20mA
- ♦ High-Current Output Regulated to ±1%
- ♦ Adjustable Outputs
- ♦ Integrated Power MOSFETs
- ♦ 1µA Shutdown Current
- ♦ Switching Frequency Up to 1.23MHz
- ♦ Fast Transient Response
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP.RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1747EVKIT | 0°C to +70°C | 20 TSSOP     |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                         |
|---------------|-------|-----------------------------------------------------|
| D1-D4         |     4 | 200mA, 25V Schottky diodes (SOT23) Fairchild BAT54S |
| R1            |     1 | 150k Ω ±1% resistor (0805)                          |
| R2, R4, R6    |     3 | 49.9k Ω ±1% resistors (0805)                        |
| R3            |     1 | 432k Ω ±1% resistor (0805)                          |
| R5            |     1 | 280k Ω ±1% resistor (0805)                          |
| R7            |     0 | Not installed (0805)                                |
| R8            |     1 | 107k Ω ±1% resistor (0805)                          |
| R10           |     1 | 1M Ω ±5% resistor (0805)                            |
| U1            |     1 | MAX1747EUP (20 TSSOP)                               |
| JU1           |     1 | 2-pin header                                        |
| JU2, JU3      |     2 | 3-pin headers                                       |
| None          |     3 | Shunts (JU1, JU2, JU3)                              |
| None          |     1 | MAX1747 PC board                                    |
| None          |     1 | MAX1747 data sheet                                  |
| None          |     1 | MAX1747 EV kit data sheet                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1747 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Fairchild   | 408-822-2000 | 408-822-2102 |
| Murata      | 814-237-1431 | 814-238-0490 |
| Nihon       | 661-867-2555 | 661-867-2698 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |

Note: Please indicate that you are using the MAX1747 when contacting these component suppliers.

## Quick Start

The MAX1747 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Output

- 1) Connect a voltmeter to the VOUT pad.
- 2) Verify that shunts are present across pins 1 and 2 of jumpers JU2 (SUPN) and JU3 (SUPP). Verify that j umper  JU1  ( SHDN )  does  not  have  a  shunt installed.
- 3) Connect a +3.0VDC to +3.6VDC power supply to the VIN pad.
- 4) Connect the supply ground to the GND pad.
- 5) Turn on the power supply and verify that the highcurrent step-up DC-DC converter output (VOUT) is +5V.
- 6) Verify  that  the  low-current  negative  charge  pump output (VN) is -7V.
- 7) Verify  that  the  low-current  positive  charge  pump output (VP) is +12V.

For instructions on selecting the feedback resistors for other output voltages, see the Evaluating Other Output Voltages section. The input voltage range is +3.0V to +3.6V when selecting the output voltage.

## Detailed Description

The MAX1747 EV kit contains a high-current step-up DC-DC converter and two low-current charge-pump circuits. The EV kit's voltage input range is from +3.0V to +3.6V as configured, and can be extended to operate in the +2.7V to +5.5V range. The high-current stepup DC-DC converter output voltage can be adjusted from +VIN to +5.5V with resistors.

The low-current negative charge pump provides -7V output; other negative output voltages can be evaluated by replacing two voltage feedback resistors. The output can be adjusted to -8V.

The low-current positive charge pump provides a +12V output (VP); other output voltages can be evaluated by replacing two voltage feedback resistors. The output can be adjusted up to +13V.

Jumper options allow either charge-pump circuit to be fed power from the EV kit's input (VIN) or the high-current step-up DC-DC converter output (VOUT).

The MAX1747 switching frequency is determined by resistor R8 and the voltage supplied to the EV kit input pad (VIN). Applying a voltage in the range of +3.0V to +3.6V to the VIN pad causes the switching frequency to operate in the 980kHz to 1.23MHz range, respectively.

An off-board CMOS or bipolar transistor can control the EV kit's shutdown feature.

## Jumper Selection

## Shutdown Mode

The MAX1747 EV kit features a shutdown mode that reduces the EV kit's quiescent current to less than 60µA (typ). The two-pin jumper, JU1, selects the shutdown modes for the MAX1747. Table 1 lists the selectable jumper options.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN                | OUTPUT                                   |
|------------------|-------------------------|------------------------------------------|
| None             | Connected to VIN via R8 | MAX1747 enabled, operation up to 1.23MHz |
| Installed        | Connected to GND        | Shutdown mode, VOUT = 0                  |

A CMOS open-drain or bipolar open-collector transistor can be connected to the EV kit SHDN pad and ground to  control  the  shutdown mode. The shunt for jumper JU1 must be removed for this feature to function.

## Low-Current Negative Voltage Source

The MAX1747 EV kit features an option to choose which voltage source feeds the low-current negative charge-pump circuit. Jumper JU2 selects the input voltage source for pin SUPN on the MAX1747. Table 2 lists the options.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 2. Jumper JU2 Functions

| SHUNT LOCATION   | SUPN PIN          | OPERATING MODE                                             |
|------------------|-------------------|------------------------------------------------------------|
| 1, 2             | Connected to VOUT | VOUT voltage source feeds low-current negative input       |
| 2, 3             | Connected to VIN  | Input voltage source, VIN feeds low-current negative input |

## Low-Current Positive Voltage Efficiency

The MAX1747 EV kit features an option to improve the low-current positive charge pump efficiency for low output voltages at VP. Jumper JU3 selects the voltage source for the maximum pump voltage, and thus, maximum efficiency. Table 3 lists the options.

Table 3. Jumper JU3 Functions

| SHUNT LOCATION   | DIODE D1          | OPERATING MODE          |
|------------------|-------------------|-------------------------|
| 1, 2             | Connected to VOUT | VP > 10V; VOUT feeds D1 |
| 2, 3             | Connected to VIN  | VP < 10V; VIN feeds D1  |

## Evaluating Other Output Voltages

## High-Current Step-Up DC-DC Converter Output Voltages (VOUT)

The MAX1747 EV kit's high-current step-up DC-DC converter output is set to +5V by feedback resistors (R1, R2). To generate output voltages other than +5V, select different external voltage-divider resistors (R1, R2). Refer to Output Voltage Selection in the MAX1747 data sheet for instructions on selecting the resistors.

## Low-Current Negative Charge-Pump Output Voltages (VN)

The MAX1747 EV kit's low-current negative chargepump output is set to -7V by feedback resistors (R5, R6). To generate output voltages other than -7V, select different external voltage-divider resistors (R5, R6). Refer to Output Voltage Selection in the MAX1747 data sheet for instructions on selecting the resistors. See Table 2 for the jumper selection of input voltage ranges.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1747 Evaluation Kit

## Low-Current Positive Charge-Pump Output Voltages (VP)

The MAX1747 EV kit's low-current positive chargepump output is set to +12V by feedback resistors (R3, R4). To generate output voltages other than +12V, select different external voltage-divider resistors (R3, R4). Refer to Output Voltage Selection in the MAX1747 data sheet for instructions on selecting the resistors.

Jumper JU4 is provided to improve the efficiency of the low-current positive charge pump for output voltages under 10V. See Table 3 for the jumper selection of output voltage ranges.

## MAX1747 Evaluation Kit

Figure 1. MAX1747 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX1747 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1747 Evaluation Kit

Figure 3. MAX1747 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1747 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

<!-- image -->