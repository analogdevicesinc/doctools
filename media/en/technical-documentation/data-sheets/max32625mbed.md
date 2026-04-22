<!-- lastmod 2023-04-07 -->
## MAX32625MBED ARM mbed Enabled Development Platform

## General Description

The MAX32625MBED provides a convenient platform for evaluating  the  capabilities  of  the  MAX32625  microcontroller.  The  MAX32625MBED  also  provides  a  complete, functional  system  ideal  for  developing  and  debugging applications.

The  MAX32625MBED  includes  a  MAX32625  ARM ® Cortex ® -M4  microcontroller  with  FPU,  prototyping  area with adjacent access to precision analog front end (AFE) connections,  I/O  access  through  Arduino ® -compatible connectors, additional I/O access through 100mil x 100mil headers,  USB  interface,  and  other  general-purpose  I/O devices.

Go to http://developer.mbed.org/platforms/ MAX32625MBED to  get  started  developing  with  this board.

Ordering Information appears at end of data sheet.

ARM and Cortex are registered trademarks of ARM Limited (or its subsidiaries) in the EU and/or elsewhere. All rights reserved.

Arduino is a registered trademark of Arduino, LLC.

Evaluates: MAX32625

## Benefits and Features

- Arduino-Compatible Headers and mbed Support Enable Rapid Prototyping of Low-Power Embedded Systems
- MAX326325 Microcontroller
- 96MHz ARM Cortex-M4 Microcontroller with FPU
-  512KB Flash Memory
-  160KB SRAM
- 8KB Instruction Cache
- Full-Speed USB 2.0
- Three SPI Masters, One Slave
- Two I 2 C Masters, One Slave
-  Three UARTs
- 1-Wire Master
-  40 GPIOs
- Four Input 10-Bit ADC
- Expansion Connections
- Arduino Form-Factor Headers
- MicroSD Card Connector
-  Micro-USB Connectors
- Prototyping Area
- Integrated Peripherals
- 4x User Indicator LED
- 2x User Pushbutton
- Integrated DAPLink Programming Adapter
-  Drag-and-Drop Programming
-  CMSIS-DAP SWD Debugger
- USB Virtual UART

<!-- image -->

## MAX32625MBED ARM mbed Enabled Development Platform

Evaluates: MAX32625

Figure 1. MAX32625MBED Features

<!-- image -->

## MAX32625MBED ARM mbed Enabled Development Platform

Evaluates: MAX32625

Figure 2. MAX32625MBED Pinout

<!-- image -->

## Detailed Description

The MAX32625MBED board is general purpose in nature. However, the ability to access the majority of I/O signals allow  for  easy  evaluation  of  the  MAX32625.  This  section describes each major function or component on the MAX32625MBED.

## Board Power

The MAX32625MBED can be powered by either of the USB  Micro-B  connectors  or  an  external  source:  VIN, V5.0, or V3.3.

## HDK USB Supply

The HDK USB connector provides access to the DAPLink circuitry.  Power  supplied  from  the  HDK  USB  connector, CN2, is limited to 500mA. Only the HDK USB connector, CN2, powers the DAPLink circuitry. This supply is regulated to supply the HDK\_V3.3 rail and is also connected to the V5.0 rail through a forward biased diode. From the V5.0 rail, it is regulated to supply V3.3.

## MAX32625 USB Device Interface Supply

Power supplied from the MAX32625 USB device interface connector, CN1 is limited to 500mA. This supply is connected to the V5.0 rail  through  a  forward  biased  diode. From the V5.0 rail, it is regulated to supply V3.3.

│

## MAX32625MBED ARM mbed Enabled Development Platform

## External Supply VIN

Power  supplied  from  the  VIN,  J4  pin  8,  is  regulated  to supply the V5.0 rail. The voltage input range for this input is 5V to 12V DC.

## External Supplies V5.0 and V3.3

Power supplied by V5.0, J4 pin 5, is connected directly to the V5.0 rail. Likewise, power supplied by V3.3, J4 pin 4, is connected directly to the V3.3 rail.

