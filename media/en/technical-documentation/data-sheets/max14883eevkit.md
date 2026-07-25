<!-- lastmod 2022-08-02 -->
## MAX14883E Evaluation Kit

## General Description

The MAX14883E evaluation kit (EV kit) is a fully assembled and  tested  PCB  that  demonstrates  the  functionality  of the  MAX14883E  fault-protected  controller  area  network (CAN) transceiver. The EV kit operates from a 5V supply.

## Features

- Operates from a Single 5V Supply
- Terminal Block Connectors for Easy CAN System Evaluation
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX14883E EV Kit
- 5V, 500mA DC power supply
- Signal/function generator
- Oscilloscope

Evaluates: MAX14883E

## Startup Procedure

The  MAX14883E  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation.

- 1) Set  the  power  supply  to  5V  and  connect  the  power  supply  to  the  V DD   test  point  (TP9).  Connect  the ground terminal of the power supply to the GND test point (TP8).
- 2) Ensure that all jumpers are in their default positions (see Table 1).
- 3) Turn on the power supply.
- 4) Set the signal/function generator to output a 500kHz 0V-to-5V square wave.
- 5) Connect the signal/function generator to the TXD test point (TP1).
- 6) Connect two oscilloscope probes to TXD (TP1) and RXD (TP3), respectively, to verify that the signal on RXD is the same as on TXD.
- 7) To  view  the  CANH  and  CANL  signals,  connect  the scope probes to the CANH test point (TP15) and the CANL test point (TP14).

Ordering Information appears at end of data sheet.

<!-- image -->

## Detailed Description of Hardware

The MAX14883E EV kit is a fully assembled and tested circuit board for evaluating the MAX14883E fault-protected CAN transceiver (U3). The EV kit has been designed to allow for evaluating the MAX14883E alone or in a CAN system.

## Powering the Board

Connect a 5V supply to the external supply to the V DD test  point  (TP9)  to  power  the  MAX14883E  transceiver. The ground terminal of the 5V supply must be connected.

## On-Board Termination

A properly terminated CAN bus is terminated at each end with the characteristic impedance of the cable. For cat5 or  cat6  tables,  this  is  typically  120Ω  on  each  end  for  a

## Table 1. Jumper Table (J1-J7)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                       |
|----------|------------------|-----------------------------------------------------------------------------------|
| J1       | Open             | V L is not connected to V DD . Apply an external voltage to V L .                 |
| J1       | Closed*          | V L is connected to V DD .                                                        |
| J2       | Open             | Split termination capacitor is not connected.                                     |
| J2       | Closed*          | Split termination capacitor is connected.                                         |
| J3       | Open             | CANH and CANLare not connected through the on-board resistor termination network. |
| J3       | Closed*          | CANH and CANL are connected through the on-board resistor termination network.    |
| J6       | Open             | External diode protection is not connected to CANH.                               |
| J6       | Closed*          | External diode protection is connected to CANH.                                   |
| J7       | Open             | External diode protection is not connected to CANL.                               |
| J7       | Closed*          | External diode protection is connected to CANL.                                   |
| J8       | 1-2              | POL is connected to V L .                                                         |
| J8       | 2-3*             | POL is connected to GND.                                                          |
| J9       | 1-2              | TXD is connected to V L .                                                         |
| J9       | 2-3*             | TXD is connected to GND.                                                          |

*Default position.

## Evaluates: MAX14883E

60Ω load on the CAN driver. The MAX14883E EV kit fea -tures a selectable split 60Ω-60Ω-47nF termination cirucit beween the CANH and CANL driver outputs. If the board is  being  evaluated  in  a  system  and  is  connected  at  the end of the cable, close the J3 jumper and the J2 jumper to enable this termination. If the board is connected to a bus that is terminated elsewhere, open J3 and J2 to avoid loading the bus down further.

To  evaluate  performance  with  a  non-split  termination (resistive  termination  only  between  CANH  and  CANL), open the J2 jumper to disconnect the C3 capacitor from ground.

The termination resistors on the MAX14883E EV should be changed to 30Ω-30Ω-47nF (a 60Ω load, total) to simulate a complete system load during evaluation.

