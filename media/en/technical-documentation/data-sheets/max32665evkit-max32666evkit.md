<!-- lastmod 2023-04-11 -->
<!-- image -->

Evaluates: MAX32665, MAX32666

## General Description

The  MAX32666  EV  kit  provides  a  platform  for  evaluating  the  capabilities  of  the  MAX32665  and  MAX32666 high-efficiency Arm ®   microcontrollers  and  audio  DSP  for wearable and hearable device applications.

## EV Kit Contents

- MAX32666 EV kit containing a MAX32666 with a preprogrammed demo
- Bluetooth ®  hinged whip antenna
- MAX32625PICO debugger with cables
- Two standard A to Micro B USB cables
- Extra shunts

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX32666EVKIT# | EV Kit |

# Denotes RoHS compliant.

Arm is a registered trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

The Bluetooth word mark and logos are registered trademarks owned by Bluetooth SIG, Inc. and any use of such marks by Maxim is under license.

©

Click here to ask an associate for production status of specific part numbers.

## MAX32666 Evaluation Kit

## Benefits and Features

- Bluetooth SMA connector with a 2.4GHz Hinged Whip Antenna
- 1.28in 128 x 128 Monochrome TFT Display
- 64MB XIP Flash
- 1MB XIP RAM
- Stereo Audio Codec with Line-In and Line-Out 3.5mm Jacks
- Digital Audio Microphone
- USB 2.0 Micro B Interface
- USB 2.0 Micro B to Serial UARTs
- Selection with Jumpers Between UART1 and UART2
- Micro SD Card Interface
- Select GPIOs Accessed Through a 0.1in Header
- Access to the 8 Analog Inputs Through a 0.1in Header
- Arm ®  or SWD JTAG 20-Pin Header
- 1-Wire RJ11 Port
- Can Be Solely Sourced by a Coin Cell Battery
- Board Power Provided by Either USB Port
- Individual Power Measurement on All IC Rails Through Jumpers
- On-Board 1.8V and 3.3V Regulators
- Two General-Purpose LEDs and Two GeneralPurpose Pushbutton Switches

319-100276; Rev 5; 7/22

## MAX32666 EV Kit Board

<!-- image -->

│

Evaluates: MAX32665, MAX32666

## Quick Start

## Procedure

Follow the steps below to verify board operation:

- 1) While observing safe ESD practices, carefully remove the  MAX32666  EV  kit  board  out  of  its  packaging. Quickly inspect the board to ensure that no damage occurred during shipment. Jumpers/shunts are preinstalled prior to testing and packaging.
- 2) The MAX32666 is preprogrammed with a demo program. To run the demo, power up the board by plugging  in  the  provided  USB  cable  to  connector  CN2. Verify that the blue LED (DS1) and the green LEDs (DS2 and DS3) are illuminated.
- 3) Once power is applied, the demo initiates and flashes the red LED (DS2) upon successful completion.

## Detailed Description of Hardware

## Power Supply

The  EV  kit  is  powered  by  +5V  and  is  made  available through VBUS on the Micro-USB type-B connectors CN1 or CN2. The board is default jumpered for power provided by CN2. A blue LED (DS1) illuminates when the board is powered. Green LEDs (DS3) and (DS2) illuminate when the  1V8  and  3V3  LDOs  are  powered,  respectively. The MAX32665 can be sourced by a coin cell battery or on board 3.3V through the JP13 header.

## Current Monitoring

Two pin  headers  provide  convenient  current  monitoring points for VDDA (JP19), VDDIO (JP18), VDDIOH (JP15), VCOREA  (JP20),  VCOREB  (JP21),  VTXIN  (JP22), VRXIN (JP23). VREGI can be measured at the VREGI SEL (JP13) three-pin header.

## Low-Power Mode Current Measurements

When  attempting  to  measure  the  current  consumption for  any  of  the  low-power  modes,  remove  jumpers  JP1 through JP3 and JP9 through JP12.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Clocking

