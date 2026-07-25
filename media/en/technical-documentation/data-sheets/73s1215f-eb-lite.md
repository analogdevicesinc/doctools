<!-- lastmod 2022-08-02 -->
<!-- image -->

Simplifying System Integration TM

## 73S1215F Evaluation Board Lite User Guide

© 2009 Teridian Semiconductor Corporation.  All rights reserved.

Teridian Semiconductor Corporation is a registered trademark of Teridian Semiconductor Corporation.

Simplifying System Integration is a trademark of Teridian Semiconductor Corporation.

Microsoft, Windows and Vista are registered trademarks of Microsoft Corporation.

Signum is a trademark of Signum Systems Corporation.

Keil is a trademark of ARM® Ltd.

Linux is a registered trademark of Linus Torvalds.

Slackware is a registered trademark of Patrick Volkerding and Slackware Linux, Inc.

Fedora is a registered trademark of RedHat, Inc.

All other trademarks are the property of their respective owners.

Teridian Semiconductor Corporation makes no warranty for the use of its products, other than expressly contained in the Company's warranty detailed in the Teridian Semiconductor Corporation standard Terms and Conditions.  The company assumes no responsibility for any errors which may appear in this document, reserves the right to change devices or specifications detailed herein at any time without notice and does not make any commitment to update the information contained herein.  Accordingly, the reader is cautioned to verify that this document is current by comparing it to the latest version on http://www.teridian.com or by checking with your sales representative.

Teridian Semiconductor Corp., 6440 Oak Canyon, Suite 100, Irvine, CA 92618 TEL (714) 508-8800, FAX (714) 508-8877, http://www.teridian.com

## Table of Contents

| 1                                                                                                                                                    | Introduction ...................................................................................................................................5    | Introduction ...................................................................................................................................5    |
|------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
|                                                                                                                                                      | 1.1                                                                                                                                                  | Evaluation Board LIte Package Contents ..............................................................................6                               |
|                                                                                                                                                      | 1.2                                                                                                                                                  | Evaluation Board Lite Features .............................................................................................6                        |
|                                                                                                                                                      | 1.3                                                                                                                                                  | Recommended Equipment and Test Tools............................................................................6                                    |
| 2                                                                                                                                                    | Evaluation Board Lite Basic Setup...............................................................................................7                    | Evaluation Board Lite Basic Setup...............................................................................................7                    |
|                                                                                                                                                      | 2.1                                                                                                                                                  | Connecting the Evaluation Board Lite with an Emulation Tool ...............................................8                                         |
|                                                                                                                                                      | 2.2                                                                                                                                                  | Loading User Code into the Evaluation Board Lite.................................................................8                                   |
| 3                                                                                                                                                    | Using the USB CCID Application ................................................................................................10                    | Using the USB CCID Application ................................................................................................10                    |
|                                                                                                                                                      | 3.1                                                                                                                                                  | Driver and Software Installation...........................................................................................10                        |
|                                                                                                                                                      |                                                                                                                                                      | 3.1.1 Installation on Windows XP .......................................................................................10                           |
|                                                                                                                                                      |                                                                                                                                                      | 3.1.2 Installation on a Linux System ...................................................................................11                           |
|                                                                                                                                                      | 3.2                                                                                                                                                  | Frequently Asked Questions...............................................................................................11                          |
| 4                                                                                                                                                    | 73S1215F Evaluation Board Lite Hardware Description............................................................13                                    | 73S1215F Evaluation Board Lite Hardware Description............................................................13                                    |
|                                                                                                                                                      | 4.1                                                                                                                                                  | Jumpers, Switches and Test Points.....................................................................................13                             |
|                                                                                                                                                      | 4.2                                                                                                                                                  | Schematic...........................................................................................................................16               |
|                                                                                                                                                      | 4.3                                                                                                                                                  | PCB Layouts.......................................................................................................................17                 |
|                                                                                                                                                      | 4.4                                                                                                                                                  | Bill of Materials ...................................................................................................................20              |
|                                                                                                                                                      | 4.5                                                                                                                                                  | Schematic Information ........................................................................................................22                     |
|                                                                                                                                                      |                                                                                                                                                      | 4.5.1 Reset Circuit..............................................................................................................22                  |
|                                                                                                                                                      |                                                                                                                                                      | 4.5.2 Oscillators .................................................................................................................22                |
|                                                                                                                                                      |                                                                                                                                                      | 4.5.3 USB Interface............................................................................................................23                    |
|                                                                                                                                                      |                                                                                                                                                      | 4.5.4 Smart Card Interface .................................................................................................23                       |
| 5                                                                                                                                                    | Ordering Information...................................................................................................................25            | Ordering Information...................................................................................................................25            |
| 6                                                                                                                                                    | Related Documentation...............................................................................................................25               | Related Documentation...............................................................................................................25               |
| 7                                                                                                                                                    | Contact Information.....................................................................................................................25           | Contact Information.....................................................................................................................25           |
| Revision History..................................................................................................................................26 | Revision History..................................................................................................................................26 | Revision History..................................................................................................................................26 |

