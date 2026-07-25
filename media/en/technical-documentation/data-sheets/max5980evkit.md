<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX5980 evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  circuit  board  featuring  an Ethernet 4-port power-sourcing equipment (PSE) circuit for -48V or -54V supply rail systems. The IEEE M 802.3af/ at-compliant MAX5980 PSE controller, in a 32-pin TQFNEP  package,  and  four  n-channel  power  MOSFETs  are used to form the main PSE circuit on the EV kit. The IC is used in Power-over-Ethernet (PoE) applications requiring DC power over four Ethernet network ports. The EV kit provides  optical  isolation  for  the  I 2 C-compatible  3-wire interface.  The  isolated  interface  can  connect  to  a  PC's USB  port  through  an  on-board  USB  interface  circuit. The EV kit can easily be reconfigured for interfacing to a user's stand-alone microcontroller for isolated or nonisolated operation. In stand-alone operation, the user must supply  a  separate  3.3V  power  supply  (with  respect  to VEE) capable of supplying 100mA for the EV kit's +3.3V optically isolated 3-wire interface.

The  EV  kit  requires  a  -32V  to  -60V  power  supply (-48V/-54V supply rail) capable of supplying 4A or more to  the  EV  kit  for  powering  the  powered  device  (PD) through the four 10/100/1000BASE-TX Ethernet network ports. The EV kit demonstrates PD discovery, classification, current-limit control, and other functions of an IEEE 802.3af/at-compliant PSE circuit.

The IC controls the -48V/-54V DC power to each of the four  Ethernet  network  ports  by  controlling  the  ports' power MOSFET and sensing current through the respective port's current-sense resistor. The current is fed to a 10/100/1000BASE-TX magnetic module at each Ethernet output port. The EV kit provides a separate, independent power channel for each of the four Ethernet output ports.

The EV kit demonstrates the full functionality of the IC for each  power  channel,  such  as  configurable  operational modes, high-power mode (programmable up to 30W per port or up to 60W in a 2 x 2 pair configuration), port current information through the I 2 C interface, PD detection, PD  classification,  overcurrent  protection,  current  foldback, under/overvoltage protection, and DC disconnect monitoring. All these features are configurable on the EV kit. Additional test points for voltage probing and current measurements have also been provided.

The  EV  kit  includes  Windows  XP M -,  Windows  Vista M -, and  Windows M 7-compatible  software  and  provides  a user-friendly  interface  to  demonstrate  the  features  of  the IC, while also providing access to each register at the bit level. The program is menu-driven and offers a graphical user interface (GUI) with control buttons. The program also includes  a  macro  engine  to  allow  automated  evaluation and testing  of  the  IC  at  the  system  level.  The  program's macro output files can be automatically saved.

## MAX5980 Evaluation Kit Evaluates: MAX5980

Features

- S IEEE 802.3af/at-Compliant PSE Circuit
- S High-Power Mode (Programmable Up to 30W per Port or Up to 60W in a 2 x 2 Pair Configuration)
- S Port Current Readout Through the I 2 C Interface
- S Input Voltages
-  -32V to -60V Providing 4A (-48V/-54V Power Circuit, 1A/Port)
- S Ethernet Network Ports
-  Four RJ45 10/100/1000BASE-TX Ethernet Network Input Ports
-  Four RJ45 10/100/1000BASE-TX Ethernet Network Output PoE Ports
- S Demonstrates Four Separate Independent Power Switch Controllers
- S Demonstrates PD Detection and Classification
- S DC Load Removal Detection and Disconnect Monitoring
- S Convenient Voltage and Current Test Points
- S Four Output-Port LED Status Indicators
- S Optically Isolated I 2 C-Compatible 3-Wire PC Interface
- S Reconfigurable for Stand-Alone Operation or with an External Microcontroller (Requires a +3.3V, 100mA Supply)
- S Windows XP-, Windows Vista-, and Windows 7-Compatible Software
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

IEEE is a registered service mark of the Institute of Electrical and Electronics Engineers, Inc.

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

| DESIGNATION                           |   QTY | DESCRIPTION                                                                  |
|---------------------------------------|-------|------------------------------------------------------------------------------|
| C1                                    |     1 | 220 F F Q 20%, 100V electrolytic capacitor (18 x 16.5) Panasonic EEVFK2A221M |
| C3, C214                              |     2 | 1 F F Q 10%, 10V X5R ceramic capacitors (0603) Murata GRM188R61A105K         |
| C6                                    |     1 | 1 F F Q 10%, 100V X7R ceramic capacitor (1210) AVX 12101C105KAT9A            |
| C7                                    |     1 | 1000pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102K         |
| C8                                    |     1 | 10 F F Q 20%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J106M        |
| C9                                    |     1 | 0.033 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C333K      |
| C10, C11, C12, C17                    |     0 | Not installed, ceramic capacitors (0805)                                     |
| C13, C18, C26-C29                     |     6 | 0.1 F F Q 10%, 100V X7R ceramic capacitors (0805) AVX 08051C104KA            |
| C36, C38, C201, C203-C210, C217, C221 |    13 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K       |
| C202, C213, C215                      |     3 | 10 F F Q 20%, 6.3V X5R ceramic capacitors (0805) Murata GRM21BR60J106M       |
| C211, C212                            |     2 | 10pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H100J           |
| C216                                  |     1 | 2.2 F F Q 10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J225K       |
| C218, C219                            |     2 | 22pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H220J           |
| C220                                  |     1 | 3300pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H332K         |
| D9-D12                                |     4 | 60V, 600W transient voltage suppressors (SMB) Fairchild SMBJ54A              |

MagJack is a registered trademark of Bel Fuse Inc.

## MAX5980 Evaluation Kit Evaluates: MAX5980

## Component List

