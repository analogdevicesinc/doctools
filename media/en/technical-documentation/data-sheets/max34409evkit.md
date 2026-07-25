<!-- lastmod 2022-08-03 -->
## MAX34409 Evaluation Kit

## General Description

The MAX34409 evaluation kit (EV kit) provides the hardware and software graphical user interface (GUI) necessary  to  evaluate  the  MAX34409  SMBus  quad  current monitor. The EV kit includes a MAX34409ETE+ installed, as well as a USB I 2 C dongle to communicate with a PC.

## EV Kit Contents

- Assembled	circuit	board	including	MAX34409ETE+
- Mini-USB	cable

## EV Kit Photo

<!-- image -->

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

## Features

- Easy	Evaluation	of	the	MAX34409
- USB	HID	interface
- Windows	XP ® -	and	Windows ® 7-Compatible Software
- RoHS	Compliant
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX34409

<!-- image -->

## MAX34409 Evaluation Kit

## Component List

| DESIGNATION                |   QTY | DESCRIPTION                                                      |
|----------------------------|-------|------------------------------------------------------------------|
| C1A-C1D, C2A-C2D, C211     |     9 | 1µF, X7R ceramic capacitors (0805)                               |
| C10, C11, C212             |     3 | 0.1µF, X7R ceramic capacitors (0805)                             |
| C201, C202, C204           |     3 | 10µF, X7R ceramic capacitors (0805)                              |
| C203, C214                 |     2 | 0.01µF, X7R ceramic capacitors (0805)                            |
| C213                       |     1 | 220nF, X7R ceramic capacitor (0805)                              |
| C215                       |     0 | Do not populate, ceramic capacitor (0805)                        |
| D1, D2                     |     2 | Red LEDs (1206)                                                  |
| D20, D21                   |     2 | Dual red/green LEDs                                              |
| D22                        |     1 | Schottky diode Panasonic DB2W31900L                              |
| J1, J22                    |     2 | 4-pin headers, 2.54mm pitch                                      |
| J1A-J1D                    |     4 | 2-position screw terminals, 6.35mm pitch Phoenix Contact 1714955 |
| J20                        |     1 | Mini-USB 5-pin female header                                     |
| J21                        |     0 | Do not populate, 2-pin header                                    |
| J23                        |     1 | 8-pin (2 x 4) header, 2.54mm pitch                               |
| R1A-R1D, R2A-R2D           |     8 | 100Ω ±1% resistors (0805)                                        |
| R3-R3D                     |     4 | 2mΩ ±1% resistors (2512)                                         |
| R4A-R4D, R5A- R5D, R6A-R6D |     0 | Do not populate, resistors (2512)                                |
| R10, R11, R213             |     3 | 2.2kΩ ±1% resistors (0805)                                       |
| R12, R15, R211, R212       |     4 | 330Ω ±1% resistors (0805)                                        |

Evaluates: MAX34409

| DESIGNATION                                           |   QTY | DESCRIPTION                                                     |
|-------------------------------------------------------|-------|-----------------------------------------------------------------|
| R13, R14, R201, R202, R214                            |     5 | 0Ω ±1% resistors (0805)                                         |
| R203, R205                                            |     2 | 560Ω ±1% resistors (0805)                                       |
| R204                                                  |     1 | 100kΩ ±1% resistor (0805)                                       |
| R206                                                  |     1 | 45.3kΩ ±1% resistor (0805)                                      |
| R207                                                  |     1 | 10kΩ ±1% resistor (0805)                                        |
| R210                                                  |     1 | 4.7kΩ ±1% resistor (0805)                                       |
| R215, R216                                            |     0 | Do not populate, resistors (0805)                               |
| S1                                                    |     1 | SPDT slide switch                                               |
| TP1A-TP1D, TP2A-TP2D, TP3A-TP3D, TP4A-TP4D, TP10-TP15 |    22 | White test points                                               |
| TP7, TP8, TP16                                        |     3 | Red test points                                                 |
| TP17-TP19                                             |     3 | Black test points                                               |
| U1                                                    |     1 | SMBus quad current monitor (16 TQFN-EP*) Maxim MAX34409ETE+     |
| U20                                                   |     1 | Microcontroller (28 SO) Microchip PIC18LF2550-I/SO              |
| U21                                                   |     1 | 50mA to 600mA current-limit switch (6 SOT23) Maxim MAX4995AAUT+ |
| U22                                                   |     1 | 500mALDO regulator (8 TDFN-EP*) Maxim MAX8902BATA+              |
| X1                                                    |     1 | 48MHz, 3.3V oscillator (SMD) AVX KC3225A48.0000C30E00           |
| -                                                     |     4 | Jumpers/shunts                                                  |
| -                                                     |     1 | Mini-USB cable                                                  |
| -                                                     |     1 | PCB: MAX34409 EV Kit                                            |

