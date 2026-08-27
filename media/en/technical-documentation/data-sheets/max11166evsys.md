<!-- lastmod 2022-08-03 -->
## MAX11166 Evaluation System

## General Description

The MAX11166 evaluation system (EV system) includes a  mother  board  and  daughter  board  to  evaluate  the MAX11166 16-bit ADC. The EV system includes a simple graphical user interface (GUI) for exercising the features of  the  IC.  This  GUI  is  compatible  with  Windows  XP®-, Windows Vista®-, and Windows® 7. The EV system GUI allows different sample sizes, adjustable sampling rates, internal or external reference options, and graphing software  that  includes  the  following  representations  of  the sampled signals: time domain, frequency domain, histogram, and single conversion.

The  EV  system  is  made  up  of  the  MAXPRECADCMB mother  board  with  an  on-board  Altera  FPGA  and  the daughter board for evaluating the IC. The mother board plugs into the PC through a high-speed USB link to send SPI  commands  through  the  GUI.  The  mother  board accepts a 5V supply. The daughter board accepts ±15V supplies.

The daughter board comes installed with a MAX11166ETC+ in a 12-pin TDFN-EP package.

## MAX11166 EV System Block Diagram

<!-- image -->

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

## Features

- Windows	XP-,	Windows	Vista-,	and	Windows 7-Compatible Software
- High-Speed	USB	Interface
- Various	Sample	Sizes	and	Sample	Rates
- Time	Domain,	Frequency	Domain,	and	Histogram Plotting
- Collects	Up	to	1	Mega	Samples
- Frequency,	RMS,	MIN,	MAX,	and	Average	DC Calculations
- On-Board	Voltage	Reference
- 40MHz	SPI	Interface
- RoHS	Compliant
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX11166

<!-- image -->

## MAX11166 Evaluation System

## MAX11166 EV System Files

| FILE                    | DESCRIPTION                                   |
|-------------------------|-----------------------------------------------|
| INSTALL.EXE             | Installs the EV system files on your computer |
| MAX11166.EXE            | Application program                           |
| SLSUSB.DLL              | Software library file                         |
| SLSUSB.INF              | USB device driver file                        |
| SLSUSB.SYS              | USB device driver file                        |
| USB_Driver_Help_200.PDF | USB driver installation file                  |

## Quick Start

## Required Equipment

- MAX11166	 daughter	 board	 (included	 with	 the	 EV system)
-  MAXPRECADCCMB	(included	with	EV	system)
- ±15V	DC	power	supply
- +5V	DC	power	supply
- Function	generator
- Digital	voltmeters	(DVMs)
- Windows	XP,	Windows	Vista,	or	Windows	7	PC	with	a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV system software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The EV system is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1) Uncompress  the  11166Rxx.ZIP  file  in  a  temporary folder.
- 2) Install the EV system software on your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Carefully  connect  the  MAXPRECADCMB  (mother board) with the daughter board by aligning the mother board's  J1  connector  with  the  daughter  board's  J1 connector. Gently press them together.
- 4) Verify	that	all	jumpers	are	in	their	default	positions,	as shown in Table 1 and Table 2.
- 5) Connect  the  USB  cable  from  the  PC  to  the  mother board.
- 6) Connect  the  positive  terminal  of  the  +5V  power supply  to  the  VIN  connector  on  the  mother  board. Connect  the  negative  terminal  of  the  same  power supply to the DGND  connector  on  the  board. Connect the +15V to the EXT\_VCC connector on the daughter board, and connect the -15V to the EXT\_VEE connector on the daughter board. Connect the  ground  of  the  same  power  supply  to  the  GND connector on the daughter board.
- 7) Set	 the	 signal	 source	 to	 generate	 a	 1kHz,	 1V P-P sinusoidal	wave	with	0V	offset.
- 8)  Connect the positive terminal of the signal generator  to  the  AIN+  connector  on  the  daughter board.  Connect  the  negative  terminal  of  the  signal generator to the GND connector.
- 9) Turn on the power supplies.
- 10) Connect	 the	 USB	 cable	 from	 the	 PC	 to	 the	 mother board.  A New  Hardware  Found window  pops  up when  installing  the  USB  driver  for  the  first  time.  If you do not see a window similar to the one described above	 after	 30s,	 remove	 the	 USB	 cable	 from	 the board  and  reconnect  it. Administrator  privileges  are required to install the USB device driver on Windows.
- 11) Follow  the  directions  of  the Add  New  Hardware Wizard to  install  the  USB  device  driver.  Choose the Search  for  the  best  driver  for  your  device option.  Specify  the  location  of  the  device  driver  to be C:\Program Files\MAX11166 (default  installation directory)  using  the Browse button.  During  device driver  installation,  Windows  may  show  a  warning message  indicating  that  the  device  driver  does  not contain  a  digital signature.  This  is  not  an  error condition and it is safe to proceed with installation.

