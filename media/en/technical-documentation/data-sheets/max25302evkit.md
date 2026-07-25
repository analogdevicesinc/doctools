<!-- lastmod 2022-08-02 -->
<!-- image -->

## Evaluates: MAX25302A/MAX25302B

## General Description

The  MAX25302  evaluation  kit  (EV  kit)  evaluates  the MAX25302A/MAX25302B  IC  family  of  low-noise  linear regulators.  The  EV  kit  operates  over  an  input  range  of 1.7V to 5.5V, provides any output voltage range from 0.6V to 5.3V, and delivers up to 2A of current. The EV kit comes with the MAX25302AATD/V+ installed.

## Features

- Evaluates the MAX25302A/MAX25302B IC in a 10-pin (3mm x 3mm) TDFN
- 1.7V to 5.5V Input Range
- 0.6V to 5.3V Resistor-Configurable Output Voltage (MAX25302B, with IC Replacement)
- 1.2V to 5.0V Jumper-Configurable Output Voltage (MAX25302A, On Board with Output Set to 3.3V)
- Up to 2A Output Current
- Proven 2-Layer 1oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX25302 EV Kit Files

| FILE                       | DESCRIPTION              |
|----------------------------|--------------------------|
| MAX25302 EV Kit BOM        | EV Kit Bill of Materials |
| MAX25302 EV Kit PCB Layout | EV Kit Layout            |
| MAX25302 EV Kit Schematic  | EV Kit Schematic         |

## MAX25302 Evaluation Kit

## Quick Start

## Required Equipment

- MAX25302 EV kit
- 5.5V, 2A DC power supply
- Electronic load capable of 2A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. To verify board operation, follow the steps:

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that jumpers JU101, SELA, and SELB are in their default positions, as shown in Tables 1, 2, and 3.
- 2) Connect the 5.5V power supply between the IN and nearest GND terminal posts.
- 3) Connect the 2A electronic load between the OUT and nearest GND terminal posts.
- 4) Connect the DVM between the OUT and nearest GND terminal posts.
- 5) Turn on the power supply.
- 6) Enable the electronic load.
- 7) Verify that the voltage at the OUT terminal post is approximately 3.3V.

owners.

## MAX25302 Evaluation Kit

## Detailed Description of Hardware

The  MAX25302  EV  kit  evaluates  the  MAX25302A/ MAX25302B  IC  family.  The  MAX25302A/MAX25302B are low noise linear regulators that deliver 2A of output current with only 5.1µV RMS  of output noise from 10Hz to 100kHz. These regulators require only 100mV of input-tooutput headroom at full load.

The  MAX25302  EV  kit  operates  over  an  input  range of 1.7V  to 5.5V.  The  EV  kit  includes  an  installed MAX25302AATD/V+. The  output  is  jumper  configurable between 1.2V and 5.0V (Table 4) and can deliver 2A of current.

## EN for the MAX25302A/MAX25302B

The EV kit provides a jumper JU101 to enable or disable the  MAX25302A  (or  the  MAX25302B  after  IC  replacement). See Table 1 for jumper setting of jumper JU101.

## GS for the MAX25302B

When  evaluating  the  MAX25302B,  the  Ground  Sense (GS)  pin  must  be  connected  to  ground  to  stabilize  the output  with  load.  The  EV  kit  provides  a  jumper  SELA  to connect the MAX25302B GS pin to ground. See Table 2 for jumper setting of jumper SELA.

## POK for the MAX25302B

The EV kit provides a test point to access the POK output signal from the MAX25302B. Remove shunt from jumper SELB  to  access  the  MAX25302B  POK  test  point.  See Table 3 for jumper setting of jumper SELB.

## Evaluating the MAX25302B

The EV kit  can  evaluate  the  MAX25302B  after  IC  (U1) replacement.  When  evaluating  the  MAX25302B,  modify the EV kit with the following steps:

- 1) Replace U1 with the MAX25302BATD/V+.
- 2) Install feedback resistors R101 and R102 to obtain the desired output voltage between 0.6V and 5.3V. Refer to the MAX25302 IC data sheet for feedback resistor calculations.

## Evaluates: MAX25302A/MAX25302B

## Output Selection (SELA and SELB) for the MAX25302A

The  EV  kit  provides  a  set  of  jumpers  SELA  and  SELB to configure the output voltage of the MAX25302A. See Table 4 for jumper setting of jumpers SELA and SELB.

## Table 1. EN on MAX25302A/MAX25302B (JU101)

| JU101 SHUNT POSITION   | DESCRIPTION        |
|------------------------|--------------------|
| 1-2*                   | Enabled. EN = IN   |
| 2-3                    | Disabled. EN = GND |

## Table 2. GS on MAX25302B (SELA)

| SELA SHUNT POSITION   | DESCRIPTION                                  |
|-----------------------|----------------------------------------------|
| 1-2                   | Not allowed (for MAX25302A output selection) |
| 2-3*                  | GS = GND                                     |

## Table 3. POK on MAX25302B (SELB)

