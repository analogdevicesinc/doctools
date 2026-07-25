<!-- lastmod 2022-08-04 -->
## MAX14575A-MAX14575C Evaluation Kits

## General Description

The  MAX14575A-MAX14575C evaluation kits  (EV  kits) are fully assembled and tested circuit boards that demonstrate  the  functionality  of  the  MAX14575A-MAX14575C adjustable current-limit switches in an 8-pin TDFN package. Each EV kit features jumpers for configuration and evaluation of all versions of the IC, which include autoretry,  latchoff,  and  continuous  current-limit  versions.  Input power to the EV kits is provided by a standard 5V USB bus or an external 5V power supply.

## Component List

| DESIGNATION          |   QTY | DESCRIPTION                                                        |
|----------------------|-------|--------------------------------------------------------------------|
| BP1, BP3             |     2 | Red binding posts Keystone 7006                                    |
| BP2, BP4             |     2 | Black binding posts Keystone 7007                                  |
| C1                   |     1 | 1µF ±10%, 25V X5R ceramic capacitor (0603) Murata GRM188R61E105K   |
| C2                   |     1 | 0.1µF ±10%, 25V X5R ceramic capacitor (0603) Murata GRM188R61E104K |
| C3, C4               |     2 | 10µF ±10%, 25V X5R ceramic capacitors (0805) TDK C2012X5R1E106K    |
| J1                   |     1 | USB type-B right-angle receptacle Molex 67068-9000                 |
| JU1                  |     1 | 8-pin, dual-row header, 0.1in centers                              |
| JU2, JU5, JU10, JU11 |     4 | 2-pin, single-row headers, 0.1in centers                           |
| JU3                  |     1 | 4-pin header, 0.1in centers                                        |
| LED1                 |     1 | Green LED (1206) Kingbright APTL3216CGCK                           |

## Evaluate: MAX14575A/MAX14575AL/ MAX14575B/MAX14575C

## Benefits and Features

- Evaluate	Preselected	Threshold	or	Adjustable Threshold by Simple Jumper Configuration
- Easy	Connections	through	Binding	Posts
- Status	LEDs	Give	Visual	Indication	of	Power	Present and Fault Conditions
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

| DESIGNATION        |   QTY | DESCRIPTION                                        |
|--------------------|-------|----------------------------------------------------|
| LED2               |     1 | Red LED (1206) Lite-On LTST-C150CKT                |
| R1                 |     1 | 309Ω ±1% resistor (0805)                           |
| R2                 |     1 | 10kΩ ±1% resistor (0805)                           |
| R3                 |     1 | 332Ω ±1% resistor (0805)                           |
| R4, R9, R11        |     3 | 475kΩ ±1% resistors (0805)                         |
| R5, R12            |     0 | Not installed, resistors (0805)                    |
| R6                 |     1 | 499kΩ ±1% resistor (0805)                          |
| R7                 |     1 | 84.5kΩ ±1% resistor (0805)                         |
| R8, R15            |     2 | 51.1kΩ ±1% resistors (0805)                        |
| R10                |     1 | 1kΩ ±1% resistor (0805)                            |
| R16                |     1 | 12-turn, 500kΩ potentiometer Murata PV37W504C01B00 |
| TP1                |     1 | White test point                                   |
| TP2, TP4, TP5, TP7 |     4 | Black test points                                  |
| TP3, TP6           |     2 | Red test points                                    |
| TP8                |     1 | Yellow test point                                  |
| U1                 |     1 | See the EV Kit-Specific Component List             |
| U2                 |     1 | NC7WZ07                                            |
| -                  |     5 | Shunts                                             |
| -                  |     1 | PCB: MAX14575A/B/C EVKIT                           |

<!-- image -->

## MAX14575A-MAX14575C Evaluation Kits

## EV Kit-Specific Component List

