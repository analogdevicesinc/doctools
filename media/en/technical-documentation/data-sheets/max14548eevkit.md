<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX14548E Evaluation Kit

## General Description

## Features

The  MAX14548E  evaluation  kit  (EV  kit)  provides  a proven design to evaluate the MAX14548E 16-channel, bidirectional level translator. The MAX14548E translates between VL and VCC logic levels for data rates up to 100Mbps (50MHz).

The EV kit PCB comes with a MAX14548EEWL+ 40-bump WLP installed. Contact the factory for free samples of the pin-compatible MAX14548AEEWL+.

- S Powered by USB
- S On-Board Clock Generator Capable of 33MHz
- S Accessible Headers to All 16 Input/Output (I/O) Channels
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX14548EEVKIT+ | EV Kit |

## Component List

| DESIGNATION                                |   QTY | DESCRIPTION                                                            |
|--------------------------------------------|-------|------------------------------------------------------------------------|
| C1, C2                                     |     2 | 1 F F Q 10%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R0J105K     |
| C3, C4, C11, C12                           |     4 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C104K |
| C5, C6, C8, C9, C14                        |     5 | 1 F F Q 10%, 16V X5R ceramic capacitors (0603) TDK C1608X5R1 C105K     |
| C7, C10, C13                               |     3 | 0.01 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C03K |
| D1                                         |     1 | Green LED (0603)                                                       |
| H1, H2                                     |     2 | 32-pin headers (2 x 16)                                                |
| JU1-JU7                                    |     7 | 3-pin headers                                                          |
| JU8, JU9                                   |     2 | 2-pin headers                                                          |
| P1                                         |     1 | USB type-B, right-angle male receptacle                                |
| R1-R8, R17-R24, R33-R40, R49-R56, R65, R66 |    34 | 0 I Q 5% resistors (0402)                                              |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION                       |   QTY | DESCRIPTION                                              |
|-----------------------------------|-------|----------------------------------------------------------|
| R9-R16, R25-R32, R41-R48, R57-R64 |     0 | Not installed, resistors (0402)                          |
| R67                               |     1 | 470 I Q 5% resistor (0603)                               |
| U1                                |     1 | 16-channel level translator (40 WLP) Maxim MAX14548EEWL+ |
| U2                                |     1 | 1.8V LDO (5 SC70) Maxim MAX8510EXK18+                    |
| U3                                |     1 | 3V LDO (5 SC70) Maxim MAX8510EXK30+                      |
| U4                                |     1 | 33MHz oscillator (8 F MAX M ) Maxim DS1091LUA-33+        |
| U5                                |     1 | Dual inverter (6 SC70) Fairchild NC7WZ04P6X              |
| -                                 |     1 | USB type A-to-B cable, 6ft                               |
| -                                 |     9 | Shunts                                                   |
| -                                 |     1 | PCB: MAX14548E EVALUATION KIT+                           |

Maxim Integrated Products 1

## MAX14548E Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX14548E when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX14548E EV kit (USB cable included)
- User-supplied PC with spare USB port
- 2-channel oscilloscopes (i.e., Tektronix TDS3012)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation:

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect the USB cable to the USB connector (P1) on the EV kit.
- 3) Connect  the  first  channel  of  the  oscilloscope  to H1-1,  which  is  the  1.8V  logic-level  33MHz  signal input.
- 4) Connect the second channel of the oscilloscope to H2-2, which is the 3V logic-level 33MHz signal output.
- 5) Using  the  oscilloscope,  verify  that  the  1.8V  logiclevel 33MHz I/O\_VL1 signal is translated to the 3V logic level at the H2-2 header.

## Detailed Description of Hardware

The  MAX14548E  EV  kit  provides  a  proven  design  to evaluate the MAX14548E 16-channel, bidirectional level translator.  The  device  translates  between  VL  and  VCC logic levels for data rates up to 50MHz.

## Shutdown Mode

The device enters shutdown mode by moving the shunt on jumper JU1 to the 2-3 position. Otherwise, leave the shunt at the 1-2 position for normal operation.

## Clock Generator

The  EV  kit  includes  the  convenience  of  an  on-board clock  generator  (U4)  capable  of  producing  33MHz signals on the I/O\_VL1 and I/O\_VCC1 inputs.

When  translating  from  VL  to  VCC,  move  the  shunt  on jumper JU5 to the 1-2 position, place a shunt on jumper JU9, and remove the shunt from jumper JU8. To go from VCC to  VL,  move  JU5  to  the  2-3  position,  remove  the shunt from JU9, and place a shunt on JU8.

## Programmable Maximum Frequency

The maximum input frequency can be set for the device using jumper JU4. When JU4 is in the 1-2 position, the maximum  input  frequency  is  set  to  40Mbps  (20MHz). Move the shunt on JU4 to the 2-3 position for 100Mbps (50MHz).

