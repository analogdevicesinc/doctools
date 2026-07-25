<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX13047E evaluation kit (EV kit) provides a proven design to evaluate the MAX13047E dual-bidirectional low-level translator. The MAX13047E translates between VL and VCC logic levels for data rates up to 16Mbps (8MHz).

The  MAX13047E  EV  kit  PCB  comes  with  a MAX13047EEVB+ installed.

| DESCRIPTION              |   QTY | DESCRIPTION                                                         |
|--------------------------|-------|---------------------------------------------------------------------|
| C1, C3, C4, C6           |     4 | 0.1µF ±10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C104K |
| C2, C5, C7, C8, C10, C11 |     6 | 1µF ±10%, 16V X5R ceramic capacitors (0603) TDK C1608X5R1C105K      |
| C9, C12                  |     2 | 0.01µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C03K |
| JU1-JU5, JU8, JU9, JU10  |     8 | 3-pin headers                                                       |
| JU6, JU7                 |     2 | 2-pin headers                                                       |
| R1-R4                    |     4 | 0 Ω ±5% resistors (0603)                                            |
| R5                       |     1 | 45.3k Ω ±1% resistor (0603)                                         |
| R6, R10                  |     2 | 90.9k Ω ±1% resistors (0603)                                        |
| R7, R8, R9               |     3 | 301 Ω ±1% resistors (0603)                                          |

## Features

- ♦ On-Board Clock Generators Capable of 8MHz, 4MHz, and 1MHz
- ♦ 8Mbps (+1.2V ≤ VL ≤ +3.6V, VCC ≤ +5.5V)
- ♦ 16Mbps (+1.8V ≤ VL ≤ VCC ≤ +3.3V)
- ♦ Lead-Free and RoHS Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX13047EEVKIT+ | EV Kit |

## Component List

| DESCRIPTION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| R11-R14       |     0 | Not installed, resistors (0603)                              |
| U1            |     1 | Dual-channel level translator (10 UTQFN) Maxim MAX13047EEVB+ |
| U2            |     1 | 1.8V LDO (5 SC70) Maxim MAX8510EXK18+                        |
| U3            |     1 | 3V LDO (5 SC70) Maxim MAX8510EXK30+                          |
| U4            |     1 | Resistor-programmable oscillator (8 µSOP) Maxim DS1090U-1+   |
| U5            |     1 | Resistor-programmable oscillator (8 µSOP) Maxim DS1090U-4+   |
| U6            |     1 | Dual inverter (6 SC70)                                       |
| -             |     8 | Shunts                                                       |
| -             |     1 | PCB: MAX13047E Evaluation Kit+                               |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX13047E when contacting these component suppliers.

1

## MAX13047E Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- MAX13047E EV kit
- +5V, 100mA DC power supply
- Two-channel oscilloscope (i.e., Tektronix TDS3012)

## Procedure

The MAX13047E EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on power supply until all connections are made.

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect the positive terminal of the +5V supply to the VSUPPLY pad and the negative terminal of the supply to the GND pad.
- 3) Connect the first channel of the oscilloscope to the I/O\_VL1 pad, which is the +1.8V logic-level 8MHz signal input.
- 4) Connect the second channel of the oscilloscope to the I/O\_VCC1 pad, which is the +3V logic-level 8MHz signal output.
- 5) Turn on the DC power supply.
- 6) Observe the oscilloscope and verify that the +1.8V logic-level 8MHz I/O\_VL1 signal is translated to the +3V logic level at the I/O\_VCC1 pad.

## Detailed Description

The MAX13047E EV kit provides a proven design to evaluate the MAX13047E dual-bidirectional low-level translator. The MAX13047E translates between VL and VCC logic levels for data rates up to 16Mbps (8MHz).

## Clock Generators

The MAX13047E EV kit includes the convenience of onboard clock generators capable of producing 8MHz and 4MHz signals on the I/O\_VL1 and I/O\_VCC1

inputs, and 1MHz on the I/O\_VL2 and I/O\_VCC2 inputs. Move the shunt of JU1 to the 1-2 position to set the clock generator to 8MHz and move the shunt to the 2-3 position for 4MHz.

