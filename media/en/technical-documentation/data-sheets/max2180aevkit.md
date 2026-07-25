<!-- lastmod 2022-08-02 -->
## MAX2180A Evaluation Kit

## General Description

The MAX2180A evaluation kit (EV kit) simplifies evaluation of the MAX2180A AM/FM low-noise amplifier. The EV kit  enables test of the device features and performance and requires no additional  support  circuitry  or  software. The  signal  input  and  output  use  SMA  connectors  to facilitate connection of RF test equipment.

The EV kit is fully assembled with the device on board and incorporates input matching components for the U.S. FM broadcast band.

## Component List

| DESIGNATION                                                   |   QTY | DESCRIPTION                                                |
|---------------------------------------------------------------|-------|------------------------------------------------------------|
| AMAGC, AMDET, ANTSENSE, FMAGC, FMDET, FMGAIN, LDO, VBATT (x2) |     9 | Red test points Keystone 5000                              |
| AMIN, AMOUT, FMIN, FMOUT                                      |     4 | SMAconnectors Johnson 142-0701-801                         |
| C1-C3, C5, C9, C12                                            |     6 | 0.1µF ±10% ceramic capacitors (0603) Murata GRM188R71E104K |
| C4                                                            |     1 | 0.47µF ±10% ceramic capacitor (0603) Murata GRM188R61A474K |
| C7                                                            |     1 | 2700pF ±5% ceramic capacitor (0603) Murata GRM18885C1H272J |
| C8                                                            |     1 | 10µF ±10% tantalum capacitor AVX TAJA106K010R              |
| C10                                                           |     1 | 10µF ±10% tantalum capacitor AVX TAJC106K035R              |
| C11                                                           |     1 | 100pF ±5% ceramic capacitor (0603) Murata GRM1885C1H101J   |

## Features

- Easy	Evaluation	of	the	MAX2180A
- +6V	to	+24V	Single-Supply	Operation
- RF	Inputs	and	Outputs	Matched	to	50Ω
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

| DESIGNATION      |   QTY | DESCRIPTION                                             |
|------------------|-------|---------------------------------------------------------|
| C13              |     1 | 27pF ±5% ceramic capacitor (0603) Murata GRM1885C1H270J |
| C30              |     1 | 56pF ±5% ceramic capacitor (0603) Murata GRM1885C1H560J |
| GND              |     2 | Black test points Keystone 5001                         |
| L1               |     1 | 82nH ±5% inductor (1008) Murata LQW2UAS82NJ00           |
| L5               |     1 | 470nH ±5% inductor (0805) TOKO LL2012-FHLR47J           |
| R1, R3, R10, R11 |     0 | Not installed, resistors                                |
| R2               |     1 | 10kΩ ±5% resistor (0603)                                |
| R4               |     1 | 43kΩ ±5% resistor (0603)                                |
| R5               |     1 | 62Ω ±5% resistor (0603)                                 |
| R6               |     1 | 20kΩ ±5% resistor(0603)                                 |
| R7               |     1 | 105Ω ±1% resistor (0603)                                |
| R8               |     1 | 0Ω ±5% resistor (0603)                                  |
| R9               |     1 | 100kΩ ±5% resistor                                      |
| R17              |     1 | 51Ω ±5% resistor (0603)                                 |

<!-- image -->

Evaluates: MAX2180A

## MAX2180A Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                           |
|---------------|-------|-------------------------------------------------------|
| U1            |     1 | AM/FM automotive LNA (24 TQFN-EP*) Maxim MAX2180AETG+ |
| -             |     5 | 4-40, 3/16 machine screws McMaster-Carr 91773A105     |
| -             |     5 | 4-40, 5/16 machine screws McMaster-Carr 90273A107     |

## Component Suppliers

| SUPPLIER                   | PHONE        | WEBSITE                |
|----------------------------|--------------|------------------------|
| AVX North America          | 864-967-2150 | www.avx.com            |
| Keystone Electronics Corp. | 800-221-5510 | www.keyelco.com        |
| Murata Americas            | 800-241-6514 | www.murataamericas.com |
| TOKOAmerica, Inc.          | 847-297-0070 | www.tokoam.com         |

Note: Indicate that you are using the MAX2180A when contacting these component suppliers.

## Quick Start

## Required Test Equipment

