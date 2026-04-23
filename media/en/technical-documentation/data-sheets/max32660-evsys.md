<!-- lastmod 2023-04-07 -->
## MAX32660 Evaluation System

## General Description

The MAX32660 evaluation system offers a compact development  platform  that  provides  access  to  all  the  features  of  the  MAX32660  in  a  tiny,  easy  to  use  board.  A MAX32625PICO-based  debug  adapter  comes  attached to the main board. It can be snapped free when programming is complete. The debug module supports an optional 10-pin Arm® Cortex® debug connector for DAPLink functionality. Combined measurements are 0.65in x 2.2in, while the main board alone measures 0.65in x 0.95in. External connections terminate in a dual-row header footprint compatible  with  both  thru-hole  and  SMT  applications.  This board provides a powerful processing subsystem in a very small space that can be easily integrated into a variety of applications.

## Kit Contents

- MAX32660 EVSYS board
- USB A to Micro B cable

Ordering Information appears at end of data sheet.

## MAX32660 EV System Photo

<!-- image -->

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

319-100250; Rev 1; 9/18

Evaluates: MAX32660

## Features

- MAX32660 Microcontroller
-  Arm Cortex-M4F, 96MHz
-  256KB Flash Memory
-  96KB SRAM
- 16KB Instruction Cache
-  Two SPIs
- Two I 2 Cs
-  Two UARTs
-  14 GPIOs
- DIP Breakout Board
- 100mil Pitch Dual Inline Pin Headers
- Breadboard Compatible
- Integrated Peripherals
- Red Indicator LED
- User Pushbutton
- MAX32625PICO-Based Debug Adapter
-  CMSIS-DAP SWD Debugger
- Virtual UART Console

<!-- image -->

## Power Supply

The MAX32660 only needs a single supply between 1.7V and 3.6V to operate. The primary power input for this EV kit is the VDDIO pin at header J2 pin 9. Power can also be applied through the debug adapter (JP1 selects voltage).  The  MAX32660  includes  an  internal  LDO  for  the core  supply.  This  LDO  can  be  disabled  so  that  a  more efficient external regulator can be used. The EV kit provides access to VCORE at header JH2 pin 8. VDDIO and VCORE are each decoupled with 1µF capacitors.

## Programming and Debugging

The  MAX32660  EV  kit  integrates  a  MAX32625PICObased  debugger.  The  debugger  provides  power  to  the MAX32660  and  is  designed  to  be  removed  from  the system  when  programming  is  finalized.  It  can  be  reattached  by  restoring  the  electrical  connections  between JH1 and JH2.

│

Evaluates: MAX32660

Figure 1. Pinout Diagram

<!-- image -->

| 3rd    | 2nd   | 1st   | NAME   | NAME    | 1st   | 2nd   | 3rd   |
|--------|-------|-------|--------|---------|-------|-------|-------|
|        | CTS   | SCK   | P0_12  | P0_10   | MISO  | TX    |       |
|        | RTS   | SSEL  | P0_13  | P0_11   | MOSI  | RX    |       |
|        | TX    | MISO  | P0_4   | P0_5    | MOSI  | RX    |       |
| TMR    | SSEL  | SDA   | P0_3   | P0_6    | SCK   | CTS   | TX    |
| 32KCAL | SCK   | SCL   | P0_2   | P0_7    | SSEL  | RTS   | RX    |
| RX     | MOSI  | SWCLK | P0_1   | P0_8    | SCL   | SWDIO |       |
| TX     | MISO  | SWDIO | P0_0   | P0_9    | SDA   | SWCLK |       |
|        |       |       | RSTN   | VCORE   |       |       |       |
|        |       |       | GND    | HDR_VIO |       |       |       |

## Quick Start

To begin using the MAX32660 EV system, follow these steps:

- 1) Use jumper JP1 to select desired target VDD.
- 2) Connect the EVSYS board to the computer using the included micro USB cable.
- 3) Follow the instructions in the MAX32660 EV system software user's guide.

