<!-- lastmod 2022-08-04 -->
## Evaluates: MAX33076E

## General Description

The MAX33076E Shield is a fully assembled and tested printed circuit board (PCB) that demonstrates the functionality of the MAX33076E quad channel RS-485/422 receivers with data rate up to 20Mbps  ±65V  fault protection,  extended  ±25V  common  mode  input  range, and ±25kV ESD Human Body Model (HBM). The shield features  a  digital  isolator,  which  is  used  as  a  level translator  between  the  RS-485/422  transceiver  and  the controller interface.

## EV Kit Photo

Figure 1. MAX33076E Shield

<!-- image -->

Arduino is a registered trademark of Arduino LLC.

Mbed is a registered trademark and service mark of Arm Limited

## MAX33076E Shield

## Features and Benefits

- Easy Evaluation of the MAX33076E
- I/O interface compatibility from 1.71V to 5.5V
- Proven PCB Layout
- Mbed™/Arduino ®  Platform Compatible
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX33076E Shield

## Quick Start

## Required Equipment

- MAX33076E Shield
- 5V, 500mA DC power supply
- Signal/function generator that can generate 10MHz square wave signal
- Oscilloscope

## Procedure

Follow the steps below to test the MAX33076E Shield as a standalone evaluation board.

1.  Place the MAX33076E Shield on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
2.  Set all the jumpers to their default positions as shown in Table 1.
3.  With +5V power supply disabled, connect the positive terminal to VCC\_EXT test point. Connect the negative terminal to the GND test point.
4.  For Channel 1 testing, connect the positive terminal of the function generator to A1 test point and the negative terminal to any GND test point on the shield. Connect B1 test point to GND.
5.  Set function generator output to a 10MHz square wave between -1V and +1V, and then enable function generator output.
6.  Turn on the +5V DC power supply.
7.  Connect an oscilloscope probe on Y1 and verify the signals on A1, B1, and Y1 test points.
8.  Repeat the same for channels 2-4.

## Table 1. Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                      |
|----------|------------------|--------------------------------------------------|
| JU1      | 1-2              | V CC is shorted to +5V supply.                   |
| JU1      | 1-3*             | V CC is shorted to V CC_EXT supply.              |
| JU1      | 1-4              | V CC is shorted to +3.3V supply.                 |
| JU1      | Open             | V CC is open.                                    |
| JU2      | 1-2*             | Connects 120Ω between CH1 A and B inputs         |
| JU2      | Open             | No load is connected between CH1 A and B         |
| JU3      | 1-2*             | Connects 120Ω between CH2 A and B inputs         |
| JU3      | Open             | No load is connected between CH2 A and B         |
| JU4      | 1-2*             | Connects 120Ω between CH3 A and B inputs         |
| JU4      | Open             | No load is connected between CH3 A and B inputs  |
| JU5      | 1-2*             | Connects 120Ω between CH4 A and B inputs         |
| JU5      | Open             | No load is connected between CH4 A and B inputs  |
| JU6      | 1-2*             | V CC is shorted to V CC_1 of MAX33076E IC supply |
| JU6      | Open             | V CC_1 of MAX33076E is open                      |
| JU7      | 1-2*             | Enable input (G) is connected to V CC            |
| JU7      | 1-3              | Enable input (G) is connected to GND             |
| JU7      | Open             | Enable input (G) is open                         |
| JU8      | 1-2              | Enable input ( G ) is connected to V CC          |
| JU8      | 1-3*             | Enable input ( G ) is connected to GND           |
| JU8      | Open             | Enable input ( G ) is open                       |
| JU9      | 1-2*             | IRQ is connected to D2 of Arduino connector      |

Evaluates: MAX33076E

## MAX33076E Shield

Evaluates: MAX33076E

| 1-3   | IRQ is connected to D3 of Arduino connector   |
|-------|-----------------------------------------------|
| Open  | IRQ is open                                   |

Note : * indicates default jumper state.

## Detailed Description of Hardware

The MAX33076E Shield is a fully assembled and tested circuit board for evaluating the MAX33076E fault-protected RS485/422 transceiver (U1) with ±65V of fault protection. The Shield is designed to evaluate MAX33076E alone or in an RS485/422 system. The MAX33076E Shield enables Mbed or Arduino platform to communicate on an RS-485/422 receiver, or it may be used as a standalone evaluation board. The MAX14931 digital isolator is used as a level translator with a 1.71V to 5.5V supply range.

If external protection is desired beyond the device's built-in protection, the Shield also features footprints for TVS diodes (D1 and D2) that can be connected to the A1 and B1 lines, respectively. Similarly, footprints are provided for channels 24.

