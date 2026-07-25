<!-- lastmod 2022-08-02 -->
<!-- image -->

Simplifying System Integration TM

## 73S1210F Multi-SAM Evaluation Board Lite User Guide

## August 20, 2009 Rev. 1.0

© 2009 Teridian Semiconductor Corporation.  All rights reserved.

Teridian Semiconductor Corporation is a registered trademark of Teridian Semiconductor Corporation.

Simplifying System Integration is a trademark of Teridian Semiconductor Corporation.

Microsoft, Windows and Vista are registered trademarks of Microsoft Corporation.

Signum is a trademark of Signum Systems Corporation.

Keil is a trademark of ARM ® Ltd.

Linux is a registered trademark of Linus Torvalds.

Slackware is a registered trademark of Patrick Volkerding and Slackware Linux, Inc.

Fedora is a registered trademark of RedHat, Inc.

All other trademarks are the property of their respective owners.

Teridian Semiconductor Corporation makes no warranty for the use of its products, other than expressly contained in the Company's warranty detailed in the Teridian Semiconductor Corporation standard Terms and Conditions.  The company assumes no responsibility for any errors which may appear in this document, reserves the right to change devices or specifications detailed herein at any time without notice and does not make any commitment to update the information contained herein.  Accordingly, the reader is cautioned to verify that this document is current by comparing it to the latest version on http://www.teridian.com or by checking with your sales representative.

Teridian Semiconductor Corp., 6440 Oak Canyon, Suite 100, Irvine, CA 92618 TEL (714) 508-8800, FAX (714) 508-8877, http://www.teridian.com

## Table of Contents

