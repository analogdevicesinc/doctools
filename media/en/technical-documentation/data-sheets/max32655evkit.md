<!-- lastmod 2022-08-03 -->
<!-- image -->

Evaluates: MAX32655

## General Description

The MAX32655 evaluation kit (EV kit) provides a platform for  evaluation  capabilities  of  the  MAX32655  microcontroller, which is an advanced system-on-chip (SoC). It features an Arm ®  Cortex ® -M4F CPU for efficient computation of  complex  functions  and  algorithms,  integrated  power management (SIMO), and the newest generation Bluetooth ®   5.0  Low  Energy  (Bluetooth  LE),  long-range radio for wearable and hearable device applications.

## MAX32655 EV Kit Contents

- MAX32655 EV Kit Containing a MAX32655 with a Preprogrammed Demo
- One External Bluetooth Antenna
- MAX32625PICO Debugger with Cables
- JTAG Debugger with Ribbon Cable
- One USB Standard-A to Micro-B Cable
- One USB Standard-A to Standard-B Cable

Ordering Information appears at end of data sheet.

## MAX32655 EV Kit Board

<!-- image -->

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere. Bluetooth is a trademark of Bluetooth SIG, Inc.

©

## MAX32655 Evaluation Kit

## Benefits and Features

- External Bluetooth Antenna with SMA Interface
- Stereo Audio Codec with Line-In and Line-Out 3.5mm Jacks
- Digital Microphone
- 320 x 240 Color TFT Resistive Touch Display with an SPI Interface
- 128Mb Quad SPI Flash
- USB 2.0 Micro-B to Serial UARTs
- UART0 and LPUART Interface Selectable through On-Board Jumpers
- All GPIOs Signals Accessed through 0.1in Headers
- Access to the Eight Analog Inputs through 0.1in Headers
- 10-Pin SWD and RV JTAG Connectors
- Board Power Provided by USB Port
- On-Board 1.8V and 3.3V LDO Regulators
- MAX32655 Can be Solely Sourced by the Coin Cell Battery
- Individual Power Measurement on All IC Rails through Jumpers
- Two General-Purpose LEDs and Two GeneralPurpose Pushbutton Switches

319-100585; Rev 3; 5/22

One  Analog  Way,  Wilmington, MA  0187 U.SA. | Tel: 781.329.470 |      © 2022  Analog  Devices,  Inc.  All  rights  reserved. 2022 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## Quick Start

## Required Equipment

- MAX32655 EV Kit Containing a MAX32655 with a Preprogrammed Demo
- One USB Standard-A to Micro-B Cable

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) While observing safe ESD practices, carefully remove the  MAX32655  EV  kit  board  out  of  its  packaging. Inspect the board to ensure that no damage occurred during  shipment.  Jumpers/shunts  are  preinstalled prior to testing and packaging.
- 2) Power up the board by plugging in the provided USB cable to connector CN1. Verify that the 5V (DS1) blue LED (DS1) and the 3.3V (DS2) and 1.8V (DS2) green LEDs are illuminated.
- 3) The MAX32655 is preprogrammed with a demo program. The demo will now initiate and display the Maxim logo upon successful completion.

## Detailed Description of Hardware

## Power Supply

The EV kit is powered by +5V, which is made available through VBUS on the USB Micro-B connector CN1. A blue LED (DS1) illuminates when the board is powered. Green LEDs (DS2) and (DS3) illuminate when the 3V3 and 1V8 LDOs  are  powered,  respectively.  The  MAX32655  itself can be solely sourced by a coin cell battery or on-board 3.3V through the JP8 header.

## Current Monitoring

Two  pin  headers  provide  convenient  current  monitoring  points  for  VDDIOH  (JP10),  VDDIO  (JP12),  VDDA (JP14),  VCOREA  (JP16),  VCOREB  (JP18),  and  BLE\_ LDO (JP19).

## Low-Power Mode Current Measurements Precaution

When  attempting  to  measure  the  current  consumption modes, assure that R36 has been removed since it draws extra current.

Crystalfontz is a registered trademark of Crystalfontz America, Inc. Windows is a registered trademark of Microsoft Corporation.

## Clocking