## Figures

| Figure 1: 73S1215F Evaluation Board Lite...............................................................................................5            |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| Figure 2: 73S1215F Evaluation Board Lite Basic Connections.................................................................7                        |
| Figure 3: Emulator Window Showing RESET and ERASE Buttons...........................................................9                               |
| Figure 4: Emulator Window Showing Erased Flash Memory and File Load Menu.....................................9                                      |
| Figure 5: 73S1215F Evaluation Board Lite Jumper, Switch and Test Point Location...............................15                                    |
| Figure 6: 73S1215F Evaluation Board Lite Electrical Schematic.............................................................16                        |
| Figure 7: 73S1215F Evaluation Board Lite Top View (Silkscreen) ..........................................................17                         |
| Figure 8: 73S1215F Evaluation Board Lite Bottom View (Silkscreen) .....................................................17                           |
| Figure 9: 73S1215F Evaluation Board Lite Top Signal Layer..................................................................18                       |
| Figure 10: 73S1215F Evaluation Board Lite Middle Layer 1 - Ground Plane..........................................18                                 |
| Figure 11: 73S1215F Evaluation Board Lite Middle Layer 2 - Supply Plane...........................................19                                |
| Figure 12: 73S1215F Evaluation Board Lite Bottom Signal Layer...........................................................19                          |
| Figure 13: External Components for RESET..........................................................................................22                |
| Figure 14: Oscillator Circuit....................................................................................................................22 |
| Figure 15: USB Connections..................................................................................................................23      |
| Figure 16: Smart Card Connections.......................................................................................................24          |
| Tables                                                                                                                                              |
| Table 1: Flash Programming Interface Signals.........................................................................................8              |
| Table 2: Evaluation Board Lite Jumper, Switch and Test Point Description.............................................13                             |
| Table 3: 73S1215F Evaluation Board Lite Bill of Materials......................................................................20                   |

## 1 Introduction

The Teridian Semiconductor Corporation (TSC) 73S1215F Evaluation Board Lite is used to demonstrate the capabilities of the 73S1215F Smart Card Controller devices.  It has been designed to operate either as a standalone or a development platform.

The 73S1215F Evaluation Board Lite can be programmed to run any of the Teridian turnkey applications or a user-developed custom application.  Teridian provides its USB CCID application preloaded on the board and an EMV testing application on the CD.

Applications can be downloaded through the In-Circuit-Emulator (ICE) or through the TSC Flash Programmer Model TFP2.  As a development tool, the Evaluation Board Lite has been designed to operate in conjunction with an ICE to develop and debug 73S1215F based embedded applications.

Figure 1: 73S1215F Evaluation Board Lite

<!-- image -->

## 1.1 Evaluation Board LIte Package Contents

The 73S1215F Evaluation Board Lite package contains the following:

- 73S1215F Evaluation Board Lite:  4-layer, square PWB as shown in Figure 1, containing the 73S1215F with the preloaded turnkey program USB CCID.
- 12 VDC/1,000 mA universal wall transformer with 2.1 mm plug ID (CUI Inc. - EPAS-101W-12).
- USB cable, A/B, male, 2 meters (Digi-Key AE1379-ND).
- CD containing documentation (data sheet, board schematic, BOM and layout), evaluation code and utilities.

## 1.2 Evaluation Board Lite Features

The 73S1215F Evaluation Board Lite (see Figure 1) includes the following features:

- USB 2.0 full speed interface
- RS-232 interface
- Single smart card interface
- ICE/Programmer interface
- Real Time Clock (RTC) capability
- 4 LEDs

## 1.3 Recommended Equipment and Test Tools

The following equipment and tools (not provided) are recommended for use with the 73S1215F Evaluation Board Lite package:

- For functional evaluation: PC with Microsoft ® Windows ® XP or Vista ® or a Linux ® workstation, equipped with an RS232 (COM) port and or a USB port.
- For software development (MPU code)
-  Signum™ ICE (In Circuit Emulator): ADM-51.  Refer to http://signum.temp.veriohosting.com/Signum.htm.
-  Keil™ 8051 C Compiler Kit: CA51.  Refer to http://www.keil.com/c51/ca51kit.htm and http://www.keil.com/product/sales.htm.

## 2 Evaluation Board Lite Basic Setup

Figure 2 shows the basic connections of the Evaluation Board-Lite with the external equipment.

