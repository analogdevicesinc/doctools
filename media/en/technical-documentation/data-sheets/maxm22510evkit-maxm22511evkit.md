<!-- lastmod 2022-08-04 -->
## MAXM22510/MAXM22511 Evaluation Kit

## General Description

The MAXM22510/MAXM22511 evaluation kit (EV kit) is a fully  assembled  and  tested  PCB  that  demonstrates  the functionality  of  the  MAXM22510/MAXM22511  isolated RS-485/RS-422 transceiver module. The EV kit operates from a single 3.3V supply.

## Features

- Operates From a Single 3.3V Supply
- Terminal Block Connectors for Easy RS-485/RS-422 Evaluation
- Up to 2500V RMS  Isolation for 60s
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAXM22510/MAXM22511 EV kit
- 3.3V, 300mA DC power supply
- Signal/function generator
- Oscilloscope

Ordering Information appears at end of data sheet.

Evaluates: MAXM22510/MAXM22511

## Startup Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

- 1) Set the DC power supply to 3.3V and connect the DC power supply between the EV kits V DDA  and GNDA connectors.
- 2) Ensure that all jumpers are in their default positions (see Table 1).
- 3) Turn on the power supply.
- 4) Set the signal/function generator to output a 100kHz
5. 0-to-3.3V square wave. NOTE: Set the signal/function generator to operate with a high-impedance load. If needed, the R1 pad is available to add a 50Ω impedance to ground.
- 5) Connect the signal/function generator to the TXD test point.
- 6) Using the oscilloscope, verify that the Y, Z, and RXD outputs switch as the TXD signal toggles.

<!-- image -->

## MAXM22510/MAXM22511 Evaluation Kit

## Detailed Description of Hardware

The EV kit is a fully assembled and tested circuit board for  evaluating  the  MAXM22510/MAXM22511  isolated RS-485/RS-422  transceiver  module  (U1).  The  EV  kit is  designed  to  evaluate  the  MAXM22510/MAXM22511 alone or in a standard RS-485 configuration.

## Powering the Board

The  MAXM22510/MAXM22511  operates  from  a  single supply. Connect an external 3.3V supply to the V DDA  test point (TP6). Connect the ground terminal of the supply to the GNDA test point (TP7). The integrated DC/DC in the MAXM22510/MAXM22511 generates the isolated power for the B-side/isolated side of the board.

## Evaluating the Isolated RS-485 Interface

## Driver and Receiver Enable Selection

The EV kit features two jumpers (J2 and J4) to enable/ disable the driver and receiver outputs.

To enable the driver outputs (Y and Z), set the J4 jumper to 1-2 ('H').  Set J4 to 2-3 to disable the Y and Z outputs.

To enable the receiver on the MAXM22510/MAXM22511, set the J2 jumper to 2-3 ('L'). Set J2 to 1-2 to disable the receiver.

## Enabling/Disabling Shutdown Mode

In shutdown mode, the internal DC/DC is disabled and no power is generated on the isolated side of the board. The J3 jumper is available to enable/disable shutdown mode for  the  MAXM22510/MAXM22511. Set the J3 jumper to 2-3 for normal operation. Set J3 to 1-2 to enter shutdown mode.

The SBA output is high impedance during shutdown and is not pulled high. The R6 pad on the board is available to add a pull-up resistor to SBA if SBA must be high when the MAXM22510/MAXM22511 is in shutdown mode.

## Loopback Configuration

The MAXM22510/MAXM22511 features one drive channel and one receive channel. Driver outputs are Y and Z and receiver inputs are A and B. To configure the device for  loopback testing, close J7 and J8 to connect B to Z and A to Y, respectively.

## Evaluates: MAXM22510/MAXM22511

## On-Board Resistor Configurations

To  evaluate  the  MAXM22510/MAXM22511  at  the  endof-the-line in a RS-485/RS-422 bus, close J6 to connect a  120Ω  termination  resistor  (R3)  between  the A  and  B RS-485 receiver inputs.

Close  J5  to  connect  a  120Ω  termination  resistor  (R2) between the Y and Z driver outputs.

