<!-- lastmod 2022-08-02 -->
## MAX22502E Evaluation Kit

## General Description

The MAX22502E evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the functionality of the MAX22502E and the MAX22503E full-duplex high speed RS-485/RS-422 transceiver. The EV kit includes on-board termination for easy point-to-point evaluation. The EV kit is assembled using MAX22502E in a 12-pin TDFN package,  but  also  provides  equivalent  functional  evaluation for  the  MAX22503E,  which  is  offered  in  a  14-pin  SOIC package.

## Features

- Configurable to Operate from a Single 3V to 5V Supply
- Separate Logic Supply (VL) to Interface with Logic Signals as Low as 1.6V
- Terminal Block and RJ45 Connectors for Easy RS-485/RS-422 Evaluation
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX22502E EV kit
- 5V, 500mA DC power supply
- 80MHz signal/function generator
- Oscilloscope

Evaluates: MAX22502E/MAX22503E

## Startup Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

- 1) Ensure that all jumpers are in their default positions (see Table 1).
- 2) Set the DC power supply to 5V and connect the DC power supply to the V CC  test point. Connect the ground terminal of the 5V supply to the GND test point.
- 3) Turn on the power supply.
- 4) Set the signal/function generator to output a 30MHz 0-to-5V square wave.
- 5) Connect the signal/function generator to the DI test point.
- 6) Using the oscilloscope, verify that the Y , Z, and RO outputs switch as the DI signal toggles.

Ordering Information appears at end of data sheet.

<!-- image -->

## Detailed Description of Hardware

The MAX22502E EV kit is a fully assembled and tested circuit  board  for  evaluating  the  MAX22502E  high  speed full-duplex  RS-485/RS-422  transceiver  (U1).  The  EV  kit can  be  powered  from  a  single  supply  and  can  be  used for standalone evaluation or can be connected (using the on-board  terminal  block)  to  an  RS-485/RS-422  network for easy in-system evaluation. The MAX22503E does not feature preemphasis or have a separate logic supply input pin  (V L ).  T o  emulate  the  functional  performance  of  the MAX22503E set switch SW1 to the OFF position and close the J4 jumper to operate with a single supply voltage.

## Powering the Board

The  MAX22502E  includes  two  supplies:  VCC  and  VL, allowing the device to interface with logic signals as low as 1.6V. To operate the EV kit with a single supply, close the J4 jumper to connect VL to VCC (VL = 5V), to operate the EV kit with a single supply. Close the J4 jumper for equivalent functional performance with the MAX22503E.

Open the J4 jumper and connect a separate logic supply to  the  VL  testpoint  (TP6)  to  operate  with  a  logic  supply that is not equal to the VCC voltage.

Ensure that  VCC  =  5V,  when  operating  the  EV  kit  with preemphasis  enabled.  When  preemphasis  is  disabled, connect a supply voltage between 3V and 5V to VCC.

## Driver and Receiver Enable

The  EV  kit  features  three  jumpers  (J3,  J5,  and  J8)  to enable/disable the driver and receiver outputs. Set J3 to low (2-3) to enable the receiver. Set J3 to high (1-2) to enable the driver.

To  actively  control  both  enables,  remove  the  J2  and J3  jumpers  and  close  J8,  which  connects  DE  and RE together.

## Setting the Preemphasis (MAX22502E only)

The MAX22502E features integrated driver preemphasis circuitry for reliable communication higher data rates over longer distances. Preemphasis is set with by connecting a resistor between PSET and ground. The MAX22502E EV kit includes a 15kΩ to set the preemphasis for a 30Mbps data  rate.  Set  the  switch  (SW1)  to  the  ON  position  to enable  preemphasis. To  disable  preemphasis,  set  SW1 to  the  OFF position. Disabling preemphasis and closing the J4 jumper provides equivalent functional performance with the MAX22503E.

## Evaluates: MAX22502E/MAX22503E

## Loopback Configuration

