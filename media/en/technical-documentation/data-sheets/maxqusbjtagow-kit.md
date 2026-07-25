<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

## General Description

The  MAXQ M USB-to-JTAG/1-Wire M adapter is a convenient  way  to  interface  either  the  JTAG  or  1-Wire port on MAXQ microcontrollers to a PC. The EV kit can be used with compatible software tools running on a host PC to  load  and  debug  code  on  programmable  MAXQ microcontrollers.  The  EV  kit  contains  the  MAXQ  USBto-JTAG/1-Wire adapter, an interface cable, and a USB Mini-B cable.

## EV Kit Contents

- S MAXQ USB-to-JTAG/1-Wire Adapter (inside enclosure)
- S Keyed 10-Pin Interface Ribbon Cable
- S USB Mini-B Cable

Ordering Information appears at end of data sheet.

| DESIGNATION                       |   QTY | DESCRIPTION                                                 |
|-----------------------------------|-------|-------------------------------------------------------------|
| C1, C3, C6, C8-C11, C15, C16, C18 |    10 | 0.1µF, 16V ceramic X7R capacitors (0603) ECJ-1VB1C104K      |
| C2, C4, C7, C14, C17              |     5 | 1.0µF, 16V ceramic X7R capacitors (0603) GCM188R71C105KA64D |
| C5                                |     1 | 10µF, 6.3V ceramic X7R capacitor (0805) JMK212B7106KG-T     |
| C12, C13                          |     2 | 18pF, 50V ceramic NP0 capacitors (0402) GRM1555C1H180JZ01D  |
| CN1                               |     1 | USB receptacle (Mini-B)                                     |
| DS1                               |     1 | 3mm yellow LED WP132XYD                                     |
| DS2                               |     1 | 3mm bi-color LED (red/green) 3BC-3-CA-F                     |
| F1                                |     1 | PTC resettable fuse MF-FSMF035                              |

MAXQ and 1-Wire are registered trademarks of Maxim Integrated Products, Inc.

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maximintegrated.com.

Features

- S Easily Load and Debug Code
- S Interface Provides In-Application Debugging Features
-  Step-by-Step Execution Tracing
-  Breakpointing by Code Address, Data Memory Address, or Register Access
-  Data Memory View and Edit
- S Supports Logic Levels from 1.1V to 3.6V
- S Supports JTAG and 1-Wire Protocols
- S Each Adapter Has Its Own Unique Serial ID, Allowing Multiple Adapters to be Connected Without COM Port Conflicts
- S Has In-Field Upgradable Capability if Firmware Needs to be Upgraded
- S Enclosure Protects from Shorts and ESD

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| FB1           |     1 | 2000 I ferrite bead HZ1206C202R-10                                           |
| P1            |     1 | 10-pin 0.1in pitch right-angle male shrouded box header SBH11-PBPC-D05-RA-BK |
| P2            |     1 | 10-position side male shrouded connector header SM10B-SRSS-TB(LF)(SN)        |
| Q1, Q2        |     2 | 20V, 2.4A p-channel MOSFETs (SSOT3) FDN304PCT-ND                             |
| Q3            |     1 | 25V, 220mA n-channel MOSFET (SOT23) FDV301NCT-ND                             |
| R1, R2, R13   |     3 | 0 I resistors ERJ-2GE0R00X                                                   |
| R3-R5, R9     |     4 | 47k I resistors CRCW060347K0FKEA                                             |
| R6, R14, R16  |     3 | 1k I resistors CRCW06031K00FKEA                                              |

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

## Component List (continued)

DESIGNATION

DESCRIPTION

U2, U3

U4

U5

Y1

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| R7, R8        |     2 | 150 I resistors CRCW0603150RFKEA                                 |
| R10, R15      |     2 | 200 I resistors CRCW0603200RFKEA                                 |
| R11, R12      |     2 | 10k I resistors CRCW060310K0FKEA                                 |
| SW1           |     1 | 3-pin SPST slide switch                                          |
| U1            |     1 | 500mA, 3.3V LDO linear regulator (8 µMAX ® ) Maxim MAX1806EUA33+ |

QTY

2

1

1

1

4-bit signal translators

FXL4TD245BQX

16-bit RISC microcontroller

with USB SIE (64 LQFP)

Maxim MAXQ622G-0000+

Dual high-speed differential

ESD-protection IC (6 SOT23)

Maxim MAX3207EAUT+

12MHz crystal

ABM3-12.000MHZ-D2Y-T

Figure 1. MAXQ USB-to-JTAG/1-Wire Adapter

<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

## Detailed Description

Note: In  the  following  sections,  software-related  items  are identified  by  bolding.  Text  in bold refers  to  items  directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

The  MAXQ  USB-to-JTAG/1-Wire  Adapter  is  designed to  operate  as  a  USB-to-JTAG  or  USB-to-1-Wire  adapter between  programming/debugging  tools  on  the  host  PC (such as MAX-IDE, MTK, or IAR Embedded Workbench M IDE)  and  a  programmable  MAXQ  microcontroller.  The MAXQ622 acts as a USB-to-UART converter and allows the host PC to communicate with the MAXQ622 over a virtual COM port.  The  MAXQ622  receives  commands  and  data from the PC and handles the task of either driving the four JTAG communication lines (TCK, TMS, TDO, and TDI) or driving the 1-Wire communication line ( RST ) that connect to another MAXQ microcontroller on a separate EV kit board.