Pullup and pulldown resistors are generally used on the receiver inputs to guarantee a known state in the event that  all  nodes  on  the  bus  are  in  receive  mode,  or  the cable becomes disconnected. The exact value for these resistors varies with the application. R7 and  R9  pads  are provided for pullup and pulldown resistors on the Y and Z  lines.  R10  and  R12  pads  provide  for  pullup  and  pulldown resistors on the A and B lines, if needed. The use of any of these resistors is purely optional. Note that the MAXM22510/MAXM22511 features true fail-safe receiver inputs, which ensures that RXD is high when the receiver inputs  are  shorted,  open,  or  connected  to  an  idle  bus.

## RS-485 Interface Protection

The MAXM22510/MAXM22511 RS-485 interface pins (Y, Z, A and B) feature internal ESD protection up to ±35kV ESD (HBM), ±18kV ESD (Air gap), ±8kV ESD (Contact). SM712 TVS diodes have been added to the I/O lines for added protection up to ±30kV ESD (Air) and ±30kV ESD (Contact). The SMT712 is also rated for protection against EFT up to 40A (5/50ns).

## Optimized EMI Layout

The MAXM22510/MAXM22511 EV kit has been designed for easy  evaluation and  is not optimized for  EMI performance/evaluation.  See  the  Design  Resources  tab on  the  MAXM22510/MAXM22511  web  page  for  more information about best design practices for optimum EMI performance.

## MAXM22510/MAXM22511 Evaluation Kit

## Table 1. Jumper Table (J2-J8)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                               |
|----------|------------------|---------------------------------------------------------------------------|
| J2       | 1-2              | RE is high. The RS-485 receiver is disabled.                              |
| J2       | 2-3*             | RE is low. The RS-485 receiver is enabled.                                |
| J3       | 1-2              | SD is high. The MAXM22510/MAXM22511 is in shutdown mode.                  |
| J3       | 2-3*             | SD is low. The MAXM22510/MAXM22511 is not in shutdown mode.               |
| J4       | 1-2*             | DE is high. The RS-485 driver outputs are enabled.                        |
| J4       | 2-3              | DE is low. The RS-485 driver outputs are disabled.                        |
| J5       | Open             | Y and Z are not connected through the on-board 120Ω termination resistor. |
| J5       | Closed*          | Y and Z are connected through the on-board 120Ω termination resistor.     |
| J6       | Open             | A and B are not connected through the on-board 120Ω termination resistor. |
| J6       | Closed*          | A and B are connected through the on-board 120Ω termination resistor.     |
| J7       | Open*            | B is not connected to Z.                                                  |
| J7       | Closed           | B is connected to Z.                                                      |
| J8       | Open*            | A is not connected to Y.                                                  |
| J8       | Closed           | A is connected to Y.                                                      |

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXM22510EVKIT# | EV Kit |
| MAXM22511EVKIT# | EV Kit |

Evaluates: MAXM22510/MAXM22511

│

## MAXM22510/MAXM22511 EV Kit Bill of Materials

