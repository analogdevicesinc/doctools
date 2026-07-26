<!-- lastmod 2022-08-03 -->
<!-- image -->

Click here for production status of specific part numbers.

## DS28C16 Evaluation Kit

## General Description

The DS28C16 evaluation kit (EV kit) provides the hardware and  software  necessary  to  exercise  the  features  of  the DS28C16. The EV system consists of five DS28C16 and DS2477 devices in an 8- and 6-pin TDFN package, respectively,  a  DS9121DQ+  and  DS9121BQ+  evaluation  TDFN socket  board,  and  a  DS9481P-300#  USB-to-I 2 C/1-Wire® adapter. The evaluation software runs under Windows® 10, Windows 8, and Windows 7 operating systems, both 64-bit and 32-bit versions. It provides a handy user interface to exercise the features of the DS28C16.

## Features

- Demonstrates the Features of the DS28C16 DeepCover® SHA-3 I 2 C Authenticator
- Logs I 2 C Communication to Aid Firmware Designer's Understanding of the DS28C16
- 1-Wire/I 2 C USB Adapter Creates a Virtual COM Port on Any PC
- Fully Compliant with USB Specification v2.0
- Software Runs on Windows 10, Windows 8, and Windows 7
- Convenient On-Board Test Points and TDFN Socket

## EV Kit Contents

|   QTY | DESCRIPTION                                             |
|-------|---------------------------------------------------------|
|     5 | DS28C16 DeepCover SHA-3 I 2 CAuthenticator (8-pin TDFN) |
|     5 | DS2477Q+ DeepCover SHA-3 Coprocessor (6-pin TDFN)       |
|     1 | DS9121BQ+ Socket Board (6-pin TDFN)                     |
|     1 | DS9121DQ+ Socket Board (8-pin TDFN)                     |
|     1 | DS9481P-300# USB to 1-Wire/I2C Adapter                  |
|     1 | USB Type-A to Micro-USB Type-B Cable                    |

Windows is a registered trademark and service mark of Microsoft Corporation.

1-Wire and DeepCover are registered trademarks of Maxim Integrated Products, Inc.

Evaluates: DS28C16 and DS2477

## Quick Start

## Required Equipment

This  section  includes  a  list  of  recommended  equipment and instructions on how to set up the Windows-based PC for the evaluation software.

- DS9481P-300# USB to 1-Wire/I 2 C adapter (included)
- DS9121BQ+ TDFN socket board (included)
- DS9121DQ+ TDFN socket board (included)
- DS28C16Q+ (five included)
- DS2477Q+ (five included)
- USB Type A to Micro-USB Type B cable (included)
- PC with a Windows 10, Windows 8, or Windows 7 operating system (64 bit or 32 bit) and a spare USB 2.0 or higher port
- Download DS28C16 Evaluation Kit Light Version software or request full DS28C16 Evaluation Kit software.

Ordering Information appears at end of data sheet.

<!-- image -->

## DS28C16 Evaluation Kit

## Procedure

The following steps were performed on a Windows 10 PC to set up the DS28C16 EV kit hardware/software:

- 1) Obtain the DS28C16\_Evaluation\_Kit\_Setup\_ V1.0.exe file or the latest version.
- 2) In a file viewer double click on DS28C16\_Evaluation\_ Kit\_Setup\_V1.0.exe to begin the installation.
- 3) Complete all steps of the interactive installation wizard. The software opens by default when the installation is complete.
- 4) Open the DS9121DQ+ socket, insert a DS28C16 into the cavity per the same orientation shown in Figure 1, and close the burn-in socket.
- 5) Connect the DS9121DQ+ to the DS9481P-300# per Figure 2.
- 6) Open the DS9121BQ+ socket, insert a DS2477 into
7. the cavity per the same orientation shown in Figure 1, and close the burn-in socket.
- 7) Configure the second DS9121BQ+ socket board for DS2477 by setting jumpers JB1, JB3, and JB4 per Figure 3.
- 8) For select flows in the software that use the DS2477 coprocessor, connect both DS9121DQ+ and DS9121BQ+ boards to the DS9481P-300# as shown in Figure 3 . For all other flow, connect only the DS9121DQ+ board containing a DS28C16 to the DS9481P-300# as shown in Figure 2.
- 9) Connect the DS9481P-300# to the PC using a USB Type-A to Micro-USB Type-B cable.
- 10) Select a flow from the top-left panel in the program and click on the Run button to start the demo as shown in Figure 4. More information about the available flows is available in Table 1.

