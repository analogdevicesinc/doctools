<!-- lastmod 2023-01-11 -->
## Evaluates: MAX33045E/MAX33046E

## General Description

The MAX33046E Shield is a fully assembled and tested printed circuit board (PCB) that demonstrates the functionality of the MAX33046E  half-duplex RS-485 transceiver  with  ±25V  fault  protection,  extended  -7V  to +12V common-mode range, and ±40kV ESD Human Body Model  (HBM)  for  A/B  data  lines.  The  shield  features  a digital isolator which is used as a level translator between the RS-485 transceiver and the controller interface.

## Features

- Easy Evaluation of the MAX33046E/MAX33045E
- I/O Interface Compatibility from 1.71V to 5.5V
- Proven PCB Layout
- Arduino ® /Arm ®  Mbed ™ Platform Compatible
- Fully Assembled and Tested

## EV Kit Photo with Jumpers and Test Point Positions

<!-- image -->

## MAX33046E Evaluation Kit

## Quick Start

## Required Equipment

- MAX33046E Shield
- 3.3V (or 5V), 500mA DC power supply
- Signal/function generator that can generate a 10MHz square wave signal
- Oscilloscope

Ordering Information appears at end of data sheet.

## MAX33046E Evaluation Kit

## Procedure

1.  Place the MAX33046E Shield on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
2.  Set all jumpers to their default position as shown in Table 1 .
3.  With the 3.3V (or 5V) power supply disabled, connect the positive terminal to VCC\_EXT and IOREF test  points. Connect the negative terminal to a GND test point.
4.  Connect the positive terminal of the function generator to DI and the negative terminal to any GND test point on the shield.
5.  Set  the  function  generator  to  output  a  10MHz  square  wave  between  0V  and  3.3V  (or  5V),  then  enable  function generator output.
6.  Turn on the 3.3V (or 5V) DC power supply.
7.  Connect an oscilloscope probe to DI and verify that the output signal at RO matches the DI input signal (DI).

## Detailed Description of Hardware

The MAX33046E Shield is a fully assembled and tested circuit board for evaluating the MAX33046E fault-protected halfduplex RS-485 transceiver (U1) with ±25V of fault protection. The Shield is designed to evaluate MAX33046E alone or in a RS-485 system. The MAX33046E Shield can also enable the Arduino or Mbed platform to communicate on a RS-485 bus. The MAX14931 digital isolator is used as a level translator with a 1.71V to 5.5V supply range. Remove the 0 Ω resistor R6 to apply the transmitter input signal directly on the DI test point. Likewise, remove the 0 Ω resistor R3 to measure the receiver output signal directly on the RO test point.

The shield also features an option for TVS diodes (D1 and D2) that can be connected to the A and B lines using JU7 and JU9 respectively if external protection is desired beyond the device's built -in protection.

## Powering the Board

The MAX33046E Shield requires two power supplies -one 3V to 5.5V supply for the MAX33046E (U1) transceiver applied at the VCC\_EXT test point and one 1.71V to 5.5V supply for the microcontroller domain applied at the IOREF test point. When  the  shield  board  is  used  with  an  Arduino/Mbed  board,  the  power  supply  for  U1  can  also  come  from  the Arduino/Mbed board's 3.3V or 5V rail. Place the shunt on 1 -3 position of J5 to connect V CC  to VCC\_EXT pin. Place the shunt of J5 on the 1-2 position or the 1-4 position to connect the V CC of U1 to the Arduino/Mbed board's 3.3V or 5V supply rail. In this scenario, IOREF is directly taken from the Arduino/Mbed header.

## On-Board Termination

A properly terminated RS-485 bus is terminated at each end with the characteristic impedance of the cable. For CAT5 or CAT6 cables, this is typically 120Ω on each end for a 54Ω load on the RS -485 driver. The MAX33046E Shield features a sel ectable  54Ω or 120Ω load circuit between the  A and B driver outputs. If the  board is evaluated in a system and connected at the end of the cable, select 120 Ω termination. The termination resistors on the MAX33046E Shield should be changed to 54Ω with a 100 pF load to simulate a complete system load during evaluation.

## DI and RO Configuration

