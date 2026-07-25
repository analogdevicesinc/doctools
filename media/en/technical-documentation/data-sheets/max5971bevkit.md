<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX5971B evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  PCB  featuring  an  Ethernet single-port  power-sourcing  equipment  (PSE)  circuit  for -54V supply rail systems. The IEEE M 802.3af/at-compliant MAX5971B PSE controller IC, in a 28-pin TQFN package, features  an  internal  n-channel  power  MOSFET  forming the  main  PSE  circuit  on  the  EV  kit.  The  IC  is  used  in single-port power-over-Ethernet (PoE) applications.

The  EV  kit  provides  optical  isolation  for  the  IC's  I 2 Ccompatible  2-wire  interface.  The  isolated  interface  can connect  to  a  PC's  USB  port  through  an  on-board USB  interface  circuit.  The  EV  kit  can  be  reconfigured for  interfacing  to  a  user's  stand-alone  microcontroller for  isolated  or  nonisolated  operation.  In  stand-alone operation,  the  user  must  supply  a  separate  +3.3V power  supply  capable  of  supplying  35mA.  The  EV kit  requires  a  -32V  to  -60V  power  supply  (-54V  supply  rail)  capable  of  supplying  1A  or  more  to  the  EV kit  for  powering  the  powered  device  (PD)  through  the 10/100/1000BASE-TX  Ethernet  network  port.  The  EV kit  demonstrates  PD  discovery,  classification,  currentlimit  control,  and  other  functions  of  an  IEEE  802.3af/atcompliant PSE.

The IC controls the -54V DC power to the Ethernet network port by sensing current through the port and controlling  the  IC's  internal  power  MOSFET.  Current  is  fed to a 1Gb x 1Gb MagJack M module Ethernet output port.

The EV kit  demonstrates  the  full  functionality  of  the  IC, such  as  configurable  operational  modes,  port  current information through the I 2 C interface, high-power modes (programmable  up  to  40W),  PD  detection  (including legacy  PD  detection),  PD  classification,  overcurrent protection,  current  foldback,  undervoltage/overvoltage protection, and AC-/DC-disconnect monitoring. All these features  are  configurable  on  the  EV  kit,  with  additional test  points  for  voltage  probing  and  current  measurements provided. The EV kit can also be configured for midspan or end-point network operation. The EV kit software  is  Windows M 2000,  Windows  XP M ,  and  Windows Vista M compatible,  providing  a  user-friendly  interface to  demonstrate  the  IC  features  while  providing  access to  each  register  at  the  bit  level.  The  program  is  menu driven, offers a graphical user interface (GUI) with control buttons, and includes a macro engine for automated evaluation and testing of the IC at the system level. The program's macro output files can be automatically saved.

Order  the  EV  kit  for  a  complete  PC-based  evaluation of  the  IC.  To  evaluate  the  MAX5971A  IC,  order  the MAX5971A EV kit.

## MAX5971B Evaluation Kit Evaluates: MAX5971B

## Features

- S IEEE 802.3af/at-Compliant PSE Circuit
- S Port Current Read-Out Through I 2 C Interface
- S High-Power Class 5 Mode Configurable Up to 40W
- S -32V to -60V Input Voltage Providing 1A
- S Ethernet Network Ports

RJ45 10/100/1000BASE-TX Ethernet Network Data Input Port

RJ45 10/100/1000BASE-TX Ethernet Network PSE Output Port

- S Demonstrates MAX5971B Internal Power Switch and Current Sensing
- S Demonstrates Standard and Legacy PD Detection and Classification
- S Configurable for Midspan or End-Point Mode
- S Configurable AC/DC Load-Removal Detection and Disconnect Monitoring
- S Convenient Voltage and Current Test Points
- S Demonstrates IC's Output-Port LED Status Indicators
- S Optically Isolated I 2 C-Compatible 2-Wire PC Interface
- S Reconfigurable for Stand-Alone Operation or with an External Microcontroller (Requires +3.3V, 35mA Supply)
- S Windows   2000-, Windows XP-, and Windows Vista (32-Bit)-Compatible Software
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

IEEE is a registered service mark of the Institute of Electrical and Electronics Engineers, Inc.

MagJack is a registered trademark of Bel Fuse Inc.

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION                 |   QTY | DESCRIPTION                                                                                   |
|-----------------------------|-------|-----------------------------------------------------------------------------------------------|
| C1                          |     1 | 47 F F Q 20%, 100V electrolytic capacitor (12.5mm x 13.5mm) Panasonic EEEFK2A470Q             |
| C2                          |     1 | 1 F F Q 10%, 100V X7R ceramic capacitor (1210) AVX 12101C105KAT9A                             |
| C3, C5, C7                  |     3 | 0.1 F F Q 10%, 100V X7R ceramic capacitors (0603) Murata GRM188R72A104KA35B                   |
| C4                          |     1 | 0.47 F F Q 10%, 100V X7R ceramic capacitor (0805) Murata GRM21BR72A474KA73B                   |
| C6, C9, C10                 |     3 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K or TDK C1608X7R1C104K  |
| C8                          |     1 | 10 F F Q 20%, 6.3V X5R ceramic capacitor (0805) Murata GRM21BR60J106M or TDK C2012X5R0J106M   |
| C11                         |     1 | 1.0 F F Q 10%, 6.3V X5R ceramic capacitor (0603) AVX 06036D105KA or Taiyo Yuden JMK107BJ105KA |
| C12                         |     1 | 1000pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102K                          |
| C201, C203-C210, C217, C221 |    11 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K or TDK C1608X7R1C104K  |
| C202, C213, C215            |     3 | 10 F F Q 20%, 6.3V X5R ceramic capacitors (0805) Murata GRM21BR60J106M or TDK C2012X5R0J106M  |
| C211, C212                  |     2 | 10pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H100J or TDK C1608C0G1H100J      |
| C214                        |     1 | 1 F F Q 10%, 10V X5R ceramic capacitor (0603) Murata GRM188R61A105K or TDK C1608X5R1A105K     |