│

Evaluates: MAX11166

## MAX11166 Evaluation System

- 12) Turn on the function generator.
- 13) Start  the  EV  system  software  by  opening  its  icon in the Start | Programs menu. The EV system software device selection window appears, as shown in Figure 1.
- 14) The main windows should indicate Hardware Connected at the bottom-left corner.
- 15) Press the Start Conversion button.
- 16) Verify Frequency of	approximately	1000Hz.

Figure 1. MAX11166 Evaluation System Software Main Window

<!-- image -->

## Detailed Description of Software

The  main  window  of  the  evaluation  software  (shown  in Figure  1)  configures  the  ADCs  and  displays  the  data using  the  four  tab  sheets: Time  Domain , Frequency Domain , Histogram ,  and Single  Conversion .  In  addition, the sampled data can be saved to a file.

ADC #1 is designated as U1 and ADC #2 is designated as U3 in the schematic.

│

## CS Mode (Single Channel)

The  factory-default  jumper  settings  have  the  ADCs  on the  daughter  board  configured  for  CS  mode,  using  the MAX11166 (U1) only. In this configuration, the JU3 shunt is in position 1-3, JU12 is in position 1-2, and JU13 is in position	1-2.	The	mother	board	SPI	MOSI	drives	U1	DIN through	JU3,	then	U1	DOUT	drives	the	mother	board	SPI MISO	through	JU5.	U3	is	not	used.	In	the	software,	the Device Configuration group Interface Mode Selection must be set to CS Mode .

## Daisy-Chain Mode

To  use  the ADCs  on  the  daughter  board  in  daisy-chain mode, move the shunts of JU3, JU12, and JU13 to the 1-2	position.	The	mother	board	SPI	MOSI	drives	U3	DIN, and	 U3	 DOUT	 drives	 U1	 DIN	 through	 JU3.	 Then,	 U1 DOUT	drives	the	mother	board	SPI	MISO	through	JU5.	In the software, the Device Configuration group Interface Mode Selection must be set to Daisy-Chain Mode .

## Multichannel Mode

To  use  the  ADCs  on  the  daughter  board  in  multichannel  mode,  move  the  shunts  of  JU3  to  the  1-3  position, and  move  the  shunts  of  JU12  and  JU13  to  the  2-3 position.	 The	 mother	 board	 SPI	 MOSI	 drives	 U1	 DIN through	 JU3,	 then	 U1	 DOUT	 drives	 the	 mother	 board SPI	 MISO	 through	 JU5.	 The	 mother	 board	 SPI	 MOSI drives U3	 DIN	 directly,	 and	 U3	 DOUT	 drives	 the mother	board	SPI	MISO	through	JU12.	U1	and	U3	have different	CONVST	signals	in	this	mode,	with	U1	CONVST driven	 through	 JU6	 from	 CONVST1,	 and	 U3	 CONVST driven	through	JU13	from	CONVST2.	In	the	software,	the Device Configuration group Interface Mode Selection must be set to Multichannel CS Mode .

## Detailed Description of Hardware

The MAX11166 daughter board provides a proven layout for  the  device.  An  external  reference,  level  translators, and  SPI-interface  pads  are  included  on  the  daughter board.

## Reference

Measure	REFOUT	at	pin	2	of	JU5	for	all	internal	reference parts. Enter the value of the internal reference voltage into the Set Vref edit box in the software GUI.

For external reference parts, connect a reference voltage to pin 2 of JU5. Measure and enter the value of the external reference voltage into the Set Vref edit box of the software GUI.

## User-Supplied SPI Interface

To use the daughter board with a user-supplied SPI interface,	first	move	the	shunts	of	JU1-JU4	to	the	2-3	position. Next,	apply	your	own	4.75V	to	5.25V	power	supply	at	the VDD	PCB	pad.	Lastly,	connect	your CS ,	SCLK,	and	DIN signals  to  the  corresponding CS ,	 SCLK,	 and	 DIN	 PCB pads on the daughter board.

