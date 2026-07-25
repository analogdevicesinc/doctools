<!-- lastmod 2022-08-05 -->
## General Description

The MAX1576 evaluation kit (EV kit) is a fully assembled and tested circuit for evaluating the MAX1576 white LED 1x/1.5x/2x charge pump. This MAX1576 EV kit drives four white LEDs for backlighting and uses four flash LED drivers to drive one flash LED at a high current. In addition to the LED driver circuit, the EV kit includes one pulse-generator circuit and momentary pushbutton switches that are used for testing the single-wire serial pulse-dimming and flash feature of the MAX1576.

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C1, C5        |     2 | 4.7µF ±10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J475K |
| C2, C3, C4    |     3 | 1µF ±20%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R0J105M   |
| C6            |     1 | 0.01µF ±10%, 6.3V X7R ceramic capacitor (0402) TDK C1005X7R1E103K |
| C7            |     1 | 2.2µF ±10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J225K  |
| D1-D4         |     4 | Diodes Nichia NSCW215T                                            |
| D5            |     0 | Not installed, diode (Nichia NBCW011T)                            |
| D6            |     1 | Lumileds LXCL-PWF1                                                |
| D9            |     1 | SOD-523, CMOSH-3 Central Semiconductor                            |

<!-- image -->

## Features

- ♦ MAX1576 Powers Up to 4 Main LEDs and 4 Flash LEDs

EV Kit Powers 4 Main LEDs and 1 Flash LED

- ♦ 85% Average Efficiency (PLED/PBATT) over Li+ Battery Discharge
- ♦ 0.7% Typical LED Current Matching
- ♦ Adaptive 1x/1.5x/2x Mode Switchover
- ♦ Single-Wire Serial Pulse Interface (5% to 100% Brightness) for Main
- ♦ 2.7V to 5.5V Supply Voltage Range
- ♦ 24-Pin (4mm x 4mm) Thin QFN Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1576EVKIT | 0°C to +70°C | 24 Thin QFN  |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                        |
|---------------|-------|----------------------------------------------------|
| JU1           |     1 | 3-pin header                                       |
| JU2, JU3      |     2 | 2-pin headers                                      |
| JU4-JU8       |     0 | Not installed, PC board short                      |
| R1            |     1 | 6.98k Ω ±1% resistor (0402)                        |
| R2, R3, R5    |     3 | 10k Ω ±5% resistors (0402)                         |
| R4            |     1 | 4.12k Ω ±1% resistor (0402)                        |
| S1, S2        |     2 | Momentary pushbutton switches Panasonic EVQ-PHP03T |
| U1            |     1 | MAX1576ETG (24-pin thin QFN)                       |
| U2            |     1 | MAX6816EUS-T                                       |
| None          |     0 | Shunts, 2 position                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX1576 Evaluation Kit

## Component Suppliers

| SUPPLIER              | COMPONENT        | PHONE        | WEBSITE               |
|-----------------------|------------------|--------------|-----------------------|
| Central Semiconductor | Diode            | 631-435-1110 | www.centralsemi.com   |
| Kamaya                | Resistors        | 260-489-1533 | www.kamaya.com        |
| Lumileds              | LED              | 408-435-6111 | www.lumileds.com      |
| Nichia                | LED              | 248-352-6575 | www.nichia.com        |
| Panasonic             | Momentary switch | 714-373-7939 | www.panasonic.com     |
| TDK                   | Capacitor        | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX1576 EV kit when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 2.7V to 5.5V power supply or battery capable of delivering 1.1A

## Procedure

The MAX1576 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify  that  the  shunt  on  JU1  is  connected  to  ON. Verify that there are shunts on JU2 and JU3.
- 2) Preset the power supply to between 2.7V and 5.5V.
- 3) Turn off the power supply. Do not turn on the power supply until all connections are completed.
- 4) Connect the positive power-supply terminal to the pad on the EV kit labeled IN.
- 5) Connect the power-supply ground terminal to the pad on the EV kit labeled GND.
- 6) Turn on the power supply and verify that the main LEDs are lit.
- 7) Push S2 for only a short duration to verify that the flash LED lights. Holding S2 down for a long duration may damage the flash LED.

