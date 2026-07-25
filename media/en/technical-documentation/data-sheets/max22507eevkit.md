<!-- lastmod 2022-08-02 -->
## MAX22507E Evaluation Kit

## General Description

The MAX22507E evaluation kit (EV kit) is a fully assembled and  tested  PCB  that  demonstrates  the  functionality  of the  MAX22507E  and  the  MAX22508E  full-duplex  high speed  RS-485/RS-422  transceiver.  The  EV  kit  includes on-board  termination  for  easy  point-to-point  evaluation. The EV kit is assembled using MAX22507E in a 10-pin TDFN package,  but  also  provides  equivalent  functional evaluation for the MAX22508E, which is offered in a 8-pin SOIC package.

## Features

- Operates from a Single 3V to 5V Supply
- Terminal Block Connectors for Easy RS-485/RS-422 Evaluation
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX22507E EV kit
- 5V, 500mA DC power supply
- 50MHz signal/function generator
- Oscilloscope

## Evaluates: MAX22507E/MAX22508E

## Startup Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

- 1) Ensure that all jumpers are in their default positions (see Table 1).
- 2) Set the DC power supply to 5V and connect the DC power supply to the V CC  test point (TP1). Connect the ground terminal of the 5V supply to the GND test point (TP2).
- 3) Turn on the power supply.
- 4) Set the signal/function generator to output a 25MHz 0V-to-5V square wave.
- 5) Connect the signal/function generator to the DI test point (TP7).
- 6) Using the oscilloscope, verify that the Y (TP11), Z (TP12), and RO (TP4) outputs switch as the DI signal toggles.

Ordering Information appears at end of data sheet.

<!-- image -->

## Detailed Description of Hardware

The MAX22507E EV kit is a fully assembled and tested circuit  board  for  evaluating  the  MAX22507E  high  speed full-duplex  RS-485/RS-422  transceiver  (U1).  The  EV  kit can  be  powered  from  a  single  supply  and  can  be  used for standalone evaluation or can be connected (using the on-board  terminal  block)  to  an  RS-485/RS-422  network for easy in-system evaluation. The MAX22508E does not feature the driver enable (DE) or receiver enable ( RE ) pins. To emulate the functional performance of the MAX22508E, tie DE high (J4 is 1-2) and RE low (J2 is 2-3).

## Driver and Receiver Enable

The  EV  kit  features  three  jumpers  (J2,  J4,  and  J5)  to enable/disable the driver and receiver outputs. Set J2 to low (2-3) to enable the receiver. Set J4 to high (1-2) to enable the driver.

To actively  control  both  enables,  remove  the  J2  and  J4 jumpers  and  close  J5.  Note  that  J5  is  not  installed,  by default. Install the J5 jumper to use this funcitonality.

## Loopback Configuration

To test the MAX22507E in a loopback configuration, close the J13 and J15 jumpers. J13 connects the A input to the Y output. J15 connects the B input to the Z output.

## Termination for an End-of-Line Transceiver

The MAX22507E EV kit includes 120Ω termination resistors between the Y and Z driver outputs (R6) and between the A and B receiver inputs (R7) on the MAX22507E.

## Table 1. Jumper Table (J3 -J6, J8, J14)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                 |
|----------|------------------|-------------------------------------------------------------|
| J2       | 1-2              | RE is high. The RS-485 receiver is disabled.                |
| J2       | 2-3*             | RE is low. The RS-485 receiver is enabled.                  |
| J4       | 1-2*             | DE is high. The RS-485 driver outputs are enabled.          |
| J4       | 2-3              | DE is low. The RS-485 driver outputs are disabled.          |
| J5       | Open*            | DE and RE are not connected together. J5 is DNI by default. |
| J5       | Closed           | DE and RE are connected together.                           |
| J13      | Open             | A is not connected to Y.                                    |
| J13      | Closed*          | A is connected to Y.                                        |
| J15      | Open             | B is not connected to Z.                                    |
| J15      | Closed*          | B is connected to Z.                                        |

*Default position.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX22507EEVKIT# | EV Kit |

#Denotes RoHS compliance.

│

## MAX22507E EV Kit Bill of Materials

