<!-- lastmod 2022-08-02 -->
<!-- image -->

Simplifying System Integration TM

## 73S1210F Evaluation Board Lite User Guide

© 2009 Teridian Semiconductor Corporation.  All rights reserved.

Teridian Semiconductor Corporation is a registered trademark of Teridian Semiconductor Corporation. Simplifying System Integration is a trademark of Teridian Semiconductor Corporation. Microsoft, Windows and Vista are a registered trademarks of Microsoft Corporation. Signum is a trademark of Signum Systems Corporation. ®

Keil is a trademark of ARM Ltd.

All other trademarks are the property of their respective owners.

Teridian Semiconductor Corporation makes no warranty for the use of its products, other than expressly contained in the Company's warranty detailed in the Teridian Semiconductor Corporation standard Terms and Conditions.  The company assumes no responsibility for any errors which may appear in this document, reserves the right to change devices or specifications detailed herein at any time without notice and does not make any commitment to update the information contained herein.  Accordingly, the reader is cautioned to verify that this document is current by comparing it to the latest version on http://www.teridian.com or by checking with your sales representative.

Teridian Semiconductor Corp., 6440 Oak Canyon, Suite 100, Irvine, CA 92618 TEL (714) 508-8800, FAX (714) 508-8877, http://www.teridian.com

## Table of Contents

