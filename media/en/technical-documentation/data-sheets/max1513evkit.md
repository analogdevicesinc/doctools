<!-- lastmod 2022-08-03 -->
## General Description

The MAX1513 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that provides voltages and features required for active-matrix, thinfilm  transistor  (TFT),  liquid-crystal  displays.  The  EV  kit contains a step-up switching regulator for TFT source driver  supply,  a  positive  two-stage  charge  pump and linear postregulator for the TFT gate-on (GON) supply, a negative one-stage charge pump and linear postregulator for the TFT gate-off (GOFF) supply, a gamma reference, and a low-voltage logic supply.

The EV kit operates from a DC supply voltage of +2.7V to +5.5V. The step-up switching regulator is configured for a +15V output at 500mA from a +4.5V to +5.5V input voltage. The positive charge pump and postregulator are configured for a +25V output using a single-stage charge pump providing 25mA. The negative charge pump  and  postregulator  are  configured  for  a -10V output using a single charge-pump stage providing 50mA. The gamma reference is configured for +14.7V providing 50mA. The low-voltage logic linear regulator is configured for +3.3V providing 500mA.

The MAX1513 EV kit demonstrates low-quiescent current  and  high  efficiency  (90%),  and  features  overload protection for the input and all outputs. Up to 1.5MHz operation allows the use of tiny surface-mount components and results in a circuit height less than 1.8mm.

The MAX1513 EV kit can be also used to evaluate the MAX1514, which is a MAX1513 without a gamma linearregulator controller and a buffer amplifier.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                   |
|---------------|-------|-----------------------------------------------------------------------------------------------|
| C1, C7        |     2 | 10µF ±20%, 6.3V X5R ceramic capacitors (0805) Taiyo Yuden JMK212BJ106MG or TDK C2012X5R0J106M |
| C2            |     1 | 10µF ±20%, 16V POSCAP (D10) Sanyo 16AQU10M                                                    |
| C3            |     1 | 0.22µF ±10%, 50V X7R ceramic capacitor (0805) TDK C2012X7R1H224K                              |
| C4, C5        |     0 | Not installed, capacitor (0603)                                                               |
| C6            |     1 | 2.2µF ±10%, 6.3V X5R ceramic capacitor (0603) Taiyo Yuden JMK107BJ225KA or TDK C1608X5R0J225K |

- ♦ +4.5V to +5.5V Input Range
- ♦ Output Voltages
- +15V Output at 500mA (Step-Up Switching Regulator)
- +25V Output at 25mA (Positive Charge Pump and Linear Postregulator)
- -10V Output at 50mA (Negative Charge Pump and Linear Postregulator)
- +14.7V Output at 50mA (Gamma Reference Regulator)
- +3.3V Output at 500mA (Low-Voltage Logic Supply)
- ♦ 90% Efficiency
- ♦ 1.5MHz Step-Up Switching Frequency (Selectable: 430kHz/750kHz/1.5MHz)
- ♦ Low-Profile Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE        |
|--------------|--------------|-------------------|
| MAX1513EVKIT | 0°C to +70°C | 20 TQFN 4mm × 4mm |

Note: To evaluate the MAX1514, request a MAX1514ETP free sample with the MAX1513 EV kit.

## Component List

| DESIGNATION     |   QTY | DESCRIPTION                                                                             |
|-----------------|-------|-----------------------------------------------------------------------------------------|
| C8              |     1 | 1µF ±10%, 10V X5R ceramic capacitor (0603) Taiyo Yuden LMK107BJ105KA TDK C1608X5R1A105K |
| C9-C12, C17-C21 |     9 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K                        |
| C13, C14        |     2 | 0.47µF ±20%, 16V X5R ceramic capacitors (0603) TDK C1608X5R1C474M                       |
| C15             |     1 | 0.47µF ±10%, 25V X7R ceramic capacitor (0805) TDK C2012X7R1E474K                        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Features

