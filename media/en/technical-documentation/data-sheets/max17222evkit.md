<!-- lastmod 2022-08-02 -->
## MAX17222 Evaluation Kit

## General Description

The  MAX17222  evaluation  kit  (EV  kit)  evaluates  the MAX17220-MAX17225  IC  family  of  ultra-low  quiescent current  step-up  DC-DC  converters.  The  MAX17222  EV kit  features  two  independent  circuits  to  evaluate  two different  IC  packages  of  the  MAX17220-MAX17225 family. Both circuits on the EV kit operate over an input range of 400mV to 5.5V, depending on load, with 0.88V typical  startup  with  3kΩ  load.  Each  circuit  provides resistor-configurable  output  voltages  from  1.8V  to  5V  in 100mV/step.

The EV  kit comes  with the  MAX17222ELT+  and MAX17222ENT+ installed.

## Features

- Two Independent Circuits on One Board
- Evaluates the MAX17220-MAX17225 IC Family in a 6-pin µDFN
- Evaluates the MAX17220-MAX17225 IC Family in a 6-pin Wafer-Level Package (WLP)
- 400mV to 5.5V Input Range
- 1.8V to 5V Configurable Output Voltage in 100mV/step
- Up to 100mA/225mA/425mA Output Current
- Proven 2-Layer 1oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assemble and Tested

## MAX17222 EV Kit Files

| FILE                                    | DESCRIPTION               |
|-----------------------------------------|---------------------------|
| MAX17222 EV BOM                         | EV Kit Bill of Material   |
| MAX17222 EV PCB Layout Diagrams         | EV Kit Layout             |
| MAX17222 EV Schematic                   | EV Kit Schematic          |
| MAX17222 EV Minimal Component Schematic | Minimal Component Circuit |

Ordering Information appears at end of data sheet.

Evaluates: MAX17220-MAX17225

## Quick Start

## Required Equipment

- MAX17222 EV kit
- 1.8V to 5V, 3A DC power supply
- Electronic load capable of 225mA
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

## Testing the 3V Output Circuit

- 1) Verify that jumper JU101 is in its default position, as shown in Table 2 .
- 2) Connect the power supply between the IN and nearest GND terminal posts.
- 3) Connect the electronic load between the 3V output and nearest GND terminal posts.
- 4) Connect the DVM between the 3V output and nearest GND terminal posts.
- 5) Set the input power supply to 1.8V and turn on the power supply.
- 6) Set the electronic load to 225mA and enable the electronic load.
- 7) Verify that the voltage at the 3V terminal post is approximately 3V.

## Testing the 5V Output Circuit

- 1) Verify that jumper JU1 is in its default position, as shown in Table 1 .
- 2) Connect the power supply between the IN1 and nearest GND1 terminal posts.
- 3) Connect the electronic load between the 5V output and nearest GND1 terminal posts.
- 4) Connect the DVM between the 5V output and a nearest GND1 terminal posts.
- 5) Set the input power supply to 3V, and turn on the power supply.
- 6) Set the electronic load to 225mA, and enable the electronic load.
- 7) Verify that the voltage at the 5V terminal post is approximately 5V.

<!-- image -->

## MAX17222 Evaluation Kit

## Detailed Description of Hardware

The  MAX17222  EV  kit  evaluates  the  MAX17220MAX17225 IC family of ultra-low quiescent current stepup DC-DC converters. The MAX17222 EV kit features two independent circuits to evaluate two different IC packages of the MAX17220-MAX17225 family. Both circuits on the EV  kit  operate  over  an  input  range  of  400mV  to  5.5V. Each circuit provides resistor-configurable output voltages from 1.8V to 5V in 100mV/step.

The  MAX17222  EV  Kit  comes  with  a  MAX17222ELT+ (µDFN)  and  a  MAX17222ENT+  (WLP)  installed.  The MAX17222ELT+ circuit is configured for a 3V output, and can deliver 225mA with 1.8V input. The MAX17222ENT+ circuit  is  configured  for  a  5V  output,  and  can  deliver 225mA with 3V input.