| DESIGNATION                                         |   QTY | DESCRIPTION                                                                                                                                                                               |
|-----------------------------------------------------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D13-D16                                             |     4 | Green surface-mount LEDs (1206)                                                                                                                                                           |
| D22                                                 |     1 | 60V, 6.2A transient voltage- suppressor diode (SMB) Diodes Incorporated SMBJ60A-13-F                                                                                                      |
| D201                                                |     1 | Green LED (0603)                                                                                                                                                                          |
| FB201                                               |     0 | Not installed, ferrite bead (0603)                                                                                                                                                        |
| GND, VEE                                            |     2 | Uninsulated banana jacks                                                                                                                                                                  |
| GND                                                 |     4 | Red miniature PC test point                                                                                                                                                               |
| J2                                                  |     1 | RJ45 2 x 4 gigabit MagJack M , 1000 Base-T, 2 x 4 ports, voice- over-IP magnetics (720mA DC) Bel Fuse Inc. 08542x4RZ5AF or Pulse Engineering J0B-306NL-Rev MX1 or Delta Electronics, Inc. |
| JU1-JU6                                             |     6 | 3-pin headers                                                                                                                                                                             |
| JU8                                                 |     1 | 2-pin header                                                                                                                                                                              |
| JU9                                                 |     0 | Not installed, 10-pin (2 x 5) header                                                                                                                                                      |
| JU10, JU23-JU27, JU29, JU31-JU40                    |     0 | Not installed, 2-pin headers                                                                                                                                                              |
| JU11-JU14                                           |     0 | Not installed, 4-pin (2 x 2) headers                                                                                                                                                      |
| JU28, JU30                                          |     0 | Not installed, 3-pin headers                                                                                                                                                              |
| N1-N4                                               |     4 | 100V, 3.3A n-channel MOSFETs (Power 33) Fairchild FDMC3612                                                                                                                                |
| N5-N8                                               |     4 | 100V, 0.17A n-channel MOSFETs (SOT23) Fairchild BSS123                                                                                                                                    |
| P201                                                |     1 | -20V, -2.4A, p-channel MOSFET (3 SuperSOT) Fairchild FDN304P                                                                                                                              |
| R1-R4                                               |     4 | 0.250 I Q 1%, 1W resistors (1206) IRC LRC-LR1206LF-01-R250-F                                                                                                                              |
| R5, R24, R27, R32, R64                              |     5 | 10 I Q 5% resistors (0603)                                                                                                                                                                |
| R6                                                  |     1 | 1.8k I Q 5% resistor (0603)                                                                                                                                                               |
| R9-R15, R17, R29, R30, R51, R53, R54, R77, R95, R96 |    16 | 3k I Q 5% resistors (0603)                                                                                                                                                                |

| DESIGNATION                        |   QTY | DESCRIPTION                                                                         |
|------------------------------------|-------|-------------------------------------------------------------------------------------|
| R16, R19, R26, R28, R31, R34, R201 |     7 | 0 I Q 5% resistors (0603)                                                           |
| R25, R33, R36, R57                 |     0 | Not installed, resistors (0603) 2k I Q 5% recommended                               |
| R55                                |     1 | 75 I Q 5% resistor (0603)                                                           |
| R56, R71, R94, R97                 |     4 | 200 I Q 5% resistors (0603)                                                         |
| R58-R61                            |     4 | 5.1k I Q 5% resistors (0603)                                                        |
| R62, R63, R66, R67, R208           |     5 | 1k I Q 5% resistors (0603)                                                          |
| R68                                |     1 | 0 I Q 5% resistor (0805)                                                            |
| R73-R76                            |     4 | 300k I Q 5% resistors (0603)                                                        |
| R202                               |     1 | 220 I Q 5% resistor (0603)                                                          |
| R203                               |     1 | 10k I Q 5% resistor (0603)                                                          |
| R204                               |     1 | 2.2k I Q 5% resistor (0603)                                                         |
| R205                               |     1 | 1.5k I Q 5% resistor (0603)                                                         |
| R206, R207                         |     2 | 27 I Q 5% resistors (0603)                                                          |
| SW1                                |     1 | Micro-miniature pushbutton switch                                                   |
| U1                                 |     1 | High-power quad PSE controller (32 TQFN-EP*) Maxim MAX5980GTJ+                      |
| U7, U8                             |     2 | High-speed 15Mbps logic-gate optocouplers (8 SO) CEL/NEC PS9821-2-AX                |
| U9                                 |     1 | TinyLogic UHS dual buffer with Schmitt trigger inputs (6 SC70) Fairchild NC7WZ17P6X |

## MAX5980 Evaluation Kit Evaluates: MAX5980

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION         |   QTY | DESCRIPTION                                                     |
|---------------------|-------|-----------------------------------------------------------------|
| U10                 |     1 | High-voltage linear regulator (6 TDFN-EP*) Maxim MAX6765TTSD2+T |
| U201                |     1 | 32-bit microcontroller (68 QFN-EP*) Maxim MAXQ2000-RAX+         |
| U202                |     1 | 93C46 type 3-wire EEPROM (8 SO)                                 |
| U203                |     1 | UART-to-USB converter (32 TQFP, 7mm x 7mm)                      |
| U204                |     1 | 3.3V, 300mA regulator (5 SOT23) Maxim MAX8888EZK33+T            |
| U205                |     1 | 2.5V, 120mA regulator (5 SC70) Maxim MAX8511EXK25+T             |
| USB                 |     1 | USB type-B right-angle female connector                         |
| VDIG                |     1 | Yellow miniature PC test point                                  |
| VEE (2x), DGND (4x) |     6 | Black miniature PC test points                                  |
| Y201                |     1 | 16MHz crystal Hong Kong X'tals SSM1600000E18FAF                 |
| Y202                |     1 | 6MHz crystal Hong Kong X'tals SSL6000000E18FAF                  |
| -                   |     7 | Shunts (JU1-JU6, JU8)                                           |
| -                   |     1 | USB-A male to USB-B male connector, 6ft (beige)                 |
| -                   |     1 | PCB: MAX5980 EVALUATION KIT                                     |

## Component Suppliers

| SUPPLIER                                 | PHONE        | WEBSITE                     |
|------------------------------------------|--------------|-----------------------------|
| AVX Corporation                          | 843-946-0238 | www.avxcorp.com             |
| Bel Fuse Inc                             | 201-432-0463 | www.belfuse.com             |
| CEL/NEC; California Eastern Laboratories | 800-997-5227 | www.cel.com                 |
| Delta Electronics, Inc.                  | 510-668-5164 | www.delta.com.tw            |
| Diodes Incorporated                      | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                  | 888-522-5372 | www.fairchildsemi.com       |
| Hong Kong X'tals Ltd.                    | 852-35112388 | www.hongkongcrystal.com     |
| IRC Inc.                                 | 361-992-7900 | www.irctt.com               |
| Murata Electronics North America, Inc.   | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                          | 800-344-2112 | www.panasonic.com           |
| Pulse Engineering                        | 858-674-8100 | www.pulseeng.com            |