To test the MAX22502E in a loopback configuration, close the J6 and J15 jumpers. J6 connects the A input to the Y output. J15 connects the B input to the Z output.

## Termination for an End-of-Line Transceiver

The MAX22502E EV kit includes 120Ω termination resistors between the Y and Z driver outputs (R6) and between the A and B receiver inputs (R7) on the MAX22502E.

## Table 1. Jumper Table (J3-J6, J8, J14)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                              |
|----------|------------------|--------------------------------------------------------------------------|
| J3       | 1-2              | RE is high. The RS-485 receiver is disabled.                             |
| J3       | 2-3*             | RE is low. The RS-485 receiver is enabled.                               |
| J4       | Open             | VL is not connected to VCC. Connect an external supply to VCC and to VL. |
| J4       | Closed*          | VL is connected to VCC.                                                  |
| J5       | 1-2*             | DE is high. The RS-485 driver outputs are enabled.                       |
| J5       | 2-3              | DE is low. The RS-485 driver outputs are disabled.                       |
| J6       | Open             | A is not connected to Y.                                                 |
| J6       | Closed*          | A is connected to Y.                                                     |
| J8       | Open*            | DE and RE are not connected together.                                    |
| J8       | Closed           | DE and RE are connected together.                                        |
| J15      | Open             | B is not connected to Z.                                                 |
| J15      | Closed*          | B is connected to Z.                                                     |

*Default position.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX22502EEVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX22502E EV Kit Bill of Materials

|   ITEM | REF_DES          | DNI/DNP   |   QTY | MFG PART #                                                        | MANUFACTURER                           | VALUE       | DESCRIPTION                                                                                       | COMMENTS   |
|--------|------------------|-----------|-------|-------------------------------------------------------------------|----------------------------------------|-------------|---------------------------------------------------------------------------------------------------|------------|
|      1 | C1, C2           | -         |     2 | C0603C104K5RAC; C1608X7R1H104K                                    | KEMET; TDK                             | 0.1UF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;       |            |
|      2 | C3               | -         |     1 | GRM21BR61A106KE19L; ECJ-2FB1A1; CL21A106KPCLQNC; GRM219R61A106KE4 | MURATA; PANASONIC; SAMSUNG ELECTRONICS | 10UF        | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=- 55 DEGC TO +85 DEGC; TC=X5R |            |
|      3 | C4, C5           | -         |     2 | C0402C103K5RAC; GRM155R71H103KA88                                 | KEMET/MURATA                           | 0.01UF      | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R       |            |
|      4 | J2, J7           | -         |     2 | 5-1634503-1                                                       | TE CONNECTIVITY                        | 5-1634503-1 | CONNECTOR; FEMALE; THROUGH HOLE; LOW PROFILE BNC PCB SOCKET; STRAIGHT; 5PINS                      |            |
|      5 | J3, J5           | -         |     2 | PCC03SAAN                                                         | SULLINS                                | PCC03SAAN   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC          |            |
|      6 | J4, J6, J15      | -         |     3 | PCC02SAAN                                                         | SULLINS                                | PCC02SAAN   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC          |            |
|      7 | J9               | -         |     1 | 1935200                                                           | PHOENIX CONTACT                        | 1935200     | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 6PINS                            |            |
|      8 | J14              | -         |     1 | SS-7188-NF                                                        | STEWART CONNECTOR                      | SS-7188-NF  | CONNECTOR; FEMALE; THROUGH HOLE; UNSHIELDED CAT 5/5E NON-FLANGE JACK; RIGHT ANGLE; 8PINS          |            |
|      9 | R1               | -         |     1 | CRCW060315K0FK                                                    | VISHAY DALE                            | 15K         | RESISTOR, 0603, 15K OHM,1%, 100PPM, 0.10W, THICK FILM                                             |            |
|     10 | R2, R3           | -         |     2 | CRCW0402100RFK; 9C04021A1000FL; RC0402FR-07100RL                  | VISHAY DALE; PANASONIC; YAGEO PHYCOMP  |             | 100 RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM                                       |            |
|     11 | R6, R7           | -         |     2 | CRCW0805120RFK                                                    | VISHAY DALE                            |             | 120 RESISTOR; 0805; 120 OHM; 1%; 100PPM; 0.125W; THICK FILM                                       |            |
|     12 | R8-R12, R15, R16 | -         |     7 | CRCW06030000ZS; MCR03EZPJ000; ERJ- 3GEY0R00                       | VISHAY DALE/ ROHM/PANASONIC            |             | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                            |            |
|     13 | SW1              | -         |     1 | MHS121                                                            | COPAL ELECTRONICS INC                  | MHS121      | SWITCH; SPDT; THROUGH HOLE; STRAIGHT; 12V; 0.2A; MHS SERIES; RCOIL=500 OHM; RINSULATION=100M OHM  |            |