The power supply can come from any AC-DC converter block able to generate a DC power supply of 7 V min / 12 V max / 400mA connected to connector PJ1.

The communication with an external host can be accommodated by either:

- A standard USB 2.0 Full Speed Interface or
- A standard RS-232 serial interface (TX/RX only).

The board provides by default the USB CCID application.  Refer to Section 3 for information to set up and run the USB CCID application.

Figure 2: 73S1215F Evaluation Board Lite Basic Connections

<!-- image -->

## 2.1 Connecting the Evaluation Board Lite with an Emulation Tool

The 73S1215F Evaluation Board Lite can operate with an In-Circuit-Emulator (ICE) from Signum Systems (model ADM-51).  The Signum System POD has a ribbon cable that must be directly attached to connector J2 (see Figure 2).

Signum Systems offers different pod options depending on user needs.  The standard pod allows users to perform typical emulator functions such as symbolic debugging, in-line breakpoints, memory examination and/or modification, etc.  Other pod options enable code trace capability and/or complex breakpoints at an additional cost.

## 2.2 Loading User Code into the Evaluation Board Lite

## Hardware Interface for Programming

The signals listed in Table 1 are necessary for communication between the Flash Downloader or ICE and the 73S1215F.

Table 1: Flash Programming Interface Signals

| Signal                                                                                                                                      | Direction                                                                                                                                   | Function                                                                                                                                    |
|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| E_TCLK                                                                                                                                      | Output from 73S1215F                                                                                                                        | Data clock                                                                                                                                  |
| E_RXTX                                                                                                                                      | Bi-directional                                                                                                                              | Data input/output                                                                                                                           |
| E_RST 1                                                                                                                                     | Bi-directional                                                                                                                              | Flash Downloader Reset (active low)                                                                                                         |
| 1 The E_RST signal should only be driven by the TFP2 when enabling these interface signals. The TFP2 must release E_RST at all other times. | 1 The E_RST signal should only be driven by the TFP2 when enabling these interface signals. The TFP2 must release E_RST at all other times. | 1 The E_RST signal should only be driven by the TFP2 when enabling these interface signals. The TFP2 must release E_RST at all other times. |

The signals in Table 1, along with 3.3 V and GND, are available on the emulator header J2.  Production modules may be equipped with much simpler programming connectors, e.g. a 5x1 header.

Programming of the flash memory requires either the Signum Systems ADM51 in-circuit emulator or the TSC Flash Programmer Model TFP2 provided by Teridian.

## Loading Code with the In-Circuit Emulator

If firmware exists in the 73S1215F flash memory, the memory must be erased before loading a new file into memory.  In order to erase the flash memory, the RESET button in the emulator software must be clicked followed by the ERASE button (see Figure 3).

Once the flash memory is erased, a new file can be loaded using the Load command in the File menu. The dialog box shown in Figure 4 makes it possible to select the file to be loaded by clicking the Browse button.  Once the file is selected, pressing the OK button loads the file into the flash memory of the IC.

At this point, the emulator probe (cable) can be removed.  Once the 73S1215F device is reset using the reset button on the evaluation board, the new code starts executing.

## Loading Code with the TSC Flash Programmer Model TFP2

Follow the instructions given in the TSC Flash Programmer Model TFP2 User's Manual .

Figure 3: Emulator Window Showing RESET and ERASE Buttons

<!-- image -->

Figure 4: Emulator Window Showing Erased Flash Memory and File Load Menu

<!-- image -->

## 3 Using the USB CCID Application

The USB CCID firmware is pre-installed on the 73S1215F Evaluation Board Lite.  To operate correctly it requires a PC with the appropriate driver installed to be connected through its USB port.  When poweredup, the board is able to run with the demonstration host application included on the CD.

The demonstration application is named CCID-USB.vshost.exe and is located in the 'C:\TSC\12xxF V y.yy \CCID USB Host App C#\App\Bin' directory (where y.yy is the latest version of the firmware release).  This is a host application that allows:

- Smart card activation and deactivation, in ISO or EMV mode.
- Smart card APDU commands to be exchanged with the smart card inserted in the board.
- Starting a test sequence in order to test and evaluate the board performance against an EMV test environment.

## 3.1 Driver and Software Installation

## 3.1.1 Installation on Windows XP

Two drivers are available for use with Windows XP:

- The standard Microsoft Windows XP driver and
- The Teridian provided driver that adds additional features beyond the capabilities of the Microsoft driver.  See the 73S1215F, 73S1217F CCID Application Note for further details on the differences between the two drivers.

When using the 73S1215F Evaluation Board Lite, the Microsoft provided driver should be used as the TSC drivers extended features are not available on the Evaluation Board-Lite.

<!-- image -->

