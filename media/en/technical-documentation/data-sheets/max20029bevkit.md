<!-- lastmod 2022-08-02 -->
## MAX20029B Evaluation Kit

## General Description

The MAX20029B EV kit is a fully assembled and tested PCB that demonstrates the capabilities of the MAX20029B power-management  IC  (PMIC),  which  comprises  four low-voltage  step-down  converters.  The  IC  operates  at a  3V  to  5.5V  input  supply  voltage,  regulates  to  a  1V  to 4V voltage range, and delivers up to 3A of current, while OUT3 and and OUT4 deliver up to 1.5A. The converters are high-frequency switchers, operating at 2.2MHz. The high switching frequency allows for reduced component values  and  sizes,  including  a  single  ceramic  output capacitor  on  each  rail.  All  channels  have  independent undervoltage/overvoltage comparators at both input and output, current limiting, and fault-flag outputs. The EV kit ships  fully  assembled  and  tested,  ready  for  immediate evaluation of the IC.

## Benefits and Features

- 3.0V to 5.5V Input Voltage Range
- 1.0V to 4.0V Output Voltages Range
- Resistive Dividers Used to Set Appropriate Output Voltage
- High Switching Frequency of 2.2MHz
- Two Channels Operate 180° Out-of-Phase
- Individual Enable and Reset Connections Available
- Loop Measurements Ready on All Channels
- Overtemperature and Short-Circuit Protection
- Proven PCB Layout
- Fully Assembled and Tested

Evaluates: MAX20029B/MAX20029D

## Quick Start

## Required Equipment

- MAX20029B EV kit
- 5V, 3A power supply
- Appropriate  resistive  loads  (depending  on  selected output  voltage  and  current  capability),  or  electronic loads for each of the outputs
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect a 5V power supply to VSUP (J1) and PGND (J2). Activate the supply.
- 2) Verify that PG1-PG4 are at logic-low levels (J14, J34, and J44).
- 3) Populate jumpers (J13, J33, and J43) to activate all/ selected outputs.
- 4) Measure the voltages on the enabled outputs.
- 5) Connect appropriate loads to all/selected outputs
- 6) Verify that the output voltages remain within specification.
- 7) Verify that PG1-PG4 are at logic-high levels.

Ordering Information appears at end of data sheet.

<!-- image -->

## Detailed Description of Hardware

## EV Kit Interface

The  large  connectors,  VSUP  (J1)  and  PGND  (J2), are  the  main  input  supply  points.  Connect  a  5V  power supply across these pins. Outputs OUTS1-OUTS4 have large connectors for the output and GND nodes (labeled VOUT1-VOUT4,  respectively).  Each  channel  has  independent  enable  and  power-good  test  points.  Installing jumpers at the dual headers marked EN1-EN4 activates the  respective  channel;  the  power-good  signal  for  that channel  can  be  accessed  through  the  PG1-PG4  pins. Additional GND test points (J4-J7) are provided for ease of measurement.

## Evaluating IC Capabilities

The IC installed on the board is a MAX20029BATIA/V+. It has its three outputs set through resistor-dividers on the board at V OUT1  = 1.2V, V OUT3  = 1.8V, and V OUT4  = 3.3V, with 3A current limit on V OUT1 , and 1.5A current limit on the remaining two.

If  the  user wants to test a version of the chip with internally fixed output voltages, they can remove the appropriate  resistors  (R12,  R32,  R42),  and  replace  the  existing resistors (R11, R31, and R41) with 0Ω values to create a direct feedback connection from the VOUT\_ nodes to the OUTS\_ pins.

The MAX20029D may also be evaluated by replacing the installed IC and configuring the feedback path as needed.

An  external  square  wave  can  be  applied  to  the  SYNC pin (J3) to cause the IC to switch at a different frequency. Maxim suggests using a 50% duty cycle for the square wave. The supported switching frequency (f SW ) range is from 1.7MHz up to 2.5MHz.

