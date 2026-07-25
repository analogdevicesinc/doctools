<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

## Features

The  MAX13055E  evaluation  kit  (EV  kit)  provides  a proven  design  to  evaluate  the  MAX13055E  8-channel, bidirectional level translator. The MAX13055E translates between VL and VCC logic levels for data rates up to 100Mbps (50MHz).

The MAX13055E EV kit PCB comes with the MAX13055EEWG+,  24-bump  WLP  installed.  Contact the  factory  for  free  samples  of  the  pin-compatible MAX13056EEWG+, MAX13057EEWG+, and MAX13058EEWG+.

- S On-Board Clock Generator Capable of 33MHz and 16.5MHz
- S Accessible Headers to All 8 Input/Output (I/O) Channels
- S Lead(Pb)-Free and RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX13055EEVKIT+ | EV Kit |

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                                                            |
|-------------------------|-------|------------------------------------------------------------------------|
| C1, C3, C11, C12        |     4 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C104K |
| C2                      |     1 | 1 F F Q 10%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J105K      |
| C4, C5, C6, C8, C9      |     5 | 1 F F Q 10%, 16V X5R ceramic capacitors (0603) TDK C1608X5R1C105       |
| C7, C10, C13            |     3 | 0.01 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C03K |
| H1, H2                  |     2 | 2 x 8-pin headers                                                      |
| JU1-JU6, JU9            |     7 | 3-pin headers                                                          |
| JU7, JU8, JU10          |     3 | 2-pin headers                                                          |
| P1                      |     1 | USB type-B right-angle male receptacle                                 |
| R1-R8, R17-R24, R33-R36 |    20 | 0 I Q 5% resistors (0402)                                              |

| DESIGNATION     |   QTY | DESCRIPTION                                             |
|-----------------|-------|---------------------------------------------------------|
| R9-R16, R25-R32 |     0 | Not installed, resistors (0402)                         |
| U1              |     1 | 8-channel level translator (24 WLP) Maxim MAX13055EEWG+ |
| U2              |     1 | 1.8V LDO (5 SC70) Maxim MAX8510EXK18+                   |
| U3              |     1 | 3.0V LDO (5 SC70) Maxim MAX8510EXK30+                   |
| U4              |     1 | 33MHz oscillator (8 F MAX M ) Maxim DS1091LUA-033+      |
| U5              |     1 | Dual inverter (6 SC70) Fairchild NC7WZ04P6X             |
| U6              |     1 | D-type flip-flop (8 US8) Fairchild NC7SP74K8            |
| -               |     1 | USB high-speed A-to-B cable, 6ft                        |
| -               |    10 | Shunts                                                  |
| -               |     1 | PCB: MAX13055E EVALUATION KIT+                          |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

µMAX is a registered trademark of Maxim Integrated Products, Inc. Note: Indicate that you are using the MAX13055E when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX13055E Evaluation Kit

## Quick Start

## Required Equipment

- MAX13055E EV kit (USB cable included)
- Two-channel oscilloscope (e.g., Tektronix TDS3012)

## Procedure

The  MAX13055E  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify the board operation:

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect the USB cable to the USB connector (P1) on the MAX13055E EV kit.

## Table 1. MAX13055E EV Kit Jumper Description (JU1-JU10)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                              |
|----------|------------------|----------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Enables the MAX13055E for normal operation                                                               |
| JU1      | 2-3              | Sets the MAX13055E to shutdown mode                                                                      |
| JU2      | 1-2*             | Sets the MAX13055E VL logic level using the on-board 1.8V LDO                                            |
| JU2      | 2-3              | Sets the MAX13055E VL logic level using an external supply                                               |
| JU3      | 1-2*             | Sets the MAX13055E VCC logic level using the on-board 3.0V LDO                                           |
| JU3      | 2-3              | Sets the MAX13055E VCC logic level using an external supply                                              |
| JU4      | 1-2*             | Powers the clock generator from VCC                                                                      |
| JU4      | 2-3              | Powers the clock generator from an external supply                                                       |
| JU5      | 1-2*             | Enables the inverter (U5) and sets the inverter's output to VL logic level                               |
| JU5      | 2-3              | Enables the inverter (U5) and sets the inverter's output to VCC logic level                              |
| JU6      | 1-2*             | Powers the MAX13055E EV kit using the USB supply                                                         |
| JU6      | 2-3              | Powers the MAX13055E EV kit using an external supply                                                     |
| JU7      | Open             | Disconnects the clock generator signal from the I/O_VL1 pin of the MAX13055E                             |
| JU7      | 1-2*             | Connects the clock generator signal to the I/O_VL1 pin of the MAX13055E                                  |
| JU8      | Open*            | Disconnects the clock generator signal from the I/O_VCC1 pin of the MAX13055E                            |
| JU8      | 1-2              | Connects the clock generator signal to the I/O_VCC1 pin of the MAX13055E                                 |
| JU9      | 1-2*             | Connects the 33MHz clock signal to the inverter (U5)                                                     |
| JU9      | 2-3              | Connects the 33MHz clock signal to the D flip-flop (U6) to divide the clock signal by two to get 16.5MHz |
| JU10     | Open*            | Disconnects the 16.5MHz clock signal from the inverter (U5)                                              |
| JU10     | 1-2              | Connects the 16.5MHz clock signal to the inverter (U5)                                                   |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 3) Connect the first channel of the oscilloscope to the H1-1  header,  which  is  the  1.8V  logic-level  33MHz signal input.
- 4) Connect  the  second  channel  of  the  oscilloscope to  the  H2-2  header,  which  is  the  3.0V  logic-level 33MHz signal output.
- 5) Observe  the  oscilloscope  and  verify  that  the  1.8V logic-level 33MHz I/O\_VL1 signal is translated to the 3.0V logic level at the H2-2 header.

