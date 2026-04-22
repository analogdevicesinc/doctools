<!-- lastmod 2023-01-18 -->
<!-- image -->

## Evaluates: DS28E36 and DS2476

Click here to ask an associate for production status of specific part numbers.

## General Description

The  DS28E36  evaluation  system  (EV  system)  provides the  hardware  and  software  necessary  to  evaluate  the DS28E36  and  DS2476.  The  EV  system  consists  of five  DS28E36/DS2476  devices  in  a  6-pin  TDFN  package,  two  DS9121AQ+  evaluation  TDFN  socket  boards, and a DS9481P-300# USB-to-I 2 C/1-Wire ®   adapter. The evaluation  software  runs  on  Windows ® 10,  Windows  8, and  Windows  7  operating  systems  (64-  and  32-bit versions). The EV system provides a handy user interface to exercise the features of the DS28E36 and DS2476.

## EV System Contents

|   QTY | DESCRIPTION                                                           |
|-------|-----------------------------------------------------------------------|
|     5 | Includes five DS28E36BQ+ DeepCover Secure Authenticators (6-pin TDFN) |
|     5 | DS2476BQ+ DeepCover Secure Coprocessor (6-pin TDFN)                   |
|     2 | DS9121AQ+ socket boards (6-pin TDFN)                                  |
|     1 | DS9481P-300# USB-to-I 2 C/1-Wire Adapter                              |
|     1 | USB Type-A to USB Mini Type-B cable                                   |

Ordering Information appears at end of data sheet.

1-Wire and DeepCover are registered trademarks of Maxim Integrated Products, Inc.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## DS28E36 Evaluation System

## Features

- Demonstrates the Features of the DS28E36 DeepCover ®  Secure Authenticator
- Demonstrates the Features of the DS2476 DeepCover Secure Coprocessor
- I 2 C and 1-Wire Communication is Logged to Aid Firmware Designers Understanding of the DS2476 and DS28E36
- I 2 C/1W-USB Adapter Creates a Virtual COM Port on Any PC
- Fully Compliant with USB Specification v2.0
- Software Runs on Windows 10, Windows 8, and Windows 7 for Both 64-Bit and 32-Bit Versions
- 3.3V ±3% 1-Wire Operating Voltage
- Convenient On-Board Test Points and TDFN Socket
- Evaluation Software Available by Request
- Proven PCB Layout
- Fully Assembled and Tested

## DS28E36 EV System

Figure 1. DS28E36EV with USB Cable

<!-- image -->

## DS28E36 Evaluation System

## Quick Start

This section is intended to give the DS28E36 evaluator a list of recommended equipment and instructions on how to set up a Windows-based computer for the evaluation software.

## Recommended Equipment

- DS28E36 EV system USB-to-I 2 C adapter with DS2476 secure coprocessor (included)
- Two DS9121AQ+ TDFN socket boards (included)
- Five DS28E36BQ+ (included, respectively)
- Five DS2476BQ+ (included)
- USB Type A to Micro-USB Type B cable (included)
- Computer with a Windows 10, Windows 8, or Windows 7 operating system (64- or 32-bit) and a spare USB 2.0 or higher port
- Download and install the latest 1-Wire Drivers .
- Download DS28E36 EV kit software (light version) or request full DS28E36 EV kit developer software .*

Figure 2. File Viewer

<!-- image -->

*The full version of the software is called DS28C36\_EVKIT\_ REV\_1\_6\_released\_062317.zip and it supports both DS28E36 and DS28C36.

Evaluates: DS28E36 and DS2476

Note: In the following sections, software-related items are identified by bolding . Text in bold refers to items directly from the EV system software. Text in bold and underlined refers to items from the Windows operating system.

## Hardware Setup and Driver Installation Quick Start Procedure

The EV system is fully assembled and tested. The following steps were performed on a Windows 7 PC to set up the DS28E36EVKIT hardware/software:

- 1) Obtain and unpack the zip of DS28E36\_EVKIT\_ REV\_1\_6\_Light\_version.zip or newer version.
- 2) In a file viewer, double click on DS28E36\_Installer. msi to begin the installation (Figure 2 ).
- 3) The Setup Wizard opens. Click on Next , as shown in Figure 3 .
- 4) Read and check the box for the license agreement and click on Next again to install to the selected folder ( Figure 4 ).

│

## DS28E36 Evaluation System

Figure 3. DS28E36 Setup Wizard

