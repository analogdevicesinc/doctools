<!-- lastmod 2024-07-25 -->
<!-- image -->

©

Click here to ask an associate for production status of specific part numbers.

Evaluates: MAX32675, MAX32675C

## General Description

The MAX32675 evaluation kit (EV kit) provides a platform for  evaluation  capabilities  of  the  MAX32675  microcontroller,  which  is  a  highly  integrated,  mixed-signal,  ultralow-power  microcontroller  designed  for  industrial  and medical  sensors.  It  contains  an  integrated,  low-power HART modem which enables the bidirectional transfer of digital data over a current loop to/from industrial sensors for configuration and diagnostics.

## EV Kit Contents

- MAX32675 EV kit containing a MAX32675 with a preprogrammed demo
- MAX32625PICO debugger with cables
- One Standard-A to Micro-B USB cable

Ordering Information appears at end of data sheet.

## MAX32675 Evaluation Kit

## Features

- HART Compatible Secondary Controller with the Ability to Connect to Existing 4-20mA Current Loop and Communicate with HART-Enabled Devices
- USB 2.0 Micro-B to Serial UART
- Two On-Board, High-Precision Voltage References
- All GPIOs Signals Accessed Through 0.1in Headers
- Access to 4 Analog Inputs Through SMA Connectors Configured as Differential
- Access to 8 Analog Inputs Through 0.1in Headers Configured as Single-Ended
- DAC Output Accessed Through SMA Connector or Test Point
- 10-Pin SWD and Connector
- Board Power Provided by USB Port
- On-Board 1.0V, 1.8V, and 3.3V LDO Regulators
- Individual Power Measurement on All IC Rails Through Jumpers
- Two General-Purpose LEDs and Two GeneralPurpose Pushbutton Switches

319-100752; Rev 2; 7/24

## MAX32675 Evaluation Kit

## MAX32675 EV Kit Board

<!-- image -->

│

Evaluates: MAX32675, MAX32675C

## MAX32675 Evaluation Kit

## Quick Start

## Required Equipment

- MAX32675 EV kit containing a MAX32675 with a preprogrammed demo
- One Standard-A to Micro-B USB cable

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) While observing safe ESD practices, carefully remove the MAX32675 EV kit board out of its packaging. Inspect the board to ensure that no damage occurred during shipment. Jumpers/shunts are preinstalled prior to testing and packaging.
- 2) Power up the board by plugging in the provided USB cable to connector CN1. Verify that the 5V blue LED (D5) and the 3V3 (D6), 1V8 (D7), and 1V0 (D8) green LEDs are illuminated.
- 3) The MAX32675 is preprogrammed with a demo program and it flashes green LED (D2) upon successful completion.

## Detailed Description of Hardware (or Software)

## HART Interface

The  HART  circuitry  acts  as  a  secondary  controller  with the  ability  to  connect  to  an  existing  4mA-20mA  current loop  and  communicates  with  HART-enabled  devices. Connection to a capacitance coupled loop through JH8 and a transformer loop is through JH9. HART communication to the MAX32675 is through the USB connector CN1.

## USB-to-HART Interface

The  EV  kit  provides  a  USB-to-HART  bridge  chip,  FTDI FT231. This bridge eliminates the requirement for a physical RS-232 COM port. Instead, the IC's HART access is through  the  Micro-USB  type-B  connector,  CN1.  Virtual COM  port  drivers  and  guides  for  installing  Windows ® drivers are available at the FTDI chip website.

## Power Supply

The  EV  kit  is  powered  by  +5V  that  is  made  available through  V BUS   on  the  Micro-USB  type-B  connector  CN1. A blue LED (D5) illuminates when the board is powered.

## Evaluates: MAX32675, MAX32675C

Green LEDs (D6), (D7), and (D8) illuminate when the 3V3, 1V8, and 1V0 LDOs are powered, respectively.

## Current Monitoring

Two  pin  headers  provide  convenient  current  monitoring points for VDDIO EN (JP21), VDDA EN (JP22), VDD18 EN (JP23), and VCORE (JP24).

