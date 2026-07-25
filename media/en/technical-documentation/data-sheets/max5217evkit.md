<!-- lastmod 2022-08-03 -->
## MAX5217 Evaluation Kit

## Evaluates: MAX5215/MAX5217/MAX5217B

## General Description

The  MAX5217  evaluation  kit  (EV  kit)  demonstrates  the MAX5217,  16-bit,  single-channel,  low-power,  buffered voltage-output  DAC. The  IC  comes  in  an  8-pin  µMAX ® package. The EV kit provides controls to change the DAC output and power operations.

The  DAC  IC  is  controlled  by  an  on-board  MAXQ ® microcontroller  that  provides  an  I 2 C  interface.  The  EV kit features Windows  XP ® -, Windows  Vista ® -,  and Windows ®  7-compatible software that provides a simple graphical user interface (GUI) for exercising the features of the device.

The  EV  kit  comes  with  the  MAX5217GUA+  (16-bit,  ±4 LSB INL (max)) installed. Contact the factory for samples of the pin-compatible MAX5215GUA+ (14-bit, ±1 LSB INL (max)) and MAX5217BGUA+ (16-bit, ±8 LSB INL (max)) versions.

## Component List

| DESIGNATION                         |   QTY | DESCRIPTION                                                        |
|-------------------------------------|-------|--------------------------------------------------------------------|
| ADDR, AUX , OUT, REF, SDA, SCL, VDD |     7 | Red test points                                                    |
| AGND, DGND, GNDS                    |     3 | Black test points                                                  |
| C1, C5-C7, C19-C22                  |     8 | 1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C105K  |
| C2, C12-C14, C18, C27, C33          |     7 | 0.1µF 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C4                                  |     1 | 200pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H201J  |

µMAX and MAXQ are registered trademarks of Maxim Integrated Products, Inc.

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

## Features

- Wide	Input	Supply	Range:	2.7V	to	5.5V
- Low-Power	Consumption	(80µA	max)
- Rail-to-Rail	Buffered	Output
- Configurable AUX Pin	for	Asynchronous	CLR	or LDAC	Operation
- Selectable	Output	Termination:	1kΩ,	100kΩ,	or	High Impedance
- Supports	14-Bit	and	16-Bit	DACs
- Windows	XP-,	Windows	Vista-,	and	Windows 7-Compatible Software
- USB	Powered	(Cable	Included)
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

| DESIGNATION        |   QTY | DESCRIPTION                                                       |
|--------------------|-------|-------------------------------------------------------------------|
| C25                |     1 | 100pF ±5%, 50V C0G ceramic capacitor (0603) Murata GQM1885C1H101J |
| C15, C16           |     2 | 18pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H180J |
| C17                |     0 | Not installed, ceramic capacitor (0603)                           |
| H1                 |     0 | Not installed, 4-pin header                                       |
| H2                 |     1 | 10-pin (2 x 5) dual-row header                                    |
| JU1, JU2, JU4, JU5 |     4 | 2-pin headers                                                     |
| JU3, JU6, JU7      |     3 | 3-pin headers                                                     |
| JU_ID0- JU_ID3     |     0 | Not installed, 2-pin headers                                      |

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX5217 Evaluation Kit

## Evaluates: MAX5215/MAX5217/MAX5217B

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                  |
|---------------|-------|----------------------------------------------|
| L1            |     1 | Ferrite bead (0603) TDK MMZ1608R301A         |
| R1, R2        |     2 | 4.7kΩ ±5% resistors (0603)                   |
| R3            |     1 | 1MΩ ±5% resistor (0603)                      |
| R4-R6         |     3 | 1.5kΩ ±% resistors (0603)                    |
| R8            |     1 | 100Ω ±5% resistor (0603)                     |
| R9, R10       |     2 | 10kΩ ±5% resistors (0603)                    |
| U1            |     1 | 16-bit DAC (8 µMAX) Maxim MAX5217GUA+        |
| U3            |     1 | Voltage reference (8 µMAX) Maxim MAX6133A25+ |
| U4            |     1 | Level translator (10 µMAX) Maxim MAX1840EUB+ |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX5217 when contacting these component suppliers.

## MAX5217 EV Kit Files

| FILES               | DESCRIPTION                                |
|---------------------|--------------------------------------------|
| INSTALL.EXE         | Installs the EV kit files on your computer |
| MAX5217.EXE         | Application program                        |
| USBConverterDLL.DLL | Application library                        |
| UNINSTALL.EXE       | Uninstalls the EV kit software             |

## Quick Start

## Required Equipment

- MAX5217	EV	kit	(USB	cable	included)
- Windows	XP,	Windows	Vista,	or	Windows	7	PC	with	a spare USB port
- Digital	voltmeter	(DVM)

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The	EV	kit	is	fully	assembled	and	tested.	Follow	the	steps below	to	verify	board	operation:

