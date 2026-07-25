<!-- lastmod 2022-08-03 -->
## General Description

The MAX1574 evaluation kit (EV kit) is a fully assembled and tested circuit for evaluating the MAX1574 white LED 1x/2x charge pump. The EV kit comes with 3 white surface-mount LEDs installed. A pulse generator circuit is provided on the EV kit for easy evaluation of the single-wire serial pulse-dimming feature of the MAX1574. The pulse generator also has a flash setting for flashing the LEDs at full brightness.

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE          |
|--------------|------------------|---------------------|
| MAX1574EVKIT | 0 ° C to +70 ° C | 10 TDFN (3mm x 3mm) |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                |
|---------------|-------|------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 0.22µF ± 10%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J224K Taiyo Yuden JMK105BJ224KV or equivalent |
| C2, C3        |     2 | 1µF ± 20%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R0J105M Panasonic ECJ0EB0J105M or equivalent      |
| C4            |     1 | 2.2µF ± 10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J225K Panasonic ECJ1VB0J225K or equivalent     |
| C5            |     1 | 1000pF ± 10%, 25V X7R ceramic capacitor (0402) TDK C1005X7R1E102K or equivalent                            |
| C6            |     1 | 0.15µF ± 10%, X7R ceramic capacitor (0402) TDK C1005X5R0J154K or equivalent                                |
| D1, D2, D3    |     3 | White surface-mount right-angle LEDs Nichia NSCW215T                                                       |

<!-- image -->

## Features

- ♦ Up to 180mA (60mA/LED) Drive Capability
- ♦ 83% Average Efficiency (PLED / PBATT) over Li+ Battery Discharge
- ♦ 0.6% LED Current Matching
- ♦ Adaptive 1x/2x Mode Switchover
- ♦ Low Input Ripple and EMI
- ♦ 5% to 100% Single-Wire Serial Pulse Dimming
- ♦ 0.1µA Low Shutdown Current
- ♦ 2.7V to 5.5V Supply Voltage Range
- ♦ 10-Pin, 3mm x 3mm TDFN Package
- ♦ Fully Assembled and Tested

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                 |
|---------------|-------|-------------------------------------------------------------|
| D4            |     1 | Diode (SOD-323) Central Semiconductor CMDD4448              |
| JU1           |     1 | 3-pin header                                                |
| JU2           |     1 | Not installed, PC board short                               |
| JU3           |     0 | Not installed, PC board open                                |
| R1            |     1 | 13.7k Ω ± 1% resistor (0402)                                |
| R2            |     1 | 4.42k Ω ± 1% resistor (0402)                                |
| R3            |     1 | 10k Ω ± 5% resistor (0402)                                  |
| R4            |     1 | 1 Ω ± 5% resistor (0805)                                    |
| S1            |     1 | Momentary pushbutton switch Panasonic EVQ-PHP03T            |
| S2            |     1 | DPDT, vertical 9mm x 3.5mm slide switch Panasonic ESD11V220 |
| U1            |     1 | Maxim MAX1574ETB (10 TDFN 3mm x 3mm)                        |
| U2            |     1 | MAX6816EUS-T (4-pin SOT143)                                 |
| U3            |     1 | MAX6422XS23-T (4-pin SC70)                                  |
| -             |     1 | MAX1574 EV kit PC board                                     |
| -             |     1 | Shunt, 2 position                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX1574 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE               |
|-------------|--------------|-----------------------|
| Central     | 631-435-1110 | www.centralsemi.com   |
| Kamaya      | 260-489-1533 | www.kamaya.com        |
| Murata      | 814-237-1431 | www.murata.com        |
| Nichia      | 248-352-6575 | www.nichia.com        |
| Panasonic   | 714-373-7939 | www.panasonic.com     |
| Taiyo Yuden | 408-573-4150 | www.t-yuden.com       |
| TDK         | 847-803-6100 | www.component.tdk.com |
| Vishay      | 402-563-6866 | www.vishay.com        |

Note: Indicate that you are using the MAX1574 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- A 2.7V to 5.5V power supply or battery capable of delivering 400mA.

## Procedure

Follow the steps below to verify board operation.

## Dimming

