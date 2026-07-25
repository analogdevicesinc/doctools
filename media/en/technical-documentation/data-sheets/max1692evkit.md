<!-- lastmod 2022-08-02 -->
## General Description

The MAX1692 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a pulse-width-modulated (PWM), step-down DC-DC converter. The EV kit provides a +2.5V output voltage from a +2.7V to +5.5V input source. It delivers up to 600mA output current. The MAX1692 features internal MOSFET switches, low dropout voltage, and a 1.2%-accurate 1.25V reference.

The MAX1692 EV kit provides low quiescent current and high efficiency (up to 95%) for maximum battery life.  Operation  at  750kHz  allows  the  use  of  a  tiny  surface-mount inductor.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                        |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 10µF, 6.3V, X5R ceramic capacitor Taiyo Yuden JMK325BJ106MN                                                        |
| C2            |     1 | 47µF, 6.3V, low ESR, electrolytic capacitor, Sanyo 6TPA47M or 47µF, 16V tantalum capacitor Sprague 594D476X0016C2T |
| C3            |     1 | 0.1µF ceramic capacitor                                                                                            |
| C4            |     1 | 0.22µF ceramic capacitor                                                                                           |
| C5            |     1 | 47pF ceramic capacitor                                                                                             |
| L1            |     1 | 10µH inductor Sumida CDR63B-100 (shielded) or CD43-100 (unshielded)                                                |
| R1            |     1 | 309k Ω , 1% resistor                                                                                               |
| R2            |     1 | 301k Ω , 1% resistor                                                                                               |
| R3            |     1 | 100k Ω , 5% resistor                                                                                               |
| U1            |     1 | MAX1692EUB                                                                                                         |
| JU1           |     1 | 3-pin header                                                                                                       |
| None          |     1 | Shunt (JU1)                                                                                                        |
| JU2           |     1 | 2-pin header                                                                                                       |
| None          |     1 | MAX1692 PC Board                                                                                                   |
| None          |     1 | MAX1692 data sheet                                                                                                 |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Dale-Vishay | 402-564-3131 | 402-563-6418 |
| Sanyo       | 619-661-6835 | 619-661-1055 |
| Sprague     | 603-224-1961 | 603-224-1430 |
| Sumida      | 708-956-0666 | 708-956-0702 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |

Note: Please indicate that you are using the MAX1692 when contacting these component suppliers.

- ' +2.7V to +5.5V Input Voltage Range
- ' +2.5V Output Voltage or Adjustable Output from 1.25V to VIN
- ' 600mA Output Current
- ' 100% Duty Cycle in Dropout
- ' 750kHz Fixed-Frequency PWM Operation
- ' Internal MOSFET Switch and Synchronous Rectifier
- ' 0.1µA IC Shutdown Current
- ' Surface-Mount Components
- ' Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC-PACKAGE   |
|--------------|---------------|--------------|
| MAX1692EVKIT | 0°C to +70°C  | 10 m MAX     |

## Quick Start

The MAX1692 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +2.7V to +5.5V supply to the VIN pad. Connect the ground to the GND pad.
- 2) Connect a voltmeter to the VOUT pad.
- 3) Verify that the shunt is across JU1 pins 1 and 2.
- 4) Turn on the power supply and verify that the output is at +2.5V.

## Detailed Description

## Jumper Selection

## Shutdown Mode

The MAX1692 EV kit features a shutdown mode that reduces the MAX1692 IC's quiescent current to 0.1µA, preserving battery life. The 3-pin header, JU1, selects the shutdown mode (Table 1).

## Table 1.  Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | MAX1692 OUTPUT               |
|------------------|------------------|------------------------------|
| 1 & 2            | Connected to VIN | MAX1692 enabled, V OUT = 2.5 |
| 2 & 3            | Connected to GND | Shutdown mode, V OUT = 0     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

<!-- image -->

## Features

## MAX1692 Evaluation Kit

Table 2.  Jumper JU2 Functions

| SHUNT LOCATION      | SYNC/PWM PIN               | OPERATING MODE                                                            |
|---------------------|----------------------------|---------------------------------------------------------------------------|
| On                  | Connected to VIN           | MAX1692 operates in PWM low-noise mode.                                   |
| Off (not installed) | Pulled to GND via 100k     | MAX1692 operates in PWM/PFM mode.                                         |
| Off (not installed) | Driven from external clock | SYNC/PWM pin is dri- ven by an external clock between 500kHz and 1000kHz. |

## Operating Mode

The MAX1692 operates in one of three modes to optimize performance. A fixed-frequency (PWM) mode switches at a fixed frequency for easy post-filtering. A synchronizable PWM mode uses an external clock to control harmonics. A PWM/PFM mode extends battery life by operating in PWM mode under heavy loads and in PFM mode under light loads for reduced power consumption.

The EV kit operates at a 750kHz switching frequency and allows the use of a small-value inductor. The switching frequency can also be synchronized to an external clock ranging from 500kHz to 1000kHz. The 2pin header JU2 selects the operating mode (Table 2).

Table 3.  R1/R2 for Other Output Voltages

|   V OUT (V) | R1 (1%)   | R2 (1%)   |
|-------------|-----------|-----------|
|        1.50 | 66.5k     | 301k      |
|        1.80 | 140k      | 301k      |
|        2.50 | 309k      | 301k      |
|        2.70 | 357k      | 301k      |
|        3.32 | 511k      | 301k      |

## Changing Current Limit

The inductor current limit can be set to 0.6A or 1.2A. The EV kit is factory-configured for a 1.2A limit. To set the limit to 0.6A, cut the PC trace shorting JU3 pins 1 &amp; 2, and then short JU3 pins 2 &amp; 3. This allows for use of the smallest possible inductor for low-current applications.

## Evaluating Other Output Voltages

The EV kit's output is set to +2.50V by connecting FB to resistor-divider R1/R2. However, the output voltage can also be adjusted between +1.232V and VIN by changing  R1  and  R2  values.  Select  feedback resistor  R2  in the 5k Ω to 500k Ω range. R1 is then given by:

<!-- formula-not-decoded -->

where VFB = 1.232V and VOUT = output voltage. The unloaded output voltage is typically 1% above the nominal output voltage. Table 3 lists values for R1 for different output voltages.

Figure 1.  MAX1692 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 2.  MAX1692 EV Kit Component Placement GuideComponent Side

Figure 3.  MAX1692 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.  MAX1692 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1692 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1998 Maxim Integrated Products