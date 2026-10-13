<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX8596Z evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX8596Z white LED step-up DC-DC converter. The circuit  operates from 2.6V to 5.5V and delivers an adjustable 0 to 25mA to drive up to 8 white LEDs in series.

The MAX8596Z EV kit comes configured for driving 6 white surface-mount LEDs; however, it can support up to 8 white LEDs. A 9th LED pad is provided to evaluate the MAX8595X/MAX8596X*. The EV kit features the MAX8596Z's temperature derating function, but can be used to evaluate the MAX8595Z without this feature. Either IC provides the flexibility of controlling LED brightness through an external analog or a PWM dimming signal.

* Future product.

## Features

- ♦ Constant Current Regulation for Uniform Illumination
- ♦ TA Derating Function to Allow Fewer LEDs for Same Brightness (MAX8596Z)
- ♦ Flexible Analog or PWM Dimming Control
- ♦ 1MHz Fixed-Frequency Switching
- ♦ Output Overvoltage Protection
- ♦ 2.6V to 5.5V Input Range
- ♦ Up to 1.2W Output Power
- ♦ Internal 36V Switch
- ♦ High Efficiency Up to 86%
- ♦ Tiny 3mm x 3mm TDFN Package
- ♦ Small, Low-Profile Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE         |
|---------------|--------------|--------------------|
| MAX8596ZEVKIT | 0°C to 70°C  | 8 TDFN (3mm x 3mm) |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                    |
|---------------|-------|------------------------------------------------|
| D5-D10        |     6 | White LEDs Nichia NSCW215T                     |
| JU1           |     1 | 2-pin header                                   |
| L1            |     1 | 22µH, 250mA inductor (1210) Murata LQH32CN220K |
| R1            |     1 | 13 Ω ± 1% resistor (0603)                      |
| R2            |     1 | 100k Ω ± 5% resistor (0603)                    |
| R3            |     0 | Not installed, resistor (0402)                 |
| U1            |     1 | MAX8596ZETA (8-pin TDFN with EP 3mm x 3mm)     |
| None          |     1 | Shunt (JU1)                                    |
| None          |     1 | MAX8596Z EV kit board                          |

## Part Selection Table

| PART        | TEMPERATURE DERATING   |
|-------------|------------------------|
| MAX8596ZETA | Yes                    |
| MAX8595ZETA | No                     |

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C1            |     1 | 2.2µF, 6.3V, ± 20% X7R ceramic capacitor (0603) Taiyo Yuden JMK107BJ225MA |
| C2            |     1 | 0.1µF, 50V, ± 10% X7R ceramic capacitor (0603) Murata GRM188R71H104K      |
| C3            |     1 | 0.1µF, 16V, ± 10% X7R ceramic capacitor (0402) Murata GRM155R71C104K      |
| C4            |     0 | Not installed, capacitor (0402)                                           |
| D1            |     1 | 200mA, 40V Schottky diode (SOD523) Central Semiconductor CMOSH-4E         |
| D2, D3, D4    |     0 | Not installed white LEDs Nichia NSCW215T Recommended                      |

## MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX8596Z Evaluation Kit

## Quick Start

## Recommended Equipment

- 2.6V to 5.5V, 500mA power supply

The MAX8596Z EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Verify  that  a  shunt  is  installed  across  the  pins  of jumper JU1.
- 2) Preset the power supply to 3.6V and disable the output.
- 3) Connect the positive terminal of the power supply to the VIN PC board pad. Connect the ground of the power supply to the GND PC board pad.
- 4) Enable the power-supply output and verify that all the LEDs are lit.

## Detailed Description

The MAX8596Z EV kit is a step-up DC-DC converter circuit optimized for driving 2 to 8 white LEDs in series. The MAX8596Z EV kit circuit can be powered by a 2.6V to 5.5V power supply. The MAX8596Z IC regulates output current rather than the output voltage. The EV kit is configured to support 25mA of load current through the series LED array. The MAX8596Z features a temperature derating function that automatically limits the LED current at high temperatures in accordance with the recommended derating curves of popular white LEDs. The MAX8596Z internal MOSFET is locked out from switching when the output voltage exceeds 34V, thus providing overvoltage protection.

## Controlling LED Intensity

The white LED intensity can be controlled using the CTRL input PC board pad on the EV kit. CTRL can be used either as an analog or a digital input. When using CTRL as an analog input, connect a 0.24V to 1.72V power supply to CTRL, where 0.24V corresponds to the dimmest LED setting and 1.72V corresponds to full brightness. Connecting CTRL to ground places the MAX8596Z in shutdown mode.

A digital  PWM signal (200Hz to 200kHz) can also be connected directly to CTRL. In this case, the duty cycle controls the brightness of the LEDs, where 0% corresponds to zero LED current (and shutdown mode) and 100% is full brightness. The recommended PWM signal has a logic-low level of 0V and a logic-high level of 1.72V to 5.5V.

Pullup resistor R2 and jumper JU1 are provided so the EV kit can be used without a connection to CTRL. With a shunt installed on jumper JU1 and no other connection  to  CTRL,  the  LEDs are set to full brightness. If CTRL is being driven, the shunt across jumper JU1 can be removed. See Table 1 for jumper JU1 configuration. Remove the shunt across jumper JU1 when measuring quiescent current with the circuit in shutdown mode.

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE             |
|-----------------------|--------------|--------------|---------------------|
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com |
| Murata                | 770-436-1300 | 770-436-3030 | www.murata.com      |
| Nichia                | 248-352-6575 | -            | www.nichia.com      |
| Taiyo Yuden           | 800-348-2496 | 847-925-0899 | www.t-yuden.com     |

Note: Indicate that you are using the MAX8596Z when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8596Z Evaluation Kit

## Soft-Start

The MAX8596Z EV kit provides soft-start for the white LEDs during turn ON. Capacitor C3 acts as a compensating capacitor to stabilize the MAX8596Z converter and controls the soft-start.

## Table 1. Jumper JU1 Function

## Changing the Number of LEDs

The MAX8596Z can be used to drive 2 to 8 LEDs. The MAX8596Z EV kit comes configured for driving 6 white LEDs. To evaluate the EV kit with more LEDs, cut open the PC trace short across jumper JU2 and install extra surface-mount white LEDs on the PC board pads provided for D2, D3, and D4. Install a 0 Ω resistor in place of any unused LED pads.

## Evaluating the MAX8595Z

The MAX8596Z EV kit can also evaluate the MAX8595Z white LED step-up converter IC. The MAX8596Z IC must be removed and replaced with the MAX8595Z IC. Refer to the MAX8595Z/MAX8596Z IC data sheet for detailed information about these parts.

<!-- image -->

Figure 1. MAX8596Z EV Kit Schematic Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| SHUNT LOCATION   | CTRL PIN CONNECTIONS                                                                        | EV KIT LED FUNCTION                             |
|------------------|---------------------------------------------------------------------------------------------|-------------------------------------------------|
| Installed        | Connected to VIN through resistor R2.                                                       | White LEDs illuminate with maximum brightness.  |
| Not Installed    | Connect an external analog signal or a 200Hz to 200kHz PWM signal to the CTRL PC board pad. | LED brightness is controlled by the CTRL input. |

## MAX8596Z Evaluation Kit

<!-- image -->

Figure 2. MAX8596Z EV Kit Component Placement GuideComponent Side

Figure 3. MAX8596Z EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX8596Z EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

<!-- image -->