<!-- lastmod 2022-08-02 -->
## MAX22500E Evaluation Kit

## General Description

The MAX22500E evaluation kit (EV kit) is a fully assembled and  tested  PCB  that  demonstrates  the  functionality  of the MAX22500E half-duplex high speed RS-485/RS-422 transceiver  with  preemphasis  functionality.  The  EV  kit operates from a single 5V supply and includes on-board termination.

## Features

- Operates From a Single 5V Supply
- Terminal Block and RJ45 Connectors for Easy RS-485/RS-422 Evaluation
- On-board Selectable Preemphasis Setting
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX22500E EV kit
- 5V, 500mA DC power supply
- 80MHz signal/function generator
- Oscilloscope

Ordering Information appears at end of data sheet.

Evaluates: MAX22500E

## Startup Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

- 1) Ensure that all jumpers are in their default positions (see Table 1).
- 2) Set the DC power supply to 5V and connect the DC power supply to the VCC test point.  Connect the ground terminal of the 5V supply to the GND test point.
- 3) Turn on the power supply.
- 4) Set the signal/function generator to output a 30MHz 0-to-5V square wave.
- 5) Connect the signal/function generator to the DI test point.
- 6) Using the oscilloscope, verify that the A, B, and RO outputs switch as expected with the signal on DI.

<!-- image -->

## Detailed Description of Hardware

The MAX22500E EV kit  is a fully assembled and tested circuit board for evaluating the MAX22500E high-speed, half-duplex  RS-485/RS-422  transceiver  (U1).  The  EV kit  is  powered  from  a  single  5V  power  supply  and  can be used for standalone evaluation or can be connected (using the on-board terminal block) to an RS-485/RS-422 network for easy in-system evaluation.

## Powering the Board

The MAX22500E operates from a 5V voltage supply. The device also includes a separate logic supply input (VL) to interface with logic signal as low as 1.6V.

Close the J4 jumper to connect VL to VCC (VL = 5V), to operate the EV kit with a single supply.

Open the J4 jumper and connect a separate logic supply to the VL test point (TP6) to operate with a supply logic lower than 5V.

## Driver and Receiver Enable

The  EV  kit  features  three  jumpers  (J3,  J5,  and  J8)  to enable/disable the driver and receiver outputs. Set J3 to low (2-3) to enable the receiver. Set J3 to high (1-2) to enable the driver.

To  actively  control  both  enables,  remove  the  J2  and J3  jumpers  and  close  J4,  which  connects  DE  and RE together.

## Setting the Preemphasis

The MAX22500E features integrated driver preemphasis circuitry for reliable communication higher data rates over longer distances. Preemphasis is set with by connecting a resistor between PSET and ground.

The  MAX22500E  EV  kit  includes  a  15kΩ  to  set  the preemphasis  for  a  30Mbps  data  rate.  Set  the  switch (SW1) to the on position to enable preemphasis. To disable preemphasis, set SW1 to the off position.

## Termination for an End-of-Line Transceiver

The  MAX22500E  EV  kit  includes  a  120Ω  termination resistor (R7) between the A and B RS-485 receiver inputs on the MAX22500E.

## Table 1. Jumper Table (J1-J9)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                        |
|----------|------------------|--------------------------------------------------------------------|
| J3       | 1-2              | Receiver is disabled.                                              |
| J3       | 2-3*             | Receiver is enabled.                                               |
| J4       | Open             | VL is not connected to VCC. Apply an external voltage to power VL. |
| J4       | Closed*          | VL is connected to VCC.                                            |
| J5       | 1-2*             | Driver is enabled.                                                 |
| J5       | 2-3              | Driver is disabled.                                                |
| J8       | Open*            | DE and RE are not connected together.                              |
| J8       | Closed           | DE and RE are connected together.                                  |

Evaluates: MAX22500E

│

## MAX22500E EV Kit Bill of Materials

