<!-- lastmod 2022-08-03 -->
## MAX32680 Evaluation Kit

## General Description

The  MAX32680  evaluation  kit  (EV  kit)  provides  a  platform for evaluation capabilities of the MAX32680 microcontroller,  which  is  an  advanced  system-on-chip  (SoC) designed for industrial and medical sensors. Power regulation and management is provided by a single-inductor multiple-output  (SIMO)  buck  regulator  system  and  contains  the  latest  generation  Bluetooth ®   5.2  Low  Energy (LE) radio.

## EV Kit Contents

- MAX32680 EV Kit Containing a MAX32680 with a Preprogrammed Demo
- MAX32625PICO Debugger w/Cables
- One USB Standard-A-to-Micro-B Cable

Ordering Information appears at end of data sheet.

The Bluetooth word mark and logos are registered trademarks owned by Bluetooth SIG, Inc. and any use of such marks by Maxim is under license.

## Features

- SMA Connector for Attaching an External Bluetooth Antenna
- 128 x 128 (1.45in) Color TFT Display with SPI Interface
- Two Selectable On-Board, High-Precision Voltage References
- USB 2.0 Micro B to Serial UARTs
- UART1 and LPUART0 Interface is Selectable Through On-Board Jumpers
- All GPIOs Signals Accessed Through 0.1in Headers
- Access to Four Analog Inputs Through SMA Connectors Configured as Differential
- Access to Eight Analog Inputs Through 0.1in Headers Configured as Single-End
- Optional Discrete Filter for the Twelve Analog Inputs
- DAC Accessed Through SMA Connector or Test Point
- 10-Pin SWD Connector
- 10-Pin RV JTAG Connector
- Board Power Provided by USB Port
- On-Board 3.3V LDO Regulator to Power MAX32680 Internal SIMO
- Test Loops Provided to Supply Optional VCORE Power Externally
- Individual Power Measurement on All IC Rails Through Jumpers
- Two General Purpose LEDs and Two General Purpose Pushbutton Switches

<!-- image -->

Evaluates: MAX32680

## MAX32680 EV Kit Board

<!-- image -->

## Quick Start

## Required Equipment

- MAX32680 EV kit containing a MAX32680 with a preprogrammed demo
- One USB Standard-A-to-Micro-B cable

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) While observing safe electrostatic discharge (ESD) practices, carefully remove the MAX32680 EV kit board out of its packaging. Inspect the board to ensure that no damage occurred during shipment. Jumpers/shunts are preinstalled prior to testing and packaging.
- 2) Power up the board by plugging in the provided USB cable to connector CN1. Verify that the VBUS blue LED (DS1) and the 3V3 (DS2) green LED are illuminated.
- 3) The MAX32680 is preprogrammed with a demo program. The program now initiates and displays the Maxim logo upon successful completion.

## Detailed Description of Hardware (or Software)

## Bluetooth 5.2 Interface

The SMA connector (J2) is provided to attach an external Bluetooth 2.4GHz antenna.

## Power Supply

The EV kit is powered by +5V which is made available through VBUS on the Micro-USB type-B connector CN1. When the  power  switch  SW3  is  in  the  on  position,  the blue  VBUS  LED  (DS1)  and  the  green  3.3V  LED  (DS2) illuminate. The 3.3V powers the SIMO of the MAX32680.

## Current Monitoring

A two-pin header VBAT EN (JP1) provides a convenient current monitoring point for the 3.3V LDO powering the MAX32680.  If  the  jumper  is  removed,  power  can  be sourced externally.

## Low-Power Mode Current Measurements

To accurately achieve the low power current values, the EV kit needs to configure such that no outside influence (i.e.,  pullups,  external  clock,  debugger  connector,  etc.) causes a current source or sink on that GPIO.

Evaluates: MAX32680

## MAX32680 Evaluation Kit

For these measurements, the board is needed to be configured as follows:

