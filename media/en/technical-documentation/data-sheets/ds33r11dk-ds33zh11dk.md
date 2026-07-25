<!-- lastmod 2022-08-04 -->
<!-- image -->

XVW

WIX

## www.maxim-ic.com

## GENERAL DESCRIPTION

The  DS33R11/DS33ZH11  design  kit  is  an  easy-touse  evaluation  board  for  the  DS33R11  and  the DS33ZH11 Ethernet transport-over-serial link devices.  The  DS33ZH11  section  of  the  design  kit contains  an  option  for  either  T3E3  or  T1E1  serial links. The DS33R11 chipset has an integrated T1E1 transceiver.  All  serial  links  are  complete  with  line interface,  transformers,  and  network  connections. Dallas' ChipView software is provided with the design kit, giving point-and-click access to configuration and status registers from a Windows  -based PC. On-board LEDs indicate receive loss-of-signal, queue overflow, Ethernet link, Tx/Rx, and interrupt status.

Windows is a registered trademark of Microsoft Corp.

## DESIGN KIT CONTENTS

DS33R11DK/DS33ZH11DK Main Board (DS33R11 + DS33ZH11)

CD ROM:

ChipView Software and Manual DS33R11DK/DS33ZH11DK Data Sheet Configuration Files

## DS33R11DK/DS33ZH11DK Ethernet Transport Design Kit

## FEATURES

-  Demonstrates Key Functions of DS33R11 and DS33ZH11 Ethernet Transport Chipsets
-  DS33ZH11 Section Includes DS21348 T1E1 LIU and DS3150 T3E3 LIU, Transformers, BNC and RJ48 Network Connectors and Termination
-  Provides Support for Hardware and Software Modes
-  On-Board MMC2107 Processor and ChipView Software Provide Point-and-Click Access to DS33R11 Register Set
-  All DS33R11 and DS33ZH11 Interface Pins are Easily Accessible for External Data Source/Sink
-  LEDs for Loss-of-Signal, Queue Overflow, Ethernet Link, Tx/Rx, and Interrupt Status
-  Easy-to-Read Silkscreen Labels Identify the Signals Associated with All Connectors, Jumpers, and LEDs

## ORDERING INFORMATION

PART

DESCRIPTION

DS33R11DK

Design Kit for DS33R11 and DS33ZH11

<!-- image -->

## TABLE OF CONTENTS

| GENERAL DESCRIPTION..........................................................................................................1                                                                                                                                                                                         |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DESIGN KIT CONTENTS............................................................................................................1                                                                                                                                                                                       |
| ORDERING INFORMATION .......................................................................................................1                                                                                                                                                                                          |
| COMPONENT LIST.....................................................................................................................3                                                                                                                                                                                   |
| SYSTEM FLOORPLAN...............................................................................................................8                                                                                                                                                                                       |
| PC BOARD ERRATA..................................................................................................................8                                                                                                                                                                                     |
| FILE LOCATIONS.......................................................................................................................9                                                                                                                                                                                 |
| BASIC OPERATION..................................................................................................................10                                                                                                                                                                                    |
| POWERING UP THE DESIGN KIT ...............................................................................................................10 General............................................................................................................................................................... 10 |
| BASIC DS33R11 INITIALIZATION ..............................................................................................................10                                                                                                                                                                          |
| Additional Configuration for DS33R11 ............................................................................................................... 10                                                                                                                                                                |
| BASIC DS33ZH11 I NITIALIZATION............................................................................................................11                                                                                                                                                                           |
| Additional Configuration for DS33ZH11............................................................................................................. 11                                                                                                                                                                  |
| MONITOR AND CAPTURE ETHERNET TRAFFIC ...............................................................................11                                                                                                                                                                                                 |
| LEDS, CONFIGURATION SWITCHES, JUMPERS, AND CONNECTORS..............................12                                                                                                                                                                                                                                  |
| ADDRESS MAP (ALL CARDS) ................................................................................................16                                                                                                                                                                                             |
| DS33R11 INFORMATION.........................................................................................................16                                                                                                                                                                                         |
| DS33R11DK/DS33ZH11DK INFORMATION............................................................................17                                                                                                                                                                                                         |
| SCHEMATICS...........................................................................................................................17                                                                                                                                                                                |

## COMPONENT LIST

| DESIGNATION                                                                                        |   QTY | DESCRIPTION                                               | SUPPLIER/PART NUMBER            |
|----------------------------------------------------------------------------------------------------|-------|-----------------------------------------------------------|---------------------------------|
| C01, C28, CB03, CB49, CB136, CB146, CB192, CP01, CP2, CP03                                         |    10 | 470 µ F ± 20%, 6.3V tantalum capacitors (D case)          | KEM T491D477M006AS              |
| C02, C11, C30, CB36, CB37, CB40-CB43, CB45, CB153, CB195, CB197                                    |    13 | 1 µ F ± 10%, 16V ceramic capacitors (1206)                | Panasonic ECJ-3YB1C105K         |
| C03-C06, C13, C14, C17, C20, C22, C26, C29, . . .incomplete listing (94 devices total)             |    94 | 0.1 µ F ± 10%, 16V ceramic capacitors (0603)              | Phycomp 06032R104K7B20D         |
| C07, C08, C09, C12, C16, C18, C19, C21, C23, C24, C31, . . . incomplete listing (81 devices total) |    81 | 10 µ F ± 20%, 10V ceramic capacitors (1206)               | Panasonic ECJ-3YB1A106M         |
| C10, CB23, CB24, CB26, CB33, CB91, CB95, CB151, CB161, CB162, CB175, CB177, CB181,                 |    16 | 0.1 µ F ± 20%, 16V X7R ceramic capacitors (0603)          | AVX 0603YC104MAT                |
| CB185, CB189, CB190 C15, CB76, CB77, CB169, CB179, CB188                                           |     6 | 10 µ F ± 20%, 10V ceramic capacitors (1206)               | Panasonic ECJ-3YB1A106M         |
| C25, C27, CB154- CB156, CB158-CB160, CB166, CB173, CB174, CB182, CB183                             |    13 | 4.7 µ F, 6.3V ceramic multilayer capacitors (0603)        | UNK ECJ-1VB0J475M               |
| CB105                                                                                              |     1 | 0.1 µ F ± 10%, 16V ceramic capacitor (0805)               | Phycomp 08052R104K7B20D         |
| CB180                                                                                              |     1 | 1 µ F ± 10%, 16V ceramic capacitor (1206)                 | Panasonic ECJ-3YB1C105K         |
| DB01                                                                                               |     1 | 1A, 40V Schottky diode                                    | International Rectifier 10BQ040 |
| DS01, DS02, DS05, DS13, DS14                                                                       |     5 | Red LEDs (SMD)                                            | Panasonic LN1251C               |
| DS03, DS08, DS15, DS19                                                                             |     4 | Red LEDs (SMD)                                            | Panasonic LN1251C               |
| DS04, DS07, DS12, DS21                                                                             |     4 | Green LEDs (SMD)                                          | Panasonic LN1351C               |
| DS06, DS09, DS10, DS11, DS16, D17, DS18, DS20                                                      |     8 | Amber LEDs (SMD)                                          | Panasonic LN1451C               |
| GND_TP01, GND_TP02, GND_TP03, GND_TPB01, GND_TPP01-                                                |    27 | Standard ground clip                                      | Keystone 4954                   |
| GND_TPP23 H01-H06, HB01, HB02, HB03                                                                |     9 | Kit, 4-40 hardware, 0.5" nylon standoff and nylon hex-nut | Lab stock 4-40KIT6              |

