<!-- lastmod 2022-08-02 -->
## General Description

The MAX9947 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX9947  AISG-compliant  integrated transceiver. The EV kit has two MAX9947 devices installed on the board. When one MAX9947 works as a transmitter, the other works as a receiver.

## System Diagram

<!-- image -->

<!-- image -->

## MAX9947 Evaluation Kit

## Features

- S Two MAX9947 Devices (One Works as a Transmitter and the Other as a Receiver)
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9947EVKIT+ | EV Kit |

## Component List

| DESIGNATION      |   QTY | DESCRIPTION                                                            |
|------------------|-------|------------------------------------------------------------------------|
| C1, C2, C10, C11 |     4 | 10 F F Q 10%, 10V X5R ceramic capacitors (0805) Murata GRM21BR61A106K  |
| C3, C4, C12, C13 |     4 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C5, C14          |     2 | 1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C105K   |
| C6, C7, C15, C16 |     0 | Not installed, ceramic capacitors (0603)                               |
| C8, C9, C17, C18 |     4 | 39pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H390J     |

| DESIGNATION              |   QTY | DESCRIPTION                     |
|--------------------------|-------|---------------------------------|
| J1, J3                   |     2 | SMA connectors, edge mount      |
| J2, J4                   |     2 | SMA connectors, vertical mount  |
| JU1, JU6, JU7, JU12-JU16 |     8 | 2-pin headers                   |
| JU2-JU5, JU8-JU11        |     8 | 3-pin headers                   |
| L1, L2                   |     2 | 0 I Q 5% resistors (0805)       |
| R1, R7                   |     2 | 1k I Q 5% resistors (0603)      |
| R2, R8                   |     2 | 4.12k I Q 1% resistors (0603)   |
| R3, R9                   |     2 | 10k I Q 1% resistors (0603)     |
| R4, R10                  |     2 | 49.9 I Q 1% resistors (0603)    |
| R5, R11                  |     0 | Not installed, resistors (0603) |
| R6, R12                  |     2 | 10k I Q 5% resistors (0603)     |
| TP1, TP9                 |     2 | Red multipurpose test points    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9947 Evaluation Kit

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION          |   QTY | DESCRIPTION                                                  |
|----------------------|-------|--------------------------------------------------------------|
| TP2, TP4, TP10, TP12 |     4 | Black multipurpose test points                               |
| TP3, TP11            |     2 | Yellow multipurpose test points                              |
| TP5-TP8, TP13-TP18   |    10 | Red miniature test points                                    |
| U1, U2               |     2 | AISG integrated transceivers (16 TQFN-EP*) Maxim MAX9947ETE+ |

| DESIGNATION   |   QTY | DESCRIPTION                                            |
|---------------|-------|--------------------------------------------------------|
| VR1, VR2      |     2 | 50k I top-adjust 12-turn trimmers (2mm)                |
| Y1, Y2        |     2 | 8.704MHz crystals Hong Kong X'tals SSL87040N1HS188F0-0 |
| -             |    16 | Shunts                                                 |
| -             |     1 | PCB: MAX9947 EVALUATION KIT+                           |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Hong Kong X'tals Ltd.                  | 852-35112388 | www.hongkongcrystal.com     |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX9947 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX9947	EV	kit
- 3.3V	100mA	DC	power	supply
- Waveform	generator
- 2-channel	oscilloscope
- 3) Connect	 the	 3.3V	 DC	 power	 supply	 between	 TP9 (U2\_VCC)	and	TP10	(GND).
- 4) Set	 the	 waveform	 generator	 to	 output	 a	 square wave.	 Set	 the	 amplitude	 to	 3.3V,	 frequency	 to 38.4kHz,	duty	cycle	to	50%,	and	offset	to	1.65V.
- 5) Connect	 the	 waveform-generator	 output	 between TP6	(TXIN)	and	TP2	(GND).
- 6) Unused TXIN pin must be tied to VL to avoid data collision.  Tie  TP14  to  VL  when  using  U2  as  a receiver.
- 7) Connect the oscilloscope channel 1 to TP6 (TXIN).
- 8) Connect  the oscilloscope channel 2 to  TP15 (RXOUT).
- 9) Verify	that	the	waveforms	of	channels	1	and	2	are similar.
- 10)  Verify	 that	 TP16	 (DIR)	 is	 asserted	 high,	 indicating data	is	flowing	from	U1	to	U2.

## Procedure

The	 following	 procedure	 demonstrates	 one	 MAX9947 (as  a  transmitter)  modulating  a  38.4kbps  OOK  signal and  transmitting  the  modulated  signal  to  the  second MAX9947 (as a receiver). The receiver demodulates the modulated signal and reconstructs the digital signal.

