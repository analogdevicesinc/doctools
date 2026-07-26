<!-- lastmod 2022-08-02 -->
## MAX17502H Evaluation Kit

## Evaluates: MAX17502H in TSSOP Package

## General Description

The MAX17502H evaluation kit (EV kit) provides a proven  design  to  evaluate  the  MAX17502H  high-efficiency, high-voltage,  synchronous  step-down  DC-DC  converter in  a  TSSOP  package.  The  EV  kit  uses  the  device  to generate 2.5V at load currents up to 1A from a 4.5V to 60V  input  supply.  The  device  features  a  forced-PWM control scheme that provides constant switchingfrequency operation at all load and line conditions.

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C1            |     1 | 2.2µF ±10%, 100V X7R ceramic capacitor (1210) Murata GRM32ER72A225K |
| C2            |     1 | 1µF ±10%, 6.3V X7R ceramic capacitor (0603) Murata GRM188R70J105K   |
| C3            |     1 | 6800pF ±10%, 25V X7R ceramic capacitor (0402) Murata GRM155R71E682K |
| C4            |     1 | 47µF ±10%, 6.3V X7R ceramic capacitor (1210) Murata GRM32ER70J476K  |
| C5            |     1 | 3300pF ±10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H332K |
| C6            |     0 | Not installed, ceramic capacitor (0402)                             |
| C7            |     1 | 33µF, 80V aluminum electrolytic (D = 8mm) Panasonic EEEFK1K330P     |
| C8            |     0 | Not installed, ceramic capacitor (1210)                             |

## Features

- Operates	from	a	4.5V	to	60V	Input	Supply
- 2.5V	Output	Voltage
- 1A	Output	Current
- 300kHz	Switching	Frequency
- Enable/UVLO	Input
- Resistor-Programmable	UVLO	Threshold
- Open-Drain RESET Output
- Overcurrent	and	Overtemperature	Protection
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C9            |     1 | 47pF ±10%, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H470J |
| JU1           |     1 | 3-pin header                                                      |
| L1            |     1 | 22µH, 1.7A inductor (6mm x 6mm x 3.5mm) Coilcraft LPS6235-223ML   |
| R1            |     1 | 3.32MΩ ±1% resistor (0402)                                        |
| R2            |     1 | 1MΩ ±1% resistor (0402)                                           |
| R3            |     1 | 16.9kΩ ±1% resistor (0402)                                        |
| R4            |     1 | 69.8kΩ ±1% resistor (0402)                                        |
| R5            |     1 | 39.2kΩ ±1% resistor (0402)                                        |
| R6            |     1 | 10kΩ ±1% resistor (0402)                                          |
| R7            |     0 | Not installed, resistor (0402)                                    |
| TP1, TP2      |     0 | Not installed, test points                                        |
| U1            |     1 | Buck converter (14 TSSOP) Maxim MAX17502HAUD+                     |
| -             |     1 | Shunts                                                            |
| -             |     1 | PCB: MAX17502HU EVALUATION KIT                                    |

<!-- image -->

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |

Note: Indicate that you are using the MAX17502 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

-  MAX17502H	EV	kit
- 4.5V	to	60V,	2A	DC	input	power	supply
- Load	capable	of	sinking	1A
- Function	generator
- Digital	voltmeter	(DVM)

## Procedure

The	EV	kit	is	fully	assembled	and	tested.	Follow	the	steps below	to	verify	the	board	operation. Caution: Do not turn on power supply until all connections are completed.

- 1)  Set	the	power	supply	at	a	voltage	between	4.5V	and 60V.	Disable	the	power	supply.
- 2)  Connect the positive terminal of the power supply to the	 VIN	 PCB	 pad	 and	 the	 negative	 terminal	 to	 the nearest	PGND	PCB	pad.	Connect	the	positive	terminal of	the	1A	load	to	the	VOUT	PCB	pad	and	the	negative terminal	to	the	nearest	PGND	PCB	pad.
- 3)  Connect	the	DVM	across	the	VOUT	PCB	pad	and	the nearest	PGND	PCB	pad.
- 4)  Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper	JU1.
- 5)  Turn on the DC power supply.
- 6)  Enable	the	load.
- 7)  Verify that the DVM displays the expected voltage.

To	 turn-on/off	 the	 part	 from	 EN/UVLO,	 follow	 the	 steps below:

- 1)  Remove resistors R1 and R2 and the jumper connected	across	pins	1-2	on	jumper	JU1.
- 2)  Connect the power supply to the EV kit and turn on the power supply. Set the power supply at a voltage between	4.5V	and	60V.
- 3)  Connect	the	function	generator	output	to	the	EN/UVLO test loop.
- 4)  The	 EN/UVLO	 rising	 threshold	 is	 1.24V	 and	 falling threshold is 1.11V, so make sure that the voltage high and voltage low levels of the function generator output are greater than 1.24V and less than 1.11V, respectively.
- 5)  While powering down the EV kit, first disconnect the function	generator	output	from	the	EN/UVLO	test	loop and then turn off the DC power supply.

