<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX5392 Evaluation System

## General Description

## Features

The MAX5392 evaluation kit (EV kit) is an assembled and tested PCB that features two MAX5392M 50k I dual digital  potentiometer ICs. The MAX5392M IC features dual volatile 50k I 256-tap potentiometers and communicates through an I 2 C-compatible serial interface (or through a stand-alone 2-wire serial interface).

The  MAX5392EVMINIQU+  evaluation  system  (EV  system)  includes  the  EV  kit  and  a  MINIQUSB+  interface board. The MINIQUSB+ interface board can be used to enable PC communication through the 2-wire serial interface.  Windows M 2000-  ,  Windows  XP M -,  and  Windows Vista M -compatible software provides a professional user interface for exercising the MAX5392 features. The program is menu-driven and offers a graphical user interface  (GUI)  complete  with  buttons,  track  bars,  and  edit boxes. The EV kit software can also be used to evaluate the MAX5387. The EV kit can also be interfaced directly to a user-supplied 2-wire system.

The  MAX5392  IC  can  be  powered  from  a  1.7V,  2.6V, 3.3V, or 5V source generated from the MINIQUSB+ interface board and EV kit circuitry, or from a user-supplied external 1.7V to 5.25V DC power supply. Order the EV system (MAX5392EVMINIQU+) for a complete PC-based evaluation of the MAX5392.

The EV kit can also be used to evaluate the MAX5392L (10k I )  and  MAX5392N  (100k I ).  The  EV  kit  contains PCB footprints  for  two  MAX5387  ICs,  which  allows  the user to independently control up to eight potentiometers. To evaluate the MAX5387, order samples and install the ICs on U1 and/or U2 PCB pads.

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

- S 1.7V to 5.25V Single-Supply Operation
- S Controls Up to Eight Potentiometers
- S Configurable and Fixed Device Addresses
- S I 2 C-Compatible Serial Interface or Stand-Alone 2-Wire Serial-Interface Operation
- S Easy-to-Use Menu-Driven Software
- S Includes Windows 2000- , Windows XP-, and Windows Vista-Compatible Software
- S Fully Assembled and Tested

## Ordering Information

| PART             | TYPE      |
|------------------|-----------|
| MAX5392EVMINIQU+ | EV System |

+ Denotes lead(Pb)-free and RoHS compliant.

## Component Lists

## MAX5392 EV System (MAX5392EVMINIQU+)

| PART          |   QTY | DESCRIPTION          |
|---------------|-------|----------------------|
| MAX5392EVKIT+ |     1 | EV kit               |
| MINIQUSB+     |     1 | Maxim command module |

## MAX5392 EV Kit

| DESIGNATION                           |   QTY | DESCRIPTION                                                                               |
|---------------------------------------|-------|-------------------------------------------------------------------------------------------|
| C1, C2, C3, C5, C7, C11, C13, C17-C20 |    11 | 1 F F Q 10%, 16V X5R ceramic capacitors (0603) TDK C1608X5R1C105K Murata GRM188R61C105K   |
| C4, C8, C9 C12, C14, C15              |     6 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K TDK C1608X7R1H104K |
| C6                                    |     1 | 10 F F Q 10%, 6.3V X5R ceramic capacitor (0805) Murata GRM21BR60J106K TDK C2012X5R0J106K  |
| C10, C16, C21, C22                    |     0 | Not installed, capacitors (0603)                                                          |
| J1                                    |     1 | 2 x 3-pin header                                                                          |
| J2                                    |     1 | 2 x 8-pin header                                                                          |
| J3                                    |     1 | 8-pin female receptacle                                                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX5392 Evaluation System

## Component Lists (continued)

## MAX5392 EV Kit (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| U3, U4        |     2 | Dual 50k I potentiometers (16 SSOP) Maxim MAX5392MAUE+                     |
| U5            |     1 | Adjustable output LDO regulator (5 SC70) Maxim MAX8512EXK+ (Top Mark: ADW) |
| U6            |     1 | 2.6V LDO regulator (5 SC70) Maxim MAX8511EXK26+ (Top Mark: AEG)            |
| U7, U8        |     2 | Logic-level translators (6 F MAX M ) Maxim MAX1840EUB+                     |
| -             |    26 | Shunts (JU1-JU26)                                                          |
| -             |     1 | PCB: MAX5387/MAX5392 EVALUATION KIT+                                       |

| DESIGNATION                              |   QTY | DESCRIPTION                                      |
|------------------------------------------|-------|--------------------------------------------------|
| JU1                                      |     1 | 4-pin header                                     |
| JU2-JU6, JU11-JU14, JU18-JU21, JU23-JU26 |    17 | 2-pin headers                                    |
| JU7-JU10, JU15, JU16, JU17, JU22         |     8 | 3-pin headers                                    |
| R1                                       |     1 | 40.2k I Q 1% resistor (0603)                     |
| R2, R11, R12                             |     3 | 100k I Q 1% resistors (0603)                     |
| R3, R4, R5, R8                           |     0 | Not installed, resistors (0603)                  |
| R6, R9                                   |     2 | 0 I Q 5% resistors (0603)                        |
| R7, R10                                  |     2 | 4.7k I Q 1% resistors (0603)                     |
| U1, U2                                   |     0 | Not installed, digital potentiometers (14 TSSOP) |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX5387 or MAX5392 when contacting these component suppliers.

