<!-- lastmod 2022-08-03 -->
## MAX20331 Evaluation Kit

## General Description

The MAX20331 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX20331 high-voltage OVP on audio line device. The EV kit comes with  the  MAX20331EWL+ installed. The MAX20331 EV kit can also be used to evaluate MAX20331A.

## Features

- ● 3.5mm Jack Audio Line Protection
- ● Proven PCB Layout
- ● Fully Assembled and Tested

## EV Kit Contents

- ● EV kit board containing a MAX20331

## Quick Start

## Required Equipment

- ● MAX20331 EV kit
- ● Two Power Supplies
- ● Multimeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect a 3V supply on TP15 and verify LED1 is on.
- 2) Connect a 1V supply on COM1 and verify NC1 is now 1V.
- 3) Increase voltage on COM1. NC1 voltage should go down to 0V when COM1 voltage reaches about 3.45V.
- 4) Decrease COM1 voltage. NC1 voltage again follows COM1 voltage.
- 5) Set COM1 voltage to -1V and verify NC1 voltage is -1V.
- 6) Decrease COM1 voltage and verify NC1 voltage goes up to 0V when COM1 voltage reaches about -3.45V.

## Evaluates: MAX20331/MAX20331A

- 7) Remove power supply from COM1, connect 1V supply on COM2, and verify NC2 is now 1V.
- 8) Increase voltage on COM2. NC2 voltage goes down to 0V when COM2 voltage reaches about 3.45V.
- 9) Decrease COM2 voltage. NC2 voltage again follows COM2 voltage.
- 10) Set COM2 voltage to -1V and verify NC2 voltage is -1V.
- 11) Decrease COM2 voltage and verify NC2 voltage goes up to 0V when COM2 voltage reaches about -3.45V.

## Detailed Description

The  MAX20331  EV  kit  is  a  fully  assembled  and  tested circuit  board  demonstrating  the  MAX20331  audio  line overvoltage  protector  in  a  9-bump  wafer-level  package (WLP). The MAX20331 has overvoltage threshold ±3.45V.

## VCC Power Supply

The  V CC   can  be  connected  from  USB  power  supply source or externally supplied from TP15.

## Table 1. VCC Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                     |
|----------|------------------|---------------------------------|
| JU1      | 1-2*             | V CC is connected to VEXT TP15  |
| JU1      | 2-3              | V CC is connected to LDO Output |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20331EVKIT# | EVKIT  |

#Denotes RoHS compliant.

<!-- image -->

## MAX20331 EV Kit Bill of Materials

