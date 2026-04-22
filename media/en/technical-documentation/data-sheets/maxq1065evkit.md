<!-- lastmod 2023-01-09 -->
©

## Request Security User Guide and Full Developer Software

<!-- image -->

Evaluates: MAXQ1065

## General Description

The  MAXQ1065  SPI  evaluation  kit  (EV  kit)  provides the  hardware  and  software  necessary  to  exercise  the features  of  the  MAXQ1065GTC+  from  a  personal  computer,  a  Raspberry  Pi ® ,  an  Arduino ®   compatible  board or  any  other  motherboard.  The  EV  kit  consists  of  five MAXQ1065GTC+ devices in a 12-pin TDFN package and a MAXQ1065 12-pin TDFN evaluation socket board.

The device makes it fast and easy to implement full security  for  embedded, connected products without requiring firmware  development.  The  MAXQ1065  coprocessors can be designed-in from the start or added to an existing  design  to  guarantee  confidentiality,  authenticity,  and integrity of the device.

## MAXQ1065 SPI EV Kit Contents

|   QTY | DESCRIPTION                               |
|-------|-------------------------------------------|
|     5 | MAXQ1065GTC+ Secure Coprocessor (12 TDFN) |
|     1 | MAXQ1065 Socket Board (12 TDFN)           |
|     1 | USB Standard-A to Micro-B Cable           |
|     1 | Raspberry Pi-Compatible Elevated Header   |

Ordering Information appears at end of data sheet.

Arduino is a registered trademark of Arduino, LLC. Raspberry Pi is a registered trademark of the Raspberry Pi Foundation.

Click here to ask an associate for production status of specific part numbers.

## MAXQ1065 SPI Evaluation Kit

## Features

- Demonstrates the Features of the MAXQ1065 Socket Board
- Compatible with Raspberry Pi 4 Model B, Raspberry Pi 3 Model B/B+, and Raspberry Pi 2 Model B
- Compatible with Arduino UNO Motherboards
- Provides a USB Connector for USB 2.0-to-SPI Communication
- Convenient Connectors for Custom Wiring
- 1.8V and 3.3V Operating Voltage
- Software Development Kit (SDK) Provided When Requesting Full Developer Software at Top of This Page

## MAXQ1065 SPI EV Kit Socket Board

<!-- image -->

owners.

## MAXQ1065 SPI Evaluation Kit

## Quick Start

## Required Equipment

- MAXQ1065 socket board (included)
- MAXQ1065 samples (included)
- USB Standard-A to Micro-B cable (included, needed only when evaluating from a personal computer)

## Hardware Setup

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

Figure 1. Proper Configuration of the MAXQ1065 Socket Board

<!-- image -->

## Evaluates: MAXQ1065

- 1) Open the socket and insert a MAXQ1065 IC into the cavity.

Note: The plus (+) on the package must be aligned with the white arrow on the PCB, as shown in Figure 1.

- 2) Install a jumper on VDD\_EN (JP1), as shown in Figure 1.
- 3) Connect to one of the supported platforms, as seen in the Detailed Hardware Description section.

│

## MAXQ1065 SPI Evaluation Kit

## Detailed Hardware Description

## EV Kit Supported Platforms

The MAXQ1065 SPI EV kit is designed to be compatible with  a  variety  of  platforms:  PC,  Raspberry  Pi,  Arduino Uno, and custom motherboards. All supported platforms must provide their own 5V power supply to the MAXQ1065 socket board to ensure proper operation.

## PC

The MAXQ1065 socket board is compatible with multiple PC platforms, such as Linux ®  and Windows ® . It includes an  onboard  USB  connector  and  uses  an  FTDI  bridge chip,  the  FT4222H,  to  enable  a  USB-to-SPI  interface with the MAXQ1065 SPI EV kit. A 5V power supply must be provided from the PC through the USB connector to ensure proper operation of the socket board. The following steps can be used to properly set up the MAXQ1065 socket board with a PC platform:

- 1) Adjust the VDD SEL switch (SW1) to the 3V3 position.
- 2) Connect the MAXQ1065 socket board to the PC using the USB cable.

Figure 2. MAXQ1065 Socket Board with an Elevated Header Installed

