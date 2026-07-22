<!-- lastmod 2022-08-05 -->
## General Description

The MAX1748 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a boost switching regulator and two charge-pump voltage-regulator circuits. The boost switching circuit is configured for a +10V output that provides up to 200mA of current from a supply voltage of +2.7V to +5.5V.

The positive charge-pump circuit is configured for a +15V output that provides &gt;20mA of current. The negative charge-pump circuit is configured for a -5V output and provides &gt;20mA of current. Power for either or both charge-pump inputs can be provided from the +2.7VDC to +5.5VDC source or from the boost switching-regulator output.

The MAX1748 EV kit demonstrates low-quiescent current  and  high  efficiency  (over  86%)  for  maximum  battery life.  Operation at 1MHz allows the use of tiny surface-mount components. The MAX1748 TSSOP package (1.1mm max) with low-profile external components allows this circuit to be less than 1.2mm high. The MAX1748 EV kit can also be used to evaluate the MAX1779 IC.

| DESIGNATION              |   QTY | DESCRIPTION                                                        |
|--------------------------|-------|--------------------------------------------------------------------|
| C1, C16, C17, C18, C21   |     5 | 3.3µF, 10V X7R ceramic capacitors (1210) Taiyo Yuden LMK325BJ335KD |
| C2, C4, C5, C6, C22, C23 |     6 | 0.1µF, 16V X7R ceramic capacitors (0603) Taiyo Yuden EMK107BJ104MA |
| C3                       |     0 | Not installed (R) Sprague 592D336X0016R2T recommended              |
| C7, C15, C24             |     3 | 1µF, 16V X7R ceramic capacitors (1206) Murata GRM319R71C105K       |
| C8                       |     1 | 470pF, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H47IJ      |
| C9                       |     1 | 0.22µF, 10V X7R ceramic capacitor (0603) Taiyo Yuden LMK107BJ224KA |

<!-- image -->

## Features

- ♦ +2.7V to +5.5V Input Range (as Configured)
- ♦ Output Voltages
- +10V Output at 200mA (Boost Switching)
- +15V Output &gt;20mA (Positive Charge-Pump Regulator)
- -5V Output &gt;20mA (Negative Charge-Pump Regulator)
- ♦ Outputs Are Adjustable with Resistors
- ♦ &gt;85% Efficiency
- ♦ Internal MOSFET Switches
- ♦ 0.1µA (typ) IC Shutdown Current
- ♦ 1MHz Boost Switching Frequency, 500kHz Charge-Pump Switching Frequency
- ♦ Low Profile
- ♦ Evaluates MAX1779 (Component Replacement Required)
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1748EVKIT | 0°C to +70°C | 16 TSSOP     |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C10-C13       |     0 | Not installed (0805)                                               |
| C14           |     1 | 0.15µF, 25V X7R ceramic capacitor (1206) Taiyo Yuden TMK316BJ154MD |
| C19, C20      |     0 | Not installed, ceramic capacitors (0603)                           |
| D1            |     1 | 1.0A, 30V Schottky diode (S-flat) Toshiba CRS02 or Nihon EP10QY03  |
| D2, D3        |     2 | 200mA, 25V Schottky diodes (SOT23) Fairchild BAT54S                |
| D4, D5        |     0 | Not installed (SOT23)                                              |
| L1            |     1 | 6.8µH inductor Coilcraft LPO2506IB-682                             |
| R1            |     1 | 348k Ω ±1% resistor (0805)                                         |
| R3            |     1 | 549k Ω ±1% resistor (0805)                                         |
| R2, R4, R6    |     3 | 49.9k Ω ±1% resistors (0805)                                       |
| R5            |     1 | 200k Ω ±1% resistor (0805)                                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1748 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION               |
|---------------|-------|---------------------------|
| R7            |     0 | Not installed (0805)      |
| R8, R9        |     2 | 1M Ω ±5% resistors (0805) |
| U1            |     1 | MAX1748EUE (16-pin TSSOP) |
| JU1, JU4, JU5 |     3 | 3-pin headers             |
| None          |     3 | Shunts (JU1, JU4, JU5)    |
| None          |     1 | MAX1748 PC board          |
| None          |     1 | MAX1748 data sheet        |
| None          |     1 | MAX1748 EV kit data sheet |

