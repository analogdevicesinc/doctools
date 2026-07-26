<!-- lastmod 2022-08-05 -->
## MAX32650/MAX32651 Evaluation Kits

## General Description

The  MAX32650/MAX32651  EV  kits  provide  a  platform  for  evaluating  the  capabilities  of  the  MAX32650/ MAX32651  ultra-low  power  memory-scalable  microcontroller designed specifically for high performance battery powered applications.

## EV Kit Contents

- MAX32650 EV kit containing a MAX32650/ MAX32651 with a preprogrammed demo
- JTAG debugger with ribbon cable
- Two standard A to Micro B USB cables

## Ordering Information

| PART            | TYPE   | SECURE   |
|-----------------|--------|----------|
| MAX32650-EVKIT# | EV Kit | No       |
| MAX32651-EVKIT# | EV Kit | Yes      |

# Denotes RoHS compliant.

Arm is a registered trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

Evaluate: MAX32650-MAX32652

## Features

- 3.5in 320 x 240 Color TFT Display
- 64MB HyperRAM
- 64MB XIP Flash
- 1MB XIP RAM
- USB 2.0 Micro B Interface
- USB 2.0 Micro B to Serial UARTs
- Selection with Jumpers Between UART0 and UART2
- Micro SD Card Interface
- Select GPIOs Accessed through 0.1in Header
- Access to the Four Analog Input Through 0.1in Header
- Arm® or SWD JTAG 20-Pin Header
- On-Board PMIC to Source Power for the MAX32650/ MAX32651
- Board Power Provided by Either USB Port
- Individual Power Measurement on All IC Rails Through Jumpers
- On-Board 1.8V and 3.3V Regulators for Peripherals
- Two General-Purpose LEDs and Two GeneralPurpose Pushbutton Switches

<!-- image -->

## MAX32650/MAX32651 Evaluation Kits

## MAX32650 EV Kit Board

<!-- image -->

│

Evaluate: MAX32650-MAX32652

## MAX32650/MAX32651 Evaluation Kits

## Quick Start

## Procedure

Follow the steps below to verify board operation:

- 1) While observing safe ESD practices, carefully remove the  MAX32650/MAX32651  EV  kit  board  out  of  its packaging. Quickly inspect the board to ensure that no damage  occurred  during  shipment.  Jumpers/shunts are pre-installed prior to testing and packaging.
- 2) The  MAX32650/MAX32651  is  preprogrammed  with a  demo  program.  To  power  up  the  board  and  run the  demo.  Verify  that  the  board  is  powered  up  by observing  that  the  blue  LED  (DS3)  and  the  green LEDs (DS1 and DS2) are illuminated.
- 3) Once  power  is  applied, the demo  initiates  and displays the Maxim logo upon successful completion.

## Detailed Description of Hardware

## Power Supply

The  EV  kit  is  powered  by  +5V  and  is  made  available through VBUS on the Micro-USB type-B connectors CN1 or CN2. The board is default jumpered for power provided by CN1. A blue LED (DS3) illuminates when the board is powered. Green LEDs DS1 and DS2 illuminate when the 1V8 and 3V3 LDOs are powered, respectively. These are dedicated for sourcing power to the board peripherals.

## Current Monitoring

Jumpers provide convenient current monitoring points for VRTC (J6),  VDDIO  (J7),  VDDIOH  (J8  or  J11),  VCORE (J9), VDDB (J10) and VDDA (J12).

## Clocking

The IC nominally operates from an internal oscillator of 120MHz. Three other lower frequency oscillators can be selected depending on power needs. There is an internal 32.768  oscillator  that  requires  an  external  32.768kHz crystal  (Y1),  for  accurate  RTC  timekeeping  and  USB operation.

## Evaluate: MAX32650-MAX32652

## Color TFT Display

The display provided is a 3.5in 320 x 240 color TFT. It has three-wire  serial  control,  a  24-bit  parallel  RGB  interface with a white LED backlight.

## Universal Serial Bus

A  USB  Micro  B  connector  (CN1)  is  provided  for  prototyping  USB  slave  applications.  The  USB  2.0  full-speed interface  (480Mbps)  transceiver  is  embedded  in  the MAX32650.