To accurately achieve the low-power current values, the EV kit needs to be configured such that no outside influence (i.e.,  pullups,  external  clock,  debugger  connector,  etc.) causes a current source or sink on that GPIO.

## Clocking

The MAX32675 clocking is provided by an external 16MHz crystal (Y1).

## Voltage Reference

The differential reference inputs REF0 and REF1 can be sourced by an internal reference (INT\_VREF) or a higher precision  external  reference  source,  MAX6071.  This  is selected by jumpers JP25 and JP26.

## JTAG Serial Wire Debug (SWD) Support

SWD debug can be accessed through a Arm ®  Cortex ® 10-pin connector (J4). Logic levels are fixed to (3V3). Port UART0 is also accessible at the SWD connector through the provided MAX3625PICO debugger.

## Boot Loader

Boot  load  is  activated  by  boot  load  enable  slide  switch SW5.

## GPIO and Alternate Function Headers

GPIO and alternate function signals from the MAX32675 can be accessed through 0.1in spaced headers JH1, JH2, JH3, and JH4.

## Analog Input Access

Analog inputs (AIN0-AIN3) can be accessed differentially from SMA connectors J2 and J3 or separately from TP10, TP12, TP15, and TP16, respectively.

Analog  inputs  (AIN4-AIN11)  can  be  accessed  through 0.1in spaced headers JH5 and JH6.

## I 2 C Pullups

The I 2 C port can independently pulled up to 3V3 through JP3 (I2C\_SCL) and JP4 (I2C\_SDA).

## Reset Pushbutton

The IC can be reset by pushbutton SW3.

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere. Windows is a registered trademark and registered service mark of Microsoft Corporation.

## MAX32675 Evaluation Kit

## Indicator LEDs

General-purpose  indicators  LED  D1  (red)  is  connected  to GPIO P1.9 and LED D2 (green) is connected to GPIO P1.10.

## Table 1. MAX32675 EV Kit Jumper Settings

| JUMPER   | SIGNAL   | SETTINGS   | DESCRIPTION                                                  |
|----------|----------|------------|--------------------------------------------------------------|
| JP1      | P1_9     | Open       | Disconnects red LED D1 from P1_9                             |
| JP1      | P1_9     | Close*     | Connects red LED D1 to P1_9                                  |
| JP2      | P1_10    | Open       | Disconnects green LED D2 from P1_10                          |
| JP2      | P1_10    | Close*     | Connects green LED D2 to P1_10                               |
| JP3      | I2C_SCLK | Open       | Disconnects 3V3 from I2C_SCLK                                |
| JP3      | I2C_SCLK | Close      | Connects 3V3 to I2C0_SCLK                                    |
| JP4      | I2C_SDA  | Open       | Disconnects 3V3 to I2C_SDA                                   |
| JP4      | I2C_SDA  | Close      | Connects 3V3 to I2C_SDA                                      |
| JP5      | UART0_RX | Open       | Disconnects UART0_RX (P0.8) from the SWD connector           |
| JP5      | UART0_RX | Close*     | Connects UART0_RX (P0.8) to the SWD connector                |
| JP6      | UART0_TX | Open       | Disonnects UART0_TX (P0.9) from the SWD connector            |
| JP6      | UART0_TX | Close*     | Connects UART0_TX (P0.9) to the SWD connector                |
| JP7      | REF0N    | Open       | Disconnects REF0N from ground.                               |
| JP7      | REF0N    | Close*     | Connects REF0N to ground.                                    |
| JP8      | REF1N    | Open       | Disconnects REF1N from ground.                               |
| JP8      | REF1N    | Close*     | Connects REF1N to ground.                                    |
| JP9      | HART_IN  | Open       | Disconnects TX of USB - serial bridge from HART_IN (P0.15)   |
| JP9      | HART_IN  | 1-2*       | Connects TX of USB - serial bridge to HART_IN (P0.15)        |
| JP9      | HART_OUT | Open       | Disconnects RX of USB - serial bridge from HART_OUT (P0.14)  |
| JP9      | HART_OUT | 3-4*       | Connects RX of USB - serial bridge to HART_OUT (P0.14)       |
| JP9      | HART_RTS | Open       | Disconnects RTS of USB - serial bridge from HART_RTS (P1.8)  |
| JP9      | HART_RTS | 5-6*       | Connects TX of USB - serial bridge to HART_RTS (P1.8)        |
| JP9      | HART_OCD | Open       | Disconnects RTS of USB - serial bridge from HART_OCD (P0.16) |
| JP9      | HART_OCD | 7-8*       | Connects TX of USB - serial bridge to HART_OCD (P0.16)       |
| JP10     | SWD_CLK  | Open       | Disconnects boot load enable circuit from SWD_CLK (P0.1)     |
| JP10     | SWD_CLK  | Close*     | Connects boot load enable circuit to SWD_CLK (P0.1)          |
| JP11     | FSK_IN   | Open       | Disconnects FSK_IN from HART analog circuitry                |
| JP11     | FSK_IN   | Close*     | Connects FSK_IN to HART analog circuitry                     |
| JP12     | FSK_OUT  | Open       | Disconnects FSK_OUT from HART analog circuitry               |
| JP12     | FSK_OUT  | Close*     | Connects FSK_OUT to HART analog circuitry                    |

