<!-- lastmod 2022-08-02 -->
## MAX3949 Evaluation Kit

## General Description

The  MAX3949  evaluation  kit  (EV  kit)  is  a  fully  tested  and  assembled  demonstration  board  that  provides optical evaluation of the MAX3949 AC-coupled, 1Gbps to 11.3Gbps laser driver. The controlling software communicates with the EV kit through the USB port and provides simplified control of all functions of the IC. The EV kit can be fully powered by the USB port or the user can choose to power the IC by a single external 3.3V supply, while the USB port supplies the on-board microcontroller. The flexcable connection on the evaluation board allows attachment of lasers incorporating flex cables.

## Component List

| DESIGNATION                |   QTY | DESCRIPTION                                  |
|----------------------------|-------|----------------------------------------------|
| C1, C3-C5, C8, C16         |     6 | 0.01µF ±10% ceramic capacitors (0402)        |
| C2, C10, C14, C28          |     0 | Not installed, ceramic capacitors (0201)     |
| C6, C9                     |     0 | 0.5pF ±0.1pF ceramic capacitors (0402)       |
| C7, C12, C24, C29, C33     |     5 | 0.1µF ±20% ceramic capacitors (0204)         |
| C11, C13, C15              |     3 | 10µF ±10% ceramic capacitors (0805)          |
| C21, C22                   |     2 | 33pF ±10% ceramic capacitors (0402)          |
| C25-C27, C49, C52          |     5 | 0.1µF ±10% ceramic capacitors (0402)         |
| C34, C55                   |     2 | 1µF ±10% ceramic capacitors (0603)           |
| C35, C37, C38              |     3 | 4.7µF ±10% ceramic capacitors (0805)         |
| D6                         |     1 | Green LED                                    |
| J1, J2                     |     2 | Edge-mount SMAconnectors                     |
| J3, J4, TP1- TP4, TP6-TP15 |    16 | Test points                                  |
| J5-J7, J9, J10             |     5 | 2-pin headers, 0.1in centers                 |
| J8                         |     1 | Mini-USB, type B connector                   |
| L1                         |     1 | 22µF, ±20% inductor Taiyo Yuden CBC3225T220M |
| L2, L3                     |     2 | 18nH ±2% inductors (0402)                    |
| L4, L6                     |     2 | Ferrite beads (0402) Murata BLM15GG471       |

## Features

- Drives	Differentially	Connected	Lasers
- Software	Control	of	the	IC
- Power	Supplied	through	the	USB	or	External Connection
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

*EP = Exposed pad.

| DESIGNATION             |   QTY | DESCRIPTION                                                          |
|-------------------------|-------|----------------------------------------------------------------------|
| L5, L10, L14            |     3 | 10µH ±10% inductors (0603)                                           |
| R1                      |     1 | 1.00kΩ ±1% resistor (0402)                                           |
| R2, R7, R8, R12         |     0 | Not installed, resistors (0201)                                      |
| R3                      |     1 | 680Ω ±5% resistor (0402)                                             |
| R4, R31, R51, R53       |     4 | 10kΩ ±5% resistors (0402)                                            |
| R5, R6                  |     2 | 20Ω ±5% resistors (0402)                                             |
| R10                     |     1 | 100Ω ±5% resistor (0402)                                             |
| R15, R50                |     2 | 4.7kΩ ±5% resistors (0402)                                           |
| R18, R52, R55, R66, R73 |     5 | 51Ω ±5% resistors (0402)                                             |
| R24                     |     1 | 1.5kΩ ±5% resistor (0402)                                            |
| SW1                     |     1 | SPDT switch                                                          |
| U1                      |     1 | 1Gbps to 11.3Gbps, SFP+ laser driver (16 TQFN-EP*) Maxim MAX3949ETE+ |
| U2                      |     1 | Low-noise LDO regulator (8 TDFN) Maxim MAX8902AATA+                  |
| U6                      |     0 | Not installed, user-supplied TOSA                                    |
| U10                     |     1 | Microcontroller (28 SO) Microchip PIC16C745-I/SO                     |
| Y2                      |     1 | 6MHz crystal ECS Inc. ECS-60-32-5PXDN                                |
| -                       |     1 | PCB: MAX3949 EVALUATION BOARD REVA                                   |

Evaluates: MAX3949

<!-- image -->

## Quick Start

## Required Equipment

- MAX3949	EV	kit
-  Windows ® PC
- Oscilloscope

Note: In the following sections, software-related items are identified by bold text. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

- 1) Solder	a	laser	to	U6.	See	Figure	1	for	more	informa -tion about the laser connection.
- 2) Set SW1 to the desired power-supply option (USB or external supply).
- 3) If  an  external  power  supply  is  used,  set  the  voltage to 3.3V, the current limit to 300mA, and connect the supply to the board.
- 4) Get the latest version of the EV  kit software (MAX3949Rev1.ZIP)	 by	 contacting	 Maxim	 custom -er  support  at support.maximintegrated.com .  After receiving  the  file,  unzip  it  to  a  local  folder  and  run the  installation  executable  (setup.EXE).  Installation requires  administrative  rights  and  can  also  require Internet access to download the nec  essary drivers.
- 5) After installation is  complete,  follow  this  path  to start	the	program: Start → All Programs → Maxim Integrated Products → MAX3949 EV Kit GUI .
- 6) Connect the computer to the EV kit with a USB cable (A-male	 to	 Mini-B-Male).	 LED	 D6	 should	 illuminate,

