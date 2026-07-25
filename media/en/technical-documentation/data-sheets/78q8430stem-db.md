<!-- lastmod 2022-08-02 -->
<!-- image -->

Simplifying System Integration TM

## 78Q8430 STEM Demo Board User Manual

© 2008 Teridian Semiconductor Corporation.  All rights reserved.

Teridian Semiconductor Corporation is a registered trademark of Teridian Semiconductor Corporation. Pentium is a registered trademark of Intel Corporation.  Windows is a registered trademark of Microsoft Corporation.  All other trademarks are the property of their respective owners.

Teridian Semiconductor Corporation makes no warranty for the use of its products, other than expressly contained in the Company's warranty detailed in the Teridian Semiconductor Corporation standard Terms and Conditions.  The company assumes no responsibility for any errors which may appear in this document, reserves the right to change devices or specifications detailed herein at any time without notice and does not make any commitment to update the information contained herein.  Accordingly, the reader is cautioned to verify that this document is current by comparing it to the latest version on http://www.teridian.com or by checking with your sales representative.

Teridian Semiconductor Corp., 6440 Oak Canyon, Suite 100, Irvine, CA 92618 TEL (714) 508-8800, FAX (714) 508-8877, http://www.teridian.com

## Table of Contents

|   1 Introduction .........................................................................................................................................5 | 1 Introduction .........................................................................................................................................5                                                                                             |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                                                                                                                                                             | Hardware Setup...................................................................................................................................8                                                                                                    |
|                                                                                                                                                             | Development (Host) PC Environment Setup..............................................................................11 Video Server PC Environment Setup .........................................................................................11 |
|                                                                                                                                                         1.3 | System Hardware Requirements..................................................................................................7                                                                                                                       |
|                                                                                                                                                             | 1.4 System Software Requirements ...................................................................................................7                                                                                                                 |
|                                                                                                                                                           2 | 2.1 Jumper and Dip Switch Settings...................................................................................................8                                                                                                                |
|                                                                                                                                                           3 | Software Setup..................................................................................................................................11 3.1                                                                                                |
|                                                                                                                                                             | 3.2                                                                                                                                                                                                                                                   |
|                                                                                                                                                           4 | 78Q8430 STEM Demo Board Schematic, BOM and PCB Layout                                                                                                                                                                                                 |
|                                                                                                                                                             | .................................................12                                                                                                                                                                                                   |
|                                                                                                                                                             | 3.3 ST Microconnect Target Configuration.......................................................................................11                                                                                                                     |
|                                                                                                                                                             | 3.4 78Q8430 Software Device Driver ...............................................................................................11                                                                                                                  |
|                                                                                                                                                           5 | Ordering Information........................................................................................................................23                                                                                                        |
|                                                                                                                                                           6 | Related Documentation....................................................................................................................23                                                                                                           |
|                                                                                                                                                           7 | Contact Information..........................................................................................................................23                                                                                                       |

## Figures

| Figure 1: 78Q8430 System Interface Diagram .............................................................................................6            |
|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Figure 2: 78Q8430 STEM Demo Board Jumper and Dip Switch Locations.................................................8                                  |
| Figure 3: Demo System Hardware Connections...........................................................................................9               |
| Figure 4: STEM EMI Bus Interface Block Diagram.....................................................................................12                |
| Figure 5: STEM EMI Bus Interface Schematic ...........................................................................................13             |
| Figure 6: STEM IO Bus Interface Schematic..............................................................................................14            |
| Figure 7: MICTOR Diagnostic Connectors Schematic ...............................................................................15                   |
| Figure 8: 78Q8430 MAC Interface Schematic............................................................................................16              |
| Figure 9: 78Q8430 PHY Interface Schematic.............................................................................................17             |
| Figure 10: Top Silkscreen Layout ...............................................................................................................19   |
| Figure 11: Top Layer Layout.......................................................................................................................19 |
| Figure 12: Ground Layer Layout.................................................................................................................20    |
| Figure 13: Inner Layer 1 Layout..................................................................................................................20  |
| Figure 14: Inner Layer 2 Layout..................................................................................................................21  |
| Figure 15: VCC Layer Layout .....................................................................................................................21  |
| Figure 16: Bottom Layer Layout..................................................................................................................22   |
| Figure 17: Bottom Silkscreen Layout..........................................................................................................22      |
| Tables                                                                                                                                               |
| Table 1: Demo Board Jumper Options .........................................................................................................8        |
| Table 2: Demo Board Dip Switch Options ....................................................................................................8         |
| Table 3: STEM Demo Board Bill of Materials .............................................................................................18           |
| Table 4: Order Numbers and Description ...................................................................................................23         |

