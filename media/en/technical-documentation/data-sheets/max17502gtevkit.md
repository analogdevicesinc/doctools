<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX17502G Evaluation Kit

## Evaluates: MAX17502G in TDFN Package

## General Description

The  MAX17502G  EV  kit  provides  a  proven  design  to evaluate  the  MAX17502G  high-efficiency,  high-voltage, synchronous  step-down  DC-DC  converter  in  a  TDFN package. The EV kit generates 12V at load currents up to  1A  from  a  15V  to  60V  input  supply.  The  EV  kit  features  a  600kHz  fixed  switching  frequency  for  optimum efficiency  and  component  size.  The  EV  kit  features  a  forcedPWM control scheme that provides constant switchingfrequency operation at all load and line conditions.

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| C1            |     1 | 2.2 F F Q 10%, 100V X7R ceramic capacitor (1210) Murata GRM32ER72A225KA |
| C2            |     1 | 1 F F Q 10%, 6.3V X7R ceramic capacitor (0603) Murata GRM188R70J105K    |
| C3            |     1 | 6800pF Q 10%, 25V X7R ceramic capacitor (0402) Murata GRM155R71E682K    |
| C4            |     1 | 10 F F Q 10%, 16V X7R ceramic capacitor (1210) Murata GRM32DR71C106K    |
| C5            |     1 | 2200pF Q 10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H222K    |
| C7            |     1 | 33 F F, 80V aluminum electrolytic (D = 8mm) Panasonic EEEFK1K330P       |
| C8            |     0 | Not installed, ceramic capacitor (1210)                                 |

## Features

- S Operates from a 15V to 60V Input Supply
- S 12V Output Voltage
- S 1A Output Current
- S 600kHz Switching Frequency
- S Enable/UVLO Input
- S Resistor-Programmable UVLO Threshold
- S Open-Drain RESET Output
- S Overcurrent and Overtemperature Protection
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| C9            |     1 | 12pF Q 5%, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H120J     |
| JU1           |     1 | 3-pin header                                                          |
| L1            |     1 | 47 F H, 2A inductor (10.5mm x 10.2mm x 3.8mm) Coilcraft MSS1038-473ML |
| R1            |     1 | 3.32M I Q 1% resistor (0402)                                          |
| R2            |     1 | 316k I Q 1% resistor (0402)                                           |
| R3            |     1 | 20k I Q 1% resistor (0402)                                            |
| R4            |     1 | 174k I Q 1% resistor (0402)                                           |
| R5            |     1 | 14k I Q 1% resistor (0402)                                            |
| R6            |     1 | 100k I Q 1% resistor (0402)                                           |
| R7            |     1 | 71.5k I Q 1% resistor (0402)                                          |
| TP1, TP2      |     0 | Not installed, test points                                            |
| U1            |     1 | Buck converter (10 TDFN-EP*) Maxim MAX17502GATB+                      |
| -             |     1 | Shunt                                                                 |
| -             |     1 | PCB: MAX17502GT EVALUATION KIT                                        |

* EP = Exposed pad.

## MAX17502G Evaluation Kit

## Evaluates: MAX17502G in TDFN Package

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |

Note: Indicate that you are using the MAX17502 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX17502G	EV	kit
- 15V	to	60V,	2A	DC	input	power	supply
- Load	capable	of	sinking	1A
- Digital	voltmeter	(DVM)
- Function	generator
- 3)  Connect the function generator output to the EN/UVLO test loop.
- 4)  EN/UVLO rising threshold is 1.24V and falling threshold  is  1.11V.  Make  sure  that  the  voltage-high  and voltage-low levels of the function generator output are greater than 1.24V and less than 1.11V, respectively.
- 5)  While powering down the EV kit, first disconnect the function generator output from the EN/UVLO test loop and then turn off the DC power supply.

## Detailed Description of Hardware

The  MAX17502G  EV  kit  provides  a  proven  design  to evaluate  the  MAX17502G  high-efficiency,  high-voltage, synchronous  step-down  DC-DC  converter  in  a  TDFN package. The EV kit generates 12V at load currents up to 1A from a 15V to 60V input supply. The EV kit features a  600kHz  fixed  switching  frequency  for  optimum  efficiency and component size. The EV kit features a forcedPWM control scheme that provides constant switchingfrequency operation at all load and line conditions.

The	 EV	 kit	 includes	 an	 EN/UVLO	 PCB	 pad	 to	 enable control  of  the  converter  output.  An  additional RESET PCB	pad	is	available	for	monitoring	the	open-drain	logic output.  The  VCC  PCB  pad  helps  measure  the  internal LDO voltage.

## Soft-Start Input (SS)

