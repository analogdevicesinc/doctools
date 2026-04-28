<!-- lastmod 2023-10-25 -->
<!-- image -->

## Evaluates: MAX17291C

## General Description

The  MAX17291C  evaluation  kit  (EV  kit)  evaluates  the MAX17291C  IC  in  a  wafer-level  package  (WLP).  The MAX17291C is  a  low  quiescent  current  boost  (step-up) DC-DC converter with an 80mA peak inductor current limit, TrueShutdown ™ ,  and short-circuit protection. The EV kit operates over an input range of 1.8V to 4.5V and provides resistor-configurable  output  voltages  from  5.5V  to  20V. The EV kit comes with the MAX17291CANT+ installed.

## Features and Benefits

- Evaluates the MAX17291C IC
- (3 x 2 Bump, 0.4mm Pitch)
- 1.8V to 4.5V Input Range
- 5.5V to 20V Configurable Output Voltage
- Up to 80mA Input Peak Current
- Proven 2-Layer, 1.5oz Copper PCB Layout
- Demonstrates Compact Solution Size

## MAX17291C EV Kit Files

| FILE                             | DESCRIPTION              |
|----------------------------------|--------------------------|
| MAX17291C WLP EVKIT A            | EV Kit Bill of Materials |
| MAX17291C WLP EVKIT A PCB Layout | EV Kit Layout            |
| MAX17291C WLP EVKIT A Schematic  | EV Kit Schematic         |

Ordering Information appears at end of data sheet.

## EV Kit Photo

## MAX17291C Evaluation Kit

## Quick Start

## Required Equipment

- MAX17291C WLP EV kit
- 1.8V to 4.5V, 5A DC power supply
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

1. Verify  that  a  shunt  is  installed  on  pins  1  and  2  of jumpers JU1 (EV kit enabled).
2.  Connect the power supply between the IN and nearest GND terminal posts.
3.  Connect the DVM between the OUT and nearest GND terminal posts.
4.  Set the power supply to 4.5V and turn it on.
5.  Verify  that  the  voltage  at  the  OUT-terminal  post  is approximately 12V.

<!-- image -->

TrueShutdown is a trademark of Maxim Integrated Products, Inc.

319-101027; Rev 0; 10/23

## Evaluates: MAX17291C

## Detailed Description of Hardware

The MAX17291C EV kit evaluates the MAX17291C IC in a wafer-level package (WLP). The MAX17291C is a highefficiency,  low-quiescent  current,  step-up  DC-DC  converter  with  TrueShutdown  and  short-circuit  protection.  True Shutdown disconnects the output from the input with no forward or reverse current. The MAX17291C WLP EV kit operates over an input range of 1.8V to 4.5V. The EV kit provides resistor-configurable output voltages from 5.5V to 20V. The EV kit has the MAX17291CANT+ (WLP) installed and is configured for a 12V output.

## EN

The MAX17291C WLP EV kit provides a jumper JU1 to enable or disable the MAX17291C. See Table 1 for JU1 jumper settings.

## Table 1. Jumper Connection Guide

| JUMPER   | FEATURE            |
|----------|--------------------|
| 1-2      | Enabled. EN = IN   |
| 2-3      | Disabled. EN = GND |

Default options are in bold.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17291CEVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX17291C EV Kit Bill of Materials

|   ITEM | REF_DES   |   QTY | MFG PART #                                                                                                                         | MANUFACTURER                                                    | VALUE   | DESCRIPTION                                                                                                             |
|--------|-----------|-------|------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------|
|      1 | C1, C8    |     2 | CL21B106KPQNNN;L MK212AB7106KG;C08 05X106K8RACAUTO; GRM21BR71A106KA7 3;C2012X7R1A106K1 25AC;GMC21X7R106 K10NT                      | SAMSUNG;TAIYO YUDEN;KEMET;MU RATA;TDK;CAL- CHIP ELECTRONIC INC. | 10UF    | CAP; SMT (0805); 10UF; 10%; 10V; X7R; CERAMIC                                                                           |
|      2 | C2        |     1 | GRM31CR71H475KA1 2;GRJ31CR71H475KE 11;GXM31CR71H475 KA10;UMK316AB7475 KL;GRM31CR71H475 KA12L;CC1206KKX7R 9BB475;CC1206KKX7 R9BB475 | MURATA;MURATA; MURATA;TAIYO YUDEN;MURATA; YAGEO                 | 4.7UF   | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                          |
|      3 | C6        |     1 | UWJ0J151MCL                                                                                                                        | NICHICON                                                        | 150UF   | CAP; SMT; 150UF; 20%; 6.3V; ALUMINUM-ELECTROLYTIC                                                                       |
|      4 | EN, TP3   |     2 | 5012                                                                                                                               | KEYSTONE                                                        | N/A     | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |

