<!-- lastmod 2022-08-03 -->
## General Description

The MAX5422 evaluation kit (EV kit) is an assembled and tested PCB that evaluates the MAX5422 IC. The MAX5422 is a 50k Ω 256-tap, nonvolatile, linear digital potentiometer  communicating  over  SPI™.  The MAX5422 features an internal nonvolatile EEPROM used to store the potentiometer's wiper position for initialization during power-up. The EEPROM is programmed through the SPI-compatible serial interface, communicating at data rates up to 5MHz. The SPI signals can be transmitted through an on-board USB interface circuit using a computer or a user-supplied SPI bus along with PCB headers on the EV kit.

The EV kit also features Windows 2000/XP/Vista ® -compatible software that provides a professional user interface for exercising the MAX5422's features. The program is  menu driven and offers a graphical user interface (GUI) complete with buttons, track bars, and spin boxes.

The MAX5422 IC is powered from a 3.3V source generated from the EV kit's USB interface circuit, or an external user-supplied 2.7V to 5.25V DC power supply. The MAX5422 section can be broken out from the EV kit, allowing the MAX5422 to be attached to the user applications with minimal additional circuit area.

The EV kit can also evaluate the MAX5423 (100k Ω ) or  MAX5424 (200k Ω )  after  IC  replacement  (U1).  The MAX5422 EV kit is shipped with a MAX5422ETA+ IC installed.

SPI is a trademark of Motorola, Inc.

Windows Vista is a registered trademark of Microsoft Corp.

| DESIGNATION              |   QTY | DESCRIPTION                                                                               |
|--------------------------|-------|-------------------------------------------------------------------------------------------|
| C1, C3-C10, C17, C21-C25 |    15 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K or TDK C1608X7R1C104K |
| C2, C13, C15             |     3 | 10µF ±20%, 6.3V X5R ceramic capacitors (0805) Murata GRM21BR60J106M or TDK C2012X5R0J106M |
| C11, C12                 |     2 | 10pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H100J o r TDK C1608C0G1H100J  |
| C14, C16, C26            |     3 | 1µF ±10%, 10V X5R ceramic capacitors (0603) Murata GRM188R61A105K or TDK C1608X5R1A105K   |

<!-- image -->

## Features

- ♦ Power-On Recall of Wiper Position from Nonvolatile Memory
- ♦ 2.7V to 5.25V Single-Supply Operation
- ♦ On-Board USB Interface Circuit for SPICompatible Signals
- ♦ Proven USB-PC Connection for Power and Control (USB Cable Included)
- ♦ Main Circuit Breakout Board
- ♦ PCB Headers for User-Supplied SPI-Compatible Signals
- ♦ PCB Pads for Potentiometer Signals L, W, and H
- ♦ Evaluates the MAX5422ETA/MAX5423ETA/ MAX5424ETA in 3mm x 3mm x 0.8mm, 8-Pin TDFN Package
- ♦ Windows 2000/XP/Vista (32-Bit)-Compatible Software
- ♦ Fully Assembled and Tested

| PART          | TYPE   |
|---------------|--------|
| MAX5422EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| C18, C19      |     2 | 22pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H220J or TDK C1608C0G1H220J   |
| C20           |     1 | 3300pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H332K or TDK C1608X7R1H332K |
| D1            |     1 | Green LED (0603) Panasonic LNJ314G8TRA                                                    |
| FB1           |     0 | Not installed, ferrite bead inductor (0603)                                               |
| J1, J2        |     2 | 2 x 6-pin headers                                                                         |
| JU1, JU2      |     2 | 3-pin headers                                                                             |
| JU3           |     1 | 2-pin header                                                                              |

