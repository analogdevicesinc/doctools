<!-- lastmod 2022-08-05 -->
## MAX32620, MAX32621 Evaluation Kits

## General Description

The MAX32620 and MAX32621 evaluation kits (EV kits) provide  a  convenient  platform  for  evaluating  the  capabilities of the MAX32620 and MAX32621 microcontrollers, respectively.  While  the  MAX32620  EV  kit  includes  a MAX32620 soldered directly to the board, the MAX32621 EV kit features a socketed MAX32621. Each EV kit also -ment  and  debugging  applications.  Except  where  stated otherwise, the following sections apply to both EV kits.

## EV Kit Contents

- EV Kit Board with a MAX32620 Soldered Down (MAX32620 EV Kit Only)
- EV Kit Board with a Socketed MAX32621 (MAX32621 EV Kit Only)
- Olimex ARM-USB-TINY-H JTAG Debugger with JTAG Ribbon Cable (for Connecting from Debugger to EV Kit Header J1) and USB Standard A-to-B cable (for Connecting from PC to Debugger)
- Two Standard-A to Micro-B USB Cables (for Connecting from a PC or Stand-Alone USB Power Supply to EV Kit Connectors CN1 and CN2)
- MAX32620/MAX32621 EV Kit Quick Start
- Hex Keys for the Socket (MAX32621 EV Kit Only)

## Ordering Information

| PART            | TYPE                                   |
|-----------------|----------------------------------------|
| MAX32620-EVKIT# | EV kit with MAX32620 sample            |
| MAX32621-EVKIT# | EV kit with socket and MAX32621 sample |

#Denotes RoHS compliant.

The Bluetooth word mark and logos are registered trademarks owned by Bluetooth SIG, Inc. and any use of such marks by Maxim is under license.

Evaluate: MAX32620, MAX32621

## Benefits and Features

- Easily Load and Debug Code Using the Supplied Olimex ARM-USB-TINY-H JTAG Debugger Connected Through a Standard 20-Pin ARM JTAG Header
- Headers for Accessing the IC's Pins and Analog Front End (AFE) Input Signals
- Micro-USB Type-B Connection to the IC's USB Device Controller
- Micro-USB Type-B Connection to USB-UART Bridge Selectable Between the IC's Internal UART 0 and UART 1
- On-Board Bluetooth® 4.0 BLE Transceiver with Chip Antenna

## EV Kit Contents (MAX32620 EV Kit Shown)

<!-- image -->

<!-- image -->

## MAX32620, MAX32621 Evaluation Kits

## Getting Started

- 1) While observing safe ESD practices, carefully remove the EV kit board out of its packaging. Quickly inspect the board to make sure that no damage occurred during shipment. Jumpers/shunts were preinstalled prior to testing and packaging. By default, the USB-UART bridge is the source of power for the EV kit board. See Table 1 and Figure 3 for the default jumper settings and descriptions.
- 2) The IC was preprogrammed with a demo program. To power up the board and run the demo, simply connect the Micro-USB cable to the Micro-USB jack found at the top left of the EV kit PCB. The jack is labeled CN1 . The other end of the Micro-USB cable can be connected either to a computer or to a USB wall charger in order to get +5V power.

## Evaluate: MAX32620, MAX32621

- 3) Once power is applied, the demo runs. The demo displays text and graphics on the OLED display, flashes LED0-LED3, and outputs data to UART0.
- 4) Do not connect any of the additional USB cables or Olimex JTAG adapter until after the tool chain/drivers are installed.

If  the  demo  ran  as  expected,  then  the  next  step  is  to download and run the installer as described in the Quick Start (separate document). The installer is a small application that allows users to select which components they would like to download and install including tools, drivers, and  documentation.  A  description  of  each  component and the hard drive size required for each can be seen by clicking on each component.

Figure 1. EV Kit Block Diagram

<!-- image -->

│

Evaluate: MAX32620, MAX32621

Figure 2. EV Kit Board (MAX32620 EV Kit Shown)

<!-- image -->

│

## MAX32620, MAX32621 Evaluation Kits

## Detailed Description of Hardware

This section describes each major function or component on  the  EV  kit.  This  EV  kit  is  general-purpose  in  nature and  provides  many  user-selectable  options,  which  are described in the following sections. Each jumper setting is described and its default setting illustrated.

## Board Power

The EV kit's main power-supply input is +5V, made available through Micro-USB type-B connector CN1 or CN2. The board is default jumpered for power to be provided by CN1.

## Current Monitoring

Jumpers  JP15,  JP16,  JP18,  and  JP19  provide  convenient current monitoring points for VDD12 (JP15), VRTC (JP18), VDDB (JP19), and VDDA+VDD18 (JP16). VDDIO (JP27)  and  VDDIOH  (JP30)  current  can  be  monitored using these source selection jumpers.

## Pushbuttons