- 1)  Verify that	 jumpers	 JU1-JU7	 are	 in	 their	 default positions, as shown in Table 1.
- 2)  Connect the GNDS  PCB  pad  to the negative terminal of the DVM and connect the positive terminal to measure	the	voltage	at	the	OUT	test	points.
- 3)  Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, 5217Rxx.ZIP.	Save	the	EV	kit	software	to	a	temporary folder	and	uncompress	the	ZIP	file.
- 4)  Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied to your PC and icons are created in the Windows Start | Programs menu.
- 5)  Connect  the  USB  cable  from  the  PC  to  the  EV  kit board; the USB driver is installed automatically. If the USB  connection  was  not  found,  a  popup  message appears,	as	shown	in	Figure	1.	Follow	the	message	to establish connection between the PC and the EV kit board.

| DESIGNATION   |   QTY | DESCRIPTION                                     |
|---------------|-------|-------------------------------------------------|
| U5            |     0 | ESD protector Not Installed (6 SOT23)           |
| U7            |     1 | 3.3V LDO (5 SC70) Maxim MAX8511EXK33+           |
| U8            |     1 | Microcontroller (64 LQFP) Maxim MAXQ622G-0000+  |
| USB1          |     1 | Mini-USB type-B right-angle PC-mount receptacle |
| Y1            |     1 | 12MHz crystal (HCM49)                           |
| -             |     1 | MAX5217 EV kit CD                               |
| -             |     7 | Shunts                                          |
| -             |     1 | USB high-speed A-to-Mini-B cable (6ft)          |
| -             |     1 | PCB: MAX5217 EVALUATION KIT                     |

## MAX5217 Evaluation Kit Evaluates: MAX5215/MAX5217/MAX5217B

Figure 1. No USB Connection Message

<!-- image -->

## Table 1. Jumper Settings (JU1-JU7)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                            |
|----------|------------------|----------------------------------------------------------------------------------------|
| JU1      | Installed*       | Connects SDApin of the U1 IC to the on-board microcontroller.                          |
| JU1      | Not installed    | Disconnects SDApin of the U1 IC to the on-board microcontroller.                       |
| JU2      | Installed*       | Connects SCL pin of the U1 IC to the on-board microcontroller.                         |
| JU2      | Not installed    | Disconnects SCL pin of the U1 IC to the on-board microcontroller.                      |
| JU3      | 1-2*             | ConnectsADDR pin of IC U1 to VDD to determine I 2 C address. See Table 2.              |
| JU3      | 2-3              | ConnectsADDR pin of IC U1 to DGND to determine I 2 C address. See Table 2.             |
| JU3      | Not installed    | ADDR pin of IC U1 is not connected to determine I 2 C address. See Table 2.            |
| JU4      | Installed*       | Connects the AUX signal of the on-board microcontroller to the AUX pin of IC U1.       |
| JU4      | Not installed    | Disconnects the AUX signal of the on-board microcontroller to the AUX pin of IC U1.    |
| JU5      | Installed        | Connects load capacitor C25 and resistor R10 to the DAC output of IC U1.               |
| JU5      | Not installed*   | Disconnects load capacitor C25 and resistor R10 to the DAC output of IC U1.            |
| JU6      | 1-2*             | Connects the VDD pins of IC U1 to the on-board +3.3V supply.                           |
| JU6      | 1-3              | Connects the VDD pins of IC U1 to a user-supplied power supply between +2.5V to +5.5V. |
| JU6      | Not installed    | User-supplied VDD. The user must apply a voltage at the VDD test point.                |
| JU7      | 1-2*             | Connects the REF pin of IC U1 to the on-board 2.5V reference (MAX6133).                |
| JU7      | 2-3              | Connects the REF pin of IC U1 to VDD.                                                  |
| JU7      | Not installed    | User-supplied REF. The user must apply a voltage reference at the REF test point.      |

*Default position.

- 6)  Start  the  EV  kit  software  by  opening  its  icon  in  the Start  |  Programs menu.  The  EV  kit  software  main window	appears,	as	shown	in	Figure	2.
- 7)  Within the DAC group box, select the Code and Load selection from the Command drop-down list and drag the	scrollbar	to	the	right	until	the	data	reaches	0xFFFF.
- 8)  Verify that the DVM measured is 2.5V.

Figure 2. MAX5217 EV Kit Software Main Window

<!-- image -->

## MAX5217 Evaluation Kit

## Evaluates: MAX5215/MAX5217/MAX5217B

## Detailed Description of Software

The  MAX5217  EV  kit  software  controls  the  DAC  code and	output	voltage.	Other	features	include	changing	the operating modes and reference.

## Part Selection

In  the  upper-left  corner  of  the  GUI  is  a Part  Selection group  box.  The  user  must  select  the  appropriate  radio button  that  corresponds  to  the  installed  Maxim  IC  DAC bits.

## I 2 C Interface

The  software  automatically  detects  the  correct I 2 C address from the drop-down list. See Table 2 for a list of the I 2 C addresses.

## Reference

When setting the reference, confirm that the VDD supply is  greater  or  equal  to  the  voltage  reference  entered  for proper operation. To use the external reference, the user must enter a valid voltage in the REF edit box.

