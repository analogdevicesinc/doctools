<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX16977 evaluation kit (EV kit) demonstrates the MAX16977 2A, current-mode step-down converter with an integrated high-side switch. The EV kit operates over a wide 3.5V to 36V input voltage range. The EV kit has a switching frequency of 2.2MHz and a voltage output of 5V at 2A.

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C1            |     1 | 47µF Q 20%, 50V aluminum electrolytic capacitor (8mm x 10.20mm) Panasonic EEE-TG1H470UP |
| C2, C4        |     2 | 4.7µF Q 10%, 50V X7R ceramic capacitors (1210) Murata GCM32ER71H475KA55L                |
| C3, C5        |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GCM188R71H104KA57D                 |
| C6            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K                      |
| C7            |     1 | 22µF ±10%, 10V X7R ceramic capacitor (1210) Murata GCM32ER71A226KE12L                   |
| C8            |     0 | Not installed, ceramic capacitor (1210)                                                 |
| C10           |     1 | 1µF ±10%, 10V X7R ceramic capacitor (0402) TDK C1005X5R1A105K                           |
| C12           |     1 | 2700pF ±10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H272KA                    |
| C13           |     1 | 12pF ±5%, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H120J                        |

<!-- image -->

## MAX16977 Evaluation Kit Evaluates: MAX1697

## Features

- S Wide 3.5V to 36V Input Supply Range
- S Pin-Programmable Adjustable Output Voltage
- S Adjustable Switching Frequency (2.2MHz Default)
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

* EP = Exposed pad.

| DESIGNATION                              |   QTY | DESCRIPTION                                                   |
|------------------------------------------|-------|---------------------------------------------------------------|
| C14, C15                                 |     0 | Not installed, ceramic capacitors (0402)                      |
| D1                                       |     1 | 3A, 60V Schottky diode (SMB) Diodes B360B-13-F                |
| EXT_SUP, EXT_VBAT, FSYNC, OUT, POWERGOOD |     5 | Red test points                                               |
| GND                                      |     4 | Black test points                                             |
| JU1                                      |     1 | 3-pin header                                                  |
| L1                                       |     1 | 4.7µH, 6A inductor (7mm x 6.9mm) Würth 744311470              |
| LX                                       |     0 | Not installed, red test point                                 |
| R1, R9                                   |     2 | 20k I Q 1% resistors (0402)                                   |
| R2                                       |     1 | 12.1k I Q 1% resistor (0402)                                  |
| R3                                       |     1 | 10k I 5% resistor (0402)                                      |
| R4, R6, R7, R10                          |     0 | Not installed, resistors (0402)                               |
| R8                                       |     1 | 0 I Q 5% resistor (1210)                                      |
| R12                                      |     1 | 0 I Q 5% resistor (0402)                                      |
| U1                                       |     1 | Automotive step-down converter (16 TSSOP-EP*) MAX16977RAUE/V+ |
| -                                        |     1 | Shunt                                                         |
| -                                        |     1 | PCB: MAX16977 EVALUATION KIT                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quick Start

## Required Equipment

- MAX16977	EV	kit
- 3.5V	to	36V,	3A	DC	power	supply
- Electronic	load	capable	of	2A
- Digital	voltmeter	(DVM)

## Procedure

The	EV	kit	is	fully	assembled	and	tested.	Follow	the	steps below	to	verify	board	operation. Caution: Do not turn on supplies until all connections are completed.

- 1)  Verify  that  jumper  JU1  is  in  the  default  position,  as shown in Table	1 .
- 2)  Connect	 the	 power	 supply	 between	 the	 EXT\_VBAT and nearest GND test points.
- 3)  Connect	the	2A	electronic	load	between	the	OUT	and nearest GND test points.
- 4)  Connect	the	DVM	between	the	OUT	and	nearest	GND test points.
- 5)  Turn on the power supply.
- 6)  Enable	the	electronic	load.
- 7)  Verify that the voltage at the OUT test point is 5V.

## Detailed Description of Hardware

The  MAX16977  EV  kit  demonstrates  the  MAX16977 wide  input  voltage  range,  high-frequency,  step-down converter.  The  EV  kit  operates  over  a  wide  5V  to  36V input voltage range. The output voltage is set for 5V at 2A,	but	can	be	adjusted	from	1V	to	10V.

## Enable (EN)

Place  a  shunt  in  the  1-2  position  on  jumper  JU1  for normal  operation.  To  place  the  device  into  shutdown mode, move the shunt on JU1 to the 2-3 position.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16977 Evaluation Kit

## Evaluates: MAX16977

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| TDK Corp.                              | 948-803-6100 | www.component.tdk.com       |
| Würth Electronik GmbH & Co. KG         | 201-785-8800 | www.we-online.com           |

Note: Indicate that you are using the MAX16977 when contacting these component suppliers.

## Table 1. EN Configuration (JU1)

| SHUNT POSITION   | DESCRIPTION                                                               |
|------------------|---------------------------------------------------------------------------|
| 1-2*             | Connects the device's EN pin to the voltage at VSUP for normal operation. |
| 2-3              | Connects the device's EN pin to GND to enter shutdown mode.               |

## Output

The default output of the EV kit is set at 5V. To adjust the output voltage (V OUT ), place a 0 I on R10, remove R12, and change resistors R4 and R6 appropriately using the following formula:

<!-- formula-not-decoded -->

where V FB  = 1V.

## Synchronization Input (FSYNC)

The  EV  kit  uses  resistor  R9  to  connect  the  FSYNC  pin to  ground,  which  sets  the  switching  frequency  to  the internal clock.

An  external  logic-level  clock  can  also  connect  to  the provided  FSYNC  test  point  to  synchronize  the  device. The	external	signal	frequency	must	be	10%	higher	than the internal clock frequency for proper operation.

## Setting the Switching Frequency (FOSC)

The	 EV	 kit	 switching	 frequency	 is	 set	 by	 resistor	 R2, connected from FOSC to GND. The switching frequency can	be	configured	by	selecting	an	appropriate	value	for R2. Use the following equation to select R2:

<!-- formula-not-decoded -->

where f  SW   is  the  desired  switching  frequency  in  hertz. The adjustment range for f SW  is 1MHz to 2.2MHz.

Refer to Figure 2. Switching Frequency vs. R FOSC in the MAX16977  IC  data  sheet  for  a  graphical  approach  of selecting  the  correct  R FOSC   (R2)  value  for  the  desired switching frequency.

## MAX16977 Evaluation Kit

## Evaluates: MAX16977

<!-- image -->

Figure 1. MAX16977 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX16977 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX16977 EV Kit PCB Layout-Component Side

<!-- image -->

## MAX16977 Evaluation Kit

## Evaluates: MAX16977

Figure 4. MAX16977 EV Kit PCB Layout-Layer 2

<!-- image -->

Figure 5. MAX16977 EV Kit PCB Layout-Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 6. MAX16977 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX16977 EV Kit Component Placement GuideSolder Side

<!-- image -->

## MAX16977 Evaluation Kit

## Evaluates: MAX16977

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16977EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX16977 Evaluation Kit

## Evaluates: MAX16977

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                   | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------|-----------------|
|                 0 | 1/12            | Initial release               | -               |
|                 1 | 5/12            | Updated C7, L1, and R2 values | 1               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.