Note: Indicate that you are using the MAX5980 when contacting these component suppliers.

## MAX5980 EV Kit Files

| FILE                     | DESCRIPTION                                |
|--------------------------|--------------------------------------------|
| INSTALL.EXE              | Installs the EV kit files on your computer |
| MAX5980.EXE              | Application program                        |
| FTD2XX.INF               | USB device driver file                     |
| POWER_ON.SMB             | Bitmap macro routine                       |
| TEST#1_MANUAL_MODE.SMB   | Bitmap macro routine                       |
| TEST#2_AUTO_MODE_DC.SMB  | Bitmap macro routine                       |
| TEST#3_AUTO_MODE_AC.SMB  | Bitmap macro routine                       |
| TEST#4_SEMIAUTO_MODE.SMB | Bitmap macro routine                       |
| UNINST.INI               | Uninstalls the EV kit software             |
| USB_Driver_Help.PDF      | USB driver installation help file          |

## Quick Start

## Required Equipment

- MAX5980	EV	kit	(USB	cable	included)
- -32V	to	-60V,	4A-capable	DC	power	supply
- User-supplied	 Windows	 XP,	 Windows	 Vista,	 or Windows 7 PC with a spare USB port
- USB	I/O	extension	cable,	straight-through,	male-tofemale cable
- Voltmeter	for	confirming	output	voltages

Caution: The GND banana jack is more positive than the VEE banana jack. Use an isolated oscilloscope for probing, with respect to VEE.

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Hardware Connections

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed .

- 1) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software, 5980RXX.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Verify that a shunt is installed across pins 1-2 on jumpers  JU1  (A0,  high),  JU2  (A1,  high),  JU3  (A2,  high),

## MAX5980 Evaluation Kit Evaluates: MAX5980

and  JU4  (A4,  high)  to  set  the  IC's  I 2 C-compatible slave address to 0x5E hexadecimal.

- 4) Verify  that  a  shunt  is  installed  across  pins  2-3  on jumper JU5 (signal mode).
- 5) Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper JU6 (automatic mode).
- 6) Verify that no shunt is installed on jumper JU8 (Class 5 disabled).
- 7) Connect the -32V to -60V DC power supply to the metal VEE banana jack and the supply ground to the metal GND banana jack. Do not turn on the power supply until all connections are completed.
- 8) Connect a PD to the desired Ethernet output port's RJ45  connector  (upper  row)  on  the  EV  kit's  2  x  4 MagJack (J2) as listed below:
- a. PORT1\_OUT at upper row RJ45
- b.  PORT2\_OUT at upper row RJ45
- c. PORT3\_OUT at upper row RJ45
- d.  PORT4\_OUT at upper row RJ45
- e. This step is optional if network connectivity and/ or a PD is not required
- 9) Connect the EV kit's network input LAN port (lower row)  to  the  corresponding  PD  LAN  connection  as listed below:
- a.  PORT1\_IN at lower row RJ45
- b.  PORT2\_IN at lower row RJ45
- c.  PORT3\_IN at lower row RJ45
- d.  PORT4\_IN at lower row RJ45
- e. This  step  is  optional  if  network  connectivity  is not required
- 10)  Turn on the power supply.
- 11)  Connect  the  USB  cable  from  the  PC  to  the  EV  kit board.  A New  Hardware  Found window  pops  up when installing the USB driver for the first time. If a window is not seen that is similar to the one described above  after  30s,  remove  the  USB  cable  from  the board and reconnect it. Administrator privileges are required to install the USB device driver on Windows.
- 12)  Follow the directions of the Found New Hardware window  to  install  the  USB  device  driver.  Manually specify  the  location  of  the  device  driver  to  be C:\ Program Files\MAX5980 (default installation directory) using the Browse button. During device driver installation, Windows may show a warning message indicating  that  the  device  driver  Maxim  uses  does not contain a digital signature. This is not an error condition  and  it  is  safe  to  proceed  with  installation.  Refer  to  the  USB\_Driver\_Help.PDF  document included with the software for additional information.

- 13)  Start the EV kit software by opening its icon in the Start | Programs menu.
- 14)  Observe  as  the  program  automatically  detects the USB interface circuit, starts the main program, and then automatically  detects  the  I 2 C-compatible address configured for the IC.
- 15)  Select the BitMap Controls tab at the top.
- 16)  Load and run the POWER\_ON.SMB macro program from the File | Open | Run Macro menu. The script automatically runs after selecting open.
- 17)  All four network port's green status LEDs should be lit.
- 18)  Three other example macros allow quick testing of the manual mode, auto mode, semiauto mode, and with DC load disconnect detection. These macros are:
- a.  TEST#1\_MANUAL\_MODE.SMB
- b.  TEST#2\_AUTO\_MODE\_DC.SMB
- c.  TEST#4\_SEMIAUTO\_MODE.SMB
- 19)  Read the embedded comments in each macro for detailed descriptions using a plain text editor.
- 20)  Test  point  VEE  (U1  VEE  pin)  and  GND  test  points are provided throughout the PCB to observe desired signals  with  an  oscilloscope  or  voltmeter. Use  an isolated oscilloscope for probing with respect to VEE and DGND.
- 21)  Header JU9 is provided to monitor the I 2 C signals on the U1 side. These signals are not isolated and are  referenced  to  DGND. DGND  and  VEE  are shorted by a 0 I resistor (R19). AGND and GND are shorted by a 0 I resistor (R68).
- 22)  Pressing the reset pushbutton turns off power to all ports and returns the IC to the operation mode.

Note: An uninstall program is included with the software. Click on the UNINSTALL icon to remove the EV kit software from the hard drive.

## Detailed Description of Software

