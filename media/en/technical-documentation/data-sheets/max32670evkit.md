<!-- lastmod 2022-08-03 -->
## MAX32670 Evaluation Kit

## General Description

The  MAX32670  evaluation  kit  (EV  kit)  provides  a  platform  for  evaluation  capabilities  of  the  MAX32670.  The MAX32670  is  an  ultra-low-power,  cost-effective,  highly reliable  32-bit  microcontroller  that  enables  designs  with complex sensor processing without compromising battery life.  It  combines  a  flexible  and  versatile  power  management unit with the powerful Arm ®  Cortex ® -M4 core with floating  point  unit  (FPU).  The  MAX32670  also  offers legacy  designs  an  easy  and  cost  optimal  upgrade  path from 8-bit or 16-bit microcontrollers.

## EV Kit Contents

- MAX32670 EV kit containing a MAX32670
- One standard A to Micro B USB cable

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX32670EVKIT# | EV Kit |

#Denotes RoHS compliance.

## MAX32670 EV Kit Board

<!-- image -->

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

<!-- image -->

## Features

- USB 2.0 Micro B to Serial UART Bridge
- UART0 and UART3 Interface is Selectable Through On-Board Jumpers
- On-Board MAX32625PICO-Based Debugger
- Boot Load Enable Circuitry
- SPI and I 2 C Signals Accessed Through 0.1in Headers
- GPIOs and Miscellaneous Signals Accessed Through 0.1in Headers
- Board Power Provided by USB Port
- On-Board SIMO Regulator and LDO for IC and Peripherals
- Individual Power Measurement on all IC Rails Through Jumpers
- Two General-Purpose LED and One GeneralPurpose Pushbutton Switch

Evaluates: MAX32670

## MAX32670 Evaluation Kit

## Quick Start

## Required Equipment

- MAX32670 EV kit
- One standard A to Micro B USB cable

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

- 1) While observing safe ESD practices, carefully remove the MAX32670 EV kit board out of its packaging. Inspect the board to ensure that no damage occurred during shipment. Jumpers/shunts are preinstalled prior to testing and packaging.
- 2) Power up the board by plugging in the provided USB cable to connector CN1. Verify that the blue LED (D4) illuminates and that the green LED (D2) flashes indi -cating successful completion of board diagnostics.

## Detailed Description of Hardware (or Software)

## Power Supply

The  EV  kit  is  powered  by  +5V  that  is  made  available through V BUS  on the Micro-USB type-B connector CN1.

## Current Monitoring

Two pin  headers  provide  convenient  current  monitoring points for V DD  (JP5) and V CORE  (JP6).

## Low-Power Mode Current Measurements

When attempting to measure the current consumption for any of the low-power modes, remove jumpers JP3 and JP4.

## Clocking

The  MAX32670  clocking  is  provided  by  an  external 32MHz  crystal  (Y1)  and  an  external  32.768kHz  crystal (Y2) for RTC operations.

Evaluates: MAX32670

## Programming and Debugging

The  MAX32670  EV  kit  integrates  a  MAX32625PICObased debugger for DAPLink functionality.

## UART Interface

A USB-to-UART bridge, implemented in the MAX32625, eliminates  the  requirement  for  a  physical  RS-232  COM port. The bridge can be connected to UART0 or LPUART0 of the IC with jumpers JP3 (Rx) and JP4 (Tx).

## Host Interface Headers

The EV kit can communicate by SPI, I 2 C or UART to the Host processor through 0.1in spaced headers JH2 (SPI), JH3 (I 2 C) and connector CN1 (UART). The interface type is set by ISEL0 jumper JP7 and ISEL1 jumper JP8.

## GPIO and Alternate Function Headers

GPIO and alternate function signals from the MAX32670 can be accessed through 0.1in spaced headers JH1 and JH2.

## SPI0 Header

SPI0  signals  from  the  MAX32670  can  be  accessed through 0.1in spaced header JH3.

## Reset Pushbutton

The IC can be reset by pushbutton SW2.

## Boot Loader

Boot  load  is  activated  by  boot  load  enable  slide  switch SW1.

## Indicator LEDs

General-purpose indicators LED D1 (red) is connected to GPIO P0.22 and LED D2 (green) is connected to GPIO P0.23

## GPIO Pushbutton Switch

General-purpose pushbutton SW3  is connected to GPIO21. If the pushbutton is pressed, the attached port pin is pulled low.

│

## Table 1. MAX32670 EV Kit Jumper Settings