## UART Interfaces

The  EV  kit  provides  a  USB-to-UART  bridge  chip,  FTDI FT230X.  This  bridge  eliminates  the  requirement  for  a physical  RS-232  COM  port.  Instead,  the  IC's  UART access is through the Micro-USB type-B connector, CN2. The USB-to-UART bridge can be connected to UART 0 or UART 2 of the IC with jumpers JP12 (RX), JP13 (TX), JP15 (CTS), and JP16 (RTS). Virtual COM port drivers and guides for installing Windows ®  drivers are available at the FTDI chip website.

## Boot Loader GPIO Select (MAX32651 Only)

Secure  boot  loader  GPIO  pins  and  their  PU/PD  states can be selected through JP1 and JP2, respectively. GPIO selections  are  P2.18  (default)  and  P2.28  (legacy).  If  a different GPIO is required, pull the shunt on JP1 and connect a jumper wire between its center pin and the desired pin on the GPIO header.

Note: JP4 determines the pullup voltage level for I2C1\_ SCL.  Since  I2C1\_SCL  is  shared  with  boot  loader  pin P2.18, it  cannot be a logic high for normal operation at power up since this would cause the device to enter boot loader  mode.  For  normal  operation,  the  jumper  on  JP4 (I2C1  PU)  is  not  populated  by  default  and  JP2,  which determines if the selected boot loader pin is pulled high or low, is low (default).

Once the board is powered up, JP2 can be removed and JP4 can be populated  to  select  the  I2C  pullup  voltage. However, JP2 and JP4 would have to be set back to their default values if the board is reset or power is cycled. A way around this is to reprogram the boot loader pin polarity one time to override the MAX32651 default value.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## MAX32650/MAX32651 Evaluation Kits

## Arm JTAG Connectors

The  Arm  standard  20-pin  connector  pinout  is  provided by shrouded header J4. JH6 is provided as an optional debugging  access  point,  it  is  not  populated  by  default. The  JTAG  debugger  is  supplied  with  the  EV  kit.  JTAG logic levels are fixed to VDDIO (1.8V).

## JTAG Serial Wire Debug (SWD) Support

SWD is  supported  by  the  IC  and  this  EV  kit.  The  port shares its clock (SWCLK) with JTAG TCK and a bidirectional data pin (SWDIO) is shared with JTAG TMS.

## Reset Pushbutton

Pushbutton SW3  manually resets the  MAX32650/ MAX32651.

## Table 1. Jumper Settings

| JUMPER   | SIGNAL         | SETTINGS   | DESCRIPTION                                                              |
|----------|----------------|------------|--------------------------------------------------------------------------|
| JP1      | P2_18          | 2-1*       | Connects P2_18 to PU or PD resistor on JP2 (MAX32651 only)               |
| JP1      | P2_28          | 2-3        | Connects P2_28 to PU or PD resistor on JP2 (MAX32651 only)               |
| JP2      | P2_18 or P2_28 | 2-1        | Pulls up GPIO P2_18 or P2_28, depending on JP1 setting (MAX32651 only)   |
| JP2      | P2_18 or P2_28 | 2-3*       | Pulls down GPIO P2_18 or P2_28, depending on JP1 setting (MAX32651 only) |
| JP3      | P2_8           | 2-1*       | Connects 1.8V pullup to P2_8 (I2C0 SCL)                                  |
| JP3      | P2_8           | 2-3        | Connects 3.3V pullup to P2_8 (I2C0 SCL)                                  |
| JP4      | P2.18          | 2-1        | Connects 1.8V pullup to P2_18 (I2C1 SCL)                                 |
| JP4      | P2.18          | 2-3        | Connects 3.3V pullup to P2_18 (I2C1 SCL)                                 |
| JP5      | P2_7           | 2-1*       | Connects 1.8V pullup to P2_7 (I2C0 SDA)                                  |
| JP5      | P2_7           | 2-3        | Connects 3.3V pullup to P2_7 (I2C0 SDA)                                  |
| JP6      | P2_17          | 2-1*       | Connects 1.8V pullup to P2_17 (I2C1 SDA)                                 |
| JP6      | P2_17          | 2-3        | Connects 3.3V pullup to P2_17 (I2C1 SDA)                                 |
| JP7      | P2_25          | Open       | Disconnects RED LED D1 from P2_25 GPIO                                   |
| JP7      | P2_25          | Close*     | Connects RED LED D1 to P2_25 GPIO                                        |
| JP8      | P2_26          | Open       | Disconnects GREEN LED D1 from P2_26 GPIO                                 |
| JP8      | P2_26          | Close*     | Connects GREEN LED D1 to P2_26 GPIO                                      |
| JP9      | RAM XIP VCC    | Open       | Disconnects 1V8_AUX from RAM XIP VCC                                     |
| JP9      | RAM XIP VCC    | Close*     | Connects 1V8_AUX to RAM XIP VCC                                          |
| JP10     | FLASH XIP VCC  | Open       | Disconnects 1V8_AUX from FLASH XIP VCC                                   |
| JP10     | FLASH XIP VCC  | Close*     | Connects 1V8_AUX to FLASH XIP VCC                                        |

