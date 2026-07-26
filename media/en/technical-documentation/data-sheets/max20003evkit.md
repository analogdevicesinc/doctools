<!-- lastmod 2022-08-02 -->
## MAX20003 Evaluation Kit

## General Description

The MAX20003 evaluation kit (EV kit) demonstrates the MAX20002/MAX20003 high-voltage, current-mode stepdown converters with low operating current. The EV kit operates  over  a  wide  3.5V  to  36V  input  range  and  the output is set for 5V at 3A.

The EV kit comes with the MAX20003ATPA/V+ installed.

## Features and Benefits

- Wide 3.5V to 36V Input Supply Range
- Forced-PWM or Skip-Mode Operation
- Programmable Switching Frequency
- Power-Good Output
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Quick Start

## Required Equipment

- MAX20003	EV	kit
- 14V,	2A	DC	power	supply
- Electronic	load	capable	of	3A
- Digital	voltmeter	(DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on supplies until all connections are made.

- 1)  Verify	that	jumpers	JU1-JU4	are	in	their	default	posi -tions,	as	shown	in	Tables	1-4.
- 2)  Connect	the	power	supply	between	the	SUPSW	and nearest	PGND	test	points.
- 3)  Connect	the	3A	electronic	load	between	the	OUT	and nearest	PGND	test	points.
- 4)  Connect	 the	 DVM	 between	 the	 OUT	 and	 nearest PGND	test	points.
- 5)  Turn on the power supply.

Evaluates: MAX20002/MAX20003

## Table 1. EN Configuration (JU1)

| SHUNT POSITION   | DESCRIPTION                                                    |
|------------------|----------------------------------------------------------------|
| 1-2*             | Connects the EN pin to the voltage at SUP for normal operation |
| 2-3              | Connects the EN pin to ground to enter shutdown mode           |

## Table 2. Mode of Operation (JU2)

| SHUNT POSITION   | MODE PIN                       | MODE                                                |
|------------------|--------------------------------|-----------------------------------------------------|
| 1-2*             | Connected to BIAS              | Forced-PWM mode                                     |
| 2-3              | Connected to AGND              | Skip mode                                           |
| Not installed    | Connected to an external clock | Forced-PWM mode (device syncs to an external clock) |

## Table 3. Spread Spectrum (JU3)

| SHUNT POSITION   | MODE PIN          | MODE                     |
|------------------|-------------------|--------------------------|
| 1-2*             | Connected to BIAS | Spread-spectrum enabled  |
| 2-3              | Connected to PGND | Spread-spectrum disabled |

## Table 4. PGOOD (JU4)

| SHUNT POSITION   | MODE                    |
|------------------|-------------------------|
| Installed        | PGOOD pulled high to VL |
| Not installed    | PGOOD unconnected       |

- 6)  Enable the electronic load.
- 7)  Verify	that	the	voltage	at	the	OUT	test	point	is	approxi -mately 5V.

<!-- image -->

## MAX20003 Evaluation Kit

## Detailed Description of Hardware

The MAX20003 EV kit demonstrates the MAX20003 highvoltage,  high-frequency,  step-down  converter  with  low operating current. The EV kit operates over a wide 3.5V to 36V input range and the output is set for 5V at 3A.

## Enable (EN)

Place	a	shunt	in	the	1-2	position	on	jumper	JU1	for	normal operation. To place the device into shutdown mode, move the	shunt	on	JU1	to	the	2-3	position.

## Synchronization Input (FSYNC)

The	EV	kit	features	jumper	JU2	to	control	the	synchro -nization  input  (FSYNC).  The  device  synchronizes  to  an external	 signal	 applied	 to	 FSYNC.	 Connect	 FSYNC	 to AGND	to	enable	skip-mode	operation.	Connect	to	BIAS or	to	an	external	clock	to	enable	fixed-frequency	forcedPWM mode operation.

To	use	an	external	clock,	uninstall	the	shunt	on	JU2	and apply	 the	 signal	 at	 the	 FSYNC	 test	 point.	 The	 external clock frequency at FSYNC can be higher or lower than the internal clock by 20%. Ensure that the duty cycle of the external	clock	used	has	a	minimum	100ns	pulse	width.

## Spread-Spectrum Option (SPS)

The	EV	kit	provides	jumper	JU3	that	allows	SPS	to	be pulled	 high	 (VL)	 or	 pulled	 low	 (PGND).	 Connect	 	 SPS high  to  enable  spread  spectrum    where  the  operating frequency  is  varied  ±3%  centered  on  FOSC.  Connect SPS low  to disable the spread-spectrum feature.

## Setting the Switching Frequency (FOSC)

The EV kit switching frequency is set by a resistor, R FOSC (R4),	 connected	 from	 FOSC	 to	 AGND.	 Refer	 to	 TOC 08  in  the Typical  Operating  Characteristics section in the MAX20002/MAX20003 IC data sheet for the correct RFOSC (R4)	value.

## Evaluates: MAX20002/MAX20003

## Power-Good Output (PGOOD)