Pushbuttons (normally open) SW1, SW2, and SW3 can be used to generate a logic 0 signal on their corresponding GPIO port pins. Firmware defines the action taken on switch closure.

Pushbutton SW4 provides a global POR reset function for the IC by asserting the RSTN input.

Pushbutton  SW5  controls  the  PFN1  input  of  the  PMIC. The  function  of  the  PFN1  input  is  configurable,  but  is preset to reset the PMIC when depressed for at least 12 seconds. Refer to the MAX14690 IC data sheet for complete information.

## USB

The IC provides an integrated USB2.0 full-speed interface (12Mbps). This interface is accessed through the MicroUSB type-B connector, CN2.

## USB-UART Bridge

The EV kit board provides a USB-to-UART bridge chip, FTDI  FT230X.  This  bridge  eliminates  the  requirement for a physical RS-232 COM port. Instead, the IC's UART access  is  through  the  Micro-USB  type-B  connector, CN1. Virtual  COM  port  drivers  and  guides  for  installing Windows ®   drivers  are  available  at  www.ftdichip.com. Default parameters are 115,200 baud, 8 bits, no parity, 1 stop bit, no flow control.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Evaluate: MAX32620, MAX32621

The USB-to-UART bridge can be connected to UART 0 or UART 1 of the IC with jumpers JP10 (RX), JP12 (TX), JP13 (CTS), and JP14 (RTS). This interface is the default power source for the EV kit

## LEDs

The  EV  kit  board  has  four  LEDs  with  series  currentlimiting  resistors.  LEDs  D1  (red),  D4  (green),  D5  (red), and D6 (green) are connected to the IC's GPIO pins P3.0, P3.1, P3.2, and P3.3, respectively. LED GPIOs must be configured as open drain due to 3.3V LED source voltages. An LED is illuminated when the appropriate GPIO pin is driven low.

## Bluetooth Low-Energy (BLE) Controller

The EV kit  board  has  a  low-power  Bluetooth  controller, EM9301. Communication with the IC is through SPI 2B. This particular SPI port was selected due to the additional flow control signals that it features. The EM9301 controller is Bluetooth specification V4.0 compliant. Refer to the EM Microelectronic EM9301 data sheet for additional details.

## Clocking

The IC operates from an internal 96MHz relaxation oscillator.  The  internal  oscillator  is  adequate  to  run  the  core digital logic and peripherals. The accuracy of the internal oscillator  is  not  suitable  for  accurate  RTC  timekeeping or  USB  operation.  The  external  32.768kHz  crystal,  Y1, provides the RTC with an accurate time base and is also used to calibrate  the  internal  oscillator  for  the  accuracy required for USB operation.

## JTAG Connector

The ARM standard 20-pin  connector  pinout  is  provided by shrouded header J1. Various debugger modules are available for this interface. The Olimex ARM-USB-TINY-H debugger is supplied with the EV kit.

## Graphic OLED Display Module

A  128  x  32  pixel  graphic  OLED  display  module,  NHD2.23-12832UCB3,  is  provided  on  the  EV  kit  board. Communications with the NHD-2.23-12832UCB3  is through SPI 2A.

## GPIO Headers and Port Configuration

The IC provides support for both 1.8V and 3.3V peripherals through power rails VDDIO and VDDIOH. GPIO voltages can be programmed on a port-by-port basis, refer to  the  IC's  user's  guide  for  more  detail.  Multiple  pullup options  are  supported  when  using  special  function  port modes, with user selectable pullup voltage options to both rail voltages supported through jumper selection.

## MAX32620, MAX32621 Evaluation Kits

## Power Management IC (PMIC)

The MAX14690 manages the EV kit power rails. It also manages the selection of EV kit power from either VBUS from  CN1,  CN2,  or  an  (optional)  external  lithium-ion polymer battery. The MAX14690 can also function as a battery charger. Refer to the MAX14690 IC data sheet for additional information.

## Prototyping Area

An area for adding customer-specific circuitry is provided. This matrix is on a 0.1in spacing and is usable for solder

Evaluate: MAX32620, MAX32621

or  wire-wrap  construction.  Power  and  ground  rails  run through the matrix.

## Jumper Descriptions

Table  1  details  the  functions  of  the  configurable  jumper headers  on  the  EV  kit  board.  The  headers  are  standard  0.1in  spacing,  0.025in  posts.  Settings  in  Table  1 marked with an asterisk ('*') indicate default placements. Figure  3  also  shows  the  default  placements  highlighted in red.

## Table 1. Jumper Functions and Default Settings

