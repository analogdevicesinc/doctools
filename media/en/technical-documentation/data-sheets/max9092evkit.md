<!-- lastmod 2022-08-03 -->
## MAX9092 Evaluation Kit

## General Description

The MAX9092 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX9092  dual  comparator.  The EV kit circuit can be easily configured by installing shunts and changing a few components to support multiple comparator applications such as window detector and pulsewidth modulation (PWM) generator. The EV kit provides 0603 component PCB pads for ease of evaluation. The EV kit operates from a +1.8V to +5.5V VDD supply.

The EV kit comes with a MAX9092AKA+ installed. Contact the factory for the pin-compatible MAX9093AKA+.

## Component List

| DESIGNATION                                                                     |   QTY | DESCRIPTION                                                        |
|---------------------------------------------------------------------------------|-------|--------------------------------------------------------------------|
| C1                                                                              |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) Murata GCM188R71C104K |
| C2                                                                              |     1 | 4.7µF ±10%, 16V X7R ceramic capacitor (0805) Murata GRM21BR71C475K |
| JU1-JU5                                                                         |     5 | 2-pin headers                                                      |
| INA-, INA+, INAM, INAP, INB-, INB+, INBM, INBP, OUTA, OUTB, VDD, VPULLA, VPULLB |    13 | Red multipurpose test points                                       |

## Component Supplier

| SUPPLIER        | PHONE        | WEBSITE                |
|-----------------|--------------|------------------------|
| Murata Americas | 800-241-6574 | www.murataamericas.com |

Note: Indicate that you are using the MAX9092 when contacting this component supplier.

Evaluates: MAX9092/MAX9093

## Features

- Accommodates	Multiple	Comparator	Configurations
- Accommodates	Easy-to-Use	Components
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

| DESIGNATION    |   QTY | DESCRIPTION                                 |
|----------------|-------|---------------------------------------------|
| VSS            |     4 | Black multipurpose test points              |
| R1-R4          |     4 | 0Ω ±5% resistors (0603)                     |
| R5, R6, R9-R11 |     0 | Not installed, resistors (0603)             |
| R7, R8         |     2 | 100kΩ ±5% resistors (0603)                  |
| U1             |     1 | Dual comparator (8 SOT23) Maxim MAX9092AKA+ |
| -              |     5 | Shunts                                      |
| -              |     1 | PCB: MAX9092 EVKIT                          |

<!-- image -->

## MAX9092 Evaluation Kit

## Quick Start

## Required Equipment

- MAX9092	EV	kit
- Three	adjustable	0	to	+5V	DC	power	supplies
- Oscilloscope

## Procedure

The	 EV	 kit	 is	 fully	 assembled	 and	 tested.	 Follow	 the steps below to verify board operation. Caution: Do not turn on the power supplies until all connections are completed .

- 1)  Verify	 that	 jumpers	 JU1-JU5	 are	 in	 their	 default position,	as	shown	in	Table	1.
- 2)  Set the first DC power supply to +3.3V and connect the positive terminal to VDD and the negative terminal to the GND PCB pads.
- 3)  Set the second DC power supply to +2.5V and connect the positive terminal to VDD and the negative terminal to the GND PCB pads.
- 4)  Set	the	third	DC	power	supply	to	+2V	and	connect	the positive terminal to VDD and the negative terminal to the GND PCB pads.
- 5)  Connect	 an	 oscilloscope's	 channel	 to	 the	 OUTA	 test point on the EV kit.
- 6)  Enable all three power supplies.
- 7)  Verify	that	the	OUTA	signal	is	logic-high	(+3.3V).
- 8)  Increase the third DC power supply to +3V.
- 9)  Verify	that	the	OUTA	signal	is	logic-low	(0V).

## Table 1. EV Kit Jumper Settings (JU1-JU5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                        |
|----------|------------------|----------------------------------------------------------------------------------------------------|
| JU1      | Installed        | Window detection configuration. Connects the OUTAto OUTB pin of the device.                        |
| JU1      | Not installed*   | Disconnects the OUTAfrom OUTB pin of the device.                                                   |
| JU2      | Installed*       | Pulls up to VDD through resistor R7.                                                               |
| JU2      | Not installed    | Pulls up to VPULLAthrough resistor R7. External voltage must be applied at the VPULLAtest point.   |
| JU3      | Installed*       | Pulls up to VDD through resistor R8.                                                               |
| JU3      | Not installed    | Pulls up to VPULLB through resistor R8. External voltage must be applied at the VPULLB test point. |
| JU4      | Installed        | Window detection configuration. Connects the INA- to INB+ pin of the device.                       |
| JU4      | Not installed*   | Disconnects the INA- from INB+ pin of the device.                                                  |
| JU5      | Installed        | PWM generator configuration. Connects the INA- to INB- pin of the device.                          |
| JU5      | Not installed*   | Disconnects the INA- from INB- pin of the device.                                                  |

## Evaluates: MAX9092/MAX9093

