<!-- lastmod 2024-08-14 -->
<!-- image -->

## Evaluates: MAXQ106

## General Description

The MAXQ1061 evaluation kit (EV kit) provides a platform for  evaluating  the  capabilities  of  the  MAXQ1061 cryptographic controller. The device makes it fast and easy to implement full security for embedded, connected products without requiring firmware development. The coprocessor can be designed-in from the start or added to an existing  design  to  guarantee  confidentiality,  authenticity,  and integrity of the device. It is ideal for connected embedded devices,  industrial  networking,  PLC,  and  network  appliances.

## EV Kit Contents

- MAXQ1061 Multi IF Board
- MAXQ1061 Samples (MAXQ1062 no longer offered)
- Raspberry Pi Clearance Header
- USB Type A to Micro-USB Type B Cable

## MAXQ1061 EV Kit Board

<!-- image -->

Raspberry Pi is a registered trademark and service mark of Raspberry Pi Foundation. Arduino is a registered trademark of Arduino, LLC.

Click here to ask an associate for production status of specific part numbers.

## MAXQ106 Evaluation Kit

## Features

- Compatible with Raspberry Pi 3 Model B/B+ and Raspberry Pi 2 Model B
- Compatible with 3.3V Arduino Uno Motherboards
- USB Connector for USB 2.0-to-SPI/I 2 C Communication
- Selectable Communication Protocol (SPI/I 2 C)
- Selectable Mode (AES-SPI/REMOTE/TLS)
- Tamper Jumper with Tamper LED
- Socket for MAXQ1061 IC
- On-Board Regulator

Ordering Information appears at end of data sheet.

19-8693; Rev 4; 1/24

## MAXQ1061 Evaluation Kit

## Quick Start

## Required Equipment

- MAXQ1061 Multi IF Board (included)
- MAXQ1061 Samples (included)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Open the socket and insert a MAXQ1061  IC

Evaluates: MAXQ1061

into  one  of  the  cavities. Note: The  plus  (+)  on the package must be aligned with the white arrow on the PCB, as shown in Figure 1.

- 2) Install jumper on JP1 as shown in Figure 1.

## Hardware Description

The EV kit is designed to be compatible with a variety of platforms,  including  Raspberry  Pi, Arduino  Uno  boards, and PC operating Linux OS. It also enables wired connections to a custom board.

Figure 1. IC Positioning in Socket

<!-- image -->

│

## MAXQ1061 Evaluation Kit

## Raspberry Pi

The EV kits are compatible with Raspberry Pi 3 Model B/ B+ and Raspberry Pi 2 Model B through connector JH3. The  included  Raspberry  Pi  header  must  be  installed  in JH3 on the bottom side of the board to provide clearance between the EV kit and the Raspberry Pi. See Figure 2.

Note: The Raspberry Pi forces the WAKEUP pin state, so the WAKEUP pushbutton has no effect.

Evaluates: MAXQ1061

## Arduino Uno-Compatible Boards

Connectors JH1, JH2, JH4, and JH5 on the EV kits plug into  Arduino  Uno  connector-compatible  boards  such  as the STM Nucleo®. The EV kits are only compatible with 3.3V I/O boards.

## Linux PC

The EV kits connect to and receive power from the PC through the USB connector, CN1.

Figure 2. MAXQ1061 EV Kit Board Attached to a Raspberry Pi

<!-- image -->

Nucleo is a registered trademark of STMicroelectronics International NV or its affiliates in the EU and/or elsewhere.

## MAXQ1061 Evaluation Kit

## Hardware Settings

Table  1,  Table  2,  and  Table  3  describe  the  jumpers, switches, and LED settings.

## Table 1. Jumper Settings

| JUMPER   | SETTING   | FUNCTION                                  |
|----------|-----------|-------------------------------------------|
| JH6      | Open*     | Tamper signal is disabled.                |
| JH6      | Closed    | Tamper signal is enabled.                 |
| JP1      | Open      | Disables power supply to the MAXQ1061 IC. |
| JP1      | Closed*   | Enables power supply to the MAXQ1061 IC.  |

## Table 2. Switch Settings