| JUMPER   | SIGNAL     | SETTINGS   | DESCRIPTION                                        |
|----------|------------|------------|----------------------------------------------------|
| JP1      | P0_22      | Open       | Disconnects red LED from P0_22                     |
| JP1      | P0_22      | *Close     | Connects red to P0_22                              |
| JP2      | P0_23      | Open       | Disconnects green LED from P0_23                   |
| JP2      | P0_23      | *Close     | Connects green LED to P0_23                        |
| JP3      | P0_20      | *2-1       | Connects the USB to serial port P0_8 (UART0_RX)    |
| JP3      | P0_26      | 2-3        | Connects the USB to serial port P0_26 (LPUART0_RX) |
| JP4      | P0_9       | *2-1       | Connects the USB to serial port P0_9 (UART0_TX)    |
| JP4      | P0_27      | 2-3        | Connects the USB to serial port P0_27 (LPUART0_TX) |
| JP5      | VDD        | Open       | Disconnects power to VDD                           |
| JP5      | VDD        | *Close     | Connects power to VDD                              |
| JP6      | VCORE      | Open       | Disconnects power to VCORE                         |
| JP6      | VCORE      | *Close     | Connects power to VCORE                            |
| JP7      | SIMO RSEL2 | 1-2        | Sets output 2 of the SIMO regulator to 0.9V        |
| JP7      | SIMO RSEL2 | *3-4       | Sets output 2 of the SIMO regulator to 1.0V        |
| JP7      | SIMO RSEL2 | 5-6        | Sets output 2 of the SIMO regulator to 1.1V        |

* Default setting.

Evaluates: MAX32670

│

## MAX32670 EV Kit Bill of Materials