## MAX5392 EV Kit Files

| FILE                | DESCRIPTION                               |
|---------------------|-------------------------------------------|
| INSTALL.EXE         | Installs the EV kit files on the computer |
| MAX5392.EXE         | Application program                       |
| FTD2XX.INF          | USB driver file                           |
| UNINST.INI          | Uninstalls the EV kit software            |
| USB_Driver_Help.PDF | USB driver installation help file         |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5392 Evaluation System

## Quick Start

## Required Equipment

- MAX5392 EV system MAX5392 EV kit MINQUSB+ command module (USB cable
- included)

Database window  pops  up  in  addition  to  a New Hardware  Found message  when  installing  the USB driver for the first time. If a window is not seen that  is  similar  to  the  one  described  above  after 30s,  remove  the  USB  cable  from  the  board  and reconnect  it.  Administrator  privileges  are  required to install the USB device driver on Windows 2000, Windows XP, and Windows Vista.

- User-supplied Windows 2000, Windows XP, or Windows Vista PC with a spare USB port
- Up to four multimeters

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit www.maxim-ic.com/evkitsoftware to  download  the  latest  version  of  the  EV  kit  software, 5392Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on the computer by running  the  INSTALL.EXE  program inside  the  temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Verify that shunts are configured in the EV kit default state (see Table 1) for proper startup operation of the EV kit software.
- 4) Connect the multimeters to measure voltage across the MAX5392M (U3, U4) WA and LA PCB pads and WB and LB PCB pads.
- 5) Connect the MINIQUSB+ interface board to the EV kit J2 and J3 connectors.
- 6) Connect  the  included  USB  cable  from  the  PC  to the MINIQUSB+ interface board. A Building Driver

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

- 7) Follow  the  directions  of  the Add  New  Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify  the  location  of  the  device  driver  to  be C:\Program  Files\MAX5392 (default installation directory) using the Browse button. During device driver  installation,  Windows  may  show  a  warning message  indicating  that  the  device  driver  Maxim uses  does  not  contain  a  digital  signature.  This  is not  an  error  condition  and  it  is  safe  to  proceed with installation. Refer to the USB\_Driver\_Help.PDF document  included  with  the  software  if  you  have problems during this step.
- 8) Start the EV kit software by opening its icon in the Start | Programs menu.
- 9) Observe as the program automatically detects the USB connection and starts the main program.
- 10)  The main program appears with the U3\_MAX5392 tab sheet active.
- 11) Press the Default button.
- 12) Click on the U4\_MAX5392 tab sheet and then press the Default button.
- 13) Click on the U3\_MAX5392 tab sheet.
- 14) The  EV  kit  software  main  window  appears,  as shown in Figure 1.
- 15) The EV kit is now ready for additional testing.

## MAX5392 Evaluation System

## Table 1. Jumper Configuration for MAX5392 EV Kit Operation

| JUMPER   | SHUNT POSITION   | EV KIT FUNCTION                                        |
|----------|------------------|--------------------------------------------------------|
| JU1      | 1-2              | VPOWER = 5V                                            |
| JU1      | 1-3*             | VPOWER = 3.3V                                          |
| JU1      | 1-4              | VPOWER = 2.6V                                          |
| JU2      | Installed*       | 1.7V supply enabled                                    |
| JU2      | Not installed    | 1.7V supply disabled                                   |
| JU10     | 1-2*             | U3 VDD = 1.7V                                          |
| JU10     | 2-3              | U3 VDD dependent on jumper JU1 configuration           |
| JU11     | Not installed    | MAX5392 HA disconnected from the U3 VDD voltage source |
| JU11     | Installed*       | MAX5392 HA connected to the U3 VDD voltage source      |
| JU12     | Not installed    | MAX5392 LA disconnected from GND                       |
|          | Installed*       | MAX5392 LA connected to GND                            |
| JU13     | Not installed    | MAX5392 HB disconnected from the U3 VDD voltage source |
| JU13     | Installed*       | MAX5392 HB connected to the U3 VDD voltage source      |
| JU14     | Not installed    | MAX5392 LB disconnected from GND                       |
| JU14     | Installed*       | MAX5392 LB connected to GND                            |
| JU15     | 1-2*             | U3 device address = 0x58 (see Table 7)                 |
| JU16     | 2-3*             | U3 device address = 0x58 (see Table 7)                 |
| JU17     | 2-3*             | U3 device address = 0x58 (see Table 7)                 |
| JU22     | 1-2*             | U4 VDD voltage connected to the U3 VDD voltage source  |
| JU22     | 2-3              | U4 VDD voltage dependent on jumper JU1 configuration   |
| JU23     | Not installed    | MAX5392 HA disconnected from the U4 VDD voltage source |
| JU23     | Installed*       | MAX5392 HA connected to the U4 VDD voltage source      |
| JU24     | Not installed    | MAX5392 LA disconnected from GND                       |
| JU24     | Installed*       | MAX5392 LA connected to GND                            |
| JU25     | Not installed    | MAX5392 HB disconnected from the U4 VDD voltage source |
| JU25     | Installed*       | MAX5392 HB connected to the U4 VDD voltage source      |
| JU26     | Not installed    | MAX5392 LB disconnected from GND                       |
| JU26     | Installed*       | MAX5392 LB connected to GND                            |

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5392 Evaluation System

