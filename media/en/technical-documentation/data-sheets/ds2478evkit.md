<!-- lastmod 2022-08-04 -->
<!-- image -->

Evaluates: DS2478

## General Description

The  DS2478  evaluation  system  (EV  system)  provides the  hardware  and  software  necessary  to  exercise  the features of the DS2478. The EV system consists of five DS2478/DS28E40/DS28C40  devices  in  a  10-pin  TDFN package,  two  DS9121ATB+ TDFN socket boards along with a DS9481P-300# USB-to-I 2 C/1-Wire ®  adapter. The evaluation software runs under Windows ®  10, Windows 8,  and  Windows  7  operating  systems,  both  64-bit  and 32-bit versions. It provides a convenient user interface to exercise the features of the DS2478 in conjunction with DS28E40 or DS28C40.

## DS2478 EV Kit Files

| FILE                                               | DESCRIPTION          |
|----------------------------------------------------|----------------------|
| DS2478_Evaluation_Kit_Lite_ Version_Setup_V1_0.exe | Installation Package |

## DS2478 EV Kit Board Photo

<!-- image -->

1-Wire and DeepCover are registered trademarks of Maxim Integrated Products, Inc. Windows is a registered trademark and registered service mark of Microsoft Corporation.

## [Request DS2478 Security User Guide](https://www.maximintegrated.com/AN7555)

Click here to ask an associate for production status of specific part numbers.

## DS2478 Evaluation Kit

## Benefits and Features

- Demonstrates the Features of the DS2478 DeepCover ®  ECDSA Secure 1-Wire and I 2 C Authenticators.
- Communication is Logged to Aid Firmware Designer's Understanding of DS2478 and the DS28E40/DS28C40 Authenticators
- 1-Wire/I 2 C USB Adapter Creates a Virtual COM Port on any PC
- Fully Compliant with USB Specification v2.0
- Software Runs on Windows 10, Windows 8, and Windows 7 for both 64-Bit and 32-Bit Versions
- 3.3V ±3% 1-Wire Operating Voltage
- Evaluation Software Available by Request

Ordering Information appears at end of data sheet.

319-100885; Rev 1; 3/22

One  Analog  Way,  Wilmington,  MA  01887  U.S.A.    |      Tel:  781.329.4700      |      © 2022  Analog  Devices,  Inc.  All  rights  reserved. ©  2022  Analog  Devices,  Inc.  All  rights  reserved.  Trademarks  and  registered  trademarks  are  the  property  of  their  respective  owners.

## DS2478 Evaluation Kit

## DS2478 EV Kit Contents

|   QTY | DESCRIPTION                                             |
|-------|---------------------------------------------------------|
|     5 | DS2478ATB/VY+ DeepCover Secure Coprocessor (10 TDFN)    |
|     5 | DS28E40ATB/VY+ DeepCover Secure Authenticator (10 TDFN) |
|     5 | DS28C40ATB/VY+ DeepCover Secure Authenticator (10 TDFN) |
|     2 | DS9121ATB+ Socket Board (10 TDFN)                       |
|     1 | DS9481P-300# USB to I 2 C/1-Wire Adapter                |
|     1 | USB Type-A to Micro-USB Type-B Cable                    |

## Quick Start

This  section  includes  a  list  of  recommended  equipment and instructions to set up the Windows-based PC for the evaluation software.

## Required Equipment

- DS9481P-300# USB to I 2 C/SPI/1-Wire Adapter (included)
- DS9121ATB+ socket board (two included)
- DS28E40ATB/VY+ (five devices included)
- DS28C40ATB/VY+ (five devices included)

Evaluates: DS2478

- DS2478ATB+ (five devices included)
- USB Type A to Micro-USB Type B cable (included)
- PC with a Windows 10, Windows 8, or Windows 7 operating system (64 bit or 32 bit) and a spare USB 2.0 or higher port
- Download DS2478 Evaluation kit software light version or request full DS2478 Evaluation kit developer software.

Note: In the following sections, software-related items are identified by bolding . Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system

## Hardware Setup and Driver Installation

Use the following steps on a Windows 10 PC to set up the DS2478 EV kit hardware/software:

- 1) Download  and  unzip  the DS2478\_Evaluation\_Kit\_ Lite\_Version\_Setup\_V1\_0\_0 file  or  the  latest  ver -sion. NOTE: Running the setup from within  the  zip window without fully extracting it may cause installation issues. Make sure that the files are unzipped to a folder before proceeding.
- 2) In a file viewer ( Figure 1), double click on the DS2478\_ Evaluation\_Kit\_Lite\_Version\_Setup\_V1\_0\_0.exe file to begin the installation.