## Detailed Description

The  MAX17502H  EV  kit  provides  a  proven  design  to evaluate  the  MAX17502H  high-efficiency,  high-voltage, synchronous  step-down  DC-DC  converter  in  a  TSSOP package. The EV kit generates 2.5V at load currents up to 1A from a 4.5V to 60V input supply. The EV kit features a	300kHz	fixed	switching	frequency	for	optimum	efficiency and	component	size.	The	device	features	a	forced-PWM control scheme that provides constant switching-frequency operation at all load and line conditions.

The	 EV	 kit	 includes	 an	 EN/UVLO	 PCB	 pad	 to	 enable control of the converter output. An additional RESET PCB pad	is	available	for	monitoring	the	converter	output.	The VCC	PCB	pad	helps	measure	the	internal	LDO	voltage.

## Soft-Start Input (SS)

The	 device	 utilizes	 an	 adjustable	 soft-start	 function	 to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted	by	the	value	of	C3,	the	external	capacitor	from SS	to	GND.	To	adjust	the	soft-start	time,	determine	C3 using	the	following	formula:

<!-- formula-not-decoded -->

where t SS   is  the  required  soft-start  time  in  milliseconds and	C3	is	in	nanofarads.

## Table 1. Regulator Enable (EN/UVLO) Jumper JU1 Description

| SHUNT POSITION   | EN/UVLO PIN                                            | MAX17502_ OUTPUT                                  |
|------------------|--------------------------------------------------------|---------------------------------------------------|
| 1-2*             | Connected to V IN                                      | Enabled                                           |
| Not installed    | Connected to center node of resistor-divider R1 and R2 | Enabled, UVLO level set through R1 and R2 divider |
| 2-3              | Connected to GND                                       | Disabled                                          |

## Regulator Enable/Undervoltage Lockout Level (EN/UVLO)

The	 device	 features	 an	 EN/UVLO	 input.	 For	 normal operation,	a	shunt	should	be	installed	across	pins	1-2	on jumper	JU1.	To	disable	the	output,	install	a	shunt	across pins	2-3	on	JU1	and	the	EN/UVLO	pin	is	pulled	to	GND. See	Table	1	for	JU1	settings.

## Setting the Undervoltage-Lockout Level

The	 device	 offers	 an	 adjustable	 input	 undervoltagelockout  level.  Set  the  voltage  at  which  the  device  turns on  with  a  resistive  voltage-divider  connected  from  V IN to	 GND	(see	Figure	1).	Connect	the	center	node	of	the divider	to	EN/UVLO.

Choose	R1	to	be	3.3MΩ	and	then	calculate	R2	as	follows:

<!-- formula-not-decoded -->

where V INU is the voltage at which the device is required to turn on. Ensure that V INU 	is	higher	than	0.8	x	V OUT .

## Adjusting Output Voltage

The	device	offers	 an	 adjustable	 output	 voltage.	 Set	 the output voltage with a resistive voltage-divider connected from the positive terminal of the output capacitor (V OUT ) to	 GND	(see	Figure	6).	Connect	the	center	node	of	the divider	to	FB/VO.

To	 choose	the	values	of	R4	and	R5,	select	the	parallel combination	of	R4	and	R5,	R P to	be	less	than	30kΩ.	Once R P is	selected,	calculate	R4	as	follows:

<!-- formula-not-decoded -->

Calculate	R5	as	follows:

<!-- formula-not-decoded -->

## EV Kit Performance Report

Figure 1. MAX17502H Load and Line Regulation

<!-- image -->

Figure 2. MAX17502H Efficiency

<!-- image -->

## MAX17502H Evaluation Kit Evaluates: MAX17502H in TSSOP Package

<!-- image -->

Figure 3. MAX17502H Full Load Bode Plot (V IN  = 24V)

Figure 4. MAX17502H No Load to 500mA Load Transient

<!-- image -->

Figure 5. MAX17502H 500mA to 1A Load Transient

<!-- image -->

## MAX17502H Evaluation Kit

Figure 6. MAX17502H EV Kit Schematic

<!-- image -->

<!-- image -->

Figure 7. MAX17502H EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 8. MAX17502H EV PCB Layout-Component Side

Figure 9. MAX17502HU EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 10. MAX17502HU EV Kit PCB Layout-Top Solder Mask

<!-- image -->

Figure 11. MAX17502HU EV Kit PCB Layout-Bottom Solder Mask

<!-- image -->

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17502HUEVKIT# | EV Kit |

<!-- image -->

## MAX17502H Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/12           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

Evaluates: MAX17502H in TSSOP Package