Figure 1. MAX5392 Evaluation Kit Software Main Window

<!-- image -->

## Detailed Description of Software

## Graphical User Interface (GUI) Panel

The MAX5392 EV kit software GUI shown in Figure 1 is a Windows program that provides a convenient means to control two MAX5392M dual potentiometers. Use the mouse or press the Tab key to navigate through the GUI controls.  The  correct  SMBus/I 2 C  write  operations  are generated  to  update  the  MAX5392M  internal  memory registers when any of these controls are executed.

The EV kit software GUI features four window tab sheets to select and control two MAX5392 ICs ( U3\_MAX5392, U4\_MAX5392 ),  dual  on-board  digital  potentiometers, and two unpopulated MAX5387 ICs ( U1\_MAX5387, U2\_ MAX5387 ). The software also provides status indicators ( Status1 and Devices Found ) to indicate that the EV kit is  operational  and  the  total  number  of  valid  MAX5387 and MAX5392 devices populated on the EV kit, respectively.  The DEVICES group  box  indicates  components U1-U4 current device address and the last write operation Command Sent and Data Sent indicators.

<!-- image -->

A few more available software features can be evaluated by using the menu bar. The software has a demo mode, which  is  available  by  selecting  the Options  |  Demo Mode menu item. When in demo mode, all software communication to the EV kit hardware is disabled and most of the software's GUI is functional. This feature enables a  user  to  evaluate  the  software  without  hardware  connectivity.

The  EV  kit  software  configures  the  MINIQUSB+  interface  board's  2-wire  communication  speed  to  400kHz by  default.  The  speed  can  be  reduced  to  100kHz,  if required,  by  selecting  the Options  |  2-Wire  Speed  | 100kHz menu item. This configuration may be required if slower 2-wire devices are connected to the EV kit's SCL and SDA J1 header.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX5392 Evaluation System

## Software Startup

Upon startup, the EV kit software automatically searches  for the USB  interface board's circuit connection. The EV kit software searches for U3 set 0x58 address  and  U4  fixed  0x5A  address  and  places  the addresses  in U3\_MAX5392 and U4\_MAX5392 Device Address combo  boxes,  respectively.  Upon  detecting U4 fixed 0x5A address, U4\_MAX5392 Device Address combo box is disabled. U4\_MAX5392 Device Address combo  box  remains  enabled  if  the  address  is  not detected.

The  EV  kit  software  continuously  polls  to  find  valid addresses  and  updates  the Devices  Found status indicator.  If  U1  and  U2  are  populated  on  the  EV  kit, the  user  can  then  navigate  to  the U1\_MAX5387 and U2\_MAX5387 tab sheets and  choose  the device addresses  according  to  jumpers  JU7,  JU8,  and  JU9 shunt positions, and U2 fixed 0x52 address.

## Demo Mode

The EV kit  software  enters  the  demo  mode-when  the USB connection is not detected or when valid MAX5387 or MAX5392 ID addresses are not found-by selecting Cancel on the MAX5392 Evaluation Kit popup windows (Figures  2  and  3).  The  software  can  also  enter  demo mode at any time from the main window by selecting the Options | Demo Mode menu item. Demo mode allows the user to evaluate the software without hardware connectivity.  To  exit  demo  mode,  deselect  the Options  | Demo Mode menu item.

Potentiometer Tab Sheet Controls Tab sheets U3\_MAX5392  and  U4\_MAX5392 are used  for  controlling  two  MAX5392  ICs.  Tab  sheets U1\_MAX5387 and U2\_MAX5387 are used for controlling two unpopulated MAX5387 ICs. Each tab sheet contains a Device Address combo box to select a valid address and  a  status  indicator  to  indicate  that  the  address  is valid.  An Update  Pot  A  and  B checkbox  is  available for  updating potentiometers A and B simultaneously. A Default button resets the potentiometer's A and B wiper positions to the factory-default midscale position.

## Device Address

Each  tab  sheet  contains  a Device  Address combo box  and  a U\_  Status indicator. U1\_MAX5387 and U3\_MAX5392 Device Address combo boxes store up to  eight  addresses  found  by  the  EV  kit  software.  The eight possible addresses are shown in Table 7. Use the Device Address combo box to select between different devices  that  share  the  same  bus.  Before  selecting  U1 and U3 addresses, verify jumpers JU7, JU8, JU9 (U1) and  JU15,  JU16,  JU17  (U3)  settings  and  then  select the  correct  addresses  using  the U1\_MAX5387 and U3\_MAX5392 tab  sheets' Device  Address combo

Figure 2. MAX5392 Evaluation Kit Popup Window (Interface Board Not Found)

<!-- image -->

Figure 3. MAX5392 Evaluation Kit Popup Window (No Devices Found)

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5392 Evaluation System