## Pushbuttons

Two pushbuttons are available for application use: SW2 and  SW3  are  connected  to  port  pins  P2\_2  and  P2\_3, respectively.  Pushbuttons  are  normally  open;  therefore, provide a logic 0 when depressed. Firmware defines the action taken on switch closure. Pushbutton SW4 provides a power-on reset function for the MAX32625 by asserting the RSTN input.

Table 1. Arduino Socket Pinout

| PIN   | NAME   | DESCRIPTION                      |
|-------|--------|----------------------------------|
| J4p1  | N.C.   | Reserved                         |
| J4p2  | 3.3V   | +3.3V Output                     |
| J4p3  | RST    | Active-Low Reset                 |
| J4p4  | 3.3V   | +3.3V Output                     |
| J4p5  | 5V     | +5V Input/Output                 |
| J4p6  | GND    | Ground                           |
| J4p7  | GND    | Ground                           |
| J4p8  | VIN    | External Supply Input 5V to 12V  |
| J5p1  | AIN_0  | Analog Input 0 (Up to 5V)        |
| J5p2  | AIN_1  | Analog Input 1 (Up to 5V)        |
| J5p3  | AIN_2  | Analog Input 2 (1.2V Full Scale) |
| J5p4  | AIN_3  | Analog Input 3 (1.2V Full Scale) |
| J5p5  | P3_4   | Port 3 Bit 4, I 2 C Master 1 SDA |
| J5p6  | P3_5   | Port 3 Bit 5, I 2 C Master 1 SCL |
| J6p1  | P0_0   | Port 0 Bit 0, UART 0 Rx          |
| J6p2  | P0_1   | Port 0 Bit 1, UART 0 Tx          |

## USB

The MAX32625 provides an integrated USB2.0 Fullspeed interface  (12Mbps).  This  interface  is  accessed  through the USB Micro-B connector, CN1.

## LEDs

Four  LEDs  are  available  for  application  use:  D4  (yellow), D5 (red), D6 (blue), and D7 (green) are connected to MAX32620 GPIO pins P3\_3, P3\_0, P3\_2, and P3\_1, respectively.  LED  GPIOs should be configured as open drain  due  to  3.3V  LED  source  voltages. An  LED  illuminates when the appropriate GPIO pin is driven low. One power  supply  status  LED,  D10,  is  connected  to  supply rail V5.0.

## Prototyping Area

An area for adding customer-specific circuitry is provided. This matrix is on 100mil spacing and is usable for solder or  wire-wrap  construction.  Power  and  ground  rails  are conveniently located above and below this area.

| PIN   | NAME   | DESCRIPTION                      |
|-------|--------|----------------------------------|
| J6p3  | P0_2   | Port 0 Bit 2, UART 0 CTS         |
| J6p4  | P0_3   | Port 0 Bit 3, UART 0 RTS         |
| J6p5  | P0_4   | Port 0 Bit 4, SPI Master 0 MOSI  |
| J6p6  | P0_5   | Port 0 Bit 5, SPI Master 0 MISO  |
| J6p7  | P0_6   | Port 0 Bit 6, SPI Master 0 SSEL  |
| J6p8  | P0_7   | Port 0 Bit 7, SPI Master 0 SCK   |
| J3p1  | P1_4   | Port 1 Bit 4, SPI Master 1 SDIO2 |
| J3p2  | P1_5   | Port 1 Bit 5, SPI Master 1 SDIO3 |
| J3p3  | P1_3   | Port 1 Bit 3, SPI Master 1 SSEL  |
| J3p4  | P1_1   | Port 1 Bit 1, SPI Master 1 MOSI  |
| J3p5  | P1_2   | Port 1 Bit 2, SPI Master 1 MISO  |
| J3p6  | P1_0   | Port 1 Bit 0, SPI Master 1 SCK   |
| J3p7  | GND    | Ground                           |
| J3p8  | N.C.   | Not Connected                    |
| J3p9  | P1_6   | Port 1 Bit 6, I 2 C Master 0 SDA |
| J3p10 | P1_7   | Port 1 Bit 7, I 2 C Master 0 SCL |