## Detailed Description of Hardware (or Software)

The MAX32660 EV system board is a compact breakout board designed to make developing with the MAX32660 quick  and  easy.  In  addition  to  making  all  the  GPIOs accessible at 100mil pitch headers, it also includes key components such as decoupling capacitors and a crystal for the RTC. A pushbutton, LED, and debug adapter are also included. The two 100mil pitch headers are oriented in parallel so that this board can be inserted into a standard solderless breadboard.

## MAX32660 Evaluation System

## Console UART

UART1A  Tx  and  Rx  signals  at  port  P0.10  and  P0.11 are  connected  to  the  programming  and  debug  header JH2  pins  2  and  3  through  1kΩ  resistors.  This  provides a convenient way to communicate with a PC though the virtual serial port available in Maxim's CMSIS-DAP debug adapter. The series resistors allow for these signals to be overdriven by other circuits without modifying the board.

## Pushbutton

A pushbutton is connected to GPIO P0.12 for general user input.  It  is  connected  through  a  series  resistor  to  protect against contention if this I/O is being used for other purposes.

## Table 1. JH4 Header Pinout

|   PIN | NAME   | ALTERNATE FUNCTION 1   | ALTERNATE FUNCTION 2   | ALTERNATE FUNCTION 3   |
|-------|--------|------------------------|------------------------|------------------------|
|     1 | P0.12  | SPI1A_SCK              | UART1A_CTS             | -                      |
|     2 | P0.13  | SPI1A_SS0              | UART1A_RTS             | -                      |
|     3 | P0.4   | SPI0A_MISO             | UART0A_TX              | -                      |
|     4 | P0.3   | I2C1A_SDA              | SPI1B_SS0              | TIMER_TMR0             |
|     5 | P0.2   | I2C1A_SCL              | SPI1B_SCK              | 32KCAL                 |
|     6 | P0.1   | SWDCLK                 | SPI1B_MOSI             | UART1B_RX              |
|     7 | P0.0   | SWDIO                  | SPI1B_MISO             | UART1B_TX              |
|     8 | RSTN   | -                      | -                      | -                      |
|     9 | GND    | -                      | -                      | -                      |

## Table 2. JH3 Header Pinout

|   PIN | NAME   | ALTERNATE FUNCTION 1   | ALTERNATE FUNCTION 2   | ALTERNATE FUNCTION 3   |
|-------|--------|------------------------|------------------------|------------------------|
|     1 | P0.10  | SPI1A_MISO             | UART1A_TX              | -                      |
|     2 | P0.11  | SPI1A_MOSI             | UART1A_RX              | -                      |
|     3 | P0.5   | SPI0A_MOSI             | UART0A_RX              | -                      |
|     4 | P0.6   | SPI0A_SCK              | UART0A_CTS             | UART1C_TX              |
|     5 | P0.7   | SPI0A_SS0              | UART0A_RTS             | UART1C_RX              |
|     6 | P0.8   | I2C0A_SCL              | SWDIO                  | -                      |
|     7 | P0.9   | I2C0A_SDA              | SWDCLK                 | -                      |
|     8 | VCORE  | -                      | -                      | -                      |
|     9 | VDDIO  | -                      | -                      | -                      |

## Ordering Information

| PART            | TYPE      |
|-----------------|-----------|
| MAX32660-EVSYS# | EV System |

# Denotes RoHS compliance.

## Indicator LED

A red LED is connected to GPIO P0.13 for general user indication. It is connected with a MOSFET buffer so that it does not provide a significant load when used for other purposes.

## Clocking

The IC operates from a system clock that can be selected from one of three on-chip oscillators from 8kHz to 96MHz. The  external  32.768kHz  crystal,  Y2,  provides  the  RTC with an accurate time base and is also used to calibrate the internal clock.

