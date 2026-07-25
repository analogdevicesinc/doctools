<!-- lastmod 2022-08-04 -->
## General Description

The MAX1715 evaluation kit (EV kit) demonstrates the MAX1715's standard 4A application circuit. This DC-DC converter steps down high-voltage batteries and/or AC adapters, generating precision, low-voltage rails for use as chipset, DRAM supplies, and low-voltage supplies.

The MAX1715 EV kit provides dual 1.8V and 2.5V output voltages from a 5V to 24V battery input range. It delivers up to 4A output current for each output with greater than 90% efficiency, operating at 255/345kHz switching frequency, and has superior line- and loadtransient response.

This EV kit is a fully assembled and tested circuit board. It also allows the evaluation of other output voltages in the 1.0V to 5.5V range by changing feedback resistors R1-R4.

| DESIGNATION   |   QTY | DESCRIPTION                                                                         |
|---------------|-------|-------------------------------------------------------------------------------------|
| C1, C2        |     2 | 10µF, 25V ceramic capacitors (1812) Taiyo Yuden TMK432BJ106KM or Tokin C34Y5U1E106Z |
| C3, C4        |     2 | 330µF, 6.3V low-ESR capacitors Kemet T510X337M010AS or Sanyo 6TPB330M               |
| C5, C6        |     2 | 0.1µF ceramic capacitors (0805)                                                     |
| C7            |     1 | 0.22µF ceramic capacitor (1206)                                                     |
| C8            |     1 | 1µF, 10V X5R ceramic capacitor (0805) Taiyo Yuden LMK212BJ105MG                     |
| C9            |     1 | 4.7µF, 16V tantalum capacitor Sprague 595D475X0016A2B                               |
| C10, C11      |     0 | Not installed                                                                       |
| C12, C13      |     2 | 1000pF ceramic capacitors (1206)                                                    |
| C14           |     1 | 3.3µF,10V X5R ceramic capacitor (1206) Taiyo Yuden LMK316BJ335ML                    |
| D1, D2        |     2 | 1A, 30V Schottky diodes Nihon EP10QY03                                              |
| D3            |     1 | 100mA, 30V dual Schottky diode Central Semiconductor CMPSH-3A                       |

<!-- image -->

Features

- ♦ +5V to +24V Input Voltage Range
- ♦ Preset 1.8V and 2.5V Output Voltages
- ♦ 1.0V to 5.5V Adjustable Outputs
- ♦ 4A Output Current
- ♦ 255/345kHz Switching Frequency
- ♦ No Current-Sense Resistor
- ♦ Power-Good Output
- ♦ 28-Pin QSOP Package
- ♦ Low-Profile Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1715EVKIT | 0°C to +70°C  | 28 QSOP      |

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                               |
|--------------------|-------|-------------------------------------------|
| L1                 |     1 | 3.9µH power inductor Sumida CDRH124-3R9MC |
| L2                 |     1 | 4.7µH power inductor Sumida CDRH124-4R7MC |
| N1A, N1B, N2A, N2B |     2 | Dual N-channel MOSFETs Fairchild FDS6982  |
| R1, R3, R9, R10    |     0 | Not installed                             |
| R2, R4             |     2 | 10k Ω ±1% resistors (1206)                |
| R5                 |     1 | 100k Ω ±5% resistor (1206)                |
| R6, R7, R8         |     3 | 1M Ω ±5% resistors (1206)                 |
| R11, R12           |     2 | 100 Ω ±5% resistors (0805)                |
| R13                |     1 | 20 Ω ±5% resistor (1206)                  |
| U1                 |     1 | MAX1715EEI (28-pin QSOP)                  |
| SW1                |     1 | DIP-6 dip switch                          |
| None               |     4 | Rubber feet                               |
| None               |     1 | MAX1715 PC board                          |
| None               |     1 | MAX1715 data sheet                        |
| None               |     1 | MAX1715 EV kit data sheet                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX1715 Evaluation Kit

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          |
|-----------------------|--------------|--------------|
| AVX                   | 803-946-0690 | 803-626-3123 |
| Central Semiconductor | 516-435-1110 | 516-435-1824 |
| Coilcraft             | 708-639-6400 | 708-639-1469 |
| Coiltronics           | 561-241-7876 | 561-241-9339 |
| Fairchild             | 408-721-2181 | 408-721-1635 |
| Kemet                 | 408-986-0424 | 408-986-1442 |
| Motorola              | 602-303-5454 | 602-994-6430 |
| Nihon                 | 847-843-7500 | 847-843-2798 |
| Sanyo                 | 619-661-6835 | 619-661-1055 |
| Sumida                | 708-956-0666 | 708-956-0702 |
| Taiyo Yuden           | 408-573-4150 | 408-573-4159 |
| Tokin                 | 408-432-8020 | 408-434-0375 |

Note: Please indicate that you are using the MAX1715 when contacting these component suppliers.

## Quick Start

The MAX1715 EV kit is fully assembled and tested. Follow these steps to evaluate the MAX1715 standard 4A application circuit:

