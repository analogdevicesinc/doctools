<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX31910/11 Evaluation Kit

## Evaluates: MAX31910 and MAX31911

## General Description

The MAX31910/11  evaluation kit (EV kit) provides the  hardware  and  software  (graphical  user  interface) necessary  to  evaluate  the  MAX31910  and  MAX31911 industrial octal digital input translators/serializers. The EV kit includes a MAX31910AUI+ or MAX31911AUI+ installed as well as a digital isolator and USB-to-SPI interface.

The  USB  to  SPI  Dongle  is  a  separate  PCB  that  can  be used to  interact  with  the  EV  kit  software.  This  dongle  is optional and is not necessary for the proper operation of the MAX31910/11 if the user supplies the SPI interface.

This EV kit is intended for functional and parametric evaluation of the IC only; it is not intended for EMC testing.

## EV Kit Contents

- S Assembled Circuit Board including MAX31910AUI+ or MAX31911AUI+
- S USB to SPI Dongle
- S Mini-USB Cable

## Features

- S Easy Evaluation of the MAX31910 and MAX31911
- S Fully Assembled and Tested
- S USB HID Interface
- S Digital Isolator
- S Windows XP ®  OS- and Windows ®  7 OS-Compatible Software
- S RoHS Compliant

## MAX31910/11 EV Kit Files

| FILE                                | DESCRIPTION         |
|-------------------------------------|---------------------|
| MAX31910_11EVKitSoftwareInstall.EXE | Application program |

Note:

The .EXE file is downloaded as a .ZIP file.

## MAX31910/11 EV Kit

<!-- image -->

Ordering Information appears at end of data sheet.

Windows and Windows XP are registered trademarks of Microsoft Corp.

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maximintegrated.com.

## MAX31910/11 Evaluation Kit

## Evaluates: MAX31910 and MAX31911

## Quick Start

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly  from  the  install  or  EV  kit  software.  Text  in bold and underlined refers to items from the Windows operating system.

## Required Equipment

- PC	with	Windows	XP	or	Windows	7	OS
- USB	port
- Mini-USB	cable	(included)
- EV	kit	hardware	(included)
- USB	to	SPI	Dongle	(included)
- Screw	driver
- Wire
- Power	supply
- 7) Once	 the	 device	 driver	 installation	 is	 complete, visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX31910\_11EVKitSoftwareInstall.ZIP .  Save  the EV kit software to a temporary folder.
- 8) Open	the	.ZIP	file	and	double-click	the	.EXE	file	to run  the  installer.  A  message  box  stating The publisher  could  not  be  verified.  Are  you  sure  you want to run this software? may appear. If so, click Yes .
- 9) The  installer  GUI  will  appear.  Click Next and  then Install .	Once	complete,	click Close .
- 10)  Go to Start &gt;&gt; All  Programs . Look for the MAX31910\_11EVKitSoftware folder  and  click  on MAX31910\_11EVKitSoftware.EXE inside the folder.
- 11)  When  the  GUI  appears,  the  text  above  the  status box should indicate that the EV kit hardware is connected.	The	COM	LED	(D51)	will	change	to	green.
- 12)  Connect field inputs to J5 or install jumpers on FIN1FIN8 and click Single Read .

## Detailed Description of Software

Figure 1. MAX31910/11 EV Kit GUI

<!-- image -->

## Procedure

The MAX31910/11 EV kit is fully assembled and tested. Follow the steps below to verify board operation.

- 1) Connect the USB to SPI Dongle (J52) to the EV kit connector J3.
- 2) Install jumpers on RIREF (J2) and SIN-GND (J6).
- 3) Set  the  EV  kit  hardware  on  a  non-conductive  surface that will ensure that nothing on the PCB will get shorted to the workspace.
- 4) Use the  wires  to  connect  J1  (VCC  and  GND)  to  a power supply and tighten the screws on the wire.
- 5) Prior  to  starting  the  GUI,  connect  the  EV  kit  hardware to a PC using the supplied mini-USB cable, or equivalent.	The	POWER	LED	(D50)	should	be	green and	the	COM	LED	(D51)	should	be	red	and	slowly flash orange.
- 6) Windows  should  automatically  begin  installing  the necessary  device  driver.  The  USB  interface  of  the EV kit hardware is configured as a HID device and therefore  does  not  require  a  unique/custom  device driver.	 Once	 the	 driver	 installation	 is	 complete,	 a Windows message will appear near the System Icon menu indicating that the hardware is ready to use. Do not attempt to run the GUI prior to this message. If you do, then you will have to close the application and restart it once the driver installation is complete. On	some	versions	of	 Windows,	 Administrator	 privi -leges may be required to install the USB device.