Text  in bold indicates  user-selectable  features  in  the EV  kit  software.  Use  the  mouse  or  the  keyboard's  Tab key to navigate various items on the main window. The EV kit software features the Configuration , Events and Status ,  and BitMap Controls tab  sheets.  Most  of  the main window's available functions can be evaluated by using the pull-down menu. The bottom-left status bar provides the USB interface circuit status. The center status bar provides the current EV kit and macro engine status.

## MAX5980 Evaluation Kit Evaluates: MAX5980

## Software Startup

The EV kit software starts  in  the  program's Auto Read state.  The  software  automatically  detects  the Slave Address and begins reading the contents of each register from the IC, updating each tab sheet. The software then starts up with the Events and Status tab (Figure 1) for reading system and port events/status information.

## Events and Status Tab

The Events and Status tab  sheet contains the EV kit's system and port events/status information obtained from the IC registers. The System Events and Status group box  provides  system-level  information  on  the  VEE  and VDD (VDIG) power supplies, over temperature, and the present  operating  mode  and  address  in  hexadecimal and decimal formats. The Port  Events group  box  provides each PSE port event or change status, including each  port's  power  MOSFET  (FET\_).  The Port  Status group box provides each PSE port operating status during detection, classification, current, and voltage usage by the connected PD.

## Configuration Tab

The Configuration tab sheet (Figure 2) provides a highlevel method of configuring the EV kit as a 4-port PSE. System and port-level configurations can be made in this window.  Additionally,  the  IC  or  a  specific  port  can  be immediately reset using the respective Reset button. All other  configuration  changes on this window take place after  the Update  MAX5980 button  has  been  pressed. To  view  a  specific  port  event  or  status  after  updating, select the Events and Status tab. Each ports' operating mode,  disconnect  mode,  detection/classification,  and various power settings can be set independently. After configuring  the  port  or  making  system  changes,  press the Update MAX5980 button to write these changes to the  IC,  thus  updating  the  EV  kit's  respective  PSE  port. Certain  configurations  may  not  be  enabled,  depending on the IC's current state or status.

## BitMap Controls Tab

The BitMap Controls tab sheet (Figure 3) provides a bitlevel method for configuring the EV kit as a 4-port PSE and for controlling the software state, configuring the IC registers, using the macro engine, and displaying all the registers in binary and hexadecimal format.

The IC's register contents are placed in the appropriate line of the Reg Read tables in binary and hexadecimal format. If data changes between the next register read, the  updated  register  hexadecimal  data  is  displayed  in red and blinks four times. The blink rate can be changed using the Commands | Red Hex Data Blink Rate menu item. The bottom-left status bar provides the USB interface  circuit  status.  The  center  status  bar  provides  the current EV kit and macro engine status.

Figure 1. MAX5980 EV Kit Software (Events and Status Tab)

<!-- image -->

## MAX5980 Evaluation Kit Evaluates: MAX5980

Figure 2. MAX5980 EV Kit Software (Configuration Tab)

<!-- image -->

## MAX5980 Evaluation Kit Evaluates: MAX5980

Figure 3. MAX5980 EV Kit Software (BitMap Controls Tab)

<!-- image -->

## Auto Read/Run Macro State Controls

When  the Auto  Read checkbox  in  the Startup  State group box is checked, the program continuously updates the main window registers and operates in the auto read state. In the auto read state, data can be written to the IC by entering or selecting the desired data in the Reg Adrs and the Hex Data or Bin Data combo boxes. Pressing the Write  Byte button  writes  the  combo  box  data  to the IC. To perform an immediate register read, enter or choose the desired register address and press the Read Byte button. Hexadecimal or binary data can be entered in the Hex Data or Bin Data combo boxes and then the alternate combo box displays the corresponding number in the respective number base.

If the Auto Read checkbox is unchecked, the program's main window displays register data from the last read. To obtain current data, a Read Byte must be performed after selecting the appropriate register address from the Reg Adrs combo box. The auto read state does not read the clear-on-read (CoR) register.

A macro can be run after loading the file from the File | Open Macro menu item. The opened macro is displayed in the upper half of the Macro edit field and has an smb file  extension.  Pressing  the Run button  runs  the  macro to completion and the output is displayed in the Macro Script  Output edit  field.  Each  edit  box  can  be  sized relative to the other half using the splitter bar above the Script  Output text.  Pressing  the Single  Step button instead of the Run button causes the macro to execute a single line with each press of the Single Step button. The Reset button is used to reset the macro script engine and clear the Macro Script Output edit  field.  A  macro can be run regardless of the Auto Read checkbox status. A macro can also be run immediately after opening the software by using the File | Open/Run Macro menu item,  selecting  the  desired  macro  to  run,  and  pressing the Open button. Pressing the Cancel button exits this feature.

The Locate Slave button is used to search for a MAX5980 located  on  the  I 2 C  serial  interface  whose  address  has been changed while the software was running. The valid IC slave address range is 0x50 through 0x5F.

## Record Macro State Controls

When  the Record checkbox  is  checked,  the  program automatically enters the record macro state and disables certain buttons and menus. Choosing the Commands | Clear Script Input menu item clears any script presently in  the Macro script  input  edit  field.  Comment lines in a macro script begin with # / ; ' * characters. A line of script is entered by choosing the appropriate Slave Adrs , Reg

## MAX5980 Evaluation Kit Evaluates: MAX5980

Adrs , and entering the desired Hex Data or Bin Data in the combo boxes. Pressing the Write Byte or Read Byte button  enters  the  script  into  the Macro input  edit  field. For time delays in a macro, select the desired delay time from  the  drop-down  list  on  the  right  side  of  the Delay button and then press the Delay button. The macro must be saved before exiting the record macro state using the File | Save Macro menu item. The macro file name must have an smb file extension.

To edit a previously saved macro, open the macro using the File | Open Macro menu item and make the desired edits. The modified file must be saved prior to exiting the record  macro  state.  Uncheck  the Record checkbox  to exit the record macro state. Additionally, a macro can be created or edited using a plain text editor in 'Text Mod.' The file must be saved with an smb extension.

## General-Purpose Advanced User Interface Utility

