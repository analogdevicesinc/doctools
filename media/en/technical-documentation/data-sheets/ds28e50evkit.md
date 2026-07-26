<!-- lastmod 2022-08-03 -->
<!-- image -->

Click here for production status of specific part numbers.

## DS28E50 Evaluation Kit

## General Description

The DS28E50 evaluation kit (EV kit) provides the hardware and  software  necessary  to  exercise  the  features  of  the DS28E50  and  DS2477.  The  EV  system  consists  of  five DS28E50 and DS2477 devices in a 6-pin TDFN package, two DS9121BQ+ evaluation TDFN socket boards, and a DS9481P-300# USB-to-I 2 C/1-Wire ®  adapter. The evaluation software runs on Windows ®  10 and Windows 7 operating systems. It provides a handy user interface to exercise the features of the DS28E50 and DS2477. Note that the evaluation software described herein is the lite version that is downloadable from Maxim's website. To request the full developer version, click the link at the top of the page.

## Features

- Demonstrates the Features of the DS28E50 DeepCover ®  SHA3 1-Wire Authenticator
- Demonstrates the Features of the DS2477 DeepCover SHA3 Secure Coprocessor
- 1-Wire Communication Is Logged to Aid Firmware Designers Understanding of DS28E50 and DS2477
- 1-Wire/I 2 C USB Adapter Creates a Virtual COM Port on Any PC
- Fully Compliant with USB Specification v2.0
- Software Runs on Windows 10 and Windows 7
- Convenient On-Board Test Points, TDFN Socket

## EV Kit Contents

|   QTY | DESCRIPTION                                   |
|-------|-----------------------------------------------|
|     5 | DS28E50Q+ DeepCover SHA3 1-Wire Authenticator |
|     5 | DS2477Q+ DeepCover SHA3 Secure Coprocessor    |
|     2 | DS9121BQ+ TDFN Socket Board                   |
|     1 | DS9481P-300# USB to 1-Wire/I 2 CAdapter       |
|     1 | USB Type-A to Micro-USB Type-B Cable          |

DeepCover and 1-Wire are registered trademarks of Maxim Integrated Products, Inc.

Windows is a registered is a registered trademark and service mark of Microsoft Corporation.

Evaluates: DS28E50 and DS2477

## Quick Start

## Required Equipment

This  section  includes  a  list  of  recommended  equipment and instructions on how to set up the Windows-based PC for the evaluation software.

- DS9481P-300# USB to 1-Wire/I 2 C adapter (included)
- DS9121BQ+ TDFN socket board (two included)
- DS28E50Q+ (five devices included)
- DS2477Q+ (five devices included)
- USB Type A to Micro-USB Type B cable (included)
- PC with a Windows 10 or Windows 7 operating system and a spare USB 2.0 or higher port
- Download DS28E50 EV kit software (lite version) or request full DS28E50 EV kit developer software.

Note: In the following sections, software-related items are identified by bolding . Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

Ordering Information appears at end of data sheet.

<!-- image -->

## DS28E50 Evaluation Kit

## Hardware Setup and Driver Installation Quick Start

The following steps were performed on a Windows 10 PC to set up the DS28E50 EV kit hardware/software:

- 1) Obtain and unpack the DS28E50EVkit\_Lite.zip file , or the latest version.
- 2) Unplug any Maxim adapters before installing software.

## Evaluates: DS28E50 and DS2477

- 3) The DS9481P-300# driver is required to communicate through the USB via a virtual COM port. If DS9481 device driver is not installed:
- a) Open folder DS9481\_driver\_Installer (Figure 1).
- b) Run dpinst.exe (Figure 2).
- c) Click Next on the Device Driver Installation Wizard window (Figure 3).
- d) Click Finish on the Device Driver Installation Wizard window (Figure 4).
- 4) Plug in the DS9481 adapter.

Figure 1. File Viewer with DS28E50 Installer and DS9481 Device Driver Installer

<!-- image -->

Figure 2. File Viewer with DS9481 Device Driver Installation File

<!-- image -->

│

Figure 3. DS9481 Device Driver Installation Wizard

<!-- image -->

