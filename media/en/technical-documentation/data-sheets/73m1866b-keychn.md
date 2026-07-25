<!-- lastmod 2022-08-02 -->
<!-- image -->

Simplifying System Integration TM

## 73M1866B Keychain Demo Board User Manual

Teridian Semiconductor Corporation is a registered trademark of Teridian Semiconductor Corporation. Windows is a registered trademark of Microsoft Corporation.

© 2008 Teridian Semiconductor Corporation.  All rights reserved. All other trademarks are the property of their respective owners.

Teridian Semiconductor Corporation makes no warranty for the use of its products, other than expressly contained in the Company's warranty detailed in the Teridian Semiconductor Corporation standard Terms and Conditions.  The company assumes no responsibility for any errors which may appear in this document, reserves the right to change devices or specifications detailed herein at any time without notice and does not make any commitment to update the information contained herein.  Accordingly, the reader is cautioned to verify that this document is current by comparing it to the latest version on http://www.teridian.com or by checking with your sales representative.

Teridian Semiconductor Corp., 6440 Oak Canyon, Suite 100, Irvine, CA 92618 TEL (714) 508-8800, FAX (714) 508-8877, http://www.teridian.com

## Table of Contents

|   1 | Introduction .........................................................................................................................................5   |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
|   2 | 73M1866B Keychain Board Schematic.............................................................................................6                           |
|     | Connectors........................................................................................................................................10      |
|   3 |                                                                                                                                                           |
|   4 | Connecting the Keychain Demo Board into an Existing System ................................................11                                             |
|   5 | Ordering Information........................................................................................................................12            |
|     | Related Documentation....................................................................................................................12               |
|   6 |                                                                                                                                                           |
|   7 | Contact Information..........................................................................................................................12           |

## Figures

| Figure 1: 73M1866B Keychain Demo Board ................................................................................................5   |
|--------------------------------------------------------------------------------------------------------------------------------------------|
| Figure 2: 73M1866 Keychain Demo Board Schematic.................................................................................6          |
| Figure 3: 73M1866B Keychain Demo Board Top Layer...............................................................................7           |
| Figure 4: 73M1866B Keychain Demo Board Bottom Layer..........................................................................7             |
| Figure 5: 73M1866B Keychain Demo Board Power Inner Layer..................................................................8                |
| Figure 6: 73M1866B Keychain Demo Board Ground Inner Layer................................................................8                 |

## 1 Intr roduction n

The 73M1 'blue wire 73M1966 there is no included w 1866B Keycha e' the demo b B Standard D ot a connecto when the 73M ain Demo Bo oard into the Demo Board o or to attach th M1866B Keyc ard is intende system that i other than not e GUI cable p hain Demo B ed for use in t s will be used t having the c present on th Board is order target applica d with.  The a connector for t is board, the ed. ations where it ctive circuitry the GUI interf cable and GU t is desired to y is identical to face cable.  S UI software ar o o the Since re not

## 1.1 Pa ackage Con ntents

Figur re 1: 73M186 6B Keychain n Demo Boar rd

<!-- image -->

The 73M1 1866B Keycha ain Demo Bo ard Kit includ es:

- A 73M M1866B Keyc chain Demo B Board (Rev. D D5)
- A CD containing th he following d ocuments:
- 73 3M1866B/73M M1966B Keyc chain Demo B Board User M Manual (this d ocument)
- 73 3M1866B/73M M1966B Data a Sheet
- 73 3M1866B/73M M1966B PCM M Connectivity y
- 73 3M1866B/73M M1966B Layo out Guidelines s
- 73 3M1x66 Worl ldwide Design n Guide

## 1.2 Sa afety and E ESD Notes

Connectin on the boa ng live voltage ards. es to the Keyc chain Demo B Board system m will result in potentially ha azardous voltages

<!-- image -->

Extreme ca connection aution should n to live volta d be taken w ages! when handling g the Keycha ain Demo Bo oard after

<!-- image -->

The Keycha handling th ain Demo Bo his board! oard is ESD s sensitive!  ES SD precautio ons should b be taken when

## 2 73M1866B Keychain Board Schematic

Figure 2: 73M1866 Keychain Demo Board Schematic

<!-- image -->

## 2.1 73M1866B Keychain Demo Board PCB Layout

Figure 3: 73M1866B Keychain Demo Board Top Layer

<!-- image -->

Figure 4: 73M1866B Keychain Demo Board Bottom Layer

<!-- image -->

Figure 5: 73M1866B Keychain Demo Board Power Inner Layer

<!-- image -->

Figure 6: 73M1866B Keychain Demo Board Ground Inner Layer

<!-- image -->

## 2.2 Bill of Materials

Table 1 provides the bill of materials for the 73M1866B Keychain Demo Board schematic provided in Figure 2.

Table 1: 73M1866B Keychain Demo Board Bill of Materials

