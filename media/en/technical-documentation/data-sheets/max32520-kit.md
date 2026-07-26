<!-- lastmod 2022-08-03 -->
## MAX32520 Evaluation Kit

## General Description

The MAX32520 evaluation kit (EV kit) provides a platform for  evaluation  capabilities  of  the  MAX32520  for  secure element IoT utilizing Maxim's proprietary PUF (physically unclonable function) technology.

The MAX32520 integrates an Arm® Cortex® M4 processor with FPU, 2MB of flash, 136KB of system RAM and 34KB ECC, 8KB of one-time-programmable (OTP) mem -ory and 128KB of boot ROM. It provides a FIPS/ compli -ant TRNG, as well as environmental and tamper detection circuitry  to  facilitate  system-level  security.  Multiple  high speed interfaces are supported including SPI, UART, and an I 2 C. One of the SPI ports has a serial flash emulation mode allowing direct code fetching enabling secure boot from a host microcontroller.

## EV Kit Contents

- MAX32520 EV kit containing a MAX32520 with a preprogrammed demo
- MAX32625PICO# EV kit
- One standard A to Micro B USB cable

Ordering Information appears at end of data sheet.

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

ChipDNA is a trademark of Maxim Integrated Products, Inc.

## Features

- Arm® Cortex® M4 Processor with FPU with ChipDNA™ PUF Technology
- USB 2.0 Micro B to Serial UART
- Serial UART Access Selectable Through a USB 2.0 Serial Bridge or from an Optional Host Processor
- Security Self-Destruct Jumper
- Arm® or SWD JTAG 20-Pin Header and Cortex 10-Pin Header
- 40-Pin Connector for Interfacing to a Host Processor
- 16-Pin Ribbon Cable Connector for Interfacing to QSPI
- Three PMOD Connectors for Interfacing to SPI, I 2 C, or Timer Modules
- Select GPIOs Accessed Through Shared 0.1in Headers
- Board Power Provided by Either USB Port or from a Host Processor
- Onboard 1.8V, 2.5V, and 3.3V Regulators for IC and Peripherals
- Individual Power Measurement on All IC Rails Through Jumpers
- Two General-Purpose LEDs and One GeneralPurpose Pushbutton Switch

<!-- image -->

Evaluates: MAX32520

## MAX32520 Evaluation Kit

## MAX32520 EV Kit Board

<!-- image -->

## Quick Start

## Required Equipment

- MAX32520 EV kit
- One standard A to Micro B USB cable

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) While observing safe ESD practices, carefully remove the MAX32520 EV kit board out of its packaging. Inspect the board to ensure that no damage occurred during shipment. Jumpers/shunts are preinstalled prior to testing and packaging.
- 2) The MAX32520 is preprogrammed with a demo program. To run the demo, power up the board by plugging in the provided USB cable to connector CN1. Verify that the blue LED (D6) and the green LEDs (D7, D8, and D9) are illuminated.
- 3) Once power is applied, the demo initiates and flashes the green LED (D3) upon successful completion.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Detailed Description of Hardware (or Software)

## Power Supply

The EV kit is powered by +5V, which is made available through VBUS on the Micro-USB type-B connector CN1 or  from  the  host  processor  through  a  40-pin  connector (J1).  The  board  is  default  jumpered  for  power  provided by CN1.

## Current Monitoring

Two pin  headers  provide  convenient  current  monitoring points for VDD (JP11) and VDDA (JP12).

## UART Interface

The  EV  kit  provides  a  USB-to-UART  bridge  chip,  FTDI FT230X.  This  bridge  eliminates  the  requirement  for  a physical  RS-232  COM  port.  Instead,  the  IC's  UART access  is  through  the  Micro-USB  type-B  connector, CN1. The USB-to-UART bridge or the serial port of the host  processor  can  be  connected  to  the  UART  of  the IC  by  configuring  jumpers  JP7  (RX  SEL)  and  JP8  (TX SEL). Virtual COM port drivers and guides for installing Windows® drivers are available at the FTDI chip website.

│

## MAX32520 Evaluation Kit

## External Tamper Sensor

Jumper  JP2  shorts  the  EXT\_SENSOR\_OUT  to  EXT\_ SENSOR\_IN pin. When open, a tamper detection event occurs and illuminates the red tamper LED (D1).

## PMOD Connectors

Three  6-pin  PMOD  0.1in  spaced  edge  connectors  are provided for interfacing to I 2 C (JH2), SPI (JH3), and timer (JH5) modules.

## Host Processor Connector

A 40-pin 0.1in spaced header is provided for interfacing to a host processor, such as Raspberry Pi™. It is used for SPI, I 2 C, and serial port communication to the IC. It also allows for sourcing power to the EV kit and control/status through shared GPIO.

