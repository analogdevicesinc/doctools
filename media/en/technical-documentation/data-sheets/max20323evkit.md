<!-- lastmod 2022-08-03 -->
## MAX20323 Evaluation Kit

## General Description

The MAX20323 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX20323 USB  type-C  CC-pin  overvoltage  protection  device.  The EV  kit  comes  with  the  MAX20323ENC+  installed.  The EV kit board can also be used to evaluate MAX20323A/ MAX20323B/MAX20323C/MAX20323D/MAX20323E/ MAX20323F.

## Features

- 2.5V to 5.5V Operating Voltage Range
- Power LED Reading
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- EV Kit Board Containing a MAX20323

Ordering Information appears at end of data sheet.

## Evaluates: MAX20323/MAX20323A/ MAX20323B/MAX20323C/MAX20323D/ MAX20323E/MAX20323F

## Quick Start

## Required Equipment

- MAX20323 EV kit
- 5V power supply or USB cable to power
- Power supply
- Multimeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect a 5V power supply to TP14 or connect a USB cable to J3, verify LED1 is on.
- 2) Check the voltage on JU1 pin2 is ~4.3V.
- 3) Remove shunt on JU2, check the voltage on JU1 pin2 is ~2.5V.
- 4) Remove shunt on JU3, check the voltage on JU1 pin2 is ~1.257V.
- 5) Install shunt on JU2, check the voltage on JU1 pin2 is ~3.06V.
- 6) Install shunt on JU3 and JU1, check the voltage on TP11 is ~4.3V.
- 7) Connect another power supply 2V to TP3 CC1\_I, check TP9 CC1\_O is 2V.
- 8) Increase CC1\_I voltage, when CC1\_I reaches ~5.75V, CC1\_O voltage drops down to ~5.1V.
- 9) Turn off the power supply on CC1\_I, and connect the power supply to CC2\_I TP4.
- 10)  Set the power supply to CC2\_I to 2V and check TP10 CC2\_O is 2V.
- 11)  Increase CC2\_I voltage, when CC2\_I reaches ~5.75V, CC2\_O voltage drops down to ~5.1V.

<!-- image -->

## MAX20323 Evaluation Kit

## Detailed Description

The  MAX20323  EV  kit  is  a  fully  assembled  and  tested circuit  board  demonstrating  the  MAX20323  USB type-C CC-pin overvoltage protection device in a 12-bump waferlevel package (WLP).

## LED Indicator

The EV kit features LED1 to indicate power on VB\_IN.

## VENCC Power

VENCC can be powered from J3 USB, TP14, or test point TP11. Use jumper JU1 to connect V ENCC  to LDO from VB\_IN (Table 1). The output voltage of the LDO can be set by JU2 and JU3 (Table 2).

## Evaluates: MAX20323/MAX20323A/ MAX20323B/MAX20323C/MAX20323D/ MAX20323E/MAX20323F

## Table 1. JU1 Jumper Setting

| JUMPER   | SHUNT POSITION           | DESCRIPTION                                   |
|----------|--------------------------|-----------------------------------------------|
| JU1      | Installed Not installed* | VENCC power from J3/TP14 VENCC not power from |

## Table 2. LDO Output Setting

| JUMPER   | JUMPER   | LDO Output   |
|----------|----------|--------------|
| JU2      | JU3      | LDO Output   |
| Open     | Open     | 1.257V       |
| Close    | Open     | 3.06V        |
| Open     | Close    | 2.5V         |
| Close*   | Close*   | 4.3V         |

│

## MAX20323 Evaluation Kit

## MAX20323 EV Kit Bill of Materials