│

Evaluates: MAX32625

## MAX32625MBED ARM mbed Enabled Development Platform

## Table 2. J8 SPI Header Pinout

|   PIN | NAME   | DESCRIPTION                     |
|-------|--------|---------------------------------|
|     1 | P2_6   | Port 2 Bit 6, SPI Master 2 MISO |
|     2 | 3.3V   | +3.3V Output                    |
|     3 | P2_4   | Port 2 Bit 4, SPI Master 2 SCK  |
|     4 | P2_5   | Port 2 Bit 5, SPI Master 2 MOSI |
|     5 | P2_7   | Port 2 Bit 7, SPI Master 2 SSEL |
|     6 | GND    | Ground                          |

## Table 3. J11 Header Pinout

|   PIN | NAME   | DESCRIPTION                      |
|-------|--------|----------------------------------|
|     1 | N.C.   | Not Connected                    |
|     2 | P1_4   | Port 1 Bit 4, SPI Master 1 SDIO2 |
|     3 | N.C.   | Not Connected                    |
|     4 | P1_5   | Port 1 Bit 5, SPI Master 1 SDIO3 |
|     5 | N.C.   | Not Connected                    |
|     6 | P1_3   | Port 1 Bit 3, SPI Master 1 SSEL  |
|     7 | N.C.   | Not Connected                    |
|     8 | P1_1   | Port 1 Bit 1, SPI Master 1 MOSI  |
|     9 | 3.3V   | +3.3V Output                     |
|    10 | P1_2   | Port 1 Bit 2, SPI Master 1 MISO  |
|    11 | GND    | Ground                           |
|    12 | P1_0   | Port 1 Bit 0, SPI Master 1 SCK   |
|    13 | P4_0   | Port 4 Bit 0, One Wire Master    |
|    14 | GND    | Ground                           |
|    15 | P1_6   | Port 1 Bit 6, I 2 C Master 0 SDA |
|    16 | N.C.   | Not Connected                    |
|    17 | P1_7   | Port 1 Bit 7, I 2 C Master 0 SCL |
|    18 | P1_6   | Port 1 Bit 6, I 2 C Master 0 SDA |
|    19 | N.C.   | Not Connected                    |
|    20 | P1_7   | Port 1 Bit 7, I 2 C Master 0 SCL |

Evaluates: MAX32625

## Table 4. J13 Header Pinout

|   PIN | NAME   | DESCRIPTION                     |
|-------|--------|---------------------------------|
|     1 | VIN    | External Supply Input 5V to 12V |
|     2 | P4_0   | Port 4 Bit 0, One Wire Master   |
|     3 | GND    | Ground                          |
|     4 | P4_1   | Port 4 Bit 1, OWMSPU            |
|     5 | GND    | Ground                          |
|     6 | P4_2   | Port 4 Bit 2, SPI Slave SDIO2   |
|     7 | 5V     | +5V Input/Output                |
|     8 | P4_3   | Port 4 Bit 3, SPI Slave SDIO3   |
|     9 | 3.3V   | +3.3V Output                    |
|    10 | P4_4   | Port 4 Bit 4, SPI Slave SCK     |
|    11 | RST    | Active-Low Reset                |
|    12 | P4_6   | Port 4 Bit 6, SPI Slave MISO    |
|    13 | 3.3V   | +3.3V Output                    |
|    14 | P4_5   | Port 4 Bit 5, SPI Slave MOSI    |
|    15 | NC     | Reserved                        |
|    16 | P4_7   | Port 4 Bit 7, SPI Slave SSEL    |

## Table 5. J15 Header Pinout