## MAX5422 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| P1            |     1 | USB type-B right-angle male receptacle                                       |
| R1            |     1 | 0 Ω ±5% resistor (0603)                                                      |
| R2            |     1 | 220 Ω ±5% resistor (0603)                                                    |
| R3            |     1 | 10k Ω ±5% resistor (0603)                                                    |
| R4            |     1 | 2.2k Ω ±5% resistor (0603)                                                   |
| R5            |     1 | 1.5k Ω ±5% resistor (0603)                                                   |
| R6, R7        |     2 | 27 Ω ±5% resistors (0603)                                                    |
| U1            |     1 | 256-tap digital potentiometer (8 TDFN-EP*) Maxim MAX5422ETA+ (Top Mark: AIJ) |
| U2            |     1 | 32-bit microcontroller (68 QFN-EP*) Maxim MAXQ2000-RAX+                      |
| U3            |     1 | 93C46 type 3-wire EEPROM (8 SO)                                              |
| U4            |     1 | UART-to-USB converter (32 TQFP)                                              |
| U5            |     1 | 3.3V regulator (5 SC70) Maxim MAX8511EXK33+ (Top Mark: AEI)                  |
| U6            |     1 | 2.5V regulator (5 SC70) Maxim MAX8511EXK25+ (Top Mark: ADV)                  |
| U7            |     1 | Dual 1.8V to 5V level translator (8 SSOP)                                    |
| U8            |     1 | Single 1.8V to 5V level translator (6 SOT23)                                 |
| Y1            |     1 | 16MHz crystal Hong Kong X'tals SSM1600000E18FAF                              |

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- MAX5422 EV kit (USB cable included)
- A user-supplied Windows 2000/XP/Vista PC with a USB spare port
- One ohmmeter

Note: In  the  following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Component Suppliers

| SUPPLIER                            | PHONE        | WEBSITE                     |
|-------------------------------------|--------------|-----------------------------|
| Hong Kong X'tals Ltd.               | 852-35112388 | www.hongkongcrystal.com     |
| MurataElectronics NorthAmerica,Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                     | 800-344-2112 | www.panasonic.com           |
| TDK Corp.                           | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX5422, MAX5423, or MAX5424 when contacting these component suppliers.

## MAX5422 EV Kit Files

| FILE                | DESCRIPTION                               |
|---------------------|-------------------------------------------|
| INSTALL.EXE         | Installs the EV kit files on the computer |
| MAX5422.EXE         | Application program                       |
| FTD2XX.INF          | USB driver file                           |
| UNINST.INI          | Uninstalls the EV kit software            |
| USB_Driver_Help.PDF | USB driver installation help file         |

## Procedure

The MAX5422 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit  www.maxim-ic.com/evkitsoftware to download the  latest  version  of  the  EV  kit  software, 5422Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install  the  EV  kit  software  on  the  computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                    |
|---------------|-------|------------------------------------------------|
| Y2            |     1 | 6MHz crystal Hong Kong X'tals SSL6000000E18FAF |
| -             |     8 | Shunts                                         |
| -             |     1 | PCB: MAX5422 Evaluation Kit+                   |

- 3) Verify that shunts are correctly installed on the following jumpers and headers listed in the table below:
- 4) Connect the ohmmeter across the W and L PCB pads.

| JUMPER     | SHUNT POSITION          | EV KIT FUNCTION                                                       |
|------------|-------------------------|-----------------------------------------------------------------------|
| JU1        | 1-2                     | EV kit powered by the 3.3V gener- ated from the USB interface circuit |
| JU2        | Install on one pin only | H PCB pad is not connected to VDD or the WPCB pad                     |
| JU3        | Installed               | L PCB pad is connected to GND                                         |
| J1 (1-2)   | Installed               | Connects 3.3V from USB interface to MAX5422                           |
| J1 (3-4)   | Installed               | Connects VDD from MAX5422 to USB interface                            |
| J1 (5-6)   | Installed               | Connects SCLK from USB interface to MAX5422                           |
| J1 (7-8)   | Installed               | Connects DIN from USB interface to MAX5422                            |
| J1 (9-10)  | Installed               | Connects CS from USB interface to MAX5422                             |
| J1 (11-12) | Not installed           | Shunt not required Do not install shunts                              |
| J2 (1-2)   |                         |                                                                       |
| J2 (3-4)   |                         | on these                                                              |
| J2 (5-6)   | Not installed           | pins; shunts will short the power                                     |
| J2 (7-8)   |                         | and signal lines to ground                                            |
| J2 (9-10)  |                         |                                                                       |
| J2 (11-12) | Not installed           | Shunt not required                                                    |

