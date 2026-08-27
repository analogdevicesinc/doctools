<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX11800/MAX11801 Touch Evaluation Systems (TEVS)

## General Description

Features

The MAX11800/MAX11801 touch evaluation systems  (TEVSs)  demonstrate  the  rich  feature  set  of  the MAX11800-MAX11803 family of touch-screen controllers (TSCs)  and  allow  for  their  evaluation.  Each  TEVS  consists  of  a USB interface  board  (UTIB+),  a  MAX11800/MAX11801 evaluation kit (EV kit) daughter board, and a 4-wire touch sensor  (USB  cable  included). Note: The  MAX11802 and  MAX11803  are  subsets  of  the  MAX11800  and MAX11801, respectively.

Order the MAX11800  TEVS  for a comprehensive evaluation  of  the  SPI™-compatible  TSCs  using  a  PC. Order the MAX11801 TEVS for a comprehensive evaluation of the I 2 C-compatible TSCs.

The  TSCs  provide  a  complete  resistive  touch-screen controller  solution  that  targets  touch-enabled  devices with  small-  to  medium-size  displays.  The  TSCs  enable miniaturization of consumer products due to their ultrasmall  size.  Their  low  power  consumption  makes  them attractive for portable devices.

Each  TEVS  operates  directly  from  the  USB  power. Windows  XP M -  or  Windows M 7-compatible  software running on a PC interfaces to the TEVS board through the computer's USB communications port. See the Quick Start section for setup and operating instructions.

The EV kit provides a proven PCB to facilitate evaluation of the TSCs directly by the user. It must be interfaced to the appropriate SPI/I 2 C timing signals for proper operation. See Figures 12a, 12b, and 13 for connections and appropriate  voltage  levels.  Refer  to  the  MAX11800MAX11803  IC  data  sheet  for  timing  requirements  and register addresses.

## EV System Contents List

|   QTY | DESCRIPTION                                                                                                                                                       |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | Software and driver CD-ROM.                                                                                                                                       |
|     1 | EV kit (with the TSCs mounted on it, but can be separated from the TEVS for evaluation of the TSCs in the user setup).                                            |
|     1 | USB interface board (UTIB+). This acts as a gateway converting and accepting data from the USB port to SPI/I 2 C for the EV kit. The EV kit plugs into the UTIB+. |
|     1 | USB cable for power and communication.                                                                                                                            |

Windows and Windows XP are registered trademarks of Microsoft Corp.

## Hardware

- S Complete Evaluation System Including a USB-toSerial Interface (I 2 C or SPI) Board
- S Convenient Test Points Provided On-Board for Digital Interface and Analog Signals
- S Interfaces to Common 4-Wire Resistive Touch Sensors through Standard FPC/FFC Connectors 1mm Pitch
- 0.5mm Pitch
- S Built-In LDOs and Level Translators for Operation with 1.8V, 3.0V, and 3.6V

## Software

- S User-Friendly GUI Interface (Microsoft Windows XP- and Windows 7-Compatible USB Interface)
- S Easy Access to TSC Configuration Registers and Status Registers
- S Direct Conversion Mode Demonstration Capability
- S Autonomous Conversion Mode Demonstration Capability (Only Available in the MAX11800 and MAX11801)
- S Ability to Capture Raw Data and Display the Data in Either Conversion Mode

## Ordering Information

| PART           | TYPE      | INTERFACE TYPE/ PACKAGE   |
|----------------|-----------|---------------------------|
| MAX11800TEVS + | EV System | SPI/TQFN                  |
| MAX11801TEVS + | EV System | I 2 C/TQFN                |

SPI is a trademark of Motorola, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX11800/MAX11801 Touch Evaluation Systems (TEVS)

## MAX11800/MAX11801 TEVS+ Block Diagram

<!-- image -->

## Component Lists

## MAX11800-MAX11803 Interface Board