The  MAX32666  clocking  is  provided  by  an  external 32.768kHz crystal  (Y1) for RTC operations and an external 32MHz crystal (Y2).

## TFT LCD Display

The display provided is a 1.28in 128 x 128 monochrome TFT. It has three-wire serial control, with a white backlight.

## Universal Serial Bus

A USB Micro B connector (CN1) is provided for prototyping  USB  slave  applications.  The  USB  2.0  high-speed interface  (480Mbps)  transceiver  is  embedded  in  the MAX32666.

## UART Interfaces

The  EV  kit  provides  a  USB-to-UART  bridge  chip,  FTDI FT230X.  This  bridge  eliminates  the  requirement  for  a physical  RS-232  COM  port.  Instead,  the  IC's  UART access is through the Micro-USB type-B connector, CN2. The USB-to-UART bridge can be connected to UART 1 or  UART 2 of the IC with jumpers JP9 (Rx), JP10 (Tx), JP11 (CTS), and JP12 (RTS). Virtual  COM port drivers and guides for installing Windows ®  drivers are available at the FTDI chip website.

## Bluetooth 5 Interface

A  SMA  connector  is  provided  to  attach  the  included Bluetooth 2.4GHz hinged whip antenna.

## Audio Stereo Codec Interface

The MAX32666 interface to the MAX9867 external audio codec IC through its I 2 C and I 2 S (PCM) ports. Line-in and line-out 3.5mm jacks are provided for audio access.

## Digital Microphone

The  MAX32666  interface  to  a  miniature  digital  microphone embedded on an IC through its PDM port.

## MAX32666 Evaluation Kit

## JTAG Serial Wire Debug (SWD) Support

SWD debug can be accessed through an Arm standard 20-pin connector (J7) or a Cortex ®  10-pin connector (J6). Logic levels are fixed to VDDIOH (1.8V or 3.3V).

## Reset Pushbutton

Pushbutton SW1 manually resets the MAX32666.

## Indicator LEDs

The  indicator  LEDs  D2  (red)  and  D3  (green)  are  connected to GPIO P1.14 and P1.15, respectively.

## Table 1. Jumper Settings

| JUMPER   | SIGNAL       | SETTINGS   | DESCRIPTION                                              |
|----------|--------------|------------|----------------------------------------------------------|
| JP1      | I2C0_SCL/SDA | Open       | Disconnects I2C0 SCL and SDA1.5K pullups from VDDIOH     |
| JP1      | I2C0_SCL/SDA | Close*     | Connects I2C0 SCL and SDA1.5K pullups to VDDIOH          |
| JP2      | I2C1_SCL/SDA | Open*      | Disconnects I2C1 SCL and SDA1.5K pullups from VDDIOH     |
| JP2      | I2C1_SCL/SDA | Close      | Connects I2C1 SCL and SDA1.5K pullups to VDDIOH          |
| JP3      | I2C2_SCL/SDA | Open*      | Disconnects I2C2 SCL and SDA1.5K pullups from VDDIOH     |
| JP3      | I2C2_SCL/SDA | Close      | Connects I2C2 SCL and SDA1.5K pullups to VDDIOH          |
| JP4      | P1_14        | Open       | Disconnects LED D2 from P1_14                            |
| JP4      | P1_14        | Close*     | Connects LED D2 to P1_14                                 |
| JP5      | P1_15        | Open       | Disconnects LED D3 from P1_15                            |
| JP5      | P1_15        | Close*     | Connects LED D3 to P1_15                                 |
| JP6      | VBUS         | 2-1        | Connects VBUS to USB connector CN1 to supply board power |
| JP6      | VBUS         | 2-3*       | Connects VBUS to USB connector CN2 to supply board power |
| JP7      | N/A          | N/A        | N/A                                                      |
| JP8      | N/A          | N/A        | N/A                                                      |
| JP9      | P0_20        | 2-1*       | Connects the USB to serial UART to GPIO P0_20 (RX1)      |
| JP9      | P0_28        | 2-3        | Connects the USB to serial UART to GPIO P0_28 (RX2)      |
| JP10     | P0_21        | 2-1*       | Connects the USB to serial UART to GPIO P0_21 (TX1)      |
| JP10     | P0_29        | 2-3        | Connects the USB to serial UART to GPIO P0_29 (TX2)      |
| JP11     | P0_22        | 2-1*       | Connects the USB to serial UART to GPIO P0_22 (CTS1_N)   |
| JP11     | P0_30        | 2-3        | Connects the USB to serial UART to GPIO P0_30 (CTS2_N)   |
| JP12     | P0_23        | 2-1*       | Connects the USB to serial UART to GPIO P0_23 (RTS1_N)   |
| JP12     | P0_31        | 2-3        | Connects the USB to serial UART to GPIO P0_31 (RTS2_N)   |
| JP13     | VREGI        | 2-1        | Connects VREGI to the coin cell battery                  |
| JP13     | VREGI        | 2-3*       | Connects VREGI to 3V3                                    |