- 1) Remove jumpers JP8, JP9, JP10, JP11, JP12, JP14, JP22, JP23, and JP24.
- 2) Unplug the SWD connector at JH10.
- 3) Unplug the RV JTAG connector at JH11.

## Clocking

The  MAX32680  clocking  is  provided  by  an  external 32MHz crystal (Y1).

## Voltage Reference Selection

The  external  voltage  reference  inputs  REF0P,  REF0N, REF1P,  and  REF1N  for  the  analog-to-digital  converters (ADCs) can be sourced externally by high precision external  reference  sources,  MAX6071  (U2  and  U3),  REF0P (JP2), and REF1P (JP6) or internally by VDDA.

JTAG Serial Wire Debug (SWD) Support

The  SWD  debug  can  be  accessed  through  a  Cortex ® 10-pin  connector  (JH10).  Logic  levels  are  set  to  1.8V (VDDIO\_AUX).

## JTAG RISC V Debug (SWD) Support

The  JTAG  RISC  V  debug  can  be  accessed  through  a Cortex  10-pin  connector  (JH11).  Logic  levels  are  set  to 1.8V (VDDIO\_AUX).

## UART Interface

The  EV  kit  provides  a  USB-to-UART  bridge  chip,  FTDI FT230XS-R. This  bridge  eliminates  the  requirement  for a  physical  RS-232  COM  port.  Instead,  the  IC's  UART access is through the Micro-USB type-B connector, CN1. The  USB-to-UART  bridge  can  be  connected  to  the  ICs UART1 or  LPUART  with  jumpers  JP22  (RX)  and  JP23 (TX).  Virtual  COM  port  drivers  and  guides  for  installing Windows ®  drivers are available at the FTDI chip website.

Evaluates: MAX32680

## GPIO and Alternate Function Headers

The  GPIO  and  Alternate  Function  signals  from  the MAX32680  can  be  accessed  through  0.1in  spaced headers JH1 through JH5.

## Analog Headers

The  four  analog  inputs  (AIN0-AIN3)  are  accessed through  differential  SMA  connectors  J3  and  J4  or  test loops TP3 through TP5. The eight analog inputs (AIN4AIN11) are accessed single-ended through 0.1in headers JH6 and JH7.

## DAC12 OUT

The  DAC12  output  can  be  accessed  through  SMA connector J1 or test loop (TP1).

## I 2 C Pullups

The  I 2 C  ports  can  be  independently  pulled  up  to  1.8V (VDDIO\_AUX) or 3.3V through JP8 and JP9.

## Reset Pushbutton

The IC can be reset by pushbutton SW4.

## Indicator LEDs

General purpose indicators LED D1 (red) is connected to GPIO P0.24 and LED D2 (green) is connected to GPIO P0.25.

## GPIO Pushbutton Switches

The two general purpose pushbuttons SW1 and SW2 are connected to GPIO P0.26 and P0.27, respectively. If the pushbutton is pressed, the attached port pin is pulled low.

Cortex is a registered trademark of ARM Limited (or its subsidiaries) in the US and/or elsewhere.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

│

## MAX32680 Evaluation Kit

## Table 1. MAX32680 EV Kit Jumper Settings

