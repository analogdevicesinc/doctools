<!-- lastmod 2022-08-03 -->
## MAX20317 Evaluation Kit

## General Description

The MAX20317 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX20317 universal  3.5mm  jack  accessory  management  device. The EV kit comes with the MAX20317EWP+ installed.

## Features

- 3V to 5.5V Operating Voltage Range
- Audio Jack for Accessory Plug In
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- EV Kit Board Containing a MAX20317

Ordering Information appears at end of data sheet.

Evaluates: MAX20317

## Detailed Description

The  MAX20317  EV  kit  is  a  fully  assembled  and  tested circuit  board  demonstrating  the  MAX20317  universal 3.5mm jack accessory management device in a 20-bump wafer-level package (WLP).

## Power Supply

Use JU1, JU3, and JU10 to select power supply sources (Table 1).

## I 2 C Communication

Use JU4, JU5, and JU6 to have I 2 C pins pulled up to VCC supply (Table 2). The user needs to provide an I 2 C master to communicate with the device.

## Ground Sense Inputs

Use JU12, JU13, and JU14 to select ground sense inputs connection (Table 3).

<!-- image -->

## Table 1. JU1, JU3, JU10 Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                        |
|----------|------------------|------------------------------------|
| JU1      | 1-2              | VBOOST from testing board          |
| JU1      | 2-3*             | VBOOST from USB port               |
| JU3      | Installed*       | VBOOST from selected source in JU1 |
| JU3      | Not installed    | VBOOST from external power on TP11 |
| JU10     | 1-2              | VCC from testing board             |
| JU10     | 2-3*             | VCC from external power on TP23    |

## Table 2. JU4, JU5, JU6 Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                 |
|----------|------------------|-----------------------------|
| JU4      | Installed*       | SCL is pulled up to VCC     |
| JU4      | Not installed    | SCL is not pulled up to VCC |
| JU5      | Installed*       | SDAis pulled up to VCC      |
| JU5      | Not installed    | SDAis not pulled up to VCC  |
| JU6      | Installed*       | INT is pulled up to VCC     |
| JU6      | Not installed    | INT is not pulled up to VCC |

## Table 3. JU12, JU13, JU14 Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                         |
|----------|------------------|-------------------------------------|
| JU12     | Installed*       | G_SNSR is connected to J4 pin 4     |
| JU12     | Not installed    | G_SNSR is not connected to J4 pin 4 |
| JU13     | Installed*       | G_SNSL is connected to J4 pin 4     |
| JU13     | Not installed    | G_SNSL is not connected to J4 pin 4 |
| JU14     | Installed        | Ground is connected to J4 pin 4     |
| JU14     | Not installed*   | Ground is not connected to J4 pin 4 |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20317EVKIT# | EVKIT  |

# Denotes RoHS compliant.

Evaluates: MAX20317

│

## MAX20317 Evaluation Kit

## MAX20317 EV Kit Bill of Materials

Evaluates: MAX20317