## MAX1513 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                         |
|---------------|-------|---------------------------------------------------------------------------------------------------------------------|
| C16           |     1 | 0.22µF ±10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A224K                                                    |
| C22           |     1 | 100µF ±20%, 16V aluminum electrolytic capacitor (6.3mm x 5mm) Sanyo 16MV100UAX                                      |
| D1            |     1 | 1.0A, 30V Schottky diode (S-flat) Nihon EP10QY03 (top mark Y9k) or Toshiba CRS02 (top mark S2)                      |
| D2, D3, D4    |     3 | 200mA, 100V dual diodes (SOT23) Fairchild MMBT4148SE (top mark D4) or Central Semiconductor CMPD7000 (top mark C5C) |
| D5            |     0 | Not installed, diode (SOT23)                                                                                        |
| JU1           |     1 | 2-pin header                                                                                                        |
| JU2           |     0 | Not installed, 2-pin header (shorted by PC trace)                                                                   |
| JU3           |     0 | Not installed, 3-pin header                                                                                         |
| JU4           |     0 | Not installed, 3-pin header (pins 1 and 2 are shorted by PC trace)                                                  |
| JU5           |     1 | 3-pin header                                                                                                        |
| L1            |     1 | 2.2µH, 3.3A power inductor Sumida CLS7D16-2R2NC                                                                     |
| N1            |     1 | 3A, 20V n-channel MOSFET (SOT23) Fairchild FDN339AN (top mark 339)                                                  |
| Q1            |     1 | 3A, 60V pnp bipolar transistor (SOT-223) Fairchild NZT660                                                           |

## Component List (continued)

| DESIGNATION     |   QTY | DESCRIPTION                                                                                                                  |
|-----------------|-------|------------------------------------------------------------------------------------------------------------------------------|
| Q2, Q3          |     2 | 200mA, 40V pnp bipolar transistors (SOT23) Fairchild MMBT3906 (top mark 2A) or Central Semiconductor CMPT3906 (top mark C2A) |
| Q4, Q5          |     2 | 200mA, 40V npn bipolar transistors (SOT23) Fairchild MMBT3904 (top mark 1A) or Central Semiconductor CMPT3904 (top mark C14) |
| R1              |     1 | 110k Ω ± 1% resistor (0603)                                                                                                  |
| R2, R6, R8, R10 |     4 | 10k Ω ± 1% resistors (0603)                                                                                                  |
| R3              |     1 | 249k Ω ±1% resistor (0603)                                                                                                   |
| R4              |     1 | 24.3k Ω ±1% resistor (0603)                                                                                                  |
| R5              |     1 | 191k Ω ±1% resistor (0603)                                                                                                   |
| R7              |     1 | 107k Ω ±1% resistor (0603)                                                                                                   |
| R9              |     1 | 16.5k Ω ±1% resistor (0603)                                                                                                  |
| R11             |     1 | 120k Ω ±5% resistor (0603)                                                                                                   |
| R12, R23        |     2 | 100k Ω ±5% resistors (0603)                                                                                                  |
| R13             |     1 | 10 Ω ±5% resistor (0603)                                                                                                     |
| R14, R20        |     0 | Not installed, resistors (0603)                                                                                              |
| R15             |     1 | 680 Ω ±5% resistor (0603)                                                                                                    |
| R16             |     1 | 1.5k Ω ±5% resistor (0603)                                                                                                   |
| R17             |     1 | 3.6k Ω ±5% resistor (0603)                                                                                                   |
| R18             |     1 | 6.80k Ω ±5% resistor (0603)                                                                                                  |
| R19             |     1 | 909 Ω ±1% resistor (0603)                                                                                                    |
| R21             |     1 | 182k Ω ±1% resistor (0603)                                                                                                   |
| R22             |     1 | 1M Ω ±1% resistor (0603)                                                                                                     |
| None            |     2 | Shunts                                                                                                                       |
| None            |     1 | MAX1513 PC board                                                                                                             |
| U1              |     1 | MAX1513ETJ (4mm x 4mm 20-pin thin QFN)                                                                                       |

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Fairchild             | 888-522-5372 | -            | www.fairchildsemi.com |
| Sanyo                 | 619-661-6322 | 619-661-1055 | www.sanyovideo.com    |
| Sumida                | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| TDK                   | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Toshiba               | 949-455-2000 | 949-859-3963 | www.toshiba.com/taec  |

