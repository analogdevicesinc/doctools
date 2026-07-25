<!-- lastmod 2022-08-02 -->
<!-- image -->

Evaluates: DS28E30

## General Description

The DS28E30 evaluation kit (EV kit) provides the hardware and software necessary to exercise the features of the DS28E30. The EV system consists of five DS28E30 in  WLP  package  mounted  on  an  interface  PCB,  along with a DS9481P-300# USB-to-I 2 C/1-Wire ®  adapter. The evaluation  software  runs  under  Windows ®   10,  8,  and  7 operating systems for 64-bit and 32-bit versions. It provides a convenient user interface to exercise the features of the DS28E30.

## Features

- Demonstrates the Features of the DS28E30 DeepCover ®  ECDSA Secure Authenticator
- 1-Wire Communication is Logged to Aid Firmware Designers Understanding of DS28E30
- 1-Wire/I 2 C USB Adapter Creates a Virtual COM Port on Any PC
- Fully Compliant with USB Specification v2.0
- Software Runs on Windows 10, 8, and 7 for 64-Bit and 32-Bit Versions
- 3.3V ±3% 1-Wire Operating Voltage
- Evaluation Software Available by Request

Ordering Information appears at end of data sheet.

1-Wire and DeepCover are registered trademarks of Maxim Integrated Products, Inc.

Windows is a registered trademark of Microsoft Corporation.

©

## [Request DS28E30 Security User Guide](http://www.maximintegrated.com/AN7404)

Click here to ask an associate for production status of specific part numbers.

## DS28E30 Evaluation Kit

## EV Kit Contents

|   QTY | DESCRIPTION                               |
|-------|-------------------------------------------|
|     5 | DS28E30X+ interface PCB boards            |
|     1 | DS9481P-300# USB to I 2 C /1-Wire Adapter |
|     1 | USB Type-A to Micro-USB Type-B Cable      |

#Denotes RoHS compliance.

- +Denotes a lead(Pb)-free/RoHS-compliant package.

## DS28E30 EV System

<!-- image -->

319-100727; Rev 1; 1/22

owners.

## DS28E30 Evaluation Kit

## Quick Start

This  section  includes  a  list  of  recommended  equipment and instructions on how to set up the Windows-based PC for the evaluation software.

## Required Equipment

- DS9481P-300# USB to I 2 C/SPI/1-Wire Adapter (included)
- DS28E30X+Interface PCB (five included)
- USB Type A to Micro-USB Type B cable (included)
- PC with a Windows 10, 8, or 7 operating system (64-bit or 32-bit) and a spare USB 2.0 or higher port
- Download DS28E30 EV kit software (light version) or request full DS28E30 EV kit developer software

Evaluates: DS28E30

Note: In the following sections, software-related items are identified by bolding . Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Hardware Setup and Driver Installation Quick Start

The  following  steps  were  performed  on  a  Windows  10 PC to set up the DS28E30 EV kit hardware and software:

- 1) Obtain and unpack the DS28E30\_Evaluation\_Kit\_ Lite\_Version\_Setup\_V1\_0\_0 file or the latest version.
- 2) In a file viewer ( Figure 1), double-click the DS28E30\_Evaluation\_Kit\_Lite\_Version\_Setup\_ V1\_0\_0.exe file to begin the installation.

Figure 1. File Viewer

<!-- image -->

│

## DS28E30 Evaluation Kit

- 3) On the Setup window, click Next (Figure 2).

Figure 2. DS28E30 Setup Wizard

<!-- image -->

## DS28E30 Evaluation Kit

- 4) On the Device Driver Installation Wizard screen, click Next and follow the instructions. (Figure 3).

Evaluates: DS28E30

- 5) On the Completing the Device Driver Installation Wizard screen, click Finish to complete the installation of the EV kit software and required drivers (Figure 4).

Figure 3. DS9481P-300# Driver Installation.

<!-- image -->

Figure 4. Finish DS9481P-300# Drivers Installation

<!-- image -->

│

## DS28E30 Evaluation Kit

- 6) Select the Launch DS28E30\_Evaluation\_Kit Lite Version check box, then click Finish to open the program (Figure 5).
- 7) Connect the DS28E30 Interface PCB board into the DS9481P-300# (Figure 6).
- 8) Plug the DS28E30 EV kit into the PC using a USB Type-A to Micro-USB Type-B cable.

Figure 5. Run Software After Installation

<!-- image -->

Figure 6. DS9481P-300# and DS28E30 PCB Interface Board

<!-- image -->

│

## DS28E30 Evaluation Kit

- 9) The DS28E30 EV kit program opens and automatically connects to the COM port. Review message in the lower right corner of the window to verify connection (Figure 7).

