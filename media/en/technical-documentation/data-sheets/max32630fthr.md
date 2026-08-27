<!-- lastmod 2022-08-03 -->
## MAX32630FTHR Application Platform

## General Description

The MAX32630FTHR Pegasus board is a rapid development platform designed to help engineers quickly implement  battery  optimized  solutions  with  the  MAX32630 ARM®  Cortex®-M4F  microcontroller.  The  board  also includes the MAX14690 wearable PMIC to provide optimal power conversion and battery management. The form factor is a small 0.9in by 2.0in dual row header footprint that  is  compatible  with  breadboards  and  off-the  shelf peripheral expansion boards. Additionally, on board are a variety  of  peripherals  including  a  dual-mode  Bluetooth® module, micro SD card connector, 6-axis accelerometer/ gyro, RGB indicator LED, and pushbutton. This provides a  power-optimized  flexible  platform  for  quick  proof-ofconcepts  and  early  software  development  to  enhance time to market.

Go to: https://developer.mbed.org/platforms/ MAX32630FTHR/ to  get  started  developing  with  this board.

Ordering Information appears at end of data sheet.

ARM is a registered trademark and registered service mark and Cortex and mbed are registered trademarks of ARM Limited.

The Bluetooth word mark and logos are registered trademarks owned by Bluetooth SIG, Inc. and any use of such marks by Maxim is under license.

## Features

- MAX32630 Microcontroller
-  ARM Cortex-M4F, 96MHz
-  2048KB Flash Memory
-  512KB SRAM
- 8KB Instruction Cache
- Full-Speed USB 2.0
- Three SPI Masters, One Slave
- Three I 2 C Masters, One Slave
-  Four UARTS
- 1-Wire Master
-  66 GPIO
- 4 Input 10-Bit ADC
- MAX14690 Wearable PMIC
- Battery Charger with Smart Selector
- Dual Micro I Q  Buck Regulators
- Three Micro I Q  Linear Regulators
- Power-On/Off Sequencing Controller
- Voltage Monitor Multiplexer
- Expansion Connections
- Breadboard-Compatible Headers
- Micro SD Card Connector
- Battery Connector
-  Micro USB Connector
- Integrated Peripherals
- RGB Indicator LED
- 6-Axis Accelerometer/Gyro
- Dual-Mode Bluetooth Module
- User Pushbutton
- mbed® HDK Debug Interface
-  Drag-and-Drop Programming
-  SWD Debugger
- Virtual UART Console

<!-- image -->

## MAX32630FTHR Application Platform

Figure 1. MAX32630 FTHR Pinout Diagram

<!-- image -->

│

## MAX32630FTHR Application Platform

Figure 2. MAX32630 FTHR Top Side Components

<!-- image -->

## MAX32630FTHR Application Platform

Figure 3. MAX32630 FTHR Bottom Side Components

<!-- image -->

## MAX32630FTHR Application Platform

## Battery Charger

The  MAX14690  includes  a  battery  charger  suitable  for lithium-ion  (Li+)  and  lithium  polymer  (Li-Poly)  batteries. The  charge  current  is  set  by  a  resistor  attached  to  the SET pin on the MAX14690. The 20k Ω resistor  installed by default sets the charge current at 100mA that is tolerable for most typical batteries with a capacity greater than or equal to 100mAhr. The default charge voltage is 4.2V,

## Table 1. J1 Pinout

|   PIN | PORT      | DESCRIPTION                                                                                                                                                            |
|-------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | RSTN      | Master Reset Signal                                                                                                                                                    |
|     2 | 3V3       | LDO3 Adjustable Output. Typically used to provide 3.3V to peripherals connected to the expansion headers. This can be programmed by I 2 C writes to the MAX14690 PMIC. |
|     3 | 1V8       | 1.8V Supply Voltage (Output)                                                                                                                                           |
|     4 | GND       | Ground                                                                                                                                                                 |
|     5 | AIN_0     | ADCAnalog Input (0V-5V). Also connected to MAX14690 MON pin.                                                                                                           |
|     6 | AIN_1     | ADCAnalog Input (0V-5V)                                                                                                                                                |
|     7 | AIN_2     | ADCAnalog Input (0V-1.8V)                                                                                                                                              |
|     8 | AIN_3     | ADCAnalog Input (0V-1.8V)                                                                                                                                              |
|     9 | P5_7      | I2C2 SDA2. Pulled to 1.8V, connected to MAX14690 and BMI160.                                                                                                           |
|    10 | P6_0      | I2C2 SCL2. Pulled to 1.8V, connected to MAX14690 and BMI160.                                                                                                           |
|    11 | P5_0/P4_4 | SPI SCK. This is connected to SPIM2 and SPIS. When using one port, the other port should be configured as a high-impedance input.                                      |
|    12 | P5_1/P4_5 | SPI MOSI. This is connected to SPIM2 and SPIS. When using one port, the other port should be configured as a high-impedance input.                                     |
|    13 | P5_2/P4_6 | SPI MISO. This is connected to SPIM2 and SPIS. When using one port, the other port should be configured as a high-impedance input.                                     |
|    14 | P3_0      | UART2 Rx                                                                                                                                                               |
|    15 | P3_1      | UART2 Tx                                                                                                                                                               |
|    16 | GND       | Ground                                                                                                                                                                 |

│

but this is programmable by I 2 C. Refer to the MAX14690 data  sheet  and  the  data  sheet  for  your  battery  to ensure compatibility.

## Expansion Headers

Note: All port pins labeled Pn\_n are capable of GPIO and PWM.

