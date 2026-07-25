<!-- lastmod 2022-08-04 -->
## MAX12930/MAX12931 Evaluation Kit

## General Description

The MAX12930/MAX12931  evaluation kit (EV kit) provides a proven design to evaluate the MAX12930 or MAX12931 two channel digital isolators. Three types of evaluation  boards  are  available  to  support  the  narrowbody  and  wide-body  package  types.  Two  boards  are fully  assembled,  each  with  a  MAX12931  narrow-body or  MAX12931  wide-body  isolator,  and  the  third  generic board  has  U1  unpopulated  allowing  the  user  to  select a  device  from  the  family  of  narrow-body  MAX12930/ MAX12931 isolators.

The  EV  kit  should  be  powered  from  two  independent isolated  power  supplies  with  nominal  output  voltage  in range  from  1.71V  to  5.5V.  For  evaluating  the  electrical parameters of the device without any isolation between the two sides, a single power supply can also be used.

The MAX1293XSEVKIT# comes with U1 unpopulated and supports the following digital isolators: MAX12930BASA+, MAX12930CASA+,  MAX12930EASA+,  MAX12930FASA+ MAX12931BASA+, MAX12931CASA+, MAX12931EASA+, MAX12931FASA+

Note: When  ordering  the  MAX1293XS  EV  kit  the  engineer should request a sample of the desired unidirectional isolator IC that can be soldered to the PCB.

## Table 1: EV Kit Options

| EVKIT PART #     | TARGET DEVICE   | PACKAGE TYPE       | COMMENT                                     |
|------------------|-----------------|--------------------|---------------------------------------------|
| MAX1293XSEVKIT#  | Not populated   | 8-SOIC narrow-body | Request samples of target device from Maxim |
| MAX12931BSEVKIT# | MAX12931BASA+   | 8-SOIC narrow-body | 25Mbps IC populated                         |
| MAX12931BWEVKIT# | MAX12931BAWE+   | 16-SOIC wide-body  | 25Mbps IC populated                         |

<!-- image -->

Evaluates: MAX12930, MAX12931

## Features

- Broad Range of Data Transfer Rates (from DC to 150Mbps)
- Two Unidirectional Channels in the Same Direction (MAX12930) or Two Unidirectional Channels in the Opposite Direction (MAX12931)
- SMA Connectors for Easy Connection to External Equipment
- Wide Power Supply Voltage Range from 1.71V to 5.5V
- Guaranteed Up to 3.75kV RMS  Isolation (for the Narrow-Body SOIC Package) for 60s
- Guaranteed Up to 5kV RMS  Isolation (for the WideBody SOIC Package) for 60s

Ordering Information appears at end of data sheet.

Figure 1. Narrow-Body MAX12931BS EVKIT

<!-- image -->

Figure 2. Wide-Body MAX12931BW EVKIT

<!-- image -->

│

## MAX12930/MAX12931 Evaluation Kit

## Quick Start

## Required Equipment

- MAX1293XS, or MAX12931BS, or MAX12931BW EV kit
- MAX1293X device, if EV kit is not populated
- Two adjustable +5V DC Power Supplies
- Signal/function generator
- Oscilloscope

## Procedure

The MAX12931BS and MAX12931BW EV kits are fully assembled  and  ready  for  evaluation.  The  MAX1293XS EV kit has everything except the DUT (U1) installed. The user  can  install  the  desired  version  of  the  MAX12930/

## Evaluates: MAX12930, MAX12931

MAX12931  family  of two channel digital isolators. Once  installed,  follow  the  steps  below  to  verify  board functionality:

- 1) Connect the DC power supplies between the MAX1293X EV kit's  V DDA /V DDB   and  GNDA/GNDB test points.
- 2) Turn on the DC power supplies and set them between 1.71V and 5.5V, then enable the power supply output. Note: It is also possible to power the MAX1293X EV kit from a single power supply to test electrical parameters but this invalidates the digital isolation of the IC.
- 3) Connect  the  signal/function  generator  to  the  SMA connectors or test points of side A and observe the isolated  signal  on  the  other  side,  side  B,  using  an oscilloscope.

## Table 2. MAX1293XS and MAX1293XW Board Connectors and Shunt Positions

