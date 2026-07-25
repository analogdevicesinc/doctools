<!-- lastmod 2022-08-05 -->
## MAX15096/A/D Evaluation Kits

## General Description

The  MAX15096/A/D  evaluation  kit  (EV  kit)  provides  a proven  design  to  evaluate  the  MAX15096  hot-swap controller  with  an  integrated  6A  MOSFET.  The  EV  kit is  configured  to  pass  6A  in  a  2.7V  to  18V  hot-swap application,  thus  providing  a  fully  integrated  solution. The EV kit uses the MAX15096GWE+ in a 2mm x 2mm, 16-bump, 0.5mm pitch wafer-level package (WLP) with a proven four-layer PCB design. As configured, the EV kit is optimized to operate at 12V.

The EV kit can be used to evaluate all MAX15096A and MAX15096D variants

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| C1, C2        |     2 | 1µF ±10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E105K TDK C1608X5R1E105M   |
| C3            |     1 | 5600pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H562K TDK C1608C0G1H562J |
| C4            |     0 | Not installed, ceramic capacitor (1206)                                                |
| C5            |     0 | Not installed, ceramic capacitor (0805)                                                |
| C6-C11        |     6 | 10µF ±10%, 25V X7R ceramic capacitors (1206) Murata GRM31CR71E106K TDK C3216X5R1E106M  |
| C12           |     0 | Not installed, electrolytic capacitor (D = 11mm)                                       |
| D1            |     1 | 18V, 600W transient voltage suppressor (SMB) Fairchild SMBJ18A                         |
| D2            |     0 | Not installed, Schottky diode (SMA)                                                    |

## Evaluate: MAX15096/MAX15096A/MAX15096D

## Features

- 2.7V	to	18V	Operating	Voltage	Range
- Up	to	6A	Configurable	Load	Current	Capability
- Banana	Jacks	for	Input	and	Output	Voltage
- Programmable	Slew-Rate	Control
- Selectable/Configurable	Circuit-Breaker	Threshold
- Configurable	Overvoltage/Undervoltage	Lockout
- Programmable	Fast	Comparator	Response
- PG	Output
- Defined	Safe	Operation	Area
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

| DESIGNATION                        |   QTY | DESCRIPTION                                      |
|------------------------------------|-------|--------------------------------------------------|
| D3                                 |     0 | Not installed, Schottky diode (SOD523)           |
| GATE, GDRV, REG, TIMER, UV/OV, VCC |     6 | Red test points                                  |
| GND (x2), IN, OUT                  |     4 | Banana jacks                                     |
| JU1                                |     1 | 3-pin header                                     |
| JU2-JU5                            |     4 | 2-pin headers                                    |
| Q1                                 |     1 | 30V, 65A n-channel MOSFET (DPAK) IRF IRLR8721PbF |
| R1                                 |     1 | 178kΩ ±1% resistor (0603)                        |
| R2                                 |     1 | 15kΩ ±1% resistor (0603)                         |
| R3                                 |     1 | 10Ω ±5% resistor (0603)                          |
| R4                                 |     1 | 10Ω ±5% resistor (0603)                          |
| R5                                 |     1 | 41.2kΩ ±5% resistor (0603)                       |
| R6                                 |     1 | 500kΩ potentiometer                              |
| R7-R9                              |     3 | 100kΩ ±5% resistors (0603)                       |
| R10                                |     1 | 49.9Ω ±1% resistor (0603)                        |
| R11                                |     1 | 50kΩ potentiometer                               |
| R12                                |     1 | 0Ω resistor (0603)                               |

<!-- image -->

## MAX15096/A/D Evaluation Kits

## Evaluate: MAX15096/MAX15096A/MAX15096D

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| U1            |     1 | 6A hot-swap solution (16 WLP) Maxim MAX15096GWE+ or Maxim MAX15096AGWE+ or Maxim MAX15096DGWE+ |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| STMicroelectronics                     | 408-452-8585 | www.us.st.com               |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX15096 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX15096	EV	kit
- 12V,	6A	DC	power	supply
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper	JU1.	Also	ensure	that	jumpers	JU2	and	JU4 are	opened	and	jumpers	JU3	and	JU5	are	closed.
- 2)  Turn on the power supply and set the supply to 12V, then disable the power supply.
- 3)  Connect the positive terminal of the power supply to the	IN	banana	jack	on	the	EV	kit.	Connect	the	negative terminal of the power supply to the GND banana jack.
- 4)  Enable the power supply.
- 5)  Verify	 that	 the	 voltage	 between	 the	 OUT	 and	 GND banana jacks is 12V.
- 6)  Verify	that	the	internal	regulator	voltage	(REG)	is	3.3V.
- 7)  The EV kit is now ready for additional evaluation.

## Detailed Description of Hardware

The  MAX15096  EV  kit  provides  a  proven  design  to evaluate the MAX15096. The EV kit can be conveniently connected between the system power and the load using the banana jacks provided for the input and output. PCB pads are provided to monitor and control the device signals. The EV kit operates between 2.7V and 18V up to 6A load current capability.

## Evaluating the MAX15096