| JUMPER   | SETTING      | FUNCTION                                                     |
|----------|--------------|--------------------------------------------------------------|
| SW1      | I2C**        | The MAXQ1061 uses the I 2 C pin and protocol to communicate. |
| SW1      | SPI          | The MAXQ1061 uses SPI pins and protocol to communicate.      |
| SW2      | Pressed      | Wakeup signal is enabled.                                    |
| SW2      | Not pressed* | Wakeup signal is controlled by host platform.                |
| SW3      | Pressed      | Reset signal is enabled.                                     |
| SW3      | Not pressed* | Reset signal is controlled by host platform.                 |
| SW4      | AES-SPI      | Selects the AES-SPI mode.                                    |
| SW4      | REMOTE       | The host platform selects the mode.                          |
| SW4      | TLS          | Selects the TLS mode.                                        |

Evaluates: MAXQ1061

## EV Kit Software Development Kit (SDK)

The  software  development  kit  (SDK)  provides  several tools for evaluating the MAXQ1061 using one of the supported platforms. For instructions on how to download the SDK, contact your Analog Devices representative.

│

## Table 3. LED Information

| LED   | COLOR ON/OFF   | FUNCTION                                     |
|-------|----------------|----------------------------------------------|
| D1    | RED ON         | Tamper signal is enabled.                    |
| D1    | OFF            | Tamper signal is disabled.                   |
| D2    | RED            | TLS mode is selected.                        |
| D2    | GREEN          | AES-SPI mode is selected.                    |
| D3    | GREEN ON       | LED driven high by microcontroller platform. |
| D3    | OFF            | Low by default.                              |
| D4    | YELLOW ON      | LED driven high by PC platform.              |
| D4    | OFF            | Low by default.                              |
| D5    | RED            | SPI communication protocol is selected.      |
| D5    | GREEN          | I 2 C communication protocol is selected.    |
| D7    | GREEN ON       | The board is correctly powered on.           |
| D7    | OFF            | The board is powered off.                    |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAXQ1061EVKIT# | EV Kit |

#Denotes RoHS compliance.

Evaluates: MAXQ1061

│

## MAXQ1061 EV Kit Bill of Materials

