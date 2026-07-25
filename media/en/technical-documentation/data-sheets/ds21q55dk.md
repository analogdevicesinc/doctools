<!-- lastmod 2022-08-02 -->
<!-- image -->

WIXVW

## www.maxim-ic.com

## GENERAL DESCRIPTION

The DS21Q55DK is an easy-to-use evaluation board for  the  DS21Q55  quad  T1/E1/J1  transceiver.  The DS21Q55DK is intended  to  be  used  as  a  daughter card  with  the  DK101  motherboard  or  the  DK2000 motherboard. The DS21Q55DK comes complete with a  DS21Q55  quad  SCT,  transformers,  termination resistors, configuration switches, line-protection circuitry, network connectors, and motherboard connectors.  The  DK101/DK2000  motherboard  and Dallas' ChipView software give point-and-click access  to  configuration  and  status  registers  from  a Windows ® -based PC. On-board LEDs indicate receive  loss-of-signal  and  interrupt  status.  An  onboard  FPGA  contains  mux  logic  to  connect  framer ports to one another or to the DK2000 in a variety of configurations.

Each  DS21Q55DK  is  shipped  with  a  free  DK101 motherboard. For complex applications, the DK2000 high-performance demo  kit motherboard can be purchased separately.

Windows is a registered trademark of Microsoft Corp.

## ORDERING INFORMATION

| PART      | DESCRIPTION                                                      |
|-----------|------------------------------------------------------------------|
| DS21Q55DK | DS21Q55 Demo Kit Daughter Card (with included DK101 Motherboard) |

## DS21Q55DK

## Quad T1/E1/J1 Transceiver Design Kit Daughter Card

## FEATURES

-  Demonstrates Key Functions of DS21Q55 Quad T1/E1/J1 Transceiver
-  Includes DS21Q55 Quad LIU, Transformers, BNC, and RJ45 Network Connectors and Termination Passives
-  Compatible with DK101 and DK2000 Demo Kit Motherboards
-  DK101/DK2000 and ChipView Software Provide Point-and-Click Access to the DS21Q55 Register Set
-  All Equipment-Side Framer Pins are Easily Accessible for External Data Source/Sink
-  Memory-Mapped FPGA Provides Flexible Clock/Data/Sync Connections Among Framer Ports and DK2000 Motherboard
-  LEDs for Loss-of-Signal and Interrupt Status
-  Easy-to-Read Silk-Screen Labels Identify the Signals Associated with All Connectors, Jumpers and LEDs
-  Network Interface Protection for Overvoltage and Overcurrent Events

## DESIGN KIT CONTENTS

DS21Q55DK Design Kit Daughter Card DK101 Low-Cost Motherboard CD-ROM

ChipView Software DS21Q55DK Data Sheet DK101 Data Sheet DS21Q55 Data Sheet DS21Q55 Errata Sheet

<!-- image -->

## TABLE OF CONTENTS

| COMPONENT LIST.....................................................................................................................3                                     |                                                                                                                             |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| BOARD FLOORPLAN.................................................................................................................4                                        |                                                                                                                             |
| ERRATA......................................................................................................................................4                            |                                                                                                                             |
| BASIC OPERATION....................................................................................................................4                                     |                                                                                                                             |
| HARDWARE CONFIGURATION.....................................................................................................................4                             |                                                                                                                             |
| Using the DK101 Processor Board: .....................................................................................................................                   | 4                                                                                                                           |
| Using the DK2000 Processor Board: ...................................................................................................................                    | 4                                                                                                                           |
| General................................................................................................................................................................. | 5                                                                                                                           |
| Miscellaneous.......................................................................................................................................................     | 5                                                                                                                           |
| QUICK SETUP (DEMO MODE).....................................................................................................................5                            |                                                                                                                             |
| QUICK SETUP (REGISTER VIEW)........................................................................................................5                                     |                                                                                                                             |
| ADDRESS MAP                                                                                                                                                              | ..........................................................................................................................6 |
| FPGA REGISTER MAP ........................................................................................................................7                              |                                                                                                                             |
| ID REGISTERS............................................................................................................................7                                |                                                                                                                             |
| CONTROL REGISTERS..............................................................................................................8                                         |                                                                                                                             |
| FPGA CONTROL                                                                                                                                                             | EXAMPLES..................................................................................................15                |
| DS21Q55 INFORMATION.........................................................................................................17                                           |                                                                                                                             |
| DS21Q55DK INFORMATION....................................................................................................17                                              |                                                                                                                             |
| TECHNICAL SUPPORT............................................................................................................17                                          |                                                                                                                             |
| SCHEMATICS...........................................................................................................................17                                  |                                                                                                                             |
| DOCUMENT REVISION                                                                                                                                                        |                                                                                                                             |
| HISTORY ...........................................................................................17                                                                    |                                                                                                                             |
| LIST OF TABLES                                                                                                                                                           | LIST OF TABLES                                                                                                              |
| Table 1. Daughter Card Address Map........................................................................................................6                              |                                                                                                                             |
| Table 2. FPGA Register Map                                                                                                                                               | .....................................................................................................................7      |
| Table 3. TCLKx Source Definition ..............................................................................................................8                         |                                                                                                                             |
| Table 4. TSYSCLKx Source Definition                                                                                                                                      | .......................................................................................................9                    |
| Table 5. RSYSCLKx Source Definition.......................................................................................................9                              |                                                                                                                             |
| Table 6. RSYNCx Function Definition ......................................................................................................11                             |                                                                                                                             |
| Table 7. TSERx Source Definition............................................................................................................12                           |                                                                                                                             |
| Table 8. FPGA Configuration for Scenario #1 (Port 1, T1 Mode).............................................................15                                             |                                                                                                                             |
| Table 9. FPGA Configuration for Scenario #2 (Port 1, T1 Mode).............................................................16                                             |                                                                                                                             |
| Table 10. DS21Q55 Partial Configuration for Scenario #2 (Port 1, T1 Mode)..........................................16                                                    |                                                                                                                             |

## COMPONENT LIST

| DESIGNATION                              | QTY   | DESCRIPTION                                                                    | SUPPLIER             | PART                           |
|------------------------------------------|-------|--------------------------------------------------------------------------------|----------------------|--------------------------------|
| C1-C8                                    | 8     | 0.22 μ F, 50V capacitors                                                       | Phycomp              | PCF1150CT-ND                   |
| C9, C10, C12, C18, C22-C33, C35, C38-C43 | 23    | 0.1 μ F 10%, 16V ceramic capacitors (0603)                                     | Phycomp              | 06032R104K7B20D                |
| C11, C13-C15                             | 4     | 0.1 μ F 10%, 25V ceramic capacitors (1206)                                     | Panasonic            | ECJ-3VB1E104K                  |
| C16, C17, C19-C21, C34, C36, C45         | 8     | 1 μ F 10%, 16V ceramic capacitors (1206)                                       | Panasonic            | ECJ-3YB1C105K                  |
| C37, C44                                 | 2     | 10 μ F 20%, 10V ceramic capacitors (1206)                                      | Panasonic            | ECJ-3YB1A106M                  |
| CH1                                      | 1     | Quad port choke                                                                | Pulse                | T8132                          |
| DS1                                      | 1     | LED, red, SMD                                                                  | Panasonic            | LN1251C                        |
| DS2-DS6                                  | 5     | LED, green, SMD                                                                | Panasonic            | LN1351C                        |
| F1-F16                                   | 16    | 1.25A, 250V fuse, SMT                                                          | Teccor               | F1250T                         |
| J1                                       | 1     | 10-pin, dual row, vertical jumper                                              | Digi-Key             | S2012-05-ND                    |
| J2-J9                                    | 8     | 5-pin connectors, BNC right-angle vertical                                     | Cambridge            | CP-BNCPC-004                   |
| J10                                      | 1     | 8-pin 4-port jack, right-angle RJ45                                            | Molex                | 43223-8140                     |
| J11, J12                                 | 2     | 50-pin socket, SMD, dual row, vertical                                         | Samtec               | TFM-125-02-S-D-LC              |
| J13                                      | 1     | 12-pin connector, dual row, vertical                                           | Digi-Key             | S2012-06-ND                    |
| R1, R2, R4                               | 3     | 10k Ω 1%, 1/10W resistors (0805)                                               | Panasonic            | ERJ-6ENF1002V                  |
| R3, R26, R39, R41, R45                   | 5     | 10k Ω 5%, 1/10W resistors (0805)                                               | Panasonic            | ERJ-6GEYJ103V                  |
| R5-R12, R14-R21, R48                     | 17    | 0 Ω 5%, 1/8W resistors (1206)                                                  | Panasonic            | ERJ-8GEYJ0R00V                 |
| R13                                      | 1     | 470 Ω 5%, 1/10W resistor                                                       |                      | ERJ-6GEYJ471V                  |
|                                          |       | (0805)                                                                         | Panasonic            |                                |
| R22-R25                                  | 4     | 51.1 Ω 1%, 1/10W resistors (0805)                                              | Panasonic            | ERJ-6ENF51R1V                  |
| R27, R28, R38                            | 3     | 1.0k Ω 1%, 1/10W resistors (0805)                                              | Panasonic            | ERJ-6ENF1001V                  |
| R29-R36                                  | 8     | 61.9 Ω 1%, 1/8W resistors (1206)                                               | Panasonic            | ERJ-8ENF61R9V                  |
| R37, R47                                 | 2     | Not populated                                                                  | Panasonic            | Not populated                  |
| R40, R42-R44, R46, R49                   | 6     | 330 Ω 0.1%, 1/10W MF resistors (0805)                                          | Panasonic            | ERA-6YEB331V                   |
| SW1-SW4                                  | 4     | 6-PIN TH Switch DPDT XFMR, XMIT/RCV, 1 to 2,                                   | Tyco Pulse           | SSA22                          |
| T1                                       | 1     | SMT 32-pin                                                                     |                      | TX1473                         |
| U1                                       | 1     | XILINX spartan 2.5V FPGA 144-pin, 20 x 20 TQFP                                 | Xilinx               | XC2S50-5TQ144C                 |
| U2                                       | 1     | Quad T1/E1/J1 transceiver 256-pin BGA, 0°C to +70°C multichip module           | Dallas Semiconductor | DS21Q55                        |
| U3                                       | 1     | 1M PROM for FPGA 44-pin TQFP                                                   | Xilinx               | XC18V01VQ44C_U                 |
| U4 U20                                   | 1 1   | 8-pin μ MAX, SO 2.5V or ADJ Serial configuration EEPROM for XILINX 65kb, 8-DIP | Maxim Atmel          | MAX1792EUA25 AT17LV65EUA-NOPOP |
| Z1-Z8                                    | 8     | 50A, 6V Sidactor, DO214 SMD                                                    |                      |                                |
|                                          |       |                                                                                | Teccor               | P0080SAMC                      |
| Z9-Z16 Z17-Z32                           | 8 16  | 500A, 25V Sidactor, DO214 SMD 500A, 170V Sidactor, DO214 SMD                   | Teccor Teccor        | P0300SCMC P1800SCMC            |

