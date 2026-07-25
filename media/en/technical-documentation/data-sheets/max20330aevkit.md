<!-- lastmod 2022-08-03 -->
## MAX20330A Evaluation Kit

## General Description

The  MAX20330A  evaluation  kit  (EV  kit) is a fully assembled and tested circuit board that demonstrates the MAX20330A HV-capable ID detection device. The EV kit comes with the MAX20330AEWA+ installed.

## Features

- USB or 3.5mm Jack ID Detection
- Factory Mode Detection
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- EV Kit Board Containing a MAX20330A

## Quick Start

## Required Equipment

- MAX20330A EVKIT
- Power supply
- I 2 C master
- 150kΩ resistor
- Multimeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Connect a 5V power supply on VCC TP12. Check that LED1 is on.
- 2)  Connect an I 2 C master to SDA and SCL on the EV kit. The device slave address is 1010111.
- 3)  Remove the JU4 shunt, install the shunt on JU10. Check OVLO\_ENb (0x02 bit0) is 1. The device is enabled.

Evaluates: MAX20330A

- 4)  Change the shunt on JU2 to 2-3 position.
- 5)  Write 0 to FM\_ENb (0x01 bit1).
- 6) Connect a 150kΩ resistor between ID TP22 and ground.
- 7)  Check that register 0x09 is 00001000 (ID resistor is in factory mode range).
- 8)  Connect 3V to ID. Verify that VBAT is now also 3V.

## Detailed Description

The MAX20330A EV kit is a fully assembled and tested circuit board demonstrating the MAX20330A ID detector in an 8-bump wafer-level package (WLP).

## VCC Power Supply

The V CC  can be connected from different power supply sources or externally supplied from TP12. (Table 1)

## USB/Audio ID Detection

The EV kit can be configured for USB micro-B or 3.5mm Jack ID detection. (Table 2)

## I 2 C Communication

Use JU5, JU6, JU7, JU8, and JU9 to have I 2 C pins pulled up to selected supply. User needs to provide I 2 C master to  communicate  with  the  device.  The  slave  address  is 1010 111. (Table 3)

## Enable

Use JU10 to enable the device. For USB configuration, the user can use external test point TP11 to enable the device or install shunts on JU3 and JU10. (Table 4)

Ordering Information appears at end of data sheet.

<!-- image -->

## Table 1. VCC Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION              |
|----------|------------------|--------------------------|
| JU1      | 1-2              | VCC is connected to 5V   |
| JU1      | 1-3              | VCC is connected to VBAT |
| JU1      | 1-4*             | VCC is connected to VMC  |

*Default Position

## Table 2. USB/Audio Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION        |
|----------|------------------|--------------------|
| JU2      | 1-2*             | Configure to audio |
| JU2      | 2-3              | Configure to USB   |
| JU3      | Installed*       | Configure to audio |
| JU3      | Not installed    | Configure to USB   |
| JU4      | Installed*       | Configure to audio |
| JU4      | Not installed    | Configure to USB   |

*Default Position

## Table 3. I 2 C Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                    |
|----------|------------------|--------------------------------|
| JU5      | Installed        | SCL is pulled up               |
| JU5      | Not installed*   | SCL is not pulled up           |
| JU6      | Installed        | SDAis pulled up                |
| JU6      | Not installed*   | SDAis not pulled up            |
| JU7      | Installed        | INT is pulled up               |
| JU7      | Not installed*   | INT is not pulled up           |
| JU8      | Installed        | I 2 C lines pullup to VMC      |
| JU8      | Not installed*   | I 2 C lines not pullup to VMC  |
| JU9      | Installed        | I 2 C lines pullup to V CC     |
| JU9      | Not installed*   | I 2 C lines not pullup to V CC |

*Default Position

## Table 4. JU10 Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                         |
|----------|------------------|---------------------------------------------------------------------|
| JU10     | Installed        | Install shunts on JU3 and JU10 to enable the device (ENB to ground) |
| JU10     | Not installed*   | ENB is not to ground                                                |

*Default Position

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX20330AEVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX20330A EV Kit Bill of Materials

