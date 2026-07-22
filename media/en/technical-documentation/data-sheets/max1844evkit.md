<!-- lastmod 2022-08-02 -->
## General Description

The MAX1844 evaluation kit (EV kit) demonstrates the MAX1844's standard 4A application circuit. This DC-DC converter steps down high-voltage batteries and/or AC adapters, generating a precision, low-voltage rail for use as chipset, DRAM, and other low-voltage supplies.

The MAX1844 EV kit provides a 1.8V output voltage from a 7V to 24V battery input range. It delivers up to 4A output current with greater than 90% efficiency. The EV kit operates at 300kHz switching frequency and has superior line- and load-transient response.

This EV kit is a fully assembled and tested circuit board. It also allows the evaluation of other output voltages in the 1.0V to 5.5V range by changing feedback resistors R1 and R2.

| DESIGNATION   |   QTY | DESCRIPTION                                                                           |
|---------------|-------|---------------------------------------------------------------------------------------|
| C1            |     1 | 10µF, 25V ceramic capacitor (1812) Taiyo Yuden TMK432BJ106KM or TDK C4532X5R1E106M    |
| C2            |     1 | 330µF, 6.3V 40m Ω low-ESR capacitor Sanyo 6TPB330M                                    |
| C3            |     1 | 0.1µF ceramic capacitor (0805)                                                        |
| C4            |     1 | 0.22µF ceramic capacitor (1206)                                                       |
| C5            |     1 | 4.7µF, 10V X5R ceramic capacitor (1206) Taiyo Yuden LMK316BJ475ML                     |
| C6            |     1 | 3.3µF, 10V X5R ceramic capacitor (1206) Taiyo Yuden LMK316BJ335ML                     |
| C7            |     1 | 2200pF ceramic capacitor (0805)                                                       |
| D1            |     1 | 1A Schottky diode Nihon EP10QY03, International Rectifier 10MQ040N, or Nihon EC10QS03 |
| D2            |     1 | 100mA, 30V Schottky diode Central Semiconductor CMPSH-3                               |

- ♦ 7V to 24V Input Voltage Range
- ♦ Accurate Current Sense
- ♦ Preset 1.8V/2.5V Output Voltage
- ♦ 1.0V to 5.5V Adjustable Output
- ♦ 4A Output Current
- ♦ 300kHz Switching Frequency
- ♦ Power-Good Output
- ♦ Over/Undervoltage Protection
- ♦ 20-Pin QSOP Package
- ♦ Low-Profile Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE      | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1844EVKIT | 0 o C to +70 o C | 20 QSOP      |

## Component List

| DESIGNATION                |   QTY | DESCRIPTION                                                                   |
|----------------------------|-------|-------------------------------------------------------------------------------|
| L1                         |     1 | 4.7µH power inductor Sumida CDRH124-4R7MC                                     |
| N1A, N1B                   |     1 | Dual N-channel MOSFET Fairchild FDS6982A                                      |
| R1, R2, R11, R13, R14, R15 |     0 | Not installed (0805)                                                          |
| R3                         |     1 | 130k Ω ± 1% resistor (0805)                                                   |
| R4                         |     1 | 100k Ω ± 5% resistor (0805)                                                   |
| R5, R6                     |     2 | 1M Ω ± 5% resistors (0805)                                                    |
| R7                         |     1 | 20 Ω ± 5% resistor (0805)                                                     |
| R8                         |     1 | 200 Ω ± 5% resistor (0805)                                                    |
| R9                         |     1 | 274k Ω ± 1% resistor (0805)                                                   |
| R10                        |     1 | 0.015 Ω ± 1% 1/2W resistor (2010) IRC LR2010-01-R015-F or Dale WSL-2010-R015F |
| U1                         |     1 | MAX1844EEP (20-pin QSOP)                                                      |
| JU1, JU2                   |     2 | 2-pin headers                                                                 |
| JU9, JU10                  |     2 | 3-pin headers                                                                 |
| None                       |     4 | Shunts (JU1, JU2, JU9, JU10)                                                  |
| None                       |     1 | MAX1844 PC board                                                              |
| None                       |     1 | MAX1844 data sheet                                                            |
| None                       |     1 | MAX1844 EV kit data sheet                                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

## Features

## MAX1844 Evaluation Kit

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          |
|-----------------------|--------------|--------------|
| Central Semiconductor | 516-435-1110 | 516-435-1824 |
| Dale                  | 402-564-3131 | 402-563-6296 |
| Fairchild             | 408-721-2181 | 408-721-1635 |
| IR                    | 310-322-3331 | 310-252-7175 |
| IRC                   | 361-992-7900 | 361-992-3377 |
| Nihon                 | 847-843-7500 | 847-843-2798 |
| Sanyo                 | 619-661-6835 | 619-661-1055 |
| Sumida                | 708-956-0666 | 708-956-0702 |
| Taiyo Yuden           | 408-573-4150 | 408-573-4159 |
| TDK                   | 847-390-4373 | 847-390-4428 |

Note: Please indicate that you are using the MAX1844 when contacting these component suppliers.

## Equipment Needed

- 7V to 24V power supply, battery, or notebook AC adapter
- DC bias power supply, 5V at 100mA
- Dummy load capable of sinking 4A
- Digital multimeter (DMM)
- 100MHz dual-trace oscilloscope

## Quick Start

