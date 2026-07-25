<!-- lastmod 2022-08-02 -->
<!-- image -->

Evaluates: MAX32672

## General Description

The  MAX32672FTHR  is  a  rapid  development  platform that  helps  engineers  quickly  implement  complex  sensor solutions  using  the  MAX32672  Arm ®   Cortex ® -M4.  The board also includes the MAX8819 PMIC for battery and power management. The form factor is a small, 0.9in by 2.6in,  dual  row  header  footprint  that  is  compatible  with Adafruit ®  FeatherWing peripheral expansion boards. The board includes an OLED display, a RGB indicator LED, and  a  user  pushbutton.  The  MAX32672FTHR  provides a  power-optimized  flexible  platform  for  quick  proof-ofconcepts  and  early  software  development  to  enhance time to market.

Refer to the MAX32672FTHR product page to get started developing with this board.

Ordering Information appears at end of data sheet.

## MAX32672FTHR Application Platform Board

<!-- image -->

Adafruit is a registered trademark of Adafruit Industries. Arm and Cortex are registered trademarks of Arm Limited.

©

Click here to ask an associate for production status of specific part numbers.

## MAX32672FTHR Application Platform

## Features

- MAX32672 Microcontroller
- Arm Cortex-M4 Processor with FPU up to 100MHz
- 1MB Dual-Bank Flash with Error Correction
-  200KB SRAM (160KB with ECC Enabled)
- 16KB Unified Cache with ECC
- Resource Protection Unit (RPU)
- Memory Protection Unit (MPU)
- Integrated Peripherals
- MAX8819 PMIC with Integrated Charger
-  On-Board DAPLink Debug and Programming Interface for Arm Cortex-M4
- Breadboard-Compatible Headers
- Micro USB Connector
- RGB Indicator LED
- User Pushbutton
-  OLED Display
-  SWD Debugger
- Virtual UART Console

319-100876; Rev 0; 1/22

One  Analog  Way,  Wilmington,  MA  0187  U.S.A.    |      Tel:  781.329.470      |      ©  2022  Analog  Devices,  Inc.  All  rights  reserved. 2022 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX32672FTHR Application Platform

## Quick Start

Apply  power  to  the  MAX32672FTHR  using  the  USB cable. The preprogrammed 'Hello World' demo will begin to execute. The RGB LED will start to blink green every second, and the MAX32672 will start to count every second.  The  counter  messages  can  be  observed  from  the Virtual UART Console.

## PMIC and Battery Charger

The MAX8819 PMIC powers the MAX32672FTHR board and  is  also  capable  of  charging  a  Li-ion  battery  (not included).  The  MAX8819  has  an  internal  MOSFET  that connects the battery  to  system  output  when  no  voltage source is available on the charge input (USB). When an external source is detected at the charge input (USB), this switch opens and the system output is powered from the input source through the input current limiter. In addition, on-chip thermal limiting reduces the battery charge rate to prevent charger overheating.

When  the  system  load  requirements  exceed  the  input current  limit,  the  battery  supplies  supplemental  current to the load through the internal system load switch. If the system load continuously exceeds the input current limit, the battery does not charge, even though external power is connected. This is not expected to occur in most cases because  high  loads  usually  occur  only  in  short  peaks. During  these  peaks,  battery  energy  is  used,  but  at  all other times the battery charges.

The  USB  charge  current  is  set  to  200mA.  This  allows charging  from  both  powered  and  unpowered  USB hubs with no port communication required. Refer to the MAX8819 data sheet and the data sheet for your battery to ensure compatibility.

## Evaluates: MAX32672

## Programming and Debugging

The  MAX32625 microcontroller  on  the  board  is  flashed with DAPLink firmware at the factory. It allows debugging and flashing the MAX32672 Arm Core over USB.

## Pushbuttons

There are three pushbuttons on the MAX32672FTHR board.

- SW2 - User-programmable function button connected to the MAX32672 Port 0.10.
- SW5 - Resets the MAX32672 through the RSTN input of the MAX32672.
- SW6 - DAPLink adapter button. Keep this button pressed while applying power to the board to put a MAX32625 DAPLink adapter on board to MAINTENANCE mode for DAPLink firmware updates.

## LEDs

There are 2 RGB LEDs on MAX32672FTHR board.