## EN for the WLP Circuit

The WLP circuit on the EV kit provides a jumper (JU1) to enable or disable the MAX17222ENT+. Refer to Table 1 for JU1 jumper settings.

## EN for the µDFN Circuit

The µDFN circuit on the EV kit provides a jumper (JU101) to enable/disable the MAX17222ELT+. Refer to Table 2 for JU101 jumper settings.

## Battery Holders

The MAX17222 EV kit provides battery holders for each of the two circuits. The battery holder V1 can accommodate a  CR1632  Lithium  Coin  cell  to  power  the  WLP  circuit, while the V101 can hold an Energizer 364/363 silver oxide cell to power the µDFN circuit.

## Table 1. EN on MAX17222ENT+ (JU1)

| JU1 SHUNT POSITION   | DESCRIPTION                                           |
|----------------------|-------------------------------------------------------|
| 1-2*                 | Enabled. EN = IN1 (through pullup resistor R2)        |
| 2-3                  | Disabled. EN = GND1                                   |
| Not Installed        | Enabled. EN = high (through internal pullup resistor) |

## Evaluates: MAX17220-MAX17225

## Spare Resistors and Inductors

The EV kit provides spare resistors and inductors on the PCB's bottom side. The spare resistors can be used to reconfigure  the  EV  kit  to  a  different  output  voltage  (2V, 2.5V,  3V,  or  3.3V). The  spare  inductors  can  be  used  to reconfigure the EV Kit output current ratings.

## Table 2. EN on MAX17222ELT+ (JU101)

| JU101 SHUNT POSITION   | DESCRIPTION                                           |
|------------------------|-------------------------------------------------------|
| 1-2*                   | Enabled. EN=IN(through pullup resistor R102)          |
| 2-3                    | Disabled. EN = GND                                    |
| Not Installed          | Enabled. EN = high (through internal pullup resistor) |

## Evaluating Other ICs

The MAX17222 EV kit can also evaluate other ICs in the MAX17220-MAX17225 IC family. To evaluate the other ICs, replace U1 and/or U101 with the desired IC/IC pack -age. Refer to the MAX17220 -MAX17225 IC data sheet for additional information.

## Component Suppliers

| SUPPLIER         | WEBSITE           |
|------------------|-------------------|
| Coilcraft        | www.coilcraft.com |
| Murata/TOKO      | www.murata.com    |
| TDK              | www.tdk.com       |
| Wurth Elektronik | www.we-online.com |

Note: Indicate that you are using the MAX17220-MAX17225 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17222EVKIT# | EV Kit |

# Denotes RoHS

## MAX17222 EV Kit Bill of Materials