| 1 Introduction ...................................................................................................................................4                                                                                   | 1 Introduction ...................................................................................................................................4                                                                                   | 1 Introduction ...................................................................................................................................4   |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
|                                                                                                                                                                                                                                       | 1.1 Evaluation Kit Contents.........................................................................................................5                                                                                                 |                                                                                                                                                       |
|                                                                                                                                                                                                                                       | 1.2 Evaluation Board Features....................................................................................................5                                                                                                    |                                                                                                                                                       |
|                                                                                                                                                                                                                                       | 1.3 Recommended Equipment and Test Tools............................................................................5                                                                                                                 |                                                                                                                                                       |
| 2 Evaluation Board Basic Setup......................................................................................................6                                                                                                 | 2 Evaluation Board Basic Setup......................................................................................................6                                                                                                 |                                                                                                                                                       |
|                                                                                                                                                                                                                                       | 2.1 Connecting the Evaluation Board with an Emulation Tool......................................................7                                                                                                                     |                                                                                                                                                       |
|                                                                                                                                                                                                                                       | 2.2 Loading User Code into the Evaluation Board                                                                                                                                                                                       | .......................................................................7                                                                              |
| Using the PCCID Application........................................................................................................9                                                                                                  | Using the PCCID Application........................................................................................................9                                                                                                  |                                                                                                                                                       |
|                                                                                                                                                                                                                                       | 3.1 Host Demonstration Software Installation..............................................................................9                                                                                                           |                                                                                                                                                       |
| 4 Evaluation Board Hardware Description ....................................................................................11                                                                                                        | 4 Evaluation Board Hardware Description ....................................................................................11                                                                                                        |                                                                                                                                                       |
|                                                                                                                                                                                                                                       | 4.1 Jumpers, Switches and Modules.........................................................................................11                                                                                                          |                                                                                                                                                       |
|                                                                                                                                                                                                                                       | 4.2 Schematic...........................................................................................................................15                                                                                            |                                                                                                                                                       |
|                                                                                                                                                                                                                                       | 4.3 PCB Layouts.......................................................................................................................16                                                                                              |                                                                                                                                                       |
|                                                                                                                                                                                                                                       | 4.4 Bill of Materials                                                                                                                                                                                                                 | ...................................................................................................................22                                 |
|                                                                                                                                                                                                                                       | 4.5 Schematic Information                                                                                                                                                                                                             | ........................................................................................................24                                            |
|                                                                                                                                                                                                                                       | 4.5.1 Reset Circuit..............................................................................................................24                                                                                                   |                                                                                                                                                       |
|                                                                                                                                                                                                                                       | 4.5.2 Oscillator...................................................................................................................24                                                                                                 |                                                                                                                                                       |
|                                                                                                                                                                                                                                       | 4.5.3 Smart Card Interface .................................................................................................24                                                                                                        |                                                                                                                                                       |
|                                                                                                                                                                                                                                       | 4.5.4 Multiplexer Configuration ...........................................................................................25                                                                                                         |                                                                                                                                                       |
|                                                                                                                                                                                                                                       | 4.6 Multi-SAM Limitations                                                                                                                                                                                                             | .........................................................................................................27                                           |
| 5                                                                                                                                                                                                                                     | Ordering Information...................................................................................................................27                                                                                             |                                                                                                                                                       |
| 6                                                                                                                                                                                                                                     | Related Documentation...............................................................................................................27                                                                                                |                                                                                                                                                       |
| 7                                                                                                                                                                                                                                     | Contact Information.....................................................................................................................27                                                                                            |                                                                                                                                                       |
| Revision History..................................................................................................................................28                                                                                  | Revision History..................................................................................................................................28                                                                                  |                                                                                                                                                       |
| Figures                                                                                                                                                                                                                               | Figures                                                                                                                                                                                                                               | Figures                                                                                                                                               |
| Figure 1: 73S1210F Multi-SAM Evaluation Board Lite..............................................................................4                                                                                                     | Figure 1: 73S1210F Multi-SAM Evaluation Board Lite..............................................................................4                                                                                                     |                                                                                                                                                       |
| Figure 2: 73S1210F Multi-SAM Evaluation Board Lite Basic Connections................................................6                                                                                                                 | Figure 2: 73S1210F Multi-SAM Evaluation Board Lite Basic Connections................................................6                                                                                                                 |                                                                                                                                                       |
| Figure 3: Emulator Window Showing RESET and ERASE Buttons...........................................................8                                                                                                                 | Figure 3: Emulator Window Showing RESET and ERASE Buttons...........................................................8                                                                                                                 |                                                                                                                                                       |
| Figure 4: Emulator Window Showing Erased Flash Memory and File Load Menu.....................................8 Figure 5: 73S1210F Multi-SAM Evaluation Board Lite Jumper, Switch and Test Point Locations............14               | Figure 4: Emulator Window Showing Erased Flash Memory and File Load Menu.....................................8 Figure 5: 73S1210F Multi-SAM Evaluation Board Lite Jumper, Switch and Test Point Locations............14               |                                                                                                                                                       |
| Figure 6: 73S1210F Multi-SAM Evaluation Board Lite Electrical Schematic............................................15                                                                                                                 | Figure 6: 73S1210F Multi-SAM Evaluation Board Lite Electrical Schematic............................................15                                                                                                                 |                                                                                                                                                       |
| Figure 7: 73S1210F Multi-SAM Evaluation Board Lite Top View (Silkscreen) .........................................16                                                                                                                  | Figure 7: 73S1210F Multi-SAM Evaluation Board Lite Top View (Silkscreen) .........................................16                                                                                                                  |                                                                                                                                                       |
| Figure 8: 73S1210F Multi-SAM Evaluation Board Lite Bottom View (Silkscreen) ....................................17                                                                                                                    | Figure 8: 73S1210F Multi-SAM Evaluation Board Lite Bottom View (Silkscreen) ....................................17                                                                                                                    |                                                                                                                                                       |
| Figure 9: 73S1210F Multi-SAM Evaluation Board Lite Top Signal Layer.................................................18                                                                                                                | Figure 9: 73S1210F Multi-SAM Evaluation Board Lite Top Signal Layer.................................................18                                                                                                                |                                                                                                                                                       |
| Figure 10: 73S1210F Multi-SAM Evaluation Board Lite Middle Layer 1 - Ground Plane.........................19                                                                                                                          | Figure 10: 73S1210F Multi-SAM Evaluation Board Lite Middle Layer 1 - Ground Plane.........................19                                                                                                                          |                                                                                                                                                       |
| Figure 11: 73S1210F Multi-SAM Evaluation Board Lite Middle Layer 2 - Supply Plane..........................20                                                                                                                         | Figure 11: 73S1210F Multi-SAM Evaluation Board Lite Middle Layer 2 - Supply Plane..........................20                                                                                                                         |                                                                                                                                                       |
| Figure 12: 73S1210F Multi-SAM Evaluation Board Lite Bottom Signal Layer..........................................21                                                                                                                   | Figure 12: 73S1210F Multi-SAM Evaluation Board Lite Bottom Signal Layer..........................................21                                                                                                                   |                                                                                                                                                       |
| Figure                                                                                                                                                                                                                                | 13: External Components for                                                                                                                                                                                                           | RESET..........................................................................................24                                                     |
| Figure 14: Oscillator Circuit....................................................................................................................24                                                                                   | Figure 14: Oscillator Circuit....................................................................................................................24                                                                                   |                                                                                                                                                       |
| Figure                                                                                                                                                                                                                                | 15: Smart Card                                                                                                                                                                                                                        | Connections.......................................................................................................25                                  |
| Figure 16: Multiplexer Circuit .................................................................................................................26                                                                                    | Figure 16: Multiplexer Circuit .................................................................................................................26                                                                                    |                                                                                                                                                       |
| Tables                                                                                                                                                                                                                                | Tables                                                                                                                                                                                                                                | Tables                                                                                                                                                |
| Table 1: Flash Programming Interface Signals.........................................................................................7                                                                                                | Table 1: Flash Programming Interface Signals.........................................................................................7                                                                                                |                                                                                                                                                       |
| Table 2: 73S1210F Multi-SAM Evaluation Board Lite Jumper, Switch and Module Description ...............11 Table 3: 73S1210F Multi-SAM Evaluation Board Lite Bill of Materials .....................................................22 | Table 2: 73S1210F Multi-SAM Evaluation Board Lite Jumper, Switch and Module Description ...............11 Table 3: 73S1210F Multi-SAM Evaluation Board Lite Bill of Materials .....................................................22 |                                                                                                                                                       |