See the Detailed Description for  testing  the  dimming and shutdown features.

## Detailed Description

## LED Dimming of the Main Display

To test the dimming feature, press the button labeled DIM MAIN. Each of the first nine button presses dims the corresponding group of LEDs by 10%. The tenth press dims the LEDs by 5%, and the eleventh press returns the LEDs to full brightness. Refer to the MAX1576 data sheet for more information on the dimming feature.

## Using External Pulse Generators for Main Display Dimming

To use an external pulse generator in place of the pulse generator included with the EV kit, connect the output of  the  external  pulse  generator  to  ENM1  or  ENM2  for the main display dimming. The grounds of the external pulse generator should be connected to the EV kit pad labeled GND. Ensure that a shunt is on the side of jumper JU1 labeled ON. Note there is a 10k Ω pullup resistor from ENM1 to IN on the EV kit.

## Using 2-Bit Logic for Main Display Dimming

To use 2-bit logic dimming in place of the pulse generator included with the EV kit, first open jumper JU4 by cutting the PC board trace at JU4. Then connect the ENM1 pad to the IN pad for logic 1 and to the GND pad for  logic  0.  Note  there  is  a  10k Ω pullup resistor from ENM2 to jumper JU1 on the EV kit. To control ENM2 logic, place a shunt on the side of jumper JU1 labeled ON for logic 1 and on the side of jumper JU1 labeled OFF for logic 0. Alternately, ENM1 and ENM2 can be driven with external logic signals. In this case, connect the external logic ground reference to the GND pad of the MAX1576 EV kit.

## Flash LED

To test the flash feature, press the button labeled FLASH. This button should only be held for short durations to prevent overheating of the flash LED. To test without the pushbutton switch, remove the shunts on JU2 and JU3. Use ENF1 and ENF2 to control the flash LED operation; refer to the MAX1576 data sheet for more information. Note that there are 10k Ω pulldown resistors connected to ENF1 and ENF2.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Adjusting the Main 100% Brightness Level

The full-brightness LED current for the main display is adjustable by changing resistor R1. Calculate the value of  R1  with  the  following  equation,  where  ILED\_ is  the current through one of the LEDs with the dimming set to 100%:

<!-- formula-not-decoded -->

## Adjusting the Flash 100% Brightness Level

The full-brightness  LED  current  for  the  flash  is adjustable by changing resistor R4. Calculate the value of  R4  with  the  following  equation,  where  ILED\_ is  the current through one of the LEDs with the dimming set to 100%:

<!-- formula-not-decoded -->

## Shutdown Control

One jumper is included on the EV kit for shutting down the main LEDs. To turn off the main LEDs, place the shunt on the OFF side of jumper JU1. Note that with JU1 shunted off, power is disconnected from the pulsegenerator circuit. The MAX1576 is in low-power shutdown mode when JU1 is shunted off since flash is normally off.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1576 Evaluation Kit

## Changing the Number of LEDs

The EV kit comes with four LEDs installed, four for the main display and one for the flash. To use fewer LEDs, locate the small pad (labeled TP\_) next to the LED to be removed and connect it to the pad on the EV kit labeled IN.

## Connecting External LEDs

To connect external LEDs to the MAX1576 EV kit, cut the  trace  shorting  JU5.  Connect the anodes of all the external LEDs to the small pad labeled TP9. Connect the cathodes to the small pads next to D1-D8 (TP1-TP4 for  the  main LEDs, TP5-TP8 for the flash LEDs). Connect any unused pads (TP1-TP8) to IN.

## Changing the Flash LED

An LED footprint, D5, was included on the EV kit for flash LEDs that are copackaged and provide two anode and two cathode connections (Nichia NBCW011T). If this flash LED is to be used, cut the trace shorting JU8, remove D6, and mount the flash LED to the D5 footprint.

## MAX1576 Evaluation Kit

Figure 1. MAX1576 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX1576 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1576 Evaluation Kit

Figure 3. MAX1576 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1576 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 5