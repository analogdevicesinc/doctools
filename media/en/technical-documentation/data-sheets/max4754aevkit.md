<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX4754A evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) that demonstrates the capabilities of the MAX4754A 0.5 Ω , quad single-pole, double-throw (SPDT) switch with dual control l i n es. The EV kit comes with the MAX4754AETE+ installed.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1            |     1 | 0.1µF ±15%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E104K |
| C2            |     1 | 10µF ±10%, 10V X5R ceramic capacitor (0805) TDK C2012X5R1A106K  |
| JU1, JU2      |     2 | 2-pin headers                                                   |
| R1, R2        |     2 | 100k Ω ±5% resistors (0603)                                     |
| U1            |     1 | MAX4754AETE+ (16-pin thin QFN, 4mm x 4mm)                       |
| -             |     1 | PCB: MAX4754A Evaluation Kit+                                   |

## Component Supplier

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| TDK Corp.  | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX4754A when contacting this component supplier.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

- ♦ Data and Audio Signal Routing
- ♦ Low RON (0.5 Ω typ) Audio Switches
- ♦ +1.8V to +5.5V Supply Range
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   | IC PACKAGE                  |
|----------------|--------|-----------------------------|
| MAX4754AEVKIT+ | EV kit | 16 Thin QFN-EP* (4mm x 4mm) |

*EP = Exposed paddle.

## MAX4754A Evaluation Kit

## Quick Start

## Recommended Equipment

- One +5V DC power supply
- One ohmmeter

## Detailed Description of Hardware

The MAX4754A is a 0.5 Ω , quad SPDT switch with dual control  lines.  The  MAX4754A EV kit board provides a proven layout for evaluating the MAX4754A. The EV kit comes with a MAX4754AETE+ installed.

## Switch Control

There are two jumpers (JU1 and JU2) on the MAX4754A EV kit board, which individually control the logic level of the digital control inputs INA and INB, as shown in Tables 1 and 2. Refer to the MAX4754A data sheet for a detailed description of the switching function.

## Power Supply

The MAX4754A EV kit is powered from a user-supplied +1.8V to +5.5V DC power supply connected to the VDD and GND pads.

## Table 2. Jumper JU2 Configuration

| JUMPER   | SHUNT POSITION   | DESCRIPTION       |
|----------|------------------|-------------------|
| JU2      | 1-2*             | INB is logic-high |
| JU2      | Open             | INB is logic-low  |

## Procedure

The MAX4754A EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Turn off the 5V DC power supply.
- 2) Make sure the shunts of all jumpers are in the following default positions:
- 3) Connect the (-) terminal of the 5V DC power supply to any GND pad of the MAX4754A EV kit. Connect the (+) terminal to the VDD pad.
- 4) Connect one terminal of the ohmmeter to the COM1 pad of the MAX4754A EV kit. Connect the other terminal of the ohmmeter to the NC1 pad.
- 5) Turn on the 5V DC power supply.
- 6) Remove the shunt of jumper JU1, then put it back on; observe the display difference of the ohmmeter during the jumper changing

JU1: (1-2)

INA is high

JU2: (1-2)

INB is high

## Table 1. Jumper JU1 Configuration

| JUMPER   | SHUNT POSITION   | DESCRIPTION       |
|----------|------------------|-------------------|
| JU1      | 1-2*             | INA is logic-high |
| JU1      | Open             | INA is logic-low  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4754A Evaluation Kit

<!-- image -->

Figure 1. MAX4754A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4754A Evaluation Kit

<!-- image -->

Figure 2. MAX4754A EV Kit Component Placement GuideComponent Side

Figure 3. MAX4754A EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX4754A EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Boblet