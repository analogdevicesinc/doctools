<!-- lastmod 2022-08-03 -->
Click here to ask about the production status of specific part numbers.

## DS28S60 Evaluation Kit

## General Description

The  DS28S60  evaluation  system  (EV  system)  provides the  hardware  and  software  necessary  to  exercise  the features  of  the  DS28S60.  The  EV  system  consists of  five  DS28S60Q+  devices  in  a  12-pin  TDFN  package,  a  DS9121E evaluation TDFN socket board, and a DS9482P# USB-to-I 2 C/SPI/1-Wire ®   adapter. The  evalu -ation  software  runs  under  Windows ® 10,  Windows  8, and Windows 7 operating systems, both 64-bit and 32-bit versions.  It  provides  a  handy  user  interface  to  exercise the features of the DS28S60.

Ordering Information appears at end of data sheet.

## EV Kit Contents

|   QTY | DESCRIPTION                                            |
|-------|--------------------------------------------------------|
|     5 | DS28S60Q+ DeepCover SPI Secure Authenticator (12 TDFN) |
|     1 | DS9121EQ+ Socket Board (12 TDFN)                       |
|     1 | DS9482P# USB to I 2 C/SPI/1-Wire Adapter               |
|     1 | USB Type-A to Micro-USB Type-B Cable                   |

Windows is a registered trademark of Microsoft Corporation.

## Features

- Demonstrates the Features of the DS28S60 DeepCover ®  Secure Coprocessor
- SPI  Communication  is  Logged  to  Aid  Firmware Designers Understanding of DS28S60
- SPI/1-Wire/I 2 C USB Adapter Creates a Virtual COM Port on Any PC
- Fully Compliant with USB Specification v2.0
- Software  Runs  on  Windows  10,  Windows  8,  and Windows 7 for Both 64-Bit and 32-Bit Versions
- 3.3V ±3% Operating Voltage
- Convenient On-Board Test Points, TDFN Socket
- Evaluation Software Available by Request

## DS28S60 EV System

<!-- image -->

<!-- image -->

Evaluates: DS28S60

## DS28S60 Evaluation Kit

## Quick Start

This  section  includes  a  list  of  recommended  equipment and instructions on how to set up the Windows-based PC for the evaluation software.

## Required Equipment

- DS9482P# USB to I 2 C/SPI/1-Wire Adapter (included)
- DS9121EQ+ TDFN socket board (included)
- DS28S60Q+ (five devices included)
- USB Type A to Micro-USB Type B cable (included)
- PC with a Windows 10, Windows 8, or Windows 7 operating system (64 bit or 32 bit) and a spare USB 2.0 or higher port
- Download DS28S60 EV kit software (light version) or request full DS28S60 EV kit developer software

Evaluates: DS28S60

Note: In the following sections, software-related items are identified by bolding . Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Hardware Setup and Driver Installation Quick Start

The following steps were performed on a Windows 10 PC to set up the DS28S60 EV kit hardware/software:

- 1) Obtain and unpack the DS28S60\_Evaluation\_ Kit\_Lite\_Version\_Setup\_V1\_0\_0 file  or  the  latest version.
- 2) In  a  file  viewer  (Figure  1),  double  click  on  the DS28S60\_Evaluation\_Kit\_Lite\_Version\_Setup\_ V1\_0\_0 .exe file to begin the installation.
- 3) The  setup  wizard  opens;  click Next as  shown  in Figure 2 .

Figure 1. File Viewer

<!-- image -->

Figure 2. DS28S60 Setup Wizard

<!-- image -->

- 4) Follow the instructions in the wizard and click Next to install the EV kit software and required drivers (Figure 3 and Figure 4 ).

Figure 3. DS9482P# Driver Installation

<!-- image -->

Figure 4. Finish DS9482P# Drivers Installation

<!-- image -->

- 5) Wait for the Installation to complete and launch program if desired after completion (Figure 5 and Figure 6 ).

Figure 5. Installation Progress

<!-- image -->

Figure 6. Run Software After Installation

<!-- image -->

## DS28S60 Evaluation Kit

