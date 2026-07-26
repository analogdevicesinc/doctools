<!-- lastmod 2022-08-03 -->
## General Description

The MAX8739 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that provides the voltages and features required for active-matrix, thin-film transistor (TFT), liquid-crystal displays (LCDs). The EV kit contains a step-up switching regulator, a positive two-stage charge-pump for the TFT gate-on supply, and a negative single-stage charge pump for the  TFT  gate-off  supply.  Also  included  are  two  operational  amplifiers  that  can  be  used  to  drive  the  LCD backplane (VCOM) or the gamma-correction divider string,  and  a  logic-controlled,  high-voltage  switch  with adjustable delay.

The EV kit operates from a DC supply voltage of +1.8V to +5.5V. The step-up switching regulator is configured for a +8V output providing at least 250mA from a 2.2V input.  The  positive  charge pump is configured for a +22V output providing at least 20mA. The negative charge pump is configured for a -7V output providing at least  20mA. The two operational amplifiers are both configured for +4V, each capable of providing up to ±150mA peak. The high-voltage switch can be used to delay the output of the positive charge pump's startup. The delay time is set with an external capacitor, C6.

The MAX8739 EV kit demonstrates low quiescent current and high efficiency (85%) for maximum battery life. Operation at 1.2MHz allows the use of tiny surfacemount components. The MAX8739 TQFN package (0.8mm maximum height) with low-profile external components allows this circuit to be less than 1.25mm high.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                                                |
|----------------|-------|--------------------------------------------------------------------------------------------|
| C1             |     1 | 0.22µF ±10%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1C224K Taiyo Yuden EMK107BJ224KA |
| C2, C7, C8, C9 |     0 | Not installed, capacitors (0603)                                                           |
| C3             |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (1206) TDK C3216X5R0J106M-0.95                       |
| C4, C5         |     2 | 4.7µF ±20%, 10V X5R ceramic capacitors (1206) TDK C3216X5R1A475M-0.9                       |

Component List continued on next page.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

- ♦ +1.8V to +5.5V Input Range
- ♦ Output Voltages
- +8V Output at 250mA (2.2V Input Step-Up Switching Regulator)
- +22V Output at 20mA (Positive Charge Pump)
- -7V Output at 20mA (Negative Charge Pump)
- +4V Output at ±150mA (Operational Amplifiers VOUT1 and VOUT2)
- ♦ Resistor-Adjustable Switching Regulator and OpAmp Output Voltages
- ♦ Logic-Controlled, High-Voltage Switch with Adjustable Delay
- ♦ Greater than 85% Efficiency (Step-Up Switching Regulator)
- ♦ 1.2MHz Step-Up Switching Frequency
- ♦ Selectable 600kHz Step-Up Switching Frequency (Component Changes Required)
- ♦ Low-Profile Surface-Mount Components (1.25mm max)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE                  |
|--------------|--------------|-----------------------------|
| MAX8739EVKIT | 0°C to +70°C | 20 TQFN (5mm x 5mm x 0.8mm) |

## Quick Start

The MAX8739 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment

- 1.8V to 5.5V, 2A DC power supply
- Voltmeters

## Procedure

- 1) Verify that there is a shunt installed across jumper JU2.
- 2) Connect the positive terminal of the power supply to  the  VIN  pad.  Connect the negative terminal of the power supply to the GND pad.

Maxim Integrated Products

1

## MAX8739 Evaluation Kit

| DESIGNATION       |   QTY | DESCRIPTION                                                                                |
|-------------------|-------|--------------------------------------------------------------------------------------------|
| C6                |     1 | 220pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H221K or equivalent              |
| C10               |     1 | 0.033µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E333K or equivalent            |
| C11-C16, C18, C19 |     8 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K Taiyo Yuden UMK107BJ104KA |
| C17               |     1 | 100µF ±20%, 16V aluminum electrolytic capacitor (6.3mm x 5mm) Sanyo 16MV100UAX             |
| C20               |     1 | 1µF ±10%, 10V X7R ceramic capacitor (0603) TDK C1608X7R1A105K Taiyo Yuden LMK107BJ105KA    |
| D1                |     1 | 1A, 30V Schottky diode (S-flat) Toshiba CRS02 (Top mark: S2)                               |

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                         |
|---------------|-------|-----------------------------------------------------------------------------------------------------|
| D2, D3, D4    |     3 | 200mA, 100V dual diodes (SOT23) Fairchild MMBD4148SE (Top mark: D4) Central CMPD7000 (top mark C5C) |
| JU1           |     0 | Not installed, 2-pin header                                                                         |
| JU2           |     1 | 2-pin header                                                                                        |
| L1            |     1 | 3.0µH, 1.55A power inductor Sumida CLS5D11HPNP-3R0                                                  |
| R1            |     1 | 169k Ω ±1% resistor (0805)                                                                          |
| R2            |     1 | 30.9k Ω ±1% resistor (0805)                                                                         |
| R3-R6         |     4 | 100k Ω ±1% resistors (0805)                                                                         |
| R7, R8, R9    |     3 | 100k Ω ±5% resistors (0805)                                                                         |
| R10, R11      |     0 | Not installed, resistors (0805)                                                                     |
| R12-R15       |     0 | Not installed, shorted by PC trace (0805)                                                           |
| R16           |     1 | 10 Ω ±5% resistor (0603)                                                                            |
| U1            |     1 | MAX8739ETP+ (20-pin TQFN, 5mm x 5mm)                                                                |
| -             |     1 | Shunt                                                                                               |
| -             |     1 | MAX8739 EV kit PC board                                                                             |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| Fairchild  | 888-522-5372 | -            | www.fairchildsemi.com |
| Sanyo      | 619-661-6322 | 619-661-1055 | www.sanyovideo.com    |
| Sumida     | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Toshiba    | 949-455-2000 | 949-859-3963 | www.toshiba.com/taec  |