## SPI Connector

A  9-pin  0.1  in  spaced  header  allows  for  access  to  SPI port  0.  The  SPI  port  can  also  be  routed  to  the  40-pin host connector by the population of 0Ω resistors. See the MAX32520 EV Kit Schematic .

## Table 1. MAX32520 EV Kit Jumper Settings

| JUMPER   | SIGNAL              | SETTINGS   | DESCRIPTION                                                 |
|----------|---------------------|------------|-------------------------------------------------------------|
| JP1      | RASP_RSTN           | *Open      | Disconnects Raspberry Pi reset from the DUT reset           |
| JP1      | RASP_RSTN           | Close      | Connects Raspberry Pi reset from the DUT reset              |
| JP2      | EXT SENSE           | Open       | Disconnects EXT_SENSE_IN to EXT_SENSE_OUT                   |
| JP2      | EXT SENSE           | *Close     | Connects EXT_SENSE_IN to EXT_SENSE_OUT                      |
| JP3      | SCL                 | Open       | Disconnects 4.7kΩ resistor from I 2 C SCL                   |
| JP3      | SCL                 | *Close     | Connects 4.7kΩ resistor from I 2 C SCL                      |
| JP4      | SDA                 | Open       | Disconnects 4.7kΩ resistor from I 2 C SDA                   |
| JP4      | SDA                 | *Close     | Connects 4.7kΩ resistor from I 2 C SDA                      |
| JP5      | P1_6                | Open       | Disconnects red LED D2 from P1_6                            |
| JP5      | P1_6                | *Close     | Connects red LED D2 from P1_6                               |
| JP6      | P1_7                | Open       | Disconnects green LED D3 from P1_7                          |
| JP6      | P1_7                | *Close     | Connects green LED D3 from P1_7                             |
| JP7      | UART_RXD            | *2-1       | Connects the USB/serial bridge to DUT serial UART (P0.0)    |
| JP7      | UART_RXD            | 2-3        | Connects the Raspberry Pi UART to DUT serial UART to (P0.0) |
| JP8      | UART_TXD            | *2-1       | Connects the USB/serial bridge to DUT serial UART to (P0.1) |
| JP8      | UART_TXD            | 2-3        | Connects the Raspberry Pi UART to DUT serial UART to (P0.1) |
| JP9      | VDD/VDDA/VDD AUX EN | *1-2       | 1V8 to VDD, VDDAand VDDAUX EN                               |
| JP9      | VDD/VDDA/VDD AUX EN | 3-4        | 2V5 to VDD, VDDAand VDDAUX EN                               |
| JP9      | VDD/VDDA/VDD AUX EN | 5-6        | 3V3 to VDD, VDDAand VDDAUX EN                               |

Raspberry Pi is a trademark of the Raspberry Pi Foundation.

## JTAG/SWD (Serial Wire Debug) Support

JTAG or SWD debug can be accessed through an Arm standard 20-pin connector (J3) or an Arm Cortex 10-pin connector (J2). Logic levels are set to VDD\_AUX (1.8V, 2.5V or 3.3V) by configuring jumper JP9.

## Reset Pushbutton

The IC can be reset through the pushbutton SW1 or by the host processor populating jumper JP1.

## Indicator LEDs

The  indicator  LEDs  D2  (red)  and  D3  (green)  are connected to GPIO P1.6 and P1.7, respectively.

## GPIO Pushbutton Switch

Pushbutton SW2 is connected to GPIO P1.1. If the push -button is pressed, the attached port pin is pulled low.

## GPIO Header

Since  the  GPIOs  are  on  multifunctional  pins,  they  can be  accessed  through  the  various  onboard  headers  and connectors.

│

## Table 1. MAX32520 EV Kit Jumper Settings (continued)

| JUMPER   | SIGNAL     | SETTINGS   | DESCRIPTION                                                |
|----------|------------|------------|------------------------------------------------------------|
| JP10     | VDD_AUX    | Open       | Disconnects voltage from VDD_AUX                           |
| JP10     | VDD_AUX    | *Close     | Connects voltage to VDD_AUX                                |
| JP11     | VDD        | Open       | Disconnects voltage from VDD                               |
| JP11     | VDD        | *Close     | Connects voltage to VDD                                    |
| JP12     | VDDA       | Open       | Disconnects voltage from VDDA                              |
| JP12     | VDDA       | *Close     | Connects voltage to VDDA                                   |
| JP13     | LDO_SHDN_N | *Open      | Disconnects the LDOs shutdown enable from the Raspberry Pi |
| JP13     | LDO_SHDN_N | Close      | Connects the LDOs shutdown enable to the Raspberry Pi      |

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX32520-KIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX32520

