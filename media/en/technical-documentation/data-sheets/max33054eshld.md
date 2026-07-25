<!-- lastmod 2022-08-02 -->
## MAX33054E Shield

## General Description

The MAX33054E Shield is a fully assembled and tested PCB that demonstrates the functionality of the MAX33054E fault-protected with extended common mode input range and  ±25kV  ESD  Human  Body  Model  (HBM)  controller area  network  (CAN)  transceiver.  The  shield  features  a digital  isolator,  used  as  a  level  translator  (between  the controller  and  transceiver)  and  operates  from  1.71V  to 5.5V supply.

## Features

- Integrated Protection Increases Robustness
- ±65V Fault Tolerant CANH and CANL
-  ±25kV ESD HBM (Human Body Model)
-  ±25V Extended Common Mode Input Range (CMR)
- Transmitter Dominant Timeout Prevents CAN Bus Lockup
- Short-Circuit Protection
-  Thermal Shutdown
- MAX33054E Provides Flexible Design Options
- STBY Input for Low-Current Mode, Slow Slew Rate, Normal Operating Mode
- 1.62V to 3.6V Logic-Supply (V L ) Range
- High-Speed Operation of Up to 2Mbps
- Operating Temperature Range of -40ºC to +125ºC in 8-pin SOIC Package

Ordering Information appears at end of data sheet.

Evaluates: MAX33054E

## Quick Start

## Required Equipment

- MAX33054E Shield
- 3.3V, 500mA DC power supply
- Signal/function generator
- Oscilloscope

## Procedure

- 1) Place the MAX33054E Shield on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
- 2) Set the jumpers of JU1 , JU2 , JU\_CANH , and JU\_ CANL to 2-3 position.
- 3) Place two shunts on JU8 a.  Shunt pins 4-5 to connect TXD signal to D0 of J6 . b.  Shunt pins 2-3 to connect RXD signal to D1 of J6 .
- 4) Shunt STBY\_U1 and GND on JU12 , 1-2 position.
- 5) Place shunts on JU3 , JU10 , JU15 , and JU20 , 1-2 position.
- 6) Verify that all jumpers are in their default position as shown in Table 1.
- 7) With +3.3V power supply disabled, connect the positive terminal to VCC\_EXT, VL\_EXT, and IOREF test points. Connect the negative terminal to the GND test point.
- 8) Connect the positive terminal of the function generator to D1 of J6 and negative terminal to any GND test points on the shield.
- 9) Turn on the +3.3V DC Power Supply.
- 10)  Set Function generator to output a 250kHz square wave between 0V and 3.3V, and then enable function generator output.
- 11)  Connect oscilloscope probes on CANH and CANL to GND test points of the Shield. Verify the difference voltage between CANH and CANL matches TXD input signal. The difference voltage should be be -tween 1.5V-3V in dominant mode and -120mV to +12mV in recessive mode.
- 12)  Connect an oscilloscope probe on D0 of J6 and verify the RXD output signal matches the TXD input signal.

<!-- image -->

## MAX33054E Shield

## Detailed Description of Hardware

The  MAX33054E  Shield  is  a  fully  assembled  and  tested circuit board for evaluating the MAX33054E  faultprotected,  high-speed  CAN  transceiver  (U1)  with  ±65V of  fault  protection.  The  Shield  is  designed  to  evaluate MAX33054E alone or in a CAN system. The MAX33054E Shield enables Mbed or Arduino platform to communicate on a CAN bus. The MAX14932 digital isolator is used as a level translator with a 1.71V to 5.5V supply range.

## Powering the Board

The  MAX33054E  Shield  requires  one  power  supply  for 3.3V  operation.  The  power  supply  can  come  from  an external  supply  or  the  Arduino/Mbed  microcontroller's 3.3V supply. To select the external supply, shunt the JU1 VDD pin to VDD\_EXT pin option, 2-3 (default position). To connect  the  Arduino/Mbed  3.3V  supply  to  VDD,  shunt JU1  VDD  pin  to  3.3V,  1-2  position.  Similarly,  the  VL supply is selected using JU2. Shunt JU2 to 2-3 position to select the external supply. Shunt JU2 to 1-2 position to select the Arduino/Mbed 3.3V supply. Refer to Table 1 for jumper settings.

## On-Board Termination

A  properly  terminated  CAN  bus  is  terminated  at  each end  with  the  characteristic  impedance  of  the  cable. The  MAX33054E  Shield  features  a  selectable  60Ω load  and  a  60Ω-60Ω  split  termination  circuit  between the  CANH  and  CANL  driver  outputs.  The  60Ω-60Ω  split

Table 1. Table Jumper Settings