| JUMPER   | SIGNAL                | SETTING   | DESCRIPTION                                         |
|----------|-----------------------|-----------|-----------------------------------------------------|
| JP1      | GPIO3_0               | 1-2*      | Connects GPIO3_0 to LED0                            |
| JP1      | GPIO3_0               | Open      | Disconnects LED0                                    |
| JP2      | GPIO3_1               | 1-2*      | Connects GPIO3_1 to LED1                            |
| JP2      | GPIO3_1               | Open      | Disconnects LED1                                    |
| JP3      | GPIO3_2               | 1-2*      | Connects GPIO3_2 to LED2                            |
| JP3      | GPIO3_2               | Open      | Disconnects LED2                                    |
| JP4      | GPIO3_3               | 1-2*      | ConnectsGPIO3_3 to LED3                             |
| JP4      | GPIO3_3               | Open      | Disconnects LED3                                    |
| JP5      | AIN0_TP               | 1-2       | Connects AIN0_TP to BAT                             |
| JP5      | AIN0_TP               | 2-3       | Connects AIN0_TP to PMIC_MON                        |
| JP6      | AIN1_TP               | 1-2       | Connects AIN1_TP to VBUS                            |
| JP6      | AIN1_TP               | 2-3       | Connects AIN1_TP to PMIC_MON                        |
| JP7      | 1V8                   | 1-2*      | Connects FLASH VCC to 1V8 power                     |
| JP7      | 1V8                   | Open      | Disconnects FLASH VCC                               |
| JP8      | 3V3                   | 1-2*      | Connects OLED display to 3V3 power                  |
| JP8      | 3V3                   | Open      | Disconnects OLED display                            |
| JP9      | 3V3                   | 1-2*      | Connects BTLE to 3V3 power                          |
| JP9      | 3V3                   | Open      | Disconnects BTLE                                    |
| JP10     | TXD of USB- SERIAL IC | 1-2*      | Connects TXD of USB - Serial IC to P0_0 (UART0A_RX) |
| JP10     | TXD of USB- SERIAL IC | 2-3       | Connects TXD of USB - Serial IC to P2_0 (UART1A_RX) |
| JP11     | 3V3                   | 1-2       | Connects PMIC L3OUT to 3V3                          |
| JP11     | 3V3                   | 2-3*      | Connects LDO OUT to 3V3                             |
| JP12     | RXD of USB- SERIAL IC | 1-2*      | Connects RXD of USB - Serial IC to P0_1 (UART0A_TX) |
| JP12     | RXD of USB- SERIAL IC | 2-3       | Connects RXD of USB - Serial IC to P2_1 (UART1A_TX) |

│

## MAX32620, MAX32621 Evaluation Kits

Evaluate: MAX32620, MAX32621

Table 1. Jumper Functions and Default Settings (continued)

| JUMPER   | SIGNAL                 | SETTING   | DESCRIPTION                                           |
|----------|------------------------|-----------|-------------------------------------------------------|
| JP13     | /RTS of USB- SERIAL IC | 1-2*      | Connects /RTS of USB - Serial IC to P0_2 (UART0A_CTS) |
| JP13     | /RTS of USB- SERIAL IC | 2-3       | Connects /RTS of USB - Serial IC to P2_2 (UART1A_CTS) |
| JP14     | /CTS of USB- SERIAL IC | 1-2*      | Connects /CTS of USB - Serial IC to P0_3 (UART0A_RTS) |
| JP14     | /CTS of USB- SERIAL IC | 2-3       | Connects /CTS of USB - Serial IC to P2_3 (UART1A_RTS) |
| JP15     | 1V2_DUT                | 1-2*      | Connects VDD12 to the PMIC B1OUT (1V2)                |
| JP15     | 1V2_DUT                | Open      | Disconnects the PMIC B1OUT (1V2)                      |
| JP16     | 1V8_DUT                | 1-2*      | Connects 1V8_DUT to the PMIC B2OUT (1V8)              |
| JP16     | 1V8_DUT                | Open      | Disconnects the PMIC B2OUT (1V8)                      |
| JP17     | L1IN of PMIC           | 1-2       | Connects L1IN of the PMIC to BAT (battery)            |
| JP17     | L1IN of PMIC           | 2-3*      | Connects L1IN of the PMIC to SYS                      |
| JP18     | 1V8_RTC_DUT            | 1-2*      | Connects 1V8_RTC_DUT to the PMIC L1OUT (1V8)          |
| JP18     | 1V8_RTC_DUT            | Open      | Disconnects the PMIC L1OUT (1V8)                      |
| JP19     | 3V2_DUT                | 1-2*      | Connects 3V2_DUT to the PMIC L2OUT (3V2)              |
| JP19     | 3V2_DUT                | Open      | Disconnects the PMIC L2OUT (3V2)                      |
| JP20     | IN of the 3V3 LDO      | 1-2*      | Connects IN of the 3V3 on-board LDO to VBUS           |
| JP20     | IN of the 3V3 LDO      | 2-3       | Connects IN of the 3V3 on-board LDO to SYS            |
| JP21     | GPIO3_4                | 1-2       | Connects GPIO3_4 to 1V8 10K pullup                    |
| JP21     | GPIO3_4                | 2-3       | Connects GPIO3_4 to 3V3 10K pullup                    |
| JP22     | GPIO3_5                | 1-2       | Connects GPIO3_5 to 1V8 10K pullup                    |
| JP22     | GPIO3_5                | 2-3       | Connects GPIO3_5 to 3V3 10K pullup                    |
| JP23     | GPIO5_7                | 1-2       | Connects GPIO5_7 to 1V8 10K pullup                    |
| JP23     | GPIO5_7                | 2-3       | Connects GPIO5_7 to 3V3 10K pullup                    |
| JP24     | GPIO6_0                | 1-2       | Connects GPIO6_0 to 1V8 10K pullup                    |
| JP24     | GPIO6_0                | 2-3       | Connects GPIO6_0 to 3V3 10K pullup                    |
| JP25     | 1V8                    | 1-2*      | Connects 1V8 to PMIC 1V8_BUK (1V8)                    |
| JP25     | 1V8                    | 2-3       | Connects 1V8 to 1V8 on-board LDO                      |
| JP26     | IN of the 1V8 LDO      | 1-2*      | Connects IN of the 1V8 on-board LDO to VBUS           |
| JP26     | IN of the 1V8 LDO      | 2-3       | Connects IN of the 1V8 on-board LDO to SYS            |
| JP27     | VDDIO                  | 1-2*      | Connects VDDIO to 1V8                                 |
| JP27     | VDDIO                  | 2-3       | Connects VDDIO to 3V3                                 |
| JP30     | VDDIOH                 | 1-2*      | Connects VDDIOH to 3V3                                |
| JP30     | VDDIOH                 | 2-3       | Connects VDDIOH to VDDIO                              |
| JP32     | USB_VBUS               | 1-2*      | Connects USB_VBUS to USB-UARTS (CN1)                  |
| JP32     | USB_VBUS               | 2-3       | Connects USB_VBUS to USB (CN2)                        |

