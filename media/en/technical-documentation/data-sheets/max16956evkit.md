<!-- lastmod 2022-08-02 -->
## MAX1695 Evaluation Kit

## General Description

The MAX16956 evaluation kit (EV kit) demonstrates the MAX16956 36V, 300mA, 2µA ultra-low quiescent current, synchronous  buck  converter  with  integrated  high-side and low-side switches. The EV kit operates over a wide input range of 3.5V to 36V, while using only 2µA quiescent current at no load (internal divider versions). The EV kit has a switching frequency of 2.1MHz and a voltage output of  3.3V  at  300mA. The EV kit comes standard with the fixed 3.3V output version, but can easily be modified to evaluate the 5V or the programmable output versions of the MAX16956.

The EV kit features selectable jumpers to enable/disable (JU2) the device, as well as to select either forced-PWM or  skip  modes  of  operation  (JU1).  The  EV  kit  provides a RESET test point to monitor the voltage quality of the device.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| BIAS, RESET   |     2 | Test points                                                         |
| C1            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K  |
| C2, C6        |     2 | 22µF ±10%, 10V X7R ceramic capacitors (1206) Murata GRM31CR71A226K  |
| C3            |     1 | 1µF ±10%, 10V X7R ceramic capacitor (0603) Murata GRM188R71A105K    |
| C5            |     1 | 2.2µF ±10%, 50V X7R ceramic capacitor (1206) Murata GRM31CR71H225K  |
| C7            |     1 | 0.01µF ±10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H103K |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Features

- 3.5V	to	36V	Input	Voltage	Range
- 3.3V	at	300mA	Output
- 2µA	Quiescent	Current	in	Standby	Mode	(Internal Divider	Versions	Only)
- Fixed	2.1MHz	Switching	Frequency
- Forced-PWM	or	Skip	Mode	Operation
- RESET Output
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| C8            |     0 | Not installed, capacitor (0402)                                          |
| JU1, JU2      |     2 | 3-pin headers                                                            |
| L1            |     1 | 10µH, 1.2A inductor Coilcraft LPS4018-103MLB                             |
| L2            |     1 | 0Ω ±5% resistor (1206) Panasonic ERJ-8GEY0R00V                           |
| R1, R2, R4    |     0 | Not installed, resistors (0402) R1, R4 are short (PCB trace); R2 is open |
| R3            |     1 | 100kΩ ±5% resistor (0402)                                                |
| U1            |     1 | Automotive mini buck converter (10 µMAX ® -EP*) Maxim MAX16956AUBB/V+    |
| -             |     2 | Shunts                                                                   |
| -             |     1 | PCB: MAX16956 EV KIT                                                     |

Evaluates: MAX1695

<!-- image -->

## Component Suppliers

| SUPPLIER                       | PHONE        | WEBSITE                |
|--------------------------------|--------------|------------------------|
| Coilcraft, Inc.                | 847-639-6400 | www.coilcraft.com      |
| Murata Americas                | 800-241-6574 | www.murataamericas.com |
| Panasonic Corp.                | 800-344-2112 | www.panasonic.com      |
| TDK Corp.                      | 847-803-6100 | www.component.tdk.com  |
| Würth Electronik GmbH & Co. KG | 201-785-8800 | www.we-online.com      |

Note:

Indicate that you are using the MAX16956 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX16956	EV	kit
- 14V,	100mA	power	supply
- Electronic	load	capable	of	sinking	up	to	300mA
- Two	digital	voltmeters

## Procedure

The	EV	kit	is	fully	assembled	and	tested.	Follow	the	steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is installed on pins 1-2 of jumper JU1 (forced PWM mode).
- 2) Verify that a shunt is installed on pins 1-2 of jumper JU2 (output enabled).
- 3) Connect	 the	 positive	 and	 negative	 terminals	 of	 the power	 supply	 to	 the	 VBAT	 and	 PGND	 test	 pads, respectively.
- 4) Connect	 the	 positive	 and	 negative	 terminals	 of	 the electronic	 load	 to	 the	 VOUT	 and	 PGND	 test	 pads, respectively.
- 5) Connect	a	voltmeter	across	the	VOUT	and	PGND	test pads.
- 6) Connect	a	voltmeter	 across	 the RESET and  PGND test pads.
- 7) Set	the	power-supply	voltage	to	14V.
- 8) Turn	on	the	power	supply.
- 9) Enable the electronic load.
- 10) Verify	that	the	voltmeter	connected	to	VOUT	measures approximately 3.3V.
- 11) Verify that the voltmeter connected to RESET measures approximately 5V.

