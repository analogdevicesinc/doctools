<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX1954A evaluation kit (EV kit) demonstrates the MAX1954A buck controller application circuit. The EV kit generates a 1.5V output voltage at load currents up to 5A from a 10.8V to 13.2V input voltage range independent of the IC supply voltage. The MAX1954A switches at 300kHz and has better than 90% efficiency with the supplied components.

The EV kit comes fully assembled and tested.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| C1            |     1 | 22µF, 16V X5R ceramic capacitor (1210) TDK C3225X5R1C226K               |
| C2            |     1 | 0.22µF, 10V X7R ceramic capacitor (0603) Kemet C0603C224M8RAC           |
| C3            |     1 | 1µF, 10V X7R ceramic capacitor (0603) TDK C1608X7R1A105K                |
| C4            |     1 | 180µF, 2V, 9m Ω SP capacitor Panasonic EEFSX0D181R                      |
| C5            |     0 | Not installed (0603)                                                    |
| C6            |     1 | 18pF ± 5%, 50V C0H ceramic capacitor (0402) Taiyo Yuden UMK105CH180JW   |
| C7            |     1 | 470pF ± 10%, 50V X7R ceramic capacitor (0402) Taiyo Yuden UMK105BJ471KW |
| C8            |     1 | 0.1µF ± 10%, 16V X5R ceramic capacitor (0603) Taiyo Yuden EMK107BJ104KA |
| C9            |     1 | 1500pF, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H152K             |

- ♦ Current-Mode Controller
- ♦ 300kHz Fixed-Frequency PWM
- ♦ 0.8V Minimum Output Voltage
- ♦ 10.8V to 13.2V Input Voltage Range
- ♦ &gt;90% Efficiency
- ♦ Output Shutdown Mode
- ♦ All n-Channel MOSFET Design for Low Cost
- ♦ No Current-Sense Resistor Needed
- ♦ Foldback Short-Circuit Protection
- ♦ Thermal-Overload Protection
- ♦ Small 10-Pin µMAX ® Package
- ♦ Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE   |
|---------------|--------------|--------------|
| MAX1954AEVKIT | 0°C to +70°C | 10 µMAX      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| C10           |     0 | Not installed (0603)                                                  |
| D1            |     1 | Schottky diode (SOT23-F) Central Semiconductor CMPSH1-4               |
| JU1, JU2      |     2 | 2-pin headers Sullins PTC36SAAN (36-pin strip, cut to size as needed) |
| L1            |     1 | 2.7µH, 6.6A, 12m Ω inductor Coilcraft DO3316P-272HC                   |
| N1            |     1 | Dual n-MOSFET 20V, 7.5A, 0.018 Ω (8-pin SO) Fairchild FDS6890A        |
| R1            |     1 | 7.15k Ω ± 1% resistor (0603)                                          |
| R2            |     1 | 8.06k Ω ± 1% resistor (0603)                                          |
| R3            |     1 | 82k Ω ± 5% resistor (0603)                                            |
| R4            |     1 | 2 Ω ± 5% resistor (0603)                                              |
| R5            |     0 | Not installed (0603)                                                  |
| U1            |     1 | MAX1954AEUB                                                           |
| None          |     2 | Shunts                                                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

Features

## MAX1954A Evaluation Kit

## Quick Start

The MAX1954A application circuit is fully assembled and tested. Follow these steps to verify board operation:

- 1) Preset the DC power supplies to 12V and 5V. Turn off the power supplies. Do not turn on the power supplies until all connections are complete.
- 2) Remove the shunt from JU1 and JU2.
- 3) Connect the positive lead of the 5V power supply to the VIN pad on the EV kit and connect the negative lead of the power supply to the GND pad on the EV kit.
- 4) Connect the positive lead of the 12V power supply to the VHSD pad on the EV kit and connect the negative lead of the power supply to the GND pad on the EV kit.
- 5) Connect the positive lead of the DMM to the VOUT pad on the EV kit and connect the negative lead of the DMM to the GND pad on the EV kit.
- 6) Turn on the power supplies.
- 7) Verify that the voltage at VOUT is 1.5V ± 2.5%.
- 8) Connect a 5A load between VOUT and GND.
- 9) Verify that the voltage at VOUT is 1.5V ± 2.5%.

## Component Suppliers

| SUPPLIER                | COMPONENT   | PHONE NUMBER   | WEBSITE               |
|-------------------------|-------------|----------------|-----------------------|
| Central Semiconductor   | Diodes      | 516-435-1110   | www.centralsemi.com   |
| Coilcraft               | Inductors   | 800-322-2645   | www.coilcraft.com     |
| Fairchild Semiconductor | MOSFETs     | 408-721-2181   | www.fairchildsemi.com |
| Kemet                   | Capacitors  | 864-963-6300   | www.kemet.com         |
| Taiyo Yuden             | Capacitors  | 408-573-4150   | www.t-yuden.com       |
| TDK                     | Capacitors  | 81-3-5201-7200 | www.component.tdk.com |

Note: Indicate you are using the MAX1954A when contacting these manufacturers.

## Recommended Equipment

- 15V at 1A DC variable power supply
- 5V at 100mA power supply
- Digital multimeter (DMM)
- 5A load
- Ammeter (optional)

## Detailed Description

## Evaluating Other Output Voltages

The MAX1954A EV kit comes preset to a 1.5V output voltage. The output of the MAX1954A is adjustable down to 0.8V. To adjust the output voltage, place a 1% resistor at R1 with a value corresponding to the equation:

<!-- formula-not-decoded -->

Note that VOUT cannot exceed VIN and is limited by the maximum duty cycle of the MAX1954A.

Refer to the MAX1954A data sheet for information on selecting output inductor, capacitor, and compensation components to optimize the circuit for different output voltages.

## Using a Single Power Supply

If the input source is between 3V to 5.5V, install a shunt on JU1 (to connect VHSD and VIN), and connect the power supply between the VHSD pad and the GND pad on the EV kit. Refer to the MAX1954A data sheet for information on selecting the inductor, capacitors, and compensation components for optimum performance.

## Jumper Settings

## Jumper JU1 Function (HSD Control)

Connect HSD to IN when using input voltages lower than 5.5V. Place a shunt on JU1 to connect HSD to IN.

## Jumper JU2 Function (Output Shutdown Mode)

The MAX1954A features an output shutdown mode to minimize the quiescent current. To shut down the output,  place  a  shunt  between  pins  1  and  2  on  JU2.  For normal operation remove the shunt from JU2.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1954A Evaluation Kit

<!-- image -->

Figure 1. MAX1954A EV Kit Schematic

Figure 2. MAX1954A EV Kit Component Placement GuideTop Silkscreen

<!-- image -->

<!-- image -->

Figure 3. MAX1954A EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1954A Evaluation Kit

<!-- image -->

Figure 4. MAX1954A EV Kit PC Board Layout-Layer 2

Figure 5. MAX1954A EV Kit PC Board Layout-Layer 3

<!-- image -->

Figure 6. MAX1954A EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4