Evaluate: MAX32650-MAX32652

## Indicator LEDs

The indicator LEDs D1 (red) and D2 (green) are connected  to  GPIO  P2.25  and  P2.26,  respectively.  The  GPIOs need to be configured for 3.3V or open drain since they are sourced at 3.3V.

## GPIO Pushbuttons

The two pushbuttons (SW2 and SW3) are connected to GPIO P2.28 and P2.30, respectively. If the pushbutton is pressed, the attached port pin is pulled low.

## GPIO Headers

Select  GPIOs  are  accessible  through  a  0.1in  spaced header pins. The IC provides support for both 1.8V and 3.3V peripherals through power rails VDDIO and VDDIOH. GPIO voltages can be programmed on pin-by-pin basis. Refer to the IC's operating guide for more detail.

│

## MAX32650/MAX32651 Evaluation Kits

## Table 1. Jumper Settings (continued)

| JUMPER   | SIGNAL                 | SETTINGS   | DESCRIPTION                                                      |
|----------|------------------------|------------|------------------------------------------------------------------|
| JP11     | VBUS                   | 2-1        | Connects USB port CN1 to VBUS                                    |
| JP11     | VBUS                   | 2-3*       | Connects USB-UART port CN2 to VBUS                               |
| JP12     | JP18                   | 2-1*       | Connects TXD of USB-Serial IC to P2_11 (UART0_RX) if JP18 closed |
| JP12     | JP18                   | 2-3        | Connects TXD of USB-Serial IC to P1_9 (UART2_RX) if JP18 closed  |
| JP13     | JP19                   | 2-1*       | Connects RXD of USB-Serial IC to P2_12 (UART0_TX) if JP19 closed |
| JP13     | JP19                   | 2-3        | Connects RXD of USB-Serial IC to P1_10 (UART2_TX) if JP19 closed |
| JP14     | SDHC PU                | 2-1*       | Connects 1V8_AUX to the SDHC pull ups                            |
| JP14     | SDHC PU                | 2-3        | Connects 3V3_AUX to the SDHC pull ups                            |
| JP15     | RTS_N of USB-Serial IC | 2-1*       | Connects RTS_N of USB-Serial IC to P2_9 (UART0_CTS_N)            |
| JP15     | RTS_N of USB-Serial IC | 2-3        | Connects RTS_N of USB-Serial IC to P1_7 (UART2_CTS_N)            |
| JP16     | CTS_N of USB-Serial IC | 2-1*       | Connects CTS_N of USB-Serial IC to P2_10 (UART0_RTS_N)           |
| JP16     | CTS_N of USB-Serial IC | 2-3        | Connects CTS_N of USB-Serial IC to P1_8 (UART2_RTS_N)            |
| JP17     | HyperRAM VCCQ          | Open       | Disconnects 1V8_AUX from HyperRAM VCCQ                           |
| JP17     | HyperRAM VCCQ          | Close*     | Disconnects 1V8_AUX to HyperRAM VCCQ                             |
| JP18     | TXD of USB-Serial IC   | Open       | Disconnects TXD of USB-Serial IC from JP12 RX SEL jumper         |
| JP18     | TXD of USB-Serial IC   | Close*     | Connects TXD of USB-Serial IC to JP12 RX SEL jumper              |
| JP19     | RXD of USB-Serial IC   | Open       | Disconnects RXD of USB-Serial IC from JP13 TX SEL jumper         |
| JP19     | RXD of USB-Serial IC   | Close*     | Connects RXD of USB-Serial IC to JP13 TX SEL jumper              |
| JP20     | HyperRAM VCC           | Open       | Disconnects 1V8_AUX from HyperRAM VCC                            |
| JP20     | HyperRAM VCC           | Close*     | Connects 1V8_AUX to HyperRAM VCC                                 |
| JP21     | VDDIO                  | Open       | Disconnects 1V8 from VDDIO                                       |
| JP21     | VDDIO                  | Close*     | Connects 1V8 to VDDIO                                            |
| JP22     | VDDA                   | Open       | Disconnects 1V8 from VDDA                                        |
| JP22     | VDDA                   | Close*     | Connects 1V8 to VDDA                                             |
| JP23     | VRTC                   | Open       | Disconnects 1V8 from VRTC                                        |
| JP23     | VRTC                   | Close*     | Connects 1V8 to VRTC                                             |
| JP24     | JP25                   | 2-1        | Connects 1V8 to VDDIOH when JP25 is closed                       |
| JP24     | JP25                   | 2-3*       | Connects 3V3 to VDDIOH when JP25 is closed                       |
| JP25     | VDDIOH                 | Open       | Disconnects power from VDDIOH                                    |
| JP25     | VDDIOH                 | Close*     | Connects power to VDDIOH                                         |
| JP26     | VCORE                  | Open       | Disconnects 1V1 from VCORE                                       |
| JP26     | VCORE                  | Close*     | Connects 1V1 to VCORE                                            |
| JP27     | VDDB                   | Open       | Disconnects 3V3 from VDDB                                        |
| JP27     | VDDB                   | Close*     | Connects 3V3 to VDDB                                             |