## BOARD FLOORPLAN

<!-- image -->

## ERRATA

- Connector J1 has silk-screen mislabeled such that the text TMS and TCK should be swapped. Worded differently, TCK belongs to pin 7 and TMS belongs to pin 9.
- Switches SW1 to SW4 are missing silk screen to indicate which side is grounded. Sliding the switch toward the BNC grounds the BNC shell (E1 mode). For T1 mode the switch should be slid away from the BNC.

## BASIC OPERATION

This design kit relies upon several supporting files, which are available for downloading on our website at www.maxim-ic.com/telecom. See the DS21Q55DK QuickView data sheet for these files.

## Hardware Configuration

## Using the DK101 Processor Board:

- Connect the daughter card to the DK101 processor board.
- Supply 3.3V to the banana-plug receptacles marked GND and VCC\_3.3V. (The external 5V connector is unused. Additionally, the 'TIM 5V supply' headers are unused.)
- All processor board DIP-switch settings should be in the ON position with exception of the flash-programming switch, which should be OFF.
- From the Programs menu, launch the host application named ChipView.EXE. Run the ChipView application. If the default installation options were used, click the Start button on the Windows toolbar and select Programs → ChipView → ChipView.

## Using the DK2000 Processor Board:

- Connect the daughter card to the DK2000 processor board.
- Connect J1 to the power supply that is delivered with the kit. Alternately, a PC power supply may be connected to connector J2.
- From the Programs menu, launch the host application named ChipView.EXE. Run the ChipView application. If the default installation options were used, click the Start button on the Windows toolbar and select Programs → ChipView → ChipView.

## General

- Upon power-up, the RLOS LEDs (green) will not be lit, the INT LED (red) will not be lit, but the FPGA status LED (green) will be lit.
- When operating in E1 mode, slide SW1-SW4 such that the BNC shell is grounded (to the left, as shown in the board floorplan). When operating in T1 mode, ensure that SW1-SW4 are slid to the right as shown in the board floorplan.

## Miscellaneous

- Clock frequencies and certain pin bias levels are provided by a register-mapped FPGA, which is on the DS21Q55 daughter card.
- The definition file for this FPGA is named DS21Q55DC\_FPGA.def. The definitions are located on page 7. A drop-down menu on the top of the screen allows for switching between definition files.
- All files referenced above are available for download as described in the section marked 'BASIC OPERATION '

## Quick Setup (Demo Mode)

- The PC will load ChipView offering a choice between DEMO MODE, REGISTER VIEW, and TERMINAL MODE. Select Demo Mode.
- The program will request a configuration file, select among the displayed files (DS2155\_E1\_DSNCOM\_DRVR.cfg or DS2155\_T1\_DSNCOM\_DRVR.cfg).
- The Demo Mode screen will appear. Upon external loopback, the LOS and OOF indicators will extinguish.
- Note: Demo Mode interacts with the device driver, which is resident in the DK101/DK2000 firmware. The current implementation of this driver is for one device. As such, the demo mode will only interact with Port 1 . With minor changes, the device driver is extendible to N devices.

## Quick Setup (Register View)

- The PC will load ChipView offering a choice between DEMO MODE, REGISTER VIEW, and TERMINAL MODE. Select Register View.
- The program will request a definition file. Select DS21Q55DC\_FPGA.def; through the 'links' section this will also load DS21Q55DC.def.
- The Register View Screen will appear, showing the register names, acronyms, and values for the DS21Q55
- Predefined register settings for several functions are available as initialization files.
- INI files are loaded by selecting the menu File → Reg Ini File → Load Ini File
- After loading the INI file, the following may be observed:
- Load the INI file DS21Q55\_T1\_BERT\_ESF.ini
- -The RLOS LEDs (green) light upon external loopback.
- -All four ports of the DS2Q155 begin transmitting a Daly pattern. When external loopback is applied, the BERT bit count registers BBC1-3 and BEC1-3 may be updated by clearing and setting BC1.LC and clicking the 'Read All' button.

## ADDRESS MAP

DK101 Daughter Card address space begins at 0x81000000.

DK2000 Daughter Card address space begins at:

0x30000000 for slot 0

0x40000000 for slot 1

0x50000000 for slot 2

0x60000000 for slot 3

All offsets given below are relative to the beginning of the daughter card address space (shown above).

Table 1. Daughter Card Address Map

| OFFSET           | DEVICE                  | DESCRIPTION                                   |
|------------------|-------------------------|-----------------------------------------------|
| 0X0000 to 0X0015 | FPGA                    | Board identification and clock/signal routing |
| 0X1000 to 0X10ff | T1/E1/J1 Transceiver #1 | DS21Q55 T1/E1/J1 transceiver, port 1          |
| 0X2000 to 0X20ff | T1/E1/J1 Transceiver #2 | DS21Q55 T1/E1/J1 transceiver, port 2          |
| 0X3000 to 0X30ff | T1/E1/J1 Transceiver #3 | DS21Q55 T1/E1/J1 transceiver, port 3          |
| 0X4000 to 0X40ff | T1/E1/J1 Transceiver #4 | DS21Q55 T1/E1/J1 transceiver, port 4          |

Registers in the FPGA may be easily modified using the ChipView host-based user-interface software along with the definition file named 'DS21Q55DC\_FPGA.def.'

## FPGA Register Map

## Table 2. FPGA Register Map

| OFFSET   | REGISTER NAME   | TYPE      | DESCRIPTION                     |
|----------|-----------------|-----------|---------------------------------|
| 0X0000   | BID             | Read-Only | Board ID                        |
| 0X0002   | XBIDH           | Read-Only | High-Nibble Extended Board ID   |
| 0X0003   | XBIDM           | Read-Only | Middle-Nibble Extended Board ID |
| 0X0004   | XBIDL           | Read-Only | Low-Nibble Extended Board ID    |
| 0X0005   | BREV            | Read-Only | Board FAB Revision              |
| 0X0006   | AREV            | Read-Only | Board Assembly Revision         |
| 0X0007   | PREV            | Read-Only | PLD Revision                    |
| 0X0011   | MCSR            | Control   | DS21Q55 MCLK Pin Source         |
| 0X0012   | TCSR            | Control   | DS21Q55 TCLK Pin Source         |
| 0X0013   | SYSCLKT         | Control   | DS21Q55 TSYSCLK Pin Setting     |
| 0X0014   | SYSCLKR         | Control   | DS21Q55 RSYSCLK Pin Setting     |
| 0X0015   | SYNC1           | Control   | DS21Q55 TSYNC Source            |
| 0X0016   | SYNC2           | Control   | DS21Q55 TSSYNC Source           |
| 0X0017   | SYNC3           | Control   | DS21Q55 RSYNC Source            |
| 0X0018   | TSERS           | Control   | TSER Source                     |
| 0X0019   | PRSER           | Control   | PCM RSER Source                 |
| 0X001A   | PSYNC           | Control   | PCM RSYNC/TSYNC Source          |
| 0X001B   | PCLK            | Control   | PCM RCLK/TCLK Source            |

## ID REGISTERS

BID: BOARD ID (Offset=0X0000)

BID is read only with a value of 0xD

XBIDH: HIGH NIBBLE EXTENDED BOARD ID (Offset=0X0002)

XBIDH is read only with a value of 0x0

XBIDM: MIDDLE NIBBLE EXTENDED BOARD ID (Offset=0X0003)

XBIDM is read only with a value of 0x1

XBIDL: LOW NIBBLE EXTENDED BOARD ID (Offset=0X0004)

XBIDL is read only with a value of 0x6

BREV: BOARD FAB REVISION (Offset=0X0005)

BREV is read only and displays the current fab revision

AREV: BOARD ASSEMBLY REVISION (Offset=0X0006)

AREV is read only and displays the current assembly revision

PREV: PLD REVISION (Offset=0X0007)

PREV is read only and displays the current PLD firmware revision

## CONTROL REGISTERS

Register Name:

MCSR

Register Description:

DS21Q55 MCLK Pin Source

Register Offset:

0x0011

| Bit #   | 7   | 6   | 5   | 4   | 3   | 2   | 1     | 0     |
|---------|-----|-----|-----|-----|-----|-----|-------|-------|
| Name    | -   | -   | -   | -   | -   | -   | MSRCB | MSRCA |
| Default | -   | -   | -   | -   | -   | -   | 1     | 1     |

## Bit 0: DS21Q55 Port 1 and 3 MCLK Source (MSRCA)

0 = Connect MCLK 1 (controls port 1 and 3) to the 1.544MHz clock

1 = Connect MCLK 1 (controls port 1 and 3) to the 2.048MHz clock

## Bit 1: DS21Q55 Port 2 and 4 MCLK Source (MSRCA)

0 = Connect MCLK 2 (controls port 2 and 4) to the 1.544MHz clock

1 = Connect MCLK 2 (controls port 2 and 4) to the 2.048MHz clock

Register Name:

TCSR

Register Description:

DS21Q55 TCLK Pin Source

Register Offset:

0x0012

| Bit #   | 7    | 6    | 5    | 4    | 3    | 2    | 1    | 0    |
|---------|------|------|------|------|------|------|------|------|
| Name    | T4S1 | T4S0 | T3S1 | T3S0 | T2S1 | T2S0 | T1S1 | T1S0 |
| Default | 0    | 0    | 0    | 0    | 0    | 0    | 0    | 0    |

## Bit 0 to 1: DS21Q55 Port 1 TCLK Source (T1S0, T1S1)

The source for TCLK 1 is Defined as shown in Table 3.

## Bit 2 to 3: DS21Q55 Port 2 TCLK Source (T2S0, T2S1)

The source for TCLK 2 is Defined as shown in Table 3.

## Bit 4 to 5: DS21Q55 Port 3 TCLK Source (T3S0, T3S1)

The source for TCLK 3 is Defined as shown in Table 3.

## Bit 6 to 7: DS21Q55 Port 4 TCLK Source (T4S0, T4S1)

The source for TCLK 3 is Defined as shown in Table 3.

Table 3. TCLKx Source Definition