<!-- image -->

## MAX5971B Evaluation Kit

## Evaluates: MAX5971B

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                                                                                           |
|--------------------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| C216               |     1 | 2.2 F F Q 10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J225K or TDK C1608X5R0J225K                                                          |
| C218, C219         |     2 | 22pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H220J or TDK C1608C0G1H220J                                                              |
| C220               |     1 | 3300pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H332K or TDK C1608X7R1H332K                                                            |
| D1, D3             |     2 | 150mA, 100V small-signal diodes (SOD323) Fairchild 1N4148WS (Top Mark: S1)                                                                            |
| D2                 |     1 | 58V, 600W transient voltage suppressor (SMB) Vishay SMBJ58A (Top Mark: NG-with a single cathode band at one end; band aligns with band on silkscreen) |
| D4                 |     1 | 1A, 100V general-purpose diode (SMA) Diodes Inc. S1B                                                                                                  |
| D5                 |     1 | 6.2A, 60V transient voltage suppressor diode (SMB) Diodes Inc. SMBJ60A-13-F                                                                           |
| D6                 |     1 | 100mA, 30V Schottky diode (SOD323) Diodes Inc. CMDSH-3 (Top Mark: S1)                                                                                 |
| D201               |     1 | Green LED (0603) Panasonic LNJ314G8TRA                                                                                                                |
| FB201              |     0 | Not installed, ferrite-bead inductor-short (PC trace) (0603)                                                                                          |
| GND (x2), RTN, VEE |     4 | Uninsulated banana jacks                                                                                                                              |
| J1                 |     1 | RJ45 connector module jack (8-8)                                                                                                                      |
| J2                 |     1 | RJ45 1x1Gb MagJack, 1000 Base-T, 1 x 1 port, voice-over-IP magnetics (700mA DC) Bel Fuse Inc. 0826-1X1T-GH-F                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION                                     |   QTY | DESCRIPTION                                                                   |
|-------------------------------------------------|-------|-------------------------------------------------------------------------------|
| JU1-JU6                                         |     6 | 2-pin headers                                                                 |
| JU7                                             |     1 | 5-pin header                                                                  |
| JU8                                             |     0 | Not installed, 8-pin (2 x 4) header                                           |
| JU9-JU12                                        |     0 | Not installed, 2-pin headers- short (PC trace)                                |
| L1                                              |     1 | 10mH, 17mA inductor Coilcraft DS1608C-106                                     |
| P201                                            |     1 | -20V, -2.4A, p-channel MOSFET (3 SuperSOT) Fairchild FDN304P (Top Mark: 304)  |
| R1                                              |     1 | 9.09k I Q 1% 1/2W resistor (2010) Panasonic ERJ-12SF9091U                     |
| R2, R14, R18, R19, R20, R22, R23, R24, R26, R28 |    10 | 3k I Q 5% resistors (0603)                                                    |
| R3, R10-R13, R15, R16                           |     7 | 1k I Q 5% resistors (0402)                                                    |
| R4                                              |     1 | 2.2M I Q 5% resistor (0805)                                                   |
| R5, R6                                          |     0 | Not installed, resistors (1206)                                               |
| R7, R8                                          |     2 | 0 I Q 5% resistors (1206)                                                     |
| R9                                              |     0 | Not installed, resistor (0402)                                                |
| R17, R21, R25, R27                              |     4 | 180 I Q 5% resistors (0603)                                                   |
| R29                                             |     1 | 5.1k I Q 5% resistor (0603)                                                   |
| R30, R31, R32                                   |     0 | Not installed, resistors (0805) R30 is open; R31 and R32 are short (PC trace) |
| R201                                            |     1 | 0 I Q 5% resistor (0603)                                                      |
| R202                                            |     1 | 220 I Q 5% resistor (0603)                                                    |
| R203                                            |     1 | 10k I Q 5% resistor (0603)                                                    |
| R204                                            |     1 | 2.2k I Q 5% resistor (0603)                                                   |
| R205                                            |     1 | 1.5k I Q 5% resistor (0603)                                                   |
| R206, R207                                      |     2 | 27 I Q 5% resistors (0603)                                                    |
| R208                                            |     1 | 1k I Q 5% resistor (0603)                                                     |
| SW1                                             |     1 | Microminiature pushbutton switch                                              |
| TP1, TP3-TP10, TP12                             |    10 | Miniature PC test points, yellow                                              |
| TP2                                             |     1 | Miniature PC test point, red                                                  |
| TP11, TP13                                      |     2 | Miniature PC test points, black                                               |
| U1                                              |     1 | Single-port PSE controller (28 TQFN-EP) Maxim MAX5971BETI+                    |

TinyLogic is a registered trademark of Fairchild Semiconductor.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5971B Evaluation Kit Evaluates: MAX5971B

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                           |
|---------------|-------|-------------------------------------------------------------------------------------------------------|
| U2            |     1 | High-voltage linear regulator (6 TDFN-EP) Maxim MAX6765TTSD2+T                                        |
| U3, U4        |     2 | High-speed, 15Mbps logic gate optocouplers (8 SO) CEL/NEC PS9821-2-A                                  |
| U5            |     1 | TinyLogic M UHS dual buffer with Schmitt trigger inputs (6 SC70) Fairchild NC7WZ17P6X (Top Mark: Z17) |
| U6            |     1 | TinyLogic UHS dual buffer with open-drain outputs (6 SC70) Fairchild NC7WZ07P6X (Top Mark: Z07)       |
| U201          |     1 | 32-bit microcontroller (68 QFN-EP) Maxim MAXQ2000-RAX+                                                |
| U202          |     1 | 93C46-type 2-wire EEPROM (8 SO) Atmel AT93C46EN-SH-B                                                  |
| U203          |     1 | UART-to-USB converter (32 TQFP, 7mm x 7mm) FTDI FT232BL                                               |
| U204          |     1 | 3.3V, 300mA regulator (5 SOT23) Maxim MAX8888EZK33+T (Top Mark: ADQC)                                 |
| U205          |     1 | 2.5V, 120mA regulator (5 SC70) Maxim MAX8511EXK25+T (Top Mark: ADV)                                   |
| USB           |     1 | USB type-B right-angle female connector                                                               |
| Y201          |     1 | 16MHz crystal Hong Kong X'tals SSM1600000E18FAF                                                       |
| Y202          |     1 | 6MHz crystal Hong Kong X'tals SSL6000000E18FAF                                                        |
| -             |     4 | Rubber bumpers                                                                                        |
| -             |     1 | USB-A male to USB-B male cable, 6ft                                                                   |
| -             |     7 | Shunts ( JU1-JU7)                                                                                     |
| -             |     1 | PCB: MAX5971B EVALUATION KIT                                                                          |