Evaluate: MAX32650-MAX32652

## MAX32650/MAX32651 Evaluation Kits

## MAX32650 EV Kit Bill of Materials

|   QTY | PART REFERENCE                                                     | VALUE            | BOMDESCRIPTION                     | MMANUFACTURER PN     | MANUFACTURER          |
|-------|--------------------------------------------------------------------|------------------|------------------------------------|----------------------|-----------------------|
|     6 | C1 C3 C4 C6 C7 C8                                                  | 1uF              | CAP CER 1UF 6.3V 10% X5R 0402      | JMK105BJ105KV-F      | Taiyo Yuden           |
|     4 | C2 C5 C9 C10                                                       | 150pF            | CAP CER 150PF 50V 5% C0G 0603      | C1608C0G1H151J080AA  | TDK Corporation       |
|     4 | C11 C30 C41 C57                                                    | 4.7uF            | CAP CER 4.7uF 10V 10% X5R 0603     | C0603C475K8PACTU     | Kemet                 |
|     7 | C12 C14 C20 C21 C39 C42 C46                                        | 1uF              | CAP CER 1uF 16V 10% X7R 0603       | GCM188R71C105KA64D   | Murata                |
|     1 | C13                                                                | 10pF             | CAP CER 10pF 50V 5% NP0 0603       | 06035A100JAT2A       | AUX                   |
|    13 | C15 C16 C17 C18 C19 C22 C23 C26 C31 C34 C37 C45 C56                | 100nF            | CAP CER 0.1UF 10V 10% X5R 0402     | GRM155R61A104KA01D   | Murata Electronics    |
|     3 | C24 C32 C55                                                        | 100nF            | CAP CER 0.1UF 25V 10% X8R 0603     | C1608X8R1E104K080AA  | TDK Corporation       |
|     1 | C25                                                                | 1uF              | CAP CER 1UF 35V 10% X5R 0603       | GMK107BJ105KA-T      | Taiyo Yuden           |
|     1 | C27                                                                | 10nF             | CAP CER 10000PF 25V 10% X7R 0603   | CL10B103KA8NNNC      | Samsung               |
|     2 | C28 C29                                                            | 47pF             | CAP CER 47PF 50V 1% NP0 0402       | C1005C0G1H470F050BA  | TDK Corporation       |
|     1 | C33                                                                | 100nF            | CAP CER 0.1uF 16V 10% X7R 0603     | C0603C104K4RACTU     | Kemet                 |
|     2 | C35 C47                                                            | 10uF             | CAP CER 10UF 10V 10% X7R 0805      | CL21B106KPQNNNE      | Samsung               |
|     1 | C36                                                                | 10uF             | CAP CER 10UF 6.3V 20% X5R 0402     | GRJ155R60J106ME11D   | Murata Electronics    |
|     2 | C38 C40                                                            | 8pF              | CAP CER 8PF 50V NPO +/-0.25pF 0402 | CC0402CRNPO9BN8R0    | Yageo                 |
|     1 | C44                                                                | 4.7uF            | CAP CER 4.7UF 4V 20% X5R 0402      | AMK105BJ475MV-F      | Taiyo Yuden           |
|     2 | CN1 CN2                                                            | MICRO USB B R/A  | CONN RCPT 5POS MICRO USB B R/A     | 47346-0001           | Molex                 |
|     1 | D1                                                                 | RED              | LED 660NM RED WTR CLR 1206 SMD     | SML-LX1206SRC-TR     | Lumex Opto            |
|     3 | D2 DS2 DS3                                                         | GRN              | LED 565NM WTR CLR GREEN 1206 SMD   | SML-LX1206GC-TR      | Lumex Opto            |
|     1 | D3                                                                 | CMOSH-3          | Schottky Diode 30V_100mA           | CMOSH-3              | Central Semiconductor |
|     1 | D4                                                                 | GRN              | LED SMARTLED GREEN 570NM 0603      | LG L29K-G2J1-24-Z    | OSRAM Opto            |
|     1 | DS4                                                                | BLUE             | LED 469NM BLUE DIFF 1206 SMD       | HSMR-C150            | Avago Technologies    |
|     4 | H1 H2 H3 H4                                                        | DNI              | DNI MTG 125DRL 300PAD              |                      |                       |
|     1 | J1                                                                 | 047571-0001      | CONN MICRO SD CARD PUSH-PULL R/A   | 047571-0001          | Molex                 |
|     1 | J2                                                                 | 54P 0.5mm        | CONN FFC/FPC 54POS ZIF .5MM SMD    | 0512965494           | Molex Inc             |
|     1 | J3                                                                 | 10P CORTEX DEBUG | CONN HEADER 10POS DUAL .05" SMD    | FTSH-105-01-F-DV-K   | Samtec                |
|     1 | J4                                                                 | 20P 10x2         | CONN HEADER 2.54MM 20POS GOLD      | SBH11-PBPC-D10-ST-BK | Sullins               |
|     1 | JH1                                                                | 4P 1x4           | CONN HEADER .100 SINGL STR 4POS    | PEC04SAAN            | Sullins               |
|     3 | JH2 JH3 JH4                                                        | 18P 2x9          | CONN HEADER .100 DUAL STR 18POS    | PEC09DAAN            | Sullins               |
|     1 | JH5                                                                | 20P 2x10         | CONN HEADER .100 DUAL STR 20POS    | PEC10DAAN            | Sullins               |
|     1 | JH7                                                                | 5P 1x5           | CONN HEADER .100 SINGL STR 5POS    | PEC05SAAN            | Sullins               |
|    11 | JP3 JP4 JP5 JP6 JP11 JP12 JP13 JP14 JP15 JP16 JP24                 | 3P 3x1           | CONN HEADER .100 SINGL STR 3POS    | PEC03SAAN            | Sullins               |
|    14 | JP7 JP8 JP9 JP10 JP17 JP18 JP19 JP20 JP21 JP22 JP23 JP25 JP26 JP27 | JUMPER           | CONN HEADER .100 SINGL STR 2POS    | PEC02SAAN            | Sullins               |
|     2 | JP1* JP2*                                                          | 3P 3x1           | CONN HEADER .100 SINGL STR 3POS    | PEC03SAAN            | Sullins               |

