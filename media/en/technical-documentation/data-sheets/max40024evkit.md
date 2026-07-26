<!-- lastmod 2022-08-03 -->
## MAX40024 Evaluation Kit

## General Description

The MAX40024 evaluation kit (EV kit) provides a proven design to evaluate the MAX40024 low-noise, low-power, low-bias-current, rail-to-rail dual-operational amplifiers (op amps) in an 9-bump (1.23mm x 1.23mm x 0.5mm) waferlevel package  (WLP). The EV kit circuit is preconfigured as  noninverting  amplifiers,  but  can  be  adapted  to  other topologies by changing a few components.

The EV kit comes with a MAX40024ANL+ installed.

## MAX40024 EV Kit Photo

<!-- image -->

<!-- image -->

## Features

- Accommodates	Multiple	Op	Amp	Configurations
- Accommodates	Easy-to-Use	Components
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX40024

## Quick Start

## Required Equipment

- MAX40024 EV kit
- +5V,	10mA	DC	power	supply	(PS1)
- Two precision voltage sources
- Two digital multimeters (DMMs)

## Procedure

The	EV	kit	is	fully	assembled	and	tested.	Use	the	follow -ing steps to verify board operation:

- 1)  Verify	 that	 all	 jumpers	 (JU1-JU6)	 are	 in	 their	 default positions, as shown in Table 1.
- 2)  Connect	the	positive	terminal	of	the	+1.8V	supply	to VDD and the negative terminal to GND and V SS .
- 3)  Connect	the	positive	terminal	of	the	precision	voltage source	 to	 IN1+.	 Connect	 the	 negative	 terminal	 of the precision voltage source to GND. IN1- is already connected	to	GND	through	jumper	JU1.
- 4)  Connect	the	positive	terminal	of	the	second	precision voltage	source	to	the	IN2+	test	point.	Connect	the	neg -ative terminal of the precision voltage source to GND. IN2-	is	already	connected	to	GND	through	jumper	JU3.
- 5)  Connect	the	DMMs	to	monitor	the	voltages	on	OUT1 and	OUT2.	With	the	10kΩ	feedback	resistors	and	1kΩ series resistors, the gain of each noninverting amplifier is +11.
- 6)  Turn	on	the	+1.8V	power	supply.
- 7)  Apply  100mV  from  the  precision  voltage  sources. Observe	the	output	at	OUTA	and	OUTB	on	the	DMMs. Both	should	read	approximately	+1.1V.
- 8)  Apply	40mV	from	the	precision	voltage	sources.	Both OUT1	and	OUT2	should	read	approximately	+0.44V.

Note: For	 dual-supply	 operation,	 a	 ±0.9V	 to	 ±1.8V	 can be  applied  to  V DD   and  V SS ,  respectively.  In  this  case, remove	 the	 shunt	 on	 jumper	 JU5.	 The	 rest	 of	 the	 pro -cedure  remains  the  same  as  that  of  the  single-supply operation.

## Detailed Description of Hardware

The MAX40024 EV kit provides a proven layout for the MAX40024  low-noise,  low-power,  low-bias-current,  dual op amp. The device is a single/dual-supply, dual op amp (op amp 1 and op amp 2) that is ideal for sensors.

The  default  configuration  for  the  device  in  the  EV  kit is  dual-supply  operation  in  noninverting  configuration. However, the device can operate with a single-supply as long as the voltage across the V DD  and V SS pins of the IC	 do	 not	 exceed	 the	 absolute	 maximum	 ratings.	 When operating  with  a  single  supply,  short  V SS to  GND  using jumper	JU5.

## Op-Amp Configurations

The  device  is  a  single/dual-supply  dual  op  amp  that  is ideal  for  differential  sensing,  noninverting  amplification, buffering, and filtering. A few common configurations are shown in the next few sections.

The following sections explain how to configure one of the device's  op  amps  (op  amp  1).  To  configure  the  device's second op amp (op amp 2), the same equations can be used after modifying the component reference designators.

## Noninverting Configuration

The EV kit comes preconfigured as a noninverting amplifier. The gain is set by the ratio of R5 and R1. The EV kit comes preconfigured for a gain of +11. The output voltage for the noninverting configuration is given by the equation below:

<!-- formula-not-decoded -->

## Inverting Configuration

To configure the EV kit as an inverting amplifier, remove the	 shunt	 on	 jumper	 JU1	 and	 install	 a	 shunt	 on	 jumper JU2	and	feed	an	input	signal	on	the	IN1-	test	point.

│

## MAX40024 Evaluation Kit

## Differential Amplifier

To configure the EV kit as a differential amplifier, replace R1-R3	 and	 R5	 with	 appropriate	 resistors.	 When	 R1	 = R2	and	R3	=	R5,	the	CMRR	of	the	differential	amplifier is  determined by the matching of the resistor ratios R1/ R2 and R3/R5.

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

## Capacitive Loads

