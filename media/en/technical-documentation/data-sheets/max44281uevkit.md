<!-- lastmod 2022-08-03 -->
## MAX44281U Evaluation Kit

## General Description

The The MAX44281U evaluation kit (EV kit) provides a proven design to evaluate the MAX44281U, the industry's first op amp in a 4-bump wafer-level package (WLP). The device is offered as a noninverting amplifier with gain (A V ) of +10V/V.

The EV kit comes with a MAX44281UANS+ installed.

## Component List

<!-- image -->

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) Murata GCM188R71C104K                        |
| C2            |     1 | 4.7µF ±10%, 25V X5R ceramic capacitor (0805) Murata GRM21BR61E475K                        |
| C5-C9         |     0 | Not installed, ceramic capacitors (0603) C5, C7, C8 are open; C6, C9 are short (PC trace) |
| IN, OUT       |     2 | 50Ω PCB vertical-mount BNC connectors                                                     |

## Component Supplier

| SUPPLIER                              | PHONE        | WEBSITE                     |
|---------------------------------------|--------------|-----------------------------|
| Murata Electronics North America Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX44281U when contacting this component supplier.

## Features

- Accommodates	Multiple	Op-Amp	Configurations
- Component	Pads	Allow	for	Sallen-Key	Filter
- Accommodates	Easy-to-Use	Components
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

<!-- image -->

| DESIGNATION        |   QTY | DESCRIPTION                                            |
|--------------------|-------|--------------------------------------------------------|
| IN, OUT            |     2 | Red multipurpose test points                           |
| R1, R3, R4, R6, R8 |     0 | Not installed, resistors (0603)                        |
| R2, R5, R7         |     3 | 0Ω ±5% resistors (0603)                                |
| TP1                |     1 | Miniature test point                                   |
| U1                 |     1 | Ultra-small, 4-bump op amp (4 WLP) Maxim MAX44281UANS+ |
| -                  |     1 | PCB: MAX44281U EVALUATION KIT                          |

Evaluates: MAX44281U

<!-- image -->

## Quick Start

## Required Equipment

-  MAX44281U	EV	kit
- +1.8V	to	+5.5V,	1mA	DC	power	supply	(e.g.,	Agilent E3620A)
- Function	generator	(e.g.,	Agilent	33220A)
- Digital	oscilloscope	(e.g.,	Tektronix	TDS3012)

## Procedure

The	EV	kit	is	fully	assembled	and	tested.	Follow	the	steps below	to	verify	board	operation:

- 1)  Set	 the	 DC	 power	 supply	 to	 +3.3V	 and	 connect	 the positive	terminal	to	VDD	and	the	negative	terminal	to the	GND	PCB	pads.
- 2)  Set  the  function  generator  amplitude  to  100mV P-P , 1kHz	sine	wave,	and	50mV	offset.
- 3)  Connect	the	output	of	the	function	generator	to	the	IN BNC	connector	on	the	EV	kit.
- 4)  Connect	 a	 channel	 of	 the	 oscilloscope	 to	 the	 OUT BNC	connector	on	the	EV	kit.
- 5)  Turn	on	the	power	supply.
- 6)  Enable	the	function	generator.
- 7)  Verify	that	the	signal	displayed	on	the	oscilloscope	is 10x	the	amplitude	of	the	signal	applied	at	the	IN	BNC connector.

## Detailed Description of Hardware

The MAX44281U is a single-supply op amp that is ideal for noninverting amplification, buffering, and filtering. A few common configurations are shown in the next few sections.

## Op-Amp Configurations

## AC-Coupled Configuration

An	 AC-coupled	 application	 can	 be	 configured	 with	 the addition	of	two	resistors,	R8	and	R3.	The	following	equation	sets	the	output	bias	voltage	at	midsupply:

<!-- formula-not-decoded -->

## Sallen-Key Configuration

The	 Sallen-Key	 topology	 is	 ideal	 for	 filtering	 sensor signals with a second-order filter and acting as a buffer. Schematic complexity is reduced by combining the filter

and buffer operations. The EV kit can be configured in a Sallen-Key	 topology	 by	 replacing	 and	 populating	 a	 few components.  The  signal  is  noninverting  and  applied  to INP.	The	filter	component	pads	are	R2-R4	and	R7,	where some have to be populated with resistors and others with capacitors.

Lowpass Sallen-Key Filter: To	configure	the	Sallen-Key as	 a	 lowpass	 filter,	 populate	 the	 R2	 and	 R7	 pads	 with resistors	and	populate	the	R3	and	R4	pads	with	capacitors.	The	corner	frequency	and	Q	are	then	given	by:

<!-- formula-not-decoded -->

RF	and	R G 	are	internal	resistors	in	the	device	where	R F =		9R G .

Highpass Sallen-Key Filter: To	configure	the	Sallen-Key as	 a	 highpass	 filter,	 populate	 the	 R3	 and	 R4	 pads	 with resistors	and	populate	the	R2	and	R7	pads	with	capacitors.	The	corner	frequency	and	Q	are	then	given	by:

<!-- formula-not-decoded -->

## Capacitive Loads

Some	applications	require	driving	large	capacitive	loads. The	 EV	 kit	 provides	 C8,	 R6,	 and	 R5	 pads	 for	 optional capacitive-load	 driving	 circuit.	 C8	 simulates	 the	 capacitive	load,	R6	simulates	resistive	load,	while	R5	acts	as	an isolation  resistor  to  improve  op-amp's  stability  at  higher capacitive loads. To improve the stability of the amplifier in	such	cases,	replace	R6	with	a	suitable	resistor	value	to improve amplifier phase margin.

Figure 1. MAX44281U EV Kit Schematic

<!-- image -->

Figure 2. MAX44281U EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX44281U EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX44281U EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX44281UEVKIT# | EV Kit |

# Denotes RoHS-compliant.

Evaluates: MAX44281U

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maximintegrated.com.

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

Evaluates: MAX4281U