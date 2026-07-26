<!-- lastmod 2022-08-02 -->
## General Description

The MAX8758 evaluation kit (EV kit) is a fully assembled and tested surface-mount PC board that provides the voltages and features required for active-matrix, thin-film transistor (TFT), liquid-crystal display (LCD) applications. The EV kit contains a step-up switching regulator, a positive two-stage charge pump for the TFT gate-on supply, and a negative single-stage charge pump for the TFT gate-off supply. The included high-speed operational amplifier can be used to drive the LCD backplane (VCOM) or the gamma-correction divider string, and a logic-controlled, high-voltage switch with adjustable delay.

The EV kit operates from a +2.2V to +5.5V DC supply voltage. The step-up switching regulator is configured for a +8.5V output, providing at least 330mA from 3.0V. The positive charge pump is configured for a +23V output providing at least 20mA. The negative charge pump is  configured for a -8V output providing at least 20mA. The high-speed operational amplifier is configured for +4.25V, capable of providing up to ±150mA peak. The high-voltage switch can be used to delay the output of the positive charge pump's startup. The delay time is set with an external capacitor.

The MAX8758 EV kit demonstrates low quiescent current and high efficiency for maximum battery life. Operation at 1.2MHz allows the use of tiny surfacemount components. The MAX8758 TQFN package (0.8mm maximum height) with low-profile external components allows this circuit to be less than 1.25mm high.

| DESIGNATION      |   QTY | DESCRIPTION                                                       |
|------------------|-------|-------------------------------------------------------------------|
| C1, C2           |     2 | 4.7µF ±10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J475K |
| C3, C4, C5       |     3 | 4.7µF ±20%, 10V X5R ceramic capacitors (1206) TDK C3216X5R1A475M  |
| C6, C10, C14-C20 |     9 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K  |
| C7               |     0 | Not installed capacitor (0603)                                    |
| C8               |     0 | Not installed capacitor (1206)                                    |
| C9               |     1 | 220pF ±5%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H221J    |
| C11              |     1 | 0.22µF ±20%, 16V X5R ceramic capacitor (0603) TDK C1608X5R1C224M  |

- ♦ +2.2V to +5.5V Input Range
- ♦ Output Voltages
- +8.5V Output at 330mA (Step-Up Switching Regulator, 3V Input)
- +23V Output at 20mA (Positive Charge Pump)
- -8V Output at 20mA (Negative Charge Pump)
- +4.25V Output at ±150mA (Operational Amplifier, VCOM)
- ♦ Resistor-Adjustable Switching Regulator and Op-Amp Output Voltages
- ♦ Logic-Controlled, High-Voltage Switch with Adjustable Delay
- ♦ Greater Than 85% Efficiency (Step-Up Switching Regulator)
- ♦ Selectable 640kHz/1.2MHz Step-Up Switching Frequency
- ♦ Low-Profile, Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE                  |
|--------------|--------------|-----------------------------|
| MAX8758EVKIT | 0°C to +70°C | 24 TQFN (4mm x 4mm x 0.8mm) |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                    |
|---------------|-------|--------------------------------------------------------------------------------|
| C12           |     1 | 0.033µF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H333K              |
| C13           |     1 | 0.022µF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H223K              |
| C21           |     1 | 150pF ±5%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H151J                 |
| C22           |     1 | 1500pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H152K               |
| C23           |     1 | 100µF ±20%, 16V aluminum electrolytic capacitor (6.3mm x 5mm) Sanyo 16MV100UAX |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Features

## MAX8758 Evaluation Kit

| DESIGNATION        |   QTY | DESCRIPTION                                                                                        |
|--------------------|-------|----------------------------------------------------------------------------------------------------|
| C24                |     1 | 47pF ±5%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H470J                                      |
| D1                 |     1 | 1A, 30V Schottky diode (S-flat) Nihon EP10QY03 Toshiba CRS02                                       |
| D2, D3, D4         |     3 | 200mA, 100V dual diodes (SOT23) Fairchild MMBD4148SE (Top mark D4) Central CMPD7000 (Top mark C5C) |
| JU1, JU2, JU3, JU6 |     4 | 2-pin headers                                                                                      |
| JU4, JU5           |     2 | 3-pin headers                                                                                      |
| L1                 |     1 | 4.7µH, 1.2A power inductor Sumida CR5D11-4R7                                                       |
| R1                 |     1 | 200k Ω ±1% resistor (0805)                                                                         |

## Component Suppliers

| SUPPLIER              | PHONE         | WEBSITE               |
|-----------------------|---------------|-----------------------|
| Central Semiconductor | 631-435-1110  | www.centralsemi.com   |
| Fairchild             | 888-522-5372  | www.fairchildsemi.com |
| Nihon                 | 81-33343-3411 | www.niec.co.jp        |
| Sanyo                 | 619-661-6322  | www.sanyovideo.com    |
| Sumida                | 847-545-6700  | www.sumida.com        |
| TDK                   | 847-803-6100  | www.component.tdk.com |
| Toshiba               | 949-455-2000  | www.toshiba.com/taec  |