## Evaluates: DS28C16 and DS2477

Figure 1. Orientation in Burn-In Socket

<!-- image -->

│

Figure 2. DS28C16 Connected to DS9481P-300#

<!-- image -->

Figure 3. DS2477 Connected to DS9481P-300# and DS28C16

<!-- image -->

Figure 4. Main Program Screen

<!-- image -->

## Table 1. Program Flows

| FLOW                          | DESCRIPTION                                                                                                                     |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| Configure Device              | Configure DS28C16 memory page data, memory page protections, and disable device setup.                                          |
| Read Device                   | Read all available information from the device including memory page data, memory page protections, MAN ID, and device version. |
| Configure Coprocessor         | Configure DS2477 coprocessor with Master Secret for the Authenticate with Coprocessor flow.                                     |
| Authenticate with Coprocessor | Authenticate DS28C16 with DS2477 coprocessor used for cryptographic and I 2 C operations.                                       |
| Authenticate with Software    | Authenticate DS28C16 with software used for cryptographic operations.                                                           |
| Decrement Counter             | Decrement the DS28C16 counter. Page 2 must have been set in the Configure Device flow.                                          |
| Disable Device                | Permanently disable DS28C16 device. The disable device password must have been set in the Configure Device flow.                |

## Table 2. I 2 C Communication Legend

| NOTATION   | DETAILS                  |
|------------|--------------------------|
| HH         | Written byte             |
| [HH]       | Read byte                |
| S          | Start condition          |
| P          | Stop condition           |
| <DELAYn>   | Delay for n milliseconds |

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| DS28C16EVKIT# | EV Kit |

#Denotes RoHS compliance.

Evaluates: DS28C16 and DS2477

│

## DS28C16 EV Kit Bill of Materials

| COMMENT                    | DESCRIPTION                     | DESIGNATOR   | PART NUMBER       |   QUANTITY | MANUFACTURE NAME                |
|----------------------------|---------------------------------|--------------|-------------------|------------|---------------------------------|
| DS28C16 8P TDFN 2x2 Socket | DS28C16 8P TDFN 2x2 Socket      | U1           | 08QN50T22020      |          1 | Plastronics                     |
| 0.47uF                     | CAP+,0.47uF,10%,16V,X7R,0603    | C1           | C0603C474K4RACTU  |          1 | KEMET CORPORATION               |
| PMOD Input                 | CONN RCPT .100" 6POS R/A SGL SN | J1           | SSW-106-02-T-S-RA |          1 | Samtec Inc.                     |
| PMOD Output                | CONN HEADER 6POS .1" GOLD       | J2           | TSW-150-08-G-S-RA |          1 | Samtec                          |
| I2C PORT (DNP)             | CONN RCPT 4POS 0.1 TIN PCB R/A  | J3           | SSQ-104-02-T-S-RA |          1 | Samtec                          |
| Extra Port (DNP)           | CONN HEADER VERT 2POS 2.54MM    | J4           | PEC02SAAN         |          1 | Sullins Connector Solutions     |
| DNP                        | RES SMD 10K OHM 1% 1/10W 0603   | R1, R2       | ERJ-3EKF1002V     |          2 | Panasonic Electronic Components |

## DS28C16 EV Kit Schematic

<!-- image -->

│

## DS28C16 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: DS28C16 and DS2477