The	 device	 utilizes	 an	 adjustable	 soft-start	 function	 to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted	by	the	value	of	C3,	the	external	capacitor	from SS to GND. To adjust the soft-start time, determine C3 using the following formula:

<!-- formula-not-decoded -->

where t SS  is  the  required  soft-start  time  in  milliseconds and C3 is in nanofarads.

## Procedure

The	 EV	 kit	 is	 fully	 assembled	 and	 tested.	 Follow	 the steps	below	to	verify	the	board	operation. Caution: Do not  turn  on  power  supply  until  all  connections  are completed.

- 1)  Set	the	power	supply	at	a	voltage	between	15V	and 60V.	Disable	the	power	supply.
- 2)  Connect  the  positive  terminal  of  the  power  supply to the VIN PCB pad and the negative terminal to the nearest  PGND  PCB  pad.  Connect  the  positive  terminal of the 1A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3)  Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4)  Turn on the DC power supply.
- 5)  Enable	the	load.
- 6)  Verify that the DVM displays 12V.

To turn-on/off the part from EN/UVLO, follow the steps below:

- 1)  Remove resistors R1 and R2.
- 2)  Connect the power supply to the EV kit and turn on the power supply. Set the power supply at a voltage between 15V and 60V.

## MAX17502G Evaluation Kit

## Evaluates: MAX17502G in TDFN Package

## Regulator Enable/Undervoltage-Lockout Level (EN/UVLO)

The device features an EN/UVLO input. For normal operation,	 no	 shunts	 should	 be	 installed	 across	 pins	 1-2	 or 2-3	on	jumper	JU1.	To	disable	the	output,	install	a	shunt across pins 2-3 on JU1 and the EN/UVLO pin is pulled to	GND.	See	Table	1	for	JU1	settings.

## Setting the Undervoltage-Lockout Level

The	 device	 offers	 an	 adjustable	 input	 undervoltagelockout level. Set the voltage at which the device turns on  with  a  resistive  voltage-divider  connected  from  VIN to GND (see Figure 1). Connect the center node of the divider to EN/UVLO.

Choose	R1	to	be	3.3M I and then calculate R2 as follows:

<!-- formula-not-decoded -->

where V INU  is the voltage at which the device is required to turn on. Ensure that V INU  is higher than 0.8 x V OUT .

## Table 1. Regulator Enable (EN/UVLO) Jumper JU1 Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17502G OUTPUT                                               |
|------------------|------------------------------------------------------------|----------------------------------------------------------------|
| Not installed*   | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistor-divider |
| 2-3              | Connected to GND                                           | Disabled                                                       |

* Default position.

Figure 1. MAX17502G Load and Line Regulation

<!-- image -->

## Adjusting the Output Voltage

The	device	offers	an	adjustable	output	voltage.	Set	the output voltage with a resistive voltage-divider connected from the positive terminal of the output capacitor (V OUT ) to GND (see Figure 6). Connect the center node of the voltage-divider to FB.

To choose the values of R4 and R5, select the parallel combination	of	R4	and	R5,	with	R P less than 15k Ω . Once RP is selected, calculate R4 as follows:

<!-- formula-not-decoded -->

Calculate R5 as follows:

<!-- formula-not-decoded -->

## EV Kit Performance Report

Figure 2. MAX17502G Load and Line Regulation

<!-- image -->

## MAX17502G Evaluation Kit

## Evaluates: MAX17502G in TDFN Package

## EV Kit Performance Report (continued)

<!-- image -->

Figure 4. MAX17502G No Load to 500mA Load Transient

Figure 3. MAX17502G Full-Load Bode Plot (VIN = 24V)

<!-- image -->

Figure 5. MAX17502G 500mA to 1A Load Transient

<!-- image -->

## MAX17502G Evaluation Kit

## Evaluates: MAX17502G in TDFN Package

Figure 6. MAX17502G EV Kit Schematic

<!-- image -->

## MAX17502G Evaluation Kit

## Evaluates: MAX17502G in TDFN Package

<!-- image -->

Figure 7. MAX17502G EV Kit Component Placement GuideComponent Side

Figure 8. MAX17502G EV Kit PCB Layout-Component Side

<!-- image -->

Figure 9. MAX17502G EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX17502G Evaluation Kit

## Evaluates: MAX17502G in TDFN Package

Figure 10. MAX17502G EV Kit Component Placement GuideTop Solder Mask

<!-- image -->

## Ordering Information

# Denotes RoHS compliant.

| PART             | TYPE   |
|------------------|--------|
| MAX17502GTEVKIT# | EV Kit |

Figure 11. MAX17502G EV Kit Component Placement GuideBottom Solder Mask

<!-- image -->

## MAX17502G Evaluation Kit

## Evaluates: MAX17502G in TDFN Package

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/12           | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.