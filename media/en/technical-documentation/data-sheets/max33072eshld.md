<!-- lastmod 2022-08-02 -->
## MAX33072E Shield Evaluation Kit

## General Description

The MAX33072E Shield evaluation kit (EV kit) is a fully assembled  and  tested  printed  circuit  board  (PCB)  that demonstrates  the  functionality  of  the  MAX33072E  halfduplex  RS-485  transceiver,  with  ±65V  fault  protection, extended  ±40V  common-mode  range,  and  ±40kV  ESD Human Body Model (HBM) for A, B data lines. The EV kit features  a  digital  isolator,  which  is  used  as  a  level translator between the RS-485 transceiver and the controller interface.

## Features and Benefits

- Easy Evaluation of the MAX33072E
- I/O Interface Compatibility from 1.71V to 5.5V
- Proven PCB Layout
- Compatible with Arm® Mbed ™ Platform and Arduino®
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Evaluates: MAX33072E/MAX33073E

## Quick Start

## Required Equipment

- MAX33072E Shield EV kit
- 3.3V (or 5V), 500mA DC power supply
- Signal/function generator that can generate a 250kHz square-wave signal
- Oscilloscope

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

1.  Place the MAX33072E Shield EV kit on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
2.  Set JU2 to the 1-2 position (DE = 1) and JU3 to the 14  position  (POL  =  0).  Set  all  other  jumpers  to  their default position as shown in Table 1 .
3.  With +3.3V (or 5V) power supply disabled, connect the positive  terminal  to  the  VCC\_EXT  and  IOREF  test points.  Connect  the  negative  terminal  to  a  GND  test point.
4.  Connect the positive terminal of the function generator to D0 (pin 1 of J4) and negative terminal to any GND test points on the shield.
5.  Set the function generator to output a 250kHz square wave between 0V and 3.3V (or 5V), and then enable function generator output.
6.  Turn on the +3.3V (or 5V) DC power supply.
7.  Connect an oscilloscope probe on D1 (pin 2 of J4) and verify that the D1 output signal (RO) matches the D0 input signal (DI).

## EV Kit Photo with Jumpers and Test Point Positions

<!-- image -->

## Evaluates: MAX33072E/MAX33073E

## Detailed Description of Hardware

The MAX33072E Shield EV kit is a fully assembled and tested circuit board for evaluating the MAX33072E fault protected half-duplex RS-485 transceiver (U1) with ±65V of fault protection. The EV kit is designed to evaluate the MAX33072E alone or in a RS-485 system. The MAX33073E Shield EV kit enables a Mbed platform or Arduino to communicate on a RS-485 bus. The MAX14931 digital isolator is used as a level translator with a 1.71V to 5.5V supply

range. Remove the 0Ω resistor R6 to apply the transmitter input signal directly on the DI test point. Likewise, remove the 0Ω resistor R3 to measure the receiver output signal directly on the RO test point. If external protection is desired beyond the device's built -in protection, the EV kit also features footprints for TVS diodes (D1 and D2) that can be connected to the A and B lines using JU7 and JU9, respectively.

## Powering the Board

The MAX33072E Shield EV kit requires two power supplies: one 3V to 5.5V supply for the MAX33072E (U1) transceiver applied at the VCC\_EXT test point, and one 1.71V to 5.5V supply for the microcontroller domain applied at the IOREF test point. When the EV kit board is used with a Mbed device or board compatible with Arduino, the power supply for U1 can also come from the 3.3V or 5V rail of the board of the Mbed device or Arduino. Place the shunt on the 2-3 position of JU1 to connect VCC to the VDD\_EXT pin. Place the shunt of JU1 on the 1-2 position or 1-4 position to connect the VCC of U1 to the Arduino/Mbed device 3.3V or 5V supply rail. In this scenario, IOREF is directly taken from the header of the Mbed device or from Arduino.

## On-Board Termination

A properly terminated RS-485 bus is terminated at each end with the characteristic impedance of the cable. For CAT5 or CAT6 cables, this is typically 120Ω on each end for a 60Ω load on the RS -485 driver. The MAX33072E Shield EV kit features a selectable 60Ω or 120Ω load circuit bet ween the A and B driver outputs. If the board is evaluated in a system and is connected at the end of the cable, then select the 120Ω termination. The termination resistors on the MAX33072E Shield EV kit should be changed to 60Ω with a 100pF load, to simul ate a complete system load during evaluation.

## MAX33072E Shield Evaluation Kit

## Evaluates: MAX33072E/MAX33073E

## DI and RO Configuration

The digital channels for DI and RO are selected through JU8. It consists of three columns and 16 rows. The columns labeled DI and RO are connected to the MAX33072E through the digital isolator (MAX14931FASE+ (U2)). The middle column is the digital I/O pins, D0 to D15, from the header of the Mbed device or from Arduino. This provides flexibility for the user to select different resources on the microcontroller to transmit and receive signals to and from the RS-485 transceiver. Table 2 shows the list of JU8 jumper options.

## Flexible Interface Options

