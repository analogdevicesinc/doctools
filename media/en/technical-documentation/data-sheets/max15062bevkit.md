<!-- lastmod 2022-08-02 -->
## MAX15062B Evaluation Kit

## General Description

The MAX15062B evaluation kit (EV kit) is a fully assembled  and  tested  circuit  board  that  demonstrates  the performance of the MAX15062B 60V, 300mA ultra-small, high-efficiency,  synchronous  step-down  converter.  The EV kit  operates  over  a  wide  6.5V  to  60V  input  voltage range, and provides up to 300mA at the preset 5V output. The  device  features  undervoltage  lockout,  overcurrent protection,  and  thermal  shutdown.  The  EV  kit  switches at  a  fixed  frequency  of  500kHz,  and  delivers  a  peak efficiency of 92% with the supplied components.

The  EV  kit  comes  installed  with  the  MAX15062BATA+ in an 8-pin (2mm x 2mm) lead(Pb)-free/RoHS-compliant TDFN package.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| C1            |     1 | 22µF, 100V electrolytic capacitor (8mm x 10.2mm) Panasonic EEEHA2A220UP |
| C2            |     1 | 1µF ±10%, 100V X7R ceramic capacitor (1206) Murata GRM31CR72A105KA      |
| C3            |     1 | 1µF ±10%, 6.3V X7R ceramic capacitor (0603) Murata GRM188R70J105K       |
| C4            |     1 | 10µF ±10%, 6.3V X7R ceramic capacitor (1206) Murata GRM31CR70J106K      |
| JU1-JU3       |     3 | 2-pin headers                                                           |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |

Note: Indicate that you are using the MAX15062B when contacting these component suppliers.

## Features

- 6.5V	to	60V	Input	Voltage	Range
- 5V	Output,	300mA	Continuous	Current
- Internal	Compensation
- EN/UVLO	for	On/Off	Control	and	Programmable Input	Undervoltage	Lockout
- 92%	Peak	Efficiency
- 500kHz	Fixed-Frequency	PWM	Operation
- PFM	or	Forced-PWM	Mode	of	Operation
- Hiccup	Mode	Overcurrent	Protection
- Open-Drain RESET Output
- Thermal	Shutdown
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                    |
|---------------|-------|----------------------------------------------------------------------------------------------------------------|
| L1            |     1 | 47µH, 560mA inductor Coilcraft, Inc. LPS4018-473ML                                                             |
| R1            |     1 | 3.32MΩ ±1% resistor (0402)                                                                                     |
| R2            |     1 | 768kΩ ±1% resistor (0402)                                                                                      |
| R3            |     1 | 100kΩ ±1% resistor (0402)                                                                                      |
| U1            |     1 | 60V, 300mA, ultra-small, high- efficiency, synchronous step- down DC-DC converter (8 TDFN) Maxim MAX15062BATA+ |
| -             |     3 | Shunts                                                                                                         |
| -             |     1 | PCB: MAX15062B EVALUATION KIT                                                                                  |

Evaluates: MAX15062B

<!-- image -->

## Quick Start

## Recommended Equipment

-  MAX15062B	EV	kit
- 60V	adjustable,	0.5A	DC	power	supply
- Electronic	load	up	to	300mA
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Verify	 that	 shunts	 are	 installed	 on	 jumpers	 JU1	 and JU2	(EN/UVLO).
- 2) Verify	that	jumper	JU3	(MODE	PFM	operation)	is	open .
- 3)  Set  the  electronic  load  to  constant-current  mode, 300mA, and disable the electronic load.
- 4)  Connect	the	electronic	load's	positive	terminal	to	the VOUT	PCB	pad.	Connect	the	negative	terminal	to	the GND	PCB	pad.
- 5)  Connect	 the	 voltmeter	 across	 the	 VOUT	 and	 GND PCB	pads.
- 6)  Set	the	power-supply	output	to	24V.	Disable	the	power supply.
- 7)  Connect	the	24V	power-supply	output	to	the	VIN	PCB pad.	Connect	the	supply	ground	to	the	GND	PCB	pad.
- 8)  Turn	on	the	power	supply	and	verify	that	VOUT	is	at 5V with respect to GND.
- 9)  Enable	the	electronic	load	and	verify	that	VOUT	is	at 5V with respect to GND.

