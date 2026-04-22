<!-- lastmod 2023-06-05 -->
## MAX17250 WLP Evaluation Kit

## General Description

The  MAX17250  WLP  evaluation  kit  (EV  kit)  evaluates the  MAX17250  IC  in  the  wafer-level  package  (WLP). The MAX17250  are high-efficiency, low quiescent current,  synchronous  step-up  DC-DC  converters  with True Shutdown™, programmable input current limit, and short-circuit  protection.  The  MAX17250  EV  kit  operates over an input range of 2.7V to 18V, depending on load. The EV kit provides resistor-configurable output voltages from 3V to 18V. The input peak current limit can be set to 3.5A/2.7A/1.85A of current. The EV kit comes with the MAX17250ANC+ (WLP) installed.

## Features

- Evaluate the MAX17250 IC in a 12-Ball (1.49mm x 1.72mm) WLP
- 2.7V to 18V Input Range
- 3V to 18V Configurable Output Voltage
- Up to 3.5A/2.7A/1.85A Input Peak Current
- Proven 4-Layer 1.5-oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX17250 WLP EV Kit Files

| FILE                                     | DECRIPTION                |
|------------------------------------------|---------------------------|
| MAX17250 WLP EV BOM                      | EV Kit Bill of Material   |
| MAX17250 WLP EV PCB Layout               | EV Kit Layout             |
| MAX17250 WLP EV Schematic                | EV Kit Schematic          |
| MAX17250 WLP Minimal Component Schematic | Minimal Component Circuit |

319-100242; Rev 0; 8/18

<!-- image -->

Evaluates: MAX17250 in WLP

## Quick Start

## Required Equipment

- MAX17250 WLP EV kit
- 18V, 5A DC power supply
- Electronic load capable of 2A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Verify that jumpers JU1 and JU2 are in their default positions, as shown in Table 1 and Table 2 .
- 2) Connect the power supply between the IN1 and nearest PGND1 terminal posts.
- 3) Connect the electronic load between the OUT1 and nearest PGND1 terminal posts.
- 4) Connect the DVM between the OUT1 and nearest PGND1 terminal posts.
- 5) Set the power supply to 6V and turn it on.
- 6) Set the electronic load to 500mA at constant current mode, then enable the electronic load.
- 7) Verify that the voltage at the OUT1 terminal post is approximately 12V.

## MAX17250 WLP Evaluation Kit

## Detailed Description of Hardware

The MAX17250 WLP EV kit evaluates the MAX17250 IC in  a  WLP  package.  The  MAX17250  are  high-efficiency, low  quiescent  current,  synchronous  step-up  DC-DC converters  with  True  Shutdown™,  programmable  input current limit, and short-circuit protection. The MAX17250 WLP EV kit operates over an input range of 2.7V to 18V, depending on load. The EV kit provides resistor-configurable output voltages from 3V to 18V. The inductor peak current limit can be set to 3.5A/2.7A/1.85A.

The  EV  kit  comes  with  the  MAX17250ANC+  (WLP) installed  and  is  configured  for  a  12V  output.  The  12V output can deliver 720mA of current at 6V input.

## EN

The  MAX17250  WLP  EV  kit  provides  a  jumper  JU1  to configure the EN pin of the MAX17250. Different settings of this jumper can simulate different controlling scenarios at the EN pin. Refer to Table 1 for JU1 jumper settings.

## ISET

The  MAX17250  WLP  EV  kit  provides  a  jumper  JU2  to configure the ISET pin of the MAX17250. Different settings of  this  jumper  set  the  input  inductor  peak  current  to  a different value. Refer to Table 2 for JU2 jumper settings.

## Spare Inductors

The MAX17250 WLP EV Kit provides spare inductors on the PCB's solder side. These spare inductors can be used to reconfigure the EV Kit output current ratings.

## Component Suppliers

| SUPPLIER         | WEBSITE           |
|------------------|-------------------|
| Coilcraft        | www.coilcraft.com |
| Murata/TOKO      | www.murata.com    |
| TDK              | www.tdk.com       |
| Wurth Elektronik | www.we-online.com |

Note:

Indicate that you are using the MAX17250 when contacting these component suppliers.

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX17250EVKIT#WLP | EV Kit |

# Denotes RoHS

Evaluates: MAX17250 in WLP

