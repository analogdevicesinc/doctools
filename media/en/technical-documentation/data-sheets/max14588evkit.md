<!-- lastmod 2022-08-04 -->
## MAX14588 Evaluation Kit

## General Description

The MAX14588 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX14588 adjustable  overcurrent  and  overvoltage  protector.  The EV kit  features TVS  diode  on  input  and  Schottky  diode on output. Input power to the EV kit uses a 4.5V to 36V input supply.

The EV kit circuit can be configured to demonstrate the device's different current-limit types, adjustable overvoltage, undervoltage, and current-limit threshold.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1            |     1 | 1µF ±10%, 25V X5R ceramic capacitor (0603) Murata GRM188R61E105KA12D   |
| C2            |     1 | 0.1µF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E104KA01D |
| C3            |     1 | 0.47µF ±10%, 50V X5R ceramic capacitor (0603) TDK C1608X5R1H474K080AB  |
| C4            |     1 | 1µF ±10%, 50V X7R ceramic capacitor (1206) Murata GRM31MR71H105KA61L   |
| C7            |     1 | 330µF ±20%, 50V radial capacitor Panasonic EEU-EB1H331                 |
| C8            |     0 | Not installed, capacitor Panasonic EEU-EB1H331                         |
| D1            |     1 | 36V TVS diode STMicro SM6T36CA                                         |
| D2            |     1 | 60V, 1A Schottky diode STMicro STPS1L60A                               |
| J1            |     1 | USB type-B connector FCI 61729-0010BLF                                 |

Evaluates: MAX14588

## Benefits and Features

- 4.5V	to	36V	Operating	Voltage	Range
- Features	TVS	Diode	and	Schottky	Diode
- Evaluates	Three	Current-Limit	Types, Current-Limit	Threshold,	OVLO,	and	UVLO
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

| DESIGNATION             |   QTY | DESCRIPTION                             |
|-------------------------|-------|-----------------------------------------|
| J2, J3                  |     2 | Power terminals Phoenix Contact 1729018 |
| JU1                     |     1 | 8-pin (2 x 4) header                    |
| JU3-JU5, JU8, JU9, JU13 |     6 | 2-pin headers                           |
| JU6, JU12, JU14, JU15   |     4 | 3-pin headers                           |
| LED1                    |     1 | Green LED Lumex SML-LX1206GW-TR         |
| LED2                    |     1 | Red LED Lite-On LTST-C150CKT            |
| R1, R3                  |     2 | 1kΩ ±1% resistors (0805)                |
| R2                      |     1 | 10kΩ ±1% resistor (0805)                |
| R4, R13, R14, R17       |     4 | 100kΩ ±1% resistors (0805)              |
| R5, R10, R12            |     0 | Not installed, resistors (0805)         |
| R6                      |     1 | 40.2kΩ ±1% resistor (0805)              |
| R7                      |     1 | 12.1kΩ ±1% resistor (0805)              |
| R8                      |     1 | 6.2kΩ ±1% resistor (0805)               |
| R9, R11                 |     2 | 2.2MΩ ±5% resistors (0805)              |

<!-- image -->

## Component List (continued)

| DESIGNATION        |   QTY | DESCRIPTION                             |
|--------------------|-------|-----------------------------------------|
| R15                |     1 | 4.7kΩ ±1% resistor (0805)               |
| R16                |     1 | 50kΩ potentiometer Bourns 3296W-1-503LF |
| TP1                |     1 | White test point                        |
| TP2, TP4, TP5, TP7 |     4 | Black test points                       |
| TP3, TP6, TP8      |     3 | Red test points                         |
| TP9                |     1 | Purple test point                       |
| TP10               |     1 | Green test point                        |
| TP11               |     1 | Grey test point                         |

## Component Suppliers

