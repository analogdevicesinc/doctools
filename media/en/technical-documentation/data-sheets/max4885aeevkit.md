<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX4885AE Evaluation Kit

## General Description

Features

The MAX4885AE evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX4885AE VGA 2:1  multiplexer.  VGA  input/output  connectors  are provided to easily interface the MAX4885AE EV kit with VGA-compatible  devices.  The  EV  kit  can  be  powered from the 5V DC delivered through the VGA cable or from an external 5V DC power supply.

- S Complete 2:1 VGA Multiplexer
- S VGA Connections and Power
- S LED Indicators for Switch Connections
- S VGA Inputs/Outputs
- S Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX4885AEEVKIT+ | EV Kit |

## Component List

* EP = Exposed pad.

| DESIGNATION                 |   QTY | DESCRIPTION                                                            |
|-----------------------------|-------|------------------------------------------------------------------------|
| C1, C3, C5, C7, C9, C11-C14 |     9 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C2, C4, C6, C8, C10         |     5 | 10 F F Q 20%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J106M |
| D1, D2, D3                  |     3 | 40V, 500mA Schottky diodes (SOT563) Central Semi CMLSH05-4+            |
| D4, D5, D6                  |     3 | Red LEDs (0603)                                                        |
| JU1, JU2, JU3               |     3 | 3-pin headers                                                          |
| JU4-JU7                     |     4 | 2-headers                                                              |
| Q1, Q2                      |     2 | n-channel FETs (SOT23) Fairchild FDV303N                               |
| R1                          |     1 | 300 I Q 5% resistor (0603)                                             |

| DESIGNATION              |   QTY | DESCRIPTION                                       |
|--------------------------|-------|---------------------------------------------------|
| R2, R4                   |     2 | 51k I Q 5% resistors (0603)                       |
| R3, R5                   |     2 | 270 I Q 5% resistors (0603)                       |
| TP1, TP3, TP5, TP7, TP30 |     5 | Red multipurpose test points                      |
| TP2, TP4, TP6, TP8, TP31 |     5 | Black multipurpose test points                    |
| TP9-TP29                 |    21 | Red miniature test points                         |
| U1                       |     1 | VGA multiplexer (28 TQFN-EP*) Maxim MAX4885AEETI+ |
| VGA0, VGA1, VGA2         |     3 | 15-pin VGA, HD sub-D female connectors            |
| -                        |     7 | Shunts                                            |
| -                        |     1 | PCB: MAX4885AE EVALUATION KIT+                    |

## Component Suppliers

| SUPPLER                                | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor                  | 631-435-1110 | www.centralsemi.com         |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX4885AE when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4885AE Evaluation Kit

## Quick Start

## Required Equipment

kit with VGA-compatible devices. The EV kit can be powered from the 5V DC that is delivered through the VGA cable or from an external regulated 5V DC power supply.

The MAX4885AE EV kit provides jumpers to control the various features of the MAX4885AE, such as the enable input,  monitor  select,  and  logic  select.  The  EV  kit  also provides  test  points  to  monitor  the  individual  video signals.

## Input Power Supply

The MAX4885AE EV kit accepts a single 5V input power supply from one of the two VGA connections, or from an external 5V regulated supply. The power from each VGA is  ORed  through  individual  Schottky  diodes.  The  logic supply (VL) is equal to the 5V VCC supply by default. To apply a different voltage other than VCC, move the shunt on jumper JU1 to the 2-3 position and apply the logic voltage between EXTVCL (TP30) and GND (TP31).

## Monitor Select (SEL1, SEL2)