## MAX17291C Evaluation Kit

## Evaluates: MAX17291C

## MAX17291C Evaluation Kit

|   ITEM | REF_DES              |   QTY | MFG PART #                                                                                                                         | MANUFACTURER                                    | VALUE           | DESCRIPTION                                                                                                             |
|--------|----------------------|-------|------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------|
|      5 | GND1, TP2, TP4       |     3 | 5011                                                                                                                               | KEYSTONE                                        | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      6 | IN, OUT, PGND, PGND2 |     4 | 108-0740-001                                                                                                                       | EMERSON NETWORK POWER                           | 108- 0740- 001  | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                |
|      7 | JU1                  |     1 | PEC03SAAN                                                                                                                          | SULLINS                                         | PEC03 SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                               |
|      8 | L1                   |     1 | DFE201610E-100M                                                                                                                    | MURATA                                          | 10UH            | INDUCTOR; SMT (0806); FERRITE; 10UH; 20%; 0.65A                                                                         |
|      9 | LX                   |     1 | 131-4353-00                                                                                                                        | TEKTRONICS                                      | 131- 4353- 00   | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                         |
|     10 | R1                   |     1 | CRCW06033M48FK                                                                                                                     | VISHAY                                          | 3.48M           | RES; SMT (0603); 3.48M; 1%; +/-100PPM/DEGK; 0.1000W                                                                     |
|     11 | R2                   |     1 | CRCW06034023FK;E RJ-3EKF4023                                                                                                       | VISHAY; PANASONIC                               | 402K            | RES; SMT (0603); 402K; 1%; +/-100PPM/DEGC; 0.1000W                                                                      |
|     12 | R5                   |     1 | ERJ-2GE0R00                                                                                                                        | PANASONIC                                       | 0               | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                             |
|     13 | SU1                  |     1 | 2SN-BK-G                                                                                                                           | SAMTEC                                          | 2SN- BK-G       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.175IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                |
|     14 | U1                   |     1 | MAX17291CANT+                                                                                                                      | ANALOG DEVICES                                  | MAX17 291CA NT+ | EVKIT PART - IC; HIGH-VOLTAGE MICROPOWER BOOST CONVERTER; PACKAGE OUTLINE: 21-100577; PACKAGE CODE: N60N1+1S WLP6       |
|     15 | PCB                  |     1 | MAX17291CEVKIT#                                                                                                                    | ANALOG DEVICES                                  | PCB             | PCB:MAX17291CEVKIT#                                                                                                     |
|     16 | C3, C4               |     0 | N/A                                                                                                                                | N/A                                             | OPEN            | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                                 |
|     17 | C5                   |     0 | GRM31CR71H475KA1 2;GRJ31CR71H475KE 11;GXM31CR71H475 KA10;UMK316AB7475 KL;GRM31CR71H475 KA12L;CC1206KKX7R 9BB475;CC1206KKX7 R9BB475 | MURATA;MURATA; MURATA;TAIYO YUDEN;MURATA;Y AGEO | 4.7UF           | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                          |
|     18 | C7                   |     0 | N/A                                                                                                                                | N/A                                             | N/A             | CAPACITOR; 0402 PACKAGE; GENERIC                                                                                        |
|     19 | R3                   |     0 | N/A                                                                                                                                | N/A                                             | OPEN            | RESISTOR; 0603; OPEN; FORMFACTOR                                                                                        |
|     20 | R4                   |     0 | N/A                                                                                                                                | N/A                                             | SHOR T          | PACKAGE OUTLINE 0603 RESISTOR                                                                                           |

## Evaluates: MAX17291C

## MAX17291C EV Kit Schematic

<!-- image -->

## Evaluates: MAX17291C

## MAX17291C EV Kit PCB Layout

MAX17291C EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX17291C EV Kit PCB Layout -Bottom Layer

<!-- image -->

## MAX17291C Evaluation Kit

MAX17291C EV Kit PCB Layout -Top Layer

<!-- image -->

MAX17291C EV Kit Component Placement Guide -Bottom Silkscreen

<!-- image -->

## Evaluates: MAX17291C

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/23           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX17291C Evaluation Kit