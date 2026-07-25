<!-- lastmod 2022-08-04 -->
## MAX209 Evaluation Kit

## General Description

The  MAX20029  EV  kit  is  a  fully  assembled  and  tested PCB that demonstrates the capabilities of the MAX20029 power-management  IC  (PMIC),  which  comprises  four low-voltage  step-down  converters.  The  IC  operates  at a  3V  to  5.5V  input  supply  voltage,  regulates  to  a  1V  to 4V voltage range, and delivers up to 1.5A of current at each  of  its  outputs.  The  converters  are  high-frequency switchers,  operating  at  2.2MHz. The  high  switching  frequency allows for reduced component values and sizes, including a single ceramic output capacitor on each rail. All channels have independent undervoltage/overvoltage comparators at both input and output, current limiting, and fault-flag  outputs. The  EV  kit  ships  fully  assembled  and tested, ready for immediate evaluation of the IC.

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

Evaluates: MAX209/MAX209C

## Quick Start

## Required Equipment

- MAX20029 EV kit
- 5V, 3A power supply
- Appropriate  resistive  loads  (depending  on  selected output  voltage  and  current  capability),  or  electronic loads for each of the outputs
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect a 5V power supply to VSUP (J1) and PGND (J2). Activate the supply.
- 2) Verify that PG1-PG4 are at logic-low levels (J14, J24, J34, and J44).
- 3) Populate jumpers (J13, J23, J33, and J43) to activate all/selected outputs.
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

The IC installed on the board is a MAX20029ATIA/V+. It has  its  four  outputs  set  through  resistor-dividers  on  the board at V OUT1  = 1.2V, V OUT2  = 1.5V, V OUT3  = 1.8V, and VOUT4 = 3.3V, with 1.5A current limit on them all.

## Evaluates: MAX20029/MAX20029C

To test a version of the chip with internally fixed output voltages, as well as the MAX20029C, the user can remove the  appropriate  resistors  (R12,  R22,  R32,  R42),  and replace the existing resistors (R11, R21, R31, and R41) with  0Ω  values  to  create  a  direct  feedback  connection from the VOUT\_ nodes to the OUTS\_ pins. Alternatively, the  MAX20029CEVKIT# can be used if output voltages for all channels are internally fixed.

An  external  square  wave  can  be  applied  to  the  SYNC pin (J3) to cause the IC to switch at a different frequency. Maxim suggests using a 50% duty cycle for the square wave. The supported switching frequency (f SW ) range is from 1.7MHz up to 2.5MHz.

Three-pin headers J10, J20, J30, and J40 are provided for ease-of-loop measurements (for each of the regulators).

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX20029EVKIT#  | EV Kit |
| MAX20029CEVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX20029 EV Kit Bill of Materials

| REFERENCE DESIGNATOR   | QTY   | DESCRIPTION                                        | MFG. PART NUMBER           |
|------------------------|-------|----------------------------------------------------|----------------------------|
| C1, C2, C3, C4         | 4     | Capacitor, 2.2µF, 25V, ceramic, X7R, 0805          | Murata GRM21BR71E225KA73   |
| C5                     | 1     | Capacitor, 0.47µF, 16V, ceramic, X7R, 0603         | Murata GCM188R71C474KA55D  |
| C6, C7                 | 2     | Capacitor, 22µF, 10V, ceramic, X7R, 1210           | Murata GCM32ER71A226ME12L  |
| C8, C19, C29, C39, C49 | -     | Open, not populated                                | -                          |
| C17 *                  | 1     | Capacitor, 68pF, 50V, ceramic, C0G/NP0, 0402       | Murata GCM1555C1H680JA16D  |
| C18, C28, C39, C49     | 4     | Capacitor, 22µF, 10V, ceramic, X7T, 0805           | Murata GRM21BD71A226ME44   |
| C27 *                  | 1     | Capacitor, 33pF, 50V, ceramic, C0G/NP0, 0402       | Murata GCM1555C1H330JA16D  |
| C37 *                  | 1     | Capacitor, 15pF, 50V, ceramic, C0G/NP0, 0402       | Murata GCM1555C1H150JA16D  |
| C47 *                  | 1     | Capacitor, 15pF, 50V, ceramic, C0G/NP0, 0402       | Murata GCM1555C1H150JA16D  |
| C50                    | 1     | Capacitor, 220µF Tant Poly, 6.3V, 2917             | Panasonic 6TPF220M5L       |
| L1, L2, L3, L4         | 4     | Inductor, 1.5µH, thin film, 2.5mm x 2.0mm          | TDK TFM252012ALMA1R5MTAA   |
| R10, R20, R30, R40     | 4     | Resistor, 20 Ohms, 1%, 0402                        | RC0402FR-0720RL or similar |
| R11 *                  | 1     | Resistor, 14.3 kOhm, 1%, 0402                      | ERJ-2RKF1432X or similar   |
| R12, R22, R32, R42 *   | 4     | Resistor, 71.5 kOhm, 1%, 0402                      | ERJ-2RKF7152X or similar   |
| R14, R24, R34, R44     | 4     | Resistor, 10 kOhm, 1%, 0402                        | RC0402FR-0710KL or similar |
| R21 *                  | 1     | Resistor, 35.7 kOhm, 1%, 0402                      | ERJ-2RKF3572X or similar   |
| R31 *                  | 1     | Resistor, 57.6 kOhm, 1%, 0402                      | ERJ-2RKF5762X or similar   |
| R41 *                  | 1     | Resistor, 165 kOhm, 1%, 0402                       | ERJ-2RKF1653X or similar   |
| U1                     | 1     | MAX20029 PMIC, quad output, step-down, low voltage | MAX20029ATIA/V+ **         |
| -                      | -     | PCB: MAX20029 EV KIT                               | MAX20029EVKIT#             |

## MAX20029 EV Kit Schematic

<!-- image -->

│

## MAX20029C EV Kit Schematic

<!-- image -->

│

## MAX20029 EV Kit PCB Layouts

MAX20029 EV Kit Component Placement Guide-Top Assembly

<!-- image -->

MAX20029 EV Kit PCB Layout-Inner Layer 1

<!-- image -->

MAX20029 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX20029 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

│

## MAX20029 EV Kit PCB Layouts

MAX20029 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX20029 EV Kit Component Placement Guide-Bottom Assembly

<!-- image -->

│

## MAX20029C EV Kit PCB Layouts

MAX20029C EV Kit Component Placement Guide-Top Assembly

<!-- image -->

MAX20029C EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX20029C EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX20029 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                       | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 11/17           | Initial release                                                                                                                                                                                   | -               |
|                 1 | 4/19            | Added MAX20029C to title, updated Detailed Description of Hardware , Ordering Information , MAX20029 EV Kit Bill of Materials ; added MAX20029C EV Kit Schematic and MAX20029C EV Kit PCB Layouts | 1-8             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. 0a[iP ,nteJrated reserves the riJht to chanJe the circuitr\ and specifications without notice at an\ tiPe.

<!-- image -->

│

Evaluates: MAX20029/MAX20029C