| JUMPER   | SIGNAL            | SETTINGS   | DESCRIPTION                                                    |
|----------|-------------------|------------|----------------------------------------------------------------|
| JP1      | VREGI             | Open       | Disconnects 3.3V power from the MAX32680 SIMO                  |
| JP1      | VREGI             | Close*     | Connects 3.3V power to the MAX32680 SIMO                       |
| JP2      | REF0P             | 2-1*       | Connects the external high-precision voltage refernce to REF0P |
| JP2      | REF0P             | 2-3        | Connects the internal voltage refernce to REF0P                |
| JP3      | REF0N             | Open*      | Disconnects REF0N from ground                                  |
| JP3      | REF0N             | Close      | Connects REF0N to ground                                       |
| JP4      | VDDIO_AUX         | Open*      | Disconnects VDDIO_AUX from pull-ups and reference voltages     |
| JP4      | VDDIO_AUX         | Close      | Connects VDDIO_AUX to pull-ups and reference voltages          |
| JP5      | VDDIOH            | Open*      | Connects VREGO_Ato VDDIOH                                      |
| JP5      | VDDIOH            | Close      | Connects the 3.3V from the estrenal LDO to VDDIOH              |
| JP6      | REF1P             | 2-1*       | Connects the external high-precision voltage refernce to REF1P |
| JP6      | REF1P             | 2-3        | Connects the internal voltage refernce to REF1P                |
| JP7      | REF1N             | Open*      | Disconnects REF1N from ground                                  |
| JP7      | REF1N             | Close      | Connects REF1N to ground                                       |
| JP8      | I2C0_SDA I2C0_SCL | 2-1        | Connects I2C0 pullups to VDDIO_AUX (1.8V)                      |
| JP8      | I2C0_SDA I2C0_SCL | 2-3        | Connects I2C0 pullups to 3.3V                                  |
| JP9      | I2C1_SDA I2C1_SCL | 2-1        | Connects I2C1 pullups to VDDIO_AUX (1.8V)                      |
| JP9      | I2C1_SDA I2C1_SCL | 2-3        | Connects I2C1 pullups to 3.3V                                  |
| JP10     | P0_24             | Open       | Disconnects red LED D1 from P0_24                              |
| JP10     | P0_24             | Close*     | Connects red LED D1 to P0_24                                   |
| JP11     | P0_25             | Open       | Disconnects green LED D2 from P0_25                            |
| JP11     | P0_25             | Close*     | Connects green LED D2 to P0_25                                 |
| JP12     | FSK_IN            | Open       | Disconnects FSK_IN from HART analog circuitry                  |
| JP12     | FSK_IN            | Close*     | Connects FSK_IN to HART analog circuitry                       |
| JP13     | RCV_FSK           | Open*      | Disconnects RCV_FSK from CC LOOP                               |
| JP13     | RCV_FSK           | Close      | Connects RCV_FSK to CC LOOP                                    |
| JP14     | FSK_OUT           | Open       | Disconnects FSK_OUT from HART analog circuitry                 |
| JP14     | FSK_OUT           | Close*     | Connects FSK_OUT to HART analog circuitry                      |
| JP15     | RCV_FSK           | Open       | Disconnects RCV_FSK from XFMR LOOP                             |
| JP15     | RCV_FSK           | Close*     | Connects RCV_FSK to XFMR LOOP                                  |
| JP16     | RLOAD             | Open*      | Disconnects 249 ohm resistor shunt from CC LOOP                |
| JP16     | RLOAD             | Close      | Connects 249 ohm resistor shunt to CC LOOP                     |
| JP17     | FSKAMP GAIN       | Open*      | Enables FSK variable amp gain                                  |
| JP17     | FSKAMP GAIN       | Close      | Disables FSK variable amp gain                                 |
| JP18     | AMP BYPASS        | 2-1*       | Enables FSK amp                                                |
| JP18     | AMP BYPASS        | 2-3        | Bypasses FSK amp                                               |
| JP19     | FSKAMP GAIN       | Open*      | Enables FSK fixed amp gain                                     |
| JP19     | FSKAMP GAIN       | Close      | Disables FSK fixed amp gain                                    |

│

Evaluates: MAX32680

## Table 1. MAX32680 EV Kit Jumper Settings (continued)

