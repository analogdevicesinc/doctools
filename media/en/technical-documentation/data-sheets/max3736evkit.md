<!-- lastmod 2022-08-02 -->
## MAX3736 Evaluation Kit

## General Description

The  MAX3736  evaluation  kit  (EV  kit)  is  an  assembled demonstration board that provides complete optical evaluation of the MAX3736 3.3V multirate laser driver.

The EV kit is composed of an optical test circuit. The output of  the  optical  evaluation  section  is  configured  for  attachment  to  a  laser/monitor  diode  that  is  configured  in  the standard four-lead laser connection on BOSA packages.

## Optical Evaluation Component List

| DESIGNATION            |   QTY | DESCRIPTION                              |
|------------------------|-------|------------------------------------------|
| C1, C11, C15, C16, C20 |     5 | 0.1µF ±10% ceramic capacitors (0402)     |
| C2-C4                  |     0 | Not installed, ceramic capacitors (0402) |
| C5, C6                 |     2 | 220pF ±10% ceramic capacitors (0402)*    |
| C7                     |     1 | 1µF ±10% ceramic capacitor (0805)        |
| C17, C23               |     2 | 0.01µF ±5% ceramic capacitors (0402)     |
| D1                     |     0 | Not installed, user-supplied laser       |
| J1, J2                 |     2 | SMAconnectors, tab contact               |
| J8, J10, TP1-TP10      |    12 | Test points                              |
| JU1, JU2, JU13         |     3 | 2-pin headers, 0.1in centers             |
| L1, L3                 |     2 | Ferrite beads (0402) Murata BLM15HG102   |

## Features

- Single	+3.3V	Power-Supply	Operation
- AC-Coupling	Provided	On-Board
- Allows	Optical	Evaluation
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                 |
|---------------|-------|-------------------------------------------------------------|
| R1, R2        |     2 | 1.5kΩ ±5% resistors (0402)                                  |
| R3            |     1 | 75Ω ±5% resistor (0402)*                                    |
| R4, R18       |     2 | 1.0kΩ ±1% resistors (0402)                                  |
| R15, R17      |     2 | 20kΩ variable resistors                                     |
| R21           |     1 | 10Ω ±5% resistor (0402)                                     |
| R22           |     1 | 24Ω ±5% resistor (0402)*                                    |
| R23           |     1 | 15Ω ±5% resistor (0402)                                     |
| U2            |     1 | 3.3V multirate laser driver (16 TQFN-EP*) Maxim MAX3736ETE+ |
| -             |     3 | Shunts                                                      |
| -             |     1 | PCB: MAX3736 EVALUATION KIT REV C                           |

*These components are part of the compensation network, which can reduce overshoot and ringing. Ringing due to parasitic series inductance of the laser can be eliminated with R22/R3 and C6/C5. Starting values for most coaxial lasers is R3 = 75Ω in series with C5 = 220pF and R22 = 24Ω in series with C6 = 220pF. These values should be experimentally adjusted until the optical eye diagram is optimized.

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note:

Indicate that you are using the MAX3736 when contacting this component supplier.

Evaluates: MAX3736

<!-- image -->

## QuickStart

## Procedure

For	optical	evaluation	of	the	device,	configure	the	EV	kit as	follows:

- 1)  To	enable	the	outputs,	connect	DIS	to	GND	by	placing a	shunt	across	jumper	JU13.
- 2)  The	EV	kit	is	designed	to	allow	connection	to	a	typical BOSA-packaged	laser.	Connect	the	laser	with	monitor diode	(Figure	1)	as	follows:

Keeping	 its	 leads	 as	 short	 as	 possible,	 connect	 the laser  diode  to  the  appropriate  pads  in  the  cut-out portion	on	the	top	(component)	side	of	the	PCB.

Note: When	performing	the	following	resistance	checks, manually	 set	 the	 ohmmeter	 to	 a	 high	 range	 to	 avoid forward	biasing	the	on-chip	ESD	protection	diodes.

- 3)  Adjust	 R17,	 the	 R MODSET 	 potentiometer,	 for	 maximum	 resistance	 (≈20kΩ)	 between	 TP7	 and	 ground. This	 sets	 the	 modulation	 current	 to	 a	 low	 value (&lt;	 10mA).	 Refer	 to	 the Design Procedure section  in the	MAX3736	IC	data	sheet.
- 4)  Apply a differential input signal (200mVP-P to 2400mVP-P)	 between	 SMA	 connectors	 J1	 and	 J2 (IN+	and	IN-).
- 5)  Attach	the	laser	diode	fiber	connector	to	an	optical-toelectrical converter.

## Table 1. Adjustment and Control Descriptions (see the Quick Start section first)

| DESIGNATION   | NAME      | DESCRIPTION                                                                                                                                                           |
|---------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU13          | DIS       | Enables/disables the output currents. Active low (shunt across JU13 to enable output currents).                                                                       |
| R15           | R BIASSET | Adjusts the bias current.                                                                                                                                             |
| R17           | R MODSET  | Adjusts the laser modulation current.                                                                                                                                 |
| TP8           | BC_MON    | TP8 offers a connection to probe the BC_MON current through a 1kΩ resistor to ground. This allows the bias current to be determined as I BIAS = V BC_MON /1000Ω x 85. |
| TP9           | BIAS      | TP9 allows the voltage at the BIAS pin to be monitored.                                                                                                               |
| TP10          | MD        | TP10 offers a connection to probe the monitor diode current through a 1kΩ resistor to ground. The current can be determined as I MD = V MD /1000Ω.                    |

- 6)  Connect	 a	 3.3V	 supply	 between	 J8	 (V CC )	 and	 J10 (GND).	Set	the	current	limit	to	200mA	and	power	on the device.
- 7)  Adjust	 R15	 (R BIASSET )  until  the  desired  average optical	power	is	achieved.
- 8)  The	BIAS	current	can	be	monitored	at	TP8	(V BC\_MON ) using	the	following	equation:

<!-- formula-not-decoded -->

Note: If	the	voltage	at	TP8	exceeds	1.39V,	the	BC\_MON pin goes out of regulation.

- 9)  Adjust	R17	(R MODSET ) until the desired optical amplitude is achieved. Optical amplitude can be observed on  an  oscilloscope  connected  to  an  optical-to-electrical	 converter.	 Laser	 overshoot	 and	 ringing	 can	 be improved	 by	 appropriate	 selection	 of	 R3,	 R21-R23, C5,	 and	 C6,	 as	 described	 in	 the Design  Procedure section	in	the	MAX3736	IC	data	sheet.

Note: External	DACs	can	be	used	to	control	the	bias and	modulation	current.	To	do	this,	remove	shunts	from jumpers	 JU1	 and	 JU2	 to	 disconnect	 potentiometers R15	 (R BIASSET )	 and	 R17	 (R MODSET ).	 Connect	 the DAC	outputs	to	TP6	(BIASSET)	and	TP7	(MODSET).

Figure 1. Attachment of Packaged Laser to the MAX3736 EV Kit

<!-- image -->

Figure 2. MAX3736 EV Kit Schematic

<!-- image -->

Figure 3. MAX3736 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX3736 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX3736 EV Kit PCB Layout-Ground Plane

<!-- image -->

Figure 6. MAX3736 EV Kit PCB Layout-Power Plane

<!-- image -->

Figure 7. MAX3736 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| MAX3736EVKIT | EV Kit |

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/12           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

Evaluates: MAX376