| ITEM   | REF_DES             |   QTY | MFG PART #                                                        | MANUFACTURER                           | VALUE         | DESCRIPTION                                                                                                              | COMMENTS   |
|--------|---------------------|-------|-------------------------------------------------------------------|----------------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C1, C2              |     2 | C0603C104K5RAC; C1608X7R1H104K                                    | KEMET; TDK                             | 0.1UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                              |            |
| 2      | C3                  |     1 | GRM21BR61A106KE19L; ECJ-2FB1A1; CL21A106KPCLQNC; GRM219R61A106KE4 | MURATA; PANASONIC; SAMSUNG ELECTRONICS | 10UF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                         |            |
| 3      | C4, C5              |     2 | C0402C103K5RAC; GRM155R71H103KA88                                 | KEMET/MURATA                           | 0.01UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                              |            |
| 4      | J1                  |     1 | PBC06SAAN                                                         | SULLINS ELECTRONICS CORP.              | PBC06SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                         |            |
| 5      | J2, J7              |     2 | 5-1634503-1                                                       | TE CONNECTIVITY                        | 5-1634503-1   | CONNECTOR; FEMALE; THROUGH HOLE; LOW PROFILE BNC PCB SOCKET; STRAIGHT; 5PINS                                             |            |
| 6      | J3, J5              |     2 | PCC03SAAN                                                         | SULLINS                                | PCC03SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                 |            |
| 7      | J4, J8              |     2 | PCC02SAAN                                                         | SULLINS                                | PCC02SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                 |            |
| 8      | J9                  |     1 | OSTTC042162                                                       | ON-SHORE TECHNOLOGY INC                | OSTTC042162   | CONNECTOR; FEMALE; THROUGH HOLE; TERMINAL BLOCK ONE PIECE WIRE PROTECTOR; COLOR BLUE; RIGHT ANGLE; 4PINS                 |            |
| 9      | J10-J13             |     4 | 131-5031-00                                                       | TEKTRONIX                              | 131-5031-00   | CONNECTOR; WIREMOUNT; 3 GHZ 20X LOW CAPACITANCE PROBE; STRAIGHT; 5PINS                                                   |            |
| 10     | J14                 |     1 | SS-7188-NF                                                        | STEWART CONNECTOR                      | SS-7188-NF    | CONNECTOR; FEMALE; THROUGH HOLE; UNSHIELDED CAT 5/5E NON-FLANGE JACK; RIGHT ANGLE; 8PINS                                 |            |
| 11     | R1                  |     1 | CRCW060315K0FK                                                    | VISHAY DALE                            | 15K           | RESISTOR, 0603, 15K OHM,1%, 100PPM, 0.10W, THICK FILM                                                                    |            |
| 12     | R2, R3              |     2 | CRCW0402100RFK; 9C04021A1000FL; RC0402FR-07100RL                  | VISHAY DALE; PANASONIC; YAGEO PHYCOMP  |               | 100 RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                              |            |
| 13     | R4, R5, R9-R11      |     5 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00                        | VISHAY DALE/ROHM/PANASONIC             |               | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                   |            |
| 14     | R7                  |     1 | CRCW0805120RFK                                                    | VISHAY DALE                            |               | 120 RESISTOR; 0805; 120 OHM; 1%; 100PPM; 0.125W; THICK FILM                                                              |            |
| 15     | SW1                 |     1 | MHS121                                                            | COPAL ELECTRONICS INC                  | MHS121        | SWITCH; SPDT; THROUGH HOLE; STRAIGHT; 12V; 0.2A; MHS SERIES; RCOIL=500 OHM; RINSULATION=100MOHM                          |            |
| 16     | TP1-TP4, TP11, TP12 |     6 | 5014                                                              | KEYSTONE                               | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 17     | TP6, TP8            |     2 | 5010                                                              | KEYSTONE                               | N/A           | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                       |            |
| 18     | TP7, TP9, TP10      |     3 | 5011                                                              | KEYSTONE                               | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |            |
| 19     | U1                  |     1 | MAX22500EATB+                                                     | MAXIM                                  | MAX22500EATB+ | EVKIT PART-IC; TDFN10-EP; HIGH SPEED HALF-DUPLEX RS-485 TRANSCEIVER FOR LONG CABLE LENGTH; PACKAGKE CODE: T1033+2;       |            |
| 20     | PCB                 |     1 | MAX22500E                                                         | MAXIM                                  | PCB           | PACKAGE OUTLINE: 21-0137 PCB:MAX22500E                                                                                   | -          |
| TOTAL  |                     |    41 | 41                                                                |                                        |               |                                                                                                                          |            |

Evaluates: MAX22500E

## MAX22500E EV Kit Schematic

<!-- image -->

## MAX22500E EV Kit PCB Layout Diagrams

MAX22500E EV Kit-Top Silkscreen

<!-- image -->

MAX22500E EV Kit-Top

<!-- image -->

│

## MAX22500E EV Kit PCB Layout Diagrams (continued)

MAX22500E EV Kit-Bottom

<!-- image -->

MAX22500E EV Kit-Bottom Silkscreen

<!-- image -->

│

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX22500EEVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX22500E

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are imSlied  Ma[im ,nteJrated reserYes the riJht to chanJe the circuitr\ and sSeci¿cations Zithout notice at an\ time

<!-- image -->

│

Evaluates: MAX22500E