## 1 Introduction

The Teridian Semiconductor Corporation (TSC) 73S1210F Multi-SAM Evaluation Board Lite is a platform that demonstrates the capabilities of the 73S1210F Smart Card Controller device.  It has been designed to operate either as a standalone or as a development platform.

The Multi-SAM (MS) board is a special configuration that uses a single 8010C interface device to  support up to five smart cards; one full size (credit card) and up to four SIM/SAM cards  This multi-SIM/SAM configuration imposes usage limitations which are described in Section 4.6.

The 73S1210F Multi-SAM Evaluation Board Lite can be programmed to run any of the Teridian turnkey applications or a user-developed custom application.  Teridian provides its Pseudo-CCID application preloaded on the board and an EVM testing application on the CD.

Applications can be downloaded through the In-Circuit Emulator (ICE) or through the TSC Flash Programmer Model TFP2.  As a development tool, the evaluation board has been designed to operate in conjunction with an ICE to develop and debug 73S1210F based embedded applications.

Figure 1: 73S1210F Multi-SAM Evaluation Board Lite

<!-- image -->

## 1.1 Evaluation Kit Contents

The 73S1210F Multi-SAM Evaluation Board Lite Kit contains the following:

- 73S1210F ELMS board containing the 73S1210F with preloaded turnkey program PCCID (4-layer, rectangular PWB).
- 5 VDC/1,000 mA universal wall transformer with 2.5 mm plug ID (CUI Inc. - EPS050100-P6P).
- Serial cable: DB9, male/female, 2 meter length (Digi-Key AE1379-ND).
- CD containing documentation (data sheet, and user guides), software API libraries, evaluation code, and utilities.
- The 73S1210F Multi-SAM Evaluation Board Lite Quick Start Guide .

## 1.2 Evaluation Board Features

The 73S1210F Multi-SAM Evaluation Board Lite (see Figure 1) includes the following:

- RS-232 interface
- Single full size and four SIM/SAM smart card interfaces
- ICE/Programmer interface
- Power interface
- ON/OFF switch
- 1 LED

## 1.3 Recommended Equipment and Test Tools

The following equipment and tools (not provided) are recommended for use with the 73S1210F Multi-SAM Evaluation Board Lite:

- For functional evaluation: PC with Microsoft ® Windows ® XP or Vista ® , or a workstation running Linux ® equipped with a serial RS-232 (COM) port via DB9 connector.
- For software development (MPU code)
-  Signum™ ICE (In Circuit Emulator): ADM-51.  Refer to http://signum.temp.veriohosting.com/Signum.htm.
-  Keil™ 8051 C Compiler Kit: CA51.  Refer to http://www.keil.com/c51/ca51kit.htm and http://www.keil.com/product/sales.htm.

## 2 Evaluation Board Basic Setup

Figure 2 shows the basic connections of the evaluation board with the external equipment.

The power supply input (VBAT) provides back-up power for those applications capable of using it.  When a power supply is connected to VBAT, the ON/OFF switch, S2, turns the power supply to the 73S1210F on or off.

- Connect  PJ1 on the board to any AC-DC converter block able to generate a DC power supply of 2.7 V to 6.5 V and 400 mA.

The communication to an external host is accommodated via a standard RS-232 serial interface (TX/RX only)

G

Figure 2: 73S1210F Multi-SAM Evaluation Board Lite Basic Connections

<!-- image -->

## 2.1 Connecting the Evaluation Board with an Emulation Tool

The 73S1210F Multi-SAM Evaluation Board Lite has been designed to operate with an In-Circuit Emulator (ICE) from Signum Systems (model ADM-51).  The Signum System POD has a ribbon cable that must be directly attached to connector J2.

Signum Systems offers different POD options depending on user needs.  The standard pod allows users to perform typical emulator functions such as symbolic debugging, in-line breakpoints, memory examination and/or modification, etc.  Other pod options enable code trace capability and/or complex breakpoints at an additional cost.

<!-- image -->