## Quick Start

The MAX1748 EV kit is fully assembled and tested. Perform the following steps to verify board operation for a +10V output. Do not turn on the power supply until all connections are completed:

- 1) Connect a +2.7VDC to +5.5VDC power supply to the PIN pad. Connect the supply ground to the GND pad.
- 2) Connect a voltmeter to the V1 pad.
- 3) Verify that shunts JU1 ( SHDN )  are  across pins 1 and 2 and that shunts JU4 (SUPP) and JU5 (SUPN) are across pins 2 and 3.
- 4) Turn on the power supply and verify that the main output (V1) is +10V.
- 5) Verify that the negative charge-pump regulator output (VN) is -5V.
- 6) Verify that the positive charge-pump regulator output (VP) is +15V.

For instructions on selecting the feedback resistors for other output voltages, see the Output Voltage Selection section. The input voltage range is +2.7V to +5.5V when selecting the output voltage.

## Detailed Description

The MAX1748 EV kit contains a boost switching regulator and two regulating charge pumps. The EV kit operates from a +2.7V to +5.5V input voltage range. The boost switching regulator provides up to 200mA with a +10V output.

The positive charge-pump regulator generates a +15V output and can provide &gt;20mA of current. The negative charge-pump regulator generates -5V output and can provide &gt;20mA of current. Jumper options allow either charge pump to be fed power from PIN or V1.

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Coilcraft   | 847-639-6400 | 847-639-1469 |
| Fairchild   | 408-822-2000 | 408-822-2102 |
| Murata      | 814-237-1431 | 814-238-0490 |
| Sprague     | 603-224-1961 | 603-224-1430 |
| Sumida      | 708-956-0666 | 708-956-0702 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |
| Toshiba     | 949-455-2000 | 949-859-3963 |

Note: Please indicate that you are using the MAX1748/MAX1779 when contacting these component suppliers.

The boost switching-regulator output voltage can be adjusted from +2.7V to +13V with resistors. The positive charge-pump regulator's output can be adjusted up to +25V, and the negative regulator can be adjusted to -15V with resistors.

The MAX1748 EV kit charge-pump circuits feature PC board pads for a positive voltage tripling and negative voltage doubling output circuits. The MAX1748 EV kit can evaluate the MAX1779 IC after replacing several components. See the Evaluating the MAX1779 section.

## Jumper Selection

## Shutdown Mode

The MAX1748 EV kit features a shutdown mode that reduces the MAX1748 quiescent current, preserving battery life.  The  3-pin  jumper  (JU1)  selects  the  shutdown mode for the MAX1748. Table 1 lists the selectable jumper options.

## Positive Charge-Pump Regulator Feedback

In the MAX1748 EV kit, jumper JU2 selects which positive charge pump will be regulated: VP, a voltage doubler, or VPA, a voltage tripler. Table 2 lists the positive charge-pump regulator jumper options.

## Negative Charge-Pump Regulator Feedback

In the MAX1748 EV kit, jumper JU3 selects which negative charge pump will be regulated: VN or VNA, a voltage doubler. Table 3 lists the negative regulator jumper options.

## Positive Voltage Source

The MAX1748 EV kit features an option to choose which voltage source feeds the positive charge-pump regulator circuit. Jumper JU4 selects the input voltage source for the MAX1748's SUPP pin. Table 4 lists the options.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | MAX1748 OUTPUT                     |
|------------------|------------------|------------------------------------|
| 1-2              | Connected to PIN | MAX1748 enabled, V1 = +10V         |
| 2-3              | Connected to GND | Shutdown mode, V1 = P IN - V DIODE |

Table 2. Jumper JU2 Functions

