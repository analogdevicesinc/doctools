<!-- lastmod 2022-08-02 -->
## MAX14626 Evaluation Kit

## General Description

The MAX14626 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX14626 high-voltage 4-20mA current-loop protector.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| C1, C2        |     2 | 1µF ±10%, 50V X5R ceramic capacitors (0805) Taiyo Yuden UMK212BJ105KG-T |
| JU1-JU8       |     8 | 2-pin single-row headers                                                |
| R1            |     1 | 200Ω ±1%, 0.5W resistor (1210)                                          |
| R2            |     1 | 499Ω ±1%, 0.5W resistor (1210)                                          |
| R3            |     1 | 1kΩ ±1%, 0.5W resistor (1210)                                           |
| R4            |     1 | 2kΩ ±1%, 0.5W resistor (1210)                                           |
| R5            |     1 | 5kΩ 1W potentiometer Bourns 3290W-1-502                                 |
| R6, R7        |     2 | 499Ω ±0.1% resistors (0805)                                             |

## Component Suppliers

| SUPPLIER     | PHONE        | WEBSITE         |
|--------------|--------------|-----------------|
| Bourns, Inc. | 408-496-0706 | www.bourns.com  |
| Molex        | 800-786-6539 | www.molex.com   |
| Taiyo Yuden  | 800-348-2496 | www.t-yuden.com |

Note: Indicate that you are using the MAX14626 when contacting these component suppliers.

Evaluates: MAX14626

## Benefits and Features

- Evaluates Current-Limit Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| TB1, TB2      |     2 | Terminal blocks Molex 39357-0002                                              |
| TP1, TP3, TP5 |     3 | Red test points                                                               |
| TP2, TP4, TP6 |     3 | Black test points                                                             |
| U1            |     1 | 4-20mA current-loop protector (6 TDFN-EP*) Maxim MAX14626ETT+ (Top Mark: AVF) |
| -             |     8 | Shunts                                                                        |
| -             |     1 | PCB: MAX14626 EVKIT                                                           |

* EP = Exposed pad.

<!-- image -->

## MAX14626 Evaluation Kit

## Quick Start

## Required Equipment

- MAX14626	EV	kit
- 25V	DC	power	supply
- Ammeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Install shunts on jumpers JU7 and JU8.
- 3) Connect one side of the ammeter to 25V power supply and the other side to TP1 to measure the current going through the device and load.
- 4) Connect the ground of the power supply to TP2.
- 5) Install a shunt on jumper JU2.
- 6) Turn on the 25V power supply. Verify that the ammeter reading is approximately 30mA.
- 7) Turn off the power supply.
- 8) Remove the shunt on JU2. Install a shunt on jumper JU3.
- 9) Turn on the 25V power supply. Verify that the ammeter reading is approximately 30mA.
- 10)  Turn off the power supply.
- 11)  Remove the shunt on JU3. Install a shunt on jumper JU4.
- 12)  Turn on the 25V power supply. Verify that the ammeter reading is approximately 19.6mA.
- 13)  Turn off the power supply.
- 14)  Remove the shunt on JU4. Install a shunt on jumper JU5.
- 15)  Turn on the 25V power supply. Verify that the ammeter reading is approximately 10.9mA.
- 16)  Turn off the power supply.

Evaluates: MAX14626

## Detailed Description of Hardware

The  MAX14626  EV  kit  is  a  fully  assembled  and  tested circuit  board  demonstrating  the  MAX14626 high-voltage 4-20mA  current-loop  protector  IC  in  a  6-pin  surfacemount TDFN package with an exposed pad.

Using all the jumpers, the EV kit circuit can be configured to evaluate the current-limit capability of the device. For example,	with	shunts	on	JU7	and	JU8,	the	load	is	249Ω. With	 shunt	 on	 JU2,	 the	 added	 resistance	 is	 200Ω.	 The on-resistance	 of	 the	 device	 is	 approximately	 25Ω.	 With 25V input, the current going through the device can be calculated	as	25V/(249Ω	+	25Ω	+	200Ω)	=	52.7mA,	but the actual current going through is limited by the device to be approximately 30mA.

## Table 1. Jumper Settings (JU1-JU8)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                              |
|----------|------------------|------------------------------------------|
| JU1      | Installed        | TP1 connected directly to IN             |
| JU1      | Not installed*   | TP1 not connected to IN                  |
| JU2      | Installed        | TP1 connected to 200Ω to IN              |
| JU2      | Not installed*   | TP1 not connected to IN                  |
| JU3      | Installed        | TP1 connected to 500I IN                 |
| JU3      | Not installed*   | TP1 not connected to IN                  |
| JU4      | Installed        | TP1 connected to 1kI to IN               |
| JU4      | Not installed*   | TP1 not connected to IN                  |
| JU5      | Installed        | TP1 connected to 2kΩ to IN               |
| JU5      | Not installed*   | TP1 not connected to IN                  |
| JU6      | Installed        | TP1 connected to variable resistor to IN |
| JU6      | Not installed*   | TP1 not connected to IN                  |
| JU7      | Installed        | OUT connected 499Ω to ground             |
| JU7      | Not installed*   | OUT not connected 499Ω to ground         |
| JU8      | Installed        | OUT connected 499Ω to ground             |
| JU8      | Not installed*   | OUT not connected 499Ω to ground         |

│

Figure 1. MAX14626 EV Kit Schematic

<!-- image -->

<!-- image -->

Figure 2. MAX14626 EV Kit Component Placement GuideComponent Side

Figure 3. MAX14626 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX14626 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14626EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX14626

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	InteJrated	reserves	the	riJht	to	chanJe	the	circuitry	and	speci¿cations	without	notice	at	any	time.

│

Evaluates: MAX14626