| DESIGNATION                                                                                                                                                                        |   QTY | DESCRIPTION                                              | SUPPLIER/PART NUMBER            |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|----------------------------------------------------------|---------------------------------|
| J01, J05, J06, J18, J36                                                                                                                                                            |     5 | Terminal strip (10-pin, dual row, vertical)              | Samtec TSW-105-07-T-D           |
| J02                                                                                                                                                                                |     1 | DB9 right-angle connector (long case)                    | AMP 747459-1                    |
| J03, J10, J11, J14-J17, J25, J26, J27, J32, J34, J35                                                                                                                               |    13 | 100-mil, 2-position jumpers                              | Lab stock Not applicable        |
| J04                                                                                                                                                                                |     1 | 100-mil, 2 x 7-position jumper                           | Lab stock Not applicable        |
| J07, J08, J09                                                                                                                                                                      |     3 | Not Populated 14-pin headers, dual row, vertical         | Samtec NOPOP-HDR-TSW-107-14-T-D |
| J12, J13, J22, J23, J30, J33                                                                                                                                                       |     6 | L_TERMINAL STRIP, 10 PIN, DUAL ROW, VERT DO NOT POPLUATE | DNP                             |
| J19, J24                                                                                                                                                                           |     2 | Not Populated 5-pin connectors, BNC 75 Ω , right angle   | Trompetor NOPOP-UCBJR220        |
| J20, JB03                                                                                                                                                                          |     2 | 8-pin single-port RJ48 connectors                        | MOLEX 15-43-8588                |
| J21, J37                                                                                                                                                                           |     2 | 8-pin connectors (fastjack single, for national PHY)     | Halo Electronics HFJ11-2450E    |
| J28, J29, J31                                                                                                                                                                      |     3 | 20-pin headers (dual row, vertical)                      | Samtec HDR-TSW-110-14-T-D       |
| J38, J39                                                                                                                                                                           |     2 | 5-pin BNC connectors (75 Ω , right angle)                | Trompetor UCBJR220              |
| J40, J41                                                                                                                                                                           |     2 | 5-pin BNC connectors (right angle)                       | Trompetor UCBJR220              |
| JB01, JB05                                                                                                                                                                         |     2 | Sockets, banana plug, horizontal, black                  | Mouser Electronics 164-6218     |
| JB02, JB04                                                                                                                                                                         |     2 | Sockets, banana plug, horizontal, red                    | Mouser Electronics 164-6219     |
| JP01-JP11, JPB01                                                                                                                                                                   |    12 | 100-mil, 3-position jumpers                              | Lab stock Not applicable        |
| R1, R2                                                                                                                                                                             |     2 | 1.0k Ω ± 5%, 1/16W resistors (0603)                      | Panasonic ERJ-3GEYJ103V         |
| R01                                                                                                                                                                                |     1 | 1.0M Ω ± 5%, 1/16W resistor (0603)                       | Panasonic ERJ-3GEYJ105V         |
| R02                                                                                                                                                                                |     1 | 10k Ω ± 1%, 1/10W resistor (0805)                        | Panasonic ERJ-6ENF1002V         |
| R03, R04, R05, R09, R14, R15, R21, RB35, RB52, RB53, RB58, RB69, RB70, RB73, RB77-RB86, RB89, RB90, RB93-RB96, RB101, RB132, RB133, RB137, RB138, RB144, RB151-RB155, RB159, RB162 |    43 | 30 Ω , 1/16W resistors (0603)                            | Panasonic ERJ-3GEYJ300V         |
| R06, R08, R23, R24                                                                                                                                                                 |     4 | 49.9 Ω ± 1%, 1/16W resistors (0603)                      | Panasonic ERJ-3EKF49R9V         |

| DESIGNATION                                                                                                         |   QTY | DESCRIPTION                           | SUPPLIER/PART NUMBER     |
|---------------------------------------------------------------------------------------------------------------------|-------|---------------------------------------|--------------------------|
| R07, R10, R12, R13, RB15                                                                                            |     5 | 0 Ω ± 5%, 1/16W resistors (0603)      | Panasonic ERJ-3GEY0R00V  |
| R11, RB167                                                                                                          |     2 | 10.0k Ω ± 1%, 1/16W resistors (0603 ) | Panasonic ERJ-3EKF1002V  |
| R16-R19                                                                                                             |     4 | 0 Ω ± 5%, 1/10W resistors (0805)      | Panasonic ERJ-6GEY0R00V  |
| R20, R22                                                                                                            |     2 | 330 Ω ± 5%, 1/8W resistors (1206)     | Panasonic ERJ-8ENF3300V  |
| RB01-RB03, RB06- RB13, RB17, RB18, RB22, RB25, RB27, RB28, RB32, RB33                                               |    19 | 10k Ω ± 5%, 1/16W resistors (0603)    | Panasonic ERJ-3GEYJ103V  |
| RB04, RB05, RB30, RB31, RB34, RB36- RB43, RB59-RB61, RB63, RB99, RB100, RB150                                       |    20 | 10k Ω ± 5%, 1/16W resistors (0603)    | Panasonic ERJ-3GEYJ103V  |
| RB129                                                                                                               |     1 | 30 Ω ± 5%, 1/16W resistor (0603)      | Panasonic ERJ-3GEYJ300V  |
| RB14, RB19, RB44- RB47, RB49-RB51, RB54, RB97, RB98, RB102, RB104, RB116, RB178                                     |    16 | 2.0k Ω ± 5%, 1/16W resistors (0603)   | Panasonic ERJ-3GEYJ202V  |
| RB148, RB149                                                                                                        |     2 | 61.9 Ω ± 1%, 1/10W resistors (0805)   | Panasonic ERJ-6ENF61R9V  |
| RB156                                                                                                               |     1 | 330 Ω ± 5%, 1/10W resistor (0805)     | Panasonic ERJ-6GEYJ331V  |
| RB16, RB20, RB48, RB66, RB67, RB68, RB71, RB74, RB75, RB135, RB142, RB146, RB157, RB161, RB165, RB169, RB174, RB176 |    18 | 330 Ω ± 5%, 1/16W resistors (0603)    | Panasonic ERJ-3GEYJ331V  |
| RB177                                                                                                               |     1 | 51.1 Ω ± 1%, 1/10W resistor (0805)    | Panasonic ERJ-6ENF51R1V  |
| RB21, RB23                                                                                                          |     2 | 330 Ω ± 5%, 1/16W resistors (0603)    | Panasonic ERJ-3GEYJ331V  |
| RB24                                                                                                                |     1 | 1.0k Ω ± 5%, 1/16W resistor (0603)    | Panasonic ERJ-3GEYJ102V  |
| RB26, RB103, RB105- RB115, RB117-RB128, RB130, RB131, RB134, RB136, RB139-RB141, RB143, RB163, RB166, RB170         |    36 | 1.0k Ω ± 5%, 1/16W resistors (0603)   | Panasonic ERJ-3GEYJ102V  |
| RB29                                                                                                                |     1 | 0 Ω ± 5%, 1/8W resistor (1206)        | Panasonic ERJ-8GEYJ0R00V |