## MAX5971B Evaluation Kit

## Evaluates: MAX5971B

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Bel Fuse Inc.                          | 201-432-0463 | www.belfuse.com             |
| CEL/NEC                                | 408588-2247  | www.cel.com                 |
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX5971B when contacting these component suppliers.

## MAX5971B EV Kit Files

| FILE                     | DESCRIPTION                                |
|--------------------------|--------------------------------------------|
| INSTALL.EXE              | Installs the EV kit files on your computer |
| MAX5971B.EXE             | Application program                        |
| FTD2XX.INF               | USB device driver file                     |
| POWER_ON.SMB             | Bitmap macro routine                       |
| TEST#1_MANUAL_MODE.SMB   | Bitmap macro routine                       |
| TEST#2_AUTO_MODE_DC.SMB  | Bitmap macro routine                       |
| TEST#3_AUTO_MODE_AC.SMB  | Bitmap macro routine                       |
| TEST#4_SEMIAUTO_MODE.SMB | Bitmap macro routine                       |
| UNINST.INI               | Uninstalls the EV kit software             |
| USB_Driver_Help.PDF      | USB driver installation help file          |

## Quick Start

## Required Equipment:

- MAX5971B	EV	kit	(USB	cable	included)
- -32V	to	-60V,	1A	capable	DC	power	supply
- User-supplied Windows	 2000, Windows	 XP, or Windows Vista PC with a spare USB port
- USB	 I/O	 extension	 cable,	 straight-through,	 male-tofemale cable
- Voltmeter	for	confirming	output	voltage

Warning: The GND banana jack is more positive than the VEE or RTN banana jack. Use an isolated oscilloscope for probing with respect to VEE or RTN.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

<!-- image -->

## Hardware Connections

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Visit www.maxim-ic.com/evkitsoftware to  download  the  latest  version  of  the  EV  kit  software, 5971BRXX.ZIP.  Save  the  EV  kit  software  to  a temporary folder and uncompress the ZIP file.
- 2) Install  the  EV  kit  software  on  your  computer  by running the INSTALL.EXE  program  inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Verify that a shunt is not installed on jumpers JU1 (ILIM1, Class 0-Class 4), JU2 (ILIM2, Class 0-Class 4), JU3 (PWM enabled), JU4 (midspan mode), and JU6 (AC disconnect).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 4) Verify that a shunt is installed on jumper JU5 (legacy mode  disabled)  and  on  pins  1-5  of  jumper  JU7 (0x40 address).
- 5) Connect the -32V to -60V DC power supply to the metal  VEE  banana  jack  and  the  supply  ground  to the  metal  GND  banana  jack.  Do  not  turn  on  the power supply until all connections are completed.
- 6) Connect a PD to the Ethernet output port RJ45 connector  (J2)  on  the  EV  kit's  MagJack  module.  This step is optional if network connectivity and/or a PD is not required.
- 7) Connect the EV kit's network data input port J1 LAN to  the  corresponding  data  LAN  connection. Note: This  step  is  optional  if  network  connectivity  is  not required.
- 8) Turn on the power supply and set it to -54V.
- 9) Connect the USB cable from the PC to the EV kit board.  A New Hardware Found window  pops  up when  installing  the  USB  driver  for  the  first  time. If  a  window  is  not  seen  that  is  similar  to  the  one described above after 30s, remove the USB cable from the board and reconnect it. Administrator privileges are required to install the USB device driver on Windows.
- 10)  Follow the directions of the Found New Hardware window  to  install  the  USB  device  driver.  Manually specify  the  location  of  the  device  driver  to  be C:\Program  Files\MAX5971B (default  installation directory) using the Browse button. During device driver  installation,  Windows  may  show  a  warning message  indicating  that  the  device  driver  Maxim uses  does  not  contain  a  digital  signature.  This  is not  an  error  condition  and  it  is  safe  to  proceed with installation. Refer to the USB\_Driver\_Help.PDF document included with the software for additional information.
- 11)  Start the EV kit software by opening its icon in the Start | Programs menu.
- 12)  Observe as the program automatically detects the USB interface circuit, starts the main program, and then detects the I 2 C-compatible address configured for the IC.
- 13)  Select the BitMap Controls tab at the top of the GUI (Figure 3).
- 14)  Load  and  run  the  Power\_on.smb  macro  program from the File  |  Open |  Run Macro menu bar. The script automatically runs after selecting Open.
- 15)  The network output port's yellow and green status LEDs on J2 should be lit.
- 16)  Four  other  example  macros  allow  quick  testing  of the  manual  mode,  auto  mode,  semiauto  mode,

<!-- image -->

## Evaluates: MAX5971B

and with DC and/or AC load-disconnect detection. These macros are:

- 	 TEST#1\_MANUAL\_MODE.SMB
- 	 TEST#2\_AUTO\_MODE\_DC.SMB
- 	 TEST#3\_AUTO\_MODE\_AC.SMB (JU6 not installed)
- 	 TEST#4\_SEMIAUTO\_MODE.SMB

Note: JU7 must be on pins 1-5 (0x40 address) for these macros.