| DESCRIPTION    | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R;   | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R   | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R   | EVKIT PART-CONNECTOR; AUDIO JACK; 3.5MM DIAMETER; SMT AND DIP   | CONNECTOR; FEMALE; THROUGH-HOLE; UNIVERSAL SERIES BUS B-TYPE CONNECTOR; RIGHT ANGLE; 4PINS   | CONNECTOR; MALE; THROUGH HOLE; HEADER CONNECTOR; STRAIGHT; 40PINS; EDGE FOOTPRINT   | CONNECTOR; FEMALE; THROUGH HOLE; SJ-435107 SERIES; 3.5 MMAUDIO JACK; RIGHT ANGLE; 6PINS   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS   | RESISTOR; 0805; 2.21K OHM; 1%; 100PPM; 0.125W; THICK FILM   | RESISTOR; 2010; 6.8 OHM; 1%; 100PPM; 1W; THICK FILM RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM   | RESISTOR; 0805; 3.92K OHM; 1%; 100PPM; 0.125W; THICK FILM   | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; PURPLE;   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; GREY; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLUE; PHOSPHOR WIRE SILVER PLATE FINISH;   | RESISTOR; 0805; 0 OHM; 0%; JUMPER; 0.5W; THICK FILM   |                                 |                    |     |           |           |                   |                 |                 |          | PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |        |                   |                 |      |                       |      |                 |          |      |          |            | BRONZE PART-IC; INFC; UNIVERSAL 3.5 MMDIAMETER; ACCESSORY MANAGEMENT IC;   | DWG.: 21-100120A; PKG. CODE: W201H2+1   | OUTLINE   | EVKIT PKG.   | PCB:MAX   |
|----------------|------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|---------------------------------|--------------------|-----|-----------|-----------|-------------------|-----------------|-----------------|----------|---------------------------------------------|--------|-------------------|-----------------|------|-----------------------|------|-----------------|----------|------|----------|------------|----------------------------------------------------------------------------|-----------------------------------------|-----------|--------------|-----------|
| VALUE          | 4.7UF                                                                                                | 1UF                                                                                        |                                                                                           | 1UF                                                             | AJR83-686010                                                                                 | 61729-0010BLF                                                                       |                                                                                           |                                                                                                                       |                                                             |                                                                                                           | SBH11-PBPC-D20-ST-BK                                        | 6.8                                                                                                                       | SJ-435107RS                                                                                                               |                                                                                                                                                                                                           | PEC02SAAN                                                                                                                |                                                      | PEC03SAAN                                                                                                                  |                                                                                                                           | 2.21K                                                                                                             |                                                       | 3.92K                           | 0 0                | N/A |           | STC02SYAN | N/A               |                 | N/A             |          | N/A                                         | N/A    | N/A               | MAX20317EWP+    |      |                       | N/A  | N/A             |          |      |          |            |                                                                            |                                         |           |              | PCB       |
| MANUFACTURER   | MURATA                                                                                               | MURATA                                                                                     |                                                                                           | AVX                                                             | ADVANCE CONNECTEK                                                                            | FCI CONNECT                                                                         |                                                                                           | CORP.                                                                                                                 | SULLINS                                                     | CUI INC.                                                                                                  | SULLINS ELECTRONICS                                         |                                                                                                                           | SULLINS                                                                                                                   | VISHAY DALE                                                                                                                                                                                               | VISHAY DRALORIC                                                                                                          | VISHAY DALE                                          |                                                                                                                            |                                                                                                                           | VISHAY DALE/ROHM                                                                                                  | VISHAY DRALORIC                                       | SULLINS ELECTRONICS             |                    |     | CORP.     | KEYSTONE  | KEYSTONE          | KEYSTONE        |                 | KEYSTONE |                                             |        | KEYSTONE KEYSTONE |                 | 5010 | 5014                  | 5011 | MAX20317EWP+    | KEYSTONE | 5127 | KEYSTONE |            |                                                                            | MAX                                     | MAXIM     |              | MAXIM     |
| QTY MFG PART # | 1 GRM21BR61E475KA                                                                                    | 3                                                                                          | GRM21BR71C105KA01 2                                                                       | 0603YD105KAT2A                                                  | 1                                                                                            | AJR83-686010                                                                        | 1 61729-0010BLF                                                                           | 1 SBH11-PBPC-D20-ST-BK                                                                                                | 2 PEC03SAAN                                                 | 7                                                                                                         | SJ-435107RS                                                 | 1 1 1 CRCW20106R80FKEFHP                                                                                                  | PEC02SAAN                                                                                                                 |                                                                                                                                                                                                           | CRCW08052K21FK                                                                                                           |                                                      |                                                                                                                            |                                                                                                                           |                                                                                                                   | CRCW08050000Z0EAHP                                    | 3 CRCW08053K92FK; MCR10EZHF3921 | 6 CRCW06030000Z0 1 |     | STC02SYAN |           | 9 5126            | 7               | 5 5013          |          | 1 5129                                      | 2 5128 |                   | 7               |    4 | 1                     |      | 2               |          |    1 |          |            |                                                                            |                                         |           |              | 1 71      |
| REF_DES        | C1                                                                                                   | C2, C3, C7                                                                                 | C4, C5                                                                                    |                                                                 | J1                                                                                           | J2                                                                                  |                                                                                           | J3                                                                                                                    | J4                                                          |                                                                                                           |                                                             | JU3-JU6, JU12-JU14                                                                                                        |                                                                                                                           |                                                                                                                                                                                                           | JU1, JU10                                                                                                                |                                                      | R2                                                                                                                         | R3-R7, R11                                                                                                                | TP27                                                                                                              | R12                                                   |                                 | R1                 |     |           | R8-R10    | SU1-SU9 TP1, TP8, | TP13-TP16, TP22 | TP2, TP19-TP21, |          | TP3 TP4, TP29                               |        |                   | TP7, TP9, TP10, |      | TP5, TP11, TP23, TP26 | TP6  | TP24, TP30-TP32 |          |      |          | TP12, TP28 |                                                                            |                                         |           | U1           | PCB       |
| ITEM           | 1                                                                                                    | 2                                                                                          | 3                                                                                         |                                                                 | 4                                                                                            | 5                                                                                   |                                                                                           | 6                                                                                                                     |                                                             | 7                                                                                                         |                                                             |                                                                                                                           | 8                                                                                                                         |                                                                                                                                                                                                           | 9                                                                                                                        |                                                      |                                                                                                                            |                                                                                                                           |                                                                                                                   | 14                                                    | 13                              |                    |     |           |           | 15                | 16              | 17              | 19       |                                             |        |                   | 22              |   20 |                       | 21   |                 |          |      |          | 23         |                                                                            | 24                                      |           |              | TOTAL     |
|                |                                                                                                      |                                                                                            |                                                                                           |                                                                 |                                                                                              |                                                                                     |                                                                                           |                                                                                                                       |                                                             |                                                                                                           |                                                             |                                                                                                                           |                                                                                                                           |                                                                                                                                                                                                           | 10                                                                                                                       | 11                                                   | 12                                                                                                                         |                                                                                                                           |                                                                                                                   |                                                       |                                 |                    |     |           |           |                   |                 | 18              |          |                                             |        |                   |                 |      |                       |      |                 |          |      |          |            |                                                                            |                                         | 25        |              |           |

## MAX20317 EV Kit Schematics

<!-- image -->

## MAX20317 EV Kit PCB Layout Diagrams

MAX20317 EV Kit-Top Silkscreen

<!-- image -->

MAX20317 EV Kit-Top

<!-- image -->

Evaluates: MAX20317

MAX20317 EV Kit-Layer 2

<!-- image -->

MAX20317 EV Kit-Layer 3

<!-- image -->

│

## MAX20317 EV Kit PCB Layout Diagrams (continued)

MAX20317 EV Kit-Bottom

<!-- image -->

MAX20317 EV Kit- Bottom Silkscreen

<!-- image -->

│

## MAX20317 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

<!-- image -->

│

Evaluates: MAX20317