boxes. U2\_MAX5387 and U4\_MAX5392 Device Address combo boxes store addresses 0x52 and 0x5A, respectively.

U\_ Status displays Device Connected when the selected address is found or No Connection when the selected  address  is  not  found.  When  selecting  an  address currently in use, the Device Address combo box is set to ?? and U\_ Status also displays No Connection .

## Factory Default

Pressing  the Default buttons  resets  potentiometer  A and  B  wiper  positions  to  the  factory-default  midscale position.

## Potentiometer A and B Wiper Positions

The wiper position track bars (WA, WB)  in the Potentiometer A and Potentiometer B group boxes are used to change the wiper position between the H\_ and L\_ end points. Use the mouse or keyboard arrow keys to move the wiper position between the 256 position points. The wiper position can also be changed by entering the desired integer value in the edit boxes, or by pressing the  up  or  down  edit  box  arrows.  A  change  in  the W\_ wiper position track bars or HW\_ / WL\_ edit boxes writes to the volatile memory and the wiper position is updated with  the  data  sent.  The  wiper  position  is  shown  in  the HW\_ and WL\_ edit boxes. The HW\_ edit box shows the wiper position with respect to the H\_ end point, and the WL\_ edit box shows the wiper position with respect to the potentiometer L\_ end point.

Potentiometers A and B can be updated simultaneously by checking the Update Pot A and B checkbox. When enabled,  the Potentiometer  A group  box  sends  the same  data  to  both  digital  potentiometers  and  enables control of both digital potentiometers together.

Table 2. MAX5392 I 2 C Commands

| MAX5392 REGISTER   | COMMAND   | COMMAND   | DESCRIPTION                                                                                         |
|--------------------|-----------|-----------|-----------------------------------------------------------------------------------------------------|
| MAX5392 REGISTER   | BINARY    | HEX       | DESCRIPTION                                                                                         |
| VREGA              | 00010001  | 0x11      | I 2 C data is written to potentiometer A. Wiper WA position updates with I 2 C data.                |
| VREGB              | 00010010  | 0x12      | I 2 C data is written to potentiometer B. Wiper WB position updates with I 2 C data.                |
| VREGAB             | 00010011  | 0x13      | I 2 C data is written to potentiometers A and B. Wipers WA and WB position updates with I 2 C data. |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## Command Sent Indicator

The U\_  Command  Sent indicators  in  the DEVICES group box displays the last command sent from the master (software) to the MAX5392. There are three MAX5392 commands  available  in  the  MAX5392  IC,  which  are described in Table 2.

## Data Sent Indicator

The U\_ Data Sent indicator in the DEVICES group box displays the last data sent from the master (software) to the MAX5392. The U\_ Data Sent indicator displays the last  data  sent  for  the  write  to  potentiometer  A  (0x11), potentiometer  B  (0x12),  or  both  potentiometer  (0x13) commands.

The MAX5392 IC uses an 8-bit (MSBs, D7:D0) data byte to set the wiper position. Refer to the MAX5392 IC data sheet for additional information.

## Keyboard Navigation

Press the Ctrl + Tab keys to navigate to the tab sheets. The selected tab sheet is indicated by a dotted outline. Press the Tab key to select each GUI control. The selected control is indicated by a dotted outline. Pressing Shift +  Tab  moves  the  selection  to  the  previously  selected control.  Buttons  respond  to  the  keyboard's  space  bar and some controls respond to the keyboard's up-anddown arrow keys. Activate the program's menu bar by pressing  the  F10  key  and  then  press  the  letter  of  the desired  menu  item.  Most  menu  items  have  one  letter underlined, indicating their shortcut key.

When a number is entered into the edit boxes, it can be sent to the device by pressing the Enter key. It is also sent when Tab or Shift + Tab is pressed.

## MAX5392 Evaluation System

## Simple I 2 C Commands

There are two methods for communicating with the EV kit, through the normal user-interface panel (Figure 1), or through the I 2 C commands available by using low-level SMBus K or  by  selecting  the 2-Wire  Interface (Figure 4) utility from the main program's Options | Advanced Users Interface menu bar. A window is displayed that allows  I 2 C  operations,  such  as SMBusReadByte and SMBusWriteByte .  Do  not  use  the SMBusReadByte operation because the MAX5392 does not send data to the master.

Note :  The  I 2 C  dialog  boxes  accept  numeric  data  in binary, decimal, or hexadecimal. Hexadecimal numbers must be prefixed by $ or 0x. Binary numbers must be exactly  eight  binary  digits.  Figure  4  shows  a  simple SMBus  write-byte  operation  using  the  included  2-wire interface diagnostics tool. In this example, the software is writing data 0xFF to command byte 0x13 to the device with the device address 0x5A. The data sequence sets the MAX5392 (U4) wiper positions WLA and WLB to 255.

Refer to Application Note 476: Comparing the I 2 C Bus to the SMBus available on the Maxim website for information  and  differences  between  the  SMBus  and  I 2 C protocols.

## General Troubleshooting

Problem: Software reports it cannot find the interface circuit

