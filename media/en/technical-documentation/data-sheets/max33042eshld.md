<!-- lastmod 2022-08-02 -->
## General Description

The MAX33042E shield is a fully assembled and tested printed circuit board (PCB)  that demonstrates  the functionality of the MAX33042E controller area network (CAN) transceiver with ±40V fault protection, extended ±25V  common-mode  input  range,  and  ±40kV  ESD human body model (HBM). The shield features a digital isolator, which is used as a level translator between the CAN transceiver and the controller interface.

## EV Kit Photo

<!-- image -->

<!-- image -->

## Features

- Easy Evaluation of the MAX33042E
- I/O Interface Compatibility from 1.71V to 5.5V
- Proven PCB Layout
- Mbed™/Arduino ®  Platform Compatible
- Fully Assembled and Tested

Ordering Information appears at end of data sheet .

## Evaluates: MAX33042E

## Quick Start

## Required Equipment

- MAX33042E shield
- 5V, 500mA DC power supply
- Signal/function generator that can generate 2MHz square wave signal
- Oscilloscope

## Procedure

The EV kit is fully assembled and tested. The following procedure can be used to test the MAX33042E shield as a standalone evaluation board.

1.  Place the MAX33042E shield on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
2.  Set all the jumpers to their default positions as shown in Table 1.
3.  With +5V power supply disabled, connect the positive terminal to the VDD\_EXT test point and IOREF test point. Connect the negative terminal to the GND test point.
4.  Connect the positive terminal of the function generator to D1 (pin 2 of P2) and negative terminal to any GND test point on the shield. D1 is connected to the MAX33042E's TXD pin through the digital isolator (U2).
5.  Set function generator to the output a 2MHz square wave between 0V and 5V, and then enable function generator output.
6.  Turn on the +5V DC power supply.
7.  Connect an oscilloscope probe on D0 (pin 1 of P2) and verify the D0 output signal (RXD) matches the D1 input signal (TXD).

## Detailed Description of Hardware

The MAX33042E shield is a fully assembled and tested circuit board for evaluating the high-speed MAX33042E CAN transceiver (U1) with ±40V of fault protection. The shield is designed to evaluate the MAX33042E alone or in a CAN system.  The MAX33042E shield enables Mbed or Arduino platform to communicate on a CAN bus, or it can be used as a standalone evaluation board.  The MAX14931 digital isolator is used as a level translator with a 1.71V to 5.5V supply range. Disconnect the jumper JU15 (resistor R15) to apply the transmitter input signal directly on the TXD test point. Likewise, disconnect the jumper JU16 (resistor R16) to measure the receiver output signal directly on the RXD test point. If external protection is desired beyond the device's built-in protection, the shield features footprints for TVS diodes (D1 and D2) that can be connected to the CANH, and CANL lines using JU5 and JU6, respectively.

This evaluation shield should be used with the following documents:

- MAX33042E data sheet
- MAX33042E shield data sheet (this document)

These documents, or links to them, are included on the MAX33042E shield page. Use the following link for the latest versions of the documents listed above. http://www.maximintegrated.com/MAX33042ESHLD

## Powering the Board

The MAX33042E shield requires two power supplies: one 4.5V-5.5V supply for the MAX33042E (U1) transceiver applied at the VDD\_EXT test point, and one 1.71V-5.5V supply for the microcontroller domain applied at the IOREF test point. When  the  shield  board  is  used  with  an  Arduino/Mbed  board,  the  power  supply  for  U1  can  also  come  from  the Arduino/Mbed board's 5V rail.  Place the shunt on 2-3 position of JU11 to connect VDD to the VDD\_EXT pin.  Place the shunt of JU11 on 1-2 position to connect VDD of U1 to the Arduino/Mbed 3.3V supply rail. In this scenario, IOREF is directly taken from the Arduino/Mbed header.

## On-Board Termination

