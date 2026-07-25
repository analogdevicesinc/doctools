<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX8608Y evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX8608Y step-up DC-DC converter, which provides two output connections for either white LED (WLED) drive or organic LED (OLED) power at up to 85% efficiency. The EV kit operates from a 2.7V to 5.5V input and is configured to drive six surface-mount WLEDs with an output current of 25mA, as well as provide a regulated 25V output voltage (at up to 40mA) for OLED power.

The MAX8608Y EV kit can also evaluate the MAX8608Z, which does not feature the temperature (TA) derating function.  The TA derating function is offered only by the MAX8608Y. Either IC provides the flexibility of controlling LED brightness through an external analog or PWM dimming signal.

## Part Selection Table

| PART        | TEMPERATURE DERATING   |
|-------------|------------------------|
| MAX8608YETD | Yes                    |
| MAX8608ZETD | No                     |

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| C1            |     1 | 1µF ±10%, 35V X7R ceramic capacitor (0805) Taiyo Yuden GMK212BJ105KG        |
| C2            |     1 | 0.001µF ±10%, 50V X7R ceramic capacitor (0402) Taiyo Yuden UMK105BJ102KV    |
| C3            |     1 | 0.01µF ±10%, 25V X7R ceramic capacitor (0402) Taiyo Yuden TMK105BJ103KV     |
| C4            |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J475KE        |
| D1            |     1 | 200mA, 40V Schottky diode (SOD523) CMOSH-4E lead free Central Semiconductor |
| D2-D7         |     6 | White LEDs Nichia NSCW215T                                                  |

- ♦ 2.7V to 5.5V Input Range
- ♦ WLED Drive Up to 6 LEDs at 25mA
- ♦ OLED Drive at 25V (Up to 40mA)
- ♦ High Efficiency Up to 85%
- ♦ Analog or PWM Dimming Control
- ♦ 1MHz PWM Switching Frequency (Selectable 500kHz)
- ♦ 14-Pin TDFN Package
- ♦ Low-Profile Components (1.7mm max)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE         |
|---------------|--------------|--------------------|
| MAX8608YEVKIT | 0°C to +70°C | 14 TDFN, 3mm x 3mm |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                      |
|---------------|-------|--------------------------------------------------|
| JU1           |     1 | 2-pin header                                     |
| JU2, JU3      |     2 | 3-pin headers                                    |
| JU4           |     0 | 3-pin header, not installed                      |
| L1            |     1 | 22µH, 250mA inductor (1210) Murata LQH32CN220K53 |
| R1            |     1 | 13.0 Ω ±1% resistor (0603)                       |
| R2            |     1 | 475k Ω ±1% resistor (0402)                       |
| R3            |     1 | 6.19k Ω ±1% resistor (0402)                      |
| R4            |     1 | 10k Ω ±5% resistor (0402)                        |
| R5            |     1 | 100k Ω ±5% resistor (0402)                       |
| U1            |     1 | MAX8608YETD (14-pin, 3mm x 3mm) (top mark: AAN ) |
| -             |     3 | Shunts                                           |
| -             |     1 | MAX8608Y EV kit PC board                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

Features

## MAX8608Y Evaluation Kit

## Recommended Equipment

- 2.7V to 5.5V, 1A power supply
- One voltmeter

is  also  provided  to  prevent  the  internal  MOSFET  from switching when the converter output exceeds 27V.

## Operating Frequency Selection (FSEL)

The MAX8608Y EV kit provides the option to configure the operating frequency of the step-up DC-DC converter. Table 1 lists jumper JU4 settings for configuring the operating frequency. The EV kit is configured and shipped to operate at 1MHz. For operation at 500kHz, cut the trace between pins 2 and 3 of jumper JU4, located on the solder side, and short pins 1 and 2. Refer to the MAX8608Y data sheet for selecting proper components when operating at 500kHz.

## Table 1. Jumper JU4 Function

| SHUNT LOCATION   | FSEL PIN                                                                    | OPERATING FREQUENCY   |
|------------------|-----------------------------------------------------------------------------|-----------------------|
| 1-2              | Connected to VIN (cut the trace between pins 2-3 before shorting pins 1-2). | 500kHz                |
| 2-3 (default)    | Connected to GND with a PC trace.                                           | 1MHz                  |

## Enable and Output Control

The MAX8608Y IC provides two enable inputs, ENA and ENB, to enable/disable the corresponding outputs, VOUTA and VOUTB. The ENA input is set through jumper JU3 and the ENB input is set through jumper JU2. The ENA input has precedence over the ENB i nput  and thus, as long as the VOUTA output is enabled, the VOUTB output will be disabled. See Table 2 for output configuration.

## Table 2. Jumper JU2 and JU3 Functions

