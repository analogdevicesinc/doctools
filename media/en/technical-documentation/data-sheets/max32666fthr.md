<!-- lastmod 2023-04-11 -->
## MAX32666FTHR Application Platform

## General Description

The  MAX32666FTHR  board  is  a  rapid  development platform to help engineers quickly implement battery optimized Bluetooth ®  5 solutions with the MAX32666 Arm ® Cortex ® -M4 processor with FPU. The board also includes the MAX1555 1-Cell Li+ battery charger for battery management. The form factor is a small 0.9in by 2.0in dualrow header footprint that is compatible with breadboards and off-the-shelf peripheral expansion boards. The board also includes a variety of peripherals, such as a micro SD card  connector,  6-axis  accelerometer/gyro,  RGB  indicator  LED, and pushbutton. This platform provides poweroptimized  flexible  for  quick  proof-of-concepts  and  early software development to enhance time to market.

Ordering Information appears at end of data sheet.

Bluetooth SIG registered trademark.

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

1-Wire is a registered trademark of Maxim Integrated Products, Inc.

319-100525; Rev 0; 3/20

Evaluates: MAX32666

## Features

- MAX32666 Microcontroller
-  Dual Arm Cortex-M4F, 96MHz
-  1MB Flash Memory
-  560KB SRAM
-  3 x 16KB Cache
- Bluetooth 5 Low Energy Radio
-  High-Speed USB 2.0
- Three QSPI Master/Slave
- Three I 2 C Master/Slave
-  Three UARTS
- SD/SDIO 3.0
- 1-Wire ®  Master
-  48 GPIO
- 8 Input, 10-Bit ADC
- MAX1555 1-Cell Li+ Battery Charger
-  Charge from USB
- On-Chip Thermal Limiting
- Charge Status Indicator
- Expansion Connections
- Breadboard Compatible Headers
- 10-Pin Cortex Debug Header
- Micro USB Connector
- Micro SD Card Connector
- Integrated Peripherals
- RGB Indicator LED
- User Pushbutton
- 6-Axis Accelerometer/Gyro
- Bluetooth Surface Mount Antenna
- SWD/MAXDAP Debug Interface
-  Drag-and-Drop Programming
-  SWD Debugger
- Virtual UART Console

<!-- image -->

## MAX32666FTHR Application Platform

## Quick Start

Apply power to the MAX32666FTHR using the USB cable. The blue LED (D4) begins to blink indicating that the board is transmitting a BLE beacon. Observe the beacon using

Evaluates: MAX32666

any BLE capable phone or tablet. The beacon appears as MAX32666FTHR Beacon.

The source code for the beacon firmware can be found in the Maxim Low Power Arm Micro Toolchain.

Figure 1. MAX32666FTHR Pinout Diagram

<!-- image -->

│

## MAX32666FTHR Application Platform

Evaluates: MAX32666

Figure 2. MAX32666FTHR Top Side Components

<!-- image -->

│

Evaluates: MAX32666

Figure 3. MAX32666FTHR Bottom Side Components

<!-- image -->

│

## MAX32666FTHR Application Platform

## Battery Charger

The  MAX1555  charges  a  single-cell  Li+  battery  from a  USB  source.  When  the  MAX1555  thermal  limits  are reached,  the  charger  does  not  shut  down,  but  simply reduces charging current by 17mA/°C above a die temperature  of  +110°C.  The  USB  charge  current  is  set  to 100mA (max). This  allows  charging  from  both  powered

## Table 1. JH3 Pinout

|   PIN | NAME   | DESCRIPTION                                                                                   |
|-------|--------|-----------------------------------------------------------------------------------------------|
|     1 | GND    | Ground                                                                                        |
|     2 | P0_9   | UART0 Tx                                                                                      |
|     3 | P0_10  | UART0 Rx                                                                                      |
|     4 | P0_26  | QSPI2 MISO                                                                                    |
|     5 | P0_25  | QSPI2 MOSI                                                                                    |
|     6 | P0_27  | QSPI2 SCK                                                                                     |
|     7 | AIN_5  | ADCAnalog Input. Alternatively, AIN2N or P0_21                                                |
|     8 | AIN_4  | ADCAnalog Input. Alternatively, AIN2P or P0_20                                                |
|     9 | AIN_3  | ADCAnalog Input. Alternatively, AIN1N or P0_19                                                |
|    10 | AIN_2  | ADCAnalog Input. Alternatively, AIN1P or P0_18                                                |
|    11 | AIN_1  | ADCAnalog Input. Alternatively, AIN0N or P0_17                                                |
|    12 | AIN_0  | ADCAnalog Input. Alternatively, AIN0P or P0_16                                                |
|    13 | GND    | Ground                                                                                        |
|    14 | NC     | No Connection                                                                                 |
|    15 | 3V3    | 3.3V Output. Typically used to provide 3.3V to peripherals connected to the expansion headers |
|    16 | RSTN   | Master Reset Signal                                                                           |

## Table 2. JH4 Pinout

