<!-- lastmod 2022-08-03 -->
## MAXQ617 Evaluation Kit

## General Description

This  evaluation  kit  provides  a  platform  for  evaluating the  capabilities  of  the  MAXQ617,  16-bit,  RISC  microcontrollers  targeted  for  infrared  applications.  The  motherboard  includes  a  USB  port  for  serial  communication, JTAG  header  for  programming  and  debugging,  voltage regulators  to  power  over  USB  or  JTAG,  receive  and transmit IR LEDs, and port pin headers. Packaged with the  motherboard  is  the  USB-to-JTAG/1-Wire ®   Adapter, MAXQ617 daughter card,  A-to-Micro-B USB cable, A-toMini-B USB cable, and a 10-pin JTAG ribbon cable. This evaluation  kit  provides  a  robust  platform  for  developing and debugging applications targeted for the MAXQ617.

## EV Kit Contents

- MAXQ617 Daughter Card
- Blaster Base Evaluation Motherboard
- USB-to-JTAG/1-Wire Adapter
- A-to-Mini-B USB Cable
- A-to-Micro-B USB Cable
- 10-pin JTAG Ribbon Cable

<!-- image -->

Ordering Information appears at end of data sheet.

MAXQ and 1-Wire are registered trademarks of Maxim Integrated Products, Inc.

## Evaluates: MAXQ617 Intended for IR Applications

## Features and Benefits

- Easily Load and Debug Code Using Supplied USBto-JTAG/1-Wire Adapter
- JTAG Interface Provides In-Application Debugging Features
- Step-by-Step Execution Tracing
- Breakpoints by Code Address, Data Memory Address, or Register Access
- Data Memory or Register Content View and Edit
- Serial-to-USB Interface for RS-232 Communication
- Port Pin Headers
- Mounting Holes and Pads for Receive and Transmit IR LEDs

## Blaster Base on Motherboard Photo

<!-- image -->

<!-- image -->

## MAXQ617 Evaluation Kit

## Detailed Description

In conjunction with this data sheet, the appropriate data sheet  and  user's  guide  for  the  specific  microcontroller provides the necessary information for programming and debugging. Example code can be found on the quick view page for the microcontroller that you are using. Supported IDEs can be found at www.maximintegrated.com/products/microcontrollers/development\_tools.cfm .

## Jumper Functions

The  EV  kit  is  equipped  with  three  jumpers  that  can  be installed  or  removed to alter the functions of the board. See Table 1 for a description of each jumper function.

## Power Supply

The  EV  kit  is  powered  over  the  USB  or  JTAG.MAXQ JTAG and a 5V USB supply to an on-board regulator that regulates it down to 3.3V. Diodes D1 and D2 prevent the sources from back feeding each other.

## Evaluates: MAXQ617 Intended for IR Applications

## Table 1. Jumper Functions

*Default position.

| JUMPER   | SETTING   | EFFECT                                     |
|----------|-----------|--------------------------------------------|
| JH1      | Closed*   | Connects RX to the USB serial adapter      |
| JH1      | Open      | Disconnects RX from the USB serial adapter |
| JH2      | Closed*   | Connects TX to the USB serial adapter      |
| JH2      | Open      | Disconnects TX from the USB serial adapter |
| JU1      | Closed*   | Connects VDD to the 3.3V regulator         |
| JU1      | Open      | Disconnects VDD                            |

Figure 1. Blaster Base Evaluation Motherboard Block Diagram

<!-- image -->

│

## MAXQ617 Evaluation Kit

## Serial Interface

A  serial-to-USB  conversion  chip  is  included  on  the motherboard. To open the serial communication, plug in the A-to-Micro-B cable and open a serial port on the host computer. Jumpers JH1 and JH2 are used to connect the serial port to the conversion chip.

## Infrared LEDs

The  motherboard  has  pads  available  for  transmit  and receive IR LEDs. If additional LEDs are required for the application  tested,  through-hole  or  surface-mount  LEDs and their corresponding resistors can be installed on the motherboard.  The  anode  is  connected  to  V DD   and  the cathode is connected to the pad for a resistor.

## Evaluates: MAXQ617 Intended for IR Applications

## JTAG Interface

A USB-to-JTAG/1-Wire adapter (provided with the EV kit) is used to program and debug applications running on the device. Connect the 10-pin ribbon cable from the adapter to connector J3 on the motherboard. Pin 1 of the header is indicated by the small arrow on the motherboard. The red wire in the ribbon cable should line up with pin 1 of the header. The adapter supplies 5V to the motherboard and allows the user to program and debug the microcontroller. Refer to the USB-to-JTAG/1-Wire Adapter User's Guide for additional instructions.

Figure 2. MAXQ617 Daughter Card Schematic

<!-- image -->

│

## Ordering Information

| PART          | TYPE           |
|---------------|----------------|
| MAXQ617EVKIT# | Evaluation Kit |

# Denotes RoHS compliant.

## MAXQ617 Bill of Materials

## Blaster Base Motherboard

