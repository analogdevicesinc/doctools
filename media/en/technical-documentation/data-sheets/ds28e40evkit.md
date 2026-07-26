<!-- lastmod 2022-08-03 -->
## [Request DS28E40 Security User's Guide](https://www.maximintegrated.com/AN7264)

Click here to ask about the production status of specific part numbers.

## DS28E40 Evaluation Kit

## General Description

The  DS28E40  evaluation  system  (EV  system)  provides the  hardware  and  software  necessary  to  evaluate  the features of the DS28E40. The EV system consists of five DS28E40ATB/VY+  devices  in  a  10-pin  TDFN  package, a  DS9121ATB+  evaluation  TDFN  socket  board,  and  a DS9481P-300# USB-to-I 2 C/1-Wire ®  adapter. The evaluation software runs under Windows ®  10, Windows 8, and Windows 7 operating systems, both the 64-bit and 32-bit versions.  It  provides  a  handy  user  interface  to  exercise the features of the DS28E40.

Ordering Information appears at end of data sheet.

## EV Kit Contents

|   QTY | DESCRIPTION                                             |
|-------|---------------------------------------------------------|
|     5 | DS28E40ATB/VY+ DeepCover Secure Authenticator (10 TDFN) |
|     1 | DS9121ATB+ Socket Board (10 TDFN)                       |
|     1 | DS9481P-300# USB-to-I 2 C/1-Wire                        |
|     1 | USB Type-A to Micro-USB Type-B Cable                    |

Windows is a registered trademark of Microsoft Corporation.

## Features

- Demonstrates the Features of the DS28E40 DeepCover ®  Secure Authenticator
- 1-Wire  Communication  Is  Logged  to  Aid  Firmware Designers' Understanding of the DS28E40
- 1-Wire/I 2 C USB Adapter Creates a Virtual COM Port on Any PC
- Fully Compliant with USB Specification v2.0
- Software  Runs  on  Windows  10,  Windows  8,  and Windows 7 for Both 64-Bit and 32-Bit Versions
- 3.3V ±3% 1-Wire Operating Voltage
- Convenient On-Board Test Points, TDFN Socket
- Evaluation Software Available by Request

## DS28E40 EV System

<!-- image -->

<!-- image -->

Evaluates: DS28E40

## DS28E40 Evaluation Kit

## Quick Start

This  section  includes  a  list  of  recommended  equipment and instructions on how to set up the Windows-based PC for the evaluation software.

## Required Equipment

- DS9481P-300# USB-to-I 2 C/1-Wire adapter (included)
- DS9121ATB+ socket board (included)
- DS28E40ATB/VY+ (five devices included)
- USB Type A to Micro-USB Type B cable (included)
- PC with a Windows 10, Windows 8, or Windows 7 operating system (64 bit or 32 bit) and a spare USB 2.0 or higher port
- Download DS28E40 EV kit software (light version) or request full DS28E40 EV kit developer software

Evaluates: DS28E40

Note: In the following sections, software-related items are identified by bolding . Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Hardware Setup and Driver Installation Quick Start

The following steps were performed on a Windows 10 PC to set up the DS28E40 EV kit hardware/software:

- 1) Obtain and unpack the DS28C40\_DS28E40\_Evalua-tion\_Kit\_Lite\_Version\_Setup file or the latest version.
- 2) In a file viewer ( Figure 1), double click on the DS28C40\_DS28E40\_Evaluation\_Kit\_Lite\_Ver-sion\_Setup\_V2 file to begin the installation.
- 3) The  setup  wizard  opens;  click Next as  shown  in Figure 2.

Figure 1. File Viewer

<!-- image -->

│

Figure 2. DS28E40 Setup Wizard

<!-- image -->

- 4) Follow the instructions in the wizard and click Next to install the EV kit software and required drivers (Figure 3 and Figure 4).

Figure 3. DS9481P-300# Driver Installation

<!-- image -->

Figure 4. Finish DS9481P-300# Driver Installation

<!-- image -->

## DS28E40 Evaluation Kit

- 5) Wait for the Installation to complete and launch program if desired after completion (Figure 5).
- 6) Plug the DS9481P-300#  into the PC  with the DS9121ATB+ socket board by doing the following:
- a.  Open the socket and insert a DS28E40ATB/VY+ as shown in Figure 6.

Figure 5. Run Software After Installation

<!-- image -->

Note: The plus (+) on the package must be aligned with the top of the marker in the socket. The pin 1 indicator is denoted on the PCB as a white dot and is located on the top side of the socket's marking.

- b.  Close the burn-in socket.
- c.  Connect the DS9121ATB J2 6-pin male plug into the DS9481P-300# 6-pin female socket per Figure 7.
- d.  Using a USB Type-A to Micro-USB Type-B cable, plug the DS28E40 EV kit into the PC.

Figure 6. Orientation of the DS28E40 in the Burn-In Socket

<!-- image -->

Figure 7. DS9481P-300# and DS9121ATB+

<!-- image -->

- 7) The DS28E40 EV kit program opens and automatically connects to the COM port. This can be verified in the lower right corner of the window, as shown in Figure 8.

Figure 8. DS28E40 EV Kit Program (Default View Upon Opening)

<!-- image -->

## EV Kit Supported Functions

The DS28E40 EV kit program is designed as a usage example. The GUI optionally displays all the device command sequence transactions as well as SHA and ECDSA computations when Settings  Debug Info is enabled. See Table 1 for descriptions of the functions in the GUI.