|   TxS1, TxS0 | TCLK CONNECTION                      |
|--------------|--------------------------------------|
|           00 | Drive TCLK X with the 1.544MHz clock |
|           01 | Drive TCLK X with the 2.048MHz clock |
|           10 | Drive TCLK X with RCLK X             |
|           11 | N/A                                  |

Register Name:

SYSCLKT

Register Description:

DS21Q55 TSYSCLK Pin Setting

Register Offset:

0x0013

| Bit #   | 7    | 6    | 5    | 4    | 3    | 2    | 1    | 0    |
|---------|------|------|------|------|------|------|------|------|
| Name    | R4S1 | R4S0 | R3S1 | R3S0 | R2S1 | R2S0 | R1S1 | R1S0 |
| Default | 0    | 0    | 0    | 0    | 0    | 0    | 0    | 0    |

## Bit 0 to 1: DS21Q55 Port 1 TSYSCLK Source (R1S0, R1S1)

The source for TSYSCLK 1 is Defined as shown in Table 4.

## Bit 2 to 3: DS21Q55 Port 2 TSYSCLK Source (R2S0, R2S1)

The source for TSYSCLK 2 is Defined as shown in Table 4.

## Bit 4 to 5: DS21Q55 Port 3 TSYSCLK Source (R3S0, R3S1)

The source for TSYSCLK 3 is Defined as shown in Table 4.

## Bit 6 to 7: DS21Q55 Port 4 TSYSCLK Source (R4S0, R4S1)

The source for TSYSCLK 4 is Defined as shown in Table 4.

Table 4. TSYSCLKx Source Definition

|   RxS1, RxS0 | TSYSCLK X CONNECTION                      |
|--------------|-------------------------------------------|
|           00 | Drive TSYSCLK X with the 1.544MHz clock   |
|           01 | Drive TSYSCLK X with the 2.048MHz clock   |
|           10 | Drive TSYSCLK X with 8.192MHz clock       |
|           11 | Drive TSYSCLK X with DS21Q55 Port X BPCLK |

Register Name:

SYSCLKR

Register Description:

DS21Q55 RSYSCLK Pin Setting

Register Offset:

0x0014

| Bit #   | 7    | 6    | 5    | 4    | 3    | 2    | 1    | 0    |
|---------|------|------|------|------|------|------|------|------|
| Name    | T4S1 | T4S0 | T3S1 | T3S0 | T2S1 | T2S0 | T1S1 | T1S0 |
| Default | 0    | 0    | 0    | 0    | 0    | 0    | 0    | 0    |

## Bit 0 to 1: DS21Q55 Port 1 RSYSCLK Source (T1S0, T1S1)

The source for RSYSCLK 1 is Defined as shown in Table 5.

## Bit 2 to 3: DS21Q55 Port 2 RSYSCLK Source (T2S0, T2S1)

The source for RSYSCLK 2 is Defined as shown in Table 5.

## Bit 4 to 5: DS21Q55 Port 3 RSYSCLK Source (T3S0, T3S1)

The source for RSYSCLK 3 is Defined as shown in Table 5.

## Bit 6 to 7: DS21Q55 Port 4 RSYSCLK Source (T4S0, T4S1)

The source for RSYSCLK 4 is Defined as shown in Table 5.

Table 5. RSYSCLKx Source Definition

|   TxS1, TxS0 | RSYSCLK X CONNECTION                      |
|--------------|-------------------------------------------|
|           00 | Drive RSYSCLK X with the 1.544MHz clock   |
|           01 | Drive RSYSCLK X with the 2.048MHz clock   |
|           10 | Drive RSYSCLK X with 8.192MHz clock       |
|           11 | Drive RSYSCLK X with DS21Q55 Port X BPCLK |

Register Name:

SYNC1

Register Description:

DS21Q55 TSYNC Pin Source

Register Offset:

0x0015

| Bit #   | 7   | 6   | 5   | 4   | 3     | 2     | 1     | 0     |
|---------|-----|-----|-----|-----|-------|-------|-------|-------|
| Name    | -   | -   | -   | -   | T4SRC | T3SRC | T2SRC | T1SRC |
| Default | -   | -   | -   | -   | 0     | 0     | 0     | 0     |

## Bit 0: DS21Q55 Port 1 TSYNC Source (T1SRC)

0 = TSYNC 1 is an output, tri-state corresponding FPGA driver pin (weak pulldown)

1 = Drive TSYNC 1 with RSYNC 1

## Bit 1: DS21Q55 Port 2 TSYNC Source (T2SRC)

0 = TSYNC 2 is an output, tri-state corresponding FPGA driver pin (weak pulldown)

1 = Drive TSYNC 2 with RSYNC 2

## Bit 2: DS21Q55 Port 3 TSYNC Source (T3SRC)

0 = TSYNC 3 is an output, tri-state corresponding FPGA driver pin (weak pulldown)

1 = Drive TSYNC 3 with RSYNC 3

## Bit 3: DS21Q55 Port 4 TSYNC Source (T4SRC)

0 = TSYNC 4 is an output, tri-state corresponding FPGA driver pin (weak pulldown)

1 = Drive TSYNC 4 with RSYNC 4

Note: When driving TSYNCx with RSYNCx the corresponding DS21Q55 port should be configured such that TSYNCx is an input (IOCR1.1 = 0) and RSYNCx is an output (IOCR1.4 = 0).

Register Name:

SYNC2

Register Description:

DS21Q55 TSSYNC Pin Source

Register Offset:

0x0016

| Bit #   | 7   | 6   | 5   | 4   | 3     | 2     | 1     | 0     |
|---------|-----|-----|-----|-----|-------|-------|-------|-------|
| Name    | -   | -   | -   | -   | T4SRC | T3SRC | T2SRC | T1SRC |
| Default | -   | -   | -   | -   | 0     | 0     | 0     | 0     |

## Bit 0: DS21Q55 Port 1 TSSYNC Source (T1SRC)

0 = Not using transmit-side elastic store, tri-state corresponding FPGA driver pin (weak pulldown)

1 = Drive TSSYNC 1 with RSYNC 1

## Bit 1: DS21Q55 Port 2 TSSYNC Source (T2SRC)

0 = Not using transmit-side elastic store, tri-state corresponding FPGA driver pin (weak pulldown)

1 = Drive TSSYNC 2 with RSYNC 2

## Bit 2: DS21Q55 Port 3 TSSYNC Source (T3SRC)

0 = Not using transmit-side elastic store, tri-state corresponding FPGA driver pin (weak pulldown)

1 = Drive TSSYNC 3 with RSYNC 3

## Bit 3: DS21Q55 Port 4 TSSYNC Source (T4Source)

0 = Not using transmit-side elastic store, tri-state corresponding FPGA driver pin (weak pulldown)

1 = Drive TSSYNC 4 with RSYNC 4

Note: When driving TSSYNCx with RSYNCx the corresponding DS21Q55 port should be configured such that RSYNCx is an output (IOCR1.4 = 0).

Register Name:

SYNC3

Register Description:

DS21Q55 RSYNC Pin Setting

Register Offset:

0x0017

| Bit #   | 7     | 6     | 5   | 4   | 3    | 2    | 1    | 0    |
|---------|-------|-------|-----|-----|------|------|------|------|
| Name    | RSOR1 | RSOR0 | -   | -   | R4IO | R3IO | R2IO | R1IO |
| Default | 0     | 0     | -   | -   | 0    | 0    | 0    | 0    |

## Bit 0: DS21Q55 Port 1 RSYNC Setting (R1IO)

0 = RSYNC 1 is an output, tri-state corresponding FPGA driver pin (weak pulldown)

1 = Drive RSYNC 1 with RSYNCX as shown in Table 6

## Bit 1: DS21Q55 Port 2 RSYNC Setting (R2IO)

0 = RSYNC 2 is an output, tri-state corresponding FPGA driver pin (weak pulldown)

1 = Drive RSYNC 2 with RSYNCX as shown in Table 6

## Bit 2: DS21Q55 Port 3 RSYNC Setting (R3IO)

0 = RSYNC 3 is an output, tri-state corresponding FPGA driver pin (weak pulldown)

1 = Drive RSYNC 4 with RSYNCX as shown in Table 6

## Bit 3: DS21Q55 Port 4 RSYNC Setting (R4IO)

0 = RSYNC 4 is an output, tri-state corresponding FPGA driver pin (weak pulldown)

1 = Drive RSYNC 4 with RSYNCX as shown in Table 6

Note: When driving RSYNCy with RSYNCx the corresponding DS21Q55 port should be configured such that RSYNCx is an output (IOCR1.4 = 0) and RSYNCy is an input (IOCR1.4 = 1).

## Table 6. RSYNCx Function Definition

|   RSOR1, RSOR0 | MASTER RSYNC DESIGNATION                                        |
|----------------|-----------------------------------------------------------------|
|             00 | RSYNC1 is used to drive other RSYNC pins (providing R X IO = 1) |
|             01 | RSYNC2 is used to drive other RSYNC pins (providing R X IO = 1) |
|             10 | RSYNC3 is used to drive other RSYNC pins (providing R X IO = 1) |
|             11 | RSYNC4 is used to drive other RSYNC pins (providing R X IO = 1) |

Register Name:

TSERS

Register Description:

DS21Q55 TSER Pin Source

Register Offset:

0x0018

| Bit #   | 7    | 6    | 5    | 4    | 3    | 2    | 1    | 0    |
|---------|------|------|------|------|------|------|------|------|
| Name    | T4S1 | T4S0 | T3S1 | T3S0 | T2S1 | T2S0 | T1S1 | T1S0 |
| Default | 0    | 0    | 0    | 0    | 0    | 0    | 0    | 0    |

## Bit 0 to 1: DS21Q55 Port 1 TSER Source (T1S0, T1S1)

The source for TSER 1 is Defined as shown in Table 7.

## Bit 2 to 3: DS21Q55 Port 2 TSER Source (T2S0, T2S1)

The source for TSER 2 is Defined as shown in Table 7.

## Bit 4 to 5: DS21Q55 Port 3 TSER Source (T3S0, T3S1)

The source for TSER 3 is Defined as shown in Table 7.

## Bit 6 to 7: DS21Q55 Port 4 TSER Source (T4S0, T4S1)

The source for TSER 4 is Defined as shown in Table 7.

Table 7. TSERx Source Definition

|   TxS1, TxS0 | TSER X CONNECTION                           |
|--------------|---------------------------------------------|
|           00 | Tri-state TSER X (weak pulldown)            |
|           01 | Drive TSER X with RSER X                    |
|           10 | Drive TSER X with PCM_TXD bus (DK2000 only) |
|           11 | N/A                                         |

Register Name:

PRSER

Register Description:

PCM RSER Source

Register Offset:

0x0019

