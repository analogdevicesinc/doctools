<!-- lastmod 2022-08-03 -->
## MAX14670 Evaluation Kit

## General Description

The MAX14670 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX14670 and MAX14671 bidirectional current-blocking, high-input overvoltage protectors with adjustable OVLO. The EV kit features LED output reading and a USB-powered option for logic pins.

## Component List

| DESIGNATION            |   QTY | DESCRIPTION                                                             |
|------------------------|-------|-------------------------------------------------------------------------|
| C1, C2                 |     2 | 1µF ±10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J105KA01D  |
| C3                     |     1 | 4.7µF ±20%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J475M080AB   |
| C4, C5                 |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104KA93D |
| C6, C7                 |     2 | 1µF ±10%, 25V X5R ceramic capacitors (0603) Murata GRM188R61E105KA12D   |
| C8                     |     1 | 0.1µF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E104KA01D  |
| J1                     |     1 | USB-B connector FCI 61729-0010BLF                                       |
| J2-J4                  |     3 | Power terminals Phoenix Contact 1729018                                 |
| JU1-JU3, JU5, JU7, JU8 |     6 | 2-pin single-row headers                                                |
| JU4, JU6               |     2 | 3-pin single-row headers                                                |
| LED1                   |     1 | Red LED Lite-On LTST-C150EKT                                            |
| LED2, LED3             |     2 | Green LEDs OSRAM Opto LG N971-KN-1                                      |
| R1, R11, R12, R15, R16 |     5 | 1kΩ ±1% resistors (0805)                                                |
| R2, R18, R20           |     3 | 100kΩ ±1% resistors (0805)                                              |
| R3, R13, R14           |     3 | 10kΩ ±1% resistors (0805)                                               |

## Benefits and Features

- 3V	to	28V	Operating	Voltage	Range
- Evaluates	Bidirectional	OVLO	and	Adjustable	OVLO
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

| DESIGNATION                |   QTY | DESCRIPTION                                                     |
|----------------------------|-------|-----------------------------------------------------------------|
| R4                         |     1 | 23.2kΩ ±1% resistor (0805)                                      |
| R5                         |     1 | 9.31kΩ ±1% resistor (0805)                                      |
| R6                         |     1 | 20kΩ potentiometer Bourns 3266W-1-203LF                         |
| R7-R10                     |     0 | Not installed, resistors (0805)                                 |
| R17, R19                   |     2 | 22kΩ ±5% resistors (0805)                                       |
| TP1, TP8, TP10, TP11, TP18 |     5 | Red test points                                                 |
| TP2, TP3, TP9, TP12, TP13  |     5 | Black test points                                               |
| TP4, TP14                  |     2 | White test points                                               |
| TP5, TP15                  |     2 | Yellow test points                                              |
| TP6, TP16                  |     2 | Orange test points                                              |
| TP7, TP17                  |     2 | Green test points                                               |
| U1                         |     1 | Bidirectional overvoltage protector (15 WLP) Maxim MAX14670EWL+ |
| U2                         |     1 | Bidirectional overvoltage protector (15 WLP) Maxim MAX14671EWL+ |
| U3                         |     1 | Dual inverter (6 SC70) Fairchild NC7WZ04P6X                     |
| U4                         |     1 | LDO linear regulator (6 SOT23) Maxim MAX8880EUT+                |
| -                          |     8 | Shunts                                                          |
| -                          |     1 | PCB: MAX14670 EVKIT                                             |

<!-- image -->

## MAX14670 Evaluation Kit

## Component Suppliers

| SUPPLIER                                  | PHONE        | WEBSITE                |
|-------------------------------------------|--------------|------------------------|
| Bourns, Inc.                              | 408-496-0706 | www.bourns.com         |
| FCI Electronics Interconnection Solutions | 800-237-2374 | www.fciconnect.com     |
| Lite-On, Inc.                             | 408-946-4873 | www.us.liteon.com      |
| Murata Americas                           | 800-241-6574 | www.murataamericas.com |
| OSRAM Opto Semiconductors                 | 888-446-7726 | www.osram-os.com       |
| Phoenix Contact, Inc.                     | 800-888-7388 | www.phoenixcontact.com |
| TDK Corp.                                 | 847-803-6100 | www.component.tdk.com  |

Note: Indicate that you are using the MAX14670 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX14670	EV	kit
- 25V	DC	power	supply
- Multimeter
- USB-A	male	to	 USB-B	 male	 cable	 or	 5V	 DC	 power supply

## Procedure

The	EV	kit	is	fully	assembled	and	tested.	Follow	the	steps below	to	verify	board	operation:

