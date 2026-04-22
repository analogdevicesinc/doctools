<!-- lastmod 2024-02-09 -->
<!-- image -->

Evaluates: DS2485

## General Description

The  DS2485  evaluation  (EV)  kit  provides  the  hardware and  software  necessary  to  exercise  the  features  of the  DS2485. The  EV  kit's  main  hardware  consists  of  a DS9481P-300  USB-to-1-Wire ®   adapter,  DS2485  EV  kit peripheral  module,  and  DS9121BQ  socket  board.  Both the DS2485 and DS28E07 devices are included for evaluation. The software runs on Windows ®  10, Windows 8, and Windows  7  operating  systems  and  provides  a  graphical user interface (GUI) to exercise the features of the DS2485.

## Features

- Provides the Ability to Exercise All Functional Commands
- Quickly Create, Save, and Load Custom 1-Wire Scripts
- Customizable Timings Allow for Various 1-Wire Configurations such as Long Lines
- Flexible Timings Ensure Support for Existing and Future Devices
- Alterable I 2 C Address Ensures a Conflict-Free Environment
- Easily Discover Connected 1-Wire Devices with Built-in Search ROM Accelerator
- GPIO Allows External Control or Signaling
- Fully Compliant with USB Specification v2.0

## DS2485 EV Kit Contents

|   QTY | DESCRIPTION                          |
|-------|--------------------------------------|
|     1 | DS2485 EV Kit Peripheral Module      |
|     1 | DS9481P-300 USB-to-1-Wire Adapter    |
|     2 | DS9121BQ Socket Board                |
|     5 | DS2485Q+U                            |
|     5 | DS28E07Q+U                           |
|     1 | USB Type-A to Micro-USB Type-B Cable |

Ordering Information appears at end of data sheet.

1-Wire is a registered trademark of Maxim Integrated Products, Inc. Windows is a registered trademark of Microsoft Corporation.

©

## DS2485 Evaluation Kit

## Quick Start

## Required Equipment

- DS2485 EV kit with accompanying software and USB driver
- PC with Windows 10, Windows 8, or Windows 7 operating systems
- System with spare USB 2.0 or higher port

## Software and Hardware Installation and Setup

- 1) Ensure that there are no other USB devices plugged in before installing the software (keyboard, mouse, USB drives, and printers do not apply).
- 2) Navigate to the DS2485 product page and download the EV kit software zip file.
- 3) Fully unzip the EV kit software. NOTE: Running the setup from within the zip window without fully extracting it may cause installation issues. Make sure that the files are unzipped to a folder before proceeding.
- 4) Navigate to the USB driver folder.
- 5) Right-click on install.bat and then choose Run as administrator .
- 6) Click Install when prompted to install the USB device driver.
- 7) Install the jumpers for the DS28E07 IC as described in Table 1, and reference Figure 1 for their locations.
- 8) Insert a DS28E07 IC into the DS9121BQ board and connect it to J2 of the DS2485 EV kit peripheral module, as shown in Figure 2. IMPORTANT: The pin 1 indicator is on the PCB's silkscreen and is located on the lower left-hand corner. Do not use the dimple inside the socket as the pin 1 indicator.
- 9) Connect J1 of  the DS2485 EV kit peripheral module to the DS9481P-300 for the system to work properly.
- 10) Connect the USB cable to the DS9481P-300 adapter and plug it into a USB port.

319-100763; Rev 1; 1 2 /23

One  Analog  Way,  Wilmington,  MA  01887  U.S.A.    |      Tel:  781.329.470      |      © 2023  Analog  Devices,  Inc.  All  rights  reserved. 2023 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## Table 1. DS9121BQ Socket Board Jumper Settings

Figure 1. DS9121BQ Socket Board

| REFERENCE DESIGNATOR       | JUMPER SETTING          | NOTES                            |
|----------------------------|-------------------------|----------------------------------|
| JB1, JB2, JB3, and JB4 JB5 | Not installed Installed | DS28E07Q+ inserted in the socket |
|                            |                         | DS28E07Q+ inserted in the socket |

<!-- image -->

Figure 2. Board Connectivity

<!-- image -->

Evaluates: DS2485

│

## DS2485 Evaluation Kit

- 11)  Windows detects the hardware and automatically installs the USB driver.
- 12) Double-click on the Setup.exe file to install the DS2485 EV kit software.
- 13)  The EV kit software will automatically start after installation completes (Figure 3).
- 14)  Do not run setup.exe to launch the program because it will install a second copy. Instead, use the DS2485 EV kit shortcut from the Windows' Start menu for subsequent launches.

Figure 3. DS2485 Evaluation Kit Software

<!-- image -->

Evaluates: DS2485

## DS2485 EV Kit Supported Functions

The  DS2485  EV  kit  program  supports  every  command outlined  in  the  device's  data  sheet  with  functionality

Table 2. Menu Tabs

| TAB NAME           | DESCRIPTION                                                                                                                                                                                                                                                                                            |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DS2485 Commands    | Provides read and write access to the DS2485's memory pages, protection settings, and Read Status command, and allows customization of its I 2C address.                                                                                                                                               |
| 1-Wire Interface   | Showcases the use of the integrated Search ROM accelerator, Write/Read Block functions, and Full Command Sequence used for authenticator devices.                                                                                                                                                      |
| 1-Wire Port Config | Allows for customized 1-Wire timings for standard and overdrive speeds and provides access to the various registers for configuring 1-Wire pullup, thresholds, slew rate, and other registers. This tab also contains the CRC-16 computation engine, as well as the ability to perform a Master Reset. |
| 1-Wire Scripting   | Supports the sequencing of all fundamental 1-Wire commands to develop communication sequences for any device. Script commands can easily be constructed, executed, and saved for later use.                                                                                                            |

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| DS2485EVKIT# | EV Kit |

