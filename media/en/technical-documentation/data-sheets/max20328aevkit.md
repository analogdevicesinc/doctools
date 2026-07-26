<!-- lastmod 2022-08-03 -->
## MAX20328A Evaluation Kit

## General Description

The MAX20328A evaluation kit (EV kit) is a fully assembled  and  tested  circuit  for  evaluating  the  MAX20328/ MAX20328A/MAX20328B MUX switch for USB-C audio adapter applications. The device features automatic MICGND  orientation  and  headphone  impedance  detection, Beyond-the-Rails™  signal  capability,  and  surge  protection  on  pins  attached  to  the  USB-C  connector. This  EV kit  enables  fast  and  easy  evaluation  of  the  MAX20328/ MAX20328A/MAX20328B switches in USB-C audio applications.

The EV kit is populated with MAX20328A. The MAX20328, MAX20328A, and MAX20328B are pin-to-pin and register compatible.  Users  can  install  their  own  MAX20328  for evaluation.

## Features

- Automatic MIC/GND Orientation Detection
- MIC Line Bias Check Safeguards Against Shorting MIC to GND
- 3.5mm Audio Jack for Testing with Audio Signals
- Onboard USB Receptacles for Passing and Measuring Data Signals
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Beyond-the-Rails is a trademark of Maxim Integrated Products, Inc.

Evaluates: MAX20328/

## MAX20328A/MAX20328B

## Quick Start

## Required Equipment

The  following  equipment  is  required  to  verify  the  basic functionality of this EV kit:

- 5V capable power supply
- Host device with I 2 C communication support
- DMM or continuity tester

## Optional Equipment

The following equipment can be used for more complete testing of this EV kit:

- USB Flash drive or other device with a USB-A male connector
- USB A-to-B cable
- USB C cable
- TRRS 3.5mm audio cable
- TRRS 3.5mm audio device with 3.5mm to USB-C passive adapter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify the positions of the configuration resistor pairs R1 and R2, R4 and R5, and R6 and R8.
- a) For evaluating MAX20328, R1, R4, and R6 should be installed.
- b) For evaluating MAX20328A/MAX20328B, R2, R5, and R8 should be installed.
- 2) Verify  shunts  are  installed  on  jumpers  JU1  and  on JU3 in the 1-2 position. JU3 selects the source of the VCC supply.
- 3) Connect the positive lead of a 2.7 to 5V power supply to TP12 and the negative lead to TP14, then safely turn on the supply.
- 4) Connect SCL of the I 2 C device to TP16 and SDA to TP17; or use the 40-pin connector.
- 5) Read register 0x00 using the I 2 C read address 0x2B. If the data read matches the DEVICE\_ID value of the installed device (Table 5 of the MAX20328/ MAX20328A/MAX20328B data sheet),  the  EV  kit  is configured correctly.

<!-- image -->

## MAX20328A Evaluation Kit

To  test  automatic  audio  headset  detection  and  switch configuration, use the following procedure:

- 1) After  establishing  communication  with  the  EV  kit device,  verify  that  automatic  headset  detection  is enabled. Enable it if needed.
- 2) Supply an audio signal to the 3.5mm jack J7 on the EV kit.
- 3) Insert a TRRS headset with USB-C passive adapter (this will not work for active adapters) and verify the audio signal is routed to the headset.

## Detailed Description of Hardware

The MAX20328A EV kit is a fully assembled and tested PCB  for  evaluating  the  MAX20328,  MAX20328A,  and MAX20328B USB-C audio MUX switches. Although the MAX20328, MAX20328A, and MAX20328B have slightly different  features,  the  same  hardware  can  be  used  to evaluate  both  devices.  By  installing  combinations  of 0Ω resistors,  the  signals  will  be  routed  correctly  for  the selected device.