## MAX31910/11 Evaluation Kit

## Evaluates: MAX31910 and MAX31911

## Hardware Configuration

In this section the user must provide hardware configuration information about the EV kit. Select the 8 Bits radio button in the Number of Bits section	if	MODESEL	does not have a jumper on J6. Select the 16 Bits radio  button	if	MODESEL	is	connected	to	GND	on	J6.	If	there	are more MAX31910/11 daisy chained to the EV kit, select the number of devices with the Number of MAX31910/11 combo box.

## Reads

To read the input channels of the devices, select Single Read .  This  will  calculate  the  number  of  bits  to  read based on the Hardware Configuration settings and then display  the  read  data  in  the  table. Continuous Reads will read the input channels every 300ms and display the data	 in	 the	 table.	 Once	 the Continuous Reads starts, the button text will change to Stop for  the  user  to  stop the reads.

## Data

The Data table displays the 8 or 16 bits read from each device connected to the EV kit. The first row of data is the first 8 or 16 bits read from the device connected to the  microcontroller.  The  second  row  is  the  data  read from the device connected to the SIN of the first device (see Figure 2).  The MAX31910/11 column  displays  the device  name.  The  device  name  can  be  changed  by clicking on the name twice. The HEX column displays the data in hexadecimal format for each device. The Input Channels , CRC , UV  Alarm ,  and OT  Alarm columns display the data in binary format.

Figure 2. MAX31910/11 Data Table

<!-- image -->

## MAX31910/11 Evaluation Kit

## Evaluates: MAX31910 and MAX31911

Table 1. Hardware Configurations

| HARDWARE ACTION                     | COMPONENTS   | DESCRIPTION                                                                                                                                                                      |
|-------------------------------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Connect Field Inputs                | J5           | Remove pull up jumpers FIN1-FIN8 and connect field inputs to J5.                                                                                                                 |
| Adjust Current Limit                | J2           | Remove jumper on J2 and connect external resistor to the RIREF pin on J2. Connect other end of resistor to GND.                                                                  |
| Daisy Chain MAX31910/11             | SIN (J6)     | Remove SIN jumper on J6 and connect external MAX31910/11 SOUT to SIN on J6.                                                                                                      |
| Remove Isolation                    | R58 - R61    | On the USB to SPI Dongle populate 0 I resistors on R58 - R61.                                                                                                                    |
| Connect User-Supplied SPI Interface | J3           | Remove USB to SPI Dongle from J3 and connect user SPI interface to J3 pins. Note: This will also remove the digital isolator. See User- Supplied SPI interface for more details. |

Table 2. Description of Jumpers

| JUMPER    | DESCRIPTION                                    |
|-----------|------------------------------------------------|
| J2        | RIREF : Connects R1 to RIREF pin               |
| J6*       | DB0: Pulls DB0 down to GND                     |
| J6*       | DB1: Pulls DB1 down to GND                     |
| J6*       | MODESEL: Pulls MODESEL down to GND.            |
| J6*       | SIN: Pulls SIN down to GND                     |
| FIN1-FIN8 | Field Inputs: Connects field input FINX to VIN |

Table 3. Description of LEDs

| LED        | COLOR   | DESCRIPTION                                                                                                                   |
|------------|---------|-------------------------------------------------------------------------------------------------------------------------------|
| D1 - D8    | Red     | Field Input LED Driver: Field input is logic high. Used for future devices                                                    |
| D10        | Red     | Fault: MAX31910/11 has detected a fault. The field supply is too low or the IC temperature is too high.                       |
| D50(POWER) | Red     | USB Power Fault : a fault occurred due to over voltage limit, current limit, or thermal limit                                 |
| D50(POWER) | Green   | USB Power: USB power supply is on                                                                                             |
| D51(COM)   | Red     | Communication: After the software has initialized the hardware the LED will flash red when a command from the PC is received. |
| D51(COM)   | Green   | Initialized: Hardware has been initialized by software.                                                                       |

