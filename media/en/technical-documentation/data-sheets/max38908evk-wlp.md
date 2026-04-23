<!-- lastmod 2023-06-02 -->
## MAX38908 WLP Evaluation Kit

## General Description

The MAX38908 WLP evaluation kit (EV kit) evaluates the MAX38908 in a WLP package. The MAX38908 is a low input voltage, high output current linear regulator. The EV kit  operates  over  an  input  range  of  0.9V  to  5.5V  and  a bias voltage range from 2.7V to 20V. The EV kit provides a resistor configurable output voltage range from 0.6V to 5.0V. The EV kit can deliver up to 4A of current.

## Features

- Evaluates the MAX38908 IC in a 5x3 Bump, 0.4mm Pitch WLP
- 0.9V to 5.5V Input Range
- 2.7V to 20V Bias Voltage to Provide Wider Supply Options
- 0.6V to 5.0V Resistor Configurable Output Voltage (Default Output Set to 1V)
- Up to 4A Output Current
- Proven 4-Layer 1-oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX38908 WLP EV Kit Files

| FILE                           | DESCRIPTION             |
|--------------------------------|-------------------------|
| MAX38908 WLP EV Kit BOM        | EV Kit Bill of Material |
| MAX38908 WLP EV Kit PCB Layout | EV Kit Layout           |
| MAX38908 WLP EV Kit Schematic  | EV Kit Schematic        |

Ordering Information appears at end of data sheet.

319-100623; Rev 0; 10/20

Evaluates: MAX38908

## Quick Start

## Required Equipment

- MAX38908 WLP EV kit
- 5.5V, 5A DC power supply (IN)
- 3V, 10mA DC power supply (BIAS)
- Electronic load capable of 4A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation.

Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Verify  that  jumper  JU1  is  shunted  on  pins  1  and  2 (EV kit enabled).
- 2) Connect the 5.5V power supply between the IN and nearest GND terminal posts.
- 3) Connect the 3V (or higher, up to 20V) power supply between the BIAS and nearest GND terminal posts.
- 4) Connect the 4A electronic load between the OUT and nearest GND terminal posts.
- 5) Connect  the  DVM  between  the  OUT  and  nearest GND terminal posts.
- 6) Turn on the power supply.
- 7) Verify that the voltage at the OUT terminal post is 1V within the device and the resistor divider's accuracy specifications.
- 8) Decrease  the  power  supply  to  1.3V  (To  minimize power dissipation at full load).
- 9) Enable the electronic load.
- 10)  Verify that the voltage at the OUT terminal post is 1V within the device and the resistor divider's accuracy specifications.

<!-- image -->

## Detailed Description of Hardware

The MAX38908 WLP EV kit evaluates the MAX38908 in a WLP package. The MAX38908 is a low input voltage, high output current linear regulator that delivers 4A of output current.  This  regulator  requires  only  300mV  of  input-tooutput headroom at full load.

The MAX38908 WLP EV kit operates over an input range of 0.9V to 5.5V and a bias voltage range from 2.7V to 20V. The EV kit comes with the MAX38908ANL+ installed and the output voltage is set to 1V by 1% accurate feedback resistors R1 and R2. The EV kit output can be reconfigured  to  other  voltages  from  0.6V  to  5.0V  by  replacing feedback resistors R1 and R2. Refer to the MAX38908 IC data sheet for feedback resistor calculation.

## EN (Enable)

The EV kit provides a jumper JU1 to enable or disable the MAX38908. See Table 1 for jumper setting of jumper JU1.

## Table 1. EN (JU1)

| SHUNT POSITION   | DESCRIPTION         |
|------------------|---------------------|
| 1-2*             | Enabled. EN = BIAS* |
| 2-3              | Disabled. EN = GND  |

* Default position.

## Bias (BIAS)

The EV kit provides a bias input (BIAS) to accept an input voltage  to  control  the  LDO's  regulating  FET.  The  bias input voltage must be at least 2V above the output voltage. (i.e., if V OUT = 1.0V, then BIAS ≥ 3.0V, up to 20V.)

## Power OK (POK)

The EV kit provides a power ok (POK) output to indicate the device regulation status. The POK is open-drain and requires  a  pullup  resistor  between  10kΩ  to  100kΩ. The EV kit POK is pullup to V OUT through a 100kΩ resistor R3 by default. The POK can also be pullup to V IN  or an external voltage source. To pullup POK with V IN , remove resistor R3 and install a resistor with the desired value to R4.

## Component Suppliers

| SUPPLIER                                | WEBSITE            |
|-----------------------------------------|--------------------|
| Kemet                                   | www.kemet.com      |
| Murata/TOKO                             | www.murata.com     |
| TDK                                     | www.tdk.com        |
| Samsung Electro-Mechanics America. Inc. | www.samsungsem.com |

Note: Indicate that you are using the MAX38908 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX38908EVK#WLP | EV Kit |

#Denotes RoHS compliance.

Evaluates: MAX38908

│

## MAX38908 WLP EV Kit Bill of Materials

