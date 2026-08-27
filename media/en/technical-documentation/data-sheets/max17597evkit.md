<!-- lastmod 2022-08-02 -->
## MAX17597 Evaluation Kit

## General Description

The MAX17597 evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  circuit  board  to  evaluate  the MAX17597  peak-current-mode  controller  in  a  step-up (boost) configuration. The EV kit output is configured for 24V output voltage that can supply up to 1A of current. The input voltage range is from 8V to 14V.

High  efficiency  up  to  95.6%  is  achieved  using  a  boost converter operating at a switching frequency of 600kHz, providing an output power up to 24W.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                          |
|---------------|-------|--------------------------------------------------------------------------------------|
| C1            |     1 | 22µF ±20%, 25V aluminum electrolytic capacitor (5.3mm x 5.3mm) Panasonic EEEFK1E220R |
| C2            |     1 | 1µF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E105K                     |
| C3            |     1 | 0.047µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C473KA01D             |
| C4            |     1 | 2.2µF ±10%, 10V X7R ceramic capacitor (0603) Murata GRM188R71A225K                   |
| C5            |     1 | 0.033µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71H333KA61D             |
| C6, C8        |     2 | 330pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H331K                   |
| C7            |     1 | 10µF ±10%, 25V X7R ceramic capacitor (1210) Murata GRM32DR71E106K                    |
| C9-C11        |     3 | 4.7µF ±10%, 50V X7R ceramic capacitors (1206) Murata GRM31CR71H475K                  |
| C13           |     0 | Not installed, ceramic capacitor (1206)                                              |

## Evaluates: MAX17597 in a Step-Up (Boost) Configuration

## Features

- 8V	to	14V	Input	Range
- Output	Voltage:	24V	at	1A
- 600kHz	Switching	Frequency
- Efficiency	Up	to	95.6%
- Low-Cost	Boost	Converter	Design
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| D1            |     1 | 40V, 4A Schottky diode (SMB) Vishay SSB44                           |
| L1            |     1 | 6.8µH, 3.8A inductor (12mm x 12mm) Coilcraft MSS1246-682ML          |
| Q1            |     1 | 40V, 21A n-channel MOSFET (PowerPak, 8 SO) Vishay SiR836DP          |
| R1            |     1 | 32.4kΩ ±1% resistor (0603)                                          |
| R2, R6, R7    |     3 | 18kΩ ±0.1% resistors (0603)                                         |
| R3            |     1 | 340kΩ ±1% resistor (0603)                                           |
| R4            |     1 | 1.96kΩ ±1% resistor (0603)                                          |
| R5            |     1 | 187kΩ ±1% resistor (0603)                                           |
| R8            |     1 | 100Ω ±0.1% resistor (0603)                                          |
| R9, R12       |     2 | 0.13Ω ±1%, 0.5W resistors (1206) Susumu RL1632R-R130-F              |
| R10           |     1 | 16.5kΩ ±1% resistor (0603)                                          |
| R11           |     0 | Not installed, resistor (0603)                                      |
| U1            |     1 | Peak-current-mode boost controller (16 TQFN-EP*) Maxim MAX17597ATE+ |
| -             |     1 | PCB: MAX17597 EVALUATION KIT                                        |

* EP = Exposed pad.

<!-- image -->

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp                         | 800-344-2112 | www.panasonic.com           |
| Susumu International USA               | 208-328-0307 | www.susumu-usa.com          |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX17597ATE+ when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX17597	EV	kit
- 8V	to	14V,	3.5A	DC	power	supply
- Voltmeter

## VOUT Setup Procedure

The	EV	kit	is	fully	assembled	and	tested.	Follow	the	steps below	to	verify	board	operation:

- 1)  Connect	the	positive	lead	of	the	DC	voltmeter	to	the VOUT	PCB	pad.
- 2)  Connect	the	negative	lead	of	the	DC	voltmeter	to	the PGND	PCB	pad.
- 3)  Set	 the	 DC	 power-supply	 output	 to	 12V.	 Disable	 the power supply.
- 4)  Connect	the	power-supply	positive	terminal	to	the	VIN PCB	pad.
- 5)  Connect	 the	 power-supply	 negative	 terminal	 to	 the PCB	PGND	pad.
- 6)  Enable the power supply.
- 7)  Verify	that	VOUT	is	24V	throughout	the	input	voltage range of 8V to 14V.

## Detailed Description

The  MAX17597  EV  kit  demonstrates  the  MAX17597 peak-current-mode boost controller device. The EV kit is configured for 24V output voltage that can supply up to 1A of current.

This	 EV	 kit	 uses	 the	 device,	 a	 16-pin	 TQFN	 package with  exposed  pad,  peak-current  mode,  and  pulse-width modulating	(PWM)	controller.	This	PWM	controller	varies the  duty  cycle  to  compensate  for  the  variation  in  input voltage and the output load to maintain a constant output voltage. The duty cycle determines the on/off duration of the	 MOSFET	 (Q1).	 The	 duty	 cycle	 is	 controlled	 by	 the feedback	loop	consisting	of	voltage-divider	resistors	(R3, R2),	 internal	 error	 amplifier,	 compensation	 components (R4,	C5,	C6),	and	the	PWM	comparator	inside	the	device.

