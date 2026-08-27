<!-- lastmod 2022-08-04 -->
## General Description

The MAX889 IC is an inverting charge pump that delivers a regulated negative output voltage at loads up to 200mA. The device operates from an input of +2.7V to +5.5V to produce a user-adjustable, regulated output of -2.5V to -VIN.

The MAX889S evaluation kit (EV kit) is a fully assembled and tested surface-mount board. The board is set up to provide a -3.3V output from a +5.0V input supply. The EV kit is shipped with a MAX889S (1MHz switching frequency) installed. The board may also be used to evaluate the MAX889R (500kHz) or the MAX889T (2MHz). To do so, request a free sample of the MAX889RESA or MAX889TESA, and refer to the MAX889 data sheet for the appropriate capacitor values.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                         |
|---------------|-------|-------------------------------------------------------------------------------------|
| C1, C3        |     2 | 10µF, 6.3V X5R ceramic capacitors TaiyoYuden JMK316BJ106ML Murata GRM42-6X5R106K6.3 |
| C2            |     1 | 2.2µF, 10V X5R ceramic capacitor TaiyoYuden LMK212BJ225MG                           |
| JU1           |     1 | 3-pin jumper                                                                        |
| JU2, JU3      |     2 | 2-pin jumpers                                                                       |
| R1            |     1 | 49.9k Ω ±1% resistor                                                                |
| R2            |     1 | 33.2k Ω ±1% resistor                                                                |
| U1            |     1 | MAX889SESA                                                                          |
| None          |     1 | MAX889S EV kit data sheet                                                           |
| None          |     1 | MAX889 IC data sheet                                                                |
| None          |     3 | Shunts                                                                              |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Murata      | 814-237-1431 | 814-238-0490 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |

Note: Please indicate that you are using the MAX889S when contacting these suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Features

- ♦ +2.7V to +5.5V Input Range
- ♦ Uses One 2.2µF and Two 10µF Ceramic Capacitors
- ♦ Output Adjustable from -2.5V to -VIN
- ♦ 200mA Output Current
- ♦ 1MHz Switching Frequency
- ♦ Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP. RANGE      | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX889SEVKIT | 0 ° C to +70 ° C | 8 SO         |

## Quick Start

The MAX889S EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Connect a voltmeter and the load to the VOUT pad.
- 2) Place the shunts in the following positions: JU1 1-2, JU2 closed, JU3 closed.
- 3) Connect a +5.0V supply to the pad labeled VIN. Connect the ground lead to the pad labeled GND.
- 4) Turn on the power and verify that the output is 3.3V.

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX889S Evaluation Kit

## Detailed Description

## Jumper Selection

The MAX889 can be placed in shutdown mode, using jumper JU1. See Table 1 for jumper settings.

Jumper JU2 connects VIN to the voltage-divider that sets the output voltage. To use a voltage source other than VIN as the reference, open JU2, and connect the reference source to the pad labeled VREF.

The MAX889 can be placed into free-run mode (unregulated, VOUT = -VIN) by removing the shunt on JU3 and installing a shunt on JU2.

## Output Voltage Adjustment

The MAX889S EV kit is shipped with the resistor-divider selected for an output of -3.3V and an input of +5.0V. Output voltages other than -3.3V can be set one of two ways:

- 1) Change the resistor-divider formed by R1 and R2. Use the following equation to determine the resistor values:

<!-- formula-not-decoded -->

(The current through R1 and R2 should be at least 30µA.)

- 2) Remove the shunt from JU2 and apply a voltage to the VREF pad. Use the following equation to determine the voltage for VREF:

<!-- formula-not-decoded -->

## Capacitor Selection

Use capacitors with a low effective series resistance (ESR), such as ceramic or surface-mount chip tantalum types. Refer to the MAX889 data sheet for more information.

## Table 1. Jumper Functions

*Default position

| JUMPER   | JUMPER POSITION   | FUNCTION                                                          |
|----------|-------------------|-------------------------------------------------------------------|
| JU1      | 1-2*              | SHDN = High, MAX889 enabled                                       |
| JU1      | 2-3               | SHDN = Low, MAX889 disabled                                       |
| JU1      | Open              | Drive SHDN pad with an external signal                            |
| JU2      | Open              | Drive VREF pad with an external voltage to set the output voltage |
| JU2      | Closed*           | VIN is used to set the output voltage                             |
| JU3      | Open              | Used to place the MAX889 into free-run mode (JU2 must be closed)  |
| JU3      | Closed*           | Output voltage is set by resistor-divider and VIN or VREF         |

Figure 1. MAX889S EV Kit Schematic Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX889S EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX889S Evaluation Kit

Figure 3. MAX889S EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX889S EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

3