*MAX32651 EV Kit

Evaluate: MAX32650-MAX32652

## MAX32650/MAX32651 Evaluation Kits

## MAX32650 EV Kit Bill of Materials (continued)

|   QTY | PART REFERENCE                                                             | VALUE                    | BOMDESCRIPTION                   | MMANUFACTURER PN         | MANUFACTURER           |
|-------|----------------------------------------------------------------------------|--------------------------|----------------------------------|--------------------------|------------------------|
|     1 | L1                                                                         | 22uH                     | FIXED IND 22UH 1.9A 105MOHM SMD  | VLS6045EX-220M-H         | TDK Corporation        |
|     2 | L2 L4                                                                      | HZ1206C202R-10           | FERRITE CHIP SIGNAL 2000OHMSMD   | HZ1206C202R-10           | Laird-Signal Integrity |
|     1 | L3                                                                         | BLM21PG221SN1D           | FERRITE CHIP 220 OHM0805         | BLM21PG221SN1D           | Murata Electronics     |
|     1 | PCB1                                                                       | PCB                      |                                  |                          |                        |
|     2 | Q1 Q3                                                                      | BSS806N                  | MOSFET N-CH 20V 2.3A SOT23       | BSS806N H6327            | Infineon Technologies  |
|     1 | Q2                                                                         | SSM3J327R,LF             | MOSFET P-CH 20V 6A SOT23F        | SSM3J327R,LF             | Toshiba Semiconductor  |
|    19 | R1 R10 R11 R12 R13 R14 R15 R16 R17 R18 R19 R20 R21 R25 R28 R31 R32 R39 R53 | 10K                      | RES 10K OHM1/10W 1% 0603 SMD     | ERJ-3EKF1002V            | Panasonic              |
|     4 | R2 R4 R6 R8                                                                | 33.2                     | RES 33.2 OHM1/10W 1% 0603 SMD    | ERJ-3EKF33R2V            | Panasonic              |
|     4 | R3 R5 R7 R9                                                                | 49.9                     | RES 49.9 OHM1/10W 1% 0603 SMD    | ERJ-3EKF49R9V            | Panasonic              |
|     1 | R22                                                                        | 470                      | RES 470 OHM1/10W 1% 0603 SMD     | ERJ-3EKF4700V            | Panasonic              |
|     3 | R23 R34 R41                                                                | 332                      | RES 332 OHM1/10W 1% 0603 SMD     | ERJ-3EKF3320V            | Panasonic              |
|     1 | R24                                                                        | 137K                     | RES SMD 137K OHM1%1/10W 0603     | ERJ-3EKF1373V            | Panasonic              |
|     1 | R26                                                                        | 10K                      | RES 10K OHM1/10W 1% 0603 SMD     | ERJ-3EKF1002V            | Panasonic              |
|     1 | R27                                                                        | 1M                       | RES SMD 1M OHM5%1/8W 0805        | ERJ-6GEYJ105V            | Panasonic              |
|     2 | R29 R30                                                                    | 27                       | RES 27 OHM1/10W 1% 0603 SMD      | ERJ-3EKF27R0V            | Panasonic              |
|     2 | R33 R45                                                                    | 1K                       | RES 1K OHM1/10W 1% 0603 SMD      | ERJ-3EKF1001V            | Panasonic              |
|     5 | R35 R36 R37 R38 R40                                                        | DNI                      | DNI 0402                         |                          |                        |
|     1 | R43                                                                        | 18.7K                    | RES SMD 18.7K OHM1%1/10W 0402    | ERJ-2RKF1872X            | Panasonic Electronic   |
|     1 | R44                                                                        | 49.9K                    | RES 49.9K OHM1/10W 1% 0603 SMD   | ERJ-3EKF4992V            | Panasonic              |
|     2 | R46 R57                                                                    | 150K                     | RES 150K OHM1/10W 1% 0603 SMD    | ERJ-3EKF1503V            | Panasonic              |
|     1 | R48                                                                        | 10                       | RES 10 OHM1/10W 1% 0603 SMD      | ERJ-3EKF10R0V            | Panasonic              |
|     2 | R49 R51                                                                    | 0                        | RES SMD 0 OHMJUMPER 1/10W 0603   | RC0603JR-070RL           | Yageo                  |
|     2 | R50 R52                                                                    | 0                        | RES SMD 0 OHMJUMPER 1/10W 0603   | RC0603JR-070RL           | Yageo                  |
|     1 | R54                                                                        | 2.7K                     | RES 2.7K OHM1/10W 1% 0603 SMD    | ERJ-3EKF2701V            | Panasonic              |
|     1 | SW1                                                                        | B3S-1002 BY OMZ          | SWITCH TACTILE SPST-NO 0.05A 24V | B3S-1002 BY OMZ          | Omron Electronics      |
|     2 | SW2 SW3                                                                    | B3S-1000P                | SWITCH TACTILE SPST-NO 0.05A 24V | B3S-1000P                | Omron Electronics      |
|     1 | TP1                                                                        | 6P 1x6                   | CONN HEADER .100 SINGL STR 6POS  | PEC06SAAN                | Sullins                |
|     1 | TP2                                                                        | YLW                      | TEST POINT PC MULTI PURPOSE YEL  | 5014                     | Keystone Electronics   |
|     2 | TP5 TP9                                                                    | 1P                       | CONN HEADER .100 SINGL STR 1POS  | PEC01SAAN                | Sullins                |
|     3 | TP6 TP7 TP8                                                                | BLK                      | TEST POINT PC MULTI PURPOSE BLK  | 5011                     | Keystone Electronics   |
|     1 | U1*                                                                        | MAX32650GCE+             | MAX32650GCE+ 144P TQFP           | MAX32650GCE+             | Maxim Integrated       |
|     1 | U1**                                                                       | MAX32651GCE+             | MAX32651GCE+ 144P TQFP           | MAX32651GCE+             | Maxim Integrated       |
|     1 | U2                                                                         | MAX8574EUT+T             | IC CONV LCD BOOST SOT23-6        | MAX8574EUT+T             | Maxim Integrated       |
|     1 | U3                                                                         | NHD-3.5-320240MF-ATXL#-1 | LCD DISP TFT 3.5" 320X240 B/L    | NHD-3.5-320240MF-ATXL#-1 | Newhaven Display Intl  |
|     1 | U4                                                                         | MX25U6435FM2I-10G        | IC FLASH 64MBIT 104MHZ 8SOP      | MX25U6435FM2I-10G        | Macronix               |
|     1 | U5                                                                         | N01S818HAT22I            | IC SRAM 1MBIT 20MHZ 8TSSOP       | N01S818HAT22I            | ON Semiconductor       |
|     1 | U6                                                                         | S27KS0641DPBHV020        | IC HYPERRAM 64Mb 24BGA 166MHz    |                          | Cypress Semiconductor  |
|     2 | U7 U9                                                                      | MAX3207EAUT+T            | ESD PROT DIFF SOT23-6            | MAX3207EAUT+T            | Maxim Integrated       |
|     1 | U8                                                                         | FT230XS-R                | IC USB SERIAL BASIC UART 16SSOP  | FT230XS-R                | FTDI                   |
|     1 | U10                                                                        | MAX1806EUA33+            | IC REG LDO 3.3V/ADJ 0.5A 8UMAX   | MAX1806EUA33+            | Maxim Integrated       |
|     1 | U11                                                                        | MAX1818EUT18+            | IC REG LDO 1.8V/ADJ 0.5A SOT23-6 | MAX1818EUT18+            | Maxim Integrated       |
|     1 | U12                                                                        | MAX1806EUA18+            | Low Dropout Linear Regulator     | MAX1806EUA18+            | Maxim Integrated       |
|     1 | Y1                                                                         | 32.768kHz                | CRYSTAL 32.768KHZ 6.0PF SMD      | ABS07-32.768KHZ-6-T      | Abracon Corp           |

