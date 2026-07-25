<!-- lastmod 2022-08-03 -->
## [Request Security User Guide and Developer Software ›](https://www.maximintegrated.com/en/app-notes/index.mvp/id/6607)

## DS28E83 Evaluation System

## General Description

The DS28E83 evaluation system (EV system) provides the hardware and software necessary to exercise the features of the DS28E83. The EV system consists of five DS28E83/ DS2476 devices in a 6-pin TDFN package, a DS9121AQ+ evaluation  TDFN  socket  board,  and  a  DS9481P-300# USB-to-I 2 C/1-Wire ®  adapter. The evaluation software runs under Windows ®  10, Windows 8, and Windows 7 operating  systems,  both  64-bit  and  32-bit  versions.  It  provides a  handy  user  interface  to  exercise  the  features  of  the DS28E83 and DS2476.

## EV Kit Contents

|   QTY | DESCRIPTION                                                         |
|-------|---------------------------------------------------------------------|
|     5 | DS28E83 DeepCover Radiation Resistant 1-Wire Authenticator (6 TDFN) |
|     5 | DS2476Q+ DeepCover Secure Coprocessor (6 TDFN)                      |
|     2 | DS9121AQ+ Socket Board (6 TDFN)                                     |
|     1 | DS9481P-300# USB to 1W/I 2 CAdapter                                 |
|     1 | USB Type-A to Micro-USB Type-B Cable                                |

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: DS28E83 and DS2476

## Features

- Demonstrates the Features of the DS28E83 DeepCover ®  Radiation Resistant 1-Wire Authenticator
- Demonstrates the Features of the DS2476 DeepCover Secure Coprocessor
- 1-Wire/I 2 C Communication Is Logged to Aid Firmware Designers Understanding of DS28E83 and DS2476
- 1-Wire/I 2 C USB Adapter Creates a Virtual COM Port on Any PC
- Fully Compliant with USB Specification v2.0
- Software Runs on Windows 10, Windows 8, and Windows 7 for Both 64-Bit and 32-Bit Versions
- 3.3V ±3% 1-Wire Operating Voltage
- Convenient On-Board Test Points, TDFN Socket
- Evaluation Software Available by Request

Ordering Information appears at end of data sheet.

<!-- image -->

## DS28E83 Evaluation System

## DS28E83 EV System

<!-- image -->

## Quick Start

This  section  includes  a  list  of  recommended  equipment and instructions on how to set up the Windows-based PC for the evaluation software.

## Required Equipment

- DS9481P-300# USB to 1-Wire/I 2 C adapter (included)
- DS9121AQ+ TDFN socket board (two included)
- DS28E83Q+ (five devices included)
- DS2476Q+ (five devices included)
- USB Type A to Micro-USB Type B cable (included)
- PC with a Windows 10, Windows 8, or Windows 7 operating system (64 bit or 32 bit) and a spare USB 2.0 or higher port
- Download DS28E83 EV kit software (light version) or  request full DS28E83 EV kit developer software .

Note: In the following sections, software-related items are identified by bolding . Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

│

## DS28E83 Evaluation System

## Hardware Setup and Driver Installation Quick Start

The following steps were performed on a Windows 7 PC to set up the DS28E83 EV kit hardware/software:

- 1) Obtain and unpack the DS28E83\_EV\_Kit\_Software\_
2. Setup\_V1.0.0.zip file, or the latest version.
- 2) In a file viewer ( Figure 1), double click on DS28E83\_ EV\_Kit\_Software\_Setup\_V1.0.0.exe to  begin the installation.
- 3) The setup wizard opens; click on Next , as shown in Figure 2.

Figure 1. File Viewer

<!-- image -->

Figure 2. DS28E83 Setup Wizard

<!-- image -->

│

- 4) Click Browse to select a default folder location, and then click Next to install the EV kit software (Figure 3).

Figure 3. Install Folder Location

<!-- image -->

- 5) Click Next to install shortcuts to the default folder (Figure 4).

Figure 4. Program Shortcuts Location

<!-- image -->

- 6) Unplug any Maxim adapter and click on Next , with the default settings checked. This selects and installs the DS9481P-300# driver, which is needed to communicate through the USB via a virtual COM port (Figure 5).

Figure 5.Select to Install the Driver

<!-- image -->

- 7) Next click on Install . A new window pops up to show the installing progression (Figure 6).

