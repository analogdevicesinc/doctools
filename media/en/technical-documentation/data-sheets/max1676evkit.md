<!-- lastmod 2022-08-04 -->
## General Description

The MAX1676 is a high-efficiency, step-up DC-DC converter for portable hand-held devices. It accepts a positive  input  voltage  between  0.7V  to  5.5V  and  converts it  to  a  higher  output  voltage.  The  MAX1676 includes a damping circuit (at BATT) that suppresses inductor ringing to reduce electromagnetic interference (EMI).

The MAX1676 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed circuit board. Three jumpers on the EV kit allow for easy access to the output voltage select, current limit, and shutdown features.

The output voltage is both adjustable and pin-selectable.  A  movable jumper selects either a 3.3V or 5.0V output, or it can be left open and a resistor network can be used to obtain a voltage in the 2V to 5.5V range. The inductor current limit is selectable for either 0.5A or 1.0A. In shutdown mode, the MAX1676 typically draws only 0.1µA.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                        |
|---------------|-------|------------------------------------------------------------------------------------|
| C1            |     1 | 47µF, 16V tantalum capacitor AVX TPSC476M016R0350                                  |
| C2            |     1 | 100µF, 10V tantalum capacitor AVX TPSD107M010R0100                                 |
| C3            |     1 | 1µF, Y5V ceramic capacitor Taiyo Yuden UMK212F105ZG                                |
| C4            |     1 | 0.1µF, X7R ceramic capacitor Taiyo Yuden UMK212BJ104KG or Murata GRM40X7R104K025AL |
| D1            |     0 | Diode (not included; needed for 1-cell inputs) Motorola MBR0520                    |
| JU1, JU2, JU3 |     3 | 3-pin jumpers                                                                      |
| L1            |     1 | 22µH power inductor (1.1A) Sumida CD54-220                                         |
| R1            |     1 | 200 Ω , 5% resistor                                                                |
| R2-R6         |     0 | Open                                                                               |
| U1            |     1 | MAX1676EUB                                                                         |

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1676EVKIT | 0°C to +70°C  | 10 µMAX      |

## MAXIM

<!-- image -->

## Features

- ' Synchronous Rectification for Improved Efficiency
- ' Operates Down to 0.7V Input Supply Voltage
- ' No External Schottky Diode Required (for multicell applications)
- ' Selectable Current Limit (0.5A or 1.0A)
- ' Damping Circuit Reduces EMI
- ' 16µA Quiescent Current
- ' 0.1µA Typical Shutdown Current
- ' Low-Battery Detector (LBI/LBO)
- ' 10-Pin µMAX Package
- ' Surface-Mount Construction
- ' Fully Assembled and Tested

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| AVX         | 803-946-0690 | 803-626-3123 |
| Motorola    | 303-675-2140 | 303-675-2150 |
| Murata      | 814-237-1431 | 814-238-0490 |
| Sumida      | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |

## Quick Start

The MAX1676 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a 1.1V to 3V supply to the pads marked +VBATT and GND.
- 2) Connect a voltmeter and load (if any) to the VOUT pad.
- 3) Place the shunt on JU3 across pins 1 and 2.
- 4) Place the shunt on JU1 across pins 1 and 2 for a 3.3V output voltage.
- 5) Place the shunt on JU2 across pins 1 and 2 for a 1A current limit.
- 6) Turn on the power and verify that the output voltage is 3.3V.
- 7) Refer to the Output Voltage Selection section to modify the board for a different output voltage.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## Detailed Description

## Input Source

The input source for the MAX1676 EV kit must be greater than 1.1V for guaranteed start-up (0.7V for operation once started), and less than the output voltage. A typical input voltage range would be the 2.0V to 3.3V range of a 2-cell NiCd battery. An input voltage greater than the selected output voltage (but less than 6V) will not damage the circuit, but under these circumstances, the MAX1676's output will equal the input voltage minus the 0.7V drop of the internal diode (0.3V if D1, the Schottky diode, is in the circuit).

Once started, the MAX1676 operates from the regulated output voltage. This means that the input voltage can fall  below the 1.1V minimum guaranteed start-up voltage. Typically, the regulated output will be maintained even if the input voltage drops to 0.7V.

## Single-Cell Operation

When using a single-cell battery, diode D1 must be installed to ensure low-voltage start-up. Use a Motorola MBR0520 or equivalent Schottky diode.

## Jumper Selection

Three 3-pin jumpers select the output voltage, current limit,  and shutdown mode. Table 1 lists the selectable jumper options.

## Table 1.  Jumper Selection Options

Figure 1.  MAX1676 EV Kit Schematic

| JUMPER   | JUMPER POSITION   | FUNCTION                                            |
|----------|-------------------|-----------------------------------------------------|
| JU1      | 1-2               | 3.3V fixed output                                   |
| JU1      | 2-3               | 5V fixed output                                     |
| JU1      | Open              | Adjustable output using resistor-divider R1 and R2. |
| JU2      | 1-2               | Inductor peak current limited to 1.0A.              |
| JU2      | 2-3               | Inductor peak current limited to 0.5A.              |
| JU3      | 1-2               | SHDN = High. MAX1676 enabled.                       |
| JU3      | 2-3               | SHDN = Low. MAX1676 disabled.                       |
| JU3      | Open              | Drive pad SHDN with an external signal.             |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Using the Low-Battery Detector

The MAX1676 has an additional comparator useful for monitoring the input source's voltage level. Resistors R3 and R4 are connected as a voltage-divider between the +VBATT pad and the MAX1676 LBI pin. Note that a printed circuit trace across R4 shorts the LBI pin to ground when this function is not used. Cut the trace before installing R4.

Another location on the board facilitates the addition of a pull-up resistor on the LBO output. The LBO output is an open-drain output that can sink 1mA. Install resistor R2 if an external circuit is to be driven from LBO.

Refer to the Low-Battery Detection section of the MAX1674/MAX1675/MAX1676 data sheet for instructions on selecting values for resistors R2, R3, and R4.

## Output Voltage Selection

The MAX1676 is initially set to output either 3.3V or 5V, depending on the position of JU1. However, by adding external resistors, the output can be adjusted from 2.0V to 5.5V. Remove the shunt on JU1 and add the output voltage-divider resistors R5 and R6. The Selecting the Output Voltage section of the MAX1674/ MAX1675/MAX1676 data sheet gives instructions for calculating R5 and R6 values.

<!-- image -->

Figure 2.  MAX1676 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3.  MAX1676 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.  MAX1676 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1676 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1998 Maxim Integrated Products