*Default setting.

│

## MAX32620, MAX32621 Evaluation Kits

Evaluate: MAX32620, MAX32621

Figure 3. Default Jumper Placement (Applies to Both MAX32620 and MAX32621 EV Kits)

<!-- image -->

│

## MAX32620, MAX32621 Evaluation Kits

## Additional Resources

- MAX32620/MAX32621 EV Kit Quick Start
- MAX32620/MAX32621 EV Kit Data Sheet (this document)
- MAX32620/MAX32621 EV Kit Schematics
- MAX32620/MAX32621 IC Data Sheet
- MAX32620 User's Guide
- Getting Started with Eclipse using the Maxim ARM® Cortex® Toolchain (see note)
- MAX326XX SDK: Firmware Developer's Guide (see note)
- Example projects (see note)

Note: Additional information resides in the Installer. Once this component is installed, the information can be found in the Windows Start menu under Maxim Integrated , or it  can  be  found  by  exploring  the  installation  directory.  It is  recommended to visit www.maximintegrated.com to check  whether  updates  have  been  made  to  any  of  the documents.

ARM and Cortex are registered trademarks of ARM Limited (or its subsidiaries) in the EU and/or elsewhere. All rights reserved.

## Evaluate: MAX32620, MAX32621

## Technical Support

For technical support, go to: http://support.maximintegrated.com/micro .

## MAX32620, MAX32621 Evaluation Kits

## EV Kit Bill of Materials