## Applying User Signals to I/O\_VL\_ and I/O\_VCC\_

The  EV  kit  allows  user-supplied  input  signals  to  be applied to the H1 and H2 headers. Remove shunts from jumpers JU8 and JU9 and apply the input signals to the appropriate pins on headers H1 and H2 (see Tables 2 and 3).

## User-Supplied VDD\_EXT, VL, VCC, and VCLK

The  EV  kit  is  powered  completely  from  the  USB  when jumper JU6 is in the 1-2 position. Move JU6 to the 2-3 position  and  a  user-supplied  power  supply  can  be applied to the VDD\_EXT and GND pads.

Users  can  supply  their  own  VL  and  VCC  voltages  by moving jumpers JU2 and JU3 to the 2-3 position. Apply a voltage from 1.1V to 3.6V to the VL and GND pads and 1.7V to 3.6V to the VCC and GND pads.

When  jumper  JU7  is  in  the  1-2  position,  the  clock generator  is  powered  from  VCC.  To  use  a  separate supply for the clock generator, place the shunt on JU7 in the 2-3 position and apply a 3V to 3.6V supply between the VCLK and GND pads.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX14548E Evaluation Kit

Table 1. Jumper Description (JU1-JU9)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                 |
|----------|------------------|-----------------------------------------------------------------------------|
| JU1      | 1-2*             | Enables the device for normal operation                                     |
| JU1      | 2-3              | Sets the device to shutdown mode                                            |
| JU2      | 1-2*             | Sets the device VL logic level using the on-board 1.8V LDO                  |
| JU2      | 2-3              | Sets the device VL logic level using an external supply                     |
| JU3      | 1-2*             | Sets the device VCC logic level using the on-board 3V LDO                   |
| JU3      | 2-3              | Sets the device VCC logic level using an external supply                    |
| JU4      | 1-2              | Sets the device maximum bit rate to 40Mbps (20MHz)                          |
| JU4      | 2-3*             | Sets the device maximum bit rate to 100Mbps (50MHz)                         |
| JU5      | 1-2*             | Enables the inverter (U5) and sets the inverter's output to VL logic level  |
| JU5      | 2-3              | Enables the inverter (U5) and sets the inverter's output to VCC logic level |
| JU6      | 1-2*             | Powers the EV kit using the USB supply                                      |
| JU6      | 2-3              | Powers the EV kit using an external supply                                  |
| JU7      | 1-2*             | Powers the clock generator using the VCC supply of the device               |
| JU7      | 2-3              | Powers the clock generator using an external supply                         |
| JU8      | Open*            | Disconnects the clock generator signal from the I/O_VCC1 pin of the device  |
| JU8      | 1-2              | Connects the clock generator signal to the I/O_VCC1 pin of the device       |
| JU9      | Open             | Disconnects the clock generator signal from the I/O_VL1 pin of the device   |
| JU9      | 1-2*             | Connects the clock generator signal to the I/O_VL1 pin of the device        |

## Table 2. H1 Header Description (I/O\_VL\_)

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
| H1-17         | I/O_VL9  |
| H1-19         | I/O_VL10 |
| H1-21         | I/O_VL11 |
| H1-23         | I/O_VL12 |
| H1-25         | I/O_VL13 |
| H1-27         | I/O_VL14 |
| H1-29         | I/O_VL15 |
| H1-31         | I/O_VL16 |

<!-- image -->

## Table 3. H2 Header Description (I/O\_VCC\_)

| DESIGNATION   | SIGNAL    |
|---------------|-----------|
| H2-2          | I/O_VCC1  |
| H2-4          | I/O_VCC2  |
| H2-6          | I/O_VCC3  |
| H2-8          | I/O_VCC4  |
| H2-10         | I/O_VCC5  |
| H2-12         | I/O_VCC6  |
| H2-14         | I/O_VCC7  |
| H2-16         | I/O_VCC8  |
| H2-18         | I/O_VCC9  |
| H2-20         | I/O_VCC10 |
| H2-22         | I/O_VCC11 |
| H2-24         | I/O_VCC12 |
| H2-26         | I/O_VCC13 |
| H2-28         | I/O_VCC14 |
| H2-30         | I/O_VCC15 |
| H2-32         | I/O_VCC16 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX14548E Evaluation Kit

Figure 1a. MAX14548E EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1b. MAX14548E EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX14548E Evaluation Kit

Figure 2. MAX14548E EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX14548E EV Kit PCB Layout-Component Side

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX14548E Evaluation Kit

Figure 4. MAX14548E EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Figure 5. MAX14548E EV Kit PCB Layout-Inner Layer 3

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX14548E Evaluation Kit

Figure 6. MAX14548E EV Kit PCB Layout-Solder Side

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14548E Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/10            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9