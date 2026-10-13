<!-- lastmod 2022-08-04 -->
## General Description

The MAX1620 evaluation kit (EV kit) converts a +1.8V to +12V battery voltage to a +12.5V to +23.5V LCD backplane bias voltage for currents up to 20mA. Both the MAX1620 and MAX1621 include a 5-bit DAC, allowing digital software control of the bias voltage. The MAX1620 uses up/down digital signaling to adjust the DAC, and the MAX1621 uses the System Management Bus (SMBus™) 2-wire serial interface.

The MAX1620 EV kit is a fully assembled and tested surface-mount circuit board. It can also be used to evaluate the MAX1621.

## Component List

| DESIGNATION                                                                                   | QTY                                                                                           | DESCRIPTION                                                                                   |
|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| C1, C6                                                                                        | 2                                                                                             | 22µF, 35V tantalum capacitors AVX TPSE226M035R0300 or Sprague 593D226X0035E2T                 |
| C2, C3                                                                                        | 2                                                                                             | 0.1µF ceramic capacitors                                                                      |
| C5                                                                                            | 1                                                                                             | 100pF ceramic capacitor                                                                       |
| D1                                                                                            | 1                                                                                             | Schottky diode Motorola MBR0540T1                                                             |
| D4                                                                                            | 1                                                                                             | Schottky diode Central Semiconductor CMPSH-3                                                  |
| L1                                                                                            | 1                                                                                             | 100µH inductor Sumida CD54-101                                                                |
| N1                                                                                            | 1                                                                                             | N-channel MOSFET Motorola MMFT3055VL                                                          |
| Q1                                                                                            | 1                                                                                             | 2N2907A transistor Central Semiconductor CMPT2907A                                            |
| R1                                                                                            | 1                                                                                             | 82k Ω , 5% resistor                                                                           |
| R2, R8, R9, R10                                                                               | 4                                                                                             | 100k Ω , 5% resistors                                                                         |
| R3, R4                                                                                        | 2                                                                                             | 300k Ω , 5% resistors                                                                         |
| R5                                                                                            | 1                                                                                             | 2.2M Ω , 5% resistor                                                                          |
| R6, R7                                                                                        | 2                                                                                             | 56k Ω , 5% resistors                                                                          |
| R11                                                                                           | 1                                                                                             | 10k Ω , 5% resistor                                                                           |
| U1                                                                                            | 1                                                                                             | MAX1620EEE (QSOP-16)                                                                          |
| JU3                                                                                           | 1                                                                                             | 3-pin header                                                                                  |
| None                                                                                          | 1                                                                                             | Shunt (JU3)                                                                                   |
| JU8                                                                                           | 1                                                                                             | 2-pin header                                                                                  |
| None                                                                                          | 1                                                                                             | MAX1620/MAX1621 PC board                                                                      |
| None                                                                                          | 1                                                                                             | MAX1620/MAX1621 data sheet                                                                    |
| 1 Shunt Additional components for negative output (included in the EV kit) but not installed: | 1 Shunt Additional components for negative output (included in the EV kit) but not installed: | 1 Shunt Additional components for negative output (included in the EV kit) but not installed: |
| C4                                                                                            | 1                                                                                             | 1µF ceramic capacitor                                                                         |
| C7                                                                                            | 1                                                                                             | 22µF, 35V tantalum capacitor AVX TPSE226M035R0300 or Sprague 593D226X0035E2T                  |
| D2, D3                                                                                        | 2                                                                                             | Schottky diodes Motorola MBR0540T1                                                            |

SMBus is a trademark of Intel Corp.

## MAXIM

- ' +1.8V to +12V Battery Input Voltage
- ' +12.5V to +23.5V Adjustable Output
- ' 20mA Output
- ' 32-Level Internal DAC
- ' 10µA Shutdown Current
- ' Surface-Mount Components
- ' Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | BOARD TYPE    |
|--------------|---------------|---------------|
| MAX1620EVKIT | 0°C to +70°C  | Surface Mount |

Note: To evaluate the MAX1621, request a free MAX1621EEE sample with the MAX1620 EV kit.

## Component Suppliers

| SUPPLIER*             | PHONE        | FAX          |
|-----------------------|--------------|--------------|
| AVX                   | 803-946-0690 | 803-626-3123 |
| Central Semiconductor | 516-435-1110 | 516-435-1824 |
| Coilcraft             | 847-639-6400 | 847-639-1469 |
| Coiltronics           | 561-241-7876 | 561-241-9339 |
| Dale-Vishay           | 402-564-3131 | 402-563-6418 |
| Motorola              | 602-303-5454 | 602-994-6430 |
| Sprague               | 603-224-1961 | 603-224-1430 |
| Sumida                | 847-956-0666 | 847-956-0702 |
| Vishay/Vitramon       | 203-268-6261 | 203-452-5670 |

## Quick Start