| PART            | DESIGNATION   | DESCRIPTION                                                                                     |
|-----------------|---------------|-------------------------------------------------------------------------------------------------|
| MAX14575AEVKIT# | U1*           | 250mA to 2.5A adjustable current-limit switch (8 TDFN-EP**) Maxim MAX14575AETA+ (Top Mark: BMV) |
| MAX14575BEVKIT# | U1*           | 250mA to 2.5A adjustable current-limit switch (8 TDFN-EP**) Maxim MAX14575BETA+ (Top Mark: BMX) |
| MAX14575CEVKIT# | U1*           | 250mA to 2.5A adjustable current-limit switch (8 TDFN-EP**) Maxim MAX14575CETA+ (Top Mark: BMY) |

## Component Suppliers

| SUPPLIER                   | PHONE        | WEBSITE                |
|----------------------------|--------------|------------------------|
| Keystone Electronics Corp. | 800-221-5510 | www.keyelco.com        |
| Kingbright Corporation     | 909-468-0500 | www.kingbrightusa.com  |
| Lite-On, Inc.              | 408-946-4873 | www.us.liteon.com      |
| Molex                      | 800-786-6539 | www.molex.com          |
| Murata Americas            | 800-241-6574 | www.murataamericas.com |
| TDK Corp.                  | 847-803-6100 | www.component.tdk.com  |

Note: Indicate that you are using the MAX14575A-MAX14575C when contacting these component suppliers.

## Quick Start

## Required Equipment

-  MAX14575A-MAX14575C	EV	kit
- 5V,	2.6A	power	supply

## Procedure

The EV kits are fully  assembled and tested. Follow the steps	below	to	verify	board	operation:

- 1)  Verify	that	a	shunt	is	installed	across	pins	1-3	on	jump -er	JU3	(powers	the	device	and	peripherals	at	TP6)	and that a shunt is installed across pins 1-2 on jumper JU5 (enables the device).
- 2)  Verify that a shunt is installed across pins 1-2 on jumper JU10 (connects the FLAG output	on	the	device	to	LED).
- 3)  Verify	that	a	shunt	is	not	installed	across	pins	1-2	on jumper	JU2	(an	installed	jumper	forces	LED2	on).
- 4)  Install a shunt at the desired location on jumper JU1 to set the current limit according to Table 1.
- 5)  Connect	the	5V,	2.6A	power	supply	at	TP6.
- 6)  Verify	that	the	green	LED	(LED1)	is	lit,	indicating	that the device is powered.
- 7)  Connect	TP8	or	BP3	to	the	system	in	which	the	device will	be	evaluated,	or	connect	a	variable	load	to	TP8.
- 8)  If	current	limit	is	reached,	LED2	glows	red	and	device goes  into  its  defined  overcurrent  fault  response. See the	 MAX14575A/MAX14575AL/MAX14575B/ MAX14575C IC data sheet for more details.

## Detailed Description of Hardware

The MAX14575A-MAX14575C EV kits are fully assembled  and  tested  circuit  boards  that  demonstrate  the functionality of the MAX14575A-MAX14575C adjustable current-limit switches in an 8-pin TDFN package. Each EV kit features jumpers for configuration and evaluation of all versions of the device, which include autoretry, latchoff, and  continuous  current-limit  versions.  Input  power  to the EV kit is provided by a standard 5V USB bus or an external  5V  power  supply.  Included  with  the  EV  kit  is  a USB type-A male to USB type-B male cable, providing a convenient way to power the EV kit's peripherals without disturbing evaluation of the current-limiting function of the device. Input power can also be supplied by an external DC source.

│

Evaluate: MAX14575A/MAX14575AL/

MAX14575B/MAX14575C

## MAX14575A-MAX14575C Evaluation Kits

## Power Supply