Figure 1. File Viewer

<!-- image -->

│

## DS2478 Evaluation Kit

- 3) The setup wizard opens, click Next as shown in Figure 2.

Figure 2. DS2478 Setup Wizard

<!-- image -->

Evaluates: DS2478

## DS2478 Evaluation Kit

- 4) Follow the instructions in the wizard and click Next to install the EV kit software and required drivers (Figures 3 and 4).
- 5) Wait for the installation to complete and launch the program if desired after completion (Figure 5).

Figure 3. DS9481P-300# Driver Installation

<!-- image -->

Figure 4. Finish DS9481P-300# Drivers Installation

<!-- image -->

## DS2478 Evaluation Kit

Evaluates: DS2478

Figure 5. Run Software After Installation

<!-- image -->

- 6) Use the  following  steps  to  plug  the  DS9481P-300# into the PC with DS9121ATB+ socket board:
- a)  Open  the  socket  and  insert  a  DS2478ATB/VY+ as shown in Figure 6. Note: The plus (+) on the package must be aligned with pin 1 located next to the upper left corner of the socket's marking.
- b)  Close the socket.
- c) Connect the DS9121ATB+ J2 6-pin male plug into the  DS9481P-300#  6-pin  female  socket,  as  shown  in Figure 7.
- d)  Insert VCC  jumper  JB1  (Figure 7) for the DS9121ATB+ board with the DS2478.
- e) Connect the  DS2478  EV  kit  to  the  PC  using  a USB Type-A to Micro-USB Type-B cable.
- 7) The DS2478 EV kit program opens and automatically connects to the COM port. This is shown in the status bar shown in Figure 8.
- 8) The DS2478 EV kit supports both the DS28C40 and DS28E40. Follow step  6  to  daisy  chain  an  authenticator  to  the  DS2478  coprocessor  board. Remove the JB1 jumper from the DS9121ATB+ socket board when using DS28E40.

Figure 6. Orientation of the DS2478 in Burn-in Socket

<!-- image -->

Evaluates: DS2478

Figure 7. DS9481P-300 and DS9121ATB

<!-- image -->

Figure 8. DS2478 EV Kit Program (Default View Upon Opening)

<!-- image -->

## DS2478 Evaluation Kit

- 9) Select DS2478 by going to Settings  Select Device  DS2478 (Figure 9). The Software will connect to the DS2478 and enable the functions to evaluate the device. The connection status can be verified in the data log as shown in Figure 10.

Figure 9. Select Device to Evaluate

<!-- image -->

## DS2478 Evaluation Kit

Evaluates: DS2478

Figure 10. Software Ready

<!-- image -->

## DS2478 Evaluation Kit

## EV Kit Supported Functions

The  DS2478  EV  kit  program  is  designed  as  a  usage example. The GUI optionally displays all the device command sequence transactions as well as SHA and ECDSA computations when Settings  Debug Info is  enabled. See Table 1 for descriptions of the functions in the GUI.

## Navigating

The DS2478 EV Kit Lite Program is divided in four sections:  The  top  menu  bar,  functions  selection,  command panel and data log.

- Menu Bar: Provides access to settings, configuration, hardware selection and other features and information used to support the software operations.
- Functions Panel: Access to the device demonstration sequences.

Evaluates: DS2478

- Command  Panel: Sequence  output,  configuration, and command execution.
- Data Log: Provides information for command execution, and software operation.

## Connection and Detecting Hardware

The  DS9481P-300#  adapter  automatically  connects to  a  COM  port  on  software  initialization.  Alternatively, the  adapter  can  be  connected  by  selecting Settings  Adapter Port  Connect .

The DS2478 EV Kit Lite supports both the DS28E40 and DS28C40. The program requires  a  device  selection  for correct  operation  and  hardware  interface  connection. Select the DS2478 to initiate device detection by selecting Settings  Select Device  DS2478 (See Figures 9 and 10).

## Table 1. GUI Setup and Usage Flows Supported

| FLOW                    | DESCRIPTION                                                                                                                                                                              |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Generic Commands        | Generic non-cryptographic DS2478 commands (e.g., Read Device, Read and Write Memory, Set and Read Protection and RNG function).                                                          |
| ECDSA Functions*        | Examples to set up the device for ECDSA authentication, certificate generation, and verification. Examples for ECDSA encryption, authentication, signature generation, and verification. |
| HMAC SHA-256 Functions* | Examples provided to set up the device for HMAC authentication and verification and for HMAC encryption, authentication, and the SHA-256 generator.                                      |
| Coprocessor Functions*  | When selecting DS28C40 or DS2840 the DS2478 is used as a coprocessor and provides ECDSA and SHA2 tools required to authenticate the DS28E40 or DS28C40.                                  |

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| DS2478EVKIT# | EV Kit |