| QTY   | PART REFERENCE     | VALUE                              | BOM_DESCRIPTION                                       | MANFACTURER_PN             | MANUFACTURER                     |
|-------|--------------------|------------------------------------|-------------------------------------------------------|----------------------------|----------------------------------|
| 3     | C1,C3,C17          | 1uF                                | CAP CER 1uF 16V 10% X7R 0603                          | GCM188R71C105KA64D         | Murata                           |
| 3     | C2,C4,C5           | 100nF                              | CAP CER 0.1uF 16V 10% X7R 0603                        | C0603C104K4RACTU           | Kemet                            |
| 3     | C6,C7,C10          | 4.7uF                              | CAP CER 4.7uF 10V 10% X5R 0603                        | C0603C475K8PACTU           | Kemet                            |
| 3     | C8,C9,C11          | 100nF                              | CAP CER 0.1UF 16V 10% X7R 0402                        | GRM155R71C104KA88D         | Murata Electronics               |
| 1     | C12                | 100pF                              | CAP CER 100PF 50V +/-1% NP0 0402                      | 04025A101FAT2A             | AVX Corporation                  |
| 2     | C13,C14            | 1uF                                | CAP CER 1UF 35V 10% X5R 0603                          | GMK107BJ105KA-T            | Taiyo Yuden                      |
| 1     | C15                | 100nF                              | CAP CER 0.1UF 50V 10% X7R 0603                        | C0603C104K5RACTU           | Kemet                            |
| 1     | C16                | 470nF                              | CAP CER 0.47UF 10V 10% X5R 0402                       | GRM155R61A474KE15J         | Murata Electronics North America |
| 1     | C18                | 10uF                               | CAP CER 10uF 10V 10% X7R 0805                         | GRM21BR71A106KE51L         | Murata                           |
| 2     | C19,C20            | 27pF                               | CAP CER 27PF 50V 5% NP0 0402                          | GRM1555C1H270JA01D         | Murata Electronics               |
| 1     | CN1                | MICRO USB B R/A                    | CONN RCPT 5POS MICRO USB B R/A                        | 47346-0001                 | Molex                            |
| 1     | D1                 | RED                                | LED 660NM RED WTR CLR 1206 SMD                        | SML-LX1206SRC-TR           | Lumex Opto                       |
| 2     | D2,D5              | LTST-C155GEKT                      | LED GREEN/RED CLEAR 1210                              | LTST-C155GEKT              | Lite-On Inc                      |
| 2     | D3,D7              | GRN                                | LED 565NM WTR CLR GREEN 1206 SMD                      | SML-LX1206GC-TR            | Lumex Opto                       |
| 1     | D4                 | YEL                                | LED ALINGAP YELLOW CLR 1206 SMD                       | SML-LX1206SYC-TR           | Lumex Opto                       |
| 3     | D6,D10,D11         | STPS120M                           | DIODE SCHOTTKY 20V 1A STMITE                          | STPS120M                   | STMicroelectronics               |
| 2     | JH1,JH5            | 1x8 FM                             | CONN RCPT 8POS GOLD .100"                             | ESQ-108-39-G-S             | Samtec                           |
| 1     | JH2                | 1x10 FM                            | CONN RCPT 10POS GOLD .100"                            | ESQ-110-39-G-S             | Samtec                           |
| 1     | JH3                | HLE-120-02-G-DV-BE                 | CONN RCPT 40POS .100" SMD GLD                         | HLE-120-02-G-DV-BE         | Samtec                           |
| 1     | JH4                | 1x6 FM                             | CONN RCPT 6POS GOLD .100"                             | ESQ-106-39-G-S             | Samtec                           |
| 2     | JH6,JP1            | JUMPER                             | CONN HEADER .100 SINGL STR 2POS (2x1)                 | PEC02SAAN                  | Sullins                          |
| 1     | L1                 | BLM21AG121SN1D                     | FERRITE BEAD 120OHM 0805 1LN                          | BLM21AG121SN1D             | Murata Electronics North America |
| 1     | PCB1               | PCB                                |                                                       |                            |                                  |
| 1     | Q1                 | FDV301N                            | MOSFET N-CH 25V 220MA SOT-23                          | FDV301N                    | Fairchild Semiconductor          |
| 1     | Q2                 | DMP2004K-7                         | MOSFET P-CH 20V 600MA SOT23-3                         | DMP2004K-7                 | Diodes Incorporated              |
| 2     | R1,R2              | 4.75K                              | RES 4.75K OHM 1/10W 1% 0603 SMD                       | ERJ-3EKF4751V              | Panasonic                        |
| 4     | R3,R16,R18,R20     | 10K                                | RES 10K OHM 1/10W 1% 0603 SMD                         | ERJ-3EKF1002V              | Panasonic                        |
| 1     | R5                 | 1K                                 | RES 1K OHM 1/10W 1% 0603 SMD                          | ERJ-3EKF1001V              | Panasonic                        |
| 3     | R6,R24,R25         | 4.7K                               | RES 4.7K OHM 1/10W 1% 0402 SMD                        | ERJ-2RKF4701X              | Panasonic                        |
| 1     | R7                 | 49.9K                              | RES 49.9K OHM 1/10W 1% 0603 SMD                       | ERJ-3EKF4992V              | Panasonic                        |
| 1     | R8                 | 332                                | RES 332OHM 1/10W 1% 0603 SMD                          | ERJ-3EKF3320V              | Panasonic                        |
| 5     | R9,R12,R13,R14,R21 | 150                                | RES 150OHM 1/10W 1% 0603 SMD                          | ERJ-3EKF1500V              | Panasonic                        |
| 2     | R10,R15            | 120                                | RES 120OHM 1/10W 1% 0603 SMD                          | ERJ-3EKF1200V              | Panasonic                        |
| 1     | R11                | 100                                | RES 100OHM 1/10W 1% 0603 SMD                          | ERJ-3EKF1000V              | Panasonic                        |
| 1     | R17                | 12.1K                              | RES SMD 12.1K OHM 1% 1/10W 0402                       | ERJ-2RKF1212X              | Panasonic Electronic Components  |
| 1     | R19                | 47K                                | RES 47K OHM 1/10W 1% 0603 SMD                         | ERJ-3EKF4702V              | Panasonic                        |
| 2     | R22,R23            | 0                                  | RES SMD 0OHM JUMPER 1/10W 0603                        | RC0603JR-070RL             | Yageo                            |
| 1     | R26                | 1M                                 | RES SMD 1M OHM 1% 1/10W 0402                          | ERJ-2RKF1004X              | Panasonic                        |
| 1     | SW1                | CL-SB-12B-01T                      | SWITCH SLIDE SPDT 200MA 12V                           | CL-SB-12B-01T              | Copal Electronics Inc            |
| 2     | SW2,SW3            | B3S-1000                           | SWITCH TACTILE SPST-NO 0.05A 24V                      | B3S-1000                   | Omron Electronics                |
| 1     | SW4                | CL-SB-23A-11T                      | SWITCH SLIDE DP3T 200MA 12V                           | CL-SB-23A-11T              | Copal Electronics Inc            |
| 2     | TP1,TP2            | 1P                                 | CONN HEADER .100 SINGL STR 1POS                       | PEC01SAAN                  | Sullins                          |
| 2     | U1                 | MAXQ106 1ETP+                      | IC CRYPTO CTLR 20TQFN                                 | MAXQ1061ETP+               | Analog Devices                   |
| 2     | U2,U3              | NC7WZ17P6X                         | IC BUFF DL SCHMT TRIG UHS SC706                       | NC7WZ17P6X                 | Fairchild Semiconductor          |
| 1     | U4                 | FT4222HQ-D-R                       | IC BRIDGE USB TO I2C/SPI 32VQFN                       | FT4222HQ-D-R               | FTDI                             |
| 1     | U5                 | MAX13202EALT+T                     | ESD PROTECT 2CH 6-UDFN                                | MAX13202EALT+              | Analog Devices                   |
| 1 1   | U6 XU1             | MAX8869EUE33 MAXQ106 1 20P QFN SKT | REG LDO 3.3V/ADJ 16TSSOP-EP 2 0P QFN SKT 20LQ50S14040 | MAX8869EUE33+ 20LQ50S14040 | Analog Devices Plastronics       |
| 1     | Y1                 | 12MHz                              | CRYSTAL 12MHZ 18PF SMD                                | ABM3-12.000MHZ-D2Y-T       | Abracon Corp                     |