Digital channels for DI and RO are selected through JU8, which consists of three columns and 16 rows. The columns labeled DI and RO are connected to MAX33046E through the digital isolator (MAX14931FASE+ (U2)). The middle column contains the digital I/O pins D0 to D15 from the Arduino/Mbed header. This provides flexibility for the user to select different resources on the microcontroller to transmit and receive signals to and from the RS-485 transceiver. Table 2 shows the list of JU8 jumper options. For single-channel performance verification, driver input can connect to test point DI and probe to test point RO directly.

## Flexible Interface Options

The MAX33046E Shield allows multiple points of connection to the MAX33046E transceiver. The shield board can be placed on an Arduino/Mbed compatible board to connect all the digital pins (DI, DE, RO, POL) through the J3 and J4 headers. These signals can also be connected directly at their respective test points on the board, bypassing the digital isolator (U2). The A/B signals are connected to a terminal block (JU4) to easily connect to a twisted pair cable. Alternately, the A/B test points may be used.

## Evaluates: MAX33045E/MAX33046E

## MAX33046E Evaluation Kit

## PCB Layout for Thermal Dissipation

PCB layout can affect the performance of the transceiver in conditions with a high common-mode voltage at high ambient temperatures. The layout of the MAX33046E Shield is designed to maximize thermal performance in such cases. The GND pad is connected to a large copper plane on the top layer, with vias throughout the plane connecting to the GND plane on the bottom layer. A thick trace from the V CC  pad to JU10 allows for greater heat dissipation at the V CC  pin.

## Table 1. Jumper Settings

| JUMPER      | SHUNT POSITION   | DESCRIPTION                                 |
|-------------|------------------|---------------------------------------------|
| JU1         | 1-2              | DE is connected to level shifter output     |
| JU1         | 1-3*             | DE is shorted to V CC                       |
| JU1         | 1-4              | DE is shorted to GND                        |
| JU1         | Open             | DE is open                                  |
| JU2         | 1-2              | RE is connected to level shifter output     |
| JU2         | 1-3              | RE is shorted to V CC                       |
| JU2         | 1-4*             | RE is shorted to GND                        |
| JU2         | Open             | RE is open                                  |
| JU3         | 1                | RE input when JU2 is open                   |
| JU3         | 2                | DE input when JU2 is open                   |
| JU4         | 1                | Driver output A                             |
| JU4         | 2                | Driver output B                             |
| JU5         | 1-2*             | Connects RE to D6 of J4                     |
| JU5         | Open             | Disconnects RE from D6 of J4                |
| JU6         | 1-2*             | Connects DE to D7 of J4                     |
| JU6         | Open             | Disconnects DE from D7 of J4                |
| JU7         | 1-2              | TVS Diode connected to A                    |
| JU7         | Open*            | TVS Diode disconnected from A               |
| JU9         | 1-2              | TVS Diode connected to B                    |
| JU9         | Open*            | TVS Diode disconnected from B               |
| JU10        | 1-2*             | Connects V CC pin of U1 to supply rail      |
| JU10        | Open             | Disconnects V CC pin of U1 from supply rail |
| JU11 & JU12 | 1-2              | Connects 120Ω between A and B               |
| JU11 & JU12 | 2-3*             | Connects 54Ω between A and B                |
| J5          | Open             | No load is connected between A and B        |
| J5          | 1-2              | V CC connects to onboard 3.3V               |
|             | 1-3*             | V CC connects to VCC_EXT                    |
|             | 1-4              | V CC connects to on-board 5.0V              |
|             | Open             | RE is open                                  |

## Evaluates:

## MAX33045E/MAX33046E

## MAX33046E Evaluation Kit

