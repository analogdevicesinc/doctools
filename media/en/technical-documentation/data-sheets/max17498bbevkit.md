<!-- lastmod 2022-08-02 -->
## MAX17498BB Evaluation Kit

## General Description

The MAX17498BB evaluation kit (EV kit) is a fully assembled  and  tested  surface-mount  circuit  board  to  evaluate the  MAX17498B peak-current-mode controller in a stepup (boost) configuration. The EV kit output is configured for 24V output voltage, which can supply up to 100mA of current. The input voltage range is from 4.5V to 10V.

The EV kit features a 500kHz fixed frequency for optimum efficiency and component size. High efficiency up to 94.2% is  achieved  using  a  boost  converter,  providing  an  output power up to 2.4W.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                           |
|---------------|-------|---------------------------------------------------------------------------------------|
| C1            |     1 | 10µF ±20%, 25V aluminum electrolytic capacitor (4.3mm x 4.3mm) Panasonic EEE-FK1E100R |
| C2            |     1 | 2.2µF ±10%, 10V X7R ceramic capacitor (0805) Murata GRM21BR71A225K                    |
| C3            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K                    |
| C4            |     1 | 270pF ±5%, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H271J                     |
| C5            |     1 | 47000pF ±10%,16V X7R ceramic capacitor (0402) Murata GRM155R71C473K                   |
| C6            |     1 | 2.2µF ±10%, 50V X7R ceramic capacitor (1206) Murata GRM31CR71H225K                    |
| C7            |     1 | 1µF ±10%, 25V X7R ceramic capacitor (0805) Murata GRM21BR71E105K                      |

Evaluates: MAX17498B in a

Step-Up (Boost) Configuration

## Features

- 4.5V	to	10V	Input	Range
- Output	Voltage:	24V	at	100mA
- 500kHz	Switching	Frequency
- Integrated	n-Channel	MOSFET
- Efficiency	Up	to	94.2%
- Resistor-Programmable	UVLO/OVI	Threshold
- Open-Drain	Power-Good	Signal	(PGOOD)
- Low-Cost	Boost	Converter	Design
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| D1            |     1 | 40V, 1A Schottky diode (SOD123) Central Semi CMMSH1-40               |
| L1            |     1 | 56µH, 0.75A inductor (6mm x 6mm) Coilcraft LPS6235-563ML             |
| R1            |     1 | 43.2kΩ ±1% resistor (0402)                                           |
| R2            |     1 | 71.5kΩ ±0.1% resistors (0402)                                        |
| R3            |     1 | 374kΩ ±1% resistor (0402)                                            |
| R4            |     1 | 20kΩ ±1% resistor (0402)                                             |
| R5            |     1 | 2.37kΩ ±1% resistor (0402)                                           |
| R6, R8        |     2 | 0Ω ±5% resistors (0402)                                              |
| R7            |     0 | Not installed, resistor (0402)                                       |
| R9            |     1 | 10kΩ ±5% resistor (0402)                                             |
| U1            |     1 | Peak-current-mode, boost regulator (16 TQFN-EP*) Maxim MAX17498BATE+ |
| -             |     1 | PCB: MAX17498BB EVALUATION KIT                                       |

* EP = Exposed pad.

<!-- image -->

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Central Semiconductor Corp             | 631-435-1110 | www.centralsemi.com         |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp                         | 800-344-2112 | www.panasonic.com           |

Note: Indicate that you are using the MAX17498BATE+ when contacting these component suppliers.

## Quick Start

## Required Equipment

-  MAX17498BB	EV	kit
- 4.5V	to	10V,	600mA	DC	power	supply
- Voltmeter

## VOUT Setup Procedure

The	EV	kit	is	fully	assembled	and	tested.	Follow	the	steps below	to	verify	board	operation:

- 1)  Connect	the	positive	lead	of	the	DC	voltmeter	to	the VOUT	PCB	pad.
- 2)  Connect	the	negative	lead	of	the	DC	voltmeter	to	the PGND	PCB	pad.
- 3)  Set	 the	 DC	 power-supply	 output	 to	 5V.	 Disable	 the power supply.
- 4)  Connect	the	power-supply	positive	terminal	to	the	VIN PCB	pad.
- 5)  Connect	 the	 power-supply	 negative	 terminal	 to	 the PGND	PCB	pad.
- 6)  Enable	the	power	supply.
- 7)  Verify	 that	 VOUT	is	24V	throughout	the	4.5V	to	10V input voltage range.

