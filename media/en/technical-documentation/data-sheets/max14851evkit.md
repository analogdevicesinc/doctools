<!-- lastmod 2022-08-02 -->
## MAX14851 Evaluation Kit

## General Description

The MAX14851 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the functionality of  the  MAX14851  6-channel  digital  isolator  in  a  16-pin QSOP package. The EV kit features an on-board isolated power supply and is powered from a single supply.

## Features

- Operates from a Single Supply
- 600VRMS Isolation for 60s
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX14851

## Quick Start

## Required Equipment

- MAX14851 EV kit
- 5V DC power supply
- Signal/function generator
- Oscilloscope

## Startup Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Set the power supply to 5V and connect it to the EV kit board between the 5V and GNDA test points (TP1 and TP2, respectively).
- 2) Turn on the power supply.
- 3) Connect a function/signal generator to the INA1 test point (TP3) and set the output to a 1MHz 0 to 5V square wave. Verify that the signal on OUTB1 (TP4) switches as the input signal toggles.

<!-- image -->

## MAX14851 Evaluation Kit

## Detailed Description of Hardware

The  MAX14851  EV  kit  is  a  fully  assembled  and  tested circuit  board  for  evaluating  the  MAX14851  6-channel digital isolator (U1) in a 16-pin QSOP package.

## Powering the MAX13851 EV Kit

The  MAX14851  EV  kit  includes  an  on-board  MAX258 isolated power supply circuit to transfer powert from the A-side  of  the  board  to  the  B-side.  Connect  an  external supply  to  the  5V  (TP1)  and  GNDA  (TP2)  test  points. An on-board MAX258 H-bridge driver circuit (U3) and a MAX8881 LDO (U2) generate an isolated 3.3V supply to power the secondary (B) side of the board.

To  bypass  the  MAX258  circuit  and  power  the  board  with external supplies, remove the shunts on the J1 and J2 jumpers. Connect a supply between 3V and 5.5V to the 5V test point (TP1), this powers the A-side of the board (V CCA ). Connect a supply between 3V and 5.5V to the 3.3V test point (TP24) to power the B-side of the board (V CCB ) .

## Evaluating the MAX14851

The EV kit is powered from a single 5V and is desiged to be evaluated alone or dropped into an existing circuit for easy in-system analysis.

All inputs (INA\_, INB\_) and I/O pins (I/OA\_, I/OB\_) have an associated test  point.  Connect  a  signal  generator  to the test point for the desired input and monitor the signal on the output of that channel.

## Evaluating the MAX14851 in an Isolated RS-485 Configuration

Figure  1  shows  a  simplified  connection  diagram  for evaluating the MAX14851  in an isolated RS-485 circuit. The high-speed unidirectional channels are  used  for  data  channels  DI  and  RO.  Bidirectional channels can be used for the enable lines (DE and RE ), where lower speed is acceptable.

Figure 1. Simplified Connection Diagram for Evaluating the MAX14851 in an Isolated RS-485 Configuration

<!-- image -->

│

## MAX14851 Evaluation Kit

## Evaluating the MAX14851 in an Isolated RS-232 Configuration

Figure 2 is a simplified connection diagram for evaluating the MAX14851 in an isolated RS-232 configuration.

Evaluates: MAX14851

## Evaluating the MAX14851 in an Isolated I 2 C Configuration

Figure 3 is a simplified connection diagram for evaluating the MAX14851 in an isolated I 2 C interface. The bidirectional channels with pullups are used to level shift the data and clock signals and transmits them across the isolation barrier.

Figure 2. Simplified Connection Diagram for Evaluating the MAX14851 in an Isolated RS-232 Configuration

<!-- image -->

Figure 3. Simplified Connection Diagram for Evaluating the MAX14851 in an Isolated I 2 C Configuration

<!-- image -->

│

## Evaluating the MAX14851 in an Isolated SPI/MICROWIRE ® Configuration

Figure  4  is  a  simplified  connection  diagram  for  evaluating  the  MAX14851  in  an  isolated  SPI/MICROWIRE  interface. High speed and bidirectional channels are used to level shift the data and clock signals and transmits them across the isolation barrier.

Figure 4. Simplified Connection Diagram for Evaluating the MAX14851 in an Isolated SPI Configuration

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14851EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX14851 EV Kit Bill of Materials