|   PIN | NAME   | DESCRIPTION                      |
|-------|--------|----------------------------------|
|     1 | N.C.   | Not Connected                    |
|     2 | P3_0   | Port 3 Bit 0, Red LED            |
|     3 | NC     | Not Connected                    |
|     4 | P3_1   | Port 3 Bit 1, Green LED          |
|     5 | P3_5   | Port 3 Bit 5, I 2 C Master 1 SCL |
|     6 | P3_2   | Port 3 Bit 2, Blue LED           |
|     7 | P3_4   | Port 3 Bit 4, I 2 C Master 1 SDA |
|     8 | P3_3   | Port 3 Bit 3, Yellow LED         |
|     9 | AIN_3  | Analog Input 3 (1.2V Full Scale) |
|    10 | P3_4   | Port 3 bit 4, I 2 C Master 1 SDA |
|    11 | AIN_2  | Analog Input 2 (1.2V Full Scale) |
|    12 | P3_5   | Port 3 Bit 5, I 2 C Master 1 SCL |
|    13 | AIN_1  | Analog Input 1 (Up to 5V)        |
|    14 | P3_6   | Port 3 Bit 6                     |
|    15 | AIN_0  | Analog Input 0 (Up to 5V)        |
|    16 | P3_7   | Port 3 Bit 7                     |

│

## MAX32625MBED ARM mbed Enabled Development Platform

## Table 6. J16 Header Pinout

|   PIN | NAME   | DESCRIPTION                       |
|-------|--------|-----------------------------------|
|     1 | P2_0   | Port 2 Bit 0, UART 1 Rx (DAPLink) |
|     2 | P0_0   | Port 0 Bit 0, UART 0 Rx           |
|     3 | P2_1   | Port 2 Bit 1, UART 1 Tx (DAPLink) |
|     4 | P0_1   | Port 0 Bit 1, UART 0 Tx           |
|     5 | P2_2   | Port 2 Bit 2, SW2                 |
|     6 | P0_2   | Port 0 Bit 2, UART 0 CTS          |
|     7 | P2_3   | Port 2 Bit 3, SW3                 |
|     8 | P0_3   | Port 0 Bit 3, UART 0 RTS          |
|     9 | P2_4   | Port 2 Bit 4, SPI Master 2 SCK    |
|    10 | P0_4   | Port 0 Bit 4, SPI Master 0 MOSI   |
|    11 | P2_5   | Port 2 Bit 5, SPI Master 2 MOSI   |
|    12 | P0_5   | Port 0 Bit 5, SPI Master 0 MISO   |
|    13 | P2_6   | Port 2 Bit 6, SPI Master 2 MISO   |
|    14 | P0_6   | Port 0 Bit 6, SPI Master 0 SSEL   |
|    15 | P2_7   | Port 2 Bit 7, SPI Master 2 SSEL   |
|    16 | P0_7   | Port 0 Bit 7, SPI Master 0 SCK    |

## Table 7. J17 Header Pinout

|   PIN | NAME   | DESCRIPTION                   |
|-------|--------|-------------------------------|
|     1 | P4_7   | Port 4 Bit 7, SPI Slave SSEL  |
|     2 | P4_3   | Port 4 Bit 3, SPI Slave SDIO3 |
|     3 | P4_5   | Port 4 Bit 5, SPI Slave MOSI  |
|     4 | P4_2   | Port 4 Bit 2, SPI Slave SDIO2 |
|     5 | P4_6   | Port 4 Bit 6, SPI Slave MISO  |
|     6 | P4_1   | Port 4 Bit 1, OWMSPU          |
|     7 | P4_4   | Port 4 Bit 4, SPI Slave SCK   |
|     8 | P4_0   | Port 4 Bit 0, 1-Wire Master   |
|     9 | GND    | Ground                        |
|    10 | GND    | Ground                        |
|    11 | 3.3V   | +3.3V Output                  |
|    12 | 3.3V   | +3.3V Output                  |

Evaluates: MAX32625

## Table 8. J12 SWD Header Pinout

