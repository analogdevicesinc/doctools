<!-- lastmod 2022-08-03 -->
## MAX20330 Evaluation Kit

## General Description

The MAX20330 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX20330 programmable OVLO with VBUS short detection device. The EV kit comes with the MAX20330EWA+ installed.

## Features

- OVP or ID Detection
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- EV Kit Board Containing a MAX20330

Evaluates: MAX20330

## Quick Start

## Required Equipment

- MAX20330 EV kit
- Power supply
- Multimeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Connect a 3V power supply to VBUS TP1. Check the voltage on OUT. Verify OUT is also 3V.
- 2)  Slowly  increase  VBUS  voltage.  Verify  OUT  voltage follows  VBUS.  When  VBUS  reaches  ~6.8V,  OUT voltage goes down.
- 3)  Decrease VBUS voltage and OUT voltage comes back to be same as VBUS voltage.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX20330 Evaluation Kit

## Detailed Description

The MAX20330 EV kit is a fully assembled and tested circuit board demonstrating the MAX20330 OVP/ID detector in an 8-bump wafer-level package (WLP).

## VCC Power Supply

The V CC  can be connected from different power supply sources or externally supplied from TP7.

## Table 1. VCC Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION              |
|----------|------------------|--------------------------|
| JU1      | 1-2*             | VCC is connected to VMC  |
| JU1      | 2-3              | VCC is connected to 5VMC |

*Default Position

## Table 2. I 2 C Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                  |
|----------|------------------|------------------------------|
| JU2      | Installed        | VIO is connected to VCC      |
| JU2      | Not installed*   | VIO is not connected to VCC  |
| JU3      | Installed        | SCL is pulled up to VIO      |
| JU3      | Not installed*   | SCL is not pulled up to VIO  |
| JU4      | Installed        | SDAis pulled up to VIO       |
| JU4      | Not installed*   | SDAis not pulled up to VIO   |
| JU5      | Installed        | INTB is pulled up to VIO     |
| JU5      | Not installed*   | INTB is not pulled up to VIO |
| JU6      | Installed        | VIO is connected to VMC      |
| JU6      | Not installed*   | VIO is not connected to VMC  |

*Default Position

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20330EVKIT# | EV Kit |

#Denotes RoHS compliant.

## I 2 C Communication

Use JU2, JU3, JU4, JU5, and JU6 to have I 2 C pins pulled up to selected supply. User needs to provide I 2 C master to  communicate  with  the  device.  The  slave  address  is 0010 111.

Evaluates: MAX20330

│

## MAX20330 EV Kit Bill of Materials

