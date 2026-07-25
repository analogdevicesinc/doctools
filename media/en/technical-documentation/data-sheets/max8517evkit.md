<!-- lastmod 2022-08-03 -->
## General Description

The MAX8517 evaluation kit (EV kit) is a fully assembled and tested surface-mount PCB demonstrating the MAX8517 low-dropout (LDO) regulator. The EV kit comes assembled with a MAX8517EUB+ circuit that steps down a 1.425V to 3.6V input-voltage range to a 1.2V output capable of sourcing up to 1A of continuous output current, with a maximum dropout voltage of only 200mV. The MAX8517 features a POK output that goes high impedance once the output is within ±10% of its regulation value. Other features of the EV kit include a logic-controlled shutdown mode (EN) and adjustable output voltage through feedback resistors R1 and R2.

The EV kit can also be used to evaluate the MAX8518, which features a POR output that goes high impedance 150ms (typ) after the output has risen above 90% of its final value. Both the POK and POR features require an external pullup resistor to IN. See the Detailed Description of Hardware section for more details. To evaluate the MAX8516, remove R4 and install a MAX8516 IC.

Although the EV kit is optimized for 1A output current, the part is capable of supporting up to 1.6A output current (limited by power dissipation and dropout).

| DESIGNATION   |   QTY | DESCRIPTION                                                                           |
|---------------|-------|---------------------------------------------------------------------------------------|
| C1            |     1 | 1µF ±10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J105K Murata GRM188R60J105K  |
| C2            |     1 | 4.7µF ±10%, 16V X7R ceramic capacitor (1206) TDK C3216X7R1C475K Murata GRM31CR71C475K |
| JU1           |     1 | 3-pin header                                                                          |

<!-- image -->

Features

- ♦ 1.425V to 3.6V Input-Voltage Range
- ♦ 1.2V Output Voltage
- ♦ Up to 1.6A Output Current (Limited by Power Dissipation and Dropout)
- ♦ Low-Dropout Voltage (200mV max at 1A)
- ♦ Power-OK (POK) Output (MAX8517 only)
- ♦ Power-On Reset (POR) Output (MAX8518 only)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX8517EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                  |
|---------------|-------|----------------------------------------------|
| R1            |     1 | 698 Ω ±1% resistor (0603)                    |
| R2            |     1 | 499 Ω ±1% resistor (0603)                    |
| R3            |     1 | Not installed, resistor (0603)               |
| R4            |     1 | 100k Ω ±5% resistor (0603)                   |
| U1            |     1 | LDO regulator (10 µMAX ® ) Maxim MAX8517EUB+ |
| -             |     1 | Shunts                                       |
| -             |     1 | PCB: MAX8517 Evaluation Kit+                 |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX8516, MAX8517, or MAX8518 when contacting these component suppliers.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## MAX8517 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- One 4V, 1A variable-output power supply
- Dummy load capable of sinking 1A
- Digital multimeter (DMM)

## Procedure

The MAX8517 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supplies until all connections are completed.

- 1) Preset the power supply to 1.425V and turn off the power supply.
- 2) Verify that a shunt is across pins 1-2 of JU1 to enable the device.
- 3) Connect the positive lead of the power supply to the VIN pad on the EV kit, and the negative lead of the power supply to the GND pad on the EV kit.
- 4) Connect the positive input of the DMM to the VOUT pad on the EV kit, and the negative input of the DMM to the GND pad on the EV kit to measure the output voltage.
- 5) Turn on the power supply and verify that the output voltage is 1.2V ±1.4%.
- 6) Sweep the input voltage from 1.425V to 3.6V. Verify that the output voltage is 1.2V ±1.4% over the entire input range.
- 7) Set the power supply to 2V.
- 8) Connect the 1A load between the VOUT and GND pads on the EV kit.
- 9) Verify that the output voltage is 1.2V ±1.4%.

## Detailed Description of Hardware Output Voltage Selection

The MAX8516/MAX8517/MAX8518  feature an adjustable output voltage from 0.5V to 3.4V, using two external resistors connected as a voltage-divider to FB, as shown in Figure 1. The output voltage is set by the following equation:

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

where VFB is 0.5V. Choose R2 &lt; 1k Ω to optimize quiescent current, accuracy, and high-frequency power-supply rejection. To simplify resistor selection:

<!-- formula-not-decoded -->

## Table 1. Jumper JU1 Functions

| SHUNT POSITION   | EN PIN           | MODE             |
|------------------|------------------|------------------|
| 1-2*             | Connected to IN  | Normal operation |
| 2-3              | Connected to GND | Shutdown mode    |

## Shutdown Mode

The MAX8517 EV kit features 3-pin jumper JU1 to control  the  enable  (EN)  input.  For  normal  operation,  connect EN to IN by placing a shunt across pins 1-2. To shut down the device, pull EN to GND by placing a shunt across pins 2-3. During shutdown, an internal 10k Ω resistor pulls down the output.

## Power-OK (POK) (MAX8517 Only)

The MAX8517 EV kit features a power-OK (POK) output to  indicate  the  status  of  the  output.  The  100k Ω pullup resistor (R4) pulls POK high when the regulator output is within ±10% of its nominal output voltage. If the output voltage falls or rises outside this range, POK transitions low.

## Power-On Reset (POR) (MAX8518 Only)

The EV kit can also evaluate the MAX8518 IC, which features a power-on-reset output that transitions high 150ms (typ) after the output has risen above 90% of its final value. If the part is in shutdown mode, falls below 90% of the nominal output voltage, or experiences a short-circuit/thermal fault,  POR immediately transitions low. This open-drain output requires an external pullup resistor to IN. Connect POR to IN by installing a 100k Ω pullup resistor (R3).

<!-- image -->

## MAX8517 Evaluation Kit

<!-- image -->

Figure 1. MAX8517 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8517 Evaluation Kit

Figure 2. MAX8517 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX8517 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8517 Evaluation Kit

Figure 4. MAX8517 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5