- 17) Test points TP11, TP13 (VEE), and TP2 (GND) are provided on the PCB to observe the desired signals with  an  oscilloscope  or  voltage  meter. Use  an isolated oscilloscope for probing with respect to VEE or RTN.
- 18) Pressing  pushbutton  switch  SW1  shuts  down  the PSE output DC power and resets U1. The software must be relaunched after a pushbutton reset.

Note: The  GND  banana  jack  is  more  positive  than  the VEE  or  RTN  banana  jacks. Use  an  isolated  oscilloscope for probing with respect to VEE or RTN.

Note: An uninstall program is included with the software. Click on the UNINSTALL icon to remove the EV kit software from the hard drive.

## Detailed Description of Software

A mouse or the keyboard's Tab key is used to navigate various items on the main window (Figure 1). The EV kit software features three tabs: Configuration , Events and Status , and BitMap Controls . Most of the main window's available  functions  and  a  few  more  can  be  evaluated by using the pulldown menu. The left status bar at the bottom of the main window provides the USB interface circuit status. The center status bar provides the current EV kit and macro engine status.

## Software Startup

Upon starting the program, the EV kit software starts in the Auto Read state. The software automatically detects the Slave  Address and  begins  reading  the  contents of  each  register  from  the  IC,  updating  each  tab  sheet. The software starts up with the Events and Status tab selected.

## Events and Status Tab

The Events  and  Status tab  sheet  (Figure  1)  provides the  EV  kit's  system  and  port  events/status  information obtained from the IC registers. The System Events and Status group box provides system-level information on the  VEE  power  supply,  present  operating  mode,  and address in hexadecimal and decimal formats. The Port Events group box provides the PSE port event or change status. The Port Status group box provides the PSE port

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5971B Evaluation Kit

## Evaluates: MAX5971B

Figure 1. MAX5971B EV Kit Software (Events and Status Tab)

<!-- image -->

operating status during detection, classification, and current usage by the connected PD.

## Configuration Tab

The Configuration tab sheet (Figure 2) provides a highlevel  method  of  configuring  the  EV  kit  as  a  single-port PSE. System and port-level configurations can be made on  this  tab.  Also,  the  IC's  watchdog  timer,  IC,  or  the port  can  be  immediately  reset  using  the Reset button. All  other  configuration  changes  on  this  tab  take  place after the Update MAX5971B button has been pressed.

<!-- image -->

To  view  a  specific  port  event  or  status  after  updating, select the Events and Status tab. The port's operating mode,  disconnect  mode,  detection/classification,  and various power settings can be set independently. After configuring  the  port  or  making  system  changes,  press the Update MAX5971B button to write these changes to the IC, thus updating the EV kit's PSE port. Certain configurations may not be enabled, depending on the IC's current state or status.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5971B Evaluation Kit

## Evaluates: MAX5971B

Figure 2. MAX5971B EV Kit Software (Configuration Tab)

<!-- image -->

## BitMap Controls Tab

The BitMap Controls tab (Figure 3) provides a bit-level method of configuring the EV kit as a single-port PSE. The IC's register contents are placed on the appropriate line of the Register Read tables in binary and hexadecimal format. If data changes between the next register read, the  updated  register  hexadecimal  data  is  displayed  in red and blinks four times. The blink rate can be changed in the Commands | Red Hex Data Blink Rate menu bar. The status bar at the bottom left of the main window indicates the USB interface circuit status. The center status bar indicates the current EV kit and macro engine status.

<!-- image -->

## Autoread and Run-Macro State Controls

When  the Auto  Read checkbox  is  checked,  the  program continuously updates the main window registers and is operating in the autoread state. In the autoread state, data can be written to the IC by entering or selecting the desired data in the Register Address and Hexadecimal Data or Binary Data combo boxes. Pressing the Write Byte button writes the combo box data to the IC. To perform an immediate register read, enter or select the desired Register Address and press the Read Byte button. Hexadecimal or binary data can be entered into the Hexadecimal Data or Binary Data combo boxes and then the alternate combo box displays the corresponding number in the respective number base.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5971B Evaluation Kit

## Evaluates: MAX5971B

Figure 3. MAX5971B EV Kit Software (BitMap Controls Tab)

<!-- image -->

If the Auto Read checkbox is unchecked, the program's main window displays register data from the last read. To obtain current data, a Read Byte must be performed after selecting the appropriate register address from the Register Address combo box. Autoread state does not read the clear-on-read (CoR) registers.

A macro can be run after loading the file from the File | Open Macro menu bar. The opened macro is displayed in the upper half of the Macro edit field and has an smb file extension. Pressing the Run button runs the macro to completion, with the output displayed in the Macro Script Output edit field. Each edit box can be sized relative to the  other  half  using  the  splitter  bar  above  the Script Output text. Pressing the Single Step button instead of the Run button causes the macro to execute a single line with each activation of the Single Step button. The Reset button is used to reset the macro script engine and clear the Macro Script Output edit field. A macro can be run regardless of the Auto Read checkbox status. A macro can also be run immediately after opening by using the File | Open/Run Macro menu item, selecting the desired macro to run, and pressing the Open button.  Pressing the Cancel button exits this feature.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The Locate Slave button is used to search for a device located  on  the  I 2 C  serial  interface  whose  address  has been changed while the software was running. The valid IC slave addresses are configured by jumper JU7 to one of  four  addresses:  0x40,  0x42,  0x44,  or  0x46.  The  IC does respond to global address 0x60, although the EV kit hardware cannot be set to this specific address.

## Record Macro State Controls

When  the Record checkbox  is  checked,  the  program automatically enters the record macro state and disables certain  buttons  and  menus.  Selecting  the Commands |  Clear  Script  Input menu  item  clears  any  script  currently in the Macro script input edit field. Comment lines in a macro script begin with a # / ; ' * character. A line of  script  is  entered  by  selecting  the  appropriate Slave Address , Register  Address ,  and  entering  the  desired Hexadecimal  Data or Binary  Data in  the  respective combo box. Pressing the Write Byte or Read Byte button then enters the script into the Macro input edit field. For  time  delays  in  a  macro,  select  the  desired  delay time from the combo box on the right side of the Delay button and then press the Delay button. The macro must be saved before exiting the record macro state using the File | Save Macro menu item. The macro file must have an smb file extension name.

