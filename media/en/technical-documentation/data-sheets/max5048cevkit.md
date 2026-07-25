<!-- lastmod 2022-08-02 -->
## MAX5048C Evaluation Kit

## General Description

The MAX5048C evaluation kit (EV kit) allows evaluation of  the  MAX5048C high-speed, low-side MOSFET driver that can source up to a 3A peak current and sink up to a  7A  peak  current.  The  EV  kit  uses  a  4V  to  14V  input supply.  The  EV  kit  uses  the  device  to  drive  a  4700pF capacitor that mimics the gate capacitance of an external nMOSFET. The EV kit demonstrates the MAX5048CAUT+ (6-pin SOT23). It is highly recommended that the EV kit layout be followed to ensure reliable driver operation and first-pass design success.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                       |
|---------------|-------|-----------------------------------------------------------------------------------|
| C1            |     1 | 10µF ±20%, 25V electrolytic capacitor (4.30mm x 4.30mm SMD) Panasonic EEEFK1E100R |
| C2            |     1 | 1µF ±10%, 25V X7R ceramic capacitor (0805) Murata GRM21BR71E105K                  |
| C3            |     1 | 4700pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H472K               |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |

Note:

Indicate that you are using the MAX5048C when contacting these component suppliers.

## Features

- 4V	to	14V	Single	Power-Supply	Range
- 3A/7A	Peak	Source/Sink	Drive	Current
- TTL	Logic	Level	Inverting	and	Noninverting	Inputs
- Independent	Source	and	Sink	Outputs
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                           |
|---------------|-------|-------------------------------------------------------|
| R1, R2        |     2 | 0Ω resistors (0603)                                   |
| U1            |     1 | High-speed MOSFET driver (6 SOT23) Maxim MAX5048CAUT+ |
| -             |     1 | PCB: MAX5048C EVALUATION KIT                          |

Evaluates: MAX5048C

<!-- image -->

## MAX5048C Evaluation Kit

## Quick Start

## Required Equipment

- MAX5048C	EV	kit
- 4V	to	14V	DC	power	supply

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Connect the positive terminal of the power supply to the	V+	PCB	connector	and	the	negative	terminal	to	the nearest	GND	PCB	connector	on	the	EV	kit.
- 2)  Set the V+ power supply to 5V.
- 3)  Drive	IN+,	IN-,	and	verify	states	per	Table	1.
- 4)  Repeat	accordingly	for	the	other	circuits.

## Detailed Description of Hardware

The MAX5048C EV kit operates on a 4V to 14V wideinput	 voltage	 range	 and	 sources	 3A	 peak	 current/sinks 7A peak current.

## Inverting (IN-) and Noninverting (IN+) Logic Inputs

The  EV  kit  has  independent  inverting  and  noninverting TTL	 logic	 inputs.	 These	 inputs	 control	 the	 P\_OUT	 and N\_OUT	states,	as	shown	in	Table	1.

## Power-Supply Input (V+)

The EV kit operates from 4V to +14V power supply.

## Table 1. Truth Table

Figure 1. MAX5048C EV Kit Schematic

| IN+   | IN-   | P_OUT   | N_OUT   |
|-------|-------|---------|---------|
| L     | L     | Off     | On      |
| L     | H     | Off     | On      |
| H     | L     | On      | Off     |
| H     | H     | Off     | On      |

<!-- image -->

│

Figure 2. MAX5048C EV Kit Component PlacementComponent Side

<!-- image -->

## Evaluates: MAX5048C

Figure 3. MAX5048C EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX5048C EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX5048CEVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX5048C

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

Evaluates: MAX5048C