| CONNECTOR   | SHUNT POSITION   | DESCIPTION                                         |
|-------------|------------------|----------------------------------------------------|
| J1          | 1                | Test point or input header for V DDA               |
| J1          | 2                | Test point or input header for I/O; same as J2 SMA |
| J1          | 3                | Test point or input header for I/O; same as J3 SMA |
| J1          | 4                | Test point or input header for GNDA                |
| J2 (SMA)    | n/a              | I/O on side A                                      |
| J3 (SMA)    | n/a              | I/O on side A                                      |
| J4          | Open             | Use ampere meter to measure current of side A      |
| J4          | 1-2*             | Connect power supply to V DDA                      |
| J5          | Open             | Use ampere meter to measure current of side B      |
| J5          | 1-2*             | Connect power supply to V DDB                      |
| J6 (SMA)    | n/a              | I/O on side B                                      |
| J7 (SMA)    | n/a              | I/O on side B                                      |
| J8          | 1                | Test point or input header for V DDB               |
| J8          | 2                | Test point or input header for I/O; same as J6 SMA |
| J8          | 3                | Test point or input header for I/O; same as J7 SMA |
| J8          | 4                | Test point or input header for GNDB                |

*Default configuration

## Table 3. MAX1293XS and MAX1293XW Test Points

| TEST POINT   | DESCIPTION                     |
|--------------|--------------------------------|
| TP1          | Test point for V DDA           |
| TP1A         | Test point for SMAconnector J2 |
| TP1B         | Test point for SMAconnector J6 |
| TP2, TP3     | Test point for GNDA            |
| TP2A         | Test point for SMAconnector J3 |
| TP2B         | Test point for SMAconnector J7 |
| TP4, TP5     | Test point for GNDB            |
| TP6          | Test point for V DDB           |

│

## MAX12930/MAX12931 Evaluation Kit

## Detailed Description of Hardware

The MAX1293XS or MAX1293XW EV kit is powered from two external adjustable power supplies as described below.

## External Power Supplies

Power to the MAX1293XS or MAX1293XW EV kit is derived from  two  external  sources  which  can  both  be  between +1.71V  and  +5.5V.  Connect  one  source  between  the VDDA  and GNDA test points, and another source between the V DDB  and GNDB test points. Each supply can be set independently  and  can  be  present  over  the  entire  range from 1.71V to 5.5V, regardless of the level or presence of the  other  supply.  The  MAX12930/MAX12931  level-shifts the data, transmitting them across the isolation barrier.

## Evaluates: MAX12930, MAX12931

Two  SMA  connectors  on  each  side  of  the  board  allow easy connections to signal generator(s) and oscilloscope. A typical application diagram is shown in Figure 3.

## Decoupling Capacitors

Each  power  supply  is  decoupled  with  a  10µF  ceramic capacitor placed close to the power supply test point, and a 0.1µF ceramic capacitor placed close to U1.

## Termination

Each  input  and  output  has  an  unpopulated  0805  SMT resistor (R1-R4) and a 0805 SMT capacitor (C1, C2, C6, C7)  to  GND\_  to  allow  termination  based  on  customer requirements.

Figure 3. Typical Application Diagram

<!-- image -->

│

## MAX12930/MAX12931 Evaluation Kit

## Component Information, PCB Layout, and Schematics

See the following links for component information, PCB layout, and schematics.

- MAX1293XS EV BOM
- MAX1293XS EV PCB Layout
- MAX1293XS EV Schematic
- MAX12931BW EV BOM
- MAX12931BW EV PCB Layout
- MAX12931BW EV Schematic

## Evaluates: MAX12930, MAX12931

## Ordering Information

| PART             | TYPE                               |
|------------------|------------------------------------|
| MAX1293XSEVKIT#  | EVKIT for narrow-body SOIC package |
| MAX12931BSEVKIT# | EVKIT with installed MAX12931BASA+ |
| MAX12931BWEVKIT# | EVKIT with installed MAX12931BAWE+ |

#Denotes RoHS compliant.

The  MAX1293XS  EV  kit  comes  with  U1  unpopulated. Order the device with the required data rate and default state separately. Refer to the Ordering Information section of the MAX12930/MAX12931 data sheet.

│

## MAX12930/MAX12931 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX12930, MAX12931

