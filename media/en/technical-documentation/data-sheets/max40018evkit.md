<!-- lastmod 2022-08-03 -->
## MAX40018 Evaluation Kit

## General Description

The MAX40018 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX40018  low  power,  rail-torail  dual-operational  amplifiers  (op  amps)  in  an  8-bump (1.63mm  x  0.91mm  x  0.5mm)  wafer-level  package (WLP). The EV kit circuit is preconfigured as noninverting amplifiers,  but  can  be  adapted  to  other  topologies  by changing a few components.

The EV kit comes with a MAX40018ANA+ installed.

## MAX40018 EV Kit Photo

<!-- image -->

<!-- image -->

## Features

- Accommodates	Multiple	Op-Amp	Configurations
- Accommodates	Easy-to-Use	Components
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX40018

## Quick Start

## Required Equipment

- MAX40018 EV kit
- +5V,	10mA	DC	power	supply	(PS1)
- Two precision voltage sources
- Two digital multimeters (DMMs)

## Procedure

The	EV	kit	is	fully	assembled	and	tested.	Follow	the	steps below to verify board operation:

- 1)  Verify	 that	 all	 jumpers	 (JU1-JU5)	 are	 in	 their	 default positions, as shown in Table 1.
- 2)  Connect	 the	 positive	 terminal	 of	 the	 +5V	 supply	 to VDD	and	the	negative	terminal	to	GND	and	VSS.
- 3)  Connect	the	positive	terminal	of	the	precision	voltage source	 to	 IN1+.	 Connect	 the	 negative	 terminal	 of the precision voltage source to GND. IN1- is already connected	to	GND	through	jumper	JU1.
- 4)  Connect	the	positive	terminal	of	the	second	precision voltage	source	to	the	IN2+	test	point.	Connect	the	negative terminal of the precision voltage source to GND. IN2is	already	connected	to	GND	through	jumper	JU3.
- 5)  Connect	the	DMMs	to	monitor	the	voltages	on	OUT1 and	OUT2.	With	the	10kΩ	feedback	resistors	and	1kΩ series resistors, the gain of each noninverting amplifier is +11.
- 6)  Turn on the +5V power supply.
- 7)  Apply  100mV  from  the  precision  voltage  sources. Observe	the	output	at	OUTA	and	OUTB	on	the	DMMs. Both	should	read	approximately	+1.1V.
- 8)  Apply	400mV	from	the	precision	voltage	sources.	Both OUT1	and	OUT2	should	read	approximately	+4.4V.

Note: For dual-supply operation, a ±0.85V to ±2.75V can be applied to VDD and VSS, respectively. In this case, remove the shunt on jumper JU5. The rest of the procedure remains the same as that of the single-supply operation.

## Detailed Description of Hardware

The MAX40018 EV kit provides a proven layout for the MAX40018  ultra-precision,  low-noise,  low-drift,  dual  op amp. The device is a single/dual-supply, dual op amp (op amp	1	and	op	amp	2)	that	is	ideal	for	ADC	buffers.

The  default  configuration  for  the  device  in  the  EV  kit is  single-supply  operation  in  noninverting  configuration. However,  the  device  can  operate  with  a  dual  supply  as long as the voltage across the V DD and	VSS	pins	of	the IC	 do	 not	 exceed	 the	 absolute	 maximum	 ratings.	 When operating  with  a  single  supply,  short  V SS to  GND  using jumper	JU5 .

## Op-Amp Configurations

The  device  is  a  single/dual-supply  dual  op  amp  that  is ideal  for  differential  sensing,  noninverting  amplification, buffering, and filtering. A few common configurations are shown in the next few sections.

The following sections explain how to configure one of the device's  op  amps  (op  amp  1).  To  configure  the  device's second op amp (op amp 2), the same equations can be used after modifying the component reference designators.

## Noninverting Configuration

The EV kit comes preconfigured as a noninverting amplifier. The gain is set by the ratio of R5 and R1. The EV kit comes preconfigured for a gain of +11. The output voltage for the noninverting configuration is given by the equation below:

<!-- formula-not-decoded -->

## Inverting Configuration

To configure the EV kit as an inverting amplifier, remove the	 shunt	 on	 jumper	 JU1	 and	 install	 a	 shunt	 on	 jumper JU2	and	feed	an	input	signal	on	the	IN1-	test	point.

│

## MAX40018 Evaluation Kit

## Differential Amplifier

To configure the EV kit as a differential amplifier, replace R1-R3	 and	 R5	 with	 appropriate	 resistors.	 When	 R1	 = R2	and	R3	=	R5,	the	CMRR	of	the	differential	amplifier is  determined by the matching of the resistor ratios R1/ R2 and R3/R5.

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