- Is  the  USB  cable  connected  to  the  MINIQUSB+ board?
- Has  Windows  plug-and-play  detected  the  board? Bring up Control Panel-&gt;System-&gt;Device Manager ,  and  look  at  what  device  nodes  are  indicated for USB. If there is an Unknown device node attached  to  the  USB,  uninstall  it-this  forces  plugand-play to try again.
- If  using  an  off-board  I 2 C  interface,  is  the  power ground connected to the EV kit ground (GND) at one of header J1 pin connections (J1-2, J1-4 or J1-6)?

Figure 4. Simple Low-Level 2-Wire Interface

<!-- image -->

SMBus is a trademark of Intel Corp.

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5392 Evaluation System

## Problem: Software reports no devices found

- Are shunts installed at jumpers JU1, JU2, JU10, and JU22 (power sources for MAX5392)?
- Are the SCL and SDA signals pulled up to VPOWER (resistors R6, R7, R9, and R10 installed)?

The EV kit is typically used with a MINIQUSB+ interface board for communicating with a PC through the SMBus/ I 2 C  serial  interface.  Logic-level  translators  U7  and  U8 provide proper interface translation when using 1.7V to 5.25V to power the MAX5392 VDD inputs.

- Are  shunts  installed  at  jumpers  JU15,  JU16,  and JU17 (set device address)?
- If using an external power supply, verify that power is applied to the EV kit VDD and GND PCB pads.
- If  using  an  off-board  2-wire  interface,  is  the  power ground  connected  to  the  EV  kit  ground  (GND)  at one  of  the  header  J1  pin  connections  (J1-2,  J1-4, or J1-6)?

## Detailed Description of Hardware

The MAX5392 evaluation kit (EV kit) is an assembled and tested PCB that features two MAX5392M 50k I dual digital potentiometers. The potentiometers have end-to-end resistance of 50k I and each wiper can be programmed independently among 256 tap positions. The EV kit uses two MAX5392M ICs (U3, U4) in 16-pin TSSOP packages on a proven two-layer PCB design.

The MAX5392 ICs can be powered from a 2.6V, 3.3V, or 5V source generated from the MINIQUSB+ interface board and EV kit circuitry (applied at the EV kit VPOWER rail), or from a user-supplied external 1.7V to 5.25V DC power supply applied at the VDD and GND PCB pads.

U3  can  be  powered  from  the  VPOWER  rail  or  from  a 1.7V source (U5) using jumpers JU2 and JU10. U4 can be powered from U3 VDD input or from the VPOWER rail using jumper JU22.

The  EV  kit  provides  connector  J1  to  interface  the MAX5392  SDA  and  SCL  signals  directly  to  a  usersupplied  2-wire  system.  Connector  J1  also  provides a  connection  for  the  MAX5392  EV  kit's  1.7V  to  5.25V VPOWER power-supply rail.

Table 3. VPOWER Rail (JU1)

| SHUNT POSITION   | VPOWER SOURCE                                              |
|------------------|------------------------------------------------------------|
| 1-2              | 5V (MINIQUSB+ circuitry)                                   |
| 1-3              | 3.3V ( MINIQUSB+ circuitry)                                |
| 1-4              | 2.6V (LDO U6)                                              |
| Not installed    | External source applied at the EV kit VDD and GND PCB pads |

<!-- image -->

The EV kit can also be used to evaluate the MAX5392L (10k I )  and  MAX5392N  (100k I ).  The  MAX5392  EV  kit contains  PCB  footprints  for  two  MAX5387  ICs,  which allows  the  user  to  independently  control  up  to  eight potentiometers.  To  evaluate  the  MAX5387,  order  samples and replace the parts in U1 and/or U2.

## EV Kit VDD Input Sources

The VPOWER rail is typically supplied as 3.3V or 5V by the MINIQUSB+ interface board circuitry and 2.6V using LDO regulator U6. LDO regulator U5 output is set to 1.7V and is powered from the VPOWER rail. The VPOWER rail and U5 set the MAX5392 VDD inputs to 5V, 3.3V, 2.6V, or 1.7V.

Regulator U5 has an adjustable output that can be configured  to  a  different  voltage  by  replacing  resistor  R1. Use the following equation to set U5 output voltage:

<!-- formula-not-decoded -->

where R1 is in ohms and VOUT is the desired U5 output voltage.

Jumper  JU1  selects  the  source  for  the  EV  kit  circuit VPOWER rail. See Table 3 for proper JU1 configuration for setting VPOWER rail.

Jumper JU2 enables/disables U5 output. Install a shunt across  JU2  to  enable  U5's  1.7V  output.  Remove  the shunt at JU2 to disable U5 output. See Table 4 for proper JU2 configuration.

Alternatively, the EV kit VDD and GND PCB pads can be used to supply an external 1.7V to 5.25V to the EV kit's VPOWER rail by removing the shunt at jumper JU1.

## Table 4. U5 LDO Function (JU2)

| SHUNT POSITION   | U5 1.7V OUTPUT   |
|------------------|------------------|
| Installed*       | Enabled          |
| Not installed    | Disabled         |

* Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX5392 Evaluation System

## MAX5392 U3 VDD Input Configuration