| ITEM   | REF_DES                                      | DNI/DNP   |   QTY | MFG PART #                                                        | MANUFACTURER                          | VALUE                        | DESCRIPTION                                                                                                                                 | COMMENTS   |
|--------|----------------------------------------------|-----------|-------|-------------------------------------------------------------------|---------------------------------------|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | BIAS, GND, GND2, IN, OUT                     | -         |     5 | 108-0740-001                                                      | EMERSON NETWORK POWER                 | 108-0740-001                 | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                    |            |
| 2      | BIAS_PAD, GND_PAD, GND_PAD2, IN_PAD, OUT_PAD | -         |     5 | 9020 BUSS                                                         | WEICO WIRE                            | MAXIMPAD                     | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                    |            |
| 3      | C1                                           | -         |     1 | C1005X7R1E473K050BC; GRM155R71E473K; GCM155R71E473KA55            | TDK;MURATA;MURATA                     | 0.047UF                      | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.047UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC                                                        |            |
| 4      | C2, C3                                       | -         |     2 | GRM31CR70J226K; GCM31CR70J226KE23                                 | MURATA;MURATA                         | 22UF                         | CAPACITOR; SMT (1206); CERAMIC CHIP; 22UF; 6.3V; TOL=10%; MODEL=GRM SERIES; TG=- 55 DEGC TO +125 DEGC; TC=X7R                               |            |
| 5      | C5                                           | -         |     1 | CGA4J3X7R1H105M125AB                                              | TDK                                   | 1UF                          | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 50V; TOL=20%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                              |            |
| 6      | JU1                                          | -         |     1 | PEC03SAAN                                                         | SULLINS                               | PEC03SAAN                    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                   |            |
| 7      | POK                                          | -         |     1 | 5002                                                              | KEYSTONE                              | N/A                          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                       |            |
| 8      | R1                                           | -         |     1 | CHPHT0603K1002FGT                                                 | VISHAY SFERNICE                       | 10K                          | RESISTOR; 0603; 10K OHM; 1%; 100PPM; 0.0125W; THICK FILM                                                                                    |            |
| 9      | R2                                           | -         |     1 | CRCW060315K0FK                                                    | VISHAY DALE                           | 15K                          | RESISTOR, 0603, 15K OHM,1%, 100PPM, 0.10W, THICK FILM                                                                                       |            |
| 10     | R3                                           | -         |     1 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; | VISHAY DALE;YAGEO; YAGEO;PANASONIC    | 100K                         | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                                                         |            |
| 11     | SU1                                          | -         |     1 | S1100-B;SX1100-B; STC02SYAN                                       | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B                     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                     |            |
| 12     | TP_GND                                       | -         |     1 |                                                                   | 5001 KEYSTONE                         | N/A                          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                          |            |
| 13     | TP_OUT                                       | -         |     1 |                                                                   | 5000 KEYSTONE                         | N/A                          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                            |            |
| 14     | U1                                           | -         |     1 | MAX38908ANL+                                                      | MAXIM                                 | MAX38908ANL+                 | EVKIT PART - IC; MAX38908ANL+; 4A PERFORMANCE NMOS LDO LINEAR REGULATORS; PACKAGE OUTLINE DRAWING: 21-100372; PACKAGE CODE: N151C2+1; WLP15 |            |
| 15     | PCB                                          | -         |     1 | MAX38908WLP                                                       | MAXIM                                 | PCB                          | PCB:MAX38908WLP -                                                                                                                           |            |
| 16     | J1-J4                                        | DNP       |     0 | METAL_STANDOFF_ 4-40_1/2_6.3                                      | MAXIM                                 | METAL_STANDOFF_ 4-40_1/2_6.3 | KIT; ASSY-STANDOFF 1/2IN; FEMALE- THREADED; HEX; 4-40; 1/2IN; ALUMINUM WITH SCREW; PHILLIPS; PAN; 4-40; 1/4IN; 18-8 STAINLESS STEEL         |            |
| 17     | C4                                           | DNP       |     0 | N/A                                                               | N/A                                   | OPEN                         | PACKAGE OUTLINE 0603 NON- POLAR CAPACITOR                                                                                                   |            |
| 18     | C6, C7                                       | DNP       |     0 | N/A                                                               | N/A                                   | OPEN                         | CAPACITOR; SMT (1206); OPEN; IPC MAXIMUM LAND PATTERN                                                                                       |            |
| 19     | C8, C9                                       | DNP       |     0 | N/A                                                               | N/A                                   | OPEN                         | CAPACITOR; SMT (0805); OPEN; FORMFACTOR                                                                                                     |            |
| 20     | C10, C11                                     | DNP       |     0 | N/A                                                               | N/A                                   | OPEN                         | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                                     |            |
| 21     | R4                                           | DNP       |     0 | N/A                                                               | N/A                                   | OPEN                         | PACKAGE OUTLINE 0603 RESISTOR                                                                                                               |            |
| 22     | R5                                           | DNP       |     0 | N/A                                                               | N/A                                   | SHORT                        | PACKAGE OUTLINE 0603 RESISTOR                                                                                                               |            |
| TOTAL  |                                              |           |    24 |                                                                   |                                       |                              |                                                                                                                                             |            |

Evaluates: MAX38908

## MAX38908 WLP EV Kit Schematic

<!-- image -->

│

Evaluates: MAX38908

## MAX38908 WLP EV Kit PCB Layout Diagrams

<!-- image -->

MAX38908 WLP EV Kit PCB Layout-Top Silkscreen

MAX38908 WLP EV Kit PCB Layout-Top Layer

<!-- image -->

MAX38908 WLP EV Kit PCB Layout-Internal Layer 2

<!-- image -->

Evaluates: MAX38908

│

## MAX38908 WLP EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX38908 WLP EV Kit PCB Layout-Internal Layer 3

MAX38908 WLP EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX38908 WLP EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

Evaluates: MAX38908

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplieG. 0a[iP IntegrateG reserYes the right to change the circuitr\ anG specifications without notice at an\ tiPe.

<!-- image -->

│

Evaluates: MAX38908