There are two methods for communicating with the IC: through the main window display or through the generalpurpose advanced user interface utility using the View | Interface menu item. This window provides direct, lowlevel access to the IC through the I 2 C-compatible 2-wire interface  (Figure  4).  The  utility  configures  the  I 2 C  interface parameters such as the start and stop bits, acknowledgements, and clock timing. The 2-wire interface window allows the user to send general-purpose I 2 C commands  using  the SMBusWriteByte/SMBusReadByte and SMBusWriteWord/SMBusReadWord commands. For more information on the differences between the I 2 C interface  and  SMBus  interface,  read  Application  Note AN476: Comparing the I 2 C Bus to the SMBus , available at http://pdfserv.maximintegrated.com/en/an/AN476. pdf . When using the advanced user interface utility, the main window display no longer keeps track of changes sent to the hardware. The EV kit can be reinitialized to the startup screen settings by first closing the advanced user interface utility and then selecting the Configuration tab sheet.  Select  the IC  Reset pushbutton and then select the Events and Status tab sheet.

The Hunt  for  active  listeners button  scans  the  entire 2-wire  address  space,  reporting  each  address  that  is acknowledged. The SMBusWriteByte command transmits the device address, command, and 1 byte of data. The SMBusReadByte transmits  the  device  address, command,  and  then  retransmits  the  device  address and  reads  1  byte  of  data.  The SMBusWriteWord and SMBusReadWord operate the same, except 2 bytes of data are used.

## MAX5980 Evaluation Kit Evaluates: MAX5980

Figure 4. Advanced User Interface (2-Wire Interface)

<!-- image -->

## General Troubleshooting Problem:  Software  reports  it  cannot  find  the  USB interface circuit.

- Is	the	USB	interface	circuit	power	LED	D201	lit?
- Is	the	USB	communications	cable	connected?
- Has	 Windows	 plug-and-play	 detected	 the	 board? Bring up Control Panel System | Device Manager , and look at what device nodes are indicated for the USB. If there is an unknown device node attached to the  USB,  delete  it-this  forces  plug-and-play  to  try again.

## Problem:  Software  reports  MAX5980  IC  not  found, exiting program.

- Are	 the	 SCL\_IN	 and	 SDA	 signals	 pulled	 up	 to Opto\_VCC	(3.3V)?
- If	 using	 jumper	 wires	 to	 connect	 could	 the	 SCL\_IN and	SDA	signals	be	swapped?	Could	the	OPTO\_GND ground	return	be	missing?

## Detailed Description of Hardware

The  MAX5980  EV  kit  features  a  10/100/1000BASETX  Ethernet  4-port  PSE  controller  circuit  for  -48V/-54V supply  rail  systems.  The  EV  kit's  PSE  circuit  uses  the IEEE 802.3af/at-compliant MAX5980 PSE controller, four n-channel  power  MOSFETs  in  8-pin  SO  surface-mount packages,  eight  surface-mount  current-sensing  resistors,  and  four  10/100/1000BASE-TX  magnetic  modules (integrated in J2) to form the basic portion of a PSE circuit. The EV kit has been designed as an IEEE 802.3af/ at-compliant  PSE  and  demonstrates  all  the  required functions  such  as  PD  discovery,  classification,  currentlimit control of a connected PD at each Ethernet output port,  and  DC disconnect detection. A PC can be used to communicate with the slave IC over the I 2 C interface, optically coupled logic, and the 2-wire to USB-port interface circuit.

The EV kit PSE circuit requires a -32 to -60V power supply (-48V/-54V supply rail) capable of supplying 4A to the EV kit's GND and VEE steel banana jacks or PCB pads. A  separate  +3.3V  power  supply  capable  of  supplying 100mA is also required for the IC's optically isolated I 2 Ccompatible 2-wire interface if the USB interface circuit is not  used. Note: The  DGND and VEE are shorted by a 0 I resistor (R19). AGND and GND are shorted by a 0 I resistor (R68).

The IC controls the -48V/-54V DC power to each of the four 10/100/1000BASE-TX Ethernet output ports by regulating the respective port's n-channel power MOSFET and sensing  current  through  the  respective  port's  current-sense resistors. The current is fed to the 10/100/1000BASE-TX magnetic module connected to the respective Ethernet output  port's  RJ45  jack.  An  IEEE  802.3af/at-compliant PD connects to the respective Ethernet output port (J2 upper ports)  on  the  EV  kit.  The  PD  can  be  located  up to  350ft  from  the  EV  kit  when  connected with a twisted 4-pair Ethernet cable. The EV kit provides separate and independent power control for each of the four Ethernet output ports. The 10/100/1000BASE-TX magnetic module is internally decoupled from the EV kit's chassis ground.

Note: The  EV  kit's  isolated  chassis  ground  (Chassis\_ GND) PCB pad connects to the network system ground.

The  EV  kit  features  configurable  operational  modes, PD  detection,  PD  classification,  overcurrent  protection, current  foldback,  under/overvoltage  protection,  DC  disconnect  monitoring,  high-power  mode,  and  port  current information through the I 2 C interface. The overcurrent protection  can  be  programmed  through  the  software.  Each of  the  four  modes of operation (auto, semi, manual, and shutdown) can be evaluated after configuring jumper JU6 and configuring the appropriate IC register (see Table 3), or using the software's high-level Configuration tab sheet (see  Figure  2).  Each  port  features  a  600W  bidirectional overvoltage-transient  suppressor  diode  (D9-D12)  and decoupling  capacitor  (C26-C29)  for  transient  protection at the port.

Test points and jumpers have been provided for voltage probing  and  current  measurements  of  each  channel's power  circuit. Note: When  using  the  header  signals, caution should be exercised since the DGND and VEE are shorted by a 0 I resistor (R19). AGND and GND are shorted  by  a  0 I resistor  (R68).  Additionally,  since  the GND is more positive than VEE, use an isolated oscilloscope when probing signals with respect to VEE. Green LEDs, relative to each port's RJ45 output jack, indicate when the respective port's power is turned on.

The  EV  kit  provides  optical  isolation  for the I 2 Ccompatible 3-wire interface required by the IC operating as  a  slave  device  with  optocouplers  U7  and  U8.  The

## MAX5980 Evaluation Kit Evaluates: MAX5980

