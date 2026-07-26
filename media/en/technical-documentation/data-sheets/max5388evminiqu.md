<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX5388 Evaluation System

## General Description

## Features

The  MAX5388  evaluation  kit  (EV  kit)  is  an  assembled and tested PCB that features the MAX5388N 100kΩ dual digital potentiometers. The MAX5388 IC consists of one digital  potentiometer in a variable-resistor configuration and one digital potentiometer in a voltage-divider configuration and communicates through an SPI™-compatible serial interface.

The  MAX5388EVMINIQU+  evaluation  system  (EV  system) includes the EV kit and the MINIQUSB+ interface board. The MINIQUSB+ interface board can be used to enable PC communication through the 3-wire serial interface.  Windows®  2000-,  Windows  XP®-,  and  Windows Vista®-compatible software provides a professional user interface  for  exercising  the  MAX5388's  features.  The program  is  menu  driven  and  offers  a  graphical  user interface  (GUI)  complete  with  buttons,  track  bars,  and edit boxes. The EV kit software can be used to evaluate the  MAX5386,  MAX5388L,  MAX5388M,  MAX5391,  and MAX5393. The EV kit can also be interfaced directly to a user-supplied 3-wire system.

The  MAX5388  IC  can  be  powered  from  a  2.6V,  3.3V, or  5V  source  generated  from  the  MINIQUSB+  interface board and EV kit circuitry, or from a user-supplied external  2.6V  to  5.25V  DC  power  supply.  Order  the MAX5388EVMINIQU+ for a complete PC-based evaluation of the MAX5388.

The EV kit also contains PCB footprints for the MAX5386, MAX5391, and MAX5393. To evaluate these parts, order samples  and  fit  the  parts  in  places  U1,  U2,  and  U3, respectively.

SPI is a trademark of Motorola, Inc.

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

- S 2.6V to 5.25V Single-Supply Operation
- S PC USB to 3-Wire Interface or Stand-Alone 3-Wire Serial-Interface Operation
- S Easy-to-Use Menu-Driven Software
- S Includes Windows 2000-, Windows XP-, and Windows Vista-Compatible Software
- S Fully Assembled and Tested

## Ordering Information

| PART             | TYPE      |
|------------------|-----------|
| MAX5388EVMINIQU+ | EV System |

+ Denotes lead(Pb)-free and RoHS compliant.

## Component Lists MAX5388 EV System (MAX5388EVMINIQU+)

| PART          |   QTY | DESCRIPTION          |
|---------------|-------|----------------------|
| MAX5388EVKIT+ |     1 | EV kit               |
| MINIQUSB+     |     1 | Maxim command module |

## MAX5388 EV Kit (MAX5388EVKIT+)

| DESIGNATION                                                 |   QTY | DESCRIPTION                                                                                  |
|-------------------------------------------------------------|-------|----------------------------------------------------------------------------------------------|
| C1, C2, C3, C7, C10, C11, C14, C15, C19, C20, C23, C24, C25 |    13 | 1 F F Q 10%, 16V X5R ceramic capacitors (0603) Murata GRM188R71C105K or TDK C1608X5R1C105K   |
| C4, C8, C12, C16                                            |     4 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K or TDK C1608X7R1H104K |
| C5, C6, C9, C13                                             |     0 | Not installed, ceramic capacitors (0603)                                                     |
| C26                                                         |     1 | 10 F F Q 10%, 6.3V X5R ceramic capacitor (0805) Murata GRM21BR60J106K or TDK C2012X5R0J106K  |
| J1                                                          |     1 | 2 x 4-pin header                                                                             |
| J2                                                          |     1 | 2 x 8-pin header                                                                             |
| J3                                                          |     1 | 8-pin female receptacle                                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5388 Evaluation System

## Component Lists (continued)

