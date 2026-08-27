<!-- lastmod 2022-08-03 -->
<!-- image -->

- S Complete 1:2 VGA Multiplexer
- S Single 5V Power Supply
- S VGA Inputs/Outputs
- S Enable Inputs
- S Monitor-Detection Outputs
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

* EP = Exposed pad.

| DESIGNATION               |   QTY | DESCRIPTION                                                                  |
|---------------------------|-------|------------------------------------------------------------------------------|
| Q1, Q2, Q3                |     3 | General-purpose pnp transistors (SOT23) Fairchild MMBT5087                   |
| R1, R2, R3, R10, R11, R12 |     6 | 560 I Q 5% resistors (0603)                                                  |
| R4, R5, R6                |     3 | 100k I Q 5% resistors (0603)                                                 |
| R7, R8, R9                |     3 | 47k I Q 5% resistors (0603)                                                  |
| R13-R16                   |     4 | 39 I Q 5% resistors (0603)                                                   |
| R17, R18                  |     2 | 3.3k I Q 5% resistors (0603)                                                 |
| R19                       |     1 | 330 I Q 1% resistor (0603)                                                   |
| U1                        |     1 | 1:2 VGA multiplexer with monitor detection (32 TQFN-EP*) Maxim MAX14983EETJ+ |
| U2                        |     1 | 3.3V LDO linear regulator (5 SC70) Maxim MAX8511EXK33+                       |
| VCC                       |     1 | Red test point                                                               |
| -                         |     4 | Shunts                                                                       |
| -                         |     1 | PCB: MAX14983E EVALUATION KIT                                                |

## MAX14983E Evaluation Kit

## Evaluates: MAX14983E

## General Description

The MAX14983E  evaluation kit (EV kit) is a fully assembled and tested surface-mount PCB that utilizes the MAX14983E  VGA  multiplexer  to  implement  a  1:2  video graphics array  circuit.  The  IC  switches  graphics  signals between a controller and two outputs.

VGA  input/output  connections  are  provided  to  easily interface  the  EV  kit  with  VGA-compatible  devices.  The EV kit provides LEDs to indicate the status of the monitordetection outputs. The EV kit operates with a single 5V supply input.

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1            |     1 | 10 F F Q 10%, 10V X7R ceramic capacitor (1206) Murata GRM31CR71A106K   |
| C2-C7         |     6 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C8-C11        |     0 | Not installed, capacitors (0603)                                       |
| C12, C16      |     2 | 1 F F Q 10%, 10V X7R ceramic capacitors (0603) Murata GRM188R71A105K   |
| D1, D2        |     2 | 40V, 500mA Schottky diodes (SOT563) Central Semi CMLSH05-4+            |
| D3-D8         |     6 | Green LEDs (1206)                                                      |
| GND           |     1 | Black test point                                                       |
| J0, J1, J2    |     3 | 15-pin VGA, HD sub-D, 15-pin female connectors                         |
| JU1, JU2      |     2 | 3-pin headers                                                          |
| JU3, JU4      |     2 | 2-pin headers                                                          |

## Features

## Component Suppliers

| SUPPLER                                | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX14983E when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4 or visit Maxim's website at www.maxim-ic.com.

## MAX14983E Evaluation Kit Evaluates: MAX14983E

## Quick Start

## Recommended Equipment

- MAX14983E	EV	kit
- Single	5V	power	supply
- VGA-compatible	 output	 (e.g.,	 notebook	 computer docking stations)
- VGA-compatible	input	(e.g.,	monitor)

## Procedure

The EV kit is a fully assembled and tested surface-mount PCB. Follow the steps below to verify board operation:

- 1)  Verify  that  jumpers  are  configured  in  the  following positions:

JU1, JU2: Pins 2-3

JU3, JU4: Not installed

- 2)  Connect the positive terminal of  the  5V  power supply to the VCC test point on the EV kit. Connect the negative terminal of the power supply to the GND test point on the EV kit.
- 3)  Connect the VGA source to connector J0 (VGA host).
- 4)  Connect  the  VGA  output  to  connector  J1  (VGA monitor 1).
- 5)  Enable the 5V power supply.
- 6)  Enable the VGA source.
- 7)  Visually verify that the VGA monitor shows the information from the source.
- 8)  See Table 1 for other states of the VGA controller.

## Table 1. Channel Selection

| SHUNT POSITIONS   | SHUNT POSITIONS   | VGA CONTROLLER   |
|-------------------|-------------------|------------------|
| JU1               | JU2               | CONNECTED TO     |
| 2-3*              | 2-3*              | VGA monitor 1    |
| 2-3               | 1-2               | VGA monitor 1    |
| 1-2               | 2-3               | VGA monitor 2    |
| 1-2               | 1-2               | Not connected    |

<!-- image -->

## Detailed Description

The MAX14983E EV kit evaluates the MAX14983E enhanced 1:2 VGA mux with monitor detection and priority port logic. VGA connectors are provided to easily interface the EV kit with VGA devices. The EV kit provides jumpers to control the enable inputs. The EV kit also provides status LEDs to monitor the monitor-detection outputs. The EV kit operates from a single 5V power supply.

## Enable Inputs (Channel Selection)

The  EV  kit  provides  jumpers  JU1  and  JU2  to  control device  enable  inputs EN1 and EN2 ,  respectively.  The enable  inputs  control  the  high-bandwidth  switches  to route  the  standard  VGA  R,  G,  and  B  signals.  Assert EN1 to connect the graphics controller to the monitor on port 1. Assert EN2 to connect the graphics controller to the monitor on port 2. Table 1 summarizes the device's channel selection.

## Monitor Detection and Automatic Switching

The EV kit  provides  LEDs  (D5,  D6,  D7)  to  indicate  the status  of  the  device's  three  monitor-detection  outputs ( MD1 , MD2 , and MDOR ). When any of the monitor-detection outputs are asserted, its respective LED turns on.

The device automatically switches the graphics controller to the monitor that is plugged in when configured in automatic mode. To configure automatic mode, leave jumpers JU1 and JU2 open and place shunts on both jumpers JU3 and JU4. This connects MD1 and MD2 to EN1 and EN2 ,  respectively. If a monitor is detected in both VGA ports simultaneously, the multiplexer defaults to port 1.

Table 2 summarizes the device's monitor-detection feature.

## Table 2. Monitor Detection

| MONITOR 1 DETECTED   | MONITOR 2 DETECTED   | MD1   | MD2   | MDOR   |
|----------------------|----------------------|-------|-------|--------|
| No                   | No                   | High  | High  | High   |
| No                   | Yes                  | High  | Low   | Low    |
| Yes                  | No                   | Low   | High  | Low    |
| Yes                  | Yes                  | Low   | Low   | Low    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14983E Evaluation Kit Evaluates: MAX14983E

<!-- image -->

Figure 1. MAX14983E EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14983E Evalution Kit

## Evalutes: MAX14983E

<!-- image -->

Figure 2. MAX14983E EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 3. MAX14983E EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14983E Evalution Kit

## Evalutes: MAX14983E

<!-- image -->

Figure 4. MAX14983E EV Kit PCB Layout-GND Layer 2

<!-- image -->

Figure 5. MAX14983E EV Kit PCB Layout-GND Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14983E Evalution Kit

## Evalutes: MAX14983E

<!-- image -->

Figure 6. MAX14983E EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX14983E EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX14983EEVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX14983E Evaluation Kit

## Evaluates: MAX14983E

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/11           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8