## 1 Introduction

<!-- image -->

The 78Q8430 STEM Demo Board (D8430T3B\_STEM) is a design example for a 10/100BASE-TX MAC+PHY ST Microelectronics STEM daughter card.  The Demo Board plugs directly into STi5100 and STi5514 Evaluation Systems.  The network connection is provided by the 78Q8430 which is a single chip auto-sensing, auto-switching (auto-negotiation or parallel detect modes and auto-MDIX) 10/100BASE-TX Fast Ethernet transceiver with full duplex operation capability.  The device is designed specifically for the Audio/Visual (A/V) and Set Top Box (STB) markets and is easily interfaced to available A/V and STB core processors.

The 78Q8430 is compliant with applicable IEEE-802.3 standards.  MAC and PHY configuration and status registers are provided as specified by IEEE802.3u.  The integrated MAC is supported by an internal 32KByte transmit and receive SRAM FIFO.  The partition of transmit and receive queues are configurable through software, allowing the 78Q8430 to be tuned for specific applications.  The device contains hardware support for TCP-IP checksum and ARC address recognition.

The 78Q8430 STEM Demo Board includes support for the following 78Q8430 hardware interface features:

- The system bus interface operates like external memory with an active low chip select.
- A configurable bus interface with support for little endian and big endian formats.
- Supports an asynchronous 100 MHz (max) bus clock for STi5100/5514 operation.
- Supports 32-bit, 16-bit and 8 bit wide data bus formats.
- Optional EEPROM interface for configuration data.
- Two programmable LED outputs for PHY status.
- Single +3.3V power supply voltage with common ground plane.

A host processor interfaces directly to the FIFO via the GBI interface.  The D8430T3B\_STEM board is configured for 16-bit big endian bus format by default.  The bus can optionally be configured for 32-bit or 8-bit bus widths or little endian format.  Figure 1 shows the 78Q8430 system interfaces.

Figure 1: 78Q8430 System Interface Diagram

<!-- image -->

This document describes the setup and configuration of the 78Q8430 STEM Demo Board.  The demo board requires operation with a +3.3V power supply sourced from the STEM bus interface on the STi5100 evaluation board.  The 78Q8430 PHY interfaces to a CAT5 UTP cable via a 1:1 transformer.

The supplied software driver includes support for ST/OS-20.  The included 78Q8430 Software Driver Development Guidelines and 78Q8430 Software User Guide for ST/OS-20 describe the software interfacing requirements for quick driver integration and prompt system evaluation of the 78Q8430.

Use this document with those listed in the Related Documentation section.

## 1.1 Package Contents

The 78Q8430 STEM Demo Board kit includes:

- A 78Q8430 STEM Demo Board (D8430T3B\_STEM).
- A CD containing the 78Q8430 software device driver for ST/OS-20.
- The following documents on CD:
-  78Q8430 STEM Demo Board User Manual (this document)
-  78Q8430 Preliminary Data Sheet
-  78Q8430 Layout Guidelines
-  78Q8430 Software Driver Development Guidelines
-  78Q8430 Software User Guide for ST/OS-20

The printed circuit board Gerber files are available upon request.

## 1.2 Safety and ESD Notes

Connecting live voltages to the demo board system will result in potentially hazardous voltages on the boards.

<!-- image -->

The demo boards are ESD sensitive!  ESD precautions must be taken when handling these boards!

## 1.3 System Hardware Requirements

The following describes the minimum hardware requirements for the 78Q8430 Demo Board system:

- The 78Q8430 STEM Demo Board (D8430T3B\_STEM).
- An STi5100 Evaluation Platform (available from ST).
- A software development PC with the following minimum requirements: Pentium ® 4 CPU with 256 MB RAM and 40 GB hard drive running either Windows ® 2000 or Windows XP.
- An IP Video Server PC with the following minimum requirements: Pentium 4 CPU with 256 MB RAM and 40 GB hard drive, 10/100 ports for demo board connection, running either Windows 2000 or Windows XP.
- A 10/100Base-T hub or switch.
- An ST Microconnect JTAG emulator.  This device loads the IPSTB demo software into the STi5100 Evaluation Platform.
- Television for viewing the video demo.

## 1.4 System Software Requirements

The following describes the minimum software requirements for embedded application programming using the 78Q8430 Demo Board:

- ST20 Toolset: STi5100 BSP Version 2.0.5 Patch 1 (available from ST).
- IPBox: contains web\_server, htdocs, and video\_server folders (included in the 78Q8430 ST/OS-20 driver software release package).
- IPSTB application: Ipstba3\_esp - 5100 (included in the 78Q8430 ST/OS-20 driver software release package).