- RF	 signal generator (or generators) capable of delivering	a	signal	in	the	200kHz	to	30MHz	(AM)	range, or	76MHz	to	162.5MHz	(FM)	range	at	a	power	level	of -34dBm.(A	 higher	 power	 source	 is	 required	 to	 measure  distortion  performance.  See  the Measurements section for more details)
- RF	 spectrum	 analyzer	 that	 covers	 the	 operating frequency range
- DC	power	supply	capable	of	supplying	+6V	to	+24V
- 50Ω	cables	with	SMA	connectors
- Ammeter	to	measure	supply	current	(optional)
- Noise-figure	meter	to	measure	NF	(optional)
- Network	 analyzer	 to	 measure	 gain	 and	 return	 loss (optional)

## Connections and Setup

## Checking Gain

The EV kit is fully assembled and factory tested. Follow the steps below for proper device evaluation in the default configuration.

- 1)  Connect	a	DC	supply	(preset	to	+10V)	to	the	VBATT and	GND	terminals	(through	an	ammeter,	if	desired) on the EV kit.
- 2)  Set  the  RF  generator  to  the  desired  frequency  at  a power	 level	 of	 -37dBm.	 For	 AM	 gain	 measurement, connect	 the	 generator	 output	 to	 the	 AMIN	 SMA connector	on	the	EV	kit.	For	FM	gain	measurement, connect	 the	 generator	 output	 to	 the	 FMIN	 SMA connector on the EV kit.
- 3)  For	 FM	 gain	 measurement,	 connect	 an	 SMA	 cable from	 the	 FMOUT	 SMA	 connector	 to	 the	 input	 of the	 spectrum	 analyzer.	 For	 AM	 gain	 measurement, connect	 an	 SMA	 cable	 from	 the	 AMOUT	 SMA connector	to	the	input	of	the	spectrum	analyzer
- 4)  Turn	on	the	DC	supply.	The	supply	current	should	read approximately	75mA.
- 5)  Activate	the	RF	generator's	output.	The	signal	on	the spectrum	analyzer's	display	should	indicate	a	typical gain,	as	shown	on	the	MAX2180A	IC	data	sheet	after accounting for cable and board losses.
- 6)  Optional:	 Another	 method	 of	 determining	 gain	 is	 by using	 a	 network	 analyzer.	 This	 has	 the	 advantage of	 displaying	 gain	 versus	 a	 swept	 frequency	 band, in addition to displaying input and output return loss. Refer	to	the	user	manual	of	the	network	analyzer	for setup information.

Evaluates: MAX2180A

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| -             |     5 | 4-40 female standoffs, 1/4in hex x 3/8in McMaster-Carr 91780A163 |
| -             |     1 | Metal heat sink, aluminum base                                   |
| -             |     1 | PCB: MAX2180A EVALUATION KIT#                                    |

## Detailed Description of Hardware

## Test Points

The	MAX2180A	has	separate	FM	and	AM	signal	paths, each	 with	 its	 own	 power	 detector	 and	 AGC	 loop.	 The FM and AM signal paths can be separately adjusted for maximum	gain	and	AGC	threshold.	In	addition,	the	AGC loop	 can	 be	 overridden	 by	 applying	 an	 external	 voltage to	the	AMAGC	or	FMAGC	pins.	Table	1	describes	how	to control the performance of the device using the test points on the EV kit.

AM	gain	is	set	by	resistor	R8.	The	default	value	is	0Ω, giving	7.5dB	(typ)	gain.	Refer	to	the	MAX2180A	IC	data sheet for information on AM gain versus the value of R8.

## Measurements

## AM Gain

Most RF test and measurement equipment is designed to	 operate	 in	 50Ω	 characteristic	 impedance.	 However, the  impedance  of  an  automotive  AM  antenna  is  much higher	than	50Ω.	To	account	for	this,	the	EV	kit	adds	an RC	network	(R17,	C30)	on	the	AM	input.	The	50Ω	resistor (R17)	matches	the	characteristic	impedance	of	the	50Ω RF	signal	generator,	while	the	56pF	capacitor	mimics	the high source impedance of the antenna.

## AM Noise

AM noise at the output can be measured using a spectrum analyzer.	The	measurement	is	simplified	if	the	spectrum

## Evaluates: MAX2180A

analyzer	 is	 equipped	 with	 a	 noise	 marker.	 Because	 the noise	power	at	the	output	is	small,	a	post	amplifier	might be required.

