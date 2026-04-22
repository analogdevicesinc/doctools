<!-- lastmod 2024-04-12 -->
<!-- image -->

Evaluates: MAX20431

## General Description

The MAX20431 evaluation kit (EV kit) is a fully assembled and tested application circuit for the MAX20431: high-effi -ciency four-output PMIC. The EV kit can test all outputs to full load within the normal operation input range of 3.5V to  36V. The IC features two modes of watchdog operation,  challenge/response  and  simple  windowed  mode, which can also be disabled for simplified evaluation. I 2 C communication must be used to configure the MAX20431 and  monitor  errors.  A  PC  to  I 2 C  interface  such  as  the MINIQUSB or MAX32625PICO, and software for reading and writing to I 2 C registers (such as SimpleI2C) simplify testing.

## Features

- Integrated IC Minimizes Board Area and Layout
- Input Voltage Range from 3.5V to 36V
- User-Programmable Settings through I 2 C
- Challenge/Response or Simple Windowed Watchdog
- 2.1MHz Fixed-Frequency Switching with Spread-Spectrum Option
- Status Monitoring through RESET Pin and I 2 C Status Registers
- Fully Assembled and Tested
- Proven PCB Layout with Automotive-Grade Components

Ordering Information appears at end of data sheet.

## MAX20431 Evaluation Kit

## Quick Start

## Required Equipment

- MAX20431 EV kit
- I 2 C read/write software such as SimpleI2C
- I 2 C interface such as MINIQUSB or MAX32625PICO (PICO board)
- DC power supply (capable of 0-36V output)
- Digital multimeters (DMM)
- Electronic load

## Procedure

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software.

The MAX20431 EV kit is fully assembled and tested. Use the following steps to verify board operation:

- 1) Verify that all jumpers are in their default configura -tion according to Table 2.
- 2) If using the MINIQUSB, connect the USB cable from the PC to the MINIQUSB board and then plug it into J1 on the EV kit. If using the PICO board, separate cables must be used to connect the SDA, SCL, GND, and V DD  pins to the EV kit.
- 3) Connect the positive and negative terminals of the power supply to VSUP and PGND test pads, respectively.
- 4) Set the power-supply voltage to 13.5V and then turn on the power supply.
- 5) If using SimpleI2C, open the software and load in the register map for MAX20431 by selecting Regmap in the menu bar, then Load Regmap . Check and enable Auto Read on the left menu bar.
- 6) To establish connection to the EV kit, select Device in the menu bar, then Scan for Address .  The software should find  the default address (0x70). Click OK .
- 7) The default operation of MAX20431 has Packet Error Checking (PEC) enabled.  To send I 2 C command with PEC, Select Settings in the menu bar, then PEC , then the CRC-8, X 8  + X 2  + X + 1 option.

319-100831; Rev 2; 3/24

MAX20431 Evaluation Kit

<!-- image -->

## Evaluates: MAX20431

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│