## Table 2. DI and RO Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION        |
|----------|------------------|--------------------|
| JU8      | 1-2*             | Connects DI to D0  |
|          | 4-5              | Connects DI to D1  |
|          | 7-8              | Connects DI to D2  |
|          | 10-11            | Connects DI to D3  |
|          | 13-14            | Connects DI to D4  |
|          | 16-17            | Connects DI to D5  |
|          | 19-20            | Connects DI to D6  |
|          | 22-23            | Connects DI to D7  |
|          | 25-26            | Connects DI to D8  |
|          | 28-29            | Connects DI to D9  |
|          | 31-32            | Connects DI to D10 |
|          | 34-35            | Connects DI to D11 |
|          | 37-38            | Connects DI to D12 |
|          | 40-41            | Connects DI to D13 |
|          | 43-44            | Connects DI to D14 |
|          | 46-47            | Connects DI to D15 |
|          | 2-3              | Connects RO to D0  |
|          | 5-6*             | Connects RO to D1  |
|          | 8-9              | Connects RO to D2  |
|          | 11-12            | Connects RO to D3  |
|          | 14-15            | Connects RO to D4  |
|          | 17-18            | Connects RO to D5  |
|          | 20-21            | Connects RO to D6  |
|          | 23-24            | Connects RO to D7  |
|          | 26-27            | Connects RO to D8  |
|          | 29-30            | Connects RO to D9  |
|          | 32-33            | Connects RO to D10 |
|          | 35-36            | Connects RO to D11 |
|          | 38-39            | Connects RO to D12 |
|          | 41-42            | Connects RO to D13 |
|          | 44-45            | Connects RO to D14 |
|          | 47-48            | Connects RO to D15 |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX33046ESHLD# | EV Kit |

#Denotes RoHS-compliant.

## Evaluates: MAX33045E/MAX33046E

## MAX33046E Evaluation Kit

## MAX33046E EV Kit Bill of Materials

|   ITEM |   QTY | REF DES   | MFG PART #                                                   | MANUFACTURER                                  | VALUE           | DESCRIPTION                                                                                                            |
|--------|-------|-----------|--------------------------------------------------------------|-----------------------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------------|
|      1 |     2 | A, B      | 5127                                                         | KEYSTONE                                      | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLUE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH  |
|      2 |     1 | C1        | GRM155R60J106 ME44; GRM155R60J106 ME47; C1005X5R0J106M 050BC | MURATA;MURATA;T DK;SAMSUNG ELECTRONICS;KEM ET | 10UF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                              |
|      3 |     3 | C2- C4    | C0402C104J4RAC ;GCM155R71C104 JA55                           | KEMET;MURATA                                  | 0.1UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                      |
|      4 |     1 | C6        | 08051A500FAT2A                                               | AVX                                           | 50PF            | CAP; SMT (0805); 50PF; 1%; 100V; C0G; CERAMIC CHIP                                                                     |
|      5 |     2 | D1, D2    | SM15T30CA                                                    | ST MICROELECTRONIC S                          | 25.6V           | DIODE; TVS; SMC (DO-214AB); VRM=25.6V; IPP=36A                                                                         |
|      6 |     2 | DE, RE    | 5002                                                         | KEYSTONE                                      | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER                   |
|      7 |     2 | DI, RO    | 5012                                                         | KEYSTONE                                      | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH |
|      8 |     1 | IOR EF    | 5125                                                         | KEYSTONE                                      | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BROWN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH |
|      9 |     2 | J1, J4    | SSQ-108-24-G-S                                               | SAMTEC                                        | SSQ-108- 24-G-S | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 8PINS ;NOTE:PURCHASE DIRECT FROM THE MANUFACTURER  |

## Evaluates:

## MAX33045E/MAX33046E

## MAX33046E Evaluation Kit

## Evaluates:

## MAX33045E/MAX33046E