Three-pin  headers  J10,  J30,  and  J40  are  provided  for ease-of-loop measurements (for each of the regulators).

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX20029BEVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX20029B EV Kit Bill of Materials

| REFERENCE DESIGNATORS            |   QTY. | DESCRIPTION                                         | MFG. PART NO.              |
|----------------------------------|--------|-----------------------------------------------------|----------------------------|
| C1, C2, C3, C4                   |      4 | Capacitor, 2.2µF, 25V, ceramic, X7R, 0805           | Murata GRM21BR71E225KA73   |
| C5                               |      1 | Capacitor, 0.47µF, 16V, ceramic, X7R, 0603          | Murata GCM188R71C474KA55D  |
| C6, C7                           |      7 | Capacitor, 22µF, 10V, ceramic, X7R, 1210            | Murata GCM32ER71A226ME12L  |
| C8, C16, C19, C26, C29, C38, C48 |      7 | not populated                                       | -                          |
| C17                              |      1 | Capacitor, 68pF, 50V, ceramic, C0G/NP0, 0402        | Murata GCM1555C1H680JA16D  |
| C18, C28, C39, C49               |      4 | Capacitor, 22µF, 10V, ceramic, X7T, 0805            | Murata GRM21BD71A226ME44   |
| C37                              |      1 | Capacitor, 15pF, 50V, ceramic, C0G/NP0, 0402        | Murata GCM1555C1H150JA16D  |
| C47                              |      1 | Capacitor, 15pF, 50V, ceramic, C0G/NP0, 0402        | Murata GCM1555C1H150JA16D  |
| C50                              |      2 | Capacitor, 220µF, Tant Poly, 6.3V, 2917             | Panasonic 6TPF220M5L       |
| L1                               |      1 | inductor, 1µH, thin film, 2.5mm x 2.0mm             | TDK TFM252012ALMA1R0MTAA   |
| L3, L4                           |      2 | inductor, 1.5µH, thin film, 2.5mm x 2.0mm           | TDK TFM252012ALMA1R5MTAA   |
| R10, R30, R40                    |      4 | Resistor, 20 Ohms, 1%, 0402                         | RC0402FR-0720RL or similar |
| R11                              |      1 | Resistor, 14.3 kOhm, 1%, 0402                       | ERJ-2RKF1432X or similar   |
| R12, R32, R42                    |      3 | Resistor, 71.5 kOhm, 1%, 0402                       | ERJ-2RKF7152X or similar   |
| R14, R24, R34, R44               |      4 | Resistor, 10 kOhm, 1%, 0402                         | RC0402FR-0710KL or similar |
| R31                              |      1 | Resistor, 57.6 kOhm, 1%, 0402                       | ERJ-2RKF5762X or similar   |
| R41                              |      1 | Resistor, 165 kOhm, 1%, 0402                        | ERJ-2RKF1653X or similar   |
| U1                               |      1 | MAX20029B PMIC, quad output, step-down, low voltage | MAX20029BATIA/V+           |
| -                                |      1 | PCB: MAX20029B EV KIT                               | MAX20029BEVKIT#            |

## MAX20029B EV Kit Schematic

<!-- image -->

│

## MAX20029B EV Kit PCB Layouts

MAX20029B EV Kit Component Placement Guide-Top Assembly

<!-- image -->

MAX20029B EV Kit PCB Layout-Inner Layer 1

<!-- image -->

MAX20029B EV Kit PCB Layout-Top Layer

<!-- image -->

MAX20029B EV Kit PCB Layout-Inner Layer 2

<!-- image -->

│

MAX20029B EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX20029B EV Kit Component Placement Guide-Bottom Assembly

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                   | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------|-----------------|
|                 0 | 12/17           | Initial release                                                                               | -               |
|                 1 | 7/20            | Replaced title MAX20029B with MAX20029B/MAX20029D, updated Evaluating IC Capabilities section | 1-7             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. 0a[iP ,nteJrated reserves the riJht to chanJe the circuitr\ and specifications without notice at an\ tiPe.

<!-- image -->

│

Evaluates: MAX20029B/MAX20029D