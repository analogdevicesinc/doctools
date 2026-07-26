<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX17106 Evaluation Kit

## General Description

Features

The MAX17106 evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  PCB  that  provides  the  voltages  and  features  required  for  active-matrix  TFT  LCD applications.  The  EV  kit  contains  a  step-up  switching regulator  for  the  MAIN  supply,  a  step-up  switching regulator  with  temperature  compensation  for  the  TFT VON supply, a two-stage negative charge pump for the TFT VOFF supply, a linear regulator (LOUT), three highcurrent  op  amps  (VCOM1,  VCOM2,  VCOM3),  a  digitally adjustable VCOM calibration device with nonvolatile memory, two EEPROM memory blocks with separate I 2 C interfaces, and a high-voltage level-shifting scan driver with  complementary  outputs  for  charge  sharing  during state  changes  to  drive  the  TFT  panel  integrated  gate drivers. A high-voltage stress (HVS) mode increases the MAIN and VOFF charge-pump output voltages for stress testing the display panel during production.

The  EV  kit  operates  from  a  +2.4V  to  +5.5V  DC  supply  voltage.  The  MAIN  step-up  switching  regulator  is configured for a +8V output providing at least 300mA. The VON step-up switching regulator is  configured  for a +22V output (at room temperature) providing at least 20mA. The VOFF negative charge pump is configured for  a  -12V  output providing at least 20mA. The internal linear  regulator  (LOUT)  provides  a  fixed  +2.5V  output and 300mA. The three high-current op amps are each configured  for  a  +4V  output.  Each  can  source  or  sink 50mA. The MAX17106 switches at 1.2MHz, allowing the use of tiny surface-mount components. The MAX17106 TQFN  package,  with  low-profile  external  components, allows this circuit to be less than 1.2mm high.

The  EV  kit  provides  two  on-board  USB  interface  circuits  to  communicate  with  the  two  separate  2-wire  I 2 C interface  circuits  in  the  MAX17106  IC.  One  of  the  I 2 C interface  circuits  provides  the  VCOM  calibrator  (DVR) and  2kb  extended  display  identification  data  (EDID) EEPROM communication,  while  the  other  provides  the 16kb timing controller (TCON) EEPROM communication. The MAX17106 I 2 C interface circuits communicate at a data rate of 100kHz.

The EV kit features Windows M 2000-, Windows XP M -, or Windows  Vista M -compatible  software  that  provides  the user interface for exercising the MAX17106's features. The MAX17106DVR.EXE software controls the VCOM calibrator and EDID EEPROM, while the MAX17106TCON.EXE software controls the TCON EEPROM in the MAX17106 IC. Both programs are menu-driven and offer a graphical user interface  (GUI). The two software programs are independent of one another and can operate alone or simultaneously.

- S +2.4V to +5.5V Single-Supply Operation
- S Output Voltages
- +8V Output at 300mA (MAIN Step-Up Switching Regulator)
- +22V Output at 20mA (VON Step-Up Switching Regulator at Room Temperature)
- -12V Output at 20mA (Negative Charge Pump)
- +2.5V Output at 300mA (Low Dropout Linear Regulator)

Three High-Current Op Amps (±50mA)

- S Temperature-Compensated VON Output Voltage
- S 1.2MHz Switching Frequency
- S All Output Voltages are Resistor Adjustable
- S HVS Mode for the MAIN and VON Step-up Output Voltages
- S On-Board USB Interface Circuit Generates I 2 CCompatible Signals for VCOM Calibrator and EDID EEPROM
- S On-Board USB Interface Circuit Generates I 2 CCompatible Signals for TCON EEPROM
- S USB-PC Connection and Power (Two Cables Included)
- S PCB Pads for User-Supplied I 2 C-Compatible Signals
- S Evaluates the MAX17106ETN+ in a 56-Pin TQFN (7mm x 7mm x 0.8mm) Package
- S Windows 2000-, Windows XP-, and Windows Vista (32-Bit)-Compatible Software for VCOM Calibrator and EDID EEPROM (MAX17106DVR.EXE) and TCON EEPROM (MAX17106TCON.EXE)
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17106EVKIT+ | EV Kit |

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17106 Evaluation Kit

## Component List

| DESIGNATION                                                 |   QTY | DESCRIPTION                                                                                   |
|-------------------------------------------------------------|-------|-----------------------------------------------------------------------------------------------|
| C1, C2                                                      |     2 | 10 F F Q 20%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J106M or TDK C1608X5R0J106M  |
| C3, C4                                                      |     2 | 4.7 F F Q 10%, 16V X5R ceramic capacitors (1206) Murata GRM319R61C475KA or TDK C3216X5R1C475K |
| C5                                                          |     1 | 1 F F Q 20%, 50V X5R ceramic capacitor (1206) Murata GRM31MR61H105M or TDK C3216X5R1H105M     |
| C6, C7, C10, C114, C116, C121-C124, C214, C216, C221, C222, |    15 | 1 F F Q 10%, 10V X5R ceramic capacitors (0603) Murata GRM188R61A105K or TDK C1608X5R1A105K    |
| C8                                                          |     1 | 1 F F Q 20%, 10V X5R ceramic capacitor (0805) Murata GRM219R61A105M or TDK C2012X5R1A105M     |
| C9, C11-C19                                                 |    10 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K or TDK C1608X7R1H104K  |
| C20, C120, C220                                             |     3 | 3300pF Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H332K or TDK C1608X7R1H332K   |
| C21                                                         |     1 | 220pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H221K or TDK C1608X7R1H221K     |
| C22                                                         |     1 | 47pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H470J or TDK C1608C0G1H470J       |
| C23-C26                                                     |     0 | Not installed, ceramic capacitors (0603)                                                      |