| TITLE: Bill of Materials                                | TITLE: Bill of Materials                                | TITLE: Bill of Materials                                | TITLE: Bill of Materials                                | TITLE: Bill of Materials                                | TITLE: Bill of Materials                                | TITLE: Bill of Materials                                                                                                | TITLE: Bill of Materials                                |
|---------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| DATE: 01/12/2016                                        | DATE: 01/12/2016                                        | DATE: 01/12/2016                                        | DATE: 01/12/2016                                        | DATE: 01/12/2016                                        | DATE: 01/12/2016                                        | DATE: 01/12/2016                                                                                                        | DATE: 01/12/2016                                        |
| DESIGN: max1293xs_evkit_a                               | DESIGN: max1293xs_evkit_a                               | DESIGN: max1293xs_evkit_a                               | DESIGN: max1293xs_evkit_a                               | DESIGN: max1293xs_evkit_a                               | DESIGN: max1293xs_evkit_a                               | DESIGN: max1293xs_evkit_a                                                                                               | DESIGN: max1293xs_evkit_a                               |
| NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE                                                                 | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE |
| ITEM                                                    | REF_DES                                                 | DNI/ DNP                                                | QTY MFG PART #                                          | MANUFACTURER                                            | VALUE                                                   | DESCRIPTION                                                                                                             |                                                         |
|                                                         | 1 C3, C8                                                | -                                                       | 2 ECJ - 2FF1A106Z; CC0805ZKY5V6BB1                      | PANASONIC/YAGEO PHYCOMP                                 | 10UF                                                    | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL=+80% - 20%; MODEL=Y5V; TG= - 30 DEGC TO +85 DEGC; T;                |                                                         |
|                                                         | 2 C4, C5                                                | -                                                       | 2 GRM188R61C104KA01; EMK107BJ104KAH                     | MURATA/TAIYO YUDEN                                      | 0.1UF                                                   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; MODEL=; TG= - 55 DEGC TO +125 DEGC; TC=X5R;                   |                                                         |
|                                                         | 3 J1, J8                                                | -                                                       | 2 PEC04SAAN                                             | SULLINS ELECTRONICS CORP.                               | PEC04SAAN                                               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                               |                                                         |
|                                                         | 4 J2, J3, J6, J7                                        | -                                                       | 4 142 - 0701 - 851                                      | JOHNSON COMPONENTS                                      | 142 - 0701 - 851                                        | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                             |                                                         |
|                                                         | 5 J4, J5                                                | -                                                       | 2 PCC02SAAN                                             | SULLINS                                                 | PCC02SAAN                                               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; - 65 DEGC TO +125 DEGC                               |                                                         |
|                                                         | 6 SU1, SU2                                              | -                                                       | 2 STC02SYAN                                             | SULLINS ELECTRONICS CORP.                               | STC02SYAN                                               | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL |                                                         |
|                                                         | 7 TP1, TP6                                              | -                                                       | 2                                                       | 5010 KEYSTONE                                           | N/A                                                     | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                      |                                                         |
|                                                         | 8 TP1A, TP1B, TP2A, TP2B                                | -                                                       | 4                                                       | 5009 KEYSTONE                                           | N/A                                                     | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |                                                         |
|                                                         | 9 TP2 - TP5                                             | -                                                       | 4                                                       | 5011 KEYSTONE                                           | N/A                                                     | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |                                                         |
| 10                                                      | MTH1 - MTH4                                             | DNI                                                     | 4 EVKIT_STANDOFF_4 - 40_3/8                             | ?                                                       | EVKIT_STANDOF F_4 - 40_3/8                              | KIT; ASSY - STANDOFF 3/8IN; 1PC. STANDOFF/FEM/HEX/4 - 40IN/(3/8IN)/NYLON; 1PC. SCREW/SLOT/PAN/4 - 40IN/(3/8IN)/NYLON    |                                                         |
| 11                                                      | C1, C2, C6, C7                                          | DNP                                                     | 0 GRM2195C1H103JA01                                     | MURATA                                                  | 0.01UF                                                  | CAPACITOR; SMT; 0805; CERAMIC; 0.01uF; 50V; 5%; COG; - 55degC to + 125degC; 0?30ppm/?C from - 55degC to +125degC        |                                                         |
|                                                         | 12 R1 - R4                                              | DNP                                                     | 0 ERJ - P06J472V                                        | PANASONIC                                               | 4.7K                                                    | RESISTOR; 0805; 4.7K OHM; 5%; 200PPM; 0.25W; THICK FILM                                                                 |                                                         |
|                                                         | 13 PCB                                                  | -                                                       | 1 MAX1293XS                                             | MAXIM                                                   | PCB                                                     | PCB Board:MAX1293XS EVALUATION KIT                                                                                      |                                                         |
| TOTAL 29                                                | TOTAL 29                                                | TOTAL 29                                                | TOTAL 29                                                | TOTAL 29                                                | TOTAL 29                                                | TOTAL 29                                                                                                                | TOTAL 29                                                |