| JUMPER              | SHUNT POSITION   | DESCRIPTION                                    |
|---------------------|------------------|------------------------------------------------|
| JU_CANH and JU_CANL | 1-2              | Connects 120.8Ω between CANH and CANL          |
| JU_CANH and JU_CANL | 2-3*             | Connects 60.4Ω between CANH and CANL           |
| JU_CANH and JU_CANL | Open             | No load is connected between CANH and CANL     |
| JU1                 | 1-2              | VDD is shorted to 3.3V supply                  |
| JU1                 | 2-3*             | VDD is shorted to VDD_EXT supply               |
| JU1                 | Open             | VDD is open                                    |
| JU2                 | 1-2              | VL is shorted to 3.3V supply                   |
| JU2                 | 2-3*             | VL is shorted to VL_EXT supply                 |
| JU2                 | Open             | VL is open                                     |
| JU3                 | 1-2*             | Connects VL to U1 Pin 5                        |
| JU8                 | -                | Refer to TXD and RXD Configuration in Table 2. |
| JU9                 | 1-2              | Connects STBY to D7                            |
| JU9                 | Open*            | Disconnects STBY from D7                       |

│

Evaluates: MAX33054E

termination has a footprint for a capacitor to reduce highfrequency  noise  and  common  mode  drift.  If  the  board  is evaluated  in  a  system  and  is  connected  at  the  end  of the  cable,  then  select  the  120Ω  (60Ω-60Ω)  termination. The  termination  resistors  on  the  MAX33054E  Shield should  be  changed  to  a  60Ω  with  optional  footprint for  a  100pF  load,  to  simulate  a  complete  system  load during  evaluation.  CANH  and  CANL  can  also  be  left unloaded with JU2 open.

## TXD and RXD Configuration

Digital channel assignments for TXD and RXD are selected via  JU8.  It  consists  of  three  columns,  and  16  rows.  The columns labeled TXD and RXD are connected to INA1 and OUTA1  pins  on  the  MAX14932FASE  (U2),  respectively. The middle column is the digital I/O pins, D0 to D15. This provides flexibility for the user to select different resources on the microcontroller for transmitting and receiving signals to and from the CAN transceiver. Table 2 shows the list of JU8 jumper options.

## DB9 Connector

The MAX33054E Shield has a DB9 connector to CANH and CANL (pins 7 and 2, respectively).

## SD Card

The MAX33054E Shield has a SD Card socket. The microSD card is connected to D10-D13 to interface with Arduino/ Mbed board through SPI. Users can store CAN messages.

## Table 1. Table Jumper Settings (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                          |
|----------|------------------|----------------------------------------------------------------------|
| JU10     | 1-2*             | Connects TVS diode to CANL                                           |
| JU10     | Open             | Disconnects TVS diode to CANL                                        |
| JU12     | 1-2*             | Connects STBY to ground                                              |
| JU12     | 1-3              | Connects STBY to a 26.1KΩ resistor to ground.                        |
| JU12     | 1-4              | Connects STBY to the U2's OUTB2 pin used for Arduino/mbed interface. |
| JU12     | Open             | Internal pull up for standby mode.                                   |
| JU15     | 1-2*             | Connects 15pF to receiver output to ground.                          |
| JU15     | Open             | Disconnects 15pF on receiver output.                                 |
| JU20     | 1-2*             | Connects TVS diode to CANH                                           |
| JU20     | Open             | Disconnects TVS diode to CANH                                        |

Note:

'*' indicates default jumper state.

## Table 2. Table TXD and RXD Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION         |
|----------|------------------|---------------------|
| JU8      | 1-2              | Connects TXD to D0  |
| JU8      | 4-5*             | Connects TXD to D1  |
| JU8      | 7-8              | Connects TXD to D2  |
| JU8      | 10-11            | Connects TXD to D3  |
| JU8      | 13-14            | Connects TXD to D4  |
| JU8      | 16-17            | Connects TXD to D5  |
| JU8      | 19-20            | Connects TXD to D6  |
| JU8      | 22-23            | Connects TXD to D7  |
| JU8      | 25-26            | Connects TXD to D8  |
| JU8      | 28-29            | Connects TXD to D9  |
| JU8      | 31-32            | Connects TXD to D10 |
| JU8      | 34-35            | Connects TXD to D11 |
| JU8      | 37-38            | Connects TXD to D12 |
| JU8      | 40-41            | Connects TXD to D13 |
| JU8      | 43-44            | Connects TXD to D14 |
| JU8      | 46-47            | Connects TXD to D15 |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX33054ESHLD# | Shield |

Evaluates: MAX33054E

