<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX17501G Evaluation Kit

## Evaluates: MAX17501G in TDFN Package

## General Description

The  MAX17501G  EV  kit  provides  a  proven  design  to evaluate  the  MAX17501G  high-efficiency,  high-voltage, synchronous  step-down  DC-DC  converter  in  a  TDFN package.  The  EV  kit  generates  12V  at  load  currents up  to  500mA  from  a  14V  to  60V  input  supply.  The  EV kit  features  a  600kHz  fixed  switching  frequency  for optimum  efficiency  and  component  size.  The  EV  kit features  a  forced-PWM  control  scheme  that  provides constant  switching-frequency  operation  at  all  load  and line conditions.

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| C1            |     1 | 1 F F Q 10%, 100V X7R ceramic capacitor (1206) Murata GRM31CR72A105KA    |
| C2            |     1 | 1 F F Q 10%, 6.3V X7R ceramic capacitor (0603) Murata GRM188R70J105K     |
| C3            |     1 | 6800pF Q 10%, 25V X7R ceramic capacitor (0402) Murata GRM155R71E682K     |
| C4            |     1 | 4.7 F F Q 10%, 16V X7R ceramic capacitor (1206) Murata GRM31CR71C475K    |
| C5            |     1 | 1200pF Q 10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H122KA01D |
| C7            |     1 | 33 F F, 80V aluminum electrolytic (D = 8mm) Panasonic EEEFK1K330P        |
| C9            |     1 | 10pF Q 5%, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H100J        |

## Features

- S Operates from a 14V to 60V Input Supply
- S 12V Output Voltage
- S 500mA Output Current
- S 600kHz Switching Frequency
- S Enable/UVLO Input
- S Resistor-Programmable UVLO Threshold
- S Open-Drain RESET Output
- S Overcurrent and Overtemperature Protection
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| JU1           |     1 | 3-pin header                                                            |
| L1            |     1 | 100 F H, 1A inductor (7.6mm x 7.6mm x 4.3mm) Cooper Bussmann DR74-101-R |
| R1            |     1 | 3.32M I Q 1% resistor (0402)                                            |
| R2            |     1 | 316k I Q 1% resistor (0402)                                             |
| R3            |     1 | 27.4k I Q 1% resistor (0402)                                            |
| R4            |     1 | 174k I Q 1% resistor (0402)                                             |
| R5            |     1 | 14k I Q 1% resistor (0402)                                              |
| R6            |     1 | 100k I Q 1% resistor (0402)                                             |
| R7            |     1 | 71.5k I Q 1% resistor (0402)                                            |
| TP1, TP2      |     0 | Not installed, test points                                              |
| U1            |     1 | Buck converter (10 TDFN-EP*) Maxim MAX17501GATB+                        |
| -             |     1 | Shunt                                                                   |
| -             |     1 | PCB: MAX17501GT EVALUATION KIT                                          |

## MAX17501G Evaluation Kit

## Evaluates: MAX17501G in TDFN Package

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Cooper Bussmann                        | 916-941-1117 | www.cooperet.com            |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |

Note: Indicate that you are using the MAX17501 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX17501G	EV	kit
- 14V	to	60V,	1A	DC	input	power	supply
- Load	capable	of	sinking	500mA
- Digital	voltmeter	(DVM)
- Function	generator
- 3)  Connect the function generator output to the EN/UVLO test loop.
- 4)  EN/UVLO rising threshold is 1.24V and falling threshold  is  1.11V.Make  sure  that  the  voltage-high  and voltage-low levels of the function generator output are greater than 1.24V and less than 1.11V, respectively.
- 5)  While powering down the EV kits, first disconnect the function generator output from the EN/UVLO test loop and then turn off the DC power supply.

## Detailed Description of Hardware

The  MAX17501G  EV  kit  provides  a  proven  design  to evaluate  the  MAX17501G  high-efficiency,  high-voltage, synchronous  step-down  DC-DC  converter.  The  EV  kit generates  12V  at  load  currents  up  to  500mA  from  a 14V to 60V input supply. The EV kit features a 600kHz fixed  switching  frequency  for  optimum  efficiency  and component  size.  The  EV  kit  features  a  forced-PWM control scheme that provides constant switchingfrequency operation at all load and line conditions.

The	 EV	 kit	 includes	 an	 EN/UVLO	 PCB	 pad	 to	 enable control  of  the  converter  output.  An  additional RESET PCB	pad	is	available	for	monitoring	the	open-drain	logic output.  The  VCC  PCB  pad  helps  measure  the  internal LDO voltage.

## Soft-Start Input (SS)