The Microsoft CCID driver included on the CD is used by Teridian for testing.  Check with Microsoft for the latest driver upgrades.

Follow these steps to install the software on a PC running Windows XP:

- Extract '12xxF CCID+DFU V y.yy Release.zip' (where y.yy is the latest version of the firmware release).
- o Create an install directory. For example: 'C:\TSC\'.
- o Unzip '12xxF CCID+DFU V y.yy Release.zip' to the just created folder.  All applications and documentation needed to run the board with a Windows PC will be loaded to this folder. Plug the supplied power adaptor into the DC Jack and a wall outlet.  LED0 should now come on.
- Plug the supplied adapter into the 12V DC jack and a wall outlet.
- Connect the USB cable between the host system and the 73S1215F Evaluation Board Lite.
- The host system should recognize the board and start the Add New Hardware Installation wizard. When the wizard prompts, select the Microsoft provided standard Windows driver.
- o Select the usbccid.inf file located in the 'C:\TSC\12xxF CCID+DFU V y.yy Release\USB-CCID Firmware\CCID USB\CCID+DFU USB Drivers\MS Generic' subdirectory.  The uscccid.inf and usbccid.sys files must be in the same directory on the host.
- Follow the prompts until the process is completed.
- Run 'CCID-DFU\_USB\_v y.yy .exe' (located in the path - C:\TSC\12xxF CCID+DFU C:\TSC\12xxF CCID+DFU V2.00 Release\Host Applications\Windows App\Bin\Release Release\Host Applications\Windows App\Bin\Release) on the host system to execute the host demonstration application.

At this point the application window should appear.  For additional information regarding the use of the Teridian Host application, refer to the 73S12xxF USB-CCID Host GUI Users Guide (UG\_12xxF\_037).

<!-- image -->

## 3.1.2 Installation on a Linux System

Teridian has tested this board with Linux CCID driver v1.3.2 and PCSC-Lite v.1.4.4 (middleware) on two distributions of Linux: Slackware ® 6 with kernel 2.4.16, and Fedora ® 7 with kernel 2.6.23.  Refer to the 73S1215F, 73S1217F CCID USB Linux Driver Installation Guide (UG\_12xxF\_041) for details on installation and usage on Linux.

## 3.2 Frequently Asked Questions

## Windows

- Q:  The PC/SC application starts but it shows a 'No Reader Found' message.
- A:  Follow these steps to make sure:
1. The board has powered up properly (USB is securely connected and there is power applied to the board).
2. Control Panel - System - Hardware - Device Manager - Smart Card Readers shows: 'Teridian Semiconductors USB CCID Smart Card Reader...'  And there is no yellow '!' or red 'X'.
3. Smart Card Service has started by going to 'Control Panel - Administrative Tools - Services Smart Card'.  Look under the 'status' column and if it shows 'stopped', hit the restart or start button to start it.
4. If all of the above look ok, hit the refresh button on the CCIDUSB.exe application.
- Q:  There is a yellow '!' on the Teridian driver shown on the Device Manager menu.
- A:  This usually means the driver did not complete the driver enumeration process.  Push the reset button on the development board a few times.  If the board is connected to the host via a USB HUB, remove the HUB and try connecting the development board directly to the PC USB port to make sure the driver and the board can enumerate with the USB host.  If the problem persists, check the driver on the PC to make sure it is at least version 6.0.0.2.  Contact your Teridian Sales Rep for the latest version of the driver.  Sometimes, rebooting the PC Host to clear up any previous USB problem will help to resolve the problem.
- Q:  There is a red 'X' on the Teridian driver shown on the Device Manager menu.
- A:  This usually means the smart card driver has been disabled.  Highlight and right click on the driver to re-enable.

- Q:  The Teridian Smart Reader is nowhere to be found on the Device Manager menu and there is an 'unknown USB device' found where the Teridian Development Board should be.
- A:  This usually means the development board is properly powered up but there is no enumeration taking place.  If the development board is connected to a USB HUB, remove the HUB and connect the board directly to the PC USB port, or move it to a different USB port on the system.  If the problem persists and it is absolutely sure that the development board is properly powered up, it is possible that there is no firmware in the part.  Contact a Teridian sales representative for reprogramming of the Flash.
- Q:  The Teridian driver is loaded.  What to do to replace it with the Microsoft Generic USB CCID driver?
- A:  Right click on the Teridian driver in the Device Manager Menu, select 'Update Driver..'.  Select 'No, Not this time' on the next menu, 'Install from a list or specific location', 'Don't Search, I will choose the driver to install'.   If the next menu does not show the Microsoft Generic USB CCID driver, select 'Have Disk' and browse to where the driver file resides (usually in the 'CCID USB XPDriver' folder) and select the file.  Follow through with the installation wizard.