<!-- image -->

## MAX5422 Evaluation Kit

- 5) Connect the included USB cable from the PC to the MAX5422 EV kit. A Building Driver Database window pops up in addition to a New Hardware Found message when installing the USB driver for the first time. If a window similar to the one described above does not appear after 30s, remove the USB cable from the board and reconnect it.  Administrator privileges are required to i nstall  the  USB  device  driver  on  Windows 2000/XP/Vista.
- 6) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX5422 (default installation directory) using the Browse button. During device driver installation,  Windows may show a warning message indicating that the device driver Maxim uses does not contain a digital signature. This is not an error condition and it is safe to proceed with installation. Refer to the USB\_Driver\_Help.PDF document included with the software if there are problems during this step.
- 7) Start  the  MAX5422 EV kit software by opening its icon in the Start | Programs menu.
- 8) Observe as the program automatically detects the USB connection and starts the main program. After successful connection, the EV kit software main window appears in the upper-left corner of the window (Figure 1).
- 9) The MAX5422 EV kit is ready for additional testing. See the Detailed Description of Software section for more information on the software features.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5422 Evaluation Kit

## Detailed Description of Software

## Graphic User Interface (GUI) Panel

The MAX5422 EV kit software GUI shown in Figure 1 is a Windows program that provides a convenient means to  control  the  MAX5422. Use the mouse or press the tab key to navigate through the GUI controls. The correct SPI write operation is generated to update the MAX5422 internal memory registers when any of these controls are executed.

Figure 1. MAX5422 Evaluation Kit Software Main Window

<!-- image -->

The software divides EV kit functions into logical blocks. The Interface group box indicates the EV kit Status and the last write operation Command Sent and Data Sent indicators. This data is used to confirm proper device operation. The Potentiometer Control group box changes the wiper position, stores the wiper position from the volatile memory to the nonvolatile memory, and recalls the wiper position from the nonvolatile memory to the volatile memory. The bottom status bar of the main window provides the USB interface circuit communication status. The Factory Default button programs the volatile and nonvolatile memory of the potentiometer to midscale position.

## Software Startup

Upon startup, the MAX5422 EV kit software automatically searches for the USB interface circuit connection. The MAX5422 EV kit enters the normal operating mode when the USB connection is detected. The nonvolatile memory wiper position is then transferred to the volatile memory. Since the MAX5422 does not have read capability, all the spin boxes are set to question marks ' ?? ' and the track bar is set to midscale. If the USB connection  is  not  detected,  the  software  prompts  the  user  to retry, exit the program, or enter the demo mode.

## Demo Mode

The MAX5422 EV kit software enters the demo mode, when the USB connection is not detected, by selecting Cancel on the MAX5422 Evaluation Kit Interface Circuit popup window (Figure 2). The software can also enter demo mode at any time by selecting Options | Demo Mode from the menu bar in the main window. When in demo mode, all software communication to the EV kit circuit is disabled; however, most of the software GUI is functional. Demo mode allows the user to evaluate the software without hardware connectivity. To exit demo mode, select Options | Demo Mode from the menu bar.

Figure 2. MAX5422 Evaluation Kit Interface Circuit Popup Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Wiper Position