- D2 - DAPLink adapter MAX32625 status LED. Controlled by the DAPLink adapter and cannot be used as a user LED.
- D3 - Connected to the MAX32672FTHR GPIO ports. This LED can be controlled by user firmware.
- Port 0.2: Red
- Port 0.3: Green
- Port 0.4: Blue

## MAX32672FTHR Application Platform

Evaluates: MAX32672

Figure 1. MAX32672FTHR Pinout Diagram

<!-- image -->

Figure 2. MAX32672FTHR Bottom-Side Components

<!-- image -->

## MAX32672FTHR Application Platform

## Expansion Headers

## Table 1. J9 Pinout

|   PIN | NAME   | DESCRIPTION                                                                                    |
|-------|--------|------------------------------------------------------------------------------------------------|
|     1 | RST    | Master Reset Signal                                                                            |
|     2 | 3V3    | 3.3V Output. Typically used to provide 3.3V to peripherals connected to the expansion headers. |
|     3 | 1V8    | 1.8V Output. Typically used to provide 1.8V to peripherals connected to the expansion headers. |
|     4 | GND    | Ground                                                                                         |
|     5 | P0_11  | GPIO or Analog Input (AIN3 channel)                                                            |
|     6 | P0_12  | GPIO or Analog Input (AIN4 channel)                                                            |
|     7 | P0_13  | GPIO or Analog Input (AIN5 channel)                                                            |
|     8 | P0_22  | GPIO or ADC_TRIG signal                                                                        |
|     9 | P0_27  | GPIO or QERR signal                                                                            |
|    10 | P0_26  | GPIO or QDIR signal                                                                            |
|    11 | P0_16  | GPIO or SPI1 clock signal                                                                      |
|    12 | P0_15  | GPIO or SPI1 MOSI signal                                                                       |
|    13 | P0_14  | GPIO or SPI1 MISO signal                                                                       |
|    14 | P0_28  | GPIO or UART1 Rx signal                                                                        |
|    15 | P0_29  | GPIO or UART1 Tx signal                                                                        |
|    16 | GND    | Ground                                                                                         |

## Table 2. J7 Pinout

|   PIN | NAME   | DESCRIPTION                                                                                                                                                               |
|-------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | SYS    | SYS Switched Connection to the Battery. This is the primary system power supply and automatically switches between the battery voltage and the USB supply when available. |
|     2 | PWR    | In battery-powered mode, turns off the PMIC if shorted to ground.                                                                                                         |
|     3 | VBUS   | USB VBUS Signal. This can be used as a 5V supply when connected to USB. This pin can also be used as an input to power the board.                                         |
|     4 | P0_5   | GPIO or HFX_CLK_OUT signal                                                                                                                                                |
|     5 | P0_6   | GPIO or QEAsignal                                                                                                                                                         |
|     6 | P0_7   | GPIO or QEB signal                                                                                                                                                        |
|     7 | P0_23  | GPIO or QEI signal                                                                                                                                                        |
|     8 | P0_17  | GPIO or SPI1 slave select signal                                                                                                                                          |
|     9 | P0_24  | GPIO or QES signal                                                                                                                                                        |
|    10 | P0_25  | GPIO or QMATCH signal                                                                                                                                                     |
|    11 | P0_18  | GPIO or I2C2 SCL signal                                                                                                                                                   |
|    12 | P0_19  | GPIO or I2C2 SDAsignal                                                                                                                                                    |

│

Evaluates: MAX32672

## MAX32672FTHR Application Platform

## MAX32672FTHR Application Platform Diagram

<!-- image -->

## Ordering Information

| PART          | TYPE                 |
|---------------|----------------------|
| MAX32672FTHR# | Application Platform |

#Denotes RoHS compliant.

Evaluates: MAX32672

│

## MAX32672FTHR Application Platform

## MAX32672FTHR Application Platform Bill of Materials