<!-- image -->

Figure 4. License Agreement Setup Wizard

<!-- image -->

## DS28E36 Evaluation System

- 5) Click the Next button to install to the default folder ( Figure 5 ).
- 6) Unplug all Maxim adapters and click the Install button (Figure 6 ).

Figure 5. Install Folder Location

<!-- image -->

## Evaluates: DS28E36 and DS2476

- 7) When the Windows Security window appears, click the Install button (Figure 7 ).
- 8) Click the Finish button to exit the Setup Wizard ( Figure 8 ).

Figure 6. Installation

<!-- image -->

Figure 7. Windows Security Window

<!-- image -->

## DS28E36 Evaluation System

- 9) Plug in the DS9481P-300# to the PC with both DS9121AQ+ socket boards by doing the following:
- a)  Open the first burn-in socket and insert a DS2476BQ+ into one of the cavities, as shown in Figure 9 . Note: The plus (+) on the package must be on the opposite side of the marker in the socket.
- b)  Open the second burn-in socket and insert a DS28E36BQ+ into one of the cavities, following the same orientation shown in Figure 9 .
- c)  Close both burn-in sockets.
- d)  Connect the first DS9121AQ J2, 6-pin male socket header to the DS9481P-300#, 6-pin female plug, as shown in Figure 10 .
- e)  Connect the first DS9121AQ J1, 6-pin female socket into the second DS9121AQ J2, 6-pin male plug. ( Figure 10 ).

Figure 8. Finish Setup Wizard

<!-- image -->

## Evaluates: DS28E36 and DS2476

- f) For the first socket board with the DS2476, configure jumper JP1 to use SDA, jumper JP2 to use SCL, and JB1 to use 3.3V. With the DS28E36, configure the jumper JP1 to use 1W, and do not populate JP2 and JB1 (Figure 10 ).
- g)  Plug the DS28E36 EV kit into the PC using a USB Type-A to Micro-USB Type-B cable.

Figure 9. Orientation of the DS28E36 and DS2476 in the Burn-In Socket

<!-- image -->

Figure 10. DS9481P-300 and DS9121AQ

<!-- image -->

│

## DS28E36 Evaluation System

- 10) The device driver now automatically installs and a pop-up window appears when complete (Figure 11 ).
- 11) Open the DS28E36 EVKIT from the start menu → All Programs → Maxim Integrated → DS28E36 EVKIT (Light Version) .

## Evaluates: DS28E36 and DS2476

- 12) The DS28E36 EVKIT program opens automatically ( Figure 13), finding the COM port and the DS28E36/ DS2476.

Figure 11. Driver Software Installation Notice

<!-- image -->

Figure 12. Open DS28E36 EVKIT Program

<!-- image -->

## DS28E36 Evaluation System

## Detailed Description of Software

The DS28E36 evaluation program user interface ( Figure 13) has four tabs, General  Commands , SHA2  Commands , ECDSA  Commands ,  and Other Coprocessor  Commands .  The Setup section  is  used to make the device selections that apply to the General Commands , SHA2  Commands , ECDSA  Commands , and Other  Coprocessor  Commands tabs.  Here  is  a summary of the function for each tab of the full developer software:

- General Commands is used as the main tool to evaluate the DS28E36/DS2476 general functions to write or read from the user memory pages, crypto-related memory pages, decrement counter, RNG, and protection registers.

Evaluates: DS28E36 and DS2476

- SHA2 Commands is used to evaluate the DS28E36/ DS2476 symmetric (SHA-256) security function commands.
- ECDSA Commands is used to evaluate the DS28E36/DS2476 integrated asymmetric (ECC-P256) security function commands.
- Other Coprocessor Commands is used to evaluate the DS2476 coprocessor that computes any required HMACs or ECDSA signatures with its additional command set to do any operations on the DS28E36. Note: Grayed out when DS28E36 is selected.

All tabs include a communications Log area consisting of an I 2 C Log or 1-Wire Log output.

Figure 13. DS28E36 EVKIT Developer Software (Note: The light version is similar, but includes fewer features)

<!-- image -->

## Ordering Information

| PART          | TYPE      |
|---------------|-----------|
| DS28E36EVKIT# | EV System |

# Denotes RoHS compliant.

## DS28E36 Evaluation System

## DS9481P-300 Bill of Materials