| QTY PART                                                     | VALUE            | BOMDESCRIPTION                                             | MANUFACTURER PN             | MANUFACTURER                       |
|--------------------------------------------------------------|------------------|------------------------------------------------------------|-----------------------------|------------------------------------|
| 1 ANT1                                                       | 2450AT42B100E    | ANTENNA CHIP 2.4GHZ                                        | 2450AT42B100E               | Johanson Technology Inc            |
| 8 BMP1,BMP2,BMP3,BMP4,BMP5,BMP6,BMP7,BMP8                    | RB Bump          | BUMPER RECESSED #4 SCREW BLACK                             | 720                         | Keystone Electronics               |
| 9 C1,C3,C5,C6,C64,R9,R11,R14,R16                             | DNI              | DNI                                                        |                             |                                    |
| 1 C2                                                         | 100nF            | CAP CER 0.1UF 10V 10% X5R 0402                             | GRM155R61A104KA01D          | Murata                             |
| C7,C8,C9,C10,C11,C46,C47,C48,C52,C53,C54,C56,C62,C63,C144,C1 |                  |                                                            |                             |                                    |
| 17 46,C163                                                   | 1uF              | CAP CER 1UF 6.3V 10% X5R 0402                              | C1005X5R0J105K050BB         | TDK Corpora ti on                  |
| 2 C12,C33                                                    | 4.7nF            | CAP CER 4700PF 25V 10% X7R 0402                            | GRM155R71E472KA01D          | Murata                             |
| 12 C13,C14,C17,C24,C34,C39,C58,C60,C61,C162,C164,C165        | 100nF            | CAP CER 0.1UF 10V 10% X5R 0402                             | GRM155R61A104KA01D          | Murata                             |
| 1 C15                                                        | 4.7nF            | CAP CER 4700PF 25V 10% X7R 0402                            | GRM155R71E472KA01D          | Murata                             |
| 2 C16,C31                                                    | 1uF              | CAP CER 1uF 16V 10% X7R 0603                               | GCM188R71C105KA64D          | Murata                             |
| 2 C22,C23                                                    | 15pF             | CAP CER 15PF 50V 5%NP0 0402                                | GRM1555C1H150JA01D          | Murata                             |
| 1 C25                                                        | 47uF             | CAP CER 47uF 6.3V 20% X5R 1206                             | C3216X5R0J476M              | TDK Corpora ti on                  |
| 2 C30,C32                                                    | 100pF            | CAP CER 100PF 50V 5%NP0 0402                               | C1005C0G1H101J050BA         | TDK Corpora ti on                  |
| 2 C35,C44                                                    | 10nF             | CAP CER 10nF 25V 10% X7R 0603                              | GRM188R71E103KA01D          | Murata                             |
| 2 C36,C37                                                    | 47pF             | CAP CER 47PF 50V 1%NP0 0402                                | C1005C0G1H470F050BA         | TDK Corpora ti on                  |
| 1 C38                                                        | 4.7uF            | CAP CER 4.7uF 10V 10% X5R 0603                             | C0603C475K8PACTU            | Kemet                              |
| 3 C40,C42,C45                                                | 100nF            | CAP CER 0.1UF 25V 10% X8R 0603                             | C1608X8R1E104K080AA         | TDK Corpora ti on                  |
| 1 C41                                                        | 100nF            | CAP CER 0.1uF 16V 10% X7R 0603                             | C0603C104K4RACTU            | Kemet                              |
| 1 C43                                                        | 1uF              | CAP CER 1UF 35V 10% X5R 0603                               | GMK107BJ105KA-T             | Taiyo Yuden                        |
| 3 C49,C50,C51                                                | 22uF             | CAP CER 22UF 4V 20% X5R 0603                               | AMK107BJ226MA-T             | Taiyo Yuden                        |
| 2 C55,C161                                                   | 22uF             | CAP CER 22uF 6.3V 20% X5R 1206                             | C3216X5R0J226M/0.85         | TDK Corpora ti on                  |
| 2 C57,C160                                                   | 10uF             | CAP CER 10UF 6.3V 20% X5R 0603                             | CL10A106MQ8NNNC             | Samsung Electro-Mechanics America, |
| 1 C159                                                       | 30pF             | CAP CER 30pF 50V 5%NP0 0603                                | C0603C300J5GACTU            | Kemet                              |
| 2 CN1,CN2                                                    | MICRO USB R/A    | CONN RCPT MICRO USB R/ASMD                                 | 105017-0001                 | Molex                              |
| 2 D1,D5                                                      | RED              | LED 660NM RED WTR CLR 1206 SMD                             | SML-LX1206SRC-TR            | Lumex Opto                         |
| 2 D2,D3                                                      | DFLS230L-7       | DIODE SCHOTTKY 30V 2A POWERDI123                           | DFLS230L-7                  | Diodes Inc                         |
| 4 D4,D6,D9,D10                                               | GRN              | LED 565NM WTR CLR GREEN 1206 SMD                           | SML-LX1206GC-TR             | Lumex Opto                         |
| 1 D7                                                         | BLUE             | LED 469NM BLUE DIFF 1206 SMD                               | HSMR-C150                   | Avago Technologies US Inc.         |
| 1 D8                                                         | RED DNI          | LED 660NM RED WTR CLR 1206 SMD DNI MTG125DRL 300PAD        | SML-LX1206SRC-TR            | Lumex Opto                         |
| 1 H1 1 H2                                                    | DNI              | DNI MTG125DRL 300PAD                                       |                             |                                    |
| 1 H3                                                         | DNI              | DNI MTG125DRL 300PAD                                       |                             |                                    |
| 1 H4                                                         | DNI              | DNI MTG125DRL 300PAD                                       |                             |                                    |
| 1 H5                                                         | DNI              | DNI MTG125DRL 300PAD                                       |                             |                                    |
| 1 H6                                                         | DNI              | DNI MTG125DRL 300PAD                                       |                             |                                    |
|                                                              | DNI              | DNI MTG125DRL 300PAD                                       |                             |                                    |
| 1 H7 1 H8                                                    | DNI              | DNI MTG125DRL 300PAD                                       |                             |                                    |
| 1 HDR1                                                       | 20P 1x20         | CONN HEADER .100 SINGL STR 20POS                           | PEC20SAAN                   | Sullins                            |
| 1 J1                                                         | 20P 10x2         | CONN HEADER LOPRO STR 20POS GOLD                           | 5103308-5                   | TE Connec ti vity                  |
| 1 J2                                                         | 2POS2MM          | CONN HEADERPHTOP2POS2MM                                    | B2B-PH-K-S(LF)(SN)          | JST Sales America Inc              |
| 1 J3                                                         | 10P CORTEX DEBUG | CONN HEADER 10POS DUAL .05" SMD                            | FTSH-105-01-F-DV-K          | Samtec                             |
| 3 JH1,JH2,JH3                                                | 18P 2x9          | CONN HEADER .100 DUAL STR 18POS                            | PEC09DAAN                   | Sullins                            |
| 1 JH5                                                        | 8P 2x4           | CONN HEADER .100 DUAL STR 8POS                             | PEC04DAAN                   | Sullins                            |
| 1 JH6                                                        | 6P 1x6           | CONN HEADER .100 SINGL STR 6POS                            | PEC06SAAN                   | Sullins                            |
| 1 JH7                                                        | 4P 1x4           | CONN HEADER .100 SINGL STR 4POS                            | PEC04SAAN                   | Sullins                            |
| 1 JH8                                                        | 2P 1x2           | CONN HEADER .100 SINGL STR 2POS                            | PEC02SAAN                   | Sullins                            |
| 11 JP1,JP2,JP3,JP4,JP7,JP8,JP9,JP15,JP16,JP18,JP19           |                  |                                                            |                             | Sullins                            |
|                                                              | JUMPER           | CONN HEADER .100 SINGL STR 2POS (2x1)                      | PEC02SAAN                   |                                    |
| JP5,JP6,JP10,JP11,JP12,JP13,JP14,JP17,JP20,JP21,JP22,JP23,   |                  |                                                            |                             |                                    |
| 18 JP24,JP25,JP26,JP27,JP30,JP32                             | 3P 3x1           | CONN HEADER .100 SINGL STR 3POS                            | PEC03SAAN                   | Sullins                            |
| 1 JP31                                                       | 3P 3x1           | CONN HEADER .100 SINGL STR 3POS                            | PEC03SAAN                   | Sullins                            |
| 1 L1                                                         | 3.3nH            | INDUCTOR MULTILAYER 3.3NH 0402                             | MLK1005S3N3ST000            | TDK Corpora ti on                  |
| 1 L2                                                         | 1.5nH            | INDUCTOR MULTILAYER 1.5NH 0402                             | MLK1005S1N5ST000            | TDK Corpora ti on                  |
| 2 L3,L4                                                      | HZ1206C202R-10   | FERRITE CHIP SIGNAL 2000OHMSMD                             | HZ1206C202R-10              | Laird-Signal Integrity Products    |
| 2 L5,L6                                                      | 2.2uH            | INDUCTOR POWER 2.2UH 1.05ASMD                              | VLS201610ET-2R2M            | TDK Corpora ti on                  |
| 1 L7                                                         | BLM21PG221SN1D   | FERRITE CHIP 220 OHM0805                                   | BLM21PG221SN1D              | Murata Electronics North America   |
| 8 MS1,MS2,MS3,MS4,MS5,MS6,MS7,MS8                            | Screw Steel      | MACHINE SCREW PAN PHILLIPS 4-40                            | PMSSS 440 0025 PH           | B&F Fastener Supply                |
| 8 MST1,MST2,MST3,MST4,MST5,MST6,MST7,MST8                    | STANDOFF         | HEX STANDOFF 4-40 ALUMINUM 5/8"                            | 1808                        | Keystone Electronics               |
| 1 PCB1                                                       | PCB              |                                                            |                             |                                    |
| 1 PROTO1                                                     | DNI              | Proto Type Area 11x13 (0.1" LS)                            |                             |                                    |
| 1 Q1                                                         | SI8439DB-T1-E1   | MOSFET P-CH 8V MICROFOOT                                   | SI8439DB-T1-E1              | Vishay Siliconix                   |
| 1 Q2                                                         | MMBT2222ALT1G    | TRANS GP SS NPN 40V SOT23                                  | MMBT2222ALT1G               | ON Semi                            |
| 3 R1,R2,R3                                                   | 100              | RES 100 OHM1/10W 1%0603 SMD                                | ERJ-3EKF1000V               | Panasonic                          |
| 3 R4,R6,R37                                                  | 470              | RES 470 OHM1/10W 1%0603 SMD                                | ERJ-3EKF4700V               | Panasonic                          |
| 4 R5,R7,R38,R55 4 R8,R10,R13,R15                             | 332 0            | RES 332 OHM1/10W 1%0603 SMD RES 0.0 OHM1/10W JUMP 0603 SMD | ERJ-3EKF3320V ERJ-3GEY0R00V | Panasonic Panasonic                |
| 4 R17,R19,R21,R50                                            | 215K             | RES 215KOHM1/10W 1%0603 SMD                                | ERJ-3EKF2153V               | Panasonic                          |

## MAX32620, MAX32621 Evaluation Kits

## EV Kit Bill of Materials (continued)

| QTY PART                                   | VALUE              | BOMDESCRIPTION                                                         | MANUFACTURER PN         | MANUFACTURER                     |
|--------------------------------------------|--------------------|------------------------------------------------------------------------|-------------------------|----------------------------------|
| 1 R20                                      | 27K                | RES 27KOHM1/10W 1%0402 SMD                                             | ERJ-2RKF2702X           | Panasonic                        |
| 4 R23,R26,R27,R28                          | 10K                | RES 10KOHM1/10W 1%0603 SMD                                             | ERJ-3EKF1002V           | Panasonic                        |
| 2 R24,R25                                  | 27                 | RES 27 OHM1/10W 1%0603 SMD                                             | ERJ-3EKF27R0V           | Panasonic                        |
| 1 R29                                      | 511K               | RES 511KOHM1/10W 1%0603 SMD                                            | ERJ-3EKF5113V           | Panasonic                        |
| 1 R30                                      | 100K               | RES 100KOHM1/10W 1%0603 SMD                                            | ERJ-3EKF1003V           | Panasonic                        |
| 2 R31,R56                                  | 2.7K               | RES 2.7KOHM1/10W 1%0603 SMD                                            | ERJ-3EKF2701V           | Panasonic                        |
| 10 R32,R34,R35,R39,R41,R47,R48,R49,R52,R57 | 10K                | RES 10KOHM1/10W 1%0402 SMD                                             | ERJ-2RKF1002X           | Panasonic                        |
| 1 R33                                      | 100K               | THERMISTOR 100K OHMNTC0402 SMD                                         | NCP15WF104F03RC         | Murata Electronics North America |
| 1 R36                                      | 4.7K               | RES 4.7KOHM1/10W 1%0402 SMD                                            | ERJ-2RKF4701X           | Panasonic                        |
| 4 R42,R43,R44,R45                          | 0                  | RES 0.0 OHM1/20W JUMP 0201 SMD                                         | ERJ-1GN0R00C            | Panasonic                        |
| 1 R51                                      | 62                 | RES 62 OHM1/10W 1%0402 SMD                                             | ERJ-2RKF62R0X           | Panasonic                        |
| 8 R53,R58,R59,R60,R61,R62,R68,R69          | 0                  | RES 0.0 OHM1/10W JUMP 0402 SMD                                         | ERJ-2GE0R00X            | Panasonic                        |
| 7 R54,R63,R64,R65,R66,R67,R70              | 0                  | RES 0.0 OHM1/10W JUMP 0402 SMD                                         | ERJ-2GE0R00X            | Panasonic                        |
| 1 R71                                      | 1M                 | RES SMD 1MOHM5%1/8W0805                                                | ERJ-6GEYJ105V           | Panasonic                        |
| 3 SW1,SW2,SW3                              | B3S-1000           | SWITCH TACTILE SPST-NO 0.05A 24V                                       | B3S-1000                | Omron Electronics                |
| 2 SW4,SW5                                  | B3S-1002 BYOMZ     | SWITCH TACTILE SPST-NO 0.05A 24V                                       | B3S-1002 BYOMZ          | Omron Electronics                |
| 4 SW6,SW7,SW8,SW9                          | DIP SW6POS SMT     | SWITCH DIP 6POS HALF PITCHSMD                                          | TDA06H0SB1R             | C&K Components                   |
| 1 T1                                       | 2450BL15B200       | BALUN 2.4GHZ WIFI/BLUETOOTH                                            | 2450BL15B200E           | Johanson Technology Inc          |
| 4 TP1,TP2,TP3,TP13                         | BLK                | TEST POINT PC MULTI PURPOSE BLK                                        | 5011                    | Keystone Electronics             |
| 3 TP4,TP5,TP6                              | 1P                 | CONN HEADER .100 SINGL STR 1POS                                        | PEC01SAAN               | Sullins                          |
| 1 TP7                                      | RED                | TEST POINT PC MULTI PURPOSE RED                                        | 5010                    | Keystone Electronics             |
| 1 TP8                                      | BLK                | TEST POINT PC MULTI PURPOSE BLK                                        | 5011                    | Keystone Electronics             |
| 2 TP10,TP12                                | RED                | TEST POINT PC MULTI PURPOSE RED                                        | 5010                    | Keystone Electronics             |
| 1 TP11                                     | PRPL               | TEST POINT PC MULTI PURPOSE PRPL                                       | 5129                    | Keystone Electronics             |
| 1 U2                                       | MX25U12835FZ2I-10G | IC FLASH 128MBIT 104MHZ8WSON                                           | MX25U12835FZ2I-10G      | Macronix Interna ti onal         |
| 1 U4                                       | NHD-2.23-12832UCB3 | LCD OLED GRAPHIC 128 X 32 BLUE                                         | NHD-2.23-12832UCB3      | Newhaven Display Intl            |
| 1 U6                                       | EM9301V02LF24D+    | BLE Controller without DCDC                                            | EM9301V02LF24D+         | EM Microelectronic               |
| 1 U7                                       | FT230XS-R          | IC USB SERIAL BASIC UART 16SSOP                                        | FT230XS-R               | FTDI                             |
| 2 U8,U9                                    | MAX3207EAUT+T      | ESD PROT DIFF SOT23-6                                                  | MAX3207EAUT+T           | Maxim Integrated                 |
| 1 U10                                      | MAX14690NEWX+      | MAX14690 36P WLP                                                       | MAX14690                | Maxim Integrated                 |
| 1 U11                                      | MAX1806EUA33+      | IC REG LDO 3.3V/ADJ 0.5A 8UMAX                                         | MAX1806EUA33+           | Maxim Integrated                 |
| 1 U15                                      | 74LVC2T45DC        | TXRX TRANSLATING 3ST 8VSSOP                                            | 74LVC2T45DC,125         | NXP Semiconductors               |
| 1 U46                                      | MAX1806EUA18+      | Low Dropout Linear Regulator                                           | MAX1806EUA18+           | Maxim Integrated                 |
| U47 1                                      | MAX32620           | Exclusive to the MAX32620 EV kit Bill of Materials                     | MAX32620IWG+            | Maxim Integrated                 |
| U47 1                                      | MAX32621           | Exclusive to the MAX32621 EV kit Bill of Materials                     | MAX32621IWG+            | Maxim Integrated                 |
| 1 U49                                      | 74LVC8T245PW,118   | TXRX 8BIT TRANSLATING 24TSSOP                                          | 74LVC8T245PW,118        | NXP Semiconductors               |
| 1 XU1                                      | C13951             | 81P WLP SKT C13951, exclusive to the MAX32621 EV kit Bill of Materials | C13951                  | Ironwood Electronics, INC.       |
| 1 Y1                                       | 32.768kHz          | CRYSTAL 32.768KHZ 6.0PF SMD                                            | ABS07-32.768KHZ-6-T     | Abracon Corp                     |
| 1 Y2                                       | 26MHz              | CRYSTAL 26MHZ 10PF SMD                                                 | ABM8-26.000MHZ-10-1-U-T | Abracon Corpora ti on            |

Evaluate: MAX32620, MAX32621

## MAX32620, MAX32621

## Evaluation Kits

## EV Kit Schematics

<!-- image -->

│

Evaluate: MAX32620, MAX32621

## MAX32620, MAX32621

## Evaluation Kits

## EV Kit Schematics (continued)

<!-- image -->

│

Evaluate: MAX32620, MAX32621

## MAX32620, MAX32621 Evaluation Kits

## EV Kit Schematics (continued)

<!-- image -->

│

Evaluate: MAX32620, MAX32621

## MAX32620, MAX32621 Evaluation Kits

## EV Kit Schematics (continued)

<!-- image -->

│

Evaluate: MAX32620, MAX32621

## MAX32620, MAX32621 Evaluation Kits

## EV Kit Schematics (continued)

<!-- image -->

│

Evaluate: MAX32620, MAX32621

## MAX32620, MAX32621 Evaluation Kits

## EV Kit Schematics (continued)

<!-- image -->

│

Evaluate: MAX32620, MAX32621

## MAX32620, MAX32621 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                     | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 4/15            | Initial release                                                                                                                                                                                                                                                                                                                                                                                                                                                 | -               |
|                 1 | 11/16           | Updated EV Kit Contents , Benefits and Features , Figure 1, Getting Started , Figure 2, Figure 3, Detailed Description , Board Power , Pushbuttons , USB , USB-UART Bridge , LEDs , Bluetooth Low-Energy (BLE) Controller , Clocking , Power Management IC (PMIC) , Table 1, Figure 4, Additional Resources , Ordering Information , MAX32620 EV Kit Bill of Materials , and MAX32620 EV Kit Schematics , and added GPIO Headers and Port Configuration section | 1-16            |
|                 2 | 2/17            | Added MAX32621 to data sheet, updated General Description , EV Kit Contents , Benefits and Features , EV Kit photo , Figure 1, Figure 2, Getting Started , Detailed USB , USB-UART Bridge , GPIO Headers and Port Configuration , Table 1, Figure 3, Additional Resources , Ordering Information , EV Kit Bill of Materials , and EV Kit Schematics                                                                                                             | 1-17            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses aUe LPpOLed. 0a[LP ,nteJUated UeseUYes the ULJht to FhanJe the FLUFuLtU\ and speFL¿FatLons ZLthout notLFe at an\ tLPe.

│

Evaluate: MAX32620, MAX32621