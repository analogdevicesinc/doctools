<!-- lastmod 2022-08-04 -->
## General Description

The MAX1744 evaluation kit (EV kit) provides a selectable  3.3V  or  5V  output  voltage  from  input  as  high  as 36V. The MAX1744 operates up to 100% duty cycle, extending the usable input voltage range. The 100% duty cycle and a low 100mV current-sense level permit very low dropout voltages. The circuit is configured to deliver up to 2A of output current with greater than 90% conversion efficiency. The output current can be increased by changing the external components.

This EV kit is a fully assembled and tested circuit board. It can also be used to evaluate the MAX1745, which has an adjustable output voltage, by selecting feedback resistors R2 and R3.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                                |
|---------------|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 120µF, 63V electrolytic capacitors Sanyo 63MV120GX                                                                                                         |
| C3            |     1 | 220µF, 10V tantalum capacitor AVX TPSE227M010R0100 or Sprague 593D227X0010E 2W                                                                             |
| C4, C5        |     2 | 4.7µF, 16V tantalum capacitors Sprague 595D475X0016A 2B                                                                                                    |
| C6            |     1 | 0.1µF ceramic capacitor (1206)                                                                                                                             |
| C7            |     1 | 0.47µF ceramic capacitor (1206)                                                                                                                            |
| D1            |     1 | 2A, 60V Schottky diode Nihon EC21QS06 or Central Semiconductor CMSH2-60                                                                                    |
| L1            |     1 | 22µH inductor Sumida CDRH104R-220MC (shielded), Sumida CDRH124- 220MC (shielded), Coilcraft DO3316P-223 (unshielded), or Coiltronics UP2B-220 (unshielded) |

<!-- image -->

Features

- ♦ High Input Voltage (up to 36V)
- ♦ Selectable 3.3V or 5V Output Voltage (MAX1744)
- ♦ 1.25V to 18V Adjustable Output Voltage (MAX1745)
- ♦ Low Dropout Voltage
- ♦ 100% Maximum Duty Cycle
- ♦ 2A Output Current
- ♦ Up to 330kHz Switching Frequency
- ♦ 4µA IC Shutdown Current
- ♦ 10-Pin µMAX Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1744EVKIT | 0°C to +70°C  | 10 µMAX      |

Note: To evaluate the MAX1745, request a MAX1745EUB free sample with the MAX1744EVKIT.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| P1            |     1 | 60V P-channel MOSFET Fairchild NDS9407                               |
| R1            |     1 | 0.033 Ω ± 1% resistor (2010) Dale WSL-2010-R033F or IRC LR2010-R033F |
| R2, R3        |     0 | Not installed                                                        |
| U1            |     1 | MAX1744EUB (10-pin µMAX)                                             |
| JU1, JU2      |     2 | 3-pin headers                                                        |
| None          |     2 | Shunts                                                               |
| None          |     1 | MAX1744/MAX1745 PC board                                             |
| None          |     1 | MAX1744/MAX1745 data sheet                                           |
| None          |     1 | MAX1744 EV kit data sheet                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX1744 Evaluation Kit

## Quick Start

The MAX1744 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that the shunt on JU1 is across pins 1 and 2.
- 2) Verify that the shunt on JU2 is across pins 1 and 2 for a 5V output.
- 3) Connect a voltmeter and load, if any, to the VOUT pad.
- 4) Connect a 5.5V to 36V supply voltage to the VIN pad. Connect ground to the GND pad.
- 5) Turn on the power supply. Verify that the output voltage is 5V.
- 6) Remove the shunt from JU2 pins 1 and 2, and place it across pins 2 and 3 for a 3.3V output voltage.

## Table 1. Jumper JU1 Functions (Shutdown Mode)

| SHUNT LOCATION   | SHDN PIN         | OUTPUT VOLTAGE           |
|------------------|------------------|--------------------------|
| 1 and 2          | Connected to VL  | MAX1744 enabled          |
| 2 and 3          | Connected to GND | Shutdown mode, V OUT = 0 |

## Table 2. Jumper JU2 Functions (Output Voltage Selection)

| SHUNT LOCATION   | 3 /5 PIN         | OUTPUT VOLTAGE   |
|------------------|------------------|------------------|
| 1 and 2          | Connected to VL  | V OUT = 5V       |
| 2 and 3          | Connected to GND | V OUT = 3.3V     |

## Detailed Description Evaluating Other Output Voltages

To generate output voltages other than 3.3V or 5V, replace the MAX1744 with the MAX1745 (adjustable output), and select the external voltage-divider resistors,  R2  and  R3.  The  MAX1745 allows the output voltage to be set from 1.25V to 18V. The only other modification required is to remove the shunt from JU2. For output voltages greater than 5V, replace output capacitor C3 with a higher voltage rating. Refer to the Setting the  Output  Voltage section  in  the  MAX1744/ MAX1745 data sheet for instructions on calculating R2 and R3 values.

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          |
|-----------------------|--------------|--------------|
| AVX                   | 803-946-0690 | 803-626-3123 |
| Central Semiconductor | 516-435-1110 | 516-435-1824 |
| Coilcraft             | 708-639-6400 | 708-639-1469 |
| Coiltronics           | 561-241-7876 | 561-241-9339 |
| Dale-Vishay           | 402-564-3131 | 402-563-6418 |
| Fairchild             | 408-721-2181 | 408-721-1635 |
| IRC                   | 361-992-7900 | 361-992-3377 |
| Nihon                 | 847-843-7500 | 847-843-2798 |
| Sanyo                 | 619-661-6835 | 619-661-1055 |
| Sprague               | 603-224-1961 | 603-224-1430 |
| Sumida                | 708-956-0666 | 708-956-0702 |

Note: Please indicate that you are using the MAX1744/MAX1745 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1744 Evaluation Kit

<!-- image -->

Figure 1. MAX1744 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1744 Evaluation Kit

<!-- image -->

Figure 2. MAX1744 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 4. MAX1744 EV Kit PC Board Layout-Component Side

Figure 3. MAX1744 EV Kit Component Placement GuideBottom Silkscreen

<!-- image -->

Figure 5. MAX1744 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4