| DESIGNATION                                                                                            |   QTY | DESCRIPTION                                                                            | SUPPLIER/PART NUMBER                  |
|--------------------------------------------------------------------------------------------------------|-------|----------------------------------------------------------------------------------------|---------------------------------------|
| RB55, RB56, RB57, RB62, RB64, RB65, RB72, RB76, RB145, RB147, RB158, RB160, RB164, RB168, RB173, RB175 |    16 | 5.1k Ω ± 5%, 1/16W resistors (0603)                                                    | Panasonic ERJ-3GEYJ512V               |
| RB87, RB91                                                                                             |     2 | 60.4 Ω ± 1%, 1/10W resistors (0805)                                                    | Panasonic ERJ-6ENF60R4V               |
| RB88, RB92, RB171, RB172                                                                               |     4 | 54.9 Ω ± 1%, 1/16W resistors (0603)                                                    | Panasonic ERJ-3EKF54R9V               |
| SHORT01                                                                                                |     1 | 2-position SMD jumper Do not populate. Intended to have solder bridge during assembly. | Not populated                         |
| SW01, SW02                                                                                             |     2 | 4-pin single-pole switch                                                               | Panasonic EVQPAE04M                   |
| T01                                                                                                    |     1 | 16-pin dual SMT transformer                                                            | Pulse Engineering TX1099              |
| T02, T03                                                                                               |     2 | 6-pin SMT transformers (1:2CT, transmitter/receiver)                                   | Pulse Engineering PE-65968            |
| TB01                                                                                                   |     1 | 12-pin SMT transformer (1CT:1CT and 1CT:2CT)                                           | Pulse Engineering PE-68877            |
| TP01-TP03, TPB01- TPB11, TPP01,TPP02                                                                   |    16 | Test points (one plated hole) Do not stuff.                                            | -                                     |
| U01, U15                                                                                               |     2 | Microprocessor voltage monitors 2.93V reset, 4-pin SOT143                              | Maxim MAX811SEUS-T                    |
| U02                                                                                                    |     1 | 2Mb SPI serial EEPROM 8-pin SO, 2.7V to 3.6V                                           | Atmel AT25F2048N-10SU-2.7             |
| U03                                                                                                    |     1 | MMC2107 Processor                                                                      | Motorola MMC2107                      |
| U04                                                                                                    |     1 | FPGA IC 1.2V, 20mm x 20mm, 144-pin TQFP                                                | Lattice Semiconductor LFEC3E-3T144C   |
| U05, UB03                                                                                              |     2 | Cypress SRAM, Lab Stock                                                                | Lab stock                             |
| U06, U07                                                                                               |     2 | High-speed inverters                                                                   | Fairchild Semiconductor NC7SZ86       |
| U08, UB07                                                                                              |     2 | 1.8V or Adj 8-Pin µ MAX/SO                                                             | Maxim MAX1792EUA18                    |
| U09                                                                                                    |     1 | DS33R11, Z44/2156 MCM 27mm x 27mm, 256-pin BGA                                         | Dallas Semiconductor DS33R11          |
| U10, U14                                                                                               |     2 | DsPHYTER II Single 10/100 Ethernet transceiver (65-pin LLP)                            | National Semiconductor DP83847ALQA56A |

| DESIGNATION   |   QTY | DESCRIPTION                                                                          | SUPPLIER/PART NUMBER            |
|---------------|-------|--------------------------------------------------------------------------------------|---------------------------------|
| U11           |     1 | DS33ZH11 ELITE 10/100 Ethernet transport over serial link 10mm x 10mm, 100-pin CSBGA | Dallas Semiconductor DS33ZH11   |
| U12           |     1 | DS21348 LIU 44-pin TQFP                                                              | Dallas Semiconductor DS21348    |
| U13           |     1 | DS3150 T3/E3/STS-1 LIU I/F 48-pin TQFP                                               | Dallas Semiconductor DS3150T    |
| UB01          |     1 | Dual RS-232 transceiver with 3.3V/5V internal capacitors                             | Maxim MAX3233E                  |
| UB02          |     1 | LDO regulator with reset,1.20V output 300mA, 6-pin SOT23                             | Maxim MAX1963EZT120-T           |
| UB04, UB05    |     2 | Synchronous DRAM, 1Meg x 32 x 4 banks, 86-pin TSOP                                   | Micron MT48LC4M32B2TG-7         |
| UB06          |     1 | High-speed buffer                                                                    | Fairchild Semiconductor NC7SZ86 |
| XB01          |     1 | Low-profile 8.0MHz crystal                                                           | ECL EC1-8.000M                  |
| Y01, YB05     |     2 | Oscillator, crystal clock 3.3V, 2.048MHz (needs socket)                              | SaRonix NTH039A3-2.0480         |
| Y02           |     1 | Not populated Oscillator, crystal clock 3.3V, 25.000MHz (low jitter)                 | SaRonix NTH089AA3-25.000        |
| Y03, YB03     |     2 | Oscillator, crystal clock 3.3V, 100.000MHz                                           | SaRonix NTH089A3-100.0000       |
| Y04           |     1 | SPI serial EEPROM 2.7V, 16k, 8-pin DIP (needs socket)                                | Atmel AT25160A-10PI-2.7         |
| Y05           |     1 | Oscillator, crystal clock, 3.3V, 34.368MHz (needs socket)                            | SaRonix NTH089AA3-34.368        |
| YB01          |     1 | Oscillator, crystal clock 3.3V, 44.736MHz (needs socket)                             | SaRonix NTH089AA3-44.736        |
| YB02          |     1 | Oscillator, crystal clock 3.3V, 1.544MHz (needs socket)                              | SaRonix NTH039A3-1.5440         |
| YB04          |     1 | Oscillator, crystal clock 3.3V, 25.000MHz (low jitter)                               | SaRonix NTH089AA3-25.000        |

## SYSTEM FLOORPLAN

<!-- image -->

## PC BOARD ERRATA

