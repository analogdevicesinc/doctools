<!-- lastmod 2022-08-03 -->
Evaluates: MAX5216

## General Description

The  MAX5216DACLite  evaluation  kit  (EV  kit)  enables evaluation  of  the  MAX5216  single-channel,  low-power, buffered-output, 3-wire SPI interface, 16-bit DAC. The EV kit  also  includes  Windows  XP M -,  Windows  Vista M -,  and Windows M 7-compatible  software  that  provide  a  simple graphical user interface (GUI) for exercising the features of the IC.

The EV kit enables a quick evaluation of the device, with a fixed supply voltage of 3.3V. The EV kit allows for the generation  of  selectable  waveforms  to  display  DAC AC signal-generation capability.

The EV kit can be used as a system hardware debugging tool, or as a signal generator demonstration kit.

## Component List

| DESIGNATION       |   QTY | DESCRIPTION                                                             |
|-------------------|-------|-------------------------------------------------------------------------|
| C1, C2, C5-C7, C9 |     6 | 1µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K          |
| C3                |     1 | 0.01µF ±10%, 50V X7R ceramic capacitor (0603) TDK CGA3E2X7R1H103K       |
| C4, C8, C12-C14   |     4 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104KA01J |
| C10, C11          |     2 | 18pF ±5%, 50V C0G ceramic capacitors (0603) TDK C1608C0GH1180JT         |
| FB1               |     1 | Ferrite bead (0805) TDK MMZ20112Y601BT                                  |

Windows XP, Windows Vista, and Windows are registered trademarks and registered service marks of Microsoft Corporation.

## MAX5216DACLite Evaluation Kit

## Features

- USB	Powered,	No	Additional	Supply	Needed* (Cable	Not	Included)
- 3.3V	Fixed	VDD	from	On-Board	LDO	(MAX8510)
- 3.000V	On-Board	Precise	Voltage	Reference (MAX6133)
- Direct	USB	Communication	through	the	MAXQ622 Microcontroller
- Windows	XP-,	Windows	Vista-,	and	Windows	7 (32-Bit)-Compatible	Software
- SPI	Interface	Terminals
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

* Since 16 bits is 65,535 levels, the LSB is 45.8μV. Depending on how clean the computer's USB power is, it may be necessary to provide clean analog power for the best accuracy.

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| J1            |     1 | Mini-USB type-B receptacle Mill-Max 897-43-005-00-100001 |
| J2            |     0 | Not installed, 10-pin (5 x 2) header, 0.1in              |
| J3            |     0 | Not installed, 1-pin header, 0.1in                       |
| J4            |     0 | Not installed, 1-pin header                              |
| J5, J7, J8    |     4 | Turret terminal pins Mill-Max 2108-2-00-44-00-00-07-0    |
| J6            |     0 | Not installed, 4-pin header                              |
| J9            |     0 | Not installed, RF-coax SMA connector Molex 733910060     |

<!-- image -->

Evaluates: MAX5216

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| R1, R2, R10   |     3 | 27Ω ±1% resistors (0603) YAGEO RC0603FR-0727RL                               |
| R3            |     1 | 1kΩ ±1% resistor (0603) Panasonic ERJ-3EKF1001V                              |
| R4-R9         |     6 | 0Ω ±1% resistors (0603) YAGEO RC0603FR-070RL                                 |
| U1            |     1 | 16-bit VOUT DAC (8 µMAX ® ) Maxim MAX5216GUA+                                |
| U2            |     1 | 16-bit microcontroller with USB 2.0 interface (64 LQFP) Maxim MAXQ622G-0000+ |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Abracon Corporation                    | 945-546-8000 | www.abracon.com             |
| Mill-Max Mfg. Corp.                    | 516-922-6000 | www.mill-max.com            |
| Molex                                  | 800-768-6539 | www.molex.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| YAGEO Corporation                      | -            | www.yageo.com               |

Note:

Indicate that you are using the MAX5216 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX5216DACLite	EV	kit
- The	 EV	 kit	 board	 is	 a	 plug-n-play	 device	 that	 connects	to	the	PC	through	a	USB-A	to	Mini-B	cable.	The cable is not included, but is widely available from local stores.
- The	EV	kit	is	preloaded	with	the	default	firmware	that communicates with the MAX5216DACLite evaluation software.  Software  can  be  installed  and  run  on  any Windows-based system.
- Digital	multimeter	(DMM)

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Procedure

The	EV	kit	is	fully	assembled	and	tested.	Follow	the	steps below to verify board operation:

- 1)  Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, 5216DACLiteRxx-LV.ZIP.	 Unzip	 the	 file	 and	 run	 the setup.exe.	Follow	the	instructions	to	install	the	evaluation software on your PC. The program files are copied and icons are created in the Windows Start | Programs menu. Connect the MAX5216DACLite to the PC though a	USB	cable.	No	additional	driver	is	needed;	Windows recognizes	 the	 new	 device	 as	 a	 human	 interface device	 (HID)	 and	 automatically	 finds	 and	 installs	 the appropriate	 driver	 for	 it.	 For	 more	 information,	 check the  device  properties  in: Device  Manager\Human Interface  Control\USB  Input  Device\Properties  → USB\VID\_0B6A&amp;PID\_1234. See	Figure	1.
- 2)  Run	the	MAX5216DACLite.exe	program.	The	application's	GUI	appears,	as	shown	in	Figure	2.

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| U3            |     1 | 3.000V, 3ppm/°C, low-power voltage reference (8 µMAX) Maxim MAX6133A30+ |
| U4            |     1 | 3.3V ultra-low noise LDO (5 SC70) Maxim MAX8510EXK33+                   |
| Y1            |     1 | 12MHz crystal oscillator (HC49US) Abracon Crystals ABLS-12.000MH-B4-T   |
| -             |     1 | PCB: MAX5216DACLITE# Rev. A                                             |