|   ITEM | REF_DES                    | DNI/ DNP   |   QTY | MFG PART #          | MANUFACTURER        | VALUE               | DESCRIPTION   |
|--------|----------------------------|------------|-------|---------------------|---------------------|---------------------|---------------|
|      1 | C1, C4- C6, C15            | -          |     5 | ZRB15XR61A475ME01   | MURATA              | 4.7µF               | CAP           |
|      2 | C2                         | -          |     1 | GRM033R61A225KE47   | MURATA              | 2.2µF               | CAP           |
|      3 | C3, C21-C23                | -          |     4 | CL21B106KOQNNN      | SAMSUNG             | 10µF                | CAP           |
|      4 | C7, C14, C19, C20, C35-C40 | -          |    10 | C0402C105K8PAC      | KEMET               | 1µF                 | CAP           |
|      5 | C8                         | -          |     1 | GRM033C81E104KE14   | MURATA              | 0.1µF               | CAP           |
|      6 | C16, C17                   | -          |     2 | GCQ1555C1H190JB01   | MURATA              | 19pF                | CAP           |
|      7 | C18                        | -          |     1 | C0402C472K5RAC      | KEMET               | 4700pF              | CAP           |
|      8 | C32, C34                   | -          |     2 | GMK107BJ105KA       | TAIYO YUDEN         | 1µF                 | CAP           |
|      9 | C33                        | -          |     1 | C1608X8R1E104K080AA | TDK                 | 0.1µF               | CAP           |
|     10 | D1, D4                     | -          |     2 | STPS120M            | ST MICROELECTRONICS | STPS120M            | DIODE         |
|     11 | D2, D3                     | -          |     2 | IN-B101FCH          | INOLUX              | IN-B101FCH          | DIODE         |
|     12 | F1                         | -          |     1 | 0494.500NRHF        | LITTELFUSE          | 0.5A                | FUSE          |
|     13 | J2                         | -          |     1 | S2B-PH-K-S(LF)(SN)  | JST MANUFACTURING   | S2B-PH-K-S(LF) (SN) | CONNECTOR     |
|     14 | J4                         | -          |     1 | 47346-0001          | MOLEX               | 47346-0001          | CONNECTOR     |
|     15 | L1-L3                      | -          |     3 | NRH3012T4R7MN       | TAIYO YUDEN         | 4.7µH               | INDUCTOR      |
|     16 | L5                         | -          |     1 | BLM21PG221SN1       | MURATA              | 220 Ω               | INDUCTOR      |
|     17 | L6                         | -          |     1 | HZ1206C202R-10      | LAIRD TECHNOLOGIES  | 2000 Ω              | INDUCTOR      |
|     18 | R1-R3, R13, R35            | -          |     5 | ERJ-2RKF1002        | PANASONIC           | 10k Ω               | RES           |
|     19 | R4, R20, R23               | -          |     3 | ERJ-2GEJ102         | PANASONIC           | 1k Ω                | RES           |
|     20 | R5                         | -          |     1 | CRCW040215K0FK      | VISHAY DALE         | 15k Ω               | RES           |
|     21 | R6                         | -          |     1 | RR0510P-203-D       | SUSUMU CO LTD.      | 20k Ω               | RES           |
|     22 | R7, R9, R12                | -          |     3 | CRCW0402100KFK      | VISHAY DALE         | 100k Ω              | RES           |
|     23 | R8                         | -          |     1 | ERJ-2RKF8062        | PANASONIC           | 80.6k Ω             | RES           |
|     24 | R10                        | -          |     1 | ERJ-2RKF4703        | PANASONIC           | 470k Ω              | RES           |
|     25 | R11                        | -          |     1 | CRCW0402232KFK      | VISHAY DALE         | 232k Ω              | RES           |
|     26 | R14-R17, R32-R34           | -          |     7 | ERJ-2GE0R00         | PANASONIC           | 0 Ω                 | RES           |

│

Evaluates: MAX32672

## MAX32672FTHR Application Platform

Evaluates: MAX32672

## MAX32672FTHR Application Platform Bill of Materials (continued)