| Bit #   | 7   | 6   | 5   | 4   | 3    | 2    | 1    | 0    |
|---------|-----|-----|-----|-----|------|------|------|------|
| Name    | -   | -   | -   | -   | R1EN | R1EN | R1EN | R1EN |
| Default | -   | -   | -   | -   | 0    | 0    | 0    | 0    |

## Bit 0 to 1: PCM RSER Source (R1EN)

0 = Do not drive DS21Q55 Port 1 RSER onto PCM\_RSER

1 = Logically OR DS21Q55 Port 1 RSER with selected other RSER pins and drive onto PCM\_RSER

## Bit 2 to 3: DS21Q55 Port 2 TSER Source (T2S0, T2S1)

0 = Do not drive DS21Q55 Port 2 RSER onto PCM\_RSER

1 = Logically OR DS21Q55 Port 2 RSER with selected other RSER pins and drive onto PCM\_RSER

## Bit 4 to 5: DS21Q55 Port 3 TSER Source (T3S0, T3S1)

0 = Do not drive DS21Q55 Port 3 RSER onto PCM\_RSER

1 = Logically OR DS21Q55 Port 3 RSER with selected other RSER pins and drive onto PCM\_RSER

## Bit 6 to 7: DS21Q55 Port 4 TSER Source (T4S0, T4S1)

0 = Do not drive DS21Q55 Port 4 RSER onto PCM\_RSER

1 = Logically OR DS21Q55 Port 4 RSER with selected other RSER pins and drive onto PCM\_RSER

Note:

PRSER register is for use with the DK2000 only.

Register Name:

PSYNC

Register Description:

PCM RSYNC/TSYNC Source

Register Offset:

0x001A

| Bit #   | 7   | 6   | 5    | 4    | 3   | 2   | 1    | 0    |
|---------|-----|-----|------|------|-----|-----|------|------|
| Name    | -   | -   | T2SR | T1SR | -   | -   | R2SR | R1SR |
| Default | -   | -   | 0    | 0    | -   | -   | 0    | 0    |

Bit 0 to 1: PCM\_RSYNC Source

|   R2SR, R1SR | PCM_RSYNC Source                             |
|--------------|----------------------------------------------|
|           00 | PCM_RSYNC is driven by DS21Q55 port 1 RSYNC. |
|           01 | PCM_RSYNC is driven by DS21Q55 port 2 RSYNC. |
|           10 | PCM_RSYNC is driven by DS21Q55 port 3 RSYNC. |
|           11 | PCM_RSYNC is driven by DS21Q55 port 4 RSYNC. |

Bit 4 to 5: PCM\_TSYNC Source

|   T2SR, T1SR | PCM_TSYNC Source                             |
|--------------|----------------------------------------------|
|           00 | PCM_TSYNC is driven by DS21Q55 port 1 TSYNC. |
|           01 | PCM_TSYNC is driven by DS21Q55 port 2 TSYNC. |
|           10 | PCM_TSYNC is driven by DS21Q55 port 3 TSYNC. |
|           11 | PCM_TSYNC is driven by DS21Q55 port 4 TSYNC. |

Note: PSYNC register is for use with the DK2000 only.

Register Name:

PCLK

Register Description:

PCM RCLK/TCLK Source

Register Offset:

0x001B

| Bit #   | 7   | 6   | 5    | 4    | 3   | 2   | 1    | 0    |
|---------|-----|-----|------|------|-----|-----|------|------|
| Name    | -   | TCM | T2SR | T1SR | -   | RCM | R2SR | R1SR |
| Default | -   | 0   | 0    | 0    | -   | 0   | 0    | 0    |

Bit 0 to 2: PCM\_RCLK Source

|   RCM, R2SR, R1SR | PCM_RCLK Source                             |
|-------------------|---------------------------------------------|
|               000 | PCM_RCLK is driven by DS21Q55 port 1 RCLK.  |
|               001 | PCM_RCLK is driven by DS21Q55 port 2 RCLK.  |
|               010 | PCM_RCLK is driven by DS21Q55 port 3 RCLK.  |
|               011 | PCM_RCLK is driven by DS21Q55 port 4 RCLK.  |
|               100 | PCM_RCLK is driven by DS21Q55 port 1 BPCLK. |
|               101 | PCM_RCLK is driven by DS21Q55 port 2 BPCLK. |
|               110 | PCM_RCLK is driven by DS21Q55 port 3 BPCLK. |
|               111 | PCM_RCLK is driven by DS21Q55 port 4 BPCLK. |

Bit 4 to 5: PCM\_TCLK Source

|   TCM, T2SR, T1SR | PCM_TCLK Source                                            |
|-------------------|------------------------------------------------------------|
|               000 | PCM_TCLK is driven by source used for DS21Q55 port 1 TCLK. |
|               001 | PCM_TCLK is driven by source used for DS21Q55 port 2 TCLK. |
|               010 | PCM_TCLK is driven by source used for DS21Q55 port 3 TCLK. |
|               011 | PCM_TCLK is driven by source used for DS21Q55 port 4 TCLK. |
|               100 | PCM_TCLK is driven by DS21Q55 port 1 BPCLK.                |
|               101 | PCM_TCLK is driven by DS21Q55 port 2 BPCLK.                |
|               110 | PCM_TCLK is driven by DS21Q55 port 3 BPCLK.                |
|               111 | PCM_TCLK is driven by DS21Q55 port 4 BPCLK.                |

Note:

PCLK register is for use with the DK2000 only.

## FPGA CONTROL EXAMPLES

<!-- image -->

Table 8. FPGA Configuration for Scenario #1 (Port 1, T1 Mode)

| REGISTER   | SETTING   | FUNCTION                                                                              |
|------------|-----------|---------------------------------------------------------------------------------------|
| MCSR       | 0X01      | Drive DS21Q55 ports 1 and 3 MCLK with 2.048MHz                                        |
| TCSR       | 0X00      | Drive TCLK with 1.544MHz                                                              |
| SYSCLKT    | 0X00      | Drive TSYSCLK with 1.544MHz                                                           |
| SYSCLKR    | 0X00      | Drive RSYSCLK with 1.544MHz                                                           |
| SYNC1      | 0X00      | Tri-state FPGA driver pin for DS21Q55 TSYNC1                                          |
| SYNC2      | 0X01      | Drive TSSYNC1 with RSYNC1                                                             |
| SYNC3      | 0X00      | Tri-state FPGA driver pin for DS21Q55 RSYNC                                           |
| TSERS      | 0X02      | Drive DS21Q55 TSER1 with data from PCM bus                                            |
| PRSER      | 0X01      | Drive DS21Q55 RSER1 onto PCM bus                                                      |
| PSYNC      | 0X00      | PCM RSYNC and PCM TSYNC are provided by DS21Q55 port 1 RSYNC and TSYNC (respectively) |
| PCLK       | 0X44      | PCM RCLK and TCLK are driven by port 1 BPCLK                                          |

<!-- image -->

Table 9. FPGA Configuration for Scenario #2 (Port 1, T1 Mode)

| REGISTER   | SETTING   | FUNCTION                                       |
|------------|-----------|------------------------------------------------|
| MCSR       | 0X01      | Drive DS21Q55 ports 1 and 3 MCLK with 2.048MHz |
| TCSR       | 0X02      | Drive TCLK1 with RCLK1                         |
| SYSCLKT    | 0X00      | Drive TSYSCLK with 1.544MHz                    |
| SYSCLKR    | 0X00      | Drive RSYSCLK with 1.544MHz                    |
| SYNC1      | 0X01      | Drive TSYNC1 with RSYNC1                       |
| SYNC2      | 0X01      | Drive TSSYNC1 with RSYNC1                      |
| SYNC3      | 0X00      | Tri-state FPGA driver pin for DS21Q55 RSYNC    |
| TSERS      | 0X01      | Drive DS21Q55 TSER1 with data from RSER1       |
| PRSER      | N/A       | Unused                                         |
| PSYNC      | N/A       | Unused                                         |
| PCLK       | N/A       | Unused                                         |

Table 10. DS21Q55 Partial Configuration for Scenario #2 (Port 1, T1 Mode)

| REGISTER   | SETTING              | FUNCTION                              |
|------------|----------------------|---------------------------------------|
| IOCR1      | TSIO = 0; RSIO = 0   | TSYNc is an input, RSYNC is an output |
| ESCR       | TESE = 0; RESE = 0   | Bypass Rx and Tx elastic stores       |
| CCR1       | TCSS1 = 0; TCSS2 = 0 | TCLK is driven by TCLK pin            |

## DS21Q55 INFORMATION

For more information about the DS21Q55, please consult the DS21Q55 data sheet available on our website at www.maxm-ic.com/DS21Q55. Software downloads are also available for this demo kit.

## DS21Q55DK INFORMATION

For more information about the DS21Q55DK, including software downloads, please consult the DS21Q55DK data sheet available on our website at www.maxim-ic.com/telecom.

## TECHNICAL SUPPORT

For additional technical support, please e-mail your questions to telecom.support@dalsemi.com.

## SCHEMATICS

The DS21Q55DK schematics are featured in the following pages.

## DOCUMENT REVISION HISTORY

|   REVISION DATE | DESCRIPTION                                                             |
|-----------------|-------------------------------------------------------------------------|
|          121903 | Initial DS21Q55DK data sheet release.                                   |
|          012506 | Changed part number for CH1 in Component List from 'TX1473' to 'T8132.' |
|          110106 | Updated schematics.                                                     |

Maxim/Dallas Semiconductor cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim/Dallas Semiconductor product. No circuit patent licenses are implied. Maxim/Dallas Semiconductor reserves the right to change the circuitry and specifications without notice at any time.

1

2

3

4

5

6

7

8

D

KIT

DESIGN

DS21Q55

D

C

C

B

B

REVISIONS:

REPLACED THE SYMBOL XC2S50E\_U WITH SYMBOL XC2S50\_U.

A1: 3/7/2003 -

CONTENTS

COVER PAGE

1.

DS21Q55 CONTROL AND BACKPLANE

2.

RX SYSTEM SIDE

TX /

AND 2

PORT 1

3.

RX SYSTEM SIDE

TX /

AND 4

PORT 3

4.

A

RX ANALOG PATHS

RX ANALOG PATHS

TX /

PORT 1

TX /

PORT 2

5.

6.

A

RX ANALOG PATHS

TX /

PORT 3

7.

RX ANALOG PATHS

TX /

PORT 4

8.

TIM ADDRESS DATA BUS CONNECTION

9.

FPGA CROSS CONNECT FOR RX / TX SIGNALS

10.

FPGA AND CONFIG PROM CONTROL