<!-- image -->

<!-- image -->

## SILKSCREEN TOP

TOP

<!-- image -->

L2 GND

<!-- image -->

<!-- image -->

L3 PWR

<!-- image -->

<!-- image -->

BOTTOM

<!-- image -->

<!-- image -->

<!-- image -->

TITLE: Bill of Materials

DATE:

01/07/2016

DESIGN:

max1293 bw \_evkit\_a

NOTE: DNI --&gt; DO NOT INSTALL ; DNP --&gt; DO NOT PROCURE

| ITEM REF_DES             | DNI/D NP   | QTY MFG PART #                      | MANUFACTU RER             | VALUE                      | DESCRIPTION                                                                                                             |
|--------------------------|------------|-------------------------------------|---------------------------|----------------------------|-------------------------------------------------------------------------------------------------------------------------|
| 1 C3, C8                 | -          | 2 ECJ - 2FF1A106Z; CC0805ZKY5V6BB1  | PANASONIC/Y AGEO PHYCOMP  | 10UF                       | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL=+80% - 20%; MODEL=Y5V; TG= - 30 DEGC TO +85 DEGC; T;                |
| 2 C4, C5                 | -          | 2 GRM188R61C104KA01; EMK107BJ104KAH | MURATA/TAIY O YUDEN       | 0.1UF                      | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; MODEL=; TG= - 55 DEGC TO +125 DEGC; TC=X5R;                   |
| 3 J1, J8                 | -          | 2 PEC04SAAN                         | SULLINS ELECTRONICS CORP. | PEC04SAAN                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                               |
| 4 J2, J3, J6, J7         | -          | 4 142 - 0701 - 851                  | JOHNSON COMPONENTS        | 142 - 0701 - 851           | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                             |
| 5 J4, J5                 | -          | 2 PCC02SAAN                         | SULLINS                   | PCC02SAAN                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; - 65 DEGC TO +125 DEGC                               |
| 6 SU1, SU2               | -          | 2 STC02SYAN                         | SULLINS ELECTRONICS CORP. | STC02SYAN                  | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL |
| 7 TP1, TP6               | -          | 2                                   | 5010 KEYSTONE             | N/A                        | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                      |
| 8 TP1A, TP1B, TP2A, TP2B | -          | 4                                   | 5009 KEYSTONE             | N/A                        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 9 TP2 - TP5              | -          | 4                                   | 5011 KEYSTONE             | N/A                        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 10 MTH1 - MTH4           | DNI        | 4 EVKIT_STANDOFF_4 - 40_3/8         | ?                         | EVKIT_STAND OFF_4 - 40_3/8 | KIT; ASSY - STANDOFF 3/8IN; 1PC. STANDOFF/FEM/HEX/4 - 40IN/(3/8IN)/NYLON; 1PC. SCREW/SLOT/PAN/4 - 40IN/(3/8IN)/NYLON    |
| 11 C1, C2, C6, C7        | DNP        | 0 GRM2195C1H103JA01                 | MURATA                    | 0.01UF                     | CAPACITOR; SMT; 0805; CERAMIC; 0.01uF; 50V; 5%; COG; - 55degC to + 125degC; 0?30ppm/?C from - 55degC to +125degC        |
| 12 R1 - R4               | DNP        | 0 ERJ - P06J472V                    | PANASONIC                 | 4.7K                       | RESISTOR; 0805; 4.7K OHM; 5%; 200PPM; 0.25W; THICK FILM                                                                 |
| 13 PCB                   | -          | 1 MAX1293X BW                       | MAXIM                     | PCB                        | PCB Board:MAX1293 BW EVALUATION KIT                                                                                     |
| TOTAL                    |            | 29                                  |                           |                            |                                                                                                                         |

<!-- image -->

<!-- image -->

## SILKSCREEN TOP

TOP

<!-- image -->

L2 GND

<!-- image -->

<!-- image -->

L3 PWR

<!-- image -->

<!-- image -->

BOTTOM

<!-- image -->

<!-- image -->

<!-- image -->