To edit a previously saved macro, open the macro using the File | Open Macro menu item and make the desired edits. The modified file must be saved prior to exiting the record  macro  state.  Uncheck  the Record checkbox  to exit the record macro state. Additionally, a macro can be created or edited using a plan text editor in 'text mode.' The file must be saved with an smb extension.

## General-Purpose Advanced User Interface Utility

There  are  two  methods  for  communicating  with  the IC:  through  the  main  window  display  or  through  the general-purpose Advanced User Interface utility  using the View  |  Interface menu  item.  The  utility  configures the  I 2 C  interface  parameters,  such  as  start  and  stop bits,  acknowledgments,  and  clock  timing.  The 2-wire interface tab (Figure 4) allows the user to send generalpurpose  I 2 C  commands  using  the SMBus-WriteByte/ ReadByte and WriteWord/ReadWord commands.  For more  information  on  the  differences  between  the  I 2 C interface and the SMBus K interface, refer to Application Note  476: Comparing the I 2 C  Bus  to  SMBus ,  available at www.maxim-ic.com .  When  using  the Advanced User Interface utility, the main window display no longer keeps  track  of  changes  sent  to  hardware.  The  EV  kit can be reinitialized to the startup screen settings by first closing the Advanced User Interface utility, resetting the

SMBus is a trademark of Intel Corp.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5971B Evaluation Kit Evaluates: MAX5971B

IC by pressing the reset pushbutton switch (SW1), and relaunching the software.

The Hunt  for  active  listeners button  scans  the  entire 2-wire  address  space,  reporting  each  address  that is  acknowledged.  The SMBusWriteByte transmits  the device  address,  command,  and  1  byte  of  data.  The SMBusReadByte transmits  the  device  address,  command,  and  then  retransmits  the  device  address  and reads  1  byte  of  data.  The SMBusWriteWord and SMBusReadWord operate the same, except 2 bytes of data are used.

## General Troubleshooting Problem:  Software  reports  it  cannot  find  the  USB interface circuit.

- Is	the	USB	communications	cable	connected?
- Is	the	USB	interface	circuit	power	LED	(D201)	lit?
- Has	 Windows	 plug-and-play	 detected	 the	 board? Bring up Control Panel → System → Device Manager, and look at what device nodes are indicated for the USB. If there is an unknown device node attached to the  USB,  delete  it-this  forces  plug-and-play  to  try again.

## Problem: Software reports MAX5971B IC not found, exiting program.

- Are	the	OPTO\_SCL	and	OPTO\_SDA	signals	pulled	up to	OPTO\_VCC	(3.3V)?
- If	 using	 jumper	 wires	 to	 connect,	 could	 the	 OPTO\_ SCL	and	OPTO\_SDA	signals	be	swapped?	Could	the OPTO\_GND	ground	return	be	missing?

## Detailed Description of Hardware

The  MAX5971B  EV  kit  features  a  10/100/1000BASETX  Ethernet  single-port  PSE  controller  circuit  for  -54V supply  rail  systems.  The  EV  kit's  PSE  circuit  uses  the IEEE  802.3af/at-compliant  MAX5971B  PSE  controller featuring an integrated n-channel power MOSFET and an on-board single 1Gb x 1Gb MagJack module (integrated in J2) to form the basic portion of a PSE circuit. The EV kit  has  been designed as an IEEE 802.3af/at-compliant PSE  and  demonstrates  all  the  required  functions  such as  PD  discovery,  classification,  current-limit  control  of a  connected  PD  at  the  Ethernet  output  port,  and  AC-/ DC-disconnect detection. A PC can be used to communicate with the slave device over the I 2 C interface, optically coupled logic, and the 2-wire-to-USB-port interface circuit.

The  EV  kit  PSE  circuit  requires  a  -32V  to  -60V  power supply  (-54V  supply  rail)  capable  of  supplying  1A  or more to the EV kit's GND and VEE metal banana jacks or

## MAX5971B Evaluation Kit

## Evaluates: MAX5971B

Figure 4. Advanced User Interface Window (2-Wire Interface Tab)

<!-- image -->

PCB pads. A separate +3.3V power supply capable of supplying 35mA is also required for the IC's optically isolated  I 2 C-compatible  2-wire  interface  when  the  optically isolated  USB  interface  circuit  is  not  used.  A  MAX6765 linear regulator (U2) provides the required +3.3V for the optical isolation at the PSE side.

The IC controls the -54V DC power to the output port by regulating  the  port's  current.  The  current  is  fed  to  the J2  Ethernet  output  port's  RJ45  output  module.  An  IEEE 802.3af/at-compliant  PD  connects  to  the  Ethernet  output  port  (J2)  on  the  EV  kit.  The  PD  can  be  located  up to  350ft  from  the  EV  kit  when  connected  with  a  twisted 4-pair  Ethernet  cable.  The  10/100/1000BASE-TX  magnetic  module  (J2)  is  decoupled  to  the  EV  kit's  chassis ground  internally.  The  EV  kit's  isolated  chassis  ground (Chassis\_GND) PCB pad connects to the network system ground.  Note  that  the  10/100/1000BASE-TX  magnetic output module RJ45 jack (J2) is rated for up to 700mA of current. See the 35W or More Power Operation Without an Ethernet Connection section for operation at or above 35W.

<!-- image -->

The  EV  kit  features  configurable  operational  modes, PD  detection  (including  legacy  PD  detection),  PD classification,  overcurrent  protection,  current  foldback, undervoltage/overvoltage  protection  (+28.5V,  +62.5V (typ)  (GND  -  VEE)),  respectively),  AC-/DC-disconnect monitoring,  high-power  Class  5  mode  operation,  and port  current  information  through  the  I 2 C  interface.  The Class 5 overcurrent and current-limit protection can be reconfigured  through  jumpers  or  can  be  programmed through the software.