Figure 1. TOSA Connection

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

indicating	 that	 USB	 power	 is	 detected.	 Press	 the USB Connect button in the software to initiate communication to the EV kit. The Status indicator turns green when communication is established.

- 7) Connect	a	50Ω	source	to	TIN-	and	TIN+	(J1	and	J2). Set the source differential amplitude to 500mV P-P .
- 8) Connect	 the	 output	 from	 the	 TOSA	 to	 an	 optical receiver (optical-to-electrical converter or optical input head on an oscilloscope).
- 9) All	device	controls	are	available	in	the	software.	Fault and warning indicators are displayed on the right side of  the  graphical  user  interface  (GUI)  window.  When a hard fault has occurred, the part goes into latched shutdown. The source of the fault should be removed and  the DISABLE checkbox  should  be  toggled  to reset the part.
- 10) The  registers  contain  a  default  setting  and  can  be read using the Tx Read All button.	For	detailed	regis -ter functions, refer to the MAX3949 IC data sheet.
- 11) To  enable  the  part,  the DISABLE checkbox  should be toggled (check then uncheck) and the TX Enable checkbox should be checked. After doing this, press the TX Read All button twice and check to see if any faults are indicated. If everything is set up properly, all fault indicators should be green.
- 12) The Tx De-emphasis Control can be used to adjust the eye diagram. After choosing a new setting, press the Tx De-emphasis Control LOAD button followed by the IMod LOAD button. This loads the new preemphasis setting to the modulation current driver.

## Detailed Description of Software

## Graphical User Interface (GUI)

The	MAX3949	EV	kit	GUI	consists	of	three	main	blocks: bias and modulation control, data path adjustments, and fault indicators.

## Bias and Modulation Control

For	bias	and	modulation	current	there	are	three	controls: set  current,  set  maximum,  and  increment.  The  left-side data-entry boxes allow the user to write to the SET\_IBIAS or	 SET\_IMOD	register	directly,	 as	 long	 as	 that	 value	 is below	the	value	loaded	in	the	IBIASMAX	and	IMODMAX registers.  The  middle  data-entry  boxes  allow  the  user to	 write	 to	 the	 IBIASMAX	and	IMODMAX	registers.	The right-side data-entry boxes allow the user to increment or decrement the bias and modulation current registers over a	±15	LSB	range	by	writing	to	the	BIASINC	and	MODINC registers. The appropriate LOAD button must be pressed

Figure 2. MAX3949 EV Kit Software

<!-- image -->

to  initiate  a  register  write.  The READ buttons  read  and display	 the	 values	 held	 in	 the	 SET\_IBIAS/SET\_IMOD, IBIASMAX/IMODMAX,	and	BIASINC/MODINC	registers.

## Data Path Adjustments

This  group  box  allows  control  of  deemphasis,  the  input equalization,  and  data  polarity.  The Tx  De-emphasis Control has a drop-down list with four options for setting the	TXDE\_MD	register.	When	manual	control	is	selected, the De-emphasis drop-down  list  becomes  available to	 write	 values	 to	 the	 SET\_TXDE	 register.	 The Tx  EQ Control checkboxes lets the user set the two SET\_TXEQ bits, checked for a 1 and unchecked for a 0. When the Tx Polarity checkbox	is	checked,	the	TOUT+	pin	sinks	cur -rent	when	TIN+	is	high	(typical	setup).	The	output	polarity is inverted if the checkbox is left unchecked.

## Fault Indicators

Along the right-hand side of the GUI are fault indicators that show the status of the TXSTAT1 and TXSTAT2 registers. Hard faults disable the part and require a toggling of  the DISABLE checkbox  to  restart  the  part  (once  the source of the fault  has  been  removed). The  hard  faults can  be  masked  by  checking  the  appropriate  checkbox beside the fault indicator. Soft faults operate as warnings but do not disable the part. Automatic updating of the fault monitors  can  be  enabled  by  checking  the Auto  Read Enabled checkbox.

## Output Network

The output network has multiple components to improve the  optical  eye  diagram.  The  RC  shunts  on  the  laser's anode  and  cathode  (R7,  C10,  R2,  and  C14)  affect  the S22 of the IC and are placed very close to the output pins, TOUTA	and	TOUTC.	The	RC	shunts	near	the	TOSA	(R12, C2,  R8,  and  C28)  help  compensate  for  the  mismatch in	 impedance	where	the	TOSA	solders	to	the	PCB.	For many	TOSAs,	RC	shunts	are	only	needed	at	the	TOSA side	of	the	connection.	Typically,	RC	values	of	82Ω	and 0.4pF	on	R8,	R12,	C28,	and	C2	are	good	starting	values.

│

Figure 3. MAX3949 EV Kit Schematic

<!-- image -->

Figure 4. MAX3949 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 5. MAX3949 EV Kit PCB Layout-Top Side

<!-- image -->

Figure 6. MAX3949 EV Kit PCB Layout-Ground Plane

<!-- image -->

Figure 7. MAX3949 EV Kit PCB Layout-Power Plane

<!-- image -->

Figure 8. MAX3949 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 9. MAX3949 EV Kit Component Placement Guide-Solder Side

<!-- image -->

## Ordering Information

| PART          | TITLE   |
|---------------|---------|
| MAX3949EVKIT# | EV Kit  |

#Denotes RoHS compliant.

## MAX3949 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/12           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.	The	parametric	values	(min	and	max	limits) shown	in	the	Electrical	Characteristics	table	are	guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

Evaluates: MAX3949