| DESIGNATION                                    |   QTY | DESCRIPTION                                                                                                   |
|------------------------------------------------|-------|---------------------------------------------------------------------------------------------------------------|
| C27                                            |     0 | Not installed, ceramic capacitor (1206)                                                                       |
| C28, C118, C119, C218, C219                    |     5 | 22pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H220J or TDK C1608C0G1H220J                      |
| C29                                            |     1 | 100pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H101J or TDK C1608C0G1H101J                      |
| C101, C103- C110, C117, C201, C203- C210, C217 |    20 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K or TDK C1608X7R1C104K                  |
| C102, C113, C115, C202, C213, C215             |     6 | 10 F F Q 20%, 6.3V X5R ceramic capacitors (0805) Murata GRM21BR60J106M or TDK C2012X5R0J106M                  |
| C111, C112, C211, C212                         |     4 | 10pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H100J or TDK C1608C0G1H100J                      |
| D1                                             |     1 | 3A, 30V Schottky diode (M-Flat) Toshiba CMS02(TE12L,Q)                                                        |
| D2                                             |     1 | 1A, 60V Schottky diode (SOD123F) Central Semi CMMSH1-60+ (Top Mark: CS60F)                                    |
| D3, D4                                         |     2 | 200mA, 100V dual diodes (SOT23) Fairchild MMBD4148SE or (Top Mark: D4) Central Semi CMPD7000+ (Top Mark: C5C) |
| D101, D201                                     |     2 | Green LEDs (0603)                                                                                             |
| FB101, FB201                                   |     0 | Not installed, ferrite beads (0603)                                                                           |
| JU1-JU8                                        |     8 | 2-pin headers                                                                                                 |
| JU101                                          |     1 | 3-pin header                                                                                                  |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17106 Evaluation Kit

## Component List (continued)

| DESIGNATION                   |   QTY | DESCRIPTION                                          |
|-------------------------------|-------|------------------------------------------------------|
| L1                            |     1 | 3.6 F H, 1.8A power inductor Sumida CMD6D11BNP-3R6MC |
| L2                            |     1 | 3.3 F H, 0.86A power inductor Sumida CDRH4D11-3R3MC  |
| R1, R21                       |     2 | 100k I Q 5% resistors (0603)                         |
| R2, R23-R27                   |     0 | Not installed, resistors (0603)                      |
| R3-R6, R108, R109, R208, R209 |     8 | 2k I Q 5% resistors (0603)                           |
| R7, R8                        |     2 | 200 I Q 5% resistors (0603)                          |
| R9                            |     1 | 20k I Q 5% resistor (0603)                           |
| R10                           |     1 | 118k I Q 1% resistor (0603)                          |
| R11                           |     1 | 187k I Q 1% resistor (0603)                          |
| R12                           |     1 | 34k I Q 1% resistor (0603)                           |
| R13                           |     1 | 237k I Q 1% resistor (0603)                          |
| R14                           |     1 | 10k I Q 1% resistor (0603)                           |
| R15-R20                       |     6 | 200k I Q 1% resistors (0603)                         |
| R22                           |     1 | 24.9k I Q 1% resistor (0603)                         |
| R28                           |     1 | 6.19k I Q 1% resistor (0603)                         |
| R29                           |     1 | 12.1k I Q 1% resistor (0603)                         |
| R30                           |     1 | 4.02k I Q 1% resistor (0603)                         |
| R31                           |     1 | 4.99k I Q 1% resistor (0603)                         |
| R32                           |     1 | 49.9k I Q 1% resistor (0603)                         |
| R101, R201                    |     2 | 0 I Q 5% resistors (0603)                            |
| R102, R202                    |     2 | 220 I Q 5% resistors (0603)                          |
| R103, R203                    |     2 | 10k I Q 5% resistors (0603)                          |
| R104, R204                    |     2 | 2.2k I Q 5% resistors (0603)                         |
| R105, R205                    |     2 | 1.5k I Q 5% resistors (0603)                         |
| R106, R107, R206, R207        |     4 | 27 I Q 5% resistors (0603)                           |
| RT1                           |     1 | 10k I Q 5% thermistor (0603) Murata NCP18XH103J03    |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

* EP = Exposed pad.

| DESIGNATION            |   QTY | DESCRIPTION                                                   |
|------------------------|-------|---------------------------------------------------------------|
| RT2                    |     0 | Not installed, thermistor (0603)                              |
| U1                     |     1 | TFT LCD power system (56 TQFN-EP*) Maxim MAX17106ETN+         |
| U101, U201             |     2 | 32-bit microcontrollers (68 QFN-EP*) Maxim MAXQ2000-RAX+      |
| U102, U202             |     2 | 93C46 type 3-wire E 2 PROMs (8 SO)                            |
| U103, U203             |     2 | UART-to-USB converters (32 TQFP)                              |
| U104, U204             |     2 | 3.3V regulators (5 SC70) Maxim MAX8511EXK33+T (Top Mark: AEI) |
| U105, U205             |     2 | 2.5V regulators (5 SC70) Maxim MAX8511EXK25+T (Top Mark: ADV) |
| U106, U107, U206, U207 |     4 | Low-voltage level translators (10 F MAX M ) Maxim MAX1840EUB+ |
| USB1, USB2             |     2 | USB type-B right-angle female receptacles                     |
| Y101, Y201             |     2 | 16MHz crystals Hong Kong X'tals SSM1600000E18FAF              |
| Y102, Y202             |     2 | 6MHz crystals Hong Kong X'tals SSL6000000E18FAF               |
| -                      |     2 | USB type-A male to USB type-B male receptacle, 6ft, beige     |
| -                      |     9 | Shunts (JU1-JU8, JU101)                                       |
| -                      |     1 | PCB: MAX17106 EVALUATION KIT+                                 |

## MAX17106 Evaluation Kit

## Component Suppliers

| SUPPLIER                                    | PHONE        | WEBSITE                     |
|---------------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.                 | 631-435-1110 | www.centralsemi.com         |
| Fairchild Semiconductor                     | 888-522-5372 | www.fairchildsemi.com       |
| Hong Kong X'tals Ltd.                       | 852-35112388 | www.hongkongcrystal.com     |
| Murata Electronics North America, Inc.      | 770-436-1300 | www.murata-northamerica.com |
| Sumida Corp.                                | 847-545-6700 | www.sumida.com              |
| TDK Corp.                                   | 847-803-6100 | www.component.tdk.com       |
| Toshiba America Electronic Components, Inc. | 949-623-2900 | www.toshiba.com/taec        |