| JUMPER   | SIGNAL   | SETTINGS   | DESCRIPTION                                                 |
|----------|----------|------------|-------------------------------------------------------------|
| JP20     | HART_RTS | Open*      | Enables HART_RTS optical transceiver                        |
| JP20     | HART_RTS | Close      | Bypasses HART_RTS optical transceiver                       |
| JP21     | RLOAD    | Open       | Disconnects 249 ohm resistor shunt from XFMR LOOP           |
| JP21     | RLOAD    | Close*     | Connects 249 ohm resistor shunt to XFMR LOOP                |
| JP22     | UART0_RX | 2-1*       | Disconnects the USB - serial bridge from UART1_RX (P0.12)   |
| JP22     | UART0_RX | 2-3        | Connects the USB - serial bridge to LPUART_RX (P2.6)        |
| JP23     | UART0_TX | 2-1*       | Disonnects the USB - serial bridge from UART1_TX (P0.13)    |
| JP23     | UART0_TX | 2-3        | Connects the USB - serial bridge to LPUART_TX (P2.7)        |
| JP24     | HART_IN  | Open       | Disconnects TX of USB - serial bridge from HART_IN (P0.1)   |
| JP24     | HART_IN  | 1-2*       | Connects TX of USB - serial bridge to HART_IN (P0.1)        |
| JP24     | HART_OUT | Open       | Disconnects RX of USB - serial bridge from HART_OUT (P0.0)  |
| JP24     | HART_OUT | 2-3*       | Connects RX of USB - serial bridge to HART_OUT (P0.0)       |
| JP24     | HART_RTS | Open       | Disconnects RTS of USB - serial bridge from HART_RTS (P0.3) |
| JP24     | HART_RTS | 3-4*       | Connects TX of USB - serial bridge to HART_RTS (P0.3)       |
| JP24     | HART_OCD | Open       | Disconnects RTS of USB - serial bridge from HART_OCD (P0.2) |
| JP24     | HART_OCD | 4-5*       | Connects TX of USB - serial bridge to HART_OCD (P0.2)       |
| JP25     | RSTN     | Open*      | Disconnects DUT_3V3_RSTN from RSTN                          |
| JP25     | RSTN     | Close      | Connects DUT_3V3_RSTN to RSTN                               |

*Default position.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX32680EVKIT# | EV Kit |

# Denotes RoHS compliance.

Evaluates: MAX32680

│

## MAX32680 EV Kit Bill of Materials