## Table 1. Jumper Configurations

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                  |
|----------|------------------|----------------------------------------------------------------------------------------------|
| JU1      | Installed*       | Connects V CC of the device to the EV kit supply.                                            |
| JU1      | Not Installed    | V CC of the device disconnected from EV kit supply.                                          |
| JU2      | Installed        | Attaches a 3.92kΩ pullup resistor to V CC on INT of the MAX20328A/MAX20328B.                 |
| JU2      | Not Installed*   | No pullup on MAX20328A/MAX20328B INT pin.                                                    |
| JU3      | 1-2*             | Connects EV kit supply to TP12 for an external supply voltage.                               |
| JU3      | 2-3              | Connects EV kit supply to the 3.3V line of the 40-pin connector.                             |
| JU4      | Installed        | Connects a 3.92kΩ pullup resistor from SCL to the 3.3V line of the 40-pin connector.         |
| JU4      | Not Installed*   | No pullup on SCL to 3.3V line.                                                               |
| JU5      | Installed        | Connects a 3.92kΩ pullup resistor from SDAto the 3.3V line of the 40-pin connector.          |
| JU5      | Not Installed*   | No pullup on SDAto 3.3V line.                                                                |
| JU6      | 1-2*             | Ties U1 CC pin to V CC through a 10kΩ pullup resistor. Leave open or shunt 1-2 to use J3 CC. |
| JU6      | 2-3              | Ties U1 CC pin to ground. Leave open or shunt 1-2 to use J3 CC.                              |
| JU7      | Installed*       | J3 CC is connected to U1 CC and pulled to voltage selected by JU6.                           |
| JU7      | Not Installed    | U1 CC is floating or tied to voltage selected by JU6.                                        |
| JU8      | Installed*       | Connects GSNS_L (MAX20328) or GSNS (MAX20328A/MAX20328B) to AGND.                            |
| JU8      | Not Installed    | GSNS_L (MAX20328) or GSNS (MAX20328A/MAX20328B) not connected to AGND.                       |
| JU9      | Installed        | Connects GSNS_R (MAX20328) to AGND.                                                          |
| JU9      | Not Installed*   | Connects GSNS_R (MAX20328) to AGND.                                                          |

*Default position

## Hardware Connectors

The  MAX20328A  EV  kit  contains  several  USB  connectors and  a  3.5mm  audio  jack  to  conveniently  check  the functionality of different signal paths.

## USB Connectors

A USB-C female connector connects to the top- (DP\_T, DM\_T)  and  bottom-side  (DP\_B,  DM\_B)  D+/D-  data lines,  SBU  lines,  and  the  CC2  pin  to  the  MAX20328/ MAX20328A/MAX20328B as they would in a typical application.  Alternatively,  two  USB-B  female  connectors  are also available to provide these signals independently. J2 connects to DP\_B and DM\_B, and J4 connects to DP\_T and DM\_T.

Two  USB-A  female  connectors  allow  for  testing  data transfer  to  a  USB  flashdrive  or  similar  device  with  a USB-A male connector. J1 connects to the bottom side data pins and J6 connects to the top side data pins.

## 3.5mm Audio Jack

The EV kit also includes a 3.5mm jack for evaluating the audio signal routing action. The TRRS jack J7 simplifies injecting an audio signal into the EV kit. When a 3.5mm audio headset is detected on the USB-C input by means of  a  passive  adapter,  the  signal  coming  into  J7  will  be routed to the USB-C connector and the headset.

│

## Table 2. Test Point Assignments

| TEST POINT   | SIGNAL                                          |
|--------------|-------------------------------------------------|
| TP1          | MIC                                             |
| TP2          | AGND                                            |
| TP3          | LA                                              |
| TP4          | RA                                              |
| TP5          | GSNS_L (MAX20328) or GSNS (MAX20328A/MAX20328B) |
| TP6          | GSNS_R (MAX20328 only)                          |
| TP7          | TX (MAX20328A/MAX20328B only)                   |
| TP8          | V CC of U1                                      |
| TP9          | Ground                                          |
| TP10         | RX (MAX20328A/MAX20328B only)                   |

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX20328AEVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX20328/

MAX20328A/MAX20328B

| TEST POINT   | SIGNAL                                                                                                |
|--------------|-------------------------------------------------------------------------------------------------------|
| TP11         | INT (MAX20328A/MAX20328B only)                                                                        |
| TP12         | External supply connection                                                                            |
| TP13         | V CC of EV kit board                                                                                  |
| TP14         | Ground                                                                                                |
| TP15         | Ground                                                                                                |
| TP16         | SCL                                                                                                   |
| TP17         | SDA                                                                                                   |
| TP18         | CC2 pin of connector J3. Connects to CC of MAX20328/MAX20328A/MAX20328B if a shunt is present on JU7. |