## User-Supplied Power Supply

The daughter board is powered completely from the USB port by default. Move the shunt of JU1 to the 2-3 position to	 apply	 your	 own	 4.75V	 to	 5.25V	 power	 supply	 at	 the VDD PCB pad.

│

Table 1. MAXPRECADCMB Mother Board Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                            |
|----------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU35     | 1-2              | Connects the USB power to the input of the on-board LDO (U10).                                                                                                                                         |
| JU35     | 2-3*             | Connects the external power supply to the input of the on-board LDO (U10).                                                                                                                             |
| JU36     | 1-2              | Connects the USB power to the input of the on-board LDO (U11).                                                                                                                                         |
| JU36     | 2-3*             | Connects the external power supply to the input of the on-board LDO (U11).                                                                                                                             |
| JU37     | 1-2              | Connects the USB power to the input of the on-board LDO (U12).                                                                                                                                         |
| JU37     | 2-3*             | Connects the external power supply to the input of the on-board LDO (U12).                                                                                                                             |
| JU38     | 1-2              | Connects the USB power to the input of the on-board LDO (U13).                                                                                                                                         |
| JU38     | 2-3*             | Connects the external power supply to the input of the on-board LDO (U13).                                                                                                                             |
| JU39     | 1-2              | Connects the USB power to the input of the on-board LDO (U3).                                                                                                                                          |
| JU39     | 2-3*             | Connects the external power supply to the input of the on-board LDO (U3).                                                                                                                              |
| JU40     | Installed*       | The on-board LDO (U10) provides a 3.3V output.                                                                                                                                                         |
| JU40     | Not installed    | Disconnects the output of the on-board LDO (U10).                                                                                                                                                      |
| JU41     | Installed*       | The on-board LDO (U11) provides a 1.8V output.                                                                                                                                                         |
| JU41     | Not installed    | Disconnects the output of the on-board LDO (U11).                                                                                                                                                      |
| JU42     | Installed*       | The on-board LDO (U12) provides a 2.5V output.                                                                                                                                                         |
| JU42     | Not installed    | Disconnects the output of the on-board LDO (U12).                                                                                                                                                      |
| JU43     | Installed*       | The on-board LDO (U13) provides a 1.2V output.                                                                                                                                                         |
| JU43     | Not installed    | Disconnects the output of the on-board LDO (U13).                                                                                                                                                      |
| JU44     | 1-2              | Connects the IOVDD supply to the on-board 2.5V supply.                                                                                                                                                 |
| JU44     | 1-3*             | Connects the IOVDD supply to the on-board 3.3V supply from on-board U3.                                                                                                                                |
| JU44     | 1-4              | Connects the IOVDD supply to the on-board 2.5V supply.                                                                                                                                                 |
| JU44     | Not installed    | IOVDD can be externally powered by the daughter board. IOVDD can be externally supplied by placing the IOVDD voltage on the IOVDD test point. The Altera FPGAcannot handle voltages greater than 3.3V. |
| JU45     | 1-2              | Connects external (daughter board) SPI flash to the FGPA.                                                                                                                                              |
| JU45     | 2-3*             | Connects on-board (mother board) SPI flash to the FGPA.                                                                                                                                                |

## MAX11166 Evaluation System

Evaluates: MAX11166

Table 2. MAX11166 Daughter Board Jumper Descriptions (JU1-JU16)