The  IC  starts  up  in  automatic  operation  mode  and pushbutton switch SW1 can be used to reset the IC or enter shutdown mode. Semiautomatic and manual modes can only be accessed through their respective register using  the  software's  high-level Configuration window.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

PD-blocking  diode  D4  can  be  bypassed  to  reduce power  dissipation  when  AC-disconnect  monitoring  is not  required.  The  IC  features  an  internal  triangularwave oscillator for AC-disconnect detection and can be bypassed to operate in DC-disconnect detection mode. The internal oscillator must be shut down using jumper JU6 if AC-disconnect detection is not required.

The output port also features a 600W overvoltage transient  suppressor  diode  (D2)  and  decoupling  capacitor (C5)  for  transient  protection  at  the  output  port.  The  EV kit's input port power rails (GND and VEE) are protected by reverse-protection diode D5.

Test points and jumpers have been provided for voltage probing and current measurements of the power circuit. Additionally, since the GND is more positive than VEE or  RTN,  use  an  isolated  oscilloscope  when  probing signals with respect to VEE or RTN. Yellow and green LEDs  on  output  module  J2  indicate  when  the  port's power is turned on and the PoE status, respectively.

The EV kit can also be reconfigured for interfacing without  connecting  to  an  Ethernet  system.  Banana  jacks are  included  for  the  PSE  GND  and  RTN  output  power sources  for  this  method  of  evaluation. Since  the  GND is  more  positive  than  VEE  or  RTN,  use  an  isolated oscilloscope  when  probing  signals  with  respect  to VEE or RTN.

The EV kit provides optical isolation for the I 2 C-compatible 2-wire interface, required by the IC operating as a slave device,  by  optical  couplers  U3  and  U4.  The  optically isolated  interface  connects  to  a  computer's  USB  port through  the  USB  interface  circuit.  The  EV  kit's  I 2 Ccompatible  2-wire  interface  can  be  reconfigured  for interfacing  to  a  stand-alone  microcontroller  for  isolated (2-wire) or nonisolated (2-wire) serial operation. A separate +3.3V power supply capable of supplying 35mA is required  for  the  IC's  nonisolated  I 2 C-compatible  2-wire interface.

The optical  isolation  consists  of  optocoupler  U3,  which provides galvanic isolation for the serial-interface clock line (SCL) and serial-interface input data line (SDA) signals. Optocoupler U4 provides galvanic isolation for the serial  output  and  data  line  (SDA)  and INT signals.  The SCL  and  SDA  signals'  2-wire  serial  interface  are  combined on the isolated 2-wire side prior to feeding logic buffers U5 and U6. The respective two-hole PCB pads (OPTO\_SCL, OPTO\_SDA, OPTO\_ INT ,  OPTO\_GND, and OPTO\_VCC)  are  used  for  2-wire  isolated  stand-alone operation. For nonisolated stand-alone 2-wire operation, jumper JU8 shorting traces must be cut open and then the SCL, SDA, INT , and 3\_3V PCB jumper holes must be connected  to  the  microcontroller  circuit. Note: The  EV kit's provided 3\_3V is at +3.3V. The OPTO\_GND, GND, and  VEE  planes  are  isolated  by  the  optical  couplers.

<!-- image -->

## MAX5971B Evaluation Kit Evaluates: MAX5971B

## Since the GND is more positive than VEE or RTN, use an  isolated  oscilloscope  when  probing  signals  with respect to VEE or RTN.

The device slave address is configured by jumper JU7 and can be configured to one of four addresses: 0x40, 0x42, 0x44, or 0x46. Global address 0x60 is accepted by the IC regardless of the jumper settings. See Table 9 for more information on setting the device slave address.

## Jumper Selection

The EV kit features several jumpers to reconfigure the kit for various PSE configurations, operating modes, and PD requirements.  Additionally,  PCB  pads  and  jumpers  are provided for connecting an external microcontroller and setting the I 2 C slave address, respectively.

## High-Power Class 5 and ILIM1/ILIM2 Selection

The  EV  kit  features  two  jumpers  to  configure  the  IC's PSE PD classification mode, Class 0-Class 4 mode, or high-power  Class  5  mode.  Jumper  JU1  sets  the  IC's ILIM1 configuration and JU2 sets the ILIM2 configuration. Table 1 lists the jumper options for the modes used to detect a valid PD connected to the PSE Ethernet output port. Refer to the MAX5971B IC data sheet for more information on all classification modes available.

## LED Driver PWM Enable and Port PoE Status

The EV kit features a 2-pin jumper (JU3) to enable or disable the IC's internal PWM driver for the LED pin. The IC's LED pin also serves as a port-status indicator using the LED driver. The RJ45 connector (J2), providing data and power at the output port, features 2 LEDs-a yellow LED indicating that the EV kit is powered by -54V and a green PSE port-status LED. Table 2 lists the LED driver jumper options  and  Table  3  provides  the  port  status.  Refer  to the MAX5971B IC data sheet for more information on the multifunction LED features.

## Midspan/End-Point PoE Selection and Configuration

The EV kit features a 2-pin jumper (JU4) to set the IC for midspan  or  end-point  operation.  The  PSE  circuit  must also  be  reconfigured  for  operating  in  midspan  or  endpoint configuration.

Table  4  lists  the  jumper  options  and  Table  5  lists  the PSE  circuit  resistor  changes  for  the  two  configurations of operation. In Table 5, installed resistors are 0 I , 1206 surface-mount components. Refer to the MAX5971B IC data sheet for more information on the configurations.

## Legacy High-Capacitance-Detection Operation

The EV kit features a 2-pin jumper (JU5) to set the IC's initial startup legacy operational mode. In legacy mode, PD signature capacitances up to 47 F F (typ) are accepted. Table 6 lists the jumper options. Refer to the MAX5971B IC data sheet for more information.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 1. ILIM1/ILIM2 Functions (JU1, JU2)