│

## MAX20328A Evaluation Kit

## MAX20328A EV Kit Bill of Materials

| DESCRIPTION CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R   | CONNECTOR; FEMALE; THROUGH HOLE; USB RECEPTACLE; RIGHT ANGLE; 4PINS CONNECTOR; FEMALE; THROUGH HOLE; USB-B TYPE; SINGLE DECK;   | 690-004-221- RIGHT ANGLE; 4PINS 898-73-024-90- CONNECTOR; FEMALE; SMT; ; RIGHT ANGLE; 24PINS   | SBH11-PBPC- D20-ST-BK CONNECTOR; MALE; THROUGH HOLE; HEADER CONNECTOR; STRAIGHT; 40PINS; EDGE FOOTPRINT CONNECTOR; FEMALE; THROUGH HOLE; SJ-435107 SERIES; 3.5 MM AUDIO   | SJ-435107RS JACK; RIGHT ANGLE; 6PINS   | 68000-102HLF CONNECTOR; MALE; THROUGH HOLE; 6800 SERIES; BERGSTIK II HEADER; STRAIGHT; 2PINS   | 68001-203HLF CONNECTOR; MALE; THROUGH HOLE; BERGSTIK BREAKAWAY HEADER; STRAIGHT; 3PINS   | LX1206GW-TR DIODE; LED; STANDARD; GREEN; SMT (1206); PIV=2.2V; IF=0.02A; -40 DEGC TO +85 DEGC 0 RESISTOR; 0805; 0 OHM; 5%; JUMPER; 0.125W; THICK FILM   | RESISTOR; 0805; 1K; 1%; 100PPM; 0.125W; THICK FILM                         | RESISTOR; 0805; 3.92K OHM; 1%; 100PPM; 0.125W; THICK FILM                      | RESISTOR; 0805; 10K; 1%; 100PPM; 0.125W; THICK FILM TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; GREY; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLUE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;   | MAX20328EW EVKIT PART - IC; INFC; MUX SWITCH FOR USB TYPE-C; AUDIO ADAPTER ACCESSORIES; WLP25; PKG. CODE: W252R2+2; PKG. OUTLINE: 21-100208 PCB:MAX20328A 0 RESISTOR; 0805; 0 OHM; 5%; JUMPER; 0.125W; THICK FILM   |
|-------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VALUE AVX;SAMSUNG ELECTRO- MECHANICS 1UF                                                              | CONNECT 87520- 0010BLF                                                                                                          | 023 MILL-MAX 310001                                                                            | CORP.                                                                                                                                                                     | INC.                                   | FCI CONNECT                                                                                    | FCI CONNECT                                                                              | INC SML-                                                                                                                                                | PANASONIC; YAGEO 1K DALE;ROHM                                              | 3.92K ROHM SEMI;                                                               | 10K N/A                                                                                                                                                                  | N/A                                                                                                                 | N/A KEYSTONE N/A                                                                                                                                                                                                                       | N/A                                                                                                                 | KEYSTONE N/A                                                                                                          | N/A N/A                                                                                                                                                                      | A+ PCB                                                                                                                                                                                                              |
| MFG PART # MFG 4 0603YD105KAT2A; CL10A105KO8NNN                                                       | 87520-0010BLF FCI                                                                                                               | 690-004-221-023 EDAC                                                                           | SULLINS ELECTRONICS                                                                                                                                                       | CUI                                    |                                                                                                |                                                                                          | LUMEX OPTOCOMPONENTS YAGEO PHYCOMP                                                                                                                      | VISHAY DALE; ROHM; VISHAY SEMICONDUCTOR;YAGEO                              | VISHAY DALE; MURATA; YAGEO                                                     | 5116 KEYSTONE                                                                                                                                                            | 5118 KEYSTONE                                                                                                       | 5004 KEYSTONE 5000                                                                                                                                                                                                                     | 5117 KEYSTONE                                                                                                       | 5003 5011 KEYSTONE 5010                                                                                               | KEYSTONE                                                                                                                                                                     | MAXIM MAXIM YAGEO PHYCOMP                                                                                                                                                                                           |
| QTY                                                                                                   | 2                                                                                                                               | 2 898-73-024-90-310001                                                                         | 1 SBH11-PBPC-D20-ST-BK                                                                                                                                                    | SJ-435107RS                            | 68000-102HLF                                                                                   | 68001-203HLF                                                                             | 4 SML-LX1206GW-TR 3 RC0805JR-070RL ERJ-6ENF1001V;                                                                                                       | CRCW08051K00FK; MCR10EZHF1001;RC0805FR-071KL CRCW08053K92FK;MCR10EZHF3921; | RC0805FR-073K92L CRCW080510K0FK; MCR10EZHF1002; ERJ-6ENF1002V; RC0805FR-0710KL |                                                                                                                                                                          | 1                                                                                                                   |                                                                                                                                                                                                                                        | 1                                                                                                                   | 3                                                                                                                     | 3 1                                                                                                                                                                          | 1 MAX20328EWA+ 1 MAX20328A 0 RC0805JR-070RL 55                                                                                                                                                                      |
|                                                                                                       |                                                                                                                                 | 1                                                                                              |                                                                                                                                                                           | 1                                      | 7                                                                                              | 2                                                                                        |                                                                                                                                                         | 4                                                                          | 3 1                                                                            | 3                                                                                                                                                                        |                                                                                                                     | 4 2                                                                                                                                                                                                                                    |                                                                                                                     |                                                                                                                       |                                                                                                                                                                              |                                                                                                                                                                                                                     |
| DNI/D NP -                                                                                            | -                                                                                                                               | - -                                                                                            | -                                                                                                                                                                         | -                                      | -                                                                                              | -                                                                                        | - -                                                                                                                                                     | -                                                                          | - -                                                                            | -                                                                                                                                                                        | -                                                                                                                   | - -                                                                                                                                                                                                                                    | -                                                                                                                   | -                                                                                                                     | - -                                                                                                                                                                          | - - DNP                                                                                                                                                                                                             |
| REF_DES                                                                                               | 1 C1-C4 J1, J6                                                                                                                  | J2, J4                                                                                         | 5 J5                                                                                                                                                                      | J7                                     | JU1, JU2, JU4, JU5, JU7-JU9                                                                    | JU3, JU6                                                                                 | LED1-LED4 R2, R5, R8                                                                                                                                    | R3, R9-R11                                                                 | R7, R12, R13 R14                                                               | TP1, TP8, TP13                                                                                                                                                           | TP2                                                                                                                 | TP3, TP7, TP16, TP18 TP4, TP10                                                                                                                                                                                                         | TP5                                                                                                                 | TP6, TP11, TP17                                                                                                       | TP9, TP14, TP15 TP12                                                                                                                                                         | U1 PCB R1, R4, R6                                                                                                                                                                                                   |
| ITEM                                                                                                  | 2                                                                                                                               | 3                                                                                              | 4 J3                                                                                                                                                                      | 6                                      | 7                                                                                              | 8                                                                                        | 9 10                                                                                                                                                    | 11                                                                         | 12 13                                                                          | 14                                                                                                                                                                       | 15                                                                                                                  | 16 17                                                                                                                                                                                                                                  | 18                                                                                                                  | 19                                                                                                                    | 20 21                                                                                                                                                                        | 22 23 24 TOTAL                                                                                                                                                                                                      |

Evaluates: MAX20328/

MAX20328A/MAX20328B

│

## MAX20328A EV Kit Schematic

<!-- image -->

## MAX20328A EV Kit PCB Layout Diagrams

MAX20328A EV Kit-Top Silkscreen

<!-- image -->

MAX20328A EV Kit-Layer 2

<!-- image -->

MAX20328A EV Kit-Top

<!-- image -->

│

## MAX20328A EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20328A EV Kit-Layer 3

MAX20328A EV Kit-Bottom Silkscreen

<!-- image -->

MAX20328A EV Kit-Bottom

<!-- image -->

│

## MAX20328A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                             | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------|-----------------|
|                 0 | 5/18            | Initial release                         | -               |
|                 1 | 1/20            | Updated all pages to evaluate MAX20328B | 1-8             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX20328/

MAX20328A/MAX20328B