| SELA SHUNT POSITION   | DESCRIPTION                                  |
|-----------------------|----------------------------------------------|
| 1-2                   | Not allowed (for MAX25302A output selection) |
| 2-3                   | Not allowed (for MAX25302A output selection) |
| Not Installed*        | Access signal at the POK test point          |

│

## Table 4. SELA and SELB on MAX25302A (SELA, SELB)

| SELA           | SELA            | SELB           | SELB            |                |
|----------------|-----------------|----------------|-----------------|----------------|
| SHUNT POSITION | SELA CONNECTION | SHUNT POSITION | SELB CONNECTION | OUTPUT VOLTAGE |
| Not Installed  | Hi-Z            | 1-2            | IN              | 1.2            |
| 1-2            | IN              | Not Installed  | Hi-Z            | 1.5            |
| Not Installed  | Hi-Z            | 2-3            | GND             | 1.8            |
| Not Installed  | Hi-Z            | Not Installed  | Hi-Z            | 2.5            |
| 2-3            | GND             | 2-3            | GND             | 3.0            |
| 2-3            | GND             | 1-2            | IN              | 3.1            |
| 2-3            | GND             | Not Installed  | Hi-Z            | 3.3            |
| 1-2            | IN              | 2-3            | GND             | 4.0            |
| 1-2*           | IN              | 1-2*           | IN              | 5.0            |

## Component Suppliers

| SUPPLIER                                | WEBSITE            |
|-----------------------------------------|--------------------|
| Murata/TOKO                             | www.murata.com     |
| TDK                                     | www.tdk.com        |
| Samsung Electro-Mechanics America, Inc. | www.samsungsem.com |

Note: Indicate that you are using the MAX25302A/MAX25302B when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25302EVKIT# | EV Kit |

│

## MAX25302 EV Kit Bill of Materials

| ITEM   | REF_DES                  | DNI/DNP   |   QTY | MFG PART #                                                                 | MANUFACTURER                         | VALUE           | DESCRIPTION                                                                                                                                        |
|--------|--------------------------|-----------|-------|----------------------------------------------------------------------------|--------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | C101                     | -         |     1 | C0603C473K5RAC; GRM188R71H473KA61; GCM188R71H473KA55; CGA3E2X7R1H473K080AA | KEMET;MURATA; MURATA;TDK             | 0.047µF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.047µF; 50V; TOL = 10%; MODEL = X7R; TG = -55°C TO +125°C; TC = X7R                                          |
| 2      | C102, C103               | -         |     2 | GRM31CR70J226K; GCM31CR70J226KE23                                          | MURATA;MURATA                        | 22µF            | CAPACITOR; SMT (1206); CERAMIC CHIP; 22µF; 6.3V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C TO +125°C; TC = X7R                                     |
| 3      | GND, IN, OUT             | -         |     3 | 108-0740-001                                                               | EMERSON NETWORK POWER                | 108-0740-001    | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                           |
| 4      | JU101, SELA, SELB        | -         |     3 | PEC03SAAN                                                                  | SULLINS                              | PEC03SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                          |
| 5      | R3                       | -         |     1 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                             | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH | 0               | RESISTOR; 0603; 0 Ω ; 5%; JUMPER; 0.10W; THICK FILM                                                                                                |
| 6      | SU1-SU3                  | -         |     3 | STC02SYAN                                                                  | SULLINS ELECTRONICS CORP.            | STC02SYAN       | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.256IN; BLACK; INSULATION = PBT CONTACT = PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL;                     |
| 7      | U1                       | -         |     1 | MAX25302AATD/V+                                                            | MAXIM                                | MAX25302BATD/V+ | EVKIT PART-IC; MAX25302BATD/V+; 2A AUTOMOTIVE LOW NOISE LDO LINEAR REGULATORS; PACKAGE OUTLINE DRAWING: 21-100420; LAND PATTERN DRAWING: 90-100149 |
| 8      | PCB                      | -         |     1 | MAX25302                                                                   | MAXIM                                | PCB             | PCB:MAX25302                                                                                                                                       |
| 9      | GND_PAD, IN_PAD, OUT_PAD | DNP       |     0 | 9020 BUSS                                                                  | WEICO WIRE                           | MAXIMPAD        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                           |
| 10     | C104                     | DNP       |     0 | N/A                                                                        | N/A                                  | OPEN            | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                                           |
| 11     | R1, R2, R4, R5           | DNP       |     0 | N/A                                                                        | N/A                                  | OPEN            | RESISTOR; 0603; OPEN; FORMFACTOR                                                                                                                   |
| 12     | R105                     | DNP       |     0 | N/A                                                                        | N/A                                  | SHORT           | PACKAGE OUTLINE 0603 RESISTOR                                                                                                                      |
| TOTAL  | TOTAL                    | TOTAL     |    15 |                                                                            |                                      |                 |                                                                                                                                                    |

## Evaluates: MAX25302A/MAX25302B

## MAX25302 EV Kit Schematic Diagram

<!-- image -->

│

## MAX25302 EV Kit PCB Layout Diagrams

MAX25302 EV Kit-Top Silkscreen

<!-- image -->

MAX25302 EV Kit-Top View

<!-- image -->

MAX25302 EV Kit-Bottom View

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/21            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX25302A/MAX25302B