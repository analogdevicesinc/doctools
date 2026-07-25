<!-- lastmod 2022-08-02 -->
## DS3900P2

## General Description

The DS3900P2 programmer provides bidirectional communication  with  I 2 C-compatible  devices  using  a  PC's USB port. The DS3900P2 is a small form-factor module that  requires  appropriate  headers  to  pass  communication  signals  to  the  device  under  test.  The  DS3900P2  is intended  to  interface  with  approved  Human  Interface Device (HID)-compliant PC software designed by Maxim Integrated. It is intended for evaluation purposes only.

## EV Kit Contents

- Assembled DS3900P2 Circuit Board
- Micro-USB Cable
- Ribbon Cable

Ordering Information appears at end of data sheet.

## DS3900P2 USB I 2 C Programmer

<!-- image -->

Windows, Windows Vista, and Windows XP are registered trademarks of Microsoft Corp.

## USB HID Communications Module for I 2 C Programming

## Features

- Communicates from PCs to ICs and Select Maxim Integrated EV Kits Through a USB Port Using the HID Class
- Fast Communication to I 2 C-Compatible Devices
- Built-In Pullup Resistors for SDA and SCL Minimize Required External Hardware
- Connection to Standard Prototyping Boards and EV Kits Possible Using Header Connectors
- Fully USB Powered
- Can Provide a 3.3V, 250mA Power Rail
- Fully Assembled and Tested Proven PCB Layout
- USB HID Interface for Windows XP®-, Windows Vista®-, and Windows® 7-Compatible Software
- RoHS Compliant

<!-- image -->

## DS3900P2

## Quick Start

## Required Equipment

- DS3900P2	EV	kit	hardware	(included)
- Micro-USB	cable	(included)
- User-supplied	PC	with	Windows	XP,	Windows	Vista,	or Windows 7 OS with USB Port
- Approved	 previously	 designed	 HID-compliant	 GUI designed by Maxim Integrated
- Customer	 PCB	 with	 I 2 C  connection  or  a  previously purchased	compatible	Maxim	Integrated	EV	kit

## Setup Procedure

The  DS3900P2  communicates  with  ICs  using  a  PC's USB port.  The  microprocessor  on  the  DS3900P2  communicates  to  the  PC  using  its  full-speed  compatible USB  serial  interface  engine.  The  USB  interface  of  the DS3900P2  hardware  is  configured  as  an  HID  device and, therefore, does not require a unique/custom device driver. Once properly connected to a PC through a USB cable, Windows should automatically begin installing the necessary  device  driver.  Once  the  driver  installation  is complete, a Windows message appears near the System Icon menu indicating that the hardware is ready to use. After  the  hardware  is  ready  to  use,  open  an  approved HID-compliant	 GUI	 designed	 by	 Maxim	 Integrated.	 The GUI	then	sends	commands	of	various	lengths	over	the USB connection.  This  provides  instruction  and  data  for the  DS3900P2 to communicate with the I 2 C-compatible devices.  The  DS3900P2  has  a  3.3V  LDO  that  supplies power to the microcontroller and optionally to a connected EV	kit	or	PCB.	The	3.3V	rail	supplies	up	to	250mA.

## USB HID Communications Module for I 2 C Programming

## Detailed Description of Hardware

## Designing Hardware to Use the Built-In Support for I 2 C Devices

The DS3900P2 has custom firmware that uses either the master synchronous serial port (MSSP) of the microcontroller configured in I 2 C mode or several bit-banging routines	with	support	for	clock	stretching.	These	two	modes	of operation are configured through the evaluation software. The  DS3900P2  has  built-in  pullup  resistors  (R11,  R12) that	connect	10kΩ	resistors	to	both	I 2 C signals.

Upon initial power-up, the DS3900P2 configures itself in I 2 C	 mode	 using	 the	 MSSP	 block	 of	 the	 microcontroller with	a	SCL	clock	speed	of	400kHz.	Note	that	most	evalu -ation  software  configures  the  DS3900P2  to  the  desired communication  protocol  upon  initial  software  execution and during all USB reconnects of the DS3900P2.

For designs that use the DS3900P2 to communicate to I 2 C devices, the following items must be accounted for in the hardware design:

- Place	an	appropriate	connection	on	the	circuit	board.
- Connect	GND,	SCL,	and	SDA.	3.3V	can	also	be	con -nected  if  the  DS3900P2  is  providing  power  to  the circuit board.
- Drive	the	DS3900P2	with	evaluation	software	provided by Maxim Integrated.

