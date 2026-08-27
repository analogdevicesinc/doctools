<!-- lastmod 2022-08-03 -->
<!-- image -->

Click here to ask about the production status of specific part numbers.

## DS28C40 Evaluation System Lite Version

## General Description

The DS28C40 evaluation system (EV system) provides the hardware and software necessary to exercise the features of the DS28C40. The EV system consists of five DS28C40 devices  in  a  10-pin  TDFN  package,  a  DS9121ATB+ evaluation  TDFN  socket  board,  and  a  DS9481P-300# USB-to-I 2 C/1-Wire ®   adapter.  The  evaluation  software runs  under  Windows ®   10,  Windows  8,  and  Windows  7 operating  systems,  both  64-  and  32-bit  versions.  It  provides  a  handy  user  interface  to  exercise  the  features  of the DS28C40.

## Features

- Demonstrates the Features of the DS28C40 DeepCover Secure Authenticator
- Logs 1-Wire/I 2 C Communication to Aid Firmware Designers Understanding of DS28C40
- 1-Wire/I 2 C USB Adapter Creates a Virtual COM Port on Any PC

## DS28C40 EV System with a USB Cable

<!-- image -->

DeepCover is a registered trademark of Maxim Integrated Products, Inc. Windows is registered trademarks of Microsoft Corp.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: DS28C40

- Fully Compliant with USB Specification v2.0
- Software Runs on Windows 10, Windows 8, and Windows 7 for Both 64- and 32-Bit Versions
- 3.3V ±3% I 2 C Operating Voltage
- Convenient On-Board Test Points, TDFN Socket
- Evaluation Software Available by Request

## EV Kit Contents

|   QTY | DESCRIPTION                                             |
|-------|---------------------------------------------------------|
|     5 | DS28C40ATB/VY+ DeepCover secure authenticator (10 TDFN) |
|     1 | DS9121ATB+ socket board (10 TDFN)                       |
|     1 | DS9481P-300# USB to 1W/I 2 CAdapter                     |
|     1 | USB Type-A to USB Mini Type-B cable                     |

Ordering Information appears at end of data sheet.

<!-- image -->

## DS28C40 Evaluation System Lite Version

## Quick Start

This section is intended to give the DS28C40 evaluator a list of recommended equipment and instructions on how to set up the Windows-based computer for the evaluation software.

## Recommended Equipment

- DS9481P-300# USB to 1W/I 2 C Adapter
- DS9121ATB+ TDFN socket board
- DS28C40ATB/VY+ (five devices included)
- USB Type A-to-USB Micro-Type B cable (included)
- Computer  with  a  Windows  10,  Windows  8,  or Windows 7 operating  system  (64-  or  32-bit)  and  a spare USB 2.0 or higher port
- Download DS28C40/DS28C40 EV kit software (light

Figure 1. File Viewer

<!-- image -->

Evaluates: DS28C40

version)  or    request  full  DS28C40/DS28E40  EV  kit developer software.

Note: In  the  following  sections,  EV  kit  software  related items are identified in bold .    Windows operating system related items are identified in bold and underline .

## Hardware Setup and Driver Installation Quick Start

The following steps were performed on a Windows 10 PC to setup the DS28C40 EV kit hardware/software:

- 1) Obtain  and  unpack DS28C40\_DS28E40\_Evalua-tion\_Kit\_Lite\_Version\_Setup file or newer version.
- 2) In  a  file  viewer,  double  click  on  the DS28C40\_ DS28E40\_Evaluation\_Kit\_Lite\_Version\_Setup to begin the installation.

│

## DS28C40 Evaluation System Lite Version

- 3) The setup wizard opens. Click on Next (Figure 2):
- 4) Follow the instructions in the wizard and click Next to install the EV kit software and required drivers (Figures 3, 4).

Figure 2. DS28C40 Setup Wizard

<!-- image -->

Figure 3. DS9481P-300# Driver Installation

<!-- image -->

Evaluates: DS28C40

│