The jumper settings on JU2 and JU3 control the signal path between the VGA monitor (VGA0) and VGA sources (VGA1 and VGA2). The video lines (R, G, B, H, and V) are selected by jumper JU3, while the data lines (SDA, SCL) are selected by jumper JU2. VGA0 is the common output  terminal  for  inputs  VGA1  and  VGA2  sources. LEDs D4, D5, and D6 light up to show the connection. LED D4 represents the common output terminal and is always lit with 5V power. D5 and D6 are lit depending on the VGA source selected and are simple visual elements to display the video connection. Jumpers JU4, JU5, and JU6 are included to disconnect the LEDs. The HSYNC and  VSYNC  signals  are  not  bidirectionally  buffered; therefore,  the  EV  kit  cannot  work  as  a  1:2  multiplexer. Refer to the MAX4885 or MAX4885E IC data sheet for a 1:2 multiplexer.

## Procedure

The  MAX4885AE  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps  below  to  verify  board  operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1)  Verify that all jumpers (JU1-JU7) are in their default positions, as shown in Table 1.
- 2)  Connect the monitor to VGA0 (VGA monitor).
- 3)  Connect  the  first  PC  to  VGA1  (VGA  SRC1)  and  the second PC to VGA2 (VGA SRC2).
- 4)  Turn on the power to both PCs and monitor.
- 5)  Verify that LEDs D4 and D6 are on. If both D4 and D6 are not on, then verify that the VGA cable from the PC has all 15 pins present. If pin 9 on the VGA cable is missing, use an external power supply to power VCC.
- 6)  Verify  that  the  first  PC  displays  on  the  monitor. Change  the  shunt  on  jumper  JU3  to  select  SRC2. Now verify that the second PC displays on the monitor. LEDs D4 and D5 should now be lit.

## Detailed Description of Hardware

The MAX4885AE EV kit is a fully assembled and tested circuit board that contains all the components necessary to evaluate the MAX4885AE. VGA input/output connections are provided to easily interface the MAX4885AE EV

## Table 1. MAX4885AE EV Kit Jumper Descriptions (JU1-JU7)

| JUMPER        | SHUNT POSITION   | DESCRIPTION                                                                               |
|---------------|------------------|-------------------------------------------------------------------------------------------|
| JU1           | 1-2*             | VL is powered by on-board 5V power                                                        |
| JU1           | 2-3              | VL is powered externally by applying a voltage to EXTVCL (TP30)                           |
| JU2           | 1-2              | SEL2 input: Monitor data lines (SCL and SDA) are connected to VGA2 data lines             |
| JU2           | 2-3*             | SEL2 input: Monitor data lines (SCL and SDA) are connected to VGA1 data lines             |
| JU3           | 1-2              | SEL1 input: Monitor video lines (R, G, B, H, V) are connected to VGA2 data lines          |
| JU3           | 2-3*             | SEL1 input: Monitor video lines (R, G, B, H, V) are connected to VGA1 data lines          |
| JU4, JU5, JU6 | 1-2*             | Connects a red LED from the VGA power line for a visual display of the connections        |
| JU4, JU5, JU6 | Open             | Disconnects red LED from VGA power                                                        |
| JU7           | 1-2              | Connects SEL1 to SEL2; when the jumper is in this position, use one jumper for JU2 or JU3 |
| JU7           | Open*            | Does not connect SEL1 to SEL2; jumpers must be placed on JU2 and JU3                      |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- MAX4885AE EV kit
- Two user-supplied PCs
- Two 15-pin, VGA HD sub-D cables (all pins present)
- VGA monitor

<!-- image -->

## MAX4885AE Evaluation Kit

<!-- image -->

Figure 1. MAX4885AE EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## Evaluates:  MAX4885AE

## MAX4885AE Evaluation Kit

<!-- image -->

Figure 2. MAX4885AE EV Kit Component Placement Guide-  Component Side

Figure 3. MAX4885AE EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX4885AE EV Kit PCB Layout-GND Layer 2

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4885AE Evaluation Kit

<!-- image -->

Figure 5. MAX4885AE EV Kit PCB Layout-VCC Layer 3

Figure 6. MAX4885AE EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX4885AE EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

5