│

Evaluates: MAX32675, MAX32675C

## GPIO Pushbutton Switches

The two general-purpose pushbuttons (SW1 and SW2) are connected  to  GPIO  P1.11  and  P1.12,  respectively.  If  the pushbutton is pressed, the attached port pin is pulled low.

Evaluates: MAX32675, MAX32675C

Table 1. MAX32675 EV Kit Jumper Settings (continued)

| JUMPER   | SIGNAL   | SETTINGS   | DESCRIPTION                                    |
|----------|----------|------------|------------------------------------------------|
| JP13     | RCV_FSK  | Open*      | Disconnects RCV_FSK from CC LOOP               |
| JP13     | RCV_FSK  | Close      | Connects RCV_FSK to CC LOOP                    |
| JP14     | RCV_FSK  | Open       | Disconnects RCV_FSK from XFMR LOOP             |
| JP14     | RCV_FSK  | Close*     | Connects RCV_FSK to XFMR LOOP                  |
| JP15     | RLOAD    | Open*      | Disconnects 249Ω resistor shunt from CC LOOP   |
| JP15     | RLOAD    | Close      | Connects 249Ω resistor shunt to CC LOOP        |
| JP16     | N/A      | N/A        | N/A                                            |
| JP16     | N/A      | N/A        | N/A                                            |
| JP17     | N/A      | N/A        | N/A                                            |
| JP17     | N/A      | N/A        | N/A                                            |
| JP18     | N/A      | N/A        | N/A                                            |
| JP18     |          | N/A        | N/A                                            |
| JP19     | HART_RTS | Open*      | Enables HART_RTS optical transceiver           |
| JP19     | HART_RTS | Close      | Bypasses HART_RTS optical transceiver          |
| JP20     | RLOAD    | Open       | Disconnects 249Ω resistor shunt from XFMR LOOP |
| JP20     | RLOAD    | Close*     | Connects 249Ω resistor shunt to XFMR LOOP      |
| JP21     | VDDIO    | Open       | Disconnects power from VDDIO                   |
| JP21     | VDDIO    | Close*     | Connects power to VDDIO                        |
| JP22     | VDDA     | Open       | Disconnects power from VDDA                    |
| JP22     | VDDA     | Close*     | Connects power to VDDA                         |
| JP23     | VDD18    | Open       | Disconnects power from VDD18                   |
| JP23     | VDD18    | Close*     | Connects power to VDD18                        |
| JP24     | VCORE    | Open       | Disconnects power from VCORE                   |
| JP24     | VCORE    | Close*     | Connects power to VCORE                        |
| JP25     | REF0P    | 2-1*       | Connects OB_VREF to REF0P                      |
| JP25     | REF0P    | 2-3        | Connects INT_VREF to REF0P                     |
| JP26     | REF1P    | 2-1*       | Connects OB_VREF to REF1P                      |
| JP26     | REF1P    | 2-3        | Connects INT_VREF to REF1P                     |