| DESCRIPTION TG=-55   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; DEGC TO +125 DEGC; TC=X7R; DIODE; TVS; SMT; VRM=8V; IPP=4A   | CONNECTOR; FEMALE; THROUGH HOLE; SJ-435107 SERIES; 3.5 MM AUDIO JACK; RIGHT ANGLE; 6PINS   | CONNECTOR; MALE; SMT; USB MICRO B-TYPE; BOTTOM MOUNT; RIGHT ANGLE; 5PINS; WITH OPTION TO CONNECT SHIELD PINS CONNECTOR; MALE; THROUGH HOLE; HEADER CONNECTOR; STRAIGHT;   | 40PINS; EDGE FOOTPRINT    | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS DIODE; LED; STANDARD; GREEN; SMT (1206); PIV=2.2V; IF=0.02A; -40   | DEGC TO +85 DEGC TRAN; DUAL P-CHANNEL (D-S) MOSFET; PCH; SC70; PD-(7.8W); I-(-4.5A); V-   | (-12V) 0 RESISTOR; 0805; 0 OHM; 0%; JUMPER; 0.5W; THICK FILM   | RESISTOR; 0805; 10K; 1%; 100PPM; 0.125W; THICK FILM               | RESISTOR; 0805; 100K; 1%; 100PPM; 0.125W; THICK FILM   | RESISTOR; 0805; 1M; 1%; 100PPM; 0.125W; THICK FILM   | 0805; 1K; 1%; 100PPM; 0.125W; THICK FILM   |                                                             | RESISTOR; RESISTOR; 0805; 3.92K OHM; 1%; 100PPM; 0.125W; THICK FILM   |
|----------------------|------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|-------------------------------------------------------------------------------------|-------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|----------------------------------------------------------------|-------------------------------------------------------------------|--------------------------------------------------------|------------------------------------------------------|--------------------------------------------|-------------------------------------------------------------|-----------------------------------------------------------------------|
| VALUE                | 0.1UF                                                                                                                  | 8V SJ-435107RS                                                                             | ZX62-B-5PA(33)                                                                                                                                                            | SBH11-PBPC-D20-ST-BK      | TSW-104-07-L-S                                                                      | PEC03SAAN                                                   | PEC02SAAN                                                                                                                    | SML-LX1206GW-TR                                                                           | SIA975DJ-T1-GE3                                                | 10K                                                               | 100K                                                   | 1M                                                   |                                            | 1K                                                          | 3.92K                                                                 |
| MFG                  | KEMET;TDK                                                                                                              | SEMTECH CUI INC.                                                                           | HIROSE ELECTRIC CO LTD.                                                                                                                                                   | SULLINS ELECTRONICS CORP. | SAMTEC                                                                              | SULLINS                                                     | SULLINS                                                                                                                      | LUMEX OPTOCOMPONENTS INC                                                                  | VISHAY SILICONIX VISHAY DRALORIC                               | VISHAY DALE;ROHM SEMICONDUCTOR;MURATA;YA GEO                      | VISHAY DALE;KOA SPEER;PANASONIC                        |                                                      | VISHAY DALE;YAGEO PHICOMP                  | VISHAY DALE;PANASONIC;ROHM;YAGE O                           | VISHAY DALE;ROHM                                                      |
| QTY MFGPART#         | 1 C0603C104K5RAC;                                                                                                      | C1608X7R1H104K 2 RCLAMP0821P.TCT 2 SJ-435107RS                                             | 1 ZX62-B-5PA(33)                                                                                                                                                          | 1 SBH11-PBPC-D20-ST-BK    | 1 TSW-104-07-L-S                                                                    | 1 PEC03SAAN                                                 | 8 PEC02SAAN                                                                                                                  | 2 SML-LX1206GW-TR                                                                         | 1 SIA975DJ-T1-GE3 1 CRCW08050000Z0EAHP                         | 1 CRCW080510K0FK; MCR10EZHF1002; ERJ- 6ENF1002V; RC0805FR- 0710KL | 2 CRCW0805100KFK;RK73H2 ATTD1003;ERJ-6ENF1003V         | CRCW08051M00FK;                                      | 1 RC0805FR-071ML                           | CRCW08051K00FK;ERJ- 6ENF1001V;MCR10EZHF100 1;RC0805FR-071KL | 2 3 CRCW08053K92FK; MCR10EZHF3921                                     |
| REF_DES              | C2                                                                                                                     | D1, D2 J1, J2                                                                              | J3                                                                                                                                                                        | J4                        | JU1                                                                                 | JU2                                                         | JU3-JU10                                                                                                                     | LED1, LED2                                                                                | Q1 R1                                                          | R2                                                                | R3, R5                                                 |                                                      | R4                                         | R6, R10                                                     | R7-R9                                                                 |
| ITEM                 | 1                                                                                                                      | 2 3                                                                                        | 4                                                                                                                                                                         | 5                         | 6                                                                                   | 7                                                           | 8                                                                                                                            | 9                                                                                         | 10 11                                                          | 12                                                                | 13                                                     |                                                      | 14                                         | 15                                                          | 16                                                                    |