## Detailed Description of Hardware

## User-Supplied SPI interface

The USB to SPI Dongle is an optional PCB that is only needed to interact with the MAX31910/11 software. The user has the option to supply an external SPI interface to  communicate  with  the  MAX31910/11.  To  connect  a user-supplied SPI interface, remove the dongle from J3 and connect an external SPI interface to the pins on J3. Removing the dongle also removes the isolator, so the user may also want to provide an external digital isolator.

## MAX31910/11 Evaluation Kit

## Evaluates: MAX31910 and MAX31911

## Troubleshooting

All	effort	was	made	to	ensure	that	each	kit	works	on	the	first	try,	right	out	of	the	box.	On	the	rare	occasion	that	a	problem is suspected, refer to the below table to help troubleshoot the issue.

| SYMPTOM                       | CHECK                                                        | SOLUTION                                                                                                                                                                                                                                                               |
|-------------------------------|--------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GUI says hardware not found.  | Is the LED labeled D50 red?                                  | If yes, then the electronic fuse, U50, is in a fault state. Inspect for electrical shorts on the PCB and make sure that the PCB is not sitting on a conductive surface.                                                                                                |
| GUI says hardware not found.  | Does the LED labeled D51 turn green when the GUI is running? | If not, then exit the GUI and try running it again. If D51 still does not turn green, then exit the GUI and try connecting the USB cable to a different USB port on the PC and wait for a Windows message that states the hardware is ready to use. Run the GUI again. |
| GUI says hardware not found.  | Are any of the LEDs illuminated?                             | If not, then the PCB may not be getting power from USB. Try a different USB cable or a different USB port                                                                                                                                                              |
| CRC returns all 0s or all 1s. | J6 (MODESEL)                                                 | Place a jumper on J6 (MODESEL) for the MAX31910/11 to be in 16-bit mode.                                                                                                                                                                                               |

## MAX31910/11 Evaluation Kit

## Evaluates: MAX31910 and MAX31911

Figure 3. MAX31910/11 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

## MAX31910/11 Evaluation Kit

## Evaluates: MAX31910 and MAX31911

Figure 4. MAX31910/11 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

## MAX31910/11 Evaluation Kit

## Evaluates: MAX31910 and MAX31911

Figure 5. MAX31910/11 EV Kit PCB Layout-Top

<!-- image -->

Figure 6. MAX31910/11 EV Kit PCB Layout-Internal Layer 1

<!-- image -->

## MAX31910/11 Evaluation Kit

## Evaluates: MAX31910 and MAX31911

Figure 7. MAX31910/11 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

Figure 8. MAX31910/11 EV Kit PCB Layout-Bottom

<!-- image -->

## MAX31910/11 Evaluation Kit

## Evaluates: MAX31910 and MAX31911