| IC CLASSIFICATION   | ILIM1 PIN (JU1)   | ILIM2 PIN (JU2)   | OVERCURRENT THRESHOLD (mA)   | CURRENT LIMIT (mA)   |
|---------------------|-------------------|-------------------|------------------------------|----------------------|
| Class 0-Class 4*    | Not installed     | Not installed     | Class 5 disabled             | Class 5 disabled     |
| Class 5             | Installed         | Not installed     | 748                          | 850                  |
| Class 5             | Not installed     | Installed         | 792                          | 900                  |
| Class 5             | Installed         | Installed         | 836                          | 950                  |

Table 2. PWMEN Functions (JU3)

| SHUNT POSITION   | PWMEN PIN                             | LED PWM OPERATION   |
|------------------|---------------------------------------|---------------------|
| Not installed*   | Internally pulled high                | Enabled             |
| Installed        | Connected to VEE through resistor R12 | Shutdown            |

## Table 4. Midspan Functions (JU4)

| SHUNT POSITION   | MIDSPAN PIN                           | PSE CONFIGURATION   |
|------------------|---------------------------------------|---------------------|
| Not installed*   | Internally pulled high                | Midspan             |
| Installed        | Connected to VEE through resistor R13 | End point           |

## Table 5. PSE Circuit Changes for Midspan/End-Point Configuration

|               | RESISTOR      | RESISTOR      | RESISTOR      | RESISTOR      |
|---------------|---------------|---------------|---------------|---------------|
| CONFIGURATION | R5            | R6            | R7            | R8            |
| Midspan*      | Not installed | Not installed | Installed     | Installed     |
| End point     | Installed     | Installed     | Not installed | Not installed |

* Default position.

## Table 6. Legacy Modes (JU5)

| SHUNT POSITION   | LEGACY PIN                            | LEGACY MODE                      |
|------------------|---------------------------------------|----------------------------------|
| Not installed    | Internally pulled high                | Enabled, detect high capacitance |
| Installed*       | Connected to VEE through resistor R15 | Disabled                         |

* Default position.

Table 7. OSC and AC-/DC-Disconnect-Detection Functions (JU6)

|                |                                       | RESISTOR      | RESISTOR      | DISCONNECT-DETECTION MODE                              |
|----------------|---------------------------------------|---------------|---------------|--------------------------------------------------------|
| SHUNT POSITION | OSC PIN                               | R3            | R9            |                                                        |
| Installed      | Connected to VEE                      | Not installed | Installed     | DC-disconnect detection                                |
| Not installed* | Connected to VEE through capacitor C6 | Installed     | Not installed | AC-disconnect detection, uses IC's internal oscillator |

<!-- image -->

Table 3. Green LED Status (J2)

| GREEN LED          | J2 PORT STATUS                                            |
|--------------------|-----------------------------------------------------------|
| Off                | Not powered or disconnected                               |
| On                 | Powered, valid PD                                         |
| Blinking 2 flashes | Overcurrent fault during power-on                         |
| Blinking 5 flashes | Detected invalid low-/high-discovery signature resistance |

## MAX5971B Evaluation Kit Evaluates: MAX5971B

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## AC-Disconnect Monitoring Oscillator and AC-/DC-Disconnect Operation

The EV kit features a 2-pin jumper (JU6) to disable the IC's  internal  triangular-wave  oscillator  at  the  OSC  pin. The  oscillator  is  used  for  AC-disconnect  monitoring  of the  PD  and  is  disabled  for  DC-disconnect  operation. For  AC-disconnect  operation,  the  internal  oscillator  is used along with RCD components R3, C4 and D3, and blocking-diode D4. Perform a power-on or reset the IC using switch SW1 to effect the changes.

For  DC-disconnect  operation,  shut  down  the  internal oscillator  by  installing  a  shunt  on  jumper  JU6.  Then remove resistor R3 and install a 0 I 0402 surface-mount resistor  on  the  R9  pads  to  bypass  blocking-diode  D4. Diode D3 remains installed. Refer to the AC Disconnect Monitoring and DC  Disconnect  Monitoring sections  in the MAX5971B IC data sheet for additional information. Table 7 lists the jumper options for the oscillator and AC/ DC configurations. Refer to the MAX5971B IC data sheet for more information.

## Reset/Shutdown and Automatic Modes

The  EV  kit  features  switch  SW1  to  reset  the  IC  or  set the  IC's  initial  startup  operational  mode  to  auto  mode. Semiautomatic and manual modes can only be accessed through  their  respective  register  using  software.  Refer to  the  MAX5971B  IC  data  sheet  for  more  information. Table 8 lists the switch options.

## I 2 C-Compatible 2-Wire Slave address Selection

The EV kit features a 2-pin jumper (JU7) to set the slave address to one of four addresses: 0x40, 0x42, 0x44, or 0x46 of the slave address on the I 2 C-compatible 2-wire interface.  Global  address  0x60  is  accepted  by  the  IC regardless of the jumper settings. The EV kit's software automatically  sets  the  LSB  for  the  proper  read/write command. Table 9 lists the jumper addressing options.

## Stand-Alone Microcontroller Interface (Isolated/Nonisolated)

The EV kit features PCB pads and a jumper to interface directly with a microcontroller. The 8-pin (2 x 4) jumper (JU8)  has  shorting  connections  on  the  bottom  layer that  must  be  cut  open  to  disable  the  optical  coupler interface for nonisolated evaluation. The jumper shorting connections must be in place for evaluating an isolated stand-alone microcontroller interface. Table 10 lists  the selectable jumper options.

<!-- image -->

## MAX5971B Evaluation Kit

## Evaluates: MAX5971B

## 35W or More Power Operation Without an Ethernet Connection