## DS28C40 Evaluation System

Evaluates: DS28C40

Figure 4. Finish DS9481P-300# Driver Installation

<!-- image -->

- 5) Wait for the Installation to complete and launch program if desired after completion, as shown in Figure 5.

Figure 5. Run Software After Installation

<!-- image -->

## DS28C40 Evaluation System Lite Version

- 6) Plug the DS9481P-300# into the PC with DS9121ATB+ socket board by doing the following:
- a)  Open socket and insert a DS28C40ATB/VY+ as shown  in  Figure  6. Note: The  plus  (+)  on  the package must be aligned with the pin 1 marker in the socket. Pin 1 is also marked on the PCB as a white dot located on the top side of the socket's marking.
- b)  Close the socket.
- c) Connect  the  DS9121ATB+  J2  6-pin  male  plug into  the  DS9481P-300#  6-pin  female  socket,  as shown in Figure 7.
- d)  For  the  DS9121ATB+,  Insert  jumper  JB1to  use VCC (Figure 7).
- e)  Plug the DS28C40 EV kit, using a USB Type-A to Micro-USB Type-B cable, into the PC.
- 7) The DS28C40 EV kit program opens and automatically connects to the COM port. This can be verified in the lower right corner of the window, as shown in Figure 8.

## Evaluates: DS28C40

Figure 6. Orientation of the DS28C40 in Burn-in Socket

<!-- image -->

Figure 7. DS9481QA-300 and DS9121ATB

<!-- image -->

│

## DS28C40 Evaluation System

## Lite Version

Figure 8. DS28C40 EV Kit Program (Default View Upon Opening)

<!-- image -->

## EV Kit Supported Functions

The DS28C40 EV kit program is designed as a usage example. The GUI optionally displays all the device command sequence transactions as well as SHA and ECDSA computations when Settings  Debug Info is enabled. See Table 1 for descriptions of the functions in the GUI.

## Table 1. GUI Setup and Usage Flows Supported

| FLOW                    | DESCRIPTION                                                                                                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Generic Commands        | Generic DS28C40 commands without SHAor ECDSAencryption, authentication or protection. (e.g., Read Device, Read and Write Memory, Set and Read Protection and RNG function)       |
| ECDSAFunctions*         | Examples to set up device for ECDSAauthentication, certificate generation and verification. Examples for ECDSAencryption, authentication, signature generation and verification. |
| HMAC SHA-256 Functions* | Examples provided to setup device for HMAC authentication and verification and for HMAC encryption, authentication and the SHA-256 Generator.                                    |

* Available only in full EV Kit Version.

Evaluates: DS28C40

## DS28C40 Evaluation System Lite Version

## Navigating

The DS28C40 EV Kit Lite Program is divided in four sections:  The  top  menu  bar,  functions  selection,  command panel and log.

- Menu Bar: Provides access to settings, configuration, hardware selection and other features and information used to support the software operations.
- Functions Panel: Access to the device demonstration sequences.
- Command  Panel: Sequence  output,  configuration and command execution.
- Log: Provides  information  for  command  execution, and software operation.

## Connection and Detecting Hardware

The  DS9481P-300#  adapter  is  connected  automatically on  software  initialization.  The  adapter  can  be  attached and detected by software later by selecting the adapter connection under Settings  Adapter Port  Connect .

The DS28C40 EV Kit Lite requires the device selection for correct operation and hardware interface.

Select the DS28C40 to start hardware interface by selecting Settings  Select Device  DS28C40 .

## Ordering Information

| PART          | TYPE      |
|---------------|-----------|
| DS28C40EVKIT# | EV System |

#Denotes RoHS compliance.

## DS28C40 Evaluation System Lite Version

## DS28C40 EV Kit Bill of Materials