|   PIN | NAME   | DESCRIPTION                                                                                                                                                                                                                                                                              |
|-------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | SYS    | SYS switched connection to the Battery. This is the primary system power supply and automatically switches between the battery voltage and the USB supply when available.                                                                                                                |
|     2 | PWREN  | Power Enable. This is connected to the ON pin of the MAX4995 LDO. It turns off the LDO if shorted to GND.                                                                                                                                                                                |
|     3 | VBUS   | USB VBUS Signal. This can be used as a 5V supply when connected to USB. This pin can also be used as an input to power the board, but this should only be done when not using the USB connector since there is no circuitry to prevent current from flowing back into the USB connector. |
|     4 | P0_12  | 1-Wire master signal                                                                                                                                                                                                                                                                     |
|     5 | P0_3   | SPIXF SCK                                                                                                                                                                                                                                                                                |
|     6 | P0_5   | SPIXF SDIO3                                                                                                                                                                                                                                                                              |
|     7 | P0_4   | SPIXF SDIO2                                                                                                                                                                                                                                                                              |
|     8 | P0_2   | SPIXF SDIO1/MISO                                                                                                                                                                                                                                                                         |
|     9 | P0_1   | SPIXF SDIO0/MOSI                                                                                                                                                                                                                                                                         |
|    10 | P0_0   | SPIXF SS0                                                                                                                                                                                                                                                                                |
|    11 | P0_6   | I2CM0 SCL. Pulled to MAX32666 VDDIOH, connected to BMI160.                                                                                                                                                                                                                               |
|    12 | P0_7   | I2CM0 SDA. Pulled to MAX32666 VDDIOH, connected to BMI160.                                                                                                                                                                                                                               |

│

Evaluates: MAX32666

and  unpowered  USB  hubs  with  no  port  communication required.  Refer  to  the  MAX1551/MAX1555  data  sheet and the data sheet for your battery to ensure compatibility.

## Expansion Headers

Note: All port pins labeled Pn\_n are capable of GPIO or PWM with timer or pulse train engine.

## MAX32666FTHR Application Platform

## Component List

|   QTY | SCHEMATIC REFERENCE                                                          | DESCRIPTION                              |
|-------|------------------------------------------------------------------------------|------------------------------------------|
|     1 | U1                                                                           | Arm Cortex-M4F, MAX32666                 |
|     1 | ANT1                                                                         | Antenna 2.4GHz chip                      |
|     5 | C1, C10, C11, C12, C13                                                       | Capacitor 22µF 6.3V 20% X5R 0603         |
|    17 | C2, C3, C4, C5, C6, C7, C9, C14, C15, C16, C17, C18, C20, C24, C26, C27, C28 | Capacitor 1µF 6.3V X5R 0402              |
|     1 | C8                                                                           | Capacitor 4700pF 16V 10% X7R 0201        |
|     7 | C19, C21, C22, C23, C25, C32, C33                                            | Capacitor 0.1µF 6.3V 10% X5R 0201        |
|     2 | C29, C34                                                                     | Capacitor 1.5pF 50V ±0.1pF C0G/ NP0 0402 |
|     2 | C30, C31                                                                     | Capacitor 16pF 50V 5% C0G/NP0 0402       |
|     2 | D1, D2                                                                       | Schottky Diode 0V/0.5A SOD-123           |
|     1 | D3                                                                           | LED yellow 0603                          |
|     1 | D4                                                                           | LED RGB Clear 0404                       |
|     1 | J1                                                                           | Header vertical 2 position 1.27mm        |
|     1 | J2                                                                           | Connector micro USB B right angle        |
|     1 | J3                                                                           | Connector microSD PUSH-PULL right angle  |
|     1 | JH1                                                                          | Header 2 position 2mm right angle        |
|     1 | JH2                                                                          | Header 10 position dual 0.05mm           |
|     1 | JH3                                                                          | Header 0.100 16 position                 |
|     1 | JH4                                                                          | Header 0.100 12 position                 |

## Ordering Information

| PART          | TYPE                 |
|---------------|----------------------|
| MAX32666FTHR# | Application Platform |

Evaluates: MAX32666

|   QTY | SCHEMATIC REFERENCE          | DESCRIPTION                               |
|-------|------------------------------|-------------------------------------------|
|     1 | L1                           | Ferrite bead 120 0805 1LN                 |
|     1 | L2                           | Inductor 2.2µH 1A 150m 0805               |
|     1 | Q1                           | MOSFET P-CH 20V 0.2A                      |
|     1 | R1                           | Resistor 93.1kΩ 1% 1/10W 0402             |
|     6 | R2, R14, R20, R21, R23, R24  | Resistor 100kΩ 1% 1/10W 0402              |
|     1 | R3                           | Resistor 215kΩ 1% 1/10W 0402              |
|     1 | R4                           | Resistor 330kΩ 1% 1/10W 0402              |
|     7 | R5, R6, R7, R8, R9, R10, R11 | Resistor 10kΩ 1% 1/16W 0402               |
|     1 | R12                          | Resistor 10kΩ 1% 1/10W 0402               |
|     2 | R13, R16                     | Resistor 2.7kΩ 1% 1/10W 0402              |
|     1 | R15                          | Resistor 499kΩ 1% 1/10W 0402              |
|     1 | R17                          | Resistor 1.4kΩ 1% 1/10W 0402              |
|     2 | R18, R19                     | Resistor 4.7kΩ 1/10W 1% 0402              |
|     1 | R22                          | Resistor 1kΩ 1/10W 1% 0402                |
|     1 | R25                          | Resistor 0.0 1/10W 0402                   |
|     1 | U2                           | 2 Channel ESD protection, MAX13202EALT    |
|     1 | U3                           | Current limit switch, MAX4995AAUT         |
|     1 | U4                           | 1-Cell Li+ battery charger, MAX1555EZK    |
|     2 | U5, U6                       | Linear regulator 3.3V 150mA, MAX8841ELT33 |
|     1 | U7                           | 1-Wire EEPROM 2Kib, DS28EL22Q             |
|     1 | U8                           | Inertial measurement unit, BMI160         |
|     1 | Y1                           | Crystal 32.768kHz 6.0pF                   |
|     1 | Y2                           | Crystal 32.00 MHz 12pF                    |

│

## MAX32666FTHR Application Platform Schematic

<!-- image -->

│

Evaluates: MAX32666

## MAX32666FTHR Application Platform

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and speci¿cations without notice at any time.

│

Evaluates: MAX32666