* EP = Exposed pad.

<!-- image -->

## MAX34409 Evaluation Kit

## MAX34409 EV Kit Files

| FILE                           | DESCRIPTION         |
|--------------------------------|---------------------|
| MAX34409EVKSoftwareInstall.EXE | Application program |

Note:

The .EXE file is downloaded as a .ZIP file.

## Quick Start

## Required Equipment

- MAX34409	EV	kit
-  Windows	XP	or	Windows	7	PC
- USB	port
- Mini-USB	cable	(included)
- EV	kit	hardware	(included)
- Screw	driver
- Load	(to	measure	current)

Note: In the following sections, software-related items are identified	by bolding .	Text	in	bold	refers	to	items	directly from  the  install  or  EV  kit  software.  Text  in bold  and underlined refers	 to	 items	 from	 the	 Windows	 operating system.

## Procedure

The	EV	kit	is	fully	assembled	and	tested.	Follow	the	steps below	to	verify	board	operation:

- 1) Ensure that all four jumpers on J23 are populated
- 2) Place the EV kit hardware on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
- 3) Prior to starting the GUI, connect the EV kit hardware to	a	PC	using	the	supplied	mini-USB	cable,	or	equiva -lent.	 The	 POWER	 LED	 (D20)	 should	 be	 green	 and the	COM	LED	(D21)	should	be	red	and	slowly	flash orange.

Evaluates: MAX34409

- 4) Windows	 should	 automatically	 begin	 installing	 the necessary  device  driver.  The  USB  interface  of  the EV	kit	hardware	is	configured	as	an	HID	device	and therefore	 does	 not	 require	 a	 unique/custom	 device driver.  Once  the  driver  installation  is  complete,  a Windows	 message	 appears	 near	 the System  Icon menu,	indicating	that	the	hardware	is	ready	to	use.	Do not attempt to run the GUI prior to this message. If you do,  then  you  must  close  the  application  and  restart it  once  the  driver  installation  is  complete.  On  some versions	of	Windows,	administrator	privileges	may	be required to install the USB device driver.
- 5) Once  the  device  driver  installation  is  complete, visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX34409EVKitSoftwareInstall.ZIP. Save the EV kit software to a temporary folder.
- 6) Open	the	.ZIP	file	and	double-click	on	the	.EXE	file to	run	the	installer.	A	message	box	stating The publisher could not be verified. Are you sure you want to run this software? may appear. If so, click Yes .
- 7) The  installer  GUI  appears.  Click Next and  then Install . Once complete click Close .
- 8)  Go to Start | All Programs . Look for the MAX34409EVKitSoftware folder and click on MAX34409EVKitSoftware.EXE inside the folder.
- 9) When	the	GUI	appears,	the	text	below	the	Maxim	logo should  display EV  Kit  Hardware  Connected .  The COM	LED	(D21)	changes	to	green.
- 10) Connect a load to at least one of the current monitors	(IN1-IN4)	and	then	click Read . See the Monitor Current of Load section for details.

<!-- image -->

## MAX34409 Evaluation Kit

## Detailed Description of Software

## Software Startup