Note: Indicate that you are using the MAX17106 when contacting these component suppliers.

## MAX17106 EV Kit DVR Software Files

| FILE                | DESCRIPTION                               |
|---------------------|-------------------------------------------|
| INSTALL.EXE         | Installs the EV kit files on the computer |
| MAX17106DVR.EXE     | Application program                       |
| FTD2XX.INF          | USB driver file                           |
| UNINST.INI          | Uninstalls the EV kit software            |
| USB_Driver_Help.PDF | USB driver installation help file         |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

## Required Equipment

- MAX17106 EV kit (two USB cables, included)
- One or two user-supplied Windows 2000, Windows XP,  or  Windows  Vista  PCs,  each  with  an  available USB port
- +2.4V to +3.6V, 2A DC power supply
- Voltmeter

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system. The test procedure assumes Windows XP SP2 is being used. Similar steps are required for the other supported operating systems.

## Procedure

The  MAX17106  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps  below  to  verify  board  operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Visit www.maxim-ic.com/evkitsoftware to  download the latest version of the MAX17106 EV kit DVR

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17106 EV Kit TCON Software Files

| FILE                | DESCRIPTION                               |
|---------------------|-------------------------------------------|
| INSTALL.EXE         | Installs the EV kit files on the computer |
| MAX17106TCON.EXE    | Application program                       |
| FTD2XX.INF          | USB driver file                           |
| UNINST.INI          | Uninstalls the EV kit software            |
| USB_Driver_Help.PDF | USB driver installation help file         |

- software  (17106DVRRxx.ZIP)  to  the  first  PC.  Save the EV kit software to a temporary folder and uncompress the ZIP files.
- 2) Download the latest version of the MAX17106 EV kit TCON software (17106TCONRxx.ZIP) to the second PC (or the first PC if a second PC is not available). Save the EV kit software to a temporary folder and uncompress the ZIP files.
- 3) Install the MAX17106 EV kit DVR software on the first PC by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu.
- 4) Install  the  MAX17106  EV  kit  TCON  software  on  the second  PC  by  running  the  INSTALL.EXE  program inside  the  temporary  folder.  The  program  files  are copied and icons are created in the Windows Start | Programs menu.
- 5) Verify that shunts are installed in the default position for all the jumpers listed in the following table:

<!-- image -->

## MAX17106 Evaluation Kit

| JUMPER   | SHUNT POSITION   | EV KIT FUNCTION                                                                      |
|----------|------------------|--------------------------------------------------------------------------------------|
| JU1      | Installed        | Device enabled                                                                       |
| JU2      | Installed        | Write protect disabled                                                               |
| JU3      | Installed        | SCL receives clock signal from the VCOM and EDID EEPROM USB interface circuit (USB1) |
| JU4      | Installed        | SDA receives data signal from the VCOM and EDID EEPROM USB interface circuit (USB1)  |
| JU5      | Installed        | SCLT receives clock signal from the TCON EEPROM USB inter- face circuit (USB2)       |
| JU6      | Installed        | SDAT receives data signal from the TCON EEPROM USB inter- face circuit (USB2)        |
| JU7      | Not installed    | HVS disabled                                                                         |
| JU8      | Installed        | VDD supplied by VIN                                                                  |
| JU101    | Pins 1-2         | I 2 C logic level supplied by the MAX17106 power supply                              |

- 6) Turn  on  the  power  supply  and  set  the  supply  to +3.3V; disable the power supply.
- 7) Connect the positive  terminal  of  the  power  supply to the VIN pad on the EV kit. Connect the negative terminal of the power supply to the PGND pad next to the VIN pad.
- 8) Enable the power supply.
- 9) Verify  that  the  MAIN  step-up  switching  regulator output (MAIN) is +8V.
- 10)  Verify that the VON step-up switching regulator output (VON) is +22V.
- 11)  Verify that the unregulated VOFF negative chargepump output (VOFF) is approximately -12V.
- 12)  Verify  that  the  op-amp  outputs  (VCOM1,  VCOM2, and VCOM3) are +4V.
- 13)  Connect the first USB cable from the first PC (DVR software)  to  the  USB1  USB  connector  on  the  EV kit  board.  A New Hardware  Found window  pops up when installing the USB driver for the first time. If  a  window  is  not  seen  that  is  similar  to  the  one described above after 30s, remove the USB cable from the board and reconnect it. Administrator privileges are required to install the USB device driver on Windows.
- 14)  Follow  the  directions  of  the Add  New  Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify  the  location  of  the  device  driver  to  be C:\ Program Files\MAX17106DVR (default  installation directory) using the Browse button. During device driver  installation,  Windows  may  show  a  warning message  indicating  that  the  device  driver  Maxim uses  does  not  contain  a  digital  signature.  This  is not  an  error  condition  and  it  is  safe  to  proceed with installation. Refer to the USB\_Driver\_Help.PDF document included with the software for additional information.
- 15)  Connect  the  second  USB  cable  from  the  second PC (TCON software) to the USB2 USB connector on the EV kit board. A New Hardware Found window pops up when installing the USB driver for the first time. If a window is not seen that is similar to the one described above after 30s, remove the USB cable from the board and reconnect it. Administrator privileges are required to install the USB device driver on Windows.
- 16)  Follow  the  directions  of  the Add  New  Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify  the  location  of  the  device  driver  to  be C:\ Program  Files\MAX17106TCON (default  installation  directory)  using  the Browse button.  During device  driver  installation,  Windows  may  show  a warning message indicating that the device driver Maxim  uses  does  not  contain  a  digital  signature. This is not an error condition and it is safe to proceed with installation. Refer to the USB\_Driver\_Help. PDF document included with the software for additional information.
- 17)  Start the MAX17106 EV kit DVR and TCON software by opening their icon in the Start | Programs menu of the respective PC.
- 18)  Observe as the programs automatically detect the I 2 C  addresses in the MAX17106 and start the programs. After successful connection, the EV kit software main windows (Figures 1 and 2, respectively) appear in the top-left corner of the PC monitors.
- 19)  The MAX17106 EV kit is ready for additional testing.