Note: Indicate that you are using the MAX8739 when contacting these component suppliers.

- 3) Turn on the power supply and verify that the stepup switching regulator output (VMAIN) is +8V.
- 4) Verify  that  the  gate-on  supply  (GON) is approximately +22V.
- 5) Verify  that  the  gate-off  supply  (GOFF)  is  approximately -7V.
- 6) Verify that the operational amplifier output 1 (VOUT1) is +4V.
- 7) Verify that the operational amplifier output 2 (VOUT2) is +4V.
- 8) Verify that the high-voltage switch common (COM) is +22V.

For instructions on selecting the step-up switching regulator feedback and op-amp divider resistors for other output voltages, see the Output-Voltage Selection section.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Detailed Description

The MAX8739 EV kit contains a step-up switching regulator, a positive two-stage charge pump, a negative single-stage charge pump, two operational amplifiers, and a high-voltage switch matrix. The EV kit operates from a DC power supply between +1.8V and +5.5V.

As configured, the step-up switching regulator (VMAIN) generates a +8V output and can provide at least 200mA from a +1.8V input. It also provides at least 260mA from a 2.2V input and 370mA from a 3.0V input. Loading the charge pumps reduces the available VMAIN output current. The step-up switching-regulator output voltage can be adjusted up to +13V with other feedback resistors (see the Output-Voltage Selection section).

The GON consists of two positive charge-pump stages to  generate approximately +22V and can provide greater than 20mA. The GOFF consists of a single negative  charge-pump stage to generate approximately -7V and can provide greater than 20mA. GOFF reduces the available VMAIN current proportionally. Loading GON reduces the available VMAIN current by 3 times GON load.

The operational amplifier outputs, VOUT1 and VOUT2, are set to +4V and can source or sink approximately 150mA. These two outputs can be reconfigured to other voltages with voltage-divider resistors R3-R6 (see the Output-Voltage Selection section).

The high-voltage switch between the SRC and COM pins can be used to delay the GON startup. The GON voltage is connected to the source of the switch (SRC) and the drain of the switch (COM) is used as an output. The startup delay time is set with an external capacitor, C10, at the DEL pin. Refer to the Switch Control and Delay section in the MAX8739 data sheet for information on setting the delay time.

The switch between the SRC and COM pins and the switch between the COM and DRN pins can be controlled by jumper JU2 or by an external TTL logic source connected to the CTL pad. See Table 2 for switch states and refer to the Switch Control and Delay section in the MAX8739 data sheet for further information  about  the  high-voltage  switches  connected to the COM pin.

## Jumper Selection

## Switching Frequency Selection (FREQ)

The MAX8739 EV kit features an option to choose the step-up regulator switching frequency. Jumper JU1 selects the switching frequency. Table 1 lists the selectable jumper options. The EV kit is configured for 1.2MHz operation. Optimum performance at lower frequencies

<!-- image -->

## MAX8739 Evaluation Kit

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | FREQ PIN                    | MAX8739 EV KIT FREQUENCY   |
|------------------|-----------------------------|----------------------------|
| None (default)   | Connected to VIN through R7 | 1.2MHz                     |
| Installed        | Connected to GND            | 600kHz                     |

requires a larger inductor value (refer to the Inductor Selection section in  the  MAX8739 data sheet). To set the switching frequency at 600kHz, install a short across JU1.

## High-Voltage Switch Control (CTL)

The MAX8739 EV kit features an option to control the high-voltage switches between SRC, COM, and DRN

Table 2. Jumper JU2 Functions

| SHUNT LOCATION      | CTL PIN                          | MAX8739 COM OUTPUT                                                             |
|---------------------|----------------------------------|--------------------------------------------------------------------------------|
| Installed (default) | Connected to VIN                 | COM connected to SRC (GON = +22V)                                              |
| None                | Connected to GND through R8      | COM connected to DRN                                                           |
| None                | Connected to external TTL source | Logic-low, COM connected to DRN; logic-high, COM connected to SRC (GON = +22V) |

on the MAX8739. Table 2 lists the selectable JU2 jumper options.

## Output-Voltage Selection

## Step-Up Switching Regulator Output Voltage (VMAIN)

The MAX8739 EV kit's step-up switching-regulator output (VMAIN) is set to +8V by feedback resistors R1 and R2. To generate output voltages other than +8V (up to +13V), select different external voltage-divider resistors, R1 and R2. Note that changing the VMAIN voltage setting changes the GON and GOFF charge-pump output voltages. Also, output capacitors C4 and C5 are rated for +10V. To set the output voltage greater than +10V, use higher voltage-rated capacitors. Refer to the Output-Voltage Selection section in the MAX8739 data sheet for instructions on selecting resistors R1 and R2.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8739 Evaluation Kit

## Operational Amplifier Output Voltages (VOUT1 and VOUT2)

The MAX8739 EV kit's operational amplifiers are configured as unity-gain buffers by the PC board traces shorting R13 between NEG1 and OUT1, and R14

Figure 1. MAX8739 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX8739 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX8739 Evaluation Kit

Figure 3. MAX8739 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX8739 EV Kit PC Board Layout-GND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8739 Evaluation Kit

Figure 5. MAX8739 EV Kit PC Board Layout-Inner Layer 2

<!-- image -->

Figure 6. MAX8739 EV Kit PC Board Layout-Solder Side

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Freed