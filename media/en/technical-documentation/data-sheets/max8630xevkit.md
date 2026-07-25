<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX8630X evaluation kit (EV kit) is a fully assembled and tested circuit for evaluating the MAX8630X charge-pump white LED driver. The MAX8630X EV kit operates from a 2.7V to 5.5V supply. Two pulse generator circuits are included on the board for evaluating the serial-pulse dimming feature. The EV kit can also be used to evaluate the MAX8630W with PWM dimming.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX8630XEVKIT+ | EV Kit |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                    |
|---------------|-------|----------------------------------------------------------------------------------------------------------------|
| C1-C4         |     4 | 1µF ±20%, 6.3V X5R ceramic capacitors (0402) Panasonic ECJ0EB0J105M TDK C1005X5R0J105M Murata GRM1555R60J105M  |
| C5, C8        |     2 | 2.2µF ±10%, 6.3V X5R ceramic capacitors (0603) Panasonic ECJ1VB0J225K TDK C1608X5R0J225K Murata GRM188R60J225K |
| C6, C7        |     2 | 1000pF ±10%, X7R ceramic capacitors (0402) TDK C1005X7R1H102K                                                  |
| C9            |     0 | Not installed, ceramic capacitor (0402)                                                                        |
| D1-D5         |     5 | White LEDs Nichia NSCW215T                                                                                     |

## Features

- ♦ 93% Max/85% Avg Efficiency (PLED/PBATT) Over Li+ Battery Discharge
- ♦ Adaptive 1x/1.5x Mode Switchover
- ♦ 32-Step Serial-Pulse Dimming
- ♦ Independent On/Off/Dimming for Main and Sub Displays
- ♦ 25mA per LED Output Current
- ♦ Low 0.1µA Shutdown Current
- ♦ 2.7V to 5.5V Supply Voltage Range
- ♦ On-Board Pulse Generators and White LEDs
- ♦ 14-Pin, 3mm x 3mm TDFN IC Package
- ♦ Lead-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                               |
|---------------|-------|-----------------------------------------------------------|
| D6, D7        |     2 | Diodes (SOD-323) Central Semi CMDD4448                    |
| JU1, JU2      |     2 | 3-pin headers                                             |
| JU3, JU4, JU5 |     0 | PCB shorts                                                |
| R1, R2        |     2 | 10k Ω ±5% resistors (0402)                                |
| S1, S2        |     2 | Momentary pushbutton switches Panasonic EVQ-PHP03T        |
| U1            |     1 | Charge pump (14 TDFN) Maxim MAX8630XETD25 (Top Mark: ADX) |
| U2, U3        |     2 | CMOS switch debouncers (4 SOT143) Maxim MAX6816EUS-T      |
| -             |     2 | Shunts, 2-position                                        |
| -             |     1 | PCB: MAX8630X Evaluation Kit+                             |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Nichia Corp.                           | 248-352-6575 | www.nichia.com              |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX8630X or MAX8630W when contacting these component suppliers.

## MAX8630X Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the follow equipment is needed:

- 2.7V to 5.5V power supply capable of delivering 500mA

## Procedure

Follow the steps below to verify board operation:

- 1) Place shunts across pins 1-2 of JU1 and JU2 to enable the main and sub LEDs.
- 2) Set the power-supply voltage between 2.7V to 5.5V. Turn the power supply off. Do not turn on the power supply until all connections are completed.
- 3) Connect the positive power-supply lead to the EV kit  pad labeled IN. Connect the power-supply ground to the EV kit pad labeled GND.
- 4) Turn on the power supply. When turned on, the LEDs are at full brightness.
- 5) To dim the main LEDs in 1/32nd steps, press S1 repeatedly. The main LEDs return to full brightness after 32 button presses.
- 6) To dim the sub LEDs in 1/32nd steps, press S2 repeatedly. The sub LEDs return to full brightness after 32 button presses.

## Table 1. Jumper Settings

## Detailed Description of Hardware

## Serial-Pulse Dimming

On-board pulse generators are provided to evaluate the serial-pulse dimming feature of the MAX8630X. To enable or disable the main or sub group of LEDs and the  corresponding pulse generator, use JU1 and JU2 (see Table 1). When first enabled, the LEDs are at full brightness. To dim the main LEDs, press S1 repeatedly;  for  the  sub LEDs, press S2 repeatedly. Dimming is done in 32 linear steps. On the 32nd button press, the LEDs return to full brightness.

To use external pulse generators, cut the traces shorting JU4 and JU5 to disconnect the on-board pulse generators. Connect the external pulse generator to the pads labeled ENM (main) and ENS/PWM (sub).

## Using Fewer than 5 LEDs

To disable any of the LEDs, connect the square pad next to that particular LED to the square pad labeled OUT.

## Evaluating Other Versions of the MAX8630

The MAX8630XETD25 (25mA serial-pulse dimming version) comes installed on the MAX8630X EV kit. To evaluate other versions of the MAX8630X, simply replace the IC with a part having the desired factory-programmed, full-scale output current.

To evaluate the MAX8630W\_ with direct PWM dimming control, replace U1 with the MAX8630W\_, cut the traces shorting JU4 and JU5, and install capacitor C9 (typically 0.1µF). Apply the PWM dimming signal to the EV kit pad labeled ENS/PWM.

| JUMPER   | SHUNT POSITION   | FUNCTION                                                                                                                          |
|----------|------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2              | ENM is pulled up to IN with a 10k Ω resistor, enabling the main LED group. The pulse generator for the main LED group is powered. |
| JU1      | 2-3              | ENM is pulled down to GND, disabling the main LED group. The pulse generator for the main LED group is not powered.               |
| JU2      | 1-2              | ENS is pulled up to IN with a 10k Ω resistor, enabling the sub LED group. The pulse generator for the sub LED group is powered.   |
| JU2      | 2-3              | ENS is pulled down to GND, disabling the sub LED group. The pulse generator for the sub LED group is not powered.                 |
| JU3      | Short            | Connects the on-board LEDs to the MAX8630 output.                                                                                 |
| JU3      | Open             | Disconnects the on-board LEDs from the MAX8630 output.                                                                            |
| JU4      | Short            | Connects ENM to the on-board main pulse generator.                                                                                |
| JU4      | Open             | Disconnects ENM from the on-board main pulse generator.                                                                           |
| JU5      | Short            | Connects ENS to the on-board sub pulse generator.                                                                                 |
| JU5      | Open             | Disconnects ENS from the on-board sub pulse generator.                                                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8630X Evaluation Kit

<!-- image -->

Figure 1. MAX8630X EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8630X Evaluation Kit

<!-- image -->

Figure 2. MAX8630X EV Kit Component Placement GuideComponent Side

Figure 3. MAX8630X EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX8630X EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4