- 1) Ensure that the circuit is connected correctly to the supplies and dummy load prior to applying any power.
- 2) Verify that the shunts are across JU1, JU2, JU9 pins 1 and 2, and JU10 pins 2 and 3.
- 3) Turn on battery power prior to +5V bias power; otherwise, the output UVLO timer will time out and the FAULT latch will be set, disabling the regulator until +5V power is cycled or shutdown is toggled.
- 4) Observe the 1.8V output with the DMM and/or oscilloscope. Look at the LX switching-node and MOSFET gate-drive signals while varying the load current.

## Detailed Description

## Evaluating Other Output Voltages

The EV kit output is preset to +1.8V. If a 2.5V output is desired, cut the trace shorting JU7 and install a short across R2.

The output voltage can also be adjusted between 1.0V and 5.5V by selecting R1 and R2 values. Cut the PC board trace shorting JU7, then select feedback resistor R2 in the 5k Ω to 50k Ω range. R1 is then given by:

<!-- formula-not-decoded -->

where VFB = 1.0V. See MAX1844 data sheet for optimizing components for output voltage selection.

## Jumper Settings

## Table 1. Jumper JU1 Functions (Shutdown Mode)

| SHUNT LOCATION   | SHDN/PIN         | MAX1844 OUTPUT           |
|------------------|------------------|--------------------------|
| ON               | Connected to VCC | MAX1844 enabled          |
| OFF              | Connected to GND | Shutdown mode, V OUT = 0 |

## Table 2. Jumper JU2 Functions (Low-Noise Mode)

| SHUNT LOCATION   | SKIP/PIN         | OPERATIONAL MODE                                                                                                         |
|------------------|------------------|--------------------------------------------------------------------------------------------------------------------------|
| ON               | Connected to VCC | Low-noise mode, forced fixed-frequency PWM operation.                                                                    |
| OFF              | Connected to GND | Normal operation, allows automatic PWM/PFM switchover for pulse skipping at light load, resulting in highest efficiency. |

## Table 3. Jumper JU3 Functions (Fixed/Adjustable Current-Limit Selection)

| SHUNT LOCATION   | ILIM PIN                                                                                                                                                 | CURRENT-LIMIT THRESHOLD                                          |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| ON               | Connected to VCC, (remove R3/R9 divider)                                                                                                                 | 100mV                                                            |
| OFF              | Connected to REF through voltage-divider R3/R9. Refer to the Current-Limit Circuit section in the MAX1844 data sheet for information on selecting R3/R9. | Adjustable from 25mV to 200mV. Programmed for 65mV by R3 and R9. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1844 Evaluation Kit

Table 4. Jumpers JU4, JU5, and JU6 Functions (Switching-Frequency Selection)

| JU4           | JU5           | JU6           | TON PIN          | FREQUENCY (kHz)   |
|---------------|---------------|---------------|------------------|-------------------|
| Not Installed | Not Installed | Not Installed | Floating         | 300 (as shipped)  |
| Installed     | Not Installed | Not Installed | Connected to VCC | 200               |
| Not Installed | Installed     | Not Installed | Connected to REF | 450               |
| Not Installed | Not Installed | Installed     | Connected to GND | 600               |

Important: Don't change the operating frequency without first recalculating component values. Frequency has a significant effect on preferred inductor value, peak current-limit level, MOSFET heating, PFM/PWM switchover point, output noise, efficiency, and other critical parameters.

Table 5. Jumper JU7 Functions (Output Voltage Selection)

| JU7           | FB PIN                                  | OUTPUT VOLTAGE                                                                       |
|---------------|-----------------------------------------|--------------------------------------------------------------------------------------|
| Installed     | Connected to VCC                        | V OUT = 1.8V (default)                                                               |
| Not Installed | Connected to GND through R2 (R1 = open) | V OUT = 2.5V                                                                         |
| Installed     | Short on R2                             | Adjustable from 1V to 5.5V                                                           |
| Not Installed | Connected to resistor-divider R1/R2     | Refer to the MAX1844 data sheet for information on setting V OUT in adjustable mode. |

Table 6. Jumper JU8 Functions (Latching/Nonlatching Overvoltage Protection)

| JU8     | LATCH PIN        | OVP BEHAVIOR       |
|---------|------------------|--------------------|
| 1 and 2 | Connected to VCC | Nonlatching        |
| 2 and 3 | Connected to GND | Latching (default) |

<!-- image -->

Table 7. Jumper JU9 Functions (Undervoltage Protection Selection)

| JU9           | UVP PIN                               | UVP THRESHOLD                                                                      |
|---------------|---------------------------------------|------------------------------------------------------------------------------------|
| 1 and 2       | Connected to VCC                      | UVP is enabled. UVP threshold is 70% of nominal.                                   |
| 2 and 3       | Connected to GND                      | UVP is disabled.                                                                   |
| Not Installed | Connected to resistor-divider R14/R15 | Refer to the MAX1844 data sheet for information on setting UVP in adjustable mode. |

Table 8. Jumper JU10 Functions (Overvoltage Protection Selection)

| JU10          | OVP PIN                               | OVP THRESHOLD                                                                      |
|---------------|---------------------------------------|------------------------------------------------------------------------------------|
| 1 and 2       | Connected to VCC                      | OVP is disabled.                                                                   |
| 2 and 3       | Connected to GND                      | OVP is enabled. OVP threshold is 114.5% of nominal.                                |
| Not Installed | Connected to resistor-divider R13/R11 | Refer to the MAX1844 data sheet for information on setting OVP in adjustable mode. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1844 Evaluation Kit

Figure 1. MAX1844 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX1844 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1844 Evaluation Kit

Figure 3. MAX1844 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1844 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.