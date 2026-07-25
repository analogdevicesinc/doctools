<!-- lastmod 2022-08-02 -->
## MAX38640A WLP Evaluation Kit

## General Description

The  MAX38640A  evaluation  kit  (EV  kit)  evaluates  the MAX38640A,  an  ultra-low  quiescent  current  step-down DC-DC  converter  in  a  WLP.  The  EV  kit  operates  over an  input  range  of  1.8V  to  5.5V,  and  provides  resistorconfigurable output voltages from 1.0V to 3.3V. The EV kit delivers up to 175mA of current depending on the input voltage to the output voltage ratio.

The EV kit comes with the MAX38640AENT+ installed.

## Features

- Evaluates the MAX38640A in a 6-pin WLP
- 1.8V to 5.5V Input Range
- 1.0V to 3.3V Configurable Output Voltage
- Up to 175mA Output Current
- Proven 2-Layer 1oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assemble and Tested

Ordering Information appears at end of data sheet.

## MAX38640A EV Kit Files

| FILE                       | DECRIPTION              |
|----------------------------|-------------------------|
| MAX38640AWLP EV BOM        | EV Kit Bill of Material |
| MAX38640AWLP EV PCB Layout | EV Kit Layout           |
| MAX38640AWLP EV Schematic  | EV Kit Schematic        |

<!-- image -->

Evaluates: MAX38640 A in WLP

## Quick Start

## Required Equipment

- MAX38640A WLP EV kit
- 5.5V, 3A DC power supply
- Electronic load capable of 175mA
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Verify that jumpers JU1 and JU2 are in their default positions, as shown in Table 1 and Table 2 .
- 2) Connect the 5.5V power supply between the IN and nearest GND terminal posts.
- 3) Connect the 175mA electronic load between the OUT and nearest GND terminal posts.
- 4) Connect the DVM between the OUT and nearest GND terminal posts.
- 5) Turn on the power supply.
- 6) Enable the electronic load.
- 7) Verify that the voltage at the OUT terminal post is 1.8V, within the device and the Output Voltage Selecting Resistor (RSEL)'s accuracy specifications.

## MAX38640A WLP Evaluation Kit

## Detailed Description of Hardware

The MAX38640A EV kit evaluates the MAX38640A, an ultra-low  quiescent  current  step-down  DC-DC  converter in  the  WLP. The EV kit operates over an input range of 1.8V  to  5.5V,  and  provides  resistor-configurable  output voltages  from  1.0V  to  3.3V.  The  EV  kit  delivers  up  to 175mA of current depending on the input voltage to the output voltage ratio.

The EV kit comes with the MAX38640AENT+ installed.

## EN

The MAX38640A WLP EV kit provides a jumper JU1 to enable or disable the MAX38640A. Refer to Table 1 for jumper JU1 settings.

## Table 1. EN (JU1)

| SHUNT POSITION   | DESCRIPTION                                                    |
|------------------|----------------------------------------------------------------|
| 1-2*             | EV Kit Enabled                                                 |
| 1-3              | EV Kit Controlled by External (TTL) Source Connected to EXT_EN |
| 1-4              | EV Kit Disabled                                                |

## Component Suppliers

| SUPPLIER            | WEBSITE           |
|---------------------|-------------------|
| Murata              | www.murata.com    |
| Samsung Electronics | www.samsung.com   |
| Wurth Electronics   | www.we-online.com |

Note: Indicate that you are using the MAX38640A when contacting these component suppliers.

## Evaluates: MAX38640 A in WLP

## Output Voltage Selection

The MAX38640A WLP EV kit provides a jumper JU2 to select  the  MAX38640A output voltage. Refer to Table 2 for jumper JU2 settings.

## Spare Inductor

The MAX38640A WLP EV kit provides a spare inductor on  the  PCB's  bottom  side.  This  spare  inductor  can  be used to reconfigure the EV kit with a lower inductor DC resistance.

## Table 2. OUT (JU2)

| SHUNT POSITION   | DESCRIPTION                                                                                           |
|------------------|-------------------------------------------------------------------------------------------------------|
| 1-2              | OUT = 1.0V                                                                                            |
| 1-3              | OUT = 1.5V                                                                                            |
| 1-4*             | OUT = 1.8V                                                                                            |
| 1-5              | OUT = 3.3V                                                                                            |
| Not Installed    | Output Voltage can be configured to between 0.7V and 3.3V by resistor R1. Refer to the IC data sheet. |

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX38640AEVK#WLP | EV Kit |

# Denotes RoHS-compliant device

## MAX38640A WLP EV Kit Bill of Materials