| DESIGNATION                        |   QTY | DESCRIPTION                                                |
|------------------------------------|-------|------------------------------------------------------------|
| C26, C27                           |     0 | Not installed, capacitors (0603)                           |
| EN1B, EN2B                         |     0 | Not installed, headers                                     |
| FB1, FB2                           |     2 | 1A, 19 I SMD ferrite beads (1206) Steward HF1206J150R-10   |
| J1-J5, J11-J17                     |     0 | Not installed, headers                                     |
| J6, J7                             |     2 | 2-pin headers, 0.1in centers                               |
| J8, J9, J18, J19                   |     4 | 3-pin headers, 0.1in centers                               |
| J10                                |     1 | 21-position SMD female connector Hirose DF9-21S-1V(32)     |
| J20                                |     1 | 5-position mini-USB connector Hirose UX60A-MB-5ST          |
| J21                                |     1 | Dual-row header, 0.1in centers, gold plated                |
| LED2, LED3, LED4                   |     3 | Red clear SMD LEDs (0603) Lite-On LTST-C190CKT             |
| PGND103, PGND104                   |     2 | Loops for test with 2 vias (use 20 AWG wire to make loops) |
| R1, R2                             |     2 | 4.7k I resistors (0805)                                    |
| R3, R4, R10, R19, R32-R36, R37-R41 |     0 | Not installed, resistors (0603)                            |
| R5                                 |     1 | 196k I Q 1% resistor (0805)                                |
| R6                                 |     1 | 590k I Q % resistor (0805)                                 |
| R7                                 |     1 | 61.9k I Q 1% resistor (0805)                               |
| R8, R22                            |     2 | 100k I Q 1% resistors (0805)                               |
| R9, R16, R17                       |     3 | 215 I resistors (0805)                                     |

| DESIGNATION                                                                                                                                                |   QTY | DESCRIPTION                                                            |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|------------------------------------------------------------------------|
| A0/CSB, A1/DOUT, CSB, GPIO_K1- GPIO_K8, MISO, MOSI, P1_4- P1_7, P3_4-P3_7, PGND2, PGND3, PIRQB, SCL, SCL/CLK, SCLK, SDA, SDA/DIN, TIRQB, U2-PIN1, U2-PIN20 |    32 | Test points                                                            |
| C1, C2, C11, C13                                                                                                                                           |     4 | 1 F F Q 10%, 16V X5R ceramic capacitors (0603) TDK C1608X5R1C105K      |
| C3, C6, C12, C14                                                                                                                                           |     4 | 10 F F Q 20%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J106M    |
| C4, C5, C9, C10, C15-C19, C23, C24, C25                                                                                                                    |    12 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K    |
| C7, C8                                                                                                                                                     |     2 | 22pF Q 5%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H220J        |
| C20, C21                                                                                                                                                   |     2 | 10pF Q 5%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H100J        |
| C22                                                                                                                                                        |     1 | 33nF Q 10%, 16V X5R ceramic capacitor (0603) Taiyo Yuden EMK107BJ333KA |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11800/MAX11801 Touch Evaluation Systems (TEVS)

## Component Lists (continued)

## MAX11800-MAX11803 Interface Board (continued)

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                 |
|---------------|-------|-------------------------------------------------------------|
| R11-R14       |     4 | 0 I resistors (0805)                                        |
| R15, R18      |     2 | 51k I resistors (0805)                                      |
| R20           |     1 | 100k I resistor (0805)                                      |
| R21           |     1 | 169k I Q 1% resistor (0805)                                 |
| R23, R24      |     2 | 27 I resistors (0805)                                       |
| R25           |     1 | 1.5k I resistor (0805)                                      |
| R26           |     1 | 2.2k I resistor (0805)                                      |
| R27           |     1 | 470 I resistor (0805)                                       |
| R28           |     1 | 10k I resistor (0805)                                       |
| R29, R30, R31 |     3 | 3.3k I resistors (0805)                                     |
| U1, U7        |     2 | Adjustable output LDO regulators (5 SC70) Maxim MAX8512EXK+ |
| U2            |     1 | 8-channel level translator (20 TSSOP) Maxim MAX3001EEUP+    |
| U3            |     1 | LDO regulator (5 SC70) Maxim MAX8511EXK25+                  |
| U4            |     1 | USB-to-serial UART (32 LQFP) FTDI FT232BL                   |

| DESIGNATION   |   QTY | DESCRIPTION                                                 |
|---------------|-------|-------------------------------------------------------------|
| U5            |     1 | 1Kb, 1.8V SRL EEPROM (8 SO) Atmel AT93C46EN-SH-B            |
| U6            |     1 | Microcontroller (68 QFN-EP*) Maxim MAX2000-RAX+             |
| U8            |     1 | Octal-level translator (12 TQFN-EP*) Maxim MAX3395EETC+     |
| U9            |     0 | Not installed                                               |
| Y1            |     1 | 16MHz crystal ECS ECS-160-20-5PXDN-TR                       |
| Y2            |     1 | 6MHz crystal ECS ECS-60-20-5G3XDS-TR                        |
| Y3            |     0 | Not installed, crystal                                      |
| -             |     5 | Bumpers (rubber feet, on bottom of board) 3M SJ-5003 (GRAY) |
| -             |     4 | Shunts (J8, J9, J18, and J19) Sullins STC02SYAN             |

