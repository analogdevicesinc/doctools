<!-- lastmod 2022-08-02 -->
## General Description

The MAX1864 evaluation kit (EV kit) demonstrates the MAX1864's standard application circuit. This EV kit operates from 8V to 24V, generating three positive output voltages.

The MAX1864 EV kit includes a current-mode synchronous step-down controller and two positive regulator gain blocks. The main synchronous step-down controller  provides  a  3.3V  output  voltage  with  1A  output current from an 8V to 24V input voltage range. The positive  regulator  gain  blocks  use  an  external  PNP  pass transistor  to  generate  2.5V  with  300mA  output  current from the main 3.3V output, and 5V with 100mA output current using coupled windings from the step-down converter. The EV kit operates at 200kHz switching frequency, allowing the use of low-cost aluminum electrolytic capacitors and a low-cost power transformer.

This EV kit is a fully assembled and tested circuit board. It also allows the evaluation of other main output voltages in the 1.236V to 5.5V range by installing feedback resistors R8 and R9.

| DESIGNATION     |   QTY | DESCRIPTION                                                                              |
|-----------------|-------|------------------------------------------------------------------------------------------|
| C1              |     1 | 100µF, 35V aluminum electrolytic capacitor Sanyo 35MV100AX                               |
| C2, C9          |     2 | 470µF, 10V aluminum electrolytic capacitors Sanyo 10MV470AX                              |
| C3              |     1 | 0.1µF ceramic capacitor (0805)                                                           |
| C4              |     1 | 1µF, 10V X5R ceramic capacitor (0805) Taiyo Yuden LMK212BJ105MG                          |
| C5              |     1 | 8200pF ceramic capacitor (0805)                                                          |
| C6, C7, C8, C12 |     4 | 10µF, 6.3V X5R ceramic capacitors (1210) Taiyo Yuden JMK325BJ106MN or TDK C3216X5R0J106M |
| C10             |     1 | 4700pF ceramic capacitor (0805)                                                          |
| C11             |     1 | 2200pF ceramic capacitor (0805)                                                          |
| C13             |     1 | 1µF, 25V X7R ceramic capacitor (1206) Taiyo Yuden TMK316BJ105ML or TDK C3216X7R1E105M    |

- ♦ 8V to 24V Input Voltage Range
- ♦ Preset 3.3V Main Output Voltage
- ♦ 1A Main Output Current
- ♦ 200kHz Switching Frequency
- ♦ No Current-Sense Resistor
- ♦ Linear Regulator Output Voltages 2.5V at 300mA 5.0V at 100mA
- ♦ Adjustable Output Voltages
- ♦ Power-Good Output
- ♦ 16-Pin QSOP Package
- ♦ Low-Cost Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1864EVKIT | 0°C to +70°C  | 16 QSOP      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| R1            |     1 | 47k Ω ±5% resistor (0805)                                                   |
| R2, R5        |     2 | 220 Ω ±5% resistors (0805)                                                  |
| R3, R4, R12   |     3 | 10k Ω ±1% resistors (0805)                                                  |
| R6            |     1 | 30.1k Ω ±1% resistor (0805)                                                 |
| R7            |     1 | 100k Ω ±5% resistor (0805)                                                  |
| R8, R10, R11  |     0 | Not installed (0805)                                                        |
| R9            |     0 | Not installed (short PC trace)                                              |
| R13, R14      |     2 | 10 Ω ±5% resistors (0805)                                                   |
| D1            |     1 | Schottky diode Central Semiconductor CMPSH-3                                |
| D2            |     1 | 0.5A Schottky diode Nihon EP05Q03L or ON Semiconductor (Motorola) MBR0540   |
| N1A, N1B      |     1 | Dual N-channel MOSFET International Rectifier IRF7303 or Fairchild NDS9956A |
| Q1            |     1 | PNP transistor (DPAK) Fairchild KSH30                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

Features

## MAX1864 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| Q2            |     1 | PNP transistor (TO-92) Fairchild 2N3905 or On Semiconductor (Motorola) 2N3905 |
| T1            |     1 | Transformer Coiltronics VP3-0047 ICE Components (Alternate Supplier)          |
| U1            |     1 | MAX1864TEEE (16-QSOP)                                                         |
| None          |     1 | MAX1864 PC board                                                              |
| None          |     1 | MAX1864 data sheet                                                            |
| None          |     1 | MAX1864 EV kit data sheet                                                     |

## Component Suppliers

| SUPPLIER                    | PHONE        | FAX          |
|-----------------------------|--------------|--------------|
| Central Semiconductor       | 631-435-1110 | 631-435-1824 |
| Coilcraft                   | 847-639-6400 | 847-639-1469 |
| Coiltronics                 | 561-639-5000 | 561-742-0134 |
| ICE Components              | 703-257-7740 | 703-257-7547 |
| International Rectifier     | 310-322-3331 | 310-252-7175 |
| Fairchild                   | 888-522-5372 | 972-910-8036 |
| Nihon                       | 661-867-2555 | 661-867-2698 |
| On Semiconductor (Motorola) | 602-303-5454 | 602-994-6430 |
| Taiyo Yuden                 | 408-573-4150 | 408-573-4159 |
| TDK                         | 547-803-6100 | 847-390-4405 |

## Quick Start

The MAX1864 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +8V to +24V supply to the VIN pad. Connect  ground to the GND pad.
- 2) Connect voltmeters to VOUT1, VOUT2, and VOUT3 pads.
- 3) Turn the power supply on and verify that the output voltages are +3.3V (VOUT1), +2.5V (VOUT2), and +5V (VOUT3).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 4) See the Evaluating Other Output Voltages section to modify the board for different output voltages.

Jumper Settings

## Table 1. Jumper JU1 Functions (Fixed/Adj. Current-Limit Selection)

| JU1                 | ILIM PIN                                                                                                                                                | CURRENT-LIMIT THRESHOLD   |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| Short (PC trace)    | Connected                                                                                                                                               | 250mV (default)           |
| Open (cut PC trace) | Connected to VL via voltage divider R10/R11. Refer to the Current-Limit Circuit section in the MAX1864 data sheet for information on selecting R10/R11. | Adjustable                |

## Evaluating Other Output Voltages

The EV kit main output is preset to 3.3V, however the output voltage can also be adjusted between 1.236V and (0.8V x VIN) by selecting R8 and R9 values. Simply cut the PC board trace that is shorting R9, then select feedback resistors R8 and R9. Select R9 in the 5k Ω to 50k Ω range, and calculate R8 with the following equation:

<!-- formula-not-decoded -->

where VFB = 1.236V. For output voltages greater than 5.5V, refer to the Output Voltage Selection section in the MAX1864 data sheet.

The positive linear-regulator output voltages are set by connecting a voltage divider from the main output to FB2/FB3 to GND. In the 5k Ω to 50k Ω range, select R4 or R12, and calculate R3 or R6 with the following equation:

R3 = R4 [(VOUT/VFB) - 1] R6 = R12 [(VOUT/VFB) - 1]

where VFB = 1.24V.

<!-- image -->

## MAX1864 Evaluation Kit

Figure 1. MAX1864 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1864 Evaluation Kit

<!-- image -->

Figure 2. MAX1864 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1864 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1864 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4