## MAX5388 EV Kit (MAX5388EVKIT+) (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| U5            |     1 | Adjustable output LDO regulator (5 SC70) Maxim MAX8512EXK+ (Top Mark: ADW) |
| U6            |     1 | 2.6V LDO regulator (5 SC70) Maxim MAX8511EXK26+ (Top Mark: AAW)            |
| U7            |     1 | Single 1.8V to 5V level translator (6 SC70)                                |
| U8            |     1 | Dual 1.8V to 5V level translator (8 SSOP)                                  |
| -             |    20 | Shunts (JU1-JU20)                                                          |
| -             |     1 | PCB: MAX5386/5388/5391/5393 EVALUATION KIT+                                |

* EP = Exposed pad.

| DESIGNATION            |   QTY | DESCRIPTION                                                         |
|------------------------|-------|---------------------------------------------------------------------|
| JU1, JU3-JU6, JU8-JU18 |    16 | 2-pin headers                                                       |
| JU2, JU7, JU19         |     3 | 3-pin headers                                                       |
| JU20                   |     1 | 4-pin header                                                        |
| R1                     |     1 | 40.2k I Q 1% resistor (0603)                                        |
| R2                     |     1 | 100k I Q 1% resistor (0603)                                         |
| U1                     |     0 | Not installed, digital potentiom- eter (16 TQFN-EP*)                |
| U2                     |     0 | Not installed, digital potentiom- eter (16 TQFN-EP*)                |
| U3                     |     0 | Not installed, digital potentiometer (14 TSSOP)                     |
| U4                     |     1 | 256-tap dual digital potentiometer (10 F MAX M ) Maxim MAX5388NAUB+ |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX5386, MAX5388, MAX5391, or MAX5393 when contacting these component suppliers.

## MAX5388 EV Kit Files

| FILE                | DESCRIPTION                               |
|---------------------|-------------------------------------------|
| INSTALL.EXE         | Installs the EV kit files on the computer |
| MAX5388.EXE         | Application program                       |
| FTD2XX.INF          | USB driver file                           |
| UNINST.INI          | Uninstalls the EV kit software            |
| USB_Driver_Help.PDF | USB driver installation help file         |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## MAX5388 Evaluation System

## Quick Start

- 5) Connect the MINIQUSB+ interface board to the EV kit J2 and J3 connectors.

## Required Equipment

- MAX5388	EV	system MAX5388 EV kit MINIQUSB+  command  module  (USB  cable included)
- User-supplied	 Windows	 2000,	 Windows	 XP,	 or Windows Vista PC with a spare USB port
- One	or	two	multimeters

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The  MAX5388  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1) Visit www.maxim-ic.com/evkitsoftware to  download  the  latest  version  of  the  EV  kit  software, 5388Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on the computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are  created  in  the  Windows Start  |  Programs menu.
- 3) Verify  that  shunts  are  correctly  installed  on  the jumpers listed in Table 1 for proper operation of the EV kit.
- 4) Connect  the  multimeters  to  measure  resistance across the MAX5388's (U4) WA and LA PCB pads and voltage across the WB and LB PCB pads.

## Table 1. Jumper Configuration

| JUMPER   | SHUNT POSITION   | EV KIT FUNCTION                                        |
|----------|------------------|--------------------------------------------------------|
| JU16     | Not installed    | MAX5388 LA disconnected from GND                       |
| JU16     | Installed*       | MAX5388 LA connected to GND                            |
| JU17     | Not installed    | MAX5388 HB disconnected from the U4 VDD voltage source |
| JU17     | Installed*       | MAX5388 HB connected to the U4 VDD voltage source      |
| JU18     | Not installed    | MAX5388 LB disconnected from GND                       |
| JU18     | Installed*       | MAX5388 LB connected to GND                            |
| JU20     | 1-2              | VPOWER = 5V                                            |
| JU20     | 1-3*             | VPOWER = 3.3V                                          |
| JU20     | 1-4              | VPOWER = 2.6V                                          |

*Default position.

<!-- image -->