The MAX33072E Shield EV kit allows multiple points of connection to the MAX33072E transceiver. The shield board could be placed on a Mbed device or a board compatible with Arduino to connect all the digital pins (DI, DE, RO, POL) through the J3, J4 headers. These signals could also be connected directly at their respective test points on the board, bypassing the digital isolator (U2). The A, B signals are connected to a terminal block (J5) to easily connect to a twisted pair cable. Alternately, the A, B test points may be used.

## PCB Layout for Thermal Dissipation

PCB layout can affect the performance of the transceiver in conditions with high common-mode voltage at high ambient temperatures. The layout of the MAX33072E Shield EV kit is designed to maximize thermal performance in such cases. Large copper pads are used for all of the pins. The GND pad is connected to a large copper plane on the top layer, with vias throughout the plane connecting to the GND plane on the bottom layer. A thick trace from the VCC pad to JU10 allows for greater heat dissipation at the VCC pin.

Table 1. Table Jumper Settings

| JUMPER       | SHUNT POSITION   | DESCRIPTION                                       |
|--------------|------------------|---------------------------------------------------|
| JU1          | 1-2              | VCC is shorted to +5V supply from shield header   |
| JU1          | 1-3*             | VCC is shorted to VCC_EXT external supply         |
| JU1          | 1-4              | VCC is shorted to +3.3V supply from shield header |
| JU1          | Open             | VCC is open                                       |
| JU2          | 1-2              | DE is shorted to VCC                              |
| JU2          | 1-3*             | DE is connected to level shifter output           |
| JU2          | 1-4              | DE is shorted to GND                              |
| JU2          | Open             | DE is open                                        |
| JU3          | 1-2              | POL is shorted to VCC                             |
| JU3          | 1-3*             | POL is connected to level shifter output          |
| JU3          | 1-4              | POL is shorted to GND                             |
| JU3          | Open             | POL is open                                       |
| JU4 and JU11 | 1-2              | Connects 120Ω between A and B                     |
| JU4 and JU11 | 2-3*             | Connects 60Ω between A and B                      |
| JU4 and JU11 | Open             | No load is connected between A and B              |
| JU5          | 1-2*             | Connects POL to D7 of J4                          |
| JU5          | Open             | Disconnects POL from D7 of J4                     |
| JU6          | 1-2*             | Connects DE to D6 of J4                           |
| JU6          | Open             | Disconnects DE from D6 of J4                      |
| JU7          | 1-2              | TVS Diode (DNI) connected to A                    |
| JU7          | Open*            | TVS Diode (DNI) disconnected from A               |
| JU9          | 1-2              | TVS Diode (DNI) connected to B                    |
| JU9          | Open*            | TVS Diode (DNI) disconnected from B               |
| JU10         | 1-2*             | Connects VCC pin of U1 to supply rail             |
| JU10         | Open             | Disconnects VCC pin of U1 from supply rail        |

* Default jumper state

## MAX33072E Shield Evaluation Kit

## Evaluates: MAX33072E/MAX33073E

## Table 2. Table DI and RO Jumper Setting

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
| MAX33072ESHLD# | Shield |

## MAX33072E Shield EV Kit Bill of Materials

## Evaluates: MAX33072E/MAX33073E

## MAX33072E Shield Evaluation Kit

|   ITEM | REF_DES         |   QTY | MFG PART #                                                                                | MANUFACTURER                                    | VALUE          | DESCRIPTION                                                                                                            |
|--------|-----------------|-------|-------------------------------------------------------------------------------------------|-------------------------------------------------|----------------|------------------------------------------------------------------------------------------------------------------------|
|      1 | A, B            |     2 | 5127                                                                                      | KEYSTONE                                        | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLUE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      2 | C1              |     1 | GRM155R60J106ME44; GRM155R60J106ME47; C1005X5R0J106M050BC; CL05A106MQ5NUN; C0402C106M9PAC | MURATA; MURATA; TDK; SAMSUNG ELECTRONICS; KEMET | 10UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; TG=-55DEGC TO +85DEGC; TC=X5R                                |
|      3 | C2-C4           |     3 | C0402C104J4RAC; GCM155R71C104JA55                                                         | KEMET; MURATA                                   | 0.1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=5%; MODEL=; TG=- 55DEGC TO +125DEGC; TC=X7R                       |
|      4 | C5              |     1 | C1005X7R1E473K050BC; GRM155R71E473K; GCM155R71E473KA55                                    | TDK; MURATA; MURATA                             | 0.047UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.047UF; 25V; TOL=10%; TG=- 55DEGC TO +125DEGC                                    |
|      5 | C6              |     1 | C0402C101K5GAC; C1005C0G1H101K050BA                                                       | KEMET; TDK                                      | 100PF          | CAPACITOR; SMT; 0402; CERAMIC; 100pF; 50V; 10%; C0G; -55DEGC to +125DEGC; 0 +/-30PPM/ DEGC                             |
|      6 | DE, DI, POL, RO |     4 | 5012                                                                                      | KEYSTONE                                        | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH |
|      7 | IOREF           |     1 | 5125                                                                                      | KEYSTONE                                        | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BROWN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH |
|      8 | J1, J4          |     2 | SSQ-108-24-G-S                                                                            | SAMTEC                                          | SSQ-108-24-G-S | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 8PINS                                              |
|      9 | J2              |     1 | SSQ-106-24-G-S                                                                            | SAMTEC                                          | SSQ-106-24-G-S | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 6PINS                                              |