The  MAX32655  clocking  is  provided  by  an  external 32MHz  crystal  (Y1)  and  an  external  32.768kHz  crystal (Y2) for RTC operation.

## Bluetooth 5.0 Interface

An  SMA  connector  is  provided  to  attach  an  external Bluetooth 2.4GHz antenna.

## Color TFT Display

The  display  provided  is  a  3.5in,  320  x  240  color  TFT with an integrated TFT controller from Crystalfontz ® . The resistive  touch  controller  is  a  separate  IC  that  is  connected to the SPI bus of the MAX32655.

## Audio Stereo Codec Interface

The MAX32655 interfaces to the MAX9867 external audio codec IC through its I 2 C and I 2 S ports. Line-in and lineout 3.5mm jacks are provided for audio access.

## Digital Microphone

The  MAX9867  codec  interfaces  to  a  miniature  digital microphone embedded on an IC.

## Memory

A  128Mb  QSPI  flash  is  provided  as  optional  external memory.

## JTAG Serial Wire Debug (SWD) Support

SWD debug can be accessed through the Cortex 10-pin connector, JH3. Logic levels are fixed to VDDIO (1.8V).

## RISC-V JTAG Test Port

RISC-V debug can be accessed through a Cortex 10-pin connector, JH4. Logic levels are fixed to VDDIO (1.8V).

## UART Interface

The  EV  kit  provides  a  USB-to-UART  bridge  chip,  FTDI FT230X.  This  bridge  eliminates  the  requirement  for  a physical  RS-232  COM  port.  Instead,  the  IC's  UART access is through the USB Micro-B connector, CN1. The USB-to-UART bridge can be connected to the IC's UART 0 or LPUART with jumpers JP4 (Rx) and JP5 (Tx). Virtual COM port drivers and guides for installing Windows ®  drivers are available at the FTDI chip website.

## GPIO and Alternate Function Headers

The  GPIO  and  alternate  function  signals  from  the MAX32655  can  be  accessed  through  the  0.1in  spaced headers JH6, JH7, JH8, JH9, and JH13.

## Evaluates: MAX32655

## MAX32655 Evaluation Kit

## Analog Headers

The eight  analog  outputs  can  be  accessed  through  the 0.1in spaced headers JH11 and JH12.

## I 2 C Pullups

I 2 C0 and I 2 C1 ports can independently pulled up to 1V8 or 3V3 through JP21 (I 2 C0) and JP22 (I 2 C1).

## Reset Pushbutton

The IC can be reset by pushbutton SW2.

## Table 1. MAX32655 EV Kit Jumper Settings

| JUMPER   | SIGNAL    | SETTINGS   | DESCRIPTION                                                 |
|----------|-----------|------------|-------------------------------------------------------------|
| JP1      | VREGI     | Open       | Disconnects power from VREGI                                |
| JP1      | VREGI     | Close*     | Connects power to VREGI                                     |
| JP2      | P0_24     | Open       | Disconnects red LED D1 from P0_24                           |
| JP2      | P0_24     | Close*     | Connects red LED D1 to P0_24                                |
| JP3      | P0_25     | Open       | Disconnects green LED D2 from P0_25                         |
| JP3      | P0_25     | Close*     | Connects green LED D2 to P0_25                              |
| JP4      | P2_6      | 2-1        | Connects the USB to serial UART to GPIO P2_6 (LPUART_RX)    |
| JP4      | P0_0      | 2-3*       | Connects the USB to serial UART to GPIO P0_0 (UART0_RX)     |
| JP5      | P2_7      | 2-1        | Connects the USB to serial UART to GPIO P2_7 (LPUART_TX)    |
| JP5      | P0_1      | 2-3*       | Connects the USB to serial UART to GPIO P0_1 (UART0_TX)     |
| JP6      | P0_2      | Open       | Disconnects the USB to serial UART to GPIO P0_2 (UART0_CTS) |
| JP6      | P0_2      | Close*     | Connects the USB to serial UART to GPIO P0_2 (UART0_CTS)    |
| JP7      | P0_3      | Open       | Disconnects the USB to serial UART to GPIO P0_3 (UART0_RTS) |
| JP7      | P0_3      | Close*     | Connects the USB to serial UART to GPIO P0_3 (UART0_RTS)    |
| JP8      | VREGI     | 2-1        | Connects the coin cell battery to VREGI                     |
| JP8      | VREGI     | 2-3*       | Connects the 3V3 to VREGI                                   |
| JP9      | VDDIOH_EN | 2-1*       | Connects VREGI to VDDIOH_EN jumper JP10                     |
| JP9      | VDDIOH_EN | 2-3        | Connects 3V3 to VDDIOH_EN jumper JP10                       |
| JP10     | VDDIOH    | Open       | Disconnects power from VDDIOH                               |
| JP10     | VDDIOH    | Close*     | Connects power to VDDIOH                                    |
| JP11     | VDDIO_EN  | 2-1*       | Connects VREGO_Ato VDDIO_EN jumper JP12                     |
| JP11     | VDDIO_EN  | 2-3        | Connects 1V8 to VDDIO_EN jumper JP12                        |
| JP12     | VDDIO     | Open       | Disconnects power from VDDIO                                |
| JP12     | VDDIO     | Close*     | Connects power to VDDIO                                     |
| JP13     | VDDA_EN   | 2-1*       | Connects VREGO_Ato VDDA_EN jumper JP14                      |
| JP13     | VDDA_EN   | 2-3        | Connects 1V8 to VDDA_EN jumper JP14                         |