The	 EV	 kit	 provides	 a	 PGOOD	 test	 point	 to	 monitor	 the status	of	the	device	output.	PGOOD	asserts	when	V OUT rises	 above	 95%	 of	 its	 regulation	 voltage.	 PGOOD deasserts when V OUT drops below 92.5% of its regulation voltage.

## Output

Connect	 FB	 to	 BIAS	 for	 a	 fixed	 +5V	 (EV	 kit	 default output)	or	a	fixed	+3.3V	output	voltage.	To	set	the	output to	other	voltages	between	1V	and	10V,	connect	a	resistive divider	from	output	(OUT)	to	FB	to	AGND.	Use	the	follow -ing formula to determine the R7 and R8 of the resistive divider network:

<!-- formula-not-decoded -->

where V FB =	1V.

## Operation at 400kHz Switching Frequency

For	 400kHz	 switching	 frequency,	 the	 following	 compo -nents need to be changed to:

- R4	=	73.2kΩ
- L1	=	6.8µH	(recommend	Coilcraft	XAL5050-682MEB)
- R1	=			16.5kΩ
- C10	=	4,700pF
- C11	=	6.8pF

Additional  capacitance  on  C7  and  C8  may  be  needed, depending on transient performance.

## MAX20003 Evaluation Kit

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C1            |     1 | 47µF ±20%, 50V aluminum electrolytic capacitor (8.00mm x 6.20mm) Panasonic EEE-FK1H470P |
| C2            |     1 | 4.7µF ±10%, 50V X7R ceramic capacitor (1210) Murata GCM32ER71H475KA55L                  |
| C3, C5        |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GCM188R71H104KA57D                 |
| C4            |     1 | 2.2µF ±10%, 50V X7R ceramic capacitor (0805) TDK C2012X7R1H2225K125AC                   |
| C6, C14, C15  |     3 | 0.1µF ±10%, 50V X7R ceramic capacitors (0402) TDK CGA2B3X7R1H104K050BB                  |
| C7, C8        |     2 | 22µF ±10%, 10V X7R ceramic capacitors (1210) Murata GCM32ER71A226KE12L                  |
| C9            |     1 | 2.2µF ±10%, 10V X7R ceramic capacitor (0603) Murata GRM188R71A225K                      |
| C10, C16      |     2 | 1,000pF ±10%, 50V X7R ceramic capacitors (0402) Murata GRM155R71H102K                   |
| C11           |     1 | 10pF ±5%, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H100J                        |
| C12, C17      |     0 | Not installed, ceramic capacitors (0402)                                                |

## Component Suppliers

| SUPPLIER                       | PHONE        | WEBSITE                |
|--------------------------------|--------------|------------------------|
| Coilcraft Inc.                 | 847-639-6400 | www.coilcraft.com      |
| Murata Americas                | 770-436-1300 | www.murataamericas.com |
| Panasonic Corp.                | 800-344-2112 | www.panasonic.com      |
| Würth Electronik GmbH & Co. KG | 201-785-8800 | www.we-online.com      |

Note:

Indicate that you are using the MAX20003 when contacting these component suppliers.

Evaluates: MAX20002/MAX20003

* EP = Exposed pad.

| DESIGNATION             |   QTY | DESCRIPTION                                                   |
|-------------------------|-------|---------------------------------------------------------------|
| C13                     |     0 | Not installed, ceramic capacitor (0603)                       |
| JU1-JU3                 |     3 | 3-pin headers                                                 |
| JU4                     |     1 | 2-pin header                                                  |
| L1                      |     1 | 2.2µH, 9.2A inductor (5.5mm x 5.7mm) Coilcraft XAL5030-222MEB |
| L2                      |     1 | Ferrite bead (1206) Würth 742792141                           |
| PGND                    |     2 | Black test points                                             |
| PGOOD, SUP, SUPSW, VOUT |     4 | Red test points                                               |
| R1                      |     1 | 20.0kΩ ±1% resistor (0402)                                    |
| R2, R6, R11             |     3 | 0Ω ±5% resistors (0402)                                       |
| R3                      |     1 | 100kΩ ±5% resistor (0402)                                     |
| R4                      |     1 | 12.1kΩ ±1% resistor (0402)                                    |
| R5                      |     1 | 10kΩ ±5% resistor (0402)                                      |
| R7, R8, R10             |     0 | Not installed, resistors (0402)                               |
| R9                      |     1 | 0Ω ±5% resistors (1210)                                       |
| U1                      |     1 | Automotive buck converter (20 TQFN-EP*) Maxim MAX20003ATPA/V+ |
| -                       |     4 | Shunts                                                        |
| -                       |     1 | PCB: MAX20003 EVALUATION KIT                                  |

Figure 1. MAX20003 EV Kit Schematic

<!-- image -->

<!-- image -->

Figure 2. MAX20003 EV Kit Component Placement GuideComponent Side

Figure 3. MAX20003 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX20003 EV Kit PCB Layout-Layer 2

<!-- image -->

<!-- image -->

Figure 5. MAX20003 EV Kit PCB Layout-Layer 3

Figure 6. MAX20003 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX20003 EV Kit Component Placement GuideSolder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20003EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX20002/MAX20003

## MAX20003 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/14            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

Evaluates: MAX20002/MAX20003