The  EV  kit  can  be  used  to  evaluate  the  MAX15096, with  the  MAX15096GWE+  installed.  The  MAX15096A/ MAX15096D are pin-to-pin compatible with the MAX15096.	Refer	to	the	device	data	sheet	for	details	on the MAX15096A and MAX15096D.

## Circuit Breaker (CB)

Jumper	JU1	sets	the	current	limit	for	the	internal	circuit breaker (CB) of the device. The CB pin can be connected to	a	fixed	resistor	(R5)	or	a	potentiometer	(R11)	to	set	the current limit. See Table 1 for shunt positions.

The circuit-breaker threshold can be set according to the following formula:

<!-- formula-not-decoded -->

where	I CB is	in	A	and	R CB (the resistor between CB and ground)	is	in	Ω.

## Table 1. JU1 Jumper Selection (CB)

| SHUNT POSITION   | CB PIN CONNECTED TO   | CURRENT LIMIT   |
|------------------|-----------------------|-----------------|
| 1-2*             | R5                    | 12A             |
| 2-3              | R11                   | Adjustable      |

*Default position.

| DESIGNATION   |   QTY | DESCRIPTION                  |
|---------------|-------|------------------------------|
| -             |     5 | Shunts                       |
| -             |     1 | PCB: MAX15096 EVALUATION KIT |

## MAX15096/A/D Evaluation Kits

## Setting the Output Slew Rate

An  external  capacitor  (C3)  is  connected  from  GATE  to GND	 on	 the	 IC	 to	 reduce	 the	 output	 slew	 rate	 during startup. During startup, a 5.9µA (typ) current is sourced to enhance the internal MOSFET with 10V/ms (typ). C3 can be calculated according to the following formula:

<!-- formula-not-decoded -->

where	I GATE is	 5.9µA	 (typ),	 ∆t	 is	 the	 desired	 slew	 rate, and	 ∆V GATE  is  the  voltage  at  the  gate  of  the  internal MOSFET at turn-on.

## Enable/Present-Detect Inputs

The	 EV	 kit	 features	 jumpers	 JU2	 and	 JU3	 to	 enable/ disable	the	output.	JU3	allows	simulation	of	PC	Express card	being	plugged	in.	OUT	is	enabled	when PRSNT is pulled	low	and	EN	is	pulled	high	.	If PRSNT is	high,	OUT is not enabled, regardless of EN logic state See Table 2 for jumper positions.

## Undervoltage/Overvoltage Lockout

The  EV  kit  provides  an  option  to  configure  the  undervoltage/overvoltage-lockout  threshold  using  a  resistive divider,	R1	and	R2	from	IN	to	ground	with	the	center	tap

## Table 2. JU2 and JU3 Jumpers Selection

| SHUNT POSITION      | EN/ PRSNT CONNECTIONS                | EV KIT OPERATION           |
|---------------------|--------------------------------------|----------------------------|
| Not installed (JU2) | EN pulled to REG with a 100kΩ pullup | OUT enabled with PRSNT low |
| Installed (JU3)     | PRSNT forced to GND                  | OUT enabled with EN high   |

## Table 3. JU4 and JU5 Jumpers Selection

| SHUNT POSITION      | TIMER CONNECTED TO   | t FCD      |
|---------------------|----------------------|------------|
| Not installed (JU4) | R6                   | Adjustable |
| Installed (JU5)     | REG                  | 200ns      |

## Evaluate: MAX15096/MAX15096A/MAX15096D

connected	 to	 UVOV.	 The	 EV	 kit's	 undervoltage-lockout threshold is set to 7.1V (typ) and the overvoltage-lockout threshold	is	set	to	15.8V	(typ).	Refer	to	the	device	data sheet for mor details.

## TIMER

Jumper	 JU5	 connects	 TIMER	 to	 REG,	 which	 sets	 the total response time of the fast-trip comparator to less than 200ns	(typ).	For	adjustable	response	time,	open	JU5	and close	JU4.	JU4	connects	TIMER	to	a	500kΩ	potentiom -eter	(R6).See Table 3 for shunt positions.

Use	the	following	formula	to	set	the	fast-trip	comparator's response time:

<!-- formula-not-decoded -->

where t FCD  is the fast-trip comparator response time in µs and	R6	is	the	total	resistance	from	TIMER	to	ground	in	kΩ set	by	the	500kΩ	potentiometer.	Refer	to	the	device	data sheet for more details.

## MAX15096/A/D Evaluation Kits

## Evaluate: MAX15096/MAX15096A/MAX15096D

Figure 1. MAX15096 EV Kit Schematic

<!-- image -->

<!-- image -->

Figure 2. MAX15096 EV Kit Component Placement GuideComponent Side

Figure 3. MAX15096 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX15096 EV Kit PCB Layout- Layer 2 (PWR/GND)

<!-- image -->

Figure 5. MAX15096 EV Kit PCB Layout-Layer 3 (GND)

<!-- image -->

Figure 6. MAX15096 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX15096/A/D Evaluation Kits

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX15096EVKIT#   | EV Kit |
| MAX15096AEVKIT#  | EV Kit |
| MAX15096DEVKIT#* | EV Kit |

Evaluate: MAX15096/MAX15096A/MAX15096D

## MAX15096/A/D Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/14            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

Evaluate: MAX15096/MAX15096A/MAX16096D