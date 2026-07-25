<!-- lastmod 2022-08-03 -->
## General Description

The MAX1582 evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX1582 white LED step-up converter. The circuit operates from 2.6V to 5.5V and delivers 0 to 20mA to light a series of up to six white LEDs. The evaluation kit has two groups of  white  LEDs-a main group with four LEDs, and a subgroup with two LEDs. These two groups of LEDs have independent shutdown/enable control through jumpers provided on the board. A flexible dimming feature  allows  the  LED  brightness to be controlled with either an analog voltage or a PWM signal.

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | www.centralsemi.com   |
| Kamaya                | 260-489-1533 | www.kamaya.com        |
| Murata                | 814-237-1431 | www.murata.com        |
| Nichia                | 248-352-6575 | www.nichia.com        |
| Panasonic             | 714-373-7939 | www.panasonic.com     |
| Sumida                | 847-956-0666 | www.sumida.com        |
| Taiyo Yuden           | 408-573-4150 | www.t-yuden.com       |
| TDK                   | 847-803-6100 | www.component.tdk.com |
| TOKO                  | 847-297-0070 | www.toko.com          |

Note: When contacting these suppliers, please specify you are using the MAX1582.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                          |
|---------------|-------|------------------------------------------------------------------------------------------------------|
| C1            |     1 | 2.2µF, 6.3V X5R capacitor (0603) Taiyo Yuden JMK107BJ225KA, or Panasonic ECJ1VB0J225M, or equivalent |
| C2            |     1 | 0.1µF, 50V X7R capacitor (0603) TDK C1608X7R1H104KT or equivalent                                    |
| C3            |     1 | 0.022µF X7R capacitor (0603) Taiyo Yuden TMK107BJ223KA or equivalent                                 |
| D1            |     1 | 30V, 200mA Schottky diode (SOD- 323) Central CMDSH2-3                                                |
| D2-D7         |     6 | White LEDs Nichia NSCW215T                                                                           |

<!-- image -->

## Features

- ♦ Constant Current Regulation for Uniform Illumination
- ♦ Up to 84% Efficiency
- ♦ Flexible Analog or PWM Dimming Control
- ♦ Low 15mVP-P Input Ripple
- ♦ 0.9W Output Power with Internal 30V MOSFET Switch
- ♦ Output Overvoltage Protection Eliminates Zener Diode
- ♦ Small, Low-Profile Components
- ♦ 2.6V to 5.5V Input Range
- ♦ 0.01µA Shutdown Current
- ♦ Thin QFN 4mm x 4mm IC Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE         | IC PACKAGE   |
|--------------|--------------------|--------------|
| MAX1582EVKIT | -30 ° C to +85 ° C | 12 Thin QFN  |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                     |
|---------------|-------|---------------------------------------------------------------------------------|
| JU1, JU2      |     2 | 3-pin headers                                                                   |
| JU3           |     1 | 2-pin header                                                                    |
| L1            |     1 | 22µH inductor (1210) 250mA, 710m Ω , 2.5 mm x 2.2 mm x 2.0mm Murata LQH32CN220K |
| R1            |     1 | 7.5 Ω ±1% resistor (0603)                                                       |
| R2            |     1 | 100k Ω ±5% resistor (0603)                                                      |
| U1            |     1 | MAX1582ETC (12-pin thin QFN 4 x 4)                                              |
| U2            |     1 | MAX1582EBE (UCSP 4 x 4)                                                         |
| None          |     3 | Shunts                                                                          |
| None          |     1 | MAX1582 EV kit PC board                                                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX1582 Evaluation Kit

## Quick Start

Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify the shunts on JU1 and JU2 are across pins 2 and 3.
- 2) Verify that a shunt is across the pins of jumper JU3.
- 3) Preset the power supply to between 2.6V and 5.5V.
- 4) Turn off the power supply.
- 5) Connect the power-supply positive terminal to the V+ pad on the EV kit.
- 6) Connect the power-supply ground terminal to the GND pad on the EV kit.
- 7) Turn on the power supply and verify that the LEDs are lit.

## Detailed Description

## Enable/Shutdown

The LEDs on the MAX1582 EV kit are divided into two groups-a main group consisting of D2-D5 and a subgroup consisting of D6 and D7. Connect pins 2 and 3 of JU1 to enable the main LED group, or connect pins 1 and 2 to disable the main LED group. Connect pins 2