Cortex is a registered trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

Evaluates: MAX32665, MAX32666

## GPIO Pushbuttons

The two pushbuttons (SW2 and SW3) are connected to GPIO  P1.6  and  P1.7,  respectively.  If  the  pushbutton  is pressed, the attached port pin is pulled low.

## GPIO Headers

Select  GPIOs  are  accessible  through  a  0.1in  spaced header pins. The IC provides support for both 1.8V and 3.3V peripherals through power rails VDDIO and VDDIOH. GPIO voltages can be programmed on pin-by-pin basis. Refer to the IC's operating guide for more detail.

│

## Table 1. Jumper Settings (continued)

| JUMPER   | SIGNAL   | SETTINGS   | DESCRIPTION                    |
|----------|----------|------------|--------------------------------|
| JP14**   | VDDIOH   | 1-2*       | Connects VDDIOH to VREGO_A**   |
| JP14**   | VDDIOH   | 3-4        | Connects VDDIOH to 1V8         |
| JP14**   | VDDIOH   | 5-6        | Connects VDDIOH to 3V3         |
| JP15     | VDDIOH   | Open       | Disconnects power from VDDIOH  |
| JP15     | VDDIOH   | Close*     | Connects power to VDDIOH       |
| JP16     | VDDB     | Open       | Disconnects power from VDDB    |
| JP16     | VDDB     | Close*     | Connects power to VDDB         |
| JP17     | VDDIO    | 2-1*       | Connects VDDIO to VREGO_A      |
| JP17     | VDDIO    | 2-3        | Connects VDDIO to 1V8          |
| JP18     | VDDIO    | Open       | Disconnects power from VDDIO   |
| JP18     | VDDIO    | Close*     | Connects power to VDDIO        |
| JP19     | VDDA     | Open       | Disconnects power from VDDA    |
| JP19     | VDDA     | Close*     | Connects power to VDDA         |
| JP20     | VCORE_A  | Open       | Disconnects power from VCORE_A |
| JP20     | VCORE_A  | Close*     | Connects power to VCORE_A      |
| JP21     | VCORE_B  | Open       | Disconnects power from VCORE_B |
| JP21     | VCORE_B  | Close*     | Connects power to VCORE_B      |
| JP22     | VTXIN    | Open       | Disconnects power from VTXIN   |
| JP22     | VTXIN    | Close*     | Connects power to VTXIN        |
| JP23     | VRXIN    | Open       | Disconnects power from VRXIN   |
| JP23     | VRXIN    | Close*     | Connects power to VRXIN        |

Evaluates: MAX32665, MAX32666

## MAX32666 EV Kit Bill of Materials