<!-- image -->

Linux is a registered trademark of Linus Torvalds. Windows is a registered trademark of Microsoft Corporation.

## Raspberry Pi

The  MAXQ1065  socket  board  is  also  compatible  with Raspberry  Pi  3  Model  B/B+  and  Raspberry  Pi  2  Model B  through  the  socket  board's  JH3  connector.  In  order to  provide clearance between the socket board and the Raspberry  Pi,  the  included  Raspberry  Pi-compatible elevated  header  must  be  installed  before  attempting  to connect the two boards together. The following steps can be used to properly set up the MAXQ1065 socket board with a Raspberry Pi platform:

- 1) Ensure that the Raspberry Pi board is powered off.
- 2) Connect the elevated header onto the bottom side of the JH3 connector, as shown in Figure 2.
- 3) Adjust the VDD SEL switch (SW1) to the 3V3 position.
- 4) Connect the MAXQ1065 socket board on top of the Raspberry Pi, as shown in Figure 3.
- 5) Power on the Raspberry Pi board through its own USB connector, as shown in Figure 4.

Figure 3. MAXQ1065 Socket Board Attached to a Raspberry Pi through an Elevated Header

<!-- image -->

│

## Evaluates: MAXQ1065

## MAXQ1065 SPI Evaluation Kit

Figure 4. Raspberry Pi Powered on through its Own USB Connector

<!-- image -->

## Arduino Uno-Compatible Boards

The MAXQ1065 socket board also provides four Arduinocompatible  connectors  (JH1,  JH2,  JH4,  and  JH5)  that can be used to install Arduino motherboards, such as the Analog  Devices  MAX3265MBED  development  platform, from the bottom side of the board. The following steps can be used to properly set up the MAXQ1065 socket board with an Arduino-compatible platform:

## Table 1. Jumper Settings

| NAME         | COMPONENT   | SETTING   | DESCRIPTION                                                    |
|--------------|-------------|-----------|----------------------------------------------------------------|
| VDD_EN       | JP1         | Open      | Disconnects the MAXQ1065 from VDD power                        |
| VDD_EN       | JP1         | Closed    | Connects the MAXQ1065 to VDD power                             |
| TAMPER SW IN | JH6         | Open      | No MAXQ1065 tamper event; turns off the TAMPER LED (D4)        |
| TAMPER SW IN | JH6         | Closed    | Triggers a MAXQ1065 tamper event; turns on the TAMPER LED (D4) |

## Table 2. Switch Settings

| NAME    | COMPONENT   | SETTING               | DESCRIPTION                                    |
|---------|-------------|-----------------------|------------------------------------------------|
| VDD SEL | SW1         | 1V8*                  | Sets VDD power to 1.8V and sets LED (D5) red   |
| VDD SEL | SW1         | 3V3                   | Sets VDD power to 3.3V and sets LED (D5) green |
| PDWN    | SW2         | Not pressed (Default) | Disable the MAXQ1065 power-down mode           |
| PDWN    | SW2         | Pressed               | Make the MAXQ1065 enter power-down mode        |

## Evaluates: MAXQ1065

- 1) Ensure that the Arduino mother board is powered off.
- 2) Connect the MAXQ1065 socket board on top of the Arduino motherboard.
- 3) Adjust the VDD SEL switch (SW1) according to the Arduino motherboard's voltage requirements.
- 4) Power on the Arduino motherboard.
- 5) Do not use the USB cable.

## Custom Motherboards

In  the  absence  of  an  Arduino  Uno  board,  the  Arduinocompatible  connectors  (JH1,  JH2,  JH4,  and  JH5)  can also be used for wiring up a custom motherboard to the MAXQ1065 socket board. Each connector has its pinout on  the  silkscreen  for  reference.  The  socket  board  supports  custom  motherboards  operating  in  a  1.8V  range through  the  JH1  connector's  1V8  pin  (pin  1).  The  VDD SEL  switch  (SW1)  must  be  configured  to  1.8V  when using a 1.8V motherboard to ensure proper operation of the socket board. Regardless of its operating voltage, a 5V power supply must be provided from the host motherboard  through  the  JH1  connector's  5V  pin  (pin  5)  to ensure proper operation of the socket board.

