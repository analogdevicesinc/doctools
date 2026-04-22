<!-- lastmod 2023-06-02 -->
## MAX38650A Evaluation Kit

## General Description

The MAX38650A WLP evaluation kit (EV kit) evaluates the MAX38650A IC in a WLP package. The MAX38650A is  an  ultra-low  quiescent  current  step-down  DC-DC converter. The EV kit operates from an input range of 1.8V to 5.5V and provides resistor-configurable output voltages  from  1.2V  to  3.3V.  The  EV  kit  delivers  up  to 100mA of current. The EV kit comes with the MAX38650AANT+ installed.

## MAX38650A EV Kit Files

| FILE                        | DESCRIPTION             |
|-----------------------------|-------------------------|
| MAX38650A WLP EV BOM        | EV Kit Bill of Material |
| MAX38650A WLP EV PCB Layout | EV Kit Layout           |
| MAX38650A WLP EV Schematic  | EV Kit Schematic        |

319-100637; Rev 1; 1/21

<!-- image -->

## Features

- Evaluates  the  MAX38650A  IC  in  a  (1.58mm  x 0.89mm, 0.4mm Pitch) 6-Pin WLP Package
- 1.8V to 5.5V Input Range
- 1.2V to 3.3V Configurable Output Voltage
- Up to 100mA Output Current
- Proven 2-Layer 1oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Quick Start

## Required Equipment

- MAX38650A WLP EV kit
- 5.5V, 3A DC power supply
- Electronic load capable of 100mA
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation.

Caution: Do not turn on power supply until all connections are completed.

1. Verify that jumpers JU1 and JU2 are in their default positions, as shown in Table 1 and Table 2.
2. Connect the 5.5V power supply between the IN and nearest GND terminal posts.
3. Connect the 100mA electronic load between the OUT and nearest GND terminal posts.
4. Connect the DVM between the OUT and nearest GND terminal posts.
5. Turn on the power supply.
6. Enable the electronic load.
7. Verify that the voltage at the OUT terminal post is approximately 1.2V.

## Detailed Description of Hardware

The  MAX38650A WLP EV kit  evaluates  the  MAX38650A  IC  in  a  WLP  package.  The  MAX38650  IC  is  an  ultra-low quiescent current step-down DC-DC converter. The EV kit operates over an input range of 1.8V to 5.5V and provides resistor-configurable output voltages from 1.2V to 3.3V. The EV kit delivers up to 100mA of current depending on the input voltage to the output voltage ratio. The EV kit comes with the MAX38650AANT+ installed.

## EN

The MAX38650A WLP EV kit provides a jumper JU1 to enable or disable the MAX38650A. See Table 1 for jumper JU1 settings.

## Table 1. EN (JU1)

| SHUNT POSITION   | DESCRIPTION                                                    |
|------------------|----------------------------------------------------------------|
| 1-2*             | EV kit enabled                                                 |
| 1-3              | EV kit controlled by external (TTL) source connected to EXT_EN |
| 1-4              | EV kit disabled                                                |

Evaluates: MAX38650

## RSEL

The MAX38650A WLP EV kit provides a jumper JU2 to configure the RSEL pin of the MAX38650A. See Table 2 for jumper JU2 settings.

## Table 2. RSEL (JU2)

| SHUNT POSITION   | DESCRIPTION   |
|------------------|---------------|
| 1-2*             | OUT = 1.2V    |
| 1-3              | OUT = 1.5V    |
| 1-4              | OUT = 1.8V    |
| 1-5              | OUT = 3.3V    |
| OPEN             | OUT = 2.5V    |

## Component Suppliers

| SUPPLIER          | WEBSITE                              |
|-------------------|--------------------------------------|
| Panasonic         | https://na.industrial.panasonic.com/ |
| Taiyo Yuden       | www.ty-top.com                       |
| TDK               | www.tdk-electronics.tdk.com/         |
| Wurth Electronics | www.we-online.com                    |

Note:

Indicate that you are using the MAX38650A when contacting these component suppliers.

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX38650AEVK#WLP | EV Kit |

#Denotes RoHS compliance .

Evaluates: MAX38650

## MAX38650A EV Kit Bill of Materials