## Indicator LEDs

General-purpose indicator LED D1 (red) is connected to GPIO P0.24, and LED D2 (green) is connected to GPIO P0.25.

## GPIO Pushbutton Switches

The  two  general-purpose  pushbuttons  (SW3  and  SW4) are connected to GPIO P0.18 and P1.19, respectively. If the pushbutton is pressed, the attached port pin is pulled low.

Evaluates: MAX32655

│

## Table 1. MAX32655 EV Kit Jumper Settings (continued)

| JUMPER   | SIGNAL      | SETTINGS   | DESCRIPTION                                               |
|----------|-------------|------------|-----------------------------------------------------------|
| JP14     | VDDA        | Open       | Disconnects power from VDDA                               |
| JP14     | VDDA        | Close*     | Connects power to VDDA                                    |
| JP15     | VCOREA_EN   | 2-1*       | Connects VREGO_C to VCOREA_EN jumper JP16                 |
| JP15     | VCOREA_EN   | 2-3        | Connects 1V1 to VCOREA_EN jumper JP16                     |
| JP16     | VCOREA      | Open       | Disconnects power from VCOREA                             |
| JP16     | VCOREA      | Close*     | Connects power to VCOREA                                  |
| JP17     | VCOREB_EN   | 2-1*       | Connects VREGO_B to VCOREB_EN jumper JP18                 |
| JP17     | VCOREB_EN   | 2-3        | Connects 1V1 to VCOREB_EN jumper JP18                     |
| JP18     | VCOREB      | Open       | Disconnects power from VCOREB                             |
| JP18     | VCOREB      | Close*     | Connects power to VCOREB                                  |
| JP19     | BLE_LDO     | Open       | Disconnects power from BLE_LDO                            |
| JP19     | BLE_LDO     | Close*     | Connects power to BLE_LDO                                 |
| JP20     | VREF        | 2-1*       | Connects VDDIO to VREF                                    |
| JP20     | VREF        | 2-3        | Connects VDDIOH to VREF                                   |
| JP21     | I2C0_PU     | 2-1*       | Connects VDDIO to I2C0_PU                                 |
| JP21     | I2C0_PU     | 2-3        | Connects VDDIOH to I2C0_PU                                |
| JP22     | I2C1_PU     | 2-1*       | Connects VDDIO to I2C1_PU                                 |
| JP22     | I2C1_PU     | 2-3        | Connects VDDIOH to I2C1_PU                                |
| JP23     | BOARD RESET | Open       | Disconnects RV JTAG NRESET from the BOARD RESET circuitry |
| JP23     | BOARD RESET | Close*     | Connects RV JTAG NRESET from the BOARD RESET circuitry    |

* Default setting

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX32655EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX32655

│

## MAX32655 Evaluation Kit

## MAX32655 EV Kit Bill of Materials