- 6) Connect  the  included  USB  cable  from  the  PC to  the  MINIQUSB+  interface  board.  A Building Driver  Database window  pops  up  in  addition  to a New Hardware Found message when installing the USB driver for the first time. If a window similar to the one described above is not seen after 30s, remove the USB cable from the board and reconnect  it.  Administrator  privileges  are  required  to install  the  USB  device  driver  on  Windows  2000, Windows XP, and Windows Vista.
- 7) Follow  the  directions  of  the Add New Hardware Wizard to  install  the  USB  device  driver.  Choose the Search  for  the  best  driver  for  your  device option. Specify the location of the device driver to be C:\Program Files\MAX5388 (default installation directory) using the Browse button. During device driver  installation,  Windows  may  show  a  warning message indicating that the device driver Maxim uses does not contain a digital signature. This is not  an  error  condition  and  it  is  safe  to  proceed with installation. Refer to the USB\_Driver\_Help.PDF document included with the software if you have problems during this step.
- 8) Start the EV kit software by opening its icon in the Start | Programs menu.
- 9) Observe as the program automatically detects the USB connection and starts the main program.
- 10) Using the Device Connected combo box, select MAX5388 from the list and then press the Default button. The EV kit software main window appears, as shown in Figure 1.
- 11) The EV kit is now ready for additional testing.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX5388 Evaluation System

## Detailed Description of Software

## Graphical User Interface (GUI) Panel

The MAX5388 EV kit software GUI shown in Figure 1 is a Windows program that provides a convenient means to  control  the  MAX5388  dual  potentiometer.  Use  the mouse or press the Tab key to navigate through the GUI controls. The correct SPI write operations are generated to update the MAX5388 internal memory registers when any of these controls are executed.

The  software  divides  the  EV  kit  functions  into  group boxes.  The Interface group  box  indicates  the  EV  kit Status and  the  last  write  operation Command  Sent and Data  Sent indicators.  This  data  confirms  proper device  operation.  The Device  Connected combo  box selects  the  Maxim  part  being  evaluated  and  enables the Update  Pot  A  and  B checkbox  function  when choosing  the  MAX5391  or  MAX5393  option  from  the list.  The Default button  programs  both  potentiometers to their midscale positions. The lower Potentiometer A and Potentiometer B group boxes provide controls to change  the  respective  wiper  positions.  The  main  window's bottom-left status bar provides the USB interface circuit communication status.

The  EV  kit  software  can  also  be  used  to  evaluate the  MAX5386,  MAX5388L,  MAX5388M,  MAX5391,  and MAX5393.

## Software Startup

Upon startup, the EV kit software automatically searches for  the  USB interface board's circuit connection. In the Interface group box, the Device Connected combo box allows  the  user  to  select  the  proper  part  being  evaluated. Upon selection of the device being evaluated, the Update Pot A and B checkbox is enabled/disabled. The EV kit enters the normal operating mode when the USB

Figure 1. MAX5388 Evaluation Kit Software Main Window

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5388 Evaluation System

connection is detected and the part has been selected. Since  the  MAX5388  does  not  have  read  capability,  all the  edit  boxes  are  set  to  question  marks  ( ?? )  and  the Potentiometer\_ track bar is set to midscale. If the USB connection  is  not  detected,  the  software  prompts  the user to retry, exit the program, or enter the demo mode.

and  the  wiper  position  is  updated  with  the  data  sent. The wiper position is shown in the HW\_ and WL\_ edit boxes. The HW\_ edit box shows the wiper position with respect to the potentiometer H\_ end point and the WL\_ edit  box  shows  the  wiper  position  with  respect  to  the potentiometer L\_ end point.

## Demo Mode

The EV kit  software  enters  the  demo  mode-when  the USB connection  is  not  detected-by  selecting Cancel on  the MAX5388  Evaluation  Kit  Interface  Circuit popup window (Figure 2). The software can also enter demo mode at any time from the main window by selecting  the Options  |  Demo  Mode menu  item.  When  in demo  mode,  all  software  communication  to  the  EV  kit circuit is disabled; however, most of the software GUI is functional. Demo mode allows the user to evaluate the software  without  hardware  connectivity.  To  exit  demo mode, deselect the Options | Demo Mode menu item.

## Potentiometer A and B Wiper Positions

