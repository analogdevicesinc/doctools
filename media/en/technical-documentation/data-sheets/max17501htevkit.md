<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX17501H Evaluation Kit

## Evaluate: MAX17501H in TDFN Package

## General Description

The  MAX17501H  EV  kit  provides  a  proven  design  to evaluate  the  MAX17501H  high-efficiency,  high-voltage, synchronous  step-down  DC-DC  converter  in  a  TDFN package.  The  EV  kit  uses  the  MAX17501H  device  to generate 2.5V at load currents up to 500mA from a 4.5V to 60V input supply. The MAX17501H features a forcedPWM control scheme that provides constant switchingfrequency operation at all load and line conditions.

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1            |     1 | 2.2 F F Q 10%, 100V X7R ceramic capacitor (1210) Murata GRM32ER72A225K |
| C2            |     1 | 1 F F Q 10%, 6.3V X7R ceramic capacitor (0603) Murata GRM188R70J105K   |
| C3            |     1 | 6800pF Q 10%, 25V X7R ceramic capacitor (0402) Murata GRM155R71E682K   |
| C4            |     1 | 22 F F Q 10%, 10V X7R ceramic capacitor (1210) Murata GRM32ER71A226K   |
| C5            |     1 | 2200pF Q 10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H222K   |
| C7            |     1 | 33 F F 80V aluminum electrolytic (D = 8mm) Panasonic EEEFK1K330P       |

## Features

- S Operates from a 4.5V to 60V Input Supply
- S 2.5V Output Voltage
- S 500mA Output Current
- S 300kHz Switching Frequency
- S Enable/UVLO Input
- S Resistor-Programmable UVLO Threshold
- S Open-Drain RESET Output
- S Overcurrent and Overtemperature Protection
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C9            |     1 | 47pF Q 10%, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H470J |
| JU1           |     1 | 3-pin header                                                       |
| L1            |     1 | 47 F H, 1.2A inductor (6mm x 6mm x 3.5mm) Coilcraft LPS6235-473ML  |
| R1            |     1 | 3.32M I Q 1% resistor (0402)                                       |
| R2            |     1 | 1M I Q 1% resistor (0402)                                          |
| R3            |     1 | 20k I Q 1% resistor (0402)                                         |
| R4            |     1 | 69.8k I Q 1% resistor (0402)                                       |
| R5            |     1 | 39.2k I Q 1% resistor (0402)                                       |
| R6            |     1 | 10k I Q 1% resistor (0402)                                         |
| TP1, TP2      |     0 | Not installed, test points                                         |
| U1            |     1 | Buck converter (10 TDFN-EP*) Maxim MAX17501HATB+                   |
| -             |     1 | Shunt                                                              |
| -             |     1 | PCB: MAX17501HT EVALUATION KIT                                     |

## MAX17501H Evaluation Kit

## Evaluate: MAX17501H in TDFN Package

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |

Note: Indicate that you are using the MAX17501 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX17501H	EV	kit
- 4.5V	to	60V,	1A	DC	input	power	supply
- Load	capable	of	sinking	500mA
- Digital	voltmeter	(DVM)
- Function	generator

To  turn-on/turn-off  the  part  from  EN/UVLO,  follow  the steps	below:

- 1)  Remove  resistors  R1  and  R2  and  the  jumper  connected across pins 1-2 on jumper JU1.
- 2)  Connect the power supply to the EV kit and turn on the power supply. Set the power supply at a voltage between	4.5V	and	60V.
- 3)  Connect  the  function  generator  output  to  the  EN/ UVLO test loop.
- 4)  EN/UVLO rising threshold is 1.24V and falling threshold  is  1.11V.  Make  sure  that  the  voltage-high  and voltage-low levels of the function generator output are greater than 1.24V and less than 1.11V, respectively.
- 5)  While powering down the EV kits, first disconnect the function generator output from the EN/UVLO test loop and then turn off the DC power supply.

## Detailed Description of Hardware

The  MMAX17501H EV kit  provides  a  proven  design  to evaluate  the  MAX17501H  high-efficiency,  high-voltage, synchronous  step-down  DC-DC  converter  in  a  TDFN package.  The  EV  kit  generates  2.5V  at  load  currents up to  500mA from a 4.5V to 60V input supply. The EV kit  features  a  300kHz  fixed  switching  frequency  for optimum efficiency and component size. The EV kit features a forced-PWM control scheme that provides constant switching frequency operation at all load and line conditions.

## Procedure

The	 EV	 kit	 is	 fully	 assembled	 and	 tested.	 Follow	 the steps	below	to	verify	the	board	operation. Caution: Do not  turn  on  power  supply  until  all  connections  are completed.