The MAX1620 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +1.8V to +12V power supply to the VBATT pad and a +3V to +5.5V supply to the VIN pad. Connect ground to the GND pad.
- 2) Connect a voltmeter and load, if any, to the VOUT pad.
- 3) Verify the JU3 shunt is across pins 1 and 2 (positive output).
- 4) Turn on the power supply and verify that the output voltage is typically +17.8V.
- 5) For other output voltages, refer to the Output Adjustment section in the MAX1620/MAX1621 data sheet for instructions on selecting the feedback resistors.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

<!-- image -->

Features

## MAX1620 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX1620 EV kit converts a +1.8V to +12V battery voltage to a +12.5V to +23.5V LCD backplane bias voltage for currents up to 20mA. The output voltage can be adjusted with the on-chip DAC, allowing digital software control of the bias voltage. Up/down digital signaling adjusts the DAC.

## Output Voltage Control

The output voltage is set with a voltage divider to the feedback pin (FB). It can be adjusted with an internal DAC summing current into FB through an external resistor.  The  5-bit  DAC  is  controlled  with  a  user-programmable up/down counter. The MAX1620 controls the DAC counter with the UP and DN pins. A rising edge on UP increases the output voltage; a rising edge on DN decreases the output voltage. Holding both UP and DN high resets the output voltage to mid-range. Refer to the Output Voltage Control section in the MAX1620/MAX1621 data sheet for more information on controlling the MAX1620/MAX1621 output voltage.

## Controlling the LCD Using POK and LCDON

POK can be used to turn off a positive LCD bias voltage when VBATT is too low. A resistor-divider (R1-R2) from VBATT to POK controls the open-drain output, LCDON , which pulls low when VPOK &gt; 1V.

LCDON drives an external PNP transistor, Q1, switching a positive VOUT to the LCD. Choose a PNP with low saturation voltage at the required load current. R6 limits the base current in Q1. R7 is used to turn off Q1 when LCDON is floating. R6 and R7 can be the same value. Refer to the Controlling the LCD Using POK and LCDON section in the MAX1620/MAX1621 data sheet for  instructions  on  selecting  resistors  R1,  R2,  R6,  and R7.

## Jumper Selection

## Shutdown Mode

The MAX1620 EV kit features a shutdown mode that reduces the MAX1620 quiescent current to 14µA to preserve battery life. The two-pin header JU8 selects the shutdown mode. Table 1 lists the selectable jumper options.

## Positive Output Voltage

This EV kit is shipped with the MAX1620's polarity pin (POL) tied to VIN for converting to a positive output voltage. A boost topology is used, and the feedback regulation  point  is  1.5V.  Refer  to  the Output  Adjustment section in the MAX1620/MAX1621 data sheet for instructions on selecting the feedback resistors.

Table 1. Jumper JU8 Settings

| SHUNT LOCATION   | SHDN PIN         | MAX1620 OUTPUT                                  |
|------------------|------------------|-------------------------------------------------|
| On               | Connected to GND | Shutdown mode, V OUT = V BATT , V OUTSW = float |
| Off              | Connected to VIN | MAX1620 enabled, V OUT = +17.8V                 |

## Negative Output Voltage

If  a  negative  output  voltage  is  desired,  connect  the MAX1620's POL pin to ground using jumper JU3. In this configuration, the error amplifier's output is inverted to provide the correct feedback polarity. The feedback regulation point is 0V. To modify the EV kit for a negative output voltage:

- 1) Cut the PC board trace to open jumpers JU1, JU4, and JU5.
- 2) Short jumpers JU2, JU6, and JU7 with a piece of wire.
- 3) Place the JU3 shunt across pins 2 and 3 (Table 2)
- 4) Install supplied components D2, D3, C4, and C7. Table 3 summarizes jumper JU1-JU7 settings.

## Evaluating the MAX1621

To evaluate the MAX1621, remove the MAX1620 IC and resistors R8, R9, and R10.

## Table 2. Jumper JU3 Settings

| SHUNT LOCATION   | POL PIN          | MAX1620 OUTPUT                  |
|------------------|------------------|---------------------------------|
| 1 and 2          | Connected to VIN | Positive output, V OUT = +17.8V |
| 2 and 3          | Connected to GND | Negative output, V OUT = -16.7V |

Table 3. Jumper JU1-JU7 Settings

| JUMPER   | POSITIVE OUT   | NEGATIVE OUT   |
|----------|----------------|----------------|
| JU1      | Short          | Open           |
| JU2      | Open           | Short          |
| JU3      | Short 1 and 2  | Short 2 and 3  |
| JU4      | Short          | Open           |
| JU5      | Short          | Open           |
| JU6      | Open           | Short          |
| JU7      | Open           | Short          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 1.  MAX1620 EV Kit Main Circuit Schematic

<!-- image -->

MXI

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1620 Evaluation Kit

<!-- image -->

Figure 2.  MAX1620 EV Kit Component Placement Guide

Figure 3.  MAX1620 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX1620 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086  408-737-7600

<!-- image -->