Note: Indicate that you are using the MAX8758 when contacting these component suppliers.

## Quick Start

The MAX8758 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment

- +2.2V to +5.5V, 2A DC power supply
- Voltmeter

## Procedure

- 1) Verify that there is no shunt across jumper JU1 (switching at 1.2MHz).

## Component List (continued)

| DESIGNATION     |   QTY | DESCRIPTION                               |
|-----------------|-------|-------------------------------------------|
| R2              |     1 | 34k Ω ±1% resistor (0805)                 |
| R3, R4          |     2 | 100k Ω ±1% resistors (0603)               |
| R5              |     1 | 51.1k Ω ±1% resistor (0805)               |
| R6              |     1 | 20k Ω ±1% resistor (0805)                 |
| R7, R8, R9, R11 |     4 | 100k Ω ±5% resistors (0603)               |
| R10             |     1 | 1k Ω ±5% resistor (0603)                  |
| R12             |     0 | Not installed, shorted by PC trace (0603) |
| R13             |     1 | 20 Ω ±5% resistor (0805)                  |
| U1              |     1 | MAX8758ETG (24-pin TQFN 4mm x 4mm)        |
| -               |     6 | Shunts                                    |
| -               |     1 | MAX8758 PC board                          |

- 2) Verify  that  there  is  a  shunt  installed  across  jumper JU2 (CTL connected to LDO).
- 3) Verify that there are shunts installed across JU4 and JU5 pins 2 and 3.
- 4) Connect the positive terminal of the power supply to the  VIN  pad.  Connect the negative terminal of the power supply to the GND pad.
- 5) Turn on the power supply and verify that the stepup switching regulator output (VMAIN) is +8.5V.
- 6) Verify that the gate-on supply (VP) is approximately +23V.
- 7) Verify that the gate-off supply (VN) is approximately -8V.
- 8) Verify  that  the  operational-amplifier  output  (VCOM) is +4.25V.
- 9) Verify  that  the  high-voltage  switch  common (GON) is +23V.

For instructions on selecting the step-up switching regulator feedback and op-amp divider resistors for other output voltages, see the Output-Voltage Selection section.

## Detailed Description

The MAX8758 EV kit contains a step-up switching regulator, a positive two-stage charge pump, a negative single-stage charge pump, two operational amplifiers, and a high-voltage switch matrix. The EV kit operates from a +2.2V to +5.5V DC power supply that can provide at least 2A. The switching frequency is jumper selectable

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

between 640kHz and 1.2MHz, but the circuit is configured to operate at 1.2MHz.

As configured and with no load on the charge pumps, the step-up switching regulator (VMAIN) generates a +8.5V output and can provide at least 350mA from +2.6V input. It also provides at least 410mA from 3V input and 600mA from 4.5V input. The step-up switching-regulator output voltage can be adjusted up to +13V with other feedback resistors. For details, see the Output-Voltage Selection section.

The GON consists of two positive charge-pump stages to generate approximately +23V and can provide more than 20mA. The GOFF consists of a single negative charge-pump stage to generate approximately -8V and can provide more than 20mA. Loading the GON charge pump reduces the available output current on VMAIN by three times the GON load current. Loading the GOFF reduces the available VMAIN by the amount of the GOFF current.

The operational-amplifier output VCOM is set to +4.25V and can source or sink approximately 150mA. These outputs can be reconfigured to other voltages with voltage-divider resistors. See the Output-Voltage Selection section for details.

The high-voltage switch between the SRC and GON pins can be used to delay the VP startup. The VP voltage is connected to the switch source (SRC) and the switch drain (GON) is used as an output. The startup delay time is set with an external capacitor at the DLP pin.

The switch between the SRC and GON pins and the switch between the GON and DRN pins can be controlled by jumpers JU2 and JU4 or by an external

## MAX8758 Evaluation Kit

TTL-logic source connected to the CTL pad and JU4. See Table 2 for switch states, and refer to the HighVoltage Switch Control section in the MAX8758 data sheet for further information about the high-voltage switches connected to the GON pin.

## Jumper Selection

## Switching Frequency Selection (FREQ)

The MAX8758 EV kit features an option to choose the step-up regulator switching frequency. Jumper JU1 selects the switching frequency. Table 1 lists the selectable jumper options. The EV kit is configured for 1.2MHz operation. Optimum performance at lower frequencies may require a larger inductor value. Refer to the Step-Up Regulator Inductor Selection section in the MAX8758 data sheet for more information.

Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | FREQ PIN                    | SWITCHING FREQUENCY   |
|------------------|-----------------------------|-----------------------|
| None (default)   | Connected to VIN through R7 | 1.2MHz                |
| Installed        | Connected to GND            | 640kHz                |