A properly terminated CAN bus is terminated at each end with the characteristic impedance of the cable. For CAT5 or CAT6 cables, this is typically 120Ω on each end for a 60Ω load on the CAN driver. The MAX33042E shield features a selectable 60Ω load and a 60Ω-60Ω split termination circuit between the CANH and CANL driver outputs.  The 60Ω-60Ω split termination has a footprint for a capacitor to reduce high-frequency noise and common-mode drift.  If the board is evaluated in a system and is connected at the end of the cable, then select the 120 Ω ( 60Ω-60Ω split) termination. The termination resistors on the MAX33042E shield changes to 60Ω with a 100pF load (using JU7 and JU8) to simulate a complete system load during evaluation.

## TXD and RXD Configuration

Digital channels for TXD and RXD are selected through JU1.  It consists of three columns and 16 rows.  The columns labeled TXD and RXD are connected to the MAX33042E through the digital isolator (MAX14931FASE+ (U2)).  The middle column is the digital I/O pins, D0 to D15, from the Arduino/Mbed header.  This provides flexibility for the user to select different resources on the microcontroller to transmit and receive signals to and from the CAN transceiver.  Table 2 shows the list of JU1 jumper options.

## DB9 Connector

The MAX33042E shield has a DB9 connector to CANH and CANL (pins 7 and 2, respectively).

The MAX33042E shield allows multiple points of connection to the MAX33042E transceiver. The shield board can be placed on a Arduino/Mbed-compatible board to connect all the digital pins (TXD, RXD, STBY, SHDN) through the P1 and P2 headers. These signals can also be connected directly at their respective test points on the board, bypassing the digital isolator (U2). The CANH and CANL signals are connected to a terminal block (JU13) to easily connect to a twisted pair cable. These signals are routed to a DB9 connector (CANH and CANL on pins 7 and 2, respectively). Alternately, the CANH and CANL test points can be used.

## SD Card

The MAX33042E shield has a microSD card socket for easy use in OBD applications. The microSD card is connected to D10-D13 to interface with the Arduino/Mbed board through the SPI interface.

Table 1. Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                     |
|----------|------------------|-----------------------------------------------------------------|
| JU1      | -                | See Table 2                                                     |
| JU5      | 1-2              | Connects TVS diode (optional, not populated) to CANH            |
| JU5      | Open*            | Disconnects TVS diode (optional, not populated) from CANH       |
| JU6      | 1-2              | Connects TVS diode (optional, not populated) to CANL            |
| JU6      | Open*            | Disconnects TVS diode (optional, not populated) to CANL         |
| JU7, JU8 | 1-2              | Connects 120Ω between CANH and CANL                             |
| JU7, JU8 | 2-3*             | Connects 60Ω between CANH and CANL                              |
| JU7, JU8 | Open             | No load is connected between CANH and CANL                      |
| JU9      | 1-2*             | Connects SHDN to D7 of P2                                       |
| JU9      | Open             | Disconnects SHDN from D7 of P2                                  |
| JU10     | 1-2*             | Connects STBY to D6 of P2                                       |
| JU10     | Open             | Disconnects STBY from D6 of P2                                  |
| JU11     | 1-2              | VDD is shorted to 5 V supply                                    |
| JU11     | 2-3*             | VDD is shorted to VDD_EXT supply                                |
| JU11     | Open             | VDD is open                                                     |
| JU12     | 1-2*             | Connects STBY to ground                                         |
| JU12     | 1-3              | Connects STBY to a 39.2kΩ resistor to ground                    |
| JU12     | 1-4              | Connects STBY to U2's OUTB1 pin used for Arduino/Mbed interface |
| JU12     | Open             | Internal pullup for standby mode                                |
| JU20     | 1-2*             | Connects VDD pin of U1 to VDD supply rail                       |
| JU20     | Open             | Disconnects VDD pin of U1 to VDD supply rail                    |

*Default jumper state .

