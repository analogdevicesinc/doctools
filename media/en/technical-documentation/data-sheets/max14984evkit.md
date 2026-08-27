<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The  MAX14984  evaluation  kit  (EV  kit)  is  a  fully  assembled  and  tested  surface-mount  PCB  that  evaluates  the MAX14984  VGA  port  protector  and  dual  USB  power switches IC.

The EV kit  provides  jumpers  and  LEDs  to  evaluate  the device's  two  enable  inputs,  monitor  detec  tion  output, and two fault outputs. VGA input and output connectors are  provided  to  easily  interface  the  EV  kit  with  VGAcompatible devices.

| DESIGNATION         |   QTY | DESCRIPTION                                                            |
|---------------------|-------|------------------------------------------------------------------------|
| C1-C4, C7, C10, C11 |     7 | 1 F F Q 10%, 10V X7R ceramic capacitors (0603) Murata GRM188R71A105K   |
| C5, C6              |     0 | Not installed, ceramic capacitors (0603)                               |
| C8, C9              |     2 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| D1, D2              |     2 | 40V, 500mA Schottky diodes (SOT563) Central Semi CMLSH05-4+            |
| D3-D9               |     7 | Green LEDS (1206)                                                      |
| JU1                 |     1 | 2-pin header                                                           |
| JU2, JU3            |     2 | 3-pin headers                                                          |
| J1, J2              |     2 | 15-pin VGAs, HD sub-D, 15-pin female connectors                        |
| Q1, Q2, Q3          |     3 | General-purpose pnp transistors (SOT23) Fairchild MMBT5087             |

## MAX14984 Evaluation Kit

## Evaluates: MAX14984

## Features

- S VGA Input and Output Connectors
- S Enable Inputs
- S Monitor Detection Output
- S Fault Outputs
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

* EP = Exposed pad.

| DESIGNATION                  |   QTY | DESCRIPTION                                                    |
|------------------------------|-------|----------------------------------------------------------------|
| R1, R4, R5, R6, R9, R10, R11 |     7 | 560 I Q 5% resistors (0603)                                    |
| R2, R3                       |     2 | 3.3k I Q 5% resistors (0603)                                   |
| R7, R8                       |     2 | 39 I Q 5% resistors (0603)                                     |
| R12, R13, R14                |     3 | 100k I Q 5% resistors (0603)                                   |
| R15, R16, R17                |     3 | 47k I Q 5% resistors (0603)                                    |
| R18, R19, R20                |     0 | Not installed, resistors                                       |
| U1                           |     1 | 1:1 switch/VGA port protector (24 TQFN-EP*) Maxim MAX14984ETG+ |
| U2                           |     1 | 3.3V low-dropout linear regulator (5 SC70) Maxim MAX8511EXK33+ |
| -                            |     3 | Shunts                                                         |
| -                            |     1 | PCB: MAX14984 EVALUATION KIT                                   |

## Component Suppliers

| SUPPLER                                | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX14984 when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## Quick Start

## Recommended Equipment

- MAX14984 EV kit
- 5V power supply (VCC)
- VGA-compatible  output  (e.g.,  notebook  computer docking stations)
- VGA-compatible input (e.g., monitor)

## Procedure

The EV kit is a fully assembled and tested surface-mount PCB. Follow the steps below to verify the board operation:

- 1) Verify  that  all  jumpers  are  configured  as  shown  in Table 1.
- 2)  Connect the positive terminal of the 5V power supply to the VCC test pad on the EV kit. Connect the negative terminal of the power supply to the GND test pad on the EV kit.
- 3)  Connect the VGA source to connector J1 (VGA host).
- 4)  Connect the VGA output to connector J2 (VGA monitor).
- 5)  Enable the 5V power supply.
- 6)  Enable the VGA source.
- 7)  Visually  verify  that  the  VGA  monitor  shows  the information from the source.

## Detailed Description

The  MAX14984  EV  kit  provides  jumpers  and  LEDs  to evaluate  the  MAX14984  device's  two  enable  inputs, monitor  detec  tion  output,  and  two  fault  outputs.  VGA input and output connectors are provided to easily interface the EV kit with VGA-compatible devices.

## Jumper Settings

Table 1 summarizes the EV kit's jumper settings.

## Automatic Switching

Jumpers  JU1  and  JU2  can  configure  the  device  into automatic  switching.  When  configured  in  automatic mode,  the  device  automatically  connects  the  graphics controller  when  a  monitor  is  plugged  in.  To  configure automatic mode, remove the shunt on JU2 and install a shunt on JU1 (connect MD to ENV ).

<!-- image -->

## MAX14984 Evaluation Kit Evaluates: MAX14984

## Video Enable Input

Jumper JU2 controls the video enable input. The video enable  input  controls  the  high-bandwidth  switches  to route  the  standard  VGA  R,  G,  and  B  signals  from  the graphics  controller  to  the  VGA  port.  Drive ENV low  to connect the VGA signals to the VGA port. JU1 must be removed if video enable is set manually by JU2.

## USB Enable Input

Jumper JU3 controls the USB enable input. Drive ENU low  to  simultaneously  enable  the  two  5V  USB  power outputs.

## Monitor Detection Output and Fault Outputs

The EV kit provides LED D4 to indicate the status of the device's monitor detection output, MD .  When a monitor is detected, MD is pulled to logic-low and D4 turns on.

The  EV  kit  provides  LEDs  D5  and  D6  to  indicate  the status  of  the  fault  outputs.  Two  active-low  fault  outputs ( F1 and F2 ) assert when a fault is detected on USB1 or USB2, respectively. D5 turns on when a fault condition is detected on USB1. Likewise, D6 turns on when a fault condition is detected on USB2.

## Table 1. Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                               |
|----------|------------------|-------------------------------------------|
| JU1      | Installed        | Automatic switching mode                  |
| JU1      | Not installed*   | Manual switching mode                     |
| JU2      | 1-2              | VGA signals not connected to the VGA port |
| JU2      | 2-3*             | VGA signals connected to the VGA port     |
| JU3      | 1-2              | USB1 and USB2 power outputs disabled      |
| JU3      | 2-3*             | USB1 and USB2 power outputs enabled       |

* Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14984 Evaluation Kit

## Evaluates: MAX14984

<!-- image -->

Figure 1. MAX14984 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1498 Evalution Kit

## Evalutes: MAX1498

<!-- image -->

Figure 2. MAX14984 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 3. MAX14984 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1498 Evalution Kit

## Evalutes: MAX1498

<!-- image -->

Figure 4. MAX14984 EV Kit PCB Layout-GND Layer 2

<!-- image -->

Figure 5. MAX14984 EV Kit PCB Layout-GND Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1498 Evalution Kit

## Evalutes: MAX1498

<!-- image -->

Figure 6. MAX14984 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX14984 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14984EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX14984 Evaluation Kit Evaluates: MAX14984

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8