- 1) Ensure that the circuit is connected correctly to the supplies and dummy load. Do not turn on power until all connections are made .
- 2) Verify that switches ON1 and ON2 (SW1) are in the on position.

## Table 2. Switch SW1 Functions

| SW1 LOCATION   | ON1 PIN                            | ON2 PIN                           | SKIP PIN                                                                                                                                   |
|----------------|------------------------------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| ON1 = on       | Connected to V CC , V OUT 1 = 1.8V | -                                 | -                                                                                                                                          |
| ON1 = off      | Connected to GND, V OUT1 = 0       | -                                 | -                                                                                                                                          |
| ON2 = on       | -                                  | Connected to V CC , V OUT2 = 2.5V | -                                                                                                                                          |
| ON2 = off      | -                                  | Connected to GND, V OUT2 = 0      | -                                                                                                                                          |
| SKIP = on      | -                                  | -                                 | Connected to V CC , low-noise mode, forced fixed-frequency PWM operation.                                                                  |
| SKIP = off     | -                                  | -                                 | Connected to GND, normal operation, allows automatic PWM/PFM switchover for pulse skipping at light load, resulting in highest efficiency. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Table 1. Recommended Equipment

| EQUIPMENT                                     | MINIMUM REQUIREMENTS   |
|-----------------------------------------------|------------------------|
| Power supply, battery, or notebook AC adapter | 5V to 24V              |
| DC bias power supply                          | 5V at 100mA            |
| Dummy loads capable of sinking 4A             | -                      |
| Digital multimeter (DMM)                      | -                      |
| Dual-trace oscilloscope                       | 100MHz                 |

- 3) Turn on battery power prior to +5V bias power; otherwise, the output UVLO timer will time out and the FAULT latch will be set, disabling the regulator outputs until +5V power is cycled or ON1/ON2 is toggled.
- 4) Verify that the output voltages are 1.8V and 2.5V.

## Evaluating Other Output Voltages

The EV kit outputs are preset to 1.8V and 2.5V. However, the output voltages can also be adjusted  between 1.0V and 5.5V by selecting R1/R2 and R3/R4 values. Select feedback resistors R1 and R3. R1 and R3 are then given by:

<!-- formula-not-decoded -->

where VFB = 1.0V.

This EV kit includes two 10k Ω ±1% resistors for R2 and R4.

## Jumper and Switch Settings

Table 2 lists the switch SW1 functions, and Tables 3-6 list the JU1-JU6 jumper functions.

## MAX1715 Evaluation Kit

Table 3. Jumpers JU1/JU2/JU3 Functions (Switching Frequency Selection)

| JU1           | JU2           | ON2 PIN       | JU3               | FREQUENCY (kHz)   |
|---------------|---------------|---------------|-------------------|-------------------|
| Not Installed | Not Installed | Not Installed | Floating          | 255/345           |
| Installed     | Not Installed | Not Installed | Connected to V CC | 170/230           |
| Not Installed | Installed     | Not Installed | Connected to REF  | 340/460           |
| Not Installed | Not Installed | Installed     | Connected to GND  | 470/630           |

IMPORTANT: Don't change the operating frequency without first recalculating component values because the frequency has a significant effect on the peak current-limit level, MOSFET heating, preferred inductor value, PFM/PWM switchover point, output noise, efficiency, and other critical parameters.

Table 4. Jumper JU4 Functions (Output Voltage Selection)

| SHUNT LOCATION   | FB1 PIN                     | MAX1715 OUTPUTS   |
|------------------|-----------------------------|-------------------|
| Installed        | Connected to V CC           | V OUT1 = 3.3V     |
| Not Installed    | Connected to GND through R2 | V OUT1 = 1.8V     |

Table 5. Jumper JU5 Functions (Fixed/Adjustable Current Limit Selection for VOUT1)

| SHUNT LOCATION   | ILIM1 PIN                                                                                                                          | CURRENT-LIMIT THRESHOLD           |
|------------------|------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| Installed        | Connected to V CC                                                                                                                  | 100mV (default)                   |
| Not Installed    | Connected to GND through R9. Refer to the Current-Limit Circuit section in the MAX1715 data sheet for information on selecting R9. | Adjustable between 50mV and 200mV |

Table 6. Jumper JU6 Functions (Fixed/Adjustable Current Limit Selection for VOUT2)

| SHUNT LOCATION   | ILIM2 PIN                                                                                                                            | CURRENT-LIMIT THRESHOLD           |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| Installed        | Connected to V CC                                                                                                                    | 100mV (default)                   |
| Not Installed    | Connected to GND through R10. Refer to the Current-Limit Circuit section in the MAX1715 data sheet for information on selecting R10. | Adjustable between 50mV and 200mV |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1715 Evaluation Kit

Figure 1. MAX1715 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX1715 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1715 EV Kit PC Board Layout-Component Side

<!-- image -->

## MAX1715 Evaluation Kit

Figure 3. MAX1715 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5. MAX1715 EV Kit PC Board Layout-GND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1715 Evaluation Kit

Figure 6. MAX1715 EV Kit PC Board Layout-GND Layer 3

<!-- image -->

Figure 7. MAX1715 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600