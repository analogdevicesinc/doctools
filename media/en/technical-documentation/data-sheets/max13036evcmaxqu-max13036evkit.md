<!-- lastmod 2022-08-04 -->
## MAX13036 Evaluation Kit/

## Evaluation System

## General Description

The MAX13036 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the  capabilities  of  the  MAX13036  contact  monitor.  The MAX13036 EV kit also includes  Windows ®   98SE/2000/ XP-compatible  software  that  provides  a  simple  graphical user interface (GUI) for exercising the features of the MAX13036.

The MAX13036 evaluation system (EV system) includes a  MAX13036  EV  kit  and  a  Maxim  CMAXQUSB  serialinterface board.

The CMAXQUSB board connects to a PC's USB port and allows the transfer of SPI commands to the MAX13036 EV kit.

## Features

- 7V to 27V Operating Voltage Range
- Proven PCB Layout
- Windows 98SE/2000/XP-Compatible Evaluation Software
- Fully Assembled and Tested
- EV System: USB-PC Connection

## MAX13036 EV Kit Files

| FILE                    | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| MAX13036.EXE            | Application program                        |
| FTD2XX.INF              | USB device driver file                     |
| UNINST.INI              | Uninstalls the EV kit software             |
| TROUBLESHOOTING_USB.PDF | USB driver installation help file          |

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

Evaluate: MAX13036

## Quick Start

## Recommended Equipment

- One	12V	DC	power	supply	for	VBAT
-  MAX13036	EV	system MAX13036 EV kit Maxim CMAXQUSB interface board (USB cable included)
- A	 user-supplied	 Windows	 98SE/2000/XP	 PC	 with	 a spare USB port

Note: In  the  following  sections,  software-related items are identified by bolding. T ext in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows 98SE/2000/XP operating system.

## Procedure

The  MAX13036  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps  below  to  verify  board  operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software, 13036Rxx.ZIP.
- 2) Install  the  MAX13036  evaluation  software  on  your computer  by  running  the  INSTALL.EXE  program. The program files are copied and icons are created in the Windows Start menu.
- 3) On the CMAXQUSB command module, ensure that the shunt of JU1 is in the 5V position.

## Ordering Information

| PART               | TYPE      | INTERFACE                   |
|--------------------|-----------|-----------------------------|
| MAX13036EVKIT +    | EV kit    | User-supplied SPI interface |
| MAX13036EVCMAXQU + | EV system | CMAXQUSB interface board    |

Note: The MAX13036 EV kit software is designed for use with the  complete  EV  system.  The  EV  system  includes  both  the Maxim CMAXQUSB board and the EV kit. If the Windows software will not be used, the EV kit board can be purchased without the Maxim CMAXQUSB board.

<!-- image -->

## MAX13036 Evaluation Kit/ Evaluation System

- 4) For the MAX13036 EV kit, make sure the shunts of all jumpers are in the following default positions:

JU1: (Open)

JU2: (1-2)

- 5) Carefully connect the boards by aligning the MAX13036 EV kit's 40-pin connector with the 40-pin connector  of  the  CMAXQUSB  board.  Gently  press them  together.  The  two  boards  should  be  flush against each other.
- 6) Connect	and	turn	on	the	12V	DC	power	supply.
- 7) Switch S9 to Power On position.
- 8) Connect the USB cable from the PC to the CMAXQUSB board.  If  the  CMAXQUSB  board  has  not  been previously  installed,  a Building  Driver  Database window  pops  up  in  addition  to  a New  Hardware Found message. If you do not see a window that is similar to the one described above after 30 seconds,

## Evaluate: MAX13036

remove  the  USB  cable  from  the  CMAXQUSB  and reconnect  it. Administrator  privileges  are  required  to install  the  USB device driver on Windows 2000 and XP.	 Refer	 to	 the	 TROUBLESHOOTING\_USB.PDF document included with the software if you have any problems during this step.

- 9) Follow  the  directions  of  the Add  New  Hardware Wizard to  install  the  USB  device  driver.  Choose the Search  for  the  best  driver  for  your  device option. Specify the location of the device driver to be C:\Program  Files\MAX13036 (default installation directory) using the Browse button.
- 10)  Start  the  MAX13036  EV  kit  software  by  opening its  icon  in  the Start menu.  The  GUI  main  window appears, as shown in Figure 1.
- 11) Change the position of switches S1-S8 on the EV kit board and observe the Switch Status change on the software GUI window.