|   ITEM | REF_DES                   | DNI/DNP   |   QTY | MFG PART #                                                 | MANUFACTURER                      | VALUE                | DESCRIPTION                                                                                                                                    | COMMENTS   |
|--------|---------------------------|-----------|-------|------------------------------------------------------------|-----------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | C1                        | -         |     1 | C1210C105K5RAC                                             | KEMET                             | 1UF                  | CAPACITOR; SMT; 1210; CERAMIC; 1uF; 50V; 10%; X7R; -55degC to + 125degC;                                                                       |            |
|      2 | C2                        | -         |     1 | C0603Y102K5RACAUTO                                         | KEMET                             | 1000PF               | CAP; SMT (0603); 1000PF; 10%; 50V; X7R; CERAMIC CHIP                                                                                           |            |
|      3 | C3                        | -         |     1 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA    | MURATA;MURATA;TDK                 | 0.1UF                | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                               |            |
|      4 | C4                        | -         |     1 | C3216X7R1E475K160AC                                        | TDK                               | 4.7UF                | CAPACITOR; SMT (1206); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                     |            |
|      5 | D1                        | -         |     1 | PTVS20VS1UR                                                | NEXPERIA                          | 20V                  | DIODE; TVS; SMT (SOD-123W); VRM=20V; IPP=12.3A                                                                                                 |            |
|      6 | J1                        | -         |     1 | ZX62-B-5PA(33)                                             | HIROSE ELECTRIC CO LTD.           | ZX62-B-5PA(33)       | CONNECTOR; MALE; SMT; USB MICRO B-TYPE; BOTTOM MOUNT; RIGHT ANGLE; 5PINS; WITH OPTION TO CONNECT SHIELD PINS                                   |            |
|      7 | J2                        | -         |     1 | SBH11-PBPC-D20-ST-BK                                       | SULLINS ELECTRONICS CORP.         | SBH11-PBPC-D20-ST-BK | CONNECTOR; MALE; THROUGH HOLE; HEADER CONNECTOR; STRAIGHT; 40PINS; EDGE FOOTPRINT                                                              |            |
|      8 | JU1                       | -         |     1 | PBC03SAAN                                                  | SULLINS                           | PBC03SAAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                               |            |
|      9 | JU2-JU6                   | -         |     5 | PBC02SAAN                                                  | SULLINS ELECTRONICS CORP.         | PBC02SAAN            | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;                                                   |            |
|     10 | LED1, LED2                | -         |     2 | SML-LX1206GW-TR                                            | LUMEX OPTOCOMPONENTS INC          | SML-LX1206GW-TR      | DIODE; LED; STANDARD; GREEN; SMT (1206); PIV=2.2V; IF=0.02A; -40 DEGC TO +85 DEGC                                                              |            |
|     11 | Q1                        | -         |     1 | SISA72DN-T1-GE3                                            | VISHAY SILICONIX                  | SISA72DN-T1-GE3      | TRAN; NCH; POWERPAK1212-8; PD-(3.7W); I-(60A); V-(40V)                                                                                         |            |
|     12 | R1, R2                    | -         |     2 | ANY                                                        | ANY                               |                      | 0 RESISTOR; 0805; 0 OHM; JUMPER; 0.125W; THICK FILM; FORMFACTOR                                                                                |            |
|     13 | R3, R7                    | -         |     2 | CRCW08051K00FK;ERJ-6ENF1001V; MCR10EZHF1001;RC0805FR-071KL | VISHAY DALE;PANASONIC; ROHM;YAGEO | 1K                   | RESISTOR; 0805; 1K; 1%; 100PPM; 0.125W; THICK FILM                                                                                             |            |
|     14 | R4-R6                     | -         |     3 | CRCW08053K92FK; MCR10EZHF3921                              | VISHAY DALE;ROHM                  | 3.92K                | RESISTOR; 0805; 3.92K OHM; 1%; 100PPM; 0.125W; THICK FILM                                                                                      |            |
|     15 | SU1-SU6                   | -         |     6 | STC02SYAN                                                  | SULLINS ELECTRONICS CORP.         | STC02SYAN            | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                        |            |
|     16 | TB1, TB2                  | -         |     2 | 282836-2                                                   | TE CONNECTIVITY                   | 282836-2             | CONNECTOR; FEMALE; THROUGH HOLE; TERMINAL BLOCK; SIDE WIRE ENTRY; STACKING WITH INTERLOCK STRAIGHT; 2PINS ;                                    |            |
|     17 | TP1, TP5, TP7, TP15, TP16 | -         |     5 | 5010                                                       | KEYSTONE                          | N/A                  | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                                             |            |
|     18 | TP2, TP4, TP8, TP10, TP14 | -         |     5 |                                                            | 5011 KEYSTONE                     | N/A                  | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                        |            |
|     19 | TP3                       | -         |     1 | 5119                                                       | KEYSTONE                          | N/A                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; PURPLE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                            |            |
|     20 | TP6                       | -         |     1 |                                                            | 5004 KEYSTONE                     | N/A                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                            |            |
|     21 | TP9                       | -         |     1 |                                                            | 5000 KEYSTONE                     | N/A                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                               |            |
|     22 | TP11                      | -         |     1 |                                                            | 5116 KEYSTONE                     | N/A                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                             |            |
|     23 | TP12                      | -         |     1 |                                                            | 5117 KEYSTONE                     | N/A                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLUE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                              |            |
|     24 | TP13                      | -         |     1 |                                                            | 5003 KEYSTONE                     | N/A                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                            |            |
|     25 | U1                        | -         |     1 | MAX20330EWA+                                               | MAXIM                             | MAX20330EWA+         | EVKIT PART - IC; DET; PROGRAMMABLE OVP CONTROLLER WITH VBUS SHORT DETECTION; MAX20330; PACKAGE OUTLINE: 21-100229; PACKAGE CODE: W81B1+1; WLP8 |            |
|     26 | PCB                       | -         |     1 | MAX20330                                                   | MAXIM                             | PCB                  | PCB:MAX20330                                                                                                                                   | -          |
|     27 | Q2                        | DNP       |     0 | SISA72DN-T1-GE3                                            | VISHAY SILICONIX                  | SISA72DN-T1-GE3      | TRAN; NCH; POWERPAK1212-8; PD-(3.7W); I-(60A); V-(40V)                                                                                         | DNI        |

## MAX20330 EV Kit Schematic

<!-- image -->

Evaluates: MAX20330

## MAX20330 EV PCB Layout Diagrams

MAX20330 EV Kit-Top Silkscreen

<!-- image -->

MAX20330 EV Kit-Internal 2

<!-- image -->

MAX20330 EV Kit-Top

<!-- image -->

MAX20330 EV Kit-Internal 3

<!-- image -->

│

## MAX20330 EV PCB Layout Diagrams (continued)

MAX20330 EV Kit-Bottom

<!-- image -->

MAX20330 EV Kit-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS VKRZQ LQ WKH (OHFWULFDO &amp;KDUDFWHULVWLFV WDEOH DUH JXDUDQWHHG Other parametric values quoted in this data sheet are provided for guidance.

│

Evaluates: MAX20330