|   PIN | NAME   | DESCRIPTION              |
|-------|--------|--------------------------|
|     1 | VIO    | Target I/O Voltage Input |
|     2 | TMS    | SWDIO                    |
|     3 | GND    | Ground                   |
|     4 | TCK    | SWDCLK                   |
|     5 | GND    | Ground                   |
|     6 | TXD    | DAPLink Tx               |
|     7 | NC     | Key                      |
|     8 | RXD    | DAPLink Rx               |
|     9 | N.C.   | Not Connected            |
|    10 | RST    | DAPLink Reset Output     |

## Table 9. On-Board Resources

| PORT   | NAME       | DESCRIPTION          |
|--------|------------|----------------------|
| P2_0   | DAPLink RX | Debug Console Rx     |
| P2_1   | DAPLink TX | Debug Console Tx     |
| P2_2   | SW2        | Pushbutton SW2       |
| P2_3   | SW3        | Pushbutton SW3       |
| P2_4   | SD SCK     | Micro SD Clock       |
| P2_5   | SD MOSI    | Micro SD MOSI        |
| P2_6   | SD MISO    | Micro SD MISO        |
| P2_7   | SD CS      | Micro SD Chip Select |
| P3_0   | LED1       | Red LED              |
| P3_1   | LED2       | Green LED            |
| P3_2   | LED3       | Blue LED             |
| P3_3   | LED4       | Yellow LED           |

│

## MAX32625MBED ARM mbed Enabled Development Platform

## MAX32625MBED EV System Schematic

<!-- image -->

│

Evaluates: MAX32625

## MAX32625MBED ARM mbed Enabled Development Platform

## MAX32625MBED EV System Schematic (continued)

<!-- image -->

Evaluates: MAX32625

## MAX32625MBED ARM mbed Enabled Development Platform

## MAX32625MBED EV System Schematic (continued)

<!-- image -->

│

Evaluates: MAX32625

## MAX32625MBED ARM mbed Enabled Development Platform

## MAX32625MBED EV System Bill of Materials

