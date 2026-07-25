<!-- lastmod 2022-08-05 -->
## MAX15090/MAX15090A Evaluation Kits

## General Description

The MAX15090 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX15090  hot-swap  controller with  an  integrated  12A  MOSFET.  The  MAX15090  EV kit  is  configured to pass 12A in a 2.7V to 18V hot-swap application, thus providing a fully integrated solution. The MAX15090 EV kit uses the MAX15090EWI+ in a 3.5mm x 2mm, 28-bump, 0.5mm pitch wafer-level package (WLP) with a proven four-layer PCB design. As configured, the MAX15090 EV kit is optimized to operate at 12V.

The  MAX15090A  EV  kit  can  be  used  to  evaluate  the MAX15090A and uses the MAX15090AEWI+.

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C1, C2        |     2 | 1µF ±10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E105K TDK C1608X5R1E105M    |
| C3            |     1 | 5600pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H562K TDK C1608C0G1H562J  |
| C4            |     1 | 0.047µF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E473K TDK C1608X7R1E473K |
| C5            |     1 | 0.22µF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E224K TDK C1608X7R1E224K  |
| C6-C11        |     6 | 10µF ±10%, 25V X7R ceramic capacitors (1206) Murata GRM31CR71E106K TDK C3216X5R1E106M   |
| C12           |     0 | Not installed, ceramic capacitor (1206)                                                 |
| C13           |     0 | Not installed, electrolytic capacitor (D = 11mm)                                        |
| C14           |     0 | Not installed, ceramic capacitor (0805)                                                 |

Evaluate: MAX15090/MAX15090A

## Features

- 2.7V	to	18V	Operating	Voltage	Range
- Up	to	12A	Configurable	Load	Current	Capability
- Banana	Jacks	for	Input	and	Output	Voltage
- Programmable	Slew-Rate	Control
- Selectable/Configurable	Circuit-Breaker	Threshold
- Configurable	Overvoltage/Undervoltage	Lockout
- Programmable	Time-Out	Delay
- FAULT and PG Outputs
- Defined	Safe	Operation	Area
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

| DESIGNATION                    |   QTY | DESCRIPTION                                                    |
|--------------------------------|-------|----------------------------------------------------------------|
| CDLY, GATE, GDRV, REG, UV, VCC |     6 | Red test points                                                |
| D1                             |     1 | 18V, 600W transient voltage suppressor (SMB) Fairchild SMBJ18A |
| D2                             |     0 | Not installed, Schottky diode (SMA)                            |
| D3                             |     0 | Not installed, Schottky diode (SOD523)                         |
| GND (x2), IN, OUT              |     4 | Banana jacks                                                   |
| JU1                            |     1 | 3-pin header                                                   |
| JU2                            |     1 | 2-pin header                                                   |
| Q1                             |     1 | 30V, 94A n-channel MOSFET (DPAK) IRF IRLR8113TRPBF             |
| R1                             |     1 | 178kΩ ±1% resistor (0603)                                      |
| R2                             |     1 | 5.23kΩ ±1% resistor (0603)                                     |
| R3                             |     1 | 17.8kΩ ±1% resistor (0603)                                     |
| R4                             |     1 | 10Ω ±5% resistor (0603)                                        |
| R5                             |     1 | 40.2kΩ ±5% resistor (0603)                                     |
| R6                             |     1 | 1kΩ ±1% resistor (0603)                                        |
| R7-R9                          |     3 | 100kΩ ±5% resistors (0603)                                     |
| R10                            |     1 | 49.9Ω ±1% resistor (0603)                                      |
| R11                            |     1 | 50kΩ potentiometer                                             |
| R12                            |     1 | 0Ω resistor (0603)                                             |

<!-- image -->

## MAX15090/MAX15090A Evaluation Kits

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| U1            |     1 | 12A hot-swap solution (28 WLP) Maxim MAX15090EWI+ or Maxim MAX15090AEWI+ |
| U2            |     1 | General-purpose timer (8 SO) Maxim ICM7555ISA                            |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| STMicroelectronics                     | 408-452-8585 | www.us.st.com               |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX15090 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX15090	EV	kit
- 12V,	12A	DC	power	supply
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper	JU1.
- 2)  Turn on the power supply and set the supply to 12V, then disable the power supply.
- 3)  Connect the positive terminal of the power supply to the IN banana jack on the EV kit. Connect the negative terminal	of	the	power	supply	to	the	GND	banana	jack.
- 4)  Enable the power supply.
- 5)  Verify	 that	 the	 voltage	 between	 the	 OUT	 and	 GND banana jacks is 12V.
- 6)  Verify	that	the	internal	regulator	voltage	(REG)	is	3.3V.
- 7)  The EV kit is now ready for additional evaluation.

## Detailed Description of Hardware

The  MAX15090  EV  kit  provides  a  proven  design  to evaluate the MAX15090. The MAX15090 EV kit can be conveniently connected between the system power and the load using the banana jacks provided for the input and output. PCB pads are provided to monitor and control the device signals. The MAX15090 EV kit operates between 2.7V and 18V up to 12A load current capability.

## Evaluating the MAX15090A

The  MAX15090A  EV  kit  can  be  used  to  evaluate  the MAX15090A,  with  the  MAX15090AEWI+  installed.  The MAX15090A is pin-to-pin compatible with the MAX15090. Refer	 to	 the	 MAX15090/MAX15090A	 IC	 data	 sheet	 for details on the MAX15090A.