## Component List: MAX31910/11 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                      |
|---------------|-------|----------------------------------------------------------------------------------|
| R11           |     1 | 3.3k I Q 5% resistor (0805) Bourns CR0805-FX-3301ELF                             |
| J1            |     1 | 2-position screw terminal, 3.5mm pitch Phoenix Contact 1984617                   |
| J2, J15 - J22 |     9 | 1x2 header, 2.54mm pitch Molex 22-28-4020                                        |
| J3            |     1 | 1x7 right-angle header, 2.54mm pitch Molex 22-28-8070                            |
| J5            |     1 | 10-position screw terminal, 2.5mm pitch TE Connectivity 1-282834-0               |
| J6            |     1 | 2x4 header, 2.54mm pitch TE Connectivity 5-146256-4                              |
| J7-J14        |     8 | Solder bridge                                                                    |
| TP1           |     1 | Black test point                                                                 |
| U1            |     1 | Industrial interface serializer (28 TSSOP-EP) Maxim MAX31910AUI+ or MAX31911AUI+ |

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1, C12       |     2 | 0.1 F F X7R ceramic capacitors (0805) TDK CGJ4J2X7R1H104K       |
| C2            |     1 | 4.7 F F X7R ceramic capacitor (0805) TDK CGA4J1X7R1E475K        |
| C3-C10        |     8 | 1nF, 60V ceramic capacitors (0805), do not populate             |
| C11           |     1 | 10 F F, 100V X7S ceramic capacitor (2220) TDK C5750X7S2A106M    |
| D1-D8         |     8 | LEDs (0805), do not populate                                    |
| D9            |     1 | 36V, 600W zener diode ON Semiconductor 1SMB36AT3G               |
| D10           |     1 | Red LED (0805) Kingbright APT2012EC                             |
| R1            |     1 | 15k I Q 1% resistor 1/8W (0805) Bourns CR0805-FX-1502ELF        |
| R2            |     1 | 150 I Q 5% resistor 1/3W MELF (0207) Vishay MMB02070C1500FB200  |
| R3-R10        |     8 | 2.2k I Q 1% resistor 1/4W MELF (0204) Vishay MMA02040C2201FB300 |

## MAX31910/11 Evaluation Kit

## Evaluates: MAX31910 and MAX31911

## Component List: USB to SPI Dongle

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| R56           |     1 | 2.2k I Q 1% resistor (0805) Bourns CR0805-FX-2201ELF                       |
| R58-R61       |     4 | Resistors (0805), do not populate                                          |
| R63           |     1 | 100k I Q 1% resistor (0805) Bourns CR0805-FX-1003ELF                       |
| J50           |     1 | 5-pin female Mini-USB Molex 54819-0519                                     |
| J51           |     1 | Do not populate                                                            |
| J52           |     1 | 1x7 right-angle socket, 2.54mm pitch PPPC071LGBN-RC                        |
| U50           |     1 | 50mA to 600mA current-limit switch (SOT23-6) Maxim MAX4995AAUT+            |
| U51           |     1 | Microcontroller (28 SO) Microchip PIC18LF2550-I/SO                         |
| U52           |     1 | 4-channel digital isolator (16 SO, 300 mils) TI ISO7242M/C Do not populate |
| U53           |     1 | 6-channel digital isolator (16 SO, 150 mils) Maxim MAX14850ASE+            |
| X50           |     1 | 48MHz, 5V oscillator (SMD) TXC 7W-48.000MAB-T                              |

| DESIGNATION   |   QTY | DESCRIPTION                                                 |
|---------------|-------|-------------------------------------------------------------|
| C50, C51      |     2 | 10 F F X7R ceramic capacitors (0805) KEMET C0805C106K8RACTU |
| C53           |     1 | 22pF X7R ceramic capacitor (0805) KEMET C0805C220KBRACTU    |
| C54           |     1 | 220nF X7R ceramic capacitor (0805) TDK CGJ4J2X7R1H224K      |
| C55           |     1 | 1 F F X7R ceramic capacitor (0805) TDK C2012X7R1H105K       |
| C56, C57, C58 |     3 | 0.1 F F X7R ceramic capacitors (0805) TDK CGJ4J2X7R1H104K   |
| D50, D51      |     2 | Dual LEDs, red/green Kingbright APHB M2012SURKCGKC          |
| D52           |     1 | Schottky diode ROHM Semiconductor RB060M- 30TR              |
| R50, R62      |     2 | 560 I Q 1% resistors (0805) Bourns CR0805-FX-5600ELF        |
| R51, R52, R57 |     3 | 0 I Q 5% resistors (0805) Bourns CR0805-J/-000ELF           |
| R53           |     1 | 4.7k I Q 1% resistor (0805) Bourns CR0805-FX-4701ELF        |
| R54, R55      |     2 | 330 I Q 1% resistors (0805) Bourns CR0805-FX-3300ELF        |

## MAX31910/11 Evaluation Kit

## Evaluates: MAX31910 and MAX31911

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX31910 EVKIT# | EV Kit |
| MAX31911 EVKIT# | EV Kit |

## MAX31910/11 Evaluation Kit

## Evaluates: MAX31910 and MAX31911

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/12            | Initial release | -               |

<!-- image -->