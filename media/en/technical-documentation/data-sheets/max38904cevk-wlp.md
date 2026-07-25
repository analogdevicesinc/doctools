<!-- lastmod 2022-08-05 -->
## MAX38904C WLP Evaluation Kit

## General Description

The MAX38904C WLP evaluation kit (EV kit) evaluates the  MAX38904C  in  a  WLP  package.  The  MAX38904C is a low noise linear regulator. The EV kit operates over an input range of 1.7V to 5.5V and provides a resistorconfigurable output voltage range from 0.6V to 5.0V. The EV kit can deliver up to 2A of current.

## Features

- Evaluates the MAX38904C IC in a 5 x 3 bump, 2.2mm x 1.37mm WLP, 0.4mm pitch
- 1.7V to 5.5V Input Range
- 0.6V to 5.0V Resistor Configurable Output Voltage (Default Output Set to 3.3V)
- Up to 2A Output Current
- Proven 2-Layer 1-oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX38904C WLP EV Kit Files

| FILE                            | DECRIPTION              |
|---------------------------------|-------------------------|
| MAX38904C WLP EV Kit BOM        | EV Kit Bill of Material |
| MAX38904C WLP EV Kit PCB Layout | EV Kit Layout           |
| MAX38904C WLP EV Kit Schematic  | EV Kit Schematic        |

Ordering Information appears at end of data sheet.

Evaluates: MAX38904C

## Quick Start

## Required Equipment

- MAX38904C WLP EV kit
- 5.5V, 5A DC power supply
- Electronic load capable of 2A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  board  operation. Caution:  Do  not  turn on power supply until all connections are completed.

- 1) Verify that jumper JU1 is shunted on pins 1 and 2 (EV kit enabled).
- 2) Connect the 5.5V power supply between the IN and nearest GND terminal posts.
- 3) Connect the 2A electronic load between the OUT and nearest GND terminal posts.
- 4) Connect  the  DVM  between  the  OUT  and  nearest GND terminal posts.
- 5) Turn on the power supply.
- 6) Verify  that  the  voltage  at  the  OUT  terminal  post  is approximately 3.3V.
- 7) Decrease  the  power  supply  to  3.6V  (To  minimize power dissipation at full load).
- 8) Enable the electronic load.
- 9) Verify  that  the  voltage  at  the  OUT  terminal  post  is 3.3V  within  the  device  and  the  resistor  divider's accuracy specifications.

<!-- image -->

## MAX38904C WLP Evaluation Kit

## Detailed Description of Hardware

The MAX38904C WLP EV kit evaluates the MAX38904C in  a  WLP  package.  The  MAX38904C  is  a  low  noise linear  regulator  that  delivers  2A  of  output  current  with only  5.1µV RMS  of  output  noise  from  10Hz  to  100kHz. This  regulator  requires  only  100mV  of  input-to-output headroom at full load.

The  MAX38904C  WLP  EV  kit  operates  over  an  input range  of  1.7V  to  5.5V.  The  EV  kit  comes  with  the MAX38904CANL+  installed  and  the  output  voltage  is set  to  3.3V  by  1%  accurate  feedback  resistors  R1  and R2.  The  EV  kit  output  can  be  reconfigured  to  other voltages  from  0.6V  to  5.0V  by  replacing  feedback resistors  R1  and  R2.  Refer  to  the MAX38904  IC data sheet for feedback resistor calculation.

## Component Suppliers

| SUPPLIER                                | WEBSITE            |
|-----------------------------------------|--------------------|
| Kemet                                   | www.kemet.com      |
| Murata/TOKO                             | www.murata.com     |
| TDK                                     | www.tdk.com        |
| Samsung Electro-Mechanics America. Inc. | www.samsungsem.com |

Note: Indicate that you are using the MAX38904C when contacting these component suppliers.

## EN (Enable)

The EV kit provides a jumper JU1 to enable or disable the  MAX38904C. Refer to Table  1  for  jumper  setting  of jumper JU1.

## Table 1. EN (JU1)

| SHUNT POSITION   | DESCRIPTION        |
|------------------|--------------------|
| 1-2*             | Enabled. EN = IN*  |
| 2-3              | Disabled. EN = GND |

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX38904CEVK#WLP | EV Kit |

#Denotes RoHS

Evaluates: MAX38904C

## MAX38904C WLP EV Kit Bill of Materials

| ITEM   | REF_DES      | DNI/DNP   |   QTY | MFG PART #                                                                 | MANUFACTURER               | VALUE         | DESCRIPTION                                                                                                                   |
|--------|--------------|-----------|-------|----------------------------------------------------------------------------|----------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------|
| 1      | C1           | -         |     1 | C0603C473K5RAC; GRM188R71H473KA61; GCM188R71H473KA55; CGA3E2X7R1H473K080AA | KEMET; MURATA; MURATA; TDK | 0.047µF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.047µF; 50V; TOL = 10%; MODEL = X7R; TG = -55°C TO +125°C; TC = X7R                     |
| 2      | C2, C3       | -         |     2 | GRM31CR70J226K; GCM31CR70J226KE23                                          | MURATA; MURATA             | 22µF          | CAPACITOR; SMT (1206); CERAMIC CHIP; 22µF; 6.3V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C TO +125°C; TC = X7R                |
| 3      | GND, IN, OUT | -         |     3 | 108-0740-001                                                               | EMERSON NETWORK POWER      | 108-0740-001  | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                      |
| 4      | JU1          | -         |     1 | PEC03SAAN                                                                  | SULLINS                    | PEC03SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                     |
| 5      | R1           | -         |     1 | CRCW0603909KFK                                                             | VISHAY DALE                | 909K          | RESISTOR; 0603; 909K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                                         |
| 6      | R2           | -         |     1 | CRCW06032003FK                                                             | VISHAY DALE                | 200K          | RESISTOR; 0603; 200K; 1%; 100PPM; 0.10W; THICK FILM                                                                           |
| 7      | SU1          | -         |     1 | STC02SYAN                                                                  | SULLINS ELECTRONICS CORP.  | STC02SYAN     | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.256IN; BLACK; INSULATION = PBT CONTACT = PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL |
| 8      | TP_GND       | -         |     1 | 5001                                                                       | KEYSTONE                   | N/A           | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      |
| 9      | TP_OUT       | -         |     1 | 5000                                                                       | KEYSTONE                   | N/A           | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |
| 10     | U1           | -         |     1 | MAX38904CANL+                                                              | MAXIM                      | MAX38904CANL+ | EVKIT PART - IC; MAX38904CANL+; 2A LOW NOISE LDO LINEAR REGULATOR; PACKAGE OUTLINE DRAWING: 21-100315; PACKAGE CODE: N151B2+1 |
| 11     | PCB          | -         |     1 | MAX38904CWLP                                                               | MAXIM                      | PCB           | PCB:MAX38904CWLP                                                                                                              |
| 12     | C4           | DNP       |     0 | N/A                                                                        | N/A                        | OPEN          | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                      |
| 13     | R3           | DNP       |     0 | N/A                                                                        | N/A                        | SHORT         | PACKAGE OUTLINE 0603 RESISTOR                                                                                                 |
| TOTAL  | TOTAL        | TOTAL     |    14 | 14                                                                         | 14                         | 14            | 14                                                                                                                            |

## MAX38904C WLP EV Kit Schematic

<!-- image -->

## MAX38904C WLP EV Kit PCB Layout Diagrams

<!-- image -->

MAX38904C WLP EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX38904C WLP EV Kit PCB Layout-Top Layer

MAX38904C WLP EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX38904C WLP EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX38904C