The Wiper Position track bar in the Potentiometer Control group box is used to change the wiper position between the H and L end points. Use the computer mouse or arrow keys to move the Wiper Position between the 256 position points. The wiper position can also be changed by entering a numerical value between 0 and 255 into the H-W Volatile or L-W Volatile spin boxes, or by pressing the up or down arrows of these spin boxes. A change in the Wiper Position track  bar,  or H-W Volatile/L-W Volatile spin boxes write to the volatile memory and the wiper position is updated with the data sent. The data in the nonvolatile memory remains unchanged. The wiper position is  shown in the H-W Volatile and L-W Volatile spin boxes. The H-W Volatile spin box shows the wiper position with respect to the H end point and the L-W Volatile spin box shows the wiper position with respect to  the  L  end  point.  During EV kit power-up, the wiperposition data in the nonvolatile memory is transferred to the volatile memory and the position of the wiper is updated. The H-W Volatile , L-W Volatile , H-W Nonvolatile ,  and L-W Nonvolatile spin boxes display ' ?? '  after  initializing  the  EV  kit  software  because  the MAX5422 does not transmit data to the master.

## Nonvolatile Programming

The H-W Nonvolatile and L-W Nonvolatile spin boxes in  the Potentiometer Control group box are used to program the nonvolatile memory of the digital potentiometers. The nonvolatile memory is changed by entering a numerical value between 0 and 255 into the H-W Nonvolatile or L-W Nonvolatile spin boxes. The H-W Nonvolatile spin box shows the wiper position with respect to the H end point and the L-W Nonvolatile spin box shows the wiper position with respect to the L

Table 1. MAX5422 SPI Command

| MAX5422 REGISTER   | COMMAND   | COMMAND   |                                                                                     | MAX5422 EV KIT                  |
|--------------------|-----------|-----------|-------------------------------------------------------------------------------------|---------------------------------|
|                    | BINARY    | HEX       | DESCRIPTION                                                                         | SOFTWARE CONTROL                |
| VREG               | 00000000  | 0x00      | SPI data is written to VREG Wiper position updates with SPI data No change to NVREG | H-W Volatile L-W Volatile       |
| NVREG              | 00010000  | 0x10      | SPI data is written to NVREG No change to wiper position No change to VREG          | H-W Nonvolatile L-W Nonvolatile |
| VREGxNVREG         | 00100000  | 0x20      | Copy VREG to NVREG No change to wiper position No change to VREG                    | Store                           |
| NVREGxVREG         | 00110000  | 0x30      | Copy NVREG to VREG Wiper position updates with NVREG No change to NVREG             | Recall                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5422 Evaluation Kit

end point. When writing to the nonvolatile memory, the volatile memory and wiper position remain unchanged.

Volatile/Nonvolatile Data Transferring The Potentiometer Control group box contains the Store and Recall buttons used to transfer data from the volatile memory to the nonvolatile memory and the nonvolatile  memory to the volatile memory, respectively. When the Store button is pressed, the data present in the volatile memory is transferred to the nonvolatile memory. When the Recall button is pressed, the data present in the nonvolatile memory is transferred to the volatile memory, and the wiper position is updated. The Store and Recall buttons do not send any new data to the device because the commands transferred data already contained in the volatile or nonvolatile memory.

## Factory Default

Pressing the Factory Default button resets the wiper position in the MAX5422 volatile and nonvolatile memory  to  the  factory-default  position.  The  factory-default wiper position is the midscale position.

## Status Indicator

The Status indicator in the Interface group box displays EV Kit Operational when the MAX5422 EV kit enters the normal operating mode after the USB connection is detected. When USB connection is not detected, or when the software enters the demo mode, the Status indicator displays Demo Mode .

## Command Sent Indicator

The Command Sent indicator in the Interface group box displays the last command sent from the master (software) to the MAX5422. There are four commands available in the MAX5422 IC. Table 1 describes the four MAX5422 commands.

## MAX5422 Evaluation Kit

## Data Sent Indicator