|   ITEM | REF_DES                 | DNI/DNP   |   QTY | MFG PART #                                                   | MANUFACTURER                        | VALUE         | DESCRIPTION                                                                                                                    |
|--------|-------------------------|-----------|-------|--------------------------------------------------------------|-------------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------|
|      1 | C1                      | -         |     1 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA      | MURATA; TDK                         | 0.1µF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R; AUTO                               |
|      2 | C2, C4                  | -         |     2 | EMK212BJ105KG                                                | TAIYO YUDEN                         | 1µF           | CAPACITOR; SMT (0805); CERAMIC CHIP; 1µF; 16V; TOL = 10%; MODEL = MSERIES; TG = -55°C TO +85°C; TC = X5R                       |
|      3 | C3                      | -         |     1 | C3216X7R1E475K160AC                                          | TDK                                 | 4.7µF         | CAPACITOR; SMT (1206); CERAMIC CHIP; 4.7µF; 25V; TOL = 10%; MODEL = C SERIES; TG = -55°C TO +125°C; TC = X7R                   |
|      4 | J1, J2                  | -         |     2 | 12401548E4#2A                                                | AMPHENOL                            | 12401548E4#2A | CONNECTOR; FEMALE; THROUGH HOLE; USB TYPE C CONNECTOR; RIGHT ANGLE HYBRID; 24PINS                                              |
|      5 | J3                      | -         |     1 | 61729-0010BLF                                                | FCI CONNECT                         | 61729-0010BLF | CONNECTOR; FEMALE; THROUGH-HOLE; UNIVERSAL SERIES BUS B-TYPE CONNECTOR; RIGHT ANGLE; 4PINS                                     |
|      6 | JU1-JU3                 | -         |     3 | PEC02SAAN                                                    | SULLINS                             | PEC02SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                      |
|      7 | LED1                    | -         |     1 | LTST-C150KGKT                                                | LITE-ON ELECTRONICS; INC.           | LTST-C150KGKT | DIODE; LED; STANDARD; GREEN; SMT (1206); PIV = 2V; IF = 0.02A; -55°C TO +85°C                                                  |
|      8 | R1, R7                  | -         |     2 | CRCW08050000Z0EAHP                                           | VISHAY DRALORIC                     | 0             | RESISTOR; 0805; 0Ω; 0%; JUMPER; 0.5W; THICK FILM                                                                               |
|      9 | R2                      | -         |     1 | CRCW08051K00FK; ERJ-6ENF1001V; MCR10EZHF1001; RC0805FR-071KL | VISHAY DALE; PANASONIC; ROHM; YAGEO | 1K            | RESISTOR; 0805; 1K; 1%; 100PPM; 0.125W; THICK FILM                                                                             |
|     10 | R3                      | -         |     1 | CRCW080521K0FK                                               | VISHAY DALE                         | 21K           | RESISTOR; 0805; 21KΩ; 1%; 100PPM; 0.125W; THICK FILM                                                                           |
|     11 | R4, R6                  | -         |     2 | CRCW080530K1FK                                               | VISHAY DALE                         | 30.1K         | RESISTOR; 0805; 30.1K; 1%; 100PPM; 0.125W; THICK FILM                                                                          |
|     12 | R5                      | -         |     1 | CRCW0805100KFK; RK73H2ATTD1003; ERJ-6ENF1003V                | VISHAY DALE/ KOA SPEER/PANASONIC    | 100K          | RESISTOR; 0805; 100K; 1%; 100PPM; 0.125W; THICK FILM                                                                           |
|     13 | TP1, TP2, TP5-TP8, TP13 | -         |     7 | 5011                                                         | KEYSTONE                            | N/A           | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|     14 | TP3, TP4                | -         |     2 | 5013                                                         | KEYSTONE                            | N/A           | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     15 | TP9, TP10               | -         |     2 | 5126                                                         | KEYSTONE                            | N/A           | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|     16 | TP11                    | -         |     1 | 5010                                                         | KEYSTONE                            | N/A           | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                             |
|     17 | TP12                    | -         |     1 | 5012                                                         | KEYSTONE                            | N/A           | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|     18 | TP14                    | -         |     1 | 5014                                                         | KEYSTONE                            | N/A           | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     19 | U1                      | -         |     1 | MAX20323ENC+                                                 | MAXIM                               | MAX20323ENC+  | EVKIT PART - IC; USB TYPE-C CC-PIN OVERVOLTAGE PROTECTOR; PACKAGE OUTLINE DRAWING: 21-100167; PACKAGE CODE: N121M1+1           |
|     20 | U2                      | -         |     1 | MAX8880EUT+                                                  | MAXIM                               | MAX8880EUT+   | IC; VREG; ULTRA-LOW-IQ LOW-DROPOUT LINEAR REGULATOR WITH POK; SOT23-6                                                          |
|     21 | PCB                     | -         |     1 | MAX20323                                                     | MAXIM                               | PCB           | PCB:MAX20323                                                                                                                   |
|     22 | JP1-JP3                 | DNI       |     3 | STC02SYAN                                                    | SULLINS ELECTRONICS CORP.           | STC02SYAN     | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.256IN; BLACK; INSULATION = PBT CONTACT = PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL  |

38

TOTAL

NOTE: DNI--&gt; DO NOT INSTALL(PACKOUT) ; DNP--&gt; DO NOT PROCURE

## Evaluates: MAX20323/MAX20323A/ MAX20323B/MAX20323C/MAX20323D/ MAX20323E/MAX20323F

## MAX20323 Evaluation Kit

## MAX20323 EV Kit Schematic

<!-- image -->

## MAX20323 Evaluation Kit

## MAX20323 EV Kit PCB Layout Diagrams

MAX20323 EV-Top Silkscreen

<!-- image -->

MAX20323 EV-Top

<!-- image -->

│

## MAX20323 Evaluation Kit

MAX20323E/MAX20323F

## MAX20323 EV Kit PCB Layout Diagrams (continued)

MAX20323 EV-Layer 2

<!-- image -->

MAX20323 EV-Layer 3

<!-- image -->

│

## MAX20323 Evaluation Kit

Evaluates: MAX20323/MAX20323A/

MAX20323B/MAX20323C/MAX20323D/

MAX20323E/MAX20323F

## MAX20323 EV Kit PCB Layout Diagrams (continued)

MAX20323 EV-Bottom

<!-- image -->

│

## MAX20323 Evaluation Kit

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20323EVKIT# | EVKIT  |

#Denotes RoHS compliant.

## MAX20323 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX20323/MAX20323A/

MAX20323B/MAX20323C/MAX20323D/

MAX20323E/MAX20323F