|   ITEM | REF_DES   | DNI/DNP   |   QTY | MFG PART #                                     | MANUFACTURER                           | VALUE         | DESCRIPTION                                                                                                              |
|--------|-----------|-----------|-------|------------------------------------------------|----------------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------|
|      1 | C1        | -         |     1 | C1608X5R1A106K080AC                            | TDK                                    | 10UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 10µF; 10V; TOL = 10%; MODEL = ; TG = -55°C TO +85°C; TC = X5R                       |
|      2 | C2        | -         |     1 | CL10A226KQ8NRN                                 | SAMSUNG                                | 22UF          | CAP; SMT (0603); 22UF; 10%; 6.3V; X5R; CERAMIC CHIP                                                                      |
|      3 | C5        | -         |     1 | 25SVPF100M                                     | PANASONIC                              | 100UF         | CAP; SMT (CASE_E7); 100µF; 20%; 25V; ALUMINUM-ORGANIC                                                                    |
|      4 | J1-J4     | -         |     4 | 1514-2                                         | KEYSTONE                               | 1514-2        | TERMINAL; TURRET; PIN DIA = 0.090IN; TOTAL LENGTH = 0.105IN; BOARD HOLE = 0.098IN; BRASS; TIN PLATING;                   |
|      5 | JU1       | -         |     1 | PEC04SAAN                                      | SULLINS ELECTRONICS CORP.              | PEC04SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                |
|      6 | JU2       | -         |     1 | PBC05SAAN                                      | SULLINS ELECTRONICS CORP.              | PBC05SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65°C TO +125°C                                               |
|      7 | L1        | -         |     1 | 1285AS-H-2R2M                                  | TOKO                                   | 2.2UH         | INDUCTOR; SMT (2016); METAL ALLOY CHIP; 2.2UH; TOL = ±20%; 1.4A                                                          |
|      8 | L1A       | -         |     1 | 74479276222                                    | WURTH ELECTRONICS INC.                 | 2.2UH         | INDUCTOR; SMT (0806); MOLDED CHIP; 2.2µH; 30%; 1.40A                                                                     |
|      9 | R2        | -         |     1 | CRCW0603191KFK                                 | VISHAY DALE                            | 191K          | RESISTOR; 0603; 191K Ω ; 1%; 100PPM; 0.10W; METAL FILM                                                                   |
|     10 | R3        | -         |     1 | ERJ-3EKF6343                                   | PANASONIC                              | 634K          | RES; SMT (0603); 634K; 1%; ±100PPM/DEGC; 0.1W                                                                            |
|     11 | R4        | -         |     1 | CRCW060320K0FK                                 | VISHAY DALE                            | 20K           | RESISTOR; 0603; 20K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                                     |
|     12 | R5        | -         |     1 | ERJ-3EKF5622                                   | PANASONIC                              | 56.2K         | RESISTOR; 0603; 56.2K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                                   |
|     13 | R6        | -         |     1 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH   | 0             | RESISTOR; 0603; 0 Ω ; 5%; JUMPER; 0.10W; THICK FILM                                                                      |
|     14 | SU1, SU2  | -         |     2 | S1100-B;SX1100-B; STC02SYAN                    | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B      | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN; BLACK; INSULATION = PBT; PHOSPHOR BRONZE CONTACT = GOLD PLATED           |
|     15 | TP5       | -         |     1 | 5002                                           | KEYSTONE                               | N/A           | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;              |
|     16 | TP6, TP7  | -         |     2 | 5001                                           | KEYSTONE                               | N/A           | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     17 | U1        | -         |     1 | MAX38640AENT+                                  | MAXIM                                  | MAX38640AENT+ | EVKIT PART - IC; TINY 300NANO-AMP NANOPOWER BUCK CONVERTER; PACKAGE OUTLINE: 21-100128; PACKAGE CODE: N60E1+1; WLP6      |
|     18 | PCB       | -         |     1 | MAX38640AWLP                                   | MAXIM                                  | PCB           | PCB:MAX38640AWLP                                                                                                         |
|     19 | MH1-MH4   | DNP       |     0 | 9032                                           | KEYSTONE                               | 9032          | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                |
|     20 | R1        | DNP       |     0 | CRCW06030000Z0                                 | VISHAY DALE                            | 0             | RESISTOR; 0603; 0 Ω ; 0%; JUMPER; 0.1W; THICK FILM                                                                       |
|     21 | C4        | DNP       |     0 | N/A                                            | N/A                                    | OPEN          | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                 |

23

## MAX38640A WLP EV Kit Schematic

<!-- image -->

Evaluates: MAX38640 A in WLP

## MAX38640A WLP EV Kit PCB Layout Diagrams

<!-- image -->

MAX38640A WLP EV Kit-Top Silkscreen

<!-- image -->

MAX38640A WLP EV Kit-Top

MAX38640A WLP EV Kit-Bottom

<!-- image -->

MAX38640A WLP EV Kit-Bottom Silkscreen

<!-- image -->

## MAX38640A WLP Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                 | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------|-----------------|
|                 0 | 4/19            | Initial release             | -               |
|                 1 | 7/19            | Updated title of data sheet | 1-6             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX38640 A in WLP