Note: Indicate that you are using the MAX1513 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quick Start

The MAX1513 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment

- 4.5V to 5.5V, 3A DC power supply
- Voltmeters

## Connections and Setup

- 1) Verify that there is no shunt across jumper JU1.
- 2) Verify that there is a shunt across pins 1 and 2 of JU5.
- 3) Connect the positive terminal of the power supply to the  PIN  pad.  Connect the negative terminal of the power supply to the GND pad closest to PIN.
- 4) Turn on the power supply and verify that the stepup regulator output (VMAIN) is +15V.
- 5) Verify that the positive linear-regulator output (GON) is +25V.
- 6) Verify that the negative linear-regulator output (GOFF) is -10V.
- 7) Verify  that  the  logic-supply  linear-regulator  output (VLOG) is +3.3V.
- 8) Verify that the gamma-reference linear-regulator output (VGAM) is +14.7V.

For instructions on selecting the feedback resistors for other output voltages, refer to the Output Voltage Selection section in the MAX1513/MAX1514 IC data sheet.

## Detailed Description

The MAX1513 EV kit contains a step-up switching regulator,  a  positive  two-stage  charge  pump with positive high-voltage linear regulator, a negative one-stage charge pump with negative high-voltage linear regula-

## Table 1. Jumpers JU1 and JU5 Functions

| JU5 SHUNT LOCATION     | JU1 SHUNT LOCATION      | SDFR PIN                         | MAX1513 EV KIT OUTPUT                           |
|------------------------|-------------------------|----------------------------------|-------------------------------------------------|
| Pins 1 and 2 (default) | Not installed (default) | Connected to PIN through R23     | MAX1513 enabled with 1.5MHz switching frequency |
| Pins 2 and 3           | Not installed           | Connected to REF pin through R23 | MAX1513 enabled with 750kHz switching frequency |
| Not installed          | Not installed           | Floating                         | MAX1513 enabled with 430kHz switching frequency |
| Don't care             | Installed               | Connected to GND                 | MAX1513 disabled                                |

Note: For switching frequencies other than 1.5MHz, adjust inductor L1, output capacitor C2, and the current-sense components R20, C11, and R19. Refer to the Design Procedure section of the MAX1513/MAX1514 IC data sheet.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1513 Evaluation Kit

tor, a linear regulator for gamma reference, and a linear regulator for low-voltage logic supply. The EV kit operates from a +4.5V to +5.5V DC power supply. The switching frequency is 1.5MHz.

The step-up switching regulator (VMAIN) generates a +15V output and can provide at least 500mA from +4.5V to +5.5V. The TFT gate-on supply (GON) uses one of the two positive charge-pump stages to generate +25V and can deliver 25mA. The TFT gate-off supply (GOFF) uses a charge-pump stage to generate -10V and provides 50mA. The gamma reference (VGAM) is set to +14.7V using a linear regulator and an external pnp bipolar pass transistor and provides 50mA. The logic voltage supply (VLOG) is set to +3.3V using a linear regulator and an external pnp bipolar pass transistor and provides 500mA. All five outputs can be adjusted (refer to the Output Voltage Selection section in the MAX1513/MAX1514 IC data sheet).

## Jumper Selection

## Shutdown Mode

The MAX1513 EV kit features a shutdown mode that reduces the MAX1513 quiescent current to less than 150µA. The 2-pin jumper JU1 and 3-pin jumper JU5 control the shutdown mode and the frequency selection for  the  MAX1513 EV kit. Table 1 lists the selectable jumpers' options.

