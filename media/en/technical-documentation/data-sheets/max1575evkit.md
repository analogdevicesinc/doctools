<!-- lastmod 2022-08-03 -->
## General Description

The MAX1575 evaluation kit (EV kit) is a fully assembled and tested circuit for evaluating the MAX1575 white LED 1x/1.5x charge pump. The MAX1575 drives 4 white LEDs in a main display group and 2 white LEDs in a sub-group. These 6 surface-mount white LEDs are included on the EV kit. In addition to the LED driver circuit, the EV kit includes two pulse-generator circuits on the  left  side  of  the  PC  board  that  are  used  for  testing the single-wire serial pulse-dimming feature of the MAX1575.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                |
|---------------|-------|------------------------------------------------------------------------------------------------------------|
| C1-C4         |     4 | 1µF ± 20%, 6.3V X5R ceramic capacitors (0402) Panasonic ECJ0EB0J105M or TDK C1005X5R0J105M or equivalent   |
| C5, C8        |     2 | 2.2µF ± 10%, 6.3V X5R ceramic capacitors (0603) Panasonic ECJ1VB0J225K or TDK C1608X5R0J225K or equivalent |
| C6, C7        |     2 | 0.01µF ± 10%, X7R ceramic capacitors (0402) TDK C1005X7R1E103K or equivalent                               |
| D1-D6         |     6 | White surface-mount right-angle LEDs Nichia NSCW215T                                                       |
| D7, D8        |     2 | Diodes (SOD-323) Central CMDD4448                                                                          |
| JU1           |     0 | Not installed, PC board short                                                                              |
| JU2, JU3      |     2 | 3-pin headers                                                                                              |
| R1            |     1 | 6.81k Ω ± 1% resistor (0402)                                                                               |
| R2, R3        |     2 | 10k Ω ± 5% resistors (0402)                                                                                |
| S1, S2        |     2 | Momentary pushbutton switches Panasonic EVQ-PHP03T                                                         |
| U1            |     1 | Maxim MAX1575ETE (16 thin QFN 4mm x 4mm)                                                                   |
| U2, U3        |     2 | MAX6818EUS-T (4-pin SOT143)                                                                                |
| -             |     2 | Shunt, 2 position                                                                                          |

<!-- image -->

## Features

- ♦ Powers 4 Main and 2 Sub-Display LEDs
- ♦ Average 85% Efficiency (PLED / PBATT) over Li+ Battery Discharge
- ♦ 1.5% LED Current Matching
- ♦ Adaptive 1x/1.5x Mode Switchover
- ♦ Low Input Ripple and EMI
- ♦ Individual 5% to 100% Brightness Single-Wire Serial Pulse Dimming
- ♦ 2.7V to 5.5V Supply Voltage Range
- ♦ Thin QFN 4mm x 4mm IC Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE              |
|--------------|------------------|-------------------------|
| MAX1575EVKIT | 0 ° C to +70 ° C | 16 Thin QFN (4mm x 4mm) |

## Quick Start

## Recommended Equipment

A 2.7V to 5.5V power supply or battery capable of delivering 200mA.

## Procedure

## Follow the steps below to verify board operation.

- 1) Verify that shunts are connected across pins 1-2 of jumpers JU2 and JU3.
- 2) Preset the power supply to between 2.7V and 5.5V.
- 3) Turn off the power supply. Do not turn on the power supply until all connections are completed.
- 4) Connect the positive power supply terminal to the pad on the EV kit labeled IN.
- 5) Connect the power supply ground terminal to the pad on the EV kit labeled GND.
- 6) Turn on the power supply and verify that the LEDs are lit.

See the Detailed Description section for testing the dimming and shutdown features.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | www.centralsemi.com   |
| Kamaya                | 260-489-1533 | www.kamaya.com        |
| Murata                | 814-237-1431 | www.murata.com        |
| Nichia                | 248-352-6575 | www.nichia.com        |
| Panasonic             | 714-373-7939 | www.panasonic.com     |
| Taiyo Yuden           | 408-573-4150 | www.t-yuden.com       |
| TDK                   | 847-803-6100 | www.component.tdk.com |
| Vishay                | 402-563-6866 | www.vishay.com        |

Note:

Indicate that you are using the MAX1575 when contacting these component suppliers.

## Detailed Description

## LED Dimming

To test the dimming feature, press the button labeled DIM MAIN or DIM SUB. Each of the first nine button presses dims the corresponding group of LEDs by 10%. The tenth press dims the LEDs by 5%, and the eleventh press returns the LEDs to full brightness. Refer to the MAX1575 data sheet for more information on the dimming feature.

## Using External Pulse Generators for Dimming

To use external pulse generators in place of the pulse generators included with the EV kit, simply connect the outputs of the external pulse generators to EN\_MAIN for the main display dimming, and EN\_SUB for the subdisplay dimming. The grounds of the external pulse generators should be connected to the EV kit pad labeled GND. Short pins 1-2 of jumpers JU2 and JU3. Note  that  there  are  10k Ω pullup  resistors  from EN\_MAIN and EN\_SUB to IN on the EV kit.

## Adjusting the 100% Brightness Level

The full-brightness LED current is adjusted by changing  the  resistor  R1.  Calculate  the  value  of  R1  with  the following equation, where ILED\_ is  the  current  through one of the LEDs with the dimming set to 100%.

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Shutdown

Two jumpers are included on the EV kit for shutting down each of the displays. To turn off the main LED group, short pins 2-3 of JU2. To turn off the sub-LED group, short pins 2-3 of JU3. Note that with pins 2-3 of JU2 or JU3 shorted, power is disconnected from the corresponding pulse-generator circuit on the left side of the board. To place the MAX1575 in low-power shutdown mode and disconnect power from both pulsegenerator circuits, short pins 2-3 of both JU2 and JU3.

## Changing the Number of LEDs

The EV kit comes with 6 LEDs installed, 4 for the main display and 2 for the sub-display. To use fewer LEDs, locate the small pad next to the LED to be removed and connect it to the pad on the EV kit labeled IN.

## Connecting External LEDs

To connect external LEDs to the MAX1575 EV kit, cut the  trace  shorting  JU1.  Connect the anodes of all the external LEDs to the small pad labeled OUT. Connect the cathodes to the small pads next to D1-D6 (D1-D4 for the main LEDs, D5-D6 for the sub-LEDs). Connect any unused pads (D1-D6) to IN.

<!-- image -->

<!-- image -->

Figure 1. MAX1575 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1575 Evaluation Kit

<!-- image -->

Figure 2. MAX1575 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1575 EV Kit Layout-Component Side

<!-- image -->

Figure 4. MAX1575 EV Kit Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4