|   QTY | VALUE            | PART REFERENCE                                                              | BOM_DESCRIPTION                      | MANUFACTURER_PN      | MANUFACTURER           |
|-------|------------------|-----------------------------------------------------------------------------|--------------------------------------|----------------------|------------------------|
|    12 | 100nF            | C1 C2 C5 C13 C14 C21 C33 C42 C46 C58 C68 C70                                | CAP CER 0.1UF 16V 10% X7R 0402       | GRM155R71C104KA88D   | Murata Electronics     |
|    12 | 1uF              | C3 C11 C12 C15 C16 C17 C18 C20 C23 C26 C49 C56                              | CAP CER 1UF 16V 10% X5R 0402         | GRT155R61C105KE01D   | Murata Electronics     |
|     1 | 47uF             | C4                                                                          | CAP CER 47UF 6.3V 20% X5R 0805       | C2012X5R0J476M125AC  | TDK Corporation        |
|     1 | 3.3nF            | C6                                                                          | CAP CER 3300PF 16V 10% X7R 0402      | GRM15XR71C332KA86D   | Murata Electronics     |
|     4 | 22uF             | C7 C8 C9 C10                                                                | CAP CER 22UF 6.3V 20% X5R 0603       | C1608X5R0J226M080AC  | TDK Corporation        |
|     3 | 100nF            | C19 C22 C24                                                                 | CAP CER 0.1UF 6.3V 10% X5R 0201      | GRM033R60J104KE19D   | Murata                 |
|     1 | 100pF            | C25                                                                         | CAP CER 100PF 50V +/-1% NP0 0402     | 04025A101FAT2A       | AVX Corporation        |
|     2 | 12pF             | C27 C29                                                                     | CAP CER 12PF 50V 5% NP0 0402         | CL05C120JB5NNNC      | Samsung Electro        |
|     1 | 4.7uF            | C28                                                                         | CAP CER 4.7uF 10V 10% X5R 0603       | C0603C475K8PACTU     | Kemet                  |
|     2 | 1nF              | C30 C31                                                                     | CAP CER 1000PF 10V 10% X7R 0402      | C0402C102K8RACTU     | Kemet                  |
|    13 | DNI              | C32 C34 C35 C36 C37 C38 C39 C40 C41 C43 C44 C45 R41                         | DNI                                  |                      |                        |
|     1 | 2.2nF            | C47                                                                         | CAP CER 2200PF 50V 5% NP0 0805       | GRM2165C1H222JA01D   | Murata Electronics     |
|     1 | 10nF             | C48                                                                         | CAP CER 10000PF 50V 5% NP0 0805      | GRM2195C1H103JA01D   | Murata Electronics     |
|     2 | 4.7uF            | C50 C52                                                                     | CAP CER 4.7UF 25V 10% X7R 0805       | CGA4J1X7R1E475K125AC | TDK Corporation        |
|     3 | 33nF             | C51 C53 C59                                                                 | CAP CER 0.033UF 10V 10% X7R 0603     | C0603C333K8RACTU     | Kemet                  |
|     1 | 2.2uF            | C54                                                                         | CAP CER 2.2uF 10V 10% X5R 0603       | C0603C225K8PACTU     | Kemet                  |
|     1 | 2.2uF            | C55                                                                         | CAP CER 2.2UF 50V 10% X7R 1206       | GRM31CR71H225KA88L   | Murata Electronics     |
|     1 | 100nF            | C57                                                                         | CAP CER 0.1uF 16V 10% X7R 0603       | C0603C104K4RACTU     | Kemet                  |
|     1 | 10nF             | C60                                                                         | CAP CER 10000PF 25V 10% X7R 0603     | CL10B103KA8NNNC      | Samsung Electro        |
|     1 | 10uF             | C61                                                                         | CAP CER 10UF 6.3V 20% X5R 0603       | GRM188R60J106ME84D   | Murata Electronics     |
|     4 | 100nF            | C62 C63 C64 C67                                                             | CAP CER 0.1UF 10V 10% X5R 0402       | GRM155R61A104KA01D   | Murata                 |
|     1 | 1uF              | C65                                                                         | CAP CER 1UF 35V 10% X5R 0603         | GMK107BJ105KA-T      | Taiyo Yuden            |
|     1 | 10uF             | C66                                                                         | CAP CER 10UF 6.3V 20% X5R 0402       | GRJ155R60J106ME11D   | Murata Electronics     |
|     1 | 10nF             | C69                                                                         | CAP CER 10000PF 16V 10% X7R 0402     | GRM155R71C103KA01D   | Murata Electronics     |
|     1 | MICRO USB B R/A  | CN1                                                                         | CONN RCPT 5POS MICRO USB B R/A       | 47346-0001           | Molex                  |
|     1 | RED              | D1                                                                          | LED 660NM RED WTR CLR 1206 SMD       | SML-LX1206SRC-TR     | Lumex Opto             |
|     2 | GRN              | D2 DS2                                                                      | LED 565NM WTR CLR GREEN 1206 SMD     | SML-LX1206GC-TR      | Lumex Opto             |
|     2 | SMCJ36CA         | D3 D4                                                                       | TVS DIODE 36VWM 58.1VC SMC           | SMCJ36CA             | Littelfuse Inc         |
|     1 | BLUE             | DS1                                                                         | LED 469NM BLUE DIFF 1206 SMD         | HSMR-C150            | Avago Technologies     |
|     6 | DNI              | H1 H2 H3 H4 H5 H6                                                           | DNI MTG 125DRL 300PAD                |                      |                        |
|     3 | SMA RA           | J1 J3 J4                                                                    | CONN SMA JACK R/A 50 OHM PCB         | 142-0701-301         | Cinch Connectivity     |
|     1 | SMA              | J2                                                                          | CONN SMA JACK STR 50 OHM PCB         | 901-10112            | Amphenol RF            |
|     1 | 503480-1000      | J5                                                                          | CONN FFC FPC 10POS 0.50MM R/A        | 503480-1000          | Molex, LLC             |
|     4 | 9P 1x9           | JH1 JH2 JH3 JH4                                                             | CONN HEADER .100 SINGL STR 9POS      | PEC09SAAN            | Sullins                |
|     1 | 5P 1x5           | JH5                                                                         | CONN HEADER .100 SINGL STR 5POS      | PEC05SAAN            | Sullins                |
|     2 | 6P 1x6           | JH6 JH7                                                                     | CONN HEADER .100 SINGL STR 6POS      | PEC06SAAN            | Sullins                |
|     2 | 2P 3.5mm         | JH8 JH9                                                                     | TERM BLOCK 3.5MM VERT 2POS PCB       | OSTTE020161          | On Shore Technology    |
|     2 | 10P CORTEX DEBUG | JH10 JH11                                                                   | IDC BOX HEADER 0.050 10 POS SMD      | 3220-10-0300-00      | CNC Tech               |
|    16 | JUMPER           | JP1 JP3 JP4 JP7 JP10 JP11 JP12 JP13 JP14 JP15 JP16 JP17 JP19 JP20 JP21 JP25 | CONN HEADER .100 SINGL STR 2POS      | PEC02SAAN            | Sullins                |
|     7 | 3P 3x1           | JP2 JP5 JP6 JP8 JP9 JP22 JP23                                               | CONN HEADER .100 SINGL STR 3POS      | PEC03SAAN            | Sullins                |
|     1 | 3P JUMPER        | JP18                                                                        | CONN HEADER .100 SINGL STR 3POS      | PEC03SAAN            | Sullins                |
|     1 | 8P 2x4           | JP24                                                                        | CONN HEADER .100 DUAL STR 8POS       | PEC04DAAN            | Sullins                |
|     1 | 2.2uH            | L1                                                                          | FIXED IND 2.2UH 1A 150 MOHM SMD 0805 | MLP2012H2R2MT0S1     | TDK Corporation        |
|     1 | HZ1206C202R-10   | L2                                                                          | FERRITE CHIP SIGNAL 2000 OHM SMD     | HZ1206C202R-10       | Laird-Signal Integrity |
|     1 | BLM21PG221SN1D   | L3                                                                          | FERRITE CHIP 220 OHM 0805            | BLM21PG221SN1D       | Murata Electronics     |
|     1 | PCB              | PCB1                                                                        |                                      |                      |                        |
|     1 | FDV304P          | Q1                                                                          | MOSFET P-CH 25V 460MA SOT-23         | FDV304P              | Fairchild              |
|     1 | TLP3545(F)       | Q2                                                                          | PHOTOCOUPLER PHOTORELAY 6-DIP        | TLP3545(F)           | Toshiba                |

