<!-- lastmod 2022-08-03 -->
## MAX9647 Evaluation Kit

## General Description

The MAX9647 evaluation kit (EV kit) provides a proven design to evaluate the MAX9647 single comparator. The EV kit circuit can be easily configured by installing shunts and  changing  a  few  components  to  support  multiple configurations for comparator applications such as logiclevel  translation  and  relaxation  oscillator.  The  EV  kit provides 0603 component PCB pads for ease of evaluation. The EV kit operates from a +1.8V to +5.5V VDD supply.

The  EV  kit  comes  with  a  MAX9647AUK+  installed. Contact  the  factory  for  samples  of  the  pin-compatible MAX9648AUK+.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) Murata GCM188R71C104K |
| C2            |     1 | 4.7µF ±10%, 16V X7R ceramic capacitor (0805) Murata GRM21BR71C475K |
| C3            |     0 | Not installed, ceramic capacitor (0603)                            |
| JU1           |     1 | 2-pin header                                                       |

## Component Supplier

| SUPPLIER        | PHONE        | WEBSITE                |
|-----------------|--------------|------------------------|
| Murata Americas | 800-241-6574 | www.murataamericas.com |

Note: Indicate that you are using the MAX9647 when contacting this component supplier.

Evaluates: MAX9647/MAX9648

## Features

- Accommodates	Multiple	Configurations	for	the Comparator
- Accommodates	Easy-to-Use	Components
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

| DESIGNATION               |   QTY | DESCRIPTION                            |
|---------------------------|-------|----------------------------------------|
| IN+, IN-, OUT, VDD, VPULL |     5 | Red test points                        |
| R1-R3, R5                 |     0 | Not installed, resistors (0603)        |
| R4                        |     1 | 100kΩ ±5% resistor (0603)              |
| VSS                       |     3 | Black multipurpose test points         |
| U1                        |     1 | Comparator (5 SOT23) Maxim MAX9647AUK+ |
| -                         |     1 | Shunt                                  |
| -                         |     1 | PCB: MAX9647 EVKIT                     |

<!-- image -->

## MAX9647 Evaluation Kit

## Quick Start

## Required Equipment

- MAX9647	EV	kit
- Three	adjustable	0	to	+5V	DC	power	supplies
- Oscilloscope

## Procedure

The	 EV	 kit	 is	 fully	 assembled	 and	 tested.	 Follow	 the steps below to verify board operation. Caution: Do not turn on the power supplies until all connections are completed.

- 1)  Verify	that	a	shunt	is	installed	on	jumper	JU1.
- 2)  Set the first DC power supply to +3.3V and connect the positive terminal to VDD and the negative terminal to the GND PCB pads.
- 3)  Set the second DC power supply to +1.5V and connect the positive terminal to IN+ and the negative terminal to the GND PCB pads.
- 4)  Set the third DC power supply to +1.0V and connect the positive terminal to IN- and the negative terminal to the GND PCB pads.
- 5)  Connect	the	oscilloscope's	channel	to	the	OUT	PCB pad on the EV kit.
- 6)  Enable all three power supplies.
- 7)  Verify	that	the	OUT	signal	is	logic-high	(3.3V).
- 8)  Increase the third DC power supply to +2.0V.
- 9)  Verify	that	the	OUT	signal	is	logic-low	(0V).

## Detailed Description of Hardware

The  MAX9647  EV  kit  is  a  fully  assembled  and  tested PCB that evaluates the MAX9647 comparator. The EV kit requires a +1.8V to +5.5V input supply voltage at VDD for normal operation.

## Table 1. OUTA Logic Level (JU1)

| SHUNT POSITION   | OUT_ PIN                               | LOGIC-HIGH VOLTAGE                               |
|------------------|----------------------------------------|--------------------------------------------------|
| Installed*       | Pulled up to VDD through resistor R4   | VDD                                              |
| Not installed    | Pulled up to VPULL through resistor R4 | External voltage applied at the VPULL test point |

## Evaluates: MAX9647/MAX9648

The EV kit is configurable for different applications such as  logic-level translation  and  relaxation  oscillator  by installing appropriate components on the PCB.

## Comparator Application Circuits

## Logic-Level Translation

