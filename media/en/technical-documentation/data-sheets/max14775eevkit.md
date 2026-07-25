<!-- lastmod 2022-08-02 -->
## MAX14775E Evaluation Kit

## General Description

The MAX14775E evaluation kit (EV kit) is a fully assembled and  tested  PCB  that  demonstrates  the  functionality  of the  MAX14775  20Mbps  RS-485/RS-422  fault-protected transceiver.

The MAX14775E EV kit may also be used to evaluate the MAX14776E.

## Features

- Operates From a Single 3V to 5V Supply
- Terminal Block Connectors for Easy RS-485/RS-422 Evaluation
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX14775E EV kit
- 3.3V, 500mA DC power supply
- Signal/function generator
- Oscilloscope

Ordering Information appears at end of data sheet.

Evaluates: MAX14775E/MAX14776E

## Startup Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

- 1) Set the DC power supply to 3.3V and connect the DC power supply between the VCC and GND connectors on the EV kit.
- 2) Ensure that all jumpers are in their default positions (see Table 1).
- 3) Connect the oscilloscope probes to the A, B, and RO test points on the EV kit.
- 4) Turn on the power supply.
- 5) Set the signal/function generator to output a 1MHz 0-to-3.3V square wave.
- 6) Connect the signal/function generator to the DI test point.
- 7) Using the oscilloscope, verify that the A, B and RO outputs switch as the signal on DI toggles.

<!-- image -->

## Detailed Description of Hardware

The EV kit is a fully assembled and tested circuit board for evaluating  the  MAX14775E high speed RS-485/RS-422 transceiver (U1). The EV kit has been designed to allow for  evaluating  the  MAX14775E  alone  or  in  a  standard RS-485 network.

## Driver and Receiver Enable Selection

The  EV  kit  features  three  jumpers  (J1,  J4,  and  J5)  to enable/disable  the  driver  and  receiver  outputs.  Set  J4 to 2-3 to enable the receiver. Set J5 to 1-2 to enable the driver. To actively control both enables, remove J4 and J5 shunts and close J1, which connects DE and RE together.

## Resistors R2-R4 Configuration

For  end-of-the-line  transceivers,  close  J2  to  connect a  120Ω  termination  resistor  (R2)  between  the A  and  B RS-485 receiver inputs on the MAX14775E.

Pullup and pulldown resistors are generally used on the receiver inputs to guarantee a known state in the event that  all  nodes  on  the  bus  are  in  receive  mode,  or  the cable becomes disconnected. The exact value for these resistors will vary with the application. R1 and R3 pads are provided for pullup and pulldown resistors on the A and B lines,  if  needed.  The  use  of  any  of  these  resistors  is purely optional. Note that the MAX14775E features true fail-safe  receiver  inputs,  which  ensures  that  RO  is  high when the receiver inputs are shorted, open, or connected to an idle bus.

## Surge Protection

Some industrial applications require extra components on the A and B lines to protect against high voltage surges. Pads  for  D1  and  D2  TVS  diodes  are  included  on  the MAX14775E EV kit  for  this  purpose.  The  use  of  these diodes is completely optional for normal operation.

## Table 1. Jumper Table (J1-J5)

| JUMPER   | SHUNT PO- SITION   | DESCRIPTION                                                            |
|----------|--------------------|------------------------------------------------------------------------|
| J1       | Open*              | DE and RE are not connected together.                                  |
| J1       | Closed             | DE and RE are connected together.                                      |
| J2       | Open*              | A and B are connected through the on-board 120Ω termination resistor.  |
| J2       | Closed             | A and B are not connected through the on-board termina- tion resistor. |
| J4       | 1-2                | RE is high. The RS-485 receiver is disabled.                           |
| J4       | 2-3*               | RE is low. The RS-485 receiver is enabled.                             |
| J5       | 1-2*               | DE is high. The RS-485 driver outputs are enabled.                     |
| J5       | 2-3                | DE is low. The RS-485 driver outputs are disabled.                     |

*Default position.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX14775EEVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX14775E EV Kit Bill of Materials

| ITEM                  | REF_DES   | DNI/DNP QTY   | MFG PART #                                                    | MANUFACTURER                     | VALUE         | DESCRIPTION                                                                                                              |
|-----------------------|-----------|---------------|---------------------------------------------------------------|----------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------|
| 1 C1                  | -         |               | 1 C1608X5R1A106M080AC                                         | TDK                              | 10UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 10V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                 |
| 2 C2                  | -         |               | 1 C0603C104K8RAC                                              | KEMET                            | 0.1UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 10V; TOL=10%; MODEL=C0603 SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R           |
| 3 J1, J2              | -         |               | 2 PCC02SAAN                                                   | SULLINS                          | PCC02SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                 |
| 4 J3                  | -         |               | 1                                                             | 1935789 PHOENIX CONTACT          | 1935789       | CONNECTOR; FEMALE; THROUGH HOLE; SCREW COMPACT TERMINAL BLOCK; RIGHT ANGLE; 3PINS                                        |
| 5 J4, J5              | -         |               | 2 PEC03SAAN                                                   | SULLINS                          | PEC03SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS;                                                               |
| 6 R2                  | -         |               | 1 MCR10EZPJ121                                                | ROHM SEMICONDUCTOR               | 120           | RESISTOR; 0805; 120 OHM; 5%; 200PPM; 0.125W; METAL FILM TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD         |
| 7 TP1-TP5             | -         |               | 5                                                             | 5011 KEYSTONE                    | N/A           | HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                           |
| 8 TP6-TP9, TP11, TP12 | -         |               | 6                                                             | 5014 KEYSTONE                    | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 9 TP10                | -         |               | 1                                                             | 5010 KEYSTONE                    | N/A           | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                       |
| 10 U1                 | -         |               | 1 MAX14775EATA+                                               | MAXIM                            | MAX14775EATA+ | IC; TXRX; +/-65V FAULT PROTECTED 20MBPS HALF-DUPLEX RS- 485/RS-422 TRANSCEIVER; TDFN8-EP                                 |
| 11 PCB                | -         |               | 1 MAX14775E                                                   | MAXIM                            | PCB           | PCB:MAX14775E                                                                                                            |
| 12 D1, D2             | DNP       |               | 0 SMAJ30CA                                                    | ST MICROELECTRONICS              | 30V           | DIODE; TVS; SMA (DO-214AC); VRM=30V; IPP=8.3A                                                                            |
| 13 R1, R3             | DNP       |               | 0 CRCW08051K00FK;ERJ- 6ENF1001V;MCR10EZHF10 01;RC0805FR-071KL | VISHAY DALE;PANASONIC;ROHM;YAGEO | 1K            | RESISTOR; 0805; 1K; 1%; 100PPM; 0.125W; THICK FILM                                                                       |
| TOTAL                 |           |               | 22                                                            |                                  |               |                                                                                                                          |

## MAX14775E EV Kit Schematic

<!-- image -->

│

## MAX14775E EV Kit PCB Layouts

<!-- image -->

MAX14775E EV Kit-Top Silkscreen

MAX14775E EV Kit-Top

<!-- image -->

MAX14775E EV Kit-Bottom

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                             | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------|-----------------|
|                 0 | 11/16           | Initial release                         | -               |
|                 1 | 10/18           | Updated Bill of Materials and Schematic | 3-4             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront. html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are imSOied  0a[im ,nteJrated reserYes the riJht to FhanJe the FirFXitr\ and sSeFi¿Fations withoXt notiFe at an\ time

│

Evaluates: MAX14775E/MAX14776E