## AM Distortion

Two-tone distortion of the AM amplifier can be measured using a power combiner to couple the signals from two generators	into	AMIN	on	the	EV	kit.	Because	the	signal generators	 can	 interact,	 generating	 distortion	 products of	their	own,	it	is	important	to	provide	sufficient	isolation between	them.	One	way	to	do	this	is	using	attenuators	on the generator outputs.

## FM Noise

FM  noise  figure  can  be  measured  using  a  NF  meter. Because	of	the	large	number	of	FM	broadcast	signals	that might	 be	 present,	 this	 measurement	 should	 take	 place with	the	EV	kit	in	a	screen	box	or	other	type	of	RF	shield.

## FM Distortion

Two-tone distortion of the FM amplifier can be measured using a power combiner to couple the signals from two generators	into	FMIN	on	the	EV	kit.	During	closed-loop operation,	as	the	signal	levels	increase,	the	device's	FM input impedance is reduced. At the upper end of the input signal	level	range,	where	each	tone	can	be	greater	than 120dBµV,	 this	 reduced	 impedance	 could	 create	 distortion within the signal generators. For accurate distortion measurement,	 the	 FM	 input	 of	 the	 EV	 kit	 should	 be isolated from the signal generators and power combiner. This can be accomplished using a ferrite isolator.

## Table 1. Control Performance with Test Points

| TEST POINT   | FUNCTION                   | DESCRIPTION                                                                                                                          |
|--------------|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| AMAGC        | AMAGC loop control voltage | Applying a DC control voltage toAMAGC allows the user to override theAGC loop. 5V gives maximum gain; 0V gives minimum gain.         |
| AMDET        | AMAGC threshold            | Sets theAMAGC threshold. Refer to the MAX2180A IC data sheet. Default value on the EV kit is 83dBµV (typ) (R11 = open).              |
| ANTSENSE     | Antenna sense              | Disables the device and sets the supply current to 20mA (typ) if the antenna fault is detected. Refer to the MAX2180A IC data sheet. |
| FMAGC        | FMAGC loop control voltage | Applying a DC control voltage to FMAGC allows the user to override theAGC loop. 0V gives maximum gain; 5V gives minimum gain.        |
| FMDET        | FMAGC threshold            | Sets the FMAGC threshold. Refer to the MAX2180A IC data sheet. Default value on the EV kit is 99dBµV (typ) (R4 = 43kΩ).              |
| FMGAIN       | FM gain control            | Sets the maximum value of FM gain (FMAGC = 0V). Default setting on the EV kit is 6dB (typ) (R2 = 10kΩ).                              |
| LDO          | Regulated voltage          | Allows measurement of internal regulator voltage.                                                                                    |

## Layout Considerations

## Electrical

At	high-signal-level	conditions,	the	RF	currents	flowing	in the	device	can	induce	voltages	in	the	PCB	ground	plane, known as 'ground bounce.' To avoid unwanted spurious products	in	the	signal	path	due	to	ground	bounce,	proper grounding techniques must be followed.

To prevent ground bounce from large FM signals entering the	AM	signal	path,	the	AM	bypass	capacitor	C3	and	AM input	 resistor	 R17	 must	 be	 grounded	 directly	 to	 ground pins 8 and 9.

## Thermal

The device is designed to meet data sheet specifications at	supply	voltages	up	to	+15V,	and	to	function	at	supply voltages	up	to	+24V.	Under	these	conditions,	a	significant amount of power must be dissipated by the circuit. This requires	 the	 application	 PCB	 to	 provide	 a	 low	 thermal impedance path to a thermal ground.

The	 EV	 kit	 PCB	 design	 accounts	 for	 this	 by	 providing an array of thermal vias in the ground plane and a wide top metal trace connecting the package pad to a nearby screw.	 Adjacent	 pins	 20-23	 are	 all	 grounded,	 which allows the wide trace.

## Evaluates: MAX2180A

Evaluates: MAX2180A

Figure 1. MAX2180A EV Kit Schematic

<!-- image -->

Figure 2. MAX2180A EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 3. MAX2180A EV Kit PCB Layout-Top Copper

<!-- image -->

Evaluates: MAX2180A

Figure 4. MAX2180A EV Kit PCB Layout-Bottom Copper

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX2180AEVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX2180A

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-462, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

Evaluates: MAX2180A