## Hardware Settings

See Table 1, Table 2, and Table 3 for specific details on each of  the MAXQ1065 socket board's hardware configuration settings.

│

## Table 3. LED Information

| NAME   | COMPONENT   | STATE   | DESCRIPTION                                         |
|--------|-------------|---------|-----------------------------------------------------|
| VDD    | D5          | Red     | Indicates VDD power is at 1.8V*                     |
| VDD    | D5          | Green   | Indicates VDD power is at 3.3V                      |
| TAMPER | D4          | Off     | No tamper condition enabled                         |
| TAMPER | D4          | On      | Tamper condition enabled                            |
| AUX1   | D6          | Off     | LED driven high by one of the supported platforms** |
| AUX1   | D6          | On      | LED driven low by one of the supported platforms**  |

* Provided a 1.8V power supply is present through connector JH1 (pin 1).

** Not including the USB host.

## Software Development Kit (SDK)

The  software  development  kit  (SDK)  provides  several tools  for  evaluating  the  MAXQ1065  socket  board  using one of the supported platforms. The SDK is available from the request link for the full developer software at the top of the front page of this data sheet. Open the README.html file situated at the root folder for more details on the SDK.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAXQ1065EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAXQ1065 SPI Evaluation Kit

## MAXQ1065 SPI EV Kit Bill of Materials

| DESIGNATOR           |   QTY | DESCRIPTION                            | MANUFACTURER                     | PART NUMBER        |
|----------------------|-------|----------------------------------------|----------------------------------|--------------------|
| C1, C2, C5, C18      |     4 | CAP CER 4.7uF 10V 10% X5R 0603         | Kemet                            | C0603C475K8PACTU   |
| C3, C4, C6, C17, C19 |     5 | CAP CER 0.1UF 16V 10% X7R 0402         | Murata Electronics               | GRM155R71C104KA88D |
| C7                   |     1 | CAP CER 100PF 50V +/-1% NP0 0402       | AVX Corporation                  | 04025A101FAT2A     |
| C8, C12              |     2 | CAP CER 27PF 50V 5% NP0 0402           | Murata Electronics               | GRM1555C1H270JA01D |
| C9, C10              |     2 | CAP CER 1UF 35V 10% X5R 0603           | Taiyo Yuden                      | GMK107BJ105KA-T    |
| C11                  |     1 | CAP CER 0.1UF 50V 10% X7R 0603         | Kemet                            | C0603C104K5RACTU   |
| C13                  |     1 | CAP CER 0.47UF 10V 10% X5R 0402        | Murata Electronics North America | GRM155R61A474KE15J |
| C14, C16             |     2 | CAP CER 1uF 16V 10% X7R 0603           | Murata                           | GCM188R71C105KA64D |
| C15                  |     1 | CAP CER 10UF 10V 10% X7R 0805          | Samsung Electro-Mechanics        | CL21B106KPQNNNE    |
| CN1                  |     1 | CONN RCPT 5POS MICRO USB B R/A         | Molex                            | 47346-0001         |
| D1, D2, D3           |     3 | DIODE SCHOTTKY 20V 1A STMITE           | STMicroelectronics               | STPS120M           |
| D4                   |     1 | LED 660NM RED WTR CLR 1206 SMD         | Lumex Opto                       | SML-LX1206SRC-TR   |
| D5                   |     1 | LED GREEN/RED CLEAR 1210               | Lite-On Inc                      | LTST-C155GEKT      |
| D6                   |     1 | LED 565NM WTR CLR GREEN 1206 SMD       | Lumex Opto                       | SML-LX1206GC-TR    |
| JH1, JH5             |     2 | CONN RCPT 8POS GOLD .100"              | Samtec                           | ESQ-108-39-G-S     |
| JH2                  |     1 | CONN RCPT 10POS GOLD .100"             | Samtec                           | ESQ-110-39-G-S     |
| JH3                  |     1 | CONN RCPT 40POS .100" SMD GLD          | Samtec                           | HLE-120-02-G-DV-BE |
| JH4                  |     1 | CONN RCPT 6POS GOLD .100"              | Samtec                           | ESQ-106-39-G-S     |
| JH6, JP1             |     2 | CONN HEADER .100 SINGLSTR 2POS (2x1)   | Sullins                          | PEC02SAAN          |
| L1                   |     1 | FERRITE BEAD 120 OHM 0805 1LN          | Murata Electronics North America | BLM21AG121SN1D     |
| PCB1                 |     1 |                                        |                                  |                    |
| R1, R4, R6           |     3 | RES 10K OHM 1/10W 1% 0603 SMD          | Panasonic                        | ERJ-3EKF1002V      |
| R2                   |     1 | RES SMD 12.1K OHM 1% 1/10W 0402        | Panasonic Electronic Components  | ERJ-2RKF1212X      |
| R3                   |     1 | RES SMD 1M OHM 1% 1/10W 0402           | Panasonic                        | ERJ-2RKF1004X      |
| R5                   |     1 | RES 47K OHM 1/10W 1% 0603 SMD          | Panasonic                        | ERJ-3EKF4702V      |
| R7                   |     1 | RES 49.9K OHM 1/10W 1% 0603 SMD        | Panasonic                        | ERJ-3EKF4992V      |
| R9                   |     1 | RES 120 OHM 1/10W 1% 0603 SMD          | Panasonic                        | ERJ-3EKF1200V      |
| R10, R14             |     2 | RES 150 OHM 1/10W 1% 0603 SMD          | Panasonic                        | ERJ-3EKF1500V      |
| R13                  |     1 | RES 4.7K OHM 1/10W 1% 0402 SMD         | Panasonic                        | ERJ-2RKF4701X      |
| R15                  |     1 | RES 332 OHM 1/10W 1% 0603 SMD          | Panasonic                        | ERJ-3EKF3320V      |
| SW1                  |     1 | SWITCH SLIDE DPDT 300MA 6V RIGHT ANGLE | C&K                              | JS202011JAQN       |
| SW2                  |     1 | SWITCHTACTILESPST-NO0.05A24V           | Omron Electronics                | B3S-1000P          |
| TP1, TP2, TP3        |     3 | CONN HEADER .100 SINGL STR 1POS        | Sullins                          | PEC01SAAN          |