## 2 Hardware Setup

## 2.1 Jumper and Dip Switch Settings

The 78Q8430 STEM Demo Board utilizes various jumpers (J5, J6, and J8) and dip switches (S3) for establishing the startup configuration of the 78Q8430 device.  Figure 2 shows the location of the jumpers and dip switch.  Table 1 and Table 2 describe the jumper and dip switch options.  The jumper and switch numbers and settings are printed on the demo board.

Figure 2: 78Q8430 STEM Demo Board Jumper and Dip Switch Locations

<!-- image -->

Table 1: Demo Board Jumper Options

| Jumper   | Name                | Setting   | Description                                                          |
|----------|---------------------|-----------|----------------------------------------------------------------------|
| J5       | Chip Select Source  | notCS0    | Selects STEM notCS0 for 78Q8430 chip select signal source.           |
| J5       | Chip Select Source  | notCS1    | Selects STEM notCS1 for 78Q8430 chip select signal source (default). |
| J6       | Interrupt Selection | notINTR0  | Connects 78Q8430 interrupt output to STEM notINTR0 signal.           |
| J6       | Interrupt Selection | notINTR1  | Connects 78Q8430 interrupt output to STEM notINTR1 signal (default). |
| J8       | PMEB Selection      | notINTR1  | Connects 78Q8430 PMEB output to STEM notINTR1 signal.                |
| J8       | PMEB Selection      | PMEB      | Connects 78Q8430 PMEB output to board PMEB signal.                   |

Table 2: Demo Board Dip Switch Options

| S3 - Device Mode Configuration Dip Switch ( 1 = open, 0 = closed)   | S3 - Device Mode Configuration Dip Switch ( 1 = open, 0 = closed)                                                                                                                                                       |
|---------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Position 1 (ENDIAN1)                                                | Position 1, 2: 0, 0 (default) = big endian (MSB at high bit positions) 0, 1 = bytes are little endian inside 16 bit words 1, 0 = word endian (MSW at low bit positions) 1, 1 = little endian (MSB at low bit positions) |
| Position 2 (ENDIAN0)                                                | Position 1, 2: 0, 0 (default) = big endian (MSB at high bit positions) 0, 1 = bytes are little endian inside 16 bit words 1, 0 = word endian (MSW at low bit positions) 1, 1 = little endian (MSB at low bit positions) |

| S3 - Device Mode Configuration Dip Switch ( 1 = open, 0 = closed)   | S3 - Device Mode Configuration Dip Switch ( 1 = open, 0 = closed)                                                                                                                                                                                                                                                                                                             |
|---------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Position 3 (BUSMODE)                                                | Position 3, 5, 4: 0, 0, 0 = sync bus, external system clock, memwait act low 0, 0, 1 = sync bus, external system clock, memwait act high 0, 1, 0 = reserved 0, 1, 1 = reserved 1, 0, 0 = async bus, external system clock, memwait act low 1, 0, 1 (default) = async bus, external system clock, memwait act high 1, 1, 0 = async bus, internal system clock, memwait act low |
| Position 5 (CLCKMODE)                                               | Position 3, 5, 4: 0, 0, 0 = sync bus, external system clock, memwait act low 0, 0, 1 = sync bus, external system clock, memwait act high 0, 1, 0 = reserved 0, 1, 1 = reserved 1, 0, 0 = async bus, external system clock, memwait act low 1, 0, 1 (default) = async bus, external system clock, memwait act high 1, 1, 0 = async bus, internal system clock, memwait act low |
| Position 4 (WAITMODE)                                               | Position 3, 5, 4: 0, 0, 0 = sync bus, external system clock, memwait act low 0, 0, 1 = sync bus, external system clock, memwait act high 0, 1, 0 = reserved 0, 1, 1 = reserved 1, 0, 0 = async bus, external system clock, memwait act low 1, 0, 1 (default) = async bus, external system clock, memwait act high 1, 1, 0 = async bus, internal system clock, memwait act low |
| Position 6 (BTZ0)                                                   | Position 6, 7: 0, 0 = 32 bit bus width 0, 1 (default) 16 bit bus width (only DATA[15:0] are used) 1, 0 = 8 bit bus width (only DATA [7:0] are used) 1, 1 = reserved                                                                                                                                                                                                           |
| Position 7 (BTZ1)                                                   | Position 6, 7: 0, 0 = 32 bit bus width 0, 1 (default) 16 bit bus width (only DATA[15:0] are used) 1, 0 = 8 bit bus width (only DATA [7:0] are used) 1, 1 = reserved                                                                                                                                                                                                           |
| Position 8 (NC)                                                     | No Connection                                                                                                                                                                                                                                                                                                                                                                 |