## Command

Choose the appropriate Command from  the  drop-down list  and  drag  the Data scrollbar  to  start  writing  data. Optionally,	 the	 user	 can	 enter	 the	 desired	 data	 in	 the Data edit box and press the Enter key on the keyboard. Refer	to	the	MAX5215/MAX5217	IC	data	sheet	for	a	list	of possible commands.

## Software Reset

The SW  Reset button  allows  the  user  to  reset  the CODE	register,	the	DAC	latch,	and	all	the	configuration commands	to	the	POR	default	values.

## Software Clear

The SW Clear button	allows	the	user	to	clear	the	CODE register and the DAC latch to the clear value selected in the Clear Value group box.

## Table 2. I 2 C Address Setting

| JU3 SHUNT POSITION (ADDR)   |   A6 |   A5 |   A4 |   A3 |   A2 |   A1 |   A0 | R/W   | WRITE ADDRESS (hex)   | READ ADDRESS (hex)   |
|-----------------------------|------|------|------|------|------|------|------|-------|-----------------------|----------------------|
| 1-2*                        |    0 |    0 |    1 |    1 |    1 |    1 |    1 | -     | 0x3E                  | 0x3F                 |
| 2-3                         |    0 |    0 |    1 |    1 |    1 |    0 |    0 | -     | 0x38                  | 0x39                 |
| Not installed               |    0 |    0 |    1 |    1 |    1 |    0 |    1 | -     | 0x3A                  | 0x3B                 |

*Default position.

## Configuration

The Configuration group box includes the controls to the configuration	register:	clear	values, AUX input mode, and power-down mode of the device.

## Clear Values

The	user	can	set	the	DAC	values	to	zero,	mid	scale,	or	full scale when the SW Clear button is pressed.

## AUX Pin

The  user  can  use  the AUX pin  for LDAC and CLR operations.	Once	the	appropriate	selection	is	made,	the AUX pin	can	be	driven	high,	low,	or	pulsed.	Refer	to	the MAX5215/MAX5217	IC	data	sheet	for	a	detailed	description of AUX pin functions.

## DAC Outputs

When the output of the DAC is not in normal operation, the	output	can	be	powered	down	with	a	1kΩ	termination to	GND,	100kΩ	termination	to	GND,	or	high	impedance.

## Read Back

The product ID is read when an address is detected.

Within the DAC group box, press the Read Back button and the code and voltage of the DAC are displayed.

Within  the Configuration group  box,  press  the Read Back button  and  the  clear  values, AUX pin,  and  DAC outputs are read back.

## Multiple EV Kits

The software can communicate to multiple MAX5217 EV kits  connected  to  the  USB  ports  on  the  PC. The  status bar at the bottom of the GUI shows the number of boards that are connected. If all boards connected to the PC are not connected to the GUI, click the Connect menu item and  the  status  bar  should  be  updated.  Use  the Board Index drop-down list to select the appropriate EV kit for communication.

## MAX5217 Evaluation Kit

## Evaluates: MAX5215/MAX5217/MAX5217B

## Detailed Description of Hardware

The  MAX5217  EV  kit  provides  a  proven  layout  for  the MAX5217 DAC. An on-board MAXQ622 microcontroller and jumpers to disconnect the on-board microcontroller are included on the EV kit.

## I 2 C Address

The  I 2 C  address  of  the  device  is  determined  by  the shunt	settings	of	jumper	JU3.	See	Table	2	for	all	possible hexadecimal addresses.

## User-Supplied Power Supply

The EV kit is powered completely from the USB port by default. To power the device with a user-supplied power supply,	remove	the	shunt	on	jumper	JU6	and	apply	a	2.7V to 5.5V power supply at the VDD test point and the nearest AGND test point on the EV kit.

## User-Supplied Reference

The user can apply a user-supplied voltage reference by removing	 the	 shunt	 on	 jumper	 JU7	 and	 applying	 2V	 to VDD	at	the	REF	test	point	on	the	EV	kit.

## User-Supplied I 2 C

To  evaluate  the  EV  kit  with  a  user-supplied  I 2 C  bus, remove	 shunts	 from	 jumpers	 JU1	 and	 JU2.	 Apply	 the user-supplied I 2 C signals to the SCL and SDA test point and use the nearest DGND test point for the return ground on the EV kit. If pullup resistors are on the user-supplied interface,	resistors	R1	and	R2	should	be	removed.

## User-Supplied AUX

A  user-supplied AUX signal  can  be  used  by  removing shunts	 from	 jumper	 JU4.	 Apply	 the	 user-supplied AUX signal to the AUX test point and use the nearest DGND test point for the return ground on the EV kit.

Figure 3a. MAX5217 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

## MAX5217 Evaluation Kit Evaluates: MAX5215/MAX5217/MAX5217B

Figure 3b. MAX5217 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

Figure 4. MAX5217 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 5. MAX5217 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 6. MAX5217 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX5217EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX5217 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/12           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.

Evaluates: MAX5215/MAX5217/MAX5217B