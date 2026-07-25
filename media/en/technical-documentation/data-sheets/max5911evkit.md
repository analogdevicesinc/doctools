<!-- lastmod 2022-08-03 -->
## MAX5911 Evaluation Kit

## General Description

The MAX5911 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that demonstrates the MAX5911 fully integrated hot-swap solution for negative  supply  rails.  The  device  allows  the  safe  insertion and removal of circuit cards into live backplanes or ports without  causing  problematic  glitches  on  the  negative power-supply  rail.  The  EV  kit  operates  over  a  -16V  to -65V voltage range and has an adjustable undervoltage lockout  (UVLO)  set  by  default  to  -28V.  During  startup, the device regulates the current between the backplane power source and the load to 280mA and monitors four fault  parameters:  UVLO,  power-not-good,  zero-current detection, and thermal shutdown.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                         |
|---------------|-------|-------------------------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 100V X7R ceramic capacitor (0805) TDK C2012X7R2A104K                    |
| C2            |     0 | Not installed, capacitor (E-case)                                                   |
| C3            |     2 | 1µF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E105K TDK C1608X5R1E105M |
| C4, C5        |     0 | Not installed, ceramic capacitors (0603)                                            |
| C6            |     0 | Not installed, ceramic capacitor (1210)                                             |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX5911 when contacting these component suppliers.

## Features

- Provides	Safe	Hot	Swap	for	-16V	to	-65V	Power Supplies
- 280mA	Current	Limit
- Adjustable	Undervoltage	Threshold	with	a	Default	Set to -28V
- Zero-Current	Detection
- Enable	Input/Fault	Output
- Adjustable	Output-Voltage	Gate	Ramp
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                  |
|---------------|-------|----------------------------------------------|
| FAULT         |     1 | Red test point                               |
| JU1           |     1 | 2-pin header                                 |
| R1, R2        |     0 | Not installed, resistors (0603)              |
| R3            |     1 | 10kΩ ±5% resistor (0603)                     |
| R4            |     1 | 3.3kΩ ±5% resistor (0603)                    |
| R5            |     1 | 0Ω resistor (1206)                           |
| R6            |     0 | Not installed, resistor (2512)               |
| U1            |     1 | -48V hot-swap switch (8 SO) Maxim MAX5911ESA |
| -             |     1 | Shunts                                       |
| -             |     1 | PCB: MAX5911 EVKIT                           |

Evaluates: MAX5911

<!-- image -->

## MAX5911 Evaluation Kit

## Quick Start

## Recommended Equipment

- MAX5911	EV	kit
- -65V,	0.5A	DC	power	supply	(PS1)
- +3.3V,	0.5A	DC	power	supply	for	logic	supply	(PS2)
- Dummy	 load	 capable	 of	 sinking	 up	 to	 280mA	 (the current should be above ~15mA)
- Digital	voltmeter

## Procedure

The	EV	kit	is	fully	assembled	and	tested.	Follow	the	steps below to verify operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Connect	the	negative	DC	power	supply	(PS1)	across the	VIN	and	AGND	PCB	pads.
- 2)  Connect	the	+3.3V	DC	power	supply	(PS2)	across	the LOGIC	and	DGND	PCB	pads.
- 3)  Connect	the	load	across	the	VOUT	and	AGND	PCB pads.
- 4)  Connect	 a	 voltmeter	 between	 the	 VOUT	 and	AGND PCB	pads.
- 5)  Verify that no shunt is installed across jumper JU1.
- 6)  Turn on the load and set it to a level between 15mA and 280mA.
- 7)  Turn	 on	 the	 +3.3V	 power	 supply	 (PS2)	 and	 set	 the voltage	to	+3.3V.
- 8)  Turn	on	the	negative	power	supply	(PS1)	and	increase the input voltage to above -28V.
- 9)  The EV kit is now ready for further evaluation.

## Detailed Description of Hardware

The  MAX5911  EV  kit  demonstrates  the  MAX5911  fully integrated hot-swap solution for negative supply rails and allows	the	safe	insertion/removal	of	circuit	cards	into	live backplanes or ports without causing problematic glitches on  the  negative  power-supply  rail.  The  EV  kit  operates over  a  -16V  to  -65V  voltage  range  and  has  a  resistoradjustable  UVLO  set  internally  to  -28V.  During  startup, the device regulates the current between the backplane power source and the load to 280mA and monitors four fault  parameters:  UVLO,  power-not-good,  zero-current detection, and thermal shutdown.

## Changing the Undervoltage-Lockout Setting

The UVLO value is internally set to -28V if the UVLO pin is  left  open circuit. The lockout voltage can be changed with a resistive divider from V IN 	to	AGND.	Resistor	foot -prints	R1	and	R2	are	provided	on	the	EV	kit	to	provide	an option	to	adjust	the	UVLO	threshold.	Use	R1	≥	10kΩ,	then calculate	R2	using	the	following	equation:

<!-- formula-not-decoded -->

where V IN(UVLO) is the desired lockout voltage.

## Logic Control/Enable Input

The	enable	input	responds	to	+3.3V	or	+5V	logic	signals and	forces	the	internal	FET	off	if	it	is	pulled	low.	This	fea -ture allows the host to disconnect the load from the power bus,	if	required.	Additionally,	all	fault	conditions	that	latch the	internal	FET	off	must	be	cleared	by	pulsing	ENABLE low	for	at	least	200ns,	then	reasserting	ENABLE	before normal operation can resume.

## MAX5911 Evaluation Kit

The	 EV	 kit	 provides	 PCB	 pads	 (LOGIC	 and	 DGND)	 to apply	the	+3.3V	or	+5V	logic	supply	and	jumper	JU1	to control	 the	 ENABLE	 input.	 See	Table	 1	 for	 jumper	 JU1 configuration.

## Table 1. Enable Input (ENABLE) Jumper JU1 Description

| SHUNT POSITION   | SHDN PIN                                   | DEVICES   |
|------------------|--------------------------------------------|-----------|
| Installed        | Connected to DGND                          | Disabled  |
| Not installed*   | Pulled high to V LOGIC through resistor R3 | Enabled   |

* Default position.

## Gate Connections

GATE	connects	to	the	gate	of	the	internal	n-channel	power MOSFET.	Normally	this	pin	should	be	left	open	circuit.	To slow down the voltage ramp at VOUT, connect capacitors from	GATE	to	VOUT	and	VIN.	Size	the	capacitors	so	that the	 GATE	to	VIN	capacitor	(C5)	is	10	times	the	size	of the	GATE	to	VOUT	capacitor	(C4).	This	technique	to	slow down  the  output  voltage  ramp  also  causes  the  output discharge time to increase if the capacitor values exceed approximately	1nF.	Additionally,	this	technique	causes	the time delay for a power-not-good fault to increase.

## Zero-Current Detection

If	the	load	current	drops	below	8mA	(typ)	for	over	350ms, FAULT is	pulled	low	and	the	FET	is	latched	off.	ENABLE must  be  pulsed  low  and  then  brought  high  again  to release FAULT and enable VOUT.

## Evaluates: MAX5911

Figure 1. MAX5911 EV Kit Schematic

<!-- image -->

<!-- image -->

Figure 2. MAX5911 EV Kit Component Placement GuideComponent Side

Figure 3. MAX5911 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX5911 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX5911EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX5911

## MAX5911 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

Evaluates: MAX5911