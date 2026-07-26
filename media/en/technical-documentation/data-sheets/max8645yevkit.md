<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX8645Y evaluation kit (EV kit) is a fully assembled and tested circuit for evaluating the MAX8645Y white LED 1x/1.5x/2x charge pump with two LDOs. This MAX8645Y EV kit drives 6 white LEDs for backlighting and uses 2 flash LED drivers to drive a flash LED module  at  a  high  current.  The  two  200mA  LDOs are also available for evaluation. In addition to the LED driver circuit and LDOs, the EV kit includes one pulse-generator circuit and two momentary pushbutton switches that are used for testing the single-wire serial pulse-dimming and flash features of  the  MAX8645Y.  The MAX8645Y EV kit can also evaluate the MAX8645X. To evaluate the MAX8645X, order a free sample along with this EV kit.

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX8645YEVKIT | EV Kit |

| DESIGNATION    |   QTY | DESCRIPTION                                                                               |
|----------------|-------|-------------------------------------------------------------------------------------------|
| C1, C5         |     2 | 10µF ±20%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J106M or Murata GRM219R60J106M |
| C3, C4, C6, C7 |     4 | 1µF ±20%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R0J105M or Murata GRM155R60J105K  |
| C8             |     1 | 0.01µF ±10%, 25V X7R ceramic capacitor (0402) TDK C1005X7R1E103K or Murata GRM155R71E103K |
| C9             |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0402) TDK C1005X7R1H102K or Murata GRM155R71H102K |
| C10            |     1 | 2.2µF ±10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J225K or Murata GRM185R60J225K |
| D1-D6          |     6 | White LEDs Nichia NSCW215T                                                                |
| D7             |     1 | LED Nichia NBCW011T                                                                       |

## Features

- ♦ MAX8645Y EV Kit Powers 6 Main and a Flash LED Module
- ♦ 94% Maximum/85% Average Efficiency (PLED/PBATT) Over Li+ Battery Discharge
- ♦ 0.2% Typical LED Current Matching
- ♦ Adaptive 1x/1.5x/2x Mode Switchover
- ♦ Single-Wire Serial Pulse Interface (3% to 100% Brightness) for Main
- ♦ Thermal TA Derating Function
- ♦ Two Internal Low-Noise 200mA LDOs
- ♦ 2.7V to 5.5V Supply Voltage Range
- ♦ Soft-Start, Overvoltage, and Thermal-Shutdown Protection
- ♦ 4mm x 4mm 28-Pin Thin QFN IC Package

## Component List

*EP = Exposed pad.

| DESIGNATION        |   QTY | DESCRIPTION                                            |
|--------------------|-------|--------------------------------------------------------|
| D8                 |     1 | SOD-523 Central Semiconductor CMOSH-3                  |
| JU1, JU2, JU3, JU5 |     4 | 3-pin headers                                          |
| JU4                |     1 | 2-pin header                                           |
| JU6, JU7           |     0 | Not installed, PCB short                               |
| R1                 |     1 | 6.81k Ω ±1% resistor (0402)                            |
| R2                 |     1 | 5.11k Ω ±1% resistor (0402)                            |
| R3                 |     1 | 22.1k Ω ±1% resistor (0402)                            |
| R4                 |     1 | 100k Ω ±1% resistor (0402)                             |
| R5                 |     1 | 2.2k Ω ±1% resistor (0402)                             |
| S1, S2             |     2 | Momentary pushbutton switches Panasonic EVQ-PHP03T     |
| U1                 |     1 | White LED charge pump (28 TQFN-EP*) Maxim MAX8645YETI+ |
| U2                 |     1 | 6-channel PMIC (40 TQFN) Maxim MAX6816EUS-T            |
| -                  |     5 | Shunts, 2-position                                     |
| -                  |     1 | PCB: MAX8645Y Evaluation Kit                           |

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX8645Y Evaluation Kit

## Procedure