## Table 1. GUI Setup and Usage Flows Supported

| FLOW                    | DESCRIPTION                                                                                                                                                                              |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Generic Commands        | Generic DS28E40 commands without SHA or ECDSA encryption, authentication, or protection. (e.g., Read Device, Read and Write Memory, Set and Read Protection, and RNG function)           |
| ECDSA Functions*        | Examples to set up the device for ECDSA authentication, certificate generation, and verification. Examples for ECDSA encryption, authentication, signature generation, and verification. |
| HMAC SHA-256 Functions* | Examples provided to set up the device for HMAC authentication and verification and for HMAC encryption, authentication, and the SHA-256 generator.                                      |
| AES Bulk Decrypt*       | Examples to execute the DS28E40 AES bulk decrypt feature.                                                                                                                                |

* Available only in the full EV kit version.

## Navigating

The DS28E40 EV Kit Lite program GUI is divided into four sections as follows:

- Menu Bar : Provides access to settings, configuration, hardware selection,  and  other  features  and  information used to support the software operations.
- Functions Panel : Gives access to the device demonstration sequences.
- Command Panel : Allows sequence output, configuration, and command execution.
- Log: Provides  information  for  command  execution and software operation.

## Connection and Detecting Hardware

The  DS9481P-300#  adapter  is  connected  automatically upon software initialization. The adapter can be attached and detected by software later by selecting the adapter connection under Settings  Adapter Port  Connect .

The  DS28E40  EV  Kit  Lite  requires  device  selection  for correct  operation  and  hardware  interface.  Select  the DS28E40  to  start  the  hardware  interface  by  selecting Settings  Select Device  DS28E40 .

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| DS28E40EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## DS28E40 EV Kit Bill of Materials

| DESIGNATOR      |   QTY | DESCRIPTION                                             |
|-----------------|-------|---------------------------------------------------------|
| Pack-Out        |     1 | 1-WIRE AUTHENTICATOR EV KIT DS28E40EVKIT#               |
| Pack-Out        |     5 | AUTOMOTIVE 1-WIRE AUTHENTICATOR                         |
| Pack-Out        |     1 | CABLE, USB A-TO-MICRO-B CABLE (1M) 68784-0001           |
| Pack-Out        |     1 | 1W/I2C 3x3MM TDFN SOCKET BOARD DS9121ATB+               |
| Pack-Out        |     1 | DS9481P-300 EVAL KIT# DS9481P-300#                      |
| DS9121ATB+ PCB  |     1 | PCB+, DS9121ATB+                                        |
| J4              |     1 | CONN HEADER VERT 10POS 2.54MM 22284103                  |
| J2              |  0.01 | CONN+, HEADER, 50PS, 100 SGL, R/A, AU TSW-150-08-G-S-RA |
| J1              |     1 | CONN+, RCPT, 100' 6POS, R/A GOLD PPPC061LGBN-RC         |
| U1              |     1 | SOCKET+, IC, TDFN10, 3x3MM, CLAMSHELL 10QH50A13030      |
| Pack-Out        |     1 | LABEL BLANK THT-1-423 0.75 X 0.25                       |
| Pack-Out        |     1 | BAG, STATIC SHIELDZIP4X6, W/ ESD LO                     |
| C1              |     1 | CAP+, 1.5µF                                             |
| D1              |     1 | LED+, GREEN CLEAR, 3.2V, 20MA, 0603 598-8081-107F       |
| JB1             |   0.1 | HEADER 36-40 PINS (CUT TO FIT) 22-28-4363               |
| Populate to JB1 |     1 | SHUNT+, LP W/HANDLE 2 POS 30AU 881545-2                 |
| Q1              |     1 | MOSFET, N-CH ENHANCEMENT BSS138LT1G                     |
| R3              |     1 | 3.3kΩ 1% RESISTOR (0603 PB FREE) ERJ-3EKF3301V          |
| R1, R5          |     2 | RES, 10kΩ 1% 060                                        |

Evaluates: DS28E40

## DS28E40 EV Kit Schematic

<!-- image -->

## DS28E40 Evaluation Kit

## DS28E40 EV Kit PCB Layouts

DS28E40 EV Kit PCB-Top Assembly

<!-- image -->

DS28E40 EV Kit PCB-Top Silkscreen

<!-- image -->

Evaluates: DS28E40

│

## DS28E40 Evaluation Kit

## DS28E40 EV Kit PCB Layouts (continued)

<!-- image -->

│

## Evaluates: DS28E40

## DS28E40 EV Kit PCB Layouts (continued)

DS28E40 EV Kit PCB-Bottom Layer

<!-- image -->

Evaluates: DS28E40

│

## DS28E40 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                          | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/20            | Release for intro                                                                                                                                                                                                                                                    | -               |
|                 1 | 12/20           | Updated part number from DS28E40G/V+ to DS28E40ATB/VY+ and DS28E40 EV Kit Schematic section                                                                                                                                                                          | 1, 2, 5, 10     |
|                 2 | 3/21            | Updated General Description , EV Kit Contents , DS28E40 System , Quick Start , Hardware Setup and Driver Installation Quick Start , Figure 6, Figure 7, Figure 8, DS28E40 EV Kit Bill of Materials , DS28E40 EV Kit Schematic , and added DS28E40 EV Kit PCB Layouts | 1, 2, 5, 9-13   |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: DS28E40