*MAX32650 EV Kit **MAX32651 EV Kit

Evaluate: MAX32650-MAX32652

## MAX32650/MAX32651 Evaluation Kits

## MAX32650/51 EV Kit Schematics

DAUGHTERBOARD STANDOFF HOLES

1) Moved inductor L5 to LXA instead of LXB of PMIC U12.

REV 3.0

REV D

3) Removed J11 and added JP29 (3 pin header) and JP28 (2 pin header) for VDDIOH, which allowes SBB0 or SBB2 to source VDDIOH. 4) Removed JP14 (VIO\_REF\_SEL) so as to allow USB to UART bridge and JTAG IO voltages to be indvidually selected via resistor stuff option. 2) Swapped port 2 location with port 3 on JH5 for clearer sequencing on pcb.

1) Added PFET to SD card VDD to control voltage to it via GPIO P3\_5.

3) Removed JP5 and combined with JP4.

2) Added power sequencing IC (U13) and FETs to provide voltage sequencing to the rails of the MAX32650.

1) Removed the PMIC U12 and replaced with LDOs.

4) Removed JP6 and combined with JP3.

2) Renamed JP31 to JP14.



2) Removed jumper JP2.

REV 2.0

REV E

1) Removed the 1V8\_AUX from VIN of the 1.1V LDO (U12) and connected VBUS to VIN.