The wiper position track bars (WA,  WB) in the Potentiometer  A and Potentiometer  B group  boxes are used to change the wiper position between the H\_ and L\_ end points. Use the computer mouse or arrow keys to move the wiper position between the 256 position points. The wiper position can also be changed by entering the desired integer value in the edit boxes, or by  pressing  the  up  or  down  arrows  in  the  respective edit box. A change in the W\_ wiper position track bars, or HW\_/WL\_ edit  boxes,  writes  to  the  volatile  memory

## Factory Default

Pressing the Default button resets the potentiometer A and  B  wiper  positions  to  the  factory-default  midscale position.

## Status Indicator

The Status indicator in the Interface group box displays EV Kit Operational when the EV kit enters the normal operating  mode  after  the  USB  connection  is  detected. If  the  USB  connection  is  not  detected,  or  when  the software  enters  the  demo  mode,  the Status indicator displays Demo Mode .  Demo mode is used to exercise the software without hardware connectivity.

## Command Sent Indicator

The Command  Sent indicator  in  the Interface group box  displays  the  last  command  sent  from  the  master (software)  to  the  MAX5388.  There  are  two  commands available in the MAX5388 IC. Table 2 describes the two MAX5388 commands.

## Data Sent Indicator

The Data Sent indicator in the Interface group box displays the last data sent from the master (software) to the MAX5388. The Data Sent indicator displays the last data

## MAX53B8 Evaluation Kit Interface Circuit

Interface board not found, Select YES to keep trying to connect, NO to exit tprogram orCANCELtoenter DEMO Mode

Yes

Ho

Cancel

Figure 2. MAX5388 Evaluation Kit Interface Circuit Popup Window (Interface Board Not Found)

<!-- image -->

## Table 2. MAX5388 SPI Command

| MAX5388 REGISTER   | COMMAND   | COMMAND   | DESCRIPTION                                                                      |
|--------------------|-----------|-----------|----------------------------------------------------------------------------------|
| MAX5388 REGISTER   | BINARY    | HEX       | DESCRIPTION                                                                      |
| VREGA              | 00000000  | 0x00      | SPI data is written to potentiometer A. Wiper WA position updates with SPI data. |
| VREGB              | 00000001  | 0x01      | SPI data is written to potentiometer B. Wiper WB position updates with SPI data. |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX5388 Evaluation System

sent for the write to potentiometer A (0x00) or potentiometer B (0x01) commands.

The MAX5388 IC uses an 8-bit (MSBs, D7-D0) data byte to set the wiper position. Refer to the MAX5386/MAX5388 IC data sheet for additional information.

## Keyboard Navigation

Press the Tab key to select each GUI control. The selected control is indicated by a dotted outline. Using Shift + Tab moves the selection to the previously selected control.  Buttons  respond to the keyboard's space bar and some controls respond to the keyboard's up and down arrow keys. Activate the program's menu bar by pressing the F10 key and then press the letter of the desired menu item. Most menu items have one letter underlined, indicating their shortcut key.

When a number is entered into the edit boxes, it can be sent to the device by pressing the Enter key. It is also sent when Tab or Shift + Tab is pressed.

## Simple SPI Commands

There are two methods for communicating with the EV kit, through the normal user-interface panel (Figure 1) or through the advanced user interface available by selecting the 3-Wire Interface (Figure 3) utility from the main program's Options  |  Advanced  User Interface menu bar. A window is displayed that allows SPI send/receive data operations.

On the 3-wire interface tab, the Connection group box defines  the  hardware  connections  of  the  interface.  For the EV kit, K10 is selected from the Clock (SCK)(SCLK) drop-down list, K12 from the Data from master to slave (MOSI)(DIN) drop-down  list  is  disabled, K11 from  the Data from slave to master (MISO)(DOUT) drop-down list, K9 from  the Chip-select  (CS)  for  data  framing drop-down  list,  and Use  standard  connections  for high-speed SPI checkbox is checked (see Figure 3).

The Configuration group box allows the user to configure the logic level and data rate. For the EV kit, check the Send &amp; Receive MSB first checkbox and verify that the CPOL=1(clock idle high) and CPHA=1(sample 2 nd edge) checkboxes are unchecked (see Figure 3).