|   ITEM | REF_DES                   | DNI/DNP   |   QTY | MFG PART #                                                | MANUFACTURER                     | VALUE           | DESCRIPTION                                                                                                                                  | COMMENTS                                  |
|--------|---------------------------|-----------|-------|-----------------------------------------------------------|----------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|
|      1 | C1                        | -         |     1 | C0603C104K9RAC; GRM188R70J104KA01                         | KEMET;MURATA                     | 0.1UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 6.3V; TOL = 10%; MODEL = ; TG = -55°C TO +125°C; TC = X7R;                                       |                                           |
|      2 | C2, C3, C7                | -         |     3 | C1608X5R1V225K080AC; GRM188R6YA225KA12                    | TDK;MURATA                       | 2.2UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 35V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                                    |                                           |
|      3 | C4                        | -         |     1 | GRT188R60J475KE01                                         | MURATA                           | 4.7UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 6.3V; TOL=10%; TG = -55°C TO +85°C; TC = X5R; AUTO                                               |                                           |
|      4 | C6                        | -         |     1 | 06035C102KAT2A                                            | AVX                              | 1000PF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                  |                                           |
|      5 | D1, D2                    | -         |     2 | RCLAMP1851ZA                                              | SEMTECH                          | 18V             | DIODE; TVS; SMT; VRM = 18V; IPP = 3A                                                                                                         |                                           |
|      6 | J1, J2                    | -         |     2 | SJ-43515TS-SMT                                            | CUI INC.                         | SJ-43515TS-SMT  | CONNECTOR; FEMALE; SMT; 3.5 MM AUDIO JACKS TIP SWITCH; RIGHT ANGLE; 6PINS                                                                    |                                           |
|      7 | J3                        | -         |     1 | 10103594-0001LF                                           | FCI CONNECT                      | 10103594-0001LF | CONNECTOR; FEMALE; THROUGH HOLE; MICRO USB 2.0 B RECEPTACLE STD SMT PLUS DIP; RIGHT ANGLE; 5PINS                                             |                                           |
|      8 | JU1                       | -         |     1 | PEC03SAAN                                                 | SULLINS                          | PEC03SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                    |                                           |
|      9 | LED1                      | -         |     1 | SML-LX1206GW-TR                                           | LUMEX OPTOCOMPONENTS INC         | SML-LX1206GW-TR | DIODE; LED; STANDARD; GREEN; SMT (1206); PIV = 2.2V; IF = 0.02A; -40°C TO +85°C                                                              |                                           |
|     10 | P1                        | -         |     1 | 3262W-1-504LF                                             | BOURNS                           | 500K            | RESISTOR; THROUGH HOLE; TRIMMING POTENTIOMETER; 500K Ω ; 10%; 100PPM; 0.25W                                                                  |                                           |
|     11 | R1, R6                    | -         |     2 | CRCW08050000ZS; ERJ-6GEY0R00V; RC2012J000; RMCF0805ZT0R00 | DIGI-KEY                         | 0               | RESISTOR; 0805; 0 Ω ; JUMPER; 0.125W; THICK FILM                                                                                             |                                           |
|     12 | R2                        | -         |     1 | RK73H2ATTD3300F                                           | KOA SPEER ELECTRONICS INC        | 330             | RESISTOR; 0805; 330 Ω ; 1%; 100PPM; 0.25W; THICK FILM                                                                                        |                                           |
|     13 | R3-R5                     | -         |     3 | CRCW0805100KFK; RK73H2ATTD1003; ERJ-6ENF1003V             | VISHAY DALE; KOA SPEER;PANASONIC | 100K            | RESISTOR; 0805; 100K; 1%; 100PPM; 0.125W; THICK FILM                                                                                         |                                           |
|     14 | TP4, TP6, TP8, TP14, TP16 | -         |     5 | 5011                                                      | KEYSTONE                         | N/A             | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                | GND                                       |
|     15 | TP3, TP5, TP7, TP9        | -         |     4 | 5014                                                      | KEYSTONE                         | N/A             | TESTPOINT;PINDIA = 0.125IN;TOTALLENGTH = 0.445IN; BOARDHOLE = 0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                     | (TP3:COM1) (TP5:COM2) (TP7:NC1) (TP9:NC2) |
|     16 | TP11, TP12, TP13          | -         |     3 | 5012                                                      | KEYSTONE                         | N/A             | TESTPOINT; PINDIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                  | (TP11:DET1) (TP12:DET2) (TP13:SLV)        |
|     17 | TP15, TP17, TP19          | -         |     3 | 5010                                                      | KEYSTONE                         | N/A             | TEST POINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE ;NOT FOR COLD TEST                                                                        | (TP15:VEXT) (TP17:VCC) (TP19:VINT)        |
|     18 | U1                        | -         |     1 | MAX20331EWL+                                              | MAXIM                            | MAX20331EWL+    | EVKIT PART - IC; MAX20331EWL+; HIGH VOLTAGE PROTECTION 3.5MM AUDIO LINE OVP; PACKAGE OUTLINE DRAWING: 21-100234; PACKAGE CODE: W91Q1+1; WLP9 |                                           |
|     19 | U2                        | -         |     1 | MAX8880EUT+                                               | MAXIM                            | MAX8880EUT+     | IC; VREG; ULTRA-LOW-IQ LOW-DROPOUT LINEAR REGULATOR WITH POK; SOT23-6                                                                        |                                           |
|     20 | PCB                       | -         |     1 | MAX20331                                                  | MAXIM                            | PCB             | PCB:MAX20331                                                                                                                                 | -                                         |
|     21 | D3-D5                     | DNP       |     0 | RCLAMP1851ZA                                              | SEMTECH                          | 18V             | DIODE; TVS; SMT; VRM=18V; IPP=3A                                                                                                             |                                           |
|     22 | C5                        | DNP       |     0 | N/A                                                       | N/A                              | OPEN            | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                                     |                                           |
|     23 | R7-R9                     | DNP       |     0 | N/A                                                       | N/A                              | OPEN            | PACKAGE OUTLINE 0805 RESISTOR                                                                                                                |                                           |

TOTAL

38

## MAX20331 EV Kit Schematic

<!-- image -->

## MAX20331 EV Kit PCB Layout Diagrams

MAX20331 EV Kit-Top Silkscreen

<!-- image -->

│

## MAX20331 EV Kit PCB Layout Diagrams (continued)

MAX20331 EV Kit-Top Layer

<!-- image -->

│

## MAX20331 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20331 EV Kit-Internal Layer 2

│

## MAX20331 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20331 EV Kit-Internal Layer 3

│

## MAX20331 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

1.0''

MAX20331 EV Kit-Bottom

│

## MAX20331 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20331 EV Kit-Bottom Silkscreen

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION               | PAGES CHANGED   |
|-------------------|-----------------|---------------------------|-----------------|
|                 0 | 7/18            | Initial release           | -               |
|                 1 | 2/19            | Added Quick Start section | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX20331/MAX20331A