1) Removed the power sequencing circuit on page 8 (Power). This consists of U13 (IC supervisor), its three volatage dividers and FETs Q4 through Q7.

REV F

No longer required by design.

H1 DNI 1 H3 DNI 1

H2

DNI

1

PCB1 PCB-00099-F-0

H4

DNI

1

Evaluate: MAX32650-MAX32652

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX32650/51 EV Kit Schematics (continued)

<!-- image -->

Evaluate: MAX32650-MAX32652

## MAX32650/51 EV Kit Schematics (continued)

<!-- image -->

## MAX32650/51 EV Kit Schematics (continued)

<!-- image -->

│

## MAX32650/51 EV Kit Schematics (continued)

<!-- image -->

│

## MAX32650/51 EV Kit Schematics (continued)

<!-- image -->

## MAX32650/51 EV Kit Schematics (continued)

<!-- image -->

│

## MAX32650/51 EV Kit Schematics (continued)

<!-- image -->

│

## MAX32650/MAX32651 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                  | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 10/17           | Initial release                                                                                                                                                                                                                                              | -               |
|                 1 | 1/18            | Updated MAX32650 EV Kit Board Photo , Procedure , Arm JTAG Connectors , Table 1, and MAX32650 EV Kit Bill of Materials , and added VIO_REF Settings                                                                                                          | 2-7             |
|                 2 | 2/18            | Added MAX32651 and MAX32652 to data sheet, updated schematics                                                                                                                                                                                                | 1-17            |
|                 3 | 3/18            | Updated orderable part number                                                                                                                                                                                                                                | 1               |
|                 4 | 9/19            | Updated part number, General Description , Ordering Information , Features , MAX32650 EV Kit Board , Procedure , Power Supply , Reset Pushbutton , Table 1, MAX32650 EV Kit Bill of Materials , and MAX32650 EV Kit Schematics , and removed VIO_REF Setting | 1-16            |
|                 5 | 2/20            | Updated MAX32650 EV Kit Board , Table 1, MAX32650 EV Kit Bill of Materials , and MAX32650 EV Kit Schematics                                                                                                                                                  | 2, 4, 6, 8-15   |
|                 6 | 6/20            | Updated MAX32650 EV Kit Board , Table 1, MAX32650 EV Kit Bill of Materials , and MAX32650 EV Kit Schematics                                                                                                                                                  | 2, 4, 6-15      |
|                 7 | 9/20            | Added Boot Loader GPIO Select to the Detailed Description of Hardware section, updated Table 1, Bill of Materials, and schematic diagrams                                                                                                                    | 3, 4, 6-15      |
|                 8 | 4/21            | Updated Boot Loader GPIO Select (MAX32651 Only) section, Table 1, and MAX32650 EV Kit Schematics                                                                                                                                                             | 3, 4, 8-15      |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluate: MAX32650-MAX32652