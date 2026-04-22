<!-- lastmod 2023-06-02 -->
## MAX17291B WLP Evaluation Kit

## General Description

The MAX17291B WLP evaluation kit (EV kit) evaluates the MAX17291B IC packaged in a WLP. The MAX17291B is a low  quiescent  current  boost  (step-up)  DC-DC  converter with a 100mA peak inductor current limit, True Shutdown™,  and  short-circuit  protection.  The  EV  kit operates over an input range of 1.8V to 4.5V and provides resistor-configurable  output  voltages  from  5.5V  to  20V. The  EV  kit  comes  with  the  MAX17291BANT+  (WLP) installed.

## Features and Benefits

- Evaluates the MAX17291B IC in a 6-Bump WLP
- (3 x 2 Bump, 0.4mm Pitch)
- 1.8V to 4.5V Input Range
- 5.5V to 20V Configurable Output Voltage
- Up to 100mA Input Peak Current
- Proven 2-Layer, 1.5oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX17291B WLP EV Kit Files

| FILE                        | DESCRIPTION              |
|-----------------------------|--------------------------|
| MAX17291B WLP EV BOM        | EV Kit Bill of Materials |
| MAX17291B WLP EV PCB Layout | EV Kit Layout            |
| MAX17291B WLP EV Schematic  | EV Kit Schematic         |

Ordering Information appears at end of data sheet.

## EV Kit Photo

<!-- image -->

319-100830; Rev 0; 10/21

<!-- image -->

Evaluates: MAX17291B

## Quick Start

## Required Equipment

- MAX17291B WLP EV Kit
- 1.8V to 4.5V, 5A DC Power Supply
- Electronic Load Capable of 50mA
- Digital Voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify  that  a  shunt  is  installed  on  pins  1  and  2  of jumpers JU1 (EV kit enabled).
- 2) Connect the power supply between the IN and nearest GND terminal posts.
- 3) Connect  the  electronic  load  between  the  OUT  and nearest GND terminal posts.
- 4) Connect the DVM between the OUT and nearest GND terminal posts.
- 5) Set the power supply to 4.5V and turn it on.
- 6) Set  the  electronic  load  to  50mA  at  constant  current mode, then enable the electronic load.
- 7) Verify  that  the  voltage  at  the  OUT-terminal  post  is approximately 12V.

## Detailed Description of Hardware

The MAX17291B WLP EV kit evaluates the MAX17291B IC in a WLP package. The MAX17291B is a high efficiency, low quiescent current, step-up DC-DC converter with True Shutdown and short-circuit protection. True Shutdown disconnects the output from the input with no forward or reverse current. The MAX17291B WLP EV kit operates over an input range of 1.8V to 4.5V. The EV kit provides resistor-configurable output voltages from 5.5V to 20V. The EV kit comes with the MAX17291BANT+ (WLP) installed and is configured for a 12V output. The 12V output can deliver 50mA of current at 4.5V input.

## EN

The MAX17291B WLP EV kit provides a jumper JU1 to enable or disable the MAX17291B. See Table 1 for JU1 jumper settings.

Table 1. EN (JU1) Jumper Settings

| SHUNT POSITION   | DESCRIPTION        |
|------------------|--------------------|
| 1-2*             | Enabled. EN = IN*  |
| 2-3              | Disabled. EN = GND |

*Default Position

## Component Suppliers

| SUPPLIER    | WEBSITE             |
|-------------|---------------------|
| Murata/TOKO | www.murata.com      |
| Nichicon    | www.nichicon-us.com |
| Taiyo Yuden | www.ty-top.com      |

Note : Indicates the use of the MAX17291B when contacting these component suppliers.

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17291BEVK#WLP | EV Kit |

#Denotes RoHS-compliant.

## MAX17291B WLP EV Kit Bill of Materials

|   ITEM | REF_DES   |   QTY | MFG PART #                                                                                                   | MANUFACTURER                                                       | DESCRIPTION                                    |
|--------|-----------|-------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|------------------------------------------------|
|      1 | C1, C8    |     2 | CL21B106KPQNNN; LMK212AB7106KG; C0805X106K8RACAUTO; GRM21BR71A106KA73; C2012X7R1A106K125AC; GMC21X7R106K10NT | SAMSUNG; TAIYO YUDEN; KEMET; MURATA; TDK; CAL-CHIP ELECTRONIC INC. | CAP; SMT (0805); 10UF; 10%; 10V; X7R; CERAMIC  |
|      2 | C2        |     1 | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL; GRM31CR71H475KA12L                  | MURATA; MURATA; MURATA; TAIYO YUDEN; MURATA                        | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC |

Evaluates: MAX17291B

Evaluates: MAX17291B

| 3     | C6                   |   1 | UWJ0J151MCL                                                                                 | NICHICON                                    | CAP; SMT; 150UF; 20%; 6.3V; ALUMINUM-ELECTROLYTIC                                                                              |
|-------|----------------------|-----|---------------------------------------------------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| 4     | EN, TP3              |   2 | 5012                                                                                        | KEYSTONE                                    | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |
| 5     | GND1, TP2, TP4       |   3 | 5011                                                                                        | KEYSTONE                                    | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |
| 6     | IN, OUT, PGND, PGND2 |   4 | 108-0740-001                                                                                | EMERSON NETWORK POWER                       | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                       |
| 7     | JU1                  |   1 | PEC03SAAN                                                                                   | SULLINS                                     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                      |
| 8     | L1                   |   1 | DFE201610E-100M                                                                             | MURATA                                      | INDUCTOR; SMT (0806); FERRITE; 10UH; 20%; 0.65A                                                                                |
| 9     | LX                   |   1 | 131-4353-00                                                                                 | TEKTRONICS                                  | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                                |
| 10    | R1                   |   1 | CRCW06033M48FK                                                                              | VISHAY                                      | RES; SMT (0603); 3.48M; 1%; +/- 100PPM/DEGK; 0.1000W                                                                           |
| 11    | R2                   |   1 | CRCW06034023FK; ERJ-3EKF4023                                                                | VISHAY; PANASONIC                           | RES; SMT (0603); 402K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                            |
| 12    | R5                   |   1 | ERJ-2GE0R00                                                                                 | PANASONIC                                   | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                    |
| 13    | SU1                  |   1 | 2SN-BK-G                                                                                    | SAMTEC                                      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.175IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                       |
| 14    | U1                   |   1 | MAX17291BANT+                                                                               | MAXIM                                       | EVKIT PART-IC; MAX17291BANT+; HIGH-VOLTAGE MICROPOWER BOOST CONVERTER; PACKAGE OUTLINE: 21-100577; PACKAGE CODE: N60N1+1S WLP6 |
| 15    | PCB                  |   1 | MAX17291BWLP                                                                                | MAXIM                                       | PCB:MAX17291BWLP                                                                                                               |
| 16    | C3, C4               |   0 | N/A                                                                                         | N/A                                         | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                                        |
| 17    | C5                   |   0 | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL; GRM31CR71H475KA12L | MURATA; MURATA; MURATA; TAIYO YUDEN; MURATA | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                                 |
| 18    | C7                   |   0 | N/A                                                                                         | N/A                                         | CAPACITOR; 0402 PACKAGE; GENERIC                                                                                               |
| 19    | R3                   |   0 | N/A                                                                                         | N/A                                         | RESISTOR; 0603; OPEN; FORMFACTOR                                                                                               |
| 20    | R4                   |   0 | N/A                                                                                         | N/A                                         | PACKAGE OUTLINE 0603 RESISTOR                                                                                                  |
| TOTAL |                      |  22 |                                                                                             |                                             |                                                                                                                                |

## MAX17291B WLP EV Kit Schematic

<!-- image -->

Evaluates: MAX17291B

## MAX17291B WLP EV Kit PCB Layout

MAX17291B WLP EV Kit Component Placement Guide - Top Silkscreen

<!-- image -->

MAX17291B WLP EV Kit PCB Layout - Bottom

<!-- image -->

Evaluates: MAX17291B

MAX17291B WLP EV Kit PCB Layout - Top

<!-- image -->

MAX17291B WLP EV Kit Component Placement Guide Bottom Silkscreen

<!-- image -->

## MAX17291B WLP Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/21           | Initial Release | -               |

True Shutdown is a trademark of Maxim Integrated Products, Inc.

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

Evaluates: MAX17291B