The MAX8645Y EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Preset the power supply between 2.7V and 5.5V.
- 2) Turn off the power supply. Caution: Do not turn on the power supply until all connections are completed.
- 3) Verify  that  the  shunt  on  JU3  is  connected  to  OFF (pins 2-3). Verify that the shunt on JU5 is connected to ON (pins 1-2). Verify that there is a shunt on JU4. Verify that there is no shunt on JU1 and JU2.
- 4) Connect the positive power-supply terminal to the pad on the EV kit labeled IN.
- 5) Connect the power-supply ground terminal to the pad on the EV kit labeled GND.
- 6) Connect a DMM across the LDO1 pad and the GND pad on the EV kit.
- 7) Connect a DMM across the LDO2 pad and the GND pad on the EV kit.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Nichia Corp.                           | 248-352-6575 | www.nichia.com              |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX8645Y or MAX8645X when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- A 2.7V to 5.5V power supply or a lithium battery capable of delivering 1.5A
- Two digital multimeters (DMMs)
- Two 200mA loads
- Ammeter (optional)
- 8) Turn on the power supply and verify that the main LEDs are lit.
- 9) Push S2 for only a short duration (&lt;1s) to verify that the flash LED module lights. Holding S2 down for long durations may damage the flash LED module.

See the Detailed Description section for testing the dimming and shutdown features.

- 10) Remove the shunt from the OFF position (pins 2-3) of JU3 and place on the ON position (pins 1-2) of JU3.
- 11) Verify the voltage at LDO1 is near 2.6V.
- 12) Connect a 200mA load between LDO1 and GND.
- 13) Verify the voltage at LDO1 is near 2.6V.
- 14) Verify the voltage at LDO2 is near 2.6V.
- 15) Connect a 200mA load between LDO2 and GND.
- 16) Verify the voltage at LDO2 is near 2.6V.

## Detailed Description

## LED Dimming of the Main Display

To test the dimming feature, press the button labeled DIM MAIN (S1). Each button depression dims the main LEDs by 3.125%. Due to the logarithmic response of the human eye, it takes many depressions of the button to visually notice dimming. The 31st pulse reduces the current to 3.125%. The 32nd pulse sets the LED current back to 100%. Refer to the MAX8645Y IC data sheet for more information on the dimming feature.

<!-- image -->

## MAX8645Y Evaluation Kit

## Single-Wire Pulse Dimming for Main or Flash Using External Pulse Generators

To use an external pulse generator in place of the pulse generator included with the EV kit or to reduce the number of control traces, the MAX8645Y supports serial  pulse  dimming. Simply connect the output of the external pulse generator to ENM1 or ENM2 to enable single-wire pulse dimming of the main LEDs. Use ENF for single-wire pulse dimming of the flash LED module. The ground of the external pulse generator should be connected to the EV kit pad labeled GND. Ensure that there is  a  shunt  on  JU5  connected to ON (pins 1-2). When ENM1 and ENM2 (or ENF) go high simultaneously,  the  main  (or  flash)  LEDs  are  enabled  at  full  brightness. Each subsequent low-going pulse (500ns to 250µs pulse width) reduces the LED current by 3.125% (1/32), so after one pulse the LED current is 96.9% (or 31/32). The 31st pulse reduces the current to 3.125%. The 32nd pulse sets the LED current back to 100%. Figure 1 shows a timing diagram for single-wire pulse dimming. Because soft-start is longer than the intitial tHI,  apply  dimming pulses quickly upon startup (after initial tHI) to avoid LED current transitioning through full brightness. Note there is a 2.2k Ω pullup resistor from ENM2 to JU5 on the EV kit and a 100k Ω pulldown resistor connected to ENF.

## Flash LED

To test the flash feature, press the button labeled FLASH (S2). This button should only be held for short durations (&lt;1s) to prevent overheating of the flash LED module. The jumper JU4 is provided to allow for lower current testing of the flash LED module, typically called movie mode in cell phone applications. The shunt on jumper JU4 can be removed for testing the flash LED module at 75mA total (37.5mA per F\_). To test without the pushbutton switch, use ENF to control the flash LED operation, refer to the MAX8645Y IC data sheet for more information. Note that there is a 100k Ω pulldown resistor connected to ENF.

<!-- image -->

Figure 1. ENM\_ and ENF Timing Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8645Y Evaluation Kit

## Adjusting the MAIN 100% Brightness Level

The full-brightness LED current for the main display is adjustable by changing resistor R1. Calculate the value of R1 with the following equation, where IM\_ is the sink current through each M\_ current regulator with the dimming set to 100%:

<!-- formula-not-decoded -->

## Adjusting the Flash 100% Brightness Level

