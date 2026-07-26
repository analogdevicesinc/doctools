<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX16029 evaluation kit (EV kit) is designed to evaluate the MAX16029 quad-voltage, capacitoradjustable, sequencing/supervisory circuit. The kit includes a fully assembled and tested PCB that allows easy access to all major functions of the part, including the inputs, timeout-delay capacitors, and outputs.

The MAX16029 EV kit comes with the MAX16029 i nstalled,  but  can  also  be  used  to  evaluate  the MAX16030 and MAX16043.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                  |
|---------------|-------|----------------------------------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0805) TDK C2012X7R1H104K or Taiyo Yuden UMK212BJ104KG |
| C2-C5         |     0 | Not installed, capacitors (0603)                                                             |
| C6            |     1 | 0.022µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1H223K Taiyo Yuden TMK107BJ223KA  |

Features

- ♦ Easy Configuration with Jumpers
- ♦ Input Connections Include Pads for Resistive Dividers
- ♦ Master Reset Pushbutton

## Ordering Information

| PART           | TEMP RANGE    | IC PACKAGE   |
|----------------|---------------|--------------|
| MAX16029EVKIT+ | 0°C to +70°C* | 24 TQFN-EP † |

*This limited temperature range is for the EV kit PCB only. The MAX16029 IC temperature range is -40°C to +125°C. † EP = Exposed paddle.

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                             |
|--------------------|-------|-----------------------------------------|
| J1, J5-J8, J13     |     6 | 2-pin headers                           |
| J2, J3, J4, J9-J12 |     7 | 3-pin headers                           |
| R1-R8              |     0 | Not installed, resistors (0805)         |
| R9-R13             |     5 | 100k Ω ±1% resistors (0805)             |
| S1                 |     1 | Momentary tact switch, SPST             |
| U1                 |     1 | MAX16029TG+                             |
| -                  |    12 | Shunts, 2 position (see Tables 1 and 2) |
| -                  |     1 | MAX16029 EV kit PCB                     |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| TDK Corp.   | 847-390-4373 | 847-390-4428 | www.component.tdk.com |
| Taiyo Yuden | 847-925-0888 | 847-925-0899 | www.t-yuden.com       |

Note: Indicate that you are using the MAX16029 EV kit when contacting these component suppliers.

1

## MAX16029 Evaluation Kit

## Quick Start

## Required Equipment

- Five power supplies: 5V, 3.3V, 2.5V, 1.8V, and 1.5V
- An oscilloscope

inputs,  the  EV  kit  provides  space  for  resistor-dividers (R1-R8). To calculate the resistor values that obtain a specific threshold, use the following formula:

<!-- formula-not-decoded -->

where VTH is the adjustable threshold voltage.

## Outputs

If a voltage present on an input goes above that input's threshold, the corresponding output asserts after a capacitor-set (C2-C5) time delay. Set the capacitor value according to the following equation:

<!-- formula-not-decoded -->

where tDELAY is in seconds and CCDLY is in farads. The MAX16030 provides push-pull outputs, while the MAX16029 and MAX16043 provide open-drain outputs. The EV kit pullup resistors (R10-R13) may be enabled using J5-J8 if the MAX16029 or the MAX16043 is the part being evaluated.

## RESET Output

The RESET output is the result of an AND operation on the four outputs. Once all four outputs go high, RESET deasserts high after a capacitor-set or fixed timeout delay set by C6 or J1. If J1 is closed, the timeout delay is  200ms. If J1 is open, the timeout delay is set by capacitor C6 to 22ms. If desired, the capacitor can be replaced. The value of the timeout is calculated using the following formula:

<!-- formula-not-decoded -->

where tRP is in seconds and CCRESET is in farads. RESET asserts low if MR is pulled low. The EV kit provides pushbutton S1 that pulls MR low to evaluate this feature.

The MAX16029 uses an open-drain RESET output, so jumper J13 must be closed to connect pullup resistor R9. If  the  EV  kit  is  used  to  evaluate  the  MAX16030  or MAX16043, open jumper J13, as these parts both have a push-pull RESET output.

## Procedure