|   Qty | Reference               | Part Description                    | Source                              | Example MFR P/N                   |
|-------|-------------------------|-------------------------------------|-------------------------------------|-----------------------------------|
|     1 | BR1                     | HD04 rectifier bridge, 0.8A, 400V   | Diodes Inc.                         | HD04-T                            |
|     2 | C1, C3                  | 0.022 μ F 200V, X7R, 1206           | Panasonic                           | ECJ-3FB2D223K                     |
|     1 | C4                      | 10 μ F 6.3V, tantalum, 0805         | AVX, Panasonic                      | TCP0J106M8RA                      |
|     1 | C7                      | 4.7 μ F 25V, X5R, 0805              | AVX, Panasonic                      | 08053D475KAT2A                    |
|     1 | C8                      | 4.7uF 6.3V, tantalum, 0805          | Rohm                                | TCP0J475M8R                       |
|     2 | C9, C10                 | 0.22 μ F 16V, X7R, ceramic, 0603    | Panasonic                           | C0603C224K8RACTU                  |
|     4 | C12,C17,C31, C38, C48   | 0.1 μ F 16V, X7R, ceramic, 0603     | Panasonic, Kemet                    | C0603C104K8RACTU                  |
|     2 | C13, C14                | 15pF 50V, ceramic, 0603             | Panasonic                           | ECJ-1VC1H150J                     |
|     5 | C20, C26, C30, C33, C43 | 1nF 10V, X7R, ceramic, 0603         | Panasonic                           | C0603C102K8RACTU                  |
|     2 | C21, C45                | 3.3 μ F 6.3V, tantalum, 0805        | Rohm                                | TCP0J335M8R                       |
|     1 | C37                     | 0.01 μ F 50V, X7R, ceramic, 0603    | AVX, Panasonic                      | 06035C103KAT2A                    |
|     1 | C39                     | 5.6nF 50V, X7R, ±10% ceramic, 0603  | Panasonic                           | ECJ-1VB1H562K                     |
|     1 | C49                     | 100pF 50V, ceramic, 0603            | Taiyo Yuden                         | UMK107CH101JZ-T                   |
|     1 | Q5                      | MMBTA06, NPN 80 V transistor SOT23  | Diodes, Fairchild, Central, On Semi | MMBTA06LT1G                       |
|     1 | Q4                      | MMBTA92, PNP 300 V transistor SOT23 | Diodes, Fairchild, Central, On Semi | MMBTA92LT1G                       |
|     2 | Q3, Q7                  | MMBTA42, NPN 300 V transistor SOT23 | Diodes, Fairchild, Central, On Semi | MMBTA42LT1G                       |
|     1 | Q6                      | NPN 80 V transistor SOT223          | Fairchild, On Semi                  | BCP56                             |
|     1 | R2                      | 10M, 5%, 1/8W resistor 0805         | Yageo                               | RC0805JR-0710ML                   |
|     1 | R3                      | 412K, 1%, 1/10W resistor 0603       | Yageo                               | RC0603FR-07412KL                  |
|     1 | R4                      | 100K, 1%, 1/10W resistor 0603       | Yageo                               | RC0603FR-07100KL                  |
|     1 | R5                      | 8.2, 5%, 1/8W resistor 0805         | Yageo                               | RC0805JR-078R2L                   |
|     1 | R6                      | 17.4K, 1%, 1/10W resistor 0603      | Yageo                               | RC0603FR-0717K4L                  |
|     1 | R8                      | 52.3K, 1%, 1/10W resistor 0603      | Yageo                               | RC0603FR-0752K3L                  |
|     1 | R9                      | 21K, 1%, 1/10W resistor 0603        | Yageo                               | RC0603FR-0721KL                   |
|     1 | R10                     | 174, 1%, 1/10W resistor 0603        | Yageo                               | RC0603FR-07174RL                  |
|     1 | R11                     | 3K, 5%, 1/10W resistor 0603         | Yageo                               | RC0603JR-073K0L                   |
|     1 | R12                     | 5.1 K, 5%, 1/10W resistor 0603      | Yageo                               | RC0603JR-075K1L                   |
|     1 | R58                     | 240, 5%, 1/10W resistor 0603        | Yageo                               | RC0603JR-07240RL                  |
|     1 | R65                     | 200, 5%, 1/10W resistor 0603        | Yageo                               | RC0603JR-07200RL                  |
|     2 | R66, R68                | 1 M, 5%, 1/8W resistor 0805         | Yageo                               | RC0603JR-071ML                    |
|     1 | T1                      | Pulse transformer                   | Sumida UMEC Midcom                  | ESMIT 4180 TG-UTB01543S 750110001 |

## 3 Connectors