## MAXQ1061 Evaluation Kit

## MAXQ1061 EV Kit Schematics

<!-- image -->

│

Evaluates: MAXQ1061

## MAXQ1061 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAXQ1061

## MAXQ1061 EV Kit PCB Layout Diagrams

MAXQ1061 EV Kit PCB Layout-Assembly Drawing Top

<!-- image -->

MAXQ1061 EV Kit PCB Layout-Silkscreen Top

<!-- image -->

Evaluates: MAXQ1061

MAXQ1061 EV Kit PCB Layout-Component Side (Top)

<!-- image -->

MAXQ1061 EV Kit PCB Layout-GND Plane

<!-- image -->

│

## MAXQ1061 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAXQ1061 EV Kit PCB Layout-PWR Plane

<!-- image -->

MAXQ1061 EV Kit PCB Layout-Solder Side (Bottom)

MAXQ1061 EV Kit PCB Layout-Silkscreen Bottom

<!-- image -->

MAXQ1061 EV Kit PCB Layout-Assembly Drawing Bottom

<!-- image -->

│

## Evaluates: MAXQ1061

## MAXQ1061 Evaluation Kit

## MAXQ1061 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAXQ1061 EV Kit PCB Layout-Solder Mask Top

<!-- image -->

MAXQ1061 EV Kit PCB Layout-Solder Mask Bottom

MAXQ1061 EV Kit PCB Layout-Paste Mask Top

<!-- image -->

MAXQ1061 EV Kit PCB Layout-Paste Mask Bottom

<!-- image -->

│

## MAXQ1061 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                     | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------|-----------------|
|                 0 | 11/18           | Initial release                                 | -               |
|                 1 | 12/18           | Added MAXQ1062 content                          | 1-18            |
|                 2 | 1/20            | Updated EV kit content                          | 1-10            |
|                 3 | 10/20           | Added Quick Start section                       | 2               |
|                 4 | 1/24            | Removed obsolete MAXQ1062 device from document. | 1-12            |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that Pa\ resXOW IroP iWs Xse. 6peFi¿FaWioQs sXbMeFW Wo FhaQJe wiWhoXW QoWiFe. 1o OiFeQse is JraQWed b\ iPpOiFaWioQ or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAXQ1061