| Designator                   | Quantity Description                              | Manufacturer                            | Part Number                             |
|------------------------------|---------------------------------------------------|-----------------------------------------|-----------------------------------------|
| C1, C2, C4, C7, C9, C11, C12 | 7 1uF Ceramic Capacitor (0402)                    | TDK Corporation                         | C1005X5R0J105M050BB                     |
| C3, C8, C13                  | 3 0.1uF Ceramic Capacitor (0402)                  | TDK Corporation                         | C1005X5R0J104K050BA                     |
| C5, C6                       | 2 10pF Ceramic Capacitor (0603)                   | TDK Corporation                         | C1608C0G1H100D080AA                     |
| C10                          | 1 10pF Ceramic Capacitor (0402)                   | MURATA                                  | GRM1555C1H100J                          |
| CN1                          | 1 USB Micro B Connector                           | FCI                                     | 10103594-0001LF                         |
| D1                           | 1 Orange LED (0603)                               | Panasonic                               | LNJ826W83RA                             |
| FB1, FB2                     | 2 Ferrite (0603)                                  | Murata Electronics North BLM18KG221SN1D | Murata Electronics North BLM18KG221SN1D |
| J1                           | 1 PMOD Receptacle                                 | Samtec                                  | SSW-106-02-T-S-RA                       |
| Q1                           | 1 N-Channel MOSFET(SOT-23)                        | Diodes Inc.                             | 2N7002-7                                |
| Q2                           | 1 P-Channel MOSFET (SOT-23)                       | International Rectifier                 | PMV65XP,215                             |
| R1                           | 1 10 Ω Resistor (0603)                            | Vishay Dale                             | CRCW060310R0JNEA                        |
| R2                           | 1 1.5kΩ Resistor (0402)                           | Vishay Dale                             | CRCW04021K50JNED                        |
| R3, R6, R7                   | 3 100kΩ 1% Resistor (0402)                        | Vishay Dale                             | CRCW0402100KFKED                        |
| R4                           | 1 32.4kΩ 1% Resistor (0402)                       | Vishay Dale                             | CRCW040232K4FKED                        |
| R5                           | 1 4.7kΩ Resistor (0402)                           | Panasonic                               | ERJ-2GEJ472X                            |
| R8                           | 1 1kΩ Resistor (0402)                             | Vishay Dale                             | CRCW04021K00JNED                        |
| R9                           | 1 2.2kΩ Resistor (0402)                           | Panasonic                               | ERJ-2GEJ222X                            |
| R10                          | 1 499Ω Resistor (0402)                            | Vishay Dale                             | CRCW0402499RFKED                        |
| R11                          | 1 4.99Ω 1% 1/8W Resistor (0805)                   | Vishay Dale                             | CRCW08054R99FKEA                        |
| R12                          | 1 680Ω Resistor (0402)                            | Panasonic                               | ERJ-2GEJ681X                            |
| R13, R14                     | 2 1.74kΩ Resistor (0402)                          | Panasonic Electronic Co ERJ-2RKF1741X   | Panasonic Electronic Co ERJ-2RKF1741X   |
| RT1                          | 1 PTC Fuse (1206)                                 | Bourns Inc.                             | MF-NSMF012-2                            |
| S1                           | 1 Tactile Switch                                  | Omron Electronics Inc                   | B3U-1000P                               |
| U1                           | 1 Security Token Microcontroller with RTC and USB | Maxim Integrated                        | MAXQ1010-A01+                           |
| U2                           | 1 High PSRR, Low-Dropout, 150mA Linear Regulator  | Maxim Integrated                        | MAX8891EXK33+                           |
| U3                           | 1 Dual High-Speed Differential ESD-Protection IC  | Maxim Integrated                        | MAX3207EAUT+                            |
| U4                           | 1 40ns Single-Supply Comparator                   | Maxim Integrated                        | MAX9140AAXK+                            |
| U5                           | 1 4 Channel +/- 30kv ESD Protector                | Maxim Integrated                        | MAX13204EALT+                           |
| X1                           | 1 12MHz Crystal                                   | EPSON                                   | FA-238V 12.0000MB-K3                    |
| X2                           | 1 Do Not Populate (3.20x1.50mm)                   |                                         |                                         |

## DS9481P-300 Schematics

<!-- image -->

│

Evaluates: DS28E36 and DS2476

## DS28E36 Evaluation System

## DS9481P-300 PCB Layout

<!-- image -->

│

Evaluates: DS28E36 and DS2476

## DS28E36 Evaluation System