| JUMPER   | SIGNAL    | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                                        |
|----------|-----------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | U1.OVDD   | 1-2*             | Connects the OVDD input of the IC to the output of the on-board 5V LDO.                                                                                                                                            |
| JU1      | U1.OVDD   | 2-3              | Connect the external OVDD power supply to the OVDD connector.                                                                                                                                                      |
| JU2      | U1.VDD    | 1-2*             | Connects the VDD input of the IC to the output of the on-board 5V LDO.                                                                                                                                             |
| JU2      | U1.VDD    | 2-3              | Connect the external VDD power supply to the VDD connector.                                                                                                                                                        |
| JU3      | U1.DIN    | 1-2              | (Interface Mode Selection = Daisy-Chain Mode) Connects the DIN input of the first MAX11166 (U1) to the DOUT output of the second MAX11166 (U3) when JU12 is in the 1-2 position.                                   |
| JU3      | U1.DIN    | 1-3*             | (Interface Mode Selection = CS Mode) (Interface Mode Selection = Multichannel CS Mode) Connects the DIN input of U1 to the FPGA.                                                                                   |
| JU3      | U1.DIN    | 1-4              | Connects the DIN input of the MAX11166 (U1) to the EXT_DIN connector.                                                                                                                                              |
| JU4      | U1.SCLK   | 1-2*             | Connects the SCLK input of the IC to the FPGA.                                                                                                                                                                     |
| JU4      | U1.SCLK   | 2-3              | Connects the SCLK input of the IC to the EXT_SCLK connector.                                                                                                                                                       |
| JU5      | U1.DOUT   | 1-2*             | Connects the DOUT signal of the MAX11166 (U1) to the first DOUT pin (DOUT) of the FPGA.                                                                                                                            |
| JU5      | U1.DOUT   | 2-3              | Connects the DOUT signal of the MAX11166 (U1) to the EXT_DOUT connector.                                                                                                                                           |
| JU6      | U1.CONVST | 1-2*             | Connects the CONVST signal of the MAX11166 (U1) to the FPGA.                                                                                                                                                       |
| JU6      | U1.CONVST | 2-3              | Connects the CONVST signal of the MAX11166 (U1) to the EXT_CNVST connector.                                                                                                                                        |
| JU7      | U1.REFIO  | 1-2*             | Connects the REFIO of the MAX11166 to the on-board 4.096V reference.                                                                                                                                               |
| JU7      | U1.REFIO  | 2-3              | Connects the REFIO to the EXT_REF connector.                                                                                                                                                                       |
| JU8      | U1.AIN-   | 1-2*             | Connects the AIN- input of the MAX11166 (U1) to ground.                                                                                                                                                            |
| JU8      | U1.AIN-   | 2-3              | Connects the AIN1- connector to the AIN- input of the MAX11166 (U1).                                                                                                                                               |
| JU9      | U1.AIN+   | 1-2*             | Connects the AIN1+ connector to the AIN+ input of the MAX11166 (U1).                                                                                                                                               |
| JU9      | U1.AIN+   | 2-3              | The output of the on-board buffer (U2) connects to the AIN+ input of the MAX11166 (U1).                                                                                                                            |
| JU10     | U3.AIN+   | 1-2*             | Connects the AIN2+ connector to the AIN+ input of the MAX11166 (U3).                                                                                                                                               |
| JU10     | U3.AIN+   | 2-3              | The output of the on-board buffer (U4) connects to the AIN+ input of the MAX11166 (U3).                                                                                                                            |
| JU11     | U3.AIN-   | 1-2*             | Connects the AIN- input of the MAX11166 (U3) to ground.                                                                                                                                                            |
| JU11     | U3.AIN-   | 2-3              | Connects the AIN2- connector to the AIN- input of the MAX11166 (U3).                                                                                                                                               |
| JU12     | U3.DOUT   | 1-2*             | (Interface Mode Selection = CS Mode) (Interface Mode Selection = Daisy-Chain Mode) Connects the DOUT signal of the second MAX11166 (U3) to the DIN pin of the first MAX11166 (U1) when JU3 is in the 1-2 position. |
| JU12     | U3.DOUT   | 2-3              | (Interface Mode Selection = Multichannel CS Mode) Connects the DOUT signal of the MAX11166 (U3) to the DOUT pin of the FPGA.                                                                                       |

│

## MAX11166 Evaluation System

Evaluates: MAX11166

## Table 2. MAX11166 Daughter Board Jumper Descriptions (JU1-JU16) (continued)

