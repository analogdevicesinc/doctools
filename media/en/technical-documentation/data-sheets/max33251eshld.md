<!-- lastmod 2022-08-02 -->
## MAX33251E Shield

## General Description

The  MAX33251E  Shield  is  a  fully  assembled  and tested  PCB  that  demonstrates  the  functionality  of  the MAX33251E, isolated 1Tx/1Rx RS-232 transceiver, with a galvanic isolation of 600V RMS  (60s) between the logic UART side and field side. The isolation  barrier  protects the logic UART side from electrical transient strikes from the  field  side.  It  also  breaks  ground  loops  and  large differences  in  ground  potentials  between  the  two  sides that  can corrupt the receiving and sending of data. The MAX33251E conforms to the EIA/TIA-232E standard and operates at data rates up to 1Mbps.

## Features

- ●
- On-Board Isolated DC-DC Power Supply
- Arduino/Mbed Shield Interface Form Factor
- DCE/DTE Selectable DB9 Pinout

Ordering Information appears at end of data sheet.

Evaluates: MAX33251E

## Quick Start

## Required Equipment

- MAX33251E Shield
- 5V, 500mA DC power supply
- Function generator
- Digital oscilloscope

## Procedure

The Shield EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Place the MAX33251E Shield on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
- 2) Connect T1OUT test point to R1IN test point.
- 3) Disable the output of the function generator.
- 4) Set the output of the function generator to 500kHz (min = 0V, max = 5V) square wave.
- 5) Connect the positive terminal of the function generator to D2 on J6.
- 6) Connect the negative terminal of the function generator to GNDA connector.
- 7) Connect the positive terminal of 5V supply to VCCA\_EXT and VCCB\_EXT connectors.
- 8) Connect the negative terminal of 5V supply to GNDA and GNDB connectors.
- 9) Connect the positive terminal of 5V supply to pin 7 of the J3 connector (IOREF)
- 10) Connect the positive terminal of channel 1 of the oscilloscope to D3 on J6.
- 11)  Connect the negative terminal of channel 1 of the oscilloscope to GNDA connector.
- 12) Enable the output of the function generator.
- 13) Verify 500kHz 5V square waves appear on oscilloscope.

<!-- image -->

## Detailed Description of Hardware

MAX33251E  Shield  is  a  fully  assembled  and  tested circuit  board  for  evaluating  the  MAX33251E  1Mbps, 600VRMS isolated RS-232 transceivers. The MAX33251E has  a  transmitter  and  a  receiver  (1Tx/1Rx).  The  isolation  is provided by Maxim's proprietary insulation material that can withstand  600V RMS for  60  seconds.  The  MAX33251E conforms  to  the  EIA/TIA-232  standard  and  operates  at data  rates  up  to  1Mbps  over  the  temperature  range  of -40°C to +85°C.

The MAX33251E Shield with an on-board DB9 connector, enables Mbed or Arduino platform to communicate on a RS-232 bus. DCE/DTE DB9 pin out is selectable with the SW1 switch. The MAX14850 digital isolator is used as a level translator with a 3V to 5.5V supply range.

To evaluate this device without connecting to a network, a resistive load of 3KΩ to 7KΩ and a capacitive load of 150pF to 1000pF can be placed on R1 and C1, respectively.

## Table 1. Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                           |
|----------|------------------|-----------------------------------------------------------------------|
| JU1      | 1-2              | Transceiver V CCA connects to 3.3V on Arduino/mbed connector (J3)     |
| JU1      | 1-3              | Transceiver V CCA connects to 5V on Arduino/mbed connector (J3)       |
| JU1      | 1-4*             | Transceiver V CCA connects to VCCA_EXT connector                      |
| JU2      | 1-2              | Transceiver V CCB connects to the output of the isolated power supply |
| JU2      | 2-3*             | Transceiver V CCB connects to VCCB_EXT connector                      |
| JU3      | 1-2*             | Transceiver T1IN connects to the level translator                     |
| JU3      | OPEN             | Transceiver T1IN disconnects from the level translator                |
| JU4      | 1-2*             | Transceiver R1OUT connects to the level translator                    |
| JU4      | OPEN             | Transceiver R1OUT disconnects from the level translator               |
| JU5D0    | 1-2*             | Transceiver T1IN connects to Arduino/mbed connector's D0 signal       |
| JU5D0    | 2-3              | Transceiver R1OUT connects to Arduino/mbed connector's D0 signal      |
| JU5D0    | OPEN*            | Arduino/mbed connector's D0 signal is not connected                   |
| JU5D1    | 1-2              | Transceiver T1IN connects to Arduino/mbed connector's D1 signal       |
| JU5D1    | 2-3              | Transceiver R1OUT connects to Arduino/mbed connector's D1 signal      |
| JU5D1    | OPEN*            | Arduino/mbed connector's D1 signal is not connected                   |
| JU5D2    | 1-2*             | Transceiver T1IN connects to Arduino/mbed connector's D2 signal       |
| JU5D2    | 2-3              | Transceiver R1OUT connects to Arduino/mbed connector's D2 signal      |
| JU5D2    | OPEN             | Arduino/mbed connector's D2 signal is not connected                   |
| JU5D3    | 1-2              | Transceiver T1IN connects to Arduino/mbed connector's D3 signal       |
| JU5D3    | 2-3*             | Transceiver R1OUT connects to Arduino/mbed connector's D3 signal      |
| JU5D3    | OPEN             | Arduino/mbed connector's D3 signal is not connected                   |