| ITEM   | REF_DES   | DNI/DNP   |   QTY | MFG PART #                                                | MANUFACTURER                    | VALUE         | DESCRIPTION                                                                                                                                                                            |
|--------|-----------|-----------|-------|-----------------------------------------------------------|---------------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | C1        | -         |     1 | GRM31CR71C106KAC7; GRM31CR71C106KA12; C3216X7R1C106K160AC | MURATA; TDK                     | 10µF          | CAPACITOR (1206); CERAMIC CHIP; 10µF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                   |
| 2      | C2        | -         |     1 | EMK316BB7226ML                                            | TAIYO YUDEN                     | 22µF          | CAPACITOR (1206); CERAMIC CHIP; 22µF; 16V; TOL=20%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                   |
| 3      | C5        | -         |     1 | 25SVPF100M                                                | PANASONIC                       | 100µF         | CAPACITOR (CASE_E7); 100µF; 20%; 25V; ALUMINUM-ORGANIC                                                                                                                                 |
| 4      | J1-J4     | -         |     4 | 108-0740-001                                              | EMERSON NETWORK POWER           | 108-0740-001  | CONNECTOR; FEMALE; PCB MOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                                                              |
| 5      | JU1       | -         |     1 | PEC04SAAN                                                 | SULLINS ELECTRONICS CORP        | PEC04SAAN     | HEADER; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS 0.100' (2.54mm)                                                                                                                 |
| 6      | JU2       | -         |     1 | PBC05SAAN                                                 | SULLINS ELECTRONICS CORP        | PBC05SAAN     | HEADER; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS 0.100' (2.54mm)                                                                                                                 |
| 7      | L1        | -         |     1 | 74479276222C                                              | WURTH ELECTRONICS INC.          | 2.2µH         | INDUCTOR (0806) MOLDED CHIP; 2.2µH; 20%; 1.60A                                                                                                                                         |
| 8      | R2        | -         |     1 | CRCW0603383KFK                                            | VISHAY DALE                     | 383kΩ         | RESISTOR (0603) 383kΩ; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                    |
| 9      | R3        | -         |     1 | ERJ-3EKF6343                                              | PANASONIC                       | 634kΩ         | RESISTOR (0603) 634kΩ; 1%; +/ -100PPM/DEGC; 0.1W                                                                                                                                       |
| 10     | R4        | -         |     1 | CRCW0603768KFK                                            | VISHAY DALE                     | 768kΩ         | RESISTOR (0603) 768kΩ; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                    |
| 11     | R5        | -         |     1 | CRCW060356K2FK; ERJ-3EKF5622                              | VISHAY; PANASONIC               | 56.2kΩ        | RESISTOR (0603) 56.2kΩ; 1%; 100PPM; 0.10W; METAL FILM                                                                                                                                  |
| 12     | R7        | -         |     1 | ERJ-2GE0R00                                               | PANASONIC                       | 0             | RESISTOR (0402) 0Ω; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                      |
| 13     | SU1, SU2  | -         |     2 | SX1100-B; STC02SYAN                                       | KYCON; SULLINS ELECTRONICS CORP | SX1100-B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                               |
| 14     | TP5       | -         |     1 | 5002                                                      | KEYSTONE                        | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                                                                  |
| 15     | TP8, TP9  | -         |     2 | 131-4353-00                                               | TEKTRONICS                      | 131-4353-00   | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                                                                                        |
| 16     | U1        | -         |     1 | MAX38650AANT+                                             | MAXIM                           | MAX38650AANT+ | EVKIT PART - IC; VCON; TINY 1.8V-5.5V INPUT; 390nA I Q ; 100mA NANOPOWER BUCK CONVERTER WITH 100% DUTY CYCLE OPERATION; PACKAGE CODE: N60R1+1; PACKAGE OUTLINE NUMBER: 21-100464; WLP6 |
| 17     | PCB       | -         |     1 | MAX38650AWLP                                              | MAXIM                           | PCB           | PCB:MAX38650AWLP                                                                                                                                                                       |
| 18     | C3        | DNP       |     0 | N/A                                                       | N/A                             | OPEN          | CAPACITOR (1210) OPEN                                                                                                                                                                  |
| 19     | R1        | DNP       |     0 | N/A                                                       | N/A                             | OPEN          | RESISTOR (0402) OPEN                                                                                                                                                                   |
| TOTAL  |           |           |    22 |                                                           |                                 |               |                                                                                                                                                                                        |

Evaluates: MAX38650

## MAX38650A EV Kit Schematic

<!-- image -->

Evaluates: MAX38650

## MAX38650A EV Kit PCB Layouts

MAX38650A EV Kit PCB Layout-Silk Top

<!-- image -->

MAX38650A EV Kit PCB Layout-Bottom

<!-- image -->

www.maximintegrated.com

Evaluates: MAX38650

MAX38650A EV Kit PCB Layout-Top

<!-- image -->

MAX38650A EV Kit PCB Layout-Silk Bottom

<!-- image -->

## MAX38650A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                        | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------|-----------------|
|                 0 | 11/20           | Release for Market Intro                                           | -               |
|                 1 | 1/21            | Changed the title from Evaluates: MAX38650A to Evaluates: MAX38650 | 1-7             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

Evaluates: MAX38650