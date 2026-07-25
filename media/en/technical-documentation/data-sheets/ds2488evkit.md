<!-- lastmod 2022-08-03 -->
## DS2488 Evaluation Kit

## General Description

The  DS2488  evaluation  kit  (EV  kit)  provides  the  hardware and software necessary to exercise the features of the DS2488. The EV system consists of two boards: the DS9401 and DS2488 EV kit boards. The DS2488 board contains two DS2488 parts. The evaluation software runs on Windows® 10, 8, and 7 operating systems. It provides a  handy  user  interface  to  exercise  the  features  of  the DS2488.

## Features

- Demonstrates the Features of the DS2488
- Fully Compliant with USB Specification v2.0
- Software Runs on Windows 10, 8, and 7
- Convenient On-Board Test Points

## DS2488 EV Kit Contents

|   QTY | DESCRIPTION                                          |
|-------|------------------------------------------------------|
|     1 | DS9401 1-Wire® master with 5V charging board         |
|     1 | DS2488 EV kit evaluation board with two DS2488 parts |
|     2 | USB Type-A to Micro-USB Type-B Cable                 |

Ordering Information appears at end of data sheet.

Windows is a registered trademark and service mark of Microsoft Corporation.

1-Wire is a registered trademark of Maxim Integrated Products, Inc.

## Quick Start

## Required Equipment

This  section  includes  a  list  of  recommended  equipment and instructions on how to set up the Windows-based PC for the evaluation software.

- DS9401 (included)
- DS2488 EV kit (included)
- 2 USB Type A to Micro-USB Type B cable (included)
- PC with a Windows 10, 8, or 7 operating system and two spare USB 2.0 or higher ports
- Download DS2488 EV kit software

## Software and Hardware Installation and Setup

- 1) Unplug any Maxim adapters before installing software.
- 2) Install Prolific drivers from http://www.prolific.com. tw/US/ShowProduct.aspx?p\_id=225&amp;pcid=41 if not already installed.
- 3) Unzip the EV kit software folder.
- 4) Run setup.exe to run installer.
- 5) Click the Install button on the Application Install Security Warning notification to install the EV kit software (see Figure 1).
- 6) Connect JB1 on DS9401 board (see Figure 2).

<!-- image -->

Evaluates: DS2488

Evaluates: DS2488

Figure 1. Install Warning

<!-- image -->

- 7) Connect JB1, JB2, JB3, JB5, JB6 and the VL row on JB4 on the DS2488 EV kit board (see Figure 3).
- 8) Connect the DS9401 and DS2488 EV kit boards to the PC using the USB cables. Ensure no other prolific devices are connected to the PC.
- 9) Connect the DS9401 to the DS2488 EV kit board.
- 10) Launch the DS2488 EV kit software.

Figure 2. DS9401 Board

<!-- image -->

Figure 3. DS2488 EV Kit Board

<!-- image -->

│

- 11)  Click on Auto Detect (see Figure 4).
- 12)  Click on Connect (see Figure 4) and the window automatically changes to the TWS Demo tab if a connection to the hardware is successful (see Figure 5 ).

Figure 4. EV Kit Setup Tab

<!-- image -->

## Evaluates: DS2488

Figure 5. EV Kit Software Demo Tab

<!-- image -->

## EV Kit Supported Functions

The  DS2488  EV  kit  program  is  designed  as  a  usage example.

## Table 1. Usage Flows

| FLOW                 | DESCRIPTION                                                                           |
|----------------------|---------------------------------------------------------------------------------------|
| Detect Earbuds       | Does a 1-Wire, Search ROM to determine which earbuds are connected to the charge box. |
| IOA Low/Dead Battery | Set IOA to logic-low to simulate dead battery, or to pass token to IOB                |
| Send Message         | Uses UART to send message between charge box an ear bud                               |
| Write PIOA Level     | Use 1-Wire commands to set the PIOA level                                             |
| Set PIOB Level       | Set PIOB level using pin from the prolific chip                                       |
| Read PIO Levels      | Uses 1-Wire commands to read the levels of the PIO pin                                |
| Write buffer         | Writes specified hex data to 8-byte buffer                                            |
| Read buffer          | Reads written data in 8-byte buffer                                                   |

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| DS2488EVKIT# | EV Kit |

# Denotes RoHS compliance.

Evaluates: DS2488

Use the  software  to  evaluate  the  DS2488  and  the  GUI displays the 1-Wire sequences for each step to assist the firmware engineer.

│

## DS2488 Evaluation Kit

## DS9401 Bill of Materials