## Table 2. TXD and RXD Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION         |
|----------|------------------|---------------------|
| JU1      | 1-2              | Connects TXD to D0  |
| JU1      | 4-5*             | Connects TXD to D1  |
| JU1      | 7-8              | Connects TXD to D2  |
| JU1      | 10-11            | Connects TXD to D3  |
| JU1      | 13-14            | Connects TXD to D4  |
| JU1      | 16-17            | Connects TXD to D5  |
| JU1      | 19-20            | Connects TXD to D6  |
| JU1      | 22-23            | Connects TXD to D7  |
| JU1      | 25-26            | Connects TXD to D8  |
| JU1      | 28-29            | Connects TXD to D9  |
| JU1      | 31-32            | Connects TXD to D10 |
| JU1      | 34-35            | Connects TXD to D11 |
| JU1      | 37-38            | Connects TXD to D12 |
| JU1      | 40-41            | Connects TXD to D13 |

## Evaluates: MAX33042E

| 43-44   | Connects TXD to D14   |
|---------|-----------------------|
| 46-47   | Connects TXD to D15   |
| 2-3*    | Connects RXD to D0    |
| 5-6     | Connects RXD to D1    |
| 8-9     | Connects RXD to D2    |
| 11-12   | Connects RXD to D3    |
| 14-15   | Connects RXD to D4    |
| 17-18   | Connects RXD to D5    |
| 20-21   | Connects RXD to D6    |
| 23-24   | Connects RXD to D7    |
| 26-27   | Connects RXD to D8    |
| 29-30   | Connects RXD to D9    |
| 32-33   | Connects RXD to D10   |
| 35-36   | Connects RXD to D11   |
| 38-39   | Connects RXD to D12   |
| 41-42   | Connects RXD to D13   |
| 44-45   | Connects RXD to D14   |
| 47-48   | Connects RXD to D15   |

*Default jumper state .

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX33042ESHLD# | EV Kit |

#Denotes RoHS compliance.

## MAX33042E Shield Bill of Materials

| REF DES                          |   QTY | MFG PART #                                                                                                    | VALUE                   | DESCRIPTION                                                                                                             |
|----------------------------------|-------|---------------------------------------------------------------------------------------------------------------|-------------------------|-------------------------------------------------------------------------------------------------------------------------|
| C1-C3                            |     3 | C0402C104J4RAC; GCM155R71C104JA55                                                                             | 0.1UF                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                       |
| C4                               |     1 | C0402X7R160-103JNP; X7R0402CTT; 0402YC103JAT2A                                                                | 0.01UF                  | CAPACITOR; SMT; 0402; CERAMIC; 0.01uF; 16V; 5%; X7R; -55degC to + 125degC; 0 +/-15% degC MAX.                           |
| C6                               |     1 | C0402C101J5GAC;NMC0402NPO1 01J;CC0402JRNPO9BN101;GRM1 555C1H101JA01;C1005C0G1H101 J050BA;CGA2B2C0G1H101J050BA | 100PF                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                               |
| C7, C8                           |     2 | GRM21BR61A106KE19; ECJ- FB1A106;CL21A106KPCLQNC; GRM219R61A106KE44                                            | 10UF                    | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                        |
| CANH, CANL, RXD, SHDN, STBY, TXD |     6 | 5012                                                                                                          | N/A                     | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| IOREF, VDD_EXT                   |     2 | 5010                                                                                                          | N/A                     | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                   |
| J3                               |     1 | 502570-0893;5025700893                                                                                        | 502570-0893; 5025700893 | CONNECTOR; FEMALE; SMT; MICROSD CARD CONNECTOR; RIGHT ANGLE; 10PINS                                                     |
| J7                               |     1 | 182-009-113R531                                                                                               | 182-009-113R531         | CONNECTOR; MALE; THROUGH HOLE; D-SUBMINIATURE CONNECTOR; RIGHT ANGLE; 9PINS                                             |
| J13                              |     1 | OSTTA024163                                                                                                   | OSTTA024163             | CONNECTOR; FEMALE; THROUGH HOLE; 5.08MM TERM BLOCK CONNECTOR; STRAIGHT; 2PINS; -30 DEGC TO +105 DEGC                    |
| JU1                              |     1 | TSW-116-07-T-T                                                                                                | TSW-116-07-T-T          | CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; STRAIGHT; 48PINS                                                 |
| JU5, JU6, JU9, JU10, JU20        |     5 | PBC02SAAN                                                                                                     | PBC02SAAN               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                               |
| JU7, JU8                         |     2 | PBC03SAAN                                                                                                     | PBC03SAAN               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                        |
| JU11                             |     1 | PCC03SAAN                                                                                                     | PCC03SAAN               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                |
| JU12                             |     1 | TSW-104-07-L-S                                                                                                | TSW-104-07-L-S          | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                                       |