## MAX11800/MAX11801 EV Kit Daughter Board

* EP = Exposed pad.

| DESIGNATION                                                        |   QTY | DESCRIPTION                                                           |
|--------------------------------------------------------------------|-------|-----------------------------------------------------------------------|
| A0/CSB, A1/DOUT, AUX, SCL/CLK, SDA/DIN, TIRQB, VDD, X-, X+, Y-, Y+ |    11 | Test points                                                           |
| C1-C5                                                              |     0 | Not installed, capacitors (0603)                                      |
| C6                                                                 |     1 | 10 F F Q 20%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J106M    |
| C7                                                                 |     1 | 0.1 F F Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K |
| J1                                                                 |     1 | 4-position SMD connector FCI SFW4R-1STE1LF                            |

<!-- image -->

| DESIGNATION   |   QTY | DESCRIPTION                                                                    |
|---------------|-------|--------------------------------------------------------------------------------|
| J2            |     1 | 21-position SMD male connector Hirose DF9-21P-1V(32)                           |
| J3            |     1 | 4-position SMD connector, gold Hirose FH19C-4S-0.5SH(25)                       |
| J4            |     0 | Not installed, jumpers                                                         |
| LED1          |     1 | Red clear SMD LED (0603) Lite-On LTST-C190CKT                                  |
| R1-R5, R9     |     6 | 0 I resistors (0603)                                                           |
| R6            |     1 | 215 I resistor (0603)                                                          |
| R7            |     1 | 1 I Q 1% resistor (0603)                                                       |
| R11-R15       |     0 | Not installed, resistors (0603)                                                |
| U1            |     1 | Touch-screen controller (12 TQFN-EP*) Maxim MAX11800ETC+ or Maxim MAX11801ETC+ |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX11800/MAX11801 Touch Evaluation Systems (TEVS)

Vendor Specifications

## Touch-Panel Vendor and Specification

Densitron  and  Fujitsu  are  approved  panel  vendors for  resistive  touch-screen  controllers  from  Maxim  (see Tables 1 and 2 for recommended touch panels).

Table 1. Densitron 4-Wire Resistive Touch-Panel Specification

| Part Number             | DTS408-0380-00       | DTS408-0280-00       |
|-------------------------|----------------------|----------------------|
| Screen Diagonal         | 3.8in                | 2.8in                |
| Dimension (W x H x D)   | 91mm x 72mm x 0.95mm | 70mm x 55mm x 1.4 mm |
| Viewing Area            | 81mm x 63mm          | 59.6mm x 46.1mm      |
| Active Area Width (mm)  | 79mm                 | 58mm                 |
| Active Area Height (mm) | 58mm                 | 44mm                 |
| Package Mode            | Film glass           | Film glass           |
| Transparency            | 80%                  | 80%                  |

Table 2. Fujitsu 4-Wire Resistive TouchPanel Specification

Figure 1. Complete MAX11800/MAX11801 Touch Evaluation System (TEVS) Photo

| Part Number       | T010-1401-T670   |
|-------------------|------------------|
| Outer Dimension   | 61.4mm x 80.3mm  |
| Transparent Area  | 54.4mm x 71.2mm  |
| Active Area       | 51.4mm x 68.2mm  |
| Flex Tail         | 30mm             |
| Glass Thickness   | 0.7mm            |
| PET Film Features | Clear            |
| Transparency      | 80%              |

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11800/MAX11801 Touch Evaluation Systems (TEVS)

Figure 2. MAX11800/MAX11801 Touch Evaluation System (TEVS) Block Diagram

<!-- image -->

## Quick Start

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure (TEVS Software and USB Driver Installation)

- 1) Before plugging the TEVS into an available port on a  Windows  XP-  or  Windows  7-compatible  PC,  the TEVS software must be installed.
- 2) The software comes with the USB driver and a GUI application. Unzip the files and put the contents in an easily accessible location.
- 3) Locate  the  Setup.exe  and  double-click  on  it  and follow the instructions for installation.
- 4) The driver for the EV kit is installed in the following location:
5. C:\CMAXQUSB