Jumper JU1 is available to change the logic level of the comparator's output. Install a shunt on JU1 to set VDD as the	comparator	output	logic	level.	Remove	the	shunt	from JU1	and	apply	the	desired	voltage	at	the	VPULL	test	point to set the comparator output logic level independent of the supply	voltage.	Note	that	the	OUT	pins	on	the	comparator have an absolute maximum of (VSS - 0.3) to +6V. See Table	1	for	proper	jumper	JU1	configuration.

## Relaxation Oscillator

The  device  can  be  configured  to  operate  as  a  simple relaxation	oscillator	(Figure	2),	as	follows:

- 1)  Add	a	suitable	resistor	and	capacitor	at	the	R3	and	C3 PCB	pads,	respectively.
- 2)  The trip thresholds are set by applying suitable external	hysteresis	using	R1,	R2,	and	R5	PCB	pads.

Figure 1. Logic-Level Translator Circuit

<!-- image -->

│

Figure 2. Relaxation Oscillator Circuit

<!-- image -->

Use  the  following  equations  to  determine  the  optimum component values:

The	selection	of	R3	should	be	much	larger	than	R4	(R4 &lt;&lt;	R3).	If	R4	and	R3	are	in	comparable	ranges,	the	V OH can	drastically	change,	which	eventually	changes	the	trip points and hence the desired oscillating frequency.

Assuming	R1	=	78.7kΩ;	R2	=	R5	=	40.2kΩ;	C3	=	10nF; R3	=	100kΩ;	R4	=	1kΩ;	V PULL\_UP 	=	V DD =	5V. Then:

<!-- formula-not-decoded -->

V T\_RIS E and V T\_FALL values also vary with V DD  used.

Using  the  basic  time-domain  equation  for  charging  and discharging	 the	 respective	 comparator	 RC	 circuit,	 the comparator oscillator frequency can be calculated using the following equation:

During Charging Phase:

<!-- formula-not-decoded -->

where t1 is the time required for the capacitor to charge to V C(t1) =	V T\_RISE.

During Discharging Phase:

<!-- formula-not-decoded -->

where t2 is the time required for the capacitor to charge to V C(t2) =	V T\_FALL.

Hence,	for	the	above-mentioned	case	of	component	values:

<!-- formula-not-decoded -->

Ideally,	 because	 t1	 =	 t2.	 The	 output	 square	 waveform has	50%	duty	cycle;	however,	because	V OH and V OL are subject	to	changes,	the	waveform	becomes	asymmetric.

Hence	the	total	time	would	be:

<!-- formula-not-decoded -->

<!-- image -->

or

│

## MAX9647 Evaluation Kit

## Component Selection:

Choice	of	R4	(pullup	resistor)	should	be	within	500Ω	to	few kΩ	because	R4	affects	the	time	constant,	V OH ,	VT\_RISE of  the  circuit.  This  eventually  changes  the  frequency  of oscillation.

Also	 ensure	 that	 R PULL-UP is  small  compared  to  the feedback	resistors	and	particularly	to	R3.	This	way,	it	does not	limit	the	current	in	that	part	of	the	circuit,	but	when	R4 and	 R3	 are	 in	 comparable	 ranges,	 the	 charging	 phase can	take	a	longer	period	of	time	to	charge	the	capacitor, which ultimately affects the oscillating frequency and also makes the duty cycle asymmetrical.

Other	characteristics	such	as	the	offset	voltage,	the	input bias	 current,	 propagation	 delay,	 and	 temperature	 also have an effect on the trip points and oscillation frequency.

For	 instance,	 when	 C3	 =	 100pF	 and	 R3	 =	 10kΩ,	 the capacitance  used  is  in  the  vicinity  of  the  input  capacitance	of	the	comparator	(~3.5pF).	The	effective	equiva -lent	capacitance	would	be	103.5pF	and	produce	a	3.5% error in the time constant. The board capacitance is not included	in	 this	 case,	 which	 includes	 more	 errors.	Also, the	 duty	 cycle	 is	 asymmetrical	 because	 of	 R3	 being	 10 times	that	of	R4.

Figure 3. MAX9647 EV Kit Schematic

<!-- image -->

<!-- image -->

Figure 4. MAX9647 EV Kit Component Placement GuideComponent Side

Figure 5. MAX9647 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 6. MAX9647 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9647EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX9647/MAX9648

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

Evaluates: MAX9647/MAX9648