|   QTY | PART REFERENCE              | VALUE              | BOM_DESCRIPTION                          | MANUFACTURER_PN     | MANUFACTURER                    |
|-------|-----------------------------|--------------------|------------------------------------------|---------------------|---------------------------------|
|     2 | C1, C2                      | 12pF               | CAP CER 12PF 50V 5% NP0 0402             | CL05C120JB5NNNC     | Samsung Electronics             |
|     2 | C3, C4                      | DNI                | 0402                                     |                     |                                 |
|     1 | C5                          | 4.7nF              | CAP CER 4700PF 50V 5% X7R 0402           | GRM155R71H472JA01D  | Murata Electronics              |
|     3 | C6, C8, C10                 | 100nF              | CAP CER 0.1UF 16V 10% X7R 0402           | GRM155R71C104KA88D  | Murata Electronics              |
|     2 | C7, C9                      | 1uF                | CAP CER 1UF 16V 10% X5R 0402             | GRT155R61C105KE01D  | Murata Electronics              |
|     1 | C11                         | 100nF              | CAP CER 0.1UF 25V 10% X8R 0603           | C1608X8R1E104K080AA | TDK Corporation                 |
|     2 | C12, C13                    | 1uF                | CAP CER 1UF 35V 10% X5R 0603             | GMK107BJ105KA-T     | Taiyo Yuden                     |
|     6 | C14, C15, C16 C17, C18, C19 | 1uF                | CAP CER 1UF 10V 20 %X5R 0402             | C0402C105M8PACTU    | Kemet                           |
|     3 | C20, C21, C23               | 10uF               | CAP CER 10UF 6.3V 20% X5R 0603           | CL10A106MQ8NNNC     | Samsung Electro                 |
|     1 | C22                         | 10uF               | CAP CER 10UF 25V 10% X7S 0805            | GRM21BC71E106KE11L  | Murata Electronics              |
|     1 | C24                         | 4.7uF              | CAP CER 4.7UF 4V 20% X5R 0402            | AMK105BJ475MV-F     | Taiyo Yuden                     |
|     1 | C25                         | 3.3nF              | CAP CER 3300PF 16V 10% X7R 0402          | GRM15XR71C332KA86D  | Murata Electronics              |
|     1 | CN1                         | MICRO USB B R/A    | CONN RCPT 5POS MICRO USB B R/A           | 47346-0001          | Molex                           |
|     1 | D1                          | RED                | LED 660NM RED WTR CLR 1206 SMD           | SML-LX1206SRC-TR    | Lumex Opto                      |
|     1 | D2                          | GRN                | LED 565NM WTR CLR GREEN 1206 SMD         | SML-LX1206GC-TR     | Lumex Opto                      |
|     1 | D3                          | SML-LX0404SIUPGUSB | LED RGB CLEAR 0404 SMD                   | SML-LX0404SIUPGUSB  | Lumex Opto                      |
|     1 | D4                          | BLUE               | LED 469NM BLUE DIFF 1206 SMD             | HSMR-C150           | Avago Technologies US Inc.      |
|     4 | H1, H2, H3, H4              | DNI                | DNI MTG 125DRL 300PAD                    |                     |                                 |
|     1 | J1                          | SMA - DNI          | CONN SMA JACK STR 50 OHMPCB              | 5-1814832-1         | TE Connectivity                 |
|     1 | J2                          | MAXDAP             | MAXDAP_POGO_PIN CBL PLUG-OF-NAILS 10-PIN | TC2050-IDC-NL       | Tag-Connect LLC                 |
|     2 | JH1, JH2                    | 18P 2x9            | CONN HEADER .100 DUAL STR 18POS          | PEC09DAAN           | Sullins                         |
|     1 | JH3                         | 10P 2x5            | CONN HEADER .100 DUAL STR 10POS          | PEC05DAAN           | Sullins                         |
|     4 | JP1, JP2, JP5, JP6          | JUMPER             | CONN HEADER .100 SINGL STR 2POS (2x1)    | PEC02SAAN           | Sullins                         |
|     2 | JP3, JP4                    | 3P 3x1             | CONN HEADER .100 SINGL STR 3POS          | PEC03SAAN           | Sullins                         |
|     1 | JP7                         | 6P 2x3             | CONN HEADER .100 DUAL STR 6POS           | PEC03DAAN           | Sullins                         |
|     1 | L1                          | HZ1206C202R-10     | FERRITE CHIP SIGNAL2000OHMSMD            | HZ1206C202R-10      | Laird-Signal Integrity Products |
|     1 | L2                          | BLM21PG221SN1D     | FERRITE CHIP 220 OHM0805                 | BLM21PG221SN1D      | Murata Electronics              |
|     1 | L3                          | 2.2uH              | FIXED IND 2.2UH 1A 150 MOHMSMD0805       | MLP2012H2R2MT0S1    | TDK Corporation                 |
|     1 | PCB1                        | PCB                |                                          |                     |                                 |
|     2 | Q1, Q2                      | VP2110K1-G         | MOSFET P-CH 100V 0.12A SOT23-3           | VP2110K1-G          | Microchip Technology            |
|     2 | R1, R27                     | 0                  | RES SMD 0 OHMJUMPER 1/10W 0603           | RC0603JR-070RL      | Yageo                           |
|     2 | R2, R28                     | 0 - DNI            | RES SMD 0 OHMJUMPER 1/10W 0603           | RC0603JR-070RL      | Yageo                           |
|     7 | R3, R4, R5, R6, R7, R8, R26 | 10K                | RES 10K OHM1/10W 1% 0603 SMD             | ERJ-3EKF1002V       | Panasonic                       |
|     2 | R9, R10                     | 1K                 | RES 1K OHM1/10W 1% 0603 SMD              | ERJ-3EKF1001V       | Panasonic                       |

│

Evaluates: MAX32670

## MAX32670 EV Kit Bill of Materials (continued)