- Center tap of T02 was not pulled to V3\_3 in DS33R11DK/DS33ZH11DK01A0 revision (page 23 in schematic). Pin T02.2 is pulled to V3\_3 with a wire in the DS33R11DK/DS33ZH11DK01A0 revision.
- Reference designators were assigned for R1, R2 and R01, R02. R1 and R2 will be renamed in the next design.
- Component  R1,  R2  and  Y05  are  on  bottom  of  the  PC  board  but  do  not  have  the  same  prefix  as  other components on the bottom side.
- Silkscreen for J36.6 is mislabeled. It reads 'RT0' but should read 'RT1.'
- Oscillators Y03 and YB03 are not suitable for use as input clocks for the Ethernet PHY. Because of this, the oscillators will only be used as the SDRAM oscillators. These oscillators generate too much jitter to function as the input clock for the PHY. This requires that the PHY is driven by the default oscillator, YB04 and YB02. Jumpers JP03 and JP11 have been modified to prevent accidental selection of the wrong oscillator.

## FILE LOCATIONS

This design kit relies upon several supporting files, which are provided on the CD and are available as a zip file from the Maxim website at www.maxim-ic.com/DS33R11DK.

All locations are given relative to the top directory of the CD/zip file.

Table 1. DS33Z11 Register Definition and Configuration Files

| FILE NAME.                                                                                               | FILE USAGE                                                                                                                                                                                                          |
|----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| .\DS33R11_cfg_demo_gui\DS33Z11.def                                                                       | Top level definition file to select in ChipView's register mode. This file autoloads the remaining definition files shown below. (Note: The DS33R11 is composed of an integrated DS33Z11 and an integrated DS2155.) |
| .\DS33R11_cfg_demo_gui\SU_LI_PORT1.def .\DS33R11_cfg_demo_gui\DS2155.def                                 | Dependant files. These are called by the DS33Z11.def file, which is listed above.                                                                                                                                   |
| .\DS33R11_cfg_demo_gui\basic_Config.eset                                                                 | GUI interface for loading settings when running the Zchip plug-in (launched from the Tools menu of the ChipView program).                                                                                           |
| .\DS33R11_cfg_demo_gui\basic_config.mfg .\DS33R11_cfg_demo_gui\e1_gapclk_crc4_hdb3_nocas.ini             | Files for manually configuring the DS33Z11 and DS2155 to convert Ethernet traffic to serial a T1E1 stream.                                                                                                          |
| .\DS33R11_cfg_demo_gui\DS2155_T1_BERT_ESF.ini .\DS33R11_cfg_demo_gui\gapclk_llb_DS2155_T1_ESF_LBO0_2.ini | Stand-alone configuration files for evaluating the DS33R11's integrated DS2155 T1E1 transceiver. These files are for evaluating DS2155 functionality, and disrupt the Ethernet to serial traffic flow.              |

## BASIC OPERATION

## Powering Up the Design Kit

- Connect PCB 3.3V and GND banana plugs to power supply. A 2A supply is recommended. At steady-state, the system should draw approximately 700mA.
- Verify that jumpers are configured as described in Table 2.

## General

- Upon power-up, the DS33R11 Queue overflow LED (DS02 red) will not be lit; also, the INT LED (DS01 red) will not  be  lit.  PHY  LINK  LED  (DS07  green)  should  be  lit  if  the  Ethernet  is  connected.  Transceiver  RLOS  LED (DS05 red) will be lit.
- DS33ZH11 does not have Queue overflow or INT pins. DS21348 and DS3150 RLOS LEDs (DS15 and DS13 red) will be lit.

Following are several basic system initializations.

## Basic DS33R11 Initialization

This section covers two basic methods for configuring the DS33R11.

1. Device-Driver Based Configuration. If the pins J09.4+J09.6 are jumpered, the device driver autoconfigures the DS33R11 upon power-up. This enables traffic to pass from the Ethernet port to the serial port. Consult the device driver documentation for further details.
2. Register-Based  Configuration.  Launch  ChipView.exe  and  select Register  View. When  prompted  for  a definition file, pick the file named DS33Z11.def . Three definition files will load: DS33Z11 control, DS33Z11 port, and DS2155 transceiver. Go to the File menu and select File → Memory Config File → Load .MFG file. When prompted, select the file named basic\_config.mfg . Following this, load the file e1\_gapclk\_crc4\_hdb3\_nocas.ini using the menu selection File → Initalization Config File → Load .INI file.

## Additional Configuration for DS33R11

- Using a patch cable, connect the Ethernet connector to an ordinary PC, or network test equipment. This should cause the link LED to turn on.
- Place a loopback connector at the T1E1 network side; RLOS LED DS05 should go out.
- At this point any packets sent to the DS33R11 are echoed back. Incoming packets (i.e., ping) should cause the RX LED to blink, after which the TX LED should also blink.

## Basic DS33ZH11 Initialization

This section covers the EEPROM methods for configuring the DS33ZH11.

- 1) If  the  HWMODE  jumper  is  installed,  the  DS33ZH11  will  retrieve  configuration  settings  from  the  on-board EEPROM during power-up.
- 2) Select which serial device to use: either the DS3150 T3E3 LIU or the DS21348 T1E1 LIU can be selected. In making this selection the backplane jumpers JP05-JP08 must be installed to select between the two serial devices. Connecting pins 2+3 of each jumper selects the DS3150, connecting pins 1+2 of each jumper selects the DS21348.
- 3) Configure the serial device as shown in Table 2.

## Additional Configuration for DS33ZH11

- Using a patch cable, connect the Ethernet connector to an ordinary PC, or network test equipment. This should cause the link LED to turn on.
- Place a loopback connector at the network side; the RLOS LED should go out. The RLOS LED is DS15 for T1E1 and DS13 for T3E3.
- At this point any packets sent to the DS33ZH11 are echoed back. Incoming packets (i.e., ping) should cause the RX LED to blink, after which the TX LED should also blink.

## Monitor and Capture Ethernet Traffic