<!-- image -->

or

- C:\MAXIM  TSC  USB  DRIVER  CDM20602  (for newer drivers)
- 5) The  application  along  with  its  supporting  files  is located at:
- C:\Program  Files\Maxim  Integrated  Products\ MAX118xx EVS &lt;version&gt;
- 6) A short cut to the application executable file is created  on  the  desktop  and  in  the Start  |  Programs menu.
- 7) To uninstall the software, go to My Computer | Add or Remove program.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX11800/MAX11801 Touch Evaluation Systems (TEVS)

## Detailed Description of Hardware

Ensure  that  the  MAX11800/MAX11801  EV  kit  daughter board is properly mounted on the UTIB+ and the touchscreen  panel  is  properly  connected  to  the  daughter board.  The  daughter  board  houses  the  TSC  IC.  This module processes the data from the touch-screen panel connected to it and streams it out to the UTIB+ interface board.

The  UTIB+  acts  as  an  intermediary  gateway  that  converts  the  SPI/I 2 C  (signal  levels  and  protocol)  into  the USB for  processing  by  the  PC.  The  UTIB+  includes  a MAXQ2000 microcontroller to carry out this task.

For  the  MAX11800TEVS+,  the  jumpers  on  the  UTIB+ should be in the following positions:

J9: 1-2

J8: 1-2

J9: 1-2

## Hardware Installation

Note: Install  the  software  before  starting  this  step. Connect  the  TEVS  to  the  PC  using  the  USB  cable provided. A dialog box appears, as shown in Figure 3.

Click  on  the Install  from  a  list  or  specific  location (Advanced) radio  button  and  then  press  the Next button.

Type C:\CMAXQUSB in the edit box, as shown in Figure 4,  or  press  the Browse button  to  find  the  CMAXQUSB driver folder. Press the Next button to proceed. For the new driver,  change CMAXQUSB to MAXIM TSC USB DRIVER CDM20602 .

Figure 3. Found New Hardware Dialog

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For  the  MAX11801TEVS+  ,  the  jumpers  on  the  UTIB+ should be on the following positions:

J19: 1-2

J8: 2-3

J9: 2-3

<!-- image -->

## MAX11800/MAX11801 Touch Evaluation Systems (TEVS)

<!-- image -->

Figure 4. Search for the Best Driver

<!-- image -->

Figure 5. Windows Logo Testing Warning

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX11800/MAX11801 Touch Evaluation Systems (TEVS)

During the installation steps, the warning shown in Figure 5  is  displayed.  Press  the Continue  Anyway button  to proceed.

Follow the remaining steps that come up and exit when done. At the end of the process, the driver is installed and the device is ready to be used. Disconnect and plug the device back in again.

## MAX11800/MAX11801 TEVS GUI Description

Note: The  MAX11802  and  MAX11803  are  subsets of  the  MAX11800  and  MAX11801,  respectively,  and operate  only  in  direct  conversion  mode.  After  the successful installation of the driver, connect the MAX11800/MAX11801  TEVS  to  the  PC  using  the  USB cable. Start the GUI by double-clicking on the MAX118xx EVS &lt;version&gt;.exe file.  The GUI can also be selected from the Windows Start menu.

The GUI searches for the device and after a successful USB communication link displays USB comm. successful in the right-hand side of the status bar. If the GUI fails to  establish  a  communication link, USB comm. failure is displayed.

Following a successful USB communication link, the GUI pings the TSC (MAX11800/MAX11801) and establishes a link with the device and displays the following on the GUI window.

- 1) Window caption:

For  the  MAX118xx: MAX118xx 4-wire Advanced Touch Screen Controller , where xx = 00, 01

- 2) Left side of status bar:

For  the  MAX11800: TSC  Communication:  SPI

TSC device found

For  the  MAX11801: TSC  Communication:  I2C

TSC device found

If  the  MAX11802  or  MAX11803  are  to  be  evaluated, select the appropriate device under the Manual Search menu item. The right side of the status bar then displays USB communication successful .

## Registers Tab