- 6) Plug  the  DS9482P#  into  the  PC  with  DS9121EQ+ socket board by doing the following:
- a.  Open socket and insert a DS28S60Q+ as shown in Figure 7 . Note: Do not use the socket's pin 1 indicator. The pin 1 indicator is denotated on the PCB as a white dot and is located on the opposite side of the socket's marking.
- b.  Close burn-in socket.
- c. Connect the DS9121EQ J2 12-pin male plug into the DS9482P# 12-pin female socket per Figure 8 .
- d.  Set  the  DS9482P#  switch  to  3.3V  as  shown  in Figure 9 .
- e.  Plug the DS28S60 EV kit, using a USB Type-A to Micro-USB Type-B cable, into the PC.

## Evaluates: DS28S60

Figure 7. Orientation of the DS28S60 in Burn-In Socket

<!-- image -->

Figure 8. DS9482P# and DS9121EQ

<!-- image -->

- 7) The DS28S60 EV kit program opens and automatically connects to the COM port. This can be verified in the lower right corner of the window, as shown in Figure 10 .

Figure 9. Set DS9482P# to 3.3V

<!-- image -->

Figure 10. DS28S60 EV Kit Program (Default View Upon Opening)

<!-- image -->

## EV Kit Supported Functions

The  DS28S60  EV  kit  program  is  designed  as  a  usage  example.  The  GUI  optionally  displays  all  the  SPI  command sequence transactions as well as SHA and ECDSA computations when Settings  Debug Info is enabled. See Table 1 for descriptions of the functions in the GUI.

Table 1. GUI Setup and Usage Flows Supported

| FLOW                    | DESCRIPTION                                                                                                                                                                        |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Generic Commands        | Generic DS28S60 commands without SHA or ECDSA encryption, authentication, or protection. (e.g., Read Device, Read and Write Memory, Set and Read Protection and RNG function)      |
| ECDSA Functions*        | Examples to set up device for ECDSA authentication, certificate generation and verification. Examples for ECDSA encryption, authentication, signature generation and verification. |
| HMAC SHA-256 Functions* | Examples provided to setup device for HMAC authentication and verification and for HMAC encryption, authentication and the SHA-256 Generator.                                      |
| AES Bulk Encrypt*       | Examples to execute the DS28S60 AES Bulk Encrypt feature.                                                                                                                          |
| AES Bulk Decrypt*       | Examples to execute the DS28S60 AES Bulk Decrypt feature.                                                                                                                          |

## DS28S60 EV Kit Bill of Materials

| DESIGNATOR   |   QTY | DESCRIPTION                       | MANUFACTURER                    | PART NO.          |
|--------------|-------|-----------------------------------|---------------------------------|-------------------|
| U1           |     1 | DS28S60 12P TDFN 3x3 socket       | Plastronics                     | 12QN50S33030      |
| C1           |     1 | CAP CER 1µF 25V X7R 0603          | Kemet                           | 06033C105KAT2A    |
| J1           |     1 | CONN HEADER R/A 12POS 2.54MM      | Sullins Connector Solutions     | PRPC006DBAN-M71RC |
| J2           |     1 | CONN RCPT 12POS 0.1 TIN PCB R/A   | Samtec Inc.                     | SSW-106-02-T-D-RA |
| JB1          |     1 | 2P jumper block                   | Sullins Connector Solutions     | PEC02SAAN         |
| JP1          |     1 | HDR, BRKWAY,.100 3POS VERT,0.318' | Tyco Electronics                | 9-146276-0        |
| R1           |     1 | RES SMD 10KΩ 1% 1/10W 0603        | Panasonic Electronic Components | ERJ-3EKF1002V     |
| SW1          |     1 | SWITCH TACTILE SPST-NO 0.05A 32V  | C&K Components                  | KSR221GLFS        |
| TP1-TP7      |     7 | Test points                       | Keystone Electronics            | 36-5011-ND        |

Evaluates: DS28S60

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| DS28S60EVKIT# | EV Kit |

#Denotes RoHS compliant.

## DS28S60 EV Schematic Diagram

<!-- image -->

## DS28S60 Evaluation Kit

## DS28S60 EV Kit PCB Layout Diagrams

<!-- image -->

DS28S60 EV Kit-Top Assembly

DS28S60 EV Kit-Top Silkscreen

<!-- image -->

DS28S60 EV Kit-Bottom Metal

<!-- image -->

Evaluates: DS28S60

## DS28S60 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                              | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------|-----------------|
|                 0 | 6/20            | Initial release                                          | -               |
|                 1 | 7/20            | Updated General Description , Features , and Quick Start | 1, 6            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: DS28S60