Figure 4.  DS9481 Device Driver Installation Finished

<!-- image -->

- 5) Go back to the DS28E50EVkit\_Lite folder and open the DS28E50\_EVkitLite\_Installer folder and run DS2477DS28E50GUILiteSetupV02.exe (Figure 5).
- 6) The software license agreement will open. Read through the terms and select I accept the agreement and click OK to install the software (Figure 6).

Figure 5. DS28E50/DS2477 EV Kit Installer File

<!-- image -->

Figure 6. DS28E50 EV Kit Software License Agreement

<!-- image -->

│

- 7) Go to the Windows Start menu and click on DS28E50EVkitLite under the Maxim Integrated Products folder to launch the DS28E50 EV Kit program (Figure 7).

Figure 7. DS28E50 EV Kit Lite Software Program File in Windows Start in the Maxim Integrated Products Folder.

<!-- image -->

## DS28E50 Evaluation Kit

- 8) Plug the DS9481P-300# into the PC with one or both DS9121BQ+ socket boards by doing the following:
- a) (Optional-Perform only if using the coprocessor): Open the 1st socket and insert a DS2477 into one of the cavities, as shown in Figure 8. Note: The plus (+) must be oriented in the bottom left corner of the socket.
- b) Open the 2nd socket and insert a DS28E50 into the cavity, per the same orientation shown in Figure 8, with the plus (+) oriented in the bottom left corner of the socket.
- c) Close both burn-in sockets.

## Evaluates: DS28E50 and DS2477

Figure 8. DS28E50 and DS2477 Orientation in Burn-In Socket

<!-- image -->

Figure 9. DS9481 Connected to DS28E50

<!-- image -->

## DS28E50 Evaluation Kit

- d) Connect the 1st DS9121BQ J2, 6-pin male plug, into the DS9481P-300#, 6-pin female socket per Figure 10.
- e) Connect the 2nd DS9121BQ J2, 6-pin male plug, into the 1st DS9121BQ J1, 6-pin female socket per Figure 10.
- f) For the 1st DS9121BQ+ socket boards that contains the DS2477, configure jumpers JB3 to

## Evaluates: DS28E50 and DS2477

use SCL, JB4 to use SDA and JB1 to use 3.3V per Figure 10.

- g) For the 2nd DS9121BQ+ socket board that contains the DS28E50, configure jumpers JB5 to use 1W per Figure 10.
- h) Plug the DS28E50 EV kit, using a USB Type-A to Micro-USB Type-B cable, into the PC.

Figure 10. DS9481 Connected to DS2477 and DS28E50

<!-- image -->

- 9) Choose the DS28E50 or DS2477 under the Device tab, shown in Figure 11 and click Run to complete the detection process.

Figure 11. DS28E50 EV Kit Main Program Screen. Choose a Device from the Device Pulldown Menu.

<!-- image -->

- 10)  Wait for the green Device Detected message to appear and the ROMID and MANID fields to populate as shown in Figure 12. If this message does not appear, check your hardware connections.

Figure 12. DS2477 Successfully Detected by the EV Kit Software

<!-- image -->

## DS28E50 Evaluation Kit

## EV Kit Supported Functions

The  DS28E50  EV  kit  program  is  designed  as  a  usage example.

The software can be used to evaluate the DS28E50 independently or in conjunction with the DS2477.

To evaluate the DS28E50 by itself, use the hardware configuration shown in Figure 9. In this case, select DS28E50 from the Device drop-down menu.  If DS2477 is selected from  the  device  menu,  the  coprocessor  (DS2477)  is

## Evaluates: DS28E50 and DS2477

used to communicate with the DS28E50. The hardware configuration  in  Figure  10  is  used  for  evaluation  of  the DS28E50 combination.

The GUI displays all the I 2 C and 1-Wire sequences for each step performed to assist the firmware engineer. See Table 1 and Table 2 for descriptions of the limited functions provided in the lite version of the EV kit GUI for both the  DS28E50 and DS2477, respectively. To request the full developer version of the program, click the link at the top of page 1.

## Table 1. GUI Setup and Usage Flows Supported in DS28E50