<!-- image -->

See the Detailed Description of MAX17106 EV Kit DVR ( and/or TCON) Software sections for more information on the software features. Note: Text in bold refers to userselectable  features  in  the  MAX17106  EV  kit  DVR  and TCON software  programs.  The  MAX17106  EV  kit  DVR and TCON software are independent of one another, and can operate alone or simultaneously.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX17106 Evaluation Kit

Figure 1. MAX17106 EV Kit DVR Software Main Window

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17106 Evaluation Kit

Figure 2. MAX17106 EV Kit TCON Software Main Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX17106 Evaluation Kit

## Detailed Description of MAX17106 EV Kit DVR Software (MAX17106DVR.EXE)

## Graphical User Interface (GUI) Panel

The MAX17106 EV kit DVR software GUI, shown in Figure 1, is the MAX17106 EV kit DVR software's main window. This window provides a convenient means to control the MAX17106  VCOM  calibrator  and  EDID  EEPROM.  Use the mouse or press the Tab key to navigate through the GUI controls. The correct I 2 C communication is generated to update the MAX17106 internal memory registers when any of these controls are executed.

The  MAX17106  EV  kit  DVR  software's  main  window (Figure  1)  divides  the  EV  kit  software  functions  into two  group  boxes, VCOM Calibrator  (DVR) and EDID EEPROM  (256  Bytes) .  The VCOM  Calibrator  (DVR) group box controls the MAX17106 VCOM1 on the EV kit. The VCOM2 and VCOM3 outputs on the EV kit are not controlled by the MAX17106 VCOM calibrator.

The VCOM  Calibrator  (DVR) group  box  displays  the DVR's I2C Address and I2C Data Sent indicators, which are used to confirm proper device operation. The Volatile Register block contains the Write and Read buttons that writes data to, or reads data from the VCOM calibrator (DVR) volatile register in the MAX17106. The DVR Data block  accepts  and/or  displays  the  DVR  data  for  the MAX17106.  The Non  Volatile  and  Volatile  Registers block contains the Program button to write the DVR data into both the volatile and nonvolatile registers.

The EDID  EEPROM  (256  Bytes) group  box  displays the  EDID  EEPROM  address  and  the  256  bytes  of EDID EEPROM data in a 16 x 16 string grid. The 256 bytes of data are stored in memory locations from 0x00 to  0xFF  in  the  MAX17106.  The  fixed  address  row  displays the column index, while the fixed address column displays  the  row  index  of  the  memory  locations.  The data  byte  address  is  the  sum  of  the  row  address  and the column address. The data can be input 1 byte or 8 bytes at a time and all 256 bytes of data can be read at the same time.

The bottom-left status bar of the main window provides the USB interface circuit communication status. The bottom-right status bar indicates the presence or absence of the MAX17106 IC.

## Software Startup

Upon starting  the  program,  the  MAX17106  EV  kit  DVR software  automatically  searches  for  the  USB  interface circuit  connection,  and  then  for  the  MAX17106  device address.  The  software  enters  the  normal  operating mode when the USB connection is detected and the IC has  acknowledged  its  device  address.  The DVR Data edit box displays the data from the volatile register. The EDID EEPROM (256 Bytes) group box displays the 256 bytes of data from the EDID EEPROM in the MAX17106. If  the  USB  connection  is  not  detected,  the  software prompts the user to retry, exit the program, or enter the demo mode.

## Demo Mode

The MAX17106 EV kit DVR software enters demo mode, when the USB connection is not detected, by selecting Cancel on  the  MAX17106  EV  kit  DVR  software  interface circuit popup window (Figure 3). The software can also enter the demo mode at any time by selecting the Options | Demo Mode menu item from the main window menu bar. When in demo mode, all software communication to the EV kit circuit is disabled; however, most of the software GUI is functional. Demo mode allows the user to  evaluate the software without hardware connectivity. To exit demo mode, select Options | Demo Mode from the menu bar.

## Volatile Register

The  MAX17106 EV kit DVR software's Volatile  Register block contains the Write and Read buttons to write and read  the  VCOM  calibrator  (DVR)  data  to  and  from  the MAX17106. Press the Write button to write the DVR data in the DVR Data edit box to the MAX17106's VCOM calibrator volatile register. Press the Read button to read the DVR data from the MAX17106's VCOM calibrator volatile register and display the DVR data in the DVR Data edit box.

## MAX17106EYKitDvRInterfaceCircuit

Interface Circuit not found,Select YES to keep trying g to connect, NO to exit program or CANCEL to enter DEMO Mode

Yes

No

Cancel

Figure 3. MAX17106 EV Kit DVR Software Interface Circuit Popup Window

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17106 Evaluation Kit

## DVR Data

The MAX17106 EV kit DVR software's DVR Data block contains an edit box to input DVR data to the MAX17106 VCOM calibrator volatile or both volatile and nonvolatile registers, and to display data from the volatile register. The DVR data ranges from 0x00 to 0x7F. The DVR Data edit box accepts a hexadecimal number from 00 to 7F, equivalent to the decimal range of 0 to 127. The VCOM calibrator DVR data adjusts the VCOM1 output voltage on the MAX17106 EV kit because the calibrator OUT pin is connected to the VCOM1's POS1 pin.

## Nonvolatile and Volatile Registers

The MAX17106 EV kit DVR software's Non Volatile and Volatile  Registers block  contains  the Program button to write the VCOM calibrator (DVR) data into the VCOM calibrator  nonvolatile  and  volatile  registers.  Press  the Program button to write the VCOM calibrator (DVR) data into  the  VCOM calibrator nonvolatile and volatile registers in the MAX17106 IC.

## Input 1 Byte