Figure 1. MAX13036 Evaluation Software Main Window

<!-- image -->

│

## MAX13036 Evaluation Kit/ Evaluation System

## Detailed Description of Software

To  start  the  MAX13036  EV  kit  software,  double-click  the MAX13036 EV kit icon that is created during installation. The GUI main window appears, as shown in Figure 1.

There are five panels on the MAX13036 EV kit GUI software: IC  Current  Meter  (0-199μA),  Switch  Interrupt Enable, Key Scan Interval, Switch Configuration, and Switch Status .

There  are  three  buttons  on  the  EV  kit  GUI  software: Reconnect , Help , and Exit . However, the Reconnect button only appears in Demo Mode .

## IC Current Meter Panel

By pressing the Measure button on the IC Current Meter (0-199μA) panel shown in Figure 1, the operating current of the MAX13036 will be displayed. The measuring range of	this	meter	is	from	0	to	199μA.	The Measure button will be  grayed  out  (disabled)  if  the Apply  Wetting  Current checkbox on the Switch Configuration panel  has  been checked.

## Switch Interrupt Enable Panel

The Switch Interrupt Enable panel contains eight checkboxes ( S1-S8 ) that individually control the interrupt enable bit of each switch.

## Key Scan Interval Panel

The  pulldown  menu  on  the Key  Scan  Interval panel  is used  to  program  the  scanning-time  period.  Please  refer to the MAX13036 IC data sheet for a detailed description.

## Switch Configuration Panel

The Switch Configuration panel contains the Shutdown Mode checkbox, Apply  Wetting  Current , Pulsed ,  and Enable  Direct  Input checkboxes.  It  also  contains  radio buttons that control the polarity of S8, S7 and S6, S5 .

The Interrupt  Flag shows  the  current  status  of  the MAX13036 INT pin.  The Shutdown  Mode checkbox controls the MAX13036 SD pin. Apply Wetting Current , Pulsed , and Enable Direct Input checkboxes individually control the internal corresponding control bit.

## Reconnect, Help, and Exit Buttons

Press the Reconnect button to reestablish the connection between the EV kit GUI software and MAX13036 EV kit hardware. Note: This button only appears in Demo Mode .

Press the Help button to show the MAX13036 EV kit software version and Maxim's website information.

Press the Exit button to quit the MAX13036 EV kit GUI software.

Evaluate: MAX13036

## Detailed Description of Hardware

The  MAX13036  is  an  contact  monitor.  The  MAX13036 EV kit board provides a proven layout for evaluating the MAX13036.  The  EV  kit  comes  with  a  MAX13036ATI+ installed.

## Hysteresis Jumper (JU1)

The MAX13036 hysteresis function is controlled by jumper JU1, as shown in Table 1. Refer to the IC data sheet for a detailed description.

## Power Supplies

The MAX13036 EV kit can be powered from two 9V batteries connected to battery connectors BAT1 and BAT2, or  from  a  user-supplied  7V  to  27V  power  supply  connected to VBAT. There is an optional power-on indicator LED	(D3)	on	the	EV	kit	board.	Jumper	JU2,	as	shown	in Table 2, determines whether this indicator is enabled or disabled

## Toggle Switches

S1-S4  are  two-position  switches.  S5-S8  are  threeposition switches, with the OFF position in the center.

## Table 1. Hysteresis Jumper Configuration (JU1)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                          |
|----------|------------------|--------------------------------------|
| JU1      | 1-2              | Hysteresis set by resistor R2        |
| JU1      | Open*            | Hysteresis fixed at 0.16V x V BATREF |

* Default position.

## Table 2. Power-On Indicator D3 Configuration (JU2)

| JUMPER   | SHUNT POSITION   | DESCRIPTION   |
|----------|------------------|---------------|
| JU2      | 1-2*             | D3 enabled    |
| JU2      | Open             | D3 disabled   |

* Default position.

│

## MAX13036 Evaluation Kit/ Evaluation System

## MAX13036EV System Component Lists

| PART           |   QTY | DESCRIPTION            |
|----------------|-------|------------------------|
| MAX13036EVKIT+ |     1 | MAX13036 EV kit        |
| CMAXQUSB+      |     1 | Serial-interface board |

## MAX13036EV Kit