<!-- image -->

## MAX13055E Evaluation Kit

## Detailed Description of Hardware

The  MAX13055E  EV  kit  provides  a  proven  design  to evaluate  the  MAX13055E  8-channel,  bidirectional  level translator.  The  MAX13055E translates  between VL and VCC logic levels for data rates up to 50MHz.

## Shutdown Mode

The  MAX13055E  enters  shutdown  mode  by  moving jumper  JU1  to  the  2-3  position.  For  normal  operation, leave the shunt in the 1-2 position.

## Clock Generator

The  MAX13055E  EV  kit  includes  the  convenience  of an on-board clock generator (U4), capable of producing  33MHz  or  16.5MHz  signals  on  the  I/O\_VL1  and I/O\_VCC1 inputs. For 33MHz, move the shunt of jumper JU9 to the 1-2 position and remove the shunt from jumper JU10. For 16.5MHz, move the shunt of JU9 to the 2-3 position and place a shunt on JU10.

When  translating  from  VL  to  VCC,  move  jumper  JU5 to  the  1-2  position,  place  a  shunt  on  jumper  JU7,  and remove the shunt from jumper JU8. To go from VCC to VL, move JU5 to the 2-3 position, remove the shunt from JU7, and place a shunt on JU8.

Table 2. H1 Header Description (I/O\_VL\_)

| DESIGNATION   | SIGNAL   |
|---------------|----------|
| H1-1          | I/O_VL1  |
| H1-3          | I/O_VL2  |
| H1-5          | I/O_VL3  |
| H1-7          | I/O_VL4  |
| H1-9          | I/O_VL5  |
| H1-11         | I/O_VL6  |
| H1-13         | I/O_VL7  |
| H1-15         | I/O_VL8  |

<!-- image -->

## Applying User Signals to I/O\_VL\_ and I/O\_VCC\_

The MAX13055E EV kit allows user-supplied input signals to be applied to the H1 and H2 headers. Remove shunts from jumpers JU7 and JU8 and apply the input signals to the appropriate pins on headers H1 and H2 (see Tables 2 and 3).

## User-Supplied VDD\_EXT, VL, VCC, and VCLK

The  MAX13055E  EV  kit  is  powered  completely  from  a USB power supply when jumper JU6 is in the 1-2 position. Move JU6 to the 2-3 position so that a user-supplied power supply can be applied to the VDD\_EXT and GND pads.

Users  can  supply  their  own  VL  and  VCC  voltages  by moving jumpers JU2 and JU3 to the 2-3 position. Apply a voltage from 1.62V to 3.2V to the VL and GND pads and 2.2V to 3.6V to the VCC and GND pads.

When jumper JU4 is in the 1-2 position, the clock generator is powered from VCC. To use a separate supply for the clock generator, place the shunt on JU4 in the 2-3 position  and  apply  a  3.0V  to  3.6V  supply  between  the VCLK and GND pads.

## Table 3. H2 Header Description (I/O\_VCC\_)

| DESIGNATION   | SIGNAL   |
|---------------|----------|
| H2-2          | I/O_VCC1 |
| H2-4          | I/O_VCC2 |
| H2-6          | I/O_VCC3 |
| H2-8          | I/O_VCC4 |
| H2-10         | I/O_VCC5 |
| H2-12         | I/O_VCC6 |
| H2-14         | I/O_VCC7 |
| H2-16         | I/O_VCC8 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

Evaluates:  MAX13055E-MAX13058E

## MAX13055E Evaluation Kit

<!-- image -->

Figure 1a. MAX13055E EV Kit Schematic (Sheet 1 of 2)

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX13055E Evaluation Kit

Figure 1b. MAX13055E EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX13055E Evaluation Kit

<!-- image -->

Figure 2. MAX13055E EV Kit Component Placement GuideComponent Side

Figure 3. MAX13055E EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX13055E EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6