## Linux

- Q:  How can I see debug messages from PCSC-Lite when I run pcscd from the command line?
- A:  Before invoking pcscd, open the file /usr/local/pcsc/drivers/ifd-ccid.bundle/Contents/Info.plist in an editor, and set ifdLogLevel to 7.  Save the change.  Then run the command 'pcscd -f -d' in a console. Now pcscd runs in foreground and should display many messages in the console.  These messages show information about the smart card readers that have been detected, and whether or not a smart card is present in the reader.  Also shown in the messages are the data exchanges between the host (Linux) and the smart card reader.  The most important messages are the error messages that pcscd displays when a critical error has occurred.  If less messages are desired, set IfdLogLevel to 3 or 1.
- Q:  When I run the command 'pcscd -f -d', I get an error message that says 'file /var/run/pcscd.pub already exists.  Another pcscd seems to be running'.
- A:  Only one instance of pcscd (PCSC-Lite Daemon) should be running at any time.  If you receive this error message when invoking the pcscd program, pcscd  is probably currently running already.  If your intention is to restart pcscd, first terminate the pcscd that is currently running.  You can run the command 'ps aux | grep pcscd' to obtain the PID (Process ID) of the current pcscd.  For example, you may see output similar to the following:

[root@localhost ~]# ps aux | grep pcscd root  3380  0.1  0.0 74588   1752 pts/2 Sl+ 16:06 0:02 pcscd -f -d [root@localhost ~]#

The PID of pcscd in this case is 3380.  Next run the command 'kill 3380' to stop the currently running pcscd.  Then start pcscd again by entering the command 'pcscd -f -d'.

- Q:  When I start the program pcsc\_scan, I receive an error message saying 'PCSC Not Running'.
- A:  The pcsc\_scan program requires the services provided by pcscd.  Hence the PCSC-Lite daemon pcscd should be already running before pcsc\_scan can start.  Run pcscd first, and then invoke pcsc\_scan.

## 4 73S1215F Evaluation Board Lite Hardware Description

## 4.1 Jumpers, Switches and Test Points

Table 2 describes the 73S1215F Evaluation Board Lite jumpers, switches and test points.  The Item # in Table 2 references Figure 5.  The default setting refers to setup for running USB-CCID application.

Table 2: Evaluation Board Lite Jumper, Switch and Test Point Description

|   Item # | Schematic and Silkscreen Reference   | Default setting   | Name                          | Use                                                                                                                                                                                                |
|----------|--------------------------------------|-------------------|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        1 | S1                                   |                   | Reset button                  | Evaluation board main reset: asserts a hardware reset to the on-board 73S1215 IC.                                                                                                                  |
|        2 | TP8                                  |                   | 3.3V and VPC test point       | Test point for 3.3 V and VPC (5V) supplies.                                                                                                                                                        |
|        3 | TP2                                  |                   | Smart Card contacts           | Header for measurement of the card signals, close to the card connectors. Contains the card signals VCC1, RST1, CLK1, C81 and C41. Each contact has its own ground pin on the header.              |
|        4 | TP3                                  |                   | USR(8:0)                      | Standard 9-bit user I/O port of the 73S1215.                                                                                                                                                       |
|        5 | TP1                                  |                   | Power input test point        | Test point to monitor the input supply or alternate power supply input connection.                                                                                                                 |
|        6 | PJ1                                  | Connect           | DC jack                       | Plug to connect an external DC block. Power supply features are: Voltage: 7 V min; 12 V max Current: 400 mA                                                                                        |
|        7 | TP6                                  |                   | CPUCLK                        | This pin outputs the 73S1215F oscillator clock. It can be used as a clock source for any purpose.                                                                                                  |
|        8 | J2                                   | No Connect        | In-Circuit Emulator connector | This connector is used when connecting to an external In-Circuit Emulator (ADM51). Refer to the Electrical Schematic for pin assignments.                                                          |
|        9 | D5                                   |                   | Serial link RX activity LED   | This LED reflects the activity on the line RX signal (Data going TO the 73S1215F)                                                                                                                  |
|       10 | TP4                                  |                   | RX LED jumper                 | Jumper used to connect the RX led to the RX signal.                                                                                                                                                |
|       11 | D6                                   |                   | Serial link TX activity LED   | This LED reflects the activity on the line TX signal (Data going FROM the 73S1215F)                                                                                                                |
|       12 | TP5                                  | Connect           | TX LED jumper                 | Jumper is used to connect the TX led to the TX signal.                                                                                                                                             |
|       13 | P1                                   | No Connect        | DB9 RS232 female socket       | This socket allows connection of a RS232 cable to a computer. Use a crossed wired (RX/TX) cable. The evaluation board has an on-board level shifter (U3) to allow direct connection to a computer. |
|       14 | JP1                                  | Connect           | USB interrupt jumper          | Jumper allows the VBUS (after level conversion) to connect to USR7 (configured                                                                                                                     |

|   Item # | Schematic and Silkscreen Reference   | Default setting   | Name                              | Use                                                                                                                                                                       |
|----------|--------------------------------------|-------------------|-----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|          |                                      |                   |                                   | for interrupt). Remove this jumper if not needed and USR7 can be used for another purpose.                                                                                |
|       15 | -                                    |                   | Board reference and serial number | Should be mentioned in any communication with Teridian when requesting for support.                                                                                       |
|       16 | J3                                   | Connect           | USB connector                     | Standard USB socket. Requires a standard USB 1.1 or 2.0 device cable to connect to a computer.                                                                            |
|       17 | TP7                                  |                   | USB                               | TP7 has 2 pins, respectively connected to the USB D+ and D- wires.                                                                                                        |
|       18 | D1,D2, D3 D4                         |                   | 1215 LEDs                         | These LEDs are used for general purpose indicators without the need for current limiting resistors. D1 to D4 corresponds to the LED0 to LED3 output pins on the 73S1215F. |
|       19 | J1                                   |                   | Smart Card connector              | Allows the evaluation board to communicate with a smart card using the standard credit card size format. This slot is connected to the 73S1215F built-in card interface.  |