Analog Devices | 5

## Evaluates: MAX33072E/MAX33073E

## MAX33072E Shield Evaluation Kit

|   ITEM | REF_DES                      |   QTY | MFG PART #                   | MANUFACTURER                           | VALUE          | DESCRIPTION                                                                                              |
|--------|------------------------------|-------|------------------------------|----------------------------------------|----------------|----------------------------------------------------------------------------------------------------------|
|     10 | J3                           |     1 | SSQ-110-24-G-S               | SAMTEC                                 | SSQ-110-24-G-S | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 10PINS                               |
|     11 | J5                           |     1 | OSTTA024163                  | ON-SHORE TECHNOLOGY INC.               | OSTTA024163    | CONNECTOR; FEMALE; THROUGH HOLE; 5.08MM TERM BLOCK CONNECTOR; STRAIGHT; 2PINS; -30DEGC TO +105DEGC       |
|     12 | JU1-JU3                      |     3 | PEC04SAAN                    | SULLINS ELECTRONICS CORP.              | PEC04SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                |
|     13 | JU4, JU11                    |     2 | PEC03SAAN                    | SULLINS                                | PEC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                |
|     14 | JU5-JU7, JU9, JU10           |     5 | PCC02SAAN                    | SULLINS                                | PCC02SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS;                                       |
|     15 | JU8                          |     1 | TSW-116-07-T-T               | SAMTEC                                 | TSW-116-07-T-T | -65DEGC TO +125DEGC CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; STRAIGHT; 48PINS              |
|     16 | R3-R6                        |     4 | ERJ-2GE0R00                  | PANASONIC                              | 0              | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                     |
|     17 | R7-R9                        |     3 | CRCW120660R0KNEAIF           | VISHAY DALE                            | 60             | RESISTOR; 1206; 60 OHM; 10%; 200PPM; 0.25W; THICK FILM                                                   |
|     18 | SU1-SU3, SU5, SU6, SU8- SU10 |     8 | S1100-B; SX1100-B; STC02SYAN | KYCON; KYCON; SULLINS ELECTRONICS CORP | SX1100-B       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED |

## Evaluates: MAX33072E/MAX33073E

## MAX33072E Shield Evaluation Kit

|   ITEM | REF_DES    |   QTY | MFG PART #      | MANUFACTURER         | VALUE         | DESCRIPTION                                                                                                                                                                         |
|--------|------------|-------|-----------------|----------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     19 | TP18, TP19 |     2 | 5011            | KEYSTONE             | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                             |
|     20 | U1         |     1 | MAX33072E       | MAXIM                | MAX33072E     | EVKIT PART - IC; MAX33072E; CI25 - 70V FAULT PROTECTED HALF DUPLEX RS-485; TRANSCEIVER; PACKAGE OUTLINE DRAWING: 21- 0041; LAND PATTERN NUMBER: 90-0096; PACKAGE CODE: S8+4; NSOIC8 |
|     21 | U2         |     1 | MAX14931FASE+   | MAXIM                | MAX14931FASE+ | IC; DISO; 3/1 CHANNEL; 150MBPS; DEFAULT LOW; 2.75KVRMS DIGITAL ISOLATOR;NSOIC16 150MIL                                                                                              |
|     22 | VCC_EXT    |     1 | 5010            | KEYSTONE             | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                               |
|     23 | PCB        |     1 | MAX33072ESHIELD | MAXIM                | PCB           | PCB:MAX33072ESHIELD                                                                                                                                                                 |
|     24 | D1, D2     |     0 | SM15T30CA       | ST MICRO ELECTRONICS | 25.6V         | DIODE; TVS; SMC (DO- 214AB); VRM=25.6V; IPP=36A                                                                                                                                     |

## Evaluates: MAX33072E/MAX33073E

## MAX33072E Shield EV Kit Schematic

<!-- image -->

CC02SAA

CC02SAA

## Evaluates: MAX33072E/MAX33073E

## MAX33072E Shield EV Kit PCB Layout

MAX33072/3E EV Kit PCB Layout -Silk Top

<!-- image -->

MAX33072/3E EV Kit PCB Layout -Bottom Layer

<!-- image -->

## MAX33072E Shield Evaluation Kit

MAX33072/3E EV Kit PCB Layout -Top Layer

<!-- image -->

MAX33072/3E EV Kit PCB Layout -Silk Bottom

<!-- image -->

## Evaluates: MAX33072E/MAX33073E

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                   | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------|-----------------|
|                 0 | 6/20            | Initial release               | -               |
|                 1 | 7/22            | Updated part number in header | All pages       |

Arduino® is a trademark of Arduino SA.

Arm and Mbed are registered trademarks or trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX33072E Shield

## Evaluation Kit