Figure 6. Ready to Install

<!-- image -->

- 8) Click on Next when the Device Driver Installation Wizard appears (Figure 7).

Figure 7. Device Driver

<!-- image -->

- 9) Click on Finish to close the final window and confirm the driver is installed correctly ( Figure 8).

Figure 8. Device Driver Installation Finished

<!-- image -->

## DS28E83 Evaluation System

- 10)  Plug  the  DS9481P-300#  into  the  PC  with  both DS9121AQ+ socket boards by doing the following:
- a)  (Optional-Perform  only  if  using  the  coprocessor):  Open  the  1st  socket  and  insert  a  DS2476 into  one  of  the  cavities,  as  shown  in  Figure  9. Note: The plus (+) on the package must be on the opposite side of the marker in the socket.
- b)  Open the 2nd socket and insert a DS28E83 into one of the cavities, per the same orientation shown in Figure 9.
- c)  Close both burn-in sockets.

## Evaluates: DS28E83 and DS2476

- d)  Connect the 1st DS9121AQ J2, 6-pin female socket,  into  the  DS9481P-300#,  6-pin  male  plug  per Figure 10.
- e)  Connect  the  2nd  DS9121AQ  J2,  6-pin  female socket, into the 1 st  DS9121AQ J1, 6-pin male plug per Figure 10.
- f)  For the 1st DS9121AQ+ socket boards that contains DS2476, configure jumpers JP1 to use SDA and JB1 to use 3.3V per Figure 10.
- g)  For the 2nd DS9121AQ+ socket boards that contains DS28E83, configure jumpers JP1 to use 1W and JB1 do not install per Figure 10.
- h)  Plug the DS28C83 EV kit, using a USB Type-A to Micro-USB Type-B cable, into the PC.

Figure 9. Orientation of the DS28E83 and DS2476 in the Burn-In Socket

<!-- image -->

Figure 10. DS9481QA-300# and DS9121AQ

<!-- image -->

│

- 11)  Click on Finish to close the final window and confirm the software is installed correctly ( Figure 11).

Figure 11. Software Installation Finished

<!-- image -->

## DS28E83 Evaluation System

- 12)  The DS28E83 EV kit program opens and automatically connects to the COM port. This can be verified

Evaluates: DS28E83 and DS2476

in the lower right corner of the window, as shown in Figure 12.

Figure 12. DS28E83 EV Kit Program (Default View Upon Opening)

<!-- image -->

## DS28E83 Evaluation System

## EV Kit Supported Functions

## Detailed Hardware Description

The  DS28E83  EV  kit  program  is  designed  as  a  usage example. It  includes  the  ability  to  either  use  the  built-in software ECDSA engine or the DS2476Q+ coprocessor as the host compute engine. The default is to use the software ECDSA engine. To use the coprocessor, go under the Settings menu,  then ECDSA  Engine ,  and  select DS28E83Q+T .  The  GUI displays all the I 2 C and 1-Wire sequences for each step performed to assist the firmware engineer. See Table 1 for descriptions of the functions in the GUI.

The DS28E83 EV kit hardware includes the MAXQ1010 microcontroller  with  USB  and  two  DS9121AQ  socket adapters  that  are  made  to  contain  the  DS28E83  device or  DS2476  device.  The  MAXQ1010  is  loaded  with  firmware to function as a virtual COM port that bridges UART signaling  to  I 2 C  and  1-Wire.  Optionally,  the  DS2476 functions to off load the ECDSA computations to perform signature. The DS28E83 1-Wire slave functions to perform ECDSA Public-Key signatures during authentication and contains memory space for the necessary elements.

Table 1. GUI Setup and Usage Flows Supported