Figure 5: 73S1215F Evaluation Board Lite Jumper, Switch and Test Point Location

<!-- image -->

## 4.2 Schematic

Figure 6: 73S1215F Evaluation Board Lite Electrical Schematic

<!-- image -->

## 4.3 PCB Layouts

<!-- image -->

Figure 7: 73S1215F Evaluation Board Lite Top View (Silkscreen)

<!-- image -->

eJ

Sa

Figure 8: 73S1215F Evaluation Board Lite Bottom View (Silkscreen)

Figure 9: 73S1215F Evaluation Board Lite Top Signal Layer

<!-- image -->

Figure 10: 73S1215F Evaluation Board Lite Middle Layer 1 - Ground Plane

<!-- image -->

C

Figure 11: 73S1215F Evaluation Board Lite Middle Layer 2 - Supply Plane

<!-- image -->

Figure 12: 73S1215F Evaluation Board Lite Bottom Signal Layer

<!-- image -->

## 4.4 Bill of Materials

Table 3 provides the bill of materials for the 73S1215F Evaluation Board Lite schematic provided in Figure 6.

Table 3: 73S1215F Evaluation Board Lite Bill of Materials

|   Item |   Qty. | Reference                | Part                 | PCB Footprint   | Digi-key Part Number   | Part Number          | Manufacturer         |
|--------|--------|--------------------------|----------------------|-----------------|------------------------|----------------------|----------------------|
|      1 |      1 | C13                      | 10 µF                | 3528-21 (EIA)   | 478-1672-1-ND          | TAJB106K010R         | KEMET                |
|      2 |      2 | C1,C2                    | 10 µF                | 805             | PCC2225CT-ND           | ECJ-2FB0J106M        | Panasonic            |
|      3 |      1 | C4                       | 4.7 µF               | 1206            | PCC2177CT-ND           | ECJ-3YB1A475M        | Panasonic            |
|      4 |      1 | C3                       | 2.2 µF               | 805             | PCC1923CT-ND           | ECJ-2YB0J225K        | Panasonic            |
|      5 |      1 | C18                      | 1 µF                 | 603             | PCC2174CT-ND           | C1608X5R1A105K       | YAGEO                |
|      6 |     10 | C5,C6,C7,C9, C19-C23,C29 | 0.1 µF               | 603             | PCC1762CT-ND           | ECJ-1VB1C104K        | Panasonic            |
|      7 |      1 | C8                       | 0.01 µF              | 603             | 445-1311-1-ND          | C1608X7R1H103K       | YAGEO                |
|      8 |      4 | C12,C14,C15,C16          | 27 pF                | 603             | PCC270ACVCT-ND         | ECJ-1VC1H270J        | Panasonic            |
|      9 |      7 | C10,C11,C24-C28          | 22 pF                | 603             | PCC220ACVCT-ND         | ECJ-1VC1H220J        | Panasonic            |
|     10 |      1 | C17                      | 1000 pF              | 603             | PCC2151CT-ND           | ECJ-1VC1H102J        | Panasonic            |
|     11 |      6 | D1-D6                    | LED                  | 805             | 160-1414-1-ND          | LTST-C170FKT         | LITE-ON INC          |
|     12 |      2 | J9,J4                    | Smart Card Connector | ITT/CCM02-2504  | 401-1715-ND            | CCM02-2504LFT        | C&K                  |
|     13 |      1 | J6                       | USB_CONN_4           | USB_AU_Y1007    | ED90064-ND             | 897-43-004-90-000000 | Mill-Max             |
|     14 |      1 | J11                      | Emulator IF          | 10 X 2 pin      | A3210-ND               | 5-104068-1           | AMP/Tyco Electronics |
|     15 |      1 | PJ1                      | +12VDC               | RAPC722         | SC1153-ND              | RAPC722-X            | Switchcraft          |
|     16 |      1 | P1                       | DB9_RS232            | AMP_745781      | A2100-ND               | 5-745781-4           | AMP/Tyco Electronics |
|     17 |      5 | R1,R6,R8,R11,R12         | 0                    | 603             | P0.0GCT-ND             | ERJ-3GEY0R00V        | Panasonic            |
|     18 |      2 | R20,R21                  | 24 Ω                 | 603             | P24GCT-ND              | ERJ-3GEYJ240V        | Panasonic            |
|     19 |      2 | R3,R22                   | 100 kΩ               | 603             | P100KGCT-ND            | ERJ-3GEYJ104V        | Panasonic            |
|     20 |      1 | R23                      | 200 kΩ               | 603             | P200KGCT-ND            | ERJ-3GEYJ204V        | Panasonic            |
|     21 |      2 | R18,R19                  | 680 Ω                | 603             | P680GCT-ND             | ERJ-3GEYJ681V        | Panasonic            |
|     22 |      1 | R4                       | 10 Ω                 | 603             | P10GCT-ND              | ERJ-3GEYJ100V        | Panasonic            |