Jumper JU10 selects the power source for U3 VDD input. Install  a  shunt  across  pins  1-2  of  JU10  to  operate  the MAX5392 extended VDD input power-supply rail to 1.7V. Install a shunt across pins 2-3 to operate the MAX5392M VDD input from the VPOWER rail. See Table 5 for proper jumper configuration for U3 VDD power-supply input.

## MAX5392 U4 VDD Input Configuration

Jumper  JU22  selects  the  power  source  for  U4  VDD input. Install a shunt across pins 1-2 of JU22 to connect U4 VDD to U3 VDD input voltage. Install a shunt across pins 2-3 to operate the U4 VDD input from the VPOWER rail. See Table 6 for proper JU22 configuration.

## Address Selection for the MAX5392 (U3)

The  EV  kit  circuit  features  three  jumpers  that  pull  the MAX5392 (U3) A2, A1, and A0 address pins to VDD or GND to set the MAX5392 slave address. See Table 7 for jumpers JU15 (A2), JU16 (A1), and JU17 (A0) settings to set the U3 slave address.

Note: The first 7 bits shown are the address. The Y bit in  Table  7  is  the  I 2 C  read/write  bit.  The  I 2 C  protocol states that this bit is a 1 for a read operation or a 0 for a write operation. The Y bit is always set to 0 (write only) because  these  digital  potentiometers  do  not  transmit data to the master device.

Table 5. MAX5392 U3 VDD Input (JU10, JU2, JU1)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | U3 VDD PIN                                                 |
|------------------|------------------|------------------|------------------------------------------------------------|
| JU10             | JU2              | JU1              | U3 VDD PIN                                                 |
| 1-2*             | Installed*       | X                | 1.7V                                                       |
| 1-2*             | Not installed    | X                | Not powered                                                |
| 2-3              | X                | 1-2              | 5V                                                         |
| 2-3              | X                | 1-3              | 3.3V                                                       |
| 2-3              | X                | 1-4              | 2.6V                                                       |
| 2-3              | X                | Not installed    | External source applied at the EV kit VDD and GND PCB pads |

* Default position.

X = Don't care.

## Table 6. MAX5392 U4 VDD Power Source (JU22)

| SHUNT POSITION   | U4 VDD POWER SOURCE                   | U4 VDD PIN                        |
|------------------|---------------------------------------|-----------------------------------|
| 1-2              | Connected to U3 VDD power source      | Connected to U3 VDD (see Table 5) |
| 2-3              | Dependent on jumper JU1 configuration | See Table 3                       |

Table 7. Device Address Configuration (JU15, JU16, JU17)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | MAX5392 ADDRESS   | MAX5392 ADDRESS   |
|------------------|------------------|------------------|-------------------|-------------------|
| JU15             | JU16             | JU17             | BINARY            | HEXADECIMAL       |
| 2-3              | 2-3              | 2-3              | 0101 000Y         | 0x50              |
| 2-3              | 2-3              | 1-2              | 0101 001Y         | 0x52              |
| 2-3              | 1-2              | 2-3              | 0101 010Y         | 0x54              |
| 2-3              | 1-2              | 1-2              | 0101 011Y         | 0x56              |
| 1-2              | 2-3              | 2-3              | 0101 100Y         | 0x58              |
| 1-2              | 2-3              | 1-2              | 0101 101Y         | 0x5A              |
| 1-2              | 1-2              | 2-3              | 0101 110Y         | 0x5C              |
| 1-2              | 1-2              | 1-2              | 0101 111Y         | 0x5E              |

Note: If U2 or U4 is installed on the EV kit, the U3 device address should not be set to 0x52 or 0x5A, respectively.

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5392 Evaluation System

## I 2 C Clock and Data Inputs

The MAX5392 features a clock and data input pins for I 2 C-compatible communication to control the MAX5392M wiper  position.  The  clock  and  data  input  pins  can be  driven  by  the  MINIQUSB+  interface  circuit  or  the PCB  header  (J1),  along  with  a  user-supplied  external I 2 C-compatible  controller.  An  external  I 2 C-compatible controller can be connected to SDA (J1-3), SCL (J1-5), and  GND  (J1-2,  J1-4,  J1-6)  on  header  J1  to  communicate  with  the  MAX5392  ICs.  When  using  an  external I 2 C-compatible  controller,  verify  that  the  MINIQUSB+ interface  board  has  been  disconnected  from  the  EV kit  J2  and  J3  headers.  See  Table  8  for  header  J1  pin assignment.

The  EV  kit  requires  minor  alterations  when  using  an external I 2 C-compatible controller connected at J1:

- 1)  Disconnect the MINIQUSB+ interface board from the EV kit.
- 2)  Remove resistors R6 and R9, located at level translators U7 and U8 I/0 inputs.

Table 8. Header J1 Pin Assignment

| PIN              | SIGNAL   |
|------------------|----------|
| J1-1             | VDD      |
| J1-2, J1-4, J1-6 | GND      |
| J1-3             | SDA      |
| J1-5             | SCL      |

## Potentiometer, Voltage-Divider or Variable Resistor, with Ground Reference

