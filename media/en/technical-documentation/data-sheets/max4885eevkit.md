<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX4885E evaluation kit (EV kit) is an assembled and tested circuit board that contains all the components necessary to evaluate the MAX4885E IC. The MAX4885E is a 1:2 switch for VGA signals. The EV kit can be powered from the 5V DC delivered through the VGA cable. The EV kit can also operate from an external 5V ±10% DC power supply.

| DESIGNATION                                                                                     |   QTY | DESCRIPTION                                                                               |
|-------------------------------------------------------------------------------------------------|-------|-------------------------------------------------------------------------------------------|
| B_0, B_1, B_2, H0, H1, G_0, G_1, G_2, R_0, R_1, R_2, SCL0, SCL1, SCL2, SDA0, SDA1, SDA2, V0, V1 |    19 | White test points, 40 mil drill size                                                      |
| C1                                                                                              |     1 | 1µF ±10%, 10V X5R ceramic capacitor (0603) Murata GRM188R61A105K or TDK C1608X5R1A105K    |
| C2, C3                                                                                          |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K or TDK C1608X7R1H104K |
| D1, D2                                                                                          |     2 | 40V, 500mA Schottky diodes (SOT563) Central Semi CMLSH05-4+ (Top Mark: C54)               |

## Features

- ♦ 1:2 Switch for VGA Signals
- ♦ VGA Connections and Power
- ♦ Single 5V DC Power Supply (VIN)
- ♦ LED Indicators for Switch Connections
- ♦ Evaluates the MAX4885E in a 4mm x 4mm x 0.8mm, 24-Pin TQFN Package with an Exposed Pad
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX4885EEVKIT+ | EV Kit |

## Component List

| DESIGNATION      |   QTY | DESCRIPTION                                              |
|------------------|-------|----------------------------------------------------------|
| D3, D4, D5       |     3 | Green surface-mount LEDs (0805)                          |
| JU1, JU2         |     2 | 3-pin headers                                            |
| Q1               |     1 | pnp transistor (SOT23) Fairchild MMBT3906 (Top Mark: 2A) |
| R1, R2           |     2 | 10k Ω ±5% resistors (0603)                               |
| R3-R6            |     4 | 680 Ω ±5% resistors (0603)                               |
| U1               |     1 | 1:2 VGA switch (24 TQFN-EP*) Maxim MAX4885EETG+          |
| VGA0, VGA1, VGA2 |     3 | 15-pin VGA, HD sub-D 15-pin female connectors            |
| -                |     2 | Shunts (JU1, JU2)                                        |
| -                |     1 | PCB: MAX4885E Evaluation Kit+                            |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX4885E when contacting these component suppliers.

## MAXIM

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX4885E Evaluation Kit

## Quick Start

## Required Equipment

can be powered from the 5V DC (typically up to 10mA) that is delivered through the VGA cable or an external regulated 5V DC power supply. The MAX4885E EV kit also provides test points to monitor the individual video signals on the EV kit.

## Power Source Mismatch Protection

The EV kit circuit features two wired-OR Schottky diodes (D1 and D2) to prevent damage due to mismatching power-supply voltages.

## VGA Signal-Path Indicators

The MAX4885E EV kit features three LEDs (D3, D4, and D5) to indicate the VGA signal paths on the EV kit. LEDs D3 and D4 light when VGA0 is connected to VGA1. Similarly, LEDs D3 and D5 light when VGA0 is connected to VGA2.

## Printed-Circuit Board (PCB)

The MAX4885E EV kit is built on a four-layer, 1oz copper FR4 PCB. All the video signal trace impedances are controlled to 75 Ω and a matched length to 25 mils.

## Jumper Selection

## Enable, EN (JU1)

The MAX4885E EV kit provides jumper JU1 to enable or disable the MAX4885E IC, thus reducing the supply current to the EV kit. Table 1 lists JU1 options to enable or disable the MAX4885E EV kit.

## Table 1. JU1 Jumper Functions (EN)

| SHUNT POSITION   | EN PIN CONNECTED TO       | MAX4885E EV KIT FUNCTION   |
|------------------|---------------------------|----------------------------|
| 1-2*             | VCC (through resistor R1) | Enabled                    |
| 2-3              | GND (through resistor R1) | Disabled                   |

- MAX4885E EV kit
- 5V, 100mA DC power supply (optional)
- One user-supplied PC
- One 15-pin, VGA HD sub-D cable (all pins present)
- Two VGA monitors

## Procedure

The MAX4885E EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is installed on pins 1-2 of jumper JU1 (EV kit enabled).
- 2) Verify that a shunt is installed on pins 2-3 of jumper JU2 (VGA0 connected to VGA1).
- 3) Connect the PC VGA output to the VGA0 connector.
- 4) Connect the first monitor to the VGA1 connector on the EV kit.
- 5) Connect the second monitor to the VGA2 connector on the EV kit.
- 6) Turn on the power to the PC and both monitors.
- 7) Verify  that  both  green  LEDs  D3  and  D4  are  on  (if not, verify that the VGA cable from the PC has all 15 pins present. If pin 9 on the VGA cable is missing, use an external power supply. Connect the 5V external power supply across the VIN and GND PCB pads.)
- 8) Verify that the first monitor is in operation, while the second monitor is off.
- 9) Move the shunt on jumper JU2 to pins 1-2 (VGA0 connected to VGA2).
- 10) Verify that both green LEDs D3 and D5 are on.
- 11) Verify that the second monitor is in operation, while the first monitor is off.
- 12) Move the shunt on jumper JU1 to pins 2-3 (EV kit disabled).
- 13) Verify that both monitors are off. The LEDs remain in their last position.

## Detailed Description of Hardware

The MAX4885E evaluation kit (EV kit) is an assembled and tested circuit board that contains all the components necessary to evaluate the MAX4885E IC. The MAX4885E is a 1:2 switch for VGA signals. The EV kit

## VGA Channel Select, SEL (JU2)

The MAX4885E EV kit provides jumper JU2 to select the connection between the video source connector (VGA0) to one of the two destination connectors (VGA1 or VGA2). Table 2 lists jumper JU2 options.

## Table 2. JU2 Jumper Functions (SEL)

| SHUNT POSITION   | SEL PIN CONNECTED TO      | VGA0 CHANNEL CONNECTED TO   |
|------------------|---------------------------|-----------------------------|
| 1-2              | VCC (through resistor R2) | VGA2                        |
| 2-3*             | GND (through resistor R2) | VGA1                        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4885E Evaluation Kit

Figure 1. MAX4885E EV Kit Schematic

<!-- image -->

MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4885E Evaluation Kit

Figure 2. MAX4885E EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4885E Evaluation Kit

<!-- image -->

Figure 3. MAX4885E EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4885E Evaluation Kit

Figure 4. MAX4885E EV Kit PCB Layout-GND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4885E Evaluation Kit

<!-- image -->

Figure 5. MAX4885E EV Kit PCB Layout-PWR Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4885E Evaluation Kit

Figure 6. MAX4885E EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

SPRINGER

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600