- 1) Verify that jumper JU1 is shorted between pins 1-2.
- 2) Set switch S2 to the DIM position (indicated on the EV kit PC board).
- 3) Turn on the power supply and preset to between 2.7V and 5.5V.
- 4) Turn the power supply off. Do not turn on the power supply until all connections are completed.
- 5) Connect the positive power-supply lead to the EV kit terminal labeled IN.
- 6) Connect the power-supply ground to the EV kit terminal labeled GND.
- 7) Turn the power supply on.
- 8) The LEDs should be lit at full brightness.
- 9) To test the dimming feature, press button S1 to reduce the LEDs' brightness to 90%. Press S1 again to further reduce the LEDs' brightness. See the LED Dimming section for more information.

## Flash

- 1) Verify that jumper JU1 has pins 1-2 shorted.
- 2) Set switch S2 to the FLASH position (indicated on the EV kit PC board).
- 3) Turn on the power supply and preset to between 2.7V and 5.5V.
- 4) Turn the power supply off. Do not turn on the power supply until all connections are completed.
- 5) Connect the positive power-supply lead to the EV kit terminal labeled IN.
- 6) Connect the power-supply ground to the EV kit terminal labeled GND.
- 7) Turn the power supply on. The LEDs will flash once. This is due to the pulse generator circuit powering up and not the MAX1574.
- 8) Press switch S1 to flash the LEDs.

## Detailed Description

## LED Dimming

To test the dimming feature, set switch S2 to the DIM position and press button S1 to dim the LEDs. Each of the first  nine  button  presses  dims  the  LEDs  by  10%. The tenth press dims the LEDs by 5%, and the eleventh press returns the LEDs to full brightness. Refer to the MAX1574 data sheet for more information on the dimming feature.

## Using an External Pulse Generator for Dimming

To use an external pulse generator in place of the pulse generator included on the EV kit, simply connect the output of the pulse generator to the pad labeled EN. Connect the ground of the pulse generator to the EV kit pad labeled GND. Set S2 to the DIM position. Remove the shunt from JU1 when using a logic-level pulse generator, or short pins 1-2 of JU1 to provide a 10k Ω pullup resistor  from  EN  to  IN  when  driving  EN  with  an  opendrain output. Refer to the MAX1574 data sheet for a timing diagram.

## Adjusting the 100% Brightness Level

The LED current is adjusted by changing the value of resistor R1. Calculate the value of R1 with the following equation, where ILED\_ is the current through one of the LEDs with no dimming (100% brightness):

<!-- formula-not-decoded -->

## Adjusting the Flash Brightness Level

To test the flash, set switch S2 to the FLASH position and press button S1 to flash the LEDs.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

To adjust the brightness of the flash, replace resistor R2. Calculate the value of R2 from the following equation, where ILED\_ is the flash current through one of the LEDs:

<!-- formula-not-decoded -->

## Shutdown

To turn off the LEDs and place the EV kit in low-power shutdown mode, short pins 2-3 of JU1. To enable the circuit,  short  pins  1-2  of  JU1.  To  control  enable/shutdown with an external logic signal, short pins 1-2 of JU1 (providing a 10k Ω pullup resistor),  or  remove  the shunt from JU1 (no pullup) and connect the digital control signal to the pad labeled EN.

## Changing the Number of LEDs

The EV kit comes with 3 white surface-mount LEDs installed. To use fewer LEDs, connect the pad labeled LED\_ (corresponding to any unused LED) to the pad labeled IN.

<!-- image -->

Figure 1. MAX1574 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1574 Evaluation Kit

## Connecting External LEDs

To connect external LEDs to the MAX1574 EV kit, cut the  trace  shorting  JU2.  Connect the anodes of all the external LEDs to the pad labeled OUT. Connect the cathodes to the pads labeled LED\_. Connect all unused LED\_ pads to IN.

## Input Filtering

The MAX1574 EV kit comes assembled with a 1 Ω input filtering resistor to ensure stable operation when powering the EV kit with long leads from a noisy power source. JU3 is provided to short this 1 Ω resistor  for evaluation purposes. Short JU3 when powering the MAX1574 EV kit from a battery.

## MAX1574 Evaluation Kit

<!-- image -->

Figure 2. MAX1574 EV Kit Component Placement Guide(Component Side)

Figure 3. MAX1574 EV Kit Layout-Component Side

<!-- image -->

Figure 4. MAX1574 EV Kit Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4