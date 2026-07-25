<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX8530/MAX8531 Evaluation Kit

## General Description

The MAX8530/MAX8531 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains two separate low-dropout (LDO) regulator circuits. The left circuit utilizes a MAX8530 and is configured for outputs of 2.85V at 200mA and 2.60V at 150mA. The right circuit uses a low-noise MAX8531 and is configured for outputs of 2.85V at 200mA and 2.85V at 150mA.

The MAX8530/MAX8531 EV kit features on-board shutdown control and a jumper-selectable RESET output voltage (MAX8530 only). Both circuits are separate from each other and do not share a common ground plane.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| A1            |     1 | MAX8530ETT 6-pin QFN (Note 1)                                             |
| C1, C4        |     2 | 2.2µF ±20%, 10V X5R ceramic capacitors (0805) TDK C2012X5R1A225M (Note 2) |
| C2, C5        |     2 | 2.2µF ±20%, 6.3V X5R ceramic capacitors (0603) TDK 1608X5R0J225M          |
| C3, C6        |     2 | 1.0µF ±20%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105M          |
| C7            |     1 | 0.01µF ±20%, 25V X7R ceramic capacitor (0402) TDK C1005X7R1E103M          |
| JU1, JU2, JU3 |     3 | Jumpers, 3-pin headers                                                    |
| R1            |     1 | 100k Ω ±5% resistor (0402)                                                |
| U1            |     1 | MAX8530EBTJO (2 x 3 UCSP)                                                 |
| U2            |     1 | MAX8531EBTJJ (2 x 3 UCSP)                                                 |
| None          |     3 | Shunts                                                                    |
| None          |     1 | MAX8530/MAX8531 EV kit PC board                                           |

Note 1: A1 is for display purposes only (not a functional component).

Note 2: If the input voltage is less than 6.3V, capacitors C1 and C4 can be reduced in size.

## Procedure (MAX8530)

The MAX8530/MAX8531 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Set the variable-DC power supply to 3.6V.
- 2) Ensure the variable-DC power supply is turned off.
- 3) Ensure shunts are placed across pins 1 and 2 of jumpers JU1 and JU2.
- 4) Connect the power supply to the IN pad and the corresponding GND pad.
- 5) Connect a voltmeter across the OUT1 pad and the corresponding GND pad.
- 6) Connect a voltmeter across the OUT2 pad and the corresponding GND pad.
- 7) Connect a voltmeter across the RESET pad and the GND pad (located beside the IN pad).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## Features

- ♦ Dual-Output Power Supply
- ♦ 2.5V to 6.5V Input Supply Range
- ♦ Selectable (140ms) RESET Output (MAX8530)
- ♦ Low-Noise (40µVRMS) Outputs (MAX8531)
- ♦ On-Board Shutdown Control
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

MAX8530: 2.85V at 200mA, 2.60V at 150mA

MAX8531: 2.85V at 200mA, 2.85V at 150mA

## Ordering Information

| PART                 | TEMP RANGE   | IC PACKAGE   |
|----------------------|--------------|--------------|
| MAX8530/MAX8531EVKIT | 0°C to +70°C | 2 x 3 UCSP   |

## Quick Start

## Recommended Equipment

- One variable-DC power supply capable of supplying up to 6.5V at 0.5A
- Three voltmeters

## MAX8530/MAX8531 Evaluation Kit

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX8530 or MAX8531 when contacting this component supplier.

- 8) Turn on the variable-DC power supply.
- 9) Verify the voltage at OUT1 is 2.85V.
3. 10)Verify the voltage at OUT2 is 2.60V.
4. 11)Verify the voltage at RESET is 2.85V.

## Procedure (MAX8531)

The MAX8530/MAX8531 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Set the variable-DC power supply to 3.6V.
- 2) Ensure  the variable-DC power supply is turned off.
- 3) Ensure a shunt is placed across pins 1 and 2 of jumper JU3.
- 4) Connect the power supply to the IN2 pad and the corresponding GND2 pad.
- 5) Connect a voltmeter across the OUT21 pad and the corresponding GND2 pad.
- 6) Connect a voltmeter across the OUT22 pad and the corresponding GND2 pad.
- 7) Turn on the variable-DC power supply.
- 8) Verify the voltage at OUT21 is 2.85V.
- 9) Verify the voltage at OUT22 is 2.85V.

## Table 1. Shutdown Selection

| JUMPER   | SHUNT POSITION   | SHDN PIN         | DESCRIPTION                                                                                            |
|----------|------------------|------------------|--------------------------------------------------------------------------------------------------------|
| JU1/JU3  | 1 and 2*         | Connected to IN  | MAX8530/MAX8531 Outputs Enabled. RESET is high impedance when all outputs are in regulation (MAX8530). |
| JU1/JU3  | 2 and 3          | Connected to GND | MAX8530/MAX8531 Outputs Disabled. RESET is low impedance (MAX8530).                                    |

* Default configuration: JU1/JU3 (1 and 2).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description

The MAX8530/MAX8531 EV kit contains two separate low-dropout (LDO) regulator circuits. Either circuit can be powered from a DC power supply with a 2.5V to 6.5V input range.

The left circuit  (MAX8530) provides two fixed output voltages (2.85V and 2.60V) at 200mA and 150mA. A MAX8530 in a 6-pin UCSP package is used for this circuit.  PC board pads for the SHDN signal and the RESET signal are provided on the circuit to interface with an external controller.

The right circuit  (MAX8531) provides two fixed output voltages (2.85V and 2.85V) at 200mA and 150mA. A low-noise MAX8531 in a 6-pin UCSP™ package is used for this circuit. PC board pads for the SHDN signal are provided on the circuit to interface with an external controller.

The MAX8530/MAX8531 EV kit provides on-board shutdown control as well as a jumper-selectable RESET output voltage for the MAX8530. The left and right circuits are separate from each other and do not share a common ground plane.

## Shutdown Control

The MAX8530/MAX8531 has an active-low shutdown control input that enables/disables both of the power outputs. JU1 (MAX8530) or JU3 (MAX8531) selects the circuit operating modes: shutdown or normal operation. When driving SHDN with an external signal, remove the shunt and connect a signal source to the SHDN pad (MAX8530) or the SHDN2 pad (MAX8531). See Table 1 for shunt positions.

<!-- image -->

## MAX8530/MAX8531 Evaluation Kit

## Selecting the RESET Output Voltage (MAX8530)

The RESET pin of the MAX8530 indicates the status of the voltage at OUT1 only. Monitor this voltage at the RESET pad. The RESET pin is pulled up with a 100k Ω resistor through jumper JU2 to one of two outputs (see Table 2 for shunt positions). There is also a version that has an internal 100k Ω pullup to OUT1. Contact factory for availability.

## Table 2. RESET Output Selection

| JUMPER   | SHUNT POSITION   | DESCRIPTION                         |
|----------|------------------|-------------------------------------|
| JU2      | 1 and 2*         | RESET pin pulled up to OUT1 (2.85V) |
| JU2      | 2 and 3          | RESET pin pulled up to OUT2 (2.60V) |

<!-- image -->

Figure 1. MAX8530/MAX8531 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8530/MAX8531 Evaluation Kit

<!-- image -->

Figure 2. MAX8530/MAX8531 EV Kit Component Placement Guide-Component Side

Figure 3. MAX8530/MAX8531 EV Kit PC Board LayoutComponent Side

<!-- image -->

Figure 4. MAX8530/MAX8531 EV Kit PC Board LayoutSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4