*Default setting.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX32675EVKIT# | EV kit |

#Denotes RoHS compliance.

## MAX32675 Evaluation Kit

## MAX32675 EV Kit Bill of Materials

|   QTY | VALUE            | PART REFERENCE                             | BOM_DESCRIPTION                  | MANUFACTURER_PN      | MANUFACTURER         |
|-------|------------------|--------------------------------------------|----------------------------------|----------------------|----------------------|
|    12 | DNI              | C1 C2 C3 C4 C5 C6 C7 C8 C25 C27 C31 C33    | DNI                              |                      |                      |
|    11 | 100nF            | C9 C11 C12 C16 C17 C18 C20 C21 C26 C32 C40 | CAP CER 0.1UF 16V 10% X7R 0402   | GRM155R71C104KA88D   | Murata Electronics   |
|     3 | 1uF              | C10 C15 C22                                | CAP CER 1UF 10V 20% X5R 0402     | C0402C105M8PACTU     | Kemet                |
|     2 | 1nF              | C13 C14                                    | CAP CER 1000PF 10V 10% X7R 0402  | C0402C102K8RACTU     | Kemet                |
|     1 | 1uF              | C19                                        | CAP CER 1UF 10V 20% X5R 0402     | C0402C105M8PACTU     | Kemet                |
|     1 | 100pF            | C23                                        | CAP CER 100PF 50V +/-1% NP0 0402 | 04025A101FAT2A       | AVX Corporation      |
|     1 | 4.7nF            | C24                                        | CAP CER 4700PF 50V 5% X7R 0402   | GRM155R71H472JA01D   | Murata Electronics   |
|     2 | 12pF             | C28 C30                                    | CAP CER 12PF 50V 5% NP0 0402     | CL05C120JB5NNNC      | Samsung Electro-Mech |
|     2 | 4.7uF            | C29 C50                                    | CAP CER 4.7uF 10V 10% X5R 0603   | C0603C475K8PACTU     | Kemet                |
|     3 | 100nF            | C34 C51 C56                                | CAP CER 0.1UF 10V 10% X5R 0402   | GRM155R61A104KA01D   | Murata               |
|     1 | 10nF             | C35                                        | CAP CER 10000PF 25V 10% X7R 0603 | CL10B103KA8NNNC      | Samsung Electro-Mech |
|     1 | 2.2nF            | C41                                        | CAP CER 2200PF 50V 5% NP0 0805   | GRM2165C1H222JA01D   | Murata Electronics   |
|     1 | 10nF             | C42                                        | CAP CER 10000PF 50V 5% NP0 0805  | GRM2195C1H103JA01D   | Murata Electronics   |
|     1 | 1uF              | C43                                        | CAP CER 1UF 16V 10% X5R 0402     | GRT155R61C105KE01D   | Murata Electronics   |
|     2 | 4.7uF            | C44 C46                                    | CAP CER 4.7UF 25V 10% X7R 0805   | CGA4J1X7R1E475K125AC | TDK Corporation      |
|     2 | 47pF             | C45 C47                                    | CAP CER 47PF 50V 1% NP0 0402     | C1005C0G1H470F050BA  | TDK Corporation      |
|     1 | 2.2uF            | C48                                        | CAP CER 2.2uF 10V 10% X5R 0603   | C0603C225K8PACTU     | Kemet                |
|     1 | 2.2uF            | C49                                        | CAP CER 2.2UF 50V 10% X7R 1206   | GRM31CR71H225KA88L   | Murata Electronics   |
|     2 | 1uF              | C53 C58                                    | CAP CER 1uF 16V 10% X7R 0603     | GCM188R71C105KA64D   | Murata               |
|     1 | 10uF             | C54                                        | CAP CER 10UF 6.3V 20% X5R 0603   | CL10A106MQ8NNNC      | Samsung Electro-Mech |
|     2 | 10uF             | C55 C59                                    | CAP CER 10UF 6.3V 20% X5R 0402   | GRJ155R60J106ME11D   | Murata Electronics   |
|     1 | 1uF              | C57                                        | CAP CER 1UF 6.3V 10% X5R 0402    | JMK105BJ105KV-F      | Taiyo Yuden          |
|     1 | MICRO USB B R/A  | CN1                                        | CONN RCPT 5POS MICRO USB B R/A   | 47346-0001           | Molex                |
|     1 | RED              | D1                                         | LED 660NM RED WTR CLR 1206 SMD   | SML-LX1206SRC-TR     | Lumex Opto           |
|     4 | GRN              | D2 D6 D7 D8                                | LED 565NM WTR CLR GREEN 1206 SMD | SML-LX1206GC-TR      | Lumex Opto           |
|     2 | SMCJ36CA         | D3 D4                                      | TVS DIODE 36VWM 58.1VC SMC       | SMCJ36CA             | Littelfuse Inc       |
|     1 | BLUE             | D5                                         | LED 469NM BLUE DIFF 1206 SMD     | HSMR-C150            | Avago Technologies   |
|     6 | DNI              | H1 H2 H3 H4 H5 H6                          | DNI MTG 125DRL 300PAD            |                      |                      |
|     3 | SMA              | J1 J2 J3                                   | CONN SMA JACK STR 50 OHM PCB     | 901-10112            | Amphenol RF          |
|     1 | 10P CORTEX DEBUG | J4                                         | IDC BOX HEADER 0.050 10 POS SMD  | 3220-10-0300-00      | CNC Tech             |
|     1 | 10P 1x10         | JH1                                        | CONN HEADER .100 SINGL STR 10POS | PEC10SAAN            | Sullins              |
|     1 | 9P 1x9           | JH2                                        | CONN HEADER .100 SINGL STR 9POS  | PEC09SAAN            | Sullins              |