## Positive Charge Pumps

The positive charge pump of the MAX1513 EV kit features an option to cascade up to two charge pumps' stages. The first stage of the positive charge pump can be connected to the source from PIN or VMAIN. Jumpers JU2 and JU3 configure the number of stages and select the voltage source for the positive charge pump on the MAX1513 EV kit. Table 2 lists jumper JU2 and JU3 options. The default configuration of the

## MAX1513 Evaluation Kit

## Table 2. Jumpers JU2 and JU3 Functions

| JU3 SHUNT LOCATION      | JU2 SHUNT LOCATION      | GON RANGE                           |
|-------------------------|-------------------------|-------------------------------------|
| Not installed (default) | Shorted by PC trace     | Up to 2 x VMAIN-voltage drops       |
| Pins 1 and 2            | Not installed; PC trace | Up to 3 x VMAIN-voltage drops       |
| Pins 2 and 3            | Not installed; PC trace | Up to PIN + 2 x VMAIN-voltage drops |

charge pumps of the MAX1513 EV kit is a single charge pump powered from VMAIN. Refer to the Charge Pumps section of the MAX1513/MAX1514 IC data sheet for information on selecting a charge-pump configuration.

## Output Voltage Selection

## Step-Up Switching-Regulator Output Voltage

The MAX1513 EV kit's step-up switching-regulator output (VMAIN) is set to +15V by feedback resistors R1 and R2. To generate output voltages other than +15V, select different external voltage-divider resistors (R1, R2). Refer to the Output Voltage Selection section of the MAX1513/MAX1514 IC data sheet. Select an alternative output capacitor if VMAIN is set for higher than C2's (16V) rating.

Gate-On Linear-Regulator Output Voltage The MAX1513 EV kit's positive linear-regulator output (GON) is set to +25V by feedback resistors R5 and R6. To generate output voltages other than +25V, select different external voltage-divider resistors (R5, R6) and adjust the charge-pump input source and number of stages accordingly. Refer to the Output Voltage Selection section of the MAX1513/MAX1514 IC data sheet.

## Gate-Off Linear-Regulator Output Voltage

The MAX1513 EV kit's negative linear-regulator output (GOFF) is set to -10V by feedback resistors R3 and R4. To generate output voltages other than -10V, select different external voltage-divider resistors (R3, R4). Refer

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

to  the Output  Voltage  Selection section  of  the MAX1513/MAX1514 IC data sheet. Select an alternative output capacitor if GOFF is set for lower than C14's (16V) rating.

Gamma Linear-Regulator Output Voltage The MAX1513 EV kit's gamma linear-regulator output (VGAM) is set to +14.7V by feedback resistors R7 and R8. To generate output voltages other than +14.7V, select different external voltage-divider resistors (R7, R8). Refer to the Output Voltage Selection section of the MAX1513/MAX1514 IC data sheet. Select an alternative output capacitor if VGAM is set for higher than C13's (16V) rating.

## Logic Voltage Supply Linear-Regulator Output Voltage

The MAX1513 EV kit's logic voltage supply linear-regulator output (VLOG) is set to +3.3V by feedback resistors  R9  and R10. To generate output voltages other than +3.3V, select different external voltage-divider resistors (R9, R10) and an appropriate input voltage source. Refer to the Output Voltage Selection section of the MAX1513/MAX1514 IC data sheet.

## Evaluating the MAX1514

To evaluate the MAX1514 with the MAX1513 EV kit, replace the MAX1513ETP with a MAX1514ETP.

<!-- image -->

## MAX1513 Evaluation Kit

Figure 1. MAX1513 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1513 Evaluation Kit

Figure 2. MAX1513 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX1513 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1513 Evaluation Kit

<!-- image -->

Figure 4. MAX1513 EV Kit PC Board Layout-Layer 2 (GND)

<!-- image -->

Figure 5. MAX1513 EV Kit PC Board Layout-Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1513 Evaluation Kit

Figure 6. MAX1513 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8