| SUPPLIER                                  | PHONE        | WEBSITE                |
|-------------------------------------------|--------------|------------------------|
| Bourns, Inc.                              | 951-781-5500 | www.bourns.com         |
| Fairchild Semiconductor                   | 888-522-5372 | www.fairchildsemi.com  |
| FCI Electronics Interconnection Solutions | 800-237-2374 | www.fciconnect.com     |
| Lite-On, Inc.                             | 408-946-4873 | www.us.liteon.com      |
| Lumex Inc.                                | 800-278-5666 | www.lumex.com          |
| Murata Americas                           | 800-241-6574 | www.murataamericas.com |
| Panasonic Corp.                           | 800-344-2112 | www.panasonic.com      |
| Phoenix Contact, Inc.                     | 800-888-7388 | www.phoenixcontact.com |
| STMicroelectronics                        | 408-452-8585 | www.us.st.com          |
| TDK Corp.                                 | 847-803-6100 | www.component.tdk.com  |

Note: Indicate that you are using the MAX14588 when contacting these component suppliers.

Evaluates: MAX1458

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| U1            |     1 | Overcurrent and overvoltage protector (16 TQFN-EP*) Maxim MAX14588ETE+ (Top Mark: AJZ) |
| U2            |     1 | Dual buffer (SC70 6L) Fairchild NC7WZ07P6X                                             |
| -             |    11 | Shunts                                                                                 |
| -             |     1 | PCB: MAX14588 EVKIT                                                                    |

## MAX1458 Evaluation Kit

## Quick Start

## Required Equipment

- MAX14588	EV	kit
- 36V	DC	power	supply
- Multimeter
- USB-A	male	to	USB-B	male	cable	or 5V	DC	power	supply

## Procedure

The	EV	kit	is	fully	assembled	and	tested.	Follow	the	steps below to verify board operation:

- 1)  Verify that all jumpers are in their default positions.
- 2)  Connect	the	USB	cable	to	J1	from	a	computer	or connect	a	5V	DC	power	supply	to	TP3.
- 3)  Verify	that	LED1	is	on.
- 4)  Connect	a	20V	DC	power	supply	to	IN.	Verify	that OUT	is	20V.
- 5)  Increase	voltage	on	the	DC	power	supply	and	verify that	the	OUT	voltage	goes	down	and	LED2	is	on when	input	reaches	approximately	33V.
- 6)  Decrease	voltage	on	the	DC	power	supply	and	verify that	OUT	goes	back	and	LED2	is	off	when	the	input reaches	approximately	32V.

## Table 1. LED Indicator

| LED   | NAME   | DESCRIPTION                                                       |
|-------|--------|-------------------------------------------------------------------|
| LED1  | POWER  | LED1 is on when the VBUS/5V supply for the logic pins is powered. |
| LED2  | FLAG   | LED2 is on when FLAG is asserted.                                 |

## Table 3. UVLO/OVLO Threshold (JU3-JU5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                |
|----------|------------------|--------------------------------------------------------------------------------------------|
| JU3      | Installed*       | UVLO connected to ground. Internal UVLO threshold is selected.                             |
| JU3      | Not installed    | UVLO not connected to ground. Install JU5 to use external resistors to set UVLO threshold. |
| JU4      | Installed*       | OVLO connected to ground. Internal OVLO threshold is selected.                             |
| JU4      | Not installed    | OVLO not connected to ground. Install JU5 to use external resistors to set OVLO threshold. |
| JU5      | Installed        | Use external resistors to set the OVLO/UVLO threshold.                                     |
| JU5      | Not installed*   | Not using external resistors to set the OVLO/UVLO threshold.                               |

Evaluates: MAX1458

## Detailed Description of Hardware

The  MAX14588  EV  kit  is  a  fully  assembled  and  tested circuit board that demonstrates the MAX14588 1A adjustable	overcurrent	and	overvoltage	protector	IC	in	a	16-pin surface-mount	TQFN-EP	package.

Using	jumper	JU1,	the	EV	kit	circuit	can	be	configured	to evaluate  different  current-limit  thresholds  with  a  different resistor	on	SETI.	Using	jumpers	JU3-JU5,	the	EV	kit	circuit can	 be	 configured	 to	 evaluate	 the	 internal	 OVLO/UVLO threshold	 or	 external	 threshold	 using	 a	 resistor-divider. Using	jumpers	JU14	and	JU15,	the	EV	kit	circuit	can	be configured to evaluate different current-limit types (autoretry,  latchoff,  and  continuous).  The  EV  kit  also  features LEDs	to	indicate	the	power	for	logic	pins	and	FLAG	status.