## Table 1. EN (JU101)

| JU1 SHUNT POSITION   | DESCRIPTION                                                                         |
|----------------------|-------------------------------------------------------------------------------------|
| 1-2*                 | Enabled. EN = IN1 x R2/(R1+R2)                                                      |
| 1-3                  | External Logic connected to EN1 test point (1.5V or higher = Enable, 0V = Disabled) |
| 1-4                  | Disabled. EN = PGND1                                                                |
| Not Installed        | Disabled. EN = PGND1 through pulldown resistor R2.                                  |

## Table 2. ISET (JU102)

| JU2 SHUNT POSITION   | DESCRIPTION                                            |
|----------------------|--------------------------------------------------------|
| 1-2*                 | ISET = VL1 (Inductor Peak Current Limit set to 3.5A)   |
| 2-3                  | ISET =AGND1 (Inductor Peak Current Limit set to 2.7A)  |
| Not Installed        | ISET = OPEN (Inductor Peak Current Limit set to 1.85A) |

## MAX17250 WLP EV Kit Bill of Materials

|   ITEM | REF_DES     | DNI/DNP   |   QTY | MFG PART #                                                       | MANUFACTURER                                 | VALUE         | DESCRIPTION                                                                                                        | COMMENTS   |
|--------|-------------|-----------|-------|------------------------------------------------------------------|----------------------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------|------------|
|      1 | AGND1, X105 | -         |     2 | 5001                                                             | KEYSTONE                                     | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|      2 | C1          | -         |     1 | CGA2B3X7R1H104K; C1005X7R1H104K050BB; GRM155R71H104KE14          | TDK;TDK;MURATA                               | 0.1UF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                         |            |
|      3 | C2          | -         |     1 | GRM21BR71E225KA73                                                | MURATA                                       | 2.2UF         | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; TC=+/;                 |            |
|      4 | C3, C4, C6  | -         |     3 | C1210C106K3RAC; GRM32DR71E106K                                   | KEMET;MURATA                                 | 10UF          | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                  |            |
|      5 | C5, C11     | -         |     2 | GRM32ER71E226KE15; CL32B226KAJNFN; CL32B226KAJNNW;TMK32 5B7226KM | MURATA;SAMSUNG ELECTRO-MECHANICS;TAIYO YUDEN | 22UF          | CAPACITOR; SMT (1210); CERAMIC CHIP; 22UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                          |            |
|      6 | C10         | -         |     1 | GRM155R71E472KA01                                                | MURATA                                       | 4700PF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 4700PF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                        |            |
|      7 | EN1         | -         |     1 | 5002                                                             | KEYSTONE                                     | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;              |            |
|      8 | JU1         | -         |     1 | " 22-28-4043"                                                    | MOLEX                                        | " 22-28-4043" | CONNECTOR; MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 4PINS                                            |            |
|      9 | JU2         | -         |     1 | PEC03SAAN                                                        | SULLINS                                      | PEC03SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                          |            |
|     10 | L1          | -         |     1 | IHLP2020CZER2R2M11                                               | VISHAY DALE                                  | 2.2UH         | INDUCTOR; SMT; SHIELDED; 2.2UH; 20%; 6.75A                                                                         |            |
|     11 | L1A         | -         |     1 | IHLP2020CZER1R5M11                                               | VISHAY DALE                                  | 1.5UH         | INDUCTOR; SMT; SHIELDED; 1.5UH; 20%; 7.5A                                                                          |            |
|     12 | L1B         | -         |     1 | IHLP2020CZER3R3M11                                               | VISHAY DALE                                  | 3.3UH         | INDUCTOR; SMT; 3.3UH; TOL=+/-20%; 7A; -55 DEGC TO +125 DEGC                                                        |            |
|     13 | L1C         | -         |     1 | 74438356033                                                      | WURTH ELECTRONICS INC                        | 3.3UH         | INDUCTOR; SMT; SHIELDED; 3.3UH; TOL=+/-20%; 3.6A                                                                   |            |
|     14 | LX1, OUT1   | -         |     2 | 131-4353-00                                                      | TEKTRONICS                                   | 131-4353-00   | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS;                                   |            |
|     15 | R1          | -         |     1 | CRCW0402200KFK; RF73H1ELTP2003                                   | VISHAY DALE;KOA SPEER ELECTRONICS            | 200K          | RESISTOR; 0402; 200K; 1%; 100PPM; 0.0625W; THICK FILM                                                              |            |
|     16 | R2          | -         |     1 | CRCW0402100KFK; RC0402FR-07100KL                                 | VISHAY DALE; YAGEO PHICOMP                   | 100K          | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                              |            |
|     17 | R3          | -         |     1 | CRCW040284K5FK                                                   | VISHAY DALE                                  | 84.5K         | RESISTOR; 0402; 84.5K OHM; 1%; 100PPM; 0.063W; METAL FILM                                                          |            |
|     18 | R4          | -         |     1 | CRCW040210K0FK; RC0402FR-0710K                                   | VISHAY DALE; YAGEO PHICOMP                   | 10K           | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                               |            |
|     19 | R5          | -         |     1 | MCR01MZPF1001                                                    | ROHM SEMICONDUCTOR                           | 1K            | RESISTOR; 0402; 1K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                             |            |
|     20 | R6, R7      | -         |     2 | ERJ-2GE0R00X                                                     | PANASONIC                                    |               | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                             |            |

