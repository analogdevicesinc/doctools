<!-- lastmod 2022-08-03 -->
<!-- image -->

Evaluates: MAX32672

## General Description

The MAX32672 evaluation kit (EV kit) provides a platform for evaluating the capabilities of the MAX32672 microcontroller,  which  is  a  small,  high-reliability,  ultra-low  power, 32-bit  microcontroller.  The  MAX32672  is  a  secure  and cost-effective solution for motion/motor control, industrial sensors, and battery-powered medical devices and offers legacy designs an easy, cost-optimal upgrade path from 8-bit or 16-bit microcontrollers.

## EV Kit Contents

- MAX32672 EV Kit Containing a MAX32672 with a Preprogrammed Demo
- MAX32625PICO Debugger with Cables
- One Standard A-to-Micro B USB Cable

Ordering Information appears at end of data sheet.

Arm and Cortex are registered trademarks of Arm Limited.

©

Click here to ask an associate for production status of specific part numbers.

## MAX32672 Evaluation Kit

## Benefits and Features

- Selectable, On-Board, High-Precision Voltage Reference
- 128 x 128 (1.45in) Color TFT Display with SPI Interface
- USB 2.0 Micro B-to-Serial UARTs
- UART0 and LPUART0 Interface Is Selectable through On-Board Jumpers
- All GPIOs Signals Accessed through 0.1in Headers
- 12 Analog Inputs Accessed through 0.1in Headers with Optional Filtering
- 10-Pin Arm ®  Cortex ®  SWD Connector
- Board Power Provided by USB Port
- On-Board, 3.3V LDO Regulator
- Test Loops Provided to Supply Optional VCORE Power Externally
- Individual Power Measurement on All IC Rails through Jumpers
- Two General-Purpose LEDs and One GeneralPurpose Pushbutton Switch

## MAX32672 EV Kit Board

H2

MAX32672 EV KIT  REV B

H3

CFAF128128B1-0145T

CRYSTALFONTZ

integratedm LYJ

wxewi

PCB-00206-B-0

SW4

VBUS

PO22

PO\_23

3V3

JP15

VDDA

EXT

UARTS

USB/PW

1941

CM1

12CO\_DA

9r

CLK\_OUT

HFX

HF\_CLK\_IN

N3

DIS

LD

N3

ANALOGO

GND

R47

J1

ANALOG

GND

VDD EN

Y2

lRI

rdr VREF

d

ANAL0G8.11

10.

GND

MS

H4

<!-- image -->

BOOT

PWR

GND

TP4

en GPIOP

VCORE

JP14

LPRXO

RXO

GND

TP2

E

GND

LEOIEN

GRIOO

12C0-

Evaluates: MAX32672

AUX

H1

Er

1d1

RSTN

GND

Y1

dr po\_18

│

## MAX32672 Evaluation Kit

## Quick Start

## Required Equipment

- MAX32672 EV kit containing a MAX32672 with a preprogrammed demo
- One Standard A-to-Micro B USB cable

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  these steps to verify board operation:

- 1) While observing safe ESD practices, carefully remove the MAX32672 EV kit board out of its packaging. Inspect the board to ensure that no damage occurred during shipment. Jumpers/shunts are preinstalled prior to testing and packaging.
- 2) Power up the board by plugging in the provided USB cable to connector CN1. Verify that the VBUS blue LED (DS1) and the 3V3 (DS2) green LED are illuminated.
- 3) The MAX32672 is preprogrammed with a demo program. The program will now initiate and display the Maxim logo upon successful completion.

## Detailed Description of Hardware

## Power Supply

The EV kit is powered by +5V, which is made available through VBUS on the Micro USB type-B connector CN1. The blue VBUS LED (DS1) and the green 3.3V LED will illuminate when the board is powered.

## Single- or Dual-Supply Operation

The  EV  kit  is  configured  for  single-supply  operation. For dual-supply operation, install a jumper on JP14 and connect  an  external  supply  to  TP6  (VCORE\_EXT)  and ground. Refer to the MAX32672 data sheet for acceptable voltage values.