| FLOW*                                | DESCRIPTION                                                                                                                                                                                                 |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Detect Device                        | Reads page 7 to get ROMID and MANID.                                                                                                                                                                        |
| Compute and Read Page Authentication | Creates authentication response based on given challenge. Results in a SHA-3 signature. CRPAsequence can be done on pages 0-5. Use in field to do an authentication with HMAC for a read page(s) of memory. |
| Authenticated SHA3 Write Memory      | Use at factory to do an authenticated write to a page of memory.                                                                                                                                            |
| Read Status                          | Read page protections set on each page.                                                                                                                                                                     |
| Read Memory                          | Read any page of memory without RP or EPH protection set.                                                                                                                                                   |
| Write Memory                         | Write data to any page (0-8) without WP, APH, or EPH protection set.                                                                                                                                        |
| 1-Wire Read ROM                      | Read device ROMID.                                                                                                                                                                                          |

## Table 2. GUI Setup and Usage Flows Supported in DS2477

| FLOW*                      | DESCRIPTION                                                                                                               |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------|
| Detect DS2477              | Reads page 7 to get ROMID and MANID.                                                                                      |
| Compute HMAC               | Write the Master Secret, Bind Data, and Partial Secret and issue the Compute and Lock Secret Command to generate an HMAC. |
| Read Status                | Read page protections set on each page.                                                                                   |
| Read Memory                | Read any page of memory without RP or EPH protection set.                                                                 |
| Write Memory               | Write data to any page (0-8) without WP, APH, or EPH protection set.                                                      |
| 1-Wire Search ROM          | Search for the slave ROMID values on the 1-Wire line.                                                                     |
| DS2477 to DS28E50 Commands | Send the following commands to the DS28E50: Read Status, Read Memory and Write Memory                                     |

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| DS28E50EVKIT# | EV Kit |

│

## DS9121 BQ EV Kit Bill of Materials

| DESIGNATOR   |   QTY | DESCRIPTION                           | MANUFACTURER                | PART NO.           |
|--------------|-------|---------------------------------------|-----------------------------|--------------------|
| J1           |     1 | CONN FEMALE 6POS .100' R/AGOLD        | Sullins Connector Solutions | PPPC061LGBN-RC     |
| J2           |     1 | CONN HEADER 6 POS RA2.54              | Wurth Electronics Inc.      | 61300611021        |
| TP1-TP6      |     6 | TEST POINT PC MULTI PURPOSE BLK       | Keystone Electronics        | 5011               |
| U1           |     1 | SOCKET+, IC TDFN, 3MM, 3x2, CLAMSHELL | PLASTRONICS                 | 06QN10T23030       |
| C1           |     1 | CAP CER 0.47UF 16V X7R 0603           | KEMET                       | C0603C474K4RACTU   |
| D1           |     1 | LED GREEN CLEAR 0603 SMD              | Dialight                    | 5988081107F        |
| JB1-JB5      |     5 | CONN HEADER 2 POS 2.54                | Wurth Electronics Inc.      | 61300211121        |
| Q1           |     1 | MOSFET N-CH 50V 200MA SOT-23          | ON Semiconductor            | BSS138LT1G         |
| R1, R3       |     2 | RES SMD 10K OHM 0.1% 1/10W 0603       | Bourns Inc.                 | CRT0603-BY-10R0ELF |
| R2           |     1 | RES SMD, 3.3K OHM, 1%, 0603           | Yageo                       | RC0402JR-071K5L    |

│

## DS28E50/DS2477 EV Kit Schematic

<!-- image -->

│

## DS28E50 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                               | PAGES CHANGED          |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|
|                 0 | 8/18            | Initial release                                                                                                                                                                                                                           | -                      |
|                 1 | 10/18           | Added DS2477                                                                                                                                                                                                                              | 1-15                   |
|                 2 | 2/19            | Updated General Description , Quick Start , Hardware Setup and Driver Installation Quick Start , Figure 6 caption, Figure 7 caption, Figure 11 caption, EV Kit Supported Functions section, Ordering Information , and replaced schematic | 1, 5, 6, 9, 10, 12, 14 |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: DS28E50 and DS2477