<!-- lastmod 2022-08-02 -->
## General Description

The MAX1791 evaluation kit (EV kit) demonstrates a standard 2A application circuit. This DC-DC converter steps down high-voltage batteries and/or AC adapters, generating a precision, low-voltage rail for use as chipset, I/O, and other low-voltage supplies in notebook computers and PDAs.

The MAX1791 EV kit provides a 3.3V output voltage from a +5V to +20V battery input range. It delivers up to 2A output current with greater than 90% efficiency. The EV kit operates at 300kHz switching frequency and has superior line- and load-transient response.

This EV kit is a fully assembled and tested circuit board. It also allows the evaluation of other output voltages in the 1.25V to 5.5V range by changing feedback resistors  R1  and  R2.  This  EV  kit  can  also  be  used  to evaluate the MAX1762 (1.8V or 2.5V output voltage).

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                          |
|---------------|-------|--------------------------------------------------------------------------------------|
| C1            |     1 | 10 µ F, 25V ceramic capacitor (1812) Taiyo Yuden TMK432BJ106KM or TDK C4532X5R1E106M |
| C2            |     1 | 220 µ F, 10V low-ESR 40m Ω capacitor Sanyo 10TPB220M                                 |
| C3            |     1 | 0.1 µ F ceramic capacitor (1206)                                                     |
| C4            |     1 | 1 µ F, 16V ceramic capacitor (1206) Taiyo Yuden EMK316BJ105KL or TDK C3216X7R1C105M  |
| C5            |     0 | Not installed (1206)                                                                 |
| L1            |     1 | 7 µ H power inductor Sumida CDRH104R-7R0NC                                           |
| N1, P1        |     1 | Dual N- and P-channel MOSFETs Fairchild FDS8958A                                     |
| R1, R2, R3    |     0 | Not installed (1206)                                                                 |
| U1            |     1 | MAX1791EUB (10-pin µ MAX)                                                            |
| JU1, JU2      |     2 | 3-pin headers                                                                        |
| None          |     2 | Shunts                                                                               |
| None          |     1 | MAX1791 PC board                                                                     |
| None          |     1 | MAX1791 data sheet                                                                   |
| None          |     1 | MAX1791EVKIT data sheet                                                              |

- ♦ No Current-Sense Resistor
- ♦ +5V to +20V Input Voltage Range
- ♦ 3.3V or 5V Preset Output Voltage (MAX1791)
- ♦ 1.8V or 2.5V Preset Output Voltage (MAX1762)
- ♦ Adjustable Output Voltage (1.25V to 5.5V, External Divider)
- ♦ 2A Output Current
- ♦ 300kHz Switching Frequency
- ♦ 5µA IC Shutdown Current
- ♦ 10-Pin µMAX Package
- ♦ Low-Profile Components
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1791EVKIT | 0°C to +70°C  | 10 µMAX      |

Note: To evaluate the MAX1762, request a MAX1762EUB free sample with the MAX1791 EV kit.

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          |
|-------------------------|--------------|--------------|
| Coilcraft               | 708-639-6400 | 708-639-1469 |
| Coiltronics             | 561-241-7876 | 561-241-9339 |
| Fairchild               | 408-721-2181 | 408-721-1635 |
| International Rectifier | 310-322-3331 | 310-322-3332 |
| Sanyo                   | 619-661-6835 | 619-661-1055 |
| Sumida                  | 708-956-0666 | 708-956-0702 |
| Taiyo Yuden             | 408-573-4150 | 408-573-4159 |
| TDK                     | 847-390-4373 | 847-390-4428 |

Note: Please indicate that you are using the MAX1791/ MAX1762 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

Features

## MAX1791 Evaluation Kit

## Quick Start

The MAX1791 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Connect a voltmeter and load (if any) to the VOUT pad.
- 2) Verify that the shunts are across JU1 pins 1 and 2 and JU2 pins 2 and 3.
- 3) Connect a +5V to +20V supply to the pads marked VIN and GND.
- 4) Turn on the power and verify that the output voltage is 3.3V.
- 5) See the Output Voltage Selection section to modify the board for a different output voltage.

## Detailed Description

## Jumper Selections

The MAX1791 EV kit features a shutdown mode that reduces quiescent current to less than 5µA to preserve battery life.

## Output Voltage Selection

The MAX1791 is initially set for a 3.3V output by connecting the FB pin to GND or 5V by connecting the FB pin to VL. However, by adding external resistors R1 and R2, the output can be adjustable from 1.25V to 5.5V. Remove the shunt from jumper JU2, and install output voltage-divider resistors R1 and R2. Refer to the Setting the Output Voltage section of the MAX1791 data sheet regarding how to extend the output voltage range from 0.5V to 5.5V and instructions on how to calculate the values for R1 and R2.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 1. Jumper JU1 Functions (Shutdown Mode)

| SHUNT LOCATION   | SHDN PIN         | MAX1791 OUTPUT                |
|------------------|------------------|-------------------------------|
| 1, 2             | Connected to VIN | MAX1791 enabled, V OUT = 3.3V |
| 2, 3             | Connected to GND | Shutdown mode, V OUT = 0      |

## Table 2. Jumper JU2 Functions (Output Voltage)

| SHUNT LOCATION   | FB PIN           | OUTPUT VOLTAGE   |
|------------------|------------------|------------------|
| 1, 2             | Connected to VL  | V OUT = 5.0V     |
| 2, 3             | Connected to GND | V OUT = 3.3V     |

<!-- image -->

## MAX1791 Evaluation Kit

Figure 1. MAX1791 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1791 Evaluation Kit

<!-- image -->

Figure 2. MAX1791 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1791 EV Kit PC Board Layout-Component Side

Figure 3. MAX1791 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5. MAX1791 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600