#Denotes RoHS compliance.

│

## DS2478 Evaluation Kit

## DS2478 EV Kit Bill of Materials

| DESIGNATOR      |   QTY | DESCRIPTION                                             |
|-----------------|-------|---------------------------------------------------------|
| Pack-Out        |     1 | 1-Wire Authenticator EV Kit DS2478EVKIT#                |
| Pack-Out        |     5 | AUTOMOTIVE 1-WIRE AUTHENTICATOR (DS28E40)               |
| Pack-Out        |     5 | AUTOMOTIVE I2C AUTHENTICATOR (DS28C40)                  |
| Pack-Out        |     5 | AUTOMOTIVE I2C COPROCESSOR (DS2478)                     |
| Pack-Out        |     1 | CABLE, USB A-TO-MICRO-B CABLE (1M) 68784-0001           |
| Pack-Out        |     2 | 1W/I2C 3x3MM TDFN SOCKET BOARD DS9121ATB+               |
| Pack-Out        |     1 | DS9481P-300 EVAL KIT# DS9481P-300#                      |
| DS9121ATB+ PCB  |     1 | PCB+, DS9121ATB+                                        |
| J4              |     1 | CONN HEADER VERT 10POS 2.54MM 22284103                  |
| J2              |  0.01 | CONN+, HEADER, 50PS, 100 SGL, R/A, AU TSW-150-08-G-S-RA |
| J1              |     1 | CONN+, RCPT, 100' 6POS, R/A GOLD PPPC061LGBN-RC         |
| U1              |     1 | SOCKET+, IC, TDFN10, 3x3MM, CLAMSHELL 10QH50A13030      |
| Pack-Out        |     1 | LABEL BLANK THT-1-423 0.75 X 0.25                       |
| Pack-Out        |     1 | BAG, STATIC SHIELDZIP4X6, W/ ESD LO                     |
| C1              |     1 | CAP+ 1.5µF                                              |
| D1              |     1 | LED+, GREEN CLEAR, 3.2V, 20MA, 0603 598-8081-107F       |
| JB1             |   0.1 | HEADER 36-40 PINS (CUT TO FIT) 22-28-4363               |
| Populate to JB1 |     1 | SHUNT+, LP W/HANDLE 2 POS 30AU 881545-2                 |
| Q1              |     1 | MOSFET, N-CH ENHANCEMENT BSS138LT1G                     |
| R3              |     1 | 3.3kΩ 1% RESISTOR (0603 PB FREE) ERJ-3EKF3301V          |
| R1, R5          |     2 | RES, 10kΩ 1% 060                                        |

│

Evaluates: DS2478

## DS2478 EV Kit Schematic Diagram

<!-- image -->

│

Evaluates: DS2478

## DS2478 Evaluation Kit

## DS2478 EV Kit PCB Layout Diagrams

<!-- image -->

DS2478 EV Kit-PCB Layout Top Assembly

<!-- image -->

DS2478 EV Kit-PCB Layout Top Silkscreen

Evaluates: DS2478

Plated-through holes

+/- 3 mil

Pattern to pattern

+/- 6 mil

Legend to legend

no preference

Soldermask to pattern

+/- 6 mil

Plated-through holes

+/- 3 mil

Pattern to pattern

+/- 6 mil

Legend to legend

no preference

│

## DS2478 Evaluation Kit

## DS2478 EV Kit PCB Layout Diagrams (continued)

Plated-through holes

+/- 3 mil

Pattern to pattern

+/- 6 mil

Legend to legend

no preference

Soldermask to pattern

+/- 6 mil

16. Electrical testing needed: YES

<!-- image -->

DS2478 EV Kit-PCB Layout Bottom Metal

DS2478 EV Kit-PCB Layout Layout Drill and Mechanical

<!-- image -->

Evaluates: DS2478

│

## DS2478 Evaluation Kit

## DS2478 EV Kit PCB Layout Diagrams (continued)

DS2478 EV Kit-PCB Layout Bottom Layer

<!-- image -->

Evaluates: DS2478

│

## DS2478 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                    | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------|-----------------|
|                 0 | 2/22            | Initial release                                                | -               |
|                 1 | 3/22            | Updated URL for user guide request; updated Required Equipment | 1, 2            |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: DS2478