The MAX16029 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supplies until all connections are completed.

- 1) Connect a 5V power supply to VCC and GND, connect 3.3V to IN1, connect 2.5V to IN2, connect 1.8V to IN3, and connect 1.5V to IN4.
- 2) Ensure that jumper J1 is open and jumpers J2, J3, and J4 are in the 2-3 position. Jumpers J5-J8 and J13 must be closed and J9-J12 must be in the 1-2 position.
- 3) Connect an oscilloscope to OUT1 and RESET .
- 4) Turn on the 5V supply, and observe that OUT1 and RESET are low.
- 5) Turn on the 3.3V supply, and observe that although OUT1 is high, RESET is still low.
- 6) Turn on the remaining supplies, observing that after the last supply voltage exceeds its threshold, RESET goes high.
- 7) Press the MR button and observe RESET .

## Detailed Description

The MAX16029 and the MAX16030/MAX16043 (that can also be evaluated on this EV kit) operate from 2.2V to  28V.  They  monitor  up  to  four  voltages  and  provide individual outputs (OUT1-OUT4) that indicate if the corresponding input is above or below its threshold. Additionally, each channel has a specific capacitor-set timeout delay.

Additional features include a RESET output that goes high once all outputs are high and has its own capacitor-set delay. A MR input (controlled by the pushbutton) allows an operator to initiate a device reset, or is controlled by external logic.

## Monitoring Inputs

Each channel monitors a voltage and controls the corresponding output according to whether it is above or below a specific threshold voltage. The threshold is either adjustable or fixed, depending on the settings of J3 and J4 (see Table 2). The voltage tolerance of 10% or 5% is set using J2. To support adjustable threshold

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16029 Evaluation Kit

## ENABLE Inputs

The ENABLE inputs allow individual logic-level control over each monitoring channel. Jumpers J9-J12 on the EV kit allow control over each, with position 1-2 representing a logic-high and position 2-3 a logic-low.

Table 2. J3 and J4 Jumper FunctionInput Threshold Select

## Jumper Function Tables

Table 1. J1, J2, and J5-J12 Jumper Function

| JUMPER   | POSITION   | FUNCTION                             |
|----------|------------|--------------------------------------|
| J1       | Open       | Capacitor-set reset timeout (22ms)   |
| J1       | Closed*    | Internally set reset timeout (200ms) |
| J2       | 1-2        | 10% threshold tolerance              |
| J2       | 2-3*       | 5% threshold tolerance               |
| J5-J8    | Open*      | OUT_ pullups disabled                |
| J5-J8    | Closed     | OUT_ pullups enabled                 |
| J9-J12   | 1-2*       | OUT_ enabled                         |
| J9-J12   | 2-3        | OUT_ disabled                        |
| J13      | Open       | RESET pullup disabled                |
| J13      | Closed*    | RESET pullup enabled                 |

<!-- image -->

| J3   | J4   | IN1   | IN2   | IN3   | IN4   |
|------|------|-------|-------|-------|-------|
| 2-3* | 2-3* | 3.3V  | 2.5V  | 1.8V  | 1.5V  |
| 2-3  | 1-2  | 3.3V  | 1.8V  | ADJ   | ADJ   |
| 2-3  | Open | 3.3V  | 1.5V  | ADJ   | ADJ   |
| 1-2  | 2-3  | 3.3V  | 1.2V  | 1.8V  | 2.5V  |
| 1-2  | 1-2  | 2.5V  | 1.8V  | ADJ   | ADJ   |
| 1-2  | Open | 3.3V  | ADJ   | 2.5V  | ADJ   |
| Open | 2-3  | 3.3V  | ADJ   | ADJ   | ADJ   |
| Open | 1-2  | 2.5V  | ADJ   | ADJ   | ADJ   |
| Open | Open | ADJ   | ADJ   | ADJ   | ADJ   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16029 Evaluation Kit

Figure 1. MAX16029EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16029 Evaluation Kit

Figure 2. MAX16029EV Kit Component Placement Guide-Components Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16029 Evaluation Kit

Figure 3. MAX16029EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16029 Evaluation Kit

Figure 4. MAX16029EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7