This section describes the 73M1866B Keychain Demo Board connectors.  All the digital signals and power supply connections are made through a 20-pin header connector.  The audio monitor is also brought out on this connector.  Table 2 describes the pins for the J1 connector.  For convenience, most digital signals are grouped with the PCM signals on the odd pins from pin 1 to pin 7, and the PCM CLKI pin is on pin 8.  The SPI signals can be found on the odd pins 9 through 17.  Reset is on pin 19.  The interrupt output is on pin 16.  There are two power pins on pins 2 and 4 and two ground pins on pins 18 and 20.  The audio monitor output can be found on pin 10.  There is also a CLKO pin that can be used for the rare case where the 73M1866B is used in the master mode.

Table 2: J1 Connector Pins

|   Pin | Pin Name   | Function                                    |   Pin | Pin Name   | Function                    |
|-------|------------|---------------------------------------------|-------|------------|-----------------------------|
|     1 | FSIO       | PCM Bidirectional Frame Sync                |     2 | VCC        | 3.3 V power in              |
|     3 | DX         | PCM Receive Digital Data Output             |     4 | VCC        | 3.3 V power in              |
|     5 | NC         |                                             |     6 | CLKO       | PCM Highway Clock Output    |
|     7 | DR         | PCM Transmit Digital Data Input             |     8 | CLKI       | PCM Highway Clock Input     |
|     9 | CSB        | Chip Select - low true                      |    10 | AUDIO      | Audio output for speaker    |
|    11 | SCLK       | SPI Clock                                   |    12 | NC         |                             |
|    13 | SDO        | Serial Control Data Out                     |    14 | NC         |                             |
|    15 | SDI        | Serial Control Data In                      |    16 | INTB       | Interrupt Output - low true |
|    17 | SDT        | Serial Data Thru - used in Daisy Chain Mode |    18 | GND        | Ground                      |
|    19 | RSTB       | Reset - low true input                      |    20 | GND        | Ground                      |

Table 2 describes the J2 connector pins.  These are the bi-directional PSTN network connections that pass the audio signals to and from the FXO.

Table 3: J2 Pin Descriptions

|   Pin | Name   | Function                       |
|-------|--------|--------------------------------|
|     1 | TIP    | Bidirectional Analog Signaling |
|     2 | RING   | Bidirectional Analog Signaling |

The signals on the TIP and RING pins should also have a DC current that would normally come from the PSTN.  This current will usually be in the range of 20 to 100 mA, but typically about 40 mA.  This current is necessary for the FXO to operate normally.  The FXO will not operate if the current drops below approximately 13 mA.

## 4 Connecting the Keychain Demo Board into an Existing System

The 73M1866B Keychain Demo Board is designed to be easily connected to an existing system that has access to a PCM and SPI interface.  Table 2 provides the pin and signal names.  Further detail is provided in the 73M1866B/1966B Data Sheet (FDS\_1x66B\_001). If connectivity between the Keychain Demo Board and the system is provided by 'blue-wire', we recommend that 30 AWG wire be used as a minimum and that the maximum length of these wires should not exceed 8 inches (20 cm).  It is also recommended that the ground have at least two 30 AWG wires connecting the 73M1866B Keychain Demo Board to the host board.

Once connected, the user should check for the integrity of appropriate clock and control signals. Ensure the signals have minimal over- and under-shoot on the signal transitions.  Consult the 73M1866B/1966B Data Sheet for information on the signal timing and ensure the host SPI conforms to these requirements.

In order for the 73M1866B Keychain Demo Board to operate correctly it needs to be configured by software.  Teridian provided Reference Driver Software and Linux based Command Line application can be used to configure and control the 73M1866B.  Contact Teridian Sales for more information on the available software.

## 5 Ordering Information

Table 4 lists the order numbers and packaging marks used to identify 73M1966B and 73M1866B Demo Boards.

Table 4: Order Numbers and Packaging Marks

| Part Description                                          | Order Number      | Packaging Mark     |
|-----------------------------------------------------------|-------------------|--------------------|
| 73M1966B 20-Pin TSSOP Motherboard and Standard Demo Board | 73M1966B-EVM      | 73M1916-M 73M1906B |
| 73M1966B 20-Pin TSSOP Standard Demo Board                 | 73M1966B-DB       | 73M1966B-IM        |
| 73M1866B 20-Pin TSSOP Keychain Demo Board                 | 73M1866B-Keychain |                    |

## 6 Related Documentation

The following 73M1866B documents are available from Teridian Semiconductor Corporation:

73M1866B/73M1966B Data Sheet 73M1866B/73M1966B Layout Guidelines 73M1866B/73M1966B PCM Connectivity 73M1866B/73M1966B Reference Driver User Guide 73M1x66 Worldwide Design Guide

## 7 Contact Information

For more information about Teridian Semiconductor products or to check the availability of the 73M1866B, contact us at:

6440 Oak Canyon Road Suite 100 Irvine, CA 92618-5201

Telephone: (714) 508-8800

FAX: (714) 508-8878

Email: modem.support@teridian.com

For a complete list of worldwide sales offices, go to http://www.teridian.com.

## Revision History

|   Revision | Date       | Description        |
|------------|------------|--------------------|
|        1.0 | 11/17/2008 | First publication. |