| SHUNT LOCATION   | SHUNT LOCATION   | MAX8608Y EV KIT OUTPUTS   | MAX8608Y EV KIT OUTPUTS   |
|------------------|------------------|---------------------------|---------------------------|
| JU2 (ENB)        | JU3 (ENA)        | VOUTB                     | VOUTA                     |
| 1-2              | 2-3              | Enabled                   | Disabled                  |
| 1-2              | 1-2              | Disabled                  | Enabled                   |
| 2-3              | 1-2              | Disabled                  | Enabled                   |
| 2-3              | 2-3              | Shutdown mode             | Shutdown mode             |

## Controlling LED Intensity

The LED intensity can be controlled using the CTRL input PC board pad on the EV kit. CTRL can be used either as an analog or a digital input. When using CTRL as an analog input, connect a 0 to 1.65V power supply

## Quick Start

The MAX8608Y EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## For WLED operation:

- 1) Verify  that  a  shunt  is  installed  across  pins  1-2  of jumper JU3 to enable VOUTA.
- 2) Verify that a shunt is installed across jumper JU1 to set full LED brightness.
- 3) Connect the positive terminal of the power supply to the VIN pad. Connect the ground terminal of the power supply to the PGND pad.
- 4) Turn on the power supply and set it to 3.6V.
- 5) Verify that all the white LEDs are lit.

## For OLED operation:

- 1) Verify  that  a  shunt  is  installed  across  pins  1-2  of jumper JU2 to enable VOUTB.
- 2) Verify  that  a  shunt  is  installed  across  pins  2-3  of jumper JU3 to disable VOUTA.
- 3) Connect the voltmeter across the VOUTB and GND pads.
- 4) Connect the positive terminal of the power supply to the VIN pad. Connect the ground terminal of the power supply to the PGND pad.
- 5) Turn on the power supply and set it to 3.6V.
- 6) Verify that the voltmeter reads 25V.

## Detailed Description

The MAX8608Y EV kit is a step-up DC-DC converter optimized for driving either six WLEDs in series or powering an OLED display. The EV kit is powered by a 2.7V to 5.5V power supply and provides two output connections,  VOUTA and VOUTB. VOUTA is configured to deliver a 25mA driving current to six WLEDs, and VOUTB is configured to provide a 25V regulated output at 40mA for OLED power. The MAX8608Y features a TA derating function that automatically limits the WLED current at high temperatures in accordance with the derating curves of popular white LEDs. The TA derating function of the MAX8608Y is only operational when VOUTA is enabled. See the Enable and Output Control section for output configuration. Overvoltage protection

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8608Y Evaluation Kit

to  CTRL, where 0V corresponds to the dimmest LED setting and 1.65V corresponds to full brightness.

## Table 3. Jumper JU1 Function

A digital PWM signal (up to 200kHz) can also be connected directly to CTRL. In this case, the duty cycle controls the brightness of the LEDs, where 0% corresponds to zero LED current and 100% is full brightness. The recommended PWM signal has a logic-low level of 0V and a logic-high level greater than 1.65V.

Pullup resistor R5 and jumper JU1 are provided so the EV kit can be used without applying a dimming signal to CTRL. With a shunt installed on jumper JU1 and no other connection to CTRL, the LEDs are set to full brightness. If CTRL is being driven, the shunt across jumper JU1 can be removed. See Table 3 for jumper JU1 settings. Remove the shunt across jumper JU1 when measuring quiescent current with the circuit in shutdown mode.

| SHUNT LOCATION      | CTRL PIN                                                         | LED INTENSITY   |
|---------------------|------------------------------------------------------------------|-----------------|
| Installed (default) | Connected to VIN through resistor R5.                            | Full brightness |
| Not Installed       | Connect an external analog signal or PWM signal to the CTRL pad. | Adjustable      |

## Evaluating the MAX8608Z

The MAX8608Y EV kit can also evaluate the MAX8608Z white LED/organic LED step-up DC-DC converter. The MAX8608Y IC must be removed and replaced with the MAX8608Z IC. Refer to the MAX8608Y/MAX8608Z IC data sheet for detailed information about these parts.

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE             |
|-----------------------|--------------|--------------|---------------------|
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com |
| Murata                | 770-436-1300 | 770-436-3030 | www.murata.com      |
| Nichia                | 248-352-6575 | -            | www.nichia.com      |
| Taiyo Yuden           | 408-573-4150 | 408-573-4159 | www.t-yuden.com     |

Note: Indicate that you are using the MAX8608Y when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8608Y Evaluation Kit

Figure 1. MAX8608Y EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8608Y Evaluation Kit

<!-- image -->

Figure 2. MAX8608Y EV Kit Component Placement GuideComponent Side

Figure 3. MAX8608Y EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX8608Y EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 5