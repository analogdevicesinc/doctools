<!-- lastmod 2023-05-30 -->
## MAX22506E Evaluation Kit

## General Description

The MAX22506E evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the functionality of the MAX22506E  half-duplex,  high  speed  RS-485/RS-422 transceiver. The EV kit operates from a single 3V to 5.5V supply and includes selectable on-board termination.

## Features

- Operates From a Single 3V to 5.5V Supply
- Terminal Block Connectors for Easy RS-485/RS-422 Evaluation
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX22506E EV kit
- 3.3V, 500mA DC power supply
- 50MHz Signal/function generator
- Oscilloscope

319-100683; Rev 0; 2/21

Evaluates: MAX22506E

## Startup Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

- 1) Ensure that all jumpers are in their default positions (see Table 1).
- 2) Set the DC power supply to 3.3V and connect the DC power supply between VCC (TP1) and GND (TP2) test points on the EV kit.
- 3) Connect the oscilloscope probes to the DI input (TP7), A (TP8), B(TP9), and RO (TP4).
- 4) Turn on the power supply.
- 5) Set the signal/function generator to output a 25MHz 0-to-3V square wave.
- 6) Connect the signal/function generator to the DI test point.
- 7) Using the oscilloscope, verify that the A, B, and ROoutputs switch as the DI signal toggles.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX22506E Evaluation Kit

## Detailed Description of Hardware

The MAX22506E EV kit is a fully assembled and tested circuit board for evaluating the MAX22506E high-speed, half-duplex  RS-485/RS-422  transceiver  (U1).  The  EV kit  can  be  used  for  standalone  evaluation  or  can  be connected  (using  the  on-board  terminal  block)  to  an RS-485/RS-422 network for easy in-system evaluation.

## Driver and Receiver Enable Selection

The  EV  kit  features  three  jumpers  (J2,  J4,  and  J5)  to enable/disable the driver and receiver outputs. Set J2 to low (2-3) to enable the receiver. Set J4 to high (1-2) to enable the driver.