11.

DATE:

TITLE:

FPGA CLOCK AND DATABUS

12.

2/24/03

DS21Q55DK02A1

15

/

1

PAGE:

STEVE SCULLY

ENGINEER:

SUPPLY DECOUPLING

13.

SIGNAL CROSS-REFERENCE

COMPONENT CROSS-REFERENCE

14.

15.

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

V3\_3

D

U19

D11

G19

W2

W18

E4

J17

P1

P18

M20

M17

G20

C4

B6

B3

A9

D18

C16

C12

B12

V5

U2

N4

J3

U2

TVDD4

TVDD3

TVDD2

TVDD1

RVDD4

RVDD3

RVDD2

RVDD1

DVDD4&lt;4&gt;

DVDD4&lt;3&gt;

DVDD4&lt;2&gt;

DVDD4&lt;1&gt;

DVDD3&lt;4&gt;

DVDD3&lt;3&gt;

DVDD3&lt;2&gt;

DVDD3&lt;1&gt;

DVDD2&lt;4&gt;

DVDD2&lt;3&gt;

DVDD2&lt;2&gt;

DVDD2&lt;1&gt;

DVDD1&lt;4&gt;

DVDD1&lt;3&gt;

DVDD1&lt;2&gt;

DVDD1&lt;1&gt;

CS1*

P3

CS1

C

MCLK1

T1

MCLK2

W20

MCLK1

CS2*

A14

CS2

TSTRST

U16

MCLK2

CS3*

B5

CS3

C

TSTRST

CS4*

K17

CS4

INT

U1

BTS

P2

INT*

LIUC

K2

BTS

WR*

K3

WR\_RW

LIUC

RD*

N2

RD\_DS

MUX

U10

MUX

JTRST*

V18

JTRST

TP2

1

D\_AD0

U11

D0

D\_AD1

J19

D1

DS21Q55\_U

JTMS

JTCLK

W13

JTMS

Y15

JTCLK

D\_AD2

W15

B

D\_AD3

U7

D2

D3

CONTROL

JTDI

JTDO

N1

V19

2

R48

JTDI\_CON2SCT

TP3

1

JTD\_SCT2PROM

1

0

B

D\_AD4

U9

D\_AD5

U5

D4

D\_AD6

V4

D5

A0

U3

A0

D\_AD7

U4

D6

A1

L17

A1

D7

A2

V2

A2

A3

T4

A3

H18

V17

NC1

A4

V8

A4

NC2

A5

H4

A5

A6

U8

A6

A7

P4

A7

A

RVSS4&lt;2&gt;

RVSS4&lt;1&gt;

RVSS3&lt;2&gt;

RVSS3&lt;1&gt;

RVSS2&lt;2&gt;

RVSS2&lt;1&gt;

RVSS1&lt;2&gt;

RVSS1&lt;1&gt;

DVSS4&lt;3&gt;

DVSS4&lt;2&gt;

DVSS4&lt;1&gt;

DVSS3&lt;3&gt;

DVSS3&lt;2&gt;

DVSS3&lt;1&gt;

DVSS2&lt;3&gt;

DVSS2&lt;2&gt;

DVSS2&lt;1&gt;

DVSS1&lt;3&gt;

DVSS1&lt;2&gt;

DVSS1&lt;1&gt;

TVSS4

TVSS3

TVSS2

TVSS1

A

W19

V20

D5

D4

J18

H19

T2

R2

N17

L20

H20

B9

B7

A5

B11

A20

A17

W8

U6

H3

U18

C5

G18

W4

DATE:

TITLE:

2/24/03

DS21Q55DK02A1

15

/

2

PAGE:

STEVE SCULLY

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

D

U2

U2

RLOS2

E17

RLOS/LOTC

TTIP

Y3

TTIP2

RLOS1

H2

RLOS/LOTC

TTIP

Y1

TTIP1

BPCLK2

H17

C

A13

BPCLK

TRING

Y4

TRING2

BPCLK1

M1

BPCLK

TRING

Y2

TRING1

RLINK

TCLK

B19

TCLK2

G2

RLINK

TCLK

Y9

TCLK1

C

A12

RLCLK

RTIP

Y13

RTIP2

F1

RLCLK

RTIP

Y10

RTIP1

G17

RCHBLK

RRING

Y14

RRING2

M2

RCHBLK

RRING

Y11

RRING1

D14

RCHCLK

RCLK

B13

RCLK2

J1

RCHCLK

RCLK

N3

RCLK1

RSER2

D15

RSER

RPOSI

B14

RSER1

J2

RSER

RPOSI

R4

RSYSCLK2

RSYNC2

F17

D12

RSYSCLK

RNEGI

D13

RSYSCLK1

H1

RSYSCLK

RNEGI

R3

RSYNC

DS21Q55\_U

RCLKI

A15

RSYNC1

G1

RSYNC

DS21Q55\_U

RCLKI

M4

D16

RMSYNC

PORT

RPOSO

A16

L1

RMSYNC

PORT

RPOSO

L4

B16

RSIG

RNEGO

B15

L2

RSIG

RNEGO

L3

C15

RSIGF

RCLKO

C14

K1

RSIGF

RCLKO

M3

B

TSYNC2

D17

TSSYNC2

D20

RFSYNC

TCLKI

D19

K4

RFSYNC

TCLKI

V6

TSYSCLK2

B18

TSYNC

TNEGI

F19

TSYNC1

V1

TSYNC

TNEGI

R1

B

A19

TSSYNC

TPOSI

C20

TSSYNC1

W12

TSSYNC

TPOSI

W3

TSYSCLK

TCLKO

E18

TSYSCLK1

W11

TSYSCLK

TCLKO

W7

TSER2

C17

TSER

TNEGO

B20

TSER1

W9

TSER

TNEGO

T3

F20

TCHBLK

TPOSO

C19

W1

TCHBLK

TPOSO

V7

A18

TCHCLK

ESIBRD

C13

ESIBRD

V10

TCHCLK

ESIBRD

J4

ESIBRD

C18

TSIG

ESIBR0

F18

ESIBR0

W10

TSIG

ESIBR0

W6

ESIBR0

E19

TLINK

ESIBR1

B17

ESIBR1

W5

TLINK

ESIBR1

V9

ESIBR1

E20

TLCLK

V3

TLCLK

A

A

DATE:

TITLE:

2/24/03

DS21Q55DK02A1

15

/

3

PAGE:

STEVE SCULLY

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

D

U2

U2

RLOS4

C

BPCLK4

V11

RLOS/LOTC

TTIP

Y7

TTIP4

RLOS3

E1

RLOS/LOTC

TTIP

Y5

TTIP3

V13

BPCLK

TRING

Y8

TRING4

BPCLK3

F4

BPCLK

TRING

Y6

TRING3

C

U12

RLINK

TCLK

M19

TCLK4

A3

RLINK

TCLK

B10

TCLK3

K18

RLCLK

RTIP

Y19

RTIP4

D3

RLCLK

RTIP

Y16

RTIP3

Y12

RCHBLK

RRING

Y20

RRING4

G4

RCHBLK

RRING

Y17

RRING3

U14

RCHCLK

RCLK

M18

RCLK4

F3

RCHCLK

RCLK

E3

RCLK3

RSER4

W17

RSER

RPOSI

V15

RSER3

E2

RSER

RPOSI

B2

RSYSCLK4

W14

RSYSCLK

RNEGI

P17

RSYSCLK3

G3

RSYSCLK

RNEGI

A1

RSYNC4

V12

RSYNC

DS21Q55\_U

RCLKI

R17

RSYNC3

D1

RSYNC

DS21Q55\_U

RCLKI

A4

W16

RMSYNC

PORT

RPOSO

U15

F2

RMSYNC

PORT

RPOSO

B1

Y18

RSIG

RNEGO

U17

C1

RSIG

RNEGO

C2

V16

RSIGF

RCLKO

T17

D2

RSIGF

RCLKO

B4

B

TSYNC4

V14

TSSYNC4

R18

RFSYNC

TCLKI

P20

A2

RFSYNC

TCLKI

C8

B

K19

TSYNC

TNEGI

R20

TSYNC3

C7

TSYNC

TNEGI

D8

TSSYNC

TPOSI

R19

TSSYNC3

TSYSCLK4

N18

TSYSCLK

TCLKO

P19

TSYSCLK3

D10

A11

TSSYNC

TPOSI

A8

TSYSCLK

TCLKO

A7

TSER4

K20

TSER

TNEGO

N20

TSER3

C10

TSER

TNEGO

D9

U20

TCHBLK

TPOSO

N19

C11

TCHBLK

TPOSO

C9

L18

TCHCLK

ESIBRD

U13

ESIBRD

B8

TCHCLK

ESIBRD

C3

ESIBRD

L19

TSIG

ESIBR0

T20

ESIBR0

A10

TSIG

ESIBR0

D7

ESIBR0

T19

TLINK

ESIBR1

J20

ESIBR1

C6

TLINK

ESIBR1

A6

ESIBR1

T18

TLCLK

D6

TLCLK

A

A

DATE:

TITLE:

2/24/03

DS21Q55DK02A1

15

/

4

PAGE:

STEVE SCULLY

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

D

CONN\_BNC\_5PIN

J9

F15

C16

R21

1

2

1

1

2

2

1

TTIP1

2

AMP

1.25

2

F16

Z

500A

Z15

19

14

0.22UF

Z

Z8

1

C7

2

19

XMIT

13

2

50A

1UF

0

2

1

1

20

13

20

14

1

2

1

TRING1

R20

RJ45\_4PORT

AMP

1.25

CH1

T1

0

C

J10

8

A8

500A

1

2

Z

Z29

Z

500A

Z27

C

A7

7

2

1

6

A6

SW4

A5

5

1

3

DPDT

2

A3

3

4

A4

6

4

5

A1

1

2

A2

CONN\_BNC\_5PIN

RJ45

F8

C6

R19

B

J5

1

2

1

17

16

1

2

18

RCV

15

2

1

RTIP1

B

2

50A

0

15

0.22UF

2

AMP

1.25

1

Z

500A

Z16

18

CH1

R23

F7

2

17

T1

16

Z

Z7

1

R18

2

1

2

1

2

1

RRING1

51.1

AMP

1.25

500A

1

2

500A

1

0

1

Z

Z24

Z

Z20

R31

61.9

R30

61.9

2

1

2

2

A

A

1

0.1UF

C14

2

DATE:

TITLE:

2/24/03

DS21Q55DK02A1

/ 15

5

PAGE:

STEVE SCULLY

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

D

CONN\_BNC\_5PIN

J8

F13

C19

R12

1

2