- 1) Verify	 that	 all	 jumpers	 (JU1-JU16)	 are	 in	 their default	positions,	as	shown	in	Table	1.
- 2) Connect	 the	 3.3V	 DC	 power	 supply	 between	 TP1 (U1\_VCC)	and	TP2	(GND).

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1. Jumper Descriptions (JU1-JU16)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                         |
|----------|------------------|-----------------------------------------------------|
| JU1      | 1-2*             | U1 VL pin connected to U1 VCC pin                   |
| JU1      | Open             | U1 VL pin disconnected from U1 VCC pin              |
| JU2      | -                | See Table 2                                         |
| JU3      | -                | See Table 2                                         |
| JU4      | 1-2*             | U1 output level at TXOUT is set at +3dBm            |
| JU4      | 2-3              | U1 output level at TXOUT is adjustable by VR1       |
| JU5      | 1-2*             | U1 uses on-board crystal                            |
| JU5      | 2-3              | U1 uses external clock applied on SMA J2            |
| JU6      | Open*            | U1 uses on-board crystal                            |
| JU6      | 1-2              | U1 uses external clock applied on SMA J2            |
| JU7      | 1-2*             | U2 VL pin connected to U2 VCC pin                   |
| JU7      | Open             | U2 VL pin disconnected from U2 VCC pin              |
| JU8      | -                | See Table 2                                         |
| JU9      | -                | See Table 2                                         |
| JU10     | 1-2*             | U2 output level at TXOUT is set at +3dBm            |
| JU10     | 2-3              | U2 output level at TXOUT is adjustable by VR2       |
| JU11     | 1-2*             | U2 uses on-board crystal                            |
| JU11     | 2-3              | U2 uses external clock applied on SMA J4            |
| JU12     | Open*            | U2 uses on-board crystal                            |
| JU12     | 1-2              | U2 uses external clock applied on SMA J4            |
| JU13     | 1-2*             | SMA J1 and J3 signals connected by a PCB trace      |
| JU13     | Open             | SMA J1 and J3 signals not connected                 |
| JU14     | 1-2*             | U1 and U2 grounds connected                         |
| JU14     | Open             | U1 and U2 grounds disconnected                      |
| JU15     | 1-2*             | U1 SYNCOUT pulled up to VCC through a 1k I resistor |
| JU15     | Open             | U1 SYNCOUT not pulled up to VCC                     |
| JU16     | 1-2*             | U2 SYNCOUT pulled up to VCC through a 1k I resistor |
| JU16     | Open             | U2 SYNCOUT not pulled up to VCC                     |

## MAX9947 Evaluation Kit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX9947 Evaluation Kit

## Detailed Description of Hardware

The	MAX9947	IC	is	an	AISG-compliant,	fully	integrated transceiver.

The  EV  kit  has  two  MAX9947  devices  on  the  board. When	 one	 MAX9947	 is	 configured	 as	 a	 transmitter, the	other	can	be	configured	as	a	receiver.	A	user	can connect the transmitter and the receiver though a usersupplied	coaxial	cable,	or	by	simply	shorting	a	jumper on	the	board	for	quick	testing.

## Transmission Output Power

The	IC	output	level	at	TXOUT	can	be	set	by	using	two external resistors that connect at the RES and BIAS pins.

The	EV	kit	defaults	to	the	nominal	power	level	of	+3dBm at	the	feeder	cable	as	the	AISG	standard	requires.	Using the U1 transceiver as an example, with R2 = 4.12k I and R3 = 10k I , provides 1.78VP-P at TXOUT.

By	placing	a	shunt	on	jumper	JU4	(JU10	in	the	case	of U2 transceiver) across pins 2-3, the TXOUT voltage level can	 be	 varied	 by	 using	 the	 on-board	 variable	 resistor VR1	(VR2	in	the	case	of	U2).	TXOUT	is	varied	according to	the	following	equations:

TXOUT P-P P-P For U1: V (V ) = 2.52V x R3/(R3 + VR1)

TXOUT P-P P-P For U2: V (V ) = 2.52V x R9/(R9 + VR2)

## External Clock for AISG Transceiver

By	default,	nominal	8.704MHz	crystals	are	connected	to each	 MAX9947	 AISG	 transceiver.	 Alternatively,	 a	 user can	apply	an	external	clock	on	SMA	connector	J2	(J4 in	the	case	of	U2)	and	place	shunts	across	pins	2-3	of jumper	JU5	and	pins	1-2	of	jumper	JU6	(JU11	and	JU12 in	the	case	of	U2)	to	disable	the	on-board	crystals.

## Bit-Time Duration Selector

Jumpers	JU2	and	JU3	(JU8	and	JU9	in	the	case	of	U2) define	the	duration	of	the	bit	time,	as	shown	in	Table	2.

Table 2. Bit-Time Duration Selector (JU2, JU3, JU8, JU9)

| DIRMD2 (JU2, JU8 SHUNT POSITION)   | DIRMD1 (JU3, JU9 SHUNT POSITION)   | AISG DATA RATE (kbps)   | UNITY BIT TIME (µs)   |
|------------------------------------|------------------------------------|-------------------------|-----------------------|
| 0 (2-3)                            | 0 (2-3)                            | 9.6                     | 104.16                |
| 0 (2-3*)                           | 1 (1-2*)                           | 38.4                    | 26.04                 |
| 1 (1-2)                            | 0 (2-3)                            | 115.2                   | 8.68                  |
| 1 (1-2)                            | 1 (1-2)                            | -                       | -                     |

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9947 Evaluation Kit

Figure 1. MAX9947 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX9947 Evaluation Kit

Figure 2. MAX9947 EV Kit Component Placement

<!-- image -->

Guide-Component Side

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 3. MAX9947 EV Kit PCB Layout-Component Side

<!-- image -->

## MAX9947 Evaluation Kit

Figure 4. MAX9947 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

7