## Table 1. Enable Control (EN/UVLO)

| SHUNT POSITION   | SHUNT POSITION   | EN/UVLO PIN                                          | VOUT OUTPUT           |
|------------------|------------------|------------------------------------------------------|-----------------------|
| JU1              | JU2              | EN/UVLO PIN                                          | VOUT OUTPUT           |
| 1-2              | Open             | Connected to VIN                                     | Enabled               |
| Open             | 1-2              | Connected to GND                                     | Disabled              |
| 1-2*             | 1-2              | Connected to midpoint of the R1, R2 resistor-divider | Enabled at VIN ≥ 6.5V |

*Default position.

Evaluates: MAX15062B

## Detailed Description

The MAX15062B evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the performance  of  the  MAX15062B  60V,  300mA  ultra-small, high-efficiency,  synchronous  step-down  converter.  The EV kit  operates  over  a  wide  6.5V  to  60V  input  voltage range, and provides up to 300mA at the preset 5V output. The  device  features  undervoltage  lockout,  overcurrent protection,  and  thermal  shutdown.  The  EV  kit  switches at  a  fixed  frequency  of  500kHz,  and  delivers  a  peak efficiency of 92% with the supplied components.

The	EV	kit	includes	an	EN/UVLO	PCB	pad	and	jumpers JU1	and	JU2	to	enable	control	of	the	converter	output. The	MODE	PCB	pad	and	jumper	JU3	are	provided	for selecting  the  mode  of  operation  of  the  converter.  The VCC	PCB	pad	helps	measure	the	internal	LDO	voltage. An additional RESET PCB	pad	is	available	for	monitoring the open-drain logic output.

## Enable Control (JU1, JU2)

The	 EN/UVLO	 pin	 of	 the	 device	 serves	 as	 an	 on/off control while also allowing the user to program the input undervoltage	 lockout	 (UVLO)	 threshold.	 Jumpers	 JU1 and	JU2	configure	the	EV	kit's	output	for	turn-on/turn-off control.	Install	a	shunt	across	pins	1-2	on	jumper	JU2	to disable	VOUT.	See	Table	1	for	proper	jumper	settings.

Additionally, resistors R1 and R2 are included to set the UVLO	to	a	desired	turn-on	voltage.	Refer	to	the Enable Input (EN/UVLO), Soft-Start section in the MAX15062A/ MAX15062B	IC	data	sheet	for	additional	information	on setting	the	UVLO	threshold	voltage.

## MAX15062B Evaluation Kit

## Active-Low Open-Drain Reset Output ( RESET )

The	EV	kit	provides	a	PCB	pad	to	monitor	the	status	of the RESET output. RESET goes	high	when	VOUT	rises above  95%  (typ)  of  its  nominal  regulated  output  voltage.	 When	 VOUT	 falls	 below	 92%	 (typ)	 of	 its	 nominal regulated voltage, RESET is pulled low.

## PFM or Forced-PWM Mode (MODE)

The	EV	kit	includes	a	jumper	(JU3)	to	program	the	mode of	operation	of	the	converter.	Install	a	shunt	across	JU3 before	powering	up	the	EV	kit	to	enable	the	forced-PWM

## EV Kit Performance Report

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAX15062B

operation.	Keep	JU3	open	to	enable	the	light-load	PFM operation.	See	Table	2	for	proper	JU3	configuration.

Table 2. Mode Control (JU3)

| SHUNT POSITION   | MODE PIN         | MODE OF OPERATION   |
|------------------|------------------|---------------------|
| 1-2              | Connected to GND | Forced PWM          |
| Open*            | Unconnected      | PFM                 |

*Default position.

<!-- image -->

<!-- image -->

## EV Kit Performance Report (continued)

<!-- image -->

Evaluates: MAX15062B

<!-- image -->

Figure 1. MAX15062B EV Kit Schematic

<!-- image -->

Figure 2. MAX15062B EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX15062B EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX15062B EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX15062BEVKIT# | EVKIT  |

# Denotes RoHS compliant.

Evaluates: MAX15062B

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.

Evaluates: MAX15062B