## High-Voltage Switch Control (CTL and MODE)

The MAX8758 EV kit features an option to control the high-voltage switches between SRC, GON, and DRN on the MAX8758. GON can be connected to SRC (connected to VP, the positive charge-pump output) or can be allowed to discharge through DRN (connected to a

Table 2. On-Board, High-Voltage Switch Control Using JU2 and JU4

| JU2 SHUNT LOCATION                             | JU4 SHUNT LOCATION                                   | GON OUTPUT                                                                                                                          |
|------------------------------------------------|------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| Installed, CTL connected to LDO                | Pins 2 and 3, MODE connected to LDO                  | GON connected to SRC pin, SRC = VP                                                                                                  |
| Not installed, CTL connected to GND through R9 | Pins 2 and 3, MODE connected to LDO                  | GON connected to DRN pin, GON is discharged through R10                                                                             |
| Not installed, CTL driven externally           | Pins 2 and 3, MODE connected to LDO                  | GON connected to SRC when CTL is logic-high and connected to DRN when CTL is logic-low                                              |
| Installed, CTL connected to LDO                | Pins 1 and 2, MODE connected to timing capacitor C21 | GON connected to SRC pin, SRC = VP                                                                                                  |
| Not installed, CTL pulled to GND through R9    | Pins 1 and 2, MODE connected to timing capacitor C21 | GON connected to DRN pin and discharged through R10 after delay set by C21                                                          |
| Not installed, CTL driven externally           | Pins 1 and 2, MODE connected to timing capacitor C21 | GON connected to SRC on rising edge of CTL; C21 begins charging on falling edge of CTL; when MODE reaches 2.5V, GON connects to DRN |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8758 Evaluation Kit

discharge resistor through JU5). Table 2 lists the selectable JU2 and JU4 jumper options. To use an external TTL source to control the high-voltage switch, leave JU2 open and connect the source to the CTL terminal. Refer to the High-Voltage Switch Control section in the MAX8758 data sheet for details.

## Shutdown Selection ( SHDN )

The MAX8758 EV kit incorporates JU3 to control the SHDN pin. Table 3 lists the JU3 functions.

## Table 3. Jumper JU3 Functions

| SHUNT LOCATION          | SHDN PIN                    | EV KIT OUTPUT   |
|-------------------------|-----------------------------|-----------------|
| Not installed (default) | Connected to VIN through R8 | Enabled         |
| Installed               | Connected to GND            | Disabled        |

## Connecting DRN

The MAX8758 EV kit provides options to discharge DRN through R10 either to VMAIN or to GND by using jumper JU5. Table 4 lists the JU5 functions.

## Table 4. Jumper JU5 Functions

| SHUNT LOCATION         | DRN PIN                        | GON OUTPUT                                                      |
|------------------------|--------------------------------|-----------------------------------------------------------------|
| Pins 1 and 2 (default) | Connected to VMAIN through R10 | GON is discharged through R10 to VMAIN when GON connects to DRN |
| Pins 2 and 3           | Connected to GND through R10   | GON is discharged through R10 to GND when GON connects to DRN   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Output-Voltage Selection

## Step-Up Switching Regulator Output Voltage (VMAIN)

The MAX8758 EV kit's step-up switching-regulator output (VMAIN) is set to +8.5V by feedback resistors R1 and R2. To generate output voltages other than +8.5V (up to +13V), select different external voltage-divider resistors, R1 and R2. Refer to the Output Voltage Selection section in the MAX8758 data sheet for instructions on selecting resistors R1 and R2.

Note that changing the VMAIN voltage setting changes the VP and VN charge-pump output voltages. Also, output capacitors C3 to C5 are rated for +10V. To set the output voltage greater than +10V, use higher-voltagerated capacitors and take care not to allow SRC (connected to VP) to exceed its 30V absolute maximum rating.

## Operational-Amplifier Output Voltage (VCOM)

The MAX8758 EV kit's operational amplifier is configured as a unity-gain buffer by the PC board trace shorting NEGB and OUTB pins. The voltage at the noninverting input, POSB, is set to half of VMAIN by voltagedivider resistors (R3, R4). To set VCOM to other voltages (up to VMAIN), select different divider resistors.

<!-- image -->

## MAX8758 Evaluation Kit

Figure 1. MAX8758 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8758 Evaluation Kit

Figure 2. MAX8758 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX8758 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 4. MAX8758 EV Kit PC Board Layout-Layer 2

<!-- image -->

## MAX8758 Evaluation Kit

Figure 5. MAX8758 EV Kit PC Board Layout-Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8758 Evaluation Kit

Figure 6. MAX8758 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

Springer