# Denotes RoHS compliant

divided across  the  various  tabs  in the application. Table  2  provides  a  brief  description  for  the  operations found on each tab.

A

B

C

D

## DS2485 EV Kit Peripheral Module Bill of Materials

| DESIGNATOR   |   QTY | DESCRIPTION                      | MANUFACTURER       | PART NUMBER        |
|--------------|-------|----------------------------------|--------------------|--------------------|
| C1           |     1 | CAP CER 1UF 35V X5R 0603         | Taiyo Yuden        | GMK107BJ105KA      |
| C2, C3       |     2 | CAP+,0.1uF,10%,50V,X7R,0603      | Murata Electronics | GRM188R71H104KA93  |
| J1           |     1 | CONN HEADER R/A 6POS 2.54MM      | Wurth Electronics  | 61300611021        |
| J2           |     1 | CONN+,FEMALE,6POS,.100',R/A,GOLD | Sullins Connector  | PPPC061LGBN-RC     |
| Q1           |     1 | MOSFET P-CH 20V 630MA SOT323-3   | Infineon           | BSS209PWH6327XTSA1 |
| R1           |     1 | RES#,100K OHM,1%,1/10W,0603,AUTO | Vishay Dale        | CRCW0603100KFK     |
| R2           |     1 | RES#,1K OHM,1%,1/10W,0603,AUTO   | Vishay Dale        | CRCW06031K00FK     |
| R6 1         |     1 | RES#,4.99 OHM,1%,0603 2          | Vishay Dale 3      | CRCW06034R99FK 4   |
| R7           |     1 | RES#,1 OHM,1%,0603               | Vishay Dale        | CRCW06031R00FK     |
| U1           |     1 | ADVANCED 1-Wire CONTROLLER       | Analog Devices     | DS2485Q+U          |
| U2           |     1 | ESD PROTECTORS IN UDFN           | Analog Devices     | MAX13204EALT+      |

## DS2485 EV Kit Peripheral Module Schematic Diagram

<!-- image -->

Cannot  o pen  f

ile

C:\Users\peter.cook\Picture s\Work\Logos\MaximLogo

Teal.bmp

Rev of

1

2

3

Copyright  ©

Title

DS2485EVKIT

Document  Number

Size

8.5"  x

1"

Date:  07/25/2023

2023

Evaluates: DS2485

Maxim  Integrated

Drawn  B y:

4

Sheet

│

1

A

1

A

B

C

D

A

B

C

D

## DS2485BQ Socket Board Bill of Materials

| DESIGNATOR   |   QTY | DESCRIPTION                           | MANUFACTURER                | PART NUMBER        |
|--------------|-------|---------------------------------------|-----------------------------|--------------------|
| J1           |     1 | CONN FEMALE 6POS .100' R/AGOLD        | Sullins Connector Solutions | PPPC061LGBN-RC     |
| J2           |     1 | CONN HEADER 6 POS RA2.54              | Wurth Electronics Inc.      | 61300611021        |
| TP1-TP6      |     6 | TEST POINT PC MULTI PURPOSE BLK       | Keystone Electronics        | 5011               |
| U1           |     1 | SOCKET+, IC TDFN, 3mm, 3x2, CLAMSHELL | PLASTRONICS                 | 06QN10T23030       |
| C1           |     1 | CAP CER 0.47μF 16V X7R 0603           | KEMET                       | C0603C474K4RACTU   |
| D1           |     1 | LED GREEN CLEAR 0603 SMD              | Dialight                    | 5988081107F        |
| JB1-JB5      |     5 | CONN HEADER 2 POS 2.54                | Wurth Electronics Inc.      | 61300211121        |
| Q1           |     1 | MOSFET N-CH 50V 200MA SOT23           | ON Semiconductor            | BSS138LT1G         |
| R1, R3       |     2 | RES SMD, 10kΩ, 0.1%, 1/10W 0603       | Bourns Inc.                 | CRT0603-BY-10R0ELF |
| R2           |     1 | RES SMD, 3.3kΩ, 1%, 0603              | Yageo                       | RC0402JR-071K5L    |
| R4, R5, R6   |     3 | DNP (do not populate)                 | -                           | -                  |

1

2

3

## DS2485BQ Socket Board Schematic Diagram

<!-- image -->

Title

Cannot  o pen  file

C:\Users\peter.cook\Picture s\Work\Logos\MaximLogo

Teal.bmp

Sheet

4

5

6

1

2

3

SVN  @  .../securein fo/Devices/DS9121BQ/PCBs\_Misc/Rev1/PCB  Design  F

4

iles/

5

DS9121BQ+ w ith 3 x 3 m

Size m  TDFN  Socket

Document  Num ber

Tabloid

Date:  03/09/2021

DS9121BQ#\_T1

Drawn  By:

Stewart  Merkel

6

│

1

Rev of

1.0

1

A

B

C

D

## DS9121 EV Kit Peripheral Module PCB Layout Diagrams

<!-- image -->

DS9121BQ Socket Board Layout Diagram-Top

<!-- image -->

DS9121BQ Socket Board Layout Diagram-Bottom

## DS9121BQ Socket Board PCB Layout Diagrams

DS9121 EV Kit Peripheral Module Layout Diagram-Top

<!-- image -->

DS9121 EV Kit Peripheral Module Layout Diagram-Bottom

<!-- image -->

│

## DS2485 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                               | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------|-----------------|
|                 0 | 5/21            | Initial release                                           | -               |
|                 1 | 1 2 /23         | Removed 1 of 2 DS9121BQ boards; added DS2485 EV kit board | 1-3, 5-7        |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: DS2485