|   Item # | Quantity Designator                                                                                                       | Footprint                | Comment         | Manufacture Name                       | Part Number         | Description                      |
|----------|---------------------------------------------------------------------------------------------------------------------------|--------------------------|-----------------|----------------------------------------|---------------------|----------------------------------|
|        1 | 25 C1, C2, C3, C6, C7, C10, C11, C13, C15, C18, C19, C21, C22, C23, C24, C25, C29, C30, C32, C34, C35, C36, C37, C45, C49 | CAP0402-3D               | 1.0uF           | Samsung Electro-Mechanics America, Inc | CL05A105KQ5NNNC     | CAP CER 1UF 6.3V 10% X5R 0402    |
|        2 | 4 C4, C26, C27, C28                                                                                                       | CAP0603-3D               | 4.7uF           | Samsung Electro-Mechanics America, Inc | CL10B475KQ8NQNC     | CAP CER 4.7UF 6.3V 10% X7R 0603  |
|        3 | 4 C9, C31, C55, C56                                                                                                       | CAP0402-3D               | 0.1uF           | Samsung Electro-Mechanics America, Inc | CL05A104KQ5NNNC     | CAP CER 0.1UF 6.3V 10% X5R 0402  |
|        4 | 4 C16, C17, C41, C47                                                                                                      | CAP0603-3D               | 0.1uF           | Samsung Electro-Mechanics America, Inc | CL10B104KO8NNNC     | CAP CER 0.1UF 16V 10% X7R 0603   |
|        5 | 1 C38                                                                                                                     | CAP0805-3D               | 22uF            | TDK Corporation                        | C2012X5R1C226M085AC | CAP CER 22UF 16V 20% X5R 0805    |
|        6 | 1 C39                                                                                                                     | CAP0603-3D               | 0.01uF          | Samsung Electro-Mechanics America, Inc | CL10B103KB8NCNC     | CAP CER 10000PF 50V 10% X7R 0603 |
|        7 | 1 C40                                                                                                                     | CAP0805-3D               | 2.2uF           | Murata Electronics North America       | GRM21BF51C225ZA01L  | CAP CER 2.2UF 16V Y5V 0805       |
|        8 | 1 C42                                                                                                                     | CAP0805-3D               | 4.7uF           | Samsung Electro-Mechanics America, Inc | CL21A475KPFNNNE     | CAP CER 4.7UF 10V 10% X5R 0805   |
|        9 | 1 C43                                                                                                                     | CAP0805-3D               | 10uF            | TDK Corporation                        | C2012X5R1A106K125AB | CAP CER 10UF 10V 10% X5R 0805    |
|       10 | 2 CN1, CN2                                                                                                                | USBMICROB-3D             | Micro USB Port  | FCI                                    | 10103594-0001LF     | USB MICRO B TOP MOUNT            |
|       11 | 1 CN3                                                                                                                     | MICROSDCARD1             | MICRO SD CARD   | Molex, LLC                             | 0475710001          | Micro XD Card SPI Mode           |
|       12 | 3 D1, D5, D10                                                                                                             | 0603LED-3DRED            | MSD (RED)       | Lite-On Inc                            | LTST-C193KRKT-5A    | LED RED RECT CLEAR 0603          |
|       13 | 2 D2, D6                                                                                                                  | 0603LED-3DBLUE           | SERIAL (BLUE)   | OSRAM Opto Semiconductors Inc          | LB Q39G-L2N2-35-1   | LED CHIPLED BLUE 470NM 0603 SMD  |
|       14 | 2 D3, D7                                                                                                                  | 0603LED-3DGREEN          | DAP (GREEN)     | Dialight                               | 598-8081-107F       | LED INGAN GREEN CLEAR 0603 SMD   |
|       15 | 1 D4                                                                                                                      | 0603LED-3DYELLOW         | YELLOW          | Wurth Electronics Inc                  | 150060YS75000       | WL-SMCW SMD CHIP LED WATERCLEAR  |
|       16 | 2 D8, D11                                                                                                                 | DIODE2223-3D             | ES1B-E3/5AT     | Vishay Semiconductor Diodes Division   | ES1B-E3/5AT         | DIODE UFAST 100V 1A DO214AC      |
|       17 | 2 FB1, FB2                                                                                                                | 0805FB-3D                | BLM21PG221SN1D  | Murata Electronics North America       | BLM21PG221SN1D      | FERRITE CHIP 220 OHM 0805        |
|       18 | 1 J3                                                                                                                      | SIP10-FEM-3D             | CON10           | Sullins Connector Solutions            | PPPC101LFBN-RC      | CONN HEADER FMALE 10POS .1" GOLD |
|       19 | 2 J4, J6                                                                                                                  | SIP8-FEM-3D              | CON8            | Sullins Connector Solutions            | PPPC081LFBN-RC      | CONN HEADER FEMALE 8POS .1" GOLD |
|       20 | 1 J5                                                                                                                      | SIP6-FEM-3D              | CON6            | Sullins Connector Solutions            | PPPC061LFBN-RC      | CONN HEADER FEMALE 6POS .1" GOLD |
|       21 | 1 J8                                                                                                                      | DIH3X2-3D                | CON 2x3         | FCI                                    | 68602-206HLF        | CONN HEADER 6POS .100 STR 15AU   |
|       22 | 1 J11                                                                                                                     | DIH10X2-3D               | CON 2x10        | FCI                                    | 68602-220HLF        | CONN HEADER 20POS .100 STR 15AU  |
|       23 | 1 J12                                                                                                                     | DIH5X2-HEADER-0.05MIL-3D | FTS-105-01-F-DV | Samtec Inc                             | FTSH-105-01-L-DV-K  | CONN HEADER 10POS DUAL .05" SMD  |
|       24 | 3 J13, J15, J16                                                                                                           | DIH8X2-3D                | CON 2x8         | FCI                                    | 67997-216HLF        | CONN HEADER 16POS .100 STR 15AU  |
|       25 | 1 J17                                                                                                                     | DIH6X2                   | NOT POPULATED   | Sullins Connector Solutions            | PPPC062LJBN-RC      | CONN FEMALE 12POSDL .1" R/A GOLD |