The EV kit  peripherals  are  powered  by  a  user-supplied USB port at J1 or by a 5V DC power supply connected between V EXT and	GND.	Jumper	JU3's	position	selects the	power	source.	With	a	shunt	shorting	pins	1-2	on	JU3, the EV kit is powered at V EXT , while a shunt shorting pins 1-3	means	that	the	EV	kit	is	powered	by	the	supply	pres -ent	at	the	input	of	the	device.	Placing	the	shunt	on	pins 1-4	on	JU3	allows	the	peripheral	devices	to	be	powered from	 an	 external	 power	 supply	 connected	 at	 TP3.	 The device  must  always  be  powered  by  an  external  supply connected	at	TP6	or	BP1.	See	Table	1	for	jumper	settings.

## Flag Indicator LED

## Evaluate: MAX14575A/MAX14575AL/ MAX14575B/MAX14575C

installed  at  1-2  and  jumper  JU2  has  no  shunt  installed, then	an	overcurrent	fault	causes	LED2	to	glow	red.	See Table 1 for jumper settings.

## Preset and Adjustable Current Limits

The  EV  kit  includes  three  common  overcurrent  limits as  jumper-configurable  options,  as  well  as  a  fourth jumper-configurable option for an adjustable limit. Set the current limit to 250mA and install a shunt across pins 1-2 on jumper JU1. For the 1.5A current limit, install a shunt across	pins	3-4	on	JU1.	For	the	2.5A	current	limit	or	the adjustable limit, install a shunt across pins 5-6 or 7-8 on JU1,  respectively.  The  adjustable  limit  is  set  using  the potentiometer (R16). See Table 1 for jumper settings.

The	EV	kit	includes	a	built-in	LED	to	give	visual	notifica -tion  of  an  overcurrent fault. If  jumper JU10 has a shunt

Table 1. Jumper Settings (JU1-JU3, JU5, JU10, JU11)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                              |
|----------|------------------|----------------------------------------------------------|
| JU1      | 1-2              | 250mA current limit                                      |
| JU1      | 3-4*             | 1.5A current limit                                       |
| JU1      | 5-6              | 2.5A current limit                                       |
| JU1      | 7-8              | Adjustable current limit (adjust current limit with R16) |
| JU2      | 1-2              | Force flag                                               |
| JU2      | Not installed*   | Normal operation                                         |
| JU3      | 1-2*             | Peripherals are powered by USB (J1)                      |
| JU3      | 1-3              | Peripherals are powered by the same supply as the device |
| JU3      | 1-4              | Peripherals are powered by an external 5V supply         |
| JU5      | 1-2*             | Enables the device                                       |
| JU5      | Not installed    | Disables the device                                      |
| JU10     | 1-2*             | Enables the fault indicator LED (LED2)                   |
| JU10     | Not Installed    | Disables the fault indicator LED (LED2)                  |
| JU11     | 1-2              | Shorts input and output of the device                    |
| JU11     | Not installed*   | Normal operation                                         |

* Default position.

│

Figure 1. MAX14575A-MAX14575C EV Kit Schematic

<!-- image -->

## MAX14575A-MAX14575C Evaluation Kits

<!-- image -->

Figure 2. MAX14575A-MAX14575C EV Kit Component Placement Guide-Component Side

Figure 3. MAX14575A-MAX14575C EV Kit PCB LayoutComponent Side

<!-- image -->

Figure 4. MAX14575A-MAX14575C EV Kit PCB LayoutLayer 2

<!-- image -->

Figure 5. MAX14575A-MAX14575C EV Kit PCB LayoutLayer 3

<!-- image -->

Figure 6. MAX14575A-MAX14575C EV Kit PCB LayoutSolder Side

<!-- image -->

│

## MAX14575A-MAX14575C Evaluation Kits

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX14575AEVKIT # | EV Kit |
| MAX14575BEVKIT # | EV Kit |
| MAX14575CEVKIT # | EV Kit |

# Denotes RoHS compliant.

Evaluate: MAX14575A/MAX14575AL/

MAX14575B/MAX14575C

│

## MAX1457A-MAX1457C Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

Evaluate: MAX1457A/MAX1457AL/

MAX1457B/MAX1457C