## Detailed Description of Hardware

The MAX9092 EV kit is a fully assembled and tested PCB that evaluates the MAX9092 dual comparator. The EV kit requires a +1.8V to +5.5V input supply voltage at VDD for normal operation.

The	EV	kit	is	configurable	for	different	applications,	such as	 logic-level	 translation,	 window	 detector,	 and	 PWM generator	by	adjusting	the	jumper	settings	and	installing appropriate resistors on the PCB.

## Comparator Application Circuits

## Logic-Level Translation

Jumpers	JU2	and	JU3	are	available	to	change	the	logic level  of  the  comparators'  output.  Install  a  shunt  on  the jumpers	to	set	VDD	as	the	comparator	output	logic	level. Remove	the	shunt	from	the	jumper	and	apply	the	desired voltage	at	the	VPULLA	and/or	VPULLB	test	points	to	set the comparator output logic level independent of the supply	voltage.	Note	that	the	OUT\_	pins	on	the	comparator have an absolute maximum of (VSS - 0.3V) to 6V. See Table	1	for	proper	jumper	configurations.

Figure 1. Logic-Level Translator Circuit

<!-- image -->

│

## MAX9092 Evaluation Kit

## Window Detector

Table	2	depicts	the	proper	jumper	configuration	for	evalu -ating the EV kit window detector application circuit using comparators A and B.

Resistor	 R1,	 R5,	 and	 R6	 pads	 are	 available	 for	 setting the	overvoltage	and	undervoltage-threshold	levels.	OUTA provides	an	active-low	undervoltage	indication	and	OUTB provides an active-low overvoltage indication. The opendrain	 outputs	 of	 both	 comparators	 are	 wired	 in	 an	 OR configuration	 using	 jumper	 JU1	 to	 give	 an	 active-high power-good	signal	on	either	OUTA	or	OUTB.

For accurate threshold settings, use the following equations in this section.

The	input	bias	current	into	INB-	is	worst-case	400nA	over temperature (T A =	 -40°C	 to	 +125°C)	 and	approximately 250nA (max) at room temperature (T A =	 +25°C),	so	the current	through	R1	should	exceed	40μA	for	the	threshold to	 be	 accurate	 over	 temperature.	 Calculate	 R5	 using Equation 1:

<!-- formula-not-decoded -->

where V INAP  is the reference voltage applied at the INand	R5	is	in	the	order	of	kΩ.

Choose the desired overvoltage threshold and calculate resistance	R T using	Equation	2	for	resistor	R5	value:

<!-- formula-not-decoded -->

where	R T =	R6	+	R1	in	kΩ	and	V OTH is the desired overvoltage threshold in volts.

## Evaluates: MAX9092/MAX9093

Calculate	R6	using	the	Equation	3:

<!-- formula-not-decoded -->

Where  V UTH is  the  desired  undervoltage  threshold. Obtain	the	R1	resistor	value	using	Equation	4:

<!-- formula-not-decoded -->

## Table 2. Window Detection Circuit Jumper Configuration

| JUMPER        | SHUNT POSITION   |
|---------------|------------------|
| JU1, JU2, JU4 | Installed        |
| JU3, JU5      | Not installed    |

Figure 2. Window Detector Circuit

<!-- image -->

│

## MAX9092 Evaluation Kit

## PWM Generator

The EV kit can be configured to generate a simple PWM signal using comparators A and B. See Table 3 for proper jumper	 configurations	 on	 the	 EV	 kit	 for	 a	 simple	 PWM generation circuit. Configure comparator A as a relaxation oscillator as follows:

- 1)  Add	a	suitable	resistor	and	capacitor	at	the	R11	and R5	PCB	pads,	respectively.
- 2)  Connect the INAP test point to the VDD test point.
- 3)  The trip thresholds are set by applying suitable external	hysteresis	using	resistors	R1,	R9,	and	R10.

Jumper	 JU5	 connects	 the	 sawtooth	 waveform	 gener -ated on comparator A's inverting input to comparator B's inverting	input.	The	analog	control	voltage,	applied	on	the noninverting	input	of	comparator	B	(INB+),	determines	the pulse width. Note: Since the relaxation oscillator generates	a	sawtooth	waveform,	the	duty	cycle	is	not	a	linear function of the applied analog control voltage.

## Table 3. PWM Generation Circuit Jumper Configuration

| JUMPER        | SHUNT POSITION   |
|---------------|------------------|
| JU1, JU4      | No installed     |
| JU2, JU3, JU5 | Installed        |

## Evaluates: MAX9092/MAX9093

Figure 3. PWM Generator Circuit

<!-- image -->

│

Figure 4. MAX9092 EV Kit Schematic

<!-- image -->

<!-- image -->

Figure 5. MAX9092 EV Kit Component Placement GuideComponent Side

Figure 6. MAX9092 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 7. MAX9092 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9092EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX9092/MAX9093

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.

Evaluates: MAX902/MAX903