## Evaluates: MAX33042E

| P1               |   1 | SSQ-110-24-G-S                                         | SSQ-110-24-G-S   | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 10PINS ;                                                                                                                                         |
|------------------|-----|--------------------------------------------------------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| P2, P4           |   2 | SSQ-108-24-G-S                                         | SSQ-108-24-G-S   | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 8PINS ;                                                                                                                                          |
| P3               |   1 | SSQ-106-24-G-S                                         | SSQ-106-24-G-S   | CONNECTOR; FEMALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 6PINS ;                                                                                                                                          |
| R2, R3           |   2 | CRCW060360R4FK                                         | 60.4             | RESISTOR; 0603; 60.4 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                              |
| R4               |   1 | CRCW121060R4FKEAHP                                     | 60.4             | RES; SMT (1210); 60.4R; 1%; +/- 100PPM/DEGK; 0.75W                                                                                                                                                                   |
| R5               |   1 | CRCW040226K1FK                                         | 26.1K            | RESISTOR; 0402; 26.1K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                                                            |
| R6, R8, R10, R12 |   4 | CRCW04021K80FK; RC0402FR-071K8L                        | 1.8K             | RESISTOR, 0402, 1.8K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                                            |
| R7, R9, R11, R13 |   4 | CRCW04023K30FK                                         | 3.3K             | RESISTOR, 0402, 3.3K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                                            |
| R14-R17          |   4 | RC1608J000CS;CR0603-J/- 000ELF;RC0603JR-070RL          | 0                | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                                                                                                                 |
| TP8, TP9         |   2 | 5011                                                   | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                              |
| U1               |   1 | MAX33042EAKA+                                          | MAX33042EAKA+    | EVKIT PART - IC; MAX33042EAKA+; +5V; 5MBPS CAN TRANSCEIVER WITH +/-40V FAULT PROTECTION; +/-25VCMR; AND +/- 40KV ESD; PACKAGE OUTLINE DRAWING: 21-0078; PACKAGE CODE: K8CN+2; LAND PATTERN DRAWING: 90-0176; SOT23-8 |
| U2               |   1 | MAX14931FASE+                                          | MAX14931FASE+    | IC; DISO; 3/1 CHANNEL; 150MBPS; DEFAULT LOW; 2.75KVRMS DIGITAL ISOLATOR; NSOIC16 150MIL                                                                                                                              |
| PCB              |   1 | MAX33042ESHIELD                                        | PCB              | PCB:MAX33042ESHIELD                                                                                                                                                                                                  |
| C5               |   0 | C1005X7R1E473K050BC; GRM155R71E473K; GCM155R71E473KA55 | 0.047UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.047UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC                                                                                                                                 |
| D1, D2           |   0 | SM15T30CA                                              | 25.6V            | DIODE; TVS; SMC (DO-214AB); VRM=25.6V; IPP=36A                                                                                                                                                                       |
| R1               |   0 | N/A                                                    | OPEN             | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                                                                                     |

## MAX33042E Shield Schematic

<!-- image -->

## MAX33042E Shield PCB Layouts

MAX33042E Shield Component Placement Guide -Top Silkscreen

<!-- image -->

## Evaluates: MAX33042E

MAX33042E Shield PCB Layouts-Top

<!-- image -->

MAX33042E Shield PCB Layouts-Bottom

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/20           | Initial release | -               |

Mbed is a trademark of Arm Limited (and its subsidiaries) in the US and elsewhere. Arduino is a registered trademark of Arduino, LLC.

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.