|   ITEM | REF_DES        | DNI/DNP   |   QTY | MFGPART#                                                         | MANUFACTURER                  | VALUE          | DESCRIPTION                                                                                                                   |
|--------|----------------|-----------|-------|------------------------------------------------------------------|-------------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------|
|      1 | C1             | -         |     1 | TMK212BBJ106KG-T; CL21A106KAFN3N                                 | TAIYO YUDEN                   | 10µF           | CAPACITOR; SMT (0805); CERAMIC CHIP; 10µF; 25V; TOL = 10%; MODEL = ; TG = -55°C TO +85°C; TC = X5R                            |
|      2 | C2             | -         |     1 | C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K; EMK107B7105KA | KEMET/MURATA/ TDK/TAIYO YUDEN | 1µF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 16V; TOL = 10%; MODEL = ; TG = -55°C TO +125°C; TC = X7R                            |
|      3 | C3             | -         |     1 | GRM219R71E105K                                                   | MURATA                        | 1µF            | CAPACITOR; SMT (0805); CERAMIC CHIP; 1µF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                      |
|      4 | C4             | -         |     1 | GRM21BR71A475KA73; LMK212B7475KG-T; C2012X7R1A475K125AC          | MURATA; TAIYO YUDEN; TDK      | 4.7µF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7µF; 10V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                    |
|      5 | C5, C6         | -         |     2 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA          | MURATA; TDK                   | 0.1µF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R; AUTO                              |
|      6 | C7             | -         |     1 | GRM188R60J105KA01                                                | MURATA                        | 1µF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 6.3V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C TO +85°C; TC = X5R;                 |
|      7 | D2, D3         | -         |     2 | MBR140SFT1G                                                      | ON SEMICONDUCTOR              | MBR140SFT1G    | DIODE; SCH; SMT (SOD-123FL); PIV = 40V; IF = 1A                                                                               |
|      8 | J1, J2         | -         |     2 | TSW-102-23-G-S                                                   | SAMTEC                        | TSW-102-23-G-S | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 2PINS; -55°C TO +125°C                                                         |
|      9 | J3             | -         |     1 | TSW-103-23-G-S                                                   | SAMTEC                        | TSW-103-23-G-S | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS; -55°C TO +125°C                                                         |
|     10 | R5-R8          | -         |     4 | CRCW06032K0FK; ERJ-3EKF2001V                                     | VISHAY DALE/PANASONIC         | 2K             | RESISTOR, 0603, 2K Ω , 1%, 100PPM, 0.10W, THICK FILM                                                                          |
|     11 | T1             | -         |     1 | 750315090                                                        | WURTH ELECTRONICS INC         | 750315090      | TRANSFORMER; SMT; 1:1; MID-PPMAX PUSH-PULL TRANSFORMER;                                                                       |
|     12 | TP1, TP24      | -         |     2 | 5010                                                             | KEYSTONE                      | N/A            | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                            |
|     13 | TP2, TP21-TP23 | -         |     4 | 5011                                                             | KEYSTONE                      | N/A            | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     14 | TP3-TP14       | -         |    12 | 5012                                                             | KEYSTONE                      | N/A            | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     15 | U1             | -         |     1 | MAX14851AEE+                                                     | MAXIM                         | MAX14851AEE+   | EVKIT PART-IC; DISO; SIX-CHANNEL DIGITAL ISOLATOR; QSOP16                                                                     |
|     16 | U2             | -         |     1 | MAX8881EUT33+                                                    | MAXIM                         | MAX8881EUT33   | IC; VREG; ULTRA-LOW-IQ, LOW-DROPOUT LINEAR REGULATORS WITH POK; SOT23-6                                                       |
|     17 | U3             | -         |     1 | MAX258ATA+                                                       | MAXIM                         | MAX258ATA+     | IC; DRV; 0.5A; PUSH-PULL TRANSFORMER DRIVER FOR ISOLATED POWER SUPPLY; TDFN8-EP 2X3                                           |
|     18 | PCB            | -         |     1 | MAX14851                                                         | MAXIM                         | PCB            | PCB:MAX14851                                                                                                                  |
|     19 | J4, J5         | DNP       |     0 | PBC08SAAN                                                        | SULLINS ELECTRONICS CORP.     | PBC08SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS; -65°C TO +125°C                                                    |
|     20 | R1-R4          | DNP       |     0 | N/A                                                              | N/A                           | OPEN           | RESISTOR; 0603; OPEN; FORMFACTOR                                                                                              |

Evaluates: MAX14851

## MAX14851 EV Kit Schematic

<!-- image -->

Evaluates: MAX14851

## MAX14851 EV Kit PCB Layout Diagrams

MAX14851 EV Kit-PCB Silkscreen Top Side

<!-- image -->

MAX14851 EV Kit-PCB Layout Top Side

<!-- image -->

MAX14851 EV Kit-PCB Layout Bottom Side

<!-- image -->

MAX14851 EV Kit-PCB Silkscreen Bottom Side

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/17           | Initial release | -               |

For information on other Maxim Integrated products, visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

<!-- image -->

│

Evaluates: MAX14851