The Data Sent indicator in the Interface group box displays the last data sent from the master (software) to the MAX5422. The Data Sent indicator displays the last data sent for the write to VREG (0x00) command and the write to NVREG (0x10) command. Since the VREGxNVREG (0x20) and the NVREGxVREG (0x30) commands do not send any new data to the MAX5422, the Data Sent indicator is hidden when these two commands are executed.

The MAX5422 IC uses an 8-bit (MSBs, D7-D0) data byte to set the wiper position. Refer to the MAX5422/ MAX5423/MAX5424 IC data sheet for additional information.

## Keyboard Navigation

Press the Tab key to select each GUI control. The selected control is indicated by a dotted outline. Using Shift + Tab moves the selection to the previously selected control. Buttons respond to the keyboard's space bar and some controls respond to the keyboard's up and down arrow keys. Activate the program's menu bar by pressing the F10 key and then press the letter of the desired menu item. Most menu items have one letter underlined, indicating their shortcut key.

When a number is entered into the volatile or nonvolatile  text  boxes,  it  can  be  sent  to  the  device  by pressing the Enter key. It is also sent when Tab or Shift + Tab is pressed.

## Simple SPI Commands

There are two methods for communicating with the MAX5422 EV kit, through the normal user-interface panel (Figure 1) or through the SPI commands available by selecting the 3-Wire Interface (Figure 3) utility from  the  main  program's Options  |  Interface (Advanced Users) main menu. A window is displayed that allows SPI send/receive data operations.

The Connection group box allows the user to define the hardware  connections  of  the  interface. For  the MAX5422 EV kit, select K10 from the Clock (SCK) (SCLK) drop-down list, K12 from the Data from master to slave (MOSI) (DIN) drop-down list, K11 from the Data from slave to master (MISO) (DOUT) drop-down list, K9 from the Chip-select (CS) for data framing drop-down list, and uncheck the Use standard connections for high-speed SPI checkbox (see Figure 3).

The Configuration group box allows the user to configure the logic level and data rate. For the MAX5422 EV kit,  check the Send &amp; Receive MSB first and the CPOL=1 (clock idle high) checkboxes (see Figure 3).

The Send and Receive Data group box allows the user to  send and receive data to and from the MAX5422. The Data bytes to be written edit  box  is  data  to  be sent from the master (microcontroller) to the device (MAX5422). Eight-bit hexadecimal numbers should be comma delimited. Press the Send Now button to transmit the data from the master to the device. Data appearing in the Data bytes received edit box is data read from the device. The Data bytes received edit box in the MAX5422 EV kit software always shows a default value of 0xFF since the MAX5422 does not send data back to the master.

Note: The SPI dialog boxes accept numeric data in hexadecimal format. Hexadecimal numbers must be prefixed  by  $  or  0x.  See  Figure  3  for  an  example  of this tool. Figure 3 shows a simple SPI write-byte operation  using  the  included  3-wire  interface  diagnostics tool.  In  this  example,  the  software  is  sending  a  command 0x00 (write to volatile memory), and a data 0x7F. The data sequence sets the MAX5422 wiper position to 128.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5422 Evaluation Kit

Figure 3. Simple Low-Level 3-Wire Interface

<!-- image -->

## General Troubleshooting

## Problem: Software reports it cannot find the interface circuit.

- Is the interface circuit power LED lit?
- Is the USB cable connected?
- Has Windows plug-and-play detected the board? Bring  up Control  Panel-&gt;System-&gt;Device Manager ,  and  look  at  what  device  nodes are indicated for USB. If there is an Unknown device node attached to the USB, delete it-this forces plugand-play to try again.
- Are jumper JU1 and headers J1 and J2 properly configured for USB operation? See Tables 2 and 3.

<!-- image -->

## Detailed Description of Hardware