Figure 1. USB Input Device Properties

<!-- image -->

Figure 2. MAX5216DACLite EV Kit (Single Operation Tab)

<!-- image -->

## Detailed Description of Software

## Single Operation Tab

The Single Operation tab	 sheet	 (Figure	 2)	 is	 active	 by default.  The  application  checks  all  the  boards  with  the USB	VID/PID	0x0B6A/0x1234	that	connected	to	the	PC and indicates them on the right side of the GUI. Up to 16 boards can be connected to the system. Each board has its own unique board index. Select the appropriate board index in the Board Index spin	box	(Figure	3).

Any  possible  operation  can  be  evaluated  on  this  tab sheet.	For	example,	move	the	track	bar	slider	to	set	the DAC output voltage. The DAC Control spin box reflects the  slider  position  with  a  decimal  number.  Connect  the DMM	to	the	J5	header	(Figure	8)	to	measure	the	DAC output voltage.

The DAC output can also be set by typing in a decimal, hexadecimal,  or  an  octal  or  binary  value  in  the DAC Control spin	box	(Figure	4).	The	IC	accepts	codes	from 0	to	65535	(2 16 -1)	decimal	or	from	0	to	FFFF	hex.	The notation is displayed on the left side of the box.

The Rising  Ramp , Falling  Ramp , Triangle , Sine , Square wave , or Staircase tab sheets give the DAC the ability to generate different waveforms with the selected parameters  (see  the  sine-wave  and  staircase  plots  in Figures	5	and	6).	There	is	a	possible	delay	to	start	a	new waveform until the previous one finishes a full cycle when switching between tabs. It is recommended to stop running the application, select the next tab, and run it again.

Figure 3. Select the Board Index in the System with the Multiple Boards

<!-- image -->

Figure 4. Notation Selection Dialog Box

<!-- image -->

Figure 5. Sine-Wave Generator

<!-- image -->

Figure 6. Staircase Plot

<!-- image -->

## Detailed Description of Hardware

The  MAX5216DACLite  EV  kit  board  is  loaded  with  the MAX5216,  Maxim's  best-in-class,  lowest  power,  16-bit DAC.	The	on-board	MAX6133A30	provides	low	noise,	low temperature	drift	of	3ppm/°C,	and	3.000V	precise	voltage reference  for  the  DAC.  The  MAX5216  (U1)  receives  a command	from	the	16-bit	MAXQ622	microcontroller	(U2) through a 3-wire high-speed SPI bus. The U1 device can run	 at	 50MHz	 clock	 frequency,	 but	 the	 SPI	 bus	 speed is	 limited	 to	 6MHz	 on	 this	 board	 by	 the	 microcontroller. The	U1-U3	devices	are	powered	by	the	MAX8510	+3.3V LDO,	low-noise	voltage	regulator	(U4),	which	gets	power from	the	USB	port.	The	U1	device	can	be	evaluated	at the fixed V DD  level of 3.3V only. The above limitations are reflected by the suffix 'Lite' in the name of the board. The EV	kit	block	diagram	is	shown	in	Figure	7.

Figure 7. MAX5216DACLite EV Kit Block Diagram

<!-- image -->

## Evaluates: MAX5216

The evaluation software allows full access to the DAC's functions	 and	 features	 through	 the	 full-speed	 USB	 2.0 bus  and  the  U2  microcontroller.  The  microcontroller  is preloaded with firmware that communicates with the GUI.

## MAX5216Lite Extended Features

The U1 device can be evaluated over the full voltage and SPI bus speed range with external power supply and SPI host controller. To do so, the following board modifications must be made:

- 1)  Totally disconnect the U1 and U3 devices from the rest of	the	board	by	removing	resistors	R4-R9	(see	Figure	10 for component placement).
- 2)  Connect	 the	 SPI	 lines	 (CSb,	 SCLK,	 DIN,	 and	 CLRb pins)	from	J6	to	the	external	host	controller.	Make	sure that the input voltage (V IH ) is within the spec limit and matches the AVDD level.
- 3)  Apply	external	power	from	2.7V	to	5.5V	between	J3.2 (AVDD)	and	J8	(GND).
- 4)  Send command to the DAC.

## MAX5216DACLite Evaluation Kit

The  microcontroller  on  the  EV  kit  board  can  also  be programmed	with	custom	firmware	through	the	J2	JTAG connector (see Table 1).

## Table 1. JTAG Connector Description (J2)

|   PIN | LABEL   | FUNCTION                        |
|-------|---------|---------------------------------|
|     1 | TCK     | Test clock                      |
|     2 | GND     | Digital ground                  |
|     3 | TDO     | Test data output                |
|     4 | N.C.    | No connect                      |
|     5 | TMS     | Test mode select                |
|     6 | RST     | Reset                           |
|     7 | N.C.    | No connect                      |
|     8 | +5V     | +5V from the JTAG debug adapter |
|     9 | TDI     | Test data input                 |
|    10 | GND     | Digital ground                  |

Figure 8. MAX5216DACLite EV Kit Schematic

<!-- image -->

Figure 9. MAX5216DACLite EV Kit Component Placement Guide-Top

<!-- image -->

Figure 10. MAX5216DACLite EV Kit Component Placement Guide-Bottom

<!-- image -->

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX5216DACLITE# | EV Kit |

# Denotes RoHS compliant.

## Evaluates: MAX5216

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/12           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.