## MAX32630FTHR Application Platform

## Table 2. J3 Pinout

|   PIN | PORT      | DESCRIPTION                                                                                                                                                                                                                                                                                                                              |
|-------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | SYS       | SYS Switched Connection to the Battery. This is the primary system power supply. It automatically switches between the battery voltage and the USB supply when available. It is disconnected from the battery when the MAX14690 is turned off.                                                                                           |
|     2 | PWR       | Power/Reset Button. This is connected to the KIN# button monitor pin of the MAX14690 PMIC. It turns on the PMIC if shorted to GND for 400ms when the PMIC is off. If shorted to GND when the part is on, it pulls reset low, and if held low for 12s, it turns off the PMIC. Applying power to the USB connector also turns on the PMIC. |
|     3 | VBUS      | USB VBUS Signal. This can be used as a 5V supply when connected to USB. This pin can also be used as an input to power the board, but this should only be done when not using the USB connector since there is no circuitry to prevent current from flowing back into the USB connector.                                                 |
|     4 | P4_0      | 1-Wire Master Signal                                                                                                                                                                                                                                                                                                                     |
|     5 | P5_6      | SPIM2 SRN Signal                                                                                                                                                                                                                                                                                                                         |
|     6 | P5_5/P4_3 | SPI SDIO3. This is connected to SPIM2 and SPIS. When using one port, the other port should be configured as a high-impedance input.                                                                                                                                                                                                      |
|     7 | P5_4/P4_2 | SPI SDIO2. This is connected to SPIM2 and SPIS. When using one port, the other port should be configured as a high-impedance input.                                                                                                                                                                                                      |
|     8 | P5_3/P4_7 | SPI SSEL. This is connected to SPIM2 and SPIS. When using one port, the other port should be configured as a high-impedance input.                                                                                                                                                                                                       |
|     9 | P3_3      | UART2 RTS                                                                                                                                                                                                                                                                                                                                |
|    10 | P3_2      | UART2 CTS                                                                                                                                                                                                                                                                                                                                |
|    11 | P3_5      | I2CM1 SCL                                                                                                                                                                                                                                                                                                                                |
|    12 | P3_4      | I2CM1 SDA                                                                                                                                                                                                                                                                                                                                |

## Ordering Information

| PART          | TYPE                 |
|---------------|----------------------|
| MAX32630FTHR# | Application Platform |

#Denotes RoHS compliant.

│

## MAX32630FTHR Application Platform

## MAX32630FTHR Application Platform Bill of Materials

| PART               |   QTY | DESCRIPTION                                         |
|--------------------|-------|-----------------------------------------------------|
| C16-C22            |     7 | CAP CER 1 µ F 6.3V 10% X5R 0402                     |
| C2                 |     1 | CAP CER 2.2 µ F 35V X5R 0805                        |
| C4, C13-C15, C23   |     5 | CAP CER 0.1 µ F 16V X7R 0402                        |
| C1, C3, C5, C9-C12 |     7 | CAP CER 2.2 µ F 35V X5R 0402                        |
| C6                 |     1 | CAP CER 22 µ F 6.3V X5R 0805                        |
| C7, C8             |     2 | CAP CER 22 µ F 6.3V X5R 0603                        |
| CN1                |     1 | USB MICRO B TOP MOUNT                               |
| CN2                |     1 | CONN uSD Card push-pull                             |
| D1                 |     1 | TRI COLOR LED                                       |
| FB1                |     1 | FERRITE BEAD 60Ω 0603                               |
| J2                 |     1 | 2-Pin Battery Connector                             |
| J4                 |     1 | CONN HEADER 10POS DUAL .05' SMD                     |
| L1, L2             |     2 | INDUCTOR 2.2 µ H 1.5A 160 MOHM                      |
| MOD1               |     1 | BLUETOOTH PAN1326B CC2564B HCI A                    |
| Q1                 |     1 | MOSFET P-CH 20V 1.5A 3-DFN                          |
| R1                 |     1 | RES SMD 100KΩ 1% 1/10W 0402                         |
| R14                |     1 | RES SMD 2.2KΩ 1% 1/10W 0402                         |
| R2                 |     1 | RES SMD 20KΩ 1% 1/10W 0402                          |
| R4, R7             |     2 | RES SMD 10Ω 1% 1/10W 0402                           |
| R5                 |     1 | RES SMD 499Ω 1% 1/10W 0402                          |
| R8, R13            |     2 | RES SMD 10KΩ 1% 1/10W 0402                          |
| R3, R10, R12       |     3 | RES SMD 3.3KΩ 1% 1/10W 0402                         |
| RP1, RP2           |     2 | RESISTOR PACK 8 - BUSSED                            |
| RT1                |     1 | THERMISTOR 100KΩ NTC 0402 SMD                       |
| SW1, SW2           |     2 | SWITCH TACTILE SPST-NO 0.02A 15V                    |
| U1                 |     1 | Ultra-Low Power Cortex-M4F Microcontroller          |
| U2                 |     1 | PMIC - Wearable Charge-Management Solution          |
| U3                 |     1 | 2 Channel ±30kv ESD Protection                      |
| U5                 |     1 | 1-Wire SHA-256 secure authenticator + 2k bit EEPROM |
| U6                 |     1 | Inertial Measurement Unit, Low Power 14 pin         |
| X1                 |     1 | CRYSTAL 32.768kHz 6.0PF SMD                         |

│

## MAX32630FTHR Application Platform

## MAX32630FTHR Application Platform System Schematic

<!-- image -->

## MAX32630FTHR Application Platform

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/16           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are impOied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│