<!-- lastmod 2022-08-04 -->
## MAX20337 Evaluation Kit

## General Description

The MAX20337 evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  evaluates  the  MAX20337 beyond-the-rails  SPDT  analog  switches.  The  EV  kit comes with the MAX20337ENT+ installed.

The  EV  kit  features  evaluation  of  the  analog  switches through  audio  jack  inputs  and  outputs,  as  well  as  SMA connectors for AC characteristics. Input power to the EV kit  is  provided  by  a  Micro-USB, type-B connector, or an external power supply.

## Features

- USB Power Option
- SMA and 3.5mm Audio Jack Connectors
- Directly Evaluate AC Characteristics Through SMA Connectors
- Quickly Evaluate Audio Performance with 3.5mm Audio Jack Connectors
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- EV Kit Board containing a MAX20337

Ordering Information appears at end of data sheet.

Evaluates: MAX20337

## Quick Start

## Required Equipment

- MAX20337 EV kit
- USB Cable or Power Supply
- Audio source (e.g., MP3 player, computer, etc.)
- External speakers or headphones with 3.5mm audio jack

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect a USB cable to J1 or power VB (TP1) with 5V power supply.
- 2) Verify  that  jumper  JU4  has  a  shunt  installed  shorting pins 2-3. This shorts the control bit (CB) on the devices  to  ground,  electrically  connecting  NC1  to COM1 and NC2 to COM2.
- 3) J2 is now connected to J3. Connect an audio source to the normally closed audio jack J2, using a male-tomale 3.5mm audio cable.
- 4) Connect  external  speakers  or  headphones  to  the common audio jack J3.
- 5) When the audio source outputs the audio signal and JU4 has a shunt shorting pins 2-3, the audio signal should be heard on the speakers or headphones connected at J3.
- 6) Move the shunt on JU4 from pins 2-3 to pins 1-2. Now CB is high, and J4 is connected to J3. The audio signal should no longer be heard on the speakers or headphones connected at J3.
- 7) If  the  audio  source  connection  moves  from  the normally closed audio jack (J2) to the normally open audio jack (J4), the audio signal on the common audio jack (J3) is heard on the speakers or headphones.

<!-- image -->

## MAX20337 Evaluation Kit

## Detailed Description

The  MAX20337  EV  kit  is  a  fully  assembled  and  tested circuit board evaluating the MAX20337 SPDT switches in a 6-bump WLP package.

## Table 1. Power Supply Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                        |
|----------|------------------|--------------------------------------------------------------------|
| JU1      | 1-2*             | V CCEN is connected to VCC                                         |
| JU1      | 2-3              | V CCEN is connected to ground                                      |
| JU2      | 1-2              | VCC is connected to VEXT (TP3). Supply from external power supply. |
| JU2      | 3-4*             | VCC is connected to VHH, output of LDO                             |
| JU2      | 5-6              | VCC is connected to VB, supply from USB bus                        |
| JU3      | 1-2*             | LDO output set to 1.8V                                             |
| JU3      | 3-4              | LDO output set to 2.5V                                             |
| JU3      | 5-6              | LDO output set to 3.3V                                             |
| JU3      | 7-8              | LDO output variable                                                |
| JU4      | 1-2              | CB is high. COM is connected to NO. J4 is connected to J3.         |
| JU4      | 2-3*             | CB is low. COM is connected to NC. J2 is connected to J3.          |

## Power Supply

The EV kit is powered by a user-supplied 1.6V to 5.5V external  DC  power  supply  connected  between  VEXT (TP3) and GND, the raw USB bus supplied at the microUSB connector (J1), or the regulated output of the LDO (U3) that is powered by the USB bus.

Evaluates: MAX20337

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20337EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX20337 EV Kit Bill of Materials

