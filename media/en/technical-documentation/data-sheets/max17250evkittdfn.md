<!-- lastmod 2023-06-05 -->
## Evaluates: MAX17250 in TDFN Package MAX17250 TDFN Evaluation Kit

## General Description

The  MAX17250 TDFN  evaluation  kit  (EV  kit)  evaluates the MAX17250 IC in the TDFN package. The MAX17250 are  high-efficiency,  low  quiescent  current  synchronous step-up  DC-DC  converters  with  True  Shutdown™,  programmable  input  current  limit,  and  short-circuit  protection. The MAX17250 EV kit operates over an input range of 2.7V to 18V, depending on load. The EV kit provides resistor-configurable output voltages from 3V to 18V. The input  peak  current  limit  can  be  set  to  3.5A/2.7A/1.85A of  current.  The  EV  kit  comes  with  the  MAX17250ATD+ (TDFN) installed.

## Features

- Evaluate the MAX17250 IC in a 14-Pin (3mm x 3mm) TDFN
- 2.7V to 18V Input Range
- 3V to 18V Configurable Output Voltage
- Up to 3.5A/2.7A/1.85A Input Peak Current
- Proven 4-Layer 1.5-oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX17250 TDFN EV Kit Files

| FILE                                      | DECRIPTION                |
|-------------------------------------------|---------------------------|
| MAX17250 TDFN EV BOM                      | EV Kit Bill of Material   |
| MAX17250 TDFN EV PCB Layout               | EV Kit Layout             |
| MAX17250 TDFN EV Schematic                | EV Kit Schematic          |
| MAX17250 TDFN Minimal Component Schematic | Minimal Component Circuit |

319-100246; Rev 0; 8/18

<!-- image -->

## Quick Start

## Required Equipment

- MAX17250 TDFN EV kit
- 18V, 5A DC power supply
- Electronic load capable of 2A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Verify that jumpers JU101 and JU102 are in their default positions, as shown in Table 1 and Table 2.
- 2) Connect the power supply between the IN and nearest PGND terminal posts.
- 3) Connect the electronic load between the OUT and nearest PGND terminal posts.
- 4) Connect the DVM between the OUT and nearest PGND terminal posts.
- 5) Set the power supply to 6V and turn it on.
- 6) Set the electronic load to 500mA at constant current mode, then enable the electronic load.
- 7) Verify that the voltage at the OUT terminal post is approximately 12V.

## MAX17250 TDFN Evaluation Kit

## Detailed Description of Hardware

The MAX17250 TDFN EV kit evaluates the MAX17250 IC in a TDFN package. The MAX17250 are high-efficiency, low  quiescent  current  synchronous  step-up  DC-DC converters  with  True  Shutdown,  programmable  input current limit and short-circuit protection. The MAX17250 TDFN  EV  kit  operates  over  an  input  range  of  2.7V  to 18V,  depending  on  load.  The  EV  kit  provides  resistorconfigurable output voltages from 3V to 18V. The inductor peak current limit can be set to 3.5A/2.7A/1.85A.

The  EV  Kit  comes  with  the  MAX17250ATD+  (TDFN) installed  and  is  configured  for  a  12V  output.  The  12V output can deliver 720mA of current at 6V input.

## EN

The MAX17250 TDFN EV kit provides a jumper JU101 to configure the EN pin of the MAX17250. Different settings of this jumper can simulate different controlling scenarios at the EN pin. Refer to Table 1 for JU101 jumper settings.

## ISET

The MAX17250 TDFN EV kit provides a jumper JU102 to configure the ISET pin of the MAX17250. Different settings of  this  jumper  set  the  input  inductor  peak  current  to  a different value. Refer to Table 2 for JU102 jumper setting.

## Spare Inductors

The MAX17250 TDFN EV Kit provides spare inductors on the PCB's solder side. These spare inductors can be used to reconfigure the EV Kit output current ratings.

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

| PART               | TYPE   |
|--------------------|--------|
| MAX17250EVKIT#TDFN | EV Kit |

# Denotes RoHS

## Evaluates: MAX17250 in TDFN Package

## Table 1. EN (JU101)