optically  isolated  interface  connects  to  a  computer's USB port through the USB interface circuit. The EV kit's I 2 C-compatible 2-wire or 3-wire interface can be reconfigured for interfacing to a stand-alone microcontroller for isolated (2-wire) or nonisolated (3-wire) serial operation.  A  separate  +3.3V  power  supply  capable  of  supplying 100mA is required for the IC's optically isolated I 2 C-compatible 2-wire interface. Note: The DGND and VEE are shorted by a 0 I resistor (R19). AGND and GND are shorted by a 0 I resistor (R68).

The optical  isolation  consists  of  optocoupler  U7,  which provides galvanic isolation for the serial-interface clock line  (SCL)  and  serial-interface  input  data  line  (SDAIN) signals.  Optocoupler  U8  provides  galvanic  isolation for  the  serial  output  and  data  line  (SDAOUT)  and INT signals.  The  3-wire  serial  interface  SCL  and  SDAOUT signals  are  combined  on  the  isolated  2-wire  side  prior to feeding logic buffer U9. The respective JU9 SCL\_IN, SDA, INT \_OUT, OPTO\_GND, and OPTO\_VCC PCB pads are  used  for  2-wire  isolated  stand-alone  operation.  For nonisolated  stand-alone  3-wire  operation,  jumper  JU9 shorting  traces  must  be  cut  open  and  then  the  SCL, SDAIN, SDAOUT, INT , DGND, and VDIG PCB pads must be connected to the microcontroller circuit. The VDIG is set at +3.3V. The OPTO\_GND, GND, and DGND planes are isolated by the optocouplers. Note: When using the EV kit in a nonisolated configuration, caution should be exercised  since  the  DGND  and  VEE  are  shorted  by  a 0 I resistor (R19). AGND and GND are shorted by a 0 I resistor (R68). Additionally, since the GND is more positive than VEE, use an isolated oscilloscope when probing signals with respect to VEE.

The  IC  slave  address  is  configured  by  four  jumpers (JU1-JU4)  and  can  be  configured  from  0x50  through 0x5F  hexadecimal  serial  address.  Global  address  0x60 is  accepted by the IC regardless of the jumper settings. See  Table  1  for  more  information  on  setting  the  IC slave address.

## Jumper Selection

The EV kit features several jumpers to reconfigure the EV kit for various PSE configurations and PD requirements. Additionally,  jumpers  and  PCB  pads  are  provided  for connecting an external microcontroller.

## I 2 C-Compatible 2-Wire/3-Wire Slave Address Selection

The EV kit features several 3-pin jumpers (JU1-JU4) to set  the  slave  address  of  the  IC's  least-significant  bits (LSBs) of the slave address on the I 2 C-compatible 2-wire or 3-wire interface. The three most-significant bits (MSBs) are set by the IC to 010. The EV kit's software automatically  sets  the  LSB  for  the  proper  read/write  command. Table 1 lists the jumper address options.

Table 1. Slave Address Selections (JU1-JU4)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   |                  |            |
|------------------|------------------|------------------|------------------|------------------|------------|
| JU4 (BIT A3)     | JU3 (BIT A2)     | JU2 (BIT A1)     | JU1 (BIT A0)     | IC SLAVE ADDRESS | READ/WRITE |
| 2-3              | 2-3              | 2-3              | 2-3              | 0x40             | Read       |
| 2-3              | 2-3              | 2-3              | 2-3              | 0x41             | Write      |
| 2-3              | 2-3              | 2-3              | 1-2              | 0x42             | Read       |
| 2-3              | 2-3              | 2-3              | 1-2              | 0x43             | Write      |
| 2-3              | 2-3              | 1-2              | 2-3              | 0x44             | Read       |
| 2-3              | 2-3              | 1-2              | 2-3              | 0x45             | Write      |
| 2-3              | 2-3              | 1-2              | 1-2              | 0x46             | Read       |
| 2-3              | 2-3              | 1-2              | 1-2              | 0x47             | Write      |
| 2-3              | 1-2              | 2-3              | 2-3              | 0x48 0x49        | Read Write |
| 2-3              | 1-2              | 2-3              | 2-3              | 0x4A             | Read       |
| 2-3              | 1-2              | 2-3              | 1-2              |                  |            |
| 2-3              | 1-2              | 2-3              | 1-2              | 0x4B             | Write      |
| 2-3              | 1-2              | 1-2              | 2-3              | 0x4C 0x4D        | Read Write |
| 2-3              | 1-2              | 1-2              | 2-3              | 0x4E             | Read       |
| 2-3              | 1-2              | 1-2              | 1-2              | 0x4F             | Write      |
| 2-3              | 1-2              | 1-2              | 1-2              | 0x50             | Read       |
| 1-2              | 2-3              | 2-3              | 2-3              | 0x51             | Write      |
| 1-2              | 2-3              | 2-3              | 2-3              | 0x52             | Read       |
| 1-2              | 2-3              | 2-3              | 1-2              |                  | Write      |
| 1-2              | 2-3              | 2-3              | 1-2              | 0x53 0x54        | Read       |
| 1-2              | 2-3              | 1-2              | 2-3              | 0x55             | Write      |
| 1-2              | 2-3              | 1-2              | 2-3              | 0x56             | Read       |
| 1-2              | 2-3              | 1-2              | 1-2              |                  |            |
| 1-2              | 2-3              | 1-2              | 1-2              | 0x57             | Write      |
| 1-2              | 1-2              | 2-3              | 2-3              | 0x58 0x59        | Read Write |
| 1-2              | 1-2              | 2-3              | 2-3              | 0x5A             | Read       |
| 1-2              | 1-2              | 2-3              | 1-2              |                  |            |
| 1-2              | 1-2              | 2-3              | 1-2              | 0x5B             | Write      |
| 1-2              | 1-2              | 1-2              | 2-3              | 0x5C 0x5D        | Read Write |
| 1-2              | 1-2              | 1-2              | 1-2              | 0x5E             | Read       |
| 1-2              | 1-2              | 1-2              | 1-2              | 0x5F             | Write      |
| X                | X                | X                | X                | 0x60* 0x61*      | Read Write |

X = Don't care.

* Global address call.

## MAX5980 Evaluation Kit Evaluates: MAX5980

## Mode Selection (Midspan or Signal)

The EV kit features a 3-pin jumper (JU5) to set the IC in midspan or signal mode. Table 2 lists the jumper options for  the  two  modes  used  to  detect  a  valid  PD  connected to the PSE's respective Ethernet output port. Refer to the MAX5980  IC  data  sheet  for  more  information  on  these modes.