The  MAX17106  EV  kit  DVR  software's EDID  EEPROM (256 Bytes) group box contains the Input 1 Byte button to write 1 byte of data into the EDID EEPROM. Press the Input 1 Byte button to activate the MAX17106 EV kit DVR software's Input 1 Byte of Data popup window (Figure 4).  Enter  the  starting  address*  between  00  and  FF  for the EDID EEPROM location in the 0x edit box. Press the Update Grid button  to  update  and display the starting address  in  the  string  grid.  Enter  a  2-digit  hex  number between 00 and FF in the data field, and press the Write 1 Byte button to write the data into the EDID EEPROM.

## Input 8 Bytes

The  MAX17106  EV  kit  DVR  software's EDID  EEPROM (256 Bytes) group box contains the Input 8 Bytes button to input 8 bytes of data into the EDID EEPROM. Press the Input 8 Bytes button to activate the MAX17106 EV kit DVR software's Input 8 Bytes of Data popup window (Figure 5). Enter the starting address* between 00 and F8  for  the  EDID  EEPROM  location  in  the 0x edit  box. Press the Update Grid button to update and display the addresses in the string grid. Enter a 2-digit hex number between 00 and FF in each of all 8 data fields, and press the Write 8 Bytes button to write the data into the EDID EEPROM.

## Read All

The  MAX17106  EV  kit  DVR  software's EDID  EEPROM (256  Bytes) group  box  contains  the Read  All button to  read  all  256  bytes  of  data  from  the  EDID  EEPROM. Select the Read All button to read all 256 bytes of data from  the  MAX17106 EDID EEPROM. The data are displayed in the data grid with the address column index labeled  along  the  top  row,  and  the  address  row  index labeled along the left column.

* Starting  address:  Writing  to  location  00  automatically  erases  the  entire  EDID  memory  before  writing.  If  the  EDID EEPROM is not empty, be sure to start writing from location 00 to initially clear the EEPROM. Do not overwrite already written location.

<!-- image -->

Figure 4. MAX17106 EV Kit DVR Software Input 1 Byte of Data Popup Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX17106 Evaluation Kit

## Detailed Description of MAX17106 EV Kit TCON Software (MAX17106TCON.EXE)

## Graphical User Interface (GUI) Panel

The  MAX17106  EV  kit  TCON  software  GUI,  shown  in Figure 2, is the MAX17106 EV kit TCON software's main window.  This  window  provides  a  convenient  means  to control the MAX17106 TCON EEPROM. Use the mouse or press the Tab key to navigate through the GUI controls.  The  correct  I 2 C  communication  is  generated  to update the  MAX17106 internal  memory registers  when any of these controls are executed.

The  MAX17106  EV  kit  TCON  software's  main  window (Figure 2) divides the EV kit functions into three group boxes, TCON EEPROM (2048 Bytes) , Input 16 Bytes , and Read All . The TCON EEPROM (2048 Bytes) group box  displays  the  TCON  EEPROM  data.  The Input  16 Bytes group  box  inputs  data  to  the  TCON  EEPROM and the Read All group box reads data from the TCON EEPROM.

The TCON EEPROM (2048 Bytes) group box displays one  of  eight  pages  of  TCON  EEPROM  data.  Each  of the TCON EEPROM pages contains 256 bytes of TCON

EEPROM data in a 16 x 16 string grid. The 256 bytes of data are stored in memory locations from 0x00 to 0xFF in  the  selected  page.  Page selections are in the Input 16 Bytes and Read All group boxes. The fixed address row displays the column index, while the fixed address column displays the row index of the memory locations. The data byte address is the sum of the row address and the  column  address.  The  data  must  be  input  16  bytes at a time, sequentially starting from address page 0xA0 and byte 0x00. All 2048 bytes of data can be read at the same time.

The bottom-left status bar of the main window provides the USB interface circuit communication status. The bottom-right status bar indicates the presence or absence of the MAX17106 IC.

## Software Startup

Upon starting the program, the MAX17106 EV kit TCON software  automatically  searches  for  the  USB  interface circuit  connection,  and  then  for  the  MAX17106  device address. The software enters the normal operating mode when  the  USB  connection  is  detected  and  the  IC  has acknowledged its device address. The TCON EEPROM (2048 Bytes) group box displays the first 256 bytes (page) of data from the TCON EEPROM in the MAX17106. If the

Figure 5. MAX17106 EV Kit DVR Software Input 8 Bytes of Data Popup Window

<!-- image -->

Figure 6. MAX17106 EV Kit TCON Software Interface Circuit Popup Window

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17106 Evaluation Kit

USB connection is not detected, the software prompts the user to retry, exit the program, or enter the demo mode.

## Demo Mode

The  MAX17106  EV  kit  TCON  software  enters  demo mode,  when  the  USB  connection  is  not  detected,  by pressing  the Cancel button  on  the  MAX17106  EV  kit TCON software popup window (see Figure 6). The software can also enter demo mode at any time by selecting the Options  |  Demo  Mode menu  item  from  the  main window  menu  bar.  When  in  demo  mode,  all  software communication to the EV kit circuit is disabled; however, most  of  the  software  GUI  is  functional.  Demo  mode allows the user to evaluate the software without hardware connectivity. To exit demo mode, select Options | Demo Mode from the menu bar.

## Input 16 Bytes

The MAX17106 EV kit TCON software contains the Input Address drop-down list and the Input 16 Bytes button, which  are  used  to  enter  writing  mode  at  the  desired address. The Input Address drop-down list selects one of eight TCON EEPROM address pages. Each address page contains 256 bytes of TCON EEPROM data. Select one  of  the  eight  TCON  EEPROM  address  pages  from the Input Address drop-down list to input data to that address page. Press the Input 16 Bytes button to activate  the  MAX17106  EV  kit  TCON  software's Input  16 Bytes of Data popup window (Figure 7). Enter the starting address between 00 and F0 for the TCON EEPROM location in the 0x edit box. Note that the starting address must be a multiple of 16 (i.e., 0x00, 0x10, 0x20, 0x30… …0xF0), and data must be entered sequentially into the TCON  EEPROM  starting  from  memory  location  0x00.