When using an ICE, the board must be externally powered (and turned on via the ON/OFF switch.  The power LED D4 will indicate the power status.

## 2.2 Loading User Code into the Evaluation Board

## Hardware Interface for Programming

The signals listed in Table 1 are necessary for communication between the TFP2 or ICE and the 73S1210F.

Table 1: Flash Programming Interface Signals

| Signal                                                                                                                                    | Direction                                                                                                                                 | Function                                                                                                                                  |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| E_TCLK                                                                                                                                    | Output from 73S1210F                                                                                                                      | Data clock                                                                                                                                |
| E_RXTX                                                                                                                                    | Bi-directional                                                                                                                            | Data input/output                                                                                                                         |
| E_RST 1                                                                                                                                   | Bi-directional                                                                                                                            | Flash Downloader Reset (active low)                                                                                                       |
| The E_RST signal should only be driven by the TFP2 when enabling these interface signals. The TFP2 must release E_RST at all other times. | The E_RST signal should only be driven by the TFP2 when enabling these interface signals. The TFP2 must release E_RST at all other times. | The E_RST signal should only be driven by the TFP2 when enabling these interface signals. The TFP2 must release E_RST at all other times. |

These signals, along with 3.3 V and GND are available on the emulator header J2.  Production modules may be equipped with much simpler programming connectors, e.g. a 5x1 header.

Programming of the flash memory requires either the Signum Systems ADM51 in-circuit emulator or the TSC Flash Programmer Model TFP2 provided by Teridian.

## Loading Code with the In-Circuit Emulator

If firmware exists in the 73S1210F flash memory, the memory must be erased before loading a new file into memory.  In order to erase the flash memory, the RESET button in the emulator software must be clicked followed by the ERASE button (see Figure 3).

Once the flash memory is erased, the new file can be loaded using the Load command in the File menu. The dialog box shown in Figure 4 makes it possible to select the file to be loaded by clicking the Browse button.  Once the file is selected, pressing the OK button loads the file into the flash memory of the IC.

At this point, the emulator probe (cable) can be removed.  Once the 73S1210F device is reset using the reset button on the evaluation board, the new code starts executing.

## Loading Code with the TSC Flash Programmer Model TFP2

Follow the instructions given in the TSC Flash Programmer Model TFP2 User's Manual .

Figure 3: Emulator Window Showing RESET and ERASE Buttons

<!-- image -->

Figure 4: Emulator Window Showing Erased Flash Memory and File Load Menu

<!-- image -->

## 3 Using the PCCID Application

The PCCID firmware is pre-installed on the 73S1210F Multi-SAM Evaluation Board Lite.  It requires a PC with the serial RS-232 port.  When powered-up, the board is able to run the PCCID demonstration host application which allows:

- Smart card activation and deactivation, in ISO or EMV mode.
- Smart card APDU commands to be exchanged with the smart card inserted in the board.
- Starting a test sequence in order to test and evaluate the board performance against an EMV test environment.

The Multi-SAM configuration requires special firmware to control the selection of the SAM slots.  This firmware controls 73S1210F pins USR4 and USR5 to select the proper input on the 4:1 analog multiplexer.  These builds are described in the firmware documentation as 'Single 8010' since a single 8010 controls the four SAM interfaces

## 3.1 Host Demonstration Software Installation

## Installation on Windows XP

Follow these steps to install the software on a PC running Windows XP:

- Extract 'PCCID V z.zz Release.zip' (where z.zz is the latest version of the firmware release).
- o Create an install directory. For example: 'C:\TSC\'.
- o Unzip 'PCCID V z.zz Release.zip' to the just created folder.  All applications and documentation needed to run the board with a Windows PC will be loaded to this folder.
- Plug the supplied adapter into the 5V DC jack and a wall outlet.
- Connect the serial cable between the host system and the 73S1210F Multi-SAM Evaluation Board Lite.
- Press the ON/OFF switch to turn the board on.
- Run 'TSCP-CCID.exe' (located in the path x :\ yyy \ PCCID V z.zz Release\Host Applications\Windows App\App\Bin\Release) on the host system to execute the host demonstration application (where x refers to the drive, yyy refers to the directory the installation .zip file was expanded to and z.zz is the latest version of the firmware release).

At this point the application window should appear.  For additional information regarding the use of the Teridian Host application, refer to the Pseudo-CCID Host GUI Users Guide (UG\_12xxF\_052).

<!-- image -->

## 4 Evaluation Board Hardware Description

## 4.1 Jumpers, Switches and Modules

Table 2 describes the 73S1210F Multi-SAM Evaluation Board Lite jumpers, switches and test points.  The Item # in Table 2 references Figure 5.  The default setting column refers to setup for running PCCID application.

Table 2: 73S1210F Multi-SAM Evaluation Board Lite Jumper, Switch and Module Description

|   Item # | Schematic and Silkscreen Reference   | Default setting   | Name                             | Use                                                                                                                                                                                                                                                                                    |
|----------|--------------------------------------|-------------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        1 | PJ1                                  | Connect           | DC Jack                          | Input power jack. Should be configured for VPC. Power input must be between 2.7V and 6.5V and capable of providing 400 mA.. Requires the use of the On/Off switch to turn on the 72S1210F.                                                                                             |
|        2 | J2                                   | No Connect        | In-Circuit Emulator connector    | This connector must be used when using an external In-Circuit Emulator (SIGNUM 8052 ADM51 ICE). Refer to the Electrical Schematic for pin assignment.                                                                                                                                  |
|        3 | JP7                                  | VDD               | Serial transceiver enable jumper | Jumper controls RS-232 transceiver shutdown function. There are three possible configurations: Removed; places RS-232 transceiver chip in shutdown. Inserted VDD (pin 2-3); enables RS-232 transceiver Inserted USR6 (pin 1-2); allows USR6 pin to control RS-232 transceiver shutdown |
|        4 | D5                                   |                   | RXD LED                          | Reflects the activity on the serial RX: Data going TO the 73S1210F.                                                                                                                                                                                                                    |
|        5 | D6                                   |                   | TXD LED                          | Reflects the activity on the serial TX: Data going FROM the 73S1210F.                                                                                                                                                                                                                  |
|        6 | P1                                   | Connect           | DB9 RS232 female socket          | This socket allows connection of an RS232 cable to a computer. Use a crossed wires (RX/TX) cable. The evaluation board has an on-board level shifter (U7) to allow direct connection to a computer. Connection of a RS232 link is required when using the pre-downloaded application.  |
|        7 | JP2                                  | Insert            | RXD LED jumper                   | Jumper inserted enables RX LED. Jumper removed disables RX LED.                                                                                                                                                                                                                        |
|        8 | JP3                                  | Insert            | TXD LED jumper                   | Jumper inserted enables TX LED. Jumper removed disables TX LED.                                                                                                                                                                                                                        |
|        9 | J7                                   |                   | SIM/SAM Card connector #4        | Allows the Multi-SAM Evaluation Board Lite to communicate with a smart card using a SIM/SAM format: This slot is designated as #4 of the external 8010C multiplexed slots connected via the 73S1210F external card interface                                                           |
|       10 | TP9                                  |                   | VDDFLT test point                | Test point used for monitoring VDDFLT voltage.                                                                                                                                                                                                                                         |

|   Item # | Schematic and Silkscreen Reference   | Default setting   | Name                              | Use                                                                                                                                                                                                                           |
|----------|--------------------------------------|-------------------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|       11 | J6                                   |                   | SIM/SAM Card connector #3         | Allows the Multi-SAM Evaluation Board Lite to communicate with a smart card using a SIM/SAM format: This slot is designated as #3 of the external 8010C multiplexed slots connected via the 73S1210F external card interface. |
|       12 | J5                                   |                   | SIM/SAM Card connector #2         | Allows the Multi-SAM Evaluation Board Lite to communicate with a smart card using a SIM/SAM format: This slot is designated as #2 of the external 8010C multiplexed slots connected via the 73S1210F external card interface. |
|       13 | -                                    |                   | Board Reference and serial number | Should be mentioned in any communication with TSC Application Engineers when request for support.                                                                                                                             |
|       14 | J4                                   |                   | SIM/SAM Card connector #1         | Allows the Multi-SAM Evaluation Board Lite to communicate with a smart card using a SIM/SAM format: This slot is designated as #1 of the external 8010C multiplexed slots connected via the 73S1210F external card interface. |
|       15 | TP13                                 |                   | CLK test point                    | 8010C CLK output test point.                                                                                                                                                                                                  |
|       16 | TP11                                 |                   | I/O test point                    | 8010C I/O output test point.                                                                                                                                                                                                  |
|       17 | TP12                                 |                   | RST test point                    | 8010C RST output test point.                                                                                                                                                                                                  |
|       18 | TP10                                 |                   | VCC test point                    | 8010C VCC output test point.                                                                                                                                                                                                  |
|       19 | TP3                                  |                   | USR test points                   | USR pin test points.                                                                                                                                                                                                          |
|       20 | D4                                   |                   | Power LED                         | Power LED comes on with VDD. Disabled by removing JP4.                                                                                                                                                                        |
|       21 | JP4                                  | Insert            | Power LED disable                 | Inserting jumper enables power LED with VDD. Removing jumper disabled power LED.                                                                                                                                              |
|       22 | TP6                                  |                   | VDD test point                    | VDD test point with ground.                                                                                                                                                                                                   |
|       23 | D1                                   |                   | LED0                              | 73S1210F LED0 output LED.                                                                                                                                                                                                     |
|       24 | J1                                   |                   | Smart Card connector              | Allows the Multi-SAM Evaluation Board Lite to communicate with a smart card using a standard (credit card size) format: This slot is connected to the 73S1210F internal card interface.                                       |
|       25 | S1                                   |                   | Reset button                      | Multi-SAM Evaluation Board Lite main reset: Asserts a hardware reset to the on-board 73S1210 IC.                                                                                                                              |
|       26 | S2                                   |                   | On / Off button                   | When using battery power (on PJ1), turns on or off (toggles) power to the 73S1210F device.                                                                                                                                    |
|       27 | TP8                                  |                   | VP test point                     | Test point used for monitoring VP voltage. VP is 5.5V when the 72S1210F is on.                                                                                                                                                |
|       28 | TP2                                  |                   | 1210 smart card test points       | Test points to monitor 73S1210F smart card signals.                                                                                                                                                                           |

|   Item # | Schematic and Silkscreen Reference   | Default setting   | Name             | Use                                                                                                                                              |
|----------|--------------------------------------|-------------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
|       29 | TP7                                  |                   | VPC test point   | Test point to monitor VPC. VPC is the input power source to the internal voltage converter. See the 73S1210F Data Sheet for further information. |
|       30 | JP5                                  | VPC               | VPC2 Select      | Jumper for 8010C input power select.                                                                                                             |
|       31 | JP6                                  | VPC               | VPC/VBAT Select  | Jumper to select input power to 1210 between VPC and VBAT.                                                                                       |
|       32 | TP1                                  |                   | Power test point | Input power (PJ1) test point.                                                                                                                    |

Figure 5: 73S1210F Multi-SAM Evaluation Board Lite Jumper, Switch and Test Point Locations

<!-- image -->

## 4.2 Schematic

Figure 6: 73S1210F Multi-SAM Evaluation Board Lite Electrical Schematic

<!-- image -->

## 4.3 PCB Layouts

Figure 7: 73S1210F Multi-SAM Evaluation Board Lite Top View (Silkscreen)

<!-- image -->

Figure 8: 73S1210F Multi-SAM Evaluation Board Lite Bottom View (Silkscreen)

<!-- image -->

Figure 9: 73S1210F Multi-SAM Evaluation Board Lite Top Signal Layer

<!-- image -->

Figure 10: 73S1210F Multi-SAM Evaluation Board Lite Middle Layer 1 - Ground Plane

<!-- image -->

Figure 11: 73S1210F Multi-SAM Evaluation Board Lite Middle Layer 2 - Supply Plane

<!-- image -->

Figure 12: 73S1210F Multi-SAM Evaluation Board Lite Bottom Signal Layer

<!-- image -->

## 4.4 Bill of Materials

Table 3 provides the bill of materials for the 73S1210F Multi-SAM Evaluation Board Lite schematic provided in Figure 6.

Table 3: 73S1210F Multi-SAM Evaluation Board Lite Bill of Materials

|   Item |   Qty | Reference                    | Part                 | PCB Footprint   | Digikey Part Number   | Part Number    | Manufacturer         |
|--------|-------|------------------------------|----------------------|-----------------|-----------------------|----------------|----------------------|
|      1 |     9 | C5,C6,C12,C16,C45,C46,C48-50 | 27p                  | 603             | PCC270ACVCT-ND        | ECJ-1VC1H270J  | Panasonic            |
|      2 |     1 | C7                           | 0.47uF               | 603             | PCC2275CT-ND          | ECJ-1VB1A474K  | Panasonic            |
|      3 |     1 | C9                           | 4.7uF                | 603             | PCC2396CT-ND          | ECJ-1VB0J475K  | Panasonic            |
|      4 |     7 | C10,C11,C24-28               | 22pF                 | 603             | PCC220ACVCT-ND        | ECJ-1VC1H220J  | Panasonic            |
|      5 |     1 | C13                          | 10uF                 | 3528-21 (EIA)   | 478-1672-1-ND         | TAJB106K010R   | AVX Corporation      |
|      6 |     2 | C33,C38                      | 10uF                 | 805             | PCC2225CT-ND          | ECJ-2FB0J106M  | Panasonic            |
|      7 |    12 | C14,C19-23,C29-32,C37,C39    | 0.1uF                | 603             | PCC1762CT-ND          | ECJ-1VB1C104K  | Panasonic            |
|      8 |     1 | C34                          | 2.2uF                | 805             | PCC1923CT-ND          | ECJ-2YB0J225K  | Panasonic            |
|      9 |     5 | C35,C41-44                   | 1uF                  | 603             | PCC2174CT-ND          | C1608X5R1A105K | TDK Corporation      |
|     10 |     1 | C36                          | 0.033uF              | 603             | PCC1756CT-ND          | ECJ-1VB1C333K  | Panasonic            |
|     11 |     1 | C17                          | 1000pF               | 603             | PCC2151CT-ND          | ECJ-1VC1H102J  | Panasonic            |
|     12 |     4 | D1,D4,D5,D6                  | LED                  | 0805_DIODE      | 160-1414-1-ND         | LTST-C170FKT   | LITE-ON INC          |
|     13 |     3 | JP2-4                        | HEADER               | 2 X 1 PIN       | S1011E-36-ND          | PBC36SAAN      | Sullins              |
|     14 |     3 | JP5-7                        | HEADER               | 3 X 1 PIN       | S1011E-36-ND          | PBC36SAAN      | Sullins              |
|     15 |     1 | J1                           | Smart Card Connector | ITT/CCM02-2504  | 401-1715-ND           | CCM02-2504LFT  | ITT Industries       |
|     16 |     4 | J4-7                         | SIM/SAM Connector    | CCM03-3754      |                       | CCM03-3754     | C & K                |
|     17 |     1 | J2                           | Emulator IF          | RIBBON6513      | A3210-ND              | 104068-1       | AMP/Tyco Electronics |
|     18 |     2 | L1-2                         | 10uH                 | 1210            | 490-4059-2-ND         | LQH32CN100K53L | Murata Electronics   |
|     19 |     1 | PJ1                          | +5VDC                |                 | SC237-ND              | RAPC712X       | Switchcraft          |
|     20 |     1 | P1                           | DB9_RS232            | AMP_745781      | A32075-ND             | 5745781-4      | AMP/Tyco Electronics |
|     21 |     6 | R1,R6,R8,R11,R12,R32         | 0                    | 603             | P0.0GCT-ND            | ERJ-3GEY0R00V  | Panasonic            |
|     22 |     1 | R2                           | 1M                   | 603             | P1.0MGCT-ND           | ERJ-3GEYJ106V  | Panasonic            |
|     23 |    10 | R3,R22,R33-40                | 100k                 | 603             | P100KGCT-ND           | ERJ-3GEYJ104V  | Panasonic            |
|     24 |     1 | R4                           | 10                   | 603             | P10GCT-ND             | ERJ-3GEYJ100V  | Panasonic            |
|     25 |     3 | R5,R26,R28                   | 10k                  | 603             | P10KGCT-ND            | ERJ-3GEYJ103V  | Panasonic            |
|     26 |     8 | R7,R9,R10,R13-17             | 62                   | 603             | P62GCT-ND             | ERJ-3GEYJ620V  | Panasonic            |
|     27 |     3 | R18,R19,R24                  | 680                  | 603             | P680GCT-ND            | ERJ-3GEYJ681V  | Panasonic            |
|     28 |     2 | R23,R25                      | 200k                 | 603             | P200KGCT-ND           | ERJ-3GEYJ204V  | Panasonic            |

|   Item |   Qty | Reference   | Part         | PCB Footprint      | Digikey Part Number   | Part Number         | Manufacturer            |
|--------|-------|-------------|--------------|--------------------|-----------------------|---------------------|-------------------------|
|     29 |     2 | R27,R29     | 47k          | 603                | P47KGCT-ND            | ERJ-3GEYJ473V       | Panasonic               |
|     30 |     2 | R30,R31     | 3k           | 603                | P3.0KGCT-ND           | ERJ-3GEYJ302V       | Panasonic               |
|     31 |     2 | S1,S2       | SW           | PB                 | P8051SCT              | EVQ-PJX05M          | Panasonic               |
|     32 |     6 | TP6,TP9-13  | HEADER 2 x 1 |                    | S1011E-36-ND          | PBC36SAAN           | Sullins                 |
|     33 |     1 | TP2         | HEADER 2 x 6 |                    | S2011E-36-ND          | PBC36DAAN           | Sullins                 |
|     34 |     1 | TP3         | HEADER 8     |                    | S1011E-36-ND          | PBC36SAAN           | Sullins                 |
|     35 |     1 | U3          | MAX3237CAI   | SOG.65M/28         | MAX3237CAI+-ND        | MAX3237CAI+         | Maxim                   |
|     36 |     1 | U4          | 73S1210F     | 68 QFN             |                       | 73S1210F            | Teridian Semiconductor  |
|     37 |     1 | U5          | LP3982       | 8-MSOP             | LP3982IMM-3.3CT- ND   | LP3982IMM- 3.3/NOPB | National Semiconductor  |
|     38 |     1 | U6          | 73S8010C     | 28-SO              |                       | 73S8010C            | Teridian Semiconductor  |
|     39 |     1 | U7          | 4052         |                    | MM74HC4052M-ND        | MM74HC4052M         | Fairchild Semicondubtor |
|     40 |     1 | Y2          | 12.000MHz    | XTAL/HC49US/. 140H | X1116-ND              | ECS-120-20-4XDN     | ECS                     |

## 4.5 Schematic Information

This section provides recommendations on proper schematic design that will help in designing circuits that are functional and compatible with the PCCID software library APIs.

## 4.5.1 Reset Circuit

The 73S1210F Multi-SAM Evaluation Board Lite provides a reset pushbutton that can be used when prototyping and debugging software.  The RESET pin should be supported by the external components shown in Figure 13.  R8 should be around 10 Ω.  The capacitor C27 should be 10 µF.  R8 and C27 should be mounted as close as possible to the IC.

<!-- image -->

## 4.5.2 Oscillator

The 73S1210F contains a single oscillator for the primary system clock (see Figure 14).  The system clock should use a 12 MHz crystal to provide the proper system clock rates for the serial and smart card interfaces.  The system oscillator requires a 1 MΩ parallel resistor to insure proper oscillator startup.

Figure 14: Oscillator Circuit

<!-- image -->

C43 (1000 pF) is shown for EFT protection and is optional.

Figure 13: External Components for RESET

<!-- image -->

## 4.5.3 Smart Card Interface

The smart card interface on the 73S1210F requires a few external components for proper operation.  Figure 15 shows the recommended smart card interface connections.  The RST and CLK signals should have 27 pF capacitors at the smart card connector.  It is recommended that a 0 Ω resistor be added in series with the CLK signal.  If necessary, in noisy environments, this resistor can be replaced with a small resistor to create a RC filter on the CLK signal to reduce CLK noise.  This filter can be used to soften the clock edges and provide a cleaner clock for those environments where this could be problematic.  The VCC output must have a 1.0 µ F capacitor at the smart card connector for proper operation.   The VPC input is the power supply input for the smart card power.  It is recommended that both a 10 µ F and a 0.1 µ F capacitor are connected to provide proper decoupling for this input.  Lastly, the PRES input on the 73S1210F contains a very weak pull down resistor.  As a result, an additional external pull down resistor is recommended to prevent any system noise from triggering a false card event.  The same holds true for the PRES input, except a pull up resistor is utilized as the logic is inverted from the PRES input.

The smart card interface layout is important.  The following guidelines should be followed to provide the optimum smart card interface operation:

- Route auxiliary signals away from card interface signals.
- Keep CLK signal as short as possible and with few bends in the trace.  Keep route of the CLK trace to one layer (avoid vias to other plane).  Keep CLK trace away from other traces especially RST and VCC.  Filtering of the CLK trace is allowed for noise purpose.  Up to 30 pF to ground is allowed at the CLK pin of the smart card connector.  Also, the zero ohm series resistor, R7, can be replaced for additional filtering (no more than 100 Ω).
- Keep VCC trace as short as possible.  Make trace a minimum of 0.5 mm thick.  Also, keep VCC away from other traces especially RST and CLK.
- Keep CLK trace away from VCC and RST traces.  Up to 30 pF to ground is allowed for filtering.
- Keep 0.1 µ F close to VDD pin of the device and directly take other end to ground.
- Keep 10 µ F and 0.1 µ F capacitors close to VPC pin of the device and directly take other end to ground.
- Keep 1.0 µ F close to VCC pin of the smart card connector and directly take other end to ground.

Figure 15: Smart Card Connections

<!-- image -->

## 4.5.4 Multiplexer Configuration

In order to support up to four SIM/SAM cards off a single 8010C, a low cost dual 4:1 analog multiplexer is used.  The multiplexer circuit is shown in Figure 16.  The RST and I/O signals are controlled through the multiplexer.  The CLK and VCC signals are shared.  The multiplexer path is selected by USR pins USR4 and USR5.  These pins are controlled by the firmware (Single 8010 versions).  Since the analog multiplexer is powered off the smart card power supply (VCC), the USR pins must have some protection resistors (R52 and R53) so there is no excessive current drawn from the USR pins when the pins are high and the multiplexer is powered off.  The 100K pull up resistors between the multiplexer and the individual SAM slot signals make sure the I/O and RST signals are held in their default states to insure no activity on an unselected slot.

Figure 16: Multiplexer Circuit

<!-- image -->

## 4.6 Multi-SAM Limitations

There are some significant limitations when using the MS configuration.   If these limitations are not acceptable, then the user must use a separate 8010 for each slot.

1. All SAMs must share VCC and the total current cannot exceed 65 mA (40 mA @ 1.8 V) for all SAM slots.
2. All SAMs must be considered as inserted.  If not populated, the only way to know is based on a mute error upon activation.  There is no way to differentiate between an empty slot and a real mute error (no ATR response).  Note: cards should not be inserted to any of these slots while powered on.
3. Since all SAMs are powered, communications can only be enabled to one SAM at a time.  All other SAMs are held in standby as RST is set high to unselected SAMs.  This means that when VCC is turned on, three of the four cards are unselected such that when VCC is ramping up, the RST will ramp up with VCC.  This violates the ISO-7816 specification.  However, the 73S1210F can select a specific card slot and initiate a valid reset so it will be activated normally and be placed into standby.
4. Since an analog MUX is used, all SAMs must operate at the same voltage.  In addition, some electrical parameters might not meet EMV electrical specifications, but should not have any problem operating properly.
5. Any hardware fault on any SAM will cause all SAM slots to be deactivated and the slot causing the problem cannot be identified.

The CD contains a special version of the PCCID application configured to run with the ELMS board.  See the 73S1210F Multi-SAM Evaluation Board Lite Quick Start Guide for details.

## 5 Ordering Information

| Part Description                                    | Order Number       |
|-----------------------------------------------------|--------------------|
| 73S1210F 68-Pin QFN Multi-SAM Evaluation Board Lite | 73S1210F-EB LiteMS |

## 6 Related Documentation

The following 73S1210F documents are available from Teridian Semiconductor Corporation:

73S1210F Data Sheet

73S1210F Multi-SAM Evaluation Board Lite Quick Start Guide TSC Flash Programmer Model TFP2 User's Manual

## 7 Contact Information

For more information about Teridian Semiconductor products or to check the availability of the 73S1210F contact us at:

6440 Oak Canyon Road Suite 100 Irvine, CA 92618-5201

Telephone: (714) 508-8800

FAX: (714) 508-8878

Email: scr.support@teridian.com

For a complete list of worldwide sales offices, go to http://www.teridian.com.

## Revision History

|   Revision | Date            | Description        |
|------------|-----------------|--------------------|
|        1.0 | August 20, 2009 | First publication. |