## Evaluates: MAX33251E

## Powering the Board

VCCA of MAX33251E can come from external supply or the Arduino/mbed platform supply.  See Table 1 for jumper settings to select appropriate V CCA source.

The MAX33251E Shield has an on-board isolated power supply that generates an isolated supply for V CCB . If the shield board is connected to an Arduino/mbed platform, input of the isolated power supply is connected to the 5V output  (pin  4  of  J3)  of  the  Arduino/mbed  platform.  The voltage  generated  on  the  isolated  output  is  the  same as  the  input.  See Table  1 for  jumper  settings  to  select appropriate V CCB source.

The isolated supply generated by the transformer driver requires a 5V supply from the mbed/Arduino board. Set JU1 to 1-3 position to connect mbed/Arduino 5V supply to V CCA .

## MAX33251E Shield

## Table 1. Jumper Settings (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                      |
|----------|------------------|------------------------------------------------------------------|
| JU5D6    | 1-2              | Transceiver T1IN connects to Arduino/mbed connector's D6 signal  |
| JU5D6    | 2-3              | Transceiver R1OUT connects to Arduino/mbed connector's D6 signal |
| JU5D6    | OPEN*            | Arduino/mbed connector's D6 signal is not connected              |
| JU5D7    | 1-2              | Transceiver T1IN connects to Arduino/mbed connector's D7 signal  |
| JU5D7    | 2-3              | Transceiver R1OUT connects to Arduino/mbed connector's D7 signal |
| JU5D7    | OPEN*            | Arduino/mbed connector's D7 signal is not connected              |
| JU5D8    | 1-2              | Transceiver T1IN connects to Arduino/mbed connector's D8 signal  |
| JU5D8    | 2-3              | Transceiver R1OUT connects to Arduino/mbed connector's D8 signal |
| JU5D8    | OPEN*            | Arduino/mbed connector's D8 signal is not connected              |
| JU5D9    | 1-2              | Transceiver T1IN connects to Arduino/mbed connector's D9 signal  |
| JU5D9    | 2-3              | Transceiver R1OUT connects to Arduino/mbed connector's D9 signal |
| JU5D9    | OPEN*            | Arduino/mbed connector's D9 signal is not connected              |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX33251ESHLD# | SHIELD |

# Denotes RoHS-compliant.

Evaluates: MAX33251E

## MAX33251E Shield Bill of Materials