| JUMPER   | SHUNT POSITION   | DESCRIPTION         |
|----------|------------------|---------------------|
| JU8      | 2-3*             | Connects RXD to D0  |
| JU8      | 5-6              | Connects RXD to D1  |
| JU8      | 8-9              | Connects RXD to D2  |
| JU8      | 11-12            | Connects RXD to D3  |
| JU8      | 14-15            | Connects RXD to D4  |
| JU8      | 17-18            | Connects RXD to D5  |
| JU8      | 20-21            | Connects RXD to D6  |
| JU8      | 23-24            | Connects RXD to D7  |
| JU8      | 26-27            | Connects RXD to D8  |
| JU8      | 29-30            | Connects RXD to D9  |
| JU8      | 32-33            | Connects RXD to D10 |
| JU8      | 35-36            | Connects RXD to D11 |
| JU8      | 38-39            | Connects RXD to D12 |
| JU8      | 41-42            | Connects RXD to D13 |
| JU8      | 44-45            | Connects RXD to D14 |
| JU8      | 47-48            | Connects RXD to D15 |

Note: '*' indicates default jumper state.

│

## MAX33054E Shield Bill of Materials

|   ITEM | REF_DES                    | DNI/DNP   |   QTY | MFG PART #                            | MANUFACTURER        | VALUE           | DESCRIPTION                                                                                                      | COMMENTS   |
|--------|----------------------------|-----------|-------|---------------------------------------|---------------------|-----------------|------------------------------------------------------------------------------------------------------------------|------------|
|      1 | C1, C2                     | -         |     2 | GRM21BR71A106KE51                     | MURATA              | 10UF            | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R      |            |
|      2 | C3-C6                      | -         |     4 | C0402C104J4RAC                        | KEMET               | 0.1UF           | CAPACITOR; SMT; 0402; CERAMIC; 0.1uF; 16V; 5%; X7R; -55degC to + 125degC; 0 +/-15% degC MAX.                     |            |
|      3 | C7                         | -         |     1 | C1005X7R1E473K; GRM155R71E473K        | TDK;MURATA          | 0.047UF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.047UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC                             |            |
|      4 | C10                        | -         |     1 | C0402C0G500-150JNP; GRM1555C1H150JA01 | VENKEL LTD.; MURATA | 15PF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 15PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                         |            |
|      5 | CANH, CANL, RXD_U1, TXD_U1 | -         |     4 | 5002                                  | KEYSTONE            | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;            |            |
|      6 | D1, D2                     | -         |     2 | SM15T30CA                             | ST MICROELECTRONICS | 25.6V           | DIODE; TVS; SMC (DO-214AB); VRM=25.6V; IPP=36A                                                                   |            |
|      7 | IOREF                      | -         |     1 | 5000                                  | KEYSTONE            | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|      8 | J3, J6                     | -         |     2 | SSQ-108-24-G-S                        | SAMTEC              | SSQ-108-24-G-S  | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 8PINS ;                                      |            |
|      9 | J4                         | -         |     1 | SSQ-106-24-G-S                        | SAMTEC              | SSQ-106-24-G-S  | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 6PINS ;                                      |            |
|     10 | J5                         | -         |     1 | SSQ-110-24-G-S                        | SAMTEC              | SSQ-110-24-G-S  | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 10PINS ;                                     |            |
|     11 | J7                         | -         |     1 | 182-009-113R531                       | NORCOMP             | 182-009-113R531 | CONNECTOR; MALE; THROUGH HOLE; D- SUBMINIATURE CONNECTOR; RIGHT ANGLE; 9PINS                                     |            |
|     12 | J14                        | -         |     1 | 502570-0893                           | MOLEX               | 502570-0893     | CONNECTOR; FEMALE; SMT; MICROSD CARD CONNECTOR; RIGHT ANGLE; 10PINS                                              |            |
|     13 | JU1, JU2                   | -         |     2 | PCC03SAAN                             | SULLINS             | PCC03SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; - 65 DEGC TO +125 DEGC                        |            |
|     14 | JU3, JU9, JU10, JU15, JU20 | -         |     5 | PCC02SAAN                             | SULLINS             | PCC02SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; - 65 DEGC TO +125 DEGC                        |            |
|     15 | JU8                        | -         |     1 | TSW-116-07-T-T                        | SAMTEC              | TSW-116-07-T-T  | CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; STRAIGHT; 48PINS                                          |            |

Evaluates: MAX33054E

## MAX33054E Shield Bill of Materials (continued)