|   ITEM |   QTY | REF DES                  | MFG PART #      | MANUFACTURER              | VALUE           | DESCRIPTION                                                                                                            |
|--------|-------|--------------------------|-----------------|---------------------------|-----------------|------------------------------------------------------------------------------------------------------------------------|
|     10 |     1 | J2                       | SSQ-106-24-G-S  | SAMTEC                    | SSQ-106- 24-G-S | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 6PINS ;NOTE:PURCHASE DIRECT FROM THE MANUFACTURER  |
|     11 |     1 | J3                       | SSQ-110-24-G-S  | SAMTEC                    | SSQ-110- 24-G-S | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 10PINS ;NOTE:PURCHASE DIRECT FROM THE MANUFACTURER |
|     12 |     3 | J5, JU1, JU2             | PEC04SAAN       | SULLINS ELECTRONICS CORP. | PEC04SAA N      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                              |
|     13 |     6 | JU3, JU5- JU7, JU9, JU10 | PCC02SAAN       | SULLINS                   | PCC02SAA N      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                               |
|     14 |     1 | JU4                      | OSTTA024163     | ON-SHORE TECHNOLOGY INC.  | OSTTA024 163    | CONNECTOR; FEMALE; THROUGH HOLE; 5.08MM TERM BLOCK CONNECTOR; STRAIGHT; 2PINS; -30 DEGC TO +105 DEGC                   |
|     15 |     1 | JU8                      | TSW-116-07-T-T  | SAMTEC                    | TSW-116- 07-T-T | CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; STRAIGHT; 48PINS                                                |
|     16 |     2 | JU11 , JU12              | PEC03SAAN       | SULLINS                   | PEC03SAA N      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                              |
|     17 |     2 | R3, R6                   | ERJ-2GE0R00     | PANASONIC                 | 0               | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                   |
|     18 |     1 | R7                       | CRCW0805120RF K | VISHAY DALE               | 120             | RESISTOR; 0805; 120 OHM; 1%; 100PPM; 0.125W; THICK FILM                                                                |
|     19 |     2 | R8, R9                   | ERA-6AHD270     | PANASONIC                 | 27              | RES; SMT (0805); 27; 0.5%; +/- 50PPM/DEGC; 0.125W                                                                      |
|     20 |     8 | SU1, SU2, SU5, SU8- SU1  | 2SN-BK-G        | SAMTEC                    | 2SN-BK-G        | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.175IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED               |

## MAX33046E Evaluation Kit

## Evaluates:

## MAX33045E/MAX33046E

|   ITEM |   QTY | REF DES     | MFG PART #       | MANUFACTURER   | VALUE          | DESCRIPTION                                                                                                                                 |
|--------|-------|-------------|------------------|----------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------|
|     21 |     3 | TP18 - TP20 | 5011             | KEYSTONE       | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH                      |
|     22 |     1 | U1          | MAX33046EASA+    | MAXIM          | MAX3304 6EASA+ | EVKIT PART - IC; MAX33046EASA+; HALF-DUPLEX RS-485/422 TRANSCEIVER; PACKAGE OUTLINE DRAWING: 21-0041; LAND PATTERN DRAWING: 90-0096; NSOIC8 |
|     23 |     1 | U2          | MAX14931CASE+    | MAXIM          | MAX1493 1CASE+ | IC; DISO; 3/1 CHANNEL; 150MBPS; DEFAULT LOW; 2.75KVRMS DIGITAL ISOLATOR; NSOIC16                                                            |
|     24 |     1 | VCC _EX T   | 5010             | KEYSTONE       | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL                                        |
|     25 |     1 | PCB         | MAX33046ESHIEL D | MAXIM          | PCB            | PCB:MAX33046ESHIELD                                                                                                                         |

*If MAX33045E needs to be evaluated, change U1 IC to MAX33045E.

## MAX33046E Evaluation Kit

## MAX33046 EV Kit Schematic

<!-- image -->

## MAX33046E Evaluation Kit

## MAX33046 EV Kit PCB Layout

MAX33046E EV Kit PCB Layout -Top Silkscreen

<!-- image -->

MAX330466E EV Kit PCB Layout -Second Layer

<!-- image -->

## Evaluates: MAX33045E/MAX33046E

MAX330466E EV Kit PCB Layout -Top Layer

<!-- image -->

MAX330466E EV Kit PCB Layout -Third Layer

<!-- image -->

## MAX33046E Evaluation Kit

## MAX33046 EV Kit PCB Layouts (continued)

MAX330466E EV Kit PCB Layout -Bottom Layer

<!-- image -->

## Evaluates:

## MAX33045E/MAX33046E

MAX33046E EV Kit PCB Layout -Bottom Silkscreen

<!-- image -->

## MAX33046E Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                    | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------|-----------------|
|                 0 | 3/21            | Initial release                                                | -               |
|                 1 | 7/22            | Updated part number in header and added comment in BOM section | All Pages       |

Arduino® is a trademark of Arduino SA

Arm and Mbed are registered trademarks or trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## Evaluates:

## MAX33045E/MAX33046E