## Operational Modes

## (Automatic and Shutdown)

The EV kit  features  a  3-pin  jumper  (JU6)  to  set  the  IC's initial startup operational mode. After startup, data sent to the Operating Mode register (R12h) reconfigures the operational mode of the IC. Table 3 lists the jumper options.

## Class 5 Enable (EN\_CL5)

The EV kit features a 2-pin jumper (JU8) to enable/disable the IC's hardware Class 5 classification settings. Refer to the MAX5980 IC data sheet for Class 5 register settings with respect to this pin. Table 4 lists the jumper options.

## Stand-Alone Microcontroller Interface (Isolated/Nonisolated)

The EV kit features PCB pads and a jumper to interface directly with a microcontroller. The 10-pin (2 x 5) jumper (JU9) has shorting connections on the bottom layer that must be cut open to disable the optocoupler interface for nonisolated evaluation. The JU9 jumper shorting connections must be in place for evaluating an isolated standalone  microcontroller  interface  or  the  on-board  USB interface  circuit.  For  evaluating  an  isolated  stand-alone microcontroller  interface,  cut  open  the  PC  trace  shorts on jumpers JU10, JU39, and JU40 to isolate the on-board USB interface circuit. Table 5 lists the selectable jumper options.

## Table 2. Jumper JU5 Functions

| SHUNT POSITION   | MIDSPAN PIN                            | MODE    |
|------------------|----------------------------------------|---------|
| 1-2              | Connected to VDIG through resistor R14 | Midspan |
| 2-3              | Connected to DGND through resistor R14 | Signal  |

## Table 3. Initial Startup Operational Mode (JU6)

| SHUNT POSITION   | AUTO PIN                               | OPERATING MODE REGISTER (R12h) STATUS BITS   | OPERATION MODE   |
|------------------|----------------------------------------|----------------------------------------------|------------------|
| 1-2              | Connected to VDIG through resistor R15 | 0x00                                         | Automatic        |
| 2-3              | Connected to DGND through resistor R15 | 0xFF                                         | Shutdown         |

## Table 4. Class 5 Enable (JU8)

| SHUNT POSITION   | EN_CL5 PIN                   | CLASS 5   |
|------------------|------------------------------|-----------|
| Installed        | Connected to VDIG            | Enabled   |
| Not installed    | Connected to DGND internally | Disabled  |

## MAX5980 Evaluation Kit Evaluates: MAX5980

## PORT OUT\_, GATE\_ Pins Signal Measurements

The  EV  kit  features  jumpers  to  facilitate  current  and voltage measuring at each port's respective OUT\_ and GATE\_ pins on the IC. Several 2-pin and 4-pin jumpers are  used  to  obtain  the  desired  measurement  for  each port.  Jumper JU11 is provided for port 1, jumper JU12 is provided for port 2, jumper JU13 is provided for port 3,  and jumper JU14 is provided for port 4. The jumper pins are shorted by a PCB trace on the top layer of the EV kit by default for normal operation. The shorts can be cut open for measurements. See Figure 5a for a specific port's jumper.

## SENSE\_ Pins Signal Measurements

The EV kit features jumpers to facilitate current and voltage  measuring  at  each  port's  respective  SENSE\_  pins on the IC. Several 2-pin jumpers are used to obtain the desired  measurement  for  each  port.  Jumper  JU23  is provided for port 1, jumper JU24 is provided for port 2, jumper  JU25  is  provided  for  port  3,  and  jumper  JU26 is  provided  for  port  4.  The  jumper  pins  are  shorted  by a PCB trace on the top layer of the EV kit by default for normal operation. The shorts can be cut open for measurements. See Figure 5a for a specific port's jumper.

## -48V/-54V Port Power Interface, Voltage Measurement, or Port1/Port3 60W 2 x 2 Pair Operation

The EV kit includes jumpers JU27-JU30 to disconnect each port's -48V/-54V power independently for connection to an external network interface circuit, or to increase the available power at port 1 and/or port 3 up to 60W. Additionally, the respective jumper pins can also be utilized to measure the voltage or current for the respective port. Table 6 lists the specific jumper for each port. Each jumper has a shorted PCB trace on the bottom layer of the PCB.

## MAX5980 Evaluation Kit Evaluates: MAX5980

Table 5. Jumper JU9 and Microcontroller PCB Pad Functions

| SHUNT POSITION   | ISOLATION MODE   | EV KIT PCB PAD TO MICROCONTROLLER CONNECTION                                |
|------------------|------------------|-----------------------------------------------------------------------------|
| 1-2 (Shorted*)   | Isolated         | OPTO_VCC PCB pad connects to the microcontroller's +3.3V power supply.      |
| 3-4 (Shorted*)   | Isolated         | OPTO_SCL_IN PCB pad connects to the microcontroller's serial-clock line.    |
| 5-6 (Shorted*)   | Isolated         | OPTO_SDA PCB pad connects to the microcontroller's SDA data line.           |
| 7-8 (Shorted*)   | Isolated         | OPTO_SDA PCB pad connects to the microcontroller's SDA data line.           |
| 9-10 (Shorted*)  | Isolated         | INT _OUT PCB pad connects to the microcontroller's INT pin.                 |
| -                | Isolated         | OPTO_GND PCB pad connects to the microcontroller's power-supply ground.     |
| 1-2 (Cut open)   | Nonisolated      | JU9-2 VDIG pin supplies power to the microcontroller from the VDIG voltage. |
| 3-4 (Cut open)   | Nonisolated      | JU9-4 SCL pin connects to the microcontroller's serial-clock line.          |
| 5-6 (Cut open)   | Nonisolated      | JU9-6 SDAIN pin connects to the microcontroller's SDA data line.            |
| 7-8 (Cut open)   | Nonisolated      | JU9-8 SDAOUT pin connects to the microcontroller's SDA data line.           |
| 9-10 (Cut open)  | Nonisolated      | JU9-10 INT pin connects to the microcontroller's INT pin.                   |
| -                | Nonisolated      | TP DGND connects to the microcontroller's power-supply ground.              |

* Default set by PCB trace.