|   QTY | PART REFERENCE                                              | VALUE                  | BOM_DESCRIPTION                      | MANUFACTURER_PN        | MANUFACTURER       |
|-------|-------------------------------------------------------------|------------------------|--------------------------------------|------------------------|--------------------|
|     1 | BATT1                                                       | S8421-45R              | BATTERY HOLDER COIN 20MM SMD         | S8421-45R              | S8421-45R          |
|     1 | BATT2                                                       | CR2032                 | BATTERY LITHIUM COIN 3V 20MM         | CR2032                 | Panasonic - BSG    |
|     9 | C1 C9 C10 C11 C12 C13 C14 C17 C19                           | 1µF                    | CAP CER 1UF 16V 10% X5R 0402         | GRT155R61C105KE01D     | Murata Electronics |
|     1 | C2                                                          | 47µF                   | CAP CER 47µF 6.3V 20% X5R 0805       | C2012X5R0J476M125AC    | TDK Corporation    |
|    10 | C3 C18 C20 C23 C24 C25 C34 C35 C36 C41                      | 100nF                  | CAP CER 0.1µF 16V 10% X7R 0402       | GRM155R71C104KA88D     | Murata Electronics |
|     1 | C4                                                          | 3.3nF                  | CAP CER 3300PF 16V 10% X7R 0402      | GRM15XR71C332KA86D     | Murata Electronics |
|     4 | C5 C6 C7 C8                                                 | 22µF                   | CAP CER 22µF 6.3V 20% X5R 0603       | C1608X5R0J226M080AC    | TDK Corporation    |
|     2 | C15 C16                                                     | 16pF                   | CAP CER 16PF 50V 5% C0G/NP0 0402     | GRM1555C1H160JA01D     | Murata Electronics |
|    15 | C21 C22 C26 C27 C28 C29 C30 C31 C32 C33 C37 C38 C39 C40 C45 | DNI                    | DNI                                  |                        |                    |
|     3 | C42 C43 C71                                                 | 1µF                    | CAP CER 1µF 6.3V 10% X5R 0402        | JMK105BJ105KV-F        | Taiyo Yuden        |
|     7 | C44 C46 C48 C49 C50 C52 C53                                 | 1µF                    | CAP CER 1µF 16V 10% X7R 0603         | GCM188R71C105KA64D     | Murata             |
|     1 | C47                                                         | 2.2µF                  | CAP CER 2.2µF 10V 10% X5R 0603       | C0603C225K8PACTU       | Kemet              |
|     7 | C51 C54 C57 C58 C61 C68 C70                                 | 100nF                  | CAP CER 0.1µF 10V 10% X5R 0402       | GRM155R61A104KA01D     | Murata             |
|     2 | C55 C56                                                     | 18pF                   | CAP CER 18PF 50V 5% NP0 0402         | GRM1555C1H180JA01D     | Murata             |
|     2 | C59 C60                                                     | 47pF                   | CAP CER 47PF 50V 1% NP0 0402         | C1005C0G1H470F050BA    | TDK Corporation    |
|     1 | C62                                                         | 4.7µF                  | CAP CER 4.7µF 10V 10% X5R 0603       | C0603C475K8PACTU       | Kemet              |
|     1 | C63                                                         | 10nF                   | CAP CER 10000PF 25V 10% X7R 0603     | CL10B103KA8NNNC        | Samsung            |
|     1 | C64                                                         | 100nF                  | CAP CER 0.1µF 16V 10% X7R 0603       | C0603C104K4RACTU       | Kemet              |
|     1 | C65                                                         | 10nF                   | CAP CER 10000PF 16V 10% X7R 0402     | GRM155R71C103KA01D     | Murata Electronics |
|     2 | C66 C69                                                     | 10µF                   | CAP CER 10µF 6.3V 20% X5R 0402       | GRJ155R60J106ME11D     | Murata Electronics |
|     1 | C67                                                         | 1µF                    | CAP CER 1µF 35V 10% X5R 0603         | GMK107BJ105KA-T        | Taiyo Yuden        |
|     1 | CN1                                                         | MICRO USB B R/A        | CONN RCPT 5POS MICRO USB B R/A       | 47346-0001             | Molex              |
|     1 | D1                                                          | RED                    | LED 660NM RED WTR CLR 1206 SMD       | SML-LX1206SRC-TR       | Lumex Opto         |
|     3 | D2 DS2 DS3                                                  | GRN                    | LED 565NM WTR CLR GREEN 1206 SMD     | SML-LX1206GC-TR        | Lumex Opto         |
|     1 | DS1                                                         | BLUE                   | LED 469NM BLUE DIFF 1206 SMD         | HSMR-C150              | Avago Technologies |
|     1 | DSP1                                                        | 42P (2x21)             | CONN RCPT 42P 0.100" SMD             | HLE-121-02-f-dv        | Samtec Inc.        |
|     1 | DSP2                                                        | CFAF320240F-035T-TS-CB | 320x240 Color TFT with Carrier Board | CFAF320240F-035T-TS-CB | Crystalfontz       |
|     8 | H1 H2 H3 H4 H5 H6 H7 H8                                     | DNI                    | DNI MTG 125DRL 300PAD                |                        |                    |
|     1 | J1                                                          | SMA                    | CONN SMA JACK STR 50 ΩPCB            | 5-1814832-1            | TE Connectivity    |
|     2 | J2 J3                                                       | SJ-3523-SMT-TR         | CONN JACK STEREO 3.5MM SMD R/A       | SJ-3523-SMT-TR         | CUI Inc            |
|     1 | JH1                                                         | 10P 2x5 Tall           | CONN HEADER VERT 10POS 2.54MM        | TSW-105-15-G-D         | Samtec Inc.        |
|     2 | JH3 JH4                                                     | 10P CORTEX DEBUG       | IDC BOX HEADER 0.050 10 POS SMD      | 3220-10-0300-00        | CNC Tech           |
|     2 | JH6 JH7                                                     | 18P 2x9                | CONN HEADER .100 DUAL STR 18POS      | PEC09DAAN              | Sullins            |
|     1 | JH8                                                         | 12P 2x6                | CONN HEADER .100 DUAL STR 12POS      | PEC06DAAN              | Sullins            |