|   QTY | PART REFERENCE                                                          | BOM DESCRIPTION                  | MANUFACTURER PN      | MANUFACTURER                     |
|-------|-------------------------------------------------------------------------|----------------------------------|----------------------|----------------------------------|
|     1 | BATT_HD1                                                                | HOLDER COIN CELL CR2032 EJECT    | BA2032               | MPD (Memory Protection Devices)  |
|     2 | C1 C2                                                                   | CAP CER 47UF 6.3V 20% X5R 0805   | C2012X5R0J476M125AC  | TDK Corporation                  |
|    19 | C3 C4 C5 C6 C13 C14 C17 C18 C19 C21 C22 C23 C24 C25 C26 C27 C75 C76 C77 | CAP CER 1UF 6.3V X5R 0402        | JMK105BJ105KV-F      | Taiyo Yuden                      |
|     5 | C7 C8 C10 C11 C12                                                       | CAP CER 22UF 6.3V 20% X5R 0603   | C1608X5R0J226M080AC  | TDK Corporation                  |
|     1 | C9                                                                      | CAP CER 4700PF 16V 10% X7R 0201  | CGA1A2X7R1C472K030BA | TDK Corporation                  |
|     3 | C15 C16 C20                                                             | CAP CER 0.1UF 6.3V 10% X5R 0201  | GRM033R60J104KE19D   | Murata                           |
|     2 | C28 C29                                                                 | CAP CER 16PF 50V 5% C0G/NP0 0402 | GRM1555C1H160JA01D   | Murata Electronics North America |
|     2 | C30 C58                                                                 | CAP CER 0.1UF 25V 10% X8R 0603   | C1608X8R1E104K080AA  | TDK Corporation                  |
|    12 | C31 C39 C44 C46 C47 C48 C49 C60 C65 C68 C72 C74                         | CAP CER 0.1UF 10V 10% X5R 0402   | GRM155R61A104KA01D   | Murata                           |
|     9 | C32 C50 C51 C52 C53 C54 C55 C56 C57                                     | DNI                              |                      |                                  |
|     7 | C33 C35 C36 C37 C38 C40 C41                                             | CAP CER 1uF 16V 10% X7R 0603     | GCM188R71C105KA64D   | Murata                           |
|     1 | C34                                                                     | CAP CER 2.2uF 10V 10% X5R 0603   | C0603C225K8PACTU     | Kemet                            |
|     2 | C42 C43                                                                 | CAP CER 18PF 50V 5% NP0 0402     | GRM1555C1H180JA01D   | Murata                           |
|     1 | C45                                                                     | CAP CER 10UF 6.3V 20% X5R 0603   | GRM188R60J106ME84D   | Murata Electronics North America |
|     2 | C59 C70                                                                 | CAP CER 1UF 35V 10% X5R 0603     | GMK107BJ105KA-T      | Taiyo Yuden                      |
|     2 | C61 C66                                                                 | CAP CER 10nF 25V 10% X7R 0603    | CL10B103KA8NNNC      | Samsung                          |
|     1 | C62                                                                     | CAP CER 4.7uF 10V 10% X5R 0603   | C0603C475K8PACTU     | Kemet                            |
|     2 | C63 C64                                                                 | CAP CER 47PF 50V 1% NP0 0402     | C1005C0G1H470F050BA  | TDK Corporation                  |
|     1 | C67                                                                     | CAP CER 0.1uF 16V 10% X7R 0603   | C0603C104K4RACTU     | Kemet                            |
|     1 | C69                                                                     | CAP CER 10000PF 16V 10% X7R 0402 | GRM155R71C103KA01D   | Murata Electronics North America |

Evaluates: MAX32665, MAX32666

## MAX32666 EV Kit Bill of Materials (continued)