Evaluates: MAX32660

│

## MAX32660 Evaluation System

## MAX32660 EV System Bill of Materials

|   QTY | PART                                        | VALUE              | BOM DESCRIPTION                            | MANUFACTURER PN    | MANUFACTURER                     |
|-------|---------------------------------------------|--------------------|--------------------------------------------|--------------------|----------------------------------|
|    12 | C1,C2,C3,C4,C8, C9,C10,C11,C12,C 14,C15,C16 | 1uF                | CAP CER 1UF 6.3V X5R 0402                  | GRM155R60J105KE19D | Murata                           |
|     2 | C5,C7                                       | 4.7uF              | CAP CER 4.7uF 10V 10% X5R 0603             | C0603C475K8PACTU   | Kemet                            |
|     1 | C6                                          | 10nF               | CAP CER 10000PF 16V 10% X7R 0402           | GRM155R71C103KA01D | Murata Electronics North America |
|     1 | C13                                         | 100nF              | CAP CER 0.1UF 10V 10% X5R 0402             | GRM155R61A104KA01D | Murata                           |
|     1 | C17                                         | 100nF              | CAP CER 0.1UF 6.3V 10% X5R 0201            | GRM033R60J104KE19D | Murata                           |
|     1 | D1                                          | SML-LX0404SIUPGUSB | LED RGB CLEAR 0404 SMD                     | SML-LX0404SIUPGUSB | Lumex Opto/Components Inc.       |
|     1 | D2                                          | RED                | LED RED DIFFUSED 0603 SMD                  | SML-LX0603SRW-TR   | Lumex Opto/Components Inc.       |
|     1 | J1                                          | MICRO USB B R/A    | CONN RCPT 5POS MICRO USB B R/A             | 47346-0001         | Molex                            |
|     1 | J2                                          | MAXDAP             | MAXDAP_POGO_PIN CBL PLUG-OF-NAILS 10-PIN   | TC2050-IDC-NL      | Tag-Connect LLC                  |
|     1 | J3                                          | 4P TP              | 4P USB TP 1.27MM SMT PAD                   |                    |                                  |
|     1 | J4                                          | 10P CORTEX DEBUG   | CONN HEADER 10POS DUAL .05" SMD            | FTSH-105-01-F-DV-K | Samtec                           |
|     1 | JH1                                         | DNI 1              | DNI CON 8P LS50MIL SMT 30X15PAD BREAKAWAY1 |                    |                                  |
|     1 | JH2                                         | DNI 2              | DNI CON 8P LS50MIL SMT 30X15PAD BREAKAWAY2 |                    |                                  |
|     2 | JH3,JH4                                     | 9P 1x9             | CONN HEADER .100 SINGL STR 9POS            | PEC09SAAN          | Sullins                          |
|     1 | JP1                                         | 3P JUMPER          | CONN HEADER .100 SINGL STR 3POS            | PEC03SAAN          | Sullins                          |
|     1 | PCB1                                        | PCB                |                                            |                    |                                  |
|     1 | Q1                                          | DMP210DUFB4-7      | MOSFET P-CH 20V 0.2A X2-DFN1006            | DMP210DUFB4-7      | Diodes Incorporated              |
|     1 | Q2                                          | BSS806N            | MOSFET N-CH 20V 2.3A SOT23                 | BSS806N H6327      | Infineon Technologies            |
|     2 | R1,R5                                       | 2.7K               | RES SMD 2.7K OHM1% 1/10W 0402              | ERJ-2RKF2701X      | Panasonic                        |
|     1 | R2                                          | 1.4K               | RES SMD 1.4K OHM1% 1/10W 0402              | ERJ-2RKF1401X      | Panasonic Electronic Components  |
|     4 | R3,R10,R11,R17                              | 1K                 | RES 1K OHM1/10W 1% 0402 SMD                | ERJ-2RKF1001X      | Panasonic                        |
|     2 | R4,R8                                       | 10                 | RES SMD 10 OHM1% 1/10W 0402                | ERJ-2RKF10R0X      | Panasonic                        |
|     1 | R6                                          | 100K               | RES SMD 100K OHM1% 1/10W 0402              | ERJ-2RKF1003X      | Panasonic                        |
|     3 | R7,R15,R18                                  | 10K                | RES SMD 10K OHM1% 1/16W 0402               | RC0402FR-0710KL    | Yageo                            |
|     2 | R9,R13                                      | 499                | RES SMD 499 OHM1% 1/10W 0402               | ERJ-2RKF4990X      | Panasonic Electronic Components  |
|     2 | R12,R14                                     | 0                  | RES 0.0 OHM1/10W JUMP 0402 SMD             | ERJ-2GE0R00X       | Panasonic                        |
|     1 | R16                                         | 150K               | RES SMD 150K OHM1% 1/10W 0402              | ERJ-2RKF1503X      | Panasonic                        |
|     2 | R19,R20                                     | 0                  | RES 0.0 OHM1/20W JUMP 0201 SMD             | ERJ-1GN0R00C       | Panasonic                        |
|     3 | SH1,SH2,SH3                                 | DNI                | DNI 2 NET SHORT 8 MIL LINE                 |                    |                                  |
|     2 | SW1,SW2                                     | B3U-1000P          | SWITCH TACTILE SPST-NO 0.05A 12V           | B3U-1000P          | Omron Electronics                |
|     1 | U1                                          | MAX8841ELT18+T     | IC REG LINEAR 1.8V 150MA 6UDFN             | MAX8841ELT18+T     | Maxim Integrated                 |
|     1 | U2                                          | MAX32625IWY+T      | IC MCU 32BIT 512KB FLASH 63WLP             | MAX32625IWY+T      | Maxim Integrated                 |
|     1 | U3                                          | MAX8841ELT33+T     | IC REG LINEAR 3.3V 150MA 6UDFN             | MAX8841ELT33+T     | Maxim Integrated                 |
|     1 | U4                                          | MAX38902AATA+      | IC REG LDO LINEAR ADJ .5A 8TDFN            | MAX38902AATA+      | Maxim Integrated                 |
|     1 | U5                                          | MAX32660GTP+       | MAX32660GTP+ 20P TQFN                      | MAX32660GTP+       | Maxim Integrated                 |
|     1 | U6                                          | DS28E05R+T         | IC EEPROM 896BIT 1WIRE SOT23-3             | DS28E05R+T         | Maxim Integrated                 |
|     1 | U7                                          | MAX13202EALT+T     | ESD PROTECT 2CH 6-UDFN                     | MAX13202EALT+      | Maxim Integrated                 |
|     1 | U8                                          | MAX14689EWL+T      | IC SWITCH ANALOG DPDT 9-WLP                | MAX14689EWL+T      | Maxim Integrated                 |
|     2 | Y1,Y2                                       | 32.768KHz          | CRYSTAL 32.7680KHZ 6PF SMD                 | ECS-.327-6-12-TR   | ECX-12_200x120                   |

│

Evaluates: MAX32660

## MAX32660 EV System Schematic

<!-- image -->

│

Evaluates: MAX32660

## MAX32660 EV System Schematic (continued)

<!-- image -->

│

Evaluates: MAX32660

## MAX32660 EV System Schematic (continued)

<!-- image -->

│

Evaluates: MAX32660

## MAX32660 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                  | PAGES CHANGED   |
|-------------------|-----------------|------------------------------|-----------------|
|                 0 | 9/18            | Initial release              | -               |
|                 1 | 9/18            | Updated Ordering Information | 3               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPpOied. 0a[iP ,ntegrated reserves the right to Fhange the FirFuitr\ and speFi¿Fations Zithout notiFe at an\ tiPe.

<!-- image -->

│

Evaluates: MAX32660