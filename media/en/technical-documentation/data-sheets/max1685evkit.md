<!-- lastmod 2022-08-02 -->
## General Description

The MAX1685 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a pulse-width-modulated (PWM), step-down DC-DC converter.  The  EV  kit  provides  a  +3.33V  output  voltage from a +3.5V to +14V input source. It delivers up to 1A output current. The MAX1685 features internal MOSFET switches, low dropout voltage (100% duty-cycle operation), and an accurate +1.25V reference.

The MAX1685 EV kit provides low quiescent current, synchronous rectification, and high efficiency (up to 95%) for maximum battery life. Operation at 600kHz allows the use of a tiny surface-mount inductor.

The MAX1685 EV kit can also be used to evaluate the MAX1684, which operates at 300kHz and has slightly higher efficiency than the MAX1685.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                                                               |
|----------------|-------|-----------------------------------------------------------------------------------------------------------|
| C1             |     1 | 22µF, 35V tantalum capacitor AVX TPSE226M035R0300 or Sprague 593D226X0035E2T                              |
| C2             |     1 | 100µF, 10V, low-ESR tantalum capacitor AVX TPSD107M010R0080, Sprague 594D107X0010C2T, or Sanyo 10TPB100M  |
| C3, C4, C5, C9 |     4 | 0.1µF ceramic capacitors                                                                                  |
| C6             |     1 | 0.01µF ceramic capacitor                                                                                  |
| C7             |     1 | 1µF, 16V X7R ceramic capacitor Taiyo Yuden EMK316BJ105KL or TDK C3216X7R1C105M                            |
| C8             |     0 | Not installed                                                                                             |
| D1             |     1 | 1A Schottky diode Motorola MBRS130LT3, International Rectifier 10BQ040, Nihon EC10QS03, or Nihon EP10QY03 |
| L1             |     1 | 10µH inductor Sumida CDRH6D28-100NC or Sumida CDRH73-100                                                  |
| R1, R2         |     0 | Not installed                                                                                             |
| R3, R4         |     2 | 100k W 5% resistors                                                                                       |
| U1             |     1 | MAX1685EEE                                                                                                |
| JU1            |     1 | 3-pin header                                                                                              |
| JU2, JU3       |     2 | 2-pin headers                                                                                             |
| None           |     1 | Shunt (JU1)                                                                                               |
| None           |     1 | MAX1684/MAX1685 PC board                                                                                  |
| None           |     1 | MAX1684/MAX1685 data sheet                                                                                |

- ' +3.5V to +14V Input Voltage Range
- ' Fixed or Adjustable Output Voltage
- +3.33V (Fixed)
- +1.25V to VIN (Adjustable)
- ' Guaranteed 1A Output Current
- ' 100% Duty Cycle in Dropout
- ' 600kHz Fixed-Frequency PWM Operation
- ' Internal MOSFET Switch and Synchronous Rectifier
- ' 2µA IC Shutdown Current
- ' Surface-Mount Components
- ' Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1685EVKIT | 0°C to +70°C  | 16-QSOP      |

Note: To evaluate the MAX1684, request a MAX1684EEE free sample with the MAX1685 EV kit.

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          |
|-------------------------|--------------|--------------|
| AVX                     | 803-946-0690 | 803-626-3123 |
| Dale-Vishay             | 402-564-3131 | 402-563-6418 |
| International Rectifier | 310-322-3331 | 310-322-3332 |
| Motorola                | 602-303-5454 | 602-994-6430 |
| Nihon                   | 661-843-7500 | 661-843-2798 |
| Sanyo                   | 619-661-6835 | 619-661-1055 |
| Sprague                 | 603-224-1961 | 603-224-1430 |
| Sumida                  | 708-956-0666 | 708-956-0702 |
| TDK                     | 847-390-4373 | 847-390-4428 |
| Taiyo Yuden             | 408-573-4150 | 408-573-4159 |

Note: Please indicate that you are using the MAX1685 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

<!-- image -->

Features

## MAX1685 Evaluation Kit

## Quick Start

The MAX1685 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +3.5V to +14V supply to the VIN pad. Connect ground to the GND pad.
- 2) Connect a voltmeter and load (if any) to the VOUT pad.
- 3) Verify that the shunt is across JU1 pins 1 and 2.
- 4) Turn on the power supply and verify that the output is at +3.33V.

## Detailed Description

## Jumper Selection

## Shutdown Mode

The MAX1685 EV kit features a shutdown mode that reduces the MAX1685's quiescent current to 2µA, preserving battery life. The 3-pin header, JU1, selects the shutdown mode (Table 1).

## Operating Mode

The MAX1685 operates in one of four modes to optimize performance: a fixed-frequency (PWM) mode switches at a fixed frequency for easy postfiltering; a low-power standby mode; a synchronizable PWM mode that uses an external clock to minimize harmonics; and a normal mode that extends battery life by operating in PWM mode under heavy loads and PFM mode under light loads to reduce power consumption.

## Table 1. Jumper JU1 Functions

Figure 1. MAX1685 EV Kit Schematic

| SHUNT LOCATION   | SHDN PIN         | MAX1685 OUTPUT                  |
|------------------|------------------|---------------------------------|
| 1 & 2            | Connected to VIN | MAX1685 enabled, V OUT = +3.33V |
| 2 & 3            | Connected to GND | Shutdown mode, V OUT = 0        |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

The EV kit operates at 600kHz switching frequency and allows the use of a tiny inductor. The switching frequency can also be synchronized to an external clock ranging from 360kHz to 700kHz. The 2-pin headers JU2 and JU3 select the operating mode (Tables 2 and 3).

## Evaluating Other Output Voltages

The EV kit output is preset to +3.33V. However, the output voltage can also be adjusted between 1.25V and VIN by selecting R1 and R2 values. Select feedback resistor R2 in the 20k W to  100k W range. R1 is then given by:

<!-- formula-not-decoded -->

where VFB = 1.25V. Be sure to cut the PC trace shorting the pads of R2 before installing the resistor. Install a

Table 2. Jumper JU2 Functions

| SHUNT LOCATION      | SYNC/PWM PIN               | OPERATING MODE                                                         |
|---------------------|----------------------------|------------------------------------------------------------------------|
| On                  | Connected to VL            | MAX1685 operates in fixed-frequency mode.                              |
| Off (not installed) | Connected to GND           | MAX1685 operates in normal mode.                                       |
| Off (not installed) | Driven from external clock | SYNC/PWM pin is driven by an external clock between 360kHz and 700kHz. |

<!-- image -->

## MAX1685 Evaluation Kit

4.7pF capacitor at location C8. For output voltages greater than +5.5V, cut the trace between pins 1 and 2 of  JU4,  and short pins 2 and 3 of JU4. Refer to the Detailed  Description section  of  the  MAX1684/ MAX1685 data sheet for further details.

## Evaluating the MAX1684

This EV kit can also be used to evaluate the MAX1684. Simply replace the MAX1685 with a MAX1684EEE, and change L1 to a 22µH, 1.7A inductor. Refer to the Inductor Selection section of the MAX1684/MAX1685 data sheet for more information.

Table 3. Jumper JU3 Functions

| SHUNT LOCATION      | STBY PIN         | OPERATING MODE                                                      |
|---------------------|------------------|---------------------------------------------------------------------|
| On                  | Connected to VL  | Operation depends on the JU2 setting.                               |
| Off (not installed) | Connected to GND | MAX1685 operates in low-power mode. This overrides the JU2 setting. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX1685 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1685 Evaluation Kit

Figure 3. MAX1685 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1685 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4