## Table 1. Jumper Functions

| JUMPER   | POSITION   | FUNCTION                                                              | LEDs AFFECTED                                                         |
|----------|------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------|
| JU1      | 1, 2       | Disable                                                               | D2-D5 (main group)                                                    |
| JU1      | 2, 3       | Enable                                                                | D2-D5 (main group)                                                    |
| JU2      | 1, 2       | Disable                                                               | D6, D7 (subgroup)                                                     |
| JU2      | 2, 3       | Enable                                                                | D6, D7 (subgroup)                                                     |
| JU3      | Short      | 100k Ω pullup resistor connected from CTRL to V+.                     | 100k Ω pullup resistor connected from CTRL to V+.                     |
| JU3      | Open       | CTRL open-must be driven externally.                                  | CTRL open-must be driven externally.                                  |
| JU4      | Short      | Shorts D2 so only D3, D4, and D5 are used in the LED main group.      | Shorts D2 so only D3, D4, and D5 are used in the LED main group.      |
| JU4      | Open       | All four LEDs (D2-D5) are used.                                       | All four LEDs (D2-D5) are used.                                       |
| JU5      | Short      | LED main group connected.                                             | LED main group connected.                                             |
| JU5      | Open       | LED main group disconnected; connect external LEDs from OUT1 to OUT2. | LED main group disconnected; connect external LEDs from OUT1 to OUT2. |
| JU6      | Short      | LED subgroup connected.                                               | LED subgroup connected.                                               |
| JU6      | Open       | LED subgroup disconnected; connect external LEDs from OUT2 to CS.     | LED subgroup disconnected; connect external LEDs from OUT2 to CS.     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

and 3 of JU2 to enable the subgroup, or connect pins 1 and 2 to disable the subgroup (Table 1). If both LED groups are disabled, then the IC enters low-power shutdown mode.

## Controlling LED Intensity

LED intensity is controlled using the CTRL input. CTRL is used either as an analog input or a digital PWM input. When using CTRL as an analog input, connect a 0 to 1.62V voltage source to CTRL, where 0V corresponds to  the  dimmest setting, and 1.62V is full brightness. Exceeding 1.62V does not increase brightness. For digital dimming, connect a PWM signal (200Hz to 200kHz) directly  to  CTRL.  In  this  case,  the  duty  cycle  controls the brightness of the LEDs, where 0% duty cycle corresponds to zero current and 100% duty cycle corresponds to full current. PWM signal VIL should equal 0V and VIH should exceed 1.62V.

A pullup resistor and jumper (R2 and JU3) are provided so the evaluation kit can be used without an external connection to CTRL. With JU3 shorted and no other connection to CTRL, the LEDs are set to full brightness. If CTRL is being driven, the shunt across JU3 can be removed. Remove the shunt across JU3 when measuring quiescent current with the circuit in shutdown mode; otherwise excessive current is measured.

## MAX1582 Evaluation Kit

Figure 1. MAX1582 EV Kit Schematic

<!-- image -->

## Changing the Number of LEDs

The MAX1582 can be used to drive a total of up to six LEDs, and the MAX1582 EV kit comes configured for driving six LEDs. To evaluate the MAX1582 driving fewer than six LEDs, short out the pads of the unused LEDs. To prevent excessive leakage in shutdown, there must be at least two white LEDs in the circuit. For accurate dimming control, there must be at least two white LEDs in each group. If dimming is not required, this can be reduced to one LED per group. For convenience, JU4 can be used to short D2, reducing the number of main LEDs to three.

<!-- image -->

## Connecting External LEDs

Although the MAX1582 EV kit comes with surfacemount LEDs installed, it can also be used to drive external LEDs. For the main group, cut the PC board trace shorting JU5, and connect a series string of two to six white LEDs from OUT1 to OUT2. Connect the anode to OUT1 and the cathode to OUT2. For the subgroup, cut the PC board trace shorting JU6 and connect a series string  of  two  to  three  white  LEDs  from  OUT2  to  CS. Connect the anode to OUT2 and the cathode to CS. Ensure the total number of subgroup LEDs does not exceed three.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1582 Evaluation Kit

<!-- image -->

Figure 2. MAX1582 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1582 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1582 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600