Evaluates: MAX32655

## MAX32655 EV Kit Bill of Materials (continued)

|   QTY | PART REFERENCE                                         | VALUE           | BOM_DESCRIPTION                     | MANUFACTURER_PN   | MANUFACTURER           |
|-------|--------------------------------------------------------|-----------------|-------------------------------------|-------------------|------------------------|
|    12 | JH9 JP4 JP5 JP8 JP9 JP11 JP13 JP15 JP17 JP20 JP21 JP22 | 3P 3x1          | CONN HEADER .100 SINGL STR 3POS     | PEC03SAAN         | Sullins                |
|     2 | JH11 JH12                                              | 8P 2x4          | CONN HEADER .100 DUAL STR 8POS      | PEC04DAAN         | Sullins                |
|     1 | JH13                                                   | 10P 2x5         | CONN HEADER .100 DUAL STR 10POS     | PEC05DAAN         | Sullins                |
|    12 | JP1 JP2 JP3 JP6 JP7 JP10 JP12 JP14 JP16 JP18 JP19 JP23 | JUMPER          | CONN HEADER .100 SINGL STR 2POS     | PEC02SAAN         | Sullins                |
|     1 | L1                                                     | 2.2µH           | FIXED IND 2.2µH 1A 150 M Ω SMD 0805 | MLP2012H2R2MT0S1  | TDK Corporation        |
|     1 | L2                                                     | HZ1206C202R-10  | FERRITE CHIP SIGNAL 2000Ω SMD       | HZ1206C202R-10    | Laird-Signal Integrity |
|     1 | L3                                                     | BLM21PG221SN1D  | FERRITE CHIP 220Ω 0805              | BLM21PG221SN1D    | Murata Electronics     |
|     1 | PCB1                                                   | PCB             |                                     |                   |                        |
|     1 | Q1                                                     | BSS806N         | MOSFET N-CH 20V 2.3A SOT23          | BSS806N H6327     | Infineon Technologies  |
|     4 | R1 R2 R3 R4                                            | 2K              | RES 2KΩ 1/10W 1% 0603 SMD           | ERJ-3EKF2001V     | Panasonic              |
|     8 | R5 R6 R9 R11 R13 R15 R17 R19                           | 0               | RES 0.0Ω 1/10W JUMP 0402 SMD        | ERJ-2GE0R00X      | Panasonic              |
|     4 | R7 R8 R35                                              | 33.2            | RES SMD 33.2Ω 1% 1/10W 0402         | ERJ-2RKF33R2X     | Panasonic              |
|     1 | R36                                                    | 33.2            | RES SMD 33.2Ω 1% 1/10W 0402         | ERJ-2RKF33R2K     | Panasonic              |
|     1 | R14                                                    | 27K             | RES 27KΩ 1/10W 1% 0402 SMD          | ERJ-2RKF2702X     | Panasonic              |
|     2 | R21 R22                                                | 100             | RES SMD 100Ω 1% 1/10W 0603          | RC0603FR-07100RL  | Yageo                  |
|     1 | R23                                                    | 470             | RES 470Ω 1/10W 1% 0603 SMD          | ERJ-3EKF4700V     | Panasonic              |
|     3 | R24 R47 R48                                            | 332             | RES 332Ω 1/10W 1% 0603 SMD          | ERJ-3EKF3320V     | Panasonic              |
|     4 | R25 R29 R31 R32                                        | 10K             | RES SMD 10KΩ 1% 1/16W 0402          | RC0402FR-0710KL   | Yageo                  |
|     1 | R26                                                    | 10K             | RES SMD 10KΩ 1% 1/16W 0402          | RC0402FR-0710KL   | Yageo                  |
|     4 | R10, R27 R30 R38                                       | 0               | RES SMD 0Ω JUMPER 1/10W 0603        | RC0603JR-070RL    | Yageo                  |
|     1 | R28                                                    | 0               | RES SMD 0Ω JUMPER 1/10W 0603        | RC0603JR-070RL    | Yageo                  |
|     1 | R33                                                    | 150             | RES SMD 150Ω 1% 1/10W 0402          | ERJ-2RKF1500X     | Panasonic              |
|     1 | R34                                                    | 1M              | RES SMD1MΩ1% 1/10W 0402             | ERJ-2RKF1004X     | Panasonic              |
|     1 | R37                                                    | 33.2            | RES SMD 33.2Ω 1% 1/10W 0402         | ERJ-2RKF33R2X     | Panasonic              |
|     4 | R39 R43 R44 R46                                        | 10K             | RES 10KΩ 1/10W 1% 0603 SMD          | ERJ-3EKF1002V     | Panasonic              |
|     2 | R40 R41                                                | 27              | RES 27 Ω1/10W 1% 0603 SMD           | ERJ-3EKF27R0V     | Panasonic              |
|     1 | R42                                                    | 2.7K            | RES 2.7KΩ 1/10W 1% 0603 SMD         | ERJ-3EKF2701V     | Panasonic              |
|     1 | R45                                                    | 1M              | RES SMD1MΩ5% 1/8W 0805              | ERJ-6GEYJ105V     | Panasonic              |
|     1 | R49                                                    | 150K            | RES 150KΩ 1/10W 1% 0603 SMD         | ERJ-3EKF1503V     | Panasonic              |
|     1 | SW1                                                    | B3S-1002 BY OMZ | SWITCH TACTILE SPST-NO 0.05A 24V    | B3S-1002 BY OMZ   | Omron Electronics      |
|     3 | SW2 SW3 SW4                                            | B3S-1000P       | SWITCH TACTILE SPST-NO 0.05A 24V    | B3S-1000P         | Omron Electronics      |
|     1 | SW5                                                    | SPDT 3A         | SWITCH TOGGLE SPDT 3A 120V          | ET01MD1AGE        | C&K Components         |
|     2 | TP1 TP3                                                | RED             | TEST POINT PC MULTI PURPOSE RED     | 5010              | Keystone Electronics   |
|     1 | TP2                                                    | WHT             | TEST POINT PC MULTI PURPOSE WHT     | 5012              | Keystone Electronics   |