| JU101 SHUNT POSITION   | DESCRIPTION                                                                        |
|------------------------|------------------------------------------------------------------------------------|
| 1-2*                   | Enabled. EN = IN*R102/(R101 + R102)                                                |
| 1-3                    | External logic connected to EN test point (1.5V or higher = Enable, 0V = Disabled) |
| 1-4                    | Disabled. EN = PGND                                                                |
| Not Installed          | Disabled. EN = PGND through pulldown resistor R102.                                |

## Table 2. ISET (JU102)

| JU102 SHUNT POSITION   | DESCRIPTION                                            |
|------------------------|--------------------------------------------------------|
| 1-2*                   | ISET = VL (Inductor Peak Current Limit set to 3.5A)    |
| 2-3                    | ISET =AGND (Inductor Peak Current Limit set to 2.7A)   |
| Not Installed          | ISET = OPEN (Inductor Peak Current Limit set to 1.85A) |

│

## MAX17250 TDFN EV Kit Bill of Materials

| ITEM         | REF_ DES         | QTY    | MFG PART #                                                                 | MFG                                             | VALUE          | DESCRIPTION                                                                                                                                                                                                       |
|--------------|------------------|--------|----------------------------------------------------------------------------|-------------------------------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1            | C101             | 1      | CGA2B3X7R1H104K; C1005X7R1H104K050BB; GRM155R71H104KE14; GCM155R71H104KE02 | TDK;TDK; MURATA; MURATA                         | 0.1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                        |
| 2            | C102             | 1      | TMK212B7225KG                                                              | TAIYO YUDEN                                     | 2.2UF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                        |
| 3            | C103, C104, C106 | 3      | C1210C106K3RAC; GRM32DR71E106K                                             | KEMET; MURATA                                   | 10UF           | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                 |
| 4            | C105, C111       | 2      | GRM32ER71E226KE15; CL32B226KAJNFN; CL32B226KAJNNW; TMK325B7226KM           | MURATA; SAMSUNG ELECTRO- MECHANICS;T AIYO YUDEN | 22UF           | CAPACITOR; SMT (1210); CERAMIC CHIP; 22UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R CAPACITOR; SMT (0402); CERAMIC CHIP; 4700PF; 25V; TOL=10%;                                                              |
| 5            | C110             | 1      | GRM155R71E472KA01                                                          | MURATA                                          | 4700PF         | TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                                                                                  |
| 6            | EN               | 1      | 5002                                                                       | KEYSTONE                                        | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                                                                                             |
| 7            | JU101            | 1      | " 22-28-4043"                                                              | MOLEX                                           | " 22-28- 4043" | CONNECTOR; MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 4PINS                                                                                                                                           |
| 8            | JU102            | 1      | PEC03SAAN                                                                  | SULLINS                                         | PEC03SA AN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                                                         |
| 9            | L1A              | 1      | IHLP2020CZER1R5M11                                                         | VISHAY DALE                                     | 1.5UH          | INDUCTOR; SMT; SHIELDED; 1.5UH; 20%; 7.5A                                                                                                                                                                         |
| 10           | L1B              | 1      | IHLP2020CZER3R3M11                                                         | VISHAY DALE                                     | 3.3UH          | INDUCTOR; SMT; 3.3UH; TOL=+/-20%; 7A; -55 DEGC TO +125 DEGC                                                                                                                                                       |
| 11           | L1C              | 1      | 74438356033                                                                | WURTH ELECTRONIC S INC                          | 3.3UH          | INDUCTOR; SMT; SHIELDED; 3.3UH; TOL=+/-20%; 3.6A                                                                                                                                                                  |
| 12           | L101             | 1      | IHLP2020CZER2R2M11                                                         | VISHAY DALE                                     | 2.2UH          | INDUCTOR; SMT; SHIELDED; 2.2UH; 20%; 6.75A                                                                                                                                                                        |
| 13           | LX, OUT          | 2      | 131-4353-00                                                                | TEKTRONICS VISHAY                               | 131-4353- 00   | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS;                                                                                                                                  |
| 14           | R101             | 1      | CRCW0402200KFK; RF73H1ELTP2003                                             | DALE;KOA SPEER ELECTRONIC S                     | 200K           | RESISTOR; 0402; 200K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                                             |
| 15           | R102             | 1      | CRCW0402100KFK; RC0402FR-07100KL                                           | VISHAY DALE;YAGEO PHICOMP                       | 100K           | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                                             |
| 16           | R103             | 1      | CRCW040284K5FK                                                             | VISHAY DALE                                     | 84.5K          | RESISTOR; 0402; 84.5K OHM; 1%; 100PPM; 0.063W; METAL FILM                                                                                                                                                         |
| 17           | R104             | 1      | CRCW040210K0FK; RC0402FR-0710K                                             | VISHAY DALE;YAGEO PHICOMP                       | 10K            | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                                              |
| 18           | R105             | 1      | MCR01MZPF1001                                                              | ROHM SEMICONDUC TOR                             | 1K             | RESISTOR; 0402; 1K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                                                            |
| 19           | R106, R107       | 2      | ERJ-2GE0R00X                                                               | PANASONIC                                       |                | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                                            |
| 20           | SU101            | 1      | S1100-B;SX1100-B                                                           | KYCON;KYCO N                                    | SX1100-B       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD                                                                                                                  |
| 21           | U101             | 1      | MAX17250ATD+                                                               | MAXIM                                           | MAX1725 0ATD+  | EVKIT PART - IC; CONV; 2.7V TO 18V; BOOST CONVERTER WITH 0.1MICROAMPERE TRUE SHUTDOWN; SHORT CIRCUIT PROTECTION AND SELECTABLE INPUT CURRENT LIMIT; PKG. OUTLINE: 21-0137; PKG. CODE: T1433-2C; LAND PATTERN: 90- |
| 22           | VL               | 1      | 5000                                                                       | KEYSTONE                                        | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE                                                                                                          |
| 23           | X1, X2, X8, X9   | 4      | 108-0740-001                                                               | EMERSON NETWORK POWER                           | 108-0740- 001  | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                                                                                          |
|              | AGND,            | 2      | 5001                                                                       | KEYSTONE                                        | N/A            | TESTPOINT;PINDIA=0.1IN;TOTALLENGTH=0.3IN;BOARDHOLE=0.                                                                                                                                                             |
| 24 25        | X3 PCB           | 1      | MAX17250TDFN                                                               | MAXIM                                           | PCB            | 04IN;BLACK;PHOSPHORBRONZEWIRESILVERPLATEFINISH; PCB:MAX17250TDFN                                                                                                                                                  |
| 26           | C108, C109 DNP   | 0      | N/A                                                                        | N/A                                             | OPEN           | CAPACITOR; SMT (3025); OPEN; IPC MAXIMUM LAND PATTERN                                                                                                                                                             |
| 27           | C107 DNP         | 0      | N/A                                                                        | N/A                                             | OPEN           | CAPACITOR; SMT (1210); OPEN; IPC MAXIMUM LAND PATTERN                                                                                                                                                             |
| TOTAL        | TOTAL            | 34     |                                                                            |                                                 |                |                                                                                                                                                                                                                   |
| NOTE: DNI--> | NOTE: DNI-->     | DO NOT | INSTALL(PACKOUT) ; DNP-->                                                  | DO NOT                                          | PROCURE        |                                                                                                                                                                                                                   |

## MAX17250 TDFN EV Kit Schematic

<!-- image -->

│

Evaluates: MAX17250 in TDFN Package

MAX17250 TDFN EV Kit-Top Silkscreen

<!-- image -->

MAX17250 TDFN EV Kit-Top

<!-- image -->

## Evaluates: MAX17250 in TDFN Package

## MAX17250 TDFN EV Kit PCB Layout Diagrams

MAX17250 TDFN EV Kit-Level 2 GND

<!-- image -->

MAX17250 TDFN EV Kit-Level 3 POWER

<!-- image -->

│

Evaluates: MAX17250 in TDFN Package

## MAX17250 TDFN EV Kit PCB Layout Diagrams (continued)

MAX17250 TDFN EV Kit-Bottom

<!-- image -->

MAX17250 TDFN EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX17250 TDFN Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 08/18           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitr\ and specifications Zithout notice at an\ time.

<!-- image -->

│

Evaluates: MAX17250 in TDFN Package