| DESIGNATOR      |   QTY | DESCRIPTION                              | MANUFACTURER                     | PART NO.          |
|-----------------|-------|------------------------------------------|----------------------------------|-------------------|
| C1, C4, C8      |     3 | CAP CER 0.1UF 16V X7R 0603               | Kemet                            | C0603C104K4RACTU  |
| C2, C3          |     2 | CAP CER 4.7UF 16V Y5V 0805               | Samsung Electro-Mechanics        | CL21F475ZOFNNNE   |
| C6              |     1 | CAP CER 10UF 10V Y5V 0805                | Yageo                            | C2012Y5V1A106Z    |
| C7,C5           |     2 | CAP CER 2.2UF 6.3V 10% X5R 0603          | Yageo                            | CC0603KRX5R5BB225 |
| CN1             |     1 | CONN RCPT USB2.0 MICRO B SMD R/A         | Amphenol ICC (FCI)               | 10118193-0001LF   |
| D2              |     1 | DIODE SCHOTTKY 40V 200MA SOD323 (DNP)    | Nexperia USAInc.                 | 1PS76SB21,115     |
| FB1, FB2        |     2 | FERRITE BEAD 220 OHM 0805 1LN            | Murata Electronics North America | BLM21PG221SN1D    |
| JB1             |     1 | CONN HEADER VERT 2POS 2.54MM             | Amphenol ICC (FCI)               | 68000-102HLF      |
| P1              |     1 | CONN HDR 2POS 0.1 GOLD PCB R/A           | Sullins Connector Solutions      | PPPC021LGBN-RC    |
| P2              |     1 | CONN HEADER VERT 2POS 2.54MM             | Amphenol ICC (FCI)               | 68000-102HLF      |
| Q1              |     1 | MOSFET P-CH 20V 2.8A SOT-23              | PMV65XP,215                      | PMV65XP,215       |
| Q2, Q3          |     2 | MOSFET N-CH 60V 115MA SOT23-3            | Diodes Incorporated              | 2N7002-7-F        |
| R1, R7, R9, R12 |     4 | RES SMD 200K OHM 1% 1/10W 0603           | Yageo                            | RC0603FR-07200KL  |
| R2, R8          |     2 | RES SMD 1K OHM 1% 1/10W 0603             | Panasonic Electronic Components  | ERJ-3EKF1002V     |
| R3, R11         |     2 | RES SMD 1K OHM 1% 1/10W 0603             | Yageo                            | RC0603FR-071KL    |
| R4, R5          |     2 | RES SMD 0.0 OHM JUMPER 1/10W             | Panasonic Electronic Components  | ERJ-3GEY0R00V     |
| R6              |     1 | DNP                                      |                                  |                   |
| R10             |     1 | RES SMD 10 OHM 1% 1/10W 0603             | Yageo                            | RC0603FR-0710RL   |
| R13             |     1 | RES SMD 5.1K OHM 1% 1/10W 0603           | Bourns Inc.                      | CR0603-FX-5101ELF |
| R14             |     1 | RES 4.12K OHM 1% 1/10W 0603              | Stackpole Electronics Inc        | RMCF0603FT4K12    |
| R15             |     1 | RES 11K OHM 1% 1/10W 0603                | Stackpole Electronics Inc        | RMCF0603FT11K0    |
| R16             |     1 | RES SMD 4.7K OHM 1% 1/10W 0603           | Rohm Semiconductor               | MCR03ERTF4701     |
| U1              |     1 | USB to Serial Bridge                     | Prolific                         | PL-2303GC         |
| U2              |     1 | High-Voltage, Low-Power Linear Regulator | Maxim Integrated Products        | MAX1616EUK+       |

│

Evaluates: DS2488

## DS2488 Evaluation Kit

## DS2488EVKIT Bill of Materials

