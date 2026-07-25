<!-- lastmod 2022-08-03 -->
## MAX426 Evaluation Kit

## General Description

The MAX44246 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX44246  ultra-precision,  lownoise, low-drift dual-operational amplifiers (op amps) in an 8-pin µMAX M package. The EV kit circuit is preconfigured as  noninverting  amplifiers,  but  can  be  adapted  to  other topologies by changing a few components.

The EV kit comes with a MAX44246AUA+ installed.

## Component List

| DESIGNATION                        |   QTY | DESCRIPTION                                                                                                                    |
|------------------------------------|-------|--------------------------------------------------------------------------------------------------------------------------------|
| C1, C17                            |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM21BR71H104K                                                            |
| C2, C18                            |     2 | 4.7µF ±10%, 50V X7R ceramic capacitors (1206) Murata GRM31CR71H475K                                                            |
| C3-C16                             |     0 | Not installed, ceramic capacitors (0603) C3, C6, C7, C8, C10, C13-C15 are open; C4, C5, C9, C11, C12, C16 are short (PC trace) |
| INMA, INMB, INPA, INPB, OUTA, OUTB |     6 | Red multipurpose test points                                                                                                   |
| JU1-JU5                            |     5 | 2-pin headers                                                                                                                  |

## Component Supplier

| SUPPLIER                              | PHONE        | WEBSITE                     |
|---------------------------------------|--------------|-----------------------------|
| Murata Electronics North America Inc. | 770-436-1300 | www.murata-northamerica.com |

Note:

Indicate that you are using the MAX44246 when contacting this component supplier.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Features

- Accommodates	Multiple	Op-Amp	Configurations
- Component	Pads	Allow	for	Sallen-Key	Filter
- Accommodates	Easy-to-Use	Components
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

| DESIGNATION               |   QTY | DESCRIPTION                                                   |
|---------------------------|-------|---------------------------------------------------------------|
| R1, R2, R9, R10           |     4 | 1kΩ ±1% resistors (0603)                                      |
| R3, R4, R7, R11, R12, R15 |     0 | Not installed, resistors (0603)                               |
| R5, R13                   |     2 | 10kΩ ±1% resistors (0603)                                     |
| R6, R8, R14, R16          |     4 | 0Ω ±5% resistors (0603)                                       |
| TP1, TP2                  |     0 | Not installed, miniature test points                          |
| U1                        |     1 | Low-noise, precision, dual op amp (8 µMAX) Maxim MAX44246AUA+ |
| -                         |     5 | Shunts                                                        |
| -                         |     1 | PCB: MAX44246 EVALUATION KIT                                  |

Evaluates: MAX426

<!-- image -->

## Quick Start

## Required Equipment

- MAX44246 EV kit
- +36V,	10mA	DC	power	supply	(PS1)
- Two precision voltage sources
- Two digital multimeters (DMMs)

## Procedure

The	EV	kit	is	fully	assembled	and	tested.	Follow	the	steps below	to	verify	board	operation:

- 1)  Verify	 that	 all	 jumpers	 (JU1-JU5)	 are	 in	 their	 default positions, as shown in Table 1.
- 2)  Connect	 the	 positive	 terminal	 of	 the	 +36V	 supply	 to VCC	and	the	negative	terminal	to	GND	and	VEE.
- 3)  Connect	the	positive	terminal	of	the	precision	voltage source	to	INPA.	Connect	the	negative	terminal	of	the precision voltage source to GND. INMA is already connected to GND through jumper JU1.
- 4)  Connect	 the	 positive	 terminal	 of	 the	 second	 preci -sion	 voltage	 source	 to	 the	 INPB	 PCB	 pad.	 Connect the negative terminal of the precision voltage source to	GND.	INMB	is	already	connected	to	GND	through jumper JU3.
- 5)  Connect	the	DMMs	to	monitor	the	voltages	on	OUTA and	OUTB.	With	the	10kΩ	feedback	resistors	and	1kΩ series resistors, the gain of each noninverting amplifier is +11.
- 6)  Turn on the +36V power supply.
- 7)  Apply  100mV  from  the  precision  voltage  sources. Observe	the	output	at	OUTA	and	OUTB	on	the	DMMs. Both	should	read	approximately	+1.1V.
- 8)  Apply	400mV	from	the	precision	voltage	sources.	Both OUTA	and	OUTB	should	read	approximately	+4.4V.

Note: For	 dual-supply	 operation,	 a	 ±2.7V	 to	 ±18V	 can be  applied  to  VDD  and  VEE,  respectively.  In  this  case, remove	the	shunt	on	jumper	JU5.	The	rest	of	the	procedure remains the same as that of the single-supply operation.

## Detailed Description of Hardware

The MAX44246 EV kit provides a proven layout for the MAX44246  ultra-precision,  low-noise,  low-drift,  dual  op amp. The device is a single/dual-supply, dual op amp (op amp	A	and	op	amp	B)	that	is	ideal	for	ADC	buffers.

The  default  configuration  for  the  device  in  the  EV  kit is  single-supply  operation  in  noninverting  configuration. However,	 the	 device	 can	 operate	 with	 a	 dual	 supply	 as long as the voltage across the V DD  and GND pins of the IC	 do	 not	 exceed	 the	 absolute	 maximum	 ratings.	 When

Evaluates: MAX44246

operating  with  a  single  supply,  short  V EE   to  GND  using jumper	JU5 .

## Op-Amp Configurations