The Send  and  Receive  Data group  box  allows  the user to send data to the MAX5388. The Data bytes to be written edit  box  indicates  data  to  be  sent  from  the master (microcontroller) to the device (MAX5388). Eightbit  hexadecimal  numbers should be comma delimited. Press the Send Now button to transmit the data from the master to the device. Data appearing in the Data bytes received edit box is data read from the device. The Data bytes  received edit  box  in  the  EV  kit  software  always shows a default value of 0xFF since the MAX5388 does not send data back to the master.

Note :  The  SPI  dialog  boxes  accept  numeric  data  in hexadecimal format. Hexadecimal numbers must be prefixed by $ or 0x. Figure 3 shows a simple SPI write-byte operation using the included 3-wire interface diagnostics tool. In this example, the software is sending command 0x01 (write to potentiometer B) and data 0x7F. The data sequence sets the MAX5388 wiper position to 127.

## General Troubleshooting

Problem: Software reports it cannot find the interface circuit.

- Is  the  USB  cable  connected  to  the  MINIQUSB+ board?
- Has  Windows  plug-and-play  detected  the  board? Bring up Control Panel-&gt;System-&gt;Device Manager , and look at what device nodes are indicated for USB. If there is an Unknown device node attached to the USB,  uninstall  it-this  forces  plug-and-play  to  try again.
- If  using  an  off-board  SPI  interface,  is  the  power ground connected to the EV kit ground (GND) at one of  the  header J1 pin connections (J1-2, J1-4, J1-6, or J1-8)?

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5388 Evaluation System

Figure 3. Simple Low-Level 3-Wire Interface

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX5388 Evaluation System

## Detailed Description of Hardware

The MAX5388 EV kit is an assembled and tested PCB that  features  the  MAX5388N  100k I dual  digital  potentiometers.  Both  potentiometer  A  and  B  have  an  endto-end  resistance  of  100k I and  each  wiper  can  be programmed  independently  among  256  tap  positions. The MAX5388 IC consists of one digital potentiometer in a variable-resistor configuration and one digital potentiometer in a voltage-divider configuration The EV kit uses a MAX5388N IC in a 10 µMAX package on a proven twolayer PCB design.

The  EV  kit  provides  connector  J1  to  interface  with  the MAX5388 CS ,  DIN,  SCLK, and GND signals directly to a  user-supplied 3-wire system. Connector J1 also provides a connection for the EV kit's 2.6V to 5.5V VPOWER power-supply input.

The EV kit is typically used with a MINIQUSB+ interface board for communicating with a PC through the 3-wire serial  interface.  Logic-level  translators  U7  and  U8  provide proper SPI interface translation when using 2.6V to 5.5V to power the MAX5388 VDD input.

## MAX5388 VDD Input Source

The VPOWER rail is typically supplied as 3.3V or 5V by the MINIQUSB+ interface board circuitry, or 2.6V using LDO regulator U6. The VPOWER rail sets the MAX5388 VDD input to 5V, 3.3V, or 2.6V. See Table 3 for proper jumper configurations for setting the MAX5388 VDD input.

Table 3. VPOWER Rail (JU20)

| SHUNT POSITION   | VPOWER RAIL                                            | MAX5388 VDD INPUT                                      |
|------------------|--------------------------------------------------------|--------------------------------------------------------|
| 1-2              | 5V (MINIQUSB+ circuitry)                               | 5V                                                     |
| 1-3*             | 3.3V (MINIQUSB+ circuitry)                             | 3.3V                                                   |
| 1-4              | 2.6V (LDO U6)                                          | 2.6V                                                   |
| Not installed    | External source applied at EV kit VDD and GND PCB pads | External source applied at EV kit VDD and GND PCB pads |

Note:

The MAX5388 VDD input has a minimum 2.6V requirement.

Table 4. Header J1 Pin Assignments

| PIN                    | SIGNAL   |
|------------------------|----------|
| J1-1                   | VPOWER   |
| J1-2, J1-4, J1-6, J1-8 | GND      |
| J1-3                   | CS       |
| J1-5                   | DIN      |
| J1-7                   | SCLK     |

## Table 5. JU16 Jumper Function (Potentiometer A)