│

Evaluates: MAXQ1065

## MAXQ1065 SPI EV Kit Bill of Materials (continued)

| DESIGNATOR   |   QTY | DESCRIPTION                              | MANUFACTURER     | PART NUMBER          |
|--------------|-------|------------------------------------------|------------------|----------------------|
| U1           |     1 | MAXQ1065SPIBQ+ 12P TDFN                  | Analog Devices   | MAXQ1065SPIBQ+       |
| U2           |     1 | ESD PROTECT 2CH 6-UDFN                   | Analog Devices   | MAX13202EALT+        |
| U3           |     1 | REG LDO 3.3V/ADJ 16TSSOP-EP              | Analog Devices   | MAX8869EUE33+        |
| U4           |     1 | IC BRIDGE USB TO I2C/SPI 32VQFN          | FTDI             | FT4222HQ-D-R         |
| U5           |     1 | IC BUFFER NON-INVERT 5.5V SC88           | ON Semiconductor | NL27WZ07DFT2G        |
| XU1          |     1 | MAXQ1065SPIBQ+ 12P TDFN SKT 12QN50S33030 | Plastronics      | 12QN50S33030         |
| Y1           |     1 | CRYSTAL 12MHZ 18PF SMD                   | Abracon Corp     | ABM3-12.000MHZ-D2Y-T |

│

## MAXQ1065 SPI EV Kit Schematic

<!-- image -->

│

## MAXQ1065 SPI Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                    | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 1/21            | Initial release                                                                                                                                                | -               |
|                 1 | 3/21            | Updated Features , Socket Board photo, Figure 1 , Detailed Hardware Description and Software Development Kit (SDK) sections, Bill of Materials , and Schematic | 1-3, 5, 6-8     |
|                 2 | 6/21            | Updated board photo, replaced Bill of Materials and Schematic                                                                                                  | 1, 6-8          |
|                 3 | 8/22            | Updated title, General Description , and Features                                                                                                              | 1-9             |
|                 4 | 9/22            | Added Security UG and SDK request button and references                                                                                                        | 1, 5            |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAXQ1065