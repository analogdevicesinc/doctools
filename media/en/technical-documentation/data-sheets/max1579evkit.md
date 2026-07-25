<!-- lastmod 2022-08-03 -->
## General Description

The MAX1579 evaluation kit (EV kit) is a fully assembled and tested circuit  for  evaluating  the  MAX1578/ MAX1579. This MAX1579 EV kit drives six white LEDs in series for backlighting and includes complete bias supplies for small TFT displays. The internal charge pumps for the TFT bias supplies provide fixed +15V at 100µA for VON, -10V at 100µA for VOFF, and +5V at 25mA for the source driver. The MAX1579 EV kit can also evaluate the MAX1578. To evaluate the MAX1578, order a free sample along with this EV kit.

## Component List

| DESIGNATION          |   QTY | DESCRIPTION                                                         |
|----------------------|-------|---------------------------------------------------------------------|
| C1, C6               |     2 | 4.7µF, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J475KE19  |
| C2                   |     1 | 0.1µF, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H104K          |
| C3                   |     1 | 0.1µF, 10V X7R ceramic capacitor (0402) TDK C1005X7R1A104K          |
| C4, C5               |     2 | 2.2µF, 6.3V X5R ceramic capacitors (0603) Taiyo Yuden JMK107BJ225KA |
| C7, C8, C9, C12, C13 |     5 | 1µF, 6.3V X5R ceramic capacitors (0402) Murata GRM155R60J105KE19    |
| C10, C11, C14        |     3 | 1µF, 16V X7R, ceramic capacitors (0805) TDK C2012X7R1C105K          |
| C15                  |     0 | Not installed                                                       |
| D1                   |     1 | CMOSH-4E, 40V, 200mA Central Semiconductor (SOD-523)                |
| D2, D3               |     0 | Shorted LED footprint                                               |
| D4-D9                |     6 | White LEDs Nichia NSCW215T                                          |
| JU1                  |     1 | 2-pin header                                                        |
| JU2                  |     1 | 3-pin header                                                        |
| L1                   |     1 | 22µH, 250mA inductor (1210) Murata LQH32CN220K53                    |
| R1                   |     1 | 22.1 Ω ±1% resistor (0402)                                          |
| R2                   |     1 | 100k Ω ±5% resistor (0402)                                          |
| R3, R4               |     2 | 200 Ω ±5% resistors (0402)                                          |
| R5                   |     0 | Not installed, PC board short                                       |
| U1                   |     1 | MAX1579ETG                                                          |
| None                 |     2 | Shunt, 2 position                                                   |
| None                 |     1 | MAX1579 EV kit PC board                                             |

## Procedure

The MAX1579 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that the shunt on JU2 is connected to ON (1 and 2). Verify that a shunt is on JU1.
- 2) Preset the power supply to between 2.7V and 5.5V. Turn off the power supply. Do not turn on the power supply until all connections are completed .

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

- LCD Bias Outputs (+5V/25mA, +15V/100µA, -10V/100µA) Output Sequencing No External Diodes Required POS, NEG, and MAIN Are Autodischarged During Shutdown
- ♦
- ♦ LED Backlight Step-Up DC-DC Converter Series Connection for Uniform Illumination Supports Up to 8 LEDs at 25mA (max) 900mW (max) Power Overvoltage Protection Low Input/Output Ripple Soft-Start Fast 1MHz PWM Operation for Small Component Size

Temperature Derating Function (MAX1579)

- ♦ High Efficiency
- ♦ Independent Enable Inputs for LED and Bias Power
- ♦ Thermal-Shutdown Protection
- ♦ 1µA Shutdown Current
- ♦ Tiny 4mm x 4mm Thin QFN Package
- ♦ Fully Assembled and Tested

Bias: 83% (5.0V at 25mA, 15V/-10V at 100µA) LED: 84% (6 LEDs at 20mA)

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE            |
|--------------|--------------|-----------------------|
| MAX1579EVKIT | 0°C to +70°C | 24 Thin QFN 4mm x 4mm |

## Quick Start

## Recommended Equipment

- A 2.7V to 5.5V power supply or battery capable of delivering 1A
- Three voltmeters (DMMs)