| ITEM     | REF_DES           | DNI/DNP   | QTY      | MFG PART #                                                                              | MANUFACTURER                                        | VALUE          | DESCRIPTION                                                                                                                                                                           | COMMENTS   |
|----------|-------------------|-----------|----------|-----------------------------------------------------------------------------------------|-----------------------------------------------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 16       | JU12              | -         | 1        | TSW-104-07-L-S                                                                          | SAMTEC                                              | TSW-104-07-L-S | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                                                                                                     |            |
| 17       | JU13              | -         | 1        | OSTTA024163                                                                             | ON-SHORE TECHNOLOGY                                 | INOSTTA024163  | CONNECTOR; FEMALE; THROUGH HOLE; 5.08MM TERM BLOCK CONNECTOR; STRAIGHT; 2PINS; -30 DEGC TO +105 DEGC                                                                                  |            |
| 18       | JU_CANH, JU_CANL  | -         | 2        | PBC03SAAN                                                                               | SULLINS                                             | PBC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                                                                      |            |
| 19       | R1, R3            | -         | 2        | ERJ-2GE0R00X                                                                            | PANASONIC                                           |                | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                |            |
| 20       | R2, R8, R10, R12  | -         | 4        | CRCW04021K80FK; RC0402FR-071K8L                                                         | VISHAY DALE; YAGEO PHICOMP                          | 1.8K           | RESISTOR, 0402, 1.8K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                             |            |
| 21       | R4                | -         | 1        | CRCW040226K1FK                                                                          | VISHAY DALE                                         | 26.1K          | RESISTOR; 0402; 26.1K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                             |            |
| 22       | R5, R6            | -         | 2        | CRCW060360R4FK                                                                          | VISHAY DALE                                         |                | 60.4 RESISTOR; 0603; 60.4 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                          |            |
| 23       | R7                | -         | 1        | CRCW121060R4FKEAHP                                                                      | VISHAY DRALORIC                                     |                | 60.4 RES; SMT (1210); 60.4R; 1%; +/-100PPM/DEGK; 0.75W                                                                                                                                |            |
| 24       | R9, R11, R13, R14 | -         | 4        | CRCW04023K30FK                                                                          | VISHAY DALE                                         | 3.3K           | RESISTOR, 0402, 3.3K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                             |            |
| 25       | TP17, TP19        | -         | 2        | 5011                                                                                    | KEYSTONE                                            | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                               |            |
| 26       | TP18              | -         | 1        | 5001                                                                                    | KEYSTONE                                            | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                    |            |
| 27       | U1                | -         | 1        | MAX33054EASA+                                                                           | MAXIM                                               | MAX33054EASA+  | EVKIT PART - IC; TXRX; +3.3V CAN TRANSCEIVER WITH +/- 65V FP; +/-25V CMR AND +/- 25KV ESD; PACKAGE OUTLINE DRAWING: 21-0041; LAND PATTERN NUMBER: 90-0096; PACKAGE CODE: S8+4; NSOIC8 |            |
| 28       | U2                | -         | 1        | MAX14932FASE+                                                                           | MAXIM                                               | MAX14932FASE+  | IC; DISO; 2/2 CHANNEL; 150MBPS; DEFAULT LOW; 2.75KVRMS DIGITAL ISOLATOR; NSOIC16 150MIL                                                                                               |            |
| 29       | VDD_EXT, VL_EXT   | -         | 2        | 5010                                                                                    | KEYSTONE                                            | N/A            | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                                                                                    |            |
| 30       | PCB               | -         | 1        | -                                                                                       | MAXIM                                               | PCB            | PCB:MAX33054ESHLD                                                                                                                                                                     | -          |
| 31       | C8                | DNP       | 0        | C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050 | KEMET;NIC COMPONENTS CORP.;YAGEO PHICOMP;MURATA;TDK | 100PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                             |            |
| 32       | R15               | DNP       | 0        | N/A                                                                                     | N/A                                                 | OPEN           | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                                                      |            |
| TOTAL 55 | TOTAL 55          | TOTAL 55  | TOTAL 55 | TOTAL 55                                                                                | TOTAL 55                                            | TOTAL 55       | TOTAL 55                                                                                                                                                                              | TOTAL 55   |

## MAX33054E Shield Schematic

<!-- image -->

│

Evaluates: MAX33054E

## MAX33054E Shield PCB Layout Diagrams

MAX33054E Shield-Top Silkscreen

<!-- image -->

MAX33054E Shield-Top

<!-- image -->

MAX33054E Shield-Internal 2

<!-- image -->

MAX33054E Shield-Internal 3

<!-- image -->

│

## MAX33054E Shield PCB Layout Diagrams (continued)

MAX33054E Shield-Bottom

<!-- image -->

MAX33054E Shield-Bottom Silkscreen

<!-- image -->

│

## MAX33054E Shield

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/18            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX33054E