| 1 Introduction ...................................................................................................................................4                                                                                                                                      | 1 Introduction ...................................................................................................................................4                                                                                                                                      | 1 Introduction ...................................................................................................................................4   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.1                                                                                                                                                                                                                                                                                      | Evaluation Board Lite Package Contents                                                                                                                                                                                                                                                   | ..............................................................................5                                                                       |
| 1.2                                                                                                                                                                                                                                                                                      | Evaluation Board Lite Features .............................................................................................5                                                                                                                                                            |                                                                                                                                                       |
| 1.3                                                                                                                                                                                                                                                                                      | Recommended Equipment and Test Tools............................................................................5                                                                                                                                                                        |                                                                                                                                                       |
| 2                                                                                                                                                                                                                                                                                        | Evaluation Board Lite Setup .........................................................................................................6                                                                                                                                                   |                                                                                                                                                       |
| 2.1                                                                                                                                                                                                                                                                                      | Using the Evaluation Board Lite with an Emulation Tool                                                                                                                                                                                                                                   | ........................................................7                                                                                             |
| 2.2                                                                                                                                                                                                                                                                                      | Loading User Code into the Evaluation Board-Lite                                                                                                                                                                                                                                         | ................................................................7                                                                                     |
| 3                                                                                                                                                                                                                                                                                        | Using the PCCID Application........................................................................................................9                                                                                                                                                     |                                                                                                                                                       |
| 3.1                                                                                                                                                                                                                                                                                      | Host Demonstration Software Installation..............................................................................9                                                                                                                                                                  |                                                                                                                                                       |
| 4                                                                                                                                                                                                                                                                                        | Evaluation Board Lite Hardware Description.............................................................................10                                                                                                                                                                |                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                          | 4.1 Jumpers, Switches and Test                                                                                                                                                                                                                                                           | Points.....................................................................................10                                                         |
| 4.2                                                                                                                                                                                                                                                                                      | Schematic...........................................................................................................................13                                                                                                                                                   |                                                                                                                                                       |
| 4.3                                                                                                                                                                                                                                                                                      | PCB Layouts.......................................................................................................................14                                                                                                                                                     |                                                                                                                                                       |
| 4.4                                                                                                                                                                                                                                                                                      | Bill of Materials                                                                                                                                                                                                                                                                        | ...................................................................................................................20                                 |
| 4.5                                                                                                                                                                                                                                                                                      | Schematic Information                                                                                                                                                                                                                                                                    | ........................................................................................................22                                            |
|                                                                                                                                                                                                                                                                                          | 4.5.1 Reset Circuit..............................................................................................................22                                                                                                                                                      |                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                          | 4.5.2 Oscillator...................................................................................................................22                                                                                                                                                    |                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                          | 4.5.3 Smart Card Interface                                                                                                                                                                                                                                                               | .................................................................................................23                                                   |
|                                                                                                                                                                                                                                                                                          | Ordering                                                                                                                                                                                                                                                                                 |                                                                                                                                                       |
| 5                                                                                                                                                                                                                                                                                        | Information...................................................................................................................24                                                                                                                                                         |                                                                                                                                                       |
| 6                                                                                                                                                                                                                                                                                        | Related Documentation...............................................................................................................24                                                                                                                                                   |                                                                                                                                                       |
| 7                                                                                                                                                                                                                                                                                        | Contact Information.....................................................................................................................24                                                                                                                                               | History..................................................................................................................................25           |
| Revision                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                          |                                                                                                                                                       |
| Figures                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                          |                                                                                                                                                       |
| Figure 1: 73S1210F Evaluation Board Lite...............................................................................................4                                                                                                                                                 | Figure 1: 73S1210F Evaluation Board Lite...............................................................................................4                                                                                                                                                 |                                                                                                                                                       |
| Figure 2: 73S1210F Evaluation Board Lite Basic Connections.................................................................6 Figure 3: Emulator                                                                                                                                          | Window Showing RESET and ERASE                                                                                                                                                                                                                                                           | Buttons...........................................................8                                                                                   |
| Figure 4: Emulator Window Showing Erased Flash Memory and File Load Menu.....................................8                                                                                                                                                                           | Figure 4: Emulator Window Showing Erased Flash Memory and File Load Menu.....................................8                                                                                                                                                                           |                                                                                                                                                       |
| Figure 5: 73S1210F Evaluation Board Lite Jumper, Switch and Test Point Locations.............................12                                                                                                                                                                          | Figure 5: 73S1210F Evaluation Board Lite Jumper, Switch and Test Point Locations.............................12                                                                                                                                                                          |                                                                                                                                                       |
| Figure 6: 73S1210F Evaluation Board Lite Electrical Schematic.............................................................13                                                                                                                                                             | Figure 6: 73S1210F Evaluation Board Lite Electrical Schematic.............................................................13                                                                                                                                                             |                                                                                                                                                       |
| Figure 7: 73S1210F Evaluation Board Lite Top View (Silkscreen) ..........................................................14 .....................................................15                                                                                                      | Figure 7: 73S1210F Evaluation Board Lite Top View (Silkscreen) ..........................................................14 .....................................................15                                                                                                      |                                                                                                                                                       |
| Figure 8: 73S1210F Evaluation Board Lite Bottom View (Silkscreen)                                                                                                                                                                                                                        | Figure 8: 73S1210F Evaluation Board Lite Bottom View (Silkscreen)                                                                                                                                                                                                                        |                                                                                                                                                       |
| Figure 9: 73S1210F Evaluation Board Lite Top Signal Layer..................................................................16 Figure 10: 73S1210F Evaluation Board Lite Middle Layer 1 - Ground Plane..........................................17                                        | Figure 9: 73S1210F Evaluation Board Lite Top Signal Layer..................................................................16 Figure 10: 73S1210F Evaluation Board Lite Middle Layer 1 - Ground Plane..........................................17                                        |                                                                                                                                                       |
| Figure 11: 73S1210F Evaluation Board Lite Middle Layer 2 - Supply Plane...........................................18 Figure 12: 73S1210F Evaluation Board Lite Bottom Signal Layer...........................................................19                                          | Figure 11: 73S1210F Evaluation Board Lite Middle Layer 2 - Supply Plane...........................................18 Figure 12: 73S1210F Evaluation Board Lite Bottom Signal Layer...........................................................19                                          |                                                                                                                                                       |
| Figure 13: External Components for RESET..........................................................................................22 Figure 14: Oscillator Circuit....................................................................................................................22 | Figure 13: External Components for RESET..........................................................................................22 Figure 14: Oscillator Circuit....................................................................................................................22 |                                                                                                                                                       |
| Figure 15: Smart Card                                                                                                                                                                                                                                                                    | Figure 15: Smart Card                                                                                                                                                                                                                                                                    |                                                                                                                                                       |
| Connections.......................................................................................................23                                                                                                                                                                     | Connections.......................................................................................................23                                                                                                                                                                     |                                                                                                                                                       |
| Tables                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                          |                                                                                                                                                       |
| Table 1: Flash Programming Interface Signals.........................................................................................7                                                                                                                                                   | Table 1: Flash Programming Interface Signals.........................................................................................7                                                                                                                                                   |                                                                                                                                                       |
| Table 2: Evaluation Board Lite Jumper, Switch and Test Point Description.............................................10                                                                                                                                                                  | Table 2: Evaluation Board Lite Jumper, Switch and Test Point Description.............................................10                                                                                                                                                                  |                                                                                                                                                       |
| Table 3: 73S1210F Evaluation Board Lite Bill of Materials......................................................................20                                                                                                                                                        | Table 3: 73S1210F Evaluation Board Lite Bill of Materials......................................................................20                                                                                                                                                        |                                                                                                                                                       |