| FLOW*                       | DS2476 SUPPORT   | DESCRIPTION                                                                                                                                                                                                            |
|-----------------------------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Auth w/ECDSA; Setup         | X                | Use at factory to set up ECDSAauthentication.                                                                                                                                                                          |
| Auth w/ECDSA; Read          | X                | Use in field to authenticate with ECDSAfor a read page of memory.                                                                                                                                                      |
| Auth w/ECDSA; Write Auth KP | X                | Change a page of memory using the Write Authority Key Pair by a write authentication with ECDSA.                                                                                                                       |
| Auth w/ECDSA; Write App KP  | X                | Change a page of memory using the Application Key Pair by a write authentication with ECDSA. Requires the master's certificate created with the Application Public Keys and signed by the Write Authority Private key. |
| Auth w/HMAC SHA-256; Setup  |                  | Use at factory to setup authentication with HMAC.                                                                                                                                                                      |
| Auth w/HMAC SHA-256; Read   |                  | Use in field to do an authentication with HMAC for a read page(s) of memory.                                                                                                                                           |
| Auth w/HMAC SHA-256; Write  |                  | Use in field to do an authentication with HMAC for a write page of memory.                                                                                                                                             |
| ECDSAEncrypted; Setup       |                  | Use at factory to setup the host system to decrypt an encrypted page on the device.                                                                                                                                    |
| ECDSAEncrypted; Write       |                  | In the field, write an encrypted page to the device with ECDSAprotected by ECH.                                                                                                                                        |
| ECDSAEncrypted; Read        |                  | In the field, read encrypted data from the device with ECDSAand decrypt with the host system.                                                                                                                          |
| Secure Boot w/ ECDSA; Setup |                  | Use to set up secure boot for the device in the factory.                                                                                                                                                               |
| Secure Boot w/ ECDSA; Usage |                  | Usage select flow to be applied for secure boot of the device in the field.                                                                                                                                            |
| Miscellaneous               |                  | Miscellaneous features (e.g., RNG function, ROM options, GPIO control) of the device.                                                                                                                                  |

│

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| DS28E83EVKIT# | EV Kit |

#Denotes RoHS compliant.

## DS9121AQ EV Kit Bill of Materials

| DESIGNATOR     |   QTY | DESCRIPTION                                                 | MANURACTURER                               | PART NO.          |
|----------------|-------|-------------------------------------------------------------|--------------------------------------------|-------------------|
| J3             |     1 | 4 Pin 100mil Female Connector                               | Samtec                                     | SSQ-104-02-T-S-RA |
| R3, R4         |     2 | RES 3.3K OHM 1/10W 1% 0603 SMD                              | Panasonic Electronic Components            | ERJ-3EKF3301V     |
| R1, R2, R5, R6 |     4 | RES SMD 1K OHM 1% 1/10W 0603, RES SMD 10K OHM 1%            | 1/10W 0603 Panasonic Electronic Components | ERJ-3EKF1002V     |
| R7, R8         |     2 | RES SMD 10K OHM 1% 1/10W 0603                               | Panasonic Electronic Components            | ERJ-3EKF1002V     |
| C1             |     1 | CAP CER 0.47UF 16V X7R 060                                  | Kemet                                      | C0603C474K4RACTU  |
| Q1, Q2         |     2 | MOSFET N-CH 50V 200MA SOT-23                                | ON SEMICONDUCTOR                           | BSS138LT1G        |
| D1, D2         |     2 | LED INGAN GREEN CLEAR 0603 SMD                              | Dialight                                   | 598-8081-107F     |
| J1             |     1 | CONN HEADER FEMALE 6POS .1" GOLD                            | TE Connectivity                            | 9-146285-0        |
| J2             |     1 | CONN HEADER FEMALE 6POS .1" GOLD                            | TE Connectivity                            | 9-146285-0        |
| JP1            |     1 | HDR,BRKWAY,.100 3POS VERT,0.318"                            | Tyco Electronics                           | 9-146276-0        |
| U1             |     1 | TDFN,3MM,x2,CLAMSHELL,BURNIN                                | PLASTRONICS                                | 06QN10T23030      |
| JB1, JB2       |     2 | JUMPER BLOCK, .100 2POS VERT,0.318"                         | Tyco Electronics                           | 22-28-4363        |
| Pack Out       |     5 | DEEPCOVER SECURE COPROCESSOR                                | Maxim Integrated                           | DS2476Q+          |
| Pack Out       |     5 | 10Kb OTP DeepCover Radiation Resistant 1-Wire Authenticator | Maxim Integrated                           | DS28E83Q+         |
| Pack Out       |     3 | SHUNT+,LP W/HANDLE 2 POS 30AU                               | Tyco Electronics                           | 881545-2          |

│

## DS28E83 EV Kit Schematic

<!-- image -->

## DS28E83 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION           | PAGES CHANGED   |
|-------------------|-----------------|-----------------------|-----------------|
|                 0 | 3/18            | Initial release       | -               |
|               0.1 | 9/18            | Corrected broken link | 1               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: DS28E83 and DS2476