## MAX20330A EV Kit Bill of Materials (continued)

| DESCRIPTION   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; PURPLE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | TESTPOINTWITH1.80MMHOLEDIA,RED,MULTIPURPOSE;NOTFORCOLDTE ST   | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLUE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | MAX20330A; PACKAGE OUTLINE: 21-100229; PACKAGE CODE: W81B1+1; WLP8 PCB:MAX   |       |
|---------------|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|-------|
| VALUE         | N/A                                                                                                                       | N/A                                                                                                                | N/A                                                                                                                  | N/A                                                                                                                   | N/A                                                                                                                   | N/A                                                           | N/A                                                                                                                 | N/A                                                                                                                  | N/A                                                                                                                        | MAX20330AEWA+ PCB                                                            |       |
| MFG           | KEYSTONE                                                                                                                  | KEYSTONE                                                                                                           | KEYSTONE                                                                                                             | KEYSTONE                                                                                                              | KEYSTONE                                                                                                              | KEYSTONE                                                      | KEYSTONE                                                                                                            | KEYSTONE                                                                                                             | KEYSTONE                                                                                                                   | MAXIM MAXIM                                                                  |       |
| MFGPART#      | 5011                                                                                                                      | 5000                                                                                                               | 5001                                                                                                                 | 5004                                                                                                                  | 5119                                                                                                                  | 5010                                                          | 5117                                                                                                                | 5116                                                                                                                 | 5013                                                                                                                       | MAX20330AEWA+ MAX                                                            |       |
| QTY           | 6                                                                                                                         | 3                                                                                                                  | 1                                                                                                                    | 1                                                                                                                     | 1                                                                                                                     | 7                                                             | 2                                                                                                                   | 1                                                                                                                    | 1                                                                                                                          | 1 1                                                                          | 55    |
| REF_DES       | TP2, TP6, TP15, TP17, TP24, TP25                                                                                          | TP3, TP5, TP14                                                                                                     | TP4                                                                                                                  | TP8                                                                                                                   | TP9                                                                                                                   | TP1, TP12, TP20-TP23, TP10                                    | TP11, TP19                                                                                                          | TP16                                                                                                                 | TP18                                                                                                                       | U1 PCB                                                                       |       |
| ITEM          | 17                                                                                                                        | 18                                                                                                                 | 19                                                                                                                   | 20                                                                                                                    | 21                                                                                                                    | 22                                                            | 23                                                                                                                  | 24                                                                                                                   | 25                                                                                                                         | 26 27                                                                        | TOTAL |

## MAX20330A EV Kit Schematic

<!-- image -->

## MAX20330A EV PCB Layout Diagrams

MAX20330A EV Kit-Top Silkscreen

<!-- image -->

MAX20330A EV Kit-Top

<!-- image -->

│

## MAX20330A EV PCB Layout Diagrams (continued)

MAX20330A EV Kit-Layer 2

<!-- image -->

MAX20330A EV Kit-Layer 3

<!-- image -->

│

## MAX20330A EV PCB Layout Diagrams (continued)

MAX20330A EV Kit-Bottom

<!-- image -->

MAX20330A EV Kit-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION               | PAGES CHANGED   |
|-------------------|-----------------|---------------------------|-----------------|
|                 0 | 9/18            | Initial release           | -               |
|                 1 | 2/19            | Added Quick Start section | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSOied  0a[iP Integrated reserYes tKe rigKt to cKange tKe circuitr\ and sSecifications witKout notice at an\ tiPe  TKe SaraPetric YaOues  Pin and P sKown in tKe (OectricaO CKaracteristics tabOe are guaranteed Other parametric values quoted in this data sheet are provided for guidance.

<!-- image -->

│