| DESIGNATOR                  |   QTY | DESCRIPTION                                     | MANUFACTURER                     | PART NO.          |
|-----------------------------|-------|-------------------------------------------------|----------------------------------|-------------------|
| C1, C2                      |     2 | CAP CER 4.7UF 16V Y5V 0805                      | Samsung Electro-Mechanics        | CL21F475ZOFNNNE   |
| C3, C6, C7, C10, C11, C12   |     6 | CAP CER 0.1UF 16V X7R 0603                      | Kemet                            | C0603C104K4RACTU  |
| C4                          |     1 | CAP CER 10UF 10V Y5V 0805                       | Yageo                            | C2012Y5V1A106Z    |
| C5, C9                      |     2 | CAP CER 2.2UF 16V Y5V 0805                      | Yageo                            | CC0805ZRY5V7BB225 |
| C8, C13                     |     2 | CAP CER 2.2UF 6.3V X5R 0603                     | Taiyo Yuden                      | JMK107BJ225KA-T   |
| CN1                         |     1 | CONN RCPT USB2.0 MICRO B SMD R/A                | Amphenol ICC (FCI)               | 10118193-0001LF   |
| D1                          |     1 | Green 523nm LED Indication - Discrete 3.2V 0603 | Dialight                         | 5988081107F       |
| D2                          |     1 | DIODE SCHOTTKY 40V 200MA SOD323                 | Nexperia USAInc.                 | 1PS76SB21,115     |
| FB1, FB2                    |     2 | FERRITE BEAD 220 OHM 0805 1LN                   | Murata Electronics North America | BLM21PG221SN1D    |
| JB1, JB2, JB3, JB5, JB6, J1 |     6 | CONN HEADER VERT 2POS 2.54MM                    | Amphenol ICC (FCI)               | 68000-102HLF      |
| JB4                         |     1 | CONN HEADER VERT 4POS 2.54MM                    | Amphenol ICC (FCI)               | 67996-104HLF      |
| P1                          |     1 | CONN HEADER R/A 2POS 2.54MM                     | Sullins Connector Solutions      | PRPC002SBAN-M71RC |
| P2                          |     1 | CONN HEADER VERT 12POS 2.54MM                   | Amphenol                         | 67996-212HLF      |
| Q1, Q2                      |     2 | TRANS PNP 40V 0.6A SOT23                        | On Semiconductor                 | MMBT4403LT1G      |
| R1                          |     1 | RES SMD 5.1K OHM 1% 1/10W 0603                  | Panasonic Electronic Components  | ERJ-3EKF5101V     |
| R2                          |     1 | RES SMD 4.12K OHM 1% 1/10W 0603                 | Panasonic Electronic Components  | ERJ-3EKF4121V     |
| R3                          |     1 | RES SMD 11K OHM 0.1% 1/10W 0603                 | Panasonic Electronic Components  | ERA-3AEB113V      |
| R4, R7                      |     2 | RES SMD 200K OHM 1% 1/10W 0603                  | Panasonic Electronic Components  | ERJ-3EKF2003V     |
| R5, R8, R18                 |     3 | RES SMD 680 OHM 1% 1/10W 0603                   | Vishay Dale                      | CRCW0603680RFKEA  |
| R6, R17                     |     2 | 100K/0603                                       | Yageo                            | RC0603FR-07100KL  |
| R9                          |     1 | RES SMD 10K OHM 1% 1/10W 0603                   | Panasonic Electronic Components  | ERJ-3EKF1002V     |
| R10                         |     1 | RES SMD 10 OHM 1% 1/10W 0603                    | Yageo                            | RC0603FR-0710RL   |
| R11                         |     1 | RES SMD 220 OHM 1% 1/10W 0603                   | Panasonic Electronic Components  | ERJ-3EKF2200V     |
| R12, R13                    |     2 | RES SMD 0.0 OHM JUMPER 1/10W                    | Panasonic Electronic Components  | ERJ-3GEY0R00V     |
| R14                         |     1 | DNP                                             |                                  |                   |
| R15, R19, R20, R21, R22     |     5 | RES SMD 100K OHM 1% 1/10W 0603                  | Vishay Dale                      | CRCW0603100KFKEA  |
| R16                         |     1 | RES SMD 1K OHM 1% 1/10W 0603                    | Yageo                            | RC0603FR-071KL    |
| R23                         |     1 | RES SMD 4.7K OHM 1% 1/10W 0603                  | Vishay Dale                      | CRCW06034K70FKEA  |
| U1                          |     1 | Linear Voltage Regulator                        | Maxim Integrated Products        | MAX1616EUK+       |
| U2                          |     1 | USB to Serial Bridge                            | Prolific/Techtonica              | PL-2303GC         |
| U3, U5                      |     2 | 1-Wire Dual Port Link                           | Maxim Integrated                 | DS2488X+U         |
| U7                          |     1 | IC FF D-TYPE SNGL 1BIT US8                      | ON Semiconductor                 | NC7SZ74K8X        |

Evaluates: DS2488

## DS2488 Evaluation Kit

## DS9401 Schematic

<!-- image -->

│

Evaluates: DS2488

## DS2488 EV Kit Schematic

<!-- image -->

│

Evaluates: DS2488

## DS2488 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: DS2488