Evaluates: MAX32625

## MAX32625MBED ARM mbed Enabled Development Platform

## MAX32625MBED EV System Bill of Materials (continued)

|   Item # Quantity | Designator                             | Footprint               | Comment        | Manufacture Name                       | Part Number         | Description                                                                           |
|-------------------|----------------------------------------|-------------------------|----------------|----------------------------------------|---------------------|---------------------------------------------------------------------------------------|
|                26 | 3 JP1, JP2, JP3                        | SIP2-3d                 | SHUNT          | Sullins Connector Solutions            | PBC36SAAN           | CONN HEADER .100 SINGL STR 36POS                                                      |
|                27 | 1 Q1                                   | 16001-3D                | PMV65XP,215    | NXP Semiconductors                     | PMV65XP,215         | MOSFET P-CH 20V 2.8A                                                                  |
|                28 | 1 R1                                   | 0603-3D                 | 20k            | Rohm Semiconductor                     | MCR03ERTF2002       | RES SMD 20K OHM 1% 1/10W 0603                                                         |
|                29 | 6 R2, R3, R12, R14, R26, R39           | 0603-3D                 | 1k             | Yageo                                  | RC0603FR-071KL      | RES SMD 1K OHM 1% 1/10W 0603                                                          |
|                30 | 2 R5, R19                              | 0603-3D                 | 1.5k           | Panasonic Electronic Components        | ERJ-3EKF1501V       | RES SMD 1.5K OHM 1% 1/10W 0603                                                        |
|                31 | 8 R6, R9, R16, R17, R18, R21, R24, R38 | 0603-3D                 | 10K            | Panasonic Electronic Components        | ERJ-3EKF1002V       | RES SMD 10K OHM 1% 1/10W 0603                                                         |
|                32 | 3 R27, R34, R36                        | 0603-3D                 | 500k           | Vishay Dale                            | CRCW0603499KFKEA    | RES SMD 499K OHM 1% 1/10W 0603                                                        |
|                33 | 3 R28, R29, R32                        | 0603-3D                 | 10             | Panasonic Electronic Components        | ERJ-3EKF10R0V       | RES SMD 10 OHM 1% 1/10W 0603                                                          |
|                34 | 1 R33                                  | 0603-3D                 | 100            | Samsung Electro-Mechanics America, Inc | RC1608F101CS        | RES SMD 100 OHM 1% 1/10W 0603                                                         |
|                35 | 1 R35                                  | 0603-3D                 | 2.2k           | Panasonic Electronic Components        | ERJ-3EKF2201V       | RES SMD 2.2K OHM 1% 1/10W 0603                                                        |
|                36 | 1 R40                                  | 0402-3D                 | 0 ohm          | Samsung Electro-Mechanics America, Inc | RC1005J000CS        | RES SMD 0.0 OHM JUMPER 1/16W                                                          |
|                37 | 1 RP1                                  | BUS RESISTOR 8X SMT     | 10k Res Pack   | CTS Resistor Products                  | 746X101103JP        | RESISTOR PACK 8 - BUSSED                                                              |
|                38 | 2 RT1, RT2                             | 1206POLYFUSE-3D         | MF-NSMF012-2   | Bourns Inc.                            | MF-NSMF012-2        | PTC RESETTABLE .12A 30V 1206                                                          |
|                39 | 3 SW2, SW3, SW4                        | RESET11-3D              | PUSH Button    | C&K Components                         | KSR221GLFS          | SWITCH TACTILE SPST-NO 0.05A 32V                                                      |
|                40 | 1 U1                                   | TQFP100-14x14mm-0.5p-3D | MAX32620       | Maxim Integrated                       | MAX32620ICQ+        | Ultra-Low Power Cortex-M4F Microcontroller for Rechargeable Devices                   |
|                41 | 2 U2, U3                               | SC70-5-3D               | MAX8511 3.3V   | Maxim Integrated                       | MAX8511EXK33+T      | Ultra-Low-Noise, High PSRR, Low-Dropout, 120mA Linear Regulator                       |
|                42 | 1 U4                                   | UMAX8EP-3D              | MAX1792        | Maxim Integrated                       | MAX1792EUA33+       | 500mA Low-Dropout Linear Regulator +2.5v to +5.5v input                               |
|                43 | 1 U5                                   | TQFN68 0.4P 8x8mm       | MAX32625       | Maxim Integrated                       | MAX32625ITK+        | Ultra-Low Power Cortex-M4F Microcontroller for Rechargeable Devices                   |
|                44 | 1 U6                                   | TDFN8 3MM .65T          | MAX16910CATA8+ | Maxim Integrated                       | MAX16910CATA8/V+    | Linear Regulator 3V/5V/ADJ 200mA Ultra-Low Quiescent Current                          |
|                45 | 1 U7                                   | SOT23-5-3D              | MAX8887EZK33+T | Maxim Integrated                       | MAX8887EZK33+       | LDO 300mA Linear Regulator 1.5, 1.8, 2.85, 3.3v versions                              |
|                46 | 2 U8, U10                              | sot23-6-3d              | MAX3207E       | Maxim Integrated                       | MAX3207EAUT+        | Dual High-Speed Differential ESD-Protection IC                                        |
|                47 | 2 U9, U14                              | UMAX8EP-3D              | MAX16999 1.8V  | Maxim Integrated                       | MAX16999AUA18+      | Linear Regulator for High-Temperature Applications                                    |
|                48 | 2 U11, U15                             | UMAX8EP-3D              | MAX16999 1.2V  | Maxim Integrated                       | MAX16999AUA12+      | Ultra-Low Output Voltage, Low-Quiescent-Current Linear Regulator for High-Temperature |
|                49 | 2 U12, U13                             | TQFN16 3x3mm 0.5p       | MAX4854H       | Maxim Integrated                       | MAX4854HETE+        | Quad SPST Normally Open Analog Switch                                                 |
|                50 | 2 X1, X2                               | CRYSTAL-ABS07           | 32.768KHz      | Abracon Corporation                    | ABS07-32.768KHZ-6-T | CRYSTAL 32.768KHZ 6.0PF SMD                                                           |
|                51 | 3 N/A                                  | N/A                     | Shunt          | Sullins Connector Solutions            | SPC02SYAN           | 1 x 2 Shunt Connector Black Closed Top 0.100" (2.54mm) Gold                           |