## Powering the Board

The MAX33076E Shield requires two power supplies - one 3.3V or 5V supply for the MAX33076E (U1) transceiver applied at the VCC\_EXT test point and one 1.71V-5.5V supply for the microcontroller domain applied at the IOREF test point. When the Shield board is used with an Arduino/Mbed board, the power supply for U1 can also come from the Arduino/Mbed board's 5V rail. Place the shunt on 1-3 position of JU1 to connect VCC to external supply. Place the shunt of JU1 on 1-2 position to connect the VCC of U1 to Arduino/Mbed 5V supply rail and 1-4 position for 3.3V. In this scenario, IOREF is directly taken from the Arduino/Mbed header.

## Output Configuration

The MAX33076E converts RS-485 differential signals  (A  and B)  to  single ended  signals  (Y).  The quad outputs  are interfaced to Arduino/Mbed board through the MAX14830, a quad channel universal asynchronous receiver-transmitter (UART). The MAX14830 is controlled by Arduino/Mbed using SPI communication.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX33076ESHLD# | EV Kit |

#Denotes RoHS compliance.

## MAX33076E Shield

## MAX33076E Shield Bill of Materials

|   ITEM |   QTY | REF DES                      | MFG PART #                                                                                     | DESCRIPTION                                                                                                                                                      | MANUFACTURER                                  | STATUS   | VALUE        |
|--------|-------|------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|----------|--------------|
|      1 |    12 | A1- A4, B1- B4, Y1- Y4       | 5000                                                                                           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN;        | KEYSTONE                                      |          | N/A          |
|      2 |    10 | C1, C3, C5, C6, C8- C12, C14 | C0402C104J4R AC;GCM155R71 C104JA55                                                             | CAP; SMT (0402); 0.1UF; 5%; 16V; X7R; CERAMIC                                                                                                                    | KEMET;MURATA                                  |          | 0.1UF        |
|      3 |     2 | C2, C4                       | C0402X7R160- 103JNP; X7R0402CTT;                                                               | CAP; SMT (0402); 0.01UF; 5%; 16V; X7R; CERAMIC;                                                                                                                  | VENKEL LTD;KOA SPEER ELECTRONICS              |          | 0.01UF       |
|      4 |     2 | C7, C13                      | EMK105BJ105K V                                                                                 | CAP; SMT (0402); 1UF; 10%; 16V; X5R; CERAMIC;                                                                                                                    | TAIYO YUDEN                                   |          | 1UF          |
|      5 |     1 | C15                          | GRM155R60J10 6ME44; GRM155R60J10 6ME47; C1005X5R0J106 M050BC; CL05A106MQ5N UN; C0402C106M9P AC | CAP; SMT (0402); 10UF; 20%; 6.3V; X5R; CERAMIC                                                                                                                   | MURATA;MURATA;TD K;SAMSUNG ELECTRONICS;KEME T |          | 10UF         |
|      6 |     3 | GND, GND 1, GND 2            | 5011                                                                                           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; | KEYSTONE                                      |          | N/A          |
|      7 |     2 | IORE F, VCC_ EXT             | 5010                                                                                           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                            | KEYSTONE                                      |          | N/A          |
|      8 |     4 | J1-J4                        | OSTVN02A150                                                                                    | CONNECTOR; FEMALE; THROUGH HOLE; TERMINAL BLOCK; RIGHT ANGLE; COLOR: GREEN; 2PINS                                                                                | ON-SHORE TECHNOLOGY INC                       |          | OSTVN02A1 50 |

Evaluates: MAX33076E

## MAX33076E Shield

Evaluates: MAX33076E