## DS9121AQ Bill of Materials

| Comment               | Description                                            | Designator                      | Footprint             | LibRef            |   Quantity |
|-----------------------|--------------------------------------------------------|---------------------------------|-----------------------|-------------------|------------|
| 0.47uF                |                                                        | C1                              | CAP0603-3D            | CAP               |          1 |
| GREEN LED             | LED INGAN GREEN CLEAR 0603 SMD                         | D1, D2                          | 0603LED-3DGREEN       | LED               |          2 |
| PMOD Input            | CONN HEADER FEMALE 6POS .1" GOLD                       | J1                              | SIP6-SOCKET2-LA-3D    | CON6              |          1 |
| PMOD Output           | CONN HEADER FEMALE 6POS .1" GOLD                       | J2                              | SIP6-HEADER-RA-LH- 3D | CON6              |          1 |
| I2CPORT (DNP)         | 4 Pin 100mil Female Connector                          | J3                              | SIP4                  | CON4              |          1 |
| JUMPBLOCK 1           |                                                        | JB1, JB2                        | SIP2SHUNT-3D          | JUMPBLOCK 1       |          2 |
| JUMPER                | HDR,BRKWAY,.100 3POS VERT,0.318"                       | JP1                             | SIP3SHUNT1-2-3D       | CON3              |          1 |
| CON2                  |                                                        | JP2                             | SIP2                  | CON2              |          1 |
| BSS138LT1G            | MOSFET N-CH 50V 200MA SOT-23                           | Q1, Q2                          | 16001-3D              | NCHAN FET         |          2 |
| 10K                   | RESSMD 1KOHM 1% 1/10W 0603, RESSMD 10KOHM 1%1/10W 0603 | R1, R2, R5, R6                  | 0603-3D               | RESISTOR          |          4 |
| 3.3k                  | RES 3.3KOHM 1/10W 1%0603 SMD                           | R3, R4                          | 0603-3D               | RESISTOR          |          2 |
| DNP                   | RESSMD 10KOHM 1% 1/10W 0603                            | R7, R8                          | 0603-3D               | RESISTOR          |          2 |
| TDFN Socket Supports: | TDFN,3MM,x2,CLAMSHELL,BURNIN U1                        | TDFN,3MM,x2,CLAMSHELL,BURNIN U1 | TDFN3X2BURN           | TDFN Socket 3x3mm |          1 |

## DS9121AQ Schematics

<!-- image -->

│

## DS28E36 Evaluation System

## DS9121AQ PCB Layout

<!-- image -->

<!-- image -->

## Evaluates: DS28E36 and DS2476

│

## DS28E36 Evaluation System

## DS9121AQ PCB Layout (continued)

<!-- image -->

## Evaluates: DS28E36 and DS2476

<!-- image -->

│

## DS28E36 Evaluation System

## DS9121AQ PCB Layout (continued)

<!-- image -->

│

Evaluates: DS28E36 and DS2476

## DS28E36 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                             | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|               0   | 12/17           | Initial release                                                                                                                                                         | -               |
|               0.1 |                 | Updated broken hyperlinks                                                                                                                                               | 2               |
|               1   | 5/18            | Updated Recommended Equipment section and Figure 10                                                                                                                     | 2, 5            |
|               2   | 7/18            | Updated DS9121AQ Bill of Materials and DS9121AQ Schematics                                                                                                              | 11              |
|               3   | 9/18            | Updated part numbers in Recommended Equipment section and Figure 10 caption                                                                                             | 2, 5            |
|               4   | 10/18           | Updated General Description , EV System Contents , Recommended Equipment , and Hardware Setup and Driver Installation Quick Start Procedure sections                    | 1, 2, 5         |
|               5   | 5/19            | Updated Quick Start section                                                                                                                                             | 2               |
|               6   | 7/19            | Updated part numbers in EV System Contents , Recommended Equipment , and Hardware Setup and Driver Installation Quick Start Procedure sections                          | 1, 2, 5         |
|               7   | 8/19            | Updated part numbers in EV System Contents , Recommended Equipment , and Hardware Setup and Driver Installation Quick Start Procedure sections, and DS9121AQ Schematics | 1, 2, 5, 11     |
|               8   | 1/20            | Updated Figure 1, Quick Start , Figure 10, DS9121AQ Bill of Materials , DS9121AQ Schematics , and PCB Layout                                                            | 1, 5, 11-14     |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: DS28E36 and DS2476