## Capacitive Loads

Some	applications	require	driving	large	capacitive	loads. The	EV	kit	provides	C8	and	R6	pads	for	optional	capaci -tive-load	driving	circuit.	C8	simulates	the	capacitive	load while R6 acts as an isolation resistor to improve the opamp's stability at higher capacitive loads. To improve the stability of the amplifier in such cases, replace R6 with a suitable resistor value to improve amplifier phase margin.

## Table 1. Jumper Descriptions (JU1-JU5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                       |
|----------|------------------|-------------------------------------------------------------------|
| JU1      | Pin 1            | Disconnects IN1- from GND.                                        |
| JU1      | 1-2*             | Connects IN1- to GND through R1 for noninverting configuration.   |
| JU2      | Pin 1*           | Disconnects IN1+ from GND.                                        |
| JU2      | 1-2              | Connects IN1+ to GND through R2.                                  |
| JU3      | Pin 1            | Disconnects IN2- from GND.                                        |
| JU3      | 1-2*             | Connects IN2- to GND through R9 for noninverting configuration.   |
| JU4      | Pin 1*           | Disconnects IN2+ from GND.                                        |
| JU4      | 1-2              | Connects IN2+ to GND through R10.                                 |
| JU5      | Pin 1            | VSS and GND are independently supplied for dual-supply operation. |
| JU5      | 1-2*             | Connects VSS to GND for single- supply operation.                 |

* Default position.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40018EVKIT# | EV Kit |

# Denotes RoHS compliant.

│

## MAX40018 EV Kit Bill of Materials

| ITEM   | REF_DES                            | DNI/DNP   |   QTY | MFG PART #        | MANUFACTURER   | VALUE        | DESCRIPTION                                                                                 | COMMENTS   |
|--------|------------------------------------|-----------|-------|-------------------|----------------|--------------|---------------------------------------------------------------------------------------------|------------|
| 1      | C1, C17                            | -         |     2 | GRM21BR71H104K    | MURATA         | 0.1UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R  |            |
| 2      | C2, C18                            | -         |     2 | GRM31CR71H475K    | MURATA         | 4.7UF        | CAPACITOR; SMT (1206); CERAMIC CHIP; 4.7UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; |            |
| 3      | JU1-JU5                            | -         |     5 | PCC02SAAN         | SULLINS        | PCC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC    |            |
| 4      | R1, R2, R9, R10                    | -         |     4 | N/A               | N/A            | 1K           | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                           |            |
| 5      | R5, R13                            | -         |     2 | N/A               | N/A            | 10K          | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                          |            |
| 6      | R6, R8, R14, R16                   | -         |     4 | N/A               | N/A            |              | 0 RESISTOR; 0603; 0Ω; 5%; JUMPER; 0.10W; THICK FILM                                         |            |
| 7      | IN1+, IN1-, OUT1, IN2+, IN2-, OUT2 | DNP       |     6 | 5010              | KEYSTONE       | N/A          | RED MULTIPURPOSE TESTPOINT                                                                  |            |
| 8      | TP1, TP2                           | -         |     2 | 5000              | KEYSTONE       | N/A          | MINIATURE TESTPOINTS                                                                        |            |
| 9      |                                    | -         |     5 | ----------------- | ANY            | SHUNT        | SHUNTS                                                                                      |            |
| 10     | U1                                 | -         |     1 | MAX40018ANA+      | MAXIM          | MAX40018ANA+ | EVKIT PART-IC; MAX40016ANA+                                                                 |            |
| 11     | PCB                                | -         |     1 | MAX40018          | MAXIM          | PCB          | PCB: MAX40018 EVALUATION KIT                                                                |            |
| 12     | C4, C5, C19, C11, C12, C16         | DNP       |     0 | N/A               | N/A            | SHORT        | Not installed, ceramic capacitor (0603)                                                     |            |
| 13     | C3, C6, C7, C8, C10, C13, C14, C15 | DNP       |     0 | N/A               | N/A            | OPEN         | Not installed, ceramic capacitor (0603)                                                     |            |
| 14     | R3, R4, R7, R11, R12, R15          | DNP       |     0 | N/A               | N/A            | OPEN         | Not installed, resistor (0603)                                                              |            |
| TOTAL  |                                    |           |    34 |                   |                |              |                                                                                             |            |

Evaluates: MAX40018

Figure 1a. MAX40018 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

Figure 1b. MAX40018 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

<!-- image -->

Figure 2. MAX40018 EV Kit Component Placement GuideComponent Side

Figure 3. MAX40018 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX40018 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.	The	parametric	values	(min	and	max	limits) shown	in	the	Electrical	Characteristics	table	are	guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

│

Evaluates: MAX40018