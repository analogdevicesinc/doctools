<!-- lastmod 2022-08-05 -->
## MAX38904D WLP Evaluation Kit

## General Description

The MAX38904D WLP evaluation kit (EV kit) evaluates the MAX38904D in a WLP package. The MAX38904D is a low noise linear regulator. The EV kit operates over an input range of 1.7V to 5.5V and provides a factory preset output voltage of 1.5V. The EV kit can deliver up to 2A of current.

## Features

- Evaluates the MAX38904D IC in a 5 x 3 bump, 2.2mm x 1.37mm WLP, 0.4mm pitch
- 1.7V to 5.5V Input Range
- Factory Preset Output Voltage (Default Output Set to 1.5V)
- Up to 2A Output Current
- Proven 2-Layer 1-oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX38904D WLP EV Kit Files

| FILE                            | DECRIPTION              |
|---------------------------------|-------------------------|
| MAX38904D WLP EV Kit BOM        | EV Kit Bill of Material |
| MAX38904D WLP EV Kit PCB Layout | EV Kit Layout           |
| MAX38904D WLP EV Kit Schematic  | EV Kit Schematic        |

Ordering Information appears at end of data sheet.

Evaluates: MAX38904D

## Quick Start

## Required Equipment

- MAX38904D WLP EV kit
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
- 6) Verify  that  the  voltage  at  the  OUT  terminal  post  is approximately 1.5V.
- 7) Decrease  the  power  supply  to  1.8V  (To  minimize power dissipation at full load).
- 8) Enable the electronic load.
- 9) Verify  that  the  voltage  at  the  OUT  terminal  post  is 1.5V within the device accuracy specifications.

<!-- image -->

## MAX38904D WLP Evaluation Kit

## Detailed Description of Hardware

The MAX38904D WLP EV kit evaluates the MAX38904D in  a  WLP  package.  The  MAX38904D  is  a  low  noise linear  regulator  that  delivers  2A  of  output  current  with only  5.1µV RMS   of  output  noise  from  10Hz  to  100kHz. This  regulator  requires  only  100mV  of  input-to-output headroom at full load.

The  MAX38904D  WLP  EV  kit  operates  over  an  input range  of  1.7V  to  5.5V.  The  EV  kit  comes  with  the MAX38904DANL15+ installed and the output voltage is factory  preset to 1.5V . The EV kit output can be reconfigured to  other  voltages  from  0.7V  to  5.0V  in  50mV  steps  by replacing  U1  with  another  MAX38904D,  preset  to  the desired  voltage  level.  Refer  to  the MAX38904  IC  data sheet for the MAX38904D output voltage selection.

## Component Suppliers

| SUPPLIER                                | WEBSITE            |
|-----------------------------------------|--------------------|
| Kemet                                   | www.kemet.com      |
| Murata/TOKO                             | www.murata.com     |
| TDK                                     | www.tdk.com        |
| Samsung Electro-Mechanics America. Inc. | www.samsungsem.com |

Note: Indicate that you are using the MAX38904D when contacting these component suppliers.

## EN (Enable)

The EV kit provides a jumper JU1 to enable or disable the  MAX38904D. Refer to Table 1 for jumper setting of jumper JU1.

## Table 1. EN (JU1)

| SHUNT POSITION   | DESCRIPTION        |
|------------------|--------------------|
| 1-2*             | Enabled. EN = IN*  |
| 2-3              | Disabled. EN = GND |

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX38904DEVK#WLP | EV Kit |

#Denotes RoHS

Evaluates: MAX38904D

│

## MAX38904D WLP EV Kit Bill of Materials

|   ITEM | REF_DES      | DNI/DNP   |   QTY | MFG PART #                                                                 | MANUFACTURER               | VALUE           | DESCRIPTION                                                                                                                     |
|--------|--------------|-----------|-------|----------------------------------------------------------------------------|----------------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------|
|      1 | C1           | -         |     1 | C0603C473K5RAC; GRM188R71H473KA61; GCM188R71H473KA55; CGA3E2X7R1H473K080AA | KEMET; MURATA; MURATA; TDK | 0.047µF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.047µF; 50V; TOL = 10%; MODEL = X7R; TG = -55°C TO +125°C; TC = X7R                       |
|      2 | C2, C3       | -         |     2 | GRM31CR70J226K; GCM31CR70J226KE23                                          | MURATA; MURATA             | 22µF            | CAPACITOR; SMT (1206); CERAMIC CHIP; 22µF; 6.3V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C TO +125°C; TC = X7R                  |
|      3 | GND, IN, OUT | -         |     3 | 108-0740-001                                                               | EMERSON NETWORK POWER      | 108-0740-001    | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                        |
|      4 | JU1          | -         |     1 | PEC03SAAN                                                                  | SULLINS                    | PEC03SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                       |
|      5 | SU1          | -         |     1 | STC02SYAN                                                                  | SULLINS ELECTRONICS CORP.  | STC02SYAN       | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.256IN; BLACK; INSULATION = PBT CONTACT = PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL   |
|      6 | U1           | -         |     1 | MAX38904DANL15+                                                            | MAXIM                      | MAX38904DANL15+ | EVKIT PART - IC; MAX38904DANL15+; 2A LOW NOISE LDO LINEAR REGULATOR; PACKAGE OUTLINE DRAWING: 21-100315; PACKAGE CODE: N151B2+1 |
|      7 | PCB          | -         |     1 | MAX38904DWLP                                                               | MAXIM                      | PCB             | PCB:MAX38904DWLP                                                                                                                |
|      8 | C4           | DNP       |     0 | N/A                                                                        | N/A                        | OPEN            | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                        |
|      9 | R3           | DNP       |     0 | N/A                                                                        | N/A                        | SHORT           | PACKAGE OUTLINE 0603 RESISTOR                                                                                                   |

TOTAL

10

## MAX38904D WLP EV Kit Schematic

<!-- image -->

│

## MAX38904D WLP EV Kit PCB Layout Diagrams

<!-- image -->

MAX38904D WLP EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX38904D WLP EV Kit PCB Layout-Top Layer

MAX38904D WLP EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX38904D WLP EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPpOied. 0a[iP ,nteJrated reserves the riJht to chanJe the circuitry and specifications without notice at any tiPe.

│

Evaluates: MAX38904D