<!-- lastmod 2022-08-02 -->
## MAX17225 Evaluation Kit

## General Description

The  MAX17225  evaluation  kit  (EV  kit)  evaluates  the MAX17220-MAX17225  IC  family  of  ultra-low  quiescent current  step-up  DC-DC  converters.  The  MAX17225  EV kit  features  two  independent  circuits  to  evaluate  two different  IC  packages  of  the  MAX17220-MAX17225 family. Both circuits on the EV kit operate over an input range of 400mV to 5.5V, depending on load, with 0.88V typical  startup  with  3kΩ  load.  Each  circuit  provides resistor-configurable  output  voltages  from  1.8V  to  5V  in 100mV/step.

The EV  kit comes  with the  MAX17225ELT+  and MAX17225ENT+ installed.

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

## MAX17225 EV Kit Files

| FILE                                    | DESCRIPTION               |
|-----------------------------------------|---------------------------|
| MAX17225 EV BOM                         | EV Kit Bill of Material   |
| MAX17225 EV PCB Layout Diagrams         | EV Kit Layout             |
| MAX17225 EV Schematic                   | EV Kit Schematic          |
| MAX17225 EV Minimal Component Schematic | Minimal Component Circuit |

Ordering Information appears at end of data sheet.

Evaluates: MAX17220-MAX17225

## Quick Start

## Required Equipment

- MAX17225 EV kit
- 1.8V to 5V, 3A DC power supply
- Electronic load capable of 425mA
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
- 6) Set the electronic load to 425mA and enable the electronic load.
- 7) Verify that the voltage at the 3V terminal post is approximately 3V.

## Testing the 5V Output Circuit

- 1) Verify that jumper JU1 is in its default position, as shown in Table 1 .
- 2) Connect the power supply between the IN1 and nearest GND1 terminal posts.
- 3) Connect the electronic load between the 5V output and nearest GND1 terminal posts.
- 4) Connect the DVM between the 5V output and a nearest GND1 terminal posts.
- 5) Set the input power supply to 3V, and turn on the power supply.
- 6) Set the electronic load to 425mA, and enable the electronic load.
- 7) Verify that the voltage at the 5V terminal post is approximately 5V.

<!-- image -->

## MAX17225 Evaluation Kit

## Detailed Description of Hardware

The  MAX17225  EV  kit  evaluates  the  MAX17220MAX17225 IC family of ultra-low quiescent current stepup DC-DC converters. The MAX17225 EV kit features two independent circuits to evaluate two different IC packages of the MAX17220-MAX17225 family. Both circuits on the EV  kit  operate  over  an  input  range  of  400mV  to  5.5V. Each circuit provides resistor-configurable output voltages from 1.8V to 5V in 100mV/step.

The  MAX17225  EV  Kit  comes  with  a  MAX17225ELT+ (µDFN)  and  a  MAX17225ENT+  (WLP)  installed.  The MAX17225ELT+ circuit is configured for a 3V output, and can deliver 425mA with 1.8V input. The MAX17225ENT+ circuit  is  configured  for  a  5V  output,  and  can  deliver 425mA with 3V input.

## EN for the WLP Circuit

The WLP circuit on the EV kit provides a jumper (JU1) to enable or disable the MAX17225ENT+. See Table 1 for JU1 jumper settings.

## EN for the µDFN Circuit

The µDFN circuit on the EV kit provides a jumper (JU101) to enable/disable the MAX17225ELT+. See Table 2 for JU101 jumper settings.

## Battery Holders

The MAX17225 EV kit provides battery holders for each of the two circuits. The battery holder V1 can accommodate a  CR1632  Lithium  Coin  cell  to  power  the  WLP  circuit, while the V101 can hold an Energizer 364/363 silver oxide cell to power the µDFN circuit.

## Table 1. EN on MAX17225ENT+ (JU1)

| JU1 SHUNT POSITION   | DESCRIPTION                                           |
|----------------------|-------------------------------------------------------|
| 1-2*                 | Enabled. EN = IN1 (through pullup resistor R2)        |
| 2-3                  | Disabled. EN = GND1                                   |
| Installed*           | Enabled. EN = high (through internal pullup resistor) |

## Evaluates: MAX17220-MAX17225

## Spare Resistors and Inductors

The EV kit provides spare resistors and inductors on the PCB's bottom side. The spare resistors can be used to reconfigure  the  EV  kit  to  a  different  output  voltage  (2V, 2.5V,  3V,  or  3.3V). The  spare  inductors  can  be  used  to reconfigure the EV Kit output current ratings.

## Table 2. EN on MAX17225ELT+ (JU101)