| JUMPER   | SIGNAL     | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                         |
|----------|------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU13     | U3.CONVST  | 1-2*             | (Interface Mode Selection = CS Mode) (Interface Mode Selection = Daisy-Chain Mode) Connects the CONVST input of the MAX11166 (U3) to the first CONVST signal (CONVST1) of the FPGA. |
| JU13     | U3.CONVST  | 2-3              | (Interface Mode Selection = Multichannel CS Mode) Connects the CONVST input of the MAX11166 (U3) to the second CONVST signal (CONVST2) of the FPGA.                                 |
| JU14     | U1.DOUT.R8 | 1-2*             | (For interface modes with busy indicator.) Connects the pullup resistor to the DOUT output of the MAX11166 (U1).                                                                    |
| JU14     | U1.DOUT.R8 | No shunt         | Disconnects the pullup resistor from the MAX11166 (U1).                                                                                                                             |
| JU15     | U8.5VL     | 1-2*             | Connects the output of the LDO (U8) to the OVDD input of the IC when JU1 is in the 1-2 position.                                                                                    |
| JU15     | U8.5VL     | No shunt         | Disconnects the output of the on-board LDO (U8).                                                                                                                                    |
| JU16     | U10.5V     | 1-2*             | Connects the output of the LDO (U10) to the VDD input of the IC when JU2 is in the 1-2 position.                                                                                    |
| JU16     | U10.5V     | No shunt         | Disconnects the output of the on-board LDO (U10).                                                                                                                                   |

## Component Lists

## MAX11166 EV System

| PART             |   QTY | DESCRIPTION                   |
|------------------|-------|-------------------------------|
| MAX11166DBEVKIT# |     1 | MAX11166 daughter board       |
| MAXPRECADCMB#    |     1 | Serial interface mother board |

## MAX11166 Daughter Board

| DESIGNATION                                  |   QTY | DESCRIPTION                                                         |
|----------------------------------------------|-------|---------------------------------------------------------------------|
| AIN1(+), AIN1(-), AIN2(+), AIN2(-)           |     4 | Yellow multipurpose test points                                     |
| C1, C2, C5, C11, C13-C19, C21 C23, C28, C111 |    15 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E104K |
| C3, C4, C8, C9, C25, C32, C33                |     7 | 1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C105K   |
| C6, C12                                      |     2 | 10µF ±10%, 25V X7R ceramic capacitors (1210) Murata GRM32DR71E106K  |

| DESIGNATION       |   QTY | DESCRIPTION                                                         |
|-------------------|-------|---------------------------------------------------------------------|
| C7, C10, C30, C31 |     4 | 4700pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM188R71H472K |
| C20, C29          |     2 | 2.2µF ±10%, 10V X7R ceramic capacitors (0603) Murata GRM188R71A225K |
| C22               |     1 | 10µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J106K  |
| C24               |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J475K |

│

## Component Lists (continued)

## MAX11166 Daughter Board (continued)

| DESIGNATION                                               |   QTY | DESCRIPTION                                                         |
|-----------------------------------------------------------|-------|---------------------------------------------------------------------|
| C26                                                       |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102K |
| C27                                                       |     1 | 4.7µF ±10%, 16V X5R ceramic capacitor (0805) Murata GRM21BR61C475K  |
| D1                                                        |     1 | Red LED (0603)                                                      |
| EXT_VCC, EXT_VEE, OVDD, VDD                               |     4 | Red multipurpose test points                                        |
| EXT_CONVST, EXT_DIN, EXT_DOUT, EXT_RDC, EXT_REF, EXT_SCLK |     6 | White multipurpose test points                                      |
| GND-POS                                                   |     6 | Black multipurpose test points                                      |
| J1                                                        |     1 | Shrouded 2mm right-angle header (2 x 20) Samtec LS2-120-01-S-D-RA2  |
| JU1, JU2, JU4-JU13                                        |    12 | 3-pin headers                                                       |
| JU3                                                       |     1 | 4-pin header                                                        |
| JU14-JU16                                                 |     3 | 2-pin headers                                                       |
| R1, R2, R12, R13                                          |     4 | 10Ω ±5% resistors (0603)                                            |
| R3                                                        |     1 | 470Ω ±5% resistor (0603)                                            |
| R4-R7, R14, R15                                           |     6 | 49.9Ω ±1% resistors (0603)                                          |

Evaluates: MAX11166

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                   |
|---------------|-------|-----------------------------------------------------------------------------------------------|
| R8            |     1 | 15kΩ ±5% resistor (0603)                                                                      |
| R10           |     1 | 357kΩ ±1% resistor (0603)                                                                     |
| R11           |     1 | 51.1kΩ ±1% resistor (0603)                                                                    |
| U1, U3        |     2 | 16-bit, 500ksps/250ksps, ±5V SARADCs with internal reference (12 TDFN-EP*) Maxim MAX11166ETC+ |
| U2, U4        |     2 | Precision low-noise amplifiers (8 SO) Maxim MAX9632ASA+                                       |
| U5            |     1 | 4.096V voltage reference (8 SO) Maxim MAX6126AASA41+                                          |
| U6            |     1 | Digital isolator, 4 up/0 down Analog Devices ADUM3400CRWZ                                     |
| U7            |     1 | Digital isolator, 2 up/2 down Analog Devices ADUM3402CRWZ                                     |
| U8, U10       |     2 | 5V LDO regulators (8 SO) Maxim MAX883CSA+                                                     |
| U9            |     1 | 10V LDO regulator (8 SO-EP*) Maxim MAX16910CASA9/V+                                           |
| U11           |     1 | SPI serial flash Micron M25P16-VMW6TG                                                         |
| -             |    16 | Shunts                                                                                        |
| -             |     1 | PCB: MAX11166DB EVALUATION KIT                                                                |