Table 6. -48V/-54V Port Power Interface Jumper Functions

| PORT   | JUMPER   | PCB TRACE SHORT                        | EV KIT OPERATION                      |
|--------|----------|----------------------------------------|---------------------------------------|
| Port 1 | JU27     | Trace shorted at pins 1-2              | Normal operation (30W) or (60W)       |
| Port 1 | JU27     | Cut open                               | -48V_1 power available at pin 1 only  |
| Port 1 | JU31     | Open                                   | Normal operation (30W)                |
| Port 1 | JU31     | Trace shorted at pins 1-2              | GND feeds to port 1 (60W)*            |
| Port 2 | JU28     | Trace shorted at pins 1-2              | Normal operation (30W)                |
| Port 2 | JU28     | Cut open                               | GND* power not available at pin 1     |
| Port 2 | JU32     | Trace shorted at pins 1-2              | Normal operation (30W)                |
| Port 2 | JU32     | Cut open                               | -48V_2 power available at pin 2 only  |
| Port 2 | JU32     | Cut open and install short at pins 2-3 | -48V_2 power feeds to port 1 (60W)*   |
| Port 3 | JU29     | Trace shorted at pins 1-2              | Normal operation (30W or 60W)         |
| Port 3 | JU29     | Cut open                               | -48V_3 power available at pin 1 only  |
| Port 3 | JU33     | Open                                   | Normal operation (30W)                |
| Port 3 | JU33     | Trace shorted at pins 1-2              | GND feeds to port 3 (60W)*            |
| Port 4 | JU30     | Trace shorted at pins 1-2              | Normal operation (30W)                |
| Port 4 | JU30     | Cut open                               | -48V_4 power available at pin 2 only  |
| Port 4 | JU30     | Cut open and install short at pins 2-3 | -48V_4 power feeds to port 3 (60W)*   |
| Port 4 | JU34     | Trace shorted at pins 1-2              | Normal operation (30W)                |
| Port 4 | JU34     | Cut open                               | -48V_4 power available at pin 2 only* |

## EN Signal

The EV kit features a pushbutton switch (S1) to enable or disable the IC.

## Ethernet Optional PHY-Side Ethernet Connections

The EV kit includes jumpers JU35-JU38 for a user to use the  optional  PHY-side  Ethernet  connections  (GND\_P1, GND\_P2,  GND\_P3,  and  GND\_P4;  VCC\_P1,  VCC\_P2, VCC\_P3, and VCC\_P4). PCB pads are provided for connecting  an  external  VCC  power  supply.  See  J2  in  the Component List for specific connections. Table 7 lists the specific jumper for each port. Jumpers JU32 and JU34 have a shorted PCB trace on the bottom layer of the PCB.

## MAX5980 Evaluation Kit Evaluates: MAX5980

## External +3.3V VDIG Operation

The EV kit's on-board +3.3V LDO circuit can be reconfigured to operate the EV kit circuit with an externally supplied +3.3V DC source. Follow the step below to operate the EV kit with an externally supplied +3.3V source:

- Remove resistor R16, isolates the on-board LDO, U10.
- Connect	 the	 external	 +3.3V	 power-supply	 ground terminal to the VEE PCB pad and the external powersupply positive to the VDIG PCB pad.
- Remove	resistor	R55.

Table 7. PHY-Side Ethernet Connections Jumper Functions (JU35-JU38)

| PORT   | JUMPER   | PCB TRACE SHORT       | EV KIT OPERATION               |
|--------|----------|-----------------------|--------------------------------|
| Port 1 | JU35     | Open                  | Isolate PHY and PoE            |
| Port 1 | JU35     | Install short         | PHY and PoE share the same GND |
| Port 2 | JU36     | Open                  | Isolate PHY and PoE            |
| Port 2 | JU36     | Install short         | PHY and PoE share the same GND |
| Port 3 | JU37     | Shorting trace intact | Isolate PHY and PoE            |
| Port 3 | JU37     | Cut open              | PHY and PoE share the same GND |
| Port 4 | JU38     | Open                  | Isolate PHY and PoE            |
| Port 4 | JU38     | Install short         | PHY and PoE share the same GND |

## MAX5980 Evaluation Kit Evaluates: MAX5980

Figure 5a. MAX5980 EV Kit Schematic (Controller Circuit)

<!-- image -->

## MAX5980 Evaluation Kit Evaluates: MAX5980

Figure 5b. MAX5980 EV Kit Schematic (Optocoupler Circuit)

<!-- image -->

## MAX5980 Evaluation Kit Evaluates: MAX5980

Figure 5c. MAX5980 EV Kit Schematic (Ethernet Network Interface)

<!-- image -->

## MAX5980 Evaluation Kit Evaluates: MAX5980

Figure 5d. MAX5980 EV Kit Schematic (3.3V Power-Supply Circuit)

<!-- image -->

## MAX5980 Evaluation Kit Evaluates: MAX5980

Figure 5e. MAX5980 EV Kit Schematic (USB Interface Circuit)

<!-- image -->

## MAX5980 Evaluation Kit Evaluates: MAX5980

Figure 6. MAX5980 EV Kit Component Placement Guide-Component Side

<!-- image -->

## MAX5980 Evaluation Kit Evaluates: MAX5980

Figure 7. MAX5980 EV Kit PCB Layout-Component Side

<!-- image -->

## MAX5980 Evaluation Kit Evaluates: MAX5980

Figure 8. MAX5980 EV Kit PCB Layout-VEE/DGND/CHGND/OPTO\_GND Layer 2

<!-- image -->

## MAX5980 Evaluation Kit Evaluates: MAX5980

Figure 9. MAX5980 EV Kit PCB Layout-GND/OPTO\_VCC/+3.3V/+5V/VBUS Layer 3

<!-- image -->

## MAX5980 Evaluation Kit Evaluates: MAX5980

Figure 10. MAX5980 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX5980 Evaluation Kit Evaluates: MAX5980

Figure 11. MAX5980 EV Kit Component Placement Guide-Solder Side

<!-- image -->

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX5980EVKIT# | EV KIT |

# Denotes RoHS compliant.

## MAX5980 Evaluation Kit Evaluates: MAX5980

## MAX5980 Evaluation Kit Evaluates: MAX5980

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/12            | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.