| JU101 SHUNT POSITION   | DESCRIPTION                                           |
|------------------------|-------------------------------------------------------|
| 1-2*                   | Enabled. EN=IN(through pullup resistor R102)          |
| 2-3                    | Disabled. EN = GND                                    |
| Not Installed          | Enabled. EN = high (through internal pullup resistor) |

## Evaluating other ICs

The MAX17225 EV kit can also evaluate other ICs in the MAX17220-MAX17225 IC family. To evaluate the other ICs, replace U1 and/or U101 with the desired IC/IC package. Refer  to  the  MAX17220 -MAX17225  IC  data  sheet  for additional information.

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
| MAX17225EVKIT# | EV Kit |

# Denotes RoHS compliance.

## MAX17225 EV Kit Bill of Materials

|   ITEM | REF_DES                   | DNI/DNP   |   QTY | MFG PART #                   | MANUFACTURER                           | VALUE        | DESCRIPTION                                                                                                                             |
|--------|---------------------------|-----------|-------|------------------------------|----------------------------------------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------|
|      1 | 3V, 5V, LX, LX1           | -         |     4 | 131-4353-00                  | TEKTRONICS                             | 131-4353-00  | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS;                                                        |
|      2 | C1, C101                  | -         |     2 | GRM155R60J106ME44            | MURATA                                 | 10µF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 10µF; 6.3V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R;                                              |
|      3 | C4, C104                  | -         |     2 | GRM155R61A106ME44            | MURATA                                 | 10µF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 10µF; 10V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R;                                               |
|      4 | GND, GND1, IN, IN1, J1-J4 | -         |     8 | 1514-2                       | KEYSTONE                               | 1514-2       | TERMINAL; TURRET; PIN DIA = 0.090IN; TOTAL LENGTH = 0.105IN; BOARD HOLE = 0.098IN; BRASS; TIN PLATING;                                  |
|      5 | JU1, JU101                | -         |     2 | PEC03SAAN                    | SULLINS                                | PEC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                               |
|      6 | L1                        | -         |     1 | DFE201612E-2R2M              | MURATA                                 | 2.2µH        | INDUCTOR; SMT (0806); WIREWOUND CHIP; 2.2µH; TOL = ± 20%; 1.8A                                                                          |
|      7 | L101                      | -         |     1 | XFL4020-222ME                | COILCRAFT                              | 2.2µH        | INDUCTOR; SMT; METAL COMPOSITE CORE; 2.2µH; TOL = ±20%; 8A; -40°C TO +125°C                                                             |
|      8 | R1                        | -         |     1 | CRCW12060000ZS; ERJ-8GEY0R00 | VISHAY DALE; PANASONIC                 | 0            | RESISTOR; 1206; 0 Ω ; 0%; JUMPER; 0.25W; THICK FILM                                                                                     |
|      9 | R2, R102                  | -         |     2 | HMC0402JT33M0                | STACKPOLE ELECTRONICS INC              | 33M          | RESISTOR; 0402; 33MΩ; 5%; 400PPM; 0.063W; THICK FILM                                                                                    |
|     10 | R3, R4, R103, R104        | -         |     4 | ERJ-2GE0R00                  | PANASONIC                              | 0            | RESISTOR; 0402; 0Ω; 0%; JUMPER; 0.10W; THICK FILM                                                                                       |
|     11 | R101                      | -         |     1 | RMCF1206FT133K               | STACKPOLE ELECTRONICS INC              | 133K         | RESISTOR; 1206; 133KΩ; 1%; 100PPM; 0.25W; THICK FILM                                                                                    |
|     12 | SU1, SU101                | -         |     2 | S1100-B; SX1100-B; STC02SYAN | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN; BLACK; INSULATION = PBT; PHOSPHOR BRONZE CONTACT = GOLD PLATED                          |
|     13 | U1                        | -         |     1 | MAX17225ENT+                 | MAXIM                                  | MAX17225ENT+ | EVKIT PART - IC; PACKAGE OUTLINE: 21-100128; PACKAGE CODE: N60E1+1; WLP6                                                                |
|     14 | U101                      | -         |     1 | MAX17225ELT+                 | MAXIM                                  | MAX17225ELT+ | IC; CONV; NANOPOWER SYNCHRONOUS BOOST CONVERTER WITH TRUE SHUTDOWN; UDFN6                                                               |
|     15 | V1                        | -         |     1 | BHX1-1632-SM                 | MEMORY PROTECTION DEVICES INC.         | BHX1-1632-SM | BATTERY HOLDER; SMT; CR1632 SURFACE MOUNT BATTERY RETAINER WITH INSULATOR; CONTACTS: PHOSPHOR BRONZE C5191; NICKEL PLATED 80-150U THICK |
|     16 | V101                      | -         |     1 | BK-879                       | MEMORY PROTECTION DEVICES INC.         | BK-879       | BATTERY HOLDER; SMT; COIN CELL RETAINER FOR 6.8MM DIA. BATTERIES; 0.25MM PHOSPHOR BRONZE; NICKEL PLATED                                 |