|   QTY | PART REFERENCE   | VALUE            | BOM_DESCRIPTION                           | MANUFACTURER_PN      | MANUFACTURER            |
|-------|------------------|------------------|-------------------------------------------|----------------------|-------------------------|
|     2 | R11, R13         | 150K             | RES 150K OHM1/10W 1% 0603 SMD             | ERJ-3EKF1503V        | Panasonic               |
|     1 | R12              | 470              | RES 470 OHM1/10W 1% 0603 SMD              | ERJ-3EKF4700V        | Panasonic               |
|     1 | R14              | 332              | RES 332 OHM1/10W 1% 0603 SMD              | ERJ-3EKF3320V        | Panasonic               |
|     1 | R15              | 100              | RES SMD 100 OHM1%1/10W 0603               | RC0603FR-07100RL     | Yageo                   |
|     1 | R16              | 2.7K             | RES SMD 2.7K OHM1%1/10W 0402              | ERJ-2RKF2701X        | Panasonic               |
|     1 | R17              | 1.4K             | RES SMD 1.4K OHM1%1/10W 0402              | ERJ-2RKF1401X        | Panasonic               |
|     1 | R18              | 1K               | RES 1K OHM1/10W 1% 0402 SMD               | ERJ-2RKF1001X        | Panasonic               |
|     1 | R19              | 1M               | RES SMD 1MOHM5%1/8W0805                   | ERJ-6GEYJ105V        | Panasonic               |
|     1 | R20              | 2.7K             | RES 2.7K OHM1/10W 1% 0603 SMD             | ERJ-3EKF2701V        | Panasonic               |
|     1 | R21              | 133K             | RES SMD 133K OHM1%1/10W 0603              | ERJ-3EKF1333V        | Panasonic               |
|     1 | R22              | 324K             | RES SMD 324K OHM1%1/10W 0603              | ERJ-3EKF3243V        | Panasonic               |
|     1 | R23              | 909K             | RES SMD 909K OHM1%1/10W 0603              | ERJ-3EKF9093V        | Panasonic               |
|     1 | R24              | 768K             | RES SMD 768K OHM1%1/10W 0603              | ERJ-3EKF7683V        | Panasonic               |
|     1 | R25              | 634K             | RES SMD 634K OHM1%1/10W 0603              | ERJ-3EKF6343V        | Panasonic               |
|     1 | SW1              | CL-SB-12A-01T    | SWITCH SLIDE SPDT 200MA 12V               | CL-SB-12A-01T        | Nidec Copal Electronics |
|     1 | SW2              | B3S-1002 BY OMZ  | SWITCH TACTILE SPST-NO 0.05A 24V          | B3S-1002 BY OMZ      | Omron Electronics       |
|     1 | SW3              | B3S-1000P        | SWITCH TACTILE SPST-NO 0.05A 24V          | B3S-1000P            | Omron Electronics       |
|     1 | SW4              | B3U-1000P        | SWITCH TACTILE SPST-NO 0.05A 12V          | B3U-1000P            | Omron Electronics       |
|     1 | TP1              | YLW              | TEST POINT PC MULTI PURPOSE YEL           | 5014                 | Keystone Electronics    |
|     1 | TP2              | 1P               | CONN HEADER .100 SINGL STR 1POS           | PEC01SAAN            | Sullins                 |
|     2 | TP3, TP4         | BLK              | TEST POINT PC MULTI PURPOSE BLK           | 5011                 | Keystone Electronics    |
|     1 | TP5              | GRN              | TEST POINT PC MULTI PURPOSE GRN           | 5126                 | Keystone Electronics    |
|     1 | U1               | MAX32670GTL+     | MAX32670GTL+ 40P TQFN                     | MAX32670GTL+         | Maxim Integrate         |
|     1 | U2               | NC7WZ08K8X       | IC GATE AND 2CH 2-INP US8                 | NC7WZ08K8X           | ON Semiconductor        |
|     1 | U3               | MAX13202EALT+T   | ESD PROTECT 2CH 6-UDFN                    | MAX13202EALT+        | Maxim Integrated        |
|     1 | U4               | MAX32625ITK+     | MAX32625ITK+ 68P TQFN                     | MAX32625ITK+         | Maxim Integrated        |
|     1 | U5               | MAX17270ETE+     | IC REG BCK BST PROG TRPL 16TQFN           | MAX17270ETE+         | Maxim Integrate         |
|     1 | U6               | MAX1976AEZT120+T | LDO Regulator Pos 1.2V 0.3A 6-Pin TSOT-23 | MAX1976AEZT120+T     | Maxim Integrated        |
|     1 | Y1               | 32 MHZ           | CRYSTAL 32.0000MHZ 13PF SMD               | ECS-320-13-42-CKM-TR | ECS Inc.                |
|     2 | Y2, Y3           | 32.768kHz        | CRYSTAL 32.768KHZ 6.0PF SMD               | ABS07-32.768KHZ-6-T  | Abracon Corp            |

Evaluates: MAX32670

## MAX32670 EV Kit Schematics

<!-- image -->

## MAX32670 EV Kit Schematics (continued)

<!-- image -->

│

## MAX32670 EV Kit Schematics (continued)

<!-- image -->

## MAX32670 EV Kit Schematics (continued)

<!-- image -->

## MAX32670 EV Kit Schematics (continued)

<!-- image -->

## MAX32670 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                    | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 4/20            | Initial release                                                                                                | -               |
|                 1 | 10/20           | Updated MAX32670 EV Kit Bill of Materials section and MAX32670 EV Kit Schematics section                       | 4, 6-10         |
|                 2 | 1/21            | Updated MAX32670 EV Kit Board , added Low-Power Mode Current Measurements section, updated MAX32670 Schematics | 1, 2, 6-10      |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are imSlied  0a[im ,ntegrated reserYes the right tR Fhange the FirFuitr\ and sSeFi¿FatiRns ZithRut nRtiFe at an\ time

│

Evaluates: MAX32670