| ITEM   | REF_DES                   | DNI/DNP   |   QTY | MFG PART #                   | MANUFACTURER                           | VALUE        | DESCRIPTION                                                                                                                             |
|--------|---------------------------|-----------|-------|------------------------------|----------------------------------------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| 1      | 3V, 5V, LX, LX1           | -         |     4 | 131-4353-00                  | TEKTRONICS                             | 131-4353-00  | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS;                                                        |
| 2      | C1, C101                  | -         |     2 | GRM155R60J106ME44            | MURATA                                 | 10UF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R;                                              |
| 3      | C4, C104                  | -         |     2 | GRM155R61A106ME44            | MURATA                                 | 10UF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R;                                               |
| 4      | GND, GND1, IN, IN1, J1-J4 | -         |     8 | 1514-2                       | KEYSTONE                               | 1514-2       | TERMINAL; TURRET; PIN DIA=0.090IN; TOTAL LENGTH=0.105IN; BOARD HOLE=0.098IN; BRASS; TIN PLATING;                                        |
| 5      | JU1, JU101                | -         |     2 | PEC03SAAN                    | SULLINS                                | PEC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                               |
| 6      | L1                        | -         |     1 | DFE201612E-2R2M              | MURATA                                 | 2.2UH        | INDUCTOR; SMT (0806); WIREWOUND CHIP; 2.2UH; TOL=+/-20%; 1.8A                                                                           |
| 7      | L101                      | -         |     1 | XFL4020-222ME                | COILCRAFT                              | 2.2UH        | INDUCTOR; SMT; METAL COMPOSITE CORE; 2.2UH; TOL=+/-20%; 8A; -40 DEGC TO +125 DEGC                                                       |
| 8      | R1                        | -         |     1 | CRCW12060000ZS; ERJ-8GEY0R00 | VISHAY DALE; PANASONIC                 | 0            | RESISTOR; 1206; 0 OHM; 0%; JUMPER; 0.25W; THICK FILM                                                                                    |
| 9      | R2, R102                  | -         |     2 | HMC0402JT33M0                | STACKPOLE ELECTRONICS INC              | 33M          | RESISTOR; 0402; 33M OHM; 5%; 400PPM; 0.063W; THICK FILM                                                                                 |
| 10     | R3, R4, R103, R104        | -         |     4 | ERJ-2GE0R00                  | PANASONIC                              |              | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                  |
| 11     | R101C                     | -         |     1 | RMCF1206FT133K               | STACKPOLE ELECTRONICS INC              | 133K         | RESISTOR; 1206; 133K OHM; 1%; 100PPM; 0.25W; THICK FILM                                                                                 |
| 12     | SU1, SU101                | -         |     2 | S1100-B;SX1100-B; STC02SYAN  | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                 |
| 13     | U1                        | -         |     1 | MAX17222ENT+                 | MAXIM                                  | MAX17222ENT+ | IC; CONV; NANOPOWER SYNCHRONOUS BOOST CONVERTER WITH TRUE SHUTDOWN; WLP6                                                                |
| 14     | U101                      | -         |     1 | MAX17222ELT+                 | MAXIM                                  | MAX17222ELT+ | IC; VCON; 0.4V TO 5.5V INPUT; NANOPOWER SYNCHRONOUS; BOOST CONVERTER WITH TRUE SHUTDOWN; UDFN6                                          |
| 15     | V1                        | -         |     1 | BHX1-1632-SM                 | MEMORY PROTECTION DEVICES INC.         | BHX1-1632-SM | BATTERY HOLDER; SMT; CR1632 SURFACE MOUNT BATTERY RETAINER WITH INSULATOR; CONTACTS: PHOSPHOR BRONZE C5191; NICKEL PLATED 80-150U THICK |
| 16     | V101                      | -         |     1 | BK-879                       | MEMORY PROTECTION DEVICES INC.         | BK-879       | BATTERY HOLDER; SMT; COIN CELL RETAINER FOR 6.8MM DIA. BATTERIES; 0.25MM PHOSPHOR BRONZE; NICKEL PLATED                                 |
| 17     | PCB                       | -         |     1 | MAX17222                     | MAXIM                                  | PCB          | PCB:MAX17222                                                                                                                            |
| 18     | C2, C3, C102, C103        | DNP       |     0 | N/A                          | N/A                                    | OPEN         | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                                                                |
| 19     | C5, C105                  | DNP       |     0 | N/A                          | N/A                                    | OPEN         | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                                |
| 20     | TP1-TP8                   | DNP       |     0 | 5002                         | KEYSTONE                               | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                   |
| 21     | L1C                       | Spare     |     1 | MLP1005M1R0DT0S1             | TDK                                    | 1UH          | INDUCTOR; SMT (0402); FERRITE CHIP; 1UH; TOL=+/-20%; 0.5A                                                                               |
| 22     | L1F                       | Spare     |     1 | DFE160808S-1R0M=P2           | MURATA                                 | 1UH          | INDUCTOR; SMT (0603); MAGNETICALLY SHIELDED; 1UH; TOL=+/-20%; 1.9A                                                                      |
| 23     | L1V                       | Spare     |     1 | DFE18SBN2R2MELL              | MURATA                                 | 2.2UH        | INDUCTOR; SMT (0603); METAL ALLOY; 2.2UH; 20%; 1.2A ;                                                                                   |
| 24     | L1W                       | Spare     |     1 | DFE201612E-1R0M              | MURATA                                 | 1UH          | INDUCTOR; SMT (0806); WIREWOUND CHIP; 1UH; TOL=+/-20%; 2.9A                                                                             |
| 25     | L1X                       | Spare     |     1 | 74479299222                  | WURTH ELECTRONICS INC                  | 2.2UH        | INDUCTOR; SMT (1210); MOLDED CHIP; 2.2UH; TOL=+/-20%; 2.1A                                                                              |
| 26     | L1Y                       | Spare     |     1 | 74438357022                  | WURTH ELECTRONICS INC                  | 2.2UH        | EVKIT PART-INDUCTOR; SMT; SHIELDED; 2.2UH; TOL=+/-20%; 5.2A;                                                                            |
| 27     | R101A                     | Spare     |     1 | RMCF1206FT768K; ERJ-8ENF7683 | STACKPOLE ELECTRONICS INC; PANASONIC   | 768K         | RESISTOR; 1206; 768K OHM; 1%; 100PPM; 0.25W; THICK FILM                                                                                 |
| 28     | R101B                     | Spare     |     1 | RMCF1206FT324K               | STACKPOLE ELECTRONICS INC              | 324K         | RESISTOR; 1206; 324K OHM; 1%; 100PPM; 0.25W; THICK FILM                                                                                 |
| 29     | R101C                     | Spare     |     1 | RMCF1206FT133K               | STACKPOLE ELECTRONICS INC              | 133K         | RESISTOR; 1206; 133K OHM; 1%; 100PPM; 0.25W; THICK FILM                                                                                 |
| 30     | R101D                     | Spare     |     1 | RMCF1206FT80K6; ERJ-8ENF8062 | STACKPOLE ELECTRONICS INC; PANASONIC   | 80.6K        | RESISTOR; 1206; 80.6K OHM; 1%; 100PPM; 0.25W; THICK FILM                                                                                |
| TOTAL  |                           |           |    45 |                              |                                        |              |                                                                                                                                         |