Evaluates: MAX32680

## MAX32680 EV Kit Bill of Materials (continued)

|   QTY | VALUE              | PART REFERENCE                                                          | BOM_DESCRIPTION                  | MANUFACTURER_PN        | MANUFACTURER         |
|-------|--------------------|-------------------------------------------------------------------------|----------------------------------|------------------------|----------------------|
|    19 | 0                  | R1 R6 R7 R8 R10 R11 R12 R13 R14 R15 R16 R17 R18 R19 R20 R22 R23 R29 R54 | RES SMD 0 OHM JUMPER 1/10W 0603  | RC0603JR-070RL         | Yageo                |
|     4 | 2.21K              | R2 R3 R4 R5                                                             | RES SMD 2.21K OHM 1% 1/10W 0402  | ERJ-2RKF2211X          | Panasonic            |
|     2 | 4.75K              | R9 R21                                                                  | RES 4.75K OHM 1/10W 1% 0603 SMD  | ERJ-3EKF4751V          | Panasonic            |
|     2 | 100                | R24 R25                                                                 | RES SMD 100 OHM 1% 1/10W 0603    | RC0603FR-07100RL       | Yageo                |
|     2 | 470                | R26 R50                                                                 | RES 470 OHM 1/10W 1% 0603 SMD    | ERJ-3EKF4700V          | Panasonic            |
|     2 | 332                | R27 R52                                                                 | RES 332 OHM 1/10W 1% 0603 SMD    | ERJ-3EKF3320V          | Panasonic            |
|     1 | 10K                | R28                                                                     | RES 10K OHM 1/10W 1% 0603 SMD    | ERJ-3EKF1002V          | Panasonic            |
|     1 | 0                  | R30                                                                     | RES SMD 0 OHM JUMPER 1/10W 0603  | RC0603JR-070RL         | Yageo                |
|     1 | 1.58K              | R31                                                                     | RES 1.58K OHM 1/10W 1% 0603 SMD  | ERJ-3EKF1581V          | Panasonic            |
|     1 | 221K               | R32                                                                     | RES 221K OHM 1/10W 1% 0603 SMD   | ERJ-3EKF2213V          | Panasonic            |
|     1 | 301K               | R33                                                                     | RES 301K OHM 1/10W 1% 0603 SMD   | ERJ-3EKF3013V          | Panasonic            |
|     2 | 10                 | R34 R42                                                                 | RES 10 OHM 1/10W 1% 0603 SMD     | ERJ-3EKF10R0V          | Panasonic            |
|     2 | 249                | R35 R40                                                                 | RES 249 OHM 1W 1% 2512 SMD       | MCR100JZHF2490         | Rohm Semiconductor   |
|     1 | 49.9               | R36                                                                     | RES 49.9 OHM 1/10W 1% 0603 SMD   | ERJ-3EKF49R9V          | Panasonic            |
|     1 | 100K               | R37                                                                     | TRIMMER 100K OHM 0.125W SMD      | 3223W-1-104E           | Bourns Inc.          |
|     2 | 100K               | R38 R44                                                                 | RES 100K OHM 1/10W 1% 0603 SMD   | ERJ-3EKF1003V          | Panasonic            |
|     1 | 10K                | R39                                                                     | RES 10K OHM 1/10W 1% 0603 SMD    | ERJ-3EKF1002V          | Panasonic            |
|     2 | 1K                 | R43 R45                                                                 | RES 1K OHM 1/10W 1% 0603 SMD     | ERJ-3EKF1001V          | Panasonic            |
|     2 | 27                 | R46 R47                                                                 | RES 27 OHM 1/10W 1% 0603 SMD     | ERJ-3EKF27R0V          | Panasonic            |
|     1 | 1.5K               | R48                                                                     | RES SMD 1.5K OHM 1% 1/10W 0402   | ERJ-2RKF1501X          | Panasonic            |
|     1 | 1M                 | R49                                                                     | RES SMD 1M OHM 5% 1/8W 0805      | ERJ-6GEYJ105V          | Panasonic            |
|     1 | 2.7K               | R51                                                                     | RES 2.7K OHM 1/10W 1% 0603 SMD   | ERJ-3EKF2701V          | Panasonic            |
|     1 | 10K                | R53                                                                     | RES SMD 10K OHM 1% 1/16W 0402    | RC0402FR-0710KL        | Yageo                |
|     6 | DNI                | SH1 SH2 SH3 SH4 SH5 SH6                                                 | DNI 2 NET SHORT                  |                        |                      |
|     3 | B3S-1000P          | SW1 SW2 SW4                                                             | SWITCH TACTILE SPST-NO 0.05A 24V | B3S-1000P              | Omron Electronics    |
|     1 | SPDT 3A            | SW3                                                                     | SWITCH TOGGLE SPDT 3A 120V       | ET01MD1AGE             | C&K Components       |
|     1 | MET-26             | T1                                                                      | TRANSFORMER 1KCT:1KCT 3.0MADC    | MET-26                 | Tamura               |
|     1 | BRWN               | TP1                                                                     | TEST POINT PC MULTIPURPOSE BRWN  | 5125                   | Keystone Electronics |
|     2 | BLUE               | TP2 TP3                                                                 | TEST POINT PC MULTI PURPOSE BLUE | 5127                   | Keystone Electronics |
|     2 | YLW                | TP4 TP5                                                                 | TEST POINT PC MULTI PURPOSE YEL  | 5014                   | Keystone Electronics |
|     3 | BLK                | TP6 TP7 TP8                                                             | TEST POINT PC MULTI PURPOSE BLK  | 5011                   | Keystone Electronics |
|     1 | GRN                | TP9                                                                     | TEST POINT PC MULTI PURPOSE GRN  | 5126                   | Keystone Electronics |
|     1 | WHT                | TP10                                                                    | TEST POINT PC MULTI PURPOSE WHT  | 5012                   | Keystone Electronics |
|     1 | MAX32680 88P LGA   | U1                                                                      | MAX32680 88P LGA                 | MAX32680               | Maxim Integrate      |
|     2 | MAX6071AAUT21+T    | U2 U3                                                                   | IC VREF SERIES 0.04% SOT23-6     | MAX6071AAUT21+T        | Maxim Integrated     |
|     1 | DS1233AZ-10+T&R    | U4                                                                      | IC SUPERVISOR 1 CHANNEL SOT223-3 | DS1233AZ-10+T&R        | Maxim Integrate      |
|     1 | CFAF128128B1-0145T | U5                                                                      | LCD TFT Full Color 1.45" 128x128 | CFAF128128B1-0145T     | Crystalfontz         |
|     1 | MAX4166EUA+        | U6                                                                      | IC OPAMP GP 5MHZ RRO 8UMAX       | MAX4166EUA+            | Maxim Integrated     |
|     1 | FT2232D-REEL       | U7                                                                      | IC USB FS DUAL UART/FIFO 48-LQFP | FT2232D-REEL           | FTDI                 |
|     1 | MAX3207EAUT+T      | U8                                                                      | ESD PROT DIFF SOT23-6            | MAX3207EAUT+T          | Maxim Integrated     |
|     1 | MAX1806EUA33+      | U9                                                                      | IC REG LDO 3.3V/ADJ 0.5A 8UMAX   | MAX1806EUA33+          | Maxim Integrated     |
|     1 | NL27WZ07DFT2G      | U10                                                                     | IC BUFFER NON-INVERT 5.5V SC88   | NL27WZ07DFT2G          | ON Semiconductor     |
|     1 | 32 MHZ             | Y1                                                                      | CRYSTAL 32.00 MHZ 12PF SMD       | FA-20H 32.0000MF12Y-W3 | EPSON                |
|     1 | 6MHz               | Y2                                                                      | CRYSTAL 6MHZ 18PF SMD            | ABMM-6.000MHZ-B2-T     | Abracon Corp         |

Evaluates: MAX32680

## MAX32680 EV Kit Schematic

<!-- image -->

Evaluates: MAX32680

## MAX32680 EV Kit Schematic (continued)

<!-- image -->

## MAX32680 EV Kit Schematic (continued)

<!-- image -->

│

## MAX32680 EV Kit Schematic (continued)

<!-- image -->

│

## MAX32680 EV Kit Schematic (continued)

<!-- image -->

│

## MAX32680 EV Kit Schematic (continued)

<!-- image -->

## MAX32680 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses aUe implied  0axim ,nWegUaWed UeseUYes WKe UigKW WR FKange WKe FiUFXiWU\ and speFifiFaWiRns ZiWKRXW nRWiFe aW an\ Wime

│

Evaluates: MAX32680