## MAX17225 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES            | DNI/DNP   |   QTY | MFG PART #                   | MANUFACTURER                         | VALUE   | DESCRIPTION                                                                                                 |
|--------|--------------------|-----------|-------|------------------------------|--------------------------------------|---------|-------------------------------------------------------------------------------------------------------------|
| 17     | PCB                | -         |     1 | MAX17225                     | MAXIM                                | PCB     | PCB:MAX17225                                                                                                |
| 18     | MTH1-MTH4          | DNI       |     4 | 9032                         | KEYSTONE                             | 9032    | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                   |
| 19     | C2, C3, C102, C103 | DNP       |     0 | N/A                          | N/A                                  | OPEN    | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                                    |
| 20     | C5, C105           | DNP       |     0 | N/A                          | N/A                                  | OPEN    | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                    |
| 21     | TP1-TP8            | DNP       |     0 | 5002                         | KEYSTONE                             | N/A     | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; |
| 22     | L1C                | Spare     |     1 | MLP1005M1R0DT0S1             | TDK                                  | 1µH     | INDUCTOR; SMT (0402); FERRITE CHIP; 1µH; TOL = ± 20%; 0.5A                                                  |
| 23     | L1F                | Spare     |     1 | DFE160808S-1R0M=P2           | MURATA                               | 1µH     | INDUCTOR; SMT (0603); MAGNETICALLY SHIELDED; 1µH; TOL = ±20%; 1.9A                                          |
| 24     | L1V                | Spare     |     1 | DFE18SBN2R2MELL              | MURATA                               | 2.2µH   | EVKIT PART - INDUCTOR; SMT (0603); SHIELDED; 2.2µH; 20%; 1.2A                                               |
| 25     | L1W                | Spare     |     1 | DFE201612E-1R0M              | MURATA                               | 1µH     | INDUCTOR; SMT (0806); WIREWOUND CHIP; 1µH; TOL = ±20%; 2.9A                                                 |
| 26     | L1X                | Spare     |     1 | 74479299222                  | WURTH ELECTRONICS INC                | 2.2µH   | INDUCTOR; SMT (1210); MOLDED CHIP; 2.2µH; TOL = ± 20%; 2.1A                                                 |
| 27     | L1Y                | Spare     |     1 | 74438357022                  | WURTH ELECTRONICS INC                | 2.2µH   | EVKIT PART-INDUCTOR; SMT; SHIELDED; 2.2µH; TOL = ±20%; 5.2A;                                                |
| 28     | R101A              | Spare     |     1 | RMCF1206FT768K; ERJ-8ENF7683 | STACKPOLE ELECTRONICS INC; PANASONIC | 768K    | RESISTOR; 1206; 768KΩ; 1%; 100PPM; 0.25W; THICK FILM                                                        |
| 29     | R101B              | Spare     |     1 | RMCF1206FT324K               | STACKPOLE ELECTRONICS INC            | 324K    | RESISTOR; 1206; 324K Ω ; 1%; 100PPM; 0.25W; THICK FILM                                                      |
| 30     | R101C              | Spare     |     1 | RMCF1206FT133K               | STACKPOLE ELECTRONICS INC            | 133K    | RESISTOR; 1206; 133KΩ; 1%; 100PPM; 0.25W; THICK FILM                                                        |
| 31     | R101D              | Spare     |     1 | RMCF1206FT80K6; ERJ-8ENF8062 | STACKPOLE ELECTRONICS INC; PANASONIC | 80.6K   | RESISTOR; 1206; 80.6KΩ; 1%; 100PPM; 0.25W; THICK FILM                                                       |
| TOTAL  | TOTAL              | TOTAL     |    49 |                              |                                      |         |                                                                                                             |

## MAX17225 EV Kit Schematic

<!-- image -->

## MAX17225 Minimal Component Circuit Schematic

<!-- image -->

## MAX17225 EV Kit PCB Layout Diagrams

MAX17225 EV Kit-Top Silkscreen

<!-- image -->

MAX17225 EV Kit-Top

<!-- image -->

MAX17225 EV Kit-Bottom

<!-- image -->

MAX17225 EV Kit-Bottom Silkscreen

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                 | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------|-----------------|
|                 0 | 8/20            | Initial release                             | -               |
|                 1 | 9/20            | Updated Minimal component circuit schematic | 6               |
|                 2 | 9/20            | Replaced TDFN with μDFN                     | 2               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX17220-MAX17225