Note: The  DS3900P2  ribbon  cable  mates  with  standard 2.54mm (0.100in) 2 x 4 male header connectors. Some Maxim Integrated EV kits provide a 1 x 4 male header for this connection.

## Table 1. Recommended Operating Conditions

(Typical values are at V CC  = 3.3V, T A =	+25ºC,	unless	otherwise	noted.)	(Notes	1,	2)

| PARAMETER            | SYMBOL   | CONDITIONS               | MIN             |   TYP | MAX      | UNITS   |
|----------------------|----------|--------------------------|-----------------|-------|----------|---------|
| Operating Voltage    | V CC     |                          |                 |   3.3 |          | V       |
| Supply Current       | I CC     | Current provided by 3.3V |                 |       | 250      | mA      |
| Input Low Voltage    | V IL     |                          |                 |       | 0.15V CC | V       |
| Input High Voltage   | V IH     |                          | 0.25V CC + 0.8V |       |          | V       |
| Output Low Voltage   | V OL     | I OL = 8.5mA             |                 |       | +0.6     | V       |
| Ambient Temperature  | T A      |                          | -40             |       | +85      | ºC      |
| I2 C Clock Frequency |          |                          | 100             |       | 400      | kHz     |

Note 1: All voltages listed are with respect to ground.

Note 2: Devices are only functionally tested; parameters listed are not guaranteed.

## DS3900P2

## Table 2. Pin Description

Figure 1. Recommended PCB Connection for DS3900P2

| PIN   | FUNCTION                                                             |
|-------|----------------------------------------------------------------------|
| 3.3V  | Power supply that can be used to power EV kit or customer PCB.       |
| SDA   | Data Input/Output for I2C-compatible communication.                  |
| GND   | Ground Connection. This must be connected to EV lit or customer PCB. |
| SCL   | Clock Output for I 2C-compatible communication.                      |

<!-- image -->

## USB HID Communications Module for I 2 C Programming

│

## DS3900P2

Table 3. Description of LEDs

| LED        | COLOR                   | DESCRIPTION                                                                                                                 |
|------------|-------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| D1 (POWER) | Green                   | USB Power Fault. The USB power is connected.                                                                                |
| D1 (POWER) | Red                     | USB Power Fault. A fault occurred due to overvoltage limit, current limit, or thermal limit.                                |
| D2 (COM)   | Green                   | Waiting. Software has initialized the hardware. Waiting for user data to be sent from the GUI.                              |
| D2 (COM)   | Red                     | Communication. After the software has initialized the hardware, the LED flashes red when a command from the PC is received. |
| D2 (COM)   | Flashing Red and Orange | Waiting. Hardware is powered on and waiting for the software to be opened                                                   |

Table 4. Troubleshooting the DS3900P2

| SYMPTOM                           | CHECK                                                          | SOLUTION                                                                                                                                                                                                                                                                                                                        |
|-----------------------------------|----------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Windows does not detect hardware. | Is the LED labeled D1 on the DS3900P2 red? USB cable and port? | If yes, then the electronic fuse is in a fault state. Inspect for electrical shorts on the PCB and ensure that the PCB is not sitting on a conductive surface. Try connecting the USB cable to a different USB port on the PC and wait for a Windows message that indicates that the hardware is ready to use. If the device is |
| Windows does not detect hardware. | Are any of the LEDs illuminated?                               | If not, then the PCB may not be getting power. Ensure bias is applied to VCC and all three GND terminals are connected to system ground. Verify the USB cable is connected to a PC.                                                                                                                                             |

## Troubleshooting

All	efforts	were	made	to	ensure	that	the	DS3900P2	works on the first try, right out of the box. In the rare occasion that	a	problem	is	suspected,	refer	to	Table	4	to	trouble -shoot the issue.

## DS3900P2 Revisions

Revisions  yielding  significant  changes  and/or  improvements	 are	 tracked	 in	 firmware	 and	 are	 displayed	 in most evaluation software provided by Maxim Integrated. Revision	 is	 broken	 up	 into	 a	 major	 and	 minor	 revision. For example, if the DS3900P2's revision is 3.2, it returns a	major	revision	of	3,	a	minor	revision	of	2.	Knowing	the revision allows the software to utilize new functions that are not available in previous versions of the DS3900P2's firmware  and  to  avoid  using  commands  that  are  not present  in  prior  versions.  Although  there  are  no  plans to  change  the  firmware  at  this  time,  Maxim  Integrated reserves  the  right  to  change  the  firmware  at  any  time without notice.