## Current-Limit Threshold

The	EV	kit	features	a	jumper	(JU1)	to	select	current-limit threshold.	Install	a	jumper	as	shown	in	Table	2	to	change the current-limit threshold.

Use	the	following	equation	to	calculate	the	current	limit:

<!-- formula-not-decoded -->

## UVLO/OVLO Threshold

Use	jumpers	JU3-JU5	to	select	UVLO	and	OVLO	thresh -old. See Table 3 for jumper settings.

## Table 2. Current-Limit Threshold (JU1)

| JUMPER   | SHUNT POSITION   | DESCRIPTION              |
|----------|------------------|--------------------------|
| JU1      | 1-2*             | Current limit 0.15A      |
| JU1      | 3-4              | Current limit 0.5A       |
| JU1      | 5-6              | Current limit 0.98A      |
| JU1      | 7-8              | Current limit adjustable |

## MAX1458 Evaluation Kit

## Switch Control

The	EV	kit	features	two	jumpers	(JU6,	JU8)	to	enable	or disable the switch. See Table 4 for jumper settings.

## Reverse-Current Block Enable

Use	jumper	JU9	to	enable	or	disable	the	reverse-current flow  protection.  The  reverse-current  block  is  enabled when	RIEN	is	logic-high.	See	Table	6	for	jumper	settings.

## Table 4. Switch Control (JU6, JU8)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                           |
|----------|------------------|---------------------------------------|
| JU6      | 1-2              | HVEN connected to IN through 100kΩ.   |
| JU6      | 2-3*             | HVEN connected to ground.             |
| JU8      | Installed*       | EN connected to VBUS.                 |
| JU8      | Not installed    | EN connected to ground through 100kΩ. |

## Table 5. Enable Inputs

|   HVEN |   EN | SWITCH STATUS   |
|--------|------|-----------------|
|      0 |    0 | On              |
|      0 |    1 | On              |
|      1 |    0 | Off             |
|      1 |    1 | On              |

## Table 6. Reverse-Current Block Enable (JU9)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                             |
|----------|------------------|-----------------------------------------|
| JU9      | Installed*       | RIEN connected to VBUS.                 |
| JU9      | Not installed    | RIEN connected to ground through 100kΩ. |

Evaluates: MAX1458

## Current-Limit Type Select

The	EV	kit	features	jumpers	JU12,	JU14,	JU15	to	select different	current-limit	type	and	sampled	time.	See	Table	7 for jumper settings.

## Output Load Capacitor

Use	jumper	JU13	to	connect	output	to	330µF	capacitor. See	Table	9	for	jumper	settings.

## Table 7. Current-Limit Type Select (JU12, JU14, JU15)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                              |
|----------|------------------|--------------------------------------------------------------------------|
| JU12     | 1-2*             | CLTS_MODE high. CLTS1 and CLTS2 are sampled continuously.                |
| JU12     | 2-3              | CLTS_MODE low. CLTS1 and CLTS2 are sampled only when VIN - V OUT < 0.6V. |
| JU14     | 1-2*             | CLTS1 high.                                                              |
| JU14     | 2-3              | CLTS1 low.                                                               |
| JU15     | 1-2              | CLTS2 high.                                                              |
| JU15     | 2-3*             | CLTS2 low.                                                               |

## Table 8. Logic Inputs

|   CLTS2 |   CLTS1 | CURRENT-LIMIT TYPE   |
|---------|---------|----------------------|
|       0 |       0 | Latchoff             |
|       0 |       1 | Autoretry            |
|       1 |       0 | Continuous           |
|       1 |       1 | Continuous           |

## Table 9. Output Load Capacitor (JU13)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                      |
|----------|------------------|--------------------------------------------------|
| JU13     | Installed Not    | OUT connected to C7 and C8. OUT not connected to |

Figure 1. MAX14588 EV Kit Schematic

<!-- image -->

Figure 2. MAX14588 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX14588 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX14588 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14588EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX1458

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

Evaluates: MAX14588