Press the Update Grid button to update and display the addresses in the string grid. Enter a 2-digit hex number between  00  and  FF  in  each  of  all  16  data  fields,  and press the Write 16 Bytes button  to  write  the  data  into the TCON EEPROM.

## Read All

The MAX17106 EV kit TCON software contains the Read Address drop-down list and the Read All button to read 2048 bytes of data from the TCON EEPROM. Press the Read All button to read all 2048 bytes of data from the MAX17106 TCON EEPROM. The 2048 bytes of  TCON EEPROM data are stored in eight address pages. Each address  page  contains  256  bytes  of  TCON  EEPROM data.  The Read  Address drop-down  list  selects  one of  eight  TCON  EEPROM  address  pages.  Select  one of  the  eight  TCON  EEPROM  address  pages  from  the Read Address drop-down list to display data from that address page. The data are displayed in the data grid with  the  address  column  index  labeled  along  the  top row,  and  the  address  row  index  labeled  along  the  left column.

## Keyboard Navigation

Press the Tab key to select each GUI control. Most of the selected control is indicated by a dotted outline. Using Shift + Tab moves the selection to the previously selected  control.  Buttons  respond  to  the  keyboard's  Space bar.  Some  controls  respond  to  the  keyboard  Up  and Down arrow keys. Activate the program's menu bar by pressing the F10 key, then press the letter of the desired menu item. When the Alt key is pressed and released, most menu items show one letter underlined, indicating their shortcut key.

<!-- image -->

Figure 7. MAX17106 EV Kit TCON Software Input 16 Bytes of Data Popup Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    11

## MAX17106 Evaluation Kit

## Simple I 2 C Commands

There  are  two  methods  for  communicating  with  the MAX17106  EV  kit,  through  the  normal  user-interface panel (Figures 1 and 2), or by using low-level SMBus TM commands available through a 2-wire interface diagnostic  tool.  Activate  the 2-Wire  Interface (Figure  8)  utility from the main program's Options | Interface (Advanced Users) main  menu  bar.  A  window  is  displayed  that allows I 2 C operations, such as SMBusReceiveByte and SMBusSendByte .

Note: The  I 2 C  dialog  boxes  accept  numeric  data  in binary, decimal, or hexadecimal. Hexadecimal numbers must be prefixed by $ or 0x. Binary numbers must be exactly eight binary digits. See Figure 8 for an example of this tool. Figure 8 shows a simple SMBus send-byte operation using the included 2-wire interface diagnostics tool. In this example, the software is sending data (Cmd)

0xFF to the device with the device address 0x9E. The data sequence calibrates the MAX17106 EV kit's VCOM1 to +2.4V (min).

Refer to Application Note 476: Comparing the I 2 C Bus to  the  SMBus , available  from www.maxim-ic.com, for  information  regarding  the  differences  between  the SMBus and I 2 C protocols.

## General Troubleshooting

## Problem: Software reports it cannot find the interface circuit

- Is the interface circuit power LEDs (D101, D201) lit?
- Is the USB cable connected?
- Has  Windows  plug-and-play  detected  the  board? Bring up Control Panel-&gt;System-&gt;Device Manager, and  look  at  what  device  nodes  are  indicated  for USB. If there is an 'unknown device' node attached

Figure 8. Simple Low-Level 2-Wire Interface

<!-- image -->

SMBus is a trademark of Intel Corporation.

12      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17106 Evaluation Kit

- to  the  USB,  delete  it-this  forces  plug-and-play  to try again.
- Are  jumpers  JU101,  JU1-JU6,  and  JU8  properly configured?
- 4) For  temperatures  between  approximately  +40 N C and  +70 N C,  the  VON  output  is  gradually  changed from +22V to +16V.

## Detailed Description of Hardware

The  MAX17106  EV  kit  contains  a  step-up  switching regulator for the MAIN supply, a second step-up switching regulator with temperature compensation for the TFT VON supply, a two-stage negative charge pump for the TFT VOFF supply, a linear regulator (LOUT), three highcurrent op amps (VCOM1, VCOM2, and VCOM3), a digitally adjustable VCOM calibration device with nonvolatile memory (connected to VCOM1), two EEPROM memory blocks with separate I 2 C interfaces, and a high-voltage level-shifting  scan  driver  with  complementary  outputs that allow charge sharing during state changes to drive the  TFT  panel  integrated  gate  drivers.  A  high-voltage stress  (HVS)  mode  is  provided  to  increase  the  MAIN and the  VOFF  charge-pump output voltages  for  stress testing the display panel during production. The EV kit is configured to operate from a +2.4V to +3.6V DC supply voltage.  If  jumper  JU8  is  removed,  separating  the  VIN from VDD, then the input-voltage range for VIN is +2.4V to +5.5V and the input-voltage range for VDD is +2.4V to +3.6V. The MAX17106 switching frequency is 1.2MHz.

The  MAIN  step-up  switching  regulator  (MAIN)  is  configured for a +8V output providing at least 300mA. The MAIN  step-up  switching  regulator  output  voltage  can be  adjusted  from  +VIN  to  +10V-limited  by  the  twostage VOFF charge pump and the -18V input range of the  scan  driver-by  replacing  the  feedback  resistors, R11  and  R12  (refer  to  the Design  Procedure,  Main Step-Up Regulator, Output Voltage Selection section in the MAX17106 IC data sheet). Do not allow VMAIN to exceed +10V, even in HVS mode to avoid overvoltage on the scan driver's VOFF input.

The VON step-up switching regulator is  configured  for a +22V output (at room temperature), providing at least 20mA. The VON output voltage is adjusted for temperature  to  compensate  for  TFT  mobility.  The  VON  output voltage has five output levels depending on thermistor RT1's temperature:

- 1) For temperatures less than approximately -5 N C, the VON output is +31.1V.
- 2) For  temperatures  between  approximately  -5 N C and +10 N C,  the  VON  output  is  gradually  changed  from +31.1V to +22V.
- 3) At room temperature, the VON output is +22V.
- 5) For temperatures greater than approximately +70 N C, the VON output is +16V.