## Current Monitoring

Two pin  headers  provide  convenient  current  monitoring points for VDDA EN (JP12), VDD EN (JP13), and VCORE EN (JP14). JP14 is only used for current measurements when VCORE is supplied externally.

## Low-Power Mode Current Measurements

To accurately achieve the low-power current values, the EV kit must be configured such that no outside influence (such as a pullup, external clock, or debugger connector) causes a current source or sink on that GPIO.

For these measurements, the board will be needed to be configured as follows:

- 1) Remove jumpers JP2 through JP11.

Windows is a registered trademark of Microsoft Corporation.

## Evaluates: MAX32672

- 2) Set SW2 to the DIS position and remove resistor R12.
- 3) Unplug the SWD connector.

## Clocking

The  MAX32672  clocking  is  provided  by  an  external 16MHz crystal (Y1).

## External Voltage Reference

The external voltage reference input VREF for the ADC can  be  sourced  externally  by  a  high-precision  external reference source (the MAX6071). VREF (JP1) allows the external reference to be disconnected so that VREF can be sourced internally by VDDA.

## JTAG Serial Wire Debug (SWD) Support

SWD  debug  can  be  accessed  through  an  Arm  Cortex 10-pin  connector  (J5).  Logic  levels  are  set  to  3V3  by default, but they can be set to 1.8V if TP5 (VDD\_VDDA\_ EXT)  is  supplied  externally.  Be  sure  to  remove  jumper JP15 (LDO\_DUT\_EN) to disconnect the 3.3V LDO if supplying VDD and VDDA externally.

## UART Interface

The  EV  kit  provides  a  USB-to-UART  bridge  chip  (the FTDI  FT230XS-R).  This  bridge  eliminates  the  requirement for a physical RS-232 COM port. Instead, the IC's UART access is through the Micro USB type-B connector (CN1).  The  USB-to-UART  bridge  can  be  connected  to the  IC's  UART0  or  LPUART0  with  jumpers  JP10  (RX0) and JP11 (TX0). Virtual COM port drivers and guides for installing  Windows ®   drivers  are  available  on  the FTDI Chip website .

## Boot Loader

The boot loader is activated by the boot-load-enable slide switch (SW2). This pulls P0\_10 low and, upon a power cycle or reset, the device will enter boot loader mode.

## GPIO and Alternate Function Headers

GPIO and alternate function signals from the MAX32672 can be accessed through 0.1in-spaced headers J3 and J4.

## Analog Headers

The  12  analog  inputs  can  be  accessed  through  0.1inspaced headers JH1, JH2, and JH3.

## I 2 C Pullups

The  I 2 C  ports  can  independently  pulled  up  to  V\_AUX (3.3V  default)  through  JP4  (I2C0\_CL\_PU)  and  JP5 (I2C0\_DA\_PU), JP6 (I2C1\_CL\_PU) and JP7 (I2C1\_DA\_ PU), and JP8 (I2C2\_CL\_PU) and JP9 (I2C2\_DA\_PU).

## Reset Pushbutton

The IC can be reset by pushbutton SW1.

## MAX32672 Evaluation Kit

## Indicator LEDs

The general-purpose indicator LED D1 (red) is connected to GPIO P0.22, and LED D2 (green) is connected to GPIO P0.23.

## Table 1. MAX32672 EV Kit Jumper Settings