L

Figure 7. DS28E30 EV Kit Program (Default View Upon Opening)

<!-- image -->

## EV Kit Supported Functions

The  DS28E30  EV  kit  program  is  designed  as  a  usage example.  To  display  the  device  command  sequence transactions, as well as SHA and ECDSA computations, select Settings &gt; Debug Info to enable. See Table 1 for GUI function descriptions.

## Navigating

The DS28E30 EV kit Lite Program is divided into the following four sections:

- Menu Bar: Provides access to settings, configura -tion, hardware selection, and other features and information used to support the software operations.
- Functions Panel: Access to the device demonstration sequences.
- Command Panel: Sequence output, configuration, and command execution.
- Log: Provides information for command execution and software operation.

## Connection and Detecting Hardware

The  DS9481P-300#  adapter  automatically  connects  to a  COM  port  on  software  initialization.  Alternatively,  the adapter can be connected by selecting Settings &gt; Adapter Port &gt; Connect.

The  DS28E30  EV  kit  Lite  requires  the  device  selection for  correct  operation  and  hardware interface. Select the DS28E30 to start hardware interface by selecting Settings &gt; Select Device &gt; DS28E30.

## Table 1. GUI Setup and Usage Flows Supported

| FLOW             | DESCRIPTION                                                                                                                      |
|------------------|----------------------------------------------------------------------------------------------------------------------------------|
| Generic Commands | Generic non-cryptographic DS28E30 commands (e.g., Read Device, Read and Write Memory, Set and Read Protection, and RNG function) |
| Auth ECDSAWrite* | Examples to set up device for ECDSAauthentication, certificate generation, and verification.                                     |

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| DS28E30EVKIT# | EV Kit |

#Denotes RoHS compliance.

│

1

1

## DS28E30 Evaluation Kit

## DS28E30 EV Kit Bill of Materials

| DESIGNATOR   |   QTY | DESCRIPTION                                  |
|--------------|-------|----------------------------------------------|
| Pack-Out     |     1 | 1-Wire Authenticator EV kit DS28E30EVKIT#    |
| Pack-Out     |     1 | CABLE, USBA-TO-MICRO-B CABLE (1M) 68784-0001 |
| Pack-Out     |     1 | BOX, BROWN, 9 3/16' X 7' X 1 1/4' 2          |
| Pack-Out     |     1 | FOAM, ANTI-STATIC PE 12X12X3.175MM           |
| Pack-Out     |     1 | LABEL, SATIN 1-3/4' X 1-3/8'                 |
| Pack-Out     |     1 | 2X3', STATISHIELDING, ZIPTOP                 |
| Pack-Out     |     1 | INSERT+, MAXIM WEB INSTRUCTION               |
| Pack-Out     |     1 | DS9481P-300 EVAL KIT# DS9481P-300#           |

## DS28E30 EV Kit Schematic

<!-- image -->

Copyright  ©

Title DS28E30EVKIT

Size Document  Number

8.5"  x

1"

Date:  11/19/2020

2021

Maxim  Integrated

2

3

Evaluates: DS28E30

| DESIGNATOR   |   QTY | DESCRIPTION                                      |
|--------------|-------|--------------------------------------------------|
| DS28E30+ PCB |     5 | PCB+, DS28E30+                                   |
| C1, C2       |     2 | CAP+,0.47UF,10%,10V, X7R,0603                    |
| J1           |     1 | CONNECTOR, MALE, THROUGH HOLE, .100', R/A, 6PINS |
| J2           |     1 | CONNECTOR+, RCPT,.100' 6POS, R/AGOLD             |
| U1           |     1 | 1-WIRE AUTHENTICATOR                             |
| PACK-OUT     |     1 | LABEL BLANK THT-1-423 0.75 X 0.25                |
| PACK-OUT     |     1 | BAG, STATIC SHIELDZIP4X6, W/ESD LO               |

Drawn  B y:

│

4

4

Cannot

C:\Use

s\Work

Teal.b

## DS28E30 EV Kit PCB Layout

DS28E30 EV Kit PCB-Top Silkscreen

<!-- image -->

DS28E30 EV Kit PCB-Top Assembly

<!-- image -->

<!-- image -->

DS28E30 EV Kit PCB-Bottom

DS28E30 EV Kit PCB-Layer 2

<!-- image -->

DS28E30 EV Kit PCB-Layer 3

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION             | PAGES CHANGED   |
|-------------------|-----------------|-------------------------|-----------------|
|                 0 | 3/21            | Initial release         | -               |
|                 1 | 1/22            | Updated user guide link | 1               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: DS28E30