|   ITEM | REF_DES       | DNI/ DNP   |   QTY | MFG PART #            | MANUFACTURER              | VALUE               | DESCRIPTION                |
|--------|---------------|------------|-------|-----------------------|---------------------------|---------------------|----------------------------|
|     27 | R18           | -          |     1 | ERJ-2RKF1004          | PANASONIC                 | 1M Ω                | RES                        |
|     28 | R19, R22      | -          |     2 | RC0402FR-072K2L       | YAGEO                     | 2.2k Ω              | RES                        |
|     29 | R21, R24      | -          |     2 | ERJ-2RKF5100          | PANASONIC                 | 510 Ω               | RES                        |
|     30 | R25, R26      | -          |     2 | CRCW04023K30FK        | VISHAY DALE               | 3.3k Ω              | RES                        |
|     31 | R28           | -          |     1 | CRCW0402768KFK        | VISHAY DALE               | 768k Ω              | RES                        |
|     32 | SW2, SW5, SW6 | -          |     3 | EVP-AA102K            | PANASONIC                 | EVP-AA102K          | SWITCH                     |
|     33 | U1            | -          |     1 | MAX8819AETI+          | MAXIM                     | MAX8819AETI+        | IC                         |
|     34 | U2            | -          |     1 | SN74LVC1G07DCK        | TEXAS INSTRUMENTS         | SN74LVC1G07DCK      | IC                         |
|     35 | U3            | -          |     1 | MAX32672GTL+          | MAXIM                     | MAX32672GTL+        | EVKIT PART - IC            |
|     36 | U4            | -          |     1 | MAX13202EALT+         | MAXIM                     | MAX13202EALT+       | IC                         |
|     37 | U9            | -          |     1 | MAX32625IWY+          | MAXIM                     | MAX32625IWY+        | IC                         |
|     38 | Y1            | -          |     1 | SXT32419DD27-24.576M  | SUNTSU ELECTRONICS INC    | 24.576MHZ           | CRYSTAL                    |
|     39 | Y3, Y4        | -          |     2 | ABS07-32.768KHZ-6-T   | ABRACON                   | 32.768kHZ           | CRYSTAL                    |
|     40 | PCB           | -          |     1 | MAX32672_FTHR_ APPS_A | MAXIM                     | PCB                 | PCB:MAX32672 _FTHR_APPS_ A |
|     41 | J1            | -          |     1 | FFC2B28-12-G          | GLOBAL CONNECTOR TECH     |                     | CONNECTOR                  |
|     42 | J7            | DNI        |     1 | PBC12SAAN             | SULLINS ELECTRONICS CORP. | PBC12SAAN           | CONNECTOR                  |
|     43 | J9            | DNI        |     1 | PBC16SAAN             | SULLINS ELECTRONICS CORP. | PBC16SAAN           | CONNECTOR                  |
|     44 | J1            | DNI        |     1 | CFAL12832C-0091B-W    | CRYSTALFONTZ              | CFAL12832C- 0091B-W | MODULE                     |
|     45 | C9-C13        | DNP        |     0 | GRM1555C1H6R0DA01     | MURATA                    | 6pF                 | CAP                        |
|     46 | J5            | DNP        |     0 | TC2050-IDC-NL         | TAG-CONNECT               | TC2050-IDC-NL       | CONNECTOR                  |
|     47 | R27, R30, R31 | DNP        |     0 | CRCW0402499RFK        | VISHAY DALE               | 499 Ω               | RES                        |

│

## MAX32672FTHR Application Platform

## MAX32672FTHR Application Platform Schematics

<!-- image -->

│

Evaluates: MAX32672

## MAX32672FTHR Application Platform

Evaluates: MAX32672

## MAX32672FTHR Application Platform Schematics (continued)

<!-- image -->

│

## MAX32672FTHR Application Platform

## MAX32672FTHR Application Platform Schematics (continued)

<!-- image -->

## MAX32672FTHR Application Platform

Evaluates: MAX32672

## MAX32672FTHR Application Platform Schematics (continued)

<!-- image -->

│

## MAX32672FTHR Application Platform

## MAX32672FTHR Application Platform PCB Layouts

<!-- image -->

MAX32672FTHR Application Platform PCB Layout-Mask Top

<!-- image -->

MAX32672FTHR Application Platform PCB Layout-Top

<!-- image -->

MAX32672FTHR Application Platform PCB Layout-Layer 2 Ground

<!-- image -->

MAX32672FTHR Application Platform PCB Layout-Layer 3 Signal

MAX32672FTHR Application Platform PCB Layout-Layer 4 Signal

<!-- image -->

MAX32672FTHR Application Platform PCB Layout-Layer 5 Power

<!-- image -->

│

## MAX32672FTHR Application Platform

## MAX32672FTHR Application Platform PCB Layouts (continued)

<!-- image -->

MAX32672FTHR Application Platform PCB Layout-Bottom

<!-- image -->

MAX32672FTHR Application Platform PCB Layout-Mask Bottom

<!-- image -->

MAX32672FTHR Application Platform PCB Layout-Paste Top

<!-- image -->

MAX32672FTHR Application Platform PCB Layout-Paste Bottom

MAX32672FTHR Application Platform PCB Layout-Silk Top

<!-- image -->

MAX32672FTHR Application Platform PCB Layout-Silk Bottom

<!-- image -->

│

## MAX32672FTHR Application Platform

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX32672