|   ITEM | REF_DEB1:E16S              |   QTY | MFG PART #                                                                                                                                       | MANUFACTURER                                     | VALUE          | DESCRIPTION                                                                                                              |
|--------|----------------------------|-------|--------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|----------------|--------------------------------------------------------------------------------------------------------------------------|
|      1 | C1                         |     1 | GRM21BR71E155KA                                                                                                                                  | MURATA                                           | 1.5µF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 1.5µF; 25V; TOL = 10%; MODEL = X7R; TG = -55°C TO +125°C; TC = ±                    |
|      2 | C2, C5                     |     2 | 885012206071; CGJ3E2X7R1E104K080AA; C1608X7R1E104K080AA; C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K; 06033C104KAT2A; CGA3E2X7R1E104K080AA | WURTH ELECTRONICS INC; TDK; TDK; KEMET; AVX; TDK | 0.1µF          | CAPACITOR; SMT; 0603; CERAMIC; 0.1µF; 25V; 10%; X7R; -55°C to + 125°C; ±15% from -55°C to +125°C                         |
|      3 | C3                         |     1 | C1608X5R1V225K080AC; GRM188R6YA225KA12                                                                                                           | TDK; MURATA                                      | 2.2µF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2µF; 35V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                |
|      4 | C4                         |     1 | C1608X5R1V475K080AC                                                                                                                              | TDK                                              | 4.7µF          | CAP; SMT (0603); 4.7µF; 10%; 35V; X5R; CERAMIC CHIP                                                                      |
|      5 | J1                         |     1 | ZX62-B-5PA(33)                                                                                                                                   | HIROSE ELECTRIC CO LTD.                          | ZX62-B-5PA(33) | CONNECTOR; MALE; SMT; USB MICRO B-TYPE; BOTTOM MOUNT; RIGHT ANGLE; 5PINS                                                 |
|      6 | J2-J4                      |     3 | SJ1-3523NG                                                                                                                                       | CUI INC.                                         | SJ1-3523NG     | CONNECTOR; FEMALE; THROUGH HOLE; 3.5MM NO SWITCH JACK STEREO, RIGHT ANGLE; 3PINS                                         |
|      7 | J5-J7                      |     3 | 73391-0060                                                                                                                                       | MOLEX                                            | 73391-0060     | CONNECTOR; FEMALE; THROUGH HOLE; SMA JACK CONNECTOR; STRAIGHT; 5PINS                                                     |
|      8 | JU1, JU4                   |     2 | PEC03SAAN                                                                                                                                        | SULLINS                                          | PEC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                |
|      9 | JU2                        |     1 | PEC03DAAN                                                                                                                                        | SULLINS ELECTRONICS CORP.                        | PEC03DAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 6PINS; -65°C TO +125°C                                       |
|     10 | JU3                        |     1 | PEC04DAAN                                                                                                                                        | SULLINS ELECTRONICS CORP.                        | PEC04DAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS                                                                |
|     11 | R1                         |     1 | CRCW0805232KFK; ERJ-6ENF2323                                                                                                                     | VISHAY; PANASONIC                                | 232K           | RESISTOR; 0805; 232K Ω ; 1%; 100PPM; 0.125W; THICK FILM                                                                  |
|     12 | R2, R4-R6                  |     4 | CRCW0805100KFK; RK73H2ATTD1003; ERJ-6ENF1003                                                                                                     | VISHAY DALE; KOA SPEER; PANASONIC                | 100K           | RESISTOR; 0805; 100K; 1%; 100PPM; 0.125W; THICK FILM                                                                     |
|     13 | R3                         |     1 | ERJ-6ENF6192                                                                                                                                     | PANASONIC                                        | 61.9K          | RESISTOR; 0805; 61.9KΩ; 1%; 100PPM; 0.125W; THICK FILM                                                                   |
|     14 | R7                         |     1 | PV37W504C01B00                                                                                                                                   | BOURNS                                           | 500K           | RES; THROUGH HOLE-RADIAL LEAD; 500K; 10%; ± 150PPM/°C; 0.25W                                                             |
|     15 | SPACER1- SPACER4           |     4 | 9032                                                                                                                                             | KEYSTONE                                         | 9032           | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                |
|     16 | TP1, TP3-TP5, TP12         |     5 | 5000                                                                                                                                             | KEYSTONE                                         | N/A            | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
|     17 | TP2, TP6, TP10, TP13, TP17 |     5 | 5001                                                                                                                                             | KEYSTONE                                         | N/A            | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     18 | TP7-TP9, TP11, TP14-TP16   |     7 | 5002                                                                                                                                             | KEYSTONE                                         | N/A            | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;              |
|     19 | U1, U2                     |     2 | MAX20337ENT+                                                                                                                                     | MAXIM                                            | MAX20337ENT+   | EVKIT PART - IC; MAX20337; PACKAGE OUTLINE NUMBER: 21-100308; PACKAGE CODE: N60K1+1                                      |
|     20 | U3                         |     1 | MAX8880EUT+                                                                                                                                      | MAXIM                                            | MAX8880EUT+    | IC; VREG; ULTRA-LOW-IQ LOW-DROPOUT LINEAR REGULATOR WITH POK; SOT23-6                                                    |
|     21 | PCB                        |     1 | MAX20337                                                                                                                                         | MAXIM                                            | PCB            | PCB:MAX20337                                                                                                             |

## MAX20337 EV Kit Schematic Diagrams

<!-- image -->

│

## MAX20337 EV Kit PCB Layout Diagrams

MAX20337 EV Kit PCB Layout Diagram-Top Silkscreen

<!-- image -->

MAX20337 EV Kit PCB Layout Diagram-Top View

<!-- image -->

│

## MAX20337 EV Kit PCB Layout Diagrams (continued)

MAX20337 EV Kit PCB Layout Diagram-Bottom View

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION       | PAGES CHANGED   |
|-------------------|-----------------|-------------------|-----------------|
|                 0 | 12/20           | Initial release   | -               |
|                 1 | 1/21            | Updated the title | 1-7             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

<!-- image -->

│

Evaluates: MAX20337