<!-- image -->

The  VON  output  voltage  at  room  temperature  can  be adjusted from VMAIN to +38V by replacing the feedback resistors, R13 and R14 (refer to the Design Procedure, VON  Temperature-Compensated  Step-Up  Regulator section  in  the  MAX17106  IC  data  sheet  for  information on  adjusting  the  output  voltage  and  temperature  compensation curve). Do not allow VON to exceed +38V at any temperature.

The  VOFF  negative  charge  pump  is  configured  for  a -12V output providing at least 20mA. The internal LOUT provides a fixed +2.5V output and 300mA.

The MAX17106 provides three high-current op amps that can each source or sink 50mA. The output of the amplifiers (VCOM1, VCOM2, and VCOM3) are configured for +4V (VMAIN/2). The VCOM1, VCOM2, and VCOM3 output voltages can be adjusted from 0V to MAIN by replacing voltage-divider resistors R15 and R16, R17 and R18, or R19 and R20, respectively.

One of the high-current op amps (VCOM1) is connected to  the  VCOM  calibrator  OUT  pin.  The  VCOM1  output voltage can be adjusted between +2.4V and +4V using the MAX17106 VCOM calibrator and the MAX17106 EV kit DVR software. The VCOM1's calibrating range can be adjusted by replacing the full-scale sink-current adjustment  resistor  (R22).  Refer  to  the Design  Procedure, Setting  the  VCOM  Adjustment  Range section  in  the MAX17106 IC data sheet for additional details.

The  MAX17106  EV  kit  provides  two  on-board  USB interface circuits to communicate with the two separate 2-wire  I 2 C  interface  circuits  in  the  MAX17106  IC.  One of  the  I 2 C  interface  circuits  in  the  MAX17106  provides the VCOM calibrator and the 2kb EDID EEPROM communication, while the other I 2 C interface circuit provides the  16kb  TCON  EEPROM  communication.  The  VCOM and EDID EEPROM interface circuit connection is available on USB connector USB1, while the TCON EEPROM interface circuit connection is available on USB connector USB2. Both I 2 C interface circuits in the MAX17106 IC communicate at a maximum data rate of 100kHz.

The MAX17106 also features a high-voltage level-shifting scan driver to drive the TFT panel integrated gate drivers. The outputs of the drivers swing from VON to VOFF. To  save  power,  a  set  of  complementary  outputs  are provided to allow charge sharing during state changes. The MAX17106 EV kit provides PCB pads to connect the

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    13

## MAX17106 Evaluation Kit

logic inputs, scan drive outputs, and the VSS discharge input (DISVSS).

The MAX17106 features HVS mode, which can increase the  output-voltage  magnitudes  of  the  MAIN  step-up switching-regulator  and  the  negative  charge  pump  to stress  test  the  display  panel  during  production.  The MAIN step-up switching-regulator's output is increased to  +10V  in  HVS  mode,  set  by  resistor  R10  (refer  to the Design  Procedure,  HVS  Function section  in  the MAX17106  IC  data  sheet).  The  unregulated  negative charge-pump output is set to -16V in HVS mode and is approximately 2 x VMAIN - 4V. Do not allow VMAIN to exceed +10V, even in HVS mode, to avoid overvoltage on the scan driver's VOFF input.

## Table 1. JU1 Jumper Selection ( SHDN )

| SHUNT POSITION                                         | SHDN PIN CONNECTED TO     | EV KIT FUNCTION                                                  |
|--------------------------------------------------------|---------------------------|------------------------------------------------------------------|
| Installed*                                             | VIN                       | Enabled                                                          |
| Not installed                                          | GND (through resistor R1) | Shutdown mode                                                    |
| None (external logic controller connected to SHDN pad) | External logic controller | SHDN driven by external logic control- ler ( SHDN is active low) |

## Table 2. JU2 Jumper Selection (WPN)

| SHUNT POSITION                                        | WPN PIN CONNECTED TO           | EV KIT FUNCTION                                                   |
|-------------------------------------------------------|--------------------------------|-------------------------------------------------------------------|
| Installed*                                            | VDD                            | Write protect disabled                                            |
| Not installed                                         | GND (240k W internal pulldown) | Write protect enabled (I 2 C commands at SCL and SDA are ignored) |
| None (external logic controller connected to WPN pad) | External logic controller      | WPN driven by external logic control- ler (WPN is active low)     |

Table 3. JU3, JU4 Jumper VCOM and EDID E2PROM Functions (SCL, SDA)

| SHUNT POSITION   | I 2 C INTERFACE CONTROL SIGNALS CONNECTED TO        | I 2 C INTERFACE SIGNALS CONTROLLED BY                                                                       |
|------------------|-----------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| Installed*       | On-board VCOM and EDID EEPROM USB interface circuit | On-board VCOM and EDID EEPROM USB interface circuit through connector USB1 and MAX17106 EV kit DVR software |
| Not installed    | PCB pads                                            | User-supplied external I 2 C interface signals**                                                            |

14      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Jumper Selection

## Shutdown Mode ( SHDN )

Jumper  JU1  controls  the  shutdown  pin  ( SHDN )  of  the MAX17106 IC. The shutdown pin can also be controlled by an external logic controller connected to the EV kit's SHDN pad. Remove the shunt from jumper JU1 before connecting an external controller to the SHDN pad. See Table 1 for shunt positions.

## Write-Protect Input (WPN)

Jumper JU2 controls the write-protect input pin (WPN) of the MAX17106 IC. WPN can also be controlled by an external logic controller connected to the EV kit's WPN pad. Remove the shunt from jumper JU2 before connecting an external controller to the WPN pad. See Table 2 for shunt positions.

<!-- image -->

## MAX17106 Evaluation Kit

## VCOM and EDID EEPROM I 2 C Clock and Data Inputs (SCL, SDA)

## TCON EEPROM I 2 C Clock and Data Inputs (SCLT, SDAT)

