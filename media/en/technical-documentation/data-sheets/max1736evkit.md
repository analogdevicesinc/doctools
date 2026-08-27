<!-- lastmod 2022-08-03 -->
## General Description

The MAX1736 evaluation kit (EV kit) is a fully assembled and tested circuit board containing a single-cell lithiumion (Li+) battery charger. The EV kit includes a currentlimited 800mA wall-cube AC adapter, which allows it to safely and quickly charge an Li+ cell to +4.2V (+4.1V with the MAX1736EUT41). The EV kit is useful for standalone operation or for applications interfaced with a microcontroller.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                 |
|---------------|-------|-------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 0.22 µ F, 35V, X7R ceramic cap (0805) Taiyo Yuden GMK212BJ224KG                                             |
| C2            |     1 | 0.1 µ F, 50V, X7R ceramic cap (0805) Taiyo Yuden UMK212BJ104KG                                              |
| C3            |     1 | 0.33 µ F, 35V, X7R ceramic cap (0805) Taiyo Yuden GMK212BJ334KG                                             |
| C4            |     1 | 2.2 µ F, 10V, X7R ceramic cap (0805) Taiyo Yuden LMK212BJ225MG                                              |
| C5            |     0 | Not installed (0805)                                                                                        |
| R1            |     1 | 100k Ω ± 5% resistor (0805)                                                                                 |
| D1            |     1 | 1A, 30V Schottky diode (SOT123) Nihon EP10QY03                                                              |
| P1            |     1 | 20V, 4.5A, P-channel MOSFET (SuperSOT-6) Fairchild FDC638P                                                  |
| J1            |     1 | PC-mount power jack, 2.1mm CUISTACK CP-202A Digi-Key CP-202A-ND or equivalent                               |
| JU1           |     1 | 2-pin header                                                                                                |
| U1            |     1 | MAX1736EUT42 (6-SOT23) (top mark: AAHO)                                                                     |
| None          |     1 | Shunt (JU1)                                                                                                 |
| None          |     1 | MAX1736 PC board                                                                                            |
| None          |     1 | MAX1736 data sheet                                                                                          |
| None          |     1 | MAX1736 EV kit data sheet                                                                                   |
| None          |     1 | 9V, 800mA current-limited wall cube from an input of 100V to 240V, 47Hz to 63Hz Friwo 15.0319 or equivalent |

<!-- image -->

## Features

- ♦ Simple Stand-Alone Application Circuit
- ♦ Easily Configurable for +4.1V Cells
- ♦ Microcontroller Compatible
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested
- ♦ Input Power Source Range: +4.7V to +20V

## Ordering Information

| PART         | TEMP. RANGE      | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1736EVKIT | 0 ° C to +70 ° C | 6 SOT23-6    |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Fairchild   | 408-822-2000 | 408-822-2102 |
| Friwo       | 719-597-1620 | 719-597-1628 |
| Nihon       | 661-867-2555 | 661-867-2698 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |

Note: Please indicate that you are using the MAX1736 when contacting these component suppliers.

## Quick Start

The MAX1736 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for board operation. Do not plug in the wall cube to the AC voltage source until step 4:

- 1) Verify that a shunt is not across jumper JU1 to enable the charger.
- 2) Connect the wall cube's output to the power jack (J1).
- 3) Place a voltmeter across the BATT+ pad and BATTpad.
- 4) Plug in the wall adapter and verify that the no-load voltage across BATT+ and BATT- is approximately 2.5V.
- 5) Observe the correct Li+ cell polarity. Connect a single-cell Li+ battery across the BATT+ and BATTterminals of the EV kit.
- 6) Once the voltage across BATT+ and BATT- reaches 4.2V, the Li+ cell has been charged.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1736 Evaluation Kit

## Detailed Description

The MAX1736 EV kit is a battery charger for a singlecell Li+ battery. The EV kit board contains an external P-channel MOSFET for current switching and can deliver  up  to  1A  of  current  to  an  Li+  battery.  The  input source used on the EV kit is a 9V current-limited 800mA wall cube, but the kit is not restricted to this source. An alternate power source can be used for higher current levels. The EV kit may be enabled manually with jumper JU1 or with a logic-level output from a microcontroller or any logic-level output device.

## Input Source

The input source for the MAX1736 EV kit must be a current-limited power supply capable of continuous shortcircuit operation. The supply should have a current limit of 1A or less and an output voltage of +4.7V to +20V. The adapter provided with the EV kit is capable of supplying 800mA at 9VDC. The charge current can be increased, but diode D1 and MOSFET P1 must be rated accordingly.

## Jumper Selection

The MAX1736 EV kit features a jumper (JU1) to enable and disable the charger. See Table 1 for jumper settings.

Figure 1. MAX1736EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 1. Jumper Shunt Positions

| SHUNT LOCATION   | PIN CONNECTION         | MAX1736 OPERATION   |
|------------------|------------------------|---------------------|
| 1, 2             | EN pin connects to GND | Disabled            |
| None             | EN pin floats          | Enabled             |

## Microcontroller Option

The charger can be turned on or off with a logic-level controller,  such  as  a  microcontroller,  by  removing  the shunt from jumper JU1 and connecting the logic control signal to the EN pad on the MAX1736 EV kit. To disable the charger, assert a logic LOW to the EN pad. To enable the charger, assert a logic HIGH.

Refer to the MAX1736 data sheet for more information.

## Evaluating the MAX1736EUT41

To evaluate the MAX1736EUT41, order a sample IC from the phone number listed at the end of this data sheet, and replace the MAX1736EUT42 IC with the sample.

<!-- image -->

Figure 2. MAX1736 Component Placement GuideComponent Side

<!-- image -->

## MAX1736 Evaluation Kit

Figure 3. MAX1736 PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1736 PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

3