The MAX5422 EV kit is an assembled and tested PCB that evaluates the MAX5422 256-tap, nonvolatile, linear digital potentiometer. The MAX5422 has an end-to-end resistance of 50k Ω and the wiper can be programmed to one of 256 tap positions. The MAX5422 features an internal,  nonvolatile  memory (EEPROM) used to store the wiper position for initialization during power-up. The MAX5422 EV kit provides an on-board SPI-compatible serial interface to program the MAX5422.

The EV kit uses a MAX5422 IC in an 8-pin TDFN package on a proven two-layer PCB design. The MAX5422 EV kit provides two options to power the MAX5422 IC. It can operate from the 3.3V supply generated from the USB interface circuit, or from a user-supplied 2.7V to 5.25V external DC power supply. The logic level translators  (U7,  U8)  provide  proper  SPI-interface  operation when using a 2.7V to 5.25V external power supply.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5422 Evaluation Kit

The MAX5422 main circuit area consists of the MAX5422 IC U1, decoupling capacitors C25 and C26, jumpers JU1, JU2, and JU3, header J2, and PCB pads H, W, L, VCC, and GND. The MAX5422 main circuit PCB section is less than 1.2in x 1.1in and can be separated from the EV kit using the cutout slots, allowing the MAX5422 to be conveniently attached to a user application. After separation, the two parts of the EV kit can be reconnected using a short cable. A short ribbon cable of about 3in is recommended to reconnect the MAX5422 EV kit. A Samtec IDSS-06-D-3.00 ribbon cable can be used to connect header J1 odd pins to header J2 odd pins.

## Jumper Selection

## Using an External DC Power Supply

The MAX5422 EV kit can be powered by an external 2.7V to 5.25V DC power supply. The EV kit can still be programmed through the USB interface using the software GUI. To connect the EV kit to an external power supply, disconnect the USB cable and install a shunt on pins 2-3 of jumper JU1. Turn off the power supply and connect the power-supply ground terminal to the EV kit GND pad, and the power-supply positive terminal to  the  VCC pad. Table 2 lists the various options for powering the MAX5422 EV kit.

Table 2. JU1 Jumper Functions (VDD)

| SHUNT POSITION   | V DD PIN CONNECTED TO   | EV KIT POWERED FROM                   |
|------------------|-------------------------|---------------------------------------|
| 1-2*             | 3.3V                    | USB interface circuit                 |
| 2-3              | V CC                    | External power supply (2.7V to 5.25V) |
| Open             | Not connected           | Do not use (EV kit is not powered)    |

*Default position.

## SPI Clock and Data/Chip Select Inputs

The MAX5422 features a clock and data/chip select input pins for SPI-compatible communication to control the MAX5422 wiper position and transfer data between volatile and nonvolatile memories. The clock and data/chip select pins can be driven by the on-board USB interface circuit or the PCB header (J2), along with a user-supplied external SPI-compatible controller. An external SPI-compatible controller can be connected to the SCLK (J2-6), DIN (J28), CS (J2-10), and GND (J2-12) on header J2 to communicate with the MAX5422 IC. When using an external SPIcompatible controller, disconnect the on-board USB interface circuit by removing all the shunts from header J1.

Headers J1 and J2 select the SPI serial-interface signalcontrol sources for the MAX5422 IC. Table 3 lists the various options for configuring SPI input signal controls.

Table 3. J1, J2 Header Functions (+3.3V, VDD, SCLK, DIN, CS , GND)