| SHUNT POSITION   | LA PAD           | MAX5388 FUNCTION                    |
|------------------|------------------|-------------------------------------|
| Not installed    | Not connected    | Potentiometer without GND reference |
| Installed*       | Connected to GND | Potentiometer with GND reference    |

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## SPI Clock and Data-/Chip-Select Inputs

The  MAX5388  features  a  clock  and  data-/chip-select input  pins  for  SPI-compatible  communication  to  control  the  MAX5388 wiper position. The clock, data-, and chip-select  pins  can  be  driven  by  the  MINIQUSB+ interface  circuit  or  the  PCB  header  (J1),  along  with  a user-supplied  external  SPI-compatible  controller.  An external SPI-compatible controller can be connected to CS (J1-3), DIN (J1-5), SCLK (J1-7), and GND (J1-2) on header J1 to communicate with the MAX5388 IC. When using  an  external  SPI-compatible  controller,  verify  that the MINIQUSB+ interface board has been disconnected from  the  EV  kit's  J2  and  J3  headers.  See  Table  4  for header J1 pin assignment.

## Potentiometer, Variable Resistor with Ground Reference (Potentiometer A)

The MAX5388 IC potentiometer A is internally configured as a variable resistor. The EV kit allows potentiometer A to  be  configured  with  ground  reference  by  shorting  LA to  ground.  Table  5  lists  jumper  options  for  configuring potentiometer A.

Verify that any power source connected to the WA or LA pads are voltage and current limited to the maximum conditions stated in the MAX5386/MAX5388 IC data sheet.

## Potentiometer, Voltage-Divider or Variable Resistor, with Ground Reference (Potentiometer B)

The EV kit provides an option to configure the MAX5388 potentiometer  B  as  a  potentiometer  or  voltage-divider,

## MAX5388 Evaluation System

open ended or with ground reference, respectively. Use jumpers JU17 and JU18 for potentiometer B configurations. Table 6 lists jumper options for configuring potentiometer B.

Potentiometer  B  can  also  be  configured  as  a  variable resistor by shorting the HB and WB pads using a wire. When operating as a variable resistor, any power source connected to the HB, WB, or LB pads must be voltage and current limited to the maximum conditions stated in the MAX5386/MAX5388 IC data sheet.

Note: To test the device in resistor mode, the ohmmeter must be GND referenced to the MAX5388. This can be accomplished by connecting the L\_ pin to GND or the H\_ pin to VDD. Resistance can then be measured between W\_ and L\_ or W\_ and H\_ PCB pads.

## Evaluating the MAX5386, MAX5391, and MAX5393 ICs

The  EV  kit  is  populated  with  additional  PCB  footprints (U1,  U2,  and  U3)  and  various  jumpers  to  evaluate  the MAX5386, MAX5391, and MAX5393, respectively.

Jumper  JU1  and  LDO  U5  are  available  to  use  as  a 1.7V power source when evaluating the MAX5391 and MAX5393 EV kits. Refer to the MAX5386M, MAX5391L, MAX5391N, or MAX5393 evaluation system data sheets for additional information when evaluating the MAX5386, MAX5391, or MAX5393 digital potentiometers.

Table 6. JU17 and JU18 Jumper Functions (Potentiometer B)

| SHUNT POSITION   | SHUNT POSITION   |                  | LB PAD           | MAX5388 FUNCTION                   |
|------------------|------------------|------------------|------------------|------------------------------------|
| JU17             | JU18             |                  | LB PAD           | MAX5388 FUNCTION                   |
| Not installed    | Not installed    | Not connected    | Not connected    | Potentiometer open ended           |
| Not installed    | Installed        | Not connected    | Connected to GND | Potentiometer with GND reference   |
| Installed*       | Not installed    | Connected to VDD | Not connected    | Voltage-divider open ended         |
| Installed*       | Installed*       | Connected to VDD | Connected to GND | Voltage-divider with GND reference |

* Default position.

Table 7. Jumper Configuration (JU1-JU20)

