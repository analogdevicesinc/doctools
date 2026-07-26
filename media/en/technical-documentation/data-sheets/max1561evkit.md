<!-- lastmod 2022-08-03 -->
## General Description

The MAX1561 evaluation kit is a fully assembled and tested circuit board that evaluates the MAX1561 white LED step-up DC-to-DC converter. The circuit operates from 2.6V to 5.5V and delivers an adjustable 0 to 20mA to drive a series of up to six white LEDs in series.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                         |
|---------------|-------|-----------------------------------------------------------------------------------------------------|
| C1            |     1 | 2.2µF, 6.3V X5R capacitor (0603) Taiyo-Yuden JMK107BJ225MA or Panasonic ECJ1VB0J225M                |
| C2            |     1 | 0.1µF, 50V X7R capacitor (0805) Taiyo-Yuden UMK212BJ104MG or Panasonic ECJ2FB1H104M                 |
| C3            |     1 | 0.1µF, 10V X7R capacitor (0603) Taiyo-Yuden LMK107BJ104MA or Panasonic ECJ1VB1A104M                 |
| R1            |     1 | 7.5 Ω ±1% resistor (0603)                                                                           |
| R2            |     1 | 100k Ω ±5% resistor (0603)                                                                          |
| L1            |     1 | 22µH, 250mA, 0.710 Ω , 2.5mm x 2.2mm x 2.0mm inductor (1210) Murata LQH32CN220K                     |
| L2            |     1 | 22µH, 210mA, 0.770 Ω , 2.5mm x 1.8mm x 1.8mm inductor (1206) Taiyo Yuden LBC2518-220M (unconnected) |
| L3            |     1 | 22µH, 350mA, 1.46 Ω , 3.6mm x 3.6mm x 1.2mm inductor TOKO 976AS-220M (D312F) (unconnected)          |
| D1            |     1 | Schottky diode, 200mA Central CMDSH2-3                                                              |
| D2-D7         |     6 | White LEDs Nichia NSCW215T                                                                          |
| JU1           |     1 | 2-pin header                                                                                        |
| JU2           |     1 | Not installed, PC board jumper-open                                                                 |
| U1            |     1 | MAX1561ETA (8-pin thin QFN)                                                                         |
| -             |     1 | Shunt                                                                                               |
| -             |     1 | MAX1561 EV kit PC board                                                                             |

<!-- image -->

## Features

- ♦ Constant-Current Regulation for Uniform Illumination
- ♦ High 84% Efficiency
- ♦ Flexible Analog or PWM Dimming Control
- ♦ 900mW Output Power with Internal 30V MOSFET Switch
- ♦ Output Overvoltage Protection
- ♦ Low 15mVP-P Input Ripple
- ♦ Small, Low-Profile Components
- ♦ 2.6V to 5.5V Input Range
- ♦ 0.3µA Shutdown Current
- ♦ Tiny 3mm x 3mm Thin QFN
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE             |
|--------------|----------------|------------------------|
| MAX1561EVKIT | -30°C to +85°C | 8 Thin QFN (3mm x 3mm) |

## Quick Start

Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that a shunt is across the pins of jumper JU1.
- 2) Preset the power supply to between 2.6V and 5.5V.
- 3) Turn off the power supply.
- 4) Connect positive power-supply terminal to the pad on the EV kit labeled V+.
- 5) Connect power-supply ground terminal to the pad on the EV kit labeled GND.
- 6) Turn on the power supply and verify that the LEDs are lit.

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE             |
|-----------------------|--------------|---------------------|
| Central Semiconductor | 631-435-1110 | www.centralsemi.com |
| Kamaya                | 260-489-1533 | www.kamaya.com      |
| Kingbright            | 888-546-4533 | www.kingbright.com  |
| Murata                | 814-237-1431 | www.murata.com      |
| Nichia                | 248-352-6575 | www.nichia.com      |
| Panasonic             | 714-373-7939 | www.panasonic.com   |
| Sumida                | 847-956-0666 | www.sumida.com      |
| Taiyo Yuden           | 408-573-4150 | www.t-yuden.com     |
| TOKO                  | 847-297-0070 | www.toko.com        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1561 Evaluation Kit

## Detailed Description

## Controlling LED Intensity

LED intensity can be controlled using the CTRL input. CTRL can be used either as an analog input or a digital input. When using CTRL as an analog input, connect a 0.24V to 1.62V voltage source to CTRL, where 0.24V corresponds to the dimmest setting and 1.62V is full brightness. Connecting CTRL to ground places the MAX1561 in shutdown mode. A digital PWM signal (200Hz to 200kHz) can also be connected directly to CTRL. In this case, the duty cycle controls the brightness of the LEDs, where 0% corresponds to the dimmest setting and 100% is full brightness.

A pullup resistor (R2) and jumper (JU1) are provided so that  the  EV  kit  can  be  used  without  a  connection  to CTRL. With JU1 shorted and no other connection to CTRL, the LEDs are set to full brightness. If CTRL is being driven, the shunt across JU1 can be removed. Remove the jumper across JU1 when measuring quiescent current with the circuit in shutdown mode.

Figure 1. MAX1561 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Changing the Number of LEDs

The MAX1561 can be used to drive two to six LEDs. The MAX1561 EV kit comes configured for driving six LEDs. To evaluate the MAX1561 driving fewer than six LEDs, short out the pads of the unused LEDs. For convenience, JU2 can be used to short LEDs D2 and D3 for LED operation.

## Evaluating Other Inductors

Inductors L2 and L3 are provided on the EV kit board to simplify evaluation of other inductors. To evaluate these inductors in the circuit, carefully remove L1 from the circuit and replace it with either L2 or L3.

<!-- image -->

Figure 2. MAX1561 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1561 EV Kit Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

## MAX1561 Evaluation Kit

Figure 3. MAX1561 EV Kit Layout-Component Side

<!-- image -->