## 1 Introduction

The Teridian Semiconductor Corporation (TSC) 73S1210F Evaluation Board- Lite is used to demonstrate the capabilities of the 73S1210F Smart Card Controller device.  It has been designed to operate either as a standalone or as a development platform.

The 73S1210F Evaluation Board Lite can be programmed to run any of the Teridian turnkey applications or a user-developed custom application.  Teridian provides its USB CCID application preloaded on the board and an EMV testing application on the CD.

Applications can be downloaded through the In-Circuit-Emulator (ICE) or through the TSC Flash Programmer Model TFP2.  As a development tool, the Evaluation Board Lite has been designed to operate in conjunction with an ICE to develop and debug 73S1210F based embedded applications.

<!-- image -->

The 73S1210F Evaluation Board Lite uses the same PWB as the 73S1217F.  The 73S1217F has some features that the73S1210F does not contain.  These include the 32 kHz oscillator and USB interface.  These features are depopulated on the 73S1210F Evaluation Board -Lite.

Figure 1: 73S1210F Evaluation Board Lite

<!-- image -->

## 1.1 Evaluation Board Lite Package Contents

The 73S1210F Evaluation Board Lite package contains the following:

- 73S1210F Evaluation Board Lite:  4-layer, square PCB as shown in Figure 1, containing the 73S1210F with the preloaded turnkey Pseudo-CCID (PCCID) program.
- 5 VDC/1,000 mA universal wall transformer.
- Serial cable: DB9, male/female, 2 meter length (Digi-Key AE1379-ND).
- CD containing documentation (data sheet, board schematics, BOM and layout), evaluation code, and utilities.
- The 73S1210F Evaluation Board Lite Quick Start Guide document.

## 1.2 Evaluation Board Lite Features

The 73S1210F Evaluation Board Lite (see Figure 1) includes the following features:

- RS-232 interface
- Single smart card interface
- Power interface
- ICE/Programmer interface
- ON/OFF switch
- 1 LED

## 1.3 Recommended Equipment and Test Tools

The following equipment and tools (not provided) are recommended for use with the 73S1210F Evaluation Board Lite package:

- For functional evaluation: PC with Microsoft ® Windows ® XP or Vista ® equipped with an RS232 (COM) port with DB9 connector.
- For software development (MPU code)
-  Signum™ ICE (In Circuit Emulator): ADM-51.  Refer to http://signum.temp.veriohosting.com/Signum.htm.
-  Keil™ 8051 C Compiler Kit: CA51.  Refer to http://www.keil.com/c51/ca51kit.htm and http://www.keil.com/product/sales.htm.

## 2 Evaluation Board Lite Setup

Figure 2 shows the basic connections of the Evaluation Board Lite with the external equipment.

The power supply input (VBAT) provides back-up power for those applications capable of using it.  When a power supply is connected to VBAT, the ON/OFF switch, S2, turns the power supply to the 73S1210F on or off.

- Connect  PJ1 on the board to any AC-DC converter block able to generate a DC power supply of 4.0 V to 6.5 V and 400 mA

The communication to an external host is accommodated via a standard RS-232 serial interface (TX/RX only).

Figure 2: 73S1210F Evaluation Board Lite Basic Connections