| DESIGNATION      |   QTY | DESCRIPTION                                                         |
|------------------|-------|---------------------------------------------------------------------|
| BAT1, BAT2       |     2 | Vertical 9V snap-on connectors                                      |
| C1-C6            |     6 | 0.01µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H103K   |
| C7               |     1 | 1000pF ±10%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H102K    |
| C8, C9, C10, C20 |     4 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K    |
| C11-C15          |     5 | 1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C105K      |
| C16              |     1 | 2.2µF ±10%, 16V X7R ceramic capacitor (0805) TDK C2012X7R1C225K     |
| C17, C18         |     2 | 47µF ±20%, 50V electrolytic capacitors (D8) Panasonic EEE-FK1H470XP |
| C19              |     0 | Not installed, capacitor (0603)                                     |
| C21-C28          |     0 | Not installed, capacitors (0603)                                    |
| D1, D2           |     2 | 100V, 200mA diode (SOD-123) Central CMHD4448                        |
| D3               |     1 | Green LED (0603)                                                    |
| F1, F2           |     2 | 60V, 0.14A Raychem polyswitches                                     |
| J1               |     1 | 2 x 20 right-angle socket                                           |
| J2               |     0 | Not installed, 5-pin header                                         |
| J3               |     0 | Not installed, 6-pin header                                         |
| JU1, JU2         |     2 | 2-pin single-row headers                                            |
| JU3              |     1 | Not installed                                                       |

Evaluate: MAX13036

| DESIGNATION   |   QTY | DESCRIPTION                                     |
|---------------|-------|-------------------------------------------------|
| N1            |     1 | N-channel MOSFET (SOT-23) Fairchild FDN359AN_NL |
| R1            |     1 | 1kΩ ±1% resistor (through hole), lead free      |
| R2            |     1 | 91kΩ ±5% resistor (0603), lead free             |
| R3            |     1 | 200kΩ ±5% resistor (0603), lead free            |
| R4            |     1 | 953Ω ±1% resistor (0603), lead free             |
| R5            |     1 | 1kΩ ±1% resistor (0603), lead free              |
| R6            |     1 | 24kΩ ±1% resistor (0603), lead free             |
| R7            |     1 | 100kΩ ±1% resistor (0603), lead free            |
| R8, R9        |     2 | 1MΩ ±1% resistors (0603), lead free             |
| R10           |     1 | 2kΩ ±5% resistor (0603), lead free              |
| S1-S4, S9     |     5 | SPDT toggle switches (ON-None-ON)               |
| S5-S8         |     4 | SPDT toggle switches (ON-OFF-ON)                |
| U1            |     1 | MAX13036ATI+ (28-pin TQFN-EP, 5mmx5mmx0.8mm)    |
| U2            |     1 | MAX4238ASA+ (8-pin SO)                          |
| U3            |     1 | MAX6143AASA50+ (8-pin SO)                       |
| U4            |     1 | MAX1162AEUB+ (10-pin µMAX ® )                   |
| U5            |     1 | MAX5084ATT+ (6-pin TDFN)                        |
| U6            |     1 | Dual 2-inputAND gate                            |
| -             |     1 | PCB: MAX13036 EVALUATION KIT+                   |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | www.centralsemi.com   |
| Panasonic Corp.       | 800-344-2112 | www.panasonic.com     |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com |

Note: Indicate  that  you  are  using  the  MAX13036  when contacting these component suppliers.

μMAX is a registered trademark of Maxim Integrated Products, Inc.

│

Evaluate: MAX13036

Figure 2. MAX13036 EV Kit Schematic

<!-- image -->

## MAX13036 Evaluation Kit/ Evaluation System

Figure 3. MAX13036 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluate: MAX13036

Figure 4. MAX13036 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX13036 EV Kit PCB Layout-Layer 2 (GND)

<!-- image -->

## MAX13036 Evaluation Kit/ Evaluation System

Figure 6. MAX13036 EV Kit PCB Layout-Layer 3 (Power)

<!-- image -->

Evaluate: MAX13036

Figure 7. MAX13036 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX13036 Evaluation Kit/ Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                              | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/07            | Initial release                                                                                                                                                                          | -               |
|                 1 | 5/15            | Deleted automotive references in General Description section; moved Component List and Component Suppliers tables to page 4; added Revision History table; rebranded with new Maxim logo | 1-8             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.

│

Evaluate: MAX13036