## MAX11166 Evaluation System

## Component Lists (continued)

## MAXPRECADCMB Mother Board

| DESIGNATION                                            |   QTY | DESCRIPTION                                                          |
|--------------------------------------------------------|-------|----------------------------------------------------------------------|
| 10MHZCLK                                               |     1 | 50Ω SMAfemale jack Emerson 142-0701-201                              |
| BUTTON, CPU_RESET, RECONFIGURE                         |     3 | Momentary pushbutton switches (6mm)                                  |
| C1, C3                                                 |     2 | 1000pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H102J  |
| C2, C4, C31, C43, C47, C55-C72, C78-C80, C82, C84, C86 |    29 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E104K  |
| C5-C29                                                 |    25 | 0.1µF ±10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C104K  |
| C30, C38-C41, CB1-CB3                                  |     8 | 1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C105K    |
| C32                                                    |     1 | 0.01µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C103K  |
| C44, C45, C130, CP2, CP3                               |     5 | 10µF ±20%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J106M  |
| C73, C129                                              |     2 | 4.7µF ±10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J475K |
| C74                                                    |     0 | Not installed, capacitor (0603)                                      |
| C75, C76                                               |     2 | 18pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H180J    |
| C77, C81                                               |     2 | 10µF ±20%, 10V tantalum capacitors (3528-21) KEMET T491B106M010AT    |
| C83, C85                                               |     2 | 4.7µF ±20%, 25V tantalum capacitors (1210) AVX TAJB475M025R          |

Evaluates: MAX11166

| DESIGNATION                      |   QTY | DESCRIPTION                                                               |
|----------------------------------|-------|---------------------------------------------------------------------------|
| CC1-CC4                          |     4 | 10pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H100J         |
| CP1                              |     1 | 100µF ±20%, 6.3V X5R ceramic capacitor (1210) Murata GRM32ER60J107M       |
| GND                              |     3 | Black multipurpose test points Keystone 5011                              |
| H2                               |     0 | Not installed, 16-pin (2 x 8) dual-row header                             |
| IOVDD, VIN                       |     2 | Red multipurpose test points Keystone 5010                                |
| J1                               |     1 | Shrouded 2mm right-angle 40-pin (2 x 20) header SAMTEC LS2-120-01-S-D-RA1 |
| J2                               |     1 | USB type-B right-angle female receptacle                                  |
| JTAG1, JTAG2                     |     2 | 10-pin (2 x 5) dual-row headers                                           |
| JUC1-JUC7                        |     0 | Not installed, 3-pin headers                                              |
| JU35-JU39, JU45                  |     6 | 3-pin headers                                                             |
| JU40-JU43                        |     4 | 2-pin headers                                                             |
| JU44                             |     1 | 4-pin header                                                              |
| L1                               |     1 | 300Ω ±25%, 500mA ferrite bead (0603) TDK MMZ1608R301A                     |
| LED1-LED4                        |     4 | Red LEDs (0603)                                                           |
| R1, R2, R5-R7, R95               |     6 | 100kΩ ±5% resistors (0603)                                                |
| R36                              |     1 | 0Ω ±1% resistor (0603)                                                    |
| R10, R33                         |     2 | 22 Ω ±5% resistors (0603)                                                 |
| R11-R21                          |    11 | 5.1k Ω ±5% resistors (0603)                                               |
| R22-R25, R28, R34, R35, R41, R97 |     9 | 10.0kΩ ±1% resistors (0603)                                               |
| R26, R96                         |     2 | 16.5k Ω ±1% resistors (0603)                                              |
| R27                              |     1 | 4.42kΩ ±1% resistor (0603)                                                |
| R29                              |     1 | 20.0kΩ ±1% resistor (0603)                                                |

