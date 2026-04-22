<!-- lastmod 2023-04-07 -->
## MAX32625NEXPAQ

## Development Board

## General Description

The MAX32625NEXPAQ is a rapid development platform designed  to  accelerate  the  implementation  of  nexpaq modules with the MAX32625 ARM® Cortex®-M4F microcontroller. It contains all the elements needed to interface to  the  nexpaq  system  and  provides  easy  access  to  the main peripherals inside the microcontroller. This provides an expandable platform for quick proof-of-concepts and early software development to enhance time to market.

The nexpaq platform provides the simplest way to interface  hardware  to  a  phone.  It  utilizes  web  standards  to enable a rich user experience that is fundamentally cross platform.

## Ordering Information appears at end of data sheet.

ARM is a registered trademark and registered service mark and Cortex and mbed are registered trademarks of ARM Limited.

1-Wire is a registered trademark of Maxim Integrated Products, Inc.

## Features

- MAX32625 Microcontroller
-  ARM Cortex-M4F
-  512KB Flash, 160KB SRAM
- FS-USB, UART, SPI, I 2 C, 1-Wire®
- nexpaq Compatible
- nexpaq Module Form Factor
- nexpaq Interface Connector
- Expansion Connections
- Power: GND, 3.3V, 5V, Battery
- Serial I/O: I 2 C, SPI, UART, 1-Wire
- Analog Inputs
-  PWM Outputs
-  RGB Indicator LED
-  mbed® HDK DAPLink Connector
-  Drag-and-Drop Programming
-  CMSIS-DAP Debugger
- Virtual UART Console

<!-- image -->

Figure 1. MAX32625NEXPAQ Pin Diagram

<!-- image -->

## MAX32625NEXPAQ Development Board

## Overview

The MAX32625NEXPAQ as part of the nexpaq developers kit takes phone customization to a whole new level. This is the easiest way to add new features to your phone. This  cost-effective,  easy-to-use  developers  kit  finally provides the tools needed to enable developers around the world.

The nexpaq technology provides a gateway between the phone  and  external  modules  that  allows  developers  to create custom interfaces on their phone for just about any peripheral they can imagine. The use of web standards on the phone and the mbed tools for the embedded code

## Table 1. nexpaq Card Edge Connector Pinout nexpaq Card Edge Connector

| PORT   |   TOP |   BOTTOM | PORT   |
|--------|-------|----------|--------|
| USB D+ |     1 |       14 | GND    |
| USB D- |     2 |       13 | +3.3V  |
| N.C.   |     3 |       12 | CS     |
| N.C.   |     4 |       11 | SCK    |
| N.C.   |     5 |       10 | SIMO   |
| N.C.   |     6 |        9 | SOMI   |
| BAT    |     7 |        8 | +5V    |

## Left Side Header Table 2. MAX32625NEXPAQ Left-Side Header Pinout

| PORT   | DESCRIPTION               |
|--------|---------------------------|
| GND    | Ground                    |
| AIN_0  | ADC input 0               |
| AIN_1  | ADC input 1               |
| AIN_2  | ADC input 2               |
| AIN_3  | ADC input 3               |
| P0_2   | GPIO/UART0 CTS            |
| P0_3   | GPIO/UART0 RTS            |
| P4_0   | GPIO/1-Wire Master        |
| P4_1   | GPIO/1-Wire Pullup Enable |
| GND    | Ground                    |

make  this  a  truly  cross  platform  development  environment,  where  all  you  need  is  a  web  browser  and  a  text editor to get started.

The  MAX32625NEXPAQ  nexpaq  Development  Module provides the core circuits and libraries needed to link to the nexpaq gateway, as well as development features for debugging and connecting to external devices.

## Getting Started

Go to https://developer.mbed.org/platforms/ MAX32625NEXPAQ/ to get started with this exciting new platform.

## Right-Side Header Table 3. MAX32625NEXPAQ Right-Side Header Pinout

| PORT   | DESCRIPTION     |
|--------|-----------------|
| GND    | Ground          |
| P0_1   | GPIO/UART0 TX   |
| P0_0   | GPIO/UART0 RX   |
| P1_2   | GPIO/SPIM1 MISO |
| P1_1   | GPIO/SPIM1 MOSI |
| P1_0   | GPIO/SPIM1 SCK  |
| P1_3   | GPIO/SPIM1 SSEL |
| P1_7   | GPIO/I2CM0 SCL  |
| P1_6   | GPIO/I2CM0 SDA  |
| GND    | Ground          |

## Top Header Table 4. MAX32625NEXPAQ Top Header Pinout

| PORT   | DESCRIPTION    |
|--------|----------------|
| P3_5   | GPIO/I2CM1 SCL |
| P3_4   | GPIO/I2CM1 SDA |
| +3.3V  | +3.3V Power    |
| P3_1   | GPIO/UART2 Tx  |
| P3_0   | GPIO/UART2 Rx  |

## MAX32625NEXPAQ Development Board

## Bottom Header Table 5. MAX32625NEXPAQ Bottom Header Pinout

## Ordering Information

| PART            | TYPE              |
|-----------------|-------------------|
| MAX32625NEXPAQ# | Development Board |

| PORT   | DESCRIPTION     |
|--------|-----------------|
| GND    | Ground          |
| +3.3V  | +3.3V Power     |
| BAT    | Battery Voltage |
| +5V    | +5V Power       |

#Denotes RoHS compliant.

## MAX32625NEXPAQ Development Board Bill of Materials

| PART       |   QTY | DESCRIPTION                 |
|------------|-------|-----------------------------|
| J1, J7     |     2 | Pin header, 1x2, 0.1in      |
| J2, J8     |     2 | Pin header, 1x10, 0.1in     |
| U5         |     1 | Microcontroller, MAX32625   |
| R4, R6     |     2 | Resistor, SMT, 1.1kΩ, 0402  |
| R5         |     1 | Resistor, SMT, 1.4kΩ, 0402  |
| C4, C5, C7 |     3 | Capacitor, SMT, 1µF, 0402   |
| C1, C9     |     2 | Capacitor, SMT, 10µF, 0402  |
| R3         |     1 | Resistor, SMT, 3.09kΩ, 0402 |
| R2         |     1 | Resistor, SMT, 5.1kΩ, 0402  |

| PART   |   QTY | DESCRIPTION                                  |
|--------|-------|----------------------------------------------|
| U4     |     1 | IC, EEPROM, 1Kb, DS2431                      |
| Q1     |     1 | Crystal, tuning fork, 32.768kHz              |
| J4     |     1 | Header, 2x5, 0.05in, FTSH-105-01-F-DV-K-P    |
| U6     |     1 | Inverter, single gate, 74AUP1G04 IC          |
| U3     |     1 | IC, voltage regulator, 1.2V, MCP1711-12I/5X  |
| U2     |     1 | IC, voltage regulator, 1.8V, MCP1711T-18I/5X |
| D2     |     1 | LED, triple, RGB, RGBLED_SML-LX0404          |

│

## MAX32625NEXPAQ Development Board

## MAX32625NEXPAQ Development Board Schematic

<!-- image -->

│

## MAX32625NEXPAQ Development Board

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/16           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses Dre iPSOieG. MD[iP ,QteJrDteG reserYes tKe riJKt to FKDQJe tKe FirFXitr\ DQG sSeFi¿FDtioQs ZitKoXt QotiFe Dt DQ\ tiPe.

│