|   Item |   Qty. | Reference                | Part         | PCB Footprint   | Digi-key Part Number   | Part Number          | Manufacturer           |
|--------|--------|--------------------------|--------------|-----------------|------------------------|----------------------|------------------------|
|     23 |      1 | R5                       | 10 kΩ        | 603             | P10KGCT-ND             | ERJ-3GEYJ103V        | Panasonic              |
|     24 |      8 | R7,R9,R10,R13-R17        | 62 Ω         | 603             | P62GCT-ND              | ERJ-3GEYJ620V        | Panasonic              |
|     25 |      1 | R2                       | 1 MΩ         | 603             | P1.0MGCT-ND            | ERJ-3GEYJ106V        | Panasonic              |
|     26 |      1 | S1                       | SW           | Panasonic EVQ   | P8051SCT               | EVQ-PJX05M           | Panasonic              |
|     27 |      1 | TP6                      | TP           | 1 Pin           | S1011E-36-ND           | PBC36SAAN            | Sullins Electronics    |
|     28 |      6 | TP1,JP1,TP4,TP5, TP7,TP8 | TP2          | 1 x 2 pin       | S1011E-36-ND           | PBC36SAAN            | Sullins Electronics    |
|     29 |      1 | TP2                      | HEADER 2 x 6 | 6 x 2 pin       | S2011E-36-ND           | PBC36DAAN            | Sullins Electronics    |
|     30 |      1 | TP3                      | HEADER 9     | 1 x 9 pin       | S1011E-36-ND           | PBC36SAAN            | Sullins Electronics    |
|     31 |      1 | U1                       | LM1117DT-5.0 | TO-252-3        | LM1117DT-5.0-ND        | LM1117DT-5.0         | National Semiconductor |
|     32 |      1 | U2                       | LP2985       |                 | LP2985IM5-3.3CT-ND     | LP2985IM5-3.3        | National Semiconductor |
|     33 |      1 | U3                       | MAX3237CAI   |                 | MAX3237CAI+-ND         | MAX3237CAI+          | Maxim                  |
|     34 |      1 | U4                       | 1215         | 68 QFN          |                        | 73S1215F             | Teridian Semiconductor |
|     35 |      1 | Y1                       | 32.768 kHz   |                 | XC1195CT-ND            | ECS-.327-12.5-17X-TR | ECS                    |
|     36 |      1 | Y2                       | 12.000 MHz   |                 | X1116-ND               | ECS-120-20-4XDN      | ECS                    |

## 4.5 Schematic Information

This section provides recommendations on proper schematic design that will help in designing circuits that are functional and compatible with the software library APIs provided by Teridian.

## 4.5.1 Reset Circuit

The 73S1215F Evaluation Board Lite provides a reset pushbutton that can be used when prototyping and debugging software.  The RESET pin should be supported by the external components shown in Figure 13. R8 should be around 10 Ω.  The capacitor C27 should be 10 µF.  R8 and C27 should be mounted as close as possible to the IC.

<!-- image -->

## 4.5.2 Oscillators