<!-- image -->

## 2.1 Using the Evaluation Board Lite with an Emulation Tool

The 73S1210F Evaluation Board Lite has been designed to operate with an In-Circuit-Emulator (ICE) from Signum Systems (model ADM-51).  The Signum System POD has a ribbon cable that must be directly attached to connector J2.

Signum Systems offers different POD options depending on user needs.  The standard pod allows users to perform typical emulator functions such as symbolic debugging, in-line breakpoints, memory examination/modification, etc.  Other pod options enable code trace capability and/or complex breakpoints at an additional cost.

<!-- image -->

When using an ICE, the board must be externally powered (and turned on via the ON/OFF switch.  The power LED D4 will indicate the power status.

## 2.2 Loading User Code into the Evaluation Board-Lite

## Hardware Interface for Programming

The signals listed in Table 1 are necessary for communication between the TFP2 Flash Programmer or ICE and the 73S1210F.

Table 1: Flash Programming Interface Signals

| Signal                                                                                                                                      | Direction                                                                                                                                   | Function                                                                                                                                    |
|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| E_TCLK                                                                                                                                      | Output from 73S1210F                                                                                                                        | Data clock                                                                                                                                  |
| E_RXTX                                                                                                                                      | Bi-directional                                                                                                                              | Data input/output                                                                                                                           |
| E_RST 1                                                                                                                                     | Bi-directional                                                                                                                              | Flash Downloader Reset (active low)                                                                                                         |
| 1 The E_RST signal should only be driven by the TFP2 when enabling these interface signals. The TFP2 must release E_RST at all other times. | 1 The E_RST signal should only be driven by the TFP2 when enabling these interface signals. The TFP2 must release E_RST at all other times. | 1 The E_RST signal should only be driven by the TFP2 when enabling these interface signals. The TFP2 must release E_RST at all other times. |

The signals in Table 1, along with 3.3 V and GND, are available on the emulator header J2.  Production modules may be equipped with much simpler programming connectors, e.g. a 5x1 header.

Programming of the flash memory requires either the Signum Systems ADM51 in-circuit emulator or the TSC Flash Programmer Model TFP2 provided by Teridian.

## Loading Code with the In-Circuit Emulator

If firmware exists in the 73S1210F flash memory, the memory must be erased before loading a new file into memory.  In order to erase the flash memory, the RESET button in the emulator software must be clicked followed by the ERASE button (see Figure 3).

Once the flash memory is erased, the new file can be loaded using the Load command in the File menu. The dialog box shown in Figure 4 makes it possible to select the file to be loaded by clicking the Browse button.  Once the file is selected, pressing the OK button loads the file into the flash memory of the IC.

At this point, the emulator probe (cable) can be removed.  Once the 73S1210F device is reset using the reset button on the Evaluation Board Lite, the new code starts executing.

## Loading Code with the TSC Flash Programmer Model TFP2

Follow the instructions given in the TSC Flash Programmer Model TFP2 User's Manual .

Figure 3: Emulator Window Showing RESET and ERASE Buttons

<!-- image -->

Figure 4: Emulator Window Showing Erased Flash Memory and File Load Menu

<!-- image -->

## 3 Using the PCCID Application

The PCCID firmware is pre-installed on the 73S1210F Evaluation Board.  It requires a PC with the serial RS-232 port.  When powered-up, the board is able to run the PCCID demonstration host application which allows:

- Smart card activation and deactivation, in ISO or EMV mode.
- Smart card APDU commands to be exchanged with the smart card inserted in the board.
- Starting a test sequence in order to test and evaluate the board performance against an EMV test environment.

## 3.1 Host Demonstration Software Installation

## Installation on Windows XP

Follow these steps to install the software on a PC running Windows XP:

- Extract 'PCCID V z.zz Release.zip' (where z.zz is the latest version of the firmware release).
- o Create an install directory. For example: 'C:\TSC\'.
- o Unzip 'PCCID V z.zz Release.zip' to the just created folder.  All applications and documentation needed to run the board with a Windows PC will be loaded to this folder.
- Plug the supplied adapter into the 5V DC jack and a wall outlet.
- Connect the serial cable between the host system and the 73S1210F Evaluation Board.
- Press the ON/OFF switch to turn the board on.
- Run 'TSCP-CCID.exe' (located in the path x :\ yyy \ PCCID V z.zz Release\Host Applications\Windows App\App\Bin\Release) on the host system to execute the host demonstration application (where x refers to the drive, yyy refers to the directory the installation .zip file was expanded to and z.zz is the latest version of the firmware release).

At this point the application window should appear.  For additional information regarding the use of the Teridian Host application, refer to the Pseudo-CCID Host GUI Users Guide (UG\_12xxF\_037).

<!-- image -->

## 4 Evaluation Board Lite Hardware Description

## 4.1 Jumpers, Switches and Test Points

Table 2 describes the 73S1210F Evaluation Board Lite jumpers, switches and test points.  The Item # in Table 2 references Figure 5.  The Default Setting column refers to setup for running PCCID application.

Table 2: Evaluation Board Lite Jumper, Switch and Test Point Description

|   Item # | Schematic and Silkscreen Reference   | Default Setting   | Name                             | Use                                                                                                                                                                                                                                                                                             |
|----------|--------------------------------------|-------------------|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        1 | S1                                   |                   | Reset button                     | Evaluation board main reset: asserts a hardware reset to the on-board 73S1210F.                                                                                                                                                                                                                 |
|        2 | S2                                   |                   | On / Off button                  | When using battery power (on PJ1), turns on or off (toggles) power to the 73S1210F device.                                                                                                                                                                                                      |
|        3 | TP8                                  |                   | VP test point                    | Test point used for monitoring VP voltage. VP is 5.5 V when the 72S1210F is on.                                                                                                                                                                                                                 |
|        4 | TP2                                  |                   | ICC test point                   | Smart card interface test points with ground pins.                                                                                                                                                                                                                                              |
|        5 | TP1                                  |                   | Vbat test point                  | VBAT input test point.                                                                                                                                                                                                                                                                          |
|        6 | TP3                                  |                   | USRpin test points               | USR pin test points.                                                                                                                                                                                                                                                                            |
|        7 | PJ1                                  | Connect           | DC Jack                          | VBAT input power jack. VBATused as the primary power input must be between 4.0 V and 6.5 V. VBAT requires the use of the ON/OFF switch to turn on the 72S1210F.                                                                                                                                 |
|        8 | TP6                                  |                   | VDD test point                   | VDD test point with ground.                                                                                                                                                                                                                                                                     |
|        9 | J2                                   | No Connect        | In-Circuit Emulator Connector    | This connector must be used when using an external In-Circuit Emulator (Signum ADM51). Refer to the Electrical Schematic for pin assignments.                                                                                                                                                   |
|       10 | D5                                   |                   | RXD LED                          | Reflects the activity on the serial RX: Data going TO the 73S1210F.                                                                                                                                                                                                                             |
|       11 | TP4                                  | Insert            | RXD LED jumper                   | Jumper inserted enables the RX LED. Jumper removed disables the RX LED.                                                                                                                                                                                                                         |
|       12 | D6                                   |                   | TXD LED                          | Reflects the activity on the serial TX: Data going FROM the 73S1210F.                                                                                                                                                                                                                           |
|       13 | JP2                                  | VDD               | Serial transceiver enable jumper | Jumper controls the RS-232 transceiver shutdown function. There are three possible configurations: • Removed; places the RS-232 transceiver chip in shutdown. • Inserted VDD; enables the RS-232 transceiver. • Inserted USR6; allows the USR6 pin to control the RS-232 transceiver shutdown . |
|       14 | TP5                                  | Insert            | TXD LED jumper                   | Jumper inserted enables the TX LED. Jumper removed disables the TX LED.                                                                                                                                                                                                                         |

|   Item # | Schematic and Silkscreen Reference   | Default Setting   | Name                              | Use                                                                                                                                                                                                   |
|----------|--------------------------------------|-------------------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|       15 | P1                                   | Connect           | DB9 RS232 Female Socket           | This socket allows for connection of an RS232 cable to a computer. Use crossed wires (RX/TX) cable. The evaluation board has an on-board level shifter (U7) to allow direct connection to a computer. |
|       16 | -                                    |                   | Board Reference and serial number | Should be mentioned in any communication with Teridian when requesting support.                                                                                                                       |
|       17 | D4                                   |                   | Power LED                         | Power LED comes on with VDD. Can be disabled by removing JP4.                                                                                                                                         |
|       18 | JP4                                  | Insert            | Power LED disable                 | Inserting the jumper enables the power LED with VDD. Removing the jumper disables the power LED.                                                                                                      |
|       19 | D1                                   |                   | LED0                              | 73S1210F LED0 output LED.                                                                                                                                                                             |
|       20 | TP7                                  |                   | VPC test point                    | Test point to monitor VPC. VPC is the input power source to the internal voltage converter. This voltage is derived from either VBUS or VBAT. See the 73S1210F datasheet for further information.     |
|       21 | J1                                   |                   | Smart Card connector              | Allows the evaluation board to communicate with a smart card using a standard (credit card size) format. This slot is connected to the 73S1210F external card interface.                              |

Figure 5: 73S1210F Evaluation Board Lite Jumper, Switch and Test Point Locations

<!-- image -->

## 4.2 Schematic

Figure 6: 73S1210F Evaluation Board Lite Electrical Schematic

<!-- image -->

## 4.3 PCB Layouts

Figure 7: 73S1210F Evaluation Board Lite Top View (Silkscreen)

<!-- image -->

<!-- image -->

21

Figure 8: 73S1210F Evaluation Board Lite Bottom View (Silkscreen)

a

5a

Figure 9: 73S1210F Evaluation Board Lite Top Signal Layer

<!-- image -->

Figure 10: 73S1210F Evaluation Board Lite Middle Layer 1 - Ground Plane

<!-- image -->

Figure 11: 73S1210F Evaluation Board Lite Middle Layer 2 - Supply Plane

<!-- image -->

Figure 12: 73S1210F Evaluation Board Lite Bottom Signal Layer

<!-- image -->

## 4.4 Bill of Materials

Table 3 provides the bill of materials for the 73S1210F Evaluation Board Lite schematic provided in Figure 6.

Table 3: 73S1210F Evaluation Board Lite Bill of Materials

|   Item |   Qty. | Reference                            | Part                 | PCB Footprint   | Digi-key Part Number   | Part Number     | Manufacturer         |
|--------|--------|--------------------------------------|----------------------|-----------------|------------------------|-----------------|----------------------|
|      1 |      3 | C5,C6,C12,C16                        | 27 pF                | 603             | PCC270ACVCT-ND         | ECJ-1VC1H270J   | Panasonic            |
|      2 |      1 | C7                                   | 0.47 µF              | 603             | PCC2275CT-ND           | ECJ-1VB1A474K   | Panasonic            |
|      3 |      1 | C9                                   | 4.7 µF               | 603             | PCC2396CT-ND           | ECJ-1VB0J475K   | Panasonic            |
|      4 |      5 | C24,C25,C26,C27,C28                  | 22 pF                | 603             | PCC220ACVCT-ND         | ECJ-1VC1H220J   | Panasonic            |
|      5 |      1 | C13                                  | 10 µF                | 3528-21 (EIA)   | 478-1672-1-ND          | TAJB106K010R    | AVX Corporation      |
|      6 |      9 | C14,C19,C20,C21,C22, C23,C30,C31,C32 | 0.1 µF               | 603             | 445-1314-1-ND          | C1608X7R1H104K  | TDK Corporation      |
|      7 |      1 | C17                                  | 1000 pF              | 603             | PCC2151CT-ND           | ECJ-1VC1H102J   | Panasonic            |
|      8 |      1 | C33                                  | 10 µF                | 805             | PCC2225CT-ND           | ECJ-2FB0J106M   | Panasonic            |
|      9 |      4 | D1,D4,D5,D6                          | LED                  | 0805_DIODE      | 160-1414-1-ND          | LTST-C170FKT    | LITE-ON INC          |
|     10 |      4 | G1,G2,G3,G4                          | MTHOLE               | MTHOLE          |                        |                 |                      |
|     11 |      5 | JP1,TP4,JP4,TP5,TP6                  | HEADER               | 5 X 1 PIN       | S1011E-36-ND           | PBC36SAAN       | Sullins              |
|     12 |      1 | JP2                                  | HEADER               | 5 X 2 PIN       | S2011E-36-ND           | PBC36DAAN       | Sullins              |
|     13 |      1 | J1                                   | Smart Card Connector | ITT/CCM02-2504  | 401-1715-ND            | CCM02-2504LFT   | ITT Industries       |
|     14 |      1 | J2                                   | Emulator IF          | RIBBON6513      | A3210-ND               | 104068-1        | AMP/Tyco Electronics |
|     15 |      1 | L1                                   | 10 µH                | 1210            | 490-4059-2-ND          | LQH32CN100K53 L | Murata Electronics   |
|     16 |      1 | PJ1                                  | +5VDC                |                 | SC237-ND               | RAPC712X        | Switchcraft          |
|     17 |      1 | P1                                   | DB9_RS232            |                 | A32075-ND              | 5745781-4       | AMP/Tyco Electronics |
|     18 |      5 | R1,R6,R8,R11,R12                     | 0                    | 603             | P0.0GCT-ND             | ERJ-3GEY0R00V   | Panasonic            |
|     19 |      1 | R2                                   | 1 MΩ                 | 603             | P1.0MGCT-ND            | ERJ-3GEYJ106V   | Panasonic            |
|     20 |      1 | R3                                   | 100 kΩ               | 603             | P100KGCT-ND            | ERJ-3GEYJ104V   | Panasonic            |

|   Item |   Qty. | Reference                      | Part         | PCB Footprint     | Digi-key Part Number   | Part Number     | Manufacturer   |
|--------|--------|--------------------------------|--------------|-------------------|------------------------|-----------------|----------------|
|     21 |      1 | R4                             | 10 Ω         | 603               | P10GCT-ND              | ERJ-3GEYJ100V   | Panasonic      |
|     22 |      1 | R5                             | 10 kΩ        | 603               | P10KGCT-ND             | ERJ-3GEYJ103V   | Panasonic      |
|     23 |      8 | R7,R9,R10,R13,R14, R15,R16,R17 | 62 Ω         | 603               | P62GCT-ND              | ERJ-3GEYJ620V   | Panasonic      |
|     24 |      3 | R18,R19,R24                    | 680 Ω        | 603               | P680GCT-ND             | ERJ-3GEYJ681V   | Panasonic      |
|     25 |      1 | R25                            | 200 kΩ       | 603               | P200KGCT-ND            |                 | Panasonic      |
|     26 |      2 | S1,S2                          | SW           | PB                | P8051SCT               | EVQ-PJX05M      | Panasonic      |
|     27 |      3 | TP1,TP7,TP8                    | HEADER 2 x 4 |                   | S1011E-36-ND           | PBC36SAAN       | Sullins        |
|     28 |      1 | TP2                            | HEADER 2 x 4 |                   | S2011E-36-ND           | PBC36DAAN       | Sullins        |
|     29 |      1 | TP3                            | HEADER 8     |                   | S1011E-36-ND           | PBC36SAAN       | Sullins        |
|     30 |      1 | U3                             | MAX3237CAI   | SOG.65M/28        | MAX3237CAI+-ND         | MAX3237CAI+     | Maxim          |
|     31 |      1 | U4                             | 73S1210F     | 68 QFN            |                        | 73S1210F        | Teridian       |
|     32 |      1 | Y2                             | 12.000 MHz   | XTAL/HC49US/.140H | X1116-ND               | ECS-120-20-4XDN | ECS            |

## 4.5 Schematic Information

This section provides recommendations on proper schematic design that will help in designing circuits that are functional and compatible with the PCCID software library APIs.

## 4.5.1 Reset Circuit

The 73S1210F Evaluation Board Lite provides a reset pushbutton that can be used when prototyping and debugging software.  The RESET pin should be supported by the external components shown in Figure 13. R8 should be around 10 Ω.  The capacitor C27 should be 10 µF.  R8 and C27 should be mounted as close as possible to the IC.

<!-- image -->

## 4.5.2 Oscillator

The 73S1210F contains a single oscillator for the primary system clock.  The system clock should use a 12 MHz crystal to provide the proper system clock rates for the serial and smart card interfaces.  The system oscillator requires a 1 MΩ parallel resistor to insure proper oscillator startup (see Figure 14).

Figure 14: Oscillator Circuit

<!-- image -->

C43 (1000 pF) is shown for EFT protection and is optional.

Figure 13: External Components for RESET

<!-- image -->

## 4.5.3 Smart Card Interface

The smart card interface on the 73S1210F requires a few external components for proper operation.  Figure 15 shows the recommended smart card interface connections.  The RST and CLK signals should have 27 pF capacitors at the smart card connector.  It is recommended that a 0 Ω resistor be added in series with the CLK signal.  If necessary, in noisy environments, this resistor can be replaced with a small resistor to create a RC filter on the CLK signal to reduce CLK noise.  This filter can be used to soften the clock edges and provide a cleaner clock for those environments where this could be problematic.  The VCC output must have a 1.0 µ F capacitor at the smart card connector for proper operation.   The VPC input is the power supply input for the smart card power.  It is recommended that both a 10 µ F and a 0.1 µ F capacitor are connected to provide proper decoupling for this input.  Lastly, the PRES input on the 73S1210F contains a very weak pull down resistor.  As a result, an additional external pull down resistor is recommended to prevent any system noise from triggering a false card event.  The same holds true for the PRES input, except a pull up resistor is utilized as the logic is inverted from the PRES input.

- The smart card interface layout is important.  The following guidelines should be followed to provide the optimum smart card interface operation:
- Route auxiliary signals away from card interface signals
- Keep CLK signal as short as possible and with few bends in the trace.  Keep route of the CLK trace to one layer (avoid vias to other plane).  Keep CLK trace away from other traces especially RST and VCC.  Filtering of the CLK trace is allowed for noise purpose.  Up to 30 pF to ground is allowed at the CLK pin of the smart card connector.  Also, the zero Ω series resistor, R7, can be replaced for additional filtering (no more than 100 Ω).
- Keep VCC trace as short as possible.  Make trace a minimum of 0.5 mm thick.  Also, keep VCC away from other traces especially RST and CLK.
- Keep CLK trace away from VCC and RST traces.  Up to 30 pF to ground is allowed for filtering
- Keep 0.1 µ F close to VDD pin of the device and directly take other end to ground
- Keep 10 µ F and 0.1 µ F capacitors close to VPC pin of the device and directly take other end to ground
- Keep 1.0 µ F close to VCC pin of the smart card connector and directly take other end to ground

Figure 15: Smart Card Connections

<!-- image -->

## 5 Ordering Information

| Part Description                          | Order Number     |
|-------------------------------------------|------------------|
| 73S1210F 68-Pin QFN Evaluation Board Lite | 73S1210F-EB-Lite |

## 6 Related Documentation

The following 73S1210F documents are available from Teridian Semiconductor Corporation:

73S1210F Data Sheet

73S1210F Evaluation Board Lite Quick Start Guide

TSC Flash Programmer Model TFP2 User's Manual

## 7 Contact Information

For more information about Teridian Semiconductor products or to check the availability of the 73S1210F contact us at:

6440 Oak Canyon Road Suite 100 Irvine, CA 92618-5201

Telephone: (714) 508-8800

FAX: (714) 508-8878

Email: scr.support@teridian.com

For a complete list of worldwide sales offices, go to http://www.teridian.com.

## Revision History

|   Revision | Date             | Description                                                                                                                                                                                                       |
|------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        1.0 | February 6, 2008 | First publication.                                                                                                                                                                                                |
|        1.1 | August 18, 2009  | Changed the document title from 73S1210F Development Board User Guide to 73S1210F Evaluation Board Lite User Guide . Made minor BOMmodifications to remove obsolete parts. Miscellaneous editorial modifications. |