1

1

2

2

1

TTIP2

2

AMP

1.25

1

F14

Z

500A

Z13

23

10

0.22UF

Z

Z4

1

C8

2

23

XMIT

10

2

50A

1UF

0

2

1

2

24

9

24

9

1

2

1

TRING2

R11

RJ45\_4PORT

AMP

1.25

CH1

T1

C

J10

8

B8

500A

2

2

500A

0

C

Z

Z26

Z

Z30

B7

7

1

1

6

B6

SW2

B5

5

1

3

DPDT

2

B3

3

4

B4

6

4

5

B1

1

2

B2

CONN\_BNC\_5PIN

RJ45

R8

B

J4

F6

C5

1

2

1

21

12

1

2

22

RCV

11

1

2

RTIP2

B

2

50A

0

2

AMP

1.25

1

Z

500A

Z14

22

CH1

11

0.22UF

R24

F5

2

21

T1

12

Z

Z2

1

R7

2

1

2

1

2

1

RRING2

51.1

AMP

1.25

2

1

500A

1

1

0

500A

Z

Z22

Z

Z18

R34

61.9

R29

61.9

1

2

2

2

A

A

1

0.1UF

C13

2

DATE:

TITLE:

2/24/03

DS21Q55DK02A1

15

/

6

PAGE:

STEVE SCULLY

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

D

CONN\_BNC\_5PIN

J7

F11

C17

R15

1

2

1

1

2

2

1

TTIP3

2

AMP

1.25

1

F12

Z

500A

Z11

27

6

0.22UF

Z

Z6

1

C3

2

27

XMIT

6

2

50A

1UF

0

2

1

2

28

5

28

5

1

2

1

TRING3

R14

0

C

J10

8

C8

RJ45\_4PORT

AMP

1.25

CH1

T1

500A

1

2

Z

Z31

Z

500A

Z25

C

C7

7

2

1

6

C6

SW3

C5

5

4

C4

1

3

DPDT

2

C3

3

2

C2

6

4

5

C1

1

CONN\_BNC\_5PIN

RJ45

B

J3

1

2

1

25

8

1

2

26

RCV

7

2

1

RTIP3

B

F3

C4

R17

2

50A

0

2

AMP

1.25

1

Z

500A

Z12

26

7

0.22UF

CH1

R22

F4

2

25

T1

8

Z

Z5

1

R16

2

1

2

1

2

1

RRING3

51.1

AMP

1.25

1

2

500A

500A

Z

Z23

Z

Z19

R32

1

61.9

R33

61.9

0

1

2

1

2

2

A

A

1

0.1UF

C15

2

DATE:

TITLE:

2/24/03

DS21Q55DK02A1

15

/

7

PAGE:

STEVE SCULLY

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

D

CONN\_BNC\_5PIN

J6

F9

C20

R10

1

2

1

1

2

2

1

TTIP4

2

AMP

1.25

2

F10

Z

500A

Z10

31

2

0.22UF

Z

Z3

1

C2

2

31

XMIT

2

2

50A

1UF

0

2

1

1

32

1

32

1

1

2

1

TRING4

R9

RJ45\_4PORT

AMP

1.25

CH1

T1

C

J10

8

D8

500A

2

1

500A

0

C

Z

Z28

Z

Z32

D7

7

1

2

6

D6

SW1

D5

5

1

3

DPDT

2

D3

3

4

D4

6

4

5

D1

1

2

D2

CONN\_BNC\_5PIN

RJ45

R6

B

J2

F1

C1

1

2

1

29

4

1

2

30

RCV

3

2

1

RTIP4

B

1

3

0.22UF

2

0

2

AMP

1.25

Z

Z9

500A

30

CH1

R25

F2

2

29

T1

4

Z

Z1

50A

1

R5

2

1

2

1

2

1

RRING4

51.1

AMP

1.25

2

1

500A

2

2

0

500A

Z

Z17

Z

Z21

R35

61.9

R36

61.9

1

2

1

1

A

A

1

0.1UF

C11

2

DATE:

TITLE:

2/24/03

DS21Q55DK02A1

/ 15

8

PAGE:

STEVE SCULLY

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

V3\_3

D

TIM5V

D

TIM5V

J12

J11

2

2

1

1

2

2

1

1

4

4

3

3

LSB)