The full-brightness  LED  current  for  the  flash  is adjustable by changing resistors R2 and R3. Calculate the value of RT with the following equation, where IF\_FLASH is the sink current through each F\_ current regulator with the dimming set to 100%:

<!-- formula-not-decoded -->

where RT is the parallel combination of R2 and R3. R3 is the low-current-set resistor, which must be calculated first using the equation below. IF\_MOVIE is the sink current through each F\_ current regulator in movie mode.

<!-- formula-not-decoded -->

Once R3 is determined, then R2 can be calculated using the following equation:

<!-- formula-not-decoded -->

## Shutdown Control

One jumper is included on the EV kit for shutting down the main LEDs. To turn off the main LEDs, place the shunt on the OFF side of jumper JU5 (pins 2-3). Note that with JU5 shunted off, power is disconnected from the pulse-generator circuit. The MAX8645Y is in lowpower shutdown mode when both JU5 and JU3 (see the Low-Dropout (LDO) Regulator section) are shunted off since flash is normally off.

## Changing the Number of LEDs

The EV kit comes with 6 LEDs for the main display and a flash LED module. To use fewer LEDs, locate the small pad (labeled TP\_) next to the LED to be removed and connect it to the pad on the EV kit labeled TP9.

## Connecting External LEDs

To connect external LEDs to the MAX8645Y EV kit, cut the  trace  shorting  JU7.  Connect  the  anodes of all  the external LEDs to the small pad labeled TP9. Connect the  cathodes  to  the  small  pads  next  to  D1-D8 (TP1-TP6 for the main LEDs, TP7 and TP8 for the flash LEDs). Connect any unused pads (TP1-TP8) to the pad labeled TP9.

## Low-Dropout (LDO) Regulator

## LDO Shutdown

One jumper is included on the EV kit for shutting down both LDOs. To turn off the LDOs, place the shunt on the OFF side (pins 2-3) of jumper JU3. To turn on the LDOs, place the shunt on the ON side (pins 1-2) of jumper JU3.

## LDO Output Voltage Selection (P1 and P2)

As shown in Table 1, the LDO output voltages, LDO1 and LDO2, are pin programmable by the logic states of P1 (jumper JU1) and P2 (jumper JU2). P1 and P2 are trilevel  inputs:  IN  (pins  1-2),  open,  and  GND  (pins  2-3). The input voltage, VIN, must be greater than the selected LDO1 and LDO2 voltages. The logic states of P1 and P2 can be programmed only when ENLDO is low. Once the LDO\_ voltages are programmed, their values do not change by changing P1 or P2 when ENLDO is high.

When evaluating the MAX8645X, see Table 1.

## Table 1. P1, P2, and LDO Output Voltage Selection for MAX8645X/MAX8645Y

| P1   | P2   | MAX8645X   | MAX8645X   | MAX8645Y   | MAX8645Y   |
|------|------|------------|------------|------------|------------|
| P1   | P2   | LDO1 (V)   | LDO2 (V)   | LDO1 (V)   | LDO2 (V)   |
| IN   | IN   | 3.3        | 1.8        | 2.8        | 2.6        |
| IN   | OPEN | 3.0        | 1.5        | 2.8        | 2.8        |
| IN   | GND  | 2.8        | 1.5        | 2.9        | 1.5        |
| OPEN | IN   | 3.3        | 1.5        | 2.6        | 1.9        |
| OPEN | OPEN | 2.6        | 1.8        | 2.6        | 2.6        |
| OPEN | GND  | 2.6        | 1.5        | 2.8        | 1.9        |
| GND  | IN   | 3.0        | 1.8        | 2.9        | 1.8        |
| GND  | OPEN | 2.8        | 1.8        | 2.9        | 1.9        |
| GND  | GND  | 2.5        | 1.8        | 2.9        | 2.9        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8645Y Evaluation Kit

<!-- image -->

Figure 2. MAX8645Y EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8645Y Evaluation Kit

Figure 3. MAX8645Y EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8645Y Evaluation Kit

<!-- image -->

Figure 4. MAX8645Y EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8645Y Evaluation Kit

Figure 5. MAX8645Y EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8645Y Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                          | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------|-----------------|
|                 0 | 8/06            | Initial release                      | -               |
|                 1 | 5/08            | Removed PWM dimming control feature. | 3               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 9