Table 1. Jumper Table (J2, J4, J5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                        |
|----------|------------------|----------------------------------------------------|
| J2       | 1-2              | RE is high. The RS-485 receiver is disabled.       |
| J2       | 2-3*             | RE is low. The RS-485 receiver is enabled.         |
| J4       | 1-2*             | DE is high. The RS-485 driver outputs are enabled. |
| J4       | 2-3              | DE is low. The RS-485 driver outputs are disabled. |
| J5       | Open*            | DE and RE are not connected together.              |
| J5       | Closed           | DE and RE are connected together.                  |

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX22506EEVKIT# | EV Kit |

Evaluates: MAX22506E

To actively  control  both  enables,  remove  the  J2  and  J4 shunts and close J5, which connects DE and RE together. J5 is DNI, by default. Install a 2-pin header to use the J5 jumper.

## Termination for an End-of-Line Transceiver

The  MAX22506E  EV  kit  includes  a  120Ω  termination resistor (R2) between the A and B RS-485 driver outputs/ receiver inputs on the MAX22506E.

│

## MAX22506E EV Kit Bill of Materials

| ITEM   | REF_DES          | DNI/DNP QTY   |   DNI/DNP QTY | MFGPART #                                                                                                                                | MANUFACTURER                                                                        | VALUE                                                       | DESCRIPTION                                                                                                                                                                 |
|--------|------------------|---------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|-------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | C1               | -             |             1 | GRM21BR61A106KE19;ECJ-2FB1A106; CL21A106KPCLQNC;GRM219R61A106KE44                                                                        | MURATA;PANASONIC; SAMSUNG ELECTRONICS;MURATA                                        | 10UF                                                        | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                            |
| 2      | C2               | -             |             1 | C0603C104K5RAC;C1608X7R1H104K; ECJ-1VB1H104K;GRM188R71H104KA93; CGJ3E2X7R1H104K080AA; C1608X7R1H104K080AA;CL10B104KB8NNN; CL10B104KB8NFN | KEMET;TDK;PANASONIC;MURATA; TDK;TDK;SAMSUNG ELECTRO- MECHANICS; SAMSUNG ELECTRONICS | 0.1UF                                                       | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF;50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                                                                                  |
| 3      | J2, J4           | -             |             2 | PCC03SAAN                                                                                                                                | SULLINS                                                                             | PCC03SAAN                                                   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                    |
| 4      | J7               | -             |             1 | OSTTC042162                                                                                                                              | ON-SHORE TECHNOLOGY INC                                                             | OSTTC042162                                                 | CONNECTOR; FEMALE; THROUGH HOLE; TERMINAL BLOCK ONE PIECE WIRE PROTECTOR; COLOR BLUE; RIGHT ANGLE; 4PINS                                                                    |
| 5      | J8, J9           | -             |             2 | 5-1634503-1                                                                                                                              | TE CONNECTIVITY                                                                     | 5-1634503-1                                                 | CONNECTOR; FEMALE; THROUGH HOLE; LOW PROFILE BNC PCB SOCKET; STRAIGHT; 5PINS                                                                                                |
| 6      | R2               | -             |             1 | CRCW0805120RFK                                                                                                                           | VISHAY DALE                                                                         | 120 RESISTOR; 0805; 120 OHM; 1%; 100PPM; 0.125W; THICK FILM | 120 RESISTOR; 0805; 120 OHM; 1%; 100PPM; 0.125W; THICK FILM                                                                                                                 |
| 7      | R4-R6            | -             |             3 | CRCW06030000ZS;MCR03EZPJ000; ERJ-3GEY0R00                                                                                                | VISHAY DALE;ROHM; PANASONIC                                                         | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W;                 | THICK FILM                                                                                                                                                                  |
| 8      | SPACER1-SPACER4  | -             |             4 | 9032                                                                                                                                     | KEYSTONE                                                                            | 9032                                                        | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NOTHREAD; M3.5; 5/8IN; NYLON                                                                                                    |
| 9      | TP1              | -             |             1 | 5010                                                                                                                                     | KEYSTONE                                                                            | N/A                                                         | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                       |
| 10     | TP2, TP3, TP10   | -             |             3 | 5011                                                                                                                                     | KEYSTONE                                                                            | N/A                                                         | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                     |
| 11     | TP4-TP9          | -             |             6 | 5014                                                                                                                                     | KEYSTONE                                                                            | N/A                                                         | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                    |
| 12     | U1               | -             |             1 | MAX22506EASA+                                                                                                                            | MAXIM                                                                               | MAX22506EASA+                                               | EVKIT PART - IC; 50MBPS HALF-DUPLEX RS-485/RS-422 TRANSCEIVERS WITH HIGH EFT IMMUNITY; PACKAGE OUTLINE DRAWING: 21-0041; PACKAGE CODE: S8+2C; PACKAGE LAND PATTERN: 90-0096 |
| 13     | PCB              | -             |             1 | MAX22506E                                                                                                                                | MAXIM                                                                               | PCB                                                         | PCB:MAX22506E                                                                                                                                                               |
| 14     | C3, C4           | DNP           |             0 | C0402C103K5RAC;GRM155R71H103KA88; C1005X7R1H103K050BE;CL05B103KB5NNN; UMK105B7103KV                                                      | KEMET;MURATA;TDK; SAMSUNG ELECTRONIC; TAIYO YUDEN                                   | 0.01UF                                                      | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                 |
| 15     | J1               | DNP           |             0 | PBC06SAAN                                                                                                                                | SULLINS ELECTRONICS CORP.                                                           | PBC06SAAN                                                   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                                                                            |
| 16     | J3, J6, J10, J11 | DNP           |             0 | 131-5031-00                                                                                                                              | TEKTRONIX                                                                           | 131-5031-00                                                 | CONNECTOR; WIREMOUNT; 3 GHZ 20X LOW CAPACITANCE PROBE; STRAIGHT; 5PINS                                                                                                      |
| 17     | J5               | DNP           |             0 | PCC02SAAN                                                                                                                                | SULLINS                                                                             | PCC02SAAN                                                   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                    |
| 18     | R1, R3           | DNP           |             0 | CRCW0402100RFK; 9C04021A1000FL; RC0402FR-07100RL                                                                                         | VISHAY DALE;PANASONIC; YAGEO PHYCOMP                                                | 100                                                         | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                     |
| 19     | R7, R8           | DNP           |             0 | CRCW06031K00FK;ERJ-3EKF1001                                                                                                              | VISHAY                                                                              |                                                             |                                                                                                                                                                             |
| TOTAL  |                  |               |            27 |                                                                                                                                          | DALE;PANASONIC                                                                      | 1K                                                          | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                           |

Evaluates: MAX22506E

## MAX22506E EV Kit Schematic

<!-- image -->

Evaluates: MAX22506E

## MAX22506E EV Kit PCB Layout Diagrams

MAX22506E EV Kit-Top Silkscreen

<!-- image -->

MAX22506E EV Kit-Top

<!-- image -->

Evaluates: MAX22506E

│

## MAX22506E EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX22506E EV Kit-Bottom

MAX22506E EV Kit-Bottom Silkscreen

<!-- image -->

Evaluates: MAX22506E

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are imSliedGLYPH&lt;c=17,font=/JIOTZL+ArialMT&gt; Ma[im ,nteJrated reserYes the riJht to chanJe the circuitr\ and sSeci¿cations Zithout notice at an\ timeGLYPH&lt;c=17,font=/JIOTZL+ArialMT&gt;

<!-- image -->

│

Evaluates: MAX22506E