(TIM

A0

4

4

3

3

J13

6

6

5

5

A1

6

6

5

5

8

8

7

7

A2

8

8

7

7

PCM\_RXCLK

10

10

9

9

A3

10

10

9

9

CON12P

12

12

11

11

A4

12

12

11

11

PCM\_TXCLK

2

1

14

14

13

13

A5

14

14

13

13

4

3

C

16

18

16

15

15

A10

A6

16

16

15

15

PCM\_RXD

6

5

18

17

17

A11

A7

18

18

17

17

PCM\_TXD

8

7

C

20

20

19

19

A12

A8

20

20

19

19

PCM\_RSYNC

10

9

22

22

21

21

A13

A9

22

22

21

21

PCM\_TSYNC

12

11

24

24

23

23

RW\_T

24

24

23

23

26

26

25

25

CLK16384\_T

26

26

25

25

28

28

27

27

WE\_T

28

28

27

27

30

30

29

29

A14

CPU\_RESET

30

30

29

29

32

32

31

31

A15

32

32

31

31

CS\_T

34

34

33

33

D\_AD0

34

34

33

33

36

36

35

35

D\_AD1

36

36

35

35

38

38

37

37

D\_AD2

38

38

37

37

B

40

40

39

39

D\_AD3

40

40

39

39

B

42

42

41

41

D\_AD4

42

42

41

41

AUX\_CLK

CLK1544\_T

44

44

43

43

D\_AD5

44

44

43

43

46

46

45

45

D\_AD6

46

46

45

45

48

48

47

47

D\_AD7

48

48

47

47

INT

50

50

49

49

50

50

49

49

J1X

JX

A

A

DATE:

TITLE:

2/24/03

DS21Q55DK02A1

15

/

9

PAGE:

STEVE SCULLY

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

RSYNC2

TSYNC2

TSYSCLK2

RSYSCLK2

BPCLK2

TCLK2

RCLK2

TSER2

RSER2

D

91

121

94

96

93

100

140

131

102

134

GCK1

IO9\_5

IO8\_5/VREF2\_5

IO7\_5

IO6\_5

IO5\_5

IO4\_5

IO3\_5

IO2\_5/VREF1\_5

IO1\_5

GCK0

88

AUX\_CLK

C

C

TSSYNC2

126

IO1\_6/TRDY\_6

RSER3

112

IO2\_6

5

BANK

IO12\_4

113

RSER1

TSER3

123

IO3\_6/D3

IO11\_4

78

TSER1

RCLK3

122

TCLK3

117

IO4\_6/VREF1\_6

U1

IO10\_4

76

RCLK1

IO9\_4/VREF1\_4

77

TCLK1

IO5\_6

BPCLK3

103

RSYSCLK3

114

TSYSCLK3

120

IO6\_6

IO8\_6

IO7\_6

6

BANK

XC2S50\_U

PORT

I/O

4

BANK

IO8\_4

75

BPCLK1

IO7\_4

IO6\_4

IO5\_4

116

RSYSCLK1

79

TSYSCLK1

101

RSYNC1

RSYNC3

137

IO9\_6

TSYNC3

115

IO10\_6/VREF2\_6

IO4\_4

74

TSYNC1

TSSYNC3

118

IO11\_6

IO3\_4/VREF2\_4

85

TSSYNC1

PCM\_RXCLK

B

PCM\_TXCLK

99

138

IO12\_6

7

BANK

IO2\_4

95

PCM\_RXD

IO1\_7

IO2\_7

IO3\_7/VREF1\_7

IO4\_7

IO5\_7

IO6\_7

IO7\_7

IO8\_7

IO9\_7/VREF2\_7

IO10\_7

IO11\_7

IO12\_7/IRDY\_7

IO1\_4

124

PCM\_TXD

B

IO13\_6

133

130

139

86

80

87

84

83

132

136

141

129

A

PCM\_TSYNC

PCM\_RSYNC

TSSYNC4

TSYNC4

RSYNC4

TSYSCLK4

RSYSCLK4

BPCLK4

TCLK4

RCLK4

TSER4

RSER4

A

DATE:

TITLE:

2/24/03

DS21Q55DK02A1

15

/

10

PAGE:

STEVE SCULLY

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

V2\_5

D

125

97

92

82

55

24

14

9

D

VCCINT8

VCCINT7

VCCINT6

VCCINT5

VCCINT4

VCCINT3

VCCINT2

VCCINT1

JTMS

142

TMS

V3\_3

JTD\_PROM2SPART

32

TDI

VCCO12

144

JTCLK

2

TCK

VCCO11

127

JTDO\_SPART2CON

34

TDO

U1

VCCO10

108

VCCO9

107

CCLK

37

CCLK

XC2S50\_U

VCCO8

90

CPU\_RESET

1

R13

C

DONE

470

2

XRST

69

PROGRAM*

CONTROL

VCCO7

71

72

DONE

VCCO6

70

106

M2

VCCO5

53

SERIAL EEPROM OPTION - UNPOPULATED

C

111

M1

VCCO4

36

109

M0

VCCO3

35

VCCO2

105

NC2

VCCO1

16

1

V3\_3

8

AT17LV65

VCC

DATA

1

CFG\_DIN

U20

104

NC1

2

R37

1

7

SER\_EN

CLK

2

CCLK

NOPOP

6

CEO

RESET

3

XRST

GND16

GND15

GND14

GND13

GND12

GND11

GND10

GND9

GND8

GND7

GND6

GND5

GND4

GND3

GND2

GND1

5

GND

CE

4

DONE

B

143

135

128

119

110

98

89

81

73

61

52

45

33

25

17

8

B

J1

V3\_3

CONN\_10P

36

26

16

8

38

35

17

U3

V3\_3

1

1

2

2

19

D7

VCCO4

VCCO3

VCCO2

VCCO1

VCC3

VCC2

VCC1

TDI

3

JTD\_SCT2PROM

2

R47

1

JTDO\_SPART2CON

3

3

4

4

JTAG CONFIGURATION

14

25

D6

A

J2.TDO

FPGA

TDI

TDO

CONFIG

PROM

TESTPOINT

TDI

TDO

DS21Q55

J2.TDI

9

D5

27

D4

VQ44C

XC18V02

TCK

7

JTCLK

7

7

8

8

TMS

5

JTMS

9

9

10

10

D3

CE*

15

DONE

A

42

D2

CEO*

21

29

D1

OE\_RESET*

13

X\_INIT

CF*

10

CFG\_DIN

40

D0

GND4

GND3

GND2

GND1

CLK

43

XRST

CCLK

1.0K

R38

1.0K

R27

1.0K

R28

TDO

31

JTD\_PROM2SPART

NOPOP

JTDI\_CON2SCT

5

5

6

6

1

2

2

2

1

1

DATE:

TITLE:

41

28

18

6

2/24/03

DS21Q55DK02A1

15

/

11

PAGE:

STEVE SCULLY

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

V3\_3

ALL UNMARKED BIAS RESISTORS ARE 10K

D

CLK16384\_T

MCLK2

MCLK1

INT\_IND

D\_AD0

D\_AD1

D\_AD2

D\_AD3

D\_AD4

D\_AD5

D\_AD6

D\_AD7

2

2

R1

1

LIUC

1

R3

2

JTRST

D

R4

1

INT

1

R2

2

TSTRST

18

23

64

21

27

11

26

47

28

50

30

31

1

R45

2

ESIBRD

GCK2

IO11\_1

IO10\_1

IO9\_1/VREF2\_1

IO8\_1

IO7\_1

IO6\_1

IO5\_1

IO4\_1/VREF1\_1

IO3\_1

IO2\_1/WRITE*

IO1\_1/CS*

1

R39

2

ESIBR0

1

R41

2

ESIBR1

WE\_T

51

IO1\_2/IRDY\_2

RW\_T

C

CS\_T

3

IO2\_2

1

BANK

49

IO3\_2/D3

GCK3

15

CLK1544\_T

C

IO9\_0

63

A0

BTS

48

MUX

40

IO4\_2/VREF1\_2

U1

IO8\_0

13

A1

IO5\_2

WR\_RW

46

RD\_DS

44

CS1

59

IO6\_2/D2

IO8\_2

IO7\_2/D1

2

BANK

XC2S50\_U

IO7\_0/VREF2\_0

5

A2

PORT

I/O

0

IO6\_0

56

A3

BANK

IO5\_0

IO3\_0

IO4\_0

43

A4

20

A5

42

A6

CS2

10

IO9\_2

CS3

41

IO10\_2/VREF2\_2

CS4

19

IO11\_2

IO2\_0/VREF1\_0

12

A7

CFG\_DIN

39

IO12\_2/DIN/D0

IO1\_0

66

INT

CPU\_RESET

38

IO13\_2/DOUT/BUSY

2

R49

IO1\_3/INIT*

IO2\_3/D7

IO3\_3

IO4\_3/VREF1\_3

3

IO5\_3

BANK

IO6\_3

IO7\_3/D6

IO8\_3/D5

IO9\_3

IO10\_3/VREF2\_3

IO11\_3/D4

IO12\_3

IO13\_3/TRDY\_3

B

B

V3\_3

V3\_3

1

2

DS6

330

1

68

67

6

65

7

29

62

60

22

58

57

4

54

INT\_IND

2

DS5

RED

R46

1

1

2

RED

X\_INIT

RLOS4\_IND

RLOS3\_IND

RLOS2\_IND

RLOS1\_IND

RLOS4

RLOS3

RLOS2

RLOS1

A15

A14

A13

A12

RLOS1\_IND

2

1

2

1

DS1

330

RED

R42

330

RED

R40

RLOS2\_IND

2

1

2

1

A

DS4

RED

330

R43

A

RLOS3\_IND

2

1

2

1

DS3

330

RLOS4\_IND

2

RED

R44

1

2

1

DS2

330

/

DATE:

TITLE:

2/24/03

DS21Q55DK02A1

15

/

12

PAGE:

STEVE SCULLY

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D

U4

V2\_5

D

V2\_5

8

MAX1792

OUT

IN

1

V3\_3

2

1

2

1

1UF

C36

1UF

C34

10UF

C37

7

OUT

IN

2

R26

10K

6

SET

RST

3

X\_INIT

1

2

2

1

5

GND

SHDN

4

2

1UF

C21

1

C

C

V3\_3

1

1

1

2

1

2

2

1

1

1

2

2

2

2

2

2

2

1

1

1

0.1UF

C26

0.1UF

C42

0.1UF

C24

0.1UF

C33

0.1UF

C29

0.1UF

C32

0.1UF

C12

0.1UF

C39

0.1UF

C27

0.1UF

C30

0.1UF

C10

0.1UF

C22

0.1UF

C25

0.1UF

C40

0.1UF

C18

0.1UF

C9

0.1UF

C31

0.1UF

C43

1UF

C45

10UF

C44

2

2

1

2

1

1

2

2

2

1

2

1

1

1

1

1

2

2

2

1

B

VCC

V3\_3

B

1

1

1

1

1

0.1UF

C35

0.1UF

C41

0.1UF

C28

0.1UF

C23

0.1UF

C38

2

2

2

2

2

TP

TP

TP

TP

1

1

1

1

A

A

DATE:

TITLE:

2/24/03

DS21Q55DK02A1

15

/

13

PAGE:

STEVE SCULLY

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

12A3&lt;&gt; 12A5&lt;&gt;

RLOS4\_IND

*** Signal Cross-Reference for the entire design ***

3C8&lt; 5B8&lt;

RRING1

3C4&lt; 6B8&lt;

RRING2

9D6&lt;&gt; 12C5&lt;&gt; 2B7&lt;

A0

4C8&lt; 7B8&lt;

RRING3

9C6&lt;&gt; 12C5&lt;&gt; 2B7&lt;

A1

4C4&lt; 8B8&lt;

RRING4

9C6&lt;&gt; 12C5&lt;&gt; 2B7&lt;

A2

3C6&gt; 10C6&lt;&gt;

RSER1

9C6&lt;&gt; 12C5&lt;&gt; 2B7&lt;

D

3C1&gt; 10D5&lt;&gt;

RSER2

9C6&lt;&gt; 12C5&lt;&gt; 2B7&lt;

A3

A4

D

4B6&gt; 10C3&lt;&gt;

RSER3

9C6&lt;&gt; 12B5&lt;&gt; 2A7&lt;

A5

4B1&gt; 10A5&lt;&gt;

RSER4

9C6&lt;&gt; 12B5&lt;&gt; 2A7&lt;

A6

3B6&lt;&gt; 10B6&lt;&gt;

RSYNC1

9C6&lt;&gt; 12B5&lt;&gt; 2A7&lt;

A7

3B1&lt;&gt; 10D4&lt;&gt;

RSYNC2

9C6&lt;&gt;

A8

4B6&lt;&gt; 10B3&lt;&gt;

RSYNC3

9C6&lt;&gt;

A9

4B1&lt;&gt; 10A5&lt;&gt;

RSYNC4

9C3&lt;&gt;

A10

10B6&lt;&gt; 3B6&lt;

RSYSCLK1

9C3&lt;&gt;

A11

10D5&lt;&gt; 3B1&lt;

RSYSCLK2

9C3&lt;&gt; 12A4&lt;&gt;

A12

10B3&lt;&gt; 4B6&lt;

RSYSCLK3

9C3&lt;&gt; 12A4&lt;&gt;

A13

10A5&lt;&gt; 4B1&lt;

RSYSCLK4

9B3&lt;&gt; 12A4&lt;&gt;

A14

3C8&lt; 5B8&lt;

RTIP1

9B3&lt;&gt; 12A3&lt;&gt;

A15

3C4&lt; 6B8&lt;

RTIP2

9B8&lt;&gt; 10C7&lt;

AUX\_CLK

4C8&lt; 7B8&lt;

RTIP3

3C6&gt; 10C6&lt;&gt;

BPCLK1

4C4&lt; 8B8&lt;

RTIP4

3C1&gt; 10D5&lt;&gt;

BPCLK2

9C6&lt;&gt; 12C1&lt;&gt;

RW\_T

4C6&gt; 10C3&lt;&gt;

BPCLK3

10C6&lt;&gt; 3C8&lt;

TCLK1

4C1&gt; 10A5&lt;&gt;

BPCLK4

10D5&lt;&gt; 3C4&lt;

TCLK2

12C1&lt;&gt; 2C3&lt;

BTS

C

10C3&lt;&gt; 4C8&lt;

10A5&lt;&gt; 4C4&lt;

TCLK3

11A6&lt; 11B8&lt; 11C1&lt;

TCLK4

11A4&gt; 11B8&lt;&gt; 12B1&lt;&gt;

CCLK

CFG\_DIN

C

9D3&lt;&gt; 9D8&lt;&gt;

TIM5V

9B2&lt;&gt; 12C5&lt;

CLK1544\_T

3C8&gt; 5C8&lt;

TRING1

9C4&lt;&gt; 12D3&lt;

CLK16384\_T

3C4&gt; 6C8&lt;

TRING2

9B6&lt;&gt; 12B1&lt;&gt; 11C1&lt;

CPU\_RESET

4C8&gt; 7C8&lt;

TRING3

12B1&lt;&gt; 2C7&lt;

CS1

4C4&gt; 8C8&lt;

TRING4

12B1&lt;&gt; 2C7&lt;

CS2

10C6&lt;&gt; 3B6&lt;

TSER1

12B1&lt;&gt; 2C7&lt;

CS3

10D5&lt;&gt; 3B1&lt;

TSER2

12B1&lt;&gt; 2C7&lt;

CS4

10C3&lt;&gt; 4B6&lt;

TSER3

9B8&lt;&gt; 12C1&lt;&gt;

CS\_T

10A5&lt;&gt; 4B1&lt;

TSER4

11B8&lt;&gt; 11A6&lt; 11C1&lt;

DONE

10B6&lt;&gt; 3B6&lt;

TSSYNC1

2B3&lt;&gt; 9B6&lt;&gt; 12D3&lt;&gt;

D\_AD0

10C3&lt;&gt; 3B1&lt;

TSSYNC2

2B3&lt;&gt; 9B6&lt;&gt; 12D3&lt;&gt;

D\_AD1

10B3&lt;&gt; 4B6&lt;

TSSYNC3

2B3&lt;&gt; 9B6&lt;&gt; 12D3&lt;&gt;

D\_AD2

10A4&lt;&gt; 4B1&lt;

TSSYNC4

2B3&lt;&gt; 9B6&lt;&gt; 12D3&lt;&gt;

D\_AD3

2C3&lt; 12D8&lt;

TSTRST

2B3&lt;&gt; 9B6&lt;&gt; 12D3&lt;&gt;

D\_AD4

3B6&lt;&gt; 10B6&lt;&gt;

TSYNC1

2B3&lt;&gt; 9B6&lt;&gt; 12D3&lt;&gt;

D\_AD5

3B1&lt;&gt; 10D5&lt;&gt;

TSYNC2

2B3&lt;&gt; 9B6&lt;&gt; 12D4&lt;&gt;

D\_AD6

4B6&lt;&gt; 10B3&lt;&gt;

TSYNC3

2B3&lt;&gt; 9B6&lt;&gt; 12D4&lt;&gt;

D\_AD7

B

4B1&lt;&gt; 10A5&lt;&gt;

10B6&lt;&gt; 3B6&lt;

TSYNC4

3A4&lt;&gt; 3A8&lt;&gt; 4A4&lt;&gt; 4A8&lt;&gt; 12C6&lt;

TSYSCLK1

3A4&lt;&gt; 3A8&lt;&gt; 4A4&lt;&gt; 4A8&lt;&gt; 12C6&lt;

ESIBR0

ESIBR1

B

10D5&lt;&gt; 3B1&lt;

TSYSCLK2

3B4&lt;&gt; 3B8&lt;&gt; 4A4&lt;&gt; 4A8&lt;&gt; 12D6&lt;

ESIBRD

10B3&lt;&gt; 4B6&lt;

TSYSCLK3

2C3&gt; 9B8&lt;&gt; 12B5&lt;&gt; 12D6&lt;

INT

10A5&lt;&gt; 4B1&lt;

TSYSCLK4

12B5&lt;&gt; 12D3&lt;&gt;

INT\_IND

3C8&gt; 5C8&lt;

TTIP1

11A8&lt;&gt; 2B7&lt; 11C1&lt;

JTCLK

3C4&gt; 6C8&lt;

TTIP2

11A8&lt;&gt; 2B8&lt;

JTDI\_CON2SCT

4C8&gt; 7C8&lt;

TTIP3

11A7&lt;&gt; 11C1&gt;

JTDO\_SPART2CON

4C4&gt; 8C8&lt;

TTIP4

11A6&lt;&gt; 11D1&lt;

JTD\_PROM2SPART

9B6&lt;&gt; 12C1&lt;&gt;

WE\_T

2B8&lt;&gt; 11A6&lt;

JTD\_SCT2PROM

12C1&lt;&gt; 2C7&lt;

WR\_RW

11A8&lt;&gt; 2B7&lt; 11D1&lt;

JTMS

11A6&gt; 11B8&gt; 11C2&lt;

XRST

2B7&lt;&gt; 12D8&lt;

JTRST

11A6&lt;&gt; 12A3&lt;&gt; 13D4&lt;&gt;

X\_INIT

2C3&lt; 12D6&lt;

LIUC

12D3&lt;&gt; 2C3&lt;

MCLK1

12D3&lt;&gt; 2C3&lt;

MCLK2

12C1&lt;&gt; 2B3&lt;

MUX

9C8&lt;&gt; 10A4&lt;&gt;

PCM\_RSYNC

9C8&lt;&gt; 10B3&lt;&gt;

PCM\_RXCLK

9C8&lt;&gt; 10B7&lt;&gt;

PCM\_RXD

9C8&lt;&gt; 10A4&lt;&gt;

PCM\_TSYNC

A

9C8&lt;&gt; 10B3&lt;&gt;

9C8&lt;&gt; 10B7&lt;&gt;

PCM\_TXCLK

PCM\_TXD

A

3C8&gt; 10C6&lt;&gt;

RCLK1

3C4&gt; 10D5&lt;&gt;

RCLK2

4C8&gt; 10C3&lt;&gt;

RCLK3

4C4&gt; 10A5&lt;&gt;

RCLK4

12C1&lt;&gt; 2C7&lt;

RD\_DS

3C6&gt; 12A3&lt;&gt;

RLOS1

12A3&lt;&gt; 12A5&lt;&gt;

RLOS1\_IND

3C1&gt; 12A3&lt;&gt;

RLOS2

12A3&lt;&gt; 12A5&lt;&gt;

RLOS2\_IND

DATE:

TITLE:

4C6&gt; 12A3&lt;&gt;

12A3&lt;&gt; 12A5&lt;&gt;

RLOS3

RLOS3\_IND

4C1&gt; 12A3&lt;&gt;

RLOS4

PAGE:

ENGINEER:

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

SIDACTOR\_2 7B6

Z5

CONN\_BNC\_5PIN 7D2

J7

*** Part Cross-Reference for the entire design ***

SIDACTOR\_2 7C6

Z6

CONN\_BNC\_5PIN 6D2

J8

SIDACTOR\_2 5B6

Z7

CONN\_BNC\_5PIN 5D2

J9

8B5

CAP

C1

SIDACTOR\_2 5C6

Z8

5C3 6C3 7C3 8C3

RJ45\_8

J10

8C5

CAP

C2

SIDACTOR\_2 8B4

Z9

CONN\_50P2 9D7

J11

7C5

CAP

C3

SIDACTOR\_2 8C4

Z10

CONN\_50P2 9D3

J12

7B5

CAP

D

SIDACTOR\_2 7C4

Z11

9D8

CON12P

J13

6B5

CAP

C4

C5

D

SIDACTOR\_2 7B4

Z12

12D6

RES1

R1

5B5

CAP

C6

SIDACTOR\_2 6C4

Z13

12D7

RES1

R2

5C5

CAP

C7

SIDACTOR\_2 6B4

Z14

12D7

RES

R3

6C5

CAP

C8

SIDACTOR\_2 5C4

Z15

12D6

RES1

R4

13B7

CAP

C9

SIDACTOR\_2 5B4

Z16

8B7

RES

R5

13B5

CAP

C10

SIDACTOR\_2 8A4

Z17

8B7

RES

R6

8A6

CAP

C11

SIDACTOR\_2 6A4

Z18

6B7

RES

R7

13B4

CAP

C12

SIDACTOR\_2 7A4

Z19

6B7

RES

R8

6A6

CAP

C13

SIDACTOR\_2 5A4

Z20

8C7

RES

R9

5A6

CAP

C14

SIDACTOR\_2 8A4

Z21

8D7

RES

R10

7A6

CAP

C15

SIDACTOR\_2 6A4

Z22

6C7

RES

R11

5D6

CAP

C16

SIDACTOR\_2 7A4

Z23

6D7

RES

R12

7D6

CAP

C17

SIDACTOR\_2 5A4

Z24

11C2

RES

R13

13B7

CAP

C18

SIDACTOR\_2 7C4

Z25

7C7

RES

R14

6C6

CAP

C19

SIDACTOR\_2 6C4

Z26

7D7

RES

R15

8C6

CAP

C20

SIDACTOR\_2 5C4

Z27

7B7

RES

R16

13C4

CAP

C21

SIDACTOR\_2 8C4

Z28

7B7

RES

R17

13B5

CAP

C22

C

SIDACTOR\_2 5C4

SIDACTOR\_2 6C4

Z29

5B7

RES

R18

13B2

CAP

Z30

5B7

RES

R19

13B2

CAP

C23

C24

C

SIDACTOR\_2 7C4

Z31

5C7

RES

R20

13B6

CAP

C25

SIDACTOR\_2 8C4

Z32

5D7

RES

R21

13B1

CAP

C26

7B2

RES

R22

13B4

CAP

C27

5B2

RES

R23

13B2

CAP

C28

6B2

RES

R24

13B3

CAP

C29

8B2

RES

R25

13B5

CAP

C30

13D4

RES

R26

13B7

CAP

C31

11A7

RES1

R27

13B3

CAP

C32

11A8

RES1

R28

13B2

CAP

C33

6A6

RES1

R29

13D3

CAP

C34

5A6

RES1

R30

13B1

CAP

C35

5A6

RES1

R31

13D2

CAP

C36

7A6

RES1

R32

13D3

CAP

C37

7A6

RES1

R33

13B3

CAP

C38

6A6

RES1

R34

13B4

CAP

C39

8A6

RES1

R35

13B6

CAP

C40

8A6

RES1

R36

13B2

CAP

C41

B

11B7

11A7

RES1

R37

13B2

CAP

RES1

R38

13B8

CAP

C42

C43

B

12C6

RES

R39

13B8

CAP

C44

12A6

RES1

R40

13B8

CAP

C45

12C6

RES

R41

CHOKE\_QUADPORT\_T1 5B4 5C4 6B4 6C4 7B4 7C4 8B4

CH1

12A6

RES1

R42

8C4

12A6

RES1

R43

12B5

LED

DS1

12A6

RES1

R44

12A5

LED

DS2

12D6

RES

R45

12A5

LED

DS3

12B6

RES1

R46

12A5

LED

DS4

11A7

RES1

R47

12B5

LED

DS5

2B7

RES

R48

12B2

LED

DS6

12B2

RES1

R49

8B4

FUSE

F1

SWITCH\_DPDT\_SLIDE\_6P 8C1

SW1

8B4

FUSE

F2

SWITCH\_DPDT\_SLIDE\_6P 6C1

SW2

7B4

FUSE

F3

SWITCH\_DPDT\_SLIDE\_6P 7C1

SW3

7B4

FUSE

F4

SWITCH\_DPDT\_SLIDE\_6P 5C1

SW4

6B3

FUSE

F5

XFMR\_QUADPORT\_T1 5B5 5C5 6B5 6C5 7B5 7C5 8B5

T1

6B3

FUSE

F6

8C5

5B4

FUSE

F7

TSTPNT\_SNG 13B3

TP1

5B4

FUSE

F8

A

TESTPOINT 2B8

TESTPOINT 2B8

TP2

8D4

FUSE

TP3

8C4

FUSE

F9

F10

A

TSTPNT\_SNG 13B4

TP24

7D4

FUSE

F11

TSTPNT\_SNG 13B4

TP25

7C4

FUSE

F12

TSTPNT\_SNG 13B4

TP26

6D3

FUSE

F13

10C5 11C3 12C3

XC2S50\_U

U1

6C3

FUSE

F14

DS21Q55\_U 2D7 3C3 3C7 4C3 4C7

U2

5D4

FUSE

F15

XC18V02VQ44C\_U 11A6

U3

5C4

FUSE

F16

13D4

MAX1792

U4

11B8

CONN\_10P

J1

11C7

AT17LV65

U20

CONN\_BNC\_5PIN 8B2

J2

SIDACTOR\_2 8B6

Z1

CONN\_BNC\_5PIN 7B2

J3

DATE:

TITLE:

SIDACTOR\_2 6B6

SIDACTOR\_2 8C6

Z2

CONN\_BNC\_5PIN 6B2

J4

Z3

CONN\_BNC\_5PIN 5B2

J5

SIDACTOR\_2 6C6

Z4

CONN\_BNC\_5PIN 8D2

J6

PAGE:

ENGINEER:

1

2

3

4

5

6

7

8