## MAX1579 Evaluation Kit

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | www.centralsemi.com   |
| Murata                | 814-237-1431 | www.murata.com        |
| Nichia                | 248-352-6575 | www.nichia.com        |
| Taiyo Yuden           | 408-573-4150 | www.t-yuden.com       |
| TDK                   | 847-803-6100 | www.component.tdk.com |
| Vishay                | 402-563-6866 | www.vishay.com        |

Note: Indicate that you are using the MAX1579 when contacting these component suppliers.

- 3) Connect the positive power-supply terminal to the pad labeled IN on the EV kit.
- 4) Connect the power-supply ground terminal to the pad labeled GND on the EV kit.
- 5) Connect the positive terminal of a voltmeter (V1) to the pad labeled MAIN on the EV kit. Connect the ground terminal of the voltmeter to the pad labeled GND on the EV kit.
- 6) Connect the positive terminal of a voltmeter (V2) to the pad labeled POS on the EV kit. Connect the ground terminal of the voltmeter to the pad labeled GND on the EV kit.
- 7) Connect the positive terminal of a voltmeter (V3) to the pad labeled NEG on the EV kit. Connect the ground terminal of the voltmeter to the pad labeled GND on the EV kit.
- 8) Turn on the power supply and verify that the backlight LEDs (D4-D9) are lit.
- 9) The V1 voltmeter should read near +5V.
- 10) The V2 voltmeter should read near +15V.
- 11) The V3 voltmeter should read near -10V.

## Detailed Description

## Bias-Supply Shutdown Control

The shunt on JU2 can be used to enable or shut down the bias supply. The EV kit default position has the shunt placed on pins 1 and 2 to enable the bias supply. Place the shunt on pins 2 and 3 to shut down the bias supply. The pad ONBIAS can also be used to shut down the bias supply with an external logic signal. Remove the shunt from JU2 before connecting a logic signal to ONBIAS, as pin 2 of JU2 and ONBIAS are connected together on the PC board.

## Charge-Pump Output Sequencing

The outputs of the MAX1578/MAX1579 charge pumps are sequenced to turn on and off in a predictable fashion.  The MAX1578/MAX1579 data sheet describes charge-pump output sequencing in detail.

## Backlight Shutdown Control

The shunt on JU1 can be used to enable or shut down the backlight LEDs. The EV kit default position has the shunt placed on JU1 for backlight LEDs enabled. Remove the shunt on JU1 to shut down the backlight LEDs. The pad CTRL can also be used to shut down the backlight LEDs with an external logic signal. Remove the shunt from JU1 before connecting a logic signal to CTRL, as JU1 and CTRL are connected together with a 100k Ω resistor on the PC board.

## Ambient Temperature Derating Function (MAX1579)

The MAX1579 limits the maximum LED current depending on its die temperature. VCS is limited to 340mV up to  +42°C. Once the temperature reaches +42°C, the maximum VCS declines by 6mV/°C until the minimum of 40mV is reached at high temperature.

## Adjusting LED Current

Set the maximum LED current by adjusting the value of R1, which is connected from CS to GND. Calculate the resistance as follows:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where ILED is the desired maximum current through the LEDs in amps when VCTRL is 1.65V or greater.

## LED Dimming Control

## Using a DAC

VCTRL controls the LED drive current. The voltage at CS regulates to 20% of VCTRL to control the current through the LEDs and, therefore, the brightness. Drive CTRL using a DAC with an output voltage between 0.24V and 1.65V to control the brightness of the LEDs. Increasing VCTRL beyond 1.65V results in no further brightness increase. Hold VCTRL below 100mV for longer than 10.5ms to shut down the boost converter.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1579 Evaluation Kit

Figure 1. MAX1579 EV Kit Schematic

<!-- image -->

## Using Direct PWM into CTRL

Another useful technique for LED dimming control is the application of a logic-level PWM signal applied directly to CTRL. LED current may be varied from zero to maximum. The frequency range of the PWM signal is from 200Hz to 200kHz, while 0% duty cycle corre- sponds to zero current and 100% duty cycle corresponds to maximum current. The error amplifier and compensation capacitor form a lowpass filter so PWM dimming results in DC current to the LEDs without the need for any additional RC filters.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1579 Evaluation Kit

<!-- image -->

Figure 2. MAX1579 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1579 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1579 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600