|   QTY | PART REFERENCE                                                  | BOM DESCRIPTION                       | MANUFACTURER PN      | MANUFACTURER                     |
|-------|-----------------------------------------------------------------|---------------------------------------|----------------------|----------------------------------|
|     2 | C71 C73                                                         | CAP CER 10UF 6.3V 20% X5R 0402        | GRJ155R60J106ME11D   | Murata Electronics North America |
|     2 | CN1 CN2                                                         | CONN RCPT 5POS MICRO USB B R/A        | 47346-0001           | Molex                            |
|     1 | D1                                                              | TVS 200W 5V UNIDIR SOD-123FL          | SMF5.0A-TP           | Micro Commercial Co              |
|     1 | D2                                                              | LED 660NM RED WTR CLR 1206 SMD        | SML-LX1206SRC-TR     | Lumex Opto                       |
|     3 | D3 DS2 DS3                                                      | LED 565NM WTR CLR GREEN 1206 SMD      | SML-LX1206GC-TR      | Lumex Opto                       |
|     1 | DS1                                                             | LED 469NM BLUE DIFF 1206 SMD          | HSMR-C150            | Avago Technologies US Inc.       |
|     6 | H1 H2 H3 H4 H5 H6                                               | DNI MTG 125DRL 300PAD                 |                      |                                  |
|     1 | J1                                                              | CONN SMA JACK STR 50 OHM PCB          | 5-1814832-1          | TE Connectivity                  |
|     1 | J2                                                              | CONN MOD JACK R/A 6P6C (DNI)          | 43860-0002           | Molex Inc                        |
|     1 | J3                                                              | CONN MICRO SD CARD PUSH-PULL R/A      | 047571-0001          | Molex                            |
|     2 | J4 J8                                                           | CONN JACK STEREO 3.5MM SMD R/A        | SJ-3523-SMT-TR       | CUI Inc                          |
|     1 | J5                                                              | CONN FFC FPC 10POS 0.50MM R/A         | 503480-1000          | Molex, LLC                       |
|     1 | J6                                                              | IDC BOX HEADER 0.050 10 POS SMD       | 3220-10-0300-00      | CNC Tech                         |
|     1 | J7                                                              | CONN HEADER 2.54MM 20POS GOLD         | SBH11-PBPC-D10-ST-BK | Sullins                          |
|     3 | JH1 TP5 TP6                                                     | CONN HEADER .100 SINGL STR 6POS       | PEC06SAAN            | Sullins                          |
|     1 | JH2                                                             | CONN HEADER .100 DUAL STR 16POS       | PEC08DAAN            | Sullins                          |
|    14 | JP1 JP2 JP3 JP4 JP5 JP8 JP15 JP16 JP18 JP19 JP20 JP21 JP22 JP23 | CONN HEADER .100 SINGL STR 2POS (2x1) | PEC02SAAN            | Sullins                          |
|     8 | JP6 JP7 JP9 JP10 JP11 JP12 JP13 JP17                            | CONN HEADER .100 SINGL STR 3POS       | PEC03SAAN            | Sullins                          |
|     1 | JP14                                                            | CONN HEADER .100 DUAL STR 6POS        | PEC03DAAN            | Sullins                          |
|     1 | L1                                                              | FIXED IND 2.2UH 1A 150 MOHM SMD 0805  | MLP2012H2R2MT0S1     | TDK Corporation                  |
|     2 | L2 L3                                                           | FERRITE CHIP SIGNAL 2000 OHM SMD      | HZ1206C202R-10       | Laird-Signal Integrity Products  |
|     1 | L4                                                              | FERRITE CHIP 220 OHM 0805             | BLM21PG221SN1D       | Murata Electronics North America |

Evaluates: MAX32665, MAX32666

## MAX32666 EV Kit Bill of Materials (continued)

