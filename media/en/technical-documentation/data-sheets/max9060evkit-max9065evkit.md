<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX9060-MAX9065 Evaluation Kits

## General Description

The MAX9060-MAX9065 evaluation kits (EV kits) are fully assembled  and  tested  PCBs  that  evaluate  the MAX9060-MAX9064  single  comparators  and  the MAX9065 window detector comparator. The MAX9060/ MAX9061 EV kits require an external reference (REF) voltage between 0.9V and 5.5V, while the MAX9062/ MAX9063/MAX9064 come with an internal reference voltage of 0.2V. The MAX9065 comes preprogrammed with trip points at 3V and 4.2V. The MAX9062-MAX9065 operate from a VCC supply between 1V to 5.5V. All EV kits have a common -0.3V to +5.5V input voltage (IN) range.

The MAX9060-MAX9065 EV kits are configured to evaluate both the 4-bump UCSP™ (installed) and an optional  5-pin  SOT23  (to  do  so,  request  a  free MAX9060-MAX9065 SOT23 IC sample from the factory when ordering the EV kits).

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C1, C2        |     2 | 0.1µF ±10%, 25V X7R, ceramic capacitors (0603) Murata GRM188R71E104K TDK C1608X7R1E104K |
| JU1           |     1 | 3-pin header                                                                            |
| R1, R2        |     2 | 100k ±5% resistors* (0603)                                                              |
| U1            |     1 | See the EV Kit-Specific Component List                                                  |
| U2            |     0 | Not installed, single comparators (5 SOT23) Maxim MAX9060-MAX9065                       |
| -             |     1 | PCB: MAX9060/1/2/3/4/5 Evaluation Kit+                                                  |

UCSP is a trademark of Maxim Integrated Products, Inc.

Features

- ♦ -0.3V to +5.5V Input Voltage Range
- ♦ 0.9V to 5.5V External Reference Range (MAX9060/MAX9061)
- ♦ 1V to 5.5V VCC Range (MAX9062-MAX9065)
- ♦ 0.2V Internal Reference Voltage (MAX9062/MAX9063/MAX9064)
- ♦ 3V and 4.2V Trip Points (MAX9065)
- ♦ Evaluates 4-Bump UCSP and Optional 5-Pin SOT23 Packages
- ♦ Lead-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART TYPE             |
|-----------------------|
| MAX9060EVKIT + EV Kit |
| MAX9061EVKIT + EV Kit |
| MAX9062EVKIT + EV Kit |
| MAX9063EVKIT + EV Kit |
| MAX9064EVKIT + EV Kit |
| MAX9065EVKIT + EV Kit |

## MAX9060-MAX9065 Evaluation Kits

## EV Kit-Specific Component List

| PART          | DESIGNATION   | DESCRIPTION                                                                                            |
|---------------|---------------|--------------------------------------------------------------------------------------------------------|
| MAX9060EVKIT+ | U1            | External reference, noninverting single comparator (4 UCSP) Maxim MAX9060EBS+ (Top Mark: AFX)          |
| MAX9061EVKIT+ | U1            | External reference, inverting single comparator (4 UCSP) Maxim MAX9061EBS+ (Top Mark: AFY)             |
| MAX9062EVKIT+ | U1            | Internal reference, noninverting single comparator (4 UCSP) Maxim MAX9062EBS+ (Top Mark: AFZ)          |
| MAX9063EVKIT+ | U1            | Internal reference, inverting single comparator (4 UCSP) Maxim MAX9063EBS+ (Top Mark: AGA)             |
| MAX9064EVKIT+ | U1            | Internal reference push-pull noninverting single comparator (4 UCSP) Maxim MAX9064EBS+ (Top Mark: AGB) |
| MAX9065EVKIT+ | U1            | Single window comparator (4 UCSP) Maxim MAX9065EBS+ (Top Mark: AGC)                                    |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX9060, MAX9061, MAX9062, MAX9063, MAX9064, or MAX9065 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9060-MAX9065 Evaluation Kits

## Quick Reference

## Recommended Equipment

Before beginning, the following equipment is needed:

- Two +5V DC power supplies (VCC/REF, IN)
- Optional third +5V DC power supply (EXT for MAX9060-MAX9063 only)
- One digital multimeter (DMM)

## Detailed Description of Hardware

The MAX9060-MAX9065 EV kits are fully assembled and tested PCBs that evaluate the MAX9060-MAX9064 single comparators and the MAX9065 window detector comparator. The MAX9060/MAX9061 EV kits require an external reference (REF) voltage between 0.9V and 5.5V, while the MAX9062/MAX9063/MAX9064 EV kits have an internal reference voltage of 0.2V. The MAX9065 comes preprogrammed with trip points at 3V and 4.2V. The MAX9062-MAX9065 require VCC between 1V to 5.5V to operate. All EV kits have a common -0.3 to +5.5V input voltage (IN) range.

## VCC/REF Supply Selection

The VCC/REF pad is used to supply either a 0.9V to 5.5V reference voltage (MAX9060/MAX9061) or a 1V to 5.5V VCC supply (MAX9062-MAX9065) to the IC.

The MAX9060-MAX9065 EV kits can evaluate both 4bump UCSP (U1) and 5-pin SOT23 (U2) packages. The EV kits offer the option to power up U1 or U2 separately though configuration of jumper JU1. See Table 1 for power-up options.

## Table 1.  Jumper JU1 Functions

| SHUNT POSITION   | VCC/REF PAD                            |
|------------------|----------------------------------------|
| 1-2*             | Powers U1 (UCSP) sub circuit           |
| 2-3              | Powers optional U2 (SOT23) sub circuit |

## Procedure

The MAX9060-MAX9065 EV kits are fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is installed on pins 1-2 of jumper JU1.
- 2) Connect all power-supply ground terminals to a GND pad.
- 3) Connect the positive terminal of a DC power supply to the VCC/REF pad.
- 4) Connect the positive terminal of a DC power supply to the IN pad.
- 5) Connect the positive terminal of a DC power supply to the EXT pad (MAX9060-MAX9063 only).
- 6) Turn on the VCC/REF power supply and set it to the desired level.
- 7) Turn on the IN power supply and set it to the desired level.
- 8) Turn on the EXT power supply and set it to the desired level (MAX9060-MAX9063 only).
- 9) Monitor the output using a DMM at the OUT1 pad, and study its response to varying voltages at IN.

<!-- image -->

## EXT Pad

The EXT pad on the EV kits can be used as an external source to pull the outputs high through resistors R1 or R2 when open-drain versions of the parts are used.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9060-MAX9065 Evaluation Kits

Figure 1. MAX9060/MAX9061 EV Kits Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9060-MAX9065 Evaluation Kits

<!-- image -->

Figure 2. MAX9062/MAX9063 EV Kits Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9060-MAX9065 Evaluation Kits

Figure 3. MAX9064/MAX9065 EV Kits Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9060-MAX9065 Evaluation Kits

<!-- image -->

Figure 4. MAX9060-MAX9065 EV Kits PCB Layout-Component Placement Guide

Figure 5. MAX9060-MAX9065 EV Kits PCB Layout-Component Side

<!-- image -->

Figure 6. MAX9060-MAX9065 EV Kits PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7