|   ITEM |   QTY | PART, REFERENCE                   | VALUE                    | DESCRIPTION                                     |
|--------|-------|-----------------------------------|--------------------------|-------------------------------------------------|
|      1 |     2 | C1, C7                            | 100nF                    | CAP CER 0.1UF 16V 10% X7R 0603                  |
|      2 |     1 | C2                                | 10nF                     | CAP CER 10000PF 16V 10% X7R 0603                |
|      3 |     1 | C3                                | 4.7uF                    | CAP CER 4.7UF 16V 10% X7R 0805                  |
|      4 |     3 | C4, C5, C6                        | 100nF                    | CAP CER 0.1UF 16V 10% X7R 0603                  |
|      5 |     1 | C8                                | 10uF                     | CAP CER 10UF 10V 10% X7R 0805                   |
|      6 |     1 | C9                                | 1uF                      | CAP CER 1UF 16V 10% X7R 0603                    |
|      7 |     1 | CN1                               | USB MICRO-B RECEPTACLE   | CONN RCPT MICRO USB R/A SMD                     |
|      8 |     2 | D1, D2                            | DFLS230L-7               | DIODE SCHOTTKY 2A 30V PWRDI 123                 |
|      9 |     1 | D3                                | LED, GREEN               | LED SMARTLED GREEN 570NM 0603                   |
|     10 |     2 | D4, D6                            | LTE-S9301-14-UL          | Infrared Emitters INFRARED LED 940nm            |
|     11 |     2 | D5, D7                            | IR333/H0/L10             | Infrared Emitters INFRARED LED 940nm            |
|     12 |     1 | FB1                               | HZ1206C202R-00           | FERRITE CHIP SIGNAL 2000OHMSMD                  |
|     13 |     5 | H1, H2, H3, H4, H5                | DNI                      | DNI MTG125DRL 250PAD                            |
|     14 |     1 | J1                                | HEADER 8                 | CONN HEADER .100 SINGL STR 8POS                 |
|     15 |     1 | J2                                | HEADER 4                 | CONN HEADER .100 SINGL STR 4POS                 |
|     16 |     1 | J3                                | JTAG                     | CONN HEADER .100 DUAL STR 10POS                 |
|     17 |     3 | JH1, JH2, JU1                     | 2x1                      | CONN HEADER .100 SINGL STR 2POS                 |
|     18 |     5 | M1, M2, M5, M6, M9                | SCREW MACH PHIL 4-40X1/4 | SCREW MACH PHIL 4-40X1/4 Stain                  |
|     19 |     5 | M3, M4, M7, M8, M10               | 0.625" 5/8 4-40 STANDOFF | STANDOFF HEX .625"L 4-40THR Alu 5/8"            |
|     20 |     1 | PCB1                              | PCB                      | Blaster Base Board                              |
|     21 |     2 | R1, R2                            | 182                      | RES 182 OHM1/10W 1% 0603                        |
|     22 |     1 | R3                                | 1K                       | RES 1.00K OHM1/10W 1% 0603 SMD                  |
|     23 |     1 | R4                                | 100                      | RES 100 OHM1/10W 1% 0603                        |
|     24 |     2 | R5, R6                            | 0                        | RES 0.0 OHM1/10W 0603 SMD                       |
|     25 |     1 | SJ1                               | SHUNT                    | CONN JUMPER SHORTING TIN                        |
|     26 |     1 | SW1                               | B3S-1002                 | SWITCH TACT6MMSMDMOM230GF                       |
|     27 |     7 | TP1, TP2, TP3, TP4, TP5, TP6, TP7 | 1P                       | CONN HEADER .100 SINGL STR 1POS                 |
|     28 |     1 | U1                                | FT232RL                  | IC FTDI FT232RL USB-SRL 28-SSOP                 |
|     29 |     1 | U2                                | MAX3207EAUT+T            | IC ESD PROT DIFF SOT23-6                        |
|     30 |     1 | U3                                | MAX13206EALA+            | 2-/4-/6-/8-Channel ±30kV ESD Protectors in µDFN |
|     31 |     1 | U4                                | MAX1806EUA33+            | 500mA, Low-Voltage Linear Regulator             |
|     32 |     1 | U5                                | MAX13204EALT+            | 2-/4-/6-/8-Channel ±30kV ESD Protectors in µDFN |
|     33 |     2 | XU1                               | SIP8P                    | CONN HEADER FEMALE 8POS .1" TIN                 |

## MAXQ617 Bill of Materials (continued)

## Daughter Card

|   ITEM |   QTY | PART, REFERENCE   | VALUE           | DESCRIPTION                     |
|--------|-------|-------------------|-----------------|---------------------------------|
|      1 |     1 | C1                | 1uF             | CAP CER 1UF 16V 10% X7R 0603    |
|      2 |     1 | C2                | 100nF           | CAP CER 0.1UF 16V 10% X7R 0603  |
|      3 |     1 | C3                | 4.7uF           | CAP CER 4.7UF 16V 10% X5R 0805  |
|      4 |     2 | D1 D3             | IR333/H0/L10    |                                 |
|      5 |     2 | D2 D4             | LTE-S9301-14-UL |                                 |
|      6 |     1 | PCB1              | PCB             |                                 |
|      7 |     2 | R1 R2             | 0               |                                 |
|      8 |     1 | U1                | MAXQ617         | MAXQ617                         |
|      9 |     1 | XU1               | DIP16P 600W     | CONN HEADER .100 SINGL STR 8POS |

## MAXQ617 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                               | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------|-----------------|
|                 0 | 7/15            | Initial release                                           | -               |
|                 1 | 9/16            | Changed EV Kit Contents heading, updated Figure 2 caption | 1, 3            |
|                 2 | 10/16           | Added RoHS compliance notation                            | 4               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAXQ617 Intended

for IR Applications