Evaluates: MAX17250 in WLP

## MAX17250 WLP EV Kit Bill of Materials (continued)

| ITEM   | REF_DES            | DNI/DNP   |   QTY | MFG PART #       | MANUFACTURER          | VALUE        | DESCRIPTION                                                                                                                                                                                              | COMMENTS   |
|--------|--------------------|-----------|-------|------------------|-----------------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 21     | SU1                | -         |     1 | S1100-B;SX1100-B | KYCON;KYCON           | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                                                  |            |
| 22     | U1                 | -         |     1 | MAX17250ANC+     | MAXIM                 | MAX17250ANC+ | EVKIT PART - IC; CONV; 2.7V TO 18V; BOOST CONVERTER WITH 0.1MICROAMPERE TRUE SHUTDOWN; SHORT CIRCUIT PROTECTION AND SELECTABLE INPUT CURRENT LIMIT; PKG. OULTINE: 21- 100158; PKG. CODE: N121B1+1; WLP12 |            |
| 23     | VL1                | -         |     1 | 5000             | KEYSTONE              | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                         |            |
| 24     | X10, X101-X103     | -         |     4 | 108-0740-001     | EMERSON NETWORK POWER | 108-0740-001 | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                                                                                 |            |
| 25     | PCB                | -         |     1 | MAX17250WLP      | MAXIM                 | PCB          | PCB:MAX17250WLP                                                                                                                                                                                          | -          |
| 26     | IN1, J2, J3, PGND1 | DNP       |     0 | MAXIMPAD         | N/A                   | MAXIMPAD     | EVK KIT PARTS; MAXIM PAD; NO WIRE TO BE SOLDERED ON THE MAXIMPAD                                                                                                                                         |            |
| 27     | C7                 | DNP       |     0 | N/A              | N/A                   | OPEN         | CAPACITOR; SMT (1210); OPEN; IPC MAXIMUM LAND PATTERN                                                                                                                                                    |            |
| 28     | C8, C9             | DNP       |     0 | N/A              | N/A                   | OPEN         | CAPACITOR; SMT (3025); OPEN; IPC MAXIMUM LAND PATTERN                                                                                                                                                    |            |
| 29     | C12                | DNP       |     0 | N/A              | N/A                   | OPEN         | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                                                                                                                  |            |
| TOTAL  |                    |           |    34 |                  |                       |              |                                                                                                                                                                                                          |            |

## MAX17250 WLP EV Kit Schematics

<!-- image -->

## MAX17250 WLP EV Kit PCB Layout Diagrams

<!-- image -->

MAX17250 WLP EV Kit-Top Silkscreen

<!-- image -->

MAX17250 WLP EV Kit-Top

MAX17250 WLP EV Kit- Level 2 GND

<!-- image -->

MAX17250 WLP EV Kit-Level 3 POWER

<!-- image -->

## MAX17250 WLP EV Kit PCB Layout Diagrams (continued)

MAX17250 WLP EV Kit-Bottom

<!-- image -->

MAX17250 WLP EV Kit-Bottom Silkscreen

<!-- image -->

## MAX17250 WLP Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/18            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17250 in WLP