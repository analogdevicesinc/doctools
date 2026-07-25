<!-- lastmod 2022-08-03 -->
## [Request DS28E16 Security User Guide](https://www.maximintegrated.com/en/app-notes/index.mvp/id/6795)

Click here for production status of specific part numbers.

## DS28E16 Evaluation Kit

## General Description

The DS28E16 evaluation kit (EV kit) provides the hardware and software necessary to exercise the features of the DS28E16. The EV system consists of five DS28E16 and  DS2477  devices  in  a  6-pin  TDFN  package,  two DS9121BQ+  evaluation  TDFN  socket  boards,  and  a DS9481P-300# USB-to-I 2 C/1-Wire® adapter. The evaluation software runs under Windows® 10, Windows 8, and Windows 7 operating systems, both 64-bit and 32-bit versions. It provides a handy user interface to exercise the features of the DS28E16.

## Features

- Demonstrates the Features of the DS28E16 DeepCover® SHA-3 1-Wire Authenticator
- Logs 1-Wire/I 2 C Communication to Aid Firmware Designer's Understanding of the DS28E16
- 1-Wire/I 2 C USB Adapter Creates a Virtual COM Port on Any PC
- Fully Compliant with USB Specification v2.0
- Software Runs on Windows 10, Windows 8, and Windows 7
- Convenient On-Board Test Points and TDFN Socket

## EV Kit Contents

|   QTY | DESCRIPTION                                               |
|-------|-----------------------------------------------------------|
|     5 | DS28E16 DeepCover SHA-3 1-Wire Authenticator (6-pin TDFN) |
|     5 | DS2477Q+ DeepCover SHA-3 Coprocessor (6-pin TDFN)         |
|     2 | DS9121BQ+ Socket Board (6-pin TDFN)                       |
|     1 | DS9481P-300# USB to 1-Wire/I2C Adapter                    |
|     1 | USB Type-A to Micro-USB Type-B Cable                      |

Windows is a registered trademark and service mark of Microsoft Corporation.

1-Wire and DeepCover are registered trademarks of Maxim Integrated Products, Inc.

Evaluates: DS28E16 and DS2477

## Quick Start

## Required Equipment

This  section  includes  a  list  of  recommended  equipment and instructions on how to set up the Windows-based PC for the evaluation software.

- DS9481P-300# USB to 1-Wire/I 2 C adapter (included)
- DS9121BQ+ TDFN socket board (two included)
- DS28E16Q+ (five included)
- DS2477Q+ (five included)
- USB Type A to Micro-USB Type B cable (included)
- PC with a Windows 10, Windows 8, or Windows 7 operating system (64 bit or 32 bit) and a spare USB 2.0 or higher port
- Download DS28E16 Evaluation Kit Light Version software or request full DS28E16 Evaluation Kit software.

Ordering Information appears at end of data sheet.

<!-- image -->

## DS28E16 Evaluation Kit

## Procedure

The following steps were performed on a Windows 10 PC to set up the DS28E16 EV kit hardware/software:

- 1) Obtain the DS28E16\_Evaluation\_Kit\_Setup\_ V1.0.0.exe file or the latest version.
- 2) In a file viewer double click on DS28E16\_Evaluation\_ Kit\_Setup\_V1.0.0.exe to begin the installation.
- 3) Complete all steps of the interactive installation wizard. The software opens by default when the installation is complete.
- 4) Open the first DS9121BQ+ socket, insert a DS28E16 into the cavity per the same orientation shown in Figure 1, and close the burn-in socket.
- 5) Configure the first DS9121BQ+ socket board for DS28E16 by setting jumper JB5 per Figure 2.
- 6) Open the second DS9121BQ+ socket, insert a
7. DS2477 into the cavity per the same orientation shown in Figure 1, and close the burn-in socket.
- 7) Configure the second DS9121BQ+ socket board for DS2477 by setting jumpers JB1, JB3, and JB4 per Figure 3.
- 8) For select flows in the software that use the DS2477 coprocessor, connect both DS9121BQ+ boards to the DS9481P-300# as shown in Figure 3. For all other flow, connect only the first DS9121BQ+ board containing a DS28E16 to the DS9481P-300# as shown in Figure 2.
- 9) Connect the DS9481P-300# to the PC using a USB Type-A to Micro-USB Type-B cable.
- 10) Select a flow from the top-left panel in the program and click on the Run button to start the demo as shown in Figure 4. More information about the available flows is available in Table 1.

## Evaluates: DS28E16 and DS2477

Figure 1. Orientation in Burn-In Socket

<!-- image -->

│

Figure 2. DS28E16 Connected to DS9481P-300#

<!-- image -->

Figure 3. DS2477 Connected to DS9481P-300# and DS28E16

<!-- image -->

Figure 4. Main Program Screen

<!-- image -->

## Table 1. Program Flows

| FLOW                          | DESCRIPTION                                                                                                                     |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| Configure Device              | Configure DS28E16 memory page data, memory page protections, and disable device setup.                                          |
| Read Device                   | Read all available information from the device including memory page data, memory page protections, MAN ID, and device version. |
| Configure Coprocessor         | Configure DS2477 coprocessor with Master Secret for the Authenticate with Coprocessor flow.                                     |
| Authenticate with Coprocessor | Authenticate DS28E16 with DS2477 coprocessor used for cryptographic and 1-Wire operations.                                      |
| Authenticate with Software    | Authenticate DS28E16 with software used for cryptographic operations.                                                           |
| Decrement Counter             | Decrement the DS28E16 counter. Page 2 must have been set in the Configure Device flow.                                          |
| Disable Device                | Permanently disable DS28E16 device. The disable device password must have been set in the Configure Device flow.                |

## Table 2. 1-Wire Communication Legends

| TBD      | TBD                          |
|----------|------------------------------|
| HH       | Written byte                 |
| [HH]     | Read byte                    |
| RP       | Reset with presence pulse    |
| RN       | Reset with no presence pulse |
| <SP_ON>  | Strong pull-up on            |
| <SP_OFF> | Strong pull-up off           |
| <STD>    | Standard speed               |
| <OVR>    | Overdrive speed              |
| <DELAYn> | Delay for n milliseconds     |

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| DS28E16EVKIT# | EV Kit |

## Table 3. I 2 C Communication Legend

| TBD   | TBD             |
|-------|-----------------|
| HH    | Written byte    |
| [HH]  | Read byte       |
| S     | Start condition |
| P     | Stop condition  |

│

Evaluates: DS28E16 and DS2477

## DS28E16 EV Kit Bill of Materials

| DESIGNATOR   |   QTY | DESCRIPTION                           | MANUFACTURER                | PART NUMBER        |
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

## DS28E16 EV Kit Schematic

<!-- image -->

│

## DS28E16 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: DS28E16 and DS2477