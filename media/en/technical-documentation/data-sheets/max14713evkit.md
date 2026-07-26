<!-- lastmod 2022-08-03 -->
## MAX14713 Evaluation Kit

## General Description

The MAX14713 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX14713 power path selector. To evaluate the MAX14714, request a  sample  from  Maxim  and  replace  the  MAX14713  with the MAX14714.

## EV Kit Contents

- MAX14713 EV Kit Board

## Features

- 1.6V to 5.5V Operating Voltage Range
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX14713/MAX14714

## Quick Start

## Required Equipment

- MAX14713 EV kit
- 3V DC power supply
- Two 5V DC power supplies
- Multimeter

## Procedure

The  MAX14713  EV  kit  is  fully  assembled  and  tested. Follow these steps to verify board operation:

- 1) Verify that all jumpers are in their default positions.
- 2) Connect 3V DC supply to VIO. Turn on the power supply.
- 3) Connect one 5V DC supply to IN1. Connect one 5V DC supply to IN2.
- 4) Turn on IN1 supply. Verify LED1 is on and OUT is 5V.
- 5) Turn off IN1 supply. Verify LED1 is off.
- 6) Turn on IN2 supply. Verify LED1 is on and OUT is 5V.
- 7) Turn off IN2 supply. Verify LED1 is off.
- 8) Set IN1 to 4V and IN2 to 3.5V, and turn on both power supplies. Verify OUT goes to 4V.
- 9) Increase IN2 to 4.1V. Note that OUT is still 4V.
- 10)  Slowly increase IN2. Verify OUT = IN2 when IN2 reaches ~4.2V.
- 11)  After OUT = IN2. Decrease IN2 to 3.9V. Verify OUT = IN2 still.
- 12)  Slowly decrease IN2. Verify OUT = IN1(4V) when IN2 reaches ~3.8V.

<!-- image -->

## MAX14713 Evaluation Kit

## Detailed Description of Hardware

The MAX14713 EV kit is a fully assembled and tested circuit board demonstrating the MAX14713 power path selector IC in a 15-bump, surface-mount, wafer-level package (WLP).

The MAX14713 EV kit features an LED to indicate that input is powered from either channel 1 or 2.

## Enable Inputs

Use JU1 and JU2 to enable the device. See Table 1 for jumper settings.

Table 1. Enable Input Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                      |
|----------|------------------|------------------------------------------------------------------|
| JU1      | 1-2              | EN1 is connected to VIO (TP6) through R1, channel 1 is disabled. |
| JU1      | 2-3*             | EN1 is connected to GND through R1, channel 1 is enabled.        |
| JU2      | 1-2              | EN2 is connected to VIO (TP6) through R2, channel 2 is disabled. |
| JU2      | 2-3*             | EN2 is connected to GND through R2, channel 2 is enabled.        |

## Table 2. Output Load Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                        |
|----------|------------------|------------------------------------|
| JU3      | Installed        | OUT is connected to R5, 10Ω.       |
| JU3      | Not installed*   | OUT is not connected to R5.        |
| JU5      | Installed        | OUT is connected to R3, 1kΩ.       |
| JU5      | Not installed*   | OUT is not connected to R3.        |
| JU7      | Installed        | OUT is connected to C4 and C5.     |
| JU7      | Not installed*   | OUT is not connected to C4 and C5. |

## Evaluates: MAX14713/MAX14714

## Output Load

Use JU3, JU5, and JU7 to select output load. See Table 2 for jumper settings.

## VIO Power Source

Use JU6 to select the VIO power source. See Table 3 for jumper settings.

## LED Indicator

Use  JU8  to  enable  the  LED  indicator.  See  Table  4  for jumper settings.

## Table 3. VIO Power Source Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                     |
|----------|------------------|-------------------------------------------------------------------------------------------------|
| JU6      | Installed        | VIO is powered from either IN1 or IN2. Do not connect power on VIO (TP6) if shunt is installed. |
| JU6      | Not installed*   | VIO is powered from TP6.                                                                        |

## Table 4. LED Indicator Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                       |
|----------|------------------|-------------------------------------------------------------------|
| JU8      | Installed*       | LED1 is enabled. LED1 turns on when either IN1 or IN2 is powered. |
| JU8      | Not installed    | LED1 is disabled.                                                 |

│

## MAX14713 EV Kit Bill of Materials

| DESIGNATION       |   QTY | DESCRIPTION                                        |
|-------------------|-------|----------------------------------------------------|
| C1-C3             |     3 | 1µF ±10%, 50V X5R ceramic capacitors (0805)        |
| C4, C5            |     2 | 47µF ±10%, 16V tantalum capacitors                 |
| C6, C7            |     2 | 10µF ±10%, 25V X5R ceramic capacitors (1206)       |
| C8-C27            |    20 | DNI (2917)                                         |
| D1, D2            |     2 | 75V 0.15A diodes, Diodes Incorporated 1N4148WS-7-F |
| JU1, JU2          |     2 | 3-pin single-row headers                           |
| JU3, JU5-JU8      |     5 | 2-pin single-row headers                           |
| LED1              |     1 | Green LED                                          |
| R1-R3, R6         |     4 | 1kΩ ±1% resistors (0805)                           |
| R5                |     1 | 10Ω ±1% 5W resistor, Ohmite WNE10RFET              |
| TB1-TB3           |     3 | Terminal block                                     |
| TP1, TP3, TP7-TP9 |     5 | Black test points                                  |
| TP2, TP4-TP6      |     4 | Red test points                                    |
| U1                |     1 | Power path selector (15 WLP), Maxim MAX14713EWL+   |
| -                 |     7 | Shunts                                             |
| -                 |     1 | PCB: MAX14713 EVKIT                                |

│

## MAX14713 EV Kit Schematic

<!-- image -->

│

## MAX14713 EV Kit PCB Layout Diagrams

MAX14713 EV Kit Component Placement Guide-Component Side

<!-- image -->

MAX14713 EV Kit PCB Layout-Internal Layer 1

<!-- image -->

MAX14713 EV Kit PCB Layout-Component Side

<!-- image -->

MAX14713 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

│

## MAX14713 EV Kit PCB Layout Diagrams (continued)

MAX14713 EV Kit PCB Layout-Solder Side

<!-- image -->

MAX14713 EV Kit Component Placement Guide-Solder Side

<!-- image -->

## Ordering Information

#Denotes lead(Pb)-free and RoHS compliant.

| PART           | TYPE   |
|----------------|--------|
| MAX14713EVKIT# | EV Kit |

│

## MAX14713 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------|-----------------|
|                 0 | 2/17            | Initial release                    | -               |
|                 1 | 8/17            | Added MAX14714 to data sheet title | 1-7             |

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses Dre imSOied. 0D[im ,nteJrDted reserYes the riJht to chDnJe the circXitr\ Dnd sSeci¿cDtions ZithoXt notice Dt Dn\ time.

<!-- image -->

│

Evaluates: MAX14713 /MAX14714