The  adapter  has  two  connectors.  The  first  of  these  is  a standard  mini-B  USB  connector  that  is  used  to  connect the  adapter  to  a  USB  port  on  the  host  PC.  The  adapter is  powered  directly  over  the  USB  cable.  The  second connector is the standard 10-pin JTAG interface used by all MAXQ microcontroller EV kits, allowing the adapter to be connected to another MAXQ microcontroller using a 2x5-pin header and 10-pin ribbon cable.

The driver software can be downloaded at www. maximintegrated.com/evkit under  MAXQUSBJTAGOW EVKIT  Software.  Programming  and  debugging  tools  can be found at www.maximintegrated.com/products/ microcontrollers/development\_tools.cfm .

For  more  information  on  the  adapter,  refer  to  the MAXQ USB-to-JTAG/1-Wire Adapter: User's Guide .

Figure 2. MAXQ USB-to-JTAG/1-Wire Adapter Communications Interface

<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

## Installing the Drivers for Windows XP ®

- Download	the	required	driver	software.	Unzip	the	driver	package	( maxusbjtagow.INF ) into a working directory.
- Connect	the	adapter	to	the	PC	with	the	USB	cable.
- Open Device Manager in the control panel under System and Security à System under the Hardware tab.
- Look	for	the	adapter	under Ports (COM &amp; LPT) . It should show up as MAXQ622 USB-to-JTAG/OWL Dongle . Rightclick and select the option Update Driver…

Figure 3. Installing the Driver Through the Device Manager on XP

<!-- image -->

Windows XP is a registered trademark and registered service mark of Microsoft Corporation.

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

- Select Install from a list or specific location (Advanced) and click Next .

Figure 4. Hardware Update Wizard-Install from a Specific Location

<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

- Select Don't search. I will choose the driver to install and click Next .

Figure 5. Hardware Update Wizard-Choose the Driver to Install

<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

- Click Have Disk… to select the INF file.

Figure 6. Hardware Update Wizard-Select Device Driver

<!-- image -->

## Evaluates: MAXQ Microcontrollers

- Click Browse… , then select the INF file, maxusbjtagow.INF . Click OK , then Next .

Figure 7. Hardware Update Wizard-Install from Disk

<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

- A	hardware	installation	warning	pops	up.	Click Continue Anyway .

Figure 8. Hardware Update Wizard-Hardware Installation

<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

- After	the	Windows	OS	completes	installing	the	software,	click Finish to close the Hardware Update Wizard .

Figure 9. Hardware Update Wizard-Completing the Hardware Update Wizard

<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

- Now,	in	the Device Manager , the adapter should appear under Ports (COM &amp; LPT) as Maxim USB-to-JTAG/1-Wire Adapter (COMx) , where x is the port number.

Figure 10. Device Manager After Successful Installation

<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

## Installing the Drivers for Windows ®  7

- Download	the	required	driver	software.	Unzip	the	driver	package	( maxusbjtagow.INF ) into a working directory
- Connect	the	adapter	to	the	PC	with	the	USB	cable
- Open Device Manager in the control panel under System and Security
- Look	for	the	adapter	under Ports (COM &amp; LPT) . It should show up as MAXQ622 USB-to-JTAG/OWL Dongle . Rightclick and select the option Update Driver Software…

Figure 11. Installing the Driver Through the Device Manager on Windows 7

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

- Click	the Browse my computer for driver software .

Figure 12. Update Driver Software-Search for Driver Software

<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

- Select Let me pick from a list of device drivers on my computer .

Figure 13. Update Driver Software-Browse for Driver Software

<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

- Select Ports (COM &amp; LPT) as the device type.

Figure 14. Update Driver Software-Select Device Type

<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

- In	the	next	window,	select Have Disk… and select the INF file, maxusbjtagow.INF . Click OK then Next .

Figure 15. Update Driver Software-Install From Disk

<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

- While	installing	the	driver	software, Windows Security warns about the driver not being signed. Click Install this driver software anyway .

Figure 16. Update Driver Software-Bypassing Windows Security

<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

- After	Windows	completes	software	installation,	click Close.

Figure 17. Update Driver Software-Update Done

<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

- Now,	in	the Device Manager , the adapter should appear under Ports (COM &amp; LPT) as Maxim USB-to-JTAG/1Wire Adapter (COMx) , where x is the port number.

Figure 18. Device Manager After Installation on Windows 7

<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

Figure 19. MAXQ USB-to-JTAG/1-Wire Adapter EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

Figure 20. MAXQ USB-to-JTAG/1-Wire Adapter EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

Figure 21. MAXQ USB-to-JTAG/1-Wire Adapter EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

## Ordering Information

| PART               | TYPE    |
|--------------------|---------|
| MAXQUSBJTAGOW-KIT# | Adapter |

## MAXQ USB-to-JTAG/1-Wire Adapter

## Evaluates: MAXQ Microcontrollers

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/12           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.