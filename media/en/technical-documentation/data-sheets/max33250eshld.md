<!-- lastmod 2022-08-02 -->
## MAX33250E Shield

## General Description

The  MAX33250E  Shield  is  a  fully  assembled  and tested  PCB  that  demonstrates  the  functionality  of  the MAX33250E,  isolated  2Tx/2Rx  RS-232  transceivers, with  a  galvanic  isolation  of  600V RMS   (60sec)  between the logic UART side and field side. The isolation barrier protects  the  logic  UART  side  from  electrical  transient strikes from the field side. It also breaks ground loops and large  differences  in  ground  potentials  between  the  two sides that can potentially corrupt the receiving and sending of data. The MAX33250E conforms to the EIA/TIA-232E standard and operates at data rates up to 1Mbps.

## Features

- Single Supply
- On-Board Isolation Power Supply
- Arduino/Mbed Shield Interface and Form Factor
- DCE/DTE Selectable DB9 Pinout

Ordering Information appears at end of data sheet.

Evaluates: MAX33250E

## Quick Start

## Required Equipment

- MAX33250E Shield
- 5V, 500mA DC power supply
- Function generator
- Digital oscilloscope with 2 input channels

## Procedure

The Shield EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Place the MAX33250E Shield on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
- 2) Make sure all jumpers are in their default positions as shown in Table 1 .
- 3) Connect T1OUT test point to R1IN test point.
- 4) Connect T2OUT test point to R2IN test point.
- 5) Disable the output of the function generator.
- 6) Set the output of the function generator to 500kHz (min = 0V, max = 5V) square wave.
- 7) Connect the positive terminal of the function generator to T1IN and T2IN test points.
- 8) Connect the negative terminal of the function generator to GNDA connector.
- 9) Connect the positive terminal of 5V supply to VCCA\_ EXT connector.
- 10) Connect the negative terminal of 5V supply to GNDA connector.
- 11)  Connect the positive terminal of channel 1 of the oscilloscope to R1OUT test point.
- 12)  Connect the negative terminal of channel 1 of the oscilloscope to GNDA connector.
- 13)  Connect the positive terminal of channel 2 of the oscilloscope to R2OUT test point.
- 14)  Connect the negative terminal of channel 2 of the oscilloscope to GNDA connector.
- 15) Enable the output of the function generator.
- 16)  Verify 500kHz 5V square waves appear on both channels of the oscilloscope.

<!-- image -->

## MAX33250E Shield

## Detailed Description of Hardware

MAX33250E Shield is fully assembled and tested circuit board for evaluating the MAX33250E 1Mbps, 600V RMS isolated  RS-232  transceivers.  The  MAX33250E  has  2 transmitters  and  2  receivers  (2Tx/2Rx).  The  isolation  is provided by Maxim's proprietary insulation material that can withstand  600V RMS for  60  seconds.  The  MAX33250E conforms  to  the  EIA/TIA-232  standard  and  operates  at data  rates  up  to  1Mbps  over  the  temperature  range  of -40°C to +85°C.

The MAX33250E Shield, with an onboard DB9 connector, enables Mbed or Arduino platforms to communicate on an RS-232 bus. DCE/DTE DB9 pinout is selectable with the SW1 switch. The MAX14850 digital isolator is used as a level translator with a 3V to 5.5V supply range.

## Table 1. Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                          |
|----------|------------------|----------------------------------------------------------------------|
| JU1      | 1-2              | Transceiver VCCAconnects to 3.3V on Arduino/Mbed connector (J3)      |
| JU1      | 1-3              | Transceiver VCCAconnects to 5V on Arduino/Mbed connector (J3)        |
| JU1      | 1-4*             | Transceiver VCCAconnects to VCCA_EXT connector                       |
| JU2      | 1-2*             | Transceiver VCCB connects to the output of the isolated power supply |
| JU2      | 2-3              | Transceiver VCCB connects to VCCB_EXT connector                      |
| JU3      | 1-2*             | Transceiver T1IN connects to the level translator                    |
| JU3      | OPEN             | Transceiver T1IN disconnects from the level translator               |
| JU4      | 1-2*             | Transceiver T2IN connects to the level translator                    |
| JU4      | OPEN             | Transceiver T2IN disconnects from the level translator               |
| JU5      | 1-2*             | Transceiver R1OUT connects to the level translator                   |
| JU5      | OPEN             | Transceiver R1OUT disconnects from the level translator              |
| JU6      | 1-2*             | Transceiver R2OUT connects to the level translator                   |
| JU6      | OPEN             | Transceiver R2OUT disconnects from the level translator              |
| JU1D0    | 1-2              | Transceiver T2IN connects to Arduino/Mbed connector's D0 signal      |
| JU1D0    | 2-3*             | Transceiver R2OUT connects to Arduino/Mbed connector's D0 signal     |
| JU1D0    | OPEN             | Arduino/Mbed connector's D0 signal is not connected                  |
| JU1D1    | 1-2*             | Transceiver T2IN connects to Arduino/Mbed connector's D1 signal      |
| JU1D1    | 2-3              | Transceiver R2OUT connects to Arduino/Mbed connector's D1 signal     |
| JU1D1    | OPEN             | Arduino/Mbed connector's D1 signal is not connected                  |
| JU1D2    | 1-2              | Transceiver T2IN connects to Arduino/Mbed connector's D2 signal      |
| JU1D2    | 2-3              | Transceiver R2OUT connects to Arduino/Mbed connector's D2 signal     |
| JU1D2    | OPEN*            | Arduino/Mbed connector's D2 signal is not connected                  |