| SHUNT LOCATION                                     | R3               | OPERATING MODE                       |
|----------------------------------------------------|------------------|--------------------------------------|
| 1-2 (PC trace shorts 1-2)                          | Connected to VP  | Regulate VP, doubler output voltage  |
| 2-3 (cut open trace across 1-2 , short across 2-3) | Connected to VPA | Regulate VPA, tripler output voltage |

## Table 3. Jumper JU3 Functions

| SHUNT LOCATION                                     | R5               | OPERATING MODE                                |
|----------------------------------------------------|------------------|-----------------------------------------------|
| 1-2 (PC trace shorts 1-2)                          | Connected to VN  | Regulate VN, -5V output voltage               |
| 2, 3 (cut open trace across 1-2, short across 2-3) | Connected to VNA | Regulate VNA, negative doubler output voltage |

## Negative Voltage Source

The MAX1748 EV kit features an option to choose which voltage source feeds the negative charge-pump regulator circuit. Jumper JU5 selects the input voltage source for the MAX1748's SUPN pin. Table 5 lists the options.

## Output Voltage Selection

## Boost Switching-Regulator Output Voltages

The MAX1748 EV kit's boost switching-regulator output is set to +10V by feedback resistors (R1, R2). To generate  output  voltages  other  than  +10V  (+2.7V  to  +13V), select different external voltage-divider resistors (R1, R2). The ceramic capacitors (C17, C18, C20) are rated to +10V. To set the voltage &gt;+10V, use higher-voltagerated capacitors. Refer to the Output Voltage Selection section in the MAX1748 data sheet for instructions on selecting the resistors. The input voltage range will be +2.7V to VPIN when selecting other output voltages.

## Positive Charge-Pump Output Voltages

The MAX1748 EV kit's positive charge-pump regulator output is set to +15V by feedback resistors (R3, R4). To generate output voltages other than +15V, select different external voltage-divider resistors (R3, R4). Refer to

<!-- image -->

## MAX1748 Evaluation Kit

the Output Voltage Selection section in the MAX1748 data sheet for instructions on selecting the resistors. See Table 4 for the jumper selection of input voltage ranges. Check that the capacitor voltage rating is adequate for the configuration.

## Positive Tripler Charge-Pump Output Voltages

The MAX1748 EV kit features a positive charge-pump voltage tripler circuit. Three components (C10, C11, D4) must be installed and jumper JU2 modified to utilize the tripler circuit. Capacitors C10 and C11 should be 0.1µF (Taiyo Yuden, UMK212BJ104MG recommended) with a voltage rating equal to or greater than the expected output voltage at VPA. Lower cost diodes with higher forward voltage drops can be used for D4, if enough voltage headroom is available. The shorted PC trace across pinholes 1 and 2 must be cut open and a jumper wire installed in pinholes 2 and 3 at jumper JU2. Note: VPA will now be the regulated output.

To generate a different voltage, select proper voltagedivider resistors (R3, R4) while taking into consideration input voltages and jumper settings. Refer to the Output Voltage Selection section in the MAX1748 data sheet for instructions on selecting the resistors. See Table 4 for jumper selection of input voltage ranges.

## Negative Charge-Pump Output Voltages

The MAX1748 EV kit's negative charge-pump regulator output is set to -5V by feedback resistors (R5, R6). To generate different voltages, select different external voltage-divider resistors (R5, R6) while taking into consideration input voltages and jumper settings. Refer to the Output Voltage Selection section in the MAX1748 data sheet for instructions on selecting the resistors. See Table 5 for the jumper selection of input voltage ranges.

## Negative Doubler Charge-Pump Output Voltages

The MAX1748 EV kit features a negative charge-pump voltage doubler circuit. Three components (C12, C13, D5) must be installed and jumper JU3 modified to utilize the doubler circuit. Capacitors C12 and C13 should be 0.1µF (Taiyo Yuden UMK212BJ104MG recommended) with a voltage rating equal to or greater than the expected output voltage at VNA. Lower cost diodes with higher forward voltage drops can be used for D5 if enough voltage headroom is available. The shorted PC trace across pinholes 1 and 2 must be cut open and a jumper wire installed in pinholes 2 and 3 at jumper JU3.