| JUMPER   | SHUNT POSITION   | EV KIT FUNCTION                                            |
|----------|------------------|------------------------------------------------------------|
| JU1      | Not installed*   | 1.7V LDO output disabled                                   |
| JU1      | Installed        | 1.7V LDO output enabled                                    |
| JU2      | 1-2*             | MAX5386 VDD voltage not powered                            |
| JU2      | 2-3              | MAX5386 VDD voltage dependent on jumper JU20 configuration |
| JU3      | Not installed    | MAX5386 HA disconnected from the U1 VDD voltage source     |
| JU3      | Installed*       | MAX5386 HA connected to the U1 VDD voltage source          |
| JU4      | Not installed    | MAX5386 LA disconnected from GND                           |
| JU4      | Installed*       | MAX5386 LA connected to GND                                |
| JU5      | Not installed    | MAX5386 HB disconnected from the U1 VDD voltage source     |
| JU5      | Installed*       | MAX5386 HB connected to the U1 VDD voltage source          |
| JU6      | Not installed    | MAX5386 LB disconnected from GND                           |
| JU6      | Installed*       | MAX5386 LB connected to GND                                |
| JU7      | 1-2*             | MAX5391 VDD voltage not powered                            |
| JU7      | 2-3              | MAX5391 VDD voltage dependent on jumper JU20 configuration |
| JU8      | Not installed    | MAX5391 HA disconnected from the U2 VDD voltage source     |
| JU8      | Installed*       | MAX5391 HA connected to the U2 VDD voltage source          |
| JU9      | Not installed    | MAX5391 LA disconnected from GND                           |
| JU9      | Installed*       | MAX5391 LA connected to GND                                |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX5388 Evaluation System

Table 7. Jumper Configuration (JU1-JU20) (continued)

| JUMPER   | SHUNT POSITION   | EV KIT FUNCTION                                            |
|----------|------------------|------------------------------------------------------------|
| JU10     | Not installed    | MAX5391 HB disconnected from the U2 VDD voltage source     |
| JU10     | Installed*       | MAX5391 HB connected to the U2 VDD voltage source          |
| JU11     | Not installed    | MAX5391 LB disconnected from GND                           |
| JU11     | Installed*       | MAX5391 LB connected to GND                                |
| JU12     | Not installed    | MAX5393 HA disconnected from the U3 VDD voltage source     |
| JU12     | Installed*       | MAX5393 HA connected to the U3 VDD voltage source          |
| JU13     | Not installed    | MAX5393 LA disconnected from GND                           |
| JU13     | Installed*       | MAX5393 LA connected to GND                                |
| JU14     | Not installed    | MAX5393 HB disconnected from the U3 VDD voltage source     |
| JU14     | Installed*       | MAX5393 HB connected to the U3 VDD voltage source          |
| JU15     | Not installed    | MAX5393 LB disconnected from GND                           |
| JU15     | Installed*       | MAX5393 LB connected to GND                                |
| JU16     | Not installed    | MAX5388 LA disconnected from GND                           |
| JU16     | Installed*       | MAX5388 LA connected to GND                                |
| JU17     | Not installed    | MAX5388 HB disconnected from the U4 VDD voltage source     |
| JU17     | Installed*       | MAX5388 HB connected to the U4 VDD voltage source          |
| JU18     | Not installed    | MAX5388 LB disconnected from GND                           |
| JU18     | Installed*       | MAX5388 LB connected to GND                                |
| JU19     | 1-2*             | MAX5393 VDD not powered                                    |
| JU19     | 2-3              | MAX5393 VDD voltage dependent on jumper JU20 configuration |
| JU20     | 1-2              | VPOWER = 5V                                                |
| JU20     | 1-3*             | VPOWER = 3.3V                                              |
| JU20     | 1-4              | VPOWER = 2.6V                                              |

*Default position.

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5388 Evaluation System

<!-- image -->

Figure 4. MAX5388 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    11

## MAX5388 Evaluation System

Figure 5. MAX5388 EV Kit Component Placement Guide-Component Side

<!-- image -->

12      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5388 Evaluation System

<!-- image -->

Figure 6. MAX5388 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    13

## MAX5388 Evaluation System

Figure 7. MAX5388 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

14

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600