## 2.2 Connections

Connect the system components as shown in Figure 3.  Refer to the STi5100 documentation for additional information on the STi5100 Evaluation Platform connections.

Figure 3: Demo System Hardware Connections

<!-- image -->

STEP 1: Attach the 78Q8430 STEM Demo Board to the STi5100 Evaluation Board via the two 140 pin connectors on the bottom of the demo board to the two corresponding STEM connectors on the STi5100 Evaluation Board.

STEP 2: Connect the development PC Ethernet port to the switch/hub using a CAT-5 cable.

STEP 3: Connect the ST20 in-circuit-emulator (ICE) to the switch/hub using a CAT-5 cable.

STEP 4: Connect the ST20 ICE to the STi5100 Evaluation Board using the ribbon cable.

STEP 5: Connect the television to the STi5100 Evaluation Board using a video/audio cable.

STEP 6: Connect the video server PC to the STEM demo board RJ-45 connector using a CAT-5 cable.

STEP 7: Refer to the STi5100 documentation for powering up the evaluation system.  The 78Q8430 STEM Demo Board receives its power through the STEM bus interface on the STi5100 Evaluation Board.

## 3 Software Setup

The path names (in italics ) given in the following steps are for illustrative purposes.  If the software has been installed in different directories than those given below, replace the path in the example with the appropriate path for your installation.

## 3.1 Development (Host) PC Environment Setup

The following steps describe how to set up the host PC software environment.

STEP 1: Modify the Windows Environment to use the ST20R2.0.5 tool set as follows:

Append C:\STM\ST20R2.0.5 \bin; to the front of the system variable 'Path'.  As an example, the new path might be C:\STM\ST20R2.0.5 \bin; C:\STM\ST20R1.9.6 \bin;%SystemRoot%\system32;……

STEP 2: Modify the system variable 'ST20ROOT' as follows:

ST20ROOT

C:\STM\ST20R2.0.5

STEP 3: Reboot the PC.

## 3.2 Video Server PC Environment Setup

The following steps describe how to set up the MPEG2 video server PC environment.

STEP 1: Set up the ST TSVOD server for unicast video streaming:

G:\ IPBox\servers\ TS\_VOD\_Server

STEP 2: Set up the ST Multicast server for multicast video streaming:

G:\ IPBox\servers\ Multicast

STEP 3: Set the video server PC IP address to 192.168.1.110.

STEP 4: Start the appropriate server before requesting a video stream.

## 3.3 ST Microconnect Target Configuration

Set the ST Microconnect Target Configuration (via Ethernet) IP addresses as follows:

Host PC:

192.168.1.100

ST Microconnect:

192.168.1.30

Video Server PC:

192.168.1.110

## 3.4 78Q8430 Software Device Driver

The 78Q8430 ST/OS-20 device driver software and user guide, 78Q8430 Software User Guide for ST/OS-20, are provided with the demo board.  Refer to that documentation for additional information on configuring and installing the driver.

## 4 78Q8430 STEM Demo Board Schematic, BOM and PCB Layout

.

Figure 4: STEM EMI Bus Interface Block Diagram

<!-- image -->

P1

Figure 5: STEM EMI Bus Interface Schematic

<!-- image -->

Figure 6: STEM IO Bus Interface Schematic

<!-- image -->

Figure 7: MICTOR Diagnostic Connectors Schematic

<!-- image -->

.

Figure 8: 78Q8430 MAC Interface Schematic

<!-- image -->

Figure 9: 78Q8430 PHY Interface Schematic

<!-- image -->

Table 3: STEM Demo Board Bill of Materials