- Although ping is mentioned, it is not recommended. The ping command goes through the computer's TCPIP stack, and sometimes is not sent out the PC's network connector (i.e., if the PC's ARP cache is out of date). Additionally, ping requires two PCs, as a PC with only one adapter cannot ping itself (a local ping gets sent to a local host instead of out the connector). However, note that ping is still a valuable test once the prototyping stage is complete.
- Generation and capture of arbitrary (raw) packets can be accomplished using CommView. A time-limited demo is available at the website www.tamos.com/products/commview.
- Ethereal is an excellent (and free) packet capture utility. Download at www.ethereal.com.
- Adding additional Ethernet ports to a PC is rather simple when a USB-to-Ethernet adapter is used. This allows for end-to-end testing using a single PC. When using two adapters, the PC has a different IP address for each adapter. Test equipment allows selection of either adapter. Operating system-based network traffic is sent out the default adapter. Typically, this is the adapter that has recently had connection to a live network.

## LEDS, CONFIGURATION SWITCHES, JUMPERS, AND CONNECTORS

The DS33Z11DK has several configuration switches, banana plugs, oscillators, and jumpers. Table 2 provides a description of these signals, given in order of appearance on the PC board, from top to bottom then left to right (with the board held so that the RS232 connector is on the left edge).

Table 2. Main Board PC Board Configuration

| SILKSCREEN REFERENCE   | FUNCTION                                            | BASIC SETTING     | SCHEMATIC PAGE                                                                                 | DESCRIPTION                                                                                                                                            |
|------------------------|-----------------------------------------------------|-------------------|------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| GROUND (banana plug)   | Power supply ground                                 | -                 | 2                                                                                              | System power. Always connected to power supply. Connectors are provided at the top left and bottom right of board. Connect either set to power supply. |
| VDD 3.3V (banana plug) | Power supply VDD                                    | -                 | 2                                                                                              | System power. Always connected to power supply. Connectors are provided at the top left and bottom right of board. Connect either set to power supply. |
| J01                    | JTAG                                                | -                 | 17                                                                                             | JTAG interface for Lattice EC3 FPGA.                                                                                                                   |
| J02                    | RS-232 DB9 connector                                | -                 | 14                                                                                             | RS-232 DB9 connector, operates in ASCII mode at 57.6K baud, 8, N, 1.                                                                                   |
| SW01                   | Reset                                               |                   | 12                                                                                             | Drives reset controller U01.                                                                                                                           |
| DS01                   | LED                                                 | -                 | 15                                                                                             | Displays interrupt status of DS33R11 (lit when interrupt is asserted).                                                                                 |
| DS02                   | LED                                                 |                   | 7                                                                                              | Displays Queue overflow status of DS33R11 (lit when Queue overflows).                                                                                  |
| J04                    | OnCe BDM                                            | -                 | 14                                                                                             | Debug connector for processor.                                                                                                                         |
| J03                    | Flash VPP                                           | 3.3V              | 14                                                                                             | Jumper for driving MMC2107 flash VPP to 5V .                                                                                                           |
| J05                    | JTAG                                                | -                 | 10                                                                                             | JTAG interface for DS2155 portion of DS33R11.                                                                                                          |
| J06                    | JTAG                                                | -                 | 11                                                                                             | JTAG interface for DS33Z11 portion of DS33R11.                                                                                                         |
| Y01                    | Clock                                               | -                 | 11                                                                                             | Oscillator for DS2155 portion of the DS33R11.                                                                                                          |
| J07, J08               | Addr / Dat                                          | -                 | 16                                                                                             | Address and Databus Test points for DS33R11.                                                                                                           |
| J09                    | Configuration pins (See next two rows for details.) | Schematic Page16  | Configuration switches for selecting device driver behavior. Additional detail given below.    | Configuration switches for selecting device driver behavior. Additional detail given below.                                                            |
| J09.2+J09.4            | Removed                                             | Not installed     | Pin J09.2 has been removed. Jumpering this pin to J09.4 causes a conflict with J09.6 FPGA pin. | Pin J09.2 has been removed. Jumpering this pin to J09.4 causes a conflict with J09.6 FPGA pin.                                                         |
| J09.4+J09.6            | Driver Enable                                       | Installed         | Enables device driver and interrupt handler when jumper is installed.                          | Enables device driver and interrupt handler when jumper is installed.                                                                                  |
| J09.8+J09.10           | RCLK select (FPGA)                                  | User selection    | Causes device to select serial link TCLK = RCLK when jumpered. When not jumpered TCLK = MCLK.  | Causes device to select serial link TCLK = RCLK when jumpered. When not jumpered TCLK = MCLK.                                                          |
| Y02                    | Ethernet PHY Clock                                  | -                 | 3                                                                                              | 25.000MHz clock for DS33R11 Ethernet PHY.                                                                                                              |
| JP03                   | Clock select                                        | Pins 1+2 Jumpered | 3                                                                                              | Must be set with pins 1+2 jumpered. SDRAM oscillator does not meet jitter requirement of the Ethernet PHY.                                             |
| J10                    | Jumper                                              | Installed         | 10                                                                                             | Connects DS33R11 receive serial lines.                                                                                                                 |
| J11                    | Jumper                                              | Installed         | 10                                                                                             | Connects DS33R11 transmit serial lines.                                                                                                                |

| SILKSCREEN REFERENCE   | FUNCTION                                           | BASIC SETTING              | SCHEMATIC PAGE                                                                                                                                                                                            | DESCRIPTION                                                                                                                                                                                               |
|------------------------|----------------------------------------------------|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JP01                   | 3-pin jumper                                       | Pins 2+3 jumpered          | 10                                                                                                                                                                                                        | Drives DS33R11 TDEN pin to VCC.                                                                                                                                                                           |
| JP02                   | 3-pin jumper                                       | Pins 2+3 jumpered          | 10                                                                                                                                                                                                        | Drives DS33R11 RDEN pin to VCC.                                                                                                                                                                           |
| J18                    | Test points                                        | Pins 9+10 and 5+6 jumpered | 10                                                                                                                                                                                                        | Test points, connecting RCLK and TCLK to channel clock pins of transceiver.                                                                                                                               |
| J12, J13               | Test points                                        | -                          | 11                                                                                                                                                                                                        | Test points for integrated transceiver of DS33R11.                                                                                                                                                        |
| J14, J15, J16          | Jumpers                                            | Not installed              | 4                                                                                                                                                                                                         | Installation forces Ethernet PHY mode. When not installed the PHY autonegotiates its settings.                                                                                                            |
| DS06, DS07, DS08       | LED                                                | -                          | 4                                                                                                                                                                                                         | Activity LEDs for Ethernet PHY. Tx lights when PHY sends a packet; Link lights when the PHY has found a link partner.                                                                                     |
| DS10, DS11, DS09       | LED                                                | -                          | 4                                                                                                                                                                                                         | Ethernet PHY mode LEDs. Used for display of Speed, Duplex, and Collision.                                                                                                                                 |
| J21                    | LAN network connection                             | -                          | 5                                                                                                                                                                                                         | RJ45 connector for Ethernet PHY.                                                                                                                                                                          |
| J22, J23               | Test points                                        | -                          | 4                                                                                                                                                                                                         | Test points for MII interface between PHY and DS33R11.                                                                                                                                                    |
| J19, J20 J24           | WAN Network Connection                             | -                          | 11                                                                                                                                                                                                        | T1E1 coax and RJ45 connectors for network.                                                                                                                                                                |
| J17, J25               | Jumper                                             | Not installed              | 11                                                                                                                                                                                                        | Connects adjacent coax connector to ground.                                                                                                                                                               |
| Y03                    | Clock                                              | -                          | 10                                                                                                                                                                                                        | 100MHz SDRAM clock for DS33R11.                                                                                                                                                                           |
| J28                    | Configuration pins (See next 10 rows for details.) | Schematic Page 23          | Pin bias for DS3150. When not jumpered, this pin is pulled to ground, jumper drives pin to VCC. A basic description of the pin function is given below. Refer                                             | Pin bias for DS3150. When not jumpered, this pin is pulled to ground, jumper drives pin to VCC. A basic description of the pin function is given below. Refer                                             |
| J28.20                 | DS3150 pin (ZCSE)                                  | Not installed              | to the data sheet for full detail. 0 = B3ZS/HDB3 encoder/decoder enabled (NRZ interface enabled) 1 = B3ZS/HDB3 encoder/decoder disabled (bipolar                                                          | to the data sheet for full detail. 0 = B3ZS/HDB3 encoder/decoder enabled (NRZ interface enabled) 1 = B3ZS/HDB3 encoder/decoder disabled (bipolar                                                          |
| J28.18                 | DS3150 pin (TTS)                                   | Installed                  | interface enabled) 0 = tri-state the transmit output driver, disable the jitter attenuator in the transmit path 1 = enable the transmit output driver, disable the jitter attenuator in the transmit path | interface enabled) 0 = tri-state the transmit output driver, disable the jitter attenuator in the transmit path 1 = enable the transmit output driver, disable the jitter attenuator in the transmit path |
| J28.16                 | DS3150 pin (TESS)                                  | Installed                  | 0 = E3 1 = T3 (DS3)                                                                                                                                                                                       | 0 = E3 1 = T3 (DS3)                                                                                                                                                                                       |
| J28.14                 | DS3150 pin (TDS1)                                  | Not installed              | 00=Transmit normal data clocked in on                                                                                                                                                                     | 00=Transmit normal data clocked in on                                                                                                                                                                     |
| J28.12                 | DS3150 pin (TDS0)                                  | Not installed              | TPOS/TNRZ and TNEG 11=Transmit PRBS                                                                                                                                                                       | TPOS/TNRZ and TNEG 11=Transmit PRBS                                                                                                                                                                       |
| J28.10                 | DS3150 pin (RMON)                                  | Not installed              | 0 = disable the monitor preamp, disable the jitter attenuator in the receive path 1 = enable the monitor preamp, disable the jitter attenuator in the receive path                                        | 0 = disable the monitor preamp, disable the jitter attenuator in the receive path 1 = enable the monitor preamp, disable the jitter attenuator in the receive path                                        |
| J28.8                  | DS3150 pin (LBKS)                                  | Installed                  | 0 = analog loopback enabled                                                                                                                                                                               | 0 = analog loopback enabled                                                                                                                                                                               |
| J28.6                  | DS3150 pin (LBO)                                   | Installed                  | 1 = no loopback enabled 0 = cable length 225ft 1 = cable length < 225ft                                                                                                                                   | 1 = no loopback enabled 0 = cable length 225ft 1 = cable length < 225ft                                                                                                                                   |

| SILKSCREEN REFERENCE   | FUNCTION                                           | BASIC SETTING     | SCHEMATIC PAGE                                                                                                                                                                                                                                                                 | DESCRIPTION                                                                                                                                                                                                                                                                    |
|------------------------|----------------------------------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J28.4                  | DS3150 pin (ICE)                                   | -                 | 0 = Normal RCLK/Normal TCLK: update RPOS/RNRZ and RNEG/RLCV on falling edge of RCLK; sample TPOS/TNRZ and TNEG on rising edge of TCLK 1 = Normal RCLK/Inverted TCLK: update RPOS/RNRZ and RNEG/RLCV on falling edge of RCLK; sample TPOS/TNRZ and TNEG on falling edge of TCLK | 0 = Normal RCLK/Normal TCLK: update RPOS/RNRZ and RNEG/RLCV on falling edge of RCLK; sample TPOS/TNRZ and TNEG on rising edge of TCLK 1 = Normal RCLK/Inverted TCLK: update RPOS/RNRZ and RNEG/RLCV on falling edge of RCLK; sample TPOS/TNRZ and TNEG on falling edge of TCLK |
| J28.2                  | DS3150 pin (EFE)                                   | Not installed     | 0 = enhanced features disabled 1 = enhanced features enabled                                                                                                                                                                                                                   | 0 = enhanced features disabled 1 = enhanced features enabled                                                                                                                                                                                                                   |
| JP09                   | Clock selection                                    | Pins 3+2 jumpered | 23                                                                                                                                                                                                                                                                             | Selects DS3150 MCLK. Jumper pins 1+2 for MCLK = RCLK; jumper pins 3+2 for MCLK = OSC_YB01.                                                                                                                                                                                     |
| DS12, DS13, DS14       | LED                                                | -                 | 23                                                                                                                                                                                                                                                                             | DS3150 LEDs for PRBS, LOS and DM.                                                                                                                                                                                                                                              |
| J38, J39               | BNC                                                | -                 | 23                                                                                                                                                                                                                                                                             | DS3150 BNC network interface.                                                                                                                                                                                                                                                  |
| JP05-JP08              | Serial backplane                                   | User config       | 18                                                                                                                                                                                                                                                                             | Jumper pins 1+2 to select DS21348 T1E1, jumper pins 2+3 to select DS3150.                                                                                                                                                                                                      |
| J29                    | Configuration pins (See next 10 rows for details.) | Schematic Page 25 | Pin bias for DS21348. When not jumpered, this pin is pulled to ground, jumper drives pin to VCC. A basic description of the pin function is given below. Refer to the data sheet for full details.                                                                             | Pin bias for DS21348. When not jumpered, this pin is pulled to ground, jumper drives pin to VCC. A basic description of the pin function is given below. Refer to the data sheet for full details.                                                                             |
| J29.1                  | DS21348 pin (CS_EGL)                               | Schematic Page 25 | 0 = -12dB (short haul) 1 = -43dB (long                                                                                                                                                                                                                                         | haul)                                                                                                                                                                                                                                                                          |
| J29.3                  | DS21348 pin (RD_ETS)                               | Schematic Page 25 | 0 = E1 1 = T1                                                                                                                                                                                                                                                                  | 0 = E1 1 = T1                                                                                                                                                                                                                                                                  |
| J29.5                  | DS21348 pin (WR_NRZ)                               | Schematic Page 25 | 0 = Bipolar data at RPOS/RNEG and TPOS/TNEG 1 = NRZ data at RPOS and TPOS or TNEG; RNEG outputs a positive-going pulse when device receives a BPV, CV, or EXZ                                                                                                                  | 0 = Bipolar data at RPOS/RNEG and TPOS/TNEG 1 = NRZ data at RPOS and TPOS or TNEG; RNEG outputs a positive-going pulse when device receives a BPV, CV, or EXZ                                                                                                                  |
| J29.7                  | DS21348 pin (ALE/SCLKE)                            | Schematic Page 25 | 0 = disable 2.048MHz synchronization transmit and receive mode 1 = enable 2.048Hz synchronization transmit and receive mode                                                                                                                                                    | 0 = disable 2.048MHz synchronization transmit and receive mode 1 = enable 2.048Hz synchronization transmit and receive mode                                                                                                                                                    |
| J29.9                  | DS21348 pin (VSM)                                  | Schematic Page 25 | Should be tied low for 3.3V operation.                                                                                                                                                                                                                                         | Should be tied low for 3.3V operation.                                                                                                                                                                                                                                         |
| J29.11                 | DS21348 pin (LO)                                   | Schematic Page 25 | Transmit LIU waveshape select bits. (Refer to the DS21348 data sheet Table 7-1 and 7-2.)                                                                                                                                                                                       | Transmit LIU waveshape select bits. (Refer to the DS21348 data sheet Table 7-1 and 7-2.)                                                                                                                                                                                       |
| J29.13                 | DS21348 pin (DJA)                                  | Schematic Page 25 | 0 = jitter attenuator enabled                                                                                                                                                                                                                                                  | 0 = jitter attenuator enabled                                                                                                                                                                                                                                                  |
| J29.15                 | DS21348 pin (JAMUX)                                | Schematic Page 25 | 1 = jitter attenuator disabled E1 (ETS = 0) JAMUX MCLK = 2.048MHz 0 T1 (ETS = 1) MCLK = 2.048MHz 1 MCLK = 1.544MHz 0 0 = place the jitter attenuator on the receive side 1 = place the jitter attenuator on the transmit side                                                  | 1 = jitter attenuator disabled E1 (ETS = 0) JAMUX MCLK = 2.048MHz 0 T1 (ETS = 1) MCLK = 2.048MHz 1 MCLK = 1.544MHz 0 0 = place the jitter attenuator on the receive side 1 = place the jitter attenuator on the transmit side                                                  |
| J29.17                 | DS21348 pin (JAS)                                  | Schematic Page 25 |                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                |
| J29.19                 | DS21348 pin (HBE)                                  | Schematic Page 25 | 0 = enable HDB3 (E1)/B8ZS (T1) 1 = disable HDB3 (E1)/B8ZS (T1)                                                                                                                                                                                                                 | 0 = enable HDB3 (E1)/B8ZS (T1) 1 = disable HDB3 (E1)/B8ZS (T1)                                                                                                                                                                                                                 |

| SILKSCREEN REFERENCE   | FUNCTION                                              | BASIC SETTING     | SCHEMATIC PAGE                                                                                                                                                                                     | DESCRIPTION                                                                                                                                                                                        |
|------------------------|-------------------------------------------------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J31                    | Configuration pins (See next 10 rows for details)     | Schematic Page 25 | Pin bias for DS21348. When not jumpered, this pin is pulled to ground, jumper drives pin to VCC. A basic description of the pin function is given below. Refer to the data sheet for full details. | Pin bias for DS21348. When not jumpered, this pin is pulled to ground, jumper drives pin to VCC. A basic description of the pin function is given below. Refer to the data sheet for full details. |
| J31.1                  | DS21348 pin (MM1)                                     |                   | Monitor mode selection. See Table 2-11 in the                                                                                                                                                      | Monitor mode selection. See Table 2-11 in the                                                                                                                                                      |
| J31.3                  | DS21348 pin (MM0)                                     |                   | DS21348 data sheet.                                                                                                                                                                                | DS21348 data sheet.                                                                                                                                                                                |
| J31.5                  | DS21348 pin (LOOP1)                                   |                   | Loop 1, Loop 0: 11 = RLB                                                                                                                                                                           | Loop 1, Loop 0: 11 = RLB                                                                                                                                                                           |
| J31.7                  | DS21348 pin (LOOP0)                                   |                   | 10 = LLB 01 = ALB                                                                                                                                                                                  | 10 = LLB 01 = ALB                                                                                                                                                                                  |
| J31.9                  | DS21348 pin (TX1)                                     |                   |                                                                                                                                                                                                    |                                                                                                                                                                                                    |
| J31.11                 | DS21348 pin (TX0)                                     |                   | Transmit data control (pattern vs. TPOS/TNEG)                                                                                                                                                      | Transmit data control (pattern vs. TPOS/TNEG)                                                                                                                                                      |
| J31.13                 | DS21348 pin (TPD)                                     |                   | 0 = normal transmitter operation 1 = powers down the transmitter and tri-states the TTIP and TRING pins                                                                                            | 0 = normal transmitter operation 1 = powers down the transmitter and tri-states the TTIP and TRING pins                                                                                            |
| J31.15                 | DS21348 pin (CES)                                     |                   | 0 = update RNEG/RPOS on rising edge of RCLK; sample TPOS/TNEG on falling edge of TCLK 1 = update RNEG/RPOS on falling edge of RCLK; sample TPOS/TNEG on rising edge of TCLK                        | 0 = update RNEG/RPOS on rising edge of RCLK; sample TPOS/TNEG on falling edge of TCLK 1 = update RNEG/RPOS on falling edge of RCLK; sample TPOS/TNEG on rising edge of TCLK                        |
| J31.17                 | DS21348 pin (TEST)                                    |                   | Set high to tri-state all outputs and I/O pins.                                                                                                                                                    | Set high to tri-state all outputs and I/O pins.                                                                                                                                                    |
| J31.19                 | DS21348 pin (PBTS/RT0)                                |                   | Selects receive termination in conjunction with RT1.                                                                                                                                               | Selects receive termination in conjunction with RT1.                                                                                                                                               |
| J36                    | Configuration pins (See next three rows for details.) |                   | Pin bias for DS21348. When not jumpered, this pin is pulled to ground, jumper drives pin to VCC. A basic description of the pin function is given below. Refer to the data sheet for full details. | Pin bias for DS21348. When not jumpered, this pin is pulled to ground, jumper drives pin to VCC. A basic description of the pin function is given below. Refer to the data sheet for full details. |
| J36.2                  | DS21348 pin (L1)                                      |                   | Transmit LIU waveshape select bits. (Refer to the DS21348 data sheet Table 7-1 and 7-2.)                                                                                                           | Transmit LIU waveshape select bits. (Refer to the DS21348 data sheet Table 7-1 and 7-2.)                                                                                                           |
| J36.4                  | DS21348 pin (L2)                                      |                   | Transmit LIU waveshape select bits. (Refer to the DS21348 data sheet Table 7-1 and 7-2.)                                                                                                           | Transmit LIU waveshape select bits. (Refer to the DS21348 data sheet Table 7-1 and 7-2.)                                                                                                           |
| J36.6                  | DS21348 pin (RT1)                                     | Schematic         | The silkscreen on this pin is mislabeled. Should read RT1 with a function of selecting receive termination.                                                                                        | The silkscreen on this pin is mislabeled. Should read RT1 with a function of selecting receive termination.                                                                                        |
| JP10                   | Clock selection                                       | Page 25           | 25                                                                                                                                                                                                 | -                                                                                                                                                                                                  |
| DS15                   | LED                                                   |                   | 25                                                                                                                                                                                                 | -                                                                                                                                                                                                  |
| J40, J41               | Network connection                                    |                   | 24                                                                                                                                                                                                 | -                                                                                                                                                                                                  |
| J27                    | DS33ZH11 pin (MODEC1)                                 |                   | 21                                                                                                                                                                                                 | -                                                                                                                                                                                                  |
| J26                    | DS33ZH11 pin (HWMODE)                                 |                   | 21                                                                                                                                                                                                 | -                                                                                                                                                                                                  |
| JPB01                  | Jumper                                                |                   | 21                                                                                                                                                                                                 | -                                                                                                                                                                                                  |
| J30, J33               | Test points                                           |                   | 26                                                                                                                                                                                                 | Test points for MII interface between PHY and DS33ZH11.                                                                                                                                            |
| JP11                   | Clock selection                                       | Pins 2+3 jumpered | 18                                                                                                                                                                                                 | Must be set with pins 1+2 jumpered. SDRAM oscillator does not meet jitter requirement of the Ethernet PHY.                                                                                         |
| J32, J35, J34          | Jumpers                                               | Not installed     | 26                                                                                                                                                                                                 | Installation forces Ethernet PHY mode. When not installed, the PHY autonegotiates its settings                                                                                                     |

| SILKSCREEN REFERENCE   | FUNCTION            | BASIC SETTING   |   SCHEMATIC PAGE | DESCRIPTION                                                                                                           |
|------------------------|---------------------|-----------------|------------------|-----------------------------------------------------------------------------------------------------------------------|
| DS19, DS20, DS21       | LED                 | -               |               19 | Activity LEDs for Ethernet PHY. Tx lights when PHY sends a packet; Link lights when the PHY has found a link partner. |
| DS16, DS17, DS18       | LED                 | -               |               19 | Ethernet PHY mode LEDs. Used for display of Speed, Duplex, and Collision.                                             |
| SW02                   | Reset button        | -               |               19 | -                                                                                                                     |
| GROUND (banana plug)   | Power supply ground | -               |                2 | Redundant power supply connection (see top left of board).                                                            |
| VDD 3.3V (banana plug) | Power supply VDD    | -               |                2 | Redundant power supply connection (see top left of board).                                                            |
| YB01                   | DS3150 MCLK         | -               |               23 | 44.736MHz, for use with DS3150 in T3 mode (bottom side of PC board)                                                   |
| YB02                   | DS21348 MCLK        | -               |               25 | 1.544MHz, for use with DS21348 in T1 mode (bottom side of PC board)                                                   |
| YB04                   | Ethernet clock      | -               |               18 | 25.000MHz driver for DS33ZH11 Ethernet PHY (bottom side of PC board).                                                 |
| YB03                   | SDRAM clock         | -               |               21 | 100MHz SDRAM clock for DS33ZH11 (bottom side of PC board).                                                            |
| YB05                   | Spare oscillator    | -               |               25 | 2.048MHz, for use with DS21348 in E1 mode (bottom side of PC board).                                                  |
| Y05                    | Spare oscillator    | -               |               23 | 34.368MHz for use with DS3150 in E3 mode (bottom side of PC board).                                                   |

## ADDRESS MAP (ALL CARDS)

The external device address space begins at 0x81000000. All offsets given below are relative to this offset.

Table 3. Overview of Daughter Card Address Map

| OFFSET           | DEVICE   | DESCRIPTION                                    |
|------------------|----------|------------------------------------------------|
| 0X0000 to 0X0087 | FPGA     | Processor board identification                 |
| 0X1000 to 0X1FFF | DS33R11  | DS33R11 Ethernet to Serial Engine. Uses CS_X1. |
| 0X4000 to 0X4FFF | DS33R11  | T1E1 portion of DS33R11. Uses CS_X4.           |

Registers in the DS33R11 can be easily modified using the ChipView host-based user-interface software with the definition files previously mentioned.

## DS33R11 INFORMATION

For  more  information  about  the  DS33R11,  refer  to  the  DS33R11  data  sheet  available  on  our  website  at www.maxim-ic.com/DS33R11.

## DS33R11DK/DS33ZH11DK INFORMATION

For more information about the DS33R11DK/DS33ZH11DK, including software downloads, refer to the data sheet available on the our website at www.maxim-ic.com/DS33R11DK.

## TECHNICAL SUPPORT

For additional technical support, go to www.maxim-ic.com/support.

## SCHEMATICS

The  DS33R11/DS33ZH11DK schematics are featured in the following  pages.  As  this  is  a  hierarchal  schematic some explanation is in order. The board is composed of two top-level hierarchal blocks: the DS33R11 block and the  DS33ZH11,  both  of  these  are  nested  hierarchy  blocks.  The  DS33R11  hierarchy  block  contains  individual hierarchy  blocks  for  the  Ethernet  PHY,  DS33R11  and  microprocessor  portions  of  the  design.  The  DS33ZH11 hierarchy block contains individual hierarchy blocks for the Ethernet PHY, DS33ZH11, T1E1 LIU, and the T3E3 LIU portions of the design.

All signals inside a hierarchy block are local, with exception for VCC and ground. In-port and out-port connectors are used to allow signals inside a hierarchy block to become accessible as pins on the hierarchy blocks symbol. From here blocks are wired together as if they were ordinary components. The system diagram is shown again below, with schematic page numbers given for each functional block.

<!-- image -->

<!-- image -->

&lt;CON\_PARENT\_NAME&gt;

BLOCK:

PARENT

\_ztopdn\_.

NAME:

BLOCK

<!-- image -->

<!-- image -->

<!-- image -->

\_ds33r11dk\_design\

BLOCK:

PARENT

\_mii\_wan\_dn.

NAME:

BLOCK

<!-- image -->

\_ds33r11dk\_design\

PARENT BLOCK:

\_z11andlan\_dn.

BLOCK NAME:

<!-- image -->

\_ds33r11dk\_design\

BLOCK:

PARENT

\_z11andlan\_dn.

NAME:

BLOCK

<!-- image -->

\_ds33r11dk\_design\

BLOCK:

PARENT

\_z11andlan\_dn.

NAME:

BLOCK

<!-- image -->

\_ds33r11dk\_design\

PARENT BLOCK:

\_z11andlan\_dn.

BLOCK NAME:

<!-- image -->

\_ds33r11dk\_design\

BLOCK:

PARENT

\_z11andlan\_dn.

NAME:

BLOCK

<!-- image -->

\_ds33r11dk\_design\

PARENT BLOCK:

\_z11andlan\_dn.

BLOCK NAME:

<!-- image -->

<!-- image -->

\_ds33r11dk\_design\

BLOCK:

PARENT

\_motprocrescard\_dn.

NAME:

BLOCK

<!-- image -->

<!-- image -->

\_ds33r11dk\_design\

BLOCK:

PARENT

\_motprocrescard\_dn.

NAME:

BLOCK

<!-- image -->

\_ds33r11dk\_design\

BLOCK:

PARENT

\_motprocrescard\_dn.

NAME:

BLOCK

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

\_ds33zh11dk\_design\

BLOCK:

PARENT

\_zh11\_dn.

NAME:

BLOCK

<!-- image -->

\_ds33zh11dk\_design\

BLOCK:

PARENT

\_zh11\_dn.

NAME:

BLOCK

<!-- image -->

\_ds33zh11dk\_design\

BLOCK:

PARENT

\_zh11\_dn.

NAME:

BLOCK

<!-- image -->

<!-- image -->

\_ds33zh11dk\_design\

BLOCK:

PARENT

\_te1liu\_wan\_dn.

NAME:

BLOCK

<!-- image -->

\_ds33zh11dk\_design\

BLOCK:

PARENT

\_te1liu\_wan\_dn.

NAME:

BLOCK

<!-- image -->

<!-- image -->

<!-- image -->