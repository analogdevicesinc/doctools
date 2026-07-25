<!-- lastmod 2022-08-02 -->
## General Description

The MAX9921 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the capabilities of the MAX9921 dual 2-wire Hall-effect sensor interface with  diagnostics capability. The EV kit comes with the MAX9921AUB+ installed.

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C1, C3        |     2 | 0.01µF ± 10%, 100V X7R ceramic capacitors (0603) TDK C1608X7R2A103K |
| C2, C4        |     0 | Not installed, capacitors                                           |
| C5, C6, C7    |     3 | 0.1µF ± 10%, 100V X7R ceramic capacitors (0805) TDK C2012X7R2A104K  |
| C8            |     1 | 1µF ± 10%, 25V X5R ceramic capacitor (0805) TDK C2012X5R1E105K      |
| C9            |     1 | 2.2µF ± 10%, 100V X5R ceramic capacitor (1812) TDK C4532X7R2A225K   |
| D1            |     1 | 100V, 200mA diode (SOD123) Central CMHD4448                         |
| D2, D3        |     2 | Green LEDs (0603)                                                   |
| D4            |     1 | Red LED (0603)                                                      |
| J1            |     0 | Not installed                                                       |

<!-- image -->

## Features

- ♦ 6V to 18V Operating Voltage Range, Survives 60V
- ♦ Two 2-Wire Hall-Effect Sensors on the Board
- ♦ Three Output Status LED Indicators
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9921EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| JU1, JU2      |     2 | 5-pin, 4-way headers                                                |
| JU3-JU7       |     5 | 2-pin headers                                                       |
| R1            |     1 | 63.4k Ω ± 1% resistor (0603)                                        |
| R2-R5         |     4 | 100k Ω ± 5% resistors (0603)                                        |
| R6, R7, R8    |     3 | 240 Ω ± 5% resistors (0603)                                         |
| S1, S2        |     2 | Hall-effect switches Allegro A1140EUA                               |
| S3, S4        |     0 | Not installed, switches                                             |
| U1            |     1 | Automotive Hall-effect interface (10 µMAX ® ) Maxim MAX9921AUB+     |
| U2            |     1 | Automotive micropower linear regulator (6 TDFN) Maxim MAX6765TTLD2+ |
| U3            |     1 | Triple-buffer gate (8 TSSOP)                                        |
| -             |     7 | Shunts                                                              |
| -             |     1 | PCB: MAX9921 Evaluation Kit+                                        |

## Component Suppliers

| SUPPLIER                    | PHONE        | WEBSITE               |
|-----------------------------|--------------|-----------------------|
| Central Semiconductor Corp. | 631-435-1110 | www.centralsemi.com   |
| TDK Corp.                   | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9921 when contacting these component suppliers.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## MAX9921 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- MAX9921 EV kit
- One 6V to 18V DC power supply
- A magnet

## Procedure

The MAX9921 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are made.

- 1) Verify that all jumpers are in the default positions, as shown in Table 1.
- 2) Connect  the  DC  power  supply  between  the MAX9921 EV kit's VBAT and GND pads.
- 3) Turn on the DC power supply.
- 4) Move the magnet in front of S1 and S2. Observe the light  change of the OUT1 and OUT2 LEDs on the EV kit board.

## Detailed Description of Hardware

The MAX9921 EV kit board provides a proven layout for evaluating the MAX9921. The EV kit comes with MAX9921AUB+ installed.

## External Power Supply

The MAX9921 is powered by a user-supplied 6V to 18V DC power supply connecting between VBAT and GND. The MAX9921 EV kit board is not reversebattery protected.

During the emulation of the Hall input shorted to GND, the MAX9921 will draw substantial shorting current until the  MAX9921 turns off the shorted input. The shorting current can reach a peak of 60mA to 70mA and the entire  event  may  last  0.5µs.  Many  common regulatedlab power supplies will overshoot in response to a large, short-term current pulse. When evaluating the short-to-GND fault, an unregulated supply is recommended, such as a wet-cell battery.

## Hall-Effect Sensors and Related Jumpers

The MAX9921 EV kit has two Hall-effect sensors (A1140EUA). JU1 and JU2 provide a convenient way to evaluate the MAX9921 with different Hall-effect sensors and emulate different failure conditions, as shown in Table 1.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 1. MAX9921 EV KIT Jumper Descriptions (JU1-JU7)

| JUMPER   | POSITION   | DESCRIPTION                                             |
|----------|------------|---------------------------------------------------------|
| JU1, JU2 | 1-2        | Emulates Hall input shorted to battery                  |
| JU1, JU2 | 1-3*       | Demonstrates normal operation with on-board Hall sensor |
| JU1, JU2 | 1-4        | Emulates Hall input shorted to GND                      |
| JU1, JU2 | 1-5        | Evaluates other Hall sensors                            |
| JU1, JU2 | Open       | Emulates the open-circuit failure                       |
| JU3      | 1-2* Open  | Outputs enabled Outputs disabled                        |
| JU4      | 1-2        | Outputs reflect diagnostic information                  |
| JU4      | Open*      | Outputs reflect Hall sensor information                 |
| JU5      | 1-2*       | OUT1 with 100k Ω pullup                                 |
| JU5      | Open       | OUT1 without pullup                                     |
| JU6      | 1-2*       | OUT2 with 100k Ω pullup                                 |
| JU6      | Open       | OUT2 without pullup                                     |
| JU7      | 1-2*       | ERR with 100k Ω pullup                                  |
| JU7      | Open       | ERR without pullup                                      |

## DIAG and OE Configuration

The MAX9921 EV kit uses JU3 and JU4 to configure the MAX9921 DIAG and OE inputs, as shown in Table 1. Refer to the MAX9921 IC data sheet for a detailed description of the MAX9921 diagnostic information.

## Outputs, Related LEDs, and Jumpers

The MAX9921 EV kit has three outputs: OUT1, OUT2, and ERR .  Each  output  has  an  LED to indicate its current status. All three outputs can be individually pulled up with a 100k Ω resistor, as shown in Table 1. Refer to the MAX9921 IC data sheet for a detailed description of OUT1, OUT2, and ERR outputs.

<!-- image -->

## MAX9921 Evaluation Kit

Figure 1. MAX9921 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9921 Evaluation Kit

Figure 2. MAX9921 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9921 Evaluation Kit

<!-- image -->

Figure 3. MAX9921 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9921 Evaluation Kit

Figure 4. MAX9921 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_