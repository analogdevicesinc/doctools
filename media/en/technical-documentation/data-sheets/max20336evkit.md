<!-- lastmod 2022-08-04 -->
## MAX20336 Evaluation Kit

## General Description

The MAX20336 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX20336 beyond-the-rails  DPST  analog  switches.  The  EV  kit comes with the MAX20336ENT+ installed.

## Features

- USB Power Option
- SMA Connection for Testing
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- EV Kit Board Containing a MAX20336 IC Part

## Table 1. Power Supply Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                           |
|----------|------------------|-------------------------------------------------------|
| JU1      | 1-2*             | V CCEN of the IC is connected to VCC of the EV kit    |
| JU1      | 2-3              | V CCEN of the IC is connected to ground of the EV kit |
| JU2      | 1-2              | VCC is connected to VEXT, TP3                         |
| JU2      | 3-4*             | VCC is connected to VHH, output of LDO                |
| JU2      | 5-6              | VCC is connected to VB, supply from USB               |
| JU3      | 1-2*             | 1.8V LDO output                                       |
| JU3      | 3-4              | 2.5V LDO output                                       |
| JU3      | 5-6              | 3.3V LDO output                                       |
| JU3      | 7-8              | Variable LDO output                                   |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20336EVKIT# | EV KIT |

# Denotes RoHS compliant.

Evaluates: MAX20336

## Quick Start

## Required Equipment

- MAX20336 EV kit
- USB Cable or Power Supply

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect a USB cable to J1 or power VB (TP1) with 5V power supply.
- 2) NO1 is connected to COM1 and NO2 is connected to COM2.

## Detailed Description

The MAX20336 EV kit is a fully assembled and tested circuit board demonstrating the MAX20336 DPST switches in a 6-bump WLP package.

## Power Supply

The EV kit can power the V CCEN  pin of the IC from different sources. Alternatively, on the MAX20336 EV kit, the IC can be powered externally from TP12.

<!-- image -->

## MAX20336 EV Kit Bill of Materials

| ITEM REF_DES            | QTY MFG PART #                                 | MANUFACTURER                    | VALUE           | DESCRIPTION                                                                                                                          |
|-------------------------|------------------------------------------------|---------------------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------|
| 1 C1                    | 1 GRM21BR71E155KA                              | MURATA                          | 1.5UF           | CAPACITOR; SMT (0805); CERAMIC CHIP; 1.5UF; 25V; TOL=10%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=+/                                 |
| 2 C2                    | 1 C1608X7R1E104K080AA                          | TDK                             | 0.1UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                           |
| 3 C3                    | 1 C1608X5R1V225K080AC; GRM188R6YA225KA12       | TDK;MURATA                      | 2.2UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 35V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                            |
| 4 C4                    | 1 C1608X5R1V475K080AC                          | TDK                             | 4.7UF           | CAP; SMT (0603); 4.7UF; 10%; 35V; X5R; CERAMIC CHIP                                                                                  |
| 5 J1                    | 1 ZX62-B-5PA(33)                               | HIROSE ELECTRIC CO LTD.         | ZX62-B-5PA(33)  | CONNECTOR; MALE; SMT; USB MICRO B-TYPE; BOTTOM MOUNT; RIGHT ANGLE; 5PINS                                                             |
| 6 J2, J3                | 2 SJ1-3523NG                                   | CUI INC.                        | SJ1-3523NG      | CONNECTOR; FEMALE; THROUGH HOLE; 3.5MM NOSWITCH JACK STEREO, RIGHT ANGLE; 3PINS                                                      |
| 7 J4-J7                 | 4 5-1814832-1                                  | TYCO                            | 5-1814832-1     | CONNECTOR; FEMALE; THROUGH HOLE; CONN SOCKET SMA STR DIE CAST PCB; STRAIGHT; 5PINS                                                   |
| 8 JU1                   | 1 PEC03SAAN                                    | SULLINS                         | PEC03SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                            |
| 9 JU2                   | 1 PEC03DAAN                                    | SULLINS ELECTRONICS             | CORP. PEC03DAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 6PINS; -65 DEGC TO +125 DEGC                                             |
| 10 JU3                  | 1 PEC04DAAN                                    | SULLINS ELECTRONICS             | CORP. PEC04DAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NOTHREAD; M3.5;                |
| 11 MH1-MH4              | 4                                              | 9032 KEYSTONE                   |                 | 9032 5/8IN; NYLON                                                                                                                    |
| 12 R1                   | 1 CRCW0805232KFK                               | VISHAY DALE                     | 232K            | RESISTOR; 0805; 232K OHM; 1%; 100PPM; 0.125W; THICK FILM                                                                             |
| 13 R2, R4-R6            | 4 CRCW0805100KFK; RK73H2ATTD1003;ERJ- 6ENF1003 | VISHAY DALE;KOA SPEER;PANASONIC | 100K            | RESISTOR; 0805; 100K; 1%; 100PPM; 0.125W; THICK FILM                                                                                 |
| 14 R3                   | 1 ERJ-6ENF6192                                 | PANASONIC                       | 61.9K           | RESISTOR; 0805; 61.9K OHM; 1%; 100PPM; 0.125W; THICK FILM                                                                            |
| 15 R7                   | 1 PV37W504C01B00                               | MURATA                          | 500K            | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 500K OHM; 10%; 150PPM; 0.25W; MOLDER CERAMIC OVER METAL FILM                                     |
| 16 TP1, TP3-TP5, TP12   | 5                                              | 5000 KEYSTONE                   | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                     |
| 17 TP2, TP6, TP10, TP13 | 4                                              | 5001 KEYSTONE                   | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                   |
| 18 TP7-TP9, TP11        | 4                                              | 5002 KEYSTONE                   | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                |
| 19 U1                   | 1 MAX20336ENT+                                 | MAXIM                           | MAX20336ENT+    | EVKIT PART - IC; ULTRA-SMALL; LOW-RON; BEYOND-THE-RAILS DPST ANALOG SWITCH; PACKAGE OUTLINE NUMBER: 21-100308; PACKAGE CODE: N60K1+1 |
| 20 U2                   | 1 MAX8880EUT+                                  | MAXIM                           | MAX8880EUT+     | IC; VREG; ULTRA-LOW-IQ LOW-DROPOUT LINEAR REGULATOR WITH POK; SOT23-6                                                                |
| 21 PCB                  | 1 MAX20336                                     | MAXIM                           | PCB             | PCB:MAX20336                                                                                                                         |
|                         | 41                                             |                                 |                 |                                                                                                                                      |

Evaluates: MAX20336

## MAX20336 EV Kit Schematic

<!-- image -->

│

## MAX20336 EV Kit PCB Layout

Silk Top

<!-- image -->

Top

<!-- image -->

Bottom

<!-- image -->

Silk Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION       | PAGES CHANGED   |
|-------------------|-----------------|-------------------|-----------------|
|                 0 | 1/19            | Initial release   | -               |
|                 1 | 12/20           | Updated the title | 1-5             |
|                 2 | 1/21            | Updated the title | 1-5             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

<!-- image -->

│

Evaluates: MAX20336