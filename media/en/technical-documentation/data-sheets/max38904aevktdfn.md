<!-- lastmod 2022-10-10 -->
## MAX38904A TDFN Evaluation Kit

## General Description

The MAX38904A TDFN evaluation kit (EV kit) evaluates the MAX38904A in a TDFN package. The MAX38904A is a low noise linear regulator. The EV Kit operates over an input range of 1.7V to 5.5V and provides a jumper selectable output voltage range from 1.2V to 5.0V. The EV Kit can deliver up to 2A of current.

## Features

- Evaluates the MAX38904A IC in a 14-pin (3mm x 3mm) TDFN
- 1.7V to 5.5V Input Range
- 1.2V to 5.0V Jumper Configurable Output Voltage
- Up to 2A Output Current
- Proven 2-Layer 1-oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX38904A TDFN EV Kit Files

| FILE                            | DECRIPTION              |
|---------------------------------|-------------------------|
| MAX38904ATDFN EV Kit BOM        | EV Kit Bill of Material |
| MAX38904ATDFN EV Kit PCB Layout | EV Kit Layout           |
| MAX38904ATDFN EV Kit Schematic  | EV Kit Schematic        |

Ordering Information appears at end of data sheet.

Evaluates: MAX38904A

## Quick Start

## Required Equipment

- MAX38904A TDFN EV kit
- 5.5V, 5A DC power supply
- Electronic load capable of 2A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  board  operation. Caution:  Do  not  turn on power supply until all connections are completed.

- 1) Verify that jumper JU101 is shunted on pins 1 and 2 (EV Kit enabled).
- 2) Verify that jumper SELA is shunted on pins 2 and 3, and jumper SELB is shunted on only 1 pin (OUT = 3.3V).
- 3) Connect the 5.5V power supply between the IN and nearest GND terminal posts.
- 4) Connect the 2A electronic load between the OUT and nearest GND terminal posts.
- 5) Connect  the  DVM  between  the  OUT  and  nearest GND terminal posts.
- 6) Turn on the power supply.
- 7) Verify  that  the  voltage  at  the  OUT  terminal  post  is approximately 3.3V.
- 8) Decrease  the  power  supply  to  3.6V  (To  minimize power dissipation at full load).
- 9) Enable the electronic load.
- 10)  Verify  that  the  voltage  at  the  OUT  terminal  post  is 3.3V within the device accuracy specification.

<!-- image -->

## MAX38904A TDFN Evaluation Kit

## Detailed Description of Hardware

The MAX38904A TDFN EV kit evaluates the MAX38904A in  a  TDFN  package.  The  MAX38904A  is  a  low  noise linear  regulator  that  delivers  2A  of  output  current  with only  5.1µV RMS   of  output  noise  from  10Hz  to  100kHz. This  regulator  requires  only  100mV  of  input-to-output headroom at full load.

The  MAX38904A  TDFN  EV  kit  operates  over  an  input range  of  1.7V  to  5.5V.  The  EV  kit  comes  with  the MAX38904AATD+  installed  and  the  output  voltage  is jumper  selectable  between  nine  voltage  levels:  1.2V, 1.5V, 1.8V, 2.5V, 3.0V, 3.1V, 3.3V, 4.0V, and 5.0V.

## Table 1. EN (JU101)

| SHUNT POSITION   | DESCRIPTION        |
|------------------|--------------------|
| 1-2*             | Enabled. EN = IN*  |
| 2-3              | Disabled. EN = GND |

## Table 2. Output Selection (SELA and SELB)

| SELA           | SELA            | SELB           | SELB            | OUTPUT   |
|----------------|-----------------|----------------|-----------------|----------|
| SHUNT POSITION | SELA CONNECTION | SHUNT POSITION | SELB CONNECTION | VOLTAGE  |
| Not Installed  | Hi-Z            | 1-2            | IN              | 1.2V     |
| 1-2            | IN              | Not Installed  | Hi-Z            | 1.5V     |
| Not Installed  | Hi-Z            | 2-3            | GND             | 1.8V     |
| Not Installed  | Hi-Z            | Not Installed  | Hi-Z            | 2.5V     |
| 2-3            | GND             | 2-3            | GND             | 3.0V     |
| 2-3            | GND             | 1-2            | IN              | 3.1V     |
| 2-3*           | GND*            | Not Installed* | Hi-Z*           | 3.3V*    |
| 1-2            | IN              | 2-3            | GND             | 4.0V     |
| 1-2            | IN              | 1-2            | IN              | 5.0V     |