|   QTY | PART REFERENCE                                              | BOM DESCRIPTION                       | MANUFACTURER PN   | MANUFACTURER                      |
|-------|-------------------------------------------------------------|---------------------------------------|-------------------|-----------------------------------|
|     1 | PCB1                                                        |                                       |                   |                                   |
|     1 | Q1                                                          | MOSFET P-CH 25V 460MA SOT-23          | FDV304P           | Fairchild Semiconductor           |
|     2 | Q2 Q4                                                       | MOSFET P-CH 20V 6A SOT23F             | SSM3J327R,LF      | Toshiba Semiconductor and Storage |
|     2 | Q3 Q5                                                       | MOSFET N-CH 20V 2.3A SOT23            | BSS806N H6327     | Infineon Technologies             |
|    16 | R1 R3 R5 R8 R15 R20 R24 R56 R59 R60 R63 R64 R67 R68 R71 R72 | RES SMD 0 OHM JUMPER 1/10W 0603       | RC0603JR-070RL    | Yageo                             |
|    14 | R2 R4 R6 R9 R10 R11 R12 R14 R16 R19 R21 R25 R27 R29         | RES SMD 0 OHM JUMPER 1/10W 0603 (DNI) | RC0603JR-070RL    | Yageo                             |
|     4 | R7 R47 R48 R55                                              | RES SMD 100 OHM 1% 1/10W 0603         | RC0603FR-07100RL  | Yageo                             |
|     1 | R22                                                         | RES 4.7K OHM 1/10W 1% 0402 SMD        | ERJ-2RKF4701X     | Panasonic                         |
|     2 | R23 R88                                                     | RES 150K OHM 1/10W 1% 0603 SMD        | ERJ-3EKF1503V     | Panasonic                         |
|     1 | R30                                                         | RES 47K OHM 1/10W 1% 0603 SMD         | ERJ-3EKF4702V     | Panasonic                         |
|     1 | R31                                                         | RES 1K OHM 1/10W 1% 0603 SMD          | ERJ-3EKF1001V     | Panasonic                         |
|    13 | R32 R40 R41 R42 R43 R44 R45 R46 R75 R78 R79 R83 R89         | RES 10K OHM 1/10W 1% 0603 SMD         | ERJ-3EKF1002V     | Panasonic                         |
|     1 | R33                                                         | RES 10 OHM 1/10W 1% 0603 SMD          | ERJ-3EKF10R0V     | Panasonic                         |
|     6 | R34 R35 R36 R37 R38 R39                                     | RES 1.5K OHM 1/10W 1% 0603 SMD        | ERJ-3EKF1501V     | Panasonic                         |
|     1 | R49                                                         | RES 470 OHM 1/10W 1% 0603 SMD         | ERJ-3EKF4700V     | Panasonic                         |
|     3 | R50 R86 R87                                                 | RES 332 OHM 1/10W 1% 0603 SMD         | ERJ-3EKF3320V     | Panasonic                         |
|     1 | R53                                                         | RES SMD 150 OHM 1% 1/10W 0402         | ERJ-2RKF1500X     | Panasonic                         |
|     1 | R54                                                         | RES SMD 1M OHM 1% 1/10W 0402          | ERJ-2RKF1004X     | Panasonic                         |
|     8 | R61 R62 R65 R66 R69 R70 R73 R74                             | RES 49.9 OHM 1/10W 1% 0603 SMD (DNI)  | ERJ-3EKF49R9V     | Panasonic                         |
|     2 | R76 R77                                                     | RES 27 OHM 1/10W 1% 0603 SMD          | ERJ-3EKF27R0V     | Panasonic                         |

Evaluates: MAX32665, MAX32666

## MAX32666 EV Kit Bill of Materials (continued)