## Detailed Description of Hardware

The  MAX16956  EV  kit  is  a  fully  assembled  and  tested circuit board to evaluate the performance of the MAX16956 synchronous  step-down  controller.  The  EV  kit  operates over a 3.5V to 36V wide input range, while using only 2µA quiescent  current  at  no  load  (internal  divider  versions). The EV kit has a switching frequency of 2.1MHz and a voltage output of 3.3V at 300mA.

The EV kit can be configured to operate in forced fixedfrequency PWM mode or low-quiescent current skip mode using  jumper  JU1.  The  EV  kit  can  be  enabled/disabled using jumper JU2. The EV kit also provides a RESET test point to monitor the voltage quality of the converter.

## Configuring the Output Voltage (VOUT)

The  EV  kit  comes  standard  with  the  fixed  3.3V  output version but can easily be modified to evaluate the 5V or the programmable output versions of the device.

To  evaluate  the  5V  version,  simply  replace  U1  with  the fixed  5V  version  of  the  device.  To  evaluate  the  adjustable	output	version,	remove	the	R1	short	and	connect	a resistive	divider	from	the	output	(VOUT)	to	FB	to	AGND. Select	R2	(FB	to	AGND	resistor)	to	be	less	than	or	equal to	 100kΩ.	 Calculate	 R1	 (VOUT	 to	 FB	 resistor)	 with	 the following	equation:

<!-- formula-not-decoded -->

where V FB = 1V.

When evaluating other versions of the device, the inductor, input capacitors, and output capacitors might need to change.	For	further	information,	refer	to	the Applications Information section	in	the	MAX16956	IC	data	sheet.

Evaluates: MAX1695

## MAX1695 Evaluation Kit

## Mode of Operation

The EV kit features jumper JU1 to configure the device's mode	 switch-control	 input.	 Connect	 the	 MODE	 pin	 to BIAS	 (pins	 1-2	 on	 JU1)	 to	 enable	 forced-PWM	 mode. Connect	the	MODE	pin	to	ground	(pins	2-3	on	JU1)	or leave  open  to  enable  skip-mode  operation  under  light loads. Table 1 summarizes JU1's functions.

## Enable Control

The EV kit features jumper JU2 to control the enable (EN) input.	 Connect	the	EN	pin	to	SUP	(pins	1-2	on	JU2)	to enable	the	device.	Connect	the	EN	pin	to	ground	(pins	2-3 on JU2) to disable the device.

Table 1. Mode of Operation (JU1)

| SHUNT POSITION   | MODE PIN          | MODE            |
|------------------|-------------------|-----------------|
| 1-2*             | Connected to BIAS | Forced-PWM mode |
| 2-3              | Connected to PGND | Skip mode       |

* Default position.

Evaluates: MAX1695

The EN input can also be enabled by applying an external signal	greater	than	2.4V	(typ)	at	the	EN	and	PGND	PCB pads.	See	Table	2	for	proper	JU2	settings.

## RESET Output

The  EV  kit  provides  a RESET test  point  to  monitor the  status  of  the  device  output. RESET becomes  high impedance	and	is	pulled	to	the	BIAS	voltage	level	through resistor	 R3	 after	 the	 regulator	 output	 increases	 above 92%	of	the	nominal	regulated	voltage. RESET goes low when	 the	 regulator	 output	 drops	 to	 below	 90%	 of	 the nominal regulated voltage.

Table 2. Enable Control (JU2)

| SHUNT POSITION   | EN1 PIN                         | VOUT                                                         |
|------------------|---------------------------------|--------------------------------------------------------------|
| 1-2*             | Connected to SUP                | Enabled                                                      |
| 2-3              | Connected to PGND               | Disabled                                                     |
| Not installed    | Connected to an external source | Enabled with logic-high on EN; Disabled with logic-low on EN |

* Default position.

Figure 1. MAX16956 EV Kit Schematic

<!-- image -->

Figure 2. MAX16956 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX16956 EV Kit PCB Layout-Component Side

<!-- image -->

## Evaluates: MAX1695

Figure 4. MAX16956 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 5. MAX16956 EV Kit Component Placement GuideSolder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16956EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX1695

## MAX16956 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/13            | Initial release | -               |

For information on other Maxim Integrated products, visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

<!-- image -->

Evaluates: MAX16956