The	 device	 utilizes	 an	 adjustable	 soft-start	 function	 to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted	by	the	value	of	C3,	the	external	capacitor	from SS to GND. To adjust the soft-start time, determine C3 using the following formula:

<!-- formula-not-decoded -->

where t SS  is  the  required  soft-start  time  in  milliseconds and C3 is in nanofarads.

## Procedure

The	 EV	 kit	 is	 fully	 assembled	 and	 tested.	 Follow	 the steps	below	to	verify	the	board	operation. Caution: Do not  turn  on  power  supply  until  all  connections  are completed.

- 1)  Set	the	power	supply	at	a	voltage	between	14V	and 60V.	Disable	the	power	supply.
- 2)  Connect  the  positive  terminal  of  the  power  supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 500mA load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3)  Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4)  Turn on the DC power supply.
- 5)  Enable	the	load.
- 6)  Verify that the DVM displays 12V.

To turn-on/off the part from EN/UVLO, follow the steps below:

- 1)  Remove resistors R1 and R2.
- 2)  Connect the power supply to the EV kit and turn on the power supply. Set the power supply at a voltage between	14V	and	60V.

## MAX17501G Evaluation Kit

## Evaluates: MAX17501G in TDFN Package

## Regulator Enable/Undervoltage-Lockout Level (EN/UVLO)

The device features an EN/UVLO input. For normal operation,	 no	 shunts	 should	 be	 installed	 across	 pins	 1-2	 or 2-3	on	jumper	JU1.	To	disable	the	output,	install	a	shunt across pins 2-3 on JU1 and the EN/UVLO pin is pulled to	GND.	See	Table	1	for	JU1	settings.

## Setting the Undervoltage-Lockout Level

The	 device	 offers	 an	 adjustable	 input	 undervoltagelockout level. Set the voltage at which the device turns on  with  a  resistive  voltage-divider  connected  from  VIN to GND (see Figure 1). Connect the center node of the divider to EN/UVLO.

Choose	R1	to	be	3.3M I and then calculate R2 as follows:

<!-- formula-not-decoded -->

where V INU  is the voltage at which the device is required to turn on. Ensure that V INU  is higher than 0.8 x V OUT .

## Table 1. Regulator Enable (EN/UVLO) Jumper JU1 Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17501_ OUTPUT                                               |
|------------------|------------------------------------------------------------|----------------------------------------------------------------|
| Not installed*   | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistor-divider |
| 2-3              | Connected to GND                                           | Disabled                                                       |

* Default position.

Figure 1. MAX17501G Load and Line Regulation

<!-- image -->

## Adjusting the Output Voltage

The	device	offers	an	adjustable	output	voltage.	Set	the output voltage with a resistive voltage-divider connected from the positive terminal of the output capacitor (V OUT ) to GND (see Figure 1). Connect the center node of the voltage-divider to FB.

To choose the values of R4 and R5, select the parallel combination	of	R4	and	R5,		RP less than 15k Ω . Once RP is selected, calculate R4 as follows:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## EV Kit Performance Report

Figure 2. MAX17501G Efficiency

<!-- image -->

## MAX17501G Evaluation Kit

## Evaluates: MAX17501G in TDFN Package

## EV Kit Performance Report (continued)

<!-- image -->

Figure 4. MAX17501G No Load to 250mA Load Transient

Figure 3. MAX17501G Full-Load Bode Plot (V IN  = 24V)

<!-- image -->

Figure 5. MAX17501G 250mA to 500mA Load Transient

<!-- image -->

## MAX17501G Evaluation Kit

## Evaluates: MAX17501G in TDFN Package

Figure 6. MAX17501G EV Kit Schematic

<!-- image -->

## MAX17501G Evaluation Kit

## Evaluates: MAX17501G in TDFN Package

<!-- image -->

Figure 7. MAX17501G EV Kit Component Placement GuideComponent Side

Figure 8. MAX17501G EV Kit PCB Layout-Component Side

<!-- image -->

Figure 9. MAX17501G EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX17501G Evaluation Kit

## Evaluates: MAX17501G in TDFN Package

Figure 10. MAX17501G EV Kit PCB Layout-Top Solder Mask

<!-- image -->

## Ordering Information

# Denotes RoHS compliant.

| PART             | TYPE   |
|------------------|--------|
| MAX17501GTEVKIT# | EV Kit |

Figure 11. MAX17501G EV Kit PCB Layout-Bottom Solder Mask

<!-- image -->

## MAX17501G Evaluation Kit

## Evaluates: MAX17501G in TDFN Package

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/12           | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.