| JUMPER   | SIGNAL   | SETTINGS   | DESCRIPTION                                                                      |
|----------|----------|------------|----------------------------------------------------------------------------------|
| JP1      | VREF     | Open       | Disconnects on-board, high-precision voltage reference                           |
| JP1      | VREF     | Closed*    | Connects on-board, high-precision voltage reference                              |
| JP2      | P0_22    | Open       | Disconnects red LED D1 from P0_22                                                |
| JP2      | P0_22    | Closed*    | Connects red LED D1 to P0_22                                                     |
| JP3      | P0_23    | Open       | Disconnects green LED D2 from P0_23                                              |
| JP3      | P0_23    | Closed*    | Connects green LED D2 to P0_23                                                   |
| JP4      | I2C0_SCL | Open*      | Disconnects 2.2K pullup sourced by 3V3 from I2C0_SCL                             |
| JP4      | I2C0_SCL | Closed     | Connects 2.2K pullup sourced by 3V3 to I2C0_SCL                                  |
| JP5      | I2C0_SDA | Open*      | Disconnects 2.2K pullup sourced by 3V3 from I2C0_SDA                             |
| JP5      | I2C0_SDA | Closed     | Connects 2.2K pullup sourced by 3V3 to I2C0_SDA                                  |
| JP6      | I2C1_SCL | Open*      | Disconnects 2.2K pullup sourced by 3V3 from I2C1_SCL                             |
| JP6      | I2C1_SCL | Closed     | Connects 2.2K pullup sourced by 3V3 to I2C1_SCL                                  |
| JP7      | I2C1_SDA | Open*      | Disconnects 2.2K pullup sourced by 3V3 from I2C1_SDA                             |
| JP7      | I2C1_SDA | Closed     | Connects 2.2K pullup sourced by 3V3 to I2C1_SDA                                  |
| JP8      | I2C2_SCL | Open       | Disconnects 2.2K pullup sourced by 3V3 from I2C2_SCL                             |
| JP8      | I2C2_SCL | Closed*    | Connects 2.2K pullup sourced by 3V3 to I2C2_SCL                                  |
| JP9      | I2C2_SDA | Open*      | Disconnects 2.2K pullup sourced by 3V3 from I2C2_SDA                             |
| JP9      | I2C2_SDA | Closed     | Connects 2.2K pullup sourced by 3V3 to I2C2_SDA                                  |
| JP10     | UART_RX  | 2-1*       | Connects the USB serial bridge to UART0_RX (P0.8)                                |
| JP10     | UART_RX  | 2-3        | Connects the USB serial bridge to LUART0_RX (P0.26)                              |
| JP11     | UART_TX  | 2-1*       | Connects the USB serial bridge to UART0_TX (P0.9)                                |
| JP11     | UART_TX  | 2-3        | Connects the USB serial bridge to LUART0_TX (P0.27)                              |
| JP12     | VDDA     | Open       | Disconnects power from VDDA                                                      |
| JP12     | VDDA     | Closed*    | Connects power to VDDA                                                           |
| JP13     | VDD      | Open       | Disconnects power from VDD                                                       |
| JP13     | VDD      | Closed*    | Connects power to VDD                                                            |
| JP14     | VCORE    | Open*      | Disconnects power from VCORE from an external power supply through test loop TP6 |
| JP14     | VCORE    | Closed     | Connects power to VCORE from an external power supply through test loop TP6      |
| JP15     | LDO DUT  | Open       | Disconnects power from 3.3V LDO                                                  |
| JP15     | LDO DUT  | Closed*    | Connects power to 3.3V LDO                                                       |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX32672EVKIT# | EV Kit |

Evaluates: MAX32672

## GPIO Pushbutton Switches

The general-purpose pushbutton (SW3) is connected to GPIO P0.18. If the pushbutton is pressed, the attached port pin is pulled low.

│

## MAX32672 Evaluation Kit

## MAX32672 EV Kit Bill of Materials