Some	applications	require	driving	large	capacitive	loads. The	EV	kit	provides	C8	and	R6	pads	for	optional	capaci -tive-load	driving	circuit.	C8	simulates	the	capacitive	load while	R6	acts	as	an	isolation	resistor	to	improve	the	op amp's stability at higher capacitive loads. To improve the stability	of	the	amplifier	in	such	cases,	replace	R6	with	a suitable resistor value to improve amplifier phase margin.

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
| JU5      | Pin 1*           | VSS and GND are independently supplied for dual-supply operation. |
| JU5      | 1-2              | Connects VSS to GND for single- supply operation.                 |
| JU6      | 1-2*             | Set Op amp to normal operation mode                               |
| JU6      | 2.3              | Set Op amp to Shutdown mode                                       |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40024EVKIT# | EV Kit |

# Denotes RoHS compliance.

│

## MAX40024 EV Kit Bill of Materials

| ITEM   | REF_DES                                              | DNI/DNP   |   QTY | MFG PART #                                                              | MANUFACTURER                           | VALUE        | DESCRIPTION                                                                                                             |
|--------|------------------------------------------------------|-----------|-------|-------------------------------------------------------------------------|----------------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------|
| 1      | C1, C17                                              | -         |     2 | C1608X5R1H104K080AA                                                     | TDK                                    | 0.1UF        | CAP; SMT (0603); 0.1UF; 10%; 50V; X5R; CERAMIC                                                                          |
| 2      | C2, C18                                              | -         |     2 | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL | MURATA;MURATA; MURATA;TAIYO YUDEN      | 4.7UF        | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                          |
| 3      | GND, TP0_GND, TP1_GND-TP4_GND                        | -         |     6 | 5011                                                                    | KEYSTONE                               | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 4      | JU1-JU5                                              | -         |     5 | PEC02SAAN                                                               | SULLINS                                | PEC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                               |
| 5      | JU6                                                  | -         |     1 | PCC03SAAN                                                               | SULLINS                                | PCC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                |
| 6      | MH1-MH4                                              | -         |     4 | 9032 KEYSTONE                                                           | 9032 KEYSTONE                          | 9032         | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                               |
| 7      | R1, R2, R9, R10                                      | -         |     4 | MCT06030C1001F                                                          | VISHAY BEYSCHLAG                       | 1K           | RES; SMT (0603); 1K; 1%; +/-50PPM/DEGK; 0.1250W                                                                         |
| 8      | R5, R13                                              | -         |     2 | CRCW060310K0FKEAHP                                                      | VISHAY DRALORIC                        | 10K          | RES; SMT (0603); 10K; 1%; 100PPM; 0.2500W                                                                               |
| 9      | R6, R8, R14, R16                                     | -         |     4 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                          | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH   | 0            | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                                 |
| 10     | S1-S6                                                | -         |     6 | S1100-B;SX1100-B; STC02SYAN                                             | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                 |
| 11     | TP1-TP4                                              | -         |     4 | 5000                                                                    | KEYSTONE                               | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |
| 12     | TP6_GND, TP7_GND, VDD, VSS                           | -         |     4 | 9020 BUSS                                                               | WEICO WIRE                             | MAXIMPAD     | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWNBUS TYPE-S; 20AWG                                 |
| 13     | TP_INAM, TP_INAP, TP_INBM, TP_INBP, TP_OUTA, TP_OUTB | -         |     6 | 5012                                                                    | KEYSTONE                               | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 14     | U1                                                   | -         |     1 | MAX40024ANL+                                                            | MAXIM                                  | MAX40024ANL+ | EVKIT PART - IC; MAX40024ANL+; PACKAGE OUTLINE DRAWING: 21-100549; PACKAGE CODE: N91G1+; WLP9                           |
| 15     | PCB                                                  | -         |     1 | MAX40024                                                                | MAXIM                                  | PCB          | PCB:MAX40024                                                                                                            |
| 16     | INAM, INAP, INBM, INBP, OUTA, OUTB                   | DNP       |     0 | CN-BNC-011PG                                                            | FIRST TECH ELECTRONICS, CO.            | CN-BNC-011PG | CONNECTOR; FEMALE; THROUGH HOLE; BNC JACK; STRAIGHT; 5PINS                                                              |
| 17     | C3, C6-C8, C10, C13-C15                              | DNP       |     0 | N/A                                                                     | N/A                                    | OPEN         | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                |
| 18     | C4, C5, C9, C11, C12, C16                            | DNP       |     0 | N/A                                                                     | N/A                                    | SHORT        | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                |
| 19     | R3, R4, R7, R11, R12, R15                            | DNP       |     0 | N/A                                                                     | N/A                                    | OPEN         | PACKAGE OUTLINE 0603 RESISTOR                                                                                           |
| TOTAL  | TOTAL                                                |           |    52 |                                                                         |                                        |              |                                                                                                                         |

Evaluates: MAX40024

## MAX40024 EV Kit Schematics

<!-- image -->

## MAX40024 EV Kit Schematics (continued)

<!-- image -->

## MAX40024 EV Kit Schematics (continued)

<!-- image -->

│

## MAX40024 EV Kit PCB layouts

MAX40024 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX40024 EV Kit PCB Layout-Top

<!-- image -->

MAX40024 EV Kit PCB Layout-Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.	The	parametric	values	(min	and	max	limits) shown	in	the	Electrical	Characteristics	table	are	guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

<!-- image -->

│

Evaluates: MAX40024