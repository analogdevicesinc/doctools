<!-- lastmod 2022-08-04 -->
<!-- image -->

INNOVATIONDELIVERED

## General Description

The  MAX14998  evaluation  kit  (EV  kit)  is  a  fully  assembled  and  tested  surface-mount  PCB  that  utilizes  the MAX14998 IC to route one DisplayPort™ source between two possible destinations, or vice versa.

DisplayPort connectors are provided to easily interface the EV kit with DisplayPort devices. The digital control inputs (SEL1, SEL2) are controlled through a single jumper (JU4) to switch the four-lane plus AUX/HPD DisplayPort. The EV kit requires power from an external 3.3V power supply.

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1-C4, C7     |     5 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C5            |     1 | 10 F F Q 10%, 16V X5R ceramic capacitor (0805) Murata GRM21BR61C106K   |
| C6            |     0 | Not installed, capacitor (0603)                                        |
| D1            |     1 | Green LED (1206)                                                       |
| JU1, JU2, JU3 |     3 | 2-pin headers                                                          |
| JU4           |     1 | 3-pin header                                                           |
| P1, P2, P3    |     3 | DisplayPort video connectors                                           |
| Q1            |     1 | 60V, 200mA n-channel MOSFET (3 SOT23) STMicroelectronics 2N7002        |

## MAX14998 Evaluation Kit

## Evaluates: MAX14998

## Features

- S Complete DisplayPort Switch
- S Single 3.3V Power Supply
- S Power LED Indicator
- S DisplayPort Connectors for Source and Sink
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION      |   QTY | DESCRIPTION                                                 |
|------------------|-------|-------------------------------------------------------------|
| Q2, Q3           |     2 | General-purpose npn transistors (3SOT23) Fairchild MMBT5088 |
| R1               |     1 | 270 I Q 5% resistor (0603)                                  |
| R7, R8, R14, R15 |     4 | 10k I Q 5% resistors (0603)                                 |
| R9               |     1 | 120k I Q 5% resistor (0603)                                 |
| R12, R13         |     2 | 3.3k I Q 5% resistors (0603)                                |
| U1               |     1 | DisplayPort passive switch (42 TQFN-EP) Maxim MAX14998ETO+  |
| U2               |     1 | Quad 2:1 multiplexers (16 TQFN) Maxim MAX4784ETE            |
| -                |     4 | Shunts                                                      |
| -                |     1 | PCB: MAX14998 EVALUATION KIT                                |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| STMicroelectronics                     | 408-452-8585 | www.us.st.com               |

Note: Indicate that you are using the MAX14998 when contacting these component suppliers.

DisplayPort is a trademark of the Video Electronics Standards Association (VESA).

<!-- image -->

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

- MAX14998 EV kit
- DisplayPort source (e.g.,  a  notebook  computer docking station)
- DisplayPort device (e.g., a monitor)
- Two DisplayPort cables
- 3.3V, 100mA power supply

## Quick Start

## Required Equipment

## Procedure

The EV kit is a fully assembled and tested surface-mount PCB. Follow the steps below to verify the board operation:

- 1)  Connect  the  positive  terminal  of  the  3.3V  power supply  to  the  3.3V  pad  on  the  EV  kit.  Connect  the negative terminal of the power supply to the GND PCB pad on the EV kit.
- 2)  Verify that the power LED indicator (D1) is lit.
- 3)  Verify  that  shunts  are  not  installed  across  jumpers JU1, JU2, and JU3.
- 4)  Set SEL1 and SEL2 to the low positions by placing a shunt on pins 2-3 of jumper JU4.
- 5)  Connect a DisplayPort source to P1.
- 6)  Connect a DisplayPort sink, such as a monitor, to P3.
- 7)  Enable the DisplayPort source, if needed.
- 8)  Visually verify that the DisplayPort shows the information from the source.

## Table 1. Jumper Functions (JU1-JU4)

| JUMPER        | SHUNT POSITION   | DESCRIPTION                                                                                  |
|---------------|------------------|----------------------------------------------------------------------------------------------|
| JU1, JU2, JU3 | Installed        | Level-shifting circuitry on the HPD pins bypassed. IC can be used as a bidirectional switch. |
| JU1, JU2, JU3 | Not installed*   | Level-shifting circuitry on the HPD pins enabled.                                            |
| JU4           | 1-2              | SEL1, SEL2 logic-high. P2 source routes to P3 sink.                                          |
| JU4           | 2-3*             | SEL1, SEL2 logic- low. P1 source routes to P3 sink.                                          |

<!-- image -->

## MAX14998 Evaluation Kit

## Evaluates: MAX14998

## Detailed Description of Hardware

The  MAX14998  EV  kit  evaluates  the  MAX14998  fourlane  DisplayPort  passive  switches  with  separate  AUX/ HPD control. Both digital control inputs (SEL1, SEL2) are controlled  by  jumper  JU4.  DisplayPort  connectors  are provided  to  easily  interface  the  EV  kit  with  DisplayPort devices. The EV kit operates from a single 3.3V power supply.

## Evaluation Kit Controls

The  EV  kit  provides  jumpers  JU1,  JU2,  and  JU3  to optionally bypass the level-shifting circuitry on the HPD pins. Place a shunt across each jumper for bidirectional switching, allowing COM\_, NO\_, and NC\_ to be used as either inputs or outputs.

The EV kit provides jumper JU4 to control the quad 2:1 multiplexers IC (U2), which in turn controls the two digital control inputs (SEL1, SEL2). SEL1 selects high-frequency switching, while SEL2 selects AUX/HPD.

Place  a  shunt  on  pins  1-2  of  JU4  to  set  both  SEL1 and  SEL2  to  logic-high.  This  configuration  connects a  DisplayPort  source  at  P2  through  to  the  DisplayPort sink at P3. Place a shunt on pins 2-3 of JU4 to set both SEL1 and SEL2 to logic-low. This configuration connects a  DisplayPort  source  at  P1  through  to  the  DisplayPort sink at P3.

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14998 Evaluation Kit Evaluates: MAX14998

<!-- image -->

Figure 1. MAX14998 EV Kit Schematic

<!-- image -->

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX14998 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX14998 Evaluation Kit

## Evaluates: MAX14998

Figure 3. MAX14998 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX14998 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 5. MAX14998 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

## MAX14998 Evaluation Kit Evaluates: MAX14998

Figure 6. MAX14998 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX14998 EV Kit Component Placement GuideSolder Side

<!-- image -->

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14998EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX14998 Evaluation Kit Evaluates: MAX14998

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.