|   Item |   Quantity | Reference                                   | Part                  | PCB Footprint        | Part Number          | Vendor                   |
|--------|------------|---------------------------------------------|-----------------------|----------------------|----------------------|--------------------------|
|      1 |          2 | C30,C31                                     | CAP, 27pF, 50V        | C_0603               | C1608C0G1H270J       | TDK                      |
|      2 |         15 | C9-C18,C20-C24                              | CAP, 0.1uF, 16V       | C_0603               | ECJ-1VB1E104K        | Panasonic                |
|      3 |          6 | C3-C6,C19,C25                               | CAP,10uF,10V          | C_0805               | GRM21BR61A106K E19L  | Murata                   |
|      4 |          0 | GND1,GND2                                   | MTHOLE                | MTHOLE               |                      |                          |
|      5 |          3 | J5,J6,J8                                    | CON3                  | SIP\3P               | PBC03SAAN            | Sullins Electronics Corp |
|      6 |          2 | TP4,TP8                                     | CON2                  | SIP\2P               | PBC02SAAN            | Sullins Electronics Corp |
|      7 |          1 | J9                                          | CON10                 | SIP\10P              | PBC10SAAN            | Sullins Electronics Corp |
|      8 |          2 | J1,J4                                       | STEM connector        | STEM CON 5-5179010-6 | STEM CON 5-5179010-6 | AMP                      |
|      9 |          1 | J16                                         | Integrated RJ45       | RJ45-INT             | J1011F01P            | Pulse Eng                |
|     10 |          1 | Y1                                          | 25MHz Crystal         | XTAL-SMD             | ABMM-25MHz           | Abracon                  |
|     11 |          1 | L1 (USE 0-ohm)                              | Ferrite Bead          | L_0805               | MMZ2012S181A         | TDK                      |
|     12 |         14 | R19,R65,R67-R69, R71,R72,R89-R95            | RES, 10k, 5%          | R_0603               | ERJ-3GEYJ103V        | Panasonic                |
|     13 |          1 | SW1                                         | Switch, PB            | PB                   | EVQ-PJX05M           | Panasonic                |
|     14 |          1 | S3                                          | 8-Position DIP Switch | DIPSW-16             | 90HBJ08PT            | Grayhill, Inc            |
|     15 |          4 | R44-R47                                     | RES, 49.9, 1%         | R_0603               | ERJ-3EKF49R9V        | Panasonic                |
|     16 |         47 | R1,R2,R4-R18, R20-R38, R53, R54,R70,R81-R88 | RES, 33, 5%           | R_0603               | ERJ-3GEYJ330V        | Panasonic                |
|     17 |          1 | R3                                          | RES,100,5%            | R_0603               | ERJ-3GEYJ101V        | Panasonic                |
|     18 |          2 | R63,R64                                     | RES, 680, 5%          | R_0603               | ERJ-3GEYJ681V        | Panasonic                |
|     19 |          1 | TP1                                         | CON17                 | SIP\17P              | PBC17SAAN            | Sullins Electronics Corp |
|     20 |          2 | TP2,TP5                                     | Mictor 38-pin         | MICTOR               | 2-767004-2           | Tyco                     |
|     21 |          1 | U1                                          | 78Q8430               | 100 LQFP             | 78Q8430              | Teridian Semiconductor   |
|     22 |          1 | U2                                          | 93LC46                | SOIC8                | 93LC46BT-I/SN        | Microchip                |
|     23 |          4 | UX1-UX4                                     | Spare - not installed |                      |                      |                          |

&lt;

Figure 10: Top Silkscreen Layout

<!-- image -->

Figure 11: Top Layer Layout

<!-- image -->

Figure 12: Ground Layer Layout

<!-- image -->

Figure 13: Inner Layer 1 Layout

<!-- image -->

Figure 14: Inner Layer 2 Layout

<!-- image -->

Figure 15: VCC Layer Layout

<!-- image -->

Figure 16: Bottom Layer Layout

<!-- image -->

Figure 17: Bottom Silkscreen Layout

<!-- image -->

## 5 Ordering Information

Table 4 lists the order number and description for the 78Q8430 STEM Demo Board.

Table 4: Order Numbers and Description

| Part Description                        | Order Number   |
|-----------------------------------------|----------------|
| 78Q8430 STEM Demo Board (D8430T3B_STEM) | 78Q8430STEM-DB |

## 6 Related Documentation

The following 78Q8430 documents are available from Teridian Semiconductor Corporation:

78Q8430 Preliminary Data Sheet

78Q8430 Layout Guidelines

78Q8430 Software Driver Development Guidelines

78Q8430 Software User Guide for ST/OS-20

78Q8430 STEM Demo Board User Manual

78Q8430 ARM9 Linux Driver User and Test Guide

78Q8430 Embest Evaluation Board User Manual

## 7 Contact Information

For more information about Teridian Semiconductor products or to check the availability of the 78Q8430, contact us at:

6440 Oak Canyon Road Suite 100 Irvine, CA 92618-5201

Telephone: (714) 508-8800

FAX: (714) 508-8878

Email: lan.support@teridian.com

For a complete list of worldwide sales offices, go to http://www.teridian.com.

## Revision History

|   Revision | Date       | Description        |
|------------|------------|--------------------|
|        1.0 | 03/20/2008 | First publication. |