## MAX17222 EV Kit Schematic

<!-- image -->

## MAX17222 Minimal Component Circuit Schematic

<!-- image -->

## MAX17222 EV Kit PCB Layout Diagrams

<!-- image -->

MAX17222 EV Kit-Top Silkscreen

<!-- image -->

MAX17222 EV Kit-Top

MAX17222 EV Kit-Bottom

<!-- image -->

MAX17222 EV Kit- Bottom Silkscreen

<!-- image -->

## MAX17222 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                 | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 1/17            | Initial release                                                                                                                                                                                                                                                                                                             | -               |
|                 1 | 3/17            | Updated Bill of Materials                                                                                                                                                                                                                                                                                                   | 4               |
|                 2 | 4/17            | Updated text and replaced schematic, BOM, and PCB layout diagrams                                                                                                                                                                                                                                                           | 1-8             |
|                 3 | 8/17            | Updated text and replaced schematic, BOM, and PCB layout diagrams                                                                                                                                                                                                                                                           | 1-8             |
|                 4 | 1/20            | Updated General Description , Quick Start , and Detailed Description of Hardware sections, updated table titles 1 and 2, added Evaluating Other ICs section, updated MAX17222 EV Kit Bill of Materials , MAX17222 EV Kit Schematic , MAX17222 Minimal Component Circuit Schematic , and MAX17222 EV Kit PCB Layout Diagrams | 1-6             |
|                 5 | 9/20            | Corrected typo in Quick Start section and MAX17222 EV Kit Files table, updated EN for the WLP Circuit section and EN for the TDFN Circuit section                                                                                                                                                                           | 1, 2            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX17220-MAX17225