│

## MAX14883E EV Kit Bill of Materials

| ITEM REF_DES           | DNI/DNP   | QTY   | MFG PART #                          | MANUFACTURER              | VALUE         | DESCRIPTION                                                                                                              |
|------------------------|-----------|-------|-------------------------------------|---------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------|
| 1 C3                   | -         |       | 1 C0805C473J1RAC                    | KEMET                     | 0.047UF       | CAPACITOR; SMT; 0805; CERAMIC; 0.047uF;100V; 5%; X7R; -55degC to + 125degC                                               |
| 2 C5, C6               | -         |       | 2 C0603C104K5RAC; C1608X7R1H104K    | KEMET;TDK                 | 0.1UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                              |
| 3 C7                   | -         |       | 1 C3216X5R1H106K; GRM31CR61H106KA12 | TDK;MURATA                | 10UF          | CAPACITOR; SMT (1206); CERAMIC CHIP; 10UF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                 |
| 4 D1, D2               | -         |       | 2 SMAJ30A                           | LITTELFUSE                | 30V           | DIODE; TVS; SMA (DO-214AC); VRM=30V; IF=8.3A                                                                             |
| 5 D3-D6                | -         |       | 4 1N4001                            | ON SEMICONDUCTOR          | 1N4001G       | DIODE; RECT; THROUGH HOLE-AXIAL LEAD (DO-41); PIV=50V; IF=1A                                                             |
| 6 J1-J3, J6, J7        | -         |       | 5 PBC02SAAN                         | SULLINS ELECTRONICS CORP. | PBC02SAAN     | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;                             |
| 7 J4                   | -         |       | 1 PBC05SAAN                         | SULLINS ELECTRONICS CORP. | PBC05SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65 DEGC TO +125 DEGC                                         |
| 8 J5                   | -         |       | 1 OSTTC042162                       | ON-SHORE TECHNOLOGY       | OSTTC042162   | CONNECTOR; FEMALE; THROUGH HOLE; TERMINAL BLOCK ONE PIECE WIRE PROTECTOR; COLOR BLUE; RIGHT ANGLE; 4PINS                 |
| 9 J8, J9               | -         |       | 2 PCC03SAAN                         | SULLINS                   | PCC03SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                 |
| 10 R1, R2              | -         |       | 2 CRCW060360R4FK                    | VISHAY DALE               | 60.4          | RESISTOR; 0603; 60.4 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                  |
| 11 TP1-TP3, TP14, TP15 | -         |       | 5                                   | 5014 KEYSTONE             | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 12 TP7, TP8            | -         |       | 2                                   | 5011 KEYSTONE             | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
| 13 TP9, TP10           | -         |       | 2                                   | 5010 KEYSTONE             | N/A           | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                       |
| 14 U3                  | -         |       | 1 MAX14883EASA+                     | MAXIM                     | MAX14883EASA+ | IC; TXRX; CAN TRANSCEIVER WITH +/-60V FAULT PROTECTION AND SELECTABLE POLARITY; NSOIC8                                   |
| 15 PCB                 | -         |       | 1 MAX14883E                         | MAXIM                     | PCB           | PCB:MAX14883E                                                                                                            |
| TOTAL                  |           |       | 32                                  |                           |               |                                                                                                                          |

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX14883E EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX14883E EV Kit Schematic

<!-- image -->

│

## MAX14883E EV Kit PCB Layout Diagrams

MAX14883E EV Kit-Top Silkscreen

<!-- image -->

MAX14883E EV Kit-Top Layer

<!-- image -->

│

## MAX14883E EV Kit PCB Layout Diagrams (continued)

MAX14883E EV Kit- Bottom Layer

<!-- image -->

MAX14883E EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX14883E Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                   | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------|-----------------|
|                 0 | 3/17            | Initial release                                               | -               |
|                 1 | 9/17            | Updated bill of materials, PCB layout diagrams, and schematic | 3-6             |
|                 2 | 12/18           | Updated all sections and corrected typo                       | 1-6             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitry and speci¿cations Zithout notice at any time.

<!-- image -->

│

Evaluates: MAX14883E