The Registers tab shown in Figure 6 displays a successful  communication link with the MAX11800 device. The ensuing  discussion  applies  to  all  MAX118xx  devices. This tab displays the registers related to X, Y, Z1, and Z2 measurements of the MAX118xx. The user can manipulate the register values by changing the binary bit patterns on the right or the hex values on the left. Refer to the MAX11800-MAX11803 IC data sheet for details on the registers.

Upon startup, factory-default values from the MAX11800-01\_init.ini files are loaded onto the GUI and then written into the MAX11800/MAX11801 TSC.

The  user  can  change  the  factory-default  values  in  the MAX11800-01\_init.ini  file  and  enter  new  values  on  the GUI, by selecting the File | Save option from the menu bar.  This  overwrites  the  factory-default  values  in  the MAX11800-01\_init.ini  file.  The  user  also  has  the  option to  save  the  register  values  on  the  GUI  screen  under  a different name by selecting the File | Save As option, or open and load a previously saved file by selecting the File | Open and Load option.

The GUI automatically writes to the MAX11800/MAX11801 TSC when a new .ini file is opened and loaded. However, when  the  user  individually  manipulates  bits  on  the GUI screen, it must be followed by pressing the Write Registers button.  The Read  Registers button  reads all  the registers from the TSC and displays them in the binary and hex fields.

At any given time, the computer mouse can be scrolled over a checkbox (the bit indicators) and the status with a description is indicated by the tool tip.

Note: Any  changes  on  the  GUI  must  be  followed  by pressing the Write Registers button for the value to be loaded into the MAX11800/MAX11801 TSC.

## Touch Data Tab

The Touch Data tab displays the user inputs in the touch panel on the screen. The user can make various selections to display a combination of X, Y, Z1, and Z2 data along with their processed/mathematical interpretation.

The MAX11800 and MAX11801 TSCs have two modes of operation: direct conversion and autonomous conversion. Refer to the MAX11800-MAX11803 IC data sheet for  more  details.  The  MAX11802  and  MAX11803  only support direct mode.

Direct Conversion Mode: Direct conversion mode can be selected either  in  the Registers tab  by  selecting  it in  the Operating  Mode  Configuration register  or  by selecting it in the Touch Data tab, as shown in Figure 7.

Autonomous  Conversion  Mode: Autonomous  conversion  mode  can  be  selected  in  the Registers tab by  selecting  it  in  the Operating  Mode  Configuration register,  or  by  selecting  it  in  the Touch  Data tab,  as shown in Figure 8.

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11800/MAX11801 Touch Evaluation Systems (TEVS)

Figure 6. Registers Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX11800/MAX11801 Touch Evaluation Systems (TEVS)

Figure 7. Touch Data Tab (Direct Mode)

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11800/MAX11801 Touch Evaluation Systems (TEVS)

Figure 8. Touch Data Tab (Auto Mode)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    11

## MAX11800/MAX11801 Touch Evaluation Systems (TEVS)

## Raw Data

The Raw Data tab  (Figure  9)  displays  a  stream  of  raw data that gets collected during the operation of the TSC. This  data  can  be  saved  by  pressing  the Save  Data button for data analysis.

## Multi-Touch Tab

The Multi-Touch tab (Figures 10 and 11) gives a simple demo  of  the  multi-touch  on  a  resistive  panel.  Use  the touch  panel  to  enlarge  and  reduce  the  picture  found in  this  tab.  This  works  only  in  the  autonomous  mode. Contact the factory for details on this feature.

Figure 9. Raw Data Tab

<!-- image -->

12      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11800/MAX11801 Touch Evaluation Systems (TEVS)

Figure 10. Multi-Touch Tab (Before Zoom Out and Rotate)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    13

## MAX11800/MAX11801 Touch Evaluation Systems (TEVS)

Figure 11. Multi-Touch Tab (After Zoom Out and Rotate)

<!-- image -->

14      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11800/MAX11801 Touch Evaluation Systems (TEVS)

<!-- image -->

Figure 12a. MAX11800-MAX11803 Interface Board Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    15

## MAX11800/MAX11801 Touch Evaluation Systems (TEVS)

Figure 12b. MAX11800-MAX11803 Interface Board Schematic (Sheet 2 of 2)

<!-- image -->

16      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11800/MAX11801 Touch Evaluation Systems (TEVS)

<!-- image -->

Figure 13. MAX11800/MAX11801 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    17

## MAX11800/MAX11801 Touch Evaluation Systems (TEVS)

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/10           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

18