## Circuit Breaker (CB)

Jumper	JU1	sets	the	current	limit	for	the	internal	circuit breaker (CB) of the device. The CB pin can be connected to	a	fixed	resistor	(R5)	or	a	potentiometer	(R11)	to	set	the current limit. See Table 1 for shunt positions.

The circuit-breaker threshold can be set according to the following formula:

<!-- formula-not-decoded -->

where I CB is	in	A	and	R CB (the resistor between CB and ground)	is	in	Ω.

## Table 1. JU1 Jumper Selection (CB)

| SHUNT POSITION   | CB PIN CONNECTED TO   | CURRENT LIMIT   |
|------------------|-----------------------|-----------------|
| 1-2*             | R5                    | 12A             |
| 2-3              | R11                   | Adjustable      |

Evaluate: MAX15090/MAX15090A

| DESIGNATION   |   QTY | DESCRIPTION                  |
|---------------|-------|------------------------------|
| -             |     2 | Shunts                       |
| -             |     1 | PCB: MAX15090 EVALUATION KIT |

│

## Table 2. JU2 Jumper Selection ( EN )

| SHUNT POSITION   | EN PIN                                                          | TIME-OUT DELAY   |
|------------------|-----------------------------------------------------------------|------------------|
| Installed        | Forced to GND                                                   | Bypassed         |
| Not installed*   | Set low when C5 is charged to 2/3 x OUT; timing is set by R7/C5 | 47ms (set by C4) |

*Default position.

## Setting Time-Out Delay for EN (CDLY)

Capacitor C4 is used to set the time-out delay for EN to go low to  prevent  internal  MOSFET shutdown after powerup.	This	is	set	at	a	rate	of	1s/µF.	The	EV	kit	is	configured for a 47ms time-out delay.

## Delayed EN

The IC's EN pin  must be pulled low before the time-out delay set by capacitor C4 elapses. The EV kit provides a	 simple	 timer	 circuit	 comprised	 of	 U2,	 R7,	 and	 C5	 to pull the EN pin  low  before the time-out delay. Once PG asserts	 as	 open-drain,	 R7	 begins	 to	 charge	 C5	 to	 the output	voltage	(OUT).	When	C5	charges	to	2/3	x	OUT,	U2 pulls the EN pin low. The EV kit is configured to have EN pulled low after ~22ms.

Jumper	JU2	is	also	provided	to	bypass	the	time-out	delay and force EN low,	if	installed.	See	Table	2	for	JU2	settings.

## Setting the Output Slew Rate

An  external  capacitor  (C3)  is  connected  from  GATE  to GND	 on	 the	 IC	 to	 reduce	 the	 output	 slew	 rate	 during startup.	During	startup,	a	5.7µA	(typ)	current	is	sourced	to enhance	the	internal	MOSFET	with	10V/ms	(typ).	C3	can be calculated according to the following formula:

<!-- formula-not-decoded -->

where I GATE is	 5.7µA	 (typ),	 ∆t	 is	 the	 desired	 slew	 rate, and	 ∆V GATE  is  the  voltage  at  the  gate  of  the  internal MOSFET at turn-on.

## Undervoltage Lockout

The EV kit provides an option to configure the undervoltage-lockout  threshold. The  undervoltage-lockout  threshold  for  the  device  is  configured  by  the  IN  voltage  level divided	by	R1	and	(R2	+	R3)	at	the	UV	pin.	By	default,	the undervoltage-lockout threshold is set to 10.8V.

## Overvoltage Lockout

The EV kit provides an option to configure the overvoltage-lockout threshold. The overvoltage-lockout threshold for the device is configured by the IN voltage level divided by	(R1	+	R2)	and	R3	at	the	OV	pin.	By	default,	the	over -voltage-lockout threshold is set to 13.2V.

## Current-Sense Output (ISENSE)

The IC's ISENSE pin is the output of an accurate currentsense  amplifier  and  provides  a  source  current  proportional to the load current flowing into the main switch. The factory-trimmed	 current	 ratio	 is	 set	 to	 220µA/A.	 On	 the EV kit, this allows producing a scaled voltage by routing resistor	R6	from	ISENSE	to	GND.	This	voltage	signal	then goes	to	an	ADC	and	provides	digitized	information	of	the current supplied to the powered system.

│

## MAX15090/MAX15090A Evaluation Kits

Figure 1. MAX15090 EV Kit Schematic

<!-- image -->

## MAX15090/MAX15090A Evaluation Kits

Figure 2. MAX15090 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluate: MAX15090/MAX15090A

Figure 3. MAX15090 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX15090 EV Kit PCB Layout- Layer 2 (PWR/GND)

<!-- image -->

## MAX15090/MAX15090A Evaluation Kits

Figure 5. MAX15090 EV Kit PCB Layout-Layer 3 (GND)

<!-- image -->

## Evaluate: MAX15090/MAX15090A

Figure 6. MAX15090 EV Kit PCB Layout-Solder Side

<!-- image -->

│

## MAX15090/MAX15090A Evaluation Kits

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX15090EVKIT#  | EV Kit |
| MAX15090AEVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluate: MAX15090/MAX15090A

│

## MAX15090/MAX15090A Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/12           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

│

Evaluate: MAX15090/MAX15090A