## Ordering Information

| PART          | TYPE          |
|---------------|---------------|
| MAX32625MBED# | mbed Platform |

#Denotes RoHS compliant.

Evaluates: MAX32625

│

## MAX32625MBED ARM mbed Enabled Development Platform

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUHGLYPH&lt;c=3,font=/JXQYYB+ArialMT&gt;LPSOLHGGLYPH&lt;c=17,font=/JXQYYB+ArialMT&gt;GLYPH&lt;c=3,font=/JXQYYB+ArialMT&gt;0D[LPGLYPH&lt;c=3,font=/JXQYYB+ArialMT&gt;,QWHJUDWHGGLYPH&lt;c=3,font=/JXQYYB+ArialMT&gt;UHVHUYHVGLYPH&lt;c=3,font=/JXQYYB+ArialMT&gt;WKHGLYPH&lt;c=3,font=/JXQYYB+ArialMT&gt;ULJKWGLYPH&lt;c=3,font=/JXQYYB+ArialMT&gt;WRGLYPH&lt;c=3,font=/JXQYYB+ArialMT&gt;FKDQJHGLYPH&lt;c=3,font=/JXQYYB+ArialMT&gt;WKHGLYPH&lt;c=3,font=/JXQYYB+ArialMT&gt;FLUFXLWU\GLYPH&lt;c=3,font=/JXQYYB+ArialMT&gt;DQGGLYPH&lt;c=3,font=/JXQYYB+ArialMT&gt;VS

│

Evaluates: MAX32625