The 73S1215F has two oscillators (see Figure 14); one for the primary system clock and the other for an RTC (32 KHz).  The system clock should use a 12 MHz crystal to provide the proper system clock rates for the USB, serial and smart card interfaces.  The system oscillator requires a 1 MΩ parallel resistor to insure proper oscillator startup.

The RTC oscillator drives a standard 32.768 kHz watch crystal.  Crystals of this type are accurate and do not require a high current oscillator circuit.  The oscillator in the 73S1215F has been designed specifically to handle watch crystals and is compatible with their high impedance and limited power handling capability.

<!-- image -->

The 32 KHz oscillator does not require a parallel startup resistor.

Figure 14: Oscillator Circuit

<!-- image -->

C43 (1000 pF) is shown for EFT protection and is optional.

Figure 13: External Components for RESET

<!-- image -->

## 4.5.3 USB Interface

The USB interface on the 73S1215F requires few external components for proper operation.  Two serial resistors of 24 Ω ± 1% are needed to provide proper impedance matching for the USB data signals D+ and D-.

For self-powered USB applications, a connection must be made between the VBUS power input and USR7 for proper operation with the provided API libraries.  A direct connection can not be made as the VBUS voltage exceeds the digital power supply running at 3.3 V.  As a result, a resistor divider is required to scale the VBUS voltage down to 3.3 V.  Figure 15 shows the basic USB connections.

Figure 15: USB Connections

<!-- image -->

## 4.5.4 Smart Card Interface

The smart card interface on the 73S1215F requires few external components for proper operation. Figure 16 shows the recommended smart card interface connections:

- The RST and CLK signals should have 27pF capacitors at the smart card connector.
- It is recommended that a 0 Ω resistor be added in series with the CLK signal.  If necessary, in noisy environments, this resistor can be replaced with a small resistor to create a RC filter on the CLK signal to reduce CLK noise.  This filter is used to soften the clock edges and provide a cleaner clock for those environments where this could be problematic.
- The VCC output must have a 1.0 µ F capacitor at the smart card connector for proper operation.
- The VPC input is the power supply input for the smart card power.  It is recommended that both a 10 µ F and a 0.1 µ F capacitor are connected to provide proper decoupling for this input.
- The PRES input on the 1215 contains a very weak pull down resistor. As a result, an additional external pull down resistor is recommended to prevent any system noise from triggering a false card event.  The same holds true for the PRES input, except a pull up resistor is utilized as the logic is inverted from the PRES input.

The smart card interface layout is important.  The following guidelines should be followed to provide the optimum smart card interface operation:

- Route auxiliary signals away from card interface signals
- Keep CLK signal as short as possible and with few bends in the trace.  Keep route of the CLK trace to one layer (avoid vias to other plane).  Keep CLK trace away from other traces especially RST and VCC.  Filtering of the CLK trace is allowed for noise purpose.  Up to 30pF to ground is allowed at the CLK pin of the smart card connector.  Also, the zero ohm series resistor, R7, can be replaced for additional filtering (no more than 100Ω).
- Keep VCC trace as short as possible.  Make trace a minimum of 0.5mm thick.  Also, keep VCC away from other traces especially RST and CLK.

- Keep CLK trace away from VCC and RST traces.  Up to 30pF to ground is allowed for filtering
- Keep 0.1 µ F close to VDD pin of the device and directly take other end to ground
- Keep 10 µ F and 0.1 µ F capacitors close to VPC pin of the device and directly take other end to ground
- Keep 1.0 µ F close to VCC pin of the smart card connector and directly take other end to ground

Figure 16: Smart Card Connections

<!-- image -->

## 5 Ordering Information

| Part Description                          | Order Number     |
|-------------------------------------------|------------------|
| 73S1215F 68-Pin QFN Evaluation Board Lite | 73S1215F-EB-Lite |

## 6 Related Documentation

The following 73S1215F documents are available from Teridian Semiconductor Corporation:

73S1215F Data Sheet

73S1215F Evaluation Board Lite Quick Start Guide

TSC Flash Programmer Model TFP2 User's Manual

## 7 Contact Information

For more information about Teridian Semiconductor products or to check the availability of the 73S1215F contact us at:

6440 Oak Canyon Road Suite 100 Irvine, CA 92618-5201

Telephone: (714) 508-8800

FAX: (714) 508-8878

Email: scr.support@teridian.com

For a complete list of worldwide sales offices, go to http://www.teridian.com.

## Revision History

|   Revision | Date            | Description                                                                          |
|------------|-----------------|--------------------------------------------------------------------------------------|
|        1.0 | April 6, 2009   | First Publication.                                                                   |
|        1.1 | August 17, 2009 | Added information from the Quick Start Guide. Miscellaneous editorial modifications. |