The  device  is  a  single/dual-supply  dual  op  amp  that  is ideal  for  differential  sensing,  noninverting  amplification, buffering, and filtering. A few common configurations are shown in the next few sections.

The following sections explain how to configure one of the device's  op  amps  (op  amp A). To  configure  the  device's second	op	amp	(op	amp	B),	the	same	equations	can	be used after modifying the component reference designators.

## Noninverting Configuration

The EV kit comes preconfigured as a noninverting amplifier.	The	gain	is	set	by	the	ratio	of	R5	and	R1.	The	EV	kit comes preconfigured for a gain of +11. The output voltage for	the	noninverting	configuration	is	given	by	the	equation below:

<!-- formula-not-decoded -->

## Inverting Configuration

To configure the EV kit as an inverting amplifier, remove the  shunt  on  jumper  JU1  and  install  a  shunt  on  jumper JU2	and	feed	an	input	signal	on	the	INMA	PCB	pad.

## Differential Amplifier

To configure the EV kit as a differential amplifier, replace R1-R3	 and	 R5	 with	 appropriate	 resistors.	 When	 R1	 = R2	and	R3	=	R5,	the	CMRR	of	the	differential	amplifier is	 determined	by	the	matching	of	the	resistor	ratios	R1/ R2	and	R3/R5.

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

## Sallen-Key Configuration

The	Sallen-Key	topology	is	ideal	for	filtering	sensor	sig -nals  with  a  second-order  filter  and  acting  as  a  buffer. Schematic	complexity	is	reduced	by	combining	the	filter and buffer operations. The EV kit can be configured in a Sallen-Key	 topology	 by	 replacing	 and	 populating	 a	 few components.	The	Sallen-Key	topology	can	be	configured as	 a	 unity-gain	 buffer	 by	 replacing	 R5	 with	 0Ω	 resistor and	removing	resistor	R1.	The	signal	is	noninverting	and applied	 to	 INPA.	 The	 filter	 component	 pads	 are	 R2-R4 and	R8,	where	some	have	to	be	populated	with	resistors and others with capacitors.

│

## MAX44246 Evaluation Kit

Lowpass Sallen-Key Filter: To	configure	the	Sallen-Key as a lowpass filter,  remove the shunt from jumper JU1, populate	the	R2	and	R8	pads	with	resistors,	and	populate the	R3	and	R4	pads	with	capacitors.	The	corner	frequen -cy	and	Q	are	then	given	by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Highpass  Sallen-Key  Filter: To	 configure	 the	 SallenKey	as	a	highpass	filter,	remove	the	shunt	from		jumper JU1,	 populate	 the	 R3	 and	 R4	 pads	 with	 resistors,	 and populate	the	R2	and	R8	pads	with	capacitors.	The	corner frequency	and	Q	are	then	given	by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Bandpass  Sallen-Key  Filter: To	 configure	 the	 SallenKey	as	a	bandpass	filter,	remove	the	shunt	from	jumper JU1,	replace	R8,	populate	the	R3	and	R4	pads	with	resis -tors,	and	populate	the	C8	and	R2	pads	with	capacitors. The	corner	frequency	and	Q	are	then	given	by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Transimpedance Amplifier (TIA)

To configure the MAX44246 EV kit as a TIA, place a shunt on	jumper	JU2	and	replace	R1	and	R2	with	0Ω	resistors. The output voltage of the TIA is the input current multiplied	by	the	feedback	resistor:

<!-- formula-not-decoded -->

where

I IN is	the	input	current	source	applied	at	the	INPA	test point

I BIAS is the input bias current

V OS is the input offset voltage of the op amp

Use	capacitor	C7	(and	C8,	if	applicable)	to	stabilize	the op	amp	by	rolling	off	high-frequency	gain	due	to	a	large cable capacitance.

## Capacitive Loads

Some	applications	require	driving	large	capacitive	loads. The	EV	kit	provides	C8	and	R6	pads	for	optional	capaci -tive-load	driving	circuit.	C8	simulates	the	capacitive	load while	R6	acts	as	an	isolation	resistor	to	improve	the	opamp's stability at higher capacitive loads. To improve the stability	of	the	amplifier	in	such	cases,	replace	R6	with	a suitable resistor value to improve amplifier phase margin.

## Table 1. Jumper Descriptions (JU1-JU5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                       |
|----------|------------------|-------------------------------------------------------------------|
| JU1      | Pin 1            | Disconnects INMA from GND.                                        |
| JU1      | 1-2*             | Connects INA- to GND through R1 for noninverting configuration.   |
| JU2      | Pin 1*           | Disconnects INPA from GND.                                        |
| JU2      | 1-2              | Connects INA+ to GND through R2.                                  |
| JU3      | Pin 1            | Disconnects INMB from GND.                                        |
| JU3      | 1-2*             | Connects INB- to GND through R9 for noninverting configuration.   |
| JU4      | Pin 1*           | Disconnects INPB from GND.                                        |
| JU4      | 1-2              | Connects INB+ to GND through R10.                                 |
| JU5      | Pin 1            | VEE and GND are independently supplied for dual-supply operation. |
| JU5      | 1-2*             | Connects VEE to GND for single- supply operation.                 |

* Default position.

│

Figure 1a. MAX44246 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

Figure 1b. MAX44246 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

Figure 2. MAX44246 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX44246 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX44246 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44246EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX44246

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/12           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.	The	parametric	values	(min	and	max	limits) shown	in	the	Electrical	Characteristics	table	are	guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

Evaluates: MAX44246