- 1)  Verify that all jumpers are in their default positions.
- 2)  Connect	 the	 USB	 cable	 to	 J1	 from	 a	 computer (or	connect	5V	DC	power	supply	to	TP8).
- 3)  Verify	LED1	is	on.
- 4)  Connect	 6V	 DC	 power	 supply	 to	 TP1.	 Verify	 OUT (TP18)	is	6V	and	LED2	is	on.
- 5)  Increase	voltage	on	DC	power	supply	to	TP1.	Verify OUT	voltage	goes	down	and	LED2	is	off	when	input reaches	about	6.8V	(OVLO).
- 6)  Turn	 off	 the	 power	 supply	 and	 remove	 it	 from	 TP1. Connect	it	to	TP11	and	set	the	voltage	to	15V.
- 7)  Turn	 on	 the	 power	 supply	 and	 verify	 OUT	 (TP18)	 is 15V	and	LED3	is	on.
- 8)  Increase	voltage	on	DC	power	supply	to	TP11.	Verify OUT	voltage	goes	down	and	LED3	is	off	when	input reaches	about	15.5V	(OVLO).

## Table 1. LED Indicator (LED1-LED3)

| LED   | DESCRIPTION                                               |
|-------|-----------------------------------------------------------|
| LED1  | LED1 is on when VBUS/5V supply for logic pins is powered. |
| LED2  | LED2 is on when MAX14670 ACOK is asserted.                |
| LED3  | LED3 is on when MAX14671 ACOK is asserted.                |

## Table 2. Pullup Voltage (JU1-JU3)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                        |
|----------|------------------|------------------------------------|
| JU1      | Installed*       | V CC is set to 1.8V through R4.    |
| JU1      | Not installed    | V CC is not set through R4.        |
| JU2      | Installed        | V CC is set to 2.6V through R5.    |
| JU2      | Not installed*   | V CC is not set through R5.        |
| JU3      | Installed        | V CC is set through R6 (variable). |
| JU3      | Not installed*   | V CC is not set through R6.        |

## Detailed Description of Hardware

The MAX14670 EV kit is a fully assembled and tested circuit board demonstrating the MAX14670 and MAX14671 bidirectional  current-blocking,  high-input  overvoltage protector	 IC	 in	 a	 15-bump	 surface-mount	 wafer-level package	(WLP).

The EV kit also features LEDs to indicate the power for logic pins and ACOK status (see Table 1).

## Pullup Voltage

The EV kit features jumpers to select pullup voltage (V CC ) for	OTG\_EN.	Install	a	jumper	in	positions	shown	in	Table 2	to	change	the	voltage.

Evaluates: MAX14670/MAX1467

## MAX14670 Evaluation Kit

## OVLO Threshold

Use	jumpers	JU4	and	JU6	to	select	internal	or	external OVLO	threshold	(see	Table	3	for	jumper	settings).

Use	 these	 equations	 to	 calculate	 the	 external	 OVLO threshold:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Table 3. OVLO Threshold (JU4, JU6)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                     |
|----------|------------------|---------------------------------------------------------------------------------|
| JU4      | 1-2              | MAX14670 OVLO is connected to R7/R8 voltage divider (external OVLO threshold).  |
| JU4      | 2-3*             | MAX14670 OVLO is connected to ground (internal OVLO threshold).                 |
| JU6      | 1-2              | MAX14671 OVLO is connected to R9/R10 voltage divider (external OVLO threshold). |
| JU6      | 2-3*             | MAX14671 OVLO is connected to ground (internal OVLO threshold).                 |

## Table 4. OTG Enable Input (JU5, JU7)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                            |
|----------|------------------|----------------------------------------|
| JU5      | Installed        | MAX14670 OTG_EN is connected to V CC   |
| JU5      | Not installed*   | MAX14670 OTG_EN is connected to ground |
| JU7      | Installed        | MAX14671 OTG_EN is connected to V CC   |
| JU7      | Not Installed*   | MAX14671 OTG_EN is connected to ground |

## Evaluates: MAX14670/MAX1467

## OTG Enable Input

Use	jumpers	JU5	and	JU7	to	select	OTG\_EN	high	or	low (see Table 4 for jumper settings).

## Two Inputs

The	EV	kit	features	jumper	JU8,	which	can	be	set	to	dem -onstrate using two devices for two input sources to one output	(see	Table	5	for	jumper	settings).

## Table 5. Two Inputs (JU8)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                    |
|----------|------------------|------------------------------------------------|
| JU8      | Installed        | MAX14671ACOK is connected to device's OVLO     |
| JU8      | Not installed*   | MAX14671ACOK is not connected to device's OVLO |

Figure 1. MAX14670 EV Kit Schematic

<!-- image -->

Figure 2. MAX14670 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluates: MAX14670/MAX1467

Figure 3. MAX14670 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX14670 EV Kit PCB Layout-Internal Layer 1

<!-- image -->

Figure 5. MAX14670 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

Figure 6. MAX14670 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14670EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX14670/MAX1467

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

Evaluates: MAX14670/MAX14671