If the MAX34409 EV kit is connected when the software is	 opened,	 the	 software	 first	 initializes	 the	 hardware	 to communicate.	 Next,	 the	 software	 searches	 for	 all	 slave addresses on the I 2 C	bus	and	connects	to	the	first	slave address  that  is  valid.  Then,  the  GUI  displays EV  Kit Hardware Connected at	 the	 bottom-right	 corner	 of	 the window under the Maxim logo. If the EV kit is not connected on software startup, the GUI populates with default EV kit values and displays EV Kit not detected! Once the EV kit is connected, the GUI searches for slave addresses.

## Menu Items

The File menu item contains save, load, and exit options. To  save  the  settings  in  the Control group	 box	 on	 the Control/Registers tab	 (Figure	 2),	 click Save  Project As or Save Project .	 This	saves	the	settings	to	an	XML file. Load Project updates	the	GUI	with	the	XML	file	and writes the values to the device.

The Connection menu item allows the user to connect to a desired device. Find Slave Addresses searches for all  slave addresses connected to the I 2 C	bus.	To	select a  device,  click Select Slave Address and  all  the  slave addresses	 found	 are	 shown	 and	 are	 selectable.	 Slave address	18h	is	not	selectable	to	prevent	communicating with the alert response address.

## Status Log

The	status	log	below	the	tabs	displays	all	the	actions	the GUI	performs.	Whenever	a	SMBus	command	is	read	or written,	the	action	is	confirmed	by	the	log.	The	log	can	be cleared	by	clicking	on	the Clear Log button.

## Monitor/Graph Tab

The Monitor/Graph tab	sheet	(Figure	1)	displays	all	the ADC	values	and	overcurrent	status	for	each	channel.	In the Monitor group	box	table,	the Polled values are the

Evaluates: MAX34409

ADC	 values	 read	 from	 ADC1-ADC4	 (04h	 to	 07h)	 that are  converted  to  amps  using  the RSENSE value  in  the Control table	shown	in	Figure	2.	The OC column displays the	overcurrent	status	bit	in	STATUS	(00h).	The Peak and Average columns track the maximum and average of the Polled value	for	each	channel.	These	values	can	be	reset by	clicking	on	the Reset Peak and Average button.	The ENA Pin and SHTDN Pin state  are  read  from  STATUS (00h).	 All	 values	 on	 the	 tab	 are	 read	 when	 the	 tab	 is selected  or  when  the Read button	 is	 clicked.	 The OC status	bits	are	cleared	after	every	read.	Check	the Auto Poll checkbox	to	continuously	read	every	30ms.

The Data Log Controls group	 box	 contains	 the	 graphrelated  controls. Poll  Count displays	 the	 number	 of reads	that	have	been	tracked	in	the	data	log.	When	the polled count reaches 100,000, the graph deletes the oldest polled value and adds a new polled value. The Peak and Average values	are	still	based	on	all	the	poll	count values,	 but	 the	 graph	 only	 displays	 the	 latest	 100,000 polled  values.  To  reset  the Poll  Count , Peak ,  and Average values, click on the Data Log Reset button.	To turn off data logging during polling, check the Data Log Off checkbox.	To	save	all	the	data	graphed	to	a	CSV	file, click on the Save Data Log button.

## Control/Registers Tab

The Control/Registers tab	 sheet	(Figure	2)	displays	all the  SMBus  commands  and  their  current  values.  In  the Control group	 box	 table,	 the RSENSE (mΩ) column  is the	 value	 of	 the	 resistor	 (R3X-R6X)	 between	 IN+	 and IN-	 signals.	 The Over-Current  (A) column  displays  the overcurrent  threshold  (08h  to  0Bh)  converted  to  amps using the RSENSE value. The ALERT Signal Enabled checkbox	and	the ADC Averaging drop-down	list	read/ write	 to	 bits	 in	 Control	 (01h).	 The Over-Current  Delay and Shutdown Delay edit	 boxes	 set	 the	 delays	 stored in registers 02h and 03h, respectively. The Reset checkboxes	set	the	reset	bit	in	the	Overcurrent	Delay	(02h)	or Shutdown	Delay	(03h)	register.

<!-- image -->

<!-- image -->

Figure 1. MAX34409 EV Kit GUI (Monitor/Graph Tab)

<!-- image -->

Figure 2. MAX34409 Control/Registers Tab

<!-- image -->