## MAX22502E EV Kit Bill of Materials (continued)

| ITEM   | REF_DES            | DNI/DNP   |   QTY | MFG PART #                                  | MANUFACTURER                | VALUE         | DESCRIPTION                                                                                                                                  | COMMENTS   |
|--------|--------------------|-----------|-------|---------------------------------------------|-----------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 14     | TP1-TP5, TP11-TP13 | -         |     8 | 5014                                        | KEYSTONE                    | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                     |            |
| 15     | TP6, TP8           | -         |     2 | 5010                                        | KEYSTONE                    | N/A           | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                                           |            |
| 16     | TP7, TP9, TP10     | -         |     3 | 5011                                        | KEYSTONE                    | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                      |            |
| 17     | U1                 | -         |     1 | MAX22502EATC+                               | MAXIM                       | MAX22502EATC+ | EVKIT PART-IC; TDFN12-EP; HIGH SPEED HALF-DUPLEX RS-485 TRANSCEIVER FOR LONG CABLE LENGTH; PACKAGE CODE: TD1233+1C; PACKAGE OUTLINE: 21-0664 |            |
| 18     | PCB                | -         |     1 | MAX22502E                                   | MAXIM                       | PCB           | PCB:MAX22502E                                                                                                                                |            |
| 19     | J1                 | DNP       |     0 | PBC06SAAN                                   | SULLINS ELECTRONICS CORP.   | PBC06SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                                             |            |
| 20     | J8                 | DNP       |     0 | PCC02SAAN                                   | SULLINS                     | PCC02SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                     |            |
| 21     | J10-J13, J16, J17  | DNP       |     0 | 131-5031-00                                 | TEKTRONIX                   | 131-5031-00   | CONNECTOR; WIREMOUNT; 3 GHZ 20X LOW CAPACITANCE PROBE; STRAIGHT; 5PINS                                                                       |            |
| 22     | R4, R5, R13, R14   | DNP       |     0 | CRCW06030000ZS; MCR03EZPJ000; ERJ- 3GEY0R00 | VISHAY DALE/ ROHM/PANASONIC |               | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                       |            |
| TOTAL  |                    |           |    42 |                                             |                             |               |                                                                                                                                              |            |

## MAX22502E EV Kit Schematic

<!-- image -->

## MAX22502E EV Kit PCB Layout Diagrams

MAX22502E EV Kit-Top Silkscreen

<!-- image -->

MAX22502E EV Kit-Bottom

<!-- image -->

MAX22502E EV Kit-Top

<!-- image -->

MAX22502E EV Kit-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                     | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 9/17            | Initial release                                                                                                                                 | -               |
|                 1 | 5/19            | Updated the title, and the General Description, Detailed Description, Powering the Board, and Setting the Preemphasis (MAX22502E only) sections | 1-7             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied  Ma[im ,nteJrated reserYes the riJht to chanJe the circuitr\ and speci¿cations Zithout notice at an\ time

<!-- image -->

│

Evaluates: MAX22502E/MAX22503