|   ITEM | REF_DES              | DNI/DNP   |   QTY | MFG PART #                                                                                                                                  | MANUFACTURER                                                                       | VALUE         | DESCRIPTION                                                                                                                                                                   |
|--------|----------------------|-----------|-------|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 | C1                   |           |     1 | GRM21BR61A106KE19; ECJ-2FB1A106; CL21A106KPCLQNC; GRM219R61A106KE44                                                                         | MURATA;PANASONIC;SAMSUNG ELECTRONICS;MURATA                                        | 10UF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=- 55 DEGC TO +85 DEGC; TC=X5R                                                                             |
|      2 | C2                   |           |     1 | C0603C104K5RAC; C1608X7R1H104K; ECJ-1VB1H104K; GRM188R71H104KA93; CGJ3E2X7R1H104K080AA; C1608X7R1H104K080AA; CL10B104KB8NNN; CL10B104KB8NFN | KEMET;TDK;PANASONIC;MURATA; TDK;TDK;SAMSUNG ELECTRO- MECHANICS;SAMSUNG ELECTRONICS | 0.1UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                                                                                   |
|      3 | J2, J4               |           |     2 | PCC03SAAN                                                                                                                                   | SULLINS                                                                            | PCC03SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                      |
|      4 | J8, J9               |           |     2 | 5-1634503-1                                                                                                                                 | TE CONNECTIVITY                                                                    | 5-1634503-1   | CONNECTOR; FEMALE; THROUGH HOLE; LOW PROFILE BNC PCB SOCKET; STRAIGHT; 5PINS                                                                                                  |
|      5 | J13, J15             |           |     2 | PCC02SAAN                                                                                                                                   | SULLINS                                                                            | PCC02SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                      |
|      6 | J14                  |           |     1 | OSTTC060162                                                                                                                                 | ON-SHORE TECHNOLOGY INC                                                            | OSTTC060162   | CONNECTOR; FEMALE; THROUGH HOLE; OSTTC-5.0 SERIES 2-INTERLOCK; RIGHT ANGLE; 6PINS                                                                                             |
|      7 | R2, R6               |           |     2 | CRCW0805120RFK                                                                                                                              | VISHAY DALE                                                                        | 120 100PPM;   | RESISTOR; 0805; 120 OHM; 1%; 0.125W; THICK FILM                                                                                                                               |
|      8 | R4, R5, R9, R10, R12 |           |     5 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00                                                                                                  | VISHAY DALE;ROHM;PANASONIC                                                         | 0             | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                          |
|      9 | SPACER1-SPACER4      |           |     4 |                                                                                                                                             | 9032 KEYSTONE                                                                      | 9032          | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                     |
|     10 | TP1                  |           |     1 |                                                                                                                                             | 5010 KEYSTONE                                                                      | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                         |
|     11 | TP2, TP3, TP10, TP13 |           |     4 |                                                                                                                                             | 5011 KEYSTONE                                                                      | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                       |
|     12 | TP4-TP9, TP11, TP12  |           |     8 |                                                                                                                                             | 5014 KEYSTONE                                                                      | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                      |
|     13 | U1                   |           |     1 | MAX22507EAUB+                                                                                                                               | MAXIM                                                                              | MAX22507EAUB+ | EVKIT PART - IC; 50MBPS FULL- DUPLEX RS-485/RS-422 TRANSCEIVERS WITH HIGH EFT IMMUNITY; PACKAGE OUTLINE DRAWING: 21-0061; PACKAGE CODE: U10+6C; PACKAGE LAND PATTERN: 90-0330 |
|     14 | PCB                  |           |     1 | MAX22507E                                                                                                                                   | MAXIM                                                                              | PCB           | PCB:MAX22507E                                                                                                                                                                 |
|     15 | C3, C4               | DNP       |     0 | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV                                                       | KEMET;MURATA;TDK;SAMSUNG ELECTRONIC;TAIYO YUDEN                                    | 0.01UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                   |
|     16 | J1                   | DNP       |     0 | PBC06SAAN                                                                                                                                   | SULLINS ELECTRONICS CORP.                                                          | PBC06SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                                                                              |
|     17 | J3, J6, J7, J10-J12  | DNP       |     0 | 131-5031-00                                                                                                                                 | TEKTRONIX                                                                          | 131-5031-00   | CONNECTOR; WIREMOUNT; 3 GHZ 20X LOW CAPACITANCE PROBE; STRAIGHT; 5PINS                                                                                                        |
|     18 | J5                   | DNP       |     0 | PCC02SAAN                                                                                                                                   | SULLINS                                                                            | PCC02SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                      |
|     19 | R1, R3               | DNP       |     0 | CRCW0402100RFK; 9C04021A1000FL; RC0402FR-07100RL                                                                                            | VISHAY DALE;PANASONIC; YAGEO PHYCOMP                                               | 100           | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                       |
|     20 | R7, R8               | DNP       |     0 | CRCW06031K00FK;ERJ-3EKF1001                                                                                                                 | VISHAY DALE;PANASONIC                                                              | 1K            | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                             |

## MAX22507E EV Kit Schematic

<!-- image -->

## MAX22507E EV Kit PCB Layout Diagrams

MAX22507E EV Kit-Top Silkscreen

<!-- image -->

MAX22507E EV Kit-Bottom Layer

<!-- image -->

MAX22507E EV Kit-Top Layer

<!-- image -->

MAX22507E EV Kit-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitr\ and speci¿cations without notice at an\ time.

<!-- image -->

│

Evaluates: MAX22507E/MAX22508E