## Detailed Description of Hardware

## Monitor Current of Load

To monitor the current of a load, connect one of the screw terminal	 current-monitoring	 inputs	 (IN1-IN4)	 in	 series with the load, such that the current flows from the positive terminal	 to	 the	 negative	 terminal	 (Figure	 3).	 The	 maxi -mum	voltage	drop	from	INX+	to	INX-	should	not	exceed 12.25mV.	The	sense	resistor	(R3X-R6X)	may	need	to	be adjusted	depending	on	the	current	being	monitored.

## User-Supplied I 2 C interface

To communicate with the device using a usersupplied I 2 C interface, first remove all the J23 jumpers to disconnect the USB I 2 C dongle. If the dongle is no longer desired,	it	can	be	separated	from	the	EV	kit	by	snapping the	PCB	at	the	scored	line.	Connect	J1	signals	SDA	and SCL	to	the	off-board	I 2 C interface and connect power to the	3.3V	and	GND	signals.

## Troubleshooting

Evaluates: MAX34409

Figure 3. MAX34409 Monitor Load Current

<!-- image -->

## Table 1. Description of Switches (S1)

All efforts were made to ensure that each EV kit works on the	first	try,	right	out-of-the-box.	In	the	rare	occasion	that a	problem	is	suspected,	See	Table	3	to	help	troubleshoot the issue.

| SWITCH   | POSITION   | DESCRIPTION             |
|----------|------------|-------------------------|
| S1       | High       | ENA: Enables shutdown.  |
| S1       | Low        | ENA: Disables shutdown. |

## Table 2. Description of LEDs (D1, D2, D20, D21)

| LED         | COLOR   | DESCRIPTION                                                                                                                 |
|-------------|---------|-----------------------------------------------------------------------------------------------------------------------------|
| D1          | Red     | ALERT: An overcurrent threshold was exceeded for longer than the overcurrent delay.                                         |
| D2          | Red     | SHTDN: An overcurrent threshold was exceeded for longer than the shutdown delay.                                            |
| D20 (POWER) | Red     | USB Power Fault: A fault occurred due to overvoltage limit, current limit, or thermal limit.                                |
| D20 (POWER) | Green   | USB Power: USB power supply is on.                                                                                          |
| D21 (COM)   | Red     | Communication: After the software has initialized the hardware, the LED flashes red when a command from the PC is received. |
| D21 (COM)   | Green   | Initialized: Hardware has been initialized by software.                                                                     |

## Table 3. Troubleshooting

| SYMPTOM                                                            | CHECK                                                        | SOLUTION                                                                                                                                                                                                                                                                   |
|--------------------------------------------------------------------|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GUI indicates: Hardware not found                                  | Is the LED labeled D20 red?                                  | If yes, then the electronic fuse is in a fault state. Inspect for electrical shorts on the PCB and make sure that the PCB is not sitting on a conductive surface.                                                                                                          |
| GUI indicates: Hardware not found                                  | Does the LED labeled D21 turn green when the GUI is running? | If not, then exit the GUI and try running it again. If D21 still does not turn green, then exit the GUI and try connecting the USB cable to a different USB port on the PC and wait for a Windows message indicating that the hardware is ready to use. Run the GUI again. |
| GUI indicates: Hardware not found                                  | Are any of the LEDs illuminated?                             | If not, then the PCB may not be getting power from the USB. Try a different USB cable or a different USB port.                                                                                                                                                             |
| GUI indicates Read Failed! and all slave addresses are being found | J23                                                          | Make sure all four jumpers on J23 are populated.                                                                                                                                                                                                                           |

Evaluates: MAX34409

Figure 4a. MAX34409 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

Evaluates: MAX34409

Figure 4b. MAX34409 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

Figure 5. MAX34409 EV Kit PCB Layout-Top

<!-- image -->

Figure 6. MAX34409 EV Kit PCB Layout-Bottom

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX34409EVKIT# | EV Kit |

# Denotes an RoHS-compliant device that may include lead(Pb), which is exempt under the RoHS requirements.

Evaluates: MAX34409

## MAX34409 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

│

Evaluates: MAX34409