## Detailed Description

The  MAX17498BB  EV  kit  provides  a  proven  design  to evaluate	the	MAX17498B	high-efficiency	step-up	DC-DC converter	in	a	space-saving	16-pin	TQFN	package.	The EV  kit  is  configured  for  a  24V  output  voltage  that  can supply  up  to  100mA  of  current.  The  EV  kit  features  a 500kHz fixed switching frequency for optimum efficiency and component size.

This EV kit uses the device, a peak-current-mode, pulsewidth	 modulating	 (PWM)	 regulator	 with	 an	 integrated switch.	 This	 PWM	 controller	 varies	 the	 duty	 cycle	 to compensate  for  the  variation  in  input  voltage  and  the output  load  to  maintain  a  constant  output  voltage.  The duty	cycle	determines	the	on/off	duration	of	the	internal switch. The duty cycle is controlled by the feedback loop consisting	 of	 voltage-divider	 resistors	 (R3,	 R4),	 internal error	amplifier,	compensation	components	(R5,	C3,	C4), and	the	PWM	comparator	inside	the	device.

The EV kit sets the peak inductor current-limit threshold to 864mA	using	resistor	R1.	Capacitor	C5	sets	VOUT	softstart to 5.7ms.

## Current Limit

Resistor	R1	sets	the	EV	kit's	inductor	peak-current	limit	to 864mA.	The	device	turns	off	its	internal	switch	when	the peak current reaches the current limit. To reconfigure the peak current limit  to  a  different  value,  use  the  following equation	to	choose	a	new	value	for	R1:

<!-- formula-not-decoded -->

where	I PK is the peak inductor current in amps.

## Undervoltage Lockout and Overvoltage Protection

The	EV	kit	features	a	UVLO	and	OVI	circuit	that	prevent operation  below  the  programmed  input-supply  startup voltage	 and	 above	 the	 overvoltage	 threshold.	 Resistors R6-R8	 set	 the	 undervoltage	 and	 overvoltage	 thresh -olds.	 With	 0Ω	 resistors	 in	 the	 place	 of	 R6	 and	 R8,	 the undervoltage threshold is set at 4.5V (typ) and the overvoltage	 detection	 is	 disabled.	 To	 reconfigure	 the	 UVLO and	OVI	voltages,	refer	to	the Startup Voltage and Input Overvoltage-Protection  Setting  (EN/UVLO,  OVI) section in	the	MAX17498B	IC	data	sheet

EN/UVLO	and	OVI	PCB	pads	are	available	for	monitoring the voltages present at the respective inputs.

## Evaluates: MAX17498B in a Step-Up	(Boost)	Con¿guration

## MAX17498BB Evaluation Kit

## Soft-Start

The EV kit provides an option to configure the circuit softstart.	 Capacitor	 C5	 configures	 the	 soft-start	 time	 (t SS ) to 5.7ms. To reconfigure the soft-start time to a different value,	 use	 the	 following	 equation	 to	 choose	 a	 new	 C5 value:

<!-- formula-not-decoded -->

where t SS is expressed in ms.

## Evaluates: MAX17498B in a Step-Up	(Boost)	Con¿guration

## Slope Compensation

Slope	compensation	is	necessary	for	stable	operation	of the  device  when  operated  at  a  duty  cycle  greater  than 50%,  in  addition  to  the  loop  compen  sation  required  for small-signal stability. The EV kit operates at a maximum steady state duty cycle of 82%. To reconfigure the slope compensation to a different value, use the following equation	to	choose	a	new	R2	resistor:

<!-- formula-not-decoded -->

where	R2	is	in	kΩ	and	S E is	in	mV/µs.

Figure 1. MAX17498BB EV Kit Schematic

<!-- image -->

Figure 2. MAX17498BB EV Kit Component Placement Guide-Component Side

<!-- image -->

## Evaluates: MAX17498B in a Step-Up	(Boost)	Con¿guration

Figure 3. MAX17498BB EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX17498B EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17498BBEVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX17498B in a

Step-Up	(Boost)	Con¿guration

## MAX17498BB Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17498B in a

Step-Up (Boost) Configuration