| QTY                      | VALUE                         | PART REFERENCE                                          | BOM_DESCRIPTION                                              | MANUFACTURER_PN                  | MANUFACTUER                        |
|--------------------------|-------------------------------|---------------------------------------------------------|--------------------------------------------------------------|----------------------------------|------------------------------------|
| 4 100nF                  | C1 C2 C34                     | C36 CAP CER 0.1UF 16V 10% X7R 0402 NP0 0402             |                                                              | GRM155R71C104KA88D               | Murata Electronics                 |
| 2 12pF                   | C3 C4                         | CAP CER 12PF 50V 5%                                     |                                                              | CL05C120JB5NNNC                  | Samsung Electro-Mech               |
| 14 DNI                   | C5 C7 C23                     | C16 C17 C18 C19 C20 C21 C22 C24 C25 C26 C27 DNI         |                                                              | GRT155R61C105KE01D               | Murata Electronics                 |
| 3 1uF 4 100nF            | C6 C8 C9 C15                  | C13 C35                                                 | CAP CER 1UF 16V 10% X5R 0402 CAP CER 0.1UF 10V 10% X5R 0402  | GRM155R61A104KA01D               | Murata                             |
| 1 4.7uF                  | C10                           | C32                                                     | CAP CER 4.7UF 10V10% X7R 0805                                | GRM21BR71A475KA73K               | Murata Electronics                 |
| 2 47pF                   | C11                           | CAP CER 47PF                                            | 50V 1% NP0 0402                                              | C1005C0G1H470F050BA              | TDK Corporation                    |
| 1 4.7nF                  | C12                           | C14                                                     | CAP CER 4700PF 50V 5% X7R 0402                               | GRM155R71H472JA01D               | Murata Electronics                 |
| 1 4.7uF                  | C28                           | CAP CER 4.7uF 10V                                       | 10% X5R 0603                                                 | C0603C475K8PACTU                 | Kemet                              |
| 1 10nF                   | C29                           | CAP CER 10000PF 25V 10%                                 | X7R 0603                                                     | CL10B103KA8NNNC                  | Samsung Electro-Mech               |
| 1 100nF                  | C30                           |                                                         | CAP CER 0.1uF 16V 10% X7R 0603                               | C0603C104K4RACTU                 | Kemet                              |
| 1 10uF                   | C31                           |                                                         | CAP CER 10UF 6.3V 20% X5R 0402                               | GRJ155R60J106ME11D               | Murata Electronics                 |
| 1 1uF                    | C33                           |                                                         | CAP CER 1UF 35V 10% X5R 0603                                 | GMK107BJ105KA-T                  | Taiyo Yuden                        |
| 1 10uF                   | C38                           |                                                         | CAP CER 10UF 6.3V 20% X5R 0603                               | CL10A106MQ8NNNC                  | Samsung Electro-Mech               |
| 1 MICRO                  | USB B R/A CN1                 |                                                         | CONN RCPT 5POS MICRO USB B R/A                               | 47346-0001                       | Molex                              |
| 1 RED                    | D1                            |                                                         | LED 660NM RED WTR CLR 1206 SMD                               | SML-LX1206SRC-TR                 | Lumex Opto                         |
| 2 GRN                    | D2                            | DS2                                                     | LED 565NM WTR CLR GREEN 1206 SMD                             | SML-LX1206GC-TR                  | Lumex Opto                         |
| 1 BLUE                   |                               | DS1                                                     | LED 469NM BLUE DIFF 1206 SMD                                 | HSMR-C150                        | Avago Technologies                 |
| 4 DNI                    |                               | H1 H2 H3 H4                                             | DNIMTG 125DRL 300PAD                                         |                                  |                                    |
| 2 SMA                    | J1                            | J6                                                      | CONN SMA JACK STR 50 OHM PCB                                 | 901-10112                        | Amphenol RF                        |
| 1 503480-1000 2 10P 1x10 | J3 J4                         | J2 CONN HEADER                                          | CONN FFC FPC 10POS 0.50MM R/A .100 SINGL STR 10POS           | 503480-1000 PEC10SAAN            | Molex, LLC Sullins                 |
| 1                        | 10P CORTEXDEBUG               | J5                                                      | IDC BOX HEADER 0.050 10 POS SMD                              | 3220-10-0300-00                  | CNC Tech                           |
| 3                        | 8P 2x4                        | JH1 JH2 JH3                                             | CONN HEADER .100 DUAL STR 8POS                               | PEC04DAAN                        | Sullins                            |
| 13                       | JUMPER                        | JP1 JP2 JP3 JP4 JP5 JP6 JP7 JP8 JP9 JP12 JP13 JP14 JP15 | CONN HEADER .100 SINGL STR 2POS                              | PEC02SAAN                        | Sullins                            |
| 2 1                      | 3P 3x1                        | JP10 JP11                                               | CONN HEADER .100 SINGL STR 3POS                              | PEC03SAAN                        | Sullins Laird-Signal Integrity     |
| 1                        | HZ1206C202R-10 BLM21PG221SN1D | L1 L2                                                   | FERRITE CHIP SIGNAL 2000 OHM SMD FERRITE CHIP 220 OHM 0805   | HZ1206C202R-10 BLM21PG221SN1D    | Murata Electronics                 |
| 1 2                      | PCB                           | PCB1                                                    |                                                              |                                  | Microchip                          |
|                          | VP2110K1-G                    | Q1 Q2                                                   | MOSFET P-CH 100V 0.12A SOT23-3                               | VP2110K1-G                       |                                    |
| 3                        | 0 1K                          | R2 R44 R47 R4                                           | RES SMD 0 OHM JUMPER 1/10W 0603                              | RC0603JR-070RL ERJ-3EKF1001V     | Yageo Panasonic                    |
| 2                        |                               | R3                                                      | RES 1K OHM 1/10W 1% 0603 SMD                                 | ERJ-2RKF4990X                    | Panasonic                          |
| 11                       | 499                           | R5 R22 R23 R30 R31 R37 R39 R41 R43 R51 R53              | RES SMD 499 OHM 1% 1/10W 0402                                |                                  |                                    |
| 1                        | 10K                           | R6                                                      | RES 10K OHM 1/10W 1% 0603 SMD                                | ERJ-3EKF1002V                    | Panasonic                          |
| 15                       | 0                             | R7 R18 R19 R20 R21 R26 R27 R28                          | RES SMD 0 OHM JUMPER 1/10W 0603                              | RC0603JR-070RL                   | Yageo                              |
|                          |                               | R29 R40 R42 R45 R46 R49 R52                             |                                                              |                                  |                                    |
| 2 1                      | 150K R8 R10 470               | RES 150K R9                                             | OHM 1/10W 1% 0603 SMD RES 470 OHM 1/10W 1% 0603 SMD          | ERJ-3EKF1503V ERJ-3EKF4700V      | Panasonic Panasonic Panasonic      |
| 2 332                    |                               | R11 R36                                                 | RES 332 OHM 1/10W 1% 0603 SMD                                | ERJ-3EKF3320V                    | Yageo                              |
| 1 10K                    |                               | R12                                                     | RES SMD 10K OHM 1% 1/16W 0402                                | RC0402FR-0710KL RC0603FR-07100RL |                                    |
| 1 100                    |                               | R13                                                     | RES SMD 100 OHM 1% 1/10W 0603                                |                                  | Yageo Panasonic                    |
| 6 2.21K 2 10K            | R14 R32                       | R15 R16 R17 R24 R25 R48                                 | RES SMD 2.21K OHM 1% 1/10W 0402                              | ERJ-2RKF2211X ERJ-3EKF1002V      | Panasonic                          |
| 2 27                     | R33                           | R34                                                     | RES 10K OHM 1/10W 1% 0603 SMD RES 27 OHM 1/10W 1% 0603 SMD   | ERJ-3EKF27R0V                    | Panasonic                          |
| 1 2.7K                   |                               |                                                         | RES 2.7K OHM 1/10W 1% 0603 SMD                               | ERJ-3EKF2701V                    |                                    |
| 1 1M                     | R35 R50                       |                                                         | RES SMD 1M OHM 5% 1/8W 0805                                  | ERJ-6GEYJ105V                    | Panasonic Panasonic                |
| 3 DNI                    | SH1 SH2                       | SH3                                                     | DNI 2 NET SHORT                                              |                                  | Omron                              |
| 1 B3S-1002               | BY OMZ SW1                    |                                                         | SWITCH TACTILE SPST-NO 0.05A 24V                             | B3S-1002 BY OMZ                  | Electronics Nidec Copal            |
| 1 CL-SB-12A-01T          |                               | SW2                                                     | SWITCH SLIDE SPDT 200MA 12V SWITCH TACTILE SPST-NO 0.05A 24V | CL-SB-12A-01T B3S-1000P          | Electronics Omron Electronics      |
| 1 B3S-1000P 1 SPDT 3A    | SW3                           | SW4                                                     | SWITCH TOGGLE SPDT 3A 120V                                   | ET01MD1AGE                       | C&K Components                     |
| 1 YLW                    | TP1                           |                                                         | TEST POINT PC MULTI PURPOSE                                  | 5014                             | Keystone Electronics Sullins       |
| 1 1P                     | TP2                           |                                                         | CONN HEADER .100 SINGL STR                                   | PEC01SAAN                        | Keystone                           |
|                          |                               | TP4                                                     | YEL 1POS                                                     | 5011                             |                                    |
| 2 BLK GRN                | TP3 TP5                       |                                                         | TEST POINT PC MULTI PURPOSE BLK TEST POINT PC MULTI PURPOSE  | 5126                             | Electronics Keystone               |
| 1 ORG                    | TP6                           |                                                         | GRN TEST POINT PC MULTI PURPOSE ORG                          | 5013                             | Electronics Keystone Electronics   |
| 1 MAX32672GTL+           | U1                            |                                                         | MAX32672GTL+ 40P TQFN                                        | MAX32672GTL+                     | Maxim Integrate d                  |
| 1 MAX6071AAUT21+T        | U2                            |                                                         | IC VREF SERIES 0.04% SOT23-6                                 | MAX6071AAUT21+T                  | Maxim Integrated                   |
| 1                        | U3                            |                                                         | LCD TFT Full Color 1.45" 128x128                             | CFAF128128B1-0145T               | Crystalfontz                       |
| 1                        |                               |                                                         | IC USB SERIAL BASIC UART                                     | FT230XS-R                        | FTDI                               |
| 1 FT230XS-R              | CFAF128128B1-0145T            | U4                                                      | 16SSOP ESD PROT DIFF SOT23-6                                 | MAX3207EAUT+T                    | Maxim Integrated                   |
| 1 1                      | MAX3207EAUT+T                 | U5 U6                                                   | IC REG LDO 3.3V/ADJ 0.5A 8UMAX IC SUPERVISOR 1 CHANNEL       | MAX1806EUA33+                    | Maxim Integrated Maxim Integrate d |
|                          |                               | U7                                                      |                                                              | DS1233AZ-10+T&R                  |                                    |
| 1                        | MAX1806EUA33+ DS1233AZ-10+T&R |                                                         | SOT223-3 CRYSTAL 25.0000MHZ 12PF SMD                         | CX3225SB25000H0FLJCC             | Kyocera International              |
| 1 25MHz 1                |                               | Y1 Y2                                                   | CRYSTAL 32.768KHZ 6.0PF SMD                                  | ABS07-32.768KHZ-6-T              | Abracon Corp                       |
| 32.768kHz                |                               |                                                         |                                                              |                                  |                                    |

Evaluates: MAX32672

## MAX32672 Evaluation Kit

## MAX32672 EV Kit Schematic

LED1

<!-- image -->

I2C0\_DA\_PU

USB

MICRO B

USB - UARTS

3V3

Evaluates: MAX32672

## MAX32672 EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX32672

## MAX32672 EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX32672

## MAX32672 EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX32672

## MAX32672 EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX32672

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                           | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------|-----------------|
|                 0 | 6/21            | Initial release                                                       | -               |
|                 1 | 6/22            | Updated board photo, Detailed Description of Hardware , and schematic | 2-4, 6-11       |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX32672