- 1)  Set	the	power	supply	at	a	voltage	between	4.5V	and 60V.	Disable	the	power	supply.
- 2)  Connect  the  positive  terminal  of  the  power  supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 500mA load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3)  Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4)  Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper JU1.
- 5)  Turn on the DC power supply.
- 6)  Enable	the	load.
- 7)  Verify that the DVM displays the expected voltage.

## MAX17501H Evaluation Kit

## Evaluate: MAX17501H in TDFN Package

The EV kit includes an EN/UVLO PCB pad and jumper JU1 to	 enable	 control	 of	 the	 converter	 output.	 An	 additional RESET PCB	pad	is	available	for	monitoring	the	converter output. The VCC PCB pad helps measure the internal LDO voltage.

## Soft-Start Input (SS)

The	 device	 utilizes	 an	 adjustable	 soft-start	 function	 to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted	by	the	value	of	C3,	the	external	capacitor	from SS to GND. To adjust the soft-start time, determine C3 using the following formula:

<!-- formula-not-decoded -->

where t SS   is  the  required  soft-start  time  in  milliseconds and C3 is in nanofarads.

## Regulator Enable/Undervoltage-Lockout Level (EN/UVLO)

The  device  features  an  EN/UVLO  input.  For  normal operation,	a	shunt	should	be	installed	across	pins	1-2	on jumper	JU1.	To	disable	the	output,	install	a	shunt	across pins 2-3 on JU1 and the EN/UVLO pin is pulled to GND. See	Table	1	for	JU1	settings.

## Setting the Undervoltage-Lockout Level

The	 device	 offers	 an	 adjustable	 input	 undervoltagelockout level. Set the voltage at which the device turns on,  with  a  resistive  voltage-divider  connected  from  VIN to GND (see Figure 1). Connect the center node of the divider to EN/UVLO.

Choose	R1	to	be	3.3M I and then calculate R2 as follows:

<!-- formula-not-decoded -->

where V INU  is the voltage at which the IC is required to turn on. Ensure that V INU  is higher than 0.8 x V OUT .

## Adjusting the Output Voltage

The	 device	 offers	 an	 adjustable	 output	 voltage.	 Set	 the output voltage with a resistive voltage-divider connected from the positive terminal of the output capacitor (V OUT ) to  GND  (see  Figure  1).  Connect  the  center  node  of  the divider to FB/VO.

Select	the	parallel	combination	of	R4	and	R5, RP to	 be less  than  30k I .  Once  R P  is  selected,  calculate  R4  as follows:

<!-- formula-not-decoded -->

Calculate R5 as follows:

<!-- formula-not-decoded -->

Table 1. Regulator Enable (EN/UVLO) Jumper JU1 Description

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17501_ OUTPUT                                               |
|------------------|------------------------------------------------------------|----------------------------------------------------------------|
| 1-2*             | Connected to IN                                            | Enabled                                                        |
| Not installed    | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistor-divider |
| 2-3              | Connected to GND                                           | Disabled                                                       |

## MAX17501H Evaluation Kit

## Evaluate: MAX17501H in TDFN Package

## EV Kit Performance Report

<!-- image -->

Figure 3. MAX17501H Full-Load Bode Plot (VIN = 24V)

<!-- image -->

Figure 4. MAX17501H No Load to 250mA Load Transient (VIN = 24V)

<!-- image -->

Figure 5. MAX17501H 250mA to 500mA Load Transient (VIN = 24V)

Figure 1. MAX17501H Load and Line Regulation

<!-- image -->

Figure 2. MAX17501H Efficiency

<!-- image -->

## MAX17501H Evaluation Kit

## Evaluate: MAX17501H in TDFN Package

Figure 6. MAX17501H EV Kit Schematic

<!-- image -->

## MAX17501H Evaluation Kit

## Evaluate: MAX17501H in TDFN Package

<!-- image -->

Figure 7. MAX17501H EV Kit Component Placement GuideComponent Side

Figure 8. MAX17501H EV Kit PCB Layout-Component Side

<!-- image -->

Figure 9. MAX17501H EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX17501H Evaluation Kit

## Evaluate: MAX17501H in TDFN Package

Figure 10. MAX17501H EV Kit PCB Layout-Top Solder Mask

<!-- image -->

Figure 11. MAX17501H EV Kit PCB Layout-Bottom Solder Mask

<!-- image -->

## MAX17501H Evaluation Kit

## Evaluate: MAX17501H in TDFN Package

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17501HTEVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX17501H Evaluation Kit

## Evaluate: MAX17501H in TDFN Package

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/12           | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.