To generate a different negative output voltage, select different external voltage-divider resistors (R5, R6) while taking into consideration input voltages and jumper settings.  Refer  to  the Output Voltage Selection section in the MAX1748 data sheet for instructions on selecting the

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1748 Evaluation Kit

## Table 4. Jumper JU4 Functions

| SHUNT LOCATION   | SUPP PIN         | OPERATING MODE                                        |
|------------------|------------------|-------------------------------------------------------|
| 1-2              | Connected to PIN | PIN voltage source feeds positive charge-pump input   |
| 2-3              | Connected to V1  | Boost converter (V1) feeds positive charge-pump input |

## Table 5. Jumper JU5 Functions

| SHUNT LOCATION   | SUPN PIN         | OPERATING MODE                                        |
|------------------|------------------|-------------------------------------------------------|
| 1-2              | Connected to PIN | PIN voltage source feeds negative charge-pump input   |
| 2-3              | Connected to V1  | Boost converter (V1) feeds negative charge-pump input |

## Table 6. Component List

|          |     | DESCRIPTION                                                                   | DESCRIPTION                                                                   |
|----------|-----|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| PART     | QTY | V OUT = 5.1V, V IN = 3.0V, I OUT = 50MA (MAX)                                 | V OUT = 5.1V, V IN = 3.0V, I OUT = 100MA (MAX)                                |
| C4, C6   | 2   | 0.22µF, 16V X7R ceramic capacitors (0603)                                     | 0.22µF, 16V X7R ceramic capacitors (0603)                                     |
| C8       | 1   | 0.0022µF, 10V X5R ceramic capacitor (0603)                                    | 0.0022µF, 10V X5R ceramic capacitor (0603)                                    |
| C18      | 0   | Open                                                                          | Open                                                                          |
| C19      | 1   | 220pF, 10V X5R ceramic capacitor (0603)                                       | 470pF, 10V X5R ceramic capacitor (0603)                                       |
| C21, C17 | 2   | 4.7µF, 6.3V X7R ceramic capacitors (1210)                                     | 10µF, 6.3V X7R ceramic capacitors (1210)                                      |
| L1       | 1   | 10µH, 0.3A inductor Coilcraft LPO2506IB-103 or Sumida CMD4D08-100 recommended | 33µH, 0.3A inductor Sumida CMD4D08-330 or Coilcraft LPO2506IB-333 recommended |
| R1       | 1   | 154k Ω ± 1% resistor (0805)                                                   | 154k Ω ± 1% resistor (0805)                                                   |
| R3       | 1   | 309k Ω ± 1% resistor (0805)                                                   | 309k Ω ± 1% resistor (0805)                                                   |
| R5       | 1   | 158k Ω ± 1% resistor (0805)                                                   | 158k Ω ± 1% resistor (0805)                                                   |
| R7       | 1   | 10k Ω ± 5% resistor (0805)                                                    | 24k Ω ± 5% resistor (0805)                                                    |
| U1       | 1   | MAX1779EUE (16-pin TSSOP)                                                     | MAX1779EUE (16-pin TSSOP)                                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

resistors. See Table 5 for jumper selection of input voltage ranges.

## Evaluating the MAX1779

## MAX1779 Reconfiguration

The MAX1748 EV kit can be reconfigured to evaluate the MAX1779EUE. Replace the components listed in Table 6. The boost switching regulator output (V1) +5.1V and provides up to 50mA to 100mA of current, depending on the inductor value and output capacitance chosen. The positive and negative charge-pump outputs provide +9V (VP) and -4V (VN) at their outputs. Table 6 below lists the components that must be replaced to evaluate a MAX1779.

## MAX1748 Evaluation Kit

<!-- image -->

Figure 1. MAX1748 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1748 Evaluation Kit

<!-- image -->

Figure 2. MAX1748 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1748 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1748 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6