│

## MAX32520 EV Kit Bill of Materials

| QTY PART REFERENCE                             | BOMDESCRIPTION                        | MANUFACTURER PN      | MANUFACTURER           |
|------------------------------------------------|---------------------------------------|----------------------|------------------------|
| 10 C1 C2 C4 C6 C8 C12 C15 C20 C23 C26          | CAP CER 0.1UF 10V 10% X5R 0402        | GRM155R61A104KA01D   | Murata                 |
| 3 C3 C5 C7                                     | CAP CER 1uF 16V 10% X7R 0603          | GCM188R71C105KA64D   | Murata                 |
| 1 C9                                           | CAP CER 4.7uF 10V 10% X5R 0603        | C0603C475K8PACTU     | Kemet                  |
| 2 C10 C11                                      | CAP CER 47PF 50V 1% NP0 0402          | C1005C0G1H470F050BA  | TDK Corporation        |
| 1 C13                                          | CAP CER 10000PF 25V 10% X7R 0603      | CL10B103KA8NNNC      | Samsung Electro        |
| 1 C14                                          | CAP CER 0.1uF 16V 10% X7R 0603        | C0603C104K4RACTU     | Kemet                  |
| 3 C18 C21 C24                                  | CAP CER 1UF 35V 10% X5R 0603          | GMK107BJ105KA-T      | Taiyo Yuden            |
| 3 C19 C22 C25                                  | CAP CER 10UF 6.3V 20% X5R 0402        | GRJ155R60J106ME11D   | Murata Electronics     |
| 1 CN1                                          | CONN RCPT 5POS MICRO USB B R/A        | 47346-0001           | Molex                  |
| 2 D1 D2                                        | LED 660NM RED WTR CLR 1206 SMD        | SML-LX1206SRC-TR     | Lumex Opto             |
| 4 D3 D7 D8 D9                                  | LED 565NM WTR CLR GREEN 1206 SMD      | SML-LX1206GC-TR      | Lumex Opto             |
| 2 D4 D5                                        | DIODE SCHOTTKY 30V 2A POWERDI123      | DFLS230L-7           | Diodes Inc             |
| 1 D6                                           | LED 469NM BLUE DIFF 1206 SMD          | HSMR-C150            | Avago Technologies     |
| 6 H1 H2 H3 H4 H5 H6                            | DNI MTG 125DRL 300PAD                 |                      |                        |
| 1 J1                                           | CONN HEADER VERT 40POS 2.54MM         | PRPC020DAAN-RC       | Sullins                |
| 1 J2                                           | IDC BOX HEADER 0.050 10 POS SMD       | 3220-10-0300-00      | CNC Tech               |
| 1 J3                                           | CONN HEADER 2.54MM 20POS GOLD         | SBH11-PBPC-D10-ST-BK | Sullins                |
| 1 JH1                                          | CONN HEADER VERT 16POS 2.54MM         | SBH11-PBPC-D08-ST-BK | Sullins                |
| 3 JH2 JH3 JH5                                  | CONN HDR 6POS 0.1 GOLD PCB R/A        | PPPC061LGBN-RC       | Sullins                |
| 10 JP1 JP2 JP3 JP4 JP5 JP6 JP10 JP11 JP12 JP13 | CONN HEADER .100 SINGL STR 2POS (2x1) | PEC02SAAN            | Sullins                |
| 2 JP7 JP8                                      | CONN HEADER .100 SINGL STR 3POS       | PEC03SAAN            | Sullins                |
| 1 JP9                                          | CONN HEADER .100 DUAL STR 6POS        | PEC03DAAN            | Sullins                |
| 1 L1                                           | FERRITE CHIP SIGNAL 2000OHMSMD        | HZ1206C202R-10       | Laird-Signal Integrity |
| 1 L2                                           | FERRITE CHIP 220 OHM0805              | BLM21PG221SN1D       | Murata Electronics     |
| 1 PCB1                                         |                                       |                      |                        |
| 2 Q1 Q2                                        | MOSFET N-CH 20V 2.3A SOT23            | BSS806N H6327        | Infineon Technologies  |
| 2 Q3 Q4                                        | MOSFET P-CH 100V 0.12A SOT23-3        | VP2110K1-G           | Microchip Technology   |
| 6 R1 R3 R4 R38 R46 R47                         | RES SMD 0 OHMJUMPER 1/10W 0603        | RC0603JR-070RL       | Yageo                  |
| 10 R2 R5 R6 R12 R14 R15 R16 R43 R44 R45        | RES SMD 0 OHMJUMPER 1/10W 0603        | RC0603JR-070RL       | Yageo                  |
| 1 R7                                           | RES 47K OHM1/10W 1% 0603 SMD          | ERJ-3EKF4702V        | Panasonic              |
| 1 R8                                           | RES 10K OHM1/10W 1% 0603 SMD          | ERJ-3EKF1002V        | Panasonic              |
| 2 R9 R17                                       | RES 470 OHM1/10W 1% 0603 SMD          | ERJ-3EKF4700V        | Panasonic              |
| 4 R10 R37 R39 R40                              | RES 150K OHM1/10W 1% 0603 SMD         | ERJ-3EKF1503V        | Panasonic              |
| 2 R11 R13                                      | RES 4.7K OHM1/10W 1% 0402 SMD         | ERJ-2RKF4701X        | Panasonic              |
| 3 R18 R32 R36                                  | RES 332 OHM1/10W 1% 0603 SMD          | ERJ-3EKF3320V        | Panasonic              |
| 1 R19                                          | RES SMD 100 OHM1%1/10W 0603           | RC0603FR-07100RL     | Yageo                  |
| 5 R20 R23 R31 R34 R35                          | RES 10K OHM1/10W 1% 0603 SMD          | ERJ-3EKF1002V        | Panasonic              |
| 2 R21 R22                                      | RES 27 OHM1/10W 1% 0603 SMD           | ERJ-3EKF27R0V        | Panasonic              |
| 1 R24                                          | RES SMD 1M OHM5%1/8W 0805             | ERJ-6GEYJ105V        | Panasonic              |
| 5 R25 R26 R27 R28 R29                          | DNI 0402                              |                      |                        |
| 1 R30                                          | RES 2.7K OHM1/10W 1% 0603 SMD         | ERJ-3EKF2701V        | Panasonic              |
| 1 R33                                          | RES 267 OHM1/10W 1% 0603 SMD          | ERJ-3EKF2670V        | Panasonic              |
| 2 R41 R42                                      | RES 1K OHM1/10W 1% 0603 SMD           | ERJ-3EKF1001V        | Panasonic              |
| 1 SW1                                          | SWITCH TACTILE SPST-NO 0.05A 24V      | B3S-1002 BY OMZ      | Omron Electronics      |
| 1 SW2                                          | SWITCH TACTILE SPST-NO 0.05A 24V      | B3S-1000P            | Omron Electronics      |
| 2 TP1 TP2                                      | CONN HEADER .100 SINGL STR 1POS       | PEC01SAAN            | Sullins                |
| 3 TP3 TP4 TP5                                  | TEST POINT PC MULTI PURPOSE BLK       | 5011                 | Keystone Electronics   |
| 1 TP6                                          | TEST POINT PC MULTI PURPOSE YEL       | 5014                 | Keystone Electronics   |
| 1 U1                                           | MAX32520                              | MAX32520             | Maxim Integrated       |
| 1 U2                                           | IC FLASH 64MBIT 104MHZ 8SOP           | MX25L6445EM2I-10G    | Macronix               |
| 1 U3                                           | IC USB SERIAL BASIC UART 16SSOP       | FT230XS-R            | FTDI                   |
| 1 U4                                           | ESD PROT DIFF SOT23-6                 | MAX3207EAUT+T        | Maxim Integrated       |
| 1 U5                                           | IC REG LDO 3.3V/ADJ 0.5A 8UMAX        | MAX1806EUA33+        | Maxim Integrated       |
| 1 U6                                           | IC REG LDO 2.5V/ADJ 0.5A 8UMAX        | MAX1806EUA25+        | Maxim Integrated       |
| 1 U7                                           | Low Dropout Linear Regulator          | MAX1806EUA18+        | Maxim Integrated       |
| 1 XU1                                          | MAX32520 32P QFN SKT                  | 32QN50S15050         | Plastronics            |

Evaluates: MAX32520

## MAX32520 EV Kit Schematic

<!-- image -->

│

## MAX32520 EV Kit Schematic (continued)

<!-- image -->

│

## MAX32520 EV Kit Schematic (continued)

<!-- image -->

## MAX32520 EV Kit Schematic (continued)

<!-- image -->

## MAX32520 EV Kit Schematic (continued)

<!-- image -->

## MAX32520 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                         | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/19            | Initial release                                                                                                     | -               |
|                 1 | 10/19           | Updated Features section, MAX32520 EV Kit Board , MAX32520 EV Kit Schematic , and MAX32520 EV Kit Bill of Materials | 1, 2, 5-10      |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and speci¿cations without notice at any time.

│

Evaluates: MAX32520