| ITEM REF_DES                | DNI/DNP QTY MFG PART #   | DNI/DNP QTY MFG PART #                                                               | MANUFACTURER                      | VALUE                          | DESCRIPTION                                                                                                                   |
|-----------------------------|--------------------------|--------------------------------------------------------------------------------------|-----------------------------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| 1 C7                        | -                        | 1 EEE-HA1A470WR                                                                      | PANASONIC                         | 47UF                           | CAPACITOR; SMT (CASE_C); ALUMINUM-ELECTROLYTIC; 47UF; 10V; TOL=20%; MODEL=HA SERIES; TG=-40 DEGC to +105 DEGC; TC=            |
| 2 J2-J4                     | -                        | 3 PCC03SAAN                                                                          | SULLINS                           | PCC03SAAN                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; 65 DEGC TO +125 DEGC                                       |
| 3 J5-J8                     | -                        | 4 PEC02SAAN                                                                          | SULLINS                           | PEC02SAAN                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                     |
| 4 J9                        | -                        | 1                                                                                    | 1935200 PHOENIX CONTACT           |                                | 1935200 CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 6PINS                                                |
| 5 J10, J11                  | -                        | 2 142-0701-851                                                                       | JOHNSON COMPONENTS                | 142-0701-851                   | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                                   |
| 6 R2, R3                    | -                        | 2 CRCW0603120RJN                                                                     | VISHAY DALE                       |                                | 120 RESISTOR; 0603; 120 OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                    |
| 7 TP1, TP2, TP3, TP13-TP16  | -                        | 7                                                                                    | 5014 N/A                          |                                | 5014 TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 8 TP4, TP7, TP8, TP10, TP11 | -                        | 5                                                                                    | 5011 N/A                          |                                | 5011 TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
| 9 TP6, TP9, TP12            | -                        | 3                                                                                    | 5010 KEYSTONE                     | N/A                            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                         |
| 10 U1                       | -                        | 1 MAXM22510GLH+ OR MAXM22511GLH+                                                     | MAXIM                             | MAXM22510GLH+ OR MAXM22511GLH+ | IC; TXRXMOD; 2.5KVRMS COMPLETE ISOLATED RS-485/RS-422 MODULE TRANSCEIVER + POWER; LGA44                                       |
| 11 U2, U3                   | -                        | 2 SM712.TCT                                                                          | SEMTECH                           | SM712.TCT                      | IC; PROT; ASYMMETRICAL TVS DIODE FOR EXTENDED COMMON-MODE RS-485; SOT23-3                                                     |
| 12 PCB                      | -                        | 1 MAXM22510/MAXM22511                                                                | MAXIM                             | PCB                            | PCB:MAXM22510/MAXM22511                                                                                                       |
| 13 C1, C4, C6               | DNP                      | 0 GRM188R71E105KA12;CGA3E1X7R1E105K;TM K107B7105KA;06033C105KAT2A;GCM188R71E 105KA64 | MURATA;TDK;TAIYO YUDEN;AVX;MURATA | 1UF                            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                      |
| 14 C2, C3, C5               | DNP                      | 0 C1608X7R1E104K080AA                                                                | TDK                               | 0.1UF                          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                    |
| 15 C10                      | DNP                      | 0 VJ2220Y332KXUSTX1                                                                  | VISHAY VITRAMON                   | 3300PF                         | CAP; SMT (2220); 3300PF; 10%; 250V; X7R; CERAMIC CHIP                                                                         |
| 16 C11                      | DNP                      | 0 GA352QR7GF102KW01                                                                  | MURATA                            | 1000PF                         | CAP; SMT (2211); 1000PF; 10%; 250V; X7R; CERAMIC CHIP                                                                         |
| 17 J1                       | DNP                      | 0 PBC08SAAN                                                                          | SULLINS ELECTRONICS CORP.         | PBC08SAAN                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS; -65 DEGC TO +125 DEGC                                              |
| 18 R1, R5                   | DNP                      | 0 CRCW060349R9FK                                                                     | VISHAY DALE                       |                                | 49.9 RESISTOR; 0603; 49.9 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                  |
| 19 R4                       | DNP                      | 0 CRCW12100000Z0                                                                     | VISHAY DALE                       |                                | 0 RESISTOR; 1210; 0 OHM; 0%; JUMPER; 0.5W; THICK FILM                                                                         |
| 20 R6                       | DNP                      | 0 CRCW060310K0FK;ERJ-3EKF1002                                                        | VISHAY DALE;PANASONIC             | 10K                            | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                            |
| 21 R7, R9, R10, R12         | DNP                      | 0 CRCW06031K00FK;ERJ-3EKF1001                                                        | VISHAY DALE;PANASONIC             | 1K                             | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                             |
| TOTAL                       |                          | 32                                                                                   |                                   |                                |                                                                                                                               |

## MAXM22510/MAXM22511 EV Kit Schematic

<!-- image -->

## MAXM22510/MAXM22511 EV Kit PCB Layout Diagrams

<!-- image -->

MAXM22510/MAXM22511 EV Kit-Top Silkscreen

<!-- image -->

MAXM22510/MAXM22511 EV Kit-Bottom

MAXM22510/MAXM22511 EV Kit-Top

<!-- image -->

MAXM22510/MAXM22511 EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAXM22510/MAXM22511 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                      | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/18            | Initial release                                                                                                                                                                                                                  | -               |
|                 1 | 1/19            | Update the Title on all pages to add MAXM22510 and to all sections where MAXM22511 is also mentioned; updated Table 1, the Bill of Materials, Schematic, PCB Layout, and added MAXM22510EVKIT# to the Ordering Information table | 1-7             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are imSlied. 0a[im ,ntegrated reserYes the right to change the circuitr\ and sSeci¿cations without notice at an\ time.

│

Evaluates: MAXM22510/MAXM22511