The EV kit provides an option to configure the MAX5392 as a potentiometer or voltage-divider, open end or with ground reference, respectively. Use jumpers JU11 and JU12 for potentiometer A and jumpers JU13 and JU14 for  potentiometer  B  configuration  when  evaluating  U3. See Tables 9 and 10 for jumper options for configuring U3 potentiomers A and B. Use jumpers JU23 and JU24 for  potentiometer  A  and  jumpers  JU25  and  JU26  for potentiometer B configuration when evaluating U4. See Tables 11 and 12 for the jumper options for configuring U4 potentiometers A and B.

The MAX5392M IC can also be configured as a variable resistor  by  shorting  the  H\_  and  W\_  pads using a wire. When operating as a variable resistor, any power source connected to the H\_, W\_, or L\_ pad must be voltage and current limited to the maximum conditions stated in the MAX5392 IC data sheet.

Note: To test the device in resistor mode, the ohmmeter must be GND referenced to the MAX5392. This can be accomplished by connecting the L\_ pin to GND or the H\_ pin to U3 and U4 respective VDD inputs. Resistance can then be measured between W\_ and L\_ or W\_ and H\_PCB pads.

Table 9. JU11 and JU12 Jumper Functions (U3 Potentiometer A)

| SHUNT POSITION   | SHUNT POSITION   |                  | LA PAD           | MAX5392 FUNCTION                   |
|------------------|------------------|------------------|------------------|------------------------------------|
| JU11             | JU12             |                  | LA PAD           | MAX5392 FUNCTION                   |
| Not installed    | Not installed    | Not connected    | Not connected    | Potentiometer open ended           |
| Not installed    | Installed        | Not connected    | Connected to GND | Potentiometer with GND reference   |
| Installed*       | Not installed    | Connected to VDD | Not connected    | Voltage-divider open ended         |
| Installed*       | Installed*       | Connected to VDD | Connected to GND | Voltage-divider with GND reference |

* Default position.

Table 10. JU13 and JU14 Jumper Functions (U3 Potentiometer B)

| SHUNT POSITION   | SHUNT POSITION   |                  | LB PAD           | MAX5392 FUNCTION                   |
|------------------|------------------|------------------|------------------|------------------------------------|
| JU13             | JU14             |                  | LB PAD           | MAX5392 FUNCTION                   |
| Not installed    | Not installed    | Not connected    | Not connected    | Potentiometer open ended           |
| Not installed    | Installed        | Not connected    | Connected to GND | Potentiometer with GND reference   |
| Installed*       | Not installed    | Connected to VDD | Not connected    | Voltage-divider open ended         |
| Installed*       | Installed*       | Connected to VDD | Connected to GND | Voltage-divider with GND reference |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    11

## MAX5392 Evaluation System

## Evaluating the MAX5392L/MAX5392N and MAX5387 ICs

The  EV  kit  can  also  evaluate  the  MAX5392L  and MAX5392N. Remove either U3 and/or U4 and replace  them  with  the  desired  IC.  The  MAX5392  EV kit  is  populated  with  additional  PCB  footprints  (U1, U2)  and  various  jumpers  to  evaluate  two  MAX5387 ICs.  See  Table  13  for  proper  jumper  configurations when  evaluating  the  MAX5387  ICs.  Also,  refer  to the  MAX5387  EV  system  data  sheet  for  additional information.

## Table 11. JU23 and JU24 Jumper Functions (U4 Potentiometer A)

| SHUNT POSITION   | SHUNT POSITION   |                  | LA PAD           | MAX5392 FUNCTION                   |
|------------------|------------------|------------------|------------------|------------------------------------|
| JU23             | JU24             |                  | LA PAD           | MAX5392 FUNCTION                   |
| Not installed    | Not installed    | Not connected    | Not connected    | Potentiometer open ended           |
| Not installed    | Installed        | Not connected    | Connected to GND | Potentiometer with GND reference   |
| Installed*       | Not installed    | Connected to VDD | Not connected    | Voltage-divider open ended         |
| Installed*       | Installed*       | Connected to VDD | Connected to GND | Voltage-divider with GND reference |

* Default position.

## Table 12. JU25 and JU26 Jumper Functions (U4 Potentiometer B)

| SHUNT POSITION   | SHUNT POSITION   |                  | LB PAD           | MAX5392 FUNCTION                   |
|------------------|------------------|------------------|------------------|------------------------------------|
| JU25             | JU26             |                  | LB PAD           | MAX5392 FUNCTION                   |
| Not installed    | Not installed    | Not connected    | Not connected    | Potentiometer open ended           |
| Not installed    | Installed        | Not connected    | Connected to GND | Potentiometer with GND reference   |
| Installed*       | Not installed    | Connected to VDD | Not connected    | Voltage-divider open ended         |
| Installed*       | Installed*       | Connected to VDD | Connected to GND | Voltage-divider with GND reference |

* Default position.

## Table 13. Jumper Configuration