The  MAX17106  features  clock  and  data  input  pins  for I 2 C-compatible communication to control the MAX17106 VCOM and EDID EEPROM. The clock and data pins can be driven by the on-board USB interface circuit through USB connector USB1, or the PCB pads along with usersupplied external I 2 C-compatible controller. An external I 2 C-compatible controller can be connected to the SCL, SDA, and GND pads to communicate with the MAX17106 VCOM and EDID EEPROM. The external controller must include bus pullup resistors for SCL and SDA. Jumpers JU3 and JU4 select the I 2 C serial-interface-signal control sources for the MAX17106 VCOM and EDID EEPROM. Table 3 lists the various options for configuring SCL and SDA I 2 C input signal controls.

The  MAX17106  features  clock  and  data  pins  for  I 2 Ccompatible  communication  to  control  the  MAX17106 TCON  EEPROM.  The  clock  and  data  pins  can  be driven  by  the  on-board  USB  interface  circuit  through connector USB2, or the PCB pads along with the usersupplied external I 2 C-compatible controller. An external I 2 C-compatible  controller  can  be  connected  to  the SCLT, SDAT, and GND pads to communicate with the MAX17106  TCON  EEPROM.  The  external  controller must include bus pullup resistors for SCLT and SDAT. Jumpers  JU5  and  JU6  select  the  I 2 C  serial-interfacesignal control sources for the MAX17106 TCON EEPROM. Table 4 lists the various options for configuring SCLT and SDAT I 2 C input signal controls.

Table 4. JU5, JU6 Jumper TCON E 2 PROM Functions (SCLT, SDAT)

| SHUNT POSITION   | I 2 C INTERFACE CONTROL SIGNALS CONNECTED TO   | I 2 C INTERFACE SIGNALS CONTROLLED BY                                                                 |
|------------------|------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| Installed*       | On-board TCON EEPROM USB interface circuit     | On-board TCON EEPROM USB interface circuit through con- nector USB2 and MAX17106 EV kit TCON software |
| Not installed    | PCB pads                                       | User-supplied external I 2 C interface signals**                                                      |

Table 5. JU7 Jumper Selection (HVS)

| SHUNT POSITION   | HVS PIN CONNECTED TO   | OPERATING MODE   |
|------------------|------------------------|------------------|
| Installed        | VIN                    | HVS mode         |
| Not installed*   | Not connected          | Normal mode      |

Table 6. JU8 Jumper Selection (VDD)

| SHUNT POSITION   | VDDS/VDDE/VDDT PINS CONNECTED TO                                 | VIN VOLTAGE RANGE    |
|------------------|------------------------------------------------------------------|----------------------|
| Installed*       | VIN                                                              | VIN = +2.4V to +3.6V |
| Not installed    | External VDD supply (+2.4V to +3.6V) across VDD and GND PCB pads | VIN = +2.4V to +5.5V |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    15

## MAX17106 Evaluation Kit

## High-Voltage Stress (HVS) Mode

The  MAX17106  EV  kit  features  an  option  to  increase the  output-voltage  magnitudes  of  the  step-up  switching  regulator  and  the  negative  charge  pump  to  stress test  the  display  panel  during  production.  Since  the op-amp inputs  are  derived  from  the  step-up  converter output (MAIN), their output voltages increase when MAIN increases. Do not allow VMAIN to exceed +10V, even in HVS mode, to avoid overvoltage on the scan driver's VOFF  input. Jumper  JU7  selects  the  HVS  mode  for the MAX17106. Table 5 lists the selectable JU7 jumper options.

## Logic Supplies (VDD)

The  MAX17106  EV  kit  features  an  option  to  select  the input  source  for  the  logic  supply  VDD  to  power  the VDDS, VDDE, and VDDT pins. When VIN is in the range of +2.4V to +3.6V, install a shunt on jumper JU8 to con-

## Table 7. JU101 Jumper Function (VDDIO)

| SHUNT POSITION   | MAX17106 I 2 C SIGNALS PULL UP TO   | VOLTAGE RANGE   |
|------------------|-------------------------------------|-----------------|
| 1-2*             | VDD                                 | +2.4V to +3.6V  |
| 2-3              | VDDIO (external DC power supply)    | +1.7V to +3.6V  |

16      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

nect VDD to VIN. When VIN is greater than +3.6V and up  to  +5.5V,  remove  the  shunt  from  jumper  JU8,  and connect an external supply (+2.4V to +3.6V) across the VDD and GND PCB pads to power the VDDS, VDDE, and VDDT logic supplies. Table 6 shows the selectable jumper options for jumper JU8 on the MAX17106 EV kit

## MAX17106 I 2 C Signal Pullup Voltage Level

The  MAX17106  EV  kit  circuit  features  an  option  to select the pullup voltage level for the I 2 C signals for the MAX17106  IC.  Jumper  JU101  selects  the  I 2 C  signals' pullup voltage level of the MAX17106 IC. The MAX17106 I 2 C  signals can be pulled up to the EV kit's logic input power VDD or to a user-supplied external DC power supply connected across the VDDIO and GND PCB pads. The external VDDIO power supply can range from +1.7V to +3.6V. Table 7 shows the selectable jumper options for jumper JU101 on the MAX17106 EV kit.

<!-- image -->

## MAX17106 Evaluation Kit

<!-- image -->

Figure 9a. MAX17106 EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    17

## MAX17106 Evaluation Kit

Figure 9b. MAX17106 EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

18      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17106 Evaluation Kit

<!-- image -->

Figure 9c. MAX17106 EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    19

## MAX17106 Evaluation Kit

Figure 10. MAX17106 EV Kit Component Placement Guide-Component Side

<!-- image -->

20      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17106 Evaluation Kit

<!-- image -->

Figure 11. MAX17106 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    21

## MAX17106 Evaluation Kit

Figure 12. MAX17106 EV Kit PCB Layout-GND Layer 2

<!-- image -->

22      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17106 Evaluation Kit

<!-- image -->

Figure 13. MAX17106 EV Kit PCB Layout-PWR Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    23

## MAX17106 Evaluation Kit

Figure 14. MAX17106 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

24

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600