Evaluates: MAX32675, MAX32675C

## MAX32675 EV Kit Bill of Materials (continued)

|   QTY | VALUE          | PART REFERENCE                                                              | BOM_DESCRIPTION                  | MANUFACTURER_PN   | MANUFACTURER            |
|-------|----------------|-----------------------------------------------------------------------------|----------------------------------|-------------------|-------------------------|
|     3 | 3P 3x1         | JH3 JP25 JP26                                                               | CONN HEADER .100 SINGL STR 3POS  | PEC03SAAN         | Sullins                 |
|     1 | 7P 1x7         | JH4                                                                         | CONN HEADER .100 SINGL STR 7POS  | PEC07SAAN         | Sullins                 |
|     2 | 6P 1x6         | JH5 JH6                                                                     | CONN HEADER .100 SINGL STR 6POS  | PEC06SAAN         | Sullins                 |
|     1 | 2P 1x2         | JH7                                                                         | CONN HEADER .100 SINGL STR 2POS  | PEC02SAAN         | Sullins                 |
|     2 | 2P 3.5mm       | JH8 JH9                                                                     | TERM BLOCK 3.5MM VERT 2POS PCB   | OSTTE020161       | On Shore Technology     |
|    20 | JUMPER         | JP5 JP6 JP7 JP8 JP10 JP11 JP12 JP13 JP14 JP15 JP19 JP20 JP21 JP22 JP23 JP24 | CONN HEADER .100 SINGL STR 2POS  | PEC02SAAN         | Sullins                 |
|     1 | 8P 2x4         | JP9                                                                         | CONN HEADER .100 DUAL STR 8POS   | PEC04DAAN         | Sullins                 |
|     1 | HZ1206C202R-10 | L1                                                                          | FERRITE CHIP SIGNAL 2000 OHM SMD | HZ1206C202R-10    | Laird-Signal Integrity  |
|     1 | BLM21PG221SN1D | L2                                                                          | FERRITE CHIP 220 OHM 0805        | BLM21PG221SN1D    | Murata Electronics      |
|     1 | PCB            | PCB1                                                                        |                                  |                   |                         |
|     1 | FDV304P        | Q1                                                                          | MOSFET P-CH 25V 460MA SOT-23     | FDV304P           | Fairchild Semiconductor |
|     1 | TLP3545(F)     | Q2                                                                          | PHOTOCOUPLER PHOTORELAY 6-DIP    | TLP3545(F)        | Toshiba Semiconductor   |
|     2 | BSS806N        | Q3 Q4                                                                       | MOSFET N-CH 20V 2.3A SOT23       | BSS806N H6327     | Infineon Technologies   |
|    18 | 0              | R1 R2 R3 R4 R5 R6 R7 R8 R22 R23 R24 R26 R27 R28 R29 R30 R32 R33             | RES SMD 0 OHM JUMPER 1/10W 0603  | RC0603JR-070RL    | Yageo                   |
|     2 | 100            | R9 R10                                                                      | RES SMD 100 OHM 1% 1/10W 0603    | RC0603FR-07100RL  | Yageo                   |
|     1 | 470            | R11                                                                         | RES 470 OHM 1/10W 1% 0603 SMD    | ERJ-3EKF4700V     | Panasonic               |
|     4 | 332            | R12 R55 R57 R61                                                             | RES 332 OHM 1/10W 1% 0603 SMD    | ERJ-3EKF3320V     | Panasonic               |
|     4 | 10K            | R13 R14 R18 R39                                                             | RES 10K OHM 1/10W 1% 0603 SMD    | ERJ-3EKF1002V     | Panasonic               |
|     2 | 27             | R15 R17                                                                     | RES 27 OHM 1/10W 1% 0603 SMD     | ERJ-3EKF27R0V     | Panasonic               |
|     1 | 0              | R16                                                                         | RES SMD 0 OHM JUMPER 1/10W 0603  | RC0603JR-070RL    | Yageo                   |
|     2 | 4.75K          | R25 R31                                                                     | RES 4.75K OHM 1/10W 1% 0603 SMD  | ERJ-3EKF4751V     | Panasonic               |
|     1 | 1M             | R37                                                                         | RES SMD 1M OHM 5% 1/8W 0805      | ERJ-6GEYJ105V     | Panasonic               |
|     1 | 1.58K          | R40                                                                         | RES 1.58K OHM 1/10W 1% 0603 SMD  | ERJ-3EKF1581V     | Panasonic               |
|     1 | 221K           | R41                                                                         | RES 221K OHM 1/10W 1% 0603 SMD   | ERJ-3EKF2213V     | Panasonic               |
|     1 | 301K           | R42                                                                         | RES 301K OHM 1/10W 1% 0603 SMD   | ERJ-3EKF3013V     | Panasonic               |
|     2 | 10             | R43 R51                                                                     | RES 10 OHM 1/10W 1% 0603 SMD     | ERJ-3EKF10R0V     | Panasonic               |
|     2 | 249            | R44 R50                                                                     | RES 249 OHM 1W 1% 2512 SMD       | MCR100JZHF2490    | Rohm Semiconductor      |
|     1 | 49.9           | R45                                                                         | RES 49.9 OHM 1/10W 1% 0603 SMD   | ERJ-3EKF49R9V     | Panasonic               |
|     1 | 100K           | R47                                                                         | RES 100K OHM 1/10W 1% 0603 SMD   | ERJ-3EKF1003V     | Panasonic               |
|     1 | 3.32K          | R56                                                                         | RES 3.32K OHM 1/10W 1% 0603 SMD  | ERJ-3EKF3321V     | Panasonic               |

