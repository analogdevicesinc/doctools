<!-- lastmod 2022-08-04 -->
## General Description

The MAX8627 evaluation kit (EV kit) is a fully assembled and tested circuit for evaluating the MAX8627 step-up converter. The MAX8627 EV kit operates from a 1.8V to 5.5V supply, and provides up to 1A output current from its 5V output. The output voltage can be adjusted from 3V to 5V by changing a resistor on the board.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| C1-C4         |     4 | 22µF ±20%, 6.3V X5R ceramic capacitors (1206) TDK C3216X5R0J226M |
| JU1           |     1 | 3-pin header                                                     |
| L1            |     1 | 1µH inductor TOKO A918CY-1R0M (D62LCB)                           |
| R1            |     1 | 2M Ω ±1% resistor (0402)                                         |
| R2            |     1 | 499k Ω ±1% resistor (0402)                                       |
| R3            |     0 | Not installed, (0402) PCB short resistor                         |
| R4            |     0 | Not installed, (0402) resistor                                   |
| U1            |     1 | MAX8627ETD (14-pin TDFN, 3mm x 3mm)                              |
| -             |     1 | Shunt, 2 position                                                |
| -             |     1 | MAX8627 EV kit PCB                                               |

## Quick Start

## Recommended Equipment

- 1.8V to 5.5V power supply capable of delivering 3A
- Voltmeter
- Load (up to 1A)

## Procedure

Follow the steps below to verify board operation.

- 1) Place the shunt across pins 2-3 of JU1 on the EV kit to enable the converter.
- 2) Set the power-supply voltage between 1.8V and 5.5V. Turn off the power supply. Do not turn on the power supply until all connections are completed.

True Shutdown is a trademark of Maxim Integrated Products, Inc.

<!-- image -->

Features

- ♦ 1MHz PWM Switching Frequency
- ♦ True Shutdown™ Output
- ♦ Up to 95% Efficiency
- ♦ 1.0A Guaranteed Output Current at VIN ≥ 3V
- ♦ Fast Soft-Start Eliminates Inrush Current
- ♦ 20µA (typ) Quiescent Current
- ♦ 0.1µA Logic-Controlled Shutdown
- ♦ Tiny 14-Pin, 3mm x 3mm TDFN IC Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE          |
|--------------|--------------|---------------------|
| MAX8627EVKIT | 0°C to +70°C | 14 TDFN (3mm x 3mm) |

- 3) Connect the positive power-supply lead to the EV kit  pad  labeled  BATT. Connect the power-supply ground to the EV kit pad labeled GND (located next to BATT).
- 4) Connect the load between the EV kit pads labeled OUT and GND.
- 5) Turn on the power supply.
- 6) Connect the voltmeter across the EV kit pads labeled OUT and GND to verify that the output voltage is 5V.

## MAX8627 Evaluation Kit

## Table 1. JU1 Functions

| SHUNT POSITION   | FUNCTION                                                                                      |
|------------------|-----------------------------------------------------------------------------------------------|
| 1-2              | Shutdown                                                                                      |
| 2-3              | Enable                                                                                        |
| Open             | Enable function is driven externally by a logic signal connected to the ON pad of the EV kit. |

## Detailed Description

## Adjusting the Output Voltage

The default output voltage of the MAX8627 EV kit is 5V, but it can be adjusted between 3V and 5V by changing resistor R1. Find the value of R1 from the following equation:

<!-- formula-not-decoded -->

where the lower feedback resistor, R2, is 499k Ω ,  and VFB is 1.01V.

## Adjusting the Current Limit

The MAX8627 EV kit's current limit is set to the default of 3.5A. To set the current limit lower, cut the PCB trace shorting R3, and then install resistors R3 and R4. Refer to the MAX8627 data sheet for information on calculating these resistor values.

Figure 1. MAX8627 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8627 Evaluation Kit

<!-- image -->

Figure 2. MAX8627 EV Kit Component Placement Guide-Component Side

Figure 3. MAX8627 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX8627 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 3