## EN (Enable)

The EV kit provides a jumper JU101 to enable or disable the  MAX38904A. Refer to Table 1 for jumper setting  of jumper JU101.

## Output Selection (SELA and SELB)

The EV kit provides a set of jumpers SELA and SELB to configure the output voltage of the MAX38904A. Refer to Table 2 for jumper setting of jumpers SELA and SELB.

Evaluates: MAX38904A

│

## Component Suppliers

| SUPPLIER                                | WEBSITE            |
|-----------------------------------------|--------------------|
| Kemet                                   | www.kemet.com      |
| Murata/TOKO                             | www.murata.com     |
| TDK                                     | www.tdk.com        |
| Samsung Electro-Mechanics America. Inc. | www.samsungsem.com |

Note: Indicate that you are using the MAX38904A when contacting these component suppliers.

## MAX38904A TDFN EV Kit Bill of Materials

| ITEM   | REF_DES                  | DNI/DNP   |   QTY | MFG PART #                                                                 | MANUFACTURER              | VALUE          | DESCRIPTION                                                                                                                                             |
|--------|--------------------------|-----------|-------|----------------------------------------------------------------------------|---------------------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | C101                     | -         |     1 | C0603C473K5RAC; GRM188R71H473KA61; GCM188R71H473KA55; CGA3E2X7R1H473K080AA | KEMET;MURATA; MURATA;TDK  | 0.047µF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.047µF; 50V; TOL = 10%; MODEL = X7R; TG = -55°C TO +125°C; TC = X7R                                               |
| 2      | C102, C103               | -         |     2 | GRM31CR70J226K                                                             | MURATA                    | 22µF           | CAPACITOR; SMT (1206); CERAMIC CHIP; 22µF; 6.3V; TOL = 10%; MODEL= GRM SERIES; TG = -55°C TO +125°C; TC = X7R                                           |
| 3      | GND, IN, OUT             | -         |     3 | 108-0740-001                                                               | EMERSON NETWORK POWER     | 108-0740-001   | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                                |
| 4      | JU101, SELA, SELB        | -         |     3 | PEC03SAAN                                                                  | SULLINS                   | PEC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                               |
| 5      | SU1-SU3                  | -         |     3 | STC02SYAN                                                                  | SULLINS ELECTRONICS CORP. | STC02SYAN      | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.256IN; BLACK; INSULATION = PBT CONTACT = PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                           |
| 6      | U1                       | -         |     1 | MAX38904A-ATD+                                                             | MAXIM                     | MAX38904A-ATD+ | EVKIT PART - IC; 1.7V-5.5VIN; 2A; PIN-SELECTABLE OUTPUT VOLTAGE; ENABLE LOW NOISE LDO LINEAR REGULATOR; PACKAGE OUTLINE: 21-0137; LAND PATTERN: 90-0063 |
| 7      | PCB                      | -         |     1 | MAX38904ATDFN                                                              | MAXIM                     | PCB            | PCB:MAX38904ATDFN                                                                                                                                       |
| 8      | GND_PAD, IN_PAD, OUT_PAD | DNP       |     0 | 9020 BUSS                                                                  | WEICO WIRE                | MAXIMPAD       | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                |
| 9      | C104                     | DNP       |     0 | N/A                                                                        | N/A                       | OPEN           | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                                                |
| 10     | R105                     | DNP       |     0 | N/A                                                                        | N/A                       | SHORT          | PACKAGE OUTLINE 0603 RESISTOR                                                                                                                           |
| TOTAL  |                          |           |    14 |                                                                            |                           |                |                                                                                                                                                         |

Evaluates: MAX38904A

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX38904AEVK#TDFN | EV Kit |

#Denotes RoHS

## MAX38904A TDFN EV Kit Schematic

<!-- image -->

│

## MAX38904A TDFN EV Kit PCB Layout Diagrams

<!-- image -->

MAX38904A TDFN EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX38904A TDFN EV Kit PCB Layout-Top Layer

MAX38904A TDFN EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX38904A TDFN EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPpOied. 0a[iP ,nteJrated reserves the riJht to chanJe the circuitry and specifications without notice at any tiPe.

<!-- image -->

│

Evaluates: MAX38904A