The EV kit sets the minimum peak inductor current-limit threshold	to	4.46A	using	resistors	R9	and	R12.	The	EV	kit switching	frequency	is	set	to	600kHz	using	resistor	R10. Capacitor	C3	sets	VOUT	soft-start	to	5.6ms.

## Current Limit

Current-sense	 resistors	 R9	 and	 R12	 set	 the	 EV	 kit's minimum inductor peak current limit to 4.46A. The device turns	off	the	Q1	MOSFET	when	the	peak	current	reaches the current limit. To reconfigure the peak-current limit to a different value, use the following equation to choose a new	current-sense	resistor:

<!-- formula-not-decoded -->

where	I PEAK is the peak inductor current in amps.

## Undervoltage Lockout and Overvoltage Protection

The	EV	kit	features	a	UVLO	and	OVI	circuit	that	prevent operation  below  the  programmed  input-supply  startup voltage	 and	 above	 the	 overvoltage	 threshold.	 Resistors R5-R7	set	the	undervoltage	and	overvoltage	thresholds. The  circuit  undervoltage  and  overvoltage  thresholds are  set  at  7.5V  (typ)  and  15V  (typ),  respectively.  To reconfigure	 the	 UVLO	 and	 OVI	 voltages,	 refer	 to	 the Startup Voltage and Input Overvoltage-Protection Setting (EN/UVLO,  OVI) section  in  the  MAX17595/MAX17596/ MAX17597	IC	data	sheet.

EN/UVLO	and	OVI	PCB	pads	are	available	for	monitoring the voltages present at the respective inputs.

## Evaluates: MAX1759 in a Step-Up	(Boost)	Con¿guration

## MAX1759 Evaluation Kit

## Soft-Start

The EV kit provides an option to configure the circuit softstart.	 Capacitor	 C3	 configures	 the	 soft-start	 time	 (t SS ) to 5.6ms. To reconfigure the soft-start time to a different value,	 use	 the	 following	 equation	 to	 choose	 a	 new	 C3 value:

<!-- formula-not-decoded -->

where t SS is expressed in ms.

## Slope Compensation

Slope	compensation	is	necessary	for	stable	operation	of the  device  when  operated  at  a  duty  cycle  greater  than 50%,  in  addition  to  the  loop  compensation  required  for small-signal stability. The EV kit operates at a maximum steady-state duty cycle of 68%. To reconfigure the slope compensation  to  a  different  value,  use  the  following equation	to	choose	a	new	R1	resistor	value:

<!-- formula-not-decoded -->

where	R1	is	in	kΩ	and	S E is in mV/µs.

## Switching Frequency

The  EV  kit  switching  frequency  is  set  to  600kHz  by resistor	R10.	To	configure	the	device's	switching	frequency to a different value, between 100kHz and 1MHz, use the following	equation	to	choose	a	new	R10	resistor	value:

<!-- formula-not-decoded -->

where f SW	is	in	Hz	and	R10	is	in	Ω.

## Evaluates: MAX1759 in a Step-Up	(Boost)	Con¿guration

## Frequency Dithering

The EV kit switching frequency can be dithered in a range of	±10%	to	reduce	EMI.	There	are	two	specifications	for the frequency dithering, the frequency (how often) of dithering,	and	the	amount	(how	much)	of	dithering.	Capacitor C12	configures	the	dither	frequency	using	the	following equation:

<!-- formula-not-decoded -->

where  f DITHER 	 is	 in	 Hz	 and	 C12	 is	 in	 farads,	 and	 the dither frequency f DITHER is recommended to be set close to 1kHz.

Resistors	R10	and	R11	configure	the	amount	of	dithering in  percentage  (%)  of  the  switching  frequency  using  the following	equation:

<!-- formula-not-decoded -->

The  EV  kit  is  shipped  with  the  frequency  dithering disabled,	 the	 DITHER/SYNC	 pin	 is	 shorted	 to	 SGND through	 the	 PCB	 trace.	 To	 set	 the	 desired	 frequency dither,	 cut	 the	 PCB	 trace	 to	 capacitor	 C12	 and	 install resistor	 R11	 with	 the	 appropriate	 values.	 The	 DITHER/ SYNC	PCB	pad	is	available	for	monitoring	the	signal	at the	DITHER/SYNC	pin.

Figure 1. MAX17597 EV Kit Schematic

<!-- image -->

Figure 2. MAX17597 EV Kit Component Placement Guide-Component Side

<!-- image -->

## Evaluates: MAX1759 in a Step-Up	(Boost)	Con¿guration

Figure 3. MAX17597 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX17597 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17597EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX1759 in a

Step-Up	(Boost)	Con¿guration

## MAX17597 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17597 in a

Step-Up (Boost) Configuration