Evaluates: MAX33250E

## Powering the Board

VCCA of MAX33250E can come from external supply or the Arduino/Mbed platform supply.  See Table 1 for jumper settings to select appropriate VCCA source.

The MAX33250E Shield has an on-board isolated power supply that generates an isolated supply for VCCB.  If the shield  board  is  connected  to  a  Arduino/Mbed  platform, input of the isolated power supply is connected to the 5V output  (pin  4  of  J3)  of  the  Arduino/Mbed  platform.  The voltage generated on the isolated output is same as the input.  See Table 1 for jumper settings to select appropriate VCCB source.

## MAX33250E Shield

Table 1. Jumper Settings (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                              |
|----------|------------------|----------------------------------------------------------------------------------------------------------|
| JU1D3    | 1-2              | Transceiver T2IN connects to Arduino/Mbed connector's D3 signal                                          |
| JU1D3    | 2-3              | Transceiver R2OUT connects to Arduino/Mbed connector's D3 signal                                         |
| JU1D3    | OPEN*            | Arduino/Mbed connector's D3 signal is not connected                                                      |
| JU1D4    | 1-2              | Transceiver T2IN connects to Arduino/Mbed connector's D4 signal                                          |
| JU1D4    | 2-3              | Transceiver R2OUT connects to Arduino/Mbed connector's D4 signal                                         |
| JU1D4    | OPEN*            | Arduino/Mbed connector's D4 signal is not connected                                                      |
| JU1D5    | 1-2              | Transceiver T2IN connects to Arduino/Mbed connector's D5 signal                                          |
| JU1D5    | 2-3              | Transceiver R2OUT connects to Arduino/Mbed connector's D5 signal                                         |
| JU1D5    | OPEN*            | Arduino/Mbed connector's D5 signal is not connected                                                      |
| JU1D6    | 1-2              | Transceiver T2IN connects to Arduino/Mbed connector's D6 signal                                          |
| JU1D6    | 2-3              | Transceiver R2OUT connects to Arduino/Mbed connector's D6 signal                                         |
| JU1D6    | OPEN*            | Arduino/Mbed connector's D6 signal is not connected                                                      |
| JU1D7    | 1-2              | Transceiver T2IN connects to Arduino/Mbed connector's D7 signal                                          |
| JU1D7    | 2-3              | Transceiver R2OUT connects to Arduino/Mbed connector's D7 signal                                         |
| JU1D7    | OPEN*            | Arduino/Mbed connector's D7 signal is not connected                                                      |
| JU1D8    | 1-2              | Transceiver T2IN connects to Arduino/Mbed connector's D8 signal                                          |
| JU1D8    | 2-3              | Transceiver R2OUT connects to Arduino/Mbed connector's D8 signal                                         |
| JU1D8    | OPEN*            | Arduino/Mbed connector's D8 signal is not connected                                                      |
| JU1D9    | 1-2              | Transceiver T2IN connects to Arduino/Mbed connector's D9 signal                                          |
| JU1D9    | 2-3              | Transceiver R2OUT connects to Arduino/Mbed connector's D9 signal                                         |
| JU1D9    | OPEN*            | Arduino/Mbed connector's D9 signal is not connected                                                      |
| JU2D0    | 1-2              | Transceiver T1IN connects to Arduino/Mbed connector's D0 signal                                          |
| JU2D0    | 2-3*             | Transceiver R1OUT connects to Arduino/Mbed connector's D0 signal                                         |
| JU2D0    | OPEN             | Arduino/Mbed connector's D0 signal is not connected                                                      |
| JU2D1    | 1-2*             | Transceiver T1IN connects to Arduino/Mbed connector's D1 signal                                          |
| JU2D1    | 2-3              | Transceiver R1OUT connects to Arduino/Mbed connector's D1 signal                                         |
| JU2D1    | OPEN             | Arduino/Mbed connector's D1 signal is not connected                                                      |
| JU2D2    | 1-2              | Transceiver T1IN connects to Arduino/Mbed connector's D2 signal                                          |
| JU2D2    | 2-3              | Transceiver R1OUT connects to Arduino/Mbed connector's D2 signal                                         |
| JU2D3    | OPEN*            | Arduino/Mbed connector's D2 signal is not connected                                                      |
| JU2D3    | 1-2              | Transceiver T1IN connects to Arduino/Mbed connector's D3 signal                                          |
| JU2D3    | 2-3              | Transceiver R1OUT connects to Arduino/Mbed connector's D3 signal                                         |
| JU2D4    | 1-2              | Transceiver T1IN connects to Arduino/Mbed connector's D4 signal                                          |
| JU2D4    | OPEN*            | Arduino/Mbed connector's D3 signal is not connected R1OUT connects to Arduino/Mbed connector's D4 signal |
|          | 2-3              | Transceiver                                                                                              |
|          | OPEN*            | Arduino/Mbed connector's D4 signal is not connected                                                      |

## MAX33250E Shield

## Table 1. Jumper Settings (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                      |
|----------|------------------|------------------------------------------------------------------|
| JU2D5    | 1-2              | Transceiver T1IN connects to Arduino/Mbed connector's D5 signal  |
| JU2D5    | 2-3              | Transceiver R1OUT connects to Arduino/Mbed connector's D5 signal |
| JU2D5    | OPEN*            | Arduino/Mbed connector's D5 signal is not connected              |
| JU2D6    | 1-2              | Transceiver T1IN connects to Arduino/Mbed connector's D6 signal  |
| JU2D6    | 2-3              | Transceiver R1OUT connects to Arduino/Mbed connector's D6 signal |
| JU2D6    | OPEN*            | Arduino/Mbed connector's D6 signal is not connected              |
| JU2D7    | 1-2              | Transceiver T1IN connects to Arduino/Mbed connector's D7 signal  |
| JU2D7    | 2-3              | Transceiver R1OUT connects to Arduino/Mbed connector's D7 signal |
| JU2D7    | OPEN*            | Arduino/Mbed connector's D7 signal is not connected              |
| JU2D8    | 1-2              | Transceiver T1IN connects to Arduino/Mbed connector's D8 signal  |
| JU2D8    | 2-3              | Transceiver R1OUT connects to Arduino/Mbed connector's D8 signal |
| JU2D8    | OPEN*            | Arduino/Mbed connector's D8 signal is not connected              |
| JU2D9    | 1-2              | Transceiver T1IN connects to Arduino/Mbed connector's D9 signal  |
| JU2D9    | 2-3              | Transceiver R1OUT connects to Arduino/Mbed connector's D9 signal |
| JU2D9    | OPEN*            | Arduino/Mbed connector's D9 signal is not connected              |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX33250ESHLD# | SHIELD |

# Denotes RoHS compliant.

Evaluates: MAX33250E

## MAX33250E Shield Bill of Materials

|   ITEM | REF_DES                                                  |   QTY | VALUE           | DESCRIPTION                                                                                                          | MFG PART #              | MANUFACTURER                 |
|--------|----------------------------------------------------------|-------|-----------------|----------------------------------------------------------------------------------------------------------------------|-------------------------|------------------------------|
|      1 | C1, C2                                                   |     2 | 10UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                     | C1608X5R1A106K          | TDK                          |
|      2 | C3-C7                                                    |     5 | 0.1UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 10V; TOL=10%; MODEL=C0603 SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R       | C0603C104K8RAC          | KEMET                        |
|      3 | C8                                                       |     1 | 0.33UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.33uF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                  | C0603C334K4RAC          | KEMET                        |
|      4 | D1, D2                                                   |     2 | MBR0520L        | DIODE, SCHOTTKY, SOD-123, PIV=20V, Vf=0.385V@If=0.5A, If(ave)=0.5A                                                   | MBR0520L                | FAIRCHILD SEMICONDUCTOR      |
|      5 | D3                                                       |     1 | 5.1V            | DIODE; ZNR; SMT (SOD-123); VZ=5.1V; IZ=0.02A                                                                         | MMSZ5231B-7-F           | DIODES INCORPORATED          |
|      6 | GNDA, GNDB                                               |     2 | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER             | 5006                    | KEYSTONE                     |
|      7 | J3, J6                                                   |     2 | SSQ-108-04-G-S  | PLATE FINISH; CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 8PINS ;                              | SSQ-108-04-G-S          | SAMTEC                       |
|      8 | J4                                                       |     1 | SSQ-106-04-G-S  | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 6PINS ;                                            | SSQ-106-04-G-S          | SAMTEC                       |
|      9 | J5                                                       |     1 | SSQ-110-04-G-S  | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 10PINS ;                                           | SSQ-110-04-G-S          | SAMTEC                       |
|     10 | JU1                                                      |     1 | PEC04SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                            | PEC04SAAN               | SULLINS ELECTRONICS CORP.    |
|     11 | JU1D0-JU1D3, JU1D6- JU1D9, JU2, JU2D0-JU2D3, JU2D6-JU2D9 |    17 | PEC03SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                            | PEC03SAAN               | SULLINS                      |
|     12 | JU3-JU6                                                  |     4 | PBC02SAAN       | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;                         | PBC02SAAN               | SULLINS ELECTRONICS CORP.    |
|     13 | P1                                                       |     1 | 182-009-213R531 | CONNECTOR; FEMALE; THROUGH HOLE; D-SUBMINIATURE CONNECTOR; RIGHT ANGLE; 9PINS                                        | 182-009-213R531         | NORCOMP                      |
|     14 | R1IN, R1OUT, R2IN, R2OUT, T1IN, T1OUT, T2IN, T2OUT       |     8 | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  | 5004                    | KEYSTONE                     |
|     15 | SW1                                                      |     1 | MFS401N-2-Z     | SWITCH; 4PDT; THROUGH HOLE; STRAIGHT; +5V TO +30V; 0.01A-0.3A; MFS SERIES; RCONTACT=0.02 OHM; RINSULATION=100MOHM    | MFS401N-2-Z             | NIDEC COPAL ELECTRONICS CORP |
|     16 | T1                                                       |     1 | TGM-050P3RL     | TRANSFORMER; SMT; 1:1:1:1; PCMCIA DC/DC CONVERTER                                                                    | TGM-050P3RL             | HALO ELECTRONICS INC         |
|     17 | U1                                                       |     1 | MAX33250E       | EVKIT PART-IC; MAX33250E; LGA12; 6X6MM; 1MMPITCH; PACKAGE OUTLINE DRAWING: 21-100222; PACKAGE CODE: L1266M+1         | MAX33250E               | MAXIM                        |
|     18 | U2                                                       |     1 | MAX14850AEE+    | IC; ISO; SIX-CHANNEL DIGITAL ISOLATOR; QSOP16                                                                        | MAX14850AEE+            | MAXIM                        |
|     19 | U3                                                       |     1 | MAX845EUA+      | IC; DRV; ISOLATED TRANSFORMER DRIVER; UMAX8                                                                          | MAX845EUA+              | MAXIM                        |
|     20 | VCCA_EXT, VCCB_EXT                                       |     2 | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; | 5005                    | KEYSTONE                     |
|     21 | PCB                                                      |     1 | PCB             | PCB:MAX33250_SHIELD_APPS_A                                                                                           | MAX33250_SHIELD_APPS_ A | MAXIM                        |
|     22 | R1, R2                                                   |     0 | DNP             | RESISTOR; 0603; OPEN; FORMFACTOR                                                                                     | N/A                     | N/A                          |
|     23 | C9, C10                                                  |     0 | DNP             | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                              | N/A                     | N/A                          |

Evaluates: MAX33250E

## MAX33250E Shield Schematic

<!-- image -->

## MAX33250E Shield PCB Layout Diagrams

MAX33250E Shield-Top Silkscreen

<!-- image -->

MAX33250E Shield-Top

<!-- image -->

MAX33250E Shield-Internal 2

<!-- image -->

MAX33250E Shield-Internal 3

<!-- image -->

## MAX33250E Shield PCB Layout Diagrams (continued)

MAX33250E Shield-Bottom

<!-- image -->

MAX33250E Shield-Bottom Silkscreen

<!-- image -->

## MAX33250E Shield

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/18            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX33250E