|   QTY | PART REFERENCE   | BOM DESCRIPTION                  | MANUFACTURER PN        | MANUFACTURER           |
|-------|------------------|----------------------------------|------------------------|------------------------|
|     1 | R80              | RES SMD 1M OHM 5% 1/8W 0805      | ERJ-6GEYJ105V          | Panasonic              |
|     3 | R81 R82 R84      | DNI 0402                         |                        |                        |
|     1 | R85              | RES 2.7K OHM 1/10W 1% 0603 SMD   | ERJ-3EKF2701V          | Panasonic              |
|     1 | SW1              | SWITCH TACTILE SPST-NO 0.05A 24V | B3S-1002 BY OMZ        | Omron Electronics      |
|     2 | SW2 SW3          | SWITCH TACTILE SPST-NO 0.05A 24V | B3S-1000               | Omron Electronics      |
|     1 | TP1              | TEST POINT PC MULTI PURPOSE ORG  | 5013                   | Keystone Electronics   |
|     1 | TP2              | TEST POINT PC MULTI PURPOSE YEL  | 5014                   | Keystone Electronics   |
|     2 | TP7 TP11         | CONN HEADER .100 SINGL STR 1POS  | PEC01SAAN              | Sullins                |
|     3 | TP8 TP9 TP10     | TEST POINT PC MULTI PURPOSE BLK  | 5011                   | Keystone Electronics   |
|     1 | U1               | MAX32666_121P_BGA                | MAX32666GXMBT+         | Maxim Integrated       |
|     1 | U2               | IC SINGLE INVERTER GATE SC70-5   | SN74LVC1GU04DCKT       | Texas Instruments      |
|     1 | U3               | SILICON DIGITAL MICROPHONE       | SPH0644HM4H-1          | Knowles                |
|     1 | U4               | LCD TFT 1.28" 128X128 FPC        | LS013B7DH03            | Sharp Microelectronics |
|     1 | U5               | IC MUX/DEMUX SW QUAD 2:1 16TSSOP | QS3VH257PAG8           | IDT                    |
|     1 | U6               | IC FLASH 64MBIT 104MHZ 8SOP      | MX25U6435FM2I-10G      | Macronix               |
|     1 | U7               | IC SRAM 1MBIT 20MHZ 8TSSOP       | N01S818HAT22I          | ON Semiconductor       |
|     2 | U8 U10           | ESD PROT DIFF SOT23-6            | MAX3207EAUT+T          | Maxim Integrated       |
|     1 | U9               | IC USB SERIAL BASIC UART 16SSOP  | FT230XS-R              | FTDI                   |
|     1 | U11              | IC REG LDO 3.3V/ADJ 0.5A 8UMAX   | MAX1806EUA33+          | Maxim Integrated       |
|     1 | U12              | Low Dropout Linear Regulator     | MAX1806EUA18+          | Maxim Integrated       |
|     1 | U13              | IC STEREO AUD CODEC LP 32TQFN    | MAX9867ETJ+T           | Maxim Integrated       |
|     1 | Y1               | CRYSTAL 32.768KHZ 6.0PF SMD      | ABS07-32.768KHZ-6-T    | Abracon Corp           |
|     1 | Y2               | CRYSTAL 32.00 MHZ 12PF SMD       | FA-20H 32.0000MF12Y-W3 | EPSON                  |
|     1 | Y3               | CRYSTAL 12.2880MHZ 18PF SMD      | ABM3-12.288MHZ-B4Y-T   | Abracon Corporation    |

Evaluates: MAX32665, MAX32666

## MAX32666 Evaluation Kit

## MAX32666 EV Kit Schematics

<!-- image -->

│

Evaluates: MAX32665, MAX32666

## MAX32666 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX32665, MAX32666

## MAX32666 EV Kit Schematics (continued)

<!-- image -->

│

## MAX32666 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX32665, MAX32666

## MAX32666 EV Kit Schematics (continued)

<!-- image -->

│

## MAX32666 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX32665, MAX32666

## MAX32666 EV Kit Schematics (continued)

<!-- image -->

│

## MAX32666 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX32665, MAX32666

## MAX32666 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                     | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 11/18           | Initial release                                                                                                                                 | -               |
|                 1 | 12/18           | Updated Ordering Information                                                                                                                    | 1               |
|                 2 | 8/19            | Updated MAX32665/MAX32666 EV Kit Board , Table 1 , MAX32665/MAX32666 EV Kit Bill of Materials , and MAX32665/MAX32666 EV Kit Schematic Diagrams | 2, 4, 5, 6-17   |
|                 3 | 1/21            | Updated Table 1 , Added VREGO_A Precaution section and MAX32665/ MAX32666 EV Kit Schematic Diagrams                                             | 5, 10-17        |
|                 4 | 3/21            | Added Low-Power Mode Current Measurements section in Detailed Description of Hardware                                                           | 3               |
|                 5 | 7/22            | Removed the MAX32666/65 socket and evaluation of MAX32667-68. Elimination of MAX32665 EV kit in the entire datasheet.                           | 1-18            |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX32665, MAX32666