| JUMPER   | SHUNT POSITION   | EV KIT FUNCTION                                                                 |
|----------|------------------|---------------------------------------------------------------------------------|
| JU1      | 1-2              | VPOWER = 5V                                                                     |
| JU1      | 1-3*             | VPOWER = 3.3V                                                                   |
| JU1      | 1-4              | VPOWER = 2.6V                                                                   |
| JU2      | Not installed    | 1.7V supply disabled                                                            |
| JU2      | Installed*       | 1.7V supply enabled                                                             |
| JU3      | Not installed    | MAX5387 HA disconnected from the U1 VDD voltage source                          |
| JU3      | Installed*       | MAX5387 HA connected to the U1 VDD voltage source                               |
| JU4      | Not installed    | MAX5387 LA disconnected from GND                                                |
| JU4      | Installed*       | MAX5387 LA connected to GND                                                     |
| JU5      | Not installed    | MAX5387 HB disconnected from the U1 VDD voltage source                          |
| JU5      | Installed*       | MAX5387 HB connected to the U1 VDD voltage source                               |
| JU6      | Not installed    | MAX5387 LB disconnected from GND                                                |
| JU6      | Installed*       | MAX5387 LB connected to GND                                                     |
| JU7      | 2-3*             | U1 device address = 0x50 (refer to Table 4 in the MAX5387 EV system data sheet) |
| JU8      | 2-3*             | U1 device address = 0x50 (refer to Table 4 in the MAX5387 EV system data sheet) |
| JU9      | 2-3*             | U1 device address = 0x50 (refer to Table 4 in the MAX5387 EV system data sheet) |

12      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5392 Evaluation System

Table 13. Jumper Configuration (continued)

| JUMPER   | SHUNT POSITION   | EV KIT FUNCTION                                        |
|----------|------------------|--------------------------------------------------------|
| JU10     | 1-2              | U3 VDD = 1.7V (JU2 installed)                          |
| JU10     | 2-3*             | U3 VDD dependent on jumper JU1 configuration           |
| JU11     | Not installed    | MAX5392 HA disconnected from the U3 VDD voltage source |
| JU11     | Installed*       | MAX5392 HA connected to the U3 VDD voltage source      |
| JU12     | Not installed    | MAX5392 LA disconnected from GND                       |
| JU12     | Installed*       | MAX5392 LA connected to GND                            |
| JU13     | Not installed    | MAX5392 HB disconnected from the U3 VDD voltage source |
| JU13     | Installed*       | MAX5392 HB connected to the U3 VDD voltage source      |
| JU14     | Not installed    | MAX5392 LB disconnected from GND                       |
| JU14     | Installed*       | MAX5392 LB connected to GND                            |
| JU15     | 1-2*             | U3 device address = 0x58 (see Table 7)                 |
| JU16     | 2-3*             | U3 device address = 0x58 (see Table 7)                 |
| JU17     | 2-3*             | U3 device address = 0x58 (see Table 7)                 |
| JU18     | Not installed    | MAX5387 HA disconnected from the U2 VDD voltage source |
| JU18     | Installed*       | MAX5387 HA connected to the U2 VDD voltage source      |
| JU19     | Not installed    | MAX5387 LA disconnected from GND                       |
| JU19     | Installed*       | MAX5387 LA connected to GND                            |
| JU20     | Not installed    | MAX5387 HB disconnected from the U2 VDD voltage source |
| JU20     | Installed*       | MAX5387 HB connected to the U2 VDD voltage source      |
| JU21     | Not installed    | MAX5387 LB disconnected from GND                       |
| JU21     | Installed*       | MAX5387 LB connected to GND                            |
| JU22     | 1-2*             | U4 VDD voltage connected to the U3 VDD voltage source  |
| JU22     | 2-3              | U4 VDD voltage dependent on jumper JU1 configuration   |
| JU23     | Not installed    | MAX5392 HA disconnected from the U4 VDD voltage source |
| JU23     | Installed*       | MAX5392 HA connected to the U4 VDD voltage source      |
| JU24     | Not installed    | MAX5392 LA disconnected from GND                       |
| JU24     | Installed*       | MAX5392 LA connected to GND                            |
| JU25     | Not installed    | MAX5392 HB disconnected from the U4 VDD voltage source |
| JU25     | Installed*       | MAX5392 HB connected to the U4 VDD voltage source      |
| JU26     | Not installed    | MAX5392 LB disconnected from GND                       |
| JU26     | Installed*       | MAX5392 LB connected to GND                            |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    13

## MAX5392 Evaluation System

Figure 5a. MAX5392 EV Kit Schematic-Potentiometers U1, U3 (Sheet 1 of 3)

<!-- image -->

14      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5392 Evaluation System

<!-- image -->

Figure 5b. MAX5392 EV Kit Schematic-Potentiometers U2, U4 (Sheet 2 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    15

## MAX5392 Evaluation System

Figure 5c. MAX5392 EV Kit Schematic-Level Translators (Sheet 3 of 3)

<!-- image -->

16      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5392 Evaluation System

Figure 6. MAX5392 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 7. MAX5392 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    17

## MAX5392 Evaluation System

Figure 8. MAX5392 EV Kit PCB Layout-Solder Side

<!-- image -->

18      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5392 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 1/10            | Initial release          | -               |
|                 1 | 5/10            | Replaced Figures 6 and 7 | 17              |