│

## MAX11166 Evaluation System

## Component Lists (continued)

## MAXPRECADCMB Mother Board (continued)

| DESIGNATION       |   QTY | DESCRIPTION                                                                                         |
|-------------------|-------|-----------------------------------------------------------------------------------------------------|
| R30, RC1-RC7      |     8 | 10kΩ ±5% resistors (0603)                                                                           |
| R31               |     0 | Not installed, resistor (0603)                                                                      |
| R32               |     1 | 12.1k Ω ±1% resistor (0603)                                                                         |
| RC8-RC10          |     3 | 1.0kΩ ±5% resistors (0603)                                                                          |
| RL1-RL4           |     4 | 120Ω ±5% resistors (0603)                                                                           |
| RN14-RN21         |     8 | 22 Ω ±5%, 1/16W resistor networks (8 pins) Panasonic EXB-2HV220JV                                   |
| RN22              |     1 | 5.1k Ω resistor network Yageo TC164-JR-075K1L                                                       |
| RN25              |     1 | 10kΩ resistor network Panasonic EXB-38V103JV                                                        |
| S1                |     1 | 4-position SMT, half-pitch DIP switch CTS 218-4LPST                                                 |
| TP2, TP3, TPUSB5V |     0 | Not installed, multipurpose test points                                                             |
| U2                |     1 | Altera Cyclone III FPGA Altera EP3C25F324C8N                                                        |
| U3, U10-U12       |     4 | LDOs (16 TSSOP-EP*) Maxim MAX1793EUE50+ Maxim MAX1793EUE33+ Maxim MAX1793EUE25+ Maxim MAX1793EUE18+ |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE                 |
|-----------------------|--------------|-------------------------|
| Hong Kong X'tals Ltd. | 852-35112388 | www.hongkongcrystal.com |
| Murata Americas       | 770-436-1300 | www.murataamericas.com  |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com   |

Note: Indicate that you are using the MAX11166 when contacting these manufacturers.

Evaluates: MAX11166

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| U5            |     1 | SSRAM 256K x 36 (100 TQFP) ISSI IS61LPS25636A-200TQLI                |
| U6            |     0 | Not installed, flash 32M x 16 (64 EBGA) Numonyx/Intel PC28F256P30BFA |
| U7            |     1 | SPI flash memory EPCS16 (8 SO) Altera EPCS16SI8N                     |
| U13           |     1 | LDO (6 SOT23) Maxim MAX1983EUT+                                      |
| U14           |     1 | SRAM (48 TSOP) Cypress CY62167DV30LL- 55ZXI                          |
| U15           |     1 | USB PHY (SOT617-1) ST Ericsson ISP1504ABS                            |
| Y1            |     1 | 3.3V, 50MHz oscillator (7mm x 5mm) ECS-3953M-500-BN                  |
| Y2            |     1 | 19.2MHz, 18pF SMD crystal Citizen CS325 19.200MABJ-UT                |
| -             |     1 | USB high-speed A-to-B cable, 6ft                                     |
| -             |    11 | Shunts                                                               |
| -             |     1 | PCB: MAXPRECADCMB EVKIT                                              |

│

Figure 2a. MAX11166 Daughter Board Schematic (Sheet 1 of 2)

<!-- image -->

Figure 2b. MAX11166 Daughter Board Schematic (Sheet 2 of 2)

<!-- image -->

Figure 3. MAX11166 Daughter Board Component Placement Guide-Component Side

<!-- image -->

Figure 4. MAX11166 Daughter Board PCB Layout-Component Side

<!-- image -->

│

## Evaluates: MAX11166

Figure 5. MAX11166 Daughter Board PCB Layout-Ground Layer 2

<!-- image -->

Figure 6. MAX11166 Daughter Board PCB Layout-Power Layer 3

<!-- image -->

│

## Evaluates: MAX11166

Figure 7. MAX11166 Daughter Board PCB Layout-Solder Side

<!-- image -->

Figure 8. MAX11166 Daughter Board Component Placement Guide-Solder Side

<!-- image -->

│

## Ordering Information

| PART           | TYPE      |
|----------------|-----------|
| MAX11166EVSYS# | EV System |

# Denotes RoHS compliant.

Evaluates: MAX11166

## MAX11166 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.

│

Evaluates: MAX11166