To have both channels transferring data at the same speed, place a shunt on JU6 or JU7 depending on the input direction. If I/O\_VL\_ is the input, place the shunt in  the  1-2  position  of  JU6.  If  I/O\_VCC\_  is  the  input, place the shunt in the 1-2 position of JU7. It is important when channels are tied together to remove shunts from JU3 or JU4 depending on the preferred clock rate.  If  the  8MHz  or  4MHz  speed  is  selected,  remove the shunts from JU4. If the 1MHz speed is selected, remove the shunt from JU3.

## Switching Clock Generator

When translating from VL to VCC, move JU2, JU3, and JU4 to the 1-2 position. To go from VCC to VL, move JU2, JU3, and JU4 to the 2-3 position.

## Shutdown Mode

The MAX13047E can enter shutdown mode by moving JU5 to the 2-3 position. Otherwise, leave the shunt at the 1-2 position for normal operation.

## Applying User-Supplied Input Signals to the I/O\_VL\_ and I/O\_VCC\_ Pads

The EV kit allows user-supplied input signals to be applied to the I/O\_VL\_ and I/O\_VCC\_ pads. It is important  to  remove the shunts from JU3 and JU4 to avoid signal conflicts with the clock generators.

## User-Supplied VL, VCC, and VCLK

The EV kit is powered completely from one power supply by default. Users can supply their own VL and VCC voltages by moving JU8 and JU10 to the 2-3 position. Apply a voltage from +1.1V to +3.6V or (VCC + 0.3V) to the VL and GND pads and +1.65V to +5.5V to the VCC and GND pads.

Users can apply a +3V to +5.5V power supply to the VCLK and GND pads once JU8 is moved to the 2-3 position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX13047E Evaluation Kit

Table 1. MAX13047E EV Kit Jumper Description (JU1-JU10)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                     |
|----------|------------------|---------------------------------------------------------------------------------|
| JU1      | 1-2*             | Sets the clock generator to 8MHz for the input signals of I/O_VL1 or I/O_VCC1   |
| JU1      | 2-3              | Sets the clock generator to 4MHz for the input signals of I/O_VL1 or I/O_VCC1   |
| JU2      | 1-2*             | Enables the inverter (U6) and sets the inverter's output to VL logic level      |
| JU2      | 2-3              | Enables the inverter (U6) and sets the inverter's output to VCC logic level     |
| JU3      | 1-2*             | Connects the 8MHz or 4MHz signal from the inverter to the I/O_VL1 input signal  |
| JU3      | 2-3              | Connects the 8MHz or 4MHz signal from the inverter to the I/O_VCC1 input signal |
| JU4      | 1-2*             | Connects the 1MHz signal from the inverter to the I/O_VL2 input signal          |
| JU4      | 2-3              | Connects the 1MHz signal from the inverter to the I/O_VCC2 input signal         |
| JU5      | 1-2*             | Enables the MAX13047E for normal operation                                      |
| JU5      | 2-3              | Sets the MAX13047E to shutdown mode                                             |
| JU6      | Open*            | Separates the I/O_VL1 signal from the I/O_VL2 signal                            |
| JU6      | 1-2              | Connects the I/O_VL1 signal to the I/O_VL2 signal                               |
| JU7      | Open*            | Separates the I/O_VCC1 signal from the I/O_VCC2 signal                          |
| JU7      | 1-2              | Connects the I/O_VCC1 signal to the I/O_VCC2 signal                             |
| JU8      | 1-2*             | Enables the clock generators using the MAX13047E VCC logic level                |
| JU8      | 2-3              | Enables the clock generators using an external supply                           |
| JU9      | 1-2*             | Sets the MAX13047E VL logic level using the on-board 1.8V LDO                   |
| JU9      | 2-3              | Sets the MAX13047E VL logic level using an external supply                      |
| JU10     | 1-2*             | Sets the MAX13047E VCC logic level using the on-board 3.0V LDO                  |
| JU10     | 2-3              | Sets the MAX13047E VCC logic level using an external supply                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX13047E Evaluation Kit

Figure 1. MAX13047E EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX13047E Evaluation Kit

<!-- image -->

Figure 2. MAX13047E EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX13047E Evaluation Kit

Figure 3. MAX13047E EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX13047E Evaluation Kit

Figure 4. MAX13047E EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7