## Intended Use

The  DS3900P2  module  is  intended  only  to  be  used  to evaluate  Maxim  Integrated  circuits.  All  hardware,  firmware, and any relative software is provided 'as is', without warranty	 of	 any	 kind,	 express	 or	 implied,	 including,	 but not  limited  to,  the  warranties  of  merchantability,  fitness for a particular purpose, and noninfringement. In no event shall Maxim Integrated be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of, or in connection with the hardware, firmware, and any relative software or the use or other dealings in the hardware, firmware, and any relative software.

│

## USB HID Communications Module for I 2 C Programming

Figure 2. DS3900P2 Schematic

<!-- image -->

Figure 3. DS3900P2 PCB Layout-Top

<!-- image -->

Figure 4. DS3900P2 PCB Layout-Bottom

<!-- image -->

## DS3900P2

## Component List

| COMMENT    | DESIGNATOR   |   QTY | DESCRIPTION                                                        |
|------------|--------------|-------|--------------------------------------------------------------------|
| 10µF       | C1, C2, C3   |     3 | 10µF ceramic capacitors (0805) Taiyo Yuden EMK212ABJ106KD-T        |
| 0.01µF     | C4, C9       |     2 | 0.01µF ceramic capacitors (0805) Murata GRM21BR72A103K             |
| 0.22µF     | C12          |     1 | 0.22µF ceramic capacitors (0805) TDK Corp. C2012X7R1H224K          |
| 1.0µF      | C13          |     1 | 1.0µF ceramic capacitors (0805) TDK Corp. C2012X7R1H105K/SOFT      |
| 0.1µF      | C14          |     1 | 0.1µF ceramic capacitors (0805) TDK Corp. CGA4J2X7R2A104K          |
| LED_DUAL   | D1, D2       |     2 | Red/green dual LEDs Kingbright APHBM2012SURKCGKC                   |
| SCHOTTKEY  | D4           |     1 | Schottky diode Panasonic - SSGDB2W31900L                           |
| MICRO USB  | J1           |     1 | 5-pin Micro-USB Molex 105017-0001                                  |
| HDR_8PIN   | J3           |     1 | 8-pin header 3M 961208-6404-AR                                     |
| 560        | R3, R5       |     2 | 560Ω ±1% resistors (0805) Vishay/Dale CRCW0805560RFKEA             |
| 100k       | R4           |     1 | 100kΩ ±1% resistors (0805) Vishay/Dale CRCW0805100KFKEA            |
| 45.3k      | R6           |     1 | 45.3kΩ ±1% resistors (0805) Vishay/Dale CRCW080545K3FKEA           |
| 10k        | R7, R11, R12 |     3 | 10kΩ ±1% resistors (0805) Vishay/Dale CRCW080510K0FKEA             |
| 330        | R8, R9       |     2 | 330Ω ±1% resistors (0805) Vishay/Dale CRCW0805330RFKEA             |
| 2.2k       | R10          |     1 | 2.2kΩ ±1% resistor (0805) Vishay/Dale CRCW08052K20FKEA             |
| 4.7k       | R13          |     1 | 4.7kΩ ±1% resistor (0805) Vishay/Dale CRCW08054K70FKEA             |
| DS3900_PIC | U1           |     1 | Microprocessor Microchip PIC18LF2550-I/SO                          |
| MAX4995A   | U2           |     1 | Current-limit switch (6 SOT) Maxim Integrated MAX4995AAUT+         |
| MAX8902B   | U3           |     1 | Low-noise, LDO regulator (8 TDFN-EP) Maxim Integrated MAX8902BATA+ |
| SR05       | U4           |     1 | TVS diode array Littelfuse SR05-02CTG                              |
| 48MHz      | X1           |     1 | 4-pin CMOS oscillator AVX KC3225A48.0000C30E00                     |
| -          | -            |     1 | PCB: DS3900P2 USB I2C PROGRAMMER                                   |

## USB HID Communications Module for I 2 C Programming

## DS3900P2

## Ordering Information

| PART           | TYPE                         |
|----------------|------------------------------|
| DS3900P2EVKIT# | EV Kit Communications Module |

# Denotes a RoHS-compliant device that may include lead that is exempt under the RoHS requirements.

## DS3900P2

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

│

## USB HID Communications Module for I 2 C Programming