Evaluates: MAX32655

## MAX32655 EV Kit Bill of Materials (continued)

|   QTY | PART REFERENCE   | VALUE            | BOM_DESCRIPTION                  | MANUFACTURER_PN        | MANUFACTURER            |
|-------|------------------|------------------|----------------------------------|------------------------|-------------------------|
|     3 | TP4 TP6 TP7      | BLK              | TEST POINT PC MULTI PURPOSE BLK  | 5011                   | Keystone Electronics    |
|     2 | TP5 TP8          | 1P               | CONN HEADER .100 SINGL STR 1POS  | PEC01SAAN              | Sullins                 |
|     1 | TP9              | DNI              | DNI 28 DRILL 50 PAD              |                        |                         |
|     1 | U1               | MAX32655GXG+     | MAX32655GXG+ 81P BGA             | MAX32655GXG+           | Maxim Integrated        |
|     1 | U2               | W25Q128FVSIG     | IC FLASH 128MBIT 104MHZ 8SOIC    | W25Q128FVSIG           | Winbond Electronics     |
|     1 | U3               | MAX6816EUS+T     | IC INTFACE SPECIALIZED SOT143-4  | MAX6816EUS+TCT-ND      | Maxim Integrated        |
|     1 | U4               | NL27WZ07DFT2G    | IC BUFFER NON-INVERT 5.5V SC88   | NL27WZ07DFT2G          | ON Semiconductor        |
|     1 | U5               | TSC2046IPWR      | IC TOUCH SCREEN CTRLR LV 16TSSOP | TSC2046IPWR            | TI                      |
|     1 | U6               | MAX9867ETJ+T     | IC STEREO AUD CODEC LP 32TQFN    | MAX9867ETJ+T           | Maxim Integrated        |
|     1 | U7               | SN74LVC1GU04DCKT | IC SINGLE INVERTER GATE SC70-5   | SN74LVC1GU04DCKT       | Texas Instruments       |
|     1 | U8               | NC7WZ17P6X       | IC BUFF DL SCHMT TRIG UHS SC706  | NC7WZ17P6X             | Fairchild Semiconductor |
|     1 | U9               | SPH0641LM4H-1    | SILICON DIGITAL MICROPHONE       | SPH0641LM4H-1          | Knowles                 |
|     1 | U10              | FT230XS-R        | IC USB SERIAL BASIC UART 16SSOP  | FT230XS-R              | FTDI                    |
|     1 | U11              | MAX3207EAUT+T    | ESD PROT DIFF SOT23-6            | MAX3207EAUT+T          | Maxim Integrated        |
|     1 | U12              | MAX1806EUA33+    | IC REG LDO 3.3V/ADJ 0.5A 8UMAX   | MAX1806EUA33+          | Maxim Integrated        |
|     1 | U13              | MAX1806EUA18+    | Low Dropout Linear Regulator     | MAX1806EUA18+          | Maxim Integrated        |
|     1 | Y1               | 32 MHZ           | CRYSTAL 32.00 MHZ 12PF SMD       | FA-20H 32.0000MF12Y-W3 | EPSON                   |
|     1 | Y2               | 32.768kHz        | CRYSTAL 32.768KHZ 6.0PF SMD      | ABS07-32.768KHZ-6-T    | Abracon Corp            |
|     1 | Y3               | 12.288Mhz        | CRYSTAL 12.2880MHZ 18PF SMD      | ABM3-12.288MHZ-B4Y-T   | Abracon Corporation     |

Evaluates: MAX32655

## MAX32655 EV Kit Schematic Diagrams

<!-- image -->

Evaluates: MAX32655

## MAX32655 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

## MAX32655 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

## MAX32655 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

## MAX32655 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

## MAX32655 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

Evaluates: MAX32655

## MAX32655 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

## MAX32655 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                          | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/20            | Initial release                                                                                                                      | -               |
|                 1 | 9/20            | Updated MAX32655 EV Kit Photo , MAX32655 EV Kit Bill of Materials , MAX32655 EV Kit Schematic Diagrams                               | 1, 5-14         |
|                 2 | 1/21            | Added Low-Power Mode Current Measurements Precaution section, MAX32655 EV Kit Bill of Materials , MAX32655 EV Kit Schematic Diagrams | 2, 6, 8-14      |
|                 3 | 5/22            | Replaced MAX32655 EV Kit Board , Updated MAX32655 EV Kit Bill of Materials and MAX32655 EV Kit Schematic Diagrams                    | 1, 7-14         |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX32655