|   ITEM | REF_DES                       |     |   QTY | MFG PART #          | MANUFACTURER                 | VALUE           | DESCRIPTION                                                                                                                  |
|--------|-------------------------------|-----|-------|---------------------|------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------|
|      1 | C2 C1,                        |     |     2 | C1608X5R1A106K080AC | TDK                          | 10UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 10V; TOL = 10%; MODEL =; TG = -55°C TO +85°C; TC = X5R                            |
|      2 | C3-C7                         |     |     5 | C0603C104K8RAC      | KEMET                        | 0.1UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 10V; TOL = 10%; MODEL = C0603 SERIES; TG = -55°C TO +125°C; TC = X7R             |
|      3 | C8                            |     |     1 | C0603C334K4RAC      | KEMET                        | 0.33UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.33uF; 16V; TOL = 10%; MODEL=; TG = -55°C TO +125°C; TC = X7R                          |
|      4 | D2 D1,                        |     |     2 | MBR0520L            | FAIRCHILD SEMICONDUCTOR      | MBR0520L        | DIODE, SCHOTTKY, SOD-123, PIV = 20V, Vf = 0.385V@If = 0.5A, If(ave) = 0.5A                                                   |
|      5 | D3                            |     |     1 | MMSZ5231B-7-F       | DIODES INCORPORATED          | 5.1V            | DIODE; ZNR; SMT (SOD-123); VZ = 5.1V; IZ = 0.02A                                                                             |
|      6 | GNDB GNDA,                    |     |     2 | 5006                | KEYSTONE                     | N/A             | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      7 | J6 J3,                        |     |     2 | SSQ-108-04-G-S      | SAMTEC                       | SSQ-108-04-G-S  | ; 8PINS STRAIGHT; SOCKET; POST SQ .025IN HOLE; THROUGH FEMALE; CONNECTOR;                                                    |
|      8 | J4                            |     |     1 | SSQ-106-04-G-S      | SAMTEC                       | SSQ-106-04-G-S  | ; 6PINS STRAIGHT; SOCKET; POST SQ .025IN HOLE; THROUGH FEMALE; CONNECTOR;                                                    |
|      9 | J5                            |     |     1 | SSQ-110-04-G-S      | SAMTEC                       | SSQ-110-04-G-S  | ; 10PINS STRAIGHT; SOCKET; POST SQ .025IN HOLE; THROUGH FEMALE; CONNECTOR;                                                   |
|     10 | JU1                           |     |     1 | PEC04SAAN           | SULLINS ELECTRONICS CORP.    | PEC04SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                    |
|     11 | JU2, JU5D0-JU5D3, JU5D6-JU5D9 |     |     9 | PEC03SAAN           | SULLINS                      | PEC03SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                    |
|     12 | JU4 JU3,                      |     |     2 | PBC02SAAN           | SULLINS ELECTRONICS CORP.    | PBC02SAAN       | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65°C TO +125°C;                                       |
|     13 | P1                            |     |     1 | 182-009-213R531     | NORCOMP                      | 182-009-213R531 | CONNECTOR; FEMALE; THROUGH HOLE; D-SUBMINIATURE CONNECTOR; RIGHT ANGLE; 9PINS                                                |
|     14 | R1IN, R1OUT, T1IN, T1OUT      |     |     4 | 5004                | KEYSTONE                     | N/A             | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;    |
|     15 | SW1                           |     |     1 | MFS401N-2-Z         | NIDEC COPAL ELECTRONICS CORP | MFS401N-2-Z     | SWITCH; 4PDT; THROUGH HOLE; STRAIGHT; +5V TO +30V; 0.01A-0.3A; MFS SERIES; RCONTACT = 0.02 Ω ; RINSULATION = 100M Ω          |
|     16 | T1                            |     |     1 | TGM-050P3RL         | INC ELECTRONICS HALO         | TGM-050P3RL     | CONVERTER DC/DC PCMCIA 1:1:1:1; SMT; TRANSFORMER;                                                                            |
|     17 | U1                            |     |     1 | MAX33251EELC+       | MAXIM                        | MAX33251EELC+   | EVKIT PART-IC; MAX33251E; LGA12; 6X6MM; 1MM PITCH; PACKAGE OUTLINE DRAWING: 21-100222; PACKAGE CODE: L1266M+1                |
|     18 | U2                            |     |     1 | MAX14850AEE+        | MAXIM                        | MAX14850AEE+    | QSOP16 ISOLATOR; DIGITAL SIX-CHANNEL ISO; IC;                                                                                |
|     19 | U3                            |     |     1 | MAX845EUA+          | MAXIM                        | MAX845EUA+      | UMAX8 DRIVER; TRANSFORMER ISOLATED DRV; IC;                                                                                  |
|     20 | VCCA_EXT, VCCB_EXT            |     |     2 | 5005                | KEYSTONE                     | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;     |
|     21 | PCB                           |     |     1 | PCB MAX33251E       | MAXIM                        | PCB             | PCB:MAX33251ESHIELD                                                                                                          |
|     22 | R1                            | DNP |     0 | N/A                 | N/A                          | OPEN            | FORMFACTOR OPEN; 0603; RESISTOR;                                                                                             |
|     23 | C9                            | DNP |     0 | N/A                 | N/A                          | OPEN            | FORMFACTOR OPEN; (0603); SMT CAPACITOR;                                                                                      |

42

## MAX33251E Shield Schematics

<!-- image -->

Evaluates: MAX33251E

## MAX33251E Shield Layout Diagrams

MAX33251E Shield-Top Silkscreen

<!-- image -->

MAX33251E Shield-Top View

<!-- image -->

## MAX33251E Shield Layout Diagrams (continued)

MAX33251E Shield-Internal Layer 2

<!-- image -->

MAX33251E Shield-Internal Layer 3

<!-- image -->

## MAX33251E Shield Layout Diagrams (continued)

MAX33251E Shield-Bottom View

<!-- image -->

MAX33251E Shield-Silkscreen Bottom

<!-- image -->

## MAX33251E Shield

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX33251E