| DESIGNATION    |   QTY | DESCRIPTION                                          |
|----------------|-------|------------------------------------------------------|
| Pack-Out       |     1 | I2C AUTHENTICATOR AUTO, EV KIT DS28C40EVKIT#         |
| Pack-Out       |     5 | AUTOMOTIVE I2C AUTHENTICATOR, 6Kb DS28C40ATB/VY+     |
| Pack-Out       |     1 | CABLE, USBA-TO-MICRO-B CABLE (1M) 68784-0001         |
| Pack-Out       |     1 | 1W/I2C 3x3MM TDFN SOCKET BOARD DS9121ATB+            |
| Pack-Out       |     1 | DS9481P-300 EVAL KIT# DS9481P-300#                   |
| DS9121ATB+ PCB |     1 | PCB+, DS9121ATB+                                     |
| J4             |     1 | CONN HEADER VERT 10POS 2.54MM 22284103               |
| J2             |   0.1 | CONN+,HEADER,50PS, 100 SGL, R/A,AU TSW-150-08-G-S-RA |
| J1             |     1 | CONN+, RCPT, 100' 6POS, R/AGOLD PPPC061LGBN-RC       |
| U1             |     1 | SOCKET+, IC, TDFN10, 3x3MM, CLAMSHELL 10QH50A13030   |

Evaluates: DS28C40

| DESIGNATION     |   QTY | DESCRIPTION                                          |
|-----------------|-------|------------------------------------------------------|
| PACK-OUT        |     1 | LABEL BLANK THT-1-423 0.75 X 0.25                    |
| PACK-OUT        |     1 | BAG, STATIC SHIELDZIP4X6, W/ESD LO                   |
| C1              |     1 | CAP+, 1.5µF, 10%, 10V, X7R, 0603 C1005X5R1A155K050BC |
| D1              |     1 | LED+,GREEN CLEAR, 3.2V,20MA,0603 598-8081-107F       |
| JB1             |   0.1 | HEADER 36-40 PINS (CUT TO FIT) 22-28-4363            |
| Populate to JB1 |     1 | SHUNT+, LP W/HANDLE 2 POS 30AU 881545-2              |
| Q1              |     1 | MOSFET, N-CH ENHANCEMENT BSS138LT1G                  |
| R3              |     1 | 3.3KΩ 1% RESISTOR (0603 PB FREE) ERJ-3EKF3301V       |
| R1, R5          |     2 | RES,10KΩ 1% 0603 ERJ-3EKF1002V                       |

│

## DS28C40 Evaluation System Lite Version

## DS28C40 EV Kit Schematic

<!-- image -->

│

Evaluates: DS28C40

## DS28C40 Evaluation System Lite Version

## DS28C40 EV Kit PCB Layout Diagrams

Drill and Mechanical Layer (1 of 5)

<!-- image -->

Drill and Mechanical Layer (2 of 5)

<!-- image -->

Evaluates: DS28C40

│

## DS28C40 Evaluation System Lite Version

## DS28C40 EV Kit PCB Layout Diagrams (continued)

Drill and Mechanical Layer (3 of 5)

<!-- image -->

Drill and Mechanical Layer (4 of 5)

<!-- image -->

Evaluates: DS28C40

│

## DS28C40 Evaluation System Lite Version

## DS28C40 EV Kit PCB Layout Diagrams (continued)

Drill and Mechanical Layer (5 of 5)

<!-- image -->

Evaluates: DS28C40

│

## DS28C40 Evaluation System Lite Version

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                          | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 6/19            | Initial release                                                                                                                                                                                                      | -               |
|                 1 | 7/20            | Initial release                                                                                                                                                                                                      | -               |
|                 2 | 2/21            | Updated part number from DS28C40G/V+ to DS28C40ATB/VY+, replaced EV system photo and figure 7, updated DS28C40 EV Kit Bill of Materials , DS28C40 EV Kit Schematic , and DS28C40 EV Kit PCB Layout Diagrams sections | 1, 2, 5, 8-12   |
|                 3 | 3/21            | Updated Quick Start , Figure 1 , Figure 6 , and Figure 8                                                                                                                                                             | 2, 5, 6         |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: DS28C40