|   9 |   2 | J5, J8   | SSQ-108-24-G- S                                 | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 8PINS                                                     | SAMTEC                                 | SSQ-108-24- G-S   |
|-----|-----|----------|-------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|-------------------|
|  10 |   1 | J6       | SSQ-106-24-G- S                                 | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 6PINS ;                                                   | SAMTEC                                 | SSQ-106-24- G-S   |
|  11 |   1 | J7       | SSQ-110-24-G- S                                 | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 10PINS                                                    | SAMTEC                                 | SSQ-110-24- G-S   |
|  12 |   1 | JU1      | PEC04SAAN                                       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                     | SULLINS ELECTRONICS CORP.              | PEC04SAAN         |
|  13 |   5 | JU2- JU6 | PCC02SAAN                                       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                      | SULLINS                                | PCC02SAAN         |
|  14 |   3 | JU7- JU9 | PBC03SAAN                                       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                              | SULLINS                                | PBC03SAAN         |
|  15 |   4 | R1- R4   | CRCW1206120 RFK; MCR18EZPF120 0;ERJ- 8ENF1200   | RES; SMT (1206); 120; 1%; +/-100PPM/DEGC; 0.2500W                                                                             | VISHAY DALE;ROHM;PANASO NIC            | 120               |
|  16 |   9 | R5- R13  | RC1608J000CS; CR0603-J/- 000ELF;RC0603 JR-070RL | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                                       | SAMSUNG ELECTRONICS;BOUR NS;YAGEO PH   | 0                 |
|  17 |   9 | SU1- SU9 | S1100- B;SX1100- B;STC02SYAN                    | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSP HOR BRONZE CONTACT=GOLD PLATED                      | KYCON;KYCON;SULLI NS ELECTRONICS CORP. | SX1100-B          |
|  18 |   1 | U1       | MAX33076EASA +                                  | IC; RECV; MAX33076EASA+; PACKAGE OUTLINE NUMBER: 21-0041; PACKAGE LAND PATTERN NUMBERL 90- 0097; PACKAGE CODE: S16+1C; SOIC16 | MAXIM                                  | MAX33076E ASA+    |
|  19 |   1 | U3       | MAX14930FASE +                                  | IC; DISO; 4/0 CHANNEL; 150MBPS; DEFAULT LOW; 2.75KVRMS DIGITAL                                                                | MAXIM                                  | MAX14930F ASE+    |

## MAX33076E Shield

## Evaluates: MAX33076E

|    |    |        |                  | ISOLATOR; NSOIC16 150MIL                                                                                                                    |                       |                |
|----|----|--------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|----------------|
| 20 |  1 | U4     | MAX14830ETM +    | IC; UART; QUAD SERIAL UART WITH 128-WORD FIFOS; TQFN48-EP                                                                                   | MAXIM                 | MAX14830E TM+  |
| 21 |  1 | U5     | MAX14931FASE +   | IC; DISO; 3/1 CHANNEL; 150MBPS; DEFAULT LOW; 2.75KVRMS DIGITAL ISOLATOR; NSOIC16 150MIL                                                     | MAXIM                 | MAX14931F ASE+ |
| 22 |  1 | U6     | MAX13046EELT +   | IC; TRANS; SINGLE- BIDIRECTIONAL LOW- LEVEL TRANSLATOR; UDFN6 1X1.5                                                                         | MAXIM                 | MAX13046E ELT+ |
| 23 |  1 | Y5     | LFXTAL030798     | CRYSTAL; SMT; 3.68640MHZ; 16PF; TOL = +/-30PPM                                                                                              | IQD FREQUENCY PRODUCT | LFXTAL0307 98  |
| 24 |  1 | PCB    | MAX33076ESHI ELD | PCB:MAX33076ESHIELD                                                                                                                         | MAXIM                 | PCB            |
| 25 |  0 | D1- D8 | P6SMB18CA        | DIODE; TVS; SMB (DO- 214AA); VRM=15.3V; IPP=24.2A                                                                                           | LITTELFUSE            | 15.3V          |
| 26 |  0 | U2     | MAX33076EAEE +   | EVKIT PART - IC; RECV; MAX33076EAEE+; PACKAGE OUTLINE NUMBER: 21-0055; PACKAGE LAND PATTERN NUMBERL 90- 0167; PACKAGE CODE: E16+11C; QSOP16 | MAXIM                 | MAX33076E AEE+ |

## MAX33076E Shield

## MAX33076E Shield Schematic

<!-- image -->

Evaluates: MAX33076E

## MAX33076E Shield Schematic (continued)

<!-- image -->

Evaluates: MAX33076E

## MAX33076E Shield

## MAX33076E Shield PCB Layout

MAX33076E Shield Component Placement Guide-Top Silkscreen

<!-- image -->

MAX33076E Shield PCB Layout-Top

<!-- image -->

## Evaluates: MAX33076E

MAX33076E Shield PCB Layout-Layer 2\_GND

<!-- image -->

MAX33076E Shield PCB Layout-Layer 3\_PWR

<!-- image -->

## MAX33076E Shield

## MAX33076E Shield PCB Layout (Continued)

MAX33076E Shield PCB Layout-Bottom

<!-- image -->

## Evaluates: MAX33076E

MAX33076E Shield Component Placement Guide-Bottom Silkscreen

<!-- image -->

## MAX33076E Shield

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 09/21           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX33076E