Evaluates: MAX32675, MAX32675C

## MAX32675 EV Kit Bill of Materials (continued)

|   QTY | VALUE                   | PART REFERENCE          | BOM_DESCRIPTION                  | MANUFACTURER_PN     | MANUFACTURER            |
|-------|-------------------------|-------------------------|----------------------------------|---------------------|-------------------------|
|     2 | 150K                    | R58 R62                 | RES 150K OHM 1/10W 1% 0603 SMD   | ERJ-3EKF1503V       | Panasonic               |
|     1 | 12.4K                   | R59                     | RES SMD 12.4K OHM 1% 1/10W 0402  | ERJ-2RKF1242X       | Panasonic               |
|     1 | 49.9K                   | R60                     | RES 49.9K OHM 1/10W 1% 0603 SMD  | ERJ-3EKF4992V       | Panasonic               |
|     6 | DNI                     | SH1 SH2 SH3 SH4 SH5 SH6 | DNI 2 NET SHORT                  |                     |                         |
|     2 | B3S-1000P               | SW1 SW2                 | SWITCH TACTILE SPST-NO 0.05A 24V | B3S-1000P           | Omron Electronics       |
|     1 | B3S-1002 BY OMZ         | SW3                     | SWITCH TACTILE SPST-NO 0.05A 24V | B3S-1002 BY OMZ     | Omron Electronics       |
|     1 | SPDT 3A                 | SW4                     | SWITCH TOGGLE SPDT 3A 120V       | ET01MD1AGE          | C&K Components          |
|     1 | CL-SB-12A-01T           | SW5                     | SWITCH SLIDE SPDT 200MA 12V      | CL-SB-12A-01T       | Nidec Copal Electronics |
|     1 | MET-26                  | T1                      | TRANSFORMER 1KCT:1KCT 3.0MADC    | MET-26              | Tamura                  |
|     3 | BLK                     | TP1 TP2 TP3             | TEST POINT PC MULTI PURPOSE BLK  | 5011                | Keystone Electronics    |
|     1 | BRWN                    | TP9                     | TEST POINT PC MULTIPURPOSE BRWN  | 5125                | Keystone Electronics    |
|     2 | BLUE                    | TP10 TP12               | TEST POINT PC MULTI PURPOSE BLUE | 5127                | Keystone Electronics    |
|     1 | PRPL                    | TP11                    | TEST POINT PC MULTI PURPOSE PRPL | 5129                | Keystone Electronics    |
|     3 | YLW                     | TP13 TP15 TP16          | TEST POINT PC MULTI PURPOSE YEL  | 5014                | Keystone Electronics    |
|     1 | MAX32675ATK 68P QFN SKT | U1                      | MAX32675ATK 68P QFN SKT          | 68QHC40A28080       | Plastronics             |
|     1 | MAX3207EAUT+T           | U2                      | ESD PROT DIFF SOT23-6            | MAX3207EAUT+T       | Analog Devices          |
|     1 | FT231XS-R               | U3                      | IC USB SERIAL FULL UART 20SSOP   | FT231XS-R           | FTDI                    |
|     1 | NC7WZ08K8X              | U4                      | IC GATE AND 2CH 2-INP US8        | NC7WZ08K8X          | ON Semiconductor        |
|     1 | MAX1806EUA33+           | U6                      | IC REG LDO 3.3V/ADJ 0.5A 8UMAX   | MAX1806EUA33+       | Analog Devices          |
|     2 | MAX1806EUA18+           | U7 U8                   | Low Dropout Linear Regulator     | MAX1806EUA18+       | Analog Devices          |
|     2 | MAX6071AAUT21+T         | U9 U10                  | IC VREF SERIES 0.04% SOT23-6     | MAX6071AAUT21+T     | Analog Devices          |
|     1 | 16MHz                   | Y1                      | CRYSTAL 16.0000MHZ 9PF SMD       | ECS-160-9-42-CKM-TR | ECS Inc.                |

Evaluates: MAX32675, MAX32675C

## MAX32675 Evaluation Kit

## MAX32675 EV Kit Schematics

<!-- image -->

Evaluates: MAX32675, MAX32675C

## MAX32675 EV Kit Schematics (continued)

<!-- image -->

## MAX32675 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX32675, MAX32675C

## MAX32675 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX32675, MAX32675C

## MAX32675 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX32675, MAX32675C

## MAX32675 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX32675, MAX32675C

## MAX32675 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                       | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 4/21            | Initial release                                                                                                                                                                   | -               |
|                 1 | 5/22            | Updated MAX32675 EV Kit Board photos, Quick Start , Detailed Description of Hardware (or Software) , Table 1 , MAX32675 EV Kit Bill of Materials and MAX32675 EV Kit Schematics . | 1-14            |
|                 2 | 7/24            | Added MAX32675C to the list of the parts that the EV kit evaluates                                                                                                                | All             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX32675, MAX32675C