| HEADER POSITION   | SHUNT POSITION   | EV KIT FUNCTION                                                                              |
|-------------------|------------------|----------------------------------------------------------------------------------------------|
| J1 (1-2)          | Installed*       | Connects +3.3V from USB interface to MAX5422                                                 |
| J1 (1-2)          | Not installed    | Disconnect +3.3V from USB interface to MAX5422                                               |
| J1 (3-4)          | Installed*       | Connects VDD from MAX5422 to USB interface                                                   |
| J1 (3-4)          | Not installed    | Disconnect VDD from MAX5422 to USB interface                                                 |
| J1 (5-6)          | Installed*       | Connects SCLK from USB interface to MAX5422                                                  |
| J1 (5-6)          | Not installed    | Disconnect SCLK from USB interface to MAX5422                                                |
| J1 (7-8)          | Installed*       | Connects DIN from USB interface to MAX5422                                                   |
| J1 (7-8)          | Not installed    | Disconnect DIN from USB interface to MAX5422                                                 |
| J1 (9-10)         | Installed*       | Connects CS from USB interface to MAX5422                                                    |
| J1 (9-10)         | Not installed    | Disconnect CS from USB interface to MAX5422                                                  |
| J1 (11-12)        | Not installed    | Shunt not required                                                                           |
| J2 (1-2)          | Not installed    | Do not install shunts on these pins. Shunts will short the power and signal lines to ground. |
| J2 (3-4)          | Not installed    | Do not install shunts on these pins. Shunts will short the power and signal lines to ground. |
| J2 (5-6)          | Not installed    | Do not install shunts on these pins. Shunts will short the power and signal lines to ground. |
| J2 (7-8)          | Not installed    | Do not install shunts on these pins. Shunts will short the power and signal lines to ground. |
| J2 (9-10)         | Not installed    | Do not install shunts on these pins. Shunts will short the power and signal lines to ground. |
| J2 (11-12)        | Not installed    | Shunt not required                                                                           |

*Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Potentiometer, Voltage-Divider, or Variable Resistor, with Ground Reference

The MAX5422 EV kit provides an option to configure the MAX5422 as a potentiometer, voltage-divider, or variable resistor-open end(s), or with ground reference using jumpers JU2 and JU3. Table 4 lists the various JU2 and JU3 jumper options.

Warning: When operating as a variable resistor (jumper JU2 shunts on pins 2-3), any power source connected to the H, W, or L pad must be voltage and current limited to the absolute maximum conditions stated in the MAX5422/MAX5423/MAX5424 IC data sheet.

## MAX5422 Evaluation Kit

Note that to test the device in resistor mode, the ohmmeter must be ground referenced to the MAX5422 by connecting  the  L  pin  to  GND  or  the  H  pin  to  VDD. Resistance can then be measured between W and L or W and H.

## Evaluating the MAX5423ETA/MAX5424ETA

The  MAX5422  EV  kit  can  also  evaluate  the MAX5423ETA or the MAX5424ETA. Remove the MAX5422ETA IC (U1) and replace it with the desired IC. The MAX5423ETA and MAX5424ETA ICs are pin and functional compatible with the MAX5422ETA IC. Refer to the MAX5422/MAX5423/MAX5424 IC data sheet for a complete description of part-to-part differences.

## Table 4. JU2 and JU3 Jumper Functions (L Signal and GND)

| SHUNT POSITION   | SHUNT POSITION   |                   | L PAD            | MAX5422 FUNCTION                        |
|------------------|------------------|-------------------|------------------|-----------------------------------------|
| JU2              | JU3              |                   |                  |                                         |
| Not installed*   | Not installed*   | Not connected     | Not connected    | Potentiometer open ends                 |
| Not installed*   | Installed        | Not connected     | Connected to GND | Potentiometer with ground reference     |
| 1-2              | Not installed    | Connected to VDD  | Not connected    | Voltage-divider open end                |
| 1-2              | Installed        | Connected to VDD  | Connected to GND | Voltage-divider with ground reference   |
| 2-3**            | Not installed    | Connected to Wpad | Not connected    | Variable resistor open ends             |
| 2-3**            | Installed        | Connected to Wpad | Connected to GND | Variable resistor with ground reference |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5422 Evaluation Kit

Figure 4a. MAX5422 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5422 Evaluation Kit

<!-- image -->

Figure 4b. MAX5422 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5422 Evaluation Kit

Figure 5. MAX5422 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 6. MAX5422 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 7. MAX5422 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX5422 Evaluation Kit

Figure 8. MAX5422 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.