The 10/100/1000BASE-TX magnetic output module RJ45 jack (J2) is rated for up to 700mA of current and cannot be used for PSE operation at greater than 35W  power. The  EV  kit  features  PCB  pads  and  banana  jacks  to interface directly with the EV kit's output port power when operating at 35W or more. Use the GND and RTN PCB pads or jacks to access the output port's power without an Ethernet connection.

## External +3.3V Operation

The  EV  kit's  on-board  +3.3V  linear  regulator  circuit can  be  reconfigured  to  operate  the  EV  kit  circuit  with an  externally  supplied  +3.3V  DC  source.  The  EV  kit's on-board  linear  regulator  (U2)  must  be  disabled  and several  components reconfigured to operate the EV kit with an externally supplied +3.3V source as follows:

- Cut	open	the	shorting	traces	on	resistors	R31	and	R32 pads.
- Connect	 the	 external	 +3.3V	 ground	 terminal	 to	 the VEE PCB pad or VEE test point (TP13 or TP11).
- Connect	the	external	supply	positive	to	the	3\_3V	test point (TP12).

The externally supplied +3.3V DC source must be able to supply 50mA of current or more.

## IC Pins' Signal Measurements

The  EV  kit  features  test  points  to  facilitate  voltage measuring  at  the  ports'  respective  LED,  ILIM1,  ILIM2, PWMEN, MIDSPAN, LEGACY, and EN pin signals of the IC. For the VEE connection, test points TP11 and TP13 can be used.

The output port current can be measured by replacing any output port single resistor (R5 or R6) when operating in midspan, or when operating in end point (R7 or R8). Replace  the  respective  resistor  with  a  1 I Q 1%  1206 surface-mount resistor.

## J2 Port LED Status +3.3V Operation

The  EV  kit's  J2  port  green  LED  status  indicator  is configured to operate from the -54V supply. Alternatively, the  green  LED  status  indicator  can  be  reconfigured  to operate off the on-board +3.3V linear regulator circuit. To evaluate this mode of operation, two components on the EV kit must be reconfigured as follows:

- Remove	resistor	R29.
- Install	a	200 I 0805 surface-mount resistor at R30.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 8. EN Operational Modes (SW1)

| SWITCH POSITION   | EN PIN                                | EV Kit OPERATION MODE   |
|-------------------|---------------------------------------|-------------------------|
| Not pressed       | Internally pulled high                | Automatic               |
| Pressed           | Connected to VEE through resistor R16 | Reset or shutdown       |

Table 9. AD0 Slave Address Selection (JU7)

| SHUNT POSITION (AD0 BIT)   | AD0 PIN           | SLAVE ADDRESS   | READ/WRITE   |
|----------------------------|-------------------|-----------------|--------------|
| 1-5*                       | Connected to VEE  | 0x40            | Read         |
| 1-5*                       | Connected to VEE  | 0x41            | Write        |
| 1-3                        | Connected to 3_3V | 0x42            | Read         |
| 1-3                        | Connected to 3_3V | 0x43            | Write        |
| 1-2                        | Connected to SCL  | 0x44            | Read         |
| 1-2                        | Connected to SCL  | 0x45            | Write        |
| 1-4                        | Connected to SDA  | 0x46            | Read         |
| 1-4                        | Connected to SDA  | 0x47            | Write        |

Table 10. Jumper JU8 and Microcontroller PCB Pads Function

| JU8 PIN NUMBER SHORT POSITION   | ISOLATION MODE   | EV KIT PCB PAD TO MICROCONTROLLER CONNECTION                           |
|---------------------------------|------------------|------------------------------------------------------------------------|
| 1-2 (Shorted)*                  | Isolated         | OPTO_VCC PCB pad connects to the microcontroller +3.3V power supply.   |
| 3-4 (Shorted)*                  | Isolated         | OPTO_SCL PCB pad connects to the microcontroller serial-clock line.    |
| 5-6 (Shorted)*                  | Isolated         | OPTO_SDA PCB pad connects to the microcontroller SDA data line.        |
| 7-8 (Shorted)*                  | Isolated         | OPTO_ INT PCB pad connects to the microcontroller interrupt pin.       |
| -                               | Isolated         | OPTO_GND PCB pad connects to the microcontroller power-supply ground.  |
| 1-2 (Cut open)**                | Nonisolated      | JU8-2: 3_3V pin receives power from the microcontroller supply.        |
| 3-4 (Cut open)                  | Nonisolated      | JU8-4: SCL pin connects to the microcontroller serial-clock line.      |
| 5-6 (Cut open)                  | Nonisolated      | JU8-6: SDA pin connects to the microcontroller SDA data line.          |
| 7-8 (Cut open)                  | Nonisolated      | JU8-8: INT pin connects to the microcontroller interrupt pin.          |
| **                              | Nonisolated      | TP11 or TP13: VEE connects to the microcontroller power-supply ground. |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5971B Evaluation Kit

## Evaluates: MAX5971B

## MAX5971B Evaluation Kit

## Evaluates: MAX5971B

<!-- image -->

Figure 5a. MAX5971B EV Kit Schematic-Controller Circuit (Sheet 1 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5971B Evaluation Kit

## Evaluates: MAX5971B

<!-- image -->

Figure 5b. MAX5971B EV Kit Schematic-LDO and Optical Coupler Circuit (Sheet 2 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5971B Evaluation Kit

## Evaluates: MAX5971B

<!-- image -->

Figure 5c. MAX5971B EV Kit Schematic-USB Interface Circuit (Sheet 3 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5971B Evaluation Kit

## Evaluates: MAX5971B

<!-- image -->

Figure 6. MAX5971B EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5971B Evaluation Kit

## Evaluates: MAX5971B

<!-- image -->

